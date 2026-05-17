# ⚖️ Character Comparison — Perbandingan Karakter XO

### ✨ _Menghitung dan membandingkan jumlah karakter dalam string menggunakan 3 pendekatan berbeda_

> 🎯 **Tujuan:** Memahami cara membandingkan jumlah kemunculan karakter tertentu (`x` dan `o`) dalam sebuah string, mulai dari pendekatan fundamental (`for` loop) hingga teknik modern (`split`, `for...of`).

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Problem Statement](#problem-statement) | Apa yang diminta challenge ini |
| 🔍 | [Visualisasi & Analisis Pola](#visualisasi) | Tabel breakdown pola sebelum coding |
| 🧠 | [Algoritma Tahan Lupa](#algoritma) | Langkah-langkah logika dengan penjelasan "Kenapa" |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + panduan penamaan variabel |
| 👣 | [Pendekatan Bertahap](#pendekatan-bertahap) | Membangun kode step-by-step dari nol |
| 🔄 | [Evolusi Solusi](#evolusi-solusi) | 3 versi solusi + tabel perbandingan |
| 🏷️ | [Naming Convention](#naming-convention) | Tabel best practice penamaan variabel |
| ⚠️ | [Gotchas & Jebakan](#gotchas) | Peringatan penting agar tidak terjebak |
| 🧪 | [Test Cases](#test-cases) | Semua test case dan hasilnya |
| 📝 | [Catatan Akhir](#catatan-akhir) | Konteks dokumentasi |

---

<a name="problem-statement"></a>

## 📋 Problem Statement

> Diberikan sebuah function `xo(str)` yang menerima satu parameter berupa **string**. Function akan me-return `true` jika jumlah karakter `x` **sama dengan** jumlah karakter `o`, dan `false` jika tidak.

```
Input  → String yang berisi kombinasi huruf 'x', 'o', dan karakter lain
Output → true / false (Boolean)
```

**Contoh:**

| Input | Jumlah `x` | Jumlah `o` | Output |
|:---:|:---:|:---:|:---:|
| `'xoxoxo'` | 3 | 3 | `true` |
| `'oxooxo'` | 2 | 4 | `false` |
| `'xxxooo'` | 3 | 3 | `true` |

---

<a name="visualisasi"></a>

## 🔍 Pilar 1 — Visualisasi & Analisis Pola

> [!TIP]
> 💡 **Analogi "Dua Keranjang"**
>
> Bayangkan kamu punya dua keranjang kosong:
> - 🧺 **Keranjang X** — untuk menampung setiap huruf `x` yang ditemukan
> - 🧺 **Keranjang O** — untuk menampung setiap huruf `o` yang ditemukan
>
> Kamu membaca string dari kiri ke kanan, satu huruf per satu huruf, lalu memasukkannya ke keranjang yang sesuai.

### 📊 Tabel Breakdown — String `'xoxoxo'`

| Karakter Ke- | Huruf | Aksi | 🧺 Keranjang X | 🧺 Keranjang O |
|:---:|:---:|---|:---:|:---:|
| 1 | `x` | Masuk Keranjang X | **1** | 0 |
| 2 | `o` | Masuk Keranjang O | 1 | **1** |
| 3 | `x` | Masuk Keranjang X | **2** | 1 |
| 4 | `o` | Masuk Keranjang O | 2 | **2** |
| 5 | `x` | Masuk Keranjang X | **3** | 2 |
| 6 | `o` | Masuk Keranjang O | 3 | **3** |

### 🎯 Rumus / Logika yang Ditemukan

```
1. Telusuri string dari awal sampai akhir, satu karakter per satu karakter.
2. Jika karakter = 'x' → tambah penghitung X.
3. Jika karakter = 'o' → tambah penghitung O.
4. Setelah selesai → bandingkan: apakah penghitung X === penghitung O?
```

> 📌 **Kesimpulan:** Inti dari challenge ini adalah **menghitung** lalu **membandingkan**. Tidak ada rumus matematika yang rumit — cukup iterasi + kondisi + perbandingan.

---

<a name="algoritma"></a>

## 🧠 Pilar 2 — Algoritma Tahan Lupa

Setiap langkah menjelaskan **"Kenapa"** di balik logikanya, disertai contoh angka konkret.

### Langkah-Langkah Algoritma

> 1. **Siapkan Dua Penghitung `[DEKLARASI VARIABEL]`**
>    - Buat `xCount = 0` dan `oCount = 0`. *(Kenapa mulai dari 0? Karena sebelum kita mulai membaca string, kita belum menemukan satupun huruf `x` atau `o`. Nol adalah titik awal alami.)*

> 2. **Telusuri String Huruf per Huruf `[FOR LOOP]`** (Iterasi `i` dari `0` sampai `str.length - 1`):
>    - *(Kenapa dari 0? Karena indeks string di JavaScript dimulai dari 0. Contoh: `'xoxo'[0]` = `'x'`, `'xoxo'[3]` = `'o'`.)*

> 3. **Cek dan Hitung `[IF CONDITION]`**:
>    - Jika `str[i] === 'x'` → tambah `xCount` sebesar 1. *(Kenapa `===` bukan `==`? Karena `===` membandingkan tipe data sekaligus, lebih aman dari bug tersembunyi.)*
>    - Jika `str[i] === 'o'` → tambah `oCount` sebesar 1. *(Contoh: saat iterasi ke-4 pada `'xoxoxo'`, `str[3]` = `'o'`, maka `oCount` berubah dari 1 ke 2.)*

> 4. **Bandingkan Hasil Akhir `[RETURN]`**:
>    - Kembalikan `xCount === oCount`. *(Kenapa langsung return perbandingan? Karena `===` sendiri sudah menghasilkan `true`/`false` — tidak perlu `if/else` lagi. Contoh: `3 === 3` → `true`.)*

---

<a name="blueprint"></a>

## 🗺️ Pilar 3 — Blueprint & Kamus Variabel

### A. Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|---|---|---|---|
| Penghitung huruf X | `xCount` | `x`, `c1`, `a` | Jelas fungsinya: menghitung (*count*) huruf `x` |
| Penghitung huruf O | `oCount` | `o`, `c2`, `b` | Konsisten dengan pasangannya, spesifik untuk `o` |
| Iterator perulangan | `i` | `x`, `indeks` | Standar universal programmer untuk `for` loop |
| Parameter input | `str` | `s`, `input` | Singkatan umum untuk *string* yang sudah dipahami luas |

### B. Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Dua Keranjang)

function xo(str) {
  let xCount = 0;                            // [KERANJANG X] → penghitung huruf x
  let oCount = 0;                            // [KERANJANG O] → penghitung huruf o

  for (let i = 0; i < str.length; i++) {     // [PENELUSURAN] → baca huruf satu-satu
    if (str[i] === 'x') { /* +1 ke xCount */ }  //   [SORTIR] → masuk keranjang X
    if (str[i] === 'o') { /* +1 ke oCount */ }  //   [SORTIR] → masuk keranjang O
  }

  return xCount === oCount;                  // [TIMBANGAN] → bandingkan isi keranjang
}
```

---

<a name="pendekatan-bertahap"></a>

## 👣 Pilar 4 — Pendekatan Bertahap (Step-by-Step)

Kode dibangun secara bertahap, **bukan langsung kode final**.

---

**Step 1.** 🏗️ **Buat kerangka dasar — deklarasi variabel + return.**

```javascript
function xo(str) {
  let xCount = 0;
  let oCount = 0;

  return xCount === oCount;
}
```

> 📌 Ini belum melakukan apapun, tapi kerangkanya sudah benar: dua penghitung dan satu perbandingan di akhir.

---

**Step 2.** 🔁 **Tambahkan `for` loop untuk menelusuri string.**

```javascript
function xo(str) {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    // belum ada logika penghitungan
  }

  return xCount === oCount;
}
```

> 📌 Sekarang kita sudah bisa "berjalan" melewati setiap huruf di string.

---

**Step 3.** ✅ **Tambahkan kondisi `if` di dalam loop — kode final Versi 1!**

```javascript
function xo(str) {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') xCount++;
    if (str[i] === 'o') oCount++;
  }

  return xCount === oCount;
}
```

> 📌 Kode sudah lengkap! Setiap kali menemukan `'x'`, keranjang X bertambah. Setiap menemukan `'o'`, keranjang O bertambah. Di akhir, kedua keranjang dibandingkan.

---

<a name="evolusi-solusi"></a>

## 🔄 Pilar 5 — Evolusi Solusi (3 Versi)

### Versi 1: Two Counters — `for` Loop (Fundamental)

```javascript
function xo(str) {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') xCount++;
    if (str[i] === 'o') oCount++;
  }

  return xCount === oCount;
}
```

> 🧠 **Mental Model:** Dua keranjang terpisah — satu untuk `x`, satu untuk `o`. Isi masing-masing dihitung, lalu dibandingkan di akhir.

---

### Versi 2: Built-in Method — `split()` (Modern One-liner)

```javascript
function xo(str) {
  return str.split('x').length === str.split('o').length;
}
```

> 🧠 **Mental Model:** Pisau pemotong. `.split('x')` memotong string di setiap huruf `x`. Jumlah potongan = jumlah huruf `x` + 1. Karena kedua sisi sama-sama "+1", perbandingannya tetap valid.
>
> **Contoh konkret:**
> ```
> 'xoxoxo'.split('x') → ['', 'o', 'o', 'o']  → length = 4 (= 3 huruf x + 1)
> 'xoxoxo'.split('o') → ['x', 'x', 'x', '']  → length = 4 (= 3 huruf o + 1)
> 4 === 4 → true ✅
> ```

---

### Versi 3: Single Counter — `for...of` (Tarik Tambang)

```javascript
function xo(str) {
  let counter = 0;

  for (const char of str.toLowerCase()) {
    if (char === 'x') counter++;
    if (char === 'o') counter--;
  }

  return counter === 0;
}
```

> 🧠 **Mental Model:** Permainan tarik tambang. Huruf `x` menarik tali ke kanan (+1), huruf `o` menarik ke kiri (-1). Jika kedua tim kekuatannya imbang, tali kembali ke titik tengah (0).
>
> **Contoh konkret — `'xoxoxo'`:**
> ```
> Mulai:    counter = 0
> 'x' → +1 → counter = 1
> 'o' → -1 → counter = 0
> 'x' → +1 → counter = 1
> 'o' → -1 → counter = 0
> 'x' → +1 → counter = 1
> 'o' → -1 → counter = 0
> Akhir:    counter === 0 → true ✅
> ```

> [!TIP]
> 🏆 **Bonus Versi 3:** Sudah menyertakan `str.toLowerCase()` sehingga anti-jebakan huruf besar (`'Xo'` tetap `true`)!

---

### 📊 Tabel Perbandingan Antar Versi

| Aspek | V1: Two Counters 🟢 | V2: Split 🔵 | V3: Single Counter 🟣 |
|---|:---:|:---:|:---:|
| **Jumlah variabel** | 2 (`xCount`, `oCount`) | 0 | 1 (`counter`) |
| **Jumlah loop** | 1 (manual `for`) | 0 (implicit) | 1 (`for...of`) |
| **Readability** | ⭐⭐⭐⭐⭐ Sangat jelas | ⭐⭐⭐ Perlu paham `split` | ⭐⭐⭐⭐ Jelas setelah paham konsep |
| **Efisiensi** | O(n) — 1x scan | O(n) — 2x scan | O(n) — 1x scan |
| **Case-insensitive** | ❌ Belum | ❌ Belum | ✅ Sudah (`toLowerCase`) |
| **Level** | 🟢 Pemula | 🔵 Menengah | 🟣 Menengah-Lanjut |
| **Best for** | Belajar logika dasar | Kode ringkas & cepat | Interview & clean code |

> [!IMPORTANT]
> 🔔 **Kapan Pakai Versi Mana?**
> - **V1** → Saat belajar pertama kali atau saat menjawab ujian yang membutuhkan kejelasan logika.
> - **V2** → Saat butuh kode paling ringkas dan tidak perlu handle case-sensitivity.
> - **V3** → Saat interview atau proyek nyata — elegan, efisien, dan sudah handle edge case.

---

<a name="naming-convention"></a>

## 🏷️ Pilar 6 — Naming Convention

| Variabel | ❌ Bad (Hindari) | ✅ Good (Rekomendasi) | Alasan |
|---|---|---|---|
| Penghitung huruf X | `x`, `c1`, `a` | `xCount` | Jelas fungsinya: menghitung (*count*) huruf `x` |
| Penghitung huruf O | `o`, `c2`, `b` | `oCount` | Konsisten dengan pasangannya, spesifik |
| Penghitung tunggal (V3) | `c`, `n`, `num` | `counter` | Langsung paham ini adalah penghitung |
| Iterator for loop | `x`, `indeks` | `i` | Standar universal untuk iterasi `for` loop |
| Karakter saat ini (for...of) | `c`, `x` | `char` | Singkatan *character* yang sudah diterima luas |
| Parameter input | `s`, `input` | `str` | Singkatan *string* yang sudah dipahami luas |

> [!TIP]
> 💡 **Best Practice:**
> - Gunakan kata penunjuk fungsi seperti `Count` (jumlah), `Total` (akumulasi), atau awalan `is`/`has` (untuk boolean).
> - `i` **boleh** dipakai untuk iterator `for` loop — ini satu-satunya pengecualian dari aturan "harus deskriptif".
> - Nama variabel yang baik membuat kodemu terbaca layaknya **kalimat bahasa manusia**.

---

<a name="gotchas"></a>

## ⚠️ Pilar 7 — Gotchas & Jebakan Umum

> [!CAUTION]
> 🔴 **Jebakan 1: Case-Sensitive!**
>
> JavaScript membedakan huruf besar dan kecil. `'x'` ≠ `'X'` dan `'o'` ≠ `'O'`.
>
> ```javascript
> // ❌ GAGAL untuk input 'Xo'
> if (str[i] === 'x') xCount++;   // 'X' besar tidak tertangkap!
>
> // ✅ SOLUSI: konversi ke huruf kecil dulu
> let lowerStr = str.toLowerCase();
> // atau langsung di loop: for (const char of str.toLowerCase())
> ```

> [!WARNING]
> 🐛 **Jebakan 2: Membandingkan variabel dengan dirinya sendiri!**
>
> ```javascript
> // ❌ TYPO — selalu return true!
> return xCount === xCount;
>
> // ✅ BENAR — bandingkan X dengan O
> return xCount === oCount;
> ```
> 📌 Ini adalah kesalahan nyata yang terjadi di sesi mentoring ini! Selalu double-check nama variabel di baris `return`.

> [!NOTE]
> 💡 **Jebakan 3: `split()` menghitung potongan, bukan huruf!**
>
> ```javascript
> 'xoxo'.split('x').length  // → 3 (bukan 2!)
> ```
> Jumlah potongan = jumlah karakter pemotong + 1. Tapi karena kedua sisi perbandingan sama-sama "+1", hasilnya tetap valid. Ini HANYA berlaku karena kita **membandingkan**, bukan menghitung jumlah pasti.

---

<a name="test-cases"></a>

## 🧪 Test Cases

```javascript
// TEST CASES
console.log(xo('xoxoxo'));    // true  → x:3, o:3
console.log(xo('oxooxo'));    // false → x:2, o:4
console.log(xo('oxo'));       // false → x:1, o:2
console.log(xo('xxxooo'));    // true  → x:3, o:3
console.log(xo('xoxooxxo')); // true  → x:4, o:4
```

### Verifikasi Manual — `'xoxooxxo'`

```
Huruf:   x  o  x  o  o  x  x  o
xCount:  1  1  2  2  2  3  4  4
oCount:  0  1  1  2  3  3  3  4

Akhir: xCount (4) === oCount (4) → true ✅
```

---

<a name="file-terkait"></a>

## 📎 File Terkait

| File | Deskripsi |
|------|-----------|
| [Dokumentasi-Function-XO-3-Alternatif-Solusi.md](./Dokumentasi-Function-XO-3-Alternatif-Solusi.md) | Panduan mendalam tentang eksplorasi 3 versi solusi: Two Counters, Built-in Split, dan Single Counter (Tarik Tambang) |

---

<a name="catatan-akhir"></a>

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **17 Mei 2026** berdasarkan sesi mentoring challenge `xo` menggunakan metode 5 Fase Mentoring Terstruktur. Fokus utama: **penemuan logika bertahap**, **handling case-sensitivity**, dan **evolusi algoritma** dari perulangan dasar hingga *single counter* dengan `for...of`.

*Dibuat dengan ❤️ untuk pembelajaran pribadi*
