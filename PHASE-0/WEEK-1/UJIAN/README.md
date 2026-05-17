# 📝 UJIAN — Week 1, Phase 0

### ✨ _Kumpulan dokumentasi challenge ujian JavaScript minggu pertama_

> 🎯 **Tujuan:** Halaman indeks untuk navigasi cepat ke setiap challenge ujian beserta konteks, konsep inti, dan file yang tersedia di dalamnya.

---

## 📑 Daftar Challenge

| No | Challenge | Konsep Utama | Versi Solusi |
|:---:|---|---|:---:|
| 01 | [🔢 Bandingkan Angka](#01) | Conditional logic, boolean evaluation | 4 versi |
| 02 | [🔄 Balik Kata](#02) | String indexing, iterasi terbalik, built-in method | 3 versi |
| 03 | [⏱️ Konversi Menit](#03) | Aritmetika modulo/divisi, string formatting | 3 versi |
| 04 | [⚖️ Perbandingan Karakter XO](#04) | Character counting, string traversal, split | 4 versi |

---

<a name="01"></a>

## 🔢 01 — Compare Numbers / Bandingkan Angka

> Bandingkan dua angka dan tentukan mana yang lebih besar, atau apakah keduanya sama.

| Aspek | Detail |
|---|---|
| **Input** | Dua angka (`a`, `b`) |
| **Output** | String: `"a lebih besar"` / `"b lebih besar"` / `"sama"` |
| **Konsep Inti** | `if-else` → ternary → boolean evaluation → one-liner |
| **Evolusi** | 4 versi: dari if-else eksplisit hingga ultimate one-liner |
| **Highlight** | Memahami bahwa `===` sudah menghasilkan boolean — tidak perlu `if` untuk return `true/false` |

### 📁 Isi Folder

| File | Fungsi |
|------|--------|
| [📄 README.md](./01-Dokumentasi-compare-numbers_bandingkan-angka/README.md) | Dokumentasi utama (7 Pilar Kualitas) |
| [📋 Cheat Sheet](./01-Dokumentasi-compare-numbers_bandingkan-angka/0-Cheat-Sheet-compare-numbers_bandingkan-angka.md) | Ringkasan kode siap copy-paste |
| [📚 Dokumentasi Lengkap](./01-Dokumentasi-compare-numbers_bandingkan-angka/Dokumentasi-Function-bandingkanAngka.md) | Panduan mendalam baris per baris |

---

<a name="02"></a>

## 🔄 02 — String Reversal / Balik Kata

> Balik urutan karakter dari sebuah string (misal: `"hello"` → `"olleh"`).

| Aspek | Detail |
|---|---|
| **Input** | Satu string |
| **Output** | String yang sudah dibalik urutannya |
| **Konsep Inti** | Reverse loop (`i--`), `split-reverse-join`, spread operator |
| **Evolusi** | 3 versi: dari for loop manual hingga spread operator one-liner |
| **Highlight** | Memahami perbedaan iterasi maju vs mundur dan kapan memakai built-in method |

### 📁 Isi Folder

| File | Fungsi |
|------|--------|
| [📄 README.md](./02-Dokumentasi-string-reversal_balik-kata/README.md) | Dokumentasi utama (7 Pilar Kualitas) |
| [📋 Cheat Sheet](./02-Dokumentasi-string-reversal_balik-kata/0-Cheat-Sheet-string-reversal_balik-kata.md) | Ringkasan kode siap copy-paste |
| [📚 Dokumentasi Lengkap](./02-Dokumentasi-string-reversal_balik-kata/Dokumentasi-Membalik-String-balik-kata-reverse-string.md) | Panduan mendalam baris per baris |

---

<a name="03"></a>

## ⏱️ 03 — Convert Minutes / Konversi Menit

> Konversi total menit menjadi format string `jam:menit` (misal: `150` → `"2:30"`).

| Aspek | Detail |
|---|---|
| **Input** | Angka (total menit) |
| **Output** | String format `"jam:menit"` |
| **Konsep Inti** | `Math.floor()`, operator modulo `%`, string padding |
| **Evolusi** | 3 versi: dari if statement hingga `.padStart()` one-liner |
| **Highlight** | Memahami divisi integer (`Math.floor`) dan sisa bagi (`%`) untuk konversi satuan waktu |

### 📁 Isi Folder

| File | Fungsi |
|------|--------|
| [📄 README.md](./03-Dokumentasi-convert-minutes_konversi-menit/README.md) | Dokumentasi utama (7 Pilar Kualitas) |
| [📋 Cheat Sheet](./03-Dokumentasi-convert-minutes_konversi-menit/0-Cheat-Sheet-convert-minutes_konversi-menit.md) | Ringkasan kode siap copy-paste |
| [📚 Dokumentasi Lengkap](./03-Dokumentasi-convert-minutes_konversi-menit/Dokumentasi-Fungsi-Konversi-Menit-ke-Jam.md) | Panduan mendalam baris per baris |

---

<a name="04"></a>

## ⚖️ 04 — Character Comparison / Perbandingan Karakter XO

> Cek apakah jumlah huruf `x` sama dengan jumlah huruf `o` di dalam sebuah string.

| Aspek | Detail |
|---|---|
| **Input** | Satu string berisi kombinasi karakter |
| **Output** | `true` (jumlah sama) / `false` (jumlah beda) |
| **Konsep Inti** | Character counting, `for...of`, `split()`, single counter |
| **Evolusi** | 4 versi: two counters → split one-liner → single counter → early return |
| **Highlight** | Mental model "tarik tambang" — `x` = +1, `o` = -1, imbang = 0. Plus jebakan case-sensitive! |

### 📁 Isi Folder

| File | Fungsi |
|------|--------|
| [📄 README.md](./04-Dokumentasi-character-comparison_perbandingan-karakter-xo/README.md) | Dokumentasi utama (7 Pilar Kualitas) |
| [📋 Cheat Sheet](./04-Dokumentasi-character-comparison_perbandingan-karakter-xo/0-Cheat-Sheet-character-comparison_perbandingan-karakter-xo.md) | Ringkasan kode siap copy-paste |
| [📚 Dokumentasi Lengkap](./04-Dokumentasi-character-comparison_perbandingan-karakter-xo/Dokumentasi-Function-XO-3-Alternatif-Solusi.md) | Panduan mendalam 3 alternatif solusi |

---

## 🧠 Peta Konsep JavaScript yang Dipelajari

| Konsep | Dipelajari di Challenge |
|---|---|
| `if-else` / `else if` | 01 Bandingkan Angka |
| Ternary operator (`? :`) | 01 Bandingkan Angka |
| Boolean evaluation langsung | 01 Bandingkan Angka |
| `for` loop (index-based) | 02 Balik Kata, 04 XO |
| `for...of` loop | 04 XO |
| `while` loop | 04 XO |
| `.split()` / `.reverse()` / `.join()` | 02 Balik Kata, 04 XO |
| Spread operator (`[...str]`) | 02 Balik Kata |
| `Math.floor()` / operator `%` | 03 Konversi Menit |
| `.padStart()` | 03 Konversi Menit |
| `.toLowerCase()` | 04 XO |
| `===` strict equality | 01, 04 |
| Early return pattern | 04 XO |
| String indexing (`str[i]`) | 02 Balik Kata, 04 XO |

---

## 📐 Struktur Folder

```
📂 UJIAN/
├── 📄 README.md                          ← 📍 Kamu di sini
│
├── 📂 01-Dokumentasi-compare-numbers_bandingkan-angka/
│   ├── 📄 README.md
│   ├── 📋 0-Cheat-Sheet-compare-numbers_bandingkan-angka.md
│   └── 📚 Dokumentasi-Function-bandingkanAngka.md
│
├── 📂 02-Dokumentasi-string-reversal_balik-kata/
│   ├── 📄 README.md
│   ├── 📋 0-Cheat-Sheet-string-reversal_balik-kata.md
│   └── 📚 Dokumentasi-Membalik-String-balik-kata-reverse-string.md
│
├── 📂 03-Dokumentasi-convert-minutes_konversi-menit/
│   ├── 📄 README.md
│   ├── 📋 0-Cheat-Sheet-convert-minutes_konversi-menit.md
│   └── 📚 Dokumentasi-Fungsi-Konversi-Menit-ke-Jam.md
│
└── 📂 04-Dokumentasi-character-comparison_perbandingan-karakter-xo/
    ├── 📄 README.md
    ├── 📋 0-Cheat-Sheet-character-comparison_perbandingan-karakter-xo.md
    └── 📚 Dokumentasi-Function-XO-3-Alternatif-Solusi.md
```

---

> 📝 **Catatan:**
> Setiap folder challenge mengikuti struktur yang konsisten:
> - **README.md** → Dokumentasi utama dengan 7 Pilar Kualitas (visualisasi, algoritma, blueprint, step-by-step, evolusi, naming, gotchas)
> - **0-Cheat-Sheet-\*.md** → Ringkasan kode per kategori (Best Practice / Fundamental / Eksperimental) siap copy-paste
> - **Dokumentasi-\*.md** → Panduan mendalam dengan analisis baris per baris

*Dibuat dengan ❤️ untuk pembelajaran pribadi*
