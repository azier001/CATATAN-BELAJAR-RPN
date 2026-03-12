# 📚 deepSum - PART 3: REFACTORING — PERBAIKAN NAMING

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        ✨ PART 3: REFACTORING — PERBAIKAN NAMING ✨                      ║
║                                                                          ║
║           Dari Naming yang Kurang Deskriptif ke Naming yang Jelas        ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 🔄 Penamaan | 🔄 Perbandingan | ✅ Kode Refactoring | 🧪 Test Cases |
|:-----------:|:--------------:|:------------------:|:-------------:|
| [Jump](#-step-1--perbaikan-penamaan-variabel) | [Jump](#-perbandingan-sebelum-dan-sesudah) | [Jump](#-kode-refactoring-final) | [Jump](#-test-cases) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami pentingnya penamaan variabel yang deskriptif
- ✅ Tahu perbedaan naming lama vs naming baru
- ✅ Bisa membedakan kode yang clean vs tidak clean dari sisi naming
- ✅ Siap untuk melihat pendekatan yang lebih modern di Part 4

---

## 🔄 Step 1 — Perbaikan Penamaan Variabel

Penamaan variabel yang baik membuat kode lebih mudah dibaca tanpa perlu komentar tambahan.

| Variabel Lama | Variabel Baru | Alasan |
|---------------|---------------|--------|
| `arr1` | `group` | Level 1 berisi kumpulan grup — nama `group` langsung menjelaskan isinya |
| `arr2` | `row` | Level 2 berisi baris dalam grup — nama `row` langsung menjelaskan isinya |
| `number` | `number` | Sudah deskriptif — tidak perlu diubah |
| `total` | `total` | Sudah deskriptif — tidak perlu diubah |

### Kenapa `arr1` dan `arr2` Bermasalah?

```javascript
// ❌ Kurang deskriptif — apa isi arr1 dan arr2?
for (const arr1 of arr) {
  for (const arr2 of arr1) {
    for (const number of arr2) {
```

Nama `arr1` dan `arr2` tidak menjelaskan **apa isi** dari variabel tersebut. Pembaca kode harus menelusuri struktur data terlebih dahulu untuk memahami maknanya.

```javascript
// ✅ Deskriptif — langsung tahu isi tiap level
for (const group of arr) {    // group = kumpulan baris
  for (const row of group) {  // row   = satu baris berisi angka
    for (const number of row) { // number = angka yang dijumlahkan
```

Hanya dengan membaca nama variabelnya, kita langsung tahu:
- `group` → kumpulan baris
- `row` → satu baris berisi angka-angka
- `number` → angka yang akan dijumlahkan

---

## 🔄 Perbandingan Sebelum dan Sesudah

```javascript
// ❌ SEBELUM — naming kurang deskriptif
function deepSum(arr) {
  if (arr.length === 0) return 'No number'

  let total = 0

  for (const arr1 of arr) {
    for (const arr2 of arr1) {
      for (const number of arr2) {
        total += number
      }
    }
  }

  return total
}
```

```javascript
// ✅ SESUDAH — naming deskriptif
function deepSum(arr) {
  if (arr.length === 0) return 'No number'

  let total = 0

  for (const group of arr) {
    for (const row of group) {
      for (const number of row) {
        total += number
      }
    }
  }

  return total
}
```

> **Catatan:** Logika kode **100% sama** — hanya naming yang berubah. Tidak ada perubahan pada cara kerja fungsi.

---

## ✅ Kode Refactoring Final

```javascript
function deepSum(arr) {
  if (arr.length === 0) return 'No number'

  let total = 0

  for (const group of arr) {
    for (const row of group) {
      for (const number of row) {
        total += number
      }
    }
  }

  return total
}
```

---

## 🧪 Test Cases

```javascript
// Edge case — array kosong
console.log(deepSum([]));
// → 'No number'
```

```javascript
// Normal case 1 — nested array 3 level
console.log(deepSum([
  [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
  [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
  [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
]));
// → 316
```

```javascript
// Normal case 2 — grup dengan panjang array berbeda-beda
console.log(deepSum([
  [[20, 10], [15], [1, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
  [[3, 5, 1], [1, 5, 3], [1]],
  [[2]]
]));
// → 156
```

---

## 📊 Ringkasan Perubahan

| Aspek | Sebelum | Sesudah |
|-------|---------|---------|
| Loop level 1 | `arr1` | `group` |
| Loop level 2 | `arr2` | `row` |
| Loop level 3 | `number` | `number` (tetap) |
| Logika | Sama | Sama |
| Hasil | Sama | Sama |

---

## 💡 Insight Penting

> **Kenapa penamaan variabel penting?**
> Kode dibaca jauh lebih sering daripada ditulis. Nama yang deskriptif seperti `group` dan `row` langsung menyampaikan makna tanpa perlu komentar tambahan. Ini adalah salah satu prinsip utama **clean code**.

> **Apakah perubahan naming mempengaruhi performa?**
> Tidak sama sekali. Naming hanya mempengaruhi keterbacaan kode (readability) — bukan cara kerja atau kecepatan eksekusi.

> **Keterbatasan yang masih ada:**
> Kode ini masih hanya bekerja untuk **tepat 3 level** nested array. Jika strukturnya berubah, loop harus ditambah atau dikurangi secara manual. Kita akan eksplorasi solusi yang lebih fleksibel di Part 4 dan Part 5.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 2: Kode Original & Review](02-kode-original.md)**
- **📖 [Lanjut ke Part 4: Refactoring — `.flat()` + `.reduce()` →](04-refactoring-flat-reduce.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
