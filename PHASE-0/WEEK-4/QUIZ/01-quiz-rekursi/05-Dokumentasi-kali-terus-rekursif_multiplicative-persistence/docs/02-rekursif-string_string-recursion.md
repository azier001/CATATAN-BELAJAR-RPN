# 🔤 Part 2 — Rekursif String / String Recursion

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Approach](https://img.shields.io/badge/Approach-String-blue?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-String%20%26%20Recursion-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 🎯 Konsep | 💡 Ide Awal | 💻 Kode | 📊 Visualisasi | ⚠️ Jebakan | ✅ Ringkasan |
|:---------:|:-----------:|:-------:|:--------------:|:----------:|:-----------:|
| [Jump](#-konsep-utama) | [Jump](#-ide-awal) | [Jump](#-kode) | [Jump](#-visualisasi-ascii) | [Jump](#️-jebakan-umum) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami cara memisahkan digit menggunakan pendekatan string
- ✅ Memahami cara kerja `String()`, `slice()`, dan `Number()`
- ✅ Memahami kenapa rekursif dipanggil dua kali di versi ini
- ✅ Mengerti perbedaan antara base case `length === 1` dan `angka < 10`

---

## 🎯 Konsep Utama

Pendekatan string mengubah angka menjadi string terlebih dahulu, lalu memisahkan digit menggunakan teknik string manipulation.

| Operasi | Kegunaan | Contoh |
|---------|----------|--------|
| `String(angka)` | Ubah angka ke string | `String(654)` → `"654"` |
| `digits[0]` | Ambil karakter pertama | `"654"[0]` → `"6"` |
| `digits.slice(1)` | Buang karakter pertama | `"654".slice(1)` → `"54"` |
| `Number(...)` | Ubah kembali ke angka | `Number("54")` → `54` |

---

## 💡 Ide Awal

Terinspirasi dari challenge `totalDigitRecursive` yang menggunakan penjumlahan, kita bisa mengadaptasi polanya untuk perkalian:

```js
// totalDigitRecursive — penjumlahan
function totalDigitRecursive(number) {
  const digits = String(number)

  if (digits.length === 1) return Number(digits)

  return Number(digits[0]) + totalDigitRecursive(Number(digits.slice(1)))
}

// kaliTerusRekursif — adaptasi untuk perkalian
function kaliTerusRekursif(angka) {
  const digits = String(angka)
  
  if (digits.length === 1) return Number(digits)
  
  return Number(digits[0]) * kaliTerusRekursif(Number(digits.slice(1)))
}
```

Perbedaannya hanya pada operator — `+` diganti `*`. Namun ada satu tambahan penting: karena hasil perkalian bisa lebih dari satu digit, kita perlu **mengulang prosesnya** sampai hasilnya benar-benar satu digit.

---

## 💻 Kode

```js
function kaliTerusRekursif(angka) {
  const digits = String(angka);

  if (digits.length === 1) return Number(digits);

  const result = Number(digits[0]) * kaliTerusRekursif(Number(digits.slice(1)));

  return kaliTerusRekursif(result);
}
```

### Penjelasan Baris per Baris

```js
const digits = String(angka);
```
Ubah angka menjadi string agar bisa diakses per karakter.

```js
if (digits.length === 1) return Number(digits);
```
Base case — kalau angka sudah satu digit, langsung kembalikan nilainya.

```js
const result = Number(digits[0]) * kaliTerusRekursif(Number(digits.slice(1)));
```
Kalikan digit pertama dengan hasil rekursif dari sisa digit.

```js
return kaliTerusRekursif(result);
```
Kalau `result` masih lebih dari satu digit, ulangi prosesnya dari awal.

---

## 📊 Visualisasi ASCII

```
kaliTerusRekursif(654)
│
│ digits = "654", length = 3
│ digits[0] = "6"
│
├──► kaliTerusRekursif(54)
│    │
│    │ digits = "54", length = 2
│    │ digits[0] = "5"
│    │
│    └──► kaliTerusRekursif(4)
│         │
│         │ digits = "4", length = 1
│         └── return 4  ✓ (base case)
│
│    5 × 4 = 20  ◄── result
│    length > 1, panggil lagi!
│
└──► kaliTerusRekursif(20)
     │
     │ digits = "20", length = 2
     │ digits[0] = "2"
     │
     └──► kaliTerusRekursif(0)
          │
          │ digits = "0", length = 1
          └── return 0  ✓ (base case)

     2 × 0 = 0  ◄── result
     length = 1, selesai!

     return 0
         │
         ▼
   ╔═══════════╗
   ║  hasil: 0 ║
   ╚═══════════╝
```

---

## ⚠️ Jebakan Umum

❌ **Salah — lupa `return kaliTerusRekursif(result)` di akhir:**
```js
function kaliTerusRekursif(angka) {
  const digits = String(angka);
  if (digits.length === 1) return Number(digits);
  const result = Number(digits[0]) * kaliTerusRekursif(Number(digits.slice(1)));
  return result; // ❌ result bisa masih lebih dari satu digit!
}
```

✅ **Benar — pastikan result diproses lagi kalau masih lebih dari satu digit:**
```js
return kaliTerusRekursif(result); // ✅ ulangi sampai satu digit
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Pendekatan | String manipulation |
| Base case | `digits.length === 1` |
| Teknik pemisahan digit | `digits[0]` dan `digits.slice(1)` |
| Rekursif dipanggil | Dua kali — untuk memecah digit & mengulang hasil |
| Kelebihan | Mudah dibaca dan dipahami |
| Kekurangan | Konversi string ↔ angka berulang kali |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 1 — Problem & Understanding](./01-problem-and-understanding_masalah-dan-pemahaman.md)**
- **📖 [Lanjut ke Part 3 — Rekursif Matematik →](./03-rekursif-matematik_mathematical-recursion.md)**

---

<div align="center">

Made with ❤️ for learners

</div>