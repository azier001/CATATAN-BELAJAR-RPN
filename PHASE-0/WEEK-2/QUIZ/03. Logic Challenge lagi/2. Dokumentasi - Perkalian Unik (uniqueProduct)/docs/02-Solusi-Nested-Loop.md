```markdown
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              🐢 PART 2: SOLUSI NESTED LOOP (O(n²)) 🐢                   ║
║                                                                          ║
║                 Pendekatan Pertama yang Straightforward                  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Time Complexity](https://img.shields.io/badge/Time-O(n²)-red)
![Space Complexity](https://img.shields.io/badge/Space-O(n)-green)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)

---

## 🧭 Quick Jump

| 📝 Ringkasan | 🐛 Bug Umum | ✅ Solusi Benar | 🎨 Visualisasi | 💡 Summary |
|:------------:|:-----------:|:---------------:|:--------------:|:----------:|
| [Jump](#-ringkasan-algoritma-versi-ujian) | [Jump](#-bug-umum-yang-sering-terjadi) | [Jump](#-solusi-yang-benar) | [Jump](#-visualisasi-eksekusi) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami pendekatan **nested loop** untuk menyelesaikan problem
- ✅ Mengetahui **bug umum** yang sering terjadi
- ✅ Bisa membedakan **perbandingan nilai vs index**
- ✅ Mengimplementasikan solusi yang **benar**
- ✅ Memahami **time & space complexity** O(n²)

---

## 📝 Ringkasan Algoritma (Versi Ujian)

> **💡 Jika kamu sedang ujian dan hanya ingat konsepnya, ini yang perlu kamu tulis:**

### **Konsep Inti:**
```
Untuk setiap elemen di posisi i:
  Kalikan semua elemen di posisi j
  Dimana i ≠ j (skip posisi yang sama)
```

### **Step-by-Step:**
```
1. Buat array kosong untuk hasil
2. Loop outer (i) untuk setiap posisi
3. Buat variabel product = 1
4. Loop inner (j) untuk semua posisi
5. Jika i ≠ j, kalikan product dengan arr[j]
6. Masukkan product ke array hasil
7. Return array hasil
```

### **Keywords Penting:**
- 🔄 **Nested loop** (loop dalam loop)
- 🎯 **i !== j** (perbandingan INDEX, bukan nilai!)
- ⏱️ **O(n²)** complexity

---

<div align="center">

**⬇️ Scroll ke bawah untuk melihat implementasi lengkap dan penjelasan detail ⬇️**

</div>

---

## 🐛 Bug Umum yang Sering Terjadi

### **❌ Bug #1: Membandingkan NILAI bukan INDEX**

Ini adalah bug **paling sering** terjadi!

```javascript
// ❌ KODE SALAH (Bug!)
function perkalianUnik(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    let product = 1
    const currentNumber = arr[i]  // Ambil nilai

    for (let j = 0; j < arr.length; j++) {
      if (currentNumber !== arr[j]) {  // ❌ Bandingkan NILAI
        product *= arr[j]
      }
    }

    result.push(product)
  }

  return result
}
```

### **🔍 Kenapa Ini Bug?**

Mari kita trace dengan array yang punya **duplikat**:

```javascript
Input: [1, 3, 3, 1]
```

**Trace untuk Index 1 (nilai 3):**

```
i = 1, currentNumber = 3

Inner loop:
├─ j=0: arr[0]=1, currentNumber(3) !== 1? ✅ Ya → product = 1 × 1 = 1
├─ j=1: arr[1]=3, currentNumber(3) !== 3? ❌ Tidak → SKIP
├─ j=2: arr[2]=3, currentNumber(3) !== 3? ❌ Tidak → SKIP (BUG!)
└─ j=3: arr[3]=1, currentNumber(3) !== 1? ✅ Ya → product = 1 × 1 = 1

