# 📋 deepSum — Ringkasan Algoritma Semua Versi

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          📋 RINGKASAN ALGORITMA — COMPLETE REFERENCE 📋                 ║
║         Nested Loop · .flat+.reduce · Recursion                         ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-30%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Versi](https://img.shields.io/badge/Versi-3%20Solusi-success?style=for-the-badge)

---

## 🎯 Tujuan

- ✅ Ringkasan challenge dan kriteria dalam satu tempat
- ✅ Ringkasan algoritma semua versi secara detail
- ✅ Quick reference untuk review atau ujian

---

## 🧭 Quick Jump

| 🧩 Challenge | ✅ Versi 1 | ⚡ Versi 2 | 🔁 Versi 3 | 🧪 Test Cases | 📊 Perbandingan |
|:------------:|:---------:|:---------:|:---------:|:-------------:|:---------------:|
| [Jump](#-deskripsi-challenge) | [Jump](#-versi-1-nested-loop-refactored) | [Jump](#-versi-2-flat--reduce) | [Jump](#-versi-3-recursion) | [Jump](#-test-cases-lengkap) | [Jump](#-perbandingan-lengkap) |

---

# 🧩 DESKRIPSI CHALLENGE

## 📋 Soal

> ### 📋 Deskripsi
>
> Diberikan sebuah function **`deepSum(arr)`** yang menerima satu parameter:
>
> | Parameter | Tipe | Keterangan |
> |-----------|------|------------|
> | `arr` | `array` | Array bertingkat (nested array) yang berisi angka-angka |
>
> Implementasikan function **`deepSum`** untuk mendapatkan **jumlah semua angka** yang terdapat di dalam array bertingkat tersebut.

---

## 🔍 Kriteria

> **1.** Jika `arr` kosong (`[]`)
> → return string `'No number'`
>
> **2.** Jika `arr` berisi angka-angka dalam nested array
> → return jumlah semua angka

---

## 📊 Contoh-contoh

```javascript
// ✅ Normal case 1 — nested array 3 level
deepSum([
  [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
  [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
  [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
])
// → 316
```

```javascript
// ✅ Normal case 2 — grup dengan panjang array berbeda-beda
deepSum([
  [[20, 10], [15], [1, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
  [[3, 5, 1], [1, 5, 3], [1]],
  [[2]]
])
// → 156
```

```javascript
// ✅ Edge case — array kosong
deepSum([])
// → 'No number'
```

---

### Simulasi Penjumlahan (sebagian Normal Case 1):

```
arr = [[[4, 5, 6], [9, 1, 2, 10]], ...]

Group 1: [[4, 5, 6], [9, 1, 2, 10]]
  row [4, 5, 6]      → 4 + 5 + 6        = 15
  row [9, 1, 2, 10]  → 9 + 1 + 2 + 10   = 22
  subtotal = 37

...group berikutnya dst.

Total akhir → 316 ✅
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Parameter | `arr` — nested array berisi angka |
| Struktur | 3 level kedalaman (arr → group → row → number) |
| Output normal | Jumlah semua angka (`number`) |
| Edge case | `arr` kosong → return `'No number'` |
| Nama fungsi | `deep` mengisyaratkan bisa handle nested tak terbatas |

---

> 💡 **Aturan Sederhana:** Telusuri setiap level nested array sampai ketemu angka, lalu jumlahkan semuanya.

---

## ⚡ Quick Test

```javascript
// Test 1 — Edge case: array kosong
console.log(deepSum([]))
// → 'No number'
```

```javascript
// Test 2 — Normal case 1
console.log(deepSum([
  [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
  [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
  [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
]))
// → 316
```

```javascript
// Test 3 — Normal case 2
console.log(deepSum([
  [[20, 10], [15], [1, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
  [[3, 5, 1], [1, 5, 3], [1]],
  [[2]]
]))
// → 156
```

---

═══════════════════════════════════════════════════════════════════════

# ✅ VERSI 1: Nested Loop (Refactored)

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Pemula%20%7C%20Readable-green?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative-orange?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function deepSum(arr) {
  if (arr.length === 0) return 'No number'

  let total = 0

  for (const group of arr) {
    for (const row of group) {
      for (const number of row) {
        total += number
      }
    }
  }

  return total
}
```

</details>

### **Konsep Inti:**
```
Validasi arr → jika kosong, return 'No number'
Siapkan variabel total = 0
Loop setiap group di dalam arr        (level 1)
  Loop setiap row di dalam group      (level 2)
    Loop setiap number di dalam row   (level 3)
      Tambahkan number ke total
Return total
```

### **Step-by-Step (Detail):**

#### 🔴 Validasi Awal (Guard Clause):

1. **`if (arr.length === 0) return 'No number'`**
   - Cek apakah `arr` kosong sebelum proses apapun dimulai
   - `arr.length === 0` → tidak ada elemen di array → tidak ada angka untuk dijumlahkan
   - Langsung return `'No number'` tanpa menjalankan loop apapun
   - Disebut **guard clause** — keluar lebih awal jika kondisi tidak valid

#### 🟡 Persiapan:

2. **`let total = 0`**
   - Variabel akumulator untuk menampung hasil penjumlahan
   - Dideklarasikan dengan `let` karena nilainya akan berubah setiap iterasi
   - Dideklarasikan **di luar semua loop** agar nilainya tidak direset setiap iterasi
   - Dimulai dari `0` karena belum ada angka yang dijumlahkan

#### 🔄 Loop Level 1 — `for (const group of arr)`:

3. **Iterasi setiap `group` di dalam `arr`**
   - `group` = satu elemen dari `arr` → berupa array of arrays
   - Contoh: `group` = `[[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]]`
   - Loop ini berjalan sebanyak jumlah group di dalam `arr`

#### 🔄 Loop Level 2 — `for (const row of group)`:

4. **Iterasi setiap `row` di dalam `group`**
   - `row` = satu elemen dari `group` → berupa array of numbers
   - Contoh: `row` = `[4, 5, 6]`
   - Loop ini berjalan sebanyak jumlah row di dalam `group`

#### 🔄 Loop Level 3 — `for (const number of row)`:

5. **Iterasi setiap `number` di dalam `row`**
   - `number` = satu elemen dari `row` → berupa angka
   - Contoh: `number` = `4`, lalu `5`, lalu `6`
   - Loop ini berjalan sebanyak jumlah angka di dalam `row`

6. **`total += number`**
   - Tambahkan `number` ke `total`
   - Shorthand dari `total = total + number`
   - Dieksekusi setiap kali loop level 3 berjalan

#### 🔵 Di Luar Semua Loop:

7. **`return total`**
   - Kembalikan hasil penjumlahan semua angka
   - Harus ada **di luar semua loop** — jika di dalam loop, fungsi berhenti di iterasi pertama

### **Visualisasi untuk `arr` (sebagian Normal Case 1):**

```
arr = [[[4, 5, 6], [9, 1, 2, 10]], ...]

total = 0

─────────────────────────────────────────────
group = [[4, 5, 6], [9, 1, 2, 10]]
─────────────────────────────────────────────
  row = [4, 5, 6]
    number = 4  → total = 0  + 4  = 4
    number = 5  → total = 4  + 5  = 9
    number = 6  → total = 9  + 6  = 15

  row = [9, 1, 2, 10]
    number = 9  → total = 15 + 9  = 24
    number = 1  → total = 24 + 1  = 25
    number = 2  → total = 25 + 2  = 27
    number = 10 → total = 27 + 10 = 37

─────────────────────────────────────────────
...group berikutnya dst.
─────────────────────────────────────────────

return total → 316 ✅
```

### **Keywords:**
- 🛡️ **Guard Clause** — `if (arr.length === 0) return 'No number'` menangani edge case di awal
- 🔄 **Nested Loop** — 3 loop bertingkat untuk menelusuri 3 level nested array
- ➕ **Accumulator** — variabel `total` yang terus bertambah, dideklarasikan di luar loop
- 📖 **`for...of`** — syntax loop yang langsung memberikan nilai elemen tanpa perlu index

### **Kapan Pakai:**
- ✅ Belajar dan debugging — alur paling eksplisit dan mudah dipahami
- ✅ Struktur nested array sudah pasti dan tetap (selalu 3 level)
- ✅ Ingin memori paling efisien — O(1), tidak membuat array baru

### **Pitfalls (Jebakan Umum):**

**1) ❌ `total` dideklarasikan di dalam loop**
```javascript
// ❌ SALAH — total direset setiap group baru!
for (const group of arr) {
  let total = 0 // reset setiap iterasi!
  for (const row of group) {
    for (const number of row) {
      total += number
    }
  }
}

// ✅ BENAR — total di luar semua loop
let total = 0
for (const group of arr) {
  for (const row of group) {
    for (const number of row) {
      total += number
    }
  }
}
```

**2) ❌ `return` di dalam loop**
```javascript
// ❌ SALAH — berhenti setelah group pertama!
for (const group of arr) {
  for (const row of group) {
    for (const number of row) {
      total += number
    }
  }
  return total // keluar terlalu cepat!
}

// ✅ BENAR — return di luar semua loop
for (const group of arr) { ... }
return total
```

**3) ❌ Jumlah loop tidak sesuai level nested**
```javascript
// ❌ SALAH — hanya 2 loop untuk array 3 level
for (const group of arr) {
  for (const number of group) { // number masih array!
    total += number // NaN!
  }
}

// ✅ BENAR — 3 loop untuk 3 level
for (const group of arr) {
  for (const row of group) {
    for (const number of row) {
      total += number
    }
  }
}
```

### **💡 Insight Penting:**

> **Kenapa butuh tepat 3 nested loop?**
> Karena struktur data memiliki tepat 3 level kedalaman: `arr → group → row → number`. Setiap level butuh 1 loop untuk ditelusuri. Kurang dari 3 loop → tidak bisa mencapai angka. Lebih dari 3 loop → error karena mencoba loop angka.

> **Kapan pendekatan ini kurang tepat?**
> Ketika struktur nested array tidak selalu 3 level — bisa berubah-ubah. Dalam kasus itu, pertimbangkan Versi 3 (Recursion) yang lebih fleksibel.

> **Kompleksitas:**
> Waktu **O(n)** — setiap angka dikunjungi tepat 1 kali. Memori **O(1)** — hanya butuh 1 variabel tambahan `total`.

---

═══════════════════════════════════════════════════════════════════════

# ⚡ VERSI 2: `.flat()` + `.reduce()`

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Singkat%20%7C%20Modern-blue?style=flat-square)
![Style](https://img.shields.io/badge/Style-Functional-9cf?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function deepSum(arr) {
  if (arr.length === 0) return 'No number'

  return arr.flat(Infinity).reduce((total, number) => total + number, 0)
}
```

</details>

### **Konsep Inti:**
```
Validasi arr → jika kosong, return 'No number'
Ratakan semua level nested array menjadi 1 array flat → arr.flat(Infinity)
Jumlahkan semua angka dalam array flat → .reduce()
Return hasilnya langsung via method chaining
```

### **Step-by-Step (Detail):**

#### 🔴 Validasi Awal (Guard Clause):

1. **`if (arr.length === 0) return 'No number'`**
   - Cek apakah `arr` kosong sebelum proses apapun dimulai
   - `arr.length === 0` → tidak ada elemen di array → tidak ada angka untuk dijumlahkan
   - Langsung return `'No number'` tanpa menjalankan proses selanjutnya
   - Disebut **guard clause** — keluar lebih awal jika kondisi tidak valid

#### 🔄 Proses Utama:

2. **`return`**
   - Keyword `return` diletakkan langsung sebelum `arr.flat()` — tidak ada variabel perantara
   - Hasil akhir dari seluruh chain langsung dikembalikan ke pemanggil fungsi

3. **`arr.flat(Infinity)`**
   - Meratakan semua level nested array menjadi **1 array datar**
   - `Infinity` → ratakan semua level tanpa peduli kedalamannya
   - Menghasilkan array baru berisi semua angka secara berurutan
   - Contoh:
   ```javascript
   [[[4, 5, 6], [9, 1]], [[3, 4]]]
   // → [4, 5, 6, 9, 1, 3, 4]
   ```
   - Kenapa `Infinity` dan bukan angka tertentu?
   ```javascript
   arr.flat(1) // hanya 1 level → masih nested!
   arr.flat(2) // hanya 2 level → aman untuk 2 level saja
   arr.flat(Infinity) // semua level → selalu aman apapun strukturnya ✅
   ```

4. **`.reduce((total, number) => total + number, 0)`**
   - Dipanggil langsung pada hasil `.flat(Infinity)` via **method chaining**
   - Iterasi setiap angka dalam array flat, akumulasikan ke `total`
   - Parameter:
     - `total` → accumulator, nilainya terus bertambah setiap iterasi
     - `number` → elemen saat ini yang sedang diproses
     - `0` → nilai awal `total` sebelum iterasi pertama dimulai
   - Menghasilkan 1 nilai akhir — total semua angka

### **Visualisasi untuk `arr` (sebagian Normal Case 1):**

```
arr = [[[4, 5, 6], [9, 1, 2]], [[3, 4]]]

── STEP 1: arr.flat(Infinity) ────────────────────────────────
[4, 5, 6, 9, 1, 2, 3, 4]
  ↑ semua angka sudah rata dalam 1 array

── STEP 2: .reduce((total, number) => total + number, 0) ─────
total = 0   (nilai awal)

  number = 4  → total = 0  + 4  = 4
  number = 5  → total = 4  + 5  = 9
  number = 6  → total = 9  + 6  = 15
  number = 9  → total = 15 + 9  = 24
  number = 1  → total = 24 + 1  = 25
  number = 2  → total = 25 + 2  = 27
  number = 3  → total = 27 + 3  = 30
  number = 4  → total = 30 + 4  = 34

── STEP 3: return ────────────────────────────────────────────
return 34 ✅

(untuk full input Normal Case 1 → return 316 ✅)
```

### **Keywords:**
- 🛡️ **Guard Clause** — `if (arr.length === 0) return 'No number'` menangani edge case di awal
- 📐 **`.flat(Infinity)`** — meratakan nested array ke 1 level tanpa peduli kedalamannya
- 🔁 **`.reduce()`** — melipat semua elemen array menjadi 1 nilai menggunakan accumulator
- ➕ **Accumulator** — variabel `total` di dalam `.reduce()` yang terus bertambah setiap iterasi
- 🔗 **Method Chaining** — memanggil `.reduce()` langsung setelah `.flat()` dalam 1 ekspresi

### **Kapan Pakai:**
- ✅ Ingin kode singkat, modern, dan ekspresif hanya 1 baris logika
- ✅ Struktur nested array bisa berubah-ubah levelnya — `Infinity` handle semua kondisi
- ✅ Tidak terlalu khawatir dengan penggunaan memori ekstra

### **Pitfalls (Jebakan Umum):**

**1) ❌ Pakai `.flat()` tanpa argumen atau argumen yang kurang dalam**
```javascript
// ❌ SALAH — default hanya 1 level, array 3 level masih nested!
return arr.flat().reduce((total, number) => total + number, 0)

// ❌ SALAH — hanya aman untuk tepat 2 level
return arr.flat(2).reduce((total, number) => total + number, 0)

// ✅ BENAR — Infinity selalu aman untuk semua level
return arr.flat(Infinity).reduce((total, number) => total + number, 0)
```

**2) ❌ Lupa nilai awal `0` di `.reduce()`**
```javascript
// ❌ SALAH — tanpa nilai awal, elemen pertama jadi accumulator awal
// Jika array hanya 1 elemen → tidak error tapi logika tidak eksplisit
return arr.flat(Infinity).reduce((total, number) => total + number)

// ✅ BENAR — selalu berikan nilai awal 0 untuk penjumlahan
return arr.flat(Infinity).reduce((total, number) => total + number, 0)
```

**3) ❌ Lupa `return` sebelum `arr.flat()`**
```javascript
// ❌ SALAH — fungsi tidak return apapun → undefined
function deepSum(arr) {
  if (arr.length === 0) return 'No number'
  arr.flat(Infinity).reduce((total, number) => total + number, 0) // tidak di-return!
}

// ✅ BENAR
function deepSum(arr) {
  if (arr.length === 0) return 'No number'
  return arr.flat(Infinity).reduce((total, number) => total + number, 0)
}
```

### **💡 Insight Penting:**

> **Kenapa memori O(n) dan bukan O(1) seperti Versi 1?**
> Karena `.flat(Infinity)` membuat **array baru** yang menyimpan semua angka dalam 1 level. Array baru ini membutuhkan ruang di memori sebesar jumlah angka `n`. Berbeda dengan nested loop yang langsung menjumlahkan tanpa membuat array tambahan.

> **Kapan pendekatan ini paling tepat digunakan?**
> Ketika kamu ingin kode yang singkat dan modern, dan tidak terlalu khawatir dengan penggunaan memori ekstra. Sangat cocok untuk data kecil hingga menengah.

> **Kompleksitas:**
> Waktu **O(n)** — `.flat()` dan `.reduce()` masing-masing mengunjungi setiap angka 1 kali. Memori **O(n)** — `.flat()` membuat array baru berisi semua `n` angka.

---

═══════════════════════════════════════════════════════════════════════

# 🔁 VERSI 3: Recursion

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Fleksibel%20%7C%20Interview-purple?style=flat-square)
![Style](https://img.shields.io/badge/Style-Recursive-9cf?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function deepSum(arr) {
  if (arr.length === 0) return 'No number'

  function sum(item) {
    if (!Array.isArray(item)) return item
    return item.reduce((total, child) => total + sum(child), 0)
  }

  return sum(arr)
}
```

</details>

### **Konsep Inti:**
```
Validasi arr → jika kosong, return 'No number'
Definisikan inner function sum(item):
  Jika item bukan array (angka) → return item langsung   [BASE CASE]
  Jika item adalah array → loop isinya, panggil sum()    [RECURSIVE CASE]
    untuk setiap child — bisa angka atau array lagi
Panggil sum(arr) dan return hasilnya
```

### **Step-by-Step (Detail):**

#### 🔴 Validasi Awal (Guard Clause):

1. **`if (arr.length === 0) return 'No number'`**
   - Cek apakah `arr` kosong sebelum proses apapun dimulai
   - `arr.length === 0` → tidak ada elemen → tidak ada angka untuk dijumlahkan
   - Langsung return `'No number'` tanpa menjalankan proses selanjutnya
   - Disebut **guard clause** — keluar lebih awal jika kondisi tidak valid

#### 🟣 Inner Function:

2. **`function sum(item)`**
   - Fungsi di dalam fungsi — disebut **inner function**
   - Hanya bisa diakses dari dalam `deepSum`, tidak bocor ke scope luar
   - Menerima `item` yang bisa berupa **angka** maupun **array**
   - Inilah fungsi yang melakukan seluruh pekerjaan recursion

#### 🔴 Base Case:

3. **`if (!Array.isArray(item)) return item`**
   - **Kondisi berhenti** dari recursion
   - `Array.isArray(item)` → cek apakah `item` adalah array
   - `!Array.isArray(item)` → jika `item` **bukan** array (berarti angka) → return langsung
   - Tanpa base case, `sum` akan terus memanggil dirinya sendiri → **stack overflow**
   ```javascript
   // Contoh:
   Array.isArray([1, 2]) // → true  (ini array)
   Array.isArray(4)      // → false (ini angka)
   !Array.isArray(4)     // → true  → return 4 ✅
   ```

#### 🔄 Recursive Case:

4. **`return item.reduce((total, child) => total + sum(child), 0)`**
   - Jika `item` adalah array → loop semua isinya dengan `.reduce()`
   - Setiap elemen `child` dipanggil `sum(child)` lagi
   - `child` bisa jadi:
     - **Angka** → kena base case → return angkanya langsung
     - **Array** → masuk recursive case lagi → loop isinya lagi
   - `0` → nilai awal accumulator `total`
   - Proses ini terus berulang sampai semua `child` adalah angka

#### 🔵 Di Luar Inner Function:

5. **`return sum(arr)`**
   - Mulai proses recursion dari `arr` (array paling luar)
   - Hasil akhir dari seluruh proses recursion dikembalikan ke pemanggil

### **Visualisasi untuk `[[4, 5], [6]]`:**

```
return sum([[4, 5], [6]])
│
│  Array.isArray([[4, 5], [6]]) → true → masuk reduce
│  child pertama: [4, 5]
│  child kedua:   [6]
│
├── sum([4, 5])
│   │  Array.isArray([4, 5]) → true → masuk reduce
│   │  child pertama: 4
│   │  child kedua:   5
│   │
│   ├── sum(4)
│   │   Array.isArray(4) → false → return 4 ✅
│   │
│   └── sum(5)
│       Array.isArray(5) → false → return 5 ✅
│   │
│   └── total: 0 + 4 + 5 = 9
│
└── sum([6])
    │  Array.isArray([6]) → true → masuk reduce
    │  child pertama: 6
    │
    └── sum(6)
        Array.isArray(6) → false → return 6 ✅
    │
    └── total: 0 + 6 = 6

total akhir: 0 + 9 + 6 = 15 ✅
```

### **Keywords:**
- 🛡️ **Guard Clause** — `if (arr.length === 0) return 'No number'` menangani edge case di awal
- 🔁 **Recursion** — teknik di mana fungsi memanggil dirinya sendiri untuk menyelesaikan masalah yang lebih kecil
- 🛑 **Base Case** — kondisi berhenti — `!Array.isArray(item)` → item adalah angka, return langsung
- 🔄 **Recursive Case** — kondisi lanjut — item adalah array, loop isinya dan panggil `sum()` lagi
- 📦 **Inner Function** — fungsi `sum` yang didefinisikan di dalam `deepSum`, hanya bisa diakses dari dalam
- 🔁 **`.reduce()`** — melipat semua elemen array menjadi 1 nilai menggunakan accumulator
- 📚 **Stack Frame** — ruang memori yang dialokasikan setiap kali `sum()` dipanggil, dibebaskan setelah return

### **Kapan Pakai:**
- ✅ Struktur nested array tidak selalu 3 level — bisa berapa level saja
- ✅ Ingin solusi yang paling sesuai dengan nama fungsi `deepSum`
- ✅ Persiapan interview — recursion adalah topik yang sering ditanyakan

### **Pitfalls (Jebakan Umum):**

**1) ❌ Tidak ada base case**
```javascript
// ❌ SALAH — tanpa base case, recursion tidak pernah berhenti → stack overflow!
function sum(item) {
  return item.reduce((total, child) => total + sum(child), 0)
  // ketika child adalah angka → sum(4) → reduce(4) → ERROR!
}

// ✅ BENAR — base case wajib ada
function sum(item) {
  if (!Array.isArray(item)) return item // berhenti jika angka
  return item.reduce((total, child) => total + sum(child), 0)
}
```

**2) ❌ Lupa `return` di recursive case**
```javascript
// ❌ SALAH — lupa return → undefined
function sum(item) {
  if (!Array.isArray(item)) return item
  item.reduce((total, child) => total + sum(child), 0) // tidak di-return!
}

// ✅ BENAR — return wajib ada di kedua case
function sum(item) {
  if (!Array.isArray(item)) return item
  return item.reduce((total, child) => total + sum(child), 0)
}
```

**3) ❌ Lupa memanggil `sum(arr)` di luar inner function**
```javascript
// ❌ SALAH — inner function didefinisikan tapi tidak dipanggil → undefined
function deepSum(arr) {
  if (arr.length === 0) return 'No number'
  function sum(item) { ... }
  // lupa return sum(arr)!
}

// ✅ BENAR — panggil sum(arr) dan return hasilnya
function deepSum(arr) {
  if (arr.length === 0) return 'No number'
  function sum(item) { ... }
  return sum(arr)
}
```

