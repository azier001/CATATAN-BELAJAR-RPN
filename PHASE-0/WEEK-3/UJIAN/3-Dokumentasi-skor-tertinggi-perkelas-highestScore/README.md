# 📚 highestScore - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🎯 highestScore - COMPLETE LEARNING GUIDE 🎯                  ║
║                                                                          ║
║         Dari Kode Eksplorasi ke Refactoring & Berbagai Pendekatan        ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Object%20|%20Grouping%20|%20Destructuring%20|%20Clean%20Code-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas fungsi **`highestScore`** — mencari siswa dengan skor tertinggi per kelas dari array of objects. Mencakup proses pengerjaan dari kode eksplorasi, refactoring bertahap menjadi clean code, ringkasan algoritma setiap pendekatan, hingga perbandingan semua solusi.

**Cocok untuk:**
- 🎓 **Pemula** — Belajar konsep grouping, iterasi object, dan destructuring
- 💻 **Developer** — Improve code quality, eksplorasi `for...of` dan `reduce`
- 🚀 **Enthusiast** — Eksplorasi pendekatan fungsional dan modern JavaScript

---

## 🎯 Apa yang Dibahas?

Fungsi menerima `students` (array of objects), lalu mengembalikan object berisi siswa dengan skor tertinggi per kelas:

```javascript
highestScore([
  { name: 'Dimitri', score: 90, class: 'foxes' },
  { name: 'Alexei', score: 85, class: 'wolves' },
  { name: 'Sergei', score: 74, class: 'foxes' },
  { name: 'Anastasia', score: 78, class: 'wolves' }
])
// → { foxes: { name: 'Dimitri', score: 90 }, wolves: { name: 'Alexei', score: 85 } }
```

```javascript
highestScore([]) // → {}
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level |
|------|-------|-------|
| **[Part 1](docs/01-soal-dan-analisis.md)** | Soal & Analisis | 🌱 Pemula |
| **[Part 2](docs/02-kode-eksplorasi.md)** | Kode Eksplorasi & Review | 🌱 Pemula |
| **[Part 3](docs/03-refactoring.md)** | Refactoring Bertahap | 🌱 Pemula |
| **[Part 4](docs/04-versi-forOf.md)** | Versi `for...of` + Destructuring | 🌿 Menengah |
| **[Part 5](docs/05-versi-reduce.md)** | Versi `reduce` Elegant | 🌿 Menengah |
| **[Part 6](docs/06-ringkasan-algoritma-forOf.md)** | Ringkasan Algoritma — `for...of` | 🌿 Menengah |
| **[Part 7](docs/07-ringkasan-algoritma-reduce.md)** | Ringkasan Algoritma — `reduce` | 🌿 Menengah |
| **[Part 8](docs/08-perbandingan-dan-kesimpulan.md)** | Perbandingan & Kesimpulan | 🌿 Menengah |

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6 → Part 7 → Part 8
```

**Hasil:**
- ✅ Memahami soal dan struktur array of objects secara menyeluruh
- ✅ Tahu proses eksplorasi dan cara menemukan solusi secara mandiri
- ✅ Bisa refactoring kode menjadi lebih bersih dan efisien
- ✅ Memahami cara kerja `for...of` dengan destructuring
- ✅ Memahami pendekatan `reduce` yang singkat dan fungsional
- ✅ Memahami algoritma setiap pendekatan secara detail

### **⚡ Jalur Cepat (Langsung ke kode)**
```
Part 1 → Part 4 → Part 5 → Part 8
```

**Hasil:**
- ✅ Memahami soal dan edge case
- ✅ Langsung ke pendekatan modern dan clean
- ✅ Perbandingan semua solusi

---

## 📊 Quick Comparison: Semua Solusi

| Solusi | Pendekatan | Kompleksitas Waktu | Kompleksitas Memori | Keunggulan |
|--------|-----------|-------------------|-------------------|------------|
| **Kode Eksplorasi** | Grouping + 2x `reduce` | O(n) | O(n) | Proses berpikir eksploratif |
| **for...of** | `for...of` + destructuring | O(n) | O(1) | Mudah dibaca, linear |
| **reduce elegant** | `reduce` + destructuring | O(n) | O(1) | Singkat, fungsional, idiomatik |

> `n` = jumlah siswa di dalam array

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **[Part 1](docs/01-soal-dan-analisis.md)** lalu ikuti jalur lengkap
→ Focus: Pahami struktur array of objects dan logika grouping sebelum lihat refactoring

### **Saya Mau Refactor Code**
→ Langsung: **[Part 3](docs/03-refactoring.md)**
→ Focus: Proses refactoring step-by-step dari eksplorasi hingga versi clean

### **Saya Mau Lihat Semua Solusi**
→ Langsung: **[Part 8](docs/08-perbandingan-dan-kesimpulan.md)**
→ Focus: Perbandingan dan kesimpulan semua pendekatan

