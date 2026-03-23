# 📋 highestScore — Ringkasan Algoritma Semua Versi

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          📋 RINGKASAN ALGORITMA — COMPLETE REFERENCE 📋                 ║
║                    for...of · reduce elegant · Perbandingan              ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-30%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Versi](https://img.shields.io/badge/Versi-2%20Solusi-success?style=for-the-badge)

---

## 🎯 Tujuan

- ✅ Ringkasan challenge dan kriteria dalam satu tempat
- ✅ Ringkasan algoritma semua versi secara detail
- ✅ Quick reference untuk review atau ujian

---

## 🧭 Quick Jump

| 🧩 Challenge | ✅ Versi 1 | ⚡ Versi 2 | 🧪 Test Cases | 📊 Perbandingan |
|:------------:|:---------:|:---------:|:-------------:|:---------------:|
| [Jump](#-deskripsi-challenge) | [Jump](#-versi-1-forof--destructuring--imperative-style) | [Jump](#-versi-2-reduce-elegant--functional-style) | [Jump](#-test-cases-lengkap) | [Jump](#-perbandingan-lengkap) |

---

# 🧩 DESKRIPSI CHALLENGE

## 📋 Soal

> ### 📋 Deskripsi
>
> Diberikan sebuah function **`highestScore(students)`** yang menerima satu parameter:
>
> | Parameter | Tipe | Keterangan |
> |-----------|------|------------|
> | `students` | `array of objects` | Array berisi data siswa dengan properti `name`, `score`, dan `class` |
>
> **Setiap object di dalam `students` memiliki struktur:**
>
> | Properti | Tipe | Keterangan |
> |----------|------|------------|
> | `name` | `string` | Nama siswa |
> | `score` | `number` | Nilai siswa |
> | `class` | `string` | Nama kelas siswa |
>
> Buatlah function yang mengembalikan **object** di mana setiap key adalah nama kelas dan value adalah object `{ name, score }` dari siswa dengan **skor tertinggi** di kelas tersebut.

---

## 🔍 Kriteria

> **1.** Jika `students` kosong (`[]`)
> → return object kosong `{}`
>
> **2.** Untuk setiap kelas, ambil siswa dengan skor **tertinggi**
>
> **3.** Jika ada dua siswa dengan skor sama di kelas yang sama
> → ambil yang **pertama muncul** di array
>
> **4.** Output berisi key = nama kelas, value = `{ name, score }` — **tanpa properti `class`**

---

## 📊 Contoh-contoh

### Output yang Diharapkan

```javascript
// ✅ Normal case 1 — dua kelas
highestScore([
  { name: 'Dimitri', score: 90, class: 'foxes' },
  { name: 'Alexei', score: 85, class: 'wolves' },
  { name: 'Sergei', score: 74, class: 'foxes' },
  { name: 'Anastasia', score: 78, class: 'wolves' }
])
// → { foxes: { name: 'Dimitri', score: 90 }, wolves: { name: 'Alexei', score: 85 } }
```

```javascript
// ✅ Normal case 2 — tiga kelas dengan jumlah siswa berbeda
highestScore([
  { name: 'Alexander', score: 100, class: 'foxes' },
  { name: 'Alisa', score: 76, class: 'wolves' },
  { name: 'Vladimir', score: 92, class: 'foxes' },
  { name: 'Albert', score: 71, class: 'wolves' },
  { name: 'Viktor', score: 80, class: 'tigers' }
])
// → { foxes: { name: 'Alexander', score: 100 }, wolves: { name: 'Alisa', score: 76 }, tigers: { name: 'Viktor', score: 80 } }
```

```javascript
// ✅ Edge case — array kosong
highestScore([])
// → {}
```

---

### Simulasi Seleksi: Normal Case 1

```
students = [
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves' },
  { name: 'Sergei',    score: 74, class: 'foxes'  },
  { name: 'Anastasia', score: 78, class: 'wolves' }
]

Kelas foxes:
  Dimitri   → score 90  (pertama masuk, langsung simpan)
  Sergei    → score 74  (74 < 90 → tidak menggantikan)
  pemenang foxes = Dimitri (90) ✅

Kelas wolves:
  Alexei    → score 85  (pertama masuk, langsung simpan)
  Anastasia → score 78  (78 < 85 → tidak menggantikan)
  pemenang wolves = Alexei (85) ✅

Output:
{
  foxes:  { name: 'Dimitri', score: 90 },
  wolves: { name: 'Alexei', score: 85 }
}
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Parameter | `students` — array of objects dengan properti `name`, `score`, `class` |
| Output | Object dengan key = nama kelas, value = `{ name, score }` pemenang |
| Edge case | `students` kosong → return `{}` |
| Skor sama | Ambil yang pertama muncul di array |
| Proses utama | Bandingkan langsung saat loop — simpan jika kelas baru atau skor lebih tinggi |

---

> 💡 **Aturan Sederhana:** Tidak perlu grouping dulu — cukup loop setiap siswa, bandingkan skor langsung. Jika kelas belum ada atau skor lebih tinggi → simpan. Kondisi `||` menangani keduanya sekaligus.

---

═══════════════════════════════════════════════════════════════════════

# ✅ VERSI 1: `for...of` + Destructuring — Imperative Style

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Pemula%20%7C%20Readable-green?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative-orange?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const highestScore = (students) => {
  const result = {}

  for (const { name, score, class: className } of students) {
    if (!result[className] || score > result[className].score) {
      result[className] = { name, score }
    }
  }

  return result
}
```

</details>

### **Konsep Inti:**
```
Siapkan object kosong result = {}
Loop setiap siswa di dalam students (destructuring langsung)
  Jika kelas belum ada di result
    ATAU skor siswa lebih tinggi dari yang tersimpan:
      Simpan { name, score } ke result[className]
Return result
```

### **Step-by-Step (Detail):**

#### 🟡 Persiapan:

1. **`const result = {}`**
   - Object kosong sebagai wadah output
   - Dideklarasikan **di luar loop** agar tidak direset setiap iterasi
   - Akan diisi secara bertahap — satu entry per kelas
   ```javascript
   const result = {}
   ```

#### 🔄 Loop — `for (const { name, score, class: className } of students)`:

2. **`for...of students`**
   - Loop setiap siswa satu per satu tanpa perlu index manual
   - Berjalan sebanyak jumlah siswa di dalam array

3. **`{ name, score, class: className }`**
   - Destructuring langsung di parameter loop — ekstrak 3 properti sekaligus
   - `name` → nama siswa
   - `score` → nilai siswa
   - `class: className` → rename `class` menjadi `className` karena `class` adalah reserved word
   ```javascript
   for (const { name, score, class: className } of students) {
   ```

#### 🔴 Kondisi Seleksi:

4. **`if (!result[className] || score > result[className].score)`**

   Kondisi terdiri dari 2 bagian dengan `||` (OR):

   | Kondisi | Penjelasan |
   |---------|------------|
   | `!result[className]` | Kelas belum ada → `undefined` → `!undefined` = `true` |
   | `score > result[className].score` | Skor lebih tinggi dari yang tersimpan |

   Cukup **salah satu** bernilai `true` → masuk blok if.
   Short-circuit: jika kondisi pertama `true`, kondisi kedua tidak dievaluasi.

5. **`result[className] = { name, score }`**
   - Simpan siswa ini sebagai pemenang sementara kelasnya
   - Hanya `name` dan `score` — properti `class` tidak diperlukan di output
   - Bracket notation `result[className]` karena key berasal dari variabel
   ```javascript
   result[className] = { name, score }
   ```

#### 🔵 Di Luar Loop:

6. **`return result`**
   - Kembalikan object hasil seleksi semua kelas
   - Harus ada **di luar loop** — jika di dalam, fungsi berhenti di iterasi pertama
   ```javascript
   return result
   ```

### **Visualisasi untuk Normal Case 1:**

```
students = [
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves' },
  { name: 'Sergei',    score: 74, class: 'foxes'  },
  { name: 'Anastasia', score: 78, class: 'wolves' }
]

result = {}

─────────────────────────────────────────────────────────────
Iterasi 1: name='Dimitri', score=90, className='foxes'
─────────────────────────────────────────────────────────────
  !result['foxes']              → !undefined → true ✅
  (short-circuit — kondisi kedua tidak dievaluasi)
  → result['foxes'] = { name: 'Dimitri', score: 90 }

  result = { foxes: { name: 'Dimitri', score: 90 } }

─────────────────────────────────────────────────────────────
Iterasi 2: name='Alexei', score=85, className='wolves'
─────────────────────────────────────────────────────────────
  !result['wolves']             → !undefined → true ✅
  (short-circuit — kondisi kedua tidak dievaluasi)
  → result['wolves'] = { name: 'Alexei', score: 85 }

  result = {
    foxes:  { name: 'Dimitri', score: 90 },
    wolves: { name: 'Alexei', score: 85 }
  }

─────────────────────────────────────────────────────────────
Iterasi 3: name='Sergei', score=74, className='foxes'
─────────────────────────────────────────────────────────────
  !result['foxes']              → !{...} → false
  score > result['foxes'].score → 74 > 90 → false ❌
  → kondisi gagal, result tidak diubah

  result = {
    foxes:  { name: 'Dimitri', score: 90 }  ← tidak berubah
    wolves: { name: 'Alexei', score: 85 }
  }

─────────────────────────────────────────────────────────────
Iterasi 4: name='Anastasia', score=78, className='wolves'
─────────────────────────────────────────────────────────────
  !result['wolves']              → !{...} → false
  score > result['wolves'].score → 78 > 85 → false ❌
  → kondisi gagal, result tidak diubah

  result = {
    foxes:  { name: 'Dimitri', score: 90 }
    wolves: { name: 'Alexei', score: 85 }  ← tidak berubah
  }

─────────────────────────────────────────────────────────────
return result →
{
  foxes:  { name: 'Dimitri', score: 90 },
  wolves: { name: 'Alexei', score: 85 }
} ✅
```

### **Keywords:**
- 📖 **`for...of`** — loop modern untuk iterasi array tanpa index manual
- 📦 **Destructuring** — `{ name, score, class: className }` ekstrak properti sekaligus
- 🔑 **Reserved Word** — `class` tidak bisa jadi nama variabel langsung → rename jadi `className`
- 🔲 **Bracket Notation** — `result[className]` mengakses properti dengan nilai variabel sebagai key
- ⚡ **Short-circuit Evaluation** — `||` berhenti evaluasi jika kondisi pertama sudah `true`

### **Kapan Pakai:**
- ✅ Baru belajar JavaScript — alur paling eksplisit dan mudah dipahami
- ✅ Butuh `break` atau `continue` di tengah loop
- ✅ Ingin kode yang mudah di-debug dengan `console.log`
- ✅ Interview yang mengutamakan logika jelas

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa rename `class` saat destructuring**
```javascript
// ❌ SALAH — class adalah reserved word → SyntaxError
for (const { name, score, class } of students) { ... }

// ✅ BENAR — rename dengan class: className
for (const { name, score, class: className } of students) { ... }
```

**2) ❌ Pakai `&&` bukan `||` di kondisi**
```javascript
// ❌ SALAH — error untuk kelas baru
if (!result[className] && score > result[className].score) {
  // result[className] adalah undefined → .score → TypeError!
}

// ✅ BENAR — || cukup salah satu terpenuhi
if (!result[className] || score > result[className].score) { ... }
```

**3) ❌ `return result` di dalam loop**
```javascript
// ❌ SALAH — berhenti setelah siswa pertama
for (const { name, score, class: className } of students) {
  if (!result[className] || score > result[className].score) {
    result[className] = { name, score }
  }
  return result  // keluar terlalu cepat!
}

// ✅ BENAR — return di luar loop
for (const { ... } of students) { ... }
return result
```

