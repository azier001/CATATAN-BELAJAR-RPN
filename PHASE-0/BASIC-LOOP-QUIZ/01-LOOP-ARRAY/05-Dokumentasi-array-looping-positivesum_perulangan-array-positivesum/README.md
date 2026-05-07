# ➕ Positive Sum (Jumlahkan Bilangan Positif)

### ✨ _Menyaring dan menjumlahkan hanya angka-angka positif dari sebuah array_

> 🎯 **Tujuan:** Memahami logika dasar penjumlahan kondisional di dalam Array — hanya menjumlahkan angka positif (`> 0`) menggunakan loop manual, tanpa built-in method seperti `.filter()` atau `.reduce()`.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | <a href="#latar-belakang">Latar Belakang & Analogi</a> | Konsep "Memilah kelereng merah" |
| 📝 | <a href="#soal">Instruksi Soal</a> | Tantangan yang harus dipecahkan |
| 🔑 | <a href="#konsep">Konsep Penting</a> | Inisialisasi & accumulator pattern |
| 💻 | <a href="#kode-solusi">Kode Solusi & Eksekusi</a> | Implementasi kode dan *tracing* manual |
| 🎓 | <a href="#kode-mentor">Kode Versi Mentor</a> | Versi klasik dengan traditional for loop |
| ⚖️ | <a href="#perbandingan">Perbandingan Versi</a> | `for...of` vs Classic `for` |
| ⚠️ | <a href="#edge-cases">Edge Cases</a> | Kasus-kasus ekstrim yang perlu diperhatikan |
| ✅ | <a href="#verifikasi">Verifikasi Output</a> | Test case untuk menguji fungsi |

---

<a name="latar-belakang"></a>
## 📖 Latar Belakang & Analogi

Challenge ini melatih kemampuan **menggabungkan dua pola sekaligus**: iterasi (loop) dan seleksi (kondisi). Kita tidak cuma berjalan menelusuri array, tapi juga harus **memilih** mana yang layak dijumlahkan.

Bayangkan kamu punya **keranjang kelereng** berisi kelereng merah (angka positif) dan kelereng biru (angka negatif/nol). Tugasmu: hitung total nilai **hanya kelereng merah**.

> [!TIP]
> 💡 **Analogi "Keranjang Kelereng"**
>
> | | Dunia Nyata | Logika Kode |
> |---|---|---|
> | 🧺 | Siapkan keranjang kosong untuk menampung | `let total = 0` — variabel penampung |
> | 🔴 | Ambil kelereng satu per satu, cek warnanya | Loop + `if (number > 0)` — cek apakah positif |
> | ✅ | Kalau merah, masukkan ke keranjang | `total += number` — tambahkan ke total |
> | ❌ | Kalau biru, abaikan saja | Kondisi `if` tidak terpenuhi, lompat ke iterasi berikutnya |

### 💡 Jadi, Apa Solusinya?
Kita butuh sebuah **variabel accumulator** (penampung total) yang dimulai dari `0`, sebuah **loop** untuk menelusuri array, dan sebuah **`if`** untuk menyaring angka positif saja.

---

<a name="soal"></a>
## 📝 Instruksi Soal

Buatlah sebuah fungsi bernama `positiveSum` yang menerima satu parameter berupa array kumpulan angka (bisa positif, negatif, atau campuran).

**Syarat Wajib:**
1. Wajib menggunakan iterasi/loop manual.
2. Dilarang menggunakan *built-in function* atau *array methods* (seperti `.filter()`, `.reduce()`, `.forEach()`, dll).
3. Hanya jumlahkan angka yang **lebih besar dari 0** (positif).
4. Jika array kosong atau tidak ada angka positif, kembalikan `0`.

