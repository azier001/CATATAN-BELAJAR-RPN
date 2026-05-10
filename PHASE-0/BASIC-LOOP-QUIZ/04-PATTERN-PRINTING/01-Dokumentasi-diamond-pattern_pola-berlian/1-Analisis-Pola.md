# 🔍 Analisis Pola Berlian (Diamond Pattern)

> 📝 *File ini adalah fondasi dari seluruh dokumentasi. Pahami isi file ini terlebih dahulu
> sebelum lanjut ke file solusi manapun.*

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🎯 | [Pengenalan Challenge](#pengenalan-challenge) | Apa yang diminta challenge ini |
| 👀 | [Visualisasi Pola](#visualisasi-pola) | Melihat bentuk berlian dengan jelas |
| 📊 | [Tabel Breakdown Pola](#tabel-breakdown-pola) | Membedah jumlah spasi & bintang per baris |
| 📐 | [Penemuan Rumus](#penemuan-rumus) | Menemukan rumus matematika dari tabel |
| 🪞 | [Struktur Berlian: Atas dan Bawah](#struktur-berlian-atas-dan-bawah) | Memahami simetri cermin berlian |
| 🧪 | [Edge Cases](#edge-cases) | Kasus khusus: `num = 1` dan `num = 0` |

---

<a name="pengenalan-challenge"></a>
## 🎯 Pengenalan Challenge

Challenge ini adalah membuat fungsi yang menghasilkan **pola berlian (diamond)** menggunakan karakter bintang `*` dan spasi.

**Fungsi:**
```javascript
function berlian(num) {
  let pattern = '';
  // code here
  return pattern;
}
```

**Parameter:**
- `num` = tinggi **setengah bagian atas** berlian (termasuk baris tengah/puncak)

**Contoh Pemanggilan:**
```javascript
console.log(berlian(5)); // num = 5 → setengah atas = 5 baris
```

---

<a name="visualisasi-pola"></a>
## 👀 Visualisasi Pola

Untuk `num = 5`, hasil yang diharapkan:

```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

### 🧩 Masalah: Spasi Tidak Terlihat!

Spasi kosong itu "tak kasat mata". Untuk mempermudah analisis, kita ganti spasi dengan **titik (`.`)** agar polanya terlihat jelas:

```
....*         (Baris 1)
...***        (Baris 2)
..*****       (Baris 3)
.*******      (Baris 4)
*********     (Baris 5 — PUNCAK)
.*******      (Baris 6)
..*****       (Baris 7)
...***        (Baris 8)
....*         (Baris 9)
```

**Karakteristik yang terlihat:**
- Total baris = `(num × 2) - 1` = `(5 × 2) - 1` = **9 baris**
- Baris ke-5 (tengah) memiliki bintang paling banyak dan **0 spasi**
- Bentuknya **simetris**: bagian atas dan bawah adalah cerminan

---

<a name="tabel-breakdown-pola"></a>
## 📊 Tabel Breakdown Pola

### Bagian Atas (Baris 1–5)

| Baris (`row`) | Jumlah Spasi | Jumlah Bintang | Keterangan |
|:---:|:---:|:---:|:---|
| 1 | 4 | 1 | Paling atas |
| 2 | 3 | 3 | ↓ |
| 3 | 2 | 5 | ↓ |
| 4 | 1 | 7 | ↓ |
| 5 | 0 | 9 | **Puncak** (paling lebar) |

### Pola yang Terlihat dari Tabel

**Kolom Spasi:** `4, 3, 2, 1, 0`
- Spasi **berkurang 1** setiap baris turun.

**Kolom Bintang:** `1, 3, 5, 7, 9`
- Bintang **bertambah 2** setiap baris turun.
- Ini adalah deret **bilangan ganjil**!

---

<a name="penemuan-rumus"></a>
## 📐 Penemuan Rumus

### 1️⃣ Rumus Spasi: `num - row`

> **Kenapa?** Karena semakin turun baris, spasi semakin sedikit. Baris pertama paling banyak spasi, baris puncak tidak ada spasi sama sekali.

**Pembuktian dengan angka konkret (`num = 5`):**

| Baris (`row`) | Rumus: `num - row` | Hasil | Cocok? |
|:---:|:---:|:---:|:---:|
| 1 | `5 - 1` | **4** | ✅ |
| 2 | `5 - 2` | **3** | ✅ |
| 3 | `5 - 3` | **2** | ✅ |
| 4 | `5 - 4` | **1** | ✅ |
| 5 | `5 - 5` | **0** | ✅ |

---

### 2️⃣ Rumus Bintang: `(row × 2) - 1`

> **Kenapa dikalikan 2 lalu dikurangi 1?** Karena agar hasilnya selalu **bilangan ganjil** (1, 3, 5, 7, 9). Berlian harus punya jumlah bintang ganjil agar bentuknya simetris kiri-kanan.

**Pembuktian dengan angka konkret (`num = 5`):**

| Baris (`row`) | Rumus: `(row × 2) - 1` | Hasil | Cocok? |
|:---:|:---:|:---:|:---:|
| 1 | `(1 × 2) - 1` | **1** | ✅ |
| 2 | `(2 × 2) - 1` | **3** | ✅ |
| 3 | `(3 × 2) - 1` | **5** | ✅ |
| 4 | `(4 × 2) - 1` | **7** | ✅ |
| 5 | `(5 × 2) - 1` | **9** | ✅ |

---

### 📌 Ringkasan Rumus Inti

```
┌─────────────────────────────────────────────┐
│  Jumlah Spasi   =  num - row                │
│  Jumlah Bintang =  (row × 2) - 1            │
│  Total Baris    =  (num × 2) - 1            │
└─────────────────────────────────────────────┘
```

> ⚠️ **Penting:** Ketiga rumus ini adalah **fondasi** yang digunakan di SEMUA versi solusi (V1, V2, V3, V4). Pastikan kamu benar-benar paham sebelum lanjut!

---

<a name="struktur-berlian-atas-dan-bawah"></a>
## 🪞 Struktur Berlian: Atas dan Bawah

Berlian terdiri dari dua bagian yang **saling cermin**:

```
    *         ← Bagian ATAS
   ***          (row naik: 1 → 5)
  *****
 *******
*********     ← PUNCAK (baris ke-num)
 *******      ← Bagian BAWAH
  *****         (row turun: 4 → 1)
   ***
    *
```

### Tabel Lengkap (9 Baris)

| Baris | Bagian | Nilai `row` | Spasi (`num - row`) | Bintang (`2×row - 1`) |
|:---:|:---:|:---:|:---:|:---:|
| 1 | Atas | 1 | 4 | 1 |
| 2 | Atas | 2 | 3 | 3 |
| 3 | Atas | 3 | 2 | 5 |
| 4 | Atas | 4 | 1 | 7 |
| 5 | **Puncak** | **5** | **0** | **9** |
| 6 | Bawah | 4 | 1 | 7 |
| 7 | Bawah | 3 | 2 | 5 |
| 8 | Bawah | 2 | 3 | 3 |
| 9 | Bawah | 1 | 4 | 1 |

### 💡 Insight Kunci

Perhatikan kolom **Nilai `row`**: angkanya membentuk pola `1, 2, 3, 4, 5, 4, 3, 2, 1`.

Ini berarti:
- **Bagian atas:** Loop `row` dari `1` **naik** ke `num` (1 → 5).
- **Bagian bawah:** Loop `row` dari `num - 1` **turun** ke `1` (4 → 1).
- Bagian bawah mulai dari `num - 1` (bukan `num`) agar **baris puncak tidak tercetak dua kali**.

> ⚠️ **Gotcha: Baris Puncak Dobel!**
> Jika loop bawah dimulai dari `num` (bukan `num - 1`), baris tengah akan muncul **2 kali** dan berlian jadi "gendut" di tengah:
> ```
> *********  ← dari loop atas (row = 5)
> *********  ← dari loop bawah (row = 5) — DOBEL!
>  *******
> ```

---

<a name="edge-cases"></a>
## 🧪 Edge Cases

### Kasus `num = 1`
- Loop atas: `row = 1` → spasi = `1 - 1 = 0`, bintang = `1 × 2 - 1 = 1` → `*`
- Loop bawah: `row` mulai dari `0`, kondisi `row >= 1` → **tidak jalan**
- **Hasil:** Hanya satu bintang `*`. ✅

### Kasus `num = 0`
- Kedua loop tidak berjalan sama sekali.
- **Hasil:** String kosong `''`. ✅

---

## ➡️ Selanjutnya

Setelah memahami rumus dan struktur berlian, lanjut ke:
- 📄 [2-Solusi-2-Loop.md](./2-Solusi-2-Loop.md) — Membangun solusi pertama secara bertahap

---

> 🎯 *"Jangan pernah menulis kode sebelum kamu bisa menjelaskan rumusnya dengan kata-kata sendiri!"*
