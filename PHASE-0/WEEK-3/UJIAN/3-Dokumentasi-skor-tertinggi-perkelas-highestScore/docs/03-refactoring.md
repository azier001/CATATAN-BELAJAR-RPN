# 📚 highestScore - PART 3: REFACTORING

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        ✨ PART 3: REFACTORING ✨                                          ║
║                                                                          ║
║           Dari Kode Eksplorasi ke Kode yang Lebih Bersih                 ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 🔄 Step 1 | 🔄 Step 2 | 🔄 Step 3 | ✅ Kode Final | 🧪 Test Cases |
|:---------:|:---------:|:---------:|:------------:|:-------------:|
| [Jump](#-step-1--hapus-wrapper-bytype) | [Jump](#-step-2--hilangkan-pengulangan-summarycurrent) | [Jump](#-step-3--hapus-variabel-tidak-terpakai) | [Jump](#-kode-refactoring-final) | [Jump](#-test-cases) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami proses refactoring step-by-step
- ✅ Tahu cara menghapus wrapper yang tidak diperlukan
- ✅ Tahu cara menghindari pengulangan akses variabel
- ✅ Siap untuk melihat pendekatan yang lebih modern di Part 4

---

## 🔄 Step 1 — Hapus Wrapper `byType`

Pada kode eksplorasi, hasil grouping dibungkus di dalam `{ byType: {} }`. Wrapper ini tidak diperlukan karena menambah panjang akses data tanpa manfaat.

```javascript
// ❌ SEBELUM — ada wrapper byType
const summary = students.reduce((acc, current) => {
  if (!acc.byType[current.class]) {
    acc.byType[current.class] = []
  }
  acc.byType[current.class].push(current)
  return acc
}, { byType: {} })

// Akses data harus melalui summary.byType[current]
const maxScore = Math.max(...summary.byType[current].map(s => s.score))
const winner = summary.byType[current].find(s => s.score === maxScore)
```

```javascript
// ✅ SESUDAH — tanpa wrapper
const summary = students.reduce((acc, current) => {
  if (!acc[current.class]) {
    acc[current.class] = []
  }
  acc[current.class].push(current)
  return acc
}, {})

// Akses data langsung dari summary
const maxScore = Math.max(...summary[current].map(s => s.score))
const winner = summary[current].find(s => s.score === maxScore)
```

> **Catatan:** Logika kode **100% sama** — hanya struktur accumulator yang disederhanakan.

---

## 🔄 Step 2 — Hilangkan Pengulangan `summary[current]`

Setelah Step 1, akses `summary[current]` masih ditulis dua kali. Ini bisa disederhanakan dengan menyimpannya ke variabel sementara.

```javascript
// ❌ SEBELUM — summary[current] ditulis dua kali
const maxScore = Math.max(...summary[current].map(s => s.score))
const winner = summary[current].find(s => s.score === maxScore)
```

```javascript
// ✅ SESUDAH — simpan ke variabel classStudents
const classStudents = summary[current]
const maxScore = Math.max(...classStudents.map(s => s.score))
const winner = classStudents.find(s => s.score === maxScore)
```

Nama `classStudents` dipilih karena isinya memang array siswa dari satu kelas tertentu — langsung menjelaskan isinya.

---

## 🔄 Step 3 — Hapus Variabel Tidak Terpakai

Pada kode eksplorasi awal terdapat `let highScore = -Infinity` yang tidak pernah digunakan. Variabel mati seperti ini perlu dihapus agar kode lebih bersih.

```javascript
// ❌ SEBELUM — ada variabel yang tidak terpakai
const highestScore = (students) => {
  let highScore = -Infinity  // ← tidak pernah digunakan!

  const summary = students.reduce(...)
  ...
}
```

```javascript
// ✅ SESUDAH — variabel tidak terpakai dihapus
const highestScore = (students) => {
  const summary = students.reduce(...)
  ...
}
```

---

## 🔄 Perbandingan Sebelum dan Sesudah

```javascript
// ❌ SEBELUM — kode eksplorasi
const highestScore = (students) => {
  let highScore = -Infinity

  const summary = students.reduce((acc, current) => {
    if (!acc.byType[current.class]) {
      acc.byType[current.class] = []
    }
    acc.byType[current.class].push(current)
    return acc
  }, { byType: {} })

  const result = Object.keys(summary.byType).reduce((acc, current) => {
    const maxScore = Math.max(...summary.byType[current].map(s => s.score))
    const winner = summary.byType[current].find(s => s.score === maxScore)
    acc[current] = { name: winner.name, score: winner.score }
    return acc
  }, {})

  return result
}
```

```javascript
// ✅ SESUDAH — kode refactoring
const highestScore = (students) => {
  const summary = students.reduce((acc, current) => {
    if (!acc[current.class]) {
      acc[current.class] = []
    }
    acc[current.class].push(current)
    return acc
  }, {})

  const result = Object.keys(summary).reduce((acc, current) => {
    const classStudents = summary[current]
    const maxScore = Math.max(...classStudents.map(s => s.score))
    const winner = classStudents.find(s => s.score === maxScore)
    acc[current] = { name: winner.name, score: winner.score }
    return acc
  }, {})

  return result
}
```

---

## ✅ Kode Refactoring Final

```javascript
const highestScore = (students) => {
  const summary = students.reduce((acc, current) => {
    if (!acc[current.class]) {
      acc[current.class] = []
    }
    acc[current.class].push(current)
    return acc
  }, {})

  const result = Object.keys(summary).reduce((acc, current) => {
    const classStudents = summary[current]
    const maxScore = Math.max(...classStudents.map(s => s.score))
    const winner = classStudents.find(s => s.score === maxScore)
    acc[current] = { name: winner.name, score: winner.score }
    return acc
  }, {})

  return result
}
```

---

## 🧪 Test Cases

```javascript
// Edge case — array kosong
console.log(highestScore([]));
// → {}
```

```javascript
// Normal case 1 — dua kelas
console.log(highestScore([
  { name: 'Dimitri', score: 90, class: 'foxes' },
  { name: 'Alexei', score: 85, class: 'wolves' },
  { name: 'Sergei', score: 74, class: 'foxes' },
  { name: 'Anastasia', score: 78, class: 'wolves' }
]));
// → { foxes: { name: 'Dimitri', score: 90 }, wolves: { name: 'Alexei', score: 85 } }
```

```javascript
// Normal case 2 — tiga kelas
console.log(highestScore([
  { name: 'Alexander', score: 100, class: 'foxes' },
  { name: 'Alisa', score: 76, class: 'wolves' },
  { name: 'Vladimir', score: 92, class: 'foxes' },
  { name: 'Albert', score: 71, class: 'wolves' },
  { name: 'Viktor', score: 80, class: 'tigers' }
]));
// → { foxes: { name: 'Alexander', score: 100 }, wolves: { name: 'Alisa', score: 76 }, tigers: { name: 'Viktor', score: 80 } }
```

---

## 📊 Ringkasan Perubahan

| Aspek | Sebelum | Sesudah |
|-------|---------|---------|
| Wrapper `byType` | Ada | Dihapus |
| Akses data grouping | `summary.byType[current]` | `summary[current]` |
| Pengulangan akses | `summary[current]` × 2 | `classStudents` (1x simpan) |
| Variabel tidak terpakai | `let highScore = -Infinity` | Dihapus |
| Logika | Sama | Sama |
| Hasil | Sama | Sama |

---

## 💡 Insight Penting

> **Kenapa menghapus wrapper yang tidak perlu?**
> Setiap layer tambahan dalam struktur data menambah kompleksitas akses. Jika `byType` tidak membawa manfaat apapun selain sebagai pembungkus, menghapusnya membuat kode lebih langsung dan mudah dibaca.

> **Kenapa menyimpan `summary[current]` ke variabel?**
> Selain mengurangi pengetikan, ini juga meningkatkan readability — nama `classStudents` langsung menjelaskan isinya. Jika di masa depan perlu diubah, cukup ubah di satu tempat saja.

> **Kenapa hapus variabel tidak terpakai?**
> Variabel mati membuat pembaca kode bertanya-tanya — "untuk apa variabel ini?". Menghapusnya mengurangi noise dan membuat intent kode lebih jelas.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 2: Kode Eksplorasi & Review](02-kode-eksplorasi.md)**
- **📖 [Lanjut ke Part 4: Versi for...of →](04-versi-forOf.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
