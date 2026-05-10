# 📦 Dokumentasi Challenge: Persegi Bolong (Hollow Square)

> **Dokumentasi Pribadi untuk Pemula** 🌱  
> Belajar membuat pola persegi bolong menggunakan nested loop dan conditional statement

---

## 📑 Daftar Isi

- [Pengenalan](#pengenalan)
- [Deskripsi Problem](#deskripsi-problem)
- [Contoh Output](#contoh-output)
- [Requirements & Kriteria](#requirements-kriteria)
- [Memahami Konsep Dasar](#memahami-konsep-dasar)
  - [Apa itu Persegi Bolong?](#apa-itu-persegi-bolong)
  - [Pola yang Harus Dikenali](#pola-yang-harus-dikenali)
- [Algoritma Penyelesaian](#algoritma-penyelesaian)
- [Visualisasi Grid](#visualisasi-grid)
- [Implementasi Kode](#implementasi-kode)
  - [Versi 1: Basic (Nested If-Else)](#versi-1-basic)
  - [Versi 2: Clean Code (Recommended)](#versi-2-clean-code)
- [Perbandingan Kedua Versi](#perbandingan-kedua-versi)
- [Test Cases](#test-cases)
- [Tips & Catatan](#tips-catatan)

---

<a name="pengenalan"></a>
## 🎯 Pengenalan

Challenge ini bertujuan untuk melatih kemampuan:
- ✅ Menggunakan **nested loop** (loop di dalam loop)
- ✅ Menggunakan **conditional statement** (if/else)
- ✅ Memahami **pattern recognition** (mengenali pola)
- ✅ Melatih **logical thinking** (berpikir logis)

**Level Kesulitan:** 🌟🌟 Pemula-Menengah

---

<a name="deskripsi-problem"></a>
## 📝 Deskripsi Problem

Buatlah sebuah fungsi bernama `persegiBolong(size)` yang akan menghasilkan pola persegi bolong berukuran `size x size`.

**Karakteristik:**
- Bagian **tepi** menggunakan karakter `*` (bintang)
- Bagian **dalam/tengah** menggunakan **spasi** (kosong)
- Setiap baris diakhiri dengan **newline** (`\n`)

---

<a name="contoh-output"></a>
## 🖼️ Contoh Output

### Input: `persegiBolong(5)`

```
*****
*   *
*   *
*   *
*****
```

### Input: `persegiBolong(3)`

```
***
* *
***
```

### Input: `persegiBolong(7)`

```
*******
*     *
*     *
*     *
*     *
*     *
*******
```

---

<a name="requirements-kriteria"></a>
## ⚠️ Requirements & Kriteria

### ✅ Yang WAJIB Ada:

1. **Nested Loop** - Loop di dalam loop (outer loop untuk baris, inner loop untuk kolom)
2. **Conditional Statement** - Menggunakan `if/else` untuk menentukan kapan cetak `*` atau spasi
3. **Parameter** - Fungsi harus menerima parameter `size` atau `num`
4. **Return Value** - Fungsi harus mengembalikan string hasil pola

### ❌ Yang TIDAK Boleh:

- ❌ Tidak boleh hardcode (menulis manual pola untuk setiap ukuran)
- ❌ Tidak boleh menggunakan library eksternal
- ❌ Tidak boleh menggunakan array 2 dimensi (harus string concatenation)

---

<a name="memahami-konsep-dasar"></a>
## 💡 Memahami Konsep Dasar

<a name="apa-itu-persegi-bolong"></a>
### 🔍 Apa itu Persegi Bolong?

Persegi bolong adalah persegi yang hanya memiliki **garis tepi**, sedangkan bagian **dalamnya kosong**.

**Analogi sederhana:**  
Bayangkan sebuah **bingkai foto** - yang terlihat hanya pinggiran framenya saja, bagian tengahnya transparan/kosong.

---

<a name="pola-yang-harus-dikenali"></a>
### 🎨 Pola yang Harus Dikenali

Mari kita bedah pola persegi bolong 5x5:

```
*****  ← Baris 1: SEMUA bintang (baris ATAS)
*   *  ← Baris 2: Bintang di KIRI dan KANAN saja
*   *  ← Baris 3: Bintang di KIRI dan KANAN saja
*   *  ← Baris 4: Bintang di KIRI dan KANAN saja
*****  ← Baris 5: SEMUA bintang (baris BAWAH)
```

**Kesimpulan Pattern:**
- ⭐ Baris pertama → semua `*`
- ⭐ Baris terakhir → semua `*`
- ⭐ Kolom pertama → `*`
- ⭐ Kolom terakhir → `*`
- 💨 Selain itu → spasi

**Dengan kata lain:**  
> **Jika posisi ada di TEPI (border), cetak bintang. Jika tidak, cetak spasi.**

---

<a name="algoritma-penyelesaian"></a>
## 📋 Algoritma Penyelesaian

Berikut adalah langkah-langkah detail untuk menyelesaikan challenge ini:

### 🔢 Step-by-Step:

1. **Siapkan variabel `output`** untuk menyimpan pola persegi.
   - Variabel ini bertipe string kosong `''`
   - Nantinya akan diisi dengan karakter `*` atau spasi

2. **Lakukan perulangan baris** dari `1` sampai `size`.
   - Ini adalah **outer loop**
   - Setiap iterasi = 1 baris dalam pola

3. **Di dalamnya, lakukan perulangan kolom** dari `1` sampai `size`.
   - Ini adalah **inner loop** (nested loop)
   - Setiap iterasi = 1 kolom/karakter dalam baris

4. **Tentukan apakah posisi saat ini berada di:**
   - **Baris atas** → `row === 1`
   - **Baris bawah** → `row === size`
   - **Kolom kiri** → `col === 1`
   - **Kolom kanan** → `col === size`

5. **Jika posisi berada di salah satu sisi tersebut** (border):
   - Tambahkan `*` ke variabel `output`
   - **Jika tidak** (bagian dalam):
   - Tambahkan spasi ke variabel `output`

6. **Setelah satu baris selesai**, tambahkan karakter **newline** (`\n`).
   - Ini membuat baris berikutnya turun ke bawah

7. **Kembalikan nilai `output`** sebagai hasil akhir pola.

---

<a name="visualisasi-grid"></a>
## 🎯 Visualisasi Grid

Untuk membantu memahami, mari visualisasikan grid 5x5 dengan koordinat:

```
     col: 1   2   3   4   5
row: 1    *   *   *   *   *   ← semua border (baris atas)
     2    *   ·   ·   ·   *   ← border kiri & kanan
     3    *   ·   ·   ·   *   ← border kiri & kanan
     4    *   ·   ·   ·   *   ← border kiri & kanan
     5    *   *   *   *   *   ← semua border (baris bawah)
```

**Legenda:**
- `*` = Posisi border (tepi)
- `·` = Posisi dalam (spasi)

**Kondisi Border:**
- Posisi `(1, *)` = baris atas → **border** ✅
- Posisi `(5, *)` = baris bawah → **border** ✅
- Posisi `(*, 1)` = kolom kiri → **border** ✅
- Posisi `(*, 5)` = kolom kanan → **border** ✅
- Posisi `(2-4, 2-4)` = dalam → **bukan border** ❌

---

<a name="implementasi-kode"></a>
## 💻 Implementasi Kode

<a name="versi-1-basic"></a>
### 📌 Versi 1: Basic (Nested If-Else)

Versi ini menggunakan **nested if-else** yang lebih eksplisit dan mudah dipahami pemula.

```javascript
function persegiBolong(num) {
  let pattern = '';

  // Loop untuk setiap baris
  for (let i = 1; i <= num; i++) {
    // Loop untuk setiap kolom
    for (let j = 1; j <= num; j++) {
      
      // Cek apakah di baris pertama atau terakhir
      if (i === 1 || i === num) {
        pattern += '*'; // Cetak bintang
      } else {
        // Jika bukan baris pertama/terakhir, cek kolom
        if (j === 1 || j === num) {
          pattern += '*'; // Cetak bintang di kolom kiri/kanan
        } else {
          pattern += ' '; // Cetak spasi untuk bagian dalam
        }
      }
    }
    // Setelah satu baris selesai, tambahkan newline
    pattern += '\n';
  }

  return pattern;
}

// Test
console.log(persegiBolong(5));
```

**✅ Kelebihan:**
- Logika jelas dan mudah diikuti
- Cocok untuk pemula yang baru belajar nested loop
- Memenuhi requirement (nested loop + if/else)

**⚠️ Kekurangan:**
- Nested if-else membuat kode agak panjang
- Variable naming (`i`, `j`) kurang deskriptif
- Agak sulit di-maintain jika ada perubahan

---

<a name="versi-2-clean-code"></a>
### ⭐ Versi 2: Clean Code (Recommended)

Versi ini lebih **clean** dan **mudah dibaca** dengan menggunakan variable helper yang deskriptif.

```javascript
function persegiBolong(size) {
  let output = '';

  // Loop untuk setiap baris
  for (let row = 1; row <= size; row++) {
    // Loop untuk setiap kolom
    for (let col = 1; col <= size; col++) {
      
      // Deteksi posisi dengan variable yang jelas
      const isTop = row === 1;
      const isBottom = row === size;
      const isLeft = col === 1;
      const isRight = col === size;
      
      // Gabungkan semua kondisi border
      const isBorder = isTop || isBottom || isLeft || isRight;
      
      // Tambahkan karakter sesuai posisi
      if (isBorder) {
        output += '*';
      } else {
        output += ' ';
      }
    }
    // Tambahkan newline setelah satu baris
    output += '\n';
  }

  return output;
}

// Test
console.log(persegiBolong(5));
```

**✨ Kelebihan:**
- **Self-documenting code** - kode menjelaskan dirinya sendiri
- Variable naming yang **sangat jelas** (`isTop`, `isBottom`, dll)
- **Flat structure** - tidak ada nested if-else yang dalam
- **Mudah di-maintain** - jika ada perubahan, tinggal ubah kondisi `isBorder`
- **Professional** - sesuai best practice clean code

**💡 Penjelasan Detail:**

```javascript
const isTop = row === 1;           // Apakah ini baris pertama?
const isBottom = row === size;     // Apakah ini baris terakhir?
const isLeft = col === 1;          // Apakah ini kolom pertama?
const isRight = col === size;      // Apakah ini kolom terakhir?
const isBorder = isTop || isBottom || isLeft || isRight; // Gabungan semua kondisi
```

Dengan cara ini, siapa pun yang membaca kode langsung paham **apa yang sedang dicek** tanpa perlu mikir panjang.

---

<a name="perbandingan-kedua-versi"></a>
## ⚖️ Perbandingan Kedua Versi

| Aspek | Versi 1 (Basic) | Versi 2 (Clean Code) |
|-------|----------------|----------------------|
| **Readability** | ⭐⭐⭐ Cukup jelas | ⭐⭐⭐⭐⭐ Sangat jelas |
| **Maintainability** | ⭐⭐ Agak sulit | ⭐⭐⭐⭐⭐ Mudah |
| **Variable Names** | `i`, `j`, `pattern` | `row`, `col`, `output`, `isTop`, dll |
| **Struktur** | Nested if-else | Flat if-else |
| **Best for** | Pemula banget | Pemula yang ingin langsung belajar clean code |

**📌 Rekomendasi:**
- Jika baru pertama kali belajar → mulai dari **Versi 1**
- Jika sudah paham konsep dasar → langsung ke **Versi 2**
- Untuk portfolio atau project → gunakan **Versi 2**

---

<a name="test-cases"></a>
## 🧪 Test Cases

Coba jalankan fungsi dengan berbagai input untuk memastikan kode bekerja dengan benar:

### Test Case 1: Size 3
```javascript
console.log(persegiBolong(3));
```
**Output:**
```
***
* *
***
```

### Test Case 2: Size 5
```javascript
console.log(persegiBolong(5));
```
**Output:**
```
*****
*   *
*   *
*   *
*****
```

### Test Case 3: Size 7
```javascript
console.log(persegiBolong(7));
```
**Output:**
```
*******
*     *
*     *
*     *
*     *
*     *
*******
```

### Test Case 4: Size 1 (Edge Case)
```javascript
console.log(persegiBolong(1));
```
**Output:**
```
*
```

### Test Case 5: Size 2 (Edge Case)
```javascript
console.log(persegiBolong(2));
```
**Output:**
```
**
**
```

---

<a name="tips-catatan"></a>
## 💡 Tips & Catatan

### ✅ Do's (Yang Harus Dilakukan):

1. **Pahami pola dulu sebelum coding**
   - Gambar pola di kertas
   - Identifikasi mana yang border, mana yang dalam

2. **Mulai dari yang sederhana**
   - Test dengan size kecil dulu (3 atau 5)
   - Pastikan logika benar sebelum mencoba size besar

3. **Gunakan console.log untuk debugging**
   ```javascript
   console.log(`Row: ${row}, Col: ${col}, isBorder: ${isBorder}`);
   ```

4. **Beri nama variable yang jelas**
   - Lebih baik `isTopRow` daripada `x`
   - Lebih baik `output` daripada `result`

### ❌ Don'ts (Yang Harus Dihindari):

1. **Jangan langsung coding tanpa planning**
   - Pikirkan algoritma dulu
   - Buat pseudocode jika perlu

2. **Jangan pakai variable names yang tidak jelas**
   - Hindari `a`, `b`, `x`, `y` tanpa konteks
   - Gunakan nama yang menjelaskan tujuannya

3. **Jangan copy-paste tanpa memahami**
   - Pahami setiap baris kode
   - Coba modifikasi untuk membuktikan pemahaman

### 🎓 Cara Belajar yang Efektif:

1. **Pahami konsep** → Baca dokumentasi ini dengan teliti
2. **Tulis algoritma** → Tulis langkah-langkah dengan bahasa sendiri
3. **Implementasi** → Tulis kode dari nol tanpa melihat contoh
4. **Compare** → Bandingkan dengan solusi yang ada
5. **Refactor** → Perbaiki kode menjadi lebih clean
6. **Repeat** → Coba lagi besok tanpa melihat dokumentasi

### 🔄 Latihan Tambahan:

Setelah menguasai persegi bolong, coba challenge serupa:

1. **Persegi Penuh** - Semua karakter `*`
2. **Segitiga Hollow** - Segitiga yang hanya tepinya saja
3. **Diamond Hollow** - Bentuk berlian yang bolong
4. **Custom Character** - Ganti `*` dengan karakter pilihan user

---

## 🎉 Penutup

Selamat! Anda telah mempelajari cara membuat pola persegi bolong menggunakan nested loop dan conditional statement. 

**Key Takeaways:**
- ✅ Nested loop untuk navigasi grid 2D
- ✅ Conditional untuk menentukan pattern
- ✅ Clean code untuk readability
- ✅ Variable naming yang deskriptif

**Next Steps:**
- Coba implementasi sendiri tanpa melihat kode
- Modifikasi untuk membuat pattern lain
- Refactor kode menjadi lebih efisien

---

**✨ Happy Coding! Keep Learning! 🚀**