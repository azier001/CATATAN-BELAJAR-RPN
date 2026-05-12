# 🧠 Problem Solving Approach — Pola X (X Pattern)

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

Perhatikan output yang diharapkan dari `polaX(5)`:

```text
*   *
 * *
  *
 * *
*   *
```

Pertanyaan kunci yang harus dijawab:
1. Berapa ukuran grid-nya? → **5 baris × 5 kolom**.
2. Kapan kita harus mencetak bintang `*`?
3. Kapan kita harus mencetak spasi `' '`?

### 🔍 Langkah 2 — Buat Tabel Koordinat

Kita berikan setiap sel sebuah "alamat" berupa pasangan koordinat `(row, col)`. Mulai dari indeks `0` (*zero-based*).

Contoh grid `5 × 5`:

| Baris (`row`) | Bintang 1 (`col`) | Bintang 2 (`col`) | `row === col`? | `row + col` |
|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | 4 | ✅ `0 === 0` | 0 + 4 = **4** |
| 1 | 1 | 3 | ✅ `1 === 1` | 1 + 3 = **4** |
| 2 | 2 | *(menumpuk)* | ✅ `2 === 2` | 2 + 2 = **4** |
| 3 | 3 | 1 | ✅ `3 === 3` | 3 + 1 = **4** |
| 4 | 4 | 0 | ✅ `4 === 4` | 4 + 0 = **4** |

### 💡 Langkah 3 — Temukan Rumusnya

Dari tabel di atas, polanya sangat jelas:

```
Diagonal Utama  (\) →  row === col          (indeks baris dan kolom selalu SAMA)
Diagonal Terbalik (/) →  row + col === num - 1  (jumlah keduanya selalu KONSTAN = 4)
```

> [!TIP]
> 💡 **Kenapa `num - 1` dan bukan `num`?**
>
> Karena kita menggunakan *zero-based index* (dimulai dari 0), maka indeks terakhir bukan `5` melainkan `4` (yaitu `num - 1`).
> Jika kita hitung: baris paling atas (`row = 0`) + kolom paling kanan (`col = 4`) = `0 + 4 = 4 = num - 1`.
>
> Rumus ini berlaku untuk **ukuran grid berapapun**:
> - `num = 3` → konstan = `2`
> - `num = 5` → konstan = `4`
> - `num = 7` → konstan = `6`

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
// 🗺️ KERANGKA KODE (Mental Model: Grid 2D dengan 2 garis diagonal bersilangan)

const polaX = (num) => {
  let pattern = '';                              // [KANVAS] — tempat menyusun pola (❌ jangan 'result')

  for (let row = 0; row < num; row++) {          // [LOOP UTAMA] → baris ke-berapa (atas ke bawah)
    for (let col = 0; col < num; col++) {        //   [NESTED LOOP] → kolom ke-berapa (kiri ke kanan)
      // [LOGIKA INTI] → cek diagonal utama ATAU diagonal terbalik
      // Jika cocok → cetak '*', jika tidak → cetak ' '
    }
    pattern += '\n';                             //   [PINDAH BARIS] → setelah satu baris selesai
  }

  return pattern;                                // [KEMBALIKAN] → hasilkan string pola lengkap
};
```

---

<a name="fase-2"></a>
## 🏗️ Fase 2 — Bangun Kodenya Secara Bertahap

> [!IMPORTANT]
> 🧱 **Prinsip "Bangun Lantai per Lantai":** Jangan langsung menulis kode final! Kita mulai dari struktur paling dasar, lalu menambahkan fitur satu per satu. Setiap step harus menghasilkan output yang bisa diverifikasi.

### ⚙️ Step 1 — Bangun Baris Kosong (Loop Luar Saja)

Langkah pertama: buat `num` buah baris kosong yang hanya berisi karakter *enter* (`\n`). Belum ada kolom, belum ada bintang.

```javascript
const polaX = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    pattern += '\n';                   // ← Hanya enter, belum ada isi
  }

  return pattern;
};
```

**Output:** 5 baris kosong (hanya enter, tidak terlihat apa-apa).

> *(Kenapa mulai dari sini: Kita memastikan "kanvas"-nya sudah ada dulu. Ibarat pelukis yang menyiapkan kertas kosong sebelum mulai menggambar.)*

---

### ⚙️ Step 2 — Isi Setiap Baris dengan Bintang (Nested Loop)

Tambahkan loop `col` di dalam loop `row`. Untuk sementara, cetak bintang di **semua** posisi agar kita bisa melihat bentuk grid penuhnya.

```javascript
const polaX = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
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

> *(Kenapa: Sebelum "memahat" pola X, kita pastikan dulu bahwa nested loop kita sudah benar menghasilkan grid berukuran `num × num`. Kalau grid-nya saja sudah salah, logika diagonal pasti ikut salah.)*

---

### ⚙️ Step 3 — Memahat Pola X dengan `if / else`

Sekarang kita ganti logika "cetak bintang di mana-mana" menjadi "cetak bintang hanya di koordinat diagonal." Gunakan dua rumus yang sudah ditemukan di Fase 1.

```javascript
const polaX = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
      if (row === col || row + col === num - 1) {  // ← Diagonal utama ATAU terbalik
        pattern += '*';                            //   → cetak bintang
      } else {
        pattern += ' ';                            //   → cetak spasi (WAJIB!)
      }
    }
    pattern += '\n';
  }

  return pattern;
};
```

