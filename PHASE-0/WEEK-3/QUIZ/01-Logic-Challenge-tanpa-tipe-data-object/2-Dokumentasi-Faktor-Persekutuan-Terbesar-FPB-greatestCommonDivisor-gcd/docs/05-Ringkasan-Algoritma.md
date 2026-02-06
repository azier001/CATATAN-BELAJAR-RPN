```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 PART 5: RINGKASAN ALGORITMA 📋                          ║
║                                                                          ║
║              3 Versi Lengkap: Brute Force, Iteratif, Rekursif           ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔢 Versi 1 | ⚡ Versi 2 | 🎯 Versi 3 | 📊 Comparison | 💡 Takeaways |
|:----------:|:----------:|:----------:|:-------------:|:------------:|
| [Jump](#-versi-1-brute-force) | [Jump](#️-versi-2-euclidean-iteratif) | [Jump](#-versi-3-euclidean-rekursif) | [Jump](#-perbandingan-lengkap) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Ringkasan detail 3 versi
- ✅ Step-by-step setiap versi
- ✅ Pitfalls & best practices
- ✅ Decision guide

---

## 🔢 Versi 1: Brute Force

> 💡 **Best for:** Learning, debugging, pemula

### **Code:**
```javascript
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
```

### **Konsep Inti:**
Loop 1 sampai min(num1, num2), simpan pembagi terbesar.

### **Step-by-Step:**
1. Set `currentGcd = 1` (GCD minimum)
2. Hitung `minNumber` (angka terkecil)
3. Loop `i` dari 1 sampai `minNumber`
4. Cek apakah `i` membagi habis **kedua** angka
5. Jika ya → update `currentGcd = i`
6. Return `currentGcd`

### **Keywords:**
- 🔄 **for loop** (1 to min)
- ➗ **modulo check** (kedua angka)
- 📦 **update result** (simpan yang terbesar)
- ⏱️ **O(n)** complexity

### **Pitfalls:**

```javascript
// ❌ Loop terlalu banyak
for (let i = 1; i <= num1; i++)  // Harusnya sampai min(num1, num2)

// ❌ Lupa cek kedua angka
if (num1 % i === 0)  // Harusnya cek num1 DAN num2

// ❌ Return di dalam loop
if (num1 % i === 0 && num2 % i === 0) {
  return i  // Salah! Ini return yang pertama ketemu, bukan terbesar
}
```

### **Kapan Pakai:**
- ✅ Learning & teaching
- ✅ Easy debugging
- ✅ Angka kecil (<100)
- ❌ Production (terlalu lambat)

---

## ⚡ Versi 2: Euclidean Iteratif

> 💡 **Best for:** Production, performance, safety

### **Code:**
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

### **Konsep Inti:**
Swap & modulo sampai salah satu jadi 0.

### **Step-by-Step:**
1. While `num2 > 0`
2. Simpan `num2` ke `temp`
3. Update `num2 = num1 % num2`
4. Update `num1 = temp`
5. Repeat sampai `num2 = 0`
6. Return `num1`

### **Keywords:**
- 🔁 **while loop** (kondisi: num2 > 0)
- 🔄 **swap pattern** (num1 ↔ num2)
- ➗ **modulo** (num1 % num2)
- 💾 **temp variable** (save state)
- ⏱️ **O(log n)** complexity

### **Pitfalls:**

```javascript
// ❌ Lupa temp variable
num2 = num1 % num2
num1 = num2  // num2 sudah berubah!

// ❌ Kondisi loop salah
while (num2 !== 0)  // Bisa infinite jika num2 negatif

// ❌ Return salah
return num2  // num2 = 0, harusnya return num1
```

### **Kapan Pakai:**
- ✅ Production code
- ✅ Performance penting
- ✅ Memory constraint
- ✅ **Recommended default!**

---

## 🎯 Versi 3: Euclidean Rekursif

> 💡 **Best for:** Interview, competitive programming, elegance

### **Code:**
```javascript
const gcd = (num1, num2) => {
  if (num2 === 0) return num1
  return gcd(num2, num1 % num2)
}
```

### **Konsep Inti:**
Recursion dengan base case num2 = 0.

### **Step-by-Step:**
1. **Base case:** Jika `num2 === 0` → return `num1`
2. **Recursive:** Return `gcd(num2, num1 % num2)`
3. Call stack handle state management
4. Unwind sampai base case

### **Keywords:**
- 🔁 **recursion** (self-calling)
- 🛑 **base case** (num2 = 0)
- 📞 **call stack** (automatic state)
- ⏱️ **O(log n)** time
- 💾 **O(log n)** space

### **Pitfalls:**

```javascript
// ❌ Lupa base case
const gcd = (num1, num2) => {
  return gcd(num2, num1 % num2)  // Stack overflow!
}

