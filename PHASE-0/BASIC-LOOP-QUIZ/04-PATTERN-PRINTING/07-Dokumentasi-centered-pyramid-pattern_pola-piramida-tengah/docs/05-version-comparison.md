# 📊 Version Comparison — Piramida Tengah (Centered Pyramid)

### ✨ _Membandingkan semua pendekatan dan memahami dampak 1-indexed vs 0-indexed._

> 🎯 **Tujuan:** Memahami kapan harus menggunakan setiap versi, mengenal perbedaan mental model, dan memahami dampak perubahan titik awal iterasi (1-indexed vs 0-indexed) terhadap rumus.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📊 | [Perbandingan Komprehensif](#perbandingan) | Tabel head-to-head semua versi |
| 🎯 | [Kapan Pakai Versi Mana?](#kapan) | Panduan pemilihan berdasarkan situasi |
| 🔢 | [Bonus: 1-Indexed vs 0-Indexed](#indexed) | Dampak titik awal iterasi terhadap rumus |
| 💻 | [Kode Semua Versi (0-Indexed)](#kode-zero) | V3 & V3B — versi 0-indexed |
| 🧠 | [Perbedaan Mental Model](#mental-model) | Cara berpikir di balik setiap pendekatan |

---

<a name="perbandingan"></a>
## 📊 Perbandingan Komprehensif

### Tabel Utama

| Aspek | V1 Nested Loop 🔄 | V2 `.repeat()` ⚡ | V2B Ultra-Ringkas 🚀 |
|:------|:---|:---|:---|
| **Jumlah Loop** | 3 (1 luar + 2 nested) | 1 | 1 |
| **Indexing** | 1-based | 1-based | 1-based |
| **Readability** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Baris Kode** | ~10 baris | ~5 baris | ~3 baris |
| **Fitur JS** | Loop manual | `.repeat()` | `.repeat()` |
| **Memenuhi Syarat Soal** | ✅ Ya (wajib nested loop) | ❌ Tidak | ❌ Tidak |
| **Cocok Untuk** | Belajar, ujian | Real project | Kode minimal |

### Tabel Termasuk Versi 0-Indexed

| | V1 🔄 | V2 ⚡ | V2B 🚀 | V3 🔢 | V3B 🔢 |
|---|:---:|:---:|:---:|:---:|:---:|
| Loop | 3 | 1 | 1 | 3 | 1 |
| Indexing | 1-based | 1-based | 1-based | 0-based | 0-based |
| Readability | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Baris kode | ~10 | ~5 | ~3 | ~10 | ~3 |
| Syarat soal | ✅ | ❌ | ❌ | ✅ | ❌ |

---

<a name="kapan"></a>
## 🎯 Kapan Pakai Versi Mana?

| Situasi | Versi Terbaik | Alasan |
|---------|:---:|--------|
| Soal **mewajibkan** nested loop | **V1** | Satu-satunya yang memenuhi syarat |
| Kode untuk **real project** | **V2** | Ringkas, readable, performa baik |
| Ingin kode **seminimal mungkin** | **V2B** | Satu baris inti saja |
| Konteks kode mengharuskan **0-indexed** | **V3 / V3B** | Rumus disesuaikan untuk `row=0` |
| **Belajar** fundamental loop | **V1** | Paling eksplisit, mudah di-trace |

> [!TIP]
> 🏆 **Rekomendasi Umum:**
> - **V1** → Saat belajar atau soal mewajibkan nested loop
> - **V2** → *Sweet spot* terbaik antara ringkas dan readable
> - **V3** → Hanya jika konteks kode mengharuskan 0-indexed

---

<a name="indexed"></a>
## 🔢 Bonus: 1-Indexed vs 0-Indexed

Semua solusi V1 dan V2 menggunakan loop yang dimulai dari `row = 1` (*1-indexed*). Tapi bagaimana jika kita mulai dari `row = 0` (*0-indexed*)?

### Perbandingan Nilai `row` per Baris (`num = 5`)

| Baris Fisik | `row` (1-Indexed) | `row` (0-Indexed) | Target Spasi | Target Bintang |
|:---:|:---:|:---:|:---:|:---:|
| Puncak | 1 | 0 | 4 | 1 |
| Baris 2 | 2 | 1 | 3 | 2 |
| Baris 3 | 3 | 2 | 2 | 3 |
| Baris 4 | 4 | 3 | 1 | 4 |
| Dasar | 5 | 4 | 0 | 5 |

> 📌 *Target spasi dan bintang **tidak berubah** — yang berubah hanya nilai `row`. Karena selisih 1, rumusnya harus disesuaikan.*

### Perbandingan Rumus

| Elemen | 1-Indexed (`row` mulai 1) | 0-Indexed (`row` mulai 0) | Kenapa berubah? |
|:---|:---|:---|:---|
| **Rumus Spasi** | `num - row` | `num - row - 1` | `row=0` → `num - 0 = 5` (kelebihan 1), maka perlu `- 1` |
| **Rumus Bintang** | `row` | `row + 1` | `row=0` → `0` bintang (kosong!), maka perlu `+ 1` |

> [!WARNING]
> ⚠️ **Jebakan Kritis!** Jika `row` dimulai dari `0` tapi rumus **tidak disesuaikan**:
> - Spasi: `num - 0 = 5` → kelebihan 1 spasi!
> - Bintang: `0` → baris pertama kosong tanpa bintang!
>
> Selalu kalibrasi rumus saat mengubah titik awal iterasi.

---

<a name="kode-zero"></a>
## 💻 Kode Semua Versi (0-Indexed)

### V3 — Nested Loop (0-Indexed)

```javascript
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    // Spasi: num - row - 1 (dikurangi 1 karena row mulai dari 0)
    for (let space = 0; space < num - row - 1; space++) {
      pattern += ' ';
    }

    // Bintang: row + 1 (ditambah 1 karena row mulai dari 0)
    // Catatan: syarat 'star < row + 1' sama persis dengan 'star <= row'
    for (let star = 0; star <= row; star++) {
      pattern += '* ';
    }

    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat soal **mewajibkan** nested loop DAN konteks kode menggunakan 0-indexed.

---

### V3B — Single Loop + `.repeat()` (0-Indexed)

```javascript
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    pattern += ' '.repeat(num - row - 1) + '* '.repeat(row + 1) + '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat butuh kode ringkas dengan 0-indexed.

---

<a name="mental-model"></a>
## 🧠 Perbedaan Mental Model

### V1 (Nested Loop) — "Instruksi Detail"

```
"Hei komputer, untuk setiap baris:
  1. Cetak spasi satu per satu sebanyak (num - row) kali
  2. Cetak bintang+spasi satu per satu sebanyak row kali
  3. Pindah baris"
```

Kita memberitahu **bagaimana** (*how*) cara komputer bekerja langkah demi langkah. Ini disebut gaya **imperatif**.

### V2 (.repeat()) — "Delegasi Cerdas"

```
"Hei komputer, untuk setiap baris:
  1. Saya mau spasi sebanyak (num - row) — urus sendiri ya
  2. Saya mau bintang sebanyak row — urus sendiri ya
  3. Pindah baris"
```

Kita hanya memberitahu **apa** (*what*) yang kita mau, dan JavaScript yang mengurus detailnya. Ini disebut gaya **deklaratif**.

> [!TIP]
> 💡 **Best Practice Insight:**
> Di dunia kerja nyata, gaya **deklaratif** (V2) lebih disukai karena programmer lain bisa langsung paham maksud kode dalam 1 detik tanpa harus memecahkan logika nested loop. Namun, memahami gaya **imperatif** (V1) adalah fondasi yang wajib dikuasai terlebih dahulu!

### Mana yang Lebih Baik untuk Indexing?

| Situasi | Rekomendasi | Alasan |
|---------|:-----------:|--------|
| **Pattern Printing** (piramida, berlian, dll.) | 1-indexed | Rumus lebih natural: `num - row` dan `row` |
| **Manipulasi Array / String** | 0-indexed | JavaScript selalu mulai dari indeks 0 |
| **Konteks campuran** | Konsisten | Pilih satu gaya dan terapkan di seluruh kode |

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [04 — Version 2: Built-in Repeat](./04-version-2-built-in-repeat.md) | [README](../README.md) | [06 — Refleksi dan Naming](./06-refleksi-dan-naming.md) |
