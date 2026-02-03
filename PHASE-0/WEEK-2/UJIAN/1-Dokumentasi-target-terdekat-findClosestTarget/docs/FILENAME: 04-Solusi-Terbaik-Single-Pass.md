```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🏆 PART 4: SOLUSI TERBAIK - SINGLE-PASS 🏆                   ║
║                                                                          ║
║              The Genius Solution - Production Ready                      ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 💡 Insight | 📝 Versi 4 | 📝 Versi 5 | 📊 Comparison | 💡 Takeaways |
|:----------:|:----------:|:----------:|:-------------:|:------------:|
| [Jump](#-the-genius-insight) | [Jump](#-versi-4-single-pass) | [Jump](#-versi-5-functional-style) | [Jump](#-comparison-versi-3-vs-4) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami **genius insight** di balik single-pass
- ✅ Implement **best solution** untuk production
- ✅ Explore **functional variant** dengan `reduce()`
- ✅ Tahu **kapan menggunakan** setiap approach

---

## 💡 The Genius Insight

### **Problem dengan Two-Pass:**
```javascript
// Versi 3 - Two-Pass
Pass 1: → scan kiri ke kanan
Pass 2: ← scan kanan ke kiri

Total: 3 loops (1 validation + 2 passes)
```

**Pertanyaan:** Apa bisa lebih cepat? 🤔

---

### **The Big Idea:**

> **Track KEDUA posisi (lastO & lastX) dalam SATU loop!**
```
Setiap kali salah satu update:
→ Langsung hitung jarak antara keduanya
→ Update minimum jika lebih kecil
```

**Kenapa ini work?**

Karena jarak antara `lastO` dan `lastX` adalah **jarak terkecil yang mungkin SEJAUH INI**!

---

### **Visual Example:**
```
Array: ['x', ' ', 'o', ' ', 'x', 'o']
Index:   0    1    2    3    4    5

i=0: 'x' → lastX=0, lastO=null
i=2: 'o' → lastO=2, lastX=0
     distance = |2-0| = 2, min=2 ✓
i=4: 'x' → lastX=4, lastO=2
     distance = |4-2| = 2, min=2
i=5: 'o' → lastO=5, lastX=4
     distance = |5-4| = 1, min=1 ✓

Result: 1 ✅
```

**Magic:** Tidak perlu scan bolak-balik! 🎩✨

---

## 📝 Versi 4: Single-Pass

### **Implementation:**
```javascript
const findClosestDistance = (chars) => {
  let lastO = null
  let lastX = null
  let minDistance = Infinity
  
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === 'o') lastO = i
    if (chars[i] === 'x') lastX = i
    
    if (lastO !== null && lastX !== null) {
      const distance = Math.abs(lastO - lastX)
      if (distance < minDistance) minDistance = distance
    }
  }
  
  return minDistance === Infinity ? 0 : minDistance
}
```

### 🧠 Ringkasan Algoritma — Versi 4

💡 **Konsep Inti:**  
Scan array SATU kali sambil track posisi terakhir 'o' DAN 'x'. Setiap kali salah satu update, langsung hitung jarak dan update minimum.

🪜 **Step-by-Step:**
1. Init `lastO = null`, `lastX = null`, `minDistance = Infinity`
2. Loop dari 0 sampai length:
   - Jika ketemu 'o': update `lastO = i`
   - Jika ketemu 'x': update `lastX = i`
   - **Jika keduanya ada:** hitung `|lastO - lastX|`, update min
3. Return `minDistance === Infinity ? 0 : minDistance`

🧩 **Keywords:**
- 🔁 Single loop / one-pass
- 🧠 Dual state tracking (lastO & lastX)
- ⚡ On-the-fly calculation
- 📉 Continuous minimum tracking
- 🎯 No direction bias
- ⏱️ Time: O(n) - hanya 1 loop!
- 💾 Space: O(1) - minimal

---

### **Kenapa Pakai `Math.abs()`?**
```javascript
const distance = Math.abs(lastO - lastX)
```

Karena tidak tahu mana yang lebih besar (lastO atau lastX):
- Jika `lastO > lastX` → `lastO - lastX` positif
- Jika `lastX > lastO` → `lastO - lastX` negatif

`Math.abs()` ensure selalu positif! ✅

---

### **Kenapa `Infinity`?**
```javascript
let minDistance = Infinity
...
return minDistance === Infinity ? 0 : minDistance
```

**Alasan:**
- Jika tidak ada 'x', `minDistance` tetap `Infinity`
- Easy check: `Infinity` = tidak ada pasangan valid
- Alternative: pakai `chars.length` atau angka besar

---

## 📝 Contoh Eksekusi Detail

### **Case 1: `['x', ' ', 'o']`**
```javascript
i=0: 'x' → lastX=0, lastO=null
     (keduanya belum ada, skip)

