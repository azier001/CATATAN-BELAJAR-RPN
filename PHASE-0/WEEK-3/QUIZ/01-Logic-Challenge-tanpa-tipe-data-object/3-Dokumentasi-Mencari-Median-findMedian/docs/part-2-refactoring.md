# 🔧 Part 2 — Proses Refactoring

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║              🔧 PART 2 — PROSES REFACTORING 🔧                  ║
║                                                                  ║
║         4 Tahap Perbaikan: dari Kode Original ke Clean Code      ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 🔄 Tahap 1 | 🔄 Tahap 2 | 🔄 Tahap 3 | 🔄 Tahap 4 | 🎯 Principles | 🏁 Hasil Akhir | 💡 Takeaways |
|:----------:|:----------:|:----------:|:----------:|:-------------:|:--------------:|:------------:|
| [Jump](#-tahap-1--fix-mutasi--dead-code) | [Jump](#-tahap-2--sederhanakan-logika-index) | [Jump](#-tahap-3--english-naming-convention) | [Jump](#-tahap-4--jsdoc-comment) | [Jump](#-clean-code-principles) | [Jump](#-hasil-akhir) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Perbaiki semua masalah yang ditemukan di Part 1
- ✅ Refactoring dilakukan bertahap agar mudah dipahami
- ✅ Setiap tahap diverifikasi dengan test case
- ✅ Hasil akhir: kode yang clean, readable, dan optimal

---

## 🔄 Tahap 1 — Fix Mutasi & Dead Code

### **Apa yang diubah:**
- `numbers.sort()` → `[...numbers].sort()` — hindari mutasi array asli
- Hapus `console.log('---')` — dead code setelah semua `return`
- Ganti `numbers.length` → `sorted.length` — konsisten pakai `sorted`
- Tambah `const` pada `middle` — hindari global variable
- Hapus `let middle = 0` di awal — variabel redundan

### **Before:**
```javascript
const cariMedian = (numbers) => {
  const sorted = numbers.sort((a, b) => a - b)  // ❌ mutasi array asli
  const length = numbers.length                  // ❌ harusnya pakai sorted
  let middle = 0                                 // ❌ redundan

  if (length % 2 !== 0) {
    middle = (length + 1) / 2                   // ❌ tanpa const
    return numbers[middle - 1]
  } else {
    const middle1 = (length / 2)
    const middle2 = ((length / 2) + 1)
    const numberMiddle1 = numbers[middle1 - 1]
    const numberMiddle2 = numbers[middle2 - 1]
    return (numberMiddle1 + numberMiddle2) / 2
  }

  console.log('---')                            // ❌ dead code
}
```

### **After:**
```javascript
const cariMedian = (numbers) => {
  const sorted = [...numbers].sort((a, b) => a - b)  // ✅ salinan array
  const length = sorted.length                        // ✅ pakai sorted

  if (length % 2 !== 0) {
    const middle = (length + 1) / 2                  // ✅ ada const
    return sorted[middle - 1]
  } else {
    const middle1 = (length / 2)
    const middle2 = ((length / 2) + 1)
    const numberMiddle1 = sorted[middle1 - 1]
    const numberMiddle2 = sorted[middle2 - 1]
    return (numberMiddle1 + numberMiddle2) / 2
  }
}
```

### **Verifikasi mutasi:**
```javascript
const arr = [3, 1, 2]
cariMedian(arr)
console.log(arr) // [3, 1, 2] ✅ array asli tidak berubah
```

**Test Result:** 16/16 ✅ PASS

---

## 🔄 Tahap 2 — Sederhanakan Logika Index

### **Apa yang diubah:**
Mengganti cara menghitung index tengah dari manual `/ 2` lalu `- 1` menjadi langsung menggunakan `Math.floor()` sebagai index berbasis 0. Hasilnya 4 variabel index menjadi cukup 1 variabel.

### **Konsep `Math.floor()`:**

```
Array: [1, 2, 3, 4, 5]  → length = 5 (ganjil)
mid   = Math.floor(5 / 2) = 2
sorted[2] = 3 ✅

Array: [1, 3, 4, 10, 12, 13]  → length = 6 (genap)
mid   = Math.floor(6 / 2) = 3
sorted[mid - 1] = sorted[2] = 4
sorted[mid]     = sorted[3] = 10
(4 + 10) / 2    = 7 ✅
```

### **Before:**
```javascript
if (length % 2 !== 0) {
  const middle = (length + 1) / 2
  return sorted[middle - 1]
} else {
  const middle1 = (length / 2)
  const middle2 = ((length / 2) + 1)
  const numberMiddle1 = sorted[middle1 - 1]  // 4 variabel untuk 2 nilai
  const numberMiddle2 = sorted[middle2 - 1]
  return (numberMiddle1 + numberMiddle2) / 2
}
```

### **After:**
```javascript
const mid = Math.floor(length / 2)

if (length % 2 !== 0) {
  return sorted[mid]
} else {
  return (sorted[mid - 1] + sorted[mid]) / 2
}
```

### **Perbandingan:**

| | Before | After |
|---|---|---|
| Variabel index | 4 (`middle1`, `middle2`, `numberMiddle1`, `numberMiddle2`) | 1 (`mid`) |
| Baris kode (if-else) | 6 baris | 2 baris |
| Readability | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

**Test Result:** 16/16 ✅ PASS

---

## 🔄 Tahap 3 — English Naming Convention

### **Apa yang diubah:**
Rename semua nama variabel dan fungsi dari Bahasa Indonesia ke Bahasa Inggris.

### **Tabel Perubahan:**

| Sebelum | Sesudah | Alasan |
|---------|---------|--------|
| `cariMedian` | `findMedian` | `cari` → `find` |
| `sorted` | `sortedNumbers` | lebih deskriptif |
| `length` | `length` | sudah benar ✅ |
| `mid` | `mid` | sudah benar ✅ |

### **Before:**
```javascript
const cariMedian = (numbers) => {
  const sorted = [...numbers].sort((a, b) => a - b)
  const length = sorted.length
  const mid = Math.floor(length / 2)

  if (length % 2 !== 0) {
    return sorted[mid]
  } else {
    return (sorted[mid - 1] + sorted[mid]) / 2
  }
}
```

### **After:**
```javascript
const findMedian = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b)
  const length = sortedNumbers.length
  const mid = Math.floor(length / 2)

  if (length % 2 !== 0) {
    return sortedNumbers[mid]
  } else {
    return (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
  }
}
```

**Test Result:** 16/16 ✅ PASS

---

## 🔄 Tahap 4 — JSDoc Comment

### **Apa yang diubah:**
Menambahkan JSDoc di atas fungsi sebagai dokumentasi resmi.

### **Apa itu JSDoc?**
JSDoc adalah standar penulisan komentar di JavaScript. Manfaatnya:
- Menjelaskan apa yang dilakukan fungsi
- Mendeskripsikan parameter dan return value
- Muncul sebagai **tooltip otomatis** di VS Code saat hover fungsi

### **Format JSDoc:**
```javascript
/**
 * Deskripsi fungsi
 * @param {tipe} namaParam - penjelasan parameter
 * @returns {tipe} penjelasan return value
 */
```

### **After:**
```javascript
/**
 * Finds the median value of an array of numbers.
 * @param {number[]} numbers - An array of numbers (unsorted is fine)
 * @returns {number} The median value of the array
 */
const findMedian = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b)
  const length = sortedNumbers.length
  const mid = Math.floor(length / 2)

  if (length % 2 !== 0) {
    return sortedNumbers[mid]
  } else {
    return (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
  }
}
```

**Test Result:** 16/16 ✅ PASS

---

## 🎯 Clean Code Principles

### **1. Meaningful Names**
```javascript
// ❌ BAD
let x = 0
const s = [...n].sort((a, b) => a - b)

// ✅ GOOD
let mid = 0
const sortedNumbers = [...numbers].sort((a, b) => a - b)
```
**Rule:** Nama harus menjelaskan purpose-nya, bukan cuma disingkat.

---

### **2. Pure Function**
```javascript
// ❌ BAD — mengubah data input
const findMedian = (numbers) => {
  numbers.sort(...)  // array asli berubah!
}

// ✅ GOOD — tidak mengubah data input
const findMedian = (numbers) => {
  const sortedNumbers = [...numbers].sort(...)  // buat salinan
}
```
**Rule:** Fungsi yang baik tidak mengubah data di luar scope-nya.

---

### **3. No Dead Code**
```javascript
// ❌ BAD — kode yang tidak akan pernah jalan
const findMedian = (numbers) => {
  return result
  console.log('done')  // unreachable!
}

// ✅ GOOD — hanya kode yang dibutuhkan
const findMedian = (numbers) => {
  return result
}
```
**Rule:** Hapus semua kode yang tidak dieksekusi.

---

### **4. English Convention**
```javascript
// ✅ GOOD
findMedian
sortedNumbers
middleIndex

// ❌ AVOID
cariMedian
angkaTerurut
indexTengah
```
**Rule:** Gunakan English untuk professional & collaborative code.

---

## 🎨 Alternatif Naming

Ada beberapa pilihan naming yang valid untuk fungsi ini:

### **Option 1: Verb + Noun (Dipakai)**
```javascript
const findMedian = (numbers) => { }
```
- ✅ Deskriptif & jelas
- ✅ Mengikuti konvensi `find` + noun
- ✅ **Recommended!**

### **Option 2: calculate + Noun**
```javascript
const calculateMedian = (numbers) => { }
```
- ✅ Eksplisit ada proses kalkulasi
- ⚠️ Sedikit lebih panjang

### **Option 3: get + Noun**
```javascript
const getMedian = (numbers) => { }
```
- ✅ Singkat
- ⚠️ `get` lebih cocok untuk mengambil data yang sudah ada, bukan menghitung

---

## 📋 Naming Best Practices

### **Function Names:**
```javascript
// ✅ Verb + Noun
findMedian()
sortArray()
calculateAverage()

// ✅ Action words yang umum
get, set, find, create,
update, delete, calculate,
sort, filter, validate
```

### **Variable Names:**
```javascript
// ✅ Deskriptif
sortedNumbers
middleIndex
totalLength

// ❌ Ambigu
data, temp, x, val, arr
```

### **Boolean Variables:**
```javascript
// ✅ Berbentuk pertanyaan
isEven
hasDuplicates
isEmpty

// ❌ Ambigu
even, duplicates, empty
```

---

## 🏁 Hasil Akhir

Kode final setelah 4 tahap refactoring:

```javascript
/**
 * Finds the median value of an array of numbers.
 * @param {number[]} numbers - An array of numbers (unsorted is fine)
 * @returns {number} The median value of the array
 */
const findMedian = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b)
  const length = sortedNumbers.length
  const mid = Math.floor(length / 2)

  if (length % 2 !== 0) {
    return sortedNumbers[mid]
  } else {
    return (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
  }
}
```

### **Recap Semua Perubahan:**

| Tahap | Yang Diubah | Hasil |
|-------|-------------|-------|
| **Tahap 1** | Fix mutasi array, hapus dead code, tambah `const` | Array asli aman, kode bersih |
| **Tahap 2** | Sederhanakan index dengan `Math.floor()` | 4 variabel → 1 variabel |
| **Tahap 3** | English naming convention | Naming standar industri |
| **Tahap 4** | Tambah JSDoc comment | Dokumentasi otomatis di IDE |

---

## 💡 Key Takeaways

> **Refactoring Itu Bertahap**
> Jangan ubah semua sekaligus — lakukan satu per satu agar mudah dilacak

> **Test Setiap Tahap**
> Pastikan test tetap PASS setelah setiap perubahan

> **Pure Function**
> Fungsi yang baik tidak mengubah data input — selalu pakai `[...array]`

> **Descriptive > Short**
> Prefer clarity over brevity, tapi jangan terlalu panjang

> **JSDoc = Dokumentasi Gratis**
> Sekali tulis, langsung muncul sebagai tooltip di VS Code

---

## 🔗 Navigasi

- **[← README](../README.md)**
- **[← Part 1: Analisis Kode Original](part-1-analisis-kode-original.md)**
- **[→ Part 3: Ringkasan Algoritma](part-3-ringkasan-algoritma.md)**

---

<div align="center">

**Siap lihat ringkasan algoritma di Part 3?**

Made with ❤️ for learners

</div>