Result: product = 1
```

**Expected:** `3` (harusnya 1 × 3 × 1)  
**Actual:** `1` (karena index 2 yang juga bernilai 3 di-skip!)

### **📊 Visualisasi Bug:**

```
Input: [1, 3, 3, 1]
        ↓  ↓  ↓  ↓

Untuk index 1 (nilai 3):
┌───────────────────────────────────────┐
│ Harus kalikan: 1 × 3 × 1              │
│                ↑   ↑   ↑              │
│                │   │   └─ index 3     │
│                │   └───── index 2 ✅  │
│                └───────── index 0     │
└───────────────────────────────────────┘

Tapi karena currentNumber === arr[2]:
┌───────────────────────────────────────┐
│ Yang terkalikan: 1 × 1                │
│                  ↑   ↑                │
│                  │   └─ index 3       │
│                  └───── index 0       │
│                                       │
│ Index 2 di-SKIP! ❌ (harusnya tetap   │
│ dikalikan karena posisinya berbeda)   │
└───────────────────────────────────────┘

Output SALAH: [9, 1, 1, 9]
Expected:     [9, 3, 3, 9]
                  ↑  ↑
                  Salah!
```

> **⚠️ INGAT!**  
> Kita skip berdasarkan **POSISI (index)**, bukan **NILAI (value)**!

---

## ✅ Solusi yang Benar

### **✨ Versi 1: Menggunakan Index Loop**

```javascript
function uniqueProduct(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    let product = 1
    
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {  // ✅ Bandingkan INDEX, bukan nilai!
        product *= arr[j]
      }
    }
    
    result.push(product)
  }

  return result
}
```

### **📋 Penjelasan Kode:**

```javascript
function uniqueProduct(arr) {
  const result = []              // 📦 Array untuk menyimpan hasil

  // 🔄 OUTER LOOP: Iterasi setiap posisi
  for (let i = 0; i < arr.length; i++) {
    let product = 1              // 🔢 Reset product untuk setiap posisi
    
    // 🔄 INNER LOOP: Kalikan semua elemen lain
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {             // ✅ Skip jika index sama
        product *= arr[j]        // ✅ Kalikan dengan elemen di index j
      }
    }
    
    result.push(product)         // 📥 Masukkan hasil ke array
  }

  return result                  // 🎯 Return array hasil
}
```

---

### **✨ Versi 2: Menggunakan for...of (Modern)**

```javascript
function uniqueProduct(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    let product = 1
    
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j]
      }
    }
    
    result.push(product)
  }

  return result
}
```

> **💡 PRO TIP**  
> Untuk nested loop yang butuh akses index, lebih baik pakai **traditional for loop** dengan counter i dan j.

---

## 🎨 Visualisasi Eksekusi

Mari kita trace kode dengan contoh konkret:

### **Input: `[2, 3, 4]`**

```
Outer Loop Dimulai
═══════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────┐
│ ITERASI 1: i = 0 (arr[0] = 2)                          │
├─────────────────────────────────────────────────────────┤
│ product = 1                                             │
│                                                         │
│ Inner Loop:                                             │
│ ├─ j=0: i(0) !== j(0)? ❌ → SKIP                       │
│ ├─ j=1: i(0) !== j(1)? ✅ → product = 1 × 3 = 3        │
│ └─ j=2: i(0) !== j(2)? ✅ → product = 3 × 4 = 12       │
│                                                         │
│ result.push(12)                                         │
│ result = [12]                                           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ITERASI 2: i = 1 (arr[1] = 3)                          │
├─────────────────────────────────────────────────────────┤
│ product = 1                                             │
│                                                         │
│ Inner Loop:                                             │
│ ├─ j=0: i(1) !== j(0)? ✅ → product = 1 × 2 = 2        │
│ ├─ j=1: i(1) !== j(1)? ❌ → SKIP                       │
│ └─ j=2: i(1) !== j(2)? ✅ → product = 2 × 4 = 8        │
│                                                         │
│ result.push(8)                                          │
│ result = [12, 8]                                        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ITERASI 3: i = 2 (arr[2] = 4)                          │
├─────────────────────────────────────────────────────────┤
│ product = 1                                             │
│                                                         │
│ Inner Loop:                                             │
│ ├─ j=0: i(2) !== j(0)? ✅ → product = 1 × 2 = 2        │
│ ├─ j=1: i(2) !== j(1)? ✅ → product = 2 × 3 = 6        │
│ └─ j=2: i(2) !== j(2)? ❌ → SKIP                       │
│                                                         │
│ result.push(6)                                          │
│ result = [12, 8, 6]                                     │
└─────────────────────────────────────────────────────────┘

