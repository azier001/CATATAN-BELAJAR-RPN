# 🔄 Cheat Sheet — Toggle Case / Tukar Besar Kecil

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Declarative Array Methods + JSDoc ⭐ `PALING DIREKOMENDASIKAN`

```javascript
/**
 * Menukar setiap huruf besar menjadi kecil dan sebaliknya.
 * Karakter non-alfabet (angka, simbol, spasi) akan dibiarkan aslinya.
 * 
 * @param {string} text - Kalimat teks yang akan diproses
 * @returns {string} Kalimat baru dengan huruf yang sudah ditukar (swap case)
 */
const toggleCase = (text) => {
  return text
    .split('')
    .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join('');
};
```

> 🔑 Menggabungkan `split`, `map`, dan `join` yang lazim di industri. Sangat ringkas menggunakan ternary operator tanpa perlu variabel penampung.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 2. for...of + Regex ⭐ `PALING INTUITIF`

```javascript
const toggleCaseFundamental = (text) => {
  let result = '';

  for (const char of text) {
    if (/[a-z]/.test(char)) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }

  return result;
};
```

> 🔑 Sangat mudah dibaca alurnya step-by-step. Menggunakan regex `/[a-z]/` menjadikannya sangat eksplisit dalam membedakan huruf dan non-huruf.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 3. Satu Baris dengan Regex & Replace

```javascript
const toggleCaseRegex = (text) => 
  text.replace(/[a-zA-Z]/g, (c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
```

> 🔑 Pendekatan ekstrim untuk pamer skill (`one-liner`). Sangat rapi tapi kurang familiar bagi developer yang belum terbiasa dengan metode callback pada `.replace()`.

### 4. Tidak Direkomendasikan: for...of + Char Comparison

```javascript
const swapCase = (sentence) => {
  let transformedText = '';

  for (const character of sentence) {
    if (character === character.toLowerCase()) {
      transformedText += character.toUpperCase();
    } else {
      transformedText += character.toLowerCase();
    }
  }

  return transformedText;
};
```

> 🔑 **Hindari!** Walau jalan, cara kerjanya ambigu karena angka dan spasi akan masuk ke blok `if` (karena `' ' === ' '.toLowerCase()` adalah `true`).

---

## ⚠️ GOTCHA CEPAT

- **`char === char.toLowerCase()` vs `/[a-z]/.test(char)`**
  Perbandingan menggunakan `.toLowerCase()` bisa mengecoh. Karakter spasi (`' '`) atau angka (`'1'`) jika dikenai `.toLowerCase()` hasilnya tetap sama. Sehingga logika tersebut akan memproses angka & spasi. Solusi lebih aman & eksplisit adalah regex `/[a-z]/`.
- **`.split('')` vs `.split()`**
  Ingat string kosong (`''`) dalam split! `split('')` akan memecah per-karakter, sedangkan `split()` tanpa argumen hanya akan memasukkan string utuh ke dalam index `0` array.

---

## 📊 QUICK COMPARISON

| Versi | Pendekatan Utama | Mutasi Data | Keunggulan Utama | Label Rekomendasi |
|-------|-----------------|:-----------:|------------------|-------------------|
| **V-Best** | `.split` + `.map` + Ternary | ❌ (Pure) | Bersih, standar industri, tanpa variabel temp | ✅ *Production* |
| **V-Fund** | `for...of` + Regex | ✅ (Temp var) | Terbaca sangat jelas langkah demi langkah | 🎓 *Belajar* |
| **V-Regex**| `.replace` + Regex Callback | ❌ (Pure) | Paling ringkas (1 baris) | ⚡ *Alternatif* |
| **V-Poor** | `for...of` + Char Match | ✅ (Temp var) | Terlihat mudah tapi logika rentan "magic" | ⚠️ *Tidak Disarankan*|

---

## 🧪 TEST CASES

```javascript
console.log(toggleCase('Hello World'));       // 'hELLO wORLD'
console.log(toggleCase('I aM aLAY'));         // 'i Am Alay'
console.log(toggleCase('My Name is Bond!!')); // 'mY nAME IS bOND!!'
console.log(toggleCase('IT sHOULD bE me'));   // 'it Should Be ME'
console.log(toggleCase('001-A-3-5TrdYW'));    // '001-a-3-5tRDyw'
console.log(toggleCase(''));                  // ''
console.log(toggleCase('12345'));             // '12345'
console.log(toggleCase('!!!!'));              // '!!!!'
```
