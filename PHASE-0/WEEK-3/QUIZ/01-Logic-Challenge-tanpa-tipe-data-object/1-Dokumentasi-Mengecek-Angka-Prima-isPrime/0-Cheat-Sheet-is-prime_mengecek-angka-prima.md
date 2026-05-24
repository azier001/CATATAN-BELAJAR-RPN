# 🔄 Cheat Sheet — Mengecek Angka Prima (isPrime)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Optimasi Angka Ganjil (`i * i`) ⭐ `PALING DIREKOMENDASIKAN`

```javascript
/**
 * Mengecek apakah sebuah angka adalah bilangan prima
 * @param {number} num - Angka yang akan dicek
 * @returns {boolean} - True jika prima, false jika bukan
 */
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};
```

> 🔑 **Keunggulan:** Kombinasi performa tinggi (menghindari operasi berat `Math.sqrt()`) dan _readability_ yang baik. Skip angka genap mempercepat proses 2x lipat.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 1. Basic Loop (Brute Force) ⭐ `PALING INTUITIF`

```javascript
const isPrimeBasic = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};
```

> 🔑 **Tujuan Belajar:** Memahami konsep inti bilangan prima: "coba bagi angka dengan semua angka di bawahnya". Tidak untuk production karena sangat lambat untuk angka besar (O(n)).

### 2. Optimasi Akar Kuadrat (`Math.sqrt`)

```javascript
const isPrimeSqrt = (num) => {
  if (num < 2) return false;

  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) return false;
  }

  return true;
};
```

> 🔑 **Tujuan Belajar:** Pengenalan optimasi O(√n). Jika sebuah angka memiliki faktor, pasti salah satunya tidak lebih dari akar kuadrat angka tersebut.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 1. Pattern 6k ± 1 ⭐ `PALING CEPAT (COMPETITIVE PROGRAMMING)`

```javascript
const isPrime6k = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};
```

> 🔑 **Kapan Digunakan:** Cocok untuk processing jutaan angka karena mengecek 2 kandidat prima sekaligus dan otomatis men-skip kelipatan 2 & 3. Kurang dianjurkan untuk kode standar karena _readability_ yang kompleks.

---

## ⚠️ GOTCHA CEPAT

- 💥 **Salah Penempatan `return true`:**
  - ❌ *Di dalam loop:* Loop langsung berhenti pada tes pembagi pertama.
  - ✅ *Di luar loop:* Harus dieksekusi setelah semua pembagi dipastikan tidak habis.
- 💥 **Lupa Menggunakan `<= Math.sqrt(num)`:**
  - ❌ *Menggunakan `<`:* Angka seperti `9` (akar: 3) tidak akan dicek pembaginya (`3`), alhasil kode menganggapnya prima!
- 💥 **Memotong Iterasi Ganjil tapi Lupa Handle `2`:**
  - ❌ *Memulai iterasi dari `3` tanpa mengecek `num === 2`:* Angka 2 akan lolos loop tanpa dicek, namun jika logika di bawahnya kurang tepat bisa merusak hasil, juga tidak eksplisit.

---

## 📊 QUICK COMPARISON

| Versi | Pendekatan Utama | Kompleksitas | Keunggulan Utama | Rekomendasi |
|-------|------------------|--------------|------------------|-------------|
| **V1** | Basic Loop (Brute Force) | O(n) | Sangat mudah dipahami | Untuk belajar |
| **V2** | Limit `Math.sqrt()` | O(√n) | Jauh lebih cepat dari V1 | Fundamental optimasi |
| **V3** | Limit `i * i` & Skip Genap | O(√n / 2) | Sangat Cepat & Readable | **Production Ready** ⭐ |
| **V4** | Pola 6k ± 1 | O(√n / 3) | Paling efisien & hemat operasi | Competitive Prog |

---

## 🧪 TEST CASES

```javascript
// Pengujian untuk edge cases
console.log(isPrime(-5)); // false
console.log(isPrime(0));  // false
console.log(isPrime(1));  // false
console.log(isPrime(2));  // true

// Pengujian angka prima kecil
console.log(isPrime(3));  // true
console.log(isPrime(7));  // true
console.log(isPrime(13)); // true

// Pengujian angka bukan prima
console.log(isPrime(4));  // false (genap)
console.log(isPrime(9));  // false (akar pas)
console.log(isPrime(33)); // false (kelipatan ganjil)

// Pengujian angka besar
console.log(isPrime(97)); // true
```
