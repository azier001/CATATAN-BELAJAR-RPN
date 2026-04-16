# 🔄 Part 10 — For Loop Approach / Pendekatan For Loop

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Approach](https://img.shields.io/badge/Approach-Iterative-teal?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-For%20Loop-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 💻 Kode | 🔍 Cara Kerja | 📊 Visualisasi | 🆚 Perbandingan | ✅ Ringkasan |
|:-------:|:-------------:|:--------------:|:---------------:|:-----------:|
| [Jump](#-kode) | [Jump](#-cara-kerja) | [Jump](#-visualisasi) | [Jump](#-perbandingan-for-biasa-vs-forof) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami pendekatan iteratif menggunakan `for` loop
- ✅ Mengerti perbedaan `for` biasa dan `for...of`
- ✅ Memahami kenapa pendekatan ini lebih sederhana dari `while` loop
- ✅ Bisa membandingkan semua pendekatan iteratif yang ada

---

## 💻 Kode

### Versi `for` Biasa

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

### Versi `for...of`

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

## 🔍 Cara Kerja

Kedua versi menggunakan pendekatan yang sama — ubah angka ke string, lalu iterasi karakter satu per satu:

1. **`angka.toString()`** — ubah angka ke string, misal `512` → `"512"`
2. **Iterasi** — proses setiap karakter satu per satu
3. **`Number(digit)`** — konversi karakter ke angka, misal `"5"` → `5`
4. **`total +=`** — akumulasikan ke variabel `total`
5. **`return total`** — kembalikan hasil akhir

---

## 📊 Visualisasi

Untuk input `512` menggunakan versi `for...of`:

```
angka.toString() → "512"

Iterasi 1: digit = "5" → Number("5") = 5 → total = 0 + 5 = 5
Iterasi 2: digit = "1" → Number("1") = 1 → total = 5 + 1 = 6
Iterasi 3: digit = "2" → Number("2") = 2 → total = 6 + 2 = 8

return 8 ✅
```

---

## 🆚 Perbandingan `for` Biasa vs `for...of`

| | `for` Biasa | `for...of` |
|--|:-----------:|:----------:|
| Akses karakter | `str[i]` via index | `digit` langsung |
| Variabel index | `let i = 0` — perlu | ❌ Tidak perlu |
| Keterbacaan | Cukup jelas | ✅ Lebih bersih |
| Fleksibilitas | ✅ Bisa akses index | ❌ Tidak bisa akses index |
| Hasil | ✅ Sama | ✅ Sama |

> 💡 Untuk kasus ini, `for...of` lebih direkomendasikan karena tidak butuh index — kita hanya perlu nilai setiap karakternya.

---

## 🆚 Perbandingan dengan Pendekatan Lain

| | `for` Loop (Part 10) | `while` Loop (Part 7) | Rekursif Matematis (Part 4) |
|--|:--------------------:|:---------------------:|:---------------------------:|
| Konversi ke string | ✅ Ya | ❌ Tidak | ❌ Tidak |
| Akumulator | ✅ `total` | ✅ `total` | ❌ Tidak ada |
| Call stack tambahan | ❌ Tidak ada | ❌ Tidak ada | ✅ Ada |
| Perlu index | `for` biasa: ya, `for...of`: tidak | ❌ Tidak | ❌ Tidak |
| Keterbacaan | ✅ Sangat mudah dibaca | ✅ Mudah dibaca | ✅ Ringkas dan elegan |
| Hasil | ✅ Benar | ✅ Benar | ✅ Benar |

---

## ✅ Ringkasan

| Kriteria | `for` Biasa | `for...of` |
|----------|:-----------:|:----------:|
| Konversi tipe data | Angka → string → angka | Angka → string → angka |
| Akumulator | `total` | `total` |
| Keterbacaan | Cukup bersih | ✅ Lebih bersih |
| Call stack tambahan | ❌ Tidak ada | ❌ Tidak ada |
| Hasil | ✅ Benar | ✅ Benar |
| Rekomendasi | Gunakan jika butuh index | ✅ Gunakan jika hanya butuh nilai |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 9 — Perbandingan Semua Versi](./09-all-versions-comparison_perbandingan-semua-versi.md)**

---

<div align="center">

Made with ❤️ for learners

</div>