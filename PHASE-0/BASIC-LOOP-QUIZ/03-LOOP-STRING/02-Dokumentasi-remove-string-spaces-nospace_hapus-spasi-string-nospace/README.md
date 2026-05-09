# 🧹 noSpace — Remove String Spaces

### ✨ _Belajar menghilangkan spasi dari string menggunakan loop manual dan teknik filtering karakter_

> 🎯 **Tujuan:** Memahami cara menyisir (iterate) string karakter per karakter, memfilter karakter yang tidak diinginkan (spasi), dan membangun string baru secara bertahap menggunakan Accumulator Pattern — tanpa menggunakan built-in method seperti `.replace()`, `.split()`, atau `.join()`.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Latar Belakang](#latar-belakang) | Apa challenge ini dan kenapa penting |
| 🔑 | [Konsep Kunci](#konsep-kunci) | Teknik inti: Accumulator Pattern, String Traversal, Filtering |
| 🛠️ | [Solusi V1 — Filter Langsung](#solusi-v1) | Pendekatan `if (char !== ' ')` — ambil yang bukan spasi |
| 🔧 | [Solusi V2 — Guard Clause](#solusi-v2) | Pendekatan `if (char === ' ') continue` — usir yang spasi |
| 💎 | [Solusi V3 — Traditional For Loop](#solusi-v3) | Pendekatan klasik dengan index `i` (versi mentor) |
| 🌍 | [Best Practice — Modern JS](#best-practice-modern) | Cara `.replace()`, `.replaceAll()`, dan `split().join()` |
| 🧠 | [Insight — Immutable String](#insight-immutable) | Kenapa `+=` bisa lambat dan solusi Array + `.join()` |
| 🔬 | [Insight — Regex `/\s/g` vs `/\s+/g`](#insight-regex) | Perbedaan performa pencocokan spasi di RegExp |
| 📊 | [Perbandingan Semua Versi](#perbandingan) | Tabel komparasi semua pendekatan |
| 📚 | [Konsep yang Dipelajari](#konsep-dipelajari) | Rangkuman pelajaran dari sesi mentoring |
| 💡 | [Catatan Tambahan](#catatan-tambahan) | Insight & tips dari mentor |

---

<a name="latar-belakang"></a>

## 📖 Latar Belakang

Challenge ini berasal dari **Codewars** ([link soal](https://www.codewars.com/kata/57eae20f5500ad98e50002c5)).

**Tugas:** Buat fungsi `noSpace(x)` yang menerima string dan mengembalikan string tersebut tanpa spasi.

**Constraint tambahan:** Wajib menggunakan **loop manual** dan **tanpa built-in method** yang menggantikan loop (seperti `.replace()`, `.split()`, `.join()`, `.replaceAll()`, dll).

### 💡 Contoh Input & Output

| Input | Output |
|-------|--------|
| `"8 j 8   mBliB8g  imjB8B8  jl  B"` | `"8j8mBliB8gimjB8B8jlB"` |
| `"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"` | `"88Bifk8hB8BB8BBBB888chl8BhBfd"` |

---

<a name="konsep-kunci"></a>

## 🔑 Konsep Kunci

### 1️⃣ Accumulator Pattern — _"Wadah Penampung"_ 📦

```
🎯 Fungsi    → Menyiapkan variable kosong untuk menampung hasil sedikit demi sedikit
📌 Analogi   → Seperti menyiapkan kotak kosong, lalu memasukkan barang satu per satu
🔐 Kunci     → let result = '' → di setiap iterasi: result += char
```

### 2️⃣ String Traversal — _"Menyisir Karakter Satu per Satu"_ 🔦

```
🎯 Fungsi    → Loop dari karakter pertama sampai terakhir
📌 Analogi   → Seperti memegang senter, menyisir huruf dari kiri ke kanan
🔐 Kunci     → for (const char of x) ATAU for (let i = 0; i < x.length; i++)
```

### 3️⃣ Filtering Logic — _"Penjaga Pintu"_ 🚪

```
🎯 Fungsi    → Memilih mana yang masuk wadah, mana yang dibuang
📌 Analogi   → Seperti bouncer di pintu masuk — hanya tamu undangan (bukan spasi) yang boleh masuk
🔐 Kunci     → if (char !== ' ') → masukkan | if (char === ' ') → lewati (continue)
```

> [!IMPORTANT]
> 🔔 **Tiga konsep ini (Accumulator + Traversal + Filtering)** adalah pola fundamental yang bisa dipakai untuk banyak kasus: menghilangkan karakter tertentu, memfilter angka saja, memfilter huruf saja, dan banyak kasus lainnya!

---

<a name="solusi-v1"></a>

## 🛠️ Solusi V1 — Filter Langsung (`!==`)

```javascript
const noSpace = (x) => {
  let output = '';

  for (const char of x) {
    if (char !== ' ') output += char;
  }

  return output;
};
```

### 🎨 Visualisasi ASCII

```text
Input: "A B C"

[ Wadah Kosong: "" ]

1. Cek 'A' → Bukan spasi? ✅ → Simpan → [ Wadah: "A" ]
2. Cek ' ' → Bukan spasi? ❌ → Lewati → [ Wadah: "A" ]
3. Cek 'B' → Bukan spasi? ✅ → Simpan → [ Wadah: "AB" ]
4. Cek ' ' → Bukan spasi? ❌ → Lewati → [ Wadah: "AB" ]
5. Cek 'C' → Bukan spasi? ✅ → Simpan → [ Wadah: "ABC" ]

[ Output Akhir: "ABC" ✅ ]
```

### 🔍 Penjelasan

1. **`let output = ''`** — Siapkan wadah string kosong sebagai penampung
2. **`for (const char of x)`** — Sisir string dari depan ke belakang, ambil setiap karakter
3. **`if (char !== ' ')`** — Jika karakter ini **bukan** spasi, masukkan ke wadah
4. **`return output`** — Kembalikan string hasil yang sudah bersih

### ✅ Kelebihan
- **Sangat Ringkas:** Logika hanya 1 baris di dalam loop
- **Mudah Dibaca:** Langsung jelas — "jika bukan spasi, tambahkan"
- **Modern:** Menggunakan `for...of` dan arrow function (ES6+)

---

<a name="solusi-v2"></a>

## 🔧 Solusi V2 — Guard Clause (`continue`)

```javascript
const noSpace = (x) => {
  let output = '';

  for (const char of x) {
    if (char === ' ') continue;

    output += char;
  }

  return output;
};
```

### 🎨 Visualisasi ASCII

```text
Input: "A B C"

[ Wadah Kosong: "" ]

1. Cek 'A' → Spasi? ❌ → Lanjut ke bawah → output += 'A' → [ "A" ]
2. Cek ' ' → Spasi? ✅ → CONTINUE! ⏭️ (langsung lompat ke iterasi berikutnya)
3. Cek 'B' → Spasi? ❌ → Lanjut ke bawah → output += 'B' → [ "AB" ]
4. Cek ' ' → Spasi? ✅ → CONTINUE! ⏭️
5. Cek 'C' → Spasi? ❌ → Lanjut ke bawah → output += 'C' → [ "ABC" ]

[ Output Akhir: "ABC" ✅ ]
```

### 🔍 Penjelasan

1. **`if (char === ' ') continue`** — Jika ketemu spasi, **langsung lompat** ke iterasi berikutnya tanpa menjalankan kode di bawahnya
2. **`output += char`** — Kode ini hanya dijalankan jika `continue` **tidak** terpicu (artinya karakter bukan spasi)

### 💡 Apa itu Guard Clause?

> [!TIP]
> 🏆 **Analogi Guard Clause:**
>
> | | Versi V1 (Filter Langsung) | Versi V2 (Guard Clause) |
> |---|---|---|
> | 📝 | "Kalau kamu **tamu undangan**, silakan masuk ke pesta" | "Kalau kamu **bukan tamu**, PERGI! Sisanya silakan masuk" |
> | 🔒 | Kode utama ada **di dalam** kurung `if` | Kode utama ada **di luar/bawah** `if` |

**Keuntungan Guard Clause:** Mengurangi **nesting** (tingkat kedalaman kurung kurawal). Jika nanti logikanya makin kompleks, kode tetap mudah dibaca karena tidak terlalu menjorok ke dalam.

---

<a name="solusi-v3"></a>

## 💎 Solusi V3 — Traditional For Loop (Versi Mentor)

```javascript
function noSpace(x) {
  let result = '';

  for (let i = 0; i < x.length; i++) {
    const char = x[i];

    if (char !== ' ') {
      result += char;
    }
  }

  return result;
}
```

### 🎨 Visualisasi ASCII

```text
Input: "A B C"

[Start] result = '', x.length = 5

i=0  x[0] = 'A' → 'A' !== ' '? ✅ → result = "A"
i=1  x[1] = ' ' → ' ' !== ' '? ❌ → skip
i=2  x[2] = 'B' → 'B' !== ' '? ✅ → result = "AB"
i=3  x[3] = ' ' → ' ' !== ' '? ❌ → skip
i=4  x[4] = 'C' → 'C' !== ' '? ✅ → result = "ABC"
i=5  → 5 < 5? ❌ STOP!
   |
   v
return "ABC" ✅
```

### 🔍 Penjelasan

1. **`for (let i = 0; i < x.length; i++)`** — Loop klasik dengan index manual
2. **`const char = x[i]`** — Akses karakter di posisi ke-`i` secara eksplisit
3. **`if (char !== ' ')`** — Filter yang sama, hanya cara aksesnya berbeda

### 💡 Kenapa Mentor Pilih Ini?

- **Eksplisit:** Terlihat jelas ada `i` yang bertambah, ada batas `length`, dan cara akses `x[i]`
- **Kontrol Penuh:** Jika soalnya berubah (misal "hapus spasi tiap 2 karakter"), kita bisa mainkan logika di `i`
- **Fundamental:** Menguasai index sangat krusial sebelum pindah ke cara-cara yang lebih "magic" seperti `for...of`

---

<a name="best-practice-modern"></a>

## 🌍 Best Practice — Modern JavaScript (Real World)

Di dunia kerja nyata, programmer tidak menulis loop manual untuk ini. Ada 3 cara populer:

### 🔧 Cara 1 — RegExp `.replace()`

```javascript
const noSpace = (x) => x.replace(/\s/g, '');
```

### 🔧 Cara 2 — `.replaceAll()` (ES2021)

```javascript
const noSpace = (x) => x.replaceAll(' ', '');
```

### 🔧 Cara 3 — "Old School Trick" `split().join()`

```javascript
const noSpace = (x) => x.split(' ').join('');
```

### 🎨 Visualisasi ASCII — `split().join()`

```text
Input: "A B C"

1. split(' '):  ["A", "B", "C"]  ← Spasi hilang saat jadi Array (korban pemotongan ✂️)
2. join(''):    "ABC"             ← Disatukan tanpa pemisah (perekatnya kosong 🔗)

Output: "ABC" ✅
```

### 🔍 Kenapa Ini Best Practice?

1. **Singkat & Jelas:** Programmer lain langsung paham maksudnya dalam 1 detik
2. **Performanya Kencang:** `.replace()` dijalankan di level internal C++ browser (V8 engine)
3. **Standar Industri:** Ini yang dipakai di project/portfolio nyata

> [!TIP]
> 💡 **Cara `split().join()`** sangat populer sebelum ada `.replaceAll()` di ES2021. Logikanya jenius: spasi otomatis hilang karena dia adalah **"korban pemotongan"** oleh `.split()`.

---

<a name="insight-immutable"></a>

## 🧠 Insight — Immutable String & Performa

**Rahasia yang jarang dibahas:** String di JavaScript bersifat **Immutable** (tidak bisa diubah).

Setiap kali kamu melakukan `result += char`, JavaScript sebenarnya:
1. Membuat string **baru** di memori
2. Menyalin string **lama** ke yang baru
3. Menambah karakter baru
4. **Membuang** string lama

> [!WARNING]
> 🐛 **Ini bisa lambat** kalau string-nya jutaan karakter! Setiap `+=` menciptakan salinan baru.

### ✅ Solusi untuk Performa Tinggi: Array + `.join()`

```javascript
function noSpace(x) {
  let result = [];

  for (const char of x) {
    if (char !== ' ') result.push(char);
  }

  return result.join('');
}
```

### 🎨 Visualisasi — Perbedaan di Memori

```text
=== String Concatenation (result += char) ===

Step 1: ""  + "A" → Buat baru "A"         [1 operasi salin]
Step 2: "A" + "B" → Buat baru "AB"        [2 operasi salin]
Step 3: "AB" + "C" → Buat baru "ABC"      [3 operasi salin]
Total: 6 operasi salin untuk 3 karakter 😰

=== Array + Join (result.push → join) ===

Step 1: [].push("A")  → ["A"]             [1 operasi tambah]
Step 2: ["A"].push("B")  → ["A","B"]      [1 operasi tambah]
Step 3: ["A","B"].push("C") → ["A","B","C"] [1 operasi tambah]
.join('') → "ABC"                          [1 operasi gabung]
Total: 4 operasi untuk 3 karakter 🚀
```

> [!NOTE]
> 💡 **Untuk string pendek** (seperti di challenge ini), `+=` sudah lebih dari cukup. Teknik Array + `.join()` baru terasa manfaatnya saat memproses data yang **sangat besar** (ribuan hingga jutaan karakter).

---

<a name="insight-regex"></a>

## 🔬 Insight — Regex `/\s/g` vs `/\s+/g`

Kedua regex ini menghasilkan **output yang sama**, tapi cara kerjanya berbeda:

### Perbandingan

| Aspek | `/\s/g` (tanpa `+`) | `/\s+/g` (dengan `+`) |
|-------|:-------------------:|:---------------------:|
| **Arti** | Cari spasi **satu per satu** | Cari spasi **satu atau lebih** (rombongan) |
| **"   "** (3 spasi) | 3 kali aksi hapus | 1 kali aksi hapus (dianggap 1 paket) |
| **Performa** | Lebih banyak operasi | ✅ Lebih sedikit operasi |
| **Hasil** | Sama | Sama |

### 🎨 Visualisasi

```text
Input: "8  8  B"  (ada 2 kelompok, masing-masing 2 spasi)

/\s/g  → Menemukan 4 spasi terpisah → 4x penggantian
/\s+/g → Menemukan 2 "paket" spasi  → 2x penggantian ✅ lebih efisien
```

### ⚠️ Hati-hati: `' '` vs `\s`

| Pattern | Yang Dihapus |
|---------|-------------|
| `' '` (spasi biasa) | Hanya spasi tombol spasi |
| `\s` (whitespace) | Spasi, Tab (`\t`), Pindah baris (`\n`), dan whitespace lainnya |

> [!TIP]
> 💡 Dalam banyak kasus, **`\s` lebih aman** karena membersihkan semua jenis "ruang kosong". Versi paling optimal untuk dunia nyata: `x.replace(/\s+/g, '')`

---

<a name="perbandingan"></a>

## 📊 Perbandingan Semua Versi

### ⚡ Ringkasan Pendekatan

| Versi | Cara | Loop | Built-in | Sesuai Syarat |
|-------|------|:----:|:--------:|:-------------:|
| V1 — Filter Langsung | `if (char !== ' ')` | `for...of` | ❌ | ✅ |
| V2 — Guard Clause | `if (char === ' ') continue` | `for...of` | ❌ | ✅ |
| V3 — Traditional Loop | `if (x[i] !== ' ')` | `for (i)` | ❌ | ✅ |
| BP — `.replace()` | RegExp `/\s/g` | — | ✅ | ❌ |
| BP — `.replaceAll()` | Literal `' '` | — | ✅ | ❌ |
| BP — `split().join()` | Potong & gabung | — | ✅ | ❌ |
| Performa — Array+Join | `push` + `join` | `for...of` | `.join()` | ❌ |

### 🏆 Rekomendasi Penggunaan

```
📚 Sedang Belajar Dasar?
   → Gunakan V3 (Traditional For) — pahami index dulu sebelum naik level

🎓 Sudah Paham Konsep Loop?
   → Gunakan V1 atau V2 (for...of) — modern dan bersih

💼 Untuk Project/Portfolio?
   → Gunakan .replace(/\s+/g, '') — standar industri

🚀 Untuk Data Sangat Besar?
   → Gunakan Array + .join() — performa optimal
```

---

<a name="konsep-dipelajari"></a>

## 📚 Konsep yang Dipelajari

- ✅ **Accumulator Pattern** — Menyiapkan variable kosong (`let output = ''`) untuk menampung hasil sedikit demi sedikit di setiap iterasi
- ✅ **String Traversal** — Menggunakan loop untuk menyisir string karakter per karakter dari awal hingga akhir
- ✅ **Filtering Logic** — Memilih mana yang mau disimpan (pakai `!==`) atau mana yang mau dibuang (pakai `===` dan `continue`)
- ✅ **Guard Clause Pattern** — Teknik "mengusir" kondisi yang tidak diinginkan di awal loop menggunakan `continue`, agar kode utama tidak terlalu menjorok (nested)
- ✅ **Immutable String** — String di JavaScript tidak bisa diubah; setiap `+=` membuat string baru di memori
- ✅ **RegExp Dasar** — Perbedaan `/\s/g` vs `/\s+/g` dan perbedaan spasi biasa vs whitespace
- ✅ **Multiple Approaches** — Satu masalah bisa diselesaikan dengan banyak cara, masing-masing punya trade-off

---

<a name="catatan-tambahan"></a>

## 💡 Catatan Tambahan

### 🧠 Mental Model — 3 Level Pemahaman

```
Level 1 — Belajar Algoritma (Challenge/Quiz)
   → Gunakan LOOP MANUAL untuk melatih otak berpikir logis
   → Pahami cara kerja di balik layar

Level 2 — Interview / Coding Test
   → Tunjukkan loop manual dulu, lalu optimasi ke versi modern
   → Jelaskan trade-off masing-masing

Level 3 — Dunia Kerja (Real World)
   → Gunakan Built-in Method (.replace, .replaceAll)
   → Prioritaskan readability & maintainability
```

### 📌 Pesan dari Mentor

> **Untuk Readability:** Gunakan Built-in Method (`.replace()`).

> **Untuk Interview/Latihan:** Gunakan `for...of` karena bersih.

> **Untuk Performa Ekstrim:** Gunakan Array sebagai penampung (`.push` baru `.join`).

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **9 Mei 2026** berdasarkan sesi mentoring langsung di **Windows**. Semua kode, visualisasi, dan insight diambil dari diskusi nyata selama sesi belajar JavaScript dasar — termasuk eksplorasi mendalam tentang Immutable String dan perbandingan RegExp.
