# 🧠 Problem Solving Approach — Piramida Tengah (Centered Pyramid)

### ✨ _Dari analisis pola hingga solusi dasar — proses berpikir yang terdokumentasi._

> 🎯 **Tujuan:** Mendokumentasikan proses berpikir (mental model) dalam menemukan logika inti challenge, membangun kerangka kode, dan menyusun solusi nested loop secara bertahap (step-by-step).

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

Perhatikan output yang diharapkan dari `piramida2(5)`:

```text
    *
   * *
  * * *
 * * * *
* * * * *
```

Pertanyaan kunci yang harus dijawab:
1. Setiap baris terdiri dari **dua komponen** — apa saja?
2. Berapa jumlah **spasi di awal** setiap baris?
3. Berapa jumlah **bintang** yang dicetak setiap baris?
4. Apa yang dicetak — `'*'` saja atau `'* '` (bintang + spasi)?

### 🔍 Langkah 2 — Buat Tabel Breakdown

| Baris (`row`) | Spasi Awal | Bintang | Karakter Cetak | Visualisasi |
|:---:|:---:|:---:|:---:|:---:|
| 1 | 4 | 1 | `'* '` × 1 | `····*·` |
| 2 | 3 | 2 | `'* '` × 2 | `···*·*·` |
| 3 | 2 | 3 | `'* '` × 3 | `··*·*·*·` |
| 4 | 1 | 4 | `'* '` × 4 | `·*·*·*·*·` |
| 5 | 0 | 5 | `'* '` × 5 | `*·*·*·*·*·` |

> 📌 Tanda `·` merepresentasikan karakter spasi agar terlihat jelas.

### 💡 Langkah 3 — Temukan Rumusnya

Dari tabel di atas, dua pola terlihat sangat jelas:

**Rumus Spasi Pendorong:**

| `row` | `num` | `num - row` | Cocok? |
|:---:|:---:|:---:|:---:|
| 1 | 5 | 4 | ✅ |
| 2 | 5 | 3 | ✅ |
| 3 | 5 | 2 | ✅ |
| 5 | 5 | 0 | ✅ |

> 📌 *Kenapa `num - row`? Semakin turun baris, spasi makin sedikit karena `row` bertambah sedangkan `num` tetap.*

**Rumus Bintang:**

Jumlah bintang = `row`. Baris ke-1 → 1 bintang, baris ke-3 → 3 bintang. Sesederhana itu!

> [!TIP]
> 💡 **Kenapa rumus bintangnya lebih sederhana dari Piramida Rapat (folder 06)?**
>
> Di Piramida Rapat, kita mencetak `'*'` (tanpa spasi) sehingga butuh deret ganjil `(2×row)-1` agar piramida melebar simetris. Di sini, kita mencetak `'* '` (bintang + spasi) — spasi ekstra ini sudah secara otomatis "melebarkan" piramida, sehingga cukup mencetak sebanyak `row` kali saja.

### 🔑 Rangkuman Rumus

```
🌌 Jumlah Spasi   = num - row      (spasi pendorong, berkurang tiap baris)
⭐ Jumlah Bintang = row             (sama dengan nomor baris)
📝 Karakter Cetak = '* '            (bintang + spasi, BUKAN hanya '*')
```

---

<a name="blueprint"></a>
## 🗺️ Blueprint & Kamus Variabel

Sebelum menulis kode final, kita rancang "denah" strukturnya terlebih dahulu.

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|:--------------:|:-----------------:|--------|
| Parameter Input | `num` | `n`, `x` | Sudah konvensi soal; `num` cukup deskriptif |
| Penampung Pola | `pattern` | `result`, `res`, `str` | Kita menyusun sebuah **pola** visual, bukan hasil hitungan |
| Loop Utama (Baris) | `row` | `i`, `x`, `a` | Merepresentasikan **baris ke-berapa** yang sedang diproses |
| Nested Loop Spasi | `space` | `j`, `s` | Penghitung **spasi pendorong** — langsung jelas fungsinya |
| Nested Loop Bintang | `star` | `k`, `b` | Penghitung **bintang pembentuk** — langsung jelas fungsinya |

