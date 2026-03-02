# 📋 Build Profile Map — Ringkasan Algoritma

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           📋 RINGKASAN ALGORITMA — COMPLETE REFERENCE 📋                ║
║        Kode Utama · Alternatif 1 · Alternatif 2 · Alternatif 3          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Versi](https://img.shields.io/badge/Versi-4%20Solusi-success?style=for-the-badge)

---

## 🎯 Tujuan

- ✅ Ringkasan soal dan kriteria dalam satu tempat
- ✅ Ringkasan algoritma semua versi secara detail
- ✅ Quick reference untuk review atau belajar ulang

---

# 🧩 DESKRIPSI CHALLENGE

📝 **Deskripsi**
Diberikan sebuah function `buildProfileMap(profiles)` yang menerima satu parameter berupa array of arrays, di mana setiap inner array berisi data profile seseorang.

🎯 **Tujuan**
Function akan membangun sebuah object/map dari data profile, menghitung umur, menangani duplikat, dan menampilkan hasilnya ke console.

📌 **Contoh:** `profiles = [['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]`
✅ **Output:**
```
1. Christ Evans:
Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 44 }
Robert Downey: { firstName: 'Robert', lastName: 'Downey', gender: 'Male', age: 'Invalid Birth Year' }
```

## 📐 Kriteria

```
  STEP 1 ──▶  Jika array kosong → print "" → stop
      │
  STEP 2 ──▶  Loop setiap profile → destructure → hitung age
      │         Ada birthYear → currentYear - birthYear
      │         Tidak ada     → 'Invalid Birth Year'
      │
  STEP 3 ──▶  Simpan ke profileMap dengan fullName sebagai key (skip duplikat)
      │
  STEP 4 ──▶  Print header "1. firstName lastName:"
      │
  STEP 5 ──▶  Loop profileMap → print setiap entry
```

---

## 📊 Contoh-contoh

### 🔢 Input Normal
> **Tujuan:** Profile lengkap dan tidak lengkap

| Profile | firstName | lastName | birthYear | age |
|---------|-----------|----------|-----------|-----|
| 1 | Christ | Evans | 1982 | 44 |
| 2 | Robert | Downey | undefined | 'Invalid Birth Year' |

```
OUTPUT →
1. Christ Evans:
Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 44 }
Robert Downey: { firstName: 'Robert', lastName: 'Downey', gender: 'Male', age: 'Invalid Birth Year' }
```

---

### 🔢 Input Kosong
> **Tujuan:** Edge case — array kosong

```
buildProfileMap([])

OUTPUT →  ""
```

---

### 🔢 Input dengan Duplikat
> **Tujuan:** Data pertama dipertahankan, duplikat diabaikan

```
buildProfileMap([
  ['Christ', 'Evans', 'Male', 1982],
  ['Christ', 'Evans', 'Male', 1982]   ← duplikat
])

OUTPUT →
1. Christ Evans:
Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 44 }
```

---

> 💡 **Pola Penting:** Object JavaScript tidak bisa memiliki key duplikat — manfaatkan sifat ini untuk deduplication yang elegan dan efisien.

---

═══════════════════════════════════════════════════════════════════════

# 🔄 KODE UTAMA: for...of + for...in

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Pemula%20%7C%20Debugging-green?style=flat-square)
![Complexity](https://img.shields.io/badge/Complexity-O(n)-blue?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative-orange?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Jika profiles kosong → print '' → stop
Inisialisasi profileMap sebagai object kosong
Loop setiap profile → destructure → hitung age → simpan ke profileMap (skip duplikat)
Print header dari profile pertama
Loop profileMap dengan for...in → print setiap entry
```

### **Step-by-Step (Detail):**

#### 🔵 Di Luar Loop:

1. **Guard Clause `if (profiles.length === 0)`**
   - Dicek **paling awal** sebelum apapun dijalankan
   - Prinsip *early return* — keluar secepat mungkin jika kondisi tidak memenuhi syarat
   - Jika kosong → print `''` → `return` → fungsi berhenti

2. **Inisialisasi `CURRENT_YEAR` dan `profileMap`**
   - `CURRENT_YEAR` diambil dari `new Date().getFullYear()` — dinamis, tidak perlu update manual
   - `profileMap` dideklarasikan **sebelum loop** agar bisa diakses di luar loop (scope)

#### 🔄 Di Dalam Loop `for (const profile of profiles)`:

3. **Destructuring**
   - `const [firstName, lastName, gender, birthYear] = profile`
   - Mengambil setiap elemen array berdasarkan posisinya
   - Jika `birthYear` tidak ada → nilainya `undefined`

4. **Kalkulasi Age**
   - `const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'`
   - `birthYear` truthy? → hitung umur
   - `birthYear` falsy (undefined/null/0)? → `'Invalid Birth Year'`

5. **Deduplication**
   - `fullName` digunakan sebagai **key unik**
   - Jika key sudah ada → skip, data pertama yang dipertahankan
   - Jika belum ada → simpan data profile

#### 🔵 Di Luar Loop:

6. **Print Header**
   - Destructuring index pertama dari `profiles`
   - Selalu merujuk ke profile **pertama** di array input

7. **Print Semua Entry dengan `for...in`**
   - Loop `for...in` untuk iterasi key-value object
   - Setiap entry di-print dengan format `fullName: { ...data }`

### **Visualisasi untuk input normal:**
```
┌──────────────────────────────────────────────────────────────────┐
│  profiles.length === 0? ❌ → lanjut                              │
│  CURRENT_YEAR = 2026, profileMap = {}                            │
│                                                                  │
│  profile = ['Christ', 'Evans', 'Male', 1982]                     │
│    birthYear=1982 → age = 2026 - 1982 = 44                       │
│    fullName = 'Christ Evans'                                     │
│    'Christ Evans' belum ada ✅ → simpan                          │
│                                                                  │
│  profile = ['Robert', 'Downey', 'Male']                          │
│    birthYear=undefined → age = 'Invalid Birth Year'              │
│    fullName = 'Robert Downey'                                    │
│    'Robert Downey' belum ada ✅ → simpan                         │
│                                                                  │
│  Print: "1. Christ Evans:"                                       │
│  for...in → Print: "Christ Evans: { ... }"                       │
│  for...in → Print: "Robert Downey: { ... }"                      │
└──────────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- 🛡️ **Early Return** — keluar lebih awal jika kondisi tidak terpenuhi
- 🗂️ **profileMap** — object sebagai key-value store, key adalah fullName
- 🔗 **Destructuring** — mengambil nilai array/object secara langsung
- ⚡ **Ternary Operator** — pengganti if/else untuk logika sederhana
- 🔁 **for...of** — iterasi nilai array
- 🔁 **for...in** — iterasi key object
- ⏱️ **O(n)** complexity

### **Kapan Pakai:**
- ✅ Belajar dan ingin kode yang mudah di-debug
- ✅ Butuh `break`/`continue` di dalam loop
- ✅ Tim belum familiar dengan functional style

### **Pitfalls (Jebakan Umum):**

**1) ❌ `profileMap` dideklarasikan di dalam loop**
```javascript
// ❌ SALAH — profileMap di-reset setiap iterasi!
for (const profile of profiles) {
  const profileMap = {}
}

// ✅ BENAR
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

**3) ❌ Print object langsung tanpa loop**
```javascript
// ❌ SALAH — print seluruh object sekaligus
console.log(profileMap)

// ✅ BENAR — iterasi per entry
for (const fullName in profileMap) {
  console.log(`${fullName}:`, profileMap[fullName])
}
```

