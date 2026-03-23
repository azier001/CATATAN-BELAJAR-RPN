# 📚 graduates - PART 6: RINGKASAN ALGORITMA — 2-PASS (`reduce` + `filter/forEach`)

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   📊 PART 6: RINGKASAN ALGORITMA — 2-PASS (reduce + filter/forEach) 📊  ║
║                                                                          ║
║           Bedah Lengkap Versi 3 — Daftarkan Dulu, Saring Kemudian        ║
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
- ✅ Memahami setiap baris kode Versi 3 secara detail
- ✅ Memahami konsep separation of concern — satu pass, satu tanggung jawab
- ✅ Memahami kenapa Pass 1 harus menggunakan data original
- ✅ Mengetahui jebakan umum dan cara menghindarinya

---

## 📄 Kode Referensi

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

## 📋 Konsep Inti

```
Pass 1 — Daftarkan semua class:
  reduce students → buat result dengan semua class = []

Pass 2 — Isi dengan yang lulus:
  filter students → hanya yang score > 75
  forEach student yang lulus → push ke result[className]

Return result
```

---

## 🔍 Step-by-Step (Detail)

### 🟡 Persiapan:

**1. `const result`**
- Tidak dideklarasikan manual dengan `= {}`
- Nilainya langsung ditentukan oleh hasil Pass 1 (reduce)
- Setelah Pass 1 selesai, `result` sudah berisi semua class dengan `[]`

> Berbeda dengan Versi 1 & 2 yang mendeklarasikan `result = {}` di awal, di sini `result` lahir sudah "terisi" struktur class-nya

**2. Tidak ada `const minGrade`**
- Angka `75` ditulis langsung (inline) di dalam `.filter()`
- Ini pilihan gaya — lebih ringkas tapi kurang fleksibel jika batas kelulusan perlu diubah

---

### 🔵 Pass 1 — `students.reduce(...)`:

**3. Hanya butuh `className` di destructuring**
- Pass 1 tidak peduli `name` dan `score` — hanya mendaftarkan class
- Destructuring cukup `{ class: className }`

**4. `if (!acc[className]) acc[className] = []`**
- Inisialisasi setiap class yang ditemukan dengan `[]`
- Jika class sudah ada → skip

**5. `return acc`**
- Wajib dikembalikan seperti biasa di `reduce`

**Hasil Pass 1:**
```js
result = { foxes: [], wolves: [] }
// Semua class sudah terdaftar, semua masih kosong
```

---

### 🔵 Pass 2 — `.filter().forEach()`:

**6. `.filter(({ score }) => score > 75)`**
- Saring hanya student yang lulus
- Menghasilkan array baru berisi student yang lulus saja

**7. `.forEach(({ name, score, class: className }) => { ... })`**
- Iterasi setiap student yang lulus
- Push `{ name, score }` ke `result[className]` yang sudah ada dari Pass 1

---

### 🔵 Di Luar:

**8. `return result`**
- Kembalikan result yang sudah terisi penuh

---

## 📊 Visualisasi

```
students = [
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves'  },
  { name: 'Sergei',    score: 74, class: 'foxes'   },
  { name: 'Anastasia', score: 78, class: 'wolves'  }
]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PASS 1 — Daftarkan semua class
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Dimitri   → class 'foxes'  → acc = { foxes: [] }
  Alexei    → class 'wolves' → acc = { foxes: [], wolves: [] }
  Sergei    → class 'foxes'  → sudah ada, skip
  Anastasia → class 'wolves' → sudah ada, skip

  result = { foxes: [], wolves: [] }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PASS 2 — Filter lulus → push
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  filter:
    Dimitri   90 > 75 ✅
    Alexei    85 > 75 ✅
    Sergei    74 > 75 ❌
    Anastasia 78 > 75 ✅

  forEach hasil filter:
    Dimitri   → result['foxes'].push  → foxes:  [{ name: 'Dimitri', score: 90 }]
    Alexei    → result['wolves'].push → wolves: [{ name: 'Alexei', score: 85 }]
    Anastasia → result['wolves'].push → wolves: [..., { name: 'Anastasia', score: 78 }]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

return {
  foxes:  [{ name: 'Dimitri', score: 90 }],
  wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
} ✅
```