i=1: ' ' → (skip)

i=2: 'o' → lastO=2, lastX=0
     distance = |2-0| = 2
     minDistance = 2

Result: 2 ✅
```

---

### **Case 2: `['o', 'x']`**
```javascript
i=0: 'o' → lastO=0, lastX=null
     (keduanya belum ada, skip)

i=1: 'x' → lastX=1, lastO=0
     distance = |0-1| = 1
     minDistance = 1

Result: 1 ✅
```

---

### **Case 3: `['x', ' ', 'o', ' ', 'x', 'o']`**
```javascript
i=0: 'x' → lastX=0, lastO=null

i=2: 'o' → lastO=2, lastX=0
     distance = |2-0| = 2, min=2

i=4: 'x' → lastX=4, lastO=2
     distance = |2-4| = 2, min=2

i=5: 'o' → lastO=5, lastX=4
     distance = |5-4| = 1, min=1 ✓

Result: 1 ✅
```

---

## 📝 Versi 5: Functional Style

Sama seperti Versi 4, tapi pakai `reduce()`:
```javascript
const findClosestDistance = (chars) => {
  let lastO = null
  let lastX = null
  
  const minDistance = chars.reduce((min, char, i) => {
    if (char === 'o') lastO = i
    if (char === 'x') lastX = i
    
    if (lastO !== null && lastX !== null) {
      return Math.min(min, Math.abs(lastO - lastX))
    }
    return min
  }, Infinity)
  
  return minDistance === Infinity ? 0 : minDistance
}
```

### 🧠 Ringkasan Algoritma — Versi 5

💡 **Konsep Inti:**  
Sama seperti Versi 4, tapi menggunakan `reduce()` untuk functional programming style. Track lastO & lastX di luar scope, accumulate minimum distance.

🪜 **Step-by-Step:**
1. Init `lastO = null`, `lastX = null` di luar reduce
2. `reduce()` dengan accumulator `min` (initial: Infinity)
3. Setiap elemen:
   - Update lastO atau lastX jika match
   - Jika keduanya ada: return `Math.min(min, |lastO - lastX|)`
   - Jika belum: return `min` (unchanged)
4. Return hasil dengan check Infinity

🧩 **Keywords:**
- 🎨 Functional programming (reduce)
- 🔄 Declarative approach
- 🧠 State outside reduce scope
- 📉 Accumulator pattern
- ⏱️ Time: O(n)
- 💾 Space: O(1)

---

### **Versi 4 vs Versi 5:**

| Aspect | Versi 4 (Loop) | Versi 5 (Reduce) |
|--------|----------------|------------------|
| **Style** | Imperative | Functional |
| **Readability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Performance** | Same | Same |
| **Best For** | Most teams | FP enthusiasts |

**Pilih mana?**
- **Versi 4:** Lebih familiar, easier to debug
- **Versi 5:** Cleaner untuk yang suka FP style

---

## 📊 Comparison: Versi 3 vs 4

| Aspect | Versi 3 (Two-Pass) | Versi 4 (Single-Pass) |
|--------|--------------------|-----------------------|
| **Loops** | 3 (1 validation + 2 passes) | 1 |
| **Lines of Code** | ~30 | ~12 |
| **Time Complexity** | O(n) | O(n) |
| **Actual Iterations** | 3n | n |
| **Speed** | Fast | **~3x faster** 🚀 |
| **Readability** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Best For** | Learning | **Production** ✅ |

**Kesimpulan:** Versi 4 lebih cepat DAN lebih simple! 🏆

---

## 🧪 All Test Cases
```javascript
const testCases = [
  { input: ['x', 'o'], expected: 1 },
  { input: ['o', 'x'], expected: 1 },
  { input: ['x', ' ', 'o'], expected: 2 },
  { input: [' ', ' ', 'o', ' '], expected: 0 },
  { input: ['o', 'o', 'o'], expected: 0 },
  { input: [' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'], expected: 1 },
  { input: ['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '], expected: 1 },
  { input: ['o', ' ', ' ', ' ', 'x', 'x', 'x'], expected: 4 },
]

