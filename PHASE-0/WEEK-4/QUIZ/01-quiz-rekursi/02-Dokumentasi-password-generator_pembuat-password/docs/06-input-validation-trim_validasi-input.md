# ✅ Part 6 — Input Validation & Trim / Validasi Input

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green?style=for-the-badge)

---

## 🧭 Quick Jump

| 📋 Kode | 🐛 Bug Awal | 🔍 Penjelasan | ⚠️ Pitfalls | 🔑 Keywords | ✅ Ringkasan |
|:-------:|:-----------:|:-------------:|:-----------:|:-----------:|:-----------:|
| [Jump](#-kode-solusi) | [Jump](#-bug-awal--proses-perbaikan) | [Jump](#-penjelasan-step-by-step) | [Jump](#%EF%B8%8F-pitfalls) | [Jump](#-keywords) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami pentingnya validasi input sebelum memproses data
- ✅ Mengerti kenapa `name.length < 5` saja tidak cukup
- ✅ Memahami cara kerja `.trim()` dan kapan harus dipakai
- ✅ Mengerti kenapa `.trim()` cukup dipanggil sekali saja

---

## 📋 Kode Solusi

```js
function passwordGenerator(name) {
  const trimmedName = name.trim()

  if (trimmedName.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'

  const vocalsChanged = changeVocals(trimmedName)
  const reversed = reverseWord(vocalsChanged)
  const caseToggled = setLowerUpperCase(reversed)
  const password = removeSpaces(caseToggled)

  return password
}
```

### ▶️ Coba Langsung

```js
console.log(passwordGenerator('Alex'));
// Output: 'Minimal karakter yang diinputkan adalah 5 karakter'
```

```js
console.log(passwordGenerator('     '));
// Output: 'Minimal karakter yang diinputkan adalah 5 karakter'
```

```js
console.log(passwordGenerator('  Alexei  '));
// Output: 'JFXFLb' — spasi di awal & akhir diabaikan ✅
```

---

## 🐛 Bug Awal & Proses Perbaikan

### Versi 1 — Bug: Validasi tidak mempertimbangkan spasi

```js
// ❌ Versi awal — hanya cek panjang mentah
if (name.length < 5) return 'Minimal karakter...'
```

**Masalahnya:**

```js
passwordGenerator('     ') // 5 spasi → length = 5 → lolos validasi!
// Hasil: '' (string kosong) ❌
```

---

### Versi 2 — Perbaikan pertama: trim saat validasi

```js
// ⚠️ Sudah benar, tapi .trim() dipanggil 2x
if (name.trim().length < 5) return 'Minimal karakter...'

const trimmedName = name.trim() // dipanggil lagi di sini
```

**Masalahnya:** `.trim()` dipanggil dua kali — tidak efisien.

---

### Versi 3 — Final: trim sekali, pakai di mana-mana ✅

```js
// ✅ Trim sekali di awal, pakai trimmedName seterusnya
const trimmedName = name.trim()

if (trimmedName.length < 5) return 'Minimal karakter...'
```

> 💡 Prinsipnya: **DRY** — *Don't Repeat Yourself*. Kalau bisa dihitung sekali, jangan hitung dua kali.

---

## 🔍 Penjelasan Step by Step

### 1️⃣ Apa itu `.trim()`?

`.trim()` menghapus **whitespace di awal dan akhir** string — bukan di tengah:

```js
'  Alexei  '.trim()    // → 'Alexei' ✅
'  hello world  '.trim() // → 'hello world' ✅ (spasi tengah tetap ada)
'Alexei'.trim()        // → 'Alexei' (tidak ada perubahan)
'     '.trim()         // → '' (string kosong)
```

---

### 2️⃣ Kenapa perlu trim sebelum validasi?

```js
// Tanpa trim — bisa lolos validasi padahal isinya cuma spasi
'     '.length          // → 5 → lolos! ❌
'     '.trim().length   // → 0 → kena validasi ✅

// Tanpa trim — nama pendek dengan spasi bisa lolos
'  hi  '.length         // → 6 → lolos! ❌
'  hi  '.trim().length  // → 2 → kena validasi ✅
```

---

### 3️⃣ Kenapa trim juga perlu diterapkan ke pipeline?

```js
// Tanpa trim di pipeline — spasi ikut diproses
changeVocals('  Alexei  ') // → '  Blfxfj  ' (spasi ikut masuk)

// Dengan trim di pipeline — hanya nama yang diproses
changeVocals('Alexei') // → 'Blfxfj' ✅
```

> 💡 Spasi di awal/akhir memang akhirnya dihapus oleh `removeSpaces` — tapi lebih bersih kalau di-trim dari awal sebelum masuk pipeline.

---

### 4️⃣ Visualisasi alur validasi

```
Input: '  hi  '
  │
  ▼
trimmedName = '  hi  '.trim() → 'hi'
  │
  ▼
trimmedName.length → 2
  │
  ▼
2 < 5 → true → return 'Minimal karakter...' ✅


Input: '  Alexei  '
  │
  ▼
trimmedName = '  Alexei  '.trim() → 'Alexei'
  │
  ▼
trimmedName.length → 6
  │
  ▼
6 < 5 → false → lanjut ke pipeline ✅
```

---

## ⚠️ Pitfalls

### ❌ Validasi panjang tanpa trim

```js
// ❌ Input spasi murni bisa lolos validasi
if (name.length < 5) return 'Minimal karakter...'

passwordGenerator('     ') // → '' (password kosong!) ❌

// ✅ Trim dulu sebelum cek panjang
const trimmedName = name.trim()
if (trimmedName.length < 5) return 'Minimal karakter...'
```

### ❌ Memanggil `.trim()` berkali-kali

```js
// ❌ Tidak efisien — trim dipanggil 2x
if (name.trim().length < 5) return 'Minimal karakter...'
const result = changeVocals(name.trim())

// ✅ Trim sekali, simpan di variable
const trimmedName = name.trim()
if (trimmedName.length < 5) return 'Minimal karakter...'
const result = changeVocals(trimmedName)
```

### ❌ Trim tapi tetap pakai `name` di pipeline

```js
// ❌ Sudah trim tapi tidak dipakai di pipeline
const trimmedName = name.trim()
if (trimmedName.length < 5) return 'Minimal karakter...'

const vocalsChanged = changeVocals(name) // ❌ pakai name, bukan trimmedName!

// ✅ Konsisten pakai trimmedName
const vocalsChanged = changeVocals(trimmedName) // ✅
```

---

## 🔑 Keywords

| Keyword | Penjelasan |
|---------|-----------|
| `.trim()` | Hapus whitespace di awal dan akhir string |
| `.length` | Panjang string |
| Validasi input | Pengecekan input sebelum diproses |
| Early return | Keluar dari fungsi lebih awal jika kondisi tidak terpenuhi |
| DRY | *Don't Repeat Yourself* — jangan panggil hal yang sama berkali-kali |

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Validasi | Trim dulu, baru cek panjang |
| `.trim()` | Dipanggil sekali — hasilnya disimpan di `trimmedName` |
| Input spasi murni | Tertangkap validasi setelah di-trim ✅ |
| Pipeline | Pakai `trimmedName`, bukan `name` mentah |
| Early return | Jika tidak valid, langsung return pesan error |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 5 — removeSpaces](./05-regex-remove-spaces_hapus-spasi.md)**
- **📖 [Lanjut ke Part 7 — Pipeline Function →](./07-pipeline-function_fungsi-berantai.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
