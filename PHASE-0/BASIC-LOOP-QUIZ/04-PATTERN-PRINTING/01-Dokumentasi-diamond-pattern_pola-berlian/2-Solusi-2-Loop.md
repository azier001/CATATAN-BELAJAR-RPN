# 🔄 Solusi 2 Loop — Pendekatan Dua Piramida

### ✨ _Membangun berlian dengan cara paling intuitif: satu piramida naik, satu piramida turun_

> 🎯 **Tujuan:** Memahami dan membangun solusi berlian menggunakan **2 loop utama terpisah**,
> dari versi paling dasar (V1: Nested Loop) hingga versi yang lebih bersih (V2: `.repeat()`).

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Kamus Variabel V1](#kamus-variabel-v1) | Tabel nama variabel dan perannya (V1) |
| 🗺️ | [Blueprint V1](#blueprint-v1) | Struktur kosong sebelum menulis kode |
| 📝 | [Algoritma V1 Step-by-Step](#algoritma-v1) | Penjelasan "Kenapa" di setiap langkah V1 |
| 🪜 | [V1: Pendekatan Bertahap (Nested Loop)](#v1-pendekatan-bertahap) | Membangun kode V1 step-by-step dari nol |
| 📖 | [Kamus Variabel V2](#kamus-variabel-v2) | Tabel nama variabel dan perannya (V2) |
| 🗺️ | [Blueprint V2](#blueprint-v2) | Struktur kosong untuk versi `.repeat()` |
| 📝 | [Algoritma V2 Step-by-Step](#algoritma-v2) | Penjelasan "Kenapa" di setiap langkah V2 |
| 🪜 | [V2: Pendekatan Bertahap (`.repeat()`)](#v2-pendekatan-bertahap) | Membangun kode V2 step-by-step dari nol |
| ⚖️ | [Perbandingan V1 vs V2](#perbandingan-v1-vs-v2) | Tabel head-to-head kedua pendekatan |

---

<a name="kamus-variabel-v1"></a>
## 📖 Kamus Variabel V1

Sebelum menulis kode, kenali dulu "pemain-pemain" yang akan digunakan:

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|:---|:---|:---|:---|
| Penampung Akhir | `pattern` | `result`, `res`, `p` | Kita mengembalikan **pola**, bukan hitungan |
| Loop Utama (Luar) | `row` | `i`, `x`, `a` | Merepresentasikan **baris ke-berapa** |
| Nested Loop Spasi | `space` | `j`, `s` | Penghitung **spasi pendorong** |
| Nested Loop Bintang | `star` | `k`, `b` | Penghitung **bintang pembentuk** |

> [!IMPORTANT]
> 🔔 Nama variabel yang deskriptif membuat kode bisa dibaca **3 bulan kemudian** tanpa perlu mengingat-ingat. Variabel `i`, `j`, `k` boleh dipakai untuk loop sederhana 1 level, tapi **wajib deskriptif** kalau ada nested loop di dalamnya.

---

<a name="blueprint-v1"></a>
## 🗺️ Blueprint V1

Mental Model: **"Dua Piramida Bertumpuk"** — satu naik, satu turun.

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Dua Piramida Bertumpuk)

function berlian(num) {
  let pattern = '';                              // [KANVAS] penampung hasil akhir

  // === PIRAMIDA ATAS (row naik: 1 → num) ===
  for (let row = 1; row <= num; row++) {         // [LOOP UTAMA 1] → baris ke-berapa
    for (let space = 1; ...) { ... }             //   [NESTED 1] → cetak spasi pendorong
    for (let star = 1; ...) { ... }              //   [NESTED 2] → cetak bintang pembentuk
    pattern += '\n';                             //   [PINDAH BARIS]
  }

  // === PIRAMIDA BAWAH (row turun: num-1 → 1) ===
  for (let row = num - 1; row >= 1; row--) {     // [LOOP UTAMA 2] → baris mundur
    for (let space = 1; ...) { ... }             //   [NESTED 1] → cetak spasi (SAMA)
    for (let star = 1; ...) { ... }              //   [NESTED 2] → cetak bintang (SAMA)
    pattern += '\n';                             //   [PINDAH BARIS]
  }

  return pattern;                                // [KEMBALIKAN] hasil pola
}
```

> [!NOTE]
> 💡 Perhatikan bahwa isi di dalam kedua loop utama **identik** (sama persis). Yang berbeda hanya **arah** loop-nya: naik vs turun.

---

<a name="algoritma-v1"></a>
## 📝 Algoritma V1 Step-by-Step

### 1. **Inisialisasi Kanvas `[VARIABEL]`**
- Buat string kosong `pattern` sebagai penampung hasil akhir.
- *(Kenapa string kosong? Karena kita akan "menempel" karakter satu per satu ke dalamnya, seperti menempel stiker ke kanvas kosong.)*

### 2. **Membentuk Piramida Atas `[FOR LOOP UTAMA 1]`** (Iterasi `row` dari 1 sampai `num`):

- **Spasi Pendorong `[NESTED LOOP 1]`**: Cetak spasi sebanyak `(num - row)`.
  *(Kenapa: Semakin turun baris, spasi makin sedikit — agar bintang "bergeser" ke tengah. Contoh num=5, baris ke-1 → 5-1 = 4 spasi, baris ke-5 → 5-5 = 0 spasi.)*

- **Bintang Ganjil `[NESTED LOOP 2]`**: Cetak bintang sebanyak `(2 × row) - 1`.
  *(Kenapa dikalikan 2 lalu dikurangi 1? Agar hasilnya selalu deret ganjil: 1, 3, 5, 7, 9. Berlian HARUS ganjil agar simetris. Contoh baris ke-3 → 2×3-1 = 5 bintang.)*

- **Pindah Baris `[NEWLINE]`**: Tambahkan `'\n'` di akhir setiap baris.
  *(Kenapa: Tanpa newline, semua karakter akan numpuk di satu baris panjang.)*

### 3. **Membentuk Piramida Bawah `[FOR LOOP UTAMA 2]`** (Iterasi `row` dari `num - 1` turun ke 1):

- Isi di dalamnya **SAMA PERSIS** dengan Loop Utama 1 (spasi + bintang + newline).
- *(Kenapa mulai dari `num - 1`? Karena baris puncak (`row = num`) sudah dicetak oleh loop pertama. Kalau kita mulai dari `num`, baris tengah akan **dobel**!)*

### 4. **Kembalikan Hasil `[RETURN]`**
- `return pattern` — mengembalikan seluruh pola berlian sebagai string.

---

<a name="v1-pendekatan-bertahap"></a>
## 🪜 V1: Pendekatan Bertahap (Nested Loop)

> ✅ **Cocok untuk pemula** — kode ini paling mudah dipahami karena setiap karakter dicetak satu per satu.

### Step 1: Buat Bintang Saja (Tanpa Spasi, Bagian Atas Saja)

**Target:**
```
*
***
*****
*******
*********
```

**Kode:**
```javascript
function berlian(num) {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let star = 1; star <= row * 2 - 1; star++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  return pattern;
}
```

> 💡 **Fokus di step ini:** Pastikan jumlah bintang sudah benar (1, 3, 5, 7, 9) sebelum lanjut.

---

### Step 2: Tambahkan Spasi Pendorong di Depan

**Target:**
```
    *
   ***
  *****
 *******
*********
```

**Kode:**
```javascript
function berlian(num) {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    // Spasi pendorong (HARUS sebelum bintang!)
    for (let space = 1; space <= num - row; space++) {
      pattern += ' ';
    }

    // Bintang pembentuk
    for (let star = 1; star <= row * 2 - 1; star++) {
      pattern += '*';
    }

    pattern += '\n';
  }

  return pattern;
}
```

> ⚠️ **Gotcha: Urutan Penting!** Loop spasi HARUS ditulis **sebelum** loop bintang. Kalau terbalik, spasi akan muncul di belakang bintang (tidak kelihatan) dan piramidanya tetap rata kiri.

---

### Step 3: Tambahkan Bagian Bawah (Cerminan)

**Target Lengkap:**
```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

**Kode V1 Final:**
```javascript
function berlian(num) {
  let pattern = '';

  // === PIRAMIDA ATAS ===
  for (let row = 1; row <= num; row++) {
    for (let space = 1; space <= num - row; space++) {
      pattern += ' ';
    }
    for (let star = 1; star <= row * 2 - 1; star++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  // === PIRAMIDA BAWAH ===
  for (let row = num - 1; row >= 1; row--) {
    for (let space = 1; space <= num - row; space++) {
      pattern += ' ';
    }
    for (let star = 1; star <= row * 2 - 1; star++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  return pattern;
}

console.log(berlian(5));
```

> ⚠️ **Gotcha Kritis:** Loop bawah mulai dari **`num - 1`**, bukan `num`! Jika dimulai dari `num`, baris tengah akan tercetak **dua kali**.

---

<a name="kamus-variabel-v2"></a>
## 📖 Kamus Variabel V2

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|:---|:---|:---|:---|
| Penampung Akhir | `pattern` | `result`, `res`, `p` | Sama seperti V1 |
| Loop Utama (Luar) | `row` | `i`, `x`, `a` | Sama seperti V1 |
| ~~Nested Loop Spasi~~ | — | — | **Tidak ada lagi!** Diganti `.repeat()` |
| ~~Nested Loop Bintang~~ | — | — | **Tidak ada lagi!** Diganti `.repeat()` |

> [!NOTE]
> 💡 Perhatikan bahwa V2 **menghilangkan 2 variabel** (`space` dan `star`) karena nested loop sudah diganti `.repeat()`. Lebih sedikit variabel = lebih sedikit hal yang perlu diingat!

---

<a name="blueprint-v2"></a>
## 🗺️ Blueprint V2

Mental Model: **"Dua Piramida Bertumpuk + Mesin Fotokopi"** — struktur sama dengan V1, tapi isinya lebih ringkas.

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Dua Piramida + Mesin Fotokopi)

const berlian = (num) => {
  let pattern = '';                                          // [KANVAS]

  // === PIRAMIDA ATAS (row naik: 1 → num) ===
  for (let row = 1; row <= num; row++) {                     // [LOOP UTAMA 1]
    pattern += ' '.repeat(...) + '*'.repeat(...) + '\n';     //   [CETAK] spasi + bintang + newline
  }

  // === PIRAMIDA BAWAH (row turun: num-1 → 1) ===
  for (let row = num - 1; row >= 1; row--) {                 // [LOOP UTAMA 2]
    pattern += ' '.repeat(...) + '*'.repeat(...) + '\n';     //   [CETAK] spasi + bintang + newline
  }

  return pattern;                                            // [KEMBALIKAN]
};
```

> [!NOTE]
> 💡 Bandingkan dengan Blueprint V1: setiap loop utama yang tadinya berisi **3 baris** (loop spasi + loop bintang + newline) sekarang menjadi **1 baris** saja!

---

<a name="algoritma-v2"></a>
## 📝 Algoritma V2 Step-by-Step

### 1. **Inisialisasi Kanvas `[VARIABEL]`**
- Buat string kosong `pattern`. *(Sama dengan V1.)*

### 2. **Membentuk Piramida Atas `[FOR LOOP UTAMA 1]`** (Iterasi `row` dari 1 sampai `num`):

- **Cetak Satu Baris Utuh `[STRING CONCATENATION]`**:
  - `' '.repeat(num - row)` — Spasi pendorong. *(Kenapa: Rumus sama dengan V1, tapi sekarang `.repeat()` yang mengurus pengulangannya. Contoh num=5, row=1 → `' '.repeat(4)` = 4 spasi.)*
  - `'*'.repeat(2 * row - 1)` — Bintang pembentuk. *(Kenapa: Rumus ganjil yang sama. Contoh row=3 → `'*'.repeat(5)` = 5 bintang.)*
  - `'\n'` — Pindah baris.

### 3. **Membentuk Piramida Bawah `[FOR LOOP UTAMA 2]`** (Iterasi `row` dari `num - 1` turun ke 1):

- Isi **SAMA PERSIS** dengan Loop Utama 1. *(Kenapa bisa? Karena rumusnya bergantung pada nilai `row`, dan arah loop yang mundur otomatis menghasilkan baris yang mengecil.)*

### 4. **Kembalikan Hasil `[RETURN]`**

---

<a name="v2-pendekatan-bertahap"></a>
## 🪜 V2: Pendekatan Bertahap (`.repeat()`)

> 💡 **Motivasi:** Di V1, kita punya **6 buah `for` loop** (2 loop utama × 3 nested loop). Dengan `.repeat()`, kita bisa menghilangkan semua nested loop dan mengganti setiap blok menjadi **satu baris saja**.

### Apa itu `.repeat()`?

`.repeat()` adalah method bawaan JavaScript yang mengulang sebuah string sejumlah N kali:

```javascript
'*'.repeat(5);   // Hasil: '*****'
' '.repeat(3);   // Hasil: '   '
'ha'.repeat(3);  // Hasil: 'hahaha'
```

**Analogi:** Bayangkan kamu punya mesin fotokopi. Daripada menulis huruf satu per satu (loop manual), kamu tinggal bilang ke mesin: *"Tolong copy karakter ini sebanyak N kali!"*

---

### Step 1: Ganti Loop Bintang Saja Dulu (Bagian Atas)

**Target:**
```
*
***
*****
*******
*********
```

**Kode:**
```javascript
const berlian = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += '*'.repeat(2 * row - 1);
    pattern += '\n';
  }

  return pattern;
};
```

> 💡 **Fokus di step ini:** Bandingkan dengan V1 Step 1 — nested loop bintang yang 3 baris sekarang jadi **1 baris** saja!

---

### Step 2: Tambahkan Spasi Pendorong dengan `.repeat()`

**Target:**
```
    *
   ***
  *****
 *******
*********
```

**Proses Refactoring:**

**Sebelum (V1 — 3 baris):**
```javascript
for (let space = 1; space <= num - row; space++) {
  pattern += ' ';
}
```

**Sesudah (V2 — 1 baris):**
```javascript
pattern += ' '.repeat(num - row);
```

> ⚠️ **Ingat:** Spasi HARUS dicetak **sebelum** bintang! Urutan: spasi → bintang → newline.

**Kode:**
```javascript
const berlian = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += ' '.repeat(num - row) + '*'.repeat(2 * row - 1) + '\n';
  }

  return pattern;
};
```

---

### Step 3: Tambahkan Bagian Bawah

**Target Lengkap:**
```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

**Kode V2 Final:**
```javascript
const berlian = (num) => {
  let pattern = '';

  // === PIRAMIDA ATAS ===
  for (let row = 1; row <= num; row++) {
    pattern += ' '.repeat(num - row) + '*'.repeat(2 * row - 1) + '\n';
  }

  // === PIRAMIDA BAWAH ===
  for (let row = num - 1; row >= 1; row--) {
    pattern += ' '.repeat(num - row) + '*'.repeat(2 * row - 1) + '\n';
  }

  return pattern;
};

console.log(berlian(5));
```

> [!NOTE]
> 💡 **Perubahan Bonus:** V2 juga menggunakan **Arrow Function** (`const berlian = (num) => { ... }`) — ini adalah gaya penulisan modern ES6 yang lebih ringkas. Hasilnya **sama persis** dengan `function berlian(num) { ... }`.

---

<a name="perbandingan-v1-vs-v2"></a>
## ⚖️ Perbandingan V1 vs V2

| Aspek | V1 (Nested Loop) | V2 (`.repeat()`) |
|:---|:---|:---|
| **Jumlah Loop** | 2 utama × 3 nested = **6 loop** | 2 utama saja = **2 loop** |
| **Jumlah Baris Kode** | ~20 baris | ~12 baris |
| **Readability** | Harus baca loop satu per satu | Langsung terlihat "spasi + bintang" |
| **Gaya** | Pre-ES6 (Klasik) | ES6+ (Modern) |
| **Kapan Pakai?** | Saat belajar logika dasar / dilarang pakai built-in | Saat sudah paham & ingin kode ringkas |
| **Performa** | Sama saja | Sama saja |

> [!TIP]
> 🏆 **Kesimpulan:** Untuk **belajar**, mulailah dari V1 agar kamu paham mekanisme loop-nya. Untuk **kerja nyata**, gunakan V2 karena lebih bersih dan mudah di-maintain.

---

## ➡️ Selanjutnya

Sudah paham pendekatan 2 Loop? Lanjut ke level berikutnya:
- 📄 [3-Solusi-1-Loop.md](./3-Solusi-1-Loop.md) — Menggabungkan 2 loop menjadi 1 loop saja

---

> 🎯 *"Kode yang jalan saja tidak cukup — kode juga harus enak dibaca!"*
