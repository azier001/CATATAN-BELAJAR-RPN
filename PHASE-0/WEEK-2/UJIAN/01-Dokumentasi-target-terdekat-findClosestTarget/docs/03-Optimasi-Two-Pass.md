```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🚀 PART 3: OPTIMASI TWO-PASS 🚀                              ║
║                                                                          ║
║              Dari O(n×m) ke O(n) - Learning Journey                      ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-25%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🎯 Konsep | 📝 Tahap 1 | 📝 Tahap 2 | 📝 Tahap 3 | 📝 Tahap 4 | 💡 Takeaways |
|:---------:|:----------:|:----------:|:----------:|:----------:|:------------:|
| [Jump](#-konsep-two-pass) | [Jump](#-tahap-1-setup--validation) | [Jump](#-tahap-2-pass-1---left-to-right) | [Jump](#-tahap-3-pass-2---right-to-left) | [Jump](#-tahap-4-final-test) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami konsep **two-pass algorithm**
- ✅ Implement **tahap demi tahap** dengan testing
- ✅ Optimasi dari **O(n×m) ke O(n)**
- ✅ Siap untuk single-pass di Part 4

---

## 🔄 Konsep Two-Pass

### **Problem dengan Nested Loop:**
```javascript
// Versi 2 - O(n×m)
for (const xPosition of xPositions) {      // n iterasi
  for (const oPosition of oPositions) {    // m iterasi
    // Total: n × m kombinasi!
  }
}
```

**Untuk array besar:**
- 50 'x' × 50 'o' = **2,500 iterasi** 🐌

---

### **Solusi: Two-Pass**

Scan array **2 kali** dengan arah berbeda:
```
Pass 1: → → → (left to right)
        Cari 'x' di KIRI 'o'

Pass 2: ← ← ← (right to left)
        Cari 'x' di KANAN 'o'
```

**Benefit:**
- Pass 1: n iterasi
- Pass 2: n iterasi
- **Total: 2n iterasi** (jauh lebih cepat!) 🚀

---

### **Visual Example:**
```
Array: ['x', ' ', 'o', ' ', 'x', 'o']
Index:   0    1    2    3    4    5

Pass 1 (→): 
  i=0: 'x' → lastX = 0
  i=2: 'o' → distance = 2-0 = 2 ✓
  i=4: 'x' → lastX = 4
  i=5: 'o' → distance = 5-4 = 1 ✓

Pass 2 (←):
  i=5: 'o' → (no x to the right yet)
  i=4: 'x' → lastX = 4
  i=2: 'o' → distance = 4-2 = 2
  i=0: 'x' → lastX = 0

Result: min(2, 1) = 1 ✅
```

---

## 📝 Tahap 1: Setup & Validation

**Goal:** Cek apakah ada 'x' dalam array
```javascript
const findClosestDistance = (chars) => {
  const length = chars.length

  // Validation: check if 'x' exists
  let hasX = false
  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') {
      hasX = true
      break
    }
  }
  
  if (!hasX) return 0
  
  // TODO: Pass 1 & 2
  return 999  // temporary
}
```

### **Test Tahap 1:**
```javascript
console.log(findClosestDistance(['o', ' ']))      // 0 ✅
console.log(findClosestDistance(['o', 'o', 'o']))  // 0 ✅
console.log(findClosestDistance(['x', 'o']))       // 999 (belum implementasi)
```

**Status:** Edge case handled! ✅

---

## 📝 Tahap 2: Pass 1 - Left to Right

**Goal:** Cari jarak dari 'o' ke 'x' di sebelah KIRI

### **Algoritma:**
```
Loop dari kiri ke kanan (i = 0 → length):
  Jika ketemu 'x' → simpan posisi
  Jika ketemu 'o' DAN ada 'x' di kiri → hitung jarak
```

### **Implementation:**
```javascript
const findClosestDistance = (chars) => {
  const length = chars.length

  // Validation
  let hasX = false
  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') {
      hasX = true
      break
    }
  }
  if (!hasX) return 0
  
  let minDistance = length
  let lastXPos = -1
  
  // Pass 1: Left to Right
  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') {
      lastXPos = i
    }
    
    if (chars[i] === 'o' && lastXPos !== -1) {
      const distance = i - lastXPos
      if (distance < minDistance) minDistance = distance
    }
  }
  
  return minDistance
}
```

### **Contoh Eksekusi:**
```javascript
findClosestDistance(['x', ' ', 'o'])

