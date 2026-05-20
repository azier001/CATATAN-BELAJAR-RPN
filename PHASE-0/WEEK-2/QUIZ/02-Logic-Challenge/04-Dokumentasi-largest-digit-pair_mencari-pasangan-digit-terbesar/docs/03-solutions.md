# 💻 4 Alternatif Solusi

> Sekarang kita udah punya kode yang benar, yuk lihat **berbagai cara lain** untuk solve masalah yang sama! Setiap cara punya kelebihan dan kekurangannya.

---

## 📋 Overview Alternatif

1. **Classic For Loop** - Imperative style (paling mudah)
2. **Functional Programming** - Declarative style (paling elegant)
3. **Array Building** - Hybrid approach (paling flexible)
4. **Hybrid Modern** - Best of both worlds ⭐ **RECOMMENDED**

---

## 🥇 Alternatif 1: Classic For Loop (Imperative)

### Kode

```javascript
function largestDigitPair(num) {
  const digits = String(num);
  let largest = 0;
  
  for (let i = 0; i < digits.length - 1; i++) {
    const pair = Number(digits[i] + digits[i + 1]);
    if (pair > largest) {
      largest = pair;
    }
  }
  
  return largest;
}
```

### 📝 Algoritma Step-by-Step

1. **Konversi angka ke string** agar bisa akses per digit
2. **Inisialisasi `largest = 0`** untuk nyimpen nilai terbesar
3. **Loop dari index 0 sampai sebelum digit terakhir**
4. **Setiap iterasi:**
   - Gabungkan 2 digit berurutan (concatenation)
   - Konversi ke number dengan `Number()`
5. **Bandingkan dengan `largest`** menggunakan if statement
6. **Update `largest`** jika pair lebih besar
7. **Return `largest`** setelah loop selesai

### 🎯 Kapan Digunakan?

✅ **Gunakan ini kalau:**
- Kamu masih pemula dan baru belajar JavaScript
- Tim kamu punya anggota dengan berbagai level skill
- Prioritas adalah code yang mudah dipahami semua orang
- Butuh performance optimal (bisa early exit dengan `break`)

### ✅ Kelebihan

- **Sangat mudah dibaca** - Flow jelas dari atas ke bawah
- **Gampang di-debug** - Bisa console.log di setiap step
- **Performance terbaik** - Tidak ada overhead method call
- **Fleksibel** - Mudah modifikasi logic kalau butuh
- **Universal** - Semua programmer JS pasti paham

### ❌ Kekurangan

- **Lebih verbose** - Butuh lebih banyak baris code
- **Manual tracking** - Harus manage variable `largest` dan `i` sendiri
- **Imperative style** - Fokus pada "bagaimana" bukan "apa"

### 💡 Best For

**Pemula dan production code yang perlu maintainability tinggi!**

---

## 🚀 Alternatif 2: Functional Programming (Declarative)

### Kode

```javascript
function largestDigitPairFunctional(num) {
  const digits = String(num);
  
  return Array.from({ length: digits.length - 1 }, (_, i) => 
    Number(digits[i] + digits[i + 1])
  ).reduce((max, pair) => Math.max(max, pair), 0);
}
```

### 📝 Algoritma Step-by-Step

1. **Konversi angka ke string**
2. **Buat array berisi semua pasangan digit:**
   - `Array.from()` bikin array dengan panjang = jumlah digit - 1
   - Setiap elemen: gabung 2 digit → konversi ke number
   - Hasil: array `[64, 41, 15, 57, 73]`
3. **Reduce array untuk cari maksimum:**
   - Mulai dari nilai awal 0
   - Bandingkan setiap pair dengan max menggunakan `Math.max()`
   - Akumulasi nilai terbesar
4. **Return hasil reduce** (pasangan terbesar)

### 🔍 Breakdown Detail

