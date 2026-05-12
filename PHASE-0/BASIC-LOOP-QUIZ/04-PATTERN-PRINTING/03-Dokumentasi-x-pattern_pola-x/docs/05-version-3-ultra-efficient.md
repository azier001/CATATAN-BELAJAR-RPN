# 🚀 Versi 3 — 1D Array Buffer (Ultra Efficient)

### ✨ _Performa absolut: satu array raksasa, nol nested loop, nol string concatenation._

> 🎯 **Tujuan:** Memahami teknik tingkat lanjut yang menghindari string concatenation di dalam loop sepenuhnya, menggunakan satu array lurus raksasa sebagai buffer memori — teknik yang umum dipakai di dunia game engine dan computer graphics.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Profil Versi](#profil) | Ringkasan kapan & kenapa pakai versi ini |
| 💡 | [Konsep Inti: 1D Buffer](#konsep) | Visualisasi "array lurus yang dilipat" |
| 🔮 | [Matematika Indeks](#matematika) | Cara menghitung posisi di array lurus |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + panduan penamaan |
| 💻 | [Kode Lengkap](#kode) | Solusi final siap pakai |
| 🔍 | [Bedah Kode](#bedah) | Penjelasan setiap bagian baris per baris |
| 🧮 | [Simulasi Langkah](#simulasi) | Trace eksekusi dengan angka konkret |
| ⚠️ | [Trade-off: Performa vs Keterbacaan](#tradeoff) | Diskusi kapan teknik ini layak dipakai |

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | 1D Array Buffer (Ultra Efficient) |
| 🔢 **Jumlah Loop** | 1 (loop tunggal) |
| 🧠 **Konsep Utama** | Flat array sebagai buffer memori + rumus indeks matematis |
| 📖 **Readability** | ⭐⭐ (cukup membingungkan untuk manusia) |
| ⚡ **Kompleksitas** | O(N) — hanya loop sebanyak `num`, bukan `num × num`! |
| 🎯 **Cocok Untuk** | Performa-oriented, game dev, rendering pixel |

> [!WARNING]
> ⚠️ **Versi ini bukan untuk pemula!**
> Gunakan Versi 3 **hanya** jika performa adalah prioritas utama (misalnya grid berukuran sangat besar). Untuk ujian, code review, atau pekerjaan tim, gunakan Versi 1 atau Versi 2 yang jauh lebih mudah dibaca.

---

<a name="konsep"></a>
## 💡 Konsep Inti: Array Lurus yang "Dilipat"

Bayangkan kamu sedang menyusun ubin di lantai berukuran 3×3. Alih-alih menyusunnya baris per baris, kamu **membeli semua ubin sekaligus** dan meletakkannya dalam satu garis panjang. Lalu, kamu menandai di posisi mana saja bintang dan enter harus diletakkan.

### Mengapa Lebar Baris = `num + 1`?

Setiap baris di pola kita tidak hanya berisi `num` karakter (bintang/spasi), tapi juga **1 karakter tambahan yang tak terlihat**: `\n` (*enter*). Jadi lebar aktual satu baris adalah `num + 1`.

```text
Contoh num = 3:

Baris 0:  [ * ] [   ] [ * ] [ \n ]    ← 3 karakter + 1 enter = 4 slot
Baris 1:  [   ] [ * ] [   ] [ \n ]    ← 3 karakter + 1 enter = 4 slot
Baris 2:  [ * ] [   ] [ * ] [ \n ]    ← 3 karakter + 1 enter = 4 slot

Total slot = 4 × 3 = 12 slot
```

### Visualisasi Array Lurus

Semua 12 slot di atas dibariskan menjadi satu garis lurus:

```text
Indeks:  [ 0 ][ 1 ][ 2 ][ 3 ][ 4 ][ 5 ][ 6 ][ 7 ][ 8 ][ 9 ][10 ][11 ]
Isi:     [ * ][   ][ * ][\n ][   ][ * ][   ][\n ][ * ][   ][ * ][\n ]
         |←── Baris 0 ──→|  |←── Baris 1 ──→|  |←── Baris 2 ──→|
```

**Pertanyaannya:** Jika kita hanya punya indeks `0` sampai `11`, bagaimana kita tahu di mana bintang harus diletakkan?

---

<a name="matematika"></a>
## 🔮 Matematika Indeks

### 🧮 `awalBaris` — Titik Mulai Setiap Baris

Rumus: `awalBaris = row × (num + 1)`

Karena setiap baris memakan `num + 1` slot (termasuk enter), maka titik awal baris ke-`row` adalah kelipatan dari `num + 1`.

| `row` | `row × (num + 1)` | `awalBaris` | Keterangan |
|:---:|:---:|:---:|:---|
| 0 | 0 × 4 | **0** | Baris 0 dimulai di indeks 0 |
| 1 | 1 × 4 | **4** | Baris 1 dimulai di indeks 4 |
| 2 | 2 × 4 | **8** | Baris 2 dimulai di indeks 8 |

> *(Kenapa dikali `num + 1` bukan `num`? Karena kita harus memperhitungkan slot untuk karakter `\n` di ujung setiap baris. Tanpa `+1`, baris-barisnya akan saling tumpang tindih!)*

---

### 🧮 Posisi Enter — Ujung Kanan Baris

Rumus: `awalBaris + num`

Enter selalu diletakkan di **slot terakhir** setiap baris, yaitu sejauh `num` langkah dari `awalBaris`.

| `row` | `awalBaris` | `awalBaris + num` | Indeks Enter |
|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 + 3 | **3** |
| 1 | 4 | 4 + 3 | **7** |
| 2 | 8 | 8 + 3 | **11** |

---

### 🧮 Posisi Bintang Diagonal Utama (`\`)

Rumus: `awalBaris + row`

Bintang diagonal utama selalu berjarak `row` langkah dari awal barisnya.

| `row` | `awalBaris` | `awalBaris + row` | Indeks Bintang |
|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 + 0 | **0** |
| 1 | 4 | 4 + 1 | **5** |
| 2 | 8 | 8 + 2 | **10** |

---

### 🧮 Posisi Bintang Diagonal Terbalik (`/`)

Rumus: `awalBaris + (num - 1 - row)`

Bintang diagonal terbalik selalu berjarak `num - 1 - row` langkah dari awal barisnya.

| `row` | `awalBaris` | `num - 1 - row` | `awalBaris + (num-1-row)` | Indeks Bintang |
|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | 2 | 0 + 2 | **2** |
| 1 | 4 | 1 | 4 + 1 | **5** |
| 2 | 8 | 0 | 8 + 0 | **8** |

> [!IMPORTANT]
> 🔑 **Kesimpulan Kunci:**
> Semua rumus di atas hanyalah **variasi dari satu ide**: titik awal baris (`awalBaris`) ditambah offset posisi di dalam baris tersebut. Dengan kata lain:
> ```
> posisi_di_array_lurus = (nomor_baris × lebar_per_baris) + jarak_dari_kiri
> ```

---

<a name="blueprint"></a>
## 🗺️ Blueprint & Kamus Variabel

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|:--------------:|:-----------------:|--------|
| Array Raksasa | `grid` | `arr`, `a`, `buffer` | "Grid" menjelaskan bahwa ini mewakili seluruh pola |
| Panjang Total | `panjangTotal` | `len`, `n`, `total` | Deskriptif, langsung terbaca maknanya |
| Loop Utama | `row` | `i`, `x`, `r` | Konsisten dengan versi lain — tetap mewakili baris |
| Titik Mulai Baris | `awalBaris` | `start`, `s`, `idx` | Menjelaskan perannya sebagai "titik awal baris ke-N" |

### 🗺️ Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: 1D Array Buffer)

const polaX = (num) => {
  const panjangTotal = (num + 1) * num;          // [HITUNG TOTAL] → total slot yang dibutuhkan
  const grid = Array(panjangTotal).fill(' ');     // [PESAN MEMORI] → satu array raksasa berisi spasi

  for (let row = 0; row < num; row++) {           // [LOOP UTAMA] → hanya loop num kali!
    const awalBaris = row * (num + 1);            //   [KOMPAS] → titik mulai baris ini
    // [ENTER]    → sisipkan '\n' di ujung baris
    // [TEMBAK 1] → bintang diagonal utama
    // [TEMBAK 2] → bintang diagonal terbalik
  }

  return grid.join('');                           // [LEBUR] → gabung SEMUA jadi string 1 kali
};
```

---

<a name="kode"></a>
## 💻 Kode Lengkap

```javascript
const polaX = (num) => {
  // 1. Pesan memori SATU KALI di awal
  //    Panjang total = (num kolom + 1 karakter enter) × num baris
  const panjangTotal = (num + 1) * num;
  const grid = Array(panjangTotal).fill(' ');

  // 2. Loop hanya sebanyak num (bukan num × num!)
  for (let row = 0; row < num; row++) {
    const awalBaris = row * (num + 1);       // Titik mulai setiap baris

    grid[awalBaris + num] = '\n';            // Sisipkan enter di ujung baris
    grid[awalBaris + row] = '*';             // Tembak diagonal utama
    grid[awalBaris + (num - 1 - row)] = '*'; // Tembak diagonal terbalik
  }

  // 3. Lebur jadi string SATU KALI saja di akhir
  return grid.join('');
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

### 1️⃣ Memesan Memori `[PESAN MEMORI]`

```javascript
const panjangTotal = (num + 1) * num;
const grid = Array(panjangTotal).fill(' ');
```

Kita membuat **satu** array raksasa di awal program yang cukup menampung **seluruh** karakter pola (termasuk enter).

> *(Kenapa satu array saja? Ini adalah **kunci efisiensi** Versi 3. Di Versi 1 dan 2, kita melakukan `pattern += ...` ratusan kali di dalam loop — setiap kali string baru dibuat di memori karena string bersifat immutable. Di Versi 3, array hanya dibuat SATU KALI, dan kita cukup "menembak" nilai ke indeks yang tepat tanpa membuat objek baru.)*

---

### 2️⃣ Menghitung Titik Mulai `[KOMPAS]`

```javascript
const awalBaris = row * (num + 1);
```

Ini adalah "kompas" kita di dalam array lurus. Tanpa rumus ini, kita tidak tahu di mana sebuah baris baru dimulai.

> *(Contoh num=5: Saat `row = 2`, `awalBaris = 2 × 6 = 12`. Artinya baris ke-2 dimulai di indeks 12 dalam array lurus kita.)*

---

### 3️⃣ Menyisipkan Enter `[ENTER]`

```javascript
grid[awalBaris + num] = '\n';
```

Enter diletakkan tepat di **ujung paling kanan** baris, yaitu sejauh `num` langkah dari checkpoint.

> *(Contoh: Baris ke-0 (`awalBaris = 0`): enter di indeks `0 + 5 = 5`. Baris ke-1 (`awalBaris = 6`): enter di indeks `6 + 5 = 11`.)*

---

### 4️⃣ Menembak Diagonal Utama `[TEMBAK 1]`

```javascript
grid[awalBaris + row] = '*';
```

Bintang diagonal utama ditembakkan ke posisi yang jaraknya dari pinggir kiri selalu sama dengan nomor barisnya.

> *(Contoh: Baris ke-3 (`awalBaris = 18`): bintang di indeks `18 + 3 = 21`.)*

---

### 5️⃣ Menembak Diagonal Terbalik `[TEMBAK 2]`

```javascript
grid[awalBaris + (num - 1 - row)] = '*';
```

Bintang diagonal terbalik ditembakkan ke posisi yang semakin bergeser ke kiri seiring bertambahnya baris.

> *(Contoh num=5: Baris ke-0 → offset = `5-1-0 = 4` (paling kanan). Baris ke-4 → offset = `5-1-4 = 0` (paling kiri). Garis `/` terbentuk!)*

---

### 6️⃣ Melebur Semua `[LEBUR]`

```javascript
return grid.join('');
```

Ini adalah satu-satunya momen di mana string dibuat. Seluruh array raksasa dilebur menjadi satu string utuh dalam **satu operasi tunggal**.

> *(Kenapa ini efisien? Di Versi 1, setiap `pattern += '*'` membuat string baru di memori. Jika `num = 100`, terjadi `100 × 100 = 10.000` pembuatan string. Di Versi 3, pembuatan string hanya terjadi **1 kali** di sini.)*

---

<a name="simulasi"></a>
## 🧮 Simulasi Langkah (Trace `num = 3`)

**Setup:** `panjangTotal = 4 × 3 = 12`. Grid awal: 12 slot berisi spasi.

```
Indeks: [ 0 ][ 1 ][ 2 ][ 3 ][ 4 ][ 5 ][ 6 ][ 7 ][ 8 ][ 9 ][10 ][11 ]
Awal:   [ ' '][ ' '][ ' '][ ' '][ ' '][ ' '][ ' '][ ' '][ ' '][ ' '][ ' '][ ' ']
```

### Iterasi `row = 0` (`awalBaris = 0`)

| Operasi | Indeks | Nilai | Keterangan |
|:--------|:------:|:-----:|:-----------|
| Enter | `0 + 3 = 3` | `\n` | Ujung baris 0 |
| Diagonal `\` | `0 + 0 = 0` | `*` | Pojok kiri atas |
| Diagonal `/` | `0 + 2 = 2` | `*` | Pojok kanan atas |

```
[ * ][ ' '][ * ][\n ][ ' '][ ' '][ ' '][ ' '][ ' '][ ' '][ ' '][ ' ']
```

### Iterasi `row = 1` (`awalBaris = 4`)

| Operasi | Indeks | Nilai | Keterangan |
|:--------|:------:|:-----:|:-----------|
| Enter | `4 + 3 = 7` | `\n` | Ujung baris 1 |
| Diagonal `\` | `4 + 1 = 5` | `*` | Tengah |
| Diagonal `/` | `4 + 1 = 5` | `*` | Sama! (titik pusat X) |

```
[ * ][ ' '][ * ][\n ][ ' '][ * ][ ' '][\n ][ ' '][ ' '][ ' '][ ' ']
```

### Iterasi `row = 2` (`awalBaris = 8`)

| Operasi | Indeks | Nilai | Keterangan |
|:--------|:------:|:-----:|:-----------|
| Enter | `8 + 3 = 11` | `\n` | Ujung baris 2 |
| Diagonal `\` | `8 + 2 = 10` | `*` | Pojok kanan bawah |
| Diagonal `/` | `8 + 0 = 8` | `*` | Pojok kiri bawah |

```
[ * ][ ' '][ * ][\n ][ ' '][ * ][ ' '][\n ][ * ][ ' '][ * ][\n ]
```

### Hasil `.join('')`:

```
* *
 *
* *
```

✅ Sempurna!

---

<a name="tradeoff"></a>
## ⚠️ Trade-off: Performa vs Keterbacaan

Ini adalah pelajaran terpenting dari Versi 3:

### ⚡ Kelebihan (Disukai Mesin)

| Aspek | Detail |
|:------|:-------|
| **Time Complexity** | O(N) — loop hanya berputar `num` kali, bukan `num × num` |
| **Array Creation** | Array hanya dibuat **1 kali** di awal, bukan setiap iterasi |
| **String Concatenation** | **Nol** operasi `+=` pada string di dalam loop |
| **Memory Allocation** | Semua memori dipesan di awal, Garbage Collector tidak perlu bekerja keras |

### 😵 Kekurangan (Dibenci Manusia)

| Aspek | Detail |
|:------|:-------|
| **Mental Gymnastics** | Rumus `awalBaris + row` bikin sakit kepala |
| **Rentan Bug** | Salah ketik satu angka di rumus indeks = pola kacau dan susah di-debug |
| **Code Review** | Rekan tim butuh waktu lama untuk memahami logikanya |
| **Maintenance** | Jika ada perubahan requirement, kode ini jauh lebih sulit dimodifikasi |

> [!CAUTION]
> 🏭 **Pelajaran dari dunia industri:**
> Di dunia kerja nyata, kita **hampir selalu** mengutamakan kode yang *"sedikit lebih lambat tapi mudah dibaca oleh tim"* daripada *"super cepat tapi bikin pusing seluruh departemen."*
>
> Versi 3 ini hanya digunakan jika:
> - Grid berukuran **sangat besar** (ribuan × ribuan)
> - Kode berjalan di **lingkungan terbatas** (embedded systems, game loop 60fps)
> - Performa sudah dibuktikan menjadi **bottleneck** melalui profiling

### 📊 Ringkasan Trade-off

```
   Keterbacaan ←───────────────────────────→ Performa
      ⭐⭐⭐⭐⭐                                    ⭐⭐⭐
      Versi 1                                     Versi 1
      (Nested Loop)                               (Nested Loop)

         ⭐⭐⭐⭐                                 ⭐⭐⭐
         Versi 2                                  Versi 2
         (Array.fill)                             (Array.fill)

            ⭐⭐                              ⭐⭐⭐⭐⭐
            Versi 3                            Versi 3
            (1D Buffer)                        (1D Buffer)
```

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [04 — Version 2: Single Loop](./04-version-2-single-loop.md) | [README](../README.md) | [06 — Challenge Insight](./06-challenge-insight.md) |
