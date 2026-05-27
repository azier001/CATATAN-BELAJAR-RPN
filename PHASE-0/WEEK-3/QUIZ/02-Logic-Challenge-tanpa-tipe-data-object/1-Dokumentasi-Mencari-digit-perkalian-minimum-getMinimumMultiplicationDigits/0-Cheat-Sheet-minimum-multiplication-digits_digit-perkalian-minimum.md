# 🔄 Cheat Sheet — Minimum Multiplication Digits (Digit Perkalian Minimum)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Solusi Optimal Industri (O(√N), Memory Optimized) ⭐ `PALING DIREKOMENDASIKAN`

```javascript
/**
 * Mencari jumlah digit minimum dari penggabungan pasangan faktor sebuah angka
 * @param {number} targetNumber - Angka yang akan dicari faktornya
 * @returns {number} Jumlah digit paling sedikit dari pasangan faktor
 */
const getMinimumMultiplicationDigits = (targetNumber) => {
  let minDigits = Infinity;
  const maxDivisor = Math.sqrt(targetNumber); // Cache agar tidak repetitif

  for (let divisor = 1; divisor <= maxDivisor; divisor++) {
    if (targetNumber % divisor === 0) {
      const quotient = targetNumber / divisor;
      // Hitung digit TANPA alokasi memori string baru
      const totalDigits = String(divisor).length + String(quotient).length;
      minDigits = Math.min(minDigits, totalDigits);
    }
  }

  return minDigits;
};
```

> 🔑 **Key Takeaway**: Loop berhenti di `Math.sqrt` (cache). Menghitung `length` terpisah jauh lebih efisien secara memori daripada menggabungkan (concatenate) string.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 2. For Loop Dasar (O(N)) ⭐ `PALING INTUITIF`

```javascript
const getMinimumMultiplicationDigits = (targetNumber) => {
  let minDigits = Infinity;

  for (let divisor = 1; divisor <= targetNumber; divisor++) {
    if (targetNumber % divisor === 0) {
      const quotient = targetNumber / divisor;
      const combinedFactors = `${divisor}${quotient}`;

      if (combinedFactors.length < minDigits) {
        minDigits = combinedFactors.length;
      }
    }
  }

  return minDigits;
};
```

> 🔑 **Key Takeaway**: Bagus untuk melatih nalar dasar perulangan mencari faktor dari 1 hingga N, namun kurang optimal untuk input berukuran besar karena iterasi ganda (duplikat faktor kebalikan).

### 3. For Loop dengan Optimasi `i * i <= targetNumber` (Tanpa Math.sqrt)

```javascript
const getMinimumMultiplicationDigits = (number) => {
  let minDigitCount = Infinity;

  for (let factor = 1; factor * factor <= number; factor++) {
    if (number % factor === 0) {
      const pairedFactor = number / factor;
      const digitCount = `${factor}${pairedFactor}`.length;

      minDigitCount = Math.min(minDigitCount, digitCount);
    }
  }

  return minDigitCount;
};
```

> 🔑 **Key Takeaway**: Pendekatan alternatif pemangkasan loop akar kuadrat tanpa memanggil fungsi _built-in_ `Math.sqrt()`.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 4. Functional Style (Deklaratif Method Chaining) ⚠️ `HINDARI DI PRODUCTION KECUALI PERLU`

```javascript
const getMinimumMultiplicationDigits = (number) => {
  const squareRoot = Math.floor(Math.sqrt(number));

  return Array.from({ length: squareRoot }, (_, i) => i + 1)
    .filter(i => number % i === 0)
    .reduce((minDigitCount, i) => {
      const complement = number / i;
      const digitCount = `${i}${complement}`.length;

      return Math.min(minDigitCount, digitCount);
    }, Infinity);
};
```

> 🔑 **Key Takeaway**: Pendekatan fungsional yang terlihat elegan (deklaratif) tetapi boros memori karena harus menginisialisasi array dan melakukan iterasi berulang (`filter` dan `reduce`).

---

## ⚠️ GOTCHA CEPAT

**Menggabungkan String vs Menjumlahkan Length**
```javascript
// ❌ BOROS MEMORI:
// Engine harus membuat string baru `"38"` lalu menghitung panjangnya.
// Jika diulang ribuan kali di loop, ini akan jadi overhead memori / Garbage Collection melambat.
const digit = `${divisor}${quotient}`.length; 

// ✅ HEMAT MEMORI:
// Langsung menjumlahkan panjang dua string terpisah. Tidak ada alokasi memori string baru dari gabungan variabel.
const digit = String(divisor).length + String(quotient).length;
```

---

## 📊 QUICK COMPARISON

| Versi | Loop / Batas Iterasi | Pencarian Digit | Keunggulan Utama | Label |
|---|---|---|---|---|
| **1. Best Practice** | For loop (`<= √N`) (cached) | `.length + .length` | Paling optimal (CPU & Memori) | 🏆 Production |
| **2. Dasar (O(N))** | For loop (`<= N`) | String literal concat | Logika dasar pemula | 🧠 Belajar |
| **3. `i * i <= N`** | For loop (`i * i <= N`) | String literal concat | Menghindari built-in fungsi | 🧠 Alternatif |
| **4. Functional** | `.filter().reduce()` | String literal concat | Pendekatan deklaratif | 🧪 Eksperimen |

---

## 🧪 TEST CASES

```javascript
console.log(getMinimumMultiplicationDigits(1));   // 2
console.log(getMinimumMultiplicationDigits(2));   // 2
console.log(getMinimumMultiplicationDigits(4));   // 2
console.log(getMinimumMultiplicationDigits(24));  // 2
console.log(getMinimumMultiplicationDigits(90));  // 3
console.log(getMinimumMultiplicationDigits(20));  // 2
console.log(getMinimumMultiplicationDigits(179)); // 4
console.log(getMinimumMultiplicationDigits(100)); // 3
console.log(getMinimumMultiplicationDigits(81));  // 2
console.log(getMinimumMultiplicationDigits(144)); // 3
```
