# 📚 Build Profile Map - PART 2: ANALISIS KODE ORIGINAL

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 PART 2: ANALISIS KODE ORIGINAL 📋                       ║
║                                                                          ║
║                   Apakah Kode Sudah Sesuai Kriteria?                     ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📋 Kode Original | ✅ Yang Benar | ❌ Yang Bermasalah | 🔧 Proses Perbaikan | 📊 Kesimpulan |
|:----------------:|:------------:|:-----------------:|:-------------------:|:-------------:|
| [Jump](#-kode-original) | [Jump](#-yang-sudah-benar) | [Jump](#-yang-bermasalah) | [Jump](#-proses-perbaikan-step-by-step) | [Jump](#-kesimpulan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja kode original
- ✅ Tahu bagian mana yang sudah benar
- ✅ Tahu bagian mana yang bermasalah dan kenapa
- ✅ Mengikuti proses perbaikan step by step

---

## 📋 Kode Original

```javascript
function changeMe(arr) {
  const resultObject = {}

  for (const profile of arr) {
    const [firstName, lastName, gender, year] = profile

    let age;

    if (year) {
      age = 2026 - year
    } else {
      age = 'Invalid Birth Year'
    }

    const fullName = `${firstName} ${lastName}`

    if (!resultObject[fullName]) {
      resultObject[fullName] = {
        firstName,
        lastName,
        gender,
        age
      }
    }
  }

  if (arr.length > 0) {
    const firstOutput = `1. ${arr[0][0]} ${arr[0][1]}:`

    console.log(firstOutput)
    console.log(resultObject)        // ← masalah di sini
  } else {
    console.log('')
  }
}
```

---

## ✅ Yang Sudah Benar

### Logika inti sudah tepat:

```javascript
// ✅ Destructuring array profile
const [firstName, lastName, gender, year] = profile

// ✅ Kalkulasi age dengan handle undefined
if (year) {
  age = 2026 - year
} else {
  age = 'Invalid Birth Year'
}

// ✅ Build fullName sebagai key unik
const fullName = `${firstName} ${lastName}`

// ✅ Deduplication — data pertama yang dipertahankan
if (!resultObject[fullName]) {
  resultObject[fullName] = { firstName, lastName, gender, age }
}

// ✅ Handle empty array → print ""
console.log('')
```

---

## ❌ Yang Bermasalah

### Masalah: `console.log(resultObject)` print seluruh object sekaligus

```javascript
if (arr.length > 0) {
  const firstOutput = `1. ${arr[0][0]} ${arr[0][1]}:`

  console.log(firstOutput)
  console.log(resultObject)   // ❌ print semua sekaligus dalam satu baris
}
```

**Ekspektasi output:**
```
1. Christ Evans:
Christ Evans: { firstName: 'Christ', ... }
Robert Downey: { firstName: 'Robert', ... }
```

**Output yang dihasilkan:**
```
1. Christ Evans:
{ 'Christ Evans': { firstName: 'Christ', ... }, 'Robert Downey': { firstName: 'Robert', ... } }
```

Perbedaannya: `console.log(resultObject)` print **seluruh object sekaligus** dalam satu baris, bukan per entry satu per satu.

---

## 🔧 Proses Perbaikan Step by Step

### Step 1 — Ganti `console.log(resultObject)` dengan loop

```javascript
// ❌ Sebelum
console.log(resultObject)

// ✅ Sesudah — iterasi per entry
for (const key in resultObject) {
  console.log(`${key}:`, resultObject[key])
}
```

---

### Step 2 — Tapi `console.log(\`${key}: ${resultObject[key]}\`)` tidak akan bekerja!

Jika kamu menggabungkan object ke dalam template literal, hasilnya adalah `[object Object]`:

```javascript
// ❌ Salah — object jadi [object Object]
console.log(`${key}: ${resultObject[key]}`)
// Output: Christ Evans: [object Object]

// ✅ Benar — pisahkan dengan koma
console.log(`${key}:`, resultObject[key])
// Output: Christ Evans: { firstName: 'Christ', ... }
```

**Kenapa?** Karena template literal memanggil `.toString()` pada object, yang hasilnya selalu `[object Object]`. Dengan memisahkan argumen menggunakan koma, `console.log` menangani keduanya secara terpisah.

---

### Step 3 — Hasil setelah diperbaiki

```javascript
if (arr.length > 0) {
  const firstOutput = `1. ${arr[0][0]} ${arr[0][1]}:`

  console.log(firstOutput)

  for (const key in resultObject) {    // ✅ iterasi per entry
    console.log(`${key}:`, resultObject[key])  // ✅ pisah dengan koma
  }
} else {
  console.log('')
}
```

**Output sekarang:**
```
1. Christ Evans:
Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 44 }
Robert Downey: { firstName: 'Robert', lastName: 'Downey', gender: 'Male', age: 'Invalid Birth Year' }
```

---

## 📊 Kesimpulan

| Aspek | Status |
|-------|--------|
| Destructuring profile | ✅ Benar |
| Kalkulasi age | ✅ Benar |
| Deduplication | ✅ Benar |
| Handle empty array | ✅ Benar |
| Format output per entry | ❌ Bermasalah → sudah diperbaiki |
| Naming convention | ⚠️ Kurang deskriptif → akan direfactor di Part 3 |

Kode sudah bisa menghasilkan output yang benar setelah perbaikan. Selanjutnya di Part 3 kita akan refactor ke clean code yang lebih baik.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 1: Soal & Kriteria](01-soal-dan-kriteria.md)**
- **🔧 [Lanjut ke Part 3: Refactoring →](03-refactoring.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
