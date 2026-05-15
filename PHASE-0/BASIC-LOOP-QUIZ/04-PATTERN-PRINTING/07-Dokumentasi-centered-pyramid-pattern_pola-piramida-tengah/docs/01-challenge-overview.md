# 🔺 Challenge Overview — Piramida Tengah (Centered Pyramid)

### ✨ _Mencetak piramida rata tengah menggunakan nested loop: spasi pendorong + bintang berjarak._

> 🎯 **Tujuan:** Memahami cara membaca soal challenge, mengidentifikasi input-output yang diharapkan, memvisualisasikan pola piramida, dan menemukan rumus spasi pendorong (`num - row`) serta rumus bintang (`row`) sebelum menulis kode.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Latar Belakang](#latar-belakang) | Konteks dan motivasi challenge |
| 📝 | [Deskripsi Soal](#deskripsi-soal) | Penjelasan lengkap apa yang diminta |
| 📥 | [Input & Output](#input-output) | Format masukan dan keluaran yang diharapkan |
| 🔬 | [Analisis Pola](#analisis-pola) | Tabel breakdown & penemuan rumus kunci |
| 📏 | [Rules & Constraints](#rules) | Batasan dan syarat wajib pengerjaan |
| 🗺️ | [Navigasi Dokumentasi](#navigasi) | Link ke semua file dokumentasi terkait |

---

<a name="latar-belakang"></a>
## 📖 Latar Belakang

Challenge ini adalah **variasi kedua** dari Pola Piramida dalam seri **Pattern Printing**. Jika pada Piramida sebelumnya (folder 06) bintang-bintang saling menempel (`***`), di Piramida Tengah ini setiap bintang **diberi jarak satu spasi** (`* * *`). Perbedaan kecil ini mengubah cara kita menghitung "lebar" piramida secara signifikan.

Tantangan utamanya: kamu harus **mengkoordinasikan 2 nested loop** (satu untuk spasi pendorong, satu untuk bintang berjarak) agar piramida tampil simetris di tengah.

> [!TIP]
> 💡 **Analogi Dunia Nyata**
>
> Bayangkan kamu sedang menyusun **piramida koin** di atas meja.
> Setiap baris memiliki jumlah koin yang bertambah, dan koin-koinnya **tidak saling menempel** — ada jarak satu jari di antara mereka.
>
> | | Piramida Rapat (Folder 06) 🏔️ | Piramida Berjarak (Folder 07) 🔺 |
> |---|---|---|
> | 📏 Jarak antar bintang | Menempel langsung (`***`) | Diberi spasi (`* * *`) |
> | 🔢 Rumus bintang | `(2 × row) - 1` (deret ganjil) | `row` (langsung sama dengan nomor baris) |
> | 🌌 Karakter yang dicetak | `'*'` | `'* '` (bintang + spasi) |
> | 🧠 Kompleksitas rumus | Lebih rumit | Lebih sederhana |

### 💡 Jadi, Apa Tantangannya?

Soal ini **mewajibkan** penggunaan nested loop. Tantangan utamanya ada dua:
1. **Menemukan rumus spasi pendorong** — berapa spasi kosong di awal setiap baris agar piramida terpusat.
2. **Memahami karakter cetak** — bukan hanya `'*'`, melainkan `'* '` (bintang + spasi) yang membuat jarak antar bintang.

---

<a name="deskripsi-soal"></a>
## 📝 Deskripsi Soal

Buatlah sebuah fungsi bernama **`piramida2`** yang menerima satu parameter angka (`num`), lalu mengembalikan sebuah string berupa pola piramida rata tengah berukuran `num` baris.

```javascript
// Template soal yang diberikan
// Wajib menggunakan nested loop.
// Petunjuk: Anda mungkin perlu 2 loop di dalam 1 loop (satu untuk spasi, satu untuk bintang).
function piramida2(num) {
  let pattern = '';
  // code here
  return pattern;
}
```

Pola yang dihasilkan harus berbentuk piramida dengan:
- Setiap baris memiliki **spasi pendorong** di awal untuk memusatkan piramida.
- Simbol **`* `** (bintang + spasi) dicetak sebanyak nomor baris saat itu.
- Setiap baris diakhiri dengan karakter newline `\n`.

---

<a name="input-output"></a>
## 📥 Input & Output

### ➡️ Input

| Parameter | Tipe Data | Keterangan |
|-----------|:---------:|------------|
| `num` | `Number` | Jumlah baris piramida. Menentukan tinggi sekaligus lebar dasar piramida. |

### ⬅️ Output

| Tipe Data | Keterangan |
|:---------:|------------|
| `String` | Pola piramida rata tengah `num` baris di mana setiap baris dipisahkan oleh karakter newline `\n`. |

### 🧪 Contoh Eksekusi

**Input:** `piramida2(5)`

```
Expected Output:
    *
   * *
  * * *
 * * * *
* * * * *
```

**Input:** `piramida2(3)`

```
Expected Output:
  *
 * *
* * *
```

**Input:** `piramida2(1)`

```
Expected Output:
*
```

> [!NOTE]
> 📌 **Perhatikan pola cetaknya!** Setiap bintang diikuti oleh satu spasi (`'* '`), bukan hanya bintang saja (`'*'`). Inilah yang membuat bintang-bintang tidak saling menempel dan membentuk piramida berjarak. Tanpa spasi ekstra ini, piramida akan terlihat "menyusut" dan tidak simetris.

---

<a name="analisis-pola"></a>
## 🔬 Analisis Pola (Tabel Breakdown & Penemuan Rumus)

Ini adalah **inti dari seluruh logika** challenge ini. Sebelum menulis satu baris kode pun, kita harus **menemukan rumusnya** terlebih dahulu.

### 1. Tabel Breakdown Pola (`num = 5`)

| Baris ke- (`row`) | Jumlah Spasi Awal | Jumlah Bintang | Visualisasi |
|:-----------------:|:------------------:|:--------------:|:-----------:|
| 1 | 4 | 1 | `····*` |
| 2 | 3 | 2 | `···* *` |
| 3 | 2 | 3 | `··* * *` |
| 4 | 1 | 4 | `·* * * *` |
| 5 | 0 | 5 | `* * * * *` |

> 📌 Tanda `·` merepresentasikan karakter spasi agar terlihat jelas.

### 2. Penemuan Rumus Spasi

| `row` | `num` | `num - row` | Cocok dengan Spasi? |
|:-----:|:-----:|:-----------:|:-------------------:|
| 1 | 5 | 4 | ✅ |
| 2 | 5 | 3 | ✅ |
| 3 | 5 | 2 | ✅ |
| 4 | 5 | 1 | ✅ |
| 5 | 5 | 0 | ✅ |

> 📌 *Semakin turun baris, spasi makin sedikit. Rumus `num - row` secara natural berkurang karena `row` bertambah sedangkan `num` tetap.*

### 3. Penemuan Rumus Bintang

| `row` | Target Bintang | Cocok? |
|:-----:|:--------------:|:------:|
| 1 | 1 | ✅ |
| 2 | 2 | ✅ |
| 3 | 3 | ✅ |
| 4 | 4 | ✅ |
| 5 | 5 | ✅ |

> 📌 *Jumlah bintang sama persis dengan nomor baris (`row`). Jauh lebih sederhana dibanding Piramida Rapat yang menggunakan rumus `(2 × row) - 1`!*

### 4. Dua Rumus Kunci yang Ditemukan

```
🌌 Jumlah Spasi   = num - row
⭐ Jumlah Bintang = row
📝 Karakter Cetak = '* ' (bintang + spasi, bukan hanya '*')
```

> [!IMPORTANT]
> 🔑 **Insight Kunci:** Berbeda dengan Piramida Rapat (folder 06) yang mencetak karakter `'*'` dan menggunakan rumus bintang `(2 × row) - 1`, Piramida Tengah ini mencetak karakter `'* '` (bintang + spasi) dan rumus bintangnya **langsung sama dengan `row`**. Spasi ekstra setelah bintang inilah yang secara visual "menggantikan" kebutuhan rumus deret ganjil.

---

<a name="rules"></a>
## 📏 Rules & Constraints

Berikut adalah batasan wajib yang harus dipenuhi dalam pengerjaan challenge ini:

| # | Aturan | Status |
|---|--------|:------:|
| 1 | ✅ Harus menggunakan **nested loop** (loop bersarang) | Wajib |
| 2 | ✅ Membutuhkan **2 nested loop** di dalam 1 loop utama (satu spasi, satu bintang) | Wajib |
| 3 | ✅ Karakter yang dicetak adalah `'* '` (bintang + spasi), bukan hanya `'*'` | Wajib |
| 4 | ✅ Fungsi harus mengembalikan (`return`) sebuah string, bukan hanya `console.log` | Wajib |
| 5 | ✅ Setiap baris diakhiri karakter newline `'\n'` | Wajib |

> [!CAUTION]
> 🚨 **Jangan cetak `'*'` tanpa spasi!** Tanpa spasi ekstra setelah bintang, hasilnya akan menjadi segitiga siku-siku yang menempel (`*****`) alih-alih piramida berjarak (`* * * * *`). Karakter `'* '` adalah **kunci visual** yang membedakan challenge ini dari Piramida Rapat!

---

<a name="navigasi"></a>

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| — | [README](../README.md) | [02 — Problem Solving Approach](./02-problem-solving-approach.md) |
