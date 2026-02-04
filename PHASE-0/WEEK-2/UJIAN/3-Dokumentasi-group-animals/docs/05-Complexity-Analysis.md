# 📊 Part 5: Complexity Analysis

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            📊 PART 5: COMPLEXITY ANALYSIS 📊                            ║
║                                                                          ║
║              Time & Space Complexity Deep Dive                           ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Advanced-red)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌳%20Advanced-orange)

---

## 🧭 Quick Jump

| 🎯 Overview | ⏱️ Time | 💾 Space | 📊 Comparison | 💡 Takeaways |
|:-----------:|:-------:|:--------:|:-------------:|:------------:|
| [Jump](#-overview) | [Jump](#️-time-complexity) | [Jump](#-space-complexity) | [Jump](#-comparison-kode-original-vs-refactored) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami **time complexity** kode refactored
- ✅ Memahami **space complexity**
- ✅ Tahu **worst/best/average case**
- ✅ Understand kenapa kode sudah optimal

---

## 🔄 Overview

### **Kode yang Dianalisis:**

```javascript
function groupAnimals(animals) {
  const result = []                                    // O(1)

  for (const animal of animals) {                      // O(n)
    const firstLetter = animal[0]                      // O(1)
    let foundGroup = null                              // O(1)

    for (const group of result) {                      // O(k)
      const groupFirstLetter = group[0][0]             // O(1)

      if (groupFirstLetter === firstLetter) {          // O(1)
        foundGroup = group                             // O(1)
        break
      }
    }

    if (foundGroup !== null) {
      foundGroup.push(animal)                          // O(1)
    } else {
      result.push([animal])                            // O(1)
    }
  }
  
  result.sort((groupA, groupB) => {                    // O(k log k)
    const letterA = groupA[0][0]                       // O(1)
    const letterB = groupB[0][0]                       // O(1)
    return letterA.localeCompare(letterB)              // O(1)
  })

  return result                                        // O(1)
}
```

**Notasi:**
- `n` = jumlah animals
- `k` = jumlah grup (unique first letters)

---

## ⏱️ Time Complexity

### **Breakdown:**

**1. Outer Loop:**
```javascript
for (const animal of animals) { ... }  // O(n)
```
- Loop semua animals: **O(n)**

**2. Inner Loop:**
```javascript
for (const group of result) { ... }    // O(k)
```
- Loop semua grup yang ada: **O(k)**
- Worst case: k = n (semua huruf berbeda)
- Average case: k << n (misalnya k ≈ 10-26 huruf)

**3. Nested Loop Total:**
```javascript
O(n) × O(k) = O(n × k)
```

**4. Sort:**
```javascript
result.sort(...)  // O(k log k)
```
- Sort k grup: **O(k log k)**

**5. Total Time:**
```
O(n × k) + O(k log k)
```

### **Cases Analysis:**

#### **Worst Case: O(n²)**
```javascript
// Semua huruf berbeda
['apple', 'banana', 'cherry', 'date', ...]
// k = n → O(n × n) = O(n²)
```

#### **Best Case: O(n)**
```javascript
// Semua huruf sama
['apple', 'avocado', 'apricot', 'almond']
// k = 1 → O(n × 1) + O(1 log 1) = O(n)
```

#### **Average Case: O(n)**
```javascript
// Realistic scenario: k ≈ 10-26 (huruf alphabet)
// k adalah konstanta → O(n × k) ≈ O(n)
['ayam', 'bebek', 'cacing', 'domba', ...]
// k ≈ 26 (max) → O(n × 26) = O(26n) ≈ O(n)
```

**Kesimpulan:** Untuk real-world cases (animal names), **O(n)** average!

---

## 💾 Space Complexity

### **Breakdown:**

**1. Result Array:**
```javascript
const result = []
```
- Menyimpan k grup
- Setiap grup berisi subset dari n animals
- Total element tetap n
- **Space: O(n)**

**2. Variables:**
```javascript
const firstLetter = animal[0]    // O(1)
let foundGroup = null            // O(1)
const groupFirstLetter = ...     // O(1)
```
- Semua variables: **O(1)**

**3. Total Space:**
```
O(n) + O(1) = O(n)
```

**Note:** Tidak ada extra array/Set/Map helper → efficient!

---

## 📊 Comparison: Kode Original vs Refactored

### **Kode Original (Overkill):**
```javascript
function groupAnimals(animals) {
  const copyAnimals = [...animals]                     // O(n) space
  const sorted = copyAnimals.sort(...)                 // O(n log n) time
  const firstChar = sorted.map((char) => char[0])      // O(n) space + time
  const setFirtsChar = [...new Set(firstChar)]         // O(k) space + time

  for (const char of setFirtsChar) {                   // O(k)
    const filtered = sorted.filter(...)                // O(n) time
    result.push(filtered)
  }
  
  return result
}
```

**Complexity Original:**
- **Time:** O(n log n) + O(n) + O(k) + O(k × n) ≈ **O(k × n)**
- **Space:** O(n) + O(n) + O(k) ≈ **O(2n)**

### **Kode Refactored:**
```javascript
function groupAnimals(animals) {
  const result = []

  for (const animal of animals) {                      // O(n)
    const foundGroup = result.find(...)                // O(k)
    if (foundGroup) {
      foundGroup.push(animal)
    } else {
      result.push([animal])
    }
  }
  
  result.sort(...)                                     // O(k log k)
  return result
}
```

**Complexity Refactored:**
- **Time:** O(n × k) + O(k log k) ≈ **O(n)** average
- **Space:** O(n) ≈ **O(n)**

### **Comparison Table:**

| Metric | Original | Refactored | Improvement |
|--------|----------|------------|-------------|
| **Time (worst)** | O(k×n) | O(n×k) + O(k log k) | Same |
| **Time (average)** | O(k×n) | **O(n)** | ✅ Better! |
| **Space** | O(2n) | **O(n)** | ✅ 50% less! |
| **Operations** | Sort + Map + Set + Filter | Loop + Find + Sort | ✅ Simpler! |
| **Readability** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Better! |

---

## 🎯 Apakah Kode Sudah Optimal?

### **Untuk Constraint "Pure Array":**

**✅ YA, sudah optimal!**

**Alasan:**
1. **Time O(n) average** - Tidak bisa lebih baik untuk grouping
2. **Space O(n)** - Minimal yang dibutuhkan (harus simpan semua animals)
3. **No unnecessary operations** - Setiap step essential

### **Jika Boleh Pakai Object Helper:**

```javascript
// Bisa O(n) strict dengan Object
function groupAnimals(animals) {
  const groups = {}
  
  for (const animal of animals) {
    const letter = animal[0]
    if (!groups[letter]) groups[letter] = []
    groups[letter].push(animal)
  }
  
  return Object.keys(groups)
    .sort()
    .map(key => groups[key])
}

// Time: O(n) + O(k log k)
// Space: O(n)
```

**Tapi ini melanggar requirement "harus array saja"!**

---

## 📈 Scaling Analysis

### **Small Input (n = 100):**
```
Time: ~0.1ms
Space: ~1KB
Performance: ⭐⭐⭐⭐⭐ Excellent
```

### **Medium Input (n = 10,000):**
```
Time: ~10ms (average case dengan k ≈ 26)
Space: ~100KB
Performance: ⭐⭐⭐⭐⭐ Excellent
```

### **Large Input (n = 1,000,000):**
```
Worst case (k = n):
  Time: ~seconds (O(n²))
  Space: ~10MB

Average case (k ≈ 26):
  Time: ~100ms (O(n))
  Space: ~10MB
Performance: ⭐⭐⭐⭐ Good
```

**Kesimpulan:** Sangat efficient untuk real-world cases!

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa average case O(n) tapi worst case O(n²)?</strong></summary>

**Jawaban:**

**Average case:** k (jumlah grup) biasanya **kecil & konstan** (max 26 huruf)
- O(n × k) dengan k ≈ 26 → O(26n) ≈ **O(n)**

**Worst case:** Semua animals punya huruf berbeda
- k = n → O(n × n) = **O(n²)**

**Real-world:** Animal names pakai huruf alphabet → k max 26 → **O(n) praktis!**

</details>

<details>
<summary><strong>❓ Apakah bisa lebih cepat dari O(n)?</strong></summary>

**Jawaban:**

**TIDAK!** Karena kita **harus** loop semua animals minimal sekali untuk:
1. Baca setiap animal
2. Tentukan grupnya
3. Masukkan ke result

**Lower bound:** Ω(n) - tidak bisa lebih cepat dari ini.

</details>

<details>
<summary><strong>❓ Kenapa space O(n), bukan O(n + k)?</strong></summary>

**Jawaban:**

Meskipun kita punya:
- n animals (total)
- k groups

**Total space tetap O(n)** karena:
- Setiap animal hanya muncul **1 kali** di result
- k groups hanya structure, bukan duplicate data
- k ≤ n selalu

Jadi: O(n) untuk data + O(k) untuk structure ≈ **O(n)**

</details>

---

## ✅ Key Takeaways

**Tentang Complexity:**

> **💡 Average Case = Real-World**  
> O(n) average karena k << n di praktik.

> **💡 Worst Case ≠ Praktis**  
> O(n²) worst case jarang terjadi untuk animal names.

> **💡 Space Optimal**  
> O(n) adalah minimal - semua animals harus disimpan.

**Tentang Trade-offs:**

> **💡 Pure Array = Constraint**  
> Dengan Object bisa O(n) strict, tapi melanggar requirement.

> **💡 Readability > Micro-optimization**  
> Code yang jelas lebih penting dari shaving milliseconds.

> **💡 Know Your Data**  
> Animal names → k max 26 → O(n) praktis!

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📝 [← Kembali ke Part 4: Naming Convention](04-Naming-Convention.md)**
- **🏆 [Lanjut ke Part 6: Cheat Sheet →](06-Cheat-Sheet.md)**

---

<div align="center">

**Siap untuk cheat sheet di Part 6?**

Made with ❤️ for learners

</div>
