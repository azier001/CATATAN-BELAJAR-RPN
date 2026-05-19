# 🔄 Cheat Sheet — Palindrome Checker

### ✨ _Quick reference: 5 versi solusi siap copy-paste_

> 📋 Ringkasan semua versi kode dari sesi mentoring & catatan legacy. Siap copy-paste!

![Solusi](https://img.shields.io/badge/Solusi-5%20Versi-purple) ![Difficulty](https://img.shields.io/badge/Difficulty-Beginner-green) ![Topic](https://img.shields.io/badge/Topic-String%20Manipulation-blue)

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Two Pointers (While Loop) ⭐ `PALING EFISIEN`

```javascript
const isPalindrome = (word) => {
  let leftIndex = 0;
  let rightIndex = word.length - 1;

  while (leftIndex < rightIndex) {
    if (word[leftIndex] !== word[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }

  return true;
};
```

> 🔑 Algoritma paling efisien `O(n/2)` time & `O(1)` space. Mengecek dari ujung ke tengah — langsung berhenti (*early exit*) saat ketemu perbedaan. Favorit di *coding interview* tingkat lanjut.

---

### 2. ES6 Spread & Method Chaining ⭐ `PALING RINGKAS`

```javascript
const isPalindrome = (word) => {
  return word === [...word].reverse().join('');
};
```

> 🔑 Satu baris, sangat deklaratif dan modern. Pilihan utama untuk *production code* karena *readability* terbaik — terbaca layaknya kalimat bahasa Inggris.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. Manual Reverse Loop ⭐ `PALING INTUITIF`

```javascript
const isPalindrome = (word) => {
  let reversedWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }

  return word === reversedWord;
};
```

> 🔑 Loop mundur klasik — membalikkan string secara manual karakter per karakter. Fondasi wajib sebelum pakai *built-in methods*. Sangat bagus untuk melatih *computational thinking*.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 4. For Loop Refactored (Half-Loop)

```javascript
const isPalindrome = (word) => {
  const wordLength = word.length;
  const middleIndex = Math.floor(wordLength / 2);

  for (let index = 0; index < middleIndex; index++) {
    const leftChar = word[index];
    const rightChar = word[wordLength - 1 - index];

    if (leftChar !== rightChar) {
      return false;
    }
  }

  return true;
};
```

> 🔑 Mirip *Two Pointers* tapi dibungkus *For Loop*. Variabel sangat deskriptif (`leftChar`, `rightChar`). Cocok untuk kode yang butuh tingkat *readability* tinggi & *self-documenting*.

---

### 5. Split Method (Cara Klasik Pre-ES6)

```javascript
const isPalindrome = (word) => {
  return word === word.split('').reverse().join('');
};
```

> 🔑 Identik dengan V2, tapi menggunakan `.split('')` daripada *Spread Operator* (`...`). Cocok jika butuh kompatibilitas dengan *browser* jadul yang belum *support* ES6.

---

## ⚠️ GOTCHA CEPAT

### Jebakan #1 — Off-by-One Index

```javascript
// ❌ SALAH → word[word.length] = undefined!
for (let i = word.length; i >= 0; i--)

// ✅ BENAR → indeks terakhir = panjang - 1
for (let i = word.length - 1; i >= 0; i--)
```

### Jebakan #2 — Two Pointers: `<` vs `<=`

```javascript
// ❌ KURANG TEPAT → huruf tengah dibandingkan dengan dirinya sendiri (sia-sia)
while (leftIndex <= rightIndex)

// ✅ BENAR → berhenti saat pointer bertemu di tengah
while (leftIndex < rightIndex)
```

### Jebakan #3 — Redundansi Boolean

```javascript
// ❌ ANTI-PATTERN → if-else yang tidak perlu
if (word === reversedWord) {
  return true;
} else {
  return false;
}

// ✅ CLEAN — operator === sudah menghasilkan boolean
return word === reversedWord;
```

---

## 📊 QUICK COMPARISON

| Versi | Pendekatan | Baris | Time | Space | Keunggulan Utama | Label |
| :---: | :--- | :---: | :---: | :---: | :--- | :---: |
| **V1** | Two Pointers (While) | ~10 | `O(n/2)` | `O(1)` | Performa terbaik, *early exit* | 🟢 `Optimal` |
| **V2** | Spread + Chaining | 1 | `O(n)` | `O(n)` | Paling modern & ringkas | 🟢 `Production` |
| **V3** | Manual Reverse Loop | 6 | `O(n)` | `O(n)` | Melatih logika fundamental | 🔵 `Fundamental` |
| **V4** | For Loop Half | ~12 | `O(n/2)` | `O(1)` | Sangat deskriptif & *self-documenting* | 🟡 `Alternatif` |
| **V5** | Split() Chaining | 1 | `O(n)` | `O(n)` | Kompatibel browser jadul | 🟡 `Alternatif` |

> **💡 Rekomendasi cepat:** Pakai **V2** untuk kerja sehari-hari. Pakai **V1** kalau ditanya soal efisiensi. Pakai **V3** kalau lagi latihan algoritma.

---

## 🧪 TEST CASES

```javascript
console.log(isPalindrome('katak'));       // true  → dibalik tetap 'katak'
console.log(isPalindrome('blanket'));     // false → dibalik jadi 'teknalb'
console.log(isPalindrome('civic'));       // true  → dibalik tetap 'civic'
console.log(isPalindrome('kasur rusak')); // true  → dibalik tetap 'kasur rusak'
console.log(isPalindrome('mister'));      // false → dibalik jadi 'retsim'
```