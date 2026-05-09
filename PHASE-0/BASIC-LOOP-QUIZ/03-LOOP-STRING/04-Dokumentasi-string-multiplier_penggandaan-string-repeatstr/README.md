# 🔁 repeatStr — String Multiplier

### ✨ _Belajar menggandakan string sebanyak N kali menggunakan loop manual dan pola Accumulator_

> 🎯 **Tujuan:** Memahami cara merakit string secara bertahap menggunakan **Accumulator Pattern** di dalam loop, menguasai perbedaan pendekatan **For Loop** vs **While Loop**, serta memahami konsep **String Immutability** — tanpa menggunakan built-in method seperti `.repeat()`.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Latar Belakang](#latar-belakang) | Apa challenge ini dan kenapa penting |
| 🔑 | [Konsep Kunci](#konsep-kunci) | Teknik inti: Accumulator Pattern & String Concatenation |
| 🛠️ | [Solusi V1 — For Loop](#solusi-v1) | Pendekatan hitung maju `for (let i = 0; i < n; i++)` |
| 🔧 | [Solusi V2 — While Loop](#solusi-v2) | Pendekatan hitung mundur `while (n > 0)` |
| 🌍 | [Best Practice — Modern JS](#best-practice) | Cara `.repeat()`, `Array(n).fill()`, dan insight String Immutability |
| 📊 | [Perbandingan Semua Versi](#perbandingan) | Tabel komparasi semua pendekatan |
| 📚 | [Konsep yang Dipelajari](#konsep-dipelajari) | Rangkuman pelajaran dari sesi mentoring |
| 💡 | [Catatan Tambahan](#catatan-tambahan) | Insight & tips dari mentor |

---

<a name="latar-belakang"></a>

## 📖 Latar Belakang

Challenge ini berasal dari **Codewars** ([link soal](https://www.codewars.com/kata/57a0e5c372292dd76d000d7e)).

**Tugas:** Buat fungsi `repeatStr(n, s)` yang menerima angka `n` dan string `s`, lalu mengembalikan string `s` yang **diulang sebanyak `n` kali**.

**Constraint tambahan:** Wajib menggunakan **loop manual** dan **tanpa built-in method** yang menggantikan loop (seperti `.repeat()`).

### 💡 Contoh Input & Output

| Input | Output |
|-------|--------|
| `repeatStr(3, "*")` | `"***"` |
| `repeatStr(5, "#")` | `"#####"` |
| `repeatStr(2, "ha ")` | `"ha ha "` |
| `repeatStr(0, "")` | `""` |
| `repeatStr(0, "I")` | `""` |
| `repeatStr(5, "")` | `""` |
| `repeatStr(6, "I")` | `"IIIIII"` |
| `repeatStr(5, "Hello")` | `"HelloHelloHelloHelloHello"` |

### 🔍 Pola yang Terlihat

```text
repeatStr(3, "*")  →  "" + "*" + "*" + "*"  →  "***"
                       ↑ Wadah Kosong   ↑ Tempel 3 kali

repeatStr(2, "ha ")  →  "" + "ha " + "ha "  →  "ha ha "
                          ↑ Wadah Kosong   ↑ Tempel 2 kali (spasi ikut terbawa!)
```

> [!IMPORTANT]
> 🔔 **Kunci insight:** Masalah ini seperti **menyusun balok LEGO** — kita butuh alas kosong, lalu tempelkan balok satu per satu sebanyak `n` kali. Kita tidak perlu tahu isi string-nya apa, cukup tempel berulang!

---

<a name="konsep-kunci"></a>

## 🔑 Konsep Kunci

### 1️⃣ Accumulator Pattern — _"Wadah Penampung yang Diisi Bertahap"_ 🏗️

```
🎯 Fungsi    → Menyiapkan variabel kosong, lalu mengisinya sedikit demi sedikit di setiap iterasi
📌 Analogi   → Seperti ember kosong yang kamu isi air satu gelas per gelas sampai penuh
🔐 Kunci     → let result = '' (inisialisasi kosong) → result += s (tambah per iterasi)
```

### 2️⃣ String Concatenation — _"Menyambung Gerbong Kereta"_ 🚂

```
🎯 Fungsi    → Menggabungkan dua string menjadi satu string baru
📌 Analogi   → Setiap gerbong baru disambungkan ke rangkaian kereta yang sudah ada
🔐 Kunci     → result += s sama artinya dengan result = result + s
```

> [!TIP]
> 💡 **Kenapa Dua Konsep Ini Selalu Berpasangan?**
>
> | | Accumulator | Concatenation |
> |---|---|---|
> | 📝 | Menyediakan **wadah** (`let result = ''`) | Mengisi **isi** ke wadah (`result += s`) |
> | 🔒 | Tanpa wadah, tidak ada tempat menyimpan | Tanpa concatenation, wadah tetap kosong |

---

<a name="solusi-v1"></a>

## 🛠️ Solusi V1 — For Loop (Hitung Maju)

> 💭 **Konteks:** Ini adalah versi yang ditulis **mandiri saat sesi mentoring** — pendekatan pertama yang langsung berhasil.

```javascript
function repeatStr(n, s) {
  let result = '';

  for (let i = 0; i < n; i++) {
    result += s;
  }

  return result;
}
```

### 🎨 Visualisasi ASCII

```text
Input: n = 3, s = "*"

[ Wadah Kosong: "" ]

i=0  → 0 < 3? ✅ → result = "" + "*"   → result = "*"
i=1  → 1 < 3? ✅ → result = "*" + "*"  → result = "**"
i=2  → 2 < 3? ✅ → result = "**" + "*" → result = "***"
i=3  → 3 < 3? ❌ STOP!
   |
   v
return "***" ✅
```

### 🧪 Simulasi Edge Case: `repeatStr(0, "I")`

```text
Input: n = 0, s = "I"

[ Wadah Kosong: "" ]

i=0  → 0 < 0? ❌ STOP! (Loop TIDAK PERNAH JALAN)
   |
   v
return "" ✅  (Benar! 0 kali pengulangan = string kosong)
```

### 🧪 Simulasi Multi-Karakter: `repeatStr(2, "ha ")`

```text
Input: n = 2, s = "ha "

[ Wadah Kosong: "" ]

i=0  → 0 < 2? ✅ → result = "" + "ha "    → result = "ha "
i=1  → 1 < 2? ✅ → result = "ha " + "ha " → result = "ha ha "
i=2  → 2 < 2? ❌ STOP!
   |
   v
return "ha ha " ✅  (Spasi di akhir ikut terbawa karena spasi adalah bagian dari string "ha ")
```

### 🔍 Penjelasan

1. **`let result = ''`** — Wadah kosong sebagai alas perakitan. Jika `n = 0`, wadah ini yang langsung dikembalikan
2. **`for (let i = 0; i < n; i++)`** — Loop berjalan tepat sebanyak `n` kali (dari `0` sampai `n-1`)
3. **`result += s`** — Setiap putaran, string `s` ditempelkan ke ujung `result`
4. **`return result`** — Setelah loop selesai, kembalikan hasil rakitan

### ✅ Kelebihan
- **Readable:** Struktur `for` (Start, Condition, Step) tertulis jelas dalam satu baris
- **Safe:** Nilai `n` asli tidak berubah, masih bisa dipakai setelah loop
- **Standar:** Ini adalah pola paling umum untuk pengulangan dengan jumlah yang sudah ditentukan

---

<a name="solusi-v2"></a>

## 🔧 Solusi V2 — While Loop (Hitung Mundur)

> 💭 **Konteks:** Versi alternatif yang diberikan **mentor** — pendekatan "countdown" yang lebih irit variabel.

```javascript
function repeatStr(n, s) {
  let result = '';

  while (n > 0) {
    result += s;
    n--;
  }

  return result;
}
```

### 🎨 Visualisasi ASCII

```text
Input: n = 3, s = "*"

[ Wadah Kosong: "" ]

n=3  → 3 > 0? ✅ → result = "" + "*"   → result = "*"    → n-- → n=2
n=2  → 2 > 0? ✅ → result = "*" + "*"  → result = "**"   → n-- → n=1
n=1  → 1 > 0? ✅ → result = "**" + "*" → result = "***"  → n-- → n=0
n=0  → 0 > 0? ❌ STOP!
   |
   v
return "***" ✅
```

### 🔍 Penjelasan

1. **Tidak ada variabel `i`** — Langsung "memakan" parameter `n` yang dikirim sebagai counter
2. **`while (n > 0)`** — Selama `n` masih ada sisa, terus tempel string
3. **`n--`** — Kurangi `n` setiap kali satu tempelan selesai (countdown)

### ✅ Kelebihan
- **Irit variabel:** Tidak perlu membuat `let i = 0` karena langsung pakai parameter `n`
- **Intuitif:** Logikanya seperti *countdown* — "Masih ada 3 kali? Tempel! Masih 2? Tempel! ..."

### ⚠️ Kekurangan
- **Mutates parameter:** Nilai `n` di dalam fungsi berubah jadi `0` setelah loop selesai
- **Kurang populer:** Untuk kasus "ulangi N kali", `for` loop lebih sering dipakai

---

<a name="best-practice"></a>

## 🌍 Best Practice — Modern JavaScript (Real World)

Di dunia kerja nyata, programmer menggunakan pendekatan yang lebih ringkas:

### 🔧 Cara 1 — `.repeat()` (Standar Industri, ES6+)

```javascript
function repeatStr(n, s) {
  return s.repeat(n);
}
```

### 🎨 Visualisasi `.repeat()`

```text
Input: s = "*", n = 3

"*".repeat(3)
   ↓
Engine JS (V8) langsung menyiapkan blok memori untuk "***"
   ↓
return "***" ✅

Tidak ada loop manual, tidak ada concatenation bertahap!
```

> [!NOTE]
> 💡 **Kenapa `.repeat()` lebih cepat?** Method ini dijalankan di level mesin (C++) oleh browser. Engine langsung tahu berapa besar memori yang dibutuhkan dan menyiapkannya sekali saja.

### 🔧 Cara 2 — Array Trick (Functional Approach)

```javascript
function repeatStr(n, s) {
  return Array(n).fill(s).join('');
}
```

### 🎨 Visualisasi Array Trick

```text
Input: n = 3, s = "*"

Array(3)     → [empty, empty, empty]     (buat 3 slot kosong)
.fill("*")   → ["*", "*", "*"]           (isi semua slot dengan "*")
.join("")    → "***"                     (gabungkan tanpa pemisah)
   ↓
return "***" ✅
```

### 🧠 Insight — String Immutability (Kenapa Loop Manual Lebih Lambat)

> [!WARNING]
> 🐛 **Konsep penting** yang sering tidak disadari pemula:

Di JavaScript, **String itu Immutable** (tidak bisa diubah). Saat kamu melakukan `result += s`, yang terjadi sebenarnya:

```text
Iterasi 1: Buat string BARU ""  + "*"  = "*"     ← String lama "" dibuang
Iterasi 2: Buat string BARU "*" + "*"  = "**"    ← String lama "*" dibuang
Iterasi 3: Buat string BARU "**" + "*" = "***"   ← String lama "**" dibuang
```

Setiap iterasi **membuat string baru** dan **membuang yang lama**. Untuk 3 kali pengulangan ini tidak masalah, tapi bayangkan jika `n = 1.000.000`:

```text
🐌 Loop Manual  → 1 juta kali buat-baru + buang-lama = LAMBAT
⚡ .repeat()    → Satu blok memori langsung disiapkan = CEPAT
```

> [!TIP]
> 🏆 **Kesimpulan:** Untuk challenge/interview, loop manual menunjukkan pemahaman fundamental. Untuk production code, selalu gunakan `.repeat()`.

---

<a name="perbandingan"></a>

## 📊 Perbandingan Semua Versi

### ⚡ Ringkasan Pendekatan

| Versi | Cara | Variabel Tambahan | Mutasi Parameter? | Sesuai Syarat |
|-------|------|:---:|:---:|:---:|
| V1 — For Loop | `for (let i = 0; i < n; i++)` | `i` | ❌ Tidak | ✅ |
| V2 — While Loop | `while (n > 0) { n-- }` | — | ✅ Ya (`n` jadi 0) | ✅ |
| BP1 — `.repeat()` | `s.repeat(n)` | — | ❌ Tidak | ❌ |
| BP2 — Array Trick | `Array(n).fill(s).join('')` | — | ❌ Tidak | ❌ |

### 🏆 Rekomendasi Penggunaan

```
📚 Sedang Belajar Dasar?
   → Gunakan V1 (For Loop) — struktur jelas, aman, paling umum

🎓 Sudah Paham Loop?
   → Gunakan V2 (While Loop) — irit variabel, logika countdown

💼 Untuk Project/Portfolio?
   → Gunakan .repeat() — standar industri, 1 baris cukup
```

---

<a name="konsep-dipelajari"></a>

## 📚 Konsep yang Dipelajari

- ✅ **Accumulator Pattern** — Menyiapkan variabel penampung kosong (`let result = ''`) lalu mengisinya sedikit demi sedikit di setiap iterasi loop
- ✅ **String Concatenation** — Menggabungkan string menggunakan operator `+=` (shorthand dari `result = result + s`)
- ✅ **For Loop Precision** — `for (let i = 0; i < n; i++)` adalah standar emas untuk pengulangan dengan jumlah yang sudah ditentukan
- ✅ **While Loop Countdown** — Alternatif yang langsung "memakan" parameter `n` tanpa variabel iterator tambahan
- ✅ **Edge Case Handling** — Ketika `n = 0` atau negatif, kondisi loop langsung `false` sehingga fungsi mengembalikan string kosong secara otomatis
- ✅ **String Immutability** — String di JavaScript tidak bisa diubah; setiap concatenation membuat string baru dan membuang yang lama

---

<a name="catatan-tambahan"></a>

## 💡 Catatan Tambahan

### 🧠 Mental Model — Menyusun Balok LEGO

```
🏗️ Challenge Ini Seperti Menyusun LEGO:
   1. Siapkan alas kosong                    → let result = ''
   2. Ambil satu balok (string s)            → result += s
   3. Ulangi langkah 2 sebanyak n kali       → for loop / while loop
   4. Tunjukkan hasil rakitan                → return result
```

### 📌 Pesan dari Mentor

> **Untuk Belajar Fundamental:** Gunakan `for` loop — strukturnya (Start, Condition, Step) paling jelas dan aman.

> **Untuk Alternatif:** Gunakan `while` loop — irit variabel, tapi hati-hati karena parameter `n` akan berubah.

> **Untuk Dunia Nyata:** Gunakan `.repeat()` — ringkas, cepat (dioptimasi engine), dan semua orang paham.

> **Ingat:** `+=` pada string bukan menjumlahkan angka, melainkan **menyambung karakter** (append). Operator yang sama, perilaku yang berbeda tergantung tipe data!

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **9 Mei 2026** berdasarkan sesi mentoring langsung di **Windows**. Semua kode, visualisasi, dan insight diambil dari diskusi nyata selama sesi belajar JavaScript dasar — termasuk eksplorasi mendalam tentang Accumulator Pattern, perbedaan For vs While loop, dan konsep String Immutability.
