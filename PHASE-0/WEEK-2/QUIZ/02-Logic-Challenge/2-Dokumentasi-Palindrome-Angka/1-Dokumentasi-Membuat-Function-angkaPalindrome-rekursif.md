# 📚 Dokumentasi Lengkap: Membuat Function angkaPalindrome

> **Panduan step-by-step untuk pemula dalam membangun function pencari angka palindrome dengan rekursif**

---

## 📋 Daftar Isi

- [Pengenalan](#pengenalan)
- [Soal & Requirements](#soal-requirements)
- [Apa itu Palindrome?](#apa-itu-palindrome)
- [Apa itu Rekursif?](#apa-itu-rekursif)
- [Langkah 1: Percobaan Awal](#langkah-1)
- [Langkah 2: Membuat Pengecekan Palindrome](#langkah-2)
- [Langkah 3: Menambahkan Logika Return](#langkah-3)
- [Langkah 4: Implementasi Rekursif Lengkap](#langkah-4)
- [Algoritma Lengkap](#algoritma-lengkap)
- [Kode Final yang Benar](#kode-final)
- [Penjelasan Kode Baris per Baris](#penjelasan-kode)
- [Ringkasan Semua Kesalahan](#ringkasan-kesalahan)
- [Tips Debugging](#tips-debugging)
- [Kesimpulan](#kesimpulan)

---

<a name="pengenalan"></a>
## 🎯 Pengenalan

Dokumentasi ini akan memandu kamu untuk membuat function `angkaPalindrome` dari nol. Kamu akan belajar:

- ✅ Cara mengecek apakah suatu angka adalah palindrome
- ✅ Cara menggunakan rekursif untuk mencari angka selanjutnya
- ✅ **Kesalahan-kesalahan umum** yang sering terjadi dan cara memperbaikinya
- ✅ Best practices dalam coding

**Approach pembelajaran:** Kita akan belajar **sedikit demi sedikit**, melihat kesalahan yang terjadi, dan memperbaikinya bersama-sama!

---

<a name="soal-requirements"></a>
## 📝 Soal & Requirements

### 🎯 Deskripsi Soal

Diberikan sebuah function `angkaPalindrome(angka)` yang menerima satu parameter angka. Function akan **me-return angka selanjutnya** yang mengandung nilai angka palindrome.

### 📋 Contoh

```javascript
angkaPalindrome(8)    // Output: 9
angkaPalindrome(10)   // Output: 11
angkaPalindrome(27)   // Output: 33
angkaPalindrome(117)  // Output: 121
angkaPalindrome(175)  // Output: 181
angkaPalindrome(1000) // Output: 1001
```

### ⚠️ Aturan Penting

> **Jika angka dari awal sudah merupakan palindrome, function harus mencari angka selanjutnya yang palindrome.**

Contoh: Jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

---

<a name="apa-itu-palindrome"></a>
## 🔄 Apa itu Palindrome?

**Palindrome** adalah angka (atau kata) yang **dibaca dari depan maupun belakang tetap sama**.

### 📌 Contoh Angka Palindrome

| Angka | Dibalik | Palindrome? |
|-------|---------|-------------|
| 8     | 8       | ✅ Ya       |
| 11    | 11      | ✅ Ya       |
| 121   | 121     | ✅ Ya       |
| 343   | 343     | ✅ Ya       |
| 1221  | 1221    | ✅ Ya       |
| 27    | 72      | ❌ Tidak    |
| 123   | 321     | ❌ Tidak    |

### 💡 Cara Mengecek Palindrome

Bandingkan karakter dari **depan** dan **belakang** secara berpasangan:

```
Angka: 121
       ↓ ↓ ↓
Posisi: 0 1 2

Bandingkan:
- Posisi 0 dengan Posisi 2: '1' === '1' ✅
- Posisi 1 dengan Posisi 1: '2' === '2' ✅

Semua cocok → Palindrome!
```

---

<a name="apa-itu-rekursif"></a>
## 🔁 Apa itu Rekursif?

**Rekursif** adalah teknik di mana sebuah function **memanggil dirinya sendiri** untuk menyelesaikan masalah.

### 📌 Struktur Rekursif

```javascript
function namaFunction(parameter) {
  // 1. BASE CASE: Kondisi berhenti
  if (kondisiTerpenuhi) {
    return hasilAkhir;
  }
  
  // 2. RECURSIVE CASE: Panggil function lagi
  return namaFunction(parameterBaru);
}
```

### 💡 Contoh Sederhana: Hitung Mundur

```javascript
function hitungMundur(angka) {
  // Base case: berhenti di 0
  if (angka === 0) {
    console.log("Selesai!");
    return;
  }
  
  console.log(angka);
  // Recursive case: panggil lagi dengan angka - 1
  hitungMundur(angka - 1);
}

hitungMundur(3);
// Output:
// 3
// 2
// 1
// Selesai!
```

### ⚠️ Pentingnya Base Case

Tanpa base case, rekursif akan **berjalan terus tanpa henti** (infinite loop)!

---

<a name="langkah-1"></a>
## 💻 Langkah 1: Percobaan Awal

### ❌ Kode Percobaan #1: Handle Kasus 1 Digit Saja

```javascript
function angkaPalindrome(num) {
  const numberString = num.toString()
  
  if (numberString.length === 1) return ++num
}
```

**🔴 Masalah:**

Ini **terlalu spesifik** untuk kasus 1 digit saja. Padahal instruksinya berlaku untuk **SEMUA angka palindrome**, bukan cuma 1 digit.

**Contoh:**
- Angka 8 (1 digit, palindrome) → return 9 ✓ (bener)
- Angka 11 (2 digit, palindrome) → tidak di-handle ✗
- Angka 121 (3 digit, palindrome) → tidak di-handle ✗

**💡 Pelajaran:**

Jangan pisahkan kasus berdasarkan jumlah digit. Yang penting adalah: **apakah angka tersebut palindrome atau bukan?**

---

### ❌ Kode Percobaan #2: Return di Dalam Loop

```javascript
function angkaPalindrome(num) {
  const numberString = num.toString()
  const numberStringLength = numberString.length
  const middleIndex = numberStringLength / 2

  for (let i = 0; i < middleIndex; i++) {
    if (numberString[i] === numberString[numberStringLength - 1 - i]) {
      return ++num
    }
  }
}
```

**🔴 Masalah:**

Return di dalam loop dan di dalam kondisi if yang **sukses**. Artinya: "Jika ada SATU pasangan karakter yang cocok, langsung return angka berikutnya"

**Contoh dengan angka 123:**
- Iterasi 1: `'1' === '3'`? Tidak, jadi tidak masuk if
- Iterasi 2: `'2' === '2'`? **YA!** Langsung return 124

Padahal 123 **bukan palindrome**, tapi karena ada satu pasangan yang cocok (tengahnya), langsung return.

**💡 Pelajaran:**

Loop harus mengecek **SEMUA** pasangan dulu, baru tentukan apakah palindrome atau bukan.

---

<a name="langkah-2"></a>
## 🔍 Langkah 2: Membuat Pengecekan Palindrome

### ❌ Kesalahan: Loop yang Menimpa Nilai

```javascript
function angkaPalindrome(num) {
  let isPalindrome;

  const numberString = num.toString()

  for (let i = 0; i < numberString.length; i++) {
    isPalindrome = numberString[i] === numberString[numberString.length - 1 - i]
  }

  if (isPalindrome) {
    if(num === 8) return 9
    
    return num
  } else {
   num++ 
   
   return angkaPalindrome(num)
  }
}
```

**🔴 Masalah #1: Loop Menimpa Nilai**

Menggunakan **assignment (=)** di dalam loop. Artinya setiap iterasi, nilai `isPalindrome` akan **diganti** dengan hasil perbandingan baru.

**Contoh dengan angka 123:**
- Iterasi 1: `isPalindrome = '1' === '3'` → `isPalindrome = false`
- Iterasi 2: `isPalindrome = '2' === '2'` → `isPalindrome = true` (eh kok jadi true??)
- Iterasi 3: `isPalindrome = '1' === '3'` → `isPalindrome = false`

Yang tersimpan di akhir **cuma hasil iterasi terakhir!**

**🔴 Masalah #2: Kondisi Terlalu Spesifik**

```javascript
if(num === 8) return 9
```

Ini hanya handle kasus angka 8 saja. Padahal instruksinya berlaku untuk **SEMUA angka palindrome**.

---

### ❌ Kesalahan: Menggunakan `else` yang Menimpa

```javascript
function angkaPalindrome(num) {
  let isPalindrome = true
  
  const numberString = num.toString()
  const numberStringLength = numberString.length
  const middleIndex = numberStringLength / 2

  for (let i = 0; i < middleIndex; i++) {
    if (numberString[i] !== numberString[numberStringLength - 1 - i]) {
      isPalindrome = false
    } else {
      isPalindrome = true  // ❌ Ini masalahnya!
    }
  }
  
  console.log(isPalindrome)
}
```

**🔴 Masalah:**

Kamu **menimpa nilai `isPalindrome`** di setiap iterasi dengan `else` tersebut.

**Contoh dengan angka 123:**
- Iterasi 1: `'1' !== '3'`? YA → `isPalindrome = false`
- Iterasi 2: `'2' !== '2'`? TIDAK → masuk `else` → `isPalindrome = true` (loh kok jadi true lagi??)

Hasilnya jadi salah! Padahal 123 bukan palindrome.

**💡 Pelajaran:**

Jangan gunakan `else` untuk mengubah kembali jadi `true`. Cukup ubah jadi `false` saat ketemu yang tidak cocok.

---

### ✅ Solusi: Menggunakan Flag dengan Benar + Break

```javascript
function angkaPalindrome(num) {
  let isPalindrome = true  // Anggap palindrome dulu
  
  const numberString = num.toString()
  const numberStringLength = numberString.length
  const middleIndex = numberStringLength / 2

  for (let i = 0; i < middleIndex; i++) {
    if (numberString[i] !== numberString[numberStringLength - 1 - i]) {
      isPalindrome = false  // Ubah jadi false kalau tidak cocok
      break                 // Langsung berhenti, tidak perlu cek lagi
    } 
    // ✅ Tidak ada else! Biarkan tetap true kalau cocok
  }
  
  console.log(isPalindrome)
}
```

**✅ Penjelasan:**

1. **Set nilai awal `true`** → anggap palindrome dulu
2. **Kalau ada yang tidak cocok** → ubah jadi `false` dan `break`
3. **Kalau cocok** → biarkan saja, tidak perlu diubah-ubah
4. **Setelah loop** → `isPalindrome` menyimpan status yang akurat

**💡 Tips Efisiensi:**

Gunakan `break` untuk **menghentikan loop lebih awal** jika sudah ketemu yang tidak cocok. Tidak perlu cek semua kalau sudah pasti bukan palindrome!

---

<a name="langkah-3"></a>
## 🎯 Langkah 3: Menambahkan Logika Return

### ❌ Kesalahan: Return Tanpa Rekursif

```javascript
function angkaPalindrome(num) {
  let isPalindrome = true
  
  const numberString = num.toString()
  const numberStringLength = numberString.length
  const middleIndex = numberStringLength / 2

  for (let i = 0; i < middleIndex; i++) {
    if (numberString[i] !== numberString[numberStringLength - 1 - i]) {
      isPalindrome = false
      break
    } 
  }
  
  if(isPalindrome) {
    return ++num  // ❌ Langsung return num + 1
  }
}
```

**🔴 Masalah:**

Kamu cuma return `++num` kalau sudah palindrome. Tapi **angka berikutnya belum tentu palindrome juga!**

**Contoh:**
- Angka 8 (palindrome) → return 9 → Kebetulan 9 juga palindrome ✓
- Angka 11 (palindrome) → return 12 → Eh 12 **bukan palindrome** ✗

Harusnya angka 11 return 22, bukan 12!

**💡 Pelajaran:**

Setelah increment, kamu perlu **cek lagi** apakah angka hasil increment tersebut palindrome atau bukan. Caranya? Gunakan **rekursif**!

---

### ❌ Kesalahan: Panggil Rekursif Tapi Tidak Tangkap Hasilnya

```javascript
function angkaPalindrome(num) {
  let isPalindrome = true
  
  const numberString = num.toString()
  const numberStringLength = numberString.length
  const middleIndex = numberStringLength / 2

  for (let i = 0; i < middleIndex; i++) {
    if (numberString[i] !== numberString[numberStringLength - 1 - i]) {
      isPalindrome = false
      break
    } 
  }
  
  if (isPalindrome) {
    num++
    angkaPalindrome(num)  // ❌ Panggil tapi tidak return!
    return num            // ❌ Return num yang lama
  }
}
```

**🔴 Masalah:**

Kamu memanggil `angkaPalindrome(num)` tapi **tidak menangkap hasil return-nya!**

Jadi hasilnya akan selalu return angka yang sudah di-increment sekali saja, bukan hasil pencarian palindrome dari pemanggilan rekursif.

**💡 Pelajaran:**

Gunakan `return angkaPalindrome(num)`, bukan cuma panggil tanpa return.

**Analogi:**
Seperti kamu kirim kurir untuk ambil paket, kurir dapat paketnya, tapi **tidak dibawa pulang** ke kamu. Paket hilang di jalan!

---

<a name="langkah-4"></a>
## 🚀 Langkah 4: Implementasi Rekursif Lengkap

### ❌ Kesalahan: Lupa Return pada Else

```javascript
function angkaPalindrome(num) {
  num++
  
  let isPalindrome = true
  const numberString = num.toString()
  const numberStringLength = numberString.length
  const middleIndex = numberStringLength / 2

  for (let i = 0; i < middleIndex; i++) {
    if (numberString[i] !== numberString[numberStringLength - 1 - i]) {
      isPalindrome = false
      break
    } 
  }
  
  if (isPalindrome) {
    return num
  } else {
    angkaPalindrome(num)  // ❌ Tidak ada return!
  }
}
```

**🔴 Masalah:**

Di bagian `else`, kamu **tidak pakai `return`** saat memanggil rekursif.

**Contoh dengan angka 27:**
1. Increment: `num = 28`
2. Cek `"28"` → **bukan palindrome**
3. Masuk `else` → panggil `angkaPalindrome(28)` **tanpa return**
4. Rekursif jalan terus sampai dapat `33`
5. **Tapi hasil `33` tidak di-return ke pemanggil awal!**
6. Function return `undefined` ✗

**💡 Pelajaran:**

Hasil dari rekursif harus **diteruskan kembali** ke pemanggil dengan `return`.

---

### ❌ Kesalahan: Urutan Cek → Increment (Terbalik)

```javascript
function angkaPalindrome(num) {
  let isPalindrome = true
  const numberString = num.toString()
  const numberStringLength = numberString.length
  const middleIndex = numberStringLength / 2

  for (let i = 0; i < middleIndex; i++) {
    if (numberString[i] !== numberString[numberStringLength - 1 - i]) {
      isPalindrome = false
      break
    }
  }

  num++  // ❌ Increment SETELAH cek

  if (isPalindrome) {
    return num
  } else {
    return angkaPalindrome(num)
  }
}
```

**🔴 Masalah:**

Kamu **cek palindrome DULU**, **baru increment**.

Artinya kamu mengecek apakah `num` (angka asli) adalah palindrome, tapi return `num + 1` (angka yang sudah di-increment).

**Contoh dengan angka 10:**
1. Cek apakah `"10"` palindrome → **BUKAN palindrome**
2. `isPalindrome = false`
3. **Increment**: `num = 11`
4. Masuk `else` → `return angkaPalindrome(11)`
5. Cek apakah `"11"` palindrome → **YA, palindrome**
6. Increment: `num = 12`
7. Return `12` ✗

**Harusnya return 11, malah return 12!**

**💡 Pelajaran:**

**Increment dulu, baru cek.** Jadi yang dicek dan yang di-return itu angka yang **sama**.

---

### ❌ Kesalahan: Post-increment di Return

```javascript
function angkaPalindrome(num) {
  let isPalindrome = true
  const numberString = num.toString()
  const numberStringLength = numberString.length
  const middleIndex = numberStringLength / 2

  for (let i = 0; i < middleIndex; i++) {
    if (numberString[i] !== numberString[numberStringLength - 1 - i]) {
      isPalindrome = false
      break
    }
  }

  if (isPalindrome) {
    return num++  // ❌ Post-increment
  } else {
    return angkaPalindrome(num)
  }
}
```

**🔴 Masalah #1: Post-increment**

`num++` artinya: return nilai `num` dulu, **baru** increment.

**Contoh dengan angka 8:**
1. Cek apakah `"8"` palindrome → **YA, palindrome**
2. `isPalindrome = true`
3. Masuk `if (isPalindrome)` → `return num++`
4. Return nilai `8` dulu, baru increment jadi `9` (tapi sudah terlambat, sudah di-return) ✗

**Harusnya return 9, malah return 8!**

**🔴 Masalah #2: Tidak Increment di Else**

```javascript
} else {
    return angkaPalindrome(num)  // ❌ num tidak di-increment!
}
```

**Contoh dengan angka 10:**
1. Cek `"10"` → bukan palindrome
2. Masuk `else` → `angkaPalindrome(10)` lagi
3. Cek `"10"` lagi → bukan palindrome lagi
4. `angkaPalindrome(10)` lagi
5. **Infinite loop!** ✗

**💡 Pelajaran:**

Jangan gunakan post-increment di return. **Increment di awal** sebelum cek palindrome!

---

<a name="algoritma-lengkap"></a>
## 📝 Algoritma Lengkap

> 💡 **Tips:** Baca algoritma ini terlebih dahulu, lalu coba coding sendiri sebelum melihat kode final!

### 🎯 Algoritma Function angkaPalindrome

**1. Naikkan nilai angka**
- Angka input dinaikkan satu terlebih dahulu karena yang dicari adalah angka palindrome selanjutnya, bukan angka itu sendiri.

**2. Ubah angka menjadi string**
- Angka yang sudah dinaikkan diubah ke bentuk string agar tiap digit dapat dibandingkan.

**3. Tentukan batas pengecekan**
- Hitung panjang string angka.
- Tentukan titik tengah sebagai batas perulangan, karena pengecekan cukup dilakukan dari depan dan belakang menuju tengah.

**4. Lakukan pengecekan palindrome**
- Bandingkan digit dari awal dan akhir secara berpasangan.
- Jika ditemukan satu pasangan digit yang tidak sama:
  - Tandai bahwa angka bukan palindrome
  - Hentikan proses pengecekan.

**5. Pengambilan keputusan**
- Jika angka palindrome:
  - Kembalikan angka tersebut sebagai hasil.
- Jika angka bukan palindrome:
  - Panggil kembali function dengan angka yang sekarang untuk mencari palindrome berikutnya.

**6. Proses berulang**
- Langkah di atas akan terus berulang sampai ditemukan angka palindrome, lalu function berhenti.

---

<a name="kode-final"></a>
## ✅ Kode Final yang Benar

```javascript
function angkaPalindrome(num) {
  num++  // 1. Increment dulu
  
  let isPalindrome = true  // 2. Anggap palindrome dulu

  const numberString = num.toString()  // 3. Ubah ke string

  const numberStringLength = numberString.length
  const middleIndex = numberStringLength / 2

  // 4. Loop cek palindrome
  for (let i = 0; i < middleIndex; i++) {
    if (numberString[i] !== numberString[numberStringLength - 1 - i]) {
      isPalindrome = false  // Tandai bukan palindrome
      break                 // Berhenti lebih awal
    }
  }

  // 5. Keputusan berdasarkan hasil cek
  if (isPalindrome) {
    return num  // Base case: sudah palindrome, return!
  } else {
    return angkaPalindrome(num)  // Recursive case: cari terus
  }
}

// TEST CASES
console.log(angkaPalindrome(8));    // 9
console.log(angkaPalindrome(10));   // 11
console.log(angkaPalindrome(117));  // 121
console.log(angkaPalindrome(175));  // 181
console.log(angkaPalindrome(1000)); // 1001
```

---

<a name="penjelasan-kode"></a>
## 🔬 Penjelasan Kode Baris per Baris

### 📌 Bagian 1: Increment Angka

```javascript
num++
```

**Kenapa increment di awal?**
- Soal meminta "angka **selanjutnya**" yang palindrome
- Jika angka input sudah palindrome, tetap harus cari yang berikutnya
- Contoh: input 8 (palindrome) → harus return 9, bukan 8

---

### 📌 Bagian 2: Persiapan Pengecekan

```javascript
let isPalindrome = true
const numberString = num.toString()
const numberStringLength = numberString.length
const middleIndex = numberStringLength / 2
```

**Penjelasan:**
- `isPalindrome = true` → **Asumsi awal**: anggap palindrome dulu
- `num.toString()` → ubah angka jadi string agar bisa akses tiap digit
- `numberStringLength` → simpan panjang string untuk efisiensi
- `middleIndex` → kita cukup cek sampai tengah saja (tidak perlu cek semua)

**Kenapa cukup sampai tengah?**

```
Angka: 12321
Index: 0 1 2 3 4

Cek cukup sampai index 2 (tengah):
- Index 0 vs 4: '1' === '1' ✓
- Index 1 vs 3: '2' === '2' ✓
- Index 2 vs 2: (tidak perlu, sudah ketemu tengah)
```

---

### 📌 Bagian 3: Loop Pengecekan Palindrome

```javascript
for (let i = 0; i < middleIndex; i++) {
  if (numberString[i] !== numberString[numberStringLength - 1 - i]) {
    isPalindrome = false
    break
  }
}
```

**Penjelasan:**

1. **Loop dari 0 sampai tengah** (`i < middleIndex`)
2. **Bandingkan karakter:**
   - `numberString[i]` → karakter dari depan
   - `numberString[numberStringLength - 1 - i]` → karakter dari belakang
3. **Jika tidak sama:**
   - Set `isPalindrome = false`
   - `break` → berhenti, tidak perlu cek lagi (efisiensi!)

**Contoh dengan angka 121:**

```
i = 0: '1' !== '1'? TIDAK → lanjut
i = 1: '2' !== '2'? TIDAK → lanjut
Loop selesai, isPalindrome masih true ✓
```

**Contoh dengan angka 123:**

```
i = 0: '1' !== '3'? YA → isPalindrome = false, break!
Tidak perlu cek lagi, sudah pasti bukan palindrome
```

---

### 📌 Bagian 4: Base Case & Recursive Case

```javascript
if (isPalindrome) {
  return num  // BASE CASE
} else {
  return angkaPalindrome(num)  // RECURSIVE CASE
}
```

**Base Case (kondisi berhenti):**
- Jika `isPalindrome === true` → angka sudah palindrome
- **Return angka tersebut** sebagai hasil akhir
- Rekursif berhenti di sini!

**Recursive Case (lanjut cari):**
- Jika `isPalindrome === false` → angka belum palindrome
- **Panggil function lagi** dengan angka yang sama
- Di pemanggilan berikutnya, angka akan di-increment lagi (karena ada `num++` di awal)
- Proses berulang sampai ketemu palindrome

---

### 📌 Flow Execution dengan Angka 27

Mari kita trace eksekusi untuk memahami bagaimana rekursif bekerja:

```
CALL #1: angkaPalindrome(27)
  num++ → num = 28
  Cek "28" → bukan palindrome (isPalindrome = false)
  return angkaPalindrome(28) ─┐
                               │
CALL #2: angkaPalindrome(28)   │
  num++ → num = 29             │
  Cek "29" → bukan palindrome  │
  return angkaPalindrome(29) ──┤
                               │
CALL #3: angkaPalindrome(29)   │
  num++ → num = 30             │
  Cek "30" → bukan palindrome  │
  return angkaPalindrome(30) ──┤
                               │
... (proses berlanjut) ...     │
                               │
CALL #6: angkaPalindrome(32)   │
  num++ → num = 33             │
  Cek "33" → PALINDROME! ✓     │
  return 33 ───────────────────┘
                               │
← 33 ← 33 ← 33 ← 33 ← 33 ← 33 ─┘

Final result: 33
```

---

<a name="ringkasan-kesalahan"></a>
## 🎯 Ringkasan Semua Kesalahan & Solusinya

| # | Kesalahan | Kenapa Salah? | Solusi |
|---|-----------|---------------|---------|
| 1 | Handle kasus 1 digit saja | Terlalu spesifik, tidak general | Fokus pada cek palindrome, bukan jumlah digit |
| 2 | Return di dalam loop saat satu pasangan cocok | Tidak mengecek semua pasangan | Return di luar loop setelah semua dicek |
| 3 | Loop menimpa nilai `isPalindrome` terus | Hasil iterasi terakhir saja yang tersimpan | Set nilai awal `true`, ubah ke `false` kalau ada yang tidak cocok |
| 4 | Pakai `else` untuk set `true` lagi | Nilai `isPalindrome` jadi berubah-ubah | Hapus `else`, biarkan tetap `true` kalau cocok |
| 5 | Return `++num` tanpa cek lagi | Angka berikutnya belum tentu palindrome | Gunakan rekursif untuk cek lagi |
| 6 | Panggil rekursif tapi tidak `return` hasilnya | Hasil hilang, tidak diteruskan ke pemanggil | Selalu `return angkaPalindrome(num)` |
| 7 | Lupa `return` di bagian `else` | Function return `undefined` | Tambahkan `return` di kedua case (if & else) |
| 8 | Cek palindrome dulu, baru increment | Angka yang dicek ≠ angka yang di-return | Increment di awal, baru cek |
| 9 | Pakai post-increment (`num++`) di return | Return nilai lama sebelum increment | Increment di awal dengan statement terpisah |
| 10 | Tidak increment di bagian `else` | Infinite loop, angka tidak berubah | Increment di awal function (berlaku untuk semua case) |

---

<a name="tips-debugging"></a>
## 🐛 Tips Debugging

### 1. 🔍 Gunakan `console.log` untuk Trace Eksekusi

Tambahkan logging untuk melihat alur program:

```javascript
function angkaPalindrome(num) {
  num++
  console.log(`Checking: ${num}`)  // Lihat angka yang dicek
  
  let isPalindrome = true
  const numberString = num.toString()
  const numberStringLength = numberString.length
  const middleIndex = numberStringLength / 2

  for (let i = 0; i < middleIndex; i++) {
    if (numberString[i] !== numberString[numberStringLength - 1 - i]) {
      isPalindrome = false
      console.log(`  Not palindrome!`)  // Lihat kenapa bukan palindrome
      break
    }
  }

  if (isPalindrome) {
    console.log(`  Found palindrome: ${num}`)  // Ketemu!
    return num
  } else {
    return angkaPalindrome(num)
  }
}

console.log(angkaPalindrome(27));
```

**Output:**
```
Checking: 28
  Not palindrome!
Checking: 29
  Not palindrome!
Checking: 30
  Not palindrome!
Checking: 31
  Not palindrome!
Checking: 32
  Not palindrome!
Checking: 33
  Found palindrome: 33
33
```

---

### 2. 🎯 Test dengan Angka Sederhana Dulu

Jangan langsung test dengan angka besar. Mulai dari yang sederhana:

```javascript
// Test kasus sederhana dulu
console.log(angkaPalindrome(8));   // 9 (single digit)
console.log(angkaPalindrome(10));  // 11 (double digit)
console.log(angkaPalindrome(99));  // 101 (triple digit)
```

---

### 3. ⚠️ Waspadai Infinite Loop

Jika program hang (tidak berhenti), kemungkinan ada infinite loop. Periksa:

- ✅ Apakah ada **base case** (kondisi berhenti)?
- ✅ Apakah parameter yang dikirim ke rekursif **berubah**?
- ✅ Apakah base case **pasti tercapai**?

**Contoh infinite loop:**

```javascript
// ❌ SALAH: num tidak berubah
function angkaPalindrome(num) {
  // ... cek palindrome ...
  
  if (isPalindrome) {
    return num
  } else {
    return angkaPalindrome(num)  // num tidak berubah!
  }
}
```

---

### 4. 📊 Buat Test Cases Sendiri

Buat test cases untuk edge cases:

```javascript
// Edge cases
console.log(angkaPalindrome(0));     // 1
console.log(angkaPalindrome(9));     // 11
console.log(angkaPalindrome(99));    // 101
console.log(angkaPalindrome(999));   // 1001
console.log(angkaPalindrome(9999));  // 10001
```

---

### 5. 🔬 Pisahkan Pengecekan Palindrome

Jika bingung, pisahkan function pengecekan palindrome:

```javascript
// Helper function: cek apakah palindrome
function isPalindromeNumber(num) {
  const str = num.toString();
  const len = str.length;
  const mid = len / 2;
  
  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Main function: cari palindrome berikutnya
function angkaPalindrome(num) {
  num++;
  
  if (isPalindromeNumber(num)) {
    return num;
  } else {
    return angkaPalindrome(num);
  }
}
```

Dengan memisahkan, lebih mudah untuk debug masing-masing bagian.

---

<a name="kesimpulan"></a>
## 🎓 Kesimpulan

### 🌟 Key Takeaways

1. **Rekursif butuh base case** yang jelas untuk menghentikan pemanggilan
2. **Loop harus cek semua** sebelum ambil keputusan (jangan return di tengah loop)
3. **Variable flag** (`isPalindrome`) harus di-manage dengan hati-hati (jangan ditimpa terus)
4. **Hasil rekursif harus di-return** agar diteruskan ke pemanggil
5. **Urutan eksekusi penting**: Increment → Cek → Keputusan
6. **Efficiency matters**: Gunakan `break` untuk hentikan loop lebih awal

---

### 💪 Latihan Mandiri

Setelah memahami dokumentasi ini, coba challenge dirimu dengan:

1. **Modifikasi function** untuk mencari palindrome **sebelumnya** (decreasing)
2. **Buat versi iteratif** (tanpa rekursif) dari function ini
3. **Optimasi** untuk angka yang sangat besar
4. **Tambahkan validasi** input (hanya terima angka positif)

---

### 📚 Konsep yang Dipelajari

Dari dokumentasi ini, kamu telah belajar:

- ✅ Cara kerja **palindrome**
- ✅ Implementasi **rekursif** yang benar
- ✅ **Loop** dan pengecekan kondisi
- ✅ **String manipulation** untuk akses digit
- ✅ **Debugging techniques**
- ✅ **Common mistakes** dan cara menghindarinya

---

### 🚀 Next Steps

Sekarang kamu sudah paham cara membuat function `angkaPalindrome`! Langkah selanjutnya:

1. **Praktek coding** dengan soal-soal rekursif lainnya
2. **Pelajari rekursif lebih lanjut**: factorial, fibonacci, dll
3. **Kombinasikan dengan konsep lain**: array, object, dll
4. **Optimasi kode**: time complexity, space complexity

---

## 🎉 Selamat!

Kamu telah menyelesaikan dokumentasi lengkap tentang function `angkaPalindrome`! 

Ingat, **belajar programming adalah proses iteratif**. Kesalahan adalah bagian dari pembelajaran. Yang penting adalah memahami **kenapa** kode salah dan **bagaimana** cara memperbaikinya.

**Keep coding and happy learning!** 💻✨

---

**📝 Dokumentasi ini dibuat untuk pembelajaran pribadi**

*Last updated: 2026*
