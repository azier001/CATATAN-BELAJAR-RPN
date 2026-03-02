# 📚 shoppingTime - PART 6: ANALISIS KODE AI + VERSI IMPROVED + RINGKASAN ALGORITMA

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   🤖 PART 6: ANALISIS KODE AI + VERSI IMPROVED + RINGKASAN ALGORITMA 🤖 ║
║                                                                          ║
║              Evaluasi, Perbaikan, dan Cara Kerjanya                      ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🤖 Kode AI | 🔍 Analisis | 🔧 Versi Improved | 🧪 Test Cases | 📖 Ringkasan Algoritma |
|:----------:|:-----------:|:-----------------:|:-------------:|:----------------------:|
| [Jump](#-kode-dari-ai) | [Jump](#-analisis) | [Jump](#-versi-improved) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Bisa menganalisis dan mengevaluasi kode dari sumber lain
- ✅ Tahu konsep magic number dan cara mengatasinya
- ✅ Memahami pentingnya spread `[...arr]` sebelum sort
- ✅ Tahu cara membuat early break yang benar-benar optimal

---

## 🤖 Kode dari AI

```javascript
const products = [
  { name: 'Sepatu Stacattu', price: 1500000 },
  { name: 'Baju Zoro', price: 500000 },
  { name: 'Baju H&N', price: 250000 },
  { name: 'Sweater Uniklooh', price: 175000 },
  { name: 'Casing Handphone', price: 50000 }
]

const sortedByPrice = [...products].sort((a, b) => b.price - a.price)
```

```javascript
function shoppingTime(memberId, money) {
  if (!memberId) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }

  if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup'
  }

  const listPurchased = []
  let changeMoney = money

  for (const { name, price } of sortedByPrice) {
    if (changeMoney >= price) {
      changeMoney -= price
      listPurchased.push(name)
    }

    // Optional optimization
    if (changeMoney === 0) break
  }

  return {
    memberId,
    money,
    listPurchased,
    changeMoney
  }
}
```

---

## 🔍 Analisis

### ✅ Yang Bagus

**1) Struktur data array of objects — lebih deskriptif**

```javascript
// Lebih deskriptif — akses via nama properti
{ name: 'Sepatu Stacattu', price: 1500000 }
// product.name, product.price

// Dibanding object key-value
'Sepatu Stacattu': 1500000
// entry[0], entry[1]
```

**2) Sort dilakukan sekali di luar function**

```javascript
const sortedByPrice = [...products].sort((a, b) => b.price - a.price)
```

Tidak perlu sort ulang setiap kali function dipanggil — lebih efisien ✅

**3) Spread `[...products]` sebelum sort**

```javascript
// Aman — array original tidak termutasi
const sortedByPrice = [...products].sort(...)
```

`.sort()` di JavaScript **mutate array aslinya**. Dengan spread, array `products` original tetap aman ✅

---

### ⚠️ Yang Perlu Diperbaiki

**Early break hanya cover `changeMoney === 0`**

```javascript
// ⚠️ Kurang optimal — hanya stop jika uang habis persis 0
if (changeMoney === 0) break
```

Bagaimana jika uang tersisa tapi tidak cukup untuk produk manapun? Loop tetap berjalan sampai selesai. Contoh: setelah beli Sweater, `changeMoney = 25000` — karena `25000 !== 0`, loop tetap lanjut ke Casing Handphone (50000) dan skip, padahal sudah pasti tidak bisa beli apapun lagi.

---

## 🔧 Versi Improved

Ada **2 perubahan** dari kode AI:

**1) Perbaiki early break — dari `=== 0` menjadi `< MIN_PRICE`**

```javascript
// ⚠️ Kurang optimal
if (changeMoney === 0) break

// ✅ Lebih optimal — stop jika uang sudah tidak cukup untuk produk manapun
if (changeMoney < MIN_PRICE) break
```

**2) Ekstrak `MIN_PRICE` sebagai konstanta**

```javascript
const MIN_PRICE = 50000
```

Dipakai di 2 tempat secara konsisten — menghindari **magic number**.

---

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
```

```javascript
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

---

## 🧪 Test Cases

```javascript
// Contoh dari soal
console.log(shoppingTime('324193hDew2', 700000))
// { memberId: '324193hDew2', money: 700000, listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }
```

