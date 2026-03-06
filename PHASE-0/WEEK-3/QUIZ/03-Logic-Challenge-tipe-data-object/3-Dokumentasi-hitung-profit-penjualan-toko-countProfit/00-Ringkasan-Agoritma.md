# 📋 countProfit — Ringkasan Algoritma Semua Versi

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          📋 RINGKASAN ALGORITMA — COMPLETE REFERENCE 📋                 ║
║       Refactored · forEach · map+reduce · map+filter+reduce · productMap ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-30%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Versi](https://img.shields.io/badge/Versi-5%20Solusi-success?style=for-the-badge)

---

## 🎯 Tujuan

- ✅ Ringkasan challenge dan kriteria dalam satu tempat
- ✅ Ringkasan algoritma semua versi secara detail
- ✅ Quick reference untuk review atau ujian

---

## 🧭 Quick Jump

| 🧩 Challenge | ✅ Versi 1 | 🔄 Versi 2 | 🔀 Versi 3 | 🔀 Versi 4 | ⚡ Versi 5 | 🧪 Test Cases | 📊 Perbandingan |
|:------------:|:---------:|:---------:|:---------:|:---------:|:---------:|:-------------:|:---------------:|
| [Jump](#-deskripsi-challenge) | [Jump](#-versi-1-refactored-forof) | [Jump](#-versi-2-foreach) | [Jump](#-versi-3-map--reduce) | [Jump](#-versi-4-map--filter--reduce) | [Jump](#-versi-5-productmap) | [Jump](#-test-cases-lengkap) | [Jump](#-perbandingan-lengkap) |

---

# 🧩 DESKRIPSI CHALLENGE

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
→ Windi   (amount=8)
→ Vanessa (amount=10)

Stock awal: 10

1. Windi beli 8    → stock (10) >= amount (8)  ✅ beli → sisa stock = 2
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

> 💡 **Aturan Sederhana:** Loop produk sebagai kerangka utama → filter shoppers per produk → cek stock satu per satu → akumulasi profit. Output selalu 3 object sesuai jumlah produk di toko.

---

## ⚡ Quick Test — Tulis Fungsinya Sendiri Dulu, Lalu Test Satu per Satu!

> 💡 Tulis function `countProfit` kamu sendiri terlebih dahulu, baru paste test di bawah ini satu per satu untuk ngecek hasilnya.

```javascript
// Test 1 — Edge case: input kosong
console.log(countProfit([]))
// → []
```

```javascript
// Test 2 — Rani batal beli karena stock kurang
console.log(countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
]))
// → [{ product: 'Sepatu Stacattu', shoppers: ['Windi', 'Vanessa'], leftOver: 5, totalProfit: 7500000 }, ...]
```

```javascript
// Test 3 — Vanessa batal beli karena stock habis setelah Windi beli
console.log(countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 8 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 },
  { name: 'Devi', product: 'Baju Zoro', amount: 1 },
  { name: 'Lisa', product: 'Baju Zoro', amount: 1 }
]))
// → [{ product: 'Sepatu Stacattu', shoppers: ['Windi'], leftOver: 2, totalProfit: 12000000 }, ...]
```

```javascript
// Test 4 — Produk tidak ada di toko
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]))
// → [{ product: 'Sepatu Stacattu', shoppers: [], leftOver: 10, totalProfit: 0 }, ...]
```

---

═══════════════════════════════════════════════════════════════════════

# ✅ VERSI 1: Refactored (`for...of`)

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Pemula%20%7C%20Readable-green?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative-orange?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Jika shoppers kosong → return []
Loop setiap produk sebagai kerangka utama (for...of products)
  Filter shoppers yang membeli produk ini → shoppersForProduct
  Inisialisasi leftOver, buyerNames, totalProfit
  Loop setiap shopper yang cocok (for...of shoppersForProduct)
    Jika stock cukup → catat nama, kurangi stock, tambah profit
    Jika tidak → shopper batal
  Push object hasil ke salesReport
Return salesReport
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. **`function countProfit(shoppers)`**
   - `shoppers` — array of object `{ name, product, amount }` yang berisi data pembeli
   - **return** — array of object `{ product, shoppers, leftOver, totalProfit }` untuk setiap produk di toko

#### 🟡 Data Produk (Di Dalam Function):

2. **`const products = [['Sepatu Stacattu', 1500000, 10], ...]`**
   - Array of array — setiap item berisi `[nama, harga, stock]`
   - Diletakkan di dalam function karena konteks soal mengharuskan semua kode di dalam function

#### 🛡️ Guard Clause:

3. **`if (!shoppers.length) return []`**
   - Jika `shoppers` kosong → langsung return `[]` tanpa eksekusi apapun
   - Tanpa ini, loop tetap berjalan dan menghasilkan 3 object meskipun tidak ada pembeli

#### 🗂️ Inisialisasi `salesReport`:

4. **`const salesReport = []`**
   - Array penampung hasil akhir yang akan di-return
   - Diisi secara manual via `salesReport.push()` di dalam loop

#### 🔄 Outer Loop — `for (const [productName, price, stock] of products)`:

5. **Loop utama dimulai dari `products`**
   - Output selalu 3 object sesuai jumlah produk — itulah kenapa loop ini jadi kerangka utama
   - Destructuring `[productName, price, stock]` langsung dari setiap array produk

6. **`const shoppersForProduct = shoppers.filter(shopper => shopper.product === productName)`**
   - Filter semua pembeli yang membeli produk ini
   - Hasilnya bisa `[]` jika tidak ada yang membeli produk ini

7. **Inisialisasi variabel per produk:**
   - `let leftOver = stock` — sisa stock dimulai dari stock awal, berkurang setiap ada pembelian
   - `const buyerNames = []` — penampung nama pembeli yang berhasil beli
   - `let totalProfit = 0` — akumulator profit, dideklarasikan **di luar** inner loop agar terakumulasi

#### 🔄 Inner Loop — `for (const { name, amount } of shoppersForProduct)`:

8. **Loop setiap shopper yang membeli produk ini**
   - Destructuring `{ name, amount }` langsung dari setiap object shopper
   - Hanya `name` dan `amount` yang dibutuhkan — `product` tidak perlu di-destructure

9. **`if (leftOver >= amount)` — cek stock:**
   - Stock saat ini (bisa sudah berkurang dari pembeli sebelumnya) harus `>=` jumlah yang diminta

10. **Jika berhasil beli:**
    - `leftOver -= amount` — kurangi stock sesuai jumlah yang dibeli
    - `buyerNames.push(name)` — catat nama pembeli yang berhasil
    - `totalProfit += price * amount` — akumulasi profit: harga × jumlah

11. **Jika gagal beli:**
    - Tidak ada yang dilakukan — shopper tidak masuk ke `buyerNames`, stock tidak berkurang

#### 🔵 Setelah Inner Loop:

12. **`salesReport.push({ product: productName, shoppers: buyerNames, leftOver, totalProfit })`**
    - Push **object baru** ke `salesReport` setiap iterasi outer loop
    - Object baru di setiap iterasi — mencegah bug pass by reference
    - `shoppers: buyerNames` — key `shoppers` diisi dengan array nama pembeli yang berhasil

#### 🔵 Setelah Outer Loop:

13. **`return salesReport`**
    - Kembalikan array berisi 3 object, satu per produk

### **Visualisasi untuk Sepatu Stacattu (stock=10), [Windi beli 8, Vanessa beli 10]:**

```
leftOver = 10, buyerNames = [], totalProfit = 0

Inner loop #1 — Windi (amount=8):
  leftOver (10) >= amount (8) → ✅ BERHASIL
  leftOver  = 10 - 8 = 2
  buyerNames = ['Windi']
  totalProfit = 0 + (1.500.000 × 8) = 12.000.000

Inner loop #2 — Vanessa (amount=10):
  leftOver (2) >= amount (10) → ❌ GAGAL
  tidak ada perubahan

salesReport.push({
  product: 'Sepatu Stacattu',
  shoppers: ['Windi'],
  leftOver: 2,
  totalProfit: 12000000
})
```

### **Keywords:**
- 🛡️ **Guard Clause** — `if (!shoppers.length) return []` menangani edge case di awal
- 🔄 **Nested Loop** — outer untuk produk, inner untuk shoppers per produk
- 🔍 **`filter`** — menyaring shoppers yang membeli produk tertentu
- 📦 **Destructuring** — `[productName, price, stock]` dan `{ name, amount }`
- ➕ **Akumulasi** — `totalProfit += price * amount`, dideklarasikan di luar inner loop
- 🆕 **Object baru per iterasi** — `salesReport.push({ ... })` mencegah pass by reference bug

### **Kapan Pakai:**
- ✅ Belajar dan debugging
- ✅ Butuh kode yang paling mudah dibaca
- ✅ Ketika readability adalah prioritas utama

### **Pitfalls (Jebakan Umum):**

**1) ❌ Loop `shoppers` jadi kerangka utama**
```javascript
// ❌ SALAH — output akan berisi object per shopper, bukan per produk
for (const { name, product, amount } of shoppers) { ... }

// ✅ BENAR — output selalu 3 object sesuai jumlah produk
for (const [productName, price, stock] of products) { ... }
```

**2) ❌ `totalProfit` dideklarasikan di dalam inner loop**
```javascript
// ❌ SALAH — reset setiap iterasi, tidak terakumulasi
for (const { name, amount } of shoppersForProduct) {
  let totalProfit = price * amount // reset tiap iterasi!
}

// ✅ BENAR — di luar loop agar bisa terakumulasi
let totalProfit = 0
for (const { name, amount } of shoppersForProduct) {
  totalProfit += price * amount
}
```

