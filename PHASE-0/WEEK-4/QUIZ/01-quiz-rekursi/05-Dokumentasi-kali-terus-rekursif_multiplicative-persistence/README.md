# 📘 Dokumentasi — Kali Terus Rekursif / Multiplicative Persistence

![Language](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript)
![Topic](https://img.shields.io/badge/Topic-Recursion-orange?style=for-the-badge)
![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Versions](https://img.shields.io/badge/Versions-6-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)

---

## 🧭 Tentang Dokumentasi Ini

Dokumentasi ini membahas challenge `kaliTerusRekursif` — sebuah function yang menerima sebuah angka dan terus mengalikan setiap digitnya hingga menghasilkan satu digit, menggunakan rekursif.

Dokumentasi dirancang untuk pemula yang ingin memahami rekursif dari berbagai sudut pandang.

---

## 🎯 Challenge

```js
/*
Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter
berupa angka. Function akan memproses angka yang lebih dari satu digit menjadi
satu digit dengan melakukan perkalian. Bila masih lebih dari satu digit, terus
lakukan perkalian setiap digit-nya untuk pada akhirnya mendapatkan satu digit.
Wajib menggunakan rekursif untuk berlatih rekursif, namun kamu boleh
menggunakan looping juga disini.

Contoh:
3 => 3, karena sudah satu digit.
24 => 8. Karena 24 dua digit, maka kita lakukan 2 * 4 = 8. 8 satu digit, maka hasilnya adalah 8.
654 => 0. Karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120. 120 tiga digit, maka lakukan 1 * 2 * 0 = 0. 0 satu digit, maka hasilnya adalah 0.
*/
```

---

## 📤 Expected Output

```js
console.log(kaliTerusRekursif(66));   // 8
```

```js
console.log(kaliTerusRekursif(3));    // 3
```

```js
console.log(kaliTerusRekursif(24));   // 8
```

```js
console.log(kaliTerusRekursif(654));  // 0
```

```js
console.log(kaliTerusRekursif(1231)); // 6
```

| Input  | Perhitungan                        | Output |
|--------|------------------------------------|--------|
| `66`   | 6 × 6 = 36 → 3 × 6 = 18 → 1 × 8  | `8`    |
| `3`    | sudah satu digit                   | `3`    |
| `24`   | 2 × 4                              | `8`    |
| `654`  | 6 × 5 × 4 = 120 → 1 × 2 × 0      | `0`    |
| `1231` | 1 × 2 × 3 × 1 = 6                 | `6`    |

---

## 🏆 Solusi Rekomendasi

```js
function kaliTerusRekursif(angka) {
  if (angka < 10) return angka;

  let str = angka.toString();
  let hasil = 1;

  for (let i = 0; i < str.length; i++) {
    hasil *= Number(str[i]);
  }

  return kaliTerusRekursif(hasil);
}
```

---

## 🗂️ Struktur Dokumentasi

```
dokumentasi-kali-terus-rekursif_multiplicative-persistence/
├── docs/
│   ├── 01-problem-and-understanding_masalah-dan-pemahaman.md
│   ├── 02-rekursif-string_string-recursion.md
│   ├── 03-rekursif-matematik_mathematical-recursion.md
│   ├── 04-while-dalam-while_nested-while.md
│   ├── 05-tail-recursion_rekursif-ekor.md
│   ├── 06-rekursif-for-loop_recursion-with-for-loop.md
│   ├── 07-for-dalam-while_for-inside-while.md
│   ├── 08-perbandingan-semua-versi_all-versions-comparison.md
│   └── 09-edge-cases_kasus-tepi.md
├── README.md
└── ringkasan-algoritma-semua-versi.md
```

---

## 📚 Daftar Isi

| Part | File | Topik |
|------|------|-------|
| 01 | [Problem & Understanding](./docs/01-problem-and-understanding_masalah-dan-pemahaman.md) | Memahami soal, expected output |
| 02 | [Rekursif String](./docs/02-rekursif-string_string-recursion.md) | Solusi menggunakan string |
| 03 | [Rekursif Matematik](./docs/03-rekursif-matematik_mathematical-recursion.md) | Solusi menggunakan matematika |
| 04 | [While dalam While](./docs/04-while-dalam-while_nested-while.md) | Nested while loop |
| 05 | [Tail Recursion](./docs/05-tail-recursion_rekursif-ekor.md) | Rekursif ekor dengan accumulator |
| 06 | [Rekursif + For Loop](./docs/06-rekursif-for-loop_recursion-with-for-loop.md) | Rekursif dengan for loop |
| 07 | [For dalam While](./docs/07-for-dalam-while_for-inside-while.md) | For loop di dalam while loop |
| 08 | [Perbandingan Semua Versi](./docs/08-perbandingan-semua-versi_all-versions-comparison.md) | Perbandingan lengkap semua versi |
| 09 | [Edge Cases](./docs/09-edge-cases_kasus-tepi.md) | Input `0`, negatif, desimal |
| —  | [Ringkasan Algoritma](./ringkasan-algoritma-semua-versi.md) | Ringkasan cepat semua versi |

---

## 💡 Konsep Kunci

- **Rekursif** — function yang memanggil dirinya sendiri
- **Base case** — kondisi berhenti rekursif
- **Multiplicative persistence** — jumlah langkah yang dibutuhkan untuk mereduksi angka menjadi satu digit melalui perkalian
- **Tail recursion** — rekursif di mana tidak ada operasi yang menunggu setelah pemanggilan rekursif
- **Accumulator** — variabel penampung hasil sementara yang dibawa antar pemanggilan

---

<div align="center">

Made with ❤️ for learners

</div>