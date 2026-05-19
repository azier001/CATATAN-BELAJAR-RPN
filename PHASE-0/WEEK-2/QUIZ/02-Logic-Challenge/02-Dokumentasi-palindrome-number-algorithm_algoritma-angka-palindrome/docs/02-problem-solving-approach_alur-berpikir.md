# 🧠 Problem Solving Approach — Angka Palindrome

### ✨ _Dari analisis pola hingga solusi dasar — proses berpikir yang terdokumentasi._

> 🎯 **Tujuan:** Mendokumentasikan proses berpikir (mental model) dalam menemukan logika inti challenge, membangun kerangka blueprint, dan merumuskan alur algoritma konseptual sebelum menulis kode.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔬 | [Fase 1: Temukan Polanya Dulu](#fase-1) | Analisis logika sebelum menyentuh kode |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kosong + panduan penamaan |
| 🏗️ | [Fase 2: Peta Pembangunan Kode](#fase-2) | Alur penyusunan logika secara bertahap |
| ⚠️ | [Gotchas & Jebakan Umum](#gotchas) | Peringatan penting saat mengerjakan |

---

<a name="fase-1"></a>
## 🔬 Fase 1 — Temukan Polanya Dulu (Tanpa Kode!)

> [!IMPORTANT]
> 🧠 **Prinsip Utama:** Jangan langsung menulis kode sebelum kamu bisa menjelaskan logikanya dengan kata-kata. Temukan "hukum alam" dari proses pencarian dulu, baru terjemahkan ke kode.

### 🔍 Langkah 1 — Amati Prosesnya

Dari [Analisis Pola di file 01](./01-challenge-overview_gambaran-challenge.md#analisis-pola), kita sudah tahu bahwa proses pencarian palindrome itu seperti **mendaki tangga satu per satu**. Sekarang, mari kita fokus pada **apa yang terjadi di setiap anak tangga:**

```
Anak tangga 118 → Balik jadi "811" → "118" ≠ "811" → ❌ Naik lagi
Anak tangga 119 → Balik jadi "911" → "119" ≠ "911" → ❌ Naik lagi
Anak tangga 120 → Balik jadi "021" → "120" ≠ "021" → ❌ Naik lagi
Anak tangga 121 → Balik jadi "121" → "121" = "121" → ✅ BERHENTI!
```

### 🔍 Langkah 2 — Identifikasi Aksi yang Berulang

Pertanyaan kunci: **aksi apa yang terus diulang di setiap tangga?**

| # | Aksi | Detail |
|:-:|------|--------|
| 1 | Ubah angka → string | `118` → `"118"` |
| 2 | Balik posisi string | `"118"` → `"811"` |
| 3 | Bandingkan asli vs terbalik | `"118"` === `"811"`? |
| 4a | Jika SAMA → berhenti | Hentikan pencarian & ambil angkanya |
| 4b | Jika BEDA → naik 1 tangga | Tambah 1, ulangi dari aksi 1 |

> 📌 *Perhatikan: aksi 1-3 adalah proses **cek palindrome** yang akan diulang-ulang secara konseptual.*

### 🔍 Langkah 3 — Temukan "Pintu Masuk" yang Aman

Dari [Rules di file 01](./01-challenge-overview_gambaran-challenge.md#rules), kita tahu input yang sudah palindrome harus di-skip. Bagaimana cara paling bersih secara logika?

- **Strategi A (Cek di awal):** Menggunakan kondisi `if` untuk memeriksa input sebelum masuk loop. (Rawan ganda dan berlebihan).
- **Strategi B (Langsung maju 1):** Mengawali pencarian dari `num + 1`. (Logika otomatis bersih tanpa percabangan tambahan).

> [!TIP]
> 💡 **Insight:** Dengan langsung melangkah ke `num + 1` sebelum pengecekan pertama dimulai, kita memecahkan Gotcha input palindrome secara elegan.

---

<a name="blueprint"></a>
## 🗺️ Blueprint & Kamus Variabel

Sebelum diimplementasikan ke JavaScript asli, kita rancang "blueprint" strukturnya terlebih dahulu.

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|:--------------:|:-----------------:|--------|
| Parameter Input | `num` | `n`, `x`, `angka` | Standar industri untuk penanda input numerik |
| Angka yang sedang diuji | `candidate` | `temp`, `cek` | Jelas mendeskripsikan angka yang sedang dicalonkan |
| Angka dalam bentuk string | `str` | `s`, `txt` | Singkalan standar untuk representasi string |
| Angka yang dibalik (string) | `reversedStr` | `balik`, `rev` | Langsung terbaca sebagai string hasil pembalikan |
| Fungsi pengecek | `isPalindrome` | `cek`, `pali` | Awalan `is` menandakan output berupa Boolean |

### 🗺️ Kerangka Kode (Blueprint Pseudocode)

```javascript
// 🗺️ BLUEPRINT LOGIKA (Mental Model: Mendaki Tangga + Cek Kembaran)

function angkaPalindrome(num) {
  // 1. Maju satu langkah awal (Skip Gotcha input palindrome)
  // ...
  
  // 2. Loop tanpa batas (Mendaki satu per satu)
  while (true) {
    
    // 3. Konversi angka menjadi teks dan balik urutannya
    // ...
    
    // 4. Bandingkan angka asli dengan teks yang dibalik
    if (/* Angka asli === Teks dibalik */) {
      return /* Angka tersebut */; // Pintu Keluar
    }
    
    // 5. Jika tidak sama, naikkan langkah
    // ...
  }
}
```

---

<a name="fase-2"></a>
## 🏗️ Fase 2 — Peta Pembangunan Kode (Roadmap)

Untuk mengubah cetak biru (*blueprint*) di atas menjadi kode yang bekerja, kita akan menyusunnya lewat 3 tahap evolusi logika di file dokumentasi berikutnya:

```
┌──────────────────────────────────────────────┐
│  STAGE 1: Kerangka Loop & Increment          │
│  • Membuat while(true) loop                  │
│  • Mengatur increment angka (mendaki tangga) │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│  STAGE 2: Integrasi Logika Pembalik          │
│  • Melakukan rantai konversi tipe data       │
│  • Menguji pembalikan digit di tiap iterasi  │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│  STAGE 3: Pemasangan Pintu Keluar (V1)       │
│  • Mengunci kondisi penghentian loop         │
│  • Mengembalikan nilai final                 │
└──────────────────────────────────────────────┘
```

> 💡 *Detail implementasi kode lengkap dari Stage 1 hingga kode final Version 1 dapat langsung dipelajari pada [03 — V1: Logika Dasar](./03-v1-basic-logic_logika-dasar.md).*

---

<a name="gotchas"></a>
## ⚠️ Gotchas & Jebakan Umum (Secara Logika)

Ada tiga jebakan konseptual yang sering membuat kode kita gagal berjalan atau *infinite loop*:

> [!WARNING]
> 🐛 **Jebakan #1: Lupa melangkah di awal (Maju +1)**
> Jika pencarian dimulai langsung dari `num` tanpa ditambah 1, input yang sudah merupakan palindrome (seperti `8` atau `11`) akan langsung mengembalikan dirinya sendiri. Kita wajib menggeser titik start ke `num + 1` terlebih dahulu.

---

> [!WARNING]
> 🐛 **Jebakan #2: Membandingkan tipe data berbeda**
> JavaScript memperlakukan `121` (Number) dan `"121"` (String) berbeda jika dibandingkan menggunakan operator identik (`===`). Kita harus membandingkan dalam tipe data yang sama (String vs String).

---

> [!CAUTION]
> 🔴 **Jebakan #3: Infinite Loop Tanpa Safety Brake**
> Loop `while(true)` akan berjalan selamanya jika kondisi penentu `return` kita cacat secara logika. Saat melakukan pengujian pertama kali di terminal, pastikan memasang batas penghenti sementara.

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [01 — Challenge Overview](./01-challenge-overview_gambaran-challenge.md) | [README](../README.md) | [03 — V1: Logika Dasar](./03-v1-basic-logic_logika-dasar.md) |
