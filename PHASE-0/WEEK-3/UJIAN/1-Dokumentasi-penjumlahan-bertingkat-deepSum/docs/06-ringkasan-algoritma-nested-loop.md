# 📚 deepSum - PART 6: RINGKASAN ALGORITMA — NESTED LOOP

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        📖 PART 6: RINGKASAN ALGORITMA — NESTED LOOP 📖                  ║
║                                                                          ║
║           Bedah Lengkap Algoritma 3 Nested Loop Step-by-Step             ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 📋 Konsep Inti | 🔍 Step-by-Step | 📊 Visualisasi | 🔑 Keywords | ⚡ Kompleksitas | ⚠️ Pitfalls |
|:--------------:|:---------------:|:--------------:|:-----------:|:--------------:|:-----------:|
| [Jump](#-konsep-inti) | [Jump](#-step-by-step-detail) | [Jump](#-visualisasi) | [Jump](#-keywords) | [Jump](#-kompleksitas) | [Jump](#-pitfalls-jebakan-umum) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami alur algoritma nested loop secara menyeluruh
- ✅ Tahu peran setiap baris kode secara detail
- ✅ Bisa mensimulasikan eksekusi kode di kepala sendiri
- ✅ Tahu jebakan umum dan cara menghindarinya

---

## 📄 Kode Referensi

```javascript
function deepSum(arr) {
  if (arr.length === 0) return 'No number'

  let total = 0

  for (const group of arr) {
    for (const row of group) {
      for (const number of row) {
        total += number
      }
    }
  }

  return total
}
```

---

## 📋 Konsep Inti

```
Validasi arr → jika kosong, return 'No number'
Siapkan variabel total = 0
Loop setiap group di dalam arr        (level 1)
  Loop setiap row di dalam group      (level 2)
    Loop setiap number di dalam row   (level 3)
      Tambahkan number ke total
Return total
```

---

## 🔍 Step-by-Step (Detail)

### 🔴 Validasi Awal (Guard Clause):

1. **`if (arr.length === 0) return 'No number'`**
   - Cek apakah `arr` kosong sebelum proses apapun dimulai
   - `arr.length === 0` → tidak ada elemen di array → tidak ada angka untuk dijumlahkan
   - Langsung return `'No number'` tanpa menjalankan loop
   - Disebut **guard clause** — keluar lebih awal jika kondisi tidak valid

### 🟡 Persiapan:

2. **`let total = 0`**
   - Variabel akumulator untuk menampung hasil penjumlahan
   - Dideklarasikan dengan `let` karena nilainya akan berubah
   - Dideklarasikan **di luar semua loop** agar nilainya tidak direset setiap iterasi
   - Dimulai dari `0` karena belum ada angka yang dijumlahkan

### 🔄 Loop Level 1 — `for (const group of arr)`:

3. **Iterasi setiap `group` di dalam `arr`**
   - `group` = satu elemen dari `arr` → berupa array of arrays
   - Contoh: `group` = `[[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]]`
   - Loop ini berjalan sebanyak jumlah group di dalam `arr`

### 🔄 Loop Level 2 — `for (const row of group)`:

4. **Iterasi setiap `row` di dalam `group`**
   - `row` = satu elemen dari `group` → berupa array of numbers
   - Contoh: `row` = `[4, 5, 6]`
   - Loop ini berjalan sebanyak jumlah row di dalam `group`

### 🔄 Loop Level 3 — `for (const number of row)`:

5. **Iterasi setiap `number` di dalam `row`**
   - `number` = satu elemen dari `row` → berupa angka
   - Contoh: `number` = `4`, lalu `5`, lalu `6`
   - Loop ini berjalan sebanyak jumlah angka di dalam `row`

6. **`total += number`**
   - Tambahkan `number` ke `total`
   - Shorthand dari `total = total + number`
   - Dieksekusi setiap kali loop level 3 berjalan

### 🔵 Di Luar Semua Loop:

7. **`return total`**
   - Kembalikan hasil penjumlahan semua angka
   - Harus ada **di luar semua loop** — jika di dalam loop, fungsi berhenti di iterasi pertama

---

## 📊 Visualisasi

Untuk input (sebagian dari Normal Case 1):

```
arr = [
  [[4, 5, 6], [9, 1, 2, 10]],
  ...
]

total = 0

─────────────────────────────────────────────
group = [[4, 5, 6], [9, 1, 2, 10]]
─────────────────────────────────────────────
  row = [4, 5, 6]
    number = 4  → total = 0  + 4  = 4
    number = 5  → total = 4  + 5  = 9
    number = 6  → total = 9  + 6  = 15

  row = [9, 1, 2, 10]
    number = 9  → total = 15 + 9  = 24
    number = 1  → total = 24 + 1  = 25
    number = 2  → total = 25 + 2  = 27
    number = 10 → total = 27 + 10 = 37

─────────────────────────────────────────────
...group berikutnya dst.
─────────────────────────────────────────────

return total → 316 ✅
```

---

## 🔑 Keywords

| Keyword | Penjelasan |
|---------|------------|
| 🛡️ **Guard Clause** | Validasi di awal function untuk keluar lebih awal jika kondisi tidak valid |
| 🔄 **Nested Loop** | Loop di dalam loop — digunakan untuk menelusuri struktur array berlapis |
| ➕ **Accumulator** | Variabel `total` yang terus bertambah setiap iterasi, dideklarasikan di luar loop |
| 📖 **`for...of`** | Syntax loop yang mengiterasi setiap elemen iterable secara langsung |

---

## ⚡ Kompleksitas

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n)** | Setiap angka dikunjungi tepat 1 kali, `n` = total angka di seluruh nested array |
| Memori | **O(1)** | Hanya butuh 1 variabel tambahan (`total`) — tidak membuat array baru |

