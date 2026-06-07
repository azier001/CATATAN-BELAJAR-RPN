# 🔍 Analisis Pola: Makan Terus Rekursif

### ✨ _Visualisasi pergerakan waktu untuk menemukan base case yang tepat_

> 🎯 **Tujuan:** Memahami pola perhitungan dengan tabel breakdown sebelum menulis kode, sehingga kamu bisa menemukan base case rekursif yang akurat

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧠 | [Memahami Masalah](#memahami-masalah) | Input, proses, output |
| 📊 | [Tabel Breakdown Waktu](#tabel-breakdown-waktu) | Visualisasi pergerakan waktu per pesanan |
| 🔍 | [Menemukan Base Case](#menemukan-base-case) | Kapan rekursif harus berhenti? |
| ⚡ | [Pola Recursive Case](#pola-recursive-case) | Bagaimana akumulasi hasil? |
| 🎯 | [Kesimpulan](#kesimpulan) | Key takeaways |

---

<a name="memahami-masalah"></a>
## 🧠 Memahami Masalah

Sebelum langsung coding, mari pahami dulu **apa yang terjadi** di balik layar.

### Input → Proses → Output

```
🎯 Fungsi    → makanTerusRekursif(waktu)
📌 Input     → Waktu dalam menit (number)
🔐 Proses    → Setiap 15 menit, customer memesan 1 kali
📦 Output    → Jumlah total pesanan (number)
```

### Aturan Bisnis

1. **Durasi makan**: Setiap pesanan menghabiskan **15 menit**
2. **Kondisi berhenti**: Customer berhenti memesan jika **waktu sudah ≤ 0**
3. **Syarat memesan**: Selama `waktu > 0`, customer **masih bisa memesan**

> [!IMPORTANT]
> **Key Insight:** Kata "masih bisa memesan **selama waktunya belum 0**" artinya customer dengan sisa waktu **1 menit pun** tetap dihitung bisa memesan (meski setelah makan waktunya jadi negatif).

---

<a name="tabel-breakdown-waktu"></a>
## 📊 Tabel Breakdown Waktu

Mari kita telusuri pergerakan waktu secara **manual** menggunakan contoh konkret.

### Contoh 1: `makanTerusRekursif(66)`

| Pesanan ke- | Sisa Waktu Sebelum Makan | Cek Kondisi | Proses (Makan) | Sisa Waktu Setelah Makan |
|:-----------:|:------------------------:|:-----------:|:--------------:|:------------------------:|
| **1** | 66 menit | 66 > 0 ✅ | 66 - 15 | **51 menit** |
| **2** | 51 menit | 51 > 0 ✅ | 51 - 15 | **36 menit** |
| **3** | 36 menit | 36 > 0 ✅ | 36 - 15 | **21 menit** |
| **4** | 21 menit | 21 > 0 ✅ | 21 - 15 | **6 menit** |
| **5** | 6 menit | 6 > 0 ✅ | 6 - 15 | **-9 menit** ❌ |
| **6** | -9 menit | -9 > 0 ❌ | **BERHENTI** | — |

**Hasil:** `5 pesanan`

> [!NOTE]
> Perhatikan bahwa sisa waktu **tidak selalu berakhir persis di 0**. Pada pesanan ke-5, waktu jatuh melewati 0 menjadi **-9 menit**.

---

### Contoh 2: `makanTerusRekursif(45)`

| Pesanan ke- | Sisa Waktu Sebelum Makan | Cek Kondisi | Proses (Makan) | Sisa Waktu Setelah Makan |
|:-----------:|:------------------------:|:-----------:|:--------------:|:------------------------:|
| **1** | 45 menit | 45 > 0 ✅ | 45 - 15 | **30 menit** |
| **2** | 30 menit | 30 > 0 ✅ | 30 - 15 | **15 menit** |
| **3** | 15 menit | 15 > 0 ✅ | 15 - 15 | **0 menit** |
| **4** | 0 menit | 0 > 0 ❌ | **BERHENTI** | — |

**Hasil:** `3 pesanan`

---

### Contoh 3: `makanTerusRekursif(10)`

| Pesanan ke- | Sisa Waktu Sebelum Makan | Cek Kondisi | Proses (Makan) | Sisa Waktu Setelah Makan |
|:-----------:|:------------------------:|:-----------:|:------------------------:|
| **1** | 10 menit | 10 > 0 ✅ | 10 - 15 | **-5 menit** ❌ |
| **2** | -5 menit | -5 > 0 ❌ | **BERHENTI** | — |

**Hasil:** `1 pesanan`

> [!TIP]
> **Pattern Recognition:** Meskipun sisa waktu **lebih kecil dari 15 menit**, customer tetap bisa memesan 1 kali (karena waktu masih > 0 sebelum makan).

---

<a name="menemukan-base-case"></a>
## 🔍 Menemukan Base Case

**Base case** adalah **syarat berhenti** dalam fungsi rekursif. Tanpa base case, fungsi akan berjalan tanpa henti (infinite loop).

### Analisis dari Tabel

Dari ketiga tabel di atas, kita bisa melihat pola:

| Input | Sisa Waktu Akhir | Berhenti Kapan? |
|:-----:|:----------------:|:---------------:|
| 66 | **-9 menit** | Ketika waktu ≤ 0 |
| 45 | **0 menit** | Ketika waktu ≤ 0 |
| 10 | **-5 menit** | Ketika waktu ≤ 0 |

**Kesimpulan:** Fungsi harus berhenti ketika `waktu <= 0`

### Kenapa Bukan `waktu === 0`?

> [!CAUTION]
> **Jebakan Umum:** Banyak yang berpikir base case adalah `waktu === 0`, tapi ini **SALAH**.

**Alasan:**
- Sisa waktu tidak selalu **persis 0** (bisa negatif)
- Contoh: `66 - 15 - 15 - 15 - 15 - 15 = 6 menit` → lalu `6 - 15 = -9` (langsung **skip 0**)

**Base case yang benar:**
```javascript
if (waktu <= 0) return 0; // Berhenti jika waktu habis atau negatif
```

---

<a name="pola-recursive-case"></a>
## ⚡ Pola Recursive Case

Setelah menemukan base case, sekarang kita cari pola untuk **recursive case** (kondisi ketika fungsi memanggil dirinya sendiri).

### Logika Akumulasi

Setiap kali fungsi berjalan dan `waktu > 0`:
1. Customer berhasil memesan **1 kali** → tambah hitungan `+1`
2. Waktu berkurang **15 menit** → kurangi waktu `-15`
3. Ulangi proses dengan waktu baru → panggil `makanTerusRekursif(waktu - 15)`

### Visualisasi Akumulasi

```
makanTerusRekursif(45)
    ↓
1 + makanTerusRekursif(30)  ← Pesanan ke-1 dihitung
        ↓
    1 + makanTerusRekursif(15)  ← Pesanan ke-2 dihitung
            ↓
        1 + makanTerusRekursif(0)  ← Pesanan ke-3 dihitung
                ↓
            return 0  ← Base case tercapai
            ↓
        1 + 0 = 1  ← Kembali ke level 3
        ↓
    1 + 1 = 2  ← Kembali ke level 2
    ↓
1 + 2 = 3  ← Kembali ke level 1 (hasil akhir)
```

**Hasil:** `3 pesanan`

### Pola Recursive Case

```javascript
return 1 + makanTerusRekursif(waktu - 15);
```

**Penjelasan:**
- `1` → Hitungan untuk pesanan saat ini
- `+` → Operator akumulasi
- `makanTerusRekursif(waktu - 15)` → Panggil fungsi lagi dengan waktu dikurangi 15

---

<a name="kesimpulan"></a>
## 🎯 Kesimpulan

### Key Takeaways

| Aspek | Temuan |
|-------|--------|
| **Base Case** | `if (waktu <= 0) return 0` — berhenti jika waktu habis atau negatif |
| **Recursive Case** | `return 1 + makanTerusRekursif(waktu - 15)` — akumulasi pesanan |
| **Pola Waktu** | Sisa waktu tidak selalu 0, bisa negatif |
| **Syarat Memesan** | Customer bisa memesan selama `waktu > 0` (sebelum dikurangi 15) |

### Algoritma dalam Bahasa Natural

```
Jika waktu habis (≤ 0):
    → Return 0 (tidak ada pesanan lagi)

Jika waktu masih ada (> 0):
    → Hitung 1 pesanan + pemanggilan ulang dengan waktu dikurangi 15
```

> [!TIP]
> **Next Step:** Setelah memahami pola ini, kita siap mentranslate logika ke dalam kode. Lanjut ke **[Blueprint & Naming](./02-blueprint-kode.md)** untuk melihat kerangka kode dan naming convention.

---

### 🧭 Navigasi

| Link | Deskripsi |
|------|-----------|
| [⬅️ README](../README.md) | Kembali ke halaman utama |
| [➡️ Blueprint & Naming](./02-blueprint-kode.md) | Lanjut: Kerangka kode + kamus variabel |
| [📦 Lihat Semua Versi Kode](./code-versions.md) | Skip ke perbandingan lengkap |

---

📅 **Terakhir diupdate:** 7 Juni 2026
