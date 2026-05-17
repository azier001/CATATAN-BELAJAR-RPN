# 📝 QUIZ — Week 1

> 📂 Kumpulan challenge quiz JavaScript di Week 1 Phase 0 — mulai dari **percabangan**, **manipulasi string**, **perulangan**, hingga **function**.

---

## 🗺️ Peta Pembelajaran

```
QUIZ/
├── 01-Conditional-Statement/     ➜ Percabangan logika (if-else, switch-case)
├── 02-Quiz-Pemrograman-.../      ➜ Manipulasi string dasar (sebelum looping)
├── 03-Belajar-Looping/           ➜ Perulangan (while, for, nested loop)
└── 04-Function/                  ➜ Membuat & menggunakan fungsi
```

---

## 📋 Daftar Lengkap Quiz

### 📁 01 — [Conditional Statement](./01-Conditional-Statement/)

> Percabangan logika menggunakan `if-else` dan `switch-case`

| No | Challenge | Konsep Utama | Deskripsi Singkat |
|----|-----------|-------------|-------------------|
| 01 | [Program Game Proxytia](./01-Conditional-Statement/01-Program-Game-Proxytia/) | `if-else`, `switch-case`, falsy value, template literal | Validasi input nama & peran, lalu beri respons berbeda sesuai peran |
| 02 | [Format Bulan dengan Switch](./01-Conditional-Statement/02-Format-Bulan-dengan-Switch/) | `switch-case`, `break`, `default`, strict equality | Konversi angka bulan → nama bulan Indonesia |

---

### 📁 02 — [Quiz Pemrograman Sebelum Masuk Looping](./02-Quiz-Pemrograman-Sebelum-Masuk-Looping/)

> Manipulasi string dasar — fondasi sebelum masuk ke materi looping

| No | Challenge | Konsep Utama | Deskripsi Singkat |
|----|-----------|-------------|-------------------|
| 01 | [Let's Form a Sentence](./02-Quiz-Pemrograman-Sebelum-Masuk-Looping/01-Dokumentasi-string-concatenation-basics_dasar-penggabungan-string/) | string concatenation, `+=` operator | Menggabungkan kata-kata menjadi kalimat |
| 02 | [Manual String Indexing](./02-Quiz-Pemrograman-Sebelum-Masuk-Looping/02-Dokumentasi-manual-string-indexing_akses-karakter-string-manual/) | bracket notation `[]`, zero-based indexing | Mengakses karakter string satu per satu |
| 03 | [Extracting Words with `substring()`](./02-Quiz-Pemrograman-Sebelum-Masuk-Looping/03-Dokumentasi-extracting-words-with-substring_mengambil-kata-dengan-substring/) | `substring()`, inclusive-exclusive rule | Mengambil potongan kata dari sebuah string |
| 04 | [Word Length Using `substring()`](./02-Quiz-Pemrograman-Sebelum-Masuk-Looping/04-Dokumentasi-word-length-using-substring_panjang-kata-menggunakan-substring/) | `substring()`, `.length`, string concatenation | Menghitung panjang kata hasil substring |

---

### 📁 03 — [Belajar Looping](./03-Belajar-Looping/)

> Perulangan di JavaScript — `while`, `for`, dan variasinya

| No | Challenge | Konsep Utama | Deskripsi Singkat |
|----|-----------|-------------|-------------------|
| 01 | [While Loop: Maju & Mundur](./03-Belajar-Looping/01-Dokumentasi-while-loop-forward-backward_perulangan-while-maju-mundur/) | `while`, increment, decrement | Mencetak angka maju (1→10) dan mundur (10→1) |
| 02 | [For Loop: Maju & Mundur](./03-Belajar-Looping/02-Dokumentasi-for-loop-forward-backward_perulangan-for-maju-mundur/) | `for`, increment, decrement, block scoping | Versi `for` dari perulangan maju-mundur |
| 03 | [Genap & Ganjil dengan Loop](./03-Belajar-Looping/03-Dokumentasi-even-odd-looping_perulangan-genap-ganjil/) | `for`, `if-else`, modulo (`%`) | Filter & cetak bilangan genap/ganjil |
| 04 | [Perulangan & Kelipatan](./03-Belajar-Looping/04-Dokumentasi-loop-and-multiples_perulangan-dan-kelipatan/) | `for`, custom increment (`+=`), modulo (`%`) | Mencetak kelipatan angka tertentu |
| 05 | [Pola Bintang dengan Looping](./03-Belajar-Looping/05-Dokumentasi-star-pattern-loops_pola-bintang-perulangan/) | nested loop, `.repeat()`, `\n` newline | Membuat pola segitiga bintang |

---

### 📁 04 — [Function](./04-Function/)

> Membuat dan menggunakan fungsi JavaScript

| No | Challenge | Konsep Utama | Deskripsi Singkat |
|----|-----------|-------------|-------------------|
| 01 | [Fungsi `shoutOut()`](./04-Function/01-Dokumentasi-basic-function-shoutout_fungsi-dasar-shoutout/) | function declaration, parameter, `console.log()` | Fungsi dasar yang mencetak sapaan |
| 02 | [Fungsi `calculateMultiply()`](./04-Function/02-Dokumentasi-calculatemultiply-function_fungsi-calculatemultiply/) | arrow function, `return`, parameter | Fungsi perkalian dengan arrow function |
| 03 | [Fungsi `processSentence()`](./04-Function/03-Dokumentasi-processsentence-function_fungsi-processsentence/) | multiple parameters, template literals | Fungsi pemrosesan kalimat multi-parameter |

---

## 📊 Statistik

| Kategori | Jumlah Challenge | Konsep yang Dipelajari |
|----------|:----------------:|----------------------|
| 🔀 Conditional Statement | 2 | `if-else`, `switch-case`, falsy value |
| 🧩 Manipulasi String | 4 | concatenation, indexing, `substring()`, `.length` |
| 🔄 Looping | 5 | `while`, `for`, modulo, nested loop, `.repeat()` |
| 🧩 Function | 3 | declaration, arrow function, `return`, parameter |
| **Total** | **14** | |

---

## 🎯 Alur Belajar yang Disarankan

```
┌─────────────────────┐
│  01 • Conditional    │  ← Mulai dari sini: logika percabangan dasar
│     Statement        │
└────────┬────────────┘
         ▼
┌─────────────────────┐
│  02 • Manipulasi     │  ← Kuasai string sebelum masuk loop
│     String           │
└────────┬────────────┘
         ▼
┌─────────────────────┐
│  03 • Looping        │  ← Perulangan dari sederhana → pola bintang
│                      │
└────────┬────────────┘
         ▼
┌─────────────────────┐
│  04 • Function       │  ← Gabungkan semua konsep ke dalam fungsi
│                      │
└─────────────────────┘
```

---

## 📂 Struktur File Setiap Challenge

Setiap folder challenge memiliki struktur konsisten:

```
📁 [nama-challenge]/
├── README.md           ← Ringkasan soal, kode solusi, & penjelasan
└── _catatan-awal.md    ← Catatan mentah saat pertama kali belajar
```

---

## 🔗 Navigasi

| Arah | Tujuan |
|------|--------|
| ⬆️ Naik | [WEEK-1](../) |
| 📂 Setara | [UJIAN](../UJIAN/) |

---

📅 Terakhir diperbarui: 17 Mei 2026
