# 📋 Digit Perkalian Minimum — Ringkasan Algoritma

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          📋 RINGKASAN ALGORITMA — COMPLETE REFERENCE 📋                 ║
║       For Loop Optimal · Functional Style · Best of Both Worlds          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Versi](https://img.shields.io/badge/Versi-3%20Solusi-success?style=for-the-badge)

---

## 🎯 Tujuan

- ✅ Ringkasan challenge dan kriteria dalam satu tempat
- ✅ Ringkasan algoritma semua versi secara detail
- ✅ Quick reference untuk review atau ujian

---

# 🧩 DESKRIPSI CHALLENGE

📝 **Deskripsi**
Diberikan sebuah function `digitPerkalianMinimum(angka)` yang menerima satu parameter angka.

🎯 **Tujuan**
Function akan mengembalikan jumlah digit **MINIMAL** dari pasangan faktor angka tersebut.

📌 **Contoh:** `angka = 24`
⚡ **Faktor:** `1×24`, `2×12`, `3×8`, `4×6`
✅ **Minimum:** `3×8` = `"38"` → **2 digit** ← RETURN INI

## 📐 Kriteria

```
  STEP 1 ──▶  Cari semua pasangan faktor (a × b, dimana a ≤ b)
      │
  STEP 2 ──▶  Gabung setiap pasangan jadi string → hitung digit
      │
  STEP 3 ──▶  Return jumlah digit yang PALING SEDIKIT
```

---

## 📊 Contoh-contoh

### 🔢 angka = 24
> **Tujuan:** Cari pasangan faktor dengan total digit paling sedikit

| Pasangan | String | Jumlah Digit | |
|----------|--------|:------------:|--|
| 1 × 24 | `"124"` | 3 | |
| 2 × 12 | `"212"` | 3 | |
| 3 × 8 | `"38"` | **2** | ✅ minimum |
| 4 × 6 | `"46"` | **2** | ✅ minimum |

```
RETURN  →  2
```

---

### 🔢 angka = 90
> **Tujuan:** Semua pasangan menghasilkan digit yang sama

| Pasangan | String | Jumlah Digit | |
|----------|--------|:------------:|--|
| 1 × 90 | `"190"` | 3 | |
| 2 × 45 | `"245"` | 3 | |
| 3 × 30 | `"330"` | 3 | |
| 5 × 18 | `"518"` | 3 | |
| 6 × 15 | `"615"` | 3 | |
| 9 × 10 | `"910"` | **3** | ✅ minimum |

```
RETURN  →  3
```

---

### 🔢 angka = 20
> **Tujuan:** Pasangan paling seimbang menghasilkan digit paling sedikit

| Pasangan | String | Jumlah Digit | |
|----------|--------|:------------:|--|
| 1 × 20 | `"120"` | 3 | |
| 2 × 10 | `"210"` | 3 | |
| 4 × 5 | `"45"` | **2** | ✅ minimum |

```
RETURN  →  2
```

---

### 🔢 angka = 179 *(bilangan prima)*
> **Tujuan:** Bilangan prima hanya punya satu pasangan faktor

| Pasangan | String | Jumlah Digit | |
|----------|--------|:------------:|--|
| 1 × 179 | `"1179"` | **4** | ✅ satu-satunya |

```
RETURN  →  4
```

---

### 🔢 angka = 1
> **Tujuan:** Edge case — angka terkecil

| Pasangan | String | Jumlah Digit | |
|----------|--------|:------------:|--|
| 1 × 1 | `"11"` | **2** | ✅ minimum |

```
RETURN  →  2
```

---

> 💡 **Pola Penting:** Semakin "seimbang" pasangan faktornya (mendekati √angka), biasanya jumlah digitnya semakin sedikit.

---

═══════════════════════════════════════════════════════════════════════

# 🔄 VERSI 1: FOR LOOP OPTIMAL

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Pemula%20%7C%20Debugging-green?style=flat-square)
![Complexity](https://img.shields.io/badge/Complexity-O(√n)-blue?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative-orange?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function digitPerkalianMinimum(angka) {
  let minDigitCount = Infinity

  for (let i = 1; i * i <= angka; i++) {
    if (angka % i === 0) {
      const complement = angka / i
      const digitCount = `${i}${complement}`.length

      if (digitCount < minDigitCount) {
        minDigitCount = digitCount
      }
    }
  }

  return minDigitCount
}
```

</details>

### **Konsep Inti:**
```
Inisialisasi minDigitCount dengan Infinity
Loop dari 1 sampai √angka (i * i <= angka)
  Jika i adalah faktor:
    Hitung complement (angka / i)
    Hitung digitCount dari gabungan string
    Jika lebih kecil → update minDigitCount
