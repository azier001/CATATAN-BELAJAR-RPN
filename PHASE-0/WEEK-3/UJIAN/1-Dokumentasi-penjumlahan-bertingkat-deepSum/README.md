# 📚 deepSum - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              🎯 deepSum - COMPLETE LEARNING GUIDE 🎯                    ║
║                                                                          ║
║         Dari Kode Original ke Refactoring & Berbagai Pendekatan          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Array%20|%20Nested%20Loop%20|%20Recursion%20|%20Clean%20Code-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas fungsi **`deepSum`** — menjumlahkan semua angka yang terdapat di dalam array bertingkat (nested array). Mencakup proses pengerjaan dari kode original, review, refactoring bertahap menjadi clean code, ringkasan algoritma setiap pendekatan, hingga perbandingan semua solusi.

**Cocok untuk:**
- 🎓 **Pemula** — Belajar konsep nested array, nested loop, dan edge case handling
- 💻 **Developer** — Improve code quality, naming convention, dan eksplorasi built-in method
- 🚀 **Enthusiast** — Eksplorasi pendekatan recursion dan functional programming

---

## 🎯 Apa yang Dibahas?

Fungsi menerima `arr` (nested array), lalu mengembalikan jumlah semua angka di dalamnya:

```javascript
deepSum([
  [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
  [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
  [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
])
// → 316
```

```javascript
deepSum([]) // → 'No number'
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level |
|------|-------|-------|
| **[Part 1](docs/01-soal-dan-analisis.md)** | Soal & Analisis | 🌱 Pemula |
| **[Part 2](docs/02-kode-original.md)** | Kode Original & Review | 🌱 Pemula |
| **[Part 3](docs/03-refactoring-nested-loop-naming.md)** | Refactoring — Perbaikan Naming | 🌱 Pemula |
| **[Part 4](docs/04-refactoring-flat-reduce.md)** | Refactoring — `.flat()` + `.reduce()` | 🌿 Menengah |
| **[Part 5](docs/05-refactoring-recursion.md)** | Refactoring — Recursion | 🌿 Menengah |
| **[Part 6](docs/06-ringkasan-algoritma-nested-loop.md)** | Ringkasan Algoritma — Nested Loop | 🌿 Menengah |
| **[Part 7](docs/07-ringkasan-algoritma-flat-reduce.md)** | Ringkasan Algoritma — `.flat()` + `.reduce()` | 🌿 Menengah |
| **[Part 8](docs/08-ringkasan-algoritma-recursion.md)** | Ringkasan Algoritma — Recursion | 🌿 Menengah |
| **[Part 9](docs/09-perbandingan-dan-kesimpulan.md)** | Perbandingan & Kesimpulan | 🌿 Menengah |

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6 → Part 7 → Part 8 → Part 9
```

**Hasil:**
- ✅ Memahami soal dan struktur nested array secara menyeluruh
- ✅ Tahu kelebihan dan kekurangan kode original
- ✅ Bisa refactoring naming menjadi lebih deskriptif
- ✅ Memahami cara kerja `.flat()` + `.reduce()` dan method chaining
- ✅ Memahami konsep recursion, base case, dan inner function
- ✅ Memahami algoritma setiap pendekatan secara detail

### **⚡ Jalur Cepat (Langsung ke kode)**
```
Part 1 → Part 4 → Part 5 → Part 9
```

**Hasil:**
- ✅ Memahami soal dan edge case
- ✅ Langsung ke pendekatan modern dan powerful
- ✅ Perbandingan semua solusi

---

## 📊 Quick Comparison: Semua Solusi

| Solusi | Pendekatan | Kompleksitas Waktu | Kompleksitas Memori | Keunggulan |
|--------|-----------|-------------------|-------------------|------------|
| **Kode Original** | 3 Nested `for...of` (naming lama) | O(n) | O(1) | Mudah dipahami pemula |
| **Nested Loop** | 3 Nested `for...of` (naming baru) | O(n) | O(1) | Clean, deskriptif |
| **flat + reduce** | `.flat(Infinity)` + `.reduce()` | O(n) | O(n) | Singkat, modern |
| **Recursion** | Inner function + `reduce` | O(n) | O(d) | Fleksibel, handle semua level |

> `n` = total angka di seluruh nested array, `d` = kedalaman nested array

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **[Part 1](docs/01-soal-dan-analisis.md)** lalu ikuti jalur lengkap
→ Focus: Pahami struktur nested array dan edge case sebelum lihat refactoring

