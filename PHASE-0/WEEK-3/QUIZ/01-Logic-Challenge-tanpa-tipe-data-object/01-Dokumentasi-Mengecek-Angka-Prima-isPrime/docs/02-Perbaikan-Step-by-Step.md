```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🔧 PART 2: PERBAIKAN STEP-BY-STEP 🔧                         ║
║                                                                          ║
║              Dari Kode Buggy ke Working Code                             ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔄 Strategi | 🔧 Tahap 1 | 🔧 Tahap 2 | 📊 Hasil | 💡 Takeaways |
|:-----------:|:----------:|:----------:|:--------:|:------------:|
| [Jump](#-strategi-perbaikan) | [Jump](#-tahap-1-handle-kasus-khusus) | [Jump](#-tahap-2-perbaiki-loop) | [Jump](#-perbandingan-hasil) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami strategi **perbaikan bertahap**
- ✅ Memperbaiki semua issue secara sistematis
- ✅ Test setiap tahap untuk verify improvement
- ✅ Mendapat kode yang **benar & efisien**

---

## 🔄 Strategi Perbaikan

### **Kenapa Bertahap?**

**Keuntungan:**
- ✅ Mudah track perubahan
- ✅ Test setiap perbaikan
- ✅ Debug lebih mudah
- ✅ Real-world practice

### **2-Step Plan:**
```
Tahap 1: Handle Kasus Khusus
    ↓ (angka ≤ 1, angka 2, genap)
    
Tahap 2: Perbaiki Loop
    ↓ (buang str.length, fix logic)
    
FIXED CODE! ✅
```

---

## 🔧 Tahap 1: Handle Kasus Khusus

### **Target:** Perbaiki pengecekan awal

### **Before:**
```javascript
function angkaPrima(angka) {
  if (angka % 2 === 0) return false  // ❌ Angka 2 salah!
  
  const str = String(angka)
  let count = 0
  // ...
}
```

### **After:**
```javascript
function angkaPrima(angka) {
  // Guard clauses
  if (angka <= 1) return false      // ✅ Handle ≤ 1
  if (angka === 2) return true      // ✅ 2 adalah prima
  if (angka % 2 === 0) return false // ✅ Genap lainnya bukan prima
  
  // Loop akan ditambahkan di Tahap 2
  return true  // Sementara
}
```

### **Changes:**
```diff
+ if (angka <= 1) return false
+ if (angka === 2) return true
  if (angka % 2 === 0) return false
```

### **Penjelasan Guard Clauses:**

**Guard #1: Angka ≤ 1**
```javascript
if (angka <= 1) return false
// 0, 1, -5 → bukan prima
```

**Guard #2: Angka 2**
```javascript
if (angka === 2) return true
// 2 adalah satu-satunya prima genap
```

**Guard #3: Genap Lainnya**
```javascript
if (angka % 2 === 0) return false
// 4, 6, 8, 10 → bukan prima
```

### **Test Tahap 1:**
```javascript
console.log(angkaPrima(1))   // false ✅
console.log(angkaPrima(2))   // true ✅
console.log(angkaPrima(4))   // false ✅
console.log(angkaPrima(6))   // false ✅
```

**Progress:** Guard clauses bekerja! 🎉

---

## 🔧 Tahap 2: Perbaiki Loop

### **Target:** Buang logika `str.length` & fix loop

### **Before:**
```javascript
const str = String(angka)
let count = 0

for (let i = 2; i <= angka; i++) {
  if (str.length < 2) {
    return true
  } else if (angka % i === 0) {
    count++
  }
}

return count === 1
```

### **After:**
```javascript
// Cek pembagi dari 3 sampai √angka (hanya angka ganjil)
const limit = Math.sqrt(angka)
for (let i = 3; i <= limit; i += 2) {
  if (angka % i === 0) return false
}

return true
```

### **Changes:**
```diff
- const str = String(angka)
- let count = 0
+ const limit = Math.sqrt(angka)

