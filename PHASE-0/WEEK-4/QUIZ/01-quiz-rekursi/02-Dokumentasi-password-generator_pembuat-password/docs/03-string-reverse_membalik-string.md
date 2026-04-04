# 🔁 Part 3 — String Reverse / Membalik String

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green?style=for-the-badge)

---

## 🧭 Quick Jump

| 📋 Kode | 🔍 Penjelasan | ⚠️ Pitfalls | 🔄 Alternatif | 🔑 Keywords | ✅ Ringkasan |
|:-------:|:-------------:|:-----------:|:-------------:|:-----------:|:-----------:|
| [Jump](#-kode-solusi) | [Jump](#-penjelasan-step-by-step) | [Jump](#%EF%B8%8F-pitfalls) | [Jump](#-alternatif--reduce) | [Jump](#-keywords) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara membalik string dengan spread + `reverse()` + `join()`
- ✅ Mengerti kenapa `[...str]` lebih aman dari `str.split('')`
- ✅ Memahami alternatif pendekatan dengan `reduce()`

---

## 📋 Kode Solusi

```js
function reverseWord(str) {
  return [...str].reverse().join('')
}
```

### ▶️ Coba Langsung

```js
console.log(reverseWord('Blfxfj'));
// Output: 'jfxflB'
```

```js
console.log(reverseWord('hello world'));
// Output: 'dlrow olleh'
```

```js
console.log(reverseWord('abc'));
// Output: 'cba'
```

---

## 🔍 Penjelasan Step by Step

### 1️⃣ Spread `[...str]` — Ubah string jadi array

Spread operator `...` memecah string menjadi array of characters:

```js
[...'abc'] // → ['a', 'b', 'c']
[...'Blfxfj'] // → ['B', 'l', 'f', 'x', 'f', 'j']
```

---

### 2️⃣ `.reverse()` — Balik urutan array

```js
['B', 'l', 'f', 'x', 'f', 'j'].reverse()
// → ['j', 'f', 'x', 'f', 'l', 'B']
```

> ⚠️ `.reverse()` mengubah array **secara langsung** (mutates). Karena kita pakai spread `[...str]` dulu, string aslinya tidak terpengaruh.

---

### 3️⃣ `.join('')` — Gabungkan kembali jadi string

```js
['j', 'f', 'x', 'f', 'l', 'B'].join('')
// → 'jfxflB'
```

---

### 4️⃣ Trace Manual — `'Blfxfj'`

```
Input: 'Blfxfj'
  │
  ▼
[...str] → ['B', 'l', 'f', 'x', 'f', 'j']
  │
  ▼
.reverse() → ['j', 'f', 'x', 'f', 'l', 'B']
  │
  ▼
.join('') → 'jfxflB' ✅
```

---

### 5️⃣ Kenapa `[...str]` lebih aman dari `str.split('')`?

Keduanya menghasilkan hal yang sama untuk karakter biasa — tapi berbeda untuk karakter Unicode seperti emoji:

```js
// Emoji punya 2 unit UTF-16
'😀'.split('')       // → ['\uD83D', '\uDE00'] ❌ rusak!
[...'😀']            // → ['😀'] ✅ aman

// Untuk nama biasa, keduanya sama
'Alexei'.split('')   // → ['A', 'l', 'e', 'x', 'e', 'i'] ✅
[...'Alexei']        // → ['A', 'l', 'e', 'x', 'e', 'i'] ✅
```

> 💡 Untuk challenge ini keduanya aman — tapi habit pakai `[...str]` lebih baik untuk jangka panjang.

---

## ⚠️ Pitfalls

### ❌ Mencoba reverse string langsung tanpa diubah ke array dulu

```js
// ❌ Salah — string tidak punya method .reverse()
'Blfxfj'.reverse() // → TypeError: str.reverse is not a function

// ✅ Benar — ubah ke array dulu
[...'Blfxfj'].reverse().join('')
```

### ❌ Lupa `.join('')` di akhir

```js
// ❌ Salah — hasilnya masih array
[...'abc'].reverse() // → ['c', 'b', 'a']

// ✅ Benar — gabungkan kembali
[...'abc'].reverse().join('') // → 'cba'
```

---

## 🔄 Alternatif — `reduce()`

Pendekatan lain menggunakan `reduce()`:

```js
function reverseWord(str) {
  return [...str].reduce((acc, char) => char + acc, '')
}
```

Cara kerjanya — setiap `char` ditaruh di **depan** accumulator:

```
''        → 'B' + ''       = 'B'
'B'       → 'l' + 'B'      = 'lB'
'lB'      → 'f' + 'lB'     = 'flB'
'flB'     → 'x' + 'flB'    = 'xflB'
'xflB'    → 'f' + 'xflB'   = 'fxflB'
'fxflB'   → 'j' + 'fxflB'  = 'jfxflB' ✅
```

**Perbandingan:**

| Aspek | `spread + reverse + join` | `reduce` |
|-------|--------------------------|----------|
| Readability | ✅ Sangat mudah dibaca | Perlu paham `reduce` |
| Idiomatik | ✅ Paling umum dipakai | Lebih "show off" 😄 |
| Performa | Sama | Sama |

---

## 🔑 Keywords

| Keyword | Penjelasan |
|---------|-----------|
| `[...str]` | Spread operator — ubah string jadi array of characters |
| `.reverse()` | Balik urutan elemen array (mutates array asli) |
| `.join('')` | Gabungkan elemen array menjadi string |
| `.reduce()` | Akumulasi nilai array menjadi satu nilai |
| Unicode | Sistem encoding karakter universal — lebih lengkap dari ASCII |

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Input | String sembarang |
| Proses | Spread → reverse → join |
| Output | String yang sudah dibalik |
| Method utama | `[...str].reverse().join('')` |
| Alternatif | `reduce()` — taruh char di depan accumulator |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 2 — changeVocals](./02-charCodeAt-vocal-mapping_pemetaan-vokal.md)**
- **📖 [Lanjut ke Part 4 — setLowerUpperCase →](./04-toggle-case_tukar-huruf-besar-kecil.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
