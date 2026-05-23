# 📝 Ujian — PHASE-0 WEEK-2

### ✨ _Kumpulan soal ujian JavaScript yang menguji kemampuan algoritma, array grouping, dan optimasi kode — total 3 challenge dengan dokumentasi komprehensif_

> 🎯 **Konteks:** Folder ini berisi seluruh **soal ujian** dari program **RPN PHASE-0 WEEK-2**. Ujian berfokus pada **algoritma pencarian & pengelompokan data** — dari mencari jarak terdekat dalam array, mengelompokkan angka berdasarkan kategori, hingga grouping string berdasarkan huruf pertama. Setiap challenge dilengkapi dengan multiple versi solusi, refactoring bertahap, cheat sheet, dan analisis kompleksitas.

![Phase](https://img.shields.io/badge/Phase-0-blue?style=for-the-badge) ![Week](https://img.shields.io/badge/Week-2-green?style=for-the-badge) ![Type](https://img.shields.io/badge/Type-Ujian-red?style=for-the-badge) ![Total Challenges](https://img.shields.io/badge/Total_Challenges-3-purple?style=for-the-badge)

---

## 📂 Daftar Folder

| No  | Folder                                                                                                      | Topik Utama                | Difficulty | Jumlah Versi Solusi |
| :-: | ----------------------------------------------------------------------------------------------------------- | -------------------------- | :--------: | :-----------------: |
| 01  | [🎯 Target Terdekat](#-01--target-terdekat--findclosesttarget)                                              | Pencarian Jarak Minimum    |  🟠 Medium |      5 versi        |
| 02  | [🔢 Mengelompokkan Angka](#-02--mengelompokkan-angka--groupnumbers)                                        | Kategorisasi Angka         |  🟢 Easy   |      3 versi        |
| 03  | [🐾 Group Animals](#-03--group-animals--groupanimals)                                                       | Grouping String Alphabetis |  🟠 Medium |      3 versi        |

---

## 🎯 01 — Target Terdekat — `findClosestTarget`

📂 [`01-Dokumentasi-target-terdekat-findClosestTarget/`](./01-Dokumentasi-target-terdekat-findClosestTarget/)

> _Dari Nested Loop ke Single-Pass — kuasai 5 pendekatan berbeda untuk mencari jarak terdekat antara dua karakter dalam array_

**Fokus Utama:** Algoritma pencarian jarak minimum antara karakter `'o'` dan `'x'` dalam array, dengan evolusi dari brute force ke solusi optimal.

**Contoh Soal:**

```javascript
targetTerdekat(['x', ' ', 'o'])                    // 2
targetTerdekat(['x', ' ', 'o', ' ', 'x', 'o'])     // 1
targetTerdekat(['o', ' '])                          // 0 (no 'x')
```

**5 Versi Implementasi:**

| Versi | Pendekatan          | Time     | Space    | Highlight                        |
| :---: | ------------------- | -------- | -------- | -------------------------------- |
|  V1   | Original (Nested)   | O(n×m)   | O(n×m)   | Kode awal, ada bug               |
|  V2   | Refactored (Nested) | O(n×m)   | O(n+m)   | Clean code, naming English       |
|  V3   | Two-Pass            | O(n)     | O(1)     | Optimasi kiri→kanan, kanan→kiri  |
|  V4   | Single-Pass         | O(n)     | O(1)     | 🏆 **Best — Production ready**  |
|  V5   | Functional          | O(n)     | O(1)     | FP style dengan `reduce()`      |

**Konsep Kunci yang Dipelajari:**

```
Nested Loop (Brute Force) ─→ Refactoring ─→ Two-Pass Optimization
                                                    │
                                                    ▼
                              Single-Pass ─→ Functional (reduce)
                                    │
                                    ▼
                       Track lastO & lastX → O(n) time, O(1) space
```

**Dokumentasi:** 6 parts (~90 menit) — Problem & Kode Awal → Refactoring → Two-Pass → Single-Pass → Perbandingan → Cheat Sheet

---

## 🔢 02 — Mengelompokkan Angka — `groupNumbers`

📂 [`02-Dokumentasi-Mengelompokkan-Angka-groupNumbers/`](./02-Dokumentasi-Mengelompokkan-Angka-groupNumbers/)

> _Dari kode awal ke clean code — 3 pendekatan berbeda untuk mengelompokkan angka berdasarkan genap, ganjil, dan kelipatan 3_

**Fokus Utama:** Pengelompokan angka ke 3 kategori (genap, ganjil, kelipatan 3) dengan **prioritas kelipatan 3 tertinggi**.

**Contoh Soal:**

```javascript
mengelompokkanAngka([2, 4, 6])
// [[2, 4], [], [6]]  ← 6 masuk kelipatan 3, bukan genap!

mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])
// [[2, 4, 8], [1, 5, 7], [3, 6, 9]]
```

**3 Versi Implementasi:**

| Versi | Pendekatan | Lines | Best For                |
| :---: | ---------- | :---: | ----------------------- |
|   1   | For Loop   |  13   | Pemula, clarity         |
|   2   | Filter     |  15   | Modern codebase         |
|   3   | Reduce     |  13   | FP enthusiasts          |

**Konsep Kunci yang Dipelajari:**

```
Prioritas IF-ELSE ─→ Modulo Operator (%) ─→ Array Grouping
         │                                        │
         ▼                                        ▼
   For Loop (Imperative) ─→ Filter (Declarative) ─→ Reduce (FP)
         │                                        │
         ▼                                        ▼
   Clean Naming ─→ Trade-offs Analysis ─→ Context-based Choice
```

**Dokumentasi:** 4 parts (~55 menit) — Review Kode Awal → Clean Code Refactoring → Ringkasan 3 Versi → Cheat Sheet

---

## 🐾 03 — Group Animals — `groupAnimals`

📂 [`03-Dokumentasi-group-animals/`](./03-Dokumentasi-group-animals/)

> _Dari kode overkill ke clean code — kuasai best practice grouping string & refactoring bertahap dengan pure array approach_

**Fokus Utama:** Mengelompokkan array hewan berdasarkan **huruf pertama**, terurut alphabetically, menggunakan **pure array** (tanpa Object/Map/Set).

**Contoh Soal:**

```javascript
groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])
// [['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']]
//   Grup 'a'           Grup 'c'    Grup 'k'
```

**3 Versi Implementasi:**

| Versi | Pendekatan     | Readability | Best For                      |
| :---: | -------------- | :---------: | ----------------------------- |
|   1   | For Loop Manual| ⭐⭐⭐⭐⭐    | Pemula, clarity, debugging    |
|   2   | Array.find()   | ⭐⭐⭐⭐⭐    | Modern codebase, production   |
|   3   | Array.findIndex() | ⭐⭐⭐⭐  | Ketika butuh index            |

**Konsep Kunci yang Dipelajari:**

```
Kode Overkill ─→ Refactoring Step-by-Step (4 Steps) ─→ Clean Code
                              │
                              ▼
        For Loop ─→ Array.find() ─→ Array.findIndex()
                              │
                              ▼
           Naming Convention ─→ Complexity Analysis ─→ Cheat Sheet
```

**Dokumentasi:** 6 parts (~90 menit) — Review Kode Original → Refactoring → Ringkasan 3 Versi → Naming Convention → Complexity → Cheat Sheet

---

## 🗺️ Peta Konsep Lintas Semua Ujian

Tabel ini membantu melihat **konsep mana yang muncul berulang** di ketiga challenge ujian:

| Konsep                         | 🎯 Target Terdekat | 🔢 Group Numbers | 🐾 Group Animals |
| ------------------------------ | :-----------------: | :---------------: | :---------------: |
| Array Iteration / Loop         |          ✅         |        ✅         |        ✅         |
| Clean Code / Refactoring       |          ✅         |        ✅         |        ✅         |
| Multiple Solution Approach     |          ✅         |        ✅         |        ✅         |
| Cheat Sheet / Quick Reference  |          ✅         |        ✅         |        ✅         |
| Trade-offs Analysis            |          ✅         |        ✅         |        ✅         |
| Algorithm Optimization         |          ✅         |        —          |        —          |
| Time & Space Complexity        |          ✅         |        —          |        ✅         |
| Debugging Journey              |          ✅         |        —          |        —          |
| Functional Programming         |          ✅         |        ✅         |        —          |
| Naming Convention              |          —          |        —          |        ✅         |
| Prioritas / Conditional Logic  |          —          |        ✅         |        —          |
| String Manipulation            |          —          |        —          |        ✅         |
| Pure Array Constraint          |          —          |        —          |        ✅         |

---

## 🎓 Jalur Belajar yang Disarankan

```
📌 Rekomendasi urutan belajar lintas challenge:

  ┌─────────────────────────┐    ┌─────────────────────────┐    ┌─────────────────────────┐
  │  🔢 02 Group Numbers    │    │  🐾 03 Group Animals    │    │  🎯 01 Target Terdekat  │
  │                         │    │                         │    │                         │
  │  Fondasi: Conditional,  │───→│  Intermediate: Grouping │───→│  Advanced: Optimasi     │
  │  Modulo, Array Grouping │    │  String, Refactoring    │    │  Nested→Single-Pass     │
  │                         │    │                         │    │                         │
  │  3 versi · ~55 menit    │    │  3 versi · ~90 menit    │    │  5 versi · ~90 menit    │
  │  🟢 Easy                │    │  🟠 Medium              │    │  🟠 Medium              │
  └─────────────────────────┘    └─────────────────────────┘    └─────────────────────────┘
          STEP 1                         STEP 2                         STEP 3
```

> [!TIP]
> 💡 **Quick Review:** Setiap folder memiliki **Cheat Sheet** dan **Dokumentasi lengkap** terpisah. Untuk review cepat tanpa membaca ulang seluruh dokumentasi, langsung akses file `0-Cheat-Sheet-*.md` di root setiap subfolder.

---

## 📊 Statistik Keseluruhan

| Metrik                       | Nilai                                   |
| ---------------------------- | --------------------------------------- |
| **Total Challenge**          | 3 soal                                  |
| **Total Versi Solusi**       | 11 versi (5 + 3 + 3)                   |
| **Total Parts Dokumentasi**  | 16 parts (6 + 4 + 6)                   |
| **Estimasi Waktu Belajar**   | ~235 menit (~4 jam)                     |
| **Range Difficulty**         | 🟢 Easy — 🟠 Medium                    |
| **Format Dokumentasi**       | README + Cheat Sheet + Multi-Part Docs  |
| **Bahasa Pemrograman**       | JavaScript                              |

---

## 🔗 Perbandingan Cepat: Ujian vs Quiz

| Aspek                  | 📝 Quiz                                   | 📝 Ujian                                |
| ---------------------- | ------------------------------------------ | ---------------------------------------- |
| **Jumlah Challenge**   | 10 soal                                    | 3 soal                                   |
| **Fokus**              | Beragam (array, string, math, pattern)     | Spesifik (pencarian & pengelompokan)     |
| **Kedalaman**          | Bervariasi (3–7 parts per challenge)       | Mendalam (4–6 parts per challenge)       |
| **Versi Solusi**       | 30+ versi                                  | 11 versi                                 |
| **Difficulty**         | 🟢 Easy — 🟠 Medium                       | 🟢 Easy — 🟠 Medium                     |

---

## 📝 Catatan

> Semua dokumentasi dibuat pada **Mei 2026** melalui sesi mentoring interaktif di **Google Antigravity**, sebagai bagian dari program belajar **RPN PHASE-0 WEEK-2**.

---

<div align="center">

**📂 Bagian dari [CATATAN-BELAJAR-RPN](../../../) → [PHASE-0](../../) → [WEEK-2](../)**

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
