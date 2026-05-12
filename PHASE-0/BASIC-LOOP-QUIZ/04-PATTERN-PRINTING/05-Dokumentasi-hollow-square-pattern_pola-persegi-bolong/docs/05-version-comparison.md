# 📊 Version Comparison — Persegi Bolong (Hollow Square)

### ✨ _Membandingkan dua pendekatan berbeda untuk satu hasil yang sama._

> 🎯 **Tujuan:** Memahami kapan harus menggunakan Versi 1 (Nested Loop) vs Versi 2 (String.repeat), mengenal perbedaan mental model di balik keduanya, dan bisa memilih pendekatan yang tepat sesuai konteks.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📊 | [Perbandingan Komprehensif](#perbandingan) | Tabel head-to-head kedua versi |
| 🎯 | [Kapan Pakai Versi Mana?](#kapan) | Panduan pemilihan berdasarkan situasi |
| 🧠 | [Perbedaan Mental Model](#mental-model) | Cara berpikir yang berbeda di balik setiap pendekatan |
| 🔢 | [Perbandingan Kode Berdampingan](#kode) | Kode kedua versi disandingkan langsung |
| 📈 | [Analisis Performa](#performa) | Deep dive efisiensi string concatenation |

---

<a name="perbandingan"></a>
## 📊 Perbandingan Komprehensif

### Tabel Utama

| Aspek | V1 Nested Loop ⭐ | V2 String.repeat() 🚀 |
|:------|:------------------|:----------------------|
| **Jumlah Loop** | 2 (nested) | 1 |
| **Kompleksitas Waktu** | O(N²) | O(N)* |
| **Keterbacaan** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Performa** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **String Concatenation** | `num × num` kali | `num` kali |
| **Perlu Nested Loop?** | ✅ Ya | ❌ Tidak |
| **Perlu `if/else`?** | ✅ Ya (per karakter) | ✅ Ya (per baris) |
| **Fitur JS yang dipakai** | Ternary only | `String.repeat()` |
| **Jumlah Baris Kode** | ~10 baris | ~10 baris |
| **Cocok untuk** | Semua level & ujian | Kode production |

> *\*V2 secara eksplisit hanya 1 loop. Namun `.repeat()` melakukan iterasi internal sebanyak `num` per panggilan, sehingga secara total tetap menyentuh semua karakter. Performa tetap lebih baik karena `.repeat()` dieksekusi oleh engine native C++.*

---

<a name="kapan"></a>
## 🎯 Kapan Pakai Versi Mana?

| Situasi | Versi yang Tepat | Alasan |
|:--------|:-----------------|:-------|
| 📝 Ujian / Quiz yang mewajibkan nested loop | **V1** | Memenuhi syarat soal + paling mudah dijelaskan |
| 👥 Code review di tim campuran (junior + senior) | **V1** | Semua anggota tim langsung paham tanpa komentar |
| 🧑‍💻 Kode production / proyek pribadi | **V2** | Lebih ringkas dan idiomatik untuk JavaScript modern |
| 🏋️ Latihan algoritma / interview | **V1 → V2** | Tunjukkan kemampuan dasar, lalu refactor ke versi lebih efisien |
| 🎮 Rendering real-time / performa kritis | **V2** | Delegasi ke engine native lebih cepat dari loop manual |

> [!TIP]
> 🏆 **Kesimpulan:** Di dunia profesional, **V2 lebih sering dipilih** karena lebih ringkas dan idiomatik. Namun **V1 wajib dikuasai dulu** karena ia mengajarkan fondasi logika koordinat 2D yang akan terus dipakai di challenge-challenge lain (Diamond, Segitiga, Spiral, dll).

---

<a name="mental-model"></a>
## 🧠 Perbedaan Mental Model

Kedua versi menghasilkan output yang **identik**, tapi cara berpikirnya sangat berbeda:

```text
V1: "Untuk setiap KOTAK di grid, TANYA: apakah kamu di pinggiran?"
     → Pendekatan INTERROGASI (tanya satu per satu)
     → Memeriksa SETIAP koordinat (row, col)

V2: "Untuk setiap BARIS, BEDAKAN: kamu tipe penuh atau bolong?"
     → Pendekatan KONSTRUKSI (rangkai langsung)
     → Hanya memeriksa nomor BARIS, lalu merakit string utuh
```

### Visualisasi Perbedaan Cara Kerja

```text
V1 — Interrogasi Per Kotak (num=5, baris ke-1):

  col=0    col=1    col=2    col=3    col=4
  ┌────┐   ┌────┐   ┌────┐   ┌────┐   ┌────┐
  │ 🔍 │→  │ 🔍 │→  │ 🔍 │→  │ 🔍 │→  │ 🔍 │
  │ '*' │   │ ' '│   │ ' '│   │ ' '│   │ '*'│
  └────┘   └────┘   └────┘   └────┘   └────┘
  5 kali tanya → 5 karakter dihasilkan


V2 — Konstruksi Langsung (num=5, baris ke-1):

  '*' + ' '.repeat(3) + '*'  →  '*   *'

  1 kali rangkai → 5 karakter dihasilkan
```

---

<a name="kode"></a>
## 🔢 Perbandingan Kode Berdampingan

### Versi 1 — Nested Loop + Ternary

```javascript
function persegiBolong(num) {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {      // ← Loop kolom (nested)
      pattern +=
        row === 0 || row === num - 1 ||
        col === 0 || col === num - 1
          ? '*' : ' ';
    }
    pattern += '\n';
  }

  return pattern;
}
```

### Versi 2 — Single Loop + String.repeat()

```javascript
function persegiBolong(num) {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    if (row === 0 || row === num - 1) {          // ← Cek jenis baris
      pattern += '*'.repeat(num) + '\n';
    } else {
      pattern += '*' + ' '.repeat(num - 2) + '*' + '\n';
    }
  }

  return pattern;
}
```

### Apa yang Berubah?

| Elemen | V1 | V2 |
|--------|:---|:---|
| Loop dalam (`col`) | ✅ Ada | ❌ Dihilangkan |
| Logika `if/else` | Di level **karakter** | Di level **baris** |
| Pengecekan `col` | 2 kondisi (`col === 0`, `col === num-1`) | Tidak perlu |
| Karakter dicetak | Satu per satu | Satu baris sekaligus |

> [!NOTE]
> 📌 **Insight penting:** Versi 2 berhasil menghilangkan nested loop karena pola Persegi Bolong hanya memiliki **2 jenis baris** (penuh dan bolong). Challenge seperti X Pattern atau Diamond yang memiliki posisi bintang berbeda-beda di setiap baris **tidak** bisa disederhanakan semudah ini dengan `.repeat()`.

---

<a name="performa"></a>
## 📈 Analisis Performa (String Concatenation)

Salah satu bottleneck terbesar dalam pattern printing adalah **string concatenation** — operasi `pattern += ...` yang berulang-ulang.

### Kenapa String Concatenation Itu Mahal?

> [!IMPORTANT]
> 🔑 **String di JavaScript bersifat *immutable*!** Setiap kali kamu menulis `pattern += '*'`, JavaScript tidak menambahkan `*` ke string yang sudah ada. Ia **membuat string baru** yang merupakan gabungan string lama + karakter baru, lalu membuang string lama. Semakin panjang string-nya, semakin banyak memori yang harus di-copy.

### Perbandingan Jumlah Concatenation

Untuk `num = 10` (grid 10×10):

| | V1 (Nested Loop) | V2 (String.repeat) |
|:---|:---:|:---:|
| **Concatenation per baris** | 10 (per karakter) + 1 (`\n`) = 11 | 1 (satu baris utuh + `\n`) |
| **Total concatenation** | 11 × 10 = **110 kali** | 1 × 10 = **10 kali** |
| **Rasio** | Basis | **11× lebih sedikit** |

Untuk `num = 100`:

| | V1 | V2 |
|:---|:---:|:---:|
| **Total concatenation** | **10.100 kali** | **100 kali** |
| **Rasio** | Basis | **101× lebih sedikit** |

> [!TIP]
> 💡 **Pelajaran:** Semakin besar `num`, semakin terasa perbedaan performanya. Di skala kecil (`num < 20`), perbedaannya tidak terasa. Tapi di skala besar, V2 menang telak karena jumlah operasi string-nya **linear** (`num` kali), bukan **kuadratik** (`num²` kali).

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [04 — Version 2: Built-in Repeat](./04-version-2-built-in-repeat.md) | [README](../README.md) | [06 — Refleksi & Naming Convention](./06-refleksi-dan-naming.md) |
