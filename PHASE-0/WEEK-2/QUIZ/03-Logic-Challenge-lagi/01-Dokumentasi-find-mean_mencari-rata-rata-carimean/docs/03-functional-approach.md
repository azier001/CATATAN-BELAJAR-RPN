# 📄 Part 3: Functional Approach

![Part](https://img.shields.io/badge/Part-3%20of%207-blue?style=flat-square)
![Topic](https://img.shields.io/badge/Topic-Functional-purple?style=flat-square)

> Beralih ke functional programming dengan reduce(), optimasi dari kesalahan, dan memahami efficiency!

---

## 🔄 Quick Recap

<details>
<summary>📌 Klik untuk lihat ringkasan Part 1-2</summary>

**Part 1 - Foundation:**
- Mean = jumlah semua ÷ banyak data
- Formula: Σ(xi) / n
- Problem: Buat fungsi calculateMean() yang return hasil pembulatan

**Part 2 - Imperative Approach:**
- Kode 1: For...of loop ✅
- Kesalahan #1: `totalSum` (redundant naming) ❌
- Perbaikan: Pakai `sum` saja ✅
- Complexity: O(n) time, O(1) space
- Best for: Learning & clarity

</details>

---

## 🎯 Apa yang Akan Dipelajari di Part Ini

Di Part 3 ini kita akan:
- ✅ Beralih dari **imperative** ke **functional** programming
- ✅ Memahami method `reduce()` secara mendalam
- ✅ Belajar dari **kesalahan #2**: pembagian di dalam reduce (inefficient)
- ✅ Optimasi untuk **better performance**
- ✅ Memahami **kapan pakai functional approach**
- ✅ Perbandingan dengan pendekatan imperative

---

## ❌ STOP! Kesalahan #2 yang Pernah Dibuat

Sebelum lihat kode yang benar, mari kita lihat **kesalahan yang pernah dibuat** terlebih dahulu!

### **Kesalahan: Pembagian di Dalam Reduce**

**Kode yang KURANG EFISIEN:**

```javascript
const calculateMean = (numbers) => {
  const mean = numbers.reduce((acc, crr) => acc + crr / numbers.length, 0)
  // ❌ INEFFICIENT! Pembagian dilakukan di SETIAP iterasi
  
  return Math.round(mean)
}
```

---

### **🔧 Apa yang Salah?**

**1. Pembagian Berulang yang Tidak Perlu**

Mari kita trace dengan contoh `[1, 2, 3, 4, 5]`:

```javascript
// numbers.length = 5

// Iterasi 1:
acc = 0
crr = 1
result = 0 + (1 / 5) = 0 + 0.2 = 0.2
         ^^^^^^ Pembagian ke-1

// Iterasi 2:
acc = 0.2
crr = 2
result = 0.2 + (2 / 5) = 0.2 + 0.4 = 0.6
           ^^^^^^ Pembagian ke-2

// Iterasi 3:
acc = 0.6
crr = 3
result = 0.6 + (3 / 5) = 0.6 + 0.6 = 1.2
           ^^^^^^ Pembagian ke-3

// Iterasi 4:
acc = 1.2
crr = 4
result = 1.2 + (4 / 5) = 1.2 + 0.8 = 2.0
           ^^^^^^ Pembagian ke-4

// Iterasi 5:
acc = 2.0
crr = 5
result = 2.0 + (5 / 5) = 2.0 + 1.0 = 3.0
           ^^^^^^ Pembagian ke-5

// Total pembagian: 5 kali! ❌
```

**Masalahnya:**
- Pembagian dilakukan **5 kali** (sebanyak elemen array)
- Padahal `numbers.length` nilainya **tetap sama** setiap iterasi
- Operasi pembagian **lebih lambat** dari penjumlahan
- **Waste of computation**!

---

### **📊 Visualisasi Masalah**

```
KODE YANG KURANG EFISIEN:
┌──────────────────────────────────────┐
│  Array: [1, 2, 3, 4, 5]              │
│  length = 5                          │
└────────────┬─────────────────────────┘
             │
    ┌────────▼────────┐
    │  Iterasi 1      │
    │  1 ÷ 5 = 0.2    │  ← Pembagian #1
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  Iterasi 2      │
    │  2 ÷ 5 = 0.4    │  ← Pembagian #2
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  Iterasi 3      │
    │  3 ÷ 5 = 0.6    │  ← Pembagian #3
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  Iterasi 4      │
    │  4 ÷ 5 = 0.8    │  ← Pembagian #4
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  Iterasi 5      │
    │  5 ÷ 5 = 1.0    │  ← Pembagian #5
    └────────┬────────┘
             │
        Total: 5 operasi pembagian ❌
```

---

### **💡 Analogi untuk Pemahaman**

Bayangkan kamu dan 4 teman (total 5 orang) patungan beli 5 pizza. Setiap pizza harganya beda-beda.

**CARA YANG KURANG EFISIEN** (seperti kode di atas):
1. Pizza 1 (Rp 50.000): Langsung bagi 5 = Rp 10.000 per orang
2. Pizza 2 (Rp 60.000): Langsung bagi 5 = Rp 12.000 per orang
3. Pizza 3 (Rp 40.000): Langsung bagi 5 = Rp 8.000 per orang
4. Pizza 4 (Rp 70.000): Langsung bagi 5 = Rp 14.000 per orang
5. Pizza 5 (Rp 80.000): Langsung bagi 5 = Rp 16.000 per orang

**Total per orang:** 10.000 + 12.000 + 8.000 + 14.000 + 16.000 = Rp 60.000

Kamu **ngebagi 5 kali** - capek kan? Apalagi kalau pakai kalkulator!

**CARA YANG EFISIEN** (yang seharusnya):
1. Total dulu semua pizza: 50k + 60k + 40k + 70k + 80k = **Rp 300.000**
2. Baru bagi sekali: 300.000 ÷ 5 = **Rp 60.000**

Hasilnya **sama**, tapi cuma **bagi 1 kali**! Lebih efisien!

---

### **⚡ Dampak Performance**

Untuk array kecil (5-10 elemen), perbedaannya tidak terasa. Tapi untuk **array besar**:

```
Array 1,000 elemen:
- Cara inefficient: 1,000 pembagian ❌
- Cara efficient: 1 pembagian ✅
- Bedanya: 999 operasi yang bisa dihindari!

Array 1,000,000 elemen:
- Cara inefficient: 1,000,000 pembagian ❌
- Cara efficient: 1 pembagian ✅
- Bedanya: Signifikan untuk performance!
```

**Operasi pembagian lebih lambat daripada penjumlahan**, jadi ini benar-benar matter untuk data besar!

---

## 💻 Kode 2: Reduce (Versi OPTIMIZED - Benar)

### **✅ Implementasi yang Efisien**

```javascript
const calculateMean = (numbers) => {
  const sum = numbers.reduce((acc, val) => acc + val, 0)
  // ✅ EFISIEN! Sum dulu, baru bagi 1x di akhir
  
  const mean = sum / numbers.length
  return Math.round(mean)
}
```

### **Test & Hasil**

```javascript
console.log(calculateMean([1, 2, 3, 4, 5])); // 3 ✅
console.log(calculateMean([3, 5, 7, 5, 3])); // 5 ✅
console.log(calculateMean([6, 5, 4, 7, 3])); // 5 ✅
console.log(calculateMean([1, 3, 3]));       // 2 ✅
console.log(calculateMean([7, 7, 7, 7, 7])); // 7 ✅
```

**Semua test case berhasil!** 🎉

---

## 📝 Breakdown Line-by-Line

### **Baris 1: Arrow Function**

```javascript
const calculateMean = (numbers) => {
```

**Apa yang terjadi:**
- Deklarasi function menggunakan **arrow function** syntax
- Assign ke constant `calculateMean`
- Parameter: `numbers` (array)

**Kenapa pakai arrow function?**
- ✅ **Modern**: ES6+ feature yang clean
- ✅ **Concise**: Syntax lebih ringkas
- ✅ **Consistent**: Cocok dengan functional programming style
- ✅ **Trendy**: Standar di modern JavaScript

**Arrow function vs Function declaration:**
```javascript
// Arrow function (Part 3)
const calculateMean = (numbers) => { ... }

// Function declaration (Part 2)
function calculateMean(numbers) { ... }
```

Keduanya valid! Pilihan style saja.

---

### **Baris 2: Reduce untuk Sum**

```javascript
  const sum = numbers.reduce((acc, val) => acc + val, 0)
```

**Apa yang terjadi:**
- Pakai method `reduce()` untuk menjumlahkan semua elemen
- Accumulator (`acc`) mulai dari `0`
- Setiap iterasi: tambahkan `val` ke `acc`
- Hasil akhir disimpan di `sum`

**Kenapa `reduce()`?**
- ✅ **Functional**: Method untuk functional programming
- ✅ **Expressive**: Jelas mau "reduce array jadi single value"
- ✅ **Powerful**: Bisa untuk berbagai operasi (sum, product, dll)
- ✅ **One-liner**: Bisa ringkas tanpa loop eksplisit

---

### **🔍 Deep Dive: Apa Itu Reduce?**

**`reduce()`** adalah method array yang **"mengurangi"** array menjadi **single value**.

**Syntax:**
```javascript
array.reduce(callback(accumulator, currentValue), initialValue)
```

**Parameter:**
- `callback`: Function yang dipanggil setiap iterasi
  - `accumulator`: Nilai yang di-akumulasi (hasil sementara)
  - `currentValue`: Elemen array saat ini
- `initialValue`: Nilai awal accumulator

**Cara kerja:**
```
Iterasi 1: accumulator = initialValue, currentValue = array[0]
Iterasi 2: accumulator = hasil iterasi 1, currentValue = array[1]
Iterasi 3: accumulator = hasil iterasi 2, currentValue = array[2]
...
Return: accumulator terakhir
```

---

### **📊 Visualisasi Reduce (Cara yang Benar)**

```javascript
[1, 2, 3, 4, 5].reduce((acc, val) => acc + val, 0)
```

**Trace execution:**

```
Initial: acc = 0 (dari initialValue)

┌───────────────────────────────────┐
│  Iterasi 1:                       │
│  acc = 0, val = 1                 │
│  return 0 + 1 = 1                 │
└────────────┬──────────────────────┘
             │
┌────────────▼──────────────────────┐
│  Iterasi 2:                       │
│  acc = 1, val = 2                 │
│  return 1 + 2 = 3                 │
└────────────┬──────────────────────┘
             │
┌────────────▼──────────────────────┐
│  Iterasi 3:                       │
│  acc = 3, val = 3                 │
│  return 3 + 3 = 6                 │
└────────────┬──────────────────────┘
             │
┌────────────▼──────────────────────┐
│  Iterasi 4:                       │
│  acc = 6, val = 4                 │
│  return 6 + 4 = 10                │
└────────────┬──────────────────────┘
             │
┌────────────▼──────────────────────┐
│  Iterasi 5:                       │
│  acc = 10, val = 5                │
│  return 10 + 5 = 15               │
└────────────┬──────────────────────┘
             │
        Final: sum = 15

Total operasi: 5 penjumlahan saja ✅
Pembagian: 0 kali di dalam reduce ✅
```

**Setelah reduce selesai:**
```javascript
sum = 15
mean = 15 / 5 = 3  // ← Pembagian cuma 1 kali di sini!
```

**Total pembagian: 1 kali!** ✅ Sangat efisien!

---

### **Baris 3: Hitung Mean**

```javascript
  const mean = sum / numbers.length
```

**Apa yang terjadi:**
- Bagi `sum` dengan panjang array
- **Pembagian hanya 1 kali** di sini
- Simpan di variabel `mean`

**Kenapa dipisah dari reduce?**
- ✅ **Efficient**: Pembagian cuma 1x, bukan n kali
- ✅ **Clear**: Jelas ada step "hitung mean"
- ✅ **Debuggable**: Bisa log `sum` dan `mean` terpisah

---

### **Baris 4: Return Pembulatan**

```javascript
  return Math.round(mean)
```

**Sama seperti Part 2** - bulatkan dan return hasilnya.

---

## 🎨 Visualisasi Flow Lengkap

```
KODE YANG EFISIEN:
┌──────────────────────────────────────┐
│  INPUT: [1, 2, 3, 4, 5]              │
└────────────┬─────────────────────────┘
             │
    ┌────────▼────────┐
    │  reduce() LOOP  │
    │  Hanya TAMBAH   │  ← Tidak ada pembagian!
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  Iterasi 1      │
    │  0 + 1 = 1      │
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  Iterasi 2      │
    │  1 + 2 = 3      │
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  Iterasi 3      │
    │  3 + 3 = 6      │
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  Iterasi 4      │
    │  6 + 4 = 10     │
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  Iterasi 5      │
    │  10 + 5 = 15    │
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  sum = 15       │
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  mean = 15 ÷ 5  │  ← Pembagian CUMA 1 KALI!
    │  mean = 3       │
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  round(3) = 3   │
    └────────┬────────┘
             │
             ▼
    ┌────────────────┐
    │  OUTPUT: 3     │
    └────────────────┘

Total pembagian: 1 kali saja! ✅
```

---

## 💡 Analogi untuk Pemahaman

Bayangkan kamu belanja di supermarket dengan 10 item. Kasir mau hitung total harga.

**CARA KURANG EFISIEN** (seperti pembagian di dalam reduce):
```
Item 1: Rp 10.000 → Kasir: "10.000 ÷ 10 = 1.000 per item"
Item 2: Rp 15.000 → Kasir: "15.000 ÷ 10 = 1.500 per item"
Item 3: Rp 20.000 → Kasir: "20.000 ÷ 10 = 2.000 per item"
...terus sampai item 10

Kasir cape ngebagi terus! ❌
```

**CARA EFISIEN** (seperti reduce yang benar):
```
Item 1: Rp 10.000 → Total: 10.000
Item 2: Rp 15.000 → Total: 25.000
Item 3: Rp 20.000 → Total: 45.000
...terus sampai item 10

Total: Rp 150.000
Rata-rata per item: 150.000 ÷ 10 = 15.000 ✅

Bagi cuma sekali di akhir!
```

Masuk akal kan? Yang kedua jelas lebih efisien!

---

## 📊 Perbandingan: Imperative vs Functional

### **Side-by-Side Code**

```javascript
// IMPERATIVE (Part 2)
function calculateMean(numbers) {
  let sum = 0
  for (const currentNumber of numbers) {
    sum += currentNumber
  }
  const mean = sum / numbers.length
  return Math.round(mean)
}

// FUNCTIONAL (Part 3)
const calculateMean = (numbers) => {
  const sum = numbers.reduce((acc, val) => acc + val, 0)
  const mean = sum / numbers.length
  return Math.round(mean)
}
```

### **Perbandingan Detail**

| Aspek | Imperative (Part 2) | Functional (Part 3) |
|-------|---------------------|---------------------|
| **Paradigm** | Imperative | Functional |
| **Focus** | HOW (cara melakukan) | WHAT (apa yang mau dilakukan) |
| **Loop** | Explicit (for...of) | Implicit (reduce) |
| **Lines** | 7 lines | 4 lines |
| **Mutable** | Yes (`sum` berubah) | Less (hanya di reduce internal) |
| **Readability** | Lebih jelas untuk pemula | Butuh paham reduce |
| **Modern** | Traditional | Modern JS |
| **Performance** | Sama (O(n)) | Sama (O(n)) |

---

## 📐 Complexity Analysis

### **Time Complexity: O(n)**

```
n = panjang array

Reduce loop n kali
Setiap iterasi: O(1) operation
Total: O(n)
```

**Sama dengan imperative approach!** Perbedaan efficiency-nya bukan di Big-O, tapi di **constant factor** (jumlah operasi pembagian).

---

### **Space Complexity: O(1)**

```
Variabel:
- sum: 1 number
- mean: 1 number
- accumulator internal reduce: 1 number

Total: constant space
```

**Juga sama!** Tidak ada perbedaan signifikan di space.

---

## ✨ Karakteristik Pendekatan Ini

### **👍 Kelebihan**

```
┌─────────────────────────────────────────┐
│  ✅ KELEBIHAN                           │
├─────────────────────────────────────────┤
│  ✅ Concise (lebih ringkas)             │
│  ✅ Functional programming style        │
│  ✅ Modern & trendy                     │
│  ✅ Declarative (fokus WHAT not HOW)    │
│  ✅ Less mutable state                  │
│  ✅ Chainable dengan method lain        │
└─────────────────────────────────────────┘
```

**Detail:**
- **Expressive**: Jelas intent-nya "reduce to sum"
- **Composable**: Bisa chain dengan `.map()`, `.filter()`, dll
- **FP-friendly**: Cocok untuk functional programming lovers
- **Industry standard**: Banyak dipakai di modern codebases

---

### **👎 Kekurangan**

```
┌─────────────────────────────────────────┐
│  ⚠️ KEKURANGAN                          │
├─────────────────────────────────────────┤
│  ⚠️ Butuh paham reduce (learning curve) │
│  ⚠️ Kurang eksplisit untuk pemula       │
│  ⚠️ Debugging sedikit lebih tricky      │
│  ⚠️ Bisa jadi "too clever" kalau overuse│
└─────────────────────────────────────────┘
```

**Detail:**
- **Learning curve**: Harus paham konsep reduce dulu
- **Less obvious**: Tidak sejelas for loop untuk pemula
- **Debugging**: Tidak bisa log di tengah-tengah reduce dengan mudah
- **Abstraction**: Terlalu abstrak bisa jadi code smell

---

### **🎯 Kapan Menggunakan Pendekatan Ini?**

**GUNAKAN ketika:**
- 🚀 Codebase modern yang pakai FP style
- 💼 Team yang familiar dengan reduce/map/filter
- 🎨 Mau kode yang concise & expressive
- 📦 Sudah ada banyak method chaining di codebase
- ⚡ Mau terlihat "pro" di interview modern company

**JANGAN GUNAKAN ketika:**
- 👶 Team mostly pemula (prefer clarity)
- 📚 Kode untuk pembelajaran algoritma
- 🐛 Butuh debugging yang very explicit
- 📝 Dokumentasi/tutorial untuk beginner
- 🤝 Team tidak familiar dengan FP concepts

---

## 💭 Imperative vs Functional: Filosofi

### **Imperative (Part 2)**

```
"Aku mau kasih tau komputer BAGAIMANA melakukan sesuatu"

Langkah 1: Buat wadah sum
Langkah 2: Loop setiap angka
Langkah 3: Tambahkan ke sum
Langkah 4: Bagi dengan length
Langkah 5: Bulatkan
```

**Fokus:** Step-by-step instructions (HOW)

---

### **Functional (Part 3)**

```
"Aku mau kasih tau komputer APA yang aku mau"

Reduce array jadi sum → Bagi jadi mean → Bulatkan
```

**Fokus:** Transformations & outcomes (WHAT)

---

## 🔍 Deep Dive: Reduce untuk Operasi Lain

Reduce itu powerful! Bukan cuma untuk sum. Contoh lain:

<details>
<summary>🎨 Klik untuk lihat contoh reduce lainnya</summary>

### **1. Product (Perkalian Semua)**
```javascript
const product = [1, 2, 3, 4, 5].reduce((acc, val) => acc * val, 1)
// 1 * 1 * 2 * 3 * 4 * 5 = 120
```

### **2. Max Value**
```javascript
const max = [5, 2, 8, 1, 9].reduce((acc, val) => Math.max(acc, val))
// 9
```

### **3. Object dari Array**
```javascript
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1
  return acc
}, {})
// { apple: 3, banana: 2, orange: 1 }
```

### **4. Flatten Array**
```javascript
const nested = [[1, 2], [3, 4], [5]]
const flat = nested.reduce((acc, arr) => acc.concat(arr), [])
// [1, 2, 3, 4, 5]
```

**Reduce = Swiss army knife of array methods!** 🔪

</details>

---

## 💡 Pelajaran dari Kesalahan #2

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 🎓 OPTIMIZATION LESSONS               ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ✅ Hindari operasi berulang yang sama ┃
┃ ✅ Hoist constant values keluar loop  ┃
┃ ✅ Sum first, divide once             ┃
┃ ✅ Operasi lebih lambat = do less     ┃
┃ ✅ Think about scalability            ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

**Prinsip umum:**
- Jangan lakukan operasi mahal (division, multiplication) berulang kali jika bisa dilakukan sekali
- Constant values (seperti `length`) bisa di-extract keluar loop
- Untuk data kecil mungkin tidak terasa, tapi untuk big data = significant!

---

## ✅ Ringkasan Part 3

**Apa yang Sudah Dipelajari:**

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 💡 KEY TAKEAWAYS                      ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ✅ Functional approach dengan reduce  ┃
┃ ✅ Kesalahan #2: division in reduce   ┃
┃ ✅ Optimasi: sum first, divide once   ┃
┃ ✅ Reduce = powerful array method     ┃
┃ ✅ Functional = WHAT, not HOW         ┃
┃ ✅ Modern & concise code style        ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

**Progress Series:**
```
[▓▓▓▓▓▓▓░░░] 42% (3/7 parts completed)
```

---

**Next up: Part 4 - Algorithm Deep Dive dengan Manual Count & Pseudocode! 🚀**
