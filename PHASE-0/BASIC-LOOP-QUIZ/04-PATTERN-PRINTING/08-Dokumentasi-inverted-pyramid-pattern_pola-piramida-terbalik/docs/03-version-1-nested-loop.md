# 🔁 Versi 1 — Nested Loop (1-Indexed)

### ✨ _Pendekatan paling fundamental: dua nested loop bersarang untuk spasi pendorong dan bintang deret ganjil menurun._

> 🎯 **Tujuan:** Membangun solusi nested loop secara bertahap (step-by-step), memahami setiap baris kode melalui penjelasan "Kenapa" (Algoritma Tahan Lupa), dan menelusuri eksekusi komputer melalui Simulasi Trace.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Profil Versi](#profil) | Ringkasan kapan & kenapa pakai versi ini |
| 🏗️ | [Bangun Kode Bertahap](#step-by-step) | Step 1 → Step 2 → Step 3 → Solusi lengkap |
| 🧠 | [Algoritma Tahan Lupa](#algoritma) | Penjelasan "Kenapa" setiap langkah |
| 🧮 | [Simulasi Trace](#simulasi) | Trace eksekusi dengan angka konkret |
| ⚠️ | [Gotchas & Jebakan Umum](#gotchas) | Peringatan penting saat mengerjakan |
| 🔢 | [Alternatif: 0-Indexed](#zero-indexed) | Versi yang sama dengan loop mulai dari 0 |

> [!NOTE]
> 📂 **Sebelum membaca file ini**, pastikan kamu sudah memahami **rumus inti** dan **blueprint** di [02 — Problem Solving Approach](./02-problem-solving-approach.md). File ini fokus pada **implementasi kode** — bukan proses penemuan rumus.

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | Nested Loop (1-Indexed) |
| 🔢 **Jumlah Loop** | 3 (1 luar + 2 nested) |
| 🧠 **Konsep Utama** | Loop spasi (`row - 1`) + Loop bintang (`2 * (num - row) + 1`) |
| 📖 **Readability** | ⭐⭐⭐⭐ (sangat mudah dibaca) |
| ⚡ **Kompleksitas** | O(n²) — sebanding luas piramida |
| 🎯 **Cocok Untuk** | Pemula, ujian, saat ingin melatih fundamental nested loop |

> [!TIP]
> 🏆 **Kapan pilih versi ini?**
> Gunakan Versi 1 saat kamu ingin **melatih pemahaman fundamental** tentang cara kerja loop bersarang. Versi ini paling "berbicara sendiri" — setiap loop punya peran yang jelas dan terpisah.

---

<a name="step-by-step"></a>
## 🏗️ Bangun Kode Secara Bertahap

> [!IMPORTANT]
> 🧱 **Prinsip "Bangun Lantai per Lantai":** Jangan langsung menulis kode final! Kita mulai dari struktur paling dasar, lalu menambahkan fitur satu per satu. Setiap step harus menghasilkan output yang bisa diverifikasi.

### ⚙️ Step 1 — Loop Utama Saja (Kerangka Kosong)

Langkah pertama: buat loop utama yang hanya mencetak `\n` (enter) sebanyak `num` kali. Tujuannya untuk memastikan loop utama berjalan dengan benar.

```javascript
const piramidaTerbalik = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Hasil:** 5 baris kosong. Belum ada bintang — tapi loop utama sudah terbukti bekerja ✅

---

### ⚙️ Step 2 — Tambah Nested Loop Spasi Pendorong

Tambahkan satu nested loop di dalam loop utama untuk mencetak spasi. Fokus pada spasi saja dulu — **abaikan bintang.**

```javascript
const piramidaTerbalik = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let space = 1; space <= row - 1; space++) {
      pattern += ' ';
    }

    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Hasil:** 5 baris dengan spasi yang bertambah (0, 1, 2, 3, 4 spasi). Belum ada bintang, tapi **spasi pendorong sudah terbukti bekerja** ✅

---

### ⚙️ Step 3 — Tambah Nested Loop Bintang (Final V1)

Tambahkan satu nested loop lagi tepat **di bawah** loop spasi untuk mencetak bintang. Rumus: `2 * num - (2 * row - 1)`.

```javascript
// ✅ VERSI 1 — Nested Loop (1-Indexed, Clean Code)
const piramidaTerbalik = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    // Spasi pendorong — mendorong bintang ke kanan
    for (let space = 1; space <= row - 1; space++) {
      pattern += ' ';
    }

    // Bintang pembentuk piramida terbalik
    for (let star = 1; star <= 2 * num - (2 * row - 1); star++) {
      pattern += '*';
    }

    pattern += '\n';
  }

  return pattern;
};

console.log(piramidaTerbalik(5));
/*
*********
 *******
  *****
   ***
    *
*/
```

> 📌 **Hasil:** Piramida terbalik rata tengah sudah terbentuk sempurna! ✅

---

<a name="algoritma"></a>
## 🧠 Algoritma Tahan Lupa — Penjelasan "Kenapa" Setiap Baris

> 1. **Menyiapkan Kanvas `[VARIABEL]`**:
>    ```javascript
>    let pattern = '';
>    ```
>    Variabel `pattern` adalah kanvas kosong tempat kita "melukis" pola. *(Kenapa string kosong? Karena kita menempelkan karakter satu per satu — seperti melukis di kanvas putih).*

> 2. **Mengulang Setiap Baris `[FOR LOOP UTAMA]`**:
>    ```javascript
>    for (let row = 1; row <= num; row++)
>    ```
>    Loop berjalan sebanyak `num` kali, dari baris paling atas (terlebar) sampai baris terbawah (tersempit). *(Kenapa mulai dari `1`? Agar rumus `row - 1` dan `2 * num - (2 * row - 1)` langsung cocok tanpa penyesuaian).*

> 3. **Spasi Pendorong `[NESTED LOOP 1]`**:
>    ```javascript
>    for (let space = 1; space <= row - 1; space++) {
>      pattern += ' ';
>    }
>    ```
>    Mencetak spasi di awal baris untuk mendorong bintang ke kanan. *(Kenapa `row - 1`? Baris pertama = 0 spasi (lebar penuh), baris terakhir = 4 spasi (tinggal 1 bintang). Semakin turun, dorongan makin besar karena bintang makin sedikit. Contoh baris ke-3: `3-1 = 2` spasi).*

> 4. **Bintang Deret Ganjil Menurun `[NESTED LOOP 2]`**:
>    ```javascript
>    for (let star = 1; star <= 2 * num - (2 * row - 1); star++) {
>      pattern += '*';
>    }
>    ```
>    Mencetak bintang yang jumlahnya menurun membentuk deret ganjil. *(Kenapa `2 * num - (2 * row - 1)`? Plafon tetap `10` dikurangi deret ganjil naik `1, 3, 5, 7, 9`. Contoh baris ke-3: `10 - (2×3 - 1) = 10 - 5 = 5` bintang).*

> 5. **Pindah Baris `[NEWLINE]`**:
>    ```javascript
>    pattern += '\n';
>    ```
>    Pindah ke baris berikutnya. *(Kenapa? Tanpa `\n`, semua karakter menempel jadi satu baris panjang tak berbentuk).*

> [!CAUTION]
> ⚠️ **Posisi `'\n'`:** Harus berada di **luar** kedua nested loop tapi **di dalam** loop utama `row`.
>
> ```
> ✅ BENAR                      ❌ SALAH
> for row:                      for row:
>   for space: ...                for space: ...
>   for star: ...                   pattern += '\n'  ← di dalam nested!
>   pattern += '\n'  ← di sini
> ```

---

<a name="simulasi"></a>
## 🧮 Simulasi Trace (`num = 3`)

Mari kita telusuri eksekusi kode langkah demi langkah untuk `piramidaTerbalik(3)`.

### Baris ke-1 (`row = 1`)

| Tahap | Loop | Kondisi | Karakter | `pattern` sejauh ini |
|:---:|:---:|:---:|:---:|:---|
| 1 | `space` | `space <= 1-1=0` → **skip!** | — | `""` |
| 2 | `star` | `star <= 6-(2×1-1)=5` → jalan 5× | `'*'` × 5 | `"*****"` |
| 3 | newline | — | `'\n'` | `"*****\n"` |

### Baris ke-2 (`row = 2`)

| Tahap | Loop | Kondisi | Karakter | `pattern` sejauh ini |
|:---:|:---:|:---:|:---:|:---|
| 4 | `space` | `space <= 2-1=1` → jalan 1× | `' '` × 1 | `"*****\n "` |
| 5 | `star` | `star <= 6-(2×2-1)=3` → jalan 3× | `'*'` × 3 | `"*****\n ***"` |
| 6 | newline | — | `'\n'` | `"*****\n ***\n"` |

### Baris ke-3 (`row = 3`)

| Tahap | Loop | Kondisi | Karakter | `pattern` sejauh ini |
|:---:|:---:|:---:|:---:|:---|
| 7 | `space` | `space <= 3-1=2` → jalan 2× | `' '` × 2 | `"*****\n ***\n  "` |
| 8 | `star` | `star <= 6-(2×3-1)=1` → jalan 1× | `'*'` × 1 | `"*****\n ***\n  *"` |
| 9 | newline | — | `'\n'` | `"*****\n ***\n  *\n"` |

**Output akhir saat di-print:**
```
*****
 ***
  *
```

> [!NOTE]
> 📌 **Perhatikan Tahap 1** (`row=1`): Kondisi loop spasi adalah `space <= 1-1=0`, yang langsung **false** — sehingga loop spasi **dilewati sepenuhnya** (tidak ada spasi pendorong). Ini benar karena baris pertama piramida terbalik dimulai dari ujung paling kiri tanpa spasi!

---

<a name="gotchas"></a>
## ⚠️ Gotchas & Jebakan Umum

> [!WARNING]
> 🐛 **Jebakan #1: Menggunakan rumus piramida normal tanpa menyesuaikan.**
>
> ```javascript
> // ❌ SALAH — rumus piramida normal (spasi berkurang, bintang bertambah)
> for (let space = 1; space <= num - row; space++)   // spasi harusnya BERTAMBAH!
> for (let star = 1; star <= 2 * row - 1; star++)    // bintang harusnya BERKURANG!
>
> // ✅ BENAR — rumus piramida terbalik
> for (let space = 1; space <= row - 1; space++)
> for (let star = 1; star <= 2 * num - (2 * row - 1); star++)
> ```
>
> Piramida terbalik memiliki **arah berlawanan** dari piramida normal — spasi bertambah dan bintang berkurang.

---

> [!WARNING]
> 🐛 **Jebakan #2: Rumus bintang hanya dikurangi `row`, bukan `(2 * row - 1)`.**
>
> ```javascript
> // ❌ SALAH — bintang hanya berkurang 1 tiap baris
> star <= 2 * num - row    // Hasil: 9, 8, 7, 6, 5 (bukan deret ganjil!)
>
> // ✅ BENAR — bintang berkurang 2 tiap baris (deret ganjil)
> star <= 2 * num - (2 * row - 1)    // Hasil: 9, 7, 5, 3, 1 ✅
> ```
>
> Pengurangnya harus berupa **deret ganjil** `(2 * row - 1)` agar selisih antar baris selalu 2.

---

> [!CAUTION]
> 🔴 **Jebakan #3: Urutan loop terbalik — spasi di belakang bintang.**
>
> Jika kamu mencetak **bintang duluan** baru **spasi**, spasinya tersembunyi di sebelah kanan:
> ```
> ❌ [Bintang][Spasi]  →  *********····   (spasi di kanan, tidak terlihat)
> ✅ [Spasi][Bintang]  →  ····*****       (spasi dorong bintang ke kanan)
> ```
> **Ingat:** Komputer mencetak dari **kiri ke kanan**. Spasi pendorong harus di depan!

---

<a name="zero-indexed"></a>
## 🔢 Alternatif: 0-Indexed

Jika loop dimulai dari `row = 0`, rumusnya berubah:

| Elemen | 1-Indexed | 0-Indexed | Kenapa berubah? |
|:---|:---|:---|:---|
| **Loop** | `row = 1` s/d `num` | `row = 0` s/d `num - 1` | Titik awal bergeser 1 |
| **Spasi** | `row - 1` | `row` | `row` langsung = jumlah spasi ✨ |
| **Bintang** | `2 * num - (2 * row - 1)` | `2 * (num - row) - 1` | Dikalibrasi untuk `row` mulai 0 |

```javascript
// ✅ VERSI 1 — Nested Loop (0-Indexed)
const piramidaTerbalik = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let space = 0; space < row; space++) {
      pattern += ' ';
    }

    for (let star = 0; star < 2 * (num - row) - 1; star++) {
      pattern += '*';
    }

    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Perhatikan:** Rumus spasi menjadi sangat bersih — `space < row` (tanpa `- 1`). Ini adalah salah satu keunggulan 0-indexed untuk kasus tertentu.

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [02 — Problem Solving Approach](./02-problem-solving-approach.md) | [README](../README.md) | [04 — Version 2: Built-in Repeat](./04-version-2-built-in-repeat.md) |
