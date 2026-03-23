# 📚 graduates - PART 3: REFACTORING — `reduce`

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        ✨ PART 3: REFACTORING — reduce ✨                                ║
║                                                                          ║
║           Dari Imperative for...of ke Functional reduce                  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-green)

---

## 🧭 Quick Jump

| 🔄 Perubahan | 🔄 Perbandingan | ✅ Kode Refactoring | 🧪 Test Cases |
|:-----------:|:--------------:|:------------------:|:-------------:|
| [Jump](#-apa-yang-berubah) | [Jump](#-perbandingan-sebelum-dan-sesudah) | [Jump](#-kode-refactoring-final) | [Jump](#-test-cases) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja `reduce` untuk membangun object dari array
- ✅ Tahu perbedaan gaya imperative vs functional
- ✅ Memahami kenapa `return acc` wajib ada di dalam `reduce`
- ✅ Siap untuk melihat berbagai pendekatan alternatif di Part 4–7

---

## 🔄 Apa yang Berubah

Refactoring ini hanya mengubah **gaya penulisan** — dari imperative `for...of` ke functional `reduce`. Logika dan hasil output **100% sama**.

| Aspek | Sebelum | Sesudah |
|-------|---------|---------|
| Deklarasi fungsi | `function graduates` | `const graduates = () =>` |
| Iterasi | `for...of` loop | `reduce` |
| Variabel result | `const result = {}` lalu `return result` | Langsung `return students.reduce(...)` |
| Logika | Sama | Sama |
| Hasil | Sama | Sama |

---

## 🔄 Perbandingan Sebelum dan Sesudah

```javascript
// ❌ SEBELUM — imperative style
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

```javascript
// ✅ SESUDAH — functional style
const graduates = (students) => {
  const minGrade = 75

  return students.reduce((acc, { name, score, class: className }) => {
    if (!acc[className]) acc[className] = []

    if (score > minGrade) acc[className].push({ name, score })

    return acc
  }, {})
}
```

> **Catatan:** Logika kode **100% sama** — hanya gaya penulisannya yang berubah. Tidak ada perubahan pada cara kerja atau hasil fungsi.

---

### Penjelasan Perubahan Per Bagian

**1. `function` → Arrow Function**
```javascript
// Sebelum
function graduates(students) { ... }

// Sesudah
const graduates = (students) => { ... }
```
Arrow function adalah gaya modern JavaScript yang lebih ringkas.

---

**2. `for...of` → `reduce`**
```javascript
// Sebelum — loop manual, result diisi satu per satu
for (const { name, score, class: className } of students) {
  if (!result[className]) result[className] = []
  if (score > minGrade) result[className].push({ name, score })
}

// Sesudah — reduce membangun object secara deklaratif
students.reduce((acc, { name, score, class: className }) => {
  if (!acc[className]) acc[className] = []
  if (score > minGrade) acc[className].push({ name, score })
  return acc
}, {})
```
`reduce` menerima dua argumen: **callback** dan **initial value** `{}`. `acc` adalah object yang sedang dibangun — dimulai dari `{}` dan terus diisi setiap iterasi.

---

**3. `return result` → Langsung `return students.reduce(...)`**
```javascript
// Sebelum — butuh variabel perantara
const result = {}
// ... isi result di dalam loop ...
return result

// Sesudah — langsung return hasil reduce
return students.reduce(...)
```
Tidak perlu variabel perantara `result` karena `reduce` langsung mengembalikan nilai akhir `acc`.

---

**4. Wajib `return acc` di Dalam `reduce`**
```javascript
return students.reduce((acc, { name, score, class: className }) => {
  if (!acc[className]) acc[className] = []
  if (score > minGrade) acc[className].push({ name, score })
  return acc  // ← WAJIB ada
}, {})
```
`reduce` meneruskan nilai `acc` antar iterasi melalui return value callback. Jika `return acc` tidak ada, nilai `acc` di iterasi berikutnya menjadi `undefined` dan program crash.

---

## ✅ Kode Refactoring Final

```javascript
const graduates = (students) => {
  const minGrade = 75

  return students.reduce((acc, { name, score, class: className }) => {
    if (!acc[className]) acc[className] = []

    if (score > minGrade) acc[className].push({ name, score })

    return acc
  }, {})
}
```

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

## 💡 Insight Penting

> **Apa bedanya `reduce` dengan `for...of` di sini?**
> Secara hasil dan kompleksitas keduanya identik — sama-sama O(n) dengan 1 kali loop. Perbedaannya ada di gaya: `for...of` bersifat *imperative* (kamu tulis langkah per langkah), sedangkan `reduce` bersifat *functional* (kamu deklarasikan transformasinya). `reduce` lebih ringkas tapi butuh pemahaman tentang `acc` dan `return acc`.

> **Kenapa `return acc` wajib di `reduce` tapi tidak di `for...of`?**
> Karena `reduce` meneruskan nilai `acc` antar iterasi melalui return value callback. Jika tidak di-return, nilai `acc` di iterasi berikutnya menjadi `undefined` dan program crash. Di `for...of`, `result` adalah variabel yang hidup di luar loop sehingga tidak perlu di-return setiap iterasi.

> **Kapan pilih `for...of`, kapan pilih `reduce`?**
> Pilih `for...of` jika kamu ingin kode yang paling mudah dibaca semua kalangan termasuk pemula. Pilih `reduce` jika kamu ingin kode yang lebih ringkas dan bergaya functional. Untuk performa, keduanya setara.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 2: Kode Original & Review](02-kode-original-dan-review.md)**
- **📖 [Lanjut ke Part 4: Ringkasan Algoritma — for...of Imperative →](04-ringkasan-algoritma-for-of-imperative.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
