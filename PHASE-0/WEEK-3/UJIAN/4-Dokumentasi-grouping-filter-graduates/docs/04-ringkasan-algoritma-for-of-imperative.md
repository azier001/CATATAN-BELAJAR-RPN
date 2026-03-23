# 📚 graduates - PART 4: RINGKASAN ALGORITMA — `for...of` IMPERATIVE

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║     📊 PART 4: RINGKASAN ALGORITMA — for...of IMPERATIVE 📊             ║
║                                                                          ║
║           Bedah Lengkap Versi 1 — Kode Original yang Disempurnakan       ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 📄 Kode | 📋 Konsep Inti | 🔍 Step-by-Step | 📊 Visualisasi | ⚠️ Pitfalls |
|:-------:|:-------------:|:---------------:|:--------------:|:-----------:|
| [Jump](#-kode-referensi) | [Jump](#-konsep-inti) | [Jump](#-step-by-step-detail) | [Jump](#-visualisasi) | [Jump](#-pitfalls-jebakan-umum) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami setiap baris kode Versi 1 secara detail
- ✅ Memahami konsep lazy initialization dan kenapa urutannya penting
- ✅ Memahami alur eksekusi kode melalui visualisasi iterasi
- ✅ Mengetahui jebakan umum dan cara menghindarinya

---

## 📄 Kode Referensi

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

## 📋 Konsep Inti

```
Siapkan result = {} dan minGrade = 75
Loop setiap student di dalam students
  Jika class student belum ada di result → inisialisasi dengan []
  Jika score > 75 → push { name, score } ke result[className]
Return result
```

---

## 🔍 Step-by-Step (Detail)

### 🟡 Persiapan:

**1. `const result = {}`**
- Object kosong sebagai wadah output akhir
- Key-nya akan berisi nama class, value-nya array of students
- Dideklarasikan di luar loop agar tidak direset setiap iterasi

**2. `const minGrade = 75`**
- Konstanta batas kelulusan
- Dipisah agar mudah diubah di satu tempat jika aturan berubah
- Lebih deskriptif dibanding menulis angka `75` langsung di dalam kondisi

### 🔄 Loop — `for (const { name, score, class: className } of students)`:

**3. Destructuring langsung di parameter loop**
- `name`, `score` → diambil langsung dari object student
- `class: className` → `class` adalah reserved keyword, di-rename jadi `className`
- Lebih ringkas dibanding `student.name`, `student.score`, `student.class`

**4. `if (!result[className]) result[className] = []`**
- Cek apakah class ini sudah pernah muncul sebelumnya
- Kalau belum → inisialisasi dengan array kosong `[]`
- Ini disebut **lazy initialization** — array dibuat hanya saat pertama kali dibutuhkan
- Memastikan class tetap muncul di output meski tidak ada student yang lulus

**5. `if (score > minGrade) result[className].push({ name, score })`**
- Hanya push jika score **lebih besar dari 75** (bukan `>=`)
- Push object `{ name, score }` — tanpa `class`, sesuai format output soal

### 🔵 Di Luar Loop:

**6. `return result`**
- Kembalikan object yang sudah terisi semua class dan lulusannya
- Harus di luar loop — jika di dalam loop, fungsi berhenti di iterasi pertama

---

## 📊 Visualisasi

```
students = [
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves'  },
  { name: 'Sergei',    score: 74, class: 'foxes'   },
  { name: 'Anastasia', score: 78, class: 'wolves'  }
]

result = {}

─────────────────────────────────────────────────────
Iterasi 1: Dimitri, score 90, class 'foxes'
  result['foxes'] belum ada → result = { foxes: [] }
  90 > 75 ✅ → result = { foxes: [{ name: 'Dimitri', score: 90 }] }

Iterasi 2: Alexei, score 85, class 'wolves'
  result['wolves'] belum ada → result = { foxes: [...], wolves: [] }
  85 > 75 ✅ → result wolves = [{ name: 'Alexei', score: 85 }]

Iterasi 3: Sergei, score 74, class 'foxes'
  result['foxes'] sudah ada → skip inisialisasi
  74 > 75 ❌ → tidak di-push

Iterasi 4: Anastasia, score 78, class 'wolves'
  result['wolves'] sudah ada → skip inisialisasi
  78 > 75 ✅ → result wolves = [..., { name: 'Anastasia', score: 78 }]
─────────────────────────────────────────────────────

return {
  foxes:  [{ name: 'Dimitri', score: 90 }],
  wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
} ✅
```

---

## 🔑 Keywords

| Keyword | Penjelasan |
|---------|------------|
| 🏗️ **Accumulator Object** | `result` yang terus diisi setiap iterasi, dideklarasikan di luar loop |
| 🔄 **`for...of`** | Iterasi langsung setiap elemen array tanpa index manual |
| 🧩 **Destructuring Rename** | `class: className` — mengambil property `class` lalu menyimpannya sebagai `className` |
| 🛡️ **Lazy Initialization** | Inisialisasi `result[className] = []` hanya saat pertama kali class ditemukan |

---

## ⚡ Kompleksitas

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n)** | Setiap student dikunjungi tepat 1 kali |
| Memori | **O(n)** | `result` menyimpan semua student yang lulus |

---

## ⚠️ Pitfalls (Jebakan Umum)

**1) ❌ Inisialisasi array di dalam kondisi score**
```javascript
// ❌ SALAH — class tidak muncul jika tidak ada yang lulus
if (score > minGrade) {
  if (!result[className]) result[className] = []
  result[className].push({ name, score })
}

// ✅ BENAR — inisialisasi terpisah dari kondisi score
if (!result[className]) result[className] = []
if (score > minGrade) result[className].push({ name, score })
```

**2) ❌ Lupa rename reserved keyword `class`**
```javascript
// ❌ SALAH — SyntaxError
for (const { name, score, class } of students) { ... }

// ✅ BENAR — rename saat destructuring
for (const { name, score, class: className } of students) { ... }
```

**3) ❌ `return` di dalam loop**
```javascript
// ❌ SALAH — fungsi berhenti setelah iterasi pertama
for (const { name, score, class: className } of students) {
  if (!result[className]) result[className] = []
  if (score > minGrade) result[className].push({ name, score })
  return result // berhenti di student pertama!
}

// ✅ BENAR — return di luar loop
for (const { name, score, class: className } of students) { ... }
return result
```

---

## 💡 Insight Penting

> **Kenapa inisialisasi array harus di luar kondisi `score > minGrade`?**
> Karena soal mengharuskan semua class tetap muncul di output — termasuk yang tidak ada lulusannya (isi `[]`). Jika inisialisasi diletakkan di dalam kondisi score, class yang semua studentnya tidak lulus tidak akan pernah dibuat, sehingga hilang dari output.

> **Kenapa `class: className` dan bukan nama lain?**
> Karena `class` adalah reserved keyword di JavaScript (digunakan untuk deklarasi class). Jika dipakai langsung sebagai variabel, akan terjadi SyntaxError. Rename ke `className` adalah konvensi yang paling umum dan deskriptif.

> **Kapan Versi 1 paling tepat digunakan?**
> Ketika kamu ingin kode yang paling mudah dipahami semua kalangan termasuk pemula. Gaya imperative `for...of` sangat familiar dan tidak membutuhkan pemahaman tentang `reduce` atau functional programming.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 3: Refactoring — reduce](03-refactoring-reduce.md)**
- **📖 [Lanjut ke Part 5: Ringkasan Algoritma — reduce Functional →](05-ringkasan-algoritma-reduce-functional.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
