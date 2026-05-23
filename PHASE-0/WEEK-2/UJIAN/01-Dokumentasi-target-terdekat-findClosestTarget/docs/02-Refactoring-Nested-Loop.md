```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🔧 PART 2: REFACTORING NESTED LOOP 🔧                        ║
║                                                                          ║
║              Clean Code Principles & Best Practices                      ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 🔄 Before/After | 🎨 Best Practices | 📊 Comparison | 💡 Takeaways |
|:---------------:|:-----------------:|:-------------:|:------------:|
| [Jump](#-beforeafter-comparison) | [Jump](#-best-practices-applied) | [Jump](#-metrics-comparison) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami prinsip **clean code**
- ✅ Menerapkan **English naming convention**
- ✅ Improve **readability & maintainability**
- ✅ Siap untuk production code

---

## 🔄 Before/After Comparison

### **Before (Versi 1):**
```javascript
const targetTerdekat = (arr) => {
  const positionO = []
  const positionX = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') positionO.push(i)
    if (arr[i] === 'x') positionX.push(i)
  }
  
  if (positionX.length === 0) return 0

  const diff = []

  for (const char1 of positionX) {
    for (const char2 of positionO) {
      let hitung = char1 - char2
      if (hitung < 0) hitung = char2 - char1
      diff.push(hitung)
    }
  }
  
  return Math.min(...diff)
}
```

### **After (Versi 2):**
```javascript
const findClosestDistance = (chars) => {
  const length = chars.length
  const xPositions = []
  const oPositions = []
  
  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') xPositions.push(i)
    if (chars[i] === 'o') oPositions.push(i)
  }
  
  if (xPositions.length === 0) return 0
  
  let minDistance = length
  
  for (const xPosition of xPositions) {
    for (const oPosition of oPositions) {
      let distance = xPosition - oPosition
      if (distance < 0) distance = oPosition - xPosition
      if (distance < minDistance) minDistance = distance
    }
  }
  
  return minDistance
}
```

---

## 📝 Changes Breakdown

### **1. Function Naming**
```diff
- const targetTerdekat = (arr) => {
+ const findClosestDistance = (chars) => {
```

**Why?**
- `findClosestDistance` - self-explanatory, English
- `chars` - lebih deskriptif dari `arr`
- Standard: function boolean → `is`, `has`, function action → verb

---

### **2. Variable Naming**
```diff
- const char1, char2
+ const xPosition, oPosition

- let hitung
+ let distance
```

**Why?**
- `xPosition`, `oPosition` - jelas ini posisi/index
- `distance` - jelas ini jarak
- Avoid singkatan yang ambigu

---

### **3. Remove Unnecessary Array**
```diff
- const diff = []
- diff.push(hitung)
- return Math.min(...diff)

+ let minDistance = length
+ if (distance < minDistance) minDistance = distance
+ return minDistance
```

**Why?**
- Tidak perlu simpan semua jarak
- Track minimum langsung → hemat memory
- O(n×m) space → O(n+m) space

---

### **4. Cache Length**
```diff
+ const length = chars.length
- for (let i = 0; i < arr.length; i++)
+ for (let i = 0; i < length; i++)
```

**Why?**
- Avoid repeated property access
- Micro-optimization tapi good practice

---

## 🎨 Best Practices Applied

### **1. Meaningful Names**
```javascript
// ✅ GOOD
const findClosestDistance = (chars) => {
  const xPositions = []
  const oPositions = []
  let minDistance = length
}

// ❌ BAD
const f = (a) => {
  const x = []
  const o = []
  let m = a.length
}
```

**Prinsip:** Nama harus menjelaskan purpose-nya!

---

### **2. Single Responsibility**
```javascript
// ✅ GOOD - Satu function, satu tujuan
const findClosestDistance = (chars) => {
  // Find closest distance between 'o' and 'x'
}

// Bisa dipecah jadi:
const collectPositions = (chars, target) => { ... }
const calculateMinDistance = (xPos, oPos) => { ... }
```

---

### **3. Early Return**
```javascript
// ✅ GOOD - Guard clause
if (xPositions.length === 0) return 0

// ❌ BAD - Nested if
if (xPositions.length > 0) {
  // main logic
} else {
  return 0
}
```

**Prinsip:** Fail fast, return early!

---

### **4. Consistent Style**
```javascript
// ✅ GOOD - Consistent spacing
if (chars[i] === 'x') xPositions.push(i)
if (chars[i] === 'o') oPositions.push(i)

// ❌ BAD - Inconsistent
if(chars[i]==='x')xPositions.push(i)
if (chars[i] === 'o') oPositions.push(i)
```

---

## 📊 Metrics Comparison

| Metric | Versi 1 | Versi 2 | Improvement |
|--------|---------|---------|-------------|
| **Lines of Code** | 19 | 18 | ✅ 5% less |
| **Space Complexity** | O(n×m) | O(n+m) | ✅ Better |
| **Variable Names** | Mixed | English | ✅ Standard |
| **Readability Score** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ Better |
| **Maintainability** | Medium | High | ✅ Better |

---

## 🧪 Testing Both Versions
```javascript
const testCases = [
  { input: ['x', 'o'], expected: 1 },
  { input: ['o', 'x'], expected: 1 },
  { input: [' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'], expected: 1 },
]

console.log("=== Versi 1 ===")
testCases.forEach(({ input, expected }) => {
  const result = targetTerdekat(input)
  console.log(`${result === expected ? '✅' : '❌'} ${result}`)
})

console.log("\n=== Versi 2 ===")
testCases.forEach(({ input, expected }) => {
  const result = findClosestDistance(input)
  console.log(`${result === expected ? '✅' : '❌'} ${result}`)
})
```

**Output:**
```
=== Versi 1 ===
✅ 1
✅ 1
✅ 1

=== Versi 2 ===
✅ 1
✅ 1
✅ 1

Both versions: 3/3 ✅
```

---

## 📝 Production-Ready Version

Dengan JSDoc untuk documentation:
```javascript
/**
 * Find closest distance between 'o' and 'x' in character array
 * @param {string[]} chars - Array of characters
 * @returns {number} Minimum distance, or 0 if no 'x' exists
 */
const findClosestDistance = (chars) => {
  const length = chars.length
  const xPositions = []
  const oPositions = []
  
  // Collect positions
  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') xPositions.push(i)
    if (chars[i] === 'o') oPositions.push(i)
  }
  
  // Early return if no 'x'
  if (xPositions.length === 0) return 0
  
  // Find minimum distance
  let minDistance = length
  
  for (const xPosition of xPositions) {
    for (const oPosition of oPositions) {
      let distance = xPosition - oPosition
      if (distance < 0) distance = oPosition - xPosition
      if (distance < minDistance) minDistance = distance
    }
  }
  
  return minDistance
}

export default findClosestDistance
```

---

## 💡 Clean Code Principles Summary

### **1. Naming Conventions**

| Type | Convention | Example |
|------|-----------|---------|
| Function | camelCase, verb | `findClosestDistance` |
| Variable | camelCase, noun | `minDistance` |
| Constant | UPPER_CASE | `MAX_SIZE` |
| Boolean | is/has/can | `isEmpty` |

---

### **2. Code Organization**
```javascript
// ✅ GOOD - Logical flow
1. Input validation
2. Data collection
3. Processing
4. Return result

// ❌ BAD - Random order
1. Processing
2. Input validation
3. Return
4. Data collection
```

---

### **3. Comments**
```javascript
// ✅ GOOD - Explain WHY, not WHAT
// Use absolute value since x can be before or after o
if (distance < 0) distance = oPosition - xPosition

// ❌ BAD - Obvious comment
// Check if distance is less than 0
if (distance < 0) distance = oPosition - xPosition
```

---

## ✅ Key Takeaways

**Tentang Naming:**

> **💡 English is Standard**  
> Gunakan English untuk semua nama (function, variable, etc)

> **💡 Be Descriptive**  
> `minDistance` lebih baik dari `min` atau `m`

> **💡 Avoid Abbreviations**  
> `position` lebih baik dari `pos` (kecuali universally known)

**Tentang Optimization:**

> **💡 Track, Don't Store**  
> Jika hanya butuh min/max, track langsung - jangan simpan semua

> **💡 Early Return**  
> Guard clauses di awal untuk edge cases

> **💡 Readability > Cleverness**  
> Code yang jelas > code yang "pintar" tapi susah dibaca

**Tentang Production:**

> **💡 JSDoc for Documentation**  
> Jelaskan parameter dan return value

> **💡 Export for Reusability**  
> Siap dipakai di project lain

> **💡 Test Everything**  
> Test cases untuk verify correctness

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📝 [← Kembali ke Part 1: Permasalahan & Kode Awal](01-Permasalahan-dan-Kode-Awal.md)**
- **🚀 [Lanjut ke Part 3: Optimasi Two-Pass →](03-Optimasi-Two-Pass.md)**

---

<div align="center">

**Siap untuk optimasi performa di Part 3?**

Made with ❤️ for learners

</div>
