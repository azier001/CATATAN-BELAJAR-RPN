# 🗓️ Century From Year (Hitung Abad dari Tahun)

### ✨ _Menentukan abad dari tahun yang diberikan — eksplorasi loop sebagai pengganti `Math.ceil`_

> 🎯 **Tujuan:** Memahami logika **iterasi bertingkat 100** — menghitung abad dari tahun menggunakan loop manual (`for` dan `while`), tanpa built-in method seperti `Math.ceil()`.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | <a href="#latar-belakang">Latar Belakang & Analogi</a> | Konsep "Kantong Abad" |
| 📝 | <a href="#soal">Instruksi Soal</a> | Tantangan yang harus dipecahkan |
| 🔑 | <a href="#konsep">Konsep Penting</a> | Step Increment + Boundary Logic |
| 💻 | <a href="#kode-solusi">Kode Solusi & Eksekusi</a> | Implementasi `for` loop + *tracing* manual |
| 🎓 | <a href="#kode-mentor">Kode Versi Mentor</a> | Versi `for` loop "sejarah" |
| 🔄 | <a href="#versi-while">Versi While Loop</a> | Arrow function + `while` loop |
| ⚖️ | <a href="#perbandingan">Perbandingan Semua Versi</a> | `for` vs `while` vs `Math.ceil` |
| ⚠️ | <a href="#edge-cases">Edge Cases</a> | Kasus-kasus ekstrim |
| ✅ | <a href="#verifikasi">Verifikasi Output</a> | Test case untuk menguji fungsi |

---

<a name="latar-belakang"></a>
## 📖 Latar Belakang & Analogi

Challenge ini melatih **Step Increment Pattern** — melompat dengan kelipatan tertentu (100 tahun) di dalam loop, bukan naik satu per satu (`i++`). Ini membuktikan bahwa bagian ketiga dari `for` loop bisa diisi apa saja, tidak harus `i++`.

Bayangkan abad itu seperti **kantong**. Satu kantong isinya maksimal 100 tahun. Kita terus mengisi kantong baru sampai semua tahun masuk.

> [!TIP]
> 💡 **Analogi "Kantong Abad"**
>
> | | Dunia Nyata | Logika Kode |
> |---|---|---|
> | 🧺 | Siapkan penghitung kantong = 0 | `let countYear = 0` — variabel penghitung |
> | 🔄 | Mulai dari tahun 0, loncat per 100 tahun | `for (let i = 0; i < year; i += 100)` |
> | ➕ | Setiap lompatan = 1 kantong abad baru | `countYear++` — tambah penghitung |
> | 🛑 | Berhenti saat lompatan melewati tahun target | Kondisi `i < year` bernilai `false` |

### 💡 Bedanya dengan Challenge Sebelumnya?

Di challenge-challenge sebelumnya (Loop Array), kita iterasi elemen **satu per satu**. Di sini, kita **melompat per 100** — ini menunjukkan fleksibilitas `for` loop yang sering tidak disadari pemula.

---

<a name="soal"></a>
## 📝 Instruksi Soal

Buatlah sebuah fungsi bernama `century` yang menerima satu parameter berupa angka tahun. Fungsi harus mengembalikan angka abad dari tahun tersebut.

**Syarat Wajib:**
1. Wajib menggunakan **loop** (`for` atau `while`).
2. Dilarang menggunakan *built-in function* seperti `Math.ceil()`.
3. Tahun 1 – 100 adalah abad 1, tahun 101 – 200 adalah abad 2, dst.
4. Tahun yang tepat di kelipatan 100 (1900, 2000) **tidak boleh meloncat** ke abad berikutnya.

> 📎 **Sumber soal:** [Codewars — Century From Year](https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097)

---

<a name="konsep"></a>
## 🔑 Konsep Penting

### 1️⃣ Step Increment Pattern — _"Lompatan Abad"_ 🦘

