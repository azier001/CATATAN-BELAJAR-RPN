# 🔁 Versi 1 — Nested Loop + Ternary Operator

### ✨ _Pendekatan paling fundamental: dua loop bersarang dengan satu kondisi._

> 🎯 **Tujuan:** Memahami solusi paling dasar dan paling mudah dibaca untuk challenge papan catur, menggunakan nested loop dan ternary operator sebagai fondasi logika.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Profil Versi](#profil) | Ringkasan kapan & kenapa pakai versi ini |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + panduan penamaan |
| 💻 | [Kode Lengkap](#kode) | Solusi final siap pakai |
| 🔍 | [Bedah Kode](#bedah) | Penjelasan setiap bagian baris per baris |
| 🧮 | [Simulasi Langkah](#simulasi) | Trace eksekusi dengan angka konkret |
| ⚖️ | [If/Else vs Ternary](#perbandingan) | Kapan pakai yang mana |

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | Nested Loop + Ternary Operator |
| 🔢 **Jumlah Loop** | 2 (nested / bersarang) |
| 🧠 **Konsep Utama** | Koordinat 2D langsung (`row`, `col`) |
| 📖 **Readability** | ⭐⭐⭐⭐⭐ (paling mudah dibaca) |
| ⚡ **Kompleksitas** | O(n²) — sebanding luas papan |
| 🎯 **Cocok Untuk** | Pemula, code review, wawancara teknis |

> [!TIP]
> 🏆 **Kapan pilih versi ini?**
> Gunakan Versi 1 saat **kejelasan kode lebih penting daripada keringkasan**. Ini adalah versi yang paling "berbicara sendiri" — siapa pun yang membacanya langsung paham strukturnya: *"ada loop baris, di dalamnya ada loop kolom, lalu cek kondisi."*

---

<a name="blueprint"></a>
## 🗺️ Blueprint & Kamus Variabel

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|:--------------:|:-----------------:|--------|
| Penampung Akhir | `pattern` | `result`, `res`, `str` | Kita menyusun **pola visual**, bukan hasil kalkulasi angka |
| Loop Baris (Luar) | `row` | `i`, `x`, `r` | Merepresentasikan "baris ke-berapa" secara harfiah |
| Loop Kolom (Dalam) | `col` | `j`, `y`, `c` | Merepresentasikan "kolom ke-berapa", tidak tertukar dengan `row` |

### 🗺️ Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Nested Loop 2D)

const papanCatur = (num) => {
  let pattern = '';              // [KANVAS] — penampung pola (❌ jangan 'result')

  for (let row = 1; ...) {       // [LOOP TERLUAR] — iterasi baris dari atas ke bawah
    for (let col = 1; ...) {     //   [NESTED LOOP] — iterasi kolom dari kiri ke kanan
      // [LOGIKA INTI] — cek ganjil/genap, tambahkan '#' atau ' '
    }
    // [NEWLINE] — pindah baris setelah satu row selesai
  }

  return pattern;                // [KEMBALIKAN] — hasilkan string pola lengkap
};
```

---

<a name="kode"></a>
## 💻 Kode Lengkap

```javascript
const papanCatur = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= num; col++) {
      pattern += (row + col) % 2 === 0 ? '#' : ' ';
    }
    pattern += '\n';
  }

  return pattern;
};

// Uji coba
console.log(papanCatur(5));
/*
# # #
 # # 
# # #
 # # 
# # #
*/
```

---

<a name="bedah"></a>
## 🔍 Bedah Kode (Baris per Baris)

### 1️⃣ Inisialisasi Kanvas `[KANVAS]`

```javascript
let pattern = '';
```

Variabel `pattern` adalah **kanvas kosong** tempat kita "melukis" papan catur satu karakter per satu karakter.

> *(Kenapa: Kita butuh satu tempat untuk **mengakumulasi** karakter satu per satu — tanpa penampung ini, setiap karakter tidak bisa "diingat" antar iterasi. Contoh num=3: `pattern` dimulai dari `''`, lalu bertambah menjadi `'#'`, `'# '`, `'# #'`, dst., hingga akhirnya menjadi `'# #\n # \n# #\n'`.)*

---

### 2️⃣ Loop Baris — Mengatur Baris `[LOOP TERLUAR]`

```javascript
for (let row = 1; row <= num; row++)
```

Loop ini berjalan sebanyak `num` kali, mewakili pergerakan **dari baris atas ke baris bawah**.

> *(Kenapa mulai dari `1` dan kondisinya `<= num`? Karena kita memodelkan baris seperti koordinat manusia (baris ke-1, ke-2, ..., ke-N) — lebih intuitif saat dipasangkan dengan rumus ganjil-genap `(row + col) % 2`. Contoh num=5: loop menghasilkan `row = 1, 2, 3, 4, 5` — tepat 5 baris.)*

---

### 3️⃣ Loop Kolom — Mengisi Karakter Per Baris `[NESTED LOOP]`

```javascript
for (let col = 1; col <= num; col++)
```

Loop ini berjalan sebanyak `num` kali **di dalam setiap baris**, mewakili pergerakan **dari kolom kiri ke kolom kanan**.

> *(Kenapa loop ini ada di **dalam** loop baris? Karena setiap baris terdiri dari `num` karakter — kita harus mengisi semua kolom di satu baris sebelum bisa pindah ke baris berikutnya. Analoginya seperti menulis teks: tulis huruf dari kiri ke kanan dulu, baru tekan Enter. Contoh num=3: untuk `row=1`, loop col menghasilkan 3 karakter → `'# #'`. Untuk `row=2` → `' # '`. Dan seterusnya.)*

---

### 4️⃣ Logika Inti — Ganjil Genap `[KONDISI + PENGISIAN]`

```javascript
pattern += (row + col) % 2 === 0 ? '#' : ' ';
```

Ini adalah **jantung** dari seluruh algoritma. Cara membacanya:

```
pattern +=                    → "Tambahkan karakter baru ke kanvas"
(row + col) % 2 === 0         → "Cek: apakah posisi (baris + kolom) ini GENAP?"
  ? '#'                       → "Jika iya → tambahkan '#'"
  : ' '                       → "Jika tidak → tambahkan ' ' (spasi)"
```

> *(Kenapa menjumlahkan `row + col` lalu cek modulo 2? Karena penjumlahan dua angka menghasilkan nilai genap/ganjil secara bergantian saat salah satunya berubah — itulah yang menciptakan pola selang-seling secara alami. Contoh num=3: `(1+1)=2` → genap → `'#'` | `(1+2)=3` → ganjil → `' '` | `(2+1)=3` → ganjil → `' '` | `(2+2)=4` → genap → `'#'`. Pola selang-seling terbentuk tanpa logika tambahan!)*

---

### 5️⃣ Pindah Baris `[NEWLINE]`

```javascript
pattern += '\n';
```

Setelah seluruh kolom di satu baris selesai diisi, kita menambahkan karakter **newline** (`\n`) untuk pindah ke baris berikutnya.

> *(Kenapa `'\n'` berada di luar loop `col`? Karena kita hanya ingin pindah baris **sekali** setiap kali satu baris penuh selesai, bukan setelah setiap karakter. Contoh num=3: `'\n'` disisipkan 3 kali — setelah karakter ke-3 (akhir baris 1), ke-6 (akhir baris 2), dan ke-9 (akhir baris 3).)*

> [!CAUTION]
> ⚠️ **Jebakan Klasik!** `pattern += '\n'` harus berada di **luar** loop `col` tapi **di dalam** loop `row`. Jika diletakkan di dalam loop `col`, setiap karakter akan diikuti baris baru dan pola akan hancur.
>
> ```
> ✅ BENAR                      ❌ SALAH
> for row:                      for row:
>   for col:                      for col:
>     pattern += karakter           pattern += karakter
>   pattern += '\n'  ← di sini     pattern += '\n'  ← bukan di sini!
> ```

---

<a name="simulasi"></a>
## 🧮 Simulasi Langkah (Trace `num = 3`)

Mari kita telusuri eksekusi kode langkah demi langkah untuk `papanCatur(3)`.

Total iterasi: `3 baris × 3 kolom = 9 sel`.

| Iterasi | `row` | `col` | `row + col` | `% 2` | Karakter | `pattern` sejauh ini |
|:-------:|:-----:|:-----:|:-----------:|:-----:|:--------:|----------------------|
| 1 | 1 | 1 | 2 | 0 ✅ | `#` | `"#"` |
| 2 | 1 | 2 | 3 | 1 | ` ` | `"# "` |
| 3 | 1 | 3 | 4 | 0 ✅ | `#` | `"# #"` |
| — | 1 | — | — | — | `\n` | `"# #\n"` |
| 4 | 2 | 1 | 3 | 1 | ` ` | `"# #\n "` |
| 5 | 2 | 2 | 4 | 0 ✅ | `#` | `"# #\n #"` |
| 6 | 2 | 3 | 5 | 1 | ` ` | `"# #\n # "` |
| — | 2 | — | — | — | `\n` | `"# #\n # \n"` |
| 7 | 3 | 1 | 4 | 0 ✅ | `#` | `"# #\n # \n#"` |
| 8 | 3 | 2 | 5 | 1 | ` ` | `"# #\n # \n# "` |
| 9 | 3 | 3 | 6 | 0 ✅ | `#` | `"# #\n # \n# #"` |
| — | 3 | — | — | — | `\n` | `"# #\n # \n# #\n"` |

**Output akhir saat di-print:**
```
# #
 # 
# #
```

---

<a name="perbandingan"></a>
## ⚖️ If/Else vs Ternary Operator

Kedua cara ini menghasilkan output yang **identik**. Perbedaannya hanya pada gaya penulisan.

### Versi If/Else (Verbose)
```javascript
if ((row + col) % 2 === 0) {
  pattern += '#';
} else {
  pattern += ' ';
}
```

### Versi Ternary (Ringkas)
```javascript
pattern += (row + col) % 2 === 0 ? '#' : ' ';
```

### Kapan Pilih Yang Mana?

| Kondisi | Pilihan |
|---------|:-------:|
| Hanya **2 pilihan nilai** sederhana | ✅ Ternary |
| Kondisi mengandung **logika tambahan** (lebih dari 1 baris) | ✅ If/Else |
| Kode akan dibaca oleh **pemula** | ✅ If/Else |
| Kode digunakan di **production / tim** yang familiar JS | ✅ Ternary |

> [!NOTE]
> 💡 **Best Practice:** Ternary ideal saat nilainya bisa diekspresikan dalam **satu ekspresi tunggal**. Jika blok `if` atau `else` mulai membutuhkan lebih dari satu baris, kembalilah ke `if/else` demi keterbacaan.

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [02 — Problem Solving Approach](./02-problem-solving-approach.md) | [README](./README.md) | [04 — Version 2: Single Loop](./04-version-2-single-loop.md) |
