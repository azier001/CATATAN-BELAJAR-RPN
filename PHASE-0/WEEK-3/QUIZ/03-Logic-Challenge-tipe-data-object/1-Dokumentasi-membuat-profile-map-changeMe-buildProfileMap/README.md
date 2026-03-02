# 📚 Build Profile Map - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🎯 BUILD PROFILE MAP - COMPLETE LEARNING GUIDE 🎯             ║
║                                                                          ║
║         Dari Kode Original ke Refactoring & Berbagai Alternatif          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Beginner-green)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Object%20|%20Refactoring%20|%20Clean%20Code-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas fungsi **`buildProfileMap`** — membangun sebuah object/map dari array data profile, menghitung umur, menangani duplikat, dan menampilkan hasilnya ke console. Mencakup analisis kode original, refactoring bertahap, ringkasan algoritma, dan beberapa alternatif solusi.

**Cocok untuk:**
- 🎓 **Pemula** — Belajar konsep object, destructuring, dan clean code
- 💻 **Developer** — Improve code quality dan naming convention
- 🚀 **Enthusiast** — Eksplorasi berbagai pendekatan solusi

---

## 🎯 Apa yang Dibahas?

Fungsi menerima array of arrays berisi data profile dan menampilkan output seperti berikut:

```javascript
buildProfileMap([
  ['Christ', 'Evans', 'Male', 1982],
  ['Robert', 'Downey', 'Male']
])

// Output:
// 1. Christ Evans:
// Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 44 }
// Robert Downey: { firstName: 'Robert', lastName: 'Downey', gender: 'Male', age: 'Invalid Birth Year' }

buildProfileMap([]) // Output: ""
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level |
|------|-------|-------|
| **[Part 1](docs/01-soal-dan-kriteria.md)** | Soal & Kriteria | 🌱 Pemula |
| **[Part 2](docs/02-analisis-kode-original.md)** | Analisis Kode Original | 🌱 Pemula |
| **[Part 3](docs/03-refactoring.md)** | Refactoring Step-by-Step | 🌿 Menengah |
| **[Part 4](docs/04-ringkasan-algoritma-utama.md)** | Ringkasan Algoritma Utama | 🌿 Menengah |
| **[Part 5](docs/05-solusi-alternatif.md)** | Solusi Alternatif | 🌿 Menengah |
| **[Part 6](docs/06-ringkasan-algoritma-alternatif-1-reduce.md)** | Ringkasan Algoritma — Alternatif 1 (reduce) | 🌿 Menengah |
| **[Part 7](docs/07-ringkasan-algoritma-alternatif-2-foreach.md)** | Ringkasan Algoritma — Alternatif 2 (forEach) | 🌿 Menengah |
| **[Part 8](docs/08-ringkasan-algoritma-alternatif-3-objectentries.md)** | Ringkasan Algoritma — Alternatif 3 (Object.entries) | 🌿 Menengah |
| **[Part 9](docs/09-perbandingan-dan-kesimpulan.md)** | Perbandingan & Kesimpulan | 🌿 Menengah |

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6 → Part 7 → Part 8 → Part 9
```

**Hasil:**
- ✅ Memahami soal dan kriteria secara menyeluruh
- ✅ Tahu apa yang salah di kode original dan cara memperbaikinya
- ✅ Bisa refactoring ke clean code secara bertahap
- ✅ Mengenal berbagai alternatif solusi
- ✅ Memahami algoritma setiap versi secara detail

### **⚡ Jalur Cepat (Langsung ke kode)**
```
Part 2 → Part 3 → Part 4 → Part 9
```

**Hasil:**
- ✅ Analisis kode original
- ✅ Refactoring step-by-step
- ✅ Ringkasan algoritma utama
- ✅ Perbandingan & kesimpulan

---

## 📊 Quick Comparison: Semua Solusi

| Solusi | Loop Building | Loop Output | Style |
|--------|--------------|-------------|-------|
| **Kode Utama** | `for...of` | `for...in` | Imperative |
| **Alternatif 1** | `reduce` | `for...in` | Functional |
| **Alternatif 2** | `forEach` | `for...in` | Functional |
| **Alternatif 3** | `for...of` | `Object.entries` | Campuran |

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **Part 1** lalu ikuti jalur lengkap
→ Focus: Pahami soal dan kriteria sebelum lihat kode

