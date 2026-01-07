# 📘 Dokumentasi: Menghitung Jumlah Kata dalam Kalimat
## Part 1: Dasar & Pembelajaran

---

## 📋 Daftar Isi

- [🎯 Pengenalan](#pengenalan)
- [🤔 Memahami Masalah](#memahami-masalah)
  - [Deskripsi Soal](#deskripsi-soal)
  - [Input & Output](#input-output)
  - [Test Cases](#test-cases)
- [🚀 Solusi Pertama: Pendekatan Sederhana](#solusi-pertama)
  - [Kode Versi 1](#kode-versi-1)
  - [Cara Kerja](#cara-kerja-v1)
  - [Analisis Kelebihan & Kekurangan](#analisis-v1)
- [💡 Memahami Konsep State/Flag](#konsep-state-flag)
  - [Apa itu State/Flag?](#apa-itu-state)
  - [Pseudocode Algoritma](#pseudocode)
  - [Konsep "Di Dalam Kata" vs "Di Luar Kata"](#konsep-dalam-luar)
- [✨ Solusi Final: Pendekatan State Flag](#solusi-final)
  - [Kode Versi Final](#kode-final)
  - [Penjelasan Line-by-Line](#penjelasan-line)
  - [Langkah-langkah Algoritma](#langkah-algoritma)
  - [Ringkasan Algoritma Versi Ujian](#ringkasan-algoritma)

---

<a name="pengenalan"></a>
## 🎯 Pengenalan

Selamat datang di dokumentasi pembelajaran **Menghitung Jumlah Kata dalam Kalimat**! 

### 📚 Apa yang Akan Dipelajari?

Dalam dokumentasi ini, Anda akan belajar:
- ✅ Memahami masalah penghitungan kata
- ✅ Membuat solusi sederhana (versi 1)
- ✅ Mengidentifikasi kelemahan solusi pertama
- ✅ Memahami konsep **State/Flag** dalam algoritma
- ✅ Membuat solusi yang lebih robust dan handle edge cases
- ✅ Menulis kode yang clean dan mengikuti best practices

### 🎓 Tujuan Pembelajaran

Setelah mempelajari dokumentasi ini, Anda akan:
- 🧠 Memahami cara berpikir algoritmik
- 🔍 Mampu mengidentifikasi edge cases
- 💪 Bisa menggunakan teknik state/flag untuk problem solving
- ✨ Menulis kode yang efisien dan mudah dipahami

> **💡 Catatan:** Dokumentasi ini dibuat untuk pemula. Jangan terburu-buru, pahami setiap bagian dengan baik sebelum lanjut ke bagian berikutnya!

---

<a name="memahami-masalah"></a>
## 🤔 Memahami Masalah

<a name="deskripsi-soal"></a>
### 📖 Deskripsi Soal

**Buatlah fungsi `hitungJumlahKata(kalimat)`** yang menerima sebuah string kalimat dan mengembalikan jumlah kata dalam kalimat tersebut.

**Definisi "kata":** Sekelompok karakter yang dipisahkan oleh spasi.

<a name="input-output"></a>
### 📥 Input & Output

| Input (String) | Output (Number) | Penjelasan |
|----------------|-----------------|------------|
| `"I have a dream"` | `4` | Ada 4 kata: I, have, a, dream |
| `"Hello"` | `1` | Hanya 1 kata |
| `""` (string kosong) | `0` | Tidak ada kata |
| `"  hello  world  "` | `2` | Ada spasi di awal/akhir/tengah ganda |

<a name="test-cases"></a>
### ✅ Test Cases

```javascript
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
```

---

<a name="solusi-pertama"></a>
## 🚀 Solusi Pertama: Pendekatan Sederhana

<a name="kode-versi-1"></a>
### 💻 Kode Versi 1

```javascript
function hitungJumlahKata(kalimat) {
  let countString = 0
  let countSpace = 0
  
  if(kalimat.length === 1) return 1

  for (const char of kalimat) {
    if (char === ' ') {
      countSpace++
    }
  }
  
  countString = countSpace + 1
  
  return countString
}
```

<a name="cara-kerja-v1"></a>
### 🔍 Cara Kerja

**Logika sederhana:**
1. Hitung jumlah spasi dalam kalimat
2. Jumlah kata = Jumlah spasi + 1

**Contoh:**
```
"I have a dream"
Spasi: 3
Kata: 3 + 1 = 4 ✓
```

**Mengapa +1?**
Karena dalam kalimat normal, jumlah spasi selalu 1 lebih sedikit dari jumlah kata.

```
kata[spasi]kata[spasi]kata[spasi]kata
  1         2         3         4
     ↑         ↑         ↑
   spasi 1   spasi 2   spasi 3
```

<a name="analisis-v1"></a>
### 📊 Analisis Kelebihan & Kekurangan

#### ✅ Kelebihan:
- **Mudah dipahami** - Logika sangat straightforward
- **Singkat** - Hanya beberapa baris kode
- **Bekerja untuk test case sederhana** - Semua test case yang diberikan akan menghasilkan output yang benar

#### ❌ Kekurangan:

**1. Tidak menangani string kosong**
```javascript
hitungJumlahKata('') 
// Expected: 0
// Actual: 1 ❌ (karena 0 + 1 = 1)
```

**2. Tidak menangani spasi ganda**
```javascript
hitungJumlahKata('hello  world')  // 2 spasi
// Expected: 2 kata
// Actual: 3 kata ❌ (karena 2 spasi + 1 = 3)
```

**3. Tidak menangani spasi di awal/akhir**
```javascript
hitungJumlahKata('  hello  ')
// Expected: 1 kata
// Actual: 3 kata ❌ (karena 2 spasi + 1 = 3)
```

**4. Kondisi `if(kalimat.length === 1)` terlalu spesifik**
```javascript
hitungJumlahKata(' ')  // string 1 karakter berupa spasi
// Expected: 0 kata
// Actual: 1 ❌
```

### 🤔 Kesimpulan Versi 1

Solusi ini **bekerja untuk kasus sederhana**, tetapi **tidak robust** untuk edge cases. Kita perlu pendekatan yang lebih baik!

> **💡 Pelajaran:** Selalu pikirkan edge cases saat membuat algoritma!

---

<a name="konsep-state-flag"></a>
## 💡 Memahami Konsep State/Flag

<a name="apa-itu-state"></a>
### 🏁 Apa itu State/Flag?

**State/Flag** adalah variabel boolean yang digunakan untuk **melacak kondisi atau status** dalam algoritma.

Dalam konteks penghitungan kata:
- **State:** Apakah kita sedang berada **di dalam kata** atau **di luar kata**?
- **Flag:** Variabel boolean `isInsideWord` untuk menandai state ini

```javascript
let isInsideWord = false  // false = di luar kata, true = di dalam kata
```

### 🎯 Mengapa Perlu State/Flag?

Dengan state, kita bisa:
- ✅ Mendeteksi **kapan kata baru dimulai** (transisi dari luar → dalam kata)
- ✅ Menghindari penghitungan ganda untuk 1 kata yang sama
- ✅ Menangani spasi ganda dengan benar

<a name="pseudocode"></a>
### 📝 Pseudocode Algoritma

Berikut pseudocode yang akan kita implementasikan:

```
Untuk setiap karakter dalam kalimat_bersih:

    Jika karakter BUKAN spasi:
        Jika sebelumnya kita di luar kata:
            Tambahkan jumlah kata sebanyak 1
            Tandai sekarang kita berada di dalam kata

    Jika karakter ADALAH spasi:
        Tandai sekarang kita berada di luar kata
```

<a name="konsep-dalam-luar"></a>
### 🔄 Konsep "Di Dalam Kata" vs "Di Luar Kata"

Mari visualisasikan dengan contoh `"I have"`:

```
Posisi:  I     h a v e
State:  [IN] [OUT] [IN][IN][IN]
         ↑     ↑    ↑
      Masuk  Keluar Masuk
      kata 1        kata 2
```

**Aturan Transisi:**
- 🟢 **Masuk ke dalam kata:** Ketemu karakter bukan spasi DAN state sebelumnya "di luar kata"
- 🔴 **Keluar dari kata:** Ketemu spasi

**Penghitungan:**
- ➕ Kita hanya **menambah counter** saat **masuk ke dalam kata** (transisi luar → dalam)
- ➖ Kita **tidak menambah** saat sudah di dalam kata

### 💭 Analogi Sederhana

Bayangkan Anda berjalan di trotoar:
- **Rumah = Kata**
- **Jalan = Spasi**

```
Jalan → Rumah 1 → Jalan → Rumah 2 → Jalan
↓       ↓          ↓       ↓
Luar    Dalam      Luar    Dalam
```

Anda hanya **menghitung rumah** ketika **pertama kali masuk** ke rumah, bukan setiap langkah di dalam rumah.

---

<a name="solusi-final"></a>
## ✨ Solusi Final: Pendekatan State Flag

<a name="kode-final"></a>
### 💻 Kode Versi Final

```javascript
function hitungJumlahKata(kalimat) {
  const normalizedSentence = kalimat.trim()
  let isInsideWord = false
  let countSentence = 0

  if (normalizedSentence.length === 0) {
    return 0
  }

  for (const char of normalizedSentence) {
    if (char !== ' ') {
      if (!isInsideWord) {
        countSentence++
        isInsideWord = true
      }
    } else {
      isInsideWord = false
    }
  }

  return countSentence
}
```

<a name="penjelasan-line"></a>
### 📖 Penjelasan Line-by-Line

```javascript
function hitungJumlahKata(kalimat) {
```
🔹 Deklarasi fungsi dengan parameter `kalimat`

---

```javascript
  const normalizedSentence = kalimat.trim()
```
🔹 **Normalisasi input:** Menghapus spasi di awal dan akhir  
🔹 Contoh: `"  hello  "` → `"hello"`  
🔹 Ini penting agar spasi di ujung tidak mengganggu penghitungan

---

```javascript
  let isInsideWord = false
```
🔹 **Inisialisasi flag state**  
🔹 Awalnya kita **belum membaca apapun**, jadi state = **di luar kata**  
🔹 `false` = di luar kata, `true` = di dalam kata

---

```javascript
  let countSentence = 0
```
🔹 **Inisialisasi counter kata**  
🔹 Akan bertambah setiap kali kita menemukan kata baru

---

```javascript
  if (normalizedSentence.length === 0) {
    return 0
  }
```
🔹 **Validasi edge case:** String kosong  
🔹 Jika input hanya spasi atau kosong, setelah `trim()` akan jadi string kosong  
🔹 String kosong = 0 kata

---

```javascript
  for (const char of normalizedSentence) {
```
🔹 **Loop setiap karakter** dalam kalimat yang sudah dinormalisasi  
🔹 `char` akan berisi karakter satu per satu

---

```javascript
    if (char !== ' ') {
```
🔹 **Cek:** Apakah karakter **bukan spasi**?

---

```javascript
      if (!isInsideWord) {
```
🔹 **Cek lagi:** Apakah kita sedang **di luar kata**?  
🔹 `!isInsideWord` berarti `isInsideWord === false`  
🔹 Jika YA (bukan spasi DAN di luar kata) → **Kata baru ditemukan!**

---

```javascript
        countSentence++
```
🔹 **Tambah counter kata** karena menemukan kata baru

---

```javascript
        isInsideWord = true
```
🔹 **Ubah state** menjadi "di dalam kata"  
🔹 Agar karakter berikutnya di kata yang sama tidak dihitung lagi

---

```javascript
    } else {
```
🔹 Jika karakter **adalah spasi**

---

```javascript
      isInsideWord = false
```
🔹 **Ubah state** menjadi "di luar kata"  
🔹 Siap untuk mendeteksi kata berikutnya

---

```javascript
  return countSentence
```
🔹 Kembalikan total jumlah kata yang sudah dihitung

---

<a name="langkah-algoritma"></a>
### 📋 Langkah-langkah Algoritma

#### **1️⃣ Normalisasi Input**
- Bersihkan spasi di awal dan akhir dengan `trim()`
- Pastikan input bersih untuk pemrosesan

#### **2️⃣ Validasi Awal**
- Cek apakah string kosong setelah normalisasi
- Jika kosong → return 0

#### **3️⃣ Inisialisasi State**
- `isInsideWord = false` (belum ada kata yang sedang dibaca)
- `countSentence = 0` (belum ada kata yang dihitung)

#### **4️⃣ Pemrosesan Karakter**
Loop setiap karakter dan lakukan:
- **Jika karakter bukan spasi DAN di luar kata:**
  - Kata baru ditemukan! ✨
  - Tambah counter: `countSentence++`
  - Masuk ke dalam kata: `isInsideWord = true`
- **Jika karakter bukan spasi DAN sudah di dalam kata:**
  - Masih kata yang sama, tidak ada aksi
- **Jika karakter adalah spasi:**
  - Keluar dari kata: `isInsideWord = false`

#### **5️⃣ Hasil Akhir**
- Return total kata yang sudah dihitung

---

<a name="ringkasan-algoritma"></a>
### 📝 Ringkasan Algoritma Versi Ujian

```
ALGORITMA HITUNG JUMLAH KATA

1. Normalisasi input
   - Kalimat dibersihkan dari spasi di awal dan di akhir
     agar tidak memengaruhi perhitungan

2. Validasi awal
   - Jika hasil normalisasi menghasilkan string kosong,
     maka jumlah kata adalah 0 dan proses dihentikan

3. Inisialisasi state
   - Sebuah penanda kondisi (isInsideWord) digunakan untuk
     mengetahui apakah posisi saat ini berada di dalam kata
     atau di luar kata
   - Penghitung kata diinisialisasi dengan nilai 0

4. Pemrosesan karakter
   Kalimat dibaca karakter demi karakter:
   - Jika karakter bukan spasi dan sebelumnya berada di luar kata:
     * Satu kata baru terdeteksi
     * Penghitung kata ditambah satu
     * Status diubah menjadi di dalam kata
   - Jika karakter adalah spasi:
     * Status diubah menjadi di luar kata

5. Hasil akhir
   - Setelah seluruh karakter diproses, nilai penghitung
     dikembalikan sebagai jumlah kata dalam kalimat
```

---

## 🎉 Selesai - Part 1!

Anda telah mempelajari:
- ✅ Cara menganalisis masalah penghitungan kata
- ✅ Membuat solusi sederhana dan mengidentifikasi kelemahannya
- ✅ Memahami konsep State/Flag dalam algoritma
- ✅ Mengimplementasikan solusi yang robust dengan state flag

### 📚 Lanjut ke Part 2?

Di **Part 2: Deep Dive**, Anda akan belajar:
- 🔍 Visualisasi step-by-step eksekusi algoritma
- 🔧 Iterasi & perbaikan kode
- 🌟 Clean code & best practices

---

> **💡 Tips:** Praktikkan kode ini berkali-kali sampai benar-benar paham. Coba ubah-ubah test case dan lihat hasilnya!
