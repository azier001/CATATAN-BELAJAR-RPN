# 🔨 Solusi Bertahap

### ✨ _Membangun kode rekursif V1 selangkah demi selangkah, bukan langsung jadi_

> 🎯 **Tujuan:** Mengimplementasikan rumus mental dari [Analisis & Visualisasi](01-analisis-dan-visualisasi.md) menjadi kode JavaScript yang berjalan — dibangun dalam 2 tahap logis, disertai penalaran **"Kenapa"** di setiap baris dan simulasi eksekusi Call Stack.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧱 | [Step 1: Base Case](#step-1) | Konversi tipe data & kondisi berhenti |
| ⚡ | [Step 2: Recursive Case](#step-2) | Menambahkan logika rekursif → kode berjalan |
| 🧠 | [Penalaran Baris per Baris](#penalaran) | Chain of Thought — "Kenapa" setiap baris ditulis |
| 📊 | [Simulasi Call Stack](#simulasi) | Visualisasi eksekusi `totalDigitRekursif(512)` |

---

<a name="step-1"></a>

## 🧱 Step 1 — Penyiapan Tipe Data & Base Case

Langkah paling pertama: **amankan fondasi** sebelum menulis logika apapun. Tanpa base case, program akan *infinite loop*.

```javascript
const totalDigitRekursif = (angka) => {
  // 1. Ubah angka jadi String agar bisa dipotong-potong
  const strAngka = String(angka);

  // 2. Base Case: jika hanya tersisa 1 digit, langsung kembalikan
  if (strAngka.length === 1) return Number(strAngka);
};
```

**Kenapa langkah ini duluan?**
- Base case adalah **rem darurat** rekursi. Memastikannya bekerja lebih dulu memberi kita jaminan bahwa kode tidak akan crash saat kita mulai menambah logika rekursif di step berikutnya.

**Contoh konkret:**
- Input `7` → `String(7)` = `"7"` → `.length === 1` ✅ → return `Number("7")` = `7`
- Input `42` → `String(42)` = `"42"` → `.length === 1`? ❌ → belum ada logika lanjutan (undefined)

> [!NOTE]
> Perhatikan bahwa di tahap ini, fungsi **hanya bisa menangani single digit**. Input multi-digit seperti `42` atau `1542` akan mengembalikan `undefined` karena recursive case belum ditulis. Ini normal — kita bangun bertahap.

---

<a name="step-2"></a>

## ⚡ Step 2 — Implementasi Recursive Case (Kode Lengkap)

Setelah base case terjamin, kita tambahkan logika sesuai rumus mental: **Ambil Digit Depan + Fungsi(Sisa Digit)**.

```javascript
const totalDigitRekursif = (angka) => {
  const strAngka = String(angka);

  // Base Case
  if (strAngka.length === 1) return Number(strAngka);

  // Ambil 1 karakter pertama (depan), kembalikan ke Number
  const digitDepan = Number(strAngka[0]);

  // Potong sisa string dari index ke-1 sampai habis, kembalikan ke Number
  const sisaDigit = Number(strAngka.slice(1));

  // Return: digit depan + hasil rekursif dari sisa
  return digitDepan + totalDigitRekursif(sisaDigit);
};
```

**Contoh konkret (input `42`):**
- `strAngka` = `"42"` → `.length === 1`? ❌ → lanjut ke recursive case
- `digitDepan` = `Number("4")` = `4`
- `sisaDigit` = `Number("2")` = `2`
- Return: `4 + totalDigitRekursif(2)` → `4 + 2` = **`6`** ✅

> [!IMPORTANT]
> Perhatikan pola **bertahap**: Step 1 hanya menangani single digit, Step 2 menambahkan kemampuan memproses multi digit. Kita tidak pernah menulis kode "langsung jadi" — setiap tahap bisa diuji secara independen.

---

<a name="penalaran"></a>

## 🧠 Penalaran Baris per Baris

### Kenapa `String(angka)` dilakukan di awal?

Agar kita bisa memanfaatkan kekuatan tipe String: `.length` untuk cek panjang, `[0]` untuk ambil digit, dan `.slice()` untuk memotong. Tipe Number tidak memiliki fitur-fitur ini.

### Kenapa `Number(strAngka)` di base case?

Soal meminta **penjumlahan angka** (aritmatika), bukan penggabungan teks. Jika kita return string, operator `+` akan melakukan *concatenation*:
- ❌ `"5" + "1"` = `"51"` (gabung teks)
- ✅ `5 + 1` = `6` (penjumlahan)

### Kenapa `length === 1` menjadi base case?

Rekursif bertugas memecah angka menjadi digit satuan. Jika string hanya tersisa 1 karakter (misal `"2"`), angka tersebut sudah merupakan pecahan **terkecil** — tidak bisa dan tidak perlu dipecah lagi.

### Kenapa `[0]` dan `.slice(1)` di recursive case?

- `strAngka[0]` → mengambil persis **1 digit terdepan** untuk ditambahkan
- `strAngka.slice(1)` → mengambil **seluruh sisa** mulai indeks ke-1 sampai habis, lalu dilempar kembali sebagai parameter recursive call

> [!WARNING]
> **Gotcha konversi tipe data:** Fungsi ini melakukan konversi **bolak-balik** di setiap iterasi — `Number → String → Number`. Ini bekerja dengan benar, namun membebani performa karena CPU harus melakukan casting berulang di setiap lapisan Call Stack. Solusi yang lebih efisien dibahas di [Evolusi & Perbandingan](03-evolusi-dan-perbandingan.md).

---

<a name="simulasi"></a>

## 📊 Simulasi Call Stack — `totalDigitRekursif(512)`

### Fase Membuka Stack (Atas → Bawah)

```
totalDigitRekursif(512)
 ├── digitDepan = 5, sisaDigit = 12
 └── return 5 + totalDigitRekursif(12)
                 │
                 ├── digitDepan = 1, sisaDigit = 2
                 └── return 1 + totalDigitRekursif(2)
                                 │
                                 └── 🛑 Base Case! length === 1
                                     return 2
```

### Fase Menutup Stack (Bawah → Atas)

```
1. totalDigitRekursif(2)   → return 2           🛑 Base Case
2. totalDigitRekursif(12)  → return 1 + 2 = 3   🔄 Recursive
3. totalDigitRekursif(512) → return 5 + 3 = 8   🔄 Recursive

📌 Hasil Akhir = 8 ✅
```

> [!TIP]
> Call Stack bekerja seperti tumpukan piring — yang terakhir ditaruh, yang pertama diangkat (*LIFO: Last In, First Out*). Rekursi **membuka** tumpukan saat memanggil diri sendiri, lalu **menutup** tumpukan saat base case tercapai dan jawaban dilempar mundur ke pemanggil sebelumnya.

---

⬅️ [Analisis & Visualisasi](01-analisis-dan-visualisasi.md) · ➡️ [Evolusi & Perbandingan](03-evolusi-dan-perbandingan.md)
