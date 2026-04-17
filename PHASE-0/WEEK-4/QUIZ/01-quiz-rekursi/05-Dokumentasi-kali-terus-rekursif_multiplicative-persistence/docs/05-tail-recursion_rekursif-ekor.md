# 🔄 Part 5 — Tail Recursion / Rekursif Ekor

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow?style=for-the-badge)
![Approach](https://img.shields.io/badge/Approach-Tail%20Recursion-blue?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Accumulator%20Pattern-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 🎯 Konsep | 📦 Accumulator | 💻 Kode | 📊 Visualisasi | ⚠️ Jebakan | ✅ Ringkasan |
|:---------:|:--------------:|:-------:|:--------------:|:----------:|:-----------:|
| [Jump](#-konsep-utama) | [Jump](#-accumulator-pattern) | [Jump](#-kode) | [Jump](#-visualisasi-ascii) | [Jump](#️-jebakan-umum) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami apa itu tail recursion dan bedanya dengan rekursif biasa
- ✅ Memahami accumulator pattern dan cara kerjanya
- ✅ Mengerti kenapa base case harus `return angka * total`, bukan `return angka`
- ✅ Mengerti kenapa `total` diinisialisasi `1`, bukan `0`

---

## 🎯 Konsep Utama

**Tail recursion** adalah rekursif di mana pemanggilan rekursif adalah **operasi terakhir** yang dilakukan — tidak ada operasi yang menunggu setelah rekursif selesai.

| | Rekursif Biasa | Tail Recursion |
|---|---|---|
| Operasi setelah rekursif | Ada (`digits[0] *` menunggu) | Tidak ada |
| Hasil dikumpulkan | Saat **naik** kembali | Saat **turun** ke bawah |
| Variabel penampung | Tidak perlu | Butuh accumulator |

---

## 📦 Accumulator Pattern

Accumulator adalah **variabel tambahan** yang dibawa antar pemanggilan rekursif untuk mengumpulkan hasil sementara.

```js
// tanpa accumulator — hasil dikumpulkan saat naik
kaliTerusRekursif(654)
  6 × kaliTerusRekursif(54)      ← menunggu hasil dari bawah
        5 × kaliTerusRekursif(4) ← menunggu hasil dari bawah
              return 4

// dengan accumulator — hasil dikumpulkan saat turun
kaliTerusRekursif(654, 1)
  kaliTerusRekursif(65, 1 × 4)  ← total langsung dibawa turun
    kaliTerusRekursif(6, 4 × 5) ← total langsung dibawa turun
      return 6 × 20             ← selesai di sini
```

---

## 💻 Kode

```js
const kaliTerusRekursif = (angka, total = 1) => {
  if (angka < 10) return angka * total;

  const result = kaliTerusRekursif(
    Math.floor(angka / 10),
    total * (angka % 10),
  );

  return kaliTerusRekursif(result);
};
```

### Penjelasan Baris per Baris

```js
const kaliTerusRekursif = (angka, total = 1) => {
```
Parameter kedua `total` dengan default value `1` — ini adalah accumulator. Default `1` karena netral untuk perkalian.

```js
if (angka < 10) return angka * total;
```
Base case — saat `angka` tinggal satu digit, kalikan dengan `total` yang sudah terkumpul. Tidak bisa hanya `return angka` karena `total` masih menyimpan hasil perkalian digit-digit sebelumnya.

```js
const result = kaliTerusRekursif(
  Math.floor(angka / 10),
  total * (angka % 10),
);
```
Buang digit terakhir (`Math.floor(angka / 10)`), sambil membawa hasil perkalian digit terakhir ke dalam `total` (`total * (angka % 10)`).

```js
return kaliTerusRekursif(result);
```
Kalau `result` masih lebih dari satu digit, ulangi prosesnya dari awal dengan `total` reset ke `1`.

---

## 📊 Visualisasi ASCII

```
kaliTerusRekursif(654, 1)
│
│ angka = 654, >= 10
│ angka % 10 = 4, total baru = 1 × 4 = 4
│ Math.floor(654 / 10) = 65
│
└──► kaliTerusRekursif(65, 4)
     │
     │ angka = 65, >= 10
     │ angka % 10 = 5, total baru = 4 × 5 = 20
     │ Math.floor(65 / 10) = 6
     │
     └──► kaliTerusRekursif(6, 20)
          │
          │ angka = 6, < 10
          └── return 6 × 20 = 120  ✓ (base case)

result = 120, >= 10 → panggil lagi!

kaliTerusRekursif(120, 1)
│
│ angka = 120, >= 10
│ angka % 10 = 0, total baru = 1 × 0 = 0
│ Math.floor(120 / 10) = 12
│
└──► kaliTerusRekursif(12, 0)
     │
     │ angka = 12, >= 10
     │ angka % 10 = 2, total baru = 0 × 2 = 0
     │ Math.floor(12 / 10) = 1
     │
     └──► kaliTerusRekursif(1, 0)
          │
          │ angka = 1, < 10
          └── return 1 × 0 = 0  ✓ (base case)

result = 0, < 10 → selesai!

     return 0
         │
         ▼
   ╔═══════════╗
   ║  hasil: 0 ║
   ╚═══════════╝
```

---

## ⚠️ Jebakan Umum

❌ **Salah — base case hanya `return angka`:**
```js
if (angka < 10) return angka; // ❌ total yang sudah terkumpul hilang!
```

✅ **Benar — base case harus mengalikan dengan total:**
```js
if (angka < 10) return angka * total; // ✅ total ikut dikembalikan
```

---

❌ **Salah — `total` diinisialisasi `0`:**
```js
const kaliTerusRekursif = (angka, total = 0) => { // ❌ 0 × apapun = 0!
```

✅ **Benar — `total` diinisialisasi `1`:**
```js
const kaliTerusRekursif = (angka, total = 1) => { // ✅ netral untuk perkalian
```

---

## 🔄 Perbandingan Base Case: Penjumlahan vs Perkalian

Terinspirasi dari `totalDigitRecursive` — kenapa base case-nya berbeda?

```js
// totalDigitRecursive — penjumlahan
function totalDigitRecursive(number, total = 0) {
  if (number === 0) return total; // cukup return total
}

// kaliTerusRekursif — perkalian
const kaliTerusRekursif = (angka, total = 1) => {
  if (angka < 10) return angka * total; // harus kalikan angka dengan total
};
```

| | Penjumlahan | Perkalian |
|---|---|---|
| Initial value | `total = 0` | `total = 1` |
| Kondisi berhenti | `number === 0` | `angka < 10` |
| Digit terakhir | sudah masuk `total` | belum masuk `total` |
| Base case | `return total` | `return angka * total` |

Di penjumlahan, saat `number === 0` semua digit sudah dijumlahkan ke `total`. Di perkalian, saat `angka < 10` digit terakhir belum dikalikan ke `total` — makanya harus `return angka * total`.

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Tail recursion dengan accumulator |
| Base case | `angka < 10` → `return angka * total` |
| Accumulator | `total` — dibawa turun antar pemanggilan |
| Initial value | `total = 1` — netral untuk perkalian |
| Kelebihan | Lebih efisien dari rekursif biasa — tidak ada operasi yang menunggu |
| Kekurangan | Konsep accumulator butuh pemahaman lebih |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 4 — While dalam While](./04-while-dalam-while_nested-while.md)**
- **📖 [Lanjut ke Part 6 — Rekursif + For Loop →](./06-rekursif-for-loop_recursion-with-for-loop.md)**

---

<div align="center">

Made with ❤️ for learners

</div>