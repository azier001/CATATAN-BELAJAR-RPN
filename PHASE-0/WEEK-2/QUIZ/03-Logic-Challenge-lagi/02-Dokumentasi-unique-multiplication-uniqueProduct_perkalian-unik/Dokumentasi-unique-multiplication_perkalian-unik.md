# 🔢 Perkalian Unik — Product of Array Except Self

### ✨ _Menghitung hasil kali seluruh elemen array kecuali dirinya sendiri, dengan dua pendekatan berbeda_

> 🎯 **Tujuan:** Memahami logika `perkalianUnik(arr)` dari nol — mulai dari analisis pola, pembangunan kode bertahap, hingga evolusi solusi yang lebih ringkas dan profesional.

---

### 📑 Daftar Isi

| No  | Bagian                                      | Deskripsi                                                     |
| --- | ------------------------------------------- | ------------------------------------------------------------- |
| 🔍  | [Visualisasi & Analisis Pola](#visualisasi) | Tabel breakdown input → output & penemuan rumus               |
| 🧠  | [Algoritma Tahan Lupa](#algoritma)          | Step-by-step logika dengan penjelasan "Kenapa" + contoh angka |
| 🗺️  | [Blueprint + Kamus Variabel](#blueprint)    | Kerangka kode kosong & tabel penamaan variabel                |
| 🔨  | [Pendekatan Bertahap (Versi 1)](#bertahap)  | Membangun solusi Nested Loop step-by-step                     |
| 🚀  | [Evolusi Solusi (Versi 2)](#evolusi)        | Solusi `.map()` & `.reduce()` + perbandingan                  |
| ✍️  | [Naming Convention](#naming)                | Tabel ❌ Bad vs ✅ Good untuk kedua versi                     |
| ⚠️  | [Akurasi Logika — Gotchas](#gotchas)        | Jebakan fatal: membandingkan nilai vs indeks                  |
| ✅  | [Verifikasi](#verifikasi)                   | Test cases & cara membuktikan solusi benar                    |

---

<a name="visualisasi"></a>

## 🔍 Pilar 1 — Visualisasi & Analisis Pola

> [!TIP]
> 💡 **Analogi Mudah Dipahami**
>
> |     | Tanpa Perkalian Unik         | Dengan Perkalian Unik                           |
> | --- | ---------------------------- | ----------------------------------------------- |
> | 📝  | Kalikan semua angka di array | Kalikan semua angka **kecuali dirinya sendiri** |
> | 🔒  | `[2,4,6]` → `2 × 4 × 6 = 48` | `[2,4,6]` → `[4×6, 2×6, 2×4]` = `[24, 12, 8]`   |

### 📊 Tabel Breakdown: Input `[2, 4, 6]`

| Indeks | Nilai Input | Angka yang Dikalikan | Hasil (Output) |
| :----: | :---------: | :------------------: | :------------: |
|   0    |    **2**    |        4 × 6         |     **24**     |
|   1    |    **4**    |        2 × 6         |     **12**     |
|   2    |    **6**    |        2 × 4         |     **8**      |

### 📊 Tabel Breakdown: Input `[1, 2, 3, 4, 5]`

| Indeks | Nilai Input | Angka yang Dikalikan | Hasil (Output) |
| :----: | :---------: | :------------------: | :------------: |
|   0    |    **1**    |    2 × 3 × 4 × 5     |    **120**     |
|   1    |    **2**    |    1 × 3 × 4 × 5     |     **60**     |
|   2    |    **3**    |    1 × 2 × 4 × 5     |     **40**     |
|   3    |    **4**    |    1 × 2 × 3 × 5     |     **30**     |
|   4    |    **5**    |    1 × 2 × 3 × 4     |     **24**     |

### 💡 Rumus / Logika Inti yang Ditemukan

```
Untuk setiap elemen di indeks i:
  → Kalikan SEMUA elemen di array
  → KECUALI elemen yang berada di indeks i itu sendiri
  → Kondisi: hanya kalikan jika indeks j TIDAK SAMA dengan indeks i (i !== j)
```

> [!IMPORTANT]
> 🔔 **Kunci utama:** Kita membandingkan **INDEKS** (`i !== j`), bukan **NILAI** (`arr[i] !== arr[j]`). Ini sangat krusial ketika array memiliki angka duplikat! Penjelasan lengkap ada di bagian [Gotchas](#gotchas).

---

<a name="algoritma"></a>

## 🧠 Pilar 2 — Algoritma Tahan Lupa

Setiap langkah di bawah menjelaskan **"Kenapa"** dan menyertakan **contoh angka konkret** agar tidak mudah lupa.

> 1. **Menyiapkan Penampung Hasil `[INISIALISASI]`**:
>    - Buat array kosong `result` untuk menampung jawaban akhir.
>    - _(Kenapa: Kita butuh tempat untuk menyimpan setiap hasil perkalian unik per indeks. Contoh: untuk input `[2, 4, 6]`, `result` akan terisi menjadi `[24, 12, 8]`)._

> 2. **Menyusuri Setiap Elemen Target `[LOOP UTAMA — for i]`** (Iterasi `i` dari `0` sampai `arr.length - 1`):
>    - Reset variabel `product` menjadi `1` di awal setiap iterasi.
>    - _(Kenapa: Angka 1 adalah identitas perkalian — berapa pun dikalikan 1 hasilnya tetap sama. Jika kita pakai 0, semua hasil akan jadi 0! Contoh: `i = 0`, `product = 1`, siap dikalikan dengan elemen lain)._

> 3. **Mengalikan Semua Elemen Kecuali Diri Sendiri `[LOOP DALAM — for j]`** (Iterasi `j` dari `0` sampai `arr.length - 1`):
>    - **Kondisi Kunci**: Jika `i !== j`, maka `product *= arr[j]`.
>    - _(Kenapa: Kita hanya ingin mengalikan angka-angka yang BUKAN berada di posisi target. Contoh: saat `i = 1` (nilai 4), loop `j` akan mengalikan `arr[0]=2` dan `arr[2]=6`, melewati `arr[1]=4` → `product = 1 × 2 × 6 = 12`)._

> 4. **Menyimpan Hasil ke Penampung `[PUSH]`**:
>    - Setelah loop `j` selesai, masukkan (`push`) nilai `product` ke dalam `result`.
>    - _(Kenapa: Setiap iterasi loop `i` menghasilkan satu nilai perkalian unik yang harus disimpan di posisi yang bersesuaian. Contoh: setelah `i = 1`, `result = [24, 12]`)._

> 5. **Mengembalikan Hasil Akhir `[RETURN]`**:
>    - Kembalikan array `result`.
>    - _(Kenapa: Function harus mengembalikan array baru, bukan mengubah array input asli. Contoh: `return [24, 12, 8]`)._

---

<a name="blueprint"></a>

## 🗺️ Pilar 3 — Kerangka Kode (Blueprint) + Kamus Variabel

### 📖 A. Kamus Variabel — Versi Nested Loop

| Lokasi / Peran       | ✅ Rekomendasi | ❌ Jangan Gunakan       | Alasan                                                                   |
| -------------------- | -------------- | ----------------------- | ------------------------------------------------------------------------ |
| Parameter Input      | `numbers`      | `arr`, `a`              | Lebih jelas bahwa isinya kumpulan angka                                  |
| Penampung Akhir      | `result`       | `res`, `hasil`, `r`     | Standar industri untuk return value                                      |
| Loop Utama (Luar)    | `targetIndex`  | `i`, `x`                | Menjelaskan bahwa ini indeks elemen yang sedang dicari perkalian uniknya |
| Akumulator Perkalian | `product`      | `totalPerkalian`, `mul` | Kata Inggris resmi untuk "hasil kali"                                    |
| Loop Dalam           | `currentIndex` | `j`, `y`                | Menjelaskan indeks elemen yang sedang diiterasi                          |

### 📖 B. Kamus Variabel — Versi Map & Reduce

| Lokasi / Peran              | ✅ Rekomendasi | ❌ Jangan Gunakan    | Alasan                                                   |
| --------------------------- | -------------- | -------------------- | -------------------------------------------------------- |
| Parameter Input             | `numbers`      | `arr`, `a`           | Konsisten dengan versi 1                                 |
| Elemen Luar (Tidak Dipakai) | `_`            | `el`, `elemenLuar`   | Standar industri: underscore = parameter tidak digunakan |
| Indeks Luar                 | `targetIndex`  | `i`, `idx`           | Konsisten dan deskriptif                                 |
| Accumulator                 | `product`      | `acc`, `total`       | Lebih spesifik dari `acc` yang terlalu generik           |
| Elemen Dalam                | `num`          | `elemenDalam`, `val` | Singkat dan jelas: satu angka tunggal                    |
| Indeks Dalam                | `currentIndex` | `j`, `jdx`           | Konsisten dengan versi 1                                 |

### 🗺️ C. Kerangka Kode (Blueprint) — Versi Nested Loop

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Dua lapis perulangan — luar memilih target, dalam mengalikan sisanya)

function perkalianUnik(numbers) {
  let result = [];                                          // [PENAMPUNG AKHIR]

  for (let targetIndex = 0; ...) {                          // [LOOP UTAMA] → indeks elemen target
    let product = 1;                                        //   [AKUMULATOR] → reset setiap iterasi

    for (let currentIndex = 0; ...) {                       //   [LOOP DALAM] → menyusuri semua elemen
      if (targetIndex !== currentIndex) { ... }             //     [KONDISI] → kalikan jika bukan diri sendiri
    }

    result.push(product);                                   //   [SIMPAN HASIL]
  }

  return result;                                            // [KEMBALIKAN]
}
```

### 🗺️ D. Kerangka Kode (Blueprint) — Versi Map & Reduce

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Map membuat array baru, Reduce mengakumulasi perkalian)

const perkalianUnik = (numbers) => {
  return numbers.map((_, targetIndex) => {                  // [MAP] → buat array baru, tangkap indeks target
    return numbers.reduce((product, num, currentIndex) => { //   [REDUCE] → akumulasi perkalian
      return ... ? ... : ...;                               //     [KONDISI TERNARY] → kalikan atau lewati
    }, 1);                                                  //   [NILAI AWAL] → 1 (identitas perkalian)
  });
};
```

---

<a name="bertahap"></a>

## 🔨 Pilar 4 — Pendekatan Bertahap (Step-by-Step)

Solusi ini dibangun secara bertahap, bukan langsung jadi. Berikut proses pembangunannya:

### 🪜 Step 1 — Struktur Dasar & Loop Utama

Mulai dari fondasi: array penampung + loop luar + variabel akumulator.

```javascript
const perkalianUnik = (arr) => {
  let hasil = [];

  for (let i = 0; i < arr.length; i++) {
    let totalPerkalian = 1;

    // loop dalam belum ada...
  }
};
```

> 📌 Di tahap ini kita hanya menyiapkan "kerangka rumah" — belum ada logika perkalian.

---

### 🪜 Step 2 — Menambahkan Loop Dalam + Kondisi + Push + Return

Melengkapi loop dalam dengan kondisi `i !== j`, push hasil, dan return.

```javascript
const perkalianUnik = (arr) => {
  let hasil = [];

  for (let i = 0; i < arr.length; i++) {
    let totalPerkalian = 1;

    for (let j = 0; j < arr.length; j++) {
      if (i !== j) totalPerkalian *= arr[j];
    }

    hasil.push(totalPerkalian);
  }

  return hasil;
};
```

> ✅ Solusi pertama sudah berjalan dengan benar!

---

### 🪜 Step 3 — Clean Code & English Naming (Final)

Menerapkan naming convention profesional.

```javascript
const perkalianUnik = (numbers) => {
  let result = [];

  // Loop utama untuk menetapkan indeks target
  for (let targetIndex = 0; targetIndex < numbers.length; targetIndex++) {
    let product = 1; // Reset akumulator hasil kali menjadi 1

    // Loop kedua untuk mengalikan semua elemen
    for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {
      // Hanya kalikan jika bukan indeks yang sama
      if (targetIndex !== currentIndex) {
        product *= numbers[currentIndex];
      }
    }

    result.push(product);
  }

  return result;
};
```

---

<a name="evolusi"></a>

## 🚀 Pilar 5 — Evolusi Solusi (Multi-Versi)

### 🔵 Versi 1 — Nested `for` Loop (Imperatif)

```javascript
const perkalianUnik = (numbers) => {
  let result = [];

  for (let targetIndex = 0; targetIndex < numbers.length; targetIndex++) {
    let product = 1;

    for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {
      if (targetIndex !== currentIndex) {
        product *= numbers[currentIndex];
      }
    }

    result.push(product);
  }

  return result;
};
```

---

### 🟢 Versi 2 — `.map()` & `.reduce()` (Deklaratif)

Dibangun secara bertahap dalam 3 langkah:

**Step 1** — Bungkus dengan `.map()` (return `1` sementara):

```javascript
const perkalianUnik = (arr) => {
  return arr.map((elemenLuar, i) => {
    return 1;
  });
};
```

**Step 2** — Pasang `.reduce()` di dalam `.map()` (return `acc` saja dulu):

```javascript
const perkalianUnik = (arr) => {
  return arr.map((elemenLuar, i) => {
    return arr.reduce((acc, elemenDalam, j) => {
      return acc;
    }, 1);
  });
};
```

**Step 3** — Tambahkan logika kondisional `if-else`:

```javascript
const perkalianUnik = (arr) => {
  return arr.map((elemenLuar, i) => {
    return arr.reduce((acc, elemenDalam, j) => {
      if (i !== j) {
        return acc * elemenDalam;
      } else {
        return acc;
      }
    }, 1);
  });
};
```

**Step 4 (Final)** — Refactor ke ternary operator + clean naming:

```javascript
const perkalianUnik = (numbers) => {
  return numbers.map((_, targetIndex) => {
    return numbers.reduce((product, num, currentIndex) => {
      return targetIndex !== currentIndex ? product * num : product;
    }, 1);
  });
};
```

---

### ⚖️ Tabel Perbandingan Kedua Versi

| Aspek                | 🔵 Versi 1: Nested `for` Loop                                  | 🟢 Versi 2: `.map` & `.reduce`                                         |
| :------------------- | :------------------------------------------------------------- | :--------------------------------------------------------------------- |
| **Gaya Penulisan**   | **Imperatif** — mendikte langkah demi langkah secara eksplisit | **Deklaratif** — memberi tahu _apa_ yang diinginkan, bukan _bagaimana_ |
| **Kemudahan Dibaca** | ✅ Mudah untuk pemula karena alur sangat eksplisit             | ✅ Disukai di _modern JS_ karena ringkas & tanpa efek samping          |
| **Performa**         | 🔴 O(N²) — loop di dalam loop                                  | 🔴 O(N²) — `.map` + `.reduce` tetap dua lapis perulangan               |
| **Mutasi Data**      | ⚠️ Ada mutasi (`result.push()`)                                | ✅ Immutable — tidak mengubah data asal                                |
| **Cocok Digunakan**  | Saat butuh alur eksplisit, debugging mudah                     | Saat bekerja dengan React/Next.js, functional programming              |

> [!TIP]
> 🏆 **Kesimpulan:** Jika bekerja dalam tim yang menggunakan **JavaScript modern** (React, Next.js, dll.), **Versi 2** lebih direkomendasikan karena gaya deklaratifnya yang ringkas, _immutable_, dan sejalan dengan paradigma _functional programming_. Namun, **Versi 1** tetap sangat baik untuk memahami fondasi logikanya.

---

<a name="naming"></a>

## ✍️ Pilar 6 — Naming Convention

### Tabel Perbandingan ❌ Bad vs ✅ Good

| Lokasi / Peran        | ❌ Bad                         | ✅ Good        | Alasan                                                             |
| :-------------------- | :----------------------------- | :------------- | :----------------------------------------------------------------- |
| Parameter Input       | `arr`, `a`                     | `numbers`      | Jelas bahwa isinya kumpulan angka                                  |
| Penampung Akhir       | `hasil`, `res`, `r`            | `result`       | Standar industri, singkat dan universal                            |
| Indeks Luar (Target)  | `i`, `x`                       | `targetIndex`  | Menjelaskan peran: ini indeks elemen yang dicari perkalian uniknya |
| Akumulator Perkalian  | `totalPerkalian`, `mul`, `acc` | `product`      | Kata resmi bahasa Inggris untuk "hasil kali"                       |
| Indeks Dalam          | `j`, `y`                       | `currentIndex` | Menjelaskan peran: ini indeks elemen yang sedang diproses          |
| Elemen Tak Terpakai   | `elemenLuar`, `el`, `val`      | `_`            | Konvensi JavaScript: underscore = parameter tidak digunakan        |
| Elemen Dalam (Reduce) | `elemenDalam`, `val`           | `num`          | Singkat, jelas: satu angka tunggal                                 |

> [!NOTE]
> 💡 **Kapan `i` dan `j` boleh dipakai?**
> Penggunaan `i` dan `j` masih **bisa diterima** jika:
>
> - Loop-nya sangat sederhana (1-2 baris di body loop).
> - Konteksnya sudah sangat jelas dari kode sekitarnya.
> - Tapi untuk challenge atau proyek yang akan didokumentasikan, selalu lebih baik menggunakan nama deskriptif!

---

<a name="gotchas"></a>

## ⚠️ Pilar 7 — Akurasi Logika (Gotchas & Peringatan)

> [!CAUTION]
> 🔴 **JEBAKAN FATAL: Membandingkan NILAI vs INDEKS**
>
> Kode di bawah ini **SALAH** untuk array yang memiliki angka duplikat:
>
> ```javascript
> // ❌ SALAH — membandingkan NILAI
> if (arr[i] !== arr[j]) multiple *= arr[j];
> ```
>
> Kode yang **BENAR**:
>
> ```javascript
> // ✅ BENAR — membandingkan INDEKS
> if (i !== j) product *= numbers[j];
> ```

### 🔍 Kenapa Ini Berbahaya?

Mari kita buktikan dengan test case `[1, 3, 3, 1]`:

**Skenario:** Memproses indeks ke-1 (`i = 1`, nilainya `3`):

| `j` | `arr[j]` | `arr[i] !== arr[j]` (❌ SALAH) |     `i !== j` (✅ BENAR)      |        Seharusnya?         |
| :-: | :------: | :----------------------------: | :---------------------------: | :------------------------: |
|  0  |    1     |    `3 !== 1` → ✅ Dikalikan    |   `1 !== 0` → ✅ Dikalikan    |        ✅ Dikalikan        |
|  1  |    3     |    `3 !== 3` → ❌ Dilewati     |    `1 !== 1` → ❌ Dilewati    | ❌ Dilewati (diri sendiri) |
|  2  |  **3**   |  `3 !== 3` → ❌ **Dilewati!**  | `1 !== 2` → ✅ **Dikalikan!** |  ✅ **Harus dikalikan!**   |
|  3  |    1     |    `3 !== 1` → ✅ Dikalikan    |   `1 !== 3` → ✅ Dikalikan    |        ✅ Dikalikan        |

> [!WARNING]
> 🐛 **Perhatikan baris `j = 2`!**
>
> - Nilai `arr[2]` adalah `3`, sama dengan `arr[1]` yang juga `3`.
> - Dengan perbandingan **NILAI** (`arr[i] !== arr[j]`), angka `3` di indeks ke-2 **ikut dilewati** padahal itu bukan dirinya sendiri!
> - Dengan perbandingan **INDEKS** (`i !== j`), angka `3` di indeks ke-2 **tetap dikalikan** karena posisinya berbeda.
>
> 📌 **Pelajaran:** Walaupun nilainya sama, **kalau posisinya (indeks) beda, tetap harus dihitung!** Selalu bandingkan **indeks**, bukan **nilai**.

```
Hasil dengan ❌ arr[i] !== arr[j] : [1, 3, 3, 1] → [9, 1, 1, 9]  ← SALAH!
Hasil dengan ✅ i !== j           : [1, 3, 3, 1] → [9, 3, 3, 9]  ← BENAR!
```

---

<a name="verifikasi"></a>

## ✅ Verifikasi — Cara Membuktikan Solusi Benar

### 1️⃣ Jalankan Test Cases

```javascript
// Masukkan salah satu versi solusi, lalu jalankan:
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
```

### 2️⃣ Pastikan Output Sesuai

```
✅ [2, 4, 6]        → [24, 12, 8]
✅ [1, 2, 3, 4, 5]  → [120, 60, 40, 30, 24]
✅ [1, 4, 3, 2, 5]  → [120, 30, 40, 60, 24]
✅ [1, 3, 3, 1]     → [9, 3, 3, 9]       ← Kasus duplikat!
✅ [2, 1, 8, 10, 2] → [160, 320, 40, 32, 160]
```

### 3️⃣ Validasi Khusus Kasus Duplikat

> [!IMPORTANT]
> 🔔 Test case `[1, 3, 3, 1]` adalah **validator utama** untuk memastikan kamu menggunakan perbandingan **indeks** (`i !== j`), bukan perbandingan **nilai** (`arr[i] !== arr[j]`). Jika hasilnya `[9, 1, 1, 9]` berarti ada bug!

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **21 Mei 2026** berdasarkan sesi mentoring langsung. Challenge `perkalianUnik` melatih pemahaman tentang **nested loop**, **array methods** (`.map` & `.reduce`), dan pentingnya **membandingkan indeks vs nilai** saat berurusan dengan data duplikat.
