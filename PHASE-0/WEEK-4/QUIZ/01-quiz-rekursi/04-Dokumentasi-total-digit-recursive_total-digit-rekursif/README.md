# 📘 Dokumentasi — Total Digit Recursive / Total Digit Rekursif

![Language](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript)
![Topic](https://img.shields.io/badge/Topic-Recursion-orange?style=for-the-badge)
![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Versions](https://img.shields.io/badge/Versions-8-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)

---

## 🧭 Tentang Dokumentasi Ini

Dokumentasi ini membahas challenge `totalDigitRekursif` — sebuah function yang menerima sebuah angka dan mengembalikan total penjumlahan semua digitnya, menggunakan rekursif.

Dokumentasi ditulis secara bilingual (Indonesia & English) dan dirancang untuk pemula yang ingin memahami rekursif dari berbagai sudut pandang.

---

## 🎯 Challenge

```js
/*
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter
berupa angka. Function akan me-return nilai total dari digit tersebut dengan
menambahkan satu per satu angka dari digit paling depan ke paling belakang.
Wajib menggunakan rekursif untuk berlatih rekursif!
Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:
512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8.
1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
*/
```

---

## 📤 Expected Output

```js
console.log(totalDigitRekursif(512)); // 8
```

```js
console.log(totalDigitRekursif(1542)); // 12
```

```js
console.log(totalDigitRekursif(5)); // 5
```

```js
console.log(totalDigitRekursif(21)); // 3
```

```js
console.log(totalDigitRekursif(11111)); // 5
```

| Input | Perhitungan | Output |
|-------|-------------|--------|
| `512` | 5 + 1 + 2 | `8` |
| `1542` | 1 + 5 + 4 + 2 | `12` |
| `5` | 5 | `5` |
| `21` | 2 + 1 | `3` |
| `11111` | 1 + 1 + 1 + 1 + 1 | `5` |

---

## 🏆 Solusi Rekomendasi

```js
function totalDigitRekursif(angka) {
  if (angka < 10) return angka

  return (angka % 10) + totalDigitRekursif(Math.floor(angka / 10))
}
```

---

## 🗂️ Struktur Dokumentasi

```
Dokumentasi-total-digit-recursive_total-digit-rekursif/
├── docs/
│   ├── 01-problem-and-understanding_masalah-dan-pemahaman.md
│   ├── 02-initial-solution-string-array_solusi-awal-string-array.md
│   ├── 03-extract-last-digit-drop-last-digit_ambil-digit-terakhir-buang-digit-terakhir.md
│   ├── 04-refactor-mathematical-approach_refactor-pendekatan-matematis.md
│   ├── 05-string-approach-front-to-back_pendekatan-string-depan-ke-belakang.md
│   ├── 06-tail-recursion_rekursif-ekor.md
│   ├── 07-iterative-approach_pendekatan-iteratif.md
│   ├── 08-edge-cases_kasus-tepi.md
│   ├── 09-all-versions-comparison_perbandingan-semua-versi.md
│   └── 10-for-loop-approach_pendekatan-for-loop.md
├── README.md
└── ringkasan-algoritma-semua-versi.md
```

---

## 📚 Daftar Isi

| Part | File | Topik |
|------|------|-------|
| 01 | [Problem & Understanding](./docs/01-problem-and-understanding_masalah-dan-pemahaman.md) | Memahami soal, expected output |
| 02 | [Initial Solution: String & Array](./docs/02-initial-solution-string-array_solusi-awal-string-array.md) | Solusi pertama menggunakan string dan array |
| 03 | [Extract & Drop Last Digit](./docs/03-extract-last-digit-drop-last-digit_ambil-digit-terakhir-buang-digit-terakhir.md) | Teknik `% 10` dan `Math.floor(/ 10)` |
| 04 | [Refactor: Mathematical Approach](./docs/04-refactor-mathematical-approach_refactor-pendekatan-matematis.md) | Rekursif matematis murni |
| 05 | [String Approach: Front to Back](./docs/05-string-approach-front-to-back_pendekatan-string-depan-ke-belakang.md) | Rekursif string dari depan ke belakang |
| 06 | [Tail Recursion](./docs/06-tail-recursion_rekursif-ekor.md) | Rekursif ekor dengan akumulator |
| 07 | [Iterative Approach](./docs/07-iterative-approach_pendekatan-iteratif.md) | Pendekatan `while` loop |
| 08 | [Edge Cases](./docs/08-edge-cases_kasus-tepi.md) | Input `0`, negatif, desimal |
| 09 | [All Versions Comparison](./docs/09-all-versions-comparison_perbandingan-semua-versi.md) | Perbandingan lengkap semua versi |
| 10 | [For Loop Approach](./docs/10-for-loop-approach_pendekatan-for-loop.md) | Pendekatan `for` biasa dan `for...of` |
| — | [Ringkasan Algoritma](./ringkasan-algoritma-semua-versi.md) | Ringkasan cepat semua versi |

---

## 💡 Konsep Kunci

- **Rekursif** — function yang memanggil dirinya sendiri
- **Base case** — kondisi berhenti rekursif
- **`% 10`** — mengambil digit terakhir dari sebuah angka
- **`Math.floor(/ 10)`** — membuang digit terakhir dari sebuah angka
- **Tail recursion** — rekursif di mana tidak ada operasi yang menunggu setelah pemanggilan rekursif
- **Akumulator** — variabel penampung hasil sementara yang dibawa antar pemanggilan

---

<div align="center">

Made with ❤️ for learners

</div>