> 📎 **Sumber soal:** [Codewars — Sum of Positive](https://www.codewars.com/kata/5715eaedb436cf5606000381)

---

<a name="konsep"></a>
## 🔑 Konsep Penting — Accumulator Pattern

Challenge ini memperkenalkan pola fundamental yang sangat sering muncul di programming: **Accumulator Pattern** (pola penampung/akumulasi).

### 1️⃣ Inisialisasi `total = 0` — _"Mulai dari nol"_ 🎯

```
🎯 Fungsi    → Menampung hasil penjumlahan yang terus bertambah
📌 Status    → Harus dimulai dari angka 0 (netral untuk penjumlahan)
🔐 Analogi   → Keranjang kosong sebelum diisi kelereng — kalau dari awal sudah ada isinya, hitungannya jadi salah!
```

> [!IMPORTANT]
> 🔔 **Mengapa harus `let total = 0` dan bukan `let total`?**
> Jika kamu menulis `let total;` tanpa nilai awal, maka `total` bernilai `undefined`. Dalam JavaScript, `undefined + 5` menghasilkan **`NaN`** (Not a Number). Operasi penjumlahan berikutnya juga akan menghasilkan `NaN` terus-menerus. Jadi inisialisasi `= 0` itu **wajib**!

### 2️⃣ Kondisi Filter `> 0` — _"Gatekeeper angka positif"_ 🚪

```
🎯 Fungsi    → Menyaring angka mana yang boleh masuk ke total
📌 Operator  → Strict Greater Than (>), bukan >= (karena 0 bukan positif)
🔐 Analogi   → Satpam yang hanya mengizinkan kelereng merah masuk!
```

> [!NOTE]
> 💡 **Perbedaan `> 0` dan `>= 0`:**
> Angka `0` bukanlah angka positif. Jadi kita pakai `> 0` (strictly greater than), bukan `>= 0`. Meskipun dalam challenge ini hasilnya mungkin sama, secara logika matematika ini lebih akurat.

---

<a name="kode-solusi"></a>
## 💻 Kode Solusi & Eksekusi

Berikut adalah implementasi kode modern dan *clean* menggunakan `for...of`:

```javascript
function positiveSum(arr) {
  let total = 0;

  for (const number of arr) {
    if (number > 0) total += number;
  }

  return total;
}
```

### 🔍 Tracing Eksekusi (Visualisasi Alur)
Bagaimana komputer memproses input `[1, -2, 3, 4, -5]`?

| Iterasi | `number` | Kondisi (`number > 0`) | Aksi | `total` |
| :--- | :--- | :--- | :--- | :--- |
| Start | - | - | - | `0` |
| ke-1 | `1` | `1 > 0`? **Ya** ✅ | `total += 1` | `1` |
| ke-2 | `-2` | `-2 > 0`? **Tidak** ❌ | Dilewati | `1` |
| ke-3 | `3` | `3 > 0`? **Ya** ✅ | `total += 3` | `4` |
| ke-4 | `4` | `4 > 0`? **Ya** ✅ | `total += 4` | `8` |
| ke-5 | `-5` | `-5 > 0`? **Tidak** ❌ | Dilewati | `8` |

> [!TIP]
> 🏆 **Hasil Akhir:** Fungsi mengembalikan `8`. Angka negatif (`-2` dan `-5`) berhasil disaring keluar!

---

<a name="kode-mentor"></a>
## 🎓 Kode Versi Mentor (Klasik)

Berikut adalah versi alternatif menggunakan **traditional for loop** dengan index. Versi ini menunjukkan pemahaman cara "menunjuk" alamat setiap elemen di dalam array menggunakan bracket notation.

```javascript
function positiveSum(arr) {
  let total = 0;

  // Kita mulai dari index 0 sampai sebelum panjang array
  for (let i = 0; i < arr.length; i++) {
    // Kita "tunjuk" angkanya menggunakan bracket notation: arr[i]
    if (arr[i] > 0) {
      total += arr[i];
    }
  }

  return total;
}
```

### 🔍 Apa yang Berbeda?

> [!NOTE]
> 💡 **2 Perbedaan Utama dari Versi Murid:**
>
> | No | Perbedaan | Penjelasan |
> |:---|:----------|:-----------|
> | 1️⃣ | **`arr[i]`** bukan `number` | Mengakses elemen lewat indeks. Lebih eksplisit menunjukkan bahwa kita bekerja dengan *posisi* di dalam array. |
> | 2️⃣ | **Kontrol indeks** | Punya akses ke variabel `i`, berguna jika suatu saat butuh informasi posisi (misal: "jumlahkan positif hanya di index genap"). |

---

<a name="perbandingan"></a>
## ⚖️ Perbandingan Versi: Modern vs Klasik

| Aspek | Modern (`for...of`) 🟢 | Klasik (`for i`) 🔵 |
|-------|:----------|:----------|
| **Cara akses elemen** | Langsung dapet angkanya (`number`) | Lewat alamat/indeks (`arr[i]`) |
| **Keterbacaan** | 🟢 Sangat mudah dibaca, lebih pendek | 🔴 Sedikit lebih berisik (ada index `i`) |
| **Kontrol Indeks** | ❌ Tidak punya akses indeks | ✅ Punya kontrol penuh terhadap indeks |
| **Kapan dipakai** | Clean code sehari-hari | Algorithmic interview, butuh posisi elemen |

> [!NOTE]
> 💡 Kedua cara ini valid dan benar! Versi `for...of` lebih cocok untuk kode sehari-hari yang bersih, sedangkan versi classic `for` sangat bagus dikuasai untuk wawancara teknis dan pemahaman di level rendah.

---

<a name="edge-cases"></a>
## ⚠️ Edge Cases — Kasus Ekstrim

Dokumentasi yang lengkap harus menjawab: *"Bagaimana kalau datanya aneh?"*

### 1️⃣ Array Kosong `[]`

```javascript
positiveSum([]); // Output: 0
```
> ✅ **Aman!** Jika array kosong, `arr.length` adalah `0`. Loop tidak pernah berjalan sama sekali. Kode langsung lompat ke `return total`, yang nilainya tetap `0` dari inisialisasi awal.

### 2️⃣ Semua Angka Negatif `[-1, -5, -10]`

```javascript
positiveSum([-1, -5, -10]); // Output: 0
```
> ✅ **Aman!** Kondisi `if (number > 0)` tidak pernah terpenuhi untuk satupun elemen. Jadi `total` tidak pernah bertambah dan tetap `0`.

### 3️⃣ Semua Angka Positif `[1, 2, 3, 4, 5]`

```javascript
positiveSum([1, 2, 3, 4, 5]); // Output: 15
```
> ✅ **Aman!** Semua elemen lolos filter `> 0`, jadi semuanya dijumlahkan: `1 + 2 + 3 + 4 + 5 = 15`.

### 4️⃣ Array dengan Angka Nol `[0, 1, -1, 0]`

```javascript
positiveSum([0, 1, -1, 0]); // Output: 1
```
> ✅ **Aman!** Angka `0` tidak lolos filter `> 0` (karena `0 > 0` adalah `false`), jadi hanya `1` yang dijumlahkan.

---

<a name="verifikasi"></a>
## ✅ Verifikasi — Uji Kode

Jalankan serangkaian *test cases* berikut untuk memvalidasi fungsi yang telah dibuat:

### 1️⃣ Uji Array Positif Semua
```javascript
console.log(positiveSum([1, 2, 3, 4, 5]));
// Output: 15  ← ✅ Valid
```

### 2️⃣ Uji Array Campuran Positif & Negatif
```javascript
console.log(positiveSum([1, -2, 3, 4, 5]));
// Output: 13  ← ✅ Valid (1 + 3 + 4 + 5)
```

### 3️⃣ Uji Array Kosong
```javascript
console.log(positiveSum([]));
// Output: 0  ← ✅ Valid (tidak ada yang dijumlahkan)
```

### 4️⃣ Uji Array Campuran dengan Negatif di Ujung
```javascript
console.log(positiveSum([-1, 2, 3, 4, -5]));
// Output: 9  ← ✅ Valid (2 + 3 + 4)
```

---

## 📚 Konsep yang Dipelajari

- ✅ **Accumulator Pattern** — Menggunakan variabel `total` sebagai penampung yang nilainya terus bertambah selama loop berjalan. Pola fundamental yang muncul di hampir semua kalkulasi array.
- ✅ **Inisialisasi Wajib `= 0`** — Memahami bahwa `let total;` menghasilkan `undefined`, dan `undefined + angka` menghasilkan `NaN`. Jadi inisialisasi bukan pilihan, tapi **keharusan**.
- ✅ **Conditional Accumulation** — Menggabungkan `if` di dalam `for` untuk menjumlahkan secara selektif. Hanya angka yang memenuhi syarat yang masuk ke total.
- ✅ **`for...of` vs Traditional `for`** — Dua cara berbeda mengiterasi array, masing-masing dengan kelebihan dan kekurangan.
- ✅ **Edge Case Awareness** — Mempertimbangkan skenario array kosong, negatif semua, dan nol untuk membuktikan ketahanan logika.

---

## 💡 Catatan Tambahan

> [!TIP]
> 🏆 **Insight Penting:**
> Challenge ini mengenalkan **Accumulator Pattern** — salah satu pola paling mendasar dalam programming. Pola yang sama (`let total = 0` → loop → `total += ...`) akan terus muncul di challenge yang lebih kompleks, misalnya:
> - Menghitung rata-rata (bagi total dengan jumlah elemen)
> - Menghitung total harga belanja
> - Menghitung skor permainan
>
> Kuasai pola ini, dan kamu punya fondasi kuat untuk berbagai challenge ke depan! 🧱

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **8 Mei 2026** berdasarkan sesi mentoring JavaScript membahas "Accumulator Pattern & Conditional Looping". Kompleksitas algoritma ini adalah **O(n)**, artinya waktu eksekusi berbanding lurus dengan jumlah elemen di dalam array.
