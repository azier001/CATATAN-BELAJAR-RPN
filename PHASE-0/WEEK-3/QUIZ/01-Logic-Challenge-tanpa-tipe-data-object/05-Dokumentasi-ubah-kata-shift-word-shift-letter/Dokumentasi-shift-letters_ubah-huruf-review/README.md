# 🔤 Challenge: ubahHuruf — Geser Setiap Huruf ke Huruf Berikutnya

### ✨ _Dari satu challenge sederhana, lahir 4 versi solusi dan pemahaman mendalam tentang manipulasi string di JavaScript._

> 🎯 **Tujuan:** Mendokumentasikan proses belajar mengerjakan challenge `ubahHuruf` — mulai dari analisis pola, solusi bertahap, evolusi kode, hingga best practice naming — secara lengkap dan terstruktur.

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧩 | [Tentang Challenge](#tentang-challenge) | Apa yang diminta soal dan contoh input/output |
| 🧠 | [Mental Model](#mental-model) | Ringkasan logika inti sebelum menulis kode |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + tabel penamaan variabel rekomendasi |
| 💻 | [Ringkasan 4 Versi Solusi](#ringkasan-versi) | Kode final semua versi dalam satu pandangan |
| ⚖️ | [Tabel Perbandingan Versi](#perbandingan) | Kapan pakai versi mana? |
| 📂 | [Navigasi Dokumentasi Detail](#navigasi) | Link ke file-file detail per fase |
| ⚠️ | [Gotchas & Peringatan](#gotchas) | Jebakan umum yang harus diwaspadai |

---

<a name="tentang-challenge"></a>
## 🧩 Tentang Challenge

```
📝 Nama Fungsi  :  ubahHuruf(kata)  →  shiftLetters(word)
🎯 Tugas        :  Geser setiap huruf dalam string ke huruf BERIKUTNYA di alfabet
🔄 Edge Case    :  Huruf 'z' kembali ke 'a' (wrap-around)
```

**Contoh:**

| Input | Output | Penjelasan |
|-------|--------|------------|
| `'wow'` | `'xpx'` | w→x, o→p, w→x |
| `'hello'` | `'ifmmp'` | h→i, e→f, l→m, l→m, o→p |
| `'buzz'` | `'cvaa'` | b→c, u→v, z→a, z→a |

> [!NOTE]
> 💡 Challenge ini merupakan implementasi sederhana dari **Caesar Cipher** dengan pergeseran 1 langkah ke kanan.

---

<a name="mental-model"></a>
## 🧠 Mental Model — Logika Inti

Sebelum menulis satu baris kode pun, kita membangun pemahaman lewat 5 langkah logis:

| # | Langkah | Penjelasan | Analogi |
|---|---------|------------|---------|
| 1 | Siapkan kamus | Buat string `'abcdefghijklmnopqrstuvwxyz'` sebagai referensi | 📖 Seperti kamus yang kita buka saat mencari arti kata |
| 2 | Loop setiap huruf | Telusuri karakter input satu per satu | 🔍 Memeriksa surat satu halaman per halaman |
| 3 | Cari posisi | Temukan indeks huruf saat ini di kamus | 📌 Menandai halaman yang ditemukan |
| 4 | Geser +1 | Ambil huruf di posisi berikutnya | 👉 Buka halaman berikutnya |
| 5 | Handle `z` | Jika sudah di halaman terakhir, kembali ke halaman pertama | 🔄 Buku ini melingkar! |

> [!IMPORTANT]
> 🔔 **Urutan berpikir ini WAJIB dikuasai dulu** sebelum menulis kode. Jika tabel di atas sudah dipahami, kode hanyalah "terjemahan" dari logika ini.

---

<a name="blueprint"></a>
## 🗺️ Blueprint & Kamus Variabel

### Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|----------------|-------------------|--------|
| Nama fungsi | `shiftLetters` | `ubahHuruf` | English naming = standar industri |
| Parameter input | `word` | `kata`, `str` | Jelas bahwa input adalah sebuah kata |
| Referensi abjad | `alphabet` | `abc`, `huruf` | Spesifik merepresentasikan deret abjad |
| Penampung hasil | `result` | `string`, `res` | `string` = nama tipe data, membingungkan! |
| Posisi indeks | `position` | `p`, `idx` | Intuitif, hindari singkatan samar |
| Karakter iterasi | `char` | `c`, `x` | Sudah konvensi umum untuk karakter tunggal |

> [!WARNING]
> 🐛 **Jangan pernah** gunakan `string` sebagai nama variabel! Ini adalah nama tipe data bawaan JavaScript — akan menimbulkan kebingungan saat code review.

### Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Kamus Alfabet + Geser Posisi)

const shiftLetters = (word) => {
  const alphabet = '...';                    // [KAMUS] referensi abjad lengkap
  let result = '';                           // [KANVAS] penampung hasil akhir

  for (const char of word) {                 // [LOOP] telusuri tiap karakter
    const position = alphabet.indexOf(char); //   [CARI] posisi di kamus
    if (char === 'z') {                      //   [EDGE CASE] huruf terakhir?
      result += 'a';                         //     → kembali ke awal
    } else {
      result += alphabet[position + 1];      //     → geser 1 langkah
    }
  }

  return result;                             // [OUTPUT] kembalikan hasil
};
```

---

<a name="ringkasan-versi"></a>
## 💻 Ringkasan 4 Versi Solusi

### V1 — Imperatif (`for...of` + `if/else`)
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

### V2 — Deklaratif (`.split().map().join()`)
```javascript
const shiftLettersV2 = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return word
    .split('')
    .map((char) => {
      const position = alphabet.indexOf(char);
      if (char === 'z') return 'a';
      return alphabet[position + 1];
    })
    .join('');
};
```

### V3 — Deklaratif + Ternary (One-liner map)
```javascript
const shiftLettersV3 = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return word
    .split('')
    .map(char => char === 'z' ? 'a' : alphabet[alphabet.indexOf(char) + 1])
    .join('');
};
```

### V4 — Regex + ASCII (Tanpa kamus alfabet)
```javascript
const shiftLettersV4 = (word) => {
  return word.replace(/[a-z]/gi, char => {
    return char.toLowerCase() === 'z'
      ? 'a'
      : String.fromCharCode(char.charCodeAt(0) + 1);
  });
};
```

---

<a name="perbandingan"></a>
## ⚖️ Tabel Perbandingan Versi

| Aspek | V1 🟢 | V2 🔵 | V3 🟡 | V4 🔴 |
|-------|:------:|:------:|:------:|:------:|
| **Paradigma** | Imperatif | Deklaratif | Deklaratif | Regex + ASCII |
| **Readability** | ⭐⭐⭐ Tinggi | ⭐⭐ Sedang | ⭐ Rendah | ⭐ Rendah |
| **Ringkas** | ❌ Panjang | 🟡 Sedang | ✅ Ringkas | ✅ Ringkas |
| **Butuh kamus?** | Ya | Ya | Ya | ❌ Tidak |
| **Handle non-huruf?** | ❌ Tidak | ❌ Tidak | ❌ Tidak | ✅ Ya (regex) |
| **Cocok untuk** | Belajar & pemula | Tim & code review | Code golf | Produksi & robustness |

> [!TIP]
> 🏆 **Rekomendasi:**
> - **Belajar?** Mulai dari V1, lalu pahami V2.
> - **Kerja tim?** Gunakan V2 — keseimbangan antara ringkas dan terbaca.
> - **Produksi?** V4 paling robust karena otomatis mengabaikan karakter non-huruf.

---

<a name="navigasi"></a>
## 📂 Navigasi Dokumentasi Detail

Dokumentasi lengkap dipecah per topik untuk kemudahan belajar:

| No | File | Konten |
|----|------|--------|
| 📖 | `docs/01-analisis-dan-solusi-awal.md` | Visualisasi pola + algoritma tahan lupa + pendekatan bertahap (V1) |
| 🔄 | `docs/02-evolusi-dan-clean-code.md` | Evolusi ke V2 + naming convention + kode final |
| 🚀 | `docs/03-insight-advanced.md` | V3 Ternary + V4 Regex/ASCII + visualisasi alur + gotchas |

---

<a name="gotchas"></a>
## ⚠️ Gotchas & Peringatan

> [!CAUTION]
> 🔴 **Edge Case Kritis:** Huruf `'z'` HARUS di-handle secara eksplisit!
> Jika tidak, `alphabet[26]` akan mengembalikan `undefined`, dan hasilnya menjadi `'undefinedundefined...'`.

> [!WARNING]
> 🐛 **Jangan lupa `return`!** Pada V1, tanpa `return result` di akhir fungsi, output akan `undefined` meskipun logika sudah benar.

> [!WARNING]
> 🐛 **`string` bukan nama variabel yang baik!** Ini nama tipe data bawaan JavaScript. Gunakan `result` atau `output` sebagai penampung.

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **26 Mei 2026** berdasarkan sesi mentoring langsung di **Google Antigravity** menggunakan JavaScript (Node.js). Challenge ini merupakan latihan dasar manipulasi string yang sangat cocok untuk memahami konsep indexing, looping, dan edge case handling.
