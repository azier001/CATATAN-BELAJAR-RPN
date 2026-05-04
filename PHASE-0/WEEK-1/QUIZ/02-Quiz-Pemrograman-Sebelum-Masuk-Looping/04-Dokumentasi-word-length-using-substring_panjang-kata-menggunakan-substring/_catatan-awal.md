# 📚 Dokumentasi Belajar JavaScript: Memecah String & Menghitung Panjang Kata

> **Dokumentasi Pribadi untuk Pemula** 🌱  
> Belajar sedikit demi sedikit tentang manipulasi string di JavaScript

---

## 📑 Daftar Isi

- [Pengenalan](#pengenalan)
- [Apa itu String?](#apa-itu-string)
- [Method substring()](#method-substring)
  - [Cara Kerja substring()](#cara-kerja-substring)
  - [Contoh Penggunaan](#contoh-penggunaan)
- [Property length](#property-length)
- [Studi Kasus: Memecah Kalimat](#studi-kasus)
  - [Soal](#soal)
  - [Solusi dengan substring()](#solusi-substring)
  - [Penjelasan Detail](#penjelasan-detail)
- [Metode Alternatif](#metode-alternatif)
  - [Menggunakan split()](#menggunakan-split)
  - [Perbandingan Metode](#perbandingan-metode)
- [Tips & Trik](#tips-trik)
- [Kesimpulan](#kesimpulan)

---

<a name="pengenalan"></a>
## 🎯 Pengenalan

Halo! 👋 Dokumentasi ini dibuat untuk membantu kamu memahami cara **memecah string** dan **menghitung panjang kata** di JavaScript. 

Kita akan belajar:
- ✅ Cara mengambil bagian tertentu dari sebuah teks
- ✅ Cara menghitung panjang kata
- ✅ Beberapa metode alternatif yang bisa digunakan

Mari kita mulai dari yang paling dasar! 🚀

---

<a name="apa-itu-string"></a>
## 📖 Apa itu String?

**String** adalah tipe data yang berisi teks atau karakter. Di JavaScript, string ditulis dengan tanda kutip.

**Contoh:**
```javascript
let nama = 'Budi';           // String dengan kutip tunggal
let kalimat = "Halo dunia";  // String dengan kutip ganda
let teks = `JavaScript`;     // String dengan backtick
```

> 💡 **Catatan:** String seperti deretan karakter yang berurutan, dan setiap karakter punya posisi (index) mulai dari 0.

**Contoh Index:**
```
Teks: "HALO"
Index: 0123

H = index 0
A = index 1
L = index 2
O = index 3
```

---

<a name="method-substring"></a>
## 🔧 Method substring()

**`substring()`** adalah method (fungsi) yang digunakan untuk **mengambil sebagian karakter** dari sebuah string.

<a name="cara-kerja-substring"></a>
### 📐 Cara Kerja substring()

**Sintaks:**
```javascript
string.substring(indexAwal, indexAkhir)
```

**Penjelasan:**
- `indexAwal` → Posisi mulai mengambil karakter (dimulai dari 0)
- `indexAkhir` → Posisi berhenti mengambil karakter (karakter pada index ini **TIDAK** diambil)

> ⚠️ **Penting:** Index akhir tidak ikut diambil! Jadi kalau kamu tulis `substring(0, 3)`, yang diambil adalah index 0, 1, 2 saja.

<a name="contoh-penggunaan"></a>
### 💡 Contoh Penggunaan

```javascript
let kata = 'JavaScript';

// Mengambil karakter dari index 0 sampai sebelum index 4
let hasil1 = kata.substring(0, 4);
console.log(hasil1); // Output: "Java"

// Mengambil karakter dari index 4 sampai sebelum index 10
let hasil2 = kata.substring(4, 10);
console.log(hasil2); // Output: "Script"
```

**Visualisasi:**
```
"JavaScript"
 0123456789  ← Index

substring(0, 4)  → "Java" (index 0,1,2,3)
substring(4, 10) → "Script" (index 4,5,6,7,8,9)
```

---

<a name="property-length"></a>
## 📏 Property length

**`length`** adalah property yang digunakan untuk **menghitung jumlah karakter** dalam sebuah string.

**Sintaks:**
```javascript
string.length
```

**Contoh:**
```javascript
let kata1 = 'Halo';
console.log(kata1.length); // Output: 4

let kata2 = 'JavaScript';
console.log(kata2.length); // Output: 10

let kalimat = 'Saya belajar';
console.log(kalimat.length); // Output: 12 (termasuk spasi!)
```

> 💡 **Catatan:** Property `length` menghitung semua karakter termasuk spasi!

---

<a name="studi-kasus"></a>
## 🎓 Studi Kasus: Memecah Kalimat

<a name="soal"></a>
### 📝 Soal

Kita punya kalimat berikut:
```javascript
let word4 = 'wow JavaScript is so cool';
```

**Tugas:** Pecah kalimat tersebut menjadi kata-kata terpisah dan tampilkan panjang masing-masing kata!

**Output yang diinginkan:**
```
First Word: wow, with length: 3
Second Word: JavaScript, with length: 10
Third Word: is, with length: 2
Fourth Word: so, with length: 2
Fifth Word: cool, with length: 4
```

<a name="solusi-substring"></a>
### ✅ Solusi dengan substring()

```javascript
let word4 = 'wow JavaScript is so cool';

// Kata 1: "wow"
let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;
console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

// Kata 2: "JavaScript"
let secondWord = word4.substring(4, 14);
let secondWordLength = secondWord.length;
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);

// Kata 3: "is"
let thirdWord = word4.substring(15, 17);
let thirdWordLength = thirdWord.length;
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);

// Kata 4: "so"
let fourthWord = word4.substring(18, 20);
let fourthWordLength = fourthWord.length;
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);

// Kata 5: "cool"
let fifthWord = word4.substring(21, 25);
let fifthWordLength = fifthWord.length;
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
```

<a name="penjelasan-detail"></a>
### 🔍 Penjelasan Detail

Mari kita lihat posisi setiap karakter dalam kalimat:

```
'wow JavaScript is so cool'
 ↓
w(0) o(1) w(2) (3) J(4) a(5) v(6) a(7) S(8) c(9) r(10) i(11) p(12) t(13) (14) i(15) s(16) (17) s(18) o(19) (20) c(21) o(22) o(23) l(24)
```

**Breakdown per kata:**

| Kata | Index | substring() | Panjang |
|------|-------|-------------|---------|
| wow | 0-2 | `substring(0, 3)` | 3 |
| JavaScript | 4-13 | `substring(4, 14)` | 10 |
| is | 15-16 | `substring(15, 17)` | 2 |
| so | 18-19 | `substring(18, 20)` | 2 |
| cool | 21-24 | `substring(21, 25)` | 4 |

> 📌 **Ingat:** Spasi juga punya index! Spasi setelah "wow" ada di index 3, spasi setelah "JavaScript" ada di index 14, dst.

**Langkah-langkah untuk setiap kata:**

1️⃣ **Ambil kata dengan substring()**
```javascript
let secondWord = word4.substring(4, 14); // Ambil "JavaScript"
```

2️⃣ **Hitung panjangnya dengan length**
```javascript
let secondWordLength = secondWord.length; // Hasilnya: 10
```

3️⃣ **Tampilkan hasilnya**
```javascript
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
// Output: Second Word: JavaScript, with length: 10
```

---

<a name="metode-alternatif"></a>
## 🔄 Metode Alternatif

Selain menggunakan `substring()`, ada cara lain yang lebih praktis untuk memecah kalimat!

<a name="menggunakan-split"></a>
### 🎨 Menggunakan split()

**Method `split()`** memecah string menjadi array berdasarkan pemisah (separator).

**Contoh 1: Menggunakan loop for**
```javascript
let word4 = 'wow JavaScript is so cool';
let words = word4.split(' '); // Pecah berdasarkan spasi

// Loop untuk menampilkan setiap kata
for (let i = 0; i < words.length; i++) {
    console.log('Word ' + (i + 1) + ': ' + words[i] + ', with length: ' + words[i].length);
}
```

**Output:**
```
Word 1: wow, with length: 3
Word 2: JavaScript, with length: 10
Word 3: is, with length: 2
Word 4: so, with length: 2
Word 5: cool, with length: 4
```

**Contoh 2: Menggunakan forEach() (lebih modern)**
```javascript
let word4 = 'wow JavaScript is so cool';
let words = word4.split(' ');

words.forEach((word, index) => {
    console.log(`Word ${index + 1}: ${word}, with length: ${word.length}`);
});
```

> 💡 **Penjelasan `split(' ')`:**
> - Tanda `' '` (spasi) adalah pemisah
> - String akan dipecah setiap kali ketemu spasi
> - Hasilnya adalah array berisi kata-kata terpisah

**Visualisasi split():**
```
Input:  'wow JavaScript is so cool'
         ↓ split(' ')
Output: ['wow', 'JavaScript', 'is', 'so', 'cool']
         Index: 0      1          2     3     4
```

<a name="perbandingan-metode"></a>
### ⚖️ Perbandingan Metode

| Aspek | substring() | split() |
|-------|-------------|---------|
| **Kemudahan** | ❌ Harus hitung index manual | ✅ Otomatis memisahkan |
| **Kode** | 📝 Panjang | 📝 Singkat |
| **Fleksibilitas** | ✅ Bisa ambil bagian spesifik | ⚠️ Tergantung pemisah |
| **Cocok untuk** | Posisi karakter pasti | Memecah kata dengan pola |

**Kapan pakai substring()?**
- ✅ Ketika kamu tahu pasti posisi karakter yang mau diambil
- ✅ Ketika soal/tugas mengharuskan pakai substring()
- ✅ Ketika mau ambil bagian tengah dari string

**Kapan pakai split()?**
- ✅ Ketika mau memecah kalimat menjadi kata-kata
- ✅ Ketika mau proses banyak kata sekaligus
- ✅ Ketika ada pola pemisah yang jelas (spasi, koma, dll)

---

<a name="tips-trik"></a>
## 💎 Tips & Trik

### 🎯 Tip 1: Hitung Index dengan Mudah

Gunakan comment untuk membantu visualisasi:
```javascript
// 'wow JavaScript is so cool'
//  012 3456789...

let kata = word4.substring(0, 3); // "wow"
```

### 🎯 Tip 2: Cek Hasil di Console

Selalu test kode kamu di console:
```javascript
console.log(word4[0]);  // "w"
console.log(word4[4]);  // "J"
console.log(word4[21]); // "c"
```

### 🎯 Tip 3: Kombinasikan dengan trim()

Gunakan `trim()` untuk menghilangkan spasi di awal/akhir:
```javascript
let teks = '  halo  ';
let bersih = teks.trim();
console.log(bersih); // "halo"
console.log(bersih.length); // 4 (bukan 8!)
```

### 🎯 Tip 4: Template Literal untuk Output Lebih Rapi

Gunakan backtick (`) untuk format string yang lebih mudah dibaca:
```javascript
// Cara lama:
console.log('Word: ' + word + ', length: ' + word.length);

// Cara modern (lebih rapi):
console.log(`Word: ${word}, length: ${word.length}`);
```

---

<a name="kesimpulan"></a>
## 🎉 Kesimpulan

Selamat! 🎊 Kamu sudah belajar:

- ✅ **String** adalah tipe data untuk teks
- ✅ **substring(start, end)** mengambil bagian string dari index start sampai sebelum end
- ✅ **length** menghitung jumlah karakter dalam string
- ✅ **split()** memecah string menjadi array
- ✅ Cara memecah kalimat dan menghitung panjang setiap kata

### 📚 Yang Sudah Kita Pelajari:

**Method & Property:**
- `substring(indexAwal, indexAkhir)` → Ambil sebagian string
- `.length` → Hitung panjang string
- `split(pemisah)` → Pecah string jadi array

**Konsep Penting:**
- Index dimulai dari 0
- Spasi juga punya index
- Index akhir di substring() tidak ikut diambil

### 🚀 Latihan Selanjutnya:

Coba pecah kalimat ini dan tampilkan panjang setiap kata:
```javascript
let latihan = 'I love coding in JavaScript';
// Coba gunakan substring() atau split()!
```

---

## 📝 Catatan Akhir

> **Remember:** Practice makes perfect! 💪  
> Semakin sering kamu latihan, semakin paham dengan string manipulation di JavaScript.

**Selamat belajar!** 🎓✨

---

*Dokumentasi dibuat untuk pembelajaran pribadi | Versi 1.0*