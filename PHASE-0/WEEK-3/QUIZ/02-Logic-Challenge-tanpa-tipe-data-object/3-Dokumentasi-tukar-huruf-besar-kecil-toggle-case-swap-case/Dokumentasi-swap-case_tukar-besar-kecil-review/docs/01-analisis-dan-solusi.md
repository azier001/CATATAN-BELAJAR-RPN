# 🔍 01 — Analisis Logika & Solusi Bertahap

### ✨ _Membedah logika Tukar Besar Kecil dan membangun solusi dari nol_

> 🎯 **Cakupan:** File ini membahas **Pilar 1–4** dari 7 Pilar Kualitas Dokumentasi — mulai dari visualisasi pola, kamus variabel, blueprint kode, hingga solusi step-by-step yang berjalan 100%.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 👁️ | [Visualisasi & Analisis Pola](#visualisasi) | Tabel breakdown karakter + 3 aturan logika (Pilar 1) |
| 🧮 | [Simulasi Karakter per Karakter](#simulasi) | Trace manual proses swap pada test case |
| 📖 | [Kamus Variabel](#kamus-variabel) | Rekomendasi penamaan per peran (Pilar 3a) |
| 🏗️ | [Blueprint Kode](#blueprint) | Kerangka kosong sebelum kode final (Pilar 3b) |
| 🛠️ | [Solusi Bertahap](#solusi-bertahap) | Membangun kode step-by-step (Pilar 2 & 4) |
| ⚠️ | [Gotcha](#gotcha) | Jebakan: kenapa non-alfabet tidak error? (Pilar 7) |

---

<a name="visualisasi"></a>

## 👁️ Visualisasi & Analisis Pola (Pilar 1)

> ⚠️ **DILARANG menulis kode di tahap ini!** Fase ini murni analisis logika.

Berangkat dari test case yang ada, kita pecah setiap karakter untuk menemukan **pola**:

### Breakdown Karakter: `"Hello World"`

| Posisi | Karakter | Jenis | Aksi | Hasil |
|:------:|:--------:|-------|------|:-----:|
| 1 | `H` | Huruf Besar | Ubah → kecil | `h` |
| 2 | `e` | Huruf Kecil | Ubah → besar | `E` |
| 3 | `l` | Huruf Kecil | Ubah → besar | `L` |
| 4 | `l` | Huruf Kecil | Ubah → besar | `L` |
| 5 | `o` | Huruf Kecil | Ubah → besar | `O` |
| 6 | ` ` | Spasi (bukan huruf) | Biarkan tetap | ` ` |
| 7 | `W` | Huruf Besar | Ubah → kecil | `w` |
| 8 | `o` | Huruf Kecil | Ubah → besar | `O` |
| 9 | `r` | Huruf Kecil | Ubah → besar | `R` |
| 10 | `l` | Huruf Kecil | Ubah → besar | `L` |
| 11 | `d` | Huruf Kecil | Ubah → besar | `D` |

**Hasil akhir:** `"hELLO wORLD"` ✅

### 3 Aturan Logika (Ditemukan dari Pola)

Dari tabel breakdown di atas, kita simpulkan **3 aturan** yang berlaku universal:

```
┌─────────────────────────────────────────────────┐
│  ATURAN LOGIKA SWAP CASE                        │
├─────────────────────────────────────────────────┤
│                                                 │
│  1️⃣  Huruf BESAR  →  ubah jadi huruf KECIL     │
│      Contoh: 'H' → 'h', 'W' → 'w'             │
│                                                 │
│  2️⃣  Huruf KECIL  →  ubah jadi huruf BESAR     │
│      Contoh: 'e' → 'E', 'o' → 'O'             │
│                                                 │
│  3️⃣  BUKAN huruf  →  biarkan APA ADANYA        │
│      Contoh: ' ' → ' ', '!' → '!', '3' → '3'  │
│                                                 │
└─────────────────────────────────────────────────┘
```

> [!NOTE]
> 📝 **Proses penemuan aturan ini berasal dari diskusi Socratic:**
> - **AI bertanya:** *"Apa aturan main dari challenge ini? Bagaimana jika karakternya bukan huruf?"*
> - **User menjawab:** (1) Besar → kecil, (2) Kecil → besar, (3) Selain itu → tidak usah ubah.
> - Jawaban ini langsung tepat 100%! 🎯

---

<a name="simulasi"></a>

## 🧮 Simulasi Karakter per Karakter

Mari kita trace secara manual bagaimana proses swap bekerja untuk test case `"001-A-3-5TrdYW"`:

```
Karakter: '0' → Bukan huruf → Tetap '0'      → wadah: "0"
Karakter: '0' → Bukan huruf → Tetap '0'      → wadah: "00"
Karakter: '1' → Bukan huruf → Tetap '1'      → wadah: "001"
Karakter: '-' → Bukan huruf → Tetap '-'      → wadah: "001-"
Karakter: 'A' → Huruf BESAR → Jadi  'a'      → wadah: "001-a"
Karakter: '-' → Bukan huruf → Tetap '-'      → wadah: "001-a-"
Karakter: '3' → Bukan huruf → Tetap '3'      → wadah: "001-a-3"
Karakter: '-' → Bukan huruf → Tetap '-'      → wadah: "001-a-3-"
Karakter: '5' → Bukan huruf → Tetap '5'      → wadah: "001-a-3-5"
Karakter: 'T' → Huruf BESAR → Jadi  't'      → wadah: "001-a-3-5t"
Karakter: 'r' → Huruf kecil → Jadi  'R'      → wadah: "001-a-3-5tR"
Karakter: 'd' → Huruf kecil → Jadi  'D'      → wadah: "001-a-3-5tRD"
Karakter: 'Y' → Huruf BESAR → Jadi  'y'      → wadah: "001-a-3-5tRDy"
Karakter: 'W' → Huruf BESAR → Jadi  'w'      → wadah: "001-a-3-5tRDyw"
```

**Hasil akhir:** `"001-a-3-5tRDyw"` ✅ — cocok dengan expected output!

---

<a name="kamus-variabel"></a>

## 📖 Kamus Variabel (Pilar 3a)

Sebelum menulis kode, tentukan nama variabel yang tepat agar kode langsung *self-explanatory*:

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|----------------|-------------------|--------|
| Parameter input | `text` atau `kalimat` | `str`, `s` | Lebih mewakili nilai teks yang masuk |
| Satuan karakter (iterasi) | `char` | `i`, `huruf` | Universal — mencakup angka & simbol, bukan cuma huruf |
| Penampung hasil akhir | `swappedString` | `res`, `result` | `result` terlalu umum. `swappedString` menjelaskan "string yang sudah ditukar" secara spesifik |

> [!TIP]
> 💡 **Kapan boleh pakai `i`?** Hanya saat variabel adalah **index angka** dalam loop numerik (`for (let i = 0; ...)`). Kalau isi variabelnya **bukan angka**, jangan pakai `i`!

---

<a name="blueprint"></a>

## 🏗️ Blueprint Kode (Pilar 3b)

Kerangka kosong dengan komentar peran — belum ada logika, hanya *mental model* struktur:

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Loop → Cek → Swap → Gabung)

const tukarBesarKecil = (text) => {       // Parameter: teks input
  let swappedString = '';                  // [PENAMPUNG AKHIR] (❌ jangan 'result')

  for (const char of text) {              // [LOOP UTAMA] → ekstrak tiap karakter
    // [LOGIKA KONDISI] → cek besar/kecil, lalu swap
    //   Jika huruf kecil → jadikan besar, tambahkan ke wadah
    //   Jika huruf besar → jadikan kecil, tambahkan ke wadah
  }

  return swappedString;                   // [KEMBALIKAN HASIL]
};
```

> [!NOTE]
> 📝 **Struktur ini sederhana:** Hanya 1 loop utama tanpa nested loop. Setiap karakter langsung dicek dan di-swap dalam satu kali iterasi.

---

<a name="solusi-bertahap"></a>

## 🛠️ Solusi Bertahap / Step-by-Step (Pilar 2 & 4)

### 🌐 Step 1 — Membuat Kerangka + Loop Karakter

**Tujuan:** Pastikan kita bisa mengakses setiap karakter satu per satu.

```javascript
const tukarBesarKecil = (kalimat) => {
  let result = '';

  for (const char of kalimat) {
    console.log(char);  // 👈 Uji coba: cetak semua karakter
  }
};
```

> **Hasil uji:** Setiap karakter berhasil dicetak satu per satu. Kerangka dasar sudah jalan! ✅

---

### 🌐 Step 2 — Menyuntikkan Logika Kondisi (Algoritma Tahan Lupa)

**Tujuan:** Ganti `console.log(char)` dengan blok `if/else` yang benar-benar melakukan swap.

> [!TIP]
> 💡 **Trik Deteksi Huruf Besar vs Kecil di JavaScript:**
>
> Kita **tidak perlu** hardcode `'A'`-`'Z'` atau `'a'`-`'z'`. Cukup bandingkan karakter dengan versi `toLowerCase()` atau `toUpperCase()` miliknya:
> - `char === char.toLowerCase()` → `true` berarti huruf **kecil** (atau non-alfabet)
> - `char !== char.toLowerCase()` → `true` berarti huruf **besar**

Berikut solusi lengkap yang berjalan 100%:

```javascript
const tukarBesarKecil = (kalimat) => {
  let result = '';

  for (const char of kalimat) {
    // 1️⃣ Cek: apakah karakter ini huruf KECIL (atau non-alfabet)?
    if (char === char.toLowerCase()) {
      result += char.toUpperCase();   // Ya → ubah jadi BESAR
    }
    // 2️⃣ Jika bukan, berarti huruf BESAR
    else {
      result += char.toLowerCase();   // Ya → ubah jadi KECIL
    }
  }

  return result;
};
```

**Penjelasan setiap bagian (Algoritma Tahan Lupa — Pilar 2):**

1. **Siapkan Wadah `[LET RESULT]`**: `let result = ''` — string kosong sebagai penampung karakter yang sudah di-swap. *(Kenapa string kosong? Karena kita akan menambahkan karakter satu per satu dengan `+=`.)*

2. **Ekstrak Karakter `[FOR...OF LOOP]`**: Iterasi `char` dari `text` satu per satu. *(Kenapa `for...of`? Karena langsung memberikan nilai karakter, bukan index angka.)*

3. **Deteksi & Swap `[IF/ELSE]`**: Bandingkan `char` dengan `char.toLowerCase()`.
   - **Jika sama** → karakter itu huruf kecil (atau non-alfabet) → ubah ke besar dengan `.toUpperCase()`.
   - **Jika beda** → karakter itu huruf besar → ubah ke kecil dengan `.toLowerCase()`.
   - *(Contoh konkret: karakter `'e'` → `'e' === 'e'.toLowerCase()` → `true` → `'e'.toUpperCase()` → `'E'` ✅)*
   - *(Contoh konkret: karakter `'H'` → `'H' === 'h'` → `false` → masuk `else` → `'H'.toLowerCase()` → `'h'` ✅)*

4. **Kembalikan Hasil `[RETURN]`**: Setelah semua karakter diproses, kembalikan `result` yang sudah berisi string baru.

---

<a name="gotcha"></a>

## ⚠️ Gotcha: Kenapa Non-Alfabet Tidak Error? (Pilar 7)

> [!WARNING]
> ⚠️ **Jebakan Umum:** "Bukankah kita perlu `else if` khusus untuk angka dan simbol agar tidak error?"
>
> **Jawaban: TIDAK PERLU!** 🙅

Simulasi jika karakternya `'!'`:

```
1. Masuk pengecekan: if ('!' === '!'.toLowerCase())
2. '!'.toLowerCase() hasilnya → '!'
3. Kondisi: '!' === '!' → TRUE ✅
4. Masuk blok if: result += '!'.toUpperCase()
5. '!'.toUpperCase() hasilnya → '!'
6. Karakter '!' ditambahkan apa adanya ke result
```

> [!IMPORTANT]
> 🔔 **Key Takeaway:**
> Di JavaScript, `.toLowerCase()` dan `.toUpperCase()` pada karakter **non-alfabet** (spasi, angka, simbol) selalu **mengembalikan karakter aslinya** tanpa error. Jadi aturan ke-3 ("bukan huruf → biarkan tetap") **otomatis terpenuhi** tanpa perlu pengecekan tambahan!

---

### 🧭 Navigasi Materi
- ⬅️ **Sebelumnya:** [README Utama](../README.md)
- ➡️ **Selanjutnya:** [02 — Evolusi & Clean Code](02-evolusi-dan-clean-code.md)
