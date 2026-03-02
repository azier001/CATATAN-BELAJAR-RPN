# 📋 shoppingTime — Ringkasan Algoritma Semua Versi

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          📋 RINGKASAN ALGORITMA — COMPLETE REFERENCE 📋                 ║
║            for...of · reduce · AI Improved                               ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Versi](https://img.shields.io/badge/Versi-3%20Solusi-success?style=for-the-badge)

---

## 🎯 Tujuan

- ✅ Ringkasan challenge dan kriteria dalam satu tempat
- ✅ Ringkasan algoritma semua versi secara detail
- ✅ Quick reference untuk review atau ujian

---

## 🧭 Quick Jump

| 🧩 Challenge | ✅ Versi 1 | 🔀 Versi 2 | 🤖 Versi 3 | 🧪 Test Cases | 📊 Perbandingan |
|:------------:|:---------:|:---------:|:---------:|:-------------:|:---------------:|
| [Jump](#-deskripsi-challenge) | [Jump](#-versi-1-forof-kode-final) | [Jump](#-versi-2-reduce) | [Jump](#-versi-3-ai-improved) | [Jump](#-test-cases-lengkap) | [Jump](#-perbandingan-lengkap) |

---

# 🧩 DESKRIPSI CHALLENGE

## 📋 Soal

> ### 📋 Deskripsi
>
> Diberikan sebuah function **`shoppingTime(memberId, money)`** yang menerima dua parameter:
>
> | Parameter | Tipe | Keterangan |
> |-----------|------|------------|
> | `memberId` | `string` | ID member yang berbelanja |
> | `money` | `number` | Jumlah uang yang dibawa |
>
> **Toko X sedang melakukan SALE untuk beberapa barang:**
>
> | No | Produk | Harga |
> |----|--------|-------|
> | 1 | 🥿 Sepatu brand Stacattu | Rp 1.500.000 |
> | 2 | 👕 Baju brand Zoro | Rp 500.000 |
> | 3 | 👕 Baju brand H&N | Rp 250.000 |
> | 4 | 🧥 Sweater brand Uniklooh | Rp 175.000 |
> | 5 | 📱 Casing Handphone | Rp 50.000 |
>
> Buatlah function yang mengembalikan object berisikan: **`memberId`**, **`money`**, **`listPurchased`**, dan **`changeMoney`**

---

## 🔍 Kriteria

> **1.** Jika `memberId` kosong
> → tampilkan `"Mohon maaf, toko X hanya berlaku untuk member saja"`
>
> **2.** Jika uang yang dimiliki kurang dari Rp 50.000
> → tampilkan `"Mohon maaf, uang tidak cukup"`
>
> **3.** Member akan membeli barang yang **paling mahal terlebih dahulu** dan akan membeli barang-barang yang sedang SALE **masing-masing 1** jika uang yang dimilikinya masih cukup

---

## 📊 Contoh-contoh

### Output yang Diharapkan

```javascript
// ✅ Normal case — cukup untuk 2 barang
console.log(shoppingTime('324193hDew2', 700000))
// → { memberId: '324193hDew2', money: 700000,
//     listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }

// ✅ Normal case — cukup untuk semua barang
console.log(shoppingTime('1820RzKrnWn08', 2475000))
// → { memberId: '1820RzKrnWn08', money: 2475000,
//     listPurchased: ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'],
//     changeMoney: 0 }

// ❌ memberId kosong
console.log(shoppingTime('', 700000))
// → 'Mohon maaf, toko X hanya berlaku untuk member saja'

// ❌ Uang tidak cukup
console.log(shoppingTime('324193hDew2', 15000))
// → 'Mohon maaf, uang tidak cukup'
```

---

### Simulasi Pembelian: `money: 700000`

```
Uang awal: Rp 700.000

Urutan pembelian (termahal dulu):
1. Sepatu Stacattu   Rp 1.500.000  →  700.000 < 1.500.000  ❌ skip
2. Baju Zoro         Rp   500.000  →  700.000 ≥   500.000  ✅ beli → sisa = 200.000
3. Baju H&N          Rp   250.000  →  200.000 < 250.000    ❌ skip
4. Sweater Uniklooh  Rp   175.000  →  200.000 ≥ 175.000    ✅ beli → sisa = 25.000
5. Casing Handphone  Rp    50.000  →   25.000 < 50.000     ❌ skip

listPurchased = ['Baju Zoro', 'Sweater Uniklooh']
changeMoney   = 25.000
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Parameter 1 | `memberId` — string, wajib diisi |
| Parameter 2 | `money` — number, minimal Rp 50.000 |
| Urutan beli | Dari barang **termahal** ke **termurah** |
| Jumlah beli | Masing-masing barang **1 saja** |
| Kondisi beli | Hanya jika **uang masih cukup** |
| Return (sukses) | Object `{ memberId, money, listPurchased, changeMoney }` |
| Return (gagal) | String pesan error |

---

> 💡 **Aturan Sederhana:** Sort produk descending by price → loop dan beli jika `changeMoney >= price` → skip jika tidak. Ini adalah **Greedy Algorithm** — selalu pilih yang termahal yang masih terjangkau.

---

## ⚡ Quick Test — Tulis Fungsinya Sendiri Dulu, Lalu Test Satu per Satu!

> 💡 Tulis function `shoppingTime` kamu sendiri terlebih dahulu, baru paste test di bawah ini satu per satu untuk ngecek hasilnya.

```javascript
// Test 1 — Contoh dari soal
console.log(shoppingTime('324193hDew2', 700000))
// { memberId: '324193hDew2', money: 700000, listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }
```

```javascript
// Test 2 — Uang cukup untuk semua barang
console.log(shoppingTime('1820RzKrnWn08', 2475000))
// { memberId: '1820RzKrnWn08', money: 2475000, listPurchased: ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'], changeMoney: 0 }
```

```javascript
// Test 3 — Uang cukup untuk 1 barang termurah
console.log(shoppingTime('82Ku8Ma742', 170000))
// { memberId: '82Ku8Ma742', money: 170000, listPurchased: ['Casing Handphone'], changeMoney: 120000 }
```

```javascript
// Test 4 — Edge case: memberId kosong
console.log(shoppingTime('', 2475000))
// 'Mohon maaf, toko X hanya berlaku untuk member saja'
```

```javascript
// Test 5 — Edge case: memberId undefined
console.log(shoppingTime(undefined, 100000))
// 'Mohon maaf, toko X hanya berlaku untuk member saja'
```

```javascript
// Test 6 — Edge case: uang tidak cukup
console.log(shoppingTime('234JdhweRxa53', 15000))
// 'Mohon maaf, uang tidak cukup'
```

---

═══════════════════════════════════════════════════════════════════════

# ✅ VERSI 1: `for...of` (KODE FINAL)

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Pemula%20%7C%20Readable-green?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative-orange?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Definisikan products sebagai konstanta di luar function
Validasi memberId → jika kosong/undefined, return pesan error
Validasi money → jika < 50000, return pesan error
Ubah object products menjadi array of entries lalu sort descending
Loop setiap produk dengan for...of + destructuring:
  Jika uang cukup → beli produk, kurangi changeMoney, tambah ke listPurchased
  Jika tidak → skip
Return object hasil belanja
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function shoppingTime(memberId, money)`
   - `memberId` — string ID member yang berbelanja
   - `money` — number jumlah uang yang dibawa
   - **return** — string pesan error, atau object `{ memberId, money, listPurchased, changeMoney }`

#### 🟡 Data Produk (Di Luar Function):

2. **`const products = { ... }`**
   - Didefinisikan **di luar function** — konstanta, tidak perlu dibuat ulang setiap pemanggilan
   - Jika konteks soal mengharuskan semua kode di dalam function, boleh dipindah ke dalam

#### 🔴 Validasi Awal (Guard Clause):

3. **`if (!memberId) return '...'`**
   - Menangkap `''`, `undefined`, `null`, `0` — semua nilai falsy

4. **`if (money < 50000) return '...'`**
   - Harga minimum produk adalah 50000 (Casing Handphone)

#### 🔄 Persiapan Data:

5. **`const productEntries = Object.entries(products)`**
   - Mengubah object menjadi array of `[nama, harga]`

6. **`const sortedByPrice = productEntries.sort((a, b) => b[1] - a[1])`**
   - Sort **descending** — produk termahal di posisi pertama

#### 🔄 Di Dalam Loop `for (const [productName, price] of sortedByPrice)`:

7. **Destructuring `[productName, price]`**
   - Langsung ambil nama dan harga tanpa index manual

8. **`if (changeMoney >= price)`**
   - Beli jika cukup → kurangi `changeMoney`, push ke `listPurchased`
   - Skip jika tidak

#### 🔵 Di Luar Loop:

9. **`return { memberId, money, listPurchased, changeMoney }`**
   - **Shorthand property** — `money` tetap nilai awal, `changeMoney` adalah sisa uang

### **Visualisasi untuk `money: 700000`:**
```
sortedByPrice: ['Sepatu Stacattu',1500000] ['Baju Zoro',500000]
               ['Baju H&N',250000] ['Sweater Uniklooh',175000] ['Casing Handphone',50000]

changeMoney = 700000

iter 1: 'Sepatu Stacattu' → 700000 < 1500000 ❌ skip
iter 2: 'Baju Zoro'       → 700000 >= 500000 ✅ beli → changeMoney = 200000
iter 3: 'Baju H&N'        → 200000 < 250000  ❌ skip
iter 4: 'Sweater Uniklooh'→ 200000 >= 175000 ✅ beli → changeMoney = 25000
iter 5: 'Casing Handphone'→ 25000  < 50000   ❌ skip

listPurchased = ['Baju Zoro', 'Sweater Uniklooh']
changeMoney   = 25000
```

### **Keywords:**
- 🛡️ **Guard Clause** — keluar lebih awal jika kondisi tidak valid
- 📦 **`Object.entries()`** — mengubah object menjadi array of `[key, value]`
- 🔽 **Descending Sort** — `b[1] - a[1]`
- 🔀 **Destructuring** — `[productName, price]` langsung ambil nilai
- ⚡ **Greedy** — selalu beli produk termahal yang masih terjangkau

### **Kapan Pakai:**
- ✅ Belajar dan debugging
- ✅ Butuh kode yang paling mudah dibaca
- ✅ Ketika readability adalah prioritas utama

### **Pitfalls (Jebakan Umum):**

**1) ❌ Sort ascending instead of descending**
```javascript
// ❌ SALAH — beli termurah dulu
productEntries.sort((a, b) => a[1] - b[1])

// ✅ BENAR — beli termahal dulu
productEntries.sort((a, b) => b[1] - a[1])
```

**2) ❌ Lupa `[1]` saat sorting**
```javascript
// ❌ SALAH — sort array-nya langsung, bukan harganya
productEntries.sort((a, b) => b - a)

// ✅ BENAR — sort berdasarkan harga di index ke-1
productEntries.sort((a, b) => b[1] - a[1])
```

