# 📋 Toggle Case — Ringkasan Algoritma

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          📋 RINGKASAN ALGORITMA — COMPLETE REFERENCE 📋                 ║
║       for...of · split+map+join · replace+regex · char comparison        ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Versi](https://img.shields.io/badge/Versi-5%20Solusi-success?style=for-the-badge)

---

## 🎯 Tujuan

- ✅ Ringkasan challenge dan kriteria dalam satu tempat
- ✅ Ringkasan algoritma semua versi secara detail
- ✅ Quick reference untuk review atau ujian

---

# 🧩 DESKRIPSI CHALLENGE

📝 **Deskripsi**
Diberikan sebuah function `toggleCase(str)` yang menerima satu parameter string.

🎯 **Tujuan**
Function akan mengembalikan string baru di mana setiap huruf kecil diubah menjadi huruf besar, dan setiap huruf besar diubah menjadi huruf kecil. Karakter selain huruf tidak diubah.

📌 **Contoh:** `str = 'Hello World'`
⚡ **Proses:** `H→h`, `e→E`, `l→L`, `l→L`, `o→O`, ` → `, `W→w`, `o→O`, `r→R`, `l→L`, `d→D`
✅ **Result:** `'hELLO wORLD'`

## 📐 Kriteria

```
  STEP 1 ──▶  Iterasi setiap karakter dari string
      │
  STEP 2 ──▶  Jika huruf kecil → ubah ke uppercase
      │       Jika huruf besar → ubah ke lowercase
      │       Selain huruf → biarkan as-is
      │
  STEP 3 ──▶  Return string baru hasil toggle
```

---

## 📊 Contoh-contoh

### 🔢 `str = 'Hello World'`
> **Tujuan:** Toggle setiap huruf, spasi tidak diubah

| Char | Jenis | Output |
|------|-------|--------|
| `H` | Huruf besar | `h` |
| `e` | Huruf kecil | `E` |
| `l` | Huruf kecil | `L` |
| `l` | Huruf kecil | `L` |
| `o` | Huruf kecil | `O` |
| ` ` | Spasi | ` ` |
| `W` | Huruf besar | `w` |
| `o` | Huruf kecil | `O` |
| `r` | Huruf kecil | `R` |
| `l` | Huruf kecil | `L` |
| `d` | Huruf kecil | `D` |

```
RETURN  →  'hELLO wORLD'
```

---

### 🔢 `str = '001-A-3-5TrdYW'`
> **Tujuan:** Angka dan simbol tidak diubah, hanya huruf yang di-toggle

| Char | Jenis | Output |
|------|-------|--------|
| `0` | Angka | `0` |
| `0` | Angka | `0` |
| `1` | Angka | `1` |
| `-` | Simbol | `-` |
| `A` | Huruf besar | `a` |
| `-` | Simbol | `-` |
| `3` | Angka | `3` |
| `-` | Simbol | `-` |
| `5` | Angka | `5` |
| `T` | Huruf besar | `t` |
| `r` | Huruf kecil | `R` |
| `d` | Huruf kecil | `D` |
| `Y` | Huruf besar | `y` |
| `W` | Huruf besar | `w` |

```
RETURN  →  '001-a-3-5tRDyw'
```

---

### 🔢 `str = ''` *(empty string)*
> **Tujuan:** Edge case — string kosong

```
RETURN  →  ''
```

---

### 🔢 `str = '12345'` *(only numbers)*
> **Tujuan:** Edge case — tidak ada huruf sama sekali

```
RETURN  →  '12345'
```

---

> 💡 **Aturan Sederhana:** Huruf kecil → BESAR, huruf besar → kecil, selain huruf → tetap sama.

---

## ⚡ Quick Test — Tulis Fungsinya Sendiri Dulu, Lalu Test Satu per Satu!

> 💡 Tulis function `toggleCase` kamu sendiri terlebih dahulu, baru paste test di bawah ini satu per satu untuk ngecek hasilnya.

```javascript
// Test 1 — Normal: mixed case
console.log(toggleCase('Hello World')); // 'hELLO wORLD'
```

```javascript
// Test 2 — Alternating case
console.log(toggleCase('I aM aLAY')); // 'i Am Alay'
```

```javascript
// Test 3 — Sentence with punctuation
console.log(toggleCase('My Name is Bond!!')); // 'mY nAME IS bOND!!'
```

```javascript
// Test 4 — Numbers and symbols
console.log(toggleCase('001-A-3-5TrdYW')); // '001-a-3-5tRDyw'
```

```javascript
// Test 5 — Edge case: empty string
console.log(toggleCase('')); // ''
```

```javascript
// Test 6 — Edge case: only numbers
console.log(toggleCase('12345')); // '12345'
```

```javascript
// Test 7 — Edge case: only symbols
console.log(toggleCase('!!!!')); // '!!!!'
```

---

═══════════════════════════════════════════════════════════════════════

# 🔄 VERSI 1: FOR...OF + REGEX (HASIL REFACTORING)

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Pemula%20%7C%20Debugging-green?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative-orange?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function toggleCase(str) {
  let result = ''

  for (const char of str) {
    if (/[a-z]/.test(char)) {
      result += char.toUpperCase()
    } else {
      result += char.toLowerCase()
    }
  }

  return result
}
```

</details>

### **Konsep Inti:**
```
Inisialisasi result sebagai string kosong
Loop setiap char dari str
  Jika char adalah huruf kecil (a-z) → ubah ke uppercase, tambahkan ke result
  Selain itu → ubah ke lowercase, tambahkan ke result
Return result
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function toggleCase(str)`
   * `str` — string input yang hurufnya akan di-toggle
   * **return** — string baru hasil toggle case

#### 🔵 Di Luar Loop:

2. **Inisialisasi `result = ''`**
   - Dideklarasikan **sebelum loop** agar bisa diakses dan diupdate sepanjang iterasi
   - Nilai awal string kosong karena belum ada karakter yang diproses

#### 🔄 Di Dalam Loop `for (const char of str)`:

3. **Iterasi setiap karakter**
   - `for (const char of str)` — iterasi karakter satu per satu dari `str`
   - Setiap iterasi, `char` berisi satu karakter

4. **`if (/[a-z]/.test(char))` — cek apakah `char` adalah huruf kecil**
   - `/[a-z]/` → regex pattern untuk huruf kecil a sampai z
   - `.test(char)` → return `true` jika `char` cocok dengan pattern
   - Jika `true` → masuk blok `if`
   - Jika `false` (huruf besar, angka, simbol) → masuk blok `else`

5. **`result += char.toUpperCase()`** *(di dalam `if`)*
   - `char` huruf kecil → diubah ke huruf besar
   - Ditambahkan ke `result`

6. **`result += char.toLowerCase()`** *(di dalam `else`)*
   - `char` huruf besar → diubah ke huruf kecil
   - Angka & simbol → `.toLowerCase()` tidak mengubah apapun, tetap ditambahkan ke `result`

#### 🔵 Di Luar Loop:

7. **`return result`**
   - Setelah loop selesai, `result` sudah berisi string dengan huruf yang sudah di-toggle
   - Return nilai tersebut sebagai hasil akhir

### **Visualisasi untuk `str = 'Hello'`:**
```
┌─────────────────────────────────────────────────────────────┐
│  result = ''                                                │
│                                                             │
│  char='H' → /[a-z]/.test('H') = false                      │
│             'H'.toLowerCase() = 'h' → result = 'h'         │
│                                                             │
│  char='e' → /[a-z]/.test('e') = true                       │
│             'e'.toUpperCase() = 'E' → result = 'hE'        │
│                                                             │
│  char='l' → /[a-z]/.test('l') = true                       │
│             'l'.toUpperCase() = 'L' → result = 'hEL'       │
│                                                             │
│  char='l' → /[a-z]/.test('l') = true                       │
│             'l'.toUpperCase() = 'L' → result = 'hELL'      │
│                                                             │
│  char='o' → /[a-z]/.test('o') = true                       │
│             'o'.toUpperCase() = 'O' → result = 'hELLO'     │
│                                                             │
│  return 'hELLO' ✅                                          │
└─────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- 🔍 **Regex `/[a-z]/`** — pattern untuk mencocokkan huruf kecil a-z
- 📝 **`.test(char)`** — return `true` jika char cocok dengan regex
- 🔤 **`.toUpperCase()`** — ubah huruf ke kapital
- 🔡 **`.toLowerCase()`** — ubah huruf ke kecil
- 📦 **`result`** — variabel penampung string hasil

### **Kapan Pakai:**
- ✅ Belajar dan debugging
- ✅ Butuh kode yang paling mudah dibaca
- ✅ Ketika readability > compactness

### **Pitfalls (Jebakan Umum):**

**1) ❌ Menggunakan charCodeAt (magic numbers)**
```javascript
// ❌ KURANG READABLE — harus hafal ASCII table
const code = char.charCodeAt(0)
if (code >= 97 && code <= 122)

// ✅ LEBIH READABLE — langsung paham maksudnya
if (/[a-z]/.test(char))
```

