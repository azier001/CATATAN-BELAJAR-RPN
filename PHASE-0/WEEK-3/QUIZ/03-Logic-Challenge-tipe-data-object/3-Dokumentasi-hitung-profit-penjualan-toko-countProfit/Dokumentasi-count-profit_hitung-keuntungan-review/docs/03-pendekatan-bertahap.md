# 🛠️ Pendekatan Bertahap (Solusi Pertama)

### ✨ _Membangun kode step-by-step melalui proses trial-error dan bimbingan mentor_

> 🎯 **Tujuan:** Memahami proses pembelajaran natural dari nol hingga solusi yang berhasil, termasuk kesalahan umum, feedback mentor, dan teknik-teknik yang diterapkan

---

<a name="daftar-isi"></a>
## 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🎬 | [Konteks Pembelajaran](#konteks) | Sesi mentoring dan pendekatan bertahap |
| 1️⃣ | [Step 1: Blueprint](#step-1) | Membuat kertas laporan dengan destructuring |
| 2️⃣ | [Step 2: Edge Case](#step-2) | Menangani toko sepi (shoppers kosong) |
| 3️⃣ | [Step 3: Pencarian](#step-3) | Nested loop untuk pencocokan barang |
| 4️⃣ | [Step 4: Transaksi](#step-4) | Update data dengan aliasing by reference |
| 5️⃣ | [Step 5: Profit](#step-5) | Menghitung keuntungan dengan parallel array |
| ✅ | [Solusi Final V1](#solusi-final) | Kode lengkap yang lulus semua test case |

---

<a name="konteks"></a>
## 🎬 Konteks Pembelajaran

> [!NOTE]
> **Tentang Dokumen Ini:**
> Dokumen ini merekam proses *step-by-step* (trial-error) saat membangun kode pertama dari logika yang sudah dibahas di fase analisis. Ini adalah **pembelajaran natural** dengan bimbingan mentor.

### 🎓 Pendekatan Mentoring

```
📚 Fase Pembelajaran
├─ Mentor memberikan petunjuk arah
├─ User mencoba implementasi
├─ Mentor memberikan feedback
├─ User memperbaiki kode
└─ Iterasi hingga berhasil
```

---

<a name="step-1"></a>
## 1️⃣ Step 1: Membuat Kertas Laporan (Blueprint)

### 🎯 Tantangan Mentor
> "Coba loop `listBarang` dan buat blueprint laporan untuk setiap barang."

### 📝 Percobaan Awal (User)

```javascript
for (const element of listBarang) {
  console.log(element);
}
```

**Output:**
```
['Sepatu Stacattu', 1500000, 10]
['Baju Zoro', 500000, 2]
['Sweater Uniklooh', 175000, 1]
```

### 💬 Feedback Mentor
> "Bagus! Sekarang kamu tahu `element[0]` adalah nama, `element[1]` adalah harga, dan `element[2]` adalah stok. Coba push object utuh ke dalam array `result`."

### ✨ Solusi User (Brilian!)

Alih-alih menggunakan index array (`element[0]`, `element[1]`), user secara inisiatif menggunakan **Array Destructuring**:

```javascript
const result = [];

for (const [productName, price, stock] of listBarang) {
  result.push({
    product: productName,
    shoppers: [],
    leftOver: stock,
    totalProfit: 0,
  });
}
```

> [!TIP]
> **Teknik: Array Destructuring**
> Menggunakan `[productName, price, stock]` membuat kode jauh lebih **clean** dan **self-documenting** dibanding magic number `[0], [1], [2]`.

### 📊 Hasil Step 1

```javascript
[
  { product: 'Sepatu Stacattu', shoppers: [], leftOver: 10, totalProfit: 0 },
  { product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },
  { product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }
]
```

---

<a name="step-2"></a>
## 2️⃣ Step 2: Menangani Edge Case

### 💬 Reminder Mentor
> "Jangan lupa test case paling bawah: `console.log(countProfit([]))`. Ada edge case di mana toko sepi (tidak ada pembeli)."

### 🤔 Analisis
Jika `shoppers` adalah array kosong, fungsi harus mengembalikan `[]` (bukan array berisi blueprint).

### ✅ Solusi

```javascript
function countProfit(shoppers) {
  if (shoppers.length === 0) return [];
  
  // ... kode lainnya
}
```

> [!IMPORTANT]
> **Edge Case Handling:**
> Selalu cek kondisi khusus di awal fungsi. Ini mencegah proses yang tidak perlu dan membuat kode lebih efisien.

---

<a name="step-3"></a>
## 3️⃣ Step 3: Pencarian Barang (Nested Loop)

### 🎯 Tantangan Mentor
> "Sekarang baca antrean `shoppers` dan cari kertas laporan barang yang cocok."

### 📝 Implementasi User

```javascript
for (const { name, product, amount } of shoppers) {
  for (let i = 0; i < result.length; i++) {
    if (result[i].product === product) {
      console.log(`Barang ketemu di index ke-${i}`);
    }
  }
}
```

### 🧪 Test dengan Data

**Input:**
```javascript
{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }
```

**Output Console:**
```
Barang ketemu di index ke-0
```

> [!NOTE]
> **Nested Loop Pattern:**
> Loop luar membaca pembeli, loop dalam mencari barang yang cocok. Ini adalah pola umum untuk pencocokan data.

### 📊 Complexity Analysis

```
Time Complexity: O(N × M)
├─ N = jumlah pembeli (shoppers.length)
└─ M = jumlah barang (result.length)

Untuk kasus ini: O(3 × 3) = O(9) operasi
```

---

<a name="step-4"></a>
## 4️⃣ Step 4: Eksekusi Transaksi

### 📝 Implementasi User (Pra-Final)

```javascript
for (const { name, product, amount } of shoppers) {
  for (let i = 0; i < result.length; i++) {
    const current = result[i]; // Aliasing by Reference
    
    if (current.product === product) {
      if (current.leftOver >= amount) {
        current.shoppers.push(name);
        current.leftOver -= amount;
        // Profit masih tertinggal di sini!
      }
    }
  }
}
```

### 💡 Teknik: Aliasing by Reference

> [!TIP]
> **Aliasing by Reference:**
> ```javascript
> const current = result[i];
> ```
> Ini **BUKAN** membuat object baru, melainkan membuat "jalan pintas" (alias) ke object asli. Perubahan pada `current` akan langsung mengubah `result[i]`.

### 📊 Visualisasi Reference

```
Memory Layout:
┌─────────────────┐
│ result[0]       │ ← Object asli di memory
└─────────────────┘
        ↑
        │ (reference)
        │
┌─────────────────┐
│ current         │ ← Alias (pointer ke object yang sama)
└─────────────────┘

current.shoppers.push('Windi')
↓
Langsung mengubah result[0].shoppers
```

---

<a name="step-5"></a>
## 5️⃣ Step 5: Menghitung Profit (Jebakan!)

### 💬 Pertanyaan Jebakan Mentor
> "Bagaimana cara menghitung `totalProfit`, padahal harga barang tidak kita simpan di dalam array `result`?"

### 🤔 Analisis Masalah

**State saat ini:**
```javascript
{
  product: 'Sepatu Stacattu',
  shoppers: ['Windi'],
  leftOver: 8,
  totalProfit: 0  // Masih 0, belum dihitung!
}
```

**Yang dibutuhkan:**
```javascript
totalProfit = harga × amount
```

**Masalah:**
Harga ada di `listBarang[i][1]`, tapi kita sedang berada di loop `result[i]`.

### 💡 Solusi: Parallel Array Magic

> [!NOTE]
> **Parallel Array Pattern:**
> Karena index `i` di `result` di-generate sejajar dengan index `listBarang`, kita bisa mengambil harga dengan menunjuk `listBarang[i][1]`.

```javascript
current.totalProfit += listBarang[i][1] * amount;
```

### 📊 Visualisasi Parallel Index

```
listBarang[0] → ['Sepatu Stacattu', 1500000, 10]
                                     ↑
                                     │ (ambil harga)
                                     │
result[0]     → { product: 'Sepatu Stacattu', ... }
                  ↑
                  │ (index yang sama)
```

> [!WARNING]
> **Fragile Logic Alert!**
> Pendekatan ini **rentan error** jika suatu hari ada sorting/filtering yang mengubah urutan array. Solusi lebih robust akan dibahas di [Evolusi Solusi](04-evolusi-solusi.md).

---

<a name="solusi-final"></a>
## ✅ Solusi Final V1 (100% Passed Test Cases)

```javascript
function countProfit(shoppers) {
  // [EDGE CASE] Toko sepi
  if (shoppers.length === 0) return [];

  // [DATA BARANG SALE] Hardcoded sesuai soal
  var listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1],
  ];

  // [PERSIAPAN BLUEPRINT] Kertas laporan awal
  const result = [];

  for (const [productName, price, stock] of listBarang) {
    result.push({
      product: productName,
      shoppers: [],
      leftOver: stock,
      totalProfit: 0,
    });
  }

  // [PROSES ANTREAN] Loop pembeli
  for (const { name, product, amount } of shoppers) {
    // [PENCARIAN & TRANSAKSI] Nested loop
    for (let i = 0; i < result.length; i++) {
      const current = result[i];

      if (current.product === product) {
        if (current.leftOver >= amount) {
          current.shoppers.push(name);
          current.leftOver -= amount;
          current.totalProfit += listBarang[i][1] * amount;
        }
      }
    }
  }

  return result;
}
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
> **Pembelajaran dari Sesi Ini:**
> 
> 1. **Destructuring Assignment** → Membongkar array/object dalam loop membuat kode jauh lebih bersih
>    ```javascript
>    const [nama, harga, stok] of array  // ✅ Clean
>    element[0], element[1], element[2]  // ❌ Magic number
>    ```
> 
> 2. **Aliasing by Reference** → `const current = result[i]` bukan membuat object baru, melainkan pointer ke object asli
>    ```javascript
>    const current = result[i];
>    current.shoppers.push(name);  // Langsung mengubah result[i]
>    ```
> 
> 3. **Parallel Arrays Magic** → Mengandalkan index yang sama dari 2 array berbeda
>    ```javascript
>    listBarang[i][1]  // Harga
>    result[i]         // Object laporan (index sejajar)
>    ```
>    ⚠️ **Fragile!** Rentan error jika ada sorting/filtering

> [!CAUTION]
> **Masalah yang Akan Diperbaiki:**
> Solusi V1 ini menggunakan **parallel array pattern** yang rentan error. Di [Evolusi Solusi](04-evolusi-solusi.md), kita akan refactor menjadi pendekatan yang lebih robust.

---

## 🔗 Navigasi

⬅️ [Kembali: Algoritma Tahan Lupa](02-algoritma-tahan-lupa.md)  
➡️ [Lanjut: Evolusi Solusi](04-evolusi-solusi.md)  
🔝 [Kembali ke Atas](#daftar-isi)
