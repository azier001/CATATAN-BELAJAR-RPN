# ⚠️ Base Case Pitfall — Jebakan Base Case

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Base%20Case-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

---

## 📚 Daftar Isi

- [Kesalahan yang Terjadi](#kesalahan)
- [Kenapa Bisa Crash?](#kenapa)
- [Trace Manual](#trace)
- [Solusi yang Benar](#solusi)
- [Pitfalls](#pitfalls)
- [Insight Penting](#insight)

---

<a name="kesalahan"></a>
## ❌ Kesalahan yang Terjadi

Saat mencoba menggunakan `===` sebagai base case:

```js
const makanTerusRekursif = (waktu, count = 0) => {
  if (waktu === 0) return count  // ← SALAH!
  return makanTerusRekursif(waktu - 15, count + 1)
}
```

Hasilnya:

```
RangeError: Maximum call stack size exceeded
```

Fungsi berjalan terus tanpa henti sampai JavaScript kehabisan memori! 💥

---

<a name="kenapa"></a>
## 🔍 Kenapa Bisa Crash?

Masalahnya ada di sini — `waktu` tidak selalu habis tepat di angka `0`.

Perhatikan contoh `makanTerusRekursif(66)`:

```
66 - 15 = 51
51 - 15 = 36
36 - 15 = 21
21 - 15 = 6
6  - 15 = -9  ← langsung lompat ke -9, tidak pernah menyentuh 0!
```

Karena `waktu` tidak pernah tepat `0`, kondisi `waktu === 0` tidak pernah terpenuhi. Rekursif terus berjalan tanpa henti → **crash!**

---

<a name="trace"></a>
## 🔬 Trace Manual

Ini yang terjadi di balik layar saat pakai `===`:

```
makanTerusRekursif(66)   → waktu = 66, bukan 0, lanjut
makanTerusRekursif(51)   → waktu = 51, bukan 0, lanjut
makanTerusRekursif(36)   → waktu = 36, bukan 0, lanjut
makanTerusRekursif(21)   → waktu = 21, bukan 0, lanjut
makanTerusRekursif(6)    → waktu = 6,  bukan 0, lanjut
makanTerusRekursif(-9)   → waktu = -9, bukan 0, lanjut ← harusnya berhenti!
makanTerusRekursif(-24)  → waktu = -24, bukan 0, lanjut
makanTerusRekursif(-39)  → ... terus sampai crash 💥
```

---

<a name="solusi"></a>
## ✅ Solusi yang Benar

Gunakan `<=` bukan `===` agar semua angka yang **kurang dari atau sama dengan 0** tertangkap:

```js
const makanTerusRekursif = (waktu, count = 0) => {
  if (waktu <= 0) return count  // ← BENAR!
  return makanTerusRekursif(waktu - 15, count + 1)
}
```

Sekarang saat `waktu` mencapai `-9`:

```
makanTerusRekursif(-9) → -9 <= 0 ✅ BASE CASE! return count
```

Rekursif berhenti dengan aman. 🎉

---

<a name="pitfalls"></a>
## 🪤 Pitfalls

### ❌ Salah — Pakai `=== 0`

```js
if (waktu === 0) return count
```

```
makanTerusRekursif(66) → crash! 💥
// RangeError: Maximum call stack size exceeded
```

Hanya berhenti jika waktu tepat `0` — tidak pernah terjadi jika input tidak habis dibagi 15.

---

### ✅ Benar — Pakai `<= 0`

```js
if (waktu <= 0) return count
```

```
makanTerusRekursif(66) → 5 ✅
```

Berhenti saat waktu `0` **atau negatif** — aman untuk semua input.

---

### ❌ Salah — Pakai `< 0`

```js
if (waktu < 0) return count
```

```
makanTerusRekursif(0) → crash! 💥
```

Saat input `0`, kondisi `0 < 0` tidak terpenuhi → rekursif terus berjalan tanpa henti.

---

<a name="insight"></a>
## 💡 Insight Penting

> **Kapan pakai `=== 0` vs `<= 0` di base case rekursif?**
> Pakai `=== 0` hanya jika kamu **yakin** nilai akan selalu mencapai tepat `0` — misalnya saat menghitung mundur dengan langkah `1`. Pakai `<= 0` jika langkah pengurangannya bisa melewati `0` — seperti di challenge ini yang mengurangi `15` setiap langkah.

> **Pelajaran dari kesalahan ini:**
> Sebelum menentukan base case, selalu tanya: *"Apakah nilai ini dijamin akan mencapai kondisi tersebut?"* Kalau tidak yakin, trace manual dulu dengan beberapa contoh input.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 7 — Visualisasi Semua Versi](./07-visualization-all-versions_visualisasi-semua-versi.md)**
- **📖 [Lanjut ke Part 9 — Test Cases →](./09-test-cases_kasus-pengujian.md)**
