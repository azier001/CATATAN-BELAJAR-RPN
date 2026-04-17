# 🔁 Part 7 — For dalam While / For Inside While

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Approach](https://img.shields.io/badge/Approach-Iterative-blue?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-For%20Inside%20While-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 🎯 Konsep | 💻 Kode | 📊 Visualisasi | 🔄 Perbandingan | ⚠️ Jebakan | ✅ Ringkasan |
|:---------:|:-------:|:--------------:|:---------------:|:----------:|:-----------:|
| [Jump](#-konsep-utama) | [Jump](#-kode) | [Jump](#-visualisasi-ascii) | [Jump](#-perbandingan-dengan-nested-while-part-4) | [Jump](#️-jebakan-umum) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami cara menggabungkan while loop dan for loop
- ✅ Memahami peran while loop luar dan for loop dalam
- ✅ Mengerti perbedaan versi ini dengan nested while (Part 4)
- ✅ Mengerti kenapa versi ini lebih bersih dari nested while

---

## 🎯 Konsep Utama

Versi ini menggabungkan dua jenis loop:

| Loop | Jenis | Peran |
|------|-------|-------|
| **While** | Loop luar | Mengulang seluruh proses selama `angka >= 10` |
| **For** | Loop dalam | Mengalikan semua digit dalam satu angka sekaligus |

> 💡 Perbedaan utama dengan nested while (Part 4) — loop dalam menggunakan **for loop** yang lebih ringkas karena `i`, kondisi, dan increment-nya ada dalam satu baris.

---

## 💻 Kode

```js
function kaliTerusRekursif(angka) {
  while (angka >= 10) {
    let str = angka.toString();
    let hasil = 1;

    for (let i = 0; i < str.length; i++) {
      hasil *= Number(str[i]);
    }

    angka = hasil;
  }

  return angka;
}
```

### Penjelasan Baris per Baris

```js
while (angka >= 10) {
```
Loop luar — ulangi seluruh proses selama angka masih lebih dari satu digit.

```js
let str = angka.toString();
let hasil = 1;
```
Ubah angka ke string agar bisa diiterasi per karakter. `hasil` diinisialisasi `1` karena netral untuk perkalian. Keduanya dideklarasikan di dalam loop agar **direset di setiap babak**.

```js
for (let i = 0; i < str.length; i++) {
  hasil *= Number(str[i]);
}
```
Iterasi setiap karakter string, ubah ke angka, lalu kalikan ke `hasil`. Semua digit diproses dalam satu babak for loop.

```js
angka = hasil;
```
Simpan hasil perkalian semua digit sebagai `angka` baru untuk loop luar. Berbeda dengan nested while (Part 4), tidak perlu `total * angka` karena for loop sudah memproses **semua digit** termasuk digit terakhir.

---

## 📊 Visualisasi ASCII

```
kaliTerusRekursif(654)
│
│ angka = 654, >= 10 → masuk while loop
│
├── BABAK 1
│   │ str = "654", hasil = 1
│   │
│   │ for loop:
│   │   i=0: hasil = 1  * 6 = 6
│   │   i=1: hasil = 6  * 5 = 30
│   │   i=2: hasil = 30 * 4 = 120
│   │
│   └── angka = 120
│
│ angka = 120, >= 10 → lanjut while loop
│
├── BABAK 2
│   │ str = "120", hasil = 1
│   │
│   │ for loop:
│   │   i=0: hasil = 1 * 1 = 1
│   │   i=1: hasil = 1 * 2 = 2
│   │   i=2: hasil = 2 * 0 = 0
│   │
│   └── angka = 0
│
│ angka = 0, < 10 → keluar while loop
│
▼
╔═══════════╗
║  hasil: 0 ║
╚═══════════╝
```

---

## 🔄 Perbandingan dengan Nested While (Part 4)

| | Part 4 — Nested While | Part 7 — For dalam While |
|---|---|---|
| Loop dalam | `while (angka >= 10)` | `for (let i = 0; i < str.length; i++)` |
| Teknik pemisahan digit | `% 10` dan `Math.floor` | `toString()` + iterasi karakter |
| Update angka di akhir | `angka = total * angka` | `angka = hasil` |
| Kemudahan dibaca | Sedang | Lebih bersih ✅ |

> 💡 Kenapa Part 7 lebih bersih? Di nested while, setelah loop dalam selesai masih ada digit terakhir yang belum dikalikan — makanya butuh `angka = total * angka`. Di versi for loop, semua digit sudah diproses tuntas — cukup `angka = hasil`.

---

## ⚠️ Jebakan Umum

❌ **Salah — `hasil` diinisialisasi di luar while loop:**
```js
let hasil = 1;
while (angka >= 10) {
  // hasil tidak direset tiap babak! ❌
}
```

✅ **Benar — `hasil` dideklarasikan di dalam while loop:**
```js
while (angka >= 10) {
  let hasil = 1; // ✅ direset di setiap babak
}
```

---

❌ **Salah — `angka = total * angka` seperti nested while:**
```js
angka = hasil * angka; // ❌ for loop sudah memproses semua digit!
```

✅ **Benar — cukup `angka = hasil`:**
```js
angka = hasil; // ✅ semua digit sudah termasuk dalam hasil
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Iteratif — for loop di dalam while loop |
| Loop luar | While — ulangi proses selama `angka >= 10` |
| Loop dalam | For — kalikan semua digit sekaligus |
| Teknik pemisahan digit | `toString()` + iterasi karakter |
| Kelebihan | Lebih bersih dari nested while, tidak menggunakan rekursif |
| Kekurangan | Konversi string ↔ angka di setiap babak |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 6 — Rekursif + For Loop](./06-rekursif-for-loop_recursion-with-for-loop.md)**
- **📖 [Lanjut ke Part 8 — Perbandingan Semua Versi →](./08-perbandingan-semua-versi_all-versions-comparison.md)**

---

<div align="center">

Made with ❤️ for learners

</div>