HASIL AKHIR: [12, 8, 6] ✅
```

---

## 🔄 Visualisasi Matrix (2D View)

Cara lain untuk memahami nested loop:

```
Input: [2, 3, 4]

       j=0  j=1  j=2
       (2)  (3)  (4)
      ┌────┬────┬────┐
i=0(2)│ ❌ │ ✅ │ ✅ │ → 3 × 4 = 12
      ├────┼────┼────┤
i=1(3)│ ✅ │ ❌ │ ✅ │ → 2 × 4 = 8
      ├────┼────┼────┤
i=2(4)│ ✅ │ ✅ │ ❌ │ → 2 × 3 = 6
      └────┴────┴────┘

❌ = Skip (i === j)
✅ = Kalikan

Output: [12, 8, 6]
```

---

## 📊 Trace Lengkap dengan Array Duplikat

Input: `[1, 3, 3, 1]`

```
┌─────────────────────────────────────────────────────────┐
│ i=0 (nilai 1)                                           │
├─────────────────────────────────────────────────────────┤
│ product = 1                                             │
│ j=0: 0≠0? ❌ SKIP                                       │
│ j=1: 0≠1? ✅ product = 1 × 3 = 3                        │
│ j=2: 0≠2? ✅ product = 3 × 3 = 9                        │
│ j=3: 0≠3? ✅ product = 9 × 1 = 9                        │
│ Result: 9 ✅                                            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ i=1 (nilai 3)                                           │
├─────────────────────────────────────────────────────────┤
│ product = 1                                             │
│ j=0: 1≠0? ✅ product = 1 × 1 = 1                        │
│ j=1: 1≠1? ❌ SKIP (posisi sama)                         │
│ j=2: 1≠2? ✅ product = 1 × 3 = 3  ← Tetap kalikan!      │
│ j=3: 1≠3? ✅ product = 3 × 1 = 3                        │
│ Result: 3 ✅                                            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ i=2 (nilai 3)                                           │
├─────────────────────────────────────────────────────────┤
│ product = 1                                             │
│ j=0: 2≠0? ✅ product = 1 × 1 = 1                        │
│ j=1: 2≠1? ✅ product = 1 × 3 = 3  ← Tetap kalikan!      │
│ j=2: 2≠2? ❌ SKIP (posisi sama)                         │
│ j=3: 2≠3? ✅ product = 3 × 1 = 3                        │
│ Result: 3 ✅                                            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ i=3 (nilai 1)                                           │
├─────────────────────────────────────────────────────────┤
│ product = 1                                             │
│ j=0: 3≠0? ✅ product = 1 × 1 = 1                        │
│ j=1: 3≠1? ✅ product = 1 × 3 = 3                        │
│ j=2: 3≠2? ✅ product = 3 × 3 = 9                        │
│ j=3: 3≠3? ❌ SKIP                                       │
│ Result: 9 ✅                                            │
└─────────────────────────────────────────────────────────┘

FINAL OUTPUT: [9, 3, 3, 9] ✅
```

> **✨ PERHATIKAN**  
> Meskipun ada nilai 3 yang duplikat, keduanya **tetap dikalikan** karena posisinya berbeda!

---

## ⏱️ Analisis Kompleksitas

### **Time Complexity: O(n²)**

```
Outer loop: n iterasi
Inner loop: n iterasi untuk setiap outer

