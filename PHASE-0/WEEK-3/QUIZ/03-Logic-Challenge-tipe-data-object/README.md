# 🧠 Quiz: Logic Challenge — Dengan Tipe Data Object

### ✨ _Kumpulan challenge logika JavaScript dengan Object — dari data transformation hingga profit calculation!_

> 🎯 **Konteks:** Folder ini berisi **3 challenge logika berbasis Object** dari **Quiz PHASE-0 WEEK-3** program RPN. Setiap challenge menggunakan **tipe data Object** sebagai struktur data utama dan didokumentasikan secara komprehensif dengan multiple versi solusi, analisis algoritma, clean code, dan test cases.

![Phase](https://img.shields.io/badge/Phase-0-blue?style=for-the-badge) ![Week](https://img.shields.io/badge/Week-3-green?style=for-the-badge) ![Type](https://img.shields.io/badge/Type-Quiz-red?style=for-the-badge) ![Challenges](https://img.shields.io/badge/Challenges-3-purple?style=for-the-badge)

---

## 📑 Daftar Challenge

| No  | Challenge                                                                    | Difficulty  | Topik Utama                                  |
| :-: | ---------------------------------------------------------------------------- | :---------: | -------------------------------------------- |
| 01  | [👤 buildProfileMap & changeMe](#-01--build-profile-map--change-me)          |  🟢 Beginner | Object Building, Destructuring, Age Calculation |
| 02  | [🛒 shoppingTime](#-02--shopping-time)                                       |  🟢 Beginner | Greedy Algorithm, Sorting, Object/Array      |
| 03  | [💰 countProfit](#-03--count-profit)                                         |  🟠 Medium  | Hash Map, O(N+M) Optimization, Stock Management |

---

## 👤 01 — Build Profile Map & Change Me

📂 [`1-Dokumentasi-membuat-profile-map-changeMe-buildProfileMap/`](./1-Dokumentasi-membuat-profile-map-changeMe-buildProfileMap/)

> _Membangun object map dari array data profile dan mentransformasi format data — menguasai object manipulation dan destructuring!_

**Deskripsi:** Dua challenge terkait yang mengolah array multidimensi berisi data profile:
- **`buildProfileMap`** — Membuat object map dengan `fullName` sebagai key, menghitung umur, menangani duplikat
- **`changeMe`** — Mentransformasi array profile menjadi format log object dengan validasi tahun lahir

**Konsep yang Dipelajari:**

- 🗺️ **Object as Map** — Menggunakan object sebagai dictionary/hash map
- 📦 **Destructuring Assignment** — Ekstraksi nilai dari array secara elegan
- 🔄 **Data Transformation** — Mengubah struktur data dari satu format ke format lain
- 📅 **Dynamic Date Calculation** — `new Date().getFullYear()` untuk menghitung umur
- 🚫 **Deduplication** — Memanfaatkan object key untuk menghindari duplikat
- ✅ **Input Validation** — Validasi tahun lahir (tidak boleh masa depan)
- 🎯 **for...in vs for...of** — Perbedaan iterasi object vs array

**Evolusi Solusi:**

| Versi | Pendekatan                                |     Kategori     |
| :---: | ----------------------------------------- | :--------------: |
|  V1   | `for...of` + `for...in`                   |  🔧 Fundamental  |
|  V2   | `reduce` + `for...in`                     | 🧪 Alternatif    |
|  V3   | `forEach` + `for...in`                    | ⚡ Best Practice |
|  V4   | `for...of` + `Object.entries`             | 🧪 Alternatif    |

```javascript
// Quick Preview — buildProfileMap (Best Practice)
const buildProfileMap = (profiles) => {
  if (profiles.length === 0) {
    console.log('')
    return
  }

  const CURRENT_YEAR = new Date().getFullYear()
  const profileMap = {}

  profiles.forEach(([firstName, lastName, gender, birthYear]) => {
    const fullName = `${firstName} ${lastName}`
    const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'

    if (!profileMap[fullName]) {
      profileMap[fullName] = { firstName, lastName, gender, age }
    }
  })

  const [firstFirstName, firstLastName] = profiles[0]
  console.log(`1. ${firstFirstName} ${firstLastName}:`)

  for (const fullName in profileMap) {
    console.log(`${fullName}:`, profileMap[fullName])
  }
}
```

```javascript
// Quick Preview — changeMe (Best Practice)
const changeMe = (peopleData) => {
  if (peopleData.length === 0) {
    console.log('');
    return;
  }

  const currentYear = new Date().getFullYear();

  peopleData.forEach(([firstName, lastName, gender, birthYear]) => {
    const isValidYear = birthYear && birthYear <= currentYear;
    const computedAge = isValidYear ? currentYear - birthYear : 'Invalid Birth Year';

    const person = { firstName, lastName, gender, age: computedAge };

    console.log(`${firstName} ${lastName}:`, person);
  });
};
```

**Contoh:**
```javascript
buildProfileMap([
  ['Christ', 'Evans', 'Male', 1982],
  ['Robert', 'Downey', 'Male']
])
// 1. Christ Evans:
// Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 44 }
// Robert Downey: { firstName: 'Robert', lastName: 'Downey', gender: 'Male', age: 'Invalid Birth Year' }

changeMe([
  ['Christ', 'Evans', 'Male', 1982],
  ['Robert', 'Downey', 'Male']
])
// Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 44 }
// Robert Downey: { firstName: 'Robert', lastName: 'Downey', gender: 'Male', age: 'Invalid Birth Year' }
```

---

## 🛒 02 — Shopping Time

📂 [`2-Dokumentasi-simulasi-belanja-member-toko-diskon-shoppingTime/`](./2-Dokumentasi-simulasi-belanja-member-toko-diskon-shoppingTime/)

> _Simulasi sistem belanja member dengan strategi Greedy — beli produk termahal terlebih dahulu!_

**Deskripsi:** Membuat fungsi `shoppingTime(memberId, money)` yang mensimulasikan belanja di Toko X yang sedang SALE. Member akan membeli produk termahal yang masih mampu dibeli hingga uang habis atau tidak cukup untuk produk manapun.

**Konsep yang Dipelajari:**

- 🎯 **Greedy Algorithm** — Strategi memilih opsi terbaik di setiap langkah
- 🔢 **Sorting Descending** — Mengurutkan produk dari termahal ke termurah
- 📊 **Array of Objects vs Plain Object** — Perbandingan struktur data
- 🔄 **Object.entries()** — Mengubah object menjadi array untuk sorting
- 💰 **State Management** — Tracking `changeMoney` dan `listPurchased`
- ✅ **Early Return Pattern** — Validasi input di awal function
- ⚡ **Early Break Optimization** — Stop loop saat uang tidak cukup untuk barang manapun
- 🎨 **Functional vs Imperative** — Perbandingan gaya pemrograman

**Evolusi Solusi:**

| Versi | Pendekatan                                |     Kategori     |
| :---: | ----------------------------------------- | :--------------: |
|  V1   | Plain Object + `for...in`                 |  🔧 Fundamental  |
|  V2   | Object.entries + Sort + `for...of`        |  🔧 Fundamental  |
|  V3   | Array of Objects + `for...of`             | ⚡ Best Practice |
|  V4   | `reduce` (Functional style)               | 🧪 Alternatif    |
|  V5   | AI Improved + Early Break + `MIN_PRICE`   | 🏆 Production    |

```javascript
// Quick Preview — V5 (AI Improved - Best Practice)
const MIN_PRICE = 50000

const products = [
  { name: 'Sepatu Stacattu', price: 1500000 },
  { name: 'Baju Zoro', price: 500000 },
  { name: 'Baju H&N', price: 250000 },
  { name: 'Sweater Uniklooh', price: 175000 },
  { name: 'Casing Handphone', price: 50000 }
]

const sortedByPrice = [...products].sort((a, b) => b.price - a.price)

function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  if (money < MIN_PRICE) return 'Mohon maaf, uang tidak cukup'

  const listPurchased = []
  let changeMoney = money

  for (const { name, price } of sortedByPrice) {
    if (changeMoney >= price) {
      changeMoney -= price
      listPurchased.push(name)
    }
    if (changeMoney < MIN_PRICE) break
  }

  return { memberId, money, listPurchased, changeMoney }
}
```

**Contoh:**
```javascript
shoppingTime('324193hDew2', 700000)
// { memberId: '324193hDew2', money: 700000, listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }

shoppingTime('', 2475000)
// 'Mohon maaf, toko X hanya berlaku untuk member saja'

shoppingTime('234JdhweRxa53', 15000)
// 'Mohon maaf, uang tidak cukup'
```

---

## 💰 03 — Count Profit

📂 [`3-Dokumentasi-hitung-profit-penjualan-toko-countProfit/`](./3-Dokumentasi-hitung-profit-penjualan-toko-countProfit/)

> _Menghitung profit penjualan toko dengan Hash Map optimization — dari O(N×M) ke O(N+M)!_

**Deskripsi:** Membuat fungsi `countProfit(shoppers)` yang menerima array data pembeli dan mengembalikan laporan penjualan per produk, termasuk daftar pembeli, sisa stock, dan total profit. Challenge ini fokus pada optimisasi performa dengan Hash Map.

**Konsep yang Dipelajari:**

- 🗺️ **Hash Map / Dictionary** — O(1) lookup untuk performa optimal
- ⚡ **Time Complexity Optimization** — Dari O(N×M) ke O(N+M)
- 📊 **Stock Management** — Tracking stock dan validasi ketersediaan
- 💰 **Profit Calculation** — Menghitung total keuntungan per produk
- 🔍 **Array.find() vs Hash Map** — Perbandingan performa
- 🎯 **Separation of Concerns** — Memisahkan data price dari report object
- 🚫 **Avoiding `delete` Operator** — V8 optimization consideration
- 🔄 **Pass by Reference** — Memanfaatkan mutasi object untuk efisiensi

**Evolusi Solusi:**

| Versi | Pendekatan                                | Complexity |     Kategori     |
| :---: | ----------------------------------------- | :--------: | :--------------: |
|  V1   | Procedural + Parallel Array               |   O(N×M)   |  🔧 Fundamental  |
|  V2   | Property Titipan + `delete`               |   O(N×M)   |  🔧 Fundamental  |
|  V3   | Higher-Order Functions (`.find`)          |   O(N×M)   | ⚡ Best Practice |
|  V4   | Hash Map + `delete`                       |   O(N+M)   | 🏆 Production    |
|  V5   | Hash Map Masterpiece (No `delete`)        |   O(N+M)   | 🏆 Production    |

```javascript
// Quick Preview — V5 (Hash Map Masterpiece - Best Practice)
const countProfit = (shoppers) => {
  if (shoppers.length === 0) return [];

  const listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  const salesReport = [];
  const productMap = {}; 

  for (const [productName, price, stock] of listBarang) {
    const reportItem = {
      product: productName,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0,
    };
    
    salesReport.push(reportItem);
    
    productMap[productName] = { 
      reportItem,
      unitPrice: price
    }; 
  }

  for (const { name, product, amount } of shoppers) {
    const mappedProduct = productMap[product]; 
    
    if (!mappedProduct) continue;

    const { reportItem, unitPrice } = mappedProduct;

    if (reportItem.leftOver >= amount) {
      reportItem.shoppers.push(name);
      reportItem.leftOver -= amount;
      reportItem.totalProfit += unitPrice * amount; 
    }
  }

  return salesReport;
};
```

**Contoh:**
```javascript
countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
])
// [
//   { product: 'Sepatu Stacattu', shoppers: ['Windi', 'Vanessa'], leftOver: 5, totalProfit: 7500000 },
//   { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
//   { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
// ]
```

---

## 🗺️ Peta Konsep Lintas Challenge

Tabel ini membantu melihat **konsep mana yang muncul berulang** di beberapa challenge:

| Konsep                      | Ch.01 | Ch.02 | Ch.03 |
| --------------------------- | :---: | :---: | :---: |
| Object Manipulation         |  ✅   |  ✅   |  ✅   |
| Array Iteration             |  ✅   |  ✅   |  ✅   |
| Destructuring               |  ✅   |  ✅   |  ✅   |
| for...of                    |  ✅   |  ✅   |  ✅   |
| for...in                    |  ✅   |   —   |   —   |
| forEach                     |  ✅   |  ✅   |  ✅   |
| reduce                      |  ✅   |  ✅   |  ✅   |
| Object.entries              |  ✅   |  ✅   |   —   |
| Early Return                |  ✅   |  ✅   |  ✅   |
| Edge Cases Handling         |  ✅   |  ✅   |  ✅   |
| Sorting                     |   —   |  ✅   |   —   |
| Hash Map / Dictionary       |  ✅   |   —   |  ✅   |
| Data Transformation         |  ✅   |   —   |   —   |
| Greedy Algorithm            |   —   |  ✅   |   —   |
| Time Complexity Optimization|   —   |   —   |  ✅   |
| Stock Management            |   —   |  ✅   |  ✅   |
| Profit Calculation          |   —   |   —   |  ✅   |
| Clean Code / Naming         |  ✅   |  ✅   |  ✅   |

---

## 🎓 Jalur Belajar yang Disarankan

```
📌 Mulai dari sini jika kamu sudah menyelesaikan Part 1 & 2:

  01 buildProfileMap/changeMe ──→ 02 shoppingTime ──→ 03 countProfit
        (Beginner)                    (Beginner)          (Medium)
   Belajar object basics          Belajar Greedy      Belajar Hash Map
   & data transformation          & sorting           & optimization
```

> [!TIP]
> 💡 **Tips:** Setiap folder memiliki **Cheat Sheet** tersendiri yang bisa digunakan untuk quick reference tanpa harus membaca ulang dokumentasi lengkap.

---

## 📊 Perbandingan Kompleksitas

| Challenge | Best Approach | Time Complexity | Space Complexity | Key Optimization |
|-----------|--------------|:---------------:|:----------------:|------------------|
| **buildProfileMap** | `forEach` + `for...in` | O(N) | O(N) | Object as Map untuk deduplication |
| **changeMe** | `forEach` + Caching | O(N) | O(1) | Cache `currentYear` di luar loop |
| **shoppingTime** | Early Break + Sort Once | O(N log N) | O(N) | Sort sekali di luar function + early break |
| **countProfit (V3)** | HOF (`.find`) | O(N×M) | O(N) | Readable, balance readability & performance |
| **countProfit (V5)** | Hash Map | O(N+M) | O(N) | **~90x faster** untuk data besar (>1000 items) |

---

## 🔗 Hubungan dengan Part 1 & 2

Challenge di folder ini merupakan **kelanjutan** dari Part 1 dan Part 2:

**Part 1 (Challenge 01-05):**
- Fokus pada **konsep dasar**: loop, modulo, sorting, counting
- **Tanpa Object** — hanya primitif dan array

**Part 2 (Challenge 01-04):**
- Fokus pada **optimisasi & algoritma lanjutan**: √n, multiple sorting algorithms
- **Tanpa Object** — string manipulation & pattern matching

**Part 3 (Challenge 01-03) — Folder Ini:**
- Fokus pada **Object sebagai struktur data utama**
- Data transformation, Hash Map, Greedy Algorithm
- Time complexity optimization (O(N×M) → O(N+M))
- Real-world scenarios: profile management, shopping simulation, profit calculation

> 💡 **Rekomendasi:** Selesaikan Part 1 dan Part 2 terlebih dahulu untuk pemahaman yang lebih baik tentang fundamental JavaScript sebelum masuk ke Object manipulation.

---

## 🎯 Key Takeaways

### 🔑 Object Fundamentals
- Object sebagai Map/Dictionary untuk O(1) lookup
- `for...in` untuk iterasi object keys
- `Object.entries()` untuk mengubah object menjadi array

### 🔑 Performance Optimization
- Hash Map untuk menghindari nested loop (O(N×M) → O(N+M))
- Caching nilai yang tidak berubah di luar loop
- Early break untuk menghentikan iterasi lebih awal

### 🔑 Clean Code Practices
- Destructuring untuk kode yang lebih ringkas
- Separation of concerns (pisahkan data dari logic)
- Avoid `delete` operator untuk V8 optimization
- Naming convention yang deskriptif

### 🔑 Algorithm Patterns
- **Greedy**: Pilih opsi terbaik di setiap langkah
- **Hash Map**: Trade space for time (O(N) space untuk O(1) lookup)
- **Data Transformation**: Ubah struktur data sesuai kebutuhan

---

## 📝 Catatan

> Semua dokumentasi dibuat pada **Mei 2026** melalui sesi mentoring interaktif di **Google Antigravity**, sebagai bagian dari program belajar **RPN PHASE-0 WEEK-3**.

---

<div align="center">

**📂 Bagian dari [CATATAN-BELAJAR-RPN](../../../../) → [PHASE-0](../../../) → [WEEK-3](../../) → [QUIZ](../)**

**🔙 [Kembali ke Part 2](../02-Logic-Challenge-tanpa-tipe-data-object/) | [Kembali ke Part 1](../01-Logic-Challenge-tanpa-tipe-data-object/)**

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
