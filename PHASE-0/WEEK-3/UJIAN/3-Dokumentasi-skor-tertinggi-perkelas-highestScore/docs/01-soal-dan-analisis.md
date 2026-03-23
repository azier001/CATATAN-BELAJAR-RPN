# 📚 highestScore - PART 1: SOAL & ANALISIS

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
- ✅ Memahami struktur array of objects yang digunakan
- ✅ Tahu apa itu edge case dan kenapa penting
- ✅ Siap untuk melihat dan menganalisis kode eksplorasi di Part 2

---

## 📋 Soal

> ### 📋 Deskripsi
>
> Diberikan sebuah function **`highestScore(students)`** yang menerima satu parameter:
>
> | Parameter | Tipe | Keterangan |
> |-----------|------|------------|
> | `students` | `array` | Array of objects berisi data siswa dengan properti `name`, `score`, dan `class` |
>
> Implementasikan function **`highestScore`** untuk mendapatkan **siswa dengan skor tertinggi per kelas**, dikembalikan sebagai object dengan key = nama kelas dan value = object `{ name, score }`.

### 📝 Template Soal

```javascript
function highestScore(students) {
  // Code disini
}
```

---

## 🔍 Analisis Struktur Data

### Struktur Array of Objects

Input `students` adalah array yang berisi objects dengan 3 properti:

```
students = [                         ← array of objects
  {                                  ← satu object siswa
    name: 'Dimitri',                 ← nama siswa (string)
    score: 90,                       ← nilai siswa (number)
    class: 'foxes'                   ← nama kelas (string)
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'                   ← kelas sama → nanti dibandingkan
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'                  ← kelas berbeda → masuk bucket berbeda
  },
  ...
]
```

---

### Struktur Output yang Diharapkan

Output adalah object baru di mana:
- **Key** = nama kelas (`string`)
- **Value** = object siswa pemenang dengan hanya properti `name` dan `score`

```javascript
{
  foxes: { name: 'Dimitri', score: 90 },   ← pemenang kelas foxes
  wolves: { name: 'Alexei', score: 85 }    ← pemenang kelas wolves
}
```

> **Perhatikan:** Properti `class` tidak ikut disimpan di output — hanya `name` dan `score`.

---

### Kenapa Disebut "Grouping"?

Proses utama fungsi ini adalah **mengelompokkan** siswa berdasarkan kelas, lalu **memilih** yang terbaik dari setiap kelompok.

```
Input (flat array):
[ Dimitri/foxes, Alexei/wolves, Sergei/foxes, Anastasia/wolves ]
          ↓
Proses grouping:
  foxes  → [ Dimitri(90), Sergei(74) ]
  wolves → [ Alexei(85), Anastasia(78) ]
          ↓
Proses seleksi (ambil tertinggi):
  foxes  → Dimitri (90 > 74) ✅
  wolves → Alexei  (85 > 78) ✅
          ↓
Output:
{ foxes: { name: 'Dimitri', score: 90 }, wolves: { name: 'Alexei', score: 85 } }
```

---

### Edge Case

> **Edge case** adalah kondisi khusus yang perlu ditangani secara berbeda dari kondisi normal.

Untuk soal ini, edge case-nya adalah ketika `students` kosong:

```javascript
highestScore([]) // → {}
```

Kenapa perlu ditangani khusus?
- Array kosong tidak punya siswa untuk dibandingkan
- Return `{}` (object kosong) konsisten dengan tipe return value — yaitu object
- Tidak perlu pengecekan tambahan dari sisi pemanggil

---

## 📊 Contoh-contoh

### Output yang Diharapkan

```javascript
// ✅ Normal case 1 — dua kelas
highestScore([
  { name: 'Dimitri', score: 90, class: 'foxes' },
  { name: 'Alexei', score: 85, class: 'wolves' },
  { name: 'Sergei', score: 74, class: 'foxes' },
  { name: 'Anastasia', score: 78, class: 'wolves' }
])
// → { foxes: { name: 'Dimitri', score: 90 }, wolves: { name: 'Alexei', score: 85 } }
```

```javascript
// ✅ Normal case 2 — tiga kelas dengan jumlah siswa berbeda
highestScore([
  { name: 'Alexander', score: 100, class: 'foxes' },
  { name: 'Alisa', score: 76, class: 'wolves' },
  { name: 'Vladimir', score: 92, class: 'foxes' },
  { name: 'Albert', score: 71, class: 'wolves' },
  { name: 'Viktor', score: 80, class: 'tigers' }
])
// → { foxes: { name: 'Alexander', score: 100 }, wolves: { name: 'Alisa', score: 76 }, tigers: { name: 'Viktor', score: 80 } }
```

```javascript
// ✅ Edge case — array kosong
highestScore([])
// → {}
```

---

### Simulasi Seleksi: Normal Case 1

```
students = [
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves' },
  { name: 'Sergei',    score: 74, class: 'foxes'  },
  { name: 'Anastasia', score: 78, class: 'wolves' }
]

Kelas foxes:
  Dimitri   → score 90  (pertama masuk, langsung simpan)
  Sergei    → score 74  (74 < 90 → tidak menggantikan)
  pemenang foxes = Dimitri (90) ✅

Kelas wolves:
  Alexei    → score 85  (pertama masuk, langsung simpan)
  Anastasia → score 78  (78 < 85 → tidak menggantikan)
  pemenang wolves = Alexei (85) ✅

Output:
{
  foxes:  { name: 'Dimitri', score: 90 },
  wolves: { name: 'Alexei', score: 85 }
}
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Parameter | `students` — array of objects dengan properti `name`, `score`, `class` |
| Struktur input | Array flat berisi objects siswa |
| Output | Object dengan key = nama kelas, value = `{ name, score }` pemenang |
| Output edge case | `students` kosong → return `{}` |
| Proses utama | Grouping by class → seleksi skor tertinggi per kelas |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2: Kode Eksplorasi →](02-kode-eksplorasi.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
