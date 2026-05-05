# ⭐ Pola Bintang dengan Looping

> 📝 Mempelajari 4 cara berbeda membuat pola bintang segitiga menggunakan perulangan di JavaScript

---

## 📑 Daftar Isi

- 🎯 [Soal](#soal)
- 🧩 [Analisis Pola](#analisis-pola)
- 🌟 [Cara 1: Nested Loop (Direkomendasikan)](#cara-1-nested-loop)
- ⚡ [Cara 2: State Accumulation](#cara-2-state-accumulation)
- 💎 [Cara 3: String Repeat](#cara-3-string-repeat)
- 🎭 [Cara 4: Manual Newline](#cara-4-manual-newline)
- 🧪 [Contoh Output](#contoh-output)
- ⚖️ [Perbandingan 4 Cara](#perbandingan-4-cara)
- 📚 [Konsep yang Dipelajari](#konsep-yang-dipelajari)
- 💡 [Catatan Tambahan](#catatan-tambahan)

---

<a name="soal"></a>
## 🎯 Soal

Buatlah program yang mencetak pola bintang segitiga berdasarkan nilai `input`. Setiap baris menambah 1 bintang dari baris sebelumnya.

```javascript
let input = 5;

// Hasil yang diharapkan:
// *
// **
// ***
// ****
// *****
```

---

<a name="analisis-pola"></a>
## 🧩 Analisis Pola

Sebelum coding, kita amati dulu polanya:

```text
Baris ke-1 → 1 bintang
Baris ke-2 → 2 bintang
Baris ke-3 → 3 bintang
Baris ke-4 → 4 bintang
Baris ke-5 → 5 bintang
```

**Kesimpulan:** Jumlah bintang = Nomor baris. Artinya kita butuh:
1. **Sesuatu untuk mengatur baris** (dari 1 sampai `input`)
2. **Sesuatu untuk mengatur jumlah bintang** di setiap baris

---

<a name="cara-1-nested-loop"></a>
## 🌟 Cara 1: Nested Loop (Direkomendasikan untuk Belajar)

Menggunakan **loop di dalam loop** — loop luar mengontrol baris, loop dalam mengontrol bintang.

```javascript
let input = 5;

for (let i = 1; i <= input; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  console.log(baris);
}
```

### 🔍 Penjelasan Step-by-Step

1. **Loop luar (`i`)** — Mengontrol nomor baris (1 sampai 5)
2. **`let baris = ""`** — Setiap ganti baris, wadah dikosongkan ulang
3. **Loop dalam (`j`)** — Menambah bintang sebanyak nilai `i` saat itu
4. **`console.log(baris)`** — Cetak baris, otomatis pindah ke baris baru

### 📊 Tabel Penelusuran (Dry Run)

| Iterasi `i` | Loop `j` berjalan | `baris` (akhir) | Output |
|:-----------:|:-----------------:|:---------------:|:------:|
| 1 | 1x (1 ≤ 1) | `*` | `*` |
| 2 | 2x (1 ≤ 2, 2 ≤ 2) | `**` | `**` |
| 3 | 3x | `***` | `***` |
| 4 | 4x | `****` | `****` |
| 5 | 5x | `*****` | `*****` |

### 🎨 Visualisasi Alur

```text
🏁 START (input = 5)
 |
 ├── [BARIS 1] (i = 1)
 |    └── ⭐ (j=1) → baris = "*" → CETAK!
 |
 ├── [BARIS 2] (i = 2)
 |    ├── ⭐ (j=1)
 |    └── ⭐ (j=2) → baris = "**" → CETAK!
 |
 ├── [BARIS 3] (i = 3)
 |    ├── ⭐ (j=1)
 |    ├── ⭐ (j=2)
 |    └── ⭐ (j=3) → baris = "***" → CETAK!
 |
 └── ... dst sampai i = 5
🔚 FINISH
```

> ✅ **Kelebihan:** Sangat fleksibel — bisa dipakai untuk pola kompleks (piramida, belah ketupat, dll)
> ❌ **Kekurangan:** Lebih lambat karena loop berputar lebih banyak (O(n²))

---

<a name="cara-2-state-accumulation"></a>
## ⚡ Cara 2: State Accumulation (Paling Efisien)

Hanya menggunakan **1 loop**. Variabel `result` tidak pernah dikosongkan, sehingga bintangnya terus menumpuk.

```javascript
let input = 5;
let result = "";

for (let i = 0; i < input; i++) {
  result += "*";
  console.log(result);
}
```

### 🔍 Penjelasan Step-by-Step

1. **`result` di LUAR loop** — Variabel ini tidak di-reset, jadi bintang lama tetap tersimpan
2. **Setiap iterasi** — Cukup tambah 1 bintang baru ke `result` yang sudah ada
3. **`console.log(result)`** — Cetak isi `result` yang terus bertambah

### 📊 Tabel Penelusuran

| Iterasi `i` | `result` sebelum | Tambah `*` | `result` sesudah | Output |
|:-----------:|:----------------:|:----------:|:----------------:|:------:|
| 0 | `""` | `"" + "*"` | `"*"` | `*` |
| 1 | `"*"` | `"*" + "*"` | `"**"` | `**` |
| 2 | `"**"` | `"**" + "*"` | `"***"` | `***` |
| 3 | `"***"` | `"***" + "*"` | `"****"` | `****` |
| 4 | `"****"` | `"****" + "*"` | `"*****"` | `*****` |

> ✅ **Kelebihan:** Paling cepat — hanya 5 putaran loop (O(n)), bukan 15 seperti nested loop
> ❌ **Kekurangan:** Hanya cocok untuk pola yang bertambah secara berurutan

---

<a name="cara-3-string-repeat"></a>
## 💎 Cara 3: String Repeat (Clean Code)

Menggunakan method bawaan JavaScript `.repeat()` untuk mengulang karakter.

```javascript
let input = 5;

for (let i = 1; i <= input; i++) {
  console.log("*".repeat(i));
}
```

### 🔍 Penjelasan Step-by-Step

1. **`"*".repeat(i)`** — Perintahkan JavaScript: *"Copy karakter `*` sebanyak `i` kali"*
2. Ibarat **mesin fotokopi** — tinggal bilang mau fotokopi berapa kali, selesai

### 📊 Tabel Penelusuran

| Iterasi `i` | Perintah | Hasil |
|:-----------:|:--------:|:-----:|
| 1 | `"*".repeat(1)` | `*` |
| 2 | `"*".repeat(2)` | `**` |
| 3 | `"*".repeat(3)` | `***` |
| 4 | `"*".repeat(4)` | `****` |
| 5 | `"*".repeat(5)` | `*****` |

> ✅ **Kelebihan:** Kode paling ringkas dan mudah dibaca
> ❌ **Kekurangan:** Kurang fleksibel untuk pola yang lebih kompleks

---

<a name="cara-4-manual-newline"></a>
## 🎭 Cara 4: Manual Newline (`\n`)

Membangun **satu string raksasa** yang berisi seluruh pola, lalu cetak sekali di akhir.

```javascript
let input = 5;
let outputFinal = "";

for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    outputFinal += "*";
  }
  outputFinal += "\n";
}

console.log(outputFinal);
```

### 🔍 Penjelasan Step-by-Step

1. **Sama seperti Cara 1** (nested loop), tapi bintang ditampung di satu variabel besar
2. **`outputFinal += "\n"`** — Karakter `\n` = **tombol Enter** manual. Menyuruh komputer pindah baris
3. **`console.log` hanya sekali** di akhir — ibarat mengedit video dulu baru di-publish

### 📊 Pertumbuhan Variabel `outputFinal`

| Setelah Baris ke- | Isi `outputFinal` (di memori) |
|:------------------:|:-----------------------------:|
| 1 | `*\n` |
| 2 | `*\n**\n` |
| 3 | `*\n**\n***\n` |
| 4 | `*\n**\n***\n****\n` |
| 5 | `*\n**\n***\n****\n*****\n` |

> ✅ **Kelebihan:** Bisa di-`return` dalam function, hasilnya bisa disimpan ke file atau dikirim ke API
> ❌ **Kekurangan:** Harus manual menambah `\n` dan menyimpan semua string di memori

---

<a name="contoh-output"></a>
## 🧪 Contoh Output

Semua 4 cara menghasilkan output yang **identik**:

```text
Input: 5
Output:
*
**
***
****
*****
```

```text
Input: 3
Output:
*
**
***
```

---

<a name="perbandingan-4-cara"></a>
## ⚖️ Perbandingan 4 Cara

| Aspek | 🌟 Cara 1 (Nested) | ⚡ Cara 2 (Accumulation) | 💎 Cara 3 (Repeat) | 🎭 Cara 4 (Newline) |
|-------|:-------------------:|:------------------------:|:-------------------:|:--------------------:|
| **Jumlah Loop** | 2 (nested) | 1 ✨ | 1 ✨ | 2 (nested) |
| **Kompleksitas** | O(n²) | O(n) ✨ | O(n) ✨ | O(n²) |
| **Fleksibilitas** | Tinggi ✨ | Rendah | Rendah | Tinggi ✨ |
| **Bisa `return`?** | ❌ | ❌ | ❌ | ✅ ✨ |
| **Kemudahan Baca** | Sedang | Mudah | Sangat Mudah ✨ | Sedang |
| **Rekomendasi** | 👑 Belajar | ⚡ Performa | 💎 Clean Code | 🎭 Function/API |

---

<a name="konsep-yang-dipelajari"></a>
## 📚 Konsep yang Dipelajari

- ✅ **Nested Loop** — Perulangan di dalam perulangan untuk mengontrol baris dan kolom
- ✅ **String Concatenation (`+=`)** — Menyambung string secara bertahap
- ✅ **State Accumulation** — Memanfaatkan variabel yang tidak di-reset untuk menumpuk data
- ✅ **`.repeat()` Method** — Fungsi bawaan JavaScript untuk mengulang string
- ✅ **Karakter `\n` (Newline)** — Menyisipkan perintah "pindah baris" secara manual
- ✅ **`console.log()` otomatis pindah baris** — Setiap pemanggilan `console.log()` sudah include newline

---

<a name="catatan-tambahan"></a>
## 💡 Catatan Tambahan

### 👑 Mana yang Harus Dikuasai Duluan?

**Nested Loop (Cara 1)** adalah pondasi. Kalau kamu sudah paham ini, kamu bisa bikin pola apa saja (segitiga terbalik, piramida, belah ketupat). Cara lainnya adalah "senjata rahasia" yang bisa kamu keluarkan saat situasinya tepat.

### 🧠 Perbedaan `console.log()` vs `\n`

| Metode | Pindah Baris | Kapan Dipakai |
|--------|:------------:|:-------------:|
| `console.log()` di dalam loop | **Otomatis** | Cetak langsung per baris |
| Karakter `\n` di variabel | **Manual** | Simpan semua dulu, cetak sekali |

---

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review

📅 Terakhir diperbarui: 2026-05-05