**4) ❌ Gabungkan object ke template literal**
```javascript
// ❌ SALAH — hasil [object Object]
console.log(`${fullName}: ${profileMap[fullName]}`)

// ✅ BENAR — pisah dengan koma
console.log(`${fullName}:`, profileMap[fullName])
```

### **💡 Insight Penting:**

> **Kenapa `new Date().getFullYear()` lebih baik dari hardcode tahun?**
> Karena bersifat dinamis — otomatis menyesuaikan tahun berjalan tanpa perlu update manual. Angka yang berdiri sendiri disebut *magic number* dan sebaiknya dihindari.

> **Kenapa `for...in` untuk object dan `for...of` untuk array?**
> `for...of` mengiterasi **nilai** (cocok untuk array), sedangkan `for...in` mengiterasi **key** (cocok untuk object). Menukarnya akan menyebabkan hasil yang tidak diharapkan.

---

═══════════════════════════════════════════════════════════════════════

# 🔀 ALTERNATIF 1: reduce

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Functional%20Programming-purple?style=flat-square)
![Complexity](https://img.shields.io/badge/Complexity-O(n)-blue?style=flat-square)
![Style](https://img.shields.io/badge/Style-Declarative-9cf?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Jika profiles kosong → print '' → stop
Gunakan reduce untuk membangun profileMap dari array profiles
  Initial value: {} (object kosong sebagai accumulator)
  Setiap iterasi → destructure di parameter → hitung age → simpan ke acc → return acc
Print header dari profile pertama
Loop profileMap → print setiap entry
```

### **Step-by-Step (Detail):**

#### 🔵 Di Luar `reduce`:

1. **Guard Clause & Inisialisasi `CURRENT_YEAR`**
   - Sama seperti kode utama

#### 🔄 Di Dalam `profiles.reduce((acc, [...]) => {...}, {})`:

2. **Parameter `reduce`**
   - `acc` — accumulator, dimulai dari `{}` (object kosong sebagai initial value)
   - `[firstName, lastName, gender, birthYear]` — destructuring langsung di parameter callback
   - `{}` — initial value, nilai awal accumulator sebelum iterasi pertama

3. **Kalkulasi Age & Deduplication**
   - Sama seperti kode utama

4. **`return acc`**
   - **Wajib ada!** Setiap iterasi harus return `acc`
   - Tanpa `return acc`, accumulator akan jadi `undefined` di iterasi berikutnya

#### 🔵 Di Luar `reduce`:

5. **Print Header & Semua Entry**
   - Sama seperti kode utama

### **Visualisasi untuk input normal:**
```
┌──────────────────────────────────────────────────────────────────┐
│  profiles.length === 0? ❌ → lanjut                              │
│  CURRENT_YEAR = 2026                                             │
│                                                                  │
│  reduce mulai, acc = {}                                          │
│                                                                  │
│  Iterasi 1: ['Christ', 'Evans', 'Male', 1982]                    │
│    fullName = 'Christ Evans', age = 44                           │
│    'Christ Evans' belum ada ✅ → simpan ke acc                   │
│    return acc = { 'Christ Evans': { ...data } }                  │
│                                                                  │
│  Iterasi 2: ['Robert', 'Downey', 'Male']                         │
│    fullName = 'Robert Downey', age = 'Invalid Birth Year'        │
│    'Robert Downey' belum ada ✅ → simpan ke acc                  │
│    return acc = { 'Christ Evans': {...}, 'Robert Downey': {...} } │
│                                                                  │
│  reduce selesai → profileMap = acc                               │
│  Print: "1. Christ Evans:"                                       │
│  Print: "Christ Evans: { ... }"                                  │
│  Print: "Robert Downey: { ... }"                                 │
└──────────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- 🔁 **reduce** — method array untuk mengakumulasi nilai menjadi satu hasil akhir
- 📦 **accumulator (acc)** — wadah yang terus diupdate setiap iterasi
- 🎯 **Initial value `{}`** — nilai awal accumulator sebelum iterasi pertama
- 🔗 **Destructuring di parameter** — lebih ringkas, tidak perlu baris terpisah
- ↩️ **return acc** — wajib ada agar accumulator tidak jadi `undefined`
- ⏱️ **O(n)** complexity

### **Kapan Pakai:**
- ✅ Tim familiar dengan functional programming
- ✅ Tujuannya jelas: mengubah array → object
- ✅ Ingin kode yang lebih deklaratif

### **Pitfalls (Jebakan Umum):**

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

// ✅ BENAR
profiles.reduce((acc, [...]) => { ... }, {})
```

### **💡 Insight Penting:**

> **Kapan pakai `reduce` vs `for...of`?**
> Gunakan `reduce` ketika tujuannya adalah **mengubah array menjadi satu nilai tunggal** (object, angka, string, dll). Gunakan `for...of` ketika logikanya lebih kompleks atau butuh `break`/`continue`.

> **Kenapa `return acc` wajib?**
> Karena `reduce` menggunakan return value dari setiap iterasi sebagai `acc` di iterasi berikutnya. Tanpa `return acc`, JavaScript mengoper `undefined` ke iterasi selanjutnya dan semua data hilang.

---

═══════════════════════════════════════════════════════════════════════

# 🔁 ALTERNATIF 2: forEach

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Functional%20%2B%20Readable-blue?style=flat-square)
![Complexity](https://img.shields.io/badge/Complexity-O(n)-blue?style=flat-square)
![Style](https://img.shields.io/badge/Style-Functional-9cf?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Jika profiles kosong → print '' → stop
Inisialisasi profileMap di luar forEach
Gunakan forEach untuk iterasi profiles
  Setiap iterasi → destructure di parameter → hitung age → simpan ke profileMap (skip duplikat)
Print header dari profile pertama
Loop profileMap → print setiap entry
```

### **Step-by-Step (Detail):**

#### 🔵 Di Luar `forEach`:

1. **Guard Clause & Inisialisasi**
   - Sama seperti kode utama

2. **`profileMap` dideklarasikan di luar `forEach`**
   - Berbeda dengan `reduce` yang punya accumulator bawaan, `forEach` tidak punya
   - `profileMap` harus dideklarasikan di luar agar bisa diakses di dalam callback dan setelah `forEach` selesai

#### 🔄 Di Dalam `profiles.forEach(([...]) => {...})`:

3. **Destructuring langsung di parameter callback**
   - Tidak ada accumulator seperti `reduce`
   - Memanfaatkan `profileMap` yang sudah dideklarasikan di luar

4. **Kalkulasi Age & Deduplication**
   - Sama seperti kode utama

#### 🔵 Di Luar `forEach`:

5. **Print Header & Semua Entry**
   - Sama seperti kode utama

### **Visualisasi untuk input normal:**
```
┌──────────────────────────────────────────────────────────────────┐
│  profiles.length === 0? ❌ → lanjut                              │
│  CURRENT_YEAR = 2026, profileMap = {}                            │
│                                                                  │
│  forEach mulai                                                   │
│                                                                  │
│  Iterasi 1: ['Christ', 'Evans', 'Male', 1982]                    │
│    fullName = 'Christ Evans', age = 44                           │
│    'Christ Evans' belum ada ✅ → simpan ke profileMap            │
│                                                                  │
│  Iterasi 2: ['Robert', 'Downey', 'Male']                         │
│    fullName = 'Robert Downey', age = 'Invalid Birth Year'        │
│    'Robert Downey' belum ada ✅ → simpan ke profileMap           │
│                                                                  │
│  forEach selesai                                                 │
│  Print: "1. Christ Evans:"                                       │
│  Print: "Christ Evans: { ... }"                                  │
│  Print: "Robert Downey: { ... }"                                 │
└──────────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- 🔁 **forEach** — method array untuk iterasi tanpa return value
- 📦 **profileMap di luar** — karena forEach tidak punya accumulator
- 🔗 **Destructuring di parameter** — lebih ringkas dari kode utama
- 🚫 **Tidak ada return value** — forEach selalu return `undefined`
- 🚫 **Tidak bisa break/continue** — gunakan `for...of` jika butuh ini
- ⏱️ **O(n)** complexity

### **Kapan Pakai:**
- ✅ Ingin functional style tapi lebih readable dari `reduce`
- ✅ Tidak butuh return value dari loop
- ✅ Tidak butuh `break`/`continue`

### **Pitfalls (Jebakan Umum):**

**1) ❌ Ekspektasi return value dari `forEach`**
```javascript
// ❌ SALAH — forEach selalu return undefined!
const profileMap = profiles.forEach(([...]) => {
  return { ... }
})
// profileMap = undefined ❌

// ✅ BENAR — gunakan reduce jika butuh return value
const profileMap = profiles.reduce((acc, [...]) => { ... }, {})
```

**2) ❌ Pakai `break` di dalam `forEach`**
```javascript
// ❌ SALAH — SyntaxError!
profiles.forEach(([...]) => {
  if (someCondition) break
})

// ✅ BENAR — gunakan for...of
for (const profile of profiles) {
  if (someCondition) break
}
```

### **💡 Insight Penting:**

> **Kapan pakai `forEach` vs `reduce` vs `for...of`?**

| | `forEach` | `reduce` | `for...of` |
|---|---|---|---|
| Return value | ❌ | ✅ | ❌ |
| `break`/`continue` | ❌ | ❌ | ✅ |
| Accumulator bawaan | ❌ | ✅ | ❌ |
| Readability | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |

---

═══════════════════════════════════════════════════════════════════════

# 🔑 ALTERNATIF 3: Object.entries

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Chaining%20Output-gold?style=flat-square)
![Complexity](https://img.shields.io/badge/Complexity-O(n)-blue?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative%20%2B%20Functional-brightgreen?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const buildProfileMap = (profiles) => {
  if (profiles.length === 0) {
    console.log('')
    return
  }

  const CURRENT_YEAR = new Date().getFullYear()
  const profileMap = {}

  for (const [firstName, lastName, gender, birthYear] of profiles) {
    const fullName = `${firstName} ${lastName}`
    const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'

    if (!profileMap[fullName]) {
      profileMap[fullName] = { firstName, lastName, gender, age }
    }
  }

  const [firstFirstName, firstLastName] = profiles[0]
  console.log(`1. ${firstFirstName} ${firstLastName}:`)

  Object.entries(profileMap).forEach(([fullName, data]) => {
    console.log(`${fullName}:`, data)
  })
}
```

</details>

### **Konsep Inti:**
```
Jika profiles kosong → print '' → stop
Inisialisasi profileMap sebagai object kosong
Loop profiles dengan destructuring langsung di for...of
  Hitung age → simpan ke profileMap (skip duplikat)
Print header dari profile pertama
Object.entries → ubah profileMap jadi array of [key, value] pairs
forEach → destructure [fullName, data] → print setiap entry
```

### **Step-by-Step (Detail):**

#### 🔵 Bagian Building Map:

1. **Destructuring langsung di `for...of`**
   - `for (const [firstName, lastName, gender, birthYear] of profiles)`
   - Lebih ringkas dari kode utama yang destructuring di dalam loop

2. **Kalkulasi Age & Deduplication**
   - Sama seperti kode utama

#### 🔵 Bagian Output:

3. **`Object.entries(profileMap)`**
   - Mengubah object menjadi array of `[key, value]` pairs
   ```javascript
   // Input:
   { 'Christ Evans': { ...data }, 'Robert Downey': { ...data } }

   // Output Object.entries:
   [
     ['Christ Evans', { ...data }],
     ['Robert Downey', { ...data }]
   ]
   ```
   - Lalu di-`forEach` dengan destructuring `[fullName, data]` di parameter

### **Visualisasi untuk input normal:**
```
┌──────────────────────────────────────────────────────────────────┐
│  ... (building map sama seperti kode utama) ...                  │
│                                                                  │
│  profileMap = {                                                  │
│    'Christ Evans':  { ...data },                                 │
│    'Robert Downey': { ...data }                                  │
│  }                                                               │
│                                                                  │
│  Print: "1. Christ Evans:"                                       │
│                                                                  │
│  Object.entries →                                                │
│  [                                                               │
│    ['Christ Evans',  { ...data }],                               │
│    ['Robert Downey', { ...data }]                                │
│  ]                                                               │
│                                                                  │
│  forEach Iterasi 1: fullName='Christ Evans', data={...}          │
│    Print: "Christ Evans: { ... }"                                │
│                                                                  │
│  forEach Iterasi 2: fullName='Robert Downey', data={...}         │
│    Print: "Robert Downey: { ... }"                               │
└──────────────────────────────────────────────────────────────────┘
```

### **Keywords:**
- 🔑 **Object.entries** — mengubah object menjadi array of `[key, value]` pairs
- 🔗 **Destructuring di parameter** — `[fullName, data]` langsung di callback `forEach`
- 🔒 **Own properties only** — lebih aman dari `for...in`
- ⛓️ **Chainable** — bisa di-chain dengan `.map()`, `.filter()`, `.sort()`
- ⏱️ **O(n)** complexity

### **Kapan Pakai:**
- ✅ Ingin chain output dengan `.map()`, `.filter()`, `.sort()`
- ✅ Butuh destructuring key dan value sekaligus
- ✅ Ingin menghindari inherited properties dari `for...in`

### **Pitfalls (Jebakan Umum):**

**1) ❌ Bingung `Object.entries` vs `Object.keys` vs `Object.values`**
```javascript
Object.keys(profileMap)    // → ['Christ Evans']          (hanya key)
Object.values(profileMap)  // → [{ age: 44, ... }]        (hanya value)
Object.entries(profileMap) // → [['Christ Evans', {...}]] (key + value) ✅
```

**2) ❌ Lupa destructuring hasil `Object.entries`**
```javascript
// ❌ KURANG OPTIMAL
Object.entries(profileMap).forEach((entry) => {
  console.log(`${entry[0]}:`, entry[1])
})

// ✅ LEBIH BAIK
Object.entries(profileMap).forEach(([fullName, data]) => {
  console.log(`${fullName}:`, data)
})
```

