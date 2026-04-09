# 📋 Part 1 — Problem & Understanding / Masalah & Pemahaman

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue?style=for-the-badge)
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
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter
berupa angka. Function akan me-return nilai total dari digit tersebut dengan
menambahkan satu per satu angka dari digit paling depan ke paling belakang.
Wajib menggunakan rekursif untuk berlatih rekursif!
Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:
512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8.
1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
*/

function totalDigitRekursif(angka) {
  // you can only write your code here!
}
```

---

## 📤 Expected Output

```js
console.log(totalDigitRekursif(512));   // 8
```

```js
console.log(totalDigitRekursif(1542));  // 12
```

```js
console.log(totalDigitRekursif(5));     // 5
```

```js
console.log(totalDigitRekursif(21));    // 3
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

## 🔍 Memahami Soal

Intinya sederhana — **jumlahkan semua digit dari sebuah angka**.

Misalnya `512`:
```
5  1  2
↓  ↓  ↓
5 + 1 + 2 = 8
```

Misalnya `1542`:
```
1  5  4  2
↓  ↓  ↓  ↓
1 + 5 + 4 + 2 = 12
```

Tantangannya adalah — bagaimana cara **memisahkan** digit-digit itu secara otomatis di dalam kode?

Ada dua pendekatan umum:
- 🔤 **Pendekatan string** — ubah angka jadi string, lalu ambil karakter satu per satu
- 🔢 **Pendekatan matematis** — gunakan operator `%` dan `Math.floor()` untuk memisahkan digit tanpa menyentuh string

> Challenge ini mewajibkan **rekursif**, bukan looping `for`.

---

## 💡 Poin Penting Sebelum Mulai

- 🔑 **Rekursif wajib digunakan** — looping `for` tidak disarankan
- 🔑 **Setiap angka punya digit** — `512` punya 3 digit: `5`, `1`, `2`
- 🔑 **Single digit adalah base case** — angka seperti `5` langsung return dirinya sendiri
- 🔑 **Ada dua cara memisahkan digit** — via string atau via matematika (`%` dan `Math.floor`)

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Nama function | `totalDigitRekursif(angka)` |
| Input | `angka` — bilangan bulat positif |
| Output | Total penjumlahan semua digit |
| Wajib | Menggunakan rekursif |
| Tidak disarankan | Looping `for` |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2 — Solusi Awal: String & Array →](./02-initial-solution-string-array_solusi-awal-string-array.md)**

---

<div align="center">

Made with ❤️ for learners

</div>