**Output:** Pola X yang sudah terbentuk sempurna! ✅
```text
*   *
 * *
  *
 * *
*   *
```

> [!WARNING]
> ⚠️ **Jangan lupakan blok `else`!**
>
> Tanpa `else { pattern += ' '; }`, bintang-bintang akan saling menempel tanpa jarak.
>
> **Tanpa else (SALAH):**
> ```text
> **
> **
> *
> **
> **
> ```
>
> Spasi **bukan hiasan** — ia adalah karakter yang mendorong bintang ke posisi koordinat yang benar di setiap baris!

---

### ⚙️ Step 4 — Refactor: `if / else` → Ternary Operator

Versi `if / else` di atas sudah benar. Namun, karena kondisinya hanya menghasilkan **dua pilihan nilai** (`'*'` atau `' '`), kita bisa menyederhanakannya menggunakan **Ternary Operator**.

**Pola Ternary:**
```
kondisi ? 'nilai_jika_benar' : 'nilai_jika_salah'
```

**Sebelum (if / else) — 5 baris:**
```javascript
if (row === col || row + col === num - 1) {
  pattern += '*';
} else {
  pattern += ' ';
}
```

**Sesudah (Ternary) — 1 baris:**
```javascript
pattern += (row === col || row + col === num - 1) ? '*' : ' ';
```

> [!TIP]
> 💡 **Kenapa Ternary lebih idiomatik di sini?**
> Kita tidak mengulang penulisan `pattern +=` dua kali. Ternary murni bertindak sebagai **"penghasil nilai"** (value generator), dan `pattern +=` cukup ditulis **satu kali** di depan. Pembaca langsung tahu: *"baris ini tujuannya menambahkan SATU karakter ke `pattern`."*
>
> 💡 **Tips tambahan:** Menambahkan tanda kurung `()` membungkus kondisi — meskipun opsional — membuat mata manusia lebih mudah membedakan mana bagian "pertanyaan" dan mana bagian "jawaban".

---

### ✅ Solusi Lengkap (Versi 1 — Nested Loop)

```javascript
const polaX = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
      pattern += (row === col || row + col === num - 1) ? '*' : ' ';
    }
    pattern += '\n';
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

<a name="gotchas"></a>
## ⚠️ Gotchas & Jebakan Umum

> ⚠️ **Jebakan #1: Lupa mencetak spasi (tanpa blok `else`).**
>
> Ini adalah **kesalahan paling sering** di challenge ini. Tanpa spasi, bintang menempel satu sama lain.
>
> Bayangkan saat mesin mengeksekusi **Baris ke-0**:
> - `col = 0` → Cocok `row === col` → Cetak `*`
> - `col = 1` → Tidak cocok → *(tanpa else, kode diam saja)*
> - `col = 2` → Tidak cocok → *(diam saja)*
> - `col = 3` → Tidak cocok → *(diam saja)*
> - `col = 4` → Cocok `row + col === 4` → Cetak `*`
>
> Hasilnya: `**` (dua bintang menempel). Padahal yang kita inginkan: `*   *` (ada 3 spasi di tengah).
>
> **Solusi:** Selalu sertakan `else { pattern += ' '; }` untuk mengisi ruang kosong.

---

> ⚠️ **Jebakan #2: Menulis `num` bukan `num - 1` di rumus diagonal terbalik.**
>
> ```javascript
> // ❌ SALAH
> if (row + col === num) { ... }
>
> // ✅ BENAR
> if (row + col === num - 1) { ... }
> ```
>
> Jika `num = 5`, maka diagonal terbalik jatuh di indeks `0+4`, `1+3`, `2+2`, dst — semuanya berjumlah `4` (yaitu `num - 1`), bukan `5` (yaitu `num`).
> Jika salah menulis `num`, bintang diagonal terbalik akan bergeser 1 langkah ke kanan dan polanya menjadi asimetris.

---

> ⚠️ **Jebakan #3: Meletakkan `pattern += '\n'` di dalam loop kolom.**
>
> Jika kamu meletakkan pindah baris (`\n`) di dalam loop `col`, maka setiap karakter akan diikuti baris baru. Hasilnya: setiap karakter berdiri sendiri di satu baris!
> ```
> * (baris baru)
>   (baris baru)
>   (baris baru)
>   (baris baru)
> * (baris baru)
> ...
> ```
> **Solusi:** `pattern += '\n'` harus berada di luar loop `col`, tapi **di dalam** loop `row`.

---

> ⚠️ **Jebakan #4: Khawatir titik tengah mencetak bintang 2 kali.**
>
> Saat `num` ganjil (misal `num = 5`), baris tengah (`row = 2`) memenuhi **kedua** rumus:
> - `row === col` → `2 === 2` ✅
> - `row + col === num - 1` → `2 + 2 === 4` ✅
>
> Apakah bintang dicetak 2 kali? **Tidak!** Karena kita menggunakan operator `||` (OR), begitu kondisi pertama `true`, JavaScript sudah cukup dan langsung mengeksekusi `pattern += '*'` satu kali saja. Tidak perlu penanganan khusus.

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [01 — Challenge Overview](./01-challenge-overview.md) | [README](../README.md) | [03 — Version 1: Nested Loop](./03-version-1-nested-loop.md) |
