# 🧠 Quiz: Logic Challenge — Tanpa Tipe Data Object

### ✨ _Kumpulan challenge logika JavaScript — dari bilangan prima hingga Caesar Cipher, diselesaikan tanpa Object!_

> 🎯 **Konteks:** Folder ini berisi **5 challenge logika** dari **Quiz PHASE-0 WEEK-3** program RPN. Setiap challenge dikerjakan **tanpa menggunakan tipe data Object** (hanya primitif, array, dan loop) dan didokumentasikan secara komprehensif dengan multiple versi solusi, analisis pola, clean code, dan test cases.

![Phase](https://img.shields.io/badge/Phase-0-blue?style=for-the-badge) ![Week](https://img.shields.io/badge/Week-3-green?style=for-the-badge) ![Type](https://img.shields.io/badge/Type-Quiz-red?style=for-the-badge) ![Challenges](https://img.shields.io/badge/Challenges-5-purple?style=for-the-badge)

---

## 📑 Daftar Challenge

| No  | Challenge                                                                    | Difficulty  | Topik Utama                                  |
| :-: | ---------------------------------------------------------------------------- | :---------: | -------------------------------------------- |
| 01  | [🔢 isPrime](#-01--mengecek-angka-prima)                                     | 🟢 Beginner | Loop, Modulo `%`, Optimisasi `√n`            |
| 02  | [🔗 greatestCommonDivisor / gcd](#-02--faktor-persekutuan-terbesar-fpb)      |  🟠 Medium  | Algoritma Euclidean, Rekursi vs Iterasi      |
| 03  | [📊 findMedian](#-03--mencari-nilai-median)                                  |  🟠 Medium  | Sorting, Index Tengah, Ganjil vs Genap       |
| 04  | [📈 findMode](#-04--mencari-nilai-modus)                                     |  🟠 Medium  | Frekuensi Elemen, Pencarian Max Count        |
| 05  | [🔤 shiftWord / shiftLetter](#-05--menggeser-huruf-dalam-kata)               |  🟠 Medium  | ASCII / `charCodeAt`, Modulo Wrap-around     |

---

## 🔢 01 — Mengecek Angka Prima

📂 [`01-Dokumentasi-Mengecek-Angka-Prima-isPrime/`](./01-Dokumentasi-Mengecek-Angka-Prima-isPrime/)

> _Menentukan apakah sebuah bilangan adalah prima — dari brute force hingga optimisasi akar kuadrat!_

**Deskripsi:** Membuat fungsi `isPrime(n)` yang mengembalikan `true` jika bilangan tersebut adalah bilangan prima (hanya habis dibagi 1 dan dirinya sendiri), atau `false` jika bukan.

**Konsep yang Dipelajari:**

- 🔁 **Loop Efisien** — Iterasi pembagi dari 2 hingga batas tertentu
- ➗ **Operator Modulo (`%`)** — Mengecek habis bagi sebagai inti logika prima
- 📐 **Optimisasi `√n`** — Membatasi iterasi hingga akar kuadrat untuk performa optimal
- 🚫 **Edge Cases** — Penanganan angka ≤ 1, angka 2, dan angka genap
- ⚡ **Early Return** — Menghentikan fungsi lebih awal saat hasil sudah pasti

**Evolusi Solusi:**

| Versi | Pendekatan                              |     Kategori     |
| :---: | --------------------------------------- | :--------------: |
|  V1   | Loop `for` dari 2 sampai `n - 1`       |  🔧 Fundamental  |
|  V2   | Optimisasi loop hingga `Math.sqrt(n)`   | ⚡ Best Practice |

```javascript
// Quick Preview — V2 (Best Practice)
const isPrime = (n) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};
```

---

## 🔗 02 — Faktor Persekutuan Terbesar (FPB)

📂 [`02-Dokumentasi-Faktor-Persekutuan-Terbesar-FPB-greatestCommonDivisor-gcd/`](./02-Dokumentasi-Faktor-Persekutuan-Terbesar-FPB-greatestCommonDivisor-gcd/)

> _Mencari FPB dari dua bilangan — menguasai Algoritma Euclidean, salah satu algoritma tertua dan paling elegan!_

**Deskripsi:** Membuat fungsi `greatestCommonDivisor(a, b)` yang mencari Faktor Persekutuan Terbesar (GCD) dari dua bilangan bulat positif.

**Konsep yang Dipelajari:**

- 🧮 **Algoritma Euclidean** — Teknik klasik mencari FPB dengan pembagian berulang
- 🔄 **Rekursi vs Iterasi** — Perbandingan dua pendekatan penyelesaian
- 📐 **Modulo dalam Algoritma** — `a % b` sebagai inti dari Euclidean Algorithm
- 🧹 **Readability** — Menulis kode matematis yang tetap mudah dibaca
- 🧪 **Edge Cases** — Penanganan ketika salah satu bilangan adalah 0

**Evolusi Solusi:**

| Versi | Pendekatan                                |     Kategori     |
| :---: | ----------------------------------------- | :--------------: |
|  V1   | Loop iteratif dengan `while` + modulo     |  🔧 Fundamental  |
|  V2   | Rekursif Euclidean (`gcd(b, a % b)`)      | ⚡ Best Practice |

```javascript
// Quick Preview — V2 (Best Practice)
const greatestCommonDivisor = (a, b) => {
  if (b === 0) return a;
  return greatestCommonDivisor(b, a % b);
};
```

---

## 📊 03 — Mencari Nilai Median

📂 [`03-Dokumentasi-Mencari-Median-findMedian/`](./03-Dokumentasi-Mencari-Median-findMedian/)

> _Menemukan nilai tengah dari sekumpulan data — memahami sorting, index, dan perbedaan data ganjil vs genap!_

**Deskripsi:** Membuat fungsi `findMedian(arr)` yang menerima array angka dan mengembalikan nilai median (nilai tengah setelah data diurutkan).

**Konsep yang Dipelajari:**

- 🔢 **Sorting Array** — Mengurutkan data sebagai langkah awal pencarian median
- 📏 **Index Tengah** — Menghitung posisi median dengan `Math.floor(length / 2)`
- ⚖️ **Ganjil vs Genap** — Logika berbeda: satu nilai tengah vs rata-rata dua nilai
- 🛡️ **Immutability** — Spread `[...arr]` agar array asli tidak termutasi oleh `sort()`
- 🔧 **Custom Comparator** — `sort((a, b) => a - b)` untuk sorting numerik yang benar

**Evolusi Solusi:**

| Versi | Pendekatan                                   |     Kategori     |
| :---: | -------------------------------------------- | :--------------: |
|  V1   | Manual sort + if-else ganjil/genap           |  🔧 Fundamental  |
|  V2   | Spread clone + ternary operator              | ⚡ Best Practice |

```javascript
// Quick Preview — V2 (Best Practice)
const findMedian = (arr) => {
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
};
```

---

## 📈 04 — Mencari Nilai Modus

📂 [`04-Dokumentasi-Mencari-nilai-modus-find-mode/`](./04-Dokumentasi-Mencari-nilai-modus-find-mode/)

> _Menemukan nilai yang paling sering muncul dalam array — melatih teknik counting tanpa Object!_

**Deskripsi:** Membuat fungsi `findMode(arr)` yang menerima array angka dan mengembalikan nilai yang paling sering muncul (modus).

**Konsep yang Dipelajari:**

- 🔄 **Nested Loop** — Loop dalam loop untuk menghitung frekuensi setiap elemen
- 📊 **Counting / Frekuensi** — Teknik menghitung kemunculan tanpa Object/Map
- 🏆 **Pencarian Max** — Melacak elemen dengan frekuensi tertinggi
- 🤔 **Multiple Modus** — Penanganan ketika lebih dari satu nilai memiliki frekuensi sama
- ⚡ **Optimisasi** — Menghindari penghitungan ulang elemen yang sudah dicek

**Evolusi Solusi:**

| Versi | Pendekatan                                    |     Kategori     |
| :---: | --------------------------------------------- | :--------------: |
|  V1   | Nested loop + manual max tracking             |  🔧 Fundamental  |
|  V2   | Optimasi: skip elemen yang sudah dihitung     | ⚡ Best Practice |

```javascript
// Quick Preview — V2 (Best Practice)
const findMode = (arr) => {
  let mode = arr[0];
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) count++;
    }

    if (count > maxCount) {
      maxCount = count;
      mode = arr[i];
    }
  }

  return mode;
};
```

---

## 🔤 05 — Menggeser Huruf dalam Kata

📂 [`05-Dokumentasi-ubah-kata-shift-word-shift-letter/`](./05-Dokumentasi-ubah-kata-shift-word-shift-letter/)

> _Menggeser setiap huruf sebanyak N posisi di alfabet — membangun Caesar Cipher dari nol!_

**Deskripsi:** Membuat fungsi `shiftWord(word, n)` yang menggeser setiap huruf dalam kata sebanyak `n` posisi di alfabet (mirip Caesar Cipher).

**Konsep yang Dipelajari:**

- 🔤 **ASCII / `charCodeAt()`** — Mengkonversi karakter menjadi kode angka
- 🔡 **`String.fromCharCode()`** — Mengkonversi kode angka kembali menjadi karakter
- 🔄 **Modulo Wrap-around** — `% 26` agar huruf kembali ke awal alfabet setelah 'z'
- 🔠 **Case Sensitivity** — Mempertahankan huruf besar/kecil saat pergeseran
- 🧵 **String Building** — Membangun string baru karakter per karakter

**Evolusi Solusi:**

| Versi | Pendekatan                                        |     Kategori     |
| :---: | ------------------------------------------------- | :--------------: |
|  V1   | Manual loop + charCode + if-else uppercase/lower  |  🔧 Fundamental  |
|  V2   | Modular helper function + modulo wrap-around      | ⚡ Best Practice |

```javascript
// Quick Preview — V2 (Best Practice)
const shiftLetter = (char, n) => {
  const base = char >= 'a' ? 97 : 65;
  return String.fromCharCode(((char.charCodeAt(0) - base + n) % 26) + base);
};

const shiftWord = (word, n) => {
  let result = '';

  for (let i = 0; i < word.length; i++) {
    result += shiftLetter(word[i], n);
  }

  return result;
};
```

---

## 🗺️ Peta Konsep Lintas Challenge

Tabel ini membantu melihat **konsep mana yang muncul berulang** di beberapa challenge:

| Konsep                      | Ch.01 | Ch.02 | Ch.03 | Ch.04 | Ch.05 |
| --------------------------- | :---: | :---: | :---: | :---: | :---: |
| Looping (for/while)         |  ✅   |  ✅   |  ✅   |  ✅   |  ✅   |
| Operator Modulo (`%`)       |  ✅   |  ✅   |   —   |   —   |  ✅   |
| Early Return                |  ✅   |  ✅   |   —   |   —   |   —   |
| Edge Cases Handling         |  ✅   |  ✅   |  ✅   |  ✅   |  ✅   |
| Sorting                     |   —   |   —   |  ✅   |   —   |   —   |
| Math Methods                |  ✅   |   —   |  ✅   |   —   |   —   |
| Rekursi                     |   —   |  ✅   |   —   |   —   |   —   |
| Nested Loop                 |   —   |   —   |   —   |  ✅   |   —   |
| ASCII / charCodeAt          |   —   |   —   |   —   |   —   |  ✅   |
| Immutability Pattern        |   —   |   —   |  ✅   |   —   |   —   |
| Clean Code / Naming         |  ✅   |  ✅   |  ✅   |  ✅   |  ✅   |

---

## 🎓 Jalur Belajar yang Disarankan

```
📌 Mulai dari sini jika kamu pemula total:

  01 isPrime ──→ 02 gcd ──→ 03 findMedian ──→ 04 findMode ──→ 05 shiftWord
   (Beginner)    (Medium)     (Medium)          (Medium)        (Medium)
  Belajar loop   Belajar      Belajar sorting   Belajar nested  Belajar ASCII
  & optimisasi   Euclidean    & index tengah    loop & counting & wrap-around
```

> [!TIP]
> 💡 **Tips:** Setiap folder memiliki **Cheat Sheet** tersendiri yang bisa digunakan untuk quick reference tanpa harus membaca ulang dokumentasi lengkap.

---

## 📝 Catatan

> Semua dokumentasi dibuat pada **Mei 2026** melalui sesi mentoring interaktif di **Google Antigravity**, sebagai bagian dari program belajar **RPN PHASE-0 WEEK-3**.

---

<div align="center">

**📂 Bagian dari [CATATAN-BELAJAR-RPN](../../../../) → [PHASE-0](../../../) → [WEEK-3](../../) → [QUIZ](../)**

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
