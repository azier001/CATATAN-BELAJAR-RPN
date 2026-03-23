# 📋 graduates — Ringkasan Algoritma Semua Versi

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          📋 RINGKASAN ALGORITMA — COMPLETE REFERENCE 📋                 ║
║         for...of · reduce · 2-pass · group-first                        ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-30%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Versi](https://img.shields.io/badge/Versi-4%20Solusi-success?style=for-the-badge)

---

## 🎯 Tujuan

- ✅ Ringkasan challenge dan kriteria dalam satu tempat
- ✅ Ringkasan algoritma semua versi secara detail
- ✅ Quick reference untuk review atau ujian

---

## 🧭 Quick Jump

| 🧩 Challenge | ✅ Versi 1 | ⚡ Versi 2 | 🔁 Versi 3 | 🗂️ Versi 4 | 🧪 Test Cases | 📊 Perbandingan |
|:------------:|:---------:|:---------:|:---------:|:---------:|:-------------:|:---------------:|
| [Jump](#-deskripsi-challenge) | [Jump](#-versi-1-forof-imperative) | [Jump](#-versi-2-reduce-functional) | [Jump](#-versi-3-2-pass-reduce--filterforeach) | [Jump](#-versi-4-group-first-forof--forin) | [Jump](#-test-cases-lengkap) | [Jump](#-perbandingan-lengkap) |

---

# 🧩 DESKRIPSI CHALLENGE

## 📋 Soal

> ### 📋 Deskripsi
>
> Diberikan sebuah function **`graduates(students)`** yang menerima satu parameter:
>
> | Parameter | Tipe | Keterangan |
> |-----------|------|------------|
> | `students` | `array` | Array of objects, setiap object berisi `name`, `score`, dan `class` |
>
> Implementasikan function **`graduates`** untuk mendapatkan daftar student yang lulus dengan aturan:
>
> - Student dapat dinyatakan **lulus** apabila `score` **lebih besar dari 75**
> - Masukkan `name` dan `score` dari student ke **class yang dia ikuti**
> - Student yang **tidak lulus tidak perlu ditampilkan**
> - Jika tidak ada student yang lulus di suatu class, class tersebut tetap ditampilkan dengan **array kosong `[]`**

---

## 🔍 Kriteria

> **1.** Jika `students` kosong (`[]`)
> → return object kosong `{}`
>
> **2.** Student dengan `score > 75` → lulus, masuk ke output
>
> **3.** Student dengan `score <= 75` → tidak lulus, tidak ditampilkan
>
> **4.** Semua class tetap muncul di output meski tidak ada lulusannya

---

## 📊 Contoh-contoh

```javascript
// ✅ Normal case 1 — dua class, satu student tidak lulus
graduates([
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves'  },
  { name: 'Sergei',    score: 74, class: 'foxes'   },
  { name: 'Anastasia', score: 78, class: 'wolves'  }
])
// → {
//     foxes:  [{ name: 'Dimitri', score: 90 }],
//     wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
//   }
```

```javascript
// ✅ Normal case 2 — tiga class, beberapa student tidak lulus
graduates([
  { name: 'Alexander', score: 100, class: 'foxes'  },
  { name: 'Alisa',     score: 76,  class: 'wolves' },
  { name: 'Vladimir',  score: 92,  class: 'foxes'  },
  { name: 'Albert',    score: 71,  class: 'wolves' },
  { name: 'Viktor',    score: 80,  class: 'tigers' }
])
// → {
//     foxes:  [{ name: 'Alexander', score: 100 }, { name: 'Vladimir', score: 92 }],
//     wolves: [{ name: 'Alisa', score: 76 }],
//     tigers: [{ name: 'Viktor', score: 80 }]
//   }
```

```javascript
// ✅ Edge case — array kosong
graduates([])
// → {}
```

---

### Simulasi Proses (Normal Case 1):

```
students = [
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves'  },
  { name: 'Sergei',    score: 74, class: 'foxes'   },
  { name: 'Anastasia', score: 78, class: 'wolves'  }
]

Proses setiap student:

  Dimitri   | score 90 | class 'foxes'  | 90 > 75 ✅ → masuk foxes
  Alexei    | score 85 | class 'wolves' | 85 > 75 ✅ → masuk wolves
  Sergei    | score 74 | class 'foxes'  | 74 > 75 ❌ → tidak ditampilkan
  Anastasia | score 78 | class 'wolves' | 78 > 75 ✅ → masuk wolves

Output:
  foxes:  [{ name: 'Dimitri', score: 90 }]
  wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Parameter | `students` — array of objects dengan `name`, `score`, `class` |
| Lulus jika | `score > 75` (strict greater than) |
| Output | Object dengan key = nama class, value = array `{ name, score }` |
| Student tidak lulus | Tidak ditampilkan di output |
| Class tanpa lulusan | Tetap muncul dengan value `[]` |
| Edge case | `students` kosong → return `{}` |

---

> 💡 **Aturan Sederhana:** Kelompokkan student per class, lalu tampilkan hanya yang score-nya lebih dari 75.

---

## ⚡ Quick Test

```javascript
// Test 1 — Edge case: array kosong
console.log(graduates([]))
// → {}
```

```javascript
// Test 2 — Normal case 1
console.log(graduates([
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves'  },
  { name: 'Sergei',    score: 74, class: 'foxes'   },
  { name: 'Anastasia', score: 78, class: 'wolves'  }
]))
// → { foxes: [...], wolves: [...] }
```

```javascript
// Test 3 — Normal case 2
console.log(graduates([
  { name: 'Alexander', score: 100, class: 'foxes'  },
  { name: 'Alisa',     score: 76,  class: 'wolves' },
  { name: 'Vladimir',  score: 92,  class: 'foxes'  },
  { name: 'Albert',    score: 71,  class: 'wolves' },
  { name: 'Viktor',    score: 80,  class: 'tigers' }
]))
// → { foxes: [...], wolves: [...], tigers: [...] }
```

---

═══════════════════════════════════════════════════════════════════════

# ✅ VERSI 1: `for...of` Imperative

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Pemula%20%7C%20Readable-green?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative-orange?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function graduates(students) {
  const result = {}
  const minGrade = 75

  for (const { name, score, class: className } of students) {
    if (!result[className]) result[className] = []

    if (score > minGrade) {
      result[className].push({ name, score })
    }
  }

  return result
}
```

</details>

### **Konsep Inti:**
```
Siapkan result = {} dan minGrade = 75
Loop setiap student di dalam students
  Jika class student belum ada di result → inisialisasi dengan []
  Jika score > 75 → push { name, score } ke result[className]
Return result
```

### **Step-by-Step (Detail):**

#### 🟡 Persiapan:

1. **`const result = {}`**
   - Object kosong sebagai wadah output akhir
   - Key-nya akan berisi nama class, value-nya array of students
   - Dideklarasikan di luar loop agar tidak direset setiap iterasi

2. **`const minGrade = 75`**
   - Konstanta batas kelulusan
   - Dipisah agar mudah diubah di satu tempat jika aturan berubah
   - Lebih deskriptif dibanding menulis angka `75` langsung di dalam kondisi

#### 🔄 Loop — `for (const { name, score, class: className } of students)`:

3. **Destructuring langsung di parameter loop**
   - `name`, `score` → diambil langsung dari object student
   - `class: className` → `class` adalah reserved keyword, di-rename jadi `className`
   - Lebih ringkas dibanding `student.name`, `student.score`, `student.class`

4. **`if (!result[className]) result[className] = []`**
   - Cek apakah class ini sudah pernah muncul sebelumnya
   - Kalau belum → inisialisasi dengan array kosong `[]`
   - Ini disebut **lazy initialization** — array dibuat hanya saat pertama kali dibutuhkan
   - Memastikan class tetap muncul di output meski tidak ada student yang lulus

5. **`if (score > minGrade) result[className].push({ name, score })`**
   - Hanya push jika score **lebih besar dari 75** (bukan `>=`)
   - Push object `{ name, score }` — tanpa `class`, sesuai format output soal

#### 🔵 Di Luar Loop:

6. **`return result`**
   - Kembalikan object yang sudah terisi semua class dan lulusannya
   - Harus di luar loop — jika di dalam loop, fungsi berhenti di iterasi pertama

### **Visualisasi:**

```
students = [
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves'  },
  { name: 'Sergei',    score: 74, class: 'foxes'   },
  { name: 'Anastasia', score: 78, class: 'wolves'  }
]

result = {}

─────────────────────────────────────────────────────
Iterasi 1: Dimitri, score 90, class 'foxes'
  result['foxes'] belum ada → result = { foxes: [] }
  90 > 75 ✅ → result = { foxes: [{ name: 'Dimitri', score: 90 }] }

Iterasi 2: Alexei, score 85, class 'wolves'
  result['wolves'] belum ada → result = { foxes: [...], wolves: [] }
  85 > 75 ✅ → result wolves = [{ name: 'Alexei', score: 85 }]

Iterasi 3: Sergei, score 74, class 'foxes'
  result['foxes'] sudah ada → skip inisialisasi
  74 > 75 ❌ → tidak di-push

Iterasi 4: Anastasia, score 78, class 'wolves'
  result['wolves'] sudah ada → skip inisialisasi
  78 > 75 ✅ → result wolves = [..., { name: 'Anastasia', score: 78 }]
─────────────────────────────────────────────────────

return {
  foxes:  [{ name: 'Dimitri', score: 90 }],
  wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
} ✅
```

### **Keywords:**
- 🏗️ **Accumulator Object** — `result` yang terus diisi setiap iterasi, dideklarasikan di luar loop
- 🔄 **`for...of`** — iterasi langsung setiap elemen array tanpa index manual
- 🧩 **Destructuring Rename** — `class: className` mengambil property `class` lalu menyimpannya sebagai `className`
- 🛡️ **Lazy Initialization** — `result[className] = []` hanya saat pertama kali class ditemukan

### **Kapan Pakai:**
- ✅ Belajar pertama kali — alur paling eksplisit dan mudah dipahami
- ✅ Ingin kode yang familiar tanpa perlu paham `reduce`
- ✅ Debugging — setiap langkah bisa di-trace dengan mudah

### **Pitfalls (Jebakan Umum):**

**1) ❌ Inisialisasi array di dalam kondisi score**
```javascript
// ❌ SALAH — class tidak muncul jika tidak ada yang lulus
if (score > minGrade) {
  if (!result[className]) result[className] = []
  result[className].push({ name, score })
}

// ✅ BENAR — inisialisasi terpisah dari kondisi score
if (!result[className]) result[className] = []
if (score > minGrade) result[className].push({ name, score })
```

**2) ❌ Lupa rename reserved keyword `class`**
```javascript
// ❌ SALAH — SyntaxError
for (const { name, score, class } of students) { ... }

// ✅ BENAR — rename saat destructuring
for (const { name, score, class: className } of students) { ... }
```

