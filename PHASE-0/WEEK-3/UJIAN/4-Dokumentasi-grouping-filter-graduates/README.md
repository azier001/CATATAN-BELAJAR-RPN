# 📚 graduates - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║             🎓 graduates - COMPLETE LEARNING GUIDE 🎓                   ║
║                                                                          ║
║         Dari Kode Original ke Refactoring & Berbagai Pendekatan          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Array%20|%20Object%20|%20Grouping%20|%20Filter%20|%20Clean%20Code-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas fungsi **`graduates`** — mengelompokkan student per class dan menyaring hanya yang lulus berdasarkan batas nilai minimum. Mencakup proses pengerjaan dari kode original, review, refactoring menjadi clean code, ringkasan algoritma setiap pendekatan, hingga perbandingan semua solusi.

**Cocok untuk:**
- 🎓 **Pemula** — Belajar konsep grouping object, lazy initialization, dan filter
- 💻 **Developer** — Improve code quality dan eksplorasi berbagai pendekatan iterasi
- 🚀 **Enthusiast** — Eksplorasi functional programming dengan `reduce` dan method chaining

---

## 🎯 Apa yang Dibahas?

Fungsi menerima `students` (array of objects), lalu mengembalikan object berisi daftar student lulus per class:

```javascript
graduates([
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves'  },
  { name: 'Sergei',    score: 74, class: 'foxes'   },
  { name: 'Anastasia', score: 78, class: 'wolves'  }
])
// → {
//     foxes:  [{ name: 'Dimitri', score: 90 }],
//     wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
//   }
```

```javascript
graduates([]) // → {}
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level |
|------|-------|-------|
| **[Part 1](docs/01-soal-dan-analisis.md)** | Soal & Analisis | 🌱 Pemula |
| **[Part 2](docs/02-kode-original-dan-review.md)** | Kode Original & Review | 🌱 Pemula |
| **[Part 3](docs/03-refactoring-reduce.md)** | Refactoring — `reduce` | 🌿 Menengah |
| **[Part 4](docs/04-ringkasan-algoritma-for-of-imperative.md)** | Ringkasan Algoritma — `for...of` Imperative | 🌿 Menengah |
| **[Part 5](docs/05-ringkasan-algoritma-reduce-functional.md)** | Ringkasan Algoritma — `reduce` Functional | 🌿 Menengah |
| **[Part 6](docs/06-ringkasan-algoritma-2pass-reduce-filter-foreach.md)** | Ringkasan Algoritma — 2-pass (`reduce` + `filter/forEach`) | 🌿 Menengah |
| **[Part 7](docs/07-ringkasan-algoritma-group-first-for-of-for-in.md)** | Ringkasan Algoritma — Group-first (`for...of` + `for...in`) | 🌿 Menengah |
| **[Part 8](docs/08-perbandingan-dan-kesimpulan.md)** | Perbandingan & Kesimpulan | 🌿 Menengah |

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6 → Part 7 → Part 8
```

**Hasil:**
- ✅ Memahami soal, struktur data, dan edge case secara menyeluruh
- ✅ Tahu kelebihan dan kekurangan kode original
- ✅ Bisa refactoring ke gaya functional dengan `reduce`
- ✅ Memahami algoritma setiap pendekatan secara detail
- ✅ Bisa membandingkan dan memilih pendekatan yang tepat

### **⚡ Jalur Cepat (Langsung ke kode)**
```
Part 1 → Part 3 → Part 8
```

**Hasil:**
- ✅ Memahami soal dan edge case
- ✅ Langsung ke pendekatan refactored
- ✅ Perbandingan semua solusi

---

## 📊 Quick Comparison: Semua Solusi

| Solusi | Pendekatan | Loop | Kompleksitas Waktu | Kompleksitas Memori | Keunggulan |
|--------|-----------|------|-------------------|---------------------|------------|
| **Versi 1 — Original** | `for...of` imperative | 1x | O(n) | O(n) | Mudah dipahami pemula |
| **Versi 2 — Refactored** | `reduce` functional | 1x | O(n) | O(n) | Ringkas, modern |
| **Versi 3 — 2-pass** | `reduce` + `filter/forEach` | 2x | O(n) | O(n) | Separation of concern |
| **Versi 4 — Group-first** | `for...of` + `for...in` | 2x | O(n) | O(n) | Paling eksplisit, mudah di-debug |

> `n` = jumlah student di dalam array

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **[Part 1](docs/01-soal-dan-analisis.md)** lalu ikuti jalur lengkap
→ Focus: Pahami struktur data input/output dan edge case sebelum lihat refactoring

### **Saya Mau Refactor Code**
→ Langsung: **[Part 3](docs/03-refactoring-reduce.md)**
→ Focus: Proses refactoring step-by-step dari `for...of` ke `reduce`

### **Saya Mau Lihat Semua Solusi**
→ Langsung: **[Part 8](docs/08-perbandingan-dan-kesimpulan.md)**
→ Focus: Perbandingan dan kesimpulan semua pendekatan

---

