# 🧠 Quiz: Logic Challenge (Lanjutan)

### ✨ _Kumpulan challenge logika JavaScript — dari perhitungan matematis hingga deteksi pola deret_

> 🎯 **Konteks:** Folder ini berisi **4 challenge logika lanjutan** dari **Quiz PHASE-0 WEEK-2** program RPN. Setiap challenge didokumentasikan secara komprehensif dengan multiple versi solusi, deep dive 7-part series, cheat sheet, dan test cases lengkap.

![Phase](https://img.shields.io/badge/Phase-0-blue?style=for-the-badge) ![Week](https://img.shields.io/badge/Week-2-green?style=for-the-badge) ![Type](https://img.shields.io/badge/Type-Quiz-red?style=for-the-badge) ![Challenges](https://img.shields.io/badge/Challenges-4-purple?style=for-the-badge)

---

## 📑 Daftar Challenge

| No  | Challenge                                                                                        | Difficulty  | Topik Utama                                        | Jumlah Part |
| :-: | ------------------------------------------------------------------------------------------------ | :---------: | -------------------------------------------------- | :---------: |
| 01  | [📊 Find Mean (Rata-rata)](#-01--find-mean-rata-rata)                                            | 🟢 Beginner | Array, Loop, Reduce, Production Code               |   7 part    |
| 02  | [✖️ Unique Multiplication (Perkalian Unik)](#%EF%B8%8F-02--unique-multiplication-perkalian-unik) |  🟠 Medium  | Nested Loop, Optimasi O(n²)→O(n), Functional       |   7 part    |
| 03  | [📐 Deret Aritmatika](#-03--deret-aritmatika)                                                    |   🟢 Easy   | Array, Selisih Konstan, Debugging, Clean Code      |   7 part    |
| 04  | [📏 Deret Geometri](#-04--deret-geometri)                                                        |  🟠 Medium  | Array, Rasio Konstan, Division by Zero, `.every()` |   7 part    |

---

## 📊 01 — Find Mean (Rata-rata)

📂 [`01-Dokumentasi-find-mean_mencari-rata-rata-carimean/`](./01-Dokumentasi-find-mean_mencari-rata-rata-carimean/)

> _Menghitung rata-rata array — dari imperative loop hingga production-ready code dengan error handling!_

**Deskripsi:** Membuat fungsi `calculateMean(numbers)` yang menghitung nilai rata-rata (mean) dari sebuah array angka, lengkap dengan pembulatan dan validasi input.

**Konsep yang Dipelajari:**

- 🔁 **For...of Loop** — Iterasi imperatif untuk akumulasi nilai
- ⚡ **`.reduce()` Method** — Pendekatan functional programming
- 🧮 **Manual Count** — Algoritma dari nol tanpa `.length`
- 🛡️ **Production Ready** — Validation, error handling, edge cases
- ❌ **Learning from Mistakes** — Naming convention (`totalSum`) & pembagian di dalam reduce

**Evolusi Solusi (4 Pendekatan):**

| Kode | Pendekatan          |     Kategori     |
| :--: | ------------------- | :--------------: |
|  1   | For...of Loop       |  🔧 Fundamental  |
|  2   | Reduce (Functional) | ⚡ Best Practice |
|  3   | Manual Count        |  📚 Algoritmik   |
|  4   | Production Ready    |  🛡️ Profesional  |

```javascript
// Quick Preview — Kode 2 (Best Practice)
const calculateMean = (numbers) => {
  const sum = numbers.reduce((acc, val) => acc + val, 0);

  return Math.round(sum / numbers.length);
};
```

---

## ✖️ 02 — Unique Multiplication (Perkalian Unik)

📂 [`02-Dokumentasi-unique-multiplication-uniqueProduct_perkalian-unik/`](./02-Dokumentasi-unique-multiplication-uniqueProduct_perkalian-unik/)

> _Menghitung hasil kali semua elemen kecuali diri sendiri — dari O(n²) brute force ke O(n) optimal!_

**Deskripsi:** Membuat fungsi `uniqueProduct(arr)` yang mengembalikan array baru di mana setiap elemen berisi hasil perkalian semua elemen lain kecuali elemen di posisi tersebut.

**Konsep yang Dipelajari:**

- 🔄 **Nested Loop** — Pendekatan brute force O(n²)
- ⚡ **Single Loop + Pembagian** — Optimasi ke O(n) dengan total product
- 🎨 **Functional Programming** — Implementasi dengan `reduce()`, `filter()`, `map()`
- 🚀 **Prefix/Suffix Product** — Solusi optimal tanpa pembagian
- ⚠️ **Edge Case Handling** — Array dengan angka 0, negatif, dan duplikat

**Evolusi Solusi (4 Pendekatan):**

| Part | Pendekatan              | Complexity |     Kategori     |
| :--: | ----------------------- | :--------: | :--------------: |
|  2   | Nested Loop             |   O(n²)    |  🔧 Fundamental  |
|  3   | Single Loop + Pembagian |    O(n)    | ⚡ Best Practice |
|  5   | Functional Programming  |    O(n)    |   🎨 Modern JS   |
|  6   | Prefix/Suffix Product   |    O(n)    |   🚀 Interview   |

```javascript
// Quick Preview — Part 3 (Optimized O(n))
const uniqueProduct = (arr) => {
  const totalProduct = arr.reduce((acc, val) => acc * val, 1);

  return arr.map((num) => totalProduct / num);
};
```

---

## 📐 03 — Deret Aritmatika

📂 [`03-Dokumentasi-Deret-Aritmatika-isArithmeticSequence/`](./03-Dokumentasi-Deret-Aritmatika-isArithmeticSequence/)

> _Mengecek apakah array membentuk deret aritmatika — perjalanan dari bug ke clean code dengan 4 alternatif implementasi!_

**Deskripsi:** Membuat fungsi `isArithmeticSequence(numbers)` yang mengecek apakah sebuah array membentuk deret aritmatika (selisih antar elemen berurutan selalu konstan).

**Konsep yang Dipelajari:**

- 🐛 **Debugging Journey** — Identifikasi bug scope variabel & perbaikan iteratif
- 🔄 **Loop Optimization** — Perbedaan start index 0 vs 1
- 📝 **Clean Code Refactoring** — Transisi naming Bahasa Indonesia → English
- 🎨 **Functional Programming** — `.every()` dan `.map()` + `.every()`
- ⚖️ **Trade-offs Analysis** — Imperative vs Declarative paradigm

**Evolusi Solusi (4 Alternatif):**

| Versi | Pendekatan                  |   Style    |     Kategori      |
| :---: | --------------------------- | :--------: | :---------------: |
|   1   | Explicit Early Return       | Imperative |  🔧 Fundamental   |
|   2   | Optimized Loop (i=1)        | Imperative |   ⚡ Production   |
|   3   | `.every()` Single Transform | Functional |   🎨 Modern JS    |
|   4   | `.map()` + `.every()`       | Functional | 🔍 Debug-friendly |

```javascript
// Quick Preview — Alternatif 2 (Production Optimal)
const isArithmeticSequence = (numbers) => {
  if (numbers.length <= 1) return true;

  const difference = numbers[1] - numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] - numbers[i - 1] !== difference) return false;
  }

  return true;
};
```

---

## 📏 04 — Deret Geometri

📂 [`04-Dokumentasi-Deret-Geometri-isGeometricSequence/`](./04-Dokumentasi-Deret-Geometri-isGeometricSequence/)

> _Mengecek apakah array membentuk deret geometri — dari identifikasi 3 bug hingga 3 versi implementasi clean code!_

**Deskripsi:** Membuat fungsi `isGeometricSequence(numbers)` yang mengecek apakah sebuah array membentuk deret geometri (rasio antar elemen berurutan selalu konstan).

**Konsep yang Dipelajari:**

- 🐛 **Triple Bug Hunting** — 3 bug berbeda dalam 1 kode (operator salah, loop incomplete, urutan pengecekan)
- ➗ **Division by Zero** — Handling kasus pembagian dengan nol
- 🔄 **Iterative Fix** — 3 iterasi perbaikan bertahap
- 🎨 **`.every()` Method** — Pendekatan declarative modern
- 📖 **Descriptive Variables** — Self-documenting code pattern

**Evolusi Solusi (3 Versi):**

| Versi | Pendekatan            |      Style      |      Kategori       |
| :---: | --------------------- | :-------------: | :-----------------: |
|   1   | For Loop Simple       |   Imperative    |   🔧 Fundamental    |
|   2   | `.every()` Method     |   Functional    |    🎨 Modern JS     |
|   3   | Descriptive Variables | Imperative Enh. | 📖 Self-documenting |

```javascript
// Quick Preview — Versi 2 (.every() Functional)
const isGeometricSequence = (numbers) => {
  if (numbers.length <= 1) return true;
  if (numbers[0] === 0) return false;

  const ratio = numbers[1] / numbers[0];

  return numbers.slice(1).every((num, i) => {
    return numbers[i] !== 0 && num / numbers[i] === ratio;
  });
};
```

---

## 🗺️ Peta Konsep Lintas Challenge

Tabel ini membantu melihat **konsep mana yang muncul berulang** di beberapa challenge:

| Konsep                    | Ch.01 | Ch.02 | Ch.03 | Ch.04 |
| ------------------------- | :---: | :---: | :---: | :---: |
| Array Iteration           |  ✅   |  ✅   |  ✅   |  ✅   |
| Functional Programming    |  ✅   |  ✅   |  ✅   |  ✅   |
| Clean Code / Naming       |  ✅   |  ✅   |  ✅   |  ✅   |
| Edge Case Handling        |  ✅   |  ✅   |  ✅   |  ✅   |
| Debugging & Bug Fixing    |  ✅   |   —   |  ✅   |  ✅   |
| Multiple Approaches       |  ✅   |  ✅   |  ✅   |  ✅   |
| `.reduce()` Method        |  ✅   |  ✅   |   —   |   —   |
| `.every()` Method         |   —   |   —   |  ✅   |  ✅   |
| `.map()` Method           |   —   |  ✅   |  ✅   |   —   |
| Performance Optimization  |   —   |  ✅   |  ✅   |   —   |
| Math / Rumus Matematis    |  ✅   |  ✅   |  ✅   |  ✅   |
| Production-Ready Code     |  ✅   |   —   |   —   |   —   |
| Imperative vs Declarative |  ✅   |  ✅   |  ✅   |  ✅   |

---

## 🎓 Jalur Belajar yang Disarankan

```
📌 Mulai dari sini jika kamu pemula total:

  01 Find Mean ──→ 02 Unique Product ──→ 03 Deret Aritmatika ──→ 04 Deret Geometri
    (Beginner)         (Medium)              (Easy)                  (Medium)
  Belajar loop      Belajar optimasi      Belajar debugging       Belajar rasio
  & reduce          O(n²) → O(n)          & clean code            & edge cases
```

> [!TIP]
> 💡 **Tips:** Setiap folder memiliki **Cheat Sheet** dan **7-Part Series Dokumentasi** tersendiri. Untuk quick reference, langsung buka file Cheat Sheet tanpa harus membaca ulang seluruh series.

> [!NOTE]
> 📌 **Hubungan Ch.03 & Ch.04:** Kedua challenge ini adalah _pasangan alami_ — Aritmatika mengecek **selisih konstan**, Geometri mengecek **rasio konstan**. Sangat disarankan mempelajari keduanya secara berurutan untuk memperkuat pemahaman pola deret.

---

## 📊 Perbandingan Tingkat Kompleksitas

```
        Konsep Dasar ──────────────────────► Konsep Lanjut

  ┌──────────┐   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
  │  Ch.01   │   │    Ch.03     │   │    Ch.04     │   │    Ch.02     │
  │ 📊 Mean  │   │ 📐 Aritmatika│   │ 📏 Geometri  │   │ ✖️ Unique   │
  │          │   │              │   │              │   │  Product     │
  │ Akumulasi│   │ Selisih      │   │ Rasio +      │   │ O(n²)→O(n)  │
  │ + Bagi   │   │ konstan      │   │ div by zero  │   │ + Prefix/   │
  │          │   │              │   │              │   │ Suffix       │
  └──────────┘   └──────────────┘   └──────────────┘   └──────────────┘
   🟢 Beginner      🟢 Easy            🟠 Medium          🟠 Medium
```

---

## 📝 Catatan

> Semua dokumentasi dibuat pada **Mei 2026** melalui sesi mentoring interaktif di **Google Antigravity**, sebagai bagian dari program belajar **RPN PHASE-0 WEEK-2**.

---

<div align="center">

**📂 Bagian dari [CATATAN-BELAJAR-RPN](../../../../) → [PHASE-0](../../../) → [WEEK-2](../../) → [QUIZ](../)**

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
