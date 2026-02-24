# 📚 Algoritma Sorting - PART 7: ALTERNATIF INSERTION SORT

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           🃏 PART 7: ALTERNATIF — INSERTION SORT 🃏                     ║
║                                                                          ║
║              Ambil Satu per Satu, Sisipkan di Posisi yang Tepat          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Algorithm](https://img.shields.io/badge/Algorithm-Insertion%20Sort-purple?style=for-the-badge)

---

## 🧭 Quick Jump

| 💡 Konsep | 👁️ Visualisasi | 💻 Kode | 🔄 Perbedaan | 🧪 Test Cases |
|:---------:|:--------------:|:-------:|:------------:|:-------------:|
| [Jump](#-konsep-insertion-sort) | [Jump](#-visualisasi-manual) | [Jump](#-kode) | [Jump](#-perbedaan-dengan-algoritma-lain) | [Jump](#-test-cases) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja Insertion Sort
- ✅ Tahu perbedaan Insertion Sort vs Bubble Sort vs Selection Sort
- ✅ Memahami konsep geser (shift) vs swap
- ✅ Bisa mengimplementasikan Insertion Sort dari nol
- ✅ Siap untuk mempelajari algoritma detail di Part 8

---

## 💡 Konsep Insertion Sort

> **Ide utama:** Seperti menyusun kartu di tangan. Ambil satu kartu, bandingkan dengan kartu yang sudah tersusun di kiri, **sisipkan di posisi yang tepat**.

Berbeda dengan Bubble Sort dan Selection Sort yang menggunakan **swap**, Insertion Sort menggunakan **geser (shift)** — lebih efisien karena hanya 1 penulisan di akhir, bukan 3 penulisan per swap.

---

## 👁️ Visualisasi Manual

Array: `['d','b','c','a']`

**Pass 1** — ambil index 1 (`'b'`), sisipkan ke posisi yang tepat:
```
['d','b','c','a']
      ↑ current = 'b', j = 0

  j=0: 'd' > 'b' → geser 'd' ke kanan
  ['d','d','c','a']  (posisi j+1 ditimpa dengan j)
  j-- → j = -1 → keluar while

  sisipkan 'b' di j+1 = 0
  ['b','d','c','a'] ✅
```

**Pass 2** — ambil index 2 (`'c'`), sisipkan ke posisi yang tepat:
```
['b','d','c','a']
          ↑ current = 'c', j = 1

  j=1: 'd' > 'c' → geser 'd' ke kanan
  ['b','d','d','a']
  j-- → j = 0

  j=0: 'b' > 'c' ❌ → stop!

  sisipkan 'c' di j+1 = 1
  ['b','c','d','a'] ✅
```

**Pass 3** — ambil index 3 (`'a'`), sisipkan ke posisi yang tepat:
```
['b','c','d','a']
               ↑ current = 'a', j = 2

  j=2: 'd' > 'a' → geser 'd' ke kanan
  ['b','c','d','d']
  j-- → j = 1

  j=1: 'c' > 'a' → geser 'c' ke kanan
  ['b','c','c','d']
  j-- → j = 0

  j=0: 'b' > 'a' → geser 'b' ke kanan
  ['b','b','c','d']
  j-- → j = -1 → keluar while

  sisipkan 'a' di j+1 = 0
  ['a','b','c','d'] ✅ selesai!
```

---

## 🔄 Perbedaan dengan Algoritma Lain

| | 🫧 Bubble Sort | 🎯 Selection Sort | 🃏 Insertion Sort |
|---|---|---|---|
| Cara kerja | Gelembungkan terbesar ke kanan | Pilih terkecil, taruh ke kiri | Sisipkan ke posisi yang tepat |
| Mekanisme | Swap | Swap | Geser (shift) |
| Swap per pass | Berkali-kali | Maksimal 1x | Tidak ada swap |
| Penulisan per langkah | 3 (swap) | 3 (swap) | 1 (geser) |
| Early stop | ✅ Ada | ❌ Tidak ada | ✅ Ada (kondisi while) |
| Complexity worst | O(n²) | O(n²) | O(n²) |
| Complexity best | O(n) | O(n²) | O(n) |
| Cocok untuk | Belajar | Data acak | Data hampir terurut |

---

## 💻 Kode

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

## ❓ Kenapa Begini?

### Loop luar mulai `i = 1`, bukan `i = 0`

```javascript
for (let i = 1; i < length; i++) {
```

> Index 0 dianggap **sudah tersusun** — tidak ada yang perlu dibandingkan di kirinya. Loop mulai dari index 1 karena itulah elemen pertama yang perlu disisipkan.

---

### `const current = characters[i]` — simpan dulu sebelum geser

```javascript
const current = characters[i]
```

> Nilai di posisi `i` harus disimpan sebelum proses geser dimulai, karena posisi `i` akan **ditimpa** saat elemen di sebelah kirinya digeser ke kanan.

---

### `let j = i - 1` — mulai bandingkan dari sebelah kiri

```javascript
let j = i - 1
```

> `j` dimulai dari tepat di sebelah kiri `current`, lalu mundur ke kiri selama kondisi while terpenuhi.

---

### Kondisi while — 2 syarat sekaligus

```javascript
while (j >= 0 && characters[j] > current) {
```

> **Syarat 1 `j >= 0`** — jangan sampai keluar batas kiri array. Jika `j = -1` berarti sudah sampai ujung kiri, stop.
>
> **Syarat 2 `characters[j] > current`** — geser hanya jika karakter kiri lebih besar dari `current`. Jika tidak, berarti `current` sudah di posisi yang tepat, stop.

---

### Geser ke kanan, bukan swap

```javascript
characters[j + 1] = characters[j]  // geser
j--
```

> Berbeda dari swap yang butuh 3 baris (temp, tukar, tukar balik), geser hanya butuh **1 baris** per langkah. Lebih efisien karena `current` sudah disimpan di awal.

---

### Sisipkan `current` di `j + 1`

```javascript
characters[j + 1] = current
```

> Setelah while berhenti, `j` sudah mundur satu langkah terlalu jauh dari posisi yang tepat. Makanya sisipkan di `j + 1`, bukan `j`.

---

## ⚠️ Pitfalls (Jebakan Umum)

**1) ❌ Kondisi while pakai `characters[j + 1]` bukan `characters[j]`**
```javascript
// ❌ SALAH — j + 1 adalah posisi current, bukan yang dibandingkan
while (j >= 0 && characters[j + 1] > current) {

// ✅ BENAR — bandingkan dengan karakter di sebelah kiri (posisi j)
while (j >= 0 && characters[j] > current) {
```

> `j = i - 1` artinya `j` sudah menunjuk ke sebelah kiri `current`. Yang perlu dibandingkan adalah `characters[j]`, bukan `characters[j + 1]` yang merupakan posisi `current` itu sendiri.

---

**2) ❌ Langsung isi `current` di dalam while, bukan geser dulu**
```javascript
// ❌ SALAH — current diisi berkali-kali sebelum posisi tepat ditemukan
while (j >= 0 && characters[j] > current) {
  characters[j + 1] = current   // langsung isi, posisi yang tepat belum tentu di sini!
  j--
}

// ✅ BENAR — geser dulu, sisipkan current SETELAH while selesai
while (j >= 0 && characters[j] > current) {
  characters[j + 1] = characters[j]  // geser ke kanan
  j--
}
characters[j + 1] = current  // baru sisipkan di posisi yang tepat
```

