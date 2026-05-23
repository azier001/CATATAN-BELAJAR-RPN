# 📚 Mengelompokkan Angka - Complete Learning Guide
```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         🎯 MENGELOMPOKKAN ANGKA - COMPLETE LEARNING GUIDE 🎯            ║
║                                                                          ║
║       Dari Kode Awal ke Clean Code - 3 Pendekatan Berbeda               ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Array%20|%20Grouping%20|%20Clean%20Code-blue)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas **pengelompokan angka** berdasarkan kategori: genap, ganjil, dan kelipatan 3. Mencakup review kode, refactoring, dan eksplorasi 3 implementasi berbeda.

**Cocok untuk:**
- 🎓 **Pemula** - Belajar logic dan clean code
- 💻 **Developer** - Explore multiple solutions
- 🎯 **Job Seeker** - Persiapan coding interview

---

## 🎯 Problem Statement

Buat function `mengelompokkanAngka(arr)` yang mengelompokkan angka ke 3 kategori:
1. **Genap** (bukan kelipatan 3)
2. **Ganjil** (bukan kelipatan 3)
3. **Kelipatan 3** (prioritas tertinggi)

**Prioritas:** Kelipatan 3 > Genap/Ganjil

**Contoh:**
```javascript
mengelompokkanAngka([2, 4, 6])
// Output: [[2, 4], [], [6]]
// 6 masuk kelipatan 3, bukan genap

mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])
// Output: [[2, 4, 8], [1, 5, 7], [3, 6, 9]]
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Waktu | Isi |
|------|-------|-------|-----|
| **[Part 1](docs/01-Review-Kode-Awal.md)** | Review Kode Original | 10 min | Cek kode awal, sudah benar? |
| **[Part 2](docs/02-Refactoring-Clean-Code.md)** | Clean Code (2 Versi) | 15 min | For loop & Filter method |
| **[Part 3](docs/03-Ringkasan-Algoritma.md)** | 3 Versi + Ringkasan | 20 min | For, Filter, Reduce + cheat sheet |
| **[Part 4](docs/04-Cheat-Sheet.md)** | Quick Reference | 10 min | Comparison & interview tips |

**Total:** ~55 menit

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap**
```
Part 1 → Part 2 → Part 3 → Part 4
  ↓        ↓        ↓        ↓
10min    15min    20min    10min
```

### **⚡ Jalur Cepat**
```
Part 2 → Part 4
  ↓        ↓
15min    10min
```

---

## 📊 Quick Comparison: 3 Versi

| Versi | Style | Lines | Best For |
|-------|-------|-------|----------|
| **For Loop** | Imperative | 13 | Pemula, clarity |
| **Filter** | Functional | 15 | Modern codebase |
| **Reduce** | Functional | 13 | FP enthusiasts |

**Preview:**

**For Loop:**
```javascript
function groupNumbers(numbers) {
  const evenNumbers = []
  const oddNumbers = []
  const multiplesOfThree = []

  for (const value of numbers) {
    if (value % 3 === 0) {
      multiplesOfThree.push(value)
    } else if (value % 2 === 0) {
      evenNumbers.push(value)
    } else {
      oddNumbers.push(value)
    }
  }

  return [evenNumbers, oddNumbers, multiplesOfThree]
}
```

**Filter:**
```javascript
function groupNumbers(numbers) {
  const evenNumbers = numbers.filter(
    number => number % 2 === 0 && number % 3 !== 0
  )
  const oddNumbers = numbers.filter(
    number => number % 2 !== 0 && number % 3 !== 0
  )
  const multiplesOfThree = numbers.filter(
    number => number % 3 === 0
  )

  return [evenNumbers, oddNumbers, multiplesOfThree]
}
```

