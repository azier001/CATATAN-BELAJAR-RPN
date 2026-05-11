# 🧠 Problem Solving Approach — Papan Catur (Chess Board Pattern)

### ✨ _Dari analisis pola hingga solusi dasar — proses berpikir yang terdokumentasi._

> 🎯 **Tujuan:** Mendokumentasikan proses berpikir (mental model) dalam menemukan logika inti challenge, membangun kerangka kode, dan menyusun solusi secara bertahap (step-by-step).

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔬 | [Fase 1: Temukan Rumusnya Dulu](#fase-1) | Analisis pola sebelum menyentuh kode |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kosong + panduan penamaan |
| 🏗️ | [Fase 2: Bangun Kodenya Bertahap](#fase-2) | Step 1 → Step 2 → Step 3 → Solusi lengkap |
| ⚠️ | [Gotchas & Jebakan Umum](#gotchas) | Peringatan penting saat mengerjakan |

---

<a name="fase-1"></a>
## 🔬 Fase 1 — Temukan Rumusnya Dulu (Tanpa Kode!)

> [!IMPORTANT]
> 🧠 **Prinsip Utama:** Jangan langsung menulis kode sebelum kamu bisa menjelaskan logikanya dengan kata-kata. Temukan "hukum alam" dari pola dulu, baru terjemahkan ke kode.

### 🔍 Langkah 1 — Amati Outputnya

Perhatikan output yang diharapkan dari `papanCatur(5)`:

```
# # #
 # # 
# # #
 # # 
# # #
```

Pertanyaan kunci yang harus dijawab:
1. Kapan kita harus mencetak simbol `#`?
2. Kapan kita harus mencetak simbol ` ` (spasi)?

### 🔍 Langkah 2 — Buat Tabel Koordinat

Kita berikan setiap sel sebuah "alamat" berupa pasangan koordinat `(row, col)`. Mulai dari indeks `1`.

Contoh papan `3 × 3`:

| Baris (`row`) | Kolom (`col`) | `row + col` | Genap / Ganjil | Karakter |
|:---:|:---:|:---:|:---:|:---:|
| 1 | 1 | **2** | ✅ Genap | `#` |
| 1 | 2 | **3** | Ganjil | ` ` |
| 1 | 3 | **4** | ✅ Genap | `#` |
| 2 | 1 | **3** | Ganjil | ` ` |
| 2 | 2 | **4** | ✅ Genap | `#` |
| 2 | 3 | **5** | Ganjil | ` ` |
| 3 | 1 | **4** | ✅ Genap | `#` |
| 3 | 2 | **5** | Ganjil | ` ` |
| 3 | 3 | **6** | ✅ Genap | `#` |

### 💡 Langkah 3 — Temukan Rumusnya

Dari tabel di atas, polanya sangat jelas:

```
Jika (row + col) % 2 === 0  →  cetak '#'   (hasil bagi 2 sisa 0 = GENAP)
Jika (row + col) % 2 !== 0  →  cetak ' '   (hasil bagi 2 sisa 1 = GANJIL)
```

> [!TIP]
> 💡 **Kenapa menggunakan `% 2`?**
>
> Operator modulo (`%`) menghasilkan **sisa bagi**. Jika angka dibagi 2, sisanya hanya bisa `0` atau `1`.
> - Sisa `0` → bilangan **genap** → cetak `#`
> - Sisa `1` → bilangan **ganjil** → cetak ` ` (spasi)
>
> Satu rumus ini berlaku untuk **semua sel** di papan, tidak perlu kondisi khusus per baris.

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
> Penggunaan `i` (index) sah untuk loop sederhana yang hanya menghitung angka. Namun untuk kasus **spasial** (mewakili posisi pada grid/papan), gunakan nama deskriptif seperti `row` dan `col` agar kode langsung terbaca maknanya.

### 🗺️ Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Nested Loop 2 Dimensi)

function papanCatur(num) {
  let pattern = '';                           // [KANVAS] — tempat menyusun pola (❌ jangan 'result')

  for (let row = 1; row <= num; row++) {      // [LOOP UTAMA] — iterasi baris dari atas ke bawah
    for (let col = 1; col <= num; col++) {    //   [NESTED LOOP] — iterasi kolom dari kiri ke kanan
      // [LOGIKA INTI] — tentukan karakter berdasarkan posisi
    }
    // [PINDAH BARIS] — setelah satu baris selesai, sisipkan '\n'
  }

  return pattern;                             // [KEMBALIKAN] — hasilkan string pola lengkap
}
```

---

<a name="fase-2"></a>
## 🏗️ Fase 2 — Bangun Kodenya Secara Bertahap

### ⚙️ Step 1 — Bangun Kerangka Loop-nya Dulu

Langkah pertama adalah menyiapkan "lahan" papan caturnya. Kita butuh dua loop bersarang dan sebuah mekanisme pindah baris, **tanpa memikirkan logika karakter dulu**.

```javascript
const papanCatur = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {   // ← Loop baris (luar)
    for (let col = 1; col <= num; col++) { // ← Loop kolom (dalam) — masih kosong
    }
    pattern += '\n';                       // ← Pindah baris setelah satu row selesai
  }

  return pattern;
};
```

> *(Kenapa: `pattern += '\n'` diletakkan di luar loop `col` tapi di dalam loop `row`?
> Karena kita hanya ingin pindah baris **sekali** setiap kali satu baris penuh selesai diproses, bukan setelah setiap karakter.)*

---

### ⚙️ Step 2 — Tambahkan Logika `if / else`

Sekarang kita isi loop `col` dengan "hukum alam" yang sudah kita temukan di Fase 1.

```javascript
const papanCatur = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= num; col++) {
      if ((row + col) % 2 === 0) {         // ← Jika posisi GENAP
        pattern += '#';                    //   → cetak pagar
      } else {                             // ← Jika posisi GANJIL
        pattern += ' ';                    //   → cetak spasi
      }
    }
    pattern += '\n';
  }

  return pattern;
};
```

> *(Kenapa: `(row + col) % 2 === 0`? Karena modulo (`%`) menghasilkan sisa bagi. Sisa `0` berarti genap. Contoh: baris ke-1, kolom ke-1 → `(1+1) % 2 = 0` → cetak `#`.)*

