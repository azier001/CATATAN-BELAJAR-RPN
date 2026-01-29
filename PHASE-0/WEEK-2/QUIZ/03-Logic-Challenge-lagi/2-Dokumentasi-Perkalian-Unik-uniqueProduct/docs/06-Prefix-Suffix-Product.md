```markdown
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🚀 PART 6: PREFIX & SUFFIX PRODUCT APPROACH 🚀                ║
║                                                                          ║
║              Solusi Optimal Tanpa Division - Interview Favorite!         ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Advanced-red)
![Time Complexity](https://img.shields.io/badge/Time-O(n)-brightgreen)
![Space Complexity](https://img.shields.io/badge/Space-O(n)-green)
![Interview](https://img.shields.io/badge/Interview-⭐⭐⭐⭐⭐-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-25%20minutes-blue)

---

## 🧭 Quick Jump

| 📝 Ringkasan | 💡 Konsep | 🎨 Visualisasi | 💻 Implementasi | 🔍 Trace | 📊 Comparison | ✅ Summary |
|:------------:|:---------:|:--------------:|:---------------:|:--------:|:-------------:|:----------:|
| [Jump](#-ringkasan-algoritma-versi-ujian) | [Jump](#-konsep-prefix--suffix) | [Jump](#-visualisasi-konsep) | [Jump](#-implementasi-lengkap) | [Jump](#-trace-eksekusi-lengkap) | [Jump](#-comparison-semua-approach) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami **konsep prefix dan suffix product**
- ✅ Bisa solve problem **tanpa division operator**
- ✅ Menguasai **two-pass algorithm** yang elegant
- ✅ Siap untuk **interview coding** dengan solusi optimal
- ✅ Memahami **trade-offs** dari approach ini

---

## 📝 Ringkasan Algoritma (Versi Ujian)

> **💡 Jika kamu sedang ujian dan hanya ingat konsepnya, ini yang perlu kamu tulis:**

### **Konsep Inti:**
```
Untuk setiap posisi i:
Output[i] = (Product dari kiri) × (Product dari kanan)

Tanpa division!
```

### **Step-by-Step:**
```
1. Buat array prefix (kiri ke kanan)
   prefix[i] = product semua elemen sebelum i
   
2. Buat array suffix (kanan ke kiri)
   suffix[i] = product semua elemen setelah i
   
3. Result[i] = prefix[i] × suffix[i]
```

### **Alternatif (Space Optimized):**
```
1. Build result dengan prefix product
2. Multiply result dengan suffix product on-the-fly
   (Tidak perlu array suffix terpisah!)
```

### **Keywords Penting:**
- 🔢 **Prefix** - product dari kiri
- 🔢 **Suffix** - product dari kanan
- ⚡ **O(n) time** - two passes
- 💾 **O(1) space** (excluding output) - optimal!
- 🚫 **No division** - constraint satisfied

---

<div align="center">

**⬇️ Scroll ke bawah untuk penjelasan super detail dengan visualisasi ⬇️**

</div>

---

## 💡 Konsep Prefix & Suffix

### **🤔 Problem dengan Division**

Di Part 3, kita gunakan division:

```javascript
Output[i] = TotalProduct ÷ Input[i]
```

**Tapi bagaimana jika division TIDAK DIPERBOLEHKAN?** 🚫

Contoh constraint:
- "Solve without using division operator"
- "What if division is not allowed?"
- "Implement using only multiplication"

---

### **💡 Insight: Pecah Jadi Dua Bagian**

Untuk posisi `i`, kita perlu mengalikan **semua elemen kecuali i**.

Mari kita pecah:

```
Array: [a, b, c, d, e]
                ↑
             index i=2

Product kecuali i = (a × b) × (d × e)
                     ↑───↑     ↑───↑
                     Left    Right
                    (Prefix) (Suffix)