Return minDigitCount
```

### **Step-by-Step (Detail):**

#### 🔵 Di Luar Loop:

1. **Inisialisasi `minDigitCount = Infinity`**
   - Dideklarasikan **sebelum loop** agar nilainya bisa diupdate dan diakses sepanjang loop
   - Nilai awal `Infinity` agar angka apapun pasti lebih kecil di perbandingan pertama

#### 🔄 Di Dalam Loop `for (let i = 1; i * i <= angka; i++)`:

2. **Kondisi loop**
   - Mulai dari `i = 1`
   - Berjalan selama `i * i <= angka` (hanya sampai √angka)
   - Setiap iterasi `i++`

3. **`if (angka % i === 0)` — cek apakah `i` adalah faktor**
   - Jika tidak → skip, langsung ke iterasi berikutnya
   - Jika ya → masuk ke dalam blok `if`

4. **`const complement = angka / i`** *(di dalam `if`)*
   - Hitung pasangan faktor dari `i`
   - Contoh: `angka = 24`, `i = 3` → `complement = 8`

5. **`` const digitCount = `${i}${complement}`.length ``** *(di dalam `if`)*
   - Gabungkan `i` dan `complement` jadi satu string, lalu hitung panjangnya
   - Contoh: `i = 3`, `complement = 8` → `"38".length = 2`

6. **`if (digitCount < minDigitCount)`** *(di dalam `if`)*
   - Jika lebih kecil → `minDigitCount = digitCount`
   - Jika tidak → lanjut ke iterasi berikutnya

#### 🔵 Di Luar Loop:

7. **`return minDigitCount`** — return nilai minimum setelah loop selesai

### **Visualisasi untuk `angka = 24`:**
```
┌─────────────────────────────────────────────────────────────┐
│  minDigitCount = Infinity                                   │
│                                                             │
│  i=1 → 24%1=0 ✅ → complement=24 → "124".length=3          │
│         3 < Infinity ✅ → minDigitCount = 3                 │
│                                                             │
│  i=2 → 24%2=0 ✅ → complement=12 → "212".length=3          │
│         3 < 3 ❌ → skip                                     │
│                                                             │
│  i=3 → 24%3=0 ✅ → complement=8  → "38".length=2           │
│         2 < 3 ✅ → minDigitCount = 2                        │
│                                                             │
│  i=4 → 24%4=0 ✅ → complement=6  → "46".length=2           │
│         2 < 2 ❌ → skip                                     │
│                                                             │
│  i=5 → 24%5≠0 ❌ skip                                       │
│                                                             │
│  return 2 ✅                                                │
└─────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- 🔢 **Infinity** — nilai awal agar perbandingan pertama selalu true
- 📊 **i * i <= angka** — loop hanya sampai √angka tanpa `Math.sqrt()`
- 🧩 **complement** — pasangan faktor dari `i`
- 📝 **Template literal** — gabungkan dua angka jadi string
- ⏱️ **O(√n)** complexity

### **Kapan Pakai:**
- ✅ Belajar konsep faktor bilangan
- ✅ Butuh kode yang mudah di-debug
- ✅ Ketika readability > compactness

### **Pitfalls (Jebakan Umum):**

