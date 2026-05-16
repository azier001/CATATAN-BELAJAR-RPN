# 🔻 Challenge Overview — Piramida Terbalik (Inverted Pyramid)

### ✨ _Mencetak piramida terbalik rata tengah menggunakan nested loop: spasi pendorong + bintang deret ganjil menurun._

> 🎯 **Tujuan:** Memahami cara membaca soal challenge, mengidentifikasi input-output yang diharapkan, memvisualisasikan pola piramida terbalik, dan menemukan rumus spasi pendorong (`row - 1`) serta rumus bintang (`2 * num - (2 * row - 1)`) sebelum menulis kode.

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

Challenge ini adalah **kelanjutan logis** dari Pola Piramida (folder 06) dan Piramida Tengah (folder 07). Jika sebelumnya piramida dibangun **dari atas ke bawah** (bintang bertambah), kali ini kita membaliknya — piramida dibangun **dari bawah ke atas** (bintang berkurang). Perbedaan arah ini mengubah seluruh rumus spasi dan bintang.

Tantangan utamanya: kamu harus **menemukan rumus baru** untuk spasi yang bertambah dan bintang yang berkurang — atau menemukan **jalan pintas brilian** dengan mendaur ulang rumus piramida normal menggunakan *reverse loop*.

> [!TIP]
> 💡 **Analogi Dunia Nyata**
>
> Bayangkan kamu sedang **membongkar piramida koin** dari atas ke bawah.
> Setiap baris, kamu mengambil 2 koin dari sisi kiri dan kanan, sehingga baris berikutnya selalu lebih pendek.
>
> | | Piramida Normal (Folder 06) 🔺 | Piramida Terbalik (Folder 08) 🔻 |
> |---|---|---|
> | 📏 Arah bintang | Bertambah tiap baris (1, 3, 5...) | Berkurang tiap baris (9, 7, 5...) |
> | 🌌 Arah spasi | Berkurang tiap baris | Bertambah tiap baris |
> | 🔢 Rumus bintang | `2 * row - 1` | `2 * num - (2 * row - 1)` atau *reverse loop* |
> | 🧠 Insight kunci | Membangun dari puncak | Bisa "membalik" piramida normal! |

### 💡 Jadi, Apa Tantangannya?

Tantangan utamanya ada dua:
1. **Menemukan rumus baru** — spasi yang bertambah (`row - 1`) dan bintang deret ganjil yang menurun (`2 * num - (2 * row - 1)`).
2. **Atau menemukan jalan pintas** — mendaur ulang rumus piramida normal dengan membalik arah loop (`row` dari `num` ke `1`). Pendekatan kedua ini adalah *insight* paling berharga dari challenge ini!

---

<a name="deskripsi-soal"></a>
## 📝 Deskripsi Soal

Buatlah sebuah fungsi bernama **`piramidaTerbalik`** yang menerima satu parameter angka (`num`), lalu mengembalikan sebuah string berupa pola piramida terbalik rata tengah berukuran `num` baris.

```javascript
// Template soal yang diberikan
function piramidaTerbalik(num) {
  let pattern = '';
  // code here
  return pattern;
}
```

Pola yang dihasilkan harus berbentuk piramida terbalik dengan:
- Baris pertama adalah baris **terlebar** (paling banyak bintang).
- Setiap baris memiliki **spasi pendorong** di awal yang bertambah untuk memusatkan pola.
- Simbol **`*`** (bintang tanpa spasi) dicetak membentuk deret ganjil menurun.
- Setiap baris diakhiri dengan karakter newline `\n`.

---

<a name="input-output"></a>
## 📥 Input & Output

### ➡️ Input

| Parameter | Tipe Data | Keterangan |
|-----------|:---------:|------------|
| `num` | `Number` | Jumlah baris piramida terbalik. Menentukan tinggi sekaligus lebar baris pertama. |

### ⬅️ Output

| Tipe Data | Keterangan |
|:---------:|------------|
| `String` | Pola piramida terbalik rata tengah `num` baris di mana setiap baris dipisahkan oleh karakter newline `\n`. |

### 🧪 Contoh Eksekusi

**Input:** `piramidaTerbalik(5)`

```
Expected Output:
*********
 *******
  *****
   ***
    *
```

**Input:** `piramidaTerbalik(3)`

```
Expected Output:
*****
 ***
  *
```

**Input:** `piramidaTerbalik(1)`

```
Expected Output:
*
```

