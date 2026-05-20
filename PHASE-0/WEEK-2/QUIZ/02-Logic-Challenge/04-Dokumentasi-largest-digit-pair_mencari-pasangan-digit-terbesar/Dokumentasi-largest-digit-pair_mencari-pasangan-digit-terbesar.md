# 🎯 Dokumentasi: Mencari Pasangan Digit Terbesar

### ✨ _Panduan lengkap memahami logika pencarian pasangan dua digit terbesar — dari analisis pola hingga clean code_

> 🎯 **Tujuan:** Setelah membaca dokumentasi ini, kamu akan mampu memecahkan challenge "Mencari Pasangan Digit Terbesar" dengan pemahaman mendalam terhadap logikanya, bukan sekadar copy-paste kode.

---

### 📑 Daftar Isi

| No  | Bagian                                                     | Deskripsi                                                    |
| --- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 📖  | [Latar Belakang](#latar-belakang)                          | Apa itu challenge ini dan kenapa penting?                    |
| 🔍  | [Visualisasi & Analisis Pola](#visualisasi--analisis-pola) | Tabel breakdown pola — menemukan logika inti                 |
| 🧠  | [Algoritma Tahan Lupa](#algoritma-tahan-lupa)              | Penjelasan "Kenapa" di setiap langkah + contoh angka konkret |
| 🗺️  | [Blueprint & Kamus Variabel](#blueprint--kamus-variabel)   | Kerangka kode kosong + tabel peran variabel                  |
| 🛠️  | [Pendekatan Bertahap](#pendekatan-bertahap)                | Step 1 → Step 2 → Step 3 → solusi lengkap                    |
| 🔄  | [Evolusi Solusi](#evolusi-solusi)                          | 3 versi solusi + tabel perbandingan                          |
| 🏷️  | [Naming Convention](#naming-convention)                    | Tabel ❌ Bad vs ✅ Good                                      |
| ⚠️  | [Gotchas & Peringatan](#gotchas--peringatan)               | Jebakan umum yang sering bikin error                         |
| ✅  | [Verifikasi](#verifikasi)                                  | Cara memastikan solusi benar                                 |
| 📝  | [Catatan Akhir](#catatan-akhir)                            | Tanggal + konteks                                            |

---

<a name="latar-belakang"></a>

## 📖 Latar Belakang

Challenge ini sederhana namun sangat kaya pelajaran: **Cari pasangan 2 digit terbesar dari sebuah angka!**

Misalnya, dari angka `641573`, kita harus menemukan bahwa **`73`** adalah pasangan dua digit bersebelahan yang paling besar.

> [!TIP]
> 💡 **Analogi Mudah Dipahami**
>
> |     | Tanpa Teknik                   | Dengan Teknik                                                    |
> | --- | ------------------------------ | ---------------------------------------------------------------- |
> | 📝  | Membaca buku dari halaman acak | Membaca buku halaman per halaman                                 |
> | 🔒  | Mencari pasangan secara asal   | Menggeser "jendela" 2 digit dari kiri ke kanan secara sistematis |

### 🤔 Kenapa Challenge Ini Bagus untuk Belajar?

Challenge ini mengajarkan **5 konsep fundamental** sekaligus:

1. **String Manipulation** — Convert number ke string, akses karakter individual
2. **Loop (Perulangan)** — Iterate through string, control loop bounds
3. **Type Conversion** — Convert string ke number (`Number()`, unary `+`)
4. **Comparison Logic** — Compare values, track maximum
5. **Problem Solving** — Break down problem, think step-by-step

### 💡 Jadi, Apa Solusinya?

Kita akan memecahkan masalah ini dengan teknik **"Sliding Window" sederhana** — menggeser jendela berukuran 2 digit dari kiri ke kanan, sambil mencatat pasangan terbesar yang pernah ditemukan.

---

<a name="visualisasi--analisis-pola"></a>

## 🔍 Pilar 1 — Visualisasi & Analisis Pola

> ⚠️ **DILARANG menulis kode apapun di fase ini!** Fase ini murni analisis logika.

### 📊 Tabel Breakdown Pola

Kita pecahkan setiap test case menjadi pasangan-pasangan 2 digit bersebelahan:

| Input Angka | Daftar Pasangan 2 Digit yang Terbentuk   | Pasangan Terbesar |
| :---------- | :--------------------------------------- | :---------------- |
| `641573`    | `64`, `41`, `15`, `57`, `73`             | **`73`**          |
| `12783456`  | `12`, `27`, `78`, `83`, `34`, `45`, `56` | **`83`**          |
| `910233`    | `91`, `10`, `02`, `23`, `33`             | **`91`**          |
| `71856421`  | `71`, `18`, `85`, `56`, `64`, `42`, `21` | **`85`**          |
| `79918293`  | `79`, `99`, `91`, `18`, `82`, `29`, `93` | **`99`**          |

### 🔎 Visualisasi "Jendela Geser" pada `641573`

```
Input: 6 4 1 5 7 3

Langkah 1:  [6 4] 1  5  7  3   → pasangan: 64
Langkah 2:   6 [4 1] 5  7  3   → pasangan: 41
Langkah 3:   6  4 [1 5] 7  3   → pasangan: 15
Langkah 4:   6  4  1 [5 7] 3   → pasangan: 57
Langkah 5:   6  4  1  5 [7 3]  → pasangan: 73

Terbesar: 73 ✅
```

### 🧩 Aturan Logika Inti yang Ditemukan

1. Kita memotong angka input menjadi kumpulan pasangan **dua digit berdampingan** dari kiri ke kanan.
2. Setiap kali bergeser ke kanan, kita hanya melangkah **satu digit** (misal dari `64` bergeser ke `41`, angka `4` digunakan kembali).
3. Kita membandingkan setiap pasangan baru dengan pasangan terbesar yang sudah dicatat. Jika pasangan baru lebih besar, kita perbarui catatan.

> [!IMPORTANT]
> 🔔 **Jumlah pasangan** yang terbentuk selalu = **panjang digit input dikurangi 1**.
> Contoh: `641573` punya 6 digit → menghasilkan **5 pasangan**.

---

<a name="algoritma-tahan-lupa"></a>

## 🧠 Pilar 2 — Algoritma Tahan Lupa

Setiap langkah algoritma di bawah menjelaskan **"Kenapa"** disertai **contoh angka konkret** agar tidak mudah lupa.

> 1. **Konversi Angka ke Teks `[PERSIAPAN]`** (Ubah `num` menjadi string):
>    - **Kenapa:** Tipe data `Number` tidak memiliki indeks (`num[0]`) dan tidak punya `.length`. Dengan mengubah ke string, kita bisa mengakses setiap digit secara individual.
>    - **Contoh:** `641573` → `"641573"`. Sekarang `str[0]` = `"6"`, `str[4]` = `"7"`.
> 2. **Inisialisasi Penampung Terbesar `[VARIABEL AWAL]`** (Set `maxPair = 0`):
>    - **Kenapa:** Kita butuh variabel untuk mencatat "rekor tertinggi sementara". Diinisialisasi `0` karena semua pasangan 2 digit pasti bernilai ≥ 0.
>    - **Contoh:** `maxPair` dimulai dari `0`, lalu akan diperbarui ke `64` pada putaran pertama.
> 3. **Perulangan Jendela Geser `[FOR LOOP]`** (Iterasi `i` dari `0` sampai `str.length - 2`):
>    - **Kenapa batas `str.length - 1`?** Karena setiap pasangan membutuhkan indeks `i` dan `i + 1`. Jika `i` mencapai indeks terakhir, `i + 1` akan keluar dari batas string dan menghasilkan `undefined`.
>    - **Contoh:** String `"641573"` panjang 6. Loop berjalan `i = 0, 1, 2, 3, 4` (5 putaran = 5 pasangan). Saat `i = 4`: `str.slice(4, 6)` = `"73"` ✅. Saat `i = 5`: `str.slice(5, 7)` = `"3"` ❌ hanya 1 digit!
> 4. **Ambil & Konversi Pasangan `[DALAM LOOP]`** (Potong 2 karakter, ubah ke angka):
>    - **Kenapa perlu konversi?** Karena `.slice()` mengembalikan **string**. Perbandingan string mengikuti urutan leksikografis (seperti kamus), bukan numerik. `"9" > "83"` menghasilkan `true` padahal `9 < 83`!
>    - **Contoh:** `str.slice(0, 2)` = `"64"` → `Number("64")` = `64`.
> 5. **Bandingkan & Perbarui `[DALAM LOOP]`** (Gunakan `Math.max`):
>    - **Kenapa `Math.max`?** Lebih ringkas dan tidak rawan typo dibanding menulis blok `if-else` manual. Satu baris menggantikan tiga baris.
>    - **Contoh:** `Math.max(64, 41)` = `64`. Kemudian `Math.max(64, 73)` = `73`.

---

<a name="blueprint--kamus-variabel"></a>

## 🗺️ Pilar 3 — Blueprint & Kamus Variabel

### A. Kamus Variabel

| Lokasi / Peran      | ✅ Rekomendasi                 | ❌ Jangan Gunakan      | Alasan                                                                      |
| ------------------- | ------------------------------ | ---------------------- | --------------------------------------------------------------------------- |
| Parameter Input     | `number`                       | `num`, `n`             | Kata penuh lebih deskriptif dan profesional                                 |
| Representasi String | `numberString` / `digitString` | `str`, `s`             | Menjelaskan bahwa ini adalah versi teks dari digit angka                    |
| Penampung Terbesar  | `maxPair`                      | `largest`, `candidate` | `maxPair` langsung menggambarkan "nilai maksimum dari pasangan"             |
| Pasangan Saat Ini   | `currentPair`                  | `pair`, `pasangan`     | Menambahkan `current` memperjelas bahwa ini nilai yang berubah tiap putaran |
| Counter Loop        | `i`                            | `idx`, `index`         | Standar universal untuk counter loop sederhana                              |

### B. Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Jendela Geser 2 Digit)

function pasanganTerbesar(number) {
  const numberString = _____; // [KONVERSI] → ubah angka ke string

  let maxPair = _____; // [INISIALISASI] → pasangan terbesar awal

  for (let i = _; i < _____; i++) {
    // [LOOP] → geser jendela dari kiri ke kanan
    const currentPair = _____; //   [AMBIL] → potong 2 digit, konversi ke angka
    maxPair = _____; //   [BANDINGKAN] → perbarui jika lebih besar
  }

  return maxPair; // [HASIL] → kembalikan pasangan terbesar
}
```

---

<a name="pendekatan-bertahap"></a>

## 🛠️ Pilar 4 — Pendekatan Bertahap (Step-by-Step)

> **⏱️ Proses pengerjaan:** 3 langkah bertahap | **📋 Prasyarat:** Pemahaman Fase 1 (Visualisasi Pola)

---

### 🔵 Step 1 — Konversi & Kerangka Loop Dasar

**1.** 📋 **Buat fungsi, konversi input ke string, dan buat kerangka loop kosong.**

```javascript
const pasanganTerbesar = (num) => {
  const str = String(num);

  for (let i = 0; i < str.length - 1; i++) {
    // masih kosong
  }
};
```

> [!NOTE]
> 💡 **Kenapa `str.length - 1`?** Karena pasangan terakhir berada di indeks `length - 2` dan `length - 1`. Jika `i` mencapai indeks terakhir, `i + 1` akan keluar dari batas string.

---

### 🔵 Step 2 — Ambil & Cetak Semua Pasangan

**2.** 🔍 **Tambahkan logika `.slice()` untuk mengambil pasangan, lalu cetak dengan `console.log` untuk verifikasi.**

```javascript
const pasanganTerbesar = (num) => {
  const str = String(num);

  for (let i = 0; i < str.length - 1; i++) {
    const pasangan = str.slice(i, i + 2);
    console.log(pasangan); // Output: "64", "41", "15", "57", "73"
  }
};
```

> [!CAUTION]
> 🔴 **Jebakan `.slice()` yang sempat terjadi!** Parameter kedua `.slice(start, end)` bersifat **eksklusif** (tidak termasuk). Menulis `.slice(i, i + 1)` hanya mengambil **1 karakter**, bukan 2! Harus `.slice(i, i + 2)`.

---

### 🔵 Step 3 — Tambahkan Logika Perbandingan & Return

**3.** 🚨 **LANGKAH FINAL! Tambahkan variabel penampung, konversi ke angka, bandingkan, dan kembalikan hasilnya.**

```javascript
const pasanganTerbesar = (num) => {
  const str = String(num);

  let terbesar = 0;

  for (let i = 0; i < str.length - 1; i++) {
    const pasangan = Number(str.slice(i, i + 2));
    terbesar = Math.max(terbesar, pasangan);
  }

  return terbesar;
};
```

🎊 **Selesai!** Solusi pertama berhasil:

```
✅ Konversi string    →  String(num)
✅ Loop batas aman    →  i < str.length - 1
✅ Ambil 2 digit      →  str.slice(i, i + 2)
✅ Konversi angka     →  Number(...)
✅ Cari terbesar      →  Math.max(...)
```

---

<a name="evolusi-solusi"></a>

## 🔄 Pilar 5 — Evolusi Solusi (3 Versi)

### Versi 1: Classic Loop (Solusi Utama)

```javascript
function pasanganTerbesar(number) {
  const numberString = String(number);
  let maxPair = 0;

  for (let i = 0; i < numberString.length - 1; i++) {
    const currentPair = Number(numberString.slice(i, i + 2));
    maxPair = Math.max(maxPair, currentPair);
  }

  return maxPair;
}
```

```
🎯 Gaya       → Imperatif (step-by-step)
📌 Inisialisasi → maxPair = 0
🔐 Kelebihan  → Sangat mudah dibaca dan di-debug
```

---

### Versi 2: Optimasi Loop (Template Literal + Inisialisasi Cerdas)

Versi ini berdasarkan **kode mandiri** yang ditulis sebelum sesi mentoring, sudah di-refactor dengan clean naming:

```javascript
function pasanganTerbesar(number) {
  const numberString = String(number);

  // Langsung ambil pasangan pertama sebagai patokan awal
  let maxPair = Number(`${numberString[0]}${numberString[1]}`);

  // Loop dimulai dari i = 1 (pasangan pertama sudah diambil)
  for (let i = 1; i < numberString.length - 1; i++) {
    const currentPair = Number(`${numberString[i]}${numberString[i + 1]}`);
    maxPair = Math.max(maxPair, currentPair);
  }

  return maxPair;
}
```

```
🎯 Gaya       → Imperatif + optimasi
📌 Inisialisasi → Pasangan pertama langsung diambil
🔐 Kelebihan  → Menghemat 1 putaran loop + 1 operasi Math.max
```

---

### Versi 3: Functional Programming (Deklaratif)

```javascript
function pasanganTerbesar(number) {
  const numberString = String(number);

  // Buat array berisi semua pasangan 2 digit
  const pairList = Array.from({ length: numberString.length - 1 }, (_, i) =>
    Number(numberString.slice(i, i + 2)),
  );

  // Cari nilai terbesar dari array
  return Math.max(...pairList);
}
```

```
🎯 Gaya       → Deklaratif (apa, bukan bagaimana)
📌 Inisialisasi → Tidak perlu variabel penampung manual
🔐 Kelebihan  → Sangat ringkas dan modern
```

---

### ⚖️ Tabel Perbandingan 3 Versi

| Aspek        | Versi 1 🟢 Classic |  Versi 2 🔵 Optimasi  |        Versi 3 🟡 Functional        |
| ------------ | :----------------: | :-------------------: | :---------------------------------: |
| Readability  |  ✅ Sangat jelas   |       ✅ Jelas        |   ⚠️ Perlu pemahaman `Array.from`   |
| Performa     |      ✅ Baik       | ✅ Sedikit lebih baik | ⚠️ Membuat array tambahan di memori |
| Jumlah baris |      7 baris       |        8 baris        |               6 baris               |
| Gaya         |     Imperatif      |       Imperatif       |             Deklaratif              |
| Cocok untuk  |  🟢 Pemula & tim   |  🔵 Optimasi ringan   |      🟡 Kode ringkas & modern       |

> [!TIP]
> 🏆 **Kesimpulan:** Untuk pemula dan lingkungan tim, **Versi 1 (Classic Loop)** adalah pilihan terbaik karena paling mudah dibaca dan di-debug. **Versi 2 (Optimasi)** cocok jika kamu ingin menunjukkan pemahaman yang lebih dalam. **Versi 3 (Functional)** cocok untuk kode yang ringkas tetapi membutuhkan pemahaman `Array.from` dan spread operator.

---

<a name="naming-convention"></a>

## 🏷️ Pilar 6 — Naming Convention

### 📊 Tabel Perbandingan Penamaan Variabel

| Lokasi / Peran      | ❌ Bad                 | ✅ Good                        | Alasan                                                                       |
| ------------------- | ---------------------- | ------------------------------ | ---------------------------------------------------------------------------- |
| Parameter Input     | `num`, `n`             | `number`                       | Kata penuh lebih deskriptif dan profesional                                  |
| Representasi String | `str`, `s`             | `numberString` / `digitString` | Menjelaskan bahwa ini versi teks dari digit angka, bukan string generik      |
| Penampung Terbesar  | `candidate`, `largest` | `maxPair`                      | Langsung menggambarkan "nilai maksimum dari pasangan"                        |
| Pasangan Saat Ini   | `pasangan`, `pair`     | `currentPair`                  | Kata `current` memperjelas bahwa ini nilai dinamis yang berubah tiap putaran |
| Counter Loop        | `idx`, `index`         | `i`                            | Standar universal untuk counter loop sederhana                               |

### 💡 Best Practice yang Dipelajari

1. **Kapan `i` boleh dipakai?** → Hanya untuk counter index pada loop `for` sederhana. Jika ada nested loop yang merepresentasikan konsep nyata (baris, kolom), gunakan nama deskriptif.
2. **Konsistensi bahasa** → Jika fungsi menggunakan bahasa Indonesia (`pasanganTerbesar`), variabel di dalamnya boleh menggunakan bahasa Inggris (`maxPair`, `currentPair`) selama konsisten.
3. **Hindari variable shadowing** → Jangan beri nama variabel yang sama persis dengan nama fungsi (misal fungsi `pasanganTerbesar` dan variabel `pasanganTerbesar` di dalamnya), karena bisa menimbulkan bug jika kelak membutuhkan rekursi.

---

<a name="gotchas--peringatan"></a>

## ⚠️ Pilar 7 — Gotchas & Peringatan

> ⚠️ **Gotcha #1: `.slice(i, i + 1)` hanya mengambil 1 karakter!**
> Parameter kedua `.slice(start, end)` bersifat **eksklusif**. Untuk mengambil 2 karakter, gunakan `.slice(i, i + 2)`.

> ⚠️ **Gotcha #2: Loop dimulai dari `i = 1` padahal pasangan pertama belum diambil!**
> Jika kamu memulai loop dari `i = 1` tanpa menginisialisasi `maxPair` dengan pasangan pertama, pasangan `str[0] + str[1]` akan terlewat dan tidak pernah diperiksa.

> ⚠️ **Gotcha #3: Perbandingan string vs angka!**
> `"9" > "83"` menghasilkan `true` di JavaScript karena perbandingan string menggunakan urutan leksikografis (karakter per karakter). Selalu konversi ke `Number()` sebelum membandingkan!

> ⚠️ **Gotcha #4: `i < str.length` tanpa `-1` menyebabkan pasangan tidak lengkap!**
> Pada putaran terakhir (`i = str.length - 1`), `str.slice(i, i + 2)` hanya mengembalikan 1 karakter karena indeks `i + 1` sudah keluar dari batas string. Hasilnya akan menjadi angka 1 digit yang salah.

---

<a name="verifikasi"></a>

## ✅ Verifikasi — Cara Memastikan Solusi Benar

### 1️⃣ Jalankan Semua Test Cases

```javascript
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
```

Pastikan **semua baris** menghasilkan output yang sesuai:

```
73  ← ✅
83  ← ✅
91  ← ✅
85  ← ✅
99  ← ✅
```

### 2️⃣ Uji Edge Case — Input 2 Digit

```javascript
console.log(pasanganTerbesar(45)); // 45
```

Pastikan output menghasilkan `45` (karena hanya ada 1 pasangan).

### 3️⃣ Uji Edge Case — Pasangan dengan Angka 0

```javascript
console.log(pasanganTerbesar(910233)); // 91
```

Pastikan pasangan `02` dikonversi menjadi angka `2` (bukan error) dan tidak mengganggu perbandingan.

---

<a name="catatan-akhir"></a>

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **20 Mei 2026** berdasarkan sesi mentoring interaktif langsung di **Google Antigravity** menggunakan workflow `/mentor-challenge` (5 Fase) dan format `/setup-doc`. Seluruh konten disinkronkan dari percakapan nyata antara mentor AI dan murid — termasuk kesalahan yang terjadi selama proses belajar, yang justru menjadi pelajaran berharga.
