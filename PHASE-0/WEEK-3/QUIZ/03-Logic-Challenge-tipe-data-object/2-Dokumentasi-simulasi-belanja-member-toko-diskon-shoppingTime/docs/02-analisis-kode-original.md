# 📚 shoppingTime - PART 2: ANALISIS KODE ORIGINAL

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         📋 PART 2: ANALISIS KODE ORIGINAL 📋                            ║
║                                                                          ║
║              Apakah Kode Sudah Sesuai Kriteria?                          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📋 Kode Original | ✅ Yang Benar | 💡 Yang Bisa Diperbaiki | 📊 Kesimpulan |
|:----------------:|:------------:|:-----------------------:|:-------------:|
| [Jump](#-kode-original) | [Jump](#-yang-sudah-benar) | [Jump](#-yang-bisa-diperbaiki) | [Jump](#-kesimpulan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja kode original
- ✅ Tahu bagian mana yang sudah benar dan sesuai kriteria
- ✅ Tahu bagian mana yang bisa diperbaiki dari sisi clean code
- ✅ Siap untuk melakukan refactoring di Part 3

---

## 📋 Kode Original

```javascript
const products = {
  'Sepatu Stacattu': 1500000,
  'Baju Zoro': 500000,
  'Baju H&N': 250000,
  'Sweater Uniklooh': 175000,
  'Casing Handphone': 50000,
}

function shoppingTime(memberId, money) {
  if (!memberId) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }

  if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup'
  }

  const sortedProducts = Object.entries(products).sort((a, b) => b[1] - a[1])

  const listPurchased = []
  let changeMoney = money

  for (let i = 0; i < sortedProducts.length; i++) {
    const nameProduct = sortedProducts[i][0]
    const price = sortedProducts[i][1]

    if (changeMoney >= price) {
      changeMoney -= price
      listPurchased.push(nameProduct)
    }
  }

  return { memberId, money, listPurchased, changeMoney }
}
```

---

## ✅ Yang Sudah Benar

### 1. Validasi `memberId` dengan `!memberId`

```javascript
if (!memberId) {
  return 'Mohon maaf, toko X hanya berlaku untuk member saja'
}
```

Menangkap semua nilai falsy sekaligus — `''`, `undefined`, `null`, `0`:

```javascript
console.log(shoppingTime('', 700000))        // ✅ → 'Mohon maaf, toko X hanya berlaku untuk member saja'
console.log(shoppingTime(undefined, 700000)) // ✅ → 'Mohon maaf, toko X hanya berlaku untuk member saja'
console.log(shoppingTime())                  // ✅ → 'Mohon maaf, toko X hanya berlaku untuk member saja'
```

---

### 2. Validasi `money < 50000`

```javascript
if (money < 50000) {
  return 'Mohon maaf, uang tidak cukup'
}
```

Tepat — angka 50000 adalah harga produk termurah (Casing Handphone). Jika uang kurang dari itu, tidak ada produk yang bisa dibeli.

---

### 3. Sort descending dengan `Object.entries()`

```javascript
const sortedProducts = Object.entries(products).sort((a, b) => b[1] - a[1])
```

- `Object.entries()` mengubah object menjadi array of `[nama, harga]` yang bisa di-sort
- `b[1] - a[1]` mengurutkan dari harga tertinggi ke terendah ✅

---

### 4. Logika pembelian sudah benar

```javascript
if (changeMoney >= price) {
  changeMoney -= price
  listPurchased.push(nameProduct)
}
```

- Hanya beli jika uang cukup ✅
- `changeMoney` dikurangi setiap pembelian ✅
- `money` asli tidak berubah — yang berkurang hanya `changeMoney` ✅

---

### 5. Semua test case passed ✅

```javascript
console.log(shoppingTime('1820RzKrnWn08', 2475000))
// ✅ { listPurchased: ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'], changeMoney: 0 }

console.log(shoppingTime('82Ku8Ma742', 170000))
// ✅ { listPurchased: ['Casing Handphone'], changeMoney: 120000 }

console.log(shoppingTime('324193hDew2', 700000))
// ✅ { listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }

console.log(shoppingTime('', 2475000))
// ✅ 'Mohon maaf, toko X hanya berlaku untuk member saja'

console.log(shoppingTime('234JdhweRxa53', 15000))
// ✅ 'Mohon maaf, uang tidak cukup'
```

---

## 💡 Yang Bisa Diperbaiki

### 1. `for` loop biasa → bisa diganti `for...of`

```javascript
// ⚠️ Kurang readable — akses via index manual
for (let i = 0; i < sortedProducts.length; i++) {
  const nameProduct = sortedProducts[i][0]
  const price = sortedProducts[i][1]
}

// ✅ Lebih readable — destructuring langsung
for (const [productName, price] of sortedProducts) { }
```

---

### 2. Nama variabel kurang mengikuti english naming convention

```javascript
// ⚠️ Kurang natural
const nameProduct = sortedProducts[i][0]
const sortedProducts = ...

// ✅ Lebih natural
const productName = ...
const sortedByPrice = ...
```

---

### 3. `products` didefinisikan di luar function

```javascript
// ⚠️ Di kode original — products sebagai variabel global
const products = { ... }

function shoppingTime(memberId, money) { ... }
```

> **Catatan:** Ini sebenarnya **pilihan yang valid** karena `products` adalah data konstanta yang tidak berubah — lebih efisien agar tidak dibuat ulang setiap kali function dipanggil. Namun perlu diperhatikan bahwa soal meminta semua kode ditulis di dalam function. Diskusi lebih lanjut ada di Part 3.

---

## 📊 Kesimpulan

| Aspek | Status | Keterangan |
|-------|--------|------------|
| Validasi `memberId` | ✅ Benar | Menangkap semua nilai falsy |
| Validasi `money` | ✅ Benar | `< 50000` sudah tepat |
| Sort descending | ✅ Benar | `b[1] - a[1]` |
| Logika pembelian | ✅ Benar | Beli jika cukup, kurangi `changeMoney` |
| Return object | ✅ Benar | Shorthand property |
| Semua test case | ✅ Passed | 6/6 |
| Gaya penulisan loop | 💡 Bisa diperbaiki | Ganti ke `for...of` |
| Nama variabel | 💡 Bisa diperbaiki | `nameProduct` → `productName` |

Kode original sudah **benar dan sesuai kriteria soal**. Tidak ada bug — hanya ada beberapa hal yang bisa diperbaiki dari sisi **clean code dan naming convention** di Part 3.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 1: Soal & Kriteria](01-soal-dan-kriteria.md)**
- **🔧 [Lanjut ke Part 3: Refactoring Step-by-Step →](03-refactoring-step-by-step.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
