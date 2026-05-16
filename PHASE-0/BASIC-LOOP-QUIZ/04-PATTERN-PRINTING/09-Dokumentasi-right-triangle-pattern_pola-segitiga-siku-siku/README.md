# 📐 Right Triangle — `segitigaSiku`

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-Loop%20|%20Pattern%20Printing%20|%20Nested%20Loop-blue?style=for-the-badge)

> 📝 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat
> kembali konsep-konsep yang dipelajari saat mengerjakan challenge Segitiga Siku-siku.*

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧩 | [Deskripsi Challenge](#-deskripsi-challenge) | Apa yang diminta soal dan aturan mainnya |
| 📤 | [Expected Output](#-expected-output) | Contoh input/output yang diharapkan |
| ▶️ | [Coba Langsung](#️-coba-langsung) | Snippet siap copy-paste untuk testing |
| 🔍 | [Visualisasi & Analisis Pola](#-visualisasi--analisis-pola) | Tabel breakdown dan penemuan rumus |
| 🗺️ | [Blueprint & Kamus Variabel](#️-blueprint--kamus-variabel) | Kerangka kode + panduan penamaan variabel |
| 🔨 | [Pendekatan Bertahap](#-pendekatan-bertahap-step-by-step) | Membangun solusi step-by-step dari nol |
| 🏆 | [Solusi Final](#-solusi-final) | Kode V1 lengkap dengan penjelasan cara kerja |
| 🔄 | [Evolusi Solusi](#-evolusi-solusi) | V2 dengan fungsi `.repeat()` |
| 📊 | [Quick Comparison](#-quick-comparison) | Tabel perbandingan semua versi |
| 🏷️ | [Naming Convention](#️-naming-convention) | Best practice penamaan variabel ❌ vs ✅ |
| 💡 | [Konsep Kunci](#-konsep-kunci) | Ringkasan konsep penting dari challenge |
| 🎯 | [Learning Outcomes](#-learning-outcomes) | Apa yang kamu kuasai setelah selesai |

---

## 🧩 Deskripsi Challenge

Buat fungsi `segitigaSiku(num)` yang menghasilkan pola **segitiga siku-siku** menggunakan karakter `'*'` (bintang). Parameter `num` menentukan **jumlah baris** sekaligus **jumlah bintang maksimal** di baris terakhir. **Wajib menggunakan nested loop.**

```
Input: num = 5
  → Baris: 5 baris
  → Bintang per baris: sama dengan nomor barisnya (row)
  → Karakter cetak: '*' (bintang saja)
Output: Segitiga siku-siku 5 baris ✅
```

> ⚠️ **Catatan penting:** Fungsi harus me-`return` string — bukan `console.log`.

---

## 📤 Expected Output

| Input | Baris | Output |
|:---:|:---:|:---|
| `segitigaSiku(1)` | 1 | `*` |
| `segitigaSiku(3)` | 3 | Segitiga 3 baris |
| `segitigaSiku(5)` | 5 | Segitiga 5 baris (lihat di bawah) |

**Contoh `segitigaSiku(5)`:**
```
*
**
***
****
*****
```

---

## ▶️ Coba Langsung

```javascript
console.log(segitigaSiku(5));
// Segitiga siku-siku 5 baris
```

```javascript
console.log(segitigaSiku(3));
// *
// **
// ***
```

---

## 🔍 Visualisasi & Analisis Pola

### Tabel Breakdown

| Baris ke- (`row`) | Jumlah Bintang (`*`) | Rumus |
|:---:|:---:|:---:|
| 1 | 1 → `*` | `row` |
| 2 | 2 → `**` | `row` |
| 3 | 3 → `***` | `row` |
| 4 | 4 → `****` | `row` |
| 5 | 5 → `*****` | `row` |

### Penemuan Rumus

Dari tabel di atas, pola yang ditemukan sangat langsung:

> 🎯 **Rumus Inti:** Jumlah bintang di setiap baris = nomor barisnya (`row`).
>
> Ini adalah pola segitiga paling dasar — tidak ada spasi pendorong, tidak ada kalkulasi deret ganjil. Cukup cetak bintang sebanyak `row`.

---

## 🗺️ Blueprint & Kamus Variabel

### Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|:---|:---|:---|:---|
| Penampung Akhir | `pattern` | `result`, `res`, `x` | Kita mengembalikan sebuah pola, bukan hitungan |
| Loop Utama (Luar) | `row` | `i`, `y` | Merepresentasikan baris ke-berapa |
| Nested Loop Bintang | `star` | `j`, `k`, `b` | Penghitung bintang pembentuk |

### Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: 1 loop baris + 1 nested loop bintang)

function segitigaSiku(num) {
  let pattern = '';                          // [KANVAS] (❌ jangan 'result')

  for (let row = 1; ...) {                   // [LOOP UTAMA] → baris ke-berapa
    for (let star = 1; ...) { ... }          //   [NESTED 1] → cetak bintang
    pattern += '\n';                         //   [PINDAH BARIS]
  }

  return pattern;
}
```

> 💡 **Bandingkan** dengan piramida yang butuh 2 nested loop (spasi + bintang). Segitiga siku-siku hanya butuh **1 nested loop** karena tidak ada spasi pendorong!

---

## 🔨 Pendekatan Bertahap (Step-by-Step)

### Step 1 — Buat Loop Utama (Kerangka Baris)

Mulai dari yang paling dasar: loop yang mencetak nomor baris saja.

```javascript
const segitigaSiku = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += row + '\n';
  }

  return pattern;
};
```

**Output sementara:**
```
1
2
3
4
5
```

> ✅ Loop utama bekerja! Kita sudah bisa "berjalan" dari baris 1 sampai baris 5.

---

### Step 2 — Tambahkan Nested Loop Bintang

Ganti pencetakan angka (`row`) dengan nested loop yang mencetak `*` sebanyak `row`.

```javascript
const segitigaSiku = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let star = 1; star <= row; star++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  return pattern;
};
```

**Output:**
```
*
**
***
****
*****
```

> ✅ Solusi lengkap dan berfungsi!

---

## 🏆 Solusi Final

### Versi 1 — Nested Loop (Imperatif) 🔄

```javascript
const segitigaSiku = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let star = 1; star <= row; star++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  return pattern;
};

console.log(segitigaSiku(5));
```

**Cara kerja (analogi mandor & pekerja):**

1. **Loop Luar (`row`)** — Berjalan dari `1` sampai `5`. Ini seperti **mandor** yang bilang: *"Sekarang kita ngerjain lantai 1... sekarang lantai 2..."*
2. **Loop Dalam (`star`)** — Saat sedang di "lantai" ke-`row`, **pekerja** ini disuruh menaruh bintang. Syarat berhentinya `star <= row`. Jadi kalau di lantai 3 (`row = 3`), pekerja menaruh 3 bintang.
3. **Pindah Baris (`\n`)** — Setelah pekerja selesai, mandor menyuruh pindah ke baris baru supaya lantai berikutnya tidak menyambung ke samping.

---

## 🔄 Evolusi Solusi

### Versi 2 — `.repeat()` (Deklaratif) ⚡

```javascript
const segitigaSiku = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += '*'.repeat(row) + '\n';
  }

  return pattern;
};

console.log(segitigaSiku(5));
```

> ✅ Nested loop dihilangkan, diganti dengan `'*'.repeat(row)` yang melakukan hal yang sama tapi lebih ringkas.

### Perbedaan Mental Model

| Aspek | V1 — Nested Loop 🔄 | V2 — `.repeat()` ⚡ |
|:---|:---|:---|
| **Gaya** | Imperatif (langkah demi langkah) | Deklaratif (apa yang kita mau) |
| **Analogi** | *"Taruh satu bintang, lalu satu lagi, lalu satu lagi..."* | *"Tolong cetak bintang ini 3 kali."* |
| **Jumlah Loop** | 2 loop (outer + nested) | 1 loop saja |
| **Readability** | Eksplisit, mudah di-trace | Ringkas, langsung paham |
| **Kapan Pakai** | Saat belajar logika dasar / syarat soal | Saat coding di dunia nyata |

---

## 📊 Quick Comparison

| Versi | Pendekatan | Keunggulan |
|:---|:---|:---|
| **V1 — Nested Loop** 🔄 | 2 loop, imperatif | Melatih fundamental, memenuhi syarat quiz |
| **V2 — `.repeat()`** ⚡ | 1 loop, deklaratif | Ringkas, readable, *production-ready* |

> ⭐ **Rekomendasi:** Untuk quiz ini, gunakan **V1** karena wajib nested loop. Untuk dunia nyata, gunakan **V2**.

---

## 🏷️ Naming Convention

| Variabel | ❌ Bad (Kurang Jelas) | ✅ Good (Deskriptif) | Alasan |
|:---|:---|:---|:---|
| Penampung hasil | `res`, `x`, `string` | `pattern` | Menjelaskan bahwa isinya sebuah "pola" |
| Loop utama | `i`, `y` | `row` | Jelas merepresentasikan "baris" |
| Nested loop | `j`, `z` | `star` | Jelas menghitung jumlah "bintang" |

> 💡 **Kapan `i` dan `j` boleh dipakai?** Saat looping array dasar. Untuk soal pola visual (*pattern printing*), gunakan kata benda deskriptif seperti `row` dan `star` agar kode tetap mudah dibaca seminggu kemudian.

---

## 💡 Konsep Kunci

- **Nested Loop** — Loop utama (baris) + loop bintang (pembentuk)
- **Bintang = Baris** — Rumus paling sederhana: cetak bintang sebanyak nomor baris
- **`.repeat()`** — Built-in method untuk menggandakan karakter tanpa loop manual
- **Imperatif vs Deklaratif** — Dua gaya berpikir dalam menulis loop

> ⚠️ **Gotcha:** Jangan lupa tambahkan `'\n'` di akhir setiap baris! Tanpa ini, semua bintang akan menyambung jadi satu baris panjang: `***************`.

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis pola visual sederhana dan menemukan rumus `bintang = row`
- ✅ Membangun solusi secara bertahap — dari loop angka → nested loop bintang
- ✅ Membuat segitiga siku-siku dengan **2 pendekatan** (nested loop & `.repeat()`)
- ✅ Memahami perbedaan gaya **imperatif vs deklaratif** dalam menulis loop
- ✅ Menerapkan naming convention yang membuat nested loop mudah dibaca (`row`, `star`)

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **16 Mei 2026** berdasarkan sesi mentoring langsung bersama **Google Antigravity**. Segitiga Siku-siku adalah pola paling fundamental dalam *pattern printing* — hanya butuh **1 nested loop** tanpa spasi pendorong. Kesederhanaannya menjadikannya titik awal sempurna untuk memahami konsep nested loop sebelum mengerjakan pola yang lebih kompleks seperti piramida atau berlian.

---

<div align="center">

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
