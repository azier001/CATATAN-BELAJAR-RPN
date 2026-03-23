# 📚 highestScore - PART 6: RINGKASAN ALGORITMA — `for...of`

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        📖 PART 6: RINGKASAN ALGORITMA — for...of 📖                     ║
║                                                                          ║
║           Bedah Lengkap Algoritma for...of + Destructuring Step-by-Step  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 📋 Konsep Inti | 🔍 Step-by-Step | 📊 Visualisasi | 🔑 Keywords | ⚡ Kompleksitas | ⚠️ Pitfalls |
|:--------------:|:---------------:|:--------------:|:-----------:|:--------------:|:-----------:|
| [Jump](#-konsep-inti) | [Jump](#-step-by-step-detail) | [Jump](#-visualisasi) | [Jump](#-keywords) | [Jump](#-kompleksitas) | [Jump](#-pitfalls-jebakan-umum) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami alur algoritma `for...of` secara menyeluruh
- ✅ Tahu peran setiap baris kode secara detail
- ✅ Bisa mensimulasikan eksekusi kode di kepala sendiri
- ✅ Tahu jebakan umum dan cara menghindarinya

---

## 📄 Kode Referensi

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

## 📋 Konsep Inti

```
Siapkan object kosong result = {}
Loop setiap siswa di dalam students:
  Destructuring → ambil name, score, class (rename: className)
  Jika kelas belum ada di result
    ATAU skor siswa lebih tinggi dari yang tersimpan:
      Simpan { name, score } ke result[className]
Return result
```

---

## 🔍 Step-by-Step (Detail)

### 🟡 Persiapan:

1. **`const result = {}`**
   - Object kosong sebagai wadah output
   - Akan diisi secara bertahap — setiap kelas akan punya satu entry
   - Dideklarasikan dengan `const` karena referensi object-nya tidak akan berubah, hanya isinya
   - Dideklarasikan **di luar loop** agar tidak direset setiap iterasi

### 🔄 Loop — `for (const { name, score, class: className } of students)`:

2. **`for...of students`**
   - Loop setiap siswa di dalam array `students` satu per satu
   - Berjalan sebanyak jumlah siswa di dalam array

3. **`{ name, score, class: className }`**
   - Destructuring langsung di parameter loop — ekstrak 3 properti sekaligus
   - `name` → nama siswa
   - `score` → nilai siswa
   - `class: className` → rename properti `class` menjadi `className` karena `class` adalah reserved word di JavaScript

### 🔴 Kondisi Seleksi:

4. **`if (!result[className] || score > result[className].score)`**

   Kondisi ini terdiri dari 2 bagian yang digabung dengan `||` (OR):

   | Kondisi | Penjelasan |
   |---------|------------|
   | `!result[className]` | Kelas belum ada di result → `result[className]` adalah `undefined` → `!undefined` = `true` |
   | `score > result[className].score` | Kelas sudah ada, tapi skor siswa ini lebih tinggi dari yang tersimpan |

   Cukup **salah satu** kondisi bernilai `true` → masuk ke blok if.

   Dengan `||` (short-circuit evaluation): jika kondisi pertama sudah `true`, kondisi kedua tidak dievaluasi — lebih efisien.

5. **`result[className] = { name, score }`**
   - Simpan siswa ini sebagai pemenang sementara untuk kelasnya
   - Hanya menyimpan `name` dan `score` — properti `class` tidak diperlukan di output
   - Menggunakan **bracket notation** `result[className]` karena key-nya berasal dari variabel

### 🔵 Di Luar Loop:

6. **`return result`**
   - Kembalikan object hasil seleksi semua kelas
   - Harus ada **di luar loop** — jika di dalam loop, fungsi berhenti di iterasi pertama

---

## 📊 Visualisasi

Untuk input Normal Case 1:

```
students = [
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves' },
  { name: 'Sergei',    score: 74, class: 'foxes'  },
  { name: 'Anastasia', score: 78, class: 'wolves' }
]

result = {}

─────────────────────────────────────────────────────────────
Iterasi 1: { name: 'Dimitri', score: 90, className: 'foxes' }
─────────────────────────────────────────────────────────────
  !result['foxes']              → !undefined → true ✅
  (kondisi kedua tidak dievaluasi karena short-circuit)
  → result['foxes'] = { name: 'Dimitri', score: 90 }

  result = {
    foxes: { name: 'Dimitri', score: 90 }
  }

─────────────────────────────────────────────────────────────
Iterasi 2: { name: 'Alexei', score: 85, className: 'wolves' }
─────────────────────────────────────────────────────────────
  !result['wolves']             → !undefined → true ✅
  (kondisi kedua tidak dievaluasi karena short-circuit)
  → result['wolves'] = { name: 'Alexei', score: 85 }

  result = {
    foxes:  { name: 'Dimitri', score: 90 },
    wolves: { name: 'Alexei', score: 85 }
  }

─────────────────────────────────────────────────────────────
Iterasi 3: { name: 'Sergei', score: 74, className: 'foxes' }
─────────────────────────────────────────────────────────────
  !result['foxes']              → !{ name: 'Dimitri', score: 90 } → false
  score > result['foxes'].score → 74 > 90 → false ❌
  → kondisi gagal, result tidak diubah

  result = {
    foxes:  { name: 'Dimitri', score: 90 }  ← tidak berubah
    wolves: { name: 'Alexei', score: 85 }
  }

─────────────────────────────────────────────────────────────
Iterasi 4: { name: 'Anastasia', score: 78, className: 'wolves' }
─────────────────────────────────────────────────────────────
  !result['wolves']              → !{ name: 'Alexei', score: 85 } → false
  score > result['wolves'].score → 78 > 85 → false ❌
  → kondisi gagal, result tidak diubah

  result = {
    foxes:  { name: 'Dimitri', score: 90 }
    wolves: { name: 'Alexei', score: 85 }  ← tidak berubah
  }

─────────────────────────────────────────────────────────────
return result →
{
  foxes:  { name: 'Dimitri', score: 90 },
  wolves: { name: 'Alexei', score: 85 }
} ✅
```

---

## 🔑 Keywords

| Keyword | Penjelasan |
|---------|------------|
| 📖 **`for...of`** | Syntax loop yang mengiterasi setiap elemen iterable secara langsung tanpa index |
| 📦 **Destructuring** | Sintaks untuk mengekstrak properti object langsung ke variabel dalam satu langkah |
| 🔑 **Reserved Word** | Kata yang sudah dipakai JavaScript (`class`, `return`, dll) — tidak bisa dijadikan nama variabel |
| 🔄 **Rename Destructuring** | `class: className` — mengekstrak properti `class` ke variabel bernama `className` |
| 🔲 **Bracket Notation** | `result[className]` — mengakses properti object menggunakan nilai variabel sebagai key |
| ⚡ **Short-circuit Evaluation** | `\|\|` berhenti evaluasi saat kondisi pertama sudah `true` — lebih efisien |

---

## ⚡ Kompleksitas

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n)** | Setiap siswa dikunjungi tepat 1 kali, `n` = jumlah siswa di dalam array |
| Memori | **O(1)** | Hanya butuh object `result` yang menyimpan 1 siswa per kelas — tidak membuat array baru |

