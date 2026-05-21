```markdown
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║                   📚 PART 1: PENGENALAN & ANALISIS PROBLEM 📚           ║
║                                                                          ║
║                    Memahami Problem Perkalian Unik                       ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📖 Problem | 🎯 Analisis | 🧪 Test Cases | ⚠️ Edge Cases | 💡 Summary |
|:----------:|:-----------:|:-------------:|:-------------:|:----------:|
| [Jump](#-deskripsi-problem) | [Jump](#-analisis-requirement) | [Jump](#-test-cases-lengkap) | [Jump](#️-edge-cases-yang-perlu-diperhatikan) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami problem **Perkalian Unik** dengan jelas
- ✅ Mengetahui input dan output yang diharapkan
- ✅ Mengidentifikasi edge cases yang harus ditangani
- ✅ Memahami constraint dan batasan problem
- ✅ Siap untuk mengimplementasikan solusi

---

## 📖 Deskripsi Problem

### **Problem Statement:**

Diberikan sebuah **function `perkalianUnik(arr)`** yang menerima satu parameter berupa **array angka**.

Function harus me-return **array baru** dimana:
- Setiap elemen adalah **hasil kali semua elemen lain**
- **Kecuali** elemen di posisi tersebut

### **Visual Representation:**

```
Input Array:  [a, b, c, d]
               ↓  ↓  ↓  ↓

Output Array: [b×c×d, a×c×d, a×b×d, a×b×c]
```

---

## 🎨 Contoh Sederhana

### **Contoh 1: Array dengan 3 Elemen**

```javascript
Input:  [2, 4, 6]

Proses:
- Index 0: Kalikan semua kecuali 2 → 4 × 6 = 24
- Index 1: Kalikan semua kecuali 4 → 2 × 6 = 12
- Index 2: Kalikan semua kecuali 6 → 2 × 4 = 8

Output: [24, 12, 8]
```

**Visualisasi:**

```
┌─────────────────────────────────────────────────┐
│  Input: [2, 4, 6]                               │
│                                                 │
│  Index 0 (nilai 2):                             │
│  ┌───┬───┬───┐                                 │
│  │ ✗ │ 4 │ 6 │  →  4 × 6 = 24                  │
│  └───┴───┴───┘                                 │
│                                                 │
│  Index 1 (nilai 4):                             │
│  ┌───┬───┬───┐                                 │
│  │ 2 │ ✗ │ 6 │  →  2 × 6 = 12                  │
│  └───┴───┴───┘                                 │
│                                                 │
│  Index 2 (nilai 6):                             │
│  ┌───┬───┬───┐                                 │
│  │ 2 │ 4 │ ✗ │  →  2 × 4 = 8                   │
│  └───┴───┴───┘                                 │
│                                                 │
│  Output: [24, 12, 8]                            │
└─────────────────────────────────────────────────┘
```

---

### **Contoh 2: Array dengan 5 Elemen**

```javascript
Input:  [1, 2, 3, 4, 5]

Proses:
- Index 0: 2 × 3 × 4 × 5 = 120
- Index 1: 1 × 3 × 4 × 5 = 60
- Index 2: 1 × 2 × 4 × 5 = 40
- Index 3: 1 × 2 × 3 × 5 = 30
- Index 4: 1 × 2 × 3 × 4 = 24

Output: [120, 60, 40, 30, 24]
```

---

## 📋 Analisis Requirement

### **Input:**
- **Type:** Array of numbers
- **Length:** Minimal 2 elemen
- **Values:** Bisa positif, negatif, atau nol

### **Output:**
- **Type:** Array of numbers
- **Length:** Sama dengan input array
- **Values:** Hasil perkalian sesuai aturan

### **Constraint:**
- ⚠️ Tidak boleh mengubah array asli (immutable)
- ⚠️ Array minimal 2 elemen (tidak ada array kosong atau 1 elemen)
- ⚠️ Operator pembagian bisa digunakan atau tidak (tergantung variant problem)

---

## 🧪 Test Cases Lengkap

### **1️⃣ Basic Cases - Array Normal**

```javascript
// Test Case 1: Array 3 elemen
perkalianUnik([2, 4, 6])
// Expected: [24, 12, 8]
// Explanation: [4×6, 2×6, 2×4]

