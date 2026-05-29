# 🔄 changeMe — Transformasi Array Multidimensi ke Object Log

### ✨ _Mengubah data mentah array menjadi objek terstruktur yang siap dicetak ke konsol_

> 🎯 **Tujuan:** Memahami cara mengonversi array multidimensi `[Nama, Nama, Gender, Tahun]` menjadi objek JavaScript `{ firstName, lastName, gender, age }` yang dicetak rapi ke konsol — lengkap dengan validasi umur dinamis.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Deskripsi Soal](#deskripsi-soal) | Apa yang diminta challenge ini |
| 🔍 | [Visualisasi & Analisis Pola](#visualisasi-analisis) | Tabel breakdown pola sebelum ngoding (Pilar 1) |
| 🗺️ | [Peta Pembelajaran](#peta-pembelajaran) | Navigasi ke dokumentasi tiap fase |
| 📝 | [Catatan Akhir](#catatan-akhir) | Konteks pembuatan dokumentasi |

---

<a name="deskripsi-soal"></a>

## 📖 Deskripsi Soal

Diberikan sebuah function `changeMe(arr)` yang menerima **satu parameter** berupa array multidimensi. Setiap sub-array berisi data satu orang dengan urutan tetap:

```
[ Nama Depan, Nama Belakang, Gender, Tahun Lahir ]
```

**Kode Soal:**

```javascript
function changeMe(arr) {
  // you can only write your code here!
}

// TEST CASES
changeMe([
  ['Christ', 'Evans', 'Male', 1982],
  ['Robert', 'Downey', 'Male']
]);

changeMe([]); // ""
```

**Expected Output:**

```
Christ Evans: {
  firstName: 'Christ',
  lastName: 'Evans',
  gender: 'Male',
  age: 44                       ← 2026 - 1982 = 44
}
Robert Downey: {
  firstName: 'Robert',
  lastName: 'Downey',
  gender: 'Male',
  age: 'Invalid Birth Year'     ← Tahun lahir tidak ada
}
```

> [!IMPORTANT]
> 🔔 **Perhatikan dua hal krusial:**
> 1. Format cetak = **`"Nama Lengkap:"` diikuti objek murni** (bukan string template mirip objek!)
> 2. Jika input `[]`, output hanya string kosong `""`

---

<a name="visualisasi-analisis"></a>

## 🔍 Visualisasi & Analisis Pola

> **Pilar 1 dari 7 Pilar Kualitas** — Memahami masalah secara visual SEBELUM menulis kode.

### 1️⃣ Mapping Indeks → Properti Objek

Setiap elemen di sub-array punya **posisi tetap** yang mewakili properti tertentu:

| Index | Properti | Christ `[..., 1982]` | Robert `[...]` (tanpa tahun) |
|:-----:|:---------|:---------------------|:-----------------------------|
| `0`   | `firstName` | `'Christ'` | `'Robert'` |
| `1`   | `lastName`  | `'Evans'`  | `'Downey'` |
| `2`   | `gender`    | `'Male'`   | `'Male'`   |
| `3`   | `age` ← 🧮 | `TahunSekarang - 1982` | `undefined` (tidak ada) |

### 2️⃣ Logika Perhitungan Umur (`age`)

```
🎯 Aturan    →  Umur dihitung DINAMIS berdasarkan tahun saat kode dijalankan
📌 Method    →  new Date().getFullYear()  (bukan hardcode 2023!)
🔐 Proteksi  →  Tahun lahir WAJIB ada DAN tidak boleh di masa depan
```

Aturan validasi dalam bentuk tabel keputusan:

| Kondisi | `birthYear` ada? | `birthYear <= tahunSekarang`? | Hasil `age` |
|:--------|:----------------:|:----------------------------:|:------------|
| ✅ Valid | ✔️ Ya | ✔️ Ya | `tahunSekarang - birthYear` |
| ❌ Kosong | ✖️ Tidak (`undefined`) | — | `'Invalid Birth Year'` |
| ❌ Masa Depan | ✔️ Ya | ✖️ Tidak (misal: 2080) | `'Invalid Birth Year'` |

> [!TIP]
> 💡 **Insight Penting:**
> Menggunakan `new Date().getFullYear()` membuat kode **tahan waktu** — dijalankan tahun berapapun, hasilnya tetap akurat. Bandingkan dengan hardcode `2023 - birthYear` yang langsung usang tahun depan!

### 3️⃣ Edge Case: Array Kosong

```
Input:   changeMe([])
Output:  ""  (string kosong via console.log)
```

> [!CAUTION]
> 🔴 **Jangan lupa:** Pengecekan array kosong HARUS dilakukan **di awal** fungsi sebelum logika utama. Jika tidak, `forEach` / `for...of` akan error atau menghasilkan output tak terduga.

---

<a name="peta-pembelajaran"></a>

## 🗺️ Peta Pembelajaran

Dokumentasi ini dipecah menjadi **3 file detail** di folder `docs/`:

| No | File | Isi | Pilar yang Dicakup |
|----|------|-----|--------------------|
| 📘 | [`01-solusi-bertahap.md`](docs/01-solusi-bertahap.md) | Algoritma tahan lupa, blueprint kode, pendekatan step-by-step, kode V1 (`for...of`) | Pilar 2, 3, 4 |
| 📗 | [`02-evolusi-solusi.md`](docs/02-evolusi-solusi.md) | Refactoring ke `.forEach()`, naming convention, gotchas & peringatan | Pilar 5, 6, 7 |
| 📙 | [`03-insight-dan-review.md`](docs/03-insight-dan-review.md) | Code review kode awal, perbandingan 3 versi, best practice akhir | Refleksi |

```
📂 dokumentasi-changeMe/
├── 📄 README.md                     ← 📍 Kamu di sini
└── 📂 docs/
    ├── 📘 01-solusi-bertahap.md
    ├── 📗 02-evolusi-solusi.md
    └── 📙 03-insight-dan-review.md
```

---

<a name="catatan-akhir"></a>

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **29 Mei 2026** berdasarkan sesi mentoring langsung di **Google Antigravity** menggunakan JavaScript (Node.js). Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow `/mentor-challenge` dengan format visual `/setup-doc`.

---

[➡️ Mulai ke 01 — Solusi Bertahap](docs/01-solusi-bertahap.md)
