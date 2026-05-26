# 📚 Shift Word - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🎯 SHIFT WORD - COMPLETE LEARNING GUIDE 🎯                    ║
║                                                                          ║
║         Dari Kode Original ke Refactoring & Berbagai Alternatif          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-String%20|%20ASCII%20|%20Refactoring-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas implementasi **fungsi penggeser huruf** — setiap huruf diubah menjadi huruf berikutnya (`a → b`, `z → a`). Mencakup analisis kode original, konsep ASCII, refactoring bertahap, dan beberapa alternatif solusi.

**Cocok untuk:**
- 🎓 **Pemula** — Belajar konsep ASCII dan string manipulation
- 💻 **Developer** — Improve code quality dan clean code
- 🚀 **Enthusiast** — Eksplorasi berbagai pendekatan solusi

---

## 🎯 Apa yang Dibahas?

Fungsi yang dibuat menerima sebuah kata dan menggeser setiap hurufnya satu posisi ke depan:

```javascript
shiftWord('wow')         // → 'xpx'
shiftWord('keren')       // → 'lfsfo'
shiftWord('hello world') // → 'ifmmp xpsme' (non-huruf dipertahankan)
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level |
|------|-------|-------|
| **[Part 1](docs/01-analisis-kode-original.md)** | Analisis Kode Original | 🌱 Pemula |
| **[Part 2](docs/02-konsep-ascii.md)** | Konsep ASCII Code | 🌱 Pemula |
| **[Part 3](docs/03-refactoring-step-by-step.md)** | Refactoring Step-by-Step | 🌿 Menengah |
| **[Part 4](docs/04-kode-final.md)** | Kode Final & Perbandingan dengan Original | 🌿 Menengah |
| **[Part 5](docs/05-alternatif-1.md)** | Alternatif 1 — `if` Hardcode ASCII | 🌱 Pemula |
| **[Part 6](docs/06-alternatif-1b.md)** | Alternatif 1b — String Alphabet + `if` Hardcode | 🌱 Pemula |
| **[Part 7](docs/07-alternatif-2.md)** | Alternatif 2 — String Alphabet + Modulo | 🌿 Menengah |
| **[Part 8](docs/08-ringkasan-algoritma.md)** | Ringkasan Algoritma Semua Versi | 🌿 Menengah |
| **[Part 9](docs/09-perbandingan-kesimpulan.md)** | Perbandingan Semua Solusi & Kesimpulan | 🌿 Menengah |

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6 → Part 7 → Part 8 → Part 9
```

**Hasil:**
- ✅ Memahami kode original dan kekurangannya
- ✅ Paham konsep ASCII
- ✅ Bisa refactoring ke clean code
- ✅ Mengenal berbagai alternatif solusi
- ✅ Memahami algoritma setiap versi secara detail

### **⚡ Jalur Cepat (Sudah paham ASCII)**
```
Part 1 → Part 3 → Part 4 → Part 8 → Part 9
```

**Hasil:**
- ✅ Analisis kode original
- ✅ Refactoring & kode final
- ✅ Ringkasan algoritma
- ✅ Perbandingan solusi

---

## 📊 Quick Comparison: Semua Solusi

| Solusi | Pendekatan | Cocok untuk |
|--------|-----------|-------------|
| **Kode Final** | 2 fungsi, ASCII + modulo | Produksi |
| **Alternatif 1** | 1 fungsi, ASCII + `if` hardcode | Pemula |
| **Alternatif 1b** | 1 fungsi, string alphabet + `if` hardcode | Pemula |
| **Alternatif 2** | 1 fungsi, string alphabet + modulo | Pemula–Menengah |

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **Part 1** lalu ikuti jalur lengkap
→ Focus: Pahami konsep sebelum lihat kode

### **Saya Mau Refactor Code**
→ Langsung: **Part 3**
→ Focus: Proses refactoring step-by-step

### **Saya Mau Lihat Semua Solusi**
→ Langsung: **Part 9**
→ Focus: Perbandingan dan kesimpulan

---

## 🧪 Test Cases Standar

```javascript
// Basic
shiftWord('wow')        // 'xpx'       ✅
shiftWord('developer')  // 'efwfmpqfs' ✅
shiftWord('keren')      // 'lfsfo'     ✅
shiftWord('semangat')   // 'tfnbohbu'  ✅

// Edge cases
shiftWord('z')          // 'a'         ✅
shiftWord('zzz')        // 'aaa'       ✅
shiftWord('')           // ''          ✅

// Non-huruf
shiftWord('hello world') // 'ifmmp xpsme' ✅
shiftWord('abc123')      // 'bcd123'      ✅
shiftWord('hi!')         // 'ij!'         ✅
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Kenapa ada 4 solusi berbeda?</strong></summary>

Karena setiap solusi punya pendekatan berbeda yang cocok untuk situasi berbeda. Dengan memahami semua solusi, kamu bisa memilih yang paling sesuai dan menjelaskan trade-off-nya.

</details>

<details>
<summary><strong>❓ Solusi mana yang paling baik?</strong></summary>

Tergantung konteks. **Kode final** paling direkomendasikan untuk produksi karena clean dan efisien. Untuk belajar, **Alternatif 1 atau 1b** lebih mudah dipahami.

</details>

<details>
<summary><strong>❓ Apakah perlu paham ASCII dulu?</strong></summary>

Untuk **Part 1** tidak perlu. Tapi untuk **Part 3 ke atas** sangat disarankan baca Part 2 (Konsep ASCII) terlebih dahulu.

</details>

---

## 📚 Prerequisites

- ✅ JavaScript dasar (variabel, fungsi, loop)
- ✅ Operasi string dasar (`for...of`, `.split()`, `.map()`)

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis kode dan mengidentifikasi kekurangannya
- ✅ Memahami konsep ASCII dan penggunaannya
- ✅ Melakukan refactoring ke clean code
- ✅ Mengimplementasikan beberapa pendekatan berbeda untuk satu soal

---

## 🛠️ Tools

- **Editor:** VS Code
- **Online:** [CodePen](https://codepen.io), [JSFiddle](https://jsfiddle.net)

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1 →](docs/01-analisis-kode-original.md)**

---

**Quick Links:**

[Part 1](docs/01-analisis-kode-original.md) • [Part 2](docs/02-konsep-ascii.md) • [Part 3](docs/03-refactoring-step-by-step.md) • [Part 4](docs/04-kode-final.md) • [Part 5](docs/05-alternatif-1.md) • [Part 6](docs/06-alternatif-1b.md) • [Part 7](docs/07-alternatif-2.md) • [Part 8](docs/08-ringkasan-algoritma.md) • [Part 9](docs/09-perbandingan-kesimpulan.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
