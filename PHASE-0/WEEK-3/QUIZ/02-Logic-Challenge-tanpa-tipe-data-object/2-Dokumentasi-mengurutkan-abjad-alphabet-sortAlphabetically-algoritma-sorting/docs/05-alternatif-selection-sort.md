# 📚 Algoritma Sorting - PART 5: ALTERNATIF SELECTION SORT

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🔀 PART 5: ALTERNATIF — SELECTION SORT 🔀                     ║
║                                                                          ║
║              Pilih yang Terkecil, Taruh di Posisi yang Tepat             ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Algorithm](https://img.shields.io/badge/Algorithm-Selection%20Sort-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 💡 Konsep | 👁️ Visualisasi | 💻 Kode | 🧪 Test Cases |
|:---------:|:--------------:|:-------:|:-------------:|
| [Jump](#-konsep-selection-sort) | [Jump](#-visualisasi-manual) | [Jump](#-kode) | [Jump](#-test-cases) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja Selection Sort
- ✅ Tahu perbedaan Selection Sort vs Bubble Sort
- ✅ Bisa mengimplementasikan Selection Sort dari nol
- ✅ Siap untuk mempelajari algoritma detail di Part 6

---

## 💡 Konsep Selection Sort

> **Ide utama:** Di setiap pass, **cari karakter terkecil** dari posisi sekarang sampai akhir, lalu **pindahkan ke posisi paling kiri**.

Berbeda dengan Bubble Sort yang swap berkali-kali per pass, Selection Sort hanya **maksimal 1x swap per pass** karena mencari terkecil dulu baru swap di akhir.

---

## 👁️ Visualisasi Manual

Array: `['d','c','b','a']`

**Pass 1** — cari terkecil dari index 0 sampai akhir:
```
['d','c','b','a']
  ↑ minIndex=0 (asumsikan 'd' terkecil)

  cek 'c' < 'd' → minIndex = 1
  cek 'b' < 'c' → minIndex = 2
  cek 'a' < 'b' → minIndex = 3

  minIndex=3 ≠ i=0 → swap index 0 & 3
['a','c','b','d']  ← 'a' terkunci di index 0 ✅
```

**Pass 2** — cari terkecil dari index 1 sampai akhir:
```
['a','c','b','d']
     ↑ minIndex=1 (asumsikan 'c' terkecil)

  cek 'b' < 'c' → minIndex = 2
  cek 'd' < 'b' → tidak, skip

  minIndex=2 ≠ i=1 → swap index 1 & 2
['a','b','c','d']  ← 'b' terkunci di index 1 ✅
```

**Pass 3** — cari terkecil dari index 2 sampai akhir:
```
['a','b','c','d']
          ↑ minIndex=2 (asumsikan 'c' terkecil)

  cek 'd' < 'c' → tidak, skip

  minIndex=2 = i=2 → tidak perlu swap!
['a','b','c','d']  ✅ selesai!
```

---

## 🔄 Perbedaan dengan Bubble Sort

| | 🫧 Bubble Sort | 🎯 Selection Sort |
|---|---|---|
| Cara kerja | Gelembungkan terbesar ke kanan | Pilih terkecil, taruh ke kiri |
| Swap per pass | Berkali-kali | Maksimal 1x |
| Optimasi early stop | ✅ Ada (swapped flag) | ❌ Tidak ada |
| Complexity | O(n²) / O(n) best | O(n²) selalu |
| Cocok untuk | Belajar, data hampir urut | Data acak |

---

## 💻 Kode

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

---

## ❓ Kenapa Begini?

### Loop luar mulai `i = 0`, loop dalam mulai `j = i + 1`

```javascript
for (let i = 0; i < length - 1; i++) {
  let minIndex = i        // asumsikan posisi i adalah terkecil

  for (let j = i + 1; j < length; j++) {   // cek dari i+1 sampai akhir
```

> `j = i + 1` karena posisi `i` sudah dianggap terkecil via `minIndex = i`.
> Tidak perlu bandingkan dengan dirinya sendiri.

---

### Loop dalam sampai `length`, bukan `length - 1`

```javascript
for (let j = i + 1; j < length; j++)
```

> Berbeda dengan Bubble Sort! Di Selection Sort kita harus cek **semua elemen tersisa** untuk memastikan kita dapat yang terkecil. Kalau pakai `length - 1`, elemen terakhir tidak pernah dicek padahal bisa jadi dia yang terkecil.

---

### Swap hanya kalau `minIndex !== i`

```javascript
if (minIndex !== i) {
  let temp = characters[i]
  characters[i] = characters[minIndex]
  characters[minIndex] = temp
}
```

> Kalau `minIndex` tidak berubah setelah loop dalam, berarti posisi `i` sudah yang terkecil — tidak perlu swap!

---

### Swap pakai `i` dan `minIndex`, bukan `j` dan `j+1`

```javascript
// Bubble Sort — swap posisi bersebelahan
swapCharacters(characters, j, j + 1)

// Selection Sort — swap posisi i dengan posisi terkecil yang ditemukan
let temp = characters[i]
characters[i] = characters[minIndex]
characters[minIndex] = temp
```

> Selection Sort tidak langsung swap saat ketemu yang lebih kecil. Dia **cari dulu** mana yang terkecil sampai loop dalam selesai, **baru swap sekali** di akhir.

---

## 🧪 Test Cases

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

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 4: Ringkasan Algoritma Refactoring](04-ringkasan-algoritma-refactoring.md)**
- **📖 [Lanjut ke Part 6: Ringkasan Algoritma Selection Sort →](06-ringkasan-algoritma-selection-sort.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
