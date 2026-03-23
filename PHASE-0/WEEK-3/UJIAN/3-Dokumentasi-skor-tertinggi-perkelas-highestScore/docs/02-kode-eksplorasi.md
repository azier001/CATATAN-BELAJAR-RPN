# 📚 highestScore - PART 2: KODE EKSPLORASI & REVIEW

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🔍 PART 2: KODE EKSPLORASI & REVIEW 🔍                       ║
║                                                                          ║
║           Analisis Kode Eksplorasi — Apa yang Sudah Baik                 ║
║           dan Apa yang Bisa Ditingkatkan                                 ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📄 Kode Eksplorasi | ✅ Yang Sudah Baik | ⚠️ Yang Bisa Ditingkatkan | 🧪 Test Cases |
|:-----------------:|:-----------------:|:------------------------:|:-------------:|
| [Jump](#-kode-eksplorasi) | [Jump](#-yang-sudah-baik) | [Jump](#-yang-bisa-ditingkatkan) | [Jump](#-test-cases) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami logika kode eksplorasi secara keseluruhan
- ✅ Tahu bagian mana yang sudah benar dan baik
- ✅ Tahu bagian mana yang bisa ditingkatkan
- ✅ Siap untuk melihat proses refactoring di Part 3

---

## 📄 Kode Eksplorasi

Ini adalah kode pertama yang ditulis saat mengeksplorasi solusi — menggunakan pendekatan **grouping dulu, baru seleksi**.

```javascript
const highestScore = (students) => {
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

---

## ✅ Yang Sudah Baik

### 1. Pendekatan Grouping yang Jelas

```javascript
const summary = students.reduce((acc, current) => {
  if (!acc.byType[current.class]) {
    acc.byType[current.class] = []
  }
  acc.byType[current.class].push(current)
  return acc
}, { byType: {} })
```

Proses grouping dipisahkan dari proses seleksi — setiap tahap punya tanggung jawab sendiri. Ini membuat alur berpikir mudah diikuti: **pertama kelompokkan, lalu pilih pemenang**.

### 2. Pengecekan Kelas Baru

```javascript
if (!acc.byType[current.class]) {
  acc.byType[current.class] = []
}
```

Sebelum `push`, dicek dulu apakah kelas tersebut sudah ada di accumulator. Jika belum, inisialisasi dengan array kosong terlebih dahulu. Tanpa ini, `push` akan error karena tidak bisa push ke `undefined`.

### 3. Seleksi Pemenang dengan Math.max + find

```javascript
const maxScore = Math.max(...summary.byType[current].map(s => s.score))
const winner = summary.byType[current].find(s => s.score === maxScore)
```

Kombinasi `Math.max` + `.find()` sudah benar untuk menemukan object siswa dengan skor tertinggi. `Math.max` mencari nilai tertinggi, lalu `.find()` mengambil object-nya.

### 4. Output Hanya name dan score

```javascript
acc[current] = { name: winner.name, score: winner.score }
```

Properti `class` tidak ikut disimpan — sudah sesuai dengan expected output yang hanya membutuhkan `name` dan `score`.

---

## ⚠️ Yang Bisa Ditingkatkan

### 1. Wrapper `byType` Tidak Diperlukan

```javascript
// ❌ Ada wrapper byType yang tidak perlu
}, { byType: {} })

// Setiap akses data harus melalui summary.byType[current]
const maxScore = Math.max(...summary.byType[current].map(s => s.score))
const winner = summary.byType[current].find(s => s.score === maxScore)
```

Wrapper `byType` membuat akses data lebih panjang. Tanpanya, hasil grouping bisa langsung berupa object `{ foxes: [...], wolves: [...] }` tanpa layer tambahan.

```javascript
// ✅ Tanpa wrapper — lebih simpel
}, {})

// Akses data lebih pendek
const maxScore = Math.max(...summary[current].map(s => s.score))
const winner = summary[current].find(s => s.score === maxScore)
```

### 2. Variabel summary[current] Diulang Dua Kali

```javascript
// ❌ summary[current] ditulis dua kali
const maxScore = Math.max(...summary[current].map(s => s.score))
const winner = summary[current].find(s => s.score === maxScore)
```

Akses `summary[current]` yang berulang bisa disederhanakan dengan menyimpannya ke variabel sementara.

```javascript
// ✅ Simpan ke variabel — lebih bersih
const classStudents = summary[current]
const maxScore = Math.max(...classStudents.map(s => s.score))
const winner = classStudents.find(s => s.score === maxScore)
```

### 3. Dua reduce Untuk Satu Tujuan

Kode ini menggunakan **dua kali `reduce`** — satu untuk grouping, satu untuk seleksi. Ini bisa disederhanakan menjadi satu pass saja, seperti yang akan kita lihat di Part 4 dan Part 5.

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

## 📊 Ringkasan Review

| Aspek | Status | Catatan |
|-------|--------|---------|
| Logika & Kebenaran | ✅ Benar | Semua test case lulus |
| Pengecekan kelas baru | ✅ Baik | Inisialisasi array sebelum push |
| Seleksi pemenang | ✅ Baik | `Math.max` + `.find()` sudah tepat |
| Output shape | ✅ Baik | Hanya `name` dan `score` yang disimpan |
| Wrapper `byType` | ⚠️ Bisa dihapus | Menambah panjang akses data tanpa manfaat |
| Pengulangan `summary[current]` | ⚠️ Bisa disederhanakan | Simpan ke variabel sementara |
| Dua kali `reduce` | ⚠️ Bisa disederhanakan | Bisa dijadikan satu pass |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 1: Soal & Analisis](01-soal-dan-analisis.md)**
- **📖 [Lanjut ke Part 3: Refactoring →](03-refactoring.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
