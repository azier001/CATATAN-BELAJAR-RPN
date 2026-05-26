```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              🚀 PART 3: EUCLIDEAN ALGORITHM - ITERATIF 🚀              ║
║                                                                          ║
║                  O(n) → O(log n) - Lebih Cepat 1000x!                   ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🧠 Konsep | 💡 Code | 🔍 Trace | 📊 Comparison | 💡 Takeaways |
|:---------:|:-------:|:--------:|:-------------:|:------------:|
| [Jump](#-konsep-euclidean-algorithm) | [Jump](#-implementasi) | [Jump](#-trace-execution) | [Jump](#-comparison) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Memahami Euclidean Algorithm
- ✅ Implementasi versi iteratif
- ✅ Kenapa jauh lebih cepat
- ✅ Trade-offs vs brute force

---

## 🧠 Konsep Euclidean Algorithm

### **Prinsip Dasar:**
```
GCD(a, b) = GCD(b, a % b)
```

Terus diulang sampai salah satu angka = 0, maka angka satunya = GCD!

### **Contoh: GCD(50, 40)**

```
Step 1: GCD(50, 40)
  → 50 % 40 = 10
  → GCD(50, 40) = GCD(40, 10)

Step 2: GCD(40, 10)
  → 40 % 10 = 0
  → GCD(40, 10) = GCD(10, 0)

Step 3: GCD(10, 0)
  → Salah satu = 0
  → HASIL = 10 ✅

Total: 3 iterasi (vs brute force 40 iterasi!)
```

### **Kenapa Lebih Cepat?**

| Metode | GCD(1000000, 999999) | Iterasi |
|--------|---------------------|---------|
| **Brute Force** | Loop 1 sampai 999999 | 999999 🐌 |
| **Euclidean** | Modulo & swap | ~40 ⚡ |

**Speedup: ~25,000x lebih cepat!**

---

## 💡 Implementasi

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

### **Step-by-Step:**

1. **While loop** selama `num2 > 0`
2. **Simpan** `num2` ke `temp`
3. **Update** `num2` dengan sisa: `num1 % num2`
4. **Update** `num1` dengan `temp` (num2 lama)
5. **Repeat** sampai `num2 = 0`
6. **Return** `num1`

### **Keywords:**
- 🔄 **while loop** (kondisi: num2 > 0)
- 🔁 **swap** (num1 ↔ num2)
- ➗ **modulo** (num1 % num2)
- 🛑 **base case** (num2 = 0)
- ⏱️ **O(log n)** complexity

---

## 🔍 Trace Execution

### **Example 1: GCD(12, 16)**

```javascript
gcd(12, 16)

// Iterasi 1
num1 = 12, num2 = 16
temp = 16
num2 = 12 % 16 = 12
num1 = 16
→ Sekarang: num1 = 16, num2 = 12

// Iterasi 2
num1 = 16, num2 = 12
temp = 12
num2 = 16 % 12 = 4
num1 = 12
→ Sekarang: num1 = 12, num2 = 4

// Iterasi 3
num1 = 12, num2 = 4
temp = 4
num2 = 12 % 4 = 0
num1 = 4
→ Sekarang: num1 = 4, num2 = 0

// Loop stop (num2 = 0)
return num1 = 4 ✅
```

### **Example 2: GCD(22, 99)**

```javascript
gcd(22, 99)

// Iterasi 1
num1 = 22, num2 = 99
temp = 99
num2 = 22 % 99 = 22
num1 = 99
→ num1 = 99, num2 = 22

// Iterasi 2
num1 = 99, num2 = 22
temp = 22
num2 = 99 % 22 = 11
num1 = 22
→ num1 = 22, num2 = 11

// Iterasi 3
num1 = 22, num2 = 11
temp = 11
num2 = 22 % 11 = 0
num1 = 11
→ num1 = 11, num2 = 0

// Loop stop
return 11 ✅
```

---

## 📊 Comparison

### **Brute Force vs Euclidean:**

| Aspek | Brute Force | Euclidean |
|-------|-------------|-----------|
| **Algoritma** | Loop 1 to min(a,b) | Modulo & swap |
| **Complexity** | O(n) | **O(log n)** |
| **GCD(12, 16)** | 12 iterasi | **3 iterasi** |
| **GCD(1M, 999K)** | 999999 iterasi | **~40 iterasi** |
| **Readability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Performance** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Best for** | Learning | **Production** |

---

## 🎯 Kapan Pakai?

### **✅ Gunakan Euclidean Jika:**
- Production code
- Performa penting
- Processing angka besar
- Modern codebase

### **⚠️ Gunakan Brute Force Jika:**
- Learning/teaching
- Easy debugging diperlukan
- Angka dijamin kecil (<100)

---

## 🐛 Common Pitfalls

### **1. Lupa variable temp**
```javascript
// ❌ SALAH - num2 overwritten
num2 = num1 % num2
num1 = num2  // num2 sudah berubah!

// ✅ BENAR - simpan dulu
const temp = num2
num2 = num1 % num2
num1 = temp
```

### **2. Kondisi loop salah**
```javascript
// ❌ SALAH - infinite loop
while (num2 !== 0)

// ✅ BENAR
while (num2 > 0)
```

### **3. Return salah**
```javascript
// ❌ SALAH
return num2  // num2 = 0!

// ✅ BENAR
return num1
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
Test #1: ✅ PASS (3 iterasi vs 12 brute force)
Test #2: ✅ PASS (3 iterasi vs 40 brute force)
Test #3: ✅ PASS (3 iterasi vs 22 brute force)
Test #4: ✅ PASS (3 iterasi vs 24 brute force)
Test #5: ✅ PASS (5 iterasi vs 17 brute force)
```

---

## 🧮 Pseudocode

```
FUNCTION gcd(num1, num2):
  
  WHILE num2 > 0:
    temp = num2
    num2 = num1 MOD num2
    num1 = temp
  END WHILE
  
  RETURN num1
  
END FUNCTION
```

---

## 💡 Mnemonic: "S-M-S"

**S**ave (simpan num2 ke temp)  
**M**odulo (num2 = num1 % num2)  
**S**wap (num1 = temp)

Repeat sampai num2 = 0!

---

## 💡 Key Takeaways

> **Euclidean = Game Changer**  
> O(n) → O(log n) = drastis!

> **Modulo is Key**  
> Operasi % membuat angka mengecil cepat

> **Swap Pattern**  
> num1 ↔ num2 setiap iterasi

> **Base Case = 0**  
> Loop stop saat num2 = 0

> **Production Ready**  
> Algoritma standar industri

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📝 [← Kembali ke Part 2: Refactoring Naming](02-Refactoring-Naming.md)**
- **🎯 [Lanjut ke Part 4: Euclidean Rekursif →](04-Euclidean-Rekursif.md)**

---

<div align="center">

**Siap lihat versi rekursif yang lebih elegant di Part 4?**

Made with ❤️ for learners

</div>
