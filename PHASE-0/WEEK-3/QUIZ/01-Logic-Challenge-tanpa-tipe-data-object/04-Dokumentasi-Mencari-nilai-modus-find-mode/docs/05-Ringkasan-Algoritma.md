# 📚 Find Mode - Part 5: Ringkasan Algoritma

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 PART 5: RINGKASAN ALGORITMA 📋                          ║
║                                                                          ║
║              3 Versi Lengkap: cariModus, findMode v2, findMode v3       ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔢 Versi 1 | ⚡ Versi 2 | 🗺️ Versi 3 | 📊 Comparison | 💡 Takeaways |
|:----------:|:----------:|:----------:|:-------------:|:------------:|
| [Jump](#-versi-1-carimodus-two-array--includes) | [Jump](#-versi-2-findmode-two-array--indexof-only) | [Jump](#️-versi-3-findmode-frequency-map) | [Jump](#-perbandingan-lengkap) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Ringkasan detail 3 versi kode
- ✅ Step-by-step & keywords tiap versi
- ✅ Pitfalls & best practices
- ✅ Decision guide kapan pakai versi mana

---

## 🔢 Versi 1: cariModus (Two Array + includes)

> 💡 **Best for:** Learning, pemula, memahami konsep dasar

### **Code:**
<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Buat dua array sinkron: uniqueNumbers & count
Loop arr → jika angka baru: push ke keduanya
           jika sudah ada: cari index, increment count
Cari maxCount → guard clause → return modus
```

### **Step-by-Step:**
1. Inisialisasi `uniqueNumbers = []` dan `count = []`
2. Loop tiap elemen `arr[i]`
3. Cek dengan `includes()` → angka baru atau sudah ada?
4. Jika baru → push ke `uniqueNumbers` + push `1` ke `count`
5. Jika sudah ada → `indexOf()` untuk dapat index, lalu `count[index]++`
6. Hitung `maxCount = Math.max(...count)`
7. Guard clause: `maxCount === 1` atau `uniqueNumbers.length === 1` → return `-1`
8. Return `uniqueNumbers[count.indexOf(maxCount)]`

### **Keywords:**
- 🗂️ **Two array tracking** — dua array sinkron angka-frekuensi
- 🔍 **Array.includes()** — cek keberadaan angka
- 📍 **Array.indexOf()** — cari index angka
- 📊 **Math.max(...array)** — cari frekuensi tertinggi
- 🛑 **Guard clause** — early return sebelum proses utama
- ⏱️ **O(n²)** — includes & indexOf di dalam loop

### **Pitfalls:**
```javascript
// ❌ count.push(1) di dalam else
} else {
  count.push(1) // Harusnya di dalam if!
}

// ✅ BENAR
if (!uniqueNumbers.includes(arr[i])) {
  uniqueNumbers.push(arr[i])
  count.push(1) // Bersamaan saat angka baru ditemukan
}
```

```javascript
// ❌ indexOf di array yang salah
const indexAngka = count.indexOf(arr[i])

// ✅ BENAR
const indexAngka = uniqueNumbers.indexOf(arr[i])
```

### **Kapan Pakai:**
- ✅ Belajar konsep two array tracking
- ✅ Hanya boleh pakai array (tanpa object)
- ✅ Debugging & teaching

---

## ⚡ Versi 2: findMode (Two Array + indexOf Only)

> 💡 **Best for:** Clean code, best practice, intermediate level

### **Code:**
<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Sama dengan v1, tapi:
- indexOf saja (tanpa includes)
- Variabel sementara currentNumber
- modeIndex dihitung setelah guard clause
```

### **Step-by-Step:**
1. Inisialisasi `uniqueNumbers = []` dan `frequencies = []`
2. Loop dengan `currentNumber = numbers[i]`
3. `existingIndex = uniqueNumbers.indexOf(currentNumber)`
4. Jika `existingIndex === -1` → push ke keduanya
5. Jika sudah ada → `frequencies[existingIndex]++`
6. Hitung `maxFrequency = Math.max(...frequencies)`
7. Guard clause → return `-1` jika perlu
8. Hitung `modeIndex` → return `uniqueNumbers[modeIndex]`

### **Keywords:**
- ➡️ **Arrow function** — sintaks modern
- 📍 **indexOf === -1** — cek keberadaan sekaligus dapat index
- 📦 **currentNumber** — variabel sementara untuk readability
- 🛑 **Guard clause dulu** — modeIndex hanya dihitung jika lolos
- ⏱️ **O(n²)** — indexOf di dalam loop

### **Improvement dari v1:**
```javascript
// ❌ v1 — scan dua kali (includes + indexOf)
if (!uniqueNumbers.includes(arr[i])) {
  ...
} else {
  const indexAngka = uniqueNumbers.indexOf(arr[i])
}

// ✅ v2 — scan sekali (indexOf saja)
const existingIndex = uniqueNumbers.indexOf(currentNumber)
if (existingIndex === -1) { ... }
```

