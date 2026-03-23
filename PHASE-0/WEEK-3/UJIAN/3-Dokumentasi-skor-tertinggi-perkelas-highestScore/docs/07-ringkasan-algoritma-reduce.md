# 📚 highestScore - PART 7: RINGKASAN ALGORITMA — `reduce`

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        📖 PART 7: RINGKASAN ALGORITMA — reduce 📖                       ║
║                                                                          ║
║           Bedah Lengkap Algoritma reduce Elegant Step-by-Step            ║
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
- ✅ Memahami alur algoritma `reduce` secara menyeluruh
- ✅ Tahu peran setiap baris kode secara detail
- ✅ Bisa mensimulasikan eksekusi kode di kepala sendiri
- ✅ Tahu jebakan umum dan cara menghindarinya

---

## 📄 Kode Referensi

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

## 📋 Konsep Inti

```
Panggil reduce pada students dengan initialValue = {}
Untuk setiap siswa (destructuring → name, score, className):
  Jika kelas belum ada di result
    ATAU skor siswa lebih tinggi dari yang tersimpan:
      Simpan { name, score } ke result[className]
  Return result (accumulator) untuk iterasi berikutnya
Kembalikan hasil akhir reduce langsung
```

---

## 🔍 Step-by-Step (Detail)

### 🟡 Inisialisasi `reduce`:

1. **`students.reduce((result, { name, score, class: className }) => { ... }, {})`**
   - `reduce` dipanggil pada array `students`
   - **`result`** = accumulator — dimulai dari `{}` (object kosong), diperbarui setiap iterasi
   - **`{ name, score, class: className }`** = destructuring parameter siswa saat ini
     - `name` → nama siswa
     - `score` → nilai siswa
     - `class: className` → rename `class` menjadi `className` karena `class` adalah reserved word
   - **`{}`** = initialValue — accumulator dimulai dari object kosong

### 🔄 Di Dalam Callback (per iterasi):

2. **`if (!result[className] || score > result[className].score)`**

   Kondisi ini terdiri dari 2 bagian yang digabung dengan `||` (OR):

   | Kondisi | Penjelasan |
   |---------|------------|
   | `!result[className]` | Kelas belum ada di result → `result[className]` adalah `undefined` → `!undefined` = `true` |
   | `score > result[className].score` | Kelas sudah ada, tapi skor siswa ini lebih tinggi dari yang tersimpan |

   Cukup **salah satu** kondisi bernilai `true` → masuk ke blok if.

3. **`result[className] = { name, score }`**
   - Simpan siswa ini sebagai pemenang sementara untuk kelasnya
   - Hanya menyimpan `name` dan `score` — properti `class` tidak diperlukan di output
   - Menggunakan **bracket notation** karena key-nya berasal dari variabel `className`

4. **`return result`**
   - Wajib ada di setiap iterasi callback `reduce`
   - Return value dari setiap iterasi menjadi `result` (accumulator) di iterasi berikutnya
   - Tanpa ini, `result` akan menjadi `undefined` di iterasi selanjutnya → error

### 🔵 Di Luar Callback:

5. **`return students.reduce(...)`**
   - Return langsung hasil `reduce` tanpa variabel perantara
   - Setelah semua siswa diproses, `reduce` mengembalikan nilai `result` terakhir — yaitu object pemenang per kelas

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

initialValue → result = {}

─────────────────────────────────────────────────────────────
Iterasi 1: name='Dimitri', score=90, className='foxes'
─────────────────────────────────────────────────────────────
  !result['foxes']              → !undefined → true ✅
  (kondisi kedua tidak dievaluasi karena short-circuit)
  → result['foxes'] = { name: 'Dimitri', score: 90 }
  return result →
  {
    foxes: { name: 'Dimitri', score: 90 }
  }

─────────────────────────────────────────────────────────────
Iterasi 2: name='Alexei', score=85, className='wolves'
─────────────────────────────────────────────────────────────
  !result['wolves']             → !undefined → true ✅
  (kondisi kedua tidak dievaluasi karena short-circuit)
  → result['wolves'] = { name: 'Alexei', score: 85 }
  return result →
  {
    foxes:  { name: 'Dimitri', score: 90 },
    wolves: { name: 'Alexei', score: 85 }
  }

─────────────────────────────────────────────────────────────
Iterasi 3: name='Sergei', score=74, className='foxes'
─────────────────────────────────────────────────────────────
  !result['foxes']              → !{ name: 'Dimitri', score: 90 } → false
  score > result['foxes'].score → 74 > 90 → false ❌
  → kondisi gagal, result tidak diubah
  return result →
  {
    foxes:  { name: 'Dimitri', score: 90 }  ← tidak berubah
    wolves: { name: 'Alexei', score: 85 }
  }

─────────────────────────────────────────────────────────────
Iterasi 4: name='Anastasia', score=78, className='wolves'
─────────────────────────────────────────────────────────────
  !result['wolves']              → !{ name: 'Alexei', score: 85 } → false
  score > result['wolves'].score → 78 > 85 → false ❌
  → kondisi gagal, result tidak diubah
  return result →
  {
    foxes:  { name: 'Dimitri', score: 90 }
    wolves: { name: 'Alexei', score: 85 }  ← tidak berubah
  }

