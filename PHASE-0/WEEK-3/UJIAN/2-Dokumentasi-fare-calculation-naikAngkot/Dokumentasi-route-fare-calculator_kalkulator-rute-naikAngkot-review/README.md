# 🚐 Challenge: Naik Angkot

### ✨ _Menghitung tarif angkot berdasarkan jarak rute — dari analisis logika hingga clean code_

> 🎯 **Tujuan:** Memahami keseluruhan perjalanan belajar dalam menyelesaikan challenge **Naik Angkot** — mulai dari menemukan rumus, membangun kode bertahap, hingga menulis solusi yang bersih dan profesional.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧩 | [Deskripsi Soal](#deskripsi-soal) | Apa yang diminta challenge ini |
| 📥 | [Format Input & Output](#format-io) | Struktur data masuk dan keluar |
| 🗺️ | [Peta Dokumentasi](#peta-dokumentasi) | Navigasi ke seluruh file pembahasan |
| 📝 | [Catatan Akhir](#catatan-akhir) | Metadata dokumentasi |

---

<a name="deskripsi-soal"></a>

## 🧩 Deskripsi Soal

Buatlah sebuah fungsi `naikAngkot` yang menerima daftar penumpang beserta halte keberangkatan dan tujuannya. Fungsi ini harus menghitung **tarif perjalanan** setiap penumpang berdasarkan **jumlah rute yang dilalui**, di mana setiap rute berbiaya **Rp 2.000**.

Rute angkot yang tersedia bersifat **statis** dan berurutan:

```
A ──→ B ──→ C ──→ D ──→ E ──→ F
        setiap perpindahan = Rp 2.000
```

---

<a name="format-io"></a>

## 📥 Format Input & Output

**Input** — Array of Array (setiap sub-array berisi 3 elemen string):

```javascript
const penumpang = [
  ['Dimitri', 'B', 'F'],   // nama, halte naik, halte turun
  ['Icha',    'A', 'B'],
];
```

**Output** — Array of Object:

```javascript
[
  { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  { penumpang: 'Icha',    naikDari: 'A', tujuan: 'B', bayar: 2000 },
]
```

> [!IMPORTANT]
> Key objek pada output (`penumpang`, `naikDari`, `tujuan`, `bayar`) sudah **dikunci oleh soal** — tidak boleh diganti namanya.

---

<a name="peta-dokumentasi"></a>

## 🗺️ Peta Dokumentasi

Dokumentasi ini disusun secara bertahap mengikuti alur berpikir saat menyelesaikan challenge:

| No | File | Isi Pembahasan |
|----|------|----------------|
| 1 | [📊 Analisis & Strategi](docs/01-analisis-dan-strategi.md) | Visualisasi rute → rumus tarif → kerangka kode → kamus variabel |
| 2 | [🔨 Implementasi Bertahap](docs/02-implementasi-bertahap.md) | Kode V1 `for...of` → evolusi ke V2 `.map()` → perbandingan → gotchas |
| 3 | [✍️ Clean Code & Naming](docs/03-clean-code-dan-naming.md) | Standar penamaan variabel → kode final English best practice |
| 4 | [💻 Ringkasan Versi Kode](ringkasan-versi-kode.md) | Cheat sheet semua versi — copy-paste ready |

> [!TIP]
> Jika ingin langsung melihat kode final, buka [Ringkasan Versi Kode](ringkasan-versi-kode.md). Jika ingin memahami **proses berpikirnya**, mulai dari file nomor 1.

---

<a name="catatan-akhir"></a>

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **3 Juni 2026** berdasarkan sesi mentoring langsung
> di **Google Antigravity** menggunakan JavaScript (Node.js).
> Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow
> `/mentor-challenge` dengan format visual `/setup-doc`.

---

➡️ **Mulai Belajar:** [Analisis & Strategi](docs/01-analisis-dan-strategi.md)