### **💡 Insight Penting:**

> **Kapan pakai `Object.entries` vs `for...in`?**

| | `Object.entries` | `for...in` |
|---|---|---|
| Style | Functional | Imperative |
| Chaining method | ✅ Bisa | ❌ Tidak bisa |
| Inherited properties | ❌ Tidak ikut | ⚠️ Bisa ikut |
| Readability | ⭐⭐⭐ | ⭐⭐ |

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES

═══════════════════════════════════════════════════════════════════════

```javascript
const testCases = [
  {
    input: [['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']],
    desc: "Input normal — ada birthYear dan tidak ada birthYear"
  },
  {
    input: [],
    desc: "Input kosong — harus print empty string"
  },
  {
    input: [['Christ', 'Evans', 'Male', 1982], ['Christ', 'Evans', 'Male', 1982]],
    desc: "Input duplikat — data pertama dipertahankan"
  },
  {
    input: [['Tony', 'Stark', 'Male', 1970], ['Natasha', 'Romanoff', 'Female', 1984], ['Tony', 'Stark', 'Male', 1970]],
    desc: "Multiple profiles dengan duplikat di tengah"
  }
]

testCases.forEach(({ input, desc }, index) => {
  console.log(`\n── Test Case #${index + 1}: ${desc} ──`)
  buildProfileMap(input)
})
```

**Output yang diharapkan:**
```
── Test Case #1: Input normal ──
1. Christ Evans:
Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 44 }
Robert Downey: { firstName: 'Robert', lastName: 'Downey', gender: 'Male', age: 'Invalid Birth Year' }

