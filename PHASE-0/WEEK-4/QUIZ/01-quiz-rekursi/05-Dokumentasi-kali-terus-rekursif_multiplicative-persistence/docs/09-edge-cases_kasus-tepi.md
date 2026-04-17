# ⚠️ Part 9 — Edge Cases / Kasus Tepi

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Edge%20Cases-red?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellow?style=for-the-badge)

---

## 🧭 Quick Jump

| 🎯 Konsep | 0️⃣ Input Nol | ➖ Negatif | 🔢 Satu Digit | 🌊 Desimal | ✅ Ringkasan |
|:---------:|:------------:|:---------:|:-------------:|:---------:|:-----------:|
| [Jump](#-konsep-utama) | [Jump](#-input-0) | [Jump](#-input-negatif) | [Jump](#-input-satu-digit) | [Jump](#-input-desimal) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami bagaimana setiap versi menangani input di luar ekspektasi
- ✅ Mengerti perbedaan perilaku antar versi untuk input edge case
- ✅ Mengerti kenapa base case `angka < 10` lebih robust dari `digits.length === 1`
- ✅ Siap menghadapi edge case di challenge serupa

---

## 🎯 Konsep Utama

Edge case adalah **input di luar kondisi normal** yang bisa menyebabkan hasil tidak terduga atau error. Untuk `kaliTerusRekursif`, edge case yang perlu diperhatikan:

| Edge Case | Contoh |
|-----------|--------|
| Input `0` | `kaliTerusRekursif(0)` |
| Input negatif | `kaliTerusRekursif(-5)` |
| Input satu digit | `kaliTerusRekursif(7)` |
| Input desimal | `kaliTerusRekursif(2.4)` |

---

## 0️⃣ Input `0`

```js
kaliTerusRekursif(0)
```

| Versi | Hasil | Penjelasan |
|-------|-------|------------|
| Versi 1 (String) | `0` ✅ | `"0"`.length = 1 → return `Number("0")` = 0 |
| Versi 2 (Matematik) | `0` ✅ | `0 < 10` → return `0` |
| Versi 3 (Nested While) | `0` ✅ | `0 >= 10` false → langsung return `0` |
| Versi 4 (Tail Recursion) | `0` ✅ | `0 < 10` → return `0 * 1` = 0 |
| Versi 5 (Rekursif + For) | `0` ✅ | `0 < 10` → return `0` |
| Versi 6 (For dalam While) | `0` ✅ | `0 >= 10` false → langsung return `0` |

Semua versi menangani input `0` dengan benar. ✅

---

## ➖ Input Negatif

```js
kaliTerusRekursif(-5)
```

| Versi | Hasil | Penjelasan |
|-------|-------|------------|
| Versi 1 (String) | ♾️ infinite loop ❌ | `"-5"`.length = 2 → masuk rekursif, tidak pernah berhenti |
| Versi 2 (Matematik) | `-5` ⚠️ | `-5 < 10` → return `-5` langsung |
| Versi 3 (Nested While) | `-5` ⚠️ | `-5 >= 10` false → langsung return `-5` |
| Versi 4 (Tail Recursion) | `-5` ⚠️ | `-5 < 10` → return `-5 * 1` = `-5` |
| Versi 5 (Rekursif + For) | `-5` ⚠️ | `-5 < 10` → return `-5` langsung |
| Versi 6 (For dalam While) | `-5` ⚠️ | `-5 >= 10` false → langsung return `-5` |

> ⚠️ Versi 1 berbahaya untuk input negatif karena `String(-5)` menghasilkan `"-5"` yang panjangnya 2 — sehingga rekursif tidak pernah menemukan base case dan menyebabkan infinite loop.

> 💡 Versi lainnya mengembalikan angka negatif apa adanya — ini bukan hasil yang salah, namun soal tidak mendefinisikan perilaku untuk input negatif.

---

## 🔢 Input Satu Digit

```js
kaliTerusRekursif(7)
```

| Versi | Hasil | Penjelasan |
|-------|-------|------------|
| Versi 1 (String) | `7` ✅ | `"7"`.length = 1 → return `Number("7")` = 7 |
| Versi 2 (Matematik) | `7` ✅ | `7 < 10` → return `7` |
| Versi 3 (Nested While) | `7` ✅ | `7 >= 10` false → langsung return `7` |
| Versi 4 (Tail Recursion) | `7` ✅ | `7 < 10` → return `7 * 1` = 7 |
| Versi 5 (Rekursif + For) | `7` ✅ | `7 < 10` → return `7` |
| Versi 6 (For dalam While) | `7` ✅ | `7 >= 10` false → langsung return `7` |

Semua versi menangani input satu digit dengan benar. ✅

---

## 🌊 Input Desimal

```js
kaliTerusRekursif(2.4)
```

| Versi | Hasil | Penjelasan |
|-------|-------|------------|
| Versi 1 (String) | `NaN` ❌ | `"2.4"`.length = 3 → `Number(".")` = `NaN` → hasil selalu `NaN` |
| Versi 2 (Matematik) | `2` ⚠️ | `2.4 % 10` = 2.4, `Math.floor(2.4/10)` = 0 → `2.4 * 0` = 0... tidak akurat |
| Versi 3 (Nested While) | `2` ⚠️ | Sama seperti versi 2 |
| Versi 4 (Tail Recursion) | `2` ⚠️ | Sama seperti versi 2 |
| Versi 5 (Rekursif + For) | `NaN` ❌ | Sama seperti versi 1 |
| Versi 6 (For dalam While) | `NaN` ❌ | Sama seperti versi 1 |

> ⚠️ Tidak ada versi yang menangani input desimal dengan benar — ini wajar karena soal hanya mendefinisikan input berupa **bilangan bulat positif**.

---

## 🛡️ Cara Menangani Edge Case

Jika ingin membuat fungsi lebih robust, tambahkan validasi di awal:

```js
function kaliTerusRekursif(angka) {
  // tangani input tidak valid
  if (!Number.isInteger(angka) || angka < 0) {
    return 'Input harus bilangan bulat positif';
  }

  if (angka < 10) return angka;

  let str = angka.toString();
  let hasil = 1;

  for (let i = 0; i < str.length; i++) {
    hasil *= Number(str[i]);
  }

  return kaliTerusRekursif(hasil);
}
```

---

## ✅ Ringkasan

| Edge Case | Versi Aman | Versi Bermasalah |
|-----------|-----------|-----------------|
| Input `0` | Semua versi ✅ | — |
| Input negatif | Versi 2, 3, 4, 5, 6 ⚠️ | Versi 1 ❌ (infinite loop) |
| Input satu digit | Semua versi ✅ | — |
| Input desimal | — | Semua versi ❌ atau ⚠️ |

> 💬 Untuk keperluan challenge, semua versi sudah cukup — soal hanya mendefinisikan input berupa bilangan bulat positif. Validasi tambahan diperlukan jika fungsi digunakan di lingkungan produksi.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 8 — Perbandingan Semua Versi](./08-perbandingan-semua-versi_all-versions-comparison.md)**
- **📖 [Lanjut ke Ringkasan Algoritma →](../ringkasan-algoritma-semua-versi.md)**

---

<div align="center">

Made with ❤️ for learners

</div>