**2) ❌ Kondisi if yang terlalu luas**
```javascript
// ❌ KURANG EKSPLISIT — true untuk huruf kecil, angka, dan simbol sekaligus
if (char === char.toLowerCase())

// ✅ EKSPLISIT — hanya true untuk huruf kecil
if (/[a-z]/.test(char))
```

**3) ❌ Mendeklarasikan result di dalam loop**
```javascript
// ❌ SALAH — result direset setiap iterasi
for (const char of str) {
  let result = ''        // direset tiap iterasi!
  result += char.toUpperCase()
}

// ✅ BENAR — result dideklarasikan di luar loop
let result = ''
for (const char of str) {
  result += char.toUpperCase()
}
```

### **💡 Insight Penting:**

> **Kenapa regex `/[a-z]/` lebih baik dari `charCodeAt`?**
> Keduanya menghasilkan hasil yang sama. Tapi `/[a-z]/` jauh lebih readable — siapapun langsung paham bahwa kita mengecek huruf kecil a sampai z, tanpa perlu tahu nilai ASCII-nya.

> **Kenapa angka dan simbol tidak perlu kondisi khusus?**
> Karena `.toLowerCase()` pada angka dan simbol tidak mengubah apapun — hasilnya tetap sama. Jadi aman dimasukkan ke blok `else`.

