# 🔺 Dokumentasi — Pola Piramida (Pyramid Pattern)

### ✨ _Menguasai nested loop bertingkat: spasi pendorong + bintang deret ganjil_

> 🎯 **Tujuan:** Mampu membangun pola piramida simetris menggunakan nested loop, memahami rumus spasi pendorong (`num - row`) dan bintang ganjil (`2 × row - 1`), serta mengenal evolusi solusi dari nested loop manual hingga pendekatan `.repeat()`.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Latar Belakang](#latar-belakang) | Kenapa piramida jadi level-up dari persegi |
| 🔍 | [Visualisasi & Analisis Pola](#visualisasi--analisis-pola) | Tabel breakdown untuk menemukan 2 rumus kunci |
| 🧠 | [Algoritma Tahan Lupa](#algoritma-tahan-lupa) | Langkah-langkah logika dengan penjelasan "Kenapa" |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint--kamus-variabel) | Kerangka kode + pemetaan variabel |
| 👣 | [Pendekatan Bertahap (V1)](#pendekatan-bertahap-v1--nested-loop) | Membangun solusi step-by-step |
| 🔄 | [Evolusi Solusi (V2)](#evolusi-solusi-v2--repeat) | Alternatif ringkas dengan `.repeat()` |
| 🔢 | [Bonus: 1-Indexed vs 0-Indexed](#bonus-1-indexed-vs-0-indexed) | Perbandingan rumus & kode berdasarkan titik awal iterasi |
| 📊 | [Perbandingan Semua Versi](#perbandingan-semua-versi) | Tabel komparasi semua pendekatan |
| 🏷️ | [Naming Convention](#naming-convention) | Best practice penamaan variabel |
| ⚠️ | [Gotchas & Peringatan](#gotchas--peringatan) | Jebakan umum yang harus dihindari |

---

<a name="latar-belakang"></a>

## 📖 Latar Belakang

Pola Piramida (*Pyramid Pattern*) adalah **level-up pertama** dari pola persegi. Jika di persegi kamu hanya butuh **1 nested loop** (bintang saja), di piramida kamu butuh **2 nested loop** di dalam 1 loop utama — satu untuk spasi, satu untuk bintang. Ini adalah momen pertama di mana kamu harus "mengkoordinasikan" beberapa nested loop secara bersamaan.

> [!TIP]
> 💡 **Analogi Mudah Dipahami**
>
> | | Menulis di Buku Tulis 📝 | Nested Loop Piramida 💻 |
> |---|---|---|
> | **Langkah 1** | Geser pensil ke kanan beberapa kotak (spasi kosong) | Loop pertama (`space`) mencetak spasi pendorong |
> | **Langkah 2** | Mulai menulis bintang-bintang | Loop kedua (`star`) mencetak bintang |
> | **Langkah 3** | Pindah ke baris berikutnya, geser lebih sedikit | `\n` + loop luar (`row`) naik, spasi berkurang |

### 💡 Jadi, Apa Tantangannya?

Soal ini **mewajibkan** penggunaan nested loop. Tantangan utamanya ada dua:
1. **Menemukan 2 rumus** — satu untuk jumlah spasi, satu untuk jumlah bintang.
2. **Urutan eksekusi** — spasi HARUS dicetak **sebelum** bintang agar piramida bergeser ke tengah.

---

<a name="visualisasi--analisis-pola"></a>

## 🔍 Visualisasi & Analisis Pola

Sebelum menulis kode, kita **wajib** menganalisis pola yang diminta terlebih dahulu. Berikut adalah soal yang diberikan:

```javascript
// Wajib menggunakan nested loop.
// Petunjuk: Anda mungkin perlu 2 loop di dalam 1 loop (satu untuk spasi, satu untuk bintang).
function piramida(num) {
  let pattern = '';
  // code here
  return pattern;
}

console.log(piramida(5));
/*
    *
   ***
  *****
 *******
*********
*/
```

### 📊 Tabel Breakdown Pola (`num = 5`)

| Baris ke- (`row`) | Jumlah Spasi | Jumlah Bintang | Visualisasi |
|:-----------------:|:------------:|:--------------:|:-----------:|
| 1 | 4 | 1 | `····*` |
| 2 | 3 | 3 | `···***` |
| 3 | 2 | 5 | `··*****` |
| 4 | 1 | 7 | `·*******` |
| 5 | 0 | 9 | `*********` |

> 📌 Tanda `·` merepresentasikan karakter spasi agar terlihat jelas.

### 🔑 Dua Rumus yang Ditemukan

```
🌌 Jumlah Spasi   = num - row
⭐ Jumlah Bintang = (2 × row) - 1
```

**Cara menemukan rumus spasi:**

| `row` | `num` | `num - row` | Cocok? |
|:-----:|:-----:|:-----------:|:------:|
| 1 | 5 | 4 | ✅ |
| 2 | 5 | 3 | ✅ |
| 3 | 5 | 2 | ✅ |
| 4 | 5 | 1 | ✅ |
| 5 | 5 | 0 | ✅ |

> 📌 *Semakin turun baris, spasi makin sedikit. Rumus `num - row` secara natural berkurang karena `row` bertambah sedangkan `num` tetap.*

**Cara menemukan rumus bintang:**

| `row` | Target Bintang | `row × 2` | `(row × 2) - 1` | Cocok? |
|:-----:|:--------------:|:---------:|:----------------:|:------:|
| 1 | 1 | 2 | 1 | ✅ |
| 2 | 3 | 4 | 3 | ✅ |
| 3 | 5 | 6 | 5 | ✅ |
| 4 | 7 | 8 | 7 | ✅ |
| 5 | 9 | 10 | 9 | ✅ |

> 📌 *Deret `1, 3, 5, 7, 9` adalah bilangan ganjil. Jika `row` dikalikan 2, hasilnya selalu "kelebihan satu" dari target — maka dikurangi 1.*

> [!IMPORTANT]
> 🔔 **Insight kunci:** Piramida memiliki **dua komponen per baris** (spasi + bintang) yang berubah secara **berlawanan arah** — spasi berkurang, bintang bertambah. Kedua rumus ini saling bergantung pada variabel `row` yang sama.

---

<a name="algoritma-tahan-lupa"></a>

## 🧠 Algoritma Tahan Lupa

Setiap langkah di bawah ini menjelaskan **"Kenapa"** di balik logikanya, bukan sekadar rumus.

> 1. **Menyiapkan Kanvas `[VARIABEL]`**:
>    - Buat variabel `pattern` bertipe string kosong `''`. *(Kenapa string kosong? Karena kita akan menempelkan karakter spasi, bintang, dan enter satu per satu ke string ini — seperti melukis di kanvas putih yang masih kosong).*

> 2. **Mengulang Setiap Baris `[FOR LOOP UTAMA]`** (Iterasi `row` dari 1 sampai `num`):
>    - Loop ini berjalan sebanyak `num` kali. *(Kenapa mulai dari 1? Agar rumus `num - row` dan `2 × row - 1` menghasilkan angka yang langsung sesuai tabel analisis. Contoh num=5 → 5 baris, row berjalan 1, 2, 3, 4, 5).*

> 3. **Spasi Pendorong `[NESTED LOOP 1]`** (Cetak spasi sebanyak `num - row`):
>    - Spasi ini berfungsi mendorong bintang ke kanan agar piramida terlihat simetris di tengah. *(Kenapa `num - row`? Semakin turun baris, semakin sedikit dorongan yang dibutuhkan. Contoh num=5, baris ke-1 → 5-1 = 4 spasi, baris ke-5 → 5-5 = 0 spasi).*

> 4. **Bintang Ganjil `[NESTED LOOP 2]`** (Cetak bintang sebanyak `(2 × row) - 1`):
>    - Bintang selalu berjumlah ganjil agar piramida simetris kiri-kanan. *(Kenapa `(2 × row) - 1`? Dikalikan 2 agar bertambah cepat, dikurangi 1 agar hasilnya selalu ganjil: 1, 3, 5, 7, 9. Contoh baris ke-3 → 2×3-1 = 5 bintang).*

> 5. **Pindah Baris `[NEWLINE]`**:
>    - Setelah kedua nested loop selesai, tambahkan `'\n'` (karakter enter). *(Kenapa? Tanpa `\n`, semua spasi dan bintang akan menempel jadi satu baris panjang tak berbentuk).*

> 6. **Kembalikan Hasil `[RETURN]`**:
>    - Setelah loop utama selesai, kembalikan variabel `pattern` yang sudah berisi seluruh pola piramida.

---

<a name="blueprint--kamus-variabel"></a>

## 🗺️ Blueprint & Kamus Variabel

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|----------------|-------------------|--------|
| Parameter Input | `num` | `n`, `x` | Sudah konvensi soal; `num` cukup deskriptif |
| Penampung Pola | `pattern` | `result`, `res`, `str` | Kita mengembalikan **pola visual**, bukan hasil hitungan |
| Loop Utama (Luar) | `row` | `i`, `x`, `a` | Merepresentasikan **baris ke-berapa** |
| Nested Loop Spasi | `space` | `j`, `s` | Penghitung **spasi pendorong** — langsung jelas fungsinya |
| Nested Loop Bintang | `star` | `k`, `b` | Penghitung **bintang pembentuk** — langsung jelas fungsinya |

### 🏗️ Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Spasi Pendorong + Bintang Ganjil = Piramida)

function piramida(num) {
  let pattern = '';                              // [KANVAS] penampung pola

  for (let row = 1; ...) {                       // [LOOP UTAMA] → baris ke-berapa
    for (let space = 1; ...) { ... }             //   [NESTED 1] → cetak spasi pendorong
    for (let star = 1; ...) { ... }              //   [NESTED 2] → cetak bintang ganjil
    pattern += '\n';                             //   [PINDAH BARIS]
  }

  return pattern;                                // [RETURN] kembalikan hasil akhir
}
```

> [!NOTE]
> 💡 **Mental Model: "Dorong lalu Cetak"**
> Setiap baris mengikuti urutan yang sama: **dorong ke kanan** (spasi), lalu **cetak bintang**, lalu **turun baris**. Ini seperti mesin ketik tua — kamu tekan tombol spasi dulu, baru mengetik huruf, lalu lever ke baris baru.

---

<a name="pendekatan-bertahap-v1--nested-loop"></a>

## 👣 Pendekatan Bertahap (V1 — Nested Loop)

Solusi dibangun secara bertahap, **bukan langsung jadi**.

### Step 1 — Bintang Saja (Rata Kiri, Tanpa Spasi)

Pertama, kita buat loop yang hanya mencetak **bintang** tanpa spasi. Fokus pada rumus `(2 × row) - 1` saja dulu:

```javascript
const piramida = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let star = 1; star <= 2 * row - 1; star++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Hasil (rata kiri, belum piramida):**
> ```
> *
> ***
> *****
> *******
> *********
> ```

---

### Step 2 — Tambah Spasi Pendorong

Tambahkan nested loop spasi **sebelum** loop bintang agar bintang terdorong ke tengah:

```javascript
const piramida = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let space = 1; space <= num - row; space++) {
      pattern += ' ';
    }

    for (let star = 1; star <= 2 * row - 1; star++) {
      pattern += '*';
    }

    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Hasil:** Piramida simetris sudah terbentuk sempurna! ✅

---

### Step 3 — Terapkan Template Literals (Final V1)

Sebagai sentuhan akhir, gunakan template literals untuk baris penggabungan:

```javascript
// ✅ VERSI 1 — Nested Loop (Clean Code)
const piramida = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let space = 1; space <= num - row; space++) {
      pattern += ' ';
    }

    for (let star = 1; star <= 2 * row - 1; star++) {
      pattern += '*';
    }

    pattern += '\n';
  }

  return pattern;
};

console.log(piramida(5));
/*
    *
   ***
  *****
 *******
*********
*/
```

> [!TIP]
> 💡 **Kenapa loop dimulai dari `1` dan pakai `<=`?**
> Agar rumus di kode identik dengan rumus di tabel analisis. `row = 1` langsung berarti "baris pertama" — tidak perlu menghitung `+1` di kepala. Semua inner loop juga ikut konsisten dimulai dari `1` dengan `<=`.

---

<a name="evolusi-solusi-v2--repeat"></a>

## 🔄 Evolusi Solusi (V2 — `.repeat()`)

Solusi V1 bekerja sempurna, tapi **2 nested loop bisa dihilangkan** jika syarat "wajib nested loop" dicabut. JavaScript punya method bawaan `.repeat()` yang bisa menghasilkan pengulangan karakter **tanpa loop manual**.

> [!NOTE]
> 💡 **Apa itu `.repeat()`?**
> `'karakter'.repeat(N)` menghasilkan string berisi karakter tersebut diulang sebanyak `N` kali.
> ```javascript
> '*'.repeat(5)   // → '*****'
> ' '.repeat(3)   // → '   '
> 'abc'.repeat(2) // → 'abcabc'
> ```
> Jadi, `.repeat()` melakukan hal yang **persis sama** dengan nested loop — tapi dalam **satu baris**.

### 🧠 Algoritma V2 — Tahan Lupa

Perbedaan utama V2 dengan V1: kita **menghapus kedua nested loop** dan menggantinya dengan `.repeat()`. Rumus tetap sama!

> 1. **Menyiapkan Kanvas `[VARIABEL]`**:
>    - Sama seperti V1 — `let pattern = ''`.

> 2. **Mengulang Setiap Baris `[FOR LOOP — SATU-SATUNYA]`** (Iterasi `row` dari 1 sampai `num`):
>    - Hanya ada **1 loop** — loop ini yang mengontrol baris ke-berapa. *(Kenapa cuma 1? Karena tugas "cetak spasi berulang" dan "cetak bintang berulang" sudah diambil alih oleh `.repeat()`).*

> 3. **Buat String Spasi `[.repeat()]`** → `' '.repeat(num - row)`:
>    - Menghasilkan string spasi sepanjang `num - row` karakter. *(Sama persis dengan output nested loop 1 di V1, tapi tanpa loop. Contoh baris ke-2: `' '.repeat(5 - 2)` → `'   '` = 3 spasi).*

> 4. **Buat String Bintang `[.repeat()]`** → `'*'.repeat(2 * row - 1)`:
>    - Menghasilkan string bintang sepanjang `(2 × row) - 1` karakter. *(Sama persis dengan output nested loop 2 di V1. Contoh baris ke-3: `'*'.repeat(2*3 - 1)` → `'*****'` = 5 bintang).*

> 5. **Gabungkan & Pindah Baris `[TEMPLATE LITERALS]`**:
>    - Gabungkan spasi + bintang + enter menjadi satu baris: `` `${space}${star}\n` ``. *(Kenapa template literals? Lebih rapi daripada menggabungkan dengan `+` — semua komponen terlihat jelas posisinya).*

### 🗺️ Blueprint V2

```javascript
// 🗺️ KERANGKA KODE V2 (Mental Model: .repeat() menggantikan nested loop)

function piramida(num) {
  let pattern = '';                              // [KANVAS] penampung pola

  for (let row = 1; ...) {                       // [LOOP TUNGGAL] → baris ke-berapa
    let space = ' '.repeat(num - row);           //   [SPASI] → gantikan nested loop 1
    let star = '*'.repeat(2 * row - 1);          //   [BINTANG] → gantikan nested loop 2
    pattern += `${space}${star}\n`;              //   [GABUNG + PINDAH BARIS]
  }

  return pattern;                                // [RETURN] kembalikan hasil akhir
}
```

### 👣 Pendekatan Bertahap V2

#### Step 1 — Bintang Saja Pakai `.repeat()` (Rata Kiri)

Sama seperti V1, mulai dari bintang dulu tanpa spasi:

```javascript
const piramida = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    let star = '*'.repeat(2 * row - 1);

    pattern += star + '\n';
  }

  return pattern;
};
```

> 📌 **Hasil (rata kiri, belum piramida):**
> ```
> *
> ***
> *****
> *******
> *********
> ```

---

#### Step 2 — Tambah Spasi Pakai `.repeat()`

Tambahkan variabel `space` dan gabungkan di depan `star`:

```javascript
const piramida = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    let space = ' '.repeat(num - row);
    let star = '*'.repeat(2 * row - 1);

    pattern += space + star + '\n';
  }

  return pattern;
};
```

> 📌 **Hasil:** Piramida sudah terbentuk! ✅

---

#### Step 3 — Terapkan Template Literals (Final V2)

Ganti penggabungan `+` dengan template literals agar lebih rapi:

```javascript
// ✅ VERSI 2 — Single Loop + .repeat() + Template Literals
const piramida = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    let space = ' '.repeat(num - row);
    let star = '*'.repeat(2 * row - 1);

    pattern += `${space}${star}\n`;
  }

  return pattern;
};
```

> [!TIP]
> 💡 **Perbandingan penggabungan string:**
> ```javascript
> // Cara 1: Operator + (konkatenasi)
> pattern += space + star + '\n';
>
> // Cara 2: Template Literals (backtick)
> pattern += `${space}${star}\n`;
> ```
> Keduanya menghasilkan output **identik**. Template literals lebih disukai karena:
> - Tidak perlu banyak tanda `+`
> - Escape character `\n` langsung terlihat jelas sebagai bagian dari string
> - Mudah ditambahkan komponen baru tanpa mengacaukan urutan `+`

---

### Versi Ultra-Ringkas (Opsional)

Bahkan variabel `space` dan `star` bisa digabung langsung tanpa perantara:

```javascript
// ✅ VERSI 2B — Ultra-Ringkas (Tanpa Variabel Perantara)
const piramida = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += ' '.repeat(num - row) + '*'.repeat(2 * row - 1) + '\n';
  }

  return pattern;
};
```

> [!TIP]
> 💡 **Readability vs Conciseness:**
> - Jika rumusnya sederhana (seperti piramida ini) → versi ringkas sudah cukup oke.
> - Jika rumusnya mulai rumit (misal 3+ komponen) → lebih baik dipisah ke variabel agar kodenya "bercerita".

### 🔍 V1 vs V2 — Apa yang Berubah?

| Komponen | V1 (Nested Loop) | V2 (`.repeat()`) |
|----------|:-----------------:|:-----------------:|
| Spasi | `for (let space = 1; space <= num - row; space++) { pattern += ' '; }` | `' '.repeat(num - row)` |
| Bintang | `for (let star = 1; star <= 2 * row - 1; star++) { pattern += '*'; }` | `'*'.repeat(2 * row - 1)` |
| Jumlah baris kode | ~10 baris | ~5 baris |
| Rumus | **Sama persis** | **Sama persis** |

> 📌 *Perhatikan: rumusnya **tidak berubah sama sekali**. Yang berubah hanya "siapa yang mengerjakan pengulangan" — dari loop manual menjadi method bawaan.*

---

<a name="bonus-1-indexed-vs-0-indexed"></a>

## 🔢 Bonus: 1-Indexed vs 0-Indexed

Semua solusi di atas menggunakan loop yang dimulai dari `row = 1` (*1-indexed*). Tapi bagaimana jika kita memulai dari `row = 0` (*0-indexed*) seperti kebiasaan umum di JavaScript (misalnya saat mengakses array)?

### 📊 Perbandingan Nilai `row` per Baris (`num = 5`)

| Baris Fisik | `row` (1-Indexed) | `row` (0-Indexed) | Target Spasi | Target Bintang |
|:---:|:---:|:---:|:---:|:---:|
| Puncak | 1 | 0 | 4 | 1 |
| Baris 2 | 2 | 1 | 3 | 3 |
| Baris 3 | 3 | 2 | 2 | 5 |
| Baris 4 | 4 | 3 | 1 | 7 |
| Dasar | 5 | 4 | 0 | 9 |

> 📌 *Target spasi dan bintang **tidak berubah** — yang berubah hanya nilai `row`. Karena selisih 1, rumusnya harus disesuaikan.*

### 🔑 Perbandingan Rumus

| Elemen | 1-Indexed (`row` mulai 1) | 0-Indexed (`row` mulai 0) | Kenapa berubah? |
|:---|:---|:---|:---|
| **Rumus Spasi** | `num - row` | `num - row - 1` | `row = 0` → `num - 0 = 5` (kelebihan 1), maka perlu `- 1` |
| **Rumus Bintang** | `(2 * row) - 1` | `(2 * row) + 1` | `row = 0` → `(2*0) - 1 = -1` (negatif!), maka perlu `+ 1` |

### 💻 Kode 0-Indexed — Nested Loop (V3)

```javascript
const piramida = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let space = 0; space < num - row - 1; space++) {
      pattern += ' ';
    }

    for (let star = 0; star < (2 * row) + 1; star++) {
      pattern += '*';
    }

    pattern += '\n';
  }

  return pattern;
};
```

### 💻 Kode 0-Indexed — `.repeat()` (V3B)

```javascript
const piramida = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    pattern += ' '.repeat(num - row - 1) + '*'.repeat((2 * row) + 1) + '\n';
  }

  return pattern;
};
```

> [!TIP]
> 💡 **Mana yang lebih baik?**
> Untuk kasus *pattern printing*, **1-indexed lebih intuitif** karena rumus matematikanya lebih alami (`num - row` dan `2*row - 1`). Tidak perlu `+1` atau `-1` ekstra di kepala. Gunakan 0-indexed hanya jika konteks kodenya memang mengharuskan (misalnya saat mengakses index array).

---

<a name="perbandingan-semua-versi"></a>

## 📊 Perbandingan Semua Versi

| Aspek | V1 — Nested Loop 🔄 | V2 — `.repeat()` ⚡ |
|-------|:-------------------:|:-------------------:|
| Jumlah loop | 3 (1 luar + 2 nested) | 1 |
| Readability | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Performa | 🟡 Standar | 🟢 Lebih cepat |
| Cocok untuk belajar | ✅ Sangat cocok | ✅ Cocok |
| Cocok untuk production | 🟡 Verbose | ✅ Sangat cocok |
| Memenuhi syarat soal | ✅ Ya (wajib nested loop) | ❌ Tidak (tanpa nested loop) |

> [!TIP]
> 🏆 **Kapan pakai versi mana?**
> - **V1** → Saat belajar atau soal **mewajibkan** nested loop
> - **V2** → Saat butuh kode yang ringkas, cepat, dan mudah dibaca di *real project*
> - **V3** → Saat konteks kode mengharuskan *0-indexed* (lihat [Bonus: 1-Indexed vs 0-Indexed](#bonus-1-indexed-vs-0-indexed))

---

<a name="naming-convention"></a>

## 🏷️ Naming Convention

### Tabel Perbandingan

| Peran Variabel | ❌ Kurang Baik | ✅ Direkomendasikan | Alasan |
|----------------|:--------------:|:-------------------:|--------|
| Penampung Pola | `res`, `hasil` | `pattern` | Lebih spesifik — kita membuat **pola visual** |
| Loop Baris (Luar) | `i`, `x` | `row` | Langsung jelas: mengontrol **baris** ke bawah |
| Loop Spasi (Dalam 1) | `j`, `s` | `space` | Langsung jelas: mengontrol **spasi pendorong** |
| Loop Bintang (Dalam 2) | `k`, `b` | `star` | Langsung jelas: mengontrol **bintang pembentuk** |

> [!NOTE]
> 💡 **Bolehkah inner loop pakai nama yang sama (`j`)?**
> **Ya, boleh** — selama kedua loop berada di tingkat yang **sejajar** (berurutan, bukan nested di dalam satu sama lain). Saat loop pertama selesai, variabel `j`-nya "dihancurkan" dan loop kedua membuat `j` baru. Tapi dengan nama `space` dan `star`, kode jadi jauh lebih mudah dibaca tanpa perlu berpikir soal scope.

### Mulai dari `0` atau `1`?

| Situasi | Rekomendasi | Alasan |
|---------|:-----------:|--------|
| **Loop Luar** (`row`) | Mulai dari `1` | Agar rumus matematika langsung cocok: `num - row` dan `2*row - 1` |
| **Loop Dalam** (`space`/`star`) | Mulai dari `0` **atau** `1` | Keduanya valid. Mulai dari `1` dengan `<=` menjaga **konsistensi** dengan loop luar |

> 📌 Yang penting adalah **konsistensi** — pilih satu gaya dan terapkan di seluruh kode.

---

<a name="gotchas--peringatan"></a>

## ⚠️ Gotchas & Peringatan

> [!WARNING]
> 🐛 **Jebakan 1: Urutan loop terbalik — spasi di belakang bintang**
>
> Jika kamu mencetak **bintang duluan** baru **spasi**, maka spasinya akan tersembunyi di sebelah kanan (tidak terlihat):
> ```
> ❌ [Bintang][Spasi][Spasi]  →  *····   (spasi di kanan, tidak terlihat)
> ✅ [Spasi][Spasi][Bintang]  →  ····*   (spasi dorong bintang ke kanan)
> ```
> **Ingat:** Komputer mencetak dari **kiri ke kanan**. Spasi harus di depan!

> [!WARNING]
> 🐛 **Jebakan 2: Loop dimulai dari `0` tapi rumus pakai `row` langsung**
>
> Jika `row` dimulai dari `0` tapi rumus **tidak disesuaikan**, maka:
> - `2 * row - 1` → `2 * 0 - 1` = **-1** ❌ (bintang negatif!)
> - `num - row` → `5 - 0` = **5** (spasi terlalu banyak!)
>
> **Solusi:** Mulai `row` dari `1`, atau sesuaikan rumus menjadi `(2 * row) + 1` (bintang) dan `num - row - 1` (spasi). Lihat bagian [Bonus: 1-Indexed vs 0-Indexed](#bonus-1-indexed-vs-0-indexed) untuk detail lengkap.

> [!CAUTION]
> 🔴 **Jebakan 3: Lupa `'\n'` di akhir baris**
>
> Tanpa `pattern += '\n'` setelah kedua nested loop, semua karakter menempel jadi satu baris panjang:
> ```
> ❌ ····*···***··*****·*******·*********   (tanpa \n)
> ✅     *       (dengan \n)
>       ***
>      *****
>     *******
>    *********
> ```

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **13 Mei 2026** dan diperbarui pada **15 Mei 2026** berdasarkan sesi mentoring langsung bersama **Google Antigravity**. Pola Piramida adalah **level-up** pertama dari Pola Persegi — di sini kamu mulai belajar "mengkoordinasikan" 2 nested loop sekaligus (spasi + bintang). Konsep ini akan sangat berguna untuk pola yang lebih kompleks seperti **Diamond Pattern** yang membutahkan piramida atas + piramida terbalik.