---

### ⚙️ Step 3 — Refactor: `if / else` → Ternary Operator

Versi `if / else` di atas sudah benar. Namun, karena kondisinya hanya menghasilkan **dua pilihan nilai** (`'#'` atau `' '`), kita bisa menyederhanakannya menggunakan **Ternary Operator**.

**Pola Ternary:**
```
kondisi ? 'nilai_jika_benar' : 'nilai_jika_salah'
```

**Sebelum (if / else):**
```javascript
if ((row + col) % 2 === 0) {
  pattern += '#';
} else {
  pattern += ' ';
}
```

**Sesudah (Ternary):**
```javascript
pattern += (row + col) % 2 === 0 ? '#' : ' ';
```

> [!TIP]
> 💡 **Kenapa Ternary lebih idiomatik di sini?**
> Kita tidak mengulang penulisan `pattern +=` dua kali. Ternary murni bertindak sebagai **"penghasil nilai"** (value generator), dan `pattern +=` cukup ditulis **satu kali** di depan. Pembaca langsung tahu: *"baris ini tujuannya menambahkan SATU karakter ke `pattern`."*

---

### ✅ Solusi Lengkap (Versi 1 — Nested Loop)

```javascript
const papanCatur = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= num; col++) {
      pattern += (row + col) % 2 === 0 ? '#' : ' ';
    }
    pattern += '\n';
  }

  return pattern;
};

// Uji coba
console.log(papanCatur(5));
/*
# # #
 # # 
# # #
 # # 
# # #
*/
```

---

<a name="gotchas"></a>
## ⚠️ Gotchas & Jebakan Umum

> ⚠️ **Jebakan #1: Meletakkan `pattern += '\n'` di dalam loop kolom.**
>
> Jika kamu meletakkan pindah baris (`\n`) di dalam loop `col`, maka setiap karakter akan diikuti baris baru. Hasilnya: setiap karakter akan berdiri sendiri di satu baris!
> ```
> # (baris baru)
>   (baris baru)
> # (baris baru)
> ...
> ```
> **Solusi:** `pattern += '\n'` harus berada di luar loop `col`, tapi **di dalam** loop `row`.

---

> ⚠️ **Jebakan #2: Indeks mulai dari `0`, tapi rumus tidak disesuaikan.**
>
> Jika kamu menggunakan `row = 0` dan `col = 0` (dimulai dari nol), rumus tetap bekerja karena:
> - `(0+0) = 0` (Genap) → `#`
> - `(0+1) = 1` (Ganjil) → ` `
>
> Pola tetap benar! Pilihan antara `0` atau `1` tidak memengaruhi hasil selama kamu **konsisten** di kedua loop.

---

> ⚠️ **Jebakan #3: Menggunakan `console.log` bukan `return`.**
>
> Fungsi `papanCatur` **harus** menggunakan `return pattern`, bukan `console.log(pattern)`. Jika menggunakan `console.log`, fungsi akan mengembalikan `undefined` dan tidak bisa digunakan di tempat lain dalam program.

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [01 — Challenge Overview](./01-challenge-overview.md) | [README](./README.md) | [03 — Version 1: Nested Loop](./03-version-1-nested-loop.md) |