```

**Aha! 💡**
```
Output[i] = Prefix[i] × Suffix[i]
```

Dimana:
- **Prefix[i]** = product semua elemen **sebelum** i
- **Suffix[i]** = product semua elemen **setelah** i

---

### **📊 Visualisasi Konsep**

```
Input Array: [2, 3, 4, 5]
Index:        0  1  2  3

Untuk index 2 (nilai 4):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[2, 3, 4, 5]
 ↑  ↑  ↑  ↑
 │  │  │  └─ Suffix part
 │  │  └──── Current (skip)
 └──┴─────── Prefix part

Prefix[2] = 2 × 3 = 6
Suffix[2] = 5
Output[2] = 6 × 5 = 30 ✅
```

---

## 🎨 Visualisasi Konsep

### **Step 1: Build Prefix Array**

```
Input:  [2, 3, 4, 5]

Prefix = product dari KIRI (excluding current)

Index 0: Tidak ada elemen di kiri   → prefix[0] = 1
Index 1: Elemen di kiri: 2          → prefix[1] = 2
Index 2: Elemen di kiri: 2, 3       → prefix[2] = 2 × 3 = 6
Index 3: Elemen di kiri: 2, 3, 4    → prefix[3] = 2 × 3 × 4 = 24

Prefix Array: [1, 2, 6, 24]
```

**Visual:**
```
Input:  [2,  3,  4,  5]
         ↓   ↓   ↓   ↓
Prefix: [1,  2,  6, 24]
         ↑   ↑   ↑   ↑
         │   │   │   └─ 2×3×4 = 24
         │   │   └───── 2×3 = 6
         │   └───────── 2 = 2
         └───────────── (empty) = 1
```

---

### **Step 2: Build Suffix Array**

```
Input:  [2, 3, 4, 5]

Suffix = product dari KANAN (excluding current)

Index 3: Tidak ada elemen di kanan  → suffix[3] = 1
Index 2: Elemen di kanan: 5         → suffix[2] = 5
Index 1: Elemen di kanan: 4, 5      → suffix[1] = 4 × 5 = 20
Index 0: Elemen di kanan: 3, 4, 5   → suffix[0] = 3 × 4 × 5 = 60

Suffix Array: [60, 20, 5, 1]
```

**Visual:**
```
Input:  [2,  3,  4,  5]
         ↓   ↓   ↓   ↓
Suffix: [60, 20, 5,  1]
         ↑   ↑   ↑   ↑
         │   │   │   └─ (empty) = 1
         │   │   └───── 5 = 5
         │   └───────── 4×5 = 20
         └───────────── 3×4×5 = 60
```

---

### **Step 3: Combine Prefix × Suffix**

```
Prefix: [1,  2,  6, 24]
Suffix: [60, 20, 5,  1]
         ×   ×   ×   ×
Result: [60, 40, 30, 24]

Index 0: 1 × 60 = 60   ✅ (3×4×5)
Index 1: 2 × 20 = 40   ✅ (2×4×5)
Index 2: 6 × 5  = 30   ✅ (2×3×5)
Index 3: 24 × 1 = 24   ✅ (2×3×4)
```

**Visual Flow:**
```
┌──────────────────────────────────────────────┐
│ Input: [2, 3, 4, 5]                          │
├──────────────────────────────────────────────┤
│                                              │
│ Pass 1 (Left → Right):                       │
│   Build Prefix: [1, 2, 6, 24]                │
│                                              │
│ Pass 2 (Right → Left):                       │
│   Build Suffix: [60, 20, 5, 1]               │
│                                              │
│ Combine:                                     │
│   Result[i] = Prefix[i] × Suffix[i]          │
│   [1×60, 2×20, 6×5, 24×1]                    │
│   = [60, 40, 30, 24]                         │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 💻 Implementasi Lengkap

### **✨ Versi 1: Explicit Arrays (Easy to Understand)**

