# 📋 Ringkasan Algoritma — Semua Versi

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║           📋 RINGKASAN ALGORITMA — SEMUA VERSI 📋               ║
║                                                                  ║
║    4 Versi: Refactoring, Ternary, Destructuring & AI Sebelah     ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)

---

## 🎯 Tujuan

- ✅ Ringkasan semua versi dalam satu halaman
- ✅ Memahami trade-offs masing-masing
- ✅ Pitfalls & insight penting tiap versi
- ✅ Quick reference untuk review

---

## ✅ Versi 1: Kode Refactoring Final

> 💡 **Best for:** Belajar, referensi clean code, penggunaan umum

### **Kode:**
<details>
<summary> Lihat Kode (klik untuk expand) </summary>

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

</details>

### **Konsep Inti:**
```
Copy array dulu dengan spread operator
Sort ascending dengan comparator
Hitung mid dengan Math.floor
Ganjil → return nilai tengah
Genap → return rata-rata dua nilai tengah
```

### **Step-by-Step (Detail):**
1. **Copy array:** `[...numbers]` — buat salinan, array asli tidak berubah
2. **Sort ascending:** `.sort((a, b) => a - b)`
3. **Hitung length:** jumlah elemen `sortedNumbers`
4. **Hitung mid:** `Math.floor(length / 2)` — index tengah berbasis 0
5. **Cek ganjil:** `length % 2 !== 0` → return `sortedNumbers[mid]`
6. **Cek genap:** return `(sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2`

### **Keywords:**
- 📋 **spread** `[...numbers]` — copy array tanpa mutasi
- 🧮 **Math.floor** — bulatkan ke bawah jadi index
- ➗ **length % 2** — cek ganjil/genap
- 📝 **JSDoc** — dokumentasi otomatis di IDE
- ⏱️ **O(n log n)** time, **O(n)** space

### **Kapan Pakai:**
- ✅ Penggunaan umum & belajar
- ✅ Kode yang butuh JSDoc lengkap
- ✅ Saat readability adalah prioritas

### **Pitfalls (Jebakan Umum):**

**1) ❌ Sort tanpa copy — mutasi array asli**
```javascript
// ❌ SALAH — array asli ikut berubah!
const sortedNumbers = numbers.sort((a, b) => a - b)

const arr = [3, 1, 2]
findMedian(arr)
console.log(arr) // [1, 2, 3] ← harusnya tetap [3, 1, 2]

// ✅ BENAR — copy dulu
const sortedNumbers = [...numbers].sort((a, b) => a - b)
```

**2) ❌ Sort tanpa comparator**
```javascript
// ❌ SALAH — sort sebagai string!
sortedNumbers.sort()
// [1, 10, 2, 20] ← salah!

// ✅ BENAR — pakai comparator
sortedNumbers.sort((a, b) => a - b)
// [1, 2, 10, 20] ← benar
```

**3) ❌ Pakai else setelah return**
```javascript
// ⚠️ Boleh tapi bukan best practice
if (length % 2 !== 0) {
  return sortedNumbers[mid]
} else {                       // ← else tidak diperlukan
  return (...)
}

// ✅ Early return lebih clean
if (length % 2 !== 0) {
  return sortedNumbers[mid]
}
return (...)
```

### **💡 Insight Penting:**

> **Kenapa Math.floor(length / 2)?**
>
> Array berbasis 0, jadi index tengah dihitung langsung:
>
> Ganjil → length=5, mid=2, `sorted[2]` = elemen ke-3 ✅
> Genap → length=6, mid=3, `sorted[2]` dan `sorted[3]` = dua nilai tengah ✅
>
> Tidak perlu manual `(length + 1) / 2` lalu `- 1` lagi!

---

## 🔄 Versi 2: Ternary Operator

> 💡 **Best for:** Kode ringkas, satu baris return

### **Kode:**
<details>
<summary> Lihat Kode (klik untuk expand) </summary>

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

</details>