**1) ❌ Inisialisasi minDigitCount dengan 0**
```javascript
// ❌ SALAH — 0 selalu lebih kecil, minDigitCount tidak pernah terupdate!
let minDigitCount = 0

// ✅ BENAR
let minDigitCount = Infinity
```

**2) ❌ Loop sampai angka (tidak efisien)**
```javascript
// ❌ SALAH — loop terlalu banyak, dapat duplikat pasangan
for (let i = 1; i <= angka; i++)

// ✅ BENAR
for (let i = 1; i * i <= angka; i++)
```

**3) ❌ Lupa cek apakah i adalah faktor**
```javascript
// ❌ SALAH — semua i dihitung, termasuk yang bukan faktor
const complement = angka / i
const digitCount = `${i}${complement}`.length

// ✅ BENAR
if (angka % i === 0) {
  const complement = angka / i
  const digitCount = `${i}${complement}`.length
}
```

**4) ❌ Pakai array sementara (tidak perlu)**
```javascript
// ❌ KURANG OPTIMAL
const factorPairs = []
factorPairs.push([i, complement])
return Math.min(...factorPairs.map(pair => pair.join('').length))

// ✅ LEBIH OPTIMAL — langsung bandingkan di dalam loop
if (digitCount < minDigitCount) {
  minDigitCount = digitCount
}
```

### **💡 Insight Penting:**

> **Kenapa `i * i <= angka` bukan `i <= Math.sqrt(angka)`?**
> Keduanya menghasilkan hasil yang sama. Tapi `i * i <= angka` lebih efisien karena menghindari pemanggilan `Math.sqrt()` di setiap iterasi — perkalian integer lebih cepat dari operasi akar kuadrat.

> **Kenapa Infinity sebagai nilai awal?**
> Karena kita belum tahu berapa minimum yang sebenarnya. Dengan `Infinity`, angka pertama apapun pasti lebih kecil sehingga `minDigitCount` langsung terupdate di iterasi pertama.

---

═══════════════════════════════════════════════════════════════════════

