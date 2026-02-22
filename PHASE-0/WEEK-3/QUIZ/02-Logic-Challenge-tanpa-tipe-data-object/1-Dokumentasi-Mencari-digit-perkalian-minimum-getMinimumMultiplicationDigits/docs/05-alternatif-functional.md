# 📚 Digit Perkalian Minimum - PART 5: ALTERNATIF — FUNCTIONAL STYLE

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         🔀 PART 5: ALTERNATIF — FUNCTIONAL STYLE 🔀                     ║
║                                                                          ║
║              Array.from + filter + reduce                                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 💡 Konsep | 📋 Kode | 📊 Step-by-Step | 🔍 Visualisasi | ⚠️ Pitfalls |
|:---------:|:-------:|:---------------:|:--------------:|:-----------:|
| [Jump](#-konsep-inti) | [Jump](#-kode) | [Jump](#-step-by-step-detail) | [Jump](#-visualisasi) | [Jump](#️-pitfalls) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami pendekatan functional style sebagai alternatif for loop
- ✅ Mengerti cara kerja `Array.from`, `filter`, dan `reduce`
- ✅ Tahu kapan pendekatan ini lebih cocok digunakan

---

## 💡 Konsep Inti

> 💡 **Best for:** Yang sudah familiar functional programming, kode lebih deklaratif

```
Hitung squareRoot = √number
Buat array [1, 2, 3, ..., squareRoot]
Filter hanya yang merupakan faktor dari number
Reduce → cari digitCount terkecil dari semua faktor
Return hasil reduce
```

---

## 📋 Kode

```javascript
function getMinimumMultiplicationDigits(number) {
  const squareRoot = Math.floor(Math.sqrt(number))

  return Array.from({ length: squareRoot }, (_, i) => i + 1)
    .filter(i => number % i === 0)
    .reduce((minDigitCount, i) => {
      const complement = number / i
      const digitCount = `${i}${complement}`.length

      return Math.min(minDigitCount, digitCount)
    }, Infinity)
}
```

---

## 📊 Step-by-Step (Detail)

### 🔵 Di Luar Method Chain:

**1. Hitung `squareRoot`**
- `const squareRoot = Math.floor(Math.sqrt(number))`
- Hitung akar kuadrat dari `number`, bulatkan ke bawah
- Dipakai sebagai batas atas pembuatan array
- Contoh: `number = 24` → `squareRoot = 4`

---

### 🔄 Di Dalam Method Chain:

**2. `Array.from({ length: squareRoot }, (_, i) => i + 1)`**
- Buat array berisi angka `1` sampai `squareRoot`
- `{ length: squareRoot }` → tentukan panjang array
- `(_, i) => i + 1` → isi tiap elemen dengan index + 1
- Contoh: `squareRoot = 4` → `[1, 2, 3, 4]`

**3. `.filter(i => number % i === 0)`**
- Saring array, hanya simpan angka yang merupakan faktor dari `number`
- Contoh: `number = 24`, `[1, 2, 3, 4]` → `[1, 2, 3, 4]` (semua faktor 24)

**4. `.reduce((minDigitCount, i) => { ... }, Infinity)`**
- Iterasi setiap faktor, cari `digitCount` terkecil
- `Infinity` sebagai nilai awal `minDigitCount`
- Setiap iterasi:

  **a. Hitung `complement`**
  - `const complement = number / i`
  - Contoh: `i = 3` → `complement = 8`

  **b. Hitung `digitCount`**
  - `` const digitCount = `${i}${complement}`.length ``
  - Contoh: `i = 3`, `complement = 8` → `"38".length = 2`

  **c. Return minimum**
  - `return Math.min(minDigitCount, digitCount)`
  - Bandingkan nilai saat ini dengan yang baru, return yang lebih kecil

---

### 🔵 Di Luar Method Chain:

**5. Return**
- Hasil `reduce` langsung di-return tanpa variabel tambahan

---

## 🔍 Visualisasi

**Untuk `number = 24`:**
```
squareRoot = Math.floor(Math.sqrt(24)) = 4

Array.from → [1, 2, 3, 4]

.filter    → [1, 2, 3, 4] (semua faktor 24)

.reduce (Infinity sebagai nilai awal):
  i=1 → complement=24 → "124".length=3 → Math.min(Infinity, 3) = 3
  i=2 → complement=12 → "212".length=3 → Math.min(3, 3)       = 3
  i=3 → complement=8  → "38".length=2  → Math.min(3, 2)       = 2
  i=4 → complement=6  → "46".length=2  → Math.min(2, 2)       = 2

return 2 ✅
```

---

## ⚠️ Pitfalls

**1) ❌ Lupa `Math.floor` saat hitung squareRoot**
```javascript
// ❌ SALAH — squareRoot bisa decimal, Array.from tidak bekerja benar
const squareRoot = Math.sqrt(number)

// ✅ BENAR
const squareRoot = Math.floor(Math.sqrt(number))
```

**2) ❌ Array.from dimulai dari 0**
```javascript
// ❌ SALAH — array berisi [0, 1, 2, 3], faktor 0 menyebabkan division by zero!
Array.from({ length: squareRoot }, (_, i) => i)

// ✅ BENAR — array berisi [1, 2, 3, 4]
Array.from({ length: squareRoot }, (_, i) => i + 1)
```

**3) ❌ Lupa initial value Infinity di reduce**
```javascript
// ❌ SALAH — tanpa initial value, elemen pertama jadi accumulator awal (tipe array, bukan number)
.reduce((minDigitCount, i) => {
  return Math.min(minDigitCount, digitCount)
})

// ✅ BENAR
.reduce((minDigitCount, i) => {
  return Math.min(minDigitCount, digitCount)
}, Infinity)
```

**4) ❌ Tidak pakai filter sebelum reduce**
```javascript
// ❌ SALAH — non-faktor ikut dihitung di reduce
Array.from({ length: squareRoot }, (_, i) => i + 1)
  .reduce(...)

// ✅ BENAR — filter dulu sebelum reduce
Array.from({ length: squareRoot }, (_, i) => i + 1)
  .filter(i => number % i === 0)
  .reduce(...)
```

---

## 💡 Insight Penting

> **Kapan pakai Functional Style vs For Loop?**
> Keduanya menghasilkan hasil yang sama dengan kompleksitas **O(√n)**. For Loop (Part 4) lebih mudah di-debug karena bisa taruh `console.log` di dalam loop. Functional Style lebih deklaratif — kode "mendeskripsikan apa yang dilakukan" bukan "bagaimana melakukannya".

> **Kenapa `filter` lalu `reduce`, bukan langsung `reduce`?**
> Memisahkan concerns — `filter` bertanggung jawab mencari faktor, `reduce` bertanggung jawab mencari minimum. Lebih mudah dibaca dan di-maintain.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📊 [← Kembali ke Part 4: Ringkasan Algoritma Step 3](04-ringkasan-algoritma-step3.md)**
- **🔀 [Lanjut ke Part 6: Alternatif Best of Both →](06-alternatif-best-of-both.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
