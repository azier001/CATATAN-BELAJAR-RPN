# 🧠 Problem Solving Approach — Alur Berpikir

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Regex%20|%20String%20Manipulation-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

---

## 📑 Daftar Isi

- 🔍 [Langkah 1 — Pahami Masalah](#langkah-1)
- 🎯 [Langkah 2 — Identifikasi Karakter](#langkah-2)
- 🗺️ [Langkah 3 — Pilih Strategi Solusi](#langkah-3)
- 🔗 [Langkah 4 — Gabungkan Menjadi Pseudocode](#langkah-4)
- ❌ [Kesalahan Pertama Saya](#kesalahan)

---

<a name="langkah-1"></a>
## 🔍 Langkah 1 — Pahami Masalah

Sebelum menulis kode, terjemahkan dulu masalahnya ke bahasa sederhana:

> *"Saya punya sebuah string kotor yang campur aduk antara huruf, angka, dan simbol. Tugas saya adalah menyaringnya dan hanya mengembalikan huruf dan angka saja."*

3 pertanyaan kunci:
- **Karakter apa saja yang boleh lolos?** → Hanya huruf (a-z, A-Z) dan angka (0-9). Spasi dan simbol apapun harus dibuang.
- **Bagaimana cara memeriksa setiap karakter?** → Bisa lewat Regex, lewat daftar karakter yang diizinkan (whitelist), atau lewat rentang angka ASCII.
- **Apa yang terjadi jika input kosong atau semua karakter adalah simbol?** → Kembalikan string kosong `''`.

---

<a name="langkah-2"></a>
## 🎯 Langkah 2 — Identifikasi Karakter

Langkah pertama adalah memahami "peta" karakter yang kita hadapi. Setiap karakter dalam sebuah string bisa dikelompokkan menjadi:

| Kelompok | Contoh | Boleh Lewat? |
|----------|--------|:---:|
| Huruf kecil | `a`, `b`, `z` | ✅ |
| Huruf besar | `A`, `B`, `Z` | ✅ |
| Angka | `0`, `5`, `9` | ✅ |
| Simbol | `@`, `#`, `!`, `%`, `+`, `-` | ❌ |
| Spasi | ` ` (space) | ❌ |
| Tanda baca | `.`, `,`, `?`, `~` | ❌ |

```
Input: "ma@#k!an~"

'm' → Huruf ✅   '@' → Simbol ❌   'k' → Huruf ✅
'a' → Huruf ✅   '#' → Simbol ❌   'a' → Huruf ✅
                 '!' → Simbol ❌   'n' → Huruf ✅
                                   '~' → Simbol ❌

Yang lolos: m, a, k, a, n → "makan" ✅
```

> 💡 **Insight:** Lebih mudah mendefinisikan karakter yang DIIZINKAN daripada mencoba mendaftar semua simbol yang perlu dihapus — karena simbol bisa sangat banyak dan tidak terbatas!

---

<a name="langkah-3"></a>
## 🗺️ Langkah 3 — Pilih Strategi Solusi

Dari identifikasi di atas, kita bisa memilih satu dari tiga strategi:

```
Strategi Pemfilteran Karakter
  │
  ├── 1. REGEX (Blacklist)
  │      Hapus semua yang BUKAN huruf & angka
  │      → str.replace(/[^a-z0-9]/gi, '')
  │
  ├── 2. LOOPING + WHITELIST
  │      Tampung daftar karakter yang diizinkan
  │      Cek satu per satu → simpan jika ada di daftar
  │      → for...of + .includes()
  │
  └── 3. LOOPING + ASCII CODE
         Setiap karakter punya angka di baliknya (ASCII)
         Cek apakah angkanya masuk rentang yang valid
         → charCodeAt(0) + pengecekan rentang
```

| Strategi | Cara Kerja | Cocok Untuk |
|----------|-----------|-------------|
| **Regex** | Satu pola untuk semua | Production code, efisiensi |
| **Looping + Whitelist** | Daftar karakter yang diizinkan | Pemula, mudah dibaca |
| **Looping + ASCII** | Rentang angka (48–57, 65–90, 97–122) | Memahami logika low-level |

---

<a name="langkah-4"></a>
## 🔗 Langkah 4 — Gabungkan Menjadi Pseudocode

### Pseudocode Regex (Direkomendasikan):

```
FUNCTION hapusSimbol(str):
  1. Gunakan .replace() dengan pola Regex
  2. Pola: cari semua karakter yang BUKAN huruf dan angka
  3. Ganti setiap karakter yang ditemukan dengan string kosong ''
  4. Return hasilnya
```

### Pseudocode Looping:

```
FUNCTION hapusSimbol(str):
  1. Buat variabel result = '' (kosong)
  2. Buat daftar karakter yang diizinkan (whitelist)
  3. Untuk setiap karakter (char) dalam str:
       a. Periksa apakah char ada dalam whitelist
       b. Jika YA  → tambahkan char ke result
       c. Jika TIDAK → abaikan (lewati)
  4. Return result
```

Dari pseudocode ini, kita bisa membuat kode JavaScript yang sesungguhnya. Masing-masing dibahas di **Part 3 sampai Part 5**.

---

<a name="kesalahan"></a>
## ❌ Kesalahan Pertama Saya

Saat pertama kali mencoba, saya langsung menggunakan Regex tapi salah menempatkan simbol `^`:

```javascript
// ❌ Kode yang salah
function hapusSimbol(str) {
  return str.replace(/^[a-zA-Z0-9]/g, '');
}
```

**Masalahnya ada 2:**

1. **`^` di luar kurung siku** artinya "anchor awal string" (cari hanya di posisi paling pertama), bukan negasi. Jadi yang terhapus hanyalah karakter huruf/angka *pertama* saja.
2. **Logikanya terbalik** — kode di atas menghapus karakter yang *diizinkan*, bukan yang *dilarang*.

```javascript
// ✅ Perbaikannya: pindahkan ^ ke DALAM kurung siku
function hapusSimbol(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
}
// [^...] di dalam kurung siku = NEGASI = "kecuali..."
```

Detail lengkap dibahas di:
**📖 [Part 3 — Solusi V1 Regex →](./03-v1-regex_solusi-regex.md)**

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 01 — Challenge Overview](./01-challenge-overview_gambaran-challenge.md)**
- **📖 [Lanjut ke Part 03 — Solusi V1 Regex →](./03-v1-regex_solusi-regex.md)**
