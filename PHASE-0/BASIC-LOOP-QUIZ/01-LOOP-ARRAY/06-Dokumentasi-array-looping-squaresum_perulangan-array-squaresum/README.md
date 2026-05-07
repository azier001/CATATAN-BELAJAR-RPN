# 🔢 Square(n) Sum (Jumlah Kuadrat Array)

### ✨ _Menguadratkan setiap angka lalu menjumlahkan semuanya — pola Accumulator tanpa filter_

> 🎯 **Tujuan:** Memahami logika **Accumulator Pattern murni** — menghitung jumlah kuadrat semua elemen array menggunakan loop manual, tanpa built-in method seperti `.map()` atau `.reduce()`.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | <a href="#latar-belakang">Latar Belakang & Analogi</a> | Konsep "Mesin penghancur & keranjang" |
| 📝 | <a href="#soal">Instruksi Soal</a> | Tantangan yang harus dipecahkan |
| 🔑 | <a href="#konsep">Konsep Penting</a> | Accumulator + Exponentiation |
| 💻 | <a href="#kode-solusi">Kode Solusi & Eksekusi</a> | Implementasi kode dan *tracing* manual |
| 🎓 | <a href="#kode-mentor">Kode Versi Mentor</a> | Versi modern dengan operator `**` |
| ⚖️ | <a href="#perbandingan">Perbandingan Versi</a> | `num * num` vs `num ** 2` |
| ⚠️ | <a href="#edge-cases">Edge Cases</a> | Kasus-kasus ekstrim yang perlu diperhatikan |
| ✅ | <a href="#verifikasi">Verifikasi Output</a> | Test case untuk menguji fungsi |

---

<a name="latar-belakang"></a>
## 📖 Latar Belakang & Analogi

Challenge ini melatih **Accumulator Pattern dalam bentuk paling murni** — tanpa ada filter/kondisi `if`. Setiap elemen **pasti** diproses: dikuadratkan lalu dijumlahkan.

Bayangkan kamu punya **conveyor belt** berisi angka-angka. Setiap angka yang lewat akan masuk ke **mesin penghancur kuadrat** (dikali dirinya sendiri), lalu hasilnya jatuh ke **keranjang penampung**.

> [!TIP]
> 💡 **Analogi "Conveyor Belt & Mesin Kuadrat"**
>
> | | Dunia Nyata | Logika Kode |
> |---|---|---|
> | 🧺 | Siapkan keranjang kosong | `let total = 0` — variabel penampung |
> | 🔄 | Angka lewat satu per satu di conveyor belt | `for (const num of numbers)` — iterasi array |
> | ⚡ | Mesin menghancurkan angka: `angka × angka` | `num * num` atau `num ** 2` — kuadratkan |
> | ➕ | Hasil jatuh ke keranjang, ditumpuk | `total += ...` — akumulasi ke total |

### 💡 Bedanya dengan Positive Sum?

Di challenge sebelumnya ([Positive Sum](../05-Dokumentasi-array-looping-positivesum_perulangan-array-positivesum/)), kita punya **gatekeeper** (`if > 0`) yang menyaring angka. Di sini, **tidak ada gatekeeper** — semua angka masuk dan dikuadratkan. Ini menjadikan kodenya lebih sederhana namun tetap melatih pola yang sama.

---

<a name="soal"></a>
## 📝 Instruksi Soal

Buatlah sebuah fungsi bernama `squareSum` yang menerima satu parameter berupa array kumpulan angka. Fungsi harus mengembalikan jumlah dari kuadrat setiap angka.

**Syarat Wajib:**
1. Wajib menggunakan iterasi/loop manual.
2. Dilarang menggunakan *built-in function* atau *array methods* (seperti `.map()`, `.reduce()`, `.forEach()`, dll).
3. Setiap angka harus **dipangkatkan 2** (`n²`) sebelum dijumlahkan.
4. Jika array kosong, kembalikan `0`.