```
🎯 Fungsi    → Melompat dalam kelipatan tertentu (100) alih-alih naik satu per satu
📌 Sintaks   → i += 100 (bukan i++)
🔐 Analogi   → Naik tangga dua anak tangga sekaligus — bukan satu-satu
```

> [!IMPORTANT]
> 🔔 **Insight Penting:**
> Bagian ketiga dari `for (init; condition; increment)` tidak harus `i++`. Kita bisa isi `i += 100`, `i += 50`, bahkan `i *= 2` — tergantung kebutuhan logika.

### 2️⃣ Boundary Logic — _"Penjaga Garis Batas"_ 🚧

```
🎯 Fungsi    → Memastikan tahun yang tepat di kelipatan 100 tidak "kebablasan"
📌 Kunci     → Menggunakan < (kurang dari), BUKAN <= (kurang dari sama dengan)
🔐 Analogi   → Garis finis maraton — yang TEPAT di garis belum melewati batas
```

> [!NOTE]
> 💡 **Kenapa `<` dan bukan `<=`?**
> Karena tahun 1900 masih termasuk abad **19** (bukan 20). Jika kita pakai `<=`, maka saat `i = 1900` dan `year = 1900`, loop masih berjalan sekali lagi — menambah `countYear` ke 20. Itu salah! Dengan `<`, saat `i = 1900` kondisi `1900 < 1900` langsung `false`, loop berhenti dengan hasil yang tepat.

---

<a name="kode-solusi"></a>
## 💻 Kode Solusi & Eksekusi

Berikut adalah implementasi menggunakan `for` loop — dengan counter terpisah:

```javascript
function century(year) {
  let countYear = 0;

  for (let i = 0; i < year; i += 100) {
    countYear++;
  }

  return countYear;
}
```

### 🎨 Visualisasi ASCII: `century(1705)`

```text
Target: 1705 📍
                    countYear
[Start]                 0
  |
  V
  i=0    (0 < 1705? ✅)    → countYear++  →  1
  i=100  (100 < 1705? ✅)  → countYear++  →  2
  i=200  (200 < 1705? ✅)  → countYear++  →  3
  ...       ...                              ...
  i=1600 (1600 < 1705? ✅) → countYear++  →  17
  i=1700 (1700 < 1705? ✅) → countYear++  →  18  📌
  |
  |  i += 100
  V
  i=1800 (1800 < 1705? ❌ STOP!)

  return countYear  →  18 ✅
```

### 🔍 Tracing Eksekusi (Visualisasi Alur)

Bagaimana komputer memproses input `century(1705)`?

| Iterasi | Nilai `i` | Cek `i < 1705` | `countYear` |
|:--------|:----------|:----------------|:------------|
| Start   | `0`       | `0 < 1705` ✅    | `0`         |
| ke-1    | `0`       | masuk loop       | `1`         |
| ke-2    | `100`     | `100 < 1705` ✅  | `2`         |
| ke-3    | `200`     | `200 < 1705` ✅  | `3`         |
| ...     | ...       | ...              | ...         |
| ke-17   | `1600`    | `1600 < 1705` ✅ | `17`        |
| ke-18   | `1700`    | `1700 < 1705` ✅ | `18`        |
| STOP    | `1800`    | `1800 < 1705` ❌ | —           |

> [!TIP]
> 🏆 **Hasil Akhir:** Fungsi mengembalikan `18`. Tahun 1705 berada di abad ke-18!

### 🔍 Tracing Kasus Kritis: `century(1900)`

Ini kasus paling penting — tahun yang **tepat** di kelipatan 100:

| Iterasi | Nilai `i` | Cek `i < 1900` | `countYear` |
|:--------|:----------|:----------------|:------------|
| ...     | ...       | ...              | ...         |
| ke-18   | `1700`    | `1700 < 1900` ✅ | `18`        |
| ke-19   | `1800`    | `1800 < 1900` ✅ | `19`        |
| STOP    | `1900`    | `1900 < 1900` ❌ | —           |

> [!TIP]
> 🏆 **Hasil Akhir:** `19` — Tahun 1900 memang masih abad 19. Boundary logic `<` bekerja sempurna!