- for (let i = 2; i <= angka; i++) {
+ for (let i = 3; i <= limit; i += 2) {
-   if (str.length < 2) {
-     return true
-   } else if (angka % i === 0) {
-     count++
+   if (angka % i === 0) return false
-   }
  }

- return count === 1
+ return true
```

### **Penjelasan Perubahan:**

**1. Buang `str.length`**
```javascript
// ❌ SALAH - Tidak relevan
const str = String(angka)
if (str.length < 2) return true

// ✅ BENAR - Cek pembagi langsung
if (angka % i === 0) return false
```

**2. Loop Efisien**
```javascript
// ❌ SALAH - Loop sampai angka
for (let i = 2; i <= angka; i++)

// ✅ BENAR - Cukup sampai √angka
const limit = Math.sqrt(angka)
for (let i = 3; i <= limit; i += 2)
```

**3. Skip Angka Genap**
```javascript
// i += 2 → skip genap
// 3, 5, 7, 9, 11, 13, ...
// (Genap sudah dicek di guard clause)
```

**4. Early Return**
```javascript
// ❌ SALAH - Hitung count
count++
return count === 1

// ✅ BENAR - Return langsung
if (angka % i === 0) return false
```

### **Visualisasi:**

**Untuk angkaPrima(25):**
```
Guard clauses:
  25 <= 1? ❌
  25 === 2? ❌
  25 % 2 === 0? ❌
  
Loop:
  limit = √25 = 5
  i = 3: 25 % 3 = 1 (lanjut)
  i = 5: 25 % 5 = 0 → return false ✅
  
Result: 25 bukan prima (25 = 5×5)
```

**Untuk angkaPrima(17):**
```
Guard clauses:
  17 <= 1? ❌
  17 === 2? ❌
  17 % 2 === 0? ❌
  
Loop:
  limit = √17 ≈ 4.12
  i = 3: 17 % 3 = 2 (lanjut)
  i = 5: stop (5 > 4.12)
  
Result: return true ✅ (17 adalah prima)
```

---

## 📊 Perbandingan Hasil

### **Evolution Timeline:**
```
ORIGINAL (Buggy)
├─ Success: 63% (5/8)
├─ Issues: 3
└─ Production: ❌

    ↓ Tahap 1 (Guard Clauses)

AFTER TAHAP 1
├─ Success: 75% (6/8)
├─ Issues: 1
└─ Production: ❌

    ↓ Tahap 2 (Fix Loop)

AFTER TAHAP 2 (FINAL)
├─ Success: 100% (8/8) ✅
├─ Issues: 0 ✅
└─ Production: ✅ READY!
```

### **Test Results (Final):**

```javascript
const testCases = [
  { input: 1, expected: false },
  { input: 2, expected: true },
  { input: 3, expected: true },
  { input: 7, expected: true },
  { input: 9, expected: false },
  { input: 11, expected: true },
  { input: 23, expected: true },
  { input: 33, expected: false },
]

testCases.forEach(({ input, expected }) => {
  const result = angkaPrima(input)
  const status = result === expected ? '✅' : '❌'
  console.log(`angkaPrima(${input}): ${status}`)
})
```

**Output:**
```
angkaPrima(1): ✅
angkaPrima(2): ✅
angkaPrima(3): ✅
angkaPrima(7): ✅
angkaPrima(9): ✅
angkaPrima(11): ✅
angkaPrima(23): ✅
angkaPrima(33): ✅

Success: 8/8 = 100% 🎉
```

### **Metrics Comparison:**

| Metric | Original | Tahap 1 | Tahap 2 |
|--------|----------|---------|---------|
| **Success Rate** | 63% | 75% | **100%** ✅ |
| **Issues** | 3 | 1 | **0** ✅ |
| **Lines of Code** | 15 | 18 | **11** ✅ |
| **Efficiency** | O(n) | O(n) | **O(√n)** ✅ |

**Bonus:** Kode jadi **lebih pendek & lebih cepat**! 🚀

---

## 📝 Kode Final

```javascript
const angkaPrima = (angka) => {
  // Guard clauses
  if (angka <= 1) return false
  if (angka === 2) return true
  if (angka % 2 === 0) return false

  // Cek pembagi ganjil sampai √angka
  const limit = Math.sqrt(angka)
  for (let i = 3; i <= limit; i += 2) {
    if (angka % i === 0) return false
  }

  return true
}
```

**Karakteristik:**
- ✅ Logika benar (cek pembagi, bukan str.length)
- ✅ Handle semua edge case
- ✅ Efisien (O(√n))
- ✅ Readable & clean

---

## 🎯 Best Practices yang Diterapkan

### **1. Guard Clauses di Awal**
```javascript
// ✅ GOOD - Early return
if (angka <= 1) return false
if (angka === 2) return true
// Main logic
```

### **2. Early Return**
```javascript
// ✅ GOOD - Return saat ketemu pembagi
if (angka % i === 0) return false

// ❌ BAD - Count sampai akhir
count++
return count === 1
```

### **3. Optimasi Loop**
```javascript
// ✅ GOOD - Sampai √n
const limit = Math.sqrt(angka)
for (let i = 3; i <= limit; i += 2)

// ❌ BAD - Sampai n
for (let i = 2; i <= angka; i++)
```

### **4. Skip Unnecessary Check**
```javascript
// ✅ GOOD - Skip genap (sudah dicek)
i += 2  // 3, 5, 7, 9, ...

// ❌ BAD - Cek semua
i++  // 2, 3, 4, 5, 6, ...
```

---

## ✅ Key Takeaways

**Tentang Perbaikan Bertahap:**

> **💡 Small Steps = Less Risk**  
> Perbaiki satu per satu, test setiap tahap

> **💡 Guard Clauses First**  
> Handle edge case di awal, main logic jadi clean

> **💡 Simplify Logic**  
> Buang yang tidak perlu (str.length, count)

**Tentang Optimasi:**

> **💡 Early Return = Faster**  
> Stop saat ketemu hasil, tidak perlu lanjut

> **💡 Loop Sampai √n**  
> Efisiensi dari O(n) ke O(√n)

> **💡 Skip Smart**  
> Genap sudah dicek → skip dengan i += 2

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🐛 [← Kembali ke Part 1: Analisis Kode Lama](01-Analisis-Kode-Lama.md)**
- **📝 [Lanjut ke Part 3: Refactoring Clean Code →](03-Refactoring-Clean-Code.md)**

---

<div align="center">

**Siap untuk refactoring ke clean code di Part 3?**

Made with ❤️ for learners

</div>
