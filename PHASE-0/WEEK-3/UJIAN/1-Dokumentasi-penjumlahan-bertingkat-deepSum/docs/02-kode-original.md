# 📚 deepSum - PART 2: KODE ORIGINAL & REVIEW

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🔍 PART 2: KODE ORIGINAL & REVIEW 🔍                         ║
║                                                                          ║
║           Analisis Kode Original — Apa yang Sudah Baik                   ║
║           dan Apa yang Bisa Ditingkatkan                                 ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📄 Kode Original | ✅ Yang Sudah Baik | ⚠️ Yang Bisa Ditingkatkan | 🧪 Test Cases |
|:----------------:|:-----------------:|:------------------------:|:-------------:|
| [Jump](#-kode-original) | [Jump](#-yang-sudah-baik) | [Jump](#-yang-bisa-ditingkatkan) | [Jump](#-test-cases) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami logika kode original secara keseluruhan
- ✅ Tahu bagian mana yang sudah benar dan baik
- ✅ Tahu bagian mana yang bisa ditingkatkan
- ✅ Siap untuk melihat proses refactoring di Part 3, 4, dan 5

---

## 📄 Kode Original

```javascript
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

---

## ✅ Yang Sudah Baik

### 1. Guard Clause di Awal

```javascript
if (arr.length === 0) return 'No number'
```

Edge case ditangani di awal function sebelum logika utama berjalan. Ini disebut **guard clause** — praktik yang baik karena membuat kode lebih mudah dibaca dan mencegah proses sia-sia pada data yang tidak valid.

### 2. Variabel Akumulator `total`

```javascript
let total = 0
```

Dideklarasikan di luar loop dengan nilai awal `0`. Ini sudah benar — variabel akumulator memang harus ada di luar loop agar nilainya bisa terus bertambah di setiap iterasi tanpa direset.

### 3. Struktur Loop yang Tepat

```javascript
for (const arr1 of arr) {        // loop level 1
  for (const arr2 of arr1) {     // loop level 2
    for (const number of arr2) { // loop level 3 → ambil angka
      total += number
    }
  }
}
```

Tiga nested loop sudah sesuai dengan struktur data yang 3 level. Setiap angka dikunjungi tepat 1 kali dan ditambahkan ke `total`.

### 4. Return yang Benar

```javascript
return total
```

Return ada di luar loop — sudah benar. Jika return ada di dalam loop, fungsi akan berhenti di iterasi pertama dan tidak memproses semua angka.

---

## ⚠️ Yang Bisa Ditingkatkan

### 1. Naming Kurang Deskriptif

```javascript
// ❌ Kurang deskriptif — apa isi arr1 dan arr2?
for (const arr1 of arr) {
  for (const arr2 of arr1) {
```

Nama `arr1` dan `arr2` tidak menjelaskan **isi** dari variabel tersebut. Pembaca kode harus menelusuri struktur data terlebih dahulu untuk memahami apa yang dimaksud.

```javascript
// ✅ Lebih deskriptif — langsung tahu isi tiap level
for (const group of arr) {
  for (const row of group) {
    for (const number of row) {
```

### 2. Hanya Bekerja untuk Tepat 3 Level

```javascript
// Kode ini hanya bisa handle nested array 3 level
for (const arr1 of arr) {       // level 1
  for (const arr2 of arr1) {    // level 2
    for (const number of arr2) { // level 3
```

Jika struktur nested array berubah menjadi 2 level atau 4 level, kode harus ditulis ulang seluruhnya. Nama fungsi `deepSum` mengisyaratkan solusi yang bisa handle **nested tak terbatas** — ini akan kita eksplorasi di Part 5 (Recursion).

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

## 📊 Ringkasan Review

| Aspek | Status | Catatan |
|-------|--------|---------|
| Logika & Kebenaran | ✅ Benar | Semua test case lulus |
| Guard Clause | ✅ Baik | Edge case ditangani di awal |
| Variabel Akumulator | ✅ Baik | `total` dideklarasikan di luar loop |
| Naming | ⚠️ Bisa ditingkatkan | `arr1`, `arr2` kurang deskriptif |
| Fleksibilitas | ⚠️ Terbatas | Hanya bekerja untuk tepat 3 level nested |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 1: Soal & Analisis](01-soal-dan-analisis.md)**
- **📖 [Lanjut ke Part 3: Refactoring — Perbaikan Naming →](03-refactoring-nested-loop-naming.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