**4) ❌ Pakai dot notation untuk key dari variabel**
```javascript
// ❌ SALAH — mencari key literal "className"
result.className = { name, score }

// ✅ BENAR — bracket notation menggunakan nilai variabel
result[className] = { name, score }
```

### **💡 Insight Penting:**

> **Kenapa kondisi `||` bukan `&&`?**
> Ada dua situasi: kelas baru (belum ada di result) dan kelas lama dengan skor lebih tinggi. Keduanya perlu penanganan yang sama. `||` cukup karena salah satu terpenuhi sudah cukup. `&&` akan error untuk kelas baru karena mencoba akses `.score` dari `undefined`.

> **Kenapa array kosong otomatis ter-handle tanpa guard clause?**
> Karena `for...of` pada array kosong tidak pernah masuk ke dalam loop — `result` tetap `{}` dan langsung di-return. Input kosong sudah aman tanpa kondisi tambahan.

---

═══════════════════════════════════════════════════════════════════════

# ⚡ VERSI 2: `reduce` Elegant — Functional Style

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Modern%20%7C%20Compact-purple?style=flat-square)
![Style](https://img.shields.io/badge/Style-Functional-9cf?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const highestScore = (students) => {
  return students.reduce((result, { name, score, class: className }) => {
    if (!result[className] || score > result[className].score) {
      result[className] = { name, score }
    }
    return result
  }, {})
}
```

</details>

### **Konsep Inti:**
```
Panggil reduce pada students dengan initialValue = {}
Untuk setiap siswa (destructuring → name, score, className):
  Jika kelas belum ada di result
    ATAU skor siswa lebih tinggi dari yang tersimpan:
      Simpan { name, score } ke result[className]
  Return result untuk iterasi berikutnya
