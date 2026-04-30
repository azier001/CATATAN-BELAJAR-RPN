# 🎮 Dokumentasi Game Proxytia untuk Pemula

> **Catatan Pribadi**: Dokumentasi pembelajaran membuat game sederhana menggunakan JavaScript

---

## 📑 Daftar Isi

- [Pengenalan](#pengenalan)
- [Apa itu Game Proxytia?](#apa-itu-game-proxytia)
- [Konsep Dasar yang Dipelajari](#konsep-dasar-yang-dipelajari)
- [Algoritma Program](#algoritma-program)
- [Kode Lengkap](#kode-lengkap)
- [Penjelasan Kode Per Bagian](#penjelasan-kode-per-bagian)
  - [1. Deklarasi Variabel](#1-deklarasi-variabel)
  - [2. Input Nama](#2-input-nama)
  - [3. Validasi Nama](#3-validasi-nama)
  - [4. Input Peran](#4-input-peran)
  - [5. Validasi Peran](#5-validasi-peran)
  - [6. Cek Peran dengan Switch-Case](#6-cek-peran-dengan-switch-case)
- [Konsep Penting yang Digunakan](#konsep-penting-yang-digunakan)
  - [Apa itu Prompt?](#apa-itu-prompt)
  - [Apa itu Alert?](#apa-itu-alert)
  - [Apa itu If-Else?](#apa-itu-if-else)
  - [Apa itu Switch-Case?](#apa-itu-switch-case)
  - [Apa itu Backtick?](#apa-itu-backtick)
- [Hasil Output](#hasil-output)
- [Tips Belajar](#tips-belajar)
- [Kesimpulan](#kesimpulan)

---

<a name="pengenalan"></a>
## 🎯 Pengenalan

Ini adalah dokumentasi pribadi tentang pembuatan game sederhana bernama **Proxytia**. Game ini dibuat menggunakan **JavaScript** dan merupakan latihan untuk memahami konsep dasar pemrograman seperti:

✅ Variabel  
✅ Input dari user  
✅ Validasi data  
✅ Percabangan (if-else dan switch-case)  
✅ String interpolasi dengan backtick  

---

<a name="apa-itu-game-proxytia"></a>
## 🕹️ Apa itu Game Proxytia?

**Proxytia** adalah game sederhana berbasis teks di mana pemain harus:

1. 📝 Memasukkan **nama** mereka
2. ⚔️ Memilih **peran** (Ksatria, Tabib, atau Penyihir)
3. 🎉 Mendapatkan pesan sambutan sesuai peran yang dipilih

**Tujuan Pembelajaran:**
- Belajar bagaimana menerima input dari user
- Belajar memvalidasi input agar tidak kosong
- Belajar membuat percabangan berdasarkan pilihan user

---

<a name="konsep-dasar-yang-dipelajari"></a>
## 📚 Konsep Dasar yang Dipelajari

Dalam project ini, kita belajar:

| Konsep | Kegunaan |
|--------|----------|
| 🔤 **Variabel** | Menyimpan data nama dan peran |
| 💬 **Prompt** | Meminta input dari user |
| ⚠️ **Alert** | Menampilkan peringatan |
| 🔀 **If-Else** | Validasi input kosong atau tidak |
| 🎯 **Switch-Case** | Mengecek peran yang dipilih |
| 📝 **Console.log** | Menampilkan output di console |
| 🎨 **Backtick** | Menggabungkan variabel dengan string |

---

<a name="algoritma-program"></a>
## 📐 Algoritma Program

Sebelum coding, kita buat dulu **algoritma** (langkah-langkah) programnya:

```
1. User input nama
2. Jika nama kosong → tampilkan peringatan "nama wajib diisi"
3. Jika nama terisi → lanjut input peran
4. Jika peran kosong → tampilkan peringatan "Pilih Peranmu untuk memulai game"
5. Jika peran terisi → cek peran menggunakan switch-case:
   ⚔️ Jika Ksatria → tampilkan pesan Ksatria
   🏥 Jika Tabib → tampilkan pesan Tabib
   🔮 Jika Penyihir → tampilkan pesan Penyihir
   🤖 Jika peran lain → tampilkan pesan bot
```

> **💡 Tips:** Algoritma adalah "resep" sebelum memasak. Bikin dulu langkah-langkahnya, baru coding!

---

<a name="kode-lengkap"></a>
## 💻 Kode Lengkap

```javascript
let nama = "",
  peran = "";

//code disini gunakan console.log untuk outputnya

nama = prompt('Masukkan nama kamu : ')

if (!nama) {
  alert('nama wajib diisi')
} else {
  peran = prompt('Masukkan Peran yang kamu pilih : \nKsatria, Tabib, dan Penyihir. ')
  if (!peran) {
    alert('Pilih Peranmu untuk memulai game')
  } else {
    switch (peran) {
      case 'Ksatria':
        console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
        break;

      case 'Tabib':
        console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`)
        break;

      case 'Penyihir':
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
        break;

      default:
        console.log('tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada')
    }
  }
}
```

---

<a name="penjelasan-kode-per-bagian"></a>
## 🔍 Penjelasan Kode Per Bagian

Mari kita bedah kode di atas satu per satu agar mudah dipahami!

---

<a name="1-deklarasi-variabel"></a>
### 1️⃣ Deklarasi Variabel

```javascript
let nama = "",
  peran = "";
```

**Penjelasan:**
- `let` = kata kunci untuk membuat variabel (tempat menyimpan data)
- `nama` = variabel untuk menyimpan nama pemain
- `peran` = variabel untuk menyimpan peran yang dipilih
- `""` = string kosong (nilai awal)

> **💡 Kenapa pakai `let`?**  
> Karena nilai variabel ini akan berubah setelah user input!

---

<a name="2-input-nama"></a>
### 2️⃣ Input Nama

```javascript
nama = prompt('Masukkan nama kamu : ')
```

**Penjelasan:**
- `prompt()` = fungsi untuk memunculkan kotak input
- User diminta memasukkan nama
- Hasil input disimpan ke variabel `nama`

**Contoh:**
- User ketik "Budi" → `nama` jadi `"Budi"`
- User klik OK tanpa isi → `nama` jadi `""` (kosong)

---

<a name="3-validasi-nama"></a>
### 3️⃣ Validasi Nama

```javascript
if (!nama) {
  alert('nama wajib diisi')
} else {
  // lanjut ke input peran
}
```

**Penjelasan:**
- `if (!nama)` = jika nama kosong (tanda `!` artinya "tidak")
- `alert()` = munculkan popup peringatan
- `else` = jika nama terisi, lanjut ke langkah berikutnya

**Analogi:**
```
Jika nama kosong → Tampilkan peringatan
Jika nama ada isinya → Lanjut
```

---

<a name="4-input-peran"></a>
### 4️⃣ Input Peran

```javascript
peran = prompt('Masukkan Peran yang kamu pilih : \nKsatria, Tabib, dan Penyihir. ')
```

**Penjelasan:**
- Sama seperti input nama, tapi kali ini minta input peran
- `\n` = baris baru (enter) di dalam teks
- User harus ketik salah satu: **Ksatria**, **Tabib**, atau **Penyihir**

---

<a name="5-validasi-peran"></a>
### 5️⃣ Validasi Peran

```javascript
if (!peran) {
  alert('Pilih Peranmu untuk memulai game')
} else {
  // cek peran dengan switch-case
}
```

**Penjelasan:**
- Sama seperti validasi nama
- Jika peran kosong → peringatan
- Jika peran terisi → lanjut cek peran apa yang dipilih

---

<a name="6-cek-peran-dengan-switch-case"></a>
### 6️⃣ Cek Peran dengan Switch-Case

```javascript
switch (peran) {
  case 'Ksatria':
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
    break;

  case 'Tabib':
    console.log(`halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`)
    break;

  case 'Penyihir':
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
    break;

  default:
    console.log('tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada')
}
```

**Penjelasan:**

| Bagian | Fungsi |
|--------|--------|
| `switch (peran)` | Cek isi variabel peran |
| `case 'Ksatria':` | Jika peran = Ksatria |
| `console.log()` | Tampilkan pesan di console |
| `break;` | Keluar dari switch (jangan lanjut ke case berikutnya) |
| `default:` | Jika peran tidak ada yang cocok (seperti else) |

**Alur Kerja:**
```
Jika peran = "Ksatria" → Tampilkan pesan Ksatria
Jika peran = "Tabib" → Tampilkan pesan Tabib
Jika peran = "Penyihir" → Tampilkan pesan Penyihir
Jika peran = yang lain → Tampilkan pesan bot
```

---

<a name="konsep-penting-yang-digunakan"></a>
## 🎓 Konsep Penting yang Digunakan

<a name="apa-itu-prompt"></a>
### 📝 Apa itu Prompt?

**Prompt** adalah fungsi JavaScript untuk meminta input dari user.

**Sintaks:**
```javascript
let variabel = prompt('Pertanyaan ke user')
```

**Contoh:**
```javascript
let umur = prompt('Berapa umur kamu?')
// User ketik: 20
// Maka umur = "20"
```

> **⚠️ Catatan:** Hasil prompt selalu **string** (teks), bukan angka!

---

<a name="apa-itu-alert"></a>
### ⚠️ Apa itu Alert?

**Alert** adalah fungsi untuk menampilkan popup peringatan.

**Sintaks:**
```javascript
alert('Pesan peringatan')
```

**Contoh:**
```javascript
alert('Nama tidak boleh kosong!')
// Muncul popup dengan pesan di atas
```

---

<a name="apa-itu-if-else"></a>
### 🔀 Apa itu If-Else?

**If-Else** adalah percabangan untuk membuat keputusan.

**Sintaks:**
```javascript
if (kondisi) {
  // kode jika kondisi benar
} else {
  // kode jika kondisi salah
}
```

**Contoh:**
```javascript
let nilai = 80

if (nilai >= 75) {
  console.log('Lulus!')
} else {
  console.log('Tidak Lulus')
}
// Output: Lulus!
```

**Operator yang Sering Dipakai:**

| Operator | Arti |
|----------|------|
| `==` | Sama dengan |
| `!=` | Tidak sama dengan |
| `>` | Lebih besar |
| `<` | Lebih kecil |
| `>=` | Lebih besar atau sama dengan |
| `<=` | Lebih kecil atau sama dengan |
| `!` | Tidak (negasi) |

---

<a name="apa-itu-switch-case"></a>
### 🎯 Apa itu Switch-Case?

**Switch-Case** adalah percabangan untuk mengecek banyak kemungkinan nilai.

**Sintaks:**
```javascript
switch (variabel) {
  case nilai1:
    // kode jika variabel = nilai1
    break;
  case nilai2:
    // kode jika variabel = nilai2
    break;
  default:
    // kode jika tidak ada yang cocok
}
```

**Kapan Pakai Switch-Case?**
- Ketika ada **banyak pilihan** (lebih dari 2)
- Lebih rapi daripada banyak `if-else`

**Contoh:**
```javascript
let hari = 'Senin'

switch (hari) {
  case 'Senin':
    console.log('Semangat kerja!')
    break;
  case 'Jumat':
    console.log('Hampir weekend!')
    break;
  default:
    console.log('Hari biasa')
}
```

> **⚠️ Jangan Lupa `break;`**  
> Kalau tidak pakai `break`, kode akan lanjut ke case berikutnya!

---

<a name="apa-itu-backtick"></a>
### 🎨 Apa itu Backtick?

**Backtick** (`` ` ``) adalah tanda kutip khusus untuk **template literal** (string yang bisa memasukkan variabel).

**Sintaks:**
```javascript
`Teks ${variabel} teks lagi`
```

**Contoh Tanpa Backtick:**
```javascript
let nama = 'Budi'
console.log('Halo ' + nama + ', selamat datang!')
// Output: Halo Budi, selamat datang!
```

**Contoh Dengan Backtick:**
```javascript
let nama = 'Budi'
console.log(`Halo ${nama}, selamat datang!`)
// Output: Halo Budi, selamat datang!
```

**Keuntungan Backtick:**
- ✅ Lebih rapi
- ✅ Tidak perlu pakai `+` berulang kali
- ✅ Bisa multiline (baris banyak)

> **💡 Tips:** Backtick ada di sebelah kiri angka 1 di keyboard!

---

<a name="hasil-output"></a>
## 🎉 Hasil Output

Berikut contoh hasil output berdasarkan input user:

### ✅ Skenario 1: Input Normal
```
Nama: Budi
Peran: Ksatria

Output:
halo Ksatria Budi , kamu dapat menyerang dengan senjatamu!
```

### ✅ Skenario 2: Nama Kosong
```
Nama: (kosong)

Alert:
nama wajib diisi
```

### ✅ Skenario 3: Peran Kosong
```
Nama: Budi
Peran: (kosong)

Alert:
Pilih Peranmu untuk memulai game
```

### ✅ Skenario 4: Peran Tidak Valid
```
Nama: Budi
Peran: Ninja

Output:
tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
```

---

<a name="tips-belajar"></a>
## 💡 Tips Belajar

### 🔥 Untuk Pemula:

1. **Jangan Langsung Hapal Sintaks**
   - Fokus pahami konsepnya dulu
   - Sintaks bisa dicari di Google kapan saja

2. **Coba Ubah-Ubah Kode**
   - Tambah peran baru (misal: Pemanah)
   - Ganti pesan outputnya
   - Tambah validasi lain

3. **Debugging itu Normal**
   - Kalau error, baca pesannya baik-baik
   - Cek typo (salah ketik)
   - Cek tanda kurung, kurung kurawal, dan titik koma

4. **Praktek, Praktek, Praktek!**
   - Bikin variasi game sendiri
   - Tambah fitur baru
   - Eksperimen dengan ide sendiri

### 🎯 Latihan Lanjutan:

Coba tambahkan fitur:
- [ ] Tambah peran ke-4: **Pemanah**
- [ ] Tambah input level (1-10)
- [ ] Validasi peran case-insensitive (bisa "ksatria" atau "Ksatria")
- [ ] Tambah fitur ulang game dengan `confirm()`

---

<a name="kesimpulan"></a>
## 🏆 Kesimpulan

Dalam project **Game Proxytia** ini, kita sudah belajar:

✅ Membuat variabel dengan `let`  
✅ Menerima input dengan `prompt()`  
✅ Menampilkan peringatan dengan `alert()`  
✅ Validasi input dengan `if-else`  
✅ Percabangan banyak pilihan dengan `switch-case`  
✅ String interpolasi dengan backtick  
✅ Menampilkan output dengan `console.log()`  

**Kode sudah:**
- ✅ Sesuai dengan kriteria soal
- ✅ Terstruktur dengan baik
- ✅ Mudah dibaca dan dipahami

---

## 🎓 Penutup

> **"Coding itu seperti belajar bahasa baru. Awalnya sulit, tapi semakin sering praktek, semakin lancar!"**

Selamat belajar dan terus semangat! 🚀

---

**📝 Catatan Pribadi:**
- Tanggal belajar: 27 Desember 2025
- Topik: JavaScript Dasar - Game Proxytia
- Status: ✅ Berhasil membuat game sederhana!

---

<div align="center">

**🎮 Happy Coding! 🎮**

</div>