```javascript
// Edge cases - no member
console.log(shoppingTime('', 2475000))
// 'Mohon maaf, toko X hanya berlaku untuk member saja'

console.log(shoppingTime(undefined, 100000))
// 'Mohon maaf, toko X hanya berlaku untuk member saja'

// Edge case - insufficient money
console.log(shoppingTime('234JdhweRxa53', 15000))
// 'Mohon maaf, uang tidak cukup'

// Normal cases
console.log(shoppingTime('1820RzKrnWn08', 2475000))
// { memberId: '1820RzKrnWn08', money: 2475000, listPurchased: ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'], changeMoney: 0 }

console.log(shoppingTime('82Ku8Ma742', 170000))
// { memberId: '82Ku8Ma742', money: 170000, listPurchased: ['Casing Handphone'], changeMoney: 120000 }
```

---

## 📖 Ringkasan Algoritma

### **Konsep Inti:**
```
Definisikan MIN_PRICE sebagai konstanta harga minimum
Definisikan products sebagai array of objects di luar function
Sort products sekali saja di luar function (descending by price)
  → spread [..products] dulu agar array original tidak termutasi
Validasi memberId → jika kosong/undefined, return pesan error
Validasi money → jika < MIN_PRICE, return pesan error
Loop setiap produk:
  Jika uang cukup → beli produk, kurangi uang, tambah ke listPurchased
  Jika uang < MIN_PRICE → early break, tidak mungkin beli produk manapun
Return object hasil belanja
```

---

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function shoppingTime(memberId, money)`
   - `memberId` — string ID member yang berbelanja
   - `money` — number jumlah uang yang dibawa
   - **return** — string pesan error, atau object `{ memberId, money, listPurchased, changeMoney }`

#### 🟡 Konstanta & Data (Di Luar Function):

2. **`const MIN_PRICE = 50000`**
   - Harga produk termurah — dipakai di **2 tempat** secara konsisten
   - Menghindari **magic number** — angka `50000` tidak muncul begitu saja tanpa konteks
   - Jika harga minimum berubah, cukup update 1 tempat saja

3. **`const products = [...]`**
   - Struktur **array of objects** — lebih deskriptif dari object key-value biasa
   - Akses properti lebih jelas: `product.name`, `product.price`
   - Didefinisikan di luar function — konstanta, tidak perlu dibuat ulang setiap pemanggilan

4. **`const sortedByPrice = [...products].sort((a, b) => b.price - a.price)`**
   - **Spread `[...products]`** sebelum sort — array original tidak termutasi
   - Sort dilakukan **sekali saja di luar function** — tidak perlu sort ulang setiap pemanggilan
   - `b.price - a.price` — descending, produk termahal di posisi pertama

#### 🔴 Validasi Awal (Guard Clause):

5. **`if (!memberId) return '...'`**
   - Menangkap `''`, `undefined`, `null`, `0` — semua nilai falsy

6. **`if (money < MIN_PRICE) return '...'`**
   - Menggunakan konstanta `MIN_PRICE` — konsisten, tidak hardcode angka

#### 🔄 Di Dalam Loop `for (const { name, price } of sortedByPrice)`:

7. **Destructuring `{ name, price }`**
   - Langsung ambil properti dari setiap object produk
   - Lebih readable dibanding `[productName, price]` dari array entry

8. **`if (changeMoney >= price)`**
   - Jika uang cukup → kurangi `changeMoney`, push `name` ke `listPurchased`
   - Jika tidak → skip, lanjut ke produk berikutnya

9. **`if (changeMoney < MIN_PRICE) break`**
   - **Early break** — jika sisa uang sudah kurang dari harga produk termurah, tidak mungkin ada produk lain yang bisa dibeli
   - Lebih optimal dari `=== 0` karena cover semua kasus uang tidak cukup

#### 🔵 Di Luar Loop:

10. **`return { memberId, money, listPurchased, changeMoney }`**
    - `money` adalah nilai uang awal (tidak berubah)
    - `changeMoney` adalah sisa uang setelah belanja

---

### **Visualisasi untuk `memberId: '324193hDew2', money: 700000`:**

```
MIN_PRICE = 50000

sortedByPrice (sort sekali di luar function):
{ name: 'Sepatu Stacattu', price: 1500000 }
{ name: 'Baju Zoro',        price: 500000 }
{ name: 'Baju H&N',         price: 250000 }
{ name: 'Sweater Uniklooh', price: 175000 }
{ name: 'Casing Handphone', price:  50000 }

changeMoney = 700000

iter 1: 'Sepatu Stacattu' → 700000 < 1500000 ❌ skip
         changeMoney=700000 >= MIN_PRICE → lanjut
iter 2: 'Baju Zoro' → 700000 >= 500000 ✅ beli
         changeMoney = 200000 >= MIN_PRICE → lanjut
iter 3: 'Baju H&N' → 200000 < 250000 ❌ skip
         changeMoney = 200000 >= MIN_PRICE → lanjut
