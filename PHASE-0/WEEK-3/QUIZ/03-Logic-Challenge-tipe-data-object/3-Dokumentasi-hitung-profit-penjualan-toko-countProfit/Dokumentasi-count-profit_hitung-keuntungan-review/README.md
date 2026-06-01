# 🏪 Challenge countProfit — Sistem Kasir Toko Sale

### ✨ _Menghitung sisa stok dan total keuntungan dari antrean pembeli di Toko X_

> 🎯 **Tujuan:** Memahami challenge countProfit dari nol hingga solusi optimal, melalui visualisasi pola, algoritma tahan lupa, dan evolusi kode bertahap dengan berbagai pendekatan (Procedural, HOF, Hash Map O(1))

---

## 📖 Deskripsi Challenge

Toko X sedang mengadakan **SALE besar-besaran** untuk 3 barang pilihan. Sebagai kasir, Anda harus memproses antrean pembeli dan mencatat:
- Siapa saja yang **berhasil membeli** (stok mencukupi)
- **Sisa stok** setelah semua transaksi
- **Total keuntungan** untuk setiap barang

### 🛍️ Data Barang Sale

| Nama Barang | Harga | Stok Awal |
|-------------|-------|-----------|
| Sepatu Stacattu | Rp 1.500.000 | 10 |
| Baju Zoro | Rp 500.000 | 2 |
| Sweater Uniklooh | Rp 175.000 | 1 |

### 📥 Input Format

**Function Signature:**
```javascript
function countProfit(shoppers)
```

**Parameter `shoppers`** — Array of objects berisi data pembeli:
```javascript
[
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
]
```

| Property | Tipe | Deskripsi |
|----------|------|-----------|
| `name` | String | Nama pembeli |
| `product` | String | Barang yang ingin dibeli |
| `amount` | Number | Jumlah yang ingin dibeli |

### 📤 Output Format

Array of objects dengan struktur:
```javascript
[
  {
    product: 'Sepatu Stacattu',
    shoppers: ['Windi', 'Vanessa'],  // Pembeli yang berhasil
    leftOver: 5,                      // Sisa stok
    totalProfit: 7500000              // Total keuntungan
  },
  // ... barang lainnya
]
```

---

## 🎮 Test Cases

### Test Case 1: Transaksi Normal
```javascript
const shoppers1 = [
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 },
  { name: 'Devi', product: 'Baju Zoro', amount: 1 }
];

console.log(countProfit(shoppers1));
```

**Expected Output:**
```javascript
[
  {
    product: 'Sepatu Stacattu',
    shoppers: ['Windi', 'Vanessa'],
    leftOver: 5,
    totalProfit: 7500000
  },
  {
    product: 'Baju Zoro',
    shoppers: ['Devi'],
    leftOver: 1,
    totalProfit: 500000
  },
  {
    product: 'Sweater Uniklooh',
    shoppers: [],
    leftOver: 1,
    totalProfit: 0
  }
]
```

> [!NOTE]
> **Rani gagal membeli** karena stok Sweater hanya 1, sedangkan dia ingin beli 2.

### Test Case 2: Edge Case (Toko Sepi)
```javascript
console.log(countProfit([]));
```

**Expected Output:**
```javascript
[]
```

---

## 🧩 Syarat & Aturan

> [!IMPORTANT]
> **Syarat Utama Pembelian:**
> Pembeli hanya bisa membeli **JIKA `leftOver` (sisa stok) >= `amount` (jumlah yang ingin dibeli)**

### ✅ Aturan Bisnis
1. Antrean diproses **berurutan** (FIFO - First In First Out)
2. Jika stok **tidak mencukupi**, pembeli **dilewati** (tidak masuk ke array `shoppers`)
3. Stok **tidak pernah negatif** (validasi sebelum transaksi)
4. Semua barang SALE **harus muncul** di output, meskipun tidak ada yang membeli

### ❌ Kesalahan Umum (Gotchas)

> [!WARNING]
> **Jebakan #1: Asumsi Data Uang**
> Data `shoppers` **TIDAK** memuat properti uang/saldo. Syarat pembelian hanya berdasarkan **ketersediaan stok**.

