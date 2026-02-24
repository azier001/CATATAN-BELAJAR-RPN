# 📚 Algoritma Sorting - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🎯 ALGORITMA SORTING - COMPLETE LEARNING GUIDE 🎯             ║
║                                                                          ║
║         Dari Kode Original ke Refactoring & Berbagai Alternatif          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Beginner-brightgreen)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-Sorting%20|%20Refactoring%20|%20Clean%20Code-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas fungsi **`sortAlphabetically`** — mengurutkan karakter dalam sebuah string secara alfabetikal tanpa menggunakan method `.sort()` bawaan JavaScript. Mencakup analisis kode original, refactoring bertahap, dan beberapa alternatif solusi menggunakan algoritma sorting yang berbeda.

**Cocok untuk:**
- 🎓 **Pemula** — Belajar konsep algoritma sorting dari nol
- 💻 **Developer** — Improve code quality dan naming convention
- 🚀 **Enthusiast** — Eksplorasi berbagai pendekatan sorting

---

## 🎯 Apa yang Dibahas?

Fungsi menerima sebuah string dan mengembalikan string dengan karakter yang sudah terurut secara alfabetikal:

```javascript
sortAlphabetically('hello')      // → 'ehllo'
sortAlphabetically('developer')  // → 'deeeloprv'
sortAlphabetically('software')   // → 'aeforstw'
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level |
|------|-------|-------|
| **[Part 1](docs/01-soal-dan-pemahaman.md)** | Soal & Pemahaman Kriteria | 🌱 Pemula |
| **[Part 2](docs/02-analisis-kode-original.md)** | Analisis Kode Original | 🌱 Pemula |
| **[Part 3](docs/03-refactoring-step-by-step.md)** | Refactoring Step-by-Step | 🌿 Menengah |
| **[Part 4](docs/04-ringkasan-algoritma-refactoring.md)** | Ringkasan Algoritma — Bubble Sort Refactoring | 🌿 Menengah |
| **[Part 5](docs/05-alternatif-selection-sort.md)** | Alternatif — Selection Sort | 🌿 Menengah |
| **[Part 6](docs/06-ringkasan-algoritma-selection-sort.md)** | Ringkasan Algoritma — Selection Sort | 🌿 Menengah |
| **[Part 7](docs/07-alternatif-insertion-sort.md)** | Alternatif — Insertion Sort | 🌿 Menengah |
| **[Part 8](docs/08-ringkasan-algoritma-insertion-sort.md)** | Ringkasan Algoritma — Insertion Sort | 🌿 Menengah |
| **[Part 9](docs/09-perbandingan-kesimpulan.md)** | Perbandingan & Kesimpulan | 🌿 Menengah |
| **[Part 10](docs/10-ringkasan-semua-versi.md)** | Ringkasan Semua Versi — Complete Reference | 🌿 Menengah |

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6 → Part 7 → Part 8 → Part 9
```

**Hasil:**
- ✅ Memahami soal dan kriteria secara menyeluruh
- ✅ Tahu cara kerja kode original dan apa yang bisa diperbaiki
- ✅ Bisa refactoring ke clean code secara bertahap
- ✅ Mengenal 3 algoritma sorting yang berbeda
- ✅ Memahami algoritma setiap versi secara detail

### **⚡ Jalur Cepat (Langsung ke kode)**
```
Part 2 → Part 3 → Part 4 → Part 9
```

**Hasil:**
- ✅ Analisis kode original
- ✅ Refactoring step-by-step
- ✅ Ringkasan algoritma
- ✅ Perbandingan semua solusi

### **🔀 Jalur Alternatif (Fokus algoritma)**
```
Part 1 → Part 4 → Part 6 → Part 8 → Part 9
```

**Hasil:**
- ✅ Memahami soal
- ✅ Algoritma Bubble Sort
- ✅ Algoritma Selection Sort
- ✅ Algoritma Insertion Sort
- ✅ Perbandingan ketiga algoritma

---

## 📊 Quick Comparison: Semua Solusi

| Solusi | Algoritma | Swap | Complexity | Cocok untuk |
|--------|-----------|------|------------|-------------|
| **Bubble Sort** | Gelembungkan terbesar ke kanan | Berkali-kali per pass | O(n²) / O(n) best | Belajar sorting |
| **Selection Sort** | Pilih terkecil, taruh ke kiri | Maksimal 1x per pass | O(n²) | Data acak |
| **Insertion Sort** | Sisipkan ke posisi yang tepat | Geser, bukan swap | O(n²) / O(n) best | Data hampir terurut |

