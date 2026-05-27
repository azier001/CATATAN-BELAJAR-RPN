# 🔍 Fase 1: Visualisasi & Analisis Logika

### ✨ _Membedah pola pasangan faktor sebelum menyentuh kode — karena memahami logika adalah setengah dari solusi_

> 🎯 **Tujuan:** Memahami sepenuhnya apa yang diminta challenge `digitPerkalianMinimum` — mulai dari konsep faktor, cara menghitung digit, hingga menemukan strategi pencarian minimum — **tanpa menulis satu baris kode pun**.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Pemahaman Masalah](#pemahaman-masalah) | Apa yang sebenarnya diminta challenge ini? |
| 🔢 | [Tabel Breakdown Pola](#tabel-breakdown-pola) | Simulasi manual mencari faktor angka 20 |
| 🧠 | [Diskusi Logika (Q&A)](#diskusi-logika) | Dua pertanyaan kunci sebelum ngoding |
| ⚠️ | [Gotchas & Jebakan Logika](#gotchas-jebakan-logika) | Hal-hal yang sering terlewat saat analisis |
| 🎯 | [Kesimpulan & Key Takeaways](#kesimpulan) | Rangkuman insight dari fase analisis |

---

<a name="pemahaman-masalah"></a>
## 📖 Pemahaman Masalah

Sebelum menulis kode, kita harus **sepakat dulu** soal apa yang diminta:

### 🎯 Input → Proses → Output

```
📥 INPUT    →  Satu angka bulat (number)
⚙️ PROSES   →  Cari semua pasangan faktor → gabungkan jadi string → hitung panjangnya
📤 OUTPUT   →  Jumlah digit TERKECIL dari semua penggabungan pasangan faktor
```

### 🔑 Konsep Kunci: Apa Itu Faktor?

> [!NOTE]
> 💡 **Faktor** adalah angka yang bisa **membagi habis** (tanpa sisa) angka target.
> Contoh untuk angka **24**: Pasangan faktornya adalah `1 & 24`, `2 & 12`, `3 & 8`, dan `4 & 6`.

### 📏 Bagaimana Menghitung "Jumlah Digit"?

Setelah mendapatkan pasangan faktor, kedua angka tersebut **digabungkan menjadi teks** (string), lalu dihitung panjangnya:

```
Pasangan:  3  dan  8
Digabung:  "38"
Panjang:   2 digit  ← ini yang kita cari!
```

> [!TIP]
> 💡 **Analogi Sederhana**
>
> | | Tanpa Gabungan | Dengan Gabungan |
> |---|---|---|
> | 📝 Pasangan faktor | `3` dan `8` → dua angka terpisah | `"38"` → satu teks utuh |
> | 📏 Cara hitung | Susah — harus hitung digit per angka | Mudah — tinggal hitung panjang teks |
>
> **Intinya:** Kita "menempel" dua angka jadi satu teks agar bisa dihitung panjangnya sekaligus.

---

<a name="tabel-breakdown-pola"></a>
## 🔢 Tabel Breakdown Pola (Contoh Angka 20)

Untuk memvisualisasikan bagaimana komputer mencari digit minimum, mari kita **jadi komputer** dan bedah prosesnya pada angka `20`:

| Pembagi | Bisa membagi 20 habis? | Pasangan Faktor | Digabung Jadi Teks | Jumlah Digit |
|:-------:|:-----------------------|:---------------:|:-------------------:|:------------:|
| **1** | ✅ Ya → `20 ÷ 1 = 20` | `1` dan `20` | `"120"` | **3** |
| **2** | ✅ Ya → `20 ÷ 2 = 10` | `2` dan `10` | `"210"` | **3** |
| **3** | ❌ Tidak → `20 ÷ 3 = 6.66...` | — | — | — |
| **4** | ✅ Ya → `20 ÷ 4 = 5` | `4` dan `5` | `"45"` | **2** ⭐ |
| **5** | ✅ Ya → `20 ÷ 5 = 4` | `5` dan `4` | `"54"` | **2** ⭐ |

> [!IMPORTANT]
> 🏆 **Hasil:** Jumlah digit minimum untuk angka **20** adalah **2** (dari pasangan `4 & 5` atau `5 & 4`).

### 🔍 Pola Yang Terlihat Dari Tabel

```
📌 Insight 1:  Angka yang TIDAK bisa membagi habis → langsung SKIP (abaikan)
📌 Insight 2:  Pasangan faktor yang paling "berdekatan" nilainya → cenderung punya digit PALING SEDIKIT
📌 Insight 3:  Setelah titik tengah, pasangan hanya BERULANG TERBALIK (4,5 ↔ 5,4)
```

---

<a name="diskusi-logika"></a>
## 🧠 Diskusi Logika (Q&A)

Dua pertanyaan kunci yang harus dijawab sebelum menulis kode:

### ❓ Pertanyaan 1: Bagaimana mengecek "membagi habis"?

```
🎯 Jawaban  →  Gunakan operator MODULO (%)
📌 Aturan   →  Jika angka % pembagi === 0, berarti HABIS dibagi (itu faktor!)
🔢 Contoh   →  20 % 4 === 0  ✅ (faktor)
              20 % 3 === 2  ❌ (bukan faktor, ada sisa 2)
```

### ❓ Pertanyaan 2: Berapa digit minimum untuk angka 90?

```
🎯 Prediksi →  Minimal 3 digit
📌 Alasan   →  Pasangan faktor paling berdekatan = 9 dan 10
              9 × 10 = 90  →  digabung jadi "910"  →  3 digit
🔍 Cek      →  Tidak ada pasangan 1 digit × 1 digit yang = 90
              (9 × 9 = 81 ≠ 90), jadi minimal memang 3 digit
```

---

<a name="gotchas-jebakan-logika"></a>
## ⚠️ Gotchas & Jebakan Logika

> [!CAUTION]
> 🔴 **Jebakan #1: Lupa Cek Angka 1 Sebagai Input**
>
> Jika input `angka = 1`, satu-satunya pasangan faktor adalah `1 × 1`.
> Digabung: `"11"` → **2 digit**.
> Jika loop kita pakai `i < angka` (bukan `i <= angka`), maka `for (let i = 1; i < 1)` **tidak pernah jalan** → return `Infinity` → **BUG!**

> [!WARNING]
> 🐛 **Jebakan #2: Pasangan Faktor Berulang Terbalik**
>
> Pasangan `(4, 5)` dan `(5, 4)` sebenarnya **pasangan yang sama** — hanya urutannya terbalik. Jika kita tidak hati-hati, loop bisa mengecek duplikat yang sia-sia. Ini akan menjadi insight penting di fase optimasi nanti.

---

<a name="kesimpulan"></a>
## 🎯 Kesimpulan & Key Takeaways

```
✅ Kita TIDAK perlu mengecek angka yang menyisakan desimal (bukan faktor)
✅ Operator modulo (%) adalah KUNCI untuk menemukan faktor
✅ Kita perlu membuat LOOP untuk mencoba pembagi dari 1 ke atas
✅ Setiap pasangan faktor di-GABUNG jadi string → hitung panjangnya
✅ Simpan panjang TERPENDEK yang pernah ditemukan → itu jawabannya
```

> [!NOTE]
> 💡 **Prinsip Fase 1:** Kita baru **memahami POLA** dan **menyusun STRATEGI** — belum menulis kode sama sekali. Ibarat arsitek yang menggambar blueprint sebelum membangun rumah.

---

| ⬅️ Sebelumnya | 📋 Daftar Isi | Selanjutnya ➡️ |
|:-:|:-:|:-:|
| — | [README](../README.md) | [02 — Solusi Bertahap](./02-solusi-bertahap.md) |
