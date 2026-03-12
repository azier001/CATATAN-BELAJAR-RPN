# 📚 deepSum - PART 8: RINGKASAN ALGORITMA — RECURSION

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         📖 PART 8: RINGKASAN ALGORITMA — RECURSION 📖                   ║
║                                                                          ║
║           Bedah Lengkap Algoritma Recursion Step-by-Step                 ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-orange)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 📋 Konsep Inti | 🔍 Step-by-Step | 📊 Visualisasi | 🔑 Keywords | ⚡ Kompleksitas | ⚠️ Pitfalls |
|:--------------:|:---------------:|:--------------:|:-----------:|:--------------:|:-----------:|
| [Jump](#-konsep-inti) | [Jump](#-step-by-step-detail) | [Jump](#-visualisasi) | [Jump](#-keywords) | [Jump](#-kompleksitas) | [Jump](#-pitfalls-jebakan-umum) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami alur algoritma recursion secara menyeluruh
- ✅ Tahu peran base case dan recursive case secara detail
- ✅ Bisa mensimulasikan eksekusi recursion di kepala sendiri
- ✅ Tahu jebakan umum dan cara menghindarinya

---

## 📄 Kode Referensi

```javascript
function deepSum(arr) {
  if (arr.length === 0) return 'No number'

  function sum(item) {
    if (!Array.isArray(item)) return item
    return item.reduce((total, child) => total + sum(child), 0)
  }

  return sum(arr)
}
```

---

## 📋 Konsep Inti

```
Validasi arr → jika kosong, return 'No number'
Definisikan inner function sum(item):
  Jika item bukan array (angka) → return item langsung   [BASE CASE]
  Jika item adalah array → loop isinya, panggil sum()    [RECURSIVE CASE]
    untuk setiap child — bisa angka atau array lagi
Panggil sum(arr) dan return hasilnya
```

---

## 🔍 Step-by-Step (Detail)

### 🔴 Validasi Awal (Guard Clause):

1. **`if (arr.length === 0) return 'No number'`**
   - Cek apakah `arr` kosong sebelum proses apapun dimulai
   - `arr.length === 0` → tidak ada elemen → tidak ada angka untuk dijumlahkan
   - Langsung return `'No number'` tanpa menjalankan proses selanjutnya
   - Disebut **guard clause** — keluar lebih awal jika kondisi tidak valid

### 🟣 Inner Function:

2. **`function sum(item)`**
   - Fungsi di dalam fungsi — disebut **inner function**
   - Hanya bisa diakses dari dalam `deepSum`, tidak bocor ke scope luar
   - Menerima `item` yang bisa berupa **angka** maupun **array**
   - Inilah fungsi yang melakukan seluruh pekerjaan recursion

### 🔴 Base Case:

3. **`if (!Array.isArray(item)) return item`**
   - **Kondisi berhenti** dari recursion
   - `Array.isArray(item)` → cek apakah `item` adalah array
   - `!Array.isArray(item)` → jika `item` **bukan** array → berarti angka → return langsung
   - Tanpa base case, `sum` akan terus memanggil dirinya sendiri → **stack overflow**

   ```javascript
   // Contoh:
   Array.isArray([1, 2])  // → true  (ini array)
   Array.isArray(4)       // → false (ini angka)
   !Array.isArray(4)      // → true  → return 4 ✅
   ```

### 🔄 Recursive Case:

4. **`return item.reduce((total, child) => total + sum(child), 0)`**
   - Jika `item` adalah array → loop semua isinya dengan `.reduce()`
   - Setiap elemen `child` dipanggil `sum(child)` lagi
   - `child` bisa jadi:
     - **Angka** → kena base case → return angkanya langsung
     - **Array** → masuk recursive case lagi → loop isinya lagi
   - `0` → nilai awal accumulator `total`
   - Proses ini terus berulang sampai semua `child` adalah angka

### 🔵 Di Luar Inner Function:

5. **`return sum(arr)`**
   - Mulai proses recursion dari `arr` (array paling luar)
   - Hasil akhir dari seluruh proses recursion dikembalikan ke pemanggil

---

## 📊 Visualisasi

Untuk input `[[4, 5], [6]]`:

```
return sum([[4, 5], [6]])
│
│  Array.isArray([[4, 5], [6]]) → true → masuk reduce
│  child pertama: [4, 5]
│  child kedua:   [6]
│
├── sum([4, 5])
│   │  Array.isArray([4, 5]) → true → masuk reduce
│   │  child pertama: 4
│   │  child kedua:   5
│   │
│   ├── sum(4)
│   │   Array.isArray(4) → false → return 4 ✅
│   │
│   └── sum(5)
│       Array.isArray(5) → false → return 5 ✅
│   │
│   └── total: 0 + 4 + 5 = 9
│
└── sum([6])
    │  Array.isArray([6]) → true → masuk reduce
    │  child pertama: 6
    │
    └── sum(6)
        Array.isArray(6) → false → return 6 ✅
    │
    └── total: 0 + 6 = 6

total akhir: 0 + 9 + 6 = 15 ✅
```

---

## 🔑 Keywords

| Keyword | Penjelasan |
|---------|------------|
| 🛡️ **Guard Clause** | Validasi di awal function untuk keluar lebih awal jika kondisi tidak valid |
| 🔁 **Recursion** | Teknik di mana fungsi memanggil dirinya sendiri untuk menyelesaikan masalah yang lebih kecil |
| 🛑 **Base Case** | Kondisi berhenti — `!Array.isArray(item)` → item adalah angka, return langsung |
| 🔄 **Recursive Case** | Kondisi lanjut — item adalah array, loop isinya dan panggil `sum()` lagi |
| 📦 **Inner Function** | Fungsi `sum` yang didefinisikan di dalam `deepSum`, hanya bisa diakses dari dalam |
| 🔁 **`.reduce()`** | Melipat semua elemen array menjadi 1 nilai menggunakan accumulator |
| 📚 **Stack Frame** | Ruang memori yang dialokasikan setiap kali `sum()` dipanggil, dibebaskan setelah return |

---

## ⚡ Kompleksitas

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n)** | Setiap angka dikunjungi tepat 1 kali, `n` = total angka di seluruh nested array |
| Memori | **O(d)** | `d` = kedalaman nested array — setiap level recursion menyimpan 1 stack frame di memori |

