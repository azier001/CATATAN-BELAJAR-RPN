# 🔍 Visualisasi & Analisis Pola

### ✨ _Memahami logika "siapa juara tiap kelas" sebelum menulis satu baris kode pun_

> 🎯 **Tujuan:** Menemukan pola dan merumuskan algoritma melalui simulasi manual, lalu menyiapkan blueprint kode sebelum mulai ngoding.

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📊 | [Simulasi "Buku Rekap"](#simulasi) | Tabel step-by-step cara komputer memproses data |
| 🧠 | [Algoritma yang Ditemukan](#algoritma) | Dua aturan inti hasil penemuan dari simulasi |
| 📖 | [Kamus Variabel](#kamus-variabel) | Tabel penamaan variabel yang tepat dan alasannya |
| 🗺️ | [Blueprint Kerangka Kode](#blueprint) | Struktur kode kosong sebagai peta sebelum ngoding |

---

<a name="simulasi"></a>
## 📊 Simulasi "Buku Rekap"

Sebelum menulis kode, kita membuat simulasi manual: bayangkan sebuah **"Buku Rekap"** (object kosong `{}`) dan lihat bagaimana komputer akan memproses data murid **satu per satu**.

| Iterasi | Murid | Kelas | Skor | Status Kelas di Buku Rekap | Aksi Komputer | Isi Buku Rekap |
|:-------:|-------|-------|:----:|---------------------------|---------------|----------------|
| 1 | Dimitri | foxes | 90 | ❌ Belum ada | Catat sebagai juara foxes | `{ foxes: {Dimitri, 90} }` |
| 2 | Alexei | wolves | 85 | ❌ Belum ada | Catat sebagai juara wolves | `{ foxes: {...}, wolves: {Alexei, 85} }` |
| 3 | Sergei | foxes | 74 | ✅ Sudah ada (Dimitri, 90) | 74 > 90? **Tidak** → Abaikan | Tidak berubah |
| 4 | Anastasia | wolves | 78 | ✅ Sudah ada (Alexei, 85) | 78 > 85? **Tidak** → Abaikan | Tidak berubah |

> [!TIP]
> Dengan simulasi tabel seperti ini, kita bisa **menemukan pola logika** tanpa perlu ngoding dulu. Otak kita sudah "merasakan" algoritmanya secara alami.

---

<a name="algoritma"></a>
## 🧠 Algoritma yang Ditemukan

Dari simulasi di atas, kita merumuskan **2 aturan inti** yang akan menjadi dasar seluruh kode:

### Aturan 1 — Kelas Baru (Belum Tercatat)

```
🎯 Kondisi  → Kelas belum ada di Buku Rekap
📌 Aksi     → Langsung catat murid ini sebagai juara sementara
🔐 Kenapa   → Karena belum ada pembanding, murid pertama otomatis jadi juara
💡 Contoh   → Iterasi 1: foxes belum ada → Dimitri (90) langsung masuk
```

### Aturan 2 — Kelas Lama (Sudah Tercatat)

```
🎯 Kondisi  → Kelas sudah ada di Buku Rekap
📌 Aksi     → Bandingkan skor murid baru vs juara sementara
🔐 Kenapa   → Kita hanya mau menyimpan yang TERTINGGI, bukan yang terakhir
💡 Contoh   → Iterasi 3: foxes sudah ada (Dimitri, 90) → Sergei (74) kalah → abaikan
```

> [!IMPORTANT]
> Kedua aturan ini adalah **inti dari seluruh solusi**. Semua versi kode (dari yang paling verbose hingga `.reduce()`) pada dasarnya hanya menerjemahkan dua aturan ini ke dalam syntax JavaScript yang berbeda-beda.

---

<a name="kamus-variabel"></a>
## 📖 Kamus Variabel

Sebelum ngoding, kita tentukan penamaan variabel yang **bermakna** agar kode mudah dipahami:

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan | Alasan |
|----------------|---------------|-----------|--------|
| Parameter input | `students` | `arr`, `data` | Menjelaskan bahwa inputnya adalah daftar murid |
| Penampung akhir | `classWinners` | `result`, `res` | Langsung menggambarkan "daftar juara per kelas" |
| Kelas (destructured) | `className` | `cls`, `c` | Jelas + menghindari *reserved keyword* `class` |
| Nama & skor | `name`, `score` | `n`, `s` | Sudah sesuai properti asli, tidak perlu disingkat |

> [!NOTE]
> Properti `class` pada object input adalah **reserved keyword** di JavaScript. Kita menggunakan teknik *destructuring alias*: `{ class: className }` untuk mengubah namanya saat di-extract.

---

<a name="blueprint"></a>
## 🗺️ Blueprint Kerangka Kode

Sebelum menulis logika, siapkan **kerangka kosong** sebagai peta mental:

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Buku Rekap Juara per Kelas)
const highestScore = (students) => {
  // [BAGIAN 1] → Siapkan "Buku Rekap" kosong
  
  // [BAGIAN 2] → Loop setiap murid, extract name/score/className
  
    // [BAGIAN 2a] → Aturan 1: Jika kelas belum tercatat → langsung catat
    
    // [BAGIAN 2b] → Aturan 2: Jika kelas sudah ada → bandingkan skor
  
  // [BAGIAN 3] → Kembalikan Buku Rekap yang sudah terisi
};
```

> [!TIP]
> Blueprint ini bisa ditulis di kertas atau komentar kode sebelum mulai ngoding. Dengan begitu, saat menulis kode kita hanya perlu **mengisi bagian yang kosong** — bukan memikirkan struktur dari nol.

---

⬆️ [Kembali ke README](../README.md) · ➡️ [Solusi Bertahap](02-solusi-bertahap.md)
