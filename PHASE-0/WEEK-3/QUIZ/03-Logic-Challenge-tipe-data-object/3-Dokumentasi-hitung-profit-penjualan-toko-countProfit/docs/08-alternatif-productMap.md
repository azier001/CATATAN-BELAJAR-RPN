# 📚 countProfit - PART 8: ALTERNATIF `productMap`

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            ⚡ PART 8: ALTERNATIF productMap ⚡                           ║
║                                                                          ║
║           Pendekatan Paling Optimal dengan O(n + m)                      ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-orange)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)
![Performance](https://img.shields.io/badge/Performance-⚡%20Paling%20Optimal-brightgreen)

---

## 🧭 Quick Jump

| 📖 Konsep | ✅ Kode | 🧪 Test Cases | 📖 Algoritma | ⚠️ Pitfalls |
|:---------:|:-------:|:-------------:|:------------:|:-----------:|
| [Jump](#-kenapa-versi-ini-paling-optimal) | [Jump](#-kode-alternatif-productmap) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) | [Jump](#-pitfalls-jebakan-umum) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami kenapa versi ini lebih efisien dari semua versi sebelumnya
- ✅ Tahu apa itu O(1) lookup dan kenapa penting
- ✅ Paham cara kerja `productMap` sebagai lookup table
- ✅ Mengerti perbedaan O(n × m) vs O(n + m)

---

## 📖 Kenapa Versi Ini Paling Optimal?

Semua versi sebelumnya menggunakan **nested loop** — untuk setiap produk, loop semua shoppers:

```
Untuk setiap produk (n kali):
  filter semua shoppers (m kali)
  → Total: n × m operasi = O(n × m)
```

Versi `productMap` memisahkan menjadi **2 loop terpisah**:

```
Loop 1 — products (n kali): buat report awal + productMap
Loop 2 — shoppers (m kali): lookup produk via productMap O(1)
→ Total: n + m operasi = O(n + m)
```

### Perbandingan dengan Angka Nyata

```
Misal: 100 produk, 10.000 shoppers

O(n × m) = 100 × 10.000 = 1.000.000 operasi
O(n + m) = 100 + 10.000 =    10.100 operasi

→ Versi productMap ~99x lebih cepat!
```

---

## ✅ Kode Alternatif `productMap`

```javascript
function countProfit(shoppers) {

  const products = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ]

  if (!shoppers.length) return []

  const report = []
  const productMap = {}

  // Step 1: buat report awal + productMap
  for (let i = 0; i < products.length; i++) {
    const [name, price, stock] = products[i]

    report.push({
      product: name,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0
    })

    productMap[name] = {
      index: i,
      price
    }
  }

  // Step 2: proses shoppers sekali
  for (const { name, product, amount } of shoppers) {

    const productInfo = productMap[product]

    if (!productInfo) continue

    const item = report[productInfo.index]

    if (item.leftOver >= amount) {
      item.leftOver -= amount
      item.shoppers.push(name)
      item.totalProfit += productInfo.price * amount
    }
  }

  return report
}
```

### Perubahan dari Versi Refactoring:

| Sebelum | Sesudah | Keterangan |
|---------|---------|------------|
| Nested loop | 2 loop terpisah | Strategi utama yang berubah |
| `filter` per produk | `productMap` lookup O(1) | Tidak perlu filter lagi |
| Inner loop proses shoppers | Step 2 loop shoppers sekali | Shoppers hanya diloop satu kali |
| Object baru per iterasi | Mutasi `item` via referensi | `item` adalah referensi ke `report` |

---

## 🧪 Test Cases

```javascript
// Edge case — input kosong
console.log(countProfit([]));
// → []
```

```javascript
// Normal case 1 — Rani batal beli karena stock kurang
console.log(countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 2 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }
]));
// → [
//     { product: 'Sepatu Stacattu', shoppers: ['Windi', 'Vanessa'], leftOver: 5, totalProfit: 7500000 },
//     { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
//     { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
//   ]
```

```javascript
// Normal case 2 — Vanessa batal beli karena stock habis setelah Windi beli
console.log(countProfit([
  { name: 'Windi', product: 'Sepatu Stacattu', amount: 8 },
  { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10 },
  { name: 'Rani', product: 'Sweater Uniklooh', amount: 1 },
  { name: 'Devi', product: 'Baju Zoro', amount: 1 },
  { name: 'Lisa', product: 'Baju Zoro', amount: 1 }
]));
// → [
//     { product: 'Sepatu Stacattu', shoppers: ['Windi'], leftOver: 2, totalProfit: 12000000 },
//     { product: 'Baju Zoro', shoppers: ['Devi', 'Lisa'], leftOver: 0, totalProfit: 1000000 },
//     { product: 'Sweater Uniklooh', shoppers: ['Rani'], leftOver: 0, totalProfit: 175000 }
//   ]
```

```javascript
// Normal case 3 — produk tidak ada di toko
console.log(countProfit([{ name: 'Windi', product: 'Sepatu Naiki', amount: 5 }]));
// → [
//     { product: 'Sepatu Stacattu', shoppers: [], leftOver: 10, totalProfit: 0 },
//     { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
//     { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
//   ]
```

---

## 📖 Ringkasan Algoritma

### **Konsep Inti:**
```
Jika shoppers kosong → return []

Step 1 — Loop products sekali:
  Buat report awal (array of object)
  Buat productMap (object untuk lookup cepat)

Step 2 — Loop shoppers sekali:
  Lookup produk di productMap → O(1)
  Jika produk tidak ada → skip (continue)
  Jika stock cukup → update report langsung via referensi

Return report
```

---

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function countProfit(shoppers)`
   - `shoppers` — array of object `{ name, product, amount }`
   - **return** — array of object `{ product, shoppers, leftOver, totalProfit }`

#### 🛡️ Guard Clause:

2. **`if (!shoppers.length) return []`**
   - Jika `shoppers` kosong → langsung return `[]`

#### 🗂️ Inisialisasi:

3. **`const report = []`** — array hasil akhir

4. **`const productMap = {}`** — object kosong untuk lookup cepat

#### 🔄 Step 1 — `for (let i = 0; i < products.length; i++)`:

5. **Pakai `for` biasa karena butuh index `i`**
   - Destructuring `[name, price, stock]` dari setiap produk

6. **`report.push({ product: name, shoppers: [], leftOver: stock, totalProfit: 0 })`**
   - Buat object awal dengan nilai default untuk setiap produk

7. **`productMap[name] = { index: i, price }`**
   - Simpan `index` dan `price` untuk setiap produk

   Hasil `productMap` setelah Step 1:
   ```javascript
   {
     'Sepatu Stacattu': { index: 0, price: 1500000 },
     'Baju Zoro':       { index: 1, price: 500000 },
     'Sweater Uniklooh':{ index: 2, price: 175000 }
   }
   ```

#### 🔄 Step 2 — `for (const { name, product, amount } of shoppers)`:

8. **`const productInfo = productMap[product]`**
   - Lookup O(1) — langsung ketemu tanpa perlu loop!

9. **`if (!productInfo) continue`**
   - Produk tidak ada di toko → skip ke shopper berikutnya

10. **`const item = report[productInfo.index]`**
    - Akses object di `report` langsung via index — O(1)
    - `item` adalah **referensi** ke object di `report`

11. **`if (item.leftOver >= amount)` — shopper berhasil beli:**
    - `item.leftOver -= amount`
    - `item.shoppers.push(name)`
    - `item.totalProfit += productInfo.price * amount`
    - Perubahan pada `item` otomatis mengubah `report` karena referensi

#### 🔵 Setelah Semua Loop:

12. **`return report`**

---

### **Visualisasi `productMap`:**

```
┌─────────────────────────────────────────────────────────────────────┐
│  Setelah Step 1:                                                    │
│                                                                     │
│  report[0] = { product: 'Sepatu Stacattu', shoppers: [],           │
│                leftOver: 10, totalProfit: 0 }                       │
│                                                                     │
│  productMap = {                                                     │
│    'Sepatu Stacattu': { index: 0, price: 1500000 }  ←──┐           │
│    'Baju Zoro':       { index: 1, price: 500000 }       │           │
│    'Sweater Uniklooh':{ index: 2, price: 175000 }       │           │
│  }                                                      │           │
│                                                         │           │
│  Step 2 — Windi beli 'Sepatu Stacattu' (amount=8):      │           │
│    productMap['Sepatu Stacattu'] ───────────────────────┘           │
│    → { index: 0, price: 1500000 }                                   │
│    → item = report[0] (referensi langsung!)                         │
│    → item.leftOver = 10 - 8 = 2                                     │
│    → item.shoppers = ['Windi']                                      │
│    → item.totalProfit = 12.000.000                                  │
│                                                                     │
│  report[0] sekarang:                                                │
│  { product: 'Sepatu Stacattu', shoppers: ['Windi'],                 │
│    leftOver: 2, totalProfit: 12000000 }                             │
└─────────────────────────────────────────────────────────────────────┘
```

---

### **Keywords:**
- 🗺️ **`productMap`** — object untuk lookup produk secara cepat O(1)
- 📍 **`index`** — posisi produk di `report`, dipakai untuk akses langsung
- ⏭️ **`continue`** — skip iterasi saat produk tidak ditemukan
- 🔗 **Referensi** — `item` adalah referensi ke object di `report`, bukan copy
- ⚡ **O(1) lookup** — akses data via key object, tidak perlu loop

---

### **Kompleksitas:**

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n + m)** | n = jumlah produk, m = jumlah shoppers |
| Memori | **O(n)** | report + productMap masing-masing menyimpan n item |

---

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa bahwa `item` adalah referensi**
```javascript
// item adalah REFERENSI ke object di report
// perubahan pada item otomatis mengubah report ✅
const item = report[productInfo.index]
item.leftOver -= amount

// ❌ Jangan buat copy dengan spread — report tidak akan berubah!
const item = { ...report[productInfo.index] }
item.leftOver -= amount // report TIDAK berubah!
```

**2) ❌ Lupa handle produk yang tidak ada**
```javascript
// ❌ SALAH — productInfo bisa undefined jika produk tidak ada di toko
const productInfo = productMap[product]
const item = report[productInfo.index] // TypeError jika undefined!

// ✅ BENAR — cek dulu sebelum akses
const productInfo = productMap[product]
if (!productInfo) continue
const item = report[productInfo.index]
```

**3) ❌ Pakai `for...of` saat butuh index**
```javascript
// ❌ KURANG TEPAT — for...of tidak punya akses ke index secara langsung
for (const [name, price, stock] of products) {
  productMap[name] = { index: ???, price } // index tidak tersedia!
}

// ✅ BENAR — pakai for biasa agar punya akses ke index i
for (let i = 0; i < products.length; i++) {
  const [name, price, stock] = products[i]
  productMap[name] = { index: i, price }
}
```

---

### **💡 Insight Penting:**

> **Kenapa versi ini lebih efisien dari versi lain?**
> Semua versi sebelumnya pakai nested loop — untuk setiap produk, loop semua shoppers. Ini O(n × m). Versi ini memisahkan 2 loop: pertama loop products untuk buat `productMap`, lalu loop shoppers sekali dan langsung akses produk via `productMap` di O(1). Total jadi O(n + m).

> **Apa itu O(1) lookup?**
> Akses data via key di JavaScript object (seperti `productMap['Sepatu Stacattu']`) selalu konstan — tidak peduli berapa banyak item di object, kecepatannya sama. Inilah yang membuat versi ini lebih efisien.

> **Kenapa `item` bisa langsung mengubah `report`?**
> Karena `item` menyimpan referensi ke object di `report`, bukan copy-nya. Jadi setiap perubahan pada `item` otomatis tercermin di `report`. Ini adalah konsep pass by reference — yang sebelumnya jadi sumber bug, di sini justru dimanfaatkan dengan sengaja!

> **Kapan versi ini paling berguna?**
> Ketika jumlah produk dan shoppers sangat besar. Untuk data kecil seperti di soal ini, perbedaan performanya tidak terasa. Tapi di aplikasi nyata dengan ribuan produk dan jutaan transaksi, O(n + m) jauh lebih cepat dari O(n × m).

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 7: Alternatif map + filter + reduce](07-alternatif-map-filter-reduce.md)**
- **📖 [Lanjut ke Part 9: Perbandingan & Kesimpulan →](09-perbandingan-dan-kesimpulan.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
