# 🔄 Cheat Sheet — countProfit (Profit Calculator)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Hash Map Masterpiece (V5) ⭐ `PALING DIREKOMENDASIKAN`

```javascript
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

> 🔑 **O(N+M) complexity** dengan Hash Map O(1) lookup. No mutation (tanpa `delete`), separation of concerns, production-ready. ~90x lebih cepat untuk data besar (1000+ items).

---

### 2. Hash Map + Delete (V4)

```javascript
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
    const newItem = {
      product: productName,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0,
      price,
    };
    
    salesReport.push(newItem);
    productMap[productName] = newItem;
  }

  for (const { name, product, amount } of shoppers) {
    const reportItem = productMap[product];

    if (reportItem && reportItem.leftOver >= amount) {
      reportItem.shoppers.push(name);
      reportItem.leftOver -= amount;
      reportItem.totalProfit += reportItem.price * amount;
    }
  }

  salesReport.forEach(item => delete item.price);

  return salesReport;
};
```

> 🔑 **O(N+M) complexity** dengan Hash Map O(1) lookup. Sangat cepat, tapi masih pakai `delete` (V8 de-optimization). Gunakan V5 jika memungkinkan.

---

### 3. Higher-Order Functions (V3)

```javascript
const countProfit = (shoppers) => {
  if (shoppers.length === 0) return [];

  const listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  const salesReport = listBarang.map(([product, price, leftOver]) => ({
    product,
    shoppers: [],
    leftOver,
    totalProfit: 0,
    price,
  }));

  shoppers.forEach(({ name, product, amount }) => {
    const reportItem = salesReport.find((item) => item.product === product);

    if (reportItem && reportItem.leftOver >= amount) {
      reportItem.shoppers.push(name);
      reportItem.leftOver -= amount;
      reportItem.totalProfit += reportItem.price * amount;
    }
  });

  salesReport.forEach((item) => delete item.price);

  return salesReport;
};
```

> 🔑 Sangat **readable** dengan HOF (`.map`, `.find`, `.forEach`). Deklaratif dan modern. Cocok untuk production dengan data < 100 items. Balance antara readability & performance.

---

### 4. productMap Optimal (Versi Alternatif)

```javascript
function countProfit(shoppers) {
  const products = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ]

  if (!shoppers.length) return []

  const report = []
  const productMap = {}

  for (let i = 0; i < products.length; i++) {
    const [name, price, stock] = products[i]

    report.push({
      product: name,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0
    })

    productMap[name] = {
      index: i,
      price
    }
  }

  for (const { name, product, amount } of shoppers) {
    const productInfo = productMap[product]

    if (!productInfo) continue

    const item = report[productInfo.index]

    if (item.leftOver >= amount) {
      item.leftOver -= amount
      item.shoppers.push(name)
      item.totalProfit += productInfo.price * amount
    }
  }

  return report
}
```

> 🔑 **O(N+M) complexity** dengan index-based access. Memanfaatkan pass-by-reference untuk efisiensi. Alternatif V5 dengan pendekatan sedikit berbeda.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 1. Procedural + Parallel Array (V1) ⭐ `PALING INTUITIF`

```javascript
function countProfit(shoppers) {
  if (shoppers.length === 0) return [];

  var listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  const result = [];

  for (const [productName, price, stock] of listBarang) {
    result.push({
      product: productName,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0,
    });
  }

  for (const { name, product, amount } of shoppers) {
    for (let i = 0; i < result.length; i++) {
      const current = result[i];

      if (current.product === product) {
        if (current.leftOver >= amount) {
          current.shoppers.push(name);
          current.leftOver -= amount;
          current.totalProfit += listBarang[i][1] * amount;
        }
      }
    }
  }

  return result;
}
```

> 🔑 Solusi pertama yang berhasil. Simple, straightforward, mudah dipahami pemula. ⚠️ **Parallel array fragility** - rentan error jika ada sorting.

---

### 2. Refactored for...of

```javascript
function countProfit(shoppers) {
  const products = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ]

  if (!shoppers.length) return []

  const salesReport = []

  for (const [productName, price, stock] of products) {
    const shoppersForProduct = shoppers.filter(
      shopper => shopper.product === productName
    )

    let leftOver = stock
    const buyerNames = []
    let totalProfit = 0

    for (const { name, amount } of shoppersForProduct) {
      if (leftOver >= amount) {
        leftOver -= amount
        buyerNames.push(name)
        totalProfit += price * amount
      }
    }

    salesReport.push({
      product: productName,
      shoppers: buyerNames,
      leftOver,
      totalProfit
    })
  }

  return salesReport
}
```

> 🔑 Paling mudah dibaca dan di-debug. Menggunakan `filter` untuk memisahkan shoppers per produk. Cocok untuk belajar algoritma dan debugging.

---

### 3. forEach Modern

```javascript
function countProfit(shoppers) {
  const products = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ]

  if (!shoppers.length) return []

  const salesReport = []

  products.forEach(([productName, price, stock]) => {
    const shoppersForProduct = shoppers.filter(
      shopper => shopper.product === productName
    )

    let leftOver = stock
    const buyerNames = []
    let totalProfit = 0

    shoppersForProduct.forEach(({ name, amount }) => {
      if (leftOver >= amount) {
        leftOver -= amount
        buyerNames.push(name)
        totalProfit += price * amount
      }
    })

    salesReport.push({
      product: productName,
      shoppers: buyerNames,
      leftOver,
      totalProfit
    })
  })

  return salesReport
}
```

> 🔑 Modern style dengan `forEach`. Sama seperti for...of tapi lebih idiomatis. Tidak support `break`/`continue`.

---

### 4. Property Titipan + Delete (V2)

```javascript
const countProfit = (shoppers) => {
  if (shoppers.length === 0) return [];

  var listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  const result = [];

  for (const [productName, price, stock] of listBarang) {
    result.push({
      product: productName,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0,
      price,
    });
  }

  for (const { name, product, amount } of shoppers) {
    for (let i = 0; i < result.length; i++) {
      const current = result[i];

      if (current.product === product) {
        if (current.leftOver >= amount) {
          current.shoppers.push(name);
          current.leftOver -= amount;
          current.totalProfit += current.price * amount;
        }
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    delete result[i].price;
  }

  return result;
};
```

> 🔑 Menghindari parallel array dengan property titipan. ES6 arrow function & shorthand. ⚠️ Operator `delete` menyebabkan V8 de-optimization.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 1. map + reduce (Functional)

```javascript
function countProfit(shoppers) {
  const products = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ]

  if (!shoppers.length) return []

  return products.map(([productName, price, stock]) => {
    const shoppersForProduct = shoppers.filter(
      shopper => shopper.product === productName
    )

    const { leftOver, buyerNames, totalProfit } = shoppersForProduct.reduce(
      (acc, { name, amount }) => {
        if (acc.leftOver >= amount) {
          return {
            leftOver: acc.leftOver - amount,
            buyerNames: [...acc.buyerNames, name],
            totalProfit: acc.totalProfit + (price * amount)
          }
        }
        return acc
      },
      { leftOver: stock, buyerNames: [], totalProfit: 0 }
    )

    return { product: productName, shoppers: buyerNames, leftOver, totalProfit }
  })
}
```

> 🔑 Pure functional dengan `map` + `reduce`. Immutability (selalu return object baru). Cocok untuk yang terbiasa dengan functional programming.

---

### 2. map + filter + reduce (Flexible Data)

```javascript
function countProfit(shoppers) {
  const products = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ]

  if (!shoppers.length) return []

  return products.map(([productName, price, stock]) => {
    const shoppersForProduct = shoppers.filter(
      shopper => shopper.product === productName
    )

    const { leftOver, successfulShoppers, totalProfit } = shoppersForProduct.reduce(
      (acc, shopper) => {
        if (acc.leftOver >= shopper.amount) {
          return {
            leftOver: acc.leftOver - shopper.amount,
            successfulShoppers: [...acc.successfulShoppers, shopper],
            totalProfit: acc.totalProfit + (price * shopper.amount)
          }
        }
        return acc
      },
      { leftOver: stock, successfulShoppers: [], totalProfit: 0 }
    )

    return {
      product: productName,
      shoppers: successfulShoppers.map(shopper => shopper.name),
      leftOver,
      totalProfit
    }
  })
}
```

> 🔑 Menyimpan **full object shopper** di reduce, lalu extract nama di akhir. Lebih fleksibel jika butuh data shopper lengkap. ⚠️ Slightly more complex.

---

## ⚠️ GOTCHA CEPAT

### 1. Parallel Array Fragility

```javascript
// ❌ SALAH — Rentan error jika ada sorting
for (let i = 0; i < result.length; i++) {
  current.totalProfit += listBarang[i][1] * amount; // Asumsi index sama!
}

