# 📚 Belajar Algoritma Palindrome
## Part 2: Clean Code & Deep Dive

---

## 📋 Daftar Isi - Part 2

- [✨ Clean Code & Best Practices](#clean-code)
  - [Kode Final (Clean Version)](#kode-clean)
  - [Perubahan yang Dilakukan](#perubahan)
  - [Penjelasan Best Practices](#best-practices)
- [📝 Ringkasan Algoritma Clean Version](#ringkasan-clean)
- [🔍 Deep Dive: Memahami `while(true)`](#deep-dive-while)
  - [Penjelasan Konsep](#konsep-while-true)
  - [Visualisasi Eksekusi](#visualisasi)
  - [Contoh 1: findNextPalindrome(8)](#contoh-1)
  - [Contoh 2: findNextPalindrome(10)](#contoh-2)
  - [Contoh 3: findNextPalindrome(117)](#contoh-3)
  - [Kesimpulan while(true)](#kesimpulan-while)
- [🤔 Pertanyaan & Jawaban](#qa)
  - [Perbedaan while(!isPalindrome) vs while(true)](#perbedaan-while)
  - [Perbedaan if-return vs if-else-return](#perbedaan-if-else)
- [📊 Perbandingan Kedua Pendekatan](#perbandingan)
  - [Side-by-Side Comparison](#side-by-side)
  - [Kelebihan & Kekurangan](#kelebihan-kekurangan)
  - [Kapan Menggunakan Yang Mana?](#kapan-pakai)

> **📌 Navigasi Dokumentasi:**
> - Part 1 - Konsep & Pengembangan Kode
> - **Part 2** (Anda di sini) - Clean Code & Deep Dive
> - Part 3 - Kesimpulan & Referensi

---

<a name="clean-code"></a>
## ✨ Clean Code & Best Practices

Setelah kode kita **working**, sekarang saatnya membuat kode lebih **clean** dan menerapkan **best practices**! 🎨

<a name="kode-clean"></a>
### 🎯 Kode Final (Clean Version)

```javascript
function findNextPalindrome(num) {
  let candidate = num + 1;

  while (true) {
    const str = candidate.toString();
    const len = str.length;
    let isValid = true;

    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (str[i] !== str[len - 1 - i]) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      return candidate;
    }

    candidate++;
  }
}

// TEST CASES
console.log(findNextPalindrome(8));    // 9
console.log(findNextPalindrome(10));   // 11
console.log(findNextPalindrome(117));  // 121
console.log(findNextPalindrome(175));  // 181
console.log(findNextPalindrome(1000)); // 1001
```

<a name="perubahan"></a>
### 🔄 Perubahan yang Dilakukan

Mari kita bandingkan kode versi 3 dengan clean version:

#### **1. Function Declaration vs Arrow Function**

**Versi 3:**
```javascript
const findNextPalindrome = (num) => {
  // ...
}
```

**Clean Version:**
```javascript
function findNextPalindrome(num) {
  // ...
}
```

**Kenapa diubah?**
- ✅ `function declaration` lebih readable untuk fungsi utama
- ✅ Lebih jelas bahwa ini adalah fungsi yang berdiri sendiri
- ✅ Hoisting-friendly (bisa dipanggil sebelum dideklarasikan)

---

#### **2. Nama Variabel: `num` vs `candidate`**

**Versi 3:**
```javascript
while (!isPalindrome) {
  num++;  // Mengubah parameter langsung
  // ...
}
return num;
```

**Clean Version:**
```javascript
let candidate = num + 1;  // Variabel baru
while (true) {
  // ...
  candidate++;
}
return candidate;
```

**Kenapa diubah?**
- ✅ **Immutability principle** - parameter `num` tidak diubah
- ✅ `candidate` lebih deskriptif (angka kandidat yang dicek)
- ✅ Inisialisasi `num + 1` lebih eksplisit
- ✅ Lebih mudah di-debug (nilai `num` original tetap bisa diakses)

---

#### **3. While Loop: `!isPalindrome` vs `true`**

**Versi 3:**
```javascript
let isPalindrome = false;

while (!isPalindrome) {
  num++;
  isPalindrome = true;
  
  // ... pengecekan ...
  
  if (str[i] !== str[len - 1 - i]) {
    isPalindrome = false;
  }
}
return num;
```

**Clean Version:**
```javascript
while (true) {
  // ... pengecekan ...
  
  if (isValid) {
    return candidate;  // Early return
  }
  
  candidate++;
}
```

**Kenapa diubah?**
- ✅ **Early return pattern** - langsung return saat ketemu
- ✅ Menghilangkan flag boolean yang tidak perlu
- ✅ Logika lebih straightforward
- ✅ `while(true)` + early return adalah pattern umum dalam searching

---

#### **4. Nama Flag: `isPalindrome` vs `isValid`**

**Versi 3:**
```javascript
isPalindrome = true;
// ...
isPalindrome = false;
```

**Clean Version:**
```javascript
let isValid = true;
// ...
isValid = false;
```

**Kenapa diubah?**
- ✅ `isValid` lebih umum dan reusable
- ✅ Scope-nya jelas (hanya untuk satu kandidat)
- ✅ Menghindari double negative (`!isPalindrome`)

---

#### **5. Penggunaan `break` Statement**

**Versi 3:**
```javascript
for (let i = 0; i < mid; i++) {
  if (str[i] !== str[len - 1 - i]) {
    isPalindrome = false;
    // Terus loop meskipun sudah ketemu yang beda
  }
}
```

**Clean Version:**
```javascript
for (let i = 0; i < Math.floor(len / 2); i++) {
  if (str[i] !== str[len - 1 - i]) {
    isValid = false;
    break;  // ← Langsung keluar dari loop
  }
}
```

**Kenapa diubah?**
- ✅ **Efisiensi** - tidak perlu cek sisa karakter jika sudah ketemu yang beda
- ✅ **Early exit** - keluar loop lebih cepat
- ✅ Save computation time

**Contoh Perbedaan:**
```javascript
// Cek angka 12345 (bukan palindrome)
// Versi 3: Cek i=0 (beda) → i=1 (beda) → total 2 iterasi
// Clean: Cek i=0 (beda) → break → total 1 iterasi saja!
```

---

#### **6. `Math.floor()` untuk Pembulatan**

**Versi 3:**
```javascript
const mid = len / 2;  // 3/2 = 1.5
for (let i = 0; i < mid; i++) { // i < 1.5
```

**Clean Version:**
```javascript
for (let i = 0; i < Math.floor(len / 2); i++) { // i < 1
```

**Kenapa diubah?**
- ✅ **Eksplisit** - jelas bahwa kita membulatkan ke bawah
- ✅ **Readable** - orang lain langsung paham intentnya
- ✅ **Best practice** - lebih proper untuk operasi matematika

---

#### **7. Early Return Pattern**

**Versi 3:**
```javascript
while (!isPalindrome) {
  // ... pengecekan ...
}
return num;  // Return di luar while
```

**Clean Version:**
```javascript
while (true) {
  // ... pengecekan ...
  
  if (isValid) {
    return candidate;  // Return di dalam while
  }
  
  candidate++;
}
```

**Kenapa diubah?**
- ✅ **Early return** = return sesegera mungkin saat kondisi terpenuhi
- ✅ Mengurangi nesting dan kompleksitas
- ✅ Flow lebih jelas: "ketemu? return. belum? lanjut."

---

<a name="best-practices"></a>
### 🎓 Penjelasan Best Practices

#### **1. Single Responsibility Principle**
Setiap bagian kode punya tanggung jawab yang jelas:
- While loop → mencari kandidat
- For loop → validasi satu kandidat
- If statement → decision making

#### **2. Early Exit / Early Return**
Keluar dari loop/function sesegera mungkin saat kondisi terpenuhi:
```javascript
// ✅ GOOD - Early exit
for (let i = 0; i < n; i++) {
  if (found) break;  // Keluar cepat
}

// ❌ BAD - Unnecessary iteration
for (let i = 0; i < n; i++) {
  if (found) flag = false;  // Tetap loop sampai habis
}
```

#### **3. Immutability**
Jangan ubah parameter function:
```javascript
// ✅ GOOD
function process(num) {
  let result = num + 1;  // Buat variabel baru
  return result;
}

// ❌ BAD
function process(num) {
  num++;  // Mengubah parameter
  return num;
}
```

#### **4. Descriptive Naming**
Nama variabel harus jelas menggambarkan isinya:
```javascript
// ✅ GOOD
let candidate = num + 1;
let isValid = true;

// ❌ BAD
let x = num + 1;
let flag = true;
```

#### **5. DRY (Don't Repeat Yourself)**
Gunakan `break` untuk menghindari pengecekan yang tidak perlu:
```javascript
// ✅ GOOD - Stop saat ketemu
if (condition) {
  isValid = false;
  break;
}

// ❌ BAD - Cek terus meski sudah ketemu
if (condition) {
  isValid = false;
  // Masih loop...
}
```

---

<a name="ringkasan-clean"></a>
## 📝 Ringkasan Algoritma Clean Version (Untuk Ujian)

```
Algoritma findNextPalindrome - Clean Version (Versi Ujian)

1. Inisialisasi
   • Set variabel candidate dengan nilai num + 1.

2. Perulangan utama
   • Lakukan perulangan tanpa batas (while true):
     1. Ubah candidate menjadi string.
     2. Tentukan panjang string.
     3. Anggap angka valid dengan mengatur isValid = true.
     4. Lakukan perulangan dari indeks 0 hingga setengah panjang string:
        • Bandingkan karakter depan dan belakang.
        • Jika ditemukan karakter yang tidak sama:
          - Set isValid = false.
          - Keluar dari perulangan (break).
     5. Jika isValid bernilai true:
        • Kembalikan candidate sebagai angka palindrome.
     6. Jika tidak valid:
        • Tambahkan candidate sebesar 1.

3. Hasil
   • Fungsi mengembalikan angka palindrome berikutnya setelah num.
```

---

<a name="deep-dive-while"></a>
## 🔍 Deep Dive: Memahami `while(true)`

<a name="konsep-while-true"></a>
### 🤔 Penjelasan Konsep

**Pertanyaan:** `while(true)` kan artinya loop tidak pernah berhenti. Yang membuat berhenti apa?

**Jawaban:** Yang menghentikan loop adalah **`return` statement**! ⚡

#### **Konsep Kunci:**

1. **`while(true)` = Loop Infinite**
   ```javascript
   while (true) {
     // Loop ini tidak pernah berhenti sendiri
   }
   ```

2. **`return` = Exit Point**
   ```javascript
   while (true) {
     if (condition) {
       return value;  // ← INI yang menghentikan loop!
     }
   }
   ```

3. **Flow Eksekusi:**
   ```
   ┌─────────────────┐
   │  while (true)   │ ← Loop terus
   └────────┬────────┘
            │
            ▼
   ┌─────────────────┐
   │  Cek kandidat   │
   └────────┬────────┘
            │
            ▼
      ┌─────────┐
      │ Valid?  │
      └────┬────┘
           │
      ┌────┴────┐
      │         │
     YES       NO
      │         │
      ▼         ▼
   RETURN   candidate++
   (EXIT)   (LANJUT LOOP)
   ```

#### **Perbandingan Konsep:**

| Aspek | `while(true)` | `while(!isPalindrome)` |
|-------|---------------|------------------------|
| **Kondisi Loop** | Selalu true | Tergantung flag |
| **Exit Point** | `return` statement | Kondisi while jadi false |
| **Kontrol** | Manual (programmer) | Otomatis (kondisi) |
| **Pattern** | Early return | Flag-based |

---

<a name="visualisasi"></a>
### 🎬 Visualisasi Eksekusi

Mari kita lihat bagaimana program berjalan **step-by-step**!

---

<a name="contoh-1"></a>
### 📌 Contoh 1: `findNextPalindrome(8)`

```javascript
findNextPalindrome(8)
```

#### **Iterasi 1:**

```
📍 MULAI
candidate = 8 + 1 = 9
while (true) ← MASUK LOOP

  str = "9"
  len = 1
  isValid = true
  
  for (let i = 0; i < Math.floor(1/2); i++)
       i = 0; i < 0  ← FALSE!
  
  ❌ FOR LOOP TIDAK JALAN!
  (karena 0 < 0 adalah false)
  
  isValid = true (tetap true, tidak ada yang ubah)
  
  if (isValid) ← TRUE!
    return 9  ✅ KELUAR DARI FUNGSI!

🎉 SELESAI! Hasil: 9
```

**📊 Summary:**
- Total iterasi: **1x**
- For loop: **0x** (tidak jalan karena angka 1 digit)
- Angka 1 digit selalu palindrome!

---

<a name="contoh-2"></a>
### 📌 Contoh 2: `findNextPalindrome(10)`

```javascript
findNextPalindrome(10)
```

#### **Iterasi 1:**

```
📍 MULAI
candidate = 10 + 1 = 11
while (true) ← MASUK LOOP

  str = "11"
  len = 2
  isValid = true
  
  for (let i = 0; i < Math.floor(2/2); i++)
       for (i = 0; i < 1; i++)  ← LOOP 1x
  
  ┌─────────────────────────────┐
  │ i = 0:                      │
  │   str[0] = "1"             │
  │   str[2-1-0] = str[1] = "1"│
  │   "1" !== "1" ← FALSE      │
  │   (sama! tidak masuk if)   │
  └─────────────────────────────┘
  
  isValid = true (tetap true)
  
  if (isValid) ← TRUE!
    return 11  ✅ KELUAR DARI FUNGSI!

🎉 SELESAI! Hasil: 11
```

**📊 Summary:**
- Total iterasi while: **1x**
- Total iterasi for: **1x**
- Perbandingan: **1x** ("1" vs "1" ✅)

---

<a name="contoh-3"></a>
### 📌 Contoh 3: `findNextPalindrome(117)` - Yang Panjang!

```javascript
findNextPalindrome(117)
```

#### **Iterasi 1:**

```
📍 MULAI
candidate = 117 + 1 = 118
while (true) ← MASUK LOOP ITERASI #1

  str = "118"
  len = 3
  isValid = true
  
  for (let i = 0; i < Math.floor(3/2); i++)
       for (i = 0; i < 1; i++)
  
  ┌─────────────────────────────┐
  │ i = 0:                      │
  │   str[0] = "1"             │
  │   str[3-1-0] = str[2] = "8"│
  │   "1" !== "8" ← TRUE ❌     │
  │   isValid = false          │
  │   break ← KELUAR FOR LOOP  │
  └─────────────────────────────┘
  
  isValid = false
  
  if (isValid) ← FALSE (tidak masuk if)
  
  candidate++ ← candidate = 119

↻ LANJUT KE ITERASI #2
```

#### **Iterasi 2:**

```
candidate = 119
while (true) ← MASUK LOOP ITERASI #2

  str = "119"
  len = 3
  isValid = true
  
  for (i = 0; i < 1; i++)
  
  ┌─────────────────────────────┐
  │ i = 0:                      │
  │   str[0] = "1"             │
  │   str[2] = "9"             │
  │   "1" !== "9" ← TRUE ❌     │
  │   isValid = false          │
  │   break                    │
  └─────────────────────────────┘
  
  isValid = false
  
  candidate++ ← candidate = 120

↻ LANJUT KE ITERASI #3
```

#### **Iterasi 3:**

```
candidate = 120
while (true) ← MASUK LOOP ITERASI #3

  str = "120"
  len = 3
  isValid = true
  
  for (i = 0; i < 1; i++)
  
  ┌─────────────────────────────┐
  │ i = 0:                      │
  │   str[0] = "1"             │
  │   str[2] = "0"             │
  │   "1" !== "0" ← TRUE ❌     │
  │   isValid = false          │
  │   break                    │
  └─────────────────────────────┘
  
  isValid = false
  
  candidate++ ← candidate = 121

↻ LANJUT KE ITERASI #4
```

#### **Iterasi 4:**

```
candidate = 121
while (true) ← MASUK LOOP ITERASI #4

  str = "121"
  len = 3
  isValid = true
  
  for (i = 0; i < 1; i++)
  
  ┌─────────────────────────────┐
  │ i = 0:                      │
  │   str[0] = "1"             │
  │   str[2] = "1"             │
  │   "1" !== "1" ← FALSE ✅    │
  │   (sama! tidak masuk if)   │
  └─────────────────────────────┘
  
  isValid = true (tetap true!)
  
  if (isValid) ← TRUE!
    return 121  ✅ KELUAR DARI FUNGSI!

🎉 SELESAI! Hasil: 121
```

**📊 Summary:**
- Total iterasi while: **4x**
- Kandidat yang dicek: 118, 119, 120, 121
- Yang palindrome: **121** ✅

**📈 Breakdown Per Iterasi:**

| Iterasi | Kandidat | Perbandingan | Valid? | Action |
|---------|----------|--------------|--------|--------|
| #1 | 118 | "1" vs "8" ❌ | No | candidate++ |
| #2 | 119 | "1" vs "9" ❌ | No | candidate++ |
| #3 | 120 | "1" vs "0" ❌ | No | candidate++ |
| #4 | 121 | "1" vs "1" ✅ | Yes | **RETURN 121** |

---

<a name="kesimpulan-while"></a>
### 💡 Kesimpulan `while(true)`

#### **Poin Penting:**

1. **`while(true)` ≠ Infinite Loop Selamanya**
   - Ada exit point: `return` statement
   - Ini adalah pattern yang umum dalam searching/algorithm

2. **Flow Control:**
   ```javascript
   while (true) {           // Loop terus
     // ... cek kondisi ...
     if (ketemu) {
       return hasil;        // ← EXIT di sini!
     }
     // Kalau belum ketemu, lanjut...
   }
   ```

3. **Kapan Loop Berhenti?**
   - Ketika `return candidate` dieksekusi
   - `return` langsung keluar dari **function** (bukan cuma loop)
   - Semua kode setelah `return` tidak dieksekusi

4. **Keuntungan Pattern Ini:**
   - ✅ Tidak perlu maintain flag boolean
   - ✅ Early return = lebih efisien
   - ✅ Lebih straightforward dan readable

#### **Analogi Mudah:**

Bayangkan kamu mencari kunci di kotak:

**Versi `while(!found)`:**
```
1. Set found = false
2. Selama found = false:
   - Cek kotak
   - Kalau ada kunci: found = true
3. Return kunci
```

**Versi `while(true)`:**
```
1. Loop terus:
   - Cek kotak
   - Kalau ada kunci: RETURN KUNCI (SELESAI!)
   - Kalau tidak ada: lanjut kotak berikutnya
```

Lebih simple kan? 😊

---

<a name="qa"></a>
## 🤔 Pertanyaan & Jawaban

<a name="perbedaan-while"></a>
### ❓ Perbedaan `while(!isPalindrome)` vs `while(true)`

#### **Kode Versi A: `while(!isPalindrome)`**

```javascript
let isPalindrome = false;

while (!isPalindrome) {
  candidate++;
  isPalindrome = true;  // Assume true
  
  // Cek palindrome
  if (tidak_sama) {
    isPalindrome = false;  // Set false kalau bukan
  }
}

return candidate;  // Return di luar while
```

#### **Kode Versi B: `while(true)`**

```javascript
while (true) {
  candidate++;
  let isValid = true;  // Assume true
  
  // Cek palindrome
  if (tidak_sama) {
    isValid = false;
    break;
  }
  
  if (isValid) {
    return candidate;  // Return di dalam while
  }
}
```

#### **📊 Perbandingan Detail:**

| Aspek | `while(!isPalindrome)` | `while(true)` |
|-------|------------------------|---------------|
| **Flag Variable** | Perlu `isPalindrome` di luar while | Pakai `isValid` di dalam while |
| **Scope Flag** | Global (di function level) | Local (di iteration level) |
| **Exit Mechanism** | Kondisi while jadi false | `return` statement |
| **Return Location** | Di luar while loop | Di dalam while loop |
| **Pattern Name** | Flag-based loop | Early return pattern |
| **Readability** | Perlu tracking flag | Langsung return saat ketemu |
| **Complexity** | Sedikit lebih kompleks | Lebih straightforward |

#### **🎯 Hasil Akhir:**

**SAMA PERSIS!** ✅ Kedua kode menghasilkan output yang identik.

#### **💭 Analogi:**

**Versi A (Flag-based):**
```
Kamu: "Saya mau cari kunci"
Loop: "Oke, saya set flag 'belum ketemu'"
     "Cek kotak 1... belum ketemu, flag tetap false"
     "Cek kotak 2... belum ketemu, flag tetap false"
     "Cek kotak 3... KETEMU! flag = true"
Loop: "Flag sudah true, keluar loop"
Return: "Ini kuncinya"
```

**Versi B (Early return):**
```
Kamu: "Saya mau cari kunci"
Loop: "Cek kotak 1... bukan ini"
      "Cek kotak 2... bukan ini"
      "Cek kotak 3... INI DIA! Langsung return kuncinya"
```

Lebih cepat dan langsung kan? 🚀

---

<a name="perbedaan-if-else"></a>
### ❓ Perbedaan `if-return` vs `if-else-return`

#### **Pertanyaan:** Apa bedanya kode dengan `else` dan tanpa `else`?

```javascript
// VERSI 1: Tanpa else
if (isValid) {
  return candidate;
}
candidate++;

// VERSI 2: Dengan else
if (isValid) {
  return candidate;
} else {
  candidate++;
}
```

#### **Jawaban: TIDAK ADA BEDA!** ✅

#### **📖 Penjelasan Detail:**

**Ketika `isValid = true`:**

**Versi 1:**
```javascript
if (isValid) {        ← TRUE, masuk if
  return candidate;   ← RETURN (function selesai)
}
// ← Kode ini tidak pernah dieksekusi!
candidate++;
```

**Versi 2:**
```javascript
if (isValid) {        ← TRUE, masuk if
  return candidate;   ← RETURN (function selesai)
} else {
  // ← Tidak masuk else
  candidate++;
}
```

**Hasil: SAMA** - function return, tidak ada kode lain yang dieksekusi.

---

**Ketika `isValid = false`:**

**Versi 1:**
```javascript
if (isValid) {        ← FALSE, tidak masuk if
  return candidate;
}
candidate++;          ← EKSEKUSI INI! (langsung)
```

**Versi 2:**
```javascript
if (isValid) {        ← FALSE, tidak masuk if
  return candidate;
} else {
  candidate++;        ← EKSEKUSI INI! (dari else)
}
```

**Hasil: SAMA** - `candidate++` dieksekusi.

---

#### **🎨 Visualisasi Flow:**

```
┌──────────────┐
│  if (isValid)│
└──────┬───────┘
       │
   ┌───┴────┐
   │        │
  YES      NO
   │        │
   ▼        ▼
RETURN   candidate++
(EXIT)   (LANJUT)

Versi 1: candidate++ di luar if
Versi 2: candidate++ di dalam else

HASIL: SAMA! ✅
```

#### **💡 Best Practice: Gunakan Versi 1 (Tanpa `else`)**

**Kenapa?**

1. **Principle: Early Return**
   - Setelah `return`, kode pasti selesai
   - `else` jadi redundant (tidak perlu)

2. **Lebih Clean:**
   ```javascript
   // ✅ GOOD - Clean
   if (condition) {
     return value;
   }
   doSomething();
   
   // ❌ UNNECESSARY - Redundant else
   if (condition) {
     return value;
   } else {
     doSomething();
   }
   ```

3. **Mengurangi Nesting:**
   - Kode lebih flat
   - Lebih mudah dibaca
   - Menghindari "arrow code" (banyak indentasi)

4. **Industry Standard:**
   - Mayoritas style guide merekomendasikan early return
   - ESLint rule: `no-else-return`

#### **📚 Rule of Thumb:**

> **"Jika ada `return` di dalam `if`, `else` biasanya tidak diperlukan"**

**Kapan pakai `else`?**
- Ketika **TIDAK ADA** `return` di dalam `if`
- Ketika ada 2 aksi berbeda yang harus dilakukan

```javascript
// ✅ Perlu else (tidak ada return)
if (condition) {
  doA();
} else {
  doB();
}

// ❌ Tidak perlu else (ada return)
if (condition) {
  return value;
} else {  // ← Redundant!
  doSomething();
}
```

---

<a name="perbandingan"></a>
## 📊 Perbandingan Kedua Pendekatan

<a name="side-by-side"></a>
### 🔄 Side-by-Side Comparison

```javascript
// ════════════════════════════════════════════════════════
// PENDEKATAN A: while(!isPalindrome) - Flag Based
// ════════════════════════════════════════════════════════
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

  return num;
};

// ════════════════════════════════════════════════════════
// PENDEKATAN B: while(true) - Early Return
// ════════════════════════════════════════════════════════
function findNextPalindrome(num) {
  let candidate = num + 1;

  while (true) {
    const str = candidate.toString();
    const len = str.length;
    let isValid = true;

    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (str[i] !== str[len - 1 - i]) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      return candidate;
    }

    candidate++;
  }
}
```

---

<a name="kelebihan-kekurangan"></a>
### ⚖️ Kelebihan & Kekurangan

#### **📌 Pendekatan A: `while(!isPalindrome)`**

**✅ Kelebihan:**

1. **Explicit Loop Condition**
   - Kondisi loop jelas terlihat: "selama belum palindrome"
   - Mudah dipahami untuk pemula
   - Kondisi exit jelas di while statement

2. **Traditional Approach**
   - Pattern yang familiar dari pembelajaran awal
   - Mirip dengan pseudocode klasik
   - Sesuai dengan algoritma textbook

3. **Flag-Based Logic**
   - Boolean flag membuat state eksplisit
   - Mudah di-trace untuk debugging
   - Jelas kapan loop akan berhenti

**❌ Kekurangan:**

1. **Memerlukan Flag Variable**
   - Perlu maintain `isPalindrome` di function scope
   - Harus set/reset flag di tempat yang tepat
   - Menambah complexity

2. **No Early Exit di For Loop**
   - For loop terus jalan meski sudah ketemu yang beda
   - Kurang efisien untuk angka besar
   - Wasted iterations

3. **Return di Luar While**
   - Harus keluar dari while dulu baru return
   - Tidak langsung return saat ketemu
   - Sedikit lebih lambat (meski negligible)

4. **Mutating Parameter**
   - Mengubah `num` langsung (parameter mutation)
   - Bisa bikin bingung kalau perlu `num` original
   - Kurang clean

---

#### **📌 Pendekatan B: `while(true)` + Early Return**

**✅ Kelebihan:**

1. **Early Return Pattern**
   - Langsung return saat kondisi terpenuhi
   - Tidak perlu maintain flag
   - Lebih straightforward

2. **Early Exit dengan `break`**
   - Keluar dari for loop segera setelah ketemu yang beda
   - Lebih efisien
   - Save computation time

3. **Immutability**
   - Parameter `num` tidak diubah
   - Membuat variabel baru `candidate`
   - Lebih clean dan maintainable

4. **Local Scope**
   - `isValid` di-declare di dalam loop
   - Scope lebih kecil dan jelas
   - Tidak ada variable leaking

5. **Modern JavaScript**
   - Menggunakan `Math.floor()` eksplisit
   - Function declaration (hoisting-friendly)
   - Best practice yang umum di industry

**❌ Kekurangan:**

1. **`while(true)` Bisa Misleading**
   - Untuk pemula bisa terlihat seperti infinite loop
   - Perlu pemahaman tentang early return
   - Kondisi exit tidak eksplisit di while statement

2. **Requires Understanding**
   - Perlu paham konsep early return
   - Tidak se-straightforward flag-based untuk pemula
   - Butuh mental model yang lebih advanced

---

<a name="kapan-pakai"></a>
### 🎯 Kapan Menggunakan Yang Mana?

#### **🎓 Untuk Pembelajaran / Pemula:**

**Gunakan Pendekatan A** (`while(!isPalindrome)`)

**Alasan:**
- ✅ Lebih intuitif untuk pemula
- ✅ Kondisi loop eksplisit
- ✅ Sesuai dengan algoritma textbook
- ✅ Mudah di-trace step by step
- ✅ Cocok untuk ujian/test yang meminta pseudocode tradisional

**Contoh Kasus:**
- Ujian algoritma
- Pembelajaran dasar programming
- Ketika dosen/mentor minta approach tertentu
- Dokumentasi pembelajaran

---

#### **💼 Untuk Production / Real Project:**

**Gunakan Pendekatan B** (`while(true)` + Early Return)

**Alasan:**
- ✅ Lebih clean dan maintainable
- ✅ Lebih efisien (early exit)
- ✅ Best practice di industry
- ✅ Immutable parameter
- ✅ Modern JavaScript style

**Contoh Kasus:**
- Real world project
- Code review akan lebih approve approach ini
- Performance matters
- Team dengan senior developers
- Production code

---

#### **📊 Decision Matrix:**

| Kriteria | Pendekatan A | Pendekatan B |
|----------|--------------|--------------|
| **Pemula** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Readability** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Performance** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Best Practice** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Maintainability** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Untuk Ujian** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Industry Standard** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

### 💡 Kesimpulan Perbandingan

**Kedua pendekatan VALID dan BENAR!** ✅

**Pilih berdasarkan konteks:**

1. **Sedang Belajar?** 
   - Mulai dengan Pendekatan A
   - Pahami konsepnya dulu
   - Nanti upgrade ke Pendekatan B

2. **Sudah Paham Konsep?**
   - Langsung pakai Pendekatan B
   - Lebih professional
   - Siap untuk real project

3. **Untuk Ujian/Tugas?**
   - Cek requirement dulu
   - Kalau tidak ada ketentuan, pakai Pendekatan A (lebih aman)
   - Kalau boleh bebas, pakai Pendekatan B (show off skills! 😎)

**Quote Penting:**

> **"Write code that works first, then optimize it. Both approaches work, choose based on your context and team preference."**

---

## 🎊 Selesai - Part 2!

Kamu sudah menyelesaikan **Part 2: Clean Code & Deep Dive**!

### 📚 Apa yang Sudah Dipelajari:

✅ Clean code principles  
✅ Best practices dalam coding  
✅ Deep understanding tentang `while(true)`  
✅ Visualisasi eksekusi program step-by-step  
✅ Perbedaan 2 pendekatan (flag-based vs early return)  
✅ Kapan menggunakan pendekatan yang mana  
✅ Decision making dalam pemilihan approach  

### 🚀 Lanjut ke Part 3:

Di **Part 3**, kamu akan mendapat:
- Kesimpulan dan pembelajaran keseluruhan
- Tips untuk challenge berikutnya
- Referensi dan resources tambahan
- Checklist untuk self-assessment

**Siap lanjut ke Part 3?** 💪

---

> **📌 Catatan:**  
> Simpan dokumentasi ini sebagai referensi! Kedua pendekatan punya use case masing-masing.

> **💭 Fun Fact:**  
> Di dunia programming, tidak ada "satu cara yang paling benar". Yang ada adalah "cara yang paling sesuai dengan konteks"!

> **🎯 Challenge:**  
> Coba implementasikan kedua pendekatan untuk problem lain! Practice makes perfect! 🔥