---

## 🧪 Test Cases Standar

```javascript
// Edge case — array kosong
console.log(highestScore([]));
// → {}
```

```javascript
// Normal case 1 — dua kelas
console.log(highestScore([
  { name: 'Dimitri', score: 90, class: 'foxes' },
  { name: 'Alexei', score: 85, class: 'wolves' },
  { name: 'Sergei', score: 74, class: 'foxes' },
  { name: 'Anastasia', score: 78, class: 'wolves' }
]));
// → { foxes: { name: 'Dimitri', score: 90 }, wolves: { name: 'Alexei', score: 85 } }
```

```javascript
// Normal case 2 — tiga kelas dengan jumlah siswa berbeda
console.log(highestScore([
  { name: 'Alexander', score: 100, class: 'foxes' },
  { name: 'Alisa', score: 76, class: 'wolves' },
  { name: 'Vladimir', score: 92, class: 'foxes' },
  { name: 'Albert', score: 71, class: 'wolves' },
  { name: 'Viktor', score: 80, class: 'tigers' }
]));
// → { foxes: { name: 'Alexander', score: 100 }, wolves: { name: 'Alisa', score: 76 }, tigers: { name: 'Viktor', score: 80 } }
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Kenapa edge case array kosong return {} bukan null?</strong></summary>

Karena `{}` (object kosong) lebih konsisten dengan tipe return value fungsi ini — yaitu object. Return `null` akan memaksa pemanggil melakukan pengecekan tipe tambahan. Object kosong lebih aman dan predictable.

</details>

<details>
<summary><strong>❓ Kenapa property class di-rename jadi className saat destructuring?</strong></summary>

Karena `class` adalah **reserved word** di JavaScript — digunakan untuk mendefinisikan class (OOP). Jika dipakai langsung sebagai nama variabel, JavaScript akan error. Dengan destructuring `{ class: className }`, kita rename properti `class` menjadi variabel `className` yang aman digunakan.

</details>

<details>
<summary><strong>❓ Apa bedanya versi for...of dan reduce?</strong></summary>

Keduanya menghasilkan output yang sama. `for...of` lebih mudah dibaca secara linear — cocok saat baru belajar. `reduce` lebih idiomatik JavaScript fungsional — cocok untuk kode yang lebih ringkas. Pilih sesuai konteks dan preferensi tim.

</details>

<details>
<summary><strong>❓ Kenapa tidak pakai Math.max() untuk mencari skor tertinggi?</strong></summary>

Bisa saja, tapi butuh dua langkah: cari nilai max dulu, lalu `.find()` object-nya. Pendekatan yang kita pakai (`if score > result[className].score`) lebih efisien karena langsung membandingkan dan menyimpan dalam satu langkah — tidak perlu iterasi dua kali.

</details>

<details>
<summary><strong>❓ Solusi mana yang paling baik?</strong></summary>

Tergantung konteks. Untuk readability dan kemudahan debugging → **`for...of`**. Untuk kode singkat dan fungsional → **`reduce` elegant**. Keduanya memiliki kompleksitas waktu dan memori yang sama.

</details>

<details>
<summary><strong>❓ Apa itu destructuring dan kenapa berguna?</strong></summary>

Destructuring adalah sintaks untuk mengekstrak nilai dari array atau object langsung ke variabel. Contoh: `const { name, score, class: className } = student` lebih ringkas dari menulis `student.name`, `student.score`, `student.class` berulang kali. Membuat kode lebih bersih dan mengurangi repetisi.

</details>

---

## 📚 Prerequisites

- ✅ JavaScript dasar (variabel, fungsi, loop)
- ✅ Pemahaman dasar array dan object
- ✅ Familiar dengan konsep iterasi

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis struktur array of objects dan menentukan pendekatan yang tepat
- ✅ Melakukan grouping data berdasarkan properti tertentu
- ✅ Menggunakan destructuring untuk mengekstrak nilai dari object
- ✅ Memahami dan mengimplementasikan `for...of` dengan destructuring
- ✅ Memahami penggunaan `reduce` untuk menghasilkan object dari array
- ✅ Memahami trade-off setiap pendekatan (readability vs brevity)

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1 →](docs/01-soal-dan-analisis.md)**

---

**Quick Links:**

[Part 1](docs/01-soal-dan-analisis.md) • [Part 2](docs/02-kode-eksplorasi.md) • [Part 3](docs/03-refactoring.md) • [Part 4](docs/04-versi-forOf.md) • [Part 5](docs/05-versi-reduce.md) • [Part 6](docs/06-ringkasan-algoritma-forOf.md) • [Part 7](docs/07-ringkasan-algoritma-reduce.md) • [Part 8](docs/08-perbandingan-dan-kesimpulan.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