### **Konsep Inti:**
```
Identik dengan Versi 1
Hanya if-else diganti ternary ? :
Satu titik return di akhir fungsi
```

### **Step-by-Step (Detail):**
1. Copy, sort, hitung mid — **sama persis dengan Versi 1**
2. Evaluasi ternary:
   - Format: `condition ? valueIfTrue : valueIfFalse`
   - Ganjil (`true`) → `sortedNumbers[mid]`
   - Genap (`false`) → `(sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2`

### **Keywords:**
- ❓ **ternary** `? :` — pengganti if-else
- 🔁 **single return** — satu titik keluar fungsi
- ⏱️ **O(n log n)** time, **O(n)** space

### **Perbedaan dari Versi 1:**
```diff
- if (length % 2 !== 0) {
-   return sortedNumbers[mid]
- } else {
-   return (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
- }
+ return length % 2 !== 0
+   ? sortedNumbers[mid]
+   : (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
```

**Hanya bagian return yang berubah!**

### **Kapan Pakai:**
- ✅ Kondisi sederhana dengan dua pilihan
- ✅ Tim yang sudah familiar dengan ternary
- ❌ Kondisi panjang atau kompleks — gunakan if-else

### **Pitfalls (Jebakan Umum):**

**1) ❌ Semua dalam satu baris — susah dibaca**
```javascript
// ❌ SALAH — terlalu panjang
return length % 2 !== 0 ? sortedNumbers[mid] : (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2

// ✅ BENAR — pisah dua baris
return length % 2 !== 0
  ? sortedNumbers[mid]
  : (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
```

**2) ❌ Nested ternary — hindari!**
```javascript
// ❌ SALAH — sangat susah dibaca
return a ? b ? c : d : e

// ✅ BENAR — pakai if-else jika kondisi nested
if (a) {
  return b ? c : d
}
return e
```

### **💡 Insight Penting:**

> **Ternary Bukan Selalu Lebih Baik**
>
> Gunakan ternary hanya jika kondisi dan kedua nilainya pendek & jelas.
> Jika ternary-nya harus dipanjangkan, if-else jauh lebih readable.

---

## 🔄 Versi 3: Destructuring Assignment

> 💡 **Best for:** Readability tinggi, kolaborasi tim

### **Kode:**
<details>
<summary> Lihat Kode (klik untuk expand) </summary>

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

</details>

### **Konsep Inti:**
```
Early return untuk kasus ganjil (tanpa else)
Destructure dua nilai tengah ke left & right
Return rata-rata left dan right
```

### **Step-by-Step (Detail):**
1. Copy, sort, hitung mid — **sama dengan Versi 1**
2. Ganjil → **early return** langsung, tidak lanjut ke bawah
3. Genap → destructure dua nilai tengah:
   - `left` = `sortedNumbers[mid - 1]`
   - `right` = `sortedNumbers[mid]`
4. Return `(left + right) / 2`

### **Keywords:**
- 🔙 **early return** — tidak ada `else` setelah return
- 📦 **destructuring** `[left, right]` — unpack ke variabel bernama
- 📖 **self-documenting** — lebih jelas dari index langsung
- ⏱️ **O(n log n)** time, **O(n)** space

### **Visualisasi Destructuring:**

```
Array genap: [1, 3, 4, 10, 12, 13]
Index:        0  1  2   3   4   5

mid = Math.floor(6 / 2) = 3

sortedNumbers[mid - 1] = sortedNumbers[2] = 4   → left
sortedNumbers[mid]     = sortedNumbers[3] = 10  → right

[left, right] = [4, 10]
return (4 + 10) / 2 = 7 ✅
```

### **Kapan Pakai:**
- ✅ Tim memprioritaskan readability
- ✅ Nilai tengah dipakai lebih dari sekali
- ❌ Nilai tengah hanya dipakai sekali — langsung saja tanpa destructuring

### **Pitfalls (Jebakan Umum):**

