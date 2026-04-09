# 🔢 Part 3 — Extract & Drop Last Digit / Ambil & Buang Digit Terakhir

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Approach](https://img.shields.io/badge/Approach-Mathematical-blue?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Modulo%20%26%20Math.floor-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 🎯 Konsep | ➗ Modulo | 🏠 Math.floor | 📊 Visualisasi | ⚠️ Jebakan | ✅ Ringkasan |
|:---------:|:--------:|:-------------:|:--------------:|:----------:|:-----------:|
| [Jump](#-konsep-utama) | [Jump](#-operator--modulo) | [Jump](#-mathfloor) | [Jump](#-visualisasi-gabungan) | [Jump](#️-jebakan-umum) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami cara mengambil digit terakhir menggunakan `% 10`
- ✅ Memahami cara membuang digit terakhir menggunakan `Math.floor(/ 10)`
- ✅ Mengerti kenapa teknik ini lebih efisien dari pendekatan string
- ✅ Siap menggunakan teknik ini di challenge serupa di masa depan

---

## 🎯 Konsep Utama

Untuk memisahkan digit dari sebuah angka **tanpa mengubahnya ke string**, kita butuh dua operasi:

| Operasi | Kegunaan | Contoh |
|---------|----------|--------|
| `angka % 10` | Ambil digit terakhir | `512 % 10 = 2` |
| `Math.floor(angka / 10)` | Buang digit terakhir | `Math.floor(512 / 10) = 51` |

> 💡 Kedua operasi ini adalah **inti dari pendekatan matematis** untuk memecah digit angka.

---

## ➗ Operator `%` (Modulo)

Operator `%` mengembalikan **sisa hasil bagi**.

```js
512 % 10  // → 2   (sisa dari 512 ÷ 10)
51  % 10  // → 1   (sisa dari 51  ÷ 10)
5   % 10  // → 5   (sisa dari 5   ÷ 10)
```

Kenapa selalu `% 10`? Karena sistem bilangan kita adalah **basis 10** — setiap digit menempati posisi satuan, puluhan, ratusan, dst. Sisa bagi `10` selalu menghasilkan **digit paling kanan**.

```
512 ÷ 10 = 51 sisa 2  → digit terakhir = 2 ✅
```

---

## 🏠 Math.floor()

`Math.floor()` membulatkan angka **ke bawah** — selalu ke arah yang lebih kecil di garis bilangan.

```
... -3  -2  -1   0   1   2   3  4  5 ...
←  lebih kecil          lebih besar  →
```

Untuk angka **positif**, "lebih kecil" berarti mendekati nol:

```js
Math.floor(512 / 10) // 51.2 → 51  ✅
Math.floor(51  / 10) // 5.1  → 5   ✅
Math.floor(5   / 10) // 0.5  → 0   ✅
```

Hasilnya seperti "memotong" desimal — digit terakhir terbuang, sisanya tersisa.

> ⚠️ **Hati-hati dengan angka negatif!** Untuk angka negatif, `Math.floor` membulatkan **menjauhi nol**, bukan mendekati. Ini dibahas di Part 8 — Edge Cases.

---

## 📊 Visualisasi Gabungan

Lihat bagaimana keduanya bekerja bersama untuk memecah `512` digit per digit:

```
Angka: 512

Step 1:
  512 % 10              = 2    ← ambil digit terakhir
  Math.floor(512 / 10)  = 51   ← buang digit terakhir, sisa: 51

Step 2:
  51 % 10               = 1    ← ambil digit terakhir
  Math.floor(51 / 10)   = 5    ← buang digit terakhir, sisa: 5

Step 3:
  5 % 10                = 5    ← ambil digit terakhir
  Math.floor(5 / 10)    = 0    ← buang digit terakhir, sisa: 0

Selesai! Digit yang terkumpul: 2, 1, 5
Total: 2 + 1 + 5 = 8 ✅
```

---

## ⚠️ Jebakan Umum

❌ **Salah — lupa menyimpan hasil `Math.floor`:**
```js
Math.floor(angka / 10) // hasil tidak disimpan, angka tidak berubah!
```

✅ **Benar — simpan hasilnya:**
```js
angka = Math.floor(angka / 10) // angka sekarang sudah terpotong
```

---

## ✅ Ringkasan

| Operasi | Fungsi | Contoh |
|---------|--------|--------|
| `angka % 10` | Ambil digit terakhir | `512 % 10 = 2` |
| `Math.floor(angka / 10)` | Buang digit terakhir | `Math.floor(512 / 10) = 51` |
| Kombinasi keduanya | Pisahkan digit satu per satu | Dipakai di rekursif & iteratif |

> 💬 **Teknik ini sangat berguna** untuk challenge apapun yang membutuhkan pemrosesan digit per digit dari sebuah angka — tanpa menyentuh string sama sekali.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 2 — Solusi Awal: String & Array](./02-initial-solution-string-array_solusi-awal-string-array.md)**
- **📖 [Lanjut ke Part 4 — Refactor: Pendekatan Matematis →](./04-refactor-mathematical-approach_refactor-pendekatan-matematis.md)**

---

<div align="center">

Made with ❤️ for learners

</div>