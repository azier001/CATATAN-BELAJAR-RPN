# 🔄 Cheat Sheet — Arithmetic Sequence Detector (Detektor Deret Aritmatika)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Optimized For Loop — Early Return ⭐ `PALING DIREKOMENDASIKAN`

```javascript
function isArithmeticSequence(numbers) {
  if (numbers.length < 2) return true;
  const commonDiff = numbers[1] - numbers[0];

  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] - numbers[i - 1] !== commonDiff) {
      return false;
    }
  }

  return true;
}
```

> 🔑 Loop mulai dari `i = 2` karena `commonDiff` sudah dihitung dari index 0 & 1 — zero redundancy. Early return langsung hentikan fungsi begitu ketemu selisih yang beda. O(1) space, O(n) time. Default terbaik untuk interview & production.

---

### 2. Functional `.every()` ⭐ `PALING MODERN`

```javascript
function isArithmeticSequence(numbers) {
  if (numbers.length < 2) return true;
  const commonDiff = numbers[1] - numbers[0];

  return numbers.slice(1).every((currentNum, index) => {
    return currentNum - numbers[index] === commonDiff;
  });
}
```

> 🔑 Pendekatan deklaratif — menanyakan "apakah SEMUA elemen patuh?" alih-alih mengecek satu per satu secara manual. `.slice(1)` menggeser index sehingga `numbers[index]` otomatis merujuk ke elemen sebelumnya. Pilih ini jika tim menggunakan gaya fungsional.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 1. Explicit For Loop (i = 0) ⭐ `PALING INTUITIF`

```javascript
function isArithmeticSequence(numbers) {
  if (numbers.length < 2) return true;
  const commonDiff = numbers[1] - numbers[0];

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i + 1] - numbers[i] !== commonDiff) {
      return false;
    }
  }

  return true;
}
```

> 🔑 Mulai dari index 0, cek semua pasangan berurutan. Ada 1 pengecekan redundan (index 0 vs 1 sudah jadi `commonDiff`), tapi alurnya paling mudah dipahami pemula. Readability 5/5.

---

### 2. Flag Variable Pattern (Kode Awal Murid)

```javascript
function isArithmeticSequence(numbers) {
  const commonDiff = numbers[1] - numbers[0];
  let isValid = true;

  for (let i = 1; i < numbers.length - 1; i++) {
    const currentNumber = numbers[i];
    const nextNumber = numbers[i + 1];
    const currentDiff = nextNumber - currentNumber;

    if (currentDiff !== commonDiff) {
      isValid = false;
      break;
    }
  }

  return isValid;
}
```

> 🔑 Pola klasik: simpan hasil ke variabel flag `isValid`, lalu `break` saat ketemu pelanggaran. Sangat eksplisit alurnya, cocok untuk melatih pemahaman alur loop. Tapi terlalu verbose untuk production — lebih baik pakai Early Return.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 1. `.map()` + `.every()` Two-Step ⚠️ `OVER-ENGINEERED — HANYA UNTUK BELAJAR FP`

```javascript
function isArithmeticSequence(numbers) {
  if (numbers.length < 2) return true;

  const differences = numbers.slice(1).map((num, i) => num - numbers[i]);

  return differences.every((diff) => diff === differences[0]);
}
```

> 🔑 Pendekatan dua langkah: (1) Transform — buat array berisi semua selisih, (2) Validate — cek apakah semua selisih sama. Konsepnya elegan dan mudah di-debug (bisa `console.log(differences)`), tapi O(n) space karena membuat array baru dan 2 passes. **Jangan pakai di production jika performa penting.**

---

## ⚠️ GOTCHA CEPAT

**Lupa `.slice(1)` pada `.every()`:**
```javascript
// ❌ SALAH — tanpa .slice(1), index 0: current - arr[0] = 0, selalu ≠ diff
return numbers.every((curr, i) => curr - numbers[i] === commonDiff);

// ✅ BENAR — .slice(1) menggeser index
return numbers.slice(1).every((curr, i) => curr - numbers[i] === commonDiff);
```

**Loop `i = 1` padahal `diff` sudah dari index 0 & 1:**
```javascript
// ⚠️ BOROS — pengecekan index 1 vs 0 itu sia-sia (sudah jadi commonDiff)
const commonDiff = numbers[1] - numbers[0];
for (let i = 1; i < numbers.length; i++) { ... }

// ✅ OPTIMAL — mulai dari i = 2
for (let i = 2; i < numbers.length; i++) { ... }
```

**Flag Variable vs Early Return:**
```javascript
// ❌ VERBOSE
let isValid = true;
if (...) { isValid = false; break; }
return isValid;

// ✅ RINGKAS — return otomatis hentikan loop + fungsi
if (...) return false;
return true;
```

**Indexing "Maju" vs "Mundur":**
```javascript
// Maju (lihat ke depan) — hati-hati batas loop!
for (let i = 0; i < numbers.length - 1; i++)  // wajib -1!
  numbers[i + 1] - numbers[i]

// Mundur (lihat ke belakang) — lebih aman
for (let i = 2; i < numbers.length; i++)       // tanpa -1
  numbers[i] - numbers[i - 1]
```

---

## 📊 QUICK COMPARISON

| Versi | Baris | Paradigm | Space | Redundancy | Readability | Best For | Label |
|-------|:-----:|:--------:|:-----:|:----------:|:-----------:|----------|:-----:|
| 1. Optimized For Loop (i=2) | ~7 | Imperative | O(1) | 0 | ⭐⭐⭐⭐ | Interview & Production | 🏆 RECOMMENDED |
| 2. Functional `.every()` | ~5 | Functional | O(1) | 0 | ⭐⭐⭐⭐ | Modern JS / Tim FP | 🏆 RECOMMENDED |
| 3. Explicit For Loop (i=0) | ~8 | Imperative | O(1) | 1 check | ⭐⭐⭐⭐⭐ | Pemula / Teaching | 📘 FUNDAMENTAL |
| 4. Flag Variable | ~12 | Imperative | O(1) | 0 | ⭐⭐⭐⭐⭐ | Belajar alur loop | 📘 FUNDAMENTAL |
| 5. `.map()` + `.every()` | ~4 | Functional | O(n) | 0 | ⭐⭐⭐⭐ | Belajar FP concept | 🧪 EXPERIMENTAL |

> **Semua versi:** Time Complexity **O(n)** — harus cek setiap pasangan minimal sekali.

---

## 🧪 TEST CASES

```javascript
console.log(isArithmeticSequence([1, 2, 3, 4, 5, 6])); // true  ← selisih konstan: 1
console.log(isArithmeticSequence([2, 4, 6, 12, 24]));   // false ← selisih berubah di index 3
console.log(isArithmeticSequence([2, 4, 6, 8]));        // true  ← selisih konstan: 2
console.log(isArithmeticSequence([2, 6, 18, 54]));      // false ← ini deret geometri, bukan aritmatika
console.log(isArithmeticSequence([1, 2, 3, 4, 7, 9]));  // false ← selisih berubah di index 4
```

```
Expected output:
true   ← ✅
false  ← ✅
true   ← ✅
false  ← ✅
false  ← ✅
```