# 🔀 VERSI 2: FUNCTIONAL STYLE

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Functional%20Programming-purple?style=flat-square)
![Complexity](https://img.shields.io/badge/Complexity-O(√n)-blue?style=flat-square)
![Style](https://img.shields.io/badge/Style-Declarative-9cf?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function getMinimumMultiplicationDigits(number) {
  const squareRoot = Math.floor(Math.sqrt(number))

  return Array.from({ length: squareRoot }, (_, i) => i + 1)
    .filter(i => number % i === 0)
    .reduce((minDigitCount, i) => {
      const complement = number / i
      const digitCount = `${i}${complement}`.length

      return Math.min(minDigitCount, digitCount)
    }, Infinity)
}
```

</details>

### **Konsep Inti:**
```
Hitung squareRoot = √number
Buat array [1, 2, ..., squareRoot]
Filter hanya faktor dari number
Reduce → cari digitCount terkecil
Return hasil reduce
```

### **Step-by-Step (Detail):**

#### 🔵 Di Luar Method Chain:

1. **`const squareRoot = Math.floor(Math.sqrt(number))`**
   - Hitung akar kuadrat dari `number`, bulatkan ke bawah
   - Dipakai sebagai batas atas pembuatan array
   - Contoh: `number = 24` → `squareRoot = 4`

#### 🔄 Di Dalam Method Chain:

2. **`Array.from({ length: squareRoot }, (_, i) => i + 1)`**
   - Buat array berisi angka `1` sampai `squareRoot`
   - Contoh: `squareRoot = 4` → `[1, 2, 3, 4]`

3. **`.filter(i => number % i === 0)`**
   - Saring, hanya simpan faktor dari `number`
   - Contoh: `number = 24` → `[1, 2, 3, 4]` (semua faktor 24)

4. **`.reduce((minDigitCount, i) => { ... }, Infinity)`**
   - Iterasi setiap faktor, cari `digitCount` terkecil
   - `Infinity` sebagai nilai awal `minDigitCount`
   - Setiap iterasi:

     **a. `const complement = number / i`** — hitung pasangan faktor

     **b. `` const digitCount = `${i}${complement}`.length ``** — hitung jumlah digit

     **c. `return Math.min(minDigitCount, digitCount)`** — return nilai terkecil sebagai accumulator berikutnya

#### 🔵 Di Luar Method Chain:

5. **Return** — hasil `reduce` langsung di-return tanpa variabel tambahan

### **Visualisasi untuk `number = 24`:**
```
┌─────────────────────────────────────────────────────────────┐
│  squareRoot = Math.floor(Math.sqrt(24)) = 4                 │
│                                                             │
│  Array.from ──▶ [1, 2, 3, 4]                               │
│  .filter    ──▶ [1, 2, 3, 4]  (semua faktor 24)            │
│                                                             │
│  .reduce (initial = Infinity):                              │
│    i=1 → complement=24 → "124".length=3                    │
│           Math.min(Infinity, 3) = 3                         │
│    i=2 → complement=12 → "212".length=3                    │
│           Math.min(3, 3) = 3                                │
│    i=3 → complement=8  → "38".length=2                     │
│           Math.min(3, 2) = 2                                │
│    i=4 → complement=6  → "46".length=2                     │
│           Math.min(2, 2) = 2                                │
│                                                             │
│  return 2 ✅                                                │
└─────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- 📐 **Math.sqrt()** — hitung akar kuadrat
- 🏗️ **Array.from** — buat array dari panjang tertentu
- 🔍 **filter** — saring elemen yang memenuhi kondisi
- 📉 **reduce** — akumulasi nilai menjadi satu hasil
- 🔢 **Infinity** — nilai awal reduce
- ⏱️ **O(√n)** complexity

### **Kapan Pakai:**
- ✅ Sudah familiar dengan functional programming
- ✅ Ingin kode lebih deklaratif
- ✅ Tim yang terbiasa dengan method chaining

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa `Math.floor` saat hitung squareRoot**
```javascript
// ❌ SALAH — squareRoot bisa decimal, Array.from tidak bekerja benar
const squareRoot = Math.sqrt(number)

// ✅ BENAR
const squareRoot = Math.floor(Math.sqrt(number))
```

**2) ❌ Array.from dimulai dari 0**
```javascript
// ❌ SALAH — faktor 0 menyebabkan division by zero!
Array.from({ length: squareRoot }, (_, i) => i)

// ✅ BENAR
Array.from({ length: squareRoot }, (_, i) => i + 1)
```

**3) ❌ Lupa initial value Infinity di reduce**
```javascript
// ❌ SALAH — elemen pertama jadi accumulator awal (tipe array, bukan number)
.reduce((minDigitCount, i) => {
  return Math.min(minDigitCount, digitCount)
})

// ✅ BENAR
.reduce((minDigitCount, i) => {
  return Math.min(minDigitCount, digitCount)
}, Infinity)
```

**4) ❌ Tidak pakai filter sebelum reduce**
```javascript
// ❌ SALAH — non-faktor ikut dihitung di reduce
Array.from({ length: squareRoot }, (_, i) => i + 1)
  .reduce(...)

// ✅ BENAR
Array.from({ length: squareRoot }, (_, i) => i + 1)
  .filter(i => number % i === 0)
  .reduce(...)
```

### **💡 Insight Penting:**

> **Kapan pakai Functional Style vs For Loop?**
> Keduanya O(√n). For Loop lebih mudah di-debug. Functional Style lebih deklaratif — kode "mendeskripsikan apa yang dilakukan" bukan "bagaimana melakukannya".

> **Kenapa `filter` lalu `reduce`, bukan langsung `reduce`?**
> Memisahkan concerns — `filter` cari faktor, `reduce` cari minimum. Lebih mudah dibaca dan di-maintain.

---

═══════════════════════════════════════════════════════════════════════

