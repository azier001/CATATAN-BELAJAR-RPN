# 📋 RINGKASAN ALGORITMA 📋
```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 RINGKASAN ALGORITMA 📋                                  ║
║                                                                          ║
║              3 Versi Lengkap: Basic, i*i, 6k±1                           ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)

---

## 🎯 Tujuan

- ✅ Ringkasan algoritma 3 versi
- ✅ Memahami trade-offs masing-masing
- ✅ Pilih versi sesuai kebutuhan
- ✅ Quick reference untuk interview/ujian

---

## 🔄 Versi 1: For Loop Sederhana (Math.sqrt)

> 💡 **Best for:** Pemula, clarity, learning, debugging

### **Code:**
<details>
<summary> Lihat Kode (klik untuk expand) </summary>

```javascript
const isPrime = (num) => {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  const limit = Math.sqrt(num)
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false
  }

  return true
}
```

</details>


### **Konsep Inti:**
```
Handle kasus khusus (≤1, 2, genap) dulu
Simpan √num ke variabel limit
Loop dari 3 sampai limit (hanya ganjil)
Jika ketemu pembagi → return false
Selesai tanpa pembagi → return true
```

### **Step-by-Step (Detail):**
1. **Guard Clause #1:** Cek `num <= 1`
   - Jika ya → return `false` (0, 1, negatif bukan prima)
2. **Guard Clause #2:** Cek `num === 2`
   - Jika ya → return `true` (2 adalah satu-satunya prima genap)
3. **Guard Clause #3:** Cek `num % 2 === 0`
   - Jika ya → return `false` (genap lainnya bukan prima)
4. **Hitung limit:**
   - `limit = Math.sqrt(num)`
   - Simpan hasil untuk dipakai di loop
5. **Loop pembagi:**
   - Mulai dari `i = 3`
   - Kondisi: `i <= limit`
   - Increment: `i += 2` (skip genap)
6. **Di dalam loop:**
   - Cek: `num % i === 0`
   - Jika ya → return `false` (ketemu pembagi)
7. **Setelah loop selesai:**
   - return `true` (tidak ada pembagi)

### **Keywords:**
- 🛡️ **Guard clauses** - Early return untuk edge cases
- 📊 **Math.sqrt()** - Hitung akar kuadrat
- 🔄 **for loop** - Iterasi manual
- ➕ **i += 2** - Skip angka genap
- 🛑 **Early return** - Stop saat ketemu pembagi
- ⏱️ **O(√n)** complexity

### **Kapan Pakai:**
- ✅ Belajar konsep bilangan prima
- ✅ Teaching/explaining ke orang lain
- ✅ Debugging (mudah trace)
- ✅ Personal project
- ✅ Ketika readability > performance

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa handle angka 2**
```javascript
// ❌ SALAH - Angka 2 return false!
if (num % 2 === 0) return false

// ✅ BENAR - Check 2 dulu
if (num === 2) return true
if (num % 2 === 0) return false
```

**2) ❌ Loop sampai num (tidak efisien)**
```javascript
// ❌ SALAH - Loop terlalu banyak
for (let i = 3; i <= num; i += 2)

// ✅ BENAR - Cukup sampai √num
const limit = Math.sqrt(num)
for (let i = 3; i <= limit; i += 2)
```

**3) ❌ Lupa skip genap dengan i += 2**
```javascript
// ❌ SALAH - Cek genap juga (waste time)
for (let i = 3; i <= limit; i++)

// ✅ BENAR - Skip genap
for (let i = 3; i <= limit; i += 2)
```

**4) ❌ Tidak handle num ≤ 1**
```javascript
// ❌ SALAH - isPrime(1) = true (wrong!)
if (num === 2) return true
if (num % 2 === 0) return false

// ✅ BENAR - Handle ≤ 1
if (num <= 1) return false
if (num === 2) return true
if (num % 2 === 0) return false
```

**5) ❌ Salah urutan guard clauses**
```javascript
// ❌ SALAH - Cek genap dulu, 2 jadi false!
if (num % 2 === 0) return false
if (num === 2) return true  // Never reached!