```javascript
const uniqueProduct = (arr) => {
  const n = arr.length
  const prefix = new Array(n)
  const suffix = new Array(n)
  const result = new Array(n)

  // Step 1: Build prefix array (left to right)
  prefix[0] = 1  // No elements to the left of index 0
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * arr[i - 1]
  }

  // Step 2: Build suffix array (right to left)
  suffix[n - 1] = 1  // No elements to the right of last index
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * arr[i + 1]
  }

  // Step 3: Combine prefix and suffix
  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i]
  }

  return result
}
```

**📊 Space Complexity:** O(n) untuk prefix + O(n) untuk suffix = **O(2n) = O(n)**

---

### **✨ Versi 2: Space Optimized (Interview Standard)** ⭐

```javascript
const uniqueProduct = (arr) => {
  const n = arr.length
  const result = new Array(n)

  // Step 1: Build result as prefix (left to right)
  result[0] = 1
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * arr[i - 1]
  }

  // Step 2: Multiply with suffix on-the-fly (right to left)
  let suffixProduct = 1
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffixProduct
    suffixProduct *= arr[i]
  }

  return result
}
```

**📊 Space Complexity:** O(1) (excluding output array) - **Optimal!** 🎯

> **💡 PRO TIP**  
> Versi 2 adalah **interview standard**. Lebih efficient dan impressive!

---

## 📖 Penjelasan Detail Versi 2

### **Pass 1: Build Prefix in Result**

```javascript
result[0] = 1
for (let i = 1; i < n; i++) {
  result[i] = result[i - 1] * arr[i - 1]
}
```

**Trace untuk `[2, 3, 4, 5]`:**

```
┌─────────────────────────────────────────────┐
│ Pass 1: Left to Right (Prefix)              │
├─────────────────────────────────────────────┤
│ i=0: result[0] = 1 (initialized)            │
│      arr: [2, 3, 4, 5]                      │
│      result: [1, ?, ?, ?]                   │
├─────────────────────────────────────────────┤
│ i=1: result[1] = result[0] × arr[0]         │
│                = 1 × 2 = 2                  │
│      result: [1, 2, ?, ?]                   │
├─────────────────────────────────────────────┤
│ i=2: result[2] = result[1] × arr[1]         │
│                = 2 × 3 = 6                  │
│      result: [1, 2, 6, ?]                   │
├─────────────────────────────────────────────┤
│ i=3: result[3] = result[2] × arr[2]         │
│                = 6 × 4 = 24                 │
│      result: [1, 2, 6, 24]                  │
└─────────────────────────────────────────────┘

After Pass 1: result = [1, 2, 6, 24] (prefix)
```

---

### **Pass 2: Multiply with Suffix**

```javascript
let suffixProduct = 1
for (let i = n - 1; i >= 0; i--) {
  result[i] *= suffixProduct
  suffixProduct *= arr[i]
}
```

**Trace untuk `[2, 3, 4, 5]`:**

```
┌─────────────────────────────────────────────┐
│ Pass 2: Right to Left (Suffix)              │
│ Starting: result = [1, 2, 6, 24]            │
│           suffixProduct = 1                 │
├─────────────────────────────────────────────┤
│ i=3: result[3] *= suffixProduct             │
│      result[3] = 24 × 1 = 24 ✅             │
│      suffixProduct = 1 × arr[3] = 1 × 5 = 5 │
│      result: [1, 2, 6, 24]                  │
├─────────────────────────────────────────────┤
│ i=2: result[2] *= suffixProduct             │
│      result[2] = 6 × 5 = 30 ✅              │
│      suffixProduct = 5 × arr[2] = 5 × 4 = 20│
│      result: [1, 2, 30, 24]                 │
├─────────────────────────────────────────────┤
│ i=1: result[1] *= suffixProduct             │
│      result[1] = 2 × 20 = 40 ✅             │
│      suffixProduct = 20 × arr[1] = 20×3 = 60│
│      result: [1, 40, 30, 24]                │
├─────────────────────────────────────────────┤
│ i=0: result[0] *= suffixProduct             │
│      result[0] = 1 × 60 = 60 ✅             │
│      suffixProduct = 60 × arr[0] = 60×2 =120│
│      result: [60, 40, 30, 24]               │
└─────────────────────────────────────────────┘

Final Result: [60, 40, 30, 24] ✅
```

