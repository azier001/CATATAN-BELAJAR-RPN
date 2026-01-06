# 📚 Belajar Algoritma Palindrome
## Part 1: Konsep & Pengembangan Kode

---

## 📋 Daftar Isi - Part 1

- [🎯 Pengenalan](#pengenalan)
  - [Apa itu Challenge ini?](#apa-itu-challenge)
  - [Tujuan Pembelajaran](#tujuan-pembelajaran)
- [📖 Memahami Konsep Dasar](#konsep-dasar)
  - [Apa itu Palindrome?](#apa-itu-palindrome)
  - [Contoh Palindrome](#contoh-palindrome)
  - [Aturan Challenge](#aturan-challenge)
- [🧠 Ringkasan Algoritma (Versi Awal)](#algoritma-awal)
- [🔧 Naming Convention](#naming-convention)
  - [Fungsi Utama](#fungsi-utama)
  - [Variabel di Fungsi Utama](#variabel-fungsi-utama)
  - [Variabel Pengecekan Palindrome](#variabel-pengecekan)
- [💻 Proses Pengembangan Kode](#proses-pengembangan)
  - [Kode Versi 1: Struktur Dasar](#kode-versi-1)
  - [Kode Versi 2: Dengan Pengecekan Palindrome](#kode-versi-2)
  - [Kode Versi 3: Final Working Version](#kode-versi-3)
- [📝 Ringkasan Algoritma Versi 3](#ringkasan-versi-3)

> **📌 Navigasi Dokumentasi:**
> - **Part 1** (Anda di sini) - Konsep & Pengembangan Kode
> - Part 2 - Clean Code & Deep Dive
> - Part 3 - Kesimpulan & Referensi

---

<a name="pengenalan"></a>
## 🎯 Pengenalan

<a name="apa-itu-challenge"></a>
### Apa itu Challenge ini?

Challenge **angkaPalindrome** adalah sebuah problem solving untuk mencari angka palindrome berikutnya setelah angka yang diberikan.

**Contoh:**
- Input: `8` → Output: `9` (karena 9 adalah palindrome berikutnya)
- Input: `27` → Output: `33` (karena 33 adalah palindrome berikutnya)
- Input: `117` → Output: `121` (karena 121 adalah palindrome berikutnya)

<a name="tujuan-pembelajaran"></a>
### 🎓 Tujuan Pembelajaran

Melalui dokumentasi ini, kamu akan belajar:

✅ Memahami konsep palindrome dengan baik  
✅ Merancang algoritma step-by-step  
✅ Menggunakan `while` loop untuk pencarian  
✅ Menggunakan `for` loop untuk validasi  
✅ Menerapkan naming convention yang baik  
✅ Mengembangkan kode secara bertahap (incremental development)  
✅ Memahami flow eksekusi program  

---

<a name="konsep-dasar"></a>
## 📖 Memahami Konsep Dasar

<a name="apa-itu-palindrome"></a>
### 🔄 Apa itu Palindrome?

**Palindrome** adalah angka (atau kata) yang **sama** jika dibaca dari depan maupun dari belakang.

**Cara Mudah Mengingat:**
> "Angka yang kalau dibalik, tetap sama!" 🔄

<a name="contoh-palindrome"></a>
### 💡 Contoh Palindrome

| Angka | Dibalik | Palindrome? | Penjelasan |
|-------|---------|-------------|------------|
| `8` | `8` | ✅ Yes | Satu digit selalu palindrome |
| `9` | `9` | ✅ Yes | Satu digit selalu palindrome |
| `11` | `11` | ✅ Yes | Depan = belakang (1-1) |
| `121` | `121` | ✅ Yes | Kiri = kanan (1-2-1) |
| `343` | `343` | ✅ Yes | Kiri = kanan (3-4-3) |
| `1001` | `1001` | ✅ Yes | Simetris (1-0-0-1) |
| `10` | `01` | ❌ No | 10 ≠ 01 |
| `27` | `72` | ❌ No | 27 ≠ 72 |
| `117` | `711` | ❌ No | 117 ≠ 711 |

<a name="aturan-challenge"></a>
### 📜 Aturan Challenge

⚠️ **PENTING:**

1. **Harus mencari angka BERIKUTNYA**, bukan angka itu sendiri
   - Jika input `8` (sudah palindrome), output tetap `9` (palindrome berikutnya)
   - Tidak boleh return angka yang sama dengan input

2. **Increment minimal +1**
   - Mulai pencarian dari `num + 1`

3. **Test Cases yang harus dipenuhi:**
   ```javascript
   console.log(angkaPalindrome(8));    // 9
   console.log(angkaPalindrome(10));   // 11
   console.log(angkaPalindrome(117));  // 121
   console.log(angkaPalindrome(175));  // 181
   console.log(angkaPalindrome(1000)); // 1001
   ```

---

<a name="algoritma-awal"></a>
## 🧠 Ringkasan Algoritma (Versi Awal)

Sebelum menulis kode, kita buat algoritma dulu:

### 📋 Langkah-langkah:

**1. Inisialisasi**
   - Buat variabel `isPalindrome` dengan nilai `false` untuk kontrol perulangan

**2. Perulangan Pencarian (while loop)**
   - Selama `isPalindrome` bernilai `false`, lakukan:
     - Increment `num` (tambah 1) untuk mendapat angka kandidat berikutnya
     - Set `isPalindrome = true` (asumsi awal angka adalah palindrome)
     - Lakukan pengecekan palindrome

**3. Pengecekan Palindrome (for loop)**
   - Konversi `num` menjadi string dengan `toString()`
   - Hitung panjang string (`len`)
   - Hitung titik tengah string (`mid = len / 2`)
   - Loop dari index `0` sampai sebelum `mid`:
     - Bandingkan karakter ke-`i` dari depan dengan karakter ke-`i` dari belakang
     - Jika ada yang tidak sama, set `isPalindrome = false`
     - Jika semua sama, `isPalindrome` tetap `true`

**4. Hasil**
   - Ketika while loop berhenti (artinya palindrome sudah ditemukan)
   - Return angka palindrome tersebut (`num`)

### 🎯 Konsep Kunci:

- **While loop** = mencari kandidat (terus loop sampai ketemu)
- **For loop** = validasi palindrome (cek satu kandidat)
- **String comparison** = bandingkan karakter depan vs belakang

---

<a name="naming-convention"></a>
## 🔧 Naming Convention

Naming convention yang baik membuat kode lebih mudah dibaca dan dipahami!

<a name="fungsi-utama"></a>
### 🎪 Fungsi Utama

**Nama Fungsi:**
```javascript
findNextPalindrome(num)
```

| Nama | Penjelasan |
|------|------------|
| `findNextPalindrome` | Deskriptif: "mencari palindrome berikutnya" |
| `num` | Parameter: angka input dari user |

<a name="variabel-fungsi-utama"></a>
### 📦 Variabel di Fungsi Utama

| Nama Variabel | Penjelasan | Contoh Nilai |
|---------------|------------|--------------|
| `isPalindrome` | Status apakah angka saat ini palindrome | `true` / `false` |
| `candidate` | Angka kandidat yang sedang dicek | `9`, `10`, `11`, ... |

<a name="variabel-pengecekan"></a>
### 🔍 Variabel Pengecekan Palindrome

| Nama Variabel | Penjelasan | Contoh Nilai |
|---------------|------------|--------------|
| `str` / `numStr` | Angka yang dikonversi ke string | `"121"` |
| `len` / `length` | Panjang string | `3` |
| `mid` | Titik tengah untuk loop | `1.5` → loop sampai `1` |
| `i` | Index untuk loop | `0`, `1`, `2`, ... |
| `left` | Karakter dari kiri/depan | `"1"` |
| `right` | Karakter dari kanan/belakang | `"1"` |

### ✨ Kenapa Naming Penting?

```javascript
// ❌ BAD - Tidak jelas
function f(n) {
  let x = false;
  while (!x) {
    n++;
    // ...
  }
}

// ✅ GOOD - Jelas dan mudah dipahami
function findNextPalindrome(num) {
  let isPalindrome = false;
  while (!isPalindrome) {
    num++;
    // ...
  }
}
```

---

<a name="proses-pengembangan"></a>
## 💻 Proses Pengembangan Kode

Mari kita lihat bagaimana kode dikembangkan **step-by-step** dari nol sampai working! 🚀

---

<a name="kode-versi-1"></a>
### 📝 Kode Versi 1: Struktur Dasar

**Kode:**
```javascript
const findNextPalindrome = (num) => {
  let isPalindrome = false;

  while (!isPalindrome) {
    num++;

    isPalindrome = true;
  }

  console.log(isPalindrome);
};

console.log(findNextPalindrome(8)); // 9
```

#### 🔍 Analisis Versi 1:

**✅ Yang Sudah Benar:**
- Struktur `while (!isPalindrome)` sudah tepat
- Logika `num++` untuk increment sudah benar
- Inisialisasi `isPalindrome = false` sudah oke

**❌ Yang Masih Salah:**

1. **Set `isPalindrome = true` langsung tanpa pengecekan**
   ```javascript
   isPalindrome = true; // ← Ini salah! Belum dicek palindrome atau bukan
   ```
   - Seharusnya ada logika pengecekan palindrome dulu
   - Baru set `isPalindrome` berdasarkan hasil pengecekan

2. **Return value salah**
   ```javascript
   console.log(isPalindrome); // ← Output: true/false
   ```
   - Seharusnya return `num` (angka palindrome yang ditemukan)
   - Bukan return boolean `isPalindrome`

#### 💡 Yang Perlu Ditambahkan:

1. Logika pengecekan palindrome di dalam while loop
2. Return `num` bukan `isPalindrome`

---

<a name="kode-versi-2"></a>
### 📝 Kode Versi 2: Dengan Pengecekan Palindrome

**Kode:**
```javascript
const findNextPalindrome = (num) => {
  let isPalindrome = false;

  while (!isPalindrome) {
    num++;

    isPalindrome = true;

    const str = num.toString();
    const len = str.length;
    const mid = len / 2;

    for (let i = 0; i < mid; i++) {
      if (str[i] !== str[len - 1 - i]) {
        isPalindrome = false;
      }
    }
  }

  console.log(isPalindrome);
};

console.log(findNextPalindrome(8)); // 9
```

#### 🔍 Analisis Versi 2:

**✅ Yang Sudah Benar:**

1. **Logika pengecekan palindrome sudah PERFECT! 🎉**
   ```javascript
   const str = num.toString();        // Konversi ke string
   const len = str.length;            // Dapat panjang
   const mid = len / 2;               // Titik tengah
   
   for (let i = 0; i < mid; i++) {    // Loop setengah
     if (str[i] !== str[len - 1 - i]) { // Bandingkan depan vs belakang
       isPalindrome = false;          // Set false jika beda
     }
   }
   ```

2. **Flow while loop sudah benar:**
   - Increment `num` ✅
   - Set asumsi `isPalindrome = true` ✅
   - Cek palindrome ✅
   - Set `isPalindrome = false` jika bukan palindrome ✅

3. **Perbandingan karakter sudah tepat:**
   ```javascript
   str[i] !== str[len - 1 - i]
   // Contoh: str = "121", len = 3
   // i=0: str[0] vs str[3-1-0] → "1" vs "1" ✅
   // i=1: str[1] vs str[3-1-1] → "2" vs "2" ✅
   ```

**❌ Yang Masih Salah:**

1. **Return value masih salah**
   ```javascript
   console.log(isPalindrome); // ← Masih return boolean
   ```
   - Seharusnya `return num`

#### 💡 Yang Perlu Diperbaiki:

Tinggal ganti `console.log(isPalindrome)` menjadi `return num` dan kode SELESAI! 🎊

---

<a name="kode-versi-3"></a>
### 📝 Kode Versi 3: Final Working Version ✅

**Kode Final:**
```javascript
const findNextPalindrome = (num) => {
  let isPalindrome = false;

  while (!isPalindrome) {
    num++;

    isPalindrome = true;

    const str = num.toString();
    const len = str.length;
    const mid = len / 2;

    for (let i = 0; i < mid; i++) {
      if (str[i] !== str[len - 1 - i]) {
        isPalindrome = false;
      }
    }
  }

  return num; // ← FIXED! Return angka palindrome
};

// TEST CASES
console.log(findNextPalindrome(8));    // 9
console.log(findNextPalindrome(10));   // 11
console.log(findNextPalindrome(117));  // 121
console.log(findNextPalindrome(175));  // 181
console.log(findNextPalindrome(1000)); // 1001
```

#### 🎉 Analisis Versi 3 - WORKING VERSION!

**✅ Semua Sudah Benar:**

1. ✅ Struktur while loop perfect
2. ✅ Logika pengecekan palindrome perfect
3. ✅ Return value sudah benar (`return num`)
4. ✅ Semua test cases PASS!

#### 🧪 Test Results:

```javascript
findNextPalindrome(8)    → 9    ✅
findNextPalindrome(10)   → 11   ✅
findNextPalindrome(117)  → 121  ✅
findNextPalindrome(175)  → 181  ✅
findNextPalindrome(1000) → 1001 ✅
```

#### 🎯 Breakdown Kode:

**1. Inisialisasi**
```javascript
let isPalindrome = false; // Flag untuk kontrol while loop
```

**2. While Loop (Pencarian)**
```javascript
while (!isPalindrome) {    // Selama belum ketemu palindrome
  num++;                   // Coba angka berikutnya
  isPalindrome = true;     // Asumsi awal: ini palindrome
  
  // ... pengecekan ...
}
```

**3. Konversi & Persiapan**
```javascript
const str = num.toString(); // 121 → "121"
const len = str.length;     // 3
const mid = len / 2;        // 1.5 (loop sampai index 1)
```

**4. For Loop (Validasi)**
```javascript
for (let i = 0; i < mid; i++) {         // Loop setengah panjang
  if (str[i] !== str[len - 1 - i]) {    // Bandingkan kiri vs kanan
    isPalindrome = false;                // Bukan palindrome
  }
}
```

**5. Return**
```javascript
return num; // Return angka palindrome yang ditemukan
```

#### 🌟 Kelebihan Pendekatan Ini:

✅ **Mudah dipahami** - flow jelas dari atas ke bawah  
✅ **Straightforward** - tidak ada trik rumit  
✅ **Flag-based** - menggunakan boolean flag untuk kontrol  
✅ **Readable** - nama variabel jelas dan deskriptif  

---

<a name="ringkasan-versi-3"></a>
## 📝 Ringkasan Algoritma Versi 3 (Untuk Ujian)

```
Algoritma findNextPalindrome (Versi Ujian)

1. Inisialisasi
   • Set variabel isPalindrome dengan nilai false.

2. Perulangan utama
   • Selama isPalindrome bernilai false:
     1. Tambahkan nilai angka (num) sebesar 1.
     2. Anggap angka tersebut palindrome dengan mengatur isPalindrome = true.
     3. Ubah angka menjadi string.
     4. Tentukan panjang string dan titik tengah.
     5. Lakukan perulangan dari indeks awal hingga titik tengah:
        • Bandingkan karakter depan dan belakang.
        • Jika ditemukan karakter yang tidak sama:
          - Set isPalindrome = false.

3. Hasil
   • Setelah perulangan selesai dan isPalindrome = true,
     kembalikan nilai num sebagai angka palindrome berikutnya.
```

---

## 🎊 Selesai - Part 1!

Kamu sudah menyelesaikan **Part 1: Konsep & Pengembangan Kode**!

### 📚 Apa yang Sudah Dipelajari:

✅ Konsep palindrome  
✅ Merancang algoritma dari nol  
✅ Naming convention yang baik  
✅ Pengembangan kode step-by-step  
✅ Debugging dan fixing errors  
✅ Membuat kode yang working!  

### 🚀 Lanjut ke Part 2:

Di **Part 2**, kamu akan belajar:
- Clean Code & Best Practices
- Pendekatan `while(true)` dengan early return
- Deep dive memahami eksekusi program
- Perbandingan kedua pendekatan

**Siap lanjut ke Part 2?** 💪

---

> **📌 Catatan:**  
> Dokumentasi ini dibuat untuk pembelajaran pribadi. Jangan ragu untuk menambahkan catatan atau modifikasi sesuai kebutuhanmu!

> **💡 Tips:**  
> Coba ketik ulang semua kode versi 1, 2, dan 3 untuk latihan. Muscle memory sangat membantu dalam coding!