---

## 🔑 Keywords

| Keyword | Penjelasan |
|---------|------------|
| 🔁 **2-pass** | Array diiterasi dua kali — sekali untuk registrasi, sekali untuk pengisian |
| 🔽 **`filter`** | Method array yang menghasilkan array baru berisi elemen yang lolos kondisi |
| 🔄 **`forEach`** | Iterasi array tanpa menghasilkan array baru — digunakan untuk side effect (push) |
| 🔗 **Method Chaining** | `.filter().forEach()` — merangkai dua method secara langsung |

---

## ⚡ Kompleksitas

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n)** | Pass 1 = O(n), Pass 2 = O(n) → total O(2n) = O(n) |
| Memori | **O(n)** | `filter` membuat array baru sementara berisi student yang lulus |

---

## ⚠️ Pitfalls (Jebakan Umum)

**1) ❌ Melewati Pass 1, langsung filter**
```javascript
// ❌ SALAH — class yang tidak ada lulusannya akan hilang
const passed = students.filter(({ score }) => score > 75)
passed.forEach(({ name, score, class: className }) => {
  if (!result[className]) result[className] = []
  result[className].push({ name, score })
})

// ✅ BENAR — daftarkan semua class dulu di Pass 1
const result = students.reduce((acc, { class: className }) => {
  if (!acc[className]) acc[className] = []
  return acc
}, {})
```

**2) ❌ Pakai `map` instead of `forEach` untuk side effect**
```javascript
// ❌ KURANG TEPAT — map menghasilkan array [undefined] yang tidak dipakai
students.filter(...).map(({ name, score, class: className }) => {
  result[className].push({ name, score })
})

// ✅ BENAR — forEach untuk side effect tanpa return value
students.filter(...).forEach(({ name, score, class: className }) => {
  result[className].push({ name, score })
})
```

**3) ❌ Pass 1 dijalankan pada data yang sudah difilter**
```javascript
// ❌ SALAH — class tanpa lulusan tidak akan terdaftar
const passed = students.filter(({ score }) => score > 75)
const result = passed.reduce((acc, { class: className }) => { // ← data sudah difilter!
  if (!acc[className]) acc[className] = []
  return acc
}, {})

// ✅ BENAR — Pass 1 selalu dari data ORIGINAL
const result = students.reduce((acc, { class: className }) => { // ← data original
  if (!acc[className]) acc[className] = []
  return acc
}, {})
```

---

## 💡 Insight Penting

> **Kenapa Pass 1 harus pakai data ORIGINAL, bukan data hasil filter?**
> Karena tujuan Pass 1 adalah mendaftarkan **semua class yang ada**, termasuk class yang tidak memiliki lulusan. Jika Pass 1 dijalankan pada data yang sudah difilter, class dengan semua student tidak lulus tidak akan pernah terdaftar dan hilang dari output.

> **Kapan pendekatan 2-pass ini lebih disukai?**
> Ketika kamu ingin memisahkan tanggung jawab dengan sangat jelas: *"satu pass, satu tugas."* Pass 1 hanya mendaftarkan class, Pass 2 hanya mengisi lulusan. Kodenya lebih panjang tapi setiap baris punya satu tujuan yang eksplisit — mudah di-debug dan di-maintain.

> **Tradeoff `minGrade` inline vs konstanta?**
> Menulis `75` langsung di `.filter()` lebih ringkas, tapi jika angka kelulusan berubah kamu harus mencarinya di dalam kode. Konstanta `const minGrade = 75` lebih aman untuk kode yang akan di-maintain jangka panjang.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 5: Ringkasan Algoritma — reduce Functional](05-ringkasan-algoritma-reduce-functional.md)**
- **📖 [Lanjut ke Part 7: Ringkasan Algoritma — Group-first →](07-ringkasan-algoritma-group-first-for-of-for-in.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
