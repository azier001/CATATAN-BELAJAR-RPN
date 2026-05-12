# 🎯 Versi 2 — Single Loop + Array.fill()

### ✨ _Satu loop untuk semuanya: manfaatkan Array sebagai "kanvas baris" yang ditembaki bintang._

> 🎯 **Tujuan:** Memahami teknik membangun setiap baris pola X menggunakan Array sebagai penampung sementara, menghilangkan kebutuhan nested loop, dan memanfaatkan built-in method `.fill()` dan `.join()`.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Profil Versi](#profil) | Ringkasan kapan & kenapa pakai versi ini |
| 💡 | [Konsep Inti: Array sebagai Kanvas](#konsep) | Visualisasi "menembak bintang ke target" |
| 🔮 | [Metode yang Digunakan](#metode) | Cara kerja `Array()`, `.fill()`, dan `.join()` |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + panduan penamaan |
| 💻 | [Kode Lengkap](#kode) | Solusi final siap pakai |
| 🔍 | [Bedah Kode](#bedah) | Penjelasan setiap bagian baris per baris |
| 🧮 | [Simulasi Langkah](#simulasi) | Trace eksekusi dengan angka konkret |

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | Single Loop + Array.fill() |
| 🔢 **Jumlah Loop** | 1 (loop tunggal) |
| 🧠 **Konsep Utama** | Array sebagai "kanvas baris", indeks langsung |
| 📖 **Readability** | ⭐⭐⭐⭐ (cukup mudah dipahami) |
| ⚡ **Kompleksitas** | O(n²)* |
| 🎯 **Cocok Untuk** | Yang suka Array methods, kode ringkas |

> *\*Tetap O(n²) karena `.fill()` dan `.join()` masing-masing melakukan iterasi internal sebanyak `num` per baris.*

> [!TIP]
> 🏆 **Kapan pilih versi ini?**
> Gunakan Versi 2 saat kamu ingin **menghindari logika `if/else` di dalam nested loop** dan lebih suka pendekatan "siapkan kanvas, lalu tembak ke target". Versi ini juga bagus saat kamu sudah familiar dengan Array methods di JavaScript.

---

<a name="konsep"></a>
## 💡 Konsep Inti: Array sebagai "Kanvas Baris"

Ide utama versi ini sangat berbeda dari Versi 1:

**Versi 1:** Kita mengecek *setiap kotak* satu per satu. *"Apakah kotak ini bintang? Kalau bukan, isi spasi."*

**Versi 2:** Kita langsung menyiapkan *satu baris kosong*, lalu "menembakkan" bintang ke *posisi target* yang sudah kita ketahui.

### Visualisasi untuk `row = 0` (baris pertama) pada `num = 5`:

```text
Langkah 1 — Buat kanvas kosong (Array berisi spasi):

  Indeks:  [ 0 ][ 1 ][ 2 ][ 3 ][ 4 ]
  Isi:     [ ' '][ ' '][ ' '][ ' '][ ' ']

Langkah 2 — Tembak bintang ke diagonal utama (indeks = row = 0):

  Indeks:  [ 0 ][ 1 ][ 2 ][ 3 ][ 4 ]
  Isi:     [ '*'][ ' '][ ' '][ ' '][ ' ']
              ↑
           Target!

Langkah 3 — Tembak bintang ke diagonal terbalik (indeks = num-1-row = 4):

  Indeks:  [ 0 ][ 1 ][ 2 ][ 3 ][ 4 ]
  Isi:     [ '*'][ ' '][ ' '][ ' '][ '*']
              ↑                       ↑
           Target 1              Target 2

Langkah 4 — Lebur jadi string: '*   *'
```

> 💡 **Kenapa cara ini berhasil tanpa `if/else`?**
> Karena kita tidak perlu mengecek "apakah posisi ini bintang atau bukan." Kita **sudah tahu** di mana bintangnya (indeks `row` dan `num-1-row`), jadi kita langsung tembak ke sana. Sisanya otomatis tetap spasi karena kita sudah `.fill(' ')` di awal!

---

<a name="metode"></a>
## 🔮 Metode yang Digunakan

### 🧮 `Array(num)` — Membuat Array Kosong

Membuat sebuah Array dengan panjang `num` slot. Slot-slotnya masih **kosong** (*empty*) dan belum bisa digunakan.

```javascript
const arr = Array(5);
// Hasil: [ <5 empty items> ]
```

### 🧮 `.fill(' ')` — Mengisi Semua Slot

Method `.fill()` mengganti **seluruh** elemen Array dengan nilai yang sama. Kita gunakan untuk mengisi semua slot dengan karakter spasi.

```javascript
const arr = Array(5).fill(' ');
// Hasil: [ ' ', ' ', ' ', ' ', ' ' ]
```

> [!NOTE]
> 📌 **Kenapa harus `.fill()` dulu?**
> `Array(5)` hanya membuat "ruangan kosong" — elemennya belum ter-*assign* nilai. Jika langsung kita `.join('')`, hasilnya akan aneh (`',,,,`). `.fill(' ')` memastikan setiap slot sudah diisi karakter spasi yang valid.

### 🧮 `.join('')` — Melebur Array Jadi String

Method `.join()` menggabungkan semua elemen Array menjadi satu string. Parameter di dalamnya menentukan pemisah antar elemen.

```javascript
['*', ' ', ' ', ' ', '*'].join('');
// Hasil: '*   *'  (tanpa koma!)

['*', ' ', ' ', ' ', '*'].join(',');
// Hasil: '*,,, ,*' (ada koma — BUKAN yang kita mau)
```

> [!IMPORTANT]
> 🔑 **Gunakan `join('')` (string kosong), bukan `join()`!**
> Jika kita panggil `.join()` tanpa parameter, JavaScript default-nya menggunakan koma sebagai pemisah. Kita harus secara eksplisit menyebutkan `''` (string kosong tanpa isi) agar elemen-elemennya menyatu tanpa tambahan karakter apapun.

---

<a name="blueprint"></a>
## 🗺️ Blueprint & Kamus Variabel

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|:--------------:|:-----------------:|--------|
| Penampung Akhir | `pattern` | `result`, `res` | Kita menyusun pola visual, bukan hasil kalkulasi |
| Loop Utama | `row` | `i`, `x`, `r` | Tetap mewakili "baris ke-berapa" |
| Array Baris | `baris` atau `line` | `arr`, `a`, `temp` | Deskriptif, menjelaskan fungsinya sebagai kanvas satu baris |

### 🗺️ Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Siapkan kanvas → tembak bintang → lebur)

const polaX = (num) => {
  let pattern = '';                              // [KANVAS] — penampung seluruh pola

  for (let row = 0; row < num; row++) {          // [LOOP UTAMA] → baris ke-berapa
    let baris = Array(num).fill(' ');            //   [KANVAS BARIS] → array berisi spasi
    // [TEMBAK 1] → bintang di diagonal utama
    // [TEMBAK 2] → bintang di diagonal terbalik
    pattern += baris.join('') + '\n';            //   [LEBUR + PINDAH BARIS]
  }

  return pattern;                                // [KEMBALIKAN] → hasilkan string pola lengkap
};
```

---

<a name="kode"></a>
## 💻 Kode Lengkap

```javascript
const polaX = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    // 1. Buat array baris berisi spasi semua
    let baris = Array(num).fill(' ');

    // 2. Tembak bintang ke diagonal utama
    baris[row] = '*';

    // 3. Tembak bintang ke diagonal terbalik
    baris[num - 1 - row] = '*';

    // 4. Lebur array jadi string + pindah baris
    pattern += baris.join('') + '\n';
  }

  return pattern;
};

// Uji coba
console.log(polaX(5));
/*
*   *
 * *
  *
 * *
*   *
*/
```

---

<a name="bedah"></a>
## 🔍 Bedah Kode (Baris per Baris)

### 1️⃣ Membuat Kanvas Baris `[KANVAS BARIS]`

```javascript
let baris = Array(num).fill(' ');
```

Setiap iterasi loop, kita membuat **array baru** sepanjang `num` yang seluruh elemennya diisi spasi.

> *(Kenapa dibuat ulang setiap iterasi? Karena setiap baris pola X memiliki posisi bintang yang berbeda-beda. Kita butuh "lembaran bersih" di setiap baris agar bintang dari baris sebelumnya tidak ikut terbawa.)*

> *(Kenapa `let` bukan `const`? Sebenarnya di sini `const` juga bisa dipakai, karena kita mengubah **isi** array-nya (`baris[row] = '*'`), bukan mengubah referensi variabel `baris` itu sendiri. Keduanya benar.)*

---

### 2️⃣ Menembak Diagonal Utama `[TEMBAK 1]`

```javascript
baris[row] = '*';
```

Ganti elemen array di indeks `row` menjadi bintang. Karena rumus diagonal utama adalah `row === col`, maka posisi bintangnya selalu di indeks yang **sama** dengan nomor baris saat ini.

> *(Contoh: Saat `row = 0` → `baris[0] = '*'` (bintang di paling kiri). Saat `row = 2` → `baris[2] = '*'` (bintang di tengah). Saat `row = 4` → `baris[4] = '*'` (bintang di paling kanan). Garis diagonal `\` terbentuk!)*

---

### 3️⃣ Menembak Diagonal Terbalik `[TEMBAK 2]`

```javascript
baris[num - 1 - row] = '*';
```

Ganti elemen array di indeks `num - 1 - row` menjadi bintang. Ini adalah rumus diagonal terbalik yang sudah kita temukan di Fase 1.

> *(Kenapa `num - 1 - row` dan bukan `num - row`? Karena indeks array dimulai dari 0. Jika `num = 5`, indeks terakhir adalah `4` (bukan `5`). Maka saat `row = 0`: `5 - 1 - 0 = 4` (bintang di paling kanan). Saat `row = 1`: `5 - 1 - 1 = 3` (bintang geser 1 langkah ke kiri). Garis diagonal `/` terbentuk!)*

> [!NOTE]
> 📌 **Titik Tengah Menumpuk:** Saat `row = 2` (baris tengah), kedua perintah mengarah ke indeks yang **sama**: `baris[2] = '*'` dan `baris[5-1-2] = baris[2] = '*'`. Bintang hanya "ditimpa" oleh bintang — tidak ada masalah atau duplikasi!

---

### 4️⃣ Melebur Array ke String `[LEBUR + PINDAH BARIS]`

```javascript
pattern += baris.join('') + '\n';
```

Setelah kedua bintang sudah ditembakkan, kita melebur array menjadi string tanpa pemisah, lalu tambahkan karakter enter.

> *(Contoh: `['*', ' ', ' ', ' ', '*'].join('')` → `'*   *'`. Lalu ditambah `'\n'` menjadi `'*   *\n'`. String inilah yang menyambung ke `pattern`.)*

---

<a name="simulasi"></a>
## 🧮 Simulasi Langkah (Trace `num = 5`)

| `row` | Array setelah `.fill(' ')` | Setelah `baris[row]='*'` | Setelah `baris[num-1-row]='*'` | Hasil `.join('')` |
|:---:|:---|:---|:---|:---|
| 0 | `[' ',' ',' ',' ',' ']` | `['*',' ',' ',' ',' ']` | `['*',' ',' ',' ','*']` | `'*   *'` |
| 1 | `[' ',' ',' ',' ',' ']` | `[' ','*',' ',' ',' ']` | `[' ','*',' ','*',' ']` | `' * * '` |
| 2 | `[' ',' ',' ',' ',' ']` | `[' ',' ','*',' ',' ']` | `[' ',' ','*',' ',' ']` | `'  *  '` |
| 3 | `[' ',' ',' ',' ',' ']` | `[' ',' ',' ','*',' ']` | `[' ','*',' ','*',' ']` | `' * * '` |
| 4 | `[' ',' ',' ',' ',' ']` | `[' ',' ',' ',' ','*']` | `['*',' ',' ',' ','*']` | `'*   *'` |

**Output akhir saat di-print:**
```
*   *
 * *
  *
 * *
*   *
```

> [!NOTE]
> 📌 **Perhatikan `row = 2`:** Setelah `baris[2] = '*'`, array menjadi `[' ',' ','*',' ',' ']`. Lalu `baris[num-1-2] = baris[2] = '*'` — menimpa bintang yang sudah ada dengan bintang lagi. Hasilnya tetap sama: hanya ada 1 bintang di tengah. Inilah mengapa titik pusat huruf X selalu tepat!

---

## ⚖️ Perbandingan dengan Versi 1

| Aspek | Versi 1 (Nested Loop) | Versi 2 (Array.fill) |
|:------|:-----|:-----|
| **Cara berpikir** | Cek setiap kotak: "bintang atau spasi?" | Siapkan kanvas kosong, tembak bintang ke target |
| **Perlu `if/else`?** | ✅ Ya | ❌ Tidak |
| **Jumlah loop eksplisit** | 2 (nested) | 1 |
| **Method bawaan** | Tidak ada | `Array()`, `.fill()`, `.join()` |
| **Keterbacaan** | Sangat jelas logikanya | Lebih ringkas, tapi perlu paham Array |
| **Kapan pakai** | Ujian, pemula, code review | Kode ringkas, familiar Array methods |

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [03 — Version 1: Nested Loop](./03-version-1-nested-loop.md) | [README](../README.md) | [05 — Version 3: Ultra Efficient](./05-version-3-ultra-efficient.md) |