---

## ⚠️ Pitfalls (Jebakan Umum)

**1) ❌ `total` dideklarasikan di dalam loop**
```javascript
// ❌ SALAH — total direset setiap iterasi group
for (const group of arr) {
  let total = 0  // reset setiap group baru!
  for (const row of group) {
    for (const number of row) {
      total += number
    }
  }
}

// ✅ BENAR — total dideklarasikan di luar semua loop
let total = 0
for (const group of arr) { ... }
```

**2) ❌ `return` di dalam loop**
```javascript
// ❌ SALAH — return di dalam loop level 1
for (const group of arr) {
  for (const row of group) {
    for (const number of row) {
      total += number
    }
  }
  return total  // berhenti setelah group pertama!
}

// ✅ BENAR — return di luar semua loop
for (const group of arr) { ... }
return total
```

**3) ❌ Jumlah loop tidak sesuai level nested**
```javascript
// ❌ SALAH — hanya 2 loop untuk array 3 level
for (const group of arr) {
  for (const number of group) {  // number masih berupa array!
    total += number  // NaN!
  }
}

// ✅ BENAR — 3 loop untuk 3 level nested
for (const group of arr) {
  for (const row of group) {
    for (const number of row) {
      total += number
    }
  }
}
```

---

## 💡 Insight Penting

> **Kenapa butuh tepat 3 nested loop?**
> Karena struktur data memiliki tepat 3 level kedalaman: `arr → group → row → number`. Setiap level butuh 1 loop untuk ditelusuri. Kurang dari 3 loop → tidak bisa mencapai angka. Lebih dari 3 loop → error karena mencoba loop angka.

> **Kenapa `for...of` lebih disukai dari `for` biasa di sini?**
> Karena `for...of` lebih bersih dan langsung memberikan nilai elemennya (`group`, `row`, `number`) tanpa perlu mengakses index secara manual (`arr[i][j][k]`). Hasilnya kode lebih mudah dibaca dan lebih sedikit kemungkinan bug index.

> **Kapan pendekatan nested loop ini paling tepat digunakan?**
> Ketika struktur nested array sudah **pasti dan tetap** (selalu 3 level), dan kamu ingin kode yang paling mudah dipahami oleh semua kalangan termasuk pemula. Jika struktur bisa berubah-ubah, pertimbangkan recursion (Part 5 & 8).

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 5: Refactoring — Recursion](05-refactoring-recursion.md)**
- **📖 [Lanjut ke Part 7: Ringkasan Algoritma — `.flat()` + `.reduce()` →](07-ringkasan-algoritma-flat-reduce.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
