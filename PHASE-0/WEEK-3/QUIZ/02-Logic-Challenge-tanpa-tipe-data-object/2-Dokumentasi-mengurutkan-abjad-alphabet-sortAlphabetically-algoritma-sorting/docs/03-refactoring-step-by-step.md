# 📚 Algoritma Sorting - PART 3: REFACTORING STEP-BY-STEP

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🔧 PART 3: REFACTORING STEP-BY-STEP 🔧                        ║
║                                                                          ║
║              Dari Kode Original ke Clean Code Bertahap                   ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-green)

---

## 🧭 Quick Jump

| 🔤 Step 1 Naming | 🔃 Step 2 Swap | 🔄 Step 3 BubbleSort | 📊 Perbandingan | 🧪 Test Cases |
|:----------------:|:--------------:|:--------------------:|:---------------:|:-------------:|
| [Jump](#-step-1--naming-convention) | [Jump](#-step-2--ekstrak-swap-ke-fungsi-terpisah) | [Jump](#-step-3--ekstrak-bubble-sort-ke-fungsi-terpisah) | [Jump](#-perbandingan-original-vs-final) | [Jump](#-test-cases) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami proses refactoring secara bertahap
- ✅ Menerapkan naming convention bahasa Inggris yang deskriptif
- ✅ Memahami prinsip Single Responsibility
- ✅ Memahami konsep pass by reference pada array

---

## 🔤 Step 1 — Naming Convention

Perubahan pertama adalah memperbaiki nama fungsi, parameter, dan variabel agar lebih deskriptif dan menggunakan bahasa Inggris.

### Nama Fungsi

```javascript
// ❌ Original — bahasa Indonesia
function urutkanAbjad(str) {

// ✅ Refactor — bahasa Inggris, deskriptif
function sortAlphabetically(inputString) {
```

### Nama Parameter

```javascript
// ❌ Original — terlalu pendek, kurang deskriptif
function sortAlphabetically(str) {

// ✅ Refactor — jelas apa yang diinput
function sortAlphabetically(inputString) {
```

### Nama Variabel

```javascript
// ❌ Original — terlalu generik
const arr = str.split('')

// ✅ Refactor — menjelaskan isi variabel
const characters = inputString.split('')
```

### Hasil Step 1

```javascript
function sortAlphabetically(inputString) {
  const characters = inputString.split('')
  const length = characters.length

  for (let i = 0; i < length - 1; i++) {
    let swapped = false

    for (let j = 0; j < length - i - 1; j++) {
      if (characters[j] > characters[j + 1]) {
        let temp = characters[j]
        characters[j] = characters[j + 1]
        characters[j + 1] = temp

        swapped = true
      }
    }

    if (!swapped) break
  }

  return characters.join('')
}
```

### Detail Algoritma Step 1

#### 🔵 Deklarasi Fungsi:
1. **`function sortAlphabetically(inputString)`** — nama fungsi dalam bahasa Inggris, deskriptif sesuai tugasnya yaitu mengurutkan secara alfabetikal
2. **`inputString`** — nama parameter menjelaskan bahwa input yang diterima adalah sebuah string

#### 🔵 Di Luar Loop:
3. **`const characters = inputString.split('')`** — ubah string menjadi array karakter agar bisa di-swap
4. **`const length = characters.length`** — simpan panjang array

#### 🔄 Di Dalam Loop Luar `for (let i = 0; i < length - 1; i++)`:
5. **Kondisi loop** — mulai `i = 0`, berjalan selama `i < length - 1`, increment `i++`
6. **`let swapped = false`** — reset penanda swap di setiap pass

#### 🔄 Di Dalam Loop Dalam `for (let j = 0; j < length - i - 1; j++)`:
7. **Kondisi loop** — `length - i - 1` memastikan elemen yang sudah terkunci di akhir tidak dibandingkan lagi
8. **`if (characters[j] > characters[j + 1])`** — bandingkan dua karakter bersebelahan secara alfabetikal
9. **Swap dengan `temp`** — tukar posisi dua karakter menggunakan variabel sementara:
   - **`let temp = characters[j]`** — simpan nilai kiri ke `temp` agar tidak hilang saat ditimpa
   - **`characters[j] = characters[j + 1]`** — timpa posisi kiri dengan nilai kanan
   - **`characters[j + 1] = temp`** — isi posisi kanan dengan nilai kiri yang disimpan di `temp`
10. **`swapped = true`** — tandai bahwa ada pertukaran di pass ini

#### 🔵 Di Luar Loop Dalam, Masih Di Dalam Loop Luar:
11. **`if (!swapped) break`** — jika satu pass penuh tanpa swap → array sudah urut → berhenti lebih awal

#### 🔵 Di Luar Loop:
12. **`return characters.join('')`** — gabung array kembali menjadi string

---

## 🔃 Step 2 — Ekstrak Swap ke Fungsi Terpisah

Logika swap dikeluarkan dari fungsi utama menjadi fungsi tersendiri.

### Kenapa Perlu Diekstrak?

```javascript
// ❌ Swap tercampur di dalam loop — susah dibaca
for (let j = 0; j < length - i - 1; j++) {
  if (characters[j] > characters[j + 1]) {
    let temp = characters[j]          // swap logic
    characters[j] = characters[j + 1] // swap logic
    characters[j + 1] = temp          // swap logic
    swapped = true
  }
}

// ✅ Swap dipisah — lebih bersih
for (let j = 0; j < length - i - 1; j++) {
  if (characters[j] > characters[j + 1]) {
    swapCharacters(characters, j, j + 1)  // tinggal panggil
    swapped = true
  }
}
```

### 💡 Konsep Pass by Reference

> Array di JavaScript dikirim sebagai **alamat memori (reference)**, bukan salinan. Artinya perubahan di dalam fungsi **langsung mempengaruhi array aslinya** tanpa perlu `return`.

```javascript
// Bukti pass by reference:
const ubah = (arr) => {
  arr[0] = 999
  // tidak ada return
}

const angka = [1, 2, 3]
ubah(angka)
console.log(angka) // [999, 2, 3] ← berubah tanpa return!
```

### Hasil Step 2

```javascript
const swapCharacters = (characters, leftIndex, rightIndex) => {
  let temp = characters[leftIndex]
  characters[leftIndex] = characters[rightIndex]
  characters[rightIndex] = temp
  // tidak perlu return karena array pass by reference
}

const sortAlphabetically = (inputString) => {
  const characters = inputString.split('')
  const length = characters.length

  for (let i = 0; i < length - 1; i++) {
    let swapped = false

    for (let j = 0; j < length - i - 1; j++) {
      if (characters[j] > characters[j + 1]) {
        swapCharacters(characters, j, j + 1)
        swapped = true
      }
    }

    if (!swapped) break
  }

  return characters.join('')
}
```

---

## 🔄 Step 3 — Ekstrak Bubble Sort ke Fungsi Terpisah

Logika bubble sort dikeluarkan dari fungsi utama menjadi fungsi tersendiri.

### Kenapa Perlu Diekstrak?

Setelah Step 2, `sortAlphabetically` masih punya 2 tanggung jawab:

```
1. Konversi string → array → string  (urusan string)
2. Logika bubble sort                (urusan sorting)
```

Dengan memisahkan keduanya:

```javascript
// Fungsi ini HANYA urusan bubble sort
const bubbleSort = (characters) => { ... }

// Fungsi ini HANYA urusan konversi string
const sortAlphabetically = (inputString) => {
  const characters = inputString.split('')  // konversi
  bubbleSort(characters)                    // sorting
  return characters.join('')               // konversi balik
}
```

### Hasil Step 3 — Kode Final

```javascript
const swapCharacters = (characters, leftIndex, rightIndex) => {
  let temp = characters[leftIndex]
  characters[leftIndex] = characters[rightIndex]
  characters[rightIndex] = temp
}

const bubbleSort = (characters) => {
  const length = characters.length

  for (let i = 0; i < length - 1; i++) {
    let swapped = false

    for (let j = 0; j < length - i - 1; j++) {
      if (characters[j] > characters[j + 1]) {
        swapCharacters(characters, j, j + 1)
        swapped = true
      }
    }

    if (!swapped) break
  }
}

const sortAlphabetically = (inputString) => {
  const characters = inputString.split('')
  bubbleSort(characters)
  return characters.join('')
}
```

---

## 📊 Perbandingan Original vs Final

| Aspek | ❌ Original | ✅ Final Refactor |
|-------|------------|-----------------|
| Nama fungsi | `urutkanAbjad` | `sortAlphabetically` |
| Nama parameter | `str` | `inputString` |
| Nama variabel array | `arr` | `characters` |
| Jumlah fungsi | 1 | 3 |
| Swap | Inline di dalam loop | Fungsi terpisah `swapCharacters` |
| Sorting | Campur dengan konversi | Fungsi terpisah `bubbleSort` |
| Prinsip | — | Single Responsibility |
| Bahasa | Indonesia | Inggris |

---

## 🧪 Test Cases

```javascript
const swapCharacters = (characters, leftIndex, rightIndex) => {
  let temp = characters[leftIndex]
  characters[leftIndex] = characters[rightIndex]
  characters[rightIndex] = temp
}

const bubbleSort = (characters) => {
  const length = characters.length

  for (let i = 0; i < length - 1; i++) {
    let swapped = false

    for (let j = 0; j < length - i - 1; j++) {
      if (characters[j] > characters[j + 1]) {
        swapCharacters(characters, j, j + 1)
        swapped = true
      }
    }

    if (!swapped) break
  }
}

const sortAlphabetically = (inputString) => {
  const characters = inputString.split('')
  bubbleSort(characters)
  return characters.join('')
}

const testCases = [
  { input: 'hello', expected: 'ehllo', desc: "Mengurutkan 'hello'" },
  { input: 'truncate', expected: 'acenrttu', desc: "Mengurutkan 'truncate'" },
  { input: 'developer', expected: 'deeeloprv', desc: "Mengurutkan 'developer'" },
  { input: 'software', expected: 'aeforstw', desc: "Mengurutkan 'software'" },
  { input: 'aegis', expected: 'aegis', desc: "Sudah terurut dari awal" },
  { input: '', expected: '', desc: "String kosong" },
  { input: 'a', expected: 'a', desc: "Satu huruf saja" },
  { input: 'aaaa', expected: 'aaaa', desc: "Semua huruf sama" },
  { input: 'dcba', expected: 'abcd', desc: "Urutan terbalik penuh" },
]

testCases.forEach(({ input, expected, desc }, index) => {
  const result = sortAlphabetically(input)
  const status = result === expected ? '✅ PASS' : '❌ FAIL'

  console.log(
    `Test Case #${index + 1}: ${status} - ${desc} | sortAlphabetically('${input}') = '${result}'`
  )

  if (status === '❌ FAIL') {
    console.log('Input   :', input)
    console.log('Expected:', expected)
    console.log('Result  :', result)
  }
})

// Hasil: 9/9 ✅ PASS
```

---

## ✅ Ringkasan

> 💡 **Refactoring tidak mengubah fungsionalitas** — kode tetap lulus 9/9 test cases. Yang berubah hanya kualitas kode: lebih mudah dibaca, dipahami, dan dikelola.
>
> 🔑 **3 langkah refactoring:**
> 1. Perbaiki naming convention → nama yang deskriptif & bahasa Inggris
> 2. Ekstrak swap → fungsi `swapCharacters` yang reusable
> 3. Ekstrak bubble sort → fungsi `bubbleSort` dengan Single Responsibility

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 2: Analisis Kode Original](02-analisis-kode-original.md)**
- **📖 [Lanjut ke Part 4: Ringkasan Algoritma Refactoring →](04-ringkasan-algoritma-refactoring.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
