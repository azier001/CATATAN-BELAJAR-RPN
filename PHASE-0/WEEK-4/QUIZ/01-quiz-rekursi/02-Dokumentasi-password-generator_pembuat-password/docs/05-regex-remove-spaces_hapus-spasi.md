# 🧹 Part 5 — Regex Remove Spaces / Hapus Spasi

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green?style=for-the-badge)

---

## 🧭 Quick Jump

| 📋 Kode | 🔍 Penjelasan | ⚠️ Pitfalls | 🔑 Keywords | ✅ Ringkasan |
|:-------:|:-------------:|:-----------:|:-----------:|:-----------:|
| [Jump](#-kode-solusi) | [Jump](#-penjelasan-step-by-step) | [Jump](#%EF%B8%8F-pitfalls) | [Jump](#-keywords) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara menghapus semua spasi menggunakan regex
- ✅ Mengerti perbedaan `\s` vs `' '` (spasi biasa)
- ✅ Mengerti perbedaan `\s` vs `\s+`
- ✅ Tahu kenapa regex lebih handal dari sekedar replace spasi biasa

---

## 📋 Kode Solusi

```js
function removeSpaces(str) {
  return str.replace(/\s+/g, '')
}
```

### ▶️ Coba Langsung

```js
console.log(removeSpaces('JFXFLB'));
// Output: 'JFXFLB' — tidak ada spasi, tidak ada perubahan
```

```js
console.log(removeSpaces('VPN VGB RdJ FGR Fs'));
// Output: 'VPNVGBRdJFGRFs'
```

```js
console.log(removeSpaces('hello   world'));
// Output: 'helloworld' — multiple spasi juga terhapus ✅
```

---

## 🔍 Penjelasan Step by Step

### 1️⃣ Anatomi Regex `/\s+/g`

```
  /\s+/g
  │││││
  │││││── g  → global flag: cari & ganti SEMUA kemunculan
  ││││
  ││││─── +  → quantifier: 1 atau lebih karakter \s berturut-turut
  │││
  │││──── \s → shorthand: semua jenis whitespace
  ││
  ││───── /  → penutup regex
  │
  │────── /  → pembuka regex
```

---

### 2️⃣ Apa itu `\s`?

`\s` mencocokkan **semua jenis whitespace**, bukan hanya spasi biasa:

```
\s mencocokkan:
  ' '   → spasi biasa
  '\t'  → tab
  '\n'  → newline
  '\r'  → carriage return
  '\f'  → form feed
```

> 💡 Untuk nama orang, biasanya hanya ada spasi biasa — tapi pakai `\s` lebih aman dan handal.

---

### 3️⃣ Perbedaan `\s` vs `\s+`

```js
// \s  → cocokkan SATU whitespace
'hello   world'.replace(/\s/g, '')
// → 'helloworld' ✅ (tapi setiap spasi diproses satu per satu)

// \s+ → cocokkan SATU ATAU LEBIH whitespace sekaligus
'hello   world'.replace(/\s+/g, '')
// → 'helloworld' ✅ (lebih efisien — 3 spasi diproses sekaligus)
```

> 💡 Untuk hapus spasi, hasil keduanya sama — tapi `\s+` lebih efisien karena memproses sekelompok spasi sekaligus.

---

### 4️⃣ Kenapa perlu flag `g` (global)?

```js
// Tanpa flag g → hanya ganti kemunculan PERTAMA
'hello world foo'.replace(/\s+/, '')
// → 'helloworld foo' ❌ spasi kedua tidak terhapus!

// Dengan flag g → ganti SEMUA kemunculan
'hello world foo'.replace(/\s+/g, '')
// → 'helloworldfoo' ✅
```

---

### 5️⃣ Trace Manual — `'JFXFL b'`

```
Input: 'JFXFL b'
  │
  ▼
regex /\s+/g mencari semua whitespace...
  'JFXFL b' → spasi ditemukan di index 6
  │
  ▼
.replace(..., '') → ganti dengan string kosong
  │
  ▼
Output: 'JFXFLb' ✅
```

---

## ⚠️ Pitfalls

### ❌ Hanya replace spasi biasa — tidak menangani tab atau multiple spasi

```js
// ❌ Kurang handal — hanya spasi tunggal
str.replace(' ', '') // tanpa regex, tanpa flag g
// 'hello   world' → 'hello  world' ❌ hanya spasi pertama!

// ✅ Lebih handal
str.replace(/\s+/g, '')
// 'hello   world' → 'helloworld' ✅
```

### ❌ Lupa flag `g`

```js
// ❌ Salah — hanya menghapus spasi pertama
str.replace(/\s+/, '')
// 'hello world foo' → 'helloworld foo' ❌

// ✅ Benar — menghapus semua spasi
str.replace(/\s+/g, '')
// 'hello world foo' → 'helloworldfoo' ✅
```

---

## 🔑 Keywords

| Keyword | Penjelasan |
|---------|-----------|
| `\s` | Shorthand regex — cocokkan semua jenis whitespace |
| `\s+` | Satu atau lebih whitespace berturut-turut |
| `g` flag | Global — cocokkan semua kemunculan, bukan hanya pertama |
| `.replace(regex, '')` | Ganti semua yang cocok dengan string kosong |
| Whitespace | Karakter "kosong" — spasi, tab, newline, dst |

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Input | String sembarang |
| Proses | Ganti semua whitespace dengan string kosong |
| Output | String tanpa spasi |
| Method utama | `.replace(/\s+/g, '')` |
| `\s` vs `' '` | `\s` lebih handal — menangani semua jenis whitespace |
| Flag `g` | Wajib — agar semua spasi terhapus, bukan hanya yang pertama |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 4 — setLowerUpperCase](./04-toggle-case_tukar-huruf-besar-kecil.md)**
- **📖 [Lanjut ke Part 6 — Validasi Input →](./06-input-validation-trim_validasi-input.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
