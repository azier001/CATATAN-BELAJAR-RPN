# 📦 Challenge `deepSum` — Menjumlahkan Nested Array

### ✨ _Menaklukkan array bersarang dengan 3 pendekatan berbeda_

> 🎯 **Tujuan:** Memahami cara kerja nested array 3 dimensi dan menguasai berbagai teknik untuk menjumlahkan angka di dalamnya — dari fundamental loop hingga recursion.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📝 | [Deskripsi Challenge](#deskripsi) | Soal, test case, dan expected output |
| 🔍 | [Analisis Pola](#analisis) | Breakdown struktur array 3D |
| 🗺️ | [Roadmap Pembelajaran](#roadmap) | Alur belajar dari analisis hingga solusi |
| 📚 | [Dokumentasi Lengkap](#dokumentasi) | Link ke file-file detail |

---

<a name="deskripsi"></a>

## 📝 Deskripsi Challenge

Buatlah function `deepSum` yang menerima satu parameter berupa **nested array** (array bersarang 3 dimensi) dan mengembalikan hasil **penjumlahan semua angka** di dalamnya.

### Input & Output

```javascript
const data = [
  [
    [4, 5, 6],
    [9, 1, 2, 10]
  ]
];

console.log(deepSum(data)); 
// Output: 37
```

**Penjelasan:**
```
4 + 5 + 6 + 9 + 1 + 2 + 10 = 37
```

### Test Cases

```javascript
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10], 
    [10, 4, 10, 10, 10]
  ]
])); 
// Output: 81

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ]
])); 
// Output: 156

console.log(deepSum([])); 
// Output: No number
```

---

<a name="analisis"></a>

## 🔍 Analisis Pola Array 3 Dimensi

> [!NOTE]
> Array 3D ibarat **kotak berlapis**: kotak besar berisi kotak sedang, kotak sedang berisi kotak kecil, dan di kotak kecil-lah angka berada.

### Visualisasi Struktur

```javascript
[ // 📦 Lapisan 1 (Dimensi 1) — Kotak Besar
  [ // 📦 Lapisan 2 (Dimensi 2) — Kotak Sedang
    [4, 5, 6], // 📦 Lapisan 3 (Dimensi 3) — Kotak Kecil (Angka di sini!)
    [9, 1, 2, 10]
  ]
]
```

### Tabel Breakdown Pola

| Dimensi | Level | Analogi | Contoh Akses | Isi |
|---------|-------|---------|--------------|-----|
| **Dimensi 1** | Luar | Kotak Besar | `arr[0]` | Array 2D |
| **Dimensi 2** | Tengah | Kotak Sedang | `arr[0][1]` | Array 1D |
| **Dimensi 3** | Dalam | Kotak Kecil | `arr[0][1][2]` | **Angka!** |

### Kesimpulan Pola

> [!IMPORTANT]
> Untuk mengakses angka di array 3D, kita membutuhkan **3 lapis iterasi** (nested loop) dengan **3 kombinasi index** berurutan: `arr[i][j][k]`

---

<a name="roadmap"></a>

## 🗺️ Roadmap Pembelajaran

Dokumentasi ini mengikuti alur pembelajaran bertahap dari analisis hingga implementasi clean code:

```
📍 Fase 1: Analisis & Blueprint
    ↓
📍 Fase 2: Implementasi Bertahap (Debugging)
    ↓
📍 Fase 3: Evolusi Solusi (3 Versi)
    ↓
📍 Fase 4: Ringkasan Kode (Copy-Paste Ready)
```

### Apa yang Akan Dipelajari?

| Fase | Topik | Skill yang Dikuasai |
|------|-------|---------------------|
| **Fase 1** | Analisis & Blueprint | • Memahami struktur array 3D<br>• Merancang algoritma dengan pseudocode<br>• Mental model "Kotak Berlapis" |
| **Fase 2** | Implementasi Bertahap | • Membangun kode step-by-step<br>• Debugging kesalahan umum (`arr.length` vs `arr[i].length`)<br>• Edge case handling |
| **Fase 3** | Evolusi Solusi | • V1: Nested Loop (Fundamental)<br>• V2: Method Chaining (`.flat()` + `.reduce()`)<br>• V3: Recursion (Advanced) |
| **Fase 4** | Ringkasan Kode | • Semua versi dalam 1 file<br>• Quick comparison table<br>• Copy-paste ready |

---

<a name="dokumentasi"></a>

## 📚 Dokumentasi Lengkap

> [!TIP]
> Ikuti dokumentasi secara berurutan untuk pemahaman optimal. Setiap file memiliki link navigasi untuk memudahkan perpindahan.

### 📂 File Dokumentasi

| No | File | Deskripsi | Pilar |
|----|------|-----------|-------|
| 1️⃣ | [01-analisis-dan-blueprint.md](docs/01-analisis-dan-blueprint.md) | Visualisasi struktur, algoritma tahan lupa, blueprint kode, kamus variabel | 1, 2, 3, 7 |
| 2️⃣ | [02-implementasi-bertahap.md](docs/02-implementasi-bertahap.md) | Kode step-by-step, debugging kesalahan umum, solusi V1 | 4, 7 |
| 3️⃣ | [03-evolusi-solusi.md](docs/03-evolusi-solusi.md) | Refactoring ke V2 & V3, perbandingan 3 pendekatan | 5, 6 |
| 4️⃣ | [04-ringkasan-kode.md](docs/04-ringkasan-kode.md) | Semua versi kode final, quick comparison, copy-paste ready | Semua |

---

## 🎯 Quick Start

Jika sudah familiar dengan nested array, langsung ke:
- **[Ringkasan Kode](docs/04-ringkasan-kode.md)** — Semua solusi dalam 1 file

Jika baru belajar nested array, mulai dari:
- **[Analisis & Blueprint](docs/01-analisis-dan-blueprint.md)** — Pahami dulu strukturnya

---

## 💡 3 Pendekatan Solusi

Dokumentasi ini menyajikan 3 pendekatan berbeda dengan karakteristik masing-masing:

| Versi | Teknik | Keunggulan | Best For |
|-------|--------|------------|----------|
| **V1** | Nested Loop | Memahami fundamental | Learning, Interview |
| **V2** | Method Chaining | Clean, modern, scalable | Production Code |
| **V3** | Recursion | Elegant, dynamic depth | Advanced Use Cases |

> [!TIP]
> Kuasai ketiga pendekatan untuk memperluas toolbox problem-solving Anda!

---

## 📌 Catatan Penting

> [!WARNING]
> **Jebakan Umum (Gotchas):**
> - ❌ Menggunakan `arr.length` untuk semua loop → akan error!
> - ✅ Gunakan `arr[i].length` dan `arr[i][j].length` sesuai dimensi
> - ❌ Meletakkan `total` di dalam loop → nilai akan ter-reset!
> - ✅ Letakkan `total` di luar semua loop

---

## 🚀 Mulai Belajar

**Langkah pertama:** Baca [Analisis & Blueprint](docs/01-analisis-dan-blueprint.md)

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **2 Juni 2026** berdasarkan sesi mentoring langsung
> di **Google Antigravity** menggunakan JavaScript (Node.js).
> Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow
> `/mentor-challenge` dengan format visual `/setup-doc`.

---

**📍 Navigasi:**
- ➡️ [Mulai: Analisis & Blueprint](docs/01-analisis-dan-blueprint.md)
