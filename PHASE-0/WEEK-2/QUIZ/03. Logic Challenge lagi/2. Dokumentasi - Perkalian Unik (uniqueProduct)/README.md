```markdown
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🚀 PERKALIAN UNIK - COMPLETE LEARNING GUIDE 🚀               ║
║                                                                          ║
║        Dari O(n²) ke O(n) - Kuasai Semua Pendekatan & Optimasi         ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Array%20|%20Math%20|%20Optimization-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi lengkap ini membahas problem **Perkalian Unik (Unique Product)** dari berbagai sudut pandang - mulai dari solusi paling sederhana hingga optimasi tingkat lanjut. Cocok untuk:

- 🎓 **Pemula** yang ingin belajar algoritma array
- 💻 **Developer** yang ingin optimasi performa
- 🎯 **Job Seeker** yang persiapan interview coding
- 🚀 **Enthusiast** yang suka deep dive ke problem solving

---

## 🎯 Apa itu Problem Perkalian Unik?

### **Deskripsi Problem:**

Diberikan sebuah array berisi angka, kembalikan array baru dimana setiap elemennya adalah **hasil kali semua elemen lain** (kecuali elemen di posisi tersebut).

### **Contoh:**

```javascript
Input:  [1, 2, 3, 4, 5]
Output: [120, 60, 40, 30, 24]

Penjelasan:
- 120 = 2 × 3 × 4 × 5  (semua kecuali 1)
- 60  = 1 × 3 × 4 × 5  (semua kecuali 2)
- 40  = 1 × 2 × 4 × 5  (semua kecuali 3)
- 30  = 1 × 2 × 3 × 5  (semua kecuali 4)
- 24  = 1 × 2 × 3 × 4  (semua kecuali 5)
```

### **Constraint:**
- Array minimal 2 elemen
- Bisa ada angka negatif
- Bisa ada angka 0
- Tidak boleh menggunakan operator pembagian (opsional tergantung versi problem)

---

## 📚 Daftar Part Dokumentasi

### **Part 1: Pengenalan & Analisis Problem** 🎯
📄 File: `01-Pengenalan-Problem.md`

- Analisis mendalam problem statement
- Edge cases yang perlu diperhatikan
- Test cases lengkap dengan penjelasan
- Requirement analysis

**Level:** 🌱 Pemula  
**Estimasi Baca:** 10 menit

---

### **Part 2: Solusi Nested Loop (O(n²))** 🐢
📄 File: `02-Solusi-Nested-Loop.md`

- Pendekatan paling straightforward
- Bug umum: perbandingan nilai vs index
- Implementasi yang benar
- Visualisasi eksekusi step-by-step

**Level:** 🌱 Pemula  
**Estimasi Baca:** 15 menit  
**Complexity:** Time O(n²), Space O(n)

---

### **Part 3: Optimasi Single Loop (O(n))** ⚡
📄 File: `03-Optimasi-Single-Loop.md`

- Konsep optimasi dengan pembagian
- Handling edge case: 0, 1, dan 2+ angka nol
- Pseudocode algoritma
- Visualisasi 3 skenario berbeda
- Implementasi bertahap

**Level:** 🌿 Menengah  
**Estimasi Baca:** 25 menit  
**Complexity:** Time O(n), Space O(n)

---

### **Part 4: Best Practice & Refactoring** 📝
📄 File: `04-Best-Practice-Refactoring.md`

- Naming convention yang baik
- Refactoring dari Bahasa Indonesia ke English
- Perbandingan: Index loop vs for...of
- Clean code principles

**Level:** 🌿 Menengah  
**Estimasi Baca:** 20 menit

---

### **Part 5: Functional Programming Approach** 🎨
📄 File: `05-Functional-Programming.md`

- Pengenalan functional programming
- Implementasi dengan `reduce()`, `filter()`, `map()`
- Visualisasi detail setiap method
- Perbandingan Imperative vs Declarative
- Pros & cons FP style

**Level:** 🌳 Advanced  
**Estimasi Baca:** 30 menit  
**Complexity:** Time O(n), Space O(n)

---

### **Part 6: Prefix & Suffix Product** 🚀
📄 File: `06-Prefix-Suffix-Product.md`

- Solusi paling optimal tanpa pembagian
- Konsep prefix dan suffix arrays
- Visualisasi dengan diagram
- Implementasi step-by-step
- Kapan menggunakan approach ini

**Level:** 🌳 Advanced  
**Estimasi Baca:** 25 menit  
**Complexity:** Time O(n), Space O(n)

---

### **Part 7: Perbandingan & Kesimpulan** 🏆
📄 File: `07-Perbandingan-Kesimpulan.md`

- Tabel perbandingan lengkap semua solusi
- Flowchart pemilihan solusi
- Rekomendasi based on use case
- Tips untuk interview coding
- Resources untuk belajar lebih lanjut

**Level:** 🌿 Menengah  
**Estimasi Baca:** 15 menit

---

## 🗺️ Roadmap Belajar

### **🎯 Jalur Pemula (Start Here!)**

```
Part 1 → Part 2 → Part 3 → Part 7
  ↓        ↓        ↓        ↓
 10min   15min    25min    15min
         
