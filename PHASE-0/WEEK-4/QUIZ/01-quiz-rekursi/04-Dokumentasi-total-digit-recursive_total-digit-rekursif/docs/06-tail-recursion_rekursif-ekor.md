# 🐾 Part 6 — Tail Recursion / Rekursif Ekor

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow?style=for-the-badge)
![Approach](https://img.shields.io/badge/Approach-Tail%20Recursion-blue?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Recursion-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 💻 Kode | 🎯 Apa itu Tail Recursion | 🔍 Cara Kerja | 📊 Visualisasi | 🆚 Perbandingan | ✅ Ringkasan |
|:-------:|:-------------------------:|:-------------:|:--------------:|:---------------:|:-----------:|
| [Jump](#-kode) | [Jump](#-apa-itu-tail-recursion) | [Jump](#-cara-kerja) | [Jump](#-visualisasi) | [Jump](#-perbandingan-dengan-rekursif-biasa) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami apa itu tail recursion (rekursif ekor)
- ✅ Mengerti perbedaan antara rekursif biasa dan tail recursion
- ✅ Memahami konsep akumulator (`total`) dalam tail recursion
- ✅ Bisa membedakan mana rekursif yang "menunggu" dan mana yang tidak

---

## 💻 Kode

```js
function totalDigitRecursive(number, total = 0) {
  if (number === 0) {
    return total
  }

  return totalDigitRecursive(
    Math.floor(number / 10),
    total + (number % 10)
  )
}
```

---

## 🎯 Apa itu Tail Recursion?

**Tail recursion** adalah rekursif di mana pemanggilan rekursif adalah **operasi terakhir** yang dilakukan — tidak ada operasi lain yang menunggu hasilnya.

Bandingkan dua pola ini:

**Rekursif biasa — ada operasi yang menunggu:**
```js
return angka % 10 + totalDigitRekursif(Math.floor(angka / 10))
//     ^^^^^^^^^^^
//     operasi ini MENUNGGU hasil rekursif dulu, baru bisa dijumlahkan
```

**Tail recursion — langsung return rekursif:**
```js
return totalDigitRecursive(Math.floor(number / 10), total + number % 10)
//     langsung return rekursif, tidak ada operasi yang menunggu
```

> 💡 Kunci tail recursion: **semua perhitungan dilakukan di parameter**, bukan setelah rekursif selesai.

---

## 🔍 Cara Kerja

Parameter `total` berfungsi sebagai **akumulator** — penampung hasil sementara yang terus dibawa dari satu pemanggilan ke pemanggilan berikutnya.

- Nilai awal `total` adalah `0` (via default parameter)
- Setiap pemanggilan, `total` ditambah digit terakhir: `total + (number % 10)`
- Angkanya dikurangi satu digit: `Math.floor(number / 10)`
- Saat `number === 0`, semua digit sudah terkumpul di `total` — langsung return

---

## 📊 Visualisasi

Untuk input `512`:

```
totalDigitRecursive(512, 0)
  → totalDigitRecursive(51, 0 + 2)   → total = 2
      → totalDigitRecursive(5, 2 + 1)  → total = 3
          → totalDigitRecursive(0, 3 + 5) → total = 8
              → number === 0, return 8 ✅
```

Perhatikan — **tidak ada "unwinding" (proses balik)**! Begitu sampai base case, hasilnya langsung tersedia. Berbeda dengan rekursif biasa yang harus "balik" satu per satu untuk menyelesaikan penjumlahan yang tertunda.

**Rekursif biasa — ada unwinding:**
```
totalDigitRekursif(512)
  → 2 + totalDigitRekursif(51)         ← menunggu...
            → 1 + totalDigitRekursif(5) ← menunggu...
                      → return 5
            → 1 + 5 = 6                 ← unwinding
  → 2 + 6 = 8                           ← unwinding
```

**Tail recursion — tidak ada unwinding:**
```
totalDigitRecursive(512, 0)
  → totalDigitRecursive(51, 2)
      → totalDigitRecursive(5, 3)
          → totalDigitRecursive(0, 8)
              → return 8 ✅ langsung selesai!
```

---

## 🆚 Perbandingan dengan Rekursif Biasa

| | Rekursif Biasa (Part 4) | Tail Recursion (Part 6) |
|--|:-----------------------:|:-----------------------:|
| Operasi yang menunggu | ✅ Ada — `angka % 10 +` menunggu | ❌ Tidak ada |
| Akumulator | ❌ Tidak ada | ✅ Ada — parameter `total` |
| Unwinding | ✅ Ada | ❌ Tidak ada |
| Default parameter | ❌ Tidak perlu | ✅ Ada — `total = 0` |
| Hasil | ✅ Benar | ✅ Benar |
| Potensi optimasi engine | ❌ Tidak bisa dioptimasi | ✅ Bisa dioptimasi (TCO) |

> 💬 **TCO (Tail Call Optimization)** adalah fitur di beberapa bahasa pemrograman di mana engine bisa mengoptimasi tail recursion agar tidak menumpuk call stack. JavaScript secara teknis mendukung TCO di strict mode, tapi mayoritas browser belum mengimplementasikannya sepenuhnya.

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Pendekatan | Tail recursion dengan akumulator |
| Base case | `number === 0` |
| Akumulator | Parameter `total`, dimulai dari `0` |
| Unwinding | Tidak ada — hasil langsung tersedia di base case |
| Hasil | ✅ Benar, semua test case passed |
| Keunggulan | Tidak ada operasi yang "menunggu" di setiap level |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 5 — Pendekatan String: Depan ke Belakang](./05-string-approach-front-to-back_pendekatan-string-depan-ke-belakang.md)**
- **📖 [Lanjut ke Part 7 — Pendekatan Iteratif →](./07-iterative-approach_pendekatan-iteratif.md)**

---

<div align="center">

Made with ❤️ for learners

</div>