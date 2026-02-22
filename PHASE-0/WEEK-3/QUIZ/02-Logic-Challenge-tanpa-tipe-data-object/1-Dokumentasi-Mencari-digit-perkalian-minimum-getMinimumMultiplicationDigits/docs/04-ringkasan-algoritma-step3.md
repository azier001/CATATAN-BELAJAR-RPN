# 📚 Digit Perkalian Minimum - PART 4: RINGKASAN ALGORITMA — FOR LOOP OPTIMAL

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         📊 PART 4: RINGKASAN ALGORITMA — FOR LOOP OPTIMAL 📊            ║
║                                                                          ║
║              Step-by-Step Detail Kode Hasil Refactoring                  ║
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
- ✅ Memahami alur kerja kode hasil refactoring secara detail
- ✅ Tahu fungsi setiap baris kode
- ✅ Mengenali jebakan umum yang sering terjadi

---

## 💡 Konsep Inti

> 💡 **Best for:** Pemula, clarity, learning, debugging

```
Inisialisasi minDigitCount dengan Infinity
Loop dari 1 sampai √number (i * i <= number)
  Jika i adalah faktor dari number:
    Hitung pasangannya (complement)
    Gabungkan i dan complement jadi string → hitung panjangnya
    Jika lebih kecil dari minDigitCount → update
Return minDigitCount
```

---

## 📋 Kode

```javascript
function digitPerkalianMinimum(angka) {
  let minDigitCount = Infinity

  for (let i = 1; i * i <= angka; i++) {
    if (angka % i === 0) {
      const complement = angka / i
      const digitCount = `${i}${complement}`.length

      if (digitCount < minDigitCount) {
        minDigitCount = digitCount
      }
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

### 🔄 Di Dalam Loop `for (let i = 1; i * i <= angka; i++)`:

**2. Kondisi loop**
- Mulai dari `i = 1`
- Berjalan selama `i * i <= angka` (hanya sampai √angka)
- Setiap iterasi `i++`

**3. Cek apakah `i` adalah faktor** — `if (angka % i === 0)`
- Jika `angka % i !== 0` → skip, langsung ke iterasi berikutnya
- Jika `angka % i === 0` → masuk ke dalam blok `if`

**4. Hitung `complement`** *(di dalam `if`)*
- `const complement = angka / i`
- Complement adalah pasangan faktor dari `i`
- Contoh: `angka = 24`, `i = 3` → `complement = 8`

**5. Hitung `digitCount`** *(di dalam `if`)*
- `` const digitCount = `${i}${complement}`.length ``
- Gabungkan `i` dan `complement` jadi satu string, lalu hitung panjangnya
- Contoh: `i = 3`, `complement = 8` → `"38".length = 2`

**6. Update `minDigitCount`** *(di dalam `if`)*
- `if (digitCount < minDigitCount)`
- Jika lebih kecil → `minDigitCount = digitCount`
- Jika tidak → biarkan, lanjut ke iterasi berikutnya

---

### 🔵 Di Luar Loop:

**7. Return**
- `return minDigitCount`
- Setelah loop selesai, `minDigitCount` sudah berisi nilai minimum
- Return nilai tersebut sebagai hasil akhir

---

## 🔍 Visualisasi

**Untuk `angka = 24`:**
```
minDigitCount = Infinity

i=1 → 24%1=0 ✅ → complement=24 → "124".length=3 → 3 < Infinity → minDigitCount=3
i=2 → 24%2=0 ✅ → complement=12 → "212".length=3 → 3 < 3? NO
i=3 → 24%3=0 ✅ → complement=8  → "38".length=2  → 2 < 3 → minDigitCount=2
i=4 → 24%4=0 ✅ → complement=6  → "46".length=2  → 2 < 2? NO
i=5 → 24%5≠0 ❌ skip

return 2 ✅
```

---

## ⚠️ Pitfalls

**1) ❌ Inisialisasi minDigitCount dengan 0**
```javascript
// ❌ SALAH — 0 selalu lebih kecil, minDigitCount tidak pernah terupdate!
let minDigitCount = 0

// ✅ BENAR
let minDigitCount = Infinity
```

**2) ❌ Loop sampai angka (tidak efisien)**
```javascript
// ❌ SALAH — loop terlalu banyak, dapat duplikat pasangan
for (let i = 1; i <= angka; i++)

// ✅ BENAR — cukup sampai √angka
for (let i = 1; i * i <= angka; i++)
```

**3) ❌ Lupa cek apakah i adalah faktor**
```javascript
// ❌ SALAH — semua i dihitung, termasuk yang bukan faktor
const complement = angka / i
const digitCount = `${i}${complement}`.length

// ✅ BENAR
if (angka % i === 0) {
  const complement = angka / i
  const digitCount = `${i}${complement}`.length
}
```

**4) ❌ Pakai array sementara (tidak perlu)**
```javascript
// ❌ KURANG OPTIMAL — simpan semua dulu baru cari minimum
const factorPairs = []
factorPairs.push([i, complement])
return Math.min(...factorPairs.map(pair => pair.join('').length))

// ✅ LEBIH OPTIMAL — langsung bandingkan di dalam loop
if (digitCount < minDigitCount) {
  minDigitCount = digitCount
}
```

---

## 💡 Insight Penting

> **Kenapa `i * i <= angka` bukan `i <= Math.sqrt(angka)`?**
> Keduanya menghasilkan hasil yang sama. Tapi `i * i <= angka` lebih efisien karena menghindari pemanggilan `Math.sqrt()` di setiap iterasi — perkalian integer lebih cepat dari operasi akar kuadrat.

> **Kenapa Infinity sebagai nilai awal?**
> Karena kita belum tahu berapa minimum yang sebenarnya. Dengan `Infinity`, angka pertama apapun pasti lebih kecil sehingga `minDigitCount` langsung terupdate di iterasi pertama.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔧 [← Kembali ke Part 3: Refactoring Step-by-Step](03-refactoring-step-by-step.md)**
- **🔀 [Lanjut ke Part 5: Alternatif Functional Style →](05-alternatif-functional.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
