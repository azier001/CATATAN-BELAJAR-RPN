```markdown
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🎨 PART 5: FUNCTIONAL PROGRAMMING APPROACH 🎨                 ║
║                                                                          ║
║              Elegant Solutions dengan reduce(), filter(), map()          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Advanced-red)
![Time Complexity](https://img.shields.io/badge/Time-O(n)-brightgreen)
![Space Complexity](https://img.shields.io/badge/Space-O(n)-green)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-30%20minutes-blue)

---

## 🧭 Quick Jump

| 📝 Ringkasan | 💡 FP Intro | 🔧 reduce() | 🔍 filter() | 🗺️ map() | 💻 Full Code | ✅ Summary |
|:------------:|:-----------:|:-----------:|:-----------:|:--------:|:------------:|:----------:|
| [Jump](#-ringkasan-algoritma-versi-ujian) | [Jump](#-pengenalan-functional-programming) | [Jump](#-deep-dive-reduce) | [Jump](#-deep-dive-filter) | [Jump](#-deep-dive-map) | [Jump](#-implementasi-lengkap) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami **konsep Functional Programming** (FP)
- ✅ Menguasai **reduce()** untuk aggregation
- ✅ Menguasai **filter()** untuk data filtering
- ✅ Menguasai **map()** untuk transformation
- ✅ Bisa **combine** array methods untuk solusi elegant
- ✅ Memahami **trade-offs** FP vs Imperative

---

## 📝 Ringkasan Algoritma (Versi Ujian)

> **💡 Jika kamu sedang ujian dan hanya ingat konsepnya, ini yang perlu kamu tulis:**

### **Konsep Inti:**
```
Gunakan 3 array methods:
1. reduce() → Hitung totalProduct (skip zero)
2. filter() → Hitung berapa banyak zero
3. map() → Transform ke hasil akhir
```

### **Step-by-Step:**
```
const uniqueProduct = (arr) => {
  const totalProduct = arr.reduce(...)  // Kalikan semua non-zero
  const zeroCount = arr.filter(...).length  // Count zero
  
  return arr.map(num => {
    // Logic berdasarkan zeroCount
  })
}
```

### **Keywords Penting:**
- 🔄 **reduce()** - menggabungkan array jadi 1 nilai
- 🔍 **filter()** - menyaring elemen
- 🗺️ **map()** - transform tiap elemen
- 🎨 **Declarative** - fokus pada "apa", bukan "bagaimana"
- 🔗 **Chainable** - bisa digabung

---

<div align="center">

**⬇️ Scroll ke bawah untuk penjelasan super detail tiap method ⬇️**

</div>

---

## 💡 Pengenalan Functional Programming

### **🤔 Apa itu Functional Programming?**

Functional Programming (FP) adalah **programming paradigm** yang fokus pada:

1. **Functions as first-class citizens** - Function bisa dipassing seperti variable
2. **Immutability** - Data tidak diubah, selalu buat yang baru
3. **Pure functions** - Input sama → Output sama (no side effects)
4. **Declarative** - Describe "apa yang mau", bukan "bagaimana cara"

---

### **📊 Imperative vs Declarative**

#### **Imperative (HOW - Bagaimana)**

```javascript
// Kita instruksikan STEP BY STEP
const numbers = [1, 2, 3, 4, 5]
const doubled = []

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2)
}

console.log(doubled)  // [2, 4, 6, 8, 10]
```

**Fokus:** Kita atur detail **bagaimana** loop, index, push, dll.

---

#### **Declarative (WHAT - Apa yang mau)**

```javascript
// Kita describe APA yang mau
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(n => n * 2)

console.log(doubled)  // [2, 4, 6, 8, 10]
```

**Fokus:** Kita bilang **apa** yang mau (double setiap number), tidak peduli **bagaimana** implementasinya.

---

### **🎯 Analogi Real-World**

```
Imperative (Restaurant):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Pergi ke dapur, ambil panci, masukkan air,
nyalakan kompor, tunggu sampai mendidih,
masukkan mie, tunggu 3 menit..."

Declarative (Restaurant):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Saya mau mie rebus"

Fokus pada HASIL, bukan PROSES!
```

---

## 🔧 Deep Dive: reduce()

### **📖 Apa itu reduce()?**

`reduce()` adalah method yang **"mereduksi"** array menjadi **single value**.

**Syntax:**
```javascript
array.reduce((accumulator, currentValue) => {
  // Return nilai baru untuk accumulator
}, initialValue)
```

---

### **🎨 Visualisasi Konsep reduce()**

```
Input Array:  [2, 3, 4]
                ↓  ↓  ↓
                
