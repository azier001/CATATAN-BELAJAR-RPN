# 📐 Analisis & Visualisasi

### ✨ _Memahami pola rekursi sebelum menulis satu baris kode pun_

> 🎯 **Tujuan:** Membangun pemahaman fundamental tentang rekursi, menemukan rumus mental dari analisis pola, dan memilih pendekatan implementasi yang paling tepat — semuanya **tanpa coding** terlebih dahulu.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 💡 | [Apa Itu Rekursi?](#apa-itu-rekursi) | Definisi & analogi "Mengantre" |
| 🔍 | [Tabel Analisis Pola](#tabel-analisis-pola) | Breakdown digit angka 1542 → rumus ditemukan |
| 🧠 | [Rumus Mental](#rumus-mental) | Formula yang akan jadi fondasi kode |
| ⚖️ | [String vs Number](#string-vs-number) | Evaluasi 2 pendekatan sebelum implementasi |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint-kamus-variabel) | Kerangka kode kosong + standar penamaan |

---

<a name="apa-itu-rekursi"></a>

## 💡 Apa Itu Rekursi?

Rekursif adalah sebuah fungsi yang **memanggil dirinya sendiri** secara berulang untuk memecahkan porsi masalah yang semakin kecil, hingga bertemu dengan kondisi berhenti (**Base Case**).

### Analogi "Mengantre"

Bayangkan kamu sedang dalam antrean panjang dan ingin mengetahui jumlah orang di depanmu:

```
😀 Kamu        → "Ada berapa orang di depanmu?"  (Recursive Case)
  😃 Orang 1   → "Ada berapa orang di depanmu?"  (Recursive Case)
    😄 Orang 2 → "Ada berapa orang di depanmu?"  (Recursive Case)
      😎 Paling Depan → "Nol!"                   (Base Case! 🛑)

Jawaban dilempar mundur:
      😎 → 0
    😄 → 0 + 1 = 1
  😃 → 1 + 1 = 2
😀 → 2 + 1 = 3  ← Jawaban akhirmu!
```

> [!NOTE]
> Dua komponen wajib setiap fungsi rekursif:
> - **Base Case** — kondisi berhenti mutlak agar tidak *infinite loop*
> - **Recursive Case** — pemanggilan diri sendiri dengan masalah yang **lebih kecil**

---

<a name="tabel-analisis-pola"></a>

## 🔍 Tabel Analisis Pola

Sebelum menulis kode, kita pecah angka `1542` langkah demi langkah untuk menemukan **pola** yang bisa dijadikan rumus:

| Iterasi | Angka Diproses | Digit yang Diambil | Sisa Angka | Aksi |
|---------|----------------|--------------------|------------|------|
| 1 | `1542` | `1` | `542` | Lempar `542` ke fungsi lagi |
| 2 | `542` | `5` | `42` | Lempar `42` ke fungsi lagi |
| 3 | `42` | `4` | `2` | Lempar `2` ke fungsi lagi |
| 4 | `2` | `2` | *(habis)* | 🛑 **Base Case** — berhenti! |

### Mengapa Iterasi 4 Adalah Base Case?

Pada iterasi 4, angka yang diproses tinggal `2` — sebuah **single digit**. Angka dengan panjang 1 digit tidak bisa lagi dipecah ke belakang. Maka kita langsung me-*return* angka tersebut sebagai jawaban, sekaligus menghentikan rekursi.

> [!IMPORTANT]
> Pola kunci yang ditemukan: setiap iterasi melakukan hal yang **sama persis** — ambil 1 digit, lempar sisanya. Yang berubah hanya **ukuran angka** yang semakin mengecil. Inilah esensi rekursi.

---

<a name="rumus-mental"></a>

## 🧠 Rumus Mental

Dari tabel analisis di atas, kita menemukan formula yang konsisten di setiap iterasi:

```
🎯 Rumus Mental:
   Total(angka) = Digit yang Diambil + Total(Sisa Angka)

📌 Contoh Konkret:
   Total(1542) = 1 + Total(542)
   Total(542)  = 5 + Total(42)
   Total(42)   = 4 + Total(2)
   Total(2)    = 2              ← Base Case!

🔐 Penjumlahan Mundur:
   2 → 4+2=6 → 5+6=11 → 1+11=12
   Hasil Akhir = 12 ✅
```

Rumus mental ini akan menjadi **fondasi langsung** saat kita menulis kode di file berikutnya.

---

<a name="string-vs-number"></a>

## ⚖️ Evaluasi Pendekatan: String vs Number

Untuk mengimplementasikan rumus mental di atas, kita perlu 3 kemampuan dasar:

1. **Mengecek** apakah angka sudah single digit (untuk base case)
2. **Mengambil** 1 digit dari angka
3. **Memotong** sisa digit untuk dilempar ke fungsi rekursif

Berikut evaluasi kedua pendekatan:

| Kebutuhan | Tipe `Number` (Matematika) | Tipe `String` (Teks) |
|-----------|---------------------------|----------------------|
| Cek panjang digit | ❌ Tidak punya `.length` | ✅ `str.length` |
| Ambil 1 digit | ⚠️ `% 10` → ambil **belakang** | ✅ `str[0]` → ambil **depan** |
| Potong sisa | ⚠️ `Math.trunc(n / 10)` | ✅ `str.slice(1)` |
| Arah proses | Belakang → Depan | Depan → Belakang |
| Kompleksitas awal | Tinggi (perlu paham modulo) | Rendah (natural & intuitif) |

> [!TIP]
> **Kesimpulan:** Untuk versi pertama, pendekatan **String** dipilih karena jauh lebih intuitif — mendukung operasi indeks dan pemotongan berurutan dari depan ke belakang, persis seperti cara manusia membaca angka secara natural.
>
> Pendekatan **Matematika Murni** akan dieksplorasi sebagai Versi 2 di [Evolusi & Perbandingan](03-evolusi-dan-perbandingan.md).

---

<a name="blueprint-kamus-variabel"></a>

## 🗺️ Blueprint & Kamus Variabel

Sebelum menulis kode jadi, kita siapkan **kerangka kosong** dan **standar penamaan** agar saat coding nanti tinggal mengisi logika.

### A. Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan | Alasan |
|----------------|----------------|-----------|--------|
| Parameter input | `num` | `a`, `x`, `val` | Standar industri, langsung dipahami sebagai angka |
| Konversi ke string | `strNum` | `s`, `text` | *camelCase* — jelas menunjukkan string yang merepresentasikan angka |
| Digit yang diambil | `firstDigit` | `d`, `front` | Awalan `first` lazim untuk elemen indeks `[0]` |
| Sisa setelah potong | `remainingNum` | `sisa`, `rest` | Deskriptif, menunjukkan porsi yang belum diproses |

### B. Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Ambil Depan → Lempar Sisa)
const totalDigitRekursif = (num) => {
  // [BAGIAN 1] → Konversi tipe data agar bisa dipotong

  // [BAGIAN 2] → Base Case: cek apakah sudah single digit

  // [BAGIAN 3] → Ambil 1 digit paling depan

  // [BAGIAN 4] → Potong sisa digit, lempar ke fungsi rekursif

  // [BAGIAN 5] → Return penjumlahan digit + hasil rekursif
};
```

> [!NOTE]
> Blueprint ini sengaja **belum berisi logika** — hanya menandai peran setiap bagian. Implementasi lengkap step-by-step ada di [Solusi Bertahap](02-solusi-bertahap.md).

---

⬅️ [README](../README.md) · ➡️ [Solusi Bertahap](02-solusi-bertahap.md)
