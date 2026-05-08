# ➕ Grasshopper — Summation (Penjumlahan Beruntun)

### ✨ _Menjumlahkan semua angka dari 1 sampai N — eksplorasi Accumulation Pattern dengan loop manual_

> 🎯 **Tujuan:** Memahami logika **Accumulator Pattern** — menjumlahkan bilangan berurutan dari 1 hingga N menggunakan `for` loop manual, tanpa built-in method. Bonus: memahami rumus matematika Gauss sebagai alternatif O(1).

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | <a href="#latar-belakang">Latar Belakang & Analogi</a> | Konsep "Ember Kelereng" |
| 📝 | <a href="#soal">Instruksi Soal</a> | Tantangan yang harus dipecahkan |
| 🔑 | <a href="#konsep">Konsep Penting</a> | Accumulator Pattern + Initial Value |
| 💻 | <a href="#kode-solusi">Kode Solusi & Eksekusi</a> | Implementasi `for` loop + *tracing* manual |
| 🎓 | <a href="#kode-mentor">Kode Versi Mentor</a> | Versi deskriptif + versi countdown |
| 🧮 | <a href="#rumus-gauss">Rumus Gauss (Bonus)</a> | Shortcut matematika O(1) tanpa loop |
| ⚖️ | <a href="#perbandingan">Perbandingan Semua Versi</a> | `for` maju vs mundur vs Gauss |
| ✅ | <a href="#verifikasi">Verifikasi Output</a> | Test case untuk menguji fungsi |

---

<a name="latar-belakang"></a>
## 📖 Latar Belakang & Analogi

Challenge ini melatih **Accumulator Pattern** — pola paling fundamental dalam programming di mana kita **mengumpulkan (menabung) nilai secara bertahap** di dalam sebuah variabel saat melakukan iterasi.

Bayangkan kamu punya sebuah **ember kosong**. Tugasmu adalah mengisi ember itu dengan kelereng. Jika inputnya `3`, kamu masukkan 1 kelereng, lalu tambah 2 kelereng, lalu tambah 3 kelereng. Hasil akhirnya = total kelereng di dalam ember.

> [!TIP]
> 💡 **Analogi "Ember Kelereng"**
>
> | | Dunia Nyata | Logika Kode |
> |---|---|---|
> | 🪣 | Siapkan ember kosong = 0 kelereng | `let total = 0` — variabel accumulator |
> | 🔄 | Mulai dari angka 1, naik satu per satu sampai N | `for (let i = 1; i <= num; i++)` |
> | ➕ | Setiap langkah, masukkan `i` kelereng ke ember | `total += i` — tambah nilai ke accumulator |
> | 🛑 | Berhenti saat sudah memasukkan kelereng ke-N | Kondisi `i <= num` bernilai `false` |

### 💡 Bedanya dengan Challenge Sebelumnya?

Di challenge Century From Year, kita melompat per 100 (`i += 100`) dan menghitung **berapa kali** kita melompat. Di sini, kita naik per 1 (`i++`) dan **menjumlahkan nilai `i` itu sendiri** ke dalam accumulator. Fokusnya bukan pada jumlah iterasi, tapi pada **akumulasi nilai**.

---

<a name="soal"></a>
## 📝 Instruksi Soal

Buatlah sebuah fungsi bernama `summation` yang menerima satu parameter berupa angka positif `num`. Fungsi harus mengembalikan **total penjumlahan dari 1 sampai `num`** (inklusif).

**Syarat Wajib:**
1. Wajib menggunakan **loop** (`for` atau `while`).
2. Dilarang menggunakan *built-in function* atau method bawaan JavaScript.

**Contoh:**
```
summation(2) → 3    (karena 1 + 2 = 3)
summation(8) → 36   (karena 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36)
```