**1) ❌ Destructuring tidak perlu jika hanya dipakai sekali**
```javascript
// ⚠️ Overkill untuk sekali pakai
const [left, right] = [sortedNumbers[mid - 1], sortedNumbers[mid]]
return (left + right) / 2

// Alternatif lebih ringkas
return (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
```

**2) ❌ Urutan destructuring terbalik**
```javascript
// ❌ SALAH — right < left (terbalik!)
const [right, left] = [sortedNumbers[mid - 1], sortedNumbers[mid]]

// ✅ BENAR — left < right (sesuai urutan ascending)
const [left, right] = [sortedNumbers[mid - 1], sortedNumbers[mid]]
```

### **💡 Insight Penting:**

> **Early Return = Hilangkan Nesting**
>
> Setelah `if (...) return`, kode di bawahnya sudah implisit "else".
> Tidak perlu blok `else` eksplisit — kode lebih flat dan mudah dibaca.

---

## 🚀 Versi 4: AI Sebelah (Terbaik)

> 💡 **Best for:** Production, tim besar, readability maksimal

### **Kode:**
<details>
<summary> Lihat Kode (klik untuk expand) </summary>

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

</details>

### **Konsep Inti:**
```
Naming paling deskriptif dari semua versi
Early return untuk ganjil (tanpa else)
Variabel eksplisit untuk dua nilai tengah
Bisa dibaca seperti kalimat biasa
```

### **Step-by-Step (Detail):**
1. Copy & sort — sama dengan versi lain
2. `totalNumbers` — lebih deskriptif dari `length`
3. `middleIndex` — lebih deskriptif dari `mid`
4. Ganjil → **early return** `sortedNumbers[middleIndex]`
5. `leftMiddle` = `sortedNumbers[middleIndex - 1]`
6. `rightMiddle` = `sortedNumbers[middleIndex]`
7. Return `(leftMiddle + rightMiddle) / 2`

### **Keywords:**
- 🏷️ **descriptive naming** — `totalNumbers`, `middleIndex`, `leftMiddle`, `rightMiddle`
- 🔙 **early return** — tidak ada `else`
- 📖 **self-documenting** — bisa dibaca seperti kalimat
- ⏱️ **O(n log n)** time, **O(n)** space

### **Visualisasi Naming:**

```
Array: [1, 3, 4, 10, 12, 13]  → totalNumbers = 6

middleIndex = Math.floor(6 / 2) = 3

sortedNumbers[middleIndex - 1] = sortedNumbers[2] = 4   → leftMiddle
sortedNumbers[middleIndex]     = sortedNumbers[3] = 10  → rightMiddle

return (4 + 10) / 2 = 7 ✅
```

### **Perbandingan Naming dengan Versi 1:**

| Variabel | Versi 1 | Versi 4 (AI) | Lebih Baik? |
|----------|---------|--------------|:-----------:|
| Panjang array | `length` | `totalNumbers` | Versi 4 ✅ |
| Index tengah | `mid` | `middleIndex` | Versi 4 ✅ |
| Nilai kiri | tidak ada | `leftMiddle` | Versi 4 ✅ |
| Nilai kanan | tidak ada | `rightMiddle` | Versi 4 ✅ |
| Pattern | `if/else` | early return | Versi 4 ✅ |

### **Kapan Pakai:**
- ✅ Production code
- ✅ Tim besar / kolaborasi
- ✅ Readability adalah prioritas utama
- ⚠️ Tambahkan JSDoc untuk lengkap

### **Pitfalls (Jebakan Umum):**

**1) ⚠️ Tidak ada JSDoc**
```javascript
// ⚠️ Kurang lengkap untuk production
const findMedian = (numbers) => { ... }

// ✅ Tambahkan JSDoc
/**
 * Finds the median value of an array of numbers.
 * @param {number[]} numbers - An array of numbers (unsorted is fine)
 * @returns {number} The median value of the array
 */
const findMedian = (numbers) => { ... }
```

### **💡 Insight Penting:**

> **Naming yang Baik = Dokumentasi Gratis**
>
> `leftMiddle` jauh lebih jelas dari `sortedNumbers[mid - 1]`.
> Pembaca tidak perlu berpikir ekstra — nama sudah menjelaskan tujuannya.

