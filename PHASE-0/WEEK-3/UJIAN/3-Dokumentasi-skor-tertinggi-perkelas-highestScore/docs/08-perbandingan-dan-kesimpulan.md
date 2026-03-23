# 📚 highestScore - PART 8: PERBANDINGAN & KESIMPULAN

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         🏁 PART 8: PERBANDINGAN & KESIMPULAN 🏁                         ║
║                                                                          ║
║           Semua Solusi Dibandingkan — Mana yang Paling Tepat?            ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 📊 Perbandingan | 🔍 Kode Semua Solusi | 🎮 Decision Guide | 💡 Kesimpulan |
|:--------------:|:-------------------:|:-----------------:|:-------------:|
| [Jump](#-perbandingan-semua-solusi) | [Jump](#-kode-semua-solusi) | [Jump](#-decision-guide) | [Jump](#-kesimpulan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami perbedaan setiap solusi secara menyeluruh
- ✅ Tahu kapan menggunakan solusi yang mana
- ✅ Bisa memilih pendekatan yang tepat sesuai konteks
- ✅ Memahami trade-off antara readability, brevity, dan gaya penulisan

---

## 📊 Perbandingan Semua Solusi

| Aspek | Kode Eksplorasi | `for...of` | `reduce` Elegant |
|-------|:--------------:|:----------:|:----------------:|
| **Jumlah baris logika** | 14 baris | 7 baris | 5 baris |
| **Jumlah pass** | 2x (group + seleksi) | 1x | 1x |
| **Destructuring** | ❌ Tidak ada | ✅ Di parameter loop | ✅ Di parameter callback |
| **Variabel perantara** | `summary`, `result` | `result` | Tidak ada |
| **Kompleksitas Waktu** | O(n) | O(n) | O(n) |
| **Kompleksitas Memori** | O(n) — array grouping | O(1) | O(1) |
| **Cocok untuk pemula** | ✅ Eksploratif & jelas | ✅ Linear & familiar | ⚠️ Perlu paham `reduce` |
| **Gaya penulisan** | Fungsional (2 tahap) | Imperatif | Fungsional |

> `n` = jumlah siswa di dalam array

---

## 🔍 Kode Semua Solusi

### 🔵 Kode Eksplorasi (Grouping + 2x reduce)

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

### ✅ Versi `for...of` + Destructuring

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

---

### ⚡ Versi `reduce` Elegant

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

---

## 🎮 Decision Guide

### Saya baru belajar & ingin pahami prosesnya → pakai **Kode Eksplorasi**
- Proses berpikir paling eksplisit — grouping dulu, baru seleksi
- Mudah di-debug karena setiap tahap tersimpan di variabel terpisah
- Cocok untuk memahami konsep grouping dan seleksi secara terpisah
- → **[Lihat Part 2](02-kode-eksplorasi.md)** dan **[Part 3](03-refactoring.md)**

### Saya ingin kode mudah dibaca & linear → pakai **`for...of`**
- Paling mudah dibaca dari atas ke bawah
- Tidak memerlukan pemahaman mendalam tentang `reduce`
- Alur eksekusinya jelas dan eksplisit
- → **[Lihat Part 4](04-versi-forOf.md)** dan **[Part 6](06-ringkasan-algoritma-forOf.md)**

### Saya ingin kode singkat & idiomatik → pakai **`reduce` Elegant**
- Paling singkat — hanya 5 baris inti
- Idiomatik JavaScript fungsional modern
- Return langsung tanpa variabel perantara
- → **[Lihat Part 5](05-versi-reduce.md)** dan **[Part 7](07-ringkasan-algoritma-reduce.md)**

### Saya ingin memori paling efisien → pakai **`for...of`** atau **`reduce` Elegant**
- Keduanya O(1) — tidak membuat array grouping di memori
- Berbeda dengan kode eksplorasi yang menyimpan semua siswa per kelas

---

## 📈 Perbandingan Kompleksitas Visual

```
Waktu — semua sama:
  Kode Eksplorasi  O(n) ████████████████ sama
  for...of         O(n) ████████████████ sama
  reduce elegant   O(n) ████████████████ sama

Memori — berbeda:
  for...of         O(1) █               paling hemat
  reduce elegant   O(1) █               paling hemat
  Kode Eksplorasi  O(n) ████████████████ array grouping di memori
```

---

## 💡 Kesimpulan

> **Tidak ada solusi yang mutlak terbaik** — semua solusi correct dan lulus semua test case. Yang membedakan adalah konteks dan preferensi penggunaannya.

> **Untuk belajar & eksplorasi** — Kode Eksplorasi paling baik. Proses berpikirnya eksplisit — pisahkan grouping dan seleksi — sehingga mudah dipahami dan di-debug satu per satu.

> **Untuk kode yang mudah dibaca** — `for...of` adalah pilihan terbaik. Linear, familiar, dan tidak memerlukan pemahaman khusus tentang `reduce`.

> **Untuk kode production yang singkat** — `reduce` elegant adalah pilihan paling idiomatik. Satu fungsi, satu pass, return langsung — mengekspresikan transformasi data secara deklaratif.

> **Dari eksplorasi ke refactoring** — perubahan terbesar bukan hanya di jumlah baris, tapi di **cara berpikir**. Kode eksplorasi berpikir dua tahap (group dulu, lalu pilih). Versi final berpikir satu tahap (bandingkan langsung saat loop). Ini adalah lompatan konseptual yang penting.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 7: Ringkasan Algoritma — reduce](07-ringkasan-algoritma-reduce.md)**

---

<div align="center">

**🎉 Selesai! Kamu sudah menyelesaikan seluruh dokumentasi highestScore.**

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