---

═══════════════════════════════════════════════════════════════════════

# 🔀 VERSI 2: SPLIT + MAP + JOIN + IF/ELSE

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Functional%20Style%20%7C%20Readable-purple?style=flat-square)
![Style](https://img.shields.io/badge/Style-Functional-9cf?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function toggleCase(str) {
  return str.split('').map(char => {
    if (/[a-z]/.test(char)) {
      return char.toUpperCase()
    }

    return char.toLowerCase()
  }).join('')
}
```

</details>

### **Konsep Inti:**
```
Split str menjadi array of characters
Map setiap char:
  Jika char adalah huruf kecil (a-z) → return uppercase (early return)
  Selain itu → return lowercase
Join array kembali menjadi string
Return hasilnya
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function toggleCase(str)`
   * `str` — string input yang hurufnya akan di-toggle
   * **return** — string baru hasil toggle case

#### 🔵 Tahap 1 — `str.split('')`:

2. **Pecah string menjadi array**
   - `str.split('')` — memecah setiap karakter menjadi elemen array
   - String kosong `''` sebagai separator artinya pecah per karakter
   - Contoh: `'Hello'` → `['H', 'e', 'l', 'l', 'o']`

#### 🔄 Tahap 2 — `.map(char => { ... })`:

3. **Map setiap karakter**
   - `.map()` — iterasi setiap elemen array, return nilai baru untuk setiap elemen
   - `char` — setiap karakter yang sedang diproses

4. **`if (/[a-z]/.test(char))` — cek apakah `char` adalah huruf kecil**
   - Jika `true` → masuk blok `if`
   - Jika `false` → lewati blok `if`, langsung ke return berikutnya

5. **`return char.toUpperCase()`** *(di dalam `if`)*
   - Early return — langsung keluar dari callback, tidak lanjut ke baris berikutnya

6. **`return char.toLowerCase()`** *(di luar `if`)*
   - Hanya dieksekusi jika kondisi `if` bernilai `false`

#### 🔵 Tahap 3 — `.join('')`:

7. **Gabungkan array kembali menjadi string**
   - `.join('')` — menggabungkan semua elemen array menjadi satu string
   - String kosong `''` sebagai separator artinya tidak ada pemisah antar karakter
   - Contoh: `['h', 'E', 'L', 'L', 'O']` → `'hELLO'`

#### 🔵 Tahap 4:

8. **Return**
   - Seluruh operasi `split().map().join()` langsung di-return dalam satu ekspresi
   - Tidak membutuhkan variabel sementara seperti `result` di versi `for...of`

### **Visualisasi untuk `str = 'Hello'`:**
```
┌─────────────────────────────────────────────────────────────┐
│  Step 1 - split:                                            │
│  'Hello'.split('') → ['H', 'e', 'l', 'l', 'o']            │
│                                                             │
│  Step 2 - map:                                              │
│  'H' → /[a-z]/.test('H') = false → toLowerCase() → 'h'    │
│  'e' → /[a-z]/.test('e') = true  → toUpperCase() → 'E'    │
│  'l' → /[a-z]/.test('l') = true  → toUpperCase() → 'L'    │
│  'l' → /[a-z]/.test('l') = true  → toUpperCase() → 'L'    │
│  'o' → /[a-z]/.test('o') = true  → toUpperCase() → 'O'    │
│  → ['h', 'E', 'L', 'L', 'O']                               │
│                                                             │
│  Step 3 - join:                                             │
│  ['h', 'E', 'L', 'L', 'O'].join('') → 'hELLO'             │
│                                                             │
│  return 'hELLO' ✅                                          │
└─────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- ✂️ **`.split('')`** — pecah string menjadi array per karakter
- 🔄 **`.map()`** — iterasi array, return nilai baru tiap elemen
- 🔗 **`.join('')`** — gabungkan array menjadi string
- ↩️ **Early return** — return langsung di dalam `if`, tanpa `else`