> 📎 **Sumber soal:** [Codewars — Square(n) Sum](https://www.codewars.com/kata/515e271a311df0350d00000f)

---

<a name="konsep"></a>
## 🔑 Konsep Penting

### 1️⃣ Accumulator Pattern (Tanpa Filter) — _"Keranjang yang selalu menerima"_ 🧺

```
🎯 Fungsi    → Menampung hasil kuadrat yang terus bertambah setiap iterasi
📌 Status    → Tidak ada kondisi if — SEMUA elemen diproses
🔐 Analogi   → Conveyor belt tanpa quality control — semua barang masuk keranjang
```

> [!IMPORTANT]
> 🔔 **Perbedaan kunci dengan Positive Sum:**
> Di Positive Sum, kita punya `if (number > 0)` sebagai filter. Di Square Sum, **tidak ada filter** — setiap angka langsung dikuadratkan dan dijumlahkan. Ini menunjukkan bahwa Accumulator Pattern bisa berdiri sendiri tanpa kondisi.

### 2️⃣ Exponentiation — _"Dua cara mengkuadratkan"_ ✖️

```
🎯 Fungsi    → Mengalikan angka dengan dirinya sendiri
📌 Opsi 1    → num * num (perkalian biasa)
📌 Opsi 2    → num ** 2 (exponentiation operator — ES2016)
🔐 Analogi   → Dua jalan menuju kota yang sama — pilih yang kamu suka
```

> [!NOTE]
> 💡 **Kapan pakai `**` vs `*`?**
> Untuk pangkat 2, keduanya sama saja. Tapi kalau suatu hari butuh pangkat 3 atau lebih, `num ** 3` jauh lebih bersih daripada `num * num * num`. Operator `**` lebih **scalable**.

---

<a name="kode-solusi"></a>
## 💻 Kode Solusi & Eksekusi

Berikut adalah implementasi menggunakan `for...of` — clean dan mudah dibaca:

```javascript
function squareSum(numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number * number;
  }

  return total;
}
```

### 🔍 Tracing Eksekusi (Visualisasi Alur)

Bagaimana komputer memproses input `[1, 2]`?

| Iterasi | `number` | Operasi | `total` |
| :--- | :--- | :--- | :--- |
| Start | - | - | `0` |
| ke-1 | `1` | `0 + (1 * 1) = 0 + 1` | `1` |
| ke-2 | `2` | `1 + (2 * 2) = 1 + 4` | `5` |

> [!TIP]
> 🏆 **Hasil Akhir:** Fungsi mengembalikan `5`. Setiap angka berhasil dikuadratkan dan dijumlahkan!

### 🔍 Tracing Input Lebih Panjang `[0, 3, 4, 5]`

| Iterasi | `number` | Operasi | `total` |
| :--- | :--- | :--- | :--- |
| Start | - | - | `0` |
| ke-1 | `0` | `0 + (0 * 0) = 0 + 0` | `0` |
| ke-2 | `3` | `0 + (3 * 3) = 0 + 9` | `9` |
| ke-3 | `4` | `9 + (4 * 4) = 9 + 16` | `25` |
| ke-4 | `5` | `25 + (5 * 5) = 25 + 25` | `50` |

> [!TIP]
> 🏆 **Hasil Akhir:** `50` — perhatikan angka `0` dikuadratkan tetap `0`, tidak mengganggu total.

---

<a name="kode-mentor"></a>
## 🎓 Kode Versi Mentor

Versi mentor menggunakan **Exponentiation Operator** (`**`) agar kode lebih deskriptif dan *scalable*:

```javascript
function squareSum(numbers) {
  let result = 0;

  for (const num of numbers) {
    result += num ** 2;
  }

  return result;
}
```

### 🔍 Apa yang Berbeda?

> [!NOTE]
> 💡 **2 Perbedaan dari Versi Murid:**
>
> | No | Perbedaan | Penjelasan |
> |:---|:----------|:-----------|
> | 1️⃣ | **`num ** 2`** bukan `num * num` | Menggunakan exponentiation operator. Lebih deskriptif — langsung terbaca "pangkat 2". Mudah diganti ke pangkat lain (`** 3`, `** 4`). |
> | 2️⃣ | **`result`** bukan `total` | Penamaan variabel — `result` lebih umum dipakai untuk nilai akhir fungsi. Keduanya sama valid. |

---

<a name="perbandingan"></a>
## ⚖️ Perbandingan: `num * num` vs `num ** 2`

| Aspek | `num * num` ✖️ | `num ** 2` ⚡ |
|-------|:----------|:----------|
| **Keterbacaan** | 🟢 Familiar, mudah dipahami pemula | 🟢 Lebih deskriptif — "pangkat 2" |
| **Scalability** | 🔴 Pangkat 3+ jadi panjang (`n*n*n`) | 🟢 Tinggal ganti angka (`** 3`) |
| **Performa** | 🟢 Identik | 🟢 Identik |
| **Kompatibilitas** | 🟢 Semua versi JS | 🟡 ES2016+ (sudah didukung luas) |

> [!NOTE]
> 💡 Untuk challenge ini, kedua cara hasilnya identik. Pilih yang paling nyaman untukmu! Tapi sebagai kebiasaan, `**` lebih *future-proof* jika suatu saat butuh pangkat selain 2.

---

<a name="edge-cases"></a>
## ⚠️ Edge Cases — Kasus Ekstrim

### 1️⃣ Array Kosong `[]`

```javascript
squareSum([]); // Output: 0
```
> ✅ **Aman!** Loop tidak pernah berjalan. `total` tetap `0` dari inisialisasi awal.

### 2️⃣ Array dengan Angka Negatif `[-2, 2]`

```javascript
squareSum([-2, 2]); // Output: 8  (bukan 0!)
```
> ✅ **Aman!** Angka negatif dikuadratkan menjadi **positif**: `(-2) * (-2) = 4`. Jadi hasilnya `4 + 4 = 8`. Ini sifat matematika dasar — bilangan apa pun yang dipangkatkan genap hasilnya selalu positif.

### 3️⃣ Array dengan Angka Nol `[0, 0, 5]`

```javascript
squareSum([0, 0, 5]); // Output: 25
```
> ✅ **Aman!** `0²` = `0`, tidak mengubah total. Hanya `5² = 25` yang berkontribusi.

### 4️⃣ Array dengan Satu Elemen `[7]`

```javascript
squareSum([7]); // Output: 49
```
> ✅ **Aman!** Satu iterasi saja, `7² = 49`. Langsung dikembalikan.

---

<a name="verifikasi"></a>
## ✅ Verifikasi — Uji Kode

Jalankan serangkaian *test cases* berikut untuk memvalidasi fungsi:

### 1️⃣ Uji Input dari Soal
```javascript
console.log(squareSum([1, 2]));       // Output: 5   ← ✅ (1+4)
console.log(squareSum([0, 3, 4, 5])); // Output: 50  ← ✅ (0+9+16+25)
console.log(squareSum([]));           // Output: 0   ← ✅
```

### 2️⃣ Uji Angka Negatif
```javascript
console.log(squareSum([-1, -2, -3])); // Output: 14  ← ✅ (1+4+9)
```

### 3️⃣ Uji Campuran
```javascript
console.log(squareSum([-2, 0, 3]));   // Output: 13  ← ✅ (4+0+9)
```

---

## 📚 Konsep yang Dipelajari

- ✅ **Accumulator Pattern (Murni)** — Menggunakan variabel `total` untuk akumulasi tanpa kondisi filter. Pola paling sederhana dari accumulator.
- ✅ **Exponentiation Operator (`**`)** — Operator modern ES2016 untuk perpangkatan. Lebih *scalable* dan deskriptif dibanding perkalian manual.
- ✅ **Sifat Kuadrat Negatif** — Angka negatif dikuadratkan selalu menjadi positif (`(-n)² = n²`). Tidak perlu logika khusus untuk menangani negatif.
- ✅ **`for...of` untuk Iterasi Bersih** — Cocok saat kita hanya butuh nilai elemen tanpa peduli posisi/index.
- ✅ **Perbandingan Kode** — Mengevaluasi dua pendekatan (`* vs **`) dan memilih berdasarkan kebutuhan, bukan kebiasaan.

---

## 💡 Catatan Tambahan

> [!TIP]
> 🏆 **Insight Penting:**
> Challenge ini membuktikan bahwa **Accumulator Pattern** bisa berdiri sendiri tanpa kondisi `if`. Bandingkan:
>
> | Challenge | Pola | Filter |
> |-----------|------|--------|
> | Positive Sum | Accumulator + Filter | `if (num > 0)` |
> | **Square Sum** | **Accumulator murni** | **Tidak ada** |
>
> Ini menunjukkan bahwa Accumulator Pattern adalah **pondasi** — filter hanyalah tambahan opsional. Kuasai yang dasar dulu, baru tambahkan kompleksitas! 🧱

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **8 Mei 2026** berdasarkan sesi mentoring JavaScript membahas "Accumulator Pattern & Exponentiation Operator". Kompleksitas algoritma ini adalah **O(n)**, artinya waktu eksekusi berbanding lurus dengan jumlah elemen di dalam array.
