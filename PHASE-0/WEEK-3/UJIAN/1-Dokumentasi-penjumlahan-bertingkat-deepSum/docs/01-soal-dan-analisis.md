# 📚 deepSum - PART 1: SOAL & ANALISIS

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 PART 1: SOAL & ANALISIS 📋                              ║
║                                                                          ║
║           Apa yang Diminta dan Bagaimana Struktur Datanya                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📋 Soal | 🔍 Analisis | 📊 Contoh | ✅ Ringkasan |
|:-------:|:-----------:|:---------:|:-----------:|
| [Jump](#-soal) | [Jump](#-analisis-struktur-data) | [Jump](#-contoh-contoh) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami apa yang diminta soal
- ✅ Memahami struktur nested array yang digunakan
- ✅ Tahu apa itu edge case dan kenapa penting
- ✅ Siap untuk melihat dan menganalisis kode original di Part 2

---

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

### 📝 Template Soal

```javascript
function deepSum(arr) {
  // Code disini
}
```

---

## 🔍 Analisis Struktur Data

### Struktur Nested Array

Input `arr` adalah array yang memiliki **3 level** kedalaman:

```
arr = [                      ← level 1: array paling luar
  [                          ← level 2: group
    [4, 5, 6],               ← level 3: row (angka ada di sini)
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  ...
]
```

> **Catatan:** Kata **deep** di nama fungsi mengisyaratkan bahwa idealnya fungsi ini bisa menelusuri nested array **sedalam apapun**, tidak terbatas pada 3 level saja. Ini akan kita eksplorasi di Part 5 (Recursion).

---

### Kenapa Disebut "Nested Array"?

**Nested** artinya bersarang — array di dalam array di dalam array.

```javascript
// Array biasa (1 level)
[4, 5, 6]

// Nested array (2 level)
[[4, 5], [6, 7]]

// Nested array (3 level) ← yang dipakai di soal ini
[[[4, 5], [6, 7]], [[8, 9]]]
```

---

### Edge Case

> **Edge case** adalah kondisi khusus yang perlu ditangani secara berbeda dari kondisi normal.

Untuk soal ini, edge case-nya adalah ketika `arr` kosong:

```javascript
deepSum([]) // → 'No number'
```

Kenapa perlu ditangani khusus?
- Array kosong tidak punya angka untuk dijumlahkan
- Return `0` bisa membingungkan — apakah memang tidak ada angka, atau semua angkanya 0?
- Return `'No number'` lebih eksplisit dan informatif

---

## 📊 Contoh-contoh

### Output yang Diharapkan

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

### Simulasi Penjumlahan: Normal Case 1

```
arr = [
  [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
  [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
  [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
]

Group 1: [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]]
  row [4, 5, 6]        → 4 + 5 + 6        = 15
  row [9, 1, 2, 10]    → 9 + 1 + 2 + 10   = 22
  row [9, 4, 3]        → 9 + 4 + 3        = 16
  subtotal group 1 = 53

Group 2: [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]]
  row [4, 14, 31]          → 4 + 14 + 31          = 49
  row [9, 10, 18, 12, 20]  → 9 + 10 + 18 + 12 + 20 = 69
  row [1, 4, 90]           → 1 + 4 + 90           = 95
  subtotal group 2 = 213

Group 3: [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
  row [2, 5, 10]      → 2 + 5 + 10       = 17
  row [3, 4, 5]       → 3 + 4 + 5        = 12
  row [2, 4, 5, 10]   → 2 + 4 + 5 + 10   = 21
  subtotal group 3 = 50

Total = 53 + 213 + 50 = 316 ✅
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Parameter | `arr` — nested array berisi angka |
| Struktur | 3 level kedalaman (array → group → row → number) |
| Output normal | Jumlah semua angka (`number`) |
| Edge case | `arr` kosong → return `'No number'` |
| Nama fungsi | `deep` mengisyaratkan bisa handle nested tak terbatas |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2: Kode Original →](02-kode-original.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
