# 🔄 Evolusi Solusi (Refactoring)

### ✨ _Dari fragile logic ke robust solution dengan ES6 modern syntax_

> 🎯 **Tujuan:** Memahami proses refactoring dari solusi yang "berhasil tapi rentan" menjadi solusi yang "robust dan maintainable", termasuk menghindari parallel array fragility dan operator `delete`

---

<a name="daftar-isi"></a>
## 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| ⚠️ | [Masalah V1](#masalah-v1) | Fragile logic pada parallel array |
| 💡 | [Solusi: Property Titipan](#solusi-titipan) | Menyisipkan harga ke dalam object |
| 🗑️ | [Masalah Output](#masalah-output) | Properti `price` tidak boleh di output |
| 🔧 | [Operator Delete](#operator-delete) | Membersihkan properti sebelum return |
| ✨ | [ES6 Modern Syntax](#es6-syntax) | Arrow function & shorthand property |
| ✅ | [Solusi Final V2](#solusi-final) | Kode lengkap yang robust |

---

<a name="masalah-v1"></a>
## ⚠️ Masalah pada Solusi V1 (Fragile Logic)

### 🔍 Kode Bermasalah

```javascript
current.totalProfit += listBarang[i][1] * amount;
```

### 🤔 Kenapa Ini Masalah?

> [!CAUTION]
> **Fragile Logic (Logika Rentan):**
> Kode ini sangat bergantung pada **urutan index yang statis**. Berasumsi bahwa posisi barang di `result[i]` akan **selalu sama persis** dengan posisi di `listBarang[i]`.

### 📊 Skenario Kegagalan

**Jika suatu hari ada fitur sorting:**

```javascript
// Sebelum sorting
listBarang[0] → ['Sepatu Stacattu', 1500000, 10]
result[0]     → { product: 'Sepatu Stacattu', ... }

// Setelah sorting by price (ascending)
listBarang[0] → ['Sweater Uniklooh', 175000, 1]  // ❌ Urutan berubah!
result[0]     → { product: 'Sepatu Stacattu', ... } // Masih urutan lama

// Bug terjadi!
current.totalProfit += listBarang[i][1] * amount;
// Mengambil harga Sweater (175000) untuk transaksi Sepatu!
```

### 💬 Pertanyaan Mentor
> "Adakah cara agar kita **mengingat harga barang** sejak awal waktu membuat kertas laporan?"

---

<a name="solusi-titipan"></a>
## 💡 Solusi: Menyisipkan Properti Tambahan

### 🎯 Ide User
> "Memasukkan `price` juga kah?"

**Tepat sekali!** ✅

### 📝 Implementasi

Alih-alih mengambil harga dari array lain, kita **titipkan** data harga ke dalam object blueprint:

```javascript
for (const [productName, price, stock] of listBarang) {
  result.push({
    product: productName,
    shoppers: [],
    leftOver: stock,
    totalProfit: 0,
    price,  // ✨ Titipkan harga di sini!
  });
}
```

### ✅ Perhitungan Menjadi Mandiri

```javascript
// ❌ BEFORE: Bergantung pada parallel array
current.totalProfit += listBarang[i][1] * amount;

// ✅ AFTER: Mandiri dan deskriptif
current.totalProfit += current.price * amount;
```

> [!TIP]
> **Object sebagai Data Carrier:**
> Kita bisa dengan bebas menambahkan properti sementara pada object untuk mempermudah perhitungan internal. Ini membuat kode **self-contained** dan tidak bergantung pada data eksternal.

### 📊 Perbandingan

| Aspek | V1 (Parallel Array) | V2 (Property Titipan) |
|-------|---------------------|------------------------|
| **Ketergantungan** | Bergantung pada `listBarang[i]` | Mandiri (semua data di object) |
| **Fragility** | ❌ Rentan jika ada sorting | ✅ Aman dari perubahan urutan |
| **Readability** | `listBarang[i][1]` (magic number) | `current.price` (self-documenting) |
| **Maintainability** | ❌ Sulit di-maintain | ✅ Mudah dipahami |

---

<a name="masalah-output"></a>
## 🗑️ Masalah Output (Properti Kotor)

### 🤔 Tantangan Baru

Test case meminta output dengan struktur spesifik:

```javascript
// ✅ Expected Output
{
  product: 'Sepatu Stacattu',
  shoppers: ['Windi'],
  leftOver: 8,
  totalProfit: 3000000
}

// ❌ Actual Output (dengan property titipan)
{
  product: 'Sepatu Stacattu',
  shoppers: ['Windi'],
  leftOver: 8,
  totalProfit: 3000000,
  price: 1500000  // ❌ Properti ini tidak boleh ada!
}
```

### 💬 Solusi Mentor: Operator `delete`

> [!NOTE]
> **Operator `delete`:**
> JavaScript menyediakan operator bawaan untuk menghapus properti dari object:
> ```javascript
> delete object.propertyName;
> ```

### 🤔 Kapan Waktu yang Tepat?

**Pertanyaan Mentor:**
> "Di mana posisi yang tepat untuk meletakkan `delete`?"

**Jawaban User:**
> "Di tengah kode sebelum return kah?"

**✅ Akurat 100%!**

### 📝 Reasoning

```
Timeline Kebutuhan:
├─ [Persiapan Blueprint] → price DIBUTUHKAN (untuk disimpan)
├─ [Proses Transaksi] → price DIBUTUHKAN (untuk perhitungan)
├─ [Sebelum Return] → price TIDAK DIBUTUHKAN (harus dihapus)
└─ [Return] → Output bersih tanpa price
```

> [!IMPORTANT]
> **Timing is Everything:**
> Kita masih membutuhkan `price` secara intensif selama proses transaksi. Pembersihan harus ditunda sampai **semua transaksi selesai**, tepat sebelum data di-`return`.

---

<a name="operator-delete"></a>
## 🔧 Operator Delete (Cleanup)

### 📝 Implementasi

```javascript
// Loop 3: Membersihkan jejak properti titipan
for (let i = 0; i < result.length; i++) {
  delete result[i].price;
}

return result;
```

### 📊 Visualisasi Cleanup

```
Before Delete:
[
  { product: 'Sepatu', shoppers: [...], leftOver: 5, totalProfit: 7500000, price: 1500000 },
  { product: 'Baju', shoppers: [], leftOver: 2, totalProfit: 0, price: 500000 },
  { product: 'Sweater', shoppers: [], leftOver: 1, totalProfit: 0, price: 175000 }
]

After Delete:
[
  { product: 'Sepatu', shoppers: [...], leftOver: 5, totalProfit: 7500000 },
  { product: 'Baju', shoppers: [], leftOver: 2, totalProfit: 0 },
  { product: 'Sweater', shoppers: [], leftOver: 1, totalProfit: 0 }
]
```

> [!WARNING]
> **Performance Note:**
> Operator `delete` memaksa JavaScript engine (V8) merusak struktur awal object (de-optimisasi). Untuk skala besar, ini bisa memperlambat kode. Solusi alternatif akan dibahas di [Alternatif Solusi](06-alternatif-solusi.md).

---

<a name="es6-syntax"></a>
## ✨ ES6 Modern Syntax

### 🎯 Upgrade Proaktif User

Tanpa disuruh, user secara proaktif menerapkan **Modern JavaScript (ES6)** syntax:

### 1️⃣ Arrow Function

```javascript
// ❌ Traditional Function
function countProfit(shoppers) {
  // ...
}

// ✅ ES6 Arrow Function
const countProfit = (shoppers) => {
  // ...
};
```

### 2️⃣ Shorthand Property

```javascript
// ❌ Redundant
result.push({
  product: productName,
  price: price,  // Key dan value sama
  leftOver: stock
});

// ✅ ES6 Shorthand
result.push({
  product: productName,
  price,  // Otomatis jadi price: price
  leftOver: stock
});
```

> [!TIP]
> **ES6 Shorthand Property:**
> Jika nama key dan nama variabel **sama persis**, cukup tulis sekali. JavaScript otomatis menerjemahkan `price` menjadi `price: price`.

---

<a name="solusi-final"></a>
## ✅ Solusi Final V2 (Robust & Modern)

```javascript
const countProfit = (shoppers) => {
  // [EDGE CASE] Toko sepi
  if (shoppers.length === 0) return [];

  // [DATA BARANG SALE] Hardcoded sesuai soal
  var listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  const result = [];

  // [LOOP 1] Membuat blueprint laporan dan menitipkan harga
  for (const [productName, price, stock] of listBarang) {
    result.push({
      product: productName,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0,
      price,  // ES6 Shorthand Property
    });
  }

  // [LOOP 2] Memproses transaksi pembeli
  for (const { name, product, amount } of shoppers) {
    for (let i = 0; i < result.length; i++) {
      const current = result[i];

      if (current.product === product) {
        if (current.leftOver >= amount) {
          current.shoppers.push(name);
          current.leftOver -= amount;
          current.totalProfit += current.price * amount;  // ✅ Perhitungan aman & deskriptif
        }
      }
    }
  }

  // [LOOP 3] Membersihkan jejak properti titipan
  for (let i = 0; i < result.length; i++) {
    delete result[i].price;
  }

  return result;
};
```

### 🧪 Test Results

```javascript
// Test Case 1: Transaksi Normal
const shoppers1 = [
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 },
  { name: 'Devi', product: 'Baju Zoro', amount: 1 }
];

console.log(countProfit(shoppers1));
// ✅ PASSED

// Test Case 2: Edge Case
console.log(countProfit([]));
// ✅ PASSED
```

---

## 💡 Key Takeaways

> [!TIP]
> **Pembelajaran Utama:**
> 
> 1. **Hindari Parallel Array Logic** → Daripada mencari data dari array lain dengan bermodalkan kesamaan index, jauh lebih aman untuk "membawa" data tersebut ke dalam object itu sendiri
>    ```javascript
>    // ❌ Fragile
>    totalProfit += listBarang[i][1] * amount;
>    
>    // ✅ Robust
>    totalProfit += current.price * amount;
>    ```
> 
> 2. **Object sebagai Data Carrier** → Kita bisa menambahkan properti sementara untuk mempermudah perhitungan, lalu membuangnya dengan `delete` sebelum output
>    ```javascript
>    // Titipkan saat persiapan
>    { product, price, leftOver, totalProfit }
>    
>    // Hapus sebelum return
>    delete object.price;
>    ```
> 
> 3. **ES6 Syntax** → Modern JavaScript membuat kode lebih ringkas dan ekspresif
>    ```javascript
>    const func = () => {}  // Arrow Function
>    { price, }             // Shorthand Property
>    ```

> [!NOTE]
> **Evolusi Mindset:**
> V1 fokus pada "berhasil lolos test case". V2 fokus pada "berhasil DAN maintainable". Ini adalah evolusi natural dari programmer pemula ke intermediate.

---

## 🔗 Navigasi

⬅️ [Kembali: Pendekatan Bertahap](03-pendekatan-bertahap.md)  
➡️ [Lanjut: Naming Convention](05-naming-convention.md)  
🔝 [Kembali ke Atas](#daftar-isi)
