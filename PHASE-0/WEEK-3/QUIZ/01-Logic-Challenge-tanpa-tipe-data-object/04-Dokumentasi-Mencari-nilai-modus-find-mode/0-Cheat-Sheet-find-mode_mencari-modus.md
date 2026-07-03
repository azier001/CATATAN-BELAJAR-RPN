# 🔄 Cheat Sheet — Mencari Modus (Find Mode)

> 📋 Ringkasan **7 versi kode** dari sesi mentoring & review. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Production Ready — Set + Object ⭐ `PALING DIREKOMENDASIKAN`

> 📁 Sumber: README.md — Bonus: Hasil Refactoring (Production Ready)

```javascript
function cariModus(numbers) {
  // 1. Guard clause for identical numbers or empty array
  if (new Set(numbers).size <= 1) return -1;

  const frequencies = {};

  // 2. Populate the frequency map
  for (const num of numbers) {
    frequencies[num] = (frequencies[num] || 0) + 1;
  }

  let maxFrequency = 0;
  let mode = null;

  // 3. Find mode by iterating the original array (preserves order)
  for (const num of numbers) {
    if (frequencies[num] > maxFrequency) {
      maxFrequency = frequencies[num];
      mode = num;
    }
  }

  // 4. Guard clause for all unique numbers (no dominant mode)
  if (maxFrequency <= 1) return -1;

  return mode;
}
```

> 🔑 Gabungan terbaik: `Set` untuk early return + Object frequency map + loop array asli untuk jaga urutan. English naming convention (`frequencies`, `maxFrequency`, `mode`).

### 2. Frequency Map v3 — Object Tanpa Set ⭐ `PRODUCTION READY`

> 📁 Sumber: 00-Ringkasan-Algoritma.md — Versi 3: findMode (Frequency Map)

```javascript
const findMode = (numbers) => {
  const frequencyMap = {}

  for (const number of numbers) {
    frequencyMap[number] = (frequencyMap[number] || 0) + 1
  }

  let modeValue = -1
  let highestFrequency = 1

  for (const number of numbers) {
    const currentFrequency = frequencyMap[number]

    if (currentFrequency > highestFrequency) {
      highestFrequency = currentFrequency
      modeValue = number
    }
  }

  if (highestFrequency === 1 || highestFrequency === numbers.length) return -1

  return modeValue
}
```

> 🔑 O(n) dengan frequency map. `highestFrequency` diinisialisasi `1` (modus minimal muncul 2x). Tanpa Set guard clause, edge case ditangani di akhir.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. Nested Loop — Mental Model Dua Jari ⭐ `PALING INTUITIF`

> 📁 Sumber: README.md — Fase 2: Kode Final (Pendekatan Bertahap)

```javascript
const cariModus = (arr) => {
  let modus;
  let maxFreq = 0;

  for (let i = 0; i < arr.length; i++) {
    let freq = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) freq++;
    }

    // Perbaikan Gotcha: Pakai if block untuk update 2 hal sekaligus
    if (freq > maxFreq) {
      maxFreq = freq;
      modus = arr[i];
    }
  }

  // Edge cases dari Fase 1
  if (maxFreq === 1 || maxFreq === arr.length) return -1;

  return modus;
};
```

> 🔑 Loop luar (jari telunjuk) menunjuk kandidat, loop dalam (jari tengah) menghitung kemunculan. O(N²) tapi sangat intuitif untuk memahami dasar logika.

### 4. Object + Loop — Versi Indonesia ⭐ `EVOLUSI DARI NESTED LOOP`

> 📁 Sumber: README.md — Fase 3: Kode Final (Evolusi Solusi dengan Object)

```javascript
const cariModus = (arr) => {
  const frekuensi = {};

  // 1. Catat ke dalam Object
  for (const number of arr) {
    frekuensi[number] = (frekuensi[number] || 0) + 1;
  }

  let modus;
  let maxFreq = 0;

  // 2. Loop Array lagi untuk menentukan pemenang sesuai urutan
  for (let i = 0; i < arr.length; i++) {
    let total = frekuensi[arr[i]];

    if (total > maxFreq) {
      maxFreq = total;
      modus = arr[i];
    }
  }

  // 3. Edge cases
  if (maxFreq === 1 || maxFreq === arr.length) return -1;

  return modus;
};
```

> 🔑 Evolusi dari Nested Loop ke Object. Penamaan Indonesia (`frekuensi`, `modus`, `maxFreq`). O(N) dan tetap me-loop array asli untuk jaga urutan.

### 5. Two Array + includes — v1 cariModus ⭐ `PALING EKSPLISIT`

> 📁 Sumber: 00-Ringkasan-Algoritma.md — Versi 1: cariModus (Two Array + includes)

```javascript
function cariModus(arr) {
  const uniqueNumbers = []
  const count = []

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueNumbers.includes(arr[i])) {
      uniqueNumbers.push(arr[i])
      count.push(1)
    } else {
      const indexAngka = uniqueNumbers.indexOf(arr[i])
      count[indexAngka]++
    }
  }

  const maxCount = Math.max(...count)
  const indexModus = count.indexOf(maxCount)

  if (maxCount === 1 || uniqueNumbers.length === 1) return -1

  return uniqueNumbers[indexModus]
}
```

> 🔑 Dua array sinkron (`uniqueNumbers` & `count`). Pakai `includes` untuk cek keberadaan + `indexOf` untuk cari index. O(N²), cocok untuk belajar konsep *two array tracking*.

