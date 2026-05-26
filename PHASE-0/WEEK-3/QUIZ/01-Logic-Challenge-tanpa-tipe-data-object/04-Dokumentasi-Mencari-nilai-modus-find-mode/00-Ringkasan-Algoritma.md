# 📚 Find Mode - Ringkasan Algoritma

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 RINGKASAN ALGORITMA 📋                                  ║
║                                                                          ║
║              3 Versi Lengkap: cariModus, findMode v2, findMode v3       ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)

---

## 🎯 Tujuan

- ✅ Ringkasan algoritma 3 versi
- ✅ Memahami trade-offs masing-masing
- ✅ Pilih versi sesuai kebutuhan
- ✅ Quick reference untuk review

---

## 🔢 Versi 1: cariModus (Two Array + includes)

> 💡 **Best for:** Learning, debugging, pemula

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
Loop arr → angka baru: push ke keduanya
          → sudah ada: indexOf lalu increment count
Cari maxCount → guard clause → return modus
```

### **Step-by-Step (Detail):**
1. **Inisialisasi:** `uniqueNumbers = []` dan `count = []`
2. **Loop** tiap elemen `arr[i]`
3. **Cek** dengan `includes()` → baru atau sudah ada?
4. Jika **baru** → push ke `uniqueNumbers` + push `1` ke `count`
5. Jika **sudah ada** → `indexOf()` untuk dapat index, lalu `count[index]++`
6. **Hitung** `maxCount = Math.max(...count)`
7. **Guard clause:** `maxCount === 1` atau `uniqueNumbers.length === 1` → return `-1`
8. **Return** `uniqueNumbers[count.indexOf(maxCount)]`

### **Keywords:**
- 🗂️ **Two array tracking** — dua array sinkron angka-frekuensi
- 🔍 **Array.includes()** — cek keberadaan angka
- 📍 **Array.indexOf()** — cari index angka
- 📊 **Math.max(...array)** — cari frekuensi tertinggi
- 🛑 **Guard clause** — early return sebelum proses utama
- ⏱️ **O(n²)** — includes & indexOf di dalam loop

### **Kapan Pakai:**
- ✅ Belajar konsep two array tracking
- ✅ Hanya boleh pakai array (tanpa object)
- ✅ Debugging & teaching
- ❌ Production (ada versi lebih efisien)

### **Pitfalls (Jebakan Umum):**

**1) ❌ count.push(1) di tempat yang salah**
```javascript
// ❌ SALAH - push di dalam else
if (!uniqueNumbers.includes(arr[i])) {
  uniqueNumbers.push(arr[i])
} else {
  count.push(1) // Harusnya di dalam if!
}

// ✅ BENAR - push bersamaan saat angka baru
if (!uniqueNumbers.includes(arr[i])) {
  uniqueNumbers.push(arr[i])
  count.push(1)
}
```

**2) ❌ indexOf di array yang salah**
```javascript
// ❌ SALAH - cari di count, bukan uniqueNumbers
const indexAngka = count.indexOf(arr[i])

// ✅ BENAR
const indexAngka = uniqueNumbers.indexOf(arr[i])
```

**3) ❌ Guard clause terlalu luas**
```javascript
// ❌ SALAH - gagal untuk [1,2,1,2,3,3]
if (maxCount === minCount) return -1

// ✅ BENAR - spesifik: hanya 1 nilai unik
if (uniqueNumbers.length === 1) return -1
```

**4) ❌ Lupa spread operator**
```javascript
// ❌ SALAH - return NaN
const maxCount = Math.max(count)

// ✅ BENAR
const maxCount = Math.max(...count)
```

### **💡 Insight Penting:**

> **Dua Array Harus Sinkron!**  
> `uniqueNumbers[i]` dan `count[i]` selalu merujuk pasangan yang sama.  
> Contoh: `uniqueNumbers = [10, 4, 5, 2]`, `count = [1, 2, 1, 1]`  
> → Angka 4 (index 1) muncul 2x → modus!

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
Sama dengan v1, dengan improvement:
- indexOf saja (tanpa includes) — satu scan untuk dua keperluan
- Variabel sementara currentNumber — lebih readable
- modeIndex dihitung setelah guard clause — tidak sia-sia
```

### **Step-by-Step (Detail):**
1. **Inisialisasi:** `uniqueNumbers = []` dan `frequencies = []`
2. **Simpan** `currentNumber = numbers[i]`
3. **Cek** `existingIndex = uniqueNumbers.indexOf(currentNumber)`
4. Jika `existingIndex === -1` → push ke keduanya
5. Jika sudah ada → `frequencies[existingIndex]++`
6. **Hitung** `maxFrequency = Math.max(...frequencies)`
7. **Guard clause** → return `-1` jika perlu
8. **Hitung** `modeIndex` → return `uniqueNumbers[modeIndex]`

