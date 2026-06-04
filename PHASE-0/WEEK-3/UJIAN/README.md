# 📝 Ujian — PHASE-0 WEEK-3

### ✨ _Kumpulan soal ujian JavaScript yang menguji kemampuan nested array, kalkulasi data, object grouping, dan filtering — total 4 challenge dengan dokumentasi komprehensif_

> 🎯 **Konteks:** Folder ini berisi seluruh **soal ujian** dari program **RPN PHASE-0 WEEK-3**. Ujian berfokus pada **pengolahan data kompleks** — dari menjumlahkan nested array bertingkat, mensimulasikan kalkulasi ongkos angkot, mencari skor tertinggi per kelas, hingga grouping & filtering data lulusan. Setiap challenge dilengkapi dengan multiple versi solusi, refactoring bertahap, ringkasan algoritma, cheat sheet, dan dokumentasi review mentoring.

![Phase](https://img.shields.io/badge/Phase-0-blue?style=for-the-badge) ![Week](https://img.shields.io/badge/Week-3-green?style=for-the-badge) ![Type](https://img.shields.io/badge/Type-Ujian-red?style=for-the-badge) ![Total Challenges](https://img.shields.io/badge/Total_Challenges-4-purple?style=for-the-badge)

---

## 📂 Daftar Folder

| No  | Folder                                                                                                      | Topik Utama                    | Difficulty | Jumlah Versi Solusi |
| :-: | ----------------------------------------------------------------------------------------------------------- | ------------------------------ | :--------: | :-----------------: |
| 01  | [🔢 Deep Sum](#-01--deep-sum--deepsum)                                                                     | Penjumlahan Nested Array       |  🟢 Easy   |      3 versi        |
| 02  | [🚐 Naik Angkot](#-02--naik-angkot--naikangkot)                                                            | Kalkulasi Ongkos Rute          |  🟢 Easy   |      5 versi        |
| 03  | [🏆 Highest Score](#-03--highest-score--highestscore)                                                       | Skor Tertinggi Per Kelas       |  🟢 Easy   |      3 versi        |
| 04  | [🎓 Graduates](#-04--graduates--graduates)                                                                  | Grouping & Filter Lulusan      |  🟢 Easy   |      4 versi        |

---

## 🔢 01 — Deep Sum — `deepSum`

📂 [`1-Dokumentasi-penjumlahan-bertingkat-deepSum/`](./1-Dokumentasi-penjumlahan-bertingkat-deepSum/)

> _Dari Nested Loop ke Recursion — kuasai 3 pendekatan berbeda untuk menjumlahkan semua angka di nested array bertingkat_

**Fokus Utama:** Menjumlahkan seluruh angka dalam array bersarang (nested array) dengan evolusi dari nested `for...of` ke `.flat()` + `.reduce()` hingga recursion.

**Contoh Soal:**

```javascript
deepSum([
  [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
  [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
  [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
])
// → 316

deepSum([]) // → 'No number'
```

**3 Versi Implementasi:**

| Versi | Pendekatan          | Time     | Space    | Highlight                            |
| :---: | ------------------- | -------- | -------- | ------------------------------------ |
|  V1   | Nested `for...of`   | O(n)     | O(1)     | Clean naming, mudah dipahami         |
|  V2   | `.flat()` + `.reduce()` | O(n) | O(n)     | Singkat, modern, method chaining     |
|  V3   | Recursion           | O(n)     | O(d)     | 🏆 **Fleksibel — handle semua level** |

**Konsep Kunci yang Dipelajari:**

```
Nested for...of (3 level) ─→ Refactoring Naming ─→ flat(Infinity) + reduce()
                                                           │
                                                           ▼
                                            Recursion (Inner Function)
                                                           │
                                                           ▼
                                         Base Case → Array.isArray() check
```

**Dokumentasi:** 9 parts — Soal & Analisis → Kode Original → Refactoring Naming → flat+reduce → Recursion → 3x Ringkasan Algoritma → Perbandingan

### 📁 Isi Folder

| File / Folder | Fungsi |
|------|--------|
| [📄 README.md](./1-Dokumentasi-penjumlahan-bertingkat-deepSum/README.md) | Dokumentasi utama (Complete Learning Guide) |
| [📋 Cheat Sheet](./1-Dokumentasi-penjumlahan-bertingkat-deepSum/0-Cheat-Sheet-nested-array-sum_penjumlahan-array-bertingkat.md) | Ringkasan kode siap copy-paste |
| [📊 Ringkasan Algoritma](./1-Dokumentasi-penjumlahan-bertingkat-deepSum/00-Ringkasan-Algoritma-semua-versi.md) | Perbandingan detail semua versi |
| [📚 docs/](./1-Dokumentasi-penjumlahan-bertingkat-deepSum/docs/) | 9 parts dokumentasi mendalam |
| [📝 Review Mentoring](./1-Dokumentasi-penjumlahan-bertingkat-deepSum/Dokumentasi-nested-array-summation_penjumlahan-array-bersarang-review/) | Catatan review sesi mentoring |

---

## 🚐 02 — Naik Angkot — `naikAngkot`

📂 [`2-Dokumentasi-fare-calculation-naikAngkot/`](./2-Dokumentasi-fare-calculation-naikAngkot/)

> _Dari kode awal ke clean code — kuasai 5 pendekatan berbeda untuk simulasi kalkulasi ongkos angkot berbasis rute_

**Fokus Utama:** Mensimulasikan sistem pembayaran angkot — setiap penumpang membayar Rp2.000 per halte yang dilewati, menggunakan `indexOf()` untuk kalkulasi berbasis posisi array.

**Contoh Soal:**

```javascript
naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']])
// → [
//     { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//     { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 }
//   ]

naikAngkot([]) // → []
```

**5 Versi Implementasi:**

| Versi | Pendekatan                        | Time   | Highlight                            |
| :---: | --------------------------------- | ------ | ------------------------------------ |
|  V1   | Kode Awal (`for...of` + `push`)   | O(n)   | Mudah dipahami, eksplisit            |
|  V2   | Refactored (clean naming + const) | O(n)   | 🏆 **Clean code, best practice**    |
|  V3   | `for...of` + `push` (imperative)  | O(n)   | Familiar, mudah di-debug             |
|  V4   | `.map()` + Helper Function        | O(n)   | Single responsibility, reusable      |
|  V5   | `.map()` Single Function          | O(n)   | Ringkas, modern                      |

**Konsep Kunci yang Dipelajari:**

```
Kode Awal ─→ Kesalahan & Pelajaran ─→ Refactoring Clean Code
                                              │
                                              ▼
              for...of + push ─→ .map() + Helper ─→ .map() Single
                     │                                    │
                     ▼                                    ▼
          indexOf() kalkulasi ─→ Destructuring ─→ Imperative vs Functional
```

**Dokumentasi:** 8 parts — Soal & Kriteria → Proses Pengerjaan → Kesalahan & Pelajaran → Refactoring → 3x Alternatif + Algoritma → Perbandingan

### 📁 Isi Folder

| File / Folder | Fungsi |
|------|--------|
| [📄 README.md](./2-Dokumentasi-fare-calculation-naikAngkot/README.md) | Dokumentasi utama (Complete Learning Guide) |
| [📋 Cheat Sheet](./2-Dokumentasi-fare-calculation-naikAngkot/0-Cheat-Sheet-fare-calculation_kalkulator-ongkos-angkot.md) | Ringkasan kode siap copy-paste |
| [📊 Ringkasan Algoritma](./2-Dokumentasi-fare-calculation-naikAngkot/00-Ringkasan-Algoritma-semua-versi.md) | Perbandingan detail semua versi |
| [📚 docs/](./2-Dokumentasi-fare-calculation-naikAngkot/docs/) | 8 parts dokumentasi mendalam |
| [📝 Review Mentoring](./2-Dokumentasi-fare-calculation-naikAngkot/Dokumentasi-route-fare-calculator_kalkulator-rute-naikAngkot-review/) | Catatan review sesi mentoring |

---

## 🏆 03 — Highest Score — `highestScore`

📂 [`3-Dokumentasi-skor-tertinggi-perkelas-highestScore/`](./3-Dokumentasi-skor-tertinggi-perkelas-highestScore/)

> _Dari kode eksplorasi ke clean code — kuasai 3 pendekatan berbeda untuk mencari skor tertinggi per kelas dari array of objects_

**Fokus Utama:** Mencari siswa dengan skor tertinggi di setiap kelas dari array of objects, dengan evolusi dari kode eksplorasi ke `for...of` + destructuring hingga `reduce` elegant.

**Contoh Soal:**

```javascript
highestScore([
  { name: 'Dimitri', score: 90, class: 'foxes' },
  { name: 'Alexei', score: 85, class: 'wolves' },
  { name: 'Sergei', score: 74, class: 'foxes' },
  { name: 'Anastasia', score: 78, class: 'wolves' }
])
// → { foxes: { name: 'Dimitri', score: 90 }, wolves: { name: 'Alexei', score: 85 } }

highestScore([]) // → {}
```

**3 Versi Implementasi:**

| Versi | Pendekatan                      | Time  | Space | Highlight                          |
| :---: | ------------------------------- | ----- | ----- | ---------------------------------- |
|  V1   | Grouping + 2x `reduce`          | O(n)  | O(n)  | Proses berpikir eksploratif        |
|  V2   | `for...of` + destructuring       | O(n)  | O(1)  | 🏆 **Mudah dibaca, linear**       |
|  V3   | `reduce` + destructuring         | O(n)  | O(1)  | Singkat, fungsional, idiomatik     |

**Konsep Kunci yang Dipelajari:**

```
Kode Eksplorasi (2x reduce) ─→ Refactoring Bertahap ─→ for...of + Destructuring
                                                              │
                                                              ▼
                                                  reduce Elegant (1-pass)
                                                              │
                                                              ▼
                           Reserved Word `class` → Rename ke `className` saat destructuring
```

**Dokumentasi:** 8 parts — Soal & Analisis → Kode Eksplorasi → Refactoring → Versi for...of → Versi reduce → 2x Ringkasan Algoritma → Perbandingan

### 📁 Isi Folder

| File / Folder | Fungsi |
|------|--------|
| [📄 README.md](./3-Dokumentasi-skor-tertinggi-perkelas-highestScore/README.md) | Dokumentasi utama (Complete Learning Guide) |
| [📋 Cheat Sheet](./3-Dokumentasi-skor-tertinggi-perkelas-highestScore/0-Cheat-Sheet-highest-score-per-class_skor-tertinggi-perkelas.md) | Ringkasan kode siap copy-paste |
| [📊 Ringkasan Algoritma](./3-Dokumentasi-skor-tertinggi-perkelas-highestScore/00-Ringkasan-Algoritma-semua-versi.md) | Perbandingan detail semua versi |
| [📚 docs/](./3-Dokumentasi-skor-tertinggi-perkelas-highestScore/docs/) | 8 parts dokumentasi mendalam |
| [📝 Review Mentoring](./3-Dokumentasi-skor-tertinggi-perkelas-highestScore/Dokumentasi-array-grouping-and-max-value_pengelompokan-array-dan-nilai-maksimal-highestScore-review/) | Catatan review sesi mentoring |

---

## 🎓 04 — Graduates — `graduates`

📂 [`4-Dokumentasi-grouping-filter-graduates/`](./4-Dokumentasi-grouping-filter-graduates/)

> _Dari kode original ke 4 pendekatan — kuasai grouping object dengan filter, lazy initialization, dan separation of concern_

**Fokus Utama:** Mengelompokkan student per kelas dan menyaring hanya yang lulus (score > 75), dengan evolusi dari `for...of` imperative ke `reduce` functional hingga 2-pass dan group-first approach.

**Contoh Soal:**

```javascript
graduates([
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves'  },
  { name: 'Sergei',    score: 74, class: 'foxes'   },
  { name: 'Anastasia', score: 78, class: 'wolves'  }
])
// → {
//     foxes:  [{ name: 'Dimitri', score: 90 }],
//     wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
//   }

graduates([]) // → {}
```

**4 Versi Implementasi:**

| Versi | Pendekatan                            | Loop | Time  | Highlight                            |
| :---: | ------------------------------------- | :--: | ----- | ------------------------------------ |
|  V1   | `for...of` imperative                 |  1x  | O(n)  | Mudah dipahami pemula                |
|  V2   | `reduce` functional                   |  1x  | O(n)  | 🏆 **Ringkas, modern**              |
|  V3   | 2-pass (`reduce` + `filter/forEach`)  |  2x  | O(n)  | Separation of concern                |
|  V4   | Group-first (`for...of` + `for...in`) |  2x  | O(n)  | Paling eksplisit, mudah di-debug     |

**Konsep Kunci yang Dipelajari:**

```
Kode Original (for...of) ─→ Refactoring ke reduce ─→ 2-pass (reduce + filter)
                                                              │
                                                              ▼
                                        Group-first (for...of + for...in)
                                                              │
                                                              ▼
                  Lazy Initialization ─→ score > 75 filter ─→ Separation of Concern
```

**Dokumentasi:** 8 parts — Soal & Analisis → Kode Original & Review → Refactoring reduce → 4x Ringkasan Algoritma → Perbandingan

### 📁 Isi Folder

| File / Folder | Fungsi |
|------|--------|
| [📄 README.md](./4-Dokumentasi-grouping-filter-graduates/README.md) | Dokumentasi utama (Complete Learning Guide) |
| [📋 Cheat Sheet](./4-Dokumentasi-grouping-filter-graduates/0-Cheat-Sheet-grouping-filter-graduates_kelompok-filter-lulusan.md) | Ringkasan kode siap copy-paste |
| [📊 Ringkasan Algoritma](./4-Dokumentasi-grouping-filter-graduates/00-Ringkasan-Algoritma-semua-versi.md) | Perbandingan detail semua versi |
| [📚 docs/](./4-Dokumentasi-grouping-filter-graduates/docs/) | 8 parts dokumentasi mendalam |
| [📝 Review Mentoring](./4-Dokumentasi-grouping-filter-graduates/Dokumentasi-graduates-challenge_tantangan-graduates-review/) | Catatan review sesi mentoring |

---

## 🗺️ Peta Konsep Lintas Semua Ujian

Tabel ini membantu melihat **konsep mana yang muncul berulang** di keempat challenge ujian:

| Konsep                         | 🔢 Deep Sum | 🚐 Naik Angkot | 🏆 Highest Score | 🎓 Graduates |
| ------------------------------ | :---------: | :-------------: | :--------------: | :----------: |
| Array Iteration / Loop         |      ✅     |       ✅        |        ✅        |      ✅      |
| Clean Code / Refactoring       |      ✅     |       ✅        |        ✅        |      ✅      |
| Multiple Solution Approach     |      ✅     |       ✅        |        ✅        |      ✅      |
| Cheat Sheet / Quick Reference  |      ✅     |       ✅        |        ✅        |      ✅      |
| Ringkasan Algoritma            |      ✅     |       ✅        |        ✅        |      ✅      |
| Trade-offs Analysis            |      ✅     |       ✅        |        ✅        |      ✅      |
| Object Destructuring           |      —      |       ✅        |        ✅        |      ✅      |
| Functional Programming (reduce)|      ✅     |       —         |        ✅        |      ✅      |
| `.map()` / `.filter()`        |      —      |       ✅        |        —         |      ✅      |
| Object Grouping                |      —      |       —         |        ✅        |      ✅      |
| Nested Array Handling          |      ✅     |       —         |        —         |      —       |
| Recursion / Base Case          |      ✅     |       —         |        —         |      —       |
| `indexOf()` / Posisi Array     |      —      |       ✅        |        —         |      —       |
| Reserved Word (`class`)        |      —      |       —         |        ✅        |      ✅      |
| Helper Function / Modular Code |      —      |       ✅        |        —         |      —       |
| Lazy Initialization            |      —      |       —         |        —         |      ✅      |
| Separation of Concern          |      —      |       —         |        —         |      ✅      |
| Error Handling / Edge Case     |      ✅     |       ✅        |        ✅        |      ✅      |

---


> [!TIP]
> 💡 **Quick Review:** Setiap folder memiliki **Cheat Sheet**, **Ringkasan Algoritma Semua Versi**, dan **Dokumentasi lengkap** terpisah. Untuk review cepat tanpa membaca ulang seluruh dokumentasi, langsung akses file `0-Cheat-Sheet-*.md` atau `00-Ringkasan-Algoritma-semua-versi.md` di root setiap subfolder.

---

## 📊 Statistik Keseluruhan

| Metrik                       | Nilai                                          |
| ---------------------------- | ---------------------------------------------- |
| **Total Challenge**          | 4 soal                                         |
| **Total Versi Solusi**       | 15 versi (3 + 5 + 3 + 4)                      |
| **Total Parts Dokumentasi**  | 33 parts (9 + 8 + 8 + 8)                      |
| **Range Difficulty**         | 🟢 Easy                                       |
| **Format Dokumentasi**       | README + Cheat Sheet + Ringkasan Algoritma + Multi-Part Docs + Review Mentoring |
| **Bahasa Pemrograman**       | JavaScript                                     |

---


> [!NOTE]
> 📝 **Struktur Konsisten:** Setiap folder challenge mengikuti struktur yang sama:
> - **README.md** → Complete Learning Guide (roadmap, FAQ, test cases, learning outcomes)
> - **0-Cheat-Sheet-\*.md** → Ringkasan kode per kategori siap copy-paste
> - **00-Ringkasan-Algoritma-semua-versi.md** → Perbandingan detail setiap versi solusi
> - **docs/** → Multi-part dokumentasi mendalam (soal → kode awal → refactoring → ringkasan → perbandingan)
> - **Dokumentasi-\*-review/** → Catatan review dari sesi mentoring interaktif

---

## 🔗 Perbandingan Cepat: Ujian vs Quiz (WEEK-3)

| Aspek                  | 📝 Quiz                                    | 📝 Ujian                                       |
| ---------------------- | ------------------------------------------- | ----------------------------------------------- |
| **Jumlah Challenge**   | _Lihat folder Quiz_                         | 4 soal                                          |
| **Fokus**              | Beragam topik & konsep                      | Spesifik (nested array, kalkulasi, object grouping) |
| **Kedalaman**          | Bervariasi per challenge                    | Mendalam (8–9 parts per challenge)              |
| **Versi Solusi**       | Bervariasi                                  | 15 versi                                        |
| **Difficulty**         | Bervariasi                                  | 🟢 Easy                                        |
| **Dokumentasi Tambahan** | —                                         | Review Mentoring + Ringkasan Algoritma          |

---

## 🔄 Evolusi Lintas Week: Ujian WEEK-1 → WEEK-2 → WEEK-3

| Aspek                  | 📝 WEEK-1                   | 📝 WEEK-2                       | 📝 WEEK-3                              |
| ---------------------- | ---------------------------- | -------------------------------- | ---------------------------------------- |
| **Jumlah Challenge**   | 4 soal                       | 3 soal                          | 4 soal                                   |
| **Total Versi Solusi** | 14 versi                     | 11 versi                        | 15 versi                                 |
| **Total Parts Docs**   | —                            | 16 parts                        | 33 parts                                 |
| **Fokus Utama**        | Conditional, String, Math    | Pencarian & Pengelompokan       | Nested Array, Kalkulasi, Object Grouping |
| **Difficulty**         | 🟢 Easy                     | 🟢 Easy — 🟠 Medium            | 🟢 Easy                                 |
| **Highlight**          | Ternary, split-reverse-join  | Nested→Single-Pass, refactoring | Recursion, reduce, destructuring         |

---

## 📝 Catatan

> Semua dokumentasi dibuat pada **Juni 2026** melalui sesi mentoring interaktif di **Google Antigravity**, sebagai bagian dari program belajar **RPN PHASE-0 WEEK-3**.

---

<div align="center">

**📂 Bagian dari [CATATAN-BELAJAR-RPN](../../../) → [PHASE-0](../../) → [WEEK-3](../)**

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