// ✅ BENAR — Self-contained
for (let i = 0; i < result.length; i++) {
  current.totalProfit += current.price * amount; // Data ada di object sendiri
}
```

---

### 2. Operator `delete` (V8 De-optimization)

```javascript
// ⚠️ HINDARI — Menyebabkan V8 de-optimization
salesReport.forEach(item => delete item.price);

// ✅ LEBIH BAIK — Separation of concerns
productMap[productName] = { 
  reportItem,
  unitPrice: price // Harga di tempat terpisah
};
```

---

### 3. `forEach` vs `for...of`

```javascript
// ❌ TIDAK BISA — forEach tidak support break
products.forEach(item => {
  if (condition) break; // SyntaxError!
});

// ✅ BISA — for...of support break/continue
for (const item of products) {
  if (condition) break; // OK!
}
```

---

### 4. `reduce` - Lupa Return `acc`

```javascript
// ❌ SALAH — acc iterasi berikutnya jadi undefined!
shoppersForProduct.reduce((acc, { name, amount }) => {
  if (acc.leftOver >= amount) {
    return { ... }
  }
  // Lupa return acc!
}, initialValue)

// ✅ BENAR — Wajib return acc
shoppersForProduct.reduce((acc, { name, amount }) => {
  if (acc.leftOver >= amount) {
    return { ... }
  }
  return acc // Wajib!
}, initialValue)
```

---

### 5. Spread Operator untuk Immutability

```javascript
// ❌ SALAH — Array nested!
buyerNames: [acc.buyerNames, name] // [[...], 'Vanessa']