reduce() process:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Step 0: acc = 1 (initial value)

Step 1: 
  acc = 1, current = 2
  return 1 * 2 = 2
  acc sekarang = 2

Step 2:
  acc = 2, current = 3
  return 2 * 3 = 6
  acc sekarang = 6

Step 3:
  acc = 6, current = 4
  return 6 * 4 = 24
  acc sekarang = 24

Final Result: 24 ✅
```

---

### **💻 Contoh reduce() untuk totalProduct**

```javascript
const arr = [2, 0, 4, 5]

const totalProduct = arr.reduce((acc, num) => {
  return num === 0 ? acc : acc * num
}, 1)

console.log(totalProduct)  // 40 (dari 2 × 4 × 5)
```

**Step-by-step trace:**

```
┌─────────────────────────────────────────────────┐
│ Input: [2, 0, 4, 5]                             │
│ Initial: acc = 1                                │
├─────────────────────────────────────────────────┤
│ Iterasi 1: num = 2                              │
│   num === 0? ❌ Tidak                           │
│   return acc * num = 1 * 2 = 2                  │
│   acc = 2 ✅                                    │
├─────────────────────────────────────────────────┤
│ Iterasi 2: num = 0                              │
│   num === 0? ✅ Ya!                             │
│   return acc (skip multiplication)              │
│   acc = 2 (tetap) ✅                            │
├─────────────────────────────────────────────────┤
│ Iterasi 3: num = 4                              │
│   num === 0? ❌ Tidak                           │
│   return acc * num = 2 * 4 = 8                  │
│   acc = 8 ✅                                    │
├─────────────────────────────────────────────────┤
│ Iterasi 4: num = 5                              │
│   num === 0? ❌ Tidak                           │
│   return acc * num = 8 * 5 = 40                 │
│   acc = 40 ✅                                   │
├─────────────────────────────────────────────────┤
│ RESULT: totalProduct = 40                       │
└─────────────────────────────────────────────────┘
```

---

### **🔄 reduce() Variations**

#### **Long Form (Explicit)**

```javascript
const totalProduct = arr.reduce((acc, num) => {
  if (num === 0) {
    return acc  // Skip zero
  } else {
    return acc * num
  }
}, 1)
```

#### **Ternary Form (Concise)**

```javascript
const totalProduct = arr.reduce((acc, num) => 
  num === 0 ? acc : acc * num
, 1)
```

#### **Arrow + Implicit Return**

```javascript
const totalProduct = arr.reduce((acc, num) => 
  num === 0 ? acc : acc * num, 1
)
```

> **💡 PRO TIP**  
> Gunakan yang paling readable untuk team kamu. Ternary biasanya sweet spot antara concise dan clear.

---

### **🎯 reduce() Use Cases**

```javascript
// 1. Sum array
const sum = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0)
// Result: 10

// 2. Find max
const max = [5, 2, 9, 1].reduce((acc, n) => Math.max(acc, n))
// Result: 9

// 3. Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange']
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1
  return acc
}, {})
// Result: { apple: 2, banana: 1, orange: 1 }

// 4. Flatten array
const nested = [[1, 2], [3, 4], [5]]
const flat = nested.reduce((acc, arr) => acc.concat(arr), [])
// Result: [1, 2, 3, 4, 5]
```

---

## 🔍 Deep Dive: filter()

### **📖 Apa itu filter()?**

`filter()` adalah method yang **"menyaring"** elemen array berdasarkan kondisi.

**Syntax:**
```javascript
array.filter((element) => {
  // Return true = keep, false = remove
})
```

**Output:** Array baru dengan elemen yang memenuhi kondisi

---

### **🎨 Visualisasi Konsep filter()**

```
Input Array:  [2, 0, 4, 0, 5]
               ↓  ↓  ↓  ↓  ↓

filter(num => num === 0)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Check each element:

2 === 0?  ❌ false → REMOVE
0 === 0?  ✅ true  → KEEP
4 === 0?  ❌ false → REMOVE
0 === 0?  ✅ true  → KEEP
5 === 0?  ❌ false → REMOVE

Output Array: [0, 0] ✅
```

---

### **💻 Contoh filter() untuk zeroCount**

```javascript
const arr = [2, 0, 4, 0, 5]

const zeroCount = arr.filter(num => num === 0).length

