# ⚡ Solusi 1 Loop — Pendekatan Efisiensi Maksimal

### ✨ _Menggabungkan dua piramida menjadi satu loop tunggal dengan trik matematika_

> 🎯 **Tujuan:** Memahami dua cara untuk membuat berlian dengan **hanya 1 loop utama**:
> V3 (Math.abs + `.repeat()`) dan V4 (Ternary + Nested Loop).

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 💡 | [Konsep Dasar: Angka Cermin](#konsep-dasar) | Bagaimana membuat deret naik-turun dalam 1 loop |
| 🗺️ | [Blueprint V3](#blueprint-v3) | Kerangka kode 1 Loop + Math.abs |
| 📝 | [Algoritma V3 Step-by-Step](#algoritma-v3) | Penjelasan "Kenapa" di setiap langkah V3 |
| 🪜 | [V3: Pendekatan Bertahap (Math.abs + Repeat)](#v3-pendekatan-bertahap) | Membangun kode V3 dari nol |
| 🗺️ | [Blueprint V4](#blueprint-v4) | Kerangka kode 1 Loop + Ternary |
| 📖 | [Kamus Variabel V4](#kamus-variabel-v4) | Tabel nama variabel khusus V4 |
| 📝 | [Algoritma V4 Step-by-Step](#algoritma-v4) | Penjelasan "Kenapa" di setiap langkah V4 |
| 🪜 | [V4: Pendekatan Bertahap (Ternary + Nested Loop)](#v4-pendekatan-bertahap) | Membangun kode V4 dari nol |
| ⚖️ | [Perbandingan Math.abs vs Ternary](#perbandingan-math-abs-vs-ternary) | Perbedaan mental model kedua pendekatan |

---

<a name="konsep-dasar"></a>
## 💡 Konsep Dasar: Angka Cermin

### Masalah yang Ingin Dipecahkan

Di [Solusi 2 Loop](./2-Solusi-2-Loop.md), kita butuh **2 loop terpisah** karena:
- Loop 1: `row` naik dari `1 → 5` (piramida atas)
- Loop 2: `row` turun dari `4 → 1` (piramida bawah)

**Pertanyaan:** Bisakah kita membuat deret `1, 2, 3, 4, 5, 4, 3, 2, 1` dalam **satu loop saja**?

### Jawabannya: YA! Menggunakan "Jarak dari Puncak"

Ada dua cara untuk menghasilkan deret cermin tersebut:

#### Cara 1: `Math.abs` (Nilai Mutlak / Jarak)

Rumus: **`currentRow = num - Math.abs(num - i)`**

**Mental Model:** Bayangkan kamu berdiri di puncak bukit (`num`). Setiap langkah menjauh dari tengah (ke kiri atau kanan), posisimu semakin rendah. `Math.abs` menghitung **seberapa jauh kamu dari tengah**, tidak peduli arahnya.

**Tracing untuk `num = 3`, loop `i` dari 1 sampai 5:**

| `i` | `num - i` | `Math.abs(num - i)` | `num - Math.abs(num - i)` | Hasil |
|:---:|:---:|:---:|:---:|:---:|
| 1 | `3 - 1 = 2` | 2 | `3 - 2` | **1** |
| 2 | `3 - 2 = 1` | 1 | `3 - 1` | **2** |
| 3 | `3 - 3 = 0` | 0 | `3 - 0` | **3** ← Puncak! |
| 4 | `3 - 4 = -1` | 1 | `3 - 1` | **2** |
| 5 | `3 - 5 = -2` | 2 | `3 - 2` | **1** |

Hasil: `1, 2, 3, 2, 1` ✅

#### Cara 2: Ternary `? :` (Kondisional)

Rumus: **`level = i <= num ? i : num * 2 - i`**

**Mental Model:** "Kalau masih di bagian atas, ambil `i` langsung. Kalau sudah lewat puncak, hitung mundur."

**Tracing untuk `num = 3`, loop `i` dari 1 sampai 5:**

| `i` | `i <= num`? | Rumus yang Dipakai | Hasil |
|:---:|:---:|:---:|:---:|
| 1 | ✅ Ya | `i` = 1 | **1** |
| 2 | ✅ Ya | `i` = 2 | **2** |
| 3 | ✅ Ya | `i` = 3 | **3** ← Puncak! |
| 4 | ❌ Tidak | `6 - 4` = 2 | **2** |
| 5 | ❌ Tidak | `6 - 5` = 1 | **1** |

Hasil: `1, 2, 3, 2, 1` ✅

> [!IMPORTANT]
> 🔔 Kedua cara menghasilkan deret yang **identik**. Perbedaannya hanya di **cara berpikir**: Math.abs = matematis (formula), Ternary = logis (kondisional).

---

<a name="blueprint-v3"></a>
## 🗺️ Blueprint V3

Mental Model: **"Satu Jalan Naik-Turun"** — loop berjalan dari ujung ke ujung, rumus otomatis menyesuaikan.

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Satu Jalan Naik-Turun)

const berlian = (num) => {
  let pattern = '';                                    // [KANVAS]

  for (let i = 1; i <= num * 2 - 1; i++) {             // [LOOP TUNGGAL] → semua baris
    let currentRow = num - Math.abs(num - i);          //   [CERMIN] → hitung "baris virtual"
    pattern += ' '.repeat(...) + '*'.repeat(...) + '\n'; //   [CETAK] → spasi + bintang + newline
  }

  return pattern;                                      // [KEMBALIKAN]
};
```

### Kamus Variabel V3

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|:---|:---|:---|:---|
| Penampung Akhir | `pattern` | `result`, `res` | Kita mengembalikan pola |
| Loop Tunggal | `i` | `x`, `a` | Counter sederhana (hanya 1 level, jadi `i` boleh) |
| Baris Virtual | `currentRow` | `row`, `r` | Membedakan dari `i` — ini hasil kalkulasi, bukan counter loop |

> [!NOTE]
> 💡 Di V3, kita menggunakan `i` (bukan `row`) untuk counter loop karena `i` di sini bukan merepresentasikan "baris ke-berapa" secara langsung. Variabel `currentRow` yang memegang peran sebagai "baris virtual" hasil kalkulasi.

---

<a name="algoritma-v3"></a>
## 📝 Algoritma V3 Step-by-Step

### 1. **Inisialisasi Kanvas `[VARIABEL]`**
- Buat string kosong `pattern`.

### 2. **Loop Tunggal `[FOR LOOP]`** (Iterasi `i` dari 1 sampai `num * 2 - 1`):

- *(Kenapa `num * 2 - 1`? Karena total baris berlian selalu `(num × 2) - 1`. Contoh: num=5 → 9 baris.)*

### 3. **Hitung Baris Virtual `[KALKULASI]`**: `currentRow = num - Math.abs(num - i)`

- *(Kenapa pakai Math.abs? Karena kita butuh "jarak dari puncak" yang selalu positif. Saat `i` melewati titik tengah, `num - i` menjadi negatif, tapi `Math.abs` membuatnya positif kembali — sehingga angkanya "memantul" turun.)*
- *(Contoh num=5, i=7: `5 - Math.abs(5-7)` = `5 - 2` = 3 → baris ke-3 lagi, sama seperti saat naik!)*

### 4. **Cetak Satu Baris `[STRING CONCATENATION]`**: Gabungkan spasi + bintang + newline

- **Spasi:** `' '.repeat(num - currentRow)` *(Rumus sama seperti V1/V2)*
- **Bintang:** `'*'.repeat(2 * currentRow - 1)` *(Rumus sama seperti V1/V2)*
- **Newline:** `'\n'`

### 5. **Kembalikan Hasil `[RETURN]`**

---

<a name="v3-pendekatan-bertahap"></a>
## 🪜 V3: Pendekatan Bertahap (Math.abs + Repeat)

### Step 1: Buat Loop dan Cek Angka `currentRow`

**Target (console.log):**
```
1
2
3
4
5
4
3
2
1
```

**Kode:**
```javascript
const berlian = (num) => {
  let pattern = '';

  for (let i = 1; i <= num * 2 - 1; i++) {
    let currentRow = num - Math.abs(num - i);

    console.log(currentRow);  // Cek dulu: apakah deretnya benar?
  }

  return pattern;
};

berlian(5);
```

> 💡 **Fokus di step ini:** Pastikan deret angkanya sudah `1, 2, 3, 4, 5, 4, 3, 2, 1` sebelum lanjut.

---

### Step 2: Ganti `console.log` dengan Bintang

**Target:**
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

**Kode:**
```javascript
const berlian = (num) => {
  let pattern = '';

  for (let i = 1; i <= num * 2 - 1; i++) {
    let currentRow = num - Math.abs(num - i);

    pattern += '*'.repeat(2 * currentRow - 1);
    pattern += '\n';
  }

  return pattern;
};
```

> 💡 **Fokus di step ini:** Bentuk berlian sudah terlihat, tapi masih "rata kiri".

---

### Step 3: Tambahkan Spasi Pendorong

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

**Kode V3 Final:**
```javascript
const berlian = (num) => {
  let pattern = '';

  for (let i = 1; i <= num * 2 - 1; i++) {
    let currentRow = num - Math.abs(num - i);

    pattern +=
      ' '.repeat(num - currentRow) + '*'.repeat(2 * currentRow - 1) + '\n';
  }

  return pattern;
};

console.log(berlian(5));
```

> [!TIP]
> 🏆 Ini adalah versi **paling ringkas dan efisien**: hanya **1 loop**, **0 nested loop**, dan semua logika cermin ditangani oleh satu baris rumus `Math.abs`.

---

<a name="blueprint-v4"></a>
## 🗺️ Blueprint V4

Mental Model: **"Satu Jalan Naik-Turun + Kerja Manual"** — loop luar efisien, isi dalam masih detail.

```javascript
// 🗺️ KERANGKA KODE (Mental Model: 1 Loop + Ternary + Nested Loop)

function berlian(num) {
  let pattern = '';                                    // [KANVAS]

  for (let i = 1; i <= num * 2 - 1; i++) {             // [LOOP TUNGGAL] → semua baris
    let level = i <= num ? i : num * 2 - i;            //   [CERMIN] → ternary operator
    for (let space = 1; ...) { ... }                   //   [NESTED 1] → cetak spasi
    for (let star = 1; ...) { ... }                    //   [NESTED 2] → cetak bintang
    pattern += '\n';                                   //   [PINDAH BARIS]
  }

  return pattern;                                      // [KEMBALIKAN]
}
```

> [!NOTE]
> 💡 Perhatikan perbedaannya dengan Blueprint V3: V4 masih punya **nested loop** di dalam, sedangkan V3 menggantinya dengan `.repeat()`. Tapi loop **luar**-nya sama-sama hanya 1.

---

<a name="kamus-variabel-v4"></a>
## 📖 Kamus Variabel V4

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|:---|:---|:---|:---|
| Penampung Akhir | `pattern` | `result`, `res` | Kita mengembalikan pola |
| Loop Tunggal | `i` | `x`, `a` | Counter sederhana (ada nested di dalam, tapi `i` sudah cukup jelas di level luar) |
| Baris Virtual | `level` | `l`, `lv`, `row` | Hasil kalkulasi ternary — nama `level` menggambarkan "tingkat" berlian |
| Nested Loop Spasi | `space` | `j`, `s` | Penghitung spasi pendorong |
| Nested Loop Bintang | `star` | `k`, `b` | Penghitung bintang pembentuk |

> [!IMPORTANT]
> 🔔 Perhatikan perbedaan nama variabel cermin antara V3 dan V4:
> - V3 → `currentRow` (karena ini hasil kalkulasi `Math.abs`, terasa seperti "baris saat ini")
> - V4 → `level` (karena ini hasil percabangan `if-else`, terasa seperti "tingkat/level" berlian)
>
> Keduanya boleh — yang penting **konsisten** di dalam satu versi.

---

<a name="algoritma-v4"></a>
## 📝 Algoritma V4 Step-by-Step

### 1. **Inisialisasi Kanvas `[VARIABEL]`**
- Buat string kosong `pattern`.

### 2. **Loop Tunggal `[FOR LOOP]`** (Iterasi `i` dari 1 sampai `num * 2 - 1`):

- *(Kenapa `num * 2 - 1`? Karena total baris berlian selalu `(num × 2) - 1`. Sama seperti V3.)*

### 3. **Tentukan Level dengan Ternary `[KALKULASI]`**: `level = i <= num ? i : num * 2 - i`

- *(Kenapa pakai ternary? Karena kita butuh logika percabangan: "Kalau masih naik, ambil `i` langsung. Kalau sudah turun, hitung mundur.")*
- *(Contoh num=5, i=7: `7 <= 5`? Tidak → `10 - 7` = 3 → level = 3, sama seperti baris ke-3 saat naik!)*

### 4. **Cetak Spasi `[NESTED LOOP 1]`**: Loop dari 1 sampai `num - level`

- *(Kenapa masih pakai loop manual? Karena V4 sengaja tidak menggunakan `.repeat()` — ini cocok untuk yang belum familiar dengan built-in method.)*
- *(Contoh num=5, level=3: `5 - 3` = 2 spasi.)*

### 5. **Cetak Bintang `[NESTED LOOP 2]`**: Loop dari 1 sampai `2 * level - 1`

- *(Rumus yang sama dengan semua versi lain. Contoh level=3: `2×3-1` = 5 bintang.)*

### 6. **Pindah Baris + Kembalikan Hasil**

---

<a name="v4-pendekatan-bertahap"></a>
## 🪜 V4: Pendekatan Bertahap (Ternary + Nested Loop)

> 💡 V4 adalah **"jembatan"** antara V1 dan V3: logika loop luarnya sudah efisien (1 loop), tapi isi dalamnya masih manual (nested loop).

### Apa itu Ternary Operator?

Ternary adalah cara singkat menulis `if-else` dalam satu baris:

```javascript
// if-else biasa:
let level;
if (i <= num) {
  level = i;
} else {
  level = num * 2 - i;
}

// Ternary (sama persis):
let level = i <= num ? i : num * 2 - i;
//          ^^^^^^^^   ^   ^^^^^^^^^^^
//          kondisi   YA      TIDAK
```

### Step 1: Buat Loop dan Cek Deret `level`

**Target (console.log):**
```
1
2
3
4
5
4
3
2
1
```

**Kode:**
```javascript
function berlian(num) {
  let pattern = '';

  for (let i = 1; i <= num * 2 - 1; i++) {
    let level = i <= num ? i : num * 2 - i;

    console.log(level);  // Cek dulu: apakah deretnya benar?
  }

  return pattern;
}

berlian(5);
```

> 💡 **Fokus di step ini:** Pastikan deret angkanya sudah `1, 2, 3, 4, 5, 4, 3, 2, 1`.

---

### Step 2: Ganti `console.log` dengan Bintang (Tanpa Spasi)

**Target:**
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

**Kode:**
```javascript
function berlian(num) {
  let pattern = '';

  for (let i = 1; i <= num * 2 - 1; i++) {
    let level = i <= num ? i : num * 2 - i;

    for (let star = 1; star <= 2 * level - 1; star++) {
      pattern += '*';
    }

    pattern += '\n';
  }

  return pattern;
}
```

> 💡 **Fokus di step ini:** Bentuk berlian sudah terlihat, tapi masih "rata kiri".

---

### Step 3: Tambahkan Spasi Pendorong

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

**Kode V4 Final:**
```javascript
function berlian(num) {
  let pattern = '';

  for (let i = 1; i <= num * 2 - 1; i++) {
    let level = i <= num ? i : num * 2 - i;

    // Spasi pendorong
    for (let space = 1; space <= num - level; space++) {
      pattern += ' ';
    }

    // Bintang pembentuk
    for (let star = 1; star <= 2 * level - 1; star++) {
      pattern += '*';
    }

    pattern += '\n';
  }

  return pattern;
}

console.log(berlian(5));
```

> [!TIP]
> 🏆 V4 cocok sebagai **jembatan belajar**: kamu sudah memahami trik 1 loop (dari konsep cermin), tapi belum perlu menghafal `.repeat()`. Nested loop di dalamnya tetap menggunakan logika yang sudah familiar dari V1.

---

<a name="perbandingan-math-abs-vs-ternary"></a>
## ⚖️ Perbandingan Math.abs vs Ternary

| Aspek | V3 — `Math.abs` | V4 — Ternary `? :` |
|:---|:---|:---|
| **Gaya Berpikir** | Matematis (Formula) | Logis (Kondisional) |
| **Rumus Cermin** | `num - Math.abs(num - i)` | `i <= num ? i : num * 2 - i` |
| **Cetak Karakter** | `.repeat()` (1 baris) | Nested Loop (3 baris) |
| **Total Loop** | **1 loop, 0 nested** | **1 loop, 2 nested** |
| **Keterbacaan** | Butuh paham nilai mutlak | Butuh paham if-else singkat |
| **Hasil** | ✅ Identik | ✅ Identik |

### 💡 Tips Mengingat Rumus `Math.abs`

Gunakan mental model **"Jarak dari Puncak"**:

```
Puncak (num)  ──────────────── titik tertinggi
  │
  │  Math.abs(num - i)  =  jarak dari puncak
  │
  ▼
currentRow = Puncak - Jarak  =  semakin jauh, semakin kecil
```

> [!TIP]
> 🏆 **Mana yang lebih baik?** Tidak ada yang "lebih baik" secara absolut. Pilih yang paling **mudah kamu bayangkan di kepala**. Kalau kamu suka matematika → `Math.abs`. Kalau kamu lebih suka logika percabangan → Ternary.

---

## ➡️ Selanjutnya

Sudah paham semua 4 versi? Lanjut ke ringkasan besar:
- 📄 [4-Perbandingan-Naming-Gotcha.md](./4-Perbandingan-Naming-Gotcha.md) — Tabel perbandingan semua versi, naming convention, dan gotchas

---

> 🎯 *"Programmer sejati bukan yang hafal rumus, tapi yang bisa memilih pendekatan terbaik untuk situasi yang tepat."*