// Test Case 2: Array 5 elemen
perkalianUnik([1, 2, 3, 4, 5])
// Expected: [120, 60, 40, 30, 24]
// Explanation: Setiap posisi adalah product of all except self

// Test Case 3: Array tidak berurutan
perkalianUnik([1, 4, 3, 2, 5])
// Expected: [120, 30, 40, 60, 24]
// Explanation: Urutan tidak mempengaruhi algoritma
```

---

### **2️⃣ Edge Case - Array dengan Duplikat**

```javascript
// Test Case 4: Nilai duplikat
perkalianUnik([1, 3, 3, 1])
// Expected: [9, 3, 3, 9]
// Explanation:
// - Index 0: 3 × 3 × 1 = 9
// - Index 1: 1 × 3 × 1 = 3
// - Index 2: 1 × 3 × 1 = 3
// - Index 3: 1 × 3 × 3 = 9

// Test Case 5: Multiple duplikat
perkalianUnik([2, 1, 8, 10, 2])
// Expected: [160, 320, 40, 32, 160]
```

**Visualisasi Test Case 4:**

```
Input: [1, 3, 3, 1]
        ↓  ↓  ↓  ↓

Index 0 (1): 3 × 3 × 1 = 9
Index 1 (3): 1 × 3 × 1 = 3  ← Walaupun ada 3 lain, tetap dikalikan!
Index 2 (3): 1 × 3 × 1 = 3
Index 3 (1): 1 × 3 × 3 = 9

Output: [9, 3, 3, 9]
```

> **💡 PENTING**  
> Duplikat **TETAP DIKALIKAN** karena kita skip berdasarkan **POSISI**, bukan **NILAI**!

---

### **3️⃣ Edge Case - Array dengan Angka 0**

Ini adalah edge case **paling tricky**! 🚨

#### **Kasus A: Ada 1 Angka Nol**

```javascript
perkalianUnik([2, 0, 4])
// Expected: [0, 8, 0]
// Explanation:
// - Index 0: 0 × 4 = 0  (ada 0 di perkalian)
// - Index 1: 2 × 4 = 8  (skip 0, jadi tidak ada 0)
// - Index 2: 2 × 0 = 0  (ada 0 di perkalian)
```

**Visualisasi:**

```
┌─────────────────────────────────────────────────┐
│  Input: [2, 0, 4]                               │
│                                                 │
│  Index 0 (nilai 2):                             │
│  Kalikan: 0 × 4 = 0  ❌ Ada nol!                │
│                                                 │
│  Index 1 (nilai 0):                             │
│  Kalikan: 2 × 4 = 8  ✅ Tidak ada nol!          │
│                                                 │
│  Index 2 (nilai 4):                             │
│  Kalikan: 2 × 0 = 0  ❌ Ada nol!                │
│                                                 │
│  Output: [0, 8, 0]                              │
│           ↑  ↑  ↑                               │
│           │  │  └─ Ada 0 dalam perkalian        │
│           │  └──── HANYA posisi ini tidak ada 0 │
│           └─────── Ada 0 dalam perkalian        │
└─────────────────────────────────────────────────┘
```

> **✨ FUN FACT**  
> Jika ada **1 nol**, hanya **posisi nol tersebut** yang punya nilai bukan-nol!

---

#### **Kasus B: Ada 2 atau Lebih Angka Nol**

```javascript
perkalianUnik([2, 0, 0, 4])
// Expected: [0, 0, 0, 0]
// Explanation:
// Semua posisi pasti ada minimal 1 nol dalam perkaliannya!
```

**Visualisasi:**

```
┌─────────────────────────────────────────────────┐
│  Input: [2, 0, 0, 4]                            │
│                                                 │
│  Index 0 (nilai 2):                             │
│  Kalikan: 0 × 0 × 4 = 0  ❌ Ada 2 nol!          │
│                                                 │
│  Index 1 (nilai 0 pertama):                     │
│  Kalikan: 2 × 0 × 4 = 0  ❌ Masih ada 1 nol!    │
│                                                 │
│  Index 2 (nilai 0 kedua):                       │
│  Kalikan: 2 × 0 × 4 = 0  ❌ Masih ada 1 nol!    │
│                                                 │
│  Index 3 (nilai 4):                             │
│  Kalikan: 2 × 0 × 0 = 0  ❌ Ada 2 nol!          │
│                                                 │
│  Output: [0, 0, 0, 0]  ← Semua jadi 0!          │
└─────────────────────────────────────────────────┘
```

---

#### **Kasus C: Semua Angka Nol**

```javascript
perkalianUnik([0, 0, 0])
// Expected: [0, 0, 0]
// Explanation:
// Semua posisi pasti mengalikan minimal 2 nol
```

---

### **4️⃣ Edge Case - Array dengan Angka Negatif**

```javascript
// Test Case: Angka negatif
perkalianUnik([-2, 3, -4])
// Expected: [12, 8, 6]
// Explanation:
// - Index 0: 3 × (-4) = -12  ❌ SALAH!
//            Harusnya: 3 × (-4) = -12... tunggu!

