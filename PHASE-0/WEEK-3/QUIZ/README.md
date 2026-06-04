# 📝 Quiz — PHASE-0 WEEK-3

### ✨ _Kumpulan quiz JavaScript yang menguji logika algoritma, optimisasi, dan Object manipulation — total 12 challenge dengan dokumentasi komprehensif_

> 🎯 **Konteks:** Folder ini berisi seluruh **quiz** dari program **RPN PHASE-0 WEEK-3**. Quiz dibagi menjadi **3 kategori utama** berdasarkan tingkat kompleksitas dan tipe data: logic challenge tanpa Object (Part 1 & 2) dan logic challenge dengan Object. Setiap challenge dilengkapi dengan multiple versi solusi, mentoring step-by-step, cheat sheet, analisis clean code, dan perbandingan kompleksitas algoritma.

![Phase](https://img.shields.io/badge/Phase-0-blue?style=for-the-badge) ![Week](https://img.shields.io/badge/Week-3-green?style=for-the-badge) ![Type](https://img.shields.io/badge/Type-Quiz-red?style=for-the-badge) ![Total Challenges](https://img.shields.io/badge/Total_Challenges-12-purple?style=for-the-badge)

---

## 📂 Daftar Folder

| No  | Folder                                                                                                             | Kategori                         | Jumlah Challenge | Difficulty Range         |
| :-: | ------------------------------------------------------------------------------------------------------------------ | -------------------------------- | :--------------: | ------------------------ |
| 01  | [🧠 Logic Challenge — Tanpa Object (Part 1)](#-01--logic-challenge--tanpa-tipe-data-object-part-1)                | Algoritma Klasik & Matematika    |    5 challenge   | 🟢 Beginner — 🟠 Medium |
| 02  | [🧠 Logic Challenge — Tanpa Object (Part 2)](#-02--logic-challenge--tanpa-tipe-data-object-part-2)                | Optimisasi & Pattern Matching    |    4 challenge   | 🟢 Beginner — 🟠 Medium |
| 03  | [🧠 Logic Challenge — Dengan Object](#-03--logic-challenge--dengan-tipe-data-object)                              | Object Manipulation & Hash Map   |    3 challenge   | 🟢 Beginner — 🟠 Medium |

---

## 🧠 01 — Logic Challenge — Tanpa Tipe Data Object (Part 1)

📂 [`01-Logic-Challenge-tanpa-tipe-data-object/`](./01-Logic-Challenge-tanpa-tipe-data-object/)

> _Dari bilangan prima hingga Caesar Cipher — menguasai algoritma klasik dengan primitif, array, dan loop saja!_

**Fokus Utama:** Algoritma matematis klasik dan manipulasi data tanpa menggunakan tipe data Object.

**Challenge di dalamnya:**

| No  | Challenge                        | Difficulty  | Highlight                                                   |
| :-: | -------------------------------- | :---------: | ----------------------------------------------------------- |
| 01  | 🔢 isPrime                      | 🟢 Beginner | Loop Efisien, Modulo `%`, Optimisasi `√n`, Early Return     |
| 02  | 🔗 greatestCommonDivisor (GCD)  |  🟠 Medium  | Algoritma Euclidean, Rekursi vs Iterasi, Modulo             |
| 03  | 📊 findMedian                   |  🟠 Medium  | Sorting, Index Tengah, Ganjil vs Genap, Immutability        |
| 04  | 📈 findMode                     |  🟠 Medium  | Nested Loop, Frekuensi/Counting, Pencarian Max              |
| 05  | 🔤 shiftWord / shiftLetter      |  🟠 Medium  | ASCII/`charCodeAt`, Modulo Wrap-around, Caesar Cipher       |

**Konsep Kunci yang Dipelajari:**

```
Loop & Optimisasi ─→ Modulo ─→ Algoritma Euclidean (Rekursi)
         │                            │
         ▼                            ▼
  √n Optimization ─→ Sorting ─→ Index Tengah (Median)
         │                            │
         ▼                            ▼
  Nested Loop ─→ Counting ─→ ASCII & Wrap-around (Caesar Cipher)
```

---

## 🧠 02 — Logic Challenge — Tanpa Tipe Data Object (Part 2)

📂 [`02-Logic-Challenge-tanpa-tipe-data-object/`](./02-Logic-Challenge-tanpa-tipe-data-object/)

> _Dari digit perkalian hingga pattern matching — algoritma lanjutan dengan optimisasi dan multiple sorting algorithms!_

**Fokus Utama:** Algoritma lanjutan yang mencakup optimisasi performa, sorting algorithms klasik, dan pattern matching — tetap tanpa Object.

**Challenge di dalamnya:**

| No  | Challenge                             | Difficulty  | Highlight                                                    |
| :-: | ------------------------------------- | :---------: | ------------------------------------------------------------ |
| 01  | 🔢 getMinimumMultiplicationDigits     |  🟠 Medium  | Faktor Bilangan, Optimisasi `√n`, `Math.min()`               |
| 02  | 🔤 sortAlphabetically                 | 🟢 Beginner | Bubble Sort, Selection Sort, Insertion Sort, SRP             |
| 03  | 🔄 toggleCase / swapCase              | 🟢 Beginner | ASCII, Regex, `.map()`, Declarative vs Imperative            |
| 04  | 🔍 checkAB                            |  🟠 Medium  | Pattern Matching, Index Distance, Forward/Backward, Regex    |

**Konsep Kunci yang Dipelajari:**

```
Faktor Bilangan ─→ √n Optimization ─→ Math.min() Tracking
         │
         ▼
Sorting Algorithms ─→ Bubble ─→ Selection ─→ Insertion
         │                                      │
         ▼                                      ▼
  String Manipulation ─→ ASCII ─→ Regex ─→ Pattern Matching
```

**Bonus:** Tabel perbandingan **Time Complexity** untuk setiap sorting algorithm (Bubble vs Selection vs Insertion Sort).

---

## 🧠 03 — Logic Challenge — Dengan Tipe Data Object

📂 [`03-Logic-Challenge-tipe-data-object/`](./03-Logic-Challenge-tipe-data-object/)

> _Dari data transformation hingga Hash Map optimization — challenge real-world menggunakan Object sebagai struktur data utama!_

**Fokus Utama:** Penggunaan tipe data Object untuk memecahkan masalah dunia nyata: manajemen profil, simulasi belanja, dan perhitungan profit.

**Challenge di dalamnya:**

| No  | Challenge                     | Difficulty  | Highlight                                                        |
| :-: | ----------------------------- | :---------: | ---------------------------------------------------------------- |
| 01  | 👤 buildProfileMap & changeMe | 🟢 Beginner | Object as Map, Destructuring, Age Calculation, Deduplication     |
| 02  | 🛒 shoppingTime               | 🟢 Beginner | Greedy Algorithm, Sorting Descending, Early Break, 5 versi       |
| 03  | 💰 countProfit                 |  🟠 Medium  | Hash Map O(N+M), Stock Management, Profit Calculation, 5 versi   |

**Konsep Kunci yang Dipelajari:**

```
Object as Map ─→ Destructuring ─→ Data Transformation
        │                              │
        ▼                              ▼
 for...in ─→ Object.entries() ─→ Greedy Algorithm ─→ Sorting
        │                              │
        ▼                              ▼
 Hash Map (O(1) lookup) ─→ Time Complexity O(N×M) → O(N+M)
```

> [!NOTE]
> 📌 **Fitur Unik:** Folder ini memiliki challenge dengan **hingga 5 versi solusi** per soal (V1–V5), termasuk versi **Production-Ready** dan **AI Improved**. Challenge `countProfit` menunjukkan optimisasi performa nyata ~90x lebih cepat menggunakan Hash Map.

---

## 🗺️ Peta Konsep Lintas Semua Quiz

Tabel ini membantu melihat **konsep mana yang muncul berulang** di ketiga folder quiz:

| Konsep                          | 🧠 Part 1 (Tanpa Object) | 🧠 Part 2 (Tanpa Object) | 🧠 Part 3 (Dengan Object) |
| ------------------------------- | :-----------------------: | :-----------------------: | :------------------------: |
| Looping (for/while/for...of)    |             ✅            |             ✅            |             ✅             |
| Clean Code / Naming             |             ✅            |             ✅            |             ✅             |
| Multiple Solution Approach      |             ✅            |             ✅            |             ✅             |
| Edge Case Handling              |             ✅            |             ✅            |             ✅             |
| Early Return Pattern            |             ✅            |             ✅            |             ✅             |
| Operator Modulo (`%`)           |             ✅            |             ✅            |             —              |
| Sorting                         |             ✅            |             ✅            |             ✅             |
| Math Methods                    |             ✅            |             ✅            |             —              |
| ASCII / `charCodeAt()`          |             ✅            |             ✅            |             —              |
| Nested Loop                     |             ✅            |             ✅            |             —              |
| Rekursi                         |             ✅            |             —             |             —              |
| Immutability Pattern            |             ✅            |             —             |             —              |
| String Manipulation             |             ✅            |             ✅            |             —              |
| Regex Pattern Matching          |             —             |             ✅            |             —              |
| Sorting Algorithms (Manual)     |             —             |             ✅            |             —              |
| Single Responsibility Principle |             —             |             ✅            |             —              |
| Optimization (√n)               |             —             |             ✅            |             —              |
| Object Manipulation             |             —             |             —             |             ✅             |
| Destructuring                   |             —             |             —             |             ✅             |
| Hash Map / Dictionary           |             —             |             —             |             ✅             |
| Greedy Algorithm                |             —             |             —             |             ✅             |
| Time Complexity Optimization    |             —             |             —             |             ✅             |
| `reduce` / `forEach` / HOF     |             —             |             —             |             ✅             |

---


> [!TIP]
> 💡 **Quick Review:** Setiap folder memiliki **README index** dan **Cheat Sheet** masing-masing. Untuk review cepat tanpa membaca ulang seluruh dokumentasi, langsung akses file Cheat Sheet di dalam setiap subfolder challenge.

---

## 📊 Perbandingan Kompleksitas Lintas Challenge

Rangkuman **Time & Space Complexity** dari solusi terbaik setiap challenge:

| Challenge                          | Best Approach               | Time       | Space | Folder |
| ---------------------------------- | --------------------------- | :--------: | :---: | :----: |
| isPrime                            | Loop hingga `√n`            |   O(√n)    | O(1)  | Part 1 |
| greatestCommonDivisor              | Rekursif Euclidean          | O(log n)   | O(log n) | Part 1 |
| findMedian                         | Spread + Sort + Ternary     | O(n log n) | O(n)  | Part 1 |
| findMode                           | Nested Loop + Max Tracking  |   O(n²)    | O(1)  | Part 1 |
| shiftWord                          | Helper Function + Modulo    |   O(n)     | O(n)  | Part 1 |
| getMinimumMultiplicationDigits     | Loop hingga `√n`            |   O(√n)    | O(1)  | Part 2 |
| sortAlphabetically (Bubble)        | Early Stop Flag             |   O(n²)    | O(n)  | Part 2 |
| toggleCase                         | `.split().map().join()`     |   O(n)     | O(n)  | Part 2 |
| checkAB                            | Single Loop Forward         |   O(n)     | O(1)  | Part 2 |
| buildProfileMap                    | `forEach` + `for...in`      |   O(n)     | O(n)  | Part 3 |
| shoppingTime                       | Early Break + Sort Once     | O(n log n) | O(n)  | Part 3 |
| countProfit (V5)                   | Hash Map Masterpiece        |  O(N+M)    | O(n)  | Part 3 |

---

## 📈 Statistik Keseluruhan

| Metrik                       | Nilai                                        |
| ---------------------------- | -------------------------------------------- |
| **Total Challenge**          | 12 soal                                      |
| **Total Folder Dokumentasi** | 3 kategori (Part 1, Part 2, Part 3)          |
| **Total Versi Solusi**       | 35+ versi (termasuk V5 Production-Ready)     |
| **Range Difficulty**         | 🟢 Beginner — 🟠 Medium                     |
| **Format Dokumentasi**       | README + Cheat Sheet per challenge            |
| **Bahasa Pemrograman**       | JavaScript                                   |
| **Topik Inti**               | Algoritma, Optimisasi, Object Manipulation    |

---


> [!NOTE]
> 📌 Tidak semua challenge memiliki struktur yang identik — beberapa challenge memiliki file tambahan atau variasi nama. Lihat README di masing-masing folder untuk detail lengkap.

---

## 🔗 Navigasi

| Arah       | Tujuan                 |
| ---------- | ---------------------- |
| ⬆️ Naik    | [WEEK-3](../)          |
| 📂 Setara  | [UJIAN](../UJIAN/)     |

---

## 📝 Catatan

> Semua dokumentasi dibuat pada **Mei–Juni 2026** melalui sesi mentoring interaktif di **Google Antigravity**, sebagai bagian dari program belajar **RPN PHASE-0 WEEK-3**.

---

<div align="center">

**📂 Bagian dari [CATATAN-BELAJAR-RPN](../../../) → [PHASE-0](../../) → [WEEK-3](../)**

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
