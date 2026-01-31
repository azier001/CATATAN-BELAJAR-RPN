```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📚 PART 1: ANALISIS KODE LAMA & IDENTIFIKASI BUG 📚       ║
║                                                                          ║
║                  Kenapa Kode Awal "Kebetulan" Benar?                    ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 🐛 Kode Bug | 🔍 Issue #1 | 🔍 Issue #2 | 🔍 Issue #3 | 📊 Test | 💡 Takeaways |
|:-----------:|:-----------:|:-----------:|:-----------:|:-------:|:------------:|
| [Jump](#-kode-original-bermasalah) | [Jump](#-issue-1-logika-str-length) | [Jump](#-issue-2-pengecekan-tidak-lengkap) | [Jump](#-issue-3-edge-case-diabaikan) | [Jump](#-test-results) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami kode original yang bermasalah
- ✅ Mengidentifikasi 3 issue utama
- ✅ Mengetahui kenapa kode "kebetulan" benar
- ✅ Siap untuk perbaikan di Part 2

---

## 🐛 Kode Original Bermasalah

```javascript
function angkaPrima(angka) {
  if (angka % 2 === 0) return false

  const str = String(angka)
  let count = 0

  for (let i = 2; i <= angka; i++) {
    if (str.length < 2) {
      return true
    } else if (angka % i === 0) {
      count++
    }
  }

  return count === 1
}
```

**Context:** Ini implementasi pertama untuk cek bilangan prima. Test case lolos semua, tapi ada **3 issue serius**! 🐛

---

## 🔍 Issue #1: Logika `str.length` Tidak Relevan

### **Masalah:**
```javascript
const str = String(angka)  // Ubah angka jadi string
...
if (str.length < 2) {
  return true  // ❌ Logika ini SALAH!
}
```

**Kenapa salah?**

Bilangan prima **TIDAK ada hubungannya dengan panjang digit**!

**Contoh yang membantah:**
```javascript
// Angka 1 digit
isPrime(7)  // str.length = 1 → return true ✅ (kebetulan benar)
isPrime(9)  // str.length = 1 → return true ❌ (SALAH! 9 = 3×3)

// Angka 2 digit
isPrime(11)  // str.length = 2 → lanjut loop (benar)
isPrime(10)  // str.length = 2 → lanjut loop (benar)
```

### **Fakta:**
- `str.length < 2` hanya benar **kebetulan** untuk angka 2, 3, 5, 7
- Tapi **gagal total** untuk angka 9 (bukan prima tapi return true!)

### **Harusnya:**
```javascript
// Cek pembagi, BUKAN panjang string!
for (let i = 2; i <= Math.sqrt(angka); i++) {
  if (angka % i === 0) return false
}
return true
```

---

## 🔍 Issue #2: Pengecekan Tidak Lengkap

### **Masalah #1: Angka 2 Salah**
```javascript
if (angka % 2 === 0) return false
```

**Kenapa salah?**

Angka **2 adalah satu-satunya bilangan prima genap**!

```javascript
isPrime(2)  
// 2 % 2 === 0 → return false ❌
// Expected: true
```

### **Masalah #2: Angka ≤ 1 Tidak Dicek**
```javascript
// Tidak ada pengecekan untuk angka ≤ 1
isPrime(1)   // Seharusnya false
isPrime(0)   // Seharusnya false
isPrime(-5)  // Seharusnya false
```

### **Harusnya:**
```javascript
if (angka <= 1) return false
if (angka === 2) return true
if (angka % 2 === 0) return false
```

---

## 🔍 Issue #3: Edge Case Diabaikan

### **Masalah: Loop Tidak Efisien**
```javascript
for (let i = 2; i <= angka; i++) {
  //           ^^^^^^^^
  // Loop sampai angka itu sendiri!
}
```

**Kenapa tidak efisien?**

Untuk cek prima, **cukup sampai √angka**!

**Contoh:**
```javascript
isPrime(100)
// Loop: i = 2, 3, 4, 5, ..., 100 (100 iterasi!)
// Padahal cukup: i = 2, 3, 4, ..., 10 (√100 = 10)
```

**Logika:**
- Jika 100 punya pembagi, pasti ada di bawah √100
- Contoh: 100 = 10 × 10, 100 = 4 × 25, 100 = 2 × 50
- Semua pasangan punya satu angka ≤ 10

### **Harusnya:**
```javascript
for (let i = 2; i <= Math.sqrt(angka); i++) {
  // Atau: i * i <= angka
}
```

---

## 📊 Test Results

### **Test dengan Kode Original:**

```javascript
const testCases = [
  { input: 3, expected: true },
  { input: 7, expected: true },
  { input: 6, expected: false },
  { input: 23, expected: true },
  { input: 33, expected: false },
]

