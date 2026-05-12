# 🧠 Problem Solving Approach — Persegi Bolong (Hollow Square)

### ✨ _Dari analisis pola hingga solusi dasar — proses berpikir yang terdokumentasi._

> 🎯 **Tujuan:** Mendokumentasikan proses berpikir (mental model) dalam menemukan logika inti challenge, membangun kerangka kode, dan menyusun solusi secara bertahap (step-by-step).

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔬 | [Fase 1: Temukan Rumusnya Dulu](#fase-1) | Analisis pola sebelum menyentuh kode |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kosong + panduan penamaan |
| 🏗️ | [Fase 2: Bangun Kodenya Bertahap](#fase-2) | Step 1 → Step 2 → Step 3 → Step 4 → Solusi lengkap |
| ⚠️ | [Gotchas & Jebakan Umum](#gotchas) | Peringatan penting saat mengerjakan |

---

<a name="fase-1"></a>
## 🔬 Fase 1 — Temukan Rumusnya Dulu (Tanpa Kode!)

> [!IMPORTANT]
> 🧠 **Prinsip Utama:** Jangan langsung menulis kode sebelum kamu bisa menjelaskan logikanya dengan kata-kata. Temukan "hukum alam" dari pola dulu, baru terjemahkan ke kode.

### 🔍 Langkah 1 — Amati Outputnya

Perhatikan output yang diharapkan dari `persegiBolong(5)`:

```text
*****
*   *
*   *
*   *
*****
```

Pertanyaan kunci yang harus dijawab:
1. Berapa ukuran grid-nya? → **5 baris × 5 kolom**.
2. Kapan kita harus mencetak bintang `*`?
3. Kapan kita harus mencetak spasi `' '`?

### 🔍 Langkah 2 — Buat Tabel Koordinat

Kita berikan setiap sel sebuah "alamat" berupa pasangan koordinat `(row, col)`. Mulai dari indeks `0` (*zero-based*).

Contoh grid `5 × 5`:

```text
        Kolom (col)
      - 0   1   2   3   4
  0   | *   *   *   *   *
  1   | *               *     
  2   | *               *
  3   | *               * 
  4   | *   *   *   *   *
```

Kita pecah menjadi tabel koordinat per baris:

| Baris (`row`) | Kolom yang terisi `*` | Keterangan |
|:---:|:---|:---|
| 0 | `(0,0)` `(0,1)` `(0,2)` `(0,3)` `(0,4)` | Baris pertama → **semua kolom terisi** |
| 1 | `(1,0)` dan `(1,4)` | Hanya ujung kiri dan ujung kanan |
| 2 | `(2,0)` dan `(2,4)` | Hanya ujung kiri dan ujung kanan |
| 3 | `(3,0)` dan `(3,4)` | Hanya ujung kiri dan ujung kanan |
| 4 | `(4,0)` `(4,1)` `(4,2)` `(4,3)` `(4,4)` | Baris terakhir → **semua kolom terisi** |

### 💡 Langkah 3 — Temukan Rumusnya

Dari tabel di atas, pola sangat jelas — bintang muncul **jika posisi berada di salah satu dari 4 sisi bingkai**:

```
Tembok Atas   →  row === 0              (baris pertama)
Tembok Bawah  →  row === num - 1        (baris terakhir)
Tembok Kiri   →  col === 0              (kolom pertama)
Tembok Kanan  →  col === num - 1        (kolom terakhir)

Cetak '*' jika SALAH SATU terpenuhi, selain itu cetak ' ' (spasi).
```

> [!TIP]
> 💡 **Kenapa `num - 1` dan bukan `num`?**
>
> Karena kita menggunakan *zero-based index* (dimulai dari 0), maka indeks terakhir bukan `5` melainkan `4` (yaitu `num - 1`).
> Jika `num = 5`, maka baris terakhir ada di indeks `4`, dan kolom terakhir juga di indeks `4`.
>
> Rumus ini berlaku untuk **ukuran grid berapapun**:
> - `num = 3` → batas terakhir = `2`
> - `num = 5` → batas terakhir = `4`
> - `num = 7` → batas terakhir = `6`

---

<a name="blueprint"></a>
## 🗺️ Blueprint & Kamus Variabel

Sebelum menulis kode final, kita rancang "denah" strukturnya terlebih dahulu.

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|:--------------:|:-----------------:|--------|
| Penampung Akhir | `pattern` | `result`, `res`, `str` | Kita menyusun sebuah **pola** visual, bukan hasil perhitungan angka |
| Loop Utama (Baris) | `row` | `i`, `x`, `r` | Secara harfiah mewakili "baris ke-berapa" yang sedang diproses |
| Loop Di Dalam (Kolom) | `col` | `j`, `y`, `c` | Secara harfiah mewakili "kolom ke-berapa", mencegah tertukar dengan `row` |

> [!NOTE]
> 📌 **Kapan `i` dan `j` boleh dipakai?**
> Penggunaan `i` (index) sah untuk loop sederhana yang hanya menghitung angka. Namun untuk kasus **spasial** (mewakili posisi pada grid/papan), gunakan nama deskriptif seperti `row` dan `col` agar kode langsung terbaca maknanya — terutama saat nested loop, di mana otak bisa sangat mudah tertukar mana yang bergerak ke bawah dan mana yang ke samping.

### 🗺️ Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Grid 2D — cetak bintang hanya di 4 sisi bingkai)

function persegiBolong(num) {
  let pattern = '';                              // [KANVAS] — tempat menyusun pola (❌ jangan 'result')

  for (let row = 0; row < num; row++) {          // [LOOP UTAMA] → baris ke-berapa (atas ke bawah)
    for (let col = 0; col < num; col++) {        //   [NESTED LOOP] → kolom ke-berapa (kiri ke kanan)
      // [LOGIKA INTI] → cek apakah posisi berada di sisi atas/bawah/kiri/kanan
      // Jika cocok → cetak '*', jika tidak → cetak ' '
    }
    pattern += '\n';                             //   [PINDAH BARIS] → setelah satu baris selesai
  }

  return pattern;                                // [KEMBALIKAN] → hasilkan string pola lengkap
}
```

---

<a name="fase-2"></a>
## 🏗️ Fase 2 — Bangun Kodenya Secara Bertahap

> [!IMPORTANT]
> 🧱 **Prinsip "Bangun Lantai per Lantai":** Jangan langsung menulis kode final! Kita mulai dari struktur paling dasar, lalu menambahkan fitur satu per satu. Setiap step harus menghasilkan output yang bisa diverifikasi.

### ⚙️ Step 1 — Bangun Grid Penuh (Nested Loop Tanpa Kondisi)

Langkah pertama: buat persegi **penuh** dulu — cetak bintang di semua posisi tanpa `if/else`. Tujuannya untuk memastikan nested loop sudah benar menghasilkan grid `num × num`.

```javascript
const persegiBolong = (num) => {
  let pattern = '';

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      pattern += '*';                  // ← Cetak bintang di SEMUA posisi
    }
    pattern += '\n';
  }

  return pattern;
};
```

**Output:** Kotak bintang penuh berukuran 5×5.
```text
*****
*****
*****
*****
*****
```

> *(Kenapa mulai dari sini: Sebelum "melubangi" bagian tengah, kita pastikan dulu bahwa nested loop kita sudah benar menghasilkan grid berukuran `num × num`. Kalau grid-nya saja sudah salah, logika boundary pasti ikut salah.)*

---

### ⚙️ Step 2 — Melubangi Bagian Tengah dengan `if / else`

Sekarang kita ganti logika "cetak bintang di mana-mana" menjadi "cetak bintang hanya di koordinat tepi." Gunakan rumus boundary yang sudah ditemukan di Fase 1.

```javascript
const persegiBolong = (num) => {
  let pattern = '';

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i === 0 || i === num - 1 || j === 0 || j === num - 1) {
        pattern += '*';                // → di sisi bingkai: cetak bintang
      } else {
        pattern += ' ';                // → di dalam: cetak spasi (WAJIB!)
      }
    }
    pattern += '\n';
  }

  return pattern;
};
```

**Output:** Persegi bolong yang sudah terbentuk sempurna! ✅
```text
*****
*   *
*   *
*   *
*****
```

> [!WARNING]
> ⚠️ **Jangan lupakan blok `else`!**
>
> Tanpa `else { pattern += ' '; }`, bintang sisi kiri dan kanan akan menempel tanpa jarak.
>
> **Tanpa else (SALAH):**
> ```text
> *****
> **
> **
> **
> *****
> ```
>
> Spasi **bukan hiasan** — ia adalah karakter yang mempertahankan lebar persegi agar tetap `num` karakter per baris!

---

### ⚙️ Step 3 — Refactor: `if / else` → Ternary Operator

Versi `if / else` di atas sudah benar. Namun, karena kondisinya hanya menghasilkan **dua pilihan nilai** (`'*'` atau `' '`), kita bisa menyederhanakannya menggunakan **Ternary Operator**.

**Pola Ternary:**
```
kondisi ? 'nilai_jika_benar' : 'nilai_jika_salah'
```

**Sebelum (if / else) — 5 baris:**
```javascript
if (i === 0 || i === num - 1 || j === 0 || j === num - 1) {
  pattern += '*';
} else {
  pattern += ' ';
}
```

**Sesudah (Ternary) — 1 baris:**
```javascript
pattern += i === 0 || i === num - 1 || j === 0 || j === num - 1 ? '*' : ' ';
```

> [!TIP]
> 💡 **Kenapa Ternary lebih idiomatik di sini?**
> Kita tidak mengulang penulisan `pattern +=` dua kali. Ternary murni bertindak sebagai **"penghasil nilai"** (value generator), dan `pattern +=` cukup ditulis **satu kali** di depan. Pembaca langsung tahu: *"baris ini tujuannya menambahkan SATU karakter ke `pattern`."*

---

### ✅ Solusi Lengkap (Versi 1 — Nested Loop + Ternary)

```javascript
function persegiBolong(num) {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
      pattern +=
        row === 0 || row === num - 1 || col === 0 || col === num - 1 ? '*' : ' ';
    }
    pattern += '\n';
  }

  return pattern;
}