> Proses geser membuat "ruang kosong" yang terus berpindah ke kiri. Kita baru tahu posisi yang tepat untuk `current` **setelah while berhenti**, bukan di tengah-tengah proses geser.

---

**3) ❌ Lupa simpan `current` sebelum geser**
```javascript
// ❌ SALAH — nilai characters[i] tertimpa saat proses geser!
for (let i = 1; i < length; i++) {
  let j = i - 1

  while (j >= 0 && characters[j] > characters[i]) {  // characters[i] berubah!
    characters[j + 1] = characters[j]
    j--
  }

// ✅ BENAR — simpan dulu sebelum apapun ditimpa
for (let i = 1; i < length; i++) {
  const current = characters[i]  // simpan sebelum geser dimulai
  let j = i - 1

  while (j >= 0 && characters[j] > current) {
    characters[j + 1] = characters[j]
    j--
  }
```

---

**4) ❌ Sisipkan `current` di `j` bukan `j + 1`**
```javascript
// ❌ SALAH — j sudah mundur satu langkah terlalu jauh!
characters[j] = current

// ✅ BENAR — posisi yang tepat adalah j + 1
characters[j + 1] = current
```

> Setelah while berhenti, `j` sudah di posisi yang kondisinya tidak terpenuhi lagi — artinya `j` sudah **melewati** posisi yang tepat. Posisi yang benar adalah `j + 1`.

---

## 🧪 Test Cases

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
- **📖 [← Part 6: Ringkasan Algoritma Selection Sort](06-ringkasan-algoritma-selection-sort.md)**
- **📖 [Lanjut ke Part 8: Ringkasan Algoritma Insertion Sort →](08-ringkasan-algoritma-insertion-sort.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