// Mari hitung ulang:
// - Index 0: 3 × (-4) = -12
// - Index 1: (-2) × (-4) = 8
// - Index 2: (-2) × 3 = -6

// KOREKSI Output: [-12, 8, -6]
```

**Visualisasi Angka Negatif:**

```
Input: [-2, 3, -4]

Index 0: 3 × (-4) = -12   (positif × negatif = negatif)
Index 1: (-2) × (-4) = 8  (negatif × negatif = positif!)
Index 2: (-2) × 3 = -6    (negatif × positif = negatif)

Output: [-12, 8, -6]
```

> **⚠️ PERHATIAN**  
> Perkalian angka negatif mengikuti aturan matematika biasa:
> - **Negatif × Negatif = Positif** ✅
> - **Negatif × Positif = Negatif** ✅

---

## ⚠️ Edge Cases yang Perlu Diperhatikan

### **📋 Checklist Edge Cases:**

- ✅ **Array dengan duplikat** → Skip berdasarkan index, bukan nilai
- ✅ **Array dengan 1 nol** → Hanya posisi nol yang bernilai bukan-nol
- ✅ **Array dengan 2+ nol** → Semua output jadi 0
- ✅ **Array dengan angka negatif** → Ikuti aturan matematika
- ✅ **Array dengan angka 1** → Tidak mengubah hasil perkalian
- ✅ **Array minimal (2 elemen)** → Edge case terkecil

---

## 🎯 Pattern Recognition

### **Pattern 1: Hubungan dengan Total Perkalian**

```
Jika kita punya total perkalian semua angka = TOTAL

Maka:
Output[i] = TOTAL ÷ Input[i]
```

**Contoh:**

```javascript
Input: [2, 3, 4]
Total = 2 × 3 × 4 = 24

Output[0] = 24 ÷ 2 = 12 ✅
Output[1] = 24 ÷ 3 = 8  ✅
Output[2] = 24 ÷ 4 = 6  ✅
```

> **💡 KEY INSIGHT**  
> Pattern ini adalah dasar untuk **optimasi O(n)** yang akan kita pelajari di Part 3!

---

### **Pattern 2: Hubungan dengan Angka 0**

```
Jika ada N angka 0 dalam array:

- N = 0  → Gunakan pembagian biasa
- N = 1  → Hanya posisi 0 yang bukan-nol
- N ≥ 2  → Semua output = 0
```

**Decision Tree:**

```
          Cek jumlah 0
               ↓
        ┌──────┴──────┐
        ↓              ↓
   Ada 0?           Tidak ada 0
        │                ↓
        ↓         Gunakan pembagian
    Berapa?              biasa
        │
   ┌────┴────┐
   ↓         ↓
  = 1      ≥ 2
   │         │
   ↓         ↓
 Hanya    Semua
