# 🔄 Fase 3–4: Evolusi Solusi & Clean Code

### ✨ _Solusi yang bekerja itu bagus — tapi solusi yang bersih, ringkas, dan terbaca itu profesional._

> 🎯 **Cakupan:** Dokumen ini membahas proses **refactoring ke pendekatan deklaratif** (Fase 3) dan **merapikan penamaan variabel** (Fase 4) untuk challenge `ubahHuruf` / `shiftLetters`.

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔵 | [Fase 3: Evolusi Solusi](#fase-3) | Dari imperatif ke deklaratif — kenapa & bagaimana |
| 🏭 | [Analogi: Pabrik vs Ban Berjalan](#analogi) | Mental model perbedaan kedua paradigma |
| 🔗 | [Method Chaining Explained](#chaining) | Penjelasan `.split().map().join()` kata per kata |
| 💻 | [Kode V2 — Deklaratif](#kode-v2) | Solusi lengkap versi kedua |
| ⚖️ | [Perbandingan V1 vs V2](#perbandingan) | Tabel perbedaan mental model & kode |
| 🟢 | [Fase 4: Clean Code & Naming](#fase-4) | Review & perbaikan nama variabel |
| 📋 | [Tabel Naming Convention](#naming-table) | Perbandingan ❌ vs ✅ |
| 🌐 | [Kode Final (English Naming)](#kode-final) | Versi 1 & 2 dengan penamaan standar industri |

---

<a name="fase-3"></a>
## 🔵 Fase 3: Evolusi Solusi

> [!NOTE]
> 💡 **Pertanyaan pemantik Fase ini:**
> *"Solusi V1 sudah bekerja. Tapi, apakah ada cara yang lebih ringkas — tanpa perlu variabel penampung `let result = ''`?"*

### Ide Inti: Ubah Alur Data

Pada V1 (imperatif), kita bekerja **manual** — siapkan wadah kosong, proses satu-satu, masukkan ke wadah. Pada V2 (deklaratif), kita mengubah **alur data** agar mengalir otomatis:

```
String  →  Pecah jadi Array  →  Transformasi tiap elemen  →  Gabung kembali jadi String
```

Ini dicapai dengan **3 method bawaan JavaScript** yang dirangkai (*method chaining*):

| # | Method | Fungsi | Contoh |
|---|--------|--------|--------|
| 1 | `.split('')` | Memecah string menjadi array karakter | `'wow'` → `['w', 'o', 'w']` |
| 2 | `.map(fn)` | Mengubah setiap elemen array dengan fungsi | `['w','o','w']` → `['x','p','x']` |
| 3 | `.join('')` | Menggabungkan array kembali menjadi string | `['x', 'p', 'x']` → `'xpx'` |

---

<a name="analogi"></a>
## 🏭 Analogi: Dua Cara Merakit

> [!TIP]
> 💡 **Analogi Mudah Dipahami:**
>
> | | V1 — Imperatif 🔧 | V2 — Deklaratif 🏭 |
> |---|---|---|
> | 📝 | Pekerja manual: ambil bahan, proses, taruh di rak satu-satu | Ban berjalan pabrik: bahan masuk, mesin memproses otomatis, keluar jadi produk |
> | 🧠 | Kamu mengatur **setiap langkah** secara eksplisit | Kamu mendeskripsikan **apa yang mau terjadi**, biarkan method yang bekerja |
> | 📦 | Butuh wadah kosong (`let result = ''`) | Tidak butuh — data mengalir langsung |

---

<a name="chaining"></a>
## 🔗 Method Chaining — Penjelasan Kata per Kata

```javascript
return kata
  .split('')                    // 1️⃣ Pecah string → array
  .map((char) => {              // 2️⃣ Proses tiap karakter
    const position = alfabet.indexOf(char);
    if (char === 'z') return 'a';
    return alfabet[position + 1];
  })
  .join('');                    // 3️⃣ Gabung array → string
```

> 📖 **Penjelasan kata per kata:**
>
> | Bagian | Arti |
> |--------|------|
> | `.split('')` | Pecah string dengan pemisah kosong = setiap karakter jadi 1 elemen array |
> | `.map((char) => { ... })` | Jalankan fungsi untuk **setiap** elemen — `char` adalah karakter saat ini |
> | `alfabet.indexOf(char)` | Cari posisi `char` di kamus alfabet (sama seperti V1) |
> | `if (char === 'z') return 'a'` | Edge case — langsung kembalikan `'a'` tanpa cari posisi |
> | `return alfabet[position + 1]` | Kembalikan huruf berikutnya (logika inti sama seperti V1) |
> | `.join('')` | Gabungkan semua elemen array tanpa pemisah → string utuh |

> [!IMPORTANT]
> 🔔 **Di dalam `.map()`, setiap iterasi WAJIB me-`return` sesuatu!**
> Jika lupa `return`, elemen array akan menjadi `undefined` dan hasilnya `'undefinedundefinedundefined'`.

---

<a name="kode-v2"></a>
## 💻 Kode V2 — Deklaratif (Functional)

```javascript
const ubahHuruf = (kata) => {
  const alfabet = 'abcdefghijklmnopqrstuvwxyz';

  return kata
    .split('')
    .map((char) => {
      const position = alfabet.indexOf(char);

      // Logika pergeseran (sama persis dengan V1)
      if (char === 'z') {
        char = 'a';
      } else {
        char = alfabet[position + 1];
      }

      return char; // Wajib me-return karakter yang sudah diubah
    })
    .join(''); // Gabungkan kembali array → string
};
```

> [!TIP]
> 💡 **Trik di V2:** Kita memanfaatkan parameter `char` sebagai variabel sementara — dimodifikasi langsung di dalam `if/else`, lalu di-`return`. Ini menghindari kebutuhan membuat variabel baru.

---

<a name="perbandingan"></a>
## ⚖️ Perbandingan V1 vs V2

| Aspek | V1 — Imperatif 🟢 | V2 — Deklaratif 🔵 |
|-------|:------------------:|:-------------------:|
| **Loop** | `for...of` (manual) | `.map()` (built-in) |
| **Penampung** | ✅ Butuh `let result = ''` | ❌ Tidak perlu |
| **Cara gabung** | `result += ...` (konkatenasi) | `.join('')` (sekali panggil) |
| **Return** | Di akhir fungsi | Langsung di-chain |
| **Readability** | ⭐⭐⭐ Sangat jelas | ⭐⭐ Perlu paham array methods |
| **Gaya** | Step-by-step eksplisit | Data-flow / pipeline |

> [!TIP]
> 🏆 **Kapan pakai yang mana?**
> - **V1** → saat belajar, debugging, atau bekerja dengan pemula
> - **V2** → saat kerja tim, code review, atau ingin kode lebih ringkas

---

<a name="fase-4"></a>
## 🟢 Fase 4: Clean Code & Naming Convention

> [!NOTE]
> 💡 **Pertanyaan pemantik Fase ini:**
> *"Solusi kita sudah bekerja. Tapi coba lihat variabel `string` — menurutmu nama yang lebih jelas apa?"*

### Masalah yang Ditemukan

Dari review kode V1, ditemukan **satu naming yang bermasalah**:

```javascript
let string = '';  // ❌ Nama variabel ini BERMASALAH!
```

**Kenapa bermasalah?**

1. **Membingungkan** — `string` adalah nama tipe data bawaan JavaScript. Pembaca bisa mengira ini merujuk ke tipe `String`, padahal ini variabel buatan kita.
2. **Tidak deskriptif** — Nama `string` hanya menjelaskan *tipe data*-nya, bukan *tujuan*-nya. Apakah ini input? Output? Data sementara?

---

<a name="naming-table"></a>
## 📋 Tabel Naming Convention

| Variabel (Peran) | ❌ Kurang Tepat | ✅ Rekomendasi | Alasan |
|:-----------------|:----------------|:---------------|:-------|
| Penampung akhir | `string`, `res` | `result` atau `hasil` | Jelas menggambarkan ini adalah penampung hasil akhir |
| Referensi abjad | `abc`, `huruf` | `alfabet` / `alphabet` | Spesifik merepresentasikan isi variabel: deret abjad |
| Posisi indeks | `p`, `idx` | `position` / `index` | Hindari singkatan samar — `position` langsung intuitif |
| Nama fungsi | `ubahHuruf` | `shiftLetters` | English naming = standar industri & open source |
| Parameter input | `kata` | `word` | Konsisten dengan English naming |

> [!IMPORTANT]
> 🔔 **Prinsip Naming:**
> Nama variabel yang baik bertindak seperti **dokumentasi mini**. Ketika membaca `shiftLetters(word)`, orang langsung paham fungsinya — tanpa perlu membaca seluruh logika di dalam.

### Kapan `i` Boleh Dipakai?

Tidak semua singkatan itu buruk. Berikut panduannya:

| Konteks | Nama Pendek | Boleh? | Alasan |
|---------|:-----------:|:------:|--------|
| Loop counter angka | `i`, `j` | ✅ | Sudah konvensi universal |
| Karakter tunggal | `char` | ✅ | Konvensi umum untuk karakter |
| Penampung hasil | `s`, `r` | ❌ | Terlalu samar — pakai `result` |
| Fungsi bisnis | `fn`, `cb` | ❌ | Pakai nama deskriptif |

---

<a name="kode-final"></a>
## 🌐 Kode Final — English Naming Applied

Konversi lengkap dari Bahasa Indonesia ke English:

```
ubahHuruf  →  shiftLetters    ("shift" = menggeser)
kata       →  word
alfabet    →  alphabet
string     →  result          (fix naming issue!)
```

### V1 Final — Imperatif

```javascript
const shiftLettersV1 = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (const char of word) {
    const position = alphabet.indexOf(char);

    if (char === 'z') {
      result += 'a';
    } else {
      result += alphabet[position + 1];
    }
  }

  return result;
};
```

### V2 Final — Deklaratif

```javascript
const shiftLettersV2 = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return word
    .split('')
    .map((char) => {
      const position = alphabet.indexOf(char);

      if (char === 'z') {
        return 'a';
      } else {
        return alphabet[position + 1];
      }
    })
    .join('');
};
```

> [!TIP]
> 💡 **Perhatikan perbedaan V2 Final vs V2 sebelumnya:**
> Di versi final, kita tidak lagi memodifikasi parameter `char` — melainkan langsung `return` nilai yang tepat di dalam `if/else`. Ini lebih bersih dan menghindari *side effect* pada parameter.

---

## ⚠️ Gotchas Fase Ini

> [!WARNING]
> 🐛 **`.map()` tanpa `return` = array penuh `undefined`!**
> Berbeda dengan `for...of` yang menggunakan `+=` ke variabel luar, `.map()` **membutuhkan return value** di setiap iterasi. Lupa `return` = hasil rusak.

> [!CAUTION]
> 🔴 **Jangan gunakan nama tipe data sebagai nama variabel!**
> `string`, `number`, `array`, `object` — semua ini adalah nama tipe data bawaan. Meskipun JavaScript tidak akan error, ini membuat kode **sangat membingungkan** saat dibaca orang lain.

---

> 📝 **Navigasi:**
> - ⬅️ Kembali ke [01-analisis-dan-solusi-awal.md](./01-analisis-dan-solusi-awal.md)
> - ➡️ Lanjut ke [03-insight-advanced.md](./03-insight-advanced.md)
> - 🏠 Kembali ke [README.md](../README.md)
