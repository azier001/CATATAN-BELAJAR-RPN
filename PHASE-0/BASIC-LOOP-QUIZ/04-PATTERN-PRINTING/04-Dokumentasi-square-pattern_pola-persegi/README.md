# ⬛ Dokumentasi — Pola Persegi (Square Pattern)

### ✨ _Memahami nested loop dari pola paling fundamental: kotak bintang_

> 🎯 **Tujuan:** Mampu membangun pola persegi menggunakan nested loop, memahami mental model baris × kolom, dan mengenal evolusi solusi dari loop manual hingga pendekatan fungsional.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Latar Belakang](#latar-belakang) | Kenapa pola persegi jadi fondasi penting |
| 🔍 | [Visualisasi & Analisis Pola](#visualisasi--analisis-pola) | Tabel breakdown untuk menemukan rumus |
| 🧠 | [Algoritma Tahan Lupa](#algoritma-tahan-lupa) | Langkah-langkah logika dengan penjelasan "Kenapa" |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint--kamus-variabel) | Kerangka kode + pemetaan variabel |
| 👣 | [Pendekatan Bertahap (V1)](#pendekatan-bertahap-v1--nested-loop) | Membangun solusi step-by-step |
| 🔄 | [Evolusi Solusi (V2 & V3)](#evolusi-solusi) | Alternatif yang lebih ringkas dan fungsional |
| 📊 | [Perbandingan Semua Versi](#perbandingan-semua-versi) | Tabel komparasi 3 pendekatan |
| 🏷️ | [Naming Convention](#naming-convention) | Best practice penamaan variabel |
| ⚠️ | [Gotchas & Peringatan](#gotchas--peringatan) | Jebakan umum yang harus dihindari |

---

<a name="latar-belakang"></a>

## 📖 Latar Belakang

Pola Persegi (*Square Pattern*) adalah challenge **paling dasar** dalam dunia *pattern printing*. Meskipun terlihat sederhana, challenge ini adalah **gerbang masuk** untuk memahami konsep **nested loop** — fondasi yang akan terus digunakan di pola-pola yang lebih kompleks seperti segitiga, berlian (*diamond*), dan pola X.

> [!TIP]
> 💡 **Analogi Mudah Dipahami**
>
> | | Menulis di Papan Tulis 📝 | Nested Loop 💻 |
> |---|---|---|
> | **Baris** | Tangan bergerak dari kiri ke kanan menulis huruf | Loop dalam (`col`) mencetak bintang ke samping |
> | **Pindah baris** | Tangan turun ke baris berikutnya | Loop luar (`row`) menambah `\n` (enter) |
> | **Selesai** | Semua baris terisi tulisan | Semua iterasi loop luar selesai |

### 💡 Jadi, Apa Tantangannya?

Soal ini **mewajibkan** penggunaan nested loop. Artinya kita harus memahami bagaimana dua buah loop bekerja sama: satu mengontrol **baris ke bawah** (sumbu Y), satu lagi mengontrol **kolom ke samping** (sumbu X).

---

<a name="visualisasi--analisis-pola"></a>

## 🔍 Visualisasi & Analisis Pola

Sebelum menulis kode, kita **wajib** menganalisis pola yang diminta terlebih dahulu. Berikut adalah soal yang diberikan:

```javascript
// Wajib menggunakan nested loop
function persegi(num) {
  let pattern = '';
  // code here
  return pattern;
}

console.log(persegi(4));
/*
****
****
****
****
*/
```

### 📊 Tabel Breakdown Pola (`num = 4`)

| Baris ke- | Jumlah Bintang | Logika |
|:---------:|:--------------:|--------|
| 1 | 4 | Sebanyak `num` |
| 2 | 4 | Sebanyak `num` |
| 3 | 4 | Sebanyak `num` |
| 4 | 4 | Sebanyak `num` |

### 🔑 Rumus yang Ditemukan

```
📐 Jumlah baris   = num
⭐ Bintang/baris  = num
🧮 Total bintang  = num × num
```

> [!IMPORTANT]
> 🔔 **Insight kunci:** Jumlah bintang per baris **selalu konstan** (sama dengan `num`), dan jumlah baris juga **sama dengan `num`**. Inilah yang membuat polanya berbentuk **persegi sempurna**.

---

<a name="algoritma-tahan-lupa"></a>

## 🧠 Algoritma Tahan Lupa

Setiap langkah di bawah ini menjelaskan **"Kenapa"** di balik logikanya, bukan sekadar rumus.

> 1. **Menyiapkan Kanvas `[VARIABEL]`**:
>    - Buat variabel `pattern` bertipe string kosong `''`. *(Kenapa string kosong? Karena kita akan menempelkan karakter bintang dan enter satu per satu ke string ini, seperti melukis di kanvas putih yang masih kosong).*

> 2. **Mencetak Baris ke Bawah `[LOOP LUAR]`** (Iterasi `row` dari 0 sampai `num - 1`):
>    - Loop ini berjalan sebanyak `num` kali. *(Kenapa? Karena pola persegi memiliki jumlah baris yang sama persis dengan nilai `num`. Contoh `num=4` → 4 baris, jadi loop berjalan 4 kali).*

> 3. **Mencetak Bintang ke Samping `[LOOP DALAM / NESTED]`** (Iterasi `col` dari 0 sampai `num - 1`):
>    - Di dalam setiap baris, cetak bintang `*` sebanyak `num` kali. *(Kenapa? Karena setiap baris pada pola persegi memiliki jumlah kolom yang sama dengan `num`. Contoh `num=4`, baris ke-1 → 4 bintang, baris ke-3 → tetap 4 bintang).*

> 4. **Pindah Baris `[NEWLINE]`**:
>    - Setelah loop dalam selesai mencetak semua bintang untuk satu baris, tambahkan `'\n'` (karakter enter). *(Kenapa? Tanpa `\n`, semua bintang akan menempel jadi satu baris panjang `****************` tanpa pemisah).*

> 5. **Kembalikan Hasil `[RETURN]`**:
>    - Setelah loop luar selesai, kembalikan variabel `pattern` yang sudah berisi seluruh pola persegi.

---

<a name="blueprint--kamus-variabel"></a>

## 🗺️ Blueprint & Kamus Variabel

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|----------------|-------------------|--------|
| Penampung Pola | `pattern` | `result`, `res`, `str` | Kita mengembalikan **pola visual**, bukan hasil hitungan |
| Loop Baris (Luar) | `row` | `i`, `x`, `a` | Merepresentasikan **baris ke-berapa** |
| Loop Kolom (Dalam) | `col` atau `star` | `j`, `y`, `b` | Merepresentasikan **kolom ke-berapa** atau bintang |

### 🏗️ Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Baris × Kolom = Persegi)

function persegi(num) {
  let pattern = '';                            // [KANVAS] penampung pola

  for (let row = 0; ...) {                     // [LOOP LUAR] → baris ke bawah
    for (let col = 0; ...) {                   //   [LOOP DALAM] → bintang ke samping
      pattern += '*';                          //   Tempel 1 bintang
    }
    pattern += '\n';                           //   [PINDAH BARIS] setelah 1 baris penuh
  }

  return pattern;                              // [RETURN] kembalikan hasil akhir
}
```

---

<a name="pendekatan-bertahap-v1--nested-loop"></a>

## 👣 Pendekatan Bertahap (V1 — Nested Loop)

Solusi dibangun secara bertahap, **bukan langsung jadi**.

### Step 1 — Loop Luar Saja (Baris Kosong)

Pertama, kita buat loop yang hanya mencetak **baris kosong** (karakter enter) sebanyak `num` kali:

```javascript
const persegi = (num) => {
  let pattern = '';

  for (let i = 0; i < num; i++) {
    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Hasil:** 4 baris kosong (belum ada bintang).

---

### Step 2 — Tambah Loop Dalam (Bintang)

Tambahkan nested loop **sebelum** `pattern += '\n'` untuk mencetak bintang:

```javascript
const persegi = (num) => {
  let pattern = '';

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Hasil:** Pola persegi sudah terbentuk sempurna! ✅

---

### Step 3 — Terapkan Clean Naming (Final V1)

Ganti nama variabel generik menjadi deskriptif:

```javascript
// ✅ VERSI 1 — Nested Loop (Clean Code)
const persegi = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  return pattern;
};

console.log(persegi(4));
/*
****
****
****
****
*/
```

---

<a name="evolusi-solusi"></a>

## 🔄 Evolusi Solusi

### V2 — Single Loop + `.repeat()`

Jika syarat "wajib nested loop" dicabut, tugas loop dalam (mencetak bintang ke samping) bisa digantikan oleh method bawaan `.repeat()`:

```javascript
// ✅ VERSI 2 — Single Loop + .repeat()
const persegi = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    pattern += '*'.repeat(num) + '\n';
  }

  return pattern;
};
```

> [!NOTE]
> 💡 **Kenapa `.repeat()` bisa menggantikan loop dalam?**
> Karena `'*'.repeat(4)` menghasilkan `'****'` — persis sama seperti hasil loop dalam yang menempelkan bintang satu per satu sebanyak 4 kali. Method bawaan ini biasanya lebih cepat karena dieksekusi di level *engine* JavaScript (C/C++).

---

### V3 — Functional Approach (Tanpa Loop Sama Sekali)

Pendekatan paling modern menggunakan `Array` + `.fill()` + `.join()`:

```javascript
// ✅ VERSI 3 — Functional Approach
const persegi = (num) => {
  if (num <= 0) return '';

  return Array(num).fill('*'.repeat(num)).join('\n');
};
```

**Cara kerja (Contoh `num = 4`):**

| Langkah | Kode | Hasil |
|---------|------|-------|
| 1️⃣ Buat bintang | `'*'.repeat(4)` | `'****'` |
| 2️⃣ Buat array | `Array(4).fill('****')` | `['****', '****', '****', '****']` |
| 3️⃣ Gabungkan | `.join('\n')` | `'****\n****\n****\n****'` |

> [!TIP]
> 💡 **Gaya Deklaratif vs Imperatif:**
>
> | | Imperatif (V1) 🔧 | Deklaratif (V3) 🎯 |
> |---|---|---|
> | **Cara baca** | "Lakukan ini, lalu itu, lalu..." | "Saya mau hasil seperti ini" |
> | **Analogi** | Resep masak langkah per langkah | Pesan makanan di restoran |
> | **Kontrol** | Penuh (kita atur semua) | Serahkan ke method bawaan |

---

<a name="perbandingan-semua-versi"></a>

## 📊 Perbandingan Semua Versi

| Aspek | V1 — Nested Loop 🔄 | V2 — `.repeat()` ⚡ | V3 — Functional 🎯 |
|-------|:-------------------:|:-------------------:|:-------------------:|
| Jumlah loop | 2 (nested) | 1 | 0 |
| Readability | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Performa | 🟡 Standar | 🟢 Lebih cepat | 🟢 Lebih cepat |
| Cocok untuk belajar | ✅ Sangat cocok | ✅ Cocok | 🟡 Perlu paham Array |
| Cocok untuk production | 🟡 Verbose | ✅ Cocok | ✅ Sangat cocok |
| Edge case handling | ❌ Tidak ada | ❌ Tidak ada | ✅ Ada (`num <= 0`) |

> [!TIP]
> 🏆 **Kapan pakai versi mana?**
> - **V1** → Saat belajar atau soal **mewajibkan** nested loop
> - **V2** → Saat butuh kode yang ringkas tapi tetap mudah dibaca
> - **V3** → Saat di *real project* / *production code* yang mengutamakan keterbacaan dan keringkasan

---

<a name="naming-convention"></a>

## 🏷️ Naming Convention

### Tabel Perbandingan

| Peran Variabel | ❌ Kurang Baik | ✅ Direkomendasikan | Alasan |
|----------------|:--------------:|:-------------------:|--------|
| Penampung Pola | `res`, `hasil` | `pattern` | Lebih spesifik — kita membuat **pola visual** |
| Loop Baris (Luar) | `i`, `x` | `row` | Langsung jelas: mengontrol **baris** ke bawah |
| Loop Kolom (Dalam) | `j`, `y` | `col` atau `star` | Langsung jelas: mengontrol **kolom** ke samping |

> [!NOTE]
> 💡 **Kapan `i` dan `j` boleh dipakai?**
> Penggunaan `i` dan `j` masih bisa diterima untuk loop yang **sangat sederhana** dan konteksnya sudah jelas (misalnya iterasi array 1 dimensi). Namun, untuk nested loop di *pattern printing*, nama deskriptif seperti `row` dan `col` **jauh lebih disarankan** karena langsung membangun *mental model* baris-kolom di kepala pembaca.

---

<a name="gotchas--peringatan"></a>

## ⚠️ Gotchas & Peringatan

> [!WARNING]
> 🐛 **Jebakan 1: Lupa `'\n'` di akhir baris**
>
> Tanpa `pattern += '\n'` setelah loop dalam, semua bintang akan menyatu jadi satu baris panjang:
> ```
> ❌ ****************   (tanpa \n)
> ✅ ****              (dengan \n)
>    ****
>    ****
>    ****
> ```

> [!WARNING]
> 🐛 **Jebakan 2: Posisi `'\n'` salah (di dalam loop dalam)**
>
> Jika `'\n'` diletakkan **di dalam** loop dalam (bukan setelahnya), maka setiap bintang akan pindah baris:
> ```
> ❌ *     (enter setelah tiap bintang)
>    *
>    *
>    *
>    ...
> ```

> [!CAUTION]
> 🔴 **Jebakan 3: `Array(-1)` menyebabkan crash!**
>
> Pada Versi 3 (Functional), jika `num` bernilai negatif tanpa perlindungan `if (num <= 0)`, JavaScript akan melempar error:
> ```
> ❌ RangeError: Invalid array length
> ```
> Selalu tambahkan **edge case guard** untuk input yang tidak valid.

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **12 Mei 2026** berdasarkan sesi mentoring langsung bersama **Google Antigravity**. Pola Persegi adalah fondasi paling dasar dalam *pattern printing* — pastikan kamu benar-benar menguasainya sebelum melangkah ke pola yang lebih kompleks seperti segitiga, piramida, dan berlian.