// ✅ BENAR — Spread array lama agar flat
buyerNames: [...acc.buyerNames, name] // ['Windi', 'Vanessa']
```

---

## 📊 QUICK COMPARISON

| Versi | Complexity | Style | Lines | Mutation | Rekomendasi |
|-------|-----------|-------|-------|----------|-------------|
| **V5: Hash Map Masterpiece** | O(N+M) | Optimal | ~35 | ✅ None | ⭐⭐⭐⭐⭐ Production (>1000 items) |
| **V4: Hash Map + Delete** | O(N+M) | Hybrid | ~30 | ⚠️ Delete | ⭐⭐⭐⭐ Fast, tapi ada delete |
| **V3: HOF** | O(N×M) | Functional | ~25 | ⚠️ Delete | ⭐⭐⭐⭐ Production (<100 items) |
| **productMap Optimal** | O(N+M) | Optimal | ~30 | ✅ None | ⭐⭐⭐⭐⭐ Alternatif V5 |
| **Refactored for...of** | O(N×M) | Imperative | ~30 | Minimal | ⭐⭐⭐⭐ Belajar & debugging |
| **forEach Modern** | O(N×M) | Modern | ~30 | Minimal | ⭐⭐⭐⭐ Modern style |
| **V2: Property Titipan** | O(N×M) | ES6 | ~35 | ⚠️ Delete | ⭐⭐⭐ Belajar ES6 |
| **V1: Procedural** | O(N×M) | Basic | ~30 | Minimal | ⭐⭐⭐ Pemula (fragile) |
| **map + reduce** | O(N×M) | Functional | ~25 | ✅ None | ⭐⭐⭐ FP enthusiast |
| **map + filter + reduce** | O(N×M) | Functional | ~30 | ✅ None | ⭐⭐⭐ Flexible data |

### Performance Benchmark (1000 shoppers × 100 products)

| Kategori | Operations | Estimated Time | Speedup |
|----------|-----------|----------------|---------|
| **O(N×M)** (V1-V3, forEach, map+reduce) | 100,000 | ~100ms | 1x baseline |
| **O(N+M)** (V4, V5, productMap) | 1,100 | ~1ms | **~90x faster** |

---

## 🧪 TEST CASES

```javascript
// Test Case 1 — Edge case: input kosong
console.log(countProfit([]));
// Expected: []

