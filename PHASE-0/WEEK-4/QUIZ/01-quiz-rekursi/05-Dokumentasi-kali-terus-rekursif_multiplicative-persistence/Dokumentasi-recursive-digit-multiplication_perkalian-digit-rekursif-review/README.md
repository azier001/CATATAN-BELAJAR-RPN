# 🔄 Dokumentasi Challenge: kaliTerusRekursif

### ✨ _Mengalikan digit secara rekursif hingga menyisakan satu angka terakhir_

> 🎯 **Tujuan:** Memahami cara memecah angka menjadi digit-digit penyusunnya, mengalikan semuanya, dan mengulangi proses tersebut secara rekursif sampai tersisa satu digit. Dokumentasi ini mencakup 4 versi solusi, dari yang paling ramah pemula hingga pendekatan matematika murni.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Deskripsi Soal](#deskripsi-soal) | Penjelasan challenge dan test cases |
| 🔍 | [Analisis Pola](#analisis-pola) | Tabel breakdown iterasi & penemuan rumus |
| 🔑 | [Konsep Inti Rekursi](#konsep-inti-rekursi) | Base case vs recursive case |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint--kamus-variabel) | Kerangka kode + tabel naming |
| 📂 | [Navigasi File](#navigasi-file) | Link ke file detail lainnya |

---

<a name="deskripsi-soal"></a>
## 📖 Deskripsi Soal

Diberikan sebuah function `kaliTerusRekursif(angka)` yang menerima satu parameter berupa angka. Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan **perkalian seluruh digit-nya**. Bila hasilnya masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya hingga mendapatkan satu digit.

### 🧪 Test Cases

```javascript
console.log(kaliTerusRekursif(66));   // 8
console.log(kaliTerusRekursif(3));    // 3
console.log(kaliTerusRekursif(24));   // 8
console.log(kaliTerusRekursif(654));  // 0
console.log(kaliTerusRekursif(1231)); // 6
```

> [!NOTE]
> 💡 **Contoh Alur Lengkap:**
> - `3` → sudah 1 digit → hasil **3**
> - `24` → `2 × 4 = 8` → sudah 1 digit → hasil **8**
> - `654` → `6 × 5 × 4 = 120` → `1 × 2 × 0 = 0` → sudah 1 digit → hasil **0**

---

<a name="analisis-pola"></a>
## 🔍 Analisis Pola

> [!TIP]
> 💡 **Analogi Sederhana**
>
> Bayangkan kamu punya sebuah angka besar yang dituliskan di kertas. Kamu **menggunting** kertas itu menjadi potongan-potongan per digit, lalu mengalikan semua potongan. Jika hasilnya masih lebih dari satu digit, kamu menggunting lagi dan mengalikan lagi — sampai hanya tersisa **satu potongan kecil**.

### 📊 Tabel Breakdown Iterasi: `kaliTerusRekursif(66)`

| Iterasi | Angka Masuk | Pemecahan Digit | Hasil Kali | < 10? | Aksi |
|:---:|:---:|:---|:---:|:---:|:---|
| 1 | `66` | `6 × 6` | `36` | ❌ | Rekursi → `kaliTerusRekursif(36)` |
| 2 | `36` | `3 × 6` | `18` | ❌ | Rekursi → `kaliTerusRekursif(18)` |
| 3 | `18` | `1 × 8` | `8` | ✅ | **Berhenti!** Return `8` |

### 📊 Tabel Breakdown Iterasi: `kaliTerusRekursif(654)`

| Iterasi | Angka Masuk | Pemecahan Digit | Hasil Kali | < 10? | Aksi |
|:---:|:---:|:---|:---:|:---:|:---|
| 1 | `654` | `6 × 5 × 4` | `120` | ❌ | Rekursi → `kaliTerusRekursif(120)` |
| 2 | `120` | `1 × 2 × 0` | `0` | ✅ | **Berhenti!** Return `0` |

---

<a name="konsep-inti-rekursi"></a>
## 🔑 Konsep Inti Rekursi

### 1️⃣ Base Case — _"Pintu Keluar Rekursi"_ 🚪

```
🎯 Fungsi    → Menghentikan pemanggilan berulang
📌 Kondisi   → angka < 10 (sudah satu digit)
🔐 Analogi   → Seperti tombol STOP di mesin cuci.
               Tanpa ini, mesin berputar tanpa henti (infinite loop)!
```

### 2️⃣ Recursive Case — _"Mesin Penggilingan"_ ⚙️

```
🎯 Fungsi    → Memecah digit, mengalikan, lalu memanggil dirinya sendiri
📌 Kondisi   → angka >= 10 (masih multi-digit)
🔐 Analogi   → Seperti mesin penggiling daging: masukkan potongan besar,
               keluar potongan kecil. Jika masih terlalu besar, giling lagi!
```

> [!IMPORTANT]
> 🔔 **Aturan Emas Rekursi:**
> Setiap fungsi rekursif **WAJIB** memiliki base case. Tanpa base case, fungsi akan memanggil dirinya sendiri tanpa henti → **Stack Overflow Error!**

---

<a name="blueprint--kamus-variabel"></a>
## 🗺️ Blueprint & Kamus Variabel

### 📝 Kamus Variabel (Best Practice Naming)

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|:---|:---|:---|:---|
| Parameter Fungsi | `num` | `angka`, `n` | Singkatan standar *number* |
| Angka dalam String | `numStr` | `strNum`, `s` | Tipe mendahului objek (*number string*) |
| Penampung Hasil Kali | `product` | `total`, `result` | *Product* = hasil kali, *total/sum* = hasil tambah |
| Digit Satuan (di loop) | `digit` | `number`, `n` | Lebih spesifik: angka 0-9 penyusun angka besar |
| Salinan Angka (Pure Math) | `currentNum` | `temp`, `x` | Deskriptif: angka yang sedang diproses |
| Digit Terakhir (Modulo) | `lastDigit` | `d`, `r` | Jelas: digit yang diambil dari belakang |

### 🗺️ Kerangka Kode (Blueprint Umum)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Base Case → Pecah Digit → Kalikan → Rekursi)

function kaliTerusRekursif(num) {
  // [BASE CASE] → Jika sudah 1 digit, kembalikan langsung
  if (num < 10) return num;

  // [PECAH DIGIT] → Ubah angka menjadi digit-digit terpisah
  // ... (bisa via String, Spread, atau Modulo)

  // [KALIKAN] → Akumulasi perkalian semua digit
  let product = 1;
  // ... (bisa via for-loop, reduce, atau while + modulo)

  // [REKURSI] → Lempar hasil ke fungsi ini lagi
  return kaliTerusRekursif(product);
}
```

> [!TIP]
> 💡 **4 Versi Solusi** yang telah kita eksplorasi:
> 1. **For-Loop** — Ramah pemula, sangat deskriptif
> 2. **Reduce** — Ringkas & fungsional (ES6)
> 3. **Pure Math (Modulo)** — Tanpa string, performa terbaik
> 4. **Helper Function (Full Recursion)** — Rekursi murni tanpa loop
>
> Detail lengkap setiap versi ada di → `docs/01-pendekatan-solusi.md`
> Ringkasan kode siap copy-paste → `ringkasan-kode.md`

---

<a name="navigasi-file"></a>
## 📂 Navigasi File

| No | File | Isi |
|:---:|:---|:---|
| 📄 | **README.md** _(kamu di sini)_ | Overview, analisis pola, blueprint |
| 💻 | `docs/01-pendekatan-solusi.md` | 4 versi solusi + tabel perbandingan |
| ⚠️ | `docs/02-gotcha-dan-insight.md` | Jebakan double recursion, insight modulo, naming |
| 📋 | `ringkasan-kode.md` | Cheat sheet semua versi kode (copy-paste cepat) |

---

> 📝 **Catatan:**
> Dokumentasi ini dibuat pada **15 Juni 2026** berdasarkan sesi mentoring interaktif di **Windows 11** menggunakan JavaScript (Node.js).
