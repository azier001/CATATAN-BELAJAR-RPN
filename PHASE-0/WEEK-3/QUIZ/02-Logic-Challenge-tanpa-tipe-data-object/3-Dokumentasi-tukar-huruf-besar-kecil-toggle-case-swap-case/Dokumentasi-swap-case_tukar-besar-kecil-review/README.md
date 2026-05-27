# 🔄 Challenge: Tukar Besar Kecil (Swap Case)

### ✨ _Dari "Hello World" jadi "hELLO wORLD" — memahami logika swap case dari nol hingga clean code_

> 🎯 **Tujuan:** Memahami secara mendalam bagaimana menukar setiap huruf besar menjadi kecil dan sebaliknya dalam JavaScript — mulai dari analisis logika, solusi bertahap, evolusi kode, hingga standar penamaan industri.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧩 | [Tentang Challenge](#tentang-challenge) | Apa yang diminta dan contoh input/output |
| 🧠 | [Ringkasan Aturan Logika](#ringkasan-logika) | 3 aturan inti yang menggerakkan seluruh solusi |
| 🗺️ | [Peta Pembelajaran](#peta-pembelajaran) | Visualisasi alur 4 fase mentoring |
| 📊 | [Ringkasan Semua Versi Solusi](#ringkasan-solusi) | Perbandingan 3 versi kode dalam 1 tabel |
| 🏆 | [Kode Final (Best Practice)](#kode-final) | Versi production-ready dengan JSDoc |
| 📂 | [Dokumentasi Detail](#dokumentasi-detail) | Link ke sub-dokumen per fase |
| 💡 | [Insight Kunci](#insight-kunci) | Gotcha dan pelajaran penting dari sesi ini |

---

<a name="tentang-challenge"></a>

## 🧩 Tentang Challenge

**Nama:** Tukar Besar Kecil (Swap Case)

**Deskripsi:** Buatlah fungsi yang menerima sebuah string, lalu **menukar** setiap huruf besar menjadi kecil dan huruf kecil menjadi besar. Karakter non-huruf (angka, spasi, simbol) **tetap apa adanya**.

### Test Cases

```
Input:  "Hello World"        → Output: "hELLO wORLD"
Input:  "My Name is Bond!!"  → Output: "mY nAME IS bOND!!"
Input:  "001-A-3-5TrdYW"     → Output: "001-a-3-5tRDyw"
```

> [!TIP]
> 💡 **Analogi Mudah Dipahami**
>
> | | Huruf Besar | Huruf Kecil | Simbol & Angka |
> |---|---|---|---|
> | 📝 Sebelum | `H` (berdiri tegak) | `e` (duduk santai) | `!` (penonton) |
> | 🔄 Sesudah | `h` (disuruh duduk) | `E` (disuruh berdiri) | `!` (tetap menonton) |
>
> Bayangkan setiap karakter sedang di kelas senam — huruf besar disuruh **duduk**, huruf kecil disuruh **berdiri**, dan simbol/angka cuma jadi **penonton** yang tidak ikut senam!

---

<a name="ringkasan-logika"></a>

## 🧠 Ringkasan Aturan Logika

Setiap karakter dalam string dicek **satu per satu** mengikuti 3 aturan ini:

```
┌─────────────────────────────────────────────────┐
│  ATURAN LOGIKA SWAP CASE                        │
├─────────────────────────────────────────────────┤
│                                                 │
│  1️⃣  Huruf BESAR  →  ubah jadi huruf KECIL     │
│      Contoh: 'H' → 'h'                         │
│                                                 │
│  2️⃣  Huruf KECIL  →  ubah jadi huruf BESAR     │
│      Contoh: 'e' → 'E'                         │
│                                                 │
│  3️⃣  BUKAN huruf  →  biarkan APA ADANYA        │
│      Contoh: '!' → '!'  ,  '3' → '3'           │
│                                                 │
└─────────────────────────────────────────────────┘
```

> [!IMPORTANT]
> 🔔 **Tidak perlu pengecekan khusus untuk aturan ke-3!** Di JavaScript, memanggil `.toLowerCase()` atau `.toUpperCase()` pada karakter non-alfabet akan **mengembalikan karakter aslinya** — jadi aturan ke-3 otomatis terpenuhi.

---

<a name="peta-pembelajaran"></a>

## 🗺️ Peta Pembelajaran

Dokumentasi ini mengikuti alur **4 Fase Mentoring** yang terstruktur:

```
📍 PETA PEMBELAJARAN — Tukar Besar Kecil
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔵 FASE 1: Visualisasi & Analisis Logika
│  └── Menemukan 3 aturan inti dari test case
│
🔵 FASE 2: Solusi Pertama (Bertahap)
│  └── Step 1: kerangka → Step 2: logika kondisi → ✅ berjalan!
│
🔵 FASE 3: Evolusi Solusi (Refactoring)
│  └── Versi Imperative → Versi Declarative → perbandingan
│
🔵 FASE 4: Clean Code & Naming Convention
   └── Review variabel → JSDoc → versi production-ready
```

---

<a name="ringkasan-solusi"></a>

## 📊 Ringkasan Semua Versi Solusi

| Aspek | V1 — Imperative 🟢 | V2 — Declarative 🔵 | V3 — Regex ⚡ |
|-------|:---:|:---:|:---:|
| **Pendekatan** | `for...of` + `if/else` | `.split().map().join()` | `.replace()` + regex |
| **Jumlah Baris** | ~8 baris | ~5 baris | ~3 baris |
| **Readability** | ⭐⭐⭐⭐⭐ Sangat jelas | ⭐⭐⭐⭐ Jelas (perlu tahu method) | ⭐⭐⭐ Perlu tahu regex |
| **Cocok Untuk** | Pemula total | Sudah familiar array methods | Sudah paham regex |
| **Variabel Temp** | ✅ Ada (`result`) | ❌ Tidak perlu | ❌ Tidak perlu |
| **Performa** | 🟢 Baik | 🟢 Baik | 🟢 Sedikit lebih optimal |

---

<a name="kode-final"></a>

## 🏆 Kode Final (Best Practice)

Versi **production-ready** dengan penamaan deskriptif dan dokumentasi JSDoc:

```javascript
/**
 * Menukar huruf besar menjadi kecil dan sebaliknya.
 * Karakter non-alfabet akan dibiarkan aslinya.
 *
 * @param {string} text - Kalimat input
 * @returns {string} Kalimat dengan huruf yang sudah ditukar
 */
const tukarBesarKecil = (text) => {
  return text
    .split('')
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
};
```

---

<a name="dokumentasi-detail"></a>

## 📂 Dokumentasi Detail

Penjelasan mendalam setiap fase tersedia di subfolder `docs/`:

| File | Konten |
|------|--------|
| 📄 [01-analisis-dan-solusi.md](docs/01-analisis-dan-solusi.md) | Visualisasi pola, blueprint kode, kamus variabel, dan solusi bertahap (step-by-step) |
| 📄 [02-evolusi-dan-clean-code.md](docs/02-evolusi-dan-clean-code.md) | Evolusi 3 versi solusi, perbandingan, naming convention, dan gotchas |

---

<a name="insight-kunci"></a>

## 💡 Insight Kunci

> [!WARNING]
> ⚠️ **Gotcha #1: Non-alfabet "Ikut Diproses" Tapi Tidak Berubah**
>
> Karakter seperti `'!'`, `' '`, `'3'` tetap masuk ke blok `if/else`, tapi karena `.toLowerCase()` dan `.toUpperCase()` pada non-alfabet mengembalikan karakter aslinya — hasilnya **terlihat tidak berubah**. Ini bukan bug, ini fitur JavaScript!

> [!NOTE]
> 📝 **Insight: Trik Deteksi Huruf Besar vs Kecil**
>
> Kita tidak perlu hardcode `'A'-'Z'` atau `'a'-'z'`. Cukup bandingkan:
> ```javascript
> char === char.toUpperCase()  // true → huruf besar (atau non-alfabet!)
> char === char.toLowerCase()  // true → huruf kecil (atau non-alfabet!)
> ```
> Karena non-alfabet lolos di **kedua** pengecekan, mereka otomatis "aman" di cabang manapun.

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **28 Mei 2026** berdasarkan sesi mentoring challenge JavaScript "Tukar Besar Kecil" di **Windows**. Disusun mengikuti framework **7 Pilar Kualitas Dokumentasi** dari workflow `/mentor-challenge`.
