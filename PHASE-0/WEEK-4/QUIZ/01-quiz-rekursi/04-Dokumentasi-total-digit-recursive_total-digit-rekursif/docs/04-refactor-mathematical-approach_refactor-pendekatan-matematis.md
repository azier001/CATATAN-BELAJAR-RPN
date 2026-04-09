# ♻️ Part 4 — Refactor: Mathematical Approach / Refactor: Pendekatan Matematis

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Approach](https://img.shields.io/badge/Approach-Recursive%20Mathematical-blue?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Recursion-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 💻 Kode | 🔍 Cara Kerja | 📊 Visualisasi | 🆚 Perbandingan Base Case | ✅ Ringkasan |
|:-------:|:-------------:|:--------------:|:------------------------:|:-----------:|
| [Jump](#-kode) | [Jump](#-cara-kerja) | [Jump](#-visualisasi) | [Jump](#-perbandingan-base-case) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami solusi rekursif matematis yang bersih
- ✅ Memahami perbedaan base case `=== 0` vs `< 10`
- ✅ Mengerti kenapa pendekatan ini lebih efisien dari versi string
- ✅ Bisa menjelaskan alur rekursif step by step

---

## 💻 Kode

### Versi Kamu (Refactor)

```js
const totalDigitRekursif = (angka) => {
  if (angka === 0) return 0

  return angka % 10 + totalDigitRekursif(Math.floor(angka / 10))
}
```

### Versi AI (Base Case Berbeda)

```js
function totalDigitRekursif(angka) {
  if (angka < 10) return angka

  return (angka % 10) + totalDigitRekursif(Math.floor(angka / 10))
}
```

---

## 🔍 Cara Kerja

Setiap pemanggilan rekursif melakukan dua hal:

1. **`angka % 10`** — ambil digit terakhir
2. **`totalDigitRekursif(Math.floor(angka / 10))`** — buang digit terakhir, lalu panggil rekursif dengan sisa angkanya

Rekursif terus berjalan sampai mencapai **base case** — kondisi di mana rekursif berhenti.

---

## 📊 Visualisasi

Untuk input `512` menggunakan versi `angka < 10`:

```
totalDigitRekursif(512)
  → 512 % 10 = 2  +  totalDigitRekursif(51)
                          → 51 % 10 = 1  +  totalDigitRekursif(5)
                                               → 5 < 10, return 5
                          → 1 + 5 = 6
  → 2 + 6 = 8 ✅
```

Untuk input `512` menggunakan versi `angka === 0`:

```
totalDigitRekursif(512)
  → 512 % 10 = 2  +  totalDigitRekursif(51)
                          → 51 % 10 = 1  +  totalDigitRekursif(5)
                                               → 5 % 10 = 5  +  totalDigitRekursif(0)
                                                                    → angka === 0, return 0
                                               → 5 + 0 = 5
                          → 1 + 5 = 6
  → 2 + 6 = 8 ✅
```

> 💡 Kedua versi menghasilkan `8` — tapi versi `angka === 0` membutuhkan **satu langkah rekursif ekstra**.

---

## 🆚 Perbandingan Base Case

| | `angka === 0` | `angka < 10` |
|--|:-------------:|:------------:|
| Berhenti di | Angka sudah habis jadi `0` | Angka sudah 1 digit |
| Langkah rekursif | Lebih banyak (turun sampai `0`) | Lebih sedikit (berhenti di digit terakhir) |
| Hasil | ✅ Benar | ✅ Benar |
| Efisiensi | ⚠️ Satu langkah ekstra | ✅ Lebih efisien |
| Keterbacaan logika | Netral | ✅ Lebih eksplisit — "kalau sudah 1 digit, stop" |

---

## 🆚 Perbandingan dengan Versi String (Part 2)

| | Versi String (Part 2) | Versi Matematis (Part 4) |
|--|:---------------------:|:------------------------:|
| Konversi tipe data | Banyak (angka → string → array → angka) | Tidak ada |
| Default parameter | ✅ Ada (kompleks) | ❌ Tidak perlu |
| Kode | Panjang & rumit | Pendek & bersih |
| Hasil | ✅ Benar | ✅ Benar |
| Efisiensi | ⚠️ Kurang efisien | ✅ Lebih efisien |

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Rekursif matematis murni |
| Base case | `angka === 0` atau `angka < 10` (keduanya valid) |
| Arah rekursif | Dari belakang ke depan (`% 10` ambil digit terakhir) |
| Konversi tipe data | Tidak ada — murni angka |
| Hasil | ✅ Benar, semua test case passed |
| Efisiensi | ✅ Lebih efisien dari versi string |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 3 — Extract & Drop Last Digit](./03-extract-last-digit-drop-last-digit_ambil-digit-terakhir-buang-digit-terakhir.md)**
- **📖 [Lanjut ke Part 5 — Pendekatan String: Depan ke Belakang →](./05-string-approach-front-to-back_pendekatan-string-depan-ke-belakang.md)**

---

<div align="center">

Made with ❤️ for learners

</div>