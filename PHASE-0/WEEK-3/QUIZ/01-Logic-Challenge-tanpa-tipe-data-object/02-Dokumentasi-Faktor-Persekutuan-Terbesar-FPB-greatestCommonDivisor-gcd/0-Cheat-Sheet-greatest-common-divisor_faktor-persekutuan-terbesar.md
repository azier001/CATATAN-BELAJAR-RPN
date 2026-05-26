# 🔄 Cheat Sheet — Greatest Common Divisor (GCD) / FPB

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Euclidean Rekursif ⭐ `PALING ELEGAN`

```javascript
/**
 * Calculate the Greatest Common Divisor (GCD) of two numbers
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {number} - GCD of num1 and num2
 */
const gcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return gcd(num2, num1 % num2);
};
```

> 🔑 Hanya butuh 2 baris. Memanfaatkan Call Stack untuk manajemen state pembagian sisa (modulo) sampai 0.

### 2. Euclidean Iteratif (While Loop) ⭐ `PALING AMAN (NO STACK OVERFLOW)`

```javascript
const gcd = (num1, num2) => {
  while (num2 > 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  
  return num1;
};
```

> 🔑 Sama cepatnya dengan Rekursif (O(log n)), namun memory footprint O(1). Aman untuk production critical tanpa risiko stack overflow.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. Brute Force Looping Turun ⭐ `LOGIKA INTUITIF`

```javascript
const gcd = (num1, num2) => {
  const minNumber = Math.min(num1, num2);
  
  for (let faktor = minNumber; faktor >= 1; faktor--) {
    if (num1 % faktor === 0 && num2 % faktor === 0) {
      return faktor;
    }
  }
};
```

> 🔑 Pencarian faktor bersama dari angka terbesar turun ke bawah, sehingga faktor pertama yang cocok PASTI FPB-nya.

### 4. Brute Force Looping Naik

```javascript
const gcd = (num1, num2) => {
  const minNumber = Math.min(num1, num2);
  let currentGcd = 1;

  for (let faktor = 1; faktor <= minNumber; faktor++) {
    if (num1 % faktor === 0 && num2 % faktor === 0) {
      currentGcd = faktor;
    }
  }

  return currentGcd;
};
```

> 🔑 Mengecek seluruh kemungkinan dari 1 ke atas dan menimpa variabel terus menerus. Sangat lambat untuk angka besar karena Kompleksitas O(n).

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 5. Euclidean One-Liner (Code Golf)

```javascript
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
```

> 🔑 Versi yang dipadatkan (minify) dari fungsi Rekursif. Sangat cocok untuk competitive programming, namun tidak disarankan di codebase tim (readability).

---

## ⚠️ GOTCHA CEPAT

- **Modulo vs Pembagian**: Jangan gunakan `/` (pembagian biasa) di Algoritma Euclidean. Algoritma Euclidean hanya bekerja dengan **sisa hasil bagi** alias `%` (Modulo).
- **Batas Brute Force**: Pada Brute Force, JANGAN me-loop sampai `Math.max(num1, num2)`. FPB dari dua angka tidak akan pernah lebih besar dari nilai terkecilnya (`Math.min(num1, num2)`).
- **Infinite Loop (Euclidean Iteratif)**: Kondisi `while` harus `num2 !== 0` atau `num2 > 0`. Jika lupa memperbarui `num2` dengan modulus di dalam loop, browser akan *freeze*.
- **Singkatan Benar**: Jangan sampai salah *typo*, penulisannya yang benar di Bahasa Inggris adalah **GCD** *(Greatest Common Divisor)*, BUKAN *GDC*.

---

## 📊 QUICK COMPARISON

| Versi | Algoritma | Kecepatan (Kompleksitas) | Baris Kode | Keunggulan Utama | Label |
|---|---|---|---|---|---|
| **V1** | Brute Force Naik | O(n) (Sangat Lambat) | 8-10 | Mudah dipelajari pemula | ❌ Belajar Saja |
| **V2** | Brute Force Turun | O(n) (Agak Lambat) | 5-7 | Langsung return di awal | ❌ Belajar Saja |
| **V3** | Euclidean Iteratif | O(log n) (Sangat Cepat)| 7 | 0% Memory Overhead (Safe)| 🏆 Production |
| **V4** | Euclidean Rekursif | O(log n) (Sangat Cepat)| 2-4 | Paling elegant & clean | 🏆 Interview |
| **V5** | Euclidean One-Liner| O(log n) (Sangat Cepat)| 1 | Sangat ringkas | 🧪 CP Only |

---

## 🧪 TEST CASES

```javascript
// TEST CASES
console.log(gcd(12, 16)); // 4
console.log(gcd(50, 40)); // 10
console.log(gcd(22, 99)); // 11
console.log(gcd(24, 36)); // 12
console.log(gcd(17, 23)); // 1
```