---

### 🔧 Versi Minimalis — Tanpa Counter Tambahan

Variabel `i` di dalam loop bisa dimanfaatkan langsung **tanpa** variabel `countYear`:

```javascript
function century(year) {
  let i = 0;

  for (i = 0; i < year; i += 100) {}

  return i / 100;
}
```

### 🎨 Visualisasi ASCII: Versi Minimalis `century(1705)`

```text
Target: 1705 📍

[Start] i = 0
  |
  V
  i=0    → (0 < 1705? ✅)    → {} (body kosong, lanjut)
  i=100  → (100 < 1705? ✅)  → {}
  i=200  → (200 < 1705? ✅)  → {}
  ...       ...
  i=1700 → (1700 < 1705? ✅) → {}
  i=1800 → (1800 < 1705? ❌ STOP!)
  |
  V
  Nilai i terakhir = 1800

  ┌─────────────────────────┐
  │  return i / 100         │
  │  return 1800 / 100      │
  │  return 18  ✅           │
  └─────────────────────────┘
```

> 📖 **Penjelasan kata per kata:**
>
> | Bagian | Arti |
> |--------|------|
> | `let i = 0` | Deklarasi `i` di **luar** `for` agar bisa diakses setelah loop selesai |
> | `for (i = 0; ...)` | Inisialisasi ulang `i` di dalam `for` (bukan `let` lagi) |
> | `i += 100` | Lompat per 100 tahun |
> | `{}` | Body loop **kosong** — kita hanya butuh `i` bergerak |
> | `i / 100` | Konversi tahun terakhir ke angka abad (`1800 / 100 = 18`) |

> [!NOTE]
> 💡 **Kenapa `i` harus dideklarasikan di luar?**
> Karena `let i` di dalam `for (let i = 0; ...)` bersifat **block-scoped** — variabel itu hanya "hidup" di dalam kurung kurawal `{}`. Setelah loop selesai, `i` sudah "mati" dan tidak bisa diakses untuk `return`.

---

<a name="kode-mentor"></a>
## 🎓 Kode Versi Mentor

Versi mentor dimulai dari **tahun 1** (sesuai cara sejarah menghitung abad), bukan dari 0:

```javascript
function century(year) {
  let result = 0;

  for (let startOfCentury = 1; startOfCentury <= year; startOfCentury += 100) {
    result++;
  }

  return result;
}
```

### 🎨 Visualisasi ASCII: Versi Mentor `century(1705)`

```text
Target: 1705 📍
                             result
[Start]                        0
  |
  V
  startOfCentury=1    (1 <= 1705? ✅)    → result++  →  1   [Abad 1: 1-100]
  startOfCentury=101  (101 <= 1705? ✅)  → result++  →  2   [Abad 2: 101-200]
  startOfCentury=201  (201 <= 1705? ✅)  → result++  →  3   [Abad 3: 201-300]
  ...                    ...                               ...
  startOfCentury=1601 (1601 <= 1705? ✅) → result++  →  17  [Abad 17: 1601-1700]
  startOfCentury=1701 (1701 <= 1705? ✅) → result++  →  18  [Abad 18: 1701-1800] 📌
  |
  |  startOfCentury += 100
  V
  startOfCentury=1801 (1801 <= 1705? ❌ STOP!)

  return result  →  18 ✅
```

> [!NOTE]
> 💡 **Perhatikan:** Versi ini dimulai dari tahun **1** dan menggunakan `<=`, sehingga setiap nilai `startOfCentury` benar-benar mewakili "awal abad ke-N". Ini membuat kode lebih *self-documenting*.

### 🔍 Apa yang Berbeda?

> [!NOTE]
> 💡 **3 Perbedaan dari Versi Murid:**
>
> | No | Perbedaan | Penjelasan |
> |:---|:----------|:-----------|
> | 1️⃣ | **Mulai dari `1`** bukan `0` | Sesuai sejarah — abad 1 dimulai tahun 1 |
> | 2️⃣ | **`<=`** bukan `<` | Karena mulai dari 1, kondisi berhentinya bergeser — `1901 <= 1900` baru `false` |
> | 3️⃣ | **`startOfCentury`** | Nama variabel deskriptif — menjelaskan bahwa `i` mewakili "awal abad" |

