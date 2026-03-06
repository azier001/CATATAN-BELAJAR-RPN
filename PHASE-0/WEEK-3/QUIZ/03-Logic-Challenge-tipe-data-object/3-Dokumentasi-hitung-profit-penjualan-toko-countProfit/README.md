# 📚 countProfit - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🎯 countProfit - COMPLETE LEARNING GUIDE 🎯                   ║
║                                                                          ║
║         Dari Kode Original ke Refactoring & Berbagai Alternatif          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Object%20|%20Array%20|%20Nested%20Loop%20|%20Clean%20Code-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas fungsi **`countProfit`** — mensimulasikan sistem penjualan Toko X yang sedang SALE, dimana setiap pembeli akan membeli barang sesuai ketersediaan stock. Mencakup proses pengerjaan dari awal, analisis kesalahan, refactoring bertahap, ringkasan algoritma, dan beberapa alternatif solusi.

**Cocok untuk:**
- 🎓 **Pemula** — Belajar konsep object, array, nested loop, dan filter
- 💻 **Developer** — Improve code quality dan naming convention
- 🚀 **Enthusiast** — Eksplorasi berbagai pendekatan solusi

---

## 🎯 Apa yang Dibahas?

Fungsi menerima `shoppers` (array of object), lalu mengembalikan array of object hasil penjualan per produk:

```javascript
countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
])
// → [
//     { product: 'Sepatu Stacattu', shoppers: ['Windi', 'Vanessa'], leftOver: 5, totalProfit: 7500000 },
//     { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
//     { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
//   ]

countProfit([])
// → []
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level |
|------|-------|-------|
| **[Part 1](docs/01-soal-dan-kriteria.md)** | Soal & Kriteria | 🌱 Pemula |
| **[Part 2](docs/02-proses-pengerjaan.md)** | Proses Pengerjaan (kode awal → kode final) | 🌱 Pemula |
| **[Part 3](docs/03-kesalahan-dan-pelajaran.md)** | Kesalahan & Pelajaran | 🌱 Pemula |
| **[Part 4](docs/04-refactoring-clean-code.md)** | Refactoring & Clean Code (`for...of`) | 🌿 Menengah |
| **[Part 5](docs/05-alternatif-forEach.md)** | Alternatif `forEach` + Ringkasan Algoritma | 🌿 Menengah |
| **[Part 6](docs/06-alternatif-map-reduce.md)** | Alternatif `map + reduce` + Ringkasan Algoritma | 🌿 Menengah |
| **[Part 7](docs/07-alternatif-map-filter-reduce.md)** | Alternatif `map + filter + reduce` + Ringkasan Algoritma | 🌿 Menengah |
| **[Part 8](docs/08-alternatif-productMap.md)** | Alternatif `productMap` + Ringkasan Algoritma | 🌿 Menengah |
| **[Part 9](docs/09-perbandingan-dan-kesimpulan.md)** | Perbandingan & Kesimpulan | 🌿 Menengah |

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6 → Part 7 → Part 8 → Part 9
```

**Hasil:**
- ✅ Memahami soal dan kriteria secara menyeluruh
- ✅ Tahu proses pengerjaan dari kode awal sampai kode final
- ✅ Memahami kesalahan umum dan cara menghindarinya
- ✅ Bisa refactoring ke clean code secara bertahap
- ✅ Mengenal berbagai alternatif solusi
- ✅ Memahami algoritma setiap versi secara detail

### **⚡ Jalur Cepat (Langsung ke kode)**
```
Part 1 → Part 4 → Part 9
```

**Hasil:**
- ✅ Memahami soal dan kriteria
- ✅ Kode final yang clean dan optimal
- ✅ Perbandingan semua solusi

---

## 📊 Quick Comparison: Semua Solusi

| Solusi | Pendekatan | Kompleksitas Waktu | Keunggulan |
|--------|-----------|-------------------|------------|
| **Kode Final** | Nested `for...of` | O(n × m) | Mudah dibaca, familiar |
| **Refactored** | `for...of` + clean naming | O(n × m) | Clean code, best practice |
| **forEach** | Nested `forEach` | O(n × m) | Idiomatis, modern |
| **map + reduce** | `map` + `reduce` | O(n × m) | Functional programming style |
| **map + filter + reduce** | `map` + `filter` + `reduce` | O(n × m) | Fleksibel, data lengkap tersimpan |
| **productMap** | 2 loop terpisah + lookup | **O(n + m)** | **Paling optimal** |

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **Part 1** lalu ikuti jalur lengkap
→ Focus: Pahami soal dan proses pengerjaan sebelum lihat alternatif

### **Saya Mau Refactor Code**
→ Langsung: **Part 4**
→ Focus: Proses refactoring step-by-step dan clean code

### **Saya Mau Lihat Semua Solusi**
→ Langsung: **Part 9**
→ Focus: Perbandingan dan kesimpulan semua versi

---

## 🧪 Test Cases Standar

