# 🧮 Challenge: Total Digit Rekursif

### ✨ _Menjumlahkan setiap digit sebuah angka menggunakan kekuatan rekursi_

> 🎯 **Tujuan:** Memahami cara kerja rekursi dari nol — mulai dari analisis pola, membangun solusi bertahap, hingga mengevolusi algoritma menjadi kode profesional yang clean dan optimal.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔍 | [Tentang Challenge](#tentang-challenge) | Definisi soal dan contoh input/output |
| 🧠 | [Highlight Pendekatan](#highlight-pendekatan) | Dua pendekatan berbeda yang dieksplorasi |
| 🗂️ | [Peta Dokumentasi](#peta-dokumentasi) | Navigasi ke seluruh file dokumentasi |
| 📝 | [Catatan Akhir](#catatan-akhir) | Metadata dan credit dokumentasi |

---

<a name="tentang-challenge"></a>

## 🔍 Tentang Challenge

Diberikan sebuah bilangan bulat positif, buat fungsi yang mengembalikan **jumlah dari seluruh digitnya** secara **rekursif** (tanpa loop).

```
🎯 Fungsi    → totalDigitRekursif(angka)
📌 Input     → Bilangan bulat positif (contoh: 1542)
🔐 Output    → Penjumlahan setiap digit (contoh: 1 + 5 + 4 + 2 = 12)
```

**Contoh Eksekusi:**

| Input | Proses | Output |
|-------|--------|--------|
| `512` | `5 + 1 + 2` | `8` |
| `1542` | `1 + 5 + 4 + 2` | `12` |
| `7` | `7` *(single digit)* | `7` |

> [!IMPORTANT]
> Tantangan utama bukan sekadar mendapatkan hasil yang benar, melainkan **memahami mengapa** setiap baris kode ditulis — mulai dari pemilihan base case hingga metode ekstraksi digit.

---

<a name="highlight-pendekatan"></a>

## 🧠 Highlight Pendekatan

Challenge ini diselesaikan dengan **2 pendekatan** yang memiliki mental model berlawanan arah:

| Aspek | Versi 1 — String | Versi 2 — Matematika Murni |
|-------|-------------------|----------------------------|
| **Arah Potong** | Depan → Belakang (`1 → 5 → 4 → 2`) | Belakang → Depan (`2 → 4 → 5 → 1`) |
| **Base Case** | `strNum.length === 1` | `num < 10` |
| **Ekstraksi Digit** | `strNum[0]` | `num % 10` |
| **Potong Sisa** | `.slice(1)` | `Math.trunc(num / 10)` |
| **Tipe Data** | Konversi bolak-balik Number ↔ String | Konsisten Number sepanjang eksekusi |

> [!TIP]
> Kedua versi menghasilkan output identik karena sifat komutatif penjumlahan (`a + b = b + a`). Namun Versi 2 lebih optimal karena tidak membebani CPU dengan konversi tipe data berulang di setiap lapisan Call Stack.

---

<a name="peta-dokumentasi"></a>

## 🗂️ Peta Dokumentasi

Dokumentasi ini disusun **bertahap** — setiap file membangun pemahaman di atas file sebelumnya:

| No | File | Isi |
|----|------|-----|
| 1 | 📐 [Analisis & Visualisasi](docs/01-analisis-dan-visualisasi.md) | Analisis pola → rumus mental, analogi rekursi, evaluasi String vs Number, blueprint kerangka kode |
| 2 | 🔨 [Solusi Bertahap](docs/02-solusi-bertahap.md) | Membangun V1 (String) step-by-step, penalaran tiap baris, simulasi Call Stack |
| 3 | 🔄 [Evolusi & Perbandingan](docs/03-evolusi-dan-perbandingan.md) | V2 Matematika Murni, perbandingan V1 vs V2, eksperimen & optimasi base case |
| 4 | ✨ [Clean Code & Kode Final](docs/04-clean-code-dan-kode-final.md) | Naming convention, kode final V1 & V2 versi profesional |
| 5 | 📋 [Ringkasan Semua Versi](ringkasan-semua-versi.md) | Cheat sheet — semua versi kode siap copy-paste |

> [!NOTE]
> Disarankan membaca secara berurutan dari file 1 → 5 untuk mendapatkan pemahaman yang utuh dan bertahap.

---

<a name="catatan-akhir"></a>

## 📝 Catatan Akhir

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **14 Juni 2026** berdasarkan sesi mentoring langsung
> di **Google Antigravity** menggunakan JavaScript (Node.js).
> Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow
> `/mentor-challenge` dengan format visual `/setup-doc`.

---

➡️ **Mulai Belajar:** [Analisis & Visualisasi](docs/01-analisis-dan-visualisasi.md)