### **Kapan Pakai:**
- ✅ Familiar dengan functional programming
- ✅ Ingin kode lebih modern tanpa variabel sementara
- ✅ Tim yang terbiasa dengan method chaining

### **Pitfalls (Jebakan Umum):**

**1) ❌ Split dengan separator yang salah**
```javascript
// ❌ SALAH — memecah per kata, bukan per karakter
str.split(' ')  // ['Hello', 'World']

// ✅ BENAR — memecah per karakter
str.split('')   // ['H', 'e', 'l', 'l', 'o', ...]
```

**2) ❌ Lupa return di dalam map**
```javascript
// ❌ SALAH — map tidak return apapun, hasilnya array of undefined
str.split('').map(char => {
  if (/[a-z]/.test(char)) {
    char.toUpperCase() // lupa return!
  }
  char.toLowerCase()  // lupa return!
})

// ✅ BENAR
str.split('').map(char => {
  if (/[a-z]/.test(char)) {
    return char.toUpperCase()
  }
  return char.toLowerCase()
})
```

**3) ❌ Join dengan separator yang salah**
```javascript
// ❌ SALAH — hasilnya ada koma antar karakter
['h','E','L','L','O'].join()    // 'h,E,L,L,O'

// ✅ BENAR — tidak ada pemisah
['h','E','L','L','O'].join('')  // 'hELLO'
```

### **💡 Insight Penting:**

> **Apa bedanya `map` vs `for...of`?**
> Keduanya melakukan iterasi, tapi `map` adalah **pendekatan fungsional** yang langsung return array baru tanpa perlu variabel sementara seperti `result`. Lebih ringkas dan modern.

> **Kenapa pakai early return pattern?**
> Daripada `if/else`, early return membuat kode lebih flat dan mudah dibaca — ketika kondisi `if` terpenuhi, fungsi langsung return tanpa perlu melihat sisa kode.

---

═══════════════════════════════════════════════════════════════════════

# 🔀 VERSI 3: SPLIT + MAP + JOIN + TERNARY

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Ringkas%20%7C%20Familiar%20Ternary-blue?style=flat-square)
![Style](https://img.shields.io/badge/Style-Functional%20%2B%20Ternary-9cf?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function toggleCase(str) {
  return str.split('').map(char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()).join('')
}
```

</details>

### **Konsep Inti:**
```
Split str menjadi array of characters
Map setiap char dengan ternary:
  char huruf kecil ? return uppercase : return lowercase
Join array kembali menjadi string
Return hasilnya
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function toggleCase(str)`
   * `str` — string input yang hurufnya akan di-toggle
   * **return** — string baru hasil toggle case

#### 🔵 Tahap 1 — `str.split('')`:

2. **Pecah string menjadi array**
   - `str.split('')` — memecah setiap karakter menjadi elemen array
   - Contoh: `'Hello'` → `['H', 'e', 'l', 'l', 'o']`

#### 🔄 Tahap 2 — `.map(char => ternary)`:

3. **Map setiap karakter dengan ternary**
   - `char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()`
   - Arrow function **tanpa kurung kurawal `{}`** dan **tanpa `return`** — karena hanya satu ekspresi
   - Ternary langsung di-return secara implicit

4. **Anatomi ternary operator**
   ```
   kondisi               ? nilai jika true        : nilai jika false
   /[a-z]/.test(char)   ? char.toUpperCase()     : char.toLowerCase()
   ```
   - `/[a-z]/.test(char)` → cek apakah `char` huruf kecil
   - Jika `true` → `char.toUpperCase()`
   - Jika `false` → `char.toLowerCase()`

#### 🔵 Tahap 3 — `.join('')`:

5. **Gabungkan array kembali menjadi string**
   - `.join('')` — menggabungkan semua elemen array menjadi satu string tanpa pemisah
   - Contoh: `['h', 'E', 'L', 'L', 'O']` → `'hELLO'`

#### 🔵 Tahap 4:

6. **Return**
   - Seluruh operasi `split().map().join()` langsung di-return dalam satu baris
   - Tidak membutuhkan variabel sementara

### **Visualisasi untuk `str = 'Hello'`:**
```
┌─────────────────────────────────────────────────────────────┐
│  Step 1 - split:                                            │
│  'Hello'.split('') → ['H', 'e', 'l', 'l', 'o']            │
│                                                             │
│  Step 2 - map dengan ternary:                               │
│  'H' → /[a-z]/.test('H') = false → toLowerCase() → 'h'    │
│  'e' → /[a-z]/.test('e') = true  → toUpperCase() → 'E'    │
│  'l' → /[a-z]/.test('l') = true  → toUpperCase() → 'L'    │
│  'l' → /[a-z]/.test('l') = true  → toUpperCase() → 'L'    │
│  'o' → /[a-z]/.test('o') = true  → toUpperCase() → 'O'    │
│  → ['h', 'E', 'L', 'L', 'O']                               │
│                                                             │
│  Step 3 - join:                                             │
│  ['h', 'E', 'L', 'L', 'O'].join('') → 'hELLO'             │
│                                                             │
│  return 'hELLO' ✅                                          │
└─────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- ✂️ **`.split('')`** — pecah string menjadi array per karakter
- 🔄 **`.map()`** — iterasi array, return nilai baru tiap elemen
- ❓ **Ternary operator** — `kondisi ? true : false`
- 🔄 **Implicit return** — arrow function tanpa `{}` auto return ekspresi
- 🔗 **`.join('')`** — gabungkan array menjadi string

