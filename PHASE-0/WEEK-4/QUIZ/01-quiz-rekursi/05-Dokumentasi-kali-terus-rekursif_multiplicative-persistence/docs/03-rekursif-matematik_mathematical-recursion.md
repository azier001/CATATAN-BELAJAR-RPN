# 🔢 Part 3 — Rekursif Matematik / Mathematical Recursion

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Approach](https://img.shields.io/badge/Approach-Mathematical-blue?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Modulo%20%26%20Math.floor-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 🎯 Konsep | ➗ Teknik Matematik | 💻 Kode | 📊 Visualisasi | ⚠️ Jebakan | ✅ Ringkasan |
|:---------:|:------------------:|:-------:|:--------------:|:----------:|:-----------:|
| [Jump](#-konsep-utama) | [Jump](#-teknik-matematik) | [Jump](#-kode) | [Jump](#-visualisasi-ascii) | [Jump](#️-jebakan-umum) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami cara memisahkan digit menggunakan pendekatan matematis
- ✅ Memahami cara kerja `% 10` dan `Math.floor(/ 10)`
- ✅ Mengerti perbedaan urutan digit antara pendekatan string dan matematik
- ✅ Mengerti kenapa hasil akhirnya tetap sama meski urutan digit berbeda

---

## 🎯 Konsep Utama

Pendekatan matematis memisahkan digit **tanpa mengubah angka ke string**, menggunakan dua operator:

| Operasi | Kegunaan | Contoh |
|---------|----------|--------|
| `angka % 10` | Ambil digit terakhir | `654 % 10` → `4` |
| `Math.floor(angka / 10)` | Buang digit terakhir | `Math.floor(654 / 10)` → `65` |

> 💡 Berbeda dengan pendekatan string yang memproses digit dari **depan ke belakang**, pendekatan ini memproses dari **belakang ke depan**.

---

## 🔢 Teknik Matematik

### Mengambil Digit Terakhir — `% 10`

Operator `%` mengembalikan sisa hasil bagi. Karena sistem bilangan kita basis 10, sisa bagi 10 selalu menghasilkan digit paling kanan:

```js
654 % 10  // → 4  (digit terakhir)
65  % 10  // → 5  (digit terakhir)
6   % 10  // → 6  (digit terakhir)
```

### Membuang Digit Terakhir — `Math.floor(/ 10)`

`Math.floor()` membulatkan ke bawah, sehingga desimal terpotong:

```js
Math.floor(654 / 10)  // 65.4 → 65  (digit terakhir terbuang)
Math.floor(65  / 10)  // 6.5  → 6   (digit terakhir terbuang)
Math.floor(6   / 10)  // 0.6  → 0   (habis, tidak ada digit lagi)
```

---

## 💻 Kode

```js
const kaliTerusRekursif = (angka) => {
  if (angka < 10) return angka;

  const result = (angka % 10) * kaliTerusRekursif(Math.floor(angka / 10));

  return kaliTerusRekursif(result);
};
```

### Penjelasan Baris per Baris

```js
if (angka < 10) return angka;
```
Base case — kalau angka sudah satu digit, langsung kembalikan nilainya.

```js
const result = (angka % 10) * kaliTerusRekursif(Math.floor(angka / 10));
```
Ambil digit terakhir (`angka % 10`), lalu kalikan dengan hasil rekursif dari sisa digit (`Math.floor(angka / 10)`).

```js
return kaliTerusRekursif(result);
```
Kalau `result` masih lebih dari satu digit, ulangi prosesnya dari awal.

---

## 📊 Visualisasi ASCII

Perhatikan digit diambil dari **belakang ke depan** — berbeda dengan versi string:

```
kaliTerusRekursif(654)
│
│ angka = 654, >= 10
│ angka % 10 = 4  (digit terakhir)
│ Math.floor(654 / 10) = 65
│
├──► kaliTerusRekursif(65)
│    │
│    │ angka = 65, >= 10
│    │ angka % 10 = 5  (digit terakhir)
│    │ Math.floor(65 / 10) = 6
│    │
│    └──► kaliTerusRekursif(6)
│         │
│         │ angka = 6, 6 < 10
│         └── return 6  ✓ (base case)
│
│    4 × 6 = 24  ◄── result
│    24 >= 10, panggil lagi!
│
└──► kaliTerusRekursif(24)
     │
     │ angka = 24, >= 10
     │ angka % 10 = 4  (digit terakhir)
     │ Math.floor(24 / 10) = 2
     │
     └──► kaliTerusRekursif(2)
          │
          │ angka = 2, 2 < 10
          └── return 2  ✓ (base case)

     4 × 2 = 8  ◄── result
     8 < 10, selesai!

     return 8
         │
         ▼
   ╔═══════════╗
   ║  hasil: 8 ║
   ╚═══════════╝
```

> 💡 Urutan digit diambil terbalik (`4` dulu, baru `5`, baru `6`), tapi hasil akhirnya tetap sama karena perkalian bersifat **komutatif** — `a × b = b × a`.

---

## ⚠️ Jebakan Umum

❌ **Salah — base case menggunakan `length === 1` seperti versi string:**
```js
if (String(angka).length === 1) return angka; // ❌ tidak perlu konversi string
```

✅ **Benar — base case cukup bandingkan angka langsung:**
```js
if (angka < 10) return angka; // ✅ lebih simpel dan efisien
```

---

## 🔄 Perbandingan dengan Versi String

| | Versi String | Versi Matematik |
|---|---|---|
| Konversi | `String(angka)` | tidak perlu |
| Ambil digit | `digits[0]` | `angka % 10` |
| Buang digit | `digits.slice(1)` | `Math.floor(angka / 10)` |
| Urutan digit | depan ke belakang | belakang ke depan |
| Base case | `digits.length === 1` | `angka < 10` |
| Hasil akhir | sama ✅ | sama ✅ |

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Matematis |
| Base case | `angka < 10` |
| Teknik pemisahan digit | `% 10` dan `Math.floor(/ 10)` |
| Urutan digit | Belakang ke depan |
| Rekursif dipanggil | Dua kali — untuk memecah digit & mengulang hasil |
| Kelebihan | Tidak perlu konversi string, lebih efisien |
| Kekurangan | Butuh pemahaman `%` dan `Math.floor` |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 2 — Rekursif String](./02-rekursif-string_string-recursion.md)**
- **📖 [Lanjut ke Part 4 — While dalam While →](./04-while-dalam-while_nested-while.md)**

---

<div align="center">

Made with ❤️ for learners

</div>