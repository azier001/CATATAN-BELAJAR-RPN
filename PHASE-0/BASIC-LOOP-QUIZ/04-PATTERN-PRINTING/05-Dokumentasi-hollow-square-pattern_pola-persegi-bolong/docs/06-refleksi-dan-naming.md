# 💡 Refleksi & Naming Convention — Persegi Bolong (Hollow Square)

### ✨ _Best practice penamaan variabel, gotchas yang wajib diingat, dan pelajaran berharga dari sesi mentoring._

> 🎯 **Tujuan:** Merangkum semua insight mendalam yang didapat dari sesi mentoring — mulai dari standar penamaan variabel yang profesional, jebakan-jebakan umum yang wajib dihindari, hingga pelajaran kunci yang berlaku untuk challenge pattern printing lainnya.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🏷️ | [Naming Convention](#naming) | Best practice penamaan variabel |
| ⚠️ | [Gotchas & Jebakan Umum](#gotchas) | Peringatan penting yang wajib diingat |
| 🧠 | [Pelajaran Kunci](#pelajaran) | Insight berharga dari sesi mentoring |
| 🔗 | [Koneksi ke Challenge Lain](#koneksi) | Bagaimana ilmu ini berlaku di tempat lain |

---

<a name="naming"></a>
## 🏷️ Naming Convention (Aturan Penamaan)

Di industri profesional, kita diwajibkan menulis kode yang tidak cuma bisa dijalankan oleh mesin, tapi juga **mudah dibaca oleh manusia** — termasuk oleh dirimu sendiri 6 bulan dari sekarang yang sudah lupa konteks kodenya.

### 📖 Tabel Perbandingan Naming

| Lokasi / Peran | ❌ Kurang Baik | ✅ Best Practice | Alasan |
|:---------------|:---------------|:-----------------|:-------|
| Penampung Akhir | `res`, `result`, `str` | `pattern` | Kita membentuk **pola visual**, bukan menghitung hasil matematika |
| Loop Luar | `i`, `x` | `row` | Langsung memberi konteks bahwa loop ini mengurus **baris** (vertikal atas-bawah) |
| Loop Dalam | `j`, `y` | `col` | Menjelaskan bahwa loop ini mengurus **kolom** (horizontal kiri-kanan) |

### 💡 Kapan `i` dan `j` Boleh Dipakai?

```
✅ BOLEH — Loop sederhana 1 lapis yang sangat pendek:

for (let i = 0; i < arr.length; i++) {
  total += arr[i];    // Cuma 1 baris, konteksnya jelas
}

❌ HINDARI — Nested loop 2D (pattern printing, matrix, grid):

for (let i = 0; i < num; i++) {       // i itu baris atau kolom?
  for (let j = 0; j < num; j++) {     // j itu baris atau kolom?
    // Otak mulai bingung...
  }
}
```

> [!TIP]
> 💡 **Aturan praktis:** Jika kamu punya **nested loop**, selalu gunakan nama deskriptif (`row`, `col`). Jika hanya **single loop** yang pendek dan konteksnya sudah jelas, `i` masih aman dipakai.

### 🔍 Studi Kasus dari Sesi Mentoring Kita

Saat pertama kali menulis kode di sesi ini, kita menggunakan `i` dan `j`:

```javascript
// ❌ Versi awal (kurang deskriptif)
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (i === 0 || i === num - 1 || j === 0 || j === num - 1) {
```

Setelah di-refactor dengan penamaan yang deskriptif:

```javascript
// ✅ Versi final (langsung terbaca maknanya)
for (let row = 0; row < num; row++) {
  for (let col = 0; col < num; col++) {
    if (row === 0 || row === num - 1 || col === 0 || col === num - 1) {
```

> [!NOTE]
> 📌 **Perbedaan kecil, dampak besar:** Saat membaca `row === 0`, otak langsung memproses: *"Oh, ini mengecek baris pertama (atas)."* Sedangkan `i === 0` memaksa otak untuk **mengingat dulu** bahwa `i` itu mewakili baris — langkah ekstra yang melelahkan di kode yang panjang.

---

<a name="gotchas"></a>
## ⚠️ Gotchas & Jebakan Umum

### Jebakan #1: Lupa Mencetak Spasi

> ⚠️ **Kesalahan paling sering!**
>
> ```javascript
> // ❌ SALAH — tidak ada else
> if (row === 0 || row === num - 1 || col === 0 || col === num - 1) {
>   pattern += '*';
> }
> // Bintang menempel: **  bukan  *   *
>
> // ✅ BENAR — ada else untuk spasi
> if (row === 0 || row === num - 1 || col === 0 || col === num - 1) {
>   pattern += '*';
> } else {
>   pattern += ' ';    // ← INI WAJIB!
> }
> ```
>
> **Kenapa terjadi:** Saat mesin mengeksekusi baris ke-1, jika `col = 1` tidak cocok dengan rumus dan tidak ada `else`, kode diam saja. Akibatnya bintang kiri (`col = 0`) langsung menempel dengan bintang kanan (`col = 4`).
>
> **Ingat:** Spasi bukan hiasan — ia adalah **karakter pendorong** yang mempertahankan lebar persegi tetap `num` karakter per baris!

---

### Jebakan #2: Menulis `num` Bukan `num - 1`

> ⚠️ **Off-by-one error klasik!**
>
> ```javascript
> // ❌ SALAH
> if (row === num || col === num) { ... }
>
> // ✅ BENAR
> if (row === num - 1 || col === num - 1) { ... }
> ```
>
> **Kenapa terjadi:** Karena kita menggunakan *zero-based index* (dimulai dari 0), indeks terakhir bukan `num` melainkan `num - 1`. Jika `num = 5`, baris/kolom terakhir ada di indeks `4`.
>
> **Akibat:** Bintang batas bawah dan kanan **tidak akan pernah muncul** karena loop hanya berjalan dari `0` sampai `num - 1`. Kondisi `row === num` tidak pernah tercapai!

---

### Jebakan #3: Newline di Tempat yang Salah

> ⚠️ **Posisi `\n` menentukan segalanya!**
>
> ```javascript
> // ❌ SALAH — di dalam loop col
> for (let row = 0; row < num; row++) {
>   for (let col = 0; col < num; col++) {
>     pattern += (/*...*/) ? '*' : ' ';
>     pattern += '\n';    // ← SALAH! Setiap karakter diikuti enter
>   }
> }
>
> // ✅ BENAR — di luar loop col, di dalam loop row
> for (let row = 0; row < num; row++) {
>   for (let col = 0; col < num; col++) {
>     pattern += (/*...*/) ? '*' : ' ';
>   }
>   pattern += '\n';      // ← BENAR! Enter hanya setelah 1 baris selesai
> }
> ```

---

### Jebakan #4: Menggunakan `&&` padahal maksudnya `||`

> ⚠️ **Operator logika yang tertukar!**
>
> ```javascript
> // ❌ SALAH — AND: semua kondisi harus terpenuhi bersamaan
> if (row === 0 && row === num - 1 && col === 0 && col === num - 1) { ... }
> // Tidak ada posisi yang bisa memenuhi 4 syarat sekaligus!
>
> // ✅ BENAR — OR: cukup salah satu terpenuhi
> if (row === 0 || row === num - 1 || col === 0 || col === num - 1) { ... }
> ```
>
> **Kenapa terjadi:** Secara bahasa, "cetak bintang jika di atas **DAN** di bawah **DAN** di kiri **DAN** di kanan" terdengar masuk akal. Tapi secara logika, tidak mungkin sebuah posisi berada di atas DAN bawah sekaligus! Yang benar adalah: cetak bintang jika di atas **ATAU** di bawah **ATAU** di kiri **ATAU** di kanan.

---

<a name="pelajaran"></a>
## 🧠 Pelajaran Kunci dari Sesi Mentoring

### 1. Visualisasi Sebelum Koding

> 💡 *"Jangan langsung menulis kode sebelum kamu bisa menjelaskan logikanya dengan kata-kata."*

Dengan menggambar grid dan membuat tabel koordinat per baris, rumus boundary `row === 0 || row === num - 1 || col === 0 || col === num - 1` muncul secara **alami** — tanpa perlu menghafal.

### 2. Bangun Bertahap (Incremental)

> 💡 *"Mulai dari yang paling sederhana: grid penuh → tambah if/else → refactor ke ternary."*

Di sesi mentoring kita, kita membangun kode secara bertahap:
1. **Step 1:** Cetak persegi penuh dulu (tanpa kondisi).
2. **Step 2:** Tambahkan `if/else` untuk melubangi bagian tengah.
3. **Step 3:** Refactor `if/else` menjadi ternary operator.

Setiap step menghasilkan output yang bisa diverifikasi — jika ada error, kita langsung tahu persis di step mana salahnya.

### 3. Persegi Bolong = Fondasi Boundary

> 💡 *"Challenge ini mengajarkan konsep boundary (batas tepi) yang akan terus dipakai di banyak tempat."*

Konsep "cek apakah posisi berada di pinggiran grid" bukan hanya berlaku untuk persegi bolong. Konsep ini muncul di:
- **Game development:** Deteksi apakah karakter menyentuh tepi layar.
- **Image processing:** Menangani piksel di tepi gambar secara berbeda.
- **Matrix operations:** Padding dan border handling.

### 4. Dua Versi, Dua Cara Berpikir

> 💡 *"Kode yang paling efisien bukan selalu yang terbaik. Kode terbaik adalah yang sesuai konteksnya."*

Versi 1 (nested loop) mengajarkan fondasi **cara berpikir per-karakter**. Versi 2 (`.repeat()`) mengajarkan **cara berpikir per-baris** yang lebih efisien. Keduanya valid — tinggal sesuaikan dengan syarat soal dan konteks penggunaannya.

---

<a name="koneksi"></a>
## 🔗 Koneksi ke Challenge Lain

Challenge Persegi Bolong ini memiliki DNA yang sama dengan beberapa challenge lain dalam seri Pattern Printing:

| Challenge | Kesamaan dengan Persegi Bolong | Perbedaan |
|:----------|:-------------------------------|:----------|
| **Persegi Penuh** | Sama-sama pakai nested loop `row × col` | Tidak ada `if/else` — semua posisi bintang |
| **X Pattern** | Sama-sama cek posisi koordinat di grid 2D | Cek diagonal (`row === col`), bukan boundary |
| **Diamond** | Sama-sama membedakan karakter per posisi | Cek jarak ke pusat, bukan jarak ke tepi |
| **Chess Board** | Sama-sama nested loop dengan kondisi | Cek paritas genap/ganjil, bukan boundary |

> [!TIP]
> 💡 **Pola umum:** Semua challenge pattern printing pada dasarnya adalah **nested loop + kondisi**. Yang berubah hanya **rumus kondisinya**:
> - Persegi Bolong: `row === 0 || row === num-1 || col === 0 || col === num-1`
> - X Pattern: `row === col || row + col === num-1`
> - Chess Board: `(row + col) % 2 === 0`
>
> Kuasai satu, dan kamu punya fondasi untuk semuanya!

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [05 — Version Comparison](./05-version-comparison.md) | [README](../README.md) | [07 — Ringkasan Algoritma](./07-ringkasan-algoritma.md) |
