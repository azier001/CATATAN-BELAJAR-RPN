# 📚 Toggle Case - PART 1: SOAL & PEMAHAMAN KRITERIA

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 PART 1: SOAL & PEMAHAMAN KRITERIA 📋                    ║
║                                                                          ║
║              Apa yang Diminta dan Bagaimana Cara Kerjanya                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-5%20minutes-blue)
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
- ✅ Tahu bagaimana cara kerja toggle case pada setiap karakter
- ✅ Siap untuk melihat dan menganalisis kode di Part 2

---

## 📋 Soal

```
Diberikan sebuah function tukarBesarKecil(kalimat) yang menerima
satu parameter kalimat berupa string.

Function akan mengembalikan string baru di mana setiap huruf kecil
diubah menjadi huruf besar, dan setiap huruf besar diubah menjadi
huruf kecil.

Karakter selain huruf (angka, simbol, spasi) tidak diubah.

TIPS: gunakan method toUpperCase() dan toLowerCase()
```

---

## 🔍 Kriteria

1. Setiap **huruf kecil** (a-z) → diubah menjadi **huruf besar**
2. Setiap **huruf besar** (A-Z) → diubah menjadi **huruf kecil**
3. **Angka, simbol, spasi** → tidak diubah, dibiarkan as-is
4. Return string baru hasil toggle

---

## 📊 Contoh-contoh

### `'Hello World'`
| Char | Jenis | Output |
|------|-------|--------|
| `H` | Huruf besar | `h` |
| `e` | Huruf kecil | `E` |
| `l` | Huruf kecil | `L` |
| `l` | Huruf kecil | `L` |
| `o` | Huruf kecil | `O` |
| ` ` | Spasi | ` ` |
| `W` | Huruf besar | `w` |
| `o` | Huruf kecil | `O` |
| `r` | Huruf kecil | `R` |
| `l` | Huruf kecil | `L` |
| `d` | Huruf kecil | `D` |

→ Return **`'hELLO wORLD'`**

---

### `'My Name is Bond!!'`
| Char | Jenis | Output |
|------|-------|--------|
| `M` | Huruf besar | `m` |
| `y` | Huruf kecil | `Y` |
| ` ` | Spasi | ` ` |
| `N` | Huruf besar | `n` |
| `a` | Huruf kecil | `A` |
| `...` | `...` | `...` |
| `!` | Simbol | `!` |
| `!` | Simbol | `!` |

→ Return **`'mY nAME IS bOND!!'`**

---

### `'001-A-3-5TrdYW'`
| Char | Jenis | Output |
|------|-------|--------|
| `0` | Angka | `0` |
| `0` | Angka | `0` |
| `1` | Angka | `1` |
| `-` | Simbol | `-` |
| `A` | Huruf besar | `a` |
| `-` | Simbol | `-` |
| `3` | Angka | `3` |
| `-` | Simbol | `-` |
| `5` | Angka | `5` |
| `T` | Huruf besar | `t` |
| `r` | Huruf kecil | `R` |
| `d` | Huruf kecil | `D` |
| `Y` | Huruf besar | `y` |
| `W` | Huruf besar | `w` |

→ Return **`'001-a-3-5tRDyw'`**

---

## ✅ Ringkasan

> **Aturan sederhana:**
> - Huruf kecil → BESAR
> - Huruf besar → kecil
> - Selain huruf → tetap sama

> **Tips dari soal:** Gunakan `.toUpperCase()` dan `.toLowerCase()` — dua method bawaan JavaScript untuk mengubah case huruf.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2: Validasi Kode Original →](02-validasi-kode-original.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
