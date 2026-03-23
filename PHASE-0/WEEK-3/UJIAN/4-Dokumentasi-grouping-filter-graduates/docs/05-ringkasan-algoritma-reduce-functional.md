# 📚 graduates - PART 5: RINGKASAN ALGORITMA — `reduce` FUNCTIONAL

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║     📊 PART 5: RINGKASAN ALGORITMA — reduce FUNCTIONAL 📊               ║
║                                                                          ║
║           Bedah Lengkap Versi 2 — Refactored dengan reduce               ║
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
- ✅ Memahami setiap baris kode Versi 2 secara detail
- ✅ Memahami cara `reduce` membangun object dari array
- ✅ Memahami kenapa `return acc` wajib ada di setiap iterasi
- ✅ Mengetahui jebakan umum dan cara menghindarinya

---

## 📄 Kode Referensi

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

## 📋 Konsep Inti

```
Jalankan reduce pada students dengan acc awal = {}
  Untuk setiap student:
    Jika class belum ada di acc → inisialisasi dengan []
    Jika score > 75 → push { name, score } ke acc[className]
    Return acc
Hasil reduce langsung di-return sebagai output
```

---

## 🔍 Step-by-Step (Detail)

### 🟡 Persiapan:

**1. `const minGrade = 75`**
- Konstanta batas kelulusan
- Dipisah agar mudah diubah di satu tempat jika aturan berubah

### 🔄 `students.reduce((acc, { name, score, class: className }) => { ... }, {})`:

**2. `acc` (accumulator)**
- Object yang sedang dibangun selama proses reduce
- Nilai awal `{}` — diberikan sebagai argumen kedua `reduce`
- Setiap iterasi menerima `acc` dari iterasi sebelumnya

**3. `{ name, score, class: className }` — destructuring di parameter**
- Langsung destructure setiap student di parameter callback
- Sama seperti Versi 1, `class` di-rename jadi `className`

**4. `if (!acc[className]) acc[className] = []`**
- Lazy initialization — inisialisasi array hanya saat class pertama kali ditemukan
- Memastikan class tetap ada di output meski tidak ada yang lulus

**5. `if (score > minGrade) acc[className].push({ name, score })`**
- Push hanya jika lolos batas kelulusan
- Push object `{ name, score }` — tanpa `class`, sesuai format output soal

**6. `return acc`**
- **Wajib** dikembalikan setiap iterasi
- `acc` yang dikembalikan menjadi `acc` di iterasi berikutnya
- Jika lupa `return acc` → `acc` menjadi `undefined` di iterasi selanjutnya

### 🔵 Hasil:

**7. `return students.reduce(...)`**
- Hasil akhir `reduce` langsung di-return tanpa variabel perantara
- Berbeda dengan Versi 1 yang butuh `const result = {}` lalu `return result`

---

## 📊 Visualisasi

