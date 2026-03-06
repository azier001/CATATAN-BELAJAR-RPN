# 📚 countProfit - PART 3: KESALAHAN & PELAJARAN

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            ⚠️  PART 3: KESALAHAN & PELAJARAN ⚠️                         ║
║                                                                          ║
║           Kesalahan yang Ditemukan dan Apa yang Bisa Dipelajari          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| ❌ Kesalahan 1 | ❌ Kesalahan 2 | ❌ Kesalahan 3 | ❌ Kesalahan 4 | ❌ Kesalahan 5 | 💡 Ringkasan |
|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|:-----------:|
| [Jump](#-kesalahan-1--loop-yang-salah-jadi-kerangka-utama) | [Jump](#-kesalahan-2--totalprofit-dideklarasikan-di-dalam-loop) | [Jump](#-kesalahan-3--resultpush-di-luar-loop) | [Jump](#-kesalahan-4--pakai-satu-object-yang-sama-pass-by-reference) | [Jump](#-kesalahan-5--typo-nama-key) | [Jump](#-ringkasan-kesalahan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami 5 kesalahan umum yang sering terjadi di soal ini
- ✅ Tahu kenapa setiap kesalahan bisa menyebabkan bug
- ✅ Paham konsep Pass by Reference pada JavaScript object
- ✅ Bisa menghindari kesalahan yang sama di soal berikutnya

---

## ❌ Kesalahan 1 — Loop yang Salah Jadi Kerangka Utama

### Apa yang Terjadi

Di kode awal, loop `shoppers` dijadikan kerangka utama:

```javascript
// ❌ SALAH — output akan punya object per shopper, bukan per produk
for (const { name, product, amount } of shoppers) {
  newObject['product'] = product
  newObject['shoppers'] = names
  listProduct.push(newObject)
}
```

### Kenapa Salah

Output yang diharapkan selalu berisi **3 object** sesuai jumlah produk di toko, bukan sesuai jumlah pembeli. Jika loop `shoppers` jadi kerangka utama, output akan berisi object per pembeli.

```
// Jika shoppers = [Windi, Vanessa, Rani]
// Output yang salah: 3 object per pembeli
// Output yang benar: 3 object per produk (Sepatu, Baju, Sweater)
```

### ✅ Solusi

```javascript
// ✅ BENAR — loop products sebagai kerangka utama
for (const [product, price, stock] of listBarang) {
  // setiap iterasi = satu produk = satu object di output
}
```

---

## ❌ Kesalahan 2 — `totalProfit` Dideklarasikan di Dalam Loop

### Apa yang Terjadi

```javascript
// ❌ SALAH — totalProfit reset setiap iterasi
for (const { name, amount } of filtered) {
  if (leftOver >= amount) {
    let totalProfit = price * amount // dideklarasikan di dalam!
  }
}
```

### Kenapa Salah

Karena `let totalProfit` dideklarasikan di dalam loop, nilainya **direset ke 0** setiap iterasi. Profit dari pembeli sebelumnya hilang dan tidak terakumulasi.

```
// Windi beli 2, Vanessa beli 3 — Sepatu Stacattu Rp 1.500.000

// ❌ Yang terjadi:
Iterasi 1 (Windi):   totalProfit = 1.500.000 × 2 = 3.000.000 (langsung hilang!)
Iterasi 2 (Vanessa): totalProfit = 1.500.000 × 3 = 4.500.000 (reset lagi!)
// Hasil: 4.500.000 ← SALAH

// ✅ Yang seharusnya:
totalProfit = 3.000.000 + 4.500.000 = 7.500.000 ← BENAR
```

### ✅ Solusi

```javascript
// ✅ BENAR — deklarasi di luar loop agar bisa terakumulasi
let totalProfit = 0
for (const { name, amount } of filtered) {
  if (leftOver >= amount) {
    totalProfit += price * amount // terakumulasi setiap iterasi
  }
}
```

---

## ❌ Kesalahan 3 — `result.push()` di Luar Loop

### Apa yang Terjadi

```javascript
// ❌ SALAH — push ada di luar loop
for (const [product, price, stock] of listBarang) {
  // ... proses produk ...
}
result.push(resultObject) // di luar loop!
```

### Kenapa Salah

Karena `push` ada di luar loop, ia hanya dieksekusi **sekali** setelah semua iterasi selesai. Akibatnya `result` hanya berisi 1 object (data produk terakhir), bukan 3 object.

```
// ❌ Yang terjadi:
Loop selesai → push sekali → result = [{ Sweater Uniklooh }] ← hanya 1!

// ✅ Yang seharusnya:
result = [
  { Sepatu Stacattu },
  { Baju Zoro },
  { Sweater Uniklooh }
]
```

### ✅ Solusi

```javascript
// ✅ BENAR — push di dalam loop
for (const [product, price, stock] of listBarang) {
  // ... proses produk ...
  result.push({ product, shoppers: names, leftOver, totalProfit }) // di dalam loop!
}
```

---

## ❌ Kesalahan 4 — Pakai Satu Object yang Sama (Pass by Reference)

### Apa yang Terjadi

```javascript
// ❌ SALAH — pakai satu object yang sama terus
const resultObject = {}

for (const [product, price, stock] of listBarang) {
  resultObject['product'] = product
  resultObject['shoppers'] = names
  result.push(resultObject) // push referensi, bukan copy!
}
```

### Kenapa Salah

Object di JavaScript tidak di-copy saat di-push ke array — yang berpindah adalah **alamat memorinya** (referensi). Jadi semua entry di `result` menunjuk ke object yang sama, dan nilainya selalu tertimpa di setiap iterasi.

```
Bayangkan resultObject seperti kotak fisik di memori (📦A):

Iterasi 1 — Sepatu Stacattu:
  📦A = { product: 'Sepatu Stacattu', ... }
  result = [📦A]

Iterasi 2 — Baju Zoro:
  📦A = { product: 'Baju Zoro', ... }  ← 📦A ditimpa!
  result = [📦A, 📦A]  ← keduanya nunjuk ke kotak yang sama!

Iterasi 3 — Sweater Uniklooh:
  📦A = { product: 'Sweater Uniklooh', ... }  ← 📦A ditimpa lagi!
  result = [📦A, 📦A, 📦A]  ← semua nunjuk ke kotak yang sama!

// Hasil akhir — semua isinya Sweater Uniklooh! ❌
[
  { product: 'Sweater Uniklooh', ... },
  { product: 'Sweater Uniklooh', ... },
  { product: 'Sweater Uniklooh', ... }
]
```

### ✅ Solusi

```javascript
// ✅ BENAR — buat object baru setiap iterasi
for (const [product, price, stock] of listBarang) {
  // ... proses produk ...
  result.push({ product, shoppers: names, leftOver, totalProfit })
  // {} baru dibuat setiap iterasi = kotak baru di memori!
}

// Hasil:
// result = [📦A{Sepatu}, 📦B{Baju}, 📦C{Sweater}]
// Setiap entry punya kotak sendiri ✅
```

---

## ❌ Kesalahan 5 — Typo Nama Key

### Apa yang Terjadi

```javascript
// ❌ SALAH — nama key tidak sesuai expected output
result.push({ product, shopper: names, leftOver, totalProfit })
//                     ↑ kurang 's'
```

### Kenapa Salah

Expected output menggunakan key `shoppers` (pakai s), bukan `shopper`. Meskipun kelihatan sepele, typo seperti ini menyebabkan test case gagal karena key tidak cocok.

```javascript
// ❌ Yang dihasilkan:
{ product: 'Sepatu Stacattu', shopper: ['Windi'], leftOver: 5, totalProfit: 7500000 }

// ✅ Yang seharusnya:
{ product: 'Sepatu Stacattu', shoppers: ['Windi'], leftOver: 5, totalProfit: 7500000 }
```

### ✅ Solusi

```javascript
// ✅ BENAR — pastikan nama key sesuai expected output
result.push({ product, shoppers: names, leftOver, totalProfit })
//                     ↑ sudah benar
```

---

## 💡 Ringkasan Kesalahan

| No | Kesalahan | Dampak | Solusi |
|----|-----------|--------|--------|
| 1 | Loop `shoppers` jadi kerangka utama | Output salah — object per pembeli bukan per produk | Loop `listBarang` sebagai kerangka utama |
| 2 | `totalProfit` di dalam loop | Profit tidak terakumulasi, selalu reset | Deklarasi `totalProfit = 0` di luar loop |
| 3 | `result.push()` di luar loop | Hanya 1 object di result | Pindahkan `push` ke dalam loop |
| 4 | Pakai satu object yang sama | Semua entry di result isinya sama | Buat object baru `{}` setiap iterasi |
| 5 | Typo nama key `shopper` | Test case gagal | Gunakan `shoppers` sesuai expected output |

---

## 📚 Konsep yang Dipelajari

### Pass by Reference
Object di JavaScript menyimpan **referensi** (alamat memori), bukan nilai langsung. Ketika kamu push object ke array, yang masuk ke array adalah alamatnya — bukan copy isinya. Jadi jika object yang sama dimodifikasi lagi, semua entry di array yang menunjuk ke object itu ikut berubah.

### Guard Clause
Kondisi `if (shoppers.length === 0) return []` di awal function disebut **guard clause** — sebuah kondisi yang langsung return lebih awal untuk menangani edge case, sebelum logika utama dijalankan.

### Akumulasi Variabel
Variabel akumulator seperti `totalProfit` harus dideklarasikan **di luar loop** agar bisa mengumpulkan nilai dari setiap iterasi. Jika dideklarasikan di dalam loop, nilainya direset setiap iterasi.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 2: Proses Pengerjaan](02-proses-pengerjaan.md)**
- **📖 [Lanjut ke Part 4: Refactoring & Clean Code →](04-refactoring-clean-code.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
