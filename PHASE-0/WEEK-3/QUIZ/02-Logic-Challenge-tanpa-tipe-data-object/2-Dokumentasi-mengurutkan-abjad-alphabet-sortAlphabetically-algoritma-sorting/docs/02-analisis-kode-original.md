# 📚 Algoritma Sorting - PART 2: ANALISIS KODE ORIGINAL

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🔍 PART 2: ANALISIS KODE ORIGINAL 🔍                          ║
║                                                                          ║
║              Apa yang Sudah Benar dan Apa yang Bisa Diperbaiki           ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 💻 Kode Original | ✅ Yang Benar | ⚠️ Yang Bisa Diperbaiki | 🧪 Test Cases |
|:----------------:|:------------:|:-----------------------:|:-------------:|
| [Jump](#-kode-original) | [Jump](#-yang-sudah-benar) | [Jump](#️-yang-bisa-diperbaiki) | [Jump](#-test-cases) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami kode original secara menyeluruh
- ✅ Tahu apa saja yang sudah benar dari kode original
- ✅ Tahu apa saja yang bisa diperbaiki
- ✅ Siap untuk mengikuti proses refactoring di Part 3

---

## 💻 Kode Original

```javascript
function urutkanAbjad(str) {
  const arr = str.split('')
  const length = arr.length

  for (let i = 0; i < length - 1; i++) {
    let swapped = false

    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp

        swapped = true
      }
    }

    if (!swapped) break
  }

  return arr.join('')
}
```

---

## ✅ Yang Sudah Benar

| # | ✅ Hal yang Benar | 📝 Penjelasan |
|---|------------------|--------------|
| 1 | 🚫 Tidak pakai `.sort()` | Sesuai kriteria soal |
| 2 | 🔄 Menggunakan Bubble Sort | Algoritma sorting yang valid |
| 3 | 🔤 `str.split('')` | Konversi string ke array dengan benar |
| 4 | 🔁 `length - i - 1` | Optimasi loop dalam, elemen terkunci tidak dibandingkan ulang |
| 5 | 🚀 Early stop dengan `swapped` | Optimasi jika array sudah terurut |
| 6 | 🔃 Swap dengan `temp` | Cara tukar nilai yang benar |
| 7 | 🔤 `arr.join('')` | Konversi array kembali ke string dengan benar |
| 8 | ✅ Lulus semua test cases | Fungsionalitas sudah benar |

---

## ⚠️ Yang Bisa Diperbaiki

### 1. 🏷️ Nama Fungsi — Bahasa Indonesia

```javascript
// ❌ Original — bahasa Indonesia
function urutkanAbjad(str) {

// ✅ Lebih baik — bahasa Inggris, deskriptif
function sortAlphabetically(inputString) {
```

> 💡 **Kenapa?** Convention dalam programming menggunakan bahasa Inggris agar kode lebih universal dan mudah dipahami oleh developer lain.

---

### 2. 🏷️ Nama Parameter — Terlalu Pendek

```javascript
// ❌ Original — kurang deskriptif
function urutkanAbjad(str) {

// ✅ Lebih baik — menjelaskan apa yang diterima
function sortAlphabetically(inputString) {
```

> 💡 **Kenapa?** Nama `str` terlalu generik. `inputString` lebih jelas menggambarkan bahwa parameter yang diterima adalah sebuah string.

---

### 3. 🏷️ Nama Variabel — Kurang Deskriptif

```javascript
// ❌ Original — terlalu generik
const arr = str.split('')

// ✅ Lebih baik — menjelaskan isi variabel
const characters = inputString.split('')
```

> 💡 **Kenapa?** Nama `arr` hanya menjelaskan tipe data (array), bukan isinya. `characters` lebih jelas menggambarkan bahwa isinya adalah array karakter.

---

### 4. 🏗️ Single Responsibility — Terlalu Banyak Tanggung Jawab

```javascript
// ❌ Original — satu fungsi, banyak tanggung jawab
function urutkanAbjad(str) {
  // 1. konversi string ke array
  // 2. logika bubble sort
  // 3. logika swap
  // 4. konversi array ke string
}

// ✅ Lebih baik — pisah tanggung jawab
function swapCharacters(characters, leftIndex, rightIndex) { ... }  // khusus swap
function bubbleSort(characters) { ... }                              // khusus sorting
function sortAlphabetically(inputString) { ... }                    // khusus konversi
```

> 💡 **Kenapa?** Prinsip **Single Responsibility** — satu fungsi sebaiknya punya satu tanggung jawab. Ini membuat kode lebih mudah dibaca, ditest, dan digunakan kembali.

---

## 🧪 Test Cases

```javascript
function urutkanAbjad(str) {
  const arr = str.split('')
  const length = arr.length

  for (let i = 0; i < length - 1; i++) {
    let swapped = false

    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp

        swapped = true
      }
    }

    if (!swapped) break
  }

  return arr.join('')
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
  const result = urutkanAbjad(input)
  const status = result === expected ? '✅ PASS' : '❌ FAIL'

  console.log(
    `Test Case #${index + 1}: ${status} - ${desc} | urutkanAbjad('${input}') = '${result}'`
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

## 📊 Ringkasan Analisis

| Aspek | Status | Catatan |
|-------|--------|---------|
| 🎯 Fungsionalitas | ✅ Benar | Lulus semua 9 test cases |
| 🚫 Kriteria soal | ✅ Terpenuhi | Tidak menggunakan `.sort()` |
| 🏷️ Naming convention | ⚠️ Perlu diperbaiki | Masih menggunakan bahasa Indonesia |
| 🏗️ Struktur kode | ⚠️ Perlu diperbaiki | Belum menerapkan Single Responsibility |
| 🚀 Optimasi | ✅ Ada | Early stop dengan `swapped` |

---

## ✅ Kesimpulan

> 💡 **Kode original sudah fungsional dan lulus semua test cases.** Namun dari sisi clean code dan best practice, masih ada beberapa hal yang bisa diperbaiki terutama pada naming convention dan struktur fungsi.
>
> 🔑 **Intinya:** Kode yang benar ≠ kode yang baik. Kode yang baik harus mudah dibaca, dipahami, dan dikelola oleh developer lain.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 1: Soal & Pemahaman Kriteria](01-soal-dan-pemahaman.md)**
- **📖 [Lanjut ke Part 3: Refactoring Step-by-Step →](03-refactoring-step-by-step.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
