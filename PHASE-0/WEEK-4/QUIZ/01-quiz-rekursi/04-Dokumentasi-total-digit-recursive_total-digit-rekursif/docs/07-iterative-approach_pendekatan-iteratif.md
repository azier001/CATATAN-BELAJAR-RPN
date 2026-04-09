# 🔁 Part 7 — Iterative Approach / Pendekatan Iteratif

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Approach](https://img.shields.io/badge/Approach-Iterative-teal?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-While%20Loop-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 💻 Kode | 🔍 Cara Kerja | 📊 Visualisasi | ⚠️ Jebakan | 🆚 Perbandingan | ✅ Ringkasan |
|:-------:|:-------------:|:--------------:|:----------:|:---------------:|:-----------:|
| [Jump](#-kode) | [Jump](#-cara-kerja) | [Jump](#-visualisasi) | [Jump](#️-jebakan-umum) | [Jump](#-perbandingan-dengan-rekursif) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami pendekatan iteratif menggunakan `while` loop
- ✅ Mengerti peran variabel `total` sebagai akumulator
- ✅ Memahami kenapa kondisi `>= 10` lebih tepat dari `> 10`
- ✅ Bisa membandingkan pola rekursif vs iteratif untuk problem yang sama

---

## 💻 Kode

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

## 🔍 Cara Kerja

Setiap iterasi `while` melakukan dua hal:

1. **`total += angka % 10`** — ambil digit terakhir, tambahkan ke `total`
2. **`angka = Math.floor(angka / 10)`** — buang digit terakhir, `angka` menyusut

Loop terus berjalan selama `angka >= 10` — artinya selama masih ada lebih dari satu digit.

Setelah loop selesai, `angka` sudah menjadi **1 digit terakhir** yang belum dijumlahkan. Maka `return total + angka` menyelesaikannya.

---

## 📊 Visualisasi

Untuk input `512`:

```
total = 0, angka = 512

Iterasi 1:
  total += 512 % 10  → total = 0 + 2 = 2
  angka = Math.floor(512 / 10) → angka = 51

Iterasi 2:
  total += 51 % 10   → total = 2 + 1 = 3
  angka = Math.floor(51 / 10)  → angka = 5

angka = 5 → 5 >= 10 ? ❌ Loop berhenti

return total + angka → 3 + 5 = 8 ✅
```

---

## ⚠️ Jebakan Umum

### ❌ Jebakan 1 — Kondisi `> 10` bukan `>= 10`

```js
while (angka > 10) { ... } // ⚠️ salah!
```

Dengan kondisi `> 10`, ketika `angka` sudah menjadi angka 2 digit seperti `10` atau `11`, loop masih jalan. Tapi ketika `angka` sudah menjadi 1 digit seperti `5`, loop langsung berhenti — dan digit terakhir ini **tidak pernah dijumlahkan ke `total`**.

Contoh untuk `512`:
```
// pakai > 10
Iterasi 1: total = 2, angka = 51
Iterasi 2: total = 3, angka = 5
Loop berhenti → return 3 + 5 = 8  ← kebetulan benar untuk kasus ini

// tapi untuk 51:
Iterasi 1: total = 1, angka = 5
Loop berhenti → return 1 + 5 = 6 ✅ masih benar

// tapi untuk 21:
Iterasi 1: total = 1, angka = 2
Loop berhenti → return 1 + 2 = 3 ✅

// Tapi bagaimana dengan kondisi >= 10? Lebih aman dan eksplisit:
// "selama masih lebih dari 1 digit, terus loop"
```

> ✅ Gunakan `>= 10` agar lebih eksplisit: *"loop selama angka masih punya lebih dari 1 digit"*.

### ❌ Jebakan 2 — Lupa `return total + angka`

```js
return total // ⚠️ digit terakhir tidak terhitung!
```

Setelah loop, `angka` sudah menjadi 1 digit yang **belum dijumlahkan**. Harus `return total + angka`.

### ❌ Jebakan 3 — Lupa update `angka`

```js
while (angka >= 10) {
  total += angka % 10
  Math.floor(angka / 10) // ⚠️ hasilnya tidak disimpan!
}
```

`angka` tidak pernah berubah → infinite loop! Harus:

```js
angka = Math.floor(angka / 10) // ✅ simpan hasilnya
```

---

## 🆚 Perbandingan dengan Rekursif

| | Rekursif Matematis (Part 4) | Iteratif (Part 7) |
|--|:---------------------------:|:-----------------:|
| Mekanisme pengulangan | Pemanggilan fungsi berulang | `while` loop |
| Akumulator | Tidak ada — dijumlahkan saat unwinding | Ada — variabel `total` |
| Call stack | Bertambah setiap rekursif | Tidak ada tambahan call stack |
| Keterbacaan | Elegan & ringkas | Eksplisit & mudah di-debug |
| Hasil | ✅ Benar | ✅ Benar |

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Iteratif menggunakan `while` loop |
| Akumulator | Variabel `total`, dimulai dari `0` |
| Kondisi loop | `angka >= 10` — selama lebih dari 1 digit |
| Setelah loop | `return total + angka` — tambahkan digit terakhir |
| Hasil | ✅ Benar, semua test case passed |
| Keunggulan | Tidak ada tambahan call stack |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 6 — Tail Recursion](./06-tail-recursion_rekursif-ekor.md)**
- **📖 [Lanjut ke Part 8 — Edge Cases →](./08-edge-cases_kasus-tepi.md)**

---

<div align="center">

Made with ❤️ for learners

</div>