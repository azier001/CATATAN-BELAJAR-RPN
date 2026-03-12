# 📚 deepSum - PART 5: REFACTORING — RECURSION

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           ✨ PART 5: REFACTORING — RECURSION ✨                          ║
║                                                                          ║
║           Dari 3 Nested Loop ke Fungsi yang Memanggil Dirinya Sendiri    ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-orange)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🎁 Analogi | 🔁 Recursion | 🛑 Base Case | 📦 Inner Function | ✅ Kode Refactoring | 🧪 Test Cases |
|:----------:|:-----------:|:-----------:|:-----------------:|:------------------:|:-------------:|
| [Jump](#-analogi-membuka-kotak-hadiah) | [Jump](#-apa-itu-recursion) | [Jump](#-base-case--recursive-case) | [Jump](#-inner-function) | [Jump](#-kode-refactoring-final) | [Jump](#-test-cases) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami konsep recursion dengan analogi yang mudah dipahami
- ✅ Tahu apa itu base case dan kenapa wajib ada
- ✅ Memahami perbedaan base case dan recursive case
- ✅ Mengerti cara kerja inner function
- ✅ Bisa membaca dan memahami kode recursion step-by-step

---

## 🎁 Analogi: Membuka Kotak Hadiah

Bayangkan kamu punya **kotak besar** yang di dalamnya ada **kotak-kotak kecil**, dan di dalam kotak kecil itu baru ada **angka-angka**.

Tugasmu: **jumlahkan semua angka.**

Cara kerjamu:
> "Kalau yang aku pegang **angka** → catat angkanya.
> Kalau yang aku pegang **kotak** → buka kotaknya, periksa isinya satu per satu."

Nah, itulah persis cara kerja recursion di sini — setiap kali ketemu kotak, buka dan periksa lagi sampai ketemu angka.

---

## 🔁 Apa itu Recursion?

**Recursion** adalah teknik di mana sebuah fungsi **memanggil dirinya sendiri** untuk menyelesaikan masalah yang lebih kecil, sampai ketemu kondisi berhenti.

```javascript
// Contoh sederhana — countdown
function countdown(n) {
  if (n === 0) return  // kondisi berhenti
  console.log(n)
  countdown(n - 1)     // panggil diri sendiri dengan nilai lebih kecil
}

countdown(3)
// 3, 2, 1
```

---

## 🛑 Base Case & Recursive Case

Setiap recursion selalu punya 2 bagian:

| Bagian | Penjelasan |
|--------|------------|
| **Base Case** | Kondisi berhenti — kapan fungsi tidak memanggil diri sendiri lagi |
| **Recursive Case** | Kondisi lanjut — fungsi memanggil diri sendiri dengan input yang lebih kecil |

```javascript
function sum(item) {
  // Base case — ini angka, langsung return
  if (!Array.isArray(item)) return item

  // Recursive case — ini array, loop dan panggil sum() lagi
  return item.reduce((total, child) => total + sum(child), 0)
}
```

> ⚠️ **Tanpa base case**, fungsi akan terus memanggil dirinya sendiri tanpa henti hingga terjadi **stack overflow** (memori habis).

---

## 📦 Inner Function

`sum` didefinisikan sebagai **inner function** — fungsi di dalam fungsi.

```javascript
function deepSum(arr) {
  if (arr.length === 0) return 'No number'

  function sum(item) { // ← inner function
    // ...
  }

  return sum(arr)
}
```

**Kenapa pakai inner function?**

| Alasan | Penjelasan |
|--------|------------|
| **Enkapsulasi** | `sum` hanya bisa diakses dari dalam `deepSum` — tidak bocor ke scope luar |
| **Pemisahan tugas** | `deepSum` menangani guard clause dan return, `sum` menangani recursion |
| **Nama yang bersih** | Nama `sum` bisa dipakai di dalam tanpa konflik dengan nama lain di luar |

---

## ✅ Kode Refactoring Final

```javascript
function deepSum(arr) {
  if (arr.length === 0) return 'No number'

  function sum(item) {
    if (!Array.isArray(item)) return item  // base case → ini angka
    return item.reduce((total, child) => total + sum(child), 0)  // recursive case
  }

  return sum(arr)
}
```

---

## 🔍 Penjelasan Baris per Baris

```javascript
function sum(item) {
```
Inner function yang menerima `item` — bisa berupa **angka** atau **array**.

```javascript
  if (!Array.isArray(item)) return item
```
**Base case** — jika `item` bukan array (berarti angka), return angkanya langsung. Tidak perlu proses lebih lanjut.

```javascript
  return item.reduce((total, child) => total + sum(child), 0)
```
**Recursive case** — jika `item` adalah array, loop semua isinya dengan `.reduce()`. Setiap elemen `child` dipanggil `sum(child)` lagi — bisa kena base case (angka) atau recursive case (array) lagi.

```javascript
return sum(arr)
```
Mulai proses recursion dari `arr` (array paling luar).

---

## 🔍 Visualisasi Step-by-Step

Untuk input `[[4, 5], [6]]`:

```
sum([[4, 5], [6]])           ← array → masuk reduce
  │
  ├── sum([4, 5])            ← array → masuk reduce
  │     │
  │     ├── sum(4) → 4      ← bukan array → return 4 ✅
  │     └── sum(5) → 5      ← bukan array → return 5 ✅
  │     └── total: 0 + 4 + 5 = 9
  │
  └── sum([6])               ← array → masuk reduce
        │
        └── sum(6) → 6      ← bukan array → return 6 ✅
        └── total: 0 + 6 = 6

total akhir: 0 + 9 + 6 = 15 ✅
```

---

## 🧪 Test Cases

```javascript
// Edge case — array kosong
console.log(deepSum([]));
// → 'No number'
```

```javascript
// Normal case 1 — nested array 3 level
console.log(deepSum([
  [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
  [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
  [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
]));
// → 316
```

```javascript
// Normal case 2 — grup dengan panjang array berbeda-beda
console.log(deepSum([
  [[20, 10], [15], [1, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
  [[3, 5, 1], [1, 5, 3], [1]],
  [[2]]
]));
// → 156
```

---

## 📊 Perbandingan dengan Part 3 & Part 4

| Aspek | Part 3 (Nested Loop) | Part 4 (.flat + .reduce) | Part 5 (Recursion) |
|-------|---------------------|--------------------------|-------------------|
| Jumlah baris logika | 6 baris | 1 baris | 4 baris |
| Fleksibilitas level | Hanya 3 level | Semua level | Semua level |
| Memori | O(1) | O(n) | O(d) |
| Konsep baru | Tidak ada | `.flat`, `.reduce`, chaining | Recursion, base case, inner function |
| Cocok untuk | Pemula | Kode singkat & modern | Nested tak terbatas |

> `n` = total angka, `d` = kedalaman nested array

---

## 💡 Insight Penting

> **Kenapa recursion cocok untuk `deepSum`?**
> Karena struktur nested array secara alami bersifat rekursif — array berisi array berisi array... Recursion memodelkan struktur ini dengan sempurna tanpa perlu tahu berapa level dalamnya.

> **Kenapa memori recursion O(d) bukan O(n)?**
> Karena setiap pemanggilan `sum()` menyimpan 1 **stack frame** di memori. Stack frame hanya ada selama fungsi belum selesai. Jumlah stack frame maksimal = kedalaman nested array (`d`), bukan total angka (`n`).

> **Apa itu stack overflow?**
> Ketika recursion terlalu dalam (terlalu banyak pemanggilan bersarang), memori untuk stack frame habis. Ini disebut **stack overflow**. Untuk nested array normal, ini tidak akan terjadi — tapi perlu diwaspadai jika struktur data sangat dalam.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 4: Refactoring — `.flat()` + `.reduce()`](04-refactoring-flat-reduce.md)**
- **📖 [Lanjut ke Part 6: Ringkasan Algoritma — Nested Loop →](06-ringkasan-algoritma-nested-loop.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