# 🏆 VERSI 3: BEST OF BOTH WORLDS

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Kode%20Paling%20Deskriptif-gold?style=flat-square)
![Complexity](https://img.shields.io/badge/Complexity-O(√n)-blue?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative%20%2B%20Clean-brightgreen?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function getMinimumMultiplicationDigits(number) {
  let minDigitCount = Infinity

  for (let factor = 1; factor * factor <= number; factor++) {
    if (number % factor === 0) {
      const pairedFactor = number / factor
      const digitCount = `${factor}${pairedFactor}`.length

      minDigitCount = Math.min(minDigitCount, digitCount)
    }
  }

  return minDigitCount
}
```

</details>

### **Konsep Inti:**
```
Inisialisasi minDigitCount dengan Infinity
Loop dari 1 sampai √number (factor * factor <= number)
  Jika factor adalah faktor dari number:
    Hitung pairedFactor (number / factor)
    Hitung digitCount dari gabungan string
    Update minDigitCount dengan Math.min
Return minDigitCount
```

### **Step-by-Step (Detail):**

#### 🔵 Di Luar Loop:

1. **Inisialisasi `minDigitCount = Infinity`**
   - Dideklarasikan **sebelum loop** agar nilainya bisa diupdate dan diakses sepanjang loop
   - Nilai awal `Infinity` agar angka apapun pasti lebih kecil di perbandingan pertama

#### 🔄 Di Dalam Loop `for (let factor = 1; factor * factor <= number; factor++)`:

2. **Kondisi loop**
   - Mulai dari `factor = 1`
   - Berjalan selama `factor * factor <= number` (hanya sampai √number)
   - Setiap iterasi `factor++`

3. **`if (number % factor === 0)` — cek apakah `factor` adalah faktor**
   - Jika tidak → skip, langsung ke iterasi berikutnya
   - Jika ya → masuk ke dalam blok `if`

4. **`const pairedFactor = number / factor`** *(di dalam `if`)*
   - Hitung pasangan faktor dari `factor`
   - Contoh: `number = 24`, `factor = 3` → `pairedFactor = 8`

5. **`` const digitCount = `${factor}${pairedFactor}`.length ``** *(di dalam `if`)*
   - Gabungkan `factor` dan `pairedFactor` jadi satu string, lalu hitung panjangnya
   - Contoh: `factor = 3`, `pairedFactor = 8` → `"38".length = 2`

6. **`minDigitCount = Math.min(minDigitCount, digitCount)`** *(di dalam `if`)*
   - `Math.min` langsung return nilai terkecil tanpa perlu blok `if` tambahan

#### 🔵 Di Luar Loop:

7. **`return minDigitCount`** — return nilai minimum setelah loop selesai

### **Visualisasi untuk `number = 24`:**
```
┌─────────────────────────────────────────────────────────────┐
│  minDigitCount = Infinity                                   │
│                                                             │
│  factor=1 → 24%1=0 ✅ → pairedFactor=24 → "124".length=3   │
│              Math.min(Infinity, 3) = 3                      │
│                                                             │
│  factor=2 → 24%2=0 ✅ → pairedFactor=12 → "212".length=3   │
│              Math.min(3, 3) = 3                             │
│                                                             │
│  factor=3 → 24%3=0 ✅ → pairedFactor=8  → "38".length=2    │
│              Math.min(3, 2) = 2                             │
│                                                             │
│  factor=4 → 24%4=0 ✅ → pairedFactor=6  → "46".length=2    │
│              Math.min(2, 2) = 2                             │
│                                                             │
│  factor=5 → 24%5≠0 ❌ skip                                  │
│                                                             │
│  return 2 ✅                                                │
└─────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- 🔢 **Infinity** — nilai awal agar perbandingan pertama selalu true
- 📊 **factor * factor <= number** — loop hanya sampai √number
- 🧩 **pairedFactor** — nama lebih deskriptif dari `complement`
- 🔢 **Math.min** — update minimum tanpa blok `if`
- ⏱️ **O(√n)** complexity