iter 4: 'Sweater Uniklooh' → 200000 >= 175000 ✅ beli
         changeMoney = 25000 < MIN_PRICE → 🛑 BREAK

listPurchased = ['Baju Zoro', 'Sweater Uniklooh']
changeMoney   = 25000
```

---

### **Keywords:**
- 🛡️ **Guard Clause** — validasi di awal function untuk keluar lebih awal jika kondisi tidak valid
- 🔢 **Magic Number** — angka tanpa konteks yang sebaiknya diganti dengan konstanta bernama
- 📋 **Array of Objects** — struktur data yang lebih deskriptif dari object key-value biasa
- 🔽 **Descending Sort** — `b.price - a.price` mengurutkan dari terbesar ke terkecil
- 🛡️ **Spread `[...arr]`** — copy array sebelum sort agar array original tidak termutasi
- ⚡ **Early Break** — keluar dari loop lebih awal jika kondisi tertentu terpenuhi

---

### **Kompleksitas:**

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n log n)** | Sort dilakukan sekali di luar function |
| Memori | **O(n)** | `sortedByPrice` dan `listPurchased` menyimpan data produk |

---

### **Kapan Pakai:**
- ✅ Ingin struktur data yang lebih deskriptif dengan array of objects
- ✅ Ingin optimasi early break yang benar-benar efektif
- ✅ Ingin menghindari magic number dengan konstanta `MIN_PRICE`

---

### **Pitfalls (Jebakan Umum):**

**1) ❌ Sort tanpa spread — array original termutasi**
```javascript
// ❌ BERBAHAYA — products asli ikut berubah urutannya
const sortedByPrice = products.sort((a, b) => b.price - a.price)

// ✅ AMAN — copy dulu sebelum sort
const sortedByPrice = [...products].sort((a, b) => b.price - a.price)
```

**2) ❌ Early break dengan `=== 0` — tidak cover semua kasus**
```javascript
// ❌ KURANG OPTIMAL — hanya stop jika uang habis persis 0
if (changeMoney === 0) break

// ✅ LEBIH OPTIMAL — stop jika uang sudah tidak cukup untuk produk manapun
if (changeMoney < MIN_PRICE) break
```

**3) ❌ Hardcode magic number**
```javascript
// ❌ KURANG READABLE — angka 50000 muncul tanpa konteks
if (money < 50000) return '...'
if (changeMoney < 50000) break

// ✅ LEBIH READABLE — jelas maksudnya harga minimum
const MIN_PRICE = 50000
if (money < MIN_PRICE) return '...'
if (changeMoney < MIN_PRICE) break
```

---

### **💡 Insight Penting:**

> **Kenapa sort di luar function lebih efisien?**
> Karena data produk tidak pernah berubah. Jika sort dilakukan di dalam function, setiap kali `shoppingTime` dipanggil akan melakukan sort ulang yang tidak perlu. Dengan sort sekali di luar, hasilnya bisa langsung dipakai berkali-kali.

> **Kenapa spread `[...products]` penting?**
> Karena `.sort()` di JavaScript **mutate array aslinya**. Tanpa spread, array `products` original akan berubah urutannya setelah sort — ini bisa menyebabkan bug yang sulit dilacak jika `products` dipakai di tempat lain.

> **Kenapa `MIN_PRICE` lebih baik dari hardcode `50000`?**
> Karena jika harga minimum berubah di masa depan, kita hanya perlu update **1 baris** saja. Jika hardcode, kita harus mencari dan mengubah setiap kemunculan angka `50000` — rawan terlewat dan menyebabkan bug.

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa early break di posisi setelah if pembelian, bukan di dalam if?</strong></summary>

Karena kita perlu cek `changeMoney < MIN_PRICE` **setelah** setiap iterasi — baik setelah beli maupun setelah skip. Jika diletakkan di dalam `if (changeMoney >= price)`, kita hanya cek setelah beli saja, sehingga iterasi yang skip tidak akan terkena early break.

</details>

<details>
<summary><strong>❓ Apakah array of objects lebih baik dari object key-value?</strong></summary>

Tidak mutlak — tergantung konteks. Array of objects lebih deskriptif dan mudah di-extend (bisa tambah properti baru seperti `category`, `stock`). Object key-value lebih ringkas untuk data sederhana berupa pasangan nama-nilai. Untuk data produk yang mungkin berkembang, array of objects adalah pilihan yang lebih fleksibel.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔀 [← Kembali ke Part 5: Alternatif `reduce` + Ringkasan Algoritma](05-alternatif-reduce-dan-ringkasan-algoritma.md)**
- **📊 [Lanjut ke Part 7: Perbandingan & Kesimpulan →](07-perbandingan-dan-kesimpulan.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
