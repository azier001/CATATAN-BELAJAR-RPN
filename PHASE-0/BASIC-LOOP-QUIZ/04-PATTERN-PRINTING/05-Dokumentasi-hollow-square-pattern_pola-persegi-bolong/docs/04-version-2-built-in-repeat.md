# 🚀 Versi 2 — Single Loop + String.repeat()

### ✨ _Satu loop untuk semuanya: manfaatkan built-in method untuk merangkai baris utuh sekaligus._

> 🎯 **Tujuan:** Memahami teknik membangun setiap baris pola Persegi Bolong tanpa nested loop, menggunakan `String.repeat()` untuk menggandakan karakter secara instan — pendekatan yang lebih idiomatik dan performa tinggi.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Profil Versi](#profil) | Ringkasan kapan & kenapa pakai versi ini |
| 💡 | [Konsep Inti: Merangkai Baris Utuh](#konsep) | Visualisasi "merakit burger" |
| 🔮 | [Metode yang Digunakan](#metode) | Cara kerja `String.repeat()` |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + panduan penamaan |
| 💻 | [Kode Lengkap](#kode) | Solusi final siap pakai |
| 🔍 | [Bedah Kode](#bedah) | Penjelasan setiap bagian baris per baris |
| 🧮 | [Simulasi Langkah](#simulasi) | Trace eksekusi dengan angka konkret |

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | Single Loop + String.repeat() |
| 🔢 **Jumlah Loop** | 1 (loop tunggal) |
| 🧠 **Konsep Utama** | Membedakan 2 jenis baris (penuh vs bolong), lalu merangkainya langsung |
| 📖 **Readability** | ⭐⭐⭐⭐ (cukup mudah dipahami) |
| ⚡ **Kompleksitas** | O(n)* |
| 🎯 **Cocok Untuk** | Best practice industri, kode ringkas, familiar dengan String methods |

> *\*Secara eksplisit hanya 1 loop. Namun `.repeat()` melakukan iterasi internal sebanyak `num` per panggilan, sehingga secara total tetap menyentuh semua `n × n` karakter.*

> [!TIP]
> 🏆 **Kapan pilih versi ini?**
> Gunakan Versi 2 saat kamu menulis kode untuk **proyek dunia nyata** di mana performa dan keringkasan kode diprioritaskan. Versi ini mendelegasikan pengulangan karakter ke *engine* JavaScript (yang ditulis dalam C++), sehingga lebih cepat daripada iterasi manual karakter per karakter.

---

<a name="konsep"></a>
## 💡 Konsep Inti: Merangkai Baris Utuh

Ide utama versi ini sangat berbeda dari Versi 1:

**Versi 1:** Kita mengecek *setiap kotak* satu per satu. *"Apakah kotak ini bintang? Kalau bukan, isi spasi."*

**Versi 2:** Kita langsung **merangkai satu baris utuh** sekaligus. Kita hanya perlu membedakan: *"Baris ini tipe penuh atau tipe bolong?"*

### Visualisasi: Analogi Merakit Burger 🍔

Persegi bolong hanya memiliki **2 jenis baris**:

```text
🍔 Tipe 1 — Baris PENUH (atas & bawah):
   Tinggal ulang '*' sebanyak num kali.

   '*'.repeat(5)  →  '*****'

   Seperti roti burger yang utuh — satu lempeng!


🍔 Tipe 2 — Baris BOLONG (tengah):
   Rangkai 3 bagian: Tembok Kiri + Ruang Kosong + Tembok Kanan.

   '*' + ' '.repeat(3) + '*'  →  '*   *'

   Seperti merakit burger:
   🍞 Roti Bawah = '*' (tembok kiri)
   🥩 Daging     = ' '.repeat(num - 2) (spasi tengah)
   🍞 Roti Atas  = '*' (tembok kanan)
```

> 💡 **Kenapa `num - 2` untuk spasi tengah?**
> Total lebar satu baris = `num` karakter. Tapi 2 slot sudah dipakai untuk tembok kiri dan tembok kanan. Jadi sisa ruang kosongnya selalu `num - 2`.
> Contoh: `num = 5` → spasi = `5 - 2 = 3` → `'*   *'` (3 spasi di tengah).

---

<a name="metode"></a>
## 🔮 Metode yang Digunakan

### 🧮 `String.repeat(count)` — Menggandakan String

Method `.repeat()` mengembalikan string baru yang merupakan hasil pengulangan string asli sebanyak `count` kali.

```javascript
'*'.repeat(5);     // Hasil: '*****'
' '.repeat(3);     // Hasil: '   '
'ha'.repeat(3);    // Hasil: 'hahaha'
'*'.repeat(0);     // Hasil: '' (string kosong)
```

> [!NOTE]
> 📌 **Keunggulan `.repeat()` vs loop manual:**
> `.repeat()` dieksekusi oleh *engine* JavaScript internal (biasanya ditulis dalam C/C++), sehingga jauh lebih cepat dibanding menulis `for` loop manual yang menambahkan karakter satu per satu ke string.

> [!IMPORTANT]
> 🔑 **`.repeat()` tidak mengubah string asli!** JavaScript string bersifat *immutable* (tidak bisa diubah). Method ini mengembalikan string **baru**. String asli tetap utuh.
> ```javascript
> const bintang = '*';
> bintang.repeat(5);   // Mengembalikan '*****'
> console.log(bintang); // Masih '*' — tidak berubah!
> ```

---

<a name="blueprint"></a>
## 🗺️ Blueprint & Kamus Variabel

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|:--------------:|:-----------------:|--------|
| Penampung Akhir | `pattern` | `result`, `res` | Kita menyusun pola visual, bukan hasil kalkulasi |
| Loop Utama | `row` | `i`, `x`, `r` | Tetap mewakili "baris ke-berapa" |

> [!NOTE]
> 📌 Versi ini **tidak membutuhkan variabel loop kolom** (`col`) karena tidak ada nested loop. Kolom dihasilkan secara otomatis oleh `.repeat()`.

### 🗺️ Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Bedakan 2 jenis baris → rangkai langsung)

function persegiBolong(num) {
  let pattern = '';                              // [KANVAS] — penampung seluruh pola

  for (let row = 0; row < num; row++) {          // [LOOP UTAMA] → baris ke-berapa
    if (/* baris atas atau bawah */) {
      // [BARIS PENUH] → '*'.repeat(num)
    } else {
      // [BARIS BOLONG] → '*' + ' '.repeat(num - 2) + '*'
    }
  }

  return pattern;                                // [KEMBALIKAN] → hasilkan string pola lengkap
}
```

---

<a name="kode"></a>
## 💻 Kode Lengkap

```javascript
function persegiBolong(num) {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    if (row === 0 || row === num - 1) {
      // Baris paling atas dan bawah: bintang diulang sebanyak 'num'
      pattern += '*'.repeat(num) + '\n';
    } else {
      // Baris tengah: Tembok Kiri + Spasi Tengah + Tembok Kanan
      pattern += '*' + ' '.repeat(num - 2) + '*' + '\n';
    }
  }

  return pattern;
}

// Uji coba
console.log(persegiBolong(5));
/*
*****
*   *
*   *
*   *
*****
*/
```

---

<a name="bedah"></a>
## 🔍 Bedah Kode (Baris per Baris)

### 1️⃣ Loop Baris — Satu-satunya Loop `[LOOP UTAMA]`

```javascript
for (let row = 0; row < num; row++)
```

Hanya ada **satu loop** di versi ini. Tugasnya hanya untuk berpindah dari baris atas (`0`) ke baris bawah (`num - 1`).

> *(Kenapa tidak ada loop kolom? Karena kita tidak mencetak karakter satu per satu. `.repeat()` langsung menghasilkan seluruh karakter dalam satu baris sekaligus — tidak perlu iterasi manual lagi.)*

---

### 2️⃣ Cek Jenis Baris `[KONDISI]`

```javascript
if (row === 0 || row === num - 1)
```

Ini adalah titik percabangan. Kita hanya perlu membedakan **2 jenis baris**:
- Baris **pertama** (`row === 0`) dan baris **terakhir** (`row === num - 1`) → tipe PENUH.
- Semua baris **di antaranya** → tipe BOLONG.

> *(Kenapa hanya cek baris, tidak cek kolom? Karena di versi ini, kita tidak punya konsep "kolom". Kita langsung merangkai string untuk satu baris utuh — tidak perlu mengecek posisi per karakter.)*

---

### 3️⃣ Baris Penuh — Bintang Diulang `[BARIS PENUH]`

```javascript
pattern += '*'.repeat(num) + '\n';
```

Jika baris adalah atas atau bawah, kita langsung mencetak bintang penuh.

> *(Contoh: `'*'.repeat(5)` → `'*****'`. Ditambah `'\n'` → `'*****\n'`. Satu baris beres dalam satu ekspresi!)*

---

### 4️⃣ Baris Bolong — Tiga Komponen Dirangkai `[BARIS BOLONG]`

```javascript
pattern += '*' + ' '.repeat(num - 2) + '*' + '\n';
```

Ini adalah bagian paling menarik. Kita merangkai **3 komponen** menjadi satu baris:

```
'*'                → Tembok Kiri    (1 karakter)
' '.repeat(num-2)  → Ruang Kosong   (num - 2 karakter)
'*'                → Tembok Kanan   (1 karakter)
'\n'               → Pindah Baris
```

> *(Kenapa `num - 2`? Total lebar = `num`. Dua slot sudah terpakai untuk tembok kiri dan kanan. Sisa = `num - 2`. Contoh: `num = 5` → `'*' + '   ' + '*'` → `'*   *'` — lebar total tetap 5 karakter!)*

> [!CAUTION]
> ⚠️ **Hati-hati dengan `num` kecil!** Jika `num = 1`, maka `num - 2 = -1`. Tapi beruntung, `' '.repeat(-1)` di JavaScript tidak error — ia mengembalikan string kosong `''`. Hasilnya tetap benar: `'*' + '' + '*'` = `'**'`... tapi tunggu, apakah baris tengah pernah dieksekusi untuk `num = 1`? **Tidak!** Karena `row = 0` langsung masuk ke kondisi `row === 0 || row === num - 1`. Jadi aman!

---

<a name="simulasi"></a>
## 🧮 Simulasi Langkah (Trace `num = 5`)

| `row` | Kondisi | Jenis Baris | Ekspresi | Hasil String |
|:---:|:---|:---|:---|:---|
| 0 | `row === 0` ✅ | PENUH | `'*'.repeat(5)` | `'*****'` |
| 1 | Tidak cocok → `else` | BOLONG | `'*' + ' '.repeat(3) + '*'` | `'*   *'` |
| 2 | Tidak cocok → `else` | BOLONG | `'*' + ' '.repeat(3) + '*'` | `'*   *'` |
| 3 | Tidak cocok → `else` | BOLONG | `'*' + ' '.repeat(3) + '*'` | `'*   *'` |
| 4 | `row === num-1` ✅ | PENUH | `'*'.repeat(5)` | `'*****'` |

**Output akhir saat di-print:**
```
*****
*   *
*   *
*   *
*****
```

> [!NOTE]
> 📌 **Perhatikan kolom "Ekspresi":** Tidak ada satupun iterasi yang memproses karakter satu per satu. Setiap baris dihasilkan dalam **satu ekspresi tunggal**. Inilah kekuatan `.repeat()` — mendelegasikan pengulangan ke engine JavaScript yang jauh lebih cepat dari loop manual.

---

## ⚖️ Perbandingan dengan Versi 1

| Aspek | Versi 1 (Nested Loop) | Versi 2 (String.repeat) |
|:------|:-----|:-----|
| **Cara berpikir** | Cek setiap kotak: "bintang atau spasi?" | Bedakan jenis baris, rangkai langsung |
| **Perlu `if/else`?** | ✅ Ya (di dalam nested loop) | ✅ Ya (tapi di level baris, bukan karakter) |
| **Jumlah loop eksplisit** | 2 (nested) | 1 |
| **Method bawaan** | Tidak ada | `String.repeat()` |
| **Keterbacaan** | Sangat jelas logika per-karakter | Lebih ringkas, langsung "melihat" bentuk baris |
| **Kapan pakai** | Ujian/soal yang wajibkan nested loop | Kode production, best practice industri |

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [03 — Version 1: Nested Loop](./03-version-1-nested-loop.md) | [README](../README.md) | [05 — Version Comparison](./05-version-comparison.md) |
