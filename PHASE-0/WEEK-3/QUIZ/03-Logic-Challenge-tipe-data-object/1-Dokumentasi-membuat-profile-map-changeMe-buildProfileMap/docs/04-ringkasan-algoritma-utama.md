# 📚 Build Profile Map - PART 4: RINGKASAN ALGORITMA UTAMA

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           📊 PART 4: RINGKASAN ALGORITMA UTAMA 📊                       ║
║                                                                          ║
║                 Bedah Lengkap Cara Kerja buildProfileMap                 ║
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
- ✅ Memahami alur kerja `buildProfileMap` secara menyeluruh
- ✅ Tahu mengapa setiap bagian kode ditulis seperti itu
- ✅ Mengenal konsep early return, deduplication, dan scope
- ✅ Siap membandingkan dengan solusi alternatif di Part 5

---

## 💡 Konsep Inti

> 💡 **Best for:** Pemula, clarity, learning, debugging

```
Jika profiles kosong → print '' → stop
Inisialisasi profileMap sebagai object kosong
Loop setiap profile → destructure → hitung age → simpan ke profileMap (skip duplikat)
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
```

---

## 📊 Step-by-Step Detail

### 🔵 Di Luar Loop:

**1. Guard Clause `if (profiles.length === 0)`**
- Dicek **paling awal** sebelum apapun dijalankan
- Prinsip *early return* — keluar secepat mungkin jika kondisi tidak memenuhi syarat
- Jika kosong → print `''` → `return` → fungsi berhenti

**2. Inisialisasi `CURRENT_YEAR` dan `profileMap`**
- `CURRENT_YEAR` diambil dari `new Date().getFullYear()` — dinamis, tidak perlu update manual
- `profileMap` dideklarasikan **sebelum loop** agar bisa diakses di luar loop (scope)

---

### 🔄 Di Dalam Loop `for (const profile of profiles)`:

**3. Destructuring**
```javascript
const [firstName, lastName, gender, birthYear] = profile
```
- Mengambil setiap elemen array berdasarkan posisinya
- Jika `birthYear` tidak ada → nilainya `undefined`

**4. Kalkulasi Age**
```javascript
const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'
```
- `birthYear` truthy? → hitung umur
- `birthYear` falsy (undefined/null/0)? → `'Invalid Birth Year'`

**5. Deduplication**
```javascript
const fullName = `${firstName} ${lastName}`
if (!profileMap[fullName]) {
  profileMap[fullName] = { firstName, lastName, gender, age }
}
```
- `fullName` digunakan sebagai **key unik**
- Jika key sudah ada → skip, data pertama yang dipertahankan
- Jika belum ada → simpan data profile

---

### 🔵 Di Luar Loop:

**6. Print Header**
```javascript
const [firstFirstName, firstLastName] = profiles[0]
console.log(`1. ${firstFirstName} ${firstLastName}:`)
```
- Destructuring index pertama dari `profiles`
- Selalu merujuk ke profile **pertama** di array input

**7. Print Semua Entry**
```javascript
for (const fullName in profileMap) {
  console.log(`${fullName}:`, profileMap[fullName])
}
```
- Loop `for...in` untuk iterasi key-value object
- Setiap entry di-print dengan format `fullName: { ...data }`

---

## 🔍 Visualisasi

