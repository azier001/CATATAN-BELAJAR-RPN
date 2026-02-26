# 📚 checkAB - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              🎯 checkAB - COMPLETE LEARNING GUIDE 🎯                    ║
║                                                                          ║
║         Dari Kode Original ke Refactoring & Berbagai Alternatif          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Topics](https://img.shields.io/badge/Topics-String%20|%20Refactoring%20|%20Clean%20Code-blue)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📖 Tentang Dokumentasi Ini

Dokumentasi ini membahas fungsi **`checkAB`** — mengecek apakah terdapat karakter `a` dan `b` di dalam string yang dipisahkan tepat 3 karakter. Mencakup analisis kode original, refactoring bertahap, dan beberapa alternatif solusi.

**Cocok untuk:**
- 🎓 **Pemula** — Belajar konsep string traversal dan clean code
- 💻 **Developer** — Improve code quality dan naming convention
- 🚀 **Enthusiast** — Eksplorasi berbagai pendekatan solusi

---

## 🎯 Apa yang Dibahas?

Fungsi menerima sebuah string dan mengembalikan `true` jika terdapat karakter `a` dan `b` yang dipisahkan tepat 3 karakter, `false` jika tidak:

```javascript
checkAB('barbarian')     // → true  ('b' di index 3, 'a' di index 7, dipisah 'ari')
checkAB('lane borrowed') // → true  ('a' di index 1, 'b' di index 5, dipisah 'ne ')
checkAB('i am sick')     // → false (tidak ada pasangan a-b berjarak 3)
```

---

## 📚 Daftar Part Dokumentasi

| Part | Topik | Level |
|------|-------|-------|
| **[Part 1](docs/01-soal-dan-pemahaman-kriteria.md)** | Soal & Pemahaman Kriteria | 🌱 Pemula |
| **[Part 2](docs/02-analisis-kode-original.md)** | Analisis Kode Original | 🌱 Pemula |
| **[Part 3](docs/03-refactoring-step-by-step.md)** | Refactoring Step-by-Step | 🌿 Menengah |
| **[Part 4](docs/04-kode-final-dan-ringkasan-algoritma.md)** | Kode Final + Ringkasan Algoritma | 🌿 Menengah |
| **[Part 5](docs/05-alternatif-some-dan-ringkasan-algoritma.md)** | Alternatif `some` + Ringkasan Algoritma | 🌿 Menengah |
| **[Part 6](docs/06-alternatif-regex-dan-ringkasan-algoritma.md)** | Alternatif Regex + Ringkasan Algoritma | 🌿 Menengah |
| **[Part 7](docs/07-perbandingan-dan-kesimpulan.md)** | Perbandingan & Kesimpulan | 🌿 Menengah |

---

## 🗺️ Roadmap Belajar

### **📚 Jalur Lengkap (Recommended)**
```
Part 1 → Part 2 → Part 3 → Part 4 → Part 5 → Part 6 → Part 7
```

**Hasil:**
- ✅ Memahami soal dan kriteria secara menyeluruh
- ✅ Tahu bug di kode original dan cara memperbaikinya
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

| Solusi | Pendekatan | Cocok untuk |
|--------|-----------|-------------|
| **For Loop (Kode Final)** | Cek `str[i]` dan `str[i-4]` dalam satu loop | Pemula, debugging |
| **`some`** | Spread string + `.some()` | Functional programming |
| **Regex** | `/a...b\|b...a/.test(str)` | Solusi ringkas satu baris |

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
// Edge cases
console.log(checkAB(''));        // false
console.log(checkAB('a'));       // false
console.log(checkAB('ab'));      // false
```

```javascript
// Basic valid cases
console.log(checkAB('lane borrowed'));  // true
console.log(checkAB('barbarian'));      // true
console.log(checkAB('you are boring')); // true
console.log(checkAB('axxxb'));          // true
console.log(checkAB('bxxxa'));          // true
```

```javascript
// Invalid cases
console.log(checkAB('i am sick'));      // false
console.log(checkAB('bacon and meat')); // false
console.log(checkAB('aabbcc'));         // false
```

---

## 🤔 FAQ

<details>
<summary><strong>❓ Kenapa jarak 3 karakter = selisih index 4?</strong></summary>

Karena 3 karakter yang *berada di antara* dua posisi berarti posisinya berbeda 4 index. Contoh: index 0 dan index 4 — karakter di antaranya ada di posisi 1, 2, 3 (tepat 3 karakter).

</details>

<details>
<summary><strong>❓ Kenapa ada 3 solusi berbeda?</strong></summary>

Setiap solusi punya pendekatan dan trade-off berbeda. Dengan memahami ketiganya, kamu bisa memilih yang paling sesuai konteks dan menjelaskan alasannya.

</details>

<details>
<summary><strong>❓ Solusi mana yang paling baik?</strong></summary>

Tergantung konteks. Untuk belajar dan debugging → **For Loop**. Untuk gaya functional → **`some`**. Untuk solusi paling ringkas → **Regex**.

</details>

<details>
<summary><strong>❓ Apakah spasi dihitung sebagai karakter?</strong></summary>

Ya! Spasi dianggap karakter biasa. Contoh: `'a   b'` → `a` dipisah 3 spasi lalu `b` → return `true`.

</details>

---

## 📚 Prerequisites

- ✅ JavaScript dasar (variabel, fungsi, loop)
- ✅ Pemahaman dasar string dan index

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis kode dan mengidentifikasi bug-nya
- ✅ Melakukan refactoring ke clean code secara bertahap
- ✅ Mengimplementasikan beberapa pendekatan berbeda untuk satu soal
- ✅ Memahami trade-off setiap pendekatan

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1 →](docs/01-soal-dan-pemahaman-kriteria.md)**

---

**Quick Links:**

[Part 1](docs/01-soal-dan-pemahaman-kriteria.md) • [Part 2](docs/02-analisis-kode-original.md) • [Part 3](docs/03-refactoring-step-by-step.md) • [Part 4](docs/04-kode-final-dan-ringkasan-algoritma.md) • [Part 5](docs/05-alternatif-some-dan-ringkasan-algoritma.md) • [Part 6](docs/06-alternatif-regex-dan-ringkasan-algoritma.md) • [Part 7](docs/07-perbandingan-dan-kesimpulan.md)

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
