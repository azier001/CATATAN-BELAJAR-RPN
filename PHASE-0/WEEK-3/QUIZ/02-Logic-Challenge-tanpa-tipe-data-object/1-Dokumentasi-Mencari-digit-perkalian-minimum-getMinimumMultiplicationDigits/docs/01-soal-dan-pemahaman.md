# 📚 Digit Perkalian Minimum - PART 1: SOAL & PEMAHAMAN KRITERIA

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         📋 PART 1: SOAL & PEMAHAMAN KRITERIA 📋                         ║
║                                                                          ║
║              Apa yang Diminta dan Bagaimana Cara Kerjanya                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📋 Soal | 🔍 Kriteria | 📊 Contoh | ✅ Ringkasan |
|:-------:|:-----------:|:---------:|:-----------:|
| [Jump](#-soal) | [Jump](#-kriteria) | [Jump](#-contoh-contoh) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami apa yang diminta soal
- ✅ Tahu cara menghitung pasangan faktor dan jumlah digitnya
- ✅ Siap untuk melihat dan menganalisis kode di Part 2

---

## 📋 Soal

```
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima
satu parameter angka.

Function akan mengembalikan jumlah digit minimal dari angka yang
merupakan faktor angka parameter tersebut.

Contoh: jika angka adalah 24, maka faktornya adalah:
1×24, 2×12, 3×8, dan 4×6

Dari antara faktor tersebut, yang digitnya paling sedikit adalah
3×8 atau 4×6, sehingga function akan me-return 2.
```

---

## 🔍 Kriteria

1. Cari semua **pasangan faktor** dari angka (a × b, di mana a ≤ b)
2. Gabungkan setiap pasangan menjadi string → hitung jumlah digitnya
3. Return jumlah digit yang **paling sedikit**

---

## 📊 Contoh-contoh

### angka = 24
| Pasangan | String | Jumlah Digit |
|----------|--------|--------------|
| 1 × 24 | "124" | 3 |
| 2 × 12 | "212" | 3 |
| 3 × 8 | "38" | 2 ✅ |
| 4 × 6 | "46" | 2 ✅ |

→ Return **2**

---

### angka = 90
| Pasangan | String | Jumlah Digit |
|----------|--------|--------------|
| 1 × 90 | "190" | 3 |
| 2 × 45 | "245" | 3 |
| 3 × 30 | "330" | 3 |
| 5 × 18 | "518" | 3 |
| 6 × 15 | "615" | 3 |
| 9 × 10 | "910" | 3 |

→ Return **3**

---

### angka = 20
| Pasangan | String | Jumlah Digit |
|----------|--------|--------------|
| 1 × 20 | "120" | 3 |
| 2 × 10 | "210" | 3 |
| 4 × 5 | "45" | 2 ✅ |

→ Return **2**

---

### angka = 179 (bilangan prima)
| Pasangan | String | Jumlah Digit |
|----------|--------|--------------|
| 1 × 179 | "1179" | 4 |

→ Return **4** (hanya satu pasangan karena bilangan prima)

---

### angka = 1
| Pasangan | String | Jumlah Digit |
|----------|--------|--------------|
| 1 × 1 | "11" | 2 |

→ Return **2**

---

## ✅ Ringkasan

> **Pola penting:** Semakin "seimbang" pasangan faktornya (mendekati akar kuadrat angka), biasanya jumlah digitnya semakin sedikit.
>
> Contoh: 24 → pasangan paling seimbang adalah 4×6, hasilnya 2 digit (minimum).

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2: Analisis Kode Original →](02-analisis-kode-original.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
