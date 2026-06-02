# 🔄 Cheat Sheet — Nested Array Summation / Penjumlahan Array Bertingkat

> 📋 Ringkasan semua versi kode `deepSum()`. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Method Chaining (`.flat()` + `.reduce()`) ⭐ `PALING DIREKOMENDASIKAN`

```javascript
function deepSum(arr) {
  if (arr.length === 0) return 'No number'
  
  return arr.flat(Infinity).reduce((total, number) => total + number, 0)
}
```

> 🔑 **One-liner modern, scalable untuk unlimited depth, mudah maintain.** Gunakan ini untuk production code dengan struktur nested dynamic.

---

### 2. Method Chaining dengan JSDoc (Production Ready)

```javascript
/**
 * Menjumlahkan semua angka di nested array (dynamic depth)
 * @param {Array} arr - Nested array berisi angka
 * @returns {number|string} - Total sum atau 'No number' jika array kosong
 */
const deepSum = (arr) => {
  if (arr.length === 0) return 'No number';
  return arr.flat(Infinity).reduce((total, number) => total + number, 0);
};

module.exports = deepSum;
```

> 🔑 **Versi dengan dokumentasi lengkap dan export untuk Node.js.** Siap digunakan di project profesional.

---

### 3. Method Chaining dengan Error Handling

```javascript
const deepSum = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }
  
  if (arr.length === 0) return 'No number';
  
  return arr.flat(Infinity).reduce((total, number) => total + number, 0);
};
```

> 🔑 **Best practice dengan type checking.** Mencegah bug dari input yang salah tipe.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 1. Nested Loop dengan `for...of` (Clean Naming) ⭐ `PALING INTUITIF`

```javascript
function deepSum(arr) {
  if (arr.length === 0) return 'No number'

  let total = 0

  for (const group of arr) {
    for (const row of group) {
      for (const number of row) {
        total += number
      }
    }
  }

  return total
}
```

> 🔑 **Paling mudah dipahami untuk pemula.** Alur eksekusi eksplisit dengan 3 level nested loop. Sangat baik untuk belajar logika array bertingkat.

---

### 2. Nested Loop dengan Index (`i, j, k`)

```javascript
const deepSum = (arr) => {
  if (arr.length === 0) return 'No number';

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        total += arr[i][j][k]; 
      }
    }
  }

  return total;
};
```

> 🔑 **Versi matematis standar.** Cocok untuk interview dan belajar fundamental looping dengan index.

---

### 3. Nested Loop dengan Descriptive Index

```javascript
const deepSum = (arr) => {
  if (arr.length === 0) return 'No number';

  let total = 0;

  for (let layer1 = 0; layer1 < arr.length; layer1++) {
    for (let layer2 = 0; layer2 < arr[layer1].length; layer2++) {
      for (let layer3 = 0; layer3 < arr[layer1][layer2].length; layer3++) {
        total += arr[layer1][layer2][layer3]; 
      }
    }
  }

  return total;
};
```

> 🔑 **Self-documenting code dengan nama variabel yang jelas.** Baik untuk code readability focus.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 1. Recursion dengan Inner Function

```javascript
function deepSum(arr) {
  if (arr.length === 0) return 'No number'

  function sum(item) {
    if (!Array.isArray(item)) return item
    return item.reduce((total, child) => total + sum(child), 0)
  }

  return sum(arr)
}
```

> 🔑 **Elegant recursive solution.** Scalable untuk unlimited depth, cocok untuk tree-like structures. Bagus untuk interview advanced.

> ⚠️ **Warning:** Risiko stack overflow pada nested array yang sangat dalam. Lebih sulit di-debug dibanding iterative approach.

---

### 2. Recursion Direct (Tanpa Inner Function)

```javascript
const deepSumRecursive = (arr) => {
  if (arr.length === 0) return 'No number';
  
  let total = 0;

  for (const item of arr) {
    if (Array.isArray(item)) {
      const innerTotal = deepSumRecursive(item);
      
      if (innerTotal !== 'No number') {
        total += innerTotal;
      }
    } 
    else {
      total += item;
    }
  }

  return total;
};
```

> 🔑 **Recursion tanpa inner function.** Lebih eksplisit dalam handling base case.

> ⚠️ **Warning:** Harus handle kasus 'No number' di recursive call. Lebih verbose dari versi inner function.

---

### 3. TypeScript Version

```typescript
type DeepArray<T> = T | DeepArray<T>[];

function deepSum(arr: DeepArray<number>[]): number | string {
  if (arr.length === 0) return 'No number';
  
  return (arr as number[]).flat(Infinity).reduce((a, b) => a + b, 0);
}
```

> 🔑 **Type-safe version untuk TypeScript project.** Memberikan type checking compile-time.

---

## ⚠️ GOTCHA CEPAT

### 1. `.flat()` tanpa argument vs `.flat(Infinity)`

```javascript
// ❌ SALAH — hanya flatten 1 level (default)
const arr = [[[1, 2], [3, 4]]]
arr.flat()  // → [[1, 2], [3, 4]] (masih nested!)

// ✅ BENAR — flatten semua level
arr.flat(Infinity)  // → [1, 2, 3, 4]
```

---

### 2. `.reduce()` tanpa initial value

```javascript
// ❌ TIDAK EKSPLISIT
[1, 2, 3].reduce((a, b) => a + b)  // → 6 (works, tapi elemen pertama jadi initial value)

// ✅ EKSPLISIT — selalu berikan initial value
[1, 2, 3].reduce((a, b) => a + b, 0)  // → 6
```

