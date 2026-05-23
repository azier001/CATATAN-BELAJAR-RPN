# 📝 Part 2: Refactoring Clean Code
```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📝 PART 2: REFACTORING CLEAN CODE 📝                       ║
║                                                                          ║
║                  2 Versi: For Loop & Filter Method                       ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)

---

## 🎯 Tujuan

- ✅ Refactor ke English naming
- ✅ Improve variable naming
- ✅ Explore 2 pendekatan berbeda

---

## 🔄 Refactoring Changes

### **Original → Clean Code**
```diff
- function mengelompokkanAngka(arr) {
+ function groupNumbers(numbers) {
-   const even = []
+   const evenNumbers = []
-   const odd = []
+   const oddNumbers = []
-   const multipleOfThree = []
+   const multiplesOfThree = []

-   for (const number of arr) {
+   for (const value of numbers) {
-     if (number % 3 === 0) {
+     if (value % 3 === 0) {
-       multipleOfThree.push(number)
+       multiplesOfThree.push(value)
-     } else if (number % 2 === 0) {
+     } else if (value % 2 === 0) {
-       even.push(number)
+       evenNumbers.push(value)
      } else {
-       odd.push(number)
+       oddNumbers.push(value)
      }
    }

-   return [even, odd, multipleOfThree]
+   return [evenNumbers, oddNumbers, multiplesOfThree]
  }
```

**Changes:**
1. Function: `mengelompokkanAngka` → `groupNumbers`
2. Parameter: `arr` → `numbers`
3. Variables: `even` → `evenNumbers` (plural, descriptive)
4. Loop variable: `number` → `value` (avoid confusion)

---

## ✅ Versi 1: For Loop (Clean)
```javascript
function groupNumbers(numbers) {
  const evenNumbers = []
  const oddNumbers = []
  const multiplesOfThree = []

  for (const value of numbers) {
    if (value % 3 === 0) {
      multiplesOfThree.push(value)
    } else if (value % 2 === 0) {
      evenNumbers.push(value)
    } else {
      oddNumbers.push(value)
    }
  }

  return [evenNumbers, oddNumbers, multiplesOfThree]
}
```

**Karakteristik:**
- ✅ **O(n)** - Loop sekali
- ✅ Mudah dipahami
- ✅ Easy to debug
- ✅ Cocok untuk pemula

**Test:**
```javascript
console.log(groupNumbers([2, 4, 6]))
// [[2, 4], [], [6]] ✅

console.log(groupNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]))
// [[2, 4, 8], [1, 5, 7], [3, 6, 9]] ✅
```

---

## 🔍 Versi 2: Filter Method
```javascript
function groupNumbers(numbers) {
  const evenNumbers = numbers.filter(
    number => number % 2 === 0 && number % 3 !== 0
  )

  const oddNumbers = numbers.filter(
    number => number % 2 !== 0 && number % 3 !== 0
  )

  const multiplesOfThree = numbers.filter(
    number => number % 3 === 0
  )

  return [evenNumbers, oddNumbers, multiplesOfThree]
}
```

**Karakteristik:**
- ✅ **O(3n)** - Loop 3 kali
- ✅ Declarative & readable
- ✅ Functional programming style
- ✅ Setiap kategori independen

**Penjelasan Filter:**

**Filter 1: Even Numbers**
```javascript
numbers.filter(number => number % 2 === 0 && number % 3 !== 0)
//                       ^^^^^^^^^^^^^^^^    ^^^^^^^^^^^^^^^^
//                       Genap                Bukan kelipatan 3
```

**Filter 2: Odd Numbers**
```javascript
numbers.filter(number => number % 2 !== 0 && number % 3 !== 0)
//                       ^^^^^^^^^^^^^^^^^    ^^^^^^^^^^^^^^^^
//                       Ganjil               Bukan kelipatan 3
```

**Filter 3: Multiples of Three**
```javascript
numbers.filter(number => number % 3 === 0)
//                       ^^^^^^^^^^^^^^^^
//                       Kelipatan 3
```

**Mengapa `&& number % 3 !== 0`?**

Karena kita perlu **exclude kelipatan 3** dari grup genap/ganjil:
```javascript
// Tanpa exclude:
[2, 4, 6].filter(n => n % 2 === 0)  // [2, 4, 6] ❌ (6 seharusnya tidak masuk)

// Dengan exclude:
[2, 4, 6].filter(n => n % 2 === 0 && n % 3 !== 0)  // [2, 4] ✅
```

**Test:**
```javascript
console.log(groupNumbers([2, 4, 6]))
// [[2, 4], [], [6]] ✅

console.log(groupNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]))
// [[2, 4, 8], [1, 5, 7], [3, 6, 9]] ✅
```

---

## 📊 Perbandingan

| Aspek | For Loop | Filter |
|-------|----------|--------|
| **Lines of Code** | 13 | 15 |
| **Complexity** | O(n) | O(3n) |
| **Readability** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Learning Curve** | Easy | Medium |
| **Debugging** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Best For** | Pemula, solo | Modern codebase |

---

## 🎯 Kapan Pakai Versi Mana?

### **Gunakan For Loop:**
- ✅ Tim dengan berbagai skill level
- ✅ Performance critical (array besar)
- ✅ Prefer imperative style
- ✅ Easy debugging penting

### **Gunakan Filter:**
- ✅ Modern JavaScript codebase
- ✅ Team familiar dengan FP
- ✅ Readability > performance
- ✅ Array kecil-sedang

---

## 💡 Naming Best Practices

### **1. English Convention**
```javascript
// ✅ GOOD
function groupNumbers(numbers) { }

// ❌ BAD - Mixing languages
function mengelompokkanAngka(numbers) { }
```

### **2. Descriptive Names**
```javascript
// ✅ GOOD - Clear intent
const evenNumbers = []

// ❌ BAD - Too generic
const arr1 = []

// ⚠️ OK - But could be better
const even = []
```

### **3. Plural for Collections**
```javascript
// ✅ GOOD - Plural indicates array
const numbers = [1, 2, 3]
const multiplesOfThree = [3, 6, 9]

// ❌ BAD - Singular for array
const number = [1, 2, 3]
const multipleOfThree = [3, 6, 9]
```

### **4. Avoid Abbreviations**
```javascript
// ✅ GOOD
const evenNumbers = []

// ❌ BAD
const evnNums = []
const eN = []
```

---

## 🔑 Key Takeaways

> **💡 English Naming is Standard**  
> Industry best practice untuk maintainability

> **💡 Descriptive > Short**  
> `evenNumbers` lebih baik dari `even` atau `arr1`

> **💡 Multiple Valid Solutions**  
> For loop dan filter keduanya valid - pilih sesuai context

> **💡 Consistency Matters**  
> Jika pakai plural untuk satu variable, gunakan untuk semua

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📚 [← Kembali ke Part 1](01-Review-Kode-Awal.md)**
- **📋 [Lanjut ke Part 3: Ringkasan Algoritma →](03-Ringkasan-Algoritma.md)**

---

<div align="center">

**Ada 1 versi lagi di Part 3! (Reduce method)**

Made with ❤️ for learners

</div>
