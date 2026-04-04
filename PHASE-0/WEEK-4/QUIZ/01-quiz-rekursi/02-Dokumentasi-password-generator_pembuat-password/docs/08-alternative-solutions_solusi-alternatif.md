# 🔄 Part 8 — Alternative Solutions / Solusi Alternatif

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-orange?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen?style=for-the-badge)

---

## 🧭 Quick Jump

| 🔄 changeVocals | 🔄 reverseWord | 🔄 setLowerUpperCase | 🔄 passwordGenerator | 🔄 Single Function | 📊 Perbandingan | ✅ Ringkasan |
|:--------------:|:--------------:|:--------------------:|:--------------------:|:-----------------:|:--------------:|:-----------:|
| [Jump](#-alternatif-changevocals--object-mapping) | [Jump](#-alternatif-reverseword--reduce) | [Jump](#-alternatif-setloweruppercase--regex) | [Jump](#-alternatif-passwordgenerator--nested-calls) | [Jump](#-alternatif-single-function) | [Jump](#-perbandingan-semua-solusi) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami berbagai pendekatan alternatif untuk setiap helper function
- ✅ Mengerti kelebihan dan kekurangan setiap pendekatan
- ✅ Tahu kapan memilih pendekatan yang mana
- ✅ Memahami kenapa kode sebelah (single function) tidak sesuai requirement

---

## 🔄 Alternatif `changeVocals` — Object Mapping

```js
function changeVocals(str) {
  const vocalMap = {
    'a': 'b', 'i': 'j', 'u': 'v', 'e': 'f', 'o': 'p',
    'A': 'B', 'I': 'J', 'U': 'V', 'E': 'F', 'O': 'P'
  }

  return [...str].map(char => vocalMap[char] ?? char).join('')
}
```

### ▶️ Coba Langsung

```js
console.log(changeVocals('Alexei'));
// Output: 'Blfxfj'
```

**Perbandingan:**

| Aspek | `charCodeAt + 1` | Object Mapping |
|-------|-----------------|----------------|
| Readability | Perlu paham ASCII | ✅ Langsung terlihat mapping-nya |
| Explicitness | Implisit | ✅ Eksplisit |
| Extensibility | Perlu hitung ASCII | ✅ Tinggal tambah key-value |
| Performa | Sama | Sama |

---

## 🔄 Alternatif `reverseWord` — `reduce()`

```js
function reverseWord(str) {
  return [...str].reduce((acc, char) => char + acc, '')
}
```

### ▶️ Coba Langsung

```js
console.log(reverseWord('Blfxfj'));
// Output: 'jfxflB'
```

Cara kerjanya — setiap `char` ditaruh di **depan** accumulator:

```
''      → 'B' + ''      = 'B'
'B'     → 'l' + 'B'     = 'lB'
'lB'    → 'f' + 'lB'    = 'flB'
'flB'   → 'x' + 'flB'   = 'xflB'
'xflB'  → 'f' + 'xflB'  = 'fxflB'
'fxflB' → 'j' + 'fxflB' = 'jfxflB' ✅
```

**Perbandingan:**

| Aspek | `spread + reverse + join` | `reduce` |
|-------|--------------------------|----------|
| Readability | ✅ Sangat mudah dibaca | Perlu paham `reduce` |
| Idiomatik | ✅ Paling umum dipakai | Lebih "show off" 😄 |
| Performa | Sama | Sama |

---

## 🔄 Alternatif `setLowerUpperCase` — Regex

```js
function setLowerUpperCase(str) {
  return str.replace(/[a-zA-Z]/g, char => {
    return char >= 'A' && char <= 'Z'
      ? char.toLowerCase()
      : char.toUpperCase()
  })
}
```

### ▶️ Coba Langsung

```js
console.log(setLowerUpperCase('jfxflB'));
// Output: 'JFXFLb'
```

**Perbandingan:**

| Aspek | `for...of` + kondisi | Regex |
|-------|---------------------|-------|
| Readability | ✅ Eksplisit, mudah dipahami | Lebih ringkas |
| Safety | ✅ Eksplisit cek `A-Z` / `a-z` | Regex filter otomatis |
| Familiar | ✅ Mudah untuk pemula | Perlu paham regex |

---

## 🔄 Alternatif `passwordGenerator` — Nested Calls

```js
function passwordGenerator(name) {
  const trimmedName = name.trim()

  if (trimmedName.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'

  return removeSpaces(
    setLowerUpperCase(
      reverseWord(
        changeVocals(trimmedName)
      )
    )
  )
}
```

### ▶️ Coba Langsung

```js
console.log(passwordGenerator('Alexei'));
// Output: 'JFXFLb'
```

> 💡 Urutan membacanya **dari dalam ke luar** — sama persis dengan urutan requirement soal, tapi dibaca terbalik.

**Perbandingan:**

| Aspek | Variable Terpisah | Nested Calls |
|-------|-------------------|--------------|
| Readability | ✅ Linear, mudah dibaca | Dibaca dari dalam ke luar |
| Debug friendly | ✅ Bisa `console.log` tiap step | ❌ Sulit inspect nilai tengah |
| Jumlah kode | Lebih panjang | Lebih ringkas |
| Gaya | Imperatif | Fungsional |

---

## 🔄 Alternatif Single Function

Versi ini menggabungkan semua logika dalam **satu fungsi** tanpa helper functions terpisah:

```js
const passwordGenerator = (name) => {
  const trimmedName = name.trim()

  if (trimmedName.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }

  // Step 1 — changeVocals
  const shiftVocal = (char) => {
    const vocals = 'aiueoAIUEO'
    if (!vocals.includes(char)) return char
    return String.fromCharCode(char.charCodeAt(0) + 1)
  }

  // Step 2 — changeVocals + reverseWord
  let str = trimmedName.split('').map(shiftVocal).join('')
  str = str.split('').reverse().join('')

  // Step 3 — setLowerUpperCase
  str = str.split('').map(char => {
    if (char >= 'A' && char <= 'Z') return char.toLowerCase()
    if (char >= 'a' && char <= 'z') return char.toUpperCase()
    return char
  }).join('')

  // Step 4 — removeSpaces
  str = str.replace(/\s+/g, '')

  return str
}
```

### ▶️ Coba Langsung

```js
console.log(passwordGenerator('Alexei'));
// Output: 'JFXFLb'
```

**Perbandingan:**

| Aspek | Multi Function (versi saya) | Single Function |
|-------|----------------------------|-----------------|
| Readability | ✅ Setiap fungsi punya tugas jelas | Semua dalam satu tempat |
| Reusability | ✅ Helper bisa dipakai ulang | ❌ Logika terkunci di satu fungsi |
| Testability | ✅ Setiap helper bisa di-test sendiri | ❌ Sulit test per bagian |
| Panjang kode | Lebih panjang | Lebih ringkas |

---

## ⚠️ Kode Sebelah — Apa yang Berbeda?

Ini kode dari teman yang menggunakan pendekatan berbeda:

```js
const passwordGenerator = (name) => {
  if (name.length < 5) { // ❌ tidak pakai trim
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }

  let str = name.replace(/\s+/g, '')          // ❌ hapus spasi DULU
  str = str.split('').reverse().join('')       // ❌ reverse DULU
  // geser semua huruf +1 dengan modulo % 26  // ❌ bukan hanya vokal
  // alternating case by index                // ❌ bukan toggle case
}
```

**3 perbedaan fundamental:**

| Aspek | Requirement Soal | Kode Sebelah |
|-------|-----------------|--------------|
| Urutan step | vocals → reverse → toggle → removeSpaces | removeSpaces → reverse → geser → alternating |
| Toggle case | Besar↔kecil berdasarkan karakter asli | Berdasarkan index (genap/ganjil) |
| Validasi | `trim()` sebelum cek length | Tidak ada trim |
| Geser karakter | Hanya vokal saja | Semua huruf + modulo `% 26` |

> ⚠️ Hasil: **9 dari 15 test cases FAIL** dengan kode sebelah — karena urutan dan logikanya berbeda dari requirement.

---

## 📊 Perbandingan Semua Solusi

| Solusi | Pendekatan | Readability | Debug | Reusability |
|--------|-----------|:-----------:|:-----:|:-----------:|
| **Versi Saya** | Pipeline variable terpisah | ✅ | ✅ | ✅ |
| **Alt. changeVocals** | Object mapping | ✅ | ✅ | ✅ |
| **Alt. reverseWord** | `reduce()` | ⚠️ | ✅ | ✅ |
| **Alt. setLowerUpperCase** | Regex | ⚠️ | ✅ | ✅ |
| **Alt. passwordGenerator** | Nested calls | ⚠️ | ❌ | ✅ |
| **Single Function** | Semua dalam satu fungsi | ⚠️ | ❌ | ❌ |

---

## ✅ Ringkasan

| Function | Versi Saya | Alternatif Terbaik |
|----------|-----------|-------------------|
| `changeVocals` | `charCodeAt + 1` | Object mapping — lebih eksplisit |
| `reverseWord` | `spread + reverse + join` | Tetap versi saya — paling idiomatik |
| `setLowerUpperCase` | `for...of` + range | Regex — lebih ringkas |
| `passwordGenerator` | Variable terpisah | Tetap versi saya — lebih debug-friendly |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 7 — Pipeline Function](./07-pipeline-function_fungsi-berantai.md)**
- **📖 [Lanjut ke Part 9 — Test Cases →](./09-test-cases_kasus-pengujian.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
