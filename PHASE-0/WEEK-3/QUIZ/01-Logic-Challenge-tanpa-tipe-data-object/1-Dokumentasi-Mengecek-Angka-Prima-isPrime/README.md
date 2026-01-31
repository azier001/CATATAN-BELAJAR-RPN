# 📚 Bilangan Prima - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         🎯 BILANGAN PRIMA - COMPLETE LEARNING GUIDE 🎯                  ║
║                                                                          ║
║     Dari Bug ke Optimal - Kuasai Semua Pendekatan & Best Practice        ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝

```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Math%20|%20Algorithm%20|%20Optimization-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas **Pengecekan Bilangan Prima** dari bug hingga optimal - mencakup analisis bug, perbaikan bertahap, refactoring, dan eksplorasi 3 implementasi berbeda.

**Cocok untuk:**
- 🎓 **Pemula** - Belajar debugging dan algoritma dasar
- 💻 **Developer** - Improve code quality dan optimasi
- 🎯 **Job Seeker** - Persiapan interview coding
- 🚀 **Enthusiast** - Deep dive multiple solutions

---

## 🎯 Apa itu Bilangan Prima?

**Bilangan prima** adalah bilangan bulat > 1 yang **hanya bisa dibagi oleh 1 dan dirinya sendiri**.

**Contoh:**
```javascript
2, 3, 5, 7, 11, 13, 17, 19, 23, 29...  ✅ Prima

4, 6, 8, 9, 10, 12, 14, 15...          ❌ Bukan Prima
```

**Cara Cek:**
```
Apakah angka punya pembagi selain 1 dan dirinya sendiri?
- Ada pembagi lain → Bukan prima
- Tidak ada → Prima!
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level | Waktu |
|------|-------|-------|-------|
| **[Part 1](docs/01-Analisis-Kode-Lama.md)** | Analisis Kode Bug & Identifikasi Masalah | 🌱 Pemula | 15 menit |
| **[Part 2](docs/02-Perbaikan-Step-by-Step.md)** | Perbaikan Bertahap (2 Tahap) | 🌿 Menengah | 20 menit |
| **[Part 3](docs/03-Refactoring-Clean-Code.md)** | Refactoring ke Clean Code | 🌿 Menengah | 15 menit |
| **[Part 4](docs/04-Alternatif-1-Optimasi.md)** | Optimasi dengan `i * i` | 🌳 Advanced | 20 menit |
| **[Part 5](docs/05-Alternatif-2-Pattern-6k.md)** | Pattern 6k ± 1 (Paling Cepat) | 🌳 Advanced | 25 menit |
| **[Part 6](docs/06-Perbandingan-Kesimpulan.md)** | Perbandingan & Trade-offs | 🌿 Menengah | 15 menit |

**Total:** ~110 menit (1.5+ jam)

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6
  ↓        ↓        ↓        ↓        ↓        ↓
 15min   20min    15min    20min    25min    15min

Total: ~110 menit
```

**Hasil:**
- ✅ Debugging & problem solving
- ✅ 3 implementasi berbeda
- ✅ Clean code principles
- ✅ Optimasi algoritma
- ✅ Trade-offs analysis

### **⚡ Jalur Cepat (Essentials)**
```
Part 1 → Part 3 → Part 6
  ↓        ↓        ↓
 15min   15min    15min

Total: ~45 menit
```

**Hasil:**
- ✅ Bug identification
- ✅ Clean code basics
- ✅ Quick comparison

---

## 📊 Quick Comparison: 3 Versi Implementasi

| Versi | Kecepatan | Readability | Best For |
|-------|-----------|-------------|----------|
| **For Loop Sederhana** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Pemula, belajar |
| **Alternatif 1 (`i * i`)** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Production code |
| **Alternatif 2 (6k±1)** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Competitive programming |

**Key Differences:**
- **For Loop:** Loop sampai √n, cek semua angka ganjil
- **Alternatif 1:** Pakai `i * i` (lebih cepat dari `Math.sqrt`)
- **Alternatif 2:** Pakai pattern 6k±1 (skip lebih banyak angka)

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **Part 1** (15 menit)  
→ Focus: Memahami bug dan cara berpikir

### **Saya Mau Refactor Code**
→ Langsung: **Part 3** (15 menit)  
→ Focus: Clean code principles

### **Saya Persiapan Interview**
→ Baca: **Part 1 → Part 3 → Part 6** (45 menit)  
→ Focus: Bug fixing + trade-offs

### **Saya Explore Optimasi**
→ Baca: **Part 4 → Part 5 → Part 6** (60 menit)  
→ Focus: Performance optimization

---

## 🧪 Test Cases Standar

```javascript
// Valid prime numbers
isPrime(2)      // true ✅ (satu-satunya prima genap)
isPrime(3)      // true ✅
isPrime(7)      // true ✅
isPrime(23)     // true ✅

