# 📚 shoppingTime - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🎯 shoppingTime - COMPLETE LEARNING GUIDE 🎯                  ║
║                                                                          ║
║         Dari Kode Original ke Refactoring & Berbagai Alternatif          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Object%20|%20Array%20|%20Greedy%20|%20Clean%20Code-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas fungsi **`shoppingTime`** — mensimulasikan sistem belanja di Toko X yang sedang SALE, dimana member akan membeli barang termahal terlebih dahulu selama uang masih cukup. Mencakup analisis kode original, refactoring bertahap, ringkasan algoritma, dan beberapa alternatif solusi.

**Cocok untuk:**
- 🎓 **Pemula** — Belajar konsep object, array, sorting, dan clean code
- 💻 **Developer** — Improve code quality dan naming convention
- 🚀 **Enthusiast** — Eksplorasi berbagai pendekatan solusi

---

## 🎯 Apa yang Dibahas?

Fungsi menerima `memberId` (string) dan `money` (number), lalu mengembalikan object hasil belanja:

```javascript
shoppingTime('324193hDew2', 700000)
// → { memberId: '324193hDew2', money: 700000, listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }

shoppingTime('', 700000)
// → 'Mohon maaf, toko X hanya berlaku untuk member saja'

shoppingTime('324193hDew2', 15000)
// → 'Mohon maaf, uang tidak cukup'
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level |
|------|-------|-------|
| **[Part 1](docs/01-soal-dan-kriteria.md)** | Soal & Kriteria | 🌱 Pemula |
| **[Part 2](docs/02-analisis-kode-original.md)** | Analisis Kode Original | 🌱 Pemula |
| **[Part 3](docs/03-refactoring-step-by-step.md)** | Refactoring Step-by-Step | 🌿 Menengah |
| **[Part 4](docs/04-kode-final-dan-ringkasan-algoritma.md)** | Kode Final + Ringkasan Algoritma (`for...of`) | 🌿 Menengah |
| **[Part 5](docs/05-alternatif-reduce-dan-ringkasan-algoritma.md)** | Alternatif `reduce` + Ringkasan Algoritma | 🌿 Menengah |
| **[Part 6](docs/06-alternatif-ai-improved-dan-ringkasan-algoritma.md)** | Analisis Kode AI + Versi Improved + Ringkasan Algoritma | 🌿 Menengah |
| **[Part 7](docs/07-perbandingan-dan-kesimpulan.md)** | Perbandingan & Kesimpulan | 🌿 Menengah |

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6 → Part 7
```

**Hasil:**
- ✅ Memahami soal dan kriteria secara menyeluruh
- ✅ Tahu kelebihan dan kekurangan kode original
- ✅ Bisa refactoring ke clean code secara bertahap
- ✅ Mengenal berbagai alternatif solusi
- ✅ Memahami algoritma setiap versi secara detail

### **⚡ Jalur Cepat (Langsung ke kode)**
```
Part 2 → Part 3 → Part 4 → Part 7
```

**Hasil:**
- ✅ Analisis kode original
- ✅ Refactoring step-by-step
- ✅ Ringkasan algoritma kode final
- ✅ Perbandingan solusi

---

## 📊 Quick Comparison: Semua Solusi

| Solusi | Pendekatan | Struktur Data | Keunggulan |
|--------|-----------|---------------|------------|
| **Kode Original** | `for` loop biasa | Object `{}` | Familiar, mudah diikuti |
| **Refactored (`for...of`)** | `for...of` + destructuring | Object `{}` | Clean, readable |
| **`reduce`** | `.reduce()` | Object `{}` | Functional programming style |
| **AI Improved** | `for...of` + early break | Array of objects `[]` | Paling optimal, `MIN_PRICE` konstanta |

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **Part 1** lalu ikuti jalur lengkap
→ Focus: Pahami soal dan kriteria sebelum lihat kode

### **Saya Mau Refactor Code**
→ Langsung: **Part 3**
→ Focus: Proses refactoring step-by-step

