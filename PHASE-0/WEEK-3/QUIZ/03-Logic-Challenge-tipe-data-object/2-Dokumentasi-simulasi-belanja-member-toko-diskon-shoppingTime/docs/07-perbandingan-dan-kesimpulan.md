# 📚 shoppingTime - PART 7: PERBANDINGAN & KESIMPULAN

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         📊 PART 7: PERBANDINGAN & KESIMPULAN 📊                         ║
║                                                                          ║
║              Rangkuman Semua Solusi & Kapan Menggunakannya               ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 📊 Perbandingan | 🏆 Rekomendasi | 💡 Kesimpulan |
|:--------------:|:--------------:|:-------------:|
| [Jump](#-perbandingan-semua-solusi) | [Jump](#-rekomendasi) | [Jump](#-kesimpulan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Bisa membandingkan semua solusi secara objektif
- ✅ Tahu kapan memilih solusi yang mana
- ✅ Memahami trade-off setiap pendekatan
- ✅ Punya gambaran besar dari seluruh sesi belajar ini

---

## 📊 Perbandingan Semua Solusi

### Kode

**Kode Original:**
```javascript
const products = {
  'Sepatu Stacattu': 1500000,
  'Baju Zoro': 500000,
  'Baju H&N': 250000,
  'Sweater Uniklooh': 175000,
  'Casing Handphone': 50000,
}

function shoppingTime(memberId, money) {
  if (!memberId) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }
  if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup'
  }

  const sortedProducts = Object.entries(products).sort((a, b) => b[1] - a[1])
  const listPurchased = []
  let changeMoney = money

  for (let i = 0; i < sortedProducts.length; i++) {
    const nameProduct = sortedProducts[i][0]
    const price = sortedProducts[i][1]
    if (changeMoney >= price) {
      changeMoney -= price
      listPurchased.push(nameProduct)
    }
  }

  return { memberId, money, listPurchased, changeMoney }
}
```

---

**Versi Refactored (`for...of`):**
```javascript
const products = {
  'Sepatu Stacattu': 1500000,
  'Baju Zoro': 500000,
  'Baju H&N': 250000,
  'Sweater Uniklooh': 175000,
  'Casing Handphone': 50000,
}

function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  if (money < 50000) return 'Mohon maaf, uang tidak cukup'

  const productEntries = Object.entries(products)
  const sortedByPrice = productEntries.sort((a, b) => b[1] - a[1])
  const listPurchased = []
  let changeMoney = money

  for (const [productName, price] of sortedByPrice) {
    if (changeMoney >= price) {
      changeMoney -= price
      listPurchased.push(productName)
    }
  }

  return { memberId, money, listPurchased, changeMoney }
}
```

---

**Versi `reduce`:**
```javascript
const products = {
  'Sepatu Stacattu': 1500000,
  'Baju Zoro': 500000,
  'Baju H&N': 250000,
  'Sweater Uniklooh': 175000,
  'Casing Handphone': 50000,
}

function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  if (money < 50000) return 'Mohon maaf, uang tidak cukup'

  const sortedByPrice = Object.entries(products).sort((a, b) => b[1] - a[1])

  const { listPurchased, changeMoney } = sortedByPrice.reduce(
    (acc, [productName, price]) => {
      if (acc.changeMoney >= price) {
        acc.changeMoney -= price
        acc.listPurchased.push(productName)
      }
      return acc
    },
    { listPurchased: [], changeMoney: money }
  )

  return { memberId, money, listPurchased, changeMoney }
}
```

---

**Versi AI Improved:**
```javascript
const MIN_PRICE = 50000

const products = [
  { name: 'Sepatu Stacattu', price: 1500000 },
  { name: 'Baju Zoro', price: 500000 },
  { name: 'Baju H&N', price: 250000 },
  { name: 'Sweater Uniklooh', price: 175000 },
  { name: 'Casing Handphone', price: 50000 }
]

const sortedByPrice = [...products].sort((a, b) => b.price - a.price)

function shoppingTime(memberId, money) {
  if (!memberId) return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  if (money < MIN_PRICE) return 'Mohon maaf, uang tidak cukup'

  const listPurchased = []
  let changeMoney = money

  for (const { name, price } of sortedByPrice) {
    if (changeMoney >= price) {
      changeMoney -= price
      listPurchased.push(name)
    }
    if (changeMoney < MIN_PRICE) break
  }

  return { memberId, money, listPurchased, changeMoney }
}
```

---

### Tabel Perbandingan

| Aspek | Original | Refactored (`for...of`) | `reduce` | AI Improved |
|-------|:--------:|:-----------------------:|:--------:|:-----------:|
| Struktur data | Object `{}` | Object `{}` | Object `{}` | Array of objects `[]` |
| Loop | `for` biasa | `for...of` | `reduce` | `for...of` |
| Sort | Tiap pemanggilan | Tiap pemanggilan | Tiap pemanggilan | Sekali di luar ✅ |
| Spread sebelum sort | ❌ | ❌ | ❌ | ✅ |
| Magic number | ⚠️ | ⚠️ | ⚠️ | ✅ `MIN_PRICE` |
| Early break | ❌ | ❌ | ❌ | ✅ |
| Naming convention | ⚠️ | ✅ | ✅ | ✅ |
| Readability | ⚠️ | ✅ | ⚠️ Perlu paham `reduce` | ✅ |
| Kompleksitas waktu | O(n log n) | O(n log n) | O(n log n) | O(n log n) |
| Kompleksitas memori | O(n) | O(n) | O(n) | O(n) |

---

## 🏆 Rekomendasi

> **Untuk belajar & readability → Versi Refactored (`for...of`)**
> Paling mudah dibaca dan dipahami. Cocok untuk pemula atau ketika readability adalah prioritas utama.

> **Untuk functional programming → Versi `reduce`**
> Cocok jika kamu terbiasa dengan gaya functional dan ingin menghindari variabel `let` yang mutable.

> **Untuk production & performa optimal → Versi AI Improved**
> Paling lengkap: struktur data deskriptif, sort sekali, tidak ada magic number, dan early break yang benar-benar optimal.

---

## 💡 Kesimpulan

### Yang Dipelajari di Sesi Ini

| Topik | Pembelajaran |
|-------|-------------|
| **Kode Original** | Sudah benar dan sesuai kriteria soal — tidak ada bug |
| **Refactoring** | `for...of` + destructuring lebih readable dari `for` biasa |
| **Naming Convention** | `productName` lebih natural dari `nameProduct`, `sortedByPrice` lebih eksplisit dari `sortedProducts` |
| **Guard Clause** | Validasi di awal function membuat kode lebih bersih |
| **`reduce`** | Alternatif functional untuk menggantikan `for...of` — butuh paham `acc` dan `return acc` |
| **Magic Number** | Angka tanpa konteks sebaiknya dijadikan konstanta bernama |
| **Spread sebelum sort** | `.sort()` mutate array asli — selalu spread dulu jika ingin array original aman |
| **Early Break** | `< MIN_PRICE` lebih optimal dari `=== 0` karena cover semua kasus uang tidak cukup |
| **Greedy Algorithm** | Strategi beli termahal dulu — sederhana tapi efektif untuk soal ini |

---

### Satu Insight Terpenting

> Di semua versi, **logika intinya sama** — sort descending lalu loop dan beli jika mampu. Yang membedakan hanyalah **gaya penulisan**, **struktur data**, dan **optimasi kecil** di tiap versi. Memahami logika inti lebih penting dari hafal sintaksnya.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🤖 [← Kembali ke Part 6: Analisis Kode AI + Versi Improved](06-alternatif-ai-improved-dan-ringkasan-algoritma.md)**

---

<div align="center">

Selesai! Kamu sudah menyelesaikan semua part dokumentasi ini 🎉

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
