# 🎯 Part 4 — Alternatif Solusi

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║              🎯 PART 4 — ALTERNATIF SOLUSI 🎯                   ║
║                                                                  ║
║         3 Variasi Kode + Analisis & Ringkasan Algoritma          ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔄 Alt 1 | 🔄 Alt 2 | 🔄 Alt 3 | 📊 Perbandingan | 💡 Takeaways |
|:--------:|:--------:|:--------:|:---------------:|:------------:|
| [Jump](#-alternatif-1--ternary-operator) | [Jump](#-alternatif-2--destructuring-assignment) | [Jump](#-alternatif-3--kode-ai-sebelah) | [Jump](#-perbandingan-keseluruhan) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Mengenal 3 variasi implementasi median
- ✅ Memahami konsep & algoritma tiap alternatif
- ✅ Mengetahui pitfalls tiap pendekatan
- ✅ Tahu kapan harus pakai masing-masing

---

## 🔄 Alternatif 1 — Ternary Operator

> 💡 **Best for:** Kode ringkas, familiar dengan ternary

### **Kode:**
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
Sama persis dengan kode refactoring — hanya `if-else` diganti dengan ternary `? :` sehingga menjadi satu baris return.

### **Step-by-Step:**
1. Copy & sort array — sama dengan kode final
2. Hitung `length` dan `mid` — sama dengan kode final
3. Evaluasi kondisi dengan ternary:
   - `condition ? valueIfTrue : valueIfFalse`
   - Ganjil (`true`) → return `sortedNumbers[mid]`
   - Genap (`false`) → return rata-rata dua tengah

### **Keywords:**
- ❓ **ternary operator** `? :` — pengganti if-else
- 🔁 **single return** — hanya satu titik keluar fungsi
- ⏱️ **O(n log n)** time, **O(n)** space — sama dengan kode final

### **Pitfalls:**
```javascript
// ❌ Ternary terlalu panjang — susah dibaca
return length % 2 !== 0 ? sortedNumbers[mid] : (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2

// ✅ Pisah ke dua baris — lebih readable
return length % 2 !== 0
  ? sortedNumbers[mid]
  : (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
```

### **Kapan Pakai:**
- ✅ Kondisi sederhana dengan dua pilihan return
- ✅ Tim sudah familiar dengan ternary
- ❌ Kondisi yang kompleks atau nested — gunakan if-else biasa

**Test Result:** 16/16 ✅ PASS

---

## 🔄 Alternatif 2 — Destructuring Assignment

> 💡 **Best for:** Kode ekspresif, mudah dibaca tim

### **Kode:**
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
Pakai **early return** untuk kasus ganjil, lalu destructure dua nilai tengah ke variabel bernama `left` dan `right` untuk kasus genap.

### **Step-by-Step:**
1. Copy & sort array — sama dengan kode final
2. Hitung `length` dan `mid` — sama dengan kode final
3. Jika ganjil → **early return** langsung, tidak lanjut ke bawah
4. Jika genap → destructure dua nilai tengah:
   - `left` = `sortedNumbers[mid - 1]`
   - `right` = `sortedNumbers[mid]`
5. Return rata-rata `(left + right) / 2`

### **Keywords:**
- 🔙 **early return** — return di tengah fungsi tanpa `else`
- 📦 **destructuring** `[left, right] = [...]` — unpack nilai ke variabel bernama
- 📖 **self-documenting** — `left` dan `right` lebih jelas dari `mid-1` dan `mid`
- ⏱️ **O(n log n)** time, **O(n)** space — sama dengan kode final

### **Pitfalls:**
```javascript
// ❌ Destructuring tidak perlu jika hanya dipakai sekali
const [left, right] = [sortedNumbers[mid - 1], sortedNumbers[mid]]
return (left + right) / 2

// Boleh juga langsung (tergantung preferensi readability tim)
return (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
```

### **Kapan Pakai:**
- ✅ Ingin memberi nama eksplisit pada nilai tengah
- ✅ Tim yang memprioritaskan readability
- ✅ Ketika nilai tengah dipakai lebih dari sekali
- ❌ Jika nilai tengah hanya dipakai sekali — langsung saja tanpa destructuring

**Test Result:** 16/16 ✅ PASS

---

## 🔄 Alternatif 3 — Kode AI Sebelah

> 💡 **Best for:** Kombinasi terbaik dari semua pendekatan

### **Kode:**
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
Gabungan early return pattern + naming paling deskriptif + dua variabel eksplisit untuk nilai tengah genap.

### **Step-by-Step:**
1. Copy & sort array
2. Hitung `totalNumbers` — lebih deskriptif dari `length`
3. Hitung `middleIndex` — lebih deskriptif dari `mid`
4. Jika ganjil → **early return** `sortedNumbers[middleIndex]`
5. Deklarasi `leftMiddle` dan `rightMiddle` — nama paling eksplisit
6. Return `(leftMiddle + rightMiddle) / 2`

### **Keywords:**
- 🏷️ **descriptive naming** — `totalNumbers`, `middleIndex`, `leftMiddle`, `rightMiddle`
- 🔙 **early return** — tidak ada `else` setelah `if` yang return
- 📖 **self-documenting code** — bisa dibaca seperti kalimat
- ⏱️ **O(n log n)** time, **O(n)** space — sama dengan kode final

### **Yang Lebih Baik dari Kode Kita:**

| Aspek | Kode Kita | Kode AI Sebelah |
|-------|-----------|-----------------|
| Nama length | `length` | `totalNumbers` ✅ lebih jelas |
| Nama index | `mid` | `middleIndex` ✅ lebih jelas |
| Nama nilai tengah | tidak ada | `leftMiddle`, `rightMiddle` ✅ lebih jelas |
| Early return | ❌ pakai `else` | ✅ tidak pakai `else` |

### **Pitfalls:**
```javascript
// ⚠️ Tidak ada JSDoc — perlu ditambahkan untuk production
const findMedian = (numbers) => { ... }

// ✅ Lengkap dengan JSDoc
/**
 * Finds the median value of an array of numbers.
 * @param {number[]} numbers - An array of numbers (unsorted is fine)
 * @returns {number} The median value of the array
 */
const findMedian = (numbers) => { ... }
```

### **Kapan Pakai:**
- ✅ Ketika readability adalah prioritas utama
- ✅ Kode yang akan dibaca banyak orang / tim besar
- ✅ **Versi terbaik untuk production!**

**Test Result:** 16/16 ✅ PASS

---

## 📊 Perbandingan Keseluruhan

| Aspek | Kode Final (Kita) | Alt 1 Ternary | Alt 2 Destructuring | Alt 3 AI Sebelah |
|-------|:-----------------:|:-------------:|:-------------------:|:----------------:|
| **Naming** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Readability** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Ringkas** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Early Return** | ❌ | ❌ | ✅ | ✅ |
| **JSDoc** | ✅ | ✅ | ✅ | ❌ |
| **Time Complexity** | O(n log n) | O(n log n) | O(n log n) | O(n log n) |
| **Space Complexity** | O(n) | O(n) | O(n) | O(n) |
| **Best For** | Umum | Kode ringkas | Kolaborasi | Production |

> **Catatan:** Semua alternatif memiliki kompleksitas yang sama — perbedaannya hanya pada gaya penulisan.

---

## 🧪 Test Semua Versi

```javascript
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

runTest(findMedianTernary, 'Alt 1 — Ternary')
runTest(findMedianDestructuring, 'Alt 2 — Destructuring')
runTest(findMedianAI, 'Alt 3 — AI Sebelah')
```

**Output:**
```
=== Alt 1 — Ternary ===
Test #1: ✅ PASS
Test #2: ✅ PASS
Test #3: ✅ PASS

=== Alt 2 — Destructuring ===
Test #1: ✅ PASS
Test #2: ✅ PASS
Test #3: ✅ PASS

=== Alt 3 — AI Sebelah ===
Test #1: ✅ PASS
Test #2: ✅ PASS
Test #3: ✅ PASS
```

---

## 💡 Mnemonic

### **Alt 1 Ternary: "C-S-M-T"**
**C**opy → **S**ort → **M**id → **T**ernary satu baris

### **Alt 2 Destructuring: "C-S-M-E-D"**
**C**opy → **S**ort → **M**id → **E**arly return → **D**estructure `[left, right]`

### **Alt 3 AI Sebelah: "C-S-M-E-N"**
**C**opy → **S**ort → **M**iddleIndex → **E**arly return → **N**amed variables

---

## 🧮 Pseudocode Perbandingan

### **Kode Final & Alt 1 (Ternary):**
```
COPY dan SORT numbers
HITUNG mid = FLOOR(length / 2)
IF ganjil RETURN sortedNumbers[mid]
ELSE RETURN rata-rata dua tengah
```

### **Alt 2 (Destructuring):**
```
COPY dan SORT numbers
HITUNG mid = FLOOR(length / 2)
IF ganjil → EARLY RETURN sortedNumbers[mid]
UNPACK [left, right] dari dua nilai tengah
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

## 💡 Key Takeaways

> **Algoritma Sama, Gaya Berbeda**
> Keempat versi punya logika & kompleksitas yang identik — yang berbeda hanya cara penulisannya

> **Ternary = Ringkas tapi Perlu Familiar**
> Bagus untuk kondisi sederhana, tapi bisa membingungkan jika kondisinya panjang

> **Early Return = Best Practice**
> Hindari `else` setelah `return` — kode lebih bersih dan mudah dibaca

> **Naming yang Baik = Dokumentasi Gratis**
> `leftMiddle` lebih jelas dari `sortedNumbers[mid - 1]` — tidak perlu komentar tambahan

> **Pilih Sesuai Konteks**
> Tidak ada yang "terbaik" secara universal — sesuaikan dengan kebutuhan tim

---

## 🔗 Navigasi

- **[← README](../README.md)**
- **[← Part 3: Ringkasan Algoritma](part-3-ringkasan-algoritma.md)**
- **[→ Part 5: Perbandingan Keseluruhan](part-5-perbandingan.md)**

---

<div align="center">

**Siap lihat perbandingan keseluruhan di Part 5?**

Made with ❤️ for learners

</div>
