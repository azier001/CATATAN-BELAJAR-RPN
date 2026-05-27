# 📚 Algoritma Sorting - PART 9: PERBANDINGAN & KESIMPULAN

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        🏆 PART 9: PERBANDINGAN & KESIMPULAN 🏆                          ║
║                                                                          ║
║         Bubble Sort · Selection Sort · Insertion Sort                    ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Algorithms](https://img.shields.io/badge/Algorithms-3%20Solusi-success?style=for-the-badge)

---

## 🧭 Quick Jump

| 🎯 Tujuan | 📊 Perbandingan | 🎯 Decision Tree | 🧪 Test Cases | 🎓 Outcomes | 🔑 Takeaways |
|:---------:|:---------------:|:----------------:|:-------------:|:-----------:|:------------:|
| [Jump](#-tujuan) | [Jump](#-perbandingan-lengkap) | [Jump](#-decision-tree) | [Jump](#-test-cases-semua-algoritma) | [Jump](#-learning-outcomes) | [Jump](#-master-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Membandingkan ketiga algoritma secara menyeluruh
- ✅ Memahami kapan menggunakan algoritma yang tepat
- ✅ Ringkasan semua yang telah dipelajari dalam satu tempat

---

═══════════════════════════════════════════════════════════════════════

# 📊 PERBANDINGAN LENGKAP

═══════════════════════════════════════════════════════════════════════

## Tabel Perbandingan

| Aspek | 🫧 Bubble Sort | 🎯 Selection Sort | 🃏 Insertion Sort |
|-------|:--------------:|:-----------------:|:-----------------:|
| **Cara kerja** | Gelembungkan terbesar ke kanan | Pilih terkecil, taruh ke kiri | Sisipkan ke posisi yang tepat |
| **Mekanisme** | Swap | Swap | Geser (shift) |
| **Swap per pass** | Berkali-kali | Maksimal 1x | Tidak ada swap |
| **Penulisan per langkah** | 3 (swap) | 3 (swap) | 1 (geser) |
| **Early stop** | ✅ `swapped` flag | ❌ Tidak ada | ✅ Kondisi while |
| **Complexity worst** | O(n²) | O(n²) | O(n²) |
| **Complexity best** | O(n) | O(n²) | O(n) |
| **Cocok untuk** | Belajar, data hampir urut | Data acak | Data hampir terurut |

---

## Perbandingan Kode

### 🫧 Bubble Sort
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

### 🎯 Selection Sort
```javascript
const sortAlphabetically = (inputString) => {
  const characters = inputString.split('')
  const length = characters.length

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < length; j++) {
      if (characters[j] < characters[minIndex]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      let temp = characters[i]
      characters[i] = characters[minIndex]
      characters[minIndex] = temp
    }
  }

  return characters.join('')
}
```

### 🃏 Insertion Sort
```javascript
const sortAlphabetically = (inputString) => {
  const characters = inputString.split('')
  const length = characters.length

  for (let i = 1; i < length; i++) {
    const current = characters[i]

    let j = i - 1

    while (j >= 0 && characters[j] > current) {
      characters[j + 1] = characters[j]
      j--
    }

    characters[j + 1] = current
  }

  return characters.join('')
}
```

---

═══════════════════════════════════════════════════════════════════════

# 🎯 DECISION TREE

═══════════════════════════════════════════════════════════════════════

```
Apa tujuan utamamu?
│
├── 📚 Belajar konsep sorting dari nol
│    └──▶ 🫧 Bubble Sort
│          Paling mudah dipahami, visualisasi paling intuitif
│
├── 🔀 Data acak, ingin swap sesedikit mungkin
│    └──▶ 🎯 Selection Sort
│          Maksimal 1x swap per pass
│
└── ⚡ Data hampir terurut, ingin performa terbaik
     └──▶ 🃏 Insertion Sort
           Best case O(n), geser lebih efisien dari swap


Default untuk challenge ini: 🫧 Bubble Sort ✅
(sesuai saran soal dan paling bagus untuk belajar)
```

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES SEMUA ALGORITMA

═══════════════════════════════════════════════════════════════════════

```javascript
// ─────────────────────────────────────────
// PILIH SALAH SATU IMPLEMENTASI DI BAWAH
// ─────────────────────────────────────────

// 🫧 BUBBLE SORT
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

// ─────────────────────────────────────────

// 🎯 SELECTION SORT
// const sortAlphabetically = (inputString) => {
//   const characters = inputString.split('')
//   const length = characters.length
//   for (let i = 0; i < length - 1; i++) {
//     let minIndex = i
//     for (let j = i + 1; j < length; j++) {
//       if (characters[j] < characters[minIndex]) minIndex = j
//     }
//     if (minIndex !== i) {
//       let temp = characters[i]
//       characters[i] = characters[minIndex]
//       characters[minIndex] = temp
//     }
//   }
//   return characters.join('')
// }

// ─────────────────────────────────────────

// 🃏 INSERTION SORT
// const sortAlphabetically = (inputString) => {
//   const characters = inputString.split('')
//   const length = characters.length
//   for (let i = 1; i < length; i++) {
//     const current = characters[i]
//     let j = i - 1
//     while (j >= 0 && characters[j] > current) {
//       characters[j + 1] = characters[j]
//       j--
//     }
//     characters[j + 1] = current
//   }
//   return characters.join('')
// }

// ─────────────────────────────────────────
// TEST RUNNER
// ─────────────────────────────────────────

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

// Hasil: 9/9 ✅ PASS (semua algoritma)
```

---

═══════════════════════════════════════════════════════════════════════

# 🎓 LEARNING OUTCOMES

═══════════════════════════════════════════════════════════════════════

Setelah menyelesaikan semua part, kamu sudah bisa:

### Algoritma
- ✅ Mengimplementasikan **Bubble Sort** dari nol
- ✅ Mengimplementasikan **Selection Sort** dari nol
- ✅ Mengimplementasikan **Insertion Sort** dari nol
- ✅ Memahami perbedaan **swap** vs **geser (shift)**
- ✅ Memahami konsep **early stop** untuk optimasi

### Clean Code
- ✅ Menerapkan **naming convention** bahasa Inggris yang deskriptif
- ✅ Menerapkan prinsip **Single Responsibility**
- ✅ Memahami konsep **pass by reference** pada array
- ✅ Melakukan **refactoring** bertahap tanpa mengubah fungsionalitas

### Problem Solving
- ✅ Memahami kenapa string harus **di-split** sebelum sorting
- ✅ Memahami perbedaan **immutable** (string) vs **mutable** (array)
- ✅ Bisa membandingkan **trade-off** setiap algoritma

---

═══════════════════════════════════════════════════════════════════════

# 🔑 MASTER KEY TAKEAWAYS

═══════════════════════════════════════════════════════════════════════

```
┌─────────────────────────────────────────────────────────────────────┐
│  💡 String Immutable → Harus Split Dulu                             │
│     Selalu .split('') sebelum sorting, .join('') setelah selesai    │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Array Pass by Reference                                         │
│     Fungsi yang menerima array tidak perlu return                   │
│     Perubahan langsung mempengaruhi array asli                      │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Semua Algoritma O(n²) Worst Case                                │
│     Perbedaan ada di best case dan jumlah operasi penulisan         │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Swap = 3 Penulisan, Geser = 1 Penulisan                        │
│     Insertion Sort lebih efisien dalam hal penulisan                │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Pilih Algoritma Sesuai Konteks                                  │
│     Belajar → Bubble | Acak → Selection | Hampir urut → Insertion   │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Refactoring Tidak Mengubah Fungsionalitas                       │
│     Kode yang berbeda bisa menghasilkan output yang sama            │
│     Yang berubah hanya kualitas: readability & maintainability      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 8: Ringkasan Algoritma Insertion Sort](08-ringkasan-algoritma-insertion-sort.md)**
- **📖 [Lanjut ke Part 10: Ringkasan Semua Versi →](10-ringkasan-semua-versi.md)**

---

<div align="center">

## 🎉 Selamat! Kamu Telah Menyelesaikan Semua Part!

```
🫧 Bubble Sort  ✅
🎯 Selection Sort ✅
🃏 Insertion Sort ✅
🔧 Refactoring ✅
📦 Pass by Reference ✅
🏗️ Single Responsibility ✅
```

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>