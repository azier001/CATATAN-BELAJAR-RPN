# 🧮 Dokumentasi Challenge: `cariMean` — Mencari Rata-Rata Array

### ✨ _Memahami konsep Mean (rata-rata) dari nol hingga solusi elegan dengan dua pendekatan berbeda_

> 🎯 **Tujuan:** Setelah membaca dokumentasi ini, kamu akan mampu menghitung nilai rata-rata (mean) dari sebuah array angka menggunakan JavaScript, memahami kapan menggunakan `Math.round()`, dan menguasai dua pendekatan solusi (`for...of` loop vs `reduce` method).

---

### 📑 Daftar Isi

| No  | Bagian                                            | Deskripsi                                            |
| --- | ------------------------------------------------- | ---------------------------------------------------- |
| 📖  | [Latar Belakang](#latar-belakang)                 | Apa itu Mean dan kenapa kita perlu membulatkannya    |
| 🔍  | [Pilar 1 — Visualisasi & Analisis Pola](#pilar-1) | Tabel breakdown input → output untuk menemukan rumus |
| 🧠  | [Pilar 2 — Algoritma Tahan Lupa](#pilar-2)        | Langkah-langkah algoritma dengan penjelasan "Kenapa" |
| 🗺️  | [Pilar 3 — Blueprint + Kamus Variabel](#pilar-3)  | Kerangka kode dan panduan penamaan variabel          |
| 🪜  | [Pilar 4 — Pendekatan Bertahap](#pilar-4)         | Membangun solusi step-by-step dari nol               |
| 🔄  | [Pilar 5 — Evolusi Solusi](#pilar-5)              | Dua versi solusi dan perbandingannya                 |
| 🏷️  | [Pilar 6 — Naming Convention](#pilar-6)           | Tabel best practice penamaan variabel                |
| ⚠️  | [Pilar 7 — Akurasi Logika (Gotchas)](#pilar-7)    | Jebakan umum yang harus diwaspadai                   |
| ✅  | [Verifikasi](#verifikasi)                         | Test cases dan cara membuktikan solusi benar         |

---

<a name="latar-belakang"></a>

## 📖 Latar Belakang

**Mean** (rata-rata) adalah salah satu konsep statistika paling dasar yang sering kita temui dalam pemrograman. Cara menghitungnya sederhana: **jumlahkan semua angka, lalu bagi dengan banyaknya angka.**

> [!TIP]
> 💡 **Analogi Mudah Dipahami**
>
> |     | Dunia Nyata 🍕                                                                             | Dunia Kode 💻                                                      |
> | --- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
> | 📝  | 3 orang patungan beli pizza seharga Rp 21.000. Rata-rata bayar = 21.000 ÷ 3 = **Rp 7.000** | Array `[5000, 9000, 7000]`. Mean = (5000+9000+7000) ÷ 3 = **7000** |
> | 🔒  | Setiap orang bayar jumlah yang sama rata                                                   | Setiap elemen array "menyumbang" ke total yang dibagi rata         |

### 💡 Jadi, Apa Tantangannya?

Tantangan `cariMean` meminta kita menghitung rata-rata dari sebuah array angka. Namun ada satu twist: hasilnya harus berupa **bilangan bulat** (integer). Jika hasil pembagian menghasilkan desimal, kita harus **membulatkan ke bilangan bulat terdekat** menggunakan `Math.round()`.

---

<a name="pilar-1"></a>

## 🔍 Pilar 1 — Visualisasi & Analisis Pola

> ⚠️ **Di fase ini, kita TIDAK menulis kode apapun.** Murni analisis logika dan matematika!

Mari kita bedah setiap test case ke dalam tabel untuk menemukan pola dan rumus:

| Input Array (`arr`) | Total Jumlah (`sum`) | Jumlah Elemen (`length`) | Hasil Bagi (`sum / length`) | Output Akhir (Dibulatkan) |
| :------------------ | :------------------: | :----------------------: | :-------------------------: | :-----------------------: |
| `[1, 2, 3, 4, 5]`   |  1+2+3+4+5 = **15**  |          **5**           |      15 ÷ 5 = **3.0**       |         **3** ✅          |
| `[3, 5, 7, 5, 3]`   |  3+5+7+5+3 = **23**  |          **5**           |      23 ÷ 5 = **4.6**       |         **5** ✅          |
| `[6, 5, 4, 7, 3]`   |  6+5+4+7+3 = **25**  |          **5**           |      25 ÷ 5 = **5.0**       |         **5** ✅          |
| `[1, 3, 3]`         |    1+3+3 = **7**     |          **3**           |     7 ÷ 3 = **2.33...**     |         **2** ✅          |
| `[7, 7, 7, 7, 7]`   |  7+7+7+7+7 = **35**  |          **5**           |      35 ÷ 5 = **7.0**       |         **7** ✅          |

### 🔑 Rumus yang Ditemukan

```
Output = Math.round( sum / length )
```

Perhatikan buktinya:

- `4.6` → dibulatkan ke atas → **5** (karena `.6` ≥ `.5`)
- `2.33...` → dibulatkan ke bawah → **2** (karena `.33` < `.5`)
- `3.0`, `5.0`, `7.0` → sudah bulat, tidak berubah

> [!IMPORTANT]
> 🔔 **Aturan `Math.round()`:** Jika desimal **≥ 0.5**, bulatkan ke **atas**. Jika desimal **< 0.5**, bulatkan ke **bawah**. Ini berbeda dari `Math.floor()` (selalu ke bawah) dan `Math.ceil()` (selalu ke atas).

---

<a name="pilar-2"></a>

## 🧠 Pilar 2 — Algoritma Tahan Lupa

Setiap langkah di bawah ini dilengkapi dengan penjelasan **"Kenapa"** dan **contoh angka konkret** agar mudah diingat.

> 1. **Menyiapkan Penampung Total `[DEKLARASI VARIABEL]`**:
>    - Buat variabel `sum` dengan nilai awal `0`. _(Kenapa 0? Karena 0 adalah identitas penjumlahan — menambahkan 0 ke angka apapun tidak mengubah hasilnya. Contoh: 0 + 1 = 1, bukan mengacaukan hitungan)._
> 2. **Menjumlahkan Seluruh Elemen `[LOOP]`**:
>    - Iterasi setiap elemen `number` di dalam `arr`, lalu tambahkan ke `sum`. _(Kenapa pakai loop? Karena kita tidak tahu berapa panjang array — bisa 3, bisa 5, bisa 100. Loop memastikan semua elemen terjumlahkan. Contoh: arr = `[1,3,3]` → iterasi ke-1: sum = 0+1 = 1, iterasi ke-2: sum = 1+3 = 4, iterasi ke-3: sum = 4+3 = 7)._
> 3. **Menghitung Rata-Rata `[PEMBAGIAN]`**:
>    - Bagi `sum` dengan `arr.length`. _(Kenapa `.length`? Karena `.length` secara otomatis menghitung jumlah elemen array tanpa perlu kita hitung manual. Contoh: `[1,3,3].length` = 3, maka 7 ÷ 3 = 2.33...)._
> 4. **Membulatkan Hasil `[MATH.ROUND]`**:
>    - Bungkus hasil pembagian dengan `Math.round()`. _(Kenapa `round` bukan `floor`? Karena soal meminta pembulatan ke terdekat, bukan selalu ke bawah. Contoh: `Math.round(4.6)` = 5, tapi `Math.floor(4.6)` = 4 — yang salah!)._

---

<a name="pilar-3"></a>

## 🗺️ Pilar 3 — Blueprint + Kamus Variabel

### A. Kamus Variabel

| Lokasi / Peran      | ✅ Rekomendasi        | ❌ Jangan Gunakan | Alasan                                                              |
| ------------------- | --------------------- | ----------------- | ------------------------------------------------------------------- |
| **Parameter Utama** | `arr` atau `numbers`  | `a`, `x`, `data`  | Memperjelas bahwa inputnya adalah sekumpulan angka dalam array      |
| **Penampung Total** | `sum` atau `total`    | `temp`, `s`, `x`  | Langsung menerangkan fungsinya: menyimpan total penjumlahan         |
| **Iteran Elemen**   | `number` atau `num`   | `el`, `i`, `v`    | Jelas bahwa setiap item yang diiterasi adalah sebuah angka tunggal  |
| **Hasil Rata-Rata** | `mean` atau `average` | `res`, `r`, `val` | Mendeskripsikan bahwa ini adalah nilai rata-rata sebelum dibulatkan |

### B. Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Jumlahkan → Bagi → Bulatkan)

function cariMean(arr) {
  let sum = 0; // [PENAMPUNG] total penjumlahan (❌ jangan 'temp')

  for (const number of arr) {
    // [LOOP] → iterasi setiap elemen
    sum += number; //   [AKUMULASI] → tambahkan ke total
  }

  return Math.round(sum / arr.length); // [HASIL] → bagi lalu bulatkan terdekat
}
```

---

<a name="pilar-4"></a>

## 🪜 Pilar 4 — Pendekatan Bertahap (Step-by-Step)

Kita tidak langsung menulis solusi lengkap. Kita membangunnya bertahap:

---

**1.** 🧱 **Step 1 — Buat fungsi dan loop penjumlahan saja dulu**

Fokus pertama: pastikan kita bisa menjumlahkan seluruh elemen array.

```javascript
const cariMean = (arr) => {
  let sum = 0;

  for (const number of arr) {
    sum += number;
  }

  return sum; // sementara return total dulu
};

// Test: cariMean([1, 2, 3, 4, 5]) → 15 ✅ (total benar!)
```

> [!NOTE]
> 💡 **Kenapa step ini penting?** Dengan memverifikasi penjumlahan dulu, kita bisa memastikan loop kita bekerja dengan benar sebelum menambahkan logika pembagian dan pembulatan. Debugging jadi lebih mudah!

---

**2.** ➗ **Step 2 — Tambahkan pembagian dan pembulatan**

Setelah yakin `sum` menghasilkan total yang benar, kita tinggal modifikasi bagian `return`:

```javascript
const cariMean = (arr) => {
  let sum = 0;

  for (const number of arr) {
    sum += number;
  }

  return Math.round(sum / arr.length); // ✅ bagi lalu bulatkan!
};

// Test: cariMean([1, 2, 3, 4, 5]) → 3 ✅
// Test: cariMean([3, 5, 7, 5, 3]) → 5 ✅
// Test: cariMean([1, 3, 3])       → 2 ✅
```

🎊 **Selesai!** Solusi pertama berhasil:

```
✅ Loop penjumlahan  →  bekerja dengan benar
✅ Pembagian          →  sum / arr.length menghasilkan desimal yang tepat
✅ Pembulatan         →  Math.round() membulatkan ke bilangan terdekat
```

---

<a name="pilar-5"></a>

## 🔄 Pilar 5 — Evolusi Solusi (2 Versi)

### Versi 1 — `for...of` Loop (Imperative)

```javascript
function cariMean(arr) {
  let sum = 0;

  for (const number of arr) {
    sum += number;
  }

  return Math.round(sum / arr.length);
}
```

### Versi 2 — `reduce` Method (Declarative)

```javascript
function cariMean(arr) {
  const mean = arr.reduce((total, number) => total + number, 0) / arr.length;

  return Math.round(mean);
}
```

### ⚖️ Perbandingan Kedua Versi

| Aspek                    |              Versi 1 — `for...of` 🔵               |                Versi 2 — `reduce` 🟢                 |
| :----------------------- | :------------------------------------------------: | :--------------------------------------------------: |
| **Gaya Penulisan**       |        _Imperative_ (langkah demi langkah)         |           _Declarative_ (fokus pada hasil)           |
| **Keterbacaan Pemula**   |              ✅ Sangat mudah dipahami              |            ⚠️ Perlu paham konsep `reduce`            |
| **Keringkasan**          |      ⚠️ Butuh deklarasi `let sum = 0` manual       |      ✅ Lebih ringkas, tanpa variabel tambahan       |
| **Performa**             | ✅ Sedikit lebih cepat (tanpa overhead _callback_) | ⚠️ Sedikit lebih lambat (ada _callback_ per iterasi) |
| **Popularitas Industri** |              ✅ Klasik dan universal               |        ✅ Disukai di _functional programming_        |
| **Hasil Akhir**          |                      ✅ Sama                       |                       ✅ Sama                        |

> [!TIP]
> 🏆 **Kesimpulan:** Untuk kasus sederhana seperti ini, **kedua versi sama baiknya**. Gunakan `for...of` jika tim kamu banyak pemula, dan gunakan `reduce` jika ingin kode yang lebih ringkas dan _functional_. Yang penting: **konsisten** dalam satu proyek!

---

<a name="pilar-6"></a>

## 🏷️ Pilar 6 — Naming Convention

### Tabel Best Practice Penamaan

| Variabel          |       ❌ Bad       |      ✅ Good      | Alasan                                            |
| :---------------- | :----------------: | :---------------: | :------------------------------------------------ |
| Parameter array   |  `a`, `x`, `data`  | `arr`, `numbers`  | Langsung jelas bahwa ini adalah kumpulan angka    |
| Penampung total   |  `temp`, `s`, `t`  |  `sum`, `total`   | Menggambarkan fungsi: menyimpan hasil penjumlahan |
| Elemen iterasi    |   `el`, `i`, `v`   |  `number`, `num`  | Jelas bahwa setiap item adalah angka tunggal      |
| Hasil rata-rata   | `r`, `res`, `val`  | `mean`, `average` | Spesifik mendeskripsikan nilainya: rata-rata      |
| Akumulator reduce | `a`, `acc`, `prev` |  `total`, `sum`   | Lebih deskriptif daripada singkatan generik       |

> [!NOTE]
> 💡 **Kapan `i` boleh dipakai?** Variabel satu huruf seperti `i`, `j`, `k` **hanya boleh** digunakan sebagai counter dalam `for` loop tradisional (`for (let i = 0; ...)`). Di luar itu, selalu gunakan nama yang deskriptif!

---

<a name="pilar-7"></a>

## ⚠️ Pilar 7 — Akurasi Logika (Gotchas)

> [!CAUTION]
> 🔴 **Gotcha #1 — Jangan pakai `Math.floor()` sebagai pengganti `Math.round()`!**
>
> ```javascript
> Math.floor(4.6); // → 4 ❌ (selalu bulatkan ke bawah)
> Math.round(4.6); // → 5 ✅ (bulatkan ke terdekat)
> ```
>
> Test case `[3, 5, 7, 5, 3]` akan menghasilkan **4** (salah!) jika pakai `floor`.

> [!WARNING]
> 🐛 **Gotcha #2 — Jangan lupa initial value `0` di `reduce`!**
>
> ```javascript
> // ❌ Tanpa initial value — BERBAHAYA untuk array kosong!
> arr.reduce((total, num) => total + num);
>
> // ✅ Dengan initial value 0 — AMAN!
> arr.reduce((total, num) => total + num, 0);
> ```
>
> Tanpa `0` sebagai initial value, `reduce` akan menggunakan elemen pertama sebagai akumulator awal. Ini **berhasil** untuk kasus normal, tapi akan **error** jika array kosong (`TypeError: Reduce of empty array with no initial value`).

> [!WARNING]
> 🐛 **Gotcha #3 — Urutan operasi: bagi dulu, baru bulatkan!**
>
> ```javascript
> // ❌ SALAH — membulatkan sebelum membagi
> Math.round(sum) / arr.length;
>
> // ✅ BENAR — membagi dulu, baru membulatkan
> Math.round(sum / arr.length);
> ```
>
> Membulatkan `sum` tidak mengubah apa-apa karena `sum` sudah integer. Yang perlu dibulatkan adalah **hasil pembagian** yang menghasilkan desimal.

---

<a name="verifikasi"></a>

## ✅ Verifikasi — Cara Membuktikan Solusi Benar

### 1️⃣ Jalankan Semua Test Cases

```javascript
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
```

### 2️⃣ Pastikan Output Sesuai

```
3  ← ✅ (15 ÷ 5 = 3.0, dibulatkan = 3)
5  ← ✅ (23 ÷ 5 = 4.6, dibulatkan = 5)
5  ← ✅ (25 ÷ 5 = 5.0, dibulatkan = 5)
2  ← ✅ (7 ÷ 3 = 2.33, dibulatkan = 2)
7  ← ✅ (35 ÷ 5 = 7.0, dibulatkan = 7)
```

### 3️⃣ Verifikasi Mental — Hitung Manual

```
┌─────────────────────────┐
│  [1, 3, 3]              │
│  sum    = 1 + 3 + 3 = 7 │
│  length = 3              │
│  7 ÷ 3  = 2.333...      │
│  round(2.333) = 2       │  ← 🎉 Cocok!
└─────────────────────────┘
```

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **21 Mei 2026** berdasarkan sesi mentoring challenge `cariMean` di **Google Antigravity**. Konsep Mean (rata-rata) dan `Math.round()` berlaku universal di semua environment JavaScript (Node.js, Browser, Deno, dll).
