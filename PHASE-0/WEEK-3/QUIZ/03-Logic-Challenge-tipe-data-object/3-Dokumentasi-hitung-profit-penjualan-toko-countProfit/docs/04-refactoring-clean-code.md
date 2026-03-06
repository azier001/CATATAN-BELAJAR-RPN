# 📚 countProfit - PART 4: REFACTORING & CLEAN CODE

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            ✨ PART 4: REFACTORING & CLEAN CODE ✨                        ║
║                                                                          ║
║           Dari Kode Final ke Kode yang Lebih Clean dan Readable          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔄 Penamaan | 🔄 Guard Clause | 🔄 Destructuring | ✅ Kode Refactoring | 📖 Algoritma |
|:-----------:|:---------------:|:----------------:|:------------------:|:-----------:|
| [Jump](#-step-1--penamaan-variabel) | [Jump](#-step-2--guard-clause) | [Jump](#-step-3--destructuring-inner-loop) | [Jump](#-kode-refactoring-final) | [Jump](#-ringkasan-algoritma) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami pentingnya penamaan variabel yang deskriptif
- ✅ Tahu cara menulis guard clause yang ringkas
- ✅ Paham kenapa destructuring yang tepat penting
- ✅ Bisa membedakan kode yang clean vs tidak clean

---

## 🔄 Step 1 — Penamaan Variabel

Penamaan variabel yang baik membuat kode lebih mudah dibaca tanpa perlu komentar tambahan.

| Variabel Lama | Variabel Baru | Alasan |
|---------------|---------------|--------|
| `var listBarang` | `const products` | Bahasa Inggris, lebih singkat, ganti `var` ke `const` |
| `result` | `salesReport` | Lebih deskriptif — jelas isinya laporan penjualan |
| `filtered` | `shoppersForProduct` | Lebih spesifik — jelas ini shoppers untuk produk tertentu |
| `names` | `buyerNames` | Lebih deskriptif — jelas isinya array of nama pembeli |
| `product` (outer loop) | `productName` | Menghindari konflik dengan key `product` di object hasil |

### Kenapa `productName` Lebih Baik dari `product`?

```javascript
// ❌ Membingungkan — 'product' dipakai untuk dua hal berbeda
for (const [product, price, stock] of listBarang) {
  result.push({ product, shoppers: names, ... })
  //            ↑ ini shorthand — tapi product merujuk ke apa?
}

// ✅ Jelas — 'productName' untuk variabel, 'product' untuk key object
for (const [productName, price, stock] of products) {
  salesReport.push({ product: productName, shoppers: buyerNames, ... })
  //                 ↑ key      ↑ value — sangat jelas!
}
```

---

## 🔄 Step 2 — Guard Clause

Guard clause yang ringkas lebih clean untuk kondisi satu baris.

```javascript
// ❌ Terlalu verbose untuk kondisi sederhana
if (shoppers.length === 0) {
  return []
}

// ✅ Lebih ringkas — kondisi satu baris tidak perlu kurung kurawal
if (!shoppers.length) return []
```

> 💡 `!shoppers.length` sama artinya dengan `shoppers.length === 0` — keduanya mengecek apakah array kosong.

---

## 🔄 Step 3 — Destructuring Inner Loop

Di kode final, inner loop masih destructuring `product` yang sebenarnya tidak dipakai:

```javascript
// ❌ Destructuring 'product' tapi tidak dipakai di inner loop
for (const { name, product, amount } of filtered) {
  //                ↑ tidak dipakai!
}

// ✅ Hanya destructuring yang dibutuhkan
for (const { name, amount } of shoppersForProduct) {
  //         ↑ dan ↑ — keduanya dipakai
}
```

> 💡 Selain lebih bersih, ini juga menghindari konflik nama dengan variabel `productName` di outer loop.

---

## ✅ Kode Refactoring Final

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
Loop setiap produk di products
  Filter shoppers yang membeli produk ini → shoppersForProduct
  Inisialisasi leftOver, buyerNames, totalProfit
  Loop setiap shopper yang cocok
    Jika stock cukup → catat nama, kurangi stock, tambah profit
    Jika tidak → shopper batal
  Push object hasil ke salesReport
Return salesReport
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
   - Tanpa ini, loop tetap berjalan dan menghasilkan 3 object meskipun tidak ada pembeli

#### 🔄 Di Dalam `for (const [productName, price, stock] of products)`:

3. **Loop utama dimulai dari `products`**
   - Output selalu 3 object sesuai jumlah produk
   - Destructuring `[productName, price, stock]` langsung dari array

4. **`shoppersForProduct = shoppers.filter(shopper => shopper.product === productName)`**
   - Filter semua pembeli yang membeli produk ini
   - Hasilnya bisa `[]` jika tidak ada yang membeli

5. **Inisialisasi variabel:**
   - `leftOver = stock` — sisa stock dimulai dari stock awal
   - `buyerNames = []` — penampung nama pembeli yang berhasil
   - `totalProfit = 0` — akumulator profit

#### 🔄 Di Dalam `for (const { name, amount } of shoppersForProduct)`:

6. **`if (leftOver >= amount)`**
   - Cek apakah stock saat ini cukup
   - Stock bisa sudah berkurang dari pembeli sebelumnya

7. **Jika berhasil beli:**
   - `leftOver -= amount`
   - `buyerNames.push(name)`
   - `totalProfit += price * amount`

8. **Jika gagal:** tidak ada yang dilakukan

#### 🔵 Setelah Inner Loop:

9. **`salesReport.push({ product: productName, shoppers: buyerNames, leftOver, totalProfit })`**
   - Object baru dibuat setiap iterasi — mencegah bug pass by reference

#### 🔵 Setelah Outer Loop:

10. **`return salesReport`**

---

### **Visualisasi untuk Sepatu Stacattu (stock=10), [Windi beli 8, Vanessa beli 10]:**

```
┌─────────────────────────────────────────────────────────────────┐
│  leftOver = 10, buyerNames = [], totalProfit = 0               │
│                                                                 │
│  Shopper 1 — Windi (amount=8):                                  │
│    leftOver (10) >= amount (8) → ✅ BERHASIL                    │
│    leftOver = 10 - 8 = 2                                        │
│    buyerNames = ['Windi']                                       │
│    totalProfit = 1.500.000 × 8 = 12.000.000                    │
│                                                                 │
│  Shopper 2 — Vanessa (amount=10):                               │
│    leftOver (2) >= amount (10) → ❌ GAGAL                       │
│    tidak ada perubahan                                          │
│                                                                 │
│  salesReport.push({                                             │
│    product: 'Sepatu Stacattu',                                  │
│    shoppers: ['Windi'],                                         │
│    leftOver: 2,                                                 │
│    totalProfit: 12000000                                        │
│  })                                                             │
└─────────────────────────────────────────────────────────────────┘
```

---

### **Keywords:**
- 🛡️ **Guard Clause** — `if (!shoppers.length) return []` untuk menangani edge case di awal
- 🔄 **Nested Loop** — loop di dalam loop, outer untuk produk, inner untuk pembeli
- 🔍 **`filter`** — menyaring pembeli yang membeli produk tertentu
- 📦 **Destructuring** — `[productName, price, stock]` dan `{ name, amount }`
- ➕ **Akumulasi** — `totalProfit += price * amount`
- 🆕 **Object baru per iterasi** — mencegah bug pass by reference

---

### **Kompleksitas:**

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n × m)** | n = jumlah produk, m = jumlah shoppers |
| Memori | **O(n)** | salesReport menyimpan n object hasil |