## 🧪 Test Cases Standar

```javascript
// Edge case — array kosong
console.log(graduates([]));
// → {}
```

```javascript
// Normal case 1 — dua class, satu student tidak lulus
console.log(graduates([
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves'  },
  { name: 'Sergei',    score: 74, class: 'foxes'   },
  { name: 'Anastasia', score: 78, class: 'wolves'  }
]));
// → {
//     foxes:  [{ name: 'Dimitri', score: 90 }],
//     wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
//   }
```

```javascript
// Normal case 2 — tiga class, satu student tidak lulus per class
console.log(graduates([
  { name: 'Alexander', score: 100, class: 'foxes'  },
  { name: 'Alisa',     score: 76,  class: 'wolves' },
  { name: 'Vladimir',  score: 92,  class: 'foxes'  },
  { name: 'Albert',    score: 71,  class: 'wolves' },
  { name: 'Viktor',    score: 80,  class: 'tigers' }
]));
// → {
//     foxes:  [{ name: 'Alexander', score: 100 }, { name: 'Vladimir', score: 92 }],
//     wolves: [{ name: 'Alisa', score: 76 }],
//     tigers: [{ name: 'Viktor', score: 80 }]
//   }
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Kenapa score 75 tidak lulus, harus lebih dari 75?</strong></summary>

Karena kondisi yang digunakan adalah `score > 75` (strict greater than), bukan `score >= 75`. Artinya score tepat 75 dianggap tidak lulus. Ini sesuai dengan spesifikasi soal: *"score lebih besar dari 75"*.

</details>

<details>
<summary><strong>❓ Kenapa `class` harus di-rename jadi `className` saat destructuring?</strong></summary>

Karena `class` adalah **reserved keyword** di JavaScript — digunakan untuk mendeklarasikan class (`class MyClass {}`). Jika dipakai langsung sebagai nama variabel, akan terjadi `SyntaxError`. Rename ke `className` saat destructuring adalah konvensi yang paling umum dan deskriptif.

</details>

<details>
<summary><strong>❓ Kenapa inisialisasi array harus dilakukan sebelum cek score?</strong></summary>

Karena soal mengharuskan **semua class tetap muncul** di output, termasuk yang tidak ada lulusannya (isi `[]`). Jika inisialisasi diletakkan di dalam kondisi `score > 75`, class yang semua studentnya tidak lulus tidak akan pernah dibuat dan hilang dari output.

</details>

<details>
<summary><strong>❓ Apa bedanya `for...of` dan `for...in`?</strong></summary>

`for...of` mengiterasi **nilai** dari sebuah iterable (array, string, Map, Set). `for...in` mengiterasi **key** dari sebuah object. Untuk array, gunakan `for...of`. Untuk object, gunakan `for...in`. Keduanya tidak bisa ditukar sembarangan.

</details>

<details>
<summary><strong>❓ Kenapa `return acc` wajib ada di dalam `reduce`?</strong></summary>

Karena `reduce` meneruskan nilai `acc` antar iterasi melalui return value callback. Jika tidak di-return, nilai `acc` di iterasi berikutnya menjadi `undefined` dan program crash. Berbeda dengan `for...of` di mana variabel accumulator hidup di luar loop.

</details>

<details>
<summary><strong>❓ Solusi mana yang paling baik?</strong></summary>

Tergantung konteks. Untuk readability dan kemudahan debugging → **Versi 4 (Group-first)**. Untuk kode ringkas dan modern → **Versi 2 (reduce)**. Untuk separation of concern yang sangat jelas → **Versi 3 (2-pass)**. Untuk pemula → **Versi 1 (Original)**.

</details>

---

## 📚 Prerequisites

- ✅ JavaScript dasar (variabel, fungsi, loop)
- ✅ Pemahaman dasar array dan object
- ✅ Familiar dengan konsep iterasi dan kondisional

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis struktur data input/output dan menentukan pendekatan yang tepat
- ✅ Mengimplementasikan grouping object dengan lazy initialization
- ✅ Menggunakan `reduce` untuk membangun object dari array
- ✅ Memahami perbedaan `for...of` dan `for...in` dan kapan menggunakan masing-masing
- ✅ Memahami trade-off setiap pendekatan (1-pass vs 2-pass, imperative vs functional)
- ✅ Mengenal konsep separation of concern dalam penulisan kode

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1 →](docs/01-soal-dan-analisis.md)**

---

**Quick Links:**

[Part 1](docs/01-soal-dan-analisis.md) • [Part 2](docs/02-kode-original-dan-review.md) • [Part 3](docs/03-refactoring-reduce.md) • [Part 4](docs/04-ringkasan-algoritma-for-of-imperative.md) • [Part 5](docs/05-ringkasan-algoritma-reduce-functional.md) • [Part 6](docs/06-ringkasan-algoritma-2pass-reduce-filter-foreach.md) • [Part 7](docs/07-ringkasan-algoritma-group-first-for-of-for-in.md) • [Part 8](docs/08-perbandingan-dan-kesimpulan.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