> [!NOTE]
> 📌 **Kapan `i` dan `j` boleh dipakai?**
> Penggunaan `i` sah untuk loop sederhana yang hanya menghitung angka (misalnya iterasi array). Namun untuk kasus *pattern printing*, gunakan nama deskriptif seperti `row`, `space`, `star` agar kode langsung terbaca maknanya — terutama saat nested loop, di mana otak bisa sangat mudah tertukar mana yang mengontrol baris, spasi, dan bintang.

### 🗺️ Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Spasi Pendorong + Bintang Berjarak = Piramida Tengah)

function piramida2(num) {
  let pattern = '';                              // [KANVAS] penampung pola (❌ jangan 'result')

  for (let row = 1; ...) {                       // [LOOP UTAMA] → baris ke-berapa
    for (let space = 1; ...) { ... }             //   [NESTED 1] → cetak spasi pendorong
    for (let star = 1; ...) { ... }              //   [NESTED 2] → cetak bintang berjarak
    pattern += '\n';                             //   [PINDAH BARIS]
  }

  return pattern;                                // [RETURN] kembalikan hasil akhir
}
```

> [!NOTE]
> 💡 **Mental Model: "Dorong lalu Cetak"**
> Setiap baris mengikuti urutan yang sama: **dorong ke kanan** (spasi pendorong), lalu **cetak bintang berjarak**, lalu **turun baris**. Seperti mesin ketik tua — kamu tekan tombol spasi dulu, baru mengetik huruf, lalu lever ke baris baru.

---

<a name="fase-2"></a>
## 🏗️ Fase 2 — Bangun Kodenya Secara Bertahap

> [!IMPORTANT]
> 🧱 **Prinsip "Bangun Lantai per Lantai":** Jangan langsung menulis kode final! Kita mulai dari struktur paling dasar, lalu menambahkan fitur satu per satu. Setiap step harus menghasilkan output yang bisa diverifikasi.

### ⚙️ Step 1 — Loop Utama Saja (Kerangka Kosong)

Langkah pertama: buat loop utama yang hanya mencetak `\n` (enter) sebanyak `num` kali. Tujuannya untuk memastikan loop utama berjalan dengan benar.

```javascript
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Hasil:** 5 baris kosong. Belum ada bintang — tapi loop utama sudah terbukti bekerja ✅

---

### ⚙️ Step 2 — Tambah Nested Loop Bintang (Rata Kiri)

Tambahkan satu nested loop di dalam loop utama untuk mencetak bintang. Fokus pada bintang saja dulu — **abaikan spasi pendorong.**

```javascript
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let star = 1; star <= row; star++) {
      pattern += '* ';               // ← Cetak bintang + spasi
    }
    pattern += '\n';
  }

  return pattern;
};
```

**Output:** Segitiga siku-siku berjarak (rata kiri, belum piramida).
```text
*
* *
* * *
* * * *
* * * * *
```

> *(Kenapa mulai tanpa spasi? Sebelum "mendorong ke tengah", pastikan dulu jumlah bintang per baris sudah benar. Kalau bintangnya saja salah, menambah spasi hanya menambah masalah.)*

---

### ⚙️ Step 3 — Tambah Nested Loop Spasi Pendorong (Final V1)

Tambahkan satu nested loop lagi tepat **di atas** loop bintang untuk mencetak spasi pendorong. Rumus: `num - row`.

```javascript
// ✅ VERSI 1 — Nested Loop (Clean Code)
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    // Spasi pendorong — mendorong bintang ke kanan
    for (let space = 1; space <= num - row; space++) {
      pattern += ' ';
    }

    // Bintang pembentuk piramida
    for (let star = 1; star <= row; star++) {
      pattern += '* ';
    }

    pattern += '\n';
  }

  return pattern;
};

console.log(piramida2(5));
/*
    *
   * *
  * * *
 * * * *
* * * * *
*/
```

> 📌 **Hasil:** Piramida rata tengah sudah terbentuk sempurna! ✅

### 🧠 Algoritma Tahan Lupa — Penjelasan "Kenapa" Setiap Langkah

> 1. **Menyiapkan Kanvas `[VARIABEL]`**:
>    - Buat variabel `pattern` bertipe string kosong `''`. *(Kenapa string kosong? Karena kita akan menempelkan karakter satu per satu ke string ini — seperti melukis di kanvas putih yang masih kosong).*

