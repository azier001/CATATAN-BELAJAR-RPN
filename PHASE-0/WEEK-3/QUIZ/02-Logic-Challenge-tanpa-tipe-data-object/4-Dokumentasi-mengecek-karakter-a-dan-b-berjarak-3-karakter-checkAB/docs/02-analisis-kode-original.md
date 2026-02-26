# 📚 checkAB - PART 2: ANALISIS KODE ORIGINAL

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         📋 PART 2: ANALISIS KODE ORIGINAL 📋                            ║
║                                                                          ║
║              Apakah Kode Sudah Sesuai Kriteria?                          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📋 Kode Original | ✅ Yang Benar | ⚠️ Bug | 📊 Kesimpulan |
|:----------------:|:------------:|:------:|:-------------:|
| [Jump](#-kode-original) | [Jump](#-yang-sudah-benar) | [Jump](#️-bug-yang-ditemukan) | [Jump](#-kesimpulan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja kode original
- ✅ Tahu bagian mana yang sudah benar
- ✅ Tahu bug yang ada dan kenapa tidak terdeteksi

---

## 📋 Kode Original

Ada dua versi kode original — versi pertama di-comment, versi kedua yang aktif dijalankan.

### Versi 1 (Di-comment)

```javascript
// function checkAB(str) {
//   const indexA = str.indexOf('a')
//   const indexB = str.indexOf('b')
//
//   const diffChar = Math.abs(indexA - indexB)
//
//   if (diffChar === 4) return true
//
//   return false
// }
```

### Versi 2 (Aktif)

```javascript
function checkAB(str) {
  const indexesA = []
  const indexesB = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') indexesA.push(i)
    if (str[i] === 'b') indexesB.push(i)
  }

  const maxLength = Math.max(indexesA.length, indexesB.length)
  const minLength = Math.min(indexesA.length, indexesB.length)

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < minLength; j++) {
      const diff = Math.abs(indexesA[i] - indexesB[j])

      if (diff === 4) return true
    }
  }

  return false
}
```

---

## ✅ Yang Sudah Benar

### Versi 2

- Mengumpulkan **semua** index `a` dan `b` ke dalam array ✅
- Membandingkan setiap pasangan index ✅
- Kondisi `diff === 4` sudah tepat ✅
- Semua test case menghasilkan nilai yang tepat ✅

```javascript
checkAB('lane borrowed')  // true  ✅
checkAB('i am sick')      // false ✅
checkAB('you are boring') // true  ✅
checkAB('barbarian')      // true  ✅
checkAB('bacon and meat') // false ✅
```

---

## ⚠️ Bug yang Ditemukan

### Versi 1 — `indexOf()` hanya ambil index pertama

```javascript
const indexA = str.indexOf('a')  // hanya index pertama!
const indexB = str.indexOf('b')  // hanya index pertama!
```

Jika string punya banyak `a` atau `b`, pasangan lain yang valid akan terlewat.

```javascript
// Contoh gagal: 'barbarian'
// indexOf('b') = 0  (b pertama)
// indexOf('a') = 1  (a pertama)
// diff = |0 - 1| = 1 → false ❌
// Padahal seharusnya true!
```

---

### Versi 2 — Silent Bug pada Loop

```javascript
const maxLength = Math.max(indexesA.length, indexesB.length)
const minLength = Math.min(indexesA.length, indexesB.length)

for (let i = 0; i < maxLength; i++) {    // i berjalan sampai maxLength
  for (let j = 0; j < minLength; j++) {  // j berjalan sampai minLength
    const diff = Math.abs(indexesA[i] - indexesB[j])  // ⚠️ indexesA[i] bisa undefined!
  }
}
```

Jika `indexesB` lebih panjang dari `indexesA`, maka `i` akan melebihi panjang `indexesA`, sehingga `indexesA[i]` menjadi `undefined`.

```javascript
Math.abs(undefined - 5) // → NaN, bukan error
NaN === 4               // → false
```

Tidak crash, tapi **diam-diam menghasilkan hasil yang salah** — inilah yang disebut **silent bug**.

**Kenapa test cases tetap lolos?**

Kebetulan pada semua test case yang diberikan, `indexesA` tidak pernah lebih pendek dari `indexesB`, sehingga bug tidak terpicu:

| Input | `indexesA` | `indexesB` | Bug Terpicu? |
|-------|-----------|-----------|--------------|
| `'lane borrowed'` | `[1, 9]` | `[5]` | ❌ Tidak |
| `'i am sick'` | `[3]` | `[]` | ❌ Tidak |
| `'you are boring'` | `[4, 11]` | `[8]` | ❌ Tidak |
| `'barbarian'` | `[1, 4, 7]` | `[0, 3]` | ❌ Tidak |
| `'bacon and meat'` | `[1, 7]` | `[0]` | ❌ Tidak |

Bug baru akan muncul jika jumlah `b` lebih banyak dari `a` di dalam string.

---

## 📊 Kesimpulan

| Aspek | Versi 1 | Versi 2 |
|-------|---------|---------|
| Ambil semua index | ❌ Hanya index pertama | ✅ Semua index |
| Struktur loop | ❌ Tidak ada loop | ⚠️ Ada, tapi bug |
| Kondisi `diff === 4` | ✅ Benar | ✅ Benar |
| Hasil test cases | ❌ Bisa gagal | ⚠️ Lolos, tapi ada silent bug |

Kode Versi 2 sudah menghasilkan output yang benar untuk test cases yang ada, tapi punya silent bug yang bisa muncul pada input tertentu. Di Part 3 kita akan refactor bertahap.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 1: Soal & Pemahaman Kriteria](01-soal-dan-pemahaman-kriteria.md)**
- **🔧 [Lanjut ke Part 3: Refactoring Step-by-Step →](03-refactoring-step-by-step.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
