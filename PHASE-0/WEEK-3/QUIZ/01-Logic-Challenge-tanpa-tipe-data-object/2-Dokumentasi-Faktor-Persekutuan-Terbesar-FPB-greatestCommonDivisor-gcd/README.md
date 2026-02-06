# 📚 GCD (FPB) - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              🎯 GCD/FPB - COMPLETE LEARNING GUIDE 🎯                    ║
║                                                                          ║
║          Dari Brute Force ke Euclidean - Kuasai Semua Versi             ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Math%20|%20Algorithm%20|%20Optimization-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas **Greatest Common Divisor (GCD)** atau **Faktor Persekutuan Terbesar (FPB)** dari kode original hingga optimasi - mencakup evaluasi, refactoring, dan 3+ implementasi berbeda.

**Cocok untuk:**
- 🎓 **Pemula** - Belajar dari dasar
- 💻 **Developer** - Improve code quality
- 🎯 **Job Seeker** - Persiapan interview
- 🚀 **Enthusiast** - Deep dive algoritma

---

## 🎯 Apa itu GCD/FPB?

**GCD (Greatest Common Divisor)** atau **FPB (Faktor Persekutuan Terbesar)** adalah bilangan bulat terbesar yang dapat membagi habis dua bilangan.

**Contoh:**
```javascript
GCD(12, 16) = 4   // 12 = 4×3, 16 = 4×4
GCD(50, 40) = 10  // 50 = 10×5, 40 = 10×4
GCD(17, 23) = 1   // Bilangan prima relatif
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level | Waktu |
|------|-------|-------|-------|
| **[Part 1](docs/01-Analisis-Kode-Original.md)** | Analisis Kode Original & Evaluasi | 🌱 Pemula | 10 min |
| **[Part 2](docs/02-Refactoring-Naming.md)** | Refactoring Naming Convention | 🌱 Pemula | 10 min |
| **[Part 3](docs/03-Euclidean-Iteratif.md)** | Euclidean Algorithm - Iteratif | 🌿 Menengah | 15 min |
| **[Part 4](docs/04-Euclidean-Rekursif.md)** | Euclidean Algorithm - Rekursif | 🌿 Menengah | 10 min |
| **[Part 5](docs/05-Ringkasan-Algoritma.md)** | Ringkasan 3 Versi (Detail) | 🌿 Menengah | 15 min |
| **[Part 6](docs/06-Performance-Alternatif.md)** | Performance Testing & Alternatif | 🌳 Advanced | 20 min |
| **[Part 7](docs/07-Perbandingan-Kesimpulan.md)** | Perbandingan & Best Practices | 🌿 Menengah | 10 min |

**Total:** ~90 menit

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6 → Part 7
  ↓        ↓        ↓        ↓        ↓        ↓        ↓
10min    10min    15min    10min    15min    20min    10min

Total: ~90 menit
```

**Hasil:**
- ✅ 3+ implementasi berbeda
- ✅ Clean code principles
- ✅ Optimasi algoritma
- ✅ Performance analysis

### **⚡ Jalur Cepat (Essentials)**
```
Part 1 → Part 3 → Part 5 → Part 7
  ↓        ↓        ↓        ↓
10min    15min    15min    10min

Total: ~50 menit
```

**Hasil:**
- ✅ Konsep dasar
- ✅ Euclidean algorithm
- ✅ Quick comparison

---

## 📊 Quick Comparison: 3 Versi Utama

| Versi | Kecepatan | Readability | Best For |
|-------|-----------|-------------|----------|
| **Brute Force** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Learning |
| **Euclidean Iteratif** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Production |
| **Euclidean Rekursif** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Interview |

**Key Differences:**
- **Brute Force:** Loop 1 sampai min(a,b) - O(n)
- **Euclidean Iteratif:** While loop dengan swap - O(log n)
- **Euclidean Rekursif:** 2 baris elegant - O(log n)

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **Part 1** (10 menit)  
→ Focus: Memahami konsep dasar

### **Saya Mau Refactor Code**
→ Langsung: **Part 2** (10 menit)  
→ Focus: Clean code naming

