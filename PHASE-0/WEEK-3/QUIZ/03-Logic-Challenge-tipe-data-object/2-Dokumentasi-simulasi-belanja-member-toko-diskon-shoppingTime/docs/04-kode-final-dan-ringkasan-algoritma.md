# 📚 shoppingTime - PART 4: KODE FINAL + RINGKASAN ALGORITMA

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         ✅ PART 4: KODE FINAL + RINGKASAN ALGORITMA ✅                  ║
║                                                                          ║
║              Hasil Akhir Refactoring & Cara Kerjanya                     ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| ✅ Kode Final | 🧪 Test Cases | 📖 Ringkasan Algoritma |
|:------------:|:-------------:|:----------------------:|
| [Jump](#-kode-final) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami kode final hasil refactoring secara keseluruhan
- ✅ Tahu cara kerja algoritma secara detail step-by-step
- ✅ Mengenal pitfalls umum dan cara menghindarinya

---

## ✅ Kode Final

```javascript
const products = {
  'Sepatu Stacattu': 1500000,
  'Baju Zoro': 500000,
  'Baju H&N': 250000,
  'Sweater Uniklooh': 175000,
  'Casing Handphone': 50000,
}
```

```javascript
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
Definisikan products sebagai konstanta di luar function
Validasi memberId → jika kosong/undefined, return pesan error
Validasi money → jika < 50000, return pesan error
Ubah object products menjadi array of entries
Sort array berdasarkan harga (descending) → termahal dulu
Loop setiap produk:
  Jika uang cukup → beli produk, kurangi uang, tambah ke listPurchased
  Jika tidak → skip
Return object hasil belanja
```

---

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function shoppingTime(memberId, money)`
   - `memberId` — string ID member yang berbelanja
   - `money` — number jumlah uang yang dibawa
   - **return** — string pesan error, atau object `{ memberId, money, listPurchased, changeMoney }`

#### 🟡 Data Produk (Di Luar Function):

2. **`const products = { ... }`**
   - Didefinisikan **di luar function** karena merupakan data konstanta yang tidak berubah
   - Lebih efisien — tidak dibuat ulang di memori setiap kali function dipanggil
   - Jika konteks soal mengharuskan semua kode di dalam function, boleh dipindah ke dalam

#### 🔴 Validasi Awal (Guard Clause):

3. **`if (!memberId) return '...'`**
   - Menangkap `''`, `undefined`, `null`, `0` — semua nilai falsy
   - Disebut **guard clause** — keluar lebih awal jika kondisi tidak valid

4. **`if (money < 50000) return '...'`**
   - Harga minimum produk adalah 50000 (Casing Handphone)
   - Jika uang kurang dari itu, tidak ada produk yang bisa dibeli

#### 🔄 Persiapan Data:

5. **`const productEntries = Object.entries(products)`**
   - Mengubah object `products` menjadi array of `[nama, harga]`
   - Contoh hasil:
   ```javascript
   [
     ['Sepatu Stacattu', 1500000],
     ['Baju Zoro', 500000],
     ...
   ]
   ```

6. **`const sortedByPrice = productEntries.sort((a, b) => b[1] - a[1])`**
   - Sort **descending** berdasarkan harga (`b[1] - a[1]`)
   - `[1]` karena harga ada di index ke-1 setiap entry
   - Hasil: produk termahal ada di posisi pertama

#### 🔄 Di Dalam Loop `for (const [productName, price] of sortedByPrice)`:

7. **Destructuring `[productName, price]`**
   - Langsung ambil nama dan harga dari setiap entry tanpa perlu index manual

8. **`if (changeMoney >= price)`**
   - Cek apakah uang sisa masih cukup untuk membeli produk ini
   - Jika ya → kurangi `changeMoney`, tambah `productName` ke `listPurchased`
   - Jika tidak → skip, lanjut ke produk berikutnya

#### 🔵 Di Luar Loop:

9. **`return { memberId, money, listPurchased, changeMoney }`**
   - **Shorthand property** — nama key sama dengan nama variabel
   - `money` di sini adalah nilai uang awal (tidak berubah)
   - `changeMoney` adalah sisa uang setelah belanja

---

### **Visualisasi untuk `memberId: '324193hDew2', money: 700000`:**

```
sortedByPrice (setelah sort descending):
['Sepatu Stacattu', 1500000]
['Baju Zoro',        500000]
['Baju H&N',         250000]
['Sweater Uniklooh', 175000]
['Casing Handphone',  50000]

changeMoney = 700000

iter 1: 'Sepatu Stacattu' 1500000 → 700000 < 1500000 ❌ skip
iter 2: 'Baju Zoro'        500000 → 700000 >= 500000 ✅ beli
         changeMoney = 700000 - 500000 = 200000
iter 3: 'Baju H&N'         250000 → 200000 < 250000  ❌ skip
iter 4: 'Sweater Uniklooh' 175000 → 200000 >= 175000 ✅ beli
         changeMoney = 200000 - 175000 = 25000
iter 5: 'Casing Handphone'  50000 → 25000 < 50000    ❌ skip

listPurchased = ['Baju Zoro', 'Sweater Uniklooh']
changeMoney   = 25000
```

---

### **Keywords:**
- 🛡️ **Guard Clause** — validasi di awal function untuk keluar lebih awal jika kondisi tidak valid
- 📦 **`Object.entries()`** — mengubah object menjadi array of `[key, value]`
- 🔽 **Descending Sort** — `b[1] - a[1]` mengurutkan dari terbesar ke terkecil
- 🔀 **Destructuring** — `[productName, price]` langsung ambil nilai dari array
- ⚡ **Greedy** — selalu beli produk termahal yang masih mampu dibeli

---

### **Kompleksitas:**

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n log n)** | Didominasi oleh proses sorting |
| Memori | **O(n)** | `productEntries`, `sortedByPrice`, `listPurchased` masing-masing menyimpan data produk |

---

### **Kapan Pakai:**
- ✅ Jumlah produk sedikit — sorting O(n log n) tidak jadi masalah
- ✅ Butuh urutan pembelian dari termahal — greedy approach sangat cocok
- ✅ Data produk hanya dipakai 1 function — lebih aman taruh di dalam function

---

### **Pitfalls (Jebakan Umum):**

**1) ❌ Sort ascending instead of descending**
```javascript
// ❌ SALAH — beli termurah dulu, tidak sesuai soal
productEntries.sort((a, b) => a[1] - b[1])

// ✅ BENAR — beli termahal dulu
productEntries.sort((a, b) => b[1] - a[1])
```

**2) ❌ Lupa `[1]` saat sorting**
```javascript
// ❌ SALAH — sort berdasarkan array-nya langsung, bukan harganya
productEntries.sort((a, b) => b - a)

// ✅ BENAR — sort berdasarkan harga di index ke-1
productEntries.sort((a, b) => b[1] - a[1])
```

**3) ❌ Mengurangi `money` langsung instead of `changeMoney`**
```javascript
// ❌ SALAH — money di return akan berubah, tidak sesuai soal
money -= price

// ✅ BENAR — money tetap nilai awal, changeMoney yang berkurang
changeMoney -= price
```

---

### **💡 Insight Penting:**

> **Kenapa ini disebut Greedy Algorithm?**
> Karena di setiap langkah kita selalu memilih produk termahal yang masih bisa dibeli, tanpa mempertimbangkan kombinasi lain. Strategi ini bekerja karena soal meminta beli satu per satu dari yang termahal, bukan memaksimalkan jumlah barang.

> **Kenapa `Object.entries()` dan bukan langsung loop object?**
> Karena `Object.entries()` menghasilkan array yang bisa di-sort. Object biasa tidak bisa di-sort secara langsung — urutannya tidak terjamin konsisten di semua environment JavaScript.

> **Kenapa `products` di luar function, bukan di dalam?**
> Karena data ini adalah konstanta yang tidak pernah berubah. Jika diletakkan di dalam, object akan dibuat ulang di memori setiap kali function dipanggil — tidak efisien. Namun jika konteks soal mengharuskan semua kode di dalam function, boleh dipindah ke dalam.

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa `money` di return tidak berubah padahal kita terus belanja?</strong></summary>

Karena yang dikurangi adalah `changeMoney`, bukan `money`. Variabel `money` menyimpan nilai uang awal dan tidak pernah diubah sepanjang function — ini penting agar informasi uang awal tetap ada di return object.

</details>

<details>
<summary><strong>❓ Apa itu shorthand property di return?</strong></summary>

Shorthand property adalah cara penulisan object di mana nama key dan nama variabel sama, sehingga cukup ditulis sekali.

```javascript
// Tanpa shorthand
return { memberId: memberId, money: money, listPurchased: listPurchased, changeMoney: changeMoney }

// Dengan shorthand
return { memberId, money, listPurchased, changeMoney }
```

</details>

<details>
<summary><strong>❓ Bagaimana jika uang pas-pasan dan bisa beli semua barang?</strong></summary>

`changeMoney` akan menjadi `0` dan `listPurchased` akan berisi semua nama produk. Contoh: `money: 2475000` — pas untuk membeli semua 5 produk dengan `changeMoney: 0`.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔧 [← Kembali ke Part 3: Refactoring Step-by-Step](03-refactoring-step-by-step.md)**
- **🔀 [Lanjut ke Part 5: Alternatif `reduce` + Ringkasan Algoritma →](05-alternatif-reduce-dan-ringkasan-algoritma.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
