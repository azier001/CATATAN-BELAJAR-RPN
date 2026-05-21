# 📄 Part 2: Imperative Approach

![Part](https://img.shields.io/badge/Part-2%20of%207-blue?style=flat-square)
![Topic](https://img.shields.io/badge/Topic-Imperative-orange?style=flat-square)

> Implementasi pertama dengan for...of loop & pembelajaran dari kesalahan naming convention!

---

## 🔄 Quick Recap

<details>
<summary>📌 Klik untuk lihat ringkasan Part 1</summary>

**Part 1 - Foundation:**
- Mean = rata-rata = jumlah semua ÷ banyak data
- Formula: Σ(xi) / n
- Menggunakan `Math.round()` untuk pembulatan
- Problem: Buat fungsi yang menghitung mean dari array
- Test cases: 5 buah dengan berbagai input

</details>

---

## 🎯 Apa yang Akan Dipelajari di Part Ini

Di Part 2 ini kita akan:
- ✅ Membuat kode pertama menggunakan **for...of loop**
- ✅ Memahami **imperative programming paradigm**
- ✅ Belajar dari **kesalahan naming convention** (`totalSum`)
- ✅ Breakdown kode **line-by-line**
- ✅ Trace execution dengan contoh konkret
- ✅ Memahami kelebihan & kekurangan pendekatan ini

---

## 💻 Kode 1: For...of Loop (Versi Benar)

### **Implementasi Lengkap**

```javascript
function calculateMean(numbers) {
  let sum = 0

  for (const currentNumber of numbers) {
    sum += currentNumber
  }

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

Mari kita bedah kode ini baris per baris:

### **Baris 1: Function Declaration**

```javascript
function calculateMean(numbers) {
```

**Apa yang terjadi:**
- Deklarasi fungsi dengan nama `calculateMean`
- Menerima 1 parameter: `numbers` (array of numbers)
- Menggunakan function declaration (bukan arrow function)

**Kenapa `calculateMean`?**
- ✅ **Descriptive**: Langsung jelas fungsi untuk menghitung mean
- ✅ **CamelCase**: Standar naming untuk function di JavaScript
- ✅ **Pure English**: Konsisten, tidak mixing bahasa
- ✅ **Verb + Noun**: `calculate` (verb) + `Mean` (noun)

---

### **Baris 2: Inisialisasi Sum**

```javascript
  let sum = 0
```

**Apa yang terjadi:**
- Buat variabel `sum` untuk menyimpan total jumlah
- Inisialisasi dengan nilai `0`
- Pakai `let` karena nilainya akan berubah

**Kenapa pakai `sum` (bukan `total` atau `jumlah`)?**
- ✅ **Short & clear**: Singkat tapi jelas maksudnya
- ✅ **Common convention**: Standar di matematika dan programming
- ✅ **Pure English**: Konsisten dengan naming lain
- ✅ **No redundancy**: Cukup `sum`, tidak perlu `totalSum` atau `sumTotal`

💡 **Fun Fact**: Simbol sigma (Σ) di matematika dibaca "sum" dalam bahasa Inggris!

---

### **Baris 3-5: For...of Loop**

```javascript
  for (const currentNumber of numbers) {
    sum += currentNumber
  }
```

**Apa yang terjadi:**
- Loop melalui setiap elemen dalam array `numbers`
- Setiap elemen disimpan sementara di variabel `currentNumber`
- Setiap `currentNumber` ditambahkan ke `sum`

**Kenapa pakai `for...of`?**
- ✅ **Simple syntax**: Lebih sederhana dari for tradisional
- ✅ **Readable**: Mudah dibaca "for each currentNumber of numbers"
- ✅ **No index needed**: Tidak perlu tracking index manual
- ✅ **Modern**: ES6+ feature yang clean

**Kenapa `const currentNumber`?**
- ✅ **const**: Nilai tidak akan berubah dalam satu iterasi
- ✅ **currentNumber**: Descriptive, tahu sedang proses angka mana
- ✅ **Avoid `number`**: Kata `number` bisa confuse dengan tipe data

**Apa itu `sum += currentNumber`?**
- Shorthand untuk: `sum = sum + currentNumber`
- Menambahkan nilai current ke akumulasi sum

---

### **Baris 6: Hitung Mean**

```javascript
  const mean = sum / numbers.length
```

**Apa yang terjadi:**
- Bagi total `sum` dengan banyaknya data (`numbers.length`)
- Simpan hasil pembagian di variabel `mean`
- Pakai `const` karena nilainya tidak akan berubah lagi

**Kenapa pisah jadi variabel tersendiri?**
- ✅ **Clarity**: Jelas ada langkah "hitung mean"
- ✅ **Debuggable**: Bisa di-log untuk debugging
- ✅ **Readable**: Lebih mudah dibaca daripada langsung di return
- ✅ **Self-documenting**: Kode menjelaskan dirinya sendiri

---

### **Baris 7: Pembulatan & Return**

```javascript
  return Math.round(mean)
```

**Apa yang terjadi:**
- Bulatkan `mean` menggunakan `Math.round()`
- Kembalikan hasil pembulatan sebagai output fungsi

**Kenapa `Math.round()`?**
- ✅ **Standar pembulatan**: 0.5 ke atas, di bawah 0.5 ke bawah
- ✅ **Built-in function**: Tidak perlu buat sendiri
- ✅ **Reliable**: Sudah teruji dan konsisten

---

## 🎨 Visualisasi Flow

```
┌─────────────────────────────────────────────────┐
│  INPUT: [1, 2, 3, 4, 5]                         │
└────────────┬────────────────────────────────────┘
             │
             ▼
   ┌─────────────────┐
   │  sum = 0        │  Inisialisasi
   └────────┬────────┘
            │
            ▼
   ┌─────────────────┐
   │  Loop starts    │
   └────────┬────────┘
            │
   ┌────────▼────────────────────────┐
   │  Iterasi 1: currentNumber = 1   │
   │  sum = 0 + 1 = 1                │
   └────────┬────────────────────────┘
            │
   ┌────────▼────────────────────────┐
   │  Iterasi 2: currentNumber = 2   │
   │  sum = 1 + 2 = 3                │
   └────────┬────────────────────────┘
            │
   ┌────────▼────────────────────────┐
   │  Iterasi 3: currentNumber = 3   │
   │  sum = 3 + 3 = 6                │
   └────────┬────────────────────────┘
            │
   ┌────────▼────────────────────────┐
   │  Iterasi 4: currentNumber = 4   │
   │  sum = 6 + 4 = 10               │
   └────────┬────────────────────────┘
            │
   ┌────────▼────────────────────────┐
   │  Iterasi 5: currentNumber = 5   │
   │  sum = 10 + 5 = 15              │
   └────────┬────────────────────────┘
            │
   ┌────────▼────────┐
   │  Loop ends      │
   └────────┬────────┘
            │
            ▼
   ┌─────────────────┐
   │  mean = 15 / 5  │  Hitung mean
   │  mean = 3       │
   └────────┬────────┘
            │
            ▼
   ┌─────────────────┐
   │  Math.round(3)  │  Pembulatan
   │  = 3            │
   └────────┬────────┘
            │
            ▼
┌───────────────────────┐
│  OUTPUT: 3            │
└───────────────────────┘
```

---

## 💡 Analogi untuk Pemula

Bayangkan kamu punya **celengan** dan mau tahu rata-rata uang yang kamu masukkan setiap hari selama seminggu.

**Prosesnya:**

1. **Buka catatan** (array numbers): [10000, 15000, 5000, 20000, 10000, 15000, 15000]

2. **Ambil kertas kosong** (sum = 0): Siapkan kertas untuk hitung total

3. **Hitung satu per satu** (for loop):
   - Hari 1: 0 + 10.000 = 10.000
   - Hari 2: 10.000 + 15.000 = 25.000
   - Hari 3: 25.000 + 5.000 = 30.000
   - Hari 4: 30.000 + 20.000 = 50.000
   - Hari 5: 50.000 + 10.000 = 60.000
   - Hari 6: 60.000 + 15.000 = 75.000
   - Hari 7: 75.000 + 15.000 = 90.000

4. **Hitung rata-rata** (mean = sum / length):
   - Total: 90.000
   - Banyak hari: 7
   - Rata-rata: 90.000 ÷ 7 = 12.857,14...

5. **Bulatkan** (Math.round):
   - 12.857 → 12.857 (dibulatkan jadi 12.857 atau ke rupiah terdekat)

Nah, kode kita melakukan **persis hal yang sama**, tapi dengan angka!

---

## ❌ STOP! Kesalahan yang Pernah Dibuat

### **Kesalahan: Naming Convention - `totalSum`**

**Kode yang SALAH:**

```javascript
function calculateMean(numbers) {
  let totalSum = 0  // ❌ SALAH!

  for (const currentNumber of numbers) {
    totalSum += currentNumber
  }

  const mean = totalSum / numbers.length
  return Math.round(mean)
}
```

---

### **🔧 Apa yang Salah?**

Variabel `totalSum` ini bermasalah karena:

**1. Redundant (Berlebihan)**
- `total` sudah berarti keseluruhan/jumlah
- `sum` juga berarti jumlah
- `totalSum` = "jumlah jumlah" → tidak perlu!

**2. Inconsistent Naming**
- Bisa dianggap mixing konsep: `total` (bisa Indonesian/English) + `Sum` (English)
- Membingungkan: apakah `total` di sini adjective atau noun?

**3. Not Following Convention**
- Di matematika dan programming, **`sum`** sudah standar untuk penjumlahan
- Tidak perlu dibuat lebih panjang tanpa menambah clarity

---

### **✅ Perbaikan**

```javascript
let sum = 0  // ✅ BENAR!
```

**Kenapa ini lebih baik?**
- ✅ **Concise**: Singkat dan jelas
- ✅ **Standard**: Konvensi yang umum dipakai
- ✅ **Clear**: Langsung paham maksudnya "jumlah"
- ✅ **Pure English**: Konsisten dengan variable lain

---

### **💡 Pelajaran yang Didapat**

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 🎓 NAMING CONVENTION BEST PRACTICES        ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ✅ Pilih satu bahasa (English recommended) ┃
┃ ✅ Hindari redundancy (totalSum, sumTotal) ┃
┃ ✅ Gunakan standard convention (sum, avg)  ┃
┃ ✅ Clear > Clever (jelas > pintar-pintaran)┃
┃ ✅ Consistent di seluruh codebase          ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

**Contoh Naming yang BAIK:**
```javascript
let sum = 0           // ✅
let count = 0         // ✅
let average = 0       // ✅
let total = 0         // ✅ (tapi sum lebih spesifik untuk penjumlahan)
```

**Contoh Naming yang BURUK:**
```javascript
let totalSum = 0      // ❌ Redundant
let sumTotal = 0      // ❌ Redundant, terbalik
let jumlahTotal = 0   // ❌ Mixing bahasa
let s = 0             // ❌ Terlalu singkat, tidak jelas
let theSum = 0        // ❌ Tidak perlu 'the'
```

---

## 🔍 Deep Dive: Trace Execution

Mari kita trace execution dengan test case kedua yang butuh pembulatan:

**Input:** `[3, 5, 7, 5, 3]`

<details>
<summary>🔬 Klik untuk lihat detail trace execution</summary>

```javascript
// Mulai eksekusi
calculateMean([3, 5, 7, 5, 3])

// Baris 1: Function dipanggil
// numbers = [3, 5, 7, 5, 3]

// Baris 2: Inisialisasi
sum = 0

// Baris 3-5: Loop dimulai
// numbers.length = 5, akan loop 5 kali

// ===== ITERASI 1 =====
currentNumber = 3
sum = 0 + 3 = 3

// ===== ITERASI 2 =====
currentNumber = 5
sum = 3 + 5 = 8

// ===== ITERASI 3 =====
currentNumber = 7
sum = 8 + 7 = 15

// ===== ITERASI 4 =====
currentNumber = 5
sum = 15 + 5 = 20

// ===== ITERASI 5 =====
currentNumber = 3
sum = 20 + 3 = 23

// Loop selesai, sum = 23

// Baris 6: Hitung mean
mean = 23 / 5 = 4.6

// Baris 7: Bulatkan dan return
Math.round(4.6)
= 5  // Karena 0.6 > 0.5, dibulatkan ke atas

// Return: 5 ✅
```

</details>

---

## 📊 Karakteristik Pendekatan Ini

### **✨ Kelebihan**

```
┌─────────────────────────────────────────┐
│  👍 KELEBIHAN                           │
├─────────────────────────────────────────┤
│  ✅ Mudah dipahami pemula               │
│  ✅ Eksplisit & jelas step-by-stepnya   │
│  ✅ Familiar (mirip pseudocode)         │
│  ✅ Easy to debug (bisa log per step)   │
│  ✅ Tidak perlu paham advanced concept  │
└─────────────────────────────────────────┘
```

**Detail:**
- **Readable**: Bahkan non-programmer bisa baca dan paham
- **Debuggable**: Bisa `console.log(sum)` di dalam loop untuk cek
- **Universal**: Pola ini ada di hampir semua bahasa programming
- **Teaching-friendly**: Bagus untuk belajar konsep loop dan akumulasi

---

### **⚠️ Kekurangan**

```
┌─────────────────────────────────────────┐
│  👎 KEKURANGAN                          │
├─────────────────────────────────────────┤
│  ⚠️ Lebih verbose (banyak baris)        │
│  ⚠️ Mutable state (sum berubah-ubah)    │
│  ⚠️ Kurang "modern" untuk JS standards  │
│  ⚠️ Tidak functional programming style  │
└─────────────────────────────────────────┘
```

**Detail:**
- **Verbose**: Lebih banyak baris dibanding cara lain (misal reduce)
- **Imperative**: Fokus ke "HOW" bukan "WHAT"
- **Mutable**: Variable `sum` terus berubah (tidak ideal untuk FP)
- **Traditional**: Bukan pendekatan yang "trendy" di modern JS

---

### **🎯 Kapan Menggunakan Pendekatan Ini?**

**GUNAKAN ketika:**
- 👶 Sedang belajar programming (clarity > cleverness)
- 📚 Menulis kode untuk dipelajari orang lain
- 🐛 Butuh debugging yang mudah
- 📝 Interview/ujian yang minta explicit steps
- 🤝 Team dengan skill level yang beragam

**JANGAN GUNAKAN ketika:**
- 🚀 Mau kode yang concise dan modern
- 🎨 Mau functional programming style
- 📦 Codebase yang sudah pakai pattern lain (reduce, map, dll)
- ⚡ Mau impress dengan modern JS features

---

## 📐 Complexity Analysis

### **Time Complexity: O(n)**

```
n = panjang array

Loop berjalan n kali
Setiap iterasi: O(1) operation (tambah)
Total: O(n)
```

**Penjelasan:**
- Harus loop **setiap elemen** dalam array
- Tidak bisa di-skip atau di-shortcut
- Linear relationship: double input = double time

---

### **Space Complexity: O(1)**

```
Variabel yang dipakai:
- sum: 1 number
- currentNumber: 1 number (temporary)
- mean: 1 number
Total: constant space
```

**Penjelasan:**
- Tidak buat array/object baru
- Tidak rekursif (tidak ada call stack build-up)
- Hanya variabel sederhana yang ukurannya tetap

---

## ✅ Ringkasan Part 2

**Apa yang Sudah Dipelajari:**

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 💡 KEY TAKEAWAYS                      ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ✅ Implementasi pertama dengan for..of┃
┃ ✅ Imperative = fokus ke "HOW"        ┃
┃ ✅ sum, bukan totalSum (redundant)    ┃
┃ ✅ Naming: clear, concise, consistent ┃
┃ ✅ Complexity: O(n) time, O(1) space  ┃
┃ ✅ Best for: learning & clarity       ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

**Progress Series:**
```
[▓▓▓▓▓░░░░░] 28% (2/7 parts completed)
```

---

**Next up: Part 3 - Functional Approach dengan Reduce! 🚀**