### **Saya Persiapan Interview**
→ Baca: **Part 1 → Part 4 → Part 5** (35 menit)  
→ Focus: Algoritma + trade-offs

### **Saya Explore Optimasi**
→ Baca: **Part 6 → Part 7** (30 menit)  
→ Focus: Performance & alternatives

---

## 🧪 Test Cases Standar

```javascript
// Valid GCD
gcd(12, 16)    // 4 ✅
gcd(50, 40)    // 10 ✅
gcd(22, 99)    // 11 ✅
gcd(24, 36)    // 12 ✅
gcd(17, 23)    // 1 ✅ (prima relatif)

// Edge cases
gcd(0, 5)      // 5 ✅
gcd(7, 0)      // 7 ✅
gcd(42, 42)    // 42 ✅
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Berapa lama waktu yang dibutuhkan?</strong></summary>

- **Quick:** 50 menit (Part 1, 3, 5, 7)
- **Normal:** 70 menit (Skip Part 6)
- **Deep dive:** 90 menit (Semua part)

</details>

<details>
<summary><strong>❓ Part mana yang paling penting?</strong></summary>

**Part 3 adalah must-read** - Euclidean algorithm inti dari semua. Setelah itu:
- **Untuk interview:** Part 4 (rekursif)
- **Untuk production:** Part 6 (performance)

</details>

<details>
<summary><strong>❓ Kenapa ada 3+ versi implementasi?</strong></summary>

Karena:
- **Context matters** - Tergantung kebutuhan
- **Trade-offs exist** - Speed vs readability
- **Interview expects** - Bisa diskusikan alternatif

</details>

<details>
<summary><strong>❓ Apakah cocok untuk pemula?</strong></summary>

**Ya!** Part 1-2 sangat beginner-friendly:
- Penjelasan step-by-step
- Bahasa sederhana
- Contoh konkret

</details>

---

## 📚 Prerequisites

**Perlu dikuasai:**
- ✅ JavaScript basics (variabel, function)
- ✅ Loop (for, while)
- ✅ Modulo operator (%)

**Tidak perlu:**
- ❌ Advanced algorithms
- ❌ Matematika tingkat lanjut

---

## 🎯 Learning Outcomes

Setelah selesai:

**Technical:**
- ✅ Implementasi GCD (3+ cara)
- ✅ Euclidean algorithm
- ✅ Optimasi O(n) → O(log n)
- ✅ Rekursif vs iteratif

**Soft Skills:**
- ✅ Problem-solving
- ✅ Code refactoring
- ✅ Trade-offs analysis
- ✅ Interview communication

---

## 💡 Critical Reminders

### **⚠️ Common Pitfalls:**

```javascript
// ❌ SALAH - Tidak handle edge case
function gcd(a, b) {
  // Tidak cek a atau b = 0
}

// ✅ BENAR - Handle edge case
function gcd(a, b) {
  if (a === 0) return b
  if (b === 0) return a
  // ...
}

// ❌ SALAH - Loop terlalu banyak
for (let i = 1; i <= Math.max(a, b); i++)

// ✅ BENAR - Loop optimal
for (let i = 1; i <= Math.min(a, b); i++)

// ❌ SALAH - Recursion tanpa base case
function gcd(a, b) {
  return gcd(b, a % b) // Stack overflow!
}

// ✅ BENAR - Ada base case
function gcd(a, b) {
  if (b === 0) return a
  return gcd(b, a % b)
}
```

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**Siap untuk journey dari Brute Force ke Euclidean?**

**📚 [Mulai dari Part 1: Analisis Kode Original →](docs/01-Analisis-Kode-Original.md)**

---

**Quick Links:**

[Part 1](docs/01-Analisis-Kode-Original.md) • [Part 2](docs/02-Refactoring-Naming.md) • [Part 3](docs/03-Euclidean-Iteratif.md) • [Part 4](docs/04-Euclidean-Rekursif.md) • [Part 5](docs/05-Ringkasan-Algoritma.md) • [Part 6](docs/06-Performance-Alternatif.md) • [Part 7](docs/07-Perbandingan-Kesimpulan.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
