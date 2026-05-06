# 📚 Dokumentasi Fungsi `calculateMultiply()` - JavaScript

> **Dokumentasi untuk Pemula** - Belajar membuat fungsi perkalian sederhana di JavaScript

---

## 📑 Daftar Isi

- [Pengenalan](#pengenalan)
- [Apa itu Fungsi?](#apa-itu-fungsi)
- [Apa itu Arrow Function?](#apa-itu-arrow-function)
- [Membuat Fungsi calculateMultiply()](#membuat-fungsi-calculatemultiply)
- [Kode Lengkap](#kode-lengkap)
- [Penjelasan Baris per Baris](#penjelasan-baris-per-baris)
- [Cara Kerja Fungsi](#cara-kerja-fungsi)
- [Variasi Penggunaan](#variasi-penggunaan)
- [Tips & Best Practice](#tips-best-practice)
- [Kesimpulan](#kesimpulan)

---

<a name="pengenalan"></a>
## 🎯 Pengenalan

Selamat datang di dokumentasi **fungsi perkalian sederhana** menggunakan JavaScript! 

Dalam dokumentasi ini, kita akan belajar:
- ✅ Cara membuat fungsi untuk mengalikan dua angka
- ✅ Memahami konsep **arrow function**
- ✅ Cara memanggil dan menggunakan fungsi
- ✅ Melihat hasil output di console

**Level**: Pemula 🌱  
**Waktu Belajar**: 10-15 menit ⏰

---

<a name="apa-itu-fungsi"></a>
## 📖 Apa itu Fungsi?

### 🤔 Definisi Sederhana

**Fungsi** adalah blok kode yang dapat digunakan berulang kali untuk melakukan tugas tertentu.

### 💡 Analogi Kehidupan Nyata

Bayangkan fungsi seperti **mesin kalkulator**:
- Kamu masukkan angka (input) ➡️
- Mesin memproses ➡️
- Keluar hasilnya (output)

### 🔧 Keuntungan Menggunakan Fungsi

| Keuntungan | Penjelasan |
|------------|------------|
| ♻️ **Reusable** | Bisa dipakai berkali-kali tanpa menulis ulang |
| 📦 **Organized** | Kode lebih rapi dan terstruktur |
| 🐛 **Easy Debug** | Mudah mencari dan memperbaiki error |
| 🚀 **Efficient** | Menghemat waktu coding |

---

<a name="apa-itu-arrow-function"></a>
## 🏹 Apa itu Arrow Function?

### 📝 Definisi

**Arrow Function** adalah cara modern (ES6) untuk menulis fungsi di JavaScript dengan sintaks yang lebih singkat.

### 🔄 Perbandingan Sintaks

**Fungsi Tradisional:**
```javascript
function calculateMultiply(number1, number2) {
  return number1 * number2;
}
```

**Arrow Function:**
```javascript
const calculateMultiply = (number1, number2) => number1 * number2
```

### ✨ Keunggulan Arrow Function

- ✅ Lebih ringkas dan mudah dibaca
- ✅ Tidak perlu keyword `function`
- ✅ Tidak perlu keyword `return` (untuk satu baris)
- ✅ Syntax modern dan trendy

---

<a name="membuat-fungsi-calculatemultiply"></a>
## 🛠️ Membuat Fungsi `calculateMultiply()`

### 🎯 Kriteria Fungsi

Fungsi yang akan kita buat harus:
1. ✅ Bernama `calculateMultiply()`
2. ✅ Menerima **2 parameter** (angka yang akan dikalikan)
3. ✅ Mengembalikan **hasil perkalian** kedua parameter

### 📐 Struktur Dasar

```javascript
const calculateMultiply = (parameter1, parameter2) => hasil
```

### 💻 Implementasi

```javascript
const calculateMultiply = (number1, number2) => number1 * number2
```

**Penjelasan:**
- `const calculateMultiply` = Nama fungsi
- `(number1, number2)` = Dua parameter yang diterima
- `=>` = Arrow function syntax
- `number1 * number2` = Operasi perkalian yang dikembalikan

---

<a name="kode-lengkap"></a>
## 💻 Kode Lengkap

```javascript
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari 
// dua parameter yang dikirim.

// Membuat fungsi calculateMultiply
const calculateMultiply = (number1, number2) => number1 * number2

// Deklarasi variabel
let num1 = 1
let num2 = 2

// Memanggil fungsi dan menyimpan hasilnya
let hasilPerkalian = calculateMultiply(num1, num2);

// Menampilkan hasil ke console
console.log(hasilPerkalian);

// ------------------------------------
console.log('')
// ------------------------------------
```

---

<a name="penjelasan-baris-per-baris"></a>
## 🔍 Penjelasan Baris per Baris

### 📌 Baris 1-2: Komentar Instruksi
```javascript
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari 
// dua parameter yang dikirim.
```
- Komentar yang menjelaskan tugas yang harus dikerjakan
- Tidak dieksekusi oleh JavaScript

---

### 📌 Baris 4-5: Deklarasi Fungsi
```javascript
const calculateMultiply = (number1, number2) => number1 * number2
```

| Bagian | Penjelasan |
|--------|------------|
| `const` | Keyword untuk mendeklarasikan konstanta |
| `calculateMultiply` | Nama fungsi |
| `(number1, number2)` | Parameter yang diterima |
| `=>` | Arrow function operator |
| `number1 * number2` | Operasi yang dikembalikan |

---

### 📌 Baris 6-7: Deklarasi Variabel
```javascript
let num1 = 1
let num2 = 2
```
- `let` = Keyword untuk membuat variabel
- `num1` = Variabel pertama dengan nilai **1**
- `num2` = Variabel kedua dengan nilai **2**

---

### 📌 Baris 9: Memanggil Fungsi
```javascript
let hasilPerkalian = calculateMultiply(num1, num2);
```
- Memanggil fungsi `calculateMultiply()`
- Mengirim `num1` dan `num2` sebagai argumen
- Menyimpan hasil ke variabel `hasilPerkalian`

---

### 📌 Baris 10: Menampilkan Output
```javascript
console.log(hasilPerkalian);
```
- Menampilkan nilai `hasilPerkalian` ke console
- **Output**: `2` (hasil dari 1 × 2)

---

<a name="cara-kerja-fungsi"></a>
## ⚙️ Cara Kerja Fungsi

### 🔄 Alur Eksekusi

```
1. Fungsi dipanggil: calculateMultiply(1, 2)
   ⬇️
2. Parameter diterima: number1 = 1, number2 = 2
   ⬇️
3. Operasi dijalankan: 1 * 2
   ⬇️
4. Hasil dikembalikan: 2
   ⬇️
5. Disimpan di variabel: hasilPerkalian = 2
   ⬇️
6. Ditampilkan: console.log(2)
```

### 🎨 Visualisasi

```
INPUT               PROSES              OUTPUT
┌─────┐            ┌──────┐            ┌─────┐
│ 1,2 │  ───────>  │  ×   │  ───────>  │  2  │
└─────┘            └──────┘            └─────┘
num1,num2      calculateMultiply    hasilPerkalian
```

---

<a name="variasi-penggunaan"></a>
## 🎲 Variasi Penggunaan

### 📊 Contoh 1: Angka Positif
```javascript
let num1 = 5
let num2 = 7
let hasil = calculateMultiply(num1, num2);
console.log(hasil); // Output: 35
```

### 📊 Contoh 2: Angka Negatif
```javascript
let num1 = -3
let num2 = 4
let hasil = calculateMultiply(num1, num2);
console.log(hasil); // Output: -12
```

### 📊 Contoh 3: Angka Desimal
```javascript
let num1 = 2.5
let num2 = 3.2
let hasil = calculateMultiply(num1, num2);
console.log(hasil); // Output: 8
```

### 📊 Contoh 4: Langsung Tanpa Variabel
```javascript
console.log(calculateMultiply(10, 20)); // Output: 200
```

### 📊 Contoh 5: Perkalian dengan Nol
```javascript
console.log(calculateMultiply(100, 0)); // Output: 0
```

---

<a name="tips-best-practice"></a>
## 💡 Tips & Best Practice

### ✅ DO (Yang Baik)

1. **Gunakan Nama yang Deskriptif**
   ```javascript
   ✅ const calculateMultiply = (number1, number2) => number1 * number2
   ❌ const calc = (a, b) => a * b
   ```

2. **Tambahkan Komentar**
   ```javascript
   // Fungsi untuk mengalikan dua angka
   const calculateMultiply = (number1, number2) => number1 * number2
   ```

3. **Konsisten dengan Style**
   ```javascript
   ✅ const calculateMultiply = (number1, number2) => number1 * number2
   ✅ const calculateAdd = (number1, number2) => number1 + number2
   ```

### ⚠️ DON'T (Yang Perlu Dihindari)

1. **Jangan Gunakan Nama yang Ambigu**
   ```javascript
   ❌ const x = (a, b) => a * b
   ```

2. **Jangan Lupa Semicolon**
   ```javascript
   ❌ let hasil = calculateMultiply(5, 10)
   ✅ let hasil = calculateMultiply(5, 10);
   ```

---

<a name="kesimpulan"></a>
## 🎓 Kesimpulan

### 📝 Rangkuman

Dalam dokumentasi ini, kamu telah belajar:

| Topik | Status |
|-------|--------|
| Membuat fungsi `calculateMultiply()` | ✅ |
| Memahami arrow function | ✅ |
| Menggunakan parameter dan return value | ✅ |
| Memanggil fungsi dengan berbagai cara | ✅ |
| Best practice dalam coding | ✅ |

### 🚀 Langkah Selanjutnya

Setelah memahami fungsi perkalian, coba buat fungsi lain:
- ➕ `calculateAdd()` - Penjumlahan
- ➖ `calculateSubtract()` - Pengurangan
- ➗ `calculateDivide()` - Pembagian
- 📐 `calculateSquare()` - Pangkat dua

### 🎯 Challenge

Coba buat fungsi yang menerima **3 parameter** dan mengalikan ketiganya!

```javascript
// Hint:
const calculateMultiplyThree = (num1, num2, num3) => num1 * num2 * num3
```

---

## 🌟 Selamat Belajar!

> **"Practice makes perfect"** - Terus berlatih dan coding! 💪

---

**Dibuat dengan ❤️ untuk Pembelajar JavaScript Pemula**  
**Versi**: 1.0  
**Terakhir Diperbarui**: 2026