**3) ❌ Mengurangi `money` langsung**
```javascript
// ❌ SALAH — money di return akan berubah
money -= price

// ✅ BENAR — money tetap nilai awal, changeMoney yang berkurang
changeMoney -= price
```

### **💡 Insight Penting:**

> **Kenapa ini disebut Greedy Algorithm?**
> Karena di setiap langkah kita selalu memilih produk termahal yang masih bisa dibeli, tanpa mempertimbangkan kombinasi lain.

> **Kenapa `Object.entries()` dan bukan langsung loop object?**
> Karena `Object.entries()` menghasilkan array yang bisa di-sort. Object biasa tidak bisa di-sort secara langsung.

---

═══════════════════════════════════════════════════════════════════════

# 🔀 VERSI 2: `reduce`

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Functional%20Style-purple?style=flat-square)
![Style](https://img.shields.io/badge/Style-Functional-9cf?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Definisikan products sebagai konstanta di luar function
Validasi memberId → jika kosong/undefined, return pesan error
Validasi money → jika < 50000, return pesan error
Ubah object products menjadi array of entries, langsung di-chain sort
Reduce array dengan initial value { listPurchased: [], changeMoney: money }:
  Setiap iterasi: jika uang cukup → beli, kurangi acc.changeMoney, push ke acc.listPurchased
  Wajib return acc di setiap iterasi
Destructure hasil reduce → listPurchased, changeMoney
Return object hasil belanja
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function shoppingTime(memberId, money)`
   - `memberId` — string ID member yang berbelanja
   - `money` — number jumlah uang yang dibawa
   - **return** — string pesan error, atau object `{ memberId, money, listPurchased, changeMoney }`

#### 🟡 Data Produk (Di Luar Function):

2. **`const products = { ... }`**
   - Didefinisikan **di luar function** — konstanta, tidak perlu dibuat ulang setiap pemanggilan

#### 🔴 Validasi Awal (Guard Clause):

3. **`if (!memberId) return '...'`**
   - Menangkap `''`, `undefined`, `null`, `0` — semua nilai falsy

4. **`if (money < 50000) return '...'`**
   - Harga minimum produk adalah 50000

#### 🔄 Persiapan Data:

5. **`const sortedByPrice = Object.entries(products).sort((a, b) => b[1] - a[1])`**
   - `Object.entries()` dan `.sort()` langsung di-chain — lebih ringkas
   - Sort **descending** berdasarkan harga

#### 🔄 `.reduce()`:

6. **Initial value `{ listPurchased: [], changeMoney: money }`**
   - Nilai awal `acc` sebelum iterasi pertama
   - `listPurchased: []` — belum ada barang yang dibeli
   - `changeMoney: money` — uang masih penuh

7. **`(acc, [productName, price]) => { ... }`**
   - `acc` — **accumulator**, menampung hasil yang terus diperbarui setiap iterasi
   - `[productName, price]` — destructuring langsung dari setiap entry

8. **`if (acc.changeMoney >= price)`**
   - Beli jika cukup → kurangi `acc.changeMoney`, push ke `acc.listPurchased`

9. **`return acc`**
   - **Wajib** — mengembalikan accumulator ke iterasi berikutnya

#### 🔵 Destructuring Hasil Reduce:

10. **`const { listPurchased, changeMoney } = sortedByPrice.reduce(...)`**
    - Hasil akhir `reduce` langsung di-destructure

#### 🔵 Di Luar Reduce:

11. **`return { memberId, money, listPurchased, changeMoney }`**
    - `money` adalah nilai awal, `changeMoney` adalah sisa uang

### **Visualisasi untuk `money: 700000`:**
```
Initial acc: { listPurchased: [], changeMoney: 700000 }

iter 1: 'Sepatu Stacattu' → 700000 < 1500000 ❌ skip
         acc = { listPurchased: [], changeMoney: 700000 }
iter 2: 'Baju Zoro' → 700000 >= 500000 ✅ beli
         acc = { listPurchased: ['Baju Zoro'], changeMoney: 200000 }
iter 3: 'Baju H&N' → 200000 < 250000 ❌ skip
         acc = { listPurchased: ['Baju Zoro'], changeMoney: 200000 }
iter 4: 'Sweater Uniklooh' → 200000 >= 175000 ✅ beli
         acc = { listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }
iter 5: 'Casing Handphone' → 25000 < 50000 ❌ skip
         acc = { listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }

Hasil reduce: { listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }
```

### **Keywords:**
- 🔁 **`reduce`** — mengakumulasi hasil iterasi ke dalam satu nilai akhir
- 📥 **Accumulator (`acc`)** — penampung hasil yang terus diperbarui setiap iterasi
- 🔀 **Destructuring** — `{ listPurchased, changeMoney }` langsung ambil dari hasil reduce

### **Kapan Pakai:**
- ✅ Terbiasa dengan gaya **functional programming**
- ✅ Ingin menghindari deklarasi variabel `let` yang mutable
- ✅ State pembelian ingin digabung dalam satu object (`acc`)

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa `return acc`**
```javascript
// ❌ SALAH — iterasi berikutnya acc = undefined
sortedByPrice.reduce((acc, [productName, price]) => {
  if (acc.changeMoney >= price) { ... }
  // lupa return acc!
}, { listPurchased: [], changeMoney: money })

// ✅ BENAR
sortedByPrice.reduce((acc, [productName, price]) => {
  if (acc.changeMoney >= price) { ... }
  return acc
}, { listPurchased: [], changeMoney: money })
```

**2) ❌ Tidak memberikan initial value**
```javascript
// ❌ SALAH — acc jadi elemen pertama array, bukan object
sortedByPrice.reduce((acc, [productName, price]) => { ... })

// ✅ BENAR
sortedByPrice.reduce((acc, [productName, price]) => { ... },
  { listPurchased: [], changeMoney: money }
)
```

### **💡 Insight Penting:**

> **Kapan pilih `reduce` vs `for...of`?**
> Pilih `for...of` jika tim belum familiar dengan `reduce`. Pilih `reduce` jika terbiasa dengan gaya **functional programming** dan ingin menghindari variabel `let` yang mutable.

> **Kenapa `return acc` wajib?**
> Karena `reduce` menggunakan nilai return dari setiap iterasi sebagai `acc` di iterasi berikutnya. Tanpa `return acc`, iterasi berikutnya menerima `undefined`.

---

═══════════════════════════════════════════════════════════════════════

# 🤖 VERSI 3: AI IMPROVED

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Production%20%7C%20Optimal-red?style=flat-square)
![Style](https://img.shields.io/badge/Style-Optimized-blue?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Definisikan MIN_PRICE sebagai konstanta harga minimum
Definisikan products sebagai array of objects di luar function
Sort products sekali saja di luar function (spread dulu agar original aman)
Validasi memberId → jika kosong/undefined, return pesan error
Validasi money → jika < MIN_PRICE, return pesan error
Loop setiap produk:
  Jika uang cukup → beli, kurangi changeMoney, tambah ke listPurchased
  Jika changeMoney < MIN_PRICE → early break (tidak mungkin beli apapun)
Return object hasil belanja
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function shoppingTime(memberId, money)`
   - `memberId` — string ID member yang berbelanja
   - `money` — number jumlah uang yang dibawa
   - **return** — string pesan error, atau object `{ memberId, money, listPurchased, changeMoney }`

#### 🟡 Konstanta & Data (Di Luar Function):

2. **`const MIN_PRICE = 50000`**
   - Harga produk termurah — dipakai di **2 tempat** secara konsisten
   - Menghindari **magic number** — jika harga minimum berubah, cukup update 1 tempat

3. **`const products = [...]`**
   - Struktur **array of objects** — akses via `product.name`, `product.price`
   - Lebih deskriptif dari object key-value biasa

4. **`const sortedByPrice = [...products].sort((a, b) => b.price - a.price)`**
   - **Spread `[...products]`** — array original tidak termutasi
   - Sort **sekali di luar function** — tidak perlu sort ulang setiap pemanggilan

#### 🔴 Validasi Awal (Guard Clause):

5. **`if (!memberId) return '...'`**
   - Menangkap `''`, `undefined`, `null`, `0` — semua nilai falsy

6. **`if (money < MIN_PRICE) return '...'`**
   - Menggunakan konstanta `MIN_PRICE` — konsisten, tidak hardcode angka

#### 🔄 Di Dalam Loop `for (const { name, price } of sortedByPrice)`:

7. **Destructuring `{ name, price }`**
   - Langsung ambil properti dari setiap object produk

8. **`if (changeMoney >= price)`**
   - Beli jika cukup → kurangi `changeMoney`, push `name` ke `listPurchased`

9. **`if (changeMoney < MIN_PRICE) break`**
   - **Early break** — jika sisa uang sudah kurang dari harga produk termurah, stop loop
   - Lebih optimal dari `=== 0` karena cover semua kasus uang tidak cukup

#### 🔵 Di Luar Loop:

10. **`return { memberId, money, listPurchased, changeMoney }`**
    - `money` adalah nilai awal, `changeMoney` adalah sisa uang

### **Visualisasi untuk `money: 700000`:**
```
MIN_PRICE = 50000

sortedByPrice (sort sekali di luar function):
{ name: 'Sepatu Stacattu', price: 1500000 }
{ name: 'Baju Zoro',        price: 500000 }
{ name: 'Baju H&N',         price: 250000 }
{ name: 'Sweater Uniklooh', price: 175000 }
{ name: 'Casing Handphone', price:  50000 }

changeMoney = 700000

iter 1: 'Sepatu Stacattu' → 700000 < 1500000 ❌ skip | 700000 >= MIN_PRICE → lanjut
iter 2: 'Baju Zoro'       → 700000 >= 500000 ✅ beli → changeMoney = 200000 >= MIN_PRICE → lanjut
iter 3: 'Baju H&N'        → 200000 < 250000  ❌ skip | 200000 >= MIN_PRICE → lanjut
iter 4: 'Sweater Uniklooh'→ 200000 >= 175000 ✅ beli → changeMoney = 25000 < MIN_PRICE → 🛑 BREAK

listPurchased = ['Baju Zoro', 'Sweater Uniklooh']
changeMoney   = 25000
```

### **Keywords:**
- 🔢 **Magic Number** — angka tanpa konteks yang sebaiknya diganti konstanta bernama
- 📋 **Array of Objects** — struktur data lebih deskriptif dari object key-value
- 🛡️ **Spread `[...arr]`** — copy array sebelum sort agar original tidak termutasi
- ⚡ **Early Break** — keluar dari loop lebih awal jika kondisi terpenuhi

### **Kapan Pakai:**
- ✅ Ingin struktur data yang lebih deskriptif
- ✅ Ingin performa optimal — sort sekali + early break
- ✅ Ingin kode mudah di-maintain — tidak ada magic number

### **Pitfalls (Jebakan Umum):**

**1) ❌ Sort tanpa spread — array original termutasi**
```javascript
// ❌ BERBAHAYA — products asli ikut berubah urutannya
const sortedByPrice = products.sort((a, b) => b.price - a.price)

// ✅ AMAN — copy dulu sebelum sort
const sortedByPrice = [...products].sort((a, b) => b.price - a.price)
```

