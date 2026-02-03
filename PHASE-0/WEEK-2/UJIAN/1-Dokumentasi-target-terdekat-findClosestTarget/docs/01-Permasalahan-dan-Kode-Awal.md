```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📚 PART 1: PERMASALAHAN & KODE AWAL 📚                     ║
║                                                                          ║
║                  Memahami Problem & Evolution Kode                       ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 🎯 Problem | 🧪 Test Cases | 📝 Versi 1 | 📝 Versi 2 | 💡 Takeaways |
|:----------:|:-------------:|:----------:|:----------:|:------------:|
| [Jump](#-problem-statement) | [Jump](#-test-cases) | [Jump](#-versi-1-original-nested-loop) | [Jump](#-versi-2-refactored-nested-loop) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami problem targetTerdekat
- ✅ Mengenal Versi 1 (nested loop Indonesia)
- ✅ Mengenal Versi 2 (nested loop English)
- ✅ Siap untuk optimasi di part selanjutnya

---

## 🎯 Problem Statement

**Deskripsi:**  
Diberikan array karakter, cari jarak terdekat antara 'o' dan 'x'.

**Input:**  
Array of characters (berisi 'o', 'x', atau spasi)

**Output:**  
- Number: jarak terdekat antara 'o' dan 'x'
- 0: jika tidak ada 'x' dalam array

**Contoh:**
```javascript
Input:  ['x', ' ', 'o']
Output: 2
// Jarak dari index 0 ke index 2 = 2

Input:  ['o', 'x']
Output: 1
// Jarak dari index 0 ke index 1 = 1

Input:  ['o', ' ', ' ']
Output: 0
// Tidak ada 'x', return 0
```

---

## 🧪 Test Cases
```javascript
const testCases = [
  // Simple cases
  { input: ['x', 'o'], expected: 1 },
  { input: ['o', 'x'], expected: 1 },
  { input: ['x', ' ', 'o'], expected: 2 },
  
  // Edge cases
  { input: [' ', ' ', 'o', ' '], expected: 0 },
  { input: ['o', 'o', 'o'], expected: 0 },
  
  // Complex cases
  { input: [' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'], expected: 1 },
  { input: ['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '], expected: 1 },
  { input: ['o', ' ', ' ', ' ', 'x', 'x', 'x'], expected: 4 },
]
```

---

## 📝 Versi 1: Original (Nested Loop)

**Karakteristik:**
- Nested loop O(n×m)
- Nama variabel Bahasa Indonesia
- Simpan semua jarak di array `diff`
```javascript
const targetTerdekat = (arr) => {
  const positionO = []
  const positionX = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') positionO.push(i)
    if (arr[i] === 'x') positionX.push(i)
  }
  
  if (positionX.length === 0) return 0

  const diff = []

  for (const char1 of positionX) {
    for (const char2 of positionO) {
      let hitung = char1 - char2
      if (hitung < 0) hitung = char2 - char1
      diff.push(hitung)
    }
  }
  
  return Math.min(...diff)
}
```

### 🧠 Ringkasan Algoritma — Versi 1

💡 **Konsep Inti:**  
Kumpulkan semua posisi 'o' dan 'x', hitung SEMUA kemungkinan jarak, simpan semua, lalu cari yang terkecil.

🪜 **Step-by-Step:**
1. Scan array, simpan semua index 'o' ke `positionO`
2. Scan array, simpan semua index 'x' ke `positionX`
3. Jika tidak ada 'x' → return 0
4. Nested loop: untuk setiap pasangan (x, o)
   - Hitung jarak absolut
   - Simpan ke array `diff`
5. Return nilai minimum dari `diff`

🧩 **Keywords:**
- 🔁 Nested loop (O(n×m))
- 📦 Collect all positions
- 💾 Store all distances
- 📉 Find min at the end
- ⏱️ Time: O(n×m)
- 💾 Space: O(n×m)

### ⚠️ Issues Versi 1:

**1. Bahasa Indonesia**
```javascript
const positionO = []  // OK
const char1, char2    // Kurang jelas
const hitung          // Tidak deskriptif
```

**2. Memory Waste**
```javascript
const diff = []
diff.push(hitung)  // Simpan semua jarak
return Math.min(...diff)
```
Tidak perlu simpan semua, cukup track minimum!

**3. Complexity**
```javascript
for (const char1 of positionX) {
  for (const char2 of positionO) {
    // O(n×m) - lambat untuk array besar
  }
}
```

---

## 📝 Versi 2: Refactored (Nested Loop)

**Karakteristik:**
- Masih nested loop O(n×m)
- English naming convention
- Tidak simpan semua jarak, langsung track minimum
```javascript
const findClosestDistance = (chars) => {
  const length = chars.length
  const xPositions = []
  const oPositions = []
  
  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') xPositions.push(i)
    if (chars[i] === 'o') oPositions.push(i)
  }
  
  if (xPositions.length === 0) return 0
  
  let minDistance = length
  
  for (const xPosition of xPositions) {
    for (const oPosition of oPositions) {
      let distance = xPosition - oPosition
      if (distance < 0) distance = oPosition - xPosition
      if (distance < minDistance) minDistance = distance
    }
  }
  
  return minDistance
}
```

### 🧠 Ringkasan Algoritma — Versi 2

💡 **Konsep Inti:**  
Kumpulkan semua posisi 'o' dan 'x', hitung semua jarak tapi LANGSUNG track minimum (tidak simpan semua).

🪜 **Step-by-Step:**
1. Scan array, simpan index 'x' ke `xPositions`
2. Scan array, simpan index 'o' ke `oPositions`
3. Jika tidak ada 'x' → return 0
4. Init `minDistance = length` (nilai besar)
5. Nested loop: untuk setiap pasangan (x, o)
   - Hitung jarak absolut
   - **Langsung bandingkan** dengan `minDistance`
   - Update jika lebih kecil
6. Return `minDistance`

🧩 **Keywords:**
- 🔁 Nested loop (masih O(n×m))
- 📦 Collect all positions
- 📉 On-the-fly minimum tracking
- 🎯 Direct comparison
- ⏱️ Time: O(n×m)
- 💾 Space: O(n+m) - lebih baik!

### ✅ Improvements dari Versi 1:

**1. English Naming**
```diff
- const targetTerdekat = (arr)
+ const findClosestDistance = (chars)

