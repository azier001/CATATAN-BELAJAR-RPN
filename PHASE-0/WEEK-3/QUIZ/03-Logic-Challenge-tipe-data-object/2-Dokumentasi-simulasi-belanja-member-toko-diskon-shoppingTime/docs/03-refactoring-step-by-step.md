# 📚 shoppingTime - PART 3: REFACTORING STEP-BY-STEP

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         🔧 PART 3: REFACTORING STEP-BY-STEP 🔧                          ║
║                                                                          ║
║              Dari Kode Original ke Kode yang Lebih Bersih                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔧 Step 1 | 🔧 Step 2 | 📊 Perjalanan |
|:---------:|:---------:|:-------------:|
| [Jump](#-step-1--for-loop--forof--destructuring) | [Jump](#-step-2--nama-variabel-lebih-deskriptif) | [Jump](#-perjalanan-refactoring) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami proses refactoring secara bertahap
- ✅ Tahu cara mengganti `for` loop biasa ke `for...of`
- ✅ Tahu cara menggunakan array destructuring
- ✅ Bisa menulis nama variabel yang lebih deskriptif dan mengikuti english naming convention

---

## 🔧 Step 1 — `for` loop → `for...of` + destructuring

Fokus perubahan hanya di bagian loop.

```javascript
// ❌ Sebelum — akses via index manual
for (let i = 0; i < sortedProducts.length; i++) {
  const nameProduct = sortedProducts[i][0]
  const price = sortedProducts[i][1]

  if (changeMoney >= price) {
    changeMoney -= price
    listPurchased.push(nameProduct)
  }
}
```

```javascript
// ✅ Sesudah — for...of + array destructuring
for (const [productName, price] of sortedProducts) {
  if (changeMoney >= price) {
    changeMoney -= price
    listPurchased.push(productName)
  }
}
```

**Yang berubah:**

| Sebelum | Sesudah | Alasan |
|---------|---------|--------|
| `for (let i = 0; i < sortedProducts.length; i++)` | `for (const [productName, price] of sortedProducts)` | Tidak perlu index `i`, lebih readable |
| `sortedProducts[i][0]` | `productName` (dari destructuring) | Langsung ambil nilai tanpa index manual |
| `sortedProducts[i][1]` | `price` (dari destructuring) | Langsung ambil nilai tanpa index manual |
| `nameProduct` | `productName` | Mengikuti english naming convention |

> **Array Destructuring:** `const [productName, price] = ['Baju Zoro', 500000]`
> — langsung ambil nilai dari array tanpa perlu `arr[0]` dan `arr[1]`

---

## 🔧 Step 2 — Nama Variabel Lebih Deskriptif

Fokus perubahan hanya di bagian persiapan data.

```javascript
// ❌ Sebelum — nama variabel kurang deskriptif
const sortedProducts = Object.entries(products).sort((a, b) => b[1] - a[1])
```

```javascript
// ✅ Sesudah — pisah dan beri nama yang lebih jelas
const productEntries = Object.entries(products)
const sortedByPrice = productEntries.sort((a, b) => b[1] - a[1])
```

**Yang berubah:**

| Sebelum | Sesudah | Alasan |
|---------|---------|--------|
| `sortedProducts` | `sortedByPrice` | Lebih eksplisit — jelas di-sort berdasarkan apa |
| Satu baris chain | Dipisah dua baris | Setiap langkah punya nama yang jelas |

> **Catatan:** Pemisahan ini bersifat opsional — fokus utamanya adalah nama `sortedByPrice` yang lebih eksplisit dibanding `sortedProducts`.

---

## 📊 Perjalanan Refactoring

```
Kode Original
  ↓
  for (let i = 0; ...) dengan akses index manual
  nameProduct, sortedProducts

Step 1 → Ganti for...of + array destructuring
  ↓
  for (const [productName, price] of sortedProducts)

Step 2 → Nama variabel lebih deskriptif
  ↓
  productEntries, sortedByPrice ✅
```

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Apa itu array destructuring?</strong></summary>

Array destructuring adalah cara mengambil nilai dari array langsung ke variabel tanpa perlu index manual.

```javascript
// Tanpa destructuring
const entry = ['Baju Zoro', 500000]
const name = entry[0]   // 'Baju Zoro'
const price = entry[1]  // 500000

// Dengan destructuring
const [name, price] = ['Baju Zoro', 500000]
// name  = 'Baju Zoro'
// price = 500000
```

</details>

<details>
<summary><strong>❓ Kenapa for...of lebih baik dari for loop biasa di kasus ini?</strong></summary>

Karena kita tidak butuh index `i` sama sekali — kita hanya butuh nilai dari setiap elemen. `for...of` lebih ringkas, lebih readable, dan tidak ada risiko salah index seperti `arr[i][0]` vs `arr[i][1]`.

</details>

<details>
<summary><strong>❓ Apakah Step 2 wajib dilakukan?</strong></summary>

Tidak wajib secara fungsional — hasilnya tetap sama. Tapi dari sisi clean code, `sortedByPrice` jauh lebih eksplisit dibanding `sortedProducts` karena langsung menjelaskan **berdasarkan apa** data tersebut di-sort.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 2: Analisis Kode Original](02-analisis-kode-original.md)**
- **📊 [Lanjut ke Part 4: Kode Final + Ringkasan Algoritma →](04-kode-final-dan-ringkasan-algoritma.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