// Validation: hasX = true ✓

// Pass 1:
i=0: 'x' → lastXPos = 0
i=1: ' ' → (skip)
i=2: 'o' → lastXPos = 0 (ada x di kiri)
     distance = 2 - 0 = 2
     minDistance = 2

return 2 ✅
```

### **Test Tahap 2:**
```javascript
// Kasus: x di KIRI o
console.log(findClosestDistance(['x', 'o']))        // 1 ✅
console.log(findClosestDistance(['x', ' ', 'o']))   // 2 ✅

// Kasus: x di KANAN o (BELUM BISA!)
console.log(findClosestDistance(['o', 'x']))        // length ❌
// Expected: 1, tapi dapat `length` karena Pass 1 tidak handle ini
```

**Status:** Pass 1 bekerja untuk x di KIRI! Butuh Pass 2 untuk handle x di KANAN.

---

## 📝 Tahap 3: Pass 2 - Right to Left

**Goal:** Cari jarak dari 'o' ke 'x' di sebelah KANAN

### **Algoritma:**
```
Loop dari kanan ke kiri (i = length-1 → 0):
  Jika ketemu 'x' → simpan posisi
  Jika ketemu 'o' DAN ada 'x' di kanan → hitung jarak
```

### **Implementation:**
```javascript
const findClosestDistance = (chars) => {
  const length = chars.length

  // Validation
  let hasX = false
  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') {
      hasX = true
      break
    }
  }
  if (!hasX) return 0
  
  let minDistance = length
  let lastXPos = -1
  
  // Pass 1: Left to Right
  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') lastXPos = i
    if (chars[i] === 'o' && lastXPos !== -1) {
      const distance = i - lastXPos
      if (distance < minDistance) minDistance = distance
    }
  }
  
  // Pass 2: Right to Left
  lastXPos = -1  // RESET!
  
  for (let i = length - 1; i >= 0; i--) {
    if (chars[i] === 'x') {
      lastXPos = i
    }
    
    if (chars[i] === 'o' && lastXPos !== -1) {
      const distance = lastXPos - i  // BEDA urutan!
      if (distance < minDistance) minDistance = distance
    }
  }
  
  return minDistance
}
```

### **Key Differences Pass 2:**
```diff
  // Pass 1
+ for (let i = 0; i < length; i++)
+ distance = i - lastXPos

  // Pass 2
+ for (let i = length - 1; i >= 0; i--)  // MUNDUR
+ distance = lastXPos - i                // TERBALIK
```

### **Contoh Eksekusi:**
```javascript
findClosestDistance(['o', 'x'])

// Pass 1: 
i=0: 'o' → lastXPos = -1 (belum ada x)
i=1: 'x' → lastXPos = 1
minDistance = length (tidak berubah)

// Pass 2:
i=1: 'x' → lastXPos = 1
i=0: 'o' → lastXPos = 1 (ada x di kanan)
     distance = 1 - 0 = 1
     minDistance = 1

