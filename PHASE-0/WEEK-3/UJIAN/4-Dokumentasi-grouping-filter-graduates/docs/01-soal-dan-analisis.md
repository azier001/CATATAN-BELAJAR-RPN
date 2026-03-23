# 📚 graduates - PART 1: SOAL & ANALISIS

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 PART 1: SOAL & ANALISIS 📋                              ║
║                                                                          ║
║           Apa yang Diminta dan Bagaimana Struktur Datanya                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📋 Soal | 🔍 Analisis | 📊 Contoh | ✅ Ringkasan |
|:-------:|:-----------:|:---------:|:-----------:|
| [Jump](#-soal) | [Jump](#-analisis-struktur-data) | [Jump](#-contoh-contoh) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami apa yang diminta soal
- ✅ Memahami struktur data input dan format output yang diharapkan
- ✅ Tahu apa itu edge case dan kenapa penting
- ✅ Siap untuk melihat dan menganalisis kode original di Part 2

---

## 📋 Soal

> ### 📋 Deskripsi
>
> Diberikan sebuah function **`graduates(students)`** yang menerima satu parameter:
>
> | Parameter | Tipe | Keterangan |
> |-----------|------|------------|
> | `students` | `array` | Array of objects, setiap object berisi `name`, `score`, dan `class` |
>
> Implementasikan function **`graduates`** untuk mendapatkan daftar student yang lulus dengan aturan:
>
> - Student dapat dinyatakan **lulus** apabila `score` **lebih besar dari 75**
> - Masukkan `name` dan `score` dari student ke **class yang dia ikuti**
> - Student yang **tidak lulus tidak perlu ditampilkan**
> - Jika tidak ada student yang lulus di suatu class, class tersebut tetap ditampilkan dengan **array kosong `[]`**

### 📝 Template Soal

```javascript
function graduates(students) {
  // Code disini
}
```

### 📤 Format Output

```javascript
{
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [] // Jika tidak ada student yang lulus
}
```

---

## 🔍 Analisis Struktur Data

### Struktur Input

Setiap elemen di dalam `students` adalah sebuah object dengan 3 property:

```
students = [               ← array of student objects
  {
    name:  'Dimitri',      ← nama student (string)
    score: 90,             ← nilai ujian (number)
    class: 'foxes'         ← nama class yang diikuti (string)
  },
  {
    name:  'Sergei',
    score: 74,
    class: 'foxes'         ← bisa ada beberapa student di class yang sama
  },
  ...
]
```

### Struktur Output

Output adalah sebuah **object** di mana:
- **Key** = nama class (diambil dari property `class` setiap student)
- **Value** = array of objects `{ name, score }` — hanya student yang lulus

```
{
  'foxes':  [{ name: 'Dimitri', score: 90 }],
  'wolves': [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
}
```

> **Catatan:** Property `class` tidak ikut masuk ke dalam output. Hanya `name` dan `score` yang disertakan.

---

### Kenapa `class` Harus Di-rename Saat Destructuring?

`class` adalah **reserved keyword** di JavaScript — digunakan untuk mendeklarasikan class (`class MyClass {}`). Jika dipakai langsung sebagai nama variabel, akan terjadi `SyntaxError`.

```javascript
// ❌ SALAH — SyntaxError
const { name, score, class } = student

// ✅ BENAR — rename saat destructuring
const { name, score, class: className } = student
```

Rename ke `className` adalah konvensi yang paling umum dan deskriptif.

---

### Edge Case

> **Edge case** adalah kondisi khusus yang perlu ditangani secara berbeda dari kondisi normal.

Untuk soal ini, edge case-nya adalah ketika `students` kosong:

```javascript
graduates([]) // → {}
```

Kenapa hasilnya `{}`?
- Tidak ada student → tidak ada class yang perlu didaftarkan
- Tidak ada angka untuk dibandingkan dengan batas kelulusan
- Object kosong `{}` adalah output yang paling logis — tidak ada data, tidak ada output

---

### Aturan Kelulusan

Perhatikan kondisi yang digunakan:

```javascript
score > 75   // strict greater than — LEBIH BESAR DARI 75
```

Bukan `>=` (greater than or equal). Artinya:

| Score | Status |
|-------|--------|
| 76 | ✅ Lulus |
| 75 | ❌ Tidak Lulus |
| 74 | ❌ Tidak Lulus |

---

## 📊 Contoh-contoh

### Output yang Diharapkan

```javascript
// ✅ Normal case 1 — dua class, satu student tidak lulus
graduates([
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves'  },
  { name: 'Sergei',    score: 74, class: 'foxes'   },
  { name: 'Anastasia', score: 78, class: 'wolves'  }
])
// → {
//     foxes:  [{ name: 'Dimitri', score: 90 }],
//     wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
//   }
```

```javascript
// ✅ Normal case 2 — tiga class, beberapa student tidak lulus
graduates([
  { name: 'Alexander', score: 100, class: 'foxes'  },
  { name: 'Alisa',     score: 76,  class: 'wolves' },
  { name: 'Vladimir',  score: 92,  class: 'foxes'  },
  { name: 'Albert',    score: 71,  class: 'wolves' },
  { name: 'Viktor',    score: 80,  class: 'tigers' }
])
// → {
//     foxes:  [{ name: 'Alexander', score: 100 }, { name: 'Vladimir', score: 92 }],
//     wolves: [{ name: 'Alisa', score: 76 }],
//     tigers: [{ name: 'Viktor', score: 80 }]
//   }
```

```javascript
// ✅ Edge case — array kosong
graduates([])
// → {}
```

---

### Simulasi Proses: Normal Case 1

```
students = [
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves'  },
  { name: 'Sergei',    score: 74, class: 'foxes'   },
  { name: 'Anastasia', score: 78, class: 'wolves'  }
]

Proses setiap student:

  Dimitri   | score 90 | class 'foxes'  | 90 > 75 ✅ → masuk foxes
  Alexei    | score 85 | class 'wolves' | 85 > 75 ✅ → masuk wolves
  Sergei    | score 74 | class 'foxes'  | 74 > 75 ❌ → tidak ditampilkan
  Anastasia | score 78 | class 'wolves' | 78 > 75 ✅ → masuk wolves

Output:
  foxes:  [{ name: 'Dimitri', score: 90 }]
  wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Parameter | `students` — array of objects dengan `name`, `score`, `class` |
| Lulus jika | `score > 75` (strict greater than) |
| Output | Object dengan key = nama class, value = array `{ name, score }` |
| Student tidak lulus | Tidak ditampilkan di output |
| Class tanpa lulusan | Tetap muncul dengan value `[]` |
| Edge case | `students` kosong → return `{}` |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2: Kode Original & Review →](02-kode-original-dan-review.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
