# 📚 graduates - PART 2: KODE ORIGINAL & REVIEW

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🔍 PART 2: KODE ORIGINAL & REVIEW 🔍                         ║
║                                                                          ║
║           Analisis Kode Original — Apa yang Sudah Baik                   ║
║           dan Apa yang Bisa Ditingkatkan                                 ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📄 Kode Original | ✅ Yang Sudah Baik | ⚠️ Yang Bisa Ditingkatkan | 🧪 Test Cases |
|:----------------:|:-----------------:|:------------------------:|:-------------:|
| [Jump](#-kode-original) | [Jump](#-yang-sudah-baik) | [Jump](#-yang-bisa-ditingkatkan) | [Jump](#-test-cases) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami logika kode original secara keseluruhan
- ✅ Tahu bagian mana yang sudah benar dan baik
- ✅ Tahu bagian mana yang bisa ditingkatkan
- ✅ Siap untuk melihat proses refactoring di Part 3

---

## 📄 Kode Original

```javascript
function graduates(students) {
  const result = {}
  const minGrade = 75

  for (const { name, score, class: className } of students) {
    if (!result[className]) result[className] = []

    if (score > minGrade) {
      result[className].push({ name, score })
    }
  }

  return result
}
```

---

## ✅ Yang Sudah Baik

### 1. Konstanta `minGrade` untuk Batas Kelulusan

```javascript
const minGrade = 75
```

Batas kelulusan tidak ditulis langsung (hardcode) di dalam kondisi, melainkan disimpan sebagai konstanta bernama. Ini praktik yang baik — jika batas kelulusan berubah, cukup ubah di satu tempat saja.

### 2. Destructuring Rename untuk Reserved Keyword

```javascript
for (const { name, score, class: className } of students) {
```

`class` adalah reserved keyword di JavaScript. Kode original sudah menangani ini dengan benar menggunakan destructuring rename `class: className`. Tanpa rename ini, kode akan menghasilkan `SyntaxError`.

### 3. Lazy Initialization — Inisialisasi Array di Tempat yang Tepat

```javascript
if (!result[className]) result[className] = []

if (score > minGrade) {
  result[className].push({ name, score })
}
```

Inisialisasi `result[className] = []` dilakukan **terpisah** dari kondisi `score > minGrade`. Ini sangat penting — memastikan semua class tetap muncul di output meski tidak ada student yang lulus di class tersebut.

### 4. Push Hanya `{ name, score }` — Tanpa `class`

```javascript
result[className].push({ name, score })
```

Sesuai format output yang diminta soal. Property `class` tidak ikut di-push karena sudah menjadi key di object result.

### 5. Return di Luar Loop

```javascript
  return result
}
```

`return result` ada di luar loop — sudah benar. Jika return ada di dalam loop, fungsi akan berhenti di iterasi pertama dan tidak memproses semua student.

---

## ⚠️ Yang Bisa Ditingkatkan

### 1. Gaya Penulisan — Imperative vs Functional

```javascript
// Kode original — imperative style
for (const { name, score, class: className } of students) {
  if (!result[className]) result[className] = []
  if (score > minGrade) result[className].push({ name, score })
}
```

Kode original menggunakan gaya **imperative** — mendeskripsikan langkah-langkah secara eksplisit. Ini mudah dibaca dan dipahami pemula, tapi JavaScript modern lebih sering menggunakan gaya **functional** dengan method seperti `reduce`.

```javascript
// Versi functional — lebih ringkas
return students.reduce((acc, { name, score, class: className }) => {
  if (!acc[className]) acc[className] = []
  if (score > minGrade) acc[className].push({ name, score })
  return acc
}, {})
```

Kita akan eksplorasi ini di **Part 3**.

---

## 🧪 Test Cases

```javascript
// Edge case — array kosong
console.log(graduates([]));
// → {}
```

```javascript
// Normal case 1 — dua class, satu student tidak lulus
console.log(graduates([
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves'  },
  { name: 'Sergei',    score: 74, class: 'foxes'   },
  { name: 'Anastasia', score: 78, class: 'wolves'  }
]));
// → {
//     foxes:  [{ name: 'Dimitri', score: 90 }],
//     wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
//   }
```

```javascript
// Normal case 2 — tiga class, beberapa student tidak lulus
console.log(graduates([
  { name: 'Alexander', score: 100, class: 'foxes'  },
  { name: 'Alisa',     score: 76,  class: 'wolves' },
  { name: 'Vladimir',  score: 92,  class: 'foxes'  },
  { name: 'Albert',    score: 71,  class: 'wolves' },
  { name: 'Viktor',    score: 80,  class: 'tigers' }
]));
// → {
//     foxes:  [{ name: 'Alexander', score: 100 }, { name: 'Vladimir', score: 92 }],
//     wolves: [{ name: 'Alisa', score: 76 }],
//     tigers: [{ name: 'Viktor', score: 80 }]
//   }
```

---

## 📊 Ringkasan Review

| Aspek | Status | Catatan |
|-------|--------|---------|
| Logika & Kebenaran | ✅ Benar | Semua test case lulus |
| Konstanta `minGrade` | ✅ Baik | Batas kelulusan mudah diubah di satu tempat |
| Destructuring Rename | ✅ Baik | `class: className` menghindari SyntaxError |
| Lazy Initialization | ✅ Baik | Inisialisasi array terpisah dari kondisi score |
| Format Output | ✅ Baik | Hanya push `{ name, score }` tanpa `class` |
| Gaya Penulisan | ⚠️ Bisa ditingkatkan | Bisa direfactor ke functional style dengan `reduce` |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 1: Soal & Analisis](01-soal-dan-analisis.md)**
- **📖 [Lanjut ke Part 3: Refactoring — reduce →](03-refactoring-reduce.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
