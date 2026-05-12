# ✖️ Challenge Overview — Pola X (X Pattern)

### ✨ _Mencetak pola huruf X dengan memetakan posisi bintang pada diagonal utama dan diagonal terbalik._

> 🎯 **Tujuan:** Memahami cara membaca soal challenge, mengidentifikasi input-output yang diharapkan, memvisualisasikan koordinat grid, dan menemukan rumus diagonal sebelum menulis kode.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Latar Belakang](#latar-belakang) | Konteks dan motivasi challenge |
| 📝 | [Deskripsi Soal](#deskripsi-soal) | Penjelasan lengkap apa yang diminta |
| 📥 | [Input & Output](#input-output) | Format masukan dan keluaran yang diharapkan |
| 🔬 | [Analisis Pola](#analisis-pola) | Visualisasi grid & penemuan rumus diagonal |
| 📏 | [Rules & Constraints](#rules) | Batasan dan syarat wajib pengerjaan |
| 🗺️ | [Navigasi Dokumentasi](#navigasi) | Link ke semua file dokumentasi terkait |

---

<a name="latar-belakang"></a>
## 📖 Latar Belakang

Challenge ini adalah bagian dari seri **Pattern Printing** — sebuah kategori soal klasik yang melatih kemampuan mengontrol alur program dengan **nested loop** (loop bersarang) dan **conditional** (percabangan).

Pola X adalah salah satu pola paling menarik karena ia memaksa kita berpikir dalam **sistem koordinat 2 dimensi** (baris dan kolom) — kemampuan dasar yang sangat penting untuk pengembangan game, grafik komputer, dan manipulasi matriks.

> [!TIP]
> 💡 **Analogi Dunia Nyata**
>
> Bayangkan kamu sedang memasang lampu hias di atas panggung yang berbentuk grid persegi.
> Kamu hanya ingin menyalakan lampu yang berada di **dua garis diagonal** — dari pojok kiri atas ke pojok kanan bawah (`\`), dan dari pojok kanan atas ke pojok kiri bawah (`/`).
>
> Pertanyaannya: **bagaimana kamu tahu lampu mana yang harus dinyalakan, hanya dengan mengetahui nomor baris dan kolomnya?**
>
> | Posisi Lampu | Baris | Kolom | Nyala? |
> |:-------------|:-----:|:-----:|:------:|
> | Pojok kiri atas | 0 | 0 | 💡 Ya — baris = kolom! |
> | Tengah baris pertama | 0 | 2 | ❌ Tidak |
> | Pojok kanan atas | 0 | 4 | 💡 Ya — 0 + 4 = 4! |
> | Titik tengah | 2 | 2 | 💡 Ya — dua aturan terpenuhi! |

---

<a name="deskripsi-soal"></a>
## 📝 Deskripsi Soal

Buatlah sebuah fungsi bernama **`polaX`** yang menerima satu parameter angka (`num`), lalu mengembalikan sebuah string berupa pola huruf X berukuran `num × num`.

```javascript
// Template soal yang diberikan
// Wajib menggunakan nested loop dan conditional.
// Petunjuk: Bintang dicetak hanya jika indeks
// berada di diagonal utama (i === j) ATAU
// diagonal terbalik (i + j === num - 1).
function polaX(num) {
  let pattern = '';
  // code here
  return pattern;
}
```

Pola yang dihasilkan harus berbentuk seperti huruf X, di mana:
- Simbol **`*`** (bintang) mewakili titik-titik di garis diagonal.
- Simbol **` `** (spasi) mewakili area kosong di antara garis diagonal.
- Kedua garis diagonal **saling menyilang** di titik tengah grid.

---

<a name="input-output"></a>
## 📥 Input & Output

### ➡️ Input

| Parameter | Tipe Data | Keterangan |
|-----------|:---------:|------------|
| `num` | `Number` | Ukuran grid persegi. Menentukan jumlah baris **sekaligus** jumlah kolom. |

### ⬅️ Output

| Tipe Data | Keterangan |
|:---------:|------------|
| `String` | Pola huruf X `num × num` di mana setiap baris dipisahkan oleh karakter newline `\n`. |

### 🧪 Contoh Eksekusi

**Input:** `polaX(5)`

```
Expected Output:
*   *
 * *
  *
 * *
*   *
```

**Input:** `polaX(3)`

```
Expected Output:
* *
 *
* *
```

**Input:** `polaX(1)`

```
Expected Output:
*
```

> [!NOTE]
> 📌 **Perhatikan spasi!** Area kosong di antara bintang **harus** diisi karakter spasi (`' '`), bukan benar-benar kosong. Tanpa spasi, bintang-bintang akan menempel satu sama lain dan posisi koordinatnya menjadi kacau. Spasi berperan sebagai "pendorong" agar bintang berada di posisi yang benar.

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
  0   │ * │   │   │   │ * │
      ├───┼───┼───┼───┼───┤
  1   │   │ * │   │ * │   │
Baris ├───┼───┼───┼───┼───┤
(row) 2   │   │   │ * │   │   │
      ├───┼───┼───┼───┼───┤
  3   │   │ * │   │ * │   │
      ├───┼───┼───┼───┼───┤
  4   │ * │   │   │   │ * │
      └───┴───┴───┴───┴───┘
```

Dari visualisasi di atas, bintang membentuk dua garis diagonal yang saling menyilang di titik tengah (indeks `2, 2`).

### 2. Tabel Breakdown Koordinat

Kita pisahkan posisi bintang menjadi dua kelompok: **Bintang 1** (garis diagonal `\` dari kiri atas ke kanan bawah) dan **Bintang 2** (garis diagonal `/` dari kanan atas ke kiri bawah).

| Baris (`row`) | Bintang 1 (`col`) | Bintang 2 (`col`) | `row === col`? | `row + col` |
|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | 4 | ✅ `0 === 0` | 0 + 4 = **4** |
| 1 | 1 | 3 | ✅ `1 === 1` | 1 + 3 = **4** |
| 2 | 2 | *(menumpuk)* | ✅ `2 === 2` | 2 + 2 = **4** |
| 3 | 3 | 1 | ✅ `3 === 3` | 3 + 1 = **4** |
| 4 | 4 | 0 | ✅ `4 === 4` | 4 + 0 = **4** |

### 3. Rumus yang Ditemukan (The Magic Formulas)

Dari tabel di atas, dua pola sangat jelas terlihat:

**Diagonal Utama (`\`):**
Hubungan antara `row` dan `col` pada Bintang 1: angkanya **selalu sama persis**.

```
Rumus:  row === col
```

**Diagonal Terbalik (`/`):**
Jika kita **menjumlahkan** angka `row` dan `col` pada Bintang 2, hasilnya selalu konstan:
- `0 + 4 = 4`
- `1 + 3 = 4`
- `2 + 2 = 4`
- `3 + 1 = 4`
- `4 + 0 = 4`

Angka `4` ini bukan kebetulan. Karena `num = 5`, maka `num - 1 = 4`. Rumus ini berlaku untuk ukuran grid berapapun!

```
Rumus:  row + col === num - 1
```

### 4. Kesimpulan Analisis

Bintang dicetak **jika salah satu** dari dua rumus terpenuhi. Dalam JavaScript, operator "salah satu" diwakili oleh `||` (OR):

```javascript
if (row === col || row + col === num - 1) {
  // Cetak bintang '*'
} else {
  // Cetak spasi ' '
}
```

> [!IMPORTANT]
> 🔑 **Kesimpulan Kunci:** Seluruh challenge ini bisa diselesaikan hanya dengan **dua rumus sederhana**: `row === col` untuk diagonal utama dan `row + col === num - 1` untuk diagonal terbalik. Gabungkan keduanya dengan operator `||` — selesai!

---

<a name="rules"></a>
## 📏 Rules & Constraints

Berikut adalah batasan wajib yang harus dipenuhi dalam pengerjaan challenge ini:

| # | Aturan | Status |
|---|--------|:------:|
| 1 | ✅ Harus menggunakan **nested loop** (loop bersarang) | Wajib |
| 2 | ✅ Harus menggunakan **conditional** (percabangan `if/else` atau ternary) | Wajib |
| 3 | ✅ Harus menerapkan logika **diagonal utama** (`row === col`) dan **diagonal terbalik** (`row + col === num - 1`) | Wajib |
| 4 | ✅ Fungsi harus mengembalikan (`return`) sebuah string, bukan hanya `console.log` | Wajib |
| 5 | ✅ Spasi kosong harus menggunakan karakter spasi `' '`, bukan string kosong `''` | Wajib |

> [!CAUTION]
> 🚨 **Jangan lupakan spasi!** Tanpa `else { pattern += ' '; }`, bintang yang seharusnya berjauhan akan menempel satu sama lain. Spasi **bukan hiasan** — ia adalah karakter yang mendorong bintang ke posisi koordinat yang benar!

---

<a name="navigasi"></a>

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| — | [README](../README.md) | [02 — Problem Solving Approach](./02-problem-solving-approach.md) |