### **Kapan Pakai:**
- ✅ Ingin kode ringkas dalam satu baris
- ✅ Familiar dengan ternary operator
- ✅ Kondisi sederhana tanpa banyak cabang

### **Pitfalls (Jebakan Umum):**

**1) ❌ Pakai kurung kurawal tapi lupa return**
```javascript
// ❌ SALAH — ada kurung kurawal tapi tidak ada return, hasilnya undefined
str.split('').map(char => { /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase() }).join('')

// ✅ BENAR — tanpa kurung kurawal, implicit return
str.split('').map(char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()).join('')
```

**2) ❌ Urutan true/false ternary terbalik**
```javascript
// ❌ SALAH — huruf kecil malah jadi lowercase
/[a-z]/.test(char) ? char.toLowerCase() : char.toUpperCase()

// ✅ BENAR
/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()
```

**3) ❌ Ternary bersarang — terlalu kompleks**
```javascript
// ❌ HINDARI — susah dibaca
/[a-z]/.test(char) ? char.toUpperCase() : /[A-Z]/.test(char) ? char.toLowerCase() : char

// ✅ LEBIH BAIK — pakai if/else jika kondisi kompleks
if (/[a-z]/.test(char)) return char.toUpperCase()
if (/[A-Z]/.test(char)) return char.toLowerCase()
return char
```

### **💡 Insight Penting:**

> **Kapan pakai ternary, kapan pakai if/else?**
> Ternary cocok untuk kondisi **sederhana satu baris**. Jika kondisinya kompleks atau punya lebih dari dua cabang, `if/else` jauh lebih readable dan lebih direkomendasikan.

> **Apa itu implicit return?**
> Arrow function tanpa kurung kurawal `{}` secara otomatis me-return ekspresi di dalamnya. `char => char.toUpperCase()` sama dengan `char => { return char.toUpperCase() }`.

---

═══════════════════════════════════════════════════════════════════════

# 🔀 VERSI 4: REPLACE + REGEX

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Ringkas%20%7C%20Familiar%20Regex-orange?style=flat-square)
![Style](https://img.shields.io/badge/Style-Regex-red?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function toggleCase(str) {
  return str.replace(/[a-zA-Z]/g, (char) => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())
}
```

</details>

### **Konsep Inti:**
```
Replace setiap huruf (a-z dan A-Z) di dalam str
  Menggunakan callback function:
    Jika char huruf kecil → return uppercase
    Selain itu → return lowercase
