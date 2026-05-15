# 🚀 Versi 2 — Single Loop + `.repeat()`

### ✨ _Satu loop untuk semuanya: manfaatkan built-in method untuk merangkai baris utuh sekaligus._

> 🎯 **Tujuan:** Memahami teknik membangun setiap baris piramida tanpa nested loop, menggunakan `String.repeat()` untuk menggandakan karakter secara instan — pendekatan yang lebih idiomatik dan ringkas.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Profil Versi](#profil) | Ringkasan kapan & kenapa pakai versi ini |
| 💡 | [Konsep Inti: `.repeat()` Menggantikan Nested Loop](#konsep) | Visualisasi perbandingan |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + panduan penamaan |
| 👣 | [Pendekatan Bertahap](#bertahap) | Step 1 → Step 2 → Step 3 |
| 💻 | [Kode Lengkap](#kode) | Solusi final siap pakai |
| 🔍 | [Bedah Kode](#bedah) | Penjelasan setiap bagian baris per baris |
| 🧮 | [Simulasi Langkah](#simulasi) | Trace eksekusi dengan angka konkret |
| ⚖️ | [V1 vs V2 — Apa yang Berubah?](#perbandingan) | Tabel perbedaan kedua versi |

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | Single Loop + `.repeat()` |
| 🔢 **Jumlah Loop** | 1 (loop tunggal) |
| 🧠 **Konsep Utama** | `.repeat()` menggantikan kedua nested loop |
| 📖 **Readability** | ⭐⭐⭐⭐⭐ (sangat ringkas & mudah dibaca) |
| ⚡ **Kompleksitas** | O(n)* |
| 🎯 **Cocok Untuk** | Real project, kode ringkas, familiar dengan String methods |

> *\*Secara eksplisit hanya 1 loop. Namun `.repeat()` melakukan iterasi internal, sehingga secara total tetap menyentuh semua karakter.*

> [!TIP]
> 🏆 **Kapan pilih versi ini?**
> Gunakan Versi 2 saat syarat "wajib nested loop" **dicabut** dan kamu butuh kode yang ringkas serta mudah dibaca. Versi ini mendelegasikan pengulangan karakter ke *engine* JavaScript (yang ditulis dalam C++), sehingga lebih efisien daripada iterasi manual karakter per karakter.

---

<a name="konsep"></a>
## 💡 Konsep Inti: `.repeat()` Menggantikan Nested Loop

### Apa itu `.repeat()`?

`'karakter'.repeat(N)` menghasilkan string berisi karakter tersebut diulang sebanyak `N` kali.

```javascript
'*'.repeat(5)    // → '*****'
' '.repeat(3)    // → '   '
'* '.repeat(4)   // → '* * * * '
'abc'.repeat(2)  // → 'abcabc'
```

### Perbandingan: Nested Loop vs `.repeat()`

Nested loop dan `.repeat()` menghasilkan **output yang identik**. Yang berubah hanya "siapa yang mengerjakan pengulangan":

```javascript
// ❌ Nested Loop — kita instruksikan komputer langkah demi langkah
for (let space = 1; space <= 4; space++) {
  pattern += ' ';
}
// Hasil: '    ' (4 spasi)

// ✅ .repeat() — kita delegasikan ke JavaScript engine
pattern += ' '.repeat(4);
// Hasil: '    ' (4 spasi) — IDENTIK!
```

> [!NOTE]
> 💡 **Analogi:** Nested loop itu seperti kamu **menyalin surat dengan tangan** satu huruf demi satu huruf. `.repeat()` itu seperti kamu menekan tombol **fotokopi** — hasilnya sama, tapi prosesnya jauh lebih singkat.

---

<a name="blueprint"></a>
## 🗺️ Blueprint & Kamus Variabel

### 🗺️ Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE V2 (Mental Model: .repeat() menggantikan nested loop)

function piramida2(num) {
  let pattern = '';                              // [KANVAS] penampung pola

  for (let row = 1; ...) {                       // [LOOP TUNGGAL] → baris ke-berapa
    pattern += ' '.repeat(num - row);            //   [SPASI] → gantikan nested loop 1
    pattern += '* '.repeat(row);                 //   [BINTANG] → gantikan nested loop 2
    pattern += '\n';                             //   [PINDAH BARIS]
  }

  return pattern;                                // [RETURN] kembalikan hasil akhir
}
```

---

<a name="bertahap"></a>
## 👣 Pendekatan Bertahap

### ⚙️ Step 1 — Bintang Saja Pakai `.repeat()` (Rata Kiri)

Sama seperti V1, mulai dari bintang dulu tanpa spasi:

```javascript
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += '* '.repeat(row);
    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Hasil (rata kiri, belum piramida):**
> ```
> *
> * *
> * * *
> * * * *
> * * * * *
> ```

---

### ⚙️ Step 2 — Tambah Spasi Pakai `.repeat()`

Tambahkan spasi pendorong di depan bintang:

```javascript
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += ' '.repeat(num - row);
    pattern += '* '.repeat(row);
    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Hasil:** Piramida rata tengah sudah terbentuk! ✅

---

### ⚙️ Step 3 — Gabung Jadi Satu Baris (Ultra-Ringkas)

Ketiga baris `pattern +=` bisa digabung menjadi satu:

```javascript
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += ' '.repeat(num - row) + '* '.repeat(row) + '\n';
  }

  return pattern;
};
```

> [!TIP]
> 💡 **Readability vs Conciseness:**
> - Jika rumusnya sederhana (seperti piramida ini) → versi 1 baris sudah cukup oke.
> - Jika rumusnya mulai rumit (3+ komponen) → lebih baik dipisah ke baris terpisah agar kodenya "bercerita".

---

<a name="kode"></a>
## 💻 Kode Lengkap

```javascript
// ✅ VERSI 2 — Single Loop + .repeat()
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += ' '.repeat(num - row) + '* '.repeat(row) + '\n';
  }

  return pattern;
};

// Uji coba
console.log(piramida2(5));
/*
    *
   * *
  * * *
 * * * *
* * * * *
*/
```

---

<a name="bedah"></a>
## 🔍 Bedah Kode (Baris per Baris)

### 1️⃣ Loop Tunggal `[LOOP SATU-SATUNYA]`

```javascript
for (let row = 1; row <= num; row++)
```

Hanya ada **1 loop** — loop ini mengontrol baris ke-berapa. *(Kenapa cuma 1? Karena tugas "cetak spasi berulang" dan "cetak bintang berulang" sudah diambil alih oleh `.repeat()`.)*

---

### 2️⃣ Spasi + Bintang + Newline `[INTI — SATU BARIS]`

```javascript
pattern += ' '.repeat(num - row) + '* '.repeat(row) + '\n';
```

Cara membacanya:

```
' '.repeat(num - row)    → "Buat string spasi sepanjang (num - row)"
+                        → "Sambungkan dengan..."
'* '.repeat(row)         → "String bintang-spasi diulang sebanyak row kali"
+                        → "Sambungkan dengan..."
'\n'                     → "Karakter pindah baris"
```

> *(Contoh baris ke-2 (num=5): `' '.repeat(3)` → `'   '` + `'* '.repeat(2)` → `'* * '` + `'\n'` = `'   * * \n'`)*

---

<a name="simulasi"></a>
## 🧮 Simulasi Langkah (Trace `num = 3`)

| `row` | `' '.repeat(num-row)` | `'* '.repeat(row)` | Baris Utuh | Visualisasi |
|:---:|:---:|:---:|:---|:---|
| 1 | `' '.repeat(2)` → `'  '` | `'* '.repeat(1)` → `'* '` | `'  * \n'` | `··*·` |
| 2 | `' '.repeat(1)` → `' '` | `'* '.repeat(2)` → `'* * '` | `' * * \n'` | `·*·*·` |
| 3 | `' '.repeat(0)` → `''` | `'* '.repeat(3)` → `'* * * '` | `'* * * \n'` | `*·*·*·` |

**Output akhir:**
```
  *
 * *
* * *
```

> 📌 Tanda `·` merepresentasikan spasi agar terlihat jelas.

---

<a name="perbandingan"></a>
## ⚖️ V1 vs V2 — Apa yang Berubah?

| Komponen | V1 (Nested Loop) | V2 (`.repeat()`) |
|----------|:-----------------:|:-----------------:|
| Spasi | `for (let space...) { pattern += ' '; }` | `' '.repeat(num - row)` |
| Bintang | `for (let star...) { pattern += '* '; }` | `'* '.repeat(row)` |
| Jumlah loop | 3 (1 luar + 2 nested) | 1 |
| Baris kode | ~10 baris | ~5 baris |
| Rumus | **Sama persis** | **Sama persis** |

> [!IMPORTANT]
> 📌 *Perhatikan: rumusnya **tidak berubah sama sekali** (`num - row` untuk spasi, `row` untuk bintang). Yang berubah hanya "siapa yang mengerjakan pengulangan" — dari loop manual menjadi method bawaan.*

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [03 — Version 1: Nested Loop](./03-version-1-nested-loop.md) | [README](../README.md) | [05 — Version Comparison](./05-version-comparison.md) |
