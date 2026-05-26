# 📚 Find Mode - Part 4: Refactoring

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              ✨ PART 4: REFACTORING ✨                                   ║
║                                                                          ║
║                  cariModus → findMode: Clean Code & Best Practice        ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 🔄 Before/After | 📝 Perubahan | 🎯 Improvement | 📊 Comparison | 💡 Takeaways |
|:---------------:|:------------:|:--------------:|:-------------:|:------------:|
| [Jump](#-beforeafter) | [Jump](#-perubahan-detail) | [Jump](#-improvement-tambahan) | [Jump](#-comparison) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Refactor naming ke English convention
- ✅ Ganti function declaration ke arrow function
- ✅ Hilangkan redundansi (includes + indexOf → indexOf saja)
- ✅ Pastikan functionality tetap sama

---

## 🔄 Before/After

### **Before (cariModus — v1):**
```javascript
function cariModus(arr) {
  const uniqueNumbers = []
  const count = []

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueNumbers.includes(arr[i])) {
      uniqueNumbers.push(arr[i])
      count.push(1)
    } else {
      const indexAngka = uniqueNumbers.indexOf(arr[i])
      count[indexAngka]++
    }
  }

  const maxCount = Math.max(...count)
  const indexModus = count.indexOf(maxCount)

  if (maxCount === 1 || uniqueNumbers.length === 1) return -1

  return uniqueNumbers[indexModus]
}
```

### **After (findMode — v2):**
```javascript
const findMode = (numbers) => {
  const uniqueNumbers = []
  const frequencies = []

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i]
    const existingIndex = uniqueNumbers.indexOf(currentNumber)

    if (existingIndex === -1) {
      uniqueNumbers.push(currentNumber)
      frequencies.push(1)
    } else {
      frequencies[existingIndex]++
    }
  }

  const maxFrequency = Math.max(...frequencies)

  if (maxFrequency === 1 || uniqueNumbers.length === 1) return -1

  const modeIndex = frequencies.indexOf(maxFrequency)
  return uniqueNumbers[modeIndex]
}
```

---

## 📝 Perubahan Detail

### **1. Naming Convention**
```diff
- function cariModus(arr)
+ const findMode = (numbers) =>
```
```diff
- const count = []
+ const frequencies = []
```
```diff
- const indexAngka = ...
+ const existingIndex = ...
```
```diff
- const maxCount = ...
+ const maxFrequency = ...
```
```diff
- const indexModus = ...
+ const modeIndex = ...
```

---

### **2. Hilangkan Redundansi**
```javascript
// ❌ SEBELUM — dua operasi untuk hal yang sama
if (!uniqueNumbers.includes(arr[i])) {       // scan array
  ...
} else {
  const indexAngka = uniqueNumbers.indexOf(arr[i]) // scan array lagi!
}

// ✅ SESUDAH — satu operasi cukup
const existingIndex = uniqueNumbers.indexOf(currentNumber)
if (existingIndex === -1) {   // -1 = tidak ada
  ...
} else {
  frequencies[existingIndex]++
}
```

---

### **3. Intermediate Variable**
```javascript
// ❌ SEBELUM — arr[i] berulang
if (!uniqueNumbers.includes(arr[i])) {
  uniqueNumbers.push(arr[i])

// ✅ SESUDAH — lebih readable
const currentNumber = numbers[i]
const existingIndex = uniqueNumbers.indexOf(currentNumber)
```

---

### **4. modeIndex Dipindah Setelah Guard Clause**
```javascript
// ❌ SEBELUM — dihitung meski akhirnya return -1
const indexModus = count.indexOf(maxCount)
if (maxCount === 1 || uniqueNumbers.length === 1) return -1

// ✅ SESUDAH — hanya dihitung jika dibutuhkan
if (maxFrequency === 1 || uniqueNumbers.length === 1) return -1
const modeIndex = frequencies.indexOf(maxFrequency)
```

---

## 🎯 Improvement Tambahan

### **forEach sebagai Alternatif:**
```javascript
// Bisa juga pakai forEach (lebih modern)
numbers.forEach((number) => {
  const existingIndex = uniqueNumbers.indexOf(number)
  if (existingIndex === -1) {
    uniqueNumbers.push(number)
    frequencies.push(1)
  } else {
    frequencies[existingIndex]++
  }
})
```

---

## 📊 Comparison

| Aspek | cariModus v1 | findMode v2 |
|-------|-------------|------------|
| **Function** | `function cariModus` | `const findMode =>`|
| **Parameter** | `arr` | `numbers` |
| **Array frekuensi** | `count` | `frequencies` |
| **Cek keberadaan** | `includes` + `indexOf` | `indexOf` saja |
| **Var sementara** | ❌ | `currentNumber` ✅ |
| **modeIndex** | Sebelum guard clause | Setelah guard clause ✅ |
| **Complexity** | O(n²) | O(n²) |
| **Language** | 🇮🇩 Indonesia | 🇬🇧 English |

---

## 🧪 Test Verification

```javascript
console.log(findMode([10, 4, 5, 2, 4]))    // 4  ✅
console.log(findMode([5, 10, 10, 6, 5]))   // 5  ✅
console.log(findMode([10, 3, 1, 2, 5]))    // -1 ✅
console.log(findMode([1, 2, 3, 3, 4, 5])) // 3  ✅
console.log(findMode([7, 7, 7, 7, 7]))     // -1 ✅
console.log(findMode([1, 2, 1, 2, 3, 3])) // 1  ✅
```

```
6/6 PASS ✅ — Functionality tetap sama!
```

---

## 🐛 Pitfalls

**1. ❌ Lupa cek -1 dari indexOf**
```javascript
// ❌ SALAH — 0 dianggap falsy, angka di index 0 selalu di-push ulang
if (!uniqueNumbers.indexOf(currentNumber)) { ... }

// ✅ BENAR — eksplisit cek === -1
if (existingIndex === -1) { ... }
```

**2. ❌ Tetap pakai includes + indexOf**
```javascript
// ❌ KURANG EFISIEN — scan dua kali
if (!uniqueNumbers.includes(currentNumber)) {
  ...
} else {
  const existingIndex = uniqueNumbers.indexOf(currentNumber)
}

// ✅ BENAR — cukup indexOf saja
const existingIndex = uniqueNumbers.indexOf(currentNumber)
if (existingIndex === -1) { ... }
```

---

## 💡 Key Takeaways

> **English = Standar Profesional**  
> Naming convention English berlaku untuk semua: function, variable, parameter

> **indexOf Saja Sudah Cukup**  
> Tidak perlu `includes` + `indexOf` — `indexOf` sudah handle keduanya

> **Urutan Kode = Efisiensi**  
> Hitung `modeIndex` setelah guard clause agar tidak dihitung sia-sia

> **Refactoring ≠ Rewriting**  
> Logic tidak berubah, hanya penamaan dan struktur yang diperbaiki

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🐛 [← Kembali ke Part 3: Debugging & Perbaikan](03-Debugging-Perbaikan.md)**
- **📋 [Lanjut ke Part 5: Ringkasan Algoritma →](05-Ringkasan-Algoritma.md)**

---

<div align="center">

**Siap lihat ringkasan semua versi di Part 5?**

Made with ❤️ from real learning session

</div>