posisi 0  jadi 0
bernilai
```

---

## 🧠 Pertanyaan Pemahaman

Sebelum lanjut ke implementasi, test pemahaman kamu:

<details>
<summary><strong>❓ Pertanyaan 1:</strong> Apa output dari <code>perkalianUnik([5, 0, 10])</code>?</summary>

**Jawaban:** `[0, 50, 0]`

**Penjelasan:**
- Index 0: 0 × 10 = 0
- Index 1: 5 × 10 = 50 (skip 0)
- Index 2: 5 × 0 = 0

</details>

<details>
<summary><strong>❓ Pertanyaan 2:</strong> Kenapa duplikat tetap dikalikan?</summary>

**Jawaban:** Karena kita skip berdasarkan **POSISI (index)**, bukan **NILAI**.

Contoh `[3, 3, 3]`:
- Index 0: skip index 0, kalikan index 1 dan 2 → 3 × 3 = 9
- Index 1: skip index 1, kalikan index 0 dan 2 → 3 × 3 = 9
- Index 2: skip index 2, kalikan index 0 dan 1 → 3 × 3 = 9

Output: `[9, 9, 9]`

</details>

<details>
<summary><strong>❓ Pertanyaan 3:</strong> Apa yang terjadi jika array punya 3 angka nol?</summary>

**Jawaban:** Semua output jadi 0.

**Penjelasan:**
Setiap posisi pasti mengalikan minimal 2 angka nol, jadi hasilnya selalu 0.

Contoh `[1, 0, 0, 0, 2]` → Output: `[0, 0, 0, 0, 0]`

</details>

---

## 💭 Strategi Solving

### **Pendekatan 1: Brute Force (O(n²))**
```
Untuk setiap posisi:
  - Loop semua elemen lain
  - Kalikan semua yang bukan di posisi ini
```
**Pros:** Mudah dipahami  
**Cons:** Lambat untuk array besar

---

### **Pendekatan 2: Optimized (O(n))**
```
1. Hitung total perkalian semua elemen
2. Untuk setiap posisi: total ÷ elemen
```
**Pros:** Sangat cepat  
**Cons:** Harus handle edge case 0 dengan hati-hati

---

### **Pendekatan 3: Prefix/Suffix (O(n) tanpa pembagian)**
```
1. Hitung prefix product (kiri ke kanan)
2. Hitung suffix product (kanan ke kiri)
3. Gabungkan keduanya
```
**Pros:** Tidak pakai pembagian, optimal  
**Cons:** Lebih kompleks

---

## 📊 Summary Table

| Aspek | Detail |
|-------|--------|
| **Input** | Array of numbers (min 2 elemen) |
| **Output** | Array sama panjang dengan hasil perkalian |
| **Edge Case Kritis** | Array dengan 0, duplikat, negatif |
| **Pattern Utama** | Output[i] = Total ÷ Input[i] |
| **Kompleksitas Ideal** | O(n) time, O(n) space |

---

## ✅ Key Takeaways

Setelah membaca Part 1, kamu sekarang paham:

- ✅ **Problem definition** yang jelas
- ✅ **Input/Output** yang diharapkan
- ✅ **Edge cases** yang harus ditangani (terutama 0!)
- ✅ **Pattern** untuk optimasi (total ÷ element)
- ✅ **Multiple approaches** yang bisa digunakan

---

## 🎯 Next Steps

Sekarang kamu sudah siap untuk:

1. 📝 Mulai coding solusi pertama (Nested Loop - Part 2)
2. ⚡ Belajar optimasi ke O(n) (Part 3)
3. 🚀 Explore advanced solutions (Part 5-6)

---

## 🏅 Achievement Unlocked!

**🎖️ Problem Analyzer**  
Kamu berhasil memahami problem Perkalian Unik dengan lengkap!

**Progress:** [▓▓░░░░░] 14% (1/7 parts)

---

<div align="center">

**📚 Lanjut ke Part 2: Solusi Nested Loop**

Siap untuk mulai coding? Part 2 menunggu! 🚀

</div>
