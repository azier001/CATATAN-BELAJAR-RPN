# 📚 graduates - PART 8: PERBANDINGAN & KESIMPULAN

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
- ✅ Memahami trade-off antara readability, gaya penulisan, dan penggunaan memori

---

## 📊 Perbandingan Semua Solusi

| Aspek | Versi 1 — Original | Versi 2 — Refactored | Versi 3 — 2-pass | Versi 4 — Group-first |
|-------|:-----------------:|:--------------------:|:----------------:|:---------------------:|
| **Jumlah loop** | 1x | 1x | 2x | 2x |
| **Gaya penulisan** | Imperative | Functional | Mixed | Imperative |
| **Variabel perantara** | `result` | Tidak ada | `result` | `grouped` + `result` |
| **Kompleksitas Waktu** | O(n) | O(n) | O(n) | O(n) |
| **Kompleksitas Memori** | O(n) | O(n) | O(n) | O(n) |
| **Separation of concern** | ⚠️ Digabung | ⚠️ Digabung | ✅ Sangat jelas | ✅ Sangat jelas |
| **Cocok untuk pemula** | ✅ Ya | ⚠️ Perlu paham `reduce` | ⚠️ Perlu paham chaining | ✅ Ya |
| **Kemudahan debug** | ✅ Mudah | ⚠️ Cukup | ✅ Mudah | ✅ Paling mudah |

> `n` = jumlah student di dalam array

---

## 🔍 Kode Semua Solusi

### 🔵 Versi 1 — Original (`for...of` Imperative)

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

### ✅ Versi 2 — Refactored (`reduce` Functional)

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

### 🔁 Versi 3 — 2-pass (`reduce` + `filter/forEach`)

```javascript
const graduates = (students) => {
  // Pass 1: daftarkan semua class dulu dari data ORIGINAL
  const result = students.reduce((acc, { class: className }) => {
    if (!acc[className]) acc[className] = []
    return acc
  }, {})

  // Pass 2: filter yang lulus, lalu push ke class yang sesuai
  students
    .filter(({ score }) => score > 75)
    .forEach(({ name, score, class: className }) => {
      result[className].push({ name, score })
    })

  return result
}
```

---

### 🗂️ Versi 4 — Group-first (`for...of` + `for...in`)

```javascript
const graduates = (students) => {
  const grouped = {}

  // Tahap 1: group semua student per class
  for (const { name, score, class: className } of students) {
    if (!grouped[className]) grouped[className] = []
    grouped[className].push({ name, score })
  }

  // Tahap 2: filter yang lulus per class
  const result = {}

  for (const className in grouped) {
    result[className] = grouped[className].filter(s => s.score > 75)
  }

  return result
}
```

---

## 🎮 Decision Guide

### Saya Pemula → pakai **Versi 1 — Original**
- Paling mudah dibaca dan dipahami
- Tidak memerlukan pengetahuan method khusus seperti `reduce`
- Alur eksekusinya jelas dan eksplisit
- → **[Lihat Part 4](04-ringkasan-algoritma-for-of-imperative.md)**

### Saya ingin kode ringkas & modern → pakai **Versi 2 — Refactored**
- Hanya butuh satu `reduce` — tidak perlu variabel perantara
- Memanfaatkan functional programming style
- Mudah dibaca developer yang familiar dengan `reduce`
- → **[Lihat Part 5](05-ringkasan-algoritma-reduce-functional.md)**

### Saya ingin separation of concern yang jelas → pakai **Versi 3 — 2-pass**
- Setiap pass punya satu tanggung jawab yang eksplisit
- Mudah dimodifikasi — ingin ganti logika filter? Cukup ubah Pass 2
- → **[Lihat Part 6](06-ringkasan-algoritma-2pass-reduce-filter-foreach.md)**

### Saya ingin kode paling mudah di-debug → pakai **Versi 4 — Group-first**
- Dua tahap terpisah dengan variabel yang bisa di-inspect satu per satu
- `grouped` bisa di-`console.log` untuk lihat hasil antara
- Paling eksplisit — tidak ada operasi yang tersembunyi di dalam callback
- → **[Lihat Part 7](07-ringkasan-algoritma-group-first-for-of-for-in.md)**

---

## 📈 Perbandingan Visual

```
Jumlah Loop:
  Versi 1 — Original      1x  ████████         efisien
  Versi 2 — Refactored    1x  ████████         efisien
  Versi 3 — 2-pass        2x  ████████████████ lebih banyak iterasi
  Versi 4 — Group-first   2x  ████████████████ lebih banyak iterasi

Kemudahan Membaca (subjektif):
  Versi 1 — Original      ✅✅✅✅  sangat mudah — familiar untuk semua
  Versi 4 — Group-first   ✅✅✅✅  sangat mudah — alur paling eksplisit
  Versi 3 — 2-pass        ✅✅✅   mudah — separation jelas
  Versi 2 — Refactored    ✅✅    perlu paham reduce

Separation of Concern:
  Versi 3 — 2-pass        ✅✅✅✅  paling jelas — pass 1 & pass 2 terpisah
  Versi 4 — Group-first   ✅✅✅✅  paling jelas — tahap 1 & tahap 2 terpisah
  Versi 1 — Original      ✅✅    digabung tapi masih mudah dibaca
  Versi 2 — Refactored    ✅✅    digabung di dalam reduce
```

---

## 💡 Kesimpulan

> **Tidak ada solusi yang mutlak terbaik** — semuanya correct dan lulus semua test case. Yang membedakan adalah konteks penggunaannya.

> **Untuk belajar pertama kali** — mulai dari Versi 1 (Original). Logikanya paling eksplisit dan tidak membutuhkan pemahaman method khusus.

> **Untuk kode production yang ringkas** — Versi 2 (Refactored) adalah pilihan modern. `reduce` langsung mengembalikan hasilnya tanpa variabel perantara.

> **Untuk tim dengan berbagai level** — Versi 4 (Group-first) paling mudah di-debug bersama-sama karena setiap tahap bisa di-inspect satu per satu dengan `console.log`.

> **Pelajaran terpenting dari challenge ini** — urutan inisialisasi array sangat krusial. `result[className] = []` harus selalu dilakukan **sebelum** cek `score > minGrade`, bukan di dalamnya. Satu kesalahan urutan ini membuat class tanpa lulusan hilang dari output.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 7: Ringkasan Algoritma — Group-first](07-ringkasan-algoritma-group-first-for-of-for-in.md)**

---

<div align="center">

**🎉 Selesai! Kamu sudah menyelesaikan seluruh dokumentasi graduates.**

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