Return hasilnya
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function toggleCase(str)`
   * `str` — string input yang hurufnya akan di-toggle
   * **return** — string baru hasil toggle case

#### 🔵 Anatomi `str.replace(regex, callback)`:

2. **Regex pattern `/[a-zA-Z]/g`**
   - `/[a-zA-Z]/` → cocokkan semua huruf kecil `a-z` **dan** huruf besar `A-Z`
   - `/g` → flag **global**, artinya proses **semua** karakter yang cocok, bukan hanya yang pertama
   - Angka dan simbol **tidak cocok** → otomatis dilewati, tidak diubah

3. **Callback function `(char) => ...`**
   - Setiap karakter yang cocok dengan regex akan dilempar ke callback sebagai `char`
   - Nilai yang di-return callback akan **menggantikan** karakter aslinya
   - Angka dan simbol tidak masuk callback sama sekali — langsung dibiarkan as-is

#### 🔄 Di Dalam Callback:

4. **Ternary operator**
   ```
   kondisi               ? nilai jika true        : nilai jika false
   /[a-z]/.test(char)   ? char.toUpperCase()     : char.toLowerCase()
   ```
   - `/[a-z]/.test(char)` → cek apakah `char` huruf kecil
   - Jika `true` → return `char.toUpperCase()`
   - Jika `false` (pasti huruf besar karena regex sudah menyaring) → return `char.toLowerCase()`

#### 🔵 Di Luar Callback:

5. **Return**
   - `str.replace()` langsung return string baru hasil penggantian
   - Tidak membutuhkan variabel sementara maupun `split` dan `join`

### **Visualisasi untuk `str = 'Hi-1!'`:**
```
┌─────────────────────────────────────────────────────────────┐
│  Regex /[a-zA-Z]/g mencocokkan: 'H', 'i'                   │
│  Angka & simbol dilewati otomatis                           │
│                                                             │
│  char='H' → /[a-z]/.test('H') = false                      │
│             toLowerCase() → 'h'                            │
│                                                             │
│  char='i' → /[a-z]/.test('i') = true                       │
│             toUpperCase() → 'I'                            │
│                                                             │
│  '-' → tidak cocok regex → as-is → '-'                      │
│  '1' → tidak cocok regex → as-is → '1'                      │
│  '!' → tidak cocok regex → as-is → '!'                      │
│                                                             │
│  return 'hI-1!' ✅                                          │
└─────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- 🔍 **`.replace(regex, callback)`** — replace karakter yang cocok dengan hasil callback
- 🌐 **Flag `/g`** — global, proses semua karakter yang cocok
- 📋 **`/[a-zA-Z]/`** — cocokkan semua huruf kecil dan besar
- ❓ **Ternary operator** — `kondisi ? true : false`

### **Kapan Pakai:**
- ✅ Familiar dengan regex
- ✅ Ingin kode paling ringkas
- ✅ Tidak ingin handle angka/simbol secara manual

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa flag `/g` — hanya karakter pertama yang diproses**
```javascript
// ❌ SALAH — hanya huruf pertama yang di-replace
str.replace(/[a-zA-Z]/, (char) => ...)

// ✅ BENAR — semua huruf di-replace
str.replace(/[a-zA-Z]/g, (char) => ...)
```

**2) ❌ Regex terlalu sempit — huruf besar tidak tertangkap**
```javascript
// ❌ SALAH — huruf besar tidak masuk callback, tidak diubah ke lowercase
str.replace(/[a-z]/g, (char) => ...)

// ✅ BENAR — semua huruf (kecil & besar) tertangkap
str.replace(/[a-zA-Z]/g, (char) => ...)
```

**3) ❌ Lupa return di dalam callback**
```javascript
// ❌ SALAH — semua huruf jadi undefined
str.replace(/[a-zA-Z]/g, (char) => {
  /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase() // lupa return!
})

// ✅ BENAR — implicit return dengan ternary
str.replace(/[a-zA-Z]/g, (char) => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())
```

### **💡 Insight Penting:**

> **Kenapa versi `replace` tidak butuh `split` dan `join`?**
> Karena `replace` bekerja langsung pada string dan return string baru — tidak perlu konversi ke array dulu.

> **Apa keunggulan utama versi ini?**
> Angka dan simbol tidak diproses sama sekali — regex `/[a-zA-Z]/g` langsung menyaring, sehingga callback hanya menerima huruf.

---

═══════════════════════════════════════════════════════════════════════

# ⚠️ VERSI 5: CHAR COMPARISON (TIDAK DIREKOMENDASIKAN)

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Jangan%20Dipakai-red?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative-orange?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-❌%20No-red?style=flat-square)

> ⛔ **Versi ini TIDAK DIREKOMENDASIKAN** — outputnya benar, tapi kondisi `if`-nya kurang eksplisit dan bisa menyesatkan pembaca kode.

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function swapCase(sentence) {
  let transformedText = '';

  for (const character of sentence) {
    if (character === character.toLowerCase()) {
      transformedText += character.toUpperCase();
    } else {
      transformedText += character.toLowerCase();
    }
  }

  return transformedText;
}
```

</details>

### **Konsep Inti:**
```
Inisialisasi transformedText sebagai string kosong
Loop setiap character dari sentence
  Jika character === character.toLowerCase() → ubah ke uppercase (TERLALU LUAS!)
  Selain itu → ubah ke lowercase
  Tambahkan ke transformedText