- const char1, char2
+ const xPosition, oPosition

- let hitung
+ let distance
```

**2. No Array `diff`**
```diff
- const diff = []
- diff.push(hitung)
- return Math.min(...diff)

+ let minDistance = length
+ if (distance < minDistance) minDistance = distance
+ return minDistance
```

**3. Space Complexity**
```
Versi 1: O(n×m) - simpan semua jarak
Versi 2: O(n+m) - hanya simpan posisi
```

---

## 📊 Perbandingan Versi 1 vs Versi 2

| Aspek | Versi 1 | Versi 2 |
|-------|---------|---------|
| **Naming** | Indonesia | English ✅ |
| **Time Complexity** | O(n×m) | O(n×m) |
| **Space Complexity** | O(n×m) | O(n+m) ✅ |
| **Array `diff`** | Ada | Tidak ada ✅ |
| **Readability** | ⭐⭐⭐ | ⭐⭐⭐⭐ ✅ |
| **Production Ready** | ❌ | ❌ (masih bisa dioptimasi) |

**Kesimpulan:**  
Versi 2 lebih baik dari segi naming dan memory, tapi **masih O(n×m)** - bisa dioptimasi!

---

## 🧪 Test Results
```javascript
// Test Versi 2
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

Success: 8/8 ✅
```

**Kedua versi menghasilkan output yang benar!**

---

## 💡 Pelajaran Penting

### **1. Clean Code First**

> Sebelum optimasi performa, pastikan code readable dan maintainable.

Versi 2 lebih baik karena:
- English naming (standard industri)
- Tidak ada array yang tidak perlu
- Lebih mudah dipahami

### **2. Space Optimization**

> Tidak perlu simpan semua hasil jika hanya butuh minimum/maximum.
```javascript
// ❌ Simpan semua
diff.push(distance)
return Math.min(...diff)

// ✅ Track langsung
if (distance < minDistance) minDistance = distance
```

### **3. Masih Ada Room untuk Improvement**

> O(n×m) masih lambat untuk array besar. Ada cara lebih cepat!

Di Part 3, kita akan optimasi ke **O(n)** dengan two-pass algorithm! 🚀

---

## ✅ Key Takeaways

**Tentang Versi 1:**
- ❌ Bahasa Indonesia (tidak standard)
- ❌ Memory waste dengan array `diff`
- ✅ Logika benar tapi tidak efisien

**Tentang Versi 2:**
- ✅ English naming convention
- ✅ Direct minimum tracking
- ✅ Space complexity lebih baik
- ⚠️ Masih O(n×m) - bisa dioptimasi

**Next Step:**
- Versi 2 sudah clean, tapi masih bisa lebih cepat
- Part 2: Best practice refactoring
- Part 3: Optimasi ke O(n)!

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔧 [Lanjut ke Part 2: Refactoring Clean Code →](02-Refactoring-Nested-Loop.md)**

---

<div align="center">

**Siap refactor dengan best practice di Part 2?**

Made with ❤️ for learners

</div>