// Test Case 2 — Rani batal beli karena stock kurang
console.log(countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
]));
// Expected:
// [
//   { product: 'Sepatu Stacattu', shoppers: ['Windi', 'Vanessa'], leftOver: 5, totalProfit: 7500000 },
//   { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
//   { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
// ]

// Test Case 3 — Vanessa batal beli karena stock habis setelah Windi beli
console.log(countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 8 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 },
  { name: 'Devi', product: 'Baju Zoro', amount: 1 },
  { name: 'Lisa', product: 'Baju Zoro', amount: 1 }
]));
// Expected:
// [
//   { product: 'Sepatu Stacattu', shoppers: ['Windi'], leftOver: 2, totalProfit: 12000000 },
//   { product: 'Baju Zoro', shoppers: ['Devi', 'Lisa'], leftOver: 0, totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh', shoppers: ['Rani'], leftOver: 0, totalProfit: 175000 }
// ]

// Test Case 4 — Produk tidak ada di toko
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// Expected:
// [
//   { product: 'Sepatu Stacattu', shoppers: [], leftOver: 10, totalProfit: 0 },
//   { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
//   { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
// ]

// Test Runner (Automated)
const testCases = [
  {
    input: [],
    expected: [],
    desc: 'Edge case — input kosong'
  },
  {
    input: [
      { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
      { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
      { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
    ],
    expected: [
      { product: 'Sepatu Stacattu', shoppers: ['Windi', 'Vanessa'], leftOver: 5, totalProfit: 7500000 },
      { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
      { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
    ],
    desc: 'Normal case 1 — Rani batal beli karena stock kurang'
  },
  {
    input: [
      { name: 'Windi', product: 'Sepatu Stacattu', amount: 8 },
      { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 },
      { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 },
      { name: 'Devi', product: 'Baju Zoro', amount: 1 },
      { name: 'Lisa', product: 'Baju Zoro', amount: 1 }
    ],
    expected: [
      { product: 'Sepatu Stacattu', shoppers: ['Windi'], leftOver: 2, totalProfit: 12000000 },
      { product: 'Baju Zoro', shoppers: ['Devi', 'Lisa'], leftOver: 0, totalProfit: 1000000 },
      { product: 'Sweater Uniklooh', shoppers: ['Rani'], leftOver: 0, totalProfit: 175000 }
    ],
    desc: 'Normal case 2 — Vanessa batal beli karena stock habis setelah Windi beli'
  },
  {
    input: [{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }],
    expected: [
      { product: 'Sepatu Stacattu', shoppers: [], leftOver: 10, totalProfit: 0 },
      { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
      { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
    ],
    desc: 'Normal case 3 — produk tidak ada di toko'
  }
];

testCases.forEach(({ input, expected, desc }, index) => {
  const result = countProfit(input);
  const isEqual = JSON.stringify(result) === JSON.stringify(expected);
  const status = isEqual ? '✅ PASS' : '❌ FAIL';

  console.log(`Test Case #${index + 1}: ${status} - ${desc}`);

  if (!isEqual) {
    console.log('Expected:', JSON.stringify(expected, null, 2));
    console.log('Result  :', JSON.stringify(result, null, 2));
  }
});
```

---

## 🎯 Rekomendasi Cepat

**Pilih berdasarkan konteks:**

- 🏆 **Production (>1000 items)** → V5 Hash Map Masterpiece
- 🏆 **Production (<100 items)** → V3 Higher-Order Functions
- 🧠 **Belajar Algoritma** → Refactored for...of atau V1 Procedural
- 🧠 **Belajar ES6** → V2 Property Titipan atau forEach Modern
- 🧪 **Functional Programming** → map + reduce
- 🧪 **Code Interview** → V3 HOF atau V4 Hash Map

---

**Made with ❤️ for learners | Happy Coding! 🚀**
