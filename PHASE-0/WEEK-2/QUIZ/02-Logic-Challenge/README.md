# 🧠 Quiz: Logic Challenge

### ✨ _Kumpulan challenge logika JavaScript — dari manipulasi string hingga algoritma angka_

> 🎯 **Konteks:** Folder ini berisi **4 challenge logika** dari **Quiz PHASE-0 WEEK-2** program RPN. Setiap challenge didokumentasikan secara komprehensif dengan multiple versi solusi, analisis pola, clean code, dan test cases.

![Phase](https://img.shields.io/badge/Phase-0-blue?style=for-the-badge) ![Week](https://img.shields.io/badge/Week-2-green?style=for-the-badge) ![Type](https://img.shields.io/badge/Type-Quiz-red?style=for-the-badge) ![Challenges](https://img.shields.io/badge/Challenges-4-purple?style=for-the-badge)

---

## 📑 Daftar Challenge

| No  | Challenge                                                           | Difficulty  | Topik Utama                         | Jumlah Versi Solusi |
| :-: | ------------------------------------------------------------------- | :---------: | ----------------------------------- | :-----------------: |
| 01  | [🔄 Palindrome Checker](#-01--palindrome-checker)                   | 🟢 Beginner | String Manipulation, Looping        |       2 versi       |
| 02  | [🔢 Palindrome Number Algorithm](#-02--palindrome-number-algorithm) |  🟠 Medium  | Logic, Looping, String Manipulation |       4 versi       |
| 03  | [📝 Word Counter](#-03--word-counter)                               |  🟠 Medium  | State/Flag, Regex, String Parsing   |       2 versi       |
| 04  | [🎯 Largest Digit Pair](#-04--largest-digit-pair)                   |  🟠 Medium  | Array, String ↔ Number, Debugging   |       4 versi       |

---

## 🔄 01 — Palindrome Checker

📂 [`01-Dokumentasi-palindrome-checker_pengecek-palindrome/`](./01-Dokumentasi-palindrome-checker_pengecek-palindrome/)

> _Membalikkan kata dan membandingkannya — sesederhana bercermin!_

**Deskripsi:** Membuat fungsi `isPalindrome(word)` yang mengecek apakah sebuah kata/kalimat dibaca sama dari depan maupun belakang.

**Konsep yang Dipelajari:**

- 🔁 **Reverse Loop** — Iterasi mundur dari indeks terakhir ke 0
- ⚡ **Spread Operator + Method Chaining** — `[...word].reverse().join('')`
- ✅ **Direct Boolean Return** — `return a === b` tanpa if-else redundan
- 🏷️ **Naming Convention** — Prefix `is...` untuk fungsi boolean

**Evolusi Solusi:**

| Versi | Pendekatan                     |     Kategori     |
| :---: | ------------------------------ | :--------------: |
|  V1   | Manual Loop (for mundur)       |  🔧 Fundamental  |
|  V2   | Spread + Method Chaining (ES6) | ⚡ Best Practice |

```javascript
// Quick Preview — V2 (Best Practice)
const isPalindrome = (word) => {
  return word === [...word].reverse().join('');
};
```

---

## 🔢 02 — Palindrome Number Algorithm

📂 [`02-Dokumentasi-palindrome-number-algorithm_algoritma-angka-palindrome/`](./02-Dokumentasi-palindrome-number-algorithm_algoritma-angka-palindrome/)

> _Mencari angka palindrome terdekat yang lebih besar dari input — naik satu per satu hingga ketemu!_

**Deskripsi:** Membuat fungsi `angkaPalindrome(num)` yang menemukan angka palindrome (simetris) terdekat yang bernilai **lebih besar** dari angka inputan.

**Konsep yang Dipelajari:**

- 🔄 **While Loop** — Perulangan tanpa batas pasti (unknown iteration count)
- 🔀 **Konversi Tipe Data** — `Number` ↔ `String` ↔ `Array`
- 🧩 **Inner Function (Encapsulation)** — Helper function di dalam scope utama
- ⚠️ **Edge Case Handling** — Input yang sudah palindrome harus di-skip

**Evolusi Solusi:**

| Versi | Pendekatan                                              |    Highlight     |
| :---: | ------------------------------------------------------- | :--------------: |
|  V1   | Loop iteratif manual (`for` mundur) dalam `while(true)` |  🔧 Fundamental  |
|  V2   | Helper `isPalindrome` terpisah (modular)                |    📦 Modular    |
|  V3   | ES6 Method Chaining (ada bug logika!)                   | ⚠️ Eksperimental |
|  V4   | Refaktor: `num + 1` + inner function                    |  ⭐ Rekomendasi  |

```javascript
// Quick Preview — V4 (Rekomendasi)
const angkaPalindrome = (num) => {
  let candidate = num + 1;

  const isPalindrome = (number) => {
    return String(number) === [...String(number)].reverse().join('');
  };

  while (!isPalindrome(candidate)) {
    candidate++;
  }

  return candidate;
};
```

---

## 📝 03 — Word Counter

📂 [`03-Dokumentasi-word-counter_penghitung-kata/`](./03-Dokumentasi-word-counter_penghitung-kata/)

> _Membangun algoritma penghitung kata dari nol — dari analisis pola hingga clean code production-ready_

**Deskripsi:** Membuat fungsi `countWords(sentence)` yang menghitung jumlah kata dalam sebuah kalimat, dengan penanganan edge case spasi ganda, spasi di ujung, dan string kosong.

**Konsep yang Dipelajari:**

- 🚩 **State/Flag Pattern** — Boolean `isInsideWord` untuk deteksi transisi masuk/keluar kata
- ✂️ **Regex Split** — `/\s+/` untuk membelah string di setiap kelompok whitespace
- 🧹 **`.trim()`** — Normalisasi string sebelum diproses
- 🪺 **Nested If vs Flat If** — Kenapa pengecekan bertingkat penting untuk state tracking

**Evolusi Solusi:**

| Versi | Pendekatan                                 |     Kategori     |
| :---: | ------------------------------------------ | :--------------: |
|  V1   | State/Flag (manual character-by-character) |  🔧 Fundamental  |
|  V2   | Split Regex (`/\s+/`)                      | ⚡ Best Practice |

```javascript
// Quick Preview — V2 (Best Practice)
const countWords = (sentence) => {
  const trimmedSentence = sentence.trim();

  if (trimmedSentence.length === 0) return 0;

  return trimmedSentence.split(/\s+/).length;
};
```

---

## 🎯 04 — Largest Digit Pair

📂 [`04-Dokumentasi-largest-digit-pair_mencari-pasangan-digit-terbesar/`](./04-Dokumentasi-largest-digit-pair_mencari-pasangan-digit-terbesar/)

> _Cari pasangan 2 digit bersebelahan terbesar dari sebuah angka — perjalanan debugging dari bug hingga solusi sempurna!_

**Deskripsi:** Membuat fungsi `largestDigitPair(num)` yang menemukan pasangan 2 digit berturutan terbesar dari sebuah angka. Contoh: dari `641573`, pasangan terbesar adalah `73`.

**Konsep yang Dipelajari:**

- 🐛 **Debugging Journey** — Belajar dari 4 versi yang masing-masing memiliki bug berbeda
- 🔄 **String ↔ Number** — Konversi tipe data untuk perbandingan yang benar
- 📐 **Boundary Check** — Menghindari array out-of-bounds (`i + 1`)
- 🧮 **`Math.max()`** — Cara elegan membandingkan nilai tanpa if-else

**Evolusi Solusi:**

| Versi | Status | Highlight                         |
| :---: | :----: | --------------------------------- |
|  V1   | 🐛 Bug | String vs Number comparison error |
|  V2   | 🐛 Bug | Boundary check order salah        |
|  V3   | 🐛 Bug | Variable name typo                |
|  V4   | ✅ Fix | Solusi sempurna!                  |

```javascript
// Quick Preview — V4 (Recommended: Hybrid Modern)
function largestDigitPair(num) {
  const digits = String(num);

  let largest = 0;

  for (let i = 0; i < digits.length - 1; i++) {
    const pair = parseInt(digits[i] + digits[i + 1]);

    largest = Math.max(largest, pair);
  }

  return largest;
}
```

---

## 🗺️ Peta Konsep Lintas Challenge

Tabel ini membantu melihat **konsep mana yang muncul berulang** di beberapa challenge:

| Konsep                 | Ch.01 | Ch.02 | Ch.03 | Ch.04 |
| ---------------------- | :---: | :---: | :---: | :---: |
| String Reversal        |  ✅   |  ✅   |   —   |   —   |
| Looping (for/while)    |  ✅   |  ✅   |  ✅   |  ✅   |
| Tipe Data Conversion   |   —   |  ✅   |   —   |  ✅   |
| Method Chaining (ES6)  |  ✅   |  ✅   |  ✅   |   —   |
| Boolean Return Pattern |  ✅   |  ✅   |   —   |   —   |
| Edge Case Handling     |   —   |  ✅   |  ✅   |  ✅   |
| State/Flag Pattern     |   —   |   —   |  ✅   |   —   |
| Regex                  |   —   |   —   |  ✅   |   —   |
| Debugging & Bug Fixing |   —   |   —   |   —   |  ✅   |
| Clean Code / Naming    |  ✅   |  ✅   |  ✅   |  ✅   |

---

## 🎓 Jalur Belajar yang Disarankan

```
📌 Mulai dari sini jika kamu pemula total:

  01 Palindrome Checker ──→ 02 Palindrome Number ──→ 03 Word Counter ──→ 04 Largest Digit Pair
       (Beginner)              (Medium)                 (Medium)              (Medium)
    Belajar reverse         Belajar while loop       Belajar state/flag     Belajar debugging
    & boolean return        & encapsulation          & regex split          & type conversion
```

> [!TIP]
> 💡 **Tips:** Setiap folder memiliki **Cheat Sheet** tersendiri yang bisa digunakan untuk quick reference tanpa harus membaca ulang dokumentasi lengkap.

---

## 📝 Catatan

> Semua dokumentasi dibuat pada **Mei 2026** melalui sesi mentoring interaktif di **Google Antigravity**, sebagai bagian dari program belajar **RPN PHASE-0 WEEK-2**.

---

<div align="center">

**📂 Bagian dari [CATATAN-BELAJAR-RPN](../../../../) → [PHASE-0](../../../) → [WEEK-2](../../) → [QUIZ](../)**

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