**3) ❌ `salesReport.push()` di luar outer loop**
```javascript
// ❌ SALAH — hanya push sekali, result hanya 1 object
for (const [productName, ...] of products) { ... }
salesReport.push({ ... }) // di luar loop!

// ✅ BENAR — push di dalam outer loop
for (const [productName, ...] of products) {
  ...
  salesReport.push({ ... }) // di dalam loop!
}
```

**4) ❌ Pakai satu object yang sama (Pass by Reference)**
```javascript
// ❌ SALAH — semua entry di salesReport akan menunjuk ke object yang sama
const resultObject = {}
for (...) {
  resultObject.product = productName
  salesReport.push(resultObject) // semua entry = referensi ke object yang sama!
}

// ✅ BENAR — buat object baru setiap iterasi
for (...) {
  salesReport.push({ product: productName, ... }) // object baru setiap iterasi
}
```

### **💡 Insight Penting:**

> **Kenapa loop `products` jadi kerangka utama?**
> Karena output selalu berisi 3 object sesuai jumlah produk di toko. Setiap iterasi outer loop menghasilkan tepat 1 object hasil untuk 1 produk.

> **Kenapa guard clause `if (!shoppers.length) return []` wajib ada?**
> Tanpa guard clause, loop tetap berjalan dan menghasilkan 3 object dengan nilai default — padahal expected output adalah `[]`.

