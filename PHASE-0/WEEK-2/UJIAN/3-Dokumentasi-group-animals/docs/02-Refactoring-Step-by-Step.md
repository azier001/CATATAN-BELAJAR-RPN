# 🔧 Part 2: Refactoring Step-by-Step

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🔧 PART 2: REFACTORING STEP-BY-STEP 🔧                       ║
║                                                                          ║
║              Perbaikan Bertahap dari Overkill ke Optimal                 ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔄 Overview | 🔧 Step 1 | 🔧 Step 2 | 🔧 Step 3 | 🔧 Step 4 | 💡 Takeaways |
|:-----------:|:---------:|:---------:|:---------:|:---------:|:------------:|
| [Jump](#-overview-strategi) | [Jump](#-step-1-setup-awal) | [Jump](#-step-2-cari-grup) | [Jump](#-step-3-push-ke-grup) | [Jump](#-step-4-sort-grup) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami strategi **refactoring bertahap**
- ✅ Implement step 1-4 dengan test di setiap tahap
- ✅ Memahami **kenapa sort tanpa maintain urutan salah**
- ✅ Siap untuk lihat ringkasan algoritma di Part 3

---

## 🔄 Overview: Strategi

### **Kenapa Step-by-Step?**

**Keuntungan:**
- ✅ Isolate changes - Tahu apa yang berubah
- ✅ Test setiap step - Verify correctness
- ✅ Easy debug - Tahu di mana masalah

### **4-Step Plan:**
```
Step 1: Setup awal (loop + firstLetter)
    ↓
Step 2: Cari grup yang sudah ada
    ↓
Step 3: Push ke grup yang tepat
    ↓
Step 4: Sort grup alphabetically
    ↓
DONE! ✅
```

---

## 🔧 Step 1: Setup Awal

### **Tugas:**
Buat struktur dasar dengan loop, ambil huruf pertama saja dulu.

### **Code:**
```javascript
const groupAnimals = (animals) => {
  const sortedAnimals = [...animals].sort((a,b) => a.localeCompare(b))  // ✅ TAMBAH
  
  console.log(sortedAnimals)  // ✅ TAMBAH
}
```

**Legend:** ✅ = Baris baru ditambahkan

### **Test:**
```javascript
groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])
// Output: ['anoa', 'ayam', 'cacing', 'kancil', 'kuda']
```

### **❌ Masalah yang Ditemukan:**

**Urutan dalam grup jadi salah!**

```javascript
Input:  ['cacing', 'ayam', 'kuda', 'anoa', 'kancil']
Sorted: ['anoa', 'ayam', 'cacing', 'kancil', 'kuda']
//       ^^^^^^  ^^^^^^
//       Urutan terbalik! Harusnya ayam → anoa (sesuai input)

Expected grup 'a': ['ayam', 'anoa']  // Urutan input
Actual grup 'a':   ['anoa', 'ayam']  // Urutan alphabetical
```

### **Root Cause:**
`.sort()` di awal mengurutkan **semua element alphabetically**, sehingga urutan dalam grup juga berubah.

**Requirement:** Urutan dalam grup = **urutan input original**!

### **Solution:**
**JANGAN sort di awal!** Sort hanya grup-grup di akhir.

---

## 💡 Pivot: Ganti Strategi

### **Strategi Baru (Tanpa Sort Awal):**
```
1. Loop input ORIGINAL (tidak di-sort)
2. Untuk setiap animal:
   - Cari grup dengan huruf pertama yang sama
   - Jika ada → push ke grup tersebut
   - Jika tidak → buat grup baru
3. Sort GRUP (bukan element) di akhir
```

### **Restart dengan Approach Benar:**

```javascript
const groupAnimals = (animals) => {
  const result = []                                    // ✅ TAMBAH
  
  for (const animal of animals) {                      // ✅ TAMBAH
    const firstLetter = animal[0]                      // ✅ TAMBAH
    
    console.log(`Animal: ${animal}, Letter: ${firstLetter}`)  // ✅ TAMBAH
  }
  
  return result                                        // ✅ TAMBAH
}
```

**Legend:** ✅ = Baris baru ditambahkan

### **Test:**
```javascript
groupAnimals(['ayam', 'cacing', 'anoa'])
// Output:
// Animal: ayam, Letter: a
// Animal: cacing, Letter: c
// Animal: anoa, Letter: a
```

**✅ Step 1 Done:** Loop dan extract huruf pertama berhasil!

---

## 🔧 Step 2: Cari Grup

### **Tugas:**
Cari apakah sudah ada grup dengan huruf pertama yang sama.

### **Perubahan dari Step Sebelumnya:**

```javascript
const groupAnimals = (animals) => {
  const result = []
  
  for (const animal of animals) {
    const firstLetter = animal[0]
    let foundGroup = null                              // ✅ TAMBAH
    
    for (const group of result) {                      // ✅ TAMBAH
      const groupFirstLetter = group[0][0]             // ✅ TAMBAH
      
      if (groupFirstLetter === firstLetter) {          // ✅ TAMBAH
        foundGroup = group                             // ✅ TAMBAH
        break                                          // ✅ TAMBAH
      }                                                // ✅ TAMBAH
    }                                                  // ✅ TAMBAH
    
    console.log(`Animal: ${animal}, Found: ${foundGroup !== null}`)  // 🔄 UBAH
  }
  
  return result
}
```

**Legend:**
- ✅ = Baris baru ditambahkan
- 🔄 = Baris diubah

### **Test:**
```javascript
groupAnimals(['ayam', 'cacing', 'anoa'])
// Output:
// Animal: ayam, Found: false    (belum ada grup)
// Animal: cacing, Found: false  (belum ada grup)
// Animal: anoa, Found: false    (belum ada grup - result masih kosong!)
```

**✅ Step 2 Done:** Logic pencarian grup berhasil (meski semua false karena belum push ke result)!

---

## 🔧 Step 3: Push ke Grup

### **Tugas:**
Push animal ke grup yang sesuai (yang sudah ada atau baru).

### **Perubahan dari Step Sebelumnya:**

```javascript
const groupAnimals = (animals) => {
  const result = []
  
  for (const animal of animals) {
    const firstLetter = animal[0]
    let foundGroup = null
    
    for (const group of result) {
      const groupFirstLetter = group[0][0]
      
      if (groupFirstLetter === firstLetter) {
        foundGroup = group
        break
      }
    }
    
    if (foundGroup !== null) {                         // ✅ TAMBAH
      foundGroup.push(animal)                          // ✅ TAMBAH
    } else {                                           // ✅ TAMBAH
      result.push([animal])                            // ✅ TAMBAH
    }                                                  // ✅ TAMBAH
    
    console.log(`After ${animal}:`, JSON.stringify(result))  // 🔄 UBAH
  }
  
  return result
}
```

**Legend:**
- ✅ = Baris baru ditambahkan
- 🔄 = Baris diubah

### **Test:**
```javascript
groupAnimals(['ayam', 'cacing', 'anoa', 'cicak'])
// Output:
// After ayam: [["ayam"]]
// After cacing: [["ayam"],["cacing"]]
// After anoa: [["ayam","anoa"],["cacing"]]
// After cicak: [["ayam","anoa"],["cacing","cicak"]]
```

**✅ Step 3 Done:** Grouping berhasil! Tapi urutan grup belum sorted.

---

## 🔧 Step 4: Sort Grup

### **Tugas:**
Sort grup berdasarkan huruf pertama alphabetically.

### **Perubahan dari Step Sebelumnya:**

```javascript
const groupAnimals = (animals) => {
  const result = []
  
  for (const animal of animals) {
    const firstLetter = animal[0]
    let foundGroup = null
    
    for (const group of result) {
      const groupFirstLetter = group[0][0]
      
      if (groupFirstLetter === firstLetter) {
        foundGroup = group
        break
      }
    }
    
    if (foundGroup !== null) {
      foundGroup.push(animal)
    } else {
      result.push([animal])
    }
  }
  
  // Sort grup alphabetically                       // ✅ TAMBAH
  result.sort((groupA, groupB) => {                 // ✅ TAMBAH
    const letterA = groupA[0][0]                    // ✅ TAMBAH
    const letterB = groupB[0][0]                    // ✅ TAMBAH
                                                    // ✅ TAMBAH
    return letterA.localeCompare(letterB)          // ✅ TAMBAH
  })                                                // ✅ TAMBAH
  
  return result
}
```

**Legend:** ✅ = Baris baru ditambahkan

### **Test (Final):**
```javascript
groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])
// Expected: [['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']]
// Actual:   [['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']]
// ✅ MATCH!

groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak'])
// Expected: [['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta']]
// Actual:   [['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta']]
// ✅ MATCH!

groupAnimals([])
// Expected: []
// Actual:   []
// ✅ MATCH!
```

**✅ Step 4 Done:** Semua test passed! 🎉

---

## 📊 Evolution Timeline

```
ORIGINAL (Overkill)
├─ Sort di awal
├─ Map → Set → Array
├─ Filter dalam loop
└─ Complexity: O(k×n)

    ↓ Attempt #1 (SALAH)

SORT DI AWAL
├─ Urutan dalam grup salah
└─ ❌ Tidak sesuai requirement

    ↓ Pivot Strategy

STEP 1-2-3-4 (BENAR)
├─ No sort di awal
├─ Loop sekali, cari grup
├─ Push ke grup yang tepat
├─ Sort grup di akhir
└─ Complexity: O(n×k) + O(k log k) ≈ O(n) average
```

---

## 🎯 Kenapa Tidak Sort di Awal?

### **Visualisasi:**

**Input:** `['cacing', 'ayam', 'kuda', 'anoa', 'kancil']`

**❌ Dengan sort di awal:**
```
Sorted: ['anoa', 'ayam', 'cacing', 'kancil', 'kuda']

Grup 'a': ['anoa', 'ayam']  ❌ SALAH (harusnya ayam → anoa)
```

**✅ Tanpa sort di awal:**
```
Loop original order:
- 'cacing' (c) → buat grup ['cacing']
- 'ayam' (a) → buat grup ['ayam']
- 'kuda' (k) → buat grup ['kuda']
- 'anoa' (a) → ada grup 'a' → ['ayam', 'anoa'] ✅
- 'kancil' (k) → ada grup 'k' → ['kuda', 'kancil'] ✅

Result: [['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']]
Sort grup: [['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']] ✅
```

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa sort di awal itu salah?</strong></summary>

**Jawaban:**

Karena sort mengubah **urutan element dalam array**, sehingga urutan dalam grup juga ikut berubah.

Requirement: Urutan dalam grup = urutan input original.

Jika sort di awal → urutan jadi alphabetical, bukan urutan input.

**Solution:** Loop input original, sort hanya grup di akhir.

</details>

<details>
<summary><strong>❓ Kenapa perlu loop 2 kali (outer + inner)?</strong></summary>

**Jawaban:**

**Outer loop:** Iterasi setiap animal  
**Inner loop:** Cari grup yang sudah ada

Karena kita harus cek "apakah sudah ada grup dengan huruf ini?" sebelum push.

Alternative: Pakai `.find()` (lihat Part 3).

</details>

<details>
<summary><strong>❓ Apakah bisa lebih optimal?</strong></summary>

**Jawaban:**

Untuk **pure array approach** (no Object helper), ini sudah optimal.

Time: O(n×k) dimana k = jumlah grup (biasanya kecil, max 26 huruf)  
Average case: O(n) karena k << n

Jika boleh pakai Object: bisa O(n) strict, tapi melanggar requirement "harus array saja".

</details>

---

## ✅ Key Takeaways

**Tentang Refactoring:**

> **💡 Test Setiap Step**  
> Jangan langsung ke final code - test bertahap!

> **💡 Pivot Jika Salah**  
> Sort di awal ternyata salah → ganti strategi.

> **💡 Requirement First**  
> Urutan dalam grup = urutan input → don't sort di awal!

**Tentang Algoritma:**

> **💡 Loop Sekali vs K Kali**  
> Filter dalam loop (k kali) vs loop sekali (n) = huge difference!

> **💡 Sort Apa yang Perlu**  
> Sort grup (k element), bukan animals (n element).

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🐛 [← Kembali ke Part 1: Review Kode Original](01-Review-Kode-Original.md)**
- **📋 [Lanjut ke Part 3: Ringkasan Algoritma →](03-Ringkasan-Algoritma.md)**

---

<div align="center">

**Siap lihat ringkasan 3 versi implementasi di Part 3?**

Made with ❤️ for learners

</div>
