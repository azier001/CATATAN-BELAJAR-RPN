# 🔄 Cheat Sheet — Grouping Numbers (Mengelompokkan Angka)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Functional Pendekatan (Menggunakan `.reduce()`) ⭐ `PALING ELEGAN`

```javascript
const mengelompokkanAngka = (arr) => {
  return arr.reduce(
    (groups, num) => {
      if (num % 3 === 0) groups[2].push(num);
      else if (num % 2 === 0) groups[0].push(num);
      else groups[1].push(num);
      return groups;
    },
    [[], [], []]
  );
};
```

> 🔑 Cocok untuk tim modern/React. Mengubah array input menjadi struktur data baru tanpa memutasi variabel dari luar (pure function).

### 2. Highly Readable (Menggunakan `.filter()`) ⭐ `PALING INTUITIF`

```javascript
const mengelompokkanAngka = (arr) => {
  const evenNumbers = arr.filter(num => num % 2 === 0 && num % 3 !== 0);
  const oddNumbers = arr.filter(num => num % 2 !== 0 && num % 3 !== 0);
  const multiplesOfThree = arr.filter(num => num % 3 === 0);

  return [evenNumbers, oddNumbers, multiplesOfThree];
};
```

> 🔑 Fokus pada *readability*. Kode seperti membaca kalimat dalam bahasa Inggris. Walaupun iterasi terjadi 3 kali (O(3n)), tetap efisien jika array tidak berisi jutaan baris.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 1. For Loop & Explicit Arrays ⭐ `PALING DIREKOMENDASIKAN UNTUK PEMULA`

```javascript
function mengelompokkanAngka(arr) {
  const evenNumbers = [];
  const oddNumbers = [];
  const multiplesOfThree = [];

  for (const number of arr) {
    if (number % 3 === 0) {
      multiplesOfThree.push(number);
    } else if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
  }

  return [evenNumbers, oddNumbers, multiplesOfThree];
}
```

> 🔑 Pola pikir paling natural. Mudah di-debug dan dipahami karena penamaan penampungnya spesifik. Performanya maksimal O(n).

### 2. For Loop dengan Single Container (Menghindari Variable Clutter)

```javascript
function mengelompokkanAngka(arr) {
  const result = [[], [], []];
  const EVEN_IDX = 0, ODD_IDX = 1, MUL_3_IDX = 2;

  for (const number of arr) {
    if (number % 3 === 0) {
      result[MUL_3_IDX].push(number);
    } else if (number % 2 === 0) {
      result[EVEN_IDX].push(number);
    } else {
      result[ODD_IDX].push(number);
    }
  }

  return result;
}
```

> 🔑 Mirip seperti pendekatan pertama, namun menampung kelompok di dalam Array Multidimensi. Ditambah konstanta untuk menghindari *Magic Numbers*.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 1. Modern Expressive (Menggunakan `.forEach()`)

```javascript
const mengelompokkanAngka = (arr) => {
  const result = [[], [], []];

  arr.forEach((number) => {
    if (number % 3 === 0) result[2].push(number);
    else if (number % 2 === 0) result[0].push(number);
    else result[1].push(number);
  });

  return result;
};
```

> 🔑 Lebih ringkas dari `for...of`, tapi ingat bahwa iterasi `.forEach()` tidak bisa dihentikan (`break`) di tengah jalan. Waspadai penggunaan indeks absolut (magic numbers) tanpa deklarasi konstanta.

---

## ⚠️ GOTCHA CEPAT

1. **Jebakan Prioritas (Angka 6 atau 12)**
   - ❌ Jika mengecek genap lebih dulu (`if(n % 2 === 0)`), maka angka 6 akan masuk wadah Genap. Padahal instruksi meminta ia diprioritaskan ditaruh di wadah Kelipatan 3.
   - ✅ Harus selalu cek **Kelipatan 3 terlebih dahulu** (`if(n % 3 === 0)`).

2. **Jebakan Saat Menggunakan `.filter()`**
   - ❌ `arr.filter(n => n % 2 === 0)` ➔ angka 6 akan ikut tersaring karena ia genap.
   - ✅ Kelipatan 3 harus dieksklusi secara manual di kondisi genap/ganjil: `arr.filter(n => n % 2 === 0 && n % 3 !== 0)`.

3. **Jebakan Menggunakan `.reduce()`**
   - ❌ Pemula sering lupa mengembalikan (*return*) accumulator variabel (`groups`) di akhir *callback function*, sehingga pada iterasi selanjutnya `groups` menjadi *undefined* dan menghasilkan error.
   - ✅ Selalu tulis `return groups;` di baris terakhir dalam blok perulangan fungsi `.reduce()`.

---

## 📊 QUICK COMPARISON

| Versi | Pendekatan Utama | Waktu Eksekusi | Keunggulan Utama | Rekomendasi Penggunaan |
|---|---|---|---|---|
| **Versi 1** | `.reduce()` | Cepat O(n) | Sangat elegan (*Functional Programming*) | Production / Tim React |
| **Versi 2** | `.filter()` | Sedang O(3n) | Sangat mudah dibaca *(Readability)* | Modern Codebase |
| **Versi 3** | `for...of` Explicit Array | Paling Cepat O(n) | Mudah dipahami & proses *debugging* gampang | Interview / Pemula |
| **Versi 4** | `for...of` Multi-dimensi | Paling Cepat O(n) | Menghindari *variable clutter* | Fundamental Logic |
| **Versi 5** | `.forEach()` | Cepat O(n) | Kode lebih padat & singkat | Alternatif / Quick Script |

---

## 🧪 TEST CASES

```javascript
console.log(mengelompokkanAngka([2, 4, 6]));
// Output: [ [ 2, 4 ], [], [ 6 ] ]

console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// Output: [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]

console.log(mengelompokkanAngka([100, 151, 122, 99, 111]));
// Output: [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]

console.log(mengelompokkanAngka([]));
// Output: [ [], [], [] ]
```
