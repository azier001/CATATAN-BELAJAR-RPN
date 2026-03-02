# 📚 Build Profile Map - PART 6: RINGKASAN ALGORITMA ALTERNATIF 1 (reduce)

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║       📊 PART 6: RINGKASAN ALGORITMA ALTERNATIF 1 (reduce) 📊           ║
║                                                                          ║
║                  Bedah Lengkap Pendekatan Functional Style               ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 💡 Konsep | 📋 Kode | 📊 Step-by-Step | 🔍 Visualisasi | 🔑 Keywords | ⚠️ Pitfalls | 💡 Insight |
|:---------:|:-------:|:---------------:|:--------------:|:-----------:|:-----------:|:----------:|
| [Jump](#-konsep-inti) | [Jump](#-kode) | [Jump](#-step-by-step-detail) | [Jump](#-visualisasi) | [Jump](#-keywords) | [Jump](#️-pitfalls-jebakan-umum) | [Jump](#-insight-penting) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja `reduce` untuk membangun object
- ✅ Tahu peran accumulator dan initial value
- ✅ Mengerti kenapa `return acc` wajib ada
- ✅ Bisa membandingkan pendekatan ini dengan kode utama

---

## 💡 Konsep Inti

> 💡 **Best for:** Functional programming style, mengubah array menjadi satu nilai tunggal

```
Jika profiles kosong → print '' → stop
Gunakan reduce untuk membangun profileMap dari array profiles
  Initial value: {} (object kosong sebagai accumulator)
  Setiap iterasi → destructure langsung di parameter → hitung age → simpan ke acc (skip duplikat) → return acc
Print header dari profile pertama
Loop profileMap → print setiap entry
```

---

## 📋 Kode

```javascript
const buildProfileMap = (profiles) => {
  if (profiles.length === 0) {
    console.log('')
    return
  }

  const CURRENT_YEAR = new Date().getFullYear()

  const profileMap = profiles.reduce((acc, [firstName, lastName, gender, birthYear]) => {
    const fullName = `${firstName} ${lastName}`
    const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'

    if (!acc[fullName]) {
      acc[fullName] = { firstName, lastName, gender, age }
    }

    return acc
  }, {})

  const [firstFirstName, firstLastName] = profiles[0]
  console.log(`1. ${firstFirstName} ${firstLastName}:`)

  for (const fullName in profileMap) {
    console.log(`${fullName}:`, profileMap[fullName])
  }
}
```

---

## 📊 Step-by-Step Detail

### 🔵 Di Luar `reduce`:

**1. Guard Clause & Inisialisasi `CURRENT_YEAR`**
- Sama seperti kode utama

---

### 🔄 Di Dalam `profiles.reduce((acc, [...]) => {...}, {})`:

**2. Parameter `reduce`**
```javascript
profiles.reduce((acc, [firstName, lastName, gender, birthYear]) => {
  ...
}, {})
```
- `acc` — accumulator, dimulai dari `{}` (object kosong sebagai initial value)
- `[firstName, lastName, gender, birthYear]` — destructuring langsung di parameter callback, tidak perlu baris terpisah
- `{}` — initial value, nilai awal accumulator sebelum iterasi pertama

**3. Kalkulasi Age & Deduplication**
- Sama seperti kode utama
- Jika `fullName` belum ada di `acc` → simpan
- Jika sudah ada → skip

**4. `return acc`**
- **Wajib ada!** Setiap iterasi harus return `acc`
- Tanpa `return acc`, accumulator akan jadi `undefined` di iterasi berikutnya
- Hasil akhir `reduce` adalah nilai `acc` setelah iterasi terakhir

---

### 🔵 Di Luar `reduce`:

**5. Print Header & Semua Entry**
- Sama seperti kode utama

---

## 🔍 Visualisasi

```
buildProfileMap([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])

┌──────────────────────────────────────────────────────────────────┐
│  profiles.length === 0? ❌ → lanjut                              │
│  CURRENT_YEAR = 2026                                             │
│                                                                  │
│  reduce mulai, acc = {}                                          │
│                                                                  │
│  Iterasi 1: ['Christ', 'Evans', 'Male', 1982]                    │
│    fullName = 'Christ Evans'                                     │
│    age = 2026 - 1982 = 44                                        │
│    'Christ Evans' belum ada ✅ → simpan ke acc                   │
│    return acc = { 'Christ Evans': { ...data } }                  │
│                                                                  │
│  Iterasi 2: ['Robert', 'Downey', 'Male']                         │
│    fullName = 'Robert Downey'                                    │
│    age = 'Invalid Birth Year'                                    │
│    'Robert Downey' belum ada ✅ → simpan ke acc                  │
│    return acc = {                                                │
│      'Christ Evans':  { ...data },                               │
│      'Robert Downey': { ...data }                                │
│    }                                                             │
│                                                                  │
│  reduce selesai → profileMap = acc                               │
│                                                                  │
│  Print: "1. Christ Evans:"                                       │
│  Print: "Christ Evans: { ... }"                                  │
│  Print: "Robert Downey: { ... }"                                 │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🔑 Keywords

- 🔁 **reduce** — method array untuk mengakumulasi nilai menjadi satu hasil akhir
- 📦 **accumulator (acc)** — wadah yang terus diupdate setiap iterasi
- 🎯 **Initial value `{}`** — nilai awal accumulator sebelum iterasi pertama
- 🔗 **Destructuring di parameter** — lebih ringkas, tidak perlu baris terpisah
- ↩️ **return acc** — wajib ada agar accumulator tidak jadi `undefined`
- ⏱️ **O(n)** complexity

---

## ⚠️ Pitfalls (Jebakan Umum)

**1) ❌ Lupa `return acc`**
```javascript
// ❌ SALAH — acc jadi undefined di iterasi berikutnya!
profiles.reduce((acc, [...]) => {
  acc[fullName] = { ... }
  // lupa return!
}, {})

// ✅ BENAR
profiles.reduce((acc, [...]) => {
  acc[fullName] = { ... }
  return acc
}, {})
```

**2) ❌ Tidak ada initial value**
```javascript
// ❌ SALAH — element pertama jadi acc, bukan object kosong
profiles.reduce((acc, [...]) => { ... })

// ✅ BENAR — selalu sertakan initial value
profiles.reduce((acc, [...]) => { ... }, {})
```

**3) ❌ Destructuring di luar parameter (tidak perlu)**
```javascript
// ❌ TIDAK PERLU — lebih verbose
profiles.reduce((acc, profile) => {
  const [firstName, lastName, gender, birthYear] = profile
  ...
}, {})

// ✅ LEBIH RINGKAS — destructuring langsung di parameter
profiles.reduce((acc, [firstName, lastName, gender, birthYear]) => {
  ...
}, {})
```

---

## 💡 Insight Penting

> **Kapan pakai `reduce` vs `for...of`?**
> Gunakan `reduce` ketika tujuannya adalah **mengubah array menjadi satu nilai tunggal** (object, angka, string, dll). Gunakan `for...of` ketika logikanya lebih kompleks atau butuh `break`/`continue`.

> **Kenapa `return acc` wajib?**
> Karena `reduce` menggunakan return value dari setiap iterasi sebagai `acc` di iterasi berikutnya. Tanpa `return acc`, JavaScript akan mengoper `undefined` ke iterasi selanjutnya dan semua data hilang.

> **Apa bedanya dengan kode utama?**
> Logika dan output sama persis. Perbedaannya hanya style — `reduce` lebih functional dan tidak memerlukan deklarasi `profileMap` secara terpisah karena langsung menggunakan accumulator bawaan.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔀 [← Kembali ke Part 5: Solusi Alternatif](05-solusi-alternatif.md)**
- **📊 [Lanjut ke Part 7: Ringkasan Algoritma Alternatif 2 (forEach) →](07-ringkasan-algoritma-alternatif-2-foreach.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
