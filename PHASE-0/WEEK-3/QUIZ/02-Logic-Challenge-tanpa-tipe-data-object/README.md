# 🧠 Quiz: Logic Challenge — Tanpa Tipe Data Object (Part 2)

### ✨ _Kumpulan challenge logika JavaScript lanjutan — dari digit perkalian hingga pattern matching, diselesaikan tanpa Object!_

> 🎯 **Konteks:** Folder ini berisi **4 challenge logika lanjutan** dari **Quiz PHASE-0 WEEK-3** program RPN. Setiap challenge dikerjakan **tanpa menggunakan tipe data Object** (hanya primitif, array, dan loop) dan didokumentasikan secara komprehensif dengan multiple versi solusi, analisis algoritma, clean code, dan test cases.

![Phase](https://img.shields.io/badge/Phase-0-blue?style=for-the-badge) ![Week](https://img.shields.io/badge/Week-3-green?style=for-the-badge) ![Type](https://img.shields.io/badge/Type-Quiz-red?style=for-the-badge) ![Challenges](https://img.shields.io/badge/Challenges-4-purple?style=for-the-badge)

---

## 📑 Daftar Challenge

| No  | Challenge                                                                    | Difficulty  | Topik Utama                                  |
| :-: | ---------------------------------------------------------------------------- | :---------: | -------------------------------------------- |
| 01  | [🔢 getMinimumMultiplicationDigits](#-01--digit-perkalian-minimum)           |  🟠 Medium  | Faktor Bilangan, Optimisasi `√n`, String Length |
| 02  | [🔤 sortAlphabetically](#-02--mengurutkan-abjad)                             |  🟢 Beginner | Bubble Sort, Selection Sort, Insertion Sort  |
| 03  | [🔄 toggleCase / swapCase](#-03--tukar-huruf-besar-kecil)                    |  🟢 Beginner | ASCII, Regex, String Manipulation            |
| 04  | [🔍 checkAB](#-04--mengecek-jarak-karakter-a-dan-b)                          |  🟠 Medium  | Pattern Matching, Index Distance, Regex      |

---

## 🔢 01 — Digit Perkalian Minimum

📂 [`1-Dokumentasi-Mencari-digit-perkalian-minimum-getMinimumMultiplicationDigits/`](./1-Dokumentasi-Mencari-digit-perkalian-minimum-getMinimumMultiplicationDigits/)

> _Mencari jumlah digit minimal dari pasangan faktor suatu bilangan — dari brute force hingga optimisasi akar kuadrat!_

**Deskripsi:** Membuat fungsi `getMinimumMultiplicationDigits(n)` yang menerima sebuah angka dan mengembalikan jumlah digit paling sedikit dari penggabungan pasangan faktor angka tersebut.

**Konsep yang Dipelajari:**

- 🔁 **Loop Efisien** — Iterasi pembagi dari 1 hingga `√n` untuk menghindari duplikasi
- ➗ **Faktor Bilangan** — Memahami pasangan faktor (divisor × quotient = target)
- 📐 **Optimisasi `√n`** — Membatasi iterasi hingga akar kuadrat untuk performa optimal
- 🧮 **String Length vs Concatenation** — Perbandingan efisiensi memori
- 🎯 **Math.min()** — Tracking nilai minimum secara elegan

**Evolusi Solusi:**

| Versi | Pendekatan                              |     Kategori     |
| :---: | --------------------------------------- | :--------------: |
|  V1   | Loop `for` dari 1 sampai `n`            |  🔧 Fundamental  |
|  V2   | Optimisasi loop hingga `Math.sqrt(n)`   | ⚡ Best Practice |
|  V3   | Functional style dengan `Array.from`    | 🧪 Eksperimental |

```javascript
// Quick Preview — V2 (Best Practice)
const getMinimumMultiplicationDigits = (targetNumber) => {
  let minDigits = Infinity;
  const maxDivisor = Math.sqrt(targetNumber);

  for (let divisor = 1; divisor <= maxDivisor; divisor++) {
    if (targetNumber % divisor === 0) {
      const quotient = targetNumber / divisor;
      const totalDigits = String(divisor).length + String(quotient).length;
      minDigits = Math.min(minDigits, totalDigits);
    }
  }

  return minDigits;
};
```

**Contoh:**
```javascript
getMinimumMultiplicationDigits(24)  // 2  (3×8 = "38")
getMinimumMultiplicationDigits(90)  // 3  (9×10 = "910")
getMinimumMultiplicationDigits(179) // 4  (1×179 = "1179")
```

---

## 🔤 02 — Mengurutkan Abjad

📂 [`2-Dokumentasi-mengurutkan-abjad-alphabet-sortAlphabetically-algoritma-sorting/`](./2-Dokumentasi-mengurutkan-abjad-alphabet-sortAlphabetically-algoritma-sorting/)

> _Mengurutkan karakter dalam string secara alfabetikal — menguasai 3 algoritma sorting klasik tanpa built-in `.sort()`!_

**Deskripsi:** Membuat fungsi `sortAlphabetically(str)` yang menerima sebuah string dan mengembalikan string dengan karakter yang sudah terurut secara alfabetikal, tanpa menggunakan method `.sort()` bawaan JavaScript.

**Konsep yang Dipelajari:**

- 🔄 **Bubble Sort** — Algoritma sorting paling intuitif dengan gelembung ke atas
- 🎯 **Selection Sort** — Mencari minimum dan menempatkannya di posisi yang tepat
- 📥 **Insertion Sort** — Menyisipkan elemen ke posisi yang benar seperti menyusun kartu
- 🔀 **Swap vs Shift** — Perbedaan mekanisme pertukaran dan pergeseran
- 🚫 **String Immutability** — Mengapa harus `split()` → manipulasi → `join()`
- ⚡ **Early Stop Optimization** — Flag `swapped` untuk menghentikan iterasi lebih awal

**Evolusi Solusi:**

| Versi | Pendekatan                                |     Kategori     |
| :---: | ----------------------------------------- | :--------------: |
|  V1   | Bubble Sort (Single Function)             |  🔧 Fundamental  |
|  V2   | Bubble Sort (Multi Function + SRP)        | ⚡ Best Practice |
|  V3   | Selection Sort                            | 🧪 Alternatif    |
|  V4   | Insertion Sort                            | 🧪 Alternatif    |

```javascript
// Quick Preview — V2 (Best Practice)
const swapCharacters = (characters, leftIndex, rightIndex) => {
  let temp = characters[leftIndex];
  characters[leftIndex] = characters[rightIndex];
  characters[rightIndex] = temp;
};

const bubbleSort = (characters) => {
  const length = characters.length;
  for (let i = 0; i < length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (characters[j] > characters[j + 1]) {
        swapCharacters(characters, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
};

const sortAlphabetically = (inputString) => {
  const characters = inputString.split('');
  bubbleSort(characters);
  return characters.join('');
};
```

**Contoh:**
```javascript
sortAlphabetically('hello')      // 'ehllo'
sortAlphabetically('developer')  // 'deeeloprv'
sortAlphabetically('software')   // 'aeforstw'
```

---

## 🔄 03 — Tukar Huruf Besar Kecil

📂 [`3-Dokumentasi-tukar-huruf-besar-kecil-toggle-case-swap-case/`](./3-Dokumentasi-tukar-huruf-besar-kecil-toggle-case-swap-case/)

> _Menukar setiap huruf besar menjadi kecil dan sebaliknya — memahami ASCII, regex, dan string manipulation!_

**Deskripsi:** Membuat fungsi `toggleCase(str)` atau `swapCase(str)` yang menerima sebuah string dan mengembalikan string baru dengan setiap huruf besar ditukar menjadi kecil dan sebaliknya. Karakter non-alfabet tetap tidak berubah.

**Konsep yang Dipelajari:**

- 🔤 **ASCII / `charCodeAt()`** — Memahami kode karakter untuk manipulasi
- 🔡 **`toUpperCase()` & `toLowerCase()`** — Method built-in untuk konversi case
- 🎯 **Regex Pattern Matching** — `/[a-z]/` untuk identifikasi huruf kecil
- 🔀 **Ternary Operator** — Conditional expression yang ringkas
- 🧵 **String Building** — Membangun string baru karakter per karakter
- 🎨 **Declarative vs Imperative** — Perbandingan gaya pemrograman

**Evolusi Solusi:**

| Versi | Pendekatan                                |     Kategori     |
| :---: | ----------------------------------------- | :--------------: |
|  V1   | `for...of` + if-else                      |  🔧 Fundamental  |
|  V2   | `.split()` + `.map()` + ternary           | ⚡ Best Practice |
|  V3   | Regex `.replace()` dengan callback        | 🧪 Alternatif    |

```javascript
// Quick Preview — V2 (Best Practice)
const toggleCase = (text) => {
  return text
    .split('')
    .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join('');
};
```

**Contoh:**
```javascript
toggleCase('Hello World')       // 'hELLO wORLD'
toggleCase('I aM aLAY')         // 'i Am Alay'
toggleCase('My Name is Bond!!') // 'mY nAME IS bOND!!'
toggleCase('001-A-3-5TrdYW')    // '001-a-3-5tRDyw'
```

---

## 🔍 04 — Mengecek Jarak Karakter 'a' dan 'b'

📂 [`4-Dokumentasi-mengecek-karakter-a-dan-b-berjarak-3-karakter-checkAB/`](./4-Dokumentasi-mengecek-karakter-a-dan-b-berjarak-3-karakter-checkAB/)

> _Mengecek apakah karakter 'a' dan 'b' berjarak tepat 3 karakter — melatih pattern matching dan index manipulation!_

**Deskripsi:** Membuat fungsi `checkAB(str)` yang menerima sebuah string dan mengembalikan `true` jika terdapat karakter 'a' dan 'b' yang berjarak tepat 3 karakter (ada 3 karakter di antara mereka), atau `false` jika tidak.

**Konsep yang Dipelajari:**

- 📏 **Index Distance** — Memahami selisih index vs jarak karakter
- 🔍 **Pattern Matching** — Mencari pola spesifik dalam string
- 🎯 **Forward vs Backward Check** — `i + 4` vs `i - 4` approach
- 🔢 **Math.abs()** — Menghitung jarak absolut
- 🎨 **Regex Pattern** — `/a...b|b...a/` untuk pattern matching
- ⚡ **Early Return** — Menghentikan fungsi saat pattern ditemukan

**Evolusi Solusi:**

| Versi | Pendekatan                                |     Kategori     |
| :---: | ----------------------------------------- | :--------------: |
|  V1   | Nested loop dengan array index            |  🔧 Fundamental  |
|  V2   | Single loop dengan `i + 4` (forward)      | ⚡ Best Practice |
|  V3   | Single loop dengan `i - 4` (backward)     | ⚡ Best Practice |
|  V4   | Regex one-liner                           | 🧪 Alternatif    |

```javascript
// Quick Preview — V2 (Best Practice - Forward)
const checkAB = (text) => {
  const limit = text.length - 4;

  for (let i = 0; i < limit; i++) {
    if (
      (text[i] === 'a' && text[i + 4] === 'b') ||
      (text[i] === 'b' && text[i + 4] === 'a')
    ) {
      return true;
    }
  }

  return false;
};
```

**Contoh:**
```javascript
checkAB('lane borrowed')   // true  (a___b)
checkAB('i am sick')       // false
checkAB('you are boring')  // true  (b___a)
checkAB('barbarian')       // true  (a___b)
checkAB('a   b')           // true  (3 spasi di antara)
```

---

## 🗺️ Peta Konsep Lintas Challenge

Tabel ini membantu melihat **konsep mana yang muncul berulang** di beberapa challenge:

| Konsep                      | Ch.01 | Ch.02 | Ch.03 | Ch.04 |
| --------------------------- | :---: | :---: | :---: | :---: |
| Looping (for/while)         |  ✅   |  ✅   |  ✅   |  ✅   |
| Operator Modulo (`%`)       |  ✅   |   —   |   —   |   —   |
| Early Return                |  ✅   |   —   |  ✅   |  ✅   |
| Edge Cases Handling         |  ✅   |  ✅   |  ✅   |  ✅   |
| Sorting Algorithms          |   —   |  ✅   |   —   |   —   |
| Math Methods                |  ✅   |   —   |  ✅   |  ✅   |
| Nested Loop                 |   —   |  ✅   |   —   |  ✅   |
| ASCII / charCodeAt          |   —   |   —   |  ✅   |   —   |
| String Manipulation         |  ✅   |  ✅   |  ✅   |  ✅   |
| Regex Pattern Matching      |   —   |   —   |  ✅   |  ✅   |
| Array Methods (map/filter)  |  ✅   |   —   |  ✅   |   —   |
| Clean Code / Naming         |  ✅   |  ✅   |  ✅   |  ✅   |
| Single Responsibility       |   —   |  ✅   |   —   |   —   |
| Optimization (√n)           |  ✅   |   —   |   —   |   —   |

---

## 🎓 Jalur Belajar yang Disarankan

```
📌 Mulai dari sini jika kamu sudah menyelesaikan Part 1:

  03 toggleCase ──→ 02 sortAlphabetically ──→ 04 checkAB ──→ 01 getMinimumMultiplicationDigits
   (Beginner)          (Beginner)                (Medium)        (Medium)
  Belajar string      Belajar sorting           Belajar         Belajar optimisasi
  manipulation        algorithms                pattern         & faktor bilangan
  & ASCII                                       matching
```

> [!TIP]
> 💡 **Tips:** Setiap folder memiliki **Cheat Sheet** tersendiri yang bisa digunakan untuk quick reference tanpa harus membaca ulang dokumentasi lengkap.

---

## 📊 Perbandingan Kompleksitas

| Challenge | Best Case | Average Case | Worst Case | Space |
|-----------|:---------:|:------------:|:----------:|:-----:|
| **getMinimumMultiplicationDigits** | O(√n) | O(√n) | O(√n) | O(1) |
| **sortAlphabetically (Bubble)** | O(n) | O(n²) | O(n²) | O(n) |
| **sortAlphabetically (Insertion)** | O(n) | O(n²) | O(n²) | O(n) |
| **sortAlphabetically (Selection)** | O(n²) | O(n²) | O(n²) | O(n) |
| **toggleCase** | O(n) | O(n) | O(n) | O(n) |
| **checkAB** | O(1) | O(n) | O(n) | O(1) |

---

## 🔗 Hubungan dengan Part 1

Challenge di folder ini merupakan **kelanjutan** dari [Part 1](../01-Logic-Challenge-tanpa-tipe-data-object/):

**Part 1 (Challenge 01-05):**
- Fokus pada **konsep dasar**: loop, modulo, sorting array, counting
- Algoritma klasik: isPrime, GCD, median, mode, Caesar cipher

**Part 2 (Challenge 01-04) — Folder Ini:**
- Fokus pada **optimisasi & algoritma lanjutan**: √n optimization, multiple sorting algorithms
- Pattern matching & string manipulation yang lebih kompleks
- Perbandingan berbagai pendekatan untuk satu masalah

> 💡 **Rekomendasi:** Selesaikan Part 1 terlebih dahulu sebelum mengerjakan Part 2 untuk pemahaman yang lebih baik.

---

## 📝 Catatan

> Semua dokumentasi dibuat pada **Mei 2026** melalui sesi mentoring interaktif di **Google Antigravity**, sebagai bagian dari program belajar **RPN PHASE-0 WEEK-3**.

---

<div align="center">

**📂 Bagian dari [CATATAN-BELAJAR-RPN](../../../../) → [PHASE-0](../../../) → [WEEK-3](../../) → [QUIZ](../)**

**🔙 [Kembali ke Part 1](../01-Logic-Challenge-tanpa-tipe-data-object/)**

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
