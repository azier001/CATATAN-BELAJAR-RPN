# 📚 Part 1: Review Kode Original

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📚 PART 1: REVIEW KODE ORIGINAL 📚                         ║
║                                                                          ║
║                  Identifikasi Bagian yang Overkill                       ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 🐛 Kode Original | 🔍 Issue #1 | 🔍 Issue #2 | 🔍 Issue #3 | 💡 Takeaways |
|:----------------:|:-----------:|:-----------:|:-----------:|:------------:|
| [Jump](#-kode-original) | [Jump](#-issue-1-map--set--array) | [Jump](#-issue-2-filter-dalam-loop) | [Jump](#-issue-3-tidak-perlu-copy) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami kode original yang overkill
- ✅ Mengidentifikasi 3 bagian yang bisa dioptimalkan
- ✅ Memahami kenapa perlu refactoring
- ✅ Siap untuk refactor step-by-step di Part 2

---

## 🐛 Kode Original

```javascript
function groupAnimals(animals) {
  const result = []

  const copyAnimals = [...animals]
  const sorted = copyAnimals.sort((a, b) => a.localeCompare(b))
  const firstChar = sorted.map((char) => char[0])
  const setFirtsChar = [...new Set(firstChar)]

  for (const char of setFirtsChar) {
    const filtered = sorted.filter((value) => value[0] === char)

    result.push(filtered)
  }

  return result
}
```

**Context:** Kode ini **TIDAK sesuai requirement** ❌ karena urutan dalam grup salah! Plus ada **3 bagian yang overkill**! 🐛

**Test Result:**
```javascript
groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])
// Expected: [['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']]
// Actual:   [['anoa', 'ayam'], ['cacing'], ['kancil', 'kuda']]
//            ^^^^^^  ^^^^^^              ^^^^^^^^  ^^^^^
//            SALAH! Harusnya ayam → anoa (urutan input)
```

---

## 🔍 Issue #0: Sort di Awal (MASALAH UTAMA!)

### **Masalah KRUSIAL:**
```javascript
const sorted = copyAnimals.sort((a, b) => a.localeCompare(b))
//    ^^^^^^ Sort SEMUA element alphabetically!
```

**Requirement:** Urutan dalam grup = **urutan input original**  
**Kode ini:** Urutan dalam grup = **alphabetical** ❌

### **Visualisasi:**
```
Input:  ['cacing', 'ayam', 'kuda', 'anoa', 'kancil']
         Urutan: ayam (index 1), anoa (index 3)

Sorted: ['anoa', 'ayam', 'cacing', 'kancil', 'kuda']
         Urutan: anoa → ayam (alphabetical) ❌

Expected grup 'a': ['ayam', 'anoa']  (urutan input)
Actual grup 'a':   ['anoa', 'ayam']  (alphabetical) ❌
```

### **Impact:**

| Test Case | Expected | Actual | Status |
|-----------|----------|--------|--------|
| `['cacing', 'ayam', ...]` | `['ayam', 'anoa']` | `['anoa', 'ayam']` | ❌ FAIL |
| `['cacing', 'ayam', ...]` | `['kuda', 'kancil']` | `['kancil', 'kuda']` | ❌ FAIL |

### **Insight:**
> **JANGAN sort input di awal!** Loop input original, sort hanya grup-grup di akhir!

---

## 🔍 Issue #1: Map → Set → Array

### **Masalah:**
```javascript
const firstChar = sorted.map((char) => char[0])
const setFirtsChar = [...new Set(firstChar)]
//    ^^^^^^^^^^^ Typo: "Firts" 😅
```

**Yang terjadi:**
1. Map semua element → ambil huruf pertama → jadi array baru
2. Convert ke Set (hilangkan duplikat)
3. Spread Set → jadi array lagi

**Contoh:**
```javascript
sorted = ['anoa', 'ayam', 'cacing', 'kancil', 'kuda']

// Step 1: map
firstChar = ['a', 'a', 'c', 'k', 'k']

// Step 2: Set
Set = {'a', 'c', 'k'}

// Step 3: spread
setFirtsChar = ['a', 'c', 'k']
```

### **Kenapa Overkill:**
- ❌ **3 operasi** untuk sesuatu yang bisa dilakukan **sambil loop**
- ❌ Extra **memory allocation** (2 array baru + 1 Set)
- ❌ Tidak efisien untuk array besar

### **Insight:**
> Karena array sudah **sorted**, semua element dengan huruf sama sudah **bersebelahan**. Kita bisa deteksi huruf baru **sambil loop**, tanpa perlu extract semua huruf dulu!

---

## 🔍 Issue #2: Filter Dalam Loop

### **Masalah:**
```javascript
for (const char of setFirtsChar) {
  const filtered = sorted.filter((value) => value[0] === char)
  //               ^^^^^^ Filter SELURUH array setiap iterasi!
  
  result.push(filtered)
}
```

**Yang terjadi:**
- Loop setiap huruf unik
- Setiap iterasi: **filter seluruh sorted array**

**Contoh:**
```javascript
setFirtsChar = ['a', 'c', 'k']
sorted = ['anoa', 'ayam', 'cacing', 'kancil', 'kuda']

// Iterasi 1: char = 'a'
filtered = sorted.filter(v => v[0] === 'a')  // Scan SEMUA 5 element
// Result: ['anoa', 'ayam']

// Iterasi 2: char = 'c'
filtered = sorted.filter(v => v[0] === 'c')  // Scan SEMUA 5 element lagi
// Result: ['cacing']

// Iterasi 3: char = 'k'
filtered = sorted.filter(v => v[0] === 'k')  // Scan SEMUA 5 element lagi
// Result: ['kancil', 'kuda']
```

**Complexity:**
- Jumlah huruf unik: `k`
- Array size: `n`
- Filter dipanggil: `k` kali
- Total scan: `k × n` ≈ **O(k × n)**

### **Kenapa Overkill:**
- ❌ **Scan berulang-ulang** padahal array sudah sorted
- ❌ Element yang sama di-check berkali-kali
- ❌ Tidak memanfaatkan fakta bahwa array sudah terurut

### **Insight:**
> Karena array sudah **sorted**, element dengan huruf sama pasti **bersebelahan**. Cukup **loop sekali** dan "ambil yang bersebelahan"!

---

## 🔍 Issue #3: Tidak Perlu Copy

### **Masalah:**
```javascript
const copyAnimals = [...animals]
const sorted = copyAnimals.sort((a, b) => a.localeCompare(b))
```

**Pertanyaan:** Apakah copy benar-benar perlu?

### **Analisis:**

**Pros Copy (Immutability):**
- ✅ Array original tidak berubah
- ✅ Pure function (no side effects)
- ✅ Safe jika `animals` digunakan lagi

**Cons Copy:**
- ❌ Extra memory: O(n)
- ❌ Extra time untuk copy: O(n)
- ❌ Untuk soal ujian sederhana: mungkin overkill

### **Kesimpulan:**
- **Untuk production/best practice:** Copy itu **BAGUS** ✅
- **Untuk soal ujian sederhana:** Bisa skip (tapi tetap best practice adalah copy)

**Note:** Di refactoring nanti, kita **tetap pakai copy** karena best practice!

---

## 📊 Dampak Gabungan

### **Severity Matrix:**

| Issue | Severity | Impact | Fix Effort |
|-------|----------|--------|------------|
| **Issue #0** (Sort awal) | **CRITICAL** | Wrong output! | Medium (change approach) |
| **Issue #1** (Map-Set) | MEDIUM | Overkill | Easy (remove) |
| **Issue #2** (Filter loop) | MEDIUM | Performance | Medium (change logic) |
| **Issue #3** (Copy) | LOW | Best practice | Keep it! |

### **Prioritas Perbaikan:**
```
1️⃣ Issue #0 (Sort awal) - CRITICAL - Output salah!
2️⃣ Issue #2 (Filter loop) - Performance impact
3️⃣ Issue #1 (Map-Set) - Unnecessary complexity
4️⃣ Issue #3 (Copy) - Actually GOOD practice
```

### **Test Results:**
```javascript
// Test Case 1
Input:    ['cacing', 'ayam', 'kuda', 'anoa', 'kancil']
Expected: [['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']]
Actual:   [['anoa', 'ayam'], ['cacing'], ['kancil', 'kuda']]
Status:   ❌ FAIL

// Test Case 2
Input:    ['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']
Expected: [['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta']]
Actual:   [['anoa', 'ayam'], ['cacing', 'cicak'], ['kancil', 'kuda'], ['unta']]
Status:   ❌ FAIL

Success Rate: 0/2 = 0% ❌
```

---

## 🎯 Apa yang Akan Diperbaiki?

### **Target Refactoring:**

**Algoritma baru:**
```
1. Sort array (sama)
2. Loop SEKALI saja
3. Bandingkan huruf pertama current vs previous
4. Jika beda → mulai grup baru
5. Jika sama → tambah ke grup current
6. Sort grup di akhir
```

**Benefits:**
- ✅ Loop cuma **1 kali** (bukan k kali)
- ✅ No map, no Set, no filter
- ✅ Lebih simple & efisien
- ✅ Time: O(n log n) + O(n) + O(k log k) ≈ **O(n log n)**

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Mengapa map → Set → Array overkill?</strong></summary>

**Jawaban:**

Karena kita melakukan 3 operasi terpisah untuk extract huruf unik, padahal bisa dilakukan **sambil loop**:
- Map: O(n)
- Set: O(n)
- Spread: O(k)

Total: O(2n + k) extra work yang tidak perlu.

Dengan loop sekali, kita bisa deteksi huruf baru sambil jalan tanpa extra array/Set.

</details>

<details>
<summary><strong>❓ Kenapa filter dalam loop tidak efisien?</strong></summary>

**Jawaban:**

Filter dipanggil `k` kali (jumlah huruf unik), dan setiap kali **scan seluruh array** (n element).

Total scan: k × n

Padahal karena array sudah sorted, cukup **loop sekali** (n) dan ambil yang bersebelahan.

</details>

<details>
<summary><strong>❓ Apakah kode original salah?</strong></summary>

**Jawaban:**

**TIDAK salah!** Kode berfungsi 100% benar.

Tapi **tidak optimal** karena:
- Complexity lebih tinggi dari yang dibutuhkan
- Memory usage lebih boros
- Kode lebih kompleks dari yang perlu

Refactoring bukan karena "salah", tapi untuk **improve quality**.

</details>

---

## ✅ Key Takeaways

**Tentang Kode Original:**
- ❌ **Output SALAH** - Urutan dalam grup tidak sesuai requirement
- ❌ **Issue #0 (Sort awal)** - CRITICAL: membuat urutan jadi alphabetical
- ⚠️ **Issue #1 & #2** - Overkill tapi bukan masalah utama
- ✅ **Issue #3 (Copy)** - Actually best practice!

**Lessons:**

> **💡 Baca Requirement dengan Teliti**  
> "Urutan dalam grup = urutan input" → JANGAN sort di awal!

> **💡 Working ≠ Correct**  
> Kode berjalan tanpa error ≠ output benar.

> **💡 Test dengan Expected Output**  
> Tanpa test case, kita tidak tahu kode salah.

> **💡 Sort Apa yang Perlu**  
> Sort grup (hasil akhir), bukan element input!

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔧 [Lanjut ke Part 2: Refactoring Step-by-Step →](02-Refactoring-Step-by-Step.md)**

---

<div align="center">

**Siap untuk refactoring step-by-step di Part 2?**

Made with ❤️ for learners

</div>