console.log(zeroCount)  // 2
```

**Visual Process:**

```
┌─────────────────────────────────────────────────┐
│ Input: [2, 0, 4, 0, 5]                          │
├─────────────────────────────────────────────────┤
│ Filter: num => num === 0                        │
│                                                 │
│ Processing:                                     │
│ ├─ 2: 2===0? ❌ → Skip                          │
│ ├─ 0: 0===0? ✅ → Add to result                 │
│ ├─ 4: 4===0? ❌ → Skip                          │
│ ├─ 0: 0===0? ✅ → Add to result                 │
│ └─ 5: 5===0? ❌ → Skip                          │
│                                                 │
│ Filtered Array: [0, 0]                          │
│ .length = 2                                     │
├─────────────────────────────────────────────────┤
│ RESULT: zeroCount = 2 ✅                        │
└─────────────────────────────────────────────────┘
```

---

### **🎯 filter() Use Cases**

```javascript
// 1. Filter even numbers
const evens = [1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0)
// Result: [2, 4, 6]

// 2. Filter active users
const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true }
]
const activeUsers = users.filter(user => user.active)
// Result: [Alice, Charlie]

// 3. Filter by length
const words = ['hi', 'hello', 'hey', 'goodbye']
const longWords = words.filter(word => word.length > 3)
// Result: ['hello', 'goodbye']

// 4. Remove nullish values
const mixed = [1, null, 2, undefined, 3, 0, '']
const clean = mixed.filter(val => val != null && val !== '')
// Result: [1, 2, 3, 0]
```

---

## 🗺️ Deep Dive: map()

### **📖 Apa itu map()?**

`map()` adalah method yang **"mentransform"** setiap elemen array.

**Syntax:**
```javascript
array.map((element) => {
  // Return transformed value
})
```

**Output:** Array baru dengan panjang yang **sama**, tapi value di-transform

---

### **🎨 Visualisasi Konsep map()**

```
Input Array:  [2, 3, 4]
               ↓  ↓  ↓

map(num => num * 2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Transform each element:

2 → 2 * 2 = 4
3 → 3 * 2 = 6
4 → 4 * 2 = 8

Output Array: [4, 6, 8] ✅
```

**Key Point:** Panjang array **tetap sama** (3 → 3)

---

### **💻 Contoh map() untuk Build Result**

```javascript
const arr = [2, 0, 4]
const totalProduct = 8  // Pre-calculated
const zeroCount = 1     // Pre-calculated

const result = arr.map(num => {
  if (zeroCount > 1) return 0
  if (zeroCount === 1) return num === 0 ? totalProduct : 0
  return totalProduct / num
})

console.log(result)  // [0, 8, 0]
```

**Visual Process:**

```
┌─────────────────────────────────────────────────┐
│ Input: [2, 0, 4]                                │
│ totalProduct = 8, zeroCount = 1                 │
├─────────────────────────────────────────────────┤
│ map(num => { ... })                             │
│                                                 │
│ Iterasi 1: num = 2                              │
│ ├─ zeroCount > 1? ❌                            │
│ ├─ zeroCount === 1? ✅                          │
│ │  └─ num === 0? ❌                             │
│ │     └─ return 0                               │
│ └─ Output[0] = 0 ✅                             │
├─────────────────────────────────────────────────┤
│ Iterasi 2: num = 0                              │
│ ├─ zeroCount > 1? ❌                            │
│ ├─ zeroCount === 1? ✅                          │
│ │  └─ num === 0? ✅                             │
│ │     └─ return totalProduct = 8                │
│ └─ Output[1] = 8 ✅                             │
├─────────────────────────────────────────────────┤
│ Iterasi 3: num = 4                              │
│ ├─ zeroCount > 1? ❌                            │
│ ├─ zeroCount === 1? ✅                          │
│ │  └─ num === 0? ❌                             │
│ │     └─ return 0                               │
│ └─ Output[2] = 0 ✅                             │
├─────────────────────────────────────────────────┤
│ RESULT: [0, 8, 0] ✅                            │
└─────────────────────────────────────────────────┘
```

---

### **🎯 map() Use Cases**

```javascript
// 1. Double all numbers
const doubled = [1, 2, 3].map(n => n * 2)
// Result: [2, 4, 6]

// 2. Extract property
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]
const names = users.map(user => user.name)
// Result: ['Alice', 'Bob']

// 3. Add index
const indexed = ['a', 'b', 'c'].map((item, i) => `${i}: ${item}`)
// Result: ['0: a', '1: b', '2: c']