testCases.forEach(({ input, expected }) => {
  const result = findClosestDistance(input)
  const status = result === expected ? '✅' : '❌'
  console.log(`${status} Expected: ${expected}, Got: ${result}`)
})
```

**Output:**
```
✅ Expected: 1, Got: 1
✅ Expected: 1, Got: 1
✅ Expected: 2, Got: 2
✅ Expected: 0, Got: 0
✅ Expected: 0, Got: 0
✅ Expected: 1, Got: 1
✅ Expected: 1, Got: 1
✅ Expected: 4, Got: 4

Success: 8/8 = 100% ✅
```

---

## 🎯 Why Production-Ready?

### **1. Performance**
```
Array 1000 elements, 500 'x', 500 'o':

Versi 2 (Nested):  500 × 500 = 250,000 ops
Versi 3 (Two-Pass): 3 × 1000 = 3,000 ops
Versi 4 (Single):   1 × 1000 = 1,000 ops

Speedup vs Versi 2: 250x faster! 🚀
Speedup vs Versi 3: 3x faster! 🚀
```

### **2. Simplicity**
```javascript
// Hanya ~12 baris code
// Easy to understand
// Easy to maintain
// Easy to test
```

### **3. No Dependencies**
```javascript
// Pure JavaScript
// No external libraries
// Works everywhere
```

### **4. Edge Cases Handled**
```javascript
✅ No 'x' → return 0
✅ No 'o' → return 0
✅ Both at start/end
✅ Multiple 'o' and 'x'
```

---

## 💡 Interview Tips

### **Jika Ditanya: "Can you optimize this?"**

**Jawaban:**

"Ya! Ada progression dari nested loop ke single-pass:

1. **Versi 1-2:** Nested loop O(n×m) - simple tapi lambat
2. **Versi 3:** Two-pass O(n) - faster, masih 3 loops
3. **Versi 4:** Single-pass O(n) - optimal, hanya 1 loop

Saya recommend **Versi 4** untuk production karena:
- Paling cepat (1 loop vs 3 loops)
- Paling simple (12 baris vs 30 baris)
- Paling readable

Trade-off: Versi 3 lebih educational untuk learning konsep direction-based optimization."

**Ini menunjukkan:**
- ✅ Deep understanding
- ✅ Know multiple approaches
- ✅ Can explain trade-offs
- ✅ Context awareness

---

## ✅ Key Takeaways

**Tentang Single-Pass:**

> **💡 Track Both States**  
> Dengan track lastO & lastX bersamaan, tidak perlu multiple passes

> **💡 Calculate On-The-Fly**  
> Setiap update, langsung hitung - no need to store

> **💡 Simpler ≠ Slower**  
> Code lebih simple malah lebih cepat!

**Tentang Optimization:**

> **💡 From 3 Loops to 1**  
> Still O(n), tapi 3x faster in practice

> **💡 Functional Alternative Exists**  
> `reduce()` untuk yang prefer FP style

> **💡 Production-Ready**  
> Performance + simplicity + maintainability

**Tentang Trade-offs:**

> **💡 Versi 3 (Two-Pass) for Learning**  
> Bagus untuk understand optimization journey

> **💡 Versi 4 (Single-Pass) for Production**  
> Best solution untuk real projects

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🚀 [← Kembali ke Part 3: Optimasi Two-Pass](03-Optimasi-Two-Pass.md)**
- **📊 [Lanjut ke Part 5: Perbandingan & Kesimpulan →](05-Perbandingan-dan-Kesimpulan.md)**

---

<div align="center">

**Siap untuk comparison lengkap di Part 5?**

Made with ❤️ for learners

</div>
