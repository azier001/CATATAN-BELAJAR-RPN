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

### Versi 6 — Iteratif

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

---

## 📊 Tabel Perbandingan

| | V1 String & Array | V2 Matematis `=== 0` | V3 Matematis `< 10` | V4 String Depan-Belakang | V5 Tail Recursion | V6 Iteratif |
|--|:-----------------:|:--------------------:|:-------------------:|:------------------------:|:-----------------:|:-----------:|
| Jenis | Rekursif | Rekursif | Rekursif | Rekursif | Rekursif | Iteratif |
| Konversi tipe data | ⚠️ Banyak | ✅ Tidak ada | ✅ Tidak ada | ⚠️ Banyak | ✅ Tidak ada | ✅ Tidak ada |
| Default parameter | ⚠️ Kompleks | ✅ Tidak ada | ✅ Tidak ada | ✅ Tidak ada | ✅ Sederhana | ✅ Tidak ada |
| Arah proses | Belakang → depan | Belakang → depan | Belakang → depan | Depan → belakang | Belakang → depan | Belakang → depan |
| Unwinding | ✅ Ada | ✅ Ada | ✅ Ada | ✅ Ada | ❌ Tidak ada | ❌ Tidak ada |
| Akumulator | ❌ Tidak ada | ❌ Tidak ada | ❌ Tidak ada | ❌ Tidak ada | ✅ Ada | ✅ Ada |
| Call stack tambahan | ✅ Ada | ✅ Ada | ✅ Ada | ✅ Ada | ✅ Ada | ❌ Tidak ada |
| Keterbacaan | ⚠️ Rumit | ✅ Bersih | ✅ Bersih | ✅ Cukup bersih | ✅ Bersih | ✅ Eksplisit |
| Hasil | ✅ Benar | ✅ Benar | ✅ Benar | ✅ Benar | ✅ Benar | ✅ Benar |

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

---

## ✅ Ringkasan

| Versi | Pendekatan | Keunggulan | Kelemahan |
|-------|------------|------------|-----------|
| V1 | Rekursif + String + Array | Pertama kali berhasil | Banyak konversi, kompleks |
| V2 | Rekursif Matematis `=== 0` | Bersih, murni angka | Satu langkah rekursif ekstra |
| V3 | Rekursif Matematis `< 10` | Bersih, efisien, eksplisit | — |
| V4 | Rekursif String Depan-Belakang | Intuitif arahnya | Banyak konversi tipe data |
| V5 | Tail Recursion | Tidak ada unwinding | Konsep lebih advanced |
| V6 | Iteratif | Tidak ada call stack tambahan | Bukan rekursif |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 8 — Edge Cases](./08-edge-cases_kasus-tepi.md)**

---

<div align="center">

Made with ❤️ for learners

</div>