```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 RINGKASAN ALGORITMA 📋                                  ║
║                                                                          ║
║              3 Versi Lengkap: Brute Force, Iteratif, Rekursif           ║
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
- ✅ Quick reference untuk interview/ujian

---

## 🔢 Versi 1: Brute Force

> 💡 **Best for:** Learning, debugging, pemula

### **Code:**
<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const gcd = (num1, num2) => {
  // Handle edge case: salah satu atau keduanya 0
  if (num1 === 0) return num2
  if (num2 === 0) return num1
  
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

</details>

### **Konsep Inti:**
```
Handle edge case (0) dulu
Loop 1 sampai min(num1, num2)
Cek setiap i apakah membagi habis kedua angka
Simpan pembagi terbesar
Return currentGcd
```

### **Step-by-Step (Detail):**
1. **Edge case:** Jika `num1 === 0` → return `num2`
2. **Edge case:** Jika `num2 === 0` → return `num1`
3. **Set initial:** `currentGcd = 1` (GCD minimum)
4. **Hitung batas:** `minNumber = Math.min(num1, num2)`
5. **Loop dari i = 1 sampai minNumber:**
   - Cek: `num1 % i === 0 && num2 % i === 0`
   - Jika ya → update `currentGcd = i`
6. **Return** `currentGcd`

### **Keywords:**
- 🔄 **for loop** - Iterasi 1 to min
- ➗ **modulo check** - Cek kedua angka
- 📦 **update result** - Simpan terbesar
- ⏱️ **O(n)** complexity

### **Kapan Pakai:**
- ✅ Learning & teaching
- ✅ Easy debugging
- ✅ Angka kecil (<100)
- ❌ Production (terlalu lambat)

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa handle edge case zero**
```javascript
// ❌ SALAH - gcd(0, 5) akan return 0 atau error
let currentGcd = 1
const minNumber = Math.min(num1, num2)  // min(0, 5) = 0

// ✅ BENAR - Handle dulu
if (num1 === 0) return num2
if (num2 === 0) return num1
```

**2) ❌ Loop terlalu banyak**
```javascript
// ❌ SALAH - Loop sampai num1
for (let i = 1; i <= num1; i++)

// ✅ BENAR - Loop sampai min
const minNumber = Math.min(num1, num2)
for (let i = 1; i <= minNumber; i++)
```

**3) ❌ Lupa cek kedua angka**
```javascript
// ❌ SALAH - Cuma cek num1
if (num1 % i === 0)

// ✅ BENAR - Cek keduanya
if (num1 % i === 0 && num2 % i === 0)
```

**4) ❌ Return di dalam loop**
```javascript
// ❌ SALAH - Return pertama ketemu
if (num1 % i === 0 && num2 % i === 0) {
  return i
}

// ✅ BENAR - Update terus, return di akhir
if (num1 % i === 0 && num2 % i === 0) {
  currentGcd = i
}
```

### **💡 Insight Penting:**

> **Loop sampai min(a,b), bukan max!**  
> GCD tidak mungkin lebih besar dari angka terkecil.

---

## ⚡ Versi 2: Euclidean Iteratif

> 💡 **Best for:** Production, performance, safety

### **Code:**
<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Swap & modulo berulang kali
GCD(a, b) = GCD(b, a % b)
Loop sampai salah satu = 0
Yang bukan 0 adalah GCD
```

### **Step-by-Step (Detail):**
1. **While loop** selama `num2 > 0`
2. **Simpan** `num2` ke `temp`
3. **Update** `num2 = num1 % num2` (sisa pembagian)
4. **Update** `num1 = temp` (num2 lama)
5. **Repeat** sampai `num2 = 0`
6. **Return** `num1`

### **Keywords:**
- 🔁 **while loop** - Kondisi: num2 > 0
- 🔄 **swap pattern** - num1 ↔ num2
- ➗ **modulo** - num1 % num2
- 💾 **temp variable** - Save state
- ⏱️ **O(log n)** complexity

### **Kapan Pakai:**
- ✅ Production code
- ✅ Performance penting
- ✅ Memory constraint
- ✅ **RECOMMENDED default!**

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa temp variable**
```javascript
// ❌ SALAH - num2 overwritten
num2 = num1 % num2
num1 = num2  // num2 sudah berubah!

// ✅ BENAR - Simpan dulu
const temp = num2
num2 = num1 % num2
num1 = temp
```

**2) ❌ Kondisi loop salah**
```javascript
// ❌ SALAH - Bisa infinite
while (num2 !== 0)

// ✅ BENAR
while (num2 > 0)
```

**3) ❌ Return salah**
```javascript
// ❌ SALAH - Return 0!
return num2

// ✅ BENAR
return num1
```

### **💡 Insight Penting:**

> **Modulo membuat angka mengecil drastis!**  
> Contoh: 50 % 40 = 10, 40 % 10 = 0 (hanya 2 iterasi vs 40 di brute force)

---

## 🎯 Versi 3: Euclidean Rekursif

