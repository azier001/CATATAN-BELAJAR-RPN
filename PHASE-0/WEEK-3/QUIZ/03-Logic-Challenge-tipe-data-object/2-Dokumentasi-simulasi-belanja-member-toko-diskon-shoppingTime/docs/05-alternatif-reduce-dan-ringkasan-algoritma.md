# 📚 shoppingTime - PART 5: ALTERNATIF `reduce` + RINGKASAN ALGORITMA

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║      🔀 PART 5: ALTERNATIF `reduce` + RINGKASAN ALGORITMA 🔀            ║
║                                                                          ║
║              Pendekatan Functional Programming                           ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| ✅ Kode | 🧪 Test Cases | 📖 Ringkasan Algoritma |
|:-------:|:-------------:|:----------------------:|
| [Jump](#-kode) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja `reduce` sebagai pengganti `for...of`
- ✅ Tahu konsep accumulator dan initial value
- ✅ Mengenal gaya functional programming
- ✅ Bisa membandingkan kapan pakai `for...of` vs `reduce`

---

## ✅ Kode

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
Ubah object products menjadi array of entries, langsung di-chain dengan sort
Reduce array dengan initial value { listPurchased: [], changeMoney: money }:
  Setiap iterasi: jika uang cukup → beli produk, kurangi uang, tambah ke listPurchased
  Wajib return acc di setiap iterasi
Destructure hasil reduce → listPurchased, changeMoney
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

#### 🔴 Validasi Awal (Guard Clause):

3. **`if (!memberId) return '...'`**
   - Menangkap `''`, `undefined`, `null`, `0` — semua nilai falsy
   - Disebut **guard clause** — keluar lebih awal jika kondisi tidak valid

4. **`if (money < 50000) return '...'`**
   - Harga minimum produk adalah 50000 (Casing Handphone)
   - Jika uang kurang dari itu, tidak ada produk yang bisa dibeli

#### 🔄 Persiapan Data:

5. **`const sortedByPrice = Object.entries(products).sort((a, b) => b[1] - a[1])`**
   - `Object.entries()` dan `.sort()` langsung di-chain — lebih ringkas dari versi `for...of`
   - Sort **descending** berdasarkan harga (`b[1] - a[1]`)

#### 🔄 `.reduce()`:

6. **Initial value `{ listPurchased: [], changeMoney: money }`**
   - Nilai awal `acc` sebelum iterasi pertama dimulai
   - `listPurchased: []` — belum ada barang yang dibeli
   - `changeMoney: money` — uang masih penuh

7. **`(acc, [productName, price]) => { ... }`**
   - `acc` — **accumulator**, menampung hasil yang terus diperbarui setiap iterasi
   - `[productName, price]` — destructuring langsung dari setiap entry

8. **`if (acc.changeMoney >= price)`**
   - Jika uang di accumulator masih cukup → kurangi `acc.changeMoney`, push ke `acc.listPurchased`
   - Jika tidak → skip, `return acc` tanpa perubahan

9. **`return acc`**
   - **Wajib** di setiap iterasi — mengembalikan accumulator yang sudah diperbarui ke iterasi berikutnya
   - Tanpa `return acc`, iterasi berikutnya akan menerima `undefined`

#### 🔵 Destructuring Hasil Reduce:

10. **`const { listPurchased, changeMoney } = sortedByPrice.reduce(...)`**
    - Hasil akhir `reduce` adalah object `acc` — langsung di-destructure
    - Lebih ringkas daripada deklarasi `let` dan `const` terpisah seperti versi `for...of`

#### 🔵 Di Luar Reduce:

11. **`return { memberId, money, listPurchased, changeMoney }`**
    - `money` adalah nilai uang awal (tidak berubah)
    - `changeMoney` adalah sisa uang hasil dari `reduce`

---

### **Visualisasi untuk `memberId: '324193hDew2', money: 700000`:**

```
Initial acc: { listPurchased: [], changeMoney: 700000 }

iter 1: 'Sepatu Stacattu' 1500000 → 700000 < 1500000 ❌ skip
         acc = { listPurchased: [], changeMoney: 700000 }

iter 2: 'Baju Zoro' 500000 → 700000 >= 500000 ✅ beli
         acc = { listPurchased: ['Baju Zoro'], changeMoney: 200000 }

iter 3: 'Baju H&N' 250000 → 200000 < 250000 ❌ skip
         acc = { listPurchased: ['Baju Zoro'], changeMoney: 200000 }

iter 4: 'Sweater Uniklooh' 175000 → 200000 >= 175000 ✅ beli
         acc = { listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }

iter 5: 'Casing Handphone' 50000 → 25000 < 50000 ❌ skip
         acc = { listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }

Hasil akhir reduce:
{ listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }
```

---

### **Keywords:**
- 🛡️ **Guard Clause** — validasi di awal function untuk keluar lebih awal jika kondisi tidak valid
- 📦 **`Object.entries()`** — mengubah object menjadi array of `[key, value]`
- 🔽 **Descending Sort** — `b[1] - a[1]` mengurutkan dari terbesar ke terkecil
- 🔁 **`reduce`** — mengakumulasi hasil iterasi ke dalam satu nilai akhir
- 📥 **Accumulator (`acc`)** — penampung hasil yang terus diperbarui setiap iterasi
- 🔀 **Destructuring** — `[productName, price]` dan `{ listPurchased, changeMoney }` langsung ambil nilai

---

### **Kompleksitas:**

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n log n)** | Didominasi oleh proses sorting |
| Memori | **O(n)** | `sortedByPrice` dan `listPurchased` di dalam acc masing-masing menyimpan data produk |

