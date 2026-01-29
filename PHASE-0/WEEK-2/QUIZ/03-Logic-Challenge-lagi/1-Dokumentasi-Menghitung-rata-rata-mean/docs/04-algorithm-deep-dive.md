# 📄 Part 4: Algorithm Deep Dive

![Part](https://img.shields.io/badge/Part-4%20of%207-blue?style=flat-square)
![Topic](https://img.shields.io/badge/Topic-Algorithm-red?style=flat-square)

> Menyelami algoritma dari dasar: pseudocode, manual counting, dan algorithm thinking untuk interview!

---

## 🎯 Apa yang Akan Dipelajari di Part Ini

Di Part 4 ini kita akan:
- ✅ Belajar **algorithm thinking** dari nol
- ✅ Menulis **pseudocode** sebelum coding
- ✅ Implementasi **manual counting** approach
- ✅ **Trace execution** super detail
- ✅ Memahami **kapan pakai pendekatan ini**
- ✅ Persiapan untuk **interview & ujian algoritma**

**Part ini PALING COCOK untuk:**
- 🎓 Belajar algoritma dari dasar
- 📝 Persiapan interview/ujian
- 🧠 Melatih algorithm thinking
- 📚 Memahami "kenapa" bukan cuma "gimana"

---

## 📐 Step 1: Pseudocode (Algorithm Design)

Sebelum coding, mari kita **design algoritma** dalam bentuk pseudocode. Ini adalah cara berpikir algoritma yang **language-agnostic** (tidak terikat bahasa programming tertentu).

### **Apa Itu Pseudocode?**

**Pseudocode** = kode palsu yang ditulis dalam bahasa natural (bukan syntax programming) tapi structured seperti kode.

**Tujuan:**
- ✅ Fokus ke **logic**, bukan syntax
- ✅ Bisa dibaca semua orang (programmer & non-programmer)
- ✅ Mudah diterjemahkan ke bahasa programming apapun
- ✅ Planning sebelum coding

---

### **💡 Pseudocode Kita**

```
ALGORITMA calculateMean

INPUT: 
  numbers (array of integers/floats)

INISIALISASI:
  sum ← 0
  count ← 0

PROSES:
  UNTUK SETIAP angka DALAM numbers LAKUKAN:
    sum ← sum + angka
    count ← count + 1
  AKHIR UNTUK

HITUNG MEAN:
  mean ← sum ÷ count

PEMBULATAN:
  result ← BULATKAN(mean)

OUTPUT:
  KEMBALIKAN result

AKHIR ALGORITMA
```

---

### **🔍 Breakdown Pseudocode**

**Bagian 1: INPUT**
```
INPUT: numbers (array of integers/floats)
```
- Menerima array angka
- Bisa integer (bulat) atau float (desimal)

**Bagian 2: INISIALISASI**
```
sum ← 0
count ← 0
```
- `sum`: Untuk menyimpan total jumlah
- `count`: Untuk menghitung berapa banyak angka
- Keduanya mulai dari 0

**Bagian 3: PROSES (Loop)**
```
UNTUK SETIAP angka DALAM numbers LAKUKAN:
  sum ← sum + angka
  count ← count + 1
AKHIR UNTUK
```
- Loop setiap elemen
- Tambahkan elemen ke `sum`
- Increment `count` (tambah 1)

**Bagian 4: HITUNG MEAN**
```
mean ← sum ÷ count
```
- Bagi total dengan jumlah data

**Bagian 5: PEMBULATAN & OUTPUT**
```
result ← BULATKAN(mean)
KEMBALIKAN result
```
- Bulatkan hasil
- Return sebagai output

---

## 💻 Step 2: Implementasi dari Pseudocode

Sekarang kita **translate** pseudocode ke JavaScript!

### **Kode 3: Manual Count**

```javascript
const calculateMean = (numbers) => {
  // INISIALISASI
  let sum = 0
  let count = 0
  
  // PROSES
  for (const currentNumber of numbers) {
    sum += currentNumber
    count++
  }
  
  // HITUNG MEAN
  const mean = sum / count
  
  // PEMBULATAN & OUTPUT
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

### **Baris 1-3: Inisialisasi**

```javascript
const calculateMean = (numbers) => {
  let sum = 0
  let count = 0
```

**Apa yang terjadi:**
- Buat variabel `sum` untuk total
- Buat variabel `count` untuk jumlah elemen
- Pakai `let` karena kedua nilai akan berubah

**Kenapa perlu `count` manual?**

Padahal kita bisa pakai `numbers.length` kan?

**Alasan:**
1. **Universal**: Approach ini bisa diterapkan di situasi di mana kita tidak punya `.length`
   - Misal: data stream (data datang satu-satu, tidak punya array lengkap)
   - Misal: linked list (tidak punya property length)
   - Misal: generator function

2. **Algorithm learning**: Melatih berpikir "bagaimana menghitung dari nol"
   - Tidak bergantung pada built-in property
   - Memahami konsep counting manual

3. **Interview-friendly**: Interviewer sering minta implement dari dasar
   - "Gimana kalau data tidak punya length?"
   - "Implementasikan tanpa menggunakan array method"

4. **Running average**: Bisa dimodifikasi untuk streaming data
   - Update mean setiap ada data baru
   - Tidak perlu simpan semua data

---

### **Baris 4-8: Loop & Akumulasi**

```javascript
  for (const currentNumber of numbers) {
    sum += currentNumber
    count++
  }
```

**Apa yang terjadi:**
- Loop setiap elemen
- **Dua operasi** di setiap iterasi:
  1. `sum += currentNumber` → Akumulasi total
  2. `count++` → Hitung jumlah elemen

**Kenapa `count++` bukan `count += 1`?**
- `count++` adalah **shorthand** untuk `count = count + 1`
- `++` adalah **increment operator**
- Lebih concise dan standar untuk counting

**Variasi increment:**
```javascript
count++      // Post-increment (paling umum untuk counting)
++count      // Pre-increment (jarang untuk counting)
count += 1   // Explicit (lebih verbose)
count = count + 1  // Paling explicit (terlalu panjang)
```

Untuk simple counting, `count++` adalah **best practice**.

---

### **Baris 9-12: Hitung Mean & Return**

```javascript
  const mean = sum / count
  return Math.round(mean)
}
```

**Apa yang terjadi:**
- Bagi `sum` dengan `count` (bukan `numbers.length`)
- Bulatkan dan return

**Kenapa `sum / count` bukan `sum / numbers.length`?**

Karena kita sedang **melatih algorithm thinking**:
- Konsisten dengan pendekatan manual counting
- Tidak bergantung pada built-in property
- Lebih universal untuk berbagai data structure

Tapi di **production code**, pakai `numbers.length` lebih efisien (tidak perlu variable `count`).

---

## 🎨 Visualisasi Flow Lengkap

```
┌─────────────────────────────────────────┐
│  INPUT: [1, 2, 3, 4, 5]                 │
└────────────┬────────────────────────────┘
             │
    ┌────────▼────────┐
    │ INISIALISASI    │
    │  sum = 0        │
    │  count = 0      │
    └────────┬────────┘
             │
    ┌────────▼────────────────────────┐
    │  FOR LOOP STARTS                │
    └────────┬────────────────────────┘
             │
    ┌────────▼────────────────────────┐
    │  Iterasi 1                      │
    │  currentNumber = 1              │
    │  sum = 0 + 1 = 1                │
    │  count = 0 + 1 = 1              │
    │  State: {sum: 1, count: 1}      │
    └────────┬────────────────────────┘
             │
    ┌────────▼────────────────────────┐
    │  Iterasi 2                      │
    │  currentNumber = 2              │
    │  sum = 1 + 2 = 3                │
    │  count = 1 + 1 = 2              │
    │  State: {sum: 3, count: 2}      │
    └────────┬────────────────────────┘
             │
    ┌────────▼────────────────────────┐
    │  Iterasi 3                      │
    │  currentNumber = 3              │
    │  sum = 3 + 3 = 6                │
    │  count = 2 + 1 = 3              │
    │  State: {sum: 6, count: 3}      │
    └────────┬────────────────────────┘
             │
    ┌────────▼────────────────────────┐
    │  Iterasi 4                      │
    │  currentNumber = 4              │
    │  sum = 6 + 4 = 10               │
    │  count = 3 + 1 = 4              │
    │  State: {sum: 10, count: 4}     │
    └────────┬────────────────────────┘
             │
    ┌────────▼────────────────────────┐
    │  Iterasi 5                      │
    │  currentNumber = 5              │
    │  sum = 10 + 5 = 15              │
    │  count = 4 + 1 = 5              │
    │  State: {sum: 15, count: 5}     │
    └────────┬────────────────────────┘
             │
    ┌────────▼────────┐
    │  LOOP ENDS      │
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  HITUNG MEAN    │
    │  mean = 15 / 5  │
    │  mean = 3       │
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  PEMBULATAN     │
    │  round(3) = 3   │
    └────────┬────────┘
             │
             ▼
    ┌────────────────┐
    │  OUTPUT: 3     │
    └────────────────┘
```

---

## 🔍 Trace Execution: Super Detail

Mari kita trace dengan test case yang **butuh pembulatan**: `[3, 5, 7, 5, 3]`

### **Execution Table**

| Step | Action | currentNumber | sum | count | Notes |
|------|--------|---------------|-----|-------|-------|
| 0 | Init | - | 0 | 0 | Inisialisasi awal |
| 1 | Loop 1 | 3 | 3 | 1 | sum=0+3, count=0+1 |
| 2 | Loop 2 | 5 | 8 | 2 | sum=3+5, count=1+1 |
| 3 | Loop 3 | 7 | 15 | 3 | sum=8+7, count=2+1 |
| 4 | Loop 4 | 5 | 20 | 4 | sum=15+5, count=3+1 |
| 5 | Loop 5 | 3 | 23 | 5 | sum=20+3, count=4+1 |
| 6 | Calculate | - | 23 | 5 | mean = 23/5 = 4.6 |
| 7 | Round | - | 23 | 5 | round(4.6) = 5 |
| 8 | Return | - | 23 | 5 | Output: 5 ✅ |

---

### **Detail Trace Step-by-Step**

<details>
<summary>🔬 Klik untuk lihat trace super detail</summary>

```javascript
// Memanggil function
calculateMean([3, 5, 7, 5, 3])

// ===== INISIALISASI =====
let sum = 0
let count = 0
console.log('Init:', {sum, count})  // {sum: 0, count: 0}

// ===== LOOP DIMULAI =====
// numbers = [3, 5, 7, 5, 3]
// numbers.length = 5

// ----- ITERASI 1 -----
currentNumber = 3
sum = 0 + 3 = 3
count = 0 + 1 = 1
console.log('Iterasi 1:', {currentNumber, sum, count})
// {currentNumber: 3, sum: 3, count: 1}

// ----- ITERASI 2 -----
currentNumber = 5
sum = 3 + 5 = 8
count = 1 + 1 = 2
console.log('Iterasi 2:', {currentNumber, sum, count})
// {currentNumber: 5, sum: 8, count: 2}

// ----- ITERASI 3 -----
currentNumber = 7
sum = 8 + 7 = 15
count = 2 + 1 = 3
console.log('Iterasi 3:', {currentNumber, sum, count})
// {currentNumber: 7, sum: 15, count: 3}

// ----- ITERASI 4 -----
currentNumber = 5
sum = 15 + 5 = 20
count = 3 + 1 = 4
console.log('Iterasi 4:', {currentNumber, sum, count})
// {currentNumber: 5, sum: 20, count: 4}

// ----- ITERASI 5 -----
currentNumber = 3
sum = 20 + 3 = 23
count = 4 + 1 = 5
console.log('Iterasi 5:', {currentNumber, sum, count})
// {currentNumber: 3, sum: 23, count: 5}

// ===== LOOP SELESAI =====
console.log('Loop selesai:', {sum, count})
// {sum: 23, count: 5}

// ===== HITUNG MEAN =====
const mean = sum / count
console.log('Mean calculation:', {sum, count, mean})
// {sum: 23, count: 5, mean: 4.6}

// ===== PEMBULATAN =====
const result = Math.round(mean)
console.log('Rounding:', {mean, result})
// {mean: 4.6, result: 5}
// 4.6 → 5 (karena 0.6 > 0.5)

// ===== RETURN =====
return result  // 5 ✅
```

</details>

---

## 💡 Analogi untuk Pemahaman

Bayangkan kamu mau hitung **rata-rata nilai ulangan** di kelas, tapi **tidak punya daftar lengkap**. Nilai datang satu-satu dari murid yang lapor.

**Prosesnya:**

**Setup:**
- Siapkan 2 kertas kosong
- Kertas 1: Total nilai (sum)
- Kertas 2: Jumlah murid (count)
- Keduanya awalnya kosong (0)

**Murid mulai lapor nilai:**

1. **Andi lapor: "Nilai saya 80"**
   - Tulis di kertas 1: 0 + 80 = **80**
   - Tulis di kertas 2: 0 + 1 = **1 murid**

2. **Budi lapor: "Nilai saya 90"**
   - Tulis di kertas 1: 80 + 90 = **170**
   - Tulis di kertas 2: 1 + 1 = **2 murid**

3. **Cici lapor: "Nilai saya 75"**
   - Tulis di kertas 1: 170 + 75 = **245**
   - Tulis di kertas 2: 2 + 1 = **3 murid**

4. **Dedi lapor: "Nilai saya 85"**
   - Tulis di kertas 1: 245 + 85 = **330**
   - Tulis di kertas 2: 3 + 1 = **4 murid**

5. **Eka lapor: "Nilai saya 70"**
   - Tulis di kertas 1: 330 + 70 = **400**
   - Tulis di kertas 2: 4 + 1 = **5 murid**

**Semua sudah lapor. Hitung rata-rata:**
- Total nilai: 400
- Jumlah murid: 5
- Rata-rata: 400 ÷ 5 = **80**

**Ini exactly yang dilakukan kode kita!** Hanya saja murid = elemen array, dan nilai = angka dalam array.

---

## 📊 Perbandingan: Manual Count vs Built-in Length

### **Side-by-Side Code**

```javascript
// MANUAL COUNT (Part 4 - Algorithm Learning)
const calculateMean = (numbers) => {
  let sum = 0
  let count = 0  // ← Manual counting
  
  for (const currentNumber of numbers) {
    sum += currentNumber
    count++  // ← Increment manual
  }
  
  const mean = sum / count  // ← Pakai count
  return Math.round(mean)
}

// BUILT-IN LENGTH (Part 2 - Production)
const calculateMean = (numbers) => {
  let sum = 0
  
  for (const currentNumber of numbers) {
    sum += currentNumber
  }
  
  const mean = sum / numbers.length  // ← Pakai .length
  return Math.round(mean)
}
```

### **Perbandingan Detail**

| Aspek | Manual Count | Built-in Length |
|-------|--------------|-----------------|
| **Variables** | 2 (sum, count) | 1 (sum) |
| **Lines** | More | Less |
| **Universality** | High (any data) | Medium (array only) |
| **Learning value** | High | Medium |
| **Production** | Overkill | Better |
| **Interview** | Impressive | Standard |
| **Performance** | Minimal overhead | Slightly better |
| **Memory** | +1 variable | Less |

---

## 🎯 Kapan Menggunakan Manual Count?

### **GUNAKAN Manual Count ketika:**

**1. Learning & Education** 📚
```
✅ Sedang belajar algoritma
✅ Menulis tutorial
✅ Teaching fundamental concepts
✅ Understanding dari first principles
```

**2. Interview & Exams** 🎓
```
✅ Interviewer minta "from scratch"
✅ Ujian algoritma
✅ Coding challenge yang melarang built-in
✅ Menunjukkan algorithm thinking
```

**3. Non-Array Data Structures** 🔧
```
✅ Linked list (tidak punya .length)
✅ Stream/generator data
✅ Custom data structures
✅ Data yang datang bertahap
```

**4. Running/Streaming Average** ⚡
```
✅ Update mean setiap ada data baru
✅ Real-time calculation
✅ Memory-efficient (tidak simpan semua data)
✅ IoT/sensor data processing
```

---

### **JANGAN GUNAKAN Manual Count ketika:**

**1. Production Code dengan Array** 🚀
```
❌ Sudah punya .length yang reliable
❌ Code yang harus concise
❌ Team tidak expect overkill
❌ Performance-critical (every byte matters)
```

**2. Simple Operations** 📝
```
❌ Simple mean calculation dari array
❌ One-time calculation
❌ Tidak ada requirement khusus
❌ Kode untuk internal tools
```

---

## 🧠 Algorithm Thinking: Beyond Mean

Pendekatan manual counting ini adalah **fundamental pattern** yang bisa diterapkan ke berbagai masalah!

### **Pattern: Accumulation + Counting**

```
GENERAL PATTERN:
1. Initialize accumulator(s)
2. Initialize counter
3. Loop through data
   - Update accumulator
   - Update counter
4. Calculate result from accumulator & counter
```

### **Contoh Aplikasi Lain:**

**1. Weighted Average (Rata-rata Berbobot)**
```javascript
let weightedSum = 0
let totalWeight = 0

for (const item of items) {
  weightedSum += item.value * item.weight
  totalWeight += item.weight
}

const weightedAverage = weightedSum / totalWeight
```

**2. Moving Average (Rata-rata Bergerak)**
```javascript
let sum = 0
let count = 0

for (const value of dataStream) {
  sum += value
  count++
  
  if (count > windowSize) {
    sum -= oldestValue
    count--
  }
  
  const movingAvg = sum / count
}
```

**3. Standard Deviation (Deviasi Standar)**
```javascript
// Pass 1: Calculate mean
let sum = 0
let count = 0

for (const value of data) {
  sum += value
  count++
}
const mean = sum / count

// Pass 2: Calculate variance
let squaredDiffSum = 0

for (const value of data) {
  squaredDiffSum += Math.pow(value - mean, 2)
}

const variance = squaredDiffSum / count
const stdDev = Math.sqrt(variance)
```

**Pattern yang sama, aplikasi berbeda!**

---

## 🎓 Interview Tips

Kalau ditanya di interview: **"Hitung mean dari array"**

### **Strategy:**

**1. Klarifikasi Requirements**
```
Tanya:
- Boleh pakai array methods?
- Boleh pakai .length?
- Data selalu valid?
- Perlu handle edge cases?
```

**2. Start Simple, Then Optimize**
```
Step 1: Manual count (tunjukkan algorithm thinking)
Step 2: "Kalau boleh pakai .length, bisa lebih concise"
Step 3: "Kalau perlu production-ready, tambah validation"
```

**3. Diskusikan Trade-offs**
```
"Manual count lebih universal tapi verbose"
"Built-in .length lebih concise untuk array"
"Reduce lebih functional tapi less explicit"
```

**4. Tunjukkan Flexibility**
```
"Saya bisa implement dengan 4 cara berbeda,
 tergantung requirement dan preferensi team"
```

**Interviewer SUKA candidate yang bisa:**
- ✅ Explain trade-offs
- ✅ Multiple approaches
- ✅ Adapt to requirements
- ✅ Think beyond "just working code"

---

## 📐 Complexity Analysis

### **Time Complexity: O(n)**

```
n = panjang array

Loop: n iterations
Each iteration: O(1) operations
  - Add to sum: O(1)
  - Increment count: O(1)
Total: O(n)
```

**Sama dengan semua pendekatan lain!**

---

### **Space Complexity: O(1)**

```
Variables:
- sum: 1 number
- count: 1 number
- currentNumber: 1 number (temp)
- mean: 1 number

Total: constant space, tidak bergantung n
```

**Catatan:** Space complexity masih O(1) meskipun ada **1 variable extra** (`count`) dibanding Part 2.

---

## ✅ Ringkasan Part 4

**Apa yang Sudah Dipelajari:**

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 💡 KEY TAKEAWAYS                      ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ✅ Pseudocode untuk algorithm design  ┃
┃ ✅ Manual counting approach           ┃
┃ ✅ Algorithm thinking dari dasar      ┃
┃ ✅ Best for: learning & interviews    ┃
┃ ✅ Pattern: accumulation + counting   ┃
┃ ✅ Universal untuk berbagai data type ┃
┃ ✅ Super detailed trace execution     ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

**Progress Series:**
```
[▓▓▓▓▓▓▓▓▓░] 57% (4/7 parts completed)
```

---

**Next up: Part 5 - Production Ready dengan Validation & Error Handling! 🚀**
