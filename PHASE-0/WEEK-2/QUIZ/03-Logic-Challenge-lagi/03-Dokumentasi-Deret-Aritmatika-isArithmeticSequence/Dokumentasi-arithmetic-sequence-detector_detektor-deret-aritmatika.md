# 🔢 Dokumentasi Challenge: Deret Aritmatika

### ✨ _Menentukan apakah sebuah array merupakan deret aritmatika — dari analisis pola hingga kode fungsional modern_

> 🎯 **Tujuan:** Memahami konsep deret aritmatika, menerjemahkannya ke dalam kode JavaScript dengan pendekatan bertahap, lalu mengevolusi solusi ke beberapa versi yang lebih efisien dan clean.

---

### 📑 Daftar Isi

| No  | Bagian                                       | Deskripsi                               |
| --- | -------------------------------------------- | --------------------------------------- |
| 📊  | [Visualisasi & Analisis Pola](#visualisasi)  | Tabel breakdown selisih antar elemen    |
| 🧠  | [Algoritma Tahan Lupa](#algoritma)           | Step-by-step dengan penjelasan "Kenapa" |
| 🗺️  | [Kerangka Kode & Kamus Variabel](#blueprint) | Blueprint struktur + tabel penamaan     |
| 👣  | [Pendekatan Bertahap](#bertahap)             | Proses membangun kode dari nol          |
| 🔄  | [Evolusi Solusi](#evolusi)                   | 3 versi solusi + tabel perbandingan     |
| 🏷️  | [Naming Convention](#naming)                 | Tabel ❌ Bad vs ✅ Good                 |
| ⚠️  | [Gotchas & Peringatan](#gotchas)             | Jebakan umum yang harus diwaspadai      |

---

<a name="visualisasi"></a>

## 📊 Pilar 1 — Visualisasi & Analisis Pola

### 🔍 Apa yang Diminta Challenge?

```
🎯 Input   → Sebuah array berisi angka-angka
📌 Output  → true jika deret aritmatika, false jika bukan
🔐 Inti    → Cek apakah SELISIH antar elemen SELALU SAMA (konstan)
```

### 📈 Tabel Breakdown — Array `[2, 4, 6, 8]` ✅

| Index | Angka | Selisih dengan Angka Sebelumnya | Status  |
| :---: | :---: | :-----------------------------: | :-----: |
|   0   |   2   |       — _(angka pertama)_       |    —    |
|   1   |   4   |         `4 - 2` = **2**         | ✅ Sama |
|   2   |   6   |         `6 - 4` = **2**         | ✅ Sama |
|   3   |   8   |         `8 - 6` = **2**         | ✅ Sama |

> 🟢 **Kesimpulan:** Semua selisih = **2** (konstan). Ini **deret aritmatika**.

### 📉 Tabel Breakdown — Array `[2, 4, 6, 12, 24]` ❌

| Index | Angka | Selisih dengan Angka Sebelumnya |  Status  |
| :---: | :---: | :-----------------------------: | :------: |
|   0   |   2   |                —                |    —     |
|   1   |   4   |         `4 - 2` = **2**         | ✅ Sama  |
|   2   |   6   |         `6 - 4` = **2**         | ✅ Sama  |
|   3   |  12   |        `12 - 6` = **6**         | ❌ Beda! |
|   4   |  24   |       `24 - 12` = **12**        | ❌ Beda! |

> 🔴 **Kesimpulan:** Selisih berubah-ubah (2 → 2 → 6 → 12). Ini **BUKAN deret aritmatika**.

### 💡 Rumus Logika Inti yang Ditemukan

```
1. Hitung SELISIH PATOKAN  →  angka ke-2 dikurangi angka ke-1
2. Loop sisa angka          →  mulai dari angka ke-3 sampai terakhir
3. Bandingkan setiap selisih dengan PATOKAN
4. Jika ada yang BEDA       →  langsung return false
5. Jika semua SAMA          →  return true
```

> [!IMPORTANT]
> 🔔 **Kunci utamanya:** Deret aritmatika = selisih **KONSTAN**. Begitu kita menemukan satu saja selisih yang berbeda, kita bisa langsung memutuskan bahwa ini BUKAN deret aritmatika — tanpa perlu mengecek sisanya.

---

<a name="algoritma"></a>

## 🧠 Pilar 2 — Algoritma Tahan Lupa

Setiap langkah di bawah menjelaskan **"Kenapa"** di balik logikanya, bukan cuma rumusnya.

> 1. **Menentukan Selisih Patokan `[VARIABEL]`**
>    - Hitung `arr[1] - arr[0]` dan simpan ke variabel `diff`.
>    - _(Kenapa index 1 dan 0? Karena ini adalah dua angka paling awal — dari sini kita tahu "jarak resmi" yang harus diikuti semua angka lain. Contoh: array `[2, 4, 6, 8]` → `4 - 2` = **2**, jadi patokannya 2.)_

> 2. **Mengecek Sisa Angka Satu Per Satu `[FOR LOOP]`** (Iterasi `i` dari **2** sampai `arr.length - 1`):
>    - Hitung selisih angka saat ini dengan angka sebelumnya: `arr[i] - arr[i - 1]`.
>    - _(Kenapa mulai dari index 2? Karena selisih index 1 dan 0 sudah kita hitung sebagai `diff` — mengeceknya lagi di loop itu kerja dua kali/sia-sia. Contoh: `arr[2] - arr[1]` → `6 - 4` = 2 → cocok dengan `diff`.)_

> 3. **Early Return `[KONDISI IF]`**:
>    - Jika `arr[i] - arr[i - 1] !== diff`, langsung `return false`.
>    - _(Kenapa langsung return, bukan simpan ke variabel dulu? Karena begitu ketemu 1 saja yang beda, kita sudah tahu jawabannya — tidak perlu lanjut mengecek. Ini disebut pola **Early Return**, lebih hemat proses dan baris kode dibanding pola Flag Variable.)_

> 4. **Return True di Akhir `[DEFAULT RESULT]`**:
>    - Jika loop selesai tanpa ada yang `return false`, berarti semua selisih konstan → `return true`.
>    - _(Kenapa true-nya di luar loop? Karena kita menganut prinsip "bersalah sampai terbukti tidak bersalah" — kita asumsikan benar, dan hanya menolak kalau ada bukti pelanggaran.)_

---

<a name="blueprint"></a>

## 🗺️ Pilar 3 — Kerangka Kode (Blueprint) + Kamus Variabel

### 📖 A. Kamus Variabel

| Lokasi / Peran                 | ✅ Rekomendasi        | ❌ Jangan Gunakan     | Alasan                                                       |
| ------------------------------ | --------------------- | --------------------- | ------------------------------------------------------------ |
| Parameter Fungsi (Array Input) | `numbers`             | `arr`, `a`, `data`    | `numbers` langsung menjelaskan isinya adalah kumpulan angka  |
| Selisih Patokan                | `diff` / `difference` | `d`, `selisih`, `x`   | `diff` sudah menjadi singkatan standar lazim di dunia coding |
| Counter Loop                   | `i`                   | `x`, `z`              | `i` lazim digunakan untuk counter loop sederhana             |
| Angka Saat Ini (Fungsional)    | `currentNum`          | `c`, `current`, `val` | Mempertegas bahwa ini adalah _current number_                |

### 🏗️ B. Kerangka Kode (Blueprint)

**Versi For Loop (Mental Model: "Polisi Pemeriksa Selisih")**

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Loop mengecek selisih satu per satu)

function tentukanDeretAritmatika(numbers) {
  const diff = numbers[1] - numbers[0];  // [PATOKAN] selisih resmi

  for (let i = 2; ...) {                 // [LOOP] mulai dari index 2
    if (... !== diff) {                  //   [CEK] selisih saat ini vs patokan
      return false;                      //   [TOLAK] langsung keluar
    }
  }

  return true;                           // [TERIMA] semua lolos pengecekan
}
```

**Versi Fungsional (Mental Model: "Apakah SEMUA elemen patuh?")**

```javascript
// 🗺️ KERANGKA KODE (Mental Model: .every() mengecek kepatuhan semua elemen)

function tentukanDeretAritmatika(numbers) {
  const diff = numbers[1] - numbers[0]; // [PATOKAN] selisih resmi

  return numbers
    .slice(1) // [POTONG] buang elemen pertama
    .every((currentNum, index) => {
      // [CEK SEMUA] apakah setiap elemen...
      return (
        currentNum - numbers[index] === // ...selisihnya dengan elemen sebelumnya
        diff
      ); // ...sama dengan patokan?
    });
}
```

---

<a name="bertahap"></a>

## 👣 Pilar 4 — Pendekatan Bertahap (Step-by-Step)

Kode ini dibangun dalam 3 tahap selama sesi mentoring:

### Step 1 — Menentukan Selisih Patokan

```javascript
const tentukanDeretAritmatika = (arr) => {
  const diff = arr[1] - arr[0];

  console.log(diff); // Output: 2 (untuk array [2, 4, 6, 8])
};
```

> 🎯 **Tujuan step ini:** Memastikan kita bisa mengambil selisih antara elemen pertama dan kedua dengan benar. `console.log` digunakan untuk verifikasi sementara.

---

### Step 2 — Menambahkan Loop + Kondisi Pengecekan

```javascript
const tentukanDeretAritmatika = (arr) => {
  const diff = arr[1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) return false;
  }

  return true;
};
```

> 🎯 **Tujuan step ini:** Menerjemahkan logika "cek semua selisih" ke dalam kode. Menggunakan pola **Early Return** — langsung `return false` begitu ketemu pelanggaran.

---

### Step 3 — Optimasi Kecil (Loop Mulai dari Index 2)

```javascript
const tentukanDeretAritmatika = (arr) => {
  const diff = arr[1] - arr[0];

  for (let i = 2; i < arr.length; i++) {
    // ← Diubah dari i = 1 ke i = 2
    if (arr[i] - arr[i - 1] !== diff) return false;
  }

  return true;
};
```

> 🎯 **Tujuan step ini:** Menghilangkan pengecekan sia-sia di index 1 vs 0, karena `diff` sendiri sudah dihitung dari sana.

---

<a name="evolusi"></a>

## 🔄 Pilar 5 — Evolusi Solusi (3 Versi)

### Versi 1 — For Loop Dasar (Early Return)

```javascript
function tentukanDeretAritmatika(numbers) {
  const diff = numbers[1] - numbers[0];

  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] - numbers[i - 1] !== diff) {
      return false;
    }
  }

  return true;
}
```

### Versi 2 — For Loop dengan Flag Variable (Kode Awal Murid)

```javascript
function tentukanDeretAritmatika(arr) {
  const diff = arr[1] - arr[0];
  let isValid = true;

  for (let i = 1; i < arr.length - 1; i++) {
    const currentNumber = arr[i];
    const nextNumber = arr[i + 1];
    const currentDiff = nextNumber - currentNumber;

    if (currentDiff !== diff) {
      isValid = false;
      break;
    }
  }

  return isValid;
}
```

### Versi 3 — Fungsional dengan `.every()`

```javascript
function tentukanDeretAritmatika(numbers) {
  const diff = numbers[1] - numbers[0];

  return numbers.slice(1).every((currentNum, index) => {
    return currentNum - numbers[index] === diff;
  });
}
```

### ⚖️ Tabel Perbandingan 3 Versi

| Aspek               | Versi 1 (Early Return) 🟢 | Versi 2 (Flag Variable) 🟡 |    Versi 3 (`.every()`) 🔵     |
| ------------------- | :-----------------------: | :------------------------: | :----------------------------: |
| **Jumlah baris**    |          7 baris          |          12 baris          |            5 baris             |
| **Readability**     |         ✅ Tinggi         |    ✅ Tinggi (verbose)     |      ✅ Tinggi (ringkas)       |
| **Performa**        |      🟢 Paling cepat      |          🟢 Cepat          | 🟡 Sedikit overhead `.slice()` |
| **Memori tambahan** |         Tidak ada         |      1 variabel flag       |    1 array baru (`.slice`)     |
| **Gaya penulisan**  |     Imperatif klasik      |     Imperatif verbose      |       Fungsional modern        |
| **Cocok untuk**     |     Umum / interview      |    Pemula belajar alur     |      Proyek modern / tim       |

> [!TIP]
> 🏆 **Kapan pakai versi mana?**
>
> - **Versi 1** → Default terbaik untuk kebanyakan situasi. Cepat, ringkas, dan mudah dibaca.
> - **Versi 2** → Bagus saat belajar karena alurnya sangat eksplisit, tapi terlalu verbose untuk produksi.
> - **Versi 3** → Pilih jika tim kamu menggunakan gaya fungsional dan kamu ingin kode yang deklaratif.

---

<a name="naming"></a>

## 🏷️ Pilar 6 — Naming Convention

| Variabel         | ❌ Bad          | ✅ Good                        | Alasan                                            |
| ---------------- | --------------- | ------------------------------ | ------------------------------------------------- |
| Array input      | `arr`, `a`      | `numbers`                      | Langsung menjelaskan isinya adalah kumpulan angka |
| Selisih patokan  | `d`, `selisih`  | `diff` / `difference`          | Singkatan standar lazim di dunia coding           |
| Angka saat ini   | `c`, `x`, `val` | `currentNum` / `currentNumber` | Mempertegas bahwa ini adalah angka saat ini       |
| Angka berikutnya | `n`, `y`        | `nextNumber`                   | Langsung paham ini angka setelahnya               |
| Selisih saat ini | `cd`, `s`       | `currentDiff`                  | Konsisten dengan nama `diff` (patokan)            |
| Flag validitas   | `f`, `v`, `ok`  | `isValid`                      | Prefix `is` menandakan variabel boolean           |

> [!NOTE]
> 💡 **Kapan `i` boleh dipakai?**
> Variabel `i` boleh digunakan sebagai counter loop **HANYA** jika loop-nya sederhana dan pendek (1–3 baris di dalamnya). Jika loop sudah kompleks dengan banyak nested logic, gunakan nama deskriptif seperti `row`, `index`, atau `position`.

---

<a name="gotchas"></a>

## ⚠️ Pilar 7 — Gotchas & Peringatan

> [!CAUTION]
> 🔴 **Gotcha 1: Lupa `.slice(1)` pada versi `.every()`**
>
> ```javascript
> // ❌ SALAH — tanpa .slice(1)
> return arr.every((current, index) => {
>   return current - arr[index] === diff;
> });
> ```
>
> Tanpa `.slice(1)`, saat `index = 0` maka `current` dan `arr[index]` merujuk ke elemen yang SAMA. Hasilnya: `current - arr[0]` = `0`, yang tidak akan pernah sama dengan `diff` (kecuali `diff` kebetulan 0). Fungsi **selalu return false**!

> [!WARNING]
> 🟡 **Gotcha 2: Loop `i = 1` padahal `diff` sudah dari index 0 dan 1**
>
> ```javascript
> const diff = arr[1] - arr[0];
> for (let i = 1; ...) // ← Pengecekan index 1 vs 0 itu sia-sia!
> ```
>
> Ini bukan error, tapi kerja dua kali. Lebih efisien mulai dari `i = 2`.

> [!WARNING]
> 🟡 **Gotcha 3: Pola Flag Variable vs Early Return**
>
> ```javascript
> // ❌ VERBOSE — pakai flag + break
> let isValid = true;
> if (...) { isValid = false; break; }
> return isValid;
>
> // ✅ RINGKAS — pakai early return
> if (...) return false;
> return true;
> ```
>
> Kedua pola sama-sama benar, tapi **Early Return** lebih idiomatik di JavaScript modern. Kode lebih pendek, tidak perlu variabel tambahan, dan `return` otomatis menghentikan loop + fungsi sekaligus.

> [!NOTE]
> 💡 **Insight: Indexing "Maju" vs "Mundur"**
>
> Kode murid mengecek `nextNumber - currentNumber` (melihat ke depan), sementara kode mentor mengecek `arr[i] - arr[i-1]` (melihat ke belakang). Keduanya valid! Tapi ada perbedaan kecil:
>
> | Aspek      |      Melihat ke Depan (`arr[i+1]`)       | Melihat ke Belakang (`arr[i-1]`) |
> | ---------- | :--------------------------------------: | :------------------------------: |
> | Batas loop |           `i < arr.length - 1`           |         `i < arr.length`         |
> | Risiko     | Akses index di luar batas jika lupa `-1` |  Lebih aman, index selalu valid  |

---

## ✅ Test Cases & Verifikasi

```javascript
// Jalankan semua test case:
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true  ← selisih konstan: 1
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false ← selisih berubah di index 3
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true  ← selisih konstan: 2
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false ← ini deret geometri, bukan aritmatika
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false ← selisih berubah di index 4
```

```
Expected output:
true   ← ✅
false  ← ✅
true   ← ✅
false  ← ✅
false  ← ✅
```

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **22 Mei 2026** berdasarkan sesi mentoring langsung di **Google Antigravity**. Challenge ini melatih pemahaman tentang konsep deret aritmatika, looping, perbandingan selisih, serta pola Early Return vs Flag Variable dalam JavaScript.
