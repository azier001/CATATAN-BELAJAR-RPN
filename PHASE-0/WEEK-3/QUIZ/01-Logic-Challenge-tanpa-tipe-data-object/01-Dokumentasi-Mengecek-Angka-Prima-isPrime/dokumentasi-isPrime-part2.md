# 🔢 Mengecek Angka Prima (`isPrime`) — Part 2

### ✨ _Evolusi Solusi, Naming Convention, dan Jebakan Umum_

> 🎯 **Tujuan:** Mengeksplorasi 4 versi solusi dari basic sampai kompetitif, memahami kapan pakai versi mana, dan menghindari jebakan-jebakan umum yang ditemukan selama sesi mentoring.

---

<div align="center">
  <a href="./dokumentasi-isPrime-part1.md">⬅️ Kembali ke Part 1 (Analisis & Algoritma)</a> | 
  <a href="./README.md">🏠 Kembali ke Menu Utama (README)</a>
</div>

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔄 | [Evolusi Solusi (4 Versi)](#evolusi) | Dari basic loop sampai pola 6k±1 |
| 📊 | [Perbandingan Semua Versi](#perbandingan) | Tabel perbandingan komprehensif |
| 🏷️ | [Naming Convention](#naming) | Tabel rekomendasi penamaan variabel |
| ⚠️ | [Gotchas & Jebakan Umum](#gotchas) | 5 jebakan yang ditemukan selama sesi |

---

<a name="evolusi"></a>
## 🔄 Pilar 5 — Evolusi Solusi

### 🟢 Versi 1: Basic Loop (Solusi Pertama)

> **🏷️ Level:** Pemula | **⏱️ Kompleksitas:** O(n)

```javascript
const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};
```

**Cara Kerja:** Loop dari `2` sampai `num - 1`. Jika ada pembagi → bukan prima. *(Kenapa mulai dari 2? Karena semua angka pasti habis dibagi 1. Kenapa sampai `num - 1`? Karena semua angka pasti habis dibagi dirinya sendiri. Contoh: `isPrime(7)` → cek 2,3,4,5,6 → tidak ada yang habis → `true`.)*

> [!NOTE]
> 💡 Solusi ini **benar dan mudah dipahami**, tapi **tidak efisien** untuk angka besar. `isPrime(1000000)` harus melakukan 999.998 iterasi!

---

### 🟡 Versi 2: Optimasi Akar Kuadrat (`Math.sqrt`)

> **🏷️ Level:** Menengah | **⏱️ Kompleksitas:** O(√n)

```javascript
const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};
```

**Kenapa cukup sampai `√num`?** Jika `num` punya pembagi, salah satunya **pasti** ≤ akar kuadratnya. *(Contoh: 36 = 6×6. Pembagi: 2,3,4,6,9,12,18,36. Semua pasangan pembagi punya satu sisi yang ≤ 6 = √36.)*

**Efek Performa:**
```
isPrime(1000000):
  V1 Basic   → 999.998 iterasi
  V2 Sqrt    →   1.000 iterasi  ← 1000x lebih cepat! 🚀
```

> [!CAUTION]
> 🔴 **Jebakan:** Harus pakai `<=` (kurang dari **sama dengan**), bukan `<`!
> Jika pakai `<`, angka seperti `9` (√9 = 3) tidak akan dites pembagian dengan `3`, sehingga salah dianggap prima.

---

### 🟠 Versi 3: Optimasi Angka Ganjil (`i * i` + `i += 2`)

> **🏷️ Level:** Advanced | **⏱️ Kompleksitas:** O(√n / 2)

```javascript
const isPrimeOdd = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};
```

**2 Upgrade dari Versi 2:**
1. **`i * i <= num`** menggantikan `i <= Math.sqrt(num)`. *(Kenapa: Perkalian integer jauh lebih ringan bagi CPU daripada menghitung akar kuadrat. `i * i` ≈ 10-20x lebih cepat.)*
2. **`i += 2`** melewati semua angka genap. *(Kenapa: Satu-satunya angka genap yang prima hanya `2`. Setelah kita handle `2` di guard clause, loop hanya perlu mengecek ganjil: 3, 5, 7, 9, 11... → jumlah iterasi terpotong setengah!)*

> [!NOTE]
> 💡 **Guard clause `if (num === 2) return true`** wajib ada karena loop dimulai dari `3` — tanpa guard ini, angka `2` akan lolos loop tanpa dicek dan `return true` secara kebetulan (hasil benar, tapi logika tidak eksplisit).

---

### 🔴 Versi 4: Pola 6k ± 1 (Algoritma Pamungkas)

> **🏷️ Level:** Competitive Programming | **⏱️ Kompleksitas:** O(√n / 3)

```javascript
const isPrime6k = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};
```

**Fondasi Matematika:**

> Semua bilangan bisa ditulis dalam salah satu bentuk: `6k`, `6k+1`, `6k+2`, `6k+3`, `6k+4`, `6k+5`.
> - `6k, 6k+2, 6k+4` → **genap** (habis dibagi 2)
> - `6k+3` → **habis dibagi 3**
> - Hanya `6k+1` dan `6k+5` (= `6k-1`) yang **mungkin prima!**

**Visualisasi:**

| i | Bentuk | i + 2 | Bentuk | Angka yang DISKIP |
|:-:|:------:|:-----:|:------:|:-----------------:|
| 5 | 6×1 - 1 | 7 | 6×1 + 1 | 6, 8, 9, 10 |
| 11 | 6×2 - 1 | 13 | 6×2 + 1 | 12, 14, 15, 16 |
| 17 | 6×3 - 1 | 19 | 6×3 + 1 | 18, 20, 21, 22 |
| 23 | 6×4 - 1 | 25 | 6×4 + 1 | 24, 26, 27, 28 |

> *(Kenapa `i += 6`? Karena setiap kelipatan 6, kita hanya perlu mengecek 2 tetangga kiri dan kanan. Ini melompati 4 angka sekaligus per iterasi — **3x lebih efisien** dari basic loop!)*

---

<a name="perbandingan"></a>
## 📊 Perbandingan Semua Versi

| Aspek | V1 Basic | V2 Sqrt | V3 Ganjil | V4 6k±1 |
|-------|:--------:|:-------:|:---------:|:-------:|
| **Kompleksitas** | O(n) | O(√n) | O(√n/2) | **O(√n/3)** |
| **Kecepatan** | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Readability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Best For** | Belajar | Production | Modern Code | Competition |

**Simulasi `isPrime(1000000)` — Jumlah Iterasi:**

```
V1 Basic     →  999.998 iterasi
V2 Sqrt      →    1.000 iterasi   (1000x lebih cepat)
V3 Ganjil    →      500 iterasi   (2000x lebih cepat)
V4 6k±1      →      167 iterasi   (6000x lebih cepat!) 🚀
```

### 🎯 Decision Tree: Kapan Pakai Versi Mana?

```
Apakah kamu pemula / sedang belajar?
├─ YA  → Versi 1 (Basic Loop)
└─ TIDAK → Lanjut ↓

Apakah untuk production / project tim?
├─ YA  → Versi 3 (i * i + Ganjil)  ← RECOMMENDED ⭐
└─ TIDAK → Lanjut ↓

Apakah competitive programming / processing jutaan angka?
├─ YA  → Versi 4 (6k ± 1)
└─ TIDAK → Versi 3 (i * i + Ganjil)
```

---

<a name="naming"></a>
## 🏷️ Pilar 6 — Naming Convention

| Variabel (Peran) | ❌ Bad / Kurang Jelas | ✅ Good / Direkomendasikan | Alasan |
|------------------|-----------------------|----------------------------|--------|
| Angka Input | `x`, `n`, `val` | `num`, `number`, `angka` | Jelas merepresentasikan nilai yang diuji |
| Pembagi Loop | `x`, `y`, `j` | `i`, `divisor` | `divisor` membuat `num % divisor === 0` terbaca seperti bahasa manusia |
| Nama Function | `cekPrima`, `primeCheck` | `isPrime`, `angkaPrima` | Awalan **`is`** = standar untuk function yang return boolean |

> [!TIP]
> 🏆 **Best Practice:** Gunakan awalan **`is`** untuk semua function boolean!
>
> | Pattern | Contoh | Dibaca Seperti |
> |---------|--------|---------------|
> | `isX(value)` | `isPrime(7)` | "Apakah 7 itu prima?" |
> | `isX(value)` | `isEven(4)` | "Apakah 4 itu genap?" |
> | `hasX(value)` | `hasVowel("hello")` | "Apakah 'hello' punya vokal?" |

---

<a name="gotchas"></a>
## ⚠️ Pilar 7 — Gotchas & Jebakan Umum

Berikut 5 jebakan yang **benar-benar ditemukan** selama sesi mentoring kita:

---

### 🐛 Jebakan 1: Meletakkan `return true` di dalam `else`

```javascript
// ❌ SALAH — return true di dalam loop
for (let i = 2; i < num; i++) {
  if (num % i === 0) return false;
  else return true;  // 💥 Baru cek pembagi 2, langsung bilang prima!
}

// ✅ BENAR — return true di LUAR loop
for (let i = 2; i < num; i++) {
  if (num % i === 0) return false;
}
return true;  // ← Baru eksekusi setelah SEMUA pembagi dicek
```

> 📌 **Pelajaran:** `return true` hanya boleh dieksekusi **setelah semua pembagi** sudah diuji.

---

### 🐛 Jebakan 2: Menggeser start loop ke `3` tanpa handle angka genap

```javascript
// ❌ SALAH — isPrime(4) = true (BUG!)
for (let i = 3; i < num; i++) {
  if (num % i === 0) return false;
}
return true;  // 4 lolos karena tidak pernah dibagi 2!

// ✅ BENAR — buang angka genap dulu, baru mulai dari 3
if (num === 2) return true;
if (num % 2 === 0) return false;
for (let i = 3; i * i <= num; i += 2) { ... }
```

> 📌 **Pelajaran:** Jika menggeser start ke `3`, **wajib** handle semua angka genap di guard clause.

---

### 🐛 Jebakan 3: Pakai `<` bukan `<=` pada batas `Math.sqrt`

```javascript
// ❌ SALAH — isPrime(9) = true (BUG!)
for (let i = 2; i < Math.sqrt(9); i++)   // i < 3, hanya cek i=2
// 9 % 2 !== 0 → lolos → return true 💥

// ✅ BENAR — pakai <=
for (let i = 2; i <= Math.sqrt(9); i++)  // i <= 3, cek i=2 DAN i=3
// 9 % 3 === 0 → return false ✅
```

> 📌 **Pelajaran:** Akar kuadratnya sendiri **harus ikut dites**!

---

### 🐛 Jebakan 4: Lupa handle `num < 2`

```javascript
// ❌ SALAH — isPrime(1) = true, isPrime(-5) = true
for (let i = 2; i < num; i++) { ... }
return true;  // Loop tidak berjalan untuk 1 → langsung true 💥

// ✅ BENAR — guard clause di awal
if (num < 2) return false;  // 0, 1, negatif = bukan prima
```

> 📌 **Pelajaran:** Angka 0, 1, dan negatif **bukan** bilangan prima secara definisi matematika.

---

### 🐛 Jebakan 5: Guard clause `num <= 2` dengan return salah

```javascript
// ❌ SALAH — Satu baris untuk handle semuanya
if (num <= 2) return num <= 2;  // isPrime(1) = true (BUG!)
// Karena (1 <= 2) = true 💥

// ✅ BENAR — Pisahkan guard clause dengan jelas
if (num < 2) return false;
if (num === 2) return true;
```

> 📌 **Pelajaran:** Jangan "pintar-pintaran" menggabungkan guard clause jika hasilnya ambigu.

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **24 Mei 2026** berdasarkan sesi mentoring langsung (Socratic method) di **Google Antigravity**. Semua jebakan yang didokumentasikan benar-benar ditemukan selama proses belajar — bukan teori, tapi pengalaman nyata.

<br>

<div align="center">
  <a href="./dokumentasi-isPrime-part1.md">⬅️ Kembali ke Part 1 (Analisis & Algoritma)</a> | 
  <a href="./README.md">🏠 Kembali ke Menu Utama (README)</a>
</div>
