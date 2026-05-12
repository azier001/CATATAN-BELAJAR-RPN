# 🖼️ Challenge Overview — Persegi Bolong (Hollow Square)

### ✨ _Mencetak bingkai persegi dengan memilah posisi tepi dan posisi tengah menggunakan logika koordinat._

> 🎯 **Tujuan:** Memahami cara membaca soal challenge, mengidentifikasi input-output yang diharapkan, memvisualisasikan koordinat grid, dan menemukan rumus boundary (batas tepi) sebelum menulis kode.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Latar Belakang](#latar-belakang) | Konteks dan motivasi challenge |
| 📝 | [Deskripsi Soal](#deskripsi-soal) | Penjelasan lengkap apa yang diminta |
| 📥 | [Input & Output](#input-output) | Format masukan dan keluaran yang diharapkan |
| 🔬 | [Analisis Pola](#analisis-pola) | Visualisasi grid & penemuan rumus boundary |
| 📏 | [Rules & Constraints](#rules) | Batasan dan syarat wajib pengerjaan |
| 🗺️ | [Navigasi Dokumentasi](#navigasi) | Link ke semua file dokumentasi terkait |

---

<a name="latar-belakang"></a>
## 📖 Latar Belakang

Challenge ini adalah kelanjutan dari **Persegi Penuh** (*Solid Square*) dalam seri **Pattern Printing**. Jika pada Persegi Penuh kita hanya perlu mencetak bintang di semua posisi tanpa syarat, di Persegi Bolong kita harus **berpikir selektif** — memilah mana posisi yang termasuk **bingkai** (tepi) dan mana yang merupakan **ruang kosong** (tengah).

Kemampuan ini melatih kita berpikir dalam **sistem koordinat 2 dimensi** (baris dan kolom) — fondasi penting yang akan terus dipakai di pola-pola yang lebih kompleks seperti Diamond, X Pattern, dan manipulasi matriks.

> [!TIP]
> 💡 **Analogi Dunia Nyata**
>
> Bayangkan kamu sedang membuat **bingkai foto** dari kayu. Kamu punya papan persegi berukuran 5×5 petak.
> Kamu hanya perlu memasang kayu di **pinggiran luar** — dan meninggalkan bagian tengahnya kosong agar fotonya bisa terlihat.
>
> Pertanyaannya: **bagaimana kamu tahu petak mana yang harus ditempeli kayu, hanya dengan mengetahui nomor baris dan kolomnya?**
>
> | Posisi Petak | Baris | Kolom | Pasang Kayu? |
> |:-------------|:-----:|:-----:|:-------------|
> | Pojok kiri atas | 0 | 0 | 🪵 Ya — kolom pertama! |
> | Tengah baris pertama | 0 | 2 | 🪵 Ya — baris pertama (atas)! |
> | Di dalam (baris 2, kolom 2) | 2 | 2 | ❌ Tidak — bukan pinggir! |
> | Pojok kanan bawah | 4 | 4 | 🪵 Ya — baris terakhir DAN kolom terakhir! |

---

<a name="deskripsi-soal"></a>
## 📝 Deskripsi Soal

Buatlah sebuah fungsi bernama **`persegiBolong`** yang menerima satu parameter angka (`num`), lalu mengembalikan sebuah string berupa pola persegi bolong berukuran `num × num`.

```javascript
// Template soal yang diberikan
// Wajib menggunakan nested loop dan conditional (if/else) di dalamnya.
function persegiBolong(num) {
  let pattern = '';
  // code here
  return pattern;
}
```

Pola yang dihasilkan harus berbentuk persegi dengan:
- Simbol **`*`** (bintang) menempati semua posisi di **sisi luar** (atas, bawah, kiri, kanan).
- Simbol **` `** (spasi) mengisi semua posisi di **bagian dalam** (tengah).

---

<a name="input-output"></a>
## 📥 Input & Output

### ➡️ Input

| Parameter | Tipe Data | Keterangan |
|-----------|:---------:|------------|
| `num` | `Number` | Ukuran sisi persegi. Menentukan jumlah baris **sekaligus** jumlah kolom. |

### ⬅️ Output

| Tipe Data | Keterangan |
|:---------:|------------|
| `String` | Pola persegi bolong `num × num` di mana setiap baris dipisahkan oleh karakter newline `\n`. |

### 🧪 Contoh Eksekusi

**Input:** `persegiBolong(5)`

```
Expected Output:
*****
*   *
*   *
*   *
*****
```

**Input:** `persegiBolong(3)`

```
Expected Output:
***
* *
***
```

**Input:** `persegiBolong(1)`

```
Expected Output:
*
```

> [!NOTE]
> 📌 **Perhatikan spasi!** Area kosong di bagian tengah **harus** diisi karakter spasi (`' '`), bukan benar-benar kosong. Tanpa spasi, bintang-bintang di sisi kiri dan kanan akan menempel satu sama lain dan bentuk persegi-nya menjadi menyusut.

---

<a name="analisis-pola"></a>
## 🔬 Analisis Pola (Visualisasi Koordinat & Penemuan Rumus)

Ini adalah **inti dari seluruh logika** challenge ini. Sebelum menulis satu baris kode pun, kita harus **menemukan rumusnya** terlebih dahulu.

### 1. Visualisasi Grid

Dalam JavaScript, loop biasanya dimulai dari **indeks 0** (*zero-based*). Maka grid `5 × 5` memiliki rentang baris dan kolom dari `0` sampai `4`.

Anggap baris adalah `row` dan kolom adalah `col`. Berikut posisi jatuhnya bintang:

```text
        Kolom (col)
        0   1   2   3   4  
      ┌───┬───┬───┬───┬───┐
  0   │ * │ * │ * │ * │ * │
      ├───┼───┼───┼───┼───┤
  1   │ * │   │   │   │ * │
Baris ├───┼───┼───┼───┼───┤
(row) 2   │ * │   │   │   │ * │
      ├───┼───┼───┼───┼───┤
  3   │ * │   │   │   │ * │
      ├───┼───┼───┼───┼───┤
  4   │ * │ * │ * │ * │ * │
      └───┴───┴───┴───┴───┘
```

Dari visualisasi di atas, bintang membentuk **bingkai** yang menyelimuti sisi luar persegi, sementara bagian dalam tetap kosong.

### 2. Tabel Breakdown Koordinat

Kita bedah baris per baris, mana saja kolom yang terisi bintang `*`:

| Baris (`row`) | Kolom yang terisi `*` | Posisi | Aturan |
|:---:|:---|:---|:---|
| 0 | `0, 1, 2, 3, 4` | Tembok Atas | Baris pertama → **semua kolom** |
| 1 | `0` dan `4` | Tengah Bolong | Hanya **kolom pertama** dan **kolom terakhir** |
| 2 | `0` dan `4` | Tengah Bolong | Hanya **kolom pertama** dan **kolom terakhir** |
| 3 | `0` dan `4` | Tengah Bolong | Hanya **kolom pertama** dan **kolom terakhir** |
| 4 | `0, 1, 2, 3, 4` | Tembok Bawah | Baris terakhir → **semua kolom** |

### 3. Rumus yang Ditemukan (The Boundary Formula)

Dari tabel di atas, pola sangat jelas — bintang dicetak jika berada di **salah satu dari 4 sisi**:

**Sisi Atas:**
Baris pertama (`row === 0`).

**Sisi Bawah:**
Baris terakhir (`row === num - 1`). Karena `num = 5`, maka `num - 1 = 4`.

**Sisi Kiri:**
Kolom pertama (`col === 0`).

**Sisi Kanan:**
Kolom terakhir (`col === num - 1`).

```
Rumus Boundary:  row === 0 || row === num - 1 || col === 0 || col === num - 1
```

### 4. Kesimpulan Analisis

Bintang dicetak **jika salah satu** dari empat sisi terpenuhi. Dalam JavaScript, operator "salah satu" diwakili oleh `||` (OR):

```javascript
if (row === 0 || row === num - 1 || col === 0 || col === num - 1) {
  // Cetak bintang '*'
} else {
  // Cetak spasi ' '
}
```

> [!IMPORTANT]
> 🔑 **Kesimpulan Kunci:** Seluruh challenge ini bisa diselesaikan dengan **satu rumus boundary** yang mengecek 4 kondisi tepi: `row === 0` (atas), `row === num - 1` (bawah), `col === 0` (kiri), `col === num - 1` (kanan). Gabungkan keempatnya dengan operator `||` — selesai!

---

<a name="rules"></a>
## 📏 Rules & Constraints

Berikut adalah batasan wajib yang harus dipenuhi dalam pengerjaan challenge ini:

| # | Aturan | Status |
|---|--------|:------:|
| 1 | ✅ Harus menggunakan **nested loop** (loop bersarang) | Wajib |
| 2 | ✅ Harus menggunakan **conditional** (percabangan `if/else` atau ternary) | Wajib |
| 3 | ✅ Harus menerapkan logika **boundary** (cek 4 sisi: atas, bawah, kiri, kanan) | Wajib |
| 4 | ✅ Fungsi harus mengembalikan (`return`) sebuah string, bukan hanya `console.log` | Wajib |
| 5 | ✅ Spasi kosong harus menggunakan karakter spasi `' '`, bukan string kosong `''` | Wajib |

> [!CAUTION]
> 🚨 **Jangan lupakan spasi!** Tanpa `else { pattern += ' '; }`, bintang sisi kiri dan kanan akan menempel menjadi `**` alih-alih `*   *`. Spasi **bukan hiasan** — ia adalah karakter yang mempertahankan lebar persegi agar tetap `num` karakter per baris!

---

<a name="navigasi"></a>

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| — | [README](../README.md) | [02 — Problem Solving Approach](./02-problem-solving-approach.md) |
