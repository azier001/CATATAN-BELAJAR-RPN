# 🔁 Part 4 — While dalam While / Nested While Loop

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Approach](https://img.shields.io/badge/Approach-Iterative-blue?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Nested%20While%20Loop-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 🎯 Konsep | 💻 Kode | 📊 Visualisasi | ⚠️ Jebakan | ✅ Ringkasan |
|:---------:|:-------:|:--------------:|:----------:|:-----------:|
| [Jump](#-konsep-utama) | [Jump](#-kode) | [Jump](#-visualisasi-ascii) | [Jump](#️-jebakan-umum) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami cara mengganti rekursif dengan nested while loop
- ✅ Memahami peran loop luar dan loop dalam
- ✅ Mengerti kenapa `total` harus diinisialisasi `1`, bukan `0`
- ✅ Mengerti kenapa `angka = total * angka` di akhir loop dalam

---

## 🎯 Konsep Utama

Versi ini mengganti rekursif dengan **dua while loop bertingkat**:

| Loop | Peran |
|------|-------|
| **Loop luar** | Mengulang seluruh proses selama `angka >= 10` |
| **Loop dalam** | Memecah digit dan mengalikannya satu per satu |

> 💡 Loop luar menggantikan `return kaliTerusRekursif(result)` di versi rekursif — ia terus mengulang sampai angka benar-benar satu digit.

---

## 💻 Kode

```js
const kaliTerusRekursif = (angka) => {
  while (angka >= 10) {
    let total = 1;

    while (angka >= 10) {
      total *= angka % 10;
      angka = Math.floor(angka / 10);
    }

    angka = total * angka;
  }

  return angka;
};
```

### Penjelasan Baris per Baris

```js
while (angka >= 10) { // loop luar
```
Ulangi seluruh proses selama angka masih lebih dari satu digit.

```js
let total = 1;
```
Reset `total` di setiap babak. Diinisialisasi `1` karena **netral untuk perkalian** — `a × 1 = a`.

```js
while (angka >= 10) { // loop dalam
  total *= angka % 10;
  angka = Math.floor(angka / 10);
}
```
Ambil digit terakhir, kalikan ke `total`, lalu buang digit terakhir. Ulangi sampai `angka` tinggal satu digit.

```js
angka = total * angka;
```
Setelah loop dalam selesai, `angka` masih menyimpan **digit terakhir yang belum dikalikan**. Kalikan dengan `total` lalu simpan hasilnya sebagai `angka` baru untuk loop luar.

---

## 📊 Visualisasi ASCII

```
kaliTerusRekursif(654)
│
│ angka = 654, >= 10 → masuk loop luar
│
├── BABAK 1
│   │ total = 1
│   │
│   │ loop dalam:
│   │   total = 1  * (654 % 10) = 1  * 4 = 4,  angka = Math.floor(654/10) = 65
│   │   total = 4  * (65  % 10) = 4  * 5 = 20, angka = Math.floor(65/10)  = 6
│   │   6 < 10 → keluar loop dalam
│   │
│   └── angka = total * angka = 20 * 6 = 120
│
│ angka = 120, >= 10 → lanjut loop luar
│
├── BABAK 2
│   │ total = 1
│   │
│   │ loop dalam:
│   │   total = 1 * (120 % 10) = 1 * 0 = 0, angka = Math.floor(120/10) = 12
│   │   total = 0 * (12  % 10) = 0 * 2 = 0, angka = Math.floor(12/10)  = 1
│   │   1 < 10 → keluar loop dalam
│   │
│   └── angka = total * angka = 0 * 1 = 0
│
│ angka = 0, < 10 → keluar loop luar
│
▼
╔═══════════╗
║  hasil: 0 ║
╚═══════════╝
```

---

## ⚠️ Jebakan Umum

❌ **Salah — `total` diinisialisasi `0`:**
```js
let total = 0; // ❌ 0 × apapun = 0, hasil selalu 0!
```

✅ **Benar — `total` diinisialisasi `1`:**
```js
let total = 1; // ✅ netral untuk perkalian
```

---

❌ **Salah — lupa mengalikan digit terakhir setelah loop dalam:**
```js
angka = total; // ❌ digit terakhir tidak ikut dikalikan!
```

✅ **Benar — kalikan `total` dengan sisa `angka`:**
```js
angka = total * angka; // ✅ digit terakhir ikut dikalikan
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Iteratif — nested while loop |
| Loop luar | Ulangi proses selama `angka >= 10` |
| Loop dalam | Pecah digit menggunakan `% 10` dan `Math.floor` |
| Initial value | `total = 1` — netral untuk perkalian |
| Kelebihan | Tidak menggunakan rekursif, tidak ada stack overflow |
| Kekurangan | Lebih verbose dibanding versi rekursif |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 3 — Rekursif Matematik](./03-rekursif-matematik_mathematical-recursion.md)**
- **📖 [Lanjut ke Part 5 — Tail Recursion →](./05-tail-recursion_rekursif-ekor.md)**

---

<div align="center">

Made with ❤️ for learners

</div>