Kembalikan hasil akhir reduce langsung
```

### **Step-by-Step (Detail):**

#### 🟡 Inisialisasi `reduce`:

1. **`students.reduce((result, { name, score, class: className }) => { ... }, {})`**
   - `reduce` dipanggil pada array `students`
   - **`result`** = accumulator — dimulai dari `{}`, diperbarui setiap iterasi
   - **`{ name, score, class: className }`** = destructuring parameter siswa saat ini
   - **`{}`** = initialValue — accumulator dimulai dari object kosong
   ```javascript
   return students.reduce((result, { name, score, class: className }) => {
   ```

#### 🔄 Di Dalam Callback (per iterasi):

2. **`if (!result[className] || score > result[className].score)`**

   Kondisi terdiri dari 2 bagian dengan `||` (OR):

   | Kondisi | Penjelasan |
   |---------|------------|
   | `!result[className]` | Kelas belum ada → `undefined` → `!undefined` = `true` |
   | `score > result[className].score` | Skor lebih tinggi dari yang tersimpan |

3. **`result[className] = { name, score }`**
   - Simpan siswa ini sebagai pemenang sementara kelasnya
   - Hanya `name` dan `score` — properti `class` tidak diperlukan
   ```javascript
   result[className] = { name, score }
   ```

4. **`return result`**
   - **Wajib ada** — return value menjadi `result` di iterasi berikutnya
   - Tanpa ini, `result` menjadi `undefined` di iterasi berikutnya → error
   ```javascript
   return result
   ```

#### 🔵 Di Luar Callback:

5. **`return students.reduce(...)`**
   - Return langsung hasil `reduce` tanpa variabel perantara
   - Setelah semua siswa diproses, `reduce` mengembalikan `result` terakhir
   ```javascript
   return students.reduce(...)
   ```

### **Visualisasi untuk Normal Case 1:**

```
students = [
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves' },
  { name: 'Sergei',    score: 74, class: 'foxes'  },
  { name: 'Anastasia', score: 78, class: 'wolves' }
]

initialValue → result = {}

─────────────────────────────────────────────────────────────
Iterasi 1: name='Dimitri', score=90, className='foxes'
─────────────────────────────────────────────────────────────
  !result['foxes']              → !undefined → true ✅
  (short-circuit — kondisi kedua tidak dievaluasi)
  → result['foxes'] = { name: 'Dimitri', score: 90 }
  return result → { foxes: { name: 'Dimitri', score: 90 } }

─────────────────────────────────────────────────────────────
Iterasi 2: name='Alexei', score=85, className='wolves'
─────────────────────────────────────────────────────────────
  !result['wolves']             → !undefined → true ✅
  (short-circuit — kondisi kedua tidak dievaluasi)
  → result['wolves'] = { name: 'Alexei', score: 85 }
  return result → {
    foxes:  { name: 'Dimitri', score: 90 },
    wolves: { name: 'Alexei', score: 85 }
  }

─────────────────────────────────────────────────────────────
Iterasi 3: name='Sergei', score=74, className='foxes'
─────────────────────────────────────────────────────────────
  !result['foxes']              → !{...} → false
  score > result['foxes'].score → 74 > 90 → false ❌
  → kondisi gagal, result tidak diubah
  return result → {
    foxes:  { name: 'Dimitri', score: 90 }  ← tidak berubah
    wolves: { name: 'Alexei', score: 85 }
  }

─────────────────────────────────────────────────────────────
Iterasi 4: name='Anastasia', score=78, className='wolves'
─────────────────────────────────────────────────────────────
  !result['wolves']              → !{...} → false
  score > result['wolves'].score → 78 > 85 → false ❌
  → kondisi gagal, result tidak diubah
  return result → {
    foxes:  { name: 'Dimitri', score: 90 }
    wolves: { name: 'Alexei', score: 85 }  ← tidak berubah
  }

─────────────────────────────────────────────────────────────
reduce selesai → return hasil akhir:
{
  foxes:  { name: 'Dimitri', score: 90 },
  wolves: { name: 'Alexei', score: 85 }
} ✅
```

### **Keywords:**
- 🔁 **`reduce`** — melipat semua elemen array menjadi satu nilai menggunakan accumulator
- 📦 **Accumulator** — `result` yang dimulai dari `{}`, diperbarui dan di-return setiap iterasi
- 🎯 **initialValue** — `{}` wajib ada agar accumulator dimulai dari object kosong
- 📦 **Destructuring di parameter** — `{ name, score, class: className }` langsung di callback
- ⚡ **Short-circuit Evaluation** — `||` berhenti evaluasi jika kondisi pertama sudah `true`

### **Kapan Pakai:**
- ✅ Familiar dengan `reduce` dan functional programming
- ✅ Ingin kode singkat tanpa variabel perantara
- ✅ Prefer gaya deklaratif — "dari array ini, hasilkan object ini"
- ✅ Codebase yang mengutamakan immutability dan functional style

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa `return result` di dalam callback**
```javascript
// ❌ SALAH — result menjadi undefined di iterasi ke-2
students.reduce((result, { name, score, class: className }) => {
  if (!result[className] || score > result[className].score) {
    result[className] = { name, score }
  }
  // lupa return result!
}, {})

// ✅ BENAR — return result wajib ada
students.reduce((result, { name, score, class: className }) => {
  if (!result[className] || score > result[className].score) {
    result[className] = { name, score }
  }
  return result
}, {})
```

**2) ❌ Lupa initialValue `{}`**
```javascript
// ❌ SALAH — elemen pertama dipakai sebagai accumulator
students.reduce((result, { name, score, class: className }) => {
  ...
  return result
})
// result iterasi pertama = { name: 'Dimitri', score: 90, class: 'foxes' }
// bukan {} → kode error!

// ✅ BENAR — initialValue {} wajib ada
students.reduce((result, { name, score, class: className }) => {
  ...
  return result
}, {})
```

**3) ❌ Lupa rename `class` saat destructuring**
```javascript
// ❌ SALAH — SyntaxError
students.reduce((result, { name, score, class }) => { ... }, {})

// ✅ BENAR
students.reduce((result, { name, score, class: className }) => { ... }, {})
```

### **💡 Insight Penting:**

> **Kenapa `return result` wajib ada di setiap iterasi?**
> `reduce` menggunakan return value dari callback sebagai `result` di iterasi berikutnya. Tanpa `return result`, JavaScript implisit return `undefined` — iterasi berikutnya mencoba akses properti dari `undefined` → error.

> **Apa bedanya versi `reduce` ini dengan kode eksplorasi yang juga pakai `reduce`?**
> Kode eksplorasi menggunakan `reduce` dua kali — satu untuk grouping, satu untuk seleksi. Versi ini menggunakan `reduce` satu kali — grouping dan seleksi dilakukan sekaligus. Lebih efisien karena tidak perlu menyimpan semua siswa per kelas di memori.

> **Kenapa `reduce` dianggap lebih idiomatik?**
> Karena mengekspresikan transformasi secara deklaratif: "dari array `students`, hasilkan object `result`." Sesuai filosofi functional programming — transformasi data tanpa side effects dari luar.

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES LENGKAP

═══════════════════════════════════════════════════════════════════════

```javascript
const testCases = [
  {
    input: [],
    expected: {},
    desc: 'Edge case — array kosong'
  },
  {
    input: [
      { name: 'Dimitri', score: 90, class: 'foxes' },
      { name: 'Alexei', score: 85, class: 'wolves' },
      { name: 'Sergei', score: 74, class: 'foxes' },
      { name: 'Anastasia', score: 78, class: 'wolves' }
    ],
    expected: {
      foxes: { name: 'Dimitri', score: 90 },
      wolves: { name: 'Alexei', score: 85 }
    },
    desc: 'Normal case 1 — dua kelas'
  },
  {
    input: [
      { name: 'Alexander', score: 100, class: 'foxes' },
      { name: 'Alisa', score: 76, class: 'wolves' },
      { name: 'Vladimir', score: 92, class: 'foxes' },
      { name: 'Albert', score: 71, class: 'wolves' },
      { name: 'Viktor', score: 80, class: 'tigers' }
    ],
    expected: {
      foxes: { name: 'Alexander', score: 100 },
      wolves: { name: 'Alisa', score: 76 },
      tigers: { name: 'Viktor', score: 80 }
    },
    desc: 'Normal case 2 — tiga kelas dengan jumlah siswa berbeda'
  },
  {
    input: [
      { name: 'A', score: 50, class: 'lion' }
    ],
    expected: {
      lion: { name: 'A', score: 50 }
    },
    desc: 'Edge case — hanya satu siswa'
  },
  {
    input: [
      { name: 'A', score: 70, class: 'lion' },
      { name: 'B', score: 70, class: 'lion' }
    ],
    expected: {
      lion: { name: 'A', score: 70 }
    },
    desc: 'Edge case — skor sama, ambil yang pertama muncul'
  },
  {
    input: [
      { name: 'Budi', score: 88, class: 'eagles' },
      { name: 'Siti', score: 92, class: 'eagles' },
      { name: 'Andi', score: 77, class: 'bears' }
    ],
    expected: {
      eagles: { name: 'Siti', score: 92 },
      bears: { name: 'Andi', score: 77 }
    },
    desc: 'Normal case 3 — siswa kedua mengalahkan siswa pertama di kelas yang sama'
  }
]

const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)

testCases.forEach(({ input, expected, desc }, index) => {
  const result = highestScore(input)
  const status = isEqual(result, expected) ? '✅ PASS' : '❌ FAIL'

  console.log(`Test Case #${index + 1}: ${status} - ${desc}`)

  if (status === '❌ FAIL') {
    console.log('Input   :', JSON.stringify(input))
    console.log('Expected:', JSON.stringify(expected))
    console.log('Result  :', JSON.stringify(result))
  }
})
```

**Output yang diharapkan:**
```
Test Case #1: ✅ PASS - Edge case — array kosong
Test Case #2: ✅ PASS - Normal case 1 — dua kelas
Test Case #3: ✅ PASS - Normal case 2 — tiga kelas dengan jumlah siswa berbeda
Test Case #4: ✅ PASS - Edge case — hanya satu siswa
Test Case #5: ✅ PASS - Edge case — skor sama, ambil yang pertama muncul
Test Case #6: ✅ PASS - Normal case 3 — siswa kedua mengalahkan siswa pertama di kelas yang sama
```

---

═══════════════════════════════════════════════════════════════════════

# 📊 PERBANDINGAN LENGKAP

═══════════════════════════════════════════════════════════════════════

| Aspek | ✅ for...of + Destructuring | ⚡ reduce Elegant |
|-------|:---------------------------:|:----------------:|
| Style | Imperative | Functional |
| Jumlah baris logika | 7 baris | 5 baris |
| Variabel perantara | `result` eksplisit | Implicit (initial value) |
| Butuh `return` dalam loop | ❌ Tidak | ✅ Ya (`return result`) |
| Destructuring | Di parameter loop | Di parameter callback |
| Kompleksitas waktu | O(n) | O(n) |
| Kompleksitas memori | O(1) | O(1) |
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Untuk pemula | ✅ Sangat cocok | ⚠️ Butuh paham `reduce` |

---

## 🎯 Decision Tree

```
Prioritas utama kamu apa?
│
├── READABILITY / BELAJAR
│   │
│   ├── Baru kenal JavaScript?    ──▶ ✅ for...of + destructuring
│   │                                  (paling linear, mudah di-debug)
│   │
│   └── Sudah familiar loop?      ──▶ ✅ for...of + destructuring
│                                       (tetap pilihan terbaik untuk clarity)
│
└── RINGKAS / FUNCTIONAL
    │
    └── Familiar dengan reduce?   ──▶ ⚡ reduce elegant
                                       (singkat, idiomatik, return langsung)

Default: ✅ for...of + destructuring — paling mudah dipahami untuk belajar ✅
```

---

## 🔑 Key Takeaways

```
┌─────────────────────────────────────────────────────────────────────┐
│  💡 Semua Solusi Menghasilkan Output yang Sama                      │
│     Perbedaan hanya pada pendekatan dan gaya penulisan              │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Tidak Perlu Grouping Dulu                                       │
│     Bandingkan langsung saat loop — lebih efisien dari 2 pass       │
├─────────────────────────────────────────────────────────────────────┤
│  💡 class Adalah Reserved Word                                      │
│     Selalu rename: class: className saat destructuring              │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Kondisi || Menangani Dua Kasus Sekaligus                        │
│     Kelas baru (!result[className]) atau skor lebih tinggi          │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Array Kosong Otomatis Ter-handle                                │
│     for...of dan reduce pada [] tidak masuk loop → return {} ✅     │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Pilih Sesuai Konteks                                            │
│     Belajar → for...of   |   Ringkas → reduce elegant              │
│     Keduanya O(n) waktu dan O(1) memori                             │
└─────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

## 🎯 Quick Reference Card

| Versi | Highlight |
|-------|-----------|
| ✅ **for...of** | `const result = {}` → `for (const { name, score, class: className } of students)` → `if (!result[className] \|\| score > result[className].score)` → `result[className] = { name, score }` → `return result` |
| ⚡ **reduce** | `students.reduce((result, { name, score, class: className }) =>` → `if (!result[className] \|\| score > ...)` → `result[className] = { name, score }` → `return result` → `, {})` |

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
