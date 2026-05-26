```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            📝 PART 3: REFACTORING CLEAN CODE 📝                         ║
║                                                                          ║
║              Clean Code Principles & English Naming                      ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔄 Overview | 📝 Naming | 🎨 Formatting | 📊 Comparison | 💡 Takeaways |
|:-----------:|:---------:|:-------------:|:-------------:|:------------:|
| [Jump](#-kenapa-refactoring) | [Jump](#-refactoring-naming-convention) | [Jump](#-refactoring-formatting) | [Jump](#-perbandingan) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami prinsip **clean code**
- ✅ Menerapkan **English naming convention**
- ✅ Improve **readability & maintainability**
- ✅ Siap untuk production code

---

## 🔄 Kenapa Refactoring?

### **Kode dari Part 2:**
```javascript
const angkaPrima = (angka) => {
  if (angka <= 1) return false
  if (angka === 2) return true
  if (angka % 2 === 0) return false

  const limit = Math.sqrt(angka)
  for (let i = 3; i <= limit; i += 2) {
    if (angka % i === 0) return false
  }

  return true
}
```

**Sudah benar, tapi bisa lebih baik!**

**Target Refactoring:**
- ✅ English naming convention
- ✅ Lebih deskriptif
- ✅ Tambah komentar (optional tapi bagus)
- ✅ Professional style

---

## 📝 Refactoring: Naming Convention

### **Before (Bahasa Indonesia):**
```javascript
const angkaPrima = (angka) => {
  const limit = Math.sqrt(angka)
  // ...
}
```

### **After (English):**
```javascript
const isPrime = (num) => {
  const limit = Math.sqrt(num)
  // ...
}
```

### **Changes:**
```diff
- const angkaPrima = (angka) => {
+ const isPrime = (num) => {
```

### **Kenapa English?**

**Alasan:**
- ✅ Standard internasional
- ✅ Lebih mudah collaborate dengan developer global
- ✅ Konsisten dengan library/framework lain
- ✅ Best practice industri

**Convention:**
- Function boolean → `is`, `has`, `can`
- Contoh: `isPrime`, `isValid`, `hasPermission`

---

## 🎨 Refactoring: Formatting & Comments

### **Versi 1: Tanpa Komentar (Minimalist)**
```javascript
const isPrime = (num) => {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  const limit = Math.sqrt(num)
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false
  }

  return true
}
```

**Karakteristik:**
- Clean & simple
- Self-documenting code
- Cocok untuk developer berpengalaman

---

### **Versi 2: Dengan Komentar (Documented)**
```javascript
const isPrime = (num) => {
  // Numbers less than or equal to 1 are not prime
  if (num <= 1) return false
  
  // 2 is the only even prime number
  if (num === 2) return true
  
  // All other even numbers are not prime
  if (num % 2 === 0) return false

  // Check odd divisors up to the square root of num
  const limit = Math.sqrt(num)
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false
  }

  return true
}
```

**Karakteristik:**
- Self-explanatory
- Cocok untuk team atau learning
- Mudah di-maintain

---

### **Versi 3: Enhanced Readability**
```javascript
const isPrime = (num) => {
  // Handle edge cases
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  // Check for odd divisors
  const squareRoot = Math.sqrt(num)
  for (let divisor = 3; divisor <= squareRoot; divisor += 2) {
    if (num % divisor === 0) return false
  }

  return true
}
```

**Karakteristik:**
- Nama variabel sangat deskriptif
- `squareRoot` lebih jelas dari `limit`
- `divisor` lebih jelas dari `i`
- Maximum readability

---

## 📊 Perbandingan

### **Perbandingan 3 Versi:**

| Aspek | Minimalist | Documented | Enhanced |
|-------|-----------|------------|----------|
| **Readability** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Lines of Code** | 11 | 16 | 13 |
| **Self-Explanatory** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Best For** | Personal | Team | Production |

### **Pilih Mana?**

**Minimalist:** 
- ✅ Code compact
- ✅ Experienced developer
- ❌ Perlu waktu untuk understand logic

**Documented:**
- ✅ Komentar jelas
- ✅ Good for learning/teaching
- ❌ Sedikit lebih panjang

**Enhanced:**
- ✅ Variable names sangat jelas
- ✅ Balance antara compact & readable
- ✅ **Recommended untuk production!**

---

## 🎯 Clean Code Principles

### **1. Meaningful Names**

```javascript
// ❌ BAD
const isPrime = (n) => {
  const l = Math.sqrt(n)
  for (let i = 3; i <= l; i += 2) {
    // ...
  }
}