### **Kapan Pakai:**
- ✅ Ingin naming convention paling deskriptif
- ✅ Kode tetap ringkas tanpa blok `if` untuk update minimum
- ✅ Cocok untuk code review atau portfolio

### **Pitfalls (Jebakan Umum):**

**1) ❌ Inisialisasi minDigitCount dengan 0**
```javascript
// ❌ SALAH — 0 selalu lebih kecil, minDigitCount tidak pernah terupdate!
let minDigitCount = 0

// ✅ BENAR
let minDigitCount = Infinity
```

**2) ❌ Loop sampai number (tidak efisien)**
```javascript
// ❌ SALAH
for (let factor = 1; factor <= number; factor++)

// ✅ BENAR
for (let factor = 1; factor * factor <= number; factor++)
```

**3) ❌ Lupa cek apakah factor adalah faktor**
```javascript
// ❌ SALAH
const pairedFactor = number / factor
const digitCount = `${factor}${pairedFactor}`.length

// ✅ BENAR
if (number % factor === 0) {
  const pairedFactor = number / factor
  const digitCount = `${factor}${pairedFactor}`.length
}
```

### **💡 Insight Penting:**

> **Kenapa `factor` lebih baik dari `i`?**
> `i` adalah nama generik yang biasa dipakai sebagai counter. `factor` langsung mendeskripsikan **apa** yang sedang diiterasi — kode jadi self-documenting.

> **Kenapa `Math.min` lebih baik dari blok `if`?**
> `minDigitCount = Math.min(minDigitCount, digitCount)` lebih ringkas. Hasilnya sama, tapi kode lebih padat dan mudah dibaca sekilas.

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES

═══════════════════════════════════════════════════════════════════════

```javascript
const testCases = [
  // Edge cases
  { input: 1,   expected: 2, desc: "1 → 1×1 = '11' = 2 digits" },
  { input: 2,   expected: 2, desc: "2 → 1×2 = '12' = 2 digits" },

  // Small numbers
  { input: 4,   expected: 2, desc: "4 → 2×2 = '22' = 2 digits" },
  { input: 6,   expected: 2, desc: "6 → 2×3 = '23' = 2 digits" },

  // Contoh soal
  { input: 24,  expected: 2, desc: "24 → 3×8 or 4×6 = 2 digits" },
  { input: 90,  expected: 3, desc: "90 → 9×10 = '910' = 3 digits" },
  { input: 20,  expected: 2, desc: "20 → 4×5 = '45' = 2 digits" },
  { input: 179, expected: 4, desc: "179 is prime → 1×179 = '1179' = 4 digits" },

  // Angka lebih besar
  { input: 100, expected: 3, desc: "100 → 4×25 = '425' = 3 digits" },
  { input: 81,  expected: 2, desc: "81 → 9×9 = '99' = 2 digits" },
  { input: 144, expected: 3, desc: "144 → 9×16 = '916' = 3 digits" },
]

// Run tests
testCases.forEach(({ input, expected, desc }, index) => {
  const result = getMinimumMultiplicationDigits(input)
  const status = result === expected ? "✅ PASS" : "❌ FAIL"

  console.log(
    `Test Case #${index + 1}: ${status} - ${desc} | getMinimumMultiplicationDigits(${input}) = ${result}`
  )

  if (status === "❌ FAIL") {
    console.log("Input   :", input)
    console.log("Expected:", expected)
    console.log("Result  :", result)
  }
})
```

**Output yang diharapkan:**
```
Test Case #1:  ✅ PASS - 1 → 1×1 = '11' = 2 digits        | getMinimumMultiplicationDigits(1) = 2
Test Case #2:  ✅ PASS - 2 → 1×2 = '12' = 2 digits        | getMinimumMultiplicationDigits(2) = 2
Test Case #3:  ✅ PASS - 4 → 2×2 = '22' = 2 digits        | getMinimumMultiplicationDigits(4) = 2
Test Case #4:  ✅ PASS - 6 → 2×3 = '23' = 2 digits        | getMinimumMultiplicationDigits(6) = 2
Test Case #5:  ✅ PASS - 24 → 3×8 or 4×6 = 2 digits       | getMinimumMultiplicationDigits(24) = 2
Test Case #6:  ✅ PASS - 90 → 9×10 = '910' = 3 digits     | getMinimumMultiplicationDigits(90) = 3
Test Case #7:  ✅ PASS - 20 → 4×5 = '45' = 2 digits       | getMinimumMultiplicationDigits(20) = 2
Test Case #8:  ✅ PASS - 179 is prime → 1×179 = 4 digits   | getMinimumMultiplicationDigits(179) = 4
Test Case #9:  ✅ PASS - 100 → 4×25 = '425' = 3 digits    | getMinimumMultiplicationDigits(100) = 3
Test Case #10: ✅ PASS - 81 → 9×9 = '99' = 2 digits       | getMinimumMultiplicationDigits(81) = 2
Test Case #11: ✅ PASS - 144 → 9×16 = '916' = 3 digits    | getMinimumMultiplicationDigits(144) = 3