---

═══════════════════════════════════════════════════════════════════════

# 🔄 VERSI 2: `forEach`

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Modern%20%7C%20Readable-green?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative-orange?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Jika shoppers kosong → return []
forEach setiap produk sebagai kerangka utama
  Filter shoppers yang membeli produk ini → shoppersForProduct
  Inisialisasi leftOver, buyerNames, totalProfit
  forEach shoppersForProduct
    Jika stock cukup → catat nama, kurangi stock, tambah profit
    Jika tidak → shopper batal
  Push object hasil ke salesReport
Return salesReport
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. **`function countProfit(shoppers)`**
   - `shoppers` — array of object `{ name, product, amount }`
   - **return** — array of object `{ product, shoppers, leftOver, totalProfit }`

#### 🟡 Data Produk (Di Dalam Function):

2. **`const products = [['Sepatu Stacattu', 1500000, 10], ...]`**
   - Array of array — setiap item berisi `[nama, harga, stock]`

#### 🛡️ Guard Clause:

3. **`if (!shoppers.length) return []`**
   - Jika `shoppers` kosong → langsung return `[]`

#### 🗂️ Inisialisasi `salesReport`:

4. **`const salesReport = []`**
   - Array penampung hasil akhir
   - Wajib ada karena `forEach` tidak return nilai — hasil dikumpulkan manual via `push`

#### 🔄 Outer — `products.forEach(([productName, price, stock]) => { ... })`:

5. **`forEach` menggantikan outer `for...of`**
   - Destructuring `[productName, price, stock]` langsung di parameter callback
   - `forEach` tidak return nilai — hasil dikumpulkan via `salesReport.push()`

6. **`const shoppersForProduct = shoppers.filter(shopper => shopper.product === productName)`**
   - Filter semua pembeli yang membeli produk ini

7. **Inisialisasi variabel per produk:**
   - `let leftOver = stock`
   - `const buyerNames = []`
   - `let totalProfit = 0`

#### 🔄 Inner — `shoppersForProduct.forEach(({ name, amount }) => { ... })`:

8. **`forEach` menggantikan inner `for...of`**
   - Destructuring `{ name, amount }` langsung di parameter callback

9. **`if (leftOver >= amount)` — cek stock:**
   - Stock saat ini harus `>=` jumlah yang diminta

10. **Jika berhasil beli:**
    - `leftOver -= amount`
    - `buyerNames.push(name)`
    - `totalProfit += price * amount`

11. **Jika gagal beli:**
    - Tidak ada yang dilakukan

#### 🔵 Setelah Inner `forEach`:

12. **`salesReport.push({ product: productName, shoppers: buyerNames, leftOver, totalProfit })`**
    - Push object baru ke `salesReport` setiap iterasi outer `forEach`

#### 🔵 Setelah Outer `forEach`:

13. **`return salesReport`**

### **Visualisasi untuk Sepatu Stacattu (stock=10), [Windi beli 8, Vanessa beli 10]:**

```
leftOver = 10, buyerNames = [], totalProfit = 0

forEach #1 — Windi (amount=8):
  leftOver (10) >= amount (8) → ✅ BERHASIL
  leftOver  = 10 - 8 = 2
  buyerNames = ['Windi']
  totalProfit = 1.500.000 × 8 = 12.000.000

forEach #2 — Vanessa (amount=10):
  leftOver (2) >= amount (10) → ❌ GAGAL
  tidak ada perubahan

salesReport.push({
  product: 'Sepatu Stacattu',
  shoppers: ['Windi'],
  leftOver: 2,
  totalProfit: 12000000
})
```

### **Keywords:**
- 🔄 **`forEach`** — loop setiap item array, tidak return nilai
- 🗂️ **`salesReport`** — wajib ada karena `forEach` tidak return nilai secara otomatis
- 📤 **`push` manual** — memasukkan object hasil ke `salesReport` secara manual
- 🔍 **`filter`** — menyaring shoppers yang membeli produk tertentu

### **Kapan Pakai:**
- ✅ Sama seperti Versi 1, tapi prefer gaya method chaining
- ✅ Tidak butuh `break` di tengah loop
- ✅ Ingin kode yang lebih modern tapi tetap mudah dibaca

### **Pitfalls (Jebakan Umum):**

**1) ❌ Mencoba `return` nilai dari dalam `forEach`**
```javascript
// ❌ SALAH — return di dalam forEach hanya keluar dari callback,
//            bukan dari function countProfit
products.forEach(([productName, ...]) => {
  return { product: productName, ... } // tidak berguna!
})

// ✅ BENAR — gunakan push untuk kumpulkan hasil
products.forEach(([productName, ...]) => {
  salesReport.push({ product: productName, ... })
})
```

**2) ❌ Lupa deklarasi `salesReport` sebelum `forEach`**
```javascript
// ❌ SALAH — ReferenceError!
products.forEach(([productName, ...]) => {
  salesReport.push({ ... }) // salesReport belum ada!
})

// ✅ BENAR
const salesReport = []
products.forEach(([productName, ...]) => {
  salesReport.push({ ... })
})
```

