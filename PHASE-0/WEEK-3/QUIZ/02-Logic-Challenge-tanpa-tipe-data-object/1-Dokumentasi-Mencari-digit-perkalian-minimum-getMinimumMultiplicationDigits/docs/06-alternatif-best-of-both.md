# 📚 Digit Perkalian Minimum - PART 6: ALTERNATIF — BEST OF BOTH WORLDS

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         🔀 PART 6: ALTERNATIF — BEST OF BOTH WORLDS 🔀                  ║
║                                                                          ║
║              For Loop + Naming Terbaik + Math.min                        ║
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
- ✅ Memahami mengapa naming convention berpengaruh pada keterbacaan kode
- ✅ Tahu perbedaan versi ini dengan For Loop Optimal (Part 4)
- ✅ Mengerti kapan menggunakan `Math.min` vs blok `if`

---

## 💡 Konsep Inti

> 💡 **Best for:** Kode paling deskriptif, naming convention terbaik

Versi ini adalah gabungan terbaik dari For Loop Optimal (Part 4) dan masukan dari kode alternatif lain:
- Ambil struktur **for loop** dari Part 4 (mudah dibaca)
- Ambil **naming convention** yang lebih deskriptif (`factor`, `pairedFactor`)
- Ganti blok `if` dengan **`Math.min`** yang lebih ringkas

```
Inisialisasi minDigitCount dengan Infinity
Loop dari 1 sampai √number (factor * factor <= number)
  Jika factor adalah faktor dari number:
    Hitung pasangannya (pairedFactor)
    Gabungkan factor dan pairedFactor jadi string → hitung panjangnya
    Update minDigitCount dengan Math.min
Return minDigitCount
```

---

## 📋 Kode

```javascript
function getMinimumMultiplicationDigits(number) {
  let minDigitCount = Infinity

  for (let factor = 1; factor * factor <= number; factor++) {
    if (number % factor === 0) {
      const pairedFactor = number / factor
      const digitCount = `${factor}${pairedFactor}`.length

      minDigitCount = Math.min(minDigitCount, digitCount)
    }
  }

  return minDigitCount
}
```

---

## 📊 Step-by-Step (Detail)

### 🔵 Di Luar Loop:

**1. Inisialisasi `minDigitCount`**
- `let minDigitCount = Infinity`
- Dideklarasikan **sebelum loop** agar nilainya bisa diupdate dan diakses sepanjang loop
- Nilai awal `Infinity` agar angka apapun pasti lebih kecil di perbandingan pertama

---

### 🔄 Di Dalam Loop `for (let factor = 1; factor * factor <= number; factor++)`:

**2. Kondisi loop**
- Mulai dari `factor = 1`
- Berjalan selama `factor * factor <= number` (hanya sampai √number)
- Setiap iterasi `factor++`

**3. Cek apakah `factor` adalah faktor** — `if (number % factor === 0)`
- Jika `number % factor !== 0` → skip, langsung ke iterasi berikutnya
- Jika `number % factor === 0` → masuk ke dalam blok `if`

**4. Hitung `pairedFactor`** *(di dalam `if`)*
- `const pairedFactor = number / factor`
- `pairedFactor` adalah pasangan faktor dari `factor`
- Contoh: `number = 24`, `factor = 3` → `pairedFactor = 8`

**5. Hitung `digitCount`** *(di dalam `if`)*
- `` const digitCount = `${factor}${pairedFactor}`.length ``
- Gabungkan `factor` dan `pairedFactor` jadi satu string, lalu hitung panjangnya
- Contoh: `factor = 3`, `pairedFactor = 8` → `"38".length = 2`

**6. Update `minDigitCount`** *(di dalam `if`)*
- `minDigitCount = Math.min(minDigitCount, digitCount)`
- `Math.min` langsung return nilai terkecil tanpa perlu blok `if` tambahan

---

### 🔵 Di Luar Loop:

**7. Return**
- `return minDigitCount`
- Setelah loop selesai, `minDigitCount` sudah berisi nilai minimum
- Return nilai tersebut sebagai hasil akhir

---

## 🔍 Visualisasi

**Untuk `number = 24`:**
```
minDigitCount = Infinity

factor=1 → 24%1=0 ✅ → pairedFactor=24 → "124".length=3 → Math.min(Infinity, 3) = 3
factor=2 → 24%2=0 ✅ → pairedFactor=12 → "212".length=3 → Math.min(3, 3)       = 3
factor=3 → 24%3=0 ✅ → pairedFactor=8  → "38".length=2  → Math.min(3, 2)       = 2
factor=4 → 24%4=0 ✅ → pairedFactor=6  → "46".length=2  → Math.min(2, 2)       = 2
factor=5 → 24%5≠0 ❌ skip

return 2 ✅
```

---

## 📊 Perbedaan dengan For Loop Optimal (Part 4)

| Aspek | For Loop Optimal | Best of Both |
|-------|-----------------|--------------|
| Nama variabel loop | `i` | `factor` ✅ lebih deskriptif |
| Nama pasangan faktor | `complement` | `pairedFactor` ✅ lebih intuitif |
| Update minimum | `if (digitCount < minDigitCount)` | `Math.min(...)` ✅ lebih ringkas |
| Logika & kompleksitas | O(√n) | O(√n) — sama persis |

---

## ⚠️ Pitfalls

**1) ❌ Inisialisasi minDigitCount dengan 0**
```javascript
// ❌ SALAH — 0 selalu lebih kecil, minDigitCount tidak pernah terupdate!
let minDigitCount = 0

// ✅ BENAR
let minDigitCount = Infinity
```

**2) ❌ Loop sampai number (tidak efisien)**
```javascript
// ❌ SALAH — loop terlalu banyak, dapat duplikat pasangan
for (let factor = 1; factor <= number; factor++)

// ✅ BENAR — cukup sampai √number
for (let factor = 1; factor * factor <= number; factor++)
```

**3) ❌ Lupa cek apakah factor adalah faktor**
```javascript
// ❌ SALAH — semua factor dihitung, termasuk yang bukan faktor
const pairedFactor = number / factor
const digitCount = `${factor}${pairedFactor}`.length

// ✅ BENAR
if (number % factor === 0) {
  const pairedFactor = number / factor
  const digitCount = `${factor}${pairedFactor}`.length
}
```

---

## 💡 Insight Penting

> **Kenapa `factor` lebih baik dari `i`?**
> `i` adalah nama generik yang biasa dipakai sebagai counter. `factor` langsung mendeskripsikan **apa** yang sedang diiterasi — yaitu faktor dari `number`. Kode jadi self-documenting.

> **Kenapa `Math.min` lebih baik dari blok `if`?**
> `minDigitCount = Math.min(minDigitCount, digitCount)` lebih ringkas dan tidak perlu blok `if` tambahan. Hasilnya sama, tapi kode lebih padat dan mudah dibaca sekilas.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔀 [← Kembali ke Part 5: Alternatif Functional Style](05-alternatif-functional.md)**
- **📊 [Lanjut ke Part 7: Ringkasan Semua Versi →](07-ringkasan-semua-versi.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
