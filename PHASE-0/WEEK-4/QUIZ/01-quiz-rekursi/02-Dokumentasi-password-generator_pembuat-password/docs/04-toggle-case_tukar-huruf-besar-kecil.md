# 🔠 Part 4 — Toggle Case / Tukar Huruf Besar Kecil

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green?style=for-the-badge)

---

## 🧭 Quick Jump

| 📋 Kode | 🔍 Penjelasan | ⚠️ Pitfalls | 🔄 Alternatif | 🔑 Keywords | ✅ Ringkasan |
|:-------:|:-------------:|:-----------:|:-------------:|:-----------:|:-----------:|
| [Jump](#-kode-solusi) | [Jump](#-penjelasan-step-by-step) | [Jump](#%EF%B8%8F-pitfalls) | [Jump](#-alternatif--regex) | [Jump](#-keywords) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara toggle case yang **presisi** menggunakan range karakter
- ✅ Mengerti kenapa `char === char.toUpperCase()` kurang tepat untuk cek huruf besar
- ✅ Memahami alternatif pendekatan dengan regex
- ✅ Tahu perbedaan **toggle case** vs **alternating case**

---

## 📋 Kode Solusi

```js
function setLowerUpperCase(str) {
  let transformedText = ''

  for (const char of str) {
    if (char >= 'A' && char <= 'Z') {
      transformedText += char.toLowerCase()
    } else if (char >= 'a' && char <= 'z') {
      transformedText += char.toUpperCase()
    } else {
      transformedText += char
    }
  }

  return transformedText
}
```

### ▶️ Coba Langsung

```js
console.log(setLowerUpperCase('jfxflB'));
// Output: 'JFXFLB' → tunggu, ini salah! coba trace manual dulu 🤔
```

```js
console.log(setLowerUpperCase('Hello World'));
// Output: 'hELLO wORLD'
```

```js
console.log(setLowerUpperCase('abc123!'));
// Output: 'ABC123!' — angka & simbol tidak berubah ✅
```

---

## 🔍 Penjelasan Step by Step

### 1️⃣ Kenapa pakai `char >= 'A' && char <= 'Z'`?

JavaScript bisa membandingkan karakter seperti angka — karena di balik layar, karakter punya nilai ASCII:

```js
'A' >= 'A' && 'A' <= 'Z' // → true  ✅ huruf besar
'z' >= 'A' && 'z' <= 'Z' // → false ✅ bukan huruf besar
'1' >= 'A' && '1' <= 'Z' // → false ✅ angka tidak masuk
'!' >= 'A' && '!' <= 'Z' // → false ✅ simbol tidak masuk
```

> 💡 Ini cara yang **eksplisit dan presisi** — hanya menangkap huruf besar saja, tidak lebih.

---

### 2️⃣ Tiga kondisi yang ditangani

```
char masuk kondisi mana?
  │
  ├── 'A' sampai 'Z' → huruf BESAR → jadikan kecil (.toLowerCase())
  │
  ├── 'a' sampai 'z' → huruf kecil → jadikan BESAR (.toUpperCase())
  │
  └── selain itu     → angka, simbol, spasi → biarkan apa adanya
```

---

### 3️⃣ Trace Manual — `'jfxflB'`

```
char 'j' → 'a'-'z' ✅ → toUpperCase() → 'J'
char 'f' → 'a'-'z' ✅ → toUpperCase() → 'F'
char 'x' → 'a'-'z' ✅ → toUpperCase() → 'X'
char 'f' → 'a'-'z' ✅ → toUpperCase() → 'F'
char 'l' → 'a'-'z' ✅ → toUpperCase() → 'L'
char 'B' → 'A'-'Z' ✅ → toLowerCase() → 'b'

Hasil: 'JFXFLb' ✅
```

---

### 4️⃣ Perbedaan Toggle Case vs Alternating Case

Ini dua konsep yang berbeda — jangan sampai tertukar!

```js
// Toggle Case (yang kita pakai) ✅
// Huruf besar → kecil, huruf kecil → besar
'Hello' → 'hELLO'

// Alternating Case (BUKAN yang diminta soal) ❌
// Berdasarkan index — genap besar, ganjil kecil
'Hello' → 'HeLlO'
```

> ⚠️ Kode dari teman yang kamu bandingkan menggunakan **alternating case** — itulah kenapa hasilnya berbeda!

---

## ⚠️ Pitfalls

### ❌ Menggunakan `char === char.toUpperCase()` untuk cek huruf besar

```js
// ❌ Kurang presisi — angka dan simbol juga lolos kondisi ini!
if (char === char.toUpperCase()) {
  transformedText += char.toLowerCase()
}

// Kenapa bermasalah?
'1' === '1'.toUpperCase() // → true! angka masuk branch ini
'!' === '!'.toUpperCase() // → true! simbol masuk branch ini
' ' === ' '.toUpperCase() // → true! spasi masuk branch ini

// Hasilnya kebetulan tidak rusak karena '1'.toLowerCase() = '1'
// Tapi logikanya tidak presisi ❌

// ✅ Lebih presisi
if (char >= 'A' && char <= 'Z') { ... }
```

### ❌ Mengira ini sama dengan alternating case

```js
// ❌ Salah asumsi
// Toggle case BUKAN berarti ganjil-genap

// Toggle case → lihat huruf aslinya
'aAbB' → 'AaBb' // a→A, A→a, b→B, B→b

// Alternating case → lihat posisi index
'aAbB' → 'AAbB' // index 0→A, 1→A, 2→b, 3→B
```

---

## 🔄 Alternatif — Regex

Pendekatan lebih ringkas menggunakan regex:

```js
function setLowerUpperCase(str) {
  return str.replace(/[a-zA-Z]/g, char => {
    return char >= 'A' && char <= 'Z'
      ? char.toLowerCase()
      : char.toUpperCase()
  })
}
```

> 💡 Regex `/[a-zA-Z]/g` otomatis hanya mencocokkan huruf saja — angka, simbol, dan spasi **tidak tersentuh** sama sekali. Tidak perlu branch `else` tambahan.

**Perbandingan:**

| Aspek | `for...of` + kondisi manual | Regex |
|-------|----------------------------|-------|
| Readability | ✅ Eksplisit dan mudah dipahami | Lebih ringkas |
| Safety | ✅ Eksplisit cek `A-Z` / `a-z` | Regex sudah filter huruf saja |
| Familiar | ✅ Mudah untuk pemula | Perlu paham regex |

---

## 🔑 Keywords

| Keyword | Penjelasan |
|---------|-----------|
| `char >= 'A' && char <= 'Z'` | Cek apakah karakter adalah huruf besar |
| `char >= 'a' && char <= 'z'` | Cek apakah karakter adalah huruf kecil |
| `.toUpperCase()` | Ubah karakter menjadi huruf besar |
| `.toLowerCase()` | Ubah karakter menjadi huruf kecil |
| Toggle Case | Balik case — besar↔kecil berdasarkan karakter aslinya |
| Alternating Case | Balik case berdasarkan posisi index — beda konsep! |

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Input | String sembarang |
| Proses | Cek setiap karakter — huruf besar→kecil, huruf kecil→besar |
| Output | String dengan case yang sudah di-toggle |
| Method utama | `for...of` + range `A-Z` / `a-z` |
| Alternatif | Regex `/[a-zA-Z]/g` |
| Angka & simbol | Tidak berubah ✅ |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 3 — reverseWord](./03-string-reverse_membalik-string.md)**
- **📖 [Lanjut ke Part 5 — removeSpaces →](./05-regex-remove-spaces_hapus-spasi.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