---

## 🎮 Quick Start

### **Saya Pemula**
→ Mulai: **Part 1** lalu ikuti jalur lengkap
→ Focus: Pahami soal dan kriteria sebelum lihat kode

### **Saya Mau Refactor Code**
→ Langsung: **Part 3**
→ Focus: Proses refactoring step-by-step

### **Saya Mau Belajar Algoritma Sorting**
→ Langsung: **Part 4, 6, 8**
→ Focus: Algoritma detail tiap sorting

### **Saya Mau Lihat Semua Solusi**
→ Langsung: **Part 9**
→ Focus: Perbandingan dan kesimpulan

---

## 🧪 Test Cases Standar

```javascript
// Basic cases
sortAlphabetically('hello')      // 'ehllo'     ✅
sortAlphabetically('truncate')   // 'acenrttu'  ✅
sortAlphabetically('developer')  // 'deeeloprv' ✅
sortAlphabetically('software')   // 'aeforstw'  ✅
sortAlphabetically('aegis')      // 'aegis'     ✅

// Edge cases
sortAlphabetically('')           // ''          ✅
sortAlphabetically('a')          // 'a'         ✅
sortAlphabetically('aaaa')       // 'aaaa'      ✅
sortAlphabetically('dcba')       // 'abcd'      ✅
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Kenapa tidak boleh pakai .sort()?</strong></summary>

Tantangan ini bertujuan agar kamu memahami cara kerja algoritma sorting dari dasar. Dengan mengimplementasikan sendiri, kamu akan lebih paham konsep perbandingan, pertukaran, dan kompleksitas algoritma.

</details>

<details>
<summary><strong>❓ Kenapa ada 3 algoritma berbeda?</strong></summary>

Setiap algoritma punya pendekatan dan karakteristik berbeda. Dengan memahami ketiganya, kamu bisa memilih yang paling sesuai konteks dan memahami trade-off masing-masing.

</details>

<details>
<summary><strong>❓ Algoritma mana yang paling baik?</strong></summary>

Tergantung konteks. Untuk belajar → **Bubble Sort**. Untuk data acak → **Selection Sort**. Untuk data hampir terurut → **Insertion Sort**. Untuk production, gunakan algoritma yang lebih canggih seperti Quick Sort atau Merge Sort.

</details>

<details>
<summary><strong>❓ Apa itu O(n²) dan O(n)?</strong></summary>

Ini adalah notasi Big O untuk mengukur kompleksitas waktu algoritma. O(n²) artinya waktu eksekusi meningkat kuadrat seiring bertambahnya data. O(n) artinya waktu eksekusi meningkat linear. Semakin kecil kompleksitasnya, semakin efisien algoritmanya.

</details>

---

## 📚 Prerequisites

- ✅ JavaScript dasar (variabel, fungsi, loop)
- ✅ Memahami konsep array dan string
- ✅ Familiar dengan perbandingan karakter

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Mengimplementasikan Bubble Sort, Selection Sort, dan Insertion Sort
- ✅ Melakukan refactoring ke clean code secara bertahap
- ✅ Memahami konsep Single Responsibility dan naming convention
- ✅ Memahami konsep pass by reference pada array
- ✅ Membandingkan trade-off setiap algoritma sorting

---

## 🛠️ Tools

- **Editor:** VS Code
- **Runtime:** Node.js
- **Online:** [CodePen](https://codepen.io), [JSFiddle](https://jsfiddle.net)

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1 →](docs/01-soal-dan-pemahaman.md)**

---

**Quick Links:**

[Part 1](docs/01-soal-dan-pemahaman.md) • [Part 2](docs/02-analisis-kode-original.md) • [Part 3](docs/03-refactoring-step-by-step.md) • [Part 4](docs/04-ringkasan-algoritma-refactoring.md) • [Part 5](docs/05-alternatif-selection-sort.md) • [Part 6](docs/06-ringkasan-algoritma-selection-sort.md) • [Part 7](docs/07-alternatif-insertion-sort.md) • [Part 8](docs/08-ringkasan-algoritma-insertion-sort.md) • [Part 9](docs/09-perbandingan-kesimpulan.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
