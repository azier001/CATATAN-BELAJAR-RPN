# 🔄 Cheat Sheet — Mencari Median (Find Median)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Naming Deskriptif & Early Return ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const findMedian = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const totalNumbers = sortedNumbers.length;
  const middleIndex = Math.floor(totalNumbers / 2);

  // Early return untuk ganjil
  if (totalNumbers % 2 !== 0) {
    return sortedNumbers[middleIndex];
  }

  // Naming eksplisit untuk genap
  const leftMiddle = sortedNumbers[middleIndex - 1];
  const rightMiddle = sortedNumbers[middleIndex];

  return (leftMiddle + rightMiddle) / 2;
};
```

> 🔑 **Naming terbaik, mudah dibaca, dan pakai teknik `early return`. Sangat cocok untuk production code.**

### 2. Array Destructuring ⭐ `PALING INTUITIF`

```javascript
const findMedian = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const length = sortedNumbers.length;
  const mid = Math.floor(length / 2);

  if (length % 2 !== 0) {
    return sortedNumbers[mid];
  }

  // Ekstrak langsung kedua nilai tengah ke variabel bernama
  const [left, right] = [sortedNumbers[mid - 1], sortedNumbers[mid]];
  return (left + right) / 2;
};
```

> 🔑 **Sangat readable untuk tim karena penggunaan `[left, right]` yang langsung menjelaskan posisi elemen.**

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. If-Else Eksplisit (Fundamental & Terstruktur)

```javascript
const cariMedian = (arr) => {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const len = sortedArr.length;

  // Early return untuk ganjil
  if (len % 2 !== 0) {
    return sortedArr[Math.floor(len / 2)];
  }

  // Pendekatan sangat jelas untuk genap
  const leftIndex = len / 2 - 1;
  const rightIndex = len / 2;

  return (sortedArr[leftIndex] + sortedArr[rightIndex]) / 2;
};
```

> 🔑 **Bagus untuk belajar fundamental pencarian index pada array ganjil vs genap dengan blok kondisi yang jelas.**

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 4. Ternary Operator (Satu Baris Return)

```javascript
const findMedian = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const length = sortedNumbers.length;
  const midIndex = Math.floor(length / 2);

  return length % 2 !== 0
    ? sortedNumbers[midIndex]
    : (sortedNumbers[midIndex - 1] + sortedNumbers[midIndex]) / 2;
};
```

> 🔑 **Sangat ringkas namun kondisi genap yang digabung jadi satu baris panjang bisa sedikit mengurangi readability.**

### 5. Trik Matematika Tanpa If-Else

```javascript
const findMedian = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const length = sortedNumbers.length;

  // Pada array ganjil, midLeft dan midRight akan menghasilkan index yang sama
  const midLeft = Math.floor((length - 1) / 2);
  const midRight = Math.floor(length / 2);

  return (sortedNumbers[midLeft] + sortedNumbers[midRight]) / 2;
};
```

> 🔑 **Sangat elegan secara matematis karena membuang percabangan, tapi sulit dipahami sekilas oleh rekan tim (kurang cocok untuk kolaborasi).**

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ GOTCHA 1: Mutasi array asli tanpa disadari
const sorted = arr.sort((a, b) => a - b); // arr asli jadi ikut terurut!
// ✅ Solusi: Copy array dulu
const sorted = [...arr].sort((a, b) => a - b);

// ❌ GOTCHA 2: Sorting angka berantakan
[10, 2, 1].sort() // Hasil: [1, 10, 2] (karena diurut sebagai string)
// ✅ Solusi: Pakai callback numerik
[10, 2, 1].sort((a, b) => a - b) // Hasil: [1, 2, 10]

// ❌ GOTCHA 3: Order of Operations salah
const rataRata = a + b / 2; // b dibagi 2 dulu, lalu ditambah a (SALAH!)
// ✅ Solusi: Kurung (a+b) terlebih dahulu
const rataRata = (a + b) / 2;
```

---

## 📊 QUICK COMPARISON

| Versi | Baris (Logic) | Fitur Utama | Keterbacaan | Rekomendasi |
|---|:---:|---|:---:|---|
| **1. Naming Deskriptif** | 8 | Early Return, Naming Eksplisit | ⭐⭐⭐⭐⭐ | ✅ Production |
| **2. Destructuring** | 7 | ES6 Destructuring `[left, right]` | ⭐⭐⭐⭐⭐ | ✅ Kolaborasi Tim |
| **3. If-Else Eksplisit** | 7 | Standar, Mudah Dijelaskan | ⭐⭐⭐⭐ | 💡 Untuk Belajar |
| **4. Ternary** | 5 | Return 1-Liner | ⭐⭐⭐ | ⚡ Code Golfing |
| **5. Math Trick** | 4 | Tanpa IF, Murni Rumus | ⭐⭐ | 🧪 Eksperimental |

---

## 🧪 TEST CASES

```javascript
console.log(findMedian([1, 2, 3, 4, 5]));        // 3
console.log(findMedian([1, 3, 4, 10, 12, 13]));  // 7
console.log(findMedian([3, 4, 7, 6, 10]));       // 6
console.log(findMedian([1, 3, 3]));              // 3
console.log(findMedian([7, 7, 8, 8]));           // 7.5
```
