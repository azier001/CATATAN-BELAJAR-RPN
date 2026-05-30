# 🔄 Cheat Sheet — shoppingTime (Simulasi Belanja Member)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. AI Improved — MIN_PRICE + Early Break + Sort Sekali ⭐ `PALING DIREKOMENDASIKAN`

```javascript
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

> 🔑 Versi paling optimal: tanpa magic number (`MIN_PRICE`), sort sekali di luar function, early break saat uang sudah tidak cukup untuk barang manapun. Cocok untuk production.

---

### 2. Functional Return — Variabel Independen + Clean Return `BEST PRACTICE`

```javascript
function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  if (money < 50000) return 'Mohon maaf, uang tidak cukup';

  const products = [
    { name: 'Sepatu Stacattu', price: 1500000 },
    { name: 'Baju Zoro', price: 500000 },
    { name: 'Baju H&N', price: 250000 },
    { name: 'Sweater Uniklooh', price: 175000 },
    { name: 'Casing Handphone', price: 50000 },
  ];

  const listPurchased = [];
  let changeMoney = money;

  for (const { name, price } of products) {
    if (price <= changeMoney) {
      listPurchased.push(name);
      changeMoney -= price;
    }
  }

  return { memberId, money, listPurchased, changeMoney };
}
```

> 🔑 Kode mandiri setelah refactoring: variabel `listPurchased` dan `changeMoney` terpisah dari return object, tidak ada mutasi objek `result`. Paling bersih untuk dipahami dan di-maintain.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. Array of Objects + Mutasi Objek `result` ⭐ `PALING INTUITIF`

```javascript
const shoppingTime = (memberId, money) => {
  if (!memberId) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }

  if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  }

  const products = [
    { productName: 'Sepatu Stacattu', price: 1500000 },
    { productName: 'Baju Zoro', price: 500000 },
    { productName: 'Baju H&N', price: 250000 },
    { productName: 'Sweater Uniklooh', price: 175000 },
    { productName: 'Casing Handphone', price: 50000 },
  ];

  const listPurchased = [];

  const result = {
    memberId,
    money,
    listPurchased,
    changeMoney: money,
  };

  for (const product of products) {
    if (result.changeMoney >= product.price) {
      result.listPurchased.push(product.productName);
      result.changeMoney -= product.price;
    }
  }

  return result;
};
```

> 🔑 Versi paling dasar: buat objek `result` dulu, lalu mutasi langsung di dalam loop. Cocok untuk yang baru pertama kali belajar object dan loop.

---

### 4. Plain Object (Dictionary) + `for...in`

```javascript
function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  if (money < 50000) return 'Mohon maaf, uang tidak cukup';

  const products = {
    'Sepatu Stacattu': 1500000,
    'Baju Zoro': 500000,
    'Baju H&N': 250000,
    'Sweater Uniklooh': 175000,
    'Casing Handphone': 50000,
  };

  const result = {
    memberId,
    money,
    listPurchased: [],
    changeMoney: money,
  };

  for (const key in products) {
    if (result.changeMoney >= products[key]) {
      result.listPurchased.push(key);
      result.changeMoney -= products[key];
    }
  }

  return result;
}
```

> 🔑 Pendekatan dictionary: nama produk jadi key, harga jadi value. Pakai `for...in` untuk iterasi object langsung. Ringkas, tapi urutan key tidak dijamin di semua engine.

---

### 5. Object.entries + Sort + `for...of`

```javascript
const products = {
  'Sepatu Stacattu': 1500000,
  'Baju Zoro': 500000,
  'Baju H&N': 250000,
  'Sweater Uniklooh': 175000,
  'Casing Handphone': 50000,
}

function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  if (money < 50000) return 'Mohon maaf, uang tidak cukup'

  const productEntries = Object.entries(products)
  const sortedByPrice = productEntries.sort((a, b) => b[1] - a[1])

  const listPurchased = []
  let changeMoney = money

  for (const [productName, price] of sortedByPrice) {
    if (changeMoney >= price) {
      changeMoney -= price
      listPurchased.push(productName)
    }
  }

  return { memberId, money, listPurchased, changeMoney }
}
```

> 🔑 Jembatan dari dictionary ke array: ubah object ke entries lalu sort descending. Melatih pemahaman `Object.entries()` dan destructuring `[key, value]`.

---

### 6. Clean ES6 — Shorthand + Destructuring + Objek `result`

```javascript
function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  if (money < 50000) return 'Mohon maaf, uang tidak cukup';

  const products = [
    { name: 'Sepatu Stacattu', price: 1500000 },
    { name: 'Baju Zoro', price: 500000 },
    { name: 'Baju H&N', price: 250000 },
    { name: 'Sweater Uniklooh', price: 175000 },
    { name: 'Casing Handphone', price: 50000 }
  ];

  const result = {
    memberId,
    money,
    listPurchased: [],
    changeMoney: money
  };

  for (const { name, price } of products) {
    if (result.changeMoney >= price) {
      result.listPurchased.push(name);
      result.changeMoney -= price;
    }
  }

  return result;
}
```

> 🔑 Evolusi dari V3 (Array of Objects): property key lebih pendek (`name` vs `productName`), destructuring `{ name, price }` langsung di loop. Masih pakai mutasi `result`.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 7. `reduce` — Functional Programming Style

```javascript
const products = {
  'Sepatu Stacattu': 1500000,
  'Baju Zoro': 500000,
  'Baju H&N': 250000,
  'Sweater Uniklooh': 175000,
  'Casing Handphone': 50000,
}

