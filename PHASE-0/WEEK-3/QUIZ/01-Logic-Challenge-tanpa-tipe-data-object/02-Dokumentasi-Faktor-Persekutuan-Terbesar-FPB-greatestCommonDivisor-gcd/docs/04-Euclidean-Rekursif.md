```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              ⚡ PART 4: EUCLIDEAN ALGORITHM - REKURSIF ⚡              ║
║                                                                          ║
║                  Hanya 2 Baris - Paling Elegant!                         ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🧠 Konsep | 💡 Code | 🔍 Trace | 📊 Comparison | 💡 Takeaways |
|:---------:|:-------:|:--------:|:-------------:|:------------:|
| [Jump](#-konsep-recursion) | [Jump](#-implementasi) | [Jump](#-trace-execution) | [Jump](#-iteratif-vs-rekursif) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Memahami recursion untuk GCD
- ✅ Implementasi versi rekursif
- ✅ Iteratif vs rekursif trade-offs
- ✅ Kapan pakai yang mana

---

## 🧠 Konsep Recursion

**Recursion** = Function yang memanggil dirinya sendiri

### **Struktur Recursion:**
```
1. Base Case (kondisi berhenti)
2. Recursive Case (panggil function lagi)
```

### **Untuk GCD:**
```
Base Case: Jika num2 = 0 → return num1
Recursive: Return gcd(num2, num1 % num2)
```

---

## 💡 Implementasi

```javascript
const gcd = (num1, num2) => {
  if (num2 === 0) return num1
  return gcd(num2, num1 % num2)
}
```

**That's it! Hanya 2 baris executable!** ✨

### **Penjelasan:**

**Line 1: Base Case**
```javascript
if (num2 === 0) return num1
```
- Stop recursion saat num2 = 0
- num1 adalah jawabannya

**Line 2: Recursive Case**
```javascript
return gcd(num2, num1 % num2)
```
- Panggil gcd lagi dengan parameter baru
- num2 jadi num1, (num1 % num2) jadi num2

---

## 🔍 Trace Execution

### **Example: GCD(12, 16)**

```javascript
gcd(12, 16)

// Call 1
gcd(12, 16)
  → num2 = 16 ≠ 0
  → return gcd(16, 12 % 16)
  → return gcd(16, 12)

// Call 2
gcd(16, 12)
  → num2 = 12 ≠ 0
  → return gcd(12, 16 % 12)
  → return gcd(12, 4)

// Call 3
gcd(12, 4)
  → num2 = 4 ≠ 0
  → return gcd(4, 12 % 4)
  → return gcd(4, 0)

// Call 4 (Base Case!)
gcd(4, 0)
  → num2 = 0 ✅
  → return 4

Result: 4 ✅
```

### **Call Stack Visualization:**
```
gcd(12, 16)
  └─ gcd(16, 12)
      └─ gcd(12, 4)
          └─ gcd(4, 0)
              └─ return 4 ⬆️
          └─ return 4 ⬆️
      └─ return 4 ⬆️
  └─ return 4 ⬆️

Final: 4 ✅
```

---

## 📊 Iteratif vs Rekursif

### **Code Comparison:**

**Iteratif (7 baris):**
```javascript
const gcd = (num1, num2) => {
  while (num2 > 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }
  return num1
}
```

**Rekursif (2 baris):**
```javascript
const gcd = (num1, num2) => {
  if (num2 === 0) return num1
  return gcd(num2, num1 % num2)
}
```

### **Metrics:**

| Aspek | Iteratif | Rekursif |
|-------|----------|----------|
| **Lines of Code** | 7 | **2** ⭐ |
| **Complexity** | O(log n) | O(log n) |
| **Space** | O(1) | O(log n) (call stack) |
| **Readability** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Stack Overflow Risk** | No | Yes (sangat jarang) |
| **Best for** | Production (safe) | Interview, Clean code |

---

## 🎯 Kapan Pakai?

### **✅ Rekursif:**
- Interview coding
- Competitive programming
- Clean codebase
- Prefer elegance

### **✅ Iteratif:**
- Production critical system
- Memory constraint ketat
- Stack overflow concern
- Team kurang familiar recursion

---

## 🐛 Common Pitfalls

### **1. Lupa base case**
```javascript
// ❌ SALAH - Stack overflow!
const gcd = (num1, num2) => {
  return gcd(num2, num1 % num2)
}

// ✅ BENAR
const gcd = (num1, num2) => {
  if (num2 === 0) return num1  // Base case!
  return gcd(num2, num1 % num2)
}
```

### **2. Return salah**
```javascript
// ❌ SALAH
if (num2 === 0) return num2  // return 0!

// ✅ BENAR
if (num2 === 0) return num1
```

### **3. Parameter terbalik**
```javascript
// ❌ SALAH
return gcd(num1 % num2, num2)

// ✅ BENAR
return gcd(num2, num1 % num2)
```

---

## 🧪 Test Cases

```javascript
const testCases = [
  { input: [12, 16], expected: 4 },
  { input: [50, 40], expected: 10 },
  { input: [22, 99], expected: 11 },
  { input: [24, 36], expected: 12 },
  { input: [17, 23], expected: 1 },
]

testCases.forEach(({ input, expected }, index) => {
  const result = gcd(input[0], input[1])
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
```

---

## 🧮 Pseudocode

```
FUNCTION gcd(num1, num2):
  
  IF num2 = 0 THEN
    RETURN num1
  END IF
  
  RETURN gcd(num2, num1 MOD num2)
  
END FUNCTION
```

---

## 🎨 Alternative Styles

### **Style 1: One-liner (Extreme)**
```javascript
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
```
- ✅ Ultra compact
- ⚠️ Kurang readable untuk pemula

### **Style 2: Explicit (Current)**
```javascript
const gcd = (num1, num2) => {
  if (num2 === 0) return num1
  return gcd(num2, num1 % num2)
}
```
- ✅ Balance readability & elegance
- ✅ **Recommended!**

### **Style 3: Verbose**
```javascript
const gcd = (num1, num2) => {
  // Base case: when num2 becomes 0
  if (num2 === 0) {
    return num1
  }
  
  // Recursive case: swap and modulo
  const remainder = num1 % num2
  return gcd(num2, remainder)
}
```
- ✅ Very clear untuk teaching
- ⚠️ Agak panjang

---

## 💡 Why Recursion Elegant?

### **Compare:**

**Iteratif (Manual State Management):**
```javascript
while (num2 > 0) {
  const temp = num2      // Save state
  num2 = num1 % num2     // Update num2
  num1 = temp            // Update num1
}
```

**Rekursif (Automatic via Call Stack):**
```javascript
return gcd(num2, num1 % num2)
```

**Recursion = Let the call stack handle state!**

---

## 💡 Key Takeaways

> **2 Lines = Powerful**  
> Recursion bisa sangat concise

> **Base Case = Must**  
> Tanpa base case = stack overflow

> **Call Stack = Memory**  
> Space O(log n) vs O(1) iteratif

> **Interview Favorite**  
> Rekursif lebih "impressive" di interview

> **Production = Consider Trade-offs**  
> Iteratif lebih safe untuk critical system

> **Elegance ≠ Always Better**  
> Choose based on context

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🚀 [← Kembali ke Part 3: Euclidean Iteratif](03-Euclidean-Iteratif.md)**
- **📋 [Lanjut ke Part 5: Ringkasan Algoritma →](05-Ringkasan-Algoritma.md)**

---

<div align="center">

**Siap lihat ringkasan detail 3 versi di Part 5?**

Made with ❤️ for learners

</div>