Return transformedText
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function swapCase(sentence)`
   * `sentence` — string input yang hurufnya akan di-toggle
   * **return** — string baru hasil toggle case

#### 🔵 Di Luar Loop:

2. **Inisialisasi `transformedText = ''`**
   - Dideklarasikan **sebelum loop** agar bisa diakses dan diupdate sepanjang iterasi
   - Nilai awal string kosong karena belum ada karakter yang diproses

#### 🔄 Di Dalam Loop `for (const character of sentence)`:

3. **Iterasi setiap karakter**
   - `for (const character of sentence)` — iterasi karakter satu per satu
   - Setiap iterasi, `character` berisi satu karakter

4. **⚠️ `if (character === character.toLowerCase())` — kondisi yang bermasalah**
   - Membandingkan `character` dengan versi lowercase-nya
   - `true` jika karakter **tidak berubah** saat di-lowercase
   - Kondisi ini `true` untuk **3 jenis karakter sekaligus:**
   ```
   'a' === 'a'.toLowerCase() → true  ✅ huruf kecil (intended)
   '1' === '1'.toLowerCase() → true  ⚠️ angka (tidak intended)
   '!' === '!'.toLowerCase() → true  ⚠️ simbol (tidak intended)
   'A' === 'A'.toLowerCase() → false ✅ huruf besar (intended)
   ```

5. **`transformedText += character.toUpperCase()`** *(di dalam `if`)*
   - Huruf kecil → diubah ke huruf besar ✅
   - Angka & simbol → `.toUpperCase()` tidak mengubah apapun ⚠️ (kebetulan benar)

6. **`transformedText += character.toLowerCase()`** *(di dalam `else`)*
   - Huruf besar → diubah ke huruf kecil ✅

#### 🔵 Di Luar Loop:

7. **`return transformedText`**
   - Return string hasil toggle setelah loop selesai

### **Visualisasi untuk `str = 'Hi-1!'`:**
```
┌─────────────────────────────────────────────────────────────┐
│  transformedText = ''                                       │
│                                                             │
│  'H' → 'H' === 'h' → false → toLowerCase() → 'h'          │
│  'i' → 'i' === 'i' → true  → toUpperCase() → 'I'          │
│  '-' → '-' === '-' → true  → toUpperCase() → '-' ⚠️        │
│  '1' → '1' === '1' → true  → toUpperCase() → '1' ⚠️        │
│  '!' → '!' === '!' → true  → toUpperCase() → '!' ⚠️        │
│                                                             │
│  return 'hI-1!' ✅ (benar karena kebetulan, bukan intent!) │
└─────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- ⚠️ **`char === char.toLowerCase()`** — kondisi ambigu, terlalu luas
- ❌ **Implicit behavior** — output benar karena kebetulan, bukan karena logika yang tepat

### **Kenapa Tidak Direkomendasikan:**

**1. Kondisi `if` tidak mencerminkan intent yang sebenarnya**
```javascript
// ⚠️ Apa yang TERTULIS: "Jika character sama dengan versi lowercasenya"
// ✅ Apa yang DIMAKSUD: "Jika character adalah huruf kecil"
```

**2. Membingungkan developer lain**
```javascript
if (character === character.toLowerCase()) // ⚠️ ambigu — angka & simbol ikut masuk!
if (/[a-z]/.test(character))              // ✅ eksplisit — hanya huruf kecil
```

### **✅ Gunakan Versi Ini Sebagai Gantinya:**
```javascript
function toggleCase(str) {
  let result = ''
  for (const char of str) {
    if (/[a-z]/.test(char)) {
      result += char.toUpperCase()
    } else {
      result += char.toLowerCase()
    }
  }
  return result
}
```

### **💡 Insight Penting:**

> **Output benar bukan berarti kode benar.**
> Kode yang menghasilkan output sesuai expected belum tentu adalah kode yang baik. Kode yang baik harus **eksplisit** — mencerminkan intent yang sebenarnya.

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES LENGKAP

═══════════════════════════════════════════════════════════════════════

