# 🔄 Cheat Sheet — Mengurutkan Abjad (Sort Alphabetically)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & CLEAN CODE
### 1. Bubble Sort (Multi Function) ⭐ `PALING DIREKOMENDASIKAN UNTUK MAINTAINABILITY`

```javascript
const swapCharacters = (characters, leftIndex, rightIndex) => {
  let temp = characters[leftIndex];
  characters[leftIndex] = characters[rightIndex];
  characters[rightIndex] = temp;
};

const bubbleSort = (characters) => {
  const length = characters.length;
  for (let i = 0; i < length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (characters[j] > characters[j + 1]) {
        swapCharacters(characters, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
};

const sortAlphabetically = (inputString) => {
  const characters = inputString.split('');
  bubbleSort(characters);
  return characters.join('');
};
```

> 🔑 **Single Responsibility Principle**. Logika dipecah menjadi fungsi kecil sehingga kode mudah dibaca, di-*debug*, dan digunakan ulang. Array dipassing secara *reference*.

### 2. Insertion Sort ⭐ `PALING EFISIEN (MEMINIMALKAN SWAP)`

```javascript
const sortAlphabetically = (inputString) => {
  const characters = inputString.split('');
  const length = characters.length;

  for (let i = 1; i < length; i++) {
    const current = characters[i];
    let j = i - 1;

    while (j >= 0 && characters[j] > current) {
      characters[j + 1] = characters[j];
      j--;
    }
    characters[j + 1] = current;
  }

  return characters.join('');
};
```

> 🔑 Menggunakan mekanisme geser (*shift*) alih-alih bertukar langsung (*swap*). Sangat cepat untuk data yang hampir berurutan.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)
### 3. Bubble Sort (Single Function) ⭐ `PALING INTUITIF`

```javascript
const sortAlphabetically = (inputString) => {
  const characters = inputString.split('');
  const length = characters.length;

  for (let i = 0; i < length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < length - i - 1; j++) {
      if (characters[j] > characters[j + 1]) {
        let temp = characters[j];
        characters[j] = characters[j + 1];
        characters[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return characters.join('');
};
```

> 🔑 Algoritma dasar yang paling mudah dipelajari. Menggunakan *nested loop* (loop bersarang) dan optimasi `swapped` (*early stop*).

---

## 🧪 EKSPERIMENTAL / ALTERNATIF
### 4. Selection Sort (Maksimal 1 Swap Per Pass)

```javascript
const sortAlphabetically = (inputString) => {
  const characters = inputString.split('');
  const length = characters.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (characters[j] < characters[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = characters[i];
      characters[i] = characters[minIndex];
      characters[minIndex] = temp;
    }
  }

  return characters.join('');
};
```

> 🔑 Terus mencari nilai paling kecil di sisa elemen, lalu menukarnya ke depan. Jumlah pertukaran sangat minim (baik untuk menghemat memori), namun selalu O(n²) waktu.

---

## ⚠️ GOTCHA CEPAT

- **String *Immutable*:** String di JavaScript tidak bisa diubah berdasarkan indeks (`str[0] = 'a'` tidak akan error tapi nilainya tetap). **Solusi:** `split('')` menjadi array, manipulasi, lalu `join('')`.
- **Pass By Reference:** Array yang dipassing ke dalam fungsi (`bubbleSort(array)` atau `swapCharacters(array)`) di-*passing* secara *reference*. Perubahan di dalam fungsi akan langsung memengaruhi array asli, sehingga *return array* tidak diwajibkan di dalam fungsi *helper*.

---

## 📊 QUICK COMPARISON

| Versi | Mekanisme | Swap Per Iterasi | Single Responsibility | Karakteristik Utama |
|---|---|---|---|---|
| **Bubble (Single)** | Swap Inline | Berkali-kali | ❌ | Mudah dipahami pemula, best case O(n) |
| **Bubble (Multi)** | Fungsi Eksternal | Berkali-kali | ✅ | *Clean code*, *maintainable*, dan rapi |
| **Selection** | Swap Sekali | Maksimal 1x | ❌ | Menekan jumlah swap, hemat memori, tapi konstan O(n²) |
| **Insertion** | Geser (*Shift*) | Tidak ada swap | ❌ | Efisien, best case O(n) jika hampir terurut, minim proses penulisan |

---

## 🧪 TEST CASES

```javascript
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
];

testCases.forEach(({ input, expected, desc }, index) => {
  const result = sortAlphabetically(input);
  const status = result === expected ? '✅ PASS' : '❌ FAIL';

  console.log(`Test Case #${index + 1}: ${status} - ${desc} | '${input}' -> '${result}'`);

  if (status === '❌ FAIL') {
    console.log('   Expected:', expected);
    console.log('   Result  :', result);
  }
});
```
