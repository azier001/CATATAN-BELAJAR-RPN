# 📋 Challenge Overview — Gambaran Challenge

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Regex%20|%20String%20Manipulation-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

---

## 📑 Daftar Isi

- 🧩 [Deskripsi Challenge](#deskripsi)
- 📏 [Aturan Challenge](#aturan)
- 📤 [Contoh Input & Output](#contoh)
- 🧠 [Pemahaman Awal](#pemahaman)

---

<a name="deskripsi"></a>
## 🧩 Deskripsi Challenge

Bayangkan kamu seorang petugas keamanan di sebuah gerbang. Tugasmu adalah hanya mengizinkan orang-orang yang membawa kartu identitas resmi (huruf dan angka) untuk masuk. Siapapun yang membawa benda aneh — tanda seru, tanda persen, simbol bintang, atau bahkan yang datang tanpa identitas (spasi) — harus ditolak dan tidak boleh masuk.

Secara teknis, fungsi `hapusSimbol` (nama profesionalnya: `removeNonAlphanumeric`) menerima satu parameter berupa `string`. Fungsi ini akan memeriksa setiap karakter dalam string tersebut, dan hanya mengembalikan karakter yang termasuk **alphanumeric** (huruf a-z, A-Z, dan angka 0-9). Semua karakter lain — simbol, tanda baca, spasi, dan sebagainya — akan dibuang, menghasilkan string baru yang bersih.

> ⚠️ **Catatan penting:** Spasi (` `) juga termasuk karakter yang dihapus. Karakter yang diperbolehkan hanyalah huruf dan angka murni.

---

<a name="aturan"></a>
## 📏 Aturan Challenge

| Aturan | Keterangan |
|--------|------------|
| 📦 Format Input | Sebuah string (`str`) yang bisa berisi kombinasi huruf, angka, simbol, dan spasi |
| 📤 Format Output | String baru yang hanya berisi karakter alphanumeric (huruf + angka) |
| ✅ Karakter Diizinkan | Huruf kecil `a-z`, huruf besar `A-Z`, dan angka `0-9` |
| ❌ Karakter Dibuang | Simbol (`@`, `#`, `!`, `%`, `+`, `-`, dll.), spasi, dan karakter khusus lainnya |
| 📭 Input Kosong | Mengembalikan string kosong `''` |
| 🔠 Case Sensitive | Huruf besar tetap dipertahankan sebagai huruf besar |

---

<a name="contoh"></a>
## 📤 Contoh Input & Output

```js
console.log(hapusSimbol('test%$4aa'));
// Output: 'test4aa'
```

```js
console.log(hapusSimbol('devel0p3r s3j@@ati'));
// Output: 'devel0p3rs3jati'
```

```js
console.log(hapusSimbol('ma@#k!an~'));
// Output: 'makan'
```

```js
console.log(hapusSimbol('1+3-5*2=100'));
// Output: '1352100'
```

```js
// Edge cases
console.log(hapusSimbol(''));       // ''
console.log(hapusSimbol('@@@###')); // ''
console.log(hapusSimbol('123abcDEF')); // '123abcDEF'
```

---

### Kenapa `hapusSimbol('devel0p3r s3j@@ati')` hasilnya `'devel0p3rs3jati'`?

```
Input: "devel0p3r s3j@@ati"

'd' → huruf ✅ → simpan
'e' → huruf ✅ → simpan
'v' → huruf ✅ → simpan
'e' → huruf ✅ → simpan
'l' → huruf ✅ → simpan
'0' → angka ✅ → simpan
'p' → huruf ✅ → simpan
'3' → angka ✅ → simpan
'r' → huruf ✅ → simpan
' ' → spasi ❌ → buang
's' → huruf ✅ → simpan
'3' → angka ✅ → simpan
'j' → huruf ✅ → simpan
'@' → simbol ❌ → buang
'@' → simbol ❌ → buang
'a' → huruf ✅ → simpan
't' → huruf ✅ → simpan
'i' → huruf ✅ → simpan

Output: "devel0p3rs3jati" ✅
```

> 💡 **Perhatikan:** Spasi di antara `r` dan `s` ikut dibuang! Inilah kenapa kedua kata langsung tersambung tanpa jeda di output.

---

<a name="pemahaman"></a>
## 🧠 Pemahaman Awal

Sebelum menulis kode, ada 3 pertanyaan kunci yang harus dijawab:

**1. Apa saja karakter yang "diizinkan" untuk tetap ada?**
> Hanya huruf kecil (a-z), huruf besar (A-Z), dan angka (0-9). Semua selain itu harus dihapus.

**2. Bagaimana cara kita "memeriksa" setiap karakter?**
> Ada tiga pendekatan: menggunakan **Regex** (pola ekspresi), **Looping** dengan daftar karakter yang diizinkan (whitelist), atau mengecek rentang angka **ASCII Code** di balik setiap karakter.

**3. Apa yang harus dikembalikan jika string kosong atau semua karakter adalah simbol?**
> Kembalikan string kosong `''`. Tidak ada yang perlu disimpan, maka hasilnya kosong.

---

### Diagram Alur Logika

```
hapusSimbol(str)
  │
  ├── str kosong ('')? → return ''                          ← EDGE CASE
  │
  └── str berisi karakter
        │
        ├── STEP 1: Iterasi setiap karakter dalam str
        │
        ├── STEP 2: Periksa apakah karakter adalah alphanumeric
        │             ├── YA  → simpan ke result
        │             └── TIDAK → buang (abaikan)
        │
        └── STEP 3: Return result (string bersih)
```

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 02 — Problem Solving Approach →](./02-problem-solving-approach_alur-berpikir.md)**