// Not prime
isPrime(1)      // false ❌ (bukan prima)
isPrime(4)      // false ❌ (2 × 2)
isPrime(9)      // false ❌ (3 × 3)
isPrime(33)     // false ❌ (3 × 11)

// Edge cases
isPrime(0)      // false ❌
isPrime(-5)     // false ❌
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Berapa lama waktu yang dibutuhkan?</strong></summary>

- **Quick:** 45 menit (Part 1, 3, 6)
- **Normal:** 70 menit (Essentials + 1 optimasi)
- **Deep dive:** 110 menit (Semua part)

Pilih sesuai kebutuhan dan waktu yang tersedia!

</details>

<details>
<summary><strong>❓ Part mana yang paling penting?</strong></summary>

**Part 1 adalah must-read** untuk semua. Setelah itu:
- **Untuk belajar:** Part 2-3
- **Untuk interview:** Part 1, 3, 6
- **Untuk optimasi:** Part 4-5

</details>

<details>
<summary><strong>❓ Kenapa ada 3 versi implementasi?</strong></summary>

Karena dalam real-world:
- **Context matters** - Tergantung kebutuhan project
- **Trade-offs exist** - Kecepatan vs readability
- **Interview expects** - Bisa diskusikan alternatif

Dengan 3 versi, kamu bisa:
- Pilih sesuai situasi
- Jelaskan trade-offs di interview
- Adaptasi berdasarkan feedback

</details>

<details>
<summary><strong>❓ Apakah cocok untuk pemula?</strong></summary>

**Ya!** Part 1-3 sangat beginner-friendly dengan:
- Penjelasan step-by-step
- Bahasa sederhana
- Visual examples
- Debugging methodology

Part 4-5 lebih advanced tapi tetap dijelaskan dengan detail.

</details>

---

## 📚 Prerequisites

**Perlu dikuasai:**
- ✅ JavaScript basics (variabel, function, array)
- ✅ For loop & conditionals
- ✅ Operasi matematika dasar (pembagian, akar kuadrat)

**Tidak perlu:**
- ❌ Advanced algorithms
- ❌ Framework knowledge
- ❌ Matematika tingkat lanjut

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:

**Technical:**
- ✅ Debug code secara sistematis
- ✅ Implementasi prime number checker
- ✅ Menulis clean, readable code
- ✅ Optimasi algoritma untuk performa

**Soft Skills:**
- ✅ Problem-solving methodology
- ✅ Code review mindset
- ✅ Trade-offs analysis
- ✅ Interview communication

---

## 🛠️ Tools Recommendation

- **Editor:** VS Code, Sublime Text
- **Browser:** Chrome DevTools (F12)
- **Online:** [CodePen](https://codepen.io), [JSFiddle](https://jsfiddle.net)

---

## 🚀 Next Steps Setelah Selesai

**Practice:**
- Fibonacci checker
- Perfect number validator
- Factor finder

**Extend:**
- Sieve of Eratosthenes (cari banyak prima sekaligus)
- Prime factorization
- Twin primes checker

---

## 💡 Critical Reminders

### **⚠️ Common Pitfalls:**

```javascript
// ❌ SALAH - Tidak handle angka 2
if (num % 2 === 0) return false

// ✅ BENAR - 2 adalah prima
if (num === 2) return true
if (num % 2 === 0) return false

// ❌ SALAH - Loop tidak efisien
for (let i = 2; i < num; i++)

// ✅ BENAR - Cukup sampai √num
for (let i = 2; i <= Math.sqrt(num); i++)

// ❌ SALAH - Lupa handle num ≤ 1
if (num === 2) return true

// ✅ BENAR - Check dulu
if (num <= 1) return false
if (num === 2) return true
```

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**Siap untuk journey dari Bug ke Optimal Code?**

**📚 [Mulai dari Part 1: Analisis Kode Lama →](docs/01-Analisis-Kode-Lama.md)**

---

**Quick Links:**

[Part 1](docs/01-Analisis-Kode-Lama.md) • [Part 2](docs/02-Perbaikan-Step-by-Step.md) • [Part 3](docs/03-Refactoring-Clean-Code.md) • [Part 4](docs/04-Alternatif-1-Optimasi.md) • [Part 5](docs/05-Alternatif-2-Pattern-6k.md) • [Part 6](docs/06-Perbandingan-Kesimpulan.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
