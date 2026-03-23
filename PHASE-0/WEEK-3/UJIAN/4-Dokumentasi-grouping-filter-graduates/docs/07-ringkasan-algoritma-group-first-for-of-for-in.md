# 📚 graduates - PART 7: RINGKASAN ALGORITMA — GROUP-FIRST (`for...of` + `for...in`)

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   📊 PART 7: RINGKASAN ALGORITMA — GROUP-FIRST (for...of + for...in) 📊 ║
║                                                                          ║
║           Bedah Lengkap Versi 4 — Kelompokkan Dulu, Saring Kemudian      ║
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
- ✅ Memahami setiap baris kode Versi 4 secara detail
- ✅ Memahami perbedaan `for...of` dan `for...in` dan kapan menggunakannya
- ✅ Memahami konsep intermediate variable sebagai tahap antara
- ✅ Mengetahui jebakan umum dan cara menghindarinya

---

## 📄 Kode Referensi

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

## 📋 Konsep Inti

```
Siapkan grouped = {}
Tahap 1 — Group semua student (tanpa filter):
  Loop setiap student → push { name, score } ke grouped[className]

Siapkan result = {}
Tahap 2 — Filter per class:
  Loop setiap className di grouped
    result[className] = grouped[className] yang lulus saja

Return result
```

---

## 🔍 Step-by-Step (Detail)

### 🟡 Persiapan:

**1. `const grouped = {}`**
- Object sementara untuk menampung **semua** student per class, tanpa filter dulu
- Berbeda dengan `result` di versi lain — `grouped` berisi student lulus maupun tidak lulus
- Disebut **intermediate variable** — variabel antara sebelum diproses lebih lanjut

**2. `const result = {}`**
- Object output akhir — hanya berisi student yang lulus
- Dideklarasikan setelah Tahap 1 selesai, bukan di awal fungsi

---

### 🔄 Tahap 1 — `for...of`:

**3. `for (const { name, score, class: className } of students)`**
- Destructuring langsung di parameter loop
- Semua student diproses — belum ada filter di tahap ini

**4. `if (!grouped[className]) grouped[className] = []`**
- Lazy initialization — buat array kosong saat class pertama kali ditemukan

**5. `grouped[className].push({ name, score })`**
- Push **semua** student ke grouped, lulus atau tidak
- Filter dilakukan nanti di Tahap 2

**Hasil Tahap 1:**
```js
grouped = {
  foxes:  [{ name: 'Dimitri', score: 90 }, { name: 'Sergei', score: 74 }],
  wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
}
```

---

### 🔄 Tahap 2 — `for...in`:

**6. `for (const className in grouped)`**
- `for...in` mengiterasi **key** dari sebuah object
- `className` = `'foxes'`, lalu `'wolves'`, dst.
- Berbeda dengan `for...of` yang mengiterasi **nilai** dari array

**7. `result[className] = grouped[className].filter(s => s.score > 75)`**
- Filter array per class — hanya yang lulus masuk ke `result`
- Jika tidak ada yang lulus → `filter` menghasilkan `[]` → class tetap muncul ✅

---

### 🔵 Di Luar:

**8. `return result`**
- Kembalikan object final yang sudah bersih — hanya berisi student yang lulus

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
TAHAP 1 — Group semua student
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Dimitri   → grouped['foxes']  = [{ name: 'Dimitri',   score: 90 }]
  Alexei    → grouped['wolves'] = [{ name: 'Alexei',    score: 85 }]
  Sergei    → grouped['foxes']  = [..., { name: 'Sergei', score: 74 }]
  Anastasia → grouped['wolves'] = [..., { name: 'Anastasia', score: 78 }]

  grouped = {
    foxes:  [{ name: 'Dimitri', score: 90 }, { name: 'Sergei', score: 74 }],
    wolves: [{ name: 'Alexei', score: 85 },  { name: 'Anastasia', score: 78 }]
  }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TAHAP 2 — Filter per class
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  className = 'foxes'
    grouped['foxes'].filter(s => s.score > 75)
    Dimitri 90 > 75 ✅ | Sergei 74 > 75 ❌
    result['foxes'] = [{ name: 'Dimitri', score: 90 }]

  className = 'wolves'
    grouped['wolves'].filter(s => s.score > 75)
    Alexei 85 > 75 ✅ | Anastasia 78 > 75 ✅
    result['wolves'] = [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]

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
| 🗂️ **Intermediate Variable** | `grouped` — variabel sementara yang menyimpan hasil antara sebelum diproses lebih lanjut |
| 🔄 **`for...of`** | Iterasi **nilai** dari array — digunakan di Tahap 1 |
| 🔑 **`for...in`** | Iterasi **key** dari object — digunakan di Tahap 2 |
| 🔽 **`filter` per group** | Filter dilakukan per class, bukan per individual student |