**2) ❌ Early break dengan `=== 0`**
```javascript
// ❌ KURANG OPTIMAL — hanya stop jika uang habis persis 0
if (changeMoney === 0) break

// ✅ LEBIH OPTIMAL — stop jika uang tidak cukup untuk produk manapun
if (changeMoney < MIN_PRICE) break
```

**3) ❌ Hardcode magic number**
```javascript
// ❌ KURANG READABLE — 50000 muncul tanpa konteks
if (money < 50000) return '...'
if (changeMoney < 50000) break

// ✅ LEBIH READABLE
const MIN_PRICE = 50000
if (money < MIN_PRICE) return '...'
if (changeMoney < MIN_PRICE) break
```

### **💡 Insight Penting:**

> **Kenapa sort di luar function lebih efisien?**
> Karena data produk tidak pernah berubah. Jika sort di dalam function, setiap pemanggilan akan sort ulang yang tidak perlu.

> **Kenapa spread `[...products]` penting?**
> Karena `.sort()` **mutate array aslinya**. Tanpa spread, urutan array `products` original akan berubah setelah sort — bisa menyebabkan bug yang sulit dilacak.

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES LENGKAP

═══════════════════════════════════════════════════════════════════════

```javascript
const testCases = [
  // Edge cases - no member
  { input: { memberId: '', money: 2475000 }, expected: 'Mohon maaf, toko X hanya berlaku untuk member saja', desc: 'MemberId kosong' },
  { input: { memberId: undefined, money: 100000 }, expected: 'Mohon maaf, toko X hanya berlaku untuk member saja', desc: 'MemberId undefined' },

  // Edge case - insufficient money
  { input: { memberId: '234JdhweRxa53', money: 15000 }, expected: 'Mohon maaf, uang tidak cukup', desc: 'Uang kurang dari minimum' },

  // Normal cases
  { input: { memberId: '1820RzKrnWn08', money: 2475000 }, expected: { memberId: '1820RzKrnWn08', money: 2475000, listPurchased: ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'], changeMoney: 0 }, desc: 'Uang cukup untuk semua barang' },
  { input: { memberId: '82Ku8Ma742', money: 170000 }, expected: { memberId: '82Ku8Ma742', money: 170000, listPurchased: ['Casing Handphone'], changeMoney: 120000 }, desc: 'Uang cukup untuk 1 barang termurah' },
  { input: { memberId: '324193hDew2', money: 700000 }, expected: { memberId: '324193hDew2', money: 700000, listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }, desc: 'Contoh dari soal' },
]

// Run tests
testCases.forEach(({ input, expected, desc }, index) => {
  const result = shoppingTime(input?.memberId, input?.money)
  const isEqual = JSON.stringify(result) === JSON.stringify(expected)
  const status = isEqual ? '✅ PASS' : '❌ FAIL'

  console.log(`Test Case #${index + 1}: ${status} - ${desc}`)

  if (!isEqual) {
    console.log('Expected:', expected)
    console.log('Result  :', result)
  }
})
```

**Output yang diharapkan:**
```
Test Case #1: ✅ PASS - MemberId kosong
Test Case #2: ✅ PASS - MemberId undefined
Test Case #3: ✅ PASS - Uang kurang dari minimum
Test Case #4: ✅ PASS - Uang cukup untuk semua barang
Test Case #5: ✅ PASS - Uang cukup untuk 1 barang termurah
Test Case #6: ✅ PASS - Contoh dari soal
```

---

═══════════════════════════════════════════════════════════════════════

# 📊 PERBANDINGAN LENGKAP

═══════════════════════════════════════════════════════════════════════

| Aspek | ✅ `for...of` | 🔀 `reduce` | 🤖 AI Improved |
|-------|:------------:|:-----------:|:--------------:|
| Struktur data | Object `{}` | Object `{}` | Array of objects `[]` |
| Loop | `for...of` | `reduce` | `for...of` |
| Sort | Tiap pemanggilan | Tiap pemanggilan | Sekali di luar ✅ |
| Spread sebelum sort | ❌ | ❌ | ✅ |
| Magic number | ⚠️ | ⚠️ | ✅ `MIN_PRICE` |
| Early break | ❌ | ❌ | ✅ `< MIN_PRICE` |
| Kompleksitas waktu | O(n log n) | O(n log n) | O(n log n) |
| Kompleksitas memori | O(n) | O(n) | O(n) |
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Direkomendasikan | ✅ | ✅ | ✅ |

---

## 🎯 Decision Tree

```
Prioritas utama kamu apa?
│
├── READABILITY ──▶ Familiar dengan functional programming?
│                   │
│                   ├── YA  ──▶ 🔀 reduce
│                   │            (ekspresif, tanpa variabel let)
│                   │
│                   └── TIDAK ──▶ ✅ for...of
│                                  (paling mudah dibaca & debug)
│
└── PERFORMA & MAINTAINABILITY ──▶ 🤖 AI Improved
                                    (sort sekali, MIN_PRICE, early break)


Default: ✅ for...of — paling mudah dibaca dan di-debug ✅
```

---

## 🔑 Key Takeaways

```
┌─────────────────────────────────────────────────────────────────────┐
│  💡 Semua Solusi Menghasilkan Output yang Sama                      │
│     Perbedaan hanya pada pendekatan dan optimasi                    │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Greedy Algorithm                                                │
│     Selalu beli termahal dulu — sederhana tapi efektif              │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Guard Clause                                                    │
│     Validasi di awal function — kode lebih bersih dan readable      │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Pilih Sesuai Konteks                                            │
│     Belajar → for...of | Functional → reduce | Optimal → AI        │
└─────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

## 🎯 Quick Reference Card

| Versi | Highlight |
|-------|-----------|
| ✅ **`for...of`** | `Object.entries()` → sort → `for...of` + destructuring → return object |
| 🔀 **`reduce`** | `Object.entries()` → sort → `.reduce(acc, initial)` → destructure hasil → return object |
| 🤖 **AI Improved** | `MIN_PRICE` + array of objects + sort sekali + `for...of` + early break |

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
