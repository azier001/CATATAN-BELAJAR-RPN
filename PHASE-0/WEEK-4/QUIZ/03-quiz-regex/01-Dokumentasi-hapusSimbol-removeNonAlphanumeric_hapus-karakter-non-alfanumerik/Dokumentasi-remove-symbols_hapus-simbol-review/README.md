# 🧹 Challenge: Hapus Simbol

### ✨ _Bersihkan string dari karakter non-alphanumeric — pertahankan hanya huruf & angka!_

> 🎯 **Tujuan:** Memahami cara memfilter karakter dalam string menggunakan
> pendekatan iterasi manual (`for...of` + Regex `.test()`) maupun
> pendekatan fungsional (`String.replace()` + Regex negasi `\W`).

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📝 | [Deskripsi Soal](#deskripsi-soal) | Fungsi yang harus dibuat dan aturannya |
| 🧪 | [Test Cases](#test-cases) | Contoh input → output yang diharapkan |
| 🔑 | [Aturan Logika](#aturan-logika) | Pola inti yang ditemukan dari analisis |
| 📂 | [Struktur Dokumentasi](#struktur-dokumentasi) | Peta navigasi file-file dokumentasi |

---

<a name="deskripsi-soal"></a>

## 📝 Deskripsi Soal

Buatlah fungsi `hapusSimbol` yang menerima sebuah parameter *string* dan mengembalikan *string* baru **tanpa simbol dan spasi** — hanya huruf (a-z, A-Z) dan angka (0-9) yang dipertahankan.

```javascript
function hapusSimbol(str) {
  // you can only write your code here!
}
```

> [!IMPORTANT]
> Kode solusi **hanya boleh ditulis di dalam body fungsi** — tidak boleh mengubah
> nama fungsi atau parameter.

---

<a name="test-cases"></a>

## 🧪 Test Cases

```javascript
console.log(hapusSimbol('test%$4aa'));           // 'test4aa'
console.log(hapusSimbol('devel0p3r s3j@@ati'));  // 'devel0p3rs3jati'
console.log(hapusSimbol('ma@#k!an~'));           // 'makan'
console.log(hapusSimbol('coding'));              // 'coding'
console.log(hapusSimbol('1+3-5*2=100'));         // '1352100'
```

| # | Input | Output | Catatan |
|---|-------|--------|---------|
| 1 | `'test%$4aa'` | `'test4aa'` | Simbol `%$` dihapus, angka `4` tetap |
| 2 | `'devel0p3r s3j@@ati'` | `'devel0p3rs3jati'` | Spasi & `@@` dihapus |
| 3 | `'ma@#k!an~'` | `'makan'` | Beberapa simbol tersebar dihapus |
| 4 | `'coding'` | `'coding'` | Tanpa simbol → tidak berubah |
| 5 | `'1+3-5*2=100'` | `'1352100'` | Operator math dihapus, angka tetap |

---

<a name="aturan-logika"></a>

## 🔑 Aturan Logika

Dari analisis test cases, ditemukan pola sederhana:

```
🎯 Aturan   → Pertahankan HANYA karakter alphanumeric
📌 Tetap    → Huruf (a-z, A-Z) dan Angka (0-9)
🗑️ Hapus    → Simbol khusus (@, #, !, ~, %, $, +, -, *, =, dll) dan Spasi
```

> [!TIP]
> Challenge ini melatih kemampuan **string filtering** — skill fundamental
> yang sering muncul dalam validasi input, sanitasi data, dan pemrosesan teks.

---

<a name="struktur-dokumentasi"></a>

## 📂 Struktur Dokumentasi

```
dokumentasi-hapusSimbol/
├── 📄 README.md                        ← Kamu di sini!
├── 📋 ringkasan-kode.md                ← Cheat sheet copy-paste
└── 📁 docs/
    ├── 01-analisis-dan-solusi.md        ← Analisis pola + solusi bertahap
    └── 02-evolusi-dan-clean-code.md     ← Refactoring + naming convention
```

| File | Pilar yang Dicakup | Link |
|------|--------------------|------|
| `docs/01-analisis-dan-solusi.md` | Visualisasi, Algoritma, Blueprint, Pendekatan Bertahap, Gotcha | [Buka →](docs/01-analisis-dan-solusi.md) |
| `docs/02-evolusi-dan-clean-code.md` | Evolusi Solusi, Naming Convention | [Buka →](docs/02-evolusi-dan-clean-code.md) |
| `ringkasan-kode.md` | Cheat Sheet semua versi | [Buka →](ringkasan-kode.md) |

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **18 Juni 2026** berdasarkan sesi mentoring langsung
> di **Google Antigravity** menggunakan JavaScript (Node.js).
> Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow
> `/mentor-challenge` dengan format visual `/setup-doc`.

---

➡️ **Selanjutnya:** [Analisis & Solusi Bertahap](docs/01-analisis-dan-solusi.md)
