# 📚 shoppingTime - PART 1: SOAL & KRITERIA

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            📋 PART 1: SOAL & KRITERIA 📋                                ║
║                                                                          ║
║           Apa yang Diminta dan Bagaimana Cara Kerjanya                   ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📋 Soal | 🔍 Kriteria | 📊 Contoh | ✅ Ringkasan |
|:-------:|:-----------:|:---------:|:-----------:|
| [Jump](#-soal) | [Jump](#-kriteria) | [Jump](#-contoh-contoh) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami apa yang diminta soal
- ✅ Tahu aturan validasi member dan uang
- ✅ Paham logika pembelian barang dari yang termahal
- ✅ Siap untuk melihat dan menganalisis kode di Part 2

---

## 📋 Soal

> ### 📋 Deskripsi
>
> Diberikan sebuah function **`shoppingTime(memberId, money)`** yang menerima dua parameter:
>
> | Parameter | Tipe | Keterangan |
> |-----------|------|------------|
> | `memberId` | `string` | ID member yang berbelanja |
> | `money` | `number` | Jumlah uang yang dibawa |
>
> **Toko X sedang melakukan SALE untuk beberapa barang:**
>
> | No | Produk | Harga |
> |----|--------|-------|
> | 1 | 🥿 Sepatu brand Stacattu | Rp 1.500.000 |
> | 2 | 👕 Baju brand Zoro | Rp 500.000 |
> | 3 | 👕 Baju brand H&N | Rp 250.000 |
> | 4 | 🧥 Sweater brand Uniklooh | Rp 175.000 |
> | 5 | 📱 Casing Handphone | Rp 50.000 |
>
> Buatlah function yang mengembalikan object berisikan: **`memberId`**, **`money`**, **`listPurchased`**, dan **`changeMoney`**

---

## 🔍 Kriteria

> **1.** Jika `memberId` kosong
> → tampilkan `"Mohon maaf, toko X hanya berlaku untuk member saja"`
>
> **2.** Jika uang yang dimiliki kurang dari Rp 50.000
> → tampilkan `"Mohon maaf, uang tidak cukup"`
>
> **3.** Member akan membeli barang yang **paling mahal terlebih dahulu** dan akan membeli barang-barang yang sedang SALE **masing-masing 1** jika uang yang dimilikinya masih cukup

---

## 📊 Contoh-contoh

### Output yang Diharapkan

```javascript
// ✅ Normal case — cukup untuk 2 barang
shoppingTime('324193hDew2', 700000)
// → { memberId: '324193hDew2', money: 700000,
//     listPurchased: ['Baju Zoro', 'Sweater Uniklooh'], changeMoney: 25000 }

// ✅ Normal case — cukup untuk semua barang
shoppingTime('1820RzKrnWn08', 2475000)
// → { memberId: '1820RzKrnWn08', money: 2475000,
//     listPurchased: ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'],
//     changeMoney: 0 }

// ❌ memberId kosong
shoppingTime('', 700000)
// → 'Mohon maaf, toko X hanya berlaku untuk member saja'

// ❌ Uang tidak cukup
shoppingTime('324193hDew2', 15000)
// → 'Mohon maaf, uang tidak cukup'
```

---

### Simulasi Pembelian: `money: 700000`

```
Uang awal: Rp 700.000

Urutan pembelian (termahal dulu):

1. Sepatu Stacattu   Rp 1.500.000  →  700.000 < 1.500.000  ❌ skip
2. Baju Zoro         Rp   500.000  →  700.000 ≥   500.000  ✅ beli → sisa = 200.000
3. Baju H&N          Rp   250.000  →  200.000 < 250.000    ❌ skip
4. Sweater Uniklooh  Rp   175.000  →  200.000 ≥ 175.000    ✅ beli → sisa = 25.000
5. Casing Handphone  Rp    50.000  →   25.000 < 50.000     ❌ skip

listPurchased = ['Baju Zoro', 'Sweater Uniklooh']
changeMoney   = 25.000
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Parameter 1 | `memberId` — string, wajib diisi |
| Parameter 2 | `money` — number, minimal Rp 50.000 |
| Urutan beli | Dari barang **termahal** ke **termurah** |
| Jumlah beli | Masing-masing barang **1 saja** |
| Kondisi beli | Hanya jika **uang masih cukup** |
| Return (sukses) | Object `{ memberId, money, listPurchased, changeMoney }` |
| Return (gagal) | String pesan error |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2: Analisis Kode Original →](02-analisis-kode-original.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
