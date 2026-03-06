# 📚 countProfit - PART 5: ALTERNATIF `forEach`

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🔄 PART 5: ALTERNATIF forEach 🔄                             ║
║                                                                          ║
║           Pendekatan Alternatif Menggunakan Method forEach               ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 📖 Konsep | ✅ Kode | 🧪 Test Cases | 📖 Algoritma | ⚠️ Pitfalls |
|:---------:|:-------:|:-------------:|:------------:|:-----------:|
| [Jump](#-perbedaan-foreach-vs-forof) | [Jump](#-kode-alternatif-foreach) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) | [Jump](#-pitfalls-jebakan-umum) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami perbedaan `forEach` dan `for...of`
- ✅ Tahu kapan `forEach` cocok digunakan
- ✅ Paham kenapa `forEach` tidak bisa menggantikan `map`
- ✅ Bisa mengimplementasikan solusi menggunakan `forEach`

---

## 📖 Perbedaan `forEach` vs `for...of`

Keduanya sama-sama untuk loop setiap item di array, tapi ada perbedaan penting:

| | `for...of` | `forEach` |
|---|---|---|
| Jenis | Syntax bawaan JavaScript | Method dari array |
| `break` | ✅ Bisa | ❌ Tidak bisa |
| `continue` | ✅ Bisa | ❌ Tidak bisa |
| Return nilai | ✅ Bisa | ❌ Tidak bisa |
| Bekerja pada | Semua iterable | Array saja |
| Style | Imperative | Lebih modern |

```javascript
// for...of
for (const item of array) {
  // bisa pakai break dan continue
}

// forEach
array.forEach(item => {
  // tidak bisa pakai break dan continue
})
```

> 💡 Karena `forEach` tidak return nilai, kita tetap butuh array penampung `salesReport` dan `push` manual — berbeda dengan `map` yang otomatis mengumpulkan hasil.

---

## ✅ Kode Alternatif `forEach`

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

### Perubahan dari Versi Refactoring:

| Sebelum | Sesudah | Keterangan |
|---------|---------|------------|
| `for (const [...] of products)` | `products.forEach(([...]) => {})` | Outer loop |
| `for (const {...} of shoppersForProduct)` | `shoppersForProduct.forEach(({...}) => {})` | Inner loop |
| Sisanya | Sama persis | `salesReport`, `push`, akumulator tetap ada |

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
forEach setiap produk
  filter shoppers yang membeli produk ini
  forEach shoppersForProduct → cek stock, catat nama, akumulasi profit
  push object hasil ke salesReport
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

#### 🗂️ Inisialisasi `salesReport`:

3. **`const salesReport = []`**
   - Array penampung hasil akhir
   - Wajib ada karena `forEach` tidak return nilai — hasil dikumpulkan manual

#### 🔄 `products.forEach(([productName, price, stock]) => { ... })`:

4. **`forEach` menggantikan outer `for...of`**
   - Destructuring `[productName, price, stock]` langsung di parameter callback
   - Tidak return nilai — hasil dikumpulkan via `salesReport.push()`

5. **`shoppersForProduct = shoppers.filter(shopper => shopper.product === productName)`**
   - Filter shoppers yang membeli produk ini

6. **Inisialisasi variabel:**
   - `leftOver = stock`
   - `buyerNames = []`
   - `totalProfit = 0`

#### 🔄 `shoppersForProduct.forEach(({ name, amount }) => { ... })`:

7. **`forEach` menggantikan inner `for...of`**
   - Destructuring `{ name, amount }` langsung di parameter callback

8. **`if (leftOver >= amount)` — shopper berhasil beli:**
   - `leftOver -= amount`
   - `buyerNames.push(name)`
   - `totalProfit += price * amount`

#### 🔵 Setelah Inner `forEach`:

9. **`salesReport.push({ product: productName, shoppers: buyerNames, leftOver, totalProfit })`**
   - Push object baru ke `salesReport` setiap iterasi outer `forEach`

#### 🔵 Setelah Outer `forEach`:

10. **`return salesReport`**

---

### **Visualisasi untuk Sepatu Stacattu (stock=10), [Windi beli 8, Vanessa beli 10]:**

```
┌─────────────────────────────────────────────────────────────────┐
│  leftOver = 10, buyerNames = [], totalProfit = 0               │
│                                                                 │
│  forEach #1 — Windi (amount=8):                                 │
│    leftOver (10) >= amount (8) → ✅ BERHASIL                    │
│    leftOver = 10 - 8 = 2                                        │
│    buyerNames = ['Windi']                                       │
│    totalProfit = 1.500.000 × 8 = 12.000.000                    │
│                                                                 │
│  forEach #2 — Vanessa (amount=10):                              │
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
- 🔄 **`forEach`** — loop setiap item array, tidak return nilai
- 🗂️ **`salesReport`** — array penampung hasil, wajib ada karena `forEach` tidak return nilai
- 📤 **`push` manual** — memasukkan object hasil ke `salesReport` secara manual
- 🔍 **`filter`** — menyaring shoppers yang membeli produk tertentu
- ➕ **Akumulasi** — `totalProfit += price * amount`

---

### **Kompleksitas:**

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n × m)** | n = jumlah produk, m = jumlah shoppers |
| Memori | **O(n)** | salesReport menyimpan n object hasil |

---

### **Pitfalls (Jebakan Umum):**

**1) ❌ Mencoba return dari dalam `forEach`**
```javascript
// ❌ SALAH — return di dalam forEach hanya keluar dari callback,
//            bukan dari function countProfit
products.forEach(([productName, price, stock]) => {
  return { product: productName, ... } // tidak berguna!
})

// ✅ BENAR — gunakan push untuk kumpulkan hasil
products.forEach(([productName, price, stock]) => {
  salesReport.push({ product: productName, ... })
})
```

**2) ❌ Lupa deklarasi `salesReport` sebelum `forEach`**
```javascript
// ❌ SALAH — salesReport tidak ada, push akan error
products.forEach(([productName, ...]) => {
  salesReport.push({ ... }) // ReferenceError!
})

// ✅ BENAR — deklarasi salesReport sebelum forEach
const salesReport = []
products.forEach(([productName, ...]) => {
  salesReport.push({ ... })
})
```

**3) ❌ Pakai `forEach` tapi ingin berhenti di tengah loop**
```javascript
// ❌ TIDAK BISA — forEach tidak support break
products.forEach(([productName, ...]) => {
  if (someCondition) break // SyntaxError!
})

// ✅ GUNAKAN for...of jika butuh break
for (const [productName, ...] of products) {
  if (someCondition) break // ✅
}
```

---

### **💡 Insight Penting:**

> **Kapan pakai `forEach` vs `for...of`?**
> Keduanya hampir identik dalam hal fungsi. `forEach` lebih idiomatis di JavaScript modern. `for...of` lebih fleksibel karena mendukung `break` dan `continue`, dan juga bekerja pada semua iterable bukan hanya array.

> **Kenapa `forEach` tidak bisa menggantikan `map`?**
> Karena `forEach` tidak return nilai — ia hanya menjalankan callback untuk setiap item tanpa mengumpulkan hasilnya. `map` selalu return array baru berisi hasil dari setiap callback. Itulah kenapa kita masih butuh `salesReport` dan `push` manual di versi ini.

> **Mana yang lebih baik antara `forEach` dan `for...of`?**
> Keduanya setara dalam performa. Pilihan antara keduanya lebih ke preferensi gaya penulisan. `forEach` lebih ringkas dan modern, `for...of` lebih eksplisit dan fleksibel.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 4: Refactoring & Clean Code](04-refactoring-clean-code.md)**
- **📖 [Lanjut ke Part 6: Alternatif map + reduce →](06-alternatif-map-reduce.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
