# 🧠 Algoritma Tahan Lupa

### ✨ _Step-by-step algorithm dengan contoh konkret dan penjelasan "kenapa"_

> 🎯 **Tujuan:** Memahami setiap langkah algoritma dengan detail, disertai contoh angka nyata dan reasoning di balik setiap keputusan, sehingga logika tidak mudah terlupakan

---

<a name="daftar-isi"></a>
## 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🎯 | [Syarat Utama](#syarat-utama) | Kondisi agar pembelian berhasil |
| 📋 | [Langkah 1: Persiapan](#langkah-1) | Membuat blueprint laporan |
| 🔄 | [Langkah 2: Proses Antrean](#langkah-2) | Loop pembeli satu per satu |
| 🔍 | [Langkah 3: Pencocokan](#langkah-3) | Mencari barang yang sesuai |
| ✅ | [Langkah 4: Validasi](#langkah-4) | Cek ketersediaan stok |
| 💰 | [Langkah 5: Transaksi](#langkah-5) | Update data jika berhasil |
| 🎬 | [Simulasi Lengkap](#simulasi-lengkap) | Walkthrough dengan data konkret |

---

<a name="syarat-utama"></a>
## 🎯 Syarat Utama Pembelian

> [!IMPORTANT]
> **Kondisi Pembelian Berhasil:**
> ```javascript
> leftOver >= amount
> ```
> 
> Pembeli **HANYA** bisa membeli jika **sisa stok** lebih besar atau sama dengan **jumlah yang ingin dibeli**.

### 📊 Contoh Validasi

| Barang | leftOver | amount | Hasil | Alasan |
|--------|----------|--------|-------|--------|
| Sepatu Stacattu | 10 | 2 | ✅ Berhasil | 10 >= 2 (stok cukup) |
| Sepatu Stacattu | 5 | 3 | ✅ Berhasil | 5 >= 3 (stok cukup) |
| Sweater Uniklooh | 1 | 2 | ❌ Gagal | 1 < 2 (stok kurang) |
| Baju Zoro | 2 | 2 | ✅ Berhasil | 2 >= 2 (pas habis) |

> [!NOTE]
> **Kenapa tidak ada validasi uang?**
> Data input `shoppers` **tidak memuat properti uang/saldo**. Ini adalah SALE khusus di mana syarat pembelian hanya berdasarkan **ketersediaan stok**.

---

<a name="langkah-1"></a>
## 📋 Langkah 1: Persiapan Blueprint Laporan

### 🎯 Peran
Membuat "kertas laporan" untuk **SEMUA barang SALE** sebelum toko buka.

### 🤔 Kenapa?
Kita perlu tempat untuk mencatat transaksi setiap barang. Dengan menyiapkan struktur data di awal, proses update menjadi sangat mudah (tinggal cari object yang sesuai, lalu ubah propertinya).

### 📝 Contoh Konkret

**Input:**
```javascript
const listBarang = [
  ['Sepatu Stacattu', 1500000, 10],
  ['Baju Zoro', 500000, 2],
  ['Sweater Uniklooh', 175000, 1]
];
```

**Proses:**
```javascript
const salesReport = [];

for (const [productName, price, stock] of listBarang) {
  salesReport.push({
    product: productName,
    shoppers: [],
    leftOver: stock,
    totalProfit: 0
  });
}
```

**Output (Blueprint Awal):**
```javascript
[
  { product: 'Sepatu Stacattu', shoppers: [], leftOver: 10, totalProfit: 0 },
  { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
  { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
]
```

> [!TIP]
> **Teknik: Array Destructuring**
> Menggunakan `[productName, price, stock]` membuat kode jauh lebih bersih dibanding `element[0]`, `element[1]`, `element[2]`.

---

<a name="langkah-2"></a>
## 🔄 Langkah 2: Proses Antrean Pembeli

### 🎯 Peran
Membaca antrean pembeli **satu per satu** secara berurutan (FIFO).

### 🤔 Kenapa?
Antrean di dunia nyata diproses berurutan. Pembeli pertama dilayani dulu, baru pembeli kedua, dan seterusnya.

### 📝 Contoh Konkret

**Input:**
```javascript
const shoppers = [
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
];
```

**Proses:**
```javascript
for (const { name, product, amount } of shoppers) {
  // Proses pembeli satu per satu
  console.log(`Melayani: ${name}, ingin beli ${amount} ${product}`);
}
```

**Output Console:**
```
Melayani: Windi, ingin beli 2 Sepatu Stacattu
Melayani: Vanessa, ingin beli 3 Sepatu Stacattu
Melayani: Rani, ingin beli 2 Sweater Uniklooh
```

> [!TIP]
> **Teknik: Object Destructuring**
> Menggunakan `{ name, product, amount }` langsung membongkar properti object, membuat kode lebih ringkas.

---

<a name="langkah-3"></a>
## 🔍 Langkah 3: Pencocokan Barang

### 🎯 Peran
Mencari "kertas laporan" barang yang sesuai dengan barang incaran pembeli.

### 🤔 Kenapa?
Setiap pembeli punya target barang tertentu. Kita harus menemukan object laporan yang `product`-nya cocok dengan `product` yang diminta pembeli.

### 📝 Contoh Konkret

**Pembeli Saat Ini:**
```javascript
{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }
```

**Proses Pencarian:**
```javascript
for (let i = 0; i < salesReport.length; i++) {
  const reportItem = salesReport[i];
  
  if (reportItem.product === product) {
    console.log(`✅ Barang ditemukan di index ${i}`);
    // Lanjut ke validasi stok
  }
}
```

**Hasil:**
```
✅ Barang ditemukan di index 0
```

**State salesReport[0]:**
```javascript
{
  product: 'Sepatu Stacattu',
  shoppers: [],
  leftOver: 10,
  totalProfit: 0
}
```

> [!NOTE]
> **Kenapa pakai loop?**
> Kita tidak tahu posisi barang di array. Loop membantu kita memeriksa satu per satu hingga menemukan yang cocok.

---

<a name="langkah-4"></a>
## ✅ Langkah 4: Validasi Stok

### 🎯 Peran
Mengecek apakah stok barang mencukupi untuk jumlah yang diminta pembeli.

### 🤔 Kenapa?
Kita tidak bisa menjual barang yang stoknya tidak cukup. Validasi ini mencegah stok menjadi negatif.

### 📝 Contoh Konkret

**Skenario 1: Stok Cukup (Windi)**
```javascript
// Pembeli: Windi ingin beli 2 Sepatu
// State: leftOver = 10, amount = 2

if (reportItem.leftOver >= amount) {
  console.log('✅ Stok cukup, transaksi bisa dilanjutkan');
  // 10 >= 2 → TRUE
}
```

**Skenario 2: Stok Kurang (Rani)**
```javascript
// Pembeli: Rani ingin beli 2 Sweater
// State: leftOver = 1, amount = 2

if (reportItem.leftOver >= amount) {
  console.log('✅ Stok cukup');
} else {
  console.log('❌ Stok tidak cukup, pembeli dilewati');
  // 1 >= 2 → FALSE
}
```

### 📊 Tabel Validasi

| Pembeli | Barang | leftOver | amount | Validasi | Hasil |
|---------|--------|----------|--------|----------|-------|
| Windi | Sepatu | 10 | 2 | 10 >= 2 | ✅ Lanjut transaksi |
| Vanessa | Sepatu | 8 | 3 | 8 >= 3 | ✅ Lanjut transaksi |
| Rani | Sweater | 1 | 2 | 1 >= 2 | ❌ Dilewati |

> [!WARNING]
> **Jangan lupa validasi!**
> Tanpa validasi ini, stok bisa menjadi negatif dan data menjadi tidak valid.

---

<a name="langkah-5"></a>
## 💰 Langkah 5: Transaksi (Update Data)

### 🎯 Peran
Jika validasi berhasil, update 3 properti: `shoppers`, `leftOver`, dan `totalProfit`.

### 🤔 Kenapa 3 Properti?
1. **shoppers** → Catat siapa yang berhasil membeli
2. **leftOver** → Kurangi stok sesuai jumlah terjual
3. **totalProfit** → Tambah keuntungan (harga × jumlah)

### 📝 Contoh Konkret (Transaksi Windi)

**State Sebelum:**
```javascript
{
  product: 'Sepatu Stacattu',
  shoppers: [],
  leftOver: 10,
  totalProfit: 0
}
```

**Proses:**
```javascript
// Pembeli: Windi, amount: 2, harga: 1500000

reportItem.shoppers.push(name);           // Push 'Windi'
reportItem.leftOver -= amount;            // 10 - 2 = 8
reportItem.totalProfit += price * amount; // 0 + (1500000 × 2) = 3000000
```

**State Sesudah:**
```javascript
{
  product: 'Sepatu Stacattu',
  shoppers: ['Windi'],
  leftOver: 8,
  totalProfit: 3000000
}
```

### 📊 Tracking Perubahan

| Transaksi | Pembeli | amount | leftOver (before) | leftOver (after) | totalProfit (before) | totalProfit (after) |
|-----------|---------|--------|-------------------|------------------|----------------------|---------------------|
| 1 | Windi | 2 | 10 | 8 | 0 | 3,000,000 |
| 2 | Vanessa | 3 | 8 | 5 | 3,000,000 | 7,500,000 |

> [!TIP]
> **Rumus Profit:**
> ```javascript
> totalProfit += harga × jumlah_terjual
> ```
> Ini adalah akumulasi (+=), bukan assignment (=), karena bisa ada banyak pembeli untuk barang yang sama.

---

<a name="simulasi-lengkap"></a>
## 🎬 Simulasi Lengkap (Walkthrough)

### Input Data

```javascript
const shoppers = [
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
];
```

### Timeline Transaksi

#### ⏱️ T0: State Awal (Setelah Blueprint)

```javascript
[
  { product: 'Sepatu Stacattu', shoppers: [], leftOver: 10, totalProfit: 0 },
  { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
  { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
]
```

#### ⏱️ T1: Windi Membeli 2 Sepatu

**Validasi:** `10 >= 2` ✅  
**Update:**
```javascript
shoppers: ['Windi']
leftOver: 10 - 2 = 8
totalProfit: 0 + (1500000 × 2) = 3000000
```

#### ⏱️ T2: Vanessa Membeli 3 Sepatu

**Validasi:** `8 >= 3` ✅  
**Update:**
```javascript
shoppers: ['Windi', 'Vanessa']
leftOver: 8 - 3 = 5
totalProfit: 3000000 + (1500000 × 3) = 7500000
```

#### ⏱️ T3: Rani Gagal Membeli 2 Sweater

**Validasi:** `1 >= 2` ❌  
**Update:** Tidak ada (pembeli dilewati)

#### ⏱️ T4: State Akhir

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

---

## 💡 Key Takeaways

> [!TIP]
> **Pembelajaran Utama:**
> 1. **Syarat Pembelian** → Hanya berdasarkan stok (`leftOver >= amount`), bukan uang
> 2. **Blueprint First** → Siapkan struktur data lengkap sebelum proses transaksi
> 3. **Destructuring** → Gunakan untuk membuat kode lebih bersih dan self-documenting
> 4. **Validasi Wajib** → Cek stok sebelum update untuk mencegah data invalid
> 5. **Akumulasi Profit** → Gunakan `+=` karena bisa ada banyak pembeli untuk satu barang

> [!NOTE]
> **Contoh Konkret = Tahan Lupa**
> Setiap langkah disertai contoh angka nyata agar logika tidak mudah terlupakan. Ketika lupa, cukup trace ulang dengan data konkret!

---

## 🔗 Navigasi

⬅️ [Kembali: Visualisasi & Blueprint](01-visualisasi-dan-blueprint.md)  
➡️ [Lanjut: Pendekatan Bertahap](03-pendekatan-bertahap.md)  
🔝 [Kembali ke Atas](#daftar-isi)
