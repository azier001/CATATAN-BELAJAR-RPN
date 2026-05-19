# 🔁 Versi 1 — While(true) + Return (Logika Dasar)

### ✨ _Pendekatan paling fundamental: mendaki satu per satu dengan while loop tanpa batas dan pintu keluar return._

> 🎯 **Tujuan:** Memahami solusi paling dasar menggunakan `while(true)` loop, di mana setiap angka kandidat dibalik secara manual melalui rantai konversi `String → Array → Reverse → Join`.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Profil Versi](#profil) | Ringkasan kapan & kenapa pakai versi ini |
| 🏗️ | [Pembangunan Bertahap](#pembangunan) | Step-by-step penulisan kode dari nol |
| 💻 | [Kode Lengkap](#kode) | Solusi final siap pakai |
| 🔍 | [Bedah Kode](#bedah) | Penjelasan setiap bagian baris per baris |
| 🧮 | [Simulasi Langkah](#simulasi) | Trace eksekusi dengan angka konkret |

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | While(true) + Return |
| 🔢 **Jumlah Loop** | 1 (`while` loop utama) |
| 🧠 **Konsep Utama** | Infinite loop + konversi tipe data + perbandingan string |
| 📖 **Readability** | ⭐⭐⭐⭐ (sangat mudah dibaca) |
| ⚡ **Kompleksitas** | O(n) — linear terhadap jarak ke palindrome berikutnya |
| 🎯 **Cocok Untuk** | Pemula, ujian, memahami fundamental `while(true)` + `return` |

> [!TIP]
> 🏆 **Kapan pilih versi ini?**
> Gunakan Versi 1 saat kamu ingin **memahami logika paling mentah** dari pencarian palindrome. Semua proses terjadi di satu fungsi — tanpa abstraksi, tanpa helper function. Paling "transparan" untuk di-trace langkah per langkah.

---

<a name="pembangunan"></a>
## 🏗️ Pembangunan Bertahap (Step-by-Step)

> [!IMPORTANT]
> 🧱 **Prinsip "Satu Perubahan, Satu Verifikasi":** Kita tidak langsung menulis kode utuh. Kita bangun kerangka dasarnya dulu, lalu tambahkan fiturnya satu per satu.

### ⚙️ Step 1 — Loop & Increment Utama (Mendaki Tangga)

Langkah awal adalah membuat mesin penambah angka. Kita pastikan input selalu ditambah 1 di awal, lalu `while` loop bertugas menaikkan angkanya terus-menerus.

```javascript
function angkaPalindrome(num) {
  num++; // Maju satu langkah awal (Safety gotcha)

  while (true) {
    // Di sini nanti proses pembalikan...
    
    num++; // Naik satu anak tangga
    
    if (num > 200) break; // Pengaman sementara (Safety Brake)
  }
}
```

> **Hasil:** Angka terus bertambah secara dinamis. "Mesin pendaki" kita sudah siap bekerja!

---

### ⚙️ Step 2 — Penambahan Rantai Pembalik (Reverse Chain)

Kita masukkan mekanisme pembalikan digit di setiap putaran loop. Angka diubah ke teks lalu dibalik menggunakan gabungan method bawaan JavaScript.

```javascript
function angkaPalindrome(num) {
  num++;

  while (true) {
    let str = String(num); // Number → String
    let reversedStr = str.split('').reverse().join(''); // Balik string
    
    console.log(num, 'dibalik jadi', reversedStr); // Verifikasi visual
    
    num++;
    if (num > 125) break; // Pengaman sementara
  }
}
```

> **Hasil:** Kita bisa memverifikasi di konsol bahwa setiap angka berhasil dibalik posisinya dengan benar (misal: `120` menjadi `"021"`).

---

### ⚙️ Step 3 — Pemasangan Pintu Keluar (Return Final)

Terakhir, hapus pengaman sementara dan gantikan dengan logika pencocokan. Jika angka asli sama dengan angka terbalik, keluarkan nilainya dan hentikan loop.

```javascript
function angkaPalindrome(num) {
  num++;

  while (true) {
    let str = String(num);
    let reversedStr = str.split('').reverse().join('');

    // Pintu keluar darurat loop
    if (str === reversedStr) {
      return num; // Berhenti dan return hasilnya
    }

    num++;
  }
}
```

> **Hasil:** Fungsi bekerja 100% dan siap diuji coba!

---

<a name="kode"></a>
## 💻 Kode Lengkap

```javascript
// ✅ VERSI 1 — While(true) + Return (Logika Dasar)
function angkaPalindrome(num) {
  num++;

  while (true) {
    let str = String(num);
    let reversedStr = str.split('').reverse().join('');

    if (str === reversedStr) {
      return num;
    }

    num++;
  }
}

// Uji coba
console.log(angkaPalindrome(8));    // 9
console.log(angkaPalindrome(10));   // 11
console.log(angkaPalindrome(117));  // 121
console.log(angkaPalindrome(175));  // 181
console.log(angkaPalindrome(1000)); // 1001
```

---

<a name="bedah"></a>
## 🔍 Bedah Kode (Baris per Baris)

### 1️⃣ Maju Satu Langkah `[INISIALISASI]`

```javascript
num++;
```

Menambah `num` dengan 1 **sebelum** loop dimulai, memastikan pencarian selalu dimulai dari angka **setelah** input.

> *(Kenapa di luar loop? Karena aksi ini hanya perlu dilakukan **sekali**. Jika diletakkan di dalam loop, `num` akan bertambah 2 setiap iterasi — satu di awal dan satu di akhir — sehingga melewatkan angka-angka ganjil/genap secara bergantian.)*

---

### 2️⃣ Loop Tanpa Batas `[WHILE TRUE]`

```javascript
while (true) {
```

Menciptakan perulangan yang **tidak punya batas waktu bawaan**. Loop ini akan terus berputar sampai bertemu perintah `return` di dalamnya.

> *(Kenapa `while(true)` dan bukan `for`? Karena kita tidak tahu berapa kali loop harus berputar. Jarak antar palindrome sangat tidak beraturan — bisa 1 langkah (`8→9`) atau 110 langkah (`1001→1111`). `while(true)` memberi kita fleksibilitas total.)*

---

### 3️⃣ Konversi & Pembalikan `[REVERSE CHAIN]`

```javascript
let str = String(num);
let reversedStr = str.split('').reverse().join('');
```

Rantai konversi empat langkah untuk membalik digit angka:

| Langkah | Method | Input | Output | Contoh (`num = 121`) |
|:---:|:---:|:---:|:---:|:---:|
| 1 | `String()` | Number | String | `121` → `"121"` |
| 2 | `.split('')` | String | Array | `"121"` → `["1","2","1"]` |
| 3 | `.reverse()` | Array | Array (terbalik) | `["1","2","1"]` → `["1","2","1"]` |
| 4 | `.join('')` | Array | String | `["1","2","1"]` → `"121"` |

> *(Kenapa rantai sepanjang ini? JavaScript tidak memiliki `Number.reverse()` atau `String.reverse()`. Satu-satunya tipe data yang punya method `.reverse()` bawaan adalah **Array**. Maka kita harus: ubah ke string → pecah jadi array → balik → gabung kembali.)*

---

### 4️⃣ Bandingkan & Hentikan `[IF + RETURN]`

```javascript
if (str === reversedStr) {
  return num;
}
```

Membandingkan string asli dengan string terbalik. Jika identik → angka tersebut palindrome → **hentikan seluruh fungsi** dan kembalikan nilainya.

> *(Kenapa `===` bukan `==`? Operator `===` (strict equality) memastikan **tipe data dan nilai** sama persis. Best practice JavaScript: selalu gunakan `===` kecuali ada alasan sangat spesifik untuk `==`.)*

> [!CAUTION]
> ⚠️ **Jebakan perbandingan tipe data!**
> ```
> ❌ if (num === reversedStr)       // Number vs String → selalu false!
> ✅ if (str === reversedStr)       // String vs String → bisa true ✅
> ✅ if (String(num) === reversedStr) // alternatif yang juga benar
> ```

---

### 5️⃣ Naik Satu Tangga `[INCREMENT]`

```javascript
num++;
```

Jika belum palindrome, tambah `num` dengan 1 untuk mengecek angka berikutnya di iterasi selanjutnya.

> *(Kenapa di akhir loop? Agar pengecekan palindrome dilakukan **terlebih dahulu** sebelum naik tangga. Jika `num++` diletakkan di awal loop (sebelum pengecekan), kita akan melewatkan angka pertama yang seharusnya dicek.)*

---

<a name="simulasi"></a>
## 🧮 Simulasi Langkah (Trace `num = 10`)

Mari telusuri eksekusi kode langkah demi langkah untuk `angkaPalindrome(10)`.

### Tahap Inisialisasi

```
Input: num = 10
Setelah num++: num = 11   ← pencarian dimulai dari sini
```

### Iterasi ke-1 (`num = 11`)

| Tahap | Aksi | Nilai |
|:---:|:---|:---|
| 1 | `str = String(11)` | `"11"` |
| 2 | `"11".split('')` | `["1", "1"]` |
| 3 | `.reverse()` | `["1", "1"]` |
| 4 | `.join('')` | `"11"` |
| 5 | `"11" === "11"` ? | ✅ **TRUE** |
| 6 | `return 11` | 🎉 **Selesai!** |

> 📌 Palindrome ditemukan di iterasi pertama! Hanya butuh 1 langkah karena `11` langsung merupakan palindrome.

### Simulasi Lebih Panjang (Trace `num = 117`)

| Iterasi | `num` | `str` | `reversedStr` | Sama? | Aksi |
|:---:|:---:|:---:|:---:|:---:|:---|
| 1 | `118` | `"118"` | `"811"` | ❌ | `num++` |
| 2 | `119` | `"119"` | `"911"` | ❌ | `num++` |
| 3 | `120` | `"120"` | `"021"` | ❌ | `num++` |
| 4 | `121` | `"121"` | `"121"` | ✅ | **`return 121`** 🎉 |

> [!NOTE]
> 📌 **Perhatikan Iterasi 3:** String `"021"` memiliki leading zero, tapi ini tidak masalah karena kita membandingkan **string**, bukan number. `"120" !== "021"` tetap menghasilkan `false` dengan benar.

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [02 — Alur Berpikir](./02-problem-solving-approach_alur-berpikir.md) | [README](../README.md) | [04 — V2: Modular Efisien](./04-v2-efficient-modular_modular-efisien.md) |
