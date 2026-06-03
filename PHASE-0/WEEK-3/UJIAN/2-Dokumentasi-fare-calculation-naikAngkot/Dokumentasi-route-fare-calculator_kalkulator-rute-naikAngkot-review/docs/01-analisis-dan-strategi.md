# 📊 Analisis & Strategi

### ✨ _Memecah soal menjadi rumus matematika sebelum menulis satu baris kode pun_

> 🎯 **Tujuan:** Memahami cara menganalisis pola data, menemukan rumus tarif, dan menyiapkan kerangka kode (blueprint) beserta kamus variabel sebagai panduan implementasi.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔍 | [Visualisasi Rute & Index](#visualisasi) | Mengubah huruf halte menjadi angka yang bisa dihitung |
| 🧮 | [Rumus Tarif](#rumus-tarif) | Formula inti + pembuktian dengan angka konkret |
| ⚠️ | [Gotcha: Nilai Negatif](#gotcha-negatif) | Jebakan jika arah perjalanan terbalik |
| 🗺️ | [Blueprint Kerangka Kode](#blueprint) | Struktur kosong sebagai peta sebelum ngoding |
| 📖 | [Kamus Variabel](#kamus-variabel) | Panduan penamaan variabel yang deskriptif |

---

<a name="visualisasi"></a>

## 🔍 Visualisasi Rute & Index

Rute angkot bersifat statis: `['A', 'B', 'C', 'D', 'E', 'F']`. Agar bisa dihitung secara matematis, setiap halte direpresentasikan sebagai **index array**:

| Halte | A | B | C | D | E | F |
|:-----:|:-:|:-:|:-:|:-:|:-:|:-:|
| **Index** | 0 | 1 | 2 | 3 | 4 | 5 |

> [!NOTE]
> **Insight kunci:** Begitu huruf diubah menjadi angka, kita bisa menggunakan **operasi pengurangan** sederhana untuk menghitung jarak tempuh. Inilah inti dari seluruh solusi.

Cara mendapatkan index di JavaScript → gunakan method `indexOf()`:

```javascript
const routes = ['A', 'B', 'C', 'D', 'E', 'F'];
routes.indexOf('B');  // → 1
routes.indexOf('F');  // → 5
```

---

<a name="rumus-tarif"></a>

## 🧮 Rumus Tarif

Setelah halte menjadi angka, rumusnya sangat sederhana:

```
Tarif = (Index Tujuan − Index Naik) × 2000
```

### Pembuktian dengan Angka Konkret

**Kasus Dimitri** — naik dari `'B'` ke `'F'`:

```
Index 'F' = 5
Index 'B' = 1

Tarif = (5 − 1) × 2000
      =    4    × 2000
      = 8000   ✅
```

**Kasus Icha** — naik dari `'A'` ke `'B'`:

```
Index 'B' = 1
Index 'A' = 0

Tarif = (1 − 0) × 2000
      =    1    × 2000
      = 2000   ✅
```

> [!TIP]
> **Pilar "Algoritma Tahan Lupa":** Selalu verifikasi rumus dengan menghitung manual menggunakan angka nyata. Jika hasilnya cocok, rumusmu sudah benar — baru boleh lanjut ngoding.

---

<a name="gotcha-negatif"></a>

## ⚠️ Gotcha: Nilai Negatif

> [!WARNING]
> **Jebakan umum:** Bagaimana jika penumpang naik dari `'F'` ke `'B'` (arah terbalik)?
>
> ```
> Index 'B' = 1
> Index 'F' = 5
>
> Tarif = (1 − 5) × 2000 = −4 × 2000 = −8000 ❌
> ```
>
> Hasilnya **negatif**! Tarif tidak boleh minus.

**Solusi:** Gunakan `Math.abs()` untuk memastikan hasil selalu positif:

```javascript
const fare = Math.abs(originIndex - destinationIndex) * 2000;
// Math.abs(-4) → 4 → 4 × 2000 = 8000 ✅
```

Dengan `Math.abs()`, rumus aman untuk **kedua arah** perjalanan.

---

<a name="blueprint"></a>

## 🗺️ Blueprint Kerangka Kode

Sebelum menulis kode lengkap, siapkan **kerangka kosong** sebagai peta mental:

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Transformasi Array → Array of Object)
const naikAngkot = (arrPenumpang) => {
  // [BAGIAN 1] → Definisikan daftar rute statis
  // [BAGIAN 2] → Siapkan wadah hasil (array kosong)
  // [BAGIAN 3] → Loop setiap penumpang:
  //               → Ekstrak nama, asal, tujuan (destructuring)
  //               → Cari index asal & tujuan
  //               → Hitung tarif dengan rumus
  //               → Masukkan objek hasil ke wadah
  // [BAGIAN 4] → Return wadah hasil
};
```

> [!TIP]
> Menulis kerangka dulu membantu kamu **berpikir terstruktur** — saat mengisi kode nanti, tinggal ikuti komentar peran di setiap bagian. Lihat implementasinya di [Implementasi Bertahap](02-implementasi-bertahap.md).

---

<a name="kamus-variabel"></a>

## 📖 Kamus Variabel

Panduan penamaan variabel internal agar kode mudah dibaca:

| Peran Variabel | ❌ Hindari | ✅ Rekomendasi | Alasan |
|---|---|---|---|
| Nama penumpang | `n`, `p`, `x` | `passengerName` | Deskriptif, jelas ini nama orang |
| Halte naik | `a`, `awal` | `origin` | Istilah standar industri untuk keberangkatan |
| Halte turun | `b`, `akhir` | `destination` | Pasangan natural dari `origin` |
| Index halte naik | `i`, `idx1` | `originIndex` | Gabungan peran + tipe data |
| Index halte turun | `j`, `idx2` | `destinationIndex` | Gabungan peran + tipe data |
| Total tarif | `t`, `total` | `fare` | Istilah spesifik untuk ongkos perjalanan |
| Kumpulan rute | `r`, `rt` | `routes` | Plural → menandakan ini sebuah Array |

> [!IMPORTANT]
> Key objek output (`penumpang`, `naikDari`, `tujuan`, `bayar`) **tidak boleh diubah** karena sudah dikunci soal. Kamus ini hanya untuk **variabel internal** di dalam fungsi.

---

⬅️ [Kembali ke README](../README.md) · ➡️ [Implementasi Bertahap](02-implementasi-bertahap.md)
