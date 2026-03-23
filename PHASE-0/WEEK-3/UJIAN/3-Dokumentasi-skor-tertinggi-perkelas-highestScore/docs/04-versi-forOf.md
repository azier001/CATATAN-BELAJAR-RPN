# 📚 highestScore - PART 4: VERSI `for...of` + DESTRUCTURING

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        ✨ PART 4: VERSI for...of + DESTRUCTURING ✨                      ║
║                                                                          ║
║           Solusi Linear yang Mudah Dibaca dengan Sintaks Modern          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔄 for...of | 📦 Destructuring | 🔗 Reserved Word | ✅ Kode Final | 🧪 Test Cases |
|:-----------:|:----------------:|:----------------:|:------------:|:-------------:|
| [Jump](#-mengenal-forof) | [Jump](#-mengenal-destructuring) | [Jump](#-reserved-word-class) | [Jump](#-kode-final) | [Jump](#-test-cases) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja `for...of` dibanding `for` loop biasa
- ✅ Memahami cara kerja destructuring pada object
- ✅ Tahu kenapa `class` harus di-rename saat destructuring
- ✅ Bisa menulis solusi linear yang bersih dan mudah dibaca

---

## 🔄 Mengenal `for...of`

`for...of` adalah cara modern untuk loop setiap item dalam array tanpa perlu index.

```javascript
const students = [
  { name: 'Dimitri', score: 90, class: 'foxes' },
  { name: 'Alexei', score: 85, class: 'wolves' }
]

// ❌ for loop biasa — perlu index yang tidak digunakan
for (let i = 0; i < students.length; i++) {
  const student = students[i]
  console.log(student.name)
}

// ✅ for...of — langsung akses item
for (const student of students) {
  console.log(student.name)
}
```

| | `for` biasa | `for...of` |
|---|---|---|
| Perlu index | Ya (`i`) | Tidak |
| Akses item | `students[i]` | Langsung (`student`) |
| Mendukung `break` | Ya | Ya |
| Mendukung `continue` | Ya | Ya |
| Readability | Lebih verbose | Lebih bersih |

---

## 📦 Mengenal Destructuring

Destructuring adalah sintaks untuk mengekstrak properti dari object langsung ke variabel.

```javascript
const student = { name: 'Dimitri', score: 90, class: 'foxes' }

// ❌ Tanpa destructuring — akses properti satu per satu
const name = student.name
const score = student.score

// ✅ Dengan destructuring — ekstrak sekaligus
const { name, score } = student
```

Destructuring juga bisa dilakukan langsung di parameter `for...of`:

```javascript
// ❌ Tanpa destructuring di parameter
for (const student of students) {
  const name = student.name
  const score = student.score
  const className = student.class
}

// ✅ Dengan destructuring di parameter
for (const { name, score, class: className } of students) {
  // name, score, className langsung tersedia
}
```

---

## 🔑 Reserved Word `class`

`class` adalah **reserved word** di JavaScript — digunakan untuk mendefinisikan class dalam OOP (Object-Oriented Programming).

```javascript
// JavaScript menggunakan 'class' untuk ini:
class Animal {
  constructor(name) {
    this.name = name
  }
}
```

Karena itu, `class` tidak bisa digunakan langsung sebagai nama variabel:

```javascript
// ❌ ERROR — class adalah reserved word
const { name, score, class } = student
// SyntaxError: Unexpected token 'class'
```

Solusinya adalah **rename saat destructuring** menggunakan sintaks `properti: namaVariabelBaru`:

```javascript
// ✅ Rename class menjadi className
const { name, score, class: className } = student
// className sekarang berisi nilai dari student.class
```

---

## ✅ Kode Final

```javascript
const highestScore = (students) => {
  const result = {}

  for (const { name, score, class: className } of students) {
    if (!result[className] || score > result[className].score) {
      result[className] = { name, score }
    }
  }

  return result
}
```

**Cara membacanya:**
1. Buat object kosong `result` sebagai wadah output
2. Loop setiap siswa — destructuring langsung ambil `name`, `score`, dan `class` (di-rename jadi `className`)
3. Jika kelas belum ada di `result` **atau** skor siswa lebih tinggi dari yang tersimpan → simpan siswa ini
4. Return `result`

### Logika Kondisi

```javascript
if (!result[className] || score > result[className].score)
```

| Kondisi | Penjelasan |
|---------|------------|
| `!result[className]` | Kelas belum ada di result → langsung simpan siswa pertama |
| `score > result[className].score` | Skor lebih tinggi dari yang tersimpan → gantikan |

Dua kondisi digabung dengan `\|\|` (OR) — cukup salah satu terpenuhi untuk menyimpan siswa.

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

## 📊 Perbandingan dengan Kode Eksplorasi

| Aspek | Kode Eksplorasi | Versi for...of |
|-------|----------------|----------------|
| Jumlah pass | 2x (group + seleksi) | 1x (langsung seleksi) |
| Loop | 2x `reduce` | 1x `for...of` |
| Destructuring | Tidak ada | Ya — di parameter loop |
| Memori | O(n) — array grouping | O(1) — hanya result |
| Readability | Butuh waktu | Linear, mudah dibaca |

---

## 💡 Insight Penting

> **Kenapa `for...of` lebih cocok di sini dibanding `forEach`?**
> Keduanya sama-sama bisa digunakan. Tapi `for...of` mendukung `break` dan `continue` jika suatu saat dibutuhkan. Selain itu, `for...of` lebih familiar bagi programmer dari bahasa lain dan terasa lebih seperti loop tradisional yang mudah dibaca.

> **Kenapa tidak perlu grouping dulu seperti kode eksplorasi?**
> Karena kita tidak perlu menyimpan semua siswa per kelas — kita hanya butuh **satu pemenang** per kelas. Cukup bandingkan langsung saat loop: jika skor lebih tinggi, gantikan. Ini lebih efisien karena hanya butuh satu pass dan tidak membuat array grouping di memori.

> **Kenapa memori O(1) padahal ada object `result`?**
> Object `result` hanya menyimpan **satu siswa per kelas** — jumlahnya sebanding dengan jumlah kelas, bukan jumlah siswa. Berbeda dengan grouping yang menyimpan semua siswa. Secara teknis O(k) di mana k = jumlah kelas, tapi dalam praktik dianggap O(1) karena tidak bergantung pada ukuran input.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 3: Refactoring](03-refactoring.md)**
- **📖 [Lanjut ke Part 5: Versi reduce →](05-versi-reduce.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
