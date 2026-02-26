# 📚 checkAB - PART 1: SOAL & PEMAHAMAN KRITERIA

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
- ✅ Tahu apa yang dimaksud "jarak 3 karakter" di dalam string
- ✅ Siap untuk melihat dan menganalisis kode di Part 2

---

## 📋 Soal

```
Diberikan sebuah function checkAB(str) yang menerima satu parameter
berupa string.

Function tersebut mengembalikan nilai true jika di dalam string tersebut
terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal
satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.

Jarak bisa dari a ke b, atau b ke a.
Spasi juga dianggap sebagai karakter.
```

---

## 🔍 Kriteria

1. Cari pasangan karakter `a` dan `b` di dalam string
2. Keduanya harus dipisahkan oleh **tepat 3 karakter** di antaranya
3. Arah boleh `a → b` atau `b → a`
4. Spasi dihitung sebagai karakter
5. Cukup **satu pasangan** yang memenuhi syarat untuk return `true`

---

## 📊 Contoh-contoh

### Kenapa jarak 3 karakter = selisih index 4?

```
b _ _ _ a
↑       ↑
0       4   → selisih 4, karakter di antara: index 1, 2, 3 (3 karakter)
```

> Jarak 3 karakter **di antara** = selisih index **4**

---

### `'barbarian'` → `true`

```
Index:  0  1  2  3  4  5  6  7  8
Char:   b  a  r  b  a  r  i  a  n
```

| Pasangan | Index | Selisih | Di antara | Valid? |
|----------|-------|---------|-----------|--------|
| b (0) dan a (4) | 0, 4 | 4 | a, r, b | ✅ |

→ Return **true**

---

### `'lane borrowed'` → `true`

```
Index:  0  1  2  3  4  5  6  7  8  9  10  11  12
Char:   l  a  n  e     b  o  r  r  o  w   e   d
```

| Pasangan | Index | Selisih | Di antara | Valid? |
|----------|-------|---------|-----------|--------|
| a (1) dan b (5) | 1, 5 | 4 | n, e, ' ' | ✅ |

→ Return **true**

---

### `'i am sick'` → `false`

```
Index:  0  1  2  3  4  5  6  7  8
Char:   i     a  m     s  i  c  k
```

Tidak ada pasangan `a` dan `b` sama sekali → Return **false**

---

### `'a   b'` → `true` (spasi dihitung!)

```
Index:  0  1  2  3  4
Char:   a  _  _  _  b   (_ = spasi)

Selisih: 4 - 0 = 4 ✅
```

→ Return **true**

---

### `'bacon and meat'` → `false`

```
Index:  0  1  2  3  4  5  6  7  8  9  10  11  12  13
Char:   b  a  c  o  n     a  n  d     m   e   a   t
```

| Pasangan | Index | Selisih | Valid? |
|----------|-------|---------|--------|
| b (0) dan a (1) | 0, 1 | 1 | ❌ |
| b (0) dan a (6) | 0, 6 | 6 | ❌ |
| b (0) dan a (12) | 0, 12 | 12 | ❌ |

Tidak ada selisih = 4 → Return **false**

---

## ✅ Ringkasan

> **Pola penting:** Kita tidak mencari semua karakter `a` dan `b` lalu membandingkannya satu per satu. Cukup cek — saat berdiri di posisi `i`, apakah 4 langkah sebelumnya (`i - 4`) adalah pasangan yang valid?

| Kriteria | Detail |
|----------|--------|
| Karakter yang dicari | `a` dan `b` |
| Jarak | Tepat 3 karakter di antara keduanya (selisih index = 4) |
| Arah | Bisa `a → b` atau `b → a` |
| Spasi | Dihitung sebagai karakter |
| Minimal | Cukup satu pasangan yang memenuhi |
| Return | `true` jika ditemukan, `false` jika tidak |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2: Analisis Kode Original →](02-analisis-kode-original.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
