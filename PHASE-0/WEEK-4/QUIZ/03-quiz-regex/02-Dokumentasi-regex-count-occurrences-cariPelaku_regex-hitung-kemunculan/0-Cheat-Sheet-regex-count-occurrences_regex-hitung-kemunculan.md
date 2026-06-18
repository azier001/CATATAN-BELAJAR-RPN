# 🔄 Cheat Sheet — Regex Count Occurrences (`cariPelaku`)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Ternary Operator ⭐ `PALING DIREKOMENDASIKAN`

```javascript
function cariPelaku(text) {
  const targetPattern = /abc/g;
  const matches = text.match(targetPattern);

  return matches ? matches.length : 0;
}
```

> 🔑 Ringkas, eksplisit, dan null-safe. Cocok untuk production karena mudah dibaca siapa saja dan aman dari crash `null.length`.

---

### 2. One-Liner Short-Circuit

```javascript
function cariPelaku(str) {
  return (str.match(/abc/g) || []).length;
}
```

> 🔑 Idiom standar JavaScript — sangat pendek (1 baris logika), null-safe via `|| []`. Cocok untuk kode pribadi atau utility function.

---

### 3. Split Trick (Tanpa Regex)

```javascript
function cariPelaku(text) {
  return text.split('abc').length - 1;
}
```

> 🔑 Alternatif tanpa regex sama sekali. `.split()` selalu return Array sehingga zero null risk. Hati-hati: boros memori untuk string sangat besar.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 1. Descriptive If-Else `PALING INTUITIF`

```javascript
function cariPelaku(text) {
  const targetPattern = /abc/g;
  const matches = text.match(targetPattern);

  if (matches) {
    return matches.length;
  } else {
    return 0;
  }
}
```

> 🔑 Setiap langkah terpisah dan jelas — ideal untuk pemula yang baru belajar regex dan `.match()`. Paling mudah di-debug dengan `console.log`.

---

### 2. While Loop + Exec

```javascript
function cariPelaku(text) {
  const pattern = /abc/g;
  let count = 0;

  while (pattern.exec(text) !== null) {
    count++;
  }

  return count;
}
```

> 🔑 Mengajarkan cara kerja `.exec()` di balik layar — proses satu match per iterasi. Paling hemat memori untuk data sangat besar (jutaan karakter).

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 1. Match Tanpa Null Safety ⚠️ `JANGAN DIPAKAI DI PRODUCTION`

```javascript
function cariPelaku(text) {
  const matches = text.match(/abc/g);

  return matches.length;
}
```

> ⚠️ Crash jika tidak ada match karena `.match()` return `null`, dan `null.length` = **TypeError**. Hanya untuk latihan memahami kenapa null safety penting.

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ CRASH — .match() bisa return null
text.match(/abc/g).length;         // TypeError: Cannot read properties of null

// ✅ AMAN — short-circuit fallback ke array kosong
(text.match(/abc/g) || []).length;  // 0 (aman)
```

```javascript
// ❌ BAHAYA — .exec() tanpa flag `g` = infinite loop!
const pattern = /abc/;              // tanpa `g`
while (pattern.exec(text)) { ... } // ♾️ loop selamanya

// ✅ AMAN — selalu pakai flag `g` dengan .exec() dalam loop
const pattern = /abc/g;             // dengan `g`
while (pattern.exec(text)) { ... } // berhenti setelah semua match ditemukan
```

```javascript
// 💡 .split() selalu return Array, tidak pernah null
'hello'.split('xyz');   // ['hello']     → length - 1 = 0 ✅
'abcabc'.split('abc');  // ['', '', '']  → length - 1 = 2 ✅
```

---

## 📊 QUICK COMPARISON

| Versi | Pendekatan | Baris | Method | Null-Safe? | Rekomendasi |
|-------|-----------|-------|--------|-----------|-------------|
| V1 | If-Else deskriptif | 8 | `.match()` | ✅ | 🎓 Pemula |
| V2 | Ternary operator | 5 | `.match()` | ✅ | ⭐ Production |
| V3 | Short-circuit `\|\|` | 3 | `.match()` | ✅ | ⚡ Quick code |
| V4 | Split trick | 3 | `.split()` | ✅ | 🚫 Tanpa regex |
| V5 | While + exec | 7 | `.exec()` | ✅ | 📊 Big data |

---

## 🧪 TEST CASES

```javascript
console.log(cariPelaku('mabcvabc'));    // 2
console.log(cariPelaku('abcdabdc'));    // 1
console.log(cariPelaku('bcabcac'));     // 1
console.log(cariPelaku('abcabcabc'));   // 3
console.log(cariPelaku('babcbacabc'));  // 2
```