**3) ❌ Pakai `forEach` tapi ingin `break` di tengah**
```javascript
// ❌ TIDAK BISA — forEach tidak support break
products.forEach(([productName, ...]) => {
  if (someCondition) break // SyntaxError!
})

// ✅ Gunakan for...of jika butuh break
for (const [productName, ...] of products) {
  if (someCondition) break
}
```

### **💡 Insight Penting:**

> **Kapan pakai `forEach` vs `for...of`?**
> Keduanya hampir identik. `forEach` lebih idiomatis dan modern. `for...of` lebih fleksibel karena mendukung `break` dan `continue`, serta bekerja pada semua iterable bukan hanya array.

> **Kenapa `forEach` tidak bisa menggantikan `map`?**
> Karena `forEach` tidak return nilai — ia hanya menjalankan callback tanpa mengumpulkan hasilnya secara otomatis. Itulah kenapa kita masih butuh `salesReport` dan `push` manual di versi ini.

---

═══════════════════════════════════════════════════════════════════════

# 🔀 VERSI 3: `map` + `reduce`

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Functional%20Style-purple?style=flat-square)
![Style](https://img.shields.io/badge/Style-Functional-9cf?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Jika shoppers kosong → return []
map setiap produk → ubah menjadi object hasil
  filter shoppers yang membeli produk ini
  reduce shoppersForProduct → akumulasi leftOver, buyerNames, totalProfit
    Jika stock cukup → return object baru dengan nilai diperbarui
    Jika tidak → return acc tanpa perubahan
  Destructure hasil reduce
  return object hasil per produk
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. **`function countProfit(shoppers)`**
   - `shoppers` — array of object `{ name, product, amount }`
   - **return** — array of object `{ product, shoppers, leftOver, totalProfit }`

#### 🟡 Data Produk (Di Dalam Function):

2. **`const products = [['Sepatu Stacattu', 1500000, 10], ...]`**
   - Array of array — setiap item berisi `[nama, harga, stock]`

#### 🛡️ Guard Clause:

3. **`if (!shoppers.length) return []`**
   - Jika `shoppers` kosong → langsung return `[]`

#### 🔄 `return products.map(([productName, price, stock]) => { ... })`:

4. **`map` menggantikan outer loop + `salesReport` + `push`**
   - `map` mengubah setiap item di `products` menjadi object hasil
   - Hasilnya langsung di-return — tidak perlu `salesReport` dan `push` manual
   - Setiap iterasi harus `return` sebuah object hasil

5. **`const shoppersForProduct = shoppers.filter(shopper => shopper.product === productName)`**
   - Filter semua pembeli yang membeli produk ini

#### ➕ `shoppersForProduct.reduce((acc, { name, amount }) => { ... }, initialValue)`:

6. **`reduce` menggantikan inner loop**
   - Mengakumulasi semua data shopper menjadi satu object `{ leftOver, buyerNames, totalProfit }`
   - `acc` — accumulator, object yang dibawa dari iterasi ke iterasi
   - `{ name, amount }` — destructuring setiap shopper

7. **Initial value: `{ leftOver: stock, buyerNames: [], totalProfit: 0 }`**
   - Nilai awal `acc` sebelum iterasi pertama dimulai
   - `leftOver: stock` — stock masih penuh di awal
   - `buyerNames: []` — belum ada pembeli
   - `totalProfit: 0` — belum ada profit

8. **`if (acc.leftOver >= amount)` — shopper berhasil beli:**
   - Return **object baru** (immutability!) dengan nilai diperbarui:
     - `leftOver: acc.leftOver - amount`
     - `buyerNames: [...acc.buyerNames, name]` — spread array lama + tambah name baru
     - `totalProfit: acc.totalProfit + (price * amount)`

9. **`return acc` — shopper gagal beli:**
   - Kembalikan `acc` tanpa perubahan apapun
   - **Wajib ada** — tanpa ini, `acc` di iterasi berikutnya akan `undefined`

10. **Destructuring hasil `reduce`:**
    ```javascript
    const { leftOver, buyerNames, totalProfit } = shoppersForProduct.reduce(...)
    ```
    - Hasil akhir `reduce` langsung di-destructure ke variabel terpisah

#### 🔵 Return object hasil per produk:

11. **`return { product: productName, shoppers: buyerNames, leftOver, totalProfit }`**
    - Nilai yang dikembalikan oleh setiap iterasi `map`
    - `map` otomatis mengumpulkan semua return value ini menjadi array

### **Visualisasi `reduce` untuk Sepatu Stacattu (stock=10), [Windi beli 8, Vanessa beli 10]:**

```
Initial value:
acc = { leftOver: 10, buyerNames: [], totalProfit: 0 }

Iterasi 1 — Windi (amount=8):
  acc.leftOver (10) >= amount (8) → ✅ BERHASIL
  return {
    leftOver: 10 - 8 = 2,
    buyerNames: [...[], 'Windi'] = ['Windi'],
    totalProfit: 0 + (1.500.000 × 8) = 12.000.000
  }

Iterasi 2 — Vanessa (amount=10):
  acc.leftOver (2) >= amount (10) → ❌ GAGAL
  return acc (tidak berubah)

Hasil reduce:
{ leftOver: 2, buyerNames: ['Windi'], totalProfit: 12000000 }
```

### **Keywords:**
- 🗺️ **`map`** — mengubah setiap item array menjadi nilai baru, hasilnya array dengan panjang sama
- ➕ **`reduce`** — mengakumulasi semua item array menjadi satu nilai
- 📦 **`acc` (accumulator)** — object yang dibawa dari iterasi ke iterasi di dalam `reduce`
- 🌱 **Initial value** — nilai awal accumulator sebelum iterasi pertama
- 🔀 **Spread `...`** — menyalin isi array lama ke array baru tanpa mutasi
- 🛡️ **Immutability** — selalu return object baru, tidak pernah mengubah `acc` langsung

### **Kapan Pakai:**
- ✅ Terbiasa dengan gaya functional programming
- ✅ Ingin menghindari deklarasi `salesReport` dan `push` manual
- ✅ Ingin kode yang ringkas dan ekspresif

### **Pitfalls (Jebakan Umum):**

**1) ❌ Mutasi `acc` langsung**
```javascript
// ❌ SALAH — mutasi langsung menyebabkan bug tak terduga
(acc, { name, amount }) => {
  if (acc.leftOver >= amount) {
    acc.leftOver -= amount       // mutasi!
    acc.buyerNames.push(name)    // mutasi!
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

**2) ❌ Lupa `return acc` saat shopper gagal**
```javascript
// ❌ SALAH — acc iterasi berikutnya jadi undefined!
(acc, { name, amount }) => {
  if (acc.leftOver >= amount) {
    return { ... }
  }
  // lupa return acc!
}