---

## 🔍 Trace Eksekusi Lengkap

### **Input: `[2, 3, 4, 5]`**

```
═══════════════════════════════════════════════════════════
INITIALIZATION
═══════════════════════════════════════════════════════════
arr = [2, 3, 4, 5]
n = 4
result = [undefined, undefined, undefined, undefined]

═══════════════════════════════════════════════════════════
PASS 1: BUILD PREFIX (Left → Right)
═══════════════════════════════════════════════════════════

Step 0: Initialize
  result[0] = 1
  result = [1, undefined, undefined, undefined]

Step 1: i = 1
  result[1] = result[0] × arr[0]
            = 1 × 2
            = 2
  result = [1, 2, undefined, undefined]

Step 2: i = 2
  result[2] = result[1] × arr[1]
            = 2 × 3
            = 6
  result = [1, 2, 6, undefined]

Step 3: i = 3
  result[3] = result[2] × arr[2]
            = 6 × 4
            = 24
  result = [1, 2, 6, 24]

After Pass 1: result = [1, 2, 6, 24]
              (This is the prefix array!)

═══════════════════════════════════════════════════════════
PASS 2: MULTIPLY WITH SUFFIX (Right → Left)
═══════════════════════════════════════════════════════════

Initialize: suffixProduct = 1

Step 0: i = 3
  result[3] = result[3] × suffixProduct
            = 24 × 1
            = 24
  suffixProduct = suffixProduct × arr[3]
                = 1 × 5
                = 5
  result = [1, 2, 6, 24]

Step 1: i = 2
  result[2] = result[2] × suffixProduct
            = 6 × 5
            = 30
  suffixProduct = suffixProduct × arr[2]
                = 5 × 4
                = 20
  result = [1, 2, 30, 24]

Step 2: i = 1
  result[1] = result[1] × suffixProduct
            = 2 × 20
            = 40
  suffixProduct = suffixProduct × arr[1]
                = 20 × 3
                = 60
  result = [1, 40, 30, 24]

Step 3: i = 0
  result[0] = result[0] × suffixProduct
            = 1 × 60
            = 60
  suffixProduct = suffixProduct × arr[0]
                = 60 × 2
                = 120 (not used)
  result = [60, 40, 30, 24]

═══════════════════════════════════════════════════════════
FINAL RESULT: [60, 40, 30, 24]
═══════════════════════════════════════════════════════════

Verification:
  Index 0: 60 = 3 × 4 × 5 ✅
  Index 1: 40 = 2 × 4 × 5 ✅
  Index 2: 30 = 2 × 3 × 5 ✅
  Index 3: 24 = 2 × 3 × 4 ✅
```

---

## 🎨 Visual Animation (Matrix View)

```
Input Array: [2, 3, 4, 5]

Pass 1: Building Prefix
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  i│ Operation        │ Result Array
───┼──────────────────┼─────────────────
  0│ Initialize       │ [1, ?, ?, ?]
  1│ 1 × 2           │ [1, 2, ?, ?]
  2│ 2 × 3           │ [1, 2, 6, ?]
  3│ 6 × 4           │ [1, 2, 6, 24]

Pass 2: Multiplying with Suffix
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  i│ suffix│ Operation    │ Result Array
───┼───────┼──────────────┼─────────────────
  3│   1   │ 24 × 1       │ [1, 2, 6, 24]
  2│   5   │ 6 × 5        │ [1, 2, 30, 24]
  1│  20   │ 2 × 20       │ [1, 40, 30, 24]
  0│  60   │ 1 × 60       │ [60, 40, 30, 24]

Final: [60, 40, 30, 24] ✅
```

