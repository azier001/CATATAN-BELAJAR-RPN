# 📚 naikAngkot - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🎯 naikAngkot - COMPLETE LEARNING GUIDE 🎯                    ║
║                                                                          ║
║         Dari Kode Original ke Refactoring & Berbagai Alternatif          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Array%20|%20indexOf%20|%20map%20|%20Clean%20Code-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas fungsi **`naikAngkot`** — mensimulasikan sistem pembayaran angkot berdasarkan rute yang dilewati penumpang. Setiap penumpang membayar Rp2.000 per halte yang dilewati dari halte naik ke halte tujuan. Mencakup proses pengerjaan dari awal, analisis kesalahan, refactoring bertahap, ringkasan algoritma, dan beberapa alternatif solusi.

**Cocok untuk:**
- 🎓 **Pemula** — Belajar konsep array, indexOf, destructuring, dan for...of
- 💻 **Developer** — Improve code quality dan naming convention
- 🚀 **Enthusiast** — Eksplorasi berbagai pendekatan solusi

---

## 🎯 Apa yang Dibahas?

Fungsi menerima `passengerList` (array dua dimensi), lalu mengembalikan array of object data perjalanan setiap penumpang:

```javascript
naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']])
// → [
//     { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//     { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 }
//   ]

naikAngkot([])
// → []
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level |
|------|-------|-------|
| **[Part 1](docs/01-soal-dan-kriteria.md)** | Soal & Kriteria | 🌱 Pemula |
| **[Part 2](docs/02-proses-pengerjaan.md)** | Proses Pengerjaan (kode awal → kode final) | 🌱 Pemula |
| **[Part 3](docs/03-kesalahan-dan-pelajaran.md)** | Kesalahan & Pelajaran | 🌱 Pemula |
| **[Part 4](docs/04-refactoring-clean-code.md)** | Refactoring & Clean Code | 🌿 Menengah |
| **[Part 5](docs/05-alternatif-forof-push-dan-ringkasan-algoritma.md)** | Alternatif `for...of` + `push` + Ringkasan Algoritma | 🌿 Menengah |
| **[Part 6](docs/06-alternatif-map-helper-dan-ringkasan-algoritma.md)** | Alternatif `.map()` + Helper Function + Ringkasan Algoritma | 🌿 Menengah |
| **[Part 7](docs/07-alternatif-map-single-dan-ringkasan-algoritma.md)** | Alternatif `.map()` Single Function + Ringkasan Algoritma | 🌿 Menengah |
| **[Part 8](docs/08-perbandingan-dan-kesimpulan.md)** | Perbandingan & Kesimpulan | 🌿 Menengah |

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6 → Part 7 → Part 8
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
Part 1 → Part 4 → Part 8
```

**Hasil:**
- ✅ Memahami soal dan kriteria
- ✅ Kode final yang clean dan optimal
- ✅ Perbandingan semua solusi

---

## 📊 Quick Comparison: Semua Solusi

| Solusi | Pendekatan | Kompleksitas Waktu | Keunggulan |
|--------|-----------|-------------------|------------|
| **Kode Awal** | `for...of` + `push` | O(n) | Mudah dipahami, eksplisit |
| **Refactored** | `for...of` + clean naming + konstanta | O(n) | Clean code, best practice |
| **Alternatif V1** | `for...of` + `push` — Imperative Style | O(n) | Familiar, mudah di-debug |
| **Alternatif V2** | `.map()` + Helper Function — Modular Style | O(n) | Single responsibility, reusable |
| **Alternatif V3** | `.map()` Single Function — Compact Style | O(n) | Ringkas, modern |

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **Part 1** lalu ikuti jalur lengkap
→ Focus: Pahami soal dan proses pengerjaan sebelum lihat alternatif

### **Saya Mau Refactor Code**
→ Langsung: **Part 4**
→ Focus: Proses refactoring step-by-step dan clean code

### **Saya Mau Lihat Semua Solusi**
→ Langsung: **Part 8**
→ Focus: Perbandingan dan kesimpulan semua versi

---

## 🧪 Test Cases Standar

```javascript
// Edge case — input kosong
console.log(naikAngkot([]));
// → []
```

```javascript
// Normal case 1 — satu penumpang
console.log(naikAngkot([['Dimitri', 'B', 'F']]));
// → [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
```