── Test Case #2: Input kosong ──
""

── Test Case #3: Input duplikat ──
1. Christ Evans:
Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 44 }

── Test Case #4: Multiple profiles dengan duplikat ──
1. Tony Stark:
Tony Stark: { firstName: 'Tony', lastName: 'Stark', gender: 'Male', age: 56 }
Natasha Romanoff: { firstName: 'Natasha', lastName: 'Romanoff', gender: 'Female', age: 42 }
```

---

═══════════════════════════════════════════════════════════════════════

# 📊 PERBANDINGAN LENGKAP

═══════════════════════════════════════════════════════════════════════

| Aspek | 🔄 Kode Utama | 🔀 Alternatif 1 | 🔁 Alternatif 2 | 🔑 Alternatif 3 |
|-------|:------------:|:--------------:|:--------------:|:--------------:|
| Loop building | `for...of` | `reduce` | `forEach` | `for...of` |
| Loop output | `for...in` | `for...in` | `for...in` | `Object.entries` |
| Style | Imperative | Functional | Functional | Campuran |
| Accumulator bawaan | ❌ | ✅ | ❌ | ❌ |
| Bisa `break`/`continue` | ✅ | ❌ | ❌ | ✅ |
| Wajib `return acc` | ❌ | ✅ | ❌ | ❌ |
| Complexity | O(n) | O(n) | O(n) | O(n) |
| Readability | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Cocok untuk | Pemula, debugging | Functional style | Functional + readable | Chaining output |

---

## 🎯 Decision Tree

```
Apakah kamu butuh break/continue di dalam loop?
│
├── YA ──▶ 🔄 Kode Utama atau 🔑 Alternatif 3
│
└── TIDAK ──▶ Familiar dengan functional programming?
               │
               ├── YA ──▶ Ingin kode paling ringkas?
               │           │
               │           ├── YA  ──▶ 🔀 Alternatif 1 (reduce)
               │           └── TIDAK ──▶ 🔁 Alternatif 2 (forEach)
               │
               └── TIDAK ──▶ 🔄 Kode Utama
                              (paling mudah dipahami)

