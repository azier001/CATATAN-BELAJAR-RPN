# 🔻 Find Smallest Int (Cari Angka Terkecil)

### ✨ _Menjelajahi array secara manual untuk menemukan sang penantang terkecil_

> 🎯 **Tujuan:** Memahami logika dasar pencarian nilai minimum di dalam sebuah Array dengan melakukan iterasi (loop) manual dari nol, tanpa menggunakan `Math.min`.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | <a href="#latar-belakang">Latar Belakang & Analogi</a> | Konsep "Siapa yang paling pendek?" |
| 📝 | <a href="#soal">Instruksi Soal</a> | Tantangan yang harus dipecahkan |
| 🔑 | <a href="#konsep">Konsep Penting</a> | Inisialisasi awal yang krusial |
| 💻 | <a href="#kode-solusi">Kode Solusi & Eksekusi</a> | Implementasi kode dan *tracing* manual |
| 🎓 | <a href="#kode-mentor">Kode Versi Mentor</a> | Versi klasik dengan optimasi langkah |
| ⚖️ | <a href="#perbandingan">Perbandingan Versi</a> | `for...of` vs Classic `for` |
| ⚠️ | <a href="#edge-cases">Edge Cases</a> | Kasus-kasus ekstrim yang perlu diperhatikan |
| ✅ | <a href="#verifikasi">Verifikasi Output</a> | Test case untuk menguji fungsi |

---

<a name="latar-belakang"></a>
## 📖 Latar Belakang & Analogi

Ketika kita dilarang menggunakan `Math.min()`, kita dipaksa untuk berpikir layaknya komputer di level dasar.

Bayangkan algoritma ini seperti **mencari orang yang paling pendek di barisan**. Kita berjalan menyusuri barisan satu per satu, dan selalu mengingat siapa yang paling pendek *sejauh ini*. Setiap kali bertemu orang baru, kita bandingkan — jika dia lebih pendek, dia menjadi "juara bertahan" yang baru!

> [!TIP]
> 💡 **Analogi "Juara Bertahan"**
>
> | | Skenario | Logika Kita |
> |---|---|---|
> | 🧍 | Kamu berjalan menyusuri barisan orang | Kita menelusuri setiap elemen array satu per satu lewat **loop**. |
> | 🧠 | Mengingat siapa yang paling pendek | Kita menyimpan angka terkecil yang *sejauh ini* sudah dilihat di variabel `min`. |
> | ⚔️ | Bertemu orang baru | Bandingkan dengan ingatan kita. Kalau lebih pendek, ganti juara bertahannya! |

### 💡 Jadi, Apa Solusinya?
Kita butuh sebuah **variabel penyimpan** (memori juara bertahan) dan sebuah **loop** (proses berjalan menyusuri barisan satu per satu).

---

<a name="soal"></a>
## 📝 Instruksi Soal

Buatlah sebuah fungsi bernama `findSmallestInt` yang menerima satu parameter berupa array kumpulan angka.

**Syarat Wajib:**
1. Wajib menggunakan iterasi/loop.
2. Dilarang menggunakan *built-in function* atau *array methods* (seperti `Math.min`, `.sort()`, dll).
3. Gunakan variabel sementara untuk menyimpan angka terkecil selama proses loop berjalan.

