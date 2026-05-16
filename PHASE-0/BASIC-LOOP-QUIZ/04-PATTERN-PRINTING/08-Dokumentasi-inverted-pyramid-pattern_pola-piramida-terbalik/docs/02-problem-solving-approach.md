# 🧠 Problem Solving Approach — Piramida Terbalik (Inverted Pyramid)

### ✨ _Dari analisis pola hingga penemuan rumus — proses berpikir yang terdokumentasi._

> 🎯 **Tujuan:** Mendokumentasikan proses berpikir (mental model) dalam menemukan logika inti challenge: memvisualisasikan pola, memecah menjadi tabel, dan merumuskan formula spasi + bintang — semuanya **sebelum menyentuh kode**.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔬 | [Fase 1: Temukan Rumusnya Dulu](#fase-1) | Analisis pola sebelum menyentuh kode |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kosong + panduan penamaan |

> [!NOTE]
> 📂 **Pembagian Peran File:**
>
> | File | Fokus | Analogi |
> |------|-------|---------|
> | **02 (file ini)** | *"The Thinking"* — Analisis pola → temukan rumus → rancang blueprint | 🧠 Sudut pandang **problem solver** |
> | **[03 — Version 1](./03-version-1-nested-loop.md)** | *"The Building & Anatomy"* — Rakit kode bertahap + bedah sintaks + simulasi trace | 🔬 Sudut pandang **builder & debugger** |
>
> Jika lupa "Gimana cara nemu rumusnya?" → buka **file 02 ini**.
> Jika ingin lihat kode dan cara kerjanya → buka **file 03**.

---

<a name="fase-1"></a>
## 🔬 Fase 1 — Temukan Rumusnya Dulu (Tanpa Kode!)

> [!IMPORTANT]
> 🧠 **Prinsip Utama:** Jangan langsung menulis kode sebelum kamu bisa menjelaskan logikanya dengan kata-kata. Temukan "hukum alam" dari pola dulu, baru terjemahkan ke kode.

### 🔍 Langkah 1 — Amati Outputnya

Perhatikan output yang diharapkan dari `piramidaTerbalik(5)`:

```text
*********
 *******
  *****
   ***
    *
```

Pertanyaan kunci yang harus dijawab:
1. Setiap baris terdiri dari **dua komponen** — apa saja?
2. Berapa jumlah **spasi di awal** setiap baris?
3. Berapa jumlah **bintang** yang dicetak setiap baris?
4. Apa pola **selisih** jumlah bintang antar baris?

### 🔍 Langkah 2 — Buat Tabel Breakdown

| Baris (`row`) | Spasi Awal | Bintang | Visualisasi |
|:---:|:---:|:---:|:---:|
| 1 | 0 | 9 | `*********` |
| 2 | 1 | 7 | `·*******` |
| 3 | 2 | 5 | `··*****` |
| 4 | 3 | 3 | `···***` |
| 5 | 4 | 1 | `····*` |

> 📌 Tanda `·` merepresentasikan karakter spasi agar terlihat jelas.

### 💡 Langkah 3 — Temukan Rumusnya

Dari tabel di atas, dua pola terlihat sangat jelas:

**Rumus Spasi Pendorong:**

| `row` | `row - 1` | Cocok? |
|:---:|:---:|:---:|
| 1 | 0 | ✅ |
| 2 | 1 | ✅ |
| 3 | 2 | ✅ |
| 4 | 3 | ✅ |
| 5 | 4 | ✅ |

> 📌 *Kenapa `row - 1`? Berbeda dengan piramida normal yang spasinya berkurang (`num - row`), di piramida terbalik spasi justru bertambah setiap baris karena bintangnya menyusut.*

**Rumus Bintang:**

Bintang menurun dengan selisih 2: **9, 7, 5, 3, 1**. Ini adalah deret ganjil terbalik! Bagaimana cara merumuskannya?

| `row` | `2 * num` | `2 * row - 1` | `2 * num - (2 * row - 1)` | Target | Cocok? |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | 10 | 1 | 9 | 9 | ✅ |
| 2 | 10 | 3 | 7 | 7 | ✅ |
| 3 | 10 | 5 | 5 | 5 | ✅ |
| 4 | 10 | 7 | 3 | 3 | ✅ |
| 5 | 10 | 9 | 1 | 1 | ✅ |

> [!TIP]
> 💡 **Kenapa rumusnya `2 * num - (2 * row - 1)`?**
>
> Pikirkan seperti ini: `2 * num` adalah "plafon" tetap (10 jika `num = 5`). Lalu kita kurangi dengan deret ganjil (`2 * row - 1` = 1, 3, 5, 7, 9) yang makin besar. Hasilnya otomatis menjadi deret ganjil yang **makin kecil**: 9, 7, 5, 3, 1.
>
> Rumus ini juga bisa disederhanakan menjadi `2 * (num - row) + 1` — keduanya secara matematis identik.

### 🔑 Rangkuman Rumus

```
🌌 Jumlah Spasi   = row - 1                       (spasi pendorong, bertambah tiap baris)
⭐ Jumlah Bintang = 2 * num - (2 * row - 1)        (deret ganjil menurun)
                  = 2 * (num - row) + 1             (bentuk alternatif yang lebih ringkas)
📝 Karakter Cetak = '*'                             (bintang saja, TANPA spasi)
```

---

<a name="blueprint"></a>
## 🗺️ Blueprint & Kamus Variabel

Sebelum menulis kode final, kita rancang "denah" strukturnya terlebih dahulu.

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|:--------------:|:-----------------:|--------|
| Parameter Input | `num` | `n`, `x` | Sudah konvensi soal; `num` cukup deskriptif |
| Penampung Pola | `pattern` | `result`, `res`, `str` | Kita menyusun sebuah **pola** visual, bukan hasil hitungan |
| Loop Utama (Baris) | `row` | `i`, `x`, `a` | Merepresentasikan **baris ke-berapa** yang sedang diproses |
| Nested Loop Spasi | `space` | `j`, `s` | Penghitung **spasi pendorong** — langsung jelas fungsinya |
| Nested Loop Bintang | `star` | `k`, `b` | Penghitung **bintang pembentuk** — langsung jelas fungsinya |

### 🗺️ Kerangka Kode (Blueprint)

```
🗺️ KERANGKA KODE (Mental Model: Spasi Bertambah + Bintang Menyusut = Piramida Terbalik)

function piramidaTerbalik(num)
│
├── let pattern = ''                         → [KANVAS] penampung pola
│
├── for row = 1 sampai num                   → [LOOP UTAMA] baris ke-berapa
│   ├── for space = 1 sampai (row - 1)       →   [NESTED 1] cetak spasi pendorong
│   ├── for star = 1 sampai (rumus bintang)  →   [NESTED 2] cetak bintang pembentuk
│   └── pattern += '\n'                      →   [PINDAH BARIS]
│
└── return pattern                           → [RETURN] kembalikan hasil akhir
```

> [!NOTE]
> 💡 **Mental Model: "Dorong Makin Dalam, Cetak Makin Sedikit"**
> Setiap baris mengikuti urutan yang sama: **dorong ke kanan** (spasi bertambah), lalu **cetak bintang** (jumlahnya berkurang), lalu **turun baris**. Bayangkan piramida koin yang sedang dibongkar dari atas — setiap lapisan, koinnya diambil dari kedua sisi sehingga makin sedikit dan makin menjorok ke tengah.

---

> [!TIP]
> 🚀 **Siap menulis kode?**
> Sekarang kamu sudah punya rumus dan blueprint-nya. Lanjut ke [03 — Version 1: Nested Loop](./03-version-1-nested-loop.md) untuk melihat bagaimana blueprint ini diterjemahkan menjadi kode JavaScript yang berfungsi — step by step!

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [01 — Challenge Overview](./01-challenge-overview.md) | [README](../README.md) | [03 — Version 1: Nested Loop](./03-version-1-nested-loop.md) |
