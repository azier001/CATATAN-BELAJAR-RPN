# 📊 Version Comparison — Piramida Terbalik (Inverted Pyramid)

### ✨ _Membandingkan semua pendekatan dan memilih versi terbaik untuk setiap situasi._

> 🎯 **Tujuan:** Memahami kapan harus menggunakan setiap versi, mengenal perbedaan mental model, dan memahami dampak 1-indexed vs 0-indexed terhadap rumus.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📊 | [Perbandingan Komprehensif](#perbandingan) | Tabel head-to-head semua versi |
| 🎯 | [Kapan Pakai Versi Mana?](#kapan) | Panduan pemilihan berdasarkan situasi |
| 🧠 | [Perbedaan Mental Model](#mental-model) | Cara berpikir di balik setiap pendekatan |
| 🔢 | [1-Indexed vs 0-Indexed](#indexed) | Ringkasan dampak titik awal iterasi |

---

<a name="perbandingan"></a>
## 📊 Perbandingan Komprehensif

### Tabel Utama (1-Indexed)

| Aspek | V1 Nested Loop 🔄 | V2 `.repeat()` ⚡ | V3 Reverse Loop 🔁 |
|:------|:---|:---|:---|
| **Jumlah Loop** | 3 (1 luar + 2 nested) | 1 | 3 (V3A) / 1 (V3B) |
| **Rumus Spasi** | `row - 1` | `row - 1` | `num - row` *(rumus piramida normal!)* |
| **Rumus Bintang** | `2 * num - (2 * row - 1)` | `2 * (num - row) + 1` | `2 * row - 1` *(rumus piramida normal!)* |
| **Arah Loop** | Maju (1 → num) | Maju (1 → num) | Mundur (num → 1) |
| **Readability** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Baris Kode** | ~10 | ~5 | ~10 (V3A) / ~5 (V3B) |
| **Perlu Rumus Baru?** | ✅ Ya | ✅ Ya | ❌ Tidak! |

### Tabel Lengkap (Termasuk 0-Indexed)

| | V1 🔄 | V2 ⚡ | V3A 🔁 | V3B 🔁 | V1-0 🔢 | V2-0 🔢 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Loop | 3 | 1 | 3 | 1 | 3 | 1 |
| Indexing | 1-based | 1-based | 1-based | 1-based | 0-based | 0-based |
| Arah | Maju | Maju | Mundur | Mundur | Maju | Maju |
| Readability | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Baris kode | ~10 | ~5 | ~10 | ~5 | ~10 | ~5 |
| Rumus baru? | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ |

---

<a name="kapan"></a>
## 🎯 Kapan Pakai Versi Mana?

| Situasi | Versi Terbaik | Alasan |
|---------|:---:|--------|
| **Belajar** fundamental nested loop | **V1** | Paling eksplisit, setiap loop punya peran terpisah |
| Kode untuk **real project** | **V3B** | Ringkas + tidak perlu rumus baru |
| Sudah **hafal** rumus piramida normal | **V3A / V3B** | Tinggal balik arah loop |
| Ingin kode **seminimal mungkin** | **V2 / V3B** | Hanya 1 loop + `.repeat()` |
| Konteks kode mengharuskan **0-indexed** | **V1-0 / V2-0** | Rumus disesuaikan untuk `row=0` |

> [!TIP]
> 🏆 **Rekomendasi Umum:**
> - **Pemula** → V1 (latih fundamental) → V2 (latih `.repeat()`) → V3 (latih *reuse* logika)
> - **Ujian/Interview** → V3B (kesan: *"Saya bisa mendaur ulang kode"* = poin plus!)
> - **Real Project** → V2 atau V3B (keduanya ringkas dan readable)

---

<a name="mental-model"></a>
## 🧠 Perbedaan Mental Model

### V1 (Nested Loop) — "Instruksi Detail"

```
"Untuk setiap baris:
  1. Cetak spasi satu per satu sebanyak (row - 1) kali
  2. Cetak bintang satu per satu sebanyak (rumus) kali
  3. Pindah baris"
```

Gaya **imperatif** — kita memberitahu *bagaimana* (how).

### V2 (.repeat()) — "Delegasi Cerdas"

```
"Untuk setiap baris:
  1. Saya mau spasi sebanyak (row - 1) — urus sendiri
  2. Saya mau bintang sebanyak (rumus) — urus sendiri
  3. Pindah baris"
```

Gaya **deklaratif** — kita memberitahu *apa* (what).

### V3 (Reverse Loop) — "Recycle Master"

```
"Saya sudah tahu cara buat piramida normal.
 Kalau saya balik urutannya... jadi piramida terbalik dong!"
```

Gaya **reuse** — kita tidak membuat sesuatu yang baru, tapi **menggunakan kembali** yang sudah ada.

> [!NOTE]
> 💡 **Best Practice Insight:**
> Di dunia kerja, V3 sering kali menjadi pendekatan yang paling dihargai. Kemampuan melihat bahwa *"masalah baru ini sebenarnya hanya variasi dari masalah lama"* adalah tanda programmer yang matang. Ini adalah inti dari prinsip **DRY** (Don't Repeat Yourself).

---

<a name="indexed"></a>
## 🔢 Ringkasan: 1-Indexed vs 0-Indexed

### Perbandingan Rumus (Loop Maju)

| Elemen | 1-Indexed (`row` mulai 1) | 0-Indexed (`row` mulai 0) |
|:---|:---|:---|
| **Spasi** | `row - 1` | `row` ✨ |
| **Bintang** | `2 * (num - row) + 1` | `2 * (num - row) - 1` |

### Rekomendasi per Situasi

| Situasi | Rekomendasi | Alasan |
|---------|:-----------:|--------|
| **Pattern Printing** (piramida, berlian, dll.) | 1-indexed | Rumus lebih natural, mudah dihubungkan ke tabel analisis |
| **Reverse Loop** (V3) | 1-indexed | Batas `row = num` → `1` lebih clean |
| **Manipulasi Array / String** | 0-indexed | JavaScript indeks selalu dimulai dari 0 |
| **Konteks campuran** | Konsisten | Pilih satu gaya dan terapkan di seluruh kode |

> 📌 **Kesimpulan:** Untuk challenge piramida terbalik ini, **1-indexed** adalah pilihan terbaik karena rumusnya lebih mudah dibaca dan tabel analisisnya langsung cocok.

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [05 — Version 3: Reverse Loop](./05-version-3-reverse-loop.md) | [README](../README.md) | [07 — Refleksi dan Naming](./07-refleksi-dan-naming.md) |