// 4. Transform objects
const prices = [100, 200, 300]
const products = prices.map((price, i) => ({
  id: i + 1,
  price: price,
  discounted: price * 0.9
}))
// Result: [
//   { id: 1, price: 100, discounted: 90 },
//   { id: 2, price: 200, discounted: 180 },
//   { id: 3, price: 300, discounted: 270 }
// ]
```

---

## 💻 Implementasi Lengkap

### **✨ Versi Final: Functional Programming Style**

```javascript
const uniqueProduct = (arr) => {
  // Step 1: Calculate total product (skip zeros)
  const totalProduct = arr.reduce((acc, num) => 
    num === 0 ? acc : acc * num, 1
  )
  
  // Step 2: Count zeros
  const zeroCount = arr.filter(num => num === 0).length
  
  // Step 3: Build result array
  return arr.map(num => {
    if (zeroCount > 1) return 0
    if (zeroCount === 1) return num === 0 ? totalProduct : 0
    return totalProduct / num
  })
}
```

---

### **📖 Penjelasan Line-by-Line**

```javascript
const uniqueProduct = (arr) => {
  // 🔄 STEP 1: reduce() - Aggregate
  const totalProduct = arr.reduce((acc, num) => 
    num === 0 ? acc : acc * num, 1
  )
  // Explanation:
  // - reduce() mengiterasi array
  // - acc dimulai dari 1 (identity untuk multiplication)
  // - Jika num === 0, return acc (skip)
  // - Jika num !== 0, return acc * num (kalikan)
  // - Result: total perkalian semua non-zero elements
  
  // 🔍 STEP 2: filter() - Filter then count
  const zeroCount = arr.filter(num => num === 0).length
  // Explanation:
  // - filter() mencari semua elemen yang === 0
  // - Result: array berisi semua zero [0, 0, ...]
  // - .length: hitung berapa banyak zero
  
  // 🗺️ STEP 3: map() - Transform
  return arr.map(num => {
    if (zeroCount > 1) return 0
    if (zeroCount === 1) return num === 0 ? totalProduct : 0
    return totalProduct / num
  })
  // Explanation:
  // - map() transform setiap element
  // - Logic sama seperti versi imperative
  // - Return: array baru dengan hasil transformation
}
```

---

### **🎨 Trace Lengkap dengan Example**

**Input:** `[2, 0, 4]`

```
═══════════════════════════════════════════════════════════
STEP 1: reduce() - Calculate totalProduct
═══════════════════════════════════════════════════════════

arr.reduce((acc, num) => num === 0 ? acc : acc * num, 1)

┌─ Initial: acc = 1
│
├─ num = 2: 2 === 0? ❌ → acc * num = 1 * 2 = 2
│            acc = 2
│
├─ num = 0: 0 === 0? ✅ → acc (skip) = 2
│            acc = 2 (unchanged)
│
└─ num = 4: 4 === 0? ❌ → acc * num = 2 * 4 = 8
             acc = 8

Result: totalProduct = 8 ✅

═══════════════════════════════════════════════════════════
STEP 2: filter() - Count zeros
═══════════════════════════════════════════════════════════

arr.filter(num => num === 0)

┌─ num = 2: 2 === 0? ❌ → Skip
├─ num = 0: 0 === 0? ✅ → Keep
└─ num = 4: 4 === 0? ❌ → Skip

Filtered: [0]
.length = 1

Result: zeroCount = 1 ✅

═══════════════════════════════════════════════════════════
STEP 3: map() - Build result
═══════════════════════════════════════════════════════════

arr.map(num => { ... })

Context: totalProduct = 8, zeroCount = 1

┌─ num = 2:
│  zeroCount > 1? ❌
│  zeroCount === 1? ✅
│    num === 0? ❌ → return 0
│  Result[0] = 0
│
├─ num = 0:
│  zeroCount > 1? ❌
│  zeroCount === 1? ✅
│    num === 0? ✅ → return totalProduct = 8
│  Result[1] = 8
│
└─ num = 4:
   zeroCount > 1? ❌
   zeroCount === 1? ✅
     num === 0? ❌ → return 0
   Result[2] = 0

Result: [0, 8, 0] ✅

═══════════════════════════════════════════════════════════
FINAL OUTPUT: [0, 8, 0]
═══════════════════════════════════════════════════════════
```

---

## 🔗 Chaining: Lebih Lanjut

### **💡 Konsep Method Chaining**

Karena `filter()` dan `map()` return array, kita bisa **chain** mereka!

```javascript
const numbers = [1, 2, 3, 4, 5, 6]