**4) ❌ Lupa nilai awal `0` di `.reduce()` dalam sum**
```javascript
// ❌ SALAH — tanpa nilai awal, elemen pertama jadi accumulator
// Jika elemen pertama adalah array → akumulasi dengan array → NaN!
return item.reduce((total, child) => total + sum(child))

// ✅ BENAR — selalu berikan nilai awal 0
return item.reduce((total, child) => total + sum(child), 0)
```

### **💡 Insight Penting:**

> **Kenapa recursion paling cocok untuk `deepSum`?**
> Karena struktur nested array secara alami bersifat rekursif — array berisi array berisi array. Recursion memodelkan struktur ini dengan sempurna: setiap kali ketemu array, buka dan periksa lagi. Tidak perlu tahu berapa level dalamnya — selalu benar untuk semua kondisi.

> **Kenapa memori O(d) bukan O(n)?**
> Setiap pemanggilan `sum()` membuat 1 **stack frame** di memori. Stack frame hanya ada selama fungsi belum return. Pada satu waktu, jumlah stack frame yang aktif = kedalaman recursion saat ini = kedalaman nested array `d`. Setelah `sum()` return, stack frame-nya dibebaskan.

> **Kenapa pakai inner function `sum`, bukan `deepSum` memanggil dirinya sendiri?**
> Karena `deepSum` punya guard clause `if (arr.length === 0)` yang menggunakan `.length` — properti yang hanya ada di array. Jika `deepSum` dipanggil dengan angka (`deepSum(4)`), guard clause akan error. Inner function `sum` memisahkan logika recursion dari logika guard clause.