```
buildProfileMap([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])

┌──────────────────────────────────────────────────────────────────┐
│  profiles.length === 0? ❌ → lanjut                              │
│  CURRENT_YEAR = 2026                                             │
│  profileMap = {}                                                 │
│                                                                  │
│  profile = ['Christ', 'Evans', 'Male', 1982]                     │
│    firstName='Christ', lastName='Evans', birthYear=1982          │
│    age = 2026 - 1982 = 44                                        │
│    fullName = 'Christ Evans'                                     │
│    'Christ Evans' belum ada ✅ → simpan                          │
│                                                                  │
│  profile = ['Robert', 'Downey', 'Male']                          │
│    firstName='Robert', lastName='Downey', birthYear=undefined    │
│    age = 'Invalid Birth Year'                                    │
│    fullName = 'Robert Downey'                                    │
│    'Robert Downey' belum ada ✅ → simpan                         │
│                                                                  │
│  profileMap = {                                                  │
│    'Christ Evans':  { firstName, lastName, gender, age: 44 }     │
│    'Robert Downey': { firstName, lastName, gender,               │
│                       age: 'Invalid Birth Year' }                │
│  }                                                               │
│                                                                  │
│  Print: "1. Christ Evans:"                                       │
│  Print: "Christ Evans: { ... }"                                  │
│  Print: "Robert Downey: { ... }"                                 │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🔑 Keywords

- 🛡️ **Early Return** — keluar lebih awal jika kondisi tidak terpenuhi
- 🗂️ **profileMap** — object sebagai key-value store, key adalah fullName
- 🔗 **Destructuring** — mengambil nilai array/object secara langsung
- ⚡ **Ternary Operator** — pengganti if/else untuk logika sederhana
- 🔁 **for...of** — iterasi nilai array
- 🔁 **for...in** — iterasi key object
- ⏱️ **O(n)** complexity

---

## ⚠️ Pitfalls (Jebakan Umum)

**1) ❌ `profileMap` dideklarasikan di dalam loop**
```javascript
// ❌ SALAH — profileMap di-reset setiap iterasi!
for (const profile of profiles) {
  const profileMap = {}
}

// ✅ BENAR — deklarasi di luar loop
const profileMap = {}
for (const profile of profiles) { ... }
```

**2) ❌ Kalkulasi age terbalik**
```javascript
// ❌ SALAH — hasil negatif!
const age = birthYear ? birthYear - CURRENT_YEAR : 'Invalid Birth Year'

// ✅ BENAR
const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'
```

**3) ❌ Early return di bawah loop**
```javascript
// ❌ KURANG OPTIMAL — loop jalan dulu baru cek kosong
for (const profile of profiles) { ... }
if (profiles.length === 0) { return }

// ✅ BENAR — cek dulu sebelum apapun dijalankan
if (profiles.length === 0) { return }
for (const profile of profiles) { ... }
```

**4) ❌ Print object langsung tanpa loop**
```javascript
// ❌ SALAH — print seluruh object sekaligus
console.log(profileMap)

// ✅ BENAR — iterasi per entry
for (const fullName in profileMap) {
  console.log(`${fullName}:`, profileMap[fullName])
}
```

**5) ❌ Gabungkan object ke template literal**
```javascript
// ❌ SALAH — hasil [object Object]
console.log(`${fullName}: ${profileMap[fullName]}`)

// ✅ BENAR — pisah dengan koma
console.log(`${fullName}:`, profileMap[fullName])
```

---

## 💡 Insight Penting

> **Kenapa `new Date().getFullYear()` lebih baik dari hardcode tahun?**
> Karena bersifat dinamis — otomatis menyesuaikan tahun berjalan tanpa perlu update manual setiap tahun. Angka yang berdiri sendiri dalam kode disebut *magic number* dan sebaiknya dihindari.

> **Kenapa `fullName` dipakai sebagai key di `profileMap`?**
> Karena object JavaScript tidak bisa memiliki key yang sama dua kali — ini memanfaatkan sifat object untuk deduplication secara otomatis dan efisien tanpa perlu logika tambahan.

> **Kenapa `for...in` untuk object dan `for...of` untuk array?**
> `for...of` mengiterasi **nilai** (cocok untuk array), sedangkan `for...in` mengiterasi **key** (cocok untuk object). Menukarnya akan menyebabkan hasil yang tidak diharapkan.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔧 [← Kembali ke Part 3: Refactoring](03-refactoring.md)**
- **🔀 [Lanjut ke Part 5: Solusi Alternatif →](05-solusi-alternatif.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
