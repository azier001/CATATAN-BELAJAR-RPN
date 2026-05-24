# 🔢 Mengecek Angka Prima (`isPrime`) — Part 1

### ✨ _Dari Nol Sampai Paham: Analisis Pola, Algoritma, dan Solusi Bertahap_

> 🎯 **Tujuan:** Memahami cara kerja pengecekan bilangan prima dari level paling dasar — dimulai dari analisis logika murni (tanpa kode), lalu membangun solusi JavaScript secara step-by-step.

---

<div align="center">
  <a href="./README.md">🏠 Kembali ke Menu Utama (README)</a> | 
  <a href="./dokumentasi-isPrime-part2.md">➡️ Lanjut ke Part 2 (Evolusi & Gotchas)</a>
</div>

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔍 | [Visualisasi & Analisis Pola](#analisis) | Dry-run manual: bagaimana otak kita menentukan prima |
| 🧠 | [Algoritma Tahan Lupa](#algoritma) | Step-by-step dengan penjelasan "Kenapa" + contoh angka |
| 🗺️ | [Blueprint + Kamus Variabel](#blueprint) | Kerangka kode kosong + tabel naming rekomendasi |
| 🛠️ | [Pendekatan Bertahap](#bertahap) | Membangun solusi dari nol: Step 1 → Step 2 → Step 3 |
| 🧪 | [Test Cases](#test-cases) | Verifikasi solusi dengan berbagai input |

---

<a name="analisis"></a>
## 🔍 Pilar 1 — Visualisasi & Analisis Pola

### 📖 Apa itu Angka Prima?

> [!IMPORTANT]
> 🔑 **Definisi:** Angka prima adalah bilangan yang **hanya habis dibagi oleh 1 dan angka itu sendiri**. Tidak ada pembagi lain di antaranya.

### 🧪 Dry-Run Manual: Bagaimana Cara Mengecek?

Karena angka prima **pasti** bisa dibagi 1 dan dirinya sendiri, kita hanya perlu menguji **angka-angka di antara keduanya** (dari `2` sampai `angka - 1`). Jika ada satu saja yang habis membagi, maka **bukan prima**.

**Kasus 1: `angka = 6`** (Bukan Prima)

| Pembagi | Proses Modulo | Hasil | Habis Dibagi? | Kesimpulan |
|:-------:|:-------------:|:-----:|:-------------:|:----------:|
| 2 | `6 % 2` | 0 | ✅ Ya | **Stop! Bukan prima** (`false`) |

> 💡 Saat pembagi `2` langsung menghasilkan sisa `0`, kita **tidak perlu** mengecek 3, 4, dan 5. Langsung simpulkan bukan prima!

---

**Kasus 2: `angka = 7`** (Prima)

| Pembagi | Proses Modulo | Hasil | Habis Dibagi? | Kesimpulan |
|:-------:|:-------------:|:-----:|:-------------:|:----------:|
| 2 | `7 % 2` | 1 | ❌ Tidak | Lanjut → |
| 3 | `7 % 3` | 1 | ❌ Tidak | Lanjut → |
| 4 | `7 % 4` | 3 | ❌ Tidak | Lanjut → |
| 5 | `7 % 5` | 2 | ❌ Tidak | Lanjut → |
| 6 | `7 % 6` | 1 | ❌ Tidak | Loop selesai |

> ✅ **Semua pembagi sudah dites, tidak ada yang habis membagi → 7 adalah Prima!**

### 🎯 Rumus Logika yang Ditemukan

```
UNTUK SETIAP angka dari 2 sampai (angka - 1):
  JIKA angka habis dibagi → BUKAN PRIMA (langsung stop)

JIKA semua sudah dites dan tidak ada yang habis → PRIMA
```

> [!TIP]
> 💡 **Analogi Dunia Nyata:**
>
> | | Angka Prima | Kunci Rumah |
> |---|---|---|
> | 🔒 | Hanya bisa "dibuka" oleh 1 dan dirinya sendiri | Hanya bisa dibuka oleh kunci aslinya |
> | 🔓 | Jika ada pembagi lain → bukan prima | Jika kunci lain bisa membuka → kunci rusak |

---

<a name="algoritma"></a>
## 🧠 Pilar 2 — Algoritma Tahan Lupa

Setiap langkah di bawah memiliki 3 elemen: **Label Peran**, **Penjelasan Kenapa**, dan **Contoh Angka Konkret**.

---

**1.** 🛡️ **Guard Clause — Basmi Edge Case `[IF STATEMENT]`**

Cek apakah `num < 2`. *(Kenapa: Angka 0, 1, dan negatif secara definisi matematika bukan bilangan prima. Contoh: `isPrime(1)` → langsung `false`, tanpa perlu masuk loop.)*

---

**2.** 🔄 **Loop Pencarian Pembagi `[FOR LOOP]`** (Iterasi `i` dari `2` sampai `num - 1`):

- **Uji Pembagian `[IF CONDITION]`**: Cek `num % i === 0`. *(Kenapa: Operator modulo `%` mengembalikan sisa bagi. Jika sisanya `0`, berarti `num` habis dibagi `i` — artinya `num` punya pembagi selain 1 dan dirinya sendiri. Contoh: `6 % 2 = 0` → 6 habis dibagi 2, maka 6 bukan prima.)*
- **Early Return `[RETURN FALSE]`**: Langsung `return false`. *(Kenapa: Cukup menemukan 1 pembagi saja untuk membuktikan bukan prima. Tidak perlu cek sisanya — hemat waktu!)*

---

**3.** ✅ **Kesimpulan Akhir `[RETURN TRUE]`** — Di **luar** loop.

*(Kenapa: Kita baru boleh menyimpulkan angka itu prima **SETELAH** semua kemungkinan pembagi sudah dites dan tidak ada satupun yang habis membagi. Contoh: `isPrime(7)` → loop berjalan dari 2-6, tidak ada yang habis, baru `return true`.)*

> [!CAUTION]
> 🔴 **Jebakan Fatal:** Jangan letakkan `return true` di dalam `else` (di dalam loop)! Jika di dalam loop, saat `7 % 2 !== 0`, dia langsung `return true` — padahal baru mengecek pembagi `2` saja, belum mengecek 3, 4, 5, 6!

---

<a name="blueprint"></a>
## 🗺️ Pilar 3 — Blueprint + Kamus Variabel

### A. Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|---------------|-------------------|--------|
| Parameter Input | `num`, `angka` | `x`, `n`, `val` | Jelas merepresentasikan angka yang diuji |
| Loop Counter (Pembagi) | `i`, `divisor` | `x`, `y`, `j` | `i` standar matematika; `divisor` bikin `num % divisor === 0` terbaca natural |
| Nama Function | `isPrime` | `cekPrima`, `primeCheck` | Awalan `is` = standar boolean function (`isPrime(7)` → "apakah 7 prima?") |

### B. Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Guard → Loop → Conclude)

const isPrime = (num) => {
  // [GUARD CLAUSE] → basmi edge case (num < 2)
  
  // [FOR LOOP] → iterasi pembagi dari 2 sampai num-1
  //   [IF CONDITION] → jika habis dibagi → return false
  
  // [RETURN TRUE] → lolos semua tes → bilangan prima
};
```

---

<a name="bertahap"></a>
## 🛠️ Pilar 4 — Pendekatan Bertahap (Step-by-Step)

### 📌 Step 1: Buat Kerangka Loop

Tulis loop dasar yang berjalan dari `2` sampai sebelum `angka`:

```javascript
const angkaPrima = (angka) => {
  for (let i = 2; i < angka; i++) {
    // (isi nanti)
  }
};
```

> ✅ **Checkpoint:** Loop berjalan dari `2` sampai `angka - 1`. Benar!

---

### 📌 Step 2: Tambahkan Kondisi Pengecekan

Isi loop dengan logika modulo. Jika ditemukan pembagi → langsung `return false`:

```javascript
const angkaPrima = (angka) => {
  for (let i = 2; i < angka; i++) {
    if (angka % i === 0) return false;  // ← Ketemu pembagi = bukan prima
  }
};
```

> ✅ **Checkpoint:** Early return saat menemukan pembagi pertama. Efisien!

---

### 📌 Step 3: Tambahkan Kesimpulan Akhir

Letakkan `return true` **di luar loop** — hanya tereksekusi jika semua pembagi sudah dicek:

```javascript
const angkaPrima = (angka) => {
  for (let i = 2; i < angka; i++) {
    if (angka % i === 0) return false;
  }

  return true;  // ← Semua pembagi sudah dicek, tidak ada yang habis membagi
};
```

> ✅ **Solusi pertama selesai dan berfungsi!** 🎉

---

<a name="test-cases"></a>
## 🧪 Test Cases

```javascript
console.log(angkaPrima(3));   // true  ✅
console.log(angkaPrima(7));   // true  ✅
console.log(angkaPrima(6));   // false ✅
console.log(angkaPrima(23));  // true  ✅
console.log(angkaPrima(33));  // false ✅
```

---

> 📝 **Catatan:** Part 1 ini mencakup Pilar 1-4 dari 7 Pilar Kualitas. Lanjut ke **Part 2** untuk Evolusi Solusi (4 versi!), Naming Convention, dan Gotchas.

<br>

<div align="center">
  <a href="./README.md">🏠 Kembali ke Menu Utama (README)</a> | 
  <a href="./dokumentasi-isPrime-part2.md">➡️ Lanjut ke Part 2 (Evolusi & Gotchas)</a>
</div>