Success: 11/11 ✅
```

---

═══════════════════════════════════════════════════════════════════════

# 📊 PERBANDINGAN LENGKAP

═══════════════════════════════════════════════════════════════════════

| Aspek | 🔄 For Loop Optimal | 🔀 Functional Style | 🏆 Best of Both |
|-------|:-------------------:|:-------------------:|:--------------:|
| Struktur | for loop | method chain | for loop |
| Nama variabel loop | `i` | `i` | `factor` ✅ |
| Nama pasangan faktor | `complement` | `complement` | `pairedFactor` ✅ |
| Update minimum | `if` block | `Math.min` | `Math.min` ✅ |
| Kompleksitas waktu | O(√n) | O(√n) | O(√n) |
| Mudah di-debug | ✅ | ⚠️ | ✅ |
| Naming convention | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Cocok untuk | Pemula, debugging | Functional programming | Kode paling deskriptif |

---

## 🎯 Decision Tree

```
Apakah kamu familiar dengan functional programming?
│
├── BELUM ──▶ Butuh kode paling deskriptif?
│              │
│              ├── YA  ──▶ 🏆 Best of Both
│              │            (factor, pairedFactor, Math.min)
│              │
│              └── TIDAK ──▶ 🔄 For Loop Optimal
│                            (sederhana, mudah di-debug)
│
└── SUDAH ──▶ 🔀 Functional Style
               (Array.from + filter + reduce)


Default: 🏆 Best of Both — paling deskriptif dan tetap mudah dibaca ✅
```

---

## 🔑 Key Takeaways

```
┌─────────────────────────────────────────────────────────────────────┐
│  💡 Semua Solusi Menghasilkan Output yang Sama                      │
│     Perbedaan hanya pada pendekatan dan naming convention           │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Naming Convention Penting                                       │
│     factor & pairedFactor jauh lebih deskriptif dari i & complement │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Selalu Gunakan Infinity sebagai Nilai Awal Minimum              │
│     Agar perbandingan pertama selalu berhasil                       │
├─────────────────────────────────────────────────────────────────────┤
│  💡 i * i <= number lebih efisien dari Math.sqrt()                  │
│     Perkalian integer lebih cepat dari operasi akar kuadrat         │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Pilih Sesuai Konteks                                            │
│     Debugging → For Loop | Functional → Functional | Clean → BoBW  │
└─────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

## 🎯 Quick Reference Card

| Versi | Struktur | Highlight |
|-------|----------|-----------|
| 🔄 **For Loop Optimal** | `Infinity` → `for (i*i<=angka)` → `if` update | Mudah di-debug |
| 🔀 **Functional Style** | `squareRoot` → `Array.from` → `filter` → `reduce` | Deklaratif |
| 🏆 **Best of Both** | `Infinity` → `for (factor*factor<=number)` → `Math.min` | Paling deskriptif |

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
