# 🔁 Part 6 — Rekursif + For Loop / Recursion with For Loop

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Approach](https://img.shields.io/badge/Approach-Recursion%20%2B%20For%20Loop-blue?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-String%20%26%20For%20Loop-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 🎯 Konsep | 💻 Kode | 📊 Visualisasi | ⚠️ Jebakan | ✅ Ringkasan |
|:---------:|:-------:|:--------------:|:----------:|:-----------:|
| [Jump](#-konsep-utama) | [Jump](#-kode) | [Jump](#-visualisasi-ascii) | [Jump](#️-jebakan-umum) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami cara menggabungkan rekursif dengan for loop
- ✅ Memahami kenapa versi ini paling mudah dibaca
- ✅ Mengerti perbedaan versi ini dengan versi rekursif string (Part 2)
- ✅ Memahami kenapa ini menjadi solusi rekomendasi

---

## 🎯 Konsep Utama

Versi ini menggabungkan dua pendekatan:

| Bagian | Teknik | Peran |
|--------|--------|-------|
| **For loop** | Iterasi string | Mengalikan semua digit dalam satu angka sekaligus |
| **Rekursif** | Memanggil diri sendiri | Mengulang proses kalau hasil masih lebih dari satu digit |

> 💡 Berbeda dengan versi rekursif string (Part 2) yang memecah digit **satu per satu lewat rekursif**, versi ini mengalikan **semua digit sekaligus lewat for loop** — lalu rekursif hanya dipanggil sekali untuk mengulang hasilnya.

---

## 💻 Kode

```js
function kaliTerusRekursif(angka) {
  if (angka < 10) return angka;

  let str = angka.toString();
  let hasil = 1;

  for (let i = 0; i < str.length; i++) {
    hasil *= Number(str[i]);
  }

  return kaliTerusRekursif(hasil);
}
```

### Penjelasan Baris per Baris

```js
if (angka < 10) return angka;
```
Base case — kalau angka sudah satu digit, langsung kembalikan nilainya.

```js
let str = angka.toString();
let hasil = 1;
```
Ubah angka ke string agar bisa diiterasi per karakter. `hasil` diinisialisasi `1` karena netral untuk perkalian.

```js
for (let i = 0; i < str.length; i++) {
  hasil *= Number(str[i]);
}
```
Iterasi setiap karakter string, ubah ke angka, lalu kalikan ke `hasil`. Semua digit diproses dalam satu babak for loop.

```js
return kaliTerusRekursif(hasil);
```
Kalau `hasil` masih lebih dari satu digit, ulangi seluruh prosesnya dari awal.

---

## 📊 Visualisasi ASCII

```
kaliTerusRekursif(654)
│
│ angka = 654, >= 10
│ str = "654"
│ hasil = 1
│
│ for loop:
│   i=0: hasil = 1  * 6 = 6
│   i=1: hasil = 6  * 5 = 30
│   i=2: hasil = 30 * 4 = 120
│
│ hasil = 120, panggil lagi!
│
└──► kaliTerusRekursif(120)
     │
     │ angka = 120, >= 10
     │ str = "120"
     │ hasil = 1
     │
     │ for loop:
     │   i=0: hasil = 1 * 1 = 1
     │   i=1: hasil = 1 * 2 = 2
     │   i=2: hasil = 2 * 0 = 0
     │
     │ hasil = 0, panggil lagi!
     │
     └──► kaliTerusRekursif(0)
          │
          │ angka = 0, < 10
          └── return 0  ✓ (base case)

          │
          ▼
    ╔═══════════╗
    ║  hasil: 0 ║
    ╚═══════════╝
```

> 💡 Alurnya **lurus ke bawah** — tidak ada cabang rekursif seperti versi string (Part 2). For loop mengumpulkan semua digit sekaligus, baru rekursif dipanggil sekali dengan hasilnya.

---

## 🔄 Perbandingan dengan Versi Rekursif String (Part 2)

| | Part 2 — Rekursif String | Part 6 — Rekursif + For Loop |
|---|---|---|
| Pemecahan digit | Satu per satu lewat rekursif | Semua sekaligus lewat for loop |
| Rekursif dipanggil | Dua kali per babak | Satu kali per babak |
| Alur visualisasi | Bercabang ke kanan | Lurus ke bawah |
| Kemudahan dibaca | Sedang | Paling mudah ✅ |

---

## ⚠️ Jebakan Umum

❌ **Salah — `hasil` diinisialisasi `0`:**
```js
let hasil = 0; // ❌ 0 × apapun = 0, hasil selalu 0!
```

✅ **Benar — `hasil` diinisialisasi `1`:**
```js
let hasil = 1; // ✅ netral untuk perkalian
```

---

❌ **Salah — lupa konversi karakter ke angka:**
```js
hasil *= str[i]; // ❌ str[i] adalah string, bukan angka!
```

✅ **Benar — konversi dulu ke angka:**
```js
hasil *= Number(str[i]); // ✅ konversi ke angka sebelum dikalikan
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Rekursif + for loop |
| Base case | `angka < 10` |
| Teknik pemisahan digit | `toString()` + iterasi for loop |
| Rekursif dipanggil | Satu kali per babak |
| Kelebihan | Paling mudah dibaca, alur lurus, cocok untuk pemula |
| Kekurangan | Konversi string ↔ angka di setiap babak |

> 💬 Inilah alasan versi ini menjadi **solusi rekomendasi** — strukturnya paling mudah dipahami, alurnya lurus, dan tidak ada trik tersembunyi.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 5 — Tail Recursion](./05-tail-recursion_rekursif-ekor.md)**
- **📖 [Lanjut ke Part 7 — For dalam While →](./07-for-dalam-while_for-inside-while.md)**

---

<div align="center">

Made with ❤️ for learners

</div>