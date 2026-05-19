# 🔢 Challenge Overview — Angka Palindrome

### ✨ _Mencari angka kembar terdekat menggunakan while loop: mendaki naik + membalik digit._

> 🎯 **Tujuan:** Memahami cara membaca soal challenge, mengidentifikasi input-output yang diharapkan, memvisualisasikan proses pencarian palindrome, dan menemukan pola logika "mendaki satu per satu sambil mengecek kembaran" sebelum menulis kode.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Latar Belakang](#latar-belakang) | Konteks dan motivasi challenge |
| 📝 | [Deskripsi Soal](#deskripsi-soal) | Penjelasan lengkap apa yang diminta |
| 📥 | [Input & Output](#input-output) | Format masukan dan keluaran yang diharapkan |
| 🔬 | [Analisis Pola](#analisis-pola) | Tabel breakdown & penemuan pola kunci |
| 📏 | [Rules & Constraints](#rules) | Batasan dan syarat wajib pengerjaan |
| 🗺️ | [Navigasi Dokumentasi](#navigasi) | Link ke semua file dokumentasi terkait |

---

<a name="latar-belakang"></a>
## 📖 Latar Belakang

Challenge ini adalah tantangan **pencarian angka** dalam seri **Logic Challenge**. Berbeda dari pattern printing yang membangun pola visual, di sini kita membangun sebuah "mesin pencari" yang mendaki deretan angka untuk menemukan target spesifik: angka palindrome terdekat berikutnya.

Tantangan utamanya: kamu harus **mengkoordinasikan while loop tanpa batas** dengan **manipulasi tipe data** (Number → String → Array → String) untuk membalik dan membandingkan digit.

> [!TIP]
> 💡 **Analogi Dunia Nyata**
>
> Bayangkan kamu sedang menaiki **anak tangga bernomor** secara urut, dan tugasmu adalah mencari anak tangga yang memiliki stempel **angka kembar** (palindrome).
>
> | | Pencarian Biasa 🔍 | Pencarian Palindrome 🔢 |
> |---|---|---|
> | 📏 Cara kerja | Tahu target pasti (misal: cari tangga 50) | Tidak tahu di tangga ke berapa palindrome muncul |
> | 🔢 Langkah | Langsung lompat ke target | Harus naik satu per satu sambil mengecek |
> | 🛑 Kapan berhenti | Sampai di nomor target | Sampai menemukan angka yang sama jika dibalik |
> | 🧠 Tipe loop | `for` loop (batas pasti) | `while` loop (batas tidak pasti) |

### 💡 Jadi, Apa Tantangannya?

Soal ini membutuhkan dua kemampuan inti:
1. **Perulangan tanpa batas pasti** — karena kita tidak tahu di hitungan ke berapa palindrome akan ditemukan.
2. **Manipulasi tipe data** — karena JavaScript tidak punya method bawaan untuk membalik angka secara langsung. Kita harus mengubahnya ke string dulu.

---

<a name="deskripsi-soal"></a>
## 📝 Deskripsi Soal

Buatlah sebuah fungsi bernama **`angkaPalindrome`** yang menerima satu parameter angka (`num`), lalu mengembalikan angka palindrome terdekat yang **lebih besar** dari `num`.

```javascript
// Template soal yang diberikan
// Angka palindrome = angka yang dibaca dari depan dan belakang hasilnya sama.
// Contoh angka palindrome: 8, 11, 121, 1001, 12321
function angkaPalindrome(num) {
  // code here
}
```

Angka palindrome yang dicari harus memenuhi syarat:
- Nilainya **lebih besar** dari input `num` (bukan sama dengan).
- Merupakan angka palindrome **pertama** yang ditemukan setelah `num`.

---

<a name="input-output"></a>
## 📥 Input & Output

### ➡️ Input

| Parameter | Tipe Data | Keterangan |
|-----------|:---------:|------------|
| `num` | `Number` | Angka awal titik mulai pencarian. Palindrome yang dicari harus **lebih besar** dari angka ini. |

### ⬅️ Output

| Tipe Data | Keterangan |
|:---------:|------------|
| `Number` | Angka palindrome pertama yang ditemukan setelah `num`. |

### 🧪 Contoh Eksekusi

**Input:** `angkaPalindrome(117)`

```
Proses pencarian:
  118 → dibalik → 811 → ❌ beda
  119 → dibalik → 911 → ❌ beda
  120 → dibalik → 021 → ❌ beda
  121 → dibalik → 121 → ✅ SAMA!

Expected Output: 121
```

**Input:** `angkaPalindrome(8)`

```
Proses pencarian:
  9 → dibalik → 9 → ✅ SAMA!

Expected Output: 9
(⚠️ Meskipun 8 sendiri palindrome, kita WAJIB mulai dari 9)
```

> [!NOTE]
> 📌 **Perhatikan kasus `8`!** Angka 8 sudah merupakan palindrome, tapi function tidak boleh mengembalikan `8`. Harus mencari palindrome **selanjutnya** yaitu `9`. Ini adalah jebakan logika utama di challenge ini.

---

<a name="analisis-pola"></a>
## 🔬 Analisis Pola (Tabel Breakdown & Penemuan Logika)

Ini adalah **inti dari seluruh logika** challenge ini. Sebelum menulis satu baris kode pun, kita harus **menemukan polanya** terlebih dahulu.

### 1. Tabel Breakdown Proses (input: `117`)

| Iterasi | Angka Saat Ini | Dibalik Jadi | Sama? | Tindakan |
|:-------:|:--------------:|:------------:|:-----:|:---------|
| 1 | `118` | `811` | ❌ | Tambah 1 |
| 2 | `119` | `911` | ❌ | Tambah 1 |
| 3 | `120` | `021` | ❌ | Tambah 1 |
| 4 | `121` | `121` | ✅ | **Return `121`** |

### 2. Penemuan Pola Jarak Antar Palindrome

| Dari | Ke | Jarak | Prediksi Mudah? |
|:----:|:--:|:-----:|:---------------:|
| `8` | `9` | 1 | ❌ Tidak bisa ditebak |
| `11` | `22` | 11 | ❌ Tidak bisa ditebak |
| `121` | `131` | 10 | ❌ Tidak bisa ditebak |
| `1001` | `1111` | 110 | ❌ Tidak bisa ditebak |

> 📌 *Jarak antar palindrome sangat tidak beraturan. Inilah alasan mengapa kita tidak bisa menggunakan `for` loop dengan batas pasti — kita harus mendaki satu per satu.*

### 3. Pola Logika yang Ditemukan

```
🚶 Langkah 1  → Maju satu langkah dari input (num + 1)
🔄 Langkah 2  → Balik angka saat ini (ubah ke string → pecah → balik → gabung)
🔍 Langkah 3  → Bandingkan: angka asli == angka dibalik?
🛑 Langkah 4  → Jika SAMA → return. Jika BEDA → kembali ke langkah 2 dengan num + 1
```

> [!IMPORTANT]
> 🔑 **Insight Kunci:** Langkah 1 adalah **kunci penyelesaian Gotcha**. Dengan selalu memulai dari `num + 1` (bukan `num`), kita otomatis menghindari jebakan input yang sudah palindrome. Tidak perlu pengecekan `if` tambahan di awal.

---

<a name="rules"></a>
## 📏 Rules & Constraints

Berikut adalah batasan wajib yang harus dipenuhi dalam pengerjaan challenge ini:

| # | Aturan | Status |
|---|--------|:------:|
| 1 | ✅ Harus menggunakan **while loop** (perulangan tanpa batas pasti) | Wajib |
| 2 | ✅ Harus melakukan **konversi tipe data** (Number → String) untuk membalik digit | Wajib |
| 3 | ✅ Fungsi mengembalikan (`return`) tipe **Number**, bukan String | Wajib |
| 4 | ✅ Jika input sudah palindrome, **harus skip** dan cari selanjutnya | Wajib |

> [!CAUTION]
> 🚨 **Jangan gunakan `if` di awal untuk cek palindrome input!** Pendekatan terbersih adalah langsung mulai dari `num + 1`. Jika kamu menambahkan `if(isPalindrome(num)) return num` di awal, fungsi akan gagal pada input seperti `8` — ia akan langsung mengembalikan `8` padahal jawaban yang benar adalah `9`.

---

<a name="navigasi"></a>

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| — | [README](../README.md) | [02 — Alur Berpikir](./02-problem-solving-approach_alur-berpikir.md) |