const result = numbers
  .filter(n => n % 2 === 0)  // [2, 4, 6]
  .map(n => n * 2)            // [4, 8, 12]
  .reduce((sum, n) => sum + n, 0)  // 24

console.log(result)  // 24
```

**Visual Flow:**

```
[1, 2, 3, 4, 5, 6]
       ↓
.filter(even)
       ↓
   [2, 4, 6]
       ↓
.map(double)
       ↓
  [4, 8, 12]
       ↓
.reduce(sum)
       ↓
      24
```

---

### **🎯 Real-World Example: Process User Data**

```javascript
const users = [
  { name: 'Alice', age: 25, active: true, score: 85 },
  { name: 'Bob', age: 17, active: false, score: 70 },
  { name: 'Charlie', age: 30, active: true, score: 95 },
  { name: 'David', age: 22, active: true, score: 60 }
]

// Get average score of active adult users
const avgScore = users
  .filter(user => user.active)           // Active only
  .filter(user => user.age >= 18)        // Adults only
  .map(user => user.score)               // Extract scores
  .reduce((sum, score, _, arr) => 
    sum + score / arr.length, 0
  )

console.log(avgScore)  // 80 (avg of 85, 95, 60)
```

---

## 📊 Comparison: Imperative vs Functional

### **Same Problem, Different Style:**

#### **Imperative Style (for loop)**

```javascript
const uniqueProduct = (arr) => {
  let totalProduct = 1
  let zeroCount = 0
  const result = []

  for (const num of arr) {
    if (num === 0) {
      zeroCount++
    } else {
      totalProduct *= num
    }
  }

  for (const num of arr) {
    if (zeroCount > 1) {
      result.push(0)
    } else if (zeroCount === 1) {
      result.push(num === 0 ? totalProduct : 0)
    } else {
      result.push(totalProduct / num)
    }
  }

  return result
}
```

**Karakteristik:**
- ✅ Explicit control flow
- ✅ Easy to debug step-by-step
- ⚠️ More verbose
- ⚠️ Mutation (push to result)

---

#### **Functional Style (array methods)**

```javascript
const uniqueProduct = (arr) => {
  const totalProduct = arr.reduce((acc, num) => 
    num === 0 ? acc : acc * num, 1
  )
  const zeroCount = arr.filter(num => num === 0).length

  return arr.map(num => {
    if (zeroCount > 1) return 0
    if (zeroCount === 1) return num === 0 ? totalProduct : 0
    return totalProduct / num
  })
}
```

**Karakteristik:**
- ✅ Concise and elegant
- ✅ Declarative (what, not how)
- ✅ Immutable (no mutations)
- ⚠️ Slightly more overhead
- ⚠️ Harder to debug for beginners

---

### **📊 Detailed Comparison Table**

| Aspek | Imperative | Functional |
|-------|-----------|-----------|
| **Lines of Code** | ~25 lines | ~10 lines |
| **Readability (Beginner)** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Readability (Experienced)** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Debugging** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Conciseness** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Immutability** | ❌ No | ✅ Yes |
| **Testability** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Learning Curve** | Easy | Medium |

---

## ⚡ Performance Considerations

### **🤔 Apakah Functional Lebih Lambat?**

**Short Answer:** Sedikit, tapi biasanya **tidak signifikan**.

```
Imperative: 1 loop + 1 loop = 2 passes
Functional: reduce + filter + map = 3 passes

Overhead: ~10-20% slower
```

---

### **📊 Benchmark (Hypothetical)**

```
Array 1,000 elements:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Imperative: 0.15ms
Functional: 0.18ms (20% slower)

Difference: 0.03ms = 30 microseconds

Apakah ini masalah? 🤔
Untuk most cases: TIDAK! ❌
```

---

### **💡 When to Worry About Performance:**

```
✅ Don't worry if:
- Array size < 10,000
- Not in tight loop
- Not performance-critical path
- Readability > micro-optimization

⚠️ Consider imperative if:
- Array size > 100,000
- Called millions of times/sec
- Real-time processing
- Already identified as bottleneck
```

> **🎯 RULE OF THUMB**  
> "Premature optimization is the root of all evil" - Donald Knuth  
> Prioritize **readability** first, optimize **only when needed**.

---

## 💪 Kelebihan & Kekurangan FP

### **✅ Kelebihan Functional Programming:**

#### **1. Immutability**
```javascript
// ✅ FP: Original array tidak berubah
const original = [1, 2, 3]
const doubled = original.map(n => n * 2)

console.log(original)  // [1, 2, 3] ✅ Unchanged
console.log(doubled)   // [2, 4, 6]

