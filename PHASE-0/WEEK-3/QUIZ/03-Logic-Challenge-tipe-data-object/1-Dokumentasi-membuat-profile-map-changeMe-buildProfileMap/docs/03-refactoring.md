# 📚 Build Profile Map - PART 3: REFACTORING STEP-BY-STEP

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              🔧 PART 3: REFACTORING STEP-BY-STEP 🔧                     ║
║                                                                          ║
║              Dari Kode Original ke Kode yang Lebih Bersih                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔧 Tahap 1 | 🔧 Tahap 2 | 🔧 Tahap 3 | 🔧 Tahap 4 | ✅ Kode Final |
|:---------:|:---------:|:---------:|:---------:|:------------:|
| [Jump](#-tahap-1--nama-fungsi--parameter) | [Jump](#-tahap-2--loop--kalkulasi-age) | [Jump](#-tahap-3--building-object--deduplication) | [Jump](#-tahap-4--output) | [Jump](#-kode-final) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami proses refactoring secara bertahap
- ✅ Tahu alasan di balik setiap perubahan nama dan struktur
- ✅ Mengenal prinsip early return, magic number, dan ternary operator
- ✅ Bisa menulis kode yang lebih clean, readable, dan optimal

---

## 🔧 Tahap 1 — Nama Fungsi & Parameter

```javascript
// ❌ Sebelum
function changeMe(arr) {

// ✅ Sesudah
const buildProfileMap = (profiles) => {
```

**Yang berubah:**

| Sebelum | Sesudah | Alasan |
|---------|---------|--------|
| `changeMe` | `buildProfileMap` | `changeMe` tidak menjelaskan apa yang dilakukan fungsi — hindari nama ambigu |
| `arr` | `profiles` | `arr` hanya menjelaskan bentuk data (array), bukan isinya — `profiles` lebih deskriptif |
| `function` declaration | arrow function | Konsistensi style modern JavaScript |

---

## 🔧 Tahap 2 — Loop & Kalkulasi Age

```javascript
// ❌ Sebelum
for (const profile of arr) {
  const [firstName, lastName, gender, year] = profile

  let age;

  if (year) {
    age = 2026 - year
  } else {
    age = 'Invalid Birth Year'
  }

// ✅ Sesudah
const CURRENT_YEAR = new Date().getFullYear()

for (const profile of profiles) {
  const [firstName, lastName, gender, birthYear] = profile

  const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'
```

**Yang berubah:**

| Sebelum | Sesudah | Alasan |
|---------|---------|--------|
| `2026` hardcode | `new Date().getFullYear()` | Dinamis — otomatis menyesuaikan tahun berjalan, tidak perlu update manual. Angka berdiri sendiri disebut *magic number* dan sebaiknya dihindari |
| `year` | `birthYear` | Lebih spesifik — jelas bahwa itu tahun lahir, bukan year yang lain |
| `let age` + if/else | `const age` + ternary | Logikanya simpel, ternary lebih ringkas dan `age` bisa jadi `const` |

---

## 🔧 Tahap 3 — Building Object & Deduplication

```javascript
// ❌ Sebelum
const resultObject = {}

const fullName = `${firstName} ${lastName}`

if (!resultObject[fullName]) {
  resultObject[fullName] = {
    firstName,
    lastName,
    gender,
    age
  }
}

// ✅ Sesudah
const profileMap = {}

const fullName = `${firstName} ${lastName}`

if (!profileMap[fullName]) {
  profileMap[fullName] = {
    firstName,
    lastName,
    gender,
    age
  }
}
```

**Yang berubah:**

| Sebelum | Sesudah | Alasan |
|---------|---------|--------|
| `resultObject` | `profileMap` | Lebih deskriptif — jelas bahwa ini adalah *map* data profile yang di-index berdasarkan nama lengkap |

> **Catatan:** Logika deduplication `if (!profileMap[fullName])` sudah bagus dan tidak perlu diubah — artinya kalau nama yang sama sudah ada di map, skip.

---

## 🔧 Tahap 4 — Output

```javascript
// ❌ Sebelum
if (arr.length > 0) {
  const firstOutput = `1. ${arr[0][0]} ${arr[0][1]}:`

  console.log(firstOutput)

  for (const key in resultObject) {
    console.log(`${key}:`, resultObject[key])
  }
} else {
  console.log('')
}

// ✅ Sesudah
if (profiles.length === 0) {
  console.log('')
  return
}

const [firstFirstName, firstLastName] = profiles[0]
console.log(`1. ${firstFirstName} ${firstLastName}:`)

for (const fullName in profileMap) {
  console.log(`${fullName}:`, profileMap[fullName])
}
```

**Yang berubah:**

| Sebelum | Sesudah | Alasan |
|---------|---------|--------|
| if/else besar | Early return pattern | Daripada membungkus semua logika dalam `if`, handle edge case di awal lalu `return` — kode utama tidak perlu di-indent dalam blok `if` |
| `arr[0][0]`, `arr[0][1]` | Destructuring `firstFirstName`, `firstLastName` | Akses index langsung susah dibaca — destructuring lebih eksplisit |
| Variabel `firstOutput` | Langsung ke `console.log` | Variabel yang hanya dipakai sekali tidak perlu disimpan |
| `key` | `fullName` | Lebih deskriptif — menjelaskan apa isi key-nya |

---

## ✅ Kode Final

```javascript
const buildProfileMap = (profiles) => {
  if (profiles.length === 0) {
    console.log('')
    return
  }

  const CURRENT_YEAR = new Date().getFullYear()
  const profileMap = {}

  for (const profile of profiles) {
    const [firstName, lastName, gender, birthYear] = profile

    const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'

    const fullName = `${firstName} ${lastName}`

    if (!profileMap[fullName]) {
      profileMap[fullName] = {
        firstName,
        lastName,
        gender,
        age
      }
    }
  }

  const [firstFirstName, firstLastName] = profiles[0]
  console.log(`1. ${firstFirstName} ${firstLastName}:`)

  for (const fullName in profileMap) {
    console.log(`${fullName}:`, profileMap[fullName])
  }
}

// TEST CASES
buildProfileMap([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])
buildProfileMap([])
```

---

## 📊 Perbandingan Before & After

| Aspek | Before | After |
|-------|--------|-------|
| Nama fungsi | `changeMe` | `buildProfileMap` |
| Parameter | `arr` | `profiles` |
| Konstanta year | `2026` (magic number) | `new Date().getFullYear()` |
| Nama variabel year | `year` | `birthYear` |
| Kalkulasi age | `let` + if/else | `const` + ternary |
| Nama object | `resultObject` | `profileMap` |
| Kondisi empty | if/else besar | Early return |
| Akses index pertama | `arr[0][0]`, `arr[0][1]` | Destructuring |
| Loop output | `key` | `fullName` |

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa early return lebih baik dari if/else?</strong></summary>

Karena membuat kode lebih mudah dibaca. Dengan early return, kita tahu langsung di awal bahwa kondisi tertentu akan menghentikan fungsi. Kode utama tidak perlu dibungkus dalam blok `if` yang dalam — lebih flat, lebih bersih.

</details>

<details>
<summary><strong>❓ Apa itu magic number?</strong></summary>

Magic number adalah angka yang berdiri sendiri dalam kode tanpa penjelasan konteks. Contoh: `2026` — pembaca kode tidak tahu angka ini mewakili apa. Solusinya: jadikan konstanta dengan nama deskriptif seperti `CURRENT_YEAR`, atau gunakan `new Date().getFullYear()` agar dinamis.

</details>

<details>
<summary><strong>❓ Kenapa CURRENT_YEAR menggunakan huruf kapital semua?</strong></summary>

Konvensi umum JavaScript: konstanta yang nilainya tetap dan diketahui saat runtime ditulis dengan `SCREAMING_SNAKE_CASE`. Ini sinyal visual bahwa nilai tersebut tidak akan berubah selama eksekusi fungsi.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 2: Analisis Kode Original](02-analisis-kode-original.md)**
- **📊 [Lanjut ke Part 4: Ringkasan Algoritma Utama →](04-ringkasan-algoritma-utama.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