---

## ⚠️ Pitfalls (Jebakan Umum)

**1) ❌ Lupa rename `class` saat destructuring**
```javascript
// ❌ SALAH — class adalah reserved word, akan error
for (const { name, score, class } of students) { ... }
// SyntaxError: Unexpected token 'class'

// ✅ BENAR — rename class menjadi className
for (const { name, score, class: className } of students) { ... }
```

**2) ❌ Pakai `&&` bukan `||` di kondisi**
```javascript
// ❌ SALAH — dengan && kondisi tidak pernah terpenuhi untuk kelas baru
if (!result[className] && score > result[className].score) {
  // Untuk kelas baru: !result[className] = true, TAPI
  // result[className].score → result[className] adalah undefined → ERROR!
}

// ✅ BENAR — dengan || cukup salah satu kondisi terpenuhi
if (!result[className] || score > result[className].score) { ... }
```

**3) ❌ `return result` di dalam loop**
```javascript
// ❌ SALAH — return di dalam loop, berhenti di iterasi pertama
for (const { name, score, class: className } of students) {
  if (!result[className] || score > result[className].score) {
    result[className] = { name, score }
  }
  return result  // keluar setelah siswa pertama!
}

// ✅ BENAR — return di luar loop
for (const { name, score, class: className } of students) {
  if (!result[className] || score > result[className].score) {
    result[className] = { name, score }
  }
}
return result
```

**4) ❌ Pakai dot notation untuk key dari variabel**
```javascript
// ❌ SALAH — JavaScript mencari key literal "className"
result.className = { name, score }

// ✅ BENAR — bracket notation menggunakan nilai variabel sebagai key
result[className] = { name, score }
```

---

## 💡 Insight Penting

> **Kenapa kondisi `||` bukan `&&`?**
> Ada dua situasi berbeda yang perlu ditangani: (1) kelas baru yang belum ada di result, dan (2) kelas yang sudah ada tapi ada siswa dengan skor lebih tinggi. Kedua situasi ini butuh penanganan yang sama — simpan siswa. Karena cukup satu kondisi yang terpenuhi, `||` (OR) adalah pilihan yang tepat. `&&` (AND) justru akan error untuk kelas baru karena mencoba akses `.score` dari `undefined`.

> **Kenapa short-circuit evaluation penting di sini?**
> Urutan kondisi sengaja didesain: cek `!result[className]` dulu sebelum `score > result[className].score`. Jika kelas belum ada (`!result[className]` = true), JavaScript langsung masuk blok if tanpa mengevaluasi kondisi kedua. Ini penting karena jika kondisi kedua dievaluasi saat `result[className]` masih `undefined`, mengakses `.score`-nya akan error.

> **Kenapa memori O(1) padahal ada object `result`?**
> Object `result` hanya menyimpan satu siswa per kelas — jumlahnya sebanding dengan jumlah kelas (k), bukan jumlah siswa (n). Karena jumlah kelas biasanya jauh lebih kecil dan tidak bergantung pada ukuran input, memori dianggap konstan — O(1).

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 5: Versi reduce](05-versi-reduce.md)**
- **📖 [Lanjut ke Part 7: Ringkasan Algoritma — reduce →](07-ringkasan-algoritma-reduce.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
