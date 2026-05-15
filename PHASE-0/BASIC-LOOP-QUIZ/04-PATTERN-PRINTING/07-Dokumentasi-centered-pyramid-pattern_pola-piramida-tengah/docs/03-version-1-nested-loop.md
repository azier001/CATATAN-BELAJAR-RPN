# 🔁 Versi 1 — Nested Loop (1-Indexed)

### ✨ _Pendekatan paling fundamental: dua nested loop bersarang untuk spasi pendorong dan bintang berjarak._

> 🎯 **Tujuan:** Memahami solusi paling dasar menggunakan nested loop manual, di mana setiap komponen piramida (spasi dan bintang) dibangun karakter per karakter melalui loop terpisah.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Profil Versi](#profil) | Ringkasan kapan & kenapa pakai versi ini |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + panduan penamaan |
| 💻 | [Kode Lengkap](#kode) | Solusi final siap pakai |
| 🔍 | [Bedah Kode](#bedah) | Penjelasan setiap bagian baris per baris |
| 🧮 | [Simulasi Langkah](#simulasi) | Trace eksekusi dengan angka konkret |

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | Nested Loop (1-Indexed) |
| 🔢 **Jumlah Loop** | 3 (1 luar + 2 nested) |
| 🧠 **Konsep Utama** | Loop spasi (`num - row`) + Loop bintang (`row`) |
| 📖 **Readability** | ⭐⭐⭐⭐ (sangat mudah dibaca) |
| ⚡ **Kompleksitas** | O(n²) — sebanding luas piramida |
| 🎯 **Cocok Untuk** | Pemula, ujian, saat soal **mewajibkan** nested loop |

> [!TIP]
> 🏆 **Kapan pilih versi ini?**
> Gunakan Versi 1 saat soal **mewajibkan penggunaan nested loop** atau saat kamu ingin **melatih pemahaman fundamental** tentang cara kerja loop bersarang. Versi ini paling "berbicara sendiri" — setiap loop punya peran yang jelas dan terpisah.

---

<a name="blueprint"></a>
## 🗺️ Blueprint & Kamus Variabel

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|:--------------:|:-----------------:|--------|
| Parameter Input | `num` | `n`, `x` | Sudah konvensi soal; `num` cukup deskriptif |
| Penampung Pola | `pattern` | `result`, `res`, `str` | Kita menyusun **pola visual**, bukan hasil hitungan |
| Loop Utama (Baris) | `row` | `i`, `x`, `a` | Merepresentasikan **baris ke-berapa** |
| Nested Loop Spasi | `space` | `j`, `s` | Penghitung **spasi pendorong** |
| Nested Loop Bintang | `star` | `k`, `b` | Penghitung **bintang pembentuk** |

### 🗺️ Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Spasi Pendorong + Bintang Berjarak = Piramida Tengah)

function piramida2(num) {
  let pattern = '';                              // [KANVAS] penampung pola (❌ jangan 'result')

  for (let row = 1; ...) {                       // [LOOP UTAMA] → baris ke-berapa
    for (let space = 1; ...) { ... }             //   [NESTED 1] → cetak spasi pendorong
    for (let star = 1; ...) { ... }              //   [NESTED 2] → cetak bintang berjarak
    pattern += '\n';                             //   [PINDAH BARIS]
  }

  return pattern;                                // [RETURN] kembalikan hasil akhir
}
```

---

<a name="kode"></a>
## 💻 Kode Lengkap

```javascript
// ✅ VERSI 1 — Nested Loop (1-Indexed, Clean Code)
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    // Spasi pendorong — mendorong bintang ke kanan
    for (let space = 1; space <= num - row; space++) {
      pattern += ' ';
    }

    // Bintang pembentuk piramida
    for (let star = 1; star <= row; star++) {
      pattern += '* ';
    }

    pattern += '\n';
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

### 1️⃣ Inisialisasi Kanvas `[KANVAS]`

```javascript
let pattern = '';
```

Variabel `pattern` adalah **kanvas kosong** tempat kita "melukis" pola piramida satu karakter per satu karakter.

> *(Kenapa string kosong? Karena kita akan menempelkan karakter satu per satu ke string ini — seperti melukis di kanvas putih. Dimulai dari `''`, lalu bertambah menjadi `' '`, `'  '`, `'   *'`, dst.)*

---

### 2️⃣ Loop Utama — Bergerak ke Bawah `[LOOP UTAMA]`

```javascript
for (let row = 1; row <= num; row++)
```

Loop ini berjalan sebanyak `num` kali, mewakili pergerakan **dari baris puncak ke baris dasar**.

> *(Kenapa mulai dari `1`? Agar rumus `num - row` (spasi) dan `row` (bintang) menghasilkan angka yang langsung sesuai tabel analisis tanpa penyesuaian. Contoh num=5: loop menghasilkan `row = 1, 2, 3, 4, 5` — tepat 5 baris. Baris ke-1 = 1 bintang, baris ke-3 = 3 bintang.)*

---

### 3️⃣ Nested Loop Spasi — Mendorong ke Kanan `[NESTED 1]`

```javascript
for (let space = 1; space <= num - row; space++) {
  pattern += ' ';
}
```

Loop ini mencetak spasi kosong sebanyak `num - row` kali di awal setiap baris.

> *(Kenapa `num - row`? Spasi pendorong berfungsi memusatkan piramida. Semakin turun baris, semakin sedikit dorongan yang dibutuhkan. Contoh num=5: baris ke-1 → `5-1 = 4` spasi, baris ke-3 → `5-3 = 2` spasi, baris ke-5 → `5-5 = 0` spasi.)*

---

### 4️⃣ Nested Loop Bintang — Membentuk Piramida `[NESTED 2]`

```javascript
for (let star = 1; star <= row; star++) {
  pattern += '* ';
}
```

Loop ini mencetak karakter `'* '` (bintang + spasi) sebanyak `row` kali.

> *(Kenapa `row`? Jumlah bintang = nomor baris saat itu. Baris ke-1 → 1 bintang, baris ke-4 → 4 bintang. Kenapa `'* '` bukan `'*'`? Spasi setelah bintang membuat jarak visual antar bintang agar piramida terlihat simetris dan rapi.)*

---

### 5️⃣ Pindah Baris `[NEWLINE]`

```javascript
pattern += '\n';
```

Setelah kedua nested loop selesai, tambahkan karakter **newline** untuk pindah ke baris berikutnya.

> *(Kenapa `'\n'` berada di luar kedua nested loop? Karena kita hanya ingin pindah baris **sekali** setelah satu baris penuh selesai. Contoh: setelah `'    * '` selesai dicetak untuk baris ke-1, baru tambahkan `\n`.)*

> [!CAUTION]
> ⚠️ **Jebakan Klasik!** `pattern += '\n'` harus berada di **luar** kedua nested loop tapi **di dalam** loop utama `row`.
>
> ```
> ✅ BENAR                      ❌ SALAH
> for row:                      for row:
>   for space: ...                for space: ...
>   for star: ...                 for star: ...
>   pattern += '\n'  ← di sini     pattern += '\n'  ← bukan di sini!
> ```

---

<a name="simulasi"></a>
## 🧮 Simulasi Langkah (Trace `num = 3`)

Mari kita telusuri eksekusi kode langkah demi langkah untuk `piramida2(3)`.

### Baris ke-1 (`row = 1`)

| Tahap | Loop | Kondisi | Karakter | `pattern` sejauh ini |
|:---:|:---:|:---:|:---:|:---|
| 1 | `space` | `space <= 3-1=2` → jalan 2× | `' '` × 2 | `"  "` |
| 2 | `star` | `star <= 1` → jalan 1× | `'* '` × 1 | `"  * "` |
| 3 | newline | — | `'\n'` | `"  * \n"` |

### Baris ke-2 (`row = 2`)

| Tahap | Loop | Kondisi | Karakter | `pattern` sejauh ini |
|:---:|:---:|:---:|:---:|:---|
| 4 | `space` | `space <= 3-2=1` → jalan 1× | `' '` × 1 | `"  * \n "` |
| 5 | `star` | `star <= 2` → jalan 2× | `'* '` × 2 | `"  * \n * * "` |
| 6 | newline | — | `'\n'` | `"  * \n * * \n"` |

### Baris ke-3 (`row = 3`)

| Tahap | Loop | Kondisi | Karakter | `pattern` sejauh ini |
|:---:|:---:|:---:|:---:|:---|
| 7 | `space` | `space <= 3-3=0` → skip! | — | (tidak berubah) |
| 8 | `star` | `star <= 3` → jalan 3× | `'* '` × 3 | `"  * \n * * \n* * * "` |
| 9 | newline | — | `'\n'` | `"  * \n * * \n* * * \n"` |

**Output akhir saat di-print:**
```
  *
 * *
* * *
```

> [!NOTE]
> 📌 **Perhatikan Tahap 7** (`row=3`): Kondisi loop spasi adalah `space <= 3-3=0`, yang langsung **false** — sehingga loop spasi **dilewati sepenuhnya** (tidak ada spasi pendorong). Ini benar karena baris terakhir piramida dimulai dari ujung paling kiri!

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [02 — Problem Solving Approach](./02-problem-solving-approach.md) | [README](../README.md) | [04 — Version 2: Built-in Repeat](./04-version-2-built-in-repeat.md) |