---

## ⚠️ Pitfalls (Jebakan Umum)

**1) ❌ Tidak ada base case**
```javascript
// ❌ SALAH — tanpa base case, recursion tidak pernah berhenti
function sum(item) {
  return item.reduce((total, child) => total + sum(child), 0)
  // Ketika child adalah angka → sum(4) → reduce(4) → ERROR!
}

// ✅ BENAR — base case wajib ada
function sum(item) {
  if (!Array.isArray(item)) return item  // berhenti jika angka
  return item.reduce((total, child) => total + sum(child), 0)
}
```

**2) ❌ Base case yang salah kondisi**
```javascript
// ❌ SALAH — mengecek typeof tapi tidak akurat untuk array
function sum(item) {
  if (typeof item === 'number') return item  // array bukan 'number' → ok
  // tapi typeof [] === 'object' → bisa konflik dengan object lain
}

// ✅ BENAR — Array.isArray() lebih eksplisit dan akurat
function sum(item) {
  if (!Array.isArray(item)) return item
}
```

**3) ❌ Lupa `return` di recursive case**
```javascript
// ❌ SALAH — lupa return di recursive case
function sum(item) {
  if (!Array.isArray(item)) return item
  item.reduce((total, child) => total + sum(child), 0)  // tidak di-return!
}
// → undefined

// ✅ BENAR — return wajib ada di kedua case
function sum(item) {
  if (!Array.isArray(item)) return item
  return item.reduce((total, child) => total + sum(child), 0)
}
```

**4) ❌ Lupa memanggil `sum(arr)` di luar inner function**
```javascript
// ❌ SALAH — inner function didefinisikan tapi tidak dipanggil
function deepSum(arr) {
  if (arr.length === 0) return 'No number'
  function sum(item) { ... }
  // lupa return sum(arr)!
}
// → undefined

// ✅ BENAR — panggil sum(arr) dan return hasilnya
function deepSum(arr) {
  if (arr.length === 0) return 'No number'
  function sum(item) { ... }
  return sum(arr)
}
```

---

## 💡 Insight Penting

> **Kenapa recursion paling cocok untuk `deepSum`?**
> Karena struktur nested array secara alami bersifat rekursif — array berisi array berisi array. Recursion memodelkan struktur ini dengan sempurna: setiap kali ketemu array, buka dan periksa lagi. Tidak perlu tahu berapa level dalamnya — selalu benar untuk semua kondisi.

> **Kenapa memori O(d) bukan O(n)?**
> Setiap pemanggilan `sum()` membuat 1 **stack frame** di memori. Stack frame ini hanya ada selama fungsi belum selesai (belum return). Pada satu waktu, jumlah stack frame yang aktif = kedalaman recursion saat ini = kedalaman nested array (`d`). Setelah `sum()` return, stack frame-nya dibebaskan. Jadi memori yang dibutuhkan sebanding dengan `d`, bukan `n`.

> **Apa itu stack overflow dan kapan terjadi?**
> Stack overflow terjadi ketika terlalu banyak stack frame aktif sekaligus hingga memori habis. Untuk nested array normal (kedalaman 3-10 level), ini tidak akan terjadi. Risiko muncul jika struktur nested sangat dalam (ratusan level) — dalam kasus seperti itu, pertimbangkan pendekatan iteratif dengan explicit stack.

> **Kenapa pakai inner function `sum`, bukan langsung `deepSum` memanggil dirinya sendiri?**
> Karena `deepSum` punya guard clause `if (arr.length === 0)` yang menggunakan `.length` — properti yang hanya ada di array, tidak ada di angka. Jika `deepSum` dipanggil dengan angka (misal `deepSum(4)`), guard clause-nya akan error. Inner function `sum` memisahkan logika recursion dari logika guard clause sehingga lebih bersih dan aman.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 7: Ringkasan Algoritma — `.flat()` + `.reduce()`](07-ringkasan-algoritma-flat-reduce.md)**
- **📖 [Lanjut ke Part 9: Perbandingan & Kesimpulan →](09-perbandingan-dan-kesimpulan.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