─────────────────────────────────────────────────────────────
reduce selesai → return hasil akhir:
{
  foxes:  { name: 'Dimitri', score: 90 },
  wolves: { name: 'Alexei', score: 85 }
} ✅
```

---

## 🔑 Keywords

| Keyword | Penjelasan |
|---------|------------|
| 🔁 **`reduce`** | Method array yang melipat semua elemen menjadi satu nilai menggunakan accumulator |
| 📦 **Accumulator** | Parameter `result` di callback — dimulai dari `{}`, diperbarui dan di-return setiap iterasi |
| 🎯 **initialValue** | Nilai awal accumulator `{}` — tanpa ini, `reduce` menggunakan elemen pertama array sebagai accumulator |
| 📦 **Destructuring** | Sintaks untuk mengekstrak properti object langsung ke variabel dalam satu langkah |
| 🔑 **Reserved Word** | Kata yang sudah dipakai JavaScript (`class`, `return`, dll) — tidak bisa dijadikan nama variabel |
| 🔲 **Bracket Notation** | `result[className]` — mengakses properti object menggunakan nilai variabel sebagai key |
| ⚡ **Short-circuit Evaluation** | `\|\|` berhenti evaluasi saat kondisi pertama sudah `true` — lebih efisien dan aman |

---

## ⚡ Kompleksitas

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n)** | Setiap siswa dikunjungi tepat 1 kali, `n` = jumlah siswa di dalam array |
| Memori | **O(1)** | Hanya butuh object `result` yang menyimpan 1 siswa per kelas — tidak membuat array baru |

---

## ⚠️ Pitfalls (Jebakan Umum)

**1) ❌ Lupa `return result` di dalam callback**
```javascript
// ❌ SALAH — tidak ada return result
students.reduce((result, { name, score, class: className }) => {
  if (!result[className] || score > result[className].score) {
    result[className] = { name, score }
  }
  // lupa return result!
}, {})
// → result menjadi undefined di iterasi ke-2 → error

// ✅ BENAR — return result wajib ada
students.reduce((result, { name, score, class: className }) => {
  if (!result[className] || score > result[className].score) {
    result[className] = { name, score }
  }
  return result
}, {})
```

**2) ❌ Lupa initialValue `{}`**
```javascript
// ❌ SALAH — tanpa initialValue, elemen pertama array dipakai sebagai accumulator
students.reduce((result, { name, score, class: className }) => {
  // iterasi pertama: result = { name: 'Dimitri', score: 90, class: 'foxes' }
  // bukan object kosong! → result[className] tidak bisa diisi dengan benar
  return result
})

// ✅ BENAR — initialValue {} wajib ada
students.reduce((result, { name, score, class: className }) => {
  ...
  return result
}, {})  // ← initialValue
```

**3) ❌ Lupa rename `class` saat destructuring**
```javascript
// ❌ SALAH — class adalah reserved word, akan error
students.reduce((result, { name, score, class }) => { ... }, {})
// SyntaxError: Unexpected token 'class'

// ✅ BENAR — rename class menjadi className
students.reduce((result, { name, score, class: className }) => { ... }, {})
```

**4) ❌ Pakai `&&` bukan `||` di kondisi**
```javascript
// ❌ SALAH — dengan && akan error untuk kelas baru
if (!result[className] && score > result[className].score) {
  // Untuk kelas baru: !result[className] = true
  // Lalu evaluasi kondisi kedua: result[className].score
  // result[className] adalah undefined → undefined.score → TypeError!
}

// ✅ BENAR — dengan || kondisi kedua tidak dievaluasi jika pertama sudah true
if (!result[className] || score > result[className].score) { ... }
```

---

## 💡 Insight Penting

> **Kenapa `return result` wajib ada di setiap iterasi?**
> `reduce` menggunakan return value dari callback sebagai `result` (accumulator) di iterasi berikutnya. Jika tidak ada `return result`, JavaScript secara implisit return `undefined` — dan iterasi selanjutnya akan mencoba akses properti dari `undefined`, yang langsung menyebabkan error.

> **Apa bedanya versi `reduce` ini dengan kode eksplorasi yang juga pakai `reduce`?**
> Kode eksplorasi menggunakan `reduce` dua kali — satu untuk grouping semua siswa, satu lagi untuk seleksi pemenang. Versi elegant ini menggunakan `reduce` **satu kali** saja — grouping dan seleksi dilakukan sekaligus dalam satu pass. Ini lebih efisien karena tidak perlu menyimpan semua siswa per kelas di memori.

> **Kenapa `reduce` dianggap lebih idiomatik dari `for...of` untuk kasus ini?**
> Karena `reduce` secara eksplisit mengekspresikan transformasi: "dari array `students`, hasilkan object `result`." Ini sesuai dengan filosofi functional programming — transformasi data tanpa side effects. `for...of` juga valid, tapi menggunakan mutation eksternal (`const result = {}` di luar loop) yang kurang "murni" secara fungsional.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 6: Ringkasan Algoritma for...of](06-ringkasan-algoritma-forOf.md)**
- **📖 [Lanjut ke Part 8: Perbandingan & Kesimpulan →](08-perbandingan-dan-kesimpulan.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
