# 📚 naikAngkot - PART 1: SOAL & KRITERIA

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            📋 PART 1: SOAL & KRITERIA 📋                                ║
║                                                                          ║
║           Apa yang Diminta dan Bagaimana Cara Kerjanya                   ║
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
- ✅ Tahu rute angkot yang tersedia (A–F)
- ✅ Paham cara menghitung ongkos berdasarkan rute yang dilewati
- ✅ Siap untuk melihat dan menganalisis kode di Part 2

---

## 📋 Soal

> ### 📋 Deskripsi
>
> Diberikan sebuah function **`naikAngkot(listPenumpang)`** yang menerima satu parameter:
>
> | Parameter | Tipe | Keterangan |
> |-----------|------|------------|
> | `listPenumpang` | `array of array` | Daftar penumpang beserta halte naik dan halte tujuan |
>
> **Setiap elemen di dalam `listPenumpang` adalah array dengan struktur:**
>
> | Index | Tipe | Keterangan |
> |-------|------|------------|
> | `[0]` | `string` | Nama penumpang |
> | `[1]` | `string` | Halte naik |
> | `[2]` | `string` | Halte tujuan |
>
> **Rute angkot tersedia dari A sampai F:**
>
> | Halte | A | B | C | D | E | F |
> |-------|---|---|---|---|---|---|
> | Index | 0 | 1 | 2 | 3 | 4 | 5 |
>
> Penumpang **wajib membayar Rp2.000** untuk setiap satu halte yang dilewati.
>
> Buatlah function yang mengembalikan **array of object** dimana setiap object berisi info perjalanan setiap penumpang: **`penumpang`**, **`naikDari`**, **`tujuan`**, dan **`bayar`**.

### 📝 Template Soal

```javascript
function naikAngkot(listPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  // your code here
}
```

> ⚠️ **Catatan:** Array `rute` sudah diberikan dan bisa langsung digunakan untuk mencari posisi halte.

---

## 🔍 Kriteria

> **1.** Jika `listPenumpang` kosong (`[]`)
> → return array kosong `[]`
>
> **2.** Ongkos dihitung berdasarkan **jumlah halte yang dilewati × Rp2.000**
> → Contoh: dari B ke F melewati 4 halte (B→C→D→E→F) → 4 × 2.000 = **Rp8.000**
>
> **3.** Output berisi **sejumlah object sesuai jumlah penumpang** di input
>
> **4.** Setiap object output berisi:
> - `penumpang` — nama penumpang
> - `naikDari` — halte tempat naik
> - `tujuan` — halte tujuan
> - `bayar` — total ongkos yang harus dibayar

---

## 📊 Contoh-contoh

### Output yang Diharapkan

```javascript
// ✅ Normal case 1 — satu penumpang
naikAngkot([['Dimitri', 'B', 'F']])
// → [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
```

```javascript
// ✅ Normal case 2 — dua penumpang rute berbeda
naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']])
// → [
//     { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//     { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 }
//   ]
```

```javascript
// ✅ Normal case 3 — beberapa penumpang berbagai rute
naikAngkot([['Andi', 'A', 'C'], ['Budi', 'B', 'E'], ['Cici', 'D', 'F']])
// → [
//     { penumpang: 'Andi', naikDari: 'A', tujuan: 'C', bayar: 4000 },
//     { penumpang: 'Budi', naikDari: 'B', tujuan: 'E', bayar: 6000 },
//     { penumpang: 'Cici', naikDari: 'D', tujuan: 'F', bayar: 4000 }
//   ]
```

```javascript
// ✅ Edge case — naik dan turun di halte yang sama
naikAngkot([['Budi', 'C', 'C']])
// → [{ penumpang: 'Budi', naikDari: 'C', tujuan: 'C', bayar: 0 }]
```

```javascript
// ✅ Edge case — input kosong
naikAngkot([])
// → []
```

---

### Simulasi Perjalanan: Dimitri naik dari B ke F

```
Rute angkot:  A → B → C → D → E → F
Index:        0   1   2   3   4   5

Dimitri naik dari B (index 1) ke F (index 5)

Halte yang dilewati:
B → C → D → E → F = 4 halte

Kalkulasi ongkos:
index tujuan - index naik = 5 - 1 = 4 halte
4 × Rp2.000 = Rp8.000 ✅

Output:
{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Parameter | `listPenumpang` — array dua dimensi `[nama, halteNaik, halteTujuan]` |
| Rute | A → B → C → D → E → F (6 halte, index 0–5) |
| Tarif | **Rp2.000** per halte yang dilewati |
| Cara hitung | `(indexTujuan - indexNaik) × 2000` |
| Jika naik = turun | `bayar: 0` |
| Jika input kosong | return `[]` |
| Return | Array of object `{ penumpang, naikDari, tujuan, bayar }` |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2: Proses Pengerjaan →](02-proses-pengerjaan.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
