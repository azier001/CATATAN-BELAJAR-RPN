# 📝 Naming Convention (Domain Bisnis)

### ✨ _Dari nama generik ke nama yang mencerminkan domain bisnis_

> 🎯 **Tujuan:** Memahami pentingnya penamaan variabel yang deskriptif dan domain-driven, serta bagaimana nama yang baik membuat kode self-documenting dan mudah dipahami

---

<a name="daftar-isi"></a>
## 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🎯 | [Prinsip Clean Code](#prinsip) | Kenapa naming convention penting |
| 📊 | [Tabel Penamaan Utama](#tabel-utama) | Rekomendasi nama variabel |
| 🔍 | [Analisis Per Variabel](#analisis) | Reasoning di balik setiap nama |
| ✅ | [Before & After](#before-after) | Perbandingan kode dengan nama berbeda |
| 💡 | [Best Practices](#best-practices) | Panduan penamaan variabel |

---

<a name="prinsip"></a>
## 🎯 Prinsip Clean Code

> [!IMPORTANT]
> **"Code is read more often than it is written."**
> 
> Kode dibaca jauh lebih sering daripada ditulis. Nama variabel yang baik membuat kode **self-documenting** dan mengurangi kebutuhan komentar.

### 🤔 Masalah Nama Generik

```javascript
// ❌ BAD: Nama generik, tidak jelas
const result = [];
const current = result[i];
current.totalProfit += listBarang[i][1] * amount;
```

**Pertanyaan yang muncul:**
- `result` itu result dari apa?
- `current` itu current apa?
- `listBarang[i][1]` itu apa?

### ✅ Solusi: Domain-Driven Naming

```javascript
// ✅ GOOD: Nama deskriptif, domain-driven
const salesReport = [];
const reportItem = salesReport[i];
reportItem.totalProfit += unitPrice * amount;
```

**Langsung jelas:**
- `salesReport` = Laporan penjualan
- `reportItem` = Satu item dalam laporan
- `unitPrice` = Harga per unit barang

> [!TIP]
> **Domain-Driven Naming:**
> Gunakan nama yang mencerminkan **domain bisnis** (kasir, toko, penjualan), bukan nama teknis generik (data, result, temp).

---

<a name="tabel-utama"></a>
## 📊 Tabel Penamaan Utama

### Variabel Utama

| Lokasi/Peran | ✅ Rekomendasi | ❌ Jangan | Alasan |
|--------------|----------------|-----------|--------|
| Array laporan akhir | `salesReport` | `result`, `data`, `arr` | Menegaskan domain bisnis: "Laporan Penjualan" |
| Satu item laporan | `reportItem` | `current`, `item`, `obj` | Deskriptif: "satu baris item pelaporan" |
| Nama barang | `productName` | `element[0]`, `name`, `n` | Menghindari magic number, jelas maksudnya |
| Harga barang | `price` atau `unitPrice` | `element[1]`, `p`, `cost` | Self-documenting, tidak ambigu |
| Stok barang | `stock` atau `leftOver` | `element[2]`, `s`, `qty` | Sesuai konteks (awal vs sisa) |
| Hash Map barang | `productMap` | `map`, `dict`, `obj`, `hash` | Menjelaskan isi: "peta produk" |

### Variabel Loop

| Lokasi/Peran | ✅ Rekomendasi | ❌ Jangan | Alasan |
|--------------|----------------|-----------|--------|
| Loop pembeli | `{ name, product, amount }` | `shopper`, `s`, `buyer` | Destructuring langsung ke properti |
| Loop barang | `[productName, price, stock]` | `item`, `element`, `barang` | Destructuring menghindari index |
| Index loop | `i`, `j`, `k` | `index`, `idx`, `counter` | Konvensi umum untuk index numerik |

### Properti Object

| Properti | ✅ Rekomendasi | ❌ Jangan | Alasan |
|----------|----------------|-----------|--------|
| Nama produk | `product` | `name`, `productName`, `item` | Sesuai requirement output |
| Daftar pembeli | `shoppers` | `buyers`, `customers`, `names` | Sesuai requirement output |
| Sisa stok | `leftOver` | `stock`, `remaining`, `qty` | Sesuai requirement output |
| Total keuntungan | `totalProfit` | `profit`, `revenue`, `total` | Sesuai requirement output |

---

<a name="analisis"></a>
## 🔍 Analisis Per Variabel

### 1️⃣ `salesReport` vs `result`

**❌ Masalah dengan `result`:**
```javascript
const result = [];
// Result dari apa? Perhitungan? Query? Transaksi?
```

**✅ Keunggulan `salesReport`:**
```javascript
const salesReport = [];
// Jelas: ini adalah laporan penjualan (sales report)
```

> [!NOTE]
> **Konteks Domain:**
> Dalam sistem kasir toko, output yang kita hasilkan adalah **laporan penjualan** (sales report), bukan sekadar "result" generik.

---

### 2️⃣ `reportItem` vs `current`

**❌ Masalah dengan `current`:**
```javascript
const current = result[i];
// Current apa? Current user? Current transaction? Current time?
```

**✅ Keunggulan `reportItem`:**
```javascript
const reportItem = salesReport[i];
// Jelas: ini adalah satu item dalam laporan
```

> [!TIP]
> **Spesifik > Generik:**
> Nama `reportItem` langsung menjelaskan bahwa ini adalah **satu baris item** dalam laporan penjualan.

---

### 3️⃣ `productName` vs `element[0]`

**❌ Masalah dengan `element[0]`:**
```javascript
for (const element of listBarang) {
  console.log(element[0]); // Magic number! Apa itu [0]?
}
```

**✅ Keunggulan `productName`:**
```javascript
for (const [productName, price, stock] of listBarang) {
  console.log(productName); // Self-documenting!
}
```

> [!WARNING]
> **Magic Numbers:**
> Index array seperti `[0]`, `[1]`, `[2]` adalah **magic numbers** yang memaksa pembaca kode untuk mengingat struktur data. Gunakan destructuring untuk menghindarinya.

---

### 4️⃣ `unitPrice` vs `listBarang[i][1]`

**❌ Masalah dengan `listBarang[i][1]`:**
```javascript
totalProfit += listBarang[i][1] * amount;
// Apa itu [i][1]? Harus cek definisi listBarang dulu!
```

**✅ Keunggulan `unitPrice`:**
```javascript
totalProfit += unitPrice * amount;
// Jelas: harga per unit × jumlah
```

> [!TIP]
> **Self-Documenting Code:**
> Nama `unitPrice` langsung menjelaskan bahwa ini adalah **harga per unit** barang, tanpa perlu komentar tambahan.

---

### 5️⃣ `productMap` vs `map`

**❌ Masalah dengan `map`:**
```javascript
const map = {};
// Map untuk apa? User map? Config map? Route map?
```

**✅ Keunggulan `productMap`:**
```javascript
const productMap = {};
// Jelas: ini adalah map/dictionary untuk produk
```

> [!NOTE]
> **Prefix/Suffix Pattern:**
> Menambahkan prefix/suffix yang menjelaskan **isi** dari struktur data (`productMap`, `userList`, `configObject`) membuat kode lebih mudah dipahami.

---

<a name="before-after"></a>
## ✅ Before & After

### ❌ BEFORE: Nama Generik

```javascript
const countProfit = (shoppers) => {
  if (shoppers.length === 0) return [];

  var listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  const result = [];

  for (const element of listBarang) {
    result.push({
      product: element[0],
      shoppers: [],
      leftOver: element[2],
      totalProfit: 0,
      price: element[1],
    });
  }

  for (const s of shoppers) {
    for (let i = 0; i < result.length; i++) {
      const current = result[i];

      if (current.product === s.product) {
        if (current.leftOver >= s.amount) {
          current.shoppers.push(s.name);
          current.leftOver -= s.amount;
          current.totalProfit += current.price * s.amount;
        }
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    delete result[i].price;
  }

  return result;
};
```

**Masalah:**
- `result` → tidak jelas result dari apa
- `element` → tidak jelas element apa
- `element[0]`, `element[1]`, `element[2]` → magic numbers
- `current` → tidak jelas current apa
- `s` → singkatan tidak deskriptif

---

### ✅ AFTER: Nama Domain-Driven

```javascript
const countProfit = (shoppers) => {
  if (shoppers.length === 0) return [];

  var listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  const salesReport = [];

  for (const [productName, unitPrice, stock] of listBarang) {
    salesReport.push({
      product: productName,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0,
      price: unitPrice,
    });
  }

  for (const { name, product, amount } of shoppers) {
    for (let i = 0; i < salesReport.length; i++) {
      const reportItem = salesReport[i];

      if (reportItem.product === product) {
        if (reportItem.leftOver >= amount) {
          reportItem.shoppers.push(name);
          reportItem.leftOver -= amount;
          reportItem.totalProfit += reportItem.price * amount;
        }
      }
    }
  }

  for (let i = 0; i < salesReport.length; i++) {
    delete salesReport[i].price;
  }

  return salesReport;
};
```

**Keunggulan:**
- `salesReport` → jelas ini laporan penjualan
- `[productName, unitPrice, stock]` → destructuring menghindari magic numbers
- `reportItem` → jelas ini satu item laporan
- `{ name, product, amount }` → destructuring langsung ke properti

---

<a name="best-practices"></a>
## 💡 Best Practices

### 1️⃣ Gunakan Nama yang Mencerminkan Domain Bisnis

```javascript
// ❌ BAD: Nama teknis
const data = [];
const item = data[i];

// ✅ GOOD: Nama domain bisnis
const salesReport = [];
const reportItem = salesReport[i];
```

### 2️⃣ Hindari Singkatan yang Tidak Jelas

```javascript
// ❌ BAD: Singkatan ambigu
const prod = 'Sepatu';
const qty = 10;
const amt = 2;

// ✅ GOOD: Nama lengkap
const productName = 'Sepatu';
const stock = 10;
const amount = 2;
```

### 3️⃣ Gunakan Destructuring untuk Menghindari Magic Numbers

```javascript
// ❌ BAD: Magic numbers
const name = element[0];
const price = element[1];
const stock = element[2];

// ✅ GOOD: Destructuring
const [name, price, stock] = element;
```

### 4️⃣ Konsisten dengan Konvensi Bahasa

```javascript
// ✅ GOOD: camelCase untuk JavaScript
const salesReport = [];
const reportItem = {};
const productName = 'Sepatu';

// ❌ BAD: snake_case (konvensi Python/Ruby)
const sales_report = [];
const report_item = {};
const product_name = 'Sepatu';
```

### 5️⃣ Nama Boolean Harus Jelas True/False

```javascript
// ✅ GOOD: Prefix is/has/can
const isAvailable = stock > 0;
const hasDiscount = price < 1000000;
const canPurchase = leftOver >= amount;

// ❌ BAD: Tidak jelas true/false
const available = stock > 0;
const discount = price < 1000000;
const purchase = leftOver >= amount;
```

---

## 💡 Key Takeaways

> [!TIP]
> **Pembelajaran Utama:**
> 
> 1. **Domain-Driven Naming** → Gunakan nama yang mencerminkan domain bisnis, bukan nama teknis generik
>    ```javascript
>    salesReport > result
>    reportItem > current
>    ```
> 
> 2. **Self-Documenting Code** → Nama yang baik mengurangi kebutuhan komentar
>    ```javascript
>    unitPrice * amount  // Jelas tanpa komentar
>    listBarang[i][1] * amount  // Butuh komentar untuk menjelaskan
>    ```
> 
> 3. **Destructuring > Magic Numbers** → Gunakan destructuring untuk menghindari index array
>    ```javascript
>    const [productName, price, stock] = element;  // ✅
>    const name = element[0];  // ❌
>    ```
> 
> 4. **Konsistensi** → Ikuti konvensi bahasa (camelCase untuk JavaScript)
> 
> 5. **Spesifik > Generik** → Nama spesifik lebih baik daripada nama generik
>    ```javascript
>    productMap > map
>    reportItem > item
>    ```

> [!NOTE]
> **Clean Code Principle:**
> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler

---

## 🔗 Navigasi

⬅️ [Kembali: Evolusi Solusi](04-evolusi-solusi.md)  
➡️ [Lanjut: Alternatif Solusi](06-alternatif-solusi.md)  
🔝 [Kembali ke Atas](#daftar-isi)
