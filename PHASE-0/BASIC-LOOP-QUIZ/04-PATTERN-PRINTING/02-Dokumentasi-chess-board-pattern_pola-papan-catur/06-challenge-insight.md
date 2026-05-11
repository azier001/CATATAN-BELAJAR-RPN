# 💡 Challenge Insight — Papan Catur (Chess Board Pattern)

### ✨ _Deep dive: naming convention, perbandingan antar versi, dan pelajaran penting dari challenge ini._

> 🎯 **Tujuan:** Mengonsolidasikan semua pengetahuan dari sesi mentoring ke dalam satu referensi mendalam — termasuk best practice naming, perbandingan ketiga versi, dan jebakan-jebakan yang wajib dihindari.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🏷️ | [Naming Convention](#naming) | Panduan penamaan variabel terbaik |
| ⚖️ | [Perbandingan 3 Versi](#perbandingan) | Tabel head-to-head semua pendekatan |
| 🧠 | [Mental Model Kunci](#mental-model) | Cara berpikir yang benar untuk challenge ini |
| ⚠️ | [Gotchas & Jebakan](#gotchas) | Kesalahan umum yang wajib dihindari |
| 🌍 | [Koneksi ke Dunia Nyata](#dunia-nyata) | Di mana teknik-teknik ini dipakai sungguhan |

---

<a name="naming"></a>
## 🏷️ Naming Convention — Panduan Penamaan Variabel

Penamaan variabel yang baik bukan sekadar estetika — ini tentang **mengurangi beban kognitif** bagi siapa pun yang membaca kode, termasuk diri sendiri 6 bulan ke depan.

### Tabel Kamus Variabel (Semua Versi)

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|:--------------:|:-----------------:|--------|
| Penampung hasil | `pattern` | `result`, `res`, `str`, `output` | Kita menyusun **pola visual**, bukan hasil kalkulasi angka |
| Loop baris (luar) | `row` | `i`, `x`, `r`, `a` | Secara harfiah berarti "baris ke-berapa" |
| Loop kolom (dalam) | `col` | `j`, `y`, `c`, `b` | Secara harfiah berarti "kolom ke-berapa", tidak tertukar dengan `row` |
| Indeks 1D (Versi 2) | `i` | `index`, `idx`, `n` | Untuk loop tunggal 1D, `i` masih dapat diterima |
| Baris hasil konversi (Versi 2) | `row` | `r`, `baris`, `x` | Hasil konversi dari 1D tetap merepresentasikan baris |
| Kolom hasil konversi (Versi 2) | `col` | `c`, `kolom`, `y` | Idem untuk kolom |

### Kapan `i` dan `j` Boleh Dipakai?

> [!NOTE]
> 📌 **Aturan Praktis:**
>
> | Situasi | Pilihan |
> |---------|:-------:|
> | Loop sederhana yang hanya **menghitung angka** (1 sampai N) | ✅ `i` oke |
> | Loop yang mewakili **posisi spasial** (baris, kolom, koordinat) | ✅ Gunakan `row`, `col` |
> | Loop yang mewakili **domain tertentu** (index gambar, langkah game) | ✅ Nama domain (`pixel`, `step`) |
>
> *Prinsipnya: nama variabel harus menjawab pertanyaan "ini mewakili APA?", bukan "ini angka ke berapa?"*

---

<a name="perbandingan"></a>
## ⚖️ Perbandingan 3 Versi Solusi

### Tabel Head-to-Head

| Aspek | Versi 1 🔁 Nested Loop | Versi 2 🔢 Single Loop | Versi 3 ⚗️ Functional |
|-------|:---:|:---:|:---:|
| **Jumlah Loop** | 2 (nested) | 1 | 0 (tidak ada `for`) |
| **Readability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Kebutuhan Pengetahuan** | Dasar | `Math.floor`, `%` | `Array.from`, `join` |
| **Variabel Sementara** | `pattern` | `pattern`, `row`, `col` | Tidak ada |
| **Trailing `\n`** | ✅ Ada | ✅ Ada | ❌ Tidak ada |
| **Gaya Coding** | Imperatif | Imperatif | Deklaratif/Fungsional |
| **Cocok Untuk** | Pemula, wawancara | Game dev, grafis | React, modern JS |
| **Performa** | O(n²) | O(n²) | O(n²) |

> [!IMPORTANT]
> 🏆 **Kesimpulan Perbandingan:**
>
> Tidak ada versi yang "paling benar" — ketiganya menghasilkan output yang sama. Pilih berdasarkan **konteks**:
> - 🎓 **Belajar & wawancara** → **Versi 1** (paling mudah dijelaskan)
> - 🎮 **Game / grafis** → **Versi 2** (teknik standar industri untuk grid)
> - ⚛️ **React / proyek modern** → **Versi 3** (zero side-effect, deklaratif)

### Perbandingan Kode Side-by-Side

**Versi 1 — Nested Loop:**
```javascript
for (let row = 1; row <= num; row++) {
  for (let col = 1; col <= num; col++) {
    pattern += (row + col) % 2 === 0 ? '#' : ' ';
  }
  pattern += '\n';
}
```

**Versi 2 — Single Loop:**
```javascript
for (let i = 0; i < num * num; i++) {
  const row = Math.floor(i / num);
  const col = i % num;
  pattern += (row + col) % 2 === 0 ? '#' : ' ';
  if (col === num - 1) pattern += '\n';
}
```

**Versi 3 — Functional:**
```javascript
Array.from({ length: num }, (_, row) =>
  Array.from({ length: num }, (_, col) =>
    (row + col) % 2 === 0 ? '#' : ' '
  ).join('')
).join('\n');
```

---

<a name="mental-model"></a>
## 🧠 Mental Model Kunci

Tiga cara berpikir yang membantu memahami challenge ini secara intuitif:

### 🗺️ Mental Model 1: Papan Koordinat

Setiap sel di papan catur punya "alamat" `(baris, kolom)`. Saat kamu **menjumlahkan alamatnya** dan mengecek hasilnya ganjil atau genap, kamu mendapat pola selang-seling secara otomatis — tanpa perlu memikirkan logika berbeda untuk baris ganjil vs genap.

```
(1,1)=2✅  (1,2)=3  (1,3)=4✅       # _ #
(2,1)=3   (2,2)=4✅ (2,3)=5        _ # _
(3,1)=4✅  (3,2)=5  (3,3)=6✅       # _ #
```

### 📐 Mental Model 2: Pembagi Ruang (Versi 2)

`Math.floor(i / num)` dan `i % num` adalah dua cara memandang satu angka:
- **Pembagian utuh** → "Sudah melewati berapa baris penuh?" → Nomor baris
- **Sisa bagi** → "Sekarang ada di posisi ke-berapa dalam baris ini?" → Nomor kolom

Analogi: seperti membaca jam. `75 menit` = `1 jam` (utuh) + `15 menit` (sisa).

### 🔗 Mental Model 3: Pipeline (Versi 3)

`Array.from` + `.join` adalah sebuah **pipeline transformasi data**:
```
Angka (num)
  → Array slot kosong
    → Isi setiap slot dengan karakter
      → Gabungkan kolom per baris
        → Gabungkan semua baris
          → String papan catur
```

---

<a name="gotchas"></a>
## ⚠️ Gotchas & Jebakan yang Wajib Dihindari

> ⚠️ **Jebakan #1: Posisi `\n` yang Salah (Versi 1 & 2)**
>
> Meletakkan `pattern += '\n'` di **dalam** loop kolom akan membuat setiap karakter berdiri sendiri di baris baru.
> ```javascript
> // ❌ SALAH — '\n' di dalam loop col
> for (let col = 1; col <= num; col++) {
>   pattern += (row + col) % 2 === 0 ? '#' : ' ';
>   pattern += '\n';  // ← jangan di sini!
> }
>
> // ✅ BENAR — '\n' di luar loop col
> for (let col = 1; col <= num; col++) {
>   pattern += (row + col) % 2 === 0 ? '#' : ' ';
> }
> pattern += '\n';  // ← di sini
> ```

---

> ⚠️ **Jebakan #2: Lupa Bahwa Spasi Itu Karakter (Bukan Kekosongan)**
>
> Kotak "putih" di papan catur tetap harus diisi dengan karakter **spasi** (`' '`), bukan dibiarkan kosong. Tanpa spasi, seluruh kolom akan bergeser ke kiri dan pola tidak akan rata.
> ```
> ❌ Tanpa spasi:    ✅ Dengan spasi:
> ###               # # #
> ###                # # 
> ###               # # #
> ```

---

> ⚠️ **Jebakan #3: `console.log` vs `return`**
>
> Fungsi **harus** menggunakan `return pattern`, bukan `console.log(pattern)`. Menggunakan `console.log` di dalam fungsi membuat fungsi mengembalikan `undefined`, sehingga tidak bisa digunakan atau diuji.
> ```javascript
> // ❌ SALAH
> function papanCatur(num) {
>   console.log(pattern); // mengembalikan undefined!
> }
>
> // ✅ BENAR
> function papanCatur(num) {
>   return pattern; // bisa dipakai di mana saja
> }
> ```

---

> ⚠️ **Jebakan #4: Indeks 0 vs 1 — Selalu Konsisten!**
>
> Baik memulai indeks dari `0` maupun `1`, hasilnya tetap benar **selama konsisten di kedua loop**. Namun jika mencampurnya (misal `row` dari 1 tapi `col` dari 0), polanya akan bergeser satu langkah dan menghasilkan pola yang terbalik.
> ```javascript
> // ⚠️ TIDAK KONSISTEN — pola terbalik!
> for (let row = 1; row <= num; row++) {
>   for (let col = 0; col < num; col++) { // ← dimulai dari 0, bukan 1!
>     // (1+0)=1 → ganjil → spasi  ← awal baris jadi spasi, bukan '#'!
>   }
> }
> ```

---

<a name="dunia-nyata"></a>
## 🌍 Koneksi ke Dunia Nyata

Teknik-teknik yang dipelajari di challenge ini bukan sekadar latihan — mereka digunakan di berbagai aplikasi nyata:

| Teknik | Digunakan Di |
|--------|-------------|
| **Nested Loop 2D** | Rendering tabel HTML, matriks matematika, spreadsheet |
| **Logika Ganjil-Genap** | Styling baris bergantian di tabel (`tr:nth-child(even)`), pola ubin |
| **1D → 2D Mapping** | Buffer gambar (pixel art), papan game (chess, checkers), game of life |
| **`Array.from` + `join`** | Rendering list di React, generate HTML dari data, manipulasi string massal |

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [05 — Version 3: Functional](./05-version-3-functional.md) | [README](./README.md) | [07 — Ringkasan Algoritma](./07-ringkasan-algoritma.md) |
