# 🔄 Cheat Sheet — Angka Palindrome

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Inner Function + ES6 Method Chaining ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const angkaPalindrome = (num) => {
  let candidate = num + 1;
  
  const isPalindrome = (n) => String(n) === [...String(n)].reverse().join('');
  
  while (!isPalindrome(candidate)) {
    candidate++;
  }
  
  return candidate;
};
```

> 🔑 Cocok untuk kode modern yang terenkapsulasi dengan rapi. Helper `isPalindrome` disembunyikan agar tidak mengotori global scope, dipadukan dengan manipulasi array ES6 yang ringkas.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 2. Manual Iterative Loop (Tanpa Helper) ⭐ `PALING INTUITIF`

```javascript
function angkaPalindrome(num) {
  while (true) {
    num++;
    let str = String(num);
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }

    if (str === reversedStr) {
      return num;
    }
  }
}
```

> 🔑 Sangat transparan untuk melatih logika dasar manipulasi string. `while(true)` berfungsi sebagai pencari tanpa batas, sementara `for` membalikkan karakter mundur satu per satu.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 3. Mutasi Parameter Langsung (Gaya Ringkas)

```javascript
const isPalindrome = (n) => {
  return String(n) === [...String(n)].reverse().join('');
};

const angkaPalindrome = (num) => {
  num++;

  while (!isPalindrome(num)) {
    num++;
  }

  return num;
};
```

> 🔑 Menggunakan ES6 *method chaining* global dan memutasi input parameter secara langsung (`num++`). Sangat ringkas dan menghindari pembuatan variabel `candidate`, namun mengorbankan prinsip *immutability* (karena input asli berubah nilainya).

---

### 4. Pemisahan Fungsi Helper Global (Klasik)

```javascript
function isPalindrome(num) {
  let str = String(num);
  let reversedStr = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  
  return str === reversedStr;
}

function angkaPalindrome(num) {
  let candidate = num + 1;
  
  while (!isPalindrome(candidate)) {
    candidate++;
  }
  
  return candidate;
}
```

> 🔑 Memisahkan logika pengecekan menjadi fungsi `isPalindrome` yang mandiri. Berguna jika fungsi `isPalindrome` akan sering dipakai ulang oleh fitur/fungsi algoritma lain di aplikasi.

---

## ⚠️ GOTCHA CEPAT

**Pengecekan Prematur pada Input yang Sudah Palindrome**

```javascript
// ❌ GOTCHA (Salah)
function angkaPalindrome(num) {
  if (isPalindrome(num)) return num + 1; // Salah logika lompatan
  // atau
  if (isPalindrome(num)) return ++num;   // Jika input 11, akan return 12. Padahal yang dicari 22.
}

// ✅ BEST PRACTICE (Benar)
function angkaPalindrome(num) {
  let candidate = num + 1; // AMAN! Langsung lewati angka awal.
  while (!isPalindrome(candidate)) {
    // ...
  }
}
```

> 🔑 **Aturan Emas:** Jangan letakkan pengecekan `isPalindrome` di luar loop hanya untuk menangani *edge case* input awal. Cukup inisialisasi *start point* ke `num + 1` dan masalah selesai.

---

## 📊 QUICK COMPARISON

| Versi | Pendekatan Utama | Keunggulan Utama | Label Rekomendasi |
|-------|------------------|------------------|-------------------|
| **V1** | Iteratif Manual (for & while) | Fundamental kuat, hemat memori (tanpa array). | 🧠 *Fundamental* |
| **V2** | Fungsi Modular Global | Reusable, bisa dipanggil di mana saja. | 🧪 *Alternatif* |
| **V-Exp**| Mutasi Parameter + ES6 | Sangat ringkas, bypass *edge case* dengan aman. | 🧪 *Eksperimental* |
| **V4** | Inner Function + ES6 | Kode sangat ringkas, terenkapsulasi, sintaks bersih. | 🏆 **Production Ready** |

---

## 🧪 TEST CASES

```javascript
// 1. Edge Cases (Kondisi Ekstrem)
console.log(angkaPalindrome(8));     // 9
console.log(angkaPalindrome(11));    // 22
console.log(angkaPalindrome(0));     // 1
console.log(angkaPalindrome(99));    // 101

// 2. Normal Cases (Kondisi Biasa)
console.log(angkaPalindrome(10));    // 11
console.log(angkaPalindrome(117));   // 121

// 3. Complex Cases (Kondisi Soal)
console.log(angkaPalindrome(175));   // 181
console.log(angkaPalindrome(1000));  // 1001
```
