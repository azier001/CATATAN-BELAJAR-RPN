# 📚 Median - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║           📚 MEDIAN - COMPLETE LEARNING GUIDE 📚                ║
║                                                                  ║
║        Dari Kode Original ke Clean Code & Alternatif Solusi      ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Algorithm%20|%20Clean%20Code%20|%20Refactoring-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas implementasi **algoritma Median** — mulai dari evaluasi kode original, proses refactoring bertahap, hingga alternatif solusi lain.

**Cocok untuk:**
- 💻 **Developer** — yang ingin improve code quality
- 🎓 **Pemula** — yang ingin belajar clean code & refactoring
- 🎯 **Job Seeker** — persiapan coding interview

---

## 🎯 Apa itu Median?

**Median** adalah nilai tengah dari sekumpulan data yang sudah diurutkan.

```javascript
// Ganjil → ambil nilai tengah
findMedian([1, 2, 3, 4, 5])       // 3

// Genap → rata-rata dua nilai tengah
findMedian([1, 3, 4, 10, 12, 13]) // (4 + 10) / 2 = 7
```

---

## 📚 Daftar Part

| Part | Topik | Estimasi |
|------|-------|----------|
| **[Part 1](docs/part-1-analisis-kode-original.md)** | Analisis Kode Original | 5 menit |
| **[Part 2](docs/part-2-refactoring.md)** | Proses Refactoring (4 Tahap) | 10 menit |
| **[Part 3](docs/part-3-ringkasan-algoritma.md)** | Ringkasan Algoritma | 5 menit |
| **[Part 4](docs/part-4-alternatif-solusi.md)** | Alternatif Solusi | 10 menit |
| **[Part 5](docs/part-5-perbandingan.md)** | Perbandingan Keseluruhan | 5 menit |

**Total: ~35 menit**

---

## 🗺️ Alur Belajar

```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5
  ↓        ↓        ↓        ↓        ↓
Analisis Refactor Algoritma Alternatif Perbandingan
5 menit  10 menit  5 menit  10 menit   5 menit
```

---

## ⚡ Kode Final

```javascript
/**
 * Finds the median value of an array of numbers.
 * @param {number[]} numbers - An array of numbers (unsorted is fine)
 * @returns {number} The median value of the array
 */
const findMedian = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b)
  const length = sortedNumbers.length
  const mid = Math.floor(length / 2)

  if (length % 2 !== 0) {
    return sortedNumbers[mid]
  } else {
    return (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
  }
}
```

---

## 🧪 Test Cases

```javascript
findMedian([1, 2, 3, 4, 5])        // 3     — ganjil
findMedian([1, 3, 4, 10, 12, 13])  // 7     — genap
findMedian([3, 4, 7, 6, 10])       // 6     — tidak terurut
findMedian([7, 7, 8, 8])           // 7.5   — duplikat
findMedian([-10, -5, 0, 5])        // -2.5  — negatif
findMedian([1.1, 2.2, 3.3, 4.4])   // 2.75  — desimal
findMedian([5])                    // 5     — 1 elemen
```

---

## 🎮 Quick Start

**Baru mulai belajar?**
→ Mulai dari **Part 1** — lihat kode original dan apa saja yang perlu diperbaiki.

**Mau langsung lihat refactoring-nya?**
→ Langsung ke **Part 2** — ada 4 tahap perbaikan step-by-step.

**Mau lihat alternatif lain?**
→ Lompat ke **Part 4** — ada 3 variasi kode beserta analisisnya.

---

## 📚 Prerequisites

**Perlu dikuasai:**
- ✅ JavaScript dasar (variabel, function, array)
- ✅ Arrow function
- ✅ Array method (`.sort()`, spread `[...]`)

---

## 🎯 Yang Akan Dipelajari

- ✅ Cara evaluasi kode — apakah sudah benar & clean
- ✅ Proses refactoring bertahap — dari kode original ke clean code
- ✅ English naming convention & JSDoc
- ✅ Berbagai cara implementasi median
- ✅ Perbandingan tiap solusi — mana yang lebih baik & kapan dipakai

---

## ⚠️ Common Pitfalls

```javascript
// ❌ Mutasi array asli
const sorted = numbers.sort(...)       // numbers ikut berubah!

// ✅ Buat salinan dulu
const sorted = [...numbers].sort(...)  // aman

// ❌ Dead code — tidak akan pernah jalan
return result
console.log('done')  // unreachable!

// ❌ Variabel tanpa deklarasi
middle = length / 2  // jadi global variable!

// ✅ Selalu deklarasikan
const middle = length / 2
```

---

<div align="center">

**📖 [Mulai dari Part 1 →](docs/part-1-analisis-kode-original.md)**

---

**Quick Links:**
[Part 1](docs/part-1-analisis-kode-original.md) • [Part 2](docs/part-2-refactoring.md) • [Part 3](docs/part-3-ringkasan-algoritma.md) • [Part 4](docs/part-4-alternatif-solusi.md) • [Part 5](docs/part-5-perbandingan.md)

---

Made with ❤️ for learners

</div>
