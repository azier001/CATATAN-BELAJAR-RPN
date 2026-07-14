# 🔄 Cheat Sheet — Toggle Case / Tukar Besar Kecil

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Versi Final + JSDoc ⭐ `PALING DIREKOMENDASIKAN`

```javascript
/**
 * Menukar setiap huruf besar menjadi kecil dan sebaliknya.
 * Karakter non-alfabet (angka, simbol, spasi) akan dibiarkan aslinya.
 * 
 * @param {string} text - Kalimat teks yang akan diproses
 * @returns {string} Kalimat baru dengan huruf yang sudah ditukar (swap case)
 */
const tukarBesarKecil = (text) => {
  return text
    .split('')
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
};
```

> 🔑 Menggabungkan `split`, `map`, dan `join` yang lazim di industri. Sangat ringkas menggunakan ternary operator tanpa perlu variabel penampung. Dilengkapi JSDoc untuk standar dokumentasi kode.

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

### 3. `split` + `map` + `if/else` (Early Return) + `join`

```javascript
function toggleCase(str) {
  return str.split('').map(char => {
    if (/[a-z]/.test(char)) {
      return char.toUpperCase()
    }

    return char.toLowerCase()
  }).join('')
}
```

> 🔑 Versi fungsional dengan early return di dalam `map`. Lebih verbose dari ternary tapi lebih mudah dibaca saat kondisi kompleks.

### 4. `split` + `map` + Ternary + `join` (Regex check)

```javascript
function toggleCase(str) {
  return str.split('').map(char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()).join('')
}
```

> 🔑 Versi one-liner fungsional dengan regex `/[a-z]/` yang eksplisit. Paling ringkas di antara versi `split+map+join`.

### 5. `replace` + Regex + Ternary (Regex check di callback)

```javascript
function toggleCase(str) {
  return str.replace(/[a-zA-Z]/g, (char) => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())
}
```

> 🔑 Versi `replace` yang menggunakan regex `/[a-z]/` di dalam callback untuk cek yang lebih eksplisit.

### 6. `replace` + Regex + Ternary (String comparison di callback)

```javascript
const tukarBesarKecilRegex = (text) => 
  text.replace(/[a-zA-Z]/g, (c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
```

> 🔑 Pendekatan ekstrim untuk pamer skill (`one-liner`). Sangat rapi tapi kurang familiar bagi developer yang belum terbiasa dengan metode callback pada `.replace()`.

### 7. ⚠️ Tidak Direkomendasikan: `for...of` + Char Comparison

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

| # | Versi | Pendekatan Utama | Mutasi Data | Keunggulan Utama | Label Rekomendasi |
|---|-------|-----------------|:-----------:|------------------|-------------------|
| 1 | **Final + JSDoc** | `.split` + `.map` + Ternary + JSDoc | ❌ (Pure) | Standar industri, terdokumentasi | ✅ *Production* |
| 2 | **for...of + Regex** | `for...of` + `/[a-z]/` | ✅ (Temp var) | Terbaca sangat jelas step-by-step | 🎓 *Belajar* |
| 3 | **map + if/else** | `.split` + `.map` + early return | ❌ (Pure) | Fungsional, mudah dibaca | ⚡ *Alternatif* |
| 4 | **map + Ternary + Regex** | `.split` + `.map` + ternary + `/[a-z]/` | ❌ (Pure) | Ringkas & eksplisit | ⚡ *Alternatif* |
| 5 | **replace + Regex check** | `.replace` + `/[a-z]/` di callback | ❌ (Pure) | Satu baris, eksplisit | ⚡ *Alternatif* |
| 6 | **replace + String check** | `.replace` + char comparison | ❌ (Pure) | Paling ringkas (one-liner) | ⚡ *Alternatif* |
| 7 | **char comparison** | `for...of` + `char === char.toLowerCase()` | ✅ (Temp var) | Terlihat mudah tapi logika rentan "magic" | ⚠️ *Tidak Disarankan* |

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
