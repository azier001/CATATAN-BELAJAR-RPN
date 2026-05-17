# 🔄 Cheat Sheet — Character Comparison XO

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Single Counter dengan `for...of` ⭐ `PALING DIREKOMENDASIKAN`

```javascript
function xo(str) {
  let counter = 0;

  for (const char of str.toLowerCase()) {
    if (char === 'x') counter++;
    if (char === 'o') counter--;
  }

  return counter === 0;
}
```

> 🔑 Mental model "tarik tambang": `x` = +1, `o` = -1. Jika imbang, kembali ke 0. Paling clean, modern (`for...of`), hemat variabel, dan sudah handle case-insensitive via `toLowerCase()`.

---

### 2. Built-in Method `split()` ⭐ `ONE-LINER TERPENDEK`

```javascript
function xo(str) {
  return str.split('x').length === str.split('o').length;
}
```

> 🔑 `split('x')` memotong string di setiap huruf `x` — jumlah potongan = jumlah `x` + 1. Karena kedua sisi sama-sama "+1", perbandingannya tetap valid. Kode paling ringkas tanpa variabel tambahan.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. Two Counters dengan `for` Loop `PALING INTUITIF`

```javascript
function xo(str) {
  const normalizedStr = str.toLowerCase();

  let countX = 0;
  let countO = 0;

  for (let i = 0; i < normalizedStr.length; i++) {
    if (normalizedStr[i] === 'x') countX++;
    if (normalizedStr[i] === 'o') countO++;
  }

  return countX === countO;
}
```

> 🔑 Analogi "dua keranjang": satu untuk `x`, satu untuk `o`. Hitung masing-masing lalu bandingkan di akhir. Paling mudah dipahami pemula dan paling mudah di-debug.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 4. Early Return dengan `while` Loop `OPTIMIZATION DEMO`

```javascript
function xo(str) {
  const normalizedStr = str.toLowerCase();

  let counter = 0;
  let i = 0;

  if (normalizedStr.length % 2 !== 0) return false;

  while (i < normalizedStr.length) {
    if (normalizedStr[i] === 'x') counter++;
    if (normalizedStr[i] === 'o') counter--;
    i++;
  }

  return counter === 0;
}
```

> 🔑 Cek panjang string dulu — jika ganjil, langsung `return false` tanpa loop. Bagus untuk belajar teknik *early return*, tapi benefit optimasinya kecil di kasus nyata.
>
> ⚠️ **Hati-hati:** `while` loop butuh increment manual (`i++`). Lupa? Infinite loop!

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ Case-sensitive — 'X' besar tidak tertangkap!
if (str[i] === 'x') countX++;

// ✅ Konversi dulu ke lowercase
for (const char of str.toLowerCase()) { ... }
```

```javascript
// ❌ Typo — membandingkan variabel dengan dirinya sendiri (selalu true!)
return xCount === xCount;

// ✅ Bandingkan X dengan O
return xCount === oCount;
```

```javascript
// ❌ Redundant — tidak perlu if-else untuk return boolean
if (counter === 0) return true;
return false;

// ✅ Clean — langsung return ekspresi perbandingan
return counter === 0;
```

```javascript
// ❌ split() menghitung POTONGAN, bukan huruf!
'xoxo'.split('x').length   // → 3 (bukan 2!)

// ✅ Tapi karena kedua sisi sama-sama +1, perbandingan tetap valid
str.split('x').length === str.split('o').length  // → aman
```

---

## 📊 QUICK COMPARISON

| Versi | Pendekatan | Baris | Variabel | Loop | Case-Safe | Label |
|:---:|---|:---:|:---:|---|:---:|---|
| V1 | Single Counter (`for...of`) | 8 | 1 | `for...of` | ✅ | 🏆 Best Practice |
| V2 | Built-in `split()` | 3 | 0 | — | ❌ | ⚡ One-liner |
| V3 | Two Counters (`for`) | 11 | 3 | `for` index | ✅ | 📚 Fundamental |
| V4 | Early Return (`while`) | 13 | 3 | `while` | ✅ | 🧪 Eksperimental |

---

## 🧪 TEST CASES

```javascript
// TEST CASES
console.log(xo('xoxoxo'));    // true  → x:3, o:3
console.log(xo('oxooxo'));    // false → x:2, o:4
console.log(xo('oxo'));       // false → x:1, o:2
console.log(xo('xxxooo'));    // true  → x:3, o:3
console.log(xo('xoxooxxo')); // true  → x:4, o:4
```
