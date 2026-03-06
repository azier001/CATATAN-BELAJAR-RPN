# 📚 countProfit - PART 2: PROSES PENGERJAAN

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🔨 PART 2: PROSES PENGERJAAN 🔨                              ║
║                                                                          ║
║           Dari Kode Awal Hingga Kode Final Step-by-Step                  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 🏁 Kode Awal | 🔄 Step 1 | 🔄 Step 2 | 🔄 Step 3 | 🔄 Step 4 | ✅ Kode Final |
|:-----------:|:---------:|:---------:|:---------:|:---------:|:------------:|
| [Jump](#-kode-awal) | [Jump](#-step-1--menentukan-kerangka-utama) | [Jump](#-step-2--filter-pembeli-per-produk) | [Jump](#-step-3--cek-stock-dan-akumulasi) | [Jump](#-step-4--bentuk-object-dan-return) | [Jump](#-kode-final) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami proses berpikir dalam memecahkan soal ini
- ✅ Tahu kenapa loop `products` jadi kerangka utama
- ✅ Paham cara menggunakan `filter` untuk menyaring pembeli
- ✅ Mengerti cara mengecek stock dan mengakumulasi profit
- ✅ Bisa membentuk object hasil dan me-return array

---

## 🏁 Kode Awal

Ini adalah kode pertama yang ditulis sebelum ada bayangan solusi yang jelas:

```javascript
function countProfit(shoppers) {
  var listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];

  if (shoppers.length === 0) {
    return []
  }

  const listProduct = []
  let newObject = {}

  for (const [product, price, stock] of listBarang) {
    console.log(product)
  }

  for (const { name, product, amount } of shoppers) {
    const names = []
    names.push(name)

    newObject['product'] = product
    newObject['shoppers'] = names

    listProduct.push(newObject)
    newObject = {}
  }

  console.log(listProduct)
}
```

### ❌ Masalah di Kode Awal

- Loop `shoppers` dijadikan kerangka utama — padahal output harus **per produk**, bukan per pembeli
- Dua loop berjalan sendiri-sendiri tanpa saling terhubung
- Belum ada logika pengecekan stock
- Belum ada kalkulasi `totalProfit` dan `leftOver`
- Belum ada `return`

---

## 🔄 Step 1 — Menentukan Kerangka Utama

**Insight:** Output selalu berisi **3 object** sesuai jumlah produk di toko, bukan sesuai jumlah pembeli. Jadi loop `listBarang` yang harus jadi kerangka utama.

```javascript
for (const [product, price, stock] of listBarang) {
  console.log(product)
}
```

```
// Output:
Sepatu Stacattu
Baju Zoro
Sweater Uniklooh
```

✅ Loop `listBarang` berjalan 3 kali — sesuai jumlah produk di toko.

---

## 🔄 Step 2 — Filter Pembeli Per Produk

**Insight:** Di dalam loop `listBarang`, kita perlu tahu siapa saja yang membeli produk ini. Gunakan `filter` untuk menyaring pembeli yang relevan.

```javascript
for (const [product, price, stock] of listBarang) {
  const filtered = shoppers.filter(
    (shopper) => shopper.product === product
  )

  console.log(filtered)
}
```

```
// Output untuk test case 1:
(2) [{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
     { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }]
[]
[{ name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]
```

✅ Setiap produk sudah punya daftar pembelinya masing-masing.

---

## 🔄 Step 3 — Cek Stock dan Akumulasi

**Insight:** Kita perlu loop `filtered` satu per satu, sambil mengupdate `leftOver` setiap kali ada pembeli yang berhasil beli. `totalProfit` juga perlu diakumulasi.

```javascript
for (const [product, price, stock] of listBarang) {
  const filtered = shoppers.filter(
    (shopper) => shopper.product === product
  )

  let leftOver = stock
  const names = []
  let totalProfit = 0

  for (const { name, amount } of filtered) {
    if (leftOver >= amount) {
      leftOver -= amount
      names.push(name)
      totalProfit += price * amount
    }
  }

  console.log(leftOver)
  console.log(names)
  console.log(totalProfit)
}
```

```
// Output untuk test case 1:
5
['Windi', 'Vanessa']
7500000

2
[]
0

1
[]
0
```

✅ Stock, nama pembeli, dan profit sudah terhitung dengan benar.

---

## 🔄 Step 4 — Bentuk Object dan Return

**Insight:** Sekarang kita punya semua bahan. Tinggal bentuk object per produk, push ke array hasil, dan return.

```javascript
function countProfit(shoppers) {
  var listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];

  if (shoppers.length === 0) {
    return []
  }

  const result = []

  for (const [product, price, stock] of listBarang) {
    const filtered = shoppers.filter(
      (shopper) => shopper.product === product
    )

    let leftOver = stock
    const names = []
    let totalProfit = 0

    for (const { name, amount } of filtered) {
      if (leftOver >= amount) {
        leftOver -= amount
        names.push(name)
        totalProfit += price * amount
      }
    }

    result.push({ product, shoppers: names, leftOver, totalProfit })
  }

  return result
}
```

✅ Semua test case lulus!

---

## ✅ Kode Final

Ini adalah kode final yang siap untuk submission:

```javascript
function countProfit(shoppers) {
  var listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];

  // you can only write your code here!
  if (shoppers.length === 0) return []

  const result = []

  for (const [product, price, stock] of listBarang) {
    const filtered = shoppers.filter(
      shopper => shopper.product === product
    )

    let leftOver = stock
    const names = []
    let totalProfit = 0

    for (const { name, amount } of filtered) {
      if (leftOver >= amount) {
        leftOver -= amount
        names.push(name)
        totalProfit += price * amount
      }
    }

    result.push({ product, shoppers: names, leftOver, totalProfit })
  }

  return result
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

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 1: Soal & Kriteria](01-soal-dan-kriteria.md)**
- **📖 [Lanjut ke Part 3: Kesalahan & Pelajaran →](03-kesalahan-dan-pelajaran.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
