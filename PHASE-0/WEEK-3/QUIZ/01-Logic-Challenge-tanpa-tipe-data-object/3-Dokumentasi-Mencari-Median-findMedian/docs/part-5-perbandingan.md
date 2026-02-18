# 📊 Part 5 — Perbandingan Keseluruhan

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║           📊 PART 5 — PERBANDINGAN KESELURUHAN 📊               ║
║                                                                  ║
║     4 Versi Lengkap: Original, Refactoring & 3 Alternatif        ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-5%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 📝 Original | ✅ Refactoring | 🔄 Alt 1 | 🔄 Alt 2 | 🔄 Alt 3 | 📊 Perbandingan | 🎯 Decision | 💡 Takeaways |
|:-----------:|:--------------:|:--------:|:--------:|:--------:|:---------------:|:-----------:|:------------:|
| [Jump](#-kode-original) | [Jump](#-kode-refactoring-final) | [Jump](#-alternatif-1--ternary) | [Jump](#-alternatif-2--destructuring) | [Jump](#-alternatif-3--ai-sebelah) | [Jump](#-perbandingan-lengkap) | [Jump](#-decision-guide) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Rekap semua kode dari sesi ini dalam satu tempat
- ✅ Perbandingan lengkap tiap versi
- ✅ Decision guide — kapan pakai yang mana
- ✅ Kesimpulan final

---

## 📝 Kode Original

> 💡 **Karakteristik:** Benar secara logika, tapi ada beberapa masalah

```javascript
const cariMedian = (numbers) => {
  const sorted = numbers.sort((a, b) => a - b)
  const length = numbers.length
  let middle = 0

  if (length % 2 !== 0) {
    middle = (length + 1) / 2
    return numbers[middle - 1]
  } else {
    const middle1 = (length / 2)
    const middle2 = ((length / 2) + 1)
    const numberMiddle1 = numbers[middle1 - 1]
    const numberMiddle2 = numbers[middle2 - 1]
    return (numberMiddle1 + numberMiddle2) / 2
  }

  console.log('---')
}
```

### **Masalah:**
- ❌ Mutasi array asli — `numbers.sort()` tanpa copy
- ❌ Dead code — `console.log('---')` setelah semua return
- ❌ Global variable — `middle` tanpa `const`
- ❌ Variabel redundan — `let middle = 0` tidak dipakai di `else`
- ⚠️ Naming Bahasa Indonesia — `cariMedian`

---

## ✅ Kode Refactoring Final

> 💡 **Karakteristik:** Clean, readable, best practice

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

### **Konsep Inti:**
Copy → Sort → Hitung mid → Cek ganjil/genap → Return.

### **Step-by-Step:**
1. Copy array dengan `[...numbers]`
2. Sort ascending
3. Hitung `mid = Math.floor(length / 2)`
4. Ganjil → return `sortedNumbers[mid]`
5. Genap → return rata-rata `sortedNumbers[mid - 1]` dan `sortedNumbers[mid]`

### **Keywords:**
- 📋 **spread** `[...numbers]` — copy array
- 🧮 **Math.floor** — index tengah berbasis 0
- ➗ **length % 2** — cek ganjil/genap
- 📝 **JSDoc** — dokumentasi otomatis
- ⏱️ **O(n log n)** time, **O(n)** space

### **Perbaikan dari Original:**
- ✅ Fix mutasi → `[...numbers].sort()`
- ✅ Hapus dead code
- ✅ Tambah `const` pada semua variabel
- ✅ Sederhanakan index → `Math.floor()`
- ✅ English naming → `findMedian`
- ✅ Tambah JSDoc

**Test Result:** 16/16 ✅ PASS

---

## 🔄 Alternatif 1 — Ternary

> 💡 **Karakteristik:** Paling ringkas, satu baris return

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

  return length % 2 !== 0
    ? sortedNumbers[mid]
    : (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
}
```

### **Konsep Inti:**
Identik dengan Refactoring — hanya `if-else` diganti ternary `? :`.

### **Step-by-Step:**
1. Copy & sort — sama
2. Hitung `mid` — sama
3. Evaluasi ternary satu baris:
   - Ganjil (`true`) → `sortedNumbers[mid]`
   - Genap (`false`) → rata-rata dua tengah

### **Keywords:**
- ❓ **ternary** `? :` — pengganti if-else
- 🔁 **single return** — satu titik keluar
- ⏱️ **O(n log n)** time, **O(n)** space

### **Pitfalls:**
```javascript
// ❌ Semua dalam satu baris — susah dibaca
return length % 2 !== 0 ? sortedNumbers[mid] : (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2

// ✅ Pisah ke dua baris
return length % 2 !== 0
  ? sortedNumbers[mid]
  : (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
```

### **Kapan Pakai:**
- ✅ Kondisi sederhana dengan dua pilihan
- ✅ Tim familiar dengan ternary
- ❌ Kondisi kompleks atau nested

**Test Result:** 16/16 ✅ PASS

---

## 🔄 Alternatif 2 — Destructuring

> 💡 **Karakteristik:** Ekspresif, nama variabel paling jelas

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
  }

  const [left, right] = [sortedNumbers[mid - 1], sortedNumbers[mid]]
  return (left + right) / 2
}
```

### **Konsep Inti:**
Early return untuk ganjil, destructure dua nilai tengah ke `left` dan `right` untuk genap.

### **Step-by-Step:**
1. Copy & sort — sama
2. Hitung `mid` — sama
3. Ganjil → **early return** langsung
4. Genap → destructure: `[left, right]`
5. Return `(left + right) / 2`

### **Keywords:**
- 🔙 **early return** — tidak ada `else` setelah return
- 📦 **destructuring** `[left, right]` — unpack ke variabel bernama
- 📖 **self-documenting** — `left`/`right` lebih jelas dari index
- ⏱️ **O(n log n)** time, **O(n)** space

### **Kapan Pakai:**
- ✅ Tim yang memprioritaskan readability
- ✅ Nilai tengah dipakai lebih dari sekali
- ❌ Nilai tengah hanya dipakai sekali — langsung saja

**Test Result:** 16/16 ✅ PASS

---

## 🔄 Alternatif 3 — AI Sebelah

> 💡 **Karakteristik:** Naming paling deskriptif, best untuk production

```javascript
const findMedian = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b)
  const totalNumbers = sortedNumbers.length
  const middleIndex = Math.floor(totalNumbers / 2)

  if (totalNumbers % 2 !== 0) {
    return sortedNumbers[middleIndex]
  }

  const leftMiddle = sortedNumbers[middleIndex - 1]
  const rightMiddle = sortedNumbers[middleIndex]

  return (leftMiddle + rightMiddle) / 2
}
```

### **Konsep Inti:**
Gabungan early return + naming paling deskriptif + variabel eksplisit untuk dua nilai tengah.

### **Step-by-Step:**
1. Copy & sort — sama
2. Hitung `totalNumbers` dan `middleIndex`
3. Ganjil → **early return** `sortedNumbers[middleIndex]`
4. Deklarasi `leftMiddle` dan `rightMiddle`
5. Return `(leftMiddle + rightMiddle) / 2`

### **Keywords:**
- 🏷️ **descriptive naming** — `totalNumbers`, `middleIndex`, `leftMiddle`, `rightMiddle`
- 🔙 **early return** — tidak ada `else`
- 📖 **self-documenting** — bisa dibaca seperti kalimat
- ⏱️ **O(n log n)** time, **O(n)** space

### **Pitfalls:**
```javascript
// ⚠️ Tidak ada JSDoc — tambahkan untuk production
const findMedian = (numbers) => { ... }
```

### **Kapan Pakai:**
- ✅ Readability adalah prioritas utama
- ✅ Kode dibaca banyak orang / tim besar
- ✅ **Versi terbaik untuk production!**

**Test Result:** 16/16 ✅ PASS

---

## 📊 Perbandingan Lengkap

| Aspek | Original | Refactoring | Alt 1 Ternary | Alt 2 Destructuring | Alt 3 AI Sebelah |
|-------|:--------:|:-----------:|:-------------:|:-------------------:|:----------------:|
| **Mutasi array** | ❌ | ✅ | ✅ | ✅ | ✅ |
| **Dead code** | ❌ | ✅ | ✅ | ✅ | ✅ |
| **English naming** | ❌ | ✅ | ✅ | ✅ | ✅ |
| **JSDoc** | ❌ | ✅ | ✅ | ✅ | ❌ |
| **Early return** | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Descriptive naming** | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Ringkas** | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Readability** | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Time Complexity** | O(n log n) | O(n log n) | O(n log n) | O(n log n) | O(n log n) |
| **Space Complexity** | O(n) | O(n) | O(n) | O(n) | O(n) |
| **Best For** | — | Umum | Kode ringkas | Kolaborasi | **Production** |

> **Catatan:** Semua versi memiliki kompleksitas yang sama — perbedaannya hanya pada gaya penulisan dan kualitas kode.

---

## 🎯 Decision Guide

### **Mau belajar step-by-step?**
→ Pakai **Kode Refactoring** — paling mudah dipahami, ada JSDoc

### **Mau kode paling ringkas?**
→ Pakai **Alt 1 Ternary** — satu baris return, minimal kode

### **Mau kode paling ekspresif?**
→ Pakai **Alt 2 Destructuring** — `left` dan `right` sangat jelas

### **Mau kode terbaik untuk production?**
→ Pakai **Alt 3 AI Sebelah** + tambahkan JSDoc — naming terbaik, early return

---

## 🎯 Decision Tree

```
Prioritas utama kamu apa?

Ringkas & minimal?
└─ YES → Alt 1 Ternary

Readability untuk tim?
├─ Nama variabel jelas → Alt 2 Destructuring
└─ Nama paling deskriptif → Alt 3 AI Sebelah (+ tambah JSDoc)

Belajar & mudah dipahami?
└─ YES → Kode Refactoring Final
```

---

## 🧪 Test Semua Versi

```javascript
const findMedianRefactoring = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b)
  const length = sortedNumbers.length
  const mid = Math.floor(length / 2)
  if (length % 2 !== 0) return sortedNumbers[mid]
  else return (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
}

const findMedianTernary = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b)
  const length = sortedNumbers.length
  const mid = Math.floor(length / 2)
  return length % 2 !== 0
    ? sortedNumbers[mid]
    : (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
}

const findMedianDestructuring = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b)
  const length = sortedNumbers.length
  const mid = Math.floor(length / 2)
  if (length % 2 !== 0) return sortedNumbers[mid]
  const [left, right] = [sortedNumbers[mid - 1], sortedNumbers[mid]]
  return (left + right) / 2
}

const findMedianAI = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b)
  const totalNumbers = sortedNumbers.length
  const middleIndex = Math.floor(totalNumbers / 2)
  if (totalNumbers % 2 !== 0) return sortedNumbers[middleIndex]
  const leftMiddle = sortedNumbers[middleIndex - 1]
  const rightMiddle = sortedNumbers[middleIndex]
  return (leftMiddle + rightMiddle) / 2
}

const testCases = [
  { input: [[1, 2, 3, 4, 5]], expected: 3 },
  { input: [[1, 3, 4, 10, 12, 13]], expected: 7 },
  { input: [[7, 7, 8, 8]], expected: 7.5 },
]

const runTest = (fn, label) => {
  console.log(`\n=== ${label} ===`)
  testCases.forEach(({ input, expected }, index) => {
    const result = fn(input[0])
    console.log(`Test #${index + 1}: ${result === expected ? '✅ PASS' : '❌ FAIL'}`)
  })
}

