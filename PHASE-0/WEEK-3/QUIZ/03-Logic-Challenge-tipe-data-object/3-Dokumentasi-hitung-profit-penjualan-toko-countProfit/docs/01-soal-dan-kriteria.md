# 📚 countProfit - PART 1: SOAL & KRITERIA

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            📋 PART 1: SOAL & KRITERIA 📋                                ║
║                                                                          ║
║           Apa yang Diminta dan Bagaimana Cara Kerjanya                   ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📋 Soal | 🔍 Kriteria | 📊 Contoh | ✅ Ringkasan |
|:-------:|:-----------:|:---------:|:-----------:|
| [Jump](#-soal) | [Jump](#-kriteria) | [Jump](#-contoh-contoh) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami apa yang diminta soal
- ✅ Tahu data produk yang tersedia di toko
- ✅ Paham logika pengecekan stock dan pembelian
- ✅ Siap untuk melihat dan menganalisis kode di Part 2

---

## 📋 Soal

> ### 📋 Deskripsi
>
> Diberikan sebuah function **`countProfit(shoppers)`** yang menerima satu parameter:
>
> | Parameter | Tipe | Keterangan |
> |-----------|------|------------|
> | `shoppers` | `array of object` | Daftar pembeli beserta produk dan jumlah yang ingin dibeli |
>
> **Setiap object di dalam `shoppers` memiliki struktur:**
>
> | Key | Tipe | Keterangan |
> |-----|------|------------|
> | `name` | `string` | Nama pembeli |
> | `product` | `string` | Nama produk yang ingin dibeli |
> | `amount` | `number` | Jumlah produk yang ingin dibeli |
>
> **Toko X sedang melakukan SALE untuk beberapa barang:**
>
> | No | Produk | Harga | Stock |
> |----|--------|-------|-------|
> | 1 | 👟 Sepatu brand Stacattu | Rp 1.500.000 | 10 |
> | 2 | 👕 Baju brand Zoro | Rp 500.000 | 2 |
> | 3 | 🧥 Sweater brand Uniklooh | Rp 175.000 | 1 |
>
> Buatlah function yang mengembalikan **array of object** dimana setiap object berisi info: **`product`**, **`shoppers`**, **`leftOver`**, dan **`totalProfit`** untuk setiap produk di toko.

### 📝 Template Soal

```javascript
function countProfit(shoppers) {
  var listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];

  // you can only write your code here!
}
```

> ⚠️ **Catatan:** Kode hanya boleh ditulis di dalam komentar `// you can only write your code here!`. Struktur `listBarang` sudah diberikan dan tidak boleh diubah untuk submission.

---

## 🔍 Kriteria

> **1.** Jika `shoppers` kosong (`[]`)
> → return array kosong `[]`
>
> **2.** Jika stock barang **kurang** dari jumlah yang ingin dibeli
> → pembeli **batal** membeli barang tersebut
>
> **3.** Output selalu berisi **3 object** sesuai jumlah produk di toko (kecuali jika `shoppers` kosong)
>
> **4.** Setiap object output berisi:
> - `product` — nama produk
> - `shoppers` — array nama pembeli yang **berhasil** membeli
> - `leftOver` — sisa stock setelah transaksi
> - `totalProfit` — total pemasukan dari produk tersebut

---

## 📊 Contoh-contoh

### Output yang Diharapkan

```javascript
// ✅ Normal case 1 — Rani batal beli karena stock kurang
countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
])
// → [
//     { product: 'Sepatu Stacattu', shoppers: ['Windi', 'Vanessa'], leftOver: 5, totalProfit: 7500000 },
//     { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
//     { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
//   ]
```

```javascript
// ✅ Normal case 2 — Vanessa batal beli karena stock habis setelah Windi beli
countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 8 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 },
  { name: 'Devi', product: 'Baju Zoro', amount: 1 },
  { name: 'Lisa', product: 'Baju Zoro', amount: 1 }
])
// → [
//     { product: 'Sepatu Stacattu', shoppers: ['Windi'], leftOver: 2, totalProfit: 12000000 },
//     { product: 'Baju Zoro', shoppers: ['Devi', 'Lisa'], leftOver: 0, totalProfit: 1000000 },
//     { product: 'Sweater Uniklooh', shoppers: ['Rani'], leftOver: 0, totalProfit: 175000 }
//   ]
```

```javascript
// ✅ Normal case 3 — produk tidak ada di toko
countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }])
// → [
//     { product: 'Sepatu Stacattu', shoppers: [], leftOver: 10, totalProfit: 0 },
//     { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
//     { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
//   ]
```

```javascript
// ✅ Edge case — input kosong
countProfit([])
// → []
```

---

### Simulasi Pembelian: Sepatu Stacattu (stock=10)

```
Pembeli yang ingin beli Sepatu Stacattu:
→ Windi  (amount=8)
→ Vanessa (amount=10)

Stock awal: 10

1. Windi beli 8   →  stock (10) >= amount (8)  ✅ beli → sisa stock = 2
2. Vanessa beli 10 → stock (2)  >= amount (10) ❌ batal

shoppers    = ['Windi']
leftOver    = 2
totalProfit = 1.500.000 × 8 = 12.000.000
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Parameter | `shoppers` — array of object `{ name, product, amount }` |
| Jumlah output | Selalu **3 object** (kecuali shoppers kosong → `[]`) |
| Kondisi beli | Stock harus **≥ amount** yang diminta pembeli |
| Jika batal | Pembeli tidak masuk ke `shoppers`, stock tidak berkurang |
| `leftOver` | Sisa stock setelah semua transaksi |
| `totalProfit` | Akumulasi `price × amount` dari semua pembeli yang berhasil |
| Return | Array of object `{ product, shoppers, leftOver, totalProfit }` |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2: Proses Pengerjaan →](02-proses-pengerjaan.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
