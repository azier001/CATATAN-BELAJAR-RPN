# 📚 Group Animals - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         🎯 GROUP ANIMALS - COMPLETE LEARNING GUIDE 🎯                   ║
║                                                                          ║
║     Dari Kode Overkill ke Clean Code - Kuasai Best Practice & Optimasi  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Array%20|%20Grouping%20|%20Clean%20Code-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas **Grouping Animals berdasarkan huruf pertama** dari kode yang overkill hingga optimal - mencakup refactoring bertahap, multiple implementasi, dan best practices.

**Cocok untuk:**
- 🎓 **Pemula** - Belajar refactoring step-by-step
- 💻 **Developer** - Improve code quality & naming
- 🎯 **Job Seeker** - Persiapan interview coding
- 🚀 **Enthusiast** - Deep dive multiple solutions

---

## 🎯 Apa Masalahnya?

**Soal:** Buat function `groupAnimals(animals)` yang:
- Input: array string nama hewan
- Output: array 2D, dikelompokkan berdasarkan **huruf pertama**
- Grup terurut **alphabetically**
- Urutan dalam grup = **urutan input original**

**Contoh:**
```javascript
groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])
// Output: [['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']]
//          Grup 'a'           Grup 'c'    Grup 'k'
```

**Challenge:** Harus pakai **array saja** (no Object/Map/Set helper)

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level | Waktu |
|------|-------|-------|-------|
| **[Part 1](docs/01-Review-Kode-Original.md)** | Review Kode Original (Overkill) | 🌱 Pemula | 10 menit |
| **[Part 2](docs/02-Refactoring-Step-by-Step.md)** | Refactoring Bertahap (Step 1-4) | 🌿 Menengah | 20 menit |
| **[Part 3](docs/03-Ringkasan-Algoritma.md)** | Ringkasan 3 Versi Implementasi | 🌿 Menengah | 20 menit |
| **[Part 4](docs/04-Naming-Convention.md)** | Naming Convention Best Practice | 🌿 Menengah | 15 menit |
| **[Part 5](docs/05-Complexity-Analysis.md)** | Time & Space Complexity | 🌳 Advanced | 15 menit |
| **[Part 6](docs/06-Cheat-Sheet.md)** | Cheat Sheet & Quick Reference | 🌿 Menengah | 10 menit |

**Total:** ~90 menit (1.5 jam)

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6
  ↓        ↓        ↓        ↓        ↓        ↓
 10min   20min    20min    15min    15min    10min

Total: ~90 menit
```

**Hasil:**
- ✅ Refactoring skills step-by-step
- ✅ Multiple implementation approaches
- ✅ Clean code & naming best practices
- ✅ Complexity analysis
- ✅ Interview-ready knowledge

### **⚡ Jalur Cepat (Essentials)**
```
Part 1 → Part 3 → Part 6
  ↓        ↓        ↓
 10min   20min    10min

Total: ~40 menit
```

**Hasil:**
- ✅ Understand kode overkill
- ✅ Lihat 3 versi implementasi
- ✅ Quick reference

---

## 📊 Quick Comparison: 3 Versi Implementasi

| Versi | Style | Readability | Best For |
|-------|-------|-------------|----------|
| **For Loop Manual** | Imperative | ⭐⭐⭐⭐⭐ | Pemula, clarity, debugging |
| **Array.find()** | Functional | ⭐⭐⭐⭐⭐ | Modern codebase, production |
| **Array.findIndex()** | Functional | ⭐⭐⭐⭐ | When you need index |

**Key Differences:**
- **For Loop:** Explicit, easy to debug
- **find():** Returns element reference (best untuk kasus ini)
- **findIndex():** Returns index number

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **Part 1** (10 menit)  
→ Focus: Pahami kenapa kode original overkill

### **Saya Mau Refactor Code**
→ Langsung: **Part 2** (20 menit)  
→ Focus: Step-by-step refactoring

### **Saya Persiapan Interview**
→ Baca: **Part 1 → Part 3 → Part 6** (40 menit)  
→ Focus: Multiple solutions + trade-offs

### **Saya Explore Best Practices**
→ Baca: **Part 3 → Part 4 → Part 5** (50 menit)  
→ Focus: Clean code + complexity

---

## 🧪 Test Cases Standar
```javascript
// Valid groupings
groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])
// [['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']]

groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak'])
// [['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta']]

// Edge cases
groupAnimals([])                    // []
groupAnimals(['zebra'])             // [['zebra']]
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Berapa lama waktu yang dibutuhkan?</strong></summary>

- **Quick:** 40 menit (Part 1, 3, 6)
- **Normal:** 70 menit (Skip Part 5)
- **Deep dive:** 90 menit (Semua part)

</details>

<details>
<summary><strong>❓ Part mana yang paling penting?</strong></summary>

**Part 2 & Part 3 adalah must-read**. Setelah itu:
- **Untuk pemula:** Part 1-2-3
- **Untuk interview:** Part 1, 3, 6
- **Untuk best practices:** Part 3-4

</details>

<details>
<summary><strong>❓ Kenapa ada 3 versi implementasi?</strong></summary>

Karena dalam real-world:
- **Context matters** - Tim, project, timeline berbeda
- **Trade-offs exist** - Readability vs performance
- **Interview expects** - Discuss alternatives

Dengan 3 versi, kamu bisa pilih sesuai situasi dan explain trade-offs.

</details>

<details>
<summary><strong>❓ Apakah cocok untuk pemula?</strong></summary>

**Ya!** Part 1-3 sangat beginner-friendly dengan:
- Step-by-step explanation
- Visual examples
- No advanced knowledge required

</details>

---

## 📚 Prerequisites

**Perlu dikuasai:**
- ✅ JavaScript basics (variable, function, array)
- ✅ For loop & if-else
- ✅ Array indexing & methods
- ✅ String charAt atau bracket notation

**Tidak perlu:**
- ❌ Advanced algorithms
- ❌ Functional programming expert
- ❌ Framework knowledge

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:

**Technical:**
- ✅ Refactor kode step-by-step
- ✅ Implement grouping dengan pure array
- ✅ Write clean, readable code
- ✅ Use imperative & functional approaches
- ✅ Analyze time & space complexity

**Soft Skills:**
- ✅ Problem-solving methodology
- ✅ Code review mindset
- ✅ Trade-offs analysis
- ✅ Interview communication

---

## 💡 Critical Reminders

### **⚠️ Common Pitfalls:**
```javascript
// ❌ SALAH - Pakai sort() di awal (urutan dalam grup jadi salah)
const sorted = [...animals].sort()

// ✅ BENAR - Group dulu, sort grup setelahnya
result.sort((a, b) => a[0][0].localeCompare(b[0][0]))

// ❌ SALAH - Pakai Object sebagai helper (melanggar requirement)
const groups = {}

// ✅ BENAR - Pure array approach
const result = []
```

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**Siap untuk journey dari Overkill ke Clean Code?**

**📚 [Mulai dari Part 1: Review Kode Original →](docs/01-Review-Kode-Original.md)**

---

**Quick Links:**

[Part 1](docs/01-Review-Kode-Original.md) • [Part 2](docs/02-Refactoring-Step-by-Step.md) • [Part 3](docs/03-Ringkasan-Algoritma.md) • [Part 4](docs/04-Naming-Convention.md) • [Part 5](docs/05-Complexity-Analysis.md) • [Part 6](docs/06-Cheat-Sheet.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
