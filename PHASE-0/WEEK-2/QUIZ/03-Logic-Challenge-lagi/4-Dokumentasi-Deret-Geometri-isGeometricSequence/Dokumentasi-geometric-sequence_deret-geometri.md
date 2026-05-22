# 📐 Tentukan Deret Geometri

_Menguasai seni mendeteksi pola pengali tersembunyi di balik barisan angka — dari pemahaman konsep hingga kode yang elegan._

> 🎯 **Tujuan:** Membangun fungsi JavaScript yang dapat menentukan apakah sebuah array angka merupakan **deret geometri** yang valid, dengan memahami _mengapa_ setiap baris kode ditulis — bukan sekadar _bagaimana_.

---

## 📑 Daftar Isi

|  #  | Emoji | Topik                                       | Deskripsi Singkat                                 |
| :-: | :---: | ------------------------------------------- | ------------------------------------------------- |
|  1  |  🌍   | [Latar Belakang & Analogi](#latar-belakang) | Memahami deret geometri lewat dunia nyata         |
|  2  |  🔬   | [Visualisasi & Analisis Pola](#visualisasi) | Membedah angka untuk menemukan rumus rasio        |
|  3  |  🧩   | [Blueprint & Kamus Variabel](#blueprint)    | Kerangka kode kosong & penamaan yang benar        |
|  4  |  🪜   | [Pendekatan Bertahap](#bertahap)            | Step-by-step membangun solusi dari nol            |
|  5  |  ⚔️   | [Evolusi Solusi](#evolusi)                  | Imperative vs Declarative — mana yang lebih baik? |
|  6  |  🏷️   | [Clean Code & Naming Convention](#naming)   | Kenapa `ratio` jauh lebih baik dari `r`           |
|  7  |  ⚠️   | [Gotchas & Edge Cases](#gotchas)            | Jebakan tersembunyi yang sering diabaikan         |
|  8  |  🏁   | [Ringkasan & Catatan Akhir](#ringkasan)     | Penutup dan refleksi pembelajaran                 |

---

<a name="latar-belakang"></a>

## 🌍 1. Latar Belakang & Analogi

### Apa Itu Deret Geometri?

Deret geometri adalah barisan angka di mana **setiap angka diperoleh dengan mengalikan angka sebelumnya dengan suatu konstanta tetap**. Konstanta tetap ini disebut **rasio**.

```
┌─────────────────────────────────────────────────────┐
│              DERET GEOMETRI                         │
│                                                     │
│  Fungsi  : Mendeteksi pola pengali konstan          │
│  Status  : Fundamental — dasar matematika & coding  │
│  Analogi : Seperti menaiki tangga yang setiap       │
│            anaknya dua kali lebih tinggi dari        │
│            anak tangga sebelumnya                    │
└─────────────────────────────────────────────────────┘
```

> [!TIP]
>
> ### 💡 Analogi Dunia Nyata: Bakteri di Cawan Petri
>
> Bayangkan sebuah koloni bakteri yang **membelah diri setiap jam**:
>
> | Jam ke- | Jumlah Bakteri | Operasi    |
> | :-----: | :------------: | ---------- |
> |    0    |     **2**      | —          |
> |    1    |     **6**      | 2 × **3**  |
> |    2    |     **18**     | 6 × **3**  |
> |    3    |     **54**     | 18 × **3** |
> |    4    |    **162**     | 54 × **3** |
>
> Setiap jam, jumlah bakteri selalu **dikali 3** — inilah "rasio". Tidak peduli kita mengecek di jam berapa pun, pola pengalinya **selalu sama**. Itulah esensi deret geometri!
>
> Jika tiba-tiba di jam ke-3 jumlahnya menjadi **50** (bukan 54), maka pola rusak, dan barisan itu **bukan** deret geometri.

---

<a name="visualisasi"></a>

## 🔬 2. Visualisasi & Analisis Pola

### Membedah Array untuk Menemukan Rasio

Diberikan array: `[3, 6, 12, 24, 48]`

Pertanyaan kunci: **Bagaimana kita tahu ini deret geometri?**

Caranya: bagi setiap angka dengan angka **sebelumnya**, lalu periksa apakah hasilnya **selalu sama**.

| Index | Angka (`numbers[i]`) | Angka Sebelumnya (`numbers[i-1]`) | Hasil Bagi (`numbers[i] / numbers[i-1]`) |   Cocok dengan Rasio?   |
| :---: | :------------------: | :-------------------------------: | :--------------------------------------: | :---------------------: |
|   0   |          3           |                 —                 |        — _(tidak ada sebelumnya)_        |            —            |
|   1   |          6           |                 3                 |              6 / 3 = **2**               | ✅ _(ini jadi patokan)_ |
|   2   |          12          |                 6                 |              12 / 6 = **2**              |           ✅            |
|   3   |          24          |                12                 |             24 / 12 = **2**              |           ✅            |
|   4   |          48          |                24                 |             48 / 24 = **2**              |           ✅            |

> **Kesimpulan:** Semua hasil bagi = **2**. Rasio konstan → ✅ **Deret Geometri**.

### Contoh yang BUKAN Deret Geometri

Diberikan array: `[3, 6, 12, 25, 48]`

| Index | Angka | Angka Sebelumnya |  Hasil Bagi  |     Cocok?     |
| :---: | :---: | :--------------: | :----------: | :------------: |
|   0   |   3   |        —         |      —       |       —        |
|   1   |   6   |        3         |    **2**     | ✅ _(patokan)_ |
|   2   |  12   |        6         |    **2**     |       ✅       |
|   3   |  25   |        12        | **2.083...** |       ❌       |
|   4   |  48   |        25        |   **1.92**   |       ❌       |

> **Kesimpulan:** Hasil bagi tidak konsisten → ❌ **Bukan Deret Geometri**.

> [!NOTE]
>
> ### 🔑 Rumus Inti yang Ditemukan
>
> ```
> rasio = numbers[1] / numbers[0]        ← patokan awal
> validasi = numbers[i] / numbers[i-1]   ← cek setiap pasangan berikutnya
>
> Jika semua validasi === rasio → Deret Geometri ✅
> Jika ada yang berbeda         → Bukan Deret Geometri ❌
> ```

---

<a name="blueprint"></a>

## 🧩 3. Blueprint & Kamus Variabel

### Kerangka Kode Kosong (Blueprint)

Sebelum menulis kode final, mari pahami **struktur** yang kita butuhkan:

```javascript
const tentukanDeretGeometri = (________) => {
  // LANGKAH 1: Tentukan patokan rasio
  const ________ = ________ / ________;

  // LANGKAH 2: Periksa setiap pasangan angka berurutan
  for (let i = ____; i < ________; i++) {
    // LANGKAH 3: Bandingkan hasil bagi dengan rasio patokan
    if (________ / ________ !== ________) {
      return ________; // Langsung keluar jika tidak cocok
    }
  }

  // LANGKAH 4: Semua cocok? Kembalikan true
  return ________;
};
```

### Kamus Variabel — Penamaan yang Bermakna

| Bagian           | ❌ Bad (Buruk)  |  ✅ Good (Baik)  | Alasan                                                |
| ---------------- | :-------------: | :--------------: | ----------------------------------------------------- |
| Parameter fungsi | `arr`, `a`, `x` |    `numbers`     | Menjelaskan bahwa input adalah kumpulan angka         |
| Rasio pembanding | `r`, `d`, `val` |     `ratio`      | Langsung menggambarkan konsep matematis yang dimaksud |
| Elemen saat ini  | `el`, `v`, `n`  |   `currentNum`   | Menegaskan ini adalah "angka yang sedang diperiksa"   |
| Counter loop     |    `j`, `x`     | `i` atau `index` | `i` untuk loop counter sudah konvensi universal       |

> [!IMPORTANT]
>
> ### Prinsip Utama Penamaan
>
> **Kode ditulis sekali, tapi dibaca ratusan kali.**
>
> Ketika kamu menulis `r` sebagai nama variabel, kamu mungkin paham artinya _hari ini_. Tapi ketika kamu (atau rekan timmu) membaca kode ini **3 bulan kemudian**, `r` bisa berarti apa saja: `radius`? `result`? `response`? `row`?
>
> Dengan menulis `ratio`, tidak ada ambiguitas. Kode menjadi **self-documenting**.

---

<a name="bertahap"></a>

## 🪜 4. Pendekatan Bertahap — Membangun Solusi dari Nol

### Step 1: Mencari Patokan Rasio

**Kenapa kita butuh patokan?**
Karena untuk mengatakan "semua rasio sama", kita butuh satu nilai **acuan** untuk dibandingkan. Nilai acuan paling logis diambil dari **dua angka pertama** array.

```javascript
const ratio = numbers[1] / numbers[0];
// Contoh: numbers = [3, 6, 12, 24, 48]
// ratio  = 6 / 3 = 2
```

> _"Kenapa bukan `numbers[2] / numbers[1]`?"_
> Boleh saja, tapi elemen index 0 dan 1 **pasti ada** di array yang valid (minimal 2 elemen), jadi menggunakannya sebagai patokan adalah pilihan paling aman dan natural.

### Step 2: Validasi Sisa Angka

**Kenapa loop dimulai dari index 2?**
Karena index 0 dan 1 **sudah terpakai** untuk menghitung rasio patokan. Mereka sudah "lolos seleksi" secara otomatis. Yang perlu kita periksa adalah **sisa angka dari index 2 dan seterusnya**.

```javascript
for (let i = 2; i < numbers.length; i++) {
  // Contoh iterasi:
  // i=2 → 12 / 6  = 2  → cocok ✅
  // i=3 → 24 / 12 = 2  → cocok ✅
  // i=4 → 48 / 24 = 2  → cocok ✅
}
```

### Step 3: Bandingkan dan Putuskan (Early Return)

```javascript
if (numbers[i] / numbers[i - 1] !== ratio) {
  return false; // ← "Early Return": langsung keluar begitu ketemu yang tidak cocok
}
```

> [!TIP]
>
> ### 💡 Kenapa Early Return?
>
> Bayangkan array dengan **1 juta** angka, dan angka ke-3 sudah melanggar pola. Tanpa early return, kita tetap akan memeriksa **999.997 angka sisanya** — sia-sia!
>
> Dengan `return false` di dalam loop, kita **langsung berhenti** begitu menemukan pelanggaran pertama. Ini adalah teknik optimasi yang sangat umum dan direkomendasikan.

### Step 4: Hasil Final

```javascript
return true;
// Jika loop selesai tanpa pernah return false,
// berarti SEMUA rasio cocok → ini deret geometri!
```

### 🏗️ Kode Lengkap — Solusi Imperative

```javascript
const tentukanDeretGeometri = (numbers) => {
  const ratio = numbers[1] / numbers[0];

  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] / numbers[i - 1] !== ratio) return false;
  }

  return true;
};
```

```
// Alur eksekusi untuk [3, 6, 12, 24, 48]:
//
// ratio = 6/3 = 2
// i=2 → 12/6  = 2 === 2 ✅ lanjut
// i=3 → 24/12 = 2 === 2 ✅ lanjut
// i=4 → 48/24 = 2 === 2 ✅ lanjut
// Loop selesai → return true ✅
```

---

<a name="evolusi"></a>

## ⚔️ 5. Evolusi Solusi — Imperative vs Declarative

Setelah menguasai solusi dasar, saatnya **berevolusi** ke gaya penulisan yang lebih modern dan ekspresif.

### Solusi Declarative — Menggunakan `.every()`

#### Versi A: Dengan `.slice(1)`

```javascript
const tentukanDeretGeometri = (numbers) => {
  const ratio = numbers[1] / numbers[0];

  return numbers.slice(1).every((currentNum, index) => {
    return currentNum / numbers[index] === ratio;
  });
};
```

**Cara kerja `.slice(1)`:**

- `numbers.slice(1)` membuat array baru **tanpa elemen pertama**: `[6, 12, 24, 48]`
- Callback `.every()` menerima `currentNum` dan `index` **dari array yang sudah dipotong**
- `numbers[index]` merujuk ke array **asli** — yang berarti `numbers[0]` saat `index=0` pada array potongan adalah angka **sebelumnya** di array asli

```
numbers asli  : [3,  6,  12, 24, 48]
                 ↑   ↑    ↑   ↑   ↑
                [0] [1]  [2] [3] [4]

slice(1)      : [6,  12, 24, 48]
                 ↑    ↑   ↑   ↑
index slice   : [0]  [1] [2] [3]

Perbandingan:
  index=0 → 6  / numbers[0]=3  = 2 ✅
  index=1 → 12 / numbers[1]=6  = 2 ✅
  index=2 → 24 / numbers[2]=12 = 2 ✅
  index=3 → 48 / numbers[3]=24 = 2 ✅
```

#### Versi B: Tanpa Memotong Array

```javascript
const tentukanDeretGeometri = (numbers) => {
  const ratio = numbers[1] / numbers[0];

  return numbers.every((currentNum, index) => {
    if (index === 0) return true; // Skip elemen pertama
    return currentNum / numbers[index - 1] === ratio;
  });
};
```

### 📊 Tabel Perbandingan: Imperative vs Declarative

| Aspek             |       🔴 Imperative (`for` loop)        |          🟢 Declarative (`.every()`)           |
| ----------------- | :-------------------------------------: | :--------------------------------------------: |
| **Gaya**          |       Langkah-demi-langkah manual       |        Deklarasi "apa yang diinginkan"         |
| **Readability**   |        Baik, tapi lebih verbose         |          Sangat ringkas dan ekspresif          |
| **Early Return**  |       ✅ Native (`return false`)        | ✅ Otomatis (`.every()` berhenti saat `false`) |
| **Performa**      | ⚡ Sedikit lebih cepat (tanpa overhead) |     ⚡ Sangat mirip (perbedaan negligible)     |
| **Mutasi Array**  |                  Tidak                  |      Versi A: `.slice()` buat array baru       |
| **Idiomatik JS**  |            Klasik, universal            |        Modern, lebih _"JavaScript-ish"_        |
| **Kapan Dipakai** | Ketika butuh kontrol penuh atas iterasi |   Ketika ingin kode yang bersih & ekspresif    |

> [!NOTE]
>
> ### Mana yang "Lebih Baik"?
>
> Tidak ada jawaban mutlak. Keduanya **benar dan valid**. Namun dalam ekosistem JavaScript modern, gaya **declarative** dengan `.every()`, `.map()`, `.filter()` dll. cenderung lebih disukai karena:
>
> - Lebih mudah di-_compose_ (digabung dengan method chain lain)
> - Mengurangi kemungkinan bug off-by-one
> - Lebih mudah dibaca oleh developer lain
>
> **Rekomendasi:** Kuasai keduanya. Gunakan _imperative_ untuk memahami mekanisme dasar, lalu _evolusi_ ke _declarative_ untuk kode produksi.

---

<a name="naming"></a>

## 🏷️ 6. Clean Code & Naming Convention

### Transformasi Penamaan

```diff
- const tentukanDeretGeometri = (arr) => {
-   const r = arr[1] / arr[0];
-   for (let i = 2; i < arr.length; i++) {
-     if (arr[i] / arr[i - 1] !== r) return false;
-   }
-   return true;
- };

+ const tentukanDeretGeometri = (numbers) => {
+   const ratio = numbers[1] / numbers[0];
+   for (let i = 2; i < numbers.length; i++) {
+     if (numbers[i] / numbers[i - 1] !== ratio) return false;
+   }
+   return true;
+ };
```

### Kenapa Ini Penting?

| Variabel Lama | Masalah                                         | Variabel Baru | Keunggulan                                        |
| :-----------: | ----------------------------------------------- | :-----------: | ------------------------------------------------- |
|     `arr`     | Generik — array apa? Array string? Array objek? |   `numbers`   | Jelas bahwa isinya **angka-angka**                |
|      `r`      | Ambigu — `r`adius? `r`esult? `r`ow? `r`atio?    |    `ratio`    | Langsung menggambarkan konsep **rasio matematis** |
|     `el`      | Terlalu singkat — elemen apa?                   | `currentNum`  | Jelas: "angka yang **sedang** diperiksa"          |

> [!WARNING]
>
> ### ⚠️ Anti-Pattern: Variabel Satu Huruf
>
> Variabel satu huruf **hanya boleh** digunakan untuk:
>
> - **Loop counter**: `i`, `j`, `k` — ini sudah konvensi universal
> - **Callback singkat**: `x => x * 2` — ketika konteksnya sudah sangat jelas
>
> Di luar itu, **selalu gunakan nama deskriptif**. Kode bukan kompetisi siapa yang bisa menulis paling singkat — kode adalah **dokumen komunikasi** antar developer.

---

<a name="gotchas"></a>

## ⚠️ 7. Gotchas & Edge Cases

> [!CAUTION]
>
> ### 🚨 Bahaya #1: Pembagian dengan Nol
>
> ```javascript
> const ratio = numbers[1] / numbers[0];
> ```
>
> **Apa yang terjadi jika `numbers[0]` adalah `0`?**
>
> ```javascript
> // numbers = [0, 5, 10]
> // ratio = 5 / 0 = Infinity
> //
> // Lalu: 10 / 5 = 2
> // 2 !== Infinity → return false ❌
> //
> // Secara teknis [0, 0, 0] akan menghasilkan:
> // ratio = 0 / 0 = NaN
> // NaN !== NaN → return false ❌ (padahal bisa dianggap valid!)
> ```
>
> **Solusi Produksi:** Tambahkan validasi di awal fungsi:
>
> ```javascript
> if (numbers[0] === 0) {
>   return numbers.every((num) => num === 0);
> }
> ```

> [!WARNING]
>
> ### 🚨 Bahaya #2: Array Terlalu Pendek
>
> ```javascript
> // numbers = [5]
> // numbers[1] = undefined
> // ratio = undefined / 5 = NaN
> ```
>
> **Solusi:** Tambahkan guard clause:
>
> ```javascript
> if (numbers.length < 2) return true; // Array 0-1 elemen trivially valid
> ```

> [!WARNING]
>
> ### 🚨 Bahaya #3: Floating Point Precision
>
> ```javascript
> // numbers = [1, 0.1, 0.01]
> // ratio = 0.1 / 1 = 0.1
> //
> // 0.01 / 0.1 = 0.09999999999999999 (bukan 0.1!)
> // 0.09999999999999999 !== 0.1 → return false ❌
> ```
>
> Ini adalah masalah klasik **IEEE 754 floating point**. Dalam tantangan algoritma biasa, ini jarang diuji — tapi di kode produksi, pertimbangkan menggunakan perbandingan dengan toleransi epsilon:
>
> ```javascript
> Math.abs(currentRatio - ratio) < Number.EPSILON;
> ```

---

<a name="ringkasan"></a>

## 🏁 8. Ringkasan & Catatan Akhir

### Peta Perjalanan Pembelajaran

```
 🏁 MULAI
  │
  ▼
 🔬 Analisis Pola
  │  "Apa ciri deret geometri? → Rasio konstan!"
  │
  ▼
 📊 Visualisasi dengan Tabel
  │  "Breakdown index-per-index untuk 'melihat' rumusnya"
  │
  ▼
 🧩 Blueprint Kerangka Kode
  │  "Struktur dulu, detail kemudian"
  │
  ▼
 🪜 Bangun Step-by-Step (Imperative)
  │  "For loop + early return — fondasi yang solid"
  │
  ▼
 ⚔️ Evolusi ke Declarative
  │  ".every() — lebih ekspresif, lebih idiomatik"
  │
  ▼
 🏷️ Clean Code
  │  "arr→numbers, r→ratio — kode yang bicara sendiri"
  │
  ▼
 ⚠️ Kenali Gotchas
  │  "Divisi nol, NaN, floating point — siap hadapi semuanya"
  │
  ▼
 🎉 SELESAI — Siap Pakai di Produksi!
```

### Checklist Pemahaman

|  #  | Checkpoint                                                   | Status |
| :-: | ------------------------------------------------------------ | :----: |
|  1  | Memahami apa itu deret geometri dan rasio konstan            |   ✅   |
|  2  | Mampu membuat tabel breakdown untuk menemukan pola           |   ✅   |
|  3  | Menguasai solusi imperative (`for` loop + early return)      |   ✅   |
|  4  | Menguasai solusi declarative (`.every()` — kedua versi)      |   ✅   |
|  5  | Memahami pentingnya naming convention yang deskriptif        |   ✅   |
|  6  | Mengetahui edge cases: division by zero, NaN, floating point |   ✅   |

> [!IMPORTANT]
>
> ### 💎 Takeaway Utama
>
> Algoritma bukan tentang menghafal kode. Algoritma adalah tentang **memahami pola**, **menerjemahkannya ke langkah logis**, lalu **mengekspresikannya dalam kode yang bersih dan bermakna**.
>
> Ketika kamu memahami _mengapa_ setiap baris ditulis — bukan sekadar _apa_ yang ditulis — kamu tidak akan pernah lupa solusinya.

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **22 Mei 2026** berdasarkan sesi mentoring langsung di **Google Antigravity**. Challenge ini melatih pemahaman tentang konsep deret geometri, looping, perbandingan rasio, serta pola Early Return vs Flag Variable dalam JavaScript.
