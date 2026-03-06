# 📚 countProfit - PART 6: ALTERNATIF `map` + `reduce`

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🔄 PART 6: ALTERNATIF map + reduce 🔄                        ║
║                                                                          ║
║           Pendekatan Functional Programming dengan map dan reduce        ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-orange)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 📖 Konsep | ✅ Kode | 🧪 Test Cases | 📖 Algoritma | ⚠️ Pitfalls |
|:---------:|:-------:|:-------------:|:------------:|:-----------:|
| [Jump](#-konsep-map-dan-reduce) | [Jump](#-kode-alternatif-map--reduce) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) | [Jump](#-pitfalls-jebakan-umum) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja `map` dan `reduce`
- ✅ Tahu kenapa `map` cocok menggantikan outer loop
- ✅ Paham kenapa `reduce` cocok menggantikan inner loop
- ✅ Mengerti konsep immutability di dalam `reduce`

---

## 📖 Konsep `map` dan `reduce`

### `map` — Mengubah Setiap Item
```javascript
// map mengubah setiap item menjadi nilai baru
[1, 2, 3].map(num => num * 2) // [2, 4, 6]
```
- Selalu return array baru dengan panjang sama
- Cocok untuk **mengubah** setiap item

### `reduce` — Mengakumulasi Semua Item
```javascript
// reduce mengakumulasi semua item menjadi satu nilai
[1, 2, 3].reduce((acc, num) => acc + num, 0) // 6
//                              ↑ initial value
```
- Selalu butuh **initial value** (nilai awal accumulator)
- Cocok untuk **mengakumulasi** banyak item menjadi satu nilai

### Kenapa `map` + `reduce` Cocok di Sini?

```
Outer loop (for...of products)
→ Mengubah setiap produk menjadi object hasil
→ Ini persis yang dilakukan map!

Inner loop (for...of shoppersForProduct)
→ Mengakumulasi leftOver, buyerNames, totalProfit dari semua shopper
→ Ini persis yang dilakukan reduce!
```

---

## ✅ Kode Alternatif `map` + `reduce`

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

### Perubahan dari Versi Refactoring:

| Sebelum | Sesudah | Keterangan |
|---------|---------|------------|
| `for...of products` + `salesReport.push()` | `products.map()` + `return` | Outer loop — `map` otomatis kumpulkan hasil |
| `for...of shoppersForProduct` | `shoppersForProduct.reduce()` | Inner loop — `reduce` akumulasi nilai |
| `const salesReport = []` | Tidak ada | Tidak perlu karena `map` sudah return array |
| Mutasi variabel (`leftOver -=`) | Return object baru | Immutability di dalam `reduce` |

---

## 🧪 Test Cases

```javascript
// Edge case — input kosong
console.log(countProfit([]));
// → []
```

```javascript
// Normal case 1 — Rani batal beli karena stock kurang
console.log(countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
]));
// → [
//     { product: 'Sepatu Stacattu', shoppers: ['Windi', 'Vanessa'], leftOver: 5, totalProfit: 7500000 },
//     { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
//     { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
//   ]
```

```javascript
// Normal case 2 — Vanessa batal beli karena stock habis setelah Windi beli
console.log(countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 8 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 },
  { name: 'Devi', product: 'Baju Zoro', amount: 1 },
  { name: 'Lisa', product: 'Baju Zoro', amount: 1 }
]));
// → [
//     { product: 'Sepatu Stacattu', shoppers: ['Windi'], leftOver: 2, totalProfit: 12000000 },
//     { product: 'Baju Zoro', shoppers: ['Devi', 'Lisa'], leftOver: 0, totalProfit: 1000000 },
//     { product: 'Sweater Uniklooh', shoppers: ['Rani'], leftOver: 0, totalProfit: 175000 }
//   ]
```

```javascript
// Normal case 3 — produk tidak ada di toko
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// → [
//     { product: 'Sepatu Stacattu', shoppers: [], leftOver: 10, totalProfit: 0 },
//     { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
//     { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
//   ]
```

---

## 📖 Ringkasan Algoritma

### **Konsep Inti:**
```
Jika shoppers kosong → return []
map setiap produk → ubah menjadi object hasil
  filter shoppers yang membeli produk ini
  reduce shoppersForProduct → akumulasi leftOver, buyerNames, totalProfit
  return object hasil per produk
```

---

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function countProfit(shoppers)`
   - `shoppers` — array of object `{ name, product, amount }`
   - **return** — array of object `{ product, shoppers, leftOver, totalProfit }`

#### 🛡️ Guard Clause:

2. **`if (!shoppers.length) return []`**
   - Jika `shoppers` kosong → langsung return `[]`

#### 🔄 `products.map(([productName, price, stock]) => { ... })`:

3. **`map` menggantikan outer loop**
   - Setiap item di `products` di-destructuring langsung menjadi `[productName, price, stock]`
   - Setiap iterasi harus **return** sebuah object hasil
   - Tidak perlu `salesReport` dan `push` — `map` otomatis kumpulkan hasilnya

4. **`shoppersForProduct = shoppers.filter(shopper => shopper.product === productName)`**
   - Filter shoppers yang membeli produk ini

#### ➕ `shoppersForProduct.reduce((acc, { name, amount }) => { ... }, initialValue)`:

5. **`reduce` menggantikan inner loop**
   - `acc` — accumulator, object yang dibawa dari iterasi ke iterasi
   - `{ name, amount }` — destructuring setiap shopper
   - **Initial value:** `{ leftOver: stock, buyerNames: [], totalProfit: 0 }`

6. **`if (acc.leftOver >= amount)` — shopper berhasil beli:**
   - Return **object baru** dengan nilai yang diperbarui:
     - `leftOver: acc.leftOver - amount`
     - `buyerNames: [...acc.buyerNames, name]`
     - `totalProfit: acc.totalProfit + (price * amount)`
   - ⚠️ Selalu return **object baru**, bukan mutasi `acc` langsung

7. **`return acc` — shopper gagal beli:**
   - Kembalikan `acc` tanpa perubahan

8. **Destructuring hasil `reduce`:**
   ```javascript
   const { leftOver, buyerNames, totalProfit } = shoppersForProduct.reduce(...)
   ```

#### 🔵 Return object hasil per produk:

9. **`return { product: productName, shoppers: buyerNames, leftOver, totalProfit }`**
   - Nilai yang dikembalikan oleh setiap iterasi `map`
   - `map` otomatis mengumpulkan semua return value ini menjadi array

---

### **Visualisasi `reduce` untuk Sepatu Stacattu (stock=10), [Windi beli 8, Vanessa beli 10]:**

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Initial value:                                                              │
│  acc = { leftOver: 10, buyerNames: [], totalProfit: 0 }                     │
│                                                                              │
│  Iterasi 1 — Windi (amount=8):                                               │
│    acc.leftOver (10) >= amount (8) → ✅ BERHASIL                             │
│    return {                                                                  │
│      leftOver: 10 - 8 = 2,                                                  │
│      buyerNames: [...[], 'Windi'] = ['Windi'],                               │
│      totalProfit: 0 + (1.500.000 × 8) = 12.000.000                          │
│    }                                                                         │
│                                                                              │
│  Iterasi 2 — Vanessa (amount=10):                                            │
│    acc.leftOver (2) >= amount (10) → ❌ GAGAL                                │
│    return acc (tidak berubah)                                                │
│                                                                              │
│  Hasil reduce:                                                               │
│  { leftOver: 2, buyerNames: ['Windi'], totalProfit: 12000000 }              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

### **Keywords:**
- 🗺️ **`map`** — mengubah setiap item array menjadi nilai baru, hasilnya array dengan panjang sama
- ➕ **`reduce`** — mengakumulasi semua item array menjadi satu nilai
- 📦 **`acc` (accumulator)** — object yang dibawa dari iterasi ke iterasi di dalam `reduce`
- 🌱 **Initial value** — nilai awal accumulator sebelum iterasi pertama
- 🔀 **Spread operator `...`** — menyalin isi array lama ke array baru tanpa mutasi
- 🛡️ **Immutability** — selalu return object baru, tidak pernah mengubah `acc` langsung

---

### **Kompleksitas:**

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n × m)** | n = jumlah produk, m = jumlah shoppers |
| Memori | **O(n)** | hasil `map` menyimpan n object |

---

### **Pitfalls (Jebakan Umum):**

**1) ❌ Mutasi `acc` langsung di dalam `reduce`**
```javascript
// ❌ SALAH — mutasi acc langsung menyebabkan bug tak terduga
(acc, { name, amount }) => {
  if (acc.leftOver >= amount) {
    acc.leftOver -= amount      // mutasi langsung!
    acc.buyerNames.push(name)   // mutasi langsung!
    acc.totalProfit += price * amount
  }
  return acc
}

// ✅ BENAR — selalu return object baru
(acc, { name, amount }) => {
  if (acc.leftOver >= amount) {
    return {
      leftOver: acc.leftOver - amount,
      buyerNames: [...acc.buyerNames, name],
      totalProfit: acc.totalProfit + (price * amount)
    }
  }
  return acc
}
```

**2) ❌ Lupa `return acc` saat shopper gagal beli**
```javascript
// ❌ SALAH — reduce akan return undefined untuk iterasi berikutnya
(acc, { name, amount }) => {
  if (acc.leftOver >= amount) {
    return { ... }
  }
  // lupa return acc!
}

// ✅ BENAR — selalu ada return di setiap kondisi
(acc, { name, amount }) => {
  if (acc.leftOver >= amount) {
    return { ... }
  }
  return acc // wajib ada!
}
```

**3) ❌ Lupa initial value di `reduce`**
```javascript
// ❌ SALAH — tanpa initial value, reduce pakai elemen pertama sebagai acc
shoppersForProduct.reduce((acc, { name, amount }) => { ... })

// ✅ BENAR — selalu sertakan initial value
shoppersForProduct.reduce(
  (acc, { name, amount }) => { ... },
  { leftOver: stock, buyerNames: [], totalProfit: 0 } // wajib ada!
)
```

**4) ❌ Lupa spread operator saat tambah nama pembeli**
```javascript
// ❌ SALAH — array di dalam array
buyerNames: [acc.buyerNames, name] // [['Windi'], 'Vanessa'] ← nested!

// ✅ BENAR — spread array lama agar flat
buyerNames: [...acc.buyerNames, name] // ['Windi', 'Vanessa'] ← flat!
```

---

### **💡 Insight Penting:**

> **Kenapa `map` cocok menggantikan outer loop?**
> Karena outer loop tujuannya mengubah setiap produk menjadi object hasil — itulah persis yang dilakukan `map`: mengubah setiap item menjadi nilai baru.

> **Kenapa `reduce` cocok menggantikan inner loop?**
> Karena inner loop tujuannya mengakumulasi nilai (`leftOver`, `buyerNames`, `totalProfit`) dari semua shopper — itulah persis yang dilakukan `reduce`: mengakumulasi semua item menjadi satu nilai.

> **Kenapa harus return object baru di dalam `reduce`, bukan mutasi `acc`?**
> Karena `reduce` di functional programming style mengutamakan immutability — data tidak diubah langsung, tapi selalu dibuat salinan baru. Ini mencegah bug yang sulit dilacak akibat data yang berubah secara tidak terduga.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 5: Alternatif forEach](05-alternatif-forEach.md)**
- **📖 [Lanjut ke Part 7: Alternatif map + filter + reduce →](07-alternatif-map-filter-reduce.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
