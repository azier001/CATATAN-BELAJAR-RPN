# 🔢 Menghitung Jumlah Kata dalam Kalimat

### ✨ _Membangun algoritma penghitung kata dari nol — dari analisis pola hingga clean code production-ready_

> 🎯 **Tujuan:** Memahami cara kerja algoritma penghitung kata (`countWords`) menggunakan dua pendekatan berbeda — **State/Flag** dan **Split Regex** — lengkap dengan analisis edge cases, evolusi solusi, dan naming convention.

---

### 📑 Daftar Isi

| No  | Bagian                                               | Deskripsi                                                     |
| --- | ---------------------------------------------------- | ------------------------------------------------------------- |
| 📖  | [Latar Belakang](#latar-belakang)                    | Memahami masalah dan kenapa menghitung spasi saja tidak cukup |
| 🔍  | [Visualisasi & Analisis Pola](#visualisasi-analisis) | Tabel breakdown edge cases dan penemuan aturan logika         |
| 🗺️  | [Blueprint & Kamus Variabel](#blueprint)             | Kerangka kode kosong + panduan penamaan variabel              |
| 🛠️  | [Solusi Bertahap — Versi 1: State/Flag](#solusi-v1)  | Membangun solusi step-by-step dengan pendekatan manual        |
| 🚀  | [Evolusi Solusi — Versi 2: Split Regex](#solusi-v2)  | Pendekatan ringkas menggunakan built-in method JavaScript     |
| ⚖️  | [Perbandingan Kedua Versi](#perbandingan)            | Tabel head-to-head kapan pakai versi mana                     |
| 🏷️  | [Naming Convention & Clean Code](#naming)            | Tabel audit penamaan variabel ❌ vs ✅                        |
| ⚠️  | [Gotchas & Jebakan Logika](#gotchas)                 | Kesalahan umum yang harus diwaspadai                          |
| ✅  | [Verifikasi — Test Cases](#verifikasi)               | Membuktikan kedua solusi berjalan benar                       |

---

<a name="latar-belakang"></a>

## 📖 Latar Belakang

Kita diminta membuat fungsi `hitungJumlahKata(kalimat)` yang menerima sebuah string dan mengembalikan **jumlah kata** di dalamnya.

Sekilas terdengar mudah — tinggal hitung jumlah spasi lalu tambah 1, kan? 🤔

> [!TIP]
> 💡 **Analogi Mudah Dipahami**
>
> |     | Menghitung Spasi               | Menghitung Kata                                      |
> | --- | ------------------------------ | ---------------------------------------------------- |
> | 📝  | Menghitung jalan antar rumah   | Menghitung jumlah rumah itu sendiri                  |
> | 🔒  | Jalan bisa kosong, bisa banyak | Rumah hanya dihitung saat kita **masuk** ke dalamnya |

### 💡 Jadi, Apa Masalahnya?

Pendekatan "hitung spasi + 1" akan **gagal** pada banyak kasus:

```javascript
hitungJumlahKata(''); // Expected: 0, Actual: 1 ❌
hitungJumlahKata('hello  world'); // Expected: 2, Actual: 3 ❌
hitungJumlahKata('  hello  '); // Expected: 1, Actual: 4 ❌
```

Kita butuh pendekatan yang lebih cerdas — dan itulah yang akan kita bangun di dokumentasi ini!

---

<a name="visualisasi-analisis"></a>

## 🔍 Visualisasi & Analisis Pola

### 📊 Tabel Breakdown Edge Cases

| Input              | Jumlah Spasi | Hasil `spasi + 1` | Jumlah Kata Benar |       Status       |
| :----------------- | :----------: | :---------------: | :---------------: | :----------------: |
| `"I have a dream"` |      3       |         4         |       **4**       | ✅ Kebetulan benar |
| `"I"`              |      0       |         1         |       **1**       | ✅ Kebetulan benar |
| `"hello  world"`   |      2       |         3         |       **2**       |     ❌ Salah!      |
| `"  hello  "`      |      3       |         4         |       **1**       |     ❌ Salah!      |
| `""`               |      0       |         1         |       **0**       |     ❌ Salah!      |

### 🔑 3 Aturan Logika yang Ditemukan

Dari tabel di atas, kita menemukan **3 aturan emas**:

```text
🎯 Aturan 1 → Spasi di awal/akhir kalimat TIDAK dihitung sebagai pemisah kata
🎯 Aturan 2 → Spasi ganda di tengah dianggap SATU pemisah saja
🎯 Aturan 3 → Jika string hanya berisi spasi/kosong, jumlah kata = 0
```

### 🔄 Visualisasi Transisi State

Cara paling aman untuk menghitung kata: **deteksi kapan kita MASUK ke dalam kata baru**.

```text
String:  [  ] [  ] [ h ] [ e ] [ l ] [ l ] [ o ] [  ] [  ] [ w ] [ o ] [ r ] [ l ] [ d ]
State:   OUT  OUT   IN    IN    IN    IN    IN   OUT  OUT   IN    IN    IN    IN    IN
                ↑                                            ↑
             MASUK!                                       MASUK!
           kata ke-1                                    kata ke-2
          count = 1                                    count = 2
```

> **Pola kunci:** Kata baru terdeteksi hanya saat terjadi **transisi dari LUAR kata → DALAM kata** (karakter bukan spasi DAN sebelumnya di luar kata).

---

<a name="blueprint"></a>

## 🗺️ Blueprint & Kamus Variabel

### A. Kamus Variabel

| Lokasi / Peran   | ✅ Rekomendasi    | ❌ Jangan Gunakan              | Alasan                                                   |
| ---------------- | ----------------- | ------------------------------ | -------------------------------------------------------- |
| Parameter fungsi | `sentence`        | `s`, `str`, `kalimat`          | Noun deskriptif, standar industri                        |
| Hasil `.trim()`  | `trimmedSentence` | `formatted`, `clean`           | Spesifik menjelaskan operasi yang dilakukan              |
| Counter kata     | `wordCount`       | `count`, `total`, `jumlahKata` | `noun + Count` = konvensi counter standar                |
| Boolean flag     | `isInsideWord`    | `flag`, `state`, `diDalamKata` | Prefix `is` = standar boolean, dibaca seperti pertanyaan |
| Loop variable    | `i`               | —                              | Acceptable untuk index loop sederhana                    |

### B. Kerangka Kode (Blueprint) — Versi 1

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Baca karakter satu-satu, deteksi transisi masuk kata)

const countWords = (sentence) => {
  const trimmedSentence = sentence.trim();  // [NORMALISASI] → buang spasi ujung

  if (trimmedSentence.length === 0) return 0; // [VALIDASI] → string kosong = 0 kata

  let wordCount = 0;                        // [COUNTER] → penghitung kata
  let isInsideWord = false;                 // [FLAG] → apakah di dalam kata?

  for (let i = 0; ...) {                    // [LOOP] → telusuri setiap karakter
    if (... !== ' ') {                      //   [CEK] → karakter bukan spasi?
      if (!isInsideWord) {                  //     [TRANSISI] → baru masuk kata?
        wordCount++;                        //       [HITUNG] → kata baru!
        isInsideWord = true;                //       [UPDATE] → sekarang di dalam kata
      }
    } else {                                //   [SPASI] → karakter adalah spasi
      isInsideWord = false;                 //     [RESET] → keluar dari kata
    }
  }

  return wordCount;                         // [HASIL] → kembalikan total kata
};
```

---

<a name="solusi-v1"></a>

## 🛠️ Solusi Bertahap — Versi 1: State/Flag

> **⏱️ Pendekatan:** Manual character-by-character | **📋 Konsep:** State/Flag boolean

### Step 1 — Normalisasi & Validasi

Bersihkan spasi di ujung-ujung string dan tangani kasus string kosong.

_(Kenapa: `.trim()` menghapus spasi di awal/akhir agar tidak mengganggu penghitungan. Contoh: `"  hello  "` → `"hello"`.)_

```javascript
const countWords = (sentence) => {
  const trimmedSentence = sentence.trim();
  if (trimmedSentence.length === 0) return 0;
};
```

---

### Step 2 — Inisialisasi State & Loop

Siapkan counter (`wordCount`) dan flag (`isInsideWord`), lalu buat perulangan.

_(Kenapa: `wordCount = 0` karena belum ada kata yang terdeteksi. `isInsideWord = false` karena kita belum mulai membaca karakter apapun — posisi awal selalu "di luar kata".)_

```javascript
const countWords = (sentence) => {
  const trimmedSentence = sentence.trim();
  if (trimmedSentence.length === 0) return 0;

  let wordCount = 0;
  let isInsideWord = false;

  for (let i = 0; i < trimmedSentence.length; i++) {
    // logika akan diisi di step berikutnya
  }

  return wordCount;
};
```

---

### Step 3 — Logika Inti: Deteksi Transisi

Isi logika `if-else` bertingkat (_nested_) untuk mendeteksi kapan kata baru dimulai.

_(Kenapa nested: Pengecekan "bukan spasi" dan "di luar kata" harus terpisah agar karakter di tengah kata tidak mereset flag. Contoh: huruf `'e'` dalam `"he"` — karakter bukan spasi tapi kita sudah di dalam kata, jadi JANGAN lakukan apa-apa.)_

```javascript
const countWords = (sentence) => {
  const trimmedSentence = sentence.trim();
  if (trimmedSentence.length === 0) return 0;

  let wordCount = 0;
  let isInsideWord = false;

  for (let i = 0; i < trimmedSentence.length; i++) {
    if (trimmedSentence[i] !== ' ') {
      if (!isInsideWord) {
        wordCount++;
        isInsideWord = true;
      }
    } else {
      isInsideWord = false;
    }
  }

  return wordCount;
};
```

---

### 📋 Trace Eksekusi — `"I have a dream"`

| Index |   Char    | Bukan Spasi? | `isInsideWord` Sebelum | Aksi                           | `wordCount` | `isInsideWord` Sesudah |
| :---: | :-------: | :----------: | :--------------------: | :----------------------------- | :---------: | :--------------------: |
|   0   |    `I`    |      ✅      |        `false`         | MASUK kata baru! `wordCount++` |    **1**    |         `true`         |
|   1   |    ` `    |      ❌      |         `true`         | KELUAR kata. Reset flag        |      1      |        `false`         |
|   2   |    `h`    |      ✅      |        `false`         | MASUK kata baru! `wordCount++` |    **2**    |         `true`         |
|   3   |    `a`    |      ✅      |         `true`         | Masih di kata sama. Skip       |      2      |         `true`         |
|   4   |    `v`    |      ✅      |         `true`         | Masih di kata sama. Skip       |      2      |         `true`         |
|   5   |    `e`    |      ✅      |         `true`         | Masih di kata sama. Skip       |      2      |         `true`         |
|   6   |    ` `    |      ❌      |         `true`         | KELUAR kata. Reset flag        |      2      |        `false`         |
|   7   |    `a`    |      ✅      |        `false`         | MASUK kata baru! `wordCount++` |    **3**    |         `true`         |
|   8   |    ` `    |      ❌      |         `true`         | KELUAR kata. Reset flag        |      3      |        `false`         |
|   9   |    `d`    |      ✅      |        `false`         | MASUK kata baru! `wordCount++` |    **4**    |         `true`         |
| 10-13 | `r,e,a,m` |      ✅      |         `true`         | Masih di kata sama. Skip       |      4      |         `true`         |

🎊 **Hasil akhir:** `return 4` ✅

---

<a name="solusi-v2"></a>

## 🚀 Evolusi Solusi — Versi 2: Split Regex

> **⏱️ Pendekatan:** Built-in method | **📋 Konsep:** Belah string → hitung array

### 💡 Pergeseran Mental Model

```text
Versi 1: "Saya baca satu-satu, saya catat kapan masuk kata baru"
Versi 2: "Saya belah semua sekaligus, saya hitung potongannya"
```

### 💻 Kode Lengkap

```javascript
const countWords = (sentence) => {
  const trimmedSentence = sentence.trim();
  if (trimmedSentence.length === 0) return 0;

  return trimmedSentence.split(/\s+/).length;
};
```

### 📖 Cara Kerja `/\s+/`

```text
🎯 Fungsi    → Memotong string di setiap kelompok whitespace
📌 \s        → Karakter whitespace (spasi, tab, newline)
📌 +         → Satu atau lebih berturut-turut
🔐 Analogi   → Seperti pisau yang memotong roti di setiap celah,
               tidak peduli celahnya selebar 1 cm atau 5 cm
```

**Contoh eksekusi:**

```javascript
'I have a dream'.trim().split(/\s+/);
// → ["I", "have", "a", "dream"]
// → .length = 4 ✅

'hello  world'.trim().split(/\s+/);
// → ["hello", "world"]     (spasi ganda ditangani otomatis!)
// → .length = 2 ✅
```

---

<a name="perbandingan"></a>

## ⚖️ Perbandingan Kedua Versi

| Aspek          |      Versi 1 — State/Flag 🔵      |    Versi 2 — Split Regex 🟢    |
| :------------- | :-------------------------------: | :----------------------------: |
| Jumlah baris   |             ~15 baris             |            ~5 baris            |
| Readability    |            ⭐⭐⭐⭐⭐             |            ⭐⭐⭐⭐            |
| Memory (Space) |   🟢 $O(1)$ — hanya 2 variabel    | 🔴 $O(n)$ — membuat Array baru |
| Speed (Time)   |             🟢 $O(n)$             |           🟢 $O(n)$            |
| Perlu Regex?   |             ❌ Tidak              |             ✅ Ya              |
| Cocok untuk    | Interview, string besar, embedded |   Quick script, prototyping    |

> [!TIP]
> 🏆 **Kesimpulan:** Untuk **belajar** dan **interview**, gunakan Versi 1 karena menunjukkan pemahaman fundamental. Untuk **production code** sehari-hari di mana kecepatan pengembangan lebih penting, gunakan Versi 2.

---

<a name="naming"></a>

## 🏷️ Naming Convention & Clean Code

### Tabel Audit Penamaan

| Lokasi / Peran  | ❌ Versi Awal      | ✅ Versi Clean    | Alasan                                              |
| --------------- | ------------------ | ----------------- | --------------------------------------------------- |
| Nama fungsi     | `hitungJumlahKata` | `countWords`      | `verb + noun`, standar industri                     |
| Parameter       | `kalimat`          | `sentence`        | Noun deskriptif, bahasa Inggris                     |
| Hasil `.trim()` | `formatted`        | `trimmedSentence` | Spesifik: menjelaskan operasi `trim` yang dilakukan |
| Counter         | `jumlahKata`       | `wordCount`       | Konvensi `noun + Count`                             |
| Boolean flag    | `diDalamkata`      | `isInsideWord`    | Prefix `is` = standar boolean global                |

> [!IMPORTANT]
> 🔔 **Konvensi Boolean:** Selalu gunakan prefix `is`, `has`, `can`, atau `should`.
> Contoh: `isActive`, `hasPermission`, `canEdit`, `shouldRender`.

---

<a name="gotchas"></a>

## ⚠️ Gotchas & Jebakan Logika

> [!CAUTION]
> 🔴 **Gotcha #1: Jangan gabungkan pengecekan karakter dan flag dalam satu `if`!**
>
> ```javascript
> // ❌ SALAH — flag di-reset di tengah kata!
> if (char !== ' ' && isInsideWord === false) {
>   wordCount++;
>   isInsideWord = true;
> } else {
>   isInsideWord = false; // Bug: huruf 'e' di "he" akan masuk sini!
> }
>
> // ✅ BENAR — gunakan nested if
> if (char !== ' ') {
>   if (!isInsideWord) {
>     wordCount++;
>     isInsideWord = true;
>   }
> } else {
>   isInsideWord = false;
> }
> ```
>
> **Kenapa:** Jika digabung, karakter bukan spasi yang sudah di dalam kata (contoh: `'e'` dalam `"he"`) akan jatuh ke `else` dan mereset `isInsideWord = false`. Akibatnya huruf berikutnya dianggap kata baru!

> [!WARNING]
> 🐛 **Gotcha #2: `.split(' ')` biasa TIDAK menangani spasi ganda!**
>
> ```javascript
> 'hello  world'.split(' '); // → ["hello", "", "world"] — length = 3 ❌
> 'hello  world'.split(/\s+/); // → ["hello", "world"]     — length = 2 ✅
> ```
>
> **Kenapa:** `split(' ')` memotong di setiap satu spasi. Dua spasi berturut menghasilkan string kosong `""` di tengah array.

> [!WARNING]
> 🐛 **Gotcha #3: `"".split(/\s+/)` menghasilkan `[""]`, bukan `[]`!**
>
> ```javascript
> ''.split(/\s+/).length; // → 1 ❌ (padahal seharusnya 0)
> ```
>
> **Kenapa:** JavaScript menganggap string kosong mengandung 1 elemen kosong. Solusi: selalu validasi dengan `if (trimmedSentence.length === 0) return 0` **sebelum** melakukan `split`.

---

<a name="verifikasi"></a>

## ✅ Verifikasi — Test Cases

### 1️⃣ Jalankan Test Cases Standar

```javascript
console.log(countWords('I have a dream')); // 4
console.log(countWords('Never eat shredded wheat or cake')); // 6
console.log(countWords('A song to sing')); // 4
console.log(countWords('I')); // 1
console.log(countWords('I believe I can code')); // 5
```

Pastikan **semua baris** menghasilkan output yang sesuai:

```text
4  ← ✅
6  ← ✅
4  ← ✅
1  ← ✅
5  ← ✅
```

### 2️⃣ Uji Edge Cases Tambahan

```javascript
console.log(countWords('')); // 0 ← ✅ String kosong
console.log(countWords('   ')); // 0 ← ✅ Hanya spasi
console.log(countWords('hello  world')); // 2 ← ✅ Spasi ganda
console.log(countWords('  hello  ')); // 1 ← ✅ Spasi awal/akhir
```

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **20 Mei 2026** berdasarkan sesi mentoring langsung di **Google Antigravity**. Kedua versi solusi telah diverifikasi terhadap semua test case yang diberikan. Konsep State/Flag yang dipelajari di sini bisa diterapkan ke banyak problem solving lain seperti penghitungan kalimat, deteksi palindrome, dan parsing data.
