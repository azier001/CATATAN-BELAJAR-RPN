# 💡 Insight: Regex Character Classes — Kelas Karakter dalam Regex

![Topic](https://img.shields.io/badge/Topic-Mental%20Model%20|%20Regex-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

---

## 📑 Daftar Isi

- 🔍 [Latar Belakang: Mengapa Ini Penting?](#pembuka)
- 🔤 [\w dan \W — Word Character](#word)
- 🔢 [\d dan \D — Digit Character](#digit)
- 📐 [\s dan \S — Space Character](#space)
- ⚠️ [Jebakan Tersembunyi: Underscore](#jebakan)
- 🎯 [Kesimpulan: Kapan Pakai Shorthand vs Eksplisit?](#kesimpulan)

---

<a name="pembuka"></a>
## 🔍 Latar Belakang: Mengapa Ini Penting?

Dari sesi mentoring challenge `hapusSimbol`, saya mencoba menggunakan pola Regex `/[^\w]/g` sebagai alternatif dari `/[^a-z0-9]/gi`. Di sinilah muncul pertanyaan menarik: *apakah keduanya benar-benar sama?*

Jawabannya: **tidak sepenuhnya**. Dan perbedaan kecil inilah yang bisa menyebabkan bug tersembunyi yang sulit ditemukan jika kamu tidak memahami apa yang "tersimpan" di balik simbol-simbol shorthand Regex.

Di JavaScript (dan hampir semua bahasa pemrograman modern), Regex memiliki **Character Class Shorthand** — simbol pendek yang mewakili sekumpulan karakter. Ada tiga pasang utama yang wajib diketahui:
- `\w` / `\W` (Word)
- `\d` / `\D` (Digit)  
- `\s` / `\S` (Space)

> **Pola penting:** Huruf **kecil** = "pilih yang ini", huruf **besar** = "pilih yang BUKAN ini (negasi)". Ini berlaku konsisten di ketiga pasang.

Mari kita lihat masing-masing secara mendalam.

---

<a name="word"></a>
## 🔤 `\w` dan `\W` — Word Character

### Definisi

`\w` adalah shorthand untuk `[a-zA-Z0-9_]` — semua huruf, angka, **dan underscore**.

```
\w  ≡  [a-zA-Z0-9_]   → "Pilih huruf, angka, atau underscore"
\W  ≡  [^a-zA-Z0-9_]  → "Pilih semua KECUALI huruf, angka, underscore"
```

### Tabel Ekuivalen

| Shorthand | Ekuivalen | Cocok Dengan |
|-----------|-----------|-------------|
| `\w` | `[a-zA-Z0-9_]` | `a`, `Z`, `5`, `_` |
| `\W` | `[^a-zA-Z0-9_]` | `@`, `#`, ` `, `!`, `+` |

### Contoh Kasus Ideal

*"Digunakan saat ingin mengekstrak kata-kata dari kalimat, termasuk kata dengan underscore seperti nama variabel."*

```js
// Ekstrak semua "kata" (termasuk yang pakai underscore)
"hello_world @user #tag".match(/\w+/g);
// → ["hello_world", "user", "tag"]

// Hapus semua yang bukan "kata"
"hello_world @user".replace(/\W/g, '');
// → "hello_worlduser"  ← underscore (_) DIPERTAHANKAN!
```

**Ciri-ciri masalah yang cocok dengan `\w`:**
1. **Nama variabel atau identifier:** Cocok karena identifier biasanya mengandung underscore.
2. **Parsing kata dari kalimat:** Ingin mengambil kata-kata utuh dari teks.
3. **Username validation:** Banyak sistem mengizinkan underscore dalam username.

---

<a name="digit"></a>
## 🔢 `\d` dan `\D` — Digit Character

### Definisi

`\d` adalah shorthand untuk `[0-9]` — hanya angka.

```
\d  ≡  [0-9]   → "Pilih karakter angka"
\D  ≡  [^0-9]  → "Pilih semua KECUALI angka"
```

### Tabel Ekuivalen

| Shorthand | Ekuivalen | Cocok Dengan |
|-----------|-----------|-------------|
| `\d` | `[0-9]` | `0`, `3`, `9` |
| `\D` | `[^0-9]` | `a`, `@`, ` `, `!` |

### Contoh Kasus Ideal

*"Digunakan saat ingin mengekstrak atau memvalidasi angka saja dari string campuran."*

```js
// Ekstrak semua angka dari string
"Harga: Rp12.500,00".match(/\d+/g);
// → ["12", "500", "00"]

// Hapus semua karakter yang bukan angka
"Rp 1.200.000".replace(/\D/g, '');
// → "1200000"  (berguna untuk parsing harga!)
```

**Ciri-ciri masalah yang cocok dengan `\d`:**
1. **Validasi input numerik:** Pastikan string hanya berisi angka.
2. **Ekstrak angka dari format tertentu:** Nomor telepon, harga, tanggal.
3. **Hitung jumlah digit:** Berapa banyak angka dalam string?

---

<a name="space"></a>
## 📐 `\s` dan `\S` — Space Character

### Definisi

`\s` adalah shorthand untuk `[ \t\r\n\f\v]` — semua jenis whitespace (spasi, tab, newline, dll.).

```
\s  ≡  [ \t\r\n\f\v]   → "Pilih karakter whitespace"
\S  ≡  [^ \t\r\n\f\v]  → "Pilih semua KECUALI whitespace"
```

### Tabel Ekuivalen

| Shorthand | Ekuivalen | Cocok Dengan |
|-----------|-----------|-------------|
| `\s` | `[ \t\r\n\f\v]` | spasi, tab, enter, newline |
| `\S` | `[^ \t\r\n\f\v]` | semua karakter yang bukan whitespace |

### Contoh Kasus Ideal

*"Digunakan saat ingin membersihkan atau memisahkan string berdasarkan whitespace."*

```js
// Hapus semua whitespace berlebih (spasi, tab, newline)
"  hello   world  ".replace(/\s+/g, ' ').trim();
// → "hello world"

// Pisahkan kata berdasarkan whitespace
"nama  umur\ttinggi".split(/\s+/);
// → ["nama", "umur", "tinggi"]
```

**Ciri-ciri masalah yang cocok dengan `\s`:**
1. **Normalisasi spasi:** Ubah multiple spasi menjadi satu spasi.
2. **Trim & clean input:** Bersihkan whitespace dari input pengguna.
3. **Tokenisasi:** Pisahkan string menjadi kata-kata berdasarkan whitespace.

---

<a name="jebakan"></a>
## ⚠️ Jebakan Tersembunyi: Underscore

Ini adalah jebakan yang paling sering terjadi saat menggunakan `\W` untuk challenge `hapusSimbol`:

```js
const str = "hello_world";

// ❌ Menggunakan \W — underscore TIDAK terhapus!
str.replace(/\W/g, '');
// → "hello_world"  ← Underscore masih ada!

// ✅ Menggunakan [^a-z0-9] — underscore IKUT terhapus
str.replace(/[^a-z0-9]/gi, '');
// → "helloworld"  ← Bersih total
```

### Kenapa ini bisa jadi masalah?

```
\W  =  "Semua yang BUKAN \w"
\w  =  [a-zA-Z0-9_]   ← underscore ada di sini!

Maka \W tidak mencocokkan underscore (_)
karena underscore dianggap bagian dari "word character"
```

### Kapan `\W` tetap boleh dipakai?

Jika test case dan requirement-mu **tidak mempermasalahkan underscore** (misalnya tidak ada input dengan `_`), maka `/\W/g` aman digunakan dan lebih pendek. Tapi selalu pahami konsekuensinya!

```js
// Aman jika underscore boleh tetap ada (misal: nama file, username)
"file_name.txt".replace(/\W/g, '');
// → "file_nametxt"  (underscore dipertahankan, titik dihapus)

// Gunakan [\W_] jika underscore juga harus dihapus
"file_name.txt".replace(/[\W_]/g, '');
// → "filenametxt"  (bersih total)
```

---

<a name="kesimpulan"></a>
## 🎯 Kesimpulan: Kapan Pakai Shorthand vs Eksplisit?

### Flowchart Pengambilan Keputusan

```
Mau filter karakter dengan Regex?
  │
  ├── Hanya butuh ANGKA saja?
  │     └── ✅ Pakai \d atau [0-9]
  │
  ├── Butuh hapus WHITESPACE (spasi, tab, newline)?
  │     └── ✅ Pakai \s
  │
  ├── Butuh karakter "kata" (huruf + angka + underscore)?
  │     └── ✅ Pakai \w
  │
  ├── Butuh BERSIH TOTAL (huruf + angka SAJA, tanpa underscore)?
  │     └── ✅ Pakai [^a-z0-9]/gi  ← Challenge hapusSimbol!
  │
  └── Butuh hapus simbol tapi PERTAHANKAN underscore?
        └── ✅ Pakai \W atau [^a-zA-Z0-9]
```

### Tabel Ringkasan Master

| Shorthand | Ekuivalen Eksplisit | Catatan Penting |
|-----------|---------------------|-----------------|
| `\w` | `[a-zA-Z0-9_]` | ⚠️ Termasuk underscore! |
| `\W` | `[^a-zA-Z0-9_]` | ⚠️ Tidak menghapus underscore! |
| `\d` | `[0-9]` | ✅ Murni angka saja |
| `\D` | `[^0-9]` | ✅ Semua selain angka |
| `\s` | `[ \t\r\n\f\v]` | ✅ Semua jenis whitespace |
| `\S` | `[^ \t\r\n\f\v]` | ✅ Semua selain whitespace |

> **Tips Hafalan:** 🧠
> Bayangkan shorthand huruf besar sebagai tombol "REVERSE" — dia membalik seleksi dari versi huruf kecilnya.
> - `\d` pilih angka → `\D` pilih yang **bukan** angka
> - `\w` pilih kata → `\W` pilih yang **bukan** kata
> - `\s` pilih spasi → `\S` pilih yang **bukan** spasi

> **Refleksi Penting:**
> Regex shorthand memang membuat kode lebih pendek, tetapi "lebih pendek" tidak selalu berarti "lebih benar". Sebelum menggunakan shorthand, selalu tanyakan: *"Apakah shorthand ini mencakup TEPAT karakter yang saya inginkan, tidak lebih dan tidak kurang?"*. Untuk challenge `hapusSimbol`, pola eksplisit `/[^a-z0-9]/gi` tetap menjadi pilihan terbaik karena presisi dan tidak ada ambiguitas soal underscore.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 05 — V3 ASCII charCodeAt](./05-v3-ascii_solusi-ascii-charCodeAt.md)**
- **📖 [Lanjut ke Part 07 — Perbandingan Semua Versi →](./07-perbandingan-semua-versi_all-versions-comparison.md)**