Default: 🔄 Kode Utama — paling mudah dibaca dan di-debug ✅
```

---

## 🔑 Key Takeaways

```
┌─────────────────────────────────────────────────────────────────────┐
│  💡 Semua Solusi Menghasilkan Output yang Sama                      │
│     Perbedaan hanya pada pendekatan loop building dan output        │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Naming Convention Penting                                       │
│     profiles, birthYear, profileMap jauh lebih deskriptif           │
│     dari arr, year, resultObject                                    │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Early Return untuk Edge Case                                    │
│     Handle kondisi kosong di awal agar kode utama tidak             │
│     perlu dibungkus dalam blok if yang dalam                        │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Hindari Magic Number                                            │
│     new Date().getFullYear() lebih baik dari hardcode 2026          │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Manfaatkan Sifat Object untuk Deduplication                     │
│     Object tidak bisa punya key duplikat — gunakan fullName         │
│     sebagai key untuk deduplication yang elegan dan efisien         │
└─────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

## 🎯 Quick Reference Card

| Versi | Loop Building | Loop Output | Highlight |
|-------|:------------:|:-----------:|-----------|
| 🔄 **Kode Utama** | `for...of` | `for...in` | Paling mudah di-debug |
| 🔀 **Alternatif 1** | `reduce` | `for...in` | Functional, array → object |
| 🔁 **Alternatif 2** | `forEach` | `for...in` | Functional + readable |
| 🔑 **Alternatif 3** | `for...of` | `Object.entries` | Output bisa di-chain |

---

**📚 [Kembali ke README](README.md)**

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