### **Kapan Pakai:**
- ✅ Hanya boleh pakai array
- ✅ Ingin kode yang clean & readable
- ✅ Intermediate level

---

## 🗺️ Versi 3: findMode (Frequency Map)

> 💡 **Best for:** Production, performa optimal, real-world code

### **Code:**
<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const findMode = (numbers) => {
  const frequencyMap = {}

  for (const number of numbers) {
    frequencyMap[number] = (frequencyMap[number] || 0) + 1
  }

  let modeValue = -1
  let highestFrequency = 1

  for (const number of numbers) {
    const currentFrequency = frequencyMap[number]

    if (currentFrequency > highestFrequency) {
      highestFrequency = currentFrequency
      modeValue = number
    }
  }

  if (highestFrequency === 1 || highestFrequency === numbers.length) return -1

  return modeValue
}
```

</details>

### **Konsep Inti:**
```
Loop pertama  → isi frequencyMap (object key-value)
Loop kedua    → cari angka dengan frekuensi tertinggi
Guard clause  → return -1 jika perlu
Return modeValue
```

### **Step-by-Step:**
1. Inisialisasi `frequencyMap = {}`
2. **Loop pertama** → `frequencyMap[number] = (frequencyMap[number] || 0) + 1`
3. Inisialisasi `modeValue = -1` dan `highestFrequency = 1`
4. **Loop kedua** → bandingkan `frequencyMap[number]` dengan `highestFrequency`
5. Jika lebih tinggi → update `highestFrequency` dan `modeValue`
6. Guard clause → return `-1` jika perlu
7. Return `modeValue`

### **Keywords:**
- 🗺️ **Frequency Map** — object sebagai hash map key-value
- 🔄 **for...of** — iterate nilai array langsung
- 📦 **`|| 0` pattern** — default value jika key belum ada
- 📊 **Two-pass** — loop pertama bangun map, loop kedua cari modus
- ⏱️ **O(n)** — lookup object O(1), jauh lebih efisien dari v1 & v2

### **Pitfalls:**
```javascript
// ❌ Lupa || 0 — NaN jika key belum ada
frequencyMap[number] = frequencyMap[number] + 1

// ✅ BENAR
frequencyMap[number] = (frequencyMap[number] || 0) + 1
```

```javascript
// ❌ highestFrequency diinisialisasi 0
let highestFrequency = 0  // Angka muncul 1x bisa jadi modus!

// ✅ BENAR
let highestFrequency = 1  // Modus minimal muncul 2x
```

### **Kapan Pakai:**
- ✅ Boleh pakai object/hash map
- ✅ Array besar (performa lebih baik)
- ✅ Production / real-world code

---

## 📊 Perbandingan Lengkap

| Aspek | cariModus v1 | findMode v2 | findMode v3 |
|-------|-------------|------------|------------|
| **Style** | `function` | arrow function | arrow function |
| **Struktur** | Two array | Two array | Object map |
| **Cek ada/tidak** | `includes` + `indexOf` | `indexOf` saja | key lookup O(1) |
| **Loop** | `for` | `for` | `for...of` |
| **Complexity** | O(n²) | O(n²) | **O(n)** ⭐ |
| **Readability** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Best For** | Learning | Clean Code | Production |

---

## 🎯 Decision Tree

```
Hanya boleh pakai array?
├─ YES → Lanjut
│   Butuh kode yang clean?
│   ├─ NO  → v1 cariModus (learning)
│   └─ YES → v2 findMode (clean code)
└─ NO → v3 findMode (frequency map) ✅ Recommended
```

---

## 💡 Mnemonic

### **v1 & v2: "T-A-S"**
**T**rack dua array  
**A**da atau tidak? (includes/indexOf)  
**S**inkron index selalu

### **v3: "M-T-C"**
**M**ap dulu frekuensinya  
**T**elusuri angka tertinggi  
**C**heck guard clause, return hasil

---

## 💡 Key Takeaways

> **Tidak Ada Versi "Terbaik" Universal**  
> Pilih sesuai constraint dan kebutuhan

> **O(n) vs O(n²) = Drastis**  
> Untuk array besar, v3 jauh lebih cepat

> **indexOf Lebih Baik dari includes + indexOf**  
> Satu scan cukup untuk dua keperluan

> **Object = Hash Map**  
> Lookup key object O(1) — inilah kenapa v3 lebih cepat

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **✨ [← Kembali ke Part 4: Refactoring](04-Refactoring.md)**
- **📊 [Lanjut ke Part 6: Perbandingan & Kesimpulan →](06-Perbandingan-Kesimpulan.md)**

---

<div align="center">

**Siap lihat perbandingan final di Part 6?**

Made with ❤️ from real learning session

</div>