// ❌ Imperative: Mutasi
const original2 = [1, 2, 3]
for (let i = 0; i < original2.length; i++) {
  original2[i] *= 2  // Mutate!
}
console.log(original2)  // [2, 4, 6] ⚠️ Changed
```

---

#### **2. Composability**
```javascript
// ✅ FP: Easy to combine
const processData = (arr) => arr
  .filter(isValid)
  .map(transform)
  .reduce(aggregate, 0)

// ❌ Imperative: Harder to compose
function processData(arr) {
  const filtered = []
  for (const item of arr) {
    if (isValid(item)) filtered.push(item)
  }
  
  const transformed = []
  for (const item of filtered) {
    transformed.push(transform(item))
  }
  
  let result = 0
  for (const item of transformed) {
    result = aggregate(result, item)
  }
  
  return result
}
```

---

#### **3. Testability**
```javascript
// ✅ FP: Pure functions, easy to test
const double = (n) => n * 2

// Test:
expect(double(5)).toBe(10)  // Always same output for same input

// ❌ Imperative: Side effects, harder to test
let counter = 0
function incrementAndDouble(n) {
  counter++  // Side effect!
  return n * 2
}

// Test: Depends on external state
```

---

#### **4. Parallel Processing**
```javascript
// ✅ FP: Safe for parallel execution (no shared state)
const results = await Promise.all(
  items.map(async item => processAsync(item))
)

// ❌ Imperative: Race conditions possible
let total = 0
for (const item of items) {
  total += await processAsync(item)  // Sequential, can't parallelize safely
}
```

---

### **❌ Kekurangan Functional Programming:**

#### **1. Learning Curve**
```
Beginner: for loop ✅ mudah dipahami
          reduce() ❓ apa ini?
```

---

#### **2. Performance Overhead**
```javascript
// Multiple iterations
arr
  .filter(...)  // Pass 1
  .map(...)     // Pass 2
  .reduce(...)  // Pass 3

// vs single loop
for (const item of arr) {
  // All logic in 1 pass
}
```

---

#### **3. Debugging Lebih Sulit**
```javascript
// ❌ FP: Chain errors susah di-trace
const result = users
  .filter(u => u.active)
  .map(u => u.score)
  .reduce((sum, s) => sum + s, 0)  // Error di sini? Which step?

// ✅ Imperative: Easy to add breakpoint di tiap step
for (const user of users) {
  if (user.active) {
    console.log(user)  // Debug here
    const score = user.score
    console.log(score)  // Debug here
    total += score
  }
}
```

---

#### **4. Stack Traces Kurang Jelas**
```javascript
// FP stack trace:
Error: Cannot read property 'score' of undefined
    at Array.map (<anonymous>)
    at processUsers (app.js:15)
    
// Imperative stack trace:
Error: Cannot read property 'score' of undefined
    at processUsers (app.js:23:15)  // Exact line!
```

---

## 🎯 Kapan Menggunakan FP vs Imperative?

### **✅ Gunakan Functional jika:**

```
✅ Team familiar dengan FP
✅ Codebase sudah FP style
✅ Readability prioritas
✅ Butuh immutability
✅ Data transformation pipelines
✅ Array size < 10,000
✅ Not performance critical
```

**Contoh Use Cases:**
- Data processing dashboards
- Report generation
- API response transformation
- Form validation
- Search & filter features

---

### **✅ Gunakan Imperative jika:**

```
✅ Team beginner-friendly
✅ Performance critical
✅ Array size > 100,000
✅ Complex logic (banyak branches)
✅ Need fine-grained control
✅ Debugging is difficult
✅ Real-time processing
```

**Contoh Use Cases:**
- Game loops
- Video/audio processing
- Large dataset operations
- Algorithm implementations
- Performance-critical paths

---

## 🧠 Quick Quiz

<details>
<summary><strong>❓ Quiz 1:</strong> Apa perbedaan utama <code>filter()</code> dan <code>map()</code>?</summary>

**Jawaban:**

| Aspek | filter() | map() |
|-------|----------|-------|
| **Fungsi** | Menyaring elemen | Transform elemen |
| **Output length** | ≤ input length | = input length |
| **Return condition** | true/false | any value |
| **Use case** | Remove elements | Change elements |

**Contoh:**
```javascript
const numbers = [1, 2, 3, 4, 5]

// filter: Bisa lebih sedikit
numbers.filter(n => n > 3)  // [4, 5] (2 elements)

