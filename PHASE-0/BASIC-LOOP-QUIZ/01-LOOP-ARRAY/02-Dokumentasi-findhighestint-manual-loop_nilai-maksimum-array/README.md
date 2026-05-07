# 🏔️ Find Highest Int (Cari Angka Tertinggi)

### ✨ _Menaklukkan array secara manual tanpa bantuan fungsi instan_

> 🎯 **Tujuan:** Memahami logika dasar pencarian nilai maksimum di dalam sebuah Array dengan melakukan iterasi (loop) manual dari nol, tanpa menggunakan `Math.max`.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | <a href="#latar-belakang">Latar Belakang & Analogi</a> | Konsep "King of the Hill" |
| 📝 | <a href="#soal">Instruksi Soal</a> | Tantangan yang harus dipecahkan |
| 🔑 | <a href="#konsep">Konsep Penting</a> | Inisialisasi awal yang krusial |
| 💻 | <a href="#kode-solusi">Kode Solusi & Eksekusi</a> | Implementasi kode dan *tracing* manual |
| 🎓 | <a href="#kode-mentor">Kode Versi Mentor</a> | Versi klasik/defensif dengan Guard Clause |
| ⚖️ | <a href="#perbandingan">Perbandingan Versi</a> | `for...of` vs Classic `for` |
| ✅ | <a href="#verifikasi">Verifikasi Output</a> | Test case untuk menguji fungsi |

---

<a name="latar-belakang"></a>
## 📖 Latar Belakang & Analogi

Ketika kita dilarang menggunakan `Math.max()`, kita dipaksa untuk berpikir layaknya komputer di level dasar. 

Bayangkan algoritma ini seperti permainan **"King of the Hill"** (Raja Gunung). Siapa yang memegang angka terbesar, dia akan menduduki tahta. Setiap kali ada angka baru yang lewat, ia akan menantang si Raja. Jika angkanya lebih besar, ia merebut tahtanya!

> [!TIP]
> 💡 **Analogi Membuka Kartu**
>
> | | Skenario | Logika Kita |
> |---|---|---|
> | 🎴 | Kamu diberi tumpukan kartu tertutup | Kita hanya bisa melihat **satu kartu pada satu waktu**. |
> | 🧠 | Mengingat angka terbesar | Kita menyimpan angka terbesar yang *sejauh ini* sudah dilihat di otak (variabel `max`). |
> | ⚔️ | Membuka kartu baru | Bandingkan dengan ingatan kita. Kalau lebih besar, lupakan yang lama, ingat yang baru! |

### 💡 Jadi, Apa Solusinya?
Kita butuh sebuah variabel penyimpan (memori) dan sebuah loop (proses membalik kartu satu per satu).

---

<a name="soal"></a>
## 📝 Instruksi Soal

Buatlah sebuah fungsi bernama `findHighestInt` yang menerima satu parameter berupa array kumpulan angka. 

**Syarat Wajib:**
1. Wajib menggunakan iterasi/loop.
2. Dilarang menggunakan *built-in function* atau *array methods* (seperti `Math.max`, `.sort()`, dll).
3. Gunakan variabel sementara untuk menyimpan angka terbesar selama proses loop berjalan.

---

<a name="konsep"></a>
## 🔑 Konsep Penting — Inisialisasi

Bagian paling rawan jebakan dari soal ini adalah: **Angka berapakah yang menjadi nilai awal memori kita?**

### 1️⃣ Konsep Inisialisasi Aman — _"Start from the absolute bottom"_ ⚓

```
🎯 Fungsi    → Memberikan nilai awal pada variabel penyimpan (max)
📌 Status    → Nilai terkecil yang dimengerti JavaScript: `-Infinity`
🔐 Analogi   → Menempatkan patokan setinggi permukaan dasar laut, jadi bukit sekecil apapun pasti lebih tinggi!
```

> [!IMPORTANT]
> 🔔 **Mengapa tidak `let max = 0`?** 
> Jika array berisi angka negatif semua (contoh: `[-10, -5, -2]`), nilai `0` akan bertahan sampai akhir padahal `0` tidak ada di dalam array! Hasilnya jadi **salah**. Gunakan `-Infinity` atau ambil angka pertama array `arr[0]` sebagai nilai awal.

---

<a name="kode-solusi"></a>
## 💻 Kode Solusi & Eksekusi

Berikut adalah implementasi kode modern dan *clean* menggunakan `for...of`:

```javascript
function findHighestInt(arr) {
  // Inisialisasi nilai maksimum dengan nilai paling kecil
  let max = -Infinity;

  // Lakukan iterasi untuk setiap angka di dalam array
  for (const number of arr) {
    // Jika ada penantang baru yang lebih besar, update tahta (nilai max)
    if (number > max) {
      max = number;
    }
  }

  // Kembalikan sang pemenang di akhir turnamen
  return max;
}
```