> 📎 **Sumber soal:** [Codewars — Grasshopper Summation](https://www.codewars.com/kata/55d24f55d7dd296eb9000030)

---

<a name="konsep"></a>
## 🔑 Konsep Penting

### 1️⃣ Accumulator Pattern — _"Ember Penampung"_ 🪣

```
🎯 Fungsi    → Mengumpulkan (menabung) nilai secara bertahap selama iterasi
📌 Pola      → Deklarasi variabel awal → Loop → Tambahkan nilai → Return hasil
🔐 Analogi   → Celengan yang diisi koin satu per satu — di akhir, pecahkan dan hitung total
```

> [!IMPORTANT]
> 🔔 **Insight Penting:**
> Accumulator Pattern adalah fondasi dari banyak operasi data: total penjualan, rata-rata nilai, counting, dsb. Menguasai pola ini = menguasai 80% logika loop dasar.

### 2️⃣ Initial Value (Nilai Awal) — _"Titik Nol"_ 0️⃣

```
🎯 Fungsi    → Menentukan titik awal accumulator sebelum loop dimulai
📌 Kunci     → Untuk penjumlahan, nilai awal HARUS 0 (identitas penjumlahan)
🔐 Analogi   → Ember harus kosong sebelum diisi — kalau sudah ada 1, hitungannya salah!
```

> [!NOTE]
> 💡 **Kenapa harus `0` dan bukan `1`?**
> Karena `0` adalah *identitas penjumlahan* — angka apa pun ditambah 0 hasilnya angka itu sendiri. Jika kita mulai dari `1`, maka saat iterasi pertama (`i = 1`), hasilnya jadi `1 + 1 = 2` — padahal kita belum mulai menjumlahkan apa-apa!

### 3️⃣ Boundary Condition (`<=`) — _"Garis Finish Inklusif"_ 🏁

```
🎯 Fungsi    → Memastikan angka terakhir (num) IKUT terjumlahkan
📌 Kunci     → Menggunakan <= (kurang dari SAMA DENGAN), bukan < (kurang dari)
🔐 Analogi   → Pelari maraton harus menginjak garis finish — bukan berhenti sebelumnya
```

> [!WARNING]
> ⚠️ **Jebakan Umum!**
> Jika menggunakan `i < num` (tanpa `=`), angka terakhir tidak ikut dijumlahkan. `summation(8)` akan menghasilkan `28` (1+2+...+7) bukan `36` (1+2+...+8). Selalu cek: _"Apakah angka terakhir harus ikut dihitung?"_

---

<a name="kode-solusi"></a>
## 💻 Kode Solusi & Eksekusi

Berikut adalah implementasi menggunakan `for` loop — Accumulator Pattern klasik:

```javascript
function summation(num) {
  let total = 0;

  for (let i = 1; i <= num; i++) {
    total += i;
  }

  return total;
}
```

### 🎨 Visualisasi ASCII: `summation(8)`

```text
Target: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = ? 📍

[Ember (total)] = 0  (Mulai dari kosong)
       |
       V
  i=1  (1 <= 8? ✅) → total += 1  → total = 1
  i=2  (2 <= 8? ✅) → total += 2  → total = 3
  i=3  (3 <= 8? ✅) → total += 3  → total = 6
  i=4  (4 <= 8? ✅) → total += 4  → total = 10
  i=5  (5 <= 8? ✅) → total += 5  → total = 15
  i=6  (6 <= 8? ✅) → total += 6  → total = 21
  i=7  (7 <= 8? ✅) → total += 7  → total = 28
  i=8  (8 <= 8? ✅) → total += 8  → total = 36  📌
       |
       |  i++ → i = 9
       V
  i=9  (9 <= 8? ❌ STOP!)

  return total  →  36 ✅
```

### 🔍 Tracing Eksekusi (Tabel Lengkap)

Bagaimana komputer memproses input `summation(8)`?

| Iterasi | Nilai `i` | Cek `i <= 8` | Operasi | `total` |
|:--------|:----------|:-------------|:--------|:--------|
| Start   | —         | —            | `let total = 0` | `0` |
| ke-1    | `1`       | `1 <= 8` ✅   | `0 + 1`  | `1`  |
| ke-2    | `2`       | `2 <= 8` ✅   | `1 + 2`  | `3`  |
| ke-3    | `3`       | `3 <= 8` ✅   | `3 + 3`  | `6`  |
| ke-4    | `4`       | `4 <= 8` ✅   | `6 + 4`  | `10` |
| ke-5    | `5`       | `5 <= 8` ✅   | `10 + 5` | `15` |
| ke-6    | `6`       | `6 <= 8` ✅   | `15 + 6` | `21` |
| ke-7    | `7`       | `7 <= 8` ✅   | `21 + 7` | `28` |
| ke-8    | `8`       | `8 <= 8` ✅   | `28 + 8` | `36` |
| STOP    | `9`       | `9 <= 8` ❌   | —        | —    |

> [!TIP]
> 🏆 **Hasil Akhir:** Fungsi mengembalikan `36`. Penjumlahan 1 sampai 8 = 36!

---

<a name="kode-mentor"></a>
## 🎓 Kode Versi Mentor

### Versi 1 — Deskriptif (nama variabel `result`)

Menggunakan `result` sebagai standar universal untuk nilai yang akan dikembalikan:

```javascript
function summation(num) {
  let result = 0;

  for (let i = 1; i <= num; i++) {
    result += i;
  }

  return result;
}
```

> [!NOTE]
> 💡 **Perbedaan:** Hanya di penamaan variabel (`result` vs `total`). Secara logika 100% identik. `result` lebih umum digunakan ketika kita ingin menekankan bahwa variabel ini adalah **nilai akhir yang di-return**.

---

### Versi 2 — "The Countdown" (Loop Mundur)

Terkadang, loop mundur terasa lebih natural — seperti menghitung mundur roket:

```javascript
function summation(num) {
  let total = 0;

  // Kita mulai dari angka num, turun ke 1
  for (let i = num; i >= 1; i--) {
    total += i;
  }

  return total;
}
```

### 🎨 Visualisasi ASCII: Versi Countdown `summation(4)`

```text
Target: 4 + 3 + 2 + 1 = ? 📍

[Ember (total)] = 0  (Mulai dari kosong)
       |
       V
  i=4  (4 >= 1? ✅) → total += 4  → total = 4
  i=3  (3 >= 1? ✅) → total += 3  → total = 7
  i=2  (2 >= 1? ✅) → total += 2  → total = 9
  i=1  (1 >= 1? ✅) → total += 1  → total = 10  📌
       |
       |  i-- → i = 0
       V
  i=0  (0 >= 1? ❌ STOP!)

  return total  →  10 ✅
```

> [!NOTE]
> 💡 **Kenapa hasilnya tetap sama?**
> Karena **penjumlahan bersifat komutatif** — `1+2+3+4 = 4+3+2+1 = 10`. Urutan penjumlahan tidak mempengaruhi hasil akhir. Yang berbeda hanya cara kita membayangkan prosesnya.

### 🔍 Apa yang Berbeda?

> [!NOTE]
> 💡 **3 Perbedaan dari Versi Maju:**
>
> | No | Perbedaan | Penjelasan |
> |:---|:----------|:-----------|
> | 1️⃣ | **`i = num`** bukan `i = 1` | Mulai dari angka terbesar |
> | 2️⃣ | **`i >= 1`** bukan `i <= num` | Berhenti saat sudah mencapai 1 |
> | 3️⃣ | **`i--`** bukan `i++` | Mengurangi, bukan menambah iterator |

---

<a name="rumus-gauss"></a>
## 🧮 Rumus Gauss (Bonus — Tanpa Loop)

Sekadar info untuk memperluas wawasan (meskipun challenge ini mewajibkan loop):

```javascript
// Rumus: (n * (n + 1)) / 2
const fastSummation = (num) => (num * (num + 1)) / 2;
```

### 🎨 Visualisasi 1: "Metode Tangga" — Kenapa Rumusnya Bekerja?

Bayangkan angka 1 sampai 4 sebagai sebuah **tangga bintang**:

```text
1: *
2: * *
3: * * *
4: * * * *
```

_Total bintang di atas adalah 1 + 2 + 3 + 4 = 10._

Sekarang, bayangkan kita punya **dua buah tangga** yang sama. Tangga kedua kita balik lalu kita tempelkan ke tangga pertama:

```text
Tangga 1 (*)  +  Tangga 2 (o)
──────────────────────────────
* o o o o   ← Baris 1: 1 bintang + 4 lingkaran = 5
* * o o o   ← Baris 2: 2 bintang + 3 lingkaran = 5
* * * o o   ← Baris 3: 3 bintang + 2 lingkaran = 5
* * * * o   ← Baris 4: 4 bintang + 1 lingkaran = 5
```

**Dua tangga tersebut membentuk Persegi Panjang sempurna!**

```
┌────────────────────────────────────────────┐
│  Tinggi = n     = 4                        │
│  Lebar  = n + 1 = 5                        │
│  Luas   = 4 × 5 = 20  (ini 2 tangga)      │
│  Satu tangga saja = 20 / 2 = 10  ✅        │
└────────────────────────────────────────────┘
```

### 🎨 Visualisasi 2: "Metode Berpasangan" (Rainbow Method)

Cara lain yang konon digunakan **Gauss kecil** saat gurunya memberi tugas menghitung 1 sampai 100:

```text
  ┌────── 9 ──────┐   (1 + 8 = 9)
  │ ┌──── 9 ────┐ │   (2 + 7 = 9)
  │ │ ┌── 9 ──┐ │ │   (3 + 6 = 9)
  │ │ │ ┌ 9 ┐ │ │ │   (4 + 5 = 9)
  ↓ ↓ ↓ ↓   ↓ ↓ ↓ ↓
  1 2 3 4   5 6 7 8
```

**Polanya:**
1. Setiap pasangan (ujung + ujung) selalu berjumlah **9** → ini datang dari `n + 1` (yaitu `8 + 1`)
2. Ada **4 pasangan** → ini datang dari `n / 2` (yaitu `8 / 2`)

**Total:** `4 × 9 = 36` ✅

### 🧩 Kesimpulan Rumus

| Komponen | Dari Tangga | Dari Pasangan | Hasil |
|----------|:-----------:|:-------------:|:-----:|
| Bagian 1 | Tinggi = `n` | Jumlah pasangan = `n / 2` | — |
| Bagian 2 | Lebar = `n + 1` | Nilai per pasangan = `n + 1` | — |
| **Total** | `n × (n+1) / 2` | `(n/2) × (n+1)` | **Sama!** |

> 📖 **Penjelasan kata per kata:**
>
> | Bagian | Arti |
> |--------|------|
> | `num` | Angka terakhir yang dijumlahkan (N) |
> | `num + 1` | Jumlah setiap pasangan ujung (1+N, 2+(N-1), ...) |
> | `num * (num + 1)` | Total jika dihitung dua kali (persegi panjang penuh) |
> | `/ 2` | Bagi dua karena kita hanya butuh satu tangga |

> [!TIP]
> 💡 **Perbedaan performa:**
> ```
> # Loop      → O(n)  — harus iterasi n kali
> # Rumus     → O(1)  — langsung hitung, tidak peduli n berapa
>
> # summation(1000000000)
> # Loop:  butuh 1 miliar iterasi 🐢
> # Rumus: langsung jawab tanpa loop 🚀
> ```

> [!CAUTION]
> 🔴 **Untuk challenge ini, tetap gunakan loop!** Rumus Gauss disajikan sebagai wawasan tambahan. Di dunia nyata (production code), baru gunakan rumus ini untuk efisiensi.

---

<a name="perbandingan"></a>
## ⚖️ Perbandingan Semua Versi

| Aspek | `for` Maju (Murid) 🔢 | `for` Mundur 🔄 | Rumus Gauss 🧮 |
|-------|:----------:|:----------:|:----------:|
| **Keterbacaan** | 🟢 Paling intuitif | 🟡 Perlu kebiasaan | 🟢 Satu baris |
| **Jumlah variabel** | 🟡 2 (`total`, `i`) | 🟡 2 (`total`, `i`) | 🟢 0 variabel |
| **Performa** | 🟡 O(n) | 🟡 O(n) | 🟢 O(1) — langsung hitung |
| **Cocok untuk** | ✅ Belajar & interview | ✅ Eksplorasi logika | ✅ Production code |

> [!TIP]
> 🏆 **Best Practice per Konteks:**
> - **Belajar/Latihan:** Gunakan `for` maju — paling mudah dipahami dan di-*debug*.
> - **Dunia Nyata (Production):** Gunakan `(n * (n + 1)) / 2` — satu baris, O(1), tanpa loop.
> - **Interview:** Tunjukkan versi loop dulu, lalu tawarkan rumus Gauss sebagai optimasi. Ini menunjukkan kamu paham **both** logika dasar dan matematika.

---

<a name="verifikasi"></a>
## ✅ Verifikasi — Uji Kode

Jalankan serangkaian *test cases* berikut untuk memvalidasi fungsi:

### 1️⃣ Uji Input dari Soal

```javascript
console.log(summation(1)); // Output: 1   ← ✅
console.log(summation(2)); // Output: 3   ← ✅
console.log(summation(8)); // Output: 36  ← ✅
```

### 2️⃣ Uji Tambahan

```javascript
console.log(summation(4));   // Output: 10   ← ✅ (1+2+3+4)
console.log(summation(10));  // Output: 55   ← ✅ (1+2+...+10)
console.log(summation(100)); // Output: 5050 ← ✅ (angka legendaris Gauss!)
```

---

## 📚 Konsep yang Dipelajari

- ✅ **Accumulator Pattern** — Menggunakan variabel penampung (`total = 0`) untuk mengumpulkan nilai secara bertahap selama iterasi. Fondasi dari banyak operasi data.
- ✅ **Initial Value = 0** — Nilai awal accumulator untuk penjumlahan harus `0` (identitas penjumlahan), bukan `1`. Jika mulai dari `1`, hasilnya pasti salah.
- ✅ **Boundary Condition (`<=`)** — Menggunakan `i <= num` agar angka terakhir ikut terjumlahkan. Jika hanya `<`, angka terakhir terlewat.
- ✅ **Komutatif** — Penjumlahan bersifat komutatif (`1+2+3 = 3+2+1`), sehingga loop maju dan mundur menghasilkan output yang sama.
- ✅ **Rumus Gauss** — `(n × (n+1)) / 2` adalah shortcut matematika O(1) yang menghilangkan kebutuhan loop. Dua cara memahaminya: Metode Tangga (persegi panjang) dan Metode Berpasangan (rainbow).

---

## 💡 Catatan Tambahan

> [!TIP]
> 🏆 **Insight Penting:**
> Challenge ini memperkenalkan bahwa setiap masalah bisa diselesaikan dengan **pendekatan berbeda** — dari yang paling "manual" sampai yang paling "pintar":
>
> | Pendekatan | Karakter |
> |------------|----------|
> | `for` loop maju | 📖 Paling mudah dipahami — ideal untuk pemula |
> | `for` loop mundur | 🔄 Membuktikan bahwa urutan tidak penting (komutatif) |
> | Rumus Gauss | 🧮 Solusi elegan — mengganti iterasi dengan matematika |
>
> **Pelajaran terbesar:** Pahami dulu solusi "manual" (loop), baru kemudian cari optimasi. Orang yang langsung loncat ke rumus tanpa memahami loop akan kesulitan saat menghadapi masalah yang **tidak punya** shortcut matematika.

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **8 Mei 2026** berdasarkan sesi mentoring JavaScript membahas "Accumulator Pattern & Rumus Gauss". Kompleksitas algoritma versi loop adalah **O(n)** (proporsional dengan angka input), sedangkan versi rumus Gauss adalah **O(1)** (konstan — langsung hitung tanpa iterasi).