```javascript
// Step 1: Buat array pairs
Array.from({ length: 5 }, (_, i) => Number(digits[i] + digits[i + 1]))
// Hasil: [64, 41, 15, 57, 73]

// Step 2: Reduce untuk cari max
[64, 41, 15, 57, 73].reduce((max, pair) => Math.max(max, pair), 0)
// Iterasi 1: Math.max(0, 64)  = 64
// Iterasi 2: Math.max(64, 41) = 64
// Iterasi 3: Math.max(64, 15) = 64
// Iterasi 4: Math.max(64, 57) = 64
// Iterasi 5: Math.max(64, 73) = 73 ✅
```

### 🎯 Kapan Digunakan?

✅ **Gunakan ini kalau:**
- Codebase kamu sudah pakai functional programming style
- Tim kamu experienced dengan FP concepts
- Prioritas adalah code yang concise dan elegant
- Tidak butuh early exit (proses semua data)

### ✅ Kelebihan

- **Sangat concise** - One-liner chain yang elegant
- **Declarative** - Fokus pada "apa" yang mau dicapai
- **Immutable** - Tidak ada mutation variable
- **Composable** - Mudah digabung dengan transformasi lain
- **Modern style** - Sesuai trend JavaScript modern

### ❌ Kekurangan

- **Sulit dipahami pemula** - Butuh paham `Array.from()` dan `reduce()`
- **Performance overhead** - Buat array dulu, baru proses
- **Debugging lebih susah** - Tidak bisa console.log di tengah chain
- **Tidak bisa early exit** - Harus proses semua data

### 💡 Best For

**Tim experienced yang prioritaskan code elegance dan consistency dengan FP style!**

---

## 🔄 Alternatif 3: Array Building + Math.max Spread

### Kode

```javascript
function largestDigitPairArray(num) {
  const digits = String(num);
  const pairs = [];
  
  for (let i = 0; i < digits.length - 1; i++) {
    pairs.push(Number(digits.slice(i, i + 2)));
  }
  
  return Math.max(...pairs);
}
```

### 📝 Algoritma Step-by-Step

1. **Konversi angka ke string**
2. **Buat array kosong** untuk nampung pasangan
3. **Loop dari index 0 sampai sebelum digit terakhir**
4. **Setiap iterasi:**
   - Slice 2 digit berurutan dengan `.slice(i, i + 2)`
   - Konversi ke number
   - Push ke array `pairs`
5. **Setelah loop selesai, array `pairs` = [64, 41, 15, 57, 73]**
6. **Gunakan `Math.max(...pairs)`** dengan spread operator
7. **Return hasil Math.max**

### 🔍 Breakdown Detail

```javascript
// Step 1-4: Build array
const pairs = [];
for (let i = 0; i < 5; i++) {
  pairs.push(Number(digits.slice(i, i + 2)));
}
// pairs = [64, 41, 15, 57, 73]

// Step 5-6: Find max dengan spread
Math.max(...pairs)
// Sama dengan: Math.max(64, 41, 15, 57, 73)
// Return: 73 ✅
```

### 🎯 Kapan Digunakan?

✅ **Gunakan ini kalau:**
- Butuh flexibility (misal nanti perlu semua pairs untuk hal lain)
- Mau separation of concerns (collect data dulu, baru proses)
- Balance antara readable dan modern
- Data size reasonable (tidak terlalu besar)

### ✅ Kelebihan

- **Separation of concerns** - Collect vs Find terpisah jelas
- **Math.max sangat clean** - Spread operator elegant
- **Flexible** - Array pairs bisa dipakai untuk hal lain
- **Easy to modify** - Mau sort, filter, map? Tinggal tambahin
- **Readable** - Balance antara imperative dan functional

### ❌ Kekurangan

- **Extra memory** - Harus simpan array `pairs`
- **Two-pass** - Loop dulu, baru Math.max
- **Spread operator limitation** - Error kalau array terlalu besar (>100k elements)
- **Tidak optimal** - Kalau cuma butuh max, kenapa simpan semua?

### 💡 Best For

**Situasi di mana kamu mungkin butuh data intermediate untuk proses lain!**

---

