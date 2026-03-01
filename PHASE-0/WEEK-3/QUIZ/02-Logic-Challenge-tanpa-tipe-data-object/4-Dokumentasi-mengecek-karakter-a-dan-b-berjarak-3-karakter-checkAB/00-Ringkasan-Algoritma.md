# 📋 checkAB — Ringkasan Algoritma Semua Versi

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          📋 RINGKASAN ALGORITMA — COMPLETE REFERENCE 📋                 ║
║            for loop · some · regex                                       ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Versi](https://img.shields.io/badge/Versi-3%20Solusi-success?style=for-the-badge)

---

## 🎯 Tujuan

- ✅ Ringkasan challenge dan kriteria dalam satu tempat
- ✅ Ringkasan algoritma semua versi secara detail
- ✅ Quick reference untuk review atau ujian

---

## 🧭 Quick Jump

| 🧩 Challenge | ✅ Versi 1 | 🔀 Versi 2 | 🔤 Versi 3 | 🧪 Test Cases | 📊 Perbandingan |
|:------------:|:---------:|:---------:|:---------:|:-------------:|:---------------:|
| [Jump](#-deskripsi-challenge) | [Jump](#-versi-1-for-loop-kode-final) | [Jump](#-versi-2-some) | [Jump](#-versi-3-regex) | [Jump](#-test-cases-lengkap) | [Jump](#-perbandingan-lengkap) |

---

# 🧩 DESKRIPSI CHALLENGE

📝 **Deskripsi**
Diberikan sebuah function `checkAB(str)` yang menerima satu parameter string.

🎯 **Tujuan**
Function akan mengembalikan `true` jika di dalam string terdapat karakter `a` dan `b` yang dipisahkan tepat 3 karakter. Jika tidak ditemukan, kembalikan `false`. Jarak bisa dari `a` ke `b` atau `b` ke `a`. Spasi dihitung sebagai karakter.

📌 **Contoh:** `str = 'barbarian'`
⚡ **Proses:** Cek setiap posisi — di index 3 ada `b`, di index 7 ada `a`, selisih = 4 (dipisah 3 karakter: `a`, `r`, `i`)
✅ **Result:** `true`

## 📐 Kriteria

```
  STEP 1 ──▶  Iterasi setiap karakter dari string mulai index 4
      │
  STEP 2 ──▶  Di setiap posisi i, lihat karakter di i dan i-4
      │       Jika str[i]='b' dan str[i-4]='a' → pola a...b ditemukan
      │       Jika str[i]='a' dan str[i-4]='b' → pola b...a ditemukan
      │
  STEP 3 ──▶  Return true jika pola ditemukan, false jika tidak
```

---

## 📊 Contoh-contoh

### 🔢 `str = 'barbarian'`
> **Tujuan:** Temukan pasangan a-b yang dipisah tepat 3 karakter

```
Index:  0  1  2  3  4  5  6  7  8
Char:   b  a  r  b  a  r  i  a  n
```

| Posisi i | str[i] | str[i-4] | Pola | Valid? |
|----------|--------|----------|------|--------|
| 4 | `a` | `b` (index 0) | b...a | ✅ |

```
RETURN  →  true
```

---

### 🔢 `str = 'lane borrowed'`
> **Tujuan:** Spasi dihitung sebagai karakter

```
Index:  0  1  2  3  4  5  6  7  8  9  10  11  12
Char:   l  a  n  e     b  o  r  r  o   w   e   d
```

| Posisi i | str[i] | str[i-4] | Pola | Valid? |
|----------|--------|----------|------|--------|
| 5 | `b` | `a` (index 1) | a...b | ✅ |

```
RETURN  →  true
```

---

### 🔢 `str = 'bacon and meat'`
> **Tujuan:** Ada a dan b tapi tidak ada yang berjarak tepat 3

```
Index:  0  1  2  3  4  5  6  7  8  9  10  11  12  13
Char:   b  a  c  o  n     a  n  d     m   e   a   t
```

| Pasangan | Selisih | Valid? |
|----------|---------|--------|
| b(0) & a(1) | 1 | ❌ |
| b(0) & a(6) | 6 | ❌ |
| b(0) & a(12) | 12 | ❌ |

```
RETURN  →  false
```

---

### 🔢 `str = 'a   b'` *(spasi dihitung!)*
> **Tujuan:** Edge case — spasi dianggap karakter

```
Index:  0  1  2  3  4
Char:   a  _  _  _  b   (_ = spasi)

Selisih: 4 - 0 = 4 ✅
```

```
RETURN  →  true
```

---

> 💡 **Aturan Sederhana:** Jarak 3 karakter **di antara** = selisih index **4**. Cek `str[i]` dan `str[i-4]` — kalau keduanya adalah pasangan `a` dan `b`, return `true`.

---

## ⚡ Quick Test — Tulis Fungsinya Sendiri Dulu, Lalu Test Satu per Satu!

> 💡 Tulis function `checkAB` kamu sendiri terlebih dahulu, baru paste test di bawah ini satu per satu untuk ngecek hasilnya.

```javascript
// Test 1 — Basic valid: a...b
console.log(checkAB('axxxb')); // true
```

```javascript
// Test 2 — Basic valid: b...a
console.log(checkAB('bxxxa')); // true
```

```javascript
// Test 3 — Spasi dihitung sebagai karakter
console.log(checkAB('a   b')); // true
```

```javascript
// Test 4 — Contoh soal
console.log(checkAB('barbarian')); // true
```

```javascript
// Test 5 — Invalid: ada a dan b tapi jarak salah
console.log(checkAB('bacon and meat')); // false
```

```javascript
// Test 6 — Edge case: string kosong
console.log(checkAB('')); // false
```

```javascript
// Test 7 — Edge case: hanya satu karakter
console.log(checkAB('a')); // false
```

---

═══════════════════════════════════════════════════════════════════════

# ✅ VERSI 1: FOR LOOP (KODE FINAL)

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Pemula%20%7C%20Debugging-green?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative-orange?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function checkAB(str) {
  for (let i = 4; i < str.length; i++) {
    const currentChar = str[i]
    const prevChar = str[i - 4]

    const isAtoB = currentChar === 'b' && prevChar === 'a'
    const isBtoA = currentChar === 'a' && prevChar === 'b'

    if (isAtoB || isBtoA) return true
  }

  return false
}
```

</details>

### **Konsep Inti:**
```
Loop setiap karakter dari str mulai index 4
  Ambil currentChar (index i) dan prevChar (index i - 4)
  Jika currentChar='b' dan prevChar='a' → return true
  Jika currentChar='a' dan prevChar='b' → return true
Jika loop selesai tanpa ketemu → return false
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function checkAB(str)`
   - `str` — string input yang akan dicek
   - **return** — `true` jika ditemukan pasangan `a` dan `b` berjarak tepat 3 karakter, `false` jika tidak

#### 🔄 Di Dalam Loop `for (let i = 4; i < str.length; i++)`:

2. **Loop mulai dari index 4**
   - Dimulai dari `i = 4` bukan `i = 0` karena kita butuh melihat 4 langkah ke belakang (`i - 4`)
   - Jika mulai dari `i = 0`, maka `str[i - 4]` akan mengakses index negatif yang tidak ada

3. **`const currentChar = str[i]`**
   - Karakter di posisi sekarang

4. **`const prevChar = str[i - 4]`**
   - Karakter 4 langkah sebelum posisi sekarang
   - Jarak 4 index = dipisah 3 karakter di antaranya

5. **`const isAtoB = currentChar === 'b' && prevChar === 'a'`**
   - Cek pola `a...b` — `prevChar` adalah `a`, `currentChar` adalah `b`

6. **`const isBtoA = currentChar === 'a' && prevChar === 'b'`**
   - Cek pola `b...a` — `prevChar` adalah `b`, `currentChar` adalah `a`

7. **`if (isAtoB || isBtoA) return true`**
   - Jika salah satu pola ditemukan, langsung return `true` tanpa lanjut iterasi

#### 🔵 Di Luar Loop:

8. **`return false`**
   - Jika loop selesai dan tidak ada pola yang cocok, kembalikan `false`

### **Visualisasi untuk `str = 'barbarian'`:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Index:  0  1  2  3  4  5  6  7  8                             │
│  Char:   b  a  r  b  a  r  i  a  n                             │
│                                                                 │
│  i=4: currentChar='a', prevChar=str[0]='b'                     │
│       isAtoB = ('a'==='b') = false                             │
│       isBtoA = ('a'==='a' && 'b'==='b') = true ✅ return true  │
└─────────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- 📍 **`i - 4`** — mengakses karakter 4 posisi sebelumnya (jarak 3 karakter di antaranya)
- 🔀 **`isAtoB`** — pola `a` diikuti `b` setelah 3 karakter
- 🔀 **`isBtoA`** — pola `b` diikuti `a` setelah 3 karakter
- ⚡ **Early return** — langsung return begitu pola ditemukan, tidak perlu selesaikan loop

### **Kapan Pakai:**
- ✅ Belajar dan debugging
- ✅ Butuh kode yang paling mudah dibaca
- ✅ Ketika readability > compactness

### **Pitfalls (Jebakan Umum):**

**1) ❌ Loop mulai dari index 0**
```javascript
// ❌ SALAH — str[i - 4] bisa mengakses index negatif
for (let i = 0; i < str.length; i++)

// ✅ BENAR — aman karena i - 4 minimal = 0
for (let i = 4; i < str.length; i++)
```

**2) ❌ Tidak memisahkan kondisi ke variable**
```javascript
// ❌ KURANG READABLE — terlalu padat, susah dibaca sekilas
if ((str[i] === 'a' && str[i-4] === 'b') || (str[i] === 'b' && str[i-4] === 'a'))

// ✅ LEBIH READABLE — setiap kondisi punya nama yang jelas
if (isAtoB || isBtoA)
```

**3) ❌ Menggunakan diff === 4 tanpa konteks yang jelas**
```javascript
// ❌ KURANG READABLE — angka 4 terasa seperti magic number
if (Math.abs(indexA - indexB) === 4)

// ✅ LEBIH READABLE — niat kode langsung terbaca
const isAtoB = currentChar === 'b' && prevChar === 'a'
const isBtoA = currentChar === 'a' && prevChar === 'b'
```

### **💡 Insight Penting:**

> **Kenapa jarak 3 karakter = selisih index 4?**
> Karena 3 karakter di *antara* dua posisi berarti posisinya berbeda 4 index. Contoh: index 0 dan index 4 — karakternya ada di posisi 1, 2, 3 (3 karakter di antaranya).

> **Kenapa tidak perlu simpan semua index `a` dan `b` terlebih dahulu?**
> Karena kita hanya butuh lihat 4 langkah ke belakang di setiap posisi. Informasi itu sudah tersedia langsung dari string tanpa perlu array tambahan.

---

═══════════════════════════════════════════════════════════════════════

# 🔀 VERSI 2: `some`

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Functional%20Style%20%7C%20Readable-purple?style=flat-square)
![Style](https://img.shields.io/badge/Style-Functional-9cf?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function checkAB(str) {
  return [...str].some((_, i) => {
    if (i < 4) return false

    const currentChar = str[i]
    const prevChar = str[i - 4]

    const isAtoB = currentChar === 'b' && prevChar === 'a'
    const isBtoA = currentChar === 'a' && prevChar === 'b'

    return isAtoB || isBtoA
  })
}
```

</details>

### **Konsep Inti:**
```
Spread string menjadi array karakter
Gunakan .some() untuk iterasi setiap karakter
  Skip jika index < 4
  Ambil currentChar (index i) dan prevChar (index i - 4)
  Jika currentChar='b' dan prevChar='a' → return true
  Jika currentChar='a' dan prevChar='b' → return true
.some() return true jika minimal satu iterasi return true
.some() return false jika semua iterasi return false
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function checkAB(str)`
   - `str` — string input yang akan dicek
   - **return** — `true` jika ditemukan pasangan `a` dan `b` berjarak tepat 3 karakter, `false` jika tidak

#### 🔵 Di Luar `.some()`:

2. **`[...str]`** — Spread string menjadi array karakter
   - `'abc'` → `['a', 'b', 'c']`
   - Diperlukan karena `.some()` adalah method array, bukan method string

#### 🔄 Di Dalam `.some((_, i) => {...})`:

3. **`(_, i)`** — Parameter callback `.some()`
   - `_` — karakter di index `i`, tidak dipakai langsung sehingga diberi nama `_` sebagai konvensi "tidak digunakan"
   - `i` — index karakter saat ini

4. **`if (i < 4) return false`**
   - Skip iterasi jika index belum mencapai 4
   - Karena `str[i - 4]` akan mengakses index negatif jika `i < 4`

5. **`const currentChar = str[i]`**
   - Karakter di posisi sekarang

6. **`const prevChar = str[i - 4]`**
   - Karakter 4 langkah sebelum posisi sekarang

7. **`const isAtoB = currentChar === 'b' && prevChar === 'a'`**
   - Cek pola `a...b`

8. **`const isBtoA = currentChar === 'a' && prevChar === 'b'`**
   - Cek pola `b...a`

9. **`return isAtoB || isBtoA`**
   - Jika `true`, `.some()` langsung berhenti dan return `true`
   - Jika `false`, `.some()` lanjut ke iterasi berikutnya

### **Visualisasi untuk `str = 'barbarian'`:**
```
┌──────────────────────────────────────────────────────────────────┐
│  [...'barbarian'] = ['b','a','r','b','a','r','i','a','n']        │
│                                                                  │
│  i=0: i < 4 → skip                                              │
│  i=1: i < 4 → skip                                              │
│  i=2: i < 4 → skip                                              │
│  i=3: i < 4 → skip                                              │
│                                                                  │
│  i=4: currentChar='a', prevChar=str[0]='b'                      │
│       isAtoB = ('a'==='b') = false                              │
│       isBtoA = ('a'==='a' && 'b'==='b') = true ✅               │
│       .some() return true → berhenti                            │
└──────────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- 📦 **`[...str]`** — spread string menjadi array karakter
- 🔍 **`.some()`** — return `true` jika minimal satu iterasi return `true`
- 🚫 **`_`** — konvensi penamaan untuk parameter yang tidak digunakan
- ⚡ **Early return** — `.some()` berhenti otomatis begitu menemukan `true`

### **Kapan Pakai:**
- ✅ Prioritas readability dan gaya functional programming
- ✅ String tidak terlalu panjang sehingga overhead memori tidak jadi masalah
- ❌ Hindari jika string sangat panjang dan memori harus dijaga ketat

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa skip index < 4**
```javascript
// ❌ SALAH — str[i - 4] bisa mengakses index negatif
return [...str].some((_, i) => {
  const prevChar = str[i - 4] // undefined jika i < 4!
})

// ✅ BENAR — skip dulu jika index belum aman
return [...str].some((_, i) => {
  if (i < 4) return false
  const prevChar = str[i - 4]
})
```

**2) ❌ Menggunakan `char` langsung dari parameter instead of `str[i]`**
```javascript
// ❌ MEMBINGUNGKAN — char dan str[i] sama, tapi tidak konsisten
return [...str].some((char, i) => {
  const prevChar = str[i - 4] // kenapa tidak pakai array juga?
})

// ✅ KONSISTEN — pakai _ karena memang tidak dipakai
return [...str].some((_, i) => {
  const currentChar = str[i]
  const prevChar = str[i - 4]
})
```

### **💡 Insight Penting:**

> **Kenapa parameter pertama diberi nama `_`?**
> Karena kita tidak menggunakan nilai karakternya langsung dari parameter — kita ambil dari `str[i]` agar konsisten dengan `str[i - 4]`. Nama `_` adalah konvensi umum di JavaScript untuk menandakan parameter yang sengaja tidak digunakan.

> **Apa bedanya `.some()` dengan `for` loop biasa?**
> Secara performa keduanya sama-sama O(n) dan sama-sama berhenti saat ketemu `true`. Bedanya `.some()` lebih ekspresif — nama method-nya sendiri sudah menggambarkan maksudnya: *"apakah ada setidaknya satu yang memenuhi kondisi?"*

---

═══════════════════════════════════════════════════════════════════════

# 🔤 VERSI 3: REGEX

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Ringkas%20%7C%20Familiar%20Regex-orange?style=flat-square)
![Style](https://img.shields.io/badge/Style-Regex-red?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function checkAB(str) {
  return /a...b|b...a/.test(str)
}
```

</details>

### **Konsep Inti:**
```
Gunakan regex /a...b|b...a/ untuk mencari pola di dalam string
  a...b → huruf a, diikuti tepat 3 karakter apapun, diikuti huruf b
  b...a → huruf b, diikuti tepat 3 karakter apapun, diikuti huruf a
.test() return true jika pola ditemukan, false jika tidak
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function checkAB(str)`
   - `str` — string input yang akan dicek
   - **return** — `true` jika pola ditemukan, `false` jika tidak

#### 🔵 Satu Baris Logika:

2. **`/a...b|b...a/`** — Regex pattern
   - `a` — cocokkan huruf `a`
   - `...` — cocokkan **tepat 3 karakter apapun** (titik `.` di regex = karakter apapun kecuali newline)
   - `b` — cocokkan huruf `b`
   - `|` — operator OR, cek pola kiri atau kanan
   - `b...a` — kebalikannya, cocokkan `b` lalu 3 karakter lalu `a`

3. **`.test(str)`**
   - Method regex yang return `true` jika pattern ditemukan di dalam `str`
   - Return `false` jika tidak ditemukan

### **Visualisasi untuk `str = 'barbarian'`:**
```
┌──────────────────────────────────────────────────────────────────┐
│  str = 'barbarian'                                               │
│  pattern = /a...b|b...a/                                         │
│                                                                  │
│  Coba cocokkan pola a...b dari kiri ke kanan:                    │
│  'arbi' → a-r-b-i → a...i? ❌ (karakter ke-4 bukan b)           │
│  'aria' → a-r-i-a → a...a? ❌ (karakter ke-4 bukan b)           │
│                                                                  │
│  Coba cocokkan pola b...a dari kiri ke kanan:                    │
│  'barb' → b-a-r-b → b...b? ❌ (karakter ke-4 bukan a)           │
│  index 3: 'b-a-r-i-a' → b...a ✅ return true                    │
└──────────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- 🔍 **`/pattern/`** — regex literal di JavaScript
- **`.`** — cocokkan satu karakter apapun (kecuali newline)
- **`|`** — operator OR di regex
- 📝 **`.test(str)`** — return `true` jika pattern ditemukan di string

### **Kapan Pakai:**
- ✅ Butuh solusi singkat dan ringkas
- ✅ Sudah familiar dengan regex
- ❌ Hindari jika tim tidak familiar regex — susah dibaca dan di-debug
- ❌ Hindari jika pattern lebih kompleks — regex bisa cepat jadi tidak terbaca

### **Pitfalls (Jebakan Umum):**

**1) ❌ Salah paham arti titik `.` di regex**
```javascript
// ⚠️ PERLU DIINGAT — titik di regex bukan titik biasa
/a...b/ // → a + 3 karakter APAPUN + b
/a\.\.\.b/ // → a + titik + titik + titik + b (literal)
```

**2) ❌ Lupa bahwa `.` tidak cocok dengan newline**
```javascript
// ⚠️ EDGE CASE — jika string mengandung newline di antara a dan b
checkAB('a\n\n\nb') // → false, padahal jaraknya 3!

// ✅ Fix jika perlu handle newline
/a[\s\S]{3}b|b[\s\S]{3}a/.test(str)
// [\s\S] = cocokkan karakter apapun TERMASUK newline
```

### **💡 Insight Penting:**

> **Kenapa `.` di regex cocok dengan "karakter apapun"?**
> Di regex, titik `.` adalah wildcard yang cocok dengan karakter apapun kecuali newline (`\n`). Jadi `a...b` artinya: huruf `a`, lalu 3 karakter apapun, lalu huruf `b` — persis seperti yang dibutuhkan soal ini.

> **Kapan regex adalah pilihan terbaik?**
> Ketika pattern-nya simpel dan tim sudah familiar. Untuk soal ini regex sangat elegan — tapi begitu pattern makin kompleks, lebih baik kembali ke pendekatan loop yang lebih mudah di-debug.

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES LENGKAP

═══════════════════════════════════════════════════════════════════════

```javascript
const testCases = [
  // Edge cases
  { input: '',      expected: false, desc: 'String kosong' },
  { input: 'a',     expected: false, desc: 'Hanya satu karakter' },
  { input: 'ab',    expected: false, desc: 'a dan b berdampingan' },
  { input: 'a   b', expected: true,  desc: 'Dipisah 3 spasi' },

  // Basic valid cases
  { input: 'lane borrowed',  expected: true, desc: 'Contoh soal (valid)' },
  { input: 'barbarian',      expected: true, desc: "Terdapat b...a di 'barian'" },
  { input: 'you are boring', expected: true, desc: 'Terdapat a...b' },
  { input: 'axxxb',          expected: true, desc: 'a dipisah 3 karakter lalu b' },
  { input: 'bxxxa',          expected: true, desc: 'b dipisah 3 karakter lalu a' },

  // Invalid cases
  { input: 'i am sick',      expected: false, desc: 'Tidak ada pola a dan b berjarak 3' },
  { input: 'bacon and meat', expected: false, desc: 'Tidak ada jarak tepat 3 karakter' },
  { input: 'aabbcc',         expected: false, desc: 'Tidak ada jarak 3 karakter' },
  { input: 'abxxx',          expected: false, desc: 'b tidak berada di posisi +4' },
];

// Run tests
testCases.forEach(({ input, expected, desc }, index) => {
  const result = checkAB(input);
  const status = result === expected ? '✅ PASS' : '❌ FAIL';

  console.log(
    `Test Case #${index + 1}: ${status} - ${desc} | checkAB("${input}") = ${result}`
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
Test Case  #1: ✅ PASS - String kosong                         | checkAB("") = false
Test Case  #2: ✅ PASS - Hanya satu karakter                   | checkAB("a") = false
Test Case  #3: ✅ PASS - a dan b berdampingan                  | checkAB("ab") = false
Test Case  #4: ✅ PASS - Dipisah 3 spasi                       | checkAB("a   b") = true
Test Case  #5: ✅ PASS - Contoh soal (valid)                   | checkAB("lane borrowed") = true
Test Case  #6: ✅ PASS - Terdapat b...a di 'barian'            | checkAB("barbarian") = true
Test Case  #7: ✅ PASS - Terdapat a...b                        | checkAB("you are boring") = true
Test Case  #8: ✅ PASS - a dipisah 3 karakter lalu b           | checkAB("axxxb") = true
Test Case  #9: ✅ PASS - b dipisah 3 karakter lalu a           | checkAB("bxxxa") = true
Test Case #10: ✅ PASS - Tidak ada pola a dan b berjarak 3     | checkAB("i am sick") = false
Test Case #11: ✅ PASS - Tidak ada jarak tepat 3 karakter      | checkAB("bacon and meat") = false
Test Case #12: ✅ PASS - Tidak ada jarak 3 karakter            | checkAB("aabbcc") = false
Test Case #13: ✅ PASS - b tidak berada di posisi +4           | checkAB("abxxx") = false

Success: 13/13 ✅
```

---

═══════════════════════════════════════════════════════════════════════

# 📊 PERBANDINGAN LENGKAP

═══════════════════════════════════════════════════════════════════════

| Aspek | ✅ For Loop | 🔀 `some` | 🔤 Regex |
|-------|:-----------:|:---------:|:--------:|
| Pendekatan | Imperatif | Fungsional | Regex |
| Butuh array tambahan | Tidak | `[...str]` | Tidak |
| Kompleksitas waktu | O(n) | O(n) | O(n) |
| Kompleksitas memori | O(1) | O(n) | O(1) |
| Readability | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Keringkasan | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Direkomendasikan | ✅ | ✅ | ✅ |

---

## 🎯 Decision Tree

```
Familiar dengan regex?
│
├── BELUM ──▶ Mau functional style?
│              │
│              ├── YA  ──▶ 🔀 some
│              │            (ekspresif, tanpa variabel sementara)
│              │
│              └── TIDAK ──▶ ✅ for loop
│                            (paling mudah dibaca & debug)
│
└── SUDAH ──▶ Mau se-ringkas mungkin?
               │
               ├── YA  ──▶ 🔤 regex
               │            (satu baris, paling ringkas)
               │
               └── TIDAK ──▶ ✅ for loop
                              (tetap mudah dibaca & performa optimal)


Default: ✅ for loop — paling mudah dibaca dan di-debug ✅
```

---

## 🔑 Key Takeaways

```
┌─────────────────────────────────────────────────────────────────────┐
│  💡 Semua Solusi Menghasilkan Output yang Sama                      │
│     Perbedaan hanya pada pendekatan dan keringkasan kode            │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Jarak 3 Karakter = Selisih Index 4                              │
│     3 karakter di antara dua posisi = posisi berbeda 4 index        │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Cukup Lihat str[i] dan str[i-4]                                 │
│     Tidak perlu simpan semua index — info sudah ada di string       │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Pilih Sesuai Konteks                                            │
│     Debugging → for loop | Ringkas → regex | Functional → some     │
└─────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

## 🎯 Quick Reference Card

| Versi | Struktur | Highlight |
|-------|----------|-----------|
| ✅ **For Loop** | `for (i=4)` → `currentChar` + `prevChar` → `isAtoB \|\| isBtoA` | Paling mudah dibaca |
| 🔀 **`some`** | `[...str].some((_, i) =>` → skip if `i<4` → `isAtoB \|\| isBtoA` | Functional, ekspresif |
| 🔤 **Regex** | `/a...b\|b...a/.test(str)` | Paling ringkas, 1 baris |

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
