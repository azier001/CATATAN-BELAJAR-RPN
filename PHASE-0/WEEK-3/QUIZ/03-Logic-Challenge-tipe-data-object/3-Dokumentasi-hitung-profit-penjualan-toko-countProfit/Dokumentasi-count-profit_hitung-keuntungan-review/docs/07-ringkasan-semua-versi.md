# 📦 Ringkasan Semua Versi Kode

### ✨ _Evolusi lengkap dari V1 hingga V5 dengan comparison table dan timeline_

> 🎯 **Tujuan:** Melihat evolusi kode secara menyeluruh, membandingkan semua versi side-by-side, dan memahami trade-offs setiap pendekatan

---

<a name="daftar-isi"></a>
## 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🎬 | [Evolution Timeline](#timeline) | Timeline evolusi dari V1 ke V5 |
| 📊 | [Comparison Matrix](#comparison) | Tabel perbandingan lengkap |
| 1️⃣ | [V1: Procedural + Parallel Array](#v1) | Solusi pertama yang berhasil |
| 2️⃣ | [V2: Property Titipan + Delete](#v2) | Menghindari parallel array fragility |
| 3️⃣ | [V3: Higher-Order Functions](#v3) | Deklaratif dengan .map, .find |
| 4️⃣ | [V4: Hash Map + Delete](#v4) | Optimal performance O(1) |
| 5️⃣ | [V5: Hash Map Masterpiece](#v5) | Tanpa mutasi, production-ready |
| 🎯 | [Rekomendasi](#rekomendasi) | Kapan pakai versi mana |

---

<a name="timeline"></a>
## 🎬 Evolution Timeline

```
📅 Fase 1: Analisis & Visualisasi
└─ Mental model, blueprint data, algoritma tahan lupa

📅 Fase 2: Solusi Pertama (V1)
├─ ✅ Berhasil lolos test case
├─ ✅ Destructuring untuk readability
└─ ⚠️ Parallel array fragility

📅 Fase 3: Refactoring (V2)
├─ ✅ Property titipan untuk robustness
├─ ✅ ES6 arrow function & shorthand
└─ ⚠️ Operator delete (de-optimization)

📅 Fase 4: Eksplorasi Alternatif
├─ V3: Higher-Order Functions
│   ├─ ✅ Deklaratif & readable
│   └─ ⚠️ Masih O(N×M)
│
├─ V4: Hash Map + Delete
│   ├─ ✅ O(1) lookup, optimal performance
│   └─ ⚠️ Masih pakai delete
│
└─ V5: Hash Map Pure (Masterpiece)
    ├─ ✅ O(1) lookup
    ├─ ✅ No mutation
    ├─ ✅ Guard clauses
    └─ ✅ Full ES6 destructuring
```

---

<a name="comparison"></a>
## 📊 Comparison Matrix

### Performance & Complexity

| Versi | Time Complexity | Space Complexity | Lookup Method | Performance Score |
|-------|----------------|------------------|---------------|-------------------|
| **V1** | O(N×M) | O(M) | Nested loop | ⭐⭐⭐ |
| **V2** | O(N×M) | O(M) | Nested loop | ⭐⭐⭐ |
| **V3** | O(N×M) | O(M) | `.find()` | ⭐⭐⭐ |
| **V4** | O(N+M) | O(M) | Hash Map O(1) | ⭐⭐⭐⭐⭐ |
| **V5** | O(N+M) | O(M) | Hash Map O(1) | ⭐⭐⭐⭐⭐ |

### Code Quality

| Versi | Readability | Maintainability | Mutation | Learning Curve | Production-Ready |
|-------|-------------|-----------------|----------|----------------|------------------|
| **V1** | ⭐⭐⭐ | ⭐⭐⭐ | Minimal | Easy | ⚠️ Fragile |
| **V2** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Ada `delete` | Easy | ⚠️ Delete issue |
| **V3** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Ada `delete` | Medium | ⚠️ Delete issue |
| **V4** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Ada `delete` | Medium | ⚠️ Delete issue |
| **V5** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ None | Hard | ✅ Yes |

### Features & Techniques

| Versi | Destructuring | Arrow Function | HOF | Hash Map | Guard Clause | No Delete |
|-------|--------------|----------------|-----|----------|--------------|-----------|
| **V1** | ✅ Array | ❌ | ❌ | ❌ | ❌ | ❌ |
| **V2** | ✅ Array & Object | ✅ | ❌ | ❌ | ❌ | ❌ |
| **V3** | ✅ Array & Object | ✅ | ✅ | ❌ | ✅ | ❌ |
| **V4** | ✅ Array & Object | ✅ | ❌ | ✅ | ✅ | ❌ |
| **V5** | ✅ Full | ✅ | ❌ | ✅ | ✅ | ✅ |

---

<a name="v1"></a>
## 1️⃣ V1: Procedural + Parallel Array

### 🎯 Karakteristik
- **Paradigm**: Imperative/Procedural
- **Highlight**: Solusi pertama yang berhasil
- **Weakness**: Parallel array fragility

### 📝 Kode Lengkap

```javascript
function countProfit(shoppers) {
  if (shoppers.length === 0) return [];

  var listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  const result = [];

  for (const [productName, price, stock] of listBarang) {
    result.push({
      product: productName,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0,
    });
  }

  for (const { name, product, amount } of shoppers) {
    for (let i = 0; i < result.length; i++) {
      const current = result[i];

      if (current.product === product) {
        if (current.leftOver >= amount) {
          current.shoppers.push(name);
          current.leftOver -= amount;
          current.totalProfit += listBarang[i][1] * amount; // ⚠️ Parallel array!
        }
      }
    }
  }

  return result;
}
```

### ✅ Pros
- Simple dan straightforward
- Mudah dipahami pemula
- Destructuring untuk readability

### ❌ Cons
- Parallel array fragility (`listBarang[i][1]`)
- Rentan error jika ada sorting
- Nested loop O(N×M)

---

<a name="v2"></a>
## 2️⃣ V2: Property Titipan + Delete

### 🎯 Karakteristik
- **Paradigm**: Imperative/Procedural + ES6
- **Highlight**: Menghindari parallel array
- **Weakness**: Operator `delete`

### 📝 Kode Lengkap

```javascript
const countProfit = (shoppers) => {
  if (shoppers.length === 0) return [];

  var listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  const result = [];

  for (const [productName, price, stock] of listBarang) {
    result.push({
      product: productName,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0,
      price, // ✅ Property titipan
    });
  }

  for (const { name, product, amount } of shoppers) {
    for (let i = 0; i < result.length; i++) {
      const current = result[i];

      if (current.product === product) {
        if (current.leftOver >= amount) {
          current.shoppers.push(name);
          current.leftOver -= amount;
          current.totalProfit += current.price * amount; // ✅ Self-contained
        }
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    delete result[i].price; // ⚠️ De-optimization
  }

  return result;
};
```

### ✅ Pros
- Robust (tidak bergantung parallel array)
- ES6 arrow function & shorthand
- Self-contained calculation

### ❌ Cons
- Operator `delete` (V8 de-optimization)
- Masih nested loop O(N×M)

---

<a name="v3"></a>
## 3️⃣ V3: Higher-Order Functions

### 🎯 Karakteristik
- **Paradigm**: Declarative/Functional
- **Highlight**: Readable dengan HOF
- **Weakness**: Masih O(N×M)

### 📝 Kode Lengkap

```javascript
const countProfit = (shoppers) => {
  if (shoppers.length === 0) return [];

  const listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  const salesReport = listBarang.map(([product, price, leftOver]) => ({
    product,
    shoppers: [],
    leftOver,
    totalProfit: 0,
    price,
  }));

  shoppers.forEach(({ name, product, amount }) => {
    const reportItem = salesReport.find((item) => item.product === product);

    if (reportItem && reportItem.leftOver >= amount) {
      reportItem.shoppers.push(name);
      reportItem.leftOver -= amount;
      reportItem.totalProfit += reportItem.price * amount;
    }
  });

  salesReport.forEach((item) => delete item.price);

  return salesReport;
};
```

### ✅ Pros
- Sangat readable (deklaratif)
- No manual index manipulation
- Guard clause dengan `&&`
- `.find()` aman (return undefined)

### ❌ Cons
- `.find()` tetap O(M) per call
- Masih pakai `delete`
- Total complexity O(N×M)

---

<a name="v4"></a>
## 4️⃣ V4: Hash Map + Delete

### 🎯 Karakteristik
- **Paradigm**: Hybrid (Procedural + Hash Map)
- **Highlight**: O(1) lookup performance
- **Weakness**: Masih pakai `delete`

### 📝 Kode Lengkap

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

  for (const [productName, price, stock] of listBarang) {
    const newItem = {
      product: productName,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0,
      price,
    };
    
    salesReport.push(newItem);
    productMap[productName] = newItem; // ✅ O(1) reference
  }

  for (const { name, product, amount } of shoppers) {
    const reportItem = productMap[product]; // ✅ O(1) lookup!

    if (reportItem && reportItem.leftOver >= amount) {
      reportItem.shoppers.push(name);
      reportItem.leftOver -= amount;
      reportItem.totalProfit += reportItem.price * amount;
    }
  }

  salesReport.forEach(item => delete item.price);

  return salesReport;
};
```

### ✅ Pros
- O(1) lookup (Hash Map)
- Linear time O(N+M)
- ~90x faster untuk data besar
- Guard clause

### ❌ Cons
- Masih pakai `delete`

---

<a name="v5"></a>
## 5️⃣ V5: Hash Map Masterpiece

### 🎯 Karakteristik
- **Paradigm**: Functional + Optimal
- **Highlight**: Production-ready, no mutation
- **Weakness**: Slightly more complex

### 📝 Kode Lengkap

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

  for (const [productName, price, stock] of listBarang) {
    const reportItem = {
      product: productName,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0,
      // ✅ Tidak ada property price!
    };
    
    salesReport.push(reportItem);
    
    productMap[productName] = { 
      reportItem,
      unitPrice: price // ✅ Harga di tempat terpisah
    }; 
  }

  for (const { name, product, amount } of shoppers) {
    const mappedProduct = productMap[product]; 
    
    if (!mappedProduct) continue; // ✅ Guard clause

    const { reportItem, unitPrice } = mappedProduct; // ✅ Destructuring

    if (reportItem.leftOver >= amount) {
      reportItem.shoppers.push(name);
      reportItem.leftOver -= amount;
      reportItem.totalProfit += unitPrice * amount; 
    }
  }

  return salesReport; // ✅ Langsung return, no cleanup!
};
```

### ✅ Pros
- O(1) lookup (Hash Map)
- No mutation (no `delete`)
- Separation of concerns
- Guard clause dengan `continue`
- Full destructuring
- Production-ready

### ❌ Cons
- Slightly more complex structure
- Higher learning curve

---

<a name="rekomendasi"></a>
## 🎯 Rekomendasi Penggunaan

### 📋 Decision Matrix

| Skenario | Rekomendasi | Alasan |
|----------|-------------|--------|
| **Belajar Algoritma** | V1 | Fokus pada logika dasar, mudah dipahami |
| **Belajar ES6** | V2 | Arrow function, shorthand, destructuring |
| **Belajar Functional** | V3 | HOF (.map, .find, .forEach) |
| **Code Interview** | V3 atau V4 | Menunjukkan pemahaman modern JS |
| **Production (< 100 items)** | V3 | Balance readability & performance |
| **Production (> 1000 items)** | V5 | Optimal performance, maintainable |
| **Legacy Codebase** | V1 atau V2 | Konsisten dengan existing style |
| **Team Junior** | V2 | Tidak terlalu kompleks, cukup robust |
| **Team Senior** | V5 | Best practices, production-ready |

### 🎓 Learning Path

```
Beginner
└─ V1: Pahami logika dasar
   └─ V2: Belajar ES6 syntax
      └─ V3: Eksplorasi HOF
         └─ V4: Pahami Hash Map
            └─ V5: Master best practices
```

### ⚡ Performance Benchmark

**Test Data:** 1000 pembeli × 100 barang

| Versi | Operations | Estimated Time | Speedup |
|-------|-----------|----------------|---------|
| V1-V3 | 100,000 | 100ms | 1x (baseline) |
| V4-V5 | 1,100 | ~1ms | ~90x faster |

---

## 💡 Key Takeaways

> [!TIP]
> **Pembelajaran Utama:**
> 
> 1. **Tidak Ada "Best Solution"** → Hanya "best for context"
>    - V1: Best untuk learning
>    - V3: Best untuk readability
>    - V5: Best untuk production
> 
> 2. **Evolution is Natural** → Kode berkembang seiring pemahaman
>    ```
>    Working → Robust → Readable → Optimal → Maintainable
>    ```
> 
> 3. **Trade-offs Everywhere** → Setiap keputusan punya konsekuensi
>    - Readability vs Performance
>    - Simplicity vs Optimization
>    - Learning Curve vs Production-Ready
> 
> 4. **Context Matters** → Pilih pendekatan sesuai kebutuhan
>    - Data size
>    - Team skill level
>    - Project requirements
>    - Maintenance burden

> [!NOTE]
> **Mindset Evolution:**
> - **V1**: "Apakah kode ini bekerja?"
> - **V2**: "Apakah kode ini robust?"
> - **V3**: "Apakah kode ini mudah dibaca?"
> - **V4**: "Apakah kode ini optimal?"
> - **V5**: "Apakah kode ini maintainable?"

---

## 🔗 Navigasi

⬅️ [Kembali: Alternatif Solusi](06-alternatif-solusi.md)  
➡️ [Lanjut: Key Takeaways](08-key-takeaways.md)  
🔝 [Kembali ke Atas](#daftar-isi)