### **Saya Mau Refactor Code**
→ Langsung: **Part 3**
→ Focus: Proses refactoring step-by-step dengan penjelasan alasan tiap perubahan

### **Saya Mau Lihat Semua Solusi**
→ Langsung: **Part 9**
→ Focus: Perbandingan dan kesimpulan semua pendekatan

---

## 🧪 Test Cases Standar

```javascript
// Array berisi data lengkap dan tidak lengkap
buildProfileMap([
  ['Christ', 'Evans', 'Male', 1982],
  ['Robert', 'Downey', 'Male']
])
// 1. Christ Evans:
// Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 44 }
// Robert Downey: { firstName: 'Robert', lastName: 'Downey', gender: 'Male', age: 'Invalid Birth Year' }

// Array kosong
buildProfileMap([])
// ""

// Array dengan duplikat
buildProfileMap([
  ['Christ', 'Evans', 'Male', 1982],
  ['Christ', 'Evans', 'Male', 1982]
])
// 1. Christ Evans:
// Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 44 }
// (duplikat diabaikan)
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Kenapa ada 3 solusi alternatif?</strong></summary>

Setiap solusi menggunakan pendekatan berbeda. Dengan memahami ketiganya, kamu bisa memilih yang paling sesuai konteks dan memahami trade-off masing-masing.

</details>

<details>
<summary><strong>❓ Solusi mana yang paling baik?</strong></summary>

Tergantung konteks. Untuk belajar dan readability → **Kode Utama (for...of)**. Untuk functional style → **Alternatif 1 (reduce)**. Untuk yang paling ringkas → **Alternatif 2 (forEach)**.

</details>

<details>
<summary><strong>❓ Kenapa perlu deduplication?</strong></summary>

Karena object JavaScript tidak bisa memiliki key yang sama dua kali. Dengan menggunakan `fullName` sebagai key, data profile yang sama otomatis tidak akan tersimpan dua kali — ini memanfaatkan sifat object untuk deduplication secara efisien.

</details>

<details>
<summary><strong>❓ Kenapa pakai new Date().getFullYear() bukan hardcode tahun?</strong></summary>

Karena bersifat dinamis — otomatis menyesuaikan tahun berjalan tanpa perlu update manual setiap tahun. Angka yang berdiri sendiri dalam kode disebut magic number dan sebaiknya dihindari.

</details>

---

## 📚 Prerequisites

- ✅ JavaScript dasar (variabel, fungsi, loop)
- ✅ Konsep array dan object dasar
- ✅ Destructuring assignment (nilai plus)

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis kode dan mengidentifikasi bagian yang bermasalah
- ✅ Melakukan refactoring ke clean code secara bertahap
- ✅ Menerapkan English naming convention yang deskriptif
- ✅ Mengimplementasikan beberapa pendekatan berbeda untuk satu soal
- ✅ Memahami perbedaan `for...of`, `for...in`, `reduce`, `forEach`, dan `Object.entries`

---

## 🛠️ Tools

- **Editor:** VS Code
- **Online:** [CodePen](https://codepen.io), [JSFiddle](https://jsfiddle.net)

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1 →](docs/01-soal-dan-kriteria.md)**

---

**Quick Links:**

[Part 1](docs/01-soal-dan-kriteria.md) • [Part 2](docs/02-analisis-kode-original.md) • [Part 3](docs/03-refactoring.md) • [Part 4](docs/04-ringkasan-algoritma-utama.md) • [Part 5](docs/05-solusi-alternatif.md) • [Part 6](docs/06-ringkasan-algoritma-alternatif-1-reduce.md) • [Part 7](docs/07-ringkasan-algoritma-alternatif-2-foreach.md) • [Part 8](docs/08-ringkasan-algoritma-alternatif-3-objectentries.md) • [Part 9](docs/09-perbandingan-dan-kesimpulan.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
