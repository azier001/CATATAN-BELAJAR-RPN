# 📚 Digit Perkalian Minimum - PART 3: REFACTORING STEP-BY-STEP

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

| 🔧 Step 1 | 🔧 Step 2 | 🔧 Step 3 |
|:---------:|:---------:|:---------:|
| [Jump](#-step-1--hapus-logic-mubazir) | [Jump](#-step-2--perbaiki-naming-convention) | [Jump](#-step-3--hilangkan-array-sementara) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami proses refactoring secara bertahap
- ✅ Tahu cara menghapus logic yang tidak diperlukan
- ✅ Bisa menulis kode yang lebih efisien dan readable

---

## 🔧 Step 1 — Hapus Logic Mubazir

Seperti yang ditemukan di Part 2, dua `.map()` yang berantai bisa disederhanakan. Variabel `minNumber` dan blok `if` di dalam map tidak berkontribusi apapun — hapus saja.

```javascript
function digitPerkalianMinimum(angka) {
  const factors = []

  for (let i = 1; i * i <= angka; i++) {
    if (angka % i === 0) {
      const currentNumber = angka / i
      factors.push([i, currentNumber])
    }
  }

  const result = factors.map(value => value.join('').length)

  return Math.min(...result)
}
```

**Yang berubah:** dua `.map()` berantai → satu `.map()` yang langsung return panjang string.

---

## 🔧 Step 2 — Perbaiki Naming Convention

Ganti semua nama variabel ke bahasa Inggris yang lebih deskriptif.

```javascript
function digitPerkalianMinimum(angka) {
  const factorPairs = []

  for (let i = 1; i * i <= angka; i++) {
    if (angka % i === 0) {
      const complement = angka / i
      factorPairs.push([i, complement])
    }
  }

  const digitCounts = factorPairs.map(pair => pair.join('').length)

  return Math.min(...digitCounts)
}
```

**Yang berubah:**

| Sebelum | Sesudah | Alasan |
|---------|---------|--------|
| `factors` | `factorPairs` | Lebih jelas bahwa isinya pasangan faktor |
| `currentNumber` | `complement` | Istilah yang tepat untuk pasangan faktor |
| `value` | `pair` | Lebih deskriptif, karena isinya sepasang angka |
| `result` | `digitCounts` | Lebih jelas bahwa isinya kumpulan jumlah digit |

---

## 🔧 Step 3 — Hilangkan Array Sementara

Daripada menyimpan semua pasangan ke `factorPairs` dulu baru di-map, langsung cari minimum **di dalam loop**.

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

**Yang berubah:**

| Sebelum | Sesudah | Alasan |
|---------|---------|--------|
| Simpan ke array dulu | Langsung bandingkan di loop | Hemat memori |
| `pair.join('').length` | `` `${i}${complement}`.length `` | Template literal lebih ringkas |
| `Math.min(...digitCounts)` | `if (digitCount < minDigitCount)` | Tidak perlu spread array |

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa Step 3 lebih baik dari Step 2?</strong></summary>

Step 2 masih menyimpan semua pasangan faktor ke array terlebih dahulu sebelum mencari minimum. Step 3 langsung membandingkan di dalam loop sehingga tidak perlu array sementara — lebih hemat memori dan lebih efisien.

</details>

<details>
<summary><strong>❓ Kenapa inisialisasi minDigitCount dengan Infinity?</strong></summary>

Karena kita belum tahu berapa nilai minimum yang sebenarnya. Dengan `Infinity`, angka pertama apapun pasti lebih kecil sehingga `minDigitCount` langsung terupdate di iterasi pertama.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 2: Analisis Kode Original](02-analisis-kode-original.md)**
- **📊 [Lanjut ke Part 4: Ringkasan Algoritma Step 3 →](04-ringkasan-algoritma-step3.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