// map: Selalu sama
numbers.map(n => n * 2)     // [2, 4, 6, 8, 10] (5 elements)
```

</details>

<details>
<summary><strong>❓ Quiz 2:</strong> Kenapa <code>reduce()</code> perlu initial value?</summary>

**Jawaban:** Initial value menentukan **starting point** untuk accumulator.

**Tanpa initial value:**
```javascript
[1, 2, 3].reduce((acc, n) => acc + n)
// acc starts with first element (1)
// Then: 1 + 2 = 3, 3 + 3 = 6
// Result: 6 ✅

// Tapi jika array kosong:
[].reduce((acc, n) => acc + n)
// ❌ Error: Reduce of empty array with no initial value
```

**Dengan initial value:**
```javascript
[1, 2, 3].reduce((acc, n) => acc + n, 0)
// acc starts with 0
// Then: 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6
// Result: 6 ✅

[].reduce((acc, n) => acc + n, 0)
// ✅ Works! Returns 0
```

**Best Practice:** Selalu sediakan initial value untuk safety!

</details>

<details>
<summary><strong>❓ Quiz 3:</strong> Bisakah kita chain <code>reduce()</code> setelah <code>map()</code>?</summary>

**Jawaban:** **Ya!** Karena `map()` return array.

```javascript
const numbers = [1, 2, 3, 4, 5]

const result = numbers
  .map(n => n * 2)           // [2, 4, 6, 8, 10]
  .reduce((sum, n) => sum + n, 0)  // 30

console.log(result)  // 30 ✅
```

**Order matters:**
```javascript
// ✅ Valid: map() → reduce()
numbers.map(...).reduce(...)

// ❌ Invalid: reduce() → map()
numbers.reduce(...).map(...)
// Error: reduce returns a single value, not array
```

</details>

---

## 🎨 Advanced Patterns

### **Pattern 1: Conditional Chaining**

```javascript
const processData = (arr, options = {}) => {
  let result = arr
  
  if (options.filterActive) {
    result = result.filter(item => item.active)
  }
  
  if (options.sortByName) {
    result = result.sort((a, b) => a.name.localeCompare(b.name))
  }
  
  return result.map(item => ({
    ...item,
    processed: true
  }))
}
```

---

### **Pattern 2: Early Return in Chains**

```javascript
const processUsers = (users) => {
  if (!users || users.length === 0) return []
  
  return users
    .filter(user => user.active)
    .map(user => user.email)
}
```

---

### **Pattern 3: Nested Transformations**

```javascript
const departments = [
  { 
    name: 'Engineering',
    employees: [
      { name: 'Alice', salary: 100000 },
      { name: 'Bob', salary: 90000 }
    ]
  },
  {
    name: 'Sales',
    employees: [
      { name: 'Charlie', salary: 80000 }
    ]
  }
]

// Get all employee names
const allNames = departments
  .flatMap(dept => dept.employees)
  .map(emp => emp.name)

console.log(allNames)  // ['Alice', 'Bob', 'Charlie']
```

---

## 📚 Real-World Examples

### **Example 1: E-commerce Cart Total**

```javascript
const cart = [
  { product: 'Laptop', price: 1000, quantity: 1 },
  { product: 'Mouse', price: 25, quantity: 2 },
  { product: 'Keyboard', price: 75, quantity: 1 }
]

// Calculate total
const total = cart
  .map(item => item.price * item.quantity)
  .reduce((sum, price) => sum + price, 0)

console.log(total)  // 1125
```

---

### **Example 2: User Analytics**

```javascript
const users = [
  { name: 'Alice', age: 25, purchases: 5 },
  { name: 'Bob', age: 17, purchases: 2 },
  { name: 'Charlie', age: 30, purchases: 8 },
  { name: 'David', age: 22, purchases: 0 }
]

// Get high-value adult customers
const vipCustomers = users
  .filter(user => user.age >= 18)
  .filter(user => user.purchases >= 5)
  .map(user => user.name)

console.log(vipCustomers)  // ['Alice', 'Charlie']
```

---

### **Example 3: Data Aggregation**

```javascript
const sales = [
  { product: 'A', amount: 100, region: 'East' },
  { product: 'B', amount: 200, region: 'West' },
  { product: 'A', amount: 150, region: 'East' },
  { product: 'B', amount: 100, region: 'West' }
]

// Group by product and sum
const totalByProduct = sales.reduce((acc, sale) => {
  const product = sale.product
  acc[product] = (acc[product] || 0) + sale.amount
  return acc
}, {})

