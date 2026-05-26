# 📚 Find Mode - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🎯 FIND MODE - COMPLETE LEARNING GUIDE 🎯                     ║
║                                                                          ║
║         Dari Diskusi Bertahap ke Clean Code - Kuasai Semua Versi        ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Beginner-green)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Array%20|%20Frequency%20|%20Refactoring-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini merekam **proses belajar nyata** — dari membaca soal, diskusi bertahap, membangun solusi, debugging, hingga refactoring ke clean code.

**Cocok untuk:**
- 🎓 **Pemula** - Belajar dari dasar dengan diskusi bertahap
- 💻 **Developer** - Improve code quality & naming convention
- 🎯 **Job Seeker** - Memahami cara berpikir problem solving

---

## 🎯 Apa itu Modus?

**Modus** adalah angka yang paling sering muncul dalam sebuah deret angka.

```javascript
cariModus([10, 4, 5, 2, 4])  // 4  → muncul 2x
cariModus([10, 3, 1, 2, 5])  // -1 → semua muncul 1x
cariModus([7, 7, 7, 7, 7])   // -1 → hanya 1 nilai unik
cariModus([5, 10, 10, 6, 5]) // 5  → dua modus, ambil pertama
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level | Waktu |
|------|-------|-------|-------|
| **[Part 1](docs/01-Pengenalan-Soal.md)** | Pengenalan Soal & Pemahaman Masalah | 🌱 Pemula | 10 min |
| **[Part 2](docs/02-Membangun-Solusi.md)** | Proses Diskusi & Membangun Solusi | 🌱 Pemula | 15 min |
| **[Part 3](docs/03-Debugging-Perbaikan.md)** | Debugging & Perbaikan Logic | 🌿 Menengah | 10 min |
| **[Part 4](docs/04-Refactoring.md)** | Refactoring cariModus → findMode | 🌿 Menengah | 10 min |
| **[Part 5](docs/05-Ringkasan-Algoritma.md)** | Ringkasan Algoritma Tiap Versi | 🌿 Menengah | 15 min |
| **[Part 6](docs/06-Perbandingan-Kesimpulan.md)** | Perbandingan & Kesimpulan | 🌿 Menengah | 10 min |

**Total:** ~70 menit

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6
  ↓        ↓        ↓        ↓        ↓        ↓
10min    15min    10min    10min    15min    10min

Total: ~70 menit
```

**Hasil:**
- ✅ Paham proses berpikir dari nol
- ✅ 3 implementasi berbeda
- ✅ Clean code principles
- ✅ Bisa refactor kode sendiri

### **⚡ Jalur Cepat (Essentials)**
```
Part 1 → Part 2 → Part 5 → Part 6
  ↓        ↓        ↓        ↓
10min    15min    15min    10min

Total: ~50 menit
```

---

## 📊 Quick Comparison: 3 Versi Kode

| Versi | Pendekatan | Complexity | Best For |
|-------|-----------|------------|----------|
| **cariModus v1** | Two Array (includes + indexOf) | O(n²) | Learning |
| **findMode v2** | Two Array (indexOf only) | O(n²) | Clean Code |
| **findMode v3** | Frequency Map (Object) | O(n) | Production |

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **Part 1** lalu lanjut urut  
→ Focus: Pahami proses berpikir

### **Saya Mau Lihat Kode Final**
→ Langsung: **Part 5** (Ringkasan Algoritma)  
→ Focus: 3 versi kode + pitfalls

### **Saya Mau Belajar Refactoring**
→ Baca: **Part 4** (Refactoring)  
→ Focus: Clean code & naming convention

---

## 🧪 Test Cases Standar

```javascript
findMode([10, 4, 5, 2, 4])    // 4
findMode([5, 10, 10, 6, 5])   // 5  (dua modus, ambil pertama)
findMode([10, 3, 1, 2, 5])    // -1 (semua muncul 1x)
findMode([1, 2, 3, 3, 4, 5])  // 3
findMode([7, 7, 7, 7, 7])     // -1 (hanya 1 nilai unik)
findMode([1, 2, 1, 2, 3, 3])  // 1  (tiga modus, ambil pertama)
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Berapa lama waktu yang dibutuhkan?</strong></summary>

- **Quick:** ~50 menit (Part 1, 2, 5, 6)
- **Lengkap:** ~70 menit (Semua part)

</details>

<details>
<summary><strong>❓ Part mana yang paling penting?</strong></summary>

**Part 2 adalah must-read** — proses diskusi membangun solusi dari nol. Setelah itu Part 5 untuk ringkasan semua versi kode.

</details>

<details>
<summary><strong>❓ Kenapa ada 3 versi kode?</strong></summary>

- **v1 (cariModus)** — solusi awal dari proses belajar
- **v2 (findMode)** — hasil refactoring naming & struktur
- **v3 (findMode)** — versi optimal dengan frequency map

</details>

---

## 📚 Prerequisites

**Perlu dikuasai:**
- ✅ JavaScript basics (variabel, function, array)
- ✅ Loop (for, forEach)
- ✅ Array methods (push, indexOf, includes)

---

## 🎯 Learning Outcomes

**Technical:**
- ✅ Teknik two array tracking
- ✅ Frequency map dengan object
- ✅ Refactoring & clean code
- ✅ Debugging logic error

**Problem Solving:**
- ✅ Cara memecah soal step-by-step
- ✅ Identifikasi edge cases
- ✅ Analisis trade-offs antar versi

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1: Pengenalan Soal →](docs/01-Pengenalan-Soal.md)**

---

**Quick Links:**

[Part 1](docs/01-Pengenalan-Soal.md) • [Part 2](docs/02-Membangun-Solusi.md) • [Part 3](docs/03-Debugging-Perbaikan.md) • [Part 4](docs/04-Refactoring.md) • [Part 5](docs/05-Ringkasan-Algoritma.md) • [Part 6](docs/06-Perbandingan-Kesimpulan.md)

---

Made with ❤️ from real learning session

**Happy Learning! 🚀**

</div>
