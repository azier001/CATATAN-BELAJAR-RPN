# 📚 Shift Word -  PART 2: KONSEP ASCII CODE

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         📖 PART 2: KONSEP ASCII CODE 📖                                  ║
║                                                                          ║
║              Fondasi yang Dipakai untuk Refactoring                      ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📖 Apa itu ASCII | 🔧 Dua Method | 🔢 Normalisasi | 💡 Modulo |
|:----------------:|:-------------:|:--------------:|:---------:|
| [Jump](#-apa-itu-ascii) | [Jump](#-dua-method-penting) | [Jump](#-normalisasi-ke-025) | [Jump](#-modulo--untuk-wrap-balik) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami apa itu ASCII code
- ✅ Bisa menggunakan `charCodeAt` dan `fromCharCode`
- ✅ Memahami teknik normalisasi dan modulo untuk geser huruf

---

## 📖 Apa itu ASCII?

Komputer hanya mengenal angka. Setiap huruf yang kamu ketik disimpan sebagai angka — standar angka untuk huruf ini disebut **ASCII**.

Huruf `a–z` di ASCII memiliki pola yang sederhana dan berurutan:

| Huruf | ASCII | Huruf | ASCII |
|-------|-------|-------|-------|
| `a` | 97 | `n` | 110 |
| `b` | 98 | `o` | 111 |
| `c` | 99 | ... | ... |
| ... | ... | `z` | 122 |

> Polanya: huruf urut, angkanya juga urut, selisih selalu 1.

---

## 🔧 Dua Method Penting

Bayangkan dua method ini sebagai **kamus dua arah** antara huruf dan angka:

**`charCodeAt(0)` — Huruf ke Angka**
```javascript
'a'.charCodeAt(0) // 97
'b'.charCodeAt(0) // 98
'z'.charCodeAt(0) // 122
```

**`String.fromCharCode()` — Angka ke Huruf**
```javascript
String.fromCharCode(97)  // 'a'
String.fromCharCode(98)  // 'b'
String.fromCharCode(122) // 'z'
```

---

## 🔢 Normalisasi ke 0–25

Daripada bekerja di range ASCII 97–122 yang membingungkan, kita **sederhanakan dulu ke 0–25** dengan mengurangi 97:

```
a → 97 - 97 = 0
b → 98 - 97 = 1
c → 99 - 97 = 2
...
z → 122 - 97 = 25
```

Setelah operasi selesai, kembalikan ke ASCII dengan **menambah 97** lagi.

---

## 💡 Modulo `%` untuk Wrap Balik

**Modulo** adalah operasi sisa bagi. Berguna untuk "memutar balik" angka ke awal ketika sudah melewati batas — seperti jam yang kembali ke 00:00 setelah 23:59.

```
10 % 3  = 1   (10 dibagi 3, sisa 1)
26 % 26 = 0   (26 dibagi 26, sisa 0)
 5 % 26 = 5   (5 dibagi 26, sisa 5)
```

Untuk kasus huruf `z`:
```
z → index 25
25 + 1 = 26
26 % 26 = 0  → kembali ke index 0 → 'a' ✅
```

---

## 📐 Rumus Lengkap

```javascript
newCode = (charCode - 97 + 1) % 26 + 97
```

| Langkah | Operasi | Keterangan |
|---------|---------|------------|
| 1 | `charCode - 97` | Normalisasi ke 0–25 |
| 2 | `+ 1` | Geser satu huruf ke depan |
| 3 | `% 26` | Wrap balik jika melewati 25 |
| 4 | `+ 97` | Kembalikan ke range ASCII |

**Simulasi huruf `'w'`:**
```
'w' → charCode 119
119 - 97 = 22   (normalisasi)
22 + 1   = 23   (geser)
23 % 26  = 23   (tidak melewati batas)
23 + 97  = 120  → 'x' ✅
```

**Simulasi huruf `'z'`:**
```
'z' → charCode 122
122 - 97 = 25   (normalisasi)
25 + 1   = 26   (geser)
26 % 26  = 0    (wrap balik ke awal)
0 + 97   = 97   → 'a' ✅
```

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa angka 97?</strong></summary>

Karena 97 adalah nilai ASCII dari huruf `'a'`. Dengan mengurangi 97, kita normalisasi range dari 97–122 menjadi 0–25, sehingga lebih mudah dihitung dengan modulo.

</details>

<details>
<summary><strong>❓ Kenapa modulo 26?</strong></summary>

Karena total huruf alfabet ada 26. Modulo 26 memastikan angka tidak pernah keluar dari range 0–25, sehingga selalu bisa dipetakan ke huruf yang valid.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 1: Analisis Kode Original](01-analisis-kode-original.md)**
- **🔧 [Lanjut ke Part 3: Refactoring Step-by-Step →](03-refactoring-step-by-step.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
