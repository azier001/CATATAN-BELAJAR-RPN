# 🔁 Versi 1 — Nested Loop + Ternary Operator

### ✨ _Pendekatan paling fundamental: dua loop bersarang dengan dua kondisi diagonal._

> 🎯 **Tujuan:** Memahami solusi paling dasar dan paling mudah dibaca untuk challenge Pola X, menggunakan nested loop dan ternary operator sebagai fondasi logika.

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
| 🧠 **Konsep Utama** | Koordinat 2D (`row`, `col`) + rumus diagonal |
| 📖 **Readability** | ⭐⭐⭐⭐⭐ (paling mudah dibaca) |
| ⚡ **Kompleksitas** | O(n²) — sebanding luas grid |
| 🎯 **Cocok Untuk** | Pemula, ujian, code review, wawancara teknis |

> [!TIP]
> 🏆 **Kapan pilih versi ini?**
> Gunakan Versi 1 saat **kejelasan kode lebih penting daripada keringkasan**. Ini adalah versi yang paling "berbicara sendiri" — siapa pun yang membacanya langsung paham strukturnya: *"ada loop baris, di dalamnya ada loop kolom, lalu cek kondisi diagonal."*

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
// 🗺️ KERANGKA KODE (Mental Model: Grid 2D dengan 2 diagonal bersilangan)

const polaX = (num) => {
  let pattern = '';                              // [KANVAS] — penampung pola (❌ jangan 'result')

  for (let row = 0; row < num; row++) {          // [LOOP UTAMA] → baris ke-berapa (atas ke bawah)
    for (let col = 0; col < num; col++) {        //   [NESTED LOOP] → kolom ke-berapa (kiri ke kanan)
      // [LOGIKA INTI] → cek diagonal utama ATAU diagonal terbalik
      // Jika cocok → cetak '*', jika tidak → cetak ' '
    }
    // [NEWLINE] → pindah baris setelah satu row selesai
  }

  return pattern;                                // [KEMBALIKAN] → hasilkan string pola lengkap
};
```

---

<a name="kode"></a>
## 💻 Kode Lengkap

```javascript
const polaX = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
      pattern += (row === col || row + col === num - 1) ? '*' : ' ';
    }
    pattern += '\n';
  }

  return pattern;
};

// Uji coba
console.log(polaX(5));
/*
*   *
 * *
  *
 * *
*   *
*/
```

---

<a name="bedah"></a>
## 🔍 Bedah Kode (Baris per Baris)

### 1️⃣ Inisialisasi Kanvas `[KANVAS]`

```javascript
let pattern = '';
```

Variabel `pattern` adalah **kanvas kosong** tempat kita "melukis" pola X satu karakter per satu karakter.

> *(Kenapa: Kita butuh satu tempat untuk **mengakumulasi** karakter satu per satu. Tanpa penampung ini, setiap karakter tidak bisa "diingat" antar iterasi. Dimulai dari `''`, lalu bertambah menjadi `'*'`, `'* '`, `'*  '`, `'*   '`, `'*   *'`, dst.)*

---

### 2️⃣ Loop Baris — Bergerak ke Bawah `[LOOP UTAMA]`

```javascript
for (let row = 0; row < num; row++)
```

Loop ini berjalan sebanyak `num` kali, mewakili pergerakan **dari baris atas ke baris bawah**.

> *(Kenapa mulai dari `0`? Karena rumus diagonal terbalik kita adalah `row + col === num - 1`. Jika kita mulai dari 0, maka baris pertama (`row = 0`) + kolom terakhir (`col = 4`) = `0 + 4 = 4 = num - 1`. Rumusnya langsung cocok tanpa penyesuaian. Contoh num=5: loop menghasilkan `row = 0, 1, 2, 3, 4` — tepat 5 baris.)*

---

### 3️⃣ Loop Kolom — Bergerak ke Kanan `[NESTED LOOP]`

```javascript
for (let col = 0; col < num; col++)
```

Loop ini berjalan sebanyak `num` kali **di dalam setiap baris**, mewakili pergerakan **dari kolom kiri ke kolom kanan**.

> *(Kenapa loop ini ada di **dalam** loop baris? Karena setiap baris terdiri dari `num` karakter — kita harus mengisi semua kolom di satu baris sebelum bisa pindah ke baris berikutnya. Analoginya seperti mesin printer: cetak karakter dari kiri ke kanan dulu, baru turun ke baris baru. Contoh num=5: untuk `row=0`, loop col mencetak 5 karakter → `'*   *'`.)*

---

### 4️⃣ Logika Inti — Dua Diagonal `[KONDISI + PENGISIAN]`

```javascript
pattern += (row === col || row + col === num - 1) ? '*' : ' ';
```

Ini adalah **jantung** dari seluruh algoritma. Cara membacanya:

```
pattern +=                                → "Tambahkan karakter baru ke kanvas"
(row === col                              → "Cek: apakah posisi ini di diagonal utama (\)?"
  ||                                      → "ATAU"
 row + col === num - 1)                   → "Apakah posisi ini di diagonal terbalik (/)?"
  ? '*'                                   → "Jika salah satu benar → tambahkan bintang"
  : ' '                                   → "Jika tidak satupun → tambahkan spasi"
