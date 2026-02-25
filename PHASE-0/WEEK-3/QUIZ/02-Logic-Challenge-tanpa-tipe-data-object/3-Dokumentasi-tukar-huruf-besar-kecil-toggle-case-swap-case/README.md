# 📚 Toggle Case - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🎯 TOGGLE CASE - COMPLETE LEARNING GUIDE 🎯                   ║
║                                                                          ║
║         Dari Kode Original ke Refactoring & Berbagai Alternatif          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-String%20Manipulation%20|%20Refactoring%20|%20Clean%20Code-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas fungsi **`toggleCase`** — menukar huruf besar menjadi kecil dan sebaliknya dari sebuah string. Mencakup analisis kode original, refactoring bertahap, beberapa alternatif solusi, dan analisa kode dari sumber lain.

**Cocok untuk:**
- 🎓 **Pemula** — Belajar konsep string manipulation dan clean code
- 💻 **Developer** — Improve code quality dan naming convention
- 🚀 **Enthusiast** — Eksplorasi berbagai pendekatan solusi

---

## 🎯 Apa yang Dibahas?

Fungsi menerima sebuah string dan mengembalikan string baru dengan huruf besar menjadi kecil dan huruf kecil menjadi besar:

```javascript
toggleCase('Hello World')    // → 'hELLO wORLD'
toggleCase('I aM aLAY')      // → 'i Am Alay'
toggleCase('My Name is Bond!!') // → 'mY nAME IS bOND!!'
toggleCase('001-A-3-5TrdYW') // → '001-a-3-5tRDyw'
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level |
|------|-------|-------|
| **[Part 1](docs/01-soal-dan-pemahaman-kriteria.md)** | Soal & Pemahaman Kriteria | 🌱 Pemula |
| **[Part 2](docs/02-validasi-kode-original.md)** | Validasi Kode Original | 🌱 Pemula |
| **[Part 3](docs/03-proses-refactoring.md)** | Proses Refactoring Step-by-Step | 🌿 Menengah |
| **[Part 4](docs/04-kode-alternatif.md)** | Kode Alternatif | 🌿 Menengah |
| **[Part 5](docs/05-analisa-kode-ai.md)** | Analisa Kode dari AI Lain | 🌿 Menengah |
| **[Part 6](docs/06-ringkasan-algoritma-for-of.md)** | Ringkasan Algoritma — `for...of` + Regex | 🌿 Menengah |
| **[Part 7](docs/07-ringkasan-algoritma-split-map-join-if-else.md)** | Ringkasan Algoritma — `split` + `map` + `join` + `if/else` | 🌿 Menengah |
| **[Part 8](docs/08-ringkasan-algoritma-split-map-join-ternary.md)** | Ringkasan Algoritma — `split` + `map` + `join` + Ternary | 🌿 Menengah |
| **[Part 9](docs/09-ringkasan-algoritma-replace-regex.md)** | Ringkasan Algoritma — `replace` + Regex | 🌿 Menengah |
| **[Part 10](docs/10-ringkasan-algoritma-char-comparison.md)** | Ringkasan Algoritma — Char Comparison (⚠️ Tidak Direkomendasikan) | 🌿 Menengah |
| **[Part 11](docs/11-perbandingan-dan-kesimpulan.md)** | Perbandingan & Kesimpulan | 🌿 Menengah |

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6 → Part 7 → Part 8 → Part 9 → Part 10 → Part 11
```

**Hasil:**
- ✅ Memahami soal dan kriteria secara menyeluruh
- ✅ Tahu kelemahan kode original dan cara memperbaikinya
- ✅ Bisa refactoring ke clean code bertahap
- ✅ Mengenal berbagai alternatif solusi
- ✅ Memahami algoritma setiap versi secara detail
- ✅ Bisa mengevaluasi kode dari sumber lain

### **⚡ Jalur Cepat (Langsung ke kode)**
```
Part 2 → Part 3 → Part 6 → Part 11
```

**Hasil:**
- ✅ Validasi kode original
- ✅ Refactoring step-by-step
- ✅ Ringkasan algoritma versi utama
- ✅ Perbandingan & kesimpulan

---

## 📊 Quick Comparison: Semua Solusi