**Reduce:**
```javascript
function groupNumbers(numbers) {
  const result = numbers.reduce(
    (groups, number) => {
      if (number % 3 === 0) {
        groups[2].push(number)
      } else if (number % 2 === 0) {
        groups[0].push(number)
      } else {
        groups[1].push(number)
      }
      return groups
    },
    [[], [], []]
  )

  return result
}
```

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **Part 1** (10 menit)  
→ Focus: Memahami problem & logic

### **Saya Mau Clean Code**
→ Langsung: **Part 2** (15 menit)  
→ Focus: 2 pendekatan berbeda

### **Saya Explore Solutions**
→ Baca: **Part 3** (20 menit)  
→ Focus: 3 versi + trade-offs

### **Saya Persiapan Interview**
→ Baca: **Part 2 + Part 4** (25 menit)  
→ Focus: Implementation + comparison

---

## 🧪 Test Cases
```javascript
console.log(groupNumbers([2, 4, 6]))
// [[2, 4], [], [6]]

console.log(groupNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]))
// [[2, 4, 8], [1, 5, 7], [3, 6, 9]]

console.log(groupNumbers([100, 151, 122, 99, 111]))
// [[100, 122], [151], [99, 111]]

console.log(groupNumbers([]))
// [[], [], []]
```

---

## 💡 Key Concepts

**Prioritas Kelipatan 3:**
```
6 → Kelipatan 3 (bukan genap)
9 → Kelipatan 3 (bukan ganjil)
2 → Genap
7 → Ganjil
```

**Logic Flow:**
```
Untuk setiap angka:
  Jika kelipatan 3 → masuk grup ke-3
  Jika tidak, cek genap → masuk grup ke-1
  Sisanya → masuk grup ke-2
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Kenapa 6 masuk kelipatan 3, bukan genap?</strong></summary>

Karena **prioritas kelipatan 3 tertinggi**. Meski 6 adalah genap, tapi karena juga kelipatan 3, maka masuk ke grup kelipatan 3.

</details>

<details>
<summary><strong>❓ Versi mana yang terbaik?</strong></summary>

**Tergantung konteks:**
- **For loop** → Pemula, easy to debug
- **Filter** → Modern, readable
- **Reduce** → Compact, FP style

Tidak ada "best" - pilih sesuai situasi!

</details>

<details>
<summary><strong>❓ Berapa lama waktu belajar?</strong></summary>

- **Quick:** 25 menit (Part 2 + 4)
- **Normal:** 45 menit (Part 1, 2, 4)
- **Complete:** 55 menit (Semua part)

</details>

---

## 📚 Prerequisites

**Perlu dikuasai:**
- ✅ JavaScript basics (variable, function, array)
- ✅ For loop & conditionals
- ✅ Modulo operator (%)

**Tidak perlu:**
- ❌ Advanced algorithms
- ❌ Functional programming expert

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan:
- ✅ Memahami prioritas kelipatan 3
- ✅ Implement dengan 3 pendekatan berbeda
- ✅ Menulis clean, readable code
- ✅ Memilih approach sesuai konteks

---

## ⚠️ Common Pitfalls
```javascript
// ❌ SALAH - Pakai IF semua (angka masuk banyak grup)
if (number % 3 === 0) multiplesOfThree.push(number)
if (number % 2 === 0) evenNumbers.push(number)
// 6 masuk ke 2 grup!

// ✅ BENAR - Pakai IF-ELSE IF
if (number % 3 === 0) {
  multiplesOfThree.push(number)
} else if (number % 2 === 0) {
  evenNumbers.push(number)
}
```

---

<div align="center">

## 🎯 Mari Mulai!

**📚 [Mulai dari Part 1: Review Kode Awal →](docs/01-Review-Kode-Awal.md)**

---

**Quick Links:**

[Part 1](docs/01-Review-Kode-Awal.md) • [Part 2](docs/02-Refactoring-Clean-Code.md) • [Part 3](docs/03-Ringkasan-Algoritma.md) • [Part 4](docs/04-Cheat-Sheet.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
