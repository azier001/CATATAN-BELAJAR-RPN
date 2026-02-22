# 📚 Digit Perkalian Minimum - PART 7: RINGKASAN ALGORITMA SEMUA VERSI

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         📋 PART 7: RINGKASAN ALGORITMA SEMUA VERSI 📋                   ║
║                                                                          ║
║              Step-by-Step Setiap Solusi dalam Satu Tempat                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔄 For Loop Optimal | 🔀 Functional Style | 🔀 Best of Both |
|:-------------------:|:-------------------:|:---------------:|
| [Jump](#-for-loop-optimal) | [Jump](#-functional-style) | [Jump](#-best-of-both-worlds) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Bisa membandingkan alur kerja setiap solusi secara berdampingan
- ✅ Memahami persamaan dan perbedaan antar versi
- ✅ Siap untuk melihat perbandingan final di Part 8

---

## 🔄 For Loop Optimal

> 💡 **Best for:** Pemula, clarity, learning, debugging

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
1. **Inisialisasi `minDigitCount = Infinity`** — dideklarasikan sebelum loop agar bisa diupdate dan diakses sepanjang iterasi

#### 🔄 Di Dalam Loop `for (let i = 1; i * i <= angka; i++)`:
2. **Kondisi loop** — mulai `i = 1`, berjalan selama `i * i <= angka`, increment `i++`
3. **`if (angka % i === 0)`** — cek apakah `i` adalah faktor; jika tidak → skip ke iterasi berikutnya
4. **`const complement = angka / i`** *(di dalam `if`)* — hitung pasangan faktor dari `i`
5. **`` const digitCount = `${i}${complement}`.length ``** *(di dalam `if`)* — gabung jadi string, hitung panjangnya
6. **`if (digitCount < minDigitCount)`** *(di dalam `if`)* — jika lebih kecil → update `minDigitCount`

#### 🔵 Di Luar Loop:
7. **`return minDigitCount`** — return nilai minimum setelah loop selesai

### **Keywords:**
- 🔢 **Infinity** — nilai awal agar perbandingan pertama selalu true
- 📊 **i * i <= angka** — loop hanya sampai √angka tanpa `Math.sqrt()`
- 🧩 **complement** — pasangan faktor dari `i`
- ⏱️ **O(√n)** complexity

---

## 🔀 Functional Style

> 💡 **Best for:** Yang sudah familiar functional programming, kode lebih deklaratif

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
1. **`const squareRoot = Math.floor(Math.sqrt(number))`** — hitung √number, bulatkan ke bawah sebagai batas atas array

#### 🔄 Di Dalam Method Chain:
2. **`Array.from({ length: squareRoot }, (_, i) => i + 1)`** — buat array `[1, 2, ..., squareRoot]`
3. **`.filter(i => number % i === 0)`** — saring, hanya simpan faktor dari `number`
4. **`.reduce((minDigitCount, i) => { ... }, Infinity)`** — iterasi setiap faktor:
   - **`const complement = number / i`** — hitung pasangan faktor
   - **`` const digitCount = `${i}${complement}`.length ``** — hitung jumlah digit
   - **`return Math.min(minDigitCount, digitCount)`** — return nilai terkecil sebagai accumulator berikutnya

#### 🔵 Di Luar Method Chain:
5. **Return** — hasil `reduce` langsung di-return tanpa variabel tambahan

### **Keywords:**
- 📐 **Math.sqrt()** — hitung akar kuadrat
- 🏗️ **Array.from** — buat array dari panjang tertentu
- 🔍 **filter** — saring elemen yang memenuhi kondisi
- 📉 **reduce** — akumulasi nilai menjadi satu hasil
- ⏱️ **O(√n)** complexity

---

## 🔀 Best of Both Worlds

> 💡 **Best for:** Kode paling deskriptif, naming convention terbaik

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
1. **Inisialisasi `minDigitCount = Infinity`** — dideklarasikan sebelum loop agar bisa diupdate dan diakses sepanjang iterasi

#### 🔄 Di Dalam Loop `for (let factor = 1; factor * factor <= number; factor++)`:
2. **Kondisi loop** — mulai `factor = 1`, berjalan selama `factor * factor <= number`, increment `factor++`
3. **`if (number % factor === 0)`** — cek apakah `factor` adalah faktor; jika tidak → skip ke iterasi berikutnya
4. **`const pairedFactor = number / factor`** *(di dalam `if`)* — hitung pasangan faktor dari `factor`
5. **`` const digitCount = `${factor}${pairedFactor}`.length ``** *(di dalam `if`)* — gabung jadi string, hitung panjangnya
6. **`minDigitCount = Math.min(minDigitCount, digitCount)`** *(di dalam `if`)* — update langsung dengan `Math.min`, tanpa blok `if` tambahan

#### 🔵 Di Luar Loop:
7. **`return minDigitCount`** — return nilai minimum setelah loop selesai

### **Keywords:**
- 🔢 **Infinity** — nilai awal agar perbandingan pertama selalu true
- 📊 **factor * factor <= number** — loop hanya sampai √number
- 🧩 **pairedFactor** — nama lebih deskriptif dari `complement`
- 🔢 **Math.min** — update minimum tanpa blok `if`
- ⏱️ **O(√n)** complexity

---

## 📊 Perbandingan Cepat

| Aspek | For Loop Optimal | Functional Style | Best of Both |
|-------|:----------------:|:----------------:|:------------:|
| Nama variabel loop | `i` | `i` | `factor` ✅ |
| Nama pasangan faktor | `complement` | `complement` | `pairedFactor` ✅ |
| Update minimum | `if` block | `Math.min` | `Math.min` ✅ |
| Struktur | for loop | method chain | for loop |
| Kompleksitas | O(√n) | O(√n) | O(√n) |
| Mudah di-debug | ✅ | ⚠️ | ✅ |

---

## 🧪 Test Cases

```javascript
const testCases = [
  { input: 1,   expected: 2, desc: "1 → 1×1 = '11' = 2 digits" },
  { input: 2,   expected: 2, desc: "2 → 1×2 = '12' = 2 digits" },
  { input: 4,   expected: 2, desc: "4 → 2×2 = '22' = 2 digits" },
  { input: 24,  expected: 2, desc: "24 → 3×8 or 4×6 = 2 digits" },
  { input: 90,  expected: 3, desc: "90 → 9×10 = '910' = 3 digits" },
  { input: 20,  expected: 2, desc: "20 → 4×5 = '45' = 2 digits" },
  { input: 179, expected: 4, desc: "179 is prime → 1×179 = '1179' = 4 digits" },
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
Test Case #4:  ✅ PASS - 24 → 3×8 or 4×6 = 2 digits       | getMinimumMultiplicationDigits(24) = 2
Test Case #5:  ✅ PASS - 90 → 9×10 = '910' = 3 digits     | getMinimumMultiplicationDigits(90) = 3
Test Case #6:  ✅ PASS - 20 → 4×5 = '45' = 2 digits       | getMinimumMultiplicationDigits(20) = 2
Test Case #7:  ✅ PASS - 179 is prime → 1×179 = 4 digits   | getMinimumMultiplicationDigits(179) = 4
Test Case #8:  ✅ PASS - 100 → 4×25 = '425' = 3 digits    | getMinimumMultiplicationDigits(100) = 3
Test Case #9:  ✅ PASS - 81 → 9×9 = '99' = 2 digits       | getMinimumMultiplicationDigits(81) = 2
Test Case #10: ✅ PASS - 144 → 9×16 = '916' = 3 digits    | getMinimumMultiplicationDigits(144) = 3

Success: 10/10 ✅
```

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔀 [← Kembali ke Part 6: Alternatif Best of Both](06-alternatif-best-of-both.md)**
- **🏁 [Lanjut ke Part 8: Perbandingan & Kesimpulan →](08-perbandingan-kesimpulan.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