runTest(findMedianRefactoring, 'Refactoring')
runTest(findMedianTernary, 'Alt 1 Ternary')
runTest(findMedianDestructuring, 'Alt 2 Destructuring')
runTest(findMedianAI, 'Alt 3 AI Sebelah')
```

**Output:**
```
=== Refactoring ===
Test #1: ✅ PASS
Test #2: ✅ PASS
Test #3: ✅ PASS

=== Alt 1 Ternary ===
Test #1: ✅ PASS
Test #2: ✅ PASS
Test #3: ✅ PASS

=== Alt 2 Destructuring ===
Test #1: ✅ PASS
Test #2: ✅ PASS
Test #3: ✅ PASS

=== Alt 3 AI Sebelah ===
Test #1: ✅ PASS
Test #2: ✅ PASS
Test #3: ✅ PASS
```

---

## 🧮 Pseudocode Perbandingan

### **Refactoring & Alt 1 (Ternary):**
```
COPY dan SORT numbers
HITUNG mid = FLOOR(length / 2)
IF ganjil → RETURN sortedNumbers[mid]
ELSE → RETURN rata-rata dua tengah
```

### **Alt 2 (Destructuring):**
```
COPY dan SORT numbers
HITUNG mid = FLOOR(length / 2)
IF ganjil → EARLY RETURN sortedNumbers[mid]
UNPACK [left, right]
RETURN (left + right) / 2
```

### **Alt 3 (AI Sebelah):**
```
COPY dan SORT numbers
HITUNG middleIndex = FLOOR(totalNumbers / 2)
IF ganjil → EARLY RETURN sortedNumbers[middleIndex]
SIMPAN leftMiddle dan rightMiddle
RETURN (leftMiddle + rightMiddle) / 2
```

---

## 💡 Mnemonic

### **Refactoring: "C-S-M-C"**
**C**opy → **S**ort → **M**id → **C**heck ganjil/genap

### **Alt 1 Ternary: "C-S-M-T"**
**C**opy → **S**ort → **M**id → **T**ernary

### **Alt 2 Destructuring: "C-S-M-E-D"**
**C**opy → **S**ort → **M**id → **E**arly return → **D**estructure

### **Alt 3 AI Sebelah: "C-S-M-E-N"**
**C**opy → **S**ort → **M**iddleIndex → **E**arly return → **N**amed variables

---

## 💡 Key Takeaways

> **Algoritma Sama, Gaya Berbeda**
> Semua versi punya logika & kompleksitas identik — yang berbeda hanya cara penulisan

> **Early Return = Best Practice**
> Hindari `else` setelah `return` — kode lebih bersih dan mudah dibaca

> **Naming yang Baik = Dokumentasi Gratis**
> `leftMiddle` lebih jelas dari `sortedNumbers[mid - 1]`

> **Tidak Ada yang Terbaik Universal**
> Pilih sesuai konteks dan kebutuhan tim

> **Refactoring Itu Proses**
> Dari kode yang benar → ke kode yang benar DAN bersih

---

## 🔗 Navigasi

- **[← README](../README.md)**
- **[← Part 4: Alternatif Solusi](part-4-alternatif-solusi.md)**

---

<div>

## 🎉 Selesai!

**Kamu sudah menyelesaikan Median - Complete Learning Guide!**

**Yang sudah dipelajari:**
- ✅ Evaluasi kode original
- ✅ Refactoring 4 tahap
- ✅ Memahami algoritma median
- ✅ 3 alternatif implementasi
- ✅ Perbandingan & decision guide

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