### **Keywords:**
- ➡️ **Arrow function** — sintaks modern
- 📍 **indexOf === -1** — cek keberadaan sekaligus dapat index
- 📦 **currentNumber** — variabel sementara untuk readability
- 🛑 **Guard clause dulu** — modeIndex hanya dihitung jika lolos
- ⏱️ **O(n²)** — indexOf di dalam loop

### **Kapan Pakai:**
- ✅ Hanya boleh pakai array
- ✅ Ingin kode clean & readable
- ✅ Intermediate level
- ❌ Production dengan array besar (gunakan v3)

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa cek === -1 dari indexOf**
```javascript
// ❌ SALAH — 0 dianggap falsy, index 0 selalu di-push ulang!
if (!uniqueNumbers.indexOf(currentNumber)) { ... }

// ✅ BENAR — eksplisit cek === -1
if (existingIndex === -1) { ... }
```

**2) ❌ Tetap pakai includes + indexOf**
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

**3) ❌ modeIndex dihitung sebelum guard clause**
```javascript
// ❌ KURANG EFISIEN — dihitung meski akhirnya return -1
const modeIndex = frequencies.indexOf(maxFrequency)
if (maxFrequency === 1 || uniqueNumbers.length === 1) return -1

// ✅ BENAR — hitung setelah lolos guard clause
if (maxFrequency === 1 || uniqueNumbers.length === 1) return -1
const modeIndex = frequencies.indexOf(maxFrequency)
```

### **💡 Insight Penting:**

> **Kenapa indexOf lebih baik dari includes?**  
> `includes` hanya return `true/false` — tetap butuh `indexOf` di else.  
> `indexOf` langsung return index — satu scan untuk dua keperluan sekaligus.

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

### **Step-by-Step (Detail):**
1. **Inisialisasi:** `frequencyMap = {}`
2. **Loop pertama** → `frequencyMap[number] = (frequencyMap[number] || 0) + 1`
3. **Inisialisasi:** `modeValue = -1`, `highestFrequency = 1`
4. **Loop kedua** → bandingkan `frequencyMap[number]` dengan `highestFrequency`
5. Jika lebih tinggi → update `highestFrequency` dan `modeValue`
6. **Guard clause** → return `-1` jika `highestFrequency === 1` atau `=== numbers.length`
7. **Return** `modeValue`

### **Keywords:**
- 🗺️ **Frequency Map** — object sebagai hash map key-value
- 🔄 **for...of** — iterate nilai array langsung tanpa index
- 📦 **`|| 0` pattern** — default value jika key belum ada
- 📊 **Two-pass loop** — loop pertama bangun map, loop kedua cari modus
- ⏱️ **O(n)** — lookup object O(1), jauh lebih cepat dari v1 & v2

### **Kapan Pakai:**
- ✅ Boleh pakai object/hash map
- ✅ Array besar (performa lebih baik)
- ✅ Production / real-world code
- ✅ **RECOMMENDED default!**

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa `|| 0` — NaN jika key belum ada**
```javascript
// ❌ SALAH - undefined + 1 = NaN
frequencyMap[number] = frequencyMap[number] + 1

// ✅ BENAR
frequencyMap[number] = (frequencyMap[number] || 0) + 1
```

**2) ❌ highestFrequency diinisialisasi 0**
```javascript
// ❌ SALAH - angka muncul 1x bisa jadi modus!
let highestFrequency = 0

// ✅ BENAR - modus minimal muncul 2x
let highestFrequency = 1
```

**3) ❌ Guard clause pakai uniqueNumbers.length**
```javascript
// ❌ TIDAK BISA - v3 tidak punya uniqueNumbers
if (uniqueNumbers.length === 1) return -1

// ✅ BENAR - pakai numbers.length
if (highestFrequency === numbers.length) return -1
```

**4) ❌ Pakai for...in untuk array**
```javascript
// ❌ HINDARI - for...in iterate property, bukan nilai
for (const i in numbers) { ... }

// ✅ BENAR - for...of untuk nilai array
for (const number of numbers) { ... }
```

### **💡 Insight Penting:**

> **Kenapa Object lebih cepat dari Two Array?**  
> Two array: `indexOf` harus scan dari awal → O(n) per operasi  
> Object: `frequencyMap[number]` langsung ke key → O(1) per operasi  
> Hasil: Two array O(n²) vs Object O(n) — drastis untuk array besar!

