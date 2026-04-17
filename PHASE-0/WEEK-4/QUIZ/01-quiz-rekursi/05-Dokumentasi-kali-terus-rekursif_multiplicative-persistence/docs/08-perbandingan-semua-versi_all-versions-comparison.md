# 📊 Part 8 — Perbandingan Semua Versi / All Versions Comparison

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Comparison-blue?style=for-the-badge)
![Versions](https://img.shields.io/badge/Versions-6-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 📋 Semua Kode | 📊 Tabel Perbandingan | 🏆 Rekomendasi | ✅ Ringkasan |
|:-------------:|:--------------------:|:--------------:|:-----------:|
| [Jump](#-semua-kode) | [Jump](#-tabel-perbandingan) | [Jump](#-rekomendasi) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Melihat semua versi solusi dalam satu halaman
- ✅ Memahami perbedaan dan persamaan antar versi
- ✅ Mengerti kapan menggunakan pendekatan yang mana
- ✅ Memiliki gambaran besar dari semua teknik yang dipelajari

---

## 📋 Semua Kode

### Versi 1 — Rekursif + String

```js
function kaliTerusRekursif(angka) {
  const digits = String(angka);

  if (digits.length === 1) return Number(digits);

  const result = Number(digits[0]) * kaliTerusRekursif(Number(digits.slice(1)));

  return kaliTerusRekursif(result);
}
```

---

### Versi 2 — Rekursif + Matematik

```js
const kaliTerusRekursif = (angka) => {
  if (angka < 10) return angka;

  const result = (angka % 10) * kaliTerusRekursif(Math.floor(angka / 10));

  return kaliTerusRekursif(result);
};
```

---

### Versi 3 — While dalam While

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

---

### Versi 4 — Tail Recursion + Accumulator

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

---

### Versi 5 — Rekursif + For Loop ⭐ Rekomendasi

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

---

### Versi 6 — For dalam While

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

---

## 📊 Tabel Perbandingan

### Teknik & Pendekatan

| Versi | Pendekatan | Pemisahan Digit | Pengulangan |
|-------|-----------|-----------------|-------------|
| 1 | Rekursif + String | `digits[0]` dan `slice(1)` | `return kaliTerusRekursif(result)` |
| 2 | Rekursif + Matematik | `% 10` dan `Math.floor` | `return kaliTerusRekursif(result)` |
| 3 | While dalam While | `% 10` dan `Math.floor` | Loop luar while |
| 4 | Tail Recursion | `% 10` dan `Math.floor` | `return kaliTerusRekursif(result)` |
| 5 | Rekursif + For Loop | `toString()` + for loop | `return kaliTerusRekursif(hasil)` |
| 6 | For dalam While | `toString()` + for loop | Loop luar while |

### Base Case

| Versi | Base Case | Return |
|-------|-----------|--------|
| 1 | `digits.length === 1` | `Number(digits)` |
| 2 | `angka < 10` | `angka` |
| 3 | — (tidak ada base case, pakai kondisi while) | `angka` |
| 4 | `angka < 10` | `angka * total` |
| 5 | `angka < 10` | `angka` |
| 6 | — (tidak ada base case, pakai kondisi while) | `angka` |

### Kelebihan & Kekurangan

| Versi | Kelebihan | Kekurangan |
|-------|-----------|------------|
| 1 | Mudah dipahami pola rekursifnya | Konversi string ↔ angka berulang, rekursif bercabang |
| 2 | Efisien, tanpa konversi string | Butuh pemahaman `%` dan `Math.floor` |
| 3 | Tanpa rekursif, tanpa stack overflow | Paling verbose, logika `total * angka` membingungkan |
| 4 | Efisien — tidak ada operasi menunggu | Konsep accumulator butuh pemahaman lebih |
| 5 | Paling mudah dibaca, alur lurus ⭐ | Konversi string ↔ angka di setiap babak |
| 6 | Bersih, tanpa rekursif | Konversi string ↔ angka di setiap babak |

---

## 🏆 Rekomendasi

| Situasi | Versi yang Disarankan |
|---------|----------------------|
| Baru belajar rekursif | Versi 5 — paling mudah dibaca |
| Ingin tanpa konversi string | Versi 2 — rekursif matematik |
| Ingin tanpa rekursif | Versi 6 — for dalam while |
| Ingin belajar accumulator | Versi 4 — tail recursion |
| Challenge mewajibkan rekursif | Versi 1, 2, 4, atau 5 |

---

## ✅ Ringkasan

Semua versi menghasilkan output yang sama — yang berbeda hanya **cara berpikirnya**:

- **Versi 1 & 5** — berpikir via **string**, digit diakses seperti karakter
- **Versi 2 & 4** — berpikir via **matematika**, digit diakses via `%` dan `Math.floor`
- **Versi 3 & 6** — berpikir via **loop**, tidak bergantung pada rekursif

> 💬 Tidak ada versi yang paling benar — setiap versi mengajarkan cara berpikir yang berbeda. Semakin banyak versi yang kamu pahami, semakin kuat fondasi problem-solving kamu.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 7 — For dalam While](./07-for-dalam-while_for-inside-while.md)**
- **📖 [Lanjut ke Part 9 — Edge Cases →](./09-edge-cases_kasus-tepi.md)**

---

<div align="center">

Made with ❤️ for learners

</div>