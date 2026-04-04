# 🔗 Part 7 — Pipeline Function / Fungsi Berantai

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green?style=for-the-badge)

---

## 🧭 Quick Jump

| 📋 Kode | 🔍 Penjelasan | 🔄 Alternatif | ⚠️ Pitfalls | 🔑 Keywords | ✅ Ringkasan |
|:-------:|:-------------:|:-------------:|:-----------:|:-----------:|:-----------:|
| [Jump](#-kode-solusi) | [Jump](#-penjelasan-step-by-step) | [Jump](#-alternatif--nested-function-calls) | [Jump](#%EF%B8%8F-pitfalls) | [Jump](#-keywords) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami konsep **pipeline function** — menyusun fungsi secara berurutan
- ✅ Mengerti kenapa penamaan variable yang deskriptif itu penting
- ✅ Memahami alternatif nested function calls
- ✅ Tahu kapan pakai variable terpisah vs nested calls

---

## 📋 Kode Solusi

```js
function passwordGenerator(name) {
  const trimmedName = name.trim()

  if (trimmedName.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'

  const vocalsChanged  = changeVocals(trimmedName)
  const reversed       = reverseWord(vocalsChanged)
  const caseToggled    = setLowerUpperCase(reversed)
  const password       = removeSpaces(caseToggled)

  return password
}
```

### ▶️ Coba Langsung

```js
console.log(passwordGenerator('Sergei Dragunov'));
// Output: 'VPNVGBRdJFGRFs'
```

```js
console.log(passwordGenerator('Dimitri Wahyudiputra'));
// Output: 'BRTVPJDVYHBwJRTJMJd'
```

```js
console.log(passwordGenerator('Alexei'));
// Output: 'JFXFLb'
```

```js
console.log(passwordGenerator('Alex'));
// Output: 'Minimal karakter yang diinputkan adalah 5 karakter'
```

---

## 🔍 Penjelasan Step by Step

### 1️⃣ Apa itu Pipeline Function?

Pipeline adalah konsep di mana **output satu fungsi menjadi input fungsi berikutnya** — seperti pipa air yang mengalir dari satu titik ke titik lain:

```
trimmedName
    │
    ▼
changeVocals(trimmedName)   → vocalsChanged
    │
    ▼
reverseWord(vocalsChanged)  → reversed
    │
    ▼
setLowerUpperCase(reversed) → caseToggled
    │
    ▼
removeSpaces(caseToggled)   → password ✅
```

---

### 2️⃣ Trace Manual Lengkap — `'Alexei'`

```
Input: 'Alexei'
  │
  ▼
trimmedName    = 'Alexei'.trim()              → 'Alexei'
  │
  ▼
vocalsChanged  = changeVocals('Alexei')       → 'Blfxfj'
  │
  ▼
reversed       = reverseWord('Blfxfj')        → 'jfxflB'
  │
  ▼
caseToggled    = setLowerUpperCase('jfxflB')  → 'JFXFLb'
  │
  ▼
password       = removeSpaces('JFXFLb')       → 'JFXFLb'
  │
  ▼
return 'JFXFLb' ✅
```

---

### 3️⃣ Trace Manual Lengkap — `'Sergei Dragunov'`

```
Input: 'Sergei Dragunov'
  │
  ▼
trimmedName    = 'Sergei Dragunov'
  │
  ▼
vocalsChanged  = changeVocals('Sergei Dragunov')
              → 'SfrgfJ DrbgvnPv' (vokal diganti)
  │
  ▼
reversed       = reverseWord('SfrgfJ DrbgvnPv')
              → 'vPnvgbrD JfgRfs' (dibalik)
  │
  ▼
caseToggled    = setLowerUpperCase('vPnvgbrD JfgRfs')
              → 'VpNVGBRd jFGrFS' (toggle case)
  │
  ▼
password       = removeSpaces('VpNVGBRd jFGrFS')
              → 'VpNVGBRdjFGrFS'
```

> ⚠️ Hasil berbeda dari expected? Cek kembali — ini hanya ilustrasi cara trace, bukan hasil aktual. Selalu jalankan di console untuk hasil yang tepat!

---

### 4️⃣ Kenapa naming variable itu penting?

Bandingkan dua versi ini:

```js
// ❌ Naming lama — kurang deskriptif
const formattedVocals      = changeVocals(trimmedName)
const formattedReverse     = reverseWord(formattedVocals)
const formattedLowerAndUpper = setLowerUpperCase(formattedReverse)
const resultFormatted      = removeSpaces(formattedLowerAndUpper)
```

```js
// ✅ Naming baru — deskriptif, langsung paham isinya
const vocalsChanged = changeVocals(trimmedName)
const reversed      = reverseWord(vocalsChanged)
const caseToggled   = setLowerUpperCase(reversed)
const password      = removeSpaces(caseToggled)
```

> 💡 Prinsip naming yang baik: nama variable menjawab pertanyaan **"isi variable ini apa?"** — bukan "dari mana asalnya".

| Variable Lama | Variable Baru | Alasan |
|---------------|---------------|--------|
| `formattedVocals` | `vocalsChanged` | Mendeskripsikan aksi yang terjadi |
| `formattedReverse` | `reversed` | Singkat dan langsung jelas |
| `formattedLowerAndUpper` | `caseToggled` | "Toggle" lebih idiomatik |
| `resultFormatted` | `password` | Ini hasil akhirnya — namanya mencerminkan itu |

---

## 🔄 Alternatif — Nested Function Calls

Semua pipeline bisa ditulis dalam satu baris tanpa variable perantara:

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

> 💡 Perhatikan urutan membacanya **dari dalam ke luar** — sama persis dengan urutan requirement soal, tapi dibaca terbalik.

**Perbandingan:**

| Aspek | Variable Terpisah | Nested Calls |
|-------|-------------------|--------------|
| Readability | ✅ Linear, mudah dibaca | Dibaca dari dalam ke luar |
| Debug friendly | ✅ Bisa `console.log` tiap step | ❌ Sulit inspect nilai tengah |
| Jumlah kode | Lebih panjang | Lebih ringkas |
| Gaya | Imperatif | Fungsional |

---

## ⚠️ Pitfalls

### ❌ Menukar urutan pipeline

```js
// ❌ Salah — urutan ditukar
const reversed      = reverseWord(trimmedName)     // reverse dulu
const vocalsChanged = changeVocals(reversed)       // baru ganti vokal
// Hasilnya akan berbeda dari expected output!

// ✅ Benar — sesuai requirement
const vocalsChanged = changeVocals(trimmedName)
const reversed      = reverseWord(vocalsChanged)
```

### ❌ Tidak pakai trimmedName di pipeline

```js
// ❌ Salah — pakai name mentah, bukan trimmedName
const vocalsChanged = changeVocals(name) // spasi leading/trailing ikut masuk!

// ✅ Benar
const vocalsChanged = changeVocals(trimmedName)
```

---

## 🔑 Keywords

| Keyword | Penjelasan |
|---------|-----------|
| Pipeline | Konsep output satu fungsi menjadi input fungsi berikutnya |
| Helper function | Fungsi kecil yang membantu fungsi utama (`changeVocals`, dst) |
| Early return | Keluar dari fungsi lebih awal jika kondisi tidak terpenuhi |
| Nested calls | Memanggil fungsi di dalam fungsi — `f(g(h(x)))` |
| DRY | *Don't Repeat Yourself* — hindari duplikasi kode |

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Konsep utama | Pipeline — output satu fungsi → input fungsi berikutnya |
| Urutan | `changeVocals → reverseWord → setLowerUpperCase → removeSpaces` |
| Naming | Deskriptif — `vocalsChanged`, `reversed`, `caseToggled`, `password` |
| Validasi | Trim dulu, cek panjang, baru proses pipeline |
| Alternatif | Nested function calls — lebih ringkas tapi kurang debug-friendly |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 6 — Validasi Input](./06-input-validation-trim_validasi-input.md)**
- **📖 [Lanjut ke Part 8 — Solusi Alternatif →](./08-alternative-solutions_solusi-alternatif.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