testCases.forEach(({ input, expected }) => {
  const result = angkaPrima(input)
  console.log(`angkaPrima(${input}): ${result === expected ? '✅' : '❌'}`)
})
```

**Hasil:**
```
angkaPrima(3): ✅   (kebetulan benar karena str.length < 2)
angkaPrima(7): ✅   (kebetulan benar karena str.length < 2)
angkaPrima(6): ✅   (benar, genap)
angkaPrima(23): ✅  (benar, count logic)
angkaPrima(33): ✅  (benar, count logic)

Success: 5/5 = 100% ✅
```

**Tapi coba test case lain:**

```javascript
angkaPrima(2)   // ❌ false (harusnya true)
angkaPrima(9)   // ❌ true (harusnya false!)
angkaPrima(1)   // ❌ true (harusnya false!)
angkaPrima(11)  // ✅ true
angkaPrima(13)  // ✅ true
```

**Kesimpulan:**
- Test case awal: **kebetulan lolos**
- Test case lengkap: **gagal!**

---

## 🔍 Kenapa "Kebetulan" Benar?

### **Untuk angka 3 dan 7:**
```javascript
angkaPrima(3)
// str.length = 1 < 2 → return true ✅
// Kebetulan 3 memang prima!

angkaPrima(7)
// str.length = 1 < 2 → return true ✅
// Kebetulan 7 memang prima!
```

### **Untuk angka 23:**
```javascript
angkaPrima(23)
// str.length = 2 (tidak < 2) → lanjut loop
// Loop: i=2 sampai i=23
//   i=23: 23 % 23 === 0 → count++ (count = 1)
// return count === 1 → true ✅
// Benar karena hanya dibagi dirinya sendiri
```

### **Tapi gagal untuk angka 9:**
```javascript
angkaPrima(9)
// str.length = 1 < 2 → return true ❌
// Padahal 9 = 3×3 (bukan prima!)
```

---

## 💡 Pelajaran Penting

### **1. Test Case Tidak Cukup**

> **Lolos test ≠ kode benar**  
> Butuh test case yang **comprehensive**!

**Test case awal hanya cover:**
- ✅ Angka 1 digit prima (3, 7)
- ✅ Angka genap (6)
- ✅ Angka 2 digit prima (23)
- ✅ Angka komposit (33)

**Test case yang terlewat:**
- ❌ Angka 2 (prima genap)
- ❌ Angka 9 (1 digit, bukan prima)
- ❌ Angka ≤ 1

### **2. Logika Harus Tepat**

> **Kebetulan benar ≠ logika benar**  
> `str.length` tidak relevan dengan bilangan prima!

### **3. Edge Case Penting**

> **Edge case bukan optional**  
> Angka 2, angka ≤ 1, dan efisiensi loop harus dipikirkan!

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa <code>str.length < 2</code> salah?</strong></summary>

**Jawaban:**

Bilangan prima tidak ada hubungannya dengan panjang digit!

Contoh:
- 9 adalah 1 digit → tapi bukan prima (9 = 3×3)
- 11 adalah 2 digit → tapi prima
- 97 adalah 2 digit → tapi prima

Yang benar: cek apakah punya pembagi selain 1 dan dirinya sendiri.

</details>

<details>
<summary><strong>❓ Kenapa angka 2 special?</strong></summary>

**Jawaban:**

Angka 2 adalah **satu-satunya bilangan prima genap**.

Semua angka genap lainnya (4, 6, 8, ...) bisa dibagi 2, jadi bukan prima.

Jadi harus handle case khusus:
```javascript
if (angka === 2) return true
if (angka % 2 === 0) return false
```

</details>

<details>
<summary><strong>❓ Dari 3 issue, mana yang paling critical?</strong></summary>

**Jawaban:**

**Issue #1 (Logika str.length)** paling critical karena:
- Konsep dasarnya salah
- Bisa gagal untuk banyak kasus
- Hanya "kebetulan" benar

Issue #2 dan #3 lebih mudah diperbaiki (tambah guard clauses dan optimasi loop).

</details>

---

## ✅ Key Takeaways

**Tentang Kode:**
- ❌ Logika `str.length` tidak relevan dengan bilangan prima
- ❌ Angka 2 tidak di-handle dengan benar
- ❌ Loop tidak efisien (sampai angka, harusnya √angka)

**Tentang Testing:**
- ⚠️ Test case awal terlalu terbatas
- ⚠️ Lolos test ≠ kode benar
- ⚠️ Butuh edge case testing

**Pelajaran:**

> **💡 Pahami Konsep Dasar**  
> Bilangan prima = cek pembagi, bukan panjang string!

> **💡 Test Secara Menyeluruh**  
> Include edge cases: 2, angka 1 digit non-prima, angka ≤ 1

> **💡 Kebetulan Benar ≠ Benar**  
> Logika harus tepat, bukan hanya hasil yang kebetulan cocok!

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔧 [Lanjut ke Part 2: Perbaikan Step-by-Step →](02-Perbaikan-Step-by-Step.md)**

---

<div align="center">

**Siap untuk perbaikan systematic di Part 2?**

Made with ❤️ for learners

</div>