```javascript
const testCases = [
  // Basic cases
  { input: 'Hello World',       expected: 'hELLO wORLD',      desc: 'Normal sentence with mixed case' },
  { input: 'I aM aLAY',         expected: 'i Am Alay',         desc: 'Alternating uppercase and lowercase' },
  { input: 'My Name is Bond!!', expected: 'mY nAME IS bOND!!', desc: 'Sentence with punctuation' },
  { input: 'IT sHOULD bE me',   expected: 'it Should Be ME',   desc: 'Uppercase and lowercase mix' },
  { input: '001-A-3-5TrdYW',    expected: '001-a-3-5tRDyw',    desc: 'String with numbers and symbols' },

  // Edge cases
  { input: '',      expected: '',      desc: 'Empty string' },
  { input: '12345', expected: '12345', desc: 'Only numbers' },
  { input: '!!!!',  expected: '!!!!',  desc: 'Only symbols' },
];

// Run tests
testCases.forEach(({ input, expected, desc }, index) => {
  const result = toggleCase(input);
  const status = result === expected ? '✅ PASS' : '❌ FAIL';

  console.log(
    `Test Case #${index + 1}: ${status} - ${desc} | toggleCase("${input}") = "${result}"`
  );

  if (status === '❌ FAIL') {
    console.log('Input   :', input);
    console.log('Expected:', expected);
    console.log('Result  :', result);
  }
});
```

**Output yang diharapkan:**
```
Test Case #1: ✅ PASS - Normal sentence with mixed case      | toggleCase("Hello World") = "hELLO wORLD"
Test Case #2: ✅ PASS - Alternating uppercase and lowercase  | toggleCase("I aM aLAY") = "i Am Alay"
Test Case #3: ✅ PASS - Sentence with punctuation            | toggleCase("My Name is Bond!!") = "mY nAME IS bOND!!"
Test Case #4: ✅ PASS - Uppercase and lowercase mix          | toggleCase("IT sHOULD bE me") = "it Should Be ME"
Test Case #5: ✅ PASS - String with numbers and symbols      | toggleCase("001-A-3-5TrdYW") = "001-a-3-5tRDyw"
Test Case #6: ✅ PASS - Empty string                         | toggleCase("") = ""
Test Case #7: ✅ PASS - Only numbers                         | toggleCase("12345") = "12345"
Test Case #8: ✅ PASS - Only symbols                         | toggleCase("!!!!") = "!!!!"

Success: 8/8 ✅
```

---

═══════════════════════════════════════════════════════════════════════

# 📊 PERBANDINGAN LENGKAP

═══════════════════════════════════════════════════════════════════════

| Aspek | 🔄 for...of | 🔀 split+map+join+if/else | 🔀 split+map+join+ternary | 🔀 replace+regex | ⚠️ char comparison |
|-------|:-----------:|:------------------------:|:------------------------:|:----------------:|:------------------:|
| Pendekatan | Imperatif | Fungsional | Fungsional | Regex | Imperatif |
| Butuh variabel sementara | `result` | Tidak | Tidak | Tidak | `transformedText` |
| Kondisi eksplisit | ✅ | ✅ | ✅ | ✅ | ❌ |
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⚠️ |
| Keringkasan | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Direkomendasikan | ✅ | ✅ | ✅ | ✅ | ❌ |

---

## 🎯 Decision Tree

```
Familiar dengan regex?
│
├── BELUM ──▶ Mau functional style?
│              │
│              ├── YA  ──▶ 🔀 split + map + join + if/else
│              │            (modern, tanpa variabel sementara)
│              │
│              └── TIDAK ──▶ 🔄 for...of + regex
│                            (paling mudah dibaca & debug)
│
└── SUDAH ──▶ Mau se-ringkas mungkin?
               │
               ├── YA  ──▶ 🔀 replace + regex
               │            (satu baris, paling ringkas)
               │
               └── TIDAK ──▶ 🔀 split + map + join + ternary
                              (ringkas tapi masih readable)


Default: 🔄 for...of + regex — paling mudah dibaca dan di-debug ✅
```

---

## 🔑 Key Takeaways

```
┌─────────────────────────────────────────────────────────────────────┐
│  💡 Semua Solusi yang Direkomendasikan Menghasilkan Output yang Sama │
│     Perbedaan hanya pada pendekatan dan keringkasan kode            │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Output Benar Bukan Berarti Kode Benar                           │
│     char comparison outputnya benar tapi kondisinya kurang eksplisit│
├─────────────────────────────────────────────────────────────────────┤
│  💡 Regex /[a-z]/ Lebih Baik dari charCodeAt                        │
│     Tidak perlu hafal ASCII — langsung terbaca maksudnya            │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Pilih Sesuai Konteks                                            │
│     Debugging → for...of | Ringkas → replace | Functional → map    │
└─────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

## 🎯 Quick Reference Card

| Versi | Struktur | Highlight |
|-------|----------|-----------|
| 🔄 **for...of + regex** | `result` → `for...of` → `if(/[a-z]/)` → `return` | Paling mudah dibaca |
| 🔀 **split+map+join+if/else** | `split('')` → `map` → early return → `join('')` | Functional, no temp var |
| 🔀 **split+map+join+ternary** | `split('')` → `map` → ternary → `join('')` | Ringkas, 1 ekspresi |
| 🔀 **replace+regex** | `replace(/[a-zA-Z]/g, callback)` → ternary | Paling ringkas |
| ~~⚠️ char comparison~~ | ~~`for...of` → `char === char.toLowerCase()`~~ | ~~Tidak direkomendasikan~~ |

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