```

> *(Kenapa ada dua kondisi yang digabung dengan `||`? Karena huruf X terbentuk dari **dua garis** yang saling menyilang. `row === col` menangkap garis dari kiri atas ke kanan bawah, dan `row + col === num - 1` menangkap garis dari kanan atas ke kiri bawah. Operator `||` berarti "cetak bintang jika koordinat ini berada di salah satu dari kedua garis tersebut.")*

---

### 5️⃣ Pindah Baris `[NEWLINE]`

```javascript
pattern += '\n';
```

Setelah seluruh kolom di satu baris selesai diisi, kita menambahkan karakter **newline** (`\n`) untuk pindah ke baris berikutnya.

> *(Kenapa `'\n'` berada di luar loop `col`? Karena kita hanya ingin pindah baris **sekali** setiap kali satu baris penuh selesai, bukan setelah setiap karakter. Contoh num=5: `'\n'` disisipkan 5 kali — setelah karakter ke-5 (akhir baris 0), ke-10 (akhir baris 1), dst.)*

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

Mari kita telusuri eksekusi kode langkah demi langkah untuk `polaX(3)`.

Total iterasi: `3 baris × 3 kolom = 9 sel`.

| Iterasi | `row` | `col` | `row === col` | `row + col` | `=== num-1 (2)` | Karakter | `pattern` sejauh ini |
|:-------:|:-----:|:-----:|:-------------:|:-----------:|:----------------:|:--------:|----------------------|
| 1 | 0 | 0 | ✅ | 0 | — | `*` | `"*"` |
| 2 | 0 | 1 | ❌ | 1 | ❌ | ` ` | `"* "` |
| 3 | 0 | 2 | ❌ | 2 | ✅ | `*` | `"* *"` |
| — | 0 | — | — | — | — | `\n` | `"* *\n"` |
| 4 | 1 | 0 | ❌ | 1 | ❌ | ` ` | `"* *\n "` |
| 5 | 1 | 1 | ✅ | 2 | ✅ | `*` | `"* *\n *"` |
| 6 | 1 | 2 | ❌ | 3 | ❌ | ` ` | `"* *\n * "` |
| — | 1 | — | — | — | — | `\n` | `"* *\n * \n"` |
| 7 | 2 | 0 | ❌ | 2 | ✅ | `*` | `"* *\n * \n*"` |
| 8 | 2 | 1 | ❌ | 3 | ❌ | ` ` | `"* *\n * \n* "` |
| 9 | 2 | 2 | ✅ | 4 | — | `*` | `"* *\n * \n* *"` |
| — | 2 | — | — | — | — | `\n` | `"* *\n * \n* *\n"` |

**Output akhir saat di-print:**
```
* *
 *
* *
```

> [!NOTE]
> 📌 **Perhatikan iterasi ke-5** (`row=1, col=1`): Kedua rumus bernilai `true` secara bersamaan (`1 === 1` ✅ DAN `1 + 1 === 2` ✅). Tapi berkat operator `||`, bintang hanya dicetak **satu kali**. Ini adalah titik perpotongan kedua diagonal — titik tengah huruf X!

---

<a name="perbandingan"></a>
## ⚖️ If/Else vs Ternary Operator

Kedua cara ini menghasilkan output yang **identik**. Perbedaannya hanya pada gaya penulisan.

### Versi If/Else (Verbose — 5 baris)
```javascript
if (row === col || row + col === num - 1) {
  pattern += '*';
} else {
  pattern += ' ';
}
```

### Versi Ternary (Ringkas — 1 baris)
```javascript
pattern += (row === col || row + col === num - 1) ? '*' : ' ';
```

### Kapan Pilih Yang Mana?

| Kondisi | Pilihan |
|---------|:-------:|
| Hanya **2 pilihan nilai** sederhana | ✅ Ternary |
| Kondisi mengandung **logika tambahan** (lebih dari 1 baris) | ✅ If/Else |
| Kode akan dibaca oleh **pemula** | ✅ If/Else |
| Kode digunakan di **production / tim** yang familiar JS | ✅ Ternary |

> [!TIP]
> 💡 **Tips tambahan soal tanda kurung:**
> Menambahkan `()` membungkus kondisi di dalam ternary — meskipun secara teknis opsional — sangat membantu mata manusia membedakan mana bagian "pertanyaan" dan mana bagian "jawaban":
>
> ```javascript
> // Tanpa kurung (masih benar, tapi mata harus bekerja lebih keras):
> pattern += row === col || row + col === num - 1 ? '*' : ' ';
>
> // Dengan kurung (lebih mudah dipindai):
> pattern += (row === col || row + col === num - 1) ? '*' : ' ';
> ```

> [!NOTE]
> 💡 **Best Practice:** Ternary ideal saat nilainya bisa diekspresikan dalam **satu ekspresi tunggal**. Jika blok `if` atau `else` mulai membutuhkan lebih dari satu baris, kembalilah ke `if/else` demi keterbacaan.

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [02 — Problem Solving Approach](./02-problem-solving-approach.md) | [README](../README.md) | [04 — Version 2: Single Loop](./04-version-2-single-loop.md) |
