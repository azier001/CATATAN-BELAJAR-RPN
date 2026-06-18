# 🔍 Challenge: cariPelaku — Menghitung Kemunculan Substring dengan Regex

### ✨ _Latihan menggunakan Regular Expression untuk mencari pola teks di dalam string_

> 🎯 **Tujuan:** Memahami cara kerja Regex dasar (`/pattern/g`), method `.match()`, dan penanganan edge case `null` di JavaScript.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📝 | [Soal Challenge](#soal) | Deskripsi soal dan syarat pengerjaan |
| 🧪 | [Test Cases](#test-cases) | Input-output yang harus dipenuhi |
| 📂 | [Struktur Dokumentasi](#struktur) | Navigasi ke file-file penjelasan detail |

---

<a name="soal"></a>

## 📝 Soal Challenge

Diberikan sebuah function `cariPelaku(kalimat)` yang menerima **satu parameter** berupa string. Function akan me-`return` **jumlah berapa kali** ditemukan kata `"abc"` secara berturut-turut di dalam kalimat tersebut.

> [!IMPORTANT]
> **Syarat:** Gunakan **Regex** untuk melatih kemampuan Regular Expression.

```javascript
function cariPelaku(str) {
  // you can only write your code here!
}
```

---

<a name="test-cases"></a>

## 🧪 Test Cases

| # | Input | Expected Output | Penjelasan Singkat |
|---|-------|-----------------|-------------------|
| 1 | `'mabcvabc'` | `2` | `m`-**abc**-`v`-**abc** |
| 2 | `'abcdabdc'` | `1` | **abc**-`dabdc` (hanya 1 match) |
| 3 | `'bcabcac'` | `1` | `bc`-**abc**-`ac` |
| 4 | `'abcabcabc'` | `3` | **abc**-**abc**-**abc** |
| 5 | `'babcbacabc'` | `2` | `b`-**abc**-`bac`-**abc** |

---

<a name="struktur"></a>

## 📂 Struktur Dokumentasi

```
dokumentasi-cariPelaku/
├── README.md                        ← 📍 Kamu di sini
├── ringkasan-kode.md                ← 📋 Cheat sheet semua versi kode
└── docs/
    ├── 01-analisis-pola.md          ← 🔍 Visualisasi, Regex, Blueprint
    └── 02-solusi-dan-evolusi.md     ← 🚀 Solusi bertahap, Evolusi, Clean Code
```

| No | File | Isi |
|----|------|-----|
| 🔍 | [01-analisis-pola.md](docs/01-analisis-pola.md) | Visualisasi pola, pengenalan Regex, Blueprint & Kamus Variabel |
| 🚀 | [02-solusi-dan-evolusi.md](docs/02-solusi-dan-evolusi.md) | Pendekatan bertahap (V1), Evolusi (V2), Naming Convention, Gotchas |
| 📋 | [ringkasan-kode.md](ringkasan-kode.md) | Cheat sheet ringkas semua versi kode (copy-paste ready) |

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **18 Juni 2026** berdasarkan sesi mentoring langsung
> di **Google Antigravity** menggunakan JavaScript (Node.js).
> Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow
> `/mentor-challenge` dengan format visual `/setup-doc`.

---

➡️ **Selanjutnya:** [01-analisis-pola.md](docs/01-analisis-pola.md)