---

<a name="versi-while"></a>
## 🔄 Versi While Loop

Versi menggunakan `while` — logikanya paling "manusiawi" dan mudah dibaca:

```javascript
const century = (year) => {
  let countCentury = 0;
  let currentYear = 0;

  while (currentYear < year) {
    currentYear += 100;
    countCentury++;
  }

  return countCentury;
};
```

### 🎨 Visualisasi ASCII: Versi While `century(1705)`

```text
Target: 1705 📍
                    currentYear   countCentury
[Start]                 0              0
  |
  V
  ┌──────── while (currentYear < year) ────────┐
  │                                             │
  │  Iterasi 1:  currentYear += 100 → 100       │
  │              countCentury++     → 1         │
  │  Cek: 100 < 1705? ✅ Lanjut!                │
  │                                             │
  │  Iterasi 2:  currentYear += 100 → 200       │
  │              countCentury++     → 2         │
  │  Cek: 200 < 1705? ✅ Lanjut!                │
  │                                             │
  │  ...         ...                  ...        │
  │                                             │
  │  Iterasi 17: currentYear += 100 → 1700      │
  │              countCentury++     → 17        │
  │  Cek: 1700 < 1705? ✅ Lanjut!               │
  │                                             │
  │  Iterasi 18: currentYear += 100 → 1800      │
  │              countCentury++     → 18        │
  │  Cek: 1800 < 1705? ❌ KELUAR!               │
  └─────────────────────────────────────────────┘
  |
  V
  return countCentury  →  18 ✅
```

### 🔍 Kenapa While Terasa Lebih "Manusiawi"?

> [!NOTE]
> 💡 **Cara membaca kodenya:**
> _"Selama `currentYear` masih belum menyusul `year`, tambahkan 100 ke `currentYear` dan tambahkan 1 ke `countCentury`."_
>
> Kalimat itu hampir persis seperti cara manusia berpikir — itulah kenapa `while` sering dianggap lebih intuitif untuk kasus "ulangi sampai kondisi terpenuhi".

---

<a name="perbandingan"></a>
## ⚖️ Perbandingan Semua Versi

| Aspek | `for` + Counter 🔢 | `for` Minimalis ⚡ | `while` 🔄 | `Math.ceil` 🧮 |
|-------|:----------:|:----------:|:----------:|:----------:|
| **Keterbacaan** | 🟢 Jelas | 🟡 Perlu pahami scope | 🟢 Paling intuitif | 🟢 Satu baris |
| **Jumlah variabel** | 🟡 2 variabel | 🟢 1 variabel | 🟡 2 variabel | 🟢 0 variabel |
| **Performa** | 🟡 O(n/100) | 🟡 O(n/100) | 🟡 O(n/100) | 🟢 O(1) — langsung hitung |
| **Cocok untuk** | ✅ Belajar logika | ✅ Code golf | ✅ Interview & clean code | ✅ Production code |

> [!TIP]
> 🏆 **Best Practice per Konteks:**
> - **Belajar/Latihan:** Gunakan `while` loop — paling mudah dipahami dan di-*debug*.
> - **Dunia Nyata (Production):** Gunakan `Math.ceil(year / 100)` — satu baris, O(1), tidak perlu loop.
> - **Interview:** Tunjukkan versi loop dulu untuk buktikan pemahaman logika, lalu tawarkan `Math.ceil` sebagai optimasi.

---

<a name="edge-cases"></a>
## ⚠️ Edge Cases — Kasus Ekstrim

### 1️⃣ Tahun Kelipatan 100: `century(1900)`

```javascript
century(1900); // Output: 19
```
> ✅ **Aman!** Tahun 1900 masih abad 19, bukan 20. Boundary logic `<` mencegah "kebablasan".