// ✅ BENAR
(acc, { name, amount }) => {
  if (acc.leftOver >= amount) {
    return { ... }
  }
  return acc // wajib!
}
```

**3) ❌ Lupa initial value di `reduce`**
```javascript
// ❌ SALAH — elemen pertama jadi acc, bukan object yang kita mau
shoppersForProduct.reduce((acc, { name, amount }) => { ... })

// ✅ BENAR
shoppersForProduct.reduce(
  (acc, { name, amount }) => { ... },
  { leftOver: stock, buyerNames: [], totalProfit: 0 } // wajib!
)
```

**4) ❌ Lupa spread operator**
```javascript
// ❌ SALAH — array nested! [[...], 'Vanessa']
buyerNames: [acc.buyerNames, name]

// ✅ BENAR — spread array lama agar flat
buyerNames: [...acc.buyerNames, name] // ['Windi', 'Vanessa']
```

### **💡 Insight Penting:**

> **Kenapa `map` cocok menggantikan outer loop?**
> Karena outer loop tujuannya mengubah setiap produk menjadi object hasil — itulah persis yang dilakukan `map`.

> **Kenapa harus return object baru di dalam `reduce`, bukan mutasi `acc`?**
> Karena functional programming mengutamakan immutability. Data tidak diubah langsung, selalu dibuat salinan baru. Ini mencegah bug yang sulit dilacak.

---

═══════════════════════════════════════════════════════════════════════

# 🔀 VERSI 4: `map` + `filter` + `reduce`

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Flexible%20Data-purple?style=flat-square)
![Style](https://img.shields.io/badge/Style-Functional-9cf?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Jika shoppers kosong → return []
map setiap produk → ubah menjadi object hasil
  filter shoppers yang membeli produk ini
  reduce shoppersForProduct → akumulasi leftOver, successfulShoppers (full object), totalProfit
    Jika stock cukup → return object baru dengan full object shopper disimpan
    Jika tidak → return acc tanpa perubahan
  Destructure hasil reduce
  map successfulShoppers → ambil hanya name
  return object hasil per produk
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. **`function countProfit(shoppers)`**
   - `shoppers` — array of object `{ name, product, amount }`
   - **return** — array of object `{ product, shoppers, leftOver, totalProfit }`

#### 🟡 Data Produk (Di Dalam Function):

2. **`const products = [['Sepatu Stacattu', 1500000, 10], ...]`**
   - Array of array — setiap item berisi `[nama, harga, stock]`

#### 🛡️ Guard Clause:

3. **`if (!shoppers.length) return []`**
   - Jika `shoppers` kosong → langsung return `[]`

#### 🔄 `return products.map(([productName, price, stock]) => { ... })`:

4. **`map` pertama — mengubah setiap produk menjadi object hasil**
   - Setiap iterasi harus `return` sebuah object hasil

5. **`const shoppersForProduct = shoppers.filter(shopper => shopper.product === productName)`**
   - Filter pertama — menyaring shoppers yang membeli produk ini

#### ➕ `shoppersForProduct.reduce(...)`:

6. **`reduce` mengakumulasi data dari setiap shopper**
   - **Initial value:** `{ leftOver: stock, successfulShoppers: [], totalProfit: 0 }`
   - Perbedaan utama dari Versi 3: `successfulShoppers` menyimpan **full object shopper**, bukan hanya `name`

7. **`if (acc.leftOver >= shopper.amount)` — shopper berhasil beli:**
   - Return **object baru** dengan:
     - `leftOver: acc.leftOver - shopper.amount`
     - `successfulShoppers: [...acc.successfulShoppers, shopper]` — simpan **full object** shopper
     - `totalProfit: acc.totalProfit + (price * shopper.amount)`

8. **`return acc` — shopper gagal beli:**
   - Kembalikan `acc` tanpa perubahan
   - **Wajib ada**

9. **Destructuring hasil `reduce`:**
   ```javascript
   const { leftOver, successfulShoppers, totalProfit } = shoppersForProduct.reduce(...)
   ```

#### 🔍 `successfulShoppers.map(shopper => shopper.name)`:

10. **`map` kedua — ambil hanya `name` dari setiap shopper**
    ```javascript
    // Sebelum map kedua:
    successfulShoppers = [{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }]
    // Setelah map kedua:
    ['Windi']
    ```

#### 🔵 Return object hasil per produk:

11. **`return { product: productName, shoppers: successfulShoppers.map(...), leftOver, totalProfit }`**

### **Visualisasi `reduce` untuk Sepatu Stacattu (stock=10), [Windi beli 8, Vanessa beli 10]:**

```
Initial value:
acc = { leftOver: 10, successfulShoppers: [], totalProfit: 0 }