### **Saya Mau Lihat Semua Solusi**
→ Langsung: **Part 7**
→ Focus: Perbandingan dan kesimpulan

---

## 🧪 Test Cases Standar

```javascript
// Edge cases - no member
console.log(shoppingTime('', 2475000));
// → 'Mohon maaf, toko X hanya berlaku untuk member saja'

console.log(shoppingTime(undefined, 100000));
// → 'Mohon maaf, toko X hanya berlaku untuk member saja'

// Edge case - insufficient money
console.log(shoppingTime('234JdhweRxa53', 15000));
// → 'Mohon maaf, uang tidak cukup'

// Normal cases
console.log(shoppingTime('1820RzKrnWn08', 2475000));
// → { memberId: '1820RzKrnWn08', money: 2475000, listPurchased: ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'], changeMoney: 0 }

console.log(shoppingTime('82Ku8Ma742', 170000));
// → { memberId: '82Ku8Ma742', money: 170000, listPurchased: ['Casing Handphone'], changeMoney: 120000 }

console.log(shoppingTime('324193hDew2', 700000));
// → { memberId: '324193hDew2', money: 700000, listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Kenapa harus beli dari yang termahal dulu?</strong></summary>

Ini adalah aturan dari soal — Toko X menerapkan strategi **Greedy**: member selalu membeli produk termahal yang masih mampu dibeli, bukan memaksimalkan jumlah barang yang dibeli.

</details>

<details>
<summary><strong>❓ Kenapa `Object.entries()` dan bukan langsung loop object?</strong></summary>

Karena `Object.entries()` menghasilkan array yang bisa di-sort. Object biasa tidak bisa di-sort secara langsung — urutannya tidak terjamin konsisten di semua environment JavaScript.

</details>

<details>
<summary><strong>❓ Kenapa `products` sebaiknya di luar function?</strong></summary>

Karena `products` adalah data konstanta yang tidak pernah berubah. Jika diletakkan di dalam function, object tersebut akan dibuat ulang di memori setiap kali function dipanggil — tidak efisien.

</details>

<details>
<summary><strong>❓ Solusi mana yang paling baik?</strong></summary>

Tergantung konteks. Untuk belajar dan readability → **Refactored `for...of`**. Untuk gaya functional → **`reduce`**. Untuk performa optimal → **AI Improved** dengan `MIN_PRICE` dan early break.

</details>

<details>
<summary><strong>❓ Apa itu Greedy Algorithm?</strong></summary>

Greedy adalah strategi dimana di setiap langkah kita selalu memilih pilihan terbaik yang tersedia saat itu (dalam kasus ini: produk termahal yang masih bisa dibeli), tanpa mempertimbangkan kombinasi lain.

</details>

---

## 📚 Prerequisites

- ✅ JavaScript dasar (variabel, fungsi, loop)
- ✅ Pemahaman dasar object dan array
- ✅ Familiar dengan konsep sorting

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis kode dan mengidentifikasi area yang bisa diperbaiki
- ✅ Melakukan refactoring ke clean code secara bertahap
- ✅ Mengimplementasikan beberapa pendekatan berbeda untuk satu soal
- ✅ Memahami trade-off setiap pendekatan
- ✅ Mengenal konsep Greedy Algorithm dalam konteks sederhana

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1 →](docs/01-soal-dan-kriteria.md)**

---

**Quick Links:**

[Part 1](docs/01-soal-dan-kriteria.md) • [Part 2](docs/02-analisis-kode-original.md) • [Part 3](docs/03-refactoring-step-by-step.md) • [Part 4](docs/04-kode-final-dan-ringkasan-algoritma.md) • [Part 5](docs/05-alternatif-reduce-dan-ringkasan-algoritma.md) • [Part 6](docs/06-alternatif-ai-improved-dan-ringkasan-algoritma.md) • [Part 7](docs/07-perbandingan-dan-kesimpulan.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
