# 🔍 Analisis & Solusi Bertahap (V1)

### ✨ _Dari visualisasi pola ke kode pertama yang lolos test — langkah demi langkah_

> 🎯 **Tujuan:** Memahami cara menemukan rumus dari tabel pola, membangun algoritma yang tidak mudah lupa, lalu menulisnya menjadi kode secara bertahap.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧠 | [Algoritma Tahan Lupa](#algoritma-tahan-lupa) | 4 langkah logika + alasan "kenapa" + contoh angka |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint-kamus-variabel) | Kerangka kode kosong + tabel naming convention |
| 🔨 | [Membangun V1 Step-by-Step](#membangun-v1) | Kode dibangun bertahap: validasi → setup → loop |
| ⚠️ | [Gotcha: Primitive vs Reference](#gotcha-primitive-vs-reference) | Jebakan yang hampir membuat bug tersembunyi |
| ✅ | [Kode Final V1](#kode-final-v1) | Full code siap jalankan |

---

<a name="algoritma-tahan-lupa"></a>
## 🧠 Algoritma Tahan Lupa

> [!NOTE]
> Setiap langkah di bawah memiliki 3 elemen: **label peran** (apa), **penjelasan kenapa**, dan **contoh angka konkret**. Tujuannya agar kamu bisa merekonstruksi logika ini kapan saja tanpa harus menghafal kode.

Sebelum membaca bagian ini, pastikan kamu sudah melihat [Simulasi Visual di README](../README.md#simulasi-visual) untuk gambaran proses belanja secara keseluruhan.

### Langkah 1 — 🚫 Guard Clauses (Tolak yang Tidak Berhak)

**Kenapa:** Sebelum masuk ke logika belanja, kita harus menyaring input yang tidak valid. Ini mencegah proses yang sia-sia dan membuat kode lebih aman.

**Contoh:**
- `memberId = ""` → langsung return pesan tolak (bukan member)
- `money = 30000` → langsung return pesan tolak (< 50.000 minimum)

### Langkah 2 — 📦 Siapkan Data Master & Wadah Output

**Kenapa:** Kita butuh dua hal — *daftar barang* untuk diiterasi, dan *wadah kosong* untuk menampung hasil belanja. Wadah dibuat di awal agar bisa diisi selama proses loop.

**Contoh:** Dengan `money = 700000`, objek result awal terlihat seperti:
```
memberId    → "MBR001"
money       → 700000        (uang awal, tidak berubah)
listPurchased → []           (keranjang kosong)
changeMoney → 700000        (sisa uang, akan berkurang)
```

### Langkah 3 — 🔄 Loop: Cek Setiap Barang Secara Berurutan

**Kenapa:** Barang sudah diurutkan dari termahal ke termurah (*greedy order*). Kita cek satu per satu — jika sisa uang ≥ harga barang, beli. Jika tidak, lewati dan lanjut ke barang berikutnya.

**Contoh:** Iterasi ke-2 (Baju Zoro, harga 500.000):
- Sisa uang saat ini = 700.000
- 700.000 ≥ 500.000? → **Ya, beli!**
- Sisa uang setelah beli = 700.000 − 500.000 = **200.000**

### Langkah 4 — 📤 Return Hasil Akhir

**Kenapa:** Setelah semua barang selesai dicek, objek `result` sudah berisi data lengkap — tinggal di-return sebagai output fungsi.

---

<a name="blueprint-kamus-variabel"></a>
## 🗺️ Blueprint & Kamus Variabel

### A. Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Pakai | Alasan |
|----------------|----------------|-----------------|--------|
| Array data barang | `products` | `arr`, `data`, `items` | Eksplisit menunjukkan isi: kumpulan produk |
| Nama barang (key di objek) | `name` | `productName` | Wadahnya sudah `products`, jadi `product.name` cukup jelas tanpa redundansi |
| Harga barang | `price` | `val`, `harga`, `v` | Best practice: bahasa Inggris, spesifik |
| Keranjang belanja | `listPurchased` | `cart`, `bought` | Sesuai spesifikasi output soal |
| Sisa uang | `changeMoney` | `sisa`, `remaining` | Sesuai spesifikasi output soal |
| Objek hasil akhir | `result` | `obj`, `output`, `res` | Deskriptif, umum dipakai untuk return value |

### B. Kerangka Kode (Mental Model: Validasi → Setup → Loop → Return)

```javascript
// 🗺️ KERANGKA KODE — shoppingTime
function shoppingTime(memberId, money) {
  // [BAGIAN 1] → Guard Clauses: tolak non-member & uang kurang
  // [BAGIAN 2] → Setup: data barang + objek result kosong
  // [BAGIAN 3] → Loop: cek tiap barang, beli jika mampu
  // [BAGIAN 4] → Return: kembalikan objek result
}
```

> [!TIP]
> Kerangka ini bisa kamu tulis duluan di editor sebelum mengisi kode. Dengan begitu kamu punya **peta jalan** yang jelas dan tidak bingung harus mulai dari mana.

---

<a name="membangun-v1"></a>
## 🔨 Membangun V1 Step-by-Step

### Step 1: Guard Clauses (Isi Bagian 1)

Tangani validasi dulu sebelum masuk logika utama:

```javascript
const shoppingTime = (memberId, money) => {
  if (!memberId) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }

  if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  }
};
```

### Step 2: Setup Data & Objek Result (Isi Bagian 2–3)

Siapkan array barang, keranjang kosong, lalu gabungkan ke objek `result`:

```javascript
  const products = [
    { productName: 'Sepatu Stacattu', price: 1500000 },
    { productName: 'Baju Zoro', price: 500000 },
    { productName: 'Baju H&N', price: 250000 },
    { productName: 'Sweater Uniklooh', price: 175000 },
    { productName: 'Casing Handphone', price: 50000 },
  ];

  const listPurchased = [];

  const result = {
    memberId,
    money,
    listPurchased,
    changeMoney: money,
  };
```

<a name="gotcha-primitive-vs-reference"></a>
### ⚠️ Gotcha: Primitive vs Reference

> [!CAUTION]
> **Jebakan di kode Step 2!** Awalnya kita menulis `let changeMoney = money` sebagai variabel terpisah, lalu memasukkannya ke objek `result`. Masalahnya:
>
> - `changeMoney` adalah **primitive** (number) → disalin *by value* ke `result`
> - Jika nanti kita kurangi variabel `changeMoney`, **nilai di dalam `result.changeMoney` TIDAK ikut berubah!**
> - Sebaliknya, `listPurchased` adalah **Array** (reference type) → saat di-push, isi di `result` juga ikut update
>
> **Solusi:** Manipulasi langsung `result.changeMoney` (bukan variabel lepas) agar perubahan tercatat di objek output.

### Step 3: Looping Seleksi Belanja (Isi Bagian 3–4)

Iterasi setiap barang, beli jika sisa uang cukup — langsung manipulasi properti `result`:

```javascript
  for (const product of products) {
    if (result.changeMoney >= product.price) {
      result.listPurchased.push(product.productName);
      result.changeMoney -= product.price;
    }
  }

  return result;
```

---

<a name="kode-final-v1"></a>
## ✅ Kode Final V1

Gabungan lengkap dari semua step di atas — **V1: Array of Objects + Mutasi Objek Result**:

```javascript
const shoppingTime = (memberId, money) => {
  // 1. Guard Clauses
  if (!memberId) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }

  if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup';
  }

  // 2. Master data barang
  const products = [
    { productName: 'Sepatu Stacattu', price: 1500000 },
    { productName: 'Baju Zoro', price: 500000 },
    { productName: 'Baju H&N', price: 250000 },
    { productName: 'Sweater Uniklooh', price: 175000 },
    { productName: 'Casing Handphone', price: 50000 },
  ];

  // 3. Inisialisasi objek result
  const listPurchased = [];

  const result = {
    memberId,
    money,
    listPurchased,
    changeMoney: money,
  };

  // 4. Seleksi belanja greedy
  for (const product of products) {
    if (result.changeMoney >= product.price) {
      result.listPurchased.push(product.productName);
      result.changeMoney -= product.price;
    }
  }

  return result;
};
```

---

⬅️ [Kembali ke README](../README.md) · ➡️ [Evolusi & Clean Code (V2–V4)](02-evolusi-dan-clean-code.md)