**3) ❌ `return` di dalam loop**
```javascript
// ❌ SALAH — fungsi berhenti setelah iterasi pertama
for (const { name, score, class: className } of students) {
  if (!result[className]) result[className] = []
  if (score > minGrade) result[className].push({ name, score })
  return result // keluar terlalu cepat!
}

// ✅ BENAR — return di luar loop
for (const { name, score, class: className } of students) { ... }
return result
```

### **💡 Insight Penting:**

> **Kenapa inisialisasi array harus di luar kondisi `score > minGrade`?**
> Karena soal mengharuskan semua class tetap muncul di output — termasuk yang tidak ada lulusannya (isi `[]`). Jika inisialisasi diletakkan di dalam kondisi score, class yang semua studentnya tidak lulus tidak akan pernah dibuat, sehingga hilang dari output.

> **Kompleksitas:**
> Waktu **O(n)** — setiap student dikunjungi tepat 1 kali. Memori **O(n)** — `result` menyimpan semua student yang lulus.

---

═══════════════════════════════════════════════════════════════════════

# ⚡ VERSI 2: `reduce` Functional

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Ringkas%20%7C%20Modern-blue?style=flat-square)
![Style](https://img.shields.io/badge/Style-Functional-9cf?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Jalankan reduce pada students dengan acc awal = {}
  Untuk setiap student:
    Jika class belum ada di acc → inisialisasi dengan []
    Jika score > 75 → push { name, score } ke acc[className]
    Return acc
Hasil reduce langsung di-return sebagai output
```

### **Step-by-Step (Detail):**

#### 🟡 Persiapan:

1. **`const minGrade = 75`**
   - Konstanta batas kelulusan
   - Dipisah agar mudah diubah di satu tempat jika aturan berubah

#### 🔄 `students.reduce((acc, { name, score, class: className }) => { ... }, {})`:

2. **`acc` (accumulator)**
   - Object yang sedang dibangun selama proses reduce
   - Nilai awal `{}` — diberikan sebagai argumen kedua `reduce`
   - Setiap iterasi menerima `acc` dari iterasi sebelumnya

3. **`{ name, score, class: className }` — destructuring di parameter**
   - Langsung destructure setiap student di parameter callback
   - Sama seperti Versi 1, `class` di-rename jadi `className`

4. **`if (!acc[className]) acc[className] = []`**
   - Lazy initialization — inisialisasi array hanya saat class pertama kali ditemukan
   - Memastikan class tetap ada di output meski tidak ada yang lulus

5. **`if (score > minGrade) acc[className].push({ name, score })`**
   - Push hanya jika lolos batas kelulusan
   - Push object `{ name, score }` — tanpa `class`, sesuai format output soal

6. **`return acc`**
   - **Wajib** dikembalikan setiap iterasi
   - `acc` yang dikembalikan menjadi `acc` di iterasi berikutnya
   - Jika lupa `return acc` → `acc` menjadi `undefined` di iterasi selanjutnya

#### 🔵 Hasil:

7. **`return students.reduce(...)`**
   - Hasil akhir `reduce` langsung di-return tanpa variabel perantara
   - Berbeda dengan Versi 1 yang butuh `const result = {}` lalu `return result`

### **Visualisasi:**

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

### **Keywords:**
- 🔁 **`reduce`** — method array untuk "mereduksi" array menjadi satu nilai — di sini menjadi sebuah object
- 📦 **Initial Value** — nilai awal accumulator `{}` diberikan sebagai argumen kedua `reduce`
- 🔄 **`return acc`** — wajib dikembalikan setiap iterasi agar accumulator tidak hilang
- 🧩 **Destructuring di Parameter** — langsung unpack object di parameter callback tanpa variabel perantara

### **Kapan Pakai:**
- ✅ Ingin kode ringkas dan bergaya functional
- ✅ Tidak butuh variabel perantara — `reduce` langsung mengembalikan hasilnya
- ✅ Sudah familiar dengan konsep `acc` dan `return acc`

### **Pitfalls (Jebakan Umum):**

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
  return acc
}) // tidak ada initial value!

// ✅ BENAR — berikan {} sebagai initial value
students.reduce((acc, { name, score, class: className }) => {
  return acc
}, {})
```

### **💡 Insight Penting:**

> **Kenapa `return acc` wajib di `reduce` tapi tidak di `for...of`?**
> Karena `reduce` meneruskan nilai `acc` antar iterasi melalui return value callback. Jika tidak di-return, nilai `acc` di iterasi berikutnya menjadi `undefined` dan program crash. Di `for...of`, `result` adalah variabel yang hidup di luar loop sehingga tidak perlu di-return setiap iterasi.

> **Kompleksitas:**
> Waktu **O(n)** — setiap student dikunjungi tepat 1 kali. Memori **O(n)** — `acc` menyimpan semua student yang lulus.

---

═══════════════════════════════════════════════════════════════════════

# 🔁 VERSI 3: 2-pass (`reduce` + `filter/forEach`)

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Separation%20of%20Concern-purple?style=flat-square)
![Style](https://img.shields.io/badge/Style-Mixed-9cf?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Pass 1 — Daftarkan semua class:
  reduce students → buat result dengan semua class = []

Pass 2 — Isi dengan yang lulus:
  filter students → hanya yang score > 75
  forEach student yang lulus → push ke result[className]

Return result
```

### **Step-by-Step (Detail):**

#### 🟡 Persiapan:

1. **`const result`**
   - Tidak dideklarasikan manual dengan `= {}`
   - Nilainya langsung ditentukan oleh hasil Pass 1 (reduce)
   - Setelah Pass 1 selesai, `result` sudah berisi semua class dengan `[]`

2. **Tidak ada `const minGrade`**
   - Angka `75` ditulis langsung (inline) di dalam `.filter()`
   - Pilihan gaya — lebih ringkas tapi kurang fleksibel jika batas kelulusan perlu diubah

#### 🔵 Pass 1 — `students.reduce(...)`:

3. **Hanya butuh `className` di destructuring**
   - Pass 1 tidak peduli `name` dan `score` — hanya mendaftarkan class
   - Destructuring cukup `{ class: className }`

4. **`if (!acc[className]) acc[className] = []`**
   - Inisialisasi setiap class yang ditemukan dengan `[]`
   - Jika class sudah ada → skip

5. **`return acc`**
   - Wajib dikembalikan seperti biasa di `reduce`

   **Hasil Pass 1:**
   ```js
   result = { foxes: [], wolves: [] }
   // Semua class sudah terdaftar, semua masih kosong
   ```

#### 🔵 Pass 2 — `.filter().forEach()`:

6. **`.filter(({ score }) => score > 75)`**
   - Saring hanya student yang lulus
   - Menghasilkan array baru berisi student yang lulus saja

7. **`.forEach(({ name, score, class: className }) => { ... })`**
   - Iterasi setiap student yang lulus
   - Push `{ name, score }` ke `result[className]` yang sudah ada dari Pass 1

#### 🔵 Di Luar:

8. **`return result`**
   - Kembalikan result yang sudah terisi penuh

### **Visualisasi:**

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

### **Keywords:**
- 🔁 **2-pass** — array diiterasi dua kali: sekali untuk registrasi, sekali untuk pengisian
- 🔽 **`filter`** — method array yang menghasilkan array baru berisi elemen yang lolos kondisi
- 🔄 **`forEach`** — iterasi array tanpa menghasilkan array baru, digunakan untuk side effect (push)
- 🔗 **Method Chaining** — `.filter().forEach()` merangkai dua method secara langsung

### **Kapan Pakai:**
- ✅ Ingin separation of concern yang sangat jelas — satu pass, satu tugas
- ✅ Mudah dimodifikasi — ingin ganti logika filter? Cukup ubah Pass 2 saja
- ✅ Kode yang mudah di-explain ke orang lain langkah per langkah

### **Pitfalls (Jebakan Umum):**

**1) ❌ Pass 1 dijalankan pada data yang sudah difilter**
```javascript
// ❌ SALAH — class tanpa lulusan tidak akan terdaftar
const passed = students.filter(({ score }) => score > 75)
const result = passed.reduce((acc, { class: className }) => { // data sudah difilter!
  if (!acc[className]) acc[className] = []
  return acc
}, {})

// ✅ BENAR — Pass 1 selalu dari data ORIGINAL
const result = students.reduce((acc, { class: className }) => { // data original
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

### **💡 Insight Penting:**

> **Kenapa Pass 1 harus pakai data ORIGINAL, bukan data hasil filter?**
> Karena tujuan Pass 1 adalah mendaftarkan **semua class yang ada**, termasuk class yang tidak memiliki lulusan. Jika Pass 1 dijalankan pada data yang sudah difilter, class dengan semua student tidak lulus tidak akan pernah terdaftar dan hilang dari output.

> **Kompleksitas:**
> Waktu **O(n)** — Pass 1 = O(n), Pass 2 = O(n) → total O(2n) = O(n). Memori **O(n)** — `filter` membuat array baru sementara berisi student yang lulus.

---

═══════════════════════════════════════════════════════════════════════

# 🗂️ VERSI 4: Group-first (`for...of` + `for...in`)

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Debug%20%7C%20Eksplisit-orange?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative-orange?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
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

### **Step-by-Step (Detail):**

#### 🟡 Persiapan:

1. **`const grouped = {}`**
   - Object sementara untuk menampung **semua** student per class, tanpa filter dulu
   - Disebut **intermediate variable** — variabel antara sebelum diproses lebih lanjut
   - Berbeda dengan `result` — `grouped` berisi student lulus maupun tidak lulus

2. **`const result = {}`**
   - Object output akhir — hanya berisi student yang lulus
   - Dideklarasikan setelah Tahap 1 selesai, bukan di awal fungsi

#### 🔄 Tahap 1 — `for...of`:

3. **`for (const { name, score, class: className } of students)`**
   - Destructuring langsung di parameter loop
   - Semua student diproses — belum ada filter di tahap ini

4. **`if (!grouped[className]) grouped[className] = []`**
   - Lazy initialization — buat array kosong saat class pertama kali ditemukan

5. **`grouped[className].push({ name, score })`**
   - Push **semua** student ke grouped, lulus atau tidak
   - Filter dilakukan nanti di Tahap 2

   **Hasil Tahap 1:**
   ```js
   grouped = {
     foxes:  [{ name: 'Dimitri', score: 90 }, { name: 'Sergei', score: 74 }],
     wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
   }
   ```

#### 🔄 Tahap 2 — `for...in`:

6. **`for (const className in grouped)`**
   - `for...in` mengiterasi **key** dari sebuah object
   - `className` = `'foxes'`, lalu `'wolves'`, dst.
   - Berbeda dengan `for...of` yang mengiterasi **nilai** dari array

7. **`result[className] = grouped[className].filter(s => s.score > 75)`**
   - Filter array per class — hanya yang lulus masuk ke `result`
   - Jika tidak ada yang lulus → `filter` menghasilkan `[]` → class tetap muncul ✅

#### 🔵 Di Luar:

8. **`return result`**
   - Kembalikan object final yang sudah bersih — hanya berisi student yang lulus

### **Visualisasi:**

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

### **Keywords:**
- 🗂️ **Intermediate Variable** — `grouped` menyimpan hasil antara sebelum diproses lebih lanjut
- 🔄 **`for...of`** — iterasi **nilai** dari array, digunakan di Tahap 1
- 🔑 **`for...in`** — iterasi **key** dari object, digunakan di Tahap 2
- 🔽 **`filter` per group** — filter dilakukan per class, bukan per individual student

### **Kapan Pakai:**
- ✅ Ingin kode paling mudah di-debug — `grouped` bisa di-`console.log` untuk inspect hasil antara
- ✅ Ingin alur yang paling eksplisit — tidak ada operasi yang tersembunyi di dalam callback
- ✅ Menjelaskan kode ke orang lain — dua tahap terpisah mudah di-explain

### **Pitfalls (Jebakan Umum):**

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

### **💡 Insight Penting:**

> **Apa keunggulan utama Versi 4 dibanding versi lain?**
> Versi 4 paling mudah di-debug karena variabel `grouped` bisa di-inspect langsung dengan `console.log(grouped)` setelah Tahap 1 selesai. Kamu bisa lihat persis isi setiap class sebelum difilter — sangat membantu saat terjadi bug.

> **Kapan `for...in` lebih tepat dari `for...of`?**
> `for...in` digunakan untuk mengiterasi **key** sebuah object. `for...of` digunakan untuk mengiterasi **nilai** sebuah array. Keduanya tidak bisa ditukar — `for...in` pada array menghasilkan index string bukan nilai elemen.

> **Kompleksitas:**
> Waktu **O(n)** — Tahap 1 = O(n), Tahap 2 = O(n) → total O(2n) = O(n). Memori **O(n)** — `grouped` menyimpan semua student termasuk yang tidak lulus.

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES LENGKAP

═══════════════════════════════════════════════════════════════════════

```javascript
const testCases = [
  {
    input: [],
    expected: {},
    desc: "Edge case — array kosong harus mengembalikan {}"
  },
  {
    input: [
      { name: 'Dimitri',   score: 90, class: 'foxes'  },
      { name: 'Alexei',    score: 85, class: 'wolves'  },
      { name: 'Sergei',    score: 74, class: 'foxes'   },
      { name: 'Anastasia', score: 78, class: 'wolves'  }
    ],
    expected: {
      foxes:  [{ name: 'Dimitri', score: 90 }],
      wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
    },
    desc: 'Normal case 1 — dua class, satu student tidak lulus'
  },
  {
    input: [
      { name: 'Alexander', score: 100, class: 'foxes'  },
      { name: 'Alisa',     score: 76,  class: 'wolves' },
      { name: 'Vladimir',  score: 92,  class: 'foxes'  },
      { name: 'Albert',    score: 71,  class: 'wolves' },
      { name: 'Viktor',    score: 80,  class: 'tigers' }
    ],
    expected: {
      foxes:  [{ name: 'Alexander', score: 100 }, { name: 'Vladimir', score: 92 }],
      wolves: [{ name: 'Alisa', score: 76 }],
      tigers: [{ name: 'Viktor', score: 80 }]
    },
    desc: 'Normal case 2 — tiga class, beberapa student tidak lulus'
  }
]

testCases.forEach(({ input, expected, desc }, index) => {
  const result = graduates(input)
  const status = JSON.stringify(result) === JSON.stringify(expected) ? '✅ PASS' : '❌ FAIL'

  console.log(`Test Case #${index + 1}: ${status} - ${desc}`)

  if (status === '❌ FAIL') {
    console.log('Expected:', JSON.stringify(expected, null, 2))
    console.log('Result  :', JSON.stringify(result, null, 2))
  }
})
```

**Output yang diharapkan:**
```
Test Case #1: ✅ PASS - Edge case — array kosong harus mengembalikan {}
Test Case #2: ✅ PASS - Normal case 1 — dua class, satu student tidak lulus
Test Case #3: ✅ PASS - Normal case 2 — tiga class, beberapa student tidak lulus
```

---

═══════════════════════════════════════════════════════════════════════

# 📊 PERBANDINGAN LENGKAP

═══════════════════════════════════════════════════════════════════════

| Aspek | ✅ Versi 1 | ⚡ Versi 2 | 🔁 Versi 3 | 🗂️ Versi 4 |
|-------|:---------:|:---------:|:---------:|:---------:|
| Jumlah loop | 1x | 1x | 2x | 2x |
| Gaya penulisan | Imperative | Functional | Mixed | Imperative |
| Variabel perantara | `result` | Tidak ada | `result` | `grouped` + `result` |
| Kompleksitas Waktu | O(n) | O(n) | O(n) | O(n) |
| Kompleksitas Memori | O(n) | O(n) | O(n) | O(n) |
| Separation of concern | ⚠️ Digabung | ⚠️ Digabung | ✅ Sangat jelas | ✅ Sangat jelas |
| Cocok untuk pemula | ✅ Sangat | ⚠️ Perlu paham `reduce` | ⚠️ Perlu paham chaining | ✅ Sangat |
| Kemudahan debug | ✅ Mudah | ⚠️ Cukup | ✅ Mudah | ✅ Paling mudah |

> `n` = jumlah student di dalam array

---

## 📈 Perbandingan Visual

```
Jumlah Loop:
  Versi 1 — for...of       1x  ████████         efisien
  Versi 2 — reduce         1x  ████████         efisien
  Versi 3 — 2-pass         2x  ████████████████ lebih banyak iterasi
  Versi 4 — group-first    2x  ████████████████ lebih banyak iterasi

Kemudahan Membaca (subjektif):
  Versi 1 — for...of       ✅✅✅✅  sangat mudah — familiar untuk semua
  Versi 4 — group-first    ✅✅✅✅  sangat mudah — alur paling eksplisit
  Versi 3 — 2-pass         ✅✅✅   mudah — separation jelas
  Versi 2 — reduce         ✅✅    perlu paham reduce

Separation of Concern:
  Versi 3 — 2-pass         ✅✅✅✅  paling jelas — pass 1 & pass 2 terpisah
  Versi 4 — group-first    ✅✅✅✅  paling jelas — tahap 1 & tahap 2 terpisah
  Versi 1 — for...of       ✅✅    digabung tapi masih mudah dibaca
  Versi 2 — reduce         ✅✅    digabung di dalam reduce
```

---

## 🎯 Decision Guide

### Saya Pemula → pakai **Versi 1 — Original**
- Paling mudah dibaca dan dipahami
- Tidak memerlukan pengetahuan method khusus seperti `reduce`
- → **[Lihat Part 4](docs/04-ringkasan-algoritma-for-of-imperative.md)**

### Saya ingin kode ringkas & modern → pakai **Versi 2 — Refactored**
- Hanya butuh satu `reduce` — tidak perlu variabel perantara
- Memanfaatkan functional programming style
- → **[Lihat Part 5](docs/05-ringkasan-algoritma-reduce-functional.md)**

### Saya ingin separation of concern yang jelas → pakai **Versi 3 — 2-pass**
- Setiap pass punya satu tanggung jawab yang eksplisit
- Mudah dimodifikasi — ingin ganti logika filter? Cukup ubah Pass 2
- → **[Lihat Part 6](docs/06-ringkasan-algoritma-2pass-reduce-filter-foreach.md)**

### Saya ingin kode paling mudah di-debug → pakai **Versi 4 — Group-first**
- `grouped` bisa di-`console.log` untuk inspect hasil antara
- Tidak ada operasi yang tersembunyi di dalam callback
- → **[Lihat Part 7](docs/07-ringkasan-algoritma-group-first-for-of-for-in.md)**

---

## 🔑 Key Takeaways

```
┌─────────────────────────────────────────────────────────────────────┐
│  💡 Semua Solusi Menghasilkan Output yang Sama                      │
│     Perbedaan hanya pada pendekatan, gaya, dan jumlah iterasi       │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Inisialisasi Array Wajib Terpisah dari Kondisi Score            │
│     if (!result[className]) result[className] = []                  │
│     Harus SEBELUM if (score > minGrade)                             │
│     Jika di dalam kondisi → class tanpa lulusan hilang dari output  │
├─────────────────────────────────────────────────────────────────────┤
│  💡 `class` Wajib Di-rename Saat Destructuring                      │
│     class: className → karena `class` adalah reserved keyword       │
│     Tanpa rename → SyntaxError!                                     │
├─────────────────────────────────────────────────────────────────────┤
│  💡 `return acc` Wajib Ada di Dalam `reduce`                        │
│     Tanpa return acc → acc menjadi undefined di iterasi berikutnya  │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Pilih Sesuai Konteks                                            │
│     Belajar         → Versi 1 (for...of)                           │
│     Modern ringkas  → Versi 2 (reduce)                              │
│     Separation      → Versi 3 (2-pass)                             │
│     Debug mudah     → Versi 4 (group-first)                        │
└─────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

## 🎯 Quick Reference Card

| Versi | Highlight |
|-------|-----------|
| ✅ **for...of** | `result = {}` → loop `for...of` → lazy init → push if lulus → `return result` |
| ⚡ **reduce** | `return students.reduce((acc, {...}) => { lazy init → push if lulus → return acc }, {})` |
| 🔁 **2-pass** | Pass 1: `reduce` daftarkan class → Pass 2: `filter().forEach()` push yang lulus |
| 🗂️ **group-first** | Tahap 1: `for...of` group semua → Tahap 2: `for...in` filter per class |

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
