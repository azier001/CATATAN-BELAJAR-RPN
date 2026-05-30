# 🛒 Challenge: Shopping Time

### ✨ _Simulasi belanja greedy — beli barang termahal duluan selama uang cukup_

> 🎯 **Tujuan:** Memahami gambaran besar challenge `shoppingTime`, melihat simulasi visual algoritma, dan menavigasi seluruh dokumentasi yang tersedia.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📝 | [Deskripsi Soal](#deskripsi-soal) | Apa yang diminta challenge ini |
| 🔍 | [Simulasi Visual](#simulasi-visual) | Tabel breakdown proses belanja langkah demi langkah |
| 🗺️ | [Evolusi Versi](#evolusi-versi) | Ringkasan 4 versi solusi dari awal hingga final |
| 📂 | [Peta Dokumentasi](#peta-dokumentasi) | Navigasi ke file-file detail |

---

<a name="deskripsi-soal"></a>
## 📝 Deskripsi Soal

Buatlah fungsi `shoppingTime(memberId, money)` yang mensimulasikan proses belanja di sebuah toko khusus member.

**Aturan:**
1. Jika `memberId` kosong/falsy → tolak dengan pesan `"Mohon maaf, toko X hanya berlaku untuk member saja"`
2. Jika `money` < 50.000 → tolak dengan pesan `"Mohon maaf, uang tidak cukup"`
3. Toko memiliki **5 barang sale** yang sudah diurutkan dari **termahal ke termurah**
4. Pelanggan mengecek barang secara berurutan — **beli jika sisa uang cukup, lewati jika tidak**
5. Return objek `{ memberId, money, listPurchased, changeMoney }`

**Daftar Barang:**

| # | Nama Barang | Harga |
|---|-------------|------:|
| 1 | Sepatu Stacattu | 1.500.000 |
| 2 | Baju Zoro | 500.000 |
| 3 | Baju H&N | 250.000 |
| 4 | Sweater Uniklooh | 175.000 |
| 5 | Casing Handphone | 50.000 |

> [!IMPORTANT]
> Algoritma ini disebut **Greedy** — selalu mencoba membeli barang termahal lebih dulu. Urutan barang sudah di-hardcode dari mahal ke murah, jadi **tidak perlu sorting tambahan**.

---

<a name="simulasi-visual"></a>
## 🔍 Simulasi Visual

Contoh eksekusi dengan `money = 700.000`:

| Cek Barang | Harga | Uang Sebelum | Beli? | Sisa Uang |
|------------|------:|-------------:|:-----:|----------:|
| Sepatu Stacattu | 1.500.000 | 700.000 | ❌ | 700.000 |
| Baju Zoro | 500.000 | 700.000 | ✅ | 200.000 |
| Baju H&N | 250.000 | 200.000 | ❌ | 200.000 |
| Sweater Uniklooh | 175.000 | 200.000 | ✅ | 25.000 |
| Casing Handphone | 50.000 | 25.000 | ❌ | 25.000 |

**Hasil:** `listPurchased = ['Baju Zoro', 'Sweater Uniklooh']`, `changeMoney = 25000`

---

<a name="evolusi-versi"></a>
## 🗺️ Evolusi Versi

Selama sesi mentoring, solusi berevolusi melalui **4 versi**:

| Versi | Pendekatan | Struktur Data | Loop | Highlight |
|:-----:|------------|---------------|------|-----------|
| **V1** | Mutasi objek `result` | Array of Objects | `for...of` | Mengatasi gotcha primitive vs reference |
| **V2** | Mutasi objek `result` | Plain Object (Dictionary) | `for...in` | Eksplorasi struktur data alternatif |
| **V3** | Mutasi objek `result` | Array of Objects | `for...of` + destructuring | ES6 shorthand + destructuring = clean code |
| **V4** | Functional return | Array of Objects | `for...of` + destructuring | Kode mandiri user — immutable mindset |

> [!TIP]
> **V3** dan **V4** menghasilkan output yang identik, tapi berbeda arsitektur. V3 membangun objek `result` di awal lalu memutasi propertinya. V4 menggunakan local state lalu mem-*pack* hasilnya di `return` — pendekatan yang lebih **fungsional** dan **immutable**.

---

<a name="peta-dokumentasi"></a>
## 📂 Peta Dokumentasi

| # | File | Isi |
|---|------|-----|
| 1 | 📖 [Analisis & Solusi Bertahap](docs/01-analisis-dan-solusi-bertahap.md) | Visualisasi pola, algoritma tahan lupa, blueprint kode, V1 step-by-step |
| 2 | 🔄 [Evolusi & Clean Code](docs/02-evolusi-dan-clean-code.md) | V2 Dictionary, V3 ES6, review kode mandiri (V4), naming convention |
| 3 | 📋 [Ringkasan Semua Versi](ringkasan-semua-versi.md) | Full code V1–V4 siap copy-paste |

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **30 Mei 2026** berdasarkan sesi mentoring langsung
> di **Google Antigravity** menggunakan JavaScript (Node.js).
> Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow
> `/mentor-challenge` dengan format visual `/setup-doc`.

---

➡️ **Mulai baca:** [Analisis & Solusi Bertahap](docs/01-analisis-dan-solusi-bertahap.md)
