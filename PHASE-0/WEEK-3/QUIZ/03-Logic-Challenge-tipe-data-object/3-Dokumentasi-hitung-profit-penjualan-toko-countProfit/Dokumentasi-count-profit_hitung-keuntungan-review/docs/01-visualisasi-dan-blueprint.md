# 🔍 Visualisasi & Blueprint Data

### ✨ _Memahami pola dan menyiapkan kerangka data sebelum ngoding_

> 🎯 **Tujuan:** Membangun mental model yang kuat tentang struktur data dan alur kerja kasir, serta menyiapkan blueprint (kerangka) kode yang akan menjadi fondasi solusi

---

<a name="daftar-isi"></a>
## 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧠 | [Mental Model](#mental-model) | Analogi kasir Toko X dan kertas laporan |
| 📊 | [Breakdown Pola Data](#breakdown-pola) | Visualisasi struktur input dan output |
| 🗺️ | [Blueprint Data](#blueprint-data) | Kerangka awal sebelum proses transaksi |
| 📝 | [Kamus Variabel](#kamus-variabel) | Naming convention yang direkomendasikan |
| 🏗️ | [Kerangka Kode](#kerangka-kode) | Struktur kosong dengan komentar peran |

---

<a name="mental-model"></a>
## 🧠 Mental Model: Kasir Toko X

> [!NOTE]
> **Analogi Dunia Nyata:**
> Bayangkan Anda adalah kasir di Toko X yang sedang SALE. Sebelum toko buka, Anda menyiapkan **kertas laporan** untuk setiap barang SALE. Kertas ini akan mencatat siapa saja yang membeli, sisa stok, dan total keuntungan.

### 🎭 Peran dalam Sistem

```
🏪 Toko X (Function)
├─ 📋 Kertas Laporan (Array of Objects)
│  ├─ Sepatu Stacattu → { product, shoppers: [], leftOver: 10, totalProfit: 0 }
│  ├─ Baju Zoro → { product, shoppers: [], leftOver: 2, totalProfit: 0 }
│  └─ Sweater Uniklooh → { product, shoppers: [], leftOver: 1, totalProfit: 0 }
│
├─ 👥 Antrean Pembeli (Parameter shoppers)
│  └─ Diproses satu per satu (FIFO)
│
└─ ✅ Syarat Pembelian
   └─ leftOver >= amount
```

### 🔄 Alur Kerja Kasir

1. **Persiapan** → Siapkan kertas laporan untuk semua barang SALE
2. **Proses Antrean** → Ambil pembeli pertama dari antrean
3. **Pencocokan** → Cari kertas laporan barang yang sesuai
4. **Validasi** → Cek apakah stok mencukupi
5. **Transaksi** → Jika ya, catat nama pembeli, kurangi stok, tambah profit
6. **Ulangi** → Lanjut ke pembeli berikutnya
7. **Selesai** → Kembalikan semua kertas laporan

---

<a name="breakdown-pola"></a>
## 📊 Breakdown Pola Data

### Input: Array of Shoppers

| Index | name | product | amount | Keterangan |
|-------|------|---------|--------|------------|
| 0 | Windi | Sepatu Stacattu | 2 | Ingin beli 2 sepatu |
| 1 | Vanessa | Sepatu Stacattu | 3 | Ingin beli 3 sepatu |
| 2 | Rani | Sweater Uniklooh | 2 | Ingin beli 2 sweater |

### Output: Array of Sales Report

| product | shoppers | leftOver | totalProfit | Penjelasan |
|---------|----------|----------|-------------|------------|
| Sepatu Stacattu | ['Windi', 'Vanessa'] | 5 | 7500000 | Stok awal 10, terjual 5 (2+3) |
| Baju Zoro | [] | 2 | 0 | Tidak ada yang beli |
| Sweater Uniklooh | [] | 1 | 0 | Rani gagal (stok 1, mau beli 2) |

> [!IMPORTANT]
> **Pola Kunci:**
> - Setiap barang **HARUS muncul** di output, meskipun tidak ada yang membeli
> - Array `shoppers` di output **hanya berisi nama** pembeli yang berhasil
> - `leftOver` adalah **sisa stok** setelah semua transaksi
> - `totalProfit` dihitung dari **harga × jumlah terjual**

---

<a name="blueprint-data"></a>
## 🗺️ Blueprint Data (Kerangka Awal)

### Struktur Awal Sebelum Transaksi

Sebelum memproses antrean pembeli, kita harus menyiapkan "kertas laporan" untuk **SEMUA barang SALE**:

```javascript
// Blueprint untuk SATU barang
{
  product: 'Sepatu Stacattu',  // Nama barang
  shoppers: [],                 // Array kosong (belum ada pembeli)
  leftOver: 10,                 // Stok awal utuh
  totalProfit: 0                // Keuntungan awal nol
}
```

### Visualisasi Blueprint Lengkap

```javascript
[
  {
    product: 'Sepatu Stacattu',
    shoppers: [],
    leftOver: 10,
    totalProfit: 0
  },
  {
    product: 'Baju Zoro',
    shoppers: [],
    leftOver: 2,
    totalProfit: 0
  },
  {
    product: 'Sweater Uniklooh',
    shoppers: [],
    leftOver: 1,
    totalProfit: 0
  }
]
```

> [!TIP]
> **Kenapa Blueprint Penting?**
> Menyusun kerangka data terlebih dahulu membuat proses update transaksi menjadi **sangat sederhana**. Kita tinggal mencari object yang sesuai, lalu update propertinya.

---

<a name="kamus-variabel"></a>
## 📝 Kamus Variabel (Naming Convention)

### Tabel Penamaan Variabel

| Lokasi/Peran | ✅ Rekomendasi | ❌ Jangan | Alasan |
|--------------|----------------|-----------|--------|
| Array laporan akhir | `salesReport` | `result`, `data`, `arr` | Menegaskan domain bisnis: "Laporan Penjualan" |
| Satu item laporan | `reportItem` | `current`, `item`, `obj` | Deskriptif: "satu baris item pelaporan" |
| Nama barang | `productName` | `element[0]`, `name` | Menghindari magic number, jelas maksudnya |
| Harga barang | `price` atau `unitPrice` | `element[1]`, `p` | Self-documenting, tidak ambigu |
| Stok barang | `stock` atau `leftOver` | `element[2]`, `s` | Sesuai konteks (awal vs sisa) |
| Hash Map barang | `productMap` | `map`, `dict`, `obj` | Menjelaskan isi: "peta produk" |

> [!WARNING]
> **Hindari Nama Generik:**
> Nama seperti `result`, `data`, `temp`, `item` tidak memberikan informasi tentang **domain bisnis**. Gunakan nama yang mencerminkan **peran sebenarnya** dalam sistem kasir.

### Contoh Penerapan

```javascript
// ❌ BAD: Nama generik, tidak jelas
const result = [];
const current = result[i];
current.totalProfit += listBarang[i][1] * amount;

// ✅ GOOD: Nama deskriptif, domain-driven
const salesReport = [];
const reportItem = salesReport[i];
reportItem.totalProfit += unitPrice * amount;
```

---

<a name="kerangka-kode"></a>
## 🏗️ Kerangka Kode (Mental Model: Kasir Toko X)

```javascript
function countProfit(shoppers) {
  // [EDGE CASE] → Toko sepi, tidak ada pembeli
  // Return: []
  
  // [DATA BARANG SALE] → Hardcoded sesuai soal
  // Format: [nama, harga, stok]
  
  // [PERSIAPAN KERTAS LAPORAN] → Blueprint awal
  // Loop listBarang → push object { product, shoppers: [], leftOver, totalProfit: 0 }
  
  // [PROSES ANTREAN PEMBELI] → Loop shoppers
  //   [PENCOCOKAN BARANG] → Cari reportItem yang product-nya cocok
  //   [VALIDASI STOK] → Cek apakah leftOver >= amount
  //   [TRANSAKSI] → Jika ya:
  //     - Push nama pembeli ke reportItem.shoppers
  //     - Kurangi reportItem.leftOver
  //     - Tambah reportItem.totalProfit
  
  // [RETURN] → Kembalikan salesReport
}
```

### Struktur Loop yang Dibutuhkan

```
Loop 1: Persiapan Blueprint
├─ Input: listBarang (array of arrays)
├─ Proses: Destructuring [productName, price, stock]
└─ Output: salesReport (array of objects)

Loop 2: Proses Transaksi
├─ Input: shoppers (array of objects)
├─ Proses: Destructuring { name, product, amount }
│  └─ Nested Loop: Cari reportItem yang cocok
│     └─ Validasi: leftOver >= amount
│        └─ Update: shoppers, leftOver, totalProfit
└─ Output: salesReport (updated)
```

---

## 💡 Key Takeaways

> [!TIP]
> **Pembelajaran Utama:**
> 1. **Blueprint First** → Siapkan struktur data lengkap sebelum proses transaksi
> 2. **Mental Model** → Gunakan analogi dunia nyata (kasir + kertas laporan)
> 3. **Naming Convention** → Pilih nama variabel yang mencerminkan domain bisnis
> 4. **Visualisasi Pola** → Breakdown input/output dalam tabel untuk melihat pola

> [!NOTE]
> **Kesalahan Pemahaman Awal:**
> Awalnya ada asumsi bahwa syarat pembelian adalah "punya uang yang cukup". Namun setelah mengecek data `shoppers`, ternyata **tidak ada properti uang**. Syarat pembelian hanya berdasarkan **ketersediaan stok** (`leftOver >= amount`).

---

## 🔗 Navigasi

⬅️ [Kembali ke README](../README.md)  
➡️ [Lanjut: Algoritma Tahan Lupa](02-algoritma-tahan-lupa.md)  
🔝 [Kembali ke Atas](#daftar-isi)
