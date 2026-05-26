# 📊 Part 3 — Ringkasan Algoritma

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║           📊 PART 3 — RINGKASAN ALGORITMA 📊                    ║
║                                                                  ║
║         Alur Kerja, Trace Execution & Kompleksitas               ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-5%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 💡 Kode Final | 🔍 Alur Kerja | 🔎 Trace Execution | 📊 Kompleksitas | 💡 Takeaways |
|:-------------:|:-------------:|:-----------------:|:---------------:|:------------:|
| [Jump](#-kode-final) | [Jump](#-alur-kerja) | [Jump](#-trace-execution) | [Jump](#-kompleksitas) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Memahami alur kerja kode final step-by-step
- ✅ Trace execution untuk ganjil, genap & tidak terurut
- ✅ Memahami kompleksitas waktu & ruang
- ✅ Pitfalls yang perlu dihindari

---

## 💡 Kode Final

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
Copy array → Sort ascending → Hitung index tengah → Return nilai tengah (atau rata-rata dua tengah).

---

## 🔍 Alur Kerja

### **Step-by-Step:**
1. Buat salinan array dengan `[...numbers]` — array asli tidak berubah
2. Sort salinan array dari kecil ke besar
3. Hitung `length` — jumlah elemen
4. Hitung `mid` — index tengah dengan `Math.floor(length / 2)`
5. Cek ganjil/genap dengan `length % 2`
6. Ganjil → return `sortedNumbers[mid]`
7. Genap → return rata-rata `sortedNumbers[mid - 1]` dan `sortedNumbers[mid]`

### **Keywords:**
- 📋 **spread operator** `[...numbers]` — copy array
- 🔢 **`.sort((a, b) => a - b)`** — sort ascending
- 🧮 **`Math.floor(length / 2)`** — index tengah berbasis 0
- ➗ **`length % 2`** — cek ganjil/genap
- ↩️ **early return** — langsung return tanpa `else` yang nested

---

## 🔎 Trace Execution

### **Contoh 1 — Array Ganjil**

```
Input: [3, 4, 7, 6, 10]

Step 1 — Copy & Sort:
  [...numbers] = [3, 4, 7, 6, 10]
  .sort()      = [3, 4, 6, 7, 10]

Step 2 — Hitung index:
  length = 5
  mid    = Math.floor(5 / 2) = 2

Step 3 — Cek kondisi:
  5 % 2 !== 0 → true (GANJIL)
  return sortedNumbers[2] = 6

Output: 6 ✅
```

---

### **Contoh 2 — Array Genap**

```
Input: [1, 3, 4, 10, 12, 13]

Step 1 — Copy & Sort:
  [...numbers] = [1, 3, 4, 10, 12, 13]
  .sort()      = [1, 3, 4, 10, 12, 13]  (sudah terurut)

Step 2 — Hitung index:
  length = 6
  mid    = Math.floor(6 / 2) = 3

Step 3 — Cek kondisi:
  6 % 2 !== 0 → false (GENAP)
  sortedNumbers[mid - 1] = sortedNumbers[2] = 4
  sortedNumbers[mid]     = sortedNumbers[3] = 10
  return (4 + 10) / 2 = 7

Output: 7 ✅
```

---

### **Contoh 3 — Array Tidak Terurut**

```
Input: [10, 2, 5, 1, 7]

Step 1 — Copy & Sort:
  [...numbers] = [10, 2, 5, 1, 7]
  .sort()      = [1, 2, 5, 7, 10]  ← diurutkan dulu

Step 2 — Hitung index:
  length = 5
  mid    = Math.floor(5 / 2) = 2

Step 3 — Cek kondisi:
  5 % 2 !== 0 → true (GANJIL)
  return sortedNumbers[2] = 5

Output: 5 ✅
```

---

## 🧮 Pseudocode

```
FUNCTION findMedian(numbers):

  sortedNumbers = COPY_AND_SORT(numbers)
  length        = LENGTH(sortedNumbers)
  mid           = FLOOR(length / 2)

  IF length MOD 2 ≠ 0:
    RETURN sortedNumbers[mid]
  ELSE:
    RETURN (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2

END FUNCTION
```

---

## ⚠️ Pitfalls

```javascript
// ❌ Sort tanpa copy — mutasi array asli
const sortedNumbers = numbers.sort((a, b) => a - b)

// ✅ Selalu copy dulu
const sortedNumbers = [...numbers].sort((a, b) => a - b)
```

```javascript
// ❌ Sort tanpa comparator — hasilnya salah untuk angka!
numbers.sort()
// [1, 10, 2, 20] ← salah, sort sebagai string

// ✅ Pakai comparator (a, b) => a - b
numbers.sort((a, b) => a - b)
// [1, 2, 10, 20] ← benar
```

```javascript
// ❌ Hitung index dengan cara lama — butuh banyak variabel
const middle1 = length / 2
const middle2 = (length / 2) + 1
const val1 = sortedNumbers[middle1 - 1]
const val2 = sortedNumbers[middle2 - 1]

// ✅ Math.floor() langsung sebagai index
const mid = Math.floor(length / 2)
sortedNumbers[mid - 1]
sortedNumbers[mid]
```

---

## 📊 Kompleksitas

| | Kompleksitas | Penjelasan |
|---|---|---|
| **Time** | O(n log n) | Didominasi oleh `.sort()` yang pakai TimSort |
| **Space** | O(n) | `[...numbers]` membuat salinan seluruh array |

**Kenapa O(n log n)?**
JavaScript `.sort()` menggunakan **TimSort** di balik layar — algoritma hybrid yang optimal untuk data dunia nyata dengan kompleksitas O(n log n).

**Kenapa O(n) space?**
Spread operator `[...numbers]` membuat salinan baru seluruh array, sehingga membutuhkan ruang memori sebesar n elemen.

---

## 💡 Mnemonic: "C-S-C-R"

**C**opy → `[...numbers]`
**S**ort → `.sort((a, b) => a - b)`
**C**heck → `length % 2`
**R**eturn → nilai tengah atau rata-rata

---

## 💡 Key Takeaways

> **Sort Dulu, Baru Cari**
> Median hanya bisa dicari setelah data diurutkan

> **Spread = Aman**
> `[...numbers]` memastikan array asli tidak pernah berubah

> **Math.floor() = Index Langsung**
> Tidak perlu hitung manual — langsung jadi index berbasis 0

> **Comparator Wajib**
> `.sort()` tanpa `(a, b) => a - b` akan sort sebagai string — hasilnya salah!

> **Ganjil vs Genap**
> Satu-satunya perbedaan: ganjil ambil satu nilai, genap rata-ratakan dua nilai

---

## 🔗 Navigasi

- **[← README](../README.md)**
- **[← Part 2: Proses Refactoring](part-2-refactoring.md)**
- **[→ Part 4: Alternatif Solusi](part-4-alternatif-solusi.md)**

---

<div align="center">

**Siap lihat alternatif solusi di Part 4?**

Made with ❤️ for learners

</div>
