# 📊 Handling Data Array — `dataHandling`

### ✨ _Menampilkan data profil dari array multidimensi dengan format rapi menggunakan loop & destructuring_

> 🎯 **Tujuan:** Memahami cara mengakses, memetakan, dan menampilkan data dari **array 2D** (array di dalam array) — mulai dari pendekatan dasar hingga clean code dengan destructuring.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Soal Lengkap](#soal-lengkap) | Deskripsi challenge beserta input & output |
| 🗺️ | [Fase 1: Visualisasi & Analisis](#fase-1-visualisasi--analisis) | Mapping index array → label output |
| 🔨 | [Fase 2: Solusi Bertahap](#fase-2-solusi-bertahap) | Membangun kode step-by-step |
| 🚀 | [Fase 3: Evolusi Solusi](#fase-3-evolusi-solusi) | Refactoring dengan `for...of` + destructuring |
| 🧹 | [Fase 4: Clean Code & Naming](#fase-4-clean-code--naming) | Review & standarisasi nama variabel |
| ⚖️ | [Perbandingan Versi](#perbandingan-versi) | `console.log` vs `return` — kapan pakai yang mana |
| 💡 | [Insight & Gotchas](#insight--gotchas) | Pelajaran penting dari sesi ini |

---

<a name="soal-lengkap"></a>

## 📖 Soal Lengkap

Buatlah sebuah fungsi `dataHandling` dengan sebuah parameter untuk menerima argumen berupa **array yang berisi beberapa array sejumlah n**.

### Input

```javascript
let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];
```

### Output yang Diharapkan

```
Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
```

> [!NOTE]
> 💡 Data di atas adalah **array 2D** (multidimensional array) — sebuah array besar yang isinya array-array kecil. Setiap array kecil mewakili satu profil orang.

---

<a name="fase-1-visualisasi--analisis"></a>

## 🗺️ Fase 1: Visualisasi & Analisis

### Apa yang Kita Hadapi?

Sebelum menulis satu baris kode pun, kita harus paham dulu **struktur datanya**. Bayangkan array ini seperti tabel Excel:

```
        Index 0     Index 1              Index 2            Index 3         Index 4
Row 0 → "0001"      "Roman Alamsyah"     "Bandar Lampung"   "21/05/1989"   "Membaca"
Row 1 → "0002"      "Dika Sembiring"     "Medan"            "10/10/1992"   "Bermain Gitar"
Row 2 → "0003"      "Winona"             "Ambon"            "25/12/1965"   "Memasak"
Row 3 → "0004"      "Bintang Senjaya"    "Martapura"        "6/4/1970"     "Berkebun"
```

### Tabel Pemetaan (Mapping) Index → Label Output

| Index | Isi Data (Contoh: Roman) | Dipetakan ke Label | Catatan Khusus |
| :---: | :--- | :--- | :--- |
| `[0]` | `"0001"` | Nomor ID | — |
| `[1]` | `"Roman Alamsyah"` | Nama Lengkap | — |
| `[2]` | `"Bandar Lampung"` | TTL (Bagian Tempat) | ⚠️ Digabung dengan index 3, dipisah spasi |
| `[3]` | `"21/05/1989"` | TTL (Bagian Tanggal) | ⚠️ Digabung dengan index 2 |
| `[4]` | `"Membaca"` | Hobi | — |

> [!IMPORTANT]
> 🔔 **TTL = Tempat Tanggal Lahir.** Index `[2]` (tempat) dan `[3]` (tanggal) harus **digabung menjadi satu baris** output, dipisah spasi. Ini satu-satunya bagian yang tidak langsung 1:1 mapping.

### Logika Inti yang Ditemukan

```
🎯 Proses per orang:
   1. Cetak Nomor ID       → ambil index [0]
   2. Cetak Nama Lengkap   → ambil index [1]
   3. Cetak TTL             → GABUNGKAN index [2] + " " + index [3]
   4. Cetak Hobi            → ambil index [4]
   5. Cetak baris kosong    → pemisah antar orang

🔄 Ulangi proses di atas untuk SETIAP baris array (pakai LOOP)
```

---

<a name="fase-2-solusi-bertahap"></a>

## 🔨 Fase 2: Solusi Bertahap (Step-by-Step)

### Step 1 — Kerangka Fungsi & Loop Dasar

Mulai dari yang paling dasar: buat fungsi, buat loop, dan cetak array mentah untuk memastikan loop bekerja.

```javascript
const dataHandling = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // Cetak seluruh inner array (masih mentah)
  }
};
```

```
🎯 Tujuan   → Memastikan loop menyentuh setiap baris data
📌 Output   → ["0001", "Roman Alamsyah", ...] per baris
✅ Status   → Loop berjalan ✓, tinggal format outputnya
```

---

### Step 2 — Format Satu Label Dulu (Nomor ID)

Sebelum langsung menulis semua label, coba satu dulu untuk memastikan cara akses index benar:

```javascript
const dataHandling = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`Nomor ID: ${array[i][0]}`);
    console.log('');
  }
};
```

```
🎯 Tujuan   → Memastikan array[i][0] mengakses ID dengan benar
📌 Teknik   → Template Literals (backtick) untuk format string
✅ Status   → ID berhasil tampil ✓, tinggal tambah label lain
```

---

### Step 3 — Lengkapi Semua Label (Solusi V1 Final)

```javascript
const dataHandling = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`Nomor ID: ${array[i][0]}`);
    console.log(`Nama Lengkap: ${array[i][1]}`);
    console.log(`TTL: ${array[i][2]} ${array[i][3]}`);
    console.log(`Hobi: ${array[i][4]}`);
    console.log('');
  }
};

dataHandling(input);
```

> [!CAUTION]
> 🔴 **Perhatikan cara pemanggilan!** Cukup tulis `dataHandling(input)`, **JANGAN** `console.log(dataHandling(input))`. Karena fungsi ini tidak punya `return`, membungkusnya dengan `console.log` akan mencetak `undefined` di akhir output.

---

<a name="fase-3-evolusi-solusi"></a>

## 🚀 Fase 3: Evolusi Solusi

### Masalah dengan V1

Kode V1 sudah benar, tapi ada masalah *readability*:

```javascript
// 3 bulan kemudian membaca ulang...
console.log(`TTL: ${array[i][2]} ${array[i][3]}`);
//                         ^^^ [2] itu apa? [3] itu apa? 🤔
```

### Solusi: `for...of` + Array Destructuring (V2)

JavaScript modern (ES6) punya fitur **Array Destructuring** — kita bisa "membongkar" isi array dan langsung beri nama variabel:

```javascript
// Destructuring: membongkar array jadi variabel bernama
const [id, fullName, birthPlace, birthDate, hobby] = ["0001", "Roman", "Bandar Lampung", "21/05/1989", "Membaca"];

// Sekarang kita bisa panggil:
console.log(id);         // "0001"
console.log(birthPlace); // "Bandar Lampung"
```

Gabungkan dengan `for...of` loop yang lebih bersih:

```javascript
const dataHandling = (usersData) => {
  for (const [id, fullName, birthPlace, birthDate, hobby] of usersData) {
    console.log(`Nomor ID: ${id}`);
    console.log(`Nama Lengkap: ${fullName}`);
    console.log(`TTL: ${birthPlace} ${birthDate}`);
    console.log(`Hobi: ${hobby}`);
    console.log('');
  }
};

dataHandling(input);
```

### Perbandingan V1 vs V2

| Aspek | V1: `for` + Index 🔴 | V2: `for...of` + Destructuring 🟢 |
|-------|:---:|:---:|
| Readability | ❌ `array[i][2]` — harus ingat index | ✅ `birthPlace` — langsung paham |
| Jumlah Variabel | 🔴 Hanya `i` (counter) | 🟢 Setiap data punya nama |
| Potensi Bug | 🔴 Salah index = data tertukar | 🟢 Nama variabel = self-documenting |
| Performa | ✅ Sama | ✅ Sama |

> [!TIP]
> 🏆 **Kesimpulan:** V2 jauh lebih *readable* dan *maintainable*. Gunakan destructuring kapanpun bekerja dengan array yang punya struktur tetap.

---

<a name="fase-4-clean-code--naming"></a>

## 🧹 Fase 4: Clean Code & Naming

### Kamus Variabel — Rekomendasi Penamaan

| Lokasi / Peran | ❌ Kurang Baik | ✅ Rekomendasi | Alasan |
| :--- | :--- | :--- | :--- |
| Parameter Fungsi | `array` | `usersData` | Menjelaskan **isi** (data user), bukan tipe (`array`) |
| Index 0 (ID) | `no`, `idNumber` | `id` | Singkat, padat, standar industri |
| Index 1 (Nama) | `nama`, `nm` | `fullName` | Membedakan dari firstName / lastName |
| Index 2 (Tempat Lahir) | `tempat`, `tl` | `birthPlace` | Spesifik: ini tempat lahir |
| Index 3 (Tanggal Lahir) | `tgl`, `ttl`, `date` | `birthDate` | `date` terlalu umum, `birthDate` lebih spesifik |
| Index 4 (Hobi) | `hobi`, `hb` | `hobby` | Langsung tepat sasaran |

> [!NOTE]
> 💡 **Kapan `i` boleh dipakai?** Hanya jika variabel tersebut **murni counter** (penghitung putaran loop) dan tidak mewakili data bermakna. Contoh: `for (let i = 0; i < 10; i++)`. Jika variabel mewakili sesuatu (baris, orang, id), selalu gunakan nama deskriptif.

---

<a name="perbandingan-versi"></a>

## ⚖️ Perbandingan Versi: `console.log` vs `return`

### Versi A — `console.log` (Untuk Submit Bootcamp)

```javascript
const dataHandling = (usersData) => {
  for (const [id, fullName, birthPlace, birthDate, hobby] of usersData) {
    console.log(`Nomor ID: ${id}`);
    console.log(`Nama Lengkap: ${fullName}`);
    console.log(`TTL: ${birthPlace} ${birthDate}`);
    console.log(`Hobi: ${hobby}`);
    console.log('');
  }
};
```

```
🎯 Cocok untuk   → Submit tugas bootcamp / autograder
📌 Cara panggil  → dataHandling(input)
⚠️ Kekurangan   → Fungsi hanya bisa "cetak", tidak bisa dipakai ulang
```

### Versi B — Accumulator Pattern `return` (Best Practice)

```javascript
const dataHandling = (usersData) => {
  let formattedData = '';

  for (const [id, fullName, birthPlace, birthDate, hobby] of usersData) {
    formattedData += `Nomor ID: ${id}\n`;
    formattedData += `Nama Lengkap: ${fullName}\n`;
    formattedData += `TTL: ${birthPlace} ${birthDate}\n`;
    formattedData += `Hobi: ${hobby}\n\n`;
  }

  return formattedData;
};
```

```
🎯 Cocok untuk   → Portfolio, proyek nyata, production code
📌 Cara panggil  → console.log(dataHandling(input))
✅ Kelebihan     → Hasilnya bisa dicetak, dikirim ke API, atau ditampilkan di HTML
```

### Tabel Perbandingan

| Aspek | Versi A: `console.log` 🔵 | Versi B: `return` 🟢 |
|-------|:---:|:---:|
| Lolos autograder | ✅ Ya | ❌ Mungkin tidak (tergantung sistem tes) |
| Fleksibilitas | 🔴 Hanya cetak ke console | 🟢 Bisa dipakai di mana saja |
| Pola pikir | Prosedural (langsung eksekusi) | Fungsional (olah → kembalikan) |
| Best practice dunia kerja | ❌ Tidak direkomendasikan | ✅ Lebih *pure* & modular |

> [!TIP]
> 🏆 **Kapan pakai yang mana?**
> - Soal bilang **"menampilkan"** + ada autograder → Versi A
> - Proyek nyata / portfolio → Versi B

---

<a name="insight--gotchas"></a>

## 💡 Insight & Gotchas

### 1️⃣ Destructuring = Kode yang Bercerita

```javascript
// ❌ SEBELUM — harus menebak isi setiap index
console.log(array[i][2]);  // "Index 2 itu apa ya?" 🤔

// ✅ SESUDAH — langsung paham tanpa komentar
console.log(birthPlace);   // "Oh, tempat lahir!" 💡
```

### 2️⃣ TTL adalah "Gabungan" — Bukan Data Tunggal

> ⚠️ **Gotcha:** Jangan sampai lupa bahwa TTL itu **2 data yang digabung** (`birthPlace + " " + birthDate`). Jika kamu hanya mencetak satu index, outputnya akan salah.

### 3️⃣ `console.log(fn())` vs `fn()` — Hati-hati `undefined`

```javascript
// ❌ Fungsi tanpa return + dibungkus console.log = muncul undefined
console.log(dataHandling(input));
// Output: ... (semua data) ... undefined  ← ini masalah!

// ✅ Panggil langsung tanpa console.log
dataHandling(input);
// Output: ... (semua data) ... ← bersih!
```

### 4️⃣ `for...of` vs `for` Tradisional — Kapan Pakai Mana?

| Situasi | Gunakan |
|---------|---------|
| Butuh akses **index** (nomor urut) | `for (let i = 0; ...)` |
| Hanya butuh akses **nilai/data** | `for...of` ✅ lebih bersih |
| Ingin destructuring langsung di loop | `for (const [...] of array)` ✅ |

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **18 Mei 2026** berdasarkan sesi mentoring challenge `dataHandling` — Quiz Week 2 Phase 0. Disusun menggunakan metode **5 Fase Mentoring** (Visualisasi → Solusi Bertahap → Evolusi → Clean Code → Dokumentasi).