### 6. Two Array + indexOf Only — v2 findMode ⭐ `CLEAN CODE`

> 📁 Sumber: 00-Ringkasan-Algoritma.md — Versi 2: findMode (Two Array + indexOf Only)

```javascript
const findMode = (numbers) => {
  const uniqueNumbers = []
  const frequencies = []

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i]
    const existingIndex = uniqueNumbers.indexOf(currentNumber)

    if (existingIndex === -1) {
      uniqueNumbers.push(currentNumber)
      frequencies.push(1)
    } else {
      frequencies[existingIndex]++
    }
  }

  const maxFrequency = Math.max(...frequencies)

  if (maxFrequency === 1 || uniqueNumbers.length === 1) return -1

  const modeIndex = frequencies.indexOf(maxFrequency)
  return uniqueNumbers[modeIndex]
}
```

> 🔑 Optimasi dari v1: hanya `indexOf` (tanpa `includes`). Satu scan untuk dua keperluan (cek keberadaan sekaligus dapat index). Guard clause sebelum `modeIndex` agar tidak sia-sia.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 7. Kombinasi Set & `for...in` ⚠️ `RAWAN BUG/GOTCHA`

> 📁 Sumber: README.md — Bonus: Kode Orisinal User (Review Kode Mandiri)

```javascript
function cariModus(arr) {
  const newSet = new Set(arr);
  if (newSet.size <= 1) return -1; // Brilliant Move!

  const grouped = {};
  for (const number of arr) {
    if (!grouped[number]) []; // Dead code
    grouped[number] = (grouped[number] || 0) + 1;
  }

  let maxCount = 0;
  let resultNumber = null;

  for (const key in grouped) { // ⚠️ Urutan bisa kacau karena JS mengurutkan key angka
    if (grouped[key] > maxCount) {
      maxCount = grouped[key];
      resultNumber = Number(key);
    }
  }

  if (maxCount <= 1) return -1;
  return resultNumber;
}
```

> 🔑 Ide cerdas menggunakan `Set` untuk optimasi `size <= 1`. **Namun memiliki *bug* logis:** `for...in` secara otomatis mengurutkan *numeric keys* dari kecil ke besar, mengabaikan letak urutan dari array asli.

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ Math.max() kehilangan konteks pemenang (Hanya update rekor)
maxFreq = Math.max(maxFreq, freq);

// ✅ Blok if mencatat rekor DAN pemenangnya sekaligus
if (freq > maxFreq) {
  maxFreq = freq;
  modus = arr[i];
}
```

```javascript
// ❌ Iterasi Object (for...in) pada key angka tidak berurutan berdasar insersi
// Jika isi array [10, 5, 5, 10], engine JS bisa mengurutkannya jadi {'5': 2, '10': 2}
for (const key in grouped) { /*...*/ }

// ✅ Selalu iterasi array awalnya lagi untuk menjaga urutan posisi index
for (const num of numbers) {
  if (grouped[num] > max) { /*...*/ }
}
```

```javascript
// ❌ Lupa spread operator — return NaN
const maxCount = Math.max(count)

// ✅ Pakai spread operator
const maxCount = Math.max(...count)
```

```javascript
// ❌ Lupa || 0 — undefined + 1 = NaN
frequencyMap[number] = frequencyMap[number] + 1

// ✅ Default value jika key belum ada
frequencyMap[number] = (frequencyMap[number] || 0) + 1
```

---

## 📊 QUICK COMPARISON

| # | Pendekatan | Time | Readability | Keunggulan Utama | Rekomendasi |
|---|------------|------|-------------|------------------|-------------|
| 1 | **Production Ready (Set + Object)** | O(N) | ⭐⭐⭐⭐⭐ | Set early return + frequency map + English naming | 🏆 Best Practice |
| 2 | **Frequency Map v3 (Object)** | O(N) | ⭐⭐⭐⭐⭐ | Frequency map tanpa Set, `highestFrequency` init `1` | 🏆 Production |
| 3 | **Nested Loop (Dua Jari)** | O(N²) | ⭐⭐⭐⭐ | Paling intuitif, *mental model* sangat logis | 🧠 Fundamental |
| 4 | **Object + Loop (Indonesia)** | O(N) | ⭐⭐⭐⭐ | Evolusi dari nested loop, penamaan Indonesia | 🧠 Transisi |
| 5 | **Two Array + includes (v1)** | O(N²) | ⭐⭐⭐ | Paling eksplisit, `includes` + `indexOf` | 🧠 Learning |
| 6 | **Two Array + indexOf Only (v2)** | O(N²) | ⭐⭐⭐⭐ | Clean code, satu `indexOf` untuk dua keperluan | 🥈 Alternatif |
| 7 | **Set + `for...in`** | O(N) | ⭐⭐⭐ | Kode ringkas tapi rawan *bug* urutan (gotcha) | ⚠️ Hindari |

---

## 🧪 TEST CASES

```javascript
console.log(findMode([10, 4, 5, 2, 4]));       // 4
console.log(findMode([5, 10, 10, 6, 5]));       // 5
console.log(findMode([10, 3, 1, 2, 5]));        // -1
console.log(findMode([1, 2, 3, 3, 4, 5]));      // 3
console.log(findMode([7, 7, 7, 7, 7]));         // -1
console.log(findMode([1, 2, 1, 2, 3, 3]));      // 1
console.log(findMode([9, 9, 1, 2, 3]));         // 9
```
