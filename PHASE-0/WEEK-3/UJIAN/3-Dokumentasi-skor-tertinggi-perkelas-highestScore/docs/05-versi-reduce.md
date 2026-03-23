# 📚 highestScore - PART 5: VERSI `reduce` ELEGANT

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        ✨ PART 5: VERSI reduce ELEGANT ✨                                 ║
║                                                                          ║
║           Solusi Fungsional yang Singkat dan Idiomatik                   ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔁 reduce | 📦 Destructuring | 🔗 Perbandingan | ✅ Kode Final | 🧪 Test Cases |
|:---------:|:----------------:|:--------------:|:------------:|:-------------:|
| [Jump](#-mengenal-reduce-untuk-object) | [Jump](#-destructuring-di-parameter-reduce) | [Jump](#-perbandingan-dengan-versi-forof) | [Jump](#-kode-final) | [Jump](#-test-cases) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja `reduce` untuk menghasilkan object (bukan angka)
- ✅ Memahami destructuring di parameter callback `reduce`
- ✅ Tahu perbedaan versi `for...of` vs versi `reduce`
- ✅ Bisa menulis solusi fungsional yang singkat dan idiomatik

---

## 🔁 Mengenal `reduce` untuk Object

Kebanyakan contoh `reduce` menghasilkan angka. Tapi `reduce` juga bisa menghasilkan **object** — cukup ubah `initialValue`-nya menjadi `{}`.

```javascript
// reduce menghasilkan angka
[1, 2, 3].reduce((acc, num) => acc + num, 0)
// → 6

// reduce menghasilkan object
[
  { name: 'Dimitri', class: 'foxes' },
  { name: 'Alexei', class: 'wolves' }
].reduce((acc, student) => {
  acc[student.class] = student.name
  return acc
}, {})
// → { foxes: 'Dimitri', wolves: 'Alexei' }
```

Pola umumnya:
```javascript
array.reduce((acc, current) => {
  // modifikasi acc berdasarkan current
  return acc
}, {})  // ← initialValue berupa object kosong
```

---

## 📦 Destructuring di Parameter `reduce`

Sama seperti `for...of`, destructuring bisa dilakukan langsung di parameter callback `reduce`.

```javascript
// ❌ Tanpa destructuring — akses properti manual
students.reduce((result, student) => {
  const name = student.name
  const score = student.score
  const className = student.class
  // ...
  return result
}, {})

// ✅ Dengan destructuring di parameter
students.reduce((result, { name, score, class: className }) => {
  // name, score, className langsung tersedia
  return result
}, {})
```

`class` tetap harus di-rename menjadi `className` karena `class` adalah reserved word — sama seperti yang sudah dibahas di Part 4.

---

## ✅ Kode Final

```javascript
const highestScore = (students) => {
  return students.reduce((result, { name, score, class: className }) => {
    if (!result[className] || score > result[className].score) {
      result[className] = { name, score }
    }
    return result
  }, {})
}
```

**Cara membacanya:**
1. `students.reduce(...)` → loop semua siswa, bangun object `result` secara bertahap
2. `{ name, score, class: className }` → destructuring langsung di parameter — ambil `name`, `score`, dan `class` (rename jadi `className`)
3. Jika kelas belum ada di `result` **atau** skor lebih tinggi → simpan siswa ini
4. `return result` → kembalikan accumulator yang sudah diperbarui
5. `return students.reduce(...)` → return langsung hasil `reduce` tanpa variabel perantara

---

## 🔄 Evolusi Kode: Dari Eksplorasi ke Elegant

```javascript
// Versi 1 — Kode Eksplorasi (2 reduce)
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
// Versi 2 — for...of (1 pass, linear)
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

```javascript
// Versi 3 — reduce elegant (1 pass, fungsional)
const highestScore = (students) => {
  return students.reduce((result, { name, score, class: className }) => {
    if (!result[className] || score > result[className].score) {
      result[className] = { name, score }
    }
    return result
  }, {})
}
```

---

## 🔄 Perbandingan dengan Versi `for...of`

| Aspek | Versi `for...of` | Versi `reduce` |
|-------|-----------------|----------------|
| Gaya | Imperatif | Fungsional |
| Jumlah baris | 7 baris | 5 baris |
| Variabel `result` | Eksplisit (`const result = {}`) | Implicit (initial value `{}`) |
| `return` | Di akhir fungsi | Di dalam `reduce` + return langsung |
| Readability | Lebih familiar | Lebih idiomatik |
| Kompleksitas waktu | O(n) | O(n) |
| Kompleksitas memori | O(1) | O(1) |

> Keduanya menghasilkan output yang **identik** — pilihan antara keduanya murni soal gaya dan preferensi.

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

## 💡 Insight Penting

> **Kenapa `reduce` dianggap lebih "idiomatik" JavaScript?**
> Karena `reduce` adalah salah satu pilar **functional programming** di JavaScript — gaya pemrograman yang menghindari mutation dan side effects. `reduce` mengekspresikan transformasi data secara deklaratif: "dari array ini, hasilkan object ini." Banyak codebase modern dan library JavaScript menggunakan pola ini secara luas.

> **Apakah versi `reduce` selalu lebih baik dari `for...of`?**
> Tidak selalu. `for...of` lebih mudah di-debug karena alurnya linear dan eksplisit. `reduce` lebih singkat tapi membutuhkan pemahaman tentang accumulator. Untuk tim yang baru mengenal functional programming, `for...of` sering lebih aman. Pilih berdasarkan konteks dan kemampuan tim.

> **Kenapa `return result` wajib ada di dalam callback `reduce`?**
> Karena `reduce` menggunakan return value dari setiap iterasi sebagai `acc` di iterasi berikutnya. Jika `return result` dihilangkan, `acc` akan menjadi `undefined` di iterasi selanjutnya dan kode akan error.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 4: Versi for...of](04-versi-forOf.md)**
- **📖 [Lanjut ke Part 6: Ringkasan Algoritma for...of →](06-ringkasan-algoritma-forOf.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