| Solusi | Pendekatan | Readability | Keringkasan |
|--------|-----------|:-----------:|:-----------:|
| **For...of + Regex** | Loop + regex check | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **split + map + join + if/else** | Functional + early return | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **split + map + join + ternary** | Functional + ternary | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **replace + regex** | Regex global replace | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| ~~**Char Comparison**~~ | ~~Loop + char comparison~~ | ⚠️ | ⚠️ |

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **Part 1** lalu ikuti jalur lengkap
→ Focus: Pahami soal dan kriteria sebelum lihat kode

### **Saya Mau Refactor Code**
→ Langsung: **Part 3**
→ Focus: Proses refactoring step-by-step

### **Saya Mau Lihat Semua Solusi**
→ Langsung: **Part 11**
→ Focus: Perbandingan dan kesimpulan

---

## 🧪 Test Cases Standar

```javascript
// Basic cases
toggleCase('Hello World')       // 'hELLO wORLD'      ✅
toggleCase('I aM aLAY')         // 'i Am Alay'         ✅
toggleCase('My Name is Bond!!') // 'mY nAME IS bOND!!' ✅
toggleCase('IT sHOULD bE me')   // 'it Should Be ME'   ✅
toggleCase('001-A-3-5TrdYW')    // '001-a-3-5tRDyw'    ✅

// Edge cases
toggleCase('')                  // ''                  ✅
toggleCase('12345')             // '12345'             ✅
toggleCase('!!!!')              // '!!!!'              ✅
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Kenapa ada 4 solusi berbeda?</strong></summary>

Setiap solusi punya pendekatan berbeda. Dengan memahami keempatnya, kamu bisa memilih yang paling sesuai konteks dan menjelaskan trade-off-nya.

</details>

<details>
<summary><strong>❓ Solusi mana yang paling baik?</strong></summary>

Tergantung konteks. Untuk belajar dan debugging → **for...of + Regex**. Untuk kode paling ringkas → **replace + Regex**. Untuk functional style → **split + map + join**.

</details>

<details>
<summary><strong>❓ Kenapa Char Comparison tidak direkomendasikan?</strong></summary>

Outputnya memang benar, tapi kondisi `if`-nya kurang eksplisit — `char === char.toLowerCase()` bernilai `true` untuk huruf kecil, angka, **dan** simbol sekaligus. Ini bisa menyesatkan pembaca kode karena tidak mencerminkan intent yang sebenarnya.

</details>

<details>
<summary><strong>❓ Apa bedanya for...of dengan split + map + join?</strong></summary>

Keduanya menghasilkan output yang sama. `for...of` lebih mudah dibaca pemula karena strukturnya eksplisit. `split + map + join` lebih modern dan fungsional karena tidak membutuhkan variabel sementara seperti `result`.

</details>

---

## 📚 Prerequisites

- ✅ JavaScript dasar (variabel, fungsi, loop)
- ✅ Pengetahuan dasar string method (`toUpperCase`, `toLowerCase`)
- ✅ Array method dasar (`map`, `split`, `join`) — untuk Part 4 ke atas

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis kode dan mengidentifikasi kelemahannya
- ✅ Melakukan refactoring ke clean code secara bertahap
- ✅ Mengimplementasikan beberapa pendekatan berbeda untuk satu soal
- ✅ Mengevaluasi kode dari sumber lain secara kritis
- ✅ Memahami trade-off setiap pendekatan

---

## 🛠️ Tools

- **Editor:** VS Code
- **Online:** [CodePen](https://codepen.io), [JSFiddle](https://jsfiddle.net)

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1 →](docs/01-soal-dan-pemahaman-kriteria.md)**

---

**Quick Links:**

[Part 1](docs/01-soal-dan-pemahaman-kriteria.md) • [Part 2](docs/02-validasi-kode-original.md) • [Part 3](docs/03-proses-refactoring.md) • [Part 4](docs/04-kode-alternatif.md) • [Part 5](docs/05-analisa-kode-ai.md) • [Part 6](docs/06-ringkasan-algoritma-for-of.md) • [Part 7](docs/07-ringkasan-algoritma-split-map-join-if-else.md) • [Part 8](docs/08-ringkasan-algoritma-split-map-join-ternary.md) • [Part 9](docs/09-ringkasan-algoritma-replace-regex.md) • [Part 10](docs/10-ringkasan-algoritma-char-comparison.md) • [Part 11](docs/11-perbandingan-dan-kesimpulan.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
