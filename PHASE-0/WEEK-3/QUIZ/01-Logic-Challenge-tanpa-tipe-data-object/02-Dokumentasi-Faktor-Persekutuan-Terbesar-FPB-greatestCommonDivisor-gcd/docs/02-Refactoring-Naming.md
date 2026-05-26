```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📝 PART 2: REFACTORING NAMING CONVENTION 📝                ║
║                                                                          ║
║                  English Naming & Clean Code Principles                  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 🔄 Before/After | 📝 Changes | 🎯 Principles | 📊 Comparison | 💡 Takeaways |
|:---------------:|:----------:|:-------------:|:-------------:|:------------:|
| [Jump](#-beforeafter) | [Jump](#-perubahan-detail) | [Jump](#-clean-code-principles) | [Jump](#-comparison) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Refactor ke English naming
- ✅ Apply clean code principles
- ✅ Improve readability
- ✅ Maintain functionality (test tetap pass)

---

## 🔄 Before/After

### **Before (Bahasa Indonesia):**
```javascript
function fpb(angka1, angka2) {
  let angka = 1
  const minNumber = Math.min(angka1, angka2)

  for (let i = 1; i <= minNumber; i++) {
    if (angka1 % i === 0 && angka2 % i === 0) {
      angka = i
    }
  }

  return angka
}
```

### **After (English):**
```javascript
const greatestCommonDivisor = (num1, num2) => {
  let currentGcd = 1
  const minNumber = Math.min(num1, num2)

  for (let i = 1; i <= minNumber; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      currentGcd = i
    }
  }

  return currentGcd
}
```

---

## 📝 Perubahan Detail

### **1. Function Name**
```diff
- function fpb(angka1, angka2)
+ const greatestCommonDivisor = (num1, num2) =>
```

**Changes:**
- `fpb` → `greatestCommonDivisor`
- `function` → arrow function (modern JS)

**Why:**
- Descriptive & self-explanatory
- English = standar internasional
- Arrow function = cleaner syntax

---

### **2. Parameters**
```diff
- fpb(angka1, angka2)
+ greatestCommonDivisor(num1, num2)
```

**Why:**
- `num` umum dipakai untuk number parameters
- Singkat tapi jelas

---

### **3. Variable**
```diff
- let angka = 1
+ let currentGcd = 1
```

**Why:**
- `angka` ambigu (angka yang mana?)
- `currentGcd` jelas (GCD sementara yang di-update)

---

## 🎯 Clean Code Principles

### **1. Meaningful Names**
```javascript
// ❌ BAD
let a = 1

// ✅ GOOD
let currentGcd = 1
```

**Rule:** Nama harus menjelaskan purpose-nya

---

### **2. Consistent Style**
```javascript
// ✅ GOOD - Arrow function (modern)
const greatestCommonDivisor = (num1, num2) => {
  // ...
}

// ✅ ALSO OK - Traditional (jika codebase pakai ini)
function greatestCommonDivisor(num1, num2) {
  // ...
}
```

**Rule:** Konsisten dengan codebase existing

---

### **3. English Convention**
```javascript
// ✅ GOOD
greatestCommonDivisor
findMaximum
calculateSum

// ❌ AVOID
fpb
cariMaksimum
hitungJumlah
```

**Rule:** English untuk professional code

---

## 📊 Comparison

| Aspek | Before | After |
|-------|--------|-------|
| **Function** | `fpb` | `greatestCommonDivisor` |
| **Param 1** | `angka1` | `num1` |
| **Param 2** | `angka2` | `num2` |
| **Variable** | `angka` | `currentGcd` |
| **Style** | `function` | arrow function |
| **Language** | 🇮🇩 Indonesia | 🇬🇧 English |
| **Readability** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 🧪 Test Verification

```javascript
const testCases = [
  { input: [12, 16], expected: 4 },
  { input: [50, 40], expected: 10 },
  { input: [22, 99], expected: 11 },
  { input: [24, 36], expected: 12 },
  { input: [17, 23], expected: 1 },
]

testCases.forEach(({ input, expected }, index) => {
  const result = greatestCommonDivisor(input[0], input[1])
  const isPass = result === expected
  
  console.log(`Test #${index + 1}: ${isPass ? '✅ PASS' : '❌ FAIL'}`)
})
```

**Output:**
```
Test #1: ✅ PASS
Test #2: ✅ PASS
Test #3: ✅ PASS
Test #4: ✅ PASS
Test #5: ✅ PASS

Success: 5/5 = 100% ✅
```

**Conclusion:** Functionality tetap sama, naming lebih baik!

---

## 🎨 Alternative Naming

### **Option 1: Full Name (Current)**
```javascript
const greatestCommonDivisor = (num1, num2) => { }
```
- ✅ Very descriptive
- ⚠️ Agak panjang

### **Option 2: Abbreviation**
```javascript
const gcd = (num1, num2) => { }
```
- ✅ Short & sweet
- ✅ GCD adalah istilah umum
- ✅ **Recommended untuk production!**

### **Option 3: Mixed**
```javascript
const calculateGcd = (num1, num2) => { }
```
- ✅ Descriptive verb
- ⚠️ Sedikit redundant (calculate sudah implied)

---

## 📋 Naming Best Practices

### **Function Names:**
```javascript
// ✅ Verb + Noun
calculateGcd()
findMaximum()
sortArray()

// ✅ Action words
get, set, create, update, delete
find, search, filter
calculate, compute
```

### **Variable Names:**
```javascript
// ✅ Descriptive
currentGcd
minNumber
maxValue

// ❌ Ambiguous
data, temp, x, val
```

### **Boolean Variables:**
```javascript
// ✅ Question form
isValid
hasPermission
canEdit

// ❌ Ambiguous
valid, permission, edit
```

---

## 🔄 Recommended Version (Production)

```javascript
/**
 * Calculate the Greatest Common Divisor (GCD) of two numbers
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {number} - GCD of num1 and num2
 */
const gcd = (num1, num2) => {
  let currentGcd = 1
  const minNumber = Math.min(num1, num2)

  for (let i = 1; i <= minNumber; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      currentGcd = i
    }
  }

  return currentGcd
}

export default gcd
```

**Added:**
- ✅ JSDoc comments
- ✅ Shorter function name (`gcd`)
- ✅ Export statement

---

## 💡 Key Takeaways

> **English = Standard**  
> Gunakan English untuk professional code

> **Descriptive > Short**  
> Prefer clarity over brevity (tapi jangan terlalu panjang)

> **Consistency Matters**  
> Follow codebase convention

> **Refactoring ≠ Rewriting**  
> Improve tanpa ubah logic

> **Test After Refactor**  
> Pastikan functionality tetap sama

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 1: Analisis Kode Original](01-Analisis-Kode-Original.md)**
- **🚀 [Lanjut ke Part 3: Euclidean Iteratif →](03-Euclidean-Iteratif.md)**

---

<div align="center">

**Siap belajar Euclidean Algorithm di Part 3?**

Made with ❤️ for learners

</div>