---

### 3. Lokasi deklarasi `total` dalam nested loop

```javascript
// ❌ SALAH — total direset setiap iterasi!
for (const group of arr) {
  let total = 0  // ← RESET setiap loop!
  for (const row of group) {
    total += row
  }
}

// ✅ BENAR — total di luar semua loop
let total = 0
for (const group of arr) {
  for (const row of group) {
    total += row
  }
}
```

---

### 4. Lokasi `return` dalam nested loop

```javascript
// ❌ SALAH — keluar setelah iterasi pertama!
for (const group of arr) {
  for (const row of group) {
    total += row
  }
  return total  // ← Berhenti terlalu cepat!
}

// ✅ BENAR — return di luar semua loop
for (const group of arr) {
  for (const row of group) {
    total += row
  }
}
return total
```

---

## 📊 QUICK COMPARISON

| Versi | Baris Kode | Scalability | Memory | Readability | Use Case | Rekomendasi |
|-------|------------|-------------|--------|-------------|----------|-------------|
| **Method Chaining** | 3 | ✅ Dynamic | O(n) | ⭐⭐⭐⭐⭐ | Production | ✅ **BEST** |
| **Nested Loop (`for...of`)** | 11 | ❌ Fixed 3D | O(1) | ⭐⭐⭐⭐ | Learning | ✅ Pemula |
| **Nested Loop (Index)** | 13 | ❌ Fixed 3D | O(1) | ⭐⭐⭐ | Interview | ✅ Good |
| **Recursion (Inner)** | 9 | ✅ Dynamic | O(d) | ⭐⭐⭐ | Advanced | ⚠️ Advanced |
| **Recursion (Direct)** | 15 | ✅ Dynamic | O(d) | ⭐⭐ | Alternative | ⚠️ Verbose |

**Legend:**
- `O(n)` = jumlah angka total
- `O(d)` = kedalaman nested array
- `O(1)` = constant memory

---

## 🧪 TEST CASES

### Test Cases Lengkap dengan Loop

```javascript
const testCases = [
  {
    input: [],
    expected: 'No number',
    desc: "Edge case — array kosong harus mengembalikan 'No number'"
  },
  {
    input: [
      [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
      [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
      [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
    ],
    expected: 316,
    desc: 'Normal case 1 — menjumlahkan seluruh angka dalam nested array 3 level'
  },
  {
    input: [
      [[20, 10], [15], [1, 1]],
      [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
      [[3, 5, 1], [1, 5, 3], [1]],
      [[2]]
    ],
    expected: 156,
    desc: 'Normal case 2 — grup dengan panjang array berbeda-beda'
  }
]

testCases.forEach(({ input, expected, desc }, index) => {
  const result = deepSum(input)
  const status = result === expected ? '✅ PASS' : '❌ FAIL'

  console.log(`Test Case #${index + 1}: ${status} - ${desc} | deepSum(input) = ${result}`)

  if (status === '❌ FAIL') {
    console.log('Expected:', expected)
    console.log('Result  :', result)
  }
})
```

---

### Test Cases Sederhana

```javascript
// Test 1 — Edge case: array kosong
console.log(deepSum([]))  // → 'No number'

// Test 2 — Normal case 1
console.log(deepSum([
  [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
  [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
  [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
]))  // → 316

// Test 3 — Normal case 2
console.log(deepSum([
  [[20, 10], [15], [1, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
  [[3, 5, 1], [1, 5, 3], [1]],
  [[2]]
]))  // → 156
```

---

### Test Cases Mini (Quick Check)

```javascript
const test1 = [[[4, 5, 6], [9, 1, 2, 10]]];
const test2 = [[[4, 5, 6], [9, 1, 2, 10], [10, 4, 10, 10, 10]]];
const test3 = [
  [[20, 10], [15], [1, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]]
];
const test4 = [];

console.log(deepSum(test1));  // → 37
console.log(deepSum(test2));  // → 81
console.log(deepSum(test3));  // → 156
console.log(deepSum(test4));  // → 'No number'
```

---

## 🎯 DECISION GUIDE

```
Butuh kode untuk...
│
├─ 📦 Production / Real Project
│   └─ Gunakan: Method Chaining (.flat + .reduce)
│      Alasan: Modern, clean, scalable
│
├─ 📚 Belajar Algoritma
│   └─ Gunakan: Nested Loop (for...of)
│      Alasan: Paling intuitif, mudah di-trace
│
├─ 💼 Technical Interview
│   └─ Mulai: Nested Loop (i,j,k)
│      Lanjut: Refactor ke Method Chaining
│      Alasan: Show fundamental → modern thinking
│
└─ 🚀 Challenge/Advanced
    └─ Gunakan: Recursion
       Alasan: Elegant, menunjukkan skill advanced
```

---

## 🔑 KEY TAKEAWAYS

1. **Best Practice:** `.flat(Infinity).reduce()` — modern, scalable, production-ready
2. **Learning:** Nested `for...of` loop — paling intuitif untuk memahami konsep
3. **Memory Efficient:** Nested loop — O(1) memory, tidak buat array baru
4. **Flexible:** Recursion — handle unlimited depth, tapi risiko stack overflow
5. **Guard Clause:** `if (arr.length === 0) return 'No number'` — WAJIB di semua versi

---

**📍 Navigation:**
- 📖 [README](README.md)
- 📋 [Dokumentasi Lengkap](00-Ringkasan-Algoritma-semua-versi.md)

---

Made with ❤️ for learners | **Happy Coding! 🚀**
