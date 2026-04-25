# 🔁 V2 — Looping + Whitelist — Solusi Looping Whitelist

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Looping%20|%20String%20Manipulation-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V2-purple?style=for-the-badge)

---

## 📑 Daftar Isi

- 💻 [Kode Lengkap](#kode)
- 🔍 [Penjelasan Baris per Baris](#penjelasan)
- 🧠 [Konsep Kunci](#konsep)
- 🎞️ [Simulasi Langkah demi Langkah](#simulasi)
- 💡 [Insight Penting](#insight)
- ⚖️ [Evaluasi Versi Ini](#evaluasi)

---

<a name="kode"></a>
## 💻 Kode Lengkap

Pendekatan ini menggunakan **looping manual** dengan sebuah daftar karakter yang diizinkan (*whitelist*). Setiap karakter dicek satu per satu — jika ada di whitelist, simpan; jika tidak, abaikan.

### Versi Kamu

```js
const hapusSimbol = (str) => {
  let result = '';

  const alphabet =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  for (const char of str) {
    if (alphabet.includes(char)) {
      result += char;
    }
  }

  return result;
};
```

### Versi Mentor (Lebih Ringkas)

```js
function hapusSimbol(str) {
  let result = '';
  const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789';

  for (const char of str) {
    if (allowed.includes(char.toLowerCase())) {
      result += char;
    }
  }

  return result;
}
```

> ✅ Kedua versi menghasilkan output yang identik. Perbedaannya: versi mentor menggunakan `.toLowerCase()` saat pengecekan sehingga variabel `allowed` hanya perlu berisi huruf kecil — lebih pendek dan lebih efisien untuk ditulis.

### Versi Mentor (Functional — One-Liner)

```js
function hapusSimbol(str) {
  const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789';

  return str
    .split('')                                          // Ubah string jadi array karakter
    .filter(char => allowed.includes(char.toLowerCase())) // Saring yang diizinkan
    .join('');                                          // Gabungkan kembali jadi string
}
```

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```js
let result = '';
```
📦 Inisialisasi variabel penampung. Kita akan mengumpulkan karakter-karakter yang lolos seleksi ke dalam variabel ini, satu per satu.

---

```js
const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789';
```
📋 Ini adalah **whitelist** — daftar semua karakter yang "diizinkan" untuk masuk ke hasil akhir. Tekniknya: daripada mendaftar semua karakter yang *dilarang* (yang bisa sangat banyak), kita cukup definisikan yang *diizinkan* saja.

---

```js
for (const char of str) {
```
🔁 Loop `for...of` mengiterasi setiap karakter dalam string `str` satu per satu. Variabel `char` akan berisi karakter saat ini di setiap iterasi.

---

```js
if (allowed.includes(char.toLowerCase())) {
```
🔎 Di sinilah seleksi terjadi:
- `.toLowerCase()` mengubah karakter saat ini ke huruf kecil **hanya untuk pengecekan** (bukan mengubah karakter aslinya).
- `.includes()` mengecek apakah karakter (versi kecilnya) ada di dalam string `allowed`.
- Jika `'A'.toLowerCase()` = `'a'` → dan `'a'` ada di `allowed` → maka `'A'` boleh masuk!

---

```js
result += char;
```
📥 Jika karakter lolos seleksi, tambahkan ke `result`. Perhatikan: kita menambahkan `char` (asli), bukan `char.toLowerCase()` — sehingga huruf besar tetap terjaga di output.

---

```js
return result;
```
📤 Kembalikan string bersih yang sudah terkumpul dari semua karakter yang lolos seleksi.

---

<a name="konsep"></a>
## 🧠 Konsep Kunci

### Konsep Whitelist vs Blacklist

Ada dua cara mendekati masalah pemfilteran:

| Pendekatan | Cara | Contoh |
|------------|------|--------|
| **Whitelist** | Definisikan yang DIIZINKAN | Simpan `a-z`, `0-9` saja |
| **Blacklist** | Definisikan yang DILARANG | Hapus `@`, `#`, `!`, dst. |

Untuk challenge ini, **whitelist lebih efisien** karena:
- Karakter yang diizinkan jumlahnya terbatas (62 karakter: 26+26+10).
- Karakter yang dilarang bisa tak terbatas (simbol, emoji, karakter asing, dll.).

> 💡 **Analogi:** Whitelist seperti "tamu undangan" di acara — lebih mudah mendaftar 62 tamu yang boleh masuk daripada mendaftar semua orang yang tidak boleh.

### Kenapa `.toLowerCase()` Hanya untuk Pengecekan?

```js
if (allowed.includes(char.toLowerCase())) {
  result += char;  // ← Tambahkan char asli, bukan char.toLowerCase()!
}
```

Jika kita menulis `result += char.toLowerCase()`, maka input `'ABC'` akan menghasilkan `'abc'` — huruf besarnya hilang! Kita melakukan konversi lowercase hanya sebagai "kunci" untuk membuka pintu, bukan untuk mengubah karakter yang masuk.

---

<a name="simulasi"></a>
## 🎞️ Simulasi Langkah demi Langkah

Menggunakan input: `'devel0p3r s3j@@ati'`

```
📊 Tracing Eksekusi:

  allowed = 'abcdefghijklmnopqrstuvwxyz0123456789'
  result  = '' (awalnya kosong)

  Iterasi per karakter:
  ┌─────┬─────┬────────────┬──────────────────────┬────────────────────┐
  │ Idx │ Chr │ toLower()  │ Ada di allowed?       │ result             │
  ├─────┼─────┼────────────┼──────────────────────┼────────────────────┤
  │  0  │ 'd' │ 'd'        │ ✅ Ya                 │ "d"                │
  │  1  │ 'e' │ 'e'        │ ✅ Ya                 │ "de"               │
  │  2  │ 'v' │ 'v'        │ ✅ Ya                 │ "dev"              │
  │  3  │ 'e' │ 'e'        │ ✅ Ya                 │ "deve"             │
  │  4  │ 'l' │ 'l'        │ ✅ Ya                 │ "devel"            │
  │  5  │ '0' │ '0'        │ ✅ Ya                 │ "devel0"           │
  │  6  │ 'p' │ 'p'        │ ✅ Ya                 │ "devel0p"          │
  │  7  │ '3' │ '3'        │ ✅ Ya                 │ "devel0p3"         │
  │  8  │ 'r' │ 'r'        │ ✅ Ya                 │ "devel0p3r"        │
  │  9  │ ' ' │ ' '        │ ❌ Tidak (spasi!)      │ "devel0p3r"        │
  │ 10  │ 's' │ 's'        │ ✅ Ya                 │ "devel0p3rs"       │
  │ 11  │ '3' │ '3'        │ ✅ Ya                 │ "devel0p3rs3"      │
  │ 12  │ 'j' │ 'j'        │ ✅ Ya                 │ "devel0p3rs3j"     │
  │ 13  │ '@' │ '@'        │ ❌ Tidak              │ "devel0p3rs3j"     │
  │ 14  │ '@' │ '@'        │ ❌ Tidak              │ "devel0p3rs3j"     │
  │ 15  │ 'a' │ 'a'        │ ✅ Ya                 │ "devel0p3rs3ja"    │
  │ 16  │ 't' │ 't'        │ ✅ Ya                 │ "devel0p3rs3jat"   │
  │ 17  │ 'i' │ 'i'        │ ✅ Ya                 │ "devel0p3rs3jati"  │
  └─────┴─────┴────────────┴──────────────────────┴────────────────────┘

  Output: "devel0p3rs3jati" ✅
```

---

<a name="insight"></a>
## 💡 Insight Penting

> **Mengapa versi ini dianggap paling "human-readable" (mudah dibaca manusia)?**
> Karena alurnya sangat linear dan naratif: "untuk setiap karakter, cek apakah dia diizinkan, kalau iya simpan". Programmer pemula bisa memahaminya tanpa perlu mengenal sintaks khusus seperti Regex atau ASCII.

> **Apakah pendekatan whitelist ini bisa diterapkan untuk kasus lain?**
> Ya! Konsep yang sama digunakan dalam validasi input form, sanitasi data sebelum disimpan ke database, dan pengamanan sistem dari karakter berbahaya (SQL Injection). Ini adalah pola yang sangat umum di dunia backend.

> **Apa kelemahan mendaftar karakter di `allowed` secara manual?**
> Jika suatu saat kita ingin menambahkan karakter baru (misalnya tanda hubung `-` untuk nama seperti "Abdul-Hakim"), kita harus ingat untuk menambahkannya ke string `allowed`. Ini rentan terhadap bug yang sulit dilacak. Regex lebih fleksibel untuk perubahan seperti ini.

---

<a name="evaluasi"></a>
## ⚖️ Evaluasi Versi Ini

| Kelebihan | Kekurangan |
|-----------|------------|
| ✅ Paling mudah dibaca dan dipahami | ⚠️ Lebih panjang dari Regex |
| ✅ Tidak memerlukan pengetahuan Regex | ⚠️ `allowed` harus ditulis manual (62 karakter) |
| ✅ Mudah dimodifikasi logikanya | ⚠️ Lebih lambat untuk string yang sangat panjang |
| ✅ Trick `.toLowerCase()` sangat elegan | ⚠️ Rentan bug jika `allowed` tidak lengkap |

> 💡 **Cocok digunakan ketika** kamu baru belajar JavaScript dan ingin memahami alur program secara eksplisit, atau ketika logika filter perlu tambahan kondisi lain di dalam loop.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 03 — V1 Regex](./03-v1-regex_solusi-regex.md)**
- **📖 [Lanjut ke Part 05 — V3 ASCII charCodeAt →](./05-v3-ascii_solusi-ascii-charCodeAt.md)**
