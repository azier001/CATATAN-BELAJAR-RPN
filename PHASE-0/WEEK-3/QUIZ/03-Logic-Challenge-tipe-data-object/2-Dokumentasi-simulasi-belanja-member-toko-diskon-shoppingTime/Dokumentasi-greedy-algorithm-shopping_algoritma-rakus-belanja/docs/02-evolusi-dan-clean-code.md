# 🔄 Evolusi & Clean Code (V2–V4)

### ✨ _Dari eksplorasi struktur data alternatif hingga kode ES6 yang sleek dan fungsional_

> 🎯 **Tujuan:** Melihat bagaimana satu solusi bisa berevolusi menjadi beberapa versi, memahami trade-off tiap pendekatan, dan menguasai teknik clean code ES6.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [V2: Object Dictionary](#v2-object-dictionary) | Eksplorasi `for...in` dengan Plain Object |
| ✨ | [V3: Clean ES6](#v3-clean-es6) | Shorthand Property + Object Destructuring |
| 🏷️ | [Naming Convention](#naming-convention) | Tabel penamaan variabel: generic vs deskriptif |
| 🔎 | [V4: Review Kode Mandiri](#v4-review-kode-mandiri) | Kode buatan user + review + refactoring |
| ⚖️ | [Perbandingan Arsitektur](#perbandingan-arsitektur) | Mutasi objek vs Functional Return |

---

<a name="v2-object-dictionary"></a>
## 📖 V2: Object Dictionary + `for...in`

Bagaimana jika data barang bukan Array of Objects, melainkan **Plain Object** (dictionary)?

```javascript
// Struktur data alternatif: key = nama, value = harga
const products = {
  'Sepatu Stacattu': 1500000,
  'Baju Zoro': 500000,
  'Baju H&N': 250000,
  'Sweater Uniklooh': 175000,
  'Casing Handphone': 50000,
};
```

Untuk mengiterasi objek ini, kita tidak bisa pakai `for...of` (khusus iterable seperti Array). Solusinya: **`for...in`** yang mengiterasi *key* dari objek.

```javascript
function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  if (money < 50000) return 'Mohon maaf, uang tidak cukup';

  const products = {
    'Sepatu Stacattu': 1500000,
    'Baju Zoro': 500000,
    'Baju H&N': 250000,
    'Sweater Uniklooh': 175000,
    'Casing Handphone': 50000,
  };

  const result = {
    memberId,
    money,
    listPurchased: [],
    changeMoney: money,
  };

  // key = nama barang, products[key] = harga
  for (const key in products) {
    if (result.changeMoney >= products[key]) {
      result.listPurchased.push(key);
      result.changeMoney -= products[key];
    }
  }

  return result;
}
```

> [!NOTE]
> **`for...of`** → iterasi *value* dari iterable (Array, String, Map, Set)
> **`for...in`** → iterasi *key/properti* dari objek biasa
> Mengakses value di dalam loop `for...in` wajib menggunakan **bracket notation** `products[key]`, bukan dot notation `products.key`.

---

<a name="v3-clean-es6"></a>
## ✨ V3: Clean ES6 — Shorthand + Destructuring

V1 sudah benar secara logika, tapi ada dua "bau kode" yang bisa dibersihkan:

**Masalah 1 — Penulisan berulang di objek:**
`memberId: memberId` dan `money: money` → bisa dipendekkan dengan **Shorthand Property Name** ES6.

**Masalah 2 — Akses berulang via `product.`:**
`product.price`, `product.productName` → bisa dibongkar langsung dengan **Object Destructuring** di parameter loop.

Hasil akhir setelah kedua teknik diterapkan + key `productName` dipendekkan jadi `name`:

```javascript
function shoppingTime(memberId, money) {
  // 1. Guard Clauses
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  if (money < 50000) return 'Mohon maaf, uang tidak cukup';

  // 2. Master Data (key dipendekkan: productName → name)
  const products = [
    { name: 'Sepatu Stacattu', price: 1500000 },
    { name: 'Baju Zoro', price: 500000 },
    { name: 'Baju H&N', price: 250000 },
    { name: 'Sweater Uniklooh', price: 175000 },
    { name: 'Casing Handphone', price: 50000 }
  ];

  // 3. Shorthand Property (memberId = memberId: memberId)
  const result = {
    memberId,
    money,
    listPurchased: [],
    changeMoney: money
  };

  // 4. Destructuring langsung di parameter loop
  for (const { name, price } of products) {
    if (result.changeMoney >= price) {
      result.listPurchased.push(name);
      result.changeMoney -= price;
    }
  }

  return result;
}
```

> [!TIP]
> **Destructuring bukan sekadar mempersingkat** — ia juga **memperjelas fokus data**. Saat kamu menulis `{ name, price }`, pembaca langsung tahu: "oh, di loop ini kita hanya peduli nama dan harga." Tanpa harus membaca seluruh body loop.

---

<a name="naming-convention"></a>
## 🏷️ Naming Convention

Penamaan variabel yang deskriptif adalah investasi jangka panjang. Berikut evaluasi dari sesi mentoring:

| Peran Variabel | ❌ Generic | ✅ Deskriptif | Alasan |
|----------------|-----------|--------------|--------|
| Iterator barang di `for...in` | `key`, `k`, `i` | `productName` | Eksplisit: isinya nama identitas barang |
| Harga barang | `val`, `v`, `harga` | `price` | Spesifik + best practice bahasa Inggris |
| Key di Array of Objects | `productName` | `name` | Wadahnya sudah `products`, jadi `product.name` tidak redundan |

> [!WARNING]
> Penamaan `key` di `for...in` sangat rawan *misread*. Programmer lain yang membaca `products[key]` harus membuka definisi `products` dulu untuk memahami bahwa `key` berisi nama barang. Gunakan `productName` agar langsung jelas.

---

<a name="v4-review-kode-mandiri"></a>
## 🔎 V4: Review Kode Mandiri

Sebelum sesi mentoring dimulai, kamu sudah menulis kode secara mandiri dan meminta di-review. Ini adalah momen menarik karena kamu sudah punya solusi sendiri — tinggal dievaluasi dan dipoles.

### Kode Original (Sebelum Refactoring)

Berikut kode yang kamu kirimkan apa adanya untuk di-review:

```javascript
function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja';

  if (money < 50000) return 'Mohon maaf, uang tidak cukup';

  const products = [
    { productName: 'Sepatu Stacattu', price: 1500000 },
    { productName: 'Baju Zoro', price: 500000 },
    { productName: 'Baju H&N', price: 250000 },
    { productName: 'Sweater Uniklooh', price: 175000 },
    { productName: 'Casing Handphone', price: 50000 },
  ];

  const sortedProducts = [...products].sort((a, b) => b.price - a.price);

  const listPurchased = [];
  let changeMoney = money;

  for (const { productName, price } of sortedProducts) {
    if (price <= changeMoney) {
      listPurchased.push(productName);
      changeMoney -= price;
    }
  }

  return {
    memberId,
    money,
    listPurchased,
    changeMoney,
  };
}
```

### Apresiasi (Pros) 👏

Kode di atas terbukti memiliki tingkat kematangan logic yang sangat tinggi (level ES6 lanjut):

1. **ES6 Natural Sejak Awal** — Guard Clauses, Object Destructuring di parameter loop (`const { productName, price }`), dan Shorthand Property di `return` sudah diterapkan tanpa perlu diajarkan.
2. **Immutable Mindset (Functional Style)** — Tidak membangun objek `result` di awal lalu memutasi propertinya. Sebaliknya, menggunakan *local state* (`listPurchased`, `changeMoney`), melakukan semua kalkulasi di atasnya, lalu baru mem-*pack* hasilnya ke objek di baris akhir (`return { ... }`). Ini adalah teknik yang sangat disukai di paradigma **Functional Programming**.
3. **Mencegah Mutasi Array Asli** — Saat melakukan sorting, kamu menduplikat array terlebih dahulu menggunakan spread operator `[...products]` agar array `products` asli tidak terkorupsi secara permanen oleh method `.sort()` yang bersifat *mutating*.

### Kritik Konstruktif (Cons) 🔧

Meskipun sangat bagus, ada dua ruang untuk perbaikan:

1. **Over-engineering pada Sorting:**
   Baris `const sortedProducts = [...products].sort(...)` memang aman jika data berasal dari API eksternal yang acak. Namun dalam challenge ini, data `products` adalah **data statis/hardcoded yang urutannya sudah diset** (dari 1,5jt turun ke 50rb). Menambahkan `.sort()` hanya menambah beban komputasi (*overhead O(n log n)*) secara sia-sia.

2. **Inkonsistensi Naming (Minor):**
   Properti `productName` di dalam array `products` terasa redundan. Jika nama wadahnya sudah "produk" (plural), isi di dalamnya cukup menggunakan key `name` saja — sehingga aksesnya menjadi `product.name` yang lebih bersih, bukan `product.productName`.

> [!CAUTION]
> **Kapan `.sort()` benar-benar dibutuhkan?** Hanya jika data bisa berubah-ubah urutannya (misal dari API/database). Untuk data hardcoded yang sudah terurut, sorting = overhead sia-sia + membuat pembaca kode bertanya *"memangnya datanya acak ya?"*

### Proses Refactoring

Kamu merespons ulasan di atas dengan permintaan: *"bantu refactoring kode saya dulu"*. Kita pun melakukan dua penyesuaian:
- ❌ **Buang** `[...products].sort(...)` → data sudah berurutan
- ❌ **Ganti** `productName` → `name` (lebih bersih)
- ✅ **Pertahankan** gaya arsitektur *Functional Return* dan *local state* ciptaanmu

### Kode Setelah Refactoring

```javascript
function shoppingTime(memberId, money) {
  // 1. Guard Clauses
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  if (money < 50000) return 'Mohon maaf, uang tidak cukup';

  // 2. Master Data (sudah berurutan secara hardcode, key diperpendek jadi 'name')
  const products = [
    { name: 'Sepatu Stacattu', price: 1500000 },
    { name: 'Baju Zoro', price: 500000 },
    { name: 'Baju H&N', price: 250000 },
    { name: 'Sweater Uniklooh', price: 175000 },
    { name: 'Casing Handphone', price: 50000 },
  ];

  // 3. Local State (penampung sementara gaya fungsional)
  const listPurchased = [];
  let changeMoney = money;

  // 4. Looping ES6 Destructuring
  for (const { name, price } of products) {
    if (price <= changeMoney) {
      listPurchased.push(name);
      changeMoney -= price;
    }
  }

  // 5. Kembalikan hasil menggunakan Object Shorthand di akhir kalkulasi
  return { memberId, money, listPurchased, changeMoney };
}
```

---

<a name="perbandingan-arsitektur"></a>
## ⚖️ Perbandingan Arsitektur: Mutasi vs Functional Return

V3 dan V4 menghasilkan output **identik**, tapi pendekatan internalnya sangat berbeda:

| Aspek | V3 (Mutasi Objek) | V4 (Functional Return) |
|-------|-------------------|----------------------|
| **Objek result** | Dibangun di awal, properti diubah-ubah | Dibangun di akhir sebagai `return { ... }` |
| **State selama loop** | `result.changeMoney -= price` | `changeMoney -= price` (variabel lokal) |
| **Gotcha primitive?** | Ya — harus hati-hati (lihat [file 01](01-analisis-dan-solusi-bertahap.md#gotcha-primitive-vs-reference)) | Tidak — karena objek baru dibuat di akhir |
| **Gaya** | Imperatif / OOP-like | Fungsional / Immutable |

> [!IMPORTANT]
> **Tidak ada yang "lebih benar"** — keduanya valid. V3 lebih eksplisit karena objek result terlihat sejak awal. V4 lebih aman dari bug mutasi karena objek baru dikonstruksi setelah semua kalkulasi selesai. Pilih sesuai preferensi tim.

---

### 📌 Key Takeaways

- **Hindari Over-engineering** — Jangan lakukan `.sort()` jika data sudah dijamin urutannya
- **Functional Return vs Mutasi** — Dua arsitektur berbeda, dua kelebihan berbeda
- **Destructuring = Kejelasan** — Bukan cuma singkat, tapi juga memperjelas "data apa yang dipakai"
- **Naming = Investasi** — `productName` → `name` kecil perubahannya, besar dampak keterbacaannya

---

⬅️ [Analisis & Solusi Bertahap (V1)](01-analisis-dan-solusi-bertahap.md) · ⬆️ [Kembali ke README](../README.md)
