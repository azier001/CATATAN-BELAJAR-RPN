# 🔄 Cheat Sheet — Balik Kata (String Reversal)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. ES6 Spread Operator ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const balikKata = (kata) => [...kata].reverse().join('');
```

> 🔑 Ringkas, modern, dan **Unicode-safe** (emoji tidak pecah).

---

### 2. Split-Reverse-Join (Built-in Standard)

```javascript
const balikKata = (kata) => kata.split('').reverse().join('');
```

> 🔑 Cara paling klasik & populer. Hati-hati: **tidak Unicode-safe**.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. For Loop Mundur ⭐ `PALING INTUITIF`

```javascript
const balikKata = (kata) => {
  let reversedString = '';

  for (let i = kata.length - 1; i >= 0; i--) {
    reversedString += kata[i];
  }

  return reversedString;
};
```

> 🔑 Logika paling natural — baca dari belakang, tempel ke kanvas kosong.

---

### 4. For Loop Maju (Tempel di Depan)

```javascript
const balikKata = (kata) => {
  let reversedString = '';

  for (let i = 0; i < kata.length; i++) {
    reversedString = kata[i] + reversedString;  // ⚠️ Tambah di DEPAN!
  }

  return reversedString;
};
```

> 🔑 Loop biasa (maju), tapi triknya: karakter baru ditaruh di **depan** hasil sementara.

---

### 5. While Loop

```javascript
const balikKata = (kata) => {
  let reversedString = '';
  let i = kata.length - 1;

  while (i >= 0) {
    reversedString += kata[i];
    i--;  // ⚠️ Jangan lupa decrement!
  }

  return reversedString;
};
```

> 🔑 Sama seperti for loop mundur, tapi pakai `while`. Risiko infinite loop jika lupa `i--`.

---

## 🧪 EKSPERIMENTAL (Over-Engineering)

### 6. Split-Map-Reverse (Pendekatan Kompleks)

```javascript
const balikKata = (kata) => {
  const splittedWord = kata.split(' ');
  const reversedWord1 = splittedWord.map(char => char.split('').reverse());
  const reversedWord2 = reversedWord1.map(char => char.join('')).reverse();
  return reversedWord2.join(' ');
};
```

> 🔑 Tetap benar tapi terlalu rumit — **jangan gunakan** untuk kasus ini. Bagus untuk latihan method array saja.

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ .split()  tanpa argumen → TIDAK pecah per huruf
"John".split()     // ['John']

// ✅ .split('') dengan empty string → pecah per huruf
"John".split('')   // ['J', 'o', 'h', 'n']

// ❌ .join()  tanpa argumen → gabung pakai KOMA
['n','h','o','J'].join()   // "n,h,o,J"

// ✅ .join('') dengan empty string → gabung tanpa pemisah
['n','h','o','J'].join('')  // "nhoJ"
```

---

## 📊 QUICK COMPARISON

| # | Versi | Baris | Unicode Safe | Rekomendasi |
|:-:|-------|:-----:|:------------:|:-----------:|
| 1 | Spread Operator | 1 | ✅ | ⭐ Production |
| 2 | Split-Reverse-Join | 1 | ❌ | Production |
| 3 | For Loop Mundur | 7 | ✅ | ⭐ Belajar |
| 4 | For Loop Maju | 7 | ✅ | Alternatif |
| 5 | While Loop | 8 | ✅ | Alternatif |
| 6 | Split-Map-Reverse | 5 | ❌ | ❌ Jangan |

---

## 🧪 TEST CASES

```javascript
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe'));                // eoD nhoJ
console.log(balikKata('I am a bookworm'));          // mrowkoob a ma I
console.log(balikKata('Coding is my hobby'));       // ybboh ym si gnidoC
console.log(balikKata('Super'));                    // repuS
```