---

### **Kapan Pakai:**
- ✅ Terbiasa dengan gaya **functional programming**
- ✅ Ingin menghindari deklarasi variabel `let` yang mutable
- ✅ State pembelian ingin digabung dalam satu object (`acc`)

---

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa `return acc` di dalam reduce**
```javascript
// ❌ SALAH — acc tidak dikembalikan, iterasi berikutnya acc = undefined
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
// ❌ SALAH — tanpa initial value, acc di iterasi pertama
//            adalah elemen pertama array (bukan object yang kita mau)
sortedByPrice.reduce((acc, [productName, price]) => { ... })

// ✅ BENAR — selalu berikan initial value yang sesuai
sortedByPrice.reduce((acc, [productName, price]) => { ... },
  { listPurchased: [], changeMoney: money }
)
```

---

### **💡 Insight Penting:**

> **Kapan pilih `reduce` vs `for...of`?**
> Pilih `for...of` jika tim kamu belum familiar dengan `reduce` atau readability lebih diprioritaskan. Pilih `reduce` jika kamu terbiasa dengan gaya **functional programming** dan ingin menghindari deklarasi variabel `let` yang mutable.

> **Kenapa `return acc` wajib?**
> Karena `reduce` menggunakan nilai return dari setiap iterasi sebagai `acc` di iterasi berikutnya. Tanpa `return acc`, iterasi berikutnya akan menerima `undefined` sebagai `acc` dan menyebabkan error.

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Apa itu accumulator di reduce?</strong></summary>

Accumulator (`acc`) adalah variabel penampung yang terus diperbarui di setiap iterasi. Nilainya dimulai dari **initial value** yang kita tentukan, lalu diperbarui dan dikembalikan (`return acc`) di setiap iterasi hingga loop selesai.

</details>

<details>
<summary><strong>❓ Kenapa initial value-nya `{ listPurchased: [], changeMoney: money }`?</strong></summary>

Karena itulah kondisi awal sebelum belanja dimulai — belum ada barang yang dibeli (`[]`) dan uang masih penuh (`money`). Setiap iterasi akan memperbarui kedua nilai ini sesuai kondisi pembelian.

</details>

<details>
<summary><strong>❓ Apa bedanya versi reduce dengan versi for...of dari sisi hasil?</strong></summary>

Tidak ada bedanya — hasil akhir identik. Perbedaannya hanya di gaya penulisan. Versi `for...of` lebih imperatif dan mudah dibaca, sedangkan versi `reduce` lebih fungsional dan ringkas namun butuh pemahaman tentang `reduce`.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **✅ [← Kembali ke Part 4: Kode Final + Ringkasan Algoritma](04-kode-final-dan-ringkasan-algoritma.md)**
- **🤖 [Lanjut ke Part 6: Analisis Kode AI + Versi Improved →](06-alternatif-ai-improved-dan-ringkasan-algoritma.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