```javascript
// Edge case — input kosong
console.log(countProfit([]));
// → []
```

```javascript
// Normal case 1 — ada pembeli yang gagal karena stock kurang
console.log(countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
]));
// → [
//     { product: 'Sepatu Stacattu', shoppers: ['Windi', 'Vanessa'], leftOver: 5, totalProfit: 7500000 },
//     { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
//     { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
//   ]
```

```javascript
// Normal case 2 — stock berkurang setelah pembelian pertama
console.log(countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 8 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 },
  { name: 'Devi', product: 'Baju Zoro', amount: 1 },
  { name: 'Lisa', product: 'Baju Zoro', amount: 1 }
]));
// → [
//     { product: 'Sepatu Stacattu', shoppers: ['Windi'], leftOver: 2, totalProfit: 12000000 },
//     { product: 'Baju Zoro', shoppers: ['Devi', 'Lisa'], leftOver: 0, totalProfit: 1000000 },
//     { product: 'Sweater Uniklooh', shoppers: ['Rani'], leftOver: 0, totalProfit: 175000 }
//   ]
```

```javascript
// Normal case 3 — produk tidak ada di toko
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// → [
//     { product: 'Sepatu Stacattu', shoppers: [], leftOver: 10, totalProfit: 0 },
//     { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
//     { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
//   ]
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Kenapa output selalu 3 object meskipun tidak ada yang beli?</strong></summary>

Karena output merepresentasikan **laporan per produk di toko**, bukan laporan per pembeli. Toko X punya 3 produk, jadi output selalu 3 object — masing-masing berisi info produk tersebut terlepas ada yang beli atau tidak. Pengecualian hanya jika `shoppers` kosong, maka return `[]`.

</details>

<details>
<summary><strong>❓ Kenapa loop `products` yang jadi kerangka utama, bukan loop `shoppers`?</strong></summary>

Karena jumlah object di output ditentukan oleh jumlah produk di toko, bukan jumlah pembeli. Setiap iterasi outer loop menghasilkan satu object hasil untuk satu produk.

</details>

<details>
<summary><strong>❓ Kenapa `totalProfit` harus dideklarasikan di luar inner loop?</strong></summary>

Karena `totalProfit` perlu **terakumulasi** dari semua pembeli yang berhasil beli produk tersebut. Jika dideklarasikan di dalam loop, nilainya akan reset setiap iterasi dan tidak bisa menjumlahkan profit dari beberapa pembeli.

</details>

<details>
<summary><strong>❓ Apa itu Pass by Reference dan kenapa penting di sini?</strong></summary>

Object di JavaScript tidak di-copy saat di-assign atau di-push ke array — yang berpindah adalah **alamat memorinya** (referensi). Jika kita pakai satu object yang sama dan di-push berkali-kali, semua entry di array akan menunjuk ke object yang sama dan nilainya selalu tertimpa. Solusinya: buat object baru di setiap iterasi.

</details>

<details>
<summary><strong>❓ Solusi mana yang paling baik?</strong></summary>

Tergantung konteks. Untuk belajar dan readability → **Refactored for...of**. Untuk gaya functional → **map + reduce**. Untuk performa optimal dengan data besar → **productMap** dengan kompleksitas O(n + m).

</details>

<details>
<summary><strong>❓ Apa bedanya `forEach` dengan `for...of`?</strong></summary>

Keduanya sama-sama loop setiap item di array, tapi `forEach` tidak bisa pakai `break` dan tidak return nilai. `for...of` lebih fleksibel karena mendukung `break` dan `continue`, serta bekerja pada semua iterable bukan hanya array.

</details>

---

## 📚 Prerequisites

- ✅ JavaScript dasar (variabel, fungsi, loop)
- ✅ Pemahaman dasar object dan array
- ✅ Familiar dengan konsep destructuring

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis kode dan mengidentifikasi area yang bisa diperbaiki
- ✅ Melakukan refactoring ke clean code secara bertahap
- ✅ Mengimplementasikan beberapa pendekatan berbeda untuk satu soal
- ✅ Memahami trade-off setiap pendekatan (readability vs performance)
- ✅ Mengenal konsep Pass by Reference pada JavaScript object
- ✅ Memahami perbedaan O(n × m) dan O(n + m) dalam konteks nyata

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1 →](docs/01-soal-dan-kriteria.md)**

---

**Quick Links:**

[Part 1](docs/01-soal-dan-kriteria.md) • [Part 2](docs/02-proses-pengerjaan.md) • [Part 3](docs/03-kesalahan-dan-pelajaran.md) • [Part 4](docs/04-refactoring-clean-code.md) • [Part 5](docs/05-alternatif-forEach.md) • [Part 6](docs/06-alternatif-map-reduce.md) • [Part 7](docs/07-alternatif-map-filter-reduce.md) • [Part 8](docs/08-alternatif-productMap.md) • [Part 9](docs/09-perbandingan-dan-kesimpulan.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