// ✅ BENAR - Cek 2 dulu
if (num === 2) return true
if (num % 2 === 0) return false
```

### **💡 Insight Penting:**

> **Kenapa cukup sampai √num?**  
> Karena jika num punya pembagi, salah satunya pasti ≤ √num.  
> Contoh: 36 = 6×6, pembagi: 2,3,4,6,9,12,18 → semua pasangan punya satu ≤ 6

---

## 🚀 Versi 2: Alternatif 1 (i * i)

> 💡 **Best for:** Production, modern codebase, balance optimal

### **Code:**
<details>
<summary> Lihat Kode (klik untuk expand) </summary>

```javascript
const isPrime = (num) => {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false
  }

  return true
}
```

</details>


### **Konsep Inti:**
```
Guard clauses sama
Langsung pakai i * i <= num (tanpa Math.sqrt)
Loop & check sama
Lebih cepat & lebih clean
```

### **Step-by-Step (Detail):**
1. **Guard clauses** sama dengan Versi 1:
   - `num <= 1` → false
   - `num === 2` → true
   - `num % 2 === 0` → false
2. **Loop pembagi:**
   - Mulai dari `i = 3`
   - Kondisi: `i * i <= num` (bukan `i <= Math.sqrt(num)`)
   - Increment: `i += 2`
3. **Di dalam loop:**
   - Cek: `num % i === 0`
   - Jika ya → return `false`
4. **Setelah loop:**
   - return `true`

### **Keywords:**
- 🚀 **i * i <= num** - Lebih cepat dari Math.sqrt
- ⚡ **Integer multiplication** - Operasi cepat
- 💾 **No extra variable** - Tidak perlu `limit`
- ⏱️ **O(√n)** complexity

### **Perbedaan dari Versi 1:**
```diff
- const limit = Math.sqrt(num)
- for (let i = 3; i <= limit; i += 2) {
+ for (let i = 3; i * i <= num; i += 2) {
```

**Hanya 1 baris berubah!**

### **Kapan Pakai:**
- ✅ Production code
- ✅ Team development
- ✅ Performance penting
- ✅ Modern JavaScript project
- ✅ **RECOMMENDED untuk sebagian besar kasus**

### **Pitfalls (Jebakan Umum):**

**1) ❌ Pakai i ** 2 atau Math.pow**
```javascript
// ❌ LAMBAT - Exponentiation operator
for (let i = 3; i ** 2 <= num; i += 2)

// ❌ LEBIH LAMBAT - Function call
for (let i = 3; Math.pow(i, 2) <= num; i += 2)

// ✅ TERCEPAT - Multiplication
for (let i = 3; i * i <= num; i += 2)
```

**2) ❌ Typo i * i**
```javascript
// ❌ SALAH - Typo
for (let i = 3; i * 1 <= num; i += 2)  // i * 1 = i (wrong!)

// ✅ BENAR
for (let i = 3; i * i <= num; i += 2)
```

**3) ❌ Guard clauses sama, tapi tetap wajib!**
```javascript
// ❌ SALAH - Lupa guard clauses
for (let i = 3; i * i <= num; i += 2) {
  // isPrime(2) akan salah!
}

// ✅ BENAR - Guard clauses lengkap
if (num <= 1) return false
if (num === 2) return true
if (num % 2 === 0) return false
```

### **💡 Insight Penting:**

> **Kenapa i * i lebih cepat dari Math.sqrt()?**  
> 
> Math.sqrt() = floating-point operation (lambat)  
> i * i = integer multiplication (sangat cepat di CPU)  
> 
> 1x Math.sqrt ≈ 10-20x perkalian dalam waktu!

---

## ⚡ Versi 3: Alternatif 2 (6k ± 1)

> 💡 **Best for:** Competitive programming, performance critical

### **Code:**
<details>
<summary> Lihat Kode (klik untuk expand) </summary>

```javascript
const isPrime = (num) => {
  if (num <= 1) return false
  if (num <= 3) return true
  if (num % 2 === 0 || num % 3 === 0) return false

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false
  }

  return true
}
```


</details>

### **Konsep Inti:**
```
Semua prima > 3 berbentuk 6k ± 1
Guard: ≤1, ≤3, kelipatan 2 atau 3
Loop dari 5, increment +6
Cek i (6k-1) dan i+2 (6k+1) sekaligus
```

### **Step-by-Step (Detail):**
1. **Guard Clause #1:** `num <= 1` → false
2. **Guard Clause #2:** `num <= 3` → true
   - Mencakup 2 dan 3 (keduanya prima)
3. **Guard Clause #3:** `num % 2 === 0 || num % 3 === 0` → false
   - Skip semua kelipatan 2 dan 3
4. **Loop pembagi (pattern 6k±1):**
   - Mulai dari `i = 5` (6×1 - 1)
   - Kondisi: `i * i <= num`
   - Increment: `i += 6` (lompat ke 6k-1 berikutnya)
5. **Di dalam loop:**
   - Cek `i` (bentuk 6k-1): `num % i === 0`
   - Cek `i+2` (bentuk 6k+1): `num % (i + 2) === 0`
   - Jika salah satu ketemu → return `false`
6. **Setelah loop:**
   - return `true`

### **Keywords:**
- ⚡ **6k ± 1 pattern** - Skip kelipatan 3 otomatis
- 🎯 **i += 6** - Lompat 6 (efisien)
- ✅ **2 checks per iteration** - Cek i dan i+2
- 🚀 **60% fewer iterations** - Dibanding versi 1 & 2
- ⏱️ **O(√n/3)** complexity

### **Visualisasi Pattern:**

| i | 6k-1? | i+2 | 6k+1? |
|---|-------|-----|-------|
| 5 | ✅ 6×1-1 | 7 | ✅ 6×1+1 |
| 11 | ✅ 6×2-1 | 13 | ✅ 6×2+1 |
| 17 | ✅ 6×3-1 | 19 | ✅ 6×3+1 |
| 23 | ✅ 6×4-1 | 25 | ✅ 6×4+1 |

**Skip otomatis:** 9, 15, 21, 27... (kelipatan 3)

### **Kapan Pakai:**
- ✅ Competitive programming
- ✅ Performance critical application
- ✅ Processing jutaan angka
- ✅ Latency harus minimal
- ⚠️ HANYA jika benar-benar butuh optimasi maksimal

### **Pitfalls (Jebakan Umum):**

**1) ❌ Guard clause salah**
```javascript
// ❌ SALAH - num=3 akan masuk loop
if (num <= 1) return false
if (num === 2) return true
if (num % 2 === 0 || num % 3 === 0) return false

// ✅ BENAR - Handle 3 dulu
if (num <= 1) return false
if (num <= 3) return true  // 2 dan 3 prima
if (num % 2 === 0 || num % 3 === 0) return false
```

**2) ❌ Lupa cek i+2**
```javascript
// ❌ SALAH - Cuma cek 6k-1, skip 6k+1
if (num % i === 0) return false

// ✅ BENAR - Cek i dan i+2
if (num % i === 0 || num % (i + 2) === 0) return false
```

**3) ❌ Mulai dari i=3 atau i=7**
```javascript
// ❌ SALAH - Mulai dari 3 (bukan 6k-1)
for (let i = 3; i * i <= num; i += 6)

// ❌ SALAH - Mulai dari 7 (skip 5)
for (let i = 7; i * i <= num; i += 6)

// ✅ BENAR - Mulai dari 5 (6×1-1)
for (let i = 5; i * i <= num; i += 6)
```

**4) ❌ Increment salah**
```javascript
// ❌ SALAH - Increment +2 (seperti versi basic)
for (let i = 5; i * i <= num; i += 2)

// ✅ BENAR - Increment +6
for (let i = 5; i * i <= num; i += 6)
```

### **💡 Insight Penting:**

> **Kenapa 6k ± 1?**  
> 
> Semua angka bisa ditulis: 6k, 6k+1, 6k+2, 6k+3, 6k+4, 6k+5  
> 
> - 6k, 6k+2, 6k+4 → genap (habis dibagi 2)  
> - 6k+3 → habis dibagi 3  
> - Hanya 6k+1 dan 6k+5 (= 6k-1) yang mungkin prima!

---

## 📊 Perbandingan Lengkap

| Aspek | Versi 1 (Math.sqrt) | Versi 2 (i*i) | Versi 3 (6k±1) |
|-------|---------------------|---------------|----------------|
| **Lines** | 11 | 10 | 11 |
| **Complexity** | O(√n) | O(√n) | **O(√n/3)** |
| **Kecepatan** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Readability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Learning Curve** | Easy | Easy | Medium |
| **Debugging** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Memory** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Team-friendly** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Best For** | Learning | Production | Competitive |

### **Performa untuk isPrime(97):**

| Versi | Iterasi | Checks |
|-------|---------|--------|
| Versi 1 | 5 | 5 |
| Versi 2 | 5 | 5 |
| Versi 3 | **2** | **4** |

**Versi 3 = 60% lebih sedikit iterasi!** 🚀

---

## 🎯 Decision Tree

```
Apakah kamu pemula atau belajar?
├─ YES → Versi 1 (Math.sqrt)
└─ NO → Lanjut

Apakah production code atau team project?
├─ YES → Versi 2 (i * i)
└─ NO → Lanjut

Apakah competitive programming atau performance critical?
├─ YES → Versi 3 (6k ± 1)
└─ NO → Versi 2 (i * i)
```

**Default choice:** Versi 2 (i * i) - balance terbaik! ✅

---

## 💡 Mnemonic: "G-L-R"

Untuk mengingat struktur algoritma:
```
G = Guard clauses (handle edge cases dulu)
L = Loop pembagi (cek dari 3 atau 5)
R = Return true (jika tidak ada pembagi)
```

---

## 🧪 Test Cases

```javascript
const isPrime = (num) => {
  // Pilih salah satu versi di atas
}

const testCases = [
  // Edge cases
  { input: 0, expected: false, desc: "Zero bukan prima" },
  { input: 1, expected: false, desc: "One bukan prima" },
  { input: 2, expected: true, desc: "Two adalah prima" },

  // Small primes
  { input: 3, expected: true, desc: "Three prima" },
  { input: 7, expected: true, desc: "Seven prima" },
  { input: 11, expected: true, desc: "Eleven prima" },

  // Non-primes
  { input: 4, expected: false, desc: "Four bukan prima (2×2)" },
  { input: 9, expected: false, desc: "Nine bukan prima (3×3)" },
  { input: 15, expected: false, desc: "Fifteen bukan prima (3×5)" },

  // Larger numbers
  { input: 23, expected: true, desc: "Twenty-three prima" },
  { input: 33, expected: false, desc: "Thirty-three bukan prima (3×11)" },
  { input: 49, expected: false, desc: "Forty-nine bukan prima (7×7)" },
  { input: 97, expected: true, desc: "Ninety-seven prima" },
]

// Run tests
testCases.forEach(({ input, expected, desc }, index) => {
  const result = isPrime(input)
  const status = result === expected ? '✅ PASS' : '❌ FAIL'

  console.log(
    `Test Case #${index + 1}: ${status} - ${desc} | isPrime(${input}) = ${result}`
  )

  if (status === '❌ FAIL') {
    console.log('Input   :', input)
    console.log('Expected:', expected)
    console.log('Result  :', result)
  }
})

```

---

## 🎓 Pseudocode (Ujian)

Jika hanya ingat konsep:

```
FUNCTION isPrime(num):
  
  // Guard clauses
  IF num <= 1 THEN RETURN false
  IF num = 2 THEN RETURN true
  IF num habis dibagi 2 THEN RETURN false
  
  // Loop cari pembagi
  FOR i FROM 3 TO √num STEP 2:
    IF num habis dibagi i THEN
      RETURN false
    END IF
  END FOR
  
  // Tidak ada pembagi
  RETURN true
  
END FUNCTION
```

**Variasi:**
- √num bisa pakai `Math.sqrt(num)` atau `i * i <= num`
- Advanced: pakai pattern 6k±1

---

## 🔑 Key Takeaways

> **💡 Guard Clauses First**  
> Handle edge cases (≤1, 2, genap) di awal

> **💡 Loop Cukup Sampai √n**  
> Efisiensi dari O(n) ke O(√n)

> **💡 Skip Genap dengan i += 2**  
> Genap sudah dicek di guard clause

> **💡 Versi 2 = Best Default**  
> i * i balance performa & readability

> **💡 Versi 3 = Overkill untuk Banyak Kasus**  
> Hanya pakai jika benar-benar butuh speed

> **💡 Context Matters**  
> Learning → Versi 1, Production → Versi 2, Competition → Versi 3

---

## 📚 Related Algorithms

Setelah master ini, explore:
- **Sieve of Eratosthenes** - Cari banyak prima sekaligus
- **Miller-Rabin** - Probabilistic primality test
- **AKS Primality Test** - Deterministic polynomial time

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📊 [← Kembali ke Part 6: Perbandingan & Kesimpulan](06-Perbandingan-Kesimpulan.md)**

---

<div align="center">

## 🎯 Quick Reference Card

**Versi 1:** `const limit = Math.sqrt(num); for (let i = 3; i <= limit; i += 2)`  
**Versi 2:** `for (let i = 3; i * i <= num; i += 2)`  
**Versi 3:** `for (let i = 5; i * i <= num; i += 6) { check i & i+2 }`

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
