# 📚 Dokumentasi: Menghilangkan Spasi dari String

> **Catatan Pribadi untuk Pemula** 🌱  
> Dokumentasi ini dibuat untuk memahami cara menghilangkan spasi dari string menggunakan JavaScript dengan loop manual.

---

## 📑 Daftar Isi

- [Pengenalan](#pengenalan)
- [Problem Statement](#problem-statement)
- [Kriteria Solusi](#kriteria-solusi)
- [Algoritma Dasar](#algoritma-dasar)
- [Cara Kerja di Memori](#cara-kerja-di-memori)
- [Solusi Terbaik](#solusi-terbaik)
- [Penjelasan Detail Step by Step](#penjelasan-detail-step-by-step)
- [Test Cases](#test-cases)
- [Alternatif Solusi](#alternatif-solusi)
- [Perbandingan Kedua Solusi](#perbandingan-kedua-solusi)
- [Tips & Trik](#tips-trik)
- [Kesimpulan](#kesimpulan)

---

<a name="pengenalan"></a>
## 🎯 Pengenalan

Dalam pemrograman, kita sering perlu memanipulasi string. Salah satu kasus umum adalah **menghilangkan karakter tertentu** dari string, seperti spasi.

**Contoh sederhana:**
- Input: `"hello world"`
- Output: `"helloworld"`

Problem ini melatih kita untuk:
- ✅ Menggunakan **loop** untuk iterasi
- ✅ Melakukan **filtering** karakter
- ✅ Membangun **string baru** dari hasil filtering

---

<a name="problem-statement"></a>
## 📝 Problem Statement

**Sumber:** [Codewars - Remove String Spaces](https://www.codewars.com/kata/57eae20f5500ad98e50002c5)

### 📌 Deskripsi
Buatlah fungsi yang menghilangkan semua spasi dari string yang diberikan.

### 📥 Input
String yang mungkin mengandung spasi

### 📤 Output
String tanpa spasi

### 🔍 Contoh
```javascript
noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")
// Output: "8j8mBliB8gimjB8B8jlB"

noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd")
// Output: "88Bifk8hB8BB8BBBB888chl8BhBfd"
```

---

<a name="kriteria-solusi"></a>
## ✅ Kriteria Solusi

Ada **3 kriteria wajib** yang harus dipenuhi:

| No | Kriteria | Penjelasan |
|----|----------|------------|
| 1️⃣ | **Wajib menggunakan loop** | Harus ada struktur perulangan (`for`, `while`, `for...of`, dll) |
| 2️⃣ | **Tanpa method/built-in loop** | Tidak boleh pakai `.map()`, `.filter()`, `.reduce()`, `.replace()`, dll |
| 3️⃣ | **Hilangkan spasi saja** | Hanya karakter spasi (`' '`) yang dihilangkan, karakter lain tetap |

---

<a name="algoritma-dasar"></a>
## 🧠 Algoritma Dasar

Ini adalah **konsep inti** yang harus diingat:

```
┌─────────────────────────────────────────┐
│  ALGORITMA MENGHILANGKAN SPASI          │
├─────────────────────────────────────────┤
│                                         │
│  1️⃣  Siapkan wadah kosong               │
│     └─> untuk menampung hasil          │
│                                         │
│  2️⃣  Loop setiap karakter               │
│     └─> dari string input               │
│                                         │
│  3️⃣  Cek: Apakah bukan spasi?           │
│     ├─> YA  → masukkan ke wadah        │
│     └─> TIDAK → skip/lewati            │
│                                         │
│  4️⃣  Kembalikan wadah hasil             │
│     └─> string tanpa spasi              │
│                                         │
└─────────────────────────────────────────┘
```

### 🎨 Pola Umum (Pattern)

```
Wadah Kosong → Loop Karakter → Filter Kondisi → Akumulasi Hasil
```

**💡 Pattern ini bisa dipakai untuk:**
- Menghilangkan karakter tertentu
- Memfilter angka saja
- Memfilter huruf saja
- Dan banyak kasus filtering lainnya!

---

<a name="cara-kerja-di-memori"></a>
## 🧪 Cara Kerja di Memori

Mari kita lihat bagaimana kode bekerja dengan contoh: `"a b c"`

### 📊 Trace Execution

```
Input: "a b c"

Iterasi 1:
  char = 'a'
  'a' !== ' ' ? ✅ YA
  result = '' + 'a' = 'a'

Iterasi 2:
  char = ' '
  ' ' !== ' ' ? ❌ TIDAK
  result = 'a' (tidak berubah)

Iterasi 3:
  char = 'b'
  'b' !== ' ' ? ✅ YA
  result = 'a' + 'b' = 'ab'

Iterasi 4:
  char = ' '
  ' ' !== ' ' ? ❌ TIDAK
  result = 'ab' (tidak berubah)

Iterasi 5:
  char = 'c'
  'c' !== ' ' ? ✅ YA
  result = 'ab' + 'c' = 'abc'

Output: "abc"
```

### 🎬 Visualisasi

```
Input:   a   b   c
         ↓   ↓   ↓
Check:   ✅  ❌  ✅  ❌  ✅
         ↓       ↓       ↓
Result:  a   →   ab  →   abc
```

---

<a name="solusi-terbaik"></a>
## 🏆 Solusi Terbaik (Recommended)

### 💻 Kode

```javascript
function noSpace(x) {
  let result = ''

  for (const char of x) {
    if (char !== ' ') result += char
  }

  return result
}
```

### ⭐ Mengapa Ini Solusi Terbaik?

1. **🎨 Clean & Modern**
   - Menggunakan `for...of` loop yang lebih mudah dibaca
   - Tidak perlu handle index manual
   - Kode lebih ringkas

2. **📖 Mudah Dipahami**
   - Variabel `char` langsung merepresentasikan karakter
   - Logic straightforward: "jika bukan spasi, tambahkan"

3. **✨ Best Practice**
   - Mengikuti standar JavaScript modern (ES6+)
   - Lebih ekspresif dan deklaratif

---

<a name="penjelasan-detail-step-by-step"></a>
## 🔍 Penjelasan Detail Step by Step

Mari kita bedah kode **baris per baris**:

```javascript
function noSpace(x) {
  // 👆 Deklarasi fungsi dengan parameter x (string input)
  
  let result = ''
  // 👆 Siapkan wadah kosong untuk hasil
  //    Menggunakan 'let' karena nilainya akan berubah
  
  for (const char of x) {
  // 👆 Loop setiap karakter dari string x
  //    'char' adalah variabel yang menyimpan karakter saat ini
  //    'const' karena char tidak diubah dalam setiap iterasi
    
    if (char !== ' ') result += char
    // 👆 Jika karakter BUKAN spasi
    //    Maka tambahkan karakter tersebut ke result
    //    Operator '+=' artinya: result = result + char
  }
  
  return result
  // 👆 Kembalikan string hasil (tanpa spasi)
}
```

---

<a name="test-cases"></a>
## 🧪 Test Cases

### ✅ Test Case 1

```javascript
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"))
// Expected: "8j8mBliB8gimjB8B8jlB"
// Result: "8j8mBliB8gimjB8B8jlB" ✅
```

### ✅ Test Case 2

```javascript
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"))
// Expected: "88Bifk8hB8BB8BBBB888chl8BhBfd"
// Result: "88Bifk8hB8BB8BBBB888chl8BhBfd" ✅
```

### ✅ Test Case Tambahan

```javascript
// Test dengan string kosong
console.log(noSpace(""))
// Expected: ""
// Result: "" ✅

// Test tanpa spasi
console.log(noSpace("hello"))
// Expected: "hello"
// Result: "hello" ✅

// Test hanya spasi
console.log(noSpace("     "))
// Expected: ""
// Result: "" ✅

// Test dengan spasi di awal dan akhir
console.log(noSpace(" hello world "))
// Expected: "helloworld"
// Result: "helloworld" ✅
```

---

<a name="alternatif-solusi"></a>
## 🔄 Alternatif Solusi

### 💻 Kode

```javascript
function noSpace(strings) {
  let result = ''
  
  for(let i = 0; i < strings.length; i++) {
    if(strings[i] !== ' ') result += strings[i]
  }
  
  return result
}
```

### 📌 Karakteristik

- Menggunakan **traditional for loop** dengan index
- Lebih **klasik** dan universal (bekerja di semua versi JavaScript)
- Perlu manage index `i` secara manual

---

<a name="perbandingan-kedua-solusi"></a>
## ⚖️ Perbandingan Kedua Solusi

| Aspek | `for...of` (Solusi 1) | Traditional `for` (Solusi 2) |
|-------|----------------------|------------------------------|
| **Readability** | ⭐⭐⭐⭐⭐ Sangat mudah dibaca | ⭐⭐⭐⭐ Cukup mudah |
| **Kompleksitas** | ⭐⭐⭐⭐⭐ Lebih sederhana | ⭐⭐⭐ Perlu handle index |
| **Modern** | ✅ ES6+ | ⚠️ Klasik (semua versi) |
| **Performance** | 🟰 Sama saja | 🟰 Sama saja |
| **Use Case** | 👍 Iterasi nilai langsung | 👍 Butuh akses index |

### 🎯 Kesimpulan Perbandingan

**Gunakan `for...of`** jika:
- Hanya perlu akses nilai/karakter
- Ingin kode lebih clean
- Tidak butuh index

**Gunakan traditional `for`** jika:
- Perlu akses index untuk logic tertentu
- Perlu skip/jump index tertentu
- Support kompatibilitas JavaScript lama

---

<a name="tips-trik"></a>
## 💡 Tips & Trik

### 🎯 Kapan Menggunakan Pattern Ini?

Pattern **"Loop + Filter + Akumulasi"** ini berguna untuk:

1. **✂️ Filtering Karakter**
   ```javascript
   // Hanya ambil angka
   if (char >= '0' && char <= '9') result += char
   ```

2. **🔤 Filtering Huruf**
   ```javascript
   // Hanya ambil huruf
   if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) 
     result += char
   ```

3. **🔄 Transform Karakter**
   ```javascript
   // Uppercase semua huruf kecil
   if (char >= 'a' && char <= 'z') 
     result += char.toUpperCase()
   else 
     result += char
   ```

### 🚀 Optimasi Tips

1. **String Concatenation**
   - Untuk string pendek: `+=` sudah cukup
   - Untuk string sangat panjang: pertimbangkan array + join

2. **Variable Naming**
   - Gunakan nama yang deskriptif: `char`, `character`, `currentChar`
   - Hindari nama ambigu: `x`, `temp`, `data`

3. **Readability > Cleverness**
   - Kode yang mudah dibaca > kode yang "pintar" tapi sulit dipahami

---

<a name="kesimpulan"></a>
## 🎓 Kesimpulan

### ✨ Hal Penting yang Dipelajari

1. **🔁 Loop Fundamental**
   - `for...of` untuk iterasi nilai langsung
   - Traditional `for` untuk kontrol index penuh

2. **🎯 Pattern: Filter & Accumulate**
   - Siapkan wadah kosong
   - Loop setiap elemen
   - Filter dengan kondisi
   - Akumulasi hasil

3. **💭 Problem Solving Approach**
   - Pahami problem
   - Tentukan kriteria
   - Pilih tool yang tepat
   - Implementasi step by step

### 🎯 Next Steps

Setelah menguasai ini, coba challenge berikutnya:
- 🔹 Menghilangkan karakter selain huruf dan angka
- 🔹 Membalik string tanpa method built-in
- 🔹 Menghitung kemunculan karakter tertentu
- 🔹 Mengubah case huruf (uppercase/lowercase)

### 📚 Referensi

- **Problem Source:** [Codewars - Remove String Spaces](https://www.codewars.com/kata/57eae20f5500ad98e50002c5)
- **MDN - for...of:** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- **MDN - for statement:** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

---

> 💪 **Keep Learning, Keep Coding!**  
> Dokumentasi ini dibuat: Desember 2025  
> Update terakhir: -

---

<div align="center">

**🌟 Happy Coding! 🌟**

</div>