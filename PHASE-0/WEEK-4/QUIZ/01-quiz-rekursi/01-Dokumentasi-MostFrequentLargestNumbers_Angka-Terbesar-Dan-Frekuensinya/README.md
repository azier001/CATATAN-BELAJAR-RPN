# 📊 `mostFrequentLargestNumbers`

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Selesai-brightgreen?style=for-the-badge)
![Review](https://img.shields.io/badge/Review-Lengkap-blue?style=for-the-badge)

---

## 📚 Daftar Isi

- 📌 [Ringkasan Problem](#ringkasan-problem)
- 💡 [Solusi Versi Saya](#solusi-versi-saya)
- 🔍 [Review & Feedback](#review-feedback)
- 🔄 [Perbandingan Solusi](#perbandingan-solusi)
- ✅ [Hasil Test](#hasil-test)
- 🧠 [Insight Penting](#insight-penting)
- 🔑 [Keywords](#keywords)
- ❓ [FAQ](#faq)

---

<a name="ringkasan-problem"></a>
## 📌 Ringkasan Problem

Jadi challengenya gini — kita dikasih tiga function, tapi yang boleh diisi cuma dua: `sorting` dan `getTotal`. Function utamanya `mostFrequentLargestNumbers` tidak boleh disentuh sama sekali.

Tugasnya: cari angka terbesar dari array, terus hitung berapa kali angka itu muncul.

**Aturan mainnya:**
- Hanya boleh mengubah isi `sorting` dan `getTotal`
- Dilarang mengubah isi `mostFrequentLargestNumbers`
- Kalau array kosong, kembalikan string kosong `''`

Ini struktur awalnya yang dikasih soal — dua function masih kosong, satu function sudah ada isinya:

```javascript
function sorting(arrNumber) {
  // code di sini
}

function getTotal(arrNumber) {
  // code di sini
}

// function ini TIDAK BOLEH diubah
function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}
```

Coba dulu dengan test case sederhana ini satu per satu:

```javascript
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
// 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
```

```javascript
console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// 'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
```

```javascript
console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// 'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
```

```javascript
console.log(mostFrequentLargestNumbers([]));
// ''
```

---

<a name="solusi-versi-saya"></a>
## 💡 Solusi Versi Saya

Ide utamanya: kalau array sudah diurutkan dari besar ke kecil, angka terbesar pasti ada di index `0`. Dari situ tinggal hitung berapa kali angka itu muncul berturut-turut dari depan.

Ini solusi finalnya setelah melalui proses review:

```javascript
// sorting: copy dulu arraynya, baru diurutkan dari besar ke kecil
function sorting(arrNumber) {
  return [...arrNumber].sort((a, b) => b - a)
}

// getTotal: ambil angka terbesar dari index 0, lalu hitung kemunculannya
function getTotal(arrNumber) {
  if (!arrNumber.length) return ''

  const largestNumber = arrNumber[0]
  let count = 0

  // karena array sudah terurut, kita bisa berhenti begitu ketemu angka berbeda
  for (const number of arrNumber) {
    if (number === largestNumber) {
      count++
    } else {
      break
    }
  }

  return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${count} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}
```

**Pendekatan yang dipakai:**
- `sorting` → copy array pakai spread operator, lalu urutkan descending dengan `.sort()`
- `getTotal` → ambil `arrNumber[0]` sebagai angka terbesar, loop dari depan dan `break` saat ketemu angka berbeda

**Time Complexity:** `O(n log n)` — karena `.sort()`  
**Space Complexity:** `O(n)` — karena spread operator membuat copy array

---

<a name="review-feedback"></a>
## 🔍 Review & Feedback

### ✅ Yang Sudah Baik
- Logika `sorting` simpel dan tepat
- Edge case array kosong sudah ditangani di awal `getTotal` sebelum proses apapun
- Memanfaatkan hasil sorting dengan cerdas — `arrNumber[0]` langsung jadi angka terbesar, tidak perlu loop tambahan
- Format output pakai template literal, rapi dan mudah dibaca
- Pakai `break` untuk berhenti lebih awal, tidak buang-buang iterasi

### ⚠️ Potensi Bug / Edge Case

Ini beberapa kasus yang perlu dicek — pastikan solusi kita aman di semua situasi ini:

| Kasus | Penjelasan | Status |
|-------|------------|--------|
| Array kosong `[]` | Ditangani dengan early return `''` | ✅ Aman |
| Satu elemen `[5]` | Loop berjalan sekali, `count = 1` | ✅ Aman |
| Semua elemen sama `[1,1,1,1]` | Loop sampai habis, tidak ada `break` | ✅ Aman |
| Angka negatif `[-3, -5, -10]` | `.sort((a,b) => b-a)` tetap benar untuk negatif | ✅ Aman |
| Mutasi array asli | Versi awal `.sort()` langsung → array asli berubah | ⚠️ Diperbaiki |

### 📈 Saran Perbaikan

#### Readability
- Sudah bersih dan mudah dibaca, tidak ada yang perlu diubah

#### Performance
- Versi awal pakai `reduce` yang loop seluruh array sampai habis, padahal angka terbesar bisa sudah habis di tengah
- Versi final pakai `for...of` + `break` — begitu ketemu angka berbeda, langsung berhenti. Lebih hemat untuk array besar

#### Best Practice
- `.sort()` itu **mutating** — dia langsung ubah array aslinya, bukan bikin copy. Ini bahaya karena array yang kita kirim dari luar bisa berubah tanpa kita sadari. Solusinya: selalu pakai `[...arr]` atau `arr.slice()` dulu sebelum `.sort()`

---

<a name="perbandingan-solusi"></a>
## 🔄 Perbandingan Solusi

### Versi 1 — Versi Awal (sebelum review)

Ini kode pertama yang ditulis. Sudah benar hasilnya, tapi ada dua masalah kecil yang belum disadari waktu itu:

```javascript
function sorting(arrNumber) {
  // ⚠️ langsung sort tanpa copy — array asli ikut berubah!
  return arrNumber.sort((a, b) => b - a)
}

function getTotal(arrNumber) {
  if (!arrNumber.length) return ''

  const largestNumber = arrNumber[0]

  // ⚠️ reduce tidak bisa di-break, jadi loop terus sampai elemen terakhir
  const count = arrNumber.reduce((acc, number) => {
    if (number === largestNumber) acc++
    return acc
  }, 0)

  return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${count} kali`
}
```

### Versi 2 — Versi Final (setelah review) ⭐

Dua masalah di atas sudah diperbaiki. Ini versi yang paling direkomendasikan:

```javascript
function sorting(arrNumber) {
  // ✅ copy dulu dengan spread, baru sort — array asli aman
  return [...arrNumber].sort((a, b) => b - a)
}

function getTotal(arrNumber) {
  if (!arrNumber.length) return ''

  const largestNumber = arrNumber[0]
  let count = 0

  for (const number of arrNumber) {
    if (number === largestNumber) {
      count++
    } else {
      break // ✅ berhenti lebih awal, tidak buang-buang iterasi
    }
  }

  return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${count} kali`
}
```

### Versi 3 — Alternatif: `Math.max` + `filter`

Pendekatan berbeda — tidak perlu sorting sama sekali. `Math.max` langsung cari terbesar, `filter` untuk hitung kemunculan:

```javascript
function sorting(arrNumber) {
  return arrNumber // tidak perlu diapa-apain
}

function getTotal(arrNumber) {
  if (!arrNumber.length) return ''

  // Math.max cari nilai terbesar langsung dari array
  const largestNumber = Math.max(...arrNumber)

  // filter buat array baru yang isinya hanya angka terbesar, terus hitung panjangnya
  const count = arrNumber.filter(n => n === largestNumber).length

  return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${count} kali`
}
```

**Visualisasi alur kerja** dengan contoh `[2, 8, 4, 6, 8, 5, 8, 4]`:

```
INPUT: [2, 8, 4, 6, 8, 5, 8, 4]
         ↓
┌─────────────────────────────────┐
│  Math.max(...arrNumber)         │
│                                 │
│  spread dulu jadi argumen:      │
│  Math.max(2, 8, 4, 6, 8, 5, 8, 4)
│              ↓                  │
│         largestNumber = 8       │
└─────────────────────────────────┘
         ↓
┌─────────────────────────────────┐
│  .filter(n => n === 8)          │
│                                 │
│  [2, 8, 4, 6, 8, 5, 8, 4]      │
│   ✗  ✓  ✗  ✗  ✓  ✗  ✓  ✗      │
│         ↓                       │
│      [8, 8, 8]                  │
└─────────────────────────────────┘
         ↓
┌─────────────────────────────────┐
│  .length → 3                    │
└─────────────────────────────────┘
         ↓
OUTPUT: "angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali"
```

**Step-by-step:**

```
Step 1 — Spread array ke dalam Math.max
  Math.max(...[2, 8, 4, 6, 8, 5, 8, 4])
  = Math.max(2, 8, 4, 6, 8, 5, 8, 4)
  = 8  ← largestNumber

Step 2 — Filter: buat array baru, hanya simpan yang === 8
  index 0 → 2 === 8? ✗ dibuang
  index 1 → 8 === 8? ✓ masuk
  index 2 → 4 === 8? ✗ dibuang
  index 3 → 6 === 8? ✗ dibuang
  index 4 → 8 === 8? ✓ masuk
  index 5 → 5 === 8? ✗ dibuang
  index 6 → 8 === 8? ✓ masuk
  index 7 → 4 === 8? ✗ dibuang
  hasil filter → [8, 8, 8]

Step 3 — Hitung panjang array hasil filter
  [8, 8, 8].length = 3  ← count

Step 4 — Susun output
  "angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali"
```

### Versi 4 — Alternatif: Selection Sort Manual

Ini versi dari AI lain — sorting-nya ditulis manual pakai Selection Sort, tanpa pakai `.sort()` bawaan JavaScript. Cocok untuk belajar cara kerja sorting dari nol:

```javascript
function sorting(arrNumber) {
  const result = [...arrNumber]

  // bandingkan setiap elemen dengan elemen setelahnya, tukar kalau perlu
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] < result[j]) {
        let temp = result[i]
        result[i] = result[j]
        result[j] = temp
      }
    }
  }

  return result
}

function getTotal(arrNumber) {
  if (arrNumber.length === 0) return ''

  const largest = arrNumber[0]
  let count = 0

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === largest) {
      count++
    } else {
      break
    }
  }

  return `angka paling besar adalah ${largest} dan jumlah kemunculan sebanyak ${count} kali`
}
```

**Visualisasi alur kerja** dengan contoh `[2, 8, 4]` (diperkecil agar mudah dibaca):

```
INPUT: [2, 8, 4]

════════════════════════════════════
  PHASE 1: SELECTION SORT
════════════════════════════════════

i=0, j=1 → bandingkan result[0]=2 dan result[1]=8
  2 < 8? ✓ → tukar!
  [2, 8, 4]
   ↕
  [8, 2, 4]

i=0, j=2 → bandingkan result[0]=8 dan result[2]=4
  8 < 4? ✗ → tidak ditukar
  [8, 2, 4]  (tetap)

i=1, j=2 → bandingkan result[1]=2 dan result[2]=4
  2 < 4? ✓ → tukar!
  [8, 2, 4]
      ↕
  [8, 4, 2]

Hasil sorting → [8, 4, 2]

════════════════════════════════════
  PHASE 2: HITUNG KEMUNCULAN
════════════════════════════════════

largest = result[0] = 8

index 0 → 8 === 8? ✓ count = 1
index 1 → 4 === 8? ✗ break! berhenti.

count = 1
```

**Step-by-step Selection Sort** dengan contoh lebih lengkap `[2, 8, 4, 6]`:

```
Array awal: [2, 8, 4, 6]

─── i=0 (posisi 0 cari yang terbesar) ───
  j=1: 2 < 8? ✓ → tukar  → [8, 2, 4, 6]
  j=2: 8 < 4? ✗ → skip   → [8, 2, 4, 6]
  j=3: 8 < 6? ✗ → skip   → [8, 2, 4, 6]

─── i=1 (posisi 1 cari yang terbesar) ───
  j=2: 2 < 4? ✓ → tukar  → [8, 4, 2, 6]
  j=3: 4 < 6? ✓ → tukar  → [8, 6, 2, 4]  ← catatan: j terus dari j=3

─── i=2 (posisi 2 cari yang terbesar) ───
  j=3: 2 < 4? ✓ → tukar  → [8, 6, 4, 2]

Hasil akhir: [8, 6, 4, 2] ✅
```

> 💡 **Cara kerjanya:** loop luar (`i`) menentukan posisi yang sedang "diisi". Loop dalam (`j`) mencari angka yang lebih besar dari posisi `i` — kalau ketemu, langsung ditukar. Hasilnya posisi paling depan selalu terisi angka terbesar yang tersisa.

### Tabel Perbandingan

| | V1 — Awal | V2 — Final ⭐ | V3 — Math.max | V4 — Manual Sort |
|---|---|---|---|---|
| Sorting | `.sort()` langsung | `[...arr].sort()` | Tidak perlu | Selection Sort |
| Hitung count | `reduce` (loop penuh) | `for...of` + `break` | `.filter()` (loop penuh) | `for` + `break` |
| Mutasi array asli | ⚠️ Ya | ✅ Tidak | ✅ Tidak | ✅ Tidak |
| Time Complexity | `O(n log n)` | `O(n log n)` | `O(n)` | `O(n²)` |
| Readability | ✅ Bersih | ✅ Bersih | ✅ Paling singkat | 📖 Eksplisit |
| Cocok untuk | — | Production | Kode singkat | Belajar algoritma |

---

<a name="hasil-test"></a>
## ✅ Hasil Test

Salin kode di bawah dan jalankan langsung untuk cek semua test case sekaligus:

```javascript
const testCases = [
  // Edge cases
  { input: [], expected: "", desc: "Array kosong" },
  { input: [5], expected: "angka paling besar adalah 5 dan jumlah kemunculan sebanyak 1 kali", desc: "Satu elemen" },

  // Basic cases
  { input: [1, 2, 3, 4, 5], expected: "angka paling besar adalah 5 dan jumlah kemunculan sebanyak 1 kali", desc: "Semua unik, ambil terbesar" },
  { input: [5, 5, 5, 5], expected: "angka paling besar adalah 5 dan jumlah kemunculan sebanyak 4 kali", desc: "Semua angka sama" },

  // Duplicate largest
  { input: [2, 8, 4, 6, 8, 5, 8, 4], expected: "angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali", desc: "Angka terbesar muncul beberapa kali" },
  { input: [10, 20, 20, 30, 30, 30], expected: "angka paling besar adalah 30 dan jumlah kemunculan sebanyak 3 kali", desc: "Largest dengan frekuensi tinggi" },

  // Mixed values
  { input: [122, 122, 130, 100, 135, 100, 135, 150], expected: "angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali", desc: "Largest hanya muncul sekali" },
  { input: [3, 1, 3, 2, 3, 2, 1], expected: "angka paling besar adalah 3 dan jumlah kemunculan sebanyak 3 kali", desc: "Largest juga paling sering" },

  // Negative numbers
  { input: [-10, -5, -3, -5, -3, -3], expected: "angka paling besar adalah -3 dan jumlah kemunculan sebanyak 3 kali", desc: "Angka negatif" },

  // Unsorted input
  { input: [7, 2, 9, 1, 9, 3, 9], expected: "angka paling besar adalah 9 dan jumlah kemunculan sebanyak 3 kali", desc: "Tidak terurut" },
]

testCases.forEach(({ input, expected, desc }, index) => {
  const result = mostFrequentLargestNumbers(input)
  const status = result === expected ? '✅ PASS' : '❌ FAIL'

  console.log(
    `Test Case #${index + 1}: ${status} - ${desc} | input = [${input}]`
  )

  if (status === '❌ FAIL') {
    console.log('Input   :', input)
    console.log('Expected:', expected)
    console.log('Result  :', result)
  }
})
```

**Hasil:**

| # | Deskripsi | Input | Status |
|---|-----------|-------|--------|
| 1 | Array kosong | `[]` | ✅ PASS |
| 2 | Satu elemen | `[5]` | ✅ PASS |
| 3 | Semua unik | `[1,2,3,4,5]` | ✅ PASS |
| 4 | Semua sama | `[5,5,5,5]` | ✅ PASS |
| 5 | Terbesar muncul beberapa kali | `[2,8,4,6,8,5,8,4]` | ✅ PASS |
| 6 | Largest frekuensi tinggi | `[10,20,20,30,30,30]` | ✅ PASS |
| 7 | Largest muncul sekali | `[122,122,130,100,135,100,135,150]` | ✅ PASS |
| 8 | Largest paling sering | `[3,1,3,2,3,2,1]` | ✅ PASS |
| 9 | Angka negatif | `[-10,-5,-3,-5,-3,-3]` | ✅ PASS |
| 10 | Tidak terurut | `[7,2,9,1,9,3,9]` | ✅ PASS |

---

<a name="insight-penting"></a>
## 🧠 Insight Penting

1. **Manfaatkan hasil sorting** — kalau array sudah diurutkan descending, angka terbesar selalu ada di index `0`. Tidak perlu `Math.max()` atau loop tambahan untuk mencarinya, tinggal ambil langsung.
2. **`.sort()` itu mutating** — ini jebakan yang sering tidak disadari. Selalu bikin copy dulu dengan `[...arr]` atau `arr.slice()` sebelum sort, biar array aslinya aman.
3. **Early break lebih efisien dari reduce** — karena array sudah terurut, angka yang sama pasti ngumpul di awal. Cukup loop dari depan dan `break` begitu ketemu angka berbeda, tidak perlu sampai elemen terakhir.
4. **Pisahkan tanggung jawab tiap function** — `sorting` hanya urusin sorting, `getTotal` hanya urusin counting. Kode jadi lebih mudah dibaca dan kalau ada bug lebih gampang dilacak.
5. **Built-in lebih baik dari manual (untuk kasus umum)** — `.sort()` bawaan JavaScript sudah dioptimasi di level engine (`O(n log n)`), sedangkan Selection Sort manual adalah `O(n²)`. Pakai built-in kecuali ada alasan spesifik untuk tidak.

---

<a name="keywords"></a>
## 🔑 Keywords

| Keyword | Penjelasan Singkat |
|---------|--------------------|
| `.sort((a, b) => b - a)` | Mengurutkan array secara descending |
| Spread operator `[...arr]` | Membuat shallow copy array untuk menghindari mutasi |
| `for...of` + `break` | Loop yang bisa dihentikan lebih awal saat kondisi tidak terpenuhi |
| `reduce` | Method array yang mengakumulasi nilai dari seluruh elemen |
| `Math.max(...arr)` | Mencari nilai terbesar dari array menggunakan spread |
| `.filter()` | Membuat array baru berisi elemen yang memenuhi kondisi |
| Mutating method | Method yang mengubah array/object asli secara langsung |
| Early return | Mengembalikan nilai lebih awal untuk menangani edge case |
| Template literal | Sintaks `` `...${variable}...` `` untuk string dinamis |
| Selection Sort | Algoritma sorting manual dengan kompleksitas `O(n²)` |

---

<a name="faq"></a>
## ❓ FAQ

<details>
<summary>Kenapa <code>sorting</code> harus mengembalikan array, bukan langsung angka terbesar?</summary>

Karena `mostFrequentLargestNumbers` meneruskan hasil `sorting` langsung ke `getTotal`:

```javascript
var listSort = sorting(arrNumber);
var countHighest = getTotal(listSort); // butuh array, bukan angka
```

`getTotal` perlu array untuk bisa menghitung berapa kali angka terbesar muncul. Kalau `sorting` hanya return angkanya saja, `getTotal` tidak punya data apa-apa untuk diproses.

</details>

<details>
<summary>Kenapa harus pakai <code>[...arrNumber]</code> sebelum <code>.sort()</code>?</summary>

Karena `.sort()` langsung mengubah array aslinya — bukan bikin copy baru. Jadi kalau kita sort tanpa copy, array yang dikirim dari luar ikut berubah urutannya tanpa kita sadari.

Contoh bahayanya:

```javascript
const myArr = [2, 8, 4]
myArr.sort((a, b) => b - a)
console.log(myArr) // [8, 4, 2] ← array asli berubah!
```

Dengan spread operator, array asli aman:

```javascript
const myArr = [2, 8, 4]
const sorted = [...myArr].sort((a, b) => b - a)
console.log(myArr)   // [2, 8, 4] ← tetap sama
console.log(sorted)  // [8, 4, 2] ← yang berubah hanya copy-nya
```

</details>

<details>
<summary>Kenapa <code>for...of + break</code> lebih baik dari <code>reduce</code> untuk menghitung count?</summary>

Karena array sudah terurut descending, angka terbesar pasti ngumpul di bagian awal. Dengan `break`, loop langsung berhenti begitu ketemu angka yang berbeda — tidak perlu terus sampai elemen terakhir.

`reduce` tidak bisa di-break di tengah jalan, jadi selalu loop seluruh array meskipun angka terbesar sudah habis sejak lama. Untuk array kecil perbedaannya tidak terasa, tapi untuk array besar ini lumayan signifikan.

</details>

<details>
<summary>Kapan sebaiknya pakai <code>Math.max + filter</code> dibanding versi sorting?</summary>

Pakai `Math.max + filter` kalau mau kode yang lebih pendek dan tidak butuh array terurut setelahnya. Tapi perlu tahu satu kelemahan: `Math.max(...arr)` bisa error kalau arraynya sangat besar karena spread operator punya batas jumlah argumen yang bisa dikirim ke sebuah function.

Versi sorting lebih aman untuk kasus umum dan lebih fleksibel kalau nanti array terurut itu mau dipakai lagi di tempat lain.

</details>

---

*Dokumentasi pribadi — bagian dari sesi code review JavaScript.*