console.log(totalByProduct)  // { A: 250, B: 300 }
```

---

## 🔄 Migration Guide: Imperative → Functional

### **Step-by-Step Conversion:**

#### **Original (Imperative):**
```javascript
function getAdultNames(users) {
  const adults = []
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      adults.push(users[i])
    }
  }
  
  const names = []
  for (let i = 0; i < adults.length; i++) {
    names.push(adults[i].name)
  }
  
  return names
}
```

---

#### **Step 1: Replace first loop with filter()**
```javascript
function getAdultNames(users) {
  const adults = users.filter(user => user.age >= 18)
  
  const names = []
  for (let i = 0; i < adults.length; i++) {
    names.push(adults[i].name)
  }
  
  return names
}
```

---

#### **Step 2: Replace second loop with map()**
```javascript
function getAdultNames(users) {
  const adults = users.filter(user => user.age >= 18)
  const names = adults.map(user => user.name)
  return names
}
```

---

#### **Step 3: Chain methods**
```javascript
function getAdultNames(users) {
  return users
    .filter(user => user.age >= 18)
    .map(user => user.name)
}
```

---

#### **Step 4: Arrow function (optional)**
```javascript
const getAdultNames = (users) => users
  .filter(user => user.age >= 18)
  .map(user => user.name)
```

**✨ Done! 15 lines → 3 lines!**

---

## 💡 Tips & Best Practices

### **Tip 1: Name Your Callbacks**

```javascript
// ❌ Anonymous, hard to debug
users.filter(u => u.active).map(u => u.name)

// ✅ Named, self-documenting
const isActive = user => user.active
const getName = user => user.name

users.filter(isActive).map(getName)
```

---

### **Tip 2: Break Long Chains**

```javascript
// ❌ Too long, hard to read
const result = users.filter(u => u.active && u.age >= 18).map(u => ({ ...u, adult: true })).sort((a, b) => a.name.localeCompare(b.name))

// ✅ Formatted nicely
const result = users
  .filter(u => u.active && u.age >= 18)
  .map(u => ({ ...u, adult: true }))
  .sort((a, b) => a.name.localeCompare(b.name))
```

---

### **Tip 3: Use Meaningful Variable Names**

```javascript
// ❌ Generic
arr.reduce((acc, x) => acc + x, 0)

// ✅ Descriptive
prices.reduce((total, price) => total + price, 0)
```

---

### **Tip 4: Avoid Side Effects in Callbacks**

```javascript
// ❌ Side effect (mutation)
let total = 0
numbers.forEach(n => total += n)  // Mutates external variable

// ✅ Pure function
const total = numbers.reduce((sum, n) => sum + n, 0)
```

---

## ✅ Key Takeaways

Setelah membaca Part 5, kamu sekarang paham:

- ✅ **Functional Programming** concepts (immutability, pure functions, declarative)
- ✅ **reduce()** - aggregate array menjadi single value
- ✅ **filter()** - menyaring elemen berdasarkan kondisi
- ✅ **map()** - transform setiap elemen
- ✅ **Method chaining** - combine multiple operations
- ✅ **Trade-offs** - kapan pakai FP vs Imperative
- ✅ **Best practices** - naming, formatting, avoiding side effects

---

## 🎯 Comparison Summary

| Aspect | Imperative | Functional |
|--------|-----------|-----------|
| **Style** | How (bagaimana) | What (apa) |
| **Code Length** | Longer | Shorter |
| **Readability** | Explicit | Declarative |
| **Learning Curve** | Easy | Medium |
| **Performance** | Fastest | Slightly slower |
| **Debugging** | Easier | Harder |
| **Testability** | Good | Excellent |
| **Immutability** | No | Yes |
| **Best For** | Beginners, perf-critical | Experienced, data transformation |

---

## 🔮 What's Next?

Di **Part 6**, kita akan belajar solusi **tanpa division**:
- 🚀 Prefix & Suffix Product approach
- 🎯 O(n) time, O(n) space
- 💡 Cara yang sering ditanya di interview!

---

## 🏅 Achievement Unlocked!

**🎨 Functional Programming Master**  
Kamu berhasil menguasai reduce(), filter(), dan map()! FP skills unlocked! 🔓

**🔗 Method Chaining Expert**  
Kamu bisa combine multiple array methods dengan elegant!

**Progress:** [▓▓▓▓▓▓▓▓░] 71% (5/7 parts)

---

<div align="center">

**🚀 Next: Part 6 - Prefix & Suffix Product (Tanpa Division)**

Solusi paling optimal untuk constraint "no division allowed"! 💪

</div>
