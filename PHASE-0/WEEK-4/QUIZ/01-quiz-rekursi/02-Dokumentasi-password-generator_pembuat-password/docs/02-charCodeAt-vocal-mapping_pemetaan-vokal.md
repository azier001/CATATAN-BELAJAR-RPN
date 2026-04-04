# 🔤 Part 2 — charCodeAt & Vocal Mapping / Pemetaan Vokal

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green?style=for-the-badge)

---

## 🧭 Quick Jump

| 📋 Kode | 🔍 Penjelasan | ⚠️ Pitfalls | 🔄 Alternatif | 🔑 Keywords | ✅ Ringkasan |
|:-------:|:-------------:|:-----------:|:-------------:|:-----------:|:-----------:|
| [Jump](#-kode-solusi) | [Jump](#-penjelasan-step-by-step) | [Jump](#%EF%B8%8F-pitfalls) | [Jump](#-alternatif--object-mapping) | [Jump](#-keywords) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami apa itu `charCodeAt()` dan `fromCharCode()`
- ✅ Mengerti kenapa pendekatan `+1` bisa digunakan untuk ganti vokal
- ✅ Memahami alternatif pendekatan dengan object mapping
- ✅ Tahu kapan pakai `charCodeAt` vs object mapping

---

## 📋 Kode Solusi

```js
function changeVocals(str) {
  const vowelChars = 'aiueoAIUEO'
  let result = ''

  for (const char of str) {
    if (vowelChars.includes(char)) {
      const code = char.charCodeAt(0)
      result += String.fromCharCode(code + 1)
    } else {
      result += char
    }
  }

  return result
}
```

### ▶️ Coba Langsung

```js
console.log(changeVocals('Alexei'));
// Output: 'Blfxfj'
```

```js
console.log(changeVocals('aeiou'));
// Output: 'bfjpv'
```

```js
console.log(changeVocals('AEIOU'));
// Output: 'BFJPV'
```

---

## 🔍 Penjelasan Step by Step

### 1️⃣ `charCodeAt()` itu apa?

Setiap karakter di komputer punya **nomor unik** yang disebut **ASCII code**. `charCodeAt()` adalah method untuk mendapatkan nomor itu.

```js
'a'.charCodeAt(0) // → 97
'b'.charCodeAt(0) // → 98
'A'.charCodeAt(0) // → 65
'B'.charCodeAt(0) // → 66
```

> 💡 Angka `0` di dalam `charCodeAt(0)` artinya "ambil karakter di index ke-0" — karena kita hanya punya 1 karakter, selalu pakai `0`.

---

### 2️⃣ `String.fromCharCode()` itu apa?

Kebalikan dari `charCodeAt()` — mengubah **nomor ASCII** kembali menjadi **karakter**.

```js
String.fromCharCode(97)  // → 'a'
String.fromCharCode(98)  // → 'b'
String.fromCharCode(65)  // → 'A'
String.fromCharCode(66)  // → 'B'
```

---

### 3️⃣ Kenapa cukup `+1`?

Karena di tabel ASCII, setiap vokal kebetulan diikuti langsung oleh konsonan yang kita inginkan:

```
Vokal   ASCII    +1    Hasil
─────────────────────────────
  a  →   97   →  98  →  b  ✅
  e  →  101   → 102  →  f  ✅
  i  →  105   → 106  →  j  ✅
  o  →  111   → 112  →  p  ✅
  u  →  117   → 118  →  v  ✅
  A  →   65   →  66  →  B  ✅
  E  →   69   →  70  →  F  ✅
  I  →   73   →  74  →  J  ✅
  O  →   79   →  80  →  P  ✅
  U  →   85   →  86  →  V  ✅
```

> 💡 Ini bukan kebetulan soal — memang dirancang agar `+1` bekerja untuk semua vokal!

---

### 4️⃣ Trace Manual — `'Alexei'`

```
char 'A' → vokal ✅ → charCode 65 + 1 = 66 → 'B'
char 'l' → bukan vokal → tetap 'l'
char 'e' → vokal ✅ → charCode 101 + 1 = 102 → 'f'
char 'x' → bukan vokal → tetap 'x'
char 'e' → vokal ✅ → charCode 101 + 1 = 102 → 'f'
char 'i' → vokal ✅ → charCode 105 + 1 = 106 → 'j'

Hasil: 'Blfxfj' ✅
```

---

## ⚠️ Pitfalls

### ❌ Lupa bahwa `includes()` case-sensitive

```js
// ❌ Salah — huruf besar tidak tertangkap
const vowelChars = 'aiueo'
vowelChars.includes('A') // → false!

// ✅ Benar — sertakan huruf besar juga
const vowelChars = 'aiueoAIUEO'
vowelChars.includes('A') // → true ✅
```

### ❌ Mengubah semua karakter, bukan hanya vokal

```js
// ❌ Salah — semua karakter digeser
for (const char of str) {
  result += String.fromCharCode(char.charCodeAt(0) + 1)
}
// 'Alex' → 'Bmfy' (semua bergeser, bukan hanya vokal)

// ✅ Benar — cek dulu apakah vokal
if (vowelChars.includes(char)) {
  result += String.fromCharCode(char.charCodeAt(0) + 1)
} else {
  result += char
}
```

---

## 🔄 Alternatif — Object Mapping

Pendekatan lain yang lebih **eksplisit** — mapping setiap vokal secara langsung:

```js
function changeVocals(str) {
  const vocalMap = {
    'a': 'b', 'i': 'j', 'u': 'v', 'e': 'f', 'o': 'p',
    'A': 'B', 'I': 'J', 'U': 'V', 'E': 'F', 'O': 'P'
  }

  return [...str].map(char => vocalMap[char] ?? char).join('')
}
```

> 💡 Operator `??` (nullish coalescing) artinya: kalau `vocalMap[char]` hasilnya `undefined` (bukan vokal), gunakan `char` apa adanya.

**Perbandingan:**

| Aspek | `charCodeAt + 1` | Object Mapping |
|-------|-----------------|----------------|
| Readability | Perlu paham ASCII | Langsung terlihat mapping-nya |
| Explicitness | Implisit | Eksplisit |
| Extensibility | Perlu hitung ASCII | Tinggal tambah key-value |
| Performa | Sama | Sama |

---

## 🔑 Keywords

| Keyword | Penjelasan |
|---------|-----------|
| `charCodeAt(index)` | Ambil kode ASCII karakter di posisi `index` |
| `String.fromCharCode(code)` | Ubah kode ASCII menjadi karakter |
| `includes()` | Cek apakah string mengandung karakter tertentu |
| `??` (nullish coalescing) | Gunakan nilai kanan jika kiri `null` atau `undefined` |
| ASCII | Sistem penomoran karakter — setiap huruf punya nomor unik |

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Input | String sembarang |
| Proses | Cek setiap karakter — jika vokal, geser +1 ASCII |
| Output | String dengan vokal yang sudah diganti |
| Method utama | `charCodeAt()` + `String.fromCharCode()` |
| Alternatif | Object mapping dengan `??` operator |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 1 — Challenge Overview](./01-challenge-overview_gambaran-challenge.md)**
- **📖 [Lanjut ke Part 3 — reverseWord →](./03-string-reverse_membalik-string.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
