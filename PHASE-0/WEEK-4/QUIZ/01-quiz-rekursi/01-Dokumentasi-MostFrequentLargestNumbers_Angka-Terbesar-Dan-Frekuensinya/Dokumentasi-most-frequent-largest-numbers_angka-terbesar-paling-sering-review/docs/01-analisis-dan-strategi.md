# 🔍 Analisis & Strategi

### ✨ _Memecah masalah sebelum menulis satu baris kode pun_

> 🎯 **Tujuan:** Memahami cara menganalisis pola dari soal, menyusun algoritma tahan lupa, dan menyiapkan blueprint kode lengkap dengan kamus variabel — sebelum mulai ngoding.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔬 | [Visualisasi Pola](#visualisasi-pola) | Breakdown input → output dengan tabel |
| 🧠 | [Algoritma Tahan Lupa](#algoritma-tahan-lupa) | 5 langkah logika dengan "kenapa" & contoh angka |
| 🗺️ | [Blueprint Kode](#blueprint-kode) | Kerangka kosong + kamus variabel |

---

<a name="visualisasi-pola"></a>
## 🔬 Visualisasi Pola

Sebelum menulis kode, kita **wajib** memahami dulu apa yang sebenarnya diminta soal. Mari kita bedah menggunakan studi kasus konkret.

### Studi Kasus

```
🎯 Input    → [2, 8, 4, 6, 8, 5, 8, 4]
📌 Output   → 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
🔐 Analogi  → Cari siswa tertinggi di kelas, lalu hitung berapa siswa yang tingginya sama
```

### Membedah Fungsi `sorting`

**Pertanyaan:** Apa tugas utama dari fungsi `sorting`?

Fungsi `sorting` bertugas mengurutkan angka dari **terbesar ke terkecil** (descending). Dengan begitu, angka terbesar akan selalu "naik" ke posisi paling depan.

```
Sebelum: [2, 8, 4, 6, 8, 5, 8, 4]
Sesudah: [8, 8, 8, 6, 5, 4, 4, 2]
          ↑
          Angka terbesar pasti di index 0!
```

### Membedah Fungsi `getTotal`

**Pertanyaan:** Bagaimana cara menghitung kemunculan angka terbesar?

Kita ibaratkan prosesnya seperti **mengecek sekotak apel** — kita perlu:
1. **Tahu apel mana yang dicari** → ambil dari posisi pertama (index 0)
2. **Alat penghitung** → variabel counter mulai dari 0
3. **Cek satu per satu** → loop dari kiri ke kanan

### Tabel Pengecekan (Trace Table)

Dengan array yang sudah terurut `[8, 8, 8, 6, 5, 4, 4, 2]` dan target `8`:

| Pengecekan | Angka yang Dilihat | Sama dengan 8? | Counter |
|:----------:|:------------------:|:--------------:|:-------:|
| 1 | **8** | ✅ Ya | 1 |
| 2 | **8** | ✅ Ya | 2 |
| 3 | **8** | ✅ Ya | 3 |
| 4 | **6** | ❌ Tidak | 3 |
| 5 | **5** | ❌ Tidak | 3 |

> [!TIP]
> Membuat trace table seperti ini **sebelum ngoding** adalah kebiasaan yang sangat membantu. Kamu bisa langsung melihat apakah logikamu benar tanpa perlu trial-and-error di editor.

---

<a name="algoritma-tahan-lupa"></a>
## 🧠 Algoritma Tahan Lupa (5 Langkah)

Dari analisis di atas, kita berhasil mengunci **5 langkah logika** yang menjadi "resep" untuk menulis kode. Setiap langkah dilengkapi dengan **alasan "kenapa"** dan **contoh angka konkret** agar tidak mudah lupa.

### Langkah 1 — Urutkan Array (Descending)

```
Kenapa  → Agar angka terbesar selalu ada di posisi tetap (index 0)
Contoh  → [2, 8, 4] → sort descending → [8, 4, 2]
Fungsi  → sorting()
```

### Langkah 2 — Ambil Angka Terbesar dari Index 0

```
Kenapa  → Setelah di-sort descending, index 0 pasti berisi nilai terbesar
Contoh  → [8, 8, 8, 6, 5, 4, 4, 2] → index 0 = 8
Fungsi  → getTotal() — baris pertama
```

### Langkah 3 — Siapkan Counter = 0

```
Kenapa  → Kita butuh "alat penghitung" yang mulai dari nol
Contoh  → let counter = 0
Fungsi  → getTotal() — deklarasi variabel
```

### Langkah 4 — Loop dan Bandingkan Setiap Elemen

```
Kenapa  → Untuk mengecek apakah setiap angka sama dengan angka terbesar
Contoh  → Cek 8 === 8? Ya → counter++. Cek 6 === 8? Tidak → skip.
Fungsi  → getTotal() — blok perulangan
```

### Langkah 5 — Return String Hasil

```
Kenapa  → Soal meminta output berupa string dengan format tertentu
Contoh  → 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
Fungsi  → getTotal() — return statement
```

> [!IMPORTANT]
> Jangan lupa **edge case**: jika array kosong `[]`, langsung return string kosong `''` menggunakan teknik **Early Return** (guard clause) di baris paling atas `getTotal`.

---

<a name="blueprint-kode"></a>
## 🗺️ Blueprint Kode

### A. Kamus Variabel

Sebelum ngoding, tentukan dulu nama-nama variabel yang akan dipakai:

| Lokasi / Peran | ✅ Rekomendasi | ❌ Hindari | Alasan |
|----------------|---------------|------------|--------|
| Angka terbesar | `highestNumber` | `max`, `x`, `angka` | Sangat spesifik — "angka tertinggi" |
| Alat penghitung | `counter` | `jml`, `c`, `hitung` | Lazim & universal di dunia programming |
| Elemen tunggal di loop | `number` | `i`, `val`, `e` | Singular dari parameter plural `arrNumber` |
| Callback `.sort()` | `a`, `b` | `num1`, `angka2` | Sudah jadi konvensi standar global JS |

> [!NOTE]
> Penggunaan `a` dan `b` di callback `.sort((a, b) => b - a)` sudah menjadi standar global di kalangan JavaScript developer. Tidak perlu diubah ke nama yang lebih "deskriptif" karena justru akan membingungkan.

### B. Kerangka Kode (Blueprint)

Berikut adalah struktur kosong yang siap diisi — setiap bagian sudah diberi komentar peran:

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Sort → Ambil → Hitung → Return)

function sorting(arrNumber) {
  // [BAGIAN 1] → Urutkan array descending lalu return hasilnya
}

function getTotal(arrNumber) {
  // [GUARD]   → Cek array kosong, return '' jika iya

  // [BAGIAN 2] → Ambil angka terbesar dari index 0

  // [BAGIAN 3] → Siapkan counter = 0

  // [BAGIAN 4] → Loop: bandingkan setiap elemen dengan angka terbesar

  // [BAGIAN 5] → Return string hasil dengan template literal
}
```

> [!TIP]
> Mental model **"Sort → Ambil → Hitung → Return"** bisa dijadikan anchor untuk mengingat urutan logika. Jika lupa detail kode, ingat 4 kata ini dulu.

---

⬅️ [Kembali ke README](../README.md) · ➡️ [02-solusi-bertahap.md](02-solusi-bertahap.md)