function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  if (money < 50000) return 'Mohon maaf, uang tidak cukup'

  const sortedByPrice = Object.entries(products).sort((a, b) => b[1] - a[1])

  const { listPurchased, changeMoney } = sortedByPrice.reduce(
    (acc, [productName, price]) => {
      if (acc.changeMoney >= price) {
        acc.changeMoney -= price
        acc.listPurchased.push(productName)
      }
      return acc
    },
    { listPurchased: [], changeMoney: money }
  )

  return { memberId, money, listPurchased, changeMoney }
}
```

> 🔑 Semua state pembelian diakumulasi lewat `reduce`. Tidak ada variabel `let` — murni functional. ⚠️ Lebih sulit dibaca jika belum terbiasa `reduce`, dan `return acc` wajib di setiap iterasi.

---

## ⚠️ GOTCHA CEPAT

### Sort ascending vs descending

```javascript
// ❌ SALAH — beli termurah dulu
productEntries.sort((a, b) => a[1] - b[1])

// ✅ BENAR — beli termahal dulu (Greedy)
productEntries.sort((a, b) => b[1] - a[1])
```

### Sort tanpa spread = mutasi array original

```javascript
// ❌ BERBAHAYA — products asli ikut berubah urutannya
const sorted = products.sort((a, b) => b.price - a.price)

// ✅ AMAN — copy dulu sebelum sort
const sorted = [...products].sort((a, b) => b.price - a.price)
```

### Mengurangi `money` langsung vs `changeMoney`

```javascript
// ❌ SALAH — money di return object akan berubah
money -= price

// ✅ BENAR — money tetap nilai awal, changeMoney yang berkurang
changeMoney -= price
```

### Lupa `return acc` di reduce

```javascript
// ❌ SALAH — iterasi berikutnya acc = undefined → crash
sortedByPrice.reduce((acc, [name, price]) => {
  if (acc.changeMoney >= price) { /* ... */ }
  // lupa return acc!
}, { listPurchased: [], changeMoney: money })

// ✅ BENAR — wajib return acc
sortedByPrice.reduce((acc, [name, price]) => {
  if (acc.changeMoney >= price) { /* ... */ }
  return acc  // ← WAJIB
}, { listPurchased: [], changeMoney: money })
```

### Early break: `=== 0` vs `< MIN_PRICE`

```javascript
// ❌ KURANG OPTIMAL — hanya stop jika uang habis persis 0
if (changeMoney === 0) break

// ✅ LEBIH OPTIMAL — stop jika uang tidak cukup untuk barang manapun
if (changeMoney < MIN_PRICE) break
```

---

## 📊 QUICK COMPARISON

| # | Versi | Data | Loop | Baris | Keunggulan Utama | Label |
|:-:|-------|------|------|:-----:|------------------|:-----:|
| 1 | AI Improved | Array of Objects | `for...of` | ~16 | Sort sekali + early break + `MIN_PRICE` | ⭐ Best |
| 2 | Functional Return | Array of Objects | `for...of` | ~15 | Variabel independen, clean return | ✅ Best Practice |
| 3 | Mutasi Objek `result` | Array of Objects | `for...of` | ~20 | Paling intuitif untuk pemula | 📖 Belajar |
| 4 | Dictionary + `for...in` | Plain Object | `for...in` | ~15 | Paling ringkas, tanpa entries/sort | 📖 Belajar |
| 5 | Object.entries + Sort | Plain Object | `for...of` | ~15 | Melatih entries + destructuring | 📖 Belajar |
| 6 | Clean ES6 | Array of Objects | `for...of` | ~16 | Shorthand property + destructuring | 📖 Belajar |
| 7 | Reduce | Plain Object | `.reduce()` | ~14 | Tanpa variabel `let`, murni functional | 🧪 Alternatif |

---

## 🧪 TEST CASES

```javascript
// Test 1 — Contoh dari soal
console.log(shoppingTime('324193hDew2', 700000))
// { memberId: '324193hDew2', money: 700000, listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }

// Test 2 — Uang cukup untuk semua barang
console.log(shoppingTime('1820RzKrnWn08', 2475000))
// { memberId: '1820RzKrnWn08', money: 2475000, listPurchased: ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'], changeMoney: 0 }

// Test 3 — Uang cukup untuk 1 barang termurah
console.log(shoppingTime('82Ku8Ma742', 170000))
// { memberId: '82Ku8Ma742', money: 170000, listPurchased: ['Casing Handphone'], changeMoney: 120000 }

// Test 4 — Edge case: memberId kosong
console.log(shoppingTime('', 2475000))
// 'Mohon maaf, toko X hanya berlaku untuk member saja'

// Test 5 — Edge case: memberId undefined
console.log(shoppingTime(undefined, 100000))
// 'Mohon maaf, toko X hanya berlaku untuk member saja'

// Test 6 — Edge case: uang tidak cukup
console.log(shoppingTime('234JdhweRxa53', 15000))
// 'Mohon maaf, uang tidak cukup'
```

---

⬆️ [Kembali ke README](README.md)