Total: ~65 menit
```

**Hasil pembelajaran:**
- ✅ Memahami problem dengan baik
- ✅ Bisa implement solusi dasar
- ✅ Bisa optimasi ke O(n)
- ✅ Tahu kapan pakai solusi mana

---

### **🚀 Jalur Lengkap (Deep Dive)**

```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6 → Part 7
  ↓        ↓        ↓        ↓        ↓        ↓        ↓
 10min   15min    25min    20min    30min    25min    15min

Total: ~140 menit (2.3 jam)
```

**Hasil pembelajaran:**
- ✅ Semua yang ada di jalur pemula
- ✅ Clean code & best practices
- ✅ Functional programming style
- ✅ Alternative optimal solutions
- ✅ Siap untuk interview coding

---

### **💼 Jalur Interview Preparation**

```
Part 1 → Part 2 → Part 3 → Part 6 → Part 7
  ↓        ↓        ↓        ↓        ↓
 10min   15min    25min    25min    15min

Total: ~90 menit
```

**Hasil pembelajaran:**
- ✅ Multiple approaches untuk dijawab
- ✅ Trade-offs masing-masing solusi
- ✅ Solusi tanpa pembagian (sering ditanya!)
- ✅ Communication skills saat interview

---

## 📊 Quick Comparison: Semua Solusi

| 🏷️ Solusi | ⏱️ Time | 💾 Space | 📖 Readability | 🎯 Best For |
|-----------|---------|----------|----------------|-------------|
| **Nested Loop** | O(n²) | O(n) | ⭐⭐⭐⭐⭐ | Belajar, array kecil |
| **Single Loop (Pembagian)** | O(n) | O(n) | ⭐⭐⭐⭐ | Production, general use |
| **Functional Programming** | O(n) | O(n) | ⭐⭐⭐⭐ | FP codebase, modern JS |
| **Prefix/Suffix** | O(n) | O(n) | ⭐⭐⭐ | Interview, tanpa pembagian |

---

## 🎮 Quick Start Guide

### **1️⃣ Saya Pemula Total**

```
Mulai dari: Part 1
Waktu: 10 menit
Focus: Memahami problem dulu
```

### **2️⃣ Saya Sudah Paham Problem**

```
Mulai dari: Part 2
Waktu: 15 menit
Focus: Implement solusi pertama
```

### **3️⃣ Saya Butuh Solusi Optimal**

```
Langsung ke: Part 3 atau Part 6
Waktu: 25 menit
Focus: O(n) solutions
```

### **4️⃣ Saya Mau Jago Semua Approach**

```
Baca semua part: 1-7
Waktu: 2-3 jam
Focus: Deep understanding
```

---

## 💡 Pro Tips

> **🎯 Untuk Pemula**  
> Jangan skip Part 1 dan 2! Foundation yang kuat akan membuat Part 3-7 lebih mudah dipahami.

> **⚡ Untuk yang Terburu-buru**  
> Minimal baca: Part 1 → Part 3 → Part 7 (total ~50 menit)

> **🚀 Untuk Interview Prep**  
> Latih menjelaskan trade-off antara O(n²) dan O(n) solution dengan jelas.

> **💻 Untuk Praktisi**  
> Part 4 (Best Practice) dan Part 5 (FP) akan upgrade kualitas kode Anda.

---

## 🧪 Test Cases Standar

Semua solusi di dokumentasi ini sudah ditest dengan:

```javascript
// Basic cases
uniqueProduct([2, 4, 6])           // [24, 12, 8]
uniqueProduct([1, 2, 3, 4, 5])     // [120, 60, 40, 30, 24]

// Duplicates
uniqueProduct([1, 3, 3, 1])        // [9, 3, 3, 9]
uniqueProduct([2, 1, 8, 10, 2])    // [160, 320, 40, 32, 160]

// Edge cases with zero
uniqueProduct([2, 0, 4])           // [0, 8, 0]
uniqueProduct([2, 0, 0, 4])        // [0, 0, 0, 0]
uniqueProduct([0, 0, 0])           // [0, 0, 0]

// Negative numbers
uniqueProduct([-2, 3, -4])         // [12, 8, 6]
uniqueProduct([1, -1, 1])          // [-1, -1, -1]
```

---

## 🏅 Achievement System

Track progress belajar Anda:

- 🥉 **Bronze**: Selesai Part 1-2 (Paham problem & solusi dasar)
- 🥈 **Silver**: Selesai Part 1-4 (Bisa optimasi & clean code)
- 🥇 **Gold**: Selesai Part 1-6 (Master multiple approaches)
- 💎 **Diamond**: Selesai semua + latihan sendiri (Expert level)

---

## 🤝 Contribution & Feedback

Dokumentasi ini dibuat untuk membantu belajar. Jika ada:
- ❓ Bagian yang kurang jelas
- 💡 Ide improvement
- 🐛 Typo atau error
- ✨ Request topik tambahan

Silakan buat issue atau pull request!

---

## 📜 License

Dokumentasi ini bebas digunakan untuk keperluan belajar.

---

## 🎯 Mari Mulai!

**Siap untuk memulai perjalanan belajar?**

Pilih part sesuai level Anda dari daftar di atas dan mulai belajar!

---

<div align="center">

**Happy Learning! 🚀**

Made with ❤️ for learners

</div>