// ✅ GOOD
const isPrime = (num) => {
  const squareRoot = Math.sqrt(num)
  for (let divisor = 3; divisor <= squareRoot; divisor += 2) {
    // ...
  }
}
```

**Prinsip:** Nama harus menjelaskan purpose-nya!

---

### **2. Small Functions**

```javascript
// ✅ GOOD - Single responsibility
const isPrime = (num) => {
  if (!isValidPrimeCandidate(num)) return false
  return hasNoDivisors(num)
}
```

**Prinsip:** One function, one job!

---

### **3. Early Return**

```javascript
// ✅ GOOD - Guard clauses
if (num <= 1) return false
if (num === 2) return true
if (num % 2 === 0) return false

// ❌ BAD - Deep nesting
if (num > 1) {
  if (num === 2) {
    return true
  } else {
    if (num % 2 !== 0) {
      // ...
    }
  }
}
```

**Prinsip:** Fail fast, return early!

---

### **4. Consistent Style**

```javascript
// ✅ GOOD - Consistent spacing
if (num <= 1) return false
if (num === 2) return true
if (num % 2 === 0) return false

// ❌ BAD - Inconsistent
if(num<=1)return false
if (num === 2) return true
if(num%2===0) return false
```

**Prinsip:** Consistency matters!

---

## 🧪 Testing Structure

### **Professional Test Format:**

```javascript
const isPrime = (num) => {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  const squareRoot = Math.sqrt(num)
  for (let divisor = 3; divisor <= squareRoot; divisor += 2) {
    if (num % divisor === 0) return false
  }

  return true
}

// Test cases
const testCases = [
  // Edge cases
  { input: 0, expected: false, description: "Zero is not prime" },
  { input: 1, expected: false, description: "One is not prime" },
  { input: 2, expected: true, description: "Two is prime" },
  
  // Small primes
  { input: 3, expected: true, description: "Three is prime" },
  { input: 7, expected: true, description: "Seven is prime" },
  
  // Non-primes
  { input: 4, expected: false, description: "Four is not prime" },
  { input: 9, expected: false, description: "Nine is not prime" },
  
  // Larger numbers
  { input: 23, expected: true, description: "Twenty-three is prime" },
  { input: 33, expected: false, description: "Thirty-three is not prime" },
]

// Run tests
testCases.forEach(({ input, expected, description }) => {
  const result = isPrime(input)
  const status = result === expected ? '✅ PASS' : '❌ FAIL'
  console.log(`${status}: ${description} - isPrime(${input}) = ${result}`)
})
```

**Output:**
```
✅ PASS: Zero is not prime - isPrime(0) = false
✅ PASS: One is not prime - isPrime(1) = false
✅ PASS: Two is prime - isPrime(2) = true
✅ PASS: Three is prime - isPrime(3) = true
✅ PASS: Seven is prime - isPrime(7) = true
✅ PASS: Four is not prime - isPrime(4) = false
✅ PASS: Nine is not prime - isPrime(9) = false
✅ PASS: Twenty-three is prime - isPrime(23) = true
✅ PASS: Thirty-three is not prime - isPrime(33) = false
```

---

## 📝 Kode Final (Production-Ready)

```javascript
/**
 * Check if a number is prime
 * @param {number} num - The number to check
 * @returns {boolean} - True if prime, false otherwise
 */
const isPrime = (num) => {
  // Handle edge cases
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  // Check for odd divisors up to square root
  const squareRoot = Math.sqrt(num)
  for (let divisor = 3; divisor <= squareRoot; divisor += 2) {
    if (num % divisor === 0) return false
  }

  return true
}

export default isPrime
```

**Karakteristik:**
- ✅ JSDoc comments
- ✅ English naming
- ✅ Descriptive variables
- ✅ Export ready
- ✅ Production-ready!

---

## ✅ Key Takeaways

**Tentang Naming:**

> **💡 English is Standard**  
> Gunakan English untuk naming convention

> **💡 Boolean Functions → is/has/can**  
> `isPrime`, `isValid`, `hasPermission`

> **💡 Descriptive Names**  
> `squareRoot` lebih baik dari `limit`

**Tentang Clean Code:**

> **💡 Self-Documenting Code**  
> Nama yang baik = less comments needed

> **💡 Consistency Matters**  
> Spacing, style, format harus konsisten

> **💡 Guard Clauses First**  
> Early return untuk edge cases

**Tentang Production:**

> **💡 JSDoc for Documentation**  
> Jelaskan parameter & return value

> **💡 Export/Import Ready**  
> Siap dipakai di project lain

> **💡 Professional Testing**  
> Test dengan description yang jelas

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔧 [← Kembali ke Part 2: Perbaikan Step-by-Step](02-Perbaikan-Step-by-Step.md)**
- **🚀 [Lanjut ke Part 4: Alternatif 1 - Optimasi →](04-Alternatif-1-Optimasi.md)**

---

<div align="center">

**Siap eksplorasi optimasi lebih lanjut di Part 4?**

Made with ❤️ for learners

</div>