```javascript
// Normal case 2 — dua penumpang rute berbeda
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// → [
//     { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//     { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 }
//   ]
```

```javascript
// Edge case — naik dan turun di halte yang sama
console.log(naikAngkot([['Budi', 'C', 'C']]));
// → [{ penumpang: 'Budi', naikDari: 'C', tujuan: 'C', bayar: 0 }]
```

```javascript
// Normal case 3 — beberapa penumpang berbagai rute
console.log(naikAngkot([['Andi', 'A', 'C'], ['Budi', 'B', 'E'], ['Cici', 'D', 'F']]));
// → [
//     { penumpang: 'Andi', naikDari: 'A', tujuan: 'C', bayar: 4000 },
//     { penumpang: 'Budi', naikDari: 'B', tujuan: 'E', bayar: 6000 },
//     { penumpang: 'Cici', naikDari: 'D', tujuan: 'F', bayar: 4000 }
//   ]
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Kenapa menggunakan indexOf() untuk menghitung ongkos?</strong></summary>

Karena rute angkot adalah array yang terurut — posisi setiap halte bisa dicari dengan `indexOf()`. Selisih index antara halte naik dan halte tujuan langsung merepresentasikan jumlah halte yang dilewati, tanpa perlu loop tambahan.

</details>

<details>
<summary><strong>❓ Kenapa array kosong langsung return [] tanpa guard clause?</strong></summary>

Karena `for...of` dan `.map()` pada array kosong tidak pernah masuk ke dalam loop — hasilnya otomatis `[]`. Berbeda dengan kasus di mana loop luar bukan dari input langsung, di sini input kosong sudah aman tanpa guard clause tambahan.

</details>

<details>
<summary><strong>❓ Apa bedanya for...of dengan .map() untuk kasus ini?</strong></summary>

Keduanya menghasilkan output yang sama. `for...of` lebih eksplisit dan mudah dipahami pemula karena terlihat jelas ada loop dan push. `.map()` lebih ringkas dan idiomatis untuk transformasi array 1-to-1, tapi membutuhkan pemahaman tentang callback function.

</details>

<details>
<summary><strong>❓ Kapan sebaiknya memisahkan helper function?</strong></summary>

Ketika logic tertentu berpotensi dipakai ulang di tempat lain, atau ketika function utama sudah terlalu panjang dan sulit dibaca. Untuk soal sederhana seperti ini, single function sudah cukup — tapi memisahkan `calculateFare` membuat kode lebih mudah di-test dan dimodifikasi secara independen.

</details>

<details>
<summary><strong>❓ Solusi mana yang paling baik?</strong></summary>

Tergantung konteks. Untuk belajar dan keterbacaan → **for...of + push**. Untuk gaya functional modern → **.map() single function**. Untuk proyek yang butuh reusability tinggi → **.map() + helper function**.

</details>

---

## 📚 Prerequisites

- ✅ JavaScript dasar (variabel, fungsi, loop)
- ✅ Pemahaman dasar array
- ✅ Familiar dengan konsep destructuring

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menggunakan `indexOf()` untuk kalkulasi berbasis posisi array
- ✅ Melakukan destructuring array dua dimensi
- ✅ Melakukan refactoring ke clean code secara bertahap
- ✅ Mengimplementasikan beberapa pendekatan berbeda untuk satu soal
- ✅ Memahami perbedaan imperative style (`for...of`) vs functional style (`.map()`)
- ✅ Memahami kapan memisahkan helper function vs single function

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1 →](docs/01-soal-dan-kriteria.md)**

---

**Quick Links:**

[Part 1](docs/01-soal-dan-kriteria.md) • [Part 2](docs/02-proses-pengerjaan.md) • [Part 3](docs/03-kesalahan-dan-pelajaran.md) • [Part 4](docs/04-refactoring-clean-code.md) • [Part 5](docs/05-alternatif-forof-push-dan-ringkasan-algoritma.md) • [Part 6](docs/06-alternatif-map-helper-dan-ringkasan-algoritma.md) • [Part 7](docs/07-alternatif-map-single-dan-ringkasan-algoritma.md) • [Part 8](docs/08-perbandingan-dan-kesimpulan.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