---

## 🧪 Test dengan Semua Cases

```javascript
// Test 1: Basic
console.log(uniqueProduct([2, 3, 4, 5]))
// Output: [60, 40, 30, 24] ✅

// Test 2: Dengan 1
console.log(uniqueProduct([1, 2, 3, 4]))
// Output: [24, 12, 8, 6] ✅

// Test 3: Duplikat
console.log(uniqueProduct([1, 3, 3, 1]))
// Output: [9, 3, 3, 9] ✅

// Test 4: Dengan 0 (satu)
console.log(uniqueProduct([2, 0, 4]))
// Output: [0, 8, 0] ✅

// Test 5: Dengan 0 (dua)
console.log(uniqueProduct([2, 0, 0, 4]))
// Output: [0, 0, 0, 0] ✅

// Test 6: Negatif
console.log(uniqueProduct([-2, 3, -4]))
// Output: [-12, 8, -6] ✅

// Test 7: Array kecil
console.log(uniqueProduct([5, 2]))
// Output: [2, 5] ✅
```

**Semua test PASSED!** 🎉

---

## ⏱️ Analisis Kompleksitas

### **Time Complexity: O(n)**

```
Pass 1 (Prefix):  n iterasi
Pass 2 (Suffix):  n iterasi

Total: n + n = 2n = O(n) ✅
```

**Sama dengan division approach!**

---

### **Space Complexity: O(1)**

```
Excluding output array:

Variables:
- suffixProduct: O(1)
- Loop counters: O(1)

Total: O(1) ✅ (excluding output)
```

**Lebih baik dari versi 1 yang butuh O(n) extra space!**

---

## 📊 Comparison: Semua Approach

| Approach | Time | Space (excl output) | Division? | Interview Score |
|----------|------|---------------------|-----------|-----------------|
| **Nested Loop** | O(n²) | O(1) | ❌ No | ⭐⭐ |
| **Division** | O(n) | O(1) | ✅ Yes | ⭐⭐⭐⭐ |
| **Prefix/Suffix (2 arrays)** | O(n) | O(n) | ❌ No | ⭐⭐⭐ |
| **Prefix/Suffix (Optimized)** | O(n) | O(1) | ❌ No | ⭐⭐⭐⭐⭐ |

> **🏆 WINNER**  
> Prefix/Suffix Optimized adalah **solusi paling impressive** untuk interview!

---

## 💡 Kenapa Approach Ini Bagus untuk Interview?

### **✅ Shows Advanced Thinking:**

1. **Space optimization** - dari O(n) ke O(1)
2. **Two-pass technique** - elegant solution
3. **No division** - handles constraint
4. **Optimal complexity** - O(n) time

---

### **✅ Common Interview Follow-ups:**

**Interviewer:** "What if division is not allowed?"  
**You:** "We can use prefix and suffix products!" ✨

**Interviewer:** "Can you optimize space?"  
**You:** "Yes, we don't need separate suffix array!" ✨

**Interviewer:** "What's the complexity?"  
**You:** "O(n) time, O(1) space excluding output!" ✨

---

## 🎯 Kapan Menggunakan Approach Ini?

### **✅ Gunakan Prefix/Suffix jika:**

```
✅ Division not allowed (constraint)
✅ Interview coding challenge
✅ Want to show optimal solution
✅ Need O(1) extra space
✅ Array bisa contain zero (auto-handled!)
```

---

### **⚠️ Pertimbangkan Division jika:**

```
⚠️ Division allowed
⚠️ Simpler code preferred
⚠️ Team less experienced
⚠️ No space constraint
```

Division approach lebih **simple**, tapi Prefix/Suffix lebih **impressive**!

---

## 🔄 Variasi Kode

### **Variasi 1: Dengan Komentar Detail**

