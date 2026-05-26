# 📖 Fase 1–2: Analisis Pola & Solusi Pertama

### ✨ _Memahami masalah secara visual, menemukan rumus logika, lalu menerjemahkannya menjadi kode — selangkah demi selangkah._

> 🎯 **Cakupan:** Dokumen ini membahas proses **berpikir sebelum coding** (Fase 1) dan **membangun solusi pertama secara bertahap** (Fase 2) untuk challenge `ubahHuruf` / `shiftLetters`.

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔍 | [Fase 1: Visualisasi & Analisis](#fase-1) | Membedah pola input→output tanpa menulis kode |
| 📐 | [Tabel Breakdown Pola](#breakdown) | Visualisasi pergeseran huruf per karakter |
| 🧠 | [Algoritma Tahan Lupa](#algoritma) | 5 langkah logika dengan penjelasan "Kenapa" + contoh angka |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode kosong + tabel penamaan |
| 🔵 | [Fase 2: Solusi Bertahap](#fase-2) | Membangun V1 step-by-step |
| ⚠️ | [Gotchas Fase Ini](#gotchas) | Jebakan yang ditemukan selama proses |

---

<a name="fase-1"></a>
## 🔍 Fase 1: Visualisasi & Analisis Pola

> [!NOTE]
> 💡 **Prinsip utama Fase 1:** Kita **DILARANG menulis kode**. Fase ini murni memahami masalah dan menemukan rumus logikanya terlebih dahulu.

### Apa yang Diminta Challenge?

```
📝 Input   :  Sebuah string (kata)
🎯 Proses  :  Setiap huruf digeser ke huruf BERIKUTNYA di alfabet
📤 Output  :  String baru dengan semua huruf sudah bergeser

Contoh: 'wow' → 'xpx'
```

### Observasi Awal

Dari test case `'wow'` → `'xpx'`, kita mengamati:
- Huruf `w` berubah menjadi `x` (huruf setelah w)
- Huruf `o` berubah menjadi `p` (huruf setelah o)
- Setiap huruf bergeser **tepat 1 posisi** ke kanan di alfabet

> [!IMPORTANT]
> 🔔 **Pertanyaan kritis:** Bagaimana jika hurufnya `z`? Tidak ada huruf setelah `z`!
> Jawaban: `z` harus kembali ke `a` — seperti jam yang kembali ke angka 1 setelah 12.

---

<a name="breakdown"></a>
## 📐 Tabel Breakdown Pola

### Test Case: `'wow'`

| Karakter | Posisi di Alfabet | Posisi + 1 | Hasil |
|:--------:|:-----------------:|:----------:|:-----:|
| `w` | 22 | 23 | `x` |
| `o` | 14 | 15 | `p` |
| `w` | 22 | 23 | `x` |

**Output:** `'xpx'` ✅

### Test Case: `'buzz'` (mengandung edge case `z`)

| Karakter | Posisi di Alfabet | Posisi + 1 | Hasil | Catatan |
|:--------:|:-----------------:|:----------:|:-----:|---------|
| `b` | 1 | 2 | `c` | Normal |
| `u` | 20 | 21 | `v` | Normal |
| `z` | 25 | 26 ❌ | `a` | ⚠️ Wrap-around! Indeks 26 tidak ada |
| `z` | 25 | 26 ❌ | `a` | ⚠️ Wrap-around! |

**Output:** `'cvaa'` ✅

> [!TIP]
> 💡 **Analogi Mudah Dipahami:**
>
> | | Alfabet Normal | Alfabet Challenge Ini |
> |---|---|---|
> | 📖 | Buku berhenti di halaman terakhir | Buku melingkar — halaman terakhir nyambung ke halaman pertama |
> | 🔄 | `z` → ??? (buntu) | `z` → `a` (kembali ke awal) |

---

<a name="algoritma"></a>
## 🧠 Algoritma Tahan Lupa (5 Langkah)

Setiap langkah di bawah menjelaskan **APA** yang dilakukan, **KENAPA** itu perlu, dan disertai **contoh angka konkret**.

---

### 1. **Menyiapkan Kamus Alfabet `[VARIABEL KONSTANTA]`**

Buat string berisi 26 huruf alfabet sebagai referensi pencarian.

```
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
```

> **Kenapa?** Karena kita butuh cara untuk "mencari posisi" huruf dan "mengambil huruf berikutnya". String alfabet ini bertindak seperti **tabel lookup** — kita tanya "huruf `o` ada di posisi berapa?", lalu ambil huruf di posisi setelahnya.
>
> **Contoh:** `alphabet.indexOf('o')` → posisi `14`. Lalu `alphabet[15]` → `'p'`. Selesai!

---

### 2. **Menyiapkan Kanvas Penampung `[VARIABEL LET]`**

Buat variabel string kosong untuk menampung huruf-huruf yang sudah digeser.

```
let result = '';
```

> **Kenapa?** Karena kita memproses huruf **satu per satu**. Setiap huruf yang sudah digeser perlu "ditempelkan" ke suatu tempat. Variabel `result` adalah kanvas kosong tempat kita merangkai hasil akhir — seperti menyusun puzzle satu keping demi satu keping.

---

### 3. **Menelusuri Setiap Karakter `[FOR LOOP]`**

Loop melalui setiap huruf di input menggunakan `for...of`.

```
for (const char of word) { ... }
```

> **Kenapa `for...of`?** Karena kita butuh **nilai karakter langsung** (`'w'`, `'o'`, `'w'`), bukan nomor indeksnya. `for...of` memberikan karakter secara langsung tanpa harus menulis `word[i]`.
>
> **Contoh:** Untuk input `'wow'`, loop berjalan 3 kali: `char = 'w'` → `char = 'o'` → `char = 'w'`.

---

### 4. **Mencari Posisi & Menggeser `[LOGIKA INTI]`**

Di dalam loop, cari posisi huruf saat ini lalu ambil huruf di posisi +1.

```
const position = alphabet.indexOf(char);
result += alphabet[position + 1];
```

> **Kenapa pakai `.indexOf()`?** Karena ini method paling intuitif untuk menjawab pertanyaan "huruf ini ada di posisi berapa?". Setelah tahu posisinya, kita tinggal akses `alphabet[position + 1]` — seperti membuka halaman berikutnya di buku.
>
> **Contoh Angka:** Huruf `'w'` → `indexOf('w')` = `22` → `alphabet[22 + 1]` = `alphabet[23]` = `'x'` ✅

---

### 5. **Menangani Edge Case `z` `[KONDISI IF]`**

Tambahkan pengecekan khusus: jika huruf adalah `'z'`, langsung hasilkan `'a'`.

```
if (char === 'z') {
  result += 'a';
}
```

> **Kenapa harus dicek terpisah?** Karena `'z'` ada di posisi `25` (indeks terakhir). Jika kita tetap memaksakan `alphabet[25 + 1]` = `alphabet[26]`, hasilnya adalah `undefined` — bukan huruf! Program tidak error, tapi output-nya menjadi rusak.
>
> **Contoh Angka:** `'z'` → `indexOf('z')` = `25` → `alphabet[26]` = `undefined` ❌ → Maka kita paksa: `result += 'a'` ✅

---

<a name="blueprint"></a>
## 🗺️ Blueprint — Kerangka Kode

Sebelum menulis kode lengkap, pahami dulu **struktur**-nya:

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Kamus + Loop + Geser + Edge Case)

const shiftLetters = (word) => {
  const alphabet = '...';                    // [KAMUS] → referensi lookup
  let result = '';                           // [KANVAS] → penampung hasil

  for (const char of word) {                 // [LOOP] → telusuri tiap huruf
    const position = alphabet.indexOf(char); //   [CARI] → posisi di kamus

    if (char === 'z') {                      //   [EDGE CASE] → huruf terakhir?
      result += 'a';                         //     → wrap ke awal
    } else {
      result += alphabet[position + 1];      //     → geser 1 posisi
    }
  }

  return result;                             // [OUTPUT] → kembalikan hasil
};
```

### Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|----------------|-------------------|--------|
| Penampung akhir | `result` | `string`, `res` | `string` = nama tipe data bawaan, ambigu! |
| Referensi abjad | `alphabet` | `abc`, `huruf` | Spesifik menggambarkan isinya |
| Posisi indeks | `position` | `p`, `idx` | Intuitif, hindari singkatan samar |
| Karakter iterasi | `char` | `c`, `x` | Konvensi umum untuk karakter tunggal |
| Parameter input | `word` | `kata`, `str` | English naming + deskriptif |

---

<a name="fase-2"></a>
## 🔵 Fase 2: Solusi Bertahap (Membangun V1)

> [!NOTE]
> 💡 **Prinsip Fase 2:** Kode dibangun **step-by-step** — bukan langsung full code. Setiap langkah dipastikan jalan dulu, baru tambah bagian berikutnya.

---

### Step 1 — Siapkan Kerangka & Coba Loop

**Tujuan:** Pastikan loop bisa menelusuri setiap huruf.

```javascript
const ubahHuruf = (kata) => {
  const alfabet = 'abcdefghijklmnopqrstuvwxyz';
  let string = '';

  for (const char of kata) {
    console.log(char); // Mengecek apakah huruf berhasil di-looping
  }
};
```

**Hasil `console.log`:**
```
w
o
w
```

✅ Loop berjalan — setiap huruf berhasil diakses satu per satu.

> [!TIP]
> 💡 **Kenapa `for...of`?** Dibanding `for (let i = 0; ...)`, `for...of` lebih rapi karena langsung memberikan **nilai karakter** tanpa harus menulis `kata[i]` berulang kali.

---

### Step 2 — Tambahkan Logika Pencarian & Pergeseran

**Tujuan:** Ganti `console.log` dengan logika inti — cari posisi dan geser.

```javascript
const ubahHuruf = (kata) => {
  const alfabet = 'abcdefghijklmnopqrstuvwxyz';
  let string = '';

  for (const char of kata) {
    const position = alfabet.indexOf(char);

    if (char === 'z') {
      string += 'a';              // Edge case: z → a
    } else {
      string += alfabet[position + 1]; // Normal: geser 1
    }
  }

  return string; // ⚠️ WAJIB ada return!
};
```

**Test:**
```javascript
console.log(ubahHuruf('wow'));   // 'xpx' ✅
console.log(ubahHuruf('buzz'));  // 'cvaa' ✅
```

✅ Solusi pertama **selesai dan berfungsi!**

---

### Rekap Step-by-Step

| Step | Yang Ditambahkan | Status |
|------|-----------------|--------|
| 1 | Kerangka fungsi + loop + `console.log` | ✅ Loop jalan |
| 2 | `.indexOf()` + `if/else` + `return` | ✅ Solusi lengkap |

> [!IMPORTANT]
> 🔔 **Pelajaran penting dari pendekatan bertahap:**
> Menulis kerangka loop terlebih dahulu lalu mengisinya dengan logika inti sangat meminimalisir kebingungan. Kamu bisa **mengisolasi masalah** — jika output salah, kamu tahu apakah masalahnya di loop atau di logika.

---

<a name="gotchas"></a>
## ⚠️ Gotchas Fase Ini

> [!CAUTION]
> 🔴 **`alphabet[26]` = `undefined`, bukan error!**
> JavaScript tidak melempar error saat mengakses indeks di luar jangkauan string. Ia diam-diam mengembalikan `undefined`, yang lalu digabungkan ke string menjadi teks `"undefined"`. Ini membuat bug **sangat sulit dilacak** jika kamu tidak tahu edge case `z`.

> [!WARNING]
> 🐛 **Lupa `return` = output `undefined`!**
> Arrow function dengan body `{ }` (curly braces) **tidak** otomatis me-return nilai. Kamu WAJIB menulis `return result` secara eksplisit di akhir fungsi.

> [!WARNING]
> 🐛 **String bisa diakses seperti Array** — tapi ini bukan Array!
> `alphabet[0]` → `'a'` berfungsi (bracket notation untuk akses karakter). Namun method Array seperti `.push()` atau `.pop()` **tidak tersedia** di String.

---

> 📝 **Navigasi:**
> - ⬅️ Kembali ke [README.md](../README.md)
> - ➡️ Lanjut ke [02-evolusi-dan-clean-code.md](./02-evolusi-dan-clean-code.md)
