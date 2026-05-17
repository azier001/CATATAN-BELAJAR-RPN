# ⏱️ Convert Minutes — Konversi Menit

### ✨ _Membedah logika konversi waktu dari total menit ke format jam:menit — melalui 5 fase mentoring terstruktur_

> 🎯 **Tujuan:** Memahami cara mengkonversi total menit menjadi format string `jam:menit` menggunakan JavaScript dengan **3 versi evolusi solusi**, mulai dari `if` statement hingga **`.padStart()` one-liner** — disertai proses berpikir step-by-step.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Soal & Spesifikasi](#soal-spesifikasi) | Deskripsi challenge & test cases |
| 🔍 | [Visualisasi & Analisis](#visualisasi-analisis) | Tabel breakdown proses konversi menit ke jam |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint-kamus-variabel) | Kerangka kode + rekomendasi naming |
| 🧱 | [Pendekatan Bertahap](#pendekatan-bertahap) | Proses membangun solusi step-by-step |
| 🚀 | [Evolusi Solusi](#evolusi-solusi) | 3 versi dari if statement → padStart() |
| 🏷️ | [Naming Convention](#naming-convention) | Tabel ❌ vs ✅ penamaan variabel |
| ⚠️ | [Gotchas & Peringatan](#gotchas-peringatan) | Jebakan umum yang harus dihindari |
| 📎 | [File Terkait](#file-terkait) | Link ke dokumentasi pelengkap |

---

<a name="soal-spesifikasi"></a>

## 📋 Soal & Spesifikasi

### Deskripsi Challenge

Buat function `konversiMenit(menit)` yang menerima **satu parameter angka** (total menit) dan me-return **string format `jam:menit`**.

| Input | Output |
|-------|--------|
| `63` | `"1:03"` |
| `124` | `"2:04"` |
| `53` | `"0:53"` |
| `88` | `"1:28"` |
| `120` | `"2:00"` |

### Test Cases

```javascript
console.log(konversiMenit(63));   // 1:03
console.log(konversiMenit(124));  // 2:04
console.log(konversiMenit(53));   // 0:53
console.log(konversiMenit(88));   // 1:28
console.log(konversiMenit(120));  // 2:00
```

---

<a name="visualisasi-analisis"></a>

## 🔍 Pilar 1 — Visualisasi & Analisis Pola

> [!NOTE]
> 💡 Sebelum menulis kode apapun, kita harus **memetakan proses konversi** secara visual agar menemukan rumus matematikanya.

### Konsep Dasar: 1 Jam = 60 Menit

Konversi menit ke jam selalu berkaitan dengan angka **60** — karena 1 jam terdiri dari 60 menit.

```
63 menit = 1 jam + 3 menit
           ↓          ↓
      (63 / 60)   (63 % 60)
```

### Tabel Breakdown Proses Konversi

| Input (menit) | `menit / 60` | `Math.floor(...)` → Jam | `menit % 60` → Sisa Menit | Perlu Padding `0`? | Output |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 63 | 1.05 | **1** | **3** | ✅ (3 < 10) | `"1:03"` |
| 124 | 2.067 | **2** | **4** | ✅ (4 < 10) | `"2:04"` |
| 53 | 0.883 | **0** | **53** | ❌ (53 ≥ 10) | `"0:53"` |
| 88 | 1.467 | **1** | **28** | ❌ (28 ≥ 10) | `"1:28"` |
| 120 | 2.0 | **2** | **0** | ✅ (0 < 10) | `"2:00"` |

### 🧠 Logika Inti yang Ditemukan

1. **Mencari Jam:** `Math.floor(menit / 60)` — bagi total menit dengan 60, bulatkan ke bawah. *(Kenapa `Math.floor`? Karena `63 / 60 = 1.05`, kita hanya butuh bagian bulatnya yaitu `1` jam.)*
2. **Mencari Sisa Menit:** `menit % 60` — operator modulus menghasilkan sisa bagi. *(Kenapa modulus? Karena `63 % 60 = 3`, artinya setelah diambil 1 jam penuh, tersisa 3 menit.)*
3. **Padding Angka Nol:** Jika sisa menit di bawah 10, tambahkan `"0"` di depannya. *(Kenapa? Agar format konsisten — `"1:3"` menjadi `"1:03"`.)*

---

<a name="blueprint-kamus-variabel"></a>

## 🗺️ Pilar 3 — Blueprint & Kamus Variabel

### A. Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|----------------|-------------------|--------|
| Menyimpan hasil pembagian jam | `jam` / `hours` | `j`, `h`, `x` | Langsung menjelaskan bahwa isinya adalah perhitungan jam |
| Menyimpan sisa menit | `sisaMenit` / `remainingMinutes` | `m`, `sisa`, `y` | Kata `sisa` saja ambigu (sisa apa?). `sisaMenit` sangat spesifik |
| Parameter input | `menit` / `minutes` | `m`, `n`, `x` | Nama asli dari soal; deskriptif |

> [!TIP]
> 💡 Nama `sisa` terlalu generik. `sisaMenit` memberi tahu pembaca **sisa dari apa** tanpa harus membaca seluruh fungsi.

### B. Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Bagi total menit → format string)

const konversiMenit = (menit) => {
  const jam = ...;                            // [HITUNG JAM] → pembagian bulat ke bawah
  let sisaMenit = ...;                        // [HITUNG SISA] → sisa bagi (modulus)

  if (sisaMenit < 10) {                       // [CEK PADDING] → perlu tambah '0' di depan?
    sisaMenit = ...;                          //   [PADDING] → tambahkan '0'
  }

  return `${jam}:${sisaMenit}`;               // [GABUNG] → format "jam:menit"
};
```

---

<a name="pendekatan-bertahap"></a>

## 🧱 Pilar 4 — Pendekatan Bertahap (Step-by-Step)

> [!IMPORTANT]
> 🔔 Solusi dibangun **bertahap**, bukan langsung full code. Proses ini mencerminkan cara berpikir saat sesi mentoring berlangsung.

### Step 1 — Hitung Jam Saja Dulu

Fokus hanya pada **menghitung jam** tanpa memikirkan sisa menit atau formatting:

```javascript
const konversiMenit = (menit) => {
  const jam = Math.floor(menit / 60);

  return jam;
};

console.log(konversiMenit(63));  // 1
console.log(konversiMenit(124)); // 2
```

*(Kenapa mulai dari sini: Pastikan dulu operasi `Math.floor(menit / 60)` menghasilkan angka jam yang benar sebelum menambah kompleksitas. Ini adalah kebiasaan **incremental development** yang sangat disarankan.)*

---

### Step 2 — Tambahkan Sisa Menit + Format String

Tambahkan variabel `sisaMenit` dan gabungkan dengan template literal:

```javascript
const konversiMenit = (menit) => {
  const jam = Math.floor(menit / 60);
  const sisaMenit = menit % 60;

  return `${jam}:${sisaMenit}`;
};

console.log(konversiMenit(63));  // "1:3"  ← Hampir benar! Tapi kurang '0'
console.log(konversiMenit(120)); // "2:0"  ← Sama, harusnya "2:00"
```

*(Kenapa template literal: Dibanding concatenation `jam + ":" + sisaMenit`, template literal `` `${jam}:${sisaMenit}` `` lebih modern dan mudah dibaca.)*

---

### Step 3 — Tambahkan Logika Padding '0' ✅

Sisipkan kondisi `if` untuk menangani angka di bawah 10:

```javascript
const konversiMenit = (menit) => {
  const jam = Math.floor(menit / 60);
  let sisaMenit = menit % 60;       // ← Gunakan 'let' agar bisa ditimpa

  if (sisaMenit < 10) {
    sisaMenit = `0${sisaMenit}`;     // ← Tambahkan '0' di depan
  }

  return `${jam}:${sisaMenit}`;
};
```

*(Kenapa `let` bukan `const`: Karena kita perlu mengubah nilai `sisaMenit` dari angka `3` menjadi string `"03"` di dalam blok `if`.)*

---

### Step 4 — Verifikasi dengan Semua Test Cases ✅

```javascript
console.log(konversiMenit(63));   // "1:03" ✅
console.log(konversiMenit(124));  // "2:04" ✅
console.log(konversiMenit(53));   // "0:53" ✅
console.log(konversiMenit(88));   // "1:28" ✅
console.log(konversiMenit(120));  // "2:00" ✅
```

---

<a name="evolusi-solusi"></a>

## 🚀 Pilar 5 — Evolusi Solusi (3 Versi)

### Versi 1 — If Statement *(Fondasi Logika)*

```javascript
const konversiMenit = (menit) => {
  const jam = Math.floor(menit / 60);
  let sisaMenit = menit % 60;

  if (sisaMenit < 10) {
    sisaMenit = `0${sisaMenit}`;
  }

  return `${jam}:${sisaMenit}`;
};
```

> 📌 **Mental Model:** "Hitung jam dan sisa menit. Jika sisa menit hanya 1 digit, tambahkan '0' di depan. Gabungkan keduanya."

---

### Versi 2 — Ternary Operator *(Ringkas & Umum)*

```javascript
const konversiMenit = (menit) => {
  const jam = Math.floor(menit / 60);
  let sisaMenit = menit % 60;

  sisaMenit = sisaMenit < 10 ? `0${sisaMenit}` : sisaMenit;

  return `${jam}:${sisaMenit}`;
};
```

> 📌 **Mental Model:** "Sama seperti Versi 1, tapi `if-else` diringkas jadi satu baris menggunakan operator `? :`."

**Pola ternary:** `kondisi ? nilaiJikaTrue : nilaiJikaFalse`

---

### Versi 3 — padStart() *(Modern Built-in)* 🏆

```javascript
const konversiMenit = (menit) => {
  const jam = Math.floor(menit / 60);
  const sisaMenit = menit % 60;

  return `${jam}:${String(sisaMenit).padStart(2, '0')}`;
};
```

> 📌 **Mental Model:** "Ubah sisa menit jadi string, lalu minta JavaScript **otomatis** menambahkan '0' di depan sampai panjangnya minimal 2 karakter."

**Kenapa `padStart(2, '0')` lebih unggul?**
- Tidak perlu `if` atau ternary — **satu method** menangani semua kasus
- Bisa dipakai `const` (tidak perlu `let`) karena nilai tidak ditimpa
- Intention sangat jelas: "pad (tambah padding) di start (awal) sampai panjang 2 dengan karakter '0'"

```javascript
// Contoh perilaku padStart:
String(3).padStart(2, '0')   // "03"  ← panjang 1, kurang 1, ditambah '0'
String(28).padStart(2, '0')  // "28"  ← panjang sudah 2, tidak berubah
String(0).padStart(2, '0')   // "00"  ← panjang 1, kurang 1, ditambah '0'
```

---

### Tabel Perbandingan Evolusi

| Aspek | V1 If Statement | V2 Ternary | V3 padStart() 🏆 |
|-------|:----------:|:---------------------:|:------------:|
| Jumlah Baris | 7 | 5 | 4 |
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Perlu `let`? | ✅ Ya | ✅ Ya | ❌ Tidak |
| Scalable (3+ digit) | ❌ Manual | ❌ Manual | ✅ Otomatis |
| Cocok Untuk | Belajar logika if | Production (umum) | Production (modern) |

> [!TIP]
> 🏆 **Rekomendasi:**
> - **Untuk belajar:** Versi 1 — melatih logika kondisional `if`
> - **Untuk production:** Versi 3 — ringkas, deklaratif, dan scalable

---

### Versi Bahasa Inggris (Best Practice Profesional)

```javascript
// Versi menggunakan padStart() — English naming
const convertMinutes = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}:${String(remainingMinutes).padStart(2, '0')}`;
};
```

> [!NOTE]
> 💡 Dalam dunia kerja profesional, penamaan variabel menggunakan **Bahasa Inggris** adalah standar internasional agar *developer* dari negara manapun bisa memahami kode kita.

---

<a name="naming-convention"></a>

## 🏷️ Pilar 6 — Naming Convention

| Variabel (Peran) | ❌ Kurang Jelas | ✅ Rekomendasi (ID) | ✅ Rekomendasi (EN) | Alasan |
|---|---|---|---|---|
| Menyimpan nilai jam | `j`, `h`, `x` | `jam` | `hours` | Langsung menjelaskan bahwa isinya perhitungan jam |
| Menyimpan sisa menit | `m`, `sisa`, `y` | `sisaMenit` | `remainingMinutes` | `sisa` ambigu — `sisaMenit` menjelaskan "sisa dari apa" |
| Parameter input | `m`, `n`, `x` | `menit` | `minutes` | Deskriptif dan sesuai konteks soal |

> [!NOTE]
> 💡 **Kapan boleh pakai nama singkat?** Untuk iterator loop (`i`, `j`, `k`) dalam loop numerik sederhana. Tapi untuk variabel yang menyimpan **data bermakna**, selalu gunakan nama deskriptif.

---

<a name="gotchas-peringatan"></a>

## ⚠️ Pilar 7 — Gotchas & Peringatan

> [!CAUTION]
> 🔴 **`/` (division) menghasilkan desimal — WAJIB bulatkan!**
>
> ```javascript
> // ❌ SALAH — tanpa Math.floor, hasilnya desimal
> 63 / 60          // 1.05  → output: "1.05:3"
>
> // ✅ BENAR — Math.floor membulatkan ke bawah
> Math.floor(63 / 60)  // 1   → output: "1:03"
> ```

> [!WARNING]
> 🐛 **Jangan gunakan `Math.round()` — hasilnya bisa salah!**
>
> ```javascript
> // ❌ SALAH — Math.round membulatkan ke terdekat
> Math.round(89 / 60)  // 1.483 → dibulatkan jadi 1  (kebetulan benar)
> Math.round(150 / 60) // 2.5   → dibulatkan jadi 3  (SALAH! harusnya 2)
>
> // ✅ BENAR — Math.floor SELALU bulatkan ke bawah
> Math.floor(150 / 60) // 2.5   → 2  (BENAR!)
> ```

> [!WARNING]
> 🐛 **`padStart()` hanya bekerja pada STRING, bukan number!**
>
> ```javascript
> // ❌ ERROR — number tidak punya method padStart
> (3).padStart(2, '0')          // TypeError!
>
> // ✅ BENAR — konversi ke string dulu
> String(3).padStart(2, '0')    // "03"
> ```

> [!WARNING]
> 🐛 **Jangan lupa mengubah `const` ke `let` di Versi 1 & 2!**
>
> ```javascript
> // ❌ ERROR — const tidak bisa di-reassign
> const sisaMenit = menit % 60;
> sisaMenit = `0${sisaMenit}`;   // TypeError: Assignment to constant variable
>
> // ✅ BENAR — let memungkinkan reassignment
> let sisaMenit = menit % 60;
> sisaMenit = `0${sisaMenit}`;   // OK!
> ```
> 📌 Tips: Di Versi 3 (padStart), kita **tidak perlu `let`** karena nilai variabel tidak pernah ditimpa.

---

<a name="file-terkait"></a>

## 📎 File Terkait

| File | Deskripsi |
|------|-----------|
| [Dokumentasi-Fungsi-Konversi-Menit-ke-Jam.md](./Dokumentasi-Fungsi-Konversi-Menit-ke-Jam.md) | Panduan lengkap untuk pemula — penjelasan Math.floor, modulus, template literal, ternary, dan debugging |

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **17 Mei 2026** berdasarkan sesi mentoring challenge `konversiMenit` menggunakan metode 5 Fase Mentoring Terstruktur. Fokus utama: **proses berpikir bertahap** dari `if` statement → ternary operator → `padStart()`, serta pemahaman mendalam terhadap `Math.floor()`, operator modulus `%`, dan string padding.

*Dibuat dengan ❤️ untuk pembelajaran pribadi*