```
students = [
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves'  },
  { name: 'Sergei',    score: 74, class: 'foxes'   },
  { name: 'Anastasia', score: 78, class: 'wolves'  }
]

acc awal = {}

─────────────────────────────────────────────────────
Iterasi 1: Dimitri, score 90, class 'foxes'
  acc['foxes'] belum ada → acc = { foxes: [] }
  90 > 75 ✅ → acc = { foxes: [{ name: 'Dimitri', score: 90 }] }
  return acc ✅

Iterasi 2: Alexei, score 85, class 'wolves'
  acc['wolves'] belum ada → acc = { foxes: [...], wolves: [] }
  85 > 75 ✅ → acc wolves = [{ name: 'Alexei', score: 85 }]
  return acc ✅

Iterasi 3: Sergei, score 74, class 'foxes'
  acc['foxes'] sudah ada → skip inisialisasi
  74 > 75 ❌ → tidak di-push
  return acc ✅

Iterasi 4: Anastasia, score 78, class 'wolves'
  acc['wolves'] sudah ada → skip inisialisasi
  78 > 75 ✅ → acc wolves = [..., { name: 'Anastasia', score: 78 }]
  return acc ✅
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
| 🔁 **`reduce`** | Method array untuk "mereduksi" array menjadi satu nilai — di sini menjadi sebuah object |
| 📦 **Initial Value** | Nilai awal accumulator `{}` — diberikan sebagai argumen kedua `reduce` |
| 🔄 **`return acc`** | Wajib dikembalikan setiap iterasi agar accumulator tidak hilang |
| 🧩 **Destructuring di Parameter** | Langsung unpack object di parameter callback tanpa variabel perantara |

---

## ⚡ Kompleksitas

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n)** | Setiap student dikunjungi tepat 1 kali |
| Memori | **O(n)** | `acc` menyimpan semua student yang lulus |

---

## ⚠️ Pitfalls (Jebakan Umum)

**1) ❌ Lupa `return acc`**
```javascript
// ❌ SALAH — acc menjadi undefined di iterasi berikutnya
students.reduce((acc, { name, score, class: className }) => {
  if (!acc[className]) acc[className] = []
  if (score > minGrade) acc[className].push({ name, score })
  // lupa return acc!
}, {})

// ✅ BENAR — selalu return acc
students.reduce((acc, { name, score, class: className }) => {
  if (!acc[className]) acc[className] = []
  if (score > minGrade) acc[className].push({ name, score })
  return acc
}, {})
```

**2) ❌ Lupa initial value `{}`**
```javascript
// ❌ SALAH — elemen pertama array dijadikan acc, bukan {}
students.reduce((acc, { name, score, class: className }) => {
  ...
  return acc
}) // tidak ada initial value!

// ✅ BENAR — berikan {} sebagai initial value
students.reduce((acc, { name, score, class: className }) => {
  ...
  return acc
}, {})
```

**3) ❌ Inisialisasi array di dalam kondisi score**
```javascript
// ❌ SALAH — class tidak muncul jika tidak ada yang lulus
students.reduce((acc, { name, score, class: className }) => {
  if (score > minGrade) {
    if (!acc[className]) acc[className] = []
    acc[className].push({ name, score })
  }
  return acc
}, {})

// ✅ BENAR — inisialisasi terpisah dari kondisi score
students.reduce((acc, { name, score, class: className }) => {
  if (!acc[className]) acc[className] = []
  if (score > minGrade) acc[className].push({ name, score })
  return acc
}, {})
```

---

## 💡 Insight Penting

> **Apa bedanya `reduce` dengan `for...of` di sini?**
> Secara hasil dan kompleksitas keduanya identik — sama-sama O(n) dengan 1 kali loop. Perbedaannya ada di gaya: `for...of` bersifat *imperative* (kamu tulis langkah per langkah), sedangkan `reduce` bersifat *functional* (kamu deklarasikan transformasinya). `reduce` lebih ringkas tapi butuh pemahaman tentang `acc` dan `return acc`.

> **Kenapa `return acc` wajib di `reduce` tapi tidak di `for...of`?**
> Karena `reduce` meneruskan nilai `acc` antar iterasi melalui return value callback. Jika tidak di-return, nilai `acc` di iterasi berikutnya menjadi `undefined` dan program crash. Di `for...of`, `result` adalah variabel yang hidup di luar loop sehingga tidak perlu di-return setiap iterasi.

> **Kapan pilih Versi 2 dibanding Versi 1?**
> Pilih Versi 2 jika kamu ingin kode yang lebih ringkas dan bergaya functional. Tidak butuh variabel perantara `result` — `reduce` langsung mengembalikan hasilnya. Untuk performa, keduanya setara.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 4: Ringkasan Algoritma — for...of Imperative](04-ringkasan-algoritma-for-of-imperative.md)**
- **📖 [Lanjut ke Part 6: Ringkasan Algoritma — 2-pass →](06-ringkasan-algoritma-2pass-reduce-filter-foreach.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