## ⚡ Alternatif 4: Hybrid Modern (parseInt + Math.max) ⭐ RECOMMENDED

### Kode

```javascript
function largestDigitPairModern(num) {
  const digits = String(num);
  let largest = 0;
  
  for (let i = 0; i < digits.length - 1; i++) {
    const pair = parseInt(digits[i] + digits[i + 1]);
    largest = Math.max(largest, pair);
  }
  
  return largest;
}
```

### 📝 Algoritma Step-by-Step

1. **Konversi angka ke string**
2. **Inisialisasi `largest = 0`**
3. **Loop dari index 0 sampai sebelum digit terakhir**
4. **Setiap iterasi:**
   - Gabungkan 2 digit berurutan
   - Parse ke integer dengan `parseInt()`
   - Update `largest` dengan `Math.max()` (tanpa if!)
5. **Return `largest`** setelah loop selesai

### 🔍 Kenapa Ini "Hybrid"?

Approach ini **menggabungkan best of both worlds:**

**Dari Imperative:**
- ✅ Loop manual (performant & readable)
- ✅ Variable tracking (flexible)

**Dari Functional:**
- ✅ `Math.max()` instead of if (cleaner)
- ✅ `parseInt()` (more explicit)

### 🎯 Kapan Digunakan?

✅ **Gunakan ini kalau:**
- Mau balance antara performance dan elegance
- Tim kamu comfortable dengan modern JS utilities
- Mau avoid if statement tapi tetap pakai loop
- Ini adalah **RECOMMENDED approach** untuk most cases!

### ✅ Kelebihan

- **Best balance** - Combine kelebihan imperative & functional
- **Clean & concise** - Tidak pakai if statement
- **Performant** - Loop manual tanpa overhead
- **Modern** - Pakai utilities seperti Math.max
- **parseInt explicit** - Lebih jelas intent-nya untuk parsing
- **Readable** - Mudah dipahami bahkan untuk yang baru belajar

### ❌ Kekurangan

- **Sedikit lebih lambat dari if** - Math.max punya overhead kecil
- **Tidak bisa early exit** - Harus loop sampai selesai
- Honestly, kekurangannya minimal! 😄

### 💡 Best For

**Hampir semua situasi! Ini sweet spot antara simplicity, performance, dan modern style!**

---

## 📊 Ringkasan 4 Alternatif

| Alternatif | Style | Lines | Complexity | Best For |
|-----------|-------|-------|------------|----------|
| **1. Classic For Loop** | Imperative | 10 | ⭐ Easy | Pemula, Production |
| **2. Functional** | Declarative | 5 | ⭐⭐⭐ Hard | FP Codebase |
| **3. Array Building** | Hybrid | 9 | ⭐⭐ Medium | Flexibility needed |
| **4. Hybrid Modern** | Best of Both | 9 | ⭐⭐ Medium | **Most cases!** ⭐ |

---

## 🎯 Decision Tree: Pilih Alternatif Mana?

```
Apakah kamu pemula?
├─ Yes → Alternatif 1 (Classic For Loop)
└─ No
   ├─ Butuh data intermediate untuk proses lain?
   │  └─ Yes → Alternatif 3 (Array Building)
   └─ No
      ├─ Codebase pakai FP style?
      │  └─ Yes → Alternatif 2 (Functional)
      └─ No → Alternatif 4 (Hybrid Modern) ⭐
```

---

## 💡 Key Takeaways

1. **Tidak ada solusi yang "paling benar"** - Semua tergantung context
2. **Readability > Performance** - Untuk most cases
3. **Konsistensi penting** - Ikuti style yang sudah ada di codebase
4. **Pahami trade-offs** - Setiap approach punya kelebihan dan kekurangan
5. **Start simple, optimize later** - Jangan premature optimization

---

## 🚀 Next Steps

Sekarang kamu sudah tahu 4 cara berbeda!

**Next:** Lihat common mistakes dan cara debugging di file berikutnya!

---

**Choose wisely, code happily! 💻✨**
