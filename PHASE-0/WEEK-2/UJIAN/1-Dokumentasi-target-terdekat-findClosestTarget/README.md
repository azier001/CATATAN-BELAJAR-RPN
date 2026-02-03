# 📚 targetTerdekat - Panduan Lengkap
```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         🎯 targetTerdekat - PANDUAN LENGKAP 🎯                          ║
║                                                                          ║
║     Dari Nested Loop ke Single-Pass - Kuasai Semua Pendekatan           ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Algorithm%20|%20Optimization%20|%20Refactoring-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas **algoritma mencari jarak terdekat** antara karakter 'o' dan 'x' dalam array - dari nested loop hingga single-pass optimal, mencakup refactoring, optimasi bertahap, dan perbandingan 5 implementasi berbeda.

**Cocok untuk:**
- 🎓 **Pemula** - Belajar refactoring dan optimasi algoritma
- 💻 **Developer** - Improve code quality dan performa
- 🎯 **Job Seeker** - Persiapan interview coding
- 🚀 **Enthusiast** - Deep dive multiple solutions

---

## 🎯 Problem: targetTerdekat

**Deskripsi:**  
Cari jarak terdekat antara karakter 'o' dan 'x' dalam array.

**Input:** Array of characters  
**Output:** Number (jarak terdekat), atau 0 jika tidak ada 'x'

**Contoh:**
```javascript
targetTerdekat(['x', ' ', 'o'])  // 2
targetTerdekat(['o', 'x'])       // 1
targetTerdekat(['o', ' '])       // 0 (no 'x')
targetTerdekat(['x', ' ', 'o', ' ', 'x', 'o'])  // 1
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level | Waktu |
|------|-------|-------|-------|
| **[Part 1](docs/01-Permasalahan-dan-Kode-Awal.md)** | Problem & Kode Awal (V1, V2) | 🌱 Pemula | 15 menit |
| **[Part 2](docs/02-Refactoring-Nested-Loop.md)** | Refactoring ke Clean Code | 🌱 Pemula | 10 menit |
| **[Part 3](docs/03-Optimasi-Two-Pass.md)** | Optimasi Two-Pass (V3) | 🌿 Menengah | 25 menit |
| **[Part 4](docs/04-Solusi-Terbaik-Single-Pass.md)** | Solusi Terbaik Single-Pass (V4, V5) | 🌿 Menengah | 20 menit |
| **[Part 5](docs/05-Perbandingan-dan-Kesimpulan.md)** | Perbandingan & Kesimpulan | 🌿 Menengah | 15 menit |
| **[Bonus](docs/06-Algoritma-Cheatsheet.md)** | Quick Reference Interview | 🌱 Pemula | 5 menit |

**Total:** ~90 menit (1.5 jam)

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Bonus
  ↓        ↓        ↓        ↓        ↓        ↓
 15min   10min    25min    20min    15min    5min

Total: ~90 menit
```

**Hasil:**
- ✅ 5 implementasi berbeda (Versi 1-5)
- ✅ Refactoring & clean code
- ✅ Optimasi algoritma
- ✅ Trade-offs analysis

### **⚡ Jalur Cepat (Essentials)**
```
Part 1 → Part 4 → Part 5 → Bonus
  ↓        ↓        ↓        ↓
 15min   20min    15min    5min

Total: ~55 menit
```

### **🏆 Jalur Interview Prep**
```
Part 1 → Part 4 → Bonus
  ↓        ↓        ↓
 15min   20min    5min

Total: ~40 menit
```

---

## 📊 Quick Comparison: 5 Versi Implementasi

| Versi | Passes | Time | Space | Readability | Best For |
|-------|--------|------|-------|-------------|----------|
| **Versi 1: Original (Indonesia)** | 2 + nested | O(n×m) | O(n×m) | ⭐⭐⭐ | ❌ Buggy |
| **Versi 2: Refactored (English)** | 2 + nested | O(n×m) | O(n+m) | ⭐⭐⭐⭐ | Learning |
| **Versi 3: Two-Pass** | 3 | O(n) | O(1) | ⭐⭐⭐⭐ | Learning optimasi |
| **Versi 4: Single-Pass** | 1 | O(n) | O(1) | ⭐⭐⭐⭐⭐ | 🏆 Production |
| **Versi 5: Functional** | 1 | O(n) | O(1) | ⭐⭐⭐⭐ | FP style |

**Key Differences:**
- **Versi 1-2:** Nested loop, simpan semua jarak
- **Versi 3:** Two-pass (kiri→kanan, kanan→kiri)
- **Versi 4:** Single-pass, track lastO & lastX
- **Versi 5:** Single-pass dengan `reduce()`

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **Part 1** (15 menit)  
→ Focus: Pahami problem & lihat evolution kode

### **Saya Mau Refactor Code**
→ Langsung: **Part 2** (10 menit)  
→ Focus: Clean code principles

### **Saya Persiapan Interview**
→ Baca: **Part 1 → Part 4 → Bonus** (40 menit)  
→ Focus: Best solution + trade-offs

### **Saya Explore Optimasi**
→ Baca: **Part 3 → Part 4 → Part 5** (60 menit)  
→ Focus: Two-pass vs Single-pass

---

## 🧪 Test Cases Standar
```javascript
// Simple cases
targetTerdekat(['x', 'o'])               // 1
targetTerdekat(['o', 'x'])               // 1
targetTerdekat(['x', ' ', 'o'])          // 2

