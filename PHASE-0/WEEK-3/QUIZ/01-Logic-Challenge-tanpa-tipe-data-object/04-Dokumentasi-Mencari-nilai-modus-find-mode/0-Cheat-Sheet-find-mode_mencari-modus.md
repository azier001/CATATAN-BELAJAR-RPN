# 🔄 Cheat Sheet — Mencari Modus (Find Mode)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Frequency Map (Object) ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const findMode = (numbers) => {
  if (new Set(numbers).size <= 1) return -1;

  const frequencyMap = {};

  for (const number of numbers) {
    frequencyMap[number] = (frequencyMap[number] || 0) + 1;
  }

  let highestFrequency = 1;
  let modeValue = -1;

  for (const number of numbers) {
    const currentFrequency = frequencyMap[number];

    if (currentFrequency > highestFrequency) {
      highestFrequency = currentFrequency;
      modeValue = number;
    }
  }

  if (highestFrequency === 1 || highestFrequency === numbers.length) return -1;

  return modeValue;
};
```

> 🔑 Menggunakan object untuk melacak frekuensi. Menghasilkan performa O(n) tercepat dan tetap me-loop array asli untuk memastikan modus pertama yang diambil jika frekuensinya sama.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 2. Nested Loop (Mental Model Dua Jari) ⭐ `PALING INTUITIF`

```javascript
function cariModus(arr) {
  let modus;
  let maxFreq = 0;

  for (let i = 0; i < arr.length; i++) {
    let freq = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) freq++;
    }

    if (freq > maxFreq) {
      maxFreq = freq;
      modus = arr[i];
    }
  }

  if (maxFreq === 1 || maxFreq === arr.length) return -1;

  return modus;
}
```

> 🔑 Tidak memerlukan object atau method array. Loop luar untuk menentukan kandidat, loop dalam untuk menghitung kemunculannya di seluruh isi array. Sangat baik untuk memahami dasar logika.

### 3. Two Array Tracking (Eksplisit Tanpa Object)

```javascript
const findMode = (numbers) => {
  const uniqueNumbers = [];
  const frequencies = [];

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const existingIndex = uniqueNumbers.indexOf(currentNumber);

    if (existingIndex === -1) {
      uniqueNumbers.push(currentNumber);
      frequencies.push(1);
    } else {
      frequencies[existingIndex]++;
    }
  }

  const maxFrequency = Math.max(...frequencies);

  if (maxFrequency === 1 || uniqueNumbers.length === 1) return -1;

  const modeIndex = frequencies.indexOf(maxFrequency);
  return uniqueNumbers[modeIndex];
};
```

> 🔑 Memisahkan *tracking* angka unik dan kemunculannya dalam dua array terpisah (`uniqueNumbers` dan `frequencies`). Sering diminta dalam *challenge* dengan larangan tipe data Object.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 4. Kombinasi Set & `for...in` ⚠️ `RAWAN BUG/GOTCHA`

```javascript
function cariModus(arr) {
  const newSet = new Set(arr);
  if (newSet.size <= 1) return -1;

  const grouped = {};
  for (const number of arr) {
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

---

## 📊 QUICK COMPARISON

| Pendekatan | Time Complexity | Readability | Keunggulan Utama | Rekomendasi |
|------------|-----------------|-------------|------------------|-------------|
| **Frequency Map (Object)** | O(N) | ⭐⭐⭐⭐⭐ | Sangat efisien, *clean code* dengan `Set` | 🏆 Best Practice |
| **Two Array Tracking** | O(N²) | ⭐⭐⭐⭐ | *Clean naming*, memenuhi syarat tanpa object | 🥈 Alternatif |
| **Nested Loop (Dua Jari)** | O(N²) | ⭐⭐⭐ | *Beginner-friendly*, *mental model* sangat logis | 🧠 Fundamental |
| **Object + `for...in`** | O(N) | ⭐⭐⭐ | Kode ringkas tapi rawan *bug* urutan (gotcha) | ⚠️ Jangan Gunakan |

---

## 🧪 TEST CASES

```javascript
console.log(findMode([10, 4, 5, 2, 4])); // 4
console.log(findMode([5, 10, 10, 6, 5])); // 5
console.log(findMode([10, 3, 1, 2, 5])); // -1
console.log(findMode([1, 2, 3, 3, 4, 5])); // 3
console.log(findMode([7, 7, 7, 7, 7])); // -1
```
