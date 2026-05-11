# 🔢 Versi 2 — Single Loop (Matematika 1D → 2D)

### ✨ _Satu loop untuk semuanya: mengubah garis lurus menjadi papan catur menggunakan matematika._

> 🎯 **Tujuan:** Memahami teknik mengonversi indeks array 1 dimensi menjadi koordinat 2 dimensi menggunakan pembagian (`Math.floor`) dan sisa bagi (`%`), sehingga seluruh papan catur bisa diproses hanya dengan satu loop tunggal.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Profil Versi](#profil) | Ringkasan kapan & kenapa pakai versi ini |
| 💡 | [Konsep Inti: 1D ke 2D](#konsep) | Visualisasi "membengkokkan garis lurus" |
| 🔮 | [Sihir Matematika](#matematika) | Cara kerja `Math.floor` & modulo `%` |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + panduan penamaan |
| 💻 | [Kode Lengkap](#kode) | Solusi final siap pakai |
| 🔍 | [Bedah Kode](#bedah) | Penjelasan setiap bagian baris per baris |
| 🧮 | [Simulasi Langkah](#simulasi) | Trace eksekusi dengan angka konkret |

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | Single Loop — Matematika 1D → 2D |
| 🔢 **Jumlah Loop** | 1 (loop tunggal) |
| 🧠 **Konsep Utama** | Pemetaan indeks 1D ke koordinat 2D |
| 📖 **Readability** | ⭐⭐⭐ (butuh pemahaman `Math.floor` & `%`) |
| ⚡ **Kompleksitas** | O(n²) — sama dengan Versi 1 |
| 🎯 **Cocok Untuk** | Pemrograman grafis, game dev, rendering pixel |

> [!TIP]
> 🏆 **Kapan pilih versi ini?**
> Gunakan Versi 2 saat kamu bekerja dengan **struktur data 1 dimensi** (seperti array datar) yang perlu diperlakukan sebagai grid 2D — misalnya memanipulasi pixel gambar, papan game, atau buffer layar. Teknik ini sangat umum di dunia **game development** dan **computer graphics**.

---

<a name="konsep"></a>
## 💡 Konsep Inti: Membengkokkan Garis Lurus (1D → 2D)

Ide utama versi ini adalah: **papan catur `n × n` sebenarnya hanyalah sebuah garis lurus berisi `n²` kotak yang "dilipat" setiap `n` kotak.**

### Visualisasi untuk `num = 3` (total: `3 × 3 = 9` kotak)

**Pandangan 1D (garis lurus):**
```
Indeks (i):  [ 0 ][ 1 ][ 2 ] [ 3 ][ 4 ][ 5 ] [ 6 ][ 7 ][ 8 ]
```

**Setelah "dilipat" menjadi 2D (papan 3×3):**
```
Baris ke-0:  [ 0 ][ 1 ][ 2 ]   ← i = 0, 1, 2
Baris ke-1:  [ 3 ][ 4 ][ 5 ]   ← i = 3, 4, 5
Baris ke-2:  [ 6 ][ 7 ][ 8 ]   ← i = 6, 7, 8
```

**Pertanyaannya:** Saat `i = 5`, bagaimana program tahu ia berada di **Baris ke-1, Kolom ke-2**?

Jawabannya ada di dua operasi matematika berikut.

---

<a name="matematika"></a>
## 🔮 Sihir Matematika

### 🧮 `Math.floor(i / num)` → Mencari BARIS (`row`)

`Math.floor` membulatkan hasil pembagian ke bawah. Membagi `i` dengan `num` secara natural "mengelompokkan" indeks ke dalam baris-barisnya.

| `i` | `i / num` (÷ 3) | `Math.floor(...)` | `row` |
|:---:|:---:|:---:|:---:|
| 0 | 0.00 | 0 | **0** |
| 1 | 0.33 | 0 | **0** |
| 2 | 0.66 | 0 | **0** |
| 3 | 1.00 | 1 | **1** |
| 4 | 1.33 | 1 | **1** |
| 5 | 1.66 | 1 | **1** |
| 6 | 2.00 | 2 | **2** |
| 7 | 2.33 | 2 | **2** |
| 8 | 2.66 | 2 | **2** |

> *(Kenapa: Pembulatan ke bawah menahan nilai agar **tetap sama sebanyak `num` kali** sebelum naik ke angka berikutnya. Persis seperti "setiap 3 kotak, ganti baris.")*

---

### 🧮 `i % num` → Mencari KOLOM (`col`)

Operator modulo (`%`) menghasilkan sisa bagi. Sisa dari pembagian dengan `num` hanya berputar di antara `0, 1, 2, ..., num-1` — persis seperti nomor kolom!

| `i` | `i % num` (% 3) | `col` |
|:---:|:---:|:---:|
| 0 | 0 | **0** |
| 1 | 1 | **1** |
| 2 | 2 | **2** |
| 3 | 0 | **0** ← reset! |
| 4 | 1 | **1** |
| 5 | 2 | **2** |
| 6 | 0 | **0** ← reset! |
| 7 | 1 | **1** |
| 8 | 2 | **2** |

> *(Kenapa: Modulo me-reset nilainya kembali ke `0` setiap kali mencapai kelipatan `num`. Persis seperti bergerak **dari kiri ke kanan, lalu kembali ke kiri** di setiap baris baru.)*

> [!IMPORTANT]
> 🔑 **Kesimpulan Kunci:**
> ```
> row = Math.floor(i / num)   →  "Sudah berapa kali ganti baris?"
> col = i % num                →  "Sekarang ada di kolom ke-berapa?"
> ```
> Dua rumus ini adalah **universal mapping formula** untuk mengonversi indeks 1D ke koordinat 2D di grid berukuran `num`.

---

<a name="blueprint"></a>
## 🗺️ Blueprint & Kamus Variabel

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|:--------------:|:-----------------:|--------|
| Penampung Akhir | `pattern` | `result`, `res` | Kita menyusun pola visual, bukan hasil kalkulasi |
| Indeks 1D (Loop Tunggal) | `i` | `index`, `n`, `x` | Untuk loop 1D tunggal, `i` masih konvensi yang diterima |
| Baris hasil konversi | `row` | `r`, `baris`, `x` | Hasil konversi tetap mewakili baris — nama harus sama jelasnya |
| Kolom hasil konversi | `col` | `c`, `kolom`, `y` | Idem untuk kolom — konsisten dengan Versi 1 |

### 🗺️ Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Single Loop + 1D→2D Mapping)

const papanCatur = (num) => {
  let pattern = '';                          // [KANVAS] — penampung pola (❌ jangan 'result')

  for (let i = 0; i < num * num; i++) {      // [LOOP TUNGGAL] — iterasi semua sel (n × n kali)
    const row = Math.floor(i / num);         //   [MAPPING BARIS] — konversi indeks 1D → baris
    const col = i % num;                     //   [MAPPING KOLOM] — konversi indeks 1D → kolom

    // [LOGIKA INTI] — cek ganjil/genap, sama persis dengan Versi 1

    if (col === num - 1) { ... }             //   [DETEKSI UJUNG] — pindah baris di akhir kolom
  }

  return pattern;                            // [KEMBALIKAN] — hasilkan string pola lengkap
};
```

---

<a name="kode"></a>
## 💻 Kode Lengkap

```javascript
const papanCatur = (num) => {
  let pattern = '';

  for (let i = 0; i < num * num; i++) {
    const row = Math.floor(i / num);  // Hitung baris saat ini
    const col = i % num;              // Hitung kolom saat ini

    // Logika ganjil-genap sama seperti Versi 1
    pattern += (row + col) % 2 === 0 ? '#' : ' ';

    // Pindah baris jika sudah mencapai ujung kanan
    if (col === num - 1) {
      pattern += '\n';
    }
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

### 1️⃣ Loop Tunggal — Iterasi Semua Sel `[LOOP UTAMA]`

```javascript
for (let i = 0; i < num * num; i++)
```

Alih-alih dua loop bersarang, kita hanya punya satu loop yang berjalan sebanyak `num * num` kali — yaitu total seluruh kotak di papan.

> *(Kenapa `num * num` dan bukan `num`? Karena total kotak di papan berukuran `n × n` adalah `n²` — kita harus mengunjungi setiap sel satu per satu dalam satu garis lurus. Contoh num=3: loop berjalan `3 × 3 = 9` kali, dari `i = 0` sampai `i = 8`, mencakup semua 9 kotak papan.)*

---

### 2️⃣ Pemetaan 1D → 2D `[MAPPING KOORDINAT]`

```javascript
const row = Math.floor(i / num);
const col = i % num;
```

Ini adalah **inti teknik** Versi 2. Setiap nilai `i` dikonversi menjadi pasangan koordinat `(row, col)` — sehingga sisa kode bisa berjalan identik dengan Versi 1.

> *(Kenapa `Math.floor` untuk baris dan `%` untuk kolom? `Math.floor(i / num)` membulatkan ke bawah sehingga nilainya **stagnan selama `num` langkah** sebelum naik — persis pola perpindahan baris. Sementara `i % num` selalu **berputar dari 0 ke num-1** — persis pola kolom yang berulang. Contoh num=3, `i=5`: `Math.floor(5/3)=1` → baris ke-1, `5%3=2` → kolom ke-2. Benar!)*

> *(Kenapa `const` bukan `let`? Karena `row` dan `col` tidak pernah diubah setelah dihitung — hanya dibaca. `const` lebih aman dan mengekspresikan niat kode dengan jelas.)*

---

### 3️⃣ Logika Ganjil-Genap `[KONDISI]`

```javascript
pattern += (row + col) % 2 === 0 ? '#' : ' ';
```

Persis sama dengan Versi 1! Setelah kita punya `row` dan `col`, rumus ganjil-genapnya tidak berubah sama sekali. Inilah bukti bahwa **logika inti bersifat universal** — tidak peduli teknik loopnya apa.

---

### 4️⃣ Deteksi Ujung Baris `[NEWLINE]`

```javascript
if (col === num - 1) {
  pattern += '\n';
}
```

Karena tidak ada loop `row` sebagai "wadah" untuk menyisipkan `\n`, kita harus mendeteksi sendiri kapan sudah berada di ujung kanan.

> *(Kenapa kondisinya `col === num - 1` dan bukan `col === num`? Karena indeks kolom dimulai dari `0`, sehingga kolom terakhir selalu bernilai `num - 1`, bukan `num`. Menggunakan `=== num` tidak akan pernah terpenuhi! Contoh num=3: pindah baris terjadi saat `col === 2` (bukan 3), yaitu di `i = 2, 5, 8` — tepat di akhir setiap baris.)* 

> [!CAUTION]
> ⚠️ **Jebakan Umum!** Jangan tulis `col === num` — kondisi ini **tidak pernah benar** karena `col` maksimal hanya mencapai `num - 1`. Akibatnya, `'\n'` tidak akan pernah disisipkan dan seluruh papan tercetak dalam satu baris horizontal!

---

<a name="simulasi"></a>
## 🧮 Simulasi Langkah (Trace `num = 3`)

| `i` | `row` | `col` | `row+col` | `%2` | Karakter | Pindah Baris? |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 0 | 0 ✅ | `#` | ❌ |
| 1 | 0 | 1 | 1 | 1 | ` ` | ❌ |
| 2 | 0 | 2 | 2 | 0 ✅ | `#` | ✅ `\n` |
| 3 | 1 | 0 | 1 | 1 | ` ` | ❌ |
| 4 | 1 | 1 | 2 | 0 ✅ | `#` | ❌ |
| 5 | 1 | 2 | 3 | 1 | ` ` | ✅ `\n` |
| 6 | 2 | 0 | 2 | 0 ✅ | `#` | ❌ |
| 7 | 2 | 1 | 3 | 1 | ` ` | ❌ |
| 8 | 2 | 2 | 4 | 0 ✅ | `#` | ✅ `\n` |

**Output akhir:**
```
# #
 # 
# #
```

> [!NOTE]
> 💡 **Perbandingan dengan Versi 1:** Hasilnya **identik**! Namun, perhatikan bahwa di Versi 2 indeks dimulai dari `0` (bukan `1`). Ini tidak masalah karena rumus `(row + col) % 2` tetap menghasilkan pola yang sama — hanya "fase" awalnya yang berbeda. Sel `(0,0)` di Versi 2 sama posisinya dengan sel `(1,1)` di Versi 1.

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [03 — Version 1: Nested Loop](./03-version-1-nested-loop.md) | [README](./README.md) | [05 — Version 3: Functional](./05-version-3-functional.md) |
