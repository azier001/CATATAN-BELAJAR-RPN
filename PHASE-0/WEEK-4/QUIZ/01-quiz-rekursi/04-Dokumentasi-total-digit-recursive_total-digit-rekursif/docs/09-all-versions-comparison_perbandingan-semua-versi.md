# 📊 Part 9 — All Versions Comparison / Perbandingan Semua Versi

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Comparison-blue?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Recursion-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 💻 Semua Kode | 📊 Tabel Perbandingan | 🏆 Rekomendasi | ✅ Ringkasan |
|:-------------:|:---------------------:|:--------------:|:-----------:|
| [Jump](#-semua-kode) | [Jump](#-tabel-perbandingan) | [Jump](#-rekomendasi) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Melihat semua versi solusi dalam satu tempat
- ✅ Memahami kelebihan dan kekurangan masing-masing versi
- ✅ Mengetahui versi mana yang paling direkomendasikan dan kenapa
- ✅ Punya referensi lengkap untuk challenge serupa di masa depan

---

## 💻 Semua Kode

### Versi 1 — Solusi Awal: String & Array

```js
function totalDigitRekursif(angka, index = [...angka.toString()].length - 1) {
  if (index < 0) return 0

  return +[...angka.toString()][index] + totalDigitRekursif(angka, index - 1)
}
```

### Versi 2 — Rekursif Matematis (base case `=== 0`)

```js
const totalDigitRekursif = (angka) => {
  if (angka === 0) return 0

  return angka % 10 + totalDigitRekursif(Math.floor(angka / 10))
}
```

### Versi 3 — Rekursif Matematis (base case `< 10`)

```js
function totalDigitRekursif(angka) {
  if (angka < 10) return angka

  return (angka % 10) + totalDigitRekursif(Math.floor(angka / 10))
}
```

### Versi 4 — Pendekatan String: Depan ke Belakang

```js
function totalDigitRecursive(number) {
  const digits = String(number)

  if (digits.length === 1) {
    return Number(digits)
  }

  return Number(digits[0]) + totalDigitRecursive(Number(digits.slice(1)))
}
```

### Versi 5 — Tail Recursion

```js
function totalDigitRecursive(number, total = 0) {
  if (number === 0) {
    return total
  }

  return totalDigitRecursive(
    Math.floor(number / 10),
    total + (number % 10)
  )
}
```

### Versi 6 — Iteratif (`while`)

```js
const totalDigitRekursif = (angka) => {
  let total = 0

  while (angka >= 10) {
    total += angka % 10
    angka = Math.floor(angka / 10)
  }

  return total + angka
}
```

### Versi 7 — `for` Biasa

```js
const totalDigitRekursif = (angka) => {
  const str = angka.toString()
  let total = 0

  for (let i = 0; i < str.length; i++) {
    total += Number(str[i])
  }

  return total
}
```

### Versi 8 — `for...of`

```js
const totalDigitRekursif = (angka) => {
  let total = 0

  for (const digit of angka.toString()) {
    total += Number(digit)
  }

  return total
}
```

---

## 📊 Tabel Perbandingan

| | V1 String & Array | V2 Matematis `=== 0` | V3 Matematis `< 10` | V4 String Depan-Belakang | V5 Tail Recursion | V6 `while` | V7 `for` Biasa | V8 `for...of` |
|--|:-----------------:|:--------------------:|:-------------------:|:------------------------:|:-----------------:|:----------:|:--------------:|:-------------:|
| Jenis | Rekursif | Rekursif | Rekursif | Rekursif | Rekursif | Iteratif | Iteratif | Iteratif |
| Konversi tipe data | ⚠️ Banyak | ✅ Tidak ada | ✅ Tidak ada | ⚠️ Banyak | ✅ Tidak ada | ✅ Tidak ada | ⚠️ Ada | ⚠️ Ada |
| Default parameter | ⚠️ Kompleks | ✅ Tidak ada | ✅ Tidak ada | ✅ Tidak ada | ✅ Sederhana | ✅ Tidak ada | ✅ Tidak ada | ✅ Tidak ada |
| Arah proses | Belakang → depan | Belakang → depan | Belakang → depan | Depan → belakang | Belakang → depan | Belakang → depan | Depan → belakang | Depan → belakang |
| Unwinding | ✅ Ada | ✅ Ada | ✅ Ada | ✅ Ada | ❌ Tidak ada | ❌ Tidak ada | ❌ Tidak ada | ❌ Tidak ada |
| Akumulator | ❌ Tidak ada | ❌ Tidak ada | ❌ Tidak ada | ❌ Tidak ada | ✅ Ada | ✅ Ada | ✅ Ada | ✅ Ada |
| Call stack tambahan | ✅ Ada | ✅ Ada | ✅ Ada | ✅ Ada | ✅ Ada | ❌ Tidak ada | ❌ Tidak ada | ❌ Tidak ada |
| Keterbacaan | ⚠️ Rumit | ✅ Bersih | ✅ Bersih | ✅ Cukup bersih | ✅ Bersih | ✅ Eksplisit | ✅ Mudah dibaca | ✅ Paling bersih |
| Hasil | ✅ Benar | ✅ Benar | ✅ Benar | ✅ Benar | ✅ Benar | ✅ Benar | ✅ Benar | ✅ Benar |

---

## 🏆 Rekomendasi

### 🥇 Untuk challenge rekursif — gunakan Versi 3

```js
function totalDigitRekursif(angka) {
  if (angka < 10) return angka

  return (angka % 10) + totalDigitRekursif(Math.floor(angka / 10))
}
```

**Kenapa?**
- Tidak ada konversi tipe data
- Base case `angka < 10` paling eksplisit dan mudah dipahami
- Kode singkat dan bersih
- Mudah dijelaskan ulang di masa depan

### 🥈 Untuk pemahaman konsep lanjutan — pelajari Versi 5

```js
function totalDigitRecursive(number, total = 0) {
  if (number === 0) {
    return total
  }

  return totalDigitRecursive(
    Math.floor(number / 10),
    total + (number % 10)
  )
}
```

**Kenapa?** Memperkenalkan konsep **tail recursion** dan **akumulator** yang berguna di banyak problem lain.

### 🥉 Untuk konteks non-rekursif — gunakan Versi 6

```js
const totalDigitRekursif = (angka) => {
  let total = 0

  while (angka >= 10) {
    total += angka % 10
    angka = Math.floor(angka / 10)
  }

  return total + angka
}
```

**Kenapa?** Tidak ada call stack tambahan, mudah di-debug, dan cocok jika rekursif tidak diwajibkan.

### 🎖️ Untuk kesederhanaan maksimal — gunakan Versi 8

```js
const totalDigitRekursif = (angka) => {
  let total = 0

  for (const digit of angka.toString()) {
    total += Number(digit)
  }

  return total
}
```

**Kenapa?** Kode paling mudah dibaca — tidak perlu index, tidak perlu kondisi `>= 10`, tidak perlu `return total + angka` di akhir.

---

## ✅ Ringkasan

| Versi | Pendekatan | Keunggulan | Kelemahan |
|-------|------------|------------|-----------|
| V1 | Rekursif + String + Array | Pertama kali berhasil | Banyak konversi, kompleks |
| V2 | Rekursif Matematis `=== 0` | Bersih, murni angka | Satu langkah rekursif ekstra |
| V3 | Rekursif Matematis `< 10` | Bersih, efisien, eksplisit | — |
| V4 | Rekursif String Depan-Belakang | Intuitif arahnya | Banyak konversi tipe data |
| V5 | Tail Recursion | Tidak ada unwinding | Konsep lebih advanced |
| V6 | `while` loop | Tidak ada call stack tambahan | Perlu `return total + angka` di akhir |
| V7 | `for` biasa | Mudah dibaca, familiar | Perlu variabel index |
| V8 | `for...of` | Paling bersih dan ringkas | Ada konversi string |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 8 — Edge Cases](./08-edge-cases_kasus-tepi.md)**
- **📖 [Lanjut ke Part 10 — Pendekatan For Loop →](./10-for-loop-approach_pendekatan-for-loop.md)**

---

<div align="center">

Made with ❤️ for learners

</div>