# 📋 Part 1 — Problem & Understanding / Masalah & Pemahaman

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Recursion-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 📋 Template Soal | 📤 Expected Output | 🔍 Memahami Soal | 💡 Poin Penting | ✅ Ringkasan |
|:----------------:|:-----------------:|:----------------:|:---------------:|:-----------:|
| [Jump](#-template-soal-asli) | [Jump](#-expected-output) | [Jump](#-memahami-soal) | [Jump](#-poin-penting-sebelum-mulai) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami apa yang diminta soal
- ✅ Tahu expected output dari setiap input
- ✅ Memahami cara "membaca" angka digit per digit
- ✅ Siap untuk mulai mengimplementasikan solusi

---

## 📋 Template Soal Asli

Ini adalah template soal asli yang diberikan — belum ada implementasi sama sekali:

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

function kaliTerusRekursif(angka) {
  // you can only write your code here!
}
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

## 🔍 Memahami Soal

Intinya sederhana — **kalikan semua digit dari sebuah angka, ulangi sampai satu digit**.

Misalnya `24`:
```
2  4
↓  ↓
2 × 4 = 8 ✅ (sudah satu digit)
```

Misalnya `654`:
```
6  5  4
↓  ↓  ↓
6 × 5 × 4 = 120 → masih lebih dari satu digit, ulangi!

1  2  0
↓  ↓  ↓
1 × 2 × 0 = 0 ✅ (sudah satu digit)
```

Tantangannya ada dua:
1. Bagaimana cara **memisahkan** digit-digit itu secara otomatis di dalam kode?
2. Bagaimana cara **mengulang** prosesnya kalau hasil masih lebih dari satu digit?

Ada dua pendekatan umum untuk memisahkan digit:
- 🔤 **Pendekatan string** — ubah angka jadi string, lalu ambil karakter satu per satu
- 🔢 **Pendekatan matematis** — gunakan operator `%` dan `Math.floor()` untuk memisahkan digit tanpa menyentuh string

> Challenge ini mewajibkan **rekursif**, namun looping juga diperbolehkan.

---

## 💡 Poin Penting Sebelum Mulai

- 🔑 **Rekursif wajib digunakan** — looping boleh digunakan sebagai tambahan
- 🔑 **Setiap angka punya digit** — `654` punya 3 digit: `6`, `5`, `4`
- 🔑 **Single digit adalah base case** — angka seperti `3` langsung return dirinya sendiri
- 🔑 **Proses bisa lebih dari satu babak** — `654` butuh dua babak perkalian sebelum jadi satu digit
- 🔑 **Ada dua cara memisahkan digit** — via string atau via matematika (`%` dan `Math.floor`)

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Nama function | `kaliTerusRekursif(angka)` |
| Input | `angka` — bilangan bulat positif |
| Output | Satu digit hasil perkalian berulang semua digit |
| Wajib | Menggunakan rekursif |
| Boleh | Menggunakan looping sebagai tambahan |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2 — Rekursif String →](./02-rekursif-string_string-recursion.md)**

---

<div align="center">

Made with ❤️ for learners

</div>