> **Kompleksitas:**
> Waktu **O(n)** — setiap angka dikunjungi tepat 1 kali. Memori **O(d)** — `d` = kedalaman nested array, setiap level recursion menyimpan 1 stack frame.

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES LENGKAP

═══════════════════════════════════════════════════════════════════════

```javascript
const testCases = [
  {
    input: [],
    expected: 'No number',
    desc: "Edge case — array kosong harus mengembalikan 'No number'"
  },
  {
    input: [
      [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
      [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
      [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
    ],
    expected: 316,
    desc: 'Normal case 1 — menjumlahkan seluruh angka dalam nested array 3 level'
  },
  {
    input: [
      [[20, 10], [15], [1, 1]],
      [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
      [[3, 5, 1], [1, 5, 3], [1]],
      [[2]]
    ],
    expected: 156,
    desc: 'Normal case 2 — grup dengan panjang array berbeda-beda'
  }
]

testCases.forEach(({ input, expected, desc }, index) => {
  const result = deepSum(input)
  const status = result === expected ? '✅ PASS' : '❌ FAIL'

  console.log(`Test Case #${index + 1}: ${status} - ${desc} | deepSum(input) = ${result}`)

  if (status === '❌ FAIL') {
    console.log('Expected:', expected)
    console.log('Result  :', result)
  }
})
```

**Output yang diharapkan:**
```
Test Case #1: ✅ PASS - Edge case — array kosong harus mengembalikan 'No number' | deepSum(input) = No number
Test Case #2: ✅ PASS - Normal case 1 — menjumlahkan seluruh angka dalam nested array 3 level | deepSum(input) = 316
Test Case #3: ✅ PASS - Normal case 2 — grup dengan panjang array berbeda-beda | deepSum(input) = 156
```

---

═══════════════════════════════════════════════════════════════════════

# 📊 PERBANDINGAN LENGKAP

═══════════════════════════════════════════════════════════════════════

| Aspek | ✅ Nested Loop | ⚡ .flat + .reduce | 🔁 Recursion |
|-------|:-------------:|:-----------------:|:-----------:|
| Jumlah baris logika | 6 baris | 1 baris | 4 baris |
| Fleksibilitas level | Hanya 3 level | Semua level | Semua level |
| Kompleksitas Waktu | O(n) | O(n) | O(n) |
| Kompleksitas Memori | **O(1)** | O(n) | O(d) |
| Variabel tambahan | `total` | Tidak ada | Stack frame |
| Cocok untuk pemula | ✅ Sangat cocok | ⚠️ Perlu paham method | ⚠️ Perlu paham recursion |
| Gaya penulisan | Imperatif | Functional | Rekursif |
| Butuh tahu level nested | ✅ Ya (3 loop) | ❌ Tidak | ❌ Tidak |

> `n` = total angka di seluruh nested array, `d` = kedalaman nested array

---

## 📈 Perbandingan Kompleksitas Visual

```
Waktu — semua sama:
  Nested Loop    O(n) ████████████████ sama
  flat + reduce  O(n) ████████████████ sama
  Recursion      O(n) ████████████████ sama

Memori — berbeda:
  Nested Loop    O(1) █               paling hemat
  Recursion      O(d) ████            tergantung kedalaman
  flat + reduce  O(n) ████████████████ paling boros (array baru)
```

---

## 🎯 Decision Guide

### Saya Pemula → pakai **Nested Loop (Refactored)**
- Paling mudah dibaca dan dipahami
- Alur eksekusi paling eksplisit — bisa di-trace satu per satu
- Tidak memerlukan pengetahuan method atau konsep khusus
- → **[Lihat Part 3](docs/03-refactoring-nested-loop-naming.md)** dan **[Part 6](docs/06-ringkasan-algoritma-nested-loop.md)**

### Saya ingin kode singkat & modern → pakai **`.flat()` + `.reduce()`**
- Hanya 1 baris logika
- Memanfaatkan built-in method JavaScript secara chaining
- Handle semua level nested dengan `Infinity`
- → **[Lihat Part 4](docs/04-refactoring-flat-reduce.md)** dan **[Part 7](docs/07-ringkasan-algoritma-flat-reduce.md)**

### Saya ingin solusi paling fleksibel → pakai **Recursion**
- Handle nested array tak terbatas levelnya
- Paling sesuai dengan nama fungsi `deepSum`
- Paling sering ditanya di interview
- → **[Lihat Part 5](docs/05-refactoring-recursion.md)** dan **[Part 8](docs/08-ringkasan-algoritma-recursion.md)**

### Saya ingin memori paling efisien → pakai **Nested Loop (Refactored)**
- O(1) memori — tidak membuat array baru sama sekali
- Cocok untuk data besar dengan struktur nested yang tetap
- → **[Lihat Part 3](docs/03-refactoring-nested-loop-naming.md)**

---

## 🔑 Key Takeaways

```
┌─────────────────────────────────────────────────────────────────────┐
│  💡 Semua Solusi Menghasilkan Output yang Sama                      │
│     Perbedaan hanya pada pendekatan, gaya, dan penggunaan memori    │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Guard Clause Wajib Ada di Semua Versi                           │
│     if (arr.length === 0) return 'No number'                        │
│     Tanpa ini, loop berjalan pada array kosong → bug!               │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Accumulator Wajib di Luar Loop                                  │
│     let total = 0 harus di luar semua loop                          │
│     Jika di dalam → reset setiap iterasi → hasil salah              │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Recursion Wajib Punya Base Case                                 │
│     if (!Array.isArray(item)) return item                           │
│     Tanpa base case → stack overflow!                               │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Pilih Sesuai Konteks                                            │
│     Belajar    → Nested Loop                                        │
│     Modern     → .flat() + .reduce()                               │
│     Fleksibel  → Recursion                                          │
└─────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

## 🎯 Quick Reference Card

| Versi | Highlight |
|-------|-----------|
| ✅ **Nested Loop** | Guard clause → `total = 0` → 3x `for...of` bertingkat → `total += number` → `return total` |
| ⚡ **flat + reduce** | Guard clause → `return arr.flat(Infinity).reduce((total, number) => total + number, 0)` |
| 🔁 **Recursion** | Guard clause → `function sum(item)` → base case → recursive case → `return sum(arr)` |

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