> [!CAUTION]
> **Jebakan #2: Parallel Array Fragility**
> Mengandalkan index yang sama dari 2 array berbeda (`listBarang[i]` dan `result[i]`) sangat rentan error jika ada sorting/filtering di masa depan.

---

## 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔍 | [Visualisasi & Blueprint](docs/01-visualisasi-dan-blueprint.md) | Mental model, blueprint data, kamus variabel |
| 🧠 | [Algoritma Tahan Lupa](docs/02-algoritma-tahan-lupa.md) | Step-by-step dengan contoh konkret |
| 🛠️ | [Pendekatan Bertahap](docs/03-pendekatan-bertahap.md) | Solusi pertama (trial-error) |
| 🔄 | [Evolusi Solusi](docs/04-evolusi-solusi.md) | Refactoring dari fragile ke robust |
| 📝 | [Naming Convention](docs/05-naming-convention.md) | Penamaan variabel domain bisnis |
| 🚀 | [Alternatif Solusi](docs/06-alternatif-solusi.md) | HOF vs Hash Map O(1) |
| 📦 | [Ringkasan Semua Versi](docs/07-ringkasan-semua-versi.md) | Comparison table V1-V5 |
| 💡 | [Key Takeaways](docs/08-key-takeaways.md) | Pembelajaran penting |

---

## 🚀 Quick Start

### 1️⃣ Pahami Pola (Visualisasi)
Mulai dengan memahami **mental model** dan **blueprint data** di [Visualisasi & Blueprint](docs/01-visualisasi-dan-blueprint.md).

### 2️⃣ Ikuti Algoritma
Pelajari **step-by-step algorithm** dengan contoh konkret di [Algoritma Tahan Lupa](docs/02-algoritma-tahan-lupa.md).

### 3️⃣ Bangun Solusi Bertahap
Ikuti proses **trial-error** dan pembelajaran dari mentor di [Pendekatan Bertahap](docs/03-pendekatan-bertahap.md).

### 4️⃣ Refactor & Optimize
Tingkatkan kualitas kode melalui [Evolusi Solusi](docs/04-evolusi-solusi.md) dan [Alternatif Solusi](docs/06-alternatif-solusi.md).

---

## 🎓 Konsep yang Dipelajari

```
🎯 Konsep Fundamental
├─ Array of Objects manipulation
├─ Nested loops & iteration patterns
├─ Object property mutation
└─ Edge case handling

🎯 ES6+ Modern JavaScript
├─ Array Destructuring
├─ Object Destructuring
├─ Arrow Functions
├─ Shorthand Property
└─ Rest/Spread Operator

🎯 Data Structures & Algorithms
├─ Hash Map (O(1) lookup)
├─ Parallel Arrays pattern
├─ Reference vs Value
└─ Time Complexity analysis

🎯 Clean Code Practices
├─ Naming Convention (Domain-Driven)
├─ Guard Clauses
├─ Avoiding Mutation
└─ Higher-Order Functions
```

---

## 🏆 Versi Solusi

Dokumentasi ini mencakup **5 versi solusi** dengan tingkat kompleksitas berbeda:

| Versi | Pendekatan | Complexity | Highlight |
|-------|------------|------------|-----------|
| **V1** | Procedural + Parallel Array | O(N×M) | Solusi pertama yang berhasil |
| **V2** | Property Titipan + `delete` | O(N×M) | Menghindari parallel array fragility |
| **V3** | Higher-Order Functions | O(N×M) | Deklaratif dengan `.map`, `.find` |
| **V4** | Hash Map + `delete` | O(N+M) | Optimal performance |
| **V5** | Hash Map Masterpiece | O(N+M) | Tanpa mutasi, guard clause, full ES6 |

> [!TIP]
> Lihat perbandingan lengkap di [Ringkasan Semua Versi](docs/07-ringkasan-semua-versi.md)

---

## 📝 Catatan Akhir

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **1 Juni 2026** berdasarkan sesi mentoring langsung
> di **Google Antigravity** menggunakan JavaScript (Node.js).
> Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow
> `/mentor-challenge` dengan format visual `/setup-doc`.

---

## 🔗 Navigasi

➡️ **Mulai Belajar:** [Visualisasi & Blueprint](docs/01-visualisasi-dan-blueprint.md)