---

### **Pitfalls (Jebakan Umum):**

**1) ❌ Menghapus guard clause**
```javascript
// Tanpa guard clause, countProfit([]) akan return:
// [{ product: 'Sepatu Stacattu', ... }, ...] — 3 object!
// Padahal expected: []
// Jadi guard clause WAJIB ada!
if (!shoppers.length) return []
```

**2) ❌ Destructuring variabel yang tidak dipakai**
```javascript
// ❌ 'product' tidak dipakai di inner loop — hapus saja
for (const { name, product, amount } of shoppersForProduct) { }

// ✅ Hanya destructuring yang dibutuhkan
for (const { name, amount } of shoppersForProduct) { }
```

**3) ❌ Menggunakan nama yang tidak deskriptif**
```javascript
// ❌ Kurang deskriptif
const r = []
const f = shoppers.filter(s => s.product === p)

// ✅ Langsung terbaca tujuannya
const salesReport = []
const shoppersForProduct = shoppers.filter(s => s.product === productName)
```

---

### **💡 Insight Penting:**

> **Kenapa penamaan variabel penting?**
> Kode dibaca jauh lebih sering daripada ditulis. Nama yang deskriptif seperti `shoppersForProduct` langsung menyampaikan tujuannya tanpa perlu komentar tambahan.

> **Kapan boleh hapus kurung kurawal di `if`?**
> Hanya jika isi `if` adalah satu baris saja. Untuk kondisi dengan lebih dari satu baris, tetap gunakan kurung kurawal agar tidak membingungkan.

> **Kenapa `!shoppers.length` lebih idiomatis dari `shoppers.length === 0`?**
> Karena di JavaScript, `0` adalah falsy value — sehingga `!0` adalah `true`. Ini adalah pola yang sangat umum dipakai untuk mengecek array kosong secara ringkas.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 3: Kesalahan & Pelajaran](03-kesalahan-dan-pelajaran.md)**
- **📖 [Lanjut ke Part 5: Alternatif forEach →](05-alternatif-forEach.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
