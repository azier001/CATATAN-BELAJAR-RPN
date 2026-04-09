# 🔤 Part 5 — String Approach: Front to Back / Pendekatan String: Depan ke Belakang

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Approach](https://img.shields.io/badge/Approach-Recursive%20String-purple?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Recursion-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 💻 Kode | 🔍 Cara Kerja | 📊 Visualisasi | ⚠️ Kekurangan | 🆚 Perbandingan | ✅ Ringkasan |
|:-------:|:-------------:|:--------------:|:--------------:|:---------------:|:-----------:|
| [Jump](#-kode) | [Jump](#-cara-kerja) | [Jump](#-visualisasi) | [Jump](#️-kekurangan) | [Jump](#-perbandingan-dengan-versi-matematis) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami pendekatan rekursif menggunakan string dari depan ke belakang
- ✅ Mengerti cara kerja `digits[0]` dan `digits.slice(1)`
- ✅ Memahami perbedaan arah rekursif: depan ke belakang vs belakang ke depan
- ✅ Mengerti kekurangan pendekatan ini dibanding versi matematis

---

## 💻 Kode

```js
function totalDigitRecursive(number) {
  const digits = String(number)

  if (digits.length === 1) {
    return Number(digits)
  }

  return Number(digits[0]) + totalDigitRecursive(Number(digits.slice(1)))
}
```

---

## 🔍 Cara Kerja

Setiap pemanggilan rekursif melakukan langkah berikut:

1. **`String(number)`** — ubah angka ke string, misal `512` → `"512"`
2. **`digits.length === 1`** — base case: kalau sudah tinggal 1 karakter, stop
3. **`Number(digits[0])`** — ambil karakter pertama lalu konversi ke angka, misal `"5"` → `5`
4. **`digits.slice(1)`** — buang karakter pertama, sisanya jadi input rekursif berikutnya, misal `"512"` → `"12"`
5. **`Number(digits.slice(1))`** — konversi sisa string ke angka sebelum dilempar ke rekursif

> 💡 Berbeda dengan versi `% 10` yang memproses dari **belakang ke depan**, versi ini memproses dari **depan ke belakang**.

---

## 📊 Visualisasi

Untuk input `512`:

```
totalDigitRecursive(512)
  digits = "512"
  → Number("5") = 5  +  totalDigitRecursive(Number("12"))
                              totalDigitRecursive(12)
                              digits = "12"
                              → Number("1") = 1  +  totalDigitRecursive(Number("2"))
                                                         totalDigitRecursive(2)
                                                         digits = "2"
                                                         → digits.length === 1, return 2
                              → 1 + 2 = 3
  → 5 + 3 = 8 ✅
```

---

## ⚠️ Kekurangan

Setiap level rekursif melakukan **bolak-balik konversi tipe data**:

```
number → String(number) → digits[0] → Number(digits[0])
                        → digits.slice(1) → Number(digits.slice(1)) → rekursif lagi
```

| Konversi | Terjadi Di |
|----------|------------|
| Angka → String | `String(number)` — setiap level rekursif |
| String → Angka | `Number(digits[0])` — setiap level rekursif |
| String → Angka | `Number(digits.slice(1))` — setiap level rekursif |

> ⚠️ Untuk angka kecil tidak terasa, tapi secara prinsip ini **lebih boros operasi** dibanding versi matematis yang murni bekerja dengan angka sepanjang waktu.

---

## 🆚 Perbandingan dengan Versi Matematis

| | Versi String (Part 5) | Versi Matematis (Part 4) |
|--|:---------------------:|:------------------------:|
| Arah rekursif | Depan ke belakang | Belakang ke depan |
| Konversi tipe data | Banyak — tiap level | Tidak ada |
| Base case | `digits.length === 1` | `angka < 10` atau `angka === 0` |
| Keterbacaan | Cukup mudah dibaca | Lebih singkat |
| Hasil | ✅ Benar | ✅ Benar |
| Efisiensi | ⚠️ Kurang efisien | ✅ Lebih efisien |

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Rekursif berbasis string |
| Arah rekursif | Dari depan ke belakang |
| Base case | `digits.length === 1` |
| Konversi tipe data | Ada — angka ↔ string di setiap level |
| Hasil | ✅ Benar, semua test case passed |
| Efisiensi | ⚠️ Lebih boros dibanding versi matematis |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 4 — Refactor: Pendekatan Matematis](./04-refactor-mathematical-approach_refactor-pendekatan-matematis.md)**
- **📖 [Lanjut ke Part 6 — Tail Recursion →](./06-tail-recursion_rekursif-ekor.md)**

---

<div align="center">

Made with ❤️ for learners

</div>