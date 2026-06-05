# 🏆 Challenge: mostFrequentLargestNumbers

### ✨ _Temukan angka terbesar dan hitung berapa kali ia muncul — dengan dua fungsi terpisah_

> 🎯 **Tujuan:** Memahami keseluruhan perjalanan menyelesaikan challenge ini, mulai dari analisis pola hingga 6 versi solusi berbeda yang masing-masing punya keunggulan unik.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📝 | [Soal Challenge](#soal-challenge) | Deskripsi soal lengkap & aturan main |
| 🧪 | [Test Cases](#test-cases) | Input-output yang diharapkan |
| 🗺️ | [Peta Dokumentasi](#peta-dokumentasi) | Navigasi ke semua file detail |
| 🏷️ | [Daftar Versi Solusi](#daftar-versi-solusi) | Ringkasan 6 versi yang dibahas |
| 📌 | [Catatan Akhir](#catatan-akhir) | Metadata dokumentasi |

---

<a name="soal-challenge"></a>
## 📝 Soal Challenge

Implementasikan function `sorting` dan `getTotal` untuk mendapatkan **angka yang paling besar** dan mengetahui **berapa kali angka tersebut muncul** di dalam `arrNumber`.

**Aturan:**
- **HANYA** mengubah kode di dalam 2 function yang diberikan (`sorting` dan `getTotal`)
- **Dilarang** mengubah isi dalam function `mostFrequentLargestNumbers`

```javascript
function sorting(arrNumber) {
  // code di sini
}

function getTotal(arrNumber) {
  // code di sini
}

// ⛔ JANGAN DIUBAH
function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}
```

> [!IMPORTANT]
> Fungsi `mostFrequentLargestNumbers` sudah ditentukan oleh soal. Kita hanya boleh mengisi logika di dalam `sorting` dan `getTotal`.

---

<a name="test-cases"></a>
## 🧪 Test Cases

| # | Input | Output |
|---|-------|--------|
| 1 | `[2, 8, 4, 6, 8, 5, 8, 4]` | `'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'` |
| 2 | `[122, 122, 130, 100, 135, 100, 135, 150]` | `'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'` |
| 3 | `[1, 1, 1, 1]` | `'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'` |
| 4 | `[]` | `''` (string kosong) |

> [!TIP]
> Test case #3 membuktikan solusi harus tetap benar walau **semua elemen identik**. Test case #4 menguji **edge case array kosong** — harus return string kosong, bukan error.

---

<a name="peta-dokumentasi"></a>
## 🗺️ Peta Dokumentasi

Dokumentasi ini dipecah ke beberapa file agar mudah dinavigasi dan fokus per topik:

```
📁 dokumentasi-mostFrequentLargestNumbers/
├── 📄 README.md ← Kamu di sini
├── 📄 ringkasan-semua-versi.md          → Cheat sheet semua versi kode
└── 📂 docs/
    ├── 01-analisis-dan-strategi.md       → Visualisasi pola & blueprint
    ├── 02-solusi-bertahap.md             → Kode step-by-step (V1)
    ├── 03-evolusi-dan-clean-code.md      → Refactoring (V2) & naming
    └── 04-insight-pendekatan-lanjutan.md → 4 pendekatan advanced
```

| No | File | Apa yang Dipelajari |
|----|------|---------------------|
| 1 | [01-analisis-dan-strategi.md](docs/01-analisis-dan-strategi.md) | Visualisasi pola, tabel pengecekan, algoritma 5 langkah, kamus variabel |
| 2 | [02-solusi-bertahap.md](docs/02-solusi-bertahap.md) | Membangun kode tahap demi tahap, solusi V1 (`for...of`), edge case |
| 3 | [03-evolusi-dan-clean-code.md](docs/03-evolusi-dan-clean-code.md) | Refactoring ke V2 (`.filter()`), tabel perbandingan, naming convention |
| 4 | [04-insight-pendekatan-lanjutan.md](docs/04-insight-pendekatan-lanjutan.md) | 4 pendekatan advanced jika tidak dibatasi soal |
| 📋 | [ringkasan-semua-versi.md](ringkasan-semua-versi.md) | Cheat sheet ringkas semua versi untuk copy-paste |

---

<a name="daftar-versi-solusi"></a>
## 🏷️ Daftar Versi Solusi

Sepanjang dokumentasi ini, ada **6 versi solusi** yang dibahas:

| Versi | Nama Pendekatan | Tipe | Lokasi Detail |
|-------|----------------|------|---------------|
| V1 | `for...of` loop (Imperative) | Sesuai aturan soal | [02-solusi-bertahap.md](docs/02-solusi-bertahap.md) |
| V2 | `.filter().length` (Declarative) | Sesuai aturan soal | [03-evolusi-dan-clean-code.md](docs/03-evolusi-dan-clean-code.md) |
| V3 | `Math.max` + `.filter()` (Clean) | Bebas aturan | [04-insight](docs/04-insight-pendekatan-lanjutan.md) |
| V4 | Single Pass / `O(N)` (Algorithmic) | Bebas aturan | [04-insight](docs/04-insight-pendekatan-lanjutan.md) |
| V5 | Object Mapping (Frequency Counter) | Bebas aturan | [04-insight](docs/04-insight-pendekatan-lanjutan.md) |
| V6 | `.reduce()` + HOF (Enterprise) | Bebas aturan | [04-insight](docs/04-insight-pendekatan-lanjutan.md) |

> [!NOTE]
> **V1 & V2** menyelesaikan challenge sesuai batasan soal (dua fungsi terpisah). **V3–V6** adalah eksplorasi lanjutan jika tidak ada batasan — berguna untuk wawasan teknis dan persiapan technical interview.

---

<a name="catatan-akhir"></a>

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **5 Juni 2026** berdasarkan sesi mentoring langsung
> di **Google Antigravity** menggunakan JavaScript (Node.js).
> Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow
> `/mentor-challenge` dengan format visual `/setup-doc`.

---

➡️ **Mulai baca:** [01-analisis-dan-strategi.md](docs/01-analisis-dan-strategi.md)