### 2️⃣ Tahun Kelipatan 100 Lainnya: `century(2000)`

```javascript
century(2000); // Output: 20
```
> ✅ **Aman!** Tahun 2000 adalah abad 20 — tahun terakhir abad tersebut.

### 3️⃣ Tahun Kecil: `century(89)`

```javascript
century(89); // Output: 1
```
> ✅ **Aman!** Loop berjalan sekali saja. `i` melompat dari 0 ke 100, dan `0 < 89` terpenuhi satu kali.

### 4️⃣ Tahun Awal Abad: `century(1601)`

```javascript
century(1601); // Output: 17
```
> ✅ **Aman!** Tahun 1601 adalah awal abad 17. Loop berjalan 17 kali — tepat!

### 5️⃣ Tahun 1: `century(1)`

```javascript
century(1); // Output: 1
```
> ✅ **Aman!** Tahun pertama sejarah — tetap abad 1.

---

<a name="verifikasi"></a>
## ✅ Verifikasi — Uji Kode

Jalankan serangkaian *test cases* berikut untuk memvalidasi fungsi:

### 1️⃣ Uji Input dari Soal
```javascript
console.log(century(1705)); // Output: 18  ← ✅
console.log(century(1900)); // Output: 19  ← ✅
console.log(century(1601)); // Output: 17  ← ✅
console.log(century(2000)); // Output: 20  ← ✅
console.log(century(89));   // Output: 1   ← ✅
```

### 2️⃣ Uji Tambahan
```javascript
console.log(century(2742)); // Output: 28  ← ✅
console.log(century(1));    // Output: 1   ← ✅
console.log(century(100));  // Output: 1   ← ✅
console.log(century(101));  // Output: 2   ← ✅
```

---

## 📚 Konsep yang Dipelajari

- ✅ **Step Increment Pattern** — Menggunakan `i += 100` untuk melompat dalam kelipatan tertentu di dalam loop. Membuktikan bahwa increment `for` loop tidak harus `i++`.
- ✅ **Boundary Logic (`<` vs `<=`)** — Pemilihan operator perbandingan yang tepat menentukan kebenaran logika. Tahun 1900 harus abad 19, bukan 20.
- ✅ **Block Scope `let`** — Variabel yang dideklarasikan di dalam `for (let i = ...)` hanya hidup di dalam blok loop. Untuk diakses setelah loop, deklarasi harus dipindah ke luar.
- ✅ **`while` vs `for`** — `while` lebih intuitif untuk kondisi "ulangi sampai tercapai", `for` lebih ringkas saat step dan counter sudah jelas.
- ✅ **Best Practice per Konteks** — Di dunia nyata, `Math.ceil(year / 100)` adalah solusi terbaik (O(1)). Di konteks belajar, loop manual melatih pemahaman fundamental.

---

## 💡 Catatan Tambahan

> [!TIP]
> 🏆 **Insight Penting:**
> Challenge ini memperkenalkan konsep bahwa **ada banyak jalan menuju Roma** dalam programming. Tiga versi loop yang kita buat semuanya benar, tapi masing-masing punya karakter:
>
> | Versi | Karakter |
> |-------|----------|
> | `for` + Counter | 📖 Paling mudah dipahami pemula |
> | `for` Minimalis | ⚡ Irit variabel, tapi perlu pahami scope |
> | `while` | 🧠 Paling "manusiawi" — kalimatnya seperti bahasa sehari-hari |
> | `Math.ceil` | 🏭 Production-ready — satu baris, tanpa loop |
>
> Tugas programmer adalah **memilih jalan yang paling sesuai dengan situasinya**, bukan selalu memilih yang paling pendek atau paling canggih.

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **8 Mei 2026** berdasarkan sesi mentoring JavaScript membahas "Step Increment Pattern & Boundary Logic". Kompleksitas algoritma versi loop adalah **O(n/100)** (proporsional dengan tahun dibagi 100), sedangkan versi `Math.ceil` adalah **O(1)** (konstan).