return 1 ✅
```

---

## 📝 Tahap 4: Final Test

### **Versi 3 - Complete Code:**
```javascript
const findClosestDistance = (chars) => {
  const length = chars.length

  // Validation
  let hasX = false
  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') {
      hasX = true
      break
    }
  }
  if (!hasX) return 0
  
  let minDistance = length
  let lastXPos = -1
  
  // Pass 1: Left to Right
  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') lastXPos = i
    if (chars[i] === 'o' && lastXPos !== -1) {
      const distance = i - lastXPos
      if (distance < minDistance) minDistance = distance
    }
  }
  
  // Pass 2: Right to Left
  lastXPos = -1
  for (let i = length - 1; i >= 0; i--) {
    if (chars[i] === 'x') lastXPos = i
    if (chars[i] === 'o' && lastXPos !== -1) {
      const distance = lastXPos - i
      if (distance < minDistance) minDistance = distance
    }
  }
  
  return minDistance
}
```

### 🧠 Ringkasan Algoritma — Versi 3

💡 **Konsep Inti:**  
Scan array 2 kali dengan arah berbeda. Pass 1 cari x di kiri o, Pass 2 cari x di kanan o. Track minimum distance.

🪜 **Step-by-Step:**
1. Validasi: cek apakah ada 'x', jika tidak return 0
2. Init `minDistance = length`, `lastXPos = -1`
3. **Pass 1 (kiri→kanan):**
   - Jika ketemu 'x': simpan posisi ke `lastXPos`
   - Jika ketemu 'o' DAN ada x di kiri: hitung `i - lastXPos`, update min
4. **Reset** `lastXPos = -1`
5. **Pass 2 (kanan→kiri):**
   - Jika ketemu 'x': simpan posisi ke `lastXPos`
   - Jika ketemu 'o' DAN ada x di kanan: hitung `lastXPos - i`, update min
6. Return `minDistance`

🧩 **Keywords:**
- 🔄 Two-pass traversal (2 arah berbeda)
- 📍 Last position tracking
- 🧠 Direction-based optimization
- 🎯 On-the-fly minimum
- ⏱️ Time: O(n) - 3 loops total
- 💾 Space: O(1) - hanya variabel

---

### **All Test Cases:**
```javascript
const testCases = [
  { input: ['x', 'o'], expected: 1 },
  { input: ['o', 'x'], expected: 1 },
  { input: ['x', ' ', 'o'], expected: 2 },
  { input: [' ', ' ', 'o', ' '], expected: 0 },
  { input: [' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'], expected: 1 },
  { input: ['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '], expected: 1 },
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
✅ Expected: 1, Got: 1
✅ Expected: 1, Got: 1

Success: 6/6 = 100% ✅
```

---

## 📊 Performance Comparison

| Aspect | Versi 2 (Nested) | Versi 3 (Two-Pass) |
|--------|------------------|---------------------|
| **Algorithm** | Nested loop | Two-pass |
| **Time Complexity** | O(n×m) | **O(n)** ✅ |
| **Space Complexity** | O(n+m) | **O(1)** ✅ |
| **Iterations (worst)** | 2,500 (50×50) | **200** (3×50+50) ✅ |
| **Speed Improvement** | Baseline | **~12x faster** 🚀 |

**Contoh:**
```javascript
// Array: 100 chars, 50 'x', 50 'o'

Versi 2: 50 × 50 = 2,500 iterasi
Versi 3: 100 + 100 + 100 = 300 iterasi

Speedup: 2,500 / 300 = 8.3x faster! 🚀
```

---

## 💡 Learning Insights

### **1. Direction Matters**

> Pass 1 handle x di KIRI, Pass 2 handle x di KANAN.  
> Gabungan keduanya = jarak terdekat!

### **2. No Need to Store All**

> Tidak perlu simpan semua posisi.  
> Cukup track posisi terakhir yang relevan.

### **3. Two Pass ≠ Two Nested**
```
Two Pass: O(n + n) = O(2n) = O(n) ✅
Nested: O(n × m) ❌
```

### **4. Reset is Important**
```javascript
// Pass 2: WAJIB reset lastXPos!
lastXPos = -1
```

Kalau tidak reset, Pass 2 pakai nilai dari Pass 1 → SALAH!

---

## ✅ Key Takeaways

**Tentang Two-Pass:**

> **💡 Multiple Passes ≠ Slow**  
> 2 pass O(n) lebih cepat dari 1 nested O(n×m)

> **💡 Direction-Based Thinking**  
> Beda arah scan untuk handle beda case

> **💡 State Tracking**  
> Track last position, bukan semua positions

**Tentang Optimization:**

> **💡 From O(n×m) to O(n)**  
> Huge performance gain untuk array besar

> **💡 Space O(1)**  
> Hanya butuh beberapa variabel

> **💡 Still Readable**  
> Clean code tidak harus lambat!

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔧 [← Kembali ke Part 2: Refactoring](02-Refactoring-Nested-Loop.md)**
- **🏆 [Lanjut ke Part 4: Solusi Terbaik Single-Pass →](04-Solusi-Terbaik-Single-Pass.md)**

---

<div align="center">

**Siap untuk solusi paling optimal di Part 4?**

Made with ❤️ for learners

</div>
