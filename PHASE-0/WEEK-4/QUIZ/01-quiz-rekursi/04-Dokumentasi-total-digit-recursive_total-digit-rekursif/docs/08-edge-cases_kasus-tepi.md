# 🧪 Part 8 — Edge Cases / Kasus Tepi

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Edge%20Cases-red?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Recursion-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 0️⃣ Input Nol | ➖ Angka Negatif | 🔣 Angka Desimal | 💡 Pelajaran | ✅ Ringkasan |
|:------------:|:----------------:|:----------------:|:------------:|:-----------:|
| [Jump](#0️⃣-input-nol) | [Jump](#-angka-negatif) | [Jump](#-angka-desimal) | [Jump](#-pelajaran-dari-edge-cases) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami bagaimana solusi bereaksi terhadap input di luar ekspektasi
- ✅ Mengerti kenapa angka negatif menyebabkan infinite loop
- ✅ Memahami perilaku `Math.floor` pada angka negatif
- ✅ Mengerti kenapa angka desimal menghasilkan output yang tidak diharapkan

---

## 0️⃣ Input Nol

```js
totalDigitRekursif(0) // → 0
```

**Versi `angka === 0`:**
Base case langsung terpenuhi → return `0` ✅

**Versi `angka < 10`:**
`0 < 10` → true → return `0` ✅

> ✅ Input `0` aman di semua versi.

---

## ➖ Angka Negatif

```js
totalDigitRekursif(-512) // 💥 RangeError: Maximum call stack size exceeded
```

### Kenapa crash?

Masalahnya ada di `Math.floor` — ia selalu membulatkan ke arah **lebih kecil** di garis bilangan:

```
... -3  -2  -1   0   1   2   3 ...
←  lebih kecil          lebih besar  →
```

Untuk angka positif, `Math.floor` mendekati nol:
```js
Math.floor(512 / 10)  // → 51  (mendekati 0) ✅
Math.floor(51  / 10)  // → 5   (mendekati 0) ✅
Math.floor(5   / 10)  // → 0   (mendekati 0) ✅
```

Untuk angka negatif, `Math.floor` **menjauhi nol**:
```js
Math.floor(-512 / 10) // -51.2 → -52  (menjauhi 0!) ⚠️
Math.floor(-52  / 10) // -5.2  → -6   (menjauhi 0!) ⚠️
Math.floor(-6   / 10) // -0.6  → -1   (menjauhi 0!) ⚠️
Math.floor(-1   / 10) // -0.1  → -1   ← stuck di sini selamanya! 💥
```

`-1 / 10 = -0.1` → `Math.floor(-0.1) = -1` → angka tidak pernah sampai `0` → **infinite loop** → crash!

### Visualisasi crash:

```
totalDigitRekursif(-512)
  → totalDigitRekursif(-52)
      → totalDigitRekursif(-6)
          → totalDigitRekursif(-1)
              → totalDigitRekursif(-1)
                  → totalDigitRekursif(-1)
                      → ... ♾️ tidak pernah berhenti → 💥 Stack Overflow
```

---

## 🔣 Angka Desimal

```js
totalDigitRekursif(5.7) // → 5.7
```

Tidak crash, tapi hasilnya **tidak sesuai ekspektasi**.

Kenapa? Karena `5.7 % 10 = 5.7` — modulo tidak memotong desimal:

```
totalDigitRekursif(5.7)
  → 5.7 % 10 = 5.7  +  totalDigitRekursif(Math.floor(0.57))
                            → totalDigitRekursif(0) → return 0
  → 5.7 + 0 = 5.7
```

> ⚠️ Hasilnya `5.7`, bukan `5 + 7 = 12`. Fungsi ini tidak dirancang untuk menangani angka desimal.

---

## 💡 Pelajaran dari Edge Cases

| Input | Hasil | Status | Keterangan |
|-------|-------|--------|------------|
| `0` | `0` | ✅ Aman | Base case langsung terpenuhi |
| `-512` | 💥 Crash | ❌ Berbahaya | `Math.floor` menjauhi nol pada angka negatif |
| `5.7` | `5.7` | ⚠️ Tidak sesuai | Modulo tidak memotong desimal |

Jika ingin fungsi ini lebih robust, bisa ditambahkan validasi di awal:

```js
const totalDigitRekursif = (angka) => {
  if (angka < 0) return 'Input harus angka positif'
  if (!Number.isInteger(angka)) return 'Input harus bilangan bulat'
  if (angka < 10) return angka

  return angka % 10 + totalDigitRekursif(Math.floor(angka / 10))
}
```

> 💬 Validasi ini **tidak diminta di soal asli** — tapi penting untuk dipahami agar kamu siap menghadapi input yang tidak terduga di challenge lain.

---

## ✅ Ringkasan

| Edge Case | Perilaku | Solusi |
|-----------|----------|--------|
| `0` | ✅ Return `0` — aman | Tidak perlu penanganan khusus |
| Angka negatif | 💥 Infinite loop → crash | Tambahkan validasi `if (angka < 0)` |
| Angka desimal | ⚠️ Return nilai desimal | Tambahkan validasi `Number.isInteger()` |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 7 — Pendekatan Iteratif](./07-iterative-approach_pendekatan-iteratif.md)**
- **📖 [Lanjut ke Part 9 — Perbandingan Semua Versi →](./09-all-versions-comparison_perbandingan-semua-versi.md)**

---

<div align="center">

Made with ❤️ for learners

</div>