---

## 📊 Perbandingan Lengkap

| Aspek | V1 Refactoring | V2 Ternary | V3 Destructuring | V4 AI Sebelah |
|-------|:--------------:|:----------:|:----------------:|:-------------:|
| **JSDoc** | ✅ | ✅ | ✅ | ⚠️ perlu tambah |
| **Early return** | ❌ | ❌ | ✅ | ✅ |
| **Descriptive naming** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Ringkas** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Readability** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Time Complexity** | O(n log n) | O(n log n) | O(n log n) | O(n log n) |
| **Space Complexity** | O(n) | O(n) | O(n) | O(n) |
| **Best For** | Umum / Belajar | Ringkas | Kolaborasi | **Production** |

> **Catatan:** Semua versi memiliki kompleksitas yang sama — perbedaannya hanya gaya penulisan dan kualitas kode.

---

## 🎯 Decision Tree

```
Kode ini untuk apa?

Belajar / referensi?
└─ YES → Versi 1 (Refactoring)

Mau paling ringkas?
└─ YES → Versi 2 (Ternary)

Readability untuk tim?
├─ Nama variabel jelas → Versi 3 (Destructuring)
└─ Nama paling deskriptif → Versi 4 (AI Sebelah) + tambah JSDoc

Default production?
└─ Versi 4 (AI Sebelah) + JSDoc ✅
```

---

## 💡 Mnemonic: "C-S-M"

Untuk mengingat struktur algoritma di semua versi:

```
C = Copy array ([...numbers])
S = Sort ascending (.sort((a, b) => a - b))
M = Mid index (Math.floor(length / 2))
```

Setelah **C-S-M**, tinggal cek ganjil/genap dan return nilainya.

### **Per Versi:**

| Versi | Mnemonic | Ciri Khas |
|-------|----------|-----------|
| **V1 Refactoring** | C-S-M → `if/else` | Paling standar, ada JSDoc |
| **V2 Ternary** | C-S-M → `? :` | Satu baris return |
| **V3 Destructuring** | C-S-M → early return → `[left, right]` | Nama eksplisit |
| **V4 AI Sebelah** | C-S-M → early return → named vars | Naming terbaik |

---

## 🧪 Test Semua Versi

```javascript
const findMedianV1 = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b)
  const length = sortedNumbers.length
  const mid = Math.floor(length / 2)
  if (length % 2 !== 0) return sortedNumbers[mid]
  else return (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
}

const findMedianV2 = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b)
  const length = sortedNumbers.length
  const mid = Math.floor(length / 2)
  return length % 2 !== 0
    ? sortedNumbers[mid]
    : (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2
}

const findMedianV3 = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b)
  const length = sortedNumbers.length
  const mid = Math.floor(length / 2)
  if (length % 2 !== 0) return sortedNumbers[mid]
  const [left, right] = [sortedNumbers[mid - 1], sortedNumbers[mid]]
  return (left + right) / 2
}

const findMedianV4 = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b)
  const totalNumbers = sortedNumbers.length
  const middleIndex = Math.floor(totalNumbers / 2)
  if (totalNumbers % 2 !== 0) return sortedNumbers[middleIndex]
  const leftMiddle = sortedNumbers[middleIndex - 1]
  const rightMiddle = sortedNumbers[middleIndex]
  return (leftMiddle + rightMiddle) / 2
}

const testCases = [
  // Basic (ganjil)
  { input: [[1, 2, 3, 4, 5]], expected: 3, desc: 'Basic ganjil' },
  { input: [[3, 4, 7, 6, 10]], expected: 6, desc: 'Tidak terurut ganjil' },
  { input: [[1, 3, 3]], expected: 3, desc: 'Duplikat ganjil' },

  // Basic (genap)
  { input: [[1, 3, 4, 10, 12, 13]], expected: 7, desc: 'Basic genap' },
  { input: [[7, 7, 8, 8]], expected: 7.5, desc: 'Duplikat genap' },

  // Edge cases
  { input: [[5]], expected: 5, desc: 'Satu elemen' },
  { input: [[0]], expected: 0, desc: 'Elemen nol' },

  // Tidak terurut
  { input: [[10, 2, 5, 1, 7]], expected: 5, desc: 'Tidak terurut' },

  // Negatif
  { input: [[-10, -5, 0, 5]], expected: -2.5, desc: 'Bilangan negatif' },

  // Desimal
  { input: [[1.1, 2.2, 3.3, 4.4]], expected: 2.75, desc: 'Desimal' },
]

const runTest = (fn, label) => {
  console.log(`\n=== ${label} ===`)
  testCases.forEach(({ input, expected, desc }, index) => {
    const result = fn(input[0])
    const isPass = result === expected

    if (isPass) {
      console.log(`Test #${index + 1}: ✅ PASS — ${desc}`)
    } else {
      console.log(`\n❌ FAIL - Test #${index + 1} — ${desc}`)
      console.log(`Input    : findMedian([${input[0]}])`)
      console.log(`Expected : ${expected}`)
      console.log(`Got      : ${result}`)
      console.log(`-----------------------------`)
    }
  })
}

