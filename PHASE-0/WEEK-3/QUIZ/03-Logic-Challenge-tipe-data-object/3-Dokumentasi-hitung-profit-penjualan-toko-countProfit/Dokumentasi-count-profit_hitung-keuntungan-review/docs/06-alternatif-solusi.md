# 🚀 Alternatif Solusi (Advanced Patterns)

### ✨ _Dari procedural loops ke Higher-Order Functions dan Hash Map O(1)_

> 🎯 **Tujuan:** Memahami pendekatan alternatif yang lebih deklaratif dan optimal, termasuk Higher-Order Functions (.map, .find) dan Hash Map untuk performa maksimal

---

<a name="daftar-isi"></a>
## 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🎯 | [Motivasi](#motivasi) | Kenapa perlu alternatif solusi |
| 🔄 | [Alternatif A: HOF](#alternatif-a) | Higher-Order Functions (Deklaratif) |
| ⚡ | [Alternatif B: Hash Map](#alternatif-b) | Hash Map O(1) (Optimal Performance) |
| 🔧 | [Menghindari Delete](#menghindari-delete) | Teknik tanpa mutasi object |
| 📊 | [Comparison Table](#comparison) | Perbandingan semua pendekatan |
| 💡 | [Kapan Pakai Apa](#kapan-pakai) | Panduan memilih pendekatan |

---

<a name="motivasi"></a>
## 🎯 Motivasi: Kenapa Perlu Alternatif?

### 🤔 Pertanyaan User
> "Kalau kode versi kamu sendiri, kode seperti apa yang kamu rekomendasikan?"

### 📊 Masalah dengan Solusi V1 & V2

| Aspek | Masalah | Impact |
|-------|---------|--------|
| **Readability** | Nested `for` loop sulit dibaca | Maintenance burden |
| **Performance** | O(N×M) untuk pencarian | Lambat untuk data besar |
| **Mutation** | Operator `delete` de-optimisasi V8 | Performance penalty |
| **Imperative** | Fokus pada "bagaimana" bukan "apa" | Verbose code |

> [!NOTE]
> **Evolusi Paradigma:**
> - **V1-V2**: Procedural/Imperative (fokus pada "bagaimana")
> - **V3**: Declarative/Functional (fokus pada "apa")
> - **V4-V5**: Optimal Performance (fokus pada "efisiensi")

---

<a name="alternatif-a"></a>
## 🔄 Alternatif A: Higher-Order Functions (Deklaratif)

### 🎯 Konsep

Menghindari `for` loop tradisional dan menggantinya dengan metode bawaan Array di JavaScript modern:
- `.map()` → Transform array
- `.forEach()` → Iterate tanpa return
- `.find()` → Cari element pertama yang cocok

### ✅ Keunggulan

| Keunggulan | Penjelasan |
|------------|------------|
| **Readability** | Kode lebih mudah dibaca secara lisan |
| **No Index** | Tidak perlu manipulasi index manual |
| **Chainable** | Bisa di-chain untuk operasi kompleks |
| **Safe** | `.find()` return `undefined` jika tidak ketemu (tidak crash) |

### 📝 Implementasi V3

```javascript
const countProfit = (shoppers) => {
  if (shoppers.length === 0) return [];

  const listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  // 1. Mengubah listBarang menjadi array of objects menggunakan .map()
  const salesReport = listBarang.map(([product, price, leftOver]) => ({
    product,
    shoppers: [],
    leftOver,
    totalProfit: 0,
    price,
  }));

  // 2. Memproses antrean menggunakan .forEach()
  shoppers.forEach(({ name, product, amount }) => {
    // Gunakan .find() untuk mencari barang (tanpa nested loop)
    const reportItem = salesReport.find((item) => item.product === product);

    // Jika barangnya ada DAN stoknya mencukupi
    if (reportItem && reportItem.leftOver >= amount) {
      reportItem.shoppers.push(name);
      reportItem.leftOver -= amount;
      reportItem.totalProfit += reportItem.price * amount;
    }
  });

  // 3. Cleanup dengan .forEach() sebelum dikembalikan
  salesReport.forEach((item) => delete item.price);

  return salesReport;
};
```

### 🔍 Breakdown Teknik

#### 1️⃣ `.map()` untuk Transform

```javascript
// ❌ BEFORE: Procedural
const salesReport = [];
for (const [product, price, leftOver] of listBarang) {
  salesReport.push({ product, shoppers: [], leftOver, totalProfit: 0, price });
}

// ✅ AFTER: Declarative
const salesReport = listBarang.map(([product, price, leftOver]) => ({
  product,
  shoppers: [],
  leftOver,
  totalProfit: 0,
  price,
}));
```

> [!TIP]
> **`.map()` Pattern:**
> Gunakan `.map()` ketika ingin **transform** setiap element array menjadi bentuk baru. Return value otomatis menjadi array baru.

#### 2️⃣ `.find()` untuk Pencarian

```javascript
// ❌ BEFORE: Nested loop
for (let i = 0; i < salesReport.length; i++) {
  if (salesReport[i].product === product) {
    // ...
  }
}

// ✅ AFTER: .find()
const reportItem = salesReport.find((item) => item.product === product);
```

> [!TIP]
> **`.find()` Pattern:**
> Gunakan `.find()` untuk mencari **element pertama** yang memenuhi kondisi. Return `undefined` jika tidak ketemu (aman dari crash).

#### 3️⃣ Guard Clause dengan `&&`

```javascript
// ❌ BEFORE: Nested if
if (reportItem) {
  if (reportItem.leftOver >= amount) {
    // transaksi
  }
}

// ✅ AFTER: Guard clause
if (reportItem && reportItem.leftOver >= amount) {
  // transaksi
}
```

### 📊 Complexity Analysis

```
Time Complexity: O(N × M)
├─ .map(): O(M) untuk transform listBarang
├─ .forEach(): O(N) untuk loop shoppers
│  └─ .find(): O(M) untuk setiap pencarian
└─ Total: O(M + N×M) ≈ O(N×M)

Space Complexity: O(M)
└─ salesReport array
```

> [!WARNING]
> **Performance Note:**
> Meskipun lebih readable, `.find()` tetap O(M) untuk setiap pencarian. Untuk data besar, Hash Map lebih optimal.

---

<a name="alternatif-b"></a>
## ⚡ Alternatif B: Hash Map O(1) (Optimal Performance)

### 🎯 Konsep

> [!IMPORTANT]
> **Hash Map (Dictionary/Object):**
> Struktur data yang menyimpan pasangan **key-value** dengan akses O(1). Seperti "buku telepon" yang bisa langsung mencabut data berdasarkan nama.

### 🤔 Pertanyaan User
> "Saya lihat di dokumentasi lain pakai hashmap dictionary, seperti apa kodenya?"

### ✅ Keunggulan

| Keunggulan | Penjelasan |
|------------|------------|
| **O(1) Lookup** | Akses instant tanpa loop |
| **Scalable** | Performa konsisten untuk data besar |
| **No Nested Loop** | Eliminasi nested loop sepenuhnya |

### 📝 Implementasi V4 (dengan `delete`)

```javascript
const countProfit = (shoppers) => {
  if (shoppers.length === 0) return [];

  const listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  const salesReport = [];
  const productMap = {}; // Inisialisasi Hash Map

  // 1. Build Hash Map (O(M))
  for (const [productName, price, stock] of listBarang) {
    const newItem = {
      product: productName,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0,
      price,
    };
    
    salesReport.push(newItem);
    productMap[productName] = newItem; // Simpan REFERENSI ke Hash Map
  }

  // 2. Process Transactions (O(N))
  for (const { name, product, amount } of shoppers) {
    const reportItem = productMap[product]; // O(1) lookup!

    if (reportItem && reportItem.leftOver >= amount) {
      reportItem.shoppers.push(name);
      reportItem.leftOver -= amount;
      reportItem.totalProfit += reportItem.price * amount;
    }
  }

  // 3. Cleanup
  salesReport.forEach(item => delete item.price);

  return salesReport;
};
```

### 🔍 Visualisasi Hash Map

```
productMap = {
  'Sepatu Stacattu': ──┐
                       ├──> { product: 'Sepatu Stacattu', ... }
  'Baju Zoro': ────────┤
                       ├──> { product: 'Baju Zoro', ... }
  'Sweater Uniklooh': ─┘
                       └──> { product: 'Sweater Uniklooh', ... }
}

Akses: productMap['Sepatu Stacattu'] → O(1) instant!
```

> [!TIP]
> **Reference Pattern:**
> `productMap[productName] = newItem` menyimpan **referensi** (pointer) ke object, bukan copy. Perubahan pada `reportItem` langsung mengubah object di `salesReport`.

### 📊 Complexity Analysis

```
Time Complexity: O(N + M)
├─ Build Hash Map: O(M)
├─ Process Transactions: O(N)
│  └─ Hash Map lookup: O(1) per transaction
└─ Total: O(M + N) ✅ LINEAR!

Space Complexity: O(M)
├─ salesReport: O(M)
└─ productMap: O(M) references
```

> [!NOTE]
> **Performance Improvement:**
> - **V1-V3**: O(N×M) → Untuk 1000 pembeli × 100 barang = 100,000 operasi
> - **V4-V5**: O(N+M) → Untuk 1000 pembeli + 100 barang = 1,100 operasi
> - **Speedup**: ~90x lebih cepat! 🚀

---

<a name="menghindari-delete"></a>
## 🔧 Menghindari Operator `delete`

### 🤔 Pertanyaan User
> "Di dokumentasi lain tidak ada yang memakai delete, kalau tanpa delete kodenya bagaimana?"

### ⚠️ Masalah dengan `delete`

> [!CAUTION]
> **V8 Engine De-optimization:**
> Operator `delete` memaksa JavaScript engine (V8) merusak struktur awal object (hidden class). Ini menyebabkan de-optimisasi dan performa menurun di skala besar.

### ✅ Solusi 1: ES6 Rest Operator

```javascript
// Alih-alih delete, gunakan destructuring saat return
return salesReport.map(({ price, ...rest }) => rest);
```

**Cara Kerja:**
```javascript
// Input object
{ product: 'Sepatu', shoppers: [], leftOver: 10, totalProfit: 0, price: 1500000 }

// Destructuring
const { price, ...rest } = object;

// price = 1500000
// rest = { product: 'Sepatu', shoppers: [], leftOver: 10, totalProfit: 0 }
```

> [!TIP]
> **Rest Operator (`...`):**
> Mengambil "sisa" properti setelah destructuring. Ini membuat **object baru** tanpa properti yang di-destructure.

### ✅ Solusi 2: Hash Map Murni (Masterpiece)

Memisahkan data harga ke dalam Hash Map sebagai nilai terpisah:

```javascript
const countProfit = (shoppers) => {
  if (shoppers.length === 0) return [];

  const listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  const salesReport = [];
  const productMap = {}; 

  // 1. Build Hash Map dengan struktur terpisah
  for (const [productName, price, stock] of listBarang) {
    const reportItem = {
      product: productName,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0,
      // ✅ TIDAK ada property price di sini!
    };
    
    salesReport.push(reportItem);
    
    // Simpan referensi DAN harga di tempat terpisah
    productMap[productName] = { 
      reportItem,
      unitPrice: price 
    }; 
  }

  // 2. Process Transactions
  for (const { name, product, amount } of shoppers) {
    const mappedProduct = productMap[product]; 
    
    // Guard Clause: Abaikan jika barang tidak terdaftar
    if (!mappedProduct) continue;

    // Destructuring untuk penulisan ringkas
    const { reportItem, unitPrice } = mappedProduct;

    if (reportItem.leftOver >= amount) {
      reportItem.shoppers.push(name);
      reportItem.leftOver -= amount;
      reportItem.totalProfit += unitPrice * amount; 
    }
  }

  // ✅ Langsung return tanpa cleanup!
  return salesReport;
};
```

### 🔍 Visualisasi Struktur

```
productMap = {
  'Sepatu Stacattu': {
    reportItem: ──> { product: 'Sepatu', shoppers: [], leftOver: 10, totalProfit: 0 }
    unitPrice: 1500000
  }
}

salesReport = [
  { product: 'Sepatu', shoppers: [], leftOver: 10, totalProfit: 0 }  ← Bersih sejak awal!
]
```

> [!TIP]
> **Separation of Concerns:**
> - `salesReport` → Data output (bersih sejak awal)
> - `productMap` → Data internal (boleh kotor, tidak di-return)

### 📊 Perbandingan Teknik Cleanup

| Teknik | Pros | Cons | Use Case |
|--------|------|------|----------|
| **`delete`** | Simple, straightforward | De-optimisasi V8 | Prototype, data kecil |
| **Rest Operator** | Immutable, functional | Membuat object baru (memory) | Data medium |
| **Hash Map Murni** | No mutation, optimal | Sedikit lebih kompleks | Production, data besar |

---

<a name="comparison"></a>
## 📊 Comparison Table (Semua Versi)

| Aspek | V1-V2 (Procedural) | V3 (HOF) | V4 (Hash Map + delete) | V5 (Hash Map Pure) |
|-------|-------------------|----------|------------------------|-------------------|
| **Paradigm** | Imperative | Declarative | Hybrid | Functional |
| **Readability** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Time Complexity** | O(N×M) | O(N×M) | O(N+M) | O(N+M) |
| **Space Complexity** | O(M) | O(M) | O(M) | O(M) |
| **Mutation** | ✅ Minimal | ⚠️ Ada `delete` | ⚠️ Ada `delete` | ✅ No mutation |
| **Performance** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Maintainability** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Learning Curve** | Easy | Medium | Medium | Hard |
| **Best For** | Beginners | Intermediate | Production | Advanced |

---

<a name="kapan-pakai"></a>
## 💡 Kapan Pakai Apa?

### 🎯 Decision Tree

```
Apakah data < 100 items?
├─ YES → V1-V2 (Procedural) atau V3 (HOF)
│         Performance difference tidak signifikan
│
└─ NO → Apakah perlu optimal performance?
    ├─ YES → V5 (Hash Map Pure)
    │         Production-ready, no mutation
    │
    └─ NO → V3 (HOF)
              Paling readable untuk maintenance
```

### 📋 Rekomendasi Per Skenario

| Skenario | Rekomendasi | Alasan |
|----------|-------------|--------|
| **Learning/Tutorial** | V1-V2 | Mudah dipahami, fokus pada logika dasar |
| **Code Interview** | V3 | Menunjukkan pemahaman HOF modern |
| **Production (Small Data)** | V3 | Balance antara readability & performance |
| **Production (Big Data)** | V5 | Optimal performance, no mutation |
| **Legacy Codebase** | V1-V2 | Konsisten dengan existing code style |

---

## 💡 Key Takeaways

> [!TIP]
> **Pembelajaran Utama:**
> 
> 1. **Higher-Order Functions** → Lebih readable, tapi complexity tetap O(N×M)
>    ```javascript
>    .map() → Transform array
>    .find() → Cari element (return undefined jika tidak ada)
>    .forEach() → Iterate tanpa return
>    ```
> 
> 2. **Hash Map O(1)** → Optimal performance untuk data besar
>    ```javascript
>    productMap[key] → O(1) instant lookup
>    O(N×M) → O(N+M) speedup ~90x untuk 1000×100 data
>    ```
> 
> 3. **Avoid `delete`** → Gunakan Rest Operator atau Hash Map Pure
>    ```javascript
>    // ❌ De-optimization
>    delete object.price;
>    
>    // ✅ Immutable
>    const { price, ...rest } = object;
>    
>    // ✅ Separation of Concerns
>    productMap[key] = { reportItem, unitPrice };
>    ```
> 
> 4. **Trade-offs** → Tidak ada "best solution", hanya "best for context"
>    - Readability vs Performance
>    - Simplicity vs Optimization
>    - Learning Curve vs Production-Ready

> [!NOTE]
> **Evolution of Thinking:**
> - **Beginner**: "Apakah kode ini bekerja?"
> - **Intermediate**: "Apakah kode ini mudah dibaca?"
> - **Advanced**: "Apakah kode ini optimal dan maintainable?"

---

## 🔗 Navigasi

⬅️ [Kembali: Naming Convention](05-naming-convention.md)  
➡️ [Lanjut: Ringkasan Semua Versi](07-ringkasan-semua-versi.md)  
🔝 [Kembali ke Atas](#daftar-isi)