// Edge cases
targetTerdekat([' ', ' ', 'o', ' '])     // 0 (no 'x')
targetTerdekat(['o', 'o', 'o'])          // 0 (no 'x')

// Complex cases
targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])  // 1
targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])  // 1
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Berapa lama waktu yang dibutuhkan?</strong></summary>

- **Quick:** 40 menit (Part 1, 4, Bonus)
- **Normal:** 55 menit (Essentials)
- **Deep dive:** 90 menit (Semua part)

Pilih sesuai kebutuhan dan waktu tersedia!

</details>

<details>
<summary><strong>❓ Part mana yang paling penting?</strong></summary>

**Part 1 & Part 4** adalah must-read:
- Part 1: Pahami problem & evolution
- Part 4: Best solution (Single-Pass)

Sisanya optional tapi recommended untuk understanding lengkap.

</details>

<details>
<summary><strong>❓ Kenapa ada 5 versi implementasi?</strong></summary>

Karena:
- **Learning journey** - Dari Versi 1 (nested loop) ke Versi 4 (optimal)
- **Trade-offs** - Speed vs readability
- **Interview** - Tunjukkan kamu tahu alternatives

Dengan 5 versi, kamu bisa:
- Pilih sesuai situasi
- Jelaskan trade-offs
- Adaptasi berdasarkan feedback

</details>

<details>
<summary><strong>❓ Mana versi terbaik untuk production?</strong></summary>

**Versi 4 (Single-Pass)** - paling optimal:
- ✅ Hanya 1 loop
- ✅ O(n) time, O(1) space
- ✅ Paling readable & clean
- ✅ Production-ready

Versi 3 (Two-Pass) juga bagus untuk learning konsep optimasi.

</details>

---

## 📚 Prerequisites

**Perlu dikuasai:**
- ✅ JavaScript basics (variabel, function, loop)
- ✅ Array manipulation
- ✅ Conditional statements

**Tidak perlu:**
- ❌ Advanced algorithms
- ❌ Framework knowledge
- ❌ Complex math

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:

**Technical:**
- ✅ Refactor nested loop ke optimal algorithm
- ✅ Implement single-pass algorithm
- ✅ Analyze time & space complexity
- ✅ Choose best solution based on context

**Soft Skills:**
- ✅ Problem-solving methodology
- ✅ Code optimization thinking
- ✅ Trade-offs analysis
- ✅ Interview communication

---

## 💡 Critical Reminders

### **⚠️ Common Pitfalls:**
```javascript
// ❌ SALAH - Nested loop tidak efisien
for (const x of xPositions) {
  for (const o of oPositions) {
    // O(n×m) - lambat!
  }
}

// ✅ BENAR - Single pass
for (let i = 0; i < arr.length; i++) {
  // Track lastO & lastX
  // O(n) - cepat!
}

// ❌ SALAH - Simpan semua jarak
diff.push(distance)
return Math.min(...diff)

// ✅ BENAR - Track minimum langsung
if (distance < minDistance) minDistance = distance
```

---

## 🚀 Next Steps Setelah Selesai

**Practice:**
- Longest substring without repeating characters
- Two sum problem
- Container with most water

**Extend:**
- Multiple character pairs
- 2D array version
- Weighted distances

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**Siap untuk journey dari Nested Loop ke Single-Pass?**

**📚 [Mulai dari Part 1: Permasalahan & Kode Awal →](docs/01-Permasalahan-dan-Kode-Awal.md)**

---

**Quick Links:**

[Part 1](docs/01-Permasalahan-dan-Kode-Awal.md) • [Part 2](docs/02-Refactoring-Nested-Loop.md) • [Part 3](docs/03-Optimasi-Two-Pass.md) • [Part 4](docs/04-Solusi-Terbaik-Single-Pass.md) • [Part 5](docs/05-Perbandingan-dan-Kesimpulan.md) • [Bonus](docs/06-Algoritma-Cheatsheet.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
