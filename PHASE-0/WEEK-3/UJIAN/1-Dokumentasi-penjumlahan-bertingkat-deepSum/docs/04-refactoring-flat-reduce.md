# 📚 deepSum - PART 4: REFACTORING — `.flat()` + `.reduce()`

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        ✨ PART 4: REFACTORING — .flat() + .reduce() ✨                   ║
║                                                                          ║
║           Dari 3 Nested Loop ke 1 Baris dengan Built-in Method           ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 📐 .flat() | 🔁 .reduce() | 🔗 Chaining | ✅ Kode Refactoring | 🧪 Test Cases |
|:----------:|:-----------:|:-----------:|:------------------:|:-------------:|
| [Jump](#-mengenal-flat) | [Jump](#-mengenal-reduce) | [Jump](#-method-chaining) | [Jump](#-kode-refactoring-final) | [Jump](#-test-cases) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja `.flat()` dan parameter `depth`-nya
- ✅ Memahami cara kerja `.reduce()` dan accumulator-nya
- ✅ Tahu apa itu method chaining dan cara menggunakannya
- ✅ Bisa menulis solusi singkat dan modern dengan built-in method

---

## 📐 Mengenal `.flat()`

`.flat(depth)` berfungsi **meratakan** nested array menjadi array 1 level.

```javascript
// 1 level nested
[[1, 2], [3, 4]].flat(1)
// → [1, 2, 3, 4]

// 2 level nested
[[[1, 2], [3]], [[4]]].flat(2)
// → [1, 2, 3, 4]

// Semua level — pakai Infinity
[[[1, 2], [3]], [[4]]].flat(Infinity)
// → [1, 2, 3, 4]
```

> **`depth`** = seberapa dalam level nested yang mau diratakan.
> Pakai `Infinity` jika tidak tahu kedalamannya — aman untuk semua kondisi.

### Kenapa Pakai `Infinity`?

```javascript
// Jika pakai flat(1) — hanya meratakan 1 level
[[[4, 5], [6]], [[7]]].flat(1)
// → [[4, 5], [6], [7]] ← masih nested!

// Jika pakai flat(2) — meratakan 2 level
[[[4, 5], [6]], [[7]]].flat(2)
// → [4, 5, 6, 7] ← sudah flat

// Jika pakai flat(Infinity) — meratakan semua level
[[[4, 5], [6]], [[7]]].flat(Infinity)
// → [4, 5, 6, 7] ← selalu flat apapun strukturnya
```

Untuk `deepSum`, kita pakai `Infinity` agar aman meskipun struktur nested array berubah.

---

## 🔁 Mengenal `.reduce()`

`.reduce(callback, initialValue)` berfungsi **melipat** semua elemen array menjadi 1 nilai.

```javascript
[4, 5, 6].reduce((total, number) => total + number, 0)
// Iterasi 1: total = 0 + 4 = 4
// Iterasi 2: total = 4 + 5 = 9
// Iterasi 3: total = 9 + 6 = 15
// → 15
```

| Parameter | Keterangan |
|-----------|------------|
| `total` | Accumulator — nilai yang terus bertambah setiap iterasi |
| `number` | Elemen saat ini yang sedang diproses |
| `0` | Nilai awal accumulator |

> **`initialValue`** selalu isi dengan `0` untuk penjumlahan — agar accumulator dimulai dari nol, bukan dari elemen pertama array.

---

## 🔗 Method Chaining

**Method chaining** adalah teknik memanggil beberapa method secara berurutan dalam satu ekspresi, karena setiap method mengembalikan nilai yang bisa langsung dipakai method berikutnya.

```javascript
// Tanpa chaining — butuh variabel perantara
const flatArr = arr.flat(Infinity)
const result = flatArr.reduce((total, number) => total + number, 0)
return result

// Dengan chaining — langsung dalam 1 baris
return arr.flat(Infinity).reduce((total, number) => total + number, 0)
```

Bisa juga ditulis multi-baris agar lebih mudah dibaca:

```javascript
return arr
  .flat(Infinity)
  .reduce((total, number) => total + number, 0)
```

---

## ✅ Kode Refactoring Final

```javascript
function deepSum(arr) {
  if (arr.length === 0) return 'No number'

  return arr.flat(Infinity).reduce((total, number) => total + number, 0)
}
```

**Cara membacanya:**
1. `arr.flat(Infinity)` → ratakan semua nested array menjadi `[4, 5, 6, 9, 1, 2, ...]`
2. `.reduce((total, number) => total + number, 0)` → jumlahkan semua angka menjadi 1 nilai
3. `return` → kembalikan hasilnya langsung tanpa variabel perantara

---

## 🧪 Test Cases

```javascript
// Edge case — array kosong
console.log(deepSum([]));
// → 'No number'
```

```javascript
// Normal case 1 — nested array 3 level
console.log(deepSum([
  [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
  [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
  [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
]));
// → 316
```

```javascript
// Normal case 2 — grup dengan panjang array berbeda-beda
console.log(deepSum([
  [[20, 10], [15], [1, 1]],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
  [[3, 5, 1], [1, 5, 3], [1]],
  [[2]]
]));
// → 156
```

---

## 📊 Perbandingan dengan Part 3

| Aspek | Part 3 (Nested Loop) | Part 4 (.flat + .reduce) |
|-------|---------------------|--------------------------|
| Jumlah baris logika | 6 baris | 1 baris |
| Variabel tambahan | `total` | Tidak ada |
| Fleksibilitas level | Hanya 3 level | Semua level (Infinity) |
| Memori | O(1) | O(n) — membuat array baru |
| Readability | Eksplisit & familiar | Singkat & modern |

---

## 💡 Insight Penting

> **Kenapa `.flat()` butuh memori ekstra O(n)?**
> Karena `.flat()` membuat **array baru** yang berisi semua angka yang sudah diratakan. Array baru ini disimpan di memori sementara sebelum diproses `.reduce()`. Berbeda dengan nested loop yang tidak membuat array baru sama sekali.

> **Kapan pakai approach ini?**
> Ketika kamu ingin kode yang singkat dan modern, dan tidak terlalu khawatir dengan penggunaan memori ekstra. Untuk data kecil hingga menengah, pendekatan ini sangat praktis.

> **Apakah `.flat()` + `.reduce()` lebih lambat dari nested loop?**
> Secara kompleksitas waktu keduanya sama — O(n). Tapi `.flat()` punya overhead membuat array baru. Untuk data besar, nested loop sedikit lebih efisien dari sisi memori.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 3: Refactoring — Perbaikan Naming](03-refactoring-nested-loop-naming.md)**
- **📖 [Lanjut ke Part 5: Refactoring — Recursion →](05-refactoring-recursion.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
