# 🔄 Cheat Sheet — Most Frequent Largest Numbers

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Spread + Sort + Early Break ⭐ `PALING DIREKOMENDASIKAN`

```javascript
function sorting(arrNumber) {
  return [...arrNumber].sort((a, b) => b - a)
}

function getTotal(arrNumber) {
  if (!arrNumber.length) return ''

  const largestNumber = arrNumber[0]
  let count = 0

  for (const number of arrNumber) {
    if (number === largestNumber) count++
    else break
  }

  return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${count} kali`
}
```

> 🔑 Versi final yang aman dari mutasi (`[...arr]`) dan efisien berkat `break` saat angka sudah bukan terbesar. Cocok untuk **kode harian & production**.

---

### 2. Math.max + .filter() — Clean Declarative `PALING SINGKAT`

```javascript
function mostFrequentLargestNumbers(arrNumber) {
  if (arrNumber.length === 0) return ''

  const highestNumber = Math.max(...arrNumber)
  const counter = arrNumber.filter((number) => number === highestNumber).length

  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`
}
```

> 🔑 Tanpa sorting, langsung pakai `Math.max()`. Kode paling pendek dan paling mudah dibaca. **⚠️ Hati-hati spread limit untuk array sangat besar (>~100k elemen).**

---

### 3. Single Pass — O(N) Time + O(1) Space 🏎️ `PALING EFISIEN`

```javascript
function mostFrequentLargestNumbers(arrNumber) {
  if (arrNumber.length === 0) return ''

  let highestNumber = -Infinity
  let counter = 0

  for (const number of arrNumber) {
    if (number > highestNumber) {
      highestNumber = number
      counter = 1
    } else if (number === highestNumber) {
      counter++
    }
  }

  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`
}
```

> 🔑 Satu kali jalan, temukan terbesar & hitung frekuensi sekaligus. **Champion untuk coding interview** — O(N) time, O(1) space, tanpa sorting.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 4. Imperative for...of `PALING INTUITIF`

```javascript
function sorting(arrNumber) {
  return arrNumber.sort((a, b) => b - a)
}

function getTotal(arrNumber) {
  if (arrNumber.length === 0) return ''

  const highestNumber = arrNumber[0]
  let counter = 0

  for (const number of arrNumber) {
    if (number === highestNumber) counter++
  }

  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`
}
```

> 🔑 Logika paling dasar — sort lalu loop hitung. Mudah dipahami pemula. **⚠️ `.sort()` tanpa spread → mutasi array asli!**

---

### 5. Declarative .filter()

```javascript
function sorting(arrNumber) {
  return arrNumber.sort((a, b) => b - a)
}

function getTotal(arrNumber) {
  if (arrNumber.length === 0) return ''

  const highestNumber = arrNumber[0]
  const counter = arrNumber.filter((number) => number === highestNumber).length

  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`
}
```

> 🔑 Ganti manual loop dengan `.filter().length` — satu baris menghitung frekuensi. Lebih deklaratif dari V1.

---

### 6. Manual Selection Sort — Belajar Algoritma dari Nol

```javascript
function sorting(arrNumber) {
  const arr = [...arrNumber]

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr
}

function getTotal(arrNumber) {
  if (!arrNumber.length) return ''

  const largestNumber = arrNumber[0]
  let count = 0

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === largestNumber) {
      count++
    } else {
      break
    }
  }

  return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${count} kali`
}
```

> 🔑 Sorting manual dengan nested loop (Selection Sort). **O(n²) — jangan pakai di production**, tapi sangat bagus untuk memahami cara kerja sorting dari nol.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 7. Object Mapping — Frequency Counter

```javascript
function mostFrequentLargestNumbers(arrNumber) {
  if (arrNumber.length === 0) return ''

  const frequencyMap = {}

  for (const number of arrNumber) {
    if (frequencyMap[number] === undefined) {
      frequencyMap[number] = 1
    } else {
      frequencyMap[number]++
    }
  }

  const keys = Object.keys(frequencyMap)
  const highestNumber = Math.max(...keys)
  const counter = frequencyMap[highestNumber]

  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`
}
```

> 🔑 Bangun peta frekuensi dulu, baru cari angka terbesar dari key-nya. **Over-engineered untuk soal ini**, tapi pattern `frequencyMap` sangat berguna di challenge lain (anagram, counting sort, dll).

---

### 8. HOF + .reduce() — Enterprise Style

```javascript
function mostFrequentLargestNumbers(arrNumber) {
  if (arrNumber.length === 0) return ''

  const frequencyMap = arrNumber.reduce((acc, number) => {
    acc[number] = (acc[number] || 0) + 1
    return acc
  }, {})

  const highestNumber = Math.max(...Object.keys(frequencyMap))
  const counter = frequencyMap[highestNumber]

  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`
}
```

> 🔑 Versi `.reduce()` dari V7 — lebih ringkas tapi lebih sulit dibaca pemula. **Gunakan jika sudah terbiasa dengan Higher-Order Functions.**

---

### 9. Dummy Sorting + Math.max — Bypass `sorting()`

```javascript
function sorting(arrNumber) { return arrNumber }

function getTotal(arrNumber) {
  if (!arrNumber.length) return ''

  const largestNumber = Math.max(...arrNumber)
  const count = arrNumber.filter(n => n === largestNumber).length

  return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${count} kali`
}
```

> 🔑 `sorting()` jadi dummy (return array apa adanya), semua logika dipindah ke `getTotal()`. **⚠️ Melanggar kontrak soal** — fungsi `sorting` seharusnya benar-benar mengurutkan.

---

## ⚠️ GOTCHA CEPAT

### `.sort()` Mutasi vs Copy Dulu

```javascript
// ❌ BAHAYA — mutasi array asli
arrNumber.sort((a, b) => b - a)