### 🔍 Tracing Eksekusi (Visualisasi Alur)
Bagaimana komputer memproses input `[78, 56, 232, 12, 8]`?

| Iterasi | `number` | Kondisi (`number > max`) | Update `max` |
| :--- | :--- | :--- | :--- |
| Start | - | - | `-Infinity` |
| ke-1 | `78` | `78 > -Infinity`? **Ya** | `78` |
| ke-2 | `56` | `56 > 78`? **Tidak** | `78` |
| ke-3 | `232` | `232 > 78`? **Ya** | `232` |
| ke-4 | `12` | `12 > 232`? **Tidak** | `232` |
| ke-5 | `8` | `8 > 232`? **Tidak** | `232` |

> [!TIP]
> 🏆 **Hasil Akhir:** Fungsi akan mengembalikan `232` dengan tepat!

---

<a name="kode-mentor"></a>
## 🎓 Kode Versi Mentor (Klasik/Defensif)

Berikut adalah versi alternatif yang mengutamakan **keamanan** dan **efisiensi**. Versi ini menggunakan classic `for` loop dengan index, ditambah *Guard Clause* untuk menangani edge case array kosong.

```javascript
function findHighestInt(arr) {
  // 1. Pengamanan: Jika array kosong, langsung kembalikan pesan atau null
  if (arr.length === 0) return "Array kosong!";

  // 2. Inisialisasi: Ambil angka pertama sebagai "Juara Bertahan" sementara
  let max = arr[0];

  // 3. Loop: Mulai dari indeks ke-1 (karena indeks 0 sudah jadi max)
  for (let i = 1; i < arr.length; i++) {
    // Jika angka saat ini lebih besar dari max, update max
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
```

### 🔍 Apa yang Berbeda?

> [!NOTE]
> 💡 **3 Perbedaan Utama dari Versi Murid:**
>
> | No | Perbedaan | Penjelasan |
> |:---|:----------|:-----------|
> | 1️⃣ | **Guard Clause** `if (arr.length === 0)` | Mencegah error jika array kosong. Tanpa ini, `arr[0]` akan mengembalikan `undefined`. |
> | 2️⃣ | **`let max = arr[0]`** bukan `-Infinity` | Mengambil elemen pertama langsung sebagai patokan awal. Lebih "nyata" karena nilainya berasal dari data asli. |
> | 3️⃣ | **`let i = 1`** bukan `i = 0` | Karena `arr[0]` sudah jadi nilai awal `max`, kita tidak perlu membandingkan `arr[0]` dengan dirinya sendiri. Hemat 1 putaran loop! 🏎️ |

---

<a name="perbandingan"></a>
## ⚖️ Mengapa Gaya Modern vs Klasik?

Dalam diskusi sesi ini, kita membandingkan dua pendekatan: **Gaya Modern** (solusimu) vs **Gaya Klasik/Defensif** (dari Mentor).

| Aspek | Modern (`for...of`) 🟢 | Klasik/Defensif (`for i`) 🔴 |
|-------|:----------|:----------|
| **Inisialisasi** | `let max = -Infinity;` | `let max = arr[0];` |
| **Keterbacaan** | 🟢 Sangat mudah dibaca | 🔴 Sedikit lebih berisik (ada index `i`) |
| **Efisiensi** | 🔴 Mengecek semua elemen | 🟢 Bisa hemat 1 step (mulai `i = 1`) |
| **Keamanan (Array Kosong)** | Kembalikan `-Infinity` | ✅ Ditambah Guard Clause `if (arr.length === 0)` |

> [!NOTE]
> 💡 Kedua cara ini valid! Versi modern lebih cocok untuk *Clean Code* sehari-hari, sedangkan versi klasik sangat bagus dikuasai untuk *Algorithmic Interview* (misalnya di LeetCode).

---

<a name="verifikasi"></a>
## ✅ Verifikasi — Uji Kode

Jalankan serangkaian *test cases* berikut untuk memvalidasi fungsi yang telah dibuat. *(Catatan: Nilai output dari sumber asli Codewars sudah dikoreksi karena soal asli mencari nilai minimum).*

### 1️⃣ Uji Array Positif Campuran
```javascript
console.log(findHighestInt([78, 56, 232, 12, 8]));
// Output: 232  ← ✅ Valid
```

### 2️⃣ Uji Array dengan Angka Besar di Akhir
```javascript
console.log(findHighestInt([78, 56, 232, 412, 228]));
// Output: 412  ← ✅ Valid
```

### 3️⃣ Uji Array Negatif (Membuktikan Keamanan -Infinity)
```javascript
console.log(findHighestInt([-10, -50, -2, -100]));
// Output: -2  ← ✅ Valid
```

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **Mei 2026** berdasarkan sesi mentoring JavaScript membahas "Logic Fundamentals & Loops". Kompleksitas algoritma ini adalah **O(n)**, artinya waktu eksekusi berbanding lurus dengan jumlah elemen di dalam array.
