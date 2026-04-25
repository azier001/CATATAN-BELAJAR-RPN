# 🔢 V3 — ASCII charCodeAt — Solusi ASCII charCodeAt

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-ASCII%20|%20Looping%20|%20String-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V3-purple?style=for-the-badge)

---

## 📑 Daftar Isi

- 💻 [Kode Lengkap](#kode)
- 🔍 [Penjelasan Baris per Baris](#penjelasan)
- 🧠 [Konsep Kunci](#konsep)
- 🎞️ [Simulasi Langkah demi Langkah](#simulasi)
- ⚠️ [Jebakan yang Ditemukan](#jebakan)
- 💡 [Insight Penting](#insight)
- ⚖️ [Evaluasi Versi Ini](#evaluasi)

---

<a name="kode"></a>
## 💻 Kode Lengkap

Pendekatan ini menggunakan **ASCII Code** — angka di balik setiap karakter — untuk menentukan apakah sebuah karakter boleh disimpan atau tidak, tanpa menggunakan Regex maupun daftar whitelist.

### Versi Kamu (Percobaan Pertama — Kurang Lengkap)

```js
const hapusSimbol = (str) => {
  let result = '';

  for (const char of str) {
    const code = char.charCodeAt(0);

    // ❌ Belum ada pengecekan untuk huruf BESAR (A-Z: 65-90)
    if ((code >= 48 && code <= 57) || (code >= 97 && code <= 122)) {
      result += char;
    }
  }

  return result;
};
```

> ⚠️ **Kode ini tidak lolos semua test case!** Input `'123abcDEF'` akan menghasilkan `'123abc'` — huruf besar `DEF` ikut terbuang karena rentang 65–90 belum ditambahkan.

### Versi Kamu (Setelah Perbaikan — Lengkap)

```js
const hapusSimbol = (str) => {
  let result = '';

  for (const char of str) {
    const code = char.charCodeAt(0);

    if (
      (code >= 48 && code <= 57) ||   // Angka: 0-9
      (code >= 97 && code <= 122) ||  // Huruf kecil: a-z
      (code >= 65 && code <= 90)      // Huruf besar: A-Z
    ) {
      result += char;
    }
  }

  return result;
};
```

### Versi Mentor (Deskriptif — Direkomendasikan)

```js
function hapusSimbol(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    // Pisahkan ke variabel agar kondisi if mudah dibaca
    const isNumber = code >= 48 && code <= 57;   // 0-9
    const isUpper  = code >= 65 && code <= 90;   // A-Z
    const isLower  = code >= 97 && code <= 122;  // a-z

    if (isNumber || isUpper || isLower) {
      result += str[i];
    }
  }

  return result;
}
```

### Versi Mentor (Hybrid ASCII + toLowerCase)

```js
function hapusSimbol(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    // Konversi ke lowercase dulu, lalu cek ASCII-nya
    const code = str[i].toLowerCase().charCodeAt(0);

    // Cukup cek 2 rentang saja (angka + huruf kecil)
    if ((code >= 48 && code <= 57) || (code >= 97 && code <= 122)) {
      result += str[i]; // Tambahkan karakter ASLI (bukan yang sudah di-lowercase)
    }
  }

  return result;
}
```

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```js
const code = str.charCodeAt(i);
// atau
const code = char.charCodeAt(0);
```
🔢 Method `.charCodeAt(index)` mengembalikan **angka ASCII** dari karakter pada posisi `index`. Kita menggunakan index `0` karena variabel `char` hanya berisi satu karakter. Ini adalah cara JavaScript "melihat" setiap karakter sebagai angka.

---

```js
const isNumber = code >= 48 && code <= 57;
const isUpper  = code >= 65 && code <= 90;
const isLower  = code >= 97 && code <= 122;
```
📋 Tiga variabel penjelas ini adalah "kunci" dari versi mentor. Daripada menulis `if ((code >= 48 && code <= 57) || (code >= 65 && ...))` yang terlihat seperti "hutan angka", kita beri nama yang bermakna agar siapapun yang membaca langsung paham.

---

```js
if (isNumber || isUpper || isLower) {
  result += str[i];
}
```
✅ Jika salah satu dari tiga kondisi terpenuhi (angka, huruf besar, atau huruf kecil), karakter tersebut lolos seleksi dan ditambahkan ke `result`.

---

<a name="konsep"></a>
## 🧠 Konsep Kunci

### Apa Itu ASCII Code?

**ASCII (American Standard Code for Information Interchange)** adalah standar internasional yang memetakan setiap karakter ke sebuah angka. Ini adalah cara komputer menyimpan dan memproses teks.

```
Peta ASCII yang Relevan:

Angka (0–9)       → Kode 48–57
                     '0'=48, '1'=49, ... '9'=57

Huruf Besar (A–Z)  → Kode 65–90
                     'A'=65, 'B'=66, ... 'Z'=90

Huruf Kecil (a–z)  → Kode 97–122
                     'a'=97, 'b'=98, ... 'z'=122

Simbol & lainnya   → Di luar rentang di atas
                     ' '=32, '@'=64, '#'=35, '!'=33
```

> 💡 **Tips Hafalan:** Huruf kecil selalu 32 angka lebih besar dari huruf besarnya. `'A'=65` → `'a'=65+32=97`. Ini juga cara kerja `.toLowerCase()` di balik layar!

### Kenapa Readable Variable Itu Penting?

```js
// ❌ Versi "Hutan Angka" — sulit dibaca
if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122))

// ✅ Versi Deskriptif — langsung paham
const isNumber = code >= 48 && code <= 57;
const isUpper  = code >= 65 && code <= 90;
const isLower  = code >= 97 && code <= 122;
if (isNumber || isUpper || isLower)
```

Di industri, kode dibaca jauh lebih sering daripada ditulis. Nama variabel yang baik adalah dokumentasi itu sendiri.

---

<a name="simulasi"></a>
## 🎞️ Simulasi Langkah demi Langkah

Menggunakan input: `'1+3-5'`

```
📊 Tracing Eksekusi (Versi Mentor Deskriptif):

  result = '' (awalnya kosong)

  ┌─────┬─────┬──────┬──────────┬─────────┬─────────┬────────┬────────┐
  │ Idx │ Chr │ Code │ isNumber │ isUpper │ isLower │ Lolos? │ result │
  ├─────┼─────┼──────┼──────────┼─────────┼─────────┼────────┼────────┤
  │  0  │ '1' │  49  │ ✅ Ya    │ ❌ Tidak│ ❌ Tidak│  ✅    │ "1"    │
  │  1  │ '+' │  43  │ ❌ Tidak │ ❌ Tidak│ ❌ Tidak│  ❌    │ "1"    │
  │  2  │ '3' │  51  │ ✅ Ya    │ ❌ Tidak│ ❌ Tidak│  ✅    │ "13"   │
  │  3  │ '-' │  45  │ ❌ Tidak │ ❌ Tidak│ ❌ Tidak│  ❌    │ "13"   │
  │  4  │ '5' │  53  │ ✅ Ya    │ ❌ Tidak│ ❌ Tidak│  ✅    │ "135"  │
  └─────┴─────┴──────┴──────────┴─────────┴─────────┴────────┴────────┘

  Output: "135" ✅
```

```
📊 Test Tambahan: Input '123abcDEF'

  '1' → code=49  → isNumber ✅ → simpan  → "1"
  '2' → code=50  → isNumber ✅ → simpan  → "12"
  '3' → code=51  → isNumber ✅ → simpan  → "123"
  'a' → code=97  → isLower  ✅ → simpan  → "123a"
  'b' → code=98  → isLower  ✅ → simpan  → "123ab"
  'c' → code=99  → isLower  ✅ → simpan  → "123abc"
  'D' → code=68  → isUpper  ✅ → simpan  → "123abcD"
  'E' → code=69  → isUpper  ✅ → simpan  → "123abcDE"
  'F' → code=70  → isUpper  ✅ → simpan  → "123abcDEF"

  Output: "123abcDEF" ✅ (Huruf besar tetap dipertahankan!)
```

---

<a name="jebakan"></a>
## ⚠️ Jebakan yang Ditemukan

### Jebakan — Lupa Rentang Huruf Besar (65–90)

Ini adalah kesalahan yang saya buat di percobaan pertama:

```js
// ❌ KURANG LENGKAP — Hanya ada rentang angka dan huruf kecil
if ((code >= 48 && code <= 57) || (code >= 97 && code <= 122)) {
  result += char;
}

// Test: hapusSimbol('123abcDEF')
// Output Salah: "123abc"   ← huruf 'D', 'E', 'F' ikut terbuang!
// Output Benar: "123abcDEF"
```

Logikanya memang sudah benar, tapi tidak lengkap. Rentang ASCII untuk huruf besar `A-Z` (65–90) terlewat.

```js
// ✅ LENGKAP — Ada ketiga rentang
if (
  (code >= 48 && code <= 57) ||   // Angka: 0-9
  (code >= 97 && code <= 122) ||  // Huruf kecil: a-z
  (code >= 65 && code <= 90)      // Huruf besar: A-Z ← DITAMBAHKAN!
) {
  result += char;
}
```

> 💡 **Pelajaran:** Selalu buat test case yang mencakup huruf besar saat mengerjakan challenge string. Ini adalah edge case yang sering terlewat!

---

<a name="insight"></a>
## 💡 Insight Penting

> **Mengapa pendekatan ASCII ini penting untuk dipelajari meski jarang dipakai langsung?**
> Memahami ASCII berarti memahami bagaimana komputer menyimpan teks di level paling dasar. Pengetahuan ini sangat berguna saat bekerja dengan encoding, kriptografi sederhana (Caesar cipher), atau saat perlu memanipulasi karakter tanpa library.

> **Apa hubungan antara `.toLowerCase()` dan ASCII?**
> Setiap huruf besar memiliki kode ASCII yang 32 lebih kecil dari versi kecilnya. `'A'=65`, `'a'=97` (selisih 32). `.toLowerCase()` bekerja dengan cara menambahkan 32 ke kode ASCII huruf besar — ini bukan sihir, melainkan aritmatika sederhana!

> **Kapan kode ASCII lebih berguna daripada Regex atau whitelist?**
> Saat bekerja di lingkungan yang tidak mendukung Regex (beberapa bahasa pemrograman low-level), atau saat perlu performa maksimal dalam memproses teks dalam jumlah sangat besar (jutaan karakter per detik). Pendekatan ASCII memberikan kontrol paling granular.

---

<a name="evaluasi"></a>
## ⚖️ Evaluasi Versi Ini

| Kelebihan | Kekurangan |
|-----------|------------|
| ✅ Melatih pemahaman low-level komputer | ⚠️ Perlu hafal angka ASCII (48, 65, 97, dll.) |
| ✅ Tidak bergantung pada fitur bahasa khusus | ⚠️ Lebih verbose (lebih banyak baris kode) |
| ✅ Performa sangat baik untuk string panjang | ⚠️ Mudah lupa salah satu rentang (seperti huruf besar) |
| ✅ Variabel deskriptif membuat kode lebih jelas | ⚠️ Kurang fleksibel jika ingin menambah karakter diizinkan |

> 💡 **Cocok digunakan ketika** kamu ingin memahami cara kerja karakter di level sistem, atau bekerja di lingkungan yang membutuhkan kontrol penuh tanpa bergantung pada Regex engine.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 04 — V2 Looping + Whitelist](./04-v2-looping-includes_solusi-looping-whitelist.md)**
- **📖 [Lanjut ke Part 06 — Insight Regex Shorthand →](./06-insight-regex-shorthand_insight-karakter-kelas-regex.md)**