---

## ⚡ Kompleksitas

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n)** | Tahap 1 = O(n), Tahap 2 = O(n) → total O(2n) = O(n) |
| Memori | **O(n)** | `grouped` menyimpan **semua** student sementara, termasuk yang tidak lulus |

---

## ⚠️ Pitfalls (Jebakan Umum)

**1) ❌ Tertukar `for...of` dan `for...in`**
```javascript
// ❌ SALAH — for...in pada array mengiterasi index string ('0', '1', '2')
for (const student in students) {
  console.log(student) // '0', '1', '2' — bukan object student!
}

// ✅ BENAR — for...of untuk array, for...in untuk object
for (const student of students) { ... }      // nilai array
for (const className in grouped) { ... }     // key object
```

**2) ❌ Push di Tahap 1 dengan filter sekaligus**
```javascript
// ❌ MERUSAK tujuan Tahap 1 — class kosong tidak akan muncul
for (const { name, score, class: className } of students) {
  if (!grouped[className]) grouped[className] = []
  if (score > 75) grouped[className].push({ name, score }) // filter terlalu awal!
}

// ✅ BENAR — Tahap 1 murni grouping, filter di Tahap 2
for (const { name, score, class: className } of students) {
  if (!grouped[className]) grouped[className] = []
  grouped[className].push({ name, score }) // push semua dulu
}
```

**3) ❌ `for...in` pada array untuk Tahap 1**
```javascript
// ❌ SALAH — for...in pada array menghasilkan index, bukan nilai
for (const student in students) {
  // student = '0', '1', '2' — bukan { name, score, class }!
}

// ✅ BENAR — for...of untuk iterasi nilai array
for (const { name, score, class: className } of students) { ... }
```

---

## 💡 Insight Penting

> **Apa keunggulan utama Versi 4 dibanding versi lain?**
> Versi 4 paling mudah dibaca alurnya karena setiap tahap punya **satu tanggung jawab yang sangat jelas** dan menggunakan syntax yang familiar. Tahap 1 hanya mengelompokkan, Tahap 2 hanya menyaring. Tidak ada operasi yang digabung dalam satu langkah.

> **Kapan `for...in` lebih tepat dari `for...of`?**
> `for...in` digunakan untuk mengiterasi **key** sebuah object (`'foxes'`, `'wolves'`). `for...of` digunakan untuk mengiterasi **nilai** sebuah array. Keduanya tidak bisa ditukar — `for...of` pada object akan error, `for...in` pada array menghasilkan index string bukan nilai.

> **Tradeoff memori Versi 4 vs versi lain?**
> Versi 4 menggunakan memori lebih banyak karena `grouped` menyimpan **semua** student termasuk yang tidak lulus — sementara versi lain hanya menyimpan yang lulus di `result`. Untuk dataset kecil ini tidak masalah, tapi perlu diperhatikan jika data sangat besar.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 6: Ringkasan Algoritma — 2-pass](06-ringkasan-algoritma-2pass-reduce-filter-foreach.md)**
- **📖 [Lanjut ke Part 8: Perbandingan & Kesimpulan →](08-perbandingan-dan-kesimpulan.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