Iterasi 1 — Windi (amount=8):
  acc.leftOver (10) >= amount (8) → ✅ BERHASIL
  return {
    leftOver: 2,
    successfulShoppers: [{ name:'Windi', product:'Sepatu Stacattu', amount:8 }],
    totalProfit: 12.000.000
  }

Iterasi 2 — Vanessa (amount=10):
  acc.leftOver (2) >= amount (10) → ❌ GAGAL
  return acc (tidak berubah)

Hasil reduce:
{ leftOver: 2, successfulShoppers: [{ name: 'Windi', ... }], totalProfit: 12000000 }

Setelah successfulShoppers.map(s => s.name):
['Windi']
```

### **Keywords:**
- 🗺️ **`map` pertama** — mengubah setiap produk menjadi object hasil
- 🔍 **`filter`** — menyaring shoppers yang membeli produk tertentu
- ➕ **`reduce`** — mengakumulasi data shopper yang berhasil beli (full object)
- 🗺️ **`map` kedua** — mengambil hanya `name` dari `successfulShoppers`
- 📦 **Full object** — menyimpan seluruh data shopper sebelum diambil nama-nya

### **Kapan Pakai:**
- ✅ Butuh data shopper yang lebih lengkap setelah proses reduce
- ✅ Ada kemungkinan perlu akses `amount` atau `product` dari pembeli yang berhasil
- ✅ Fleksibilitas data lebih penting dari kesederhanaan kode

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
successfulShoppers: [acc.successfulShoppers, shopper]

// ✅ BENAR — spread array lama agar flat
successfulShoppers: [...acc.successfulShoppers, shopper]
```

### **💡 Insight Penting:**

> **Apa bedanya Versi 3 dengan Versi 4?**
> Versi 3 langsung menyimpan `name` di `reduce`. Versi 4 menyimpan full object shopper terlebih dahulu, lalu baru diambil `name`-nya di akhir menggunakan `map` kedua. Versi 4 lebih fleksibel karena data shopper lengkap masih tersedia setelah `reduce`.

---

═══════════════════════════════════════════════════════════════════════