// Uji coba
console.log(persegiBolong(5));
/*
*****
*   *
*   *
*   *
*****
*/
```

---

<a name="gotchas"></a>
## ⚠️ Gotchas & Jebakan Umum

> ⚠️ **Jebakan #1: Lupa mencetak spasi (tanpa blok `else`).**
>
> Ini adalah **kesalahan paling sering** di challenge ini. Tanpa spasi, bintang menempel satu sama lain.
>
> Bayangkan saat mesin mengeksekusi **Baris ke-1** (baris tengah):
> - `col = 0` → Cocok `col === 0` → Cetak `*`
> - `col = 1` → Tidak cocok → *(tanpa else, kode diam saja)*
> - `col = 2` → Tidak cocok → *(diam saja)*
> - `col = 3` → Tidak cocok → *(diam saja)*
> - `col = 4` → Cocok `col === num - 1` → Cetak `*`
>
> Hasilnya: `**` (dua bintang menempel). Padahal yang kita inginkan: `*   *` (ada 3 spasi di tengah).
>
> **Solusi:** Selalu sertakan `else { pattern += ' '; }` untuk mengisi ruang kosong.

---

> ⚠️ **Jebakan #2: Menulis `num` bukan `num - 1` di kondisi boundary.**
>
> ```javascript
> // ❌ SALAH
> if (row === num || col === num) { ... }
>
> // ✅ BENAR
> if (row === num - 1 || col === num - 1) { ... }
> ```
>
> Jika `num = 5`, maka baris/kolom terakhir ada di indeks `4` (yaitu `num - 1`), bukan `5` (yaitu `num`).
> Jika salah menulis `num`, bintang batas bawah dan kanan tidak akan pernah muncul karena loop hanya berjalan dari `0` sampai `4`.

---

> ⚠️ **Jebakan #3: Meletakkan `pattern += '\n'` di dalam loop kolom.**
>
> Jika kamu meletakkan pindah baris (`\n`) di dalam loop `col`, maka setiap karakter akan diikuti baris baru. Hasilnya: setiap karakter berdiri sendiri di satu baris!
> ```
> * (baris baru)
> * (baris baru)
> * (baris baru)
> * (baris baru)
> * (baris baru)
> ...
> ```
> **Solusi:** `pattern += '\n'` harus berada di luar loop `col`, tapi **di dalam** loop `row`.

---

> ⚠️ **Jebakan #4: Menggunakan `||` padahal bermaksud `&&`.**
>
> Kondisi boundary menggunakan `||` (OR) karena bintang dicetak jika posisi berada di **salah satu** sisi. Jika kamu salah pakai `&&` (AND), maka bintang hanya muncul di posisi yang memenuhi **semua** kondisi sekaligus — dan tidak ada posisi yang bisa memenuhi keempat syarat secara bersamaan. Hasilnya: persegi kosong tanpa bintang sama sekali!

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [01 — Challenge Overview](./01-challenge-overview.md) | [README](../README.md) | [03 — Version 1: Nested Loop](./03-version-1-nested-loop.md) |
