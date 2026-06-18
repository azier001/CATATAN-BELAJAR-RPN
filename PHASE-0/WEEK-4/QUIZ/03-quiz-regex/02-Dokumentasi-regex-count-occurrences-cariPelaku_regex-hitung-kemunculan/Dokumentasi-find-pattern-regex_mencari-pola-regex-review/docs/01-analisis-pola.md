# 🔍 Analisis Pola & Strategi Regex

### ✨ _Memahami masalah dan merancang senjata Regex sebelum menulis satu baris kode pun_

> 🎯 **Tujuan:** Setelah membaca file ini, kamu akan paham cara menganalisis pola substring, mengenal dasar Regex di JavaScript, dan memiliki kerangka kode (blueprint) yang siap diisi.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔍 | [Visualisasi Pola](#visualisasi) | Breakdown setiap test case secara visual |
| 🧠 | [Mengenal Regex](#regex) | Apa itu Regex dan cara kerjanya di JavaScript |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode kosong + tabel penamaan variabel |

---

<a name="visualisasi"></a>

## 🔍 Visualisasi Pola

Sebelum ngoding, kita harus paham dulu: **"Apa sih yang sebenarnya dicari?"**

Bayangkan kamu sedang bermain **Cari Kata**. Tugasmu adalah memindai sebuah kalimat dari kiri ke kanan, lalu menandai setiap kali menemukan huruf `a`, `b`, `c` yang berjejer berturut-turut.

### Tabel Breakdown Test Case

| # | Input String | Visualisasi Pencarian | Total |
|---|---|---|---|
| 1 | `'mabcvabc'` | `m` · **[abc]** · `v` · **[abc]** | **2** |
| 2 | `'abcdabdc'` | **[abc]** · `d` · `a` · `b` · `d` · `c` | **1** |
| 3 | `'bcabcac'` | `b` · `c` · **[abc]** · `a` · `c` | **1** |
| 4 | `'abcabcabc'` | **[abc]** · **[abc]** · **[abc]** | **3** |
| 5 | `'babcbacabc'` | `b` · **[abc]** · `b` · `a` · `c` · **[abc]** | **2** |

> [!TIP]
> **Insight dari tabel:** Perhatikan test case #2 — meskipun huruf `a`, `b`, `d`, `c` ada semua, yang dihitung hanya `abc` yang **berturut-turut** persis. Huruf `abdc` bukan `abc`!

### Kesimpulan Analisis

```
🎯 Tugas     → Hitung berapa kali substring "abc" muncul di dalam string
📌 Kata Kunci → Kemunculan berturut-turut (exact match), bukan huruf terpisah
🔐 Analogi   → Seperti Ctrl+F di browser: cari kata persis "abc", lalu hitung totalnya
```

---

<a name="regex"></a>

## 🧠 Mengenal Regex (Regular Expression)

Soal ini mensyaratkan penggunaan **Regex**. Jadi, alih-alih memakai `for loop` manual untuk mengecek huruf satu per satu, kita menggunakan "mesin pencari canggih" bawaan JavaScript.

### Apa Itu Regex?

Regex adalah **pola pencarian teks**. Di JavaScript, kita menulisnya di antara dua garis miring:

```
/pola-yang-dicari/
```

### Membangun Regex untuk Challenge Ini

| Langkah | Regex | Penjelasan |
|---|---|---|
| 1. Pola dasar | `/abc/` | Mencari kata "abc" — tapi hanya kemunculan **pertama** saja |
| 2. Tambah flag `g` | `/abc/g` | Flag **Global**: mencari **semua** kemunculan dari awal sampai akhir string |

> [!IMPORTANT]
> **Kenapa perlu flag `g`?**
> Tanpa `g`, Regex bersifat **pemalas** — begitu menemukan match pertama, dia langsung berhenti. Dengan `g`, dia akan rajin memindai seluruh string sampai ujung.

### Method `.match()` — Senjata Eksekusi

Di JavaScript, kita mengeksekusi Regex pada string menggunakan method bawaan `.match()`:

```javascript
'mabcvabc'.match(/abc/g)
// Hasil: ['abc', 'abc']  ← Array berisi semua kata "abc" yang ditemukan

'abcdabdc'.match(/abc/g)
// Hasil: ['abc']          ← Hanya 1 yang cocok

'defgh'.match(/abc/g)
// Hasil: null             ← Tidak ada yang cocok → return null (⚠️ BUKAN array kosong!)
```

> [!CAUTION]
> **Jebakan Batman:** `.match()` mengembalikan `null` (bukan `[]`) jika tidak ada match. Ini akan menyebabkan **crash** jika kita langsung memanggil `.length` pada `null`. Penanganannya dibahas di [02-solusi-dan-evolusi.md](02-solusi-dan-evolusi.md).

---

<a name="blueprint"></a>

## 🗺️ Blueprint & Kamus Variabel

Sebelum menulis kode final, kita rancang dulu **kerangka kosong** dan **aturan penamaan** variabel.

### Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|---|---|---|---|
| Nama Function | `countOccurrences` | `cariPelaku`, `fn` | Jelas mendeskripsikan aksi: "menghitung kemunculan" |
| Parameter Input | `text` | `str`, `s`, `x` | Standar internasional untuk variabel penampung teks |
| Penampung Hasil Regex | `matches` | `hasil`, `res`, `arr` | Jelas bahwa isinya adalah hasil pencarian (match) |

### Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Cari semua → Hitung total)

function countOccurrences(text) {

  // [LANGKAH 1] → Cari semua kemunculan "abc" dengan Regex
  // const matches = ...

  // [LANGKAH 2] → Hitung jumlah hasil pencarian
  // return ...
}
```

> [!NOTE]
> Blueprint ini sengaja dibuat **kosong** agar kamu bisa mengisinya sendiri di file berikutnya. Perhatikan bahwa strukturnya sangat sederhana: hanya **2 langkah** (cari → hitung).

---

⬅️ [README.md](../README.md) · ➡️ **Selanjutnya:** [02-solusi-dan-evolusi.md](02-solusi-dan-evolusi.md)