# ⚡ VERSI 5: `productMap` (Paling Optimal)

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Production%20%7C%20Optimal-red?style=flat-square)
![Style](https://img.shields.io/badge/Style-Optimized-blue?style=flat-square)
![Performance](https://img.shields.io/badge/Performance-⚡%20O(n%2Bm)-brightgreen?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

  // Step 1: buat report awal + productMap
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

  // Step 2: proses shoppers sekali
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

</details>

### **Konsep Inti:**
```
Jika shoppers kosong → return []

Step 1 — Loop products sekali (for biasa dengan index):
  Push object awal ke report (nilai default)
  Simpan { index, price } ke productMap dengan key = nama produk

Step 2 — Loop shoppers sekali (for...of):
  Lookup produk di productMap → O(1), langsung ketemu
  Jika produk tidak ada → skip (continue)
  Akses object di report via index → O(1)
  Jika stock cukup → update report langsung via referensi

Return report
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. **`function countProfit(shoppers)`**
   - `shoppers` — array of object `{ name, product, amount }`
   - **return** — array of object `{ product, shoppers, leftOver, totalProfit }`

#### 🟡 Data Produk (Di Dalam Function):

2. **`const products = [['Sepatu Stacattu', 1500000, 10], ...]`**
   - Array of array — setiap item berisi `[nama, harga, stock]`

#### 🛡️ Guard Clause:

3. **`if (!shoppers.length) return []`**
   - Jika `shoppers` kosong → langsung return `[]`

#### 🗂️ Inisialisasi:

4. **`const report = []`** — array hasil akhir yang akan di-return

5. **`const productMap = {}`** — object kosong yang akan diisi sebagai "peta" untuk lookup cepat

#### 🔄 Step 1 — `for (let i = 0; i < products.length; i++)`:

6. **Pakai `for` biasa karena butuh index `i`**
   - `for...of` tidak memberikan akses ke index secara langsung
   - `i` dibutuhkan untuk mengisi `productMap[name] = { index: i, ... }`

7. **`const [name, price, stock] = products[i]`**
   - Destructuring manual dari setiap array produk

8. **`report.push({ product: name, shoppers: [], leftOver: stock, totalProfit: 0 })`**
   - Push object awal dengan nilai default untuk setiap produk
   - `shoppers: []` — belum ada pembeli
   - `leftOver: stock` — stock masih penuh
   - `totalProfit: 0` — belum ada profit

9. **`productMap[name] = { index: i, price }`**
   - Simpan `index` (posisi di `report`) dan `price` untuk setiap produk
   - `index` dipakai di Step 2 untuk langsung akses object di `report`

   Hasil `productMap` setelah Step 1:
   ```javascript
   {
     'Sepatu Stacattu': { index: 0, price: 1500000 },
     'Baju Zoro':       { index: 1, price: 500000 },
     'Sweater Uniklooh':{ index: 2, price: 175000 }
   }
   ```

#### 🔄 Step 2 — `for (const { name, product, amount } of shoppers)`:

10. **Loop shoppers satu kali saja**
    - Berbeda dari versi lain yang loop shoppers berkali-kali (sekali per produk via `filter`)
    - Destructuring `{ name, product, amount }` dari setiap shopper

11. **`const productInfo = productMap[product]`**
    - Lookup produk di `productMap` — **O(1)**, langsung ketemu tanpa perlu loop!
    - Hasilnya `{ index, price }` atau `undefined` jika produk tidak ada di toko

12. **`if (!productInfo) continue`**
    - Jika produk tidak ada di toko → skip ke shopper berikutnya
    - `continue` melanjutkan ke iterasi berikutnya tanpa eksekusi kode di bawahnya

13. **`const item = report[productInfo.index]`**
    - Akses object produk di `report` langsung via index — **O(1)**
    - `item` adalah **referensi** ke object di `report` — perubahan pada `item` otomatis mengubah `report`

14. **`if (item.leftOver >= amount)` — shopper berhasil beli:**
    - `item.leftOver -= amount` — kurangi stock
    - `item.shoppers.push(name)` — catat nama pembeli
    - `item.totalProfit += productInfo.price * amount` — tambah profit

#### 🔵 Setelah Semua Loop:

15. **`return report`**
    - Kembalikan array yang sudah diupdate langsung via referensi

### **Visualisasi `productMap`:**

```
Setelah Step 1:

report[0] = { product: 'Sepatu Stacattu', shoppers: [], leftOver: 10, totalProfit: 0 }

productMap = {
  'Sepatu Stacattu': { index: 0, price: 1500000 }  ←──┐
  'Baju Zoro':       { index: 1, price: 500000 }       │
  'Sweater Uniklooh':{ index: 2, price: 175000 }       │
}                                                       │
                                                        │
Step 2 — Windi beli 'Sepatu Stacattu' (amount=8):       │
  productMap['Sepatu Stacattu'] ──────────────────────┘
  → { index: 0, price: 1500000 }
  → item = report[0] (referensi langsung!)
  → item.leftOver  = 10 - 8 = 2
  → item.shoppers  = ['Windi']
  → item.totalProfit = 12.000.000

report[0] sekarang:
{ product: 'Sepatu Stacattu', shoppers: ['Windi'], leftOver: 2, totalProfit: 12000000 }
```

### **Kenapa Versi Ini Paling Optimal:**

```
Semua versi lain — nested loop:
  Untuk setiap produk (n kali):
    filter/loop semua shoppers (m kali)
  → Total: n × m operasi = O(n × m)

Versi productMap — 2 loop terpisah:
  Loop 1: products (n kali) → buat report + productMap
  Loop 2: shoppers (m kali) → lookup O(1) per shopper
  → Total: n + m operasi = O(n + m)

Contoh nyata:
  100 produk, 10.000 shoppers
  O(n × m) = 100 × 10.000 = 1.000.000 operasi
  O(n + m) = 100 + 10.000 =    10.100 operasi
  → productMap ~99x lebih cepat!
```

### **Keywords:**
- 🗺️ **`productMap`** — object untuk lookup produk secara cepat O(1)
- 📍 **`index`** — posisi produk di `report`, dipakai untuk akses langsung
- ⏭️ **`continue`** — skip iterasi saat produk tidak ditemukan
- 🔗 **Referensi** — `item` adalah referensi ke object di `report`, bukan copy
- ⚡ **O(1) lookup** — akses data via key object, tidak perlu loop
- 📊 **O(n + m)** — 2 loop terpisah, jauh lebih efisien dari O(n × m)

### **Kapan Pakai:**
- ✅ Data produk dan shoppers sangat besar (ribuan/jutaan)
- ✅ Performance adalah prioritas utama
- ✅ Familiar dengan konsep lookup table / hash map

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa bahwa `item` adalah referensi**
```javascript
// item adalah REFERENSI ke object di report ✅
const item = report[productInfo.index]
item.leftOver -= amount // report ikut berubah ✅

// ❌ Jangan buat copy dengan spread — report tidak akan berubah!
const item = { ...report[productInfo.index] }
item.leftOver -= amount // report TIDAK berubah!
```

**2) ❌ Lupa handle produk yang tidak ada**
```javascript
// ❌ SALAH — TypeError jika productInfo = undefined
const productInfo = productMap[product]
const item = report[productInfo.index] // crash!

// ✅ BENAR — cek dulu sebelum akses
const productInfo = productMap[product]
if (!productInfo) continue
const item = report[productInfo.index]
```

**3) ❌ Pakai `for...of` di Step 1 saat butuh index**
```javascript
// ❌ KURANG TEPAT — tidak ada akses ke index
for (const [name, price, stock] of products) {
  productMap[name] = { index: ???, price }
}

// ✅ BENAR — pakai for biasa agar punya index i
for (let i = 0; i < products.length; i++) {
  const [name, price, stock] = products[i]
  productMap[name] = { index: i, price }
}
```

### **💡 Insight Penting:**

> **Kenapa versi ini lebih efisien dari versi lain?**
> Semua versi sebelumnya pakai nested loop — untuk setiap produk, loop semua shoppers. Ini O(n × m). Versi ini memisahkan 2 loop: pertama buat `productMap`, lalu loop shoppers sekali dan akses produk via `productMap` di O(1). Total jadi O(n + m).

> **Kenapa `item` bisa langsung mengubah `report`?**
> Karena `item` menyimpan referensi ke object di `report`, bukan copy-nya. Konsep pass by reference yang sebelumnya jadi sumber bug — di versi ini justru **dimanfaatkan dengan sengaja** untuk efisiensi!

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES LENGKAP

═══════════════════════════════════════════════════════════════════════

```javascript
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
]

testCases.forEach(({ input, expected, desc }, index) => {
  const result = countProfit(input)
  const isEqual = JSON.stringify(result) === JSON.stringify(expected)
  const status = isEqual ? '✅ PASS' : '❌ FAIL'

  console.log(`Test Case #${index + 1}: ${status} - ${desc}`)

  if (!isEqual) {
    console.log('Expected:', JSON.stringify(expected, null, 2))
    console.log('Result  :', JSON.stringify(result, null, 2))
  }
})
```

**Output yang diharapkan:**
```
Test Case #1: ✅ PASS - Edge case — input kosong
Test Case #2: ✅ PASS - Normal case 1 — Rani batal beli karena stock kurang
Test Case #3: ✅ PASS - Normal case 2 — Vanessa batal beli karena stock habis setelah Windi beli
Test Case #4: ✅ PASS - Normal case 3 — produk tidak ada di toko
```

---

═══════════════════════════════════════════════════════════════════════

# 📊 PERBANDINGAN LENGKAP

═══════════════════════════════════════════════════════════════════════

| Aspek | ✅ Refactored | 🔄 forEach | 🔀 map+reduce | 🔀 map+filter+reduce | ⚡ productMap |
|-------|:------------:|:----------:|:-------------:|:--------------------:|:------------:|
| Outer loop | `for...of` | `forEach` | `map` | `map` | `for` biasa |
| Inner loop | `for...of` | `forEach` | `reduce` | `reduce` | `for...of` |
| Butuh `salesReport` | ✅ Ya | ✅ Ya | ❌ Tidak | ❌ Tidak | ✅ Ya |
| Butuh `push` manual | ✅ Ya | ✅ Ya | ❌ Tidak | ❌ Tidak | ✅ Ya |
| Simpan di akumulator | `name` | `name` | `name` | Full object | Via referensi |
| Jumlah loop shoppers | n kali (filter) | n kali (filter) | n kali (filter) | n kali (filter) | **1 kali** |
| Lookup produk | `filter` O(n) | `filter` O(n) | `filter` O(n) | `filter` O(n) | **O(1)** |
| Kompleksitas waktu | O(n × m) | O(n × m) | O(n × m) | O(n × m) | **O(n + m)** |
| Kompleksitas memori | O(n) | O(n) | O(n) | O(n + m) | O(n) |
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Untuk pemula | ✅ Sangat cocok | ✅ Sangat cocok | ⚠️ Butuh pemahaman | ⚠️ Butuh pemahaman | ⚠️ Butuh O(1) |

---

## 🎯 Decision Tree

```
Prioritas utama kamu apa?
│
├── READABILITY / BELAJAR
│   │
│   ├── Prefer gaya method? ──▶ 🔄 forEach
│   │                            (modern, tapi tetap mudah dibaca)
│   │
│   └── Prefer loop biasa?  ──▶ ✅ Refactored for...of
│                                (paling mudah dibaca & debug)
│
├── FUNCTIONAL PROGRAMMING STYLE
│   │
│   ├── Butuh data shopper lengkap? ──▶ 🔀 map + filter + reduce
│   │                                    (successfulShoppers = full object)
│   │
│   └── Cukup nama pembeli saja?   ──▶ 🔀 map + reduce
│                                        (lebih sederhana, langsung simpan name)
│
└── PERFORMA OPTIMAL (data besar)  ──▶ ⚡ productMap
                                        (O(n + m), lookup O(1))

Default: ✅ Refactored for...of — paling mudah dibaca dan di-debug ✅
```

---

## 🔑 Key Takeaways

```
┌─────────────────────────────────────────────────────────────────────┐
│  💡 Semua Solusi Menghasilkan Output yang Sama                      │
│     Perbedaan hanya pada pendekatan, gaya, dan performa             │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Guard Clause Wajib Ada                                          │
│     if (!shoppers.length) return [] — tanpa ini output salah        │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Pass by Reference                                               │
│     Bisa jadi bug (Versi 1-4) atau senjata (Versi 5 productMap)    │
├─────────────────────────────────────────────────────────────────────┤
│  💡 O(n × m) vs O(n + m)                                            │
│     Semua versi kecuali productMap pakai O(n × m)                   │
│     productMap jauh lebih efisien untuk data besar                  │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Pilih Sesuai Konteks                                            │
│     Belajar → Refactored | Modern → forEach                         │
│     Functional → map+reduce | Fleksibel → map+filter+reduce         │
│     Performa → productMap                                           │
└─────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

## 🎯 Quick Reference Card

| Versi | Highlight |
|-------|-----------|
| ✅ **Refactored** | `for...of products` → `filter` → `for...of shoppers` → `push` |
| 🔄 **forEach** | `products.forEach` → `filter` → `shoppersForProduct.forEach` → `push` |
| 🔀 **map + reduce** | `products.map` → `filter` → `reduce(acc, initial)` → destructure → `return` |
| 🔀 **map + filter + reduce** | `products.map` → `filter` → `reduce(full obj, initial)` → `map` nama → `return` |
| ⚡ **productMap** | Loop 1: buat `report` + `productMap` | Loop 2: lookup O(1) → update via referensi |

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