// ✅ AMAN — copy dulu baru sort
[...arrNumber].sort((a, b) => b - a)
```

### `Math.max()` Spread Limit

```javascript
// ✅ Aman untuk array normal
Math.max(...[1, 2, 3, 4, 5])  // → 5

// ⚠️ CRASH untuk array > ~100.000 elemen
Math.max(...arrayBesarSekali)  // → RangeError: Maximum call stack size exceeded
```

### Early Break Hanya Bisa Setelah Sort

```javascript
// ✅ Array SUDAH tersort desc → break aman
// [8, 8, 8, 6, 5, 4] → ketemu 6, langsung break

// ❌ Array BELUM tersort → break SALAH hitung
// [2, 8, 4, 8, 8] → ketemu 2, langsung break padahal belum cek semuanya
```

---

## 📊 QUICK COMPARISON

| Versi | Pendekatan | Baris | Time | Space | Mutasi | Rekomendasi |
|-------|-----------|:-----:|:----:|:-----:|:------:|:-----------:|
| **#1** Spread+Sort+Break | `[...arr].sort()` + `break` | ~12 | O(N log N) | O(N) | ✅ Aman | ⭐ **BEST** |
| **#2** Math.max+Filter | `Math.max()` + `.filter()` | ~6 | O(N) | O(N) | ✅ Aman | 🏅 Singkat |
| **#3** Single Pass | Loop tunggal | ~14 | O(N) | O(1) | ✅ Aman | 🏎️ Efisien |
| **#4** for...of | `.sort()` + loop | ~10 | O(N log N) | O(1) | ⚠️ Ya | Pemula |
| **#5** .filter() | `.sort()` + `.filter()` | ~8 | O(N log N) | O(N) | ⚠️ Ya | Belajar |
| **#6** Selection Sort | Manual nested loop | ~22 | O(N²) | O(N) | ✅ Aman | Edukasi |
| **#7** Object Map | `frequencyMap` manual | ~14 | O(N) | O(N) | ✅ Aman | Pattern |
| **#8** .reduce() | `reduce` → map | ~10 | O(N) | O(N) | ✅ Aman | Enterprise |
| **#9** Dummy Sort | Bypass `sorting()` | ~6 | O(N) | O(N) | ✅ Aman | ⚠️ Bypass |

---

## 🧪 TEST CASES

```javascript
// === Quick Test ===
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]))
// 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([]))
// ''

// === Test Runner Lengkap ===
const testCases = [
  { input: [], expected: '', desc: 'Array kosong' },
  { input: [5], expected: 'angka paling besar adalah 5 dan jumlah kemunculan sebanyak 1 kali', desc: 'Satu elemen' },
  { input: [1, 2, 3, 4, 5], expected: 'angka paling besar adalah 5 dan jumlah kemunculan sebanyak 1 kali', desc: 'Semua unik' },
  { input: [5, 5, 5, 5], expected: 'angka paling besar adalah 5 dan jumlah kemunculan sebanyak 4 kali', desc: 'Semua sama' },
  { input: [2, 8, 4, 6, 8, 5, 8, 4], expected: 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali', desc: 'Terbesar muncul beberapa kali' },
  { input: [10, 20, 20, 30, 30, 30], expected: 'angka paling besar adalah 30 dan jumlah kemunculan sebanyak 3 kali', desc: 'Largest frekuensi tinggi' },
  { input: [-10, -5, -3, -5, -3, -3], expected: 'angka paling besar adalah -3 dan jumlah kemunculan sebanyak 3 kali', desc: 'Angka negatif' },
  { input: [7, 2, 9, 1, 9, 3, 9], expected: 'angka paling besar adalah 9 dan jumlah kemunculan sebanyak 3 kali', desc: 'Tidak terurut' },
]

testCases.forEach(({ input, expected, desc }, index) => {
  const result = mostFrequentLargestNumbers(input)
  const status = result === expected ? '✅ PASS' : '❌ FAIL'
  console.log(`Test #${index + 1}: ${status} — ${desc}`)
  if (status === '❌ FAIL') {
    console.log('Expected:', expected)
    console.log('Got     :', result)
  }
})
```

---

⬆️ [Kembali ke README](README.md)
