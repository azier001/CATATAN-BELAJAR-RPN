# ♟️ Challenge Overview — Papan Catur (Chess Board Pattern)

### ✨ _Mencetak pola selang-seling seperti papan catur menggunakan logika ganjil-genap._

> 🎯 **Tujuan:** Memahami cara membaca soal challenge, mengidentifikasi input-output yang diharapkan, dan memahami batasan (rules) yang harus dipenuhi sebelum menulis kode.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Latar Belakang](#latar-belakang) | Konteks dan motivasi challenge |
| 📝 | [Deskripsi Soal](#deskripsi-soal) | Penjelasan lengkap apa yang diminta |
| 📥 | [Input & Output](#input-output) | Format masukan dan keluaran yang diharapkan |
| 🔬 | [Analisis Pola](#analisis-pola) | Tabel breakdown pola ganjil-genap |
| 📏 | [Rules & Constraints](#rules) | Batasan dan syarat wajib pengerjaan |
| 🗺️ | [Navigasi Dokumentasi](#navigasi) | Link ke semua file dokumentasi terkait |

---

<a name="latar-belakang"></a>
## 📖 Latar Belakang

Challenge ini adalah bagian dari seri **Pattern Printing** — sebuah kategori soal klasik yang melatih kemampuan mengontrol alur program dengan **nested loop** (loop bersarang) dan **conditional** (percabangan).

Papan catur (*chess board*) adalah contoh sempurna dari pola **selang-seling** (alternating pattern): setiap kotak di dalamnya memiliki warna berbeda dari kotak di sebelahnya, baik secara horizontal maupun vertikal.

> [!TIP]
> 💡 **Analogi Dunia Nyata**
>
> Bayangkan kamu sedang mewarnai lantai keramik dengan dua warna secara bergantian.
> Aturannya simpel: **jika posisi keramiknya (baris + kolom) berjumlah genap, pakai warna gelap. Jika ganjil, pakai warna terang.**
>
> | Posisi | Baris + Kolom | Hasil |
> |--------|:---:|-------|
> | Pojok kiri atas (1,1) | 1+1 = 2 (Genap) | 🟫 Warna Gelap (`#`) |
> | Sebelahnya (1,2) | 1+2 = 3 (Ganjil) | ⬜ Warna Terang (` `) |
> | Lanjut (1,3) | 1+3 = 4 (Genap) | 🟫 Warna Gelap (`#`) |

---

<a name="deskripsi-soal"></a>
## 📝 Deskripsi Soal

Buatlah sebuah fungsi bernama **`papanCatur`** yang menerima satu parameter angka (`num`), lalu mengembalikan sebuah string berupa pola papan catur berukuran `num × num`.

```javascript
// Template soal yang diberikan
function papanCatur(num) {
  let pattern = '';
  // code here
  return pattern;
}
```

Pola yang dihasilkan harus berbentuk seperti kotak papan catur, di mana:
- Simbol **`#`** mewakili kotak gelap (terisi).
- Simbol **` `** (spasi) mewakili kotak terang (kosong).
- Pola keduanya **berselang-seling** di setiap baris dan kolom.

---

<a name="input-output"></a>
## 📥 Input & Output

### ➡️ Input

| Parameter | Tipe Data | Keterangan |
|-----------|:---------:|------------|
| `num` | `Number` | Ukuran papan. Menentukan jumlah baris **sekaligus** jumlah kolom. |

### ⬅️ Output

| Tipe Data | Keterangan |
|:---------:|------------|
| `String` | Pola papan catur `num × num` di mana setiap baris dipisahkan oleh karakter newline `\n`. |

### 🧪 Contoh Eksekusi

**Input:** `papanCatur(5)`

```
Expected Output:
# # #
 # # 
# # #
 # # 
# # #
```

**Input:** `papanCatur(3)`

```
Expected Output:
# #
 # 
# #
```

> [!NOTE]
> 📌 **Perhatikan spasi!** Kotak "kosong" tetap diisi karakter **spasi** (`' '`), bukan benar-benar kosong. Ini penting agar kolom tetap lurus (rata).

---

<a name="analisis-pola"></a>
## 🔬 Analisis Pola (Visualisasi Ganjil-Genap)

Ini adalah **inti dari seluruh logika** challenge ini. Kita bisa menemukan polanya dengan membuat tabel koordinat.

Contoh papan `3 × 3` (dengan indeks baris dan kolom dimulai dari `1`):

| Baris (`row`) | Kolom (`col`) | `row + col` | Genap/Ganjil | Karakter |
|:---:|:---:|:---:|:---:|:---:|
| 1 | 1 | **2** | Genap ✅ | `#` |
| 1 | 2 | **3** | Ganjil | ` ` |
| 1 | 3 | **4** | Genap ✅ | `#` |
| 2 | 1 | **3** | Ganjil | ` ` |
| 2 | 2 | **4** | Genap ✅ | `#` |
| 2 | 3 | **5** | Ganjil | ` ` |
| 3 | 1 | **4** | Genap ✅ | `#` |
| 3 | 2 | **5** | Ganjil | ` ` |
| 3 | 3 | **6** | Genap ✅ | `#` |

### 💡 Rumus Inti yang Ditemukan

```
(row + col) % 2 === 0  →  cetak '#'
(row + col) % 2 !== 0  →  cetak ' ' (spasi)
```

Perhatikan polanya secara visual pada papan `5 × 5`:

```
     col→  1    2    3    4    5
row↓
 1      [  #  ][ ' '][  #  ][ ' '][  #  ]   →  "# # #"
 2      [ ' '][  #  ][ ' '][  #  ][ ' ']   →  " # # "
 3      [  #  ][ ' '][  #  ][ ' '][  #  ]   →  "# # #"
 4      [ ' '][  #  ][ ' '][  #  ][ ' ']   →  " # # "
 5      [  #  ][ ' '][  #  ][ ' '][  #  ]   →  "# # #"
```

> [!IMPORTANT]
> 🔑 **Kesimpulan Kunci:** Seluruh challenge ini bisa diselesaikan hanya dengan **satu rumus tunggal**: `(row + col) % 2 === 0`. Tidak ada rumus berbeda untuk baris genap atau ganjil — satu aturan berlaku untuk semua sel!

---

<a name="rules"></a>
## 📏 Rules & Constraints

Berikut adalah batasan wajib yang harus dipenuhi dalam pengerjaan challenge ini:

| # | Aturan | Status |
|---|--------|:------:|
| 1 | ✅ Harus menggunakan **nested loop** (loop bersarang) | Wajib |
| 2 | ✅ Harus menggunakan **conditional** (percabangan `if/else` atau ternary) | Wajib |
| 3 | ✅ Harus menerapkan logika **ganjil-genap** dari penjumlahan indeks | Wajib |
| 4 | ✅ Fungsi harus mengembalikan (`return`) sebuah string, bukan hanya `console.log` | Wajib |

> [!CAUTION]
> 🚨 **Jangan gunakan `console.log` di dalam fungsi!** Fungsi ini harus me-`return` sebuah string agar bisa diuji dan digunakan kembali di tempat lain. `console.log` hanya untuk debugging sementara.

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| — | [README](./README.md) | [02 — Problem Solving Approach](./02-problem-solving-approach.md) |
