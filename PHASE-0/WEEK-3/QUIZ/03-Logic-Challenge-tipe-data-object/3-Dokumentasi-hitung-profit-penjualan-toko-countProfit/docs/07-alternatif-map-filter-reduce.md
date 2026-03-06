# 📚 countProfit - PART 7: ALTERNATIF `map` + `filter` + `reduce`

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        🔄 PART 7: ALTERNATIF map + filter + reduce 🔄                   ║
║                                                                          ║
║       Pendekatan Functional Programming yang Lebih Fleksibel             ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-orange)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 📖 Perbedaan | ✅ Kode | 🧪 Test Cases | 📖 Algoritma | ⚠️ Pitfalls |
|:-----------:|:-------:|:-------------:|:------------:|:-----------:|
| [Jump](#-perbedaan-dengan-map--reduce) | [Jump](#-kode-alternatif-map--filter--reduce) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) | [Jump](#-pitfalls-jebakan-umum) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami perbedaan versi ini dengan `map + reduce`
- ✅ Tahu kapan menyimpan full object lebih berguna dari hanya `name`
- ✅ Paham kenapa `map` dipakai di akhir untuk ambil nama, bukan `filter`
- ✅ Bisa memilih antara versi ini dan `map + reduce`

---

## 📖 Perbedaan dengan `map` + `reduce`

Perbedaan utama ada di **apa yang disimpan di dalam `reduce`**:

| | `map + reduce` | `map + filter + reduce` |
|---|---|---|
| Simpan di `reduce` | `name` saja | Full object shopper |
| Ambil nama | Langsung di `reduce` | `map` di akhir |
| Fleksibilitas data | Sedang | Tinggi |
| Kompleksitas | Lebih sederhana | Sedikit lebih kompleks |

```javascript
// map + reduce — simpan name langsung
buyerNames: [...acc.buyerNames, name]

// map + filter + reduce — simpan full object
successfulShoppers: [...acc.successfulShoppers, shopper]
// lalu ambil name di akhir:
shoppers: successfulShoppers.map(shopper => shopper.name)
```

> 💡 Versi ini lebih berguna ketika kamu butuh data shopper yang lebih lengkap setelah proses `reduce` — misalnya untuk menampilkan `amount` atau `product` dari setiap pembeli yang berhasil.

---

## ✅ Kode Alternatif `map` + `filter` + `reduce`

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
  reduce shoppersForProduct → akumulasi leftOver, successfulShoppers (full object), totalProfit
  map successfulShoppers → ambil hanya name
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

3. **`map` pertama menggantikan outer loop**
   - Setiap iterasi harus return sebuah object hasil

4. **`shoppersForProduct = shoppers.filter(shopper => shopper.product === productName)`**
   - Filter pertama — menyaring shoppers yang membeli produk ini

#### ➕ `shoppersForProduct.reduce(...)`:

5. **`reduce` mengakumulasi data dari setiap shopper**
   - **Initial value:** `{ leftOver: stock, successfulShoppers: [], totalProfit: 0 }`
   - Perbedaan utama: `successfulShoppers` menyimpan **full object shopper**, bukan hanya `name`

6. **`if (acc.leftOver >= shopper.amount)` — shopper berhasil beli:**
   - Return object baru dengan:
     - `leftOver: acc.leftOver - shopper.amount`
     - `successfulShoppers: [...acc.successfulShoppers, shopper]` — simpan full object
     - `totalProfit: acc.totalProfit + (price * shopper.amount)`

7. **`return acc` — shopper gagal beli:**
   - Kembalikan `acc` tanpa perubahan

8. **Destructuring hasil `reduce`:**
   ```javascript
   const { leftOver, successfulShoppers, totalProfit } = shoppersForProduct.reduce(...)
   ```

#### 🔍 `successfulShoppers.map(shopper => shopper.name)`:

9. **`map` kedua — ambil hanya `name` dari setiap shopper**
   ```javascript
   // Sebelum map:
   [{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }]
   // Setelah map:
   ['Windi']
   ```

#### 🔵 Return object hasil per produk:

10. **`return { product: productName, shoppers: successfulShoppers.map(...), leftOver, totalProfit }`**

---

### **Visualisasi `reduce` untuk Sepatu Stacattu (stock=10), [Windi beli 8, Vanessa beli 10]:**

```
┌────────────────────────────────────────────────────────────────────────────────┐
│  Initial value:                                                                │
│  acc = { leftOver: 10, successfulShoppers: [], totalProfit: 0 }               │
│                                                                                │
│  Iterasi 1 — Windi (amount=8):                                                 │
│    acc.leftOver (10) >= amount (8) → ✅ BERHASIL                               │
│    return {                                                                    │
│      leftOver: 10 - 8 = 2,                                                    │
│      successfulShoppers: [{ name:'Windi', product:'Sepatu Stacattu', amount:8 }], │
│      totalProfit: 0 + (1.500.000 × 8) = 12.000.000                            │
│    }                                                                           │
│                                                                                │
│  Iterasi 2 — Vanessa (amount=10):                                              │
│    acc.leftOver (2) >= amount (10) → ❌ GAGAL                                  │
│    return acc (tidak berubah)                                                  │
│                                                                                │
│  Hasil reduce:                                                                 │
│  {                                                                             │
│    leftOver: 2,                                                                │
│    successfulShoppers: [{ name: 'Windi', ... }],                              │
│    totalProfit: 12000000                                                       │
│  }                                                                             │
│                                                                                │
│  Setelah successfulShoppers.map(s => s.name):                                 │
│  ['Windi']                                                                     │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

### **Keywords:**
- 🗺️ **`map` pertama** — mengubah setiap produk menjadi object hasil
- 🔍 **`filter`** — menyaring shoppers yang membeli produk tertentu
- ➕ **`reduce`** — mengakumulasi data shopper yang berhasil beli
- 🗺️ **`map` kedua** — mengambil hanya `name` dari `successfulShoppers`
- 📦 **Full object** — menyimpan seluruh data shopper sebelum diambil nama-nya

---

### **Kompleksitas:**

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n × m)** | n = jumlah produk, m = jumlah shoppers |
| Memori | **O(n + m)** | salesReport + successfulShoppers menyimpan data lebih banyak |

---

### **Pitfalls (Jebakan Umum):**

**1) ❌ Pakai `filter` untuk ambil nama di akhir**
```javascript
// ❌ SALAH — filter menyaring, bukan mengubah
shoppers: successfulShoppers.filter(shopper => shopper.name)

// ✅ BENAR — map mengubah setiap object menjadi name-nya
shoppers: successfulShoppers.map(shopper => shopper.name)
```

**2) ❌ Lupa spread operator saat menyimpan full object**
```javascript
// ❌ SALAH — array di dalam array
successfulShoppers: [acc.successfulShoppers, shopper] // [[...], shopper]

// ✅ BENAR — spread array lama agar flat
successfulShoppers: [...acc.successfulShoppers, shopper] // [shopper1, shopper2]
```

**3) ❌ Langsung ambil `name` di `reduce` — kehilangan fleksibilitas**
```javascript
// Versi ini simpan name saja — tidak bisa akses data lain setelahnya
successfulShoppers: [...acc.successfulShoppers, name]

// Versi ini simpan full object — bisa akses name, product, amount kapanpun
successfulShoppers: [...acc.successfulShoppers, shopper]
```

---

### **💡 Insight Penting:**

> **Apa bedanya versi `map + reduce` dengan `map + filter + reduce`?**
> Perbedaan utamanya ada di apa yang disimpan di `reduce`. Versi `map + reduce` langsung menyimpan `name` saja, sedangkan versi ini menyimpan full object shopper terlebih dahulu lalu baru diambil `name`-nya di akhir menggunakan `map` kedua.

> **Kapan versi ini lebih berguna?**
> Ketika kamu butuh data shopper yang lebih lengkap setelah proses `reduce` — misalnya untuk menampilkan `amount` atau `product` dari setiap pembeli yang berhasil. Data itu sudah tersedia di `successfulShoppers`.

> **Kenapa `map` dipakai untuk mengambil nama, bukan `filter`?**
> Karena `map` tujuannya mengubah setiap item menjadi nilai baru, sedangkan `filter` tujuannya menyaring item. Di sini kita ingin mengubah object shopper menjadi string nama — itu tugas `map`, bukan `filter`.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 6: Alternatif map + reduce](06-alternatif-map-reduce.md)**
- **📖 [Lanjut ke Part 8: Alternatif productMap →](08-alternatif-productMap.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
