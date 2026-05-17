# 🔄 String Reversal — Balik Kata

### ✨ _Membedah logika pembalikan string dari nol hingga one-liner — melalui 5 fase mentoring terstruktur_

> 🎯 **Tujuan:** Memahami cara membalik urutan karakter sebuah string menggunakan JavaScript dengan **3 versi evolusi solusi**, mulai dari `for loop` manual hingga **spread operator one-liner** — disertai proses berpikir step-by-step.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Soal & Spesifikasi](#soal-spesifikasi) | Deskripsi challenge & test cases |
| 🔍 | [Visualisasi & Analisis](#visualisasi-analisis) | Tabel breakdown proses pembalikan karakter |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint-kamus-variabel) | Kerangka kode + rekomendasi naming |
| 🧱 | [Pendekatan Bertahap](#pendekatan-bertahap) | Proses membangun solusi step-by-step |
| 🚀 | [Evolusi Solusi](#evolusi-solusi) | 3 versi dari for loop → spread operator |
| 🏷️ | [Naming Convention](#naming-convention) | Tabel ❌ vs ✅ penamaan variabel |
| ⚠️ | [Gotchas & Peringatan](#gotchas-peringatan) | Jebakan umum yang harus dihindari |
| 📎 | [File Terkait](#file-terkait) | Link ke dokumentasi pelengkap |

---

<a name="soal-spesifikasi"></a>

## 📋 Soal & Spesifikasi

### Deskripsi Challenge

Buat function `balikKata(kata)` yang menerima **satu parameter string** dan me-return **kata yang dibalik**.

| Input | Output |
|-------|--------|
| `"John Doe"` | `"eoD nhoJ"` |
| `"Hello World and Coders"` | `"sredoC dna dlroW olleH"` |
| `"Super"` | `"repuS"` |

### Test Cases

```javascript
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe'));                // eoD nhoJ
console.log(balikKata('I am a bookworm'));          // mrowkoob a ma I
console.log(balikKata('Coding is my hobby'));       // ybboh ym si gnidoC
console.log(balikKata('Super'));                    // repuS
```

---

<a name="visualisasi-analisis"></a>

## 🔍 Pilar 1 — Visualisasi & Analisis Pola

> [!NOTE]
> 💡 Sebelum menulis kode apapun, kita harus **memetakan proses pembalikan** secara visual agar menemukan pola algoritmanya.

### Peta Indeks String

Ambil contoh kata `"John"` — setiap karakter memiliki **indeks** yang dimulai dari `0`:

| Karakter | J | o | h | n |
|----------|---|---|---|---|
| **Indeks** | 0 | 1 | 2 | 3 |

**Fakta kunci:** Panjang string (`length`) = **4**, tapi indeks terakhir = **3** → Rumus: **`length - 1`**

### Tabel Proses Pembalikan

Untuk membalik `"John"` menjadi `"nhoJ"`, kita membaca dari **indeks paling belakang** menuju **indeks 0**:

| Langkah | Indeks yang Diambil | Karakter | Hasil Gabungan Sementara |
|:-------:|:-------------------:|:--------:|:------------------------:|
| 1 | 3 | `n` | `"n"` |
| 2 | 2 | `h` | `"nh"` |
| 3 | 1 | `o` | `"nho"` |
| 4 | 0 | `J` | `"nhoJ"` |

### 🧠 Logika Inti yang Ditemukan

1. **Titik Mulai:** Indeks paling akhir → `kata.length - 1`
2. **Arah Perjalanan:** Mundur → indeks berkurang setiap langkah (`i--`)
3. **Titik Berhenti:** Indeks `0` (huruf terdepan) → kondisi `i >= 0`
4. **Aksi Setiap Langkah:** Ambil karakter di indeks saat ini, lalu "lem" ke kanvas penampung

```
Visualisasi Arah Pembacaan:

  "J  o  h  n"
   0  1  2  3
            ↑ ← ← ←  MULAI dari sini (length - 1)
   ↑ ← ← ←           BERHENTI di sini (indeks 0)

  Hasil: "n" + "h" + "o" + "J" = "nhoJ"
```

---

<a name="blueprint-kamus-variabel"></a>

## 🗺️ Pilar 3 — Blueprint & Kamus Variabel

### A. Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|----------------|-------------------|--------|
| Kanvas penampung string terbalik | `reversedString` | `result`, `res`, `x` | Langsung menjelaskan bahwa isinya adalah "string yang dibalik" |
| Iterator loop mundur | `i` | `index`, `counter` | `i` adalah standar universal untuk iterator numerik tunggal |
| Parameter input | `kata` | `s`, `str` | Nama asli dari soal; deskriptif dalam bahasa Indonesia |

> [!TIP]
> 💡 Nama `result` memang sangat umum dipakai, tapi terlalu generik. `reversedString` memberi tahu pembaca **apa isi variabel itu** tanpa harus membaca seluruh fungsi.

### B. Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Baca mundur karakter satu per satu)

const balikKata = (kata) => {
  let reversedString = '';                              // [KANVAS] penampung hasil (❌ jangan 'result')

  for (let i = kata.length - 1; i >= 0; i--) {          // [LOOP MUNDUR] → dari belakang ke depan
    reversedString += kata[i];                           //   [TEMPEL] → ambil karakter, lem ke kanvas
  }

  return reversedString;                                // [SERAHKAN] → kembalikan kanvas yang sudah terisi
};
```

---

<a name="pendekatan-bertahap"></a>

## 🧱 Pilar 4 — Pendekatan Bertahap (Step-by-Step)

> [!IMPORTANT]
> 🔔 Solusi dibangun **bertahap**, bukan langsung full code. Proses ini mencerminkan cara berpikir saat sesi mentoring berlangsung.

### Step 1 — Loop Mundur: Cetak Karakter Satu Per Satu

Fokus hanya pada **membaca karakter dari belakang** tanpa memikirkan penggabungan:

```javascript
const balikKata = (kata) => {
  for (let i = kata.length - 1; i >= 0; i--) {
    console.log(kata[i]);
  }
};

balikKata("John");
// Output di console:
// n
// h
// o
// J
```

*(Kenapa mulai dari sini: Pastikan dulu loop berjalan benar dan urutan karakter sudah terbalik sebelum menambah kompleksitas.)*

---

### Step 2 — Siapkan Kanvas Kosong + Gabungkan Karakter

Ganti `console.log` dengan operasi penggabungan string menggunakan operator `+=`:

```javascript
const balikKata = (kata) => {
  let reversedString = '';  // ← Kanvas kosong

  for (let i = kata.length - 1; i >= 0; i--) {
    reversedString += kata[i];  // ← Tempel karakter ke kanvas
  }

  return reversedString;  // ← Serahkan kanvas
};
```

*(Kenapa `+=`: Operator ini menambahkan karakter baru di **ujung belakang** string yang sudah ada. Karena kita membaca dari belakang, urutan tempelannya otomatis menjadi terbalik.)*

---

### Step 3 — Verifikasi dengan Semua Test Cases ✅

```javascript
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH ✅
console.log(balikKata('John Doe'));                // eoD nhoJ ✅
console.log(balikKata('I am a bookworm'));          // mrowkoob a ma I ✅
console.log(balikKata('Coding is my hobby'));       // ybboh ym si gnidoC ✅
console.log(balikKata('Super'));                    // repuS ✅
```

---

<a name="evolusi-solusi"></a>

## 🚀 Pilar 5 — Evolusi Solusi (3 Versi)

### Versi 1 — For Loop Mundur *(Fondasi Algoritma)*

```javascript
const balikKata = (kata) => {
  let reversedString = '';

  for (let i = kata.length - 1; i >= 0; i--) {
    reversedString += kata[i];
  }

  return reversedString;
};
```

> 📌 **Mental Model:** "Mulai dari ujung belakang, jalan mundur langkah demi langkah, tempel setiap huruf ke kanvas kosong."

---

### Versi 2 — Split-Reverse-Join *(Built-in Standard)*

```javascript
const balikKata = (kata) => kata.split('').reverse().join('');
```

> 📌 **Mental Model:** "Pecah string jadi array per huruf → putar balik urutan array → gabung kembali jadi string."

**Proses chaining method untuk `"John"`:**

```
"John"  →  .split('')   →  ['J', 'o', 'h', 'n']
        →  .reverse()   →  ['n', 'h', 'o', 'J']
        →  .join('')    →  "nhoJ"
```

---

### Versi 3 — Spread Operator *(Modern ES6 One-Liner)* 🏆

```javascript
const balikKata = (kata) => [...kata].reverse().join('');
```

> 📌 **Mental Model:** "Sebarkan string ke dalam array menggunakan `...` → putar balik → gabung kembali."

**Kenapa `[...kata]` lebih unggul dari `.split('')`?** Spread operator menangani **Unicode/emoji** dengan benar:

```javascript
// ❌ split('') — emoji bisa pecah jadi karakter aneh
"Ayo 🚀".split('')    // ['A', 'y', 'o', ' ', '\uD83D', '\uDE80']

// ✅ spread — emoji tetap utuh sebagai 1 karakter
[..."Ayo 🚀"]         // ['A', 'y', 'o', ' ', '🚀']
```

---

### Tabel Perbandingan Evolusi

| Aspek | V1 For Loop | V2 Split-Reverse-Join | V3 Spread 🏆 |
|-------|:----------:|:---------------------:|:------------:|
| Jumlah Baris | 7 | 1 | 1 |
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Unicode Safe | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Performance | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Cocok Untuk | Belajar algoritma | Production (standar) | Production (modern) |

> [!TIP]
> 🏆 **Rekomendasi:**
> - **Untuk belajar:** Versi 1 — melatih logika loop & indeks
> - **Untuk production:** Versi 3 — ringkas, modern, dan aman untuk Unicode

---

<a name="naming-convention"></a>

## 🏷️ Pilar 6 — Naming Convention

| Variabel (Peran) | ❌ Kurang Jelas | ✅ Rekomendasi | Alasan |
|---|---|---|---|
| Kanvas penampung | `res`, `result`, `x`, `r` | `reversedString` | Langsung menjelaskan **apa isi** variabel |
| Iterator loop | `index`, `counter` | `i` | Standar universal untuk iterator numerik tunggal dalam loop |
| Parameter input | `s`, `str`, `word` | `kata` | Mengikuti nama asli dari soal; deskriptif |

> [!NOTE]
> 💡 **Kapan boleh pakai `i`?** Untuk loop numerik sederhana yang hanya berfungsi sebagai penghitung posisi. Jika loop memiliki makna spesifik (misal: menghitung baris piramida), gunakan nama deskriptif seperti `row` atau `level`.

---

<a name="gotchas-peringatan"></a>

## ⚠️ Pilar 7 — Gotchas & Peringatan

> [!CAUTION]
> 🔴 **`.split()` tanpa argumen ≠ `.split('')`**
>
> ```javascript
> // ❌ SALAH — tanpa argumen, string tidak dipecah per huruf
> "John".split()    // ['John']  → 1 elemen utuh!
>
> // ✅ BENAR — empty string sebagai separator
> "John".split('')  // ['J', 'o', 'h', 'n']  → 4 elemen per huruf
> ```

> [!WARNING]
> 🐛 **`.join()` tanpa argumen menyisipkan koma!**
>
> ```javascript
> // ❌ SALAH — default separator adalah koma
> ['n', 'h', 'o', 'J'].join()    // "n,h,o,J"
>
> // ✅ BENAR — empty string = gabung tanpa pemisah
> ['n', 'h', 'o', 'J'].join('')  // "nhoJ"
> ```
> Ingat: `.split('')` dan `.join('')` harus **sama-sama** menggunakan empty string `''`.

> [!WARNING]
> 🐛 **`.split('')` tidak Unicode-safe!**
>
> ```javascript
> // ❌ PECAH — emoji dihitung sebagai 2 karakter oleh split
> "Hi 🚀".split('')   // ['H', 'i', ' ', '\uD83D', '\uDE80']
>
> // ✅ AMAN — spread operator menangani Unicode dengan benar
> [..."Hi 🚀"]        // ['H', 'i', ' ', '🚀']
> ```
> Jika input mungkin mengandung emoji atau karakter Unicode khusus, gunakan **spread operator** `[...kata]` alih-alih `.split('')`.

---

<a name="file-terkait"></a>

## 📎 File Terkait

| File | Deskripsi |
|------|-----------|
| [Dokumentasi-Membalik-String-balik-kata-reverse-string.md](./Dokumentasi-Membalik-String-balik-kata-reverse-string.md) | Panduan lengkap untuk pemula — 5 solusi berbeda, penjelasan split & join, tips & best practices |

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **17 Mei 2026** berdasarkan sesi mentoring challenge `balikKata` menggunakan metode 5 Fase Mentoring Terstruktur. Fokus utama: **proses berpikir bertahap** dari for loop manual hingga spread operator one-liner, serta pemahaman mendalam terhadap `.split()`, `.reverse()`, dan `.join()`.

*Dibuat dengan ❤️ untuk pembelajaran pribadi*