runTest(findMedianV1, 'Versi 1 — Refactoring')
runTest(findMedianV2, 'Versi 2 — Ternary')
runTest(findMedianV3, 'Versi 3 — Destructuring')
runTest(findMedianV4, 'Versi 4 — AI Sebelah')
```

---

## 🎓 Pseudocode (Ujian)

Jika hanya ingat konsep:

```
FUNCTION findMedian(numbers):

  // Copy & sort
  sortedNumbers = COPY_AND_SORT(numbers)    // ascending
  length        = LENGTH(sortedNumbers)
  mid           = FLOOR(length / 2)

  // Cek ganjil/genap
  IF length MOD 2 ≠ 0 THEN
    RETURN sortedNumbers[mid]               // ganjil
  END IF

  RETURN (sortedNumbers[mid-1] + sortedNumbers[mid]) / 2  // genap

END FUNCTION
```

**Variasi implementasi:**
- `if/else` → Versi 1 (Refactoring)
- `? :` → Versi 2 (Ternary)
- Early return + `[left, right]` → Versi 3 (Destructuring)
- Early return + `leftMiddle`, `rightMiddle` → Versi 4 (AI Sebelah)

---

## 🔑 Key Takeaways

> **💡 Spread Dulu, Baru Sort**
> `[...numbers].sort(...)` adalah kebiasaan wajib — jangan sort tanpa copy

> **💡 Comparator Wajib**
> `.sort()` tanpa `(a, b) => a - b` akan sort sebagai string — hasilnya salah!

> **💡 Early Return = Less Nesting**
> Kode lebih flat, lebih mudah dibaca, hindari `else` yang tidak perlu

> **💡 Naming yang Baik = Dokumentasi Gratis**
> Pilih nama yang menjelaskan tujuan variabel, bukan sekadar tipe datanya

> **💡 Semua Kompleksitas Sama**
> Perbedaan antar versi hanya gaya — pilih sesuai konteks tim

---

## 📚 Related Concepts

Setelah master ini, explore:
- **Mean (Rata-rata)** — Jumlah semua elemen dibagi panjang array
- **Mode** — Nilai yang paling sering muncul dalam array
- **Standard Deviation** — Seberapa jauh nilai menyebar dari rata-rata
- **Quickselect Algorithm** — Cari median tanpa full sort, O(n) average

---

<div align="center">

## 🎯 Quick Reference Card

**V1 Refactoring:** `[...n].sort()` → `Math.floor` → `if/else`
**V2 Ternary:** `[...n].sort()` → `Math.floor` → `? :`
**V3 Destructuring:** `[...n].sort()` → early return → `[left, right]`
**V4 AI Sebelah:** `[...n].sort()` → early return → `leftMiddle`, `rightMiddle`

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