Total operasi: n × n = n²
```

**Contoh konkret:**

```
Array 10 elemen   → 10 × 10   = 100 operasi
Array 100 elemen  → 100 × 100 = 10,000 operasi
Array 1000 elemen → 1000 × 1000 = 1,000,000 operasi 😰
```

**Visualisasi pertumbuhan:**

```
n     | Operasi  | Growth
------|----------|--------
10    | 100      | 
100   | 10,000   | 100x
1000  | 1,000,000| 10,000x 🐌
```

> **⚠️ PERHATIAN**  
> O(n²) **tidak scalable** untuk array besar! Ini akan sangat lambat.

---

### **Space Complexity: O(n)**

```
result array: n elemen → O(n)
product variable: 1 variable → O(1)

Total: O(n)
```

Space complexity masih baik karena kita hanya menyimpan array hasil.

---

## 🧪 Test dengan Semua Cases

```javascript
// Basic cases
console.log(uniqueProduct([2, 4, 6]))
// Output: [24, 12, 8] ✅

console.log(uniqueProduct([1, 2, 3, 4, 5]))
// Output: [120, 60, 40, 30, 24] ✅

// Duplikat
console.log(uniqueProduct([1, 3, 3, 1]))
// Output: [9, 3, 3, 9] ✅

console.log(uniqueProduct([2, 1, 8, 10, 2]))
// Output: [160, 320, 40, 32, 160] ✅

// Dengan zero
console.log(uniqueProduct([2, 0, 4]))
// Output: [0, 8, 0] ✅

console.log(uniqueProduct([2, 0, 0, 4]))
// Output: [0, 0, 0, 0] ✅

// Negatif
console.log(uniqueProduct([-2, 3, -4]))
// Output: [-12, 8, -6] ✅
```

**Semua test case PASSED!** 🎉

---

## 💪 Kelebihan & Kekurangan

### **✅ Kelebihan:**

- **Mudah dipahami** - logika straightforward
- **Mudah di-debug** - bisa trace step by step
- **Tidak butuh math trick** - pure iterasi
- **Handle semua edge case** - zero, duplikat, negatif (automatic!)
- **Cocok untuk belajar** - fundamental algorithm

---

### **❌ Kekurangan:**

- **Lambat untuk array besar** - O(n²) tidak efisien
- **Tidak optimal** - ada solusi O(n)
- **Boros operasi** - mengulang perhitungan yang sama

---

## 🔍 Kapan Menggunakan Solusi Ini?

### **✅ Gunakan saat:**

- 📚 **Belajar algoritma** - ini solusi pertama yang harus dipahami
- 🎯 **Interview tahap awal** - untuk menunjukkan kamu bisa solve problem
- 📊 **Array kecil** - untuk n < 100, perbedaan performa tidak signifikan
- 🐛 **Debugging** - lebih mudah di-trace dibanding solusi complex

---

### **❌ Hindari saat:**

- 🚀 **Production code** - gunakan solusi O(n)
- 📈 **Array besar** - performance issue untuk n > 1000
- ⏱️ **Time critical** - butuh solusi lebih cepat
- 💼 **Interview lanjutan** - interviewer expect optimasi

---

## 🎯 Perbandingan: Nilai vs Index

| Aspek | Bandingkan NILAI | Bandingkan INDEX |
|-------|------------------|------------------|
| **Kondisi** | `currentNumber !== arr[j]` | `i !== j` |
| **Hasil untuk [1,3,3,1]** | ❌ [9, 1, 1, 9] | ✅ [9, 3, 3, 9] |
| **Handle duplikat** | ❌ Salah | ✅ Benar |
| **Logic** | Skip elemen dengan nilai sama | Skip elemen di posisi sama |
| **Kesimpulan** | 🚫 JANGAN PAKAI | ✅ GUNAKAN INI |

---

## 🧠 Quick Quiz

<details>
<summary><strong>❓ Quiz 1:</strong> Berapa kali inner loop dijalankan untuk array dengan 5 elemen?</summary>

**Jawaban:** 25 kali (5 × 5)

**Penjelasan:**
- Outer loop: 5 iterasi
- Inner loop: 5 iterasi per outer loop
- Total: 5 × 5 = 25 iterasi

</details>

<details>
<summary><strong>❓ Quiz 2:</strong> Kenapa <code>product</code> di-reset jadi 1 di setiap iterasi outer loop?</summary>

**Jawaban:** Karena setiap posisi butuh perhitungan perkalian yang **independen**.

**Penjelasan:**
Jika tidak di-reset, hasil perkalian dari posisi sebelumnya akan ter-carry over dan membuat hasil salah.

Contoh tanpa reset:
```javascript
// SALAH!
let product = 1
for (let i = 0; i < arr.length; i++) {
  // product tidak di-reset
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) product *= arr[j]
  }
  result.push(product)
}
// Hasil akan salah karena akumulasi terus
```

</details>

<details>
<summary><strong>❓ Quiz 3:</strong> Apa yang terjadi jika kita pakai <code>i != j</code> (double equals) instead of <code>i !== j</code>?</summary>

**Jawaban:** Masih bekerja dengan benar untuk kasus ini.

**Penjelasan:**
Karena i dan j adalah **number**, `!=` dan `!==` akan menghasilkan output yang sama. Namun best practice tetap gunakan `!==` (strict inequality) untuk menghindari type coercion yang tidak diinginkan.

```javascript
0 != 0   // false
0 !== 0  // false (sama)