> 📎 **Sumber soal:** [Codewars — Find the Smallest Integer](https://www.codewars.com/kata/55a2d7ebe362935a210000b2)

---

<a name="konsep"></a>
## 🔑 Konsep Penting — Inisialisasi

Bagian paling rawan jebakan dari soal ini adalah: **Angka berapakah yang menjadi nilai awal memori kita?**

### 1️⃣ Konsep Inisialisasi Aman — _"Start from the absolute top"_ 🚀

```
🎯 Fungsi    → Memberikan nilai awal pada variabel penyimpan (min)
📌 Status    → Nilai terbesar yang dimengerti JavaScript: `Infinity`
🔐 Analogi   → Menempatkan patokan setinggi angkasa, jadi angka sekecil apapun pasti lebih rendah!
```

> [!IMPORTANT]
> 🔔 **Mengapa tidak `let min = 0`?**
> Jika array berisi angka negatif semua (contoh: `[-10, -5, -2]`), nilai `0` akan bertahan sampai akhir padahal `0` tidak ada di dalam array! Hasilnya jadi **salah**. Gunakan `Infinity` atau ambil angka pertama array `arr[0]` sebagai nilai awal.

> [!NOTE]
> 💡 **Hubungan dengan findHighestInt:**
> Perhatikan bahwa challenge ini adalah **"cermin"** dari findHighestInt! Di sana kita pakai `-Infinity` dan operator `>`, di sini kita pakai `Infinity` dan operator `<`. Polanya simetris!

---

<a name="kode-solusi"></a>
## 💻 Kode Solusi & Eksekusi

Berikut adalah implementasi kode modern dan *clean* menggunakan `for...of`:

```javascript
function findSmallestInt(arr) {
  // Inisialisasi nilai minimum dengan nilai paling besar
  let min = Infinity;

  // Lakukan iterasi untuk setiap angka di dalam array
  for (const number of arr) {
    // Jika ada penantang baru yang lebih kecil, update juara bertahan
    if (number < min) min = number;
  }

  // Kembalikan sang pemenang (angka terkecil) di akhir
  return min;
}
```

### 🔍 Tracing Eksekusi (Visualisasi Alur)
Bagaimana komputer memproses input `[78, 56, 232, 12, 8]`?

| Iterasi | `number` | Kondisi (`number < min`) | Update `min` |
| :--- | :--- | :--- | :--- |
| Start | - | - | `Infinity` |
| ke-1 | `78` | `78 < Infinity`? **Ya** | `78` |
| ke-2 | `56` | `56 < 78`? **Ya** | `56` |
| ke-3 | `232` | `232 < 56`? **Tidak** | `56` |
| ke-4 | `12` | `12 < 56`? **Ya** | `12` |
| ke-5 | `8` | `8 < 12`? **Ya** | `8` |

> [!TIP]
> 🏆 **Hasil Akhir:** Fungsi akan mengembalikan `8` dengan tepat!

---

<a name="kode-mentor"></a>
## 🎓 Kode Versi Mentor (Klasik/Optimasi)

Berikut adalah versi alternatif yang mengutamakan **efisiensi langkah**. Versi ini menggunakan classic `for` loop dengan index, dimulai dari indeks ke-1 karena indeks ke-0 sudah dipakai sebagai nilai awal.

```javascript
function findSmallestInt(arr) {
  // 1. Langsung tunjuk angka pertama sebagai "Juara Bertahan"
  let smallest = arr[0];

  // 2. Mulai loop dari indeks ke-1
  // Kenapa indeks 1? Karena indeks 0 sudah kita pegang di variabel 'smallest'
  for (let i = 1; i < arr.length; i++) {
    // 3. Bandingkan angka di posisi 'i' dengan 'smallest'
    if (arr[i] < smallest) {
      smallest = arr[i]; // Update jika ketemu yang lebih kecil
    }
  }

  return smallest;
}
```

### 🔍 Apa yang Berbeda?

> [!NOTE]
> 💡 **3 Perbedaan Utama dari Versi Murid:**
>
> | No | Perbedaan | Penjelasan |
> |:---|:----------|:-----------|
> | 1️⃣ | **`let smallest = arr[0]`** bukan `Infinity` | Mengambil elemen pertama langsung sebagai patokan awal. Lebih "nyata" karena nilainya berasal dari data asli. |
> | 2️⃣ | **`let i = 1`** bukan `i = 0` | Karena `arr[0]` sudah jadi nilai awal `smallest`, kita tidak perlu membandingkan `arr[0]` dengan dirinya sendiri. Hemat 1 putaran loop! 🏎️ |
> | 3️⃣ | **Hemat memori** | Tidak perlu memanggil konstanta global `Infinity`, cukup ambil dari data yang sudah ada di dalam array. |

---

<a name="perbandingan"></a>
## ⚖️ Mengapa Gaya Modern vs Klasik?

Dalam diskusi sesi ini, kita membandingkan dua pendekatan: **Gaya Modern** (solusi murid) vs **Gaya Klasik** (dari Mentor).

| Aspek | Modern (`for...of`) 🟢 | Klasik (`for i`) 🔵 |
|-------|:----------|:----------|
| **Inisialisasi** | `let min = Infinity;` | `let smallest = arr[0];` |
| **Keterbacaan** | 🟢 Sangat mudah dibaca | 🔴 Sedikit lebih berisik (ada index `i`) |
| **Efisiensi** | 🔴 Mengecek semua elemen (N langkah) | 🟢 Hemat 1 step (N-1 langkah, mulai `i = 1`) |
| **Keamanan (Array Kosong)** | Kembalikan `Infinity` | Kembalikan `undefined` (perlu Guard Clause) |
| **Kontrol Indeks** | ❌ Tidak punya akses indeks | ✅ Punya kontrol penuh terhadap indeks |

> [!NOTE]
> 💡 Kedua cara ini valid! Versi modern lebih cocok untuk *Clean Code* sehari-hari, sedangkan versi klasik sangat bagus dikuasai untuk *Algorithmic Interview* dan memahami cara kerja komputer di level rendah.

---

<a name="edge-cases"></a>
## ⚠️ Edge Cases — Kasus Ekstrim

Dokumentasi yang lengkap harus menjawab: *"Bagaimana kalau datanya aneh?"*

### 1️⃣ Array dengan Satu Elemen `[10]`

```javascript
findSmallestInt([10]); // Output: 10
```
> ✅ **Aman!** `for...of` hanya berjalan 1 kali dan langsung meng-update `min` dari `Infinity` ke `10`. Pada versi klasik, loop bahkan tidak berjalan (karena `1 < 1` bernilai `false`), langsung mengembalikan `arr[0]`.

### 2️⃣ Array Kosong `[]`

| Versi | Hasil | Aman? |
|-------|-------|-------|
| Modern (`Infinity`) | `Infinity` | ⚠️ Bisa menyesatkan — `Infinity` bukan angka dari array |
| Klasik (`arr[0]`) | `undefined` | ⚠️ Butuh Guard Clause |

### 3️⃣ Array dengan Angka Negatif `[-1, -5, -2]`

```javascript
findSmallestInt([-1, -5, -2]); // Output: -5
```
> ✅ **Aman!** Karena `-5 < -1` tetap bernilai `true`, logika kita tidak terganggu oleh angka negatif.

### 4️⃣ Array dengan Angka Nol `[78, 56, 232, 12, 0]`

```javascript
findSmallestInt([78, 56, 232, 12, 0]); // Output: 0
```
> ✅ **Aman!** Angka `0` lebih kecil dari semua angka positif lainnya.

---

<a name="verifikasi"></a>
## ✅ Verifikasi — Uji Kode

Jalankan serangkaian *test cases* berikut untuk memvalidasi fungsi yang telah dibuat:

### 1️⃣ Uji Array Positif Campuran
```javascript
console.log(findSmallestInt([78, 56, 232, 12, 8]));
// Output: 8  ← ✅ Valid
```

### 2️⃣ Uji Array dengan Angka Kecil di Tengah
```javascript
console.log(findSmallestInt([78, 56, 232, 12, 18]));
// Output: 12  ← ✅ Valid
```

### 3️⃣ Uji Array Tanpa Angka Sangat Kecil
```javascript
console.log(findSmallestInt([78, 56, 232, 412, 228]));
// Output: 56  ← ✅ Valid
```

### 4️⃣ Uji Array dengan Nol
```javascript
console.log(findSmallestInt([78, 56, 232, 12, 0]));
// Output: 0  ← ✅ Valid
```

### 5️⃣ Uji Array dengan Angka Terkecil di Posisi Pertama
```javascript
console.log(findSmallestInt([1, 56, 232, 12, 8]));
// Output: 1  ← ✅ Valid
```

---

## 📚 Konsep yang Dipelajari

- ✅ **Variable Role (Juara Bertahan)** — Menggunakan variabel sebagai penyimpan nilai sementara yang terus diperbarui selama loop berjalan.
- ✅ **Inisialisasi Aman** — Memilih `Infinity` atau `arr[0]` sebagai titik awal yang tidak akan "mengalahkan" data asli.
- ✅ **Manual Traversal** — Menelusuri array tanpa bantuan *built-in method*, murni menggunakan loop.
- ✅ **Operator Pembanding `<`** — Membandingkan dua nilai untuk menentukan mana yang lebih kecil.
- ✅ **Pola Cermin** — Mengenali bahwa `findSmallestInt` adalah kebalikan simetris dari `findHighestInt`.

---

## 💡 Catatan Tambahan

> [!TIP]
> 🏆 **Insight Penting:**
> Challenge ini membuktikan bahwa `findSmallestInt` dan `findHighestInt` hanyalah **dua sisi dari koin yang sama**. Yang berubah cuma:
> - Nilai awal: `-Infinity` ↔ `Infinity`
> - Operator: `>` ↔ `<`
> - Nama variabel: `max` ↔ `min`
>
> Jika kamu sudah paham satu, kamu otomatis paham keduanya! 🪙

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **Mei 2026** berdasarkan sesi mentoring JavaScript membahas "Logic Fundamentals & Loops". Kompleksitas algoritma ini adalah **O(n)**, artinya waktu eksekusi berbanding lurus dengan jumlah elemen di dalam array.