### **Saya Mau Refactor Code**
→ Langsung: **[Part 3](docs/03-refactoring-nested-loop-naming.md)**
→ Focus: Proses refactoring step-by-step dari naming hingga recursion

### **Saya Mau Lihat Semua Solusi**
→ Langsung: **[Part 9](docs/09-perbandingan-dan-kesimpulan.md)**
→ Focus: Perbandingan dan kesimpulan semua pendekatan

---

## 🧪 Test Cases Standar

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

## 🤔 FAQ

<details>
<summary><strong>❓ Kenapa edge case array kosong return 'No number' bukan 0?</strong></summary>

Karena `0` bisa membingungkan — apakah berarti tidak ada angka, atau semua angkanya memang 0? Return string `'No number'` lebih eksplisit dan informatif bahwa memang tidak ada data yang bisa dijumlahkan.

</details>

<details>
<summary><strong>❓ Kenapa nama fungsinya deepSum, bukan nestedSum atau flatSum?</strong></summary>

Kata **deep** mengisyaratkan bahwa fungsi ini bisa menelusuri nested array **sedalam apapun**, tidak terbatas pada 3 level saja. Ini sesuai dengan pendekatan recursion yang kita bahas — bisa handle nested array tak terbatas levelnya.

</details>

<details>
<summary><strong>❓ Apa bedanya .flat(1), .flat(2), dan .flat(Infinity)?</strong></summary>

`.flat(depth)` meratakan array sebanyak `depth` level. `.flat(1)` hanya meratakan 1 level, `.flat(2)` meratakan 2 level, dan `.flat(Infinity)` meratakan **semua level** tanpa peduli kedalamannya. Untuk `deepSum`, kita pakai `Infinity` agar aman di semua kondisi.

</details>

<details>
<summary><strong>❓ Apa itu base case dan kenapa wajib ada di recursion?</strong></summary>

**Base case** adalah kondisi berhenti dari recursion. Tanpa base case, fungsi akan terus memanggil dirinya sendiri tanpa henti hingga terjadi **stack overflow** (memori habis). Di `deepSum`, base case-nya adalah ketika `item` bukan array (sudah angka) — langsung return angkanya.

</details>

<details>
<summary><strong>❓ Solusi mana yang paling baik?</strong></summary>

Tergantung konteks. Untuk belajar dan readability → **Nested Loop (refactored)**. Untuk kode singkat dan modern → **`.flat()` + `.reduce()`**. Untuk handle nested array tak terbatas level → **Recursion**.

</details>

<details>
<summary><strong>❓ Apa bedanya for...of dengan .forEach()?</strong></summary>

Keduanya sama-sama loop setiap item di array, tapi `for...of` mendukung `break` dan `continue` sedangkan `forEach` tidak. `for...of` juga bekerja pada semua iterable (string, Map, Set), bukan hanya array.

</details>

---

## 📚 Prerequisites

- ✅ JavaScript dasar (variabel, fungsi, loop)
- ✅ Pemahaman dasar array dan nested array
- ✅ Familiar dengan konsep iterasi

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis struktur nested array dan menentukan pendekatan yang tepat
- ✅ Melakukan refactoring naming menjadi lebih deskriptif dan informatif
- ✅ Menggunakan `.flat()` dan `.reduce()` untuk solusi yang singkat dan modern
- ✅ Memahami dan mengimplementasikan recursion dengan base case yang tepat
- ✅ Memahami trade-off setiap pendekatan (readability vs flexibility vs memory)
- ✅ Mengenal konsep method chaining di JavaScript

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1 →](docs/01-soal-dan-analisis.md)**

---

**Quick Links:**

[Part 1](docs/01-soal-dan-analisis.md) • [Part 2](docs/02-kode-original.md) • [Part 3](docs/03-refactoring-nested-loop-naming.md) • [Part 4](docs/04-refactoring-flat-reduce.md) • [Part 5](docs/05-refactoring-recursion.md) • [Part 6](docs/06-ringkasan-algoritma-nested-loop.md) • [Part 7](docs/07-ringkasan-algoritma-flat-reduce.md) • [Part 8](docs/08-ringkasan-algoritma-recursion.md) • [Part 9](docs/09-perbandingan-dan-kesimpulan.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
