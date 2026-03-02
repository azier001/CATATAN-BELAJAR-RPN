# 📚 Build Profile Map - PART 7: RINGKASAN ALGORITMA ALTERNATIF 2 (forEach)

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║      📊 PART 7: RINGKASAN ALGORITMA ALTERNATIF 2 (forEach) 📊           ║
║                                                                          ║
║              Bedah Lengkap Pendekatan forEach + External Map             ║
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
- ✅ Memahami cara kerja `forEach` untuk iterasi array
- ✅ Tahu perbedaan `forEach` vs `reduce` vs `for...of`
- ✅ Mengerti kenapa `profileMap` harus dideklarasikan di luar `forEach`
- ✅ Bisa membandingkan pendekatan ini dengan kode utama dan Alternatif 1

---

## 💡 Konsep Inti

> 💡 **Best for:** Functional style yang lebih readable dari reduce, tanpa perlu accumulator

```
Jika profiles kosong → print '' → stop
Inisialisasi profileMap sebagai object kosong di luar forEach
Gunakan forEach untuk iterasi profiles
  Setiap iterasi → destructure langsung di parameter → hitung age → simpan ke profileMap (skip duplikat)
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
  const profileMap = {}

  profiles.forEach(([firstName, lastName, gender, birthYear]) => {
    const fullName = `${firstName} ${lastName}`
    const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'

    if (!profileMap[fullName]) {
      profileMap[fullName] = { firstName, lastName, gender, age }
    }
  })

  const [firstFirstName, firstLastName] = profiles[0]
  console.log(`1. ${firstFirstName} ${firstLastName}:`)

  for (const fullName in profileMap) {
    console.log(`${fullName}:`, profileMap[fullName])
  }
}
```

---

## 📊 Step-by-Step Detail

### 🔵 Di Luar `forEach`:

**1. Guard Clause & Inisialisasi**
- Sama seperti kode utama

**2. `profileMap` dideklarasikan di luar `forEach`**
- Berbeda dengan `reduce` yang punya accumulator bawaan, `forEach` tidak punya
- `profileMap` harus dideklarasikan di luar agar bisa diakses di dalam callback dan setelah `forEach` selesai (scope)

---

### 🔄 Di Dalam `profiles.forEach(([...]) => {...})`:

**3. Parameter `forEach`**
```javascript
profiles.forEach(([firstName, lastName, gender, birthYear]) => {
  ...
})
```
- Tidak ada accumulator seperti `reduce`
- Destructuring langsung di parameter callback
- Memanfaatkan `profileMap` yang sudah dideklarasikan di luar

**4. Kalkulasi Age & Deduplication**
- Sama seperti kode utama
- Jika `fullName` belum ada di `profileMap` → simpan
- Jika sudah ada → skip

---

### 🔵 Di Luar `forEach`:

**5. Print Header & Semua Entry**
- Sama seperti kode utama

---

## 🔍 Visualisasi

```
buildProfileMap([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])

┌──────────────────────────────────────────────────────────────────┐
│  profiles.length === 0? ❌ → lanjut                              │
│  CURRENT_YEAR = 2026                                             │
│  profileMap = {}                                                 │
│                                                                  │
│  forEach mulai                                                   │
│                                                                  │
│  Iterasi 1: ['Christ', 'Evans', 'Male', 1982]                    │
│    fullName = 'Christ Evans'                                     │
│    age = 2026 - 1982 = 44                                        │
│    'Christ Evans' belum ada ✅ → simpan ke profileMap            │
│    profileMap = { 'Christ Evans': { ...data } }                  │
│                                                                  │
│  Iterasi 2: ['Robert', 'Downey', 'Male']                         │
│    fullName = 'Robert Downey'                                    │
│    age = 'Invalid Birth Year'                                    │
│    'Robert Downey' belum ada ✅ → simpan ke profileMap           │
│    profileMap = {                                                │
│      'Christ Evans':  { ...data },                               │
│      'Robert Downey': { ...data }                                │
│    }                                                             │
│                                                                  │
│  forEach selesai                                                 │
│                                                                  │
│  Print: "1. Christ Evans:"                                       │
│  Print: "Christ Evans: { ... }"                                  │
│  Print: "Robert Downey: { ... }"                                 │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🔑 Keywords

- 🔁 **forEach** — method array untuk iterasi tanpa return value
- 📦 **profileMap di luar** — karena forEach tidak punya accumulator, profileMap harus dideklarasikan di luar
- 🔗 **Destructuring di parameter** — sama seperti `reduce`, lebih ringkas
- 🚫 **Tidak ada return value** — forEach selalu return `undefined`
- 🚫 **Tidak bisa break/continue** — gunakan `for...of` jika butuh ini
- ⏱️ **O(n)** complexity

---

## ⚠️ Pitfalls (Jebakan Umum)

**1) ❌ Ekspektasi return value dari `forEach`**
```javascript
// ❌ SALAH — forEach selalu return undefined!
const profileMap = profiles.forEach(([...]) => {
  return { ... }
})
// profileMap = undefined ❌

// ✅ BENAR — gunakan reduce jika butuh return value
const profileMap = profiles.reduce((acc, [...]) => {
  ...
  return acc
}, {})
```

**2) ❌ Pakai `break` atau `continue` di dalam `forEach`**
```javascript
// ❌ SALAH — tidak bisa break/continue di forEach!
profiles.forEach(([...]) => {
  if (someCondition) break    // SyntaxError!
  if (someCondition) continue // SyntaxError!
})

// ✅ BENAR — gunakan for...of jika butuh break/continue
for (const profile of profiles) {
  if (someCondition) break    // ✅
  if (someCondition) continue // ✅
}
```

**3) ❌ `profileMap` dideklarasikan di dalam `forEach`**
```javascript
// ❌ SALAH — profileMap di-reset setiap iterasi!
profiles.forEach(([...]) => {
  const profileMap = {}  // reset tiap iterasi!
})

// ✅ BENAR — deklarasi di luar forEach
const profileMap = {}
profiles.forEach(([...]) => { ... })
```

---

## 💡 Insight Penting

> **Kapan pakai `forEach` vs `reduce` vs `for...of`?**

| | `forEach` | `reduce` | `for...of` |
|---|---|---|---|
| Return value | ❌ Tidak ada | ✅ Ada | ❌ Tidak ada |
| `break`/`continue` | ❌ | ❌ | ✅ |
| Accumulator bawaan | ❌ | ✅ | ❌ |
| Readability | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |

> **Kenapa `forEach` tidak bisa `break`?**
> Karena `forEach` adalah method yang menjalankan callback untuk **setiap elemen tanpa pengecualian**. Tidak ada mekanisme untuk menghentikannya di tengah jalan. Jika butuh kontrol penuh, gunakan `for...of`.

> **Apa bedanya dengan Alternatif 1 (reduce)?**
> Keduanya functional style, tapi `forEach` lebih mudah dibaca karena tidak perlu `return acc`. Trade-off-nya: `forEach` butuh deklarasi `profileMap` secara terpisah di luar, sedangkan `reduce` langsung pakai accumulator bawaan.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📊 [← Kembali ke Part 6: Ringkasan Algoritma Alternatif 1 (reduce)](06-ringkasan-algoritma-alternatif-1-reduce.md)**
- **📊 [Lanjut ke Part 8: Ringkasan Algoritma Alternatif 3 (Object.entries) →](08-ringkasan-algoritma-alternatif-3-objectentries.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