> [!NOTE]
> 📌 **Perhatikan pola cetaknya!** Karakter yang dicetak adalah `'*'` (bintang saja, tanpa spasi di antaranya). Ini sama seperti Piramida Rapat (folder 06) — bukan `'* '` seperti Piramida Tengah (folder 07). Karena itu, rumus bintangnya menggunakan **deret ganjil** (9, 7, 5, 3, 1), bukan linier.

---

<a name="analisis-pola"></a>
## 🔬 Analisis Pola (Tabel Breakdown & Penemuan Rumus)

Ini adalah **inti dari seluruh logika** challenge ini. Sebelum menulis satu baris kode pun, kita harus **menemukan rumusnya** terlebih dahulu.

### 1. Tabel Breakdown Pola (`num = 5`)

| Baris ke- (`row`) | Jumlah Spasi Awal | Jumlah Bintang | Visualisasi |
|:-----------------:|:------------------:|:--------------:|:-----------:|
| 1 | 0 | 9 | `*********` |
| 2 | 1 | 7 | `·*******` |
| 3 | 2 | 5 | `··*****` |
| 4 | 3 | 3 | `···***` |
| 5 | 4 | 1 | `····*` |

> 📌 Tanda `·` merepresentasikan karakter spasi agar terlihat jelas.

### 2. Penemuan Rumus Spasi

| `row` | `row - 1` | Cocok dengan Spasi? |
|:-----:|:---------:|:-------------------:|
| 1 | 0 | ✅ |
| 2 | 1 | ✅ |
| 3 | 2 | ✅ |
| 4 | 3 | ✅ |
| 5 | 4 | ✅ |

> 📌 *Semakin turun baris, spasi makin banyak. Rumus `row - 1` secara natural bertambah karena `row` bertambah.*

### 3. Penemuan Rumus Bintang

Bintang menurun dengan selisih 2: **9, 7, 5, 3, 1** (deret ganjil terbalik).

| `row` | `2 * num` | `2 * row - 1` | `2 * num - (2 * row - 1)` | Target | Cocok? |
|:-----:|:---------:|:-------------:|:-------------------------:|:------:|:------:|
| 1 | 10 | 1 | 9 | 9 | ✅ |
| 2 | 10 | 3 | 7 | 7 | ✅ |
| 3 | 10 | 5 | 5 | 5 | ✅ |
| 4 | 10 | 7 | 3 | 3 | ✅ |
| 5 | 10 | 9 | 1 | 1 | ✅ |

> 📌 *Rumus bintang juga bisa ditulis sebagai `2 * (num - row) + 1` — keduanya secara matematis identik.*

### 4. Dua Rumus Kunci yang Ditemukan

```
🌌 Jumlah Spasi   = row - 1
⭐ Jumlah Bintang = 2 * num - (2 * row - 1)  →  atau  →  2 * (num - row) + 1
📝 Karakter Cetak = '*' (bintang saja, tanpa spasi)
```

> [!IMPORTANT]
> 🔑 **Insight Kunci — Jalan Pintas Reverse Loop:**
> Alih-alih menghafal rumus baru di atas, kamu bisa **mendaur ulang rumus piramida normal** (spasi = `num - row`, bintang = `2 * row - 1`) dengan cara membalik arah loop dari `row = num` ke `row = 1`. Hasilnya identik! Ini membuktikan bahwa **piramida terbalik = piramida normal yang dibaca dari bawah ke atas.**

---

<a name="rules"></a>
## 📏 Rules & Constraints

Berikut adalah batasan wajib yang harus dipenuhi dalam pengerjaan challenge ini:

| # | Aturan | Status |
|---|--------|:------:|
| 1 | ✅ Karakter yang dicetak adalah `'*'` (bintang tanpa spasi) | Wajib |
| 2 | ✅ Fungsi harus mengembalikan (`return`) sebuah string, bukan hanya `console.log` | Wajib |
| 3 | ✅ Setiap baris diakhiri karakter newline `'\n'` | Wajib |

> [!CAUTION]
> 🚨 **Jangan tertukar dengan Piramida Tengah (folder 07)!** Di folder 07, karakter cetaknya `'* '` (bintang + spasi) dan rumus bintangnya linier (`row`). Di challenge ini, karakter cetaknya hanya `'*'` dan rumus bintangnya **deret ganjil** (`2 * (num - row) + 1`). Perbedaan satu karakter spasi mengubah seluruh rumus!

---

<a name="navigasi"></a>

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| — | [README](../README.md) | [02 — Problem Solving Approach](./02-problem-solving-approach.md) |
