# 📝 Quiz — PHASE-0 WEEK-2

### ✨ _Kumpulan quiz JavaScript yang menguji pemahaman array handling, logika, dan algoritma — total 10 challenge dengan dokumentasi komprehensif_

> 🎯 **Konteks:** Folder ini berisi seluruh **quiz** dari program **RPN PHASE-0 WEEK-2**. Quiz dibagi menjadi **3 kategori utama**: penanganan data array, challenge logika dasar, dan challenge logika lanjutan. Setiap challenge dilengkapi dengan multiple versi solusi, mentoring step-by-step, cheat sheet, dan analisis clean code.

![Phase](https://img.shields.io/badge/Phase-0-blue?style=for-the-badge) ![Week](https://img.shields.io/badge/Week-2-green?style=for-the-badge) ![Type](https://img.shields.io/badge/Type-Quiz-red?style=for-the-badge) ![Total Challenges](https://img.shields.io/badge/Total_Challenges-10-purple?style=for-the-badge)

---

## 📂 Daftar Folder

| No  | Folder                                                                     | Kategori                 | Jumlah Challenge | Difficulty Range        |
| :-: | -------------------------------------------------------------------------- | ------------------------ | :--------------: | ----------------------- |
| 01  | [📦 Data Handling Array](#-01--data-handling-array--penanganan-data-array) | Array Manipulation       |   2 challenge    | 🟢 Beginner — 🟠 Medium |
| 02  | [🧠 Logic Challenge](#-02--logic-challenge)                                | String & Number Logic    |   4 challenge    | 🟢 Beginner — 🟠 Medium |
| 03  | [🧠 Logic Challenge (Lanjutan)](#-03--logic-challenge-lanjutan)            | Math & Pattern Detection |   4 challenge    | 🟢 Easy — 🟠 Medium     |

---

## 📦 01 — Data Handling Array — Penanganan Data Array

📂 [`01-Dokumentasi-data-handling-array_penanganan-data-array/`](./01-Dokumentasi-data-handling-array_penanganan-data-array/)

> _Dari mengakses data array 2D hingga mentransformasi data dengan 5 built-in methods — fondasi utama manipulasi data JavaScript_

**Fokus Utama:** Manipulasi dan transformasi data menggunakan array methods bawaan JavaScript.

**Challenge di dalamnya:**

| No  | Challenge                            | Difficulty  | Highlight                                                |
| :-: | ------------------------------------ | :---------: | -------------------------------------------------------- |
| 01  | 📊 Data Handling I (Profil Array 2D) | 🟢 Beginner | Array 2D, `for...of`, Destructuring, Template Literals   |
| 02  | 🔧 Data Handling II (Transformasi)   |  🟠 Medium  | `splice`, `split`, `join`, `sort`, `slice`, Immutability |

**Konsep Kunci yang Dipelajari:**

```
Array 2D ─→ for...of Loop ─→ Destructuring ─→ Template Literals
                                    │
                                    ▼
              splice ─→ split ─→ join ─→ sort ─→ slice
                                    │
                                    ▼
                        Immutability Pattern (Spread Cloning)
```

---

## 🧠 02 — Logic Challenge

📂 [`02-Logic-Challenge/`](./02-Logic-Challenge/)

> _Dari membalikkan string hingga mencari digit pair terbesar — melatih logika fundamental JavaScript_

**Fokus Utama:** Algoritma logika dasar yang melibatkan manipulasi string, konversi tipe data, dan debugging.

**Challenge di dalamnya:**

| No  | Challenge                      | Difficulty  | Highlight                                  |
| :-: | ------------------------------ | :---------: | ------------------------------------------ |
| 01  | 🔄 Palindrome Checker          | 🟢 Beginner | String Reversal, Spread + Method Chaining  |
| 02  | 🔢 Palindrome Number Algorithm |  🟠 Medium  | While Loop, Type Conversion, Encapsulation |
| 03  | 📝 Word Counter                |  🟠 Medium  | State/Flag Pattern, Regex Split (`/\s+/`)  |
| 04  | 🎯 Largest Digit Pair          |  🟠 Medium  | Debugging Journey (4 versi), `Math.max()`  |

**Konsep Kunci yang Dipelajari:**

```
String Reversal ─→ Boolean Return Pattern ─→ While Loop
        │                                        │
        ▼                                        ▼
Method Chaining (ES6) ─→ State/Flag ─→ Regex ─→ Debugging
        │                                        │
        ▼                                        ▼
  Type Conversion (String ↔ Number)    Edge Case Handling
```

---

## 🧠 03 — Logic Challenge (Lanjutan)

📂 [`03-Logic-Challenge-lagi/`](./03-Logic-Challenge-lagi/)

> _Dari menghitung rata-rata hingga mendeteksi pola deret — challenge logika lanjutan dengan 7-part dokumentasi per soal_

**Fokus Utama:** Algoritma matematis dan deteksi pola deret, dengan dokumentasi mendalam format 7-part series.

**Challenge di dalamnya:**

| No  | Challenge                | Difficulty  | Highlight                                          |
| :-: | ------------------------ | :---------: | -------------------------------------------------- |
| 01  | 📊 Find Mean (Rata-rata) | 🟢 Beginner | `reduce()`, Manual Count, Production-Ready Code    |
| 02  | ✖️ Unique Multiplication |  🟠 Medium  | Optimasi O(n²) → O(n), Prefix/Suffix Product       |
| 03  | 📐 Deret Aritmatika      |   🟢 Easy   | Debugging Journey, `.every()`, Clean Code Refactor |
| 04  | 📏 Deret Geometri        |  🟠 Medium  | Triple Bug Hunting, Division by Zero, `.every()`   |

**Konsep Kunci yang Dipelajari:**

```
Array Iteration ─→ reduce() ─→ Functional Programming
        │                              │
        ▼                              ▼
  Nested Loop ─→ Optimasi O(n²)→O(n) ─→ map() + every()
        │                              │
        ▼                              ▼
  Debugging ─→ Clean Code ─→ Imperative vs Declarative
```

> [!NOTE]
> 📌 **Fitur Unik:** Folder ini menggunakan format **7-Part Series Dokumentasi** per challenge, lebih mendalam dibanding folder lain. Setiap challenge juga dilengkapi Cheat Sheet terpisah.

---

## 🎓 Jalur Belajar yang Disarankan

```
📌 Rekomendasi urutan belajar lintas folder:

  ┌─────────────────────────┐    ┌─────────────────────────┐    ┌─────────────────────────┐
  │   📦 01 Data Handling   │    │   🧠 02 Logic Challenge │    │ 🧠 03 Logic Ch. Lanjut  │
  │                         │    │                         │    │                         │
  │  Fondasi: Array 2D,     │───→│  Logika: String, Loop,  │───→│  Lanjutan: Matematis,   │
  │  Methods, Transform     │    │  State, Debugging       │    │  Deret, Optimasi O(n)   │
  │                         │    │                         │    │                         │
  │  2 challenge            │    │  4 challenge            │    │  4 challenge            │
  │  🟢—🟠 Difficulty       │    │  🟢—🟠 Difficulty       │    │  🟢—🟠 Difficulty       │
  └─────────────────────────┘    └─────────────────────────┘    └─────────────────────────┘
         STEP 1                         STEP 2                         STEP 3
```

> [!TIP]
> 💡 **Quick Review:** Setiap folder memiliki **README index** dan **Cheat Sheet** masing-masing. Untuk review cepat tanpa membaca ulang seluruh dokumentasi, langsung akses file Cheat Sheet di dalam setiap subfolder challenge.

---

## 📊 Statistik Keseluruhan

| Metrik                       | Nilai                                |
| ---------------------------- | ------------------------------------ |
| **Total Challenge**          | 10 soal                              |
| **Total Folder Dokumentasi** | 3 kategori                           |
| **Total Versi Solusi**       | 30+ versi                            |
| **Range Difficulty**         | 🟢 Easy — 🟠 Medium                  |
| **Format Dokumentasi**       | README + Cheat Sheet + 7-Part Series |
| **Bahasa Pemrograman**       | JavaScript                           |

---

## 📝 Catatan

> Semua dokumentasi dibuat pada **Mei 2026** melalui sesi mentoring interaktif di **Google Antigravity**, sebagai bagian dari program belajar **RPN PHASE-0 WEEK-2**.

---

<div align="center">

**📂 Bagian dari [CATATAN-BELAJAR-RPN](../../../) → [PHASE-0](../../) → [WEEK-2](../)**

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