0 != "0"  // false (type coercion!)
0 !== "0" // true (strict, lebih aman)
```

</details>

---

## 📚 Code Variations

### **Variasi 1: Dengan Komentar Detail**

```javascript
function uniqueProduct(arr) {
  const result = []

  // Loop untuk setiap posisi target
  for (let i = 0; i < arr.length; i++) {
    let product = 1
    
    // Loop untuk mengalikan semua elemen lain
    for (let j = 0; j < arr.length; j++) {
      // Skip jika posisi sama
      if (i !== j) {
        product *= arr[j]
      }
    }
    
    // Simpan hasil untuk posisi ini
    result.push(product)
  }

  return result
}
```

---

### **Variasi 2: Dengan Early Continue**

```javascript
function uniqueProduct(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    let product = 1
    
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue  // Skip dan lanjut ke iterasi berikutnya
      product *= arr[j]
    }
    
    result.push(product)
  }

  return result
}
```

> **💡 PRO TIP**  
> Kedua variasi ini **equivalent**, pilih yang menurut kamu lebih readable.

---

## ✅ Key Takeaways

Setelah membaca Part 2, kamu sekarang paham:

- ✅ **Nested loop approach** untuk solve problem
- ✅ **Bug kritis:** Jangan bandingkan nilai, bandingkan **index**!
- ✅ **Time complexity O(n²)** - lambat tapi straightforward
- ✅ **Space complexity O(n)** - hanya array hasil
- ✅ **Handle semua edge case** dengan natural
- ✅ **Kapan pakai** dan **kapan hindari** solusi ini

---

## 🎯 Next Challenge

> **🚀 Bisakah kita solve problem ini dalam O(n) time?**

Solusi nested loop sudah benar, tapi **tidak optimal**. Di Part 3, kita akan belajar:
- ⚡ Optimasi ke O(n) dengan **mathematical trick**
- 🎨 Visualisasi yang lebih detail
- 🧠 Handle edge case zero dengan **elegant**

---

## 🏅 Achievement Unlocked!

**🎖️ Nested Loop Master**  
Kamu berhasil memahami dan implement solusi nested loop dengan benar!

**Progress:** [▓▓▓▓░░░] 28% (2/7 parts)

---

<div align="center">

**⚡ Siap untuk optimasi? Part 3 menanti! ⚡**

</div>
