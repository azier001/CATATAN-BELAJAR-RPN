# ⚠️ Gotcha & Insight: kaliTerusRekursif

### ✨ _Jebakan tersembunyi, teknik matematika murni, dan standar penamaan variabel_

> 🎯 **Tujuan:** Mendokumentasikan kesalahan logika yang pernah terjadi (agar tidak terulang), insight teknis tentang pemecahan digit tanpa string, serta best practice naming convention untuk kode yang lebih profesional.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🐛 | [Gotcha: Double Recursion](#gotcha) | Bug tersembunyi saat menyatukan 2 tugas dalam 1 rekursi |
| 🔢 | [Insight: Pure Math (Modulo)](#insight-modulo) | Simulasi detail pemecahan digit tanpa string |
| 🏷️ | [Naming Convention](#naming) | Tabel perbandingan penamaan variabel |

---

<a name="gotcha"></a>
## 🐛 Gotcha: Jebakan Double Recursion

> [!WARNING]
> 🐛 **Bug ini benar-benar terjadi!** Kode di bawah ditulis secara mandiri sebelum sesi mentoring dan terlihat elegan — tapi menyimpan cacat logika fatal.

### ❌ Kode yang Bermasalah

```javascript
function kaliTerusRekursif(angka) {
  if (angka < 10) return angka;

  const result = (angka % 10) * kaliTerusRekursif(Math.floor(angka / 10));

  return kaliTerusRekursif(result);
}
```

### 🔍 Penyebab

Ide awalnya: menyatukan proses **pemecahan digit** dan **penyusutan sampai 1 digit** dalam satu blok rekursi. Terlihat jenius, tapi ada masalah kritis:

Fungsi `kaliTerusRekursif()` bertugas mengalikan digit **TERUS MENERUS** sampai sisa 1 angka. Ketika dipanggil di tengah perhitungan (`kaliTerusRekursif(Math.floor(angka / 10))`), ia tidak sekadar mengalikan digit satu putaran — ia **menyusutkan angka sisa sampai habis** sebelum dikalikan dengan digit terakhir.

### 🧪 Simulasi Kegagalan: Angka `395`

**Jawaban yang benar:**
```
395 → 3 × 9 × 5 = 135 → 1 × 3 × 5 = 15 → 1 × 5 = 5  ✅
```

**Apa yang terjadi di kode:**
```
kaliTerusRekursif(395)
│
├── angka % 10 = 5                    ← ambil digit terakhir
├── kaliTerusRekursif(39)             ← MASALAH DI SINI!
│   │
│   ├── 39 → 3 × 9 = 27
│   ├── 27 → 2 × 7 = 14
│   ├── 14 → 1 × 4 = 4
│   └── return 4                      ← harusnya return 27, bukan 4!
│
├── result = 5 × 4 = 20              ← seharusnya 5 × 27 = 135
└── kaliTerusRekursif(20)
    └── 2 × 0 = 0                    ← return 0  ❌ (seharusnya 5)
```

> [!CAUTION]
> 🔴 **Inti Masalah:** `kaliTerusRekursif(39)` mengembalikan `4` (hasil akhir setelah disusutkan berkali-kali), padahal kita hanya butuh `27` (hasil kali satu putaran saja). Fungsi yang sama digunakan untuk dua tujuan berbeda — inilah yang disebut **pelanggaran Single Responsibility**.

### ✅ Solusi: Pemisahan Tugas dengan Helper Function

Pisahkan "tugas perkalian satu putaran" ke fungsi terpisah (`kalikanDigit`) yang **tidak** menyusutkan sampai 1 digit:

```javascript
function kaliTerusRekursif(num) {
  if (num < 10) return num;

  // HELPER: Murni mengalikan digit (satu putaran saja)
  const kalikanDigit = (n) => {
    if (n === 0) return 1;
    return (n % 10) * kalikanDigit(Math.floor(n / 10));
  };

  const product = kalikanDigit(num);

  return kaliTerusRekursif(product);
}
```

> 📌 **Pelajaran:** Saat menulis rekursi, selalu tanyakan — *"Apakah fungsi ini punya SATU tugas yang jelas, atau sedang merangkap dua tugas sekaligus?"*

---

<a name="insight-modulo"></a>
## 🔢 Insight: Pemecahan Digit dengan Pure Math

Selain mengubah angka ke string (`String(num)`), ada cara **matematika murni** untuk mengekstrak digit — menggunakan operator **Modulo (`%`)** dan **Pembagian (`/`)**.

### 🔑 Dua Operasi Kunci

```
🎯 % 10           → Mengambil digit paling BELAKANG
📌 Math.floor(/10) → Membuang digit paling BELAKANG
🔐 Analogi         → Seperti mengupas bawang dari luar ke dalam,
                     satu lapis (digit) per putaran.
```

### 🧪 Simulasi Detail: Angka `654`

| Putaran | `currentNum` | `% 10` (Ambil) | `product` (Kalikan) | `/ 10` (Potong) |
|:---:|:---:|:---:|:---:|:---:|
| 1 | `654` | `4` | `1 × 4 = 4` | `65` |
| 2 | `65` | `5` | `4 × 5 = 20` | `6` |
| 3 | `6` | `6` | `20 × 6 = 120` | `0` ← **STOP** |

Loop berhenti karena `currentNum = 0` (tidak lagi `> 0`).
Hasil akhir `product = 120`, lalu masuk rekursi: `kaliTerusRekursif(120)`.

> [!TIP]
> 💡 **Kapan Teknik Ini Wajib Dikuasai?**
>
> | Situasi | Pakai String? | Pakai Modulo? |
> |:---|:---:|:---:|
> | Kode sehari-hari / production | ✅ Lebih mudah | 🟡 Opsional |
> | Technical interview (FAANG) | ❌ Sering dilarang | ✅ **Wajib** |
> | Bahasa tanpa string method (C) | ❌ Tidak tersedia | ✅ **Satu-satunya cara** |
> | Optimasi performa kritis | 🟡 Lebih lambat | ✅ Lebih cepat |

---

<a name="naming"></a>
## 🏷️ Naming Convention

Penamaan variabel yang tepat membuat kode **berbicara sendiri** tanpa perlu komentar berlebihan.

### 📝 Tabel Perbandingan

| Lokasi / Peran | ❌ Bad | ✅ Good | Alasan |
|:---|:---|:---|:---|
| Parameter fungsi | `angka`, `n` | `num` | Singkatan standar *number* di industri |
| Angka dalam string | `strNum`, `s` | `numStr` | Tipe (`Str`) mendahului objek (`num`) |
| Penampung hasil kali | `total`, `result` | `product` | *Product* = hasil kali, *total* = hasil tambah |
| Digit satuan (di loop) | `number`, `n` | `digit` | Angka 0-9 penyusun angka besar = *digit* |
| Salinan angka | `temp`, `x` | `currentNum` | Deskriptif: angka yang sedang diproses |
| Digit terakhir | `d`, `r` | `lastDigit` | Jelas menunjukkan posisi digit (dari belakang) |

> [!IMPORTANT]
> 🔔 **Prinsip Utama:**
> - **`product`** untuk hasil **kali** — **`sum`/`total`** untuk hasil **tambah**
> - **`digit`** untuk angka satuan (0-9) — **`number`/`num`** untuk angka utuh
> - Gunakan `i`, `j`, `k` hanya untuk *counter* loop sederhana yang konteksnya sudah jelas

---

> 📝 **Navigasi:** [← Pendekatan Solusi](./01-pendekatan-solusi.md) · [Kembali ke README →](../README.md)