---

## 📊 Perbandingan Lengkap

| Aspek | cariModus v1 | findMode v2 | findMode v3 |
|-------|:-----------:|:-----------:|:-----------:|
| **Style** | `function` | arrow fn | arrow fn |
| **Struktur** | Two array | Two array | Object map |
| **Cek keberadaan** | `includes` + `indexOf` | `indexOf` only | key lookup O(1) |
| **Loop** | `for` | `for` | `for...of` |
| **Time** | O(n²) | O(n²) | **O(n)** ⭐ |
| **Space** | O(n) | O(n) | O(n) |
| **Readability** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Performance** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Best For** | Learning | Clean Code | **Production** |

---

## 🎯 Decision Tree

```
Hanya boleh pakai array?
├─ YES → Lanjut
│    Butuh kode yang clean?
│    ├─ NO  → v1 cariModus (learning)
│    └─ YES → v2 findMode  (clean code)
└─ NO → v3 findMode (frequency map) ✅ Recommended
```

---

## 💡 Mnemonic

### **v1 cariModus: "T-I-I"**
**T**rack dua array  
**I**ncludes dulu  
**I**ndexOf kemudian

### **v2 findMode: "O-E-G"**
**O**nly indexOf (existingIndex)  
**E**xistingIndex === -1?  
**G**uard clause dulu, modeIndex belakangan

### **v3 findMode: "M-T-G"**
**M**ap frekuensi dulu  
**T**elusuri angka tertinggi  
**G**uard clause, return modeValue

---

## 🧪 Test Cases

```javascript
const testCases = [
  // Basic
  { input: [10, 4, 5, 2, 4], expected: 4 },
  { input: [5, 10, 10, 6, 5], expected: 5 },
  { input: [1, 2, 3, 3, 4, 5], expected: 3 },

  // Return -1
  { input: [10, 3, 1, 2, 5], expected: -1 },
  { input: [7, 7, 7, 7, 7], expected: -1 },

  // Beberapa modus → ambil pertama
  { input: [1, 2, 1, 2, 3, 3], expected: 1 },
  { input: [9, 9, 1, 2, 3], expected: 9 },
]

testCases.forEach(({ input, expected }, index) => {
  const result = findMode(input)
  const isPass = result === expected

  if (isPass) {
    console.log(`Test #${index + 1}: ✅ PASS`)
  } else {
    console.log(`\n❌ FAIL - Test #${index + 1}`)
    console.log(`Input    : findMode([${input}])`)
    console.log(`Expected : ${expected}`)
    console.log(`Got      : ${result}`)
    console.log(`-----------------------------`)
  }
})
```

---

## 🎓 Pseudocode

### **v1 & v2 (Two Array):**
```
FOR each element IN arr:
  IF element NOT IN uniqueNumbers:
    PUSH element to uniqueNumbers
    PUSH 1 to count/frequencies
  ELSE:
    index = indexOf(element) in uniqueNumbers
    count[index]++

maxFrequency = MAX(count)
IF maxFrequency = 1 OR uniqueNumbers.length = 1:
  RETURN -1
RETURN uniqueNumbers[indexOf(maxFrequency) in count]
```

### **v3 (Frequency Map):**
```
FOR each number IN numbers:
  frequencyMap[number] = frequencyMap[number] + 1

FOR each number IN numbers:
  IF frequencyMap[number] > highestFrequency:
    highestFrequency = frequencyMap[number]
    modeValue = number

IF highestFrequency = 1 OR = numbers.length:
  RETURN -1
RETURN modeValue
```

---

## 🔑 Key Takeaways

> **v1 = Learning Tool**  
> Paling eksplisit, mudah dipahami, tapi ada redundansi includes + indexOf

> **v2 = Clean Code**  
> Satu indexOf sudah cukup, naming English, struktur lebih rapi

> **v3 = Production Ready**  
> O(n) vs O(n²) — drastis untuk array besar, idiom standar industri

> **Guard Clause Harus Spesifik**  
> `uniqueNumbers.length === 1` lebih tepat dari `maxCount === minCount`

> **Context Matters**  
> Pilih versi sesuai constraint soal dan kebutuhan project

---

<div align="center">

## 🎯 Quick Reference Card

**v1 cariModus:** `includes` cek → `indexOf` cari index → increment count  
**v2 findMode:** `indexOf === -1` untuk cek & index sekaligus  
**v3 findMode:** `frequencyMap[n] = (frequencyMap[n] || 0) + 1`

---

Made with ❤️ from real learning session

**Happy Coding! 🚀**

</div>