```javascript
const uniqueProduct = (arr) => {
  const n = arr.length
  const result = new Array(n)

  // Pass 1: Build prefix products in result
  // result[i] = product of all elements before index i
  result[0] = 1  // No elements before index 0
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * arr[i - 1]
  }

  // Pass 2: Multiply with suffix products
  // Traverse right to left, maintaining running suffix product
  let suffixProduct = 1
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffixProduct  // Multiply prefix with suffix
    suffixProduct *= arr[i]      // Update suffix for next iteration
  }

  return result
}
```

---

### **Variasi 2: Functional Style (Less Optimal)**

```javascript
const uniqueProduct = (arr) => {
  const n = arr.length
  
  // Build prefix
  const prefix = arr.reduce((acc, num, i) => {
    acc[i] = i === 0 ? 1 : acc[i - 1] * arr[i - 1]
    return acc
  }, [])
  
  // Build suffix (reverse)
  const suffix = arr.reduceRight((acc, num, i) => {
    acc[i] = i === n - 1 ? 1 : acc[i + 1] * arr[i + 1]
    return acc
  }, [])
  
  // Combine
  return prefix.map((p, i) => p * suffix[i])
}
```

> **💡 NOTE**  
> Functional style lebih readable tapi kurang efficient (O(n) extra space).

---

## 🧠 Quick Quiz

<details>
<summary><strong>❓ Quiz 1:</strong> Kenapa kita initialize <code>result[0] = 1</code>?</summary>

**Jawaban:** Karena tidak ada elemen **sebelum** index 0, maka prefix product-nya adalah **1** (identity element untuk multiplication).

**Analogi:**
```
result[0] harus berisi: product semua elemen sebelum index 0
Tapi tidak ada elemen sebelum index 0
Maka: 1 (tidak ada yang dikalikan)
```

**Jika kita set 0:**
```javascript
result[0] = 0  // ❌ SALAH!
// Semua result jadi 0 karena 0 × anything = 0
```

</details>

<details>
<summary><strong>❓ Quiz 2:</strong> Kenapa kita traverse dari kanan ke kiri di Pass 2?</summary>

**Jawaban:** Karena kita sedang build **suffix product** (dari kanan).

**Penjelasan:**
```
Pass 1 (kiri → kanan): Build prefix
  Index 0, 1, 2, 3... → product dari KIRI

Pass 2 (kanan → kiri): Multiply dengan suffix
  Index 3, 2, 1, 0... → product dari KANAN

Harus berlawanan arah untuk cover kedua sisi!
```

</details>

<details>
<summary><strong>❓ Quiz 3:</strong> Berapa space complexity jika kita pakai 2 array terpisah (prefix & suffix)?</summary>

**Jawaban:** O(n) extra space.

**Breakdown:**
```
prefix array:  O(n)
suffix array:  O(n)
result array:  O(n) (output, not counted)

Extra space: O(n) + O(n) = O(2n) = O(n)
```

**Dengan optimasi:**
```
suffixProduct variable: O(1)
result array: O(n) (output, not counted)

Extra space: O(1) ✅ Much better!
```

</details>

---

## 💪 Kelebihan & Kekurangan

### **✅ Kelebihan:**

- **No division required** - memenuhi constraint
- **Optimal time** - O(n)
- **Optimal space** - O(1) excluding output
- **Handle zero automatically** - tidak perlu special logic
- **Interview impressive** - shows problem-solving skills
- **Elegant solution** - two-pass technique

---

### **❌ Kekurangan:**

- **Less intuitive** - butuh pemahaman prefix/suffix concept
- **Harder to explain** - dibanding division
- **Slightly more code** - dibanding division
- **Two passes** - division hanya perlu 2 loops juga, tapi lebih straightforward

---

## 🎓 Tips untuk Interview

### **Tip 1: Explain Your Thinking**

```
"First, I'll build the prefix products from left to right.
Then, I'll multiply with suffix products from right to left.
This way, each position gets the product of all other elements
without