> 2. **Mengulang Setiap Baris `[FOR LOOP UTAMA]`** (Iterasi `row` dari 1 sampai `num`):
>    - Loop ini berjalan sebanyak `num` kali. *(Kenapa mulai dari 1? Agar rumus `num - row` dan jumlah bintang = `row` menghasilkan angka yang langsung sesuai tabel analisis. Contoh num=5 → 5 baris, row berjalan 1, 2, 3, 4, 5).*

> 3. **Spasi Pendorong `[NESTED LOOP 1]`** (Cetak spasi sebanyak `num - row`):
>    - Spasi ini berfungsi mendorong bintang ke kanan agar piramida terlihat rata di tengah. *(Kenapa `num - row`? Semakin turun baris, semakin sedikit dorongan yang dibutuhkan. Contoh num=5, baris ke-1 → 5-1 = 4 spasi, baris ke-5 → 5-5 = 0 spasi).*

> 4. **Bintang Berjarak `[NESTED LOOP 2]`** (Cetak `'* '` sebanyak `row` kali):
>    - Setiap baris mencetak bintang sebanyak nomor barisnya. *(Kenapa `row`? Baris ke-1 = 1 bintang, baris ke-3 = 3 bintang — langsung linier! Spasi setelah bintang `'* '` membuat jarak visual antar bintang).*

> 5. **Pindah Baris `[NEWLINE]`**:
>    - Setelah kedua nested loop selesai, tambahkan `'\n'`. *(Kenapa? Tanpa `\n`, semua spasi dan bintang akan menempel jadi satu baris panjang tak berbentuk).*

> 6. **Kembalikan Hasil `[RETURN]`**:
>    - Setelah loop utama selesai, kembalikan variabel `pattern` yang sudah berisi seluruh pola piramida.

---

<a name="gotchas"></a>
## ⚠️ Gotchas & Jebakan Umum

> [!WARNING]
> 🐛 **Jebakan #1: Mencetak `'*'` tanpa spasi — piramida jadi segitiga siku-siku dempet.**
>
> ```javascript
> // ❌ SALAH — tanpa spasi setelah bintang
> pattern += '*';
>
> // ✅ BENAR — bintang + spasi
> pattern += '* ';
> ```
>
> Tanpa spasi ekstra, bintang-bintang menempel dan spasi pendorong tidak cukup untuk memusatkan piramida. Hasilnya bukan piramida simetris, melainkan segitiga siku-siku yang miring ke kanan.

---

> [!WARNING]
> 🐛 **Jebakan #2: Urutan loop terbalik — spasi di belakang bintang.**
>
> Jika kamu mencetak **bintang duluan** baru **spasi**, spasinya tersembunyi di sebelah kanan:
> ```
> ❌ [Bintang][Spasi]  →  * ····   (spasi di kanan, tidak terlihat)
> ✅ [Spasi][Bintang]  →  ····*    (spasi dorong bintang ke kanan)
> ```
> **Ingat:** Komputer mencetak dari **kiri ke kanan**. Spasi pendorong harus di depan!

---

> [!CAUTION]
> 🔴 **Jebakan #3: Lupa `'\n'` di akhir baris.**
>
> Tanpa `pattern += '\n'` setelah kedua nested loop, semua karakter menempel jadi satu baris panjang:
> ```
> ❌ ····*···* *··* * *·* * * ** * * * *   (tanpa \n)
> ✅     *       (dengan \n — piramida terbentuk!)
>    * *
>   * * *
>  * * * *
> * * * * *
> ```

---

> ⚠️ **Jebakan #4: Loop dimulai dari `0` tapi rumus tidak disesuaikan.**
>
> Jika `row` dimulai dari `0` tapi rumus **tidak dikalibrasi**:
> - Spasi: `num - 0 = 5` (kelebihan 1 spasi!)
> - Bintang: `0` bintang (baris pertama kosong!)
>
> **Solusi:** Mulai `row` dari `1`, atau sesuaikan rumus menjadi `num - row - 1` (spasi) dan `row + 1` (bintang). Detail lengkap di [05 — Version Comparison](./05-version-comparison.md).

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [01 — Challenge Overview](./01-challenge-overview.md) | [README](../README.md) | [03 — Version 1: Nested Loop](./03-version-1-nested-loop.md) |