// ❌ Base case salah
if (num2 === 0) return num2  // Return 0!

// ❌ Parameter terbalik
return gcd(num1 % num2, num2)  // Salah urutan
```

### **Kapan Pakai:**
- ✅ Interview coding
- ✅ Competitive programming
- ✅ Clean codebase
- ⚠️ Production (consider stack limit)

---

## 📊 Perbandingan Lengkap

### **Performance:**

| Test Case | Brute Force | Iteratif | Rekursif |
|-----------|-------------|----------|----------|
| GCD(12, 16) | 12 iterasi | 3 iterasi | 3 calls |
| GCD(50, 40) | 40 iterasi | 3 iterasi | 3 calls |
| GCD(1M, 999K) | 999999 iterasi | ~40 iterasi | ~40 calls |

### **Metrics:**

| Aspek | Brute Force | Iteratif | Rekursif |
|-------|-------------|----------|----------|
| **Lines** | 9 | 7 | **2** ⭐ |
| **Time** | O(n) | **O(log n)** | **O(log n)** |
| **Space** | O(1) | **O(1)** | O(log n) |
| **Readability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Performance** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Safety** | ✅ | ✅ | ⚠️ (stack) |
| **Best For** | Learning | **Production** | Interview |

---

## 🎯 Decision Tree

```
Perlu performa tinggi?
├─ NO → Brute Force (learning)
└─ YES → Lanjut

Ada stack overflow concern?
├─ YES → Iteratif
└─ NO → Lanjut

Prefer elegance & short code?
├─ YES → Rekursif
└─ NO → Iteratif (default safe)
```

---

## 🧪 Test Semua Versi

```javascript
// Brute Force
const gcdBrute = (num1, num2) => {
  let currentGcd = 1
  const minNumber = Math.min(num1, num2)
  for (let i = 1; i <= minNumber; i++) {
    if (num1 % i === 0 && num2 % i === 0) currentGcd = i
  }
  return currentGcd
}

// Iteratif
const gcdIter = (num1, num2) => {
  while (num2 > 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }
  return num1
}

// Rekursif
const gcdRec = (num1, num2) => {
  if (num2 === 0) return num1
  return gcdRec(num2, num1 % num2)
}

// Test
const testCases = [
  { input: [12, 16], expected: 4 },
  { input: [50, 40], expected: 10 },
  { input: [22, 99], expected: 11 },
]

console.log('Brute Force:')
testCases.forEach(({ input, expected }) => {
  console.log(gcdBrute(...input) === expected ? '✅' : '❌')
})

console.log('\nIteratif:')
testCases.forEach(({ input, expected }) => {
  console.log(gcdIter(...input) === expected ? '✅' : '❌')
})

console.log('\nRekursif:')
testCases.forEach(({ input, expected }) => {
  console.log(gcdRec(...input) === expected ? '✅' : '❌')
})
```

---

## 🧮 Pseudocode Comparison

### **Brute Force:**
```
FOR i FROM 1 TO min(num1, num2):
  IF num1 MOD i = 0 AND num2 MOD i = 0:
    currentGcd = i
RETURN currentGcd
```

### **Iteratif:**
```
WHILE num2 > 0:
  temp = num2
  num2 = num1 MOD num2
  num1 = temp
RETURN num1
```

### **Rekursif:**
```
IF num2 = 0:
  RETURN num1
RETURN gcd(num2, num1 MOD num2)
```

---

## 💡 Mnemonic

### **Brute Force: "L-C-U"**
**L**oop semua  
**C**heck pembagi  
**U**pdate terbesar

### **Iteratif: "S-M-S"**
**S**ave (temp = num2)  
**M**odulo (num2 = num1 % num2)  
**S**wap (num1 = temp)

### **Rekursif: "B-R"**
**B**ase case (num2 = 0)  
**R**ecurse (swap & modulo)

---

## 💡 Key Takeaways

> **Tidak Ada "Best" Universal**  
> Pilih sesuai context

> **Brute Force = Learning Tool**  
> Jangan pakai production

> **Iteratif = Safe Default**  
> Production-ready, no stack risk

> **Rekursif = Interview Gold**  
> Elegant tapi consider trade-offs

> **Performance Matters**  
> O(n) vs O(log n) = drastis!

> **Readability vs Elegance**  
> Balance sesuai team & project

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🎯 [← Kembali ke Part 4: Euclidean Rekursif](04-Euclidean-Rekursif.md)**
- **🚀 [Lanjut ke Part 6: Performance & Alternatif →](06-Performance-Alternatif.md)**

---

<div align="center">

**Siap eksplorasi performance testing & alternatif di Part 6?**

Made with ❤️ for learners

</div>
