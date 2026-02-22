# 📚 Digit Perkalian Minimum - PART 2: ANALISIS KODE ORIGINAL

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         📋 PART 2: ANALISIS KODE ORIGINAL 📋                            ║
║                                                                          ║
║              Apakah Kode Sudah Sesuai Kriteria?                          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📋 Kode Original | ✅ Yang Benar | ⚠️ Bug | 📊 Kesimpulan |
|:----------------:|:------------:|:------:|:-------------:|
| [Jump](#-kode-original) | [Jump](#-yang-sudah-benar) | [Jump](#️-bug-yang-ditemukan) | [Jump](#-kesimpulan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja kode original
- ✅ Tahu bagian mana yang sudah benar
- ✅ Tahu bug yang ada dan kenapa tidak terdeteksi

---

## 📋 Kode Original

```javascript
function digitPerkalianMinimum(angka) {
  const factors = []

  for (let i = 1; i * i <= angka; i++) {
    if (angka % i === 0) {
      const currentNumber = angka / i
      factors.push([i, currentNumber])
    }
  }

  const result = factors.map(value => value.join('')).map(value => {
    const lengthValue = value.length
    let minNumber = Infinity

    if (lengthValue < minNumber) {
      minNumber = lengthValue
    }

    return minNumber
  })

  return Math.min(...result)
}
```

---

## ✅ Yang Sudah Benar

Kode original **sudah benar secara output** — semua test case menghasilkan nilai yang tepat:

```
digitPerkalianMinimum(24)  → 2  ✅
digitPerkalianMinimum(90)  → 3  ✅
digitPerkalianMinimum(20)  → 2  ✅
digitPerkalianMinimum(179) → 4  ✅
digitPerkalianMinimum(1)   → 2  ✅
```

Logika mencari faktor juga sudah benar:
- Loop `i * i <= angka` — efisien, hanya sampai √angka ✅
- `angka % i === 0` — cek apakah i adalah faktor ✅

---

## ⚠️ Bug yang Ditemukan

### Bug: `minNumber` di dalam `.map()` tidak berfungsi

```javascript
const result = factors.map(value => value.join('')).map(value => {
  const lengthValue = value.length
  let minNumber = Infinity  // ⚠️ direset setiap iterasi!

  if (lengthValue < minNumber) {
    minNumber = lengthValue
  }

  return minNumber  // selalu return lengthValue itu sendiri
})
```

**Masalahnya:** `minNumber = Infinity` dideklarasikan **di dalam** `.map()`, sehingga direset setiap iterasi. Artinya `minNumber` tidak pernah benar-benar membandingkan antar pasangan — dia hanya selalu return `lengthValue` itu sendiri.

**Kenapa tetap menghasilkan output benar?**
Karena `Math.min(...result)` di akhir yang **sebenarnya melakukan pekerjaan mencari minimum**, bukan logika di dalam `.map()`. Variabel `minNumber` dan blok `if` di dalam map sepenuhnya **mubazir**.

---

## 📊 Kesimpulan

| Aspek | Status |
|-------|--------|
| Output / hasil | ✅ Benar |
| Logika cari faktor | ✅ Benar |
| Logic `minNumber` di dalam map | ❌ Bug (tidak berfungsi sesuai niat) |
| Naming convention | ❌ Bahasa Indonesia |
| Keterbacaan | ⚠️ Membingungkan |

Kode sudah menghasilkan output yang benar, tapi ada logic mubazir yang perlu dibersihkan. Di Part 3 kita akan refactor bertahap.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 1: Soal & Pemahaman](01-soal-dan-pemahaman.md)**
- **🔧 [Lanjut ke Part 3: Refactoring Step-by-Step →](03-refactoring-step-by-step.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
