# 🔢 Compare Numbers — Bandingkan Angka

### ✨ _Membedah logika perbandingan angka dari nol hingga one-liner — melalui 5 fase mentoring terstruktur_

> 🎯 **Tujuan:** Memahami cara membandingkan dua angka menggunakan JavaScript dengan **4 versi evolusi solusi**, mulai dari `if-else` eksplisit hingga **boolean evaluation** tingkat lanjut — disertai proses berpikir step-by-step.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Soal & Spesifikasi](#soal-spesifikasi) | Deskripsi challenge & test cases |
| 🔍 | [Visualisasi & Analisis](#visualisasi-analisis) | Tabel breakdown 3 skenario logika |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint-kamus-variabel) | Kerangka kode + rekomendasi naming |
| 🧱 | [Pendekatan Bertahap](#pendekatan-bertahap) | Proses membangun solusi step-by-step |
| 🚀 | [Evolusi Solusi](#evolusi-solusi) | 4 versi dari eksplisit → ultimate one-liner |
| 🏷️ | [Naming Convention](#naming-convention) | Tabel ❌ vs ✅ penamaan variabel |
| ⚠️ | [Gotchas & Peringatan](#gotchas-peringatan) | Jebakan umum yang harus dihindari |
| 📎 | [File Terkait](#file-terkait) | Link ke dokumentasi pelengkap |

---

<a name="soal-spesifikasi"></a>

## 📋 Soal & Spesifikasi

### Deskripsi Challenge

Buat function `bandingkanAngka(angka1, angka2)` yang menerima **dua parameter angka** dan mengembalikan:

| Kondisi | Return Value |
|---------|:------------:|
| `angka2` **lebih besar** dari `angka1` | `true` |
| `angka2` **lebih kecil** dari `angka1` | `false` |
| Kedua angka **bernilai sama** | `-1` |

### Test Cases

```javascript
console.log(bandingkanAngka(5, 8));   // true
console.log(bandingkanAngka(5, 3));   // false
console.log(bandingkanAngka(4, 4));   // -1
console.log(bandingkanAngka(3, 3));   // -1
console.log(bandingkanAngka(17, 2));  // false
```

---

<a name="visualisasi-analisis"></a>

## 🔍 Pilar 1 — Visualisasi & Analisis Pola

> [!NOTE]
> 💡 Sebelum menulis kode apapun, kita harus **memetakan semua skenario** yang mungkin terjadi dari input yang diberikan.

Dari test cases, kita bisa memetakan **3 skenario utama** yang menentukan output:

| angka1 | angka2 | Relasi | Skenario | Output |
|:------:|:------:|--------|----------|:------:|
| 5 | 8 | `angka2 > angka1` | angka2 lebih besar | `true` |
| 5 | 3 | `angka1 > angka2` | angka1 lebih besar | `false` |
| 4 | 4 | `angka1 === angka2` | Keduanya sama | `-1` |
| 3 | 3 | `angka1 === angka2` | Keduanya sama | `-1` |
| 17 | 2 | `angka1 > angka2` | angka1 lebih besar | `false` |

### 🧠 Logika Inti yang Ditemukan

Challenge ini murni tentang **pengkondisian (Control Flow)** — tidak ada rumus matematika. Cukup **3 cabang logika**:

```
┌──────────────────────────────────┐
│         INPUT: angka1, angka2    │
└──────────────┬───────────────────┘
               ▼
        ┌──────────────┐
        │ angka2 >     │──── YA ──→ return true
        │ angka1 ?     │
        └──────┬───────┘
               │ TIDAK
               ▼
        ┌──────────────┐
        │ angka1 ===   │──── YA ──→ return -1
        │ angka2 ?     │
        └──────┬───────┘
               │ TIDAK
               ▼
         return false
```

---

<a name="blueprint-kamus-variabel"></a>

## 🗺️ Pilar 3 — Blueprint & Kamus Variabel

### A. Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|----------------|-------------------|--------|
| Parameter 1 (angka pertama) | `angka1`, `num1` | `a`, `x` | Menjelaskan tipe data & urutan |
| Parameter 2 (angka kedua) | `angka2`, `num2` | `b`, `y` | Menghindari nama 1 huruf yang abstrak |

> [!TIP]
> 💡 Soal asli sudah memberikan nama `angka1` dan `angka2` yang cukup deskriptif. Dalam bahasa Inggris, padanan yang tepat adalah `num1` dan `num2`.

### B. Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: 3 Cabang Pengkondisian)

const bandingkanAngka = (angka1, angka2) => {
  // [GUARD CLAUSE] → tangani edge case (angka sama) terlebih dahulu
  if (angka1 === angka2) return ___

  // [DEFAULT RETURN] → evaluasi perbandingan sisa
  return ___
};
```

---

<a name="pendekatan-bertahap"></a>

## 🧱 Pilar 4 — Pendekatan Bertahap (Step-by-Step)

> [!IMPORTANT]
> 🔔 Solusi dibangun **bertahap**, bukan langsung full code. Proses ini mencerminkan cara berpikir saat sesi mentoring berlangsung.

### Step 1 — Kondisi Pertama: `angka2 > angka1`

Mulai dari skenario paling utama sesuai deskripsi soal:

```javascript
const bandingkanAngka = (angka1, angka2) => {
  if (angka2 > angka1) {
    return true;
  }
};
```

*(Kenapa mulai dari sini: Deskripsi soal menyebutkan kondisi ini pertama kali. Selalu ikuti urutan requirement.)*

---

### Step 2 — Tambahkan Kondisi Kedua: `angka1 === angka2`

Sambung dengan `else if` untuk menangani kasus angka sama:

```javascript
const bandingkanAngka = (angka1, angka2) => {
  if (angka2 > angka1) {
    return true;
  } else if (angka1 === angka2) {
    return -1;
  }
};
```

*(Kenapa `===` dan bukan `==`: Strict equality memastikan pencocokan **nilai DAN tipe data**. Contoh: `4 === 4` → `true`, tapi `4 == "4"` juga `true` — kita tidak mau itu.)*

---

### Step 3 — Tangani Sisa: Default Return `false`

Alih-alih `else { return false; }`, gunakan **Early Return pattern**:

```javascript
const bandingkanAngka = (angka1, angka2) => {
  if (angka2 > angka1) {
    return true;
  } else if (angka1 === angka2) {
    return -1;
  }

  return false;
};
```

*(Kenapa tidak pakai `else`: Jika 2 kondisi di atas sudah di-cek dan tidak terpenuhi, sudah pasti angka2 lebih kecil. `return false` di akhir berfungsi sebagai **fallback/default** — lebih bersih tanpa indentasi tambahan.)*

---

<a name="evolusi-solusi"></a>

## 🚀 Pilar 5 — Evolusi Solusi (4 Versi)

### Versi 1 — If-Else + Early Return *(Fondasi)*

```javascript
const bandingkanAngka = (angka1, angka2) => {
  if (angka2 > angka1) {
    return true;
  } else if (angka1 === angka2) {
    return -1;
  }

  return false;
};
```

> 📌 **Mental Model:** "Cek satu per satu, sisanya jadi default."

---

### Versi 2 — Nested Ternary *(Ringkas)*

```javascript
const bandingkanAngka = (angka1, angka2) =>
  angka2 > angka1 ? true : angka1 === angka2 ? -1 : false;
```

> 📌 **Mental Model:** "Semuanya dalam satu baris pertanyaan berantai."

---

### Versi 3 — Boolean Evaluation *(Ultimate One-Liner)* 🏆

```javascript
const bandingkanAngka = (num1, num2) => num1 === num2 ? -1 : num1 < num2;
```

> 📌 **Mental Model:** "Tangani edge case dulu (`===`), sisanya biarkan JavaScript mengevaluasi boolean secara otomatis."

**Kenapa ini jenius?** Ekspresi `num1 < num2` **secara alami** menghasilkan `true` atau `false` — tidak perlu menuliskan `? true : false` secara eksplisit!

> **Contoh angka konkret:**
> - `bandingkanAngka(5, 8)` → `5 === 8`? Tidak → evaluasi `5 < 8` → `true` ✅
> - `bandingkanAngka(17, 2)` → `17 === 2`? Tidak → evaluasi `17 < 2` → `false` ✅
> - `bandingkanAngka(4, 4)` → `4 === 4`? Ya → `-1` ✅

---

### Versi 4 — Guard Clause + Boolean Eval *(Best Practice)* ⭐

```javascript
const bandingkanAngka = (num1, num2) => {
  if (num1 === num2) return -1

  return num1 < num2
}
```

> 📌 **Mental Model:** "Tangani kasus khusus di awal (*guard clause*), lalu biarkan ekspresi boolean menyelesaikan sisanya."

> [!TIP]
> 🏆 **Kenapa ini Best Practice?** Versi ini menggabungkan:
> - **Readability** dari Versi 1 (mudah dibaca baris per baris)
> - **Kecerdasan logika** dari Versi 3 (boolean evaluation)
> - **Clean code** tanpa `else` yang tidak perlu

---

### Tabel Perbandingan Evolusi

| Aspek | V1 If-Else | V2 Ternary | V3 One-Liner 🏆 | V4 Guard Clause ⭐ |
|-------|:----------:|:----------:|:---------------:|:-----------------:|
| Jumlah Baris | 7 | 1 | 1 | 4 |
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Brevity | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Maintainability | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Cocok Untuk | Belajar | Code Golf | Menunjukkan skill | Production Code |

---

<a name="naming-convention"></a>

## 🏷️ Pilar 6 — Naming Convention

| Variabel (Peran) | ❌ Kurang Jelas | ✅ Lebih Baik (ID) | ✅ Standar Global (EN) | Alasan |
|---|---|---|---|---|
| Angka pembanding 1 | `a`, `x` | `angka1`, `nilaiPertama` | `num1`, `firstNumber` | Menjelaskan tipe data & urutan |
| Angka pembanding 2 | `b`, `y` | `angka2`, `nilaiKedua` | `num2`, `secondNumber` | Menghindari nama 1 huruf yang abstrak |

> [!NOTE]
> 💡 **Kapan boleh pakai nama pendek?** Untuk function utilitas matematika sederhana seperti `(a, b) => a + b`, nama pendek masih bisa diterima karena konteksnya sudah sangat jelas. Tapi untuk logika dengan **lebih dari 2 cabang kondisi**, selalu gunakan nama deskriptif.

---

<a name="gotchas-peringatan"></a>

## ⚠️ Pilar 7 — Gotchas & Peringatan

> [!CAUTION]
> 🔴 **`==` vs `===` untuk Pengecekan Kesamaan**
>
> Selalu gunakan `===` (strict equality), bukan `==` (loose equality).
> ```javascript
> // ❌ BAHAYA — loose equality
> 4 == "4"   // true (JavaScript mengkonversi tipe!)
>
> // ✅ AMAN — strict equality
> 4 === "4"  // false (tipe berbeda = tidak sama)
> ```

> [!WARNING]
> 🐛 **Jangan tulis `? true : false` jika ekspresi sudah menghasilkan boolean!**
>
> ```javascript
> // ❌ REDUNDAN — ternary yang tidak perlu
> return num1 < num2 ? true : false;
>
> // ✅ CUKUP — ekspresi perbandingan sudah menghasilkan boolean
> return num1 < num2;
> ```
> Operasi perbandingan (`<`, `>`, `<=`, `>=`) **selalu** mengembalikan `true` atau `false`.

> [!WARNING]
> 🐛 **Hati-hati dengan urutan pengecekan!**
>
> Pastikan kasus **kesamaan** (`===`) dicek **sebelum** perbandingan besar/kecil jika menggunakan pendekatan Versi 3/4. Jika tidak, kasus `angka1 === angka2` bisa terlewat dan menghasilkan `true`/`false` alih-alih `-1`.

---

<a name="file-terkait"></a>

## 📎 File Terkait

| File | Deskripsi |
|------|-----------|
| [Dokumentasi-Function-bandingkanAngka.md](./Dokumentasi-Function-bandingkanAngka.md) | Panduan lengkap untuk pemula — penjelasan baris per baris, cara kerja tiap alternatif, tips & best practices |

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **17 Mei 2026** berdasarkan sesi mentoring challenge `bandingkanAngka` menggunakan metode 5 Fase Mentoring Terstruktur. Fokus utama: **proses berpikir bertahap** dan **evolusi solusi** dari if-else eksplisit hingga boolean evaluation one-liner.

*Dibuat dengan ❤️ untuk pembelajaran pribadi*