> 💡 **Best for:** Interview, competitive programming, elegance

### **Code:**
<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const gcd = (num1, num2) => {
  if (num2 === 0) return num1
  return gcd(num2, num1 % num2)
}
```

</details>

### **Konsep Inti:**
```
Recursion dengan base case num2 = 0
Function memanggil dirinya sendiri
Call stack handle state otomatis
Paling concise (2 baris)
```

### **Step-by-Step (Detail):**
1. **Base case:** Jika `num2 === 0` → return `num1`
2. **Recursive:** Return `gcd(num2, num1 % num2)`
3. **Call stack** handle swap & modulo otomatis
4. **Unwind** sampai base case

### **Keywords:**
- 🔁 **recursion** - Self-calling
- 🛑 **base case** - num2 = 0
- 📞 **call stack** - Automatic state
- ⏱️ **O(log n)** time
- 💾 **O(log n)** space

### **Kapan Pakai:**
- ✅ Interview coding
- ✅ Competitive programming
- ✅ Clean codebase
- ⚠️ Production (consider stack limit)

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa base case**
```javascript
// ❌ SALAH - Stack overflow!
const gcd = (num1, num2) => {
  return gcd(num2, num1 % num2)
}

// ✅ BENAR
const gcd = (num1, num2) => {
  if (num2 === 0) return num1
  return gcd(num2, num1 % num2)
}
```

**2) ❌ Base case salah**
```javascript
// ❌ SALAH - Return 0!
if (num2 === 0) return num2

// ✅ BENAR
if (num2 === 0) return num1
```

**3) ❌ Parameter terbalik**
```javascript
// ❌ SALAH
return gcd(num1 % num2, num2)

// ✅ BENAR
return gcd(num2, num1 % num2)
```

### **💡 Insight Penting:**

> **Recursion = Elegant tapi pakai stack!**  
> Call stack handle state, tapi konsumsi memory O(log n)

---

## 📊 Perbandingan Lengkap

| Aspek | Brute Force | Iteratif | Rekursif |
|-------|-------------|----------|----------|
| **Lines** | 9 | 7 | **2** ⭐ |
| **Time** | O(n) | **O(log n)** | **O(log n)** |
| **Space** | O(1) | **O(1)** | O(log n) |
| **Readability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Performance** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Safety** | ✅ | ✅ | ⚠️ (stack) |
| **Best For** | Learning | **Production** | Interview |

### **Performance untuk GCD(50, 40):**

| Versi | Iterasi | Detail |
|-------|---------|--------|
| Brute Force | 40 | Loop 1 sampai 40 |
| Iteratif | 3 | Swap & modulo 3x |
| Rekursif | 3 | 3 recursive calls |

**Euclidean ~13x lebih cepat!** 🚀

---

## 🎯 Decision Tree

```
Apakah kamu pemula atau belajar?
├─ YES → Brute Force
└─ NO → Lanjut

Apakah production code?
├─ YES → Iteratif
└─ NO → Lanjut

Apakah interview atau competitive?
├─ YES → Rekursif
└─ NO → Iteratif (safe default)
```

**Default choice:** Iteratif - balance terbaik! ✅

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

## 🧪 Test Cases

```javascript
const testCases = [
  // Basic
  { input: [12, 16], expected: 4 },
  { input: [50, 40], expected: 10 },
  { input: [22, 99], expected: 11 },
  
  // Edge cases
  { input: [0, 5], expected: 5 },
  { input: [7, 0], expected: 7 },
  { input: [42, 42], expected: 42 },
  
  // Prima relatif
  { input: [17, 23], expected: 1 },
]

// Run tests (more informative)
testCases.forEach(({ input, expected }, index) => {
  const [a, b] = input
  const result = gcd(a, b)
  const isPass = result === expected
  
  if (isPass) {
    console.log(`Test #${index + 1}: ✅ PASS`)
  } else {
    console.log(`\n❌ FAIL - Test #${index + 1}`)
    console.log(`Input    : gcd(${a}, ${b})`)
    console.log(`Expected : ${expected}`)
    console.log(`Got      : ${result}`)
    console.log(`Reason   : expected ${expected}, but got ${result}`)
    console.log(`-----------------------------`)
  }
})
```

---

## 🎓 Pseudocode (Ujian)

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

## 🔑 Key Takeaways

> **Brute Force = Learning Tool**  
> Jangan pakai production

> **Euclidean = Game Changer**  
> O(n) → O(log n) drastis!

> **Iteratif = Safe Default**  
> Production-ready, no stack risk

> **Rekursif = Interview Gold**  
> Elegant tapi consider trade-offs

> **Context Matters**  
> Pilih sesuai kebutuhan

---

<div align="center">

## 🎯 Quick Reference Card

**Brute Force:** Loop 1 to min, check all  
**Iteratif:** `while (num2 > 0) { swap & modulo }`  
**Rekursif:** `if (num2 === 0) return num1; return gcd(num2, num1 % num2)`

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
