# 🧮 Dokumentasi Mengelompokkan Angka

### ✨ _Panduan definitif memilah deretan angka dengan presisi, variasi logika, dan kualitas Enterprise-level._

> 🎯 **Tujuan:** Dokumentasi pamungkas ini menggabungkan semua alur berpikir dari level dasar hingga _advanced_, mencakup cara kerja percabangan `if-else` prioritas, _Clean Code_ (Grammar & penamaan), serta 4 gaya perulangan (Iterasi) yang berbeda di JavaScript.

---

### 📑 Daftar Isi

| No  | Bagian                                                  | Deskripsi                                        |
| --- | ------------------------------------------------------- | ------------------------------------------------ |
| 📖  | <a href="#analisis">Analisis Pola & Aturan Main</a>     | Membedah logika prioritas VIP                    |
| 🔑  | <a href="#kamus">Clean Code: Naming & Grammar</a>       | Menghindari Magic Number & Bias Tata Bahasa      |
| 🛠️  | <a href="#langkah">Langkah Eksekusi Utama (Belajar)</a> | Kode bertahap menggunakan pola _Explicit Arrays_ |
| ⚖️  | <a href="#evolusi">Evolusi & Visualisasi Solusi</a>     | 3 Analogi Visual (Pabrik, Pipa, Kantong)         |
| 📋  | <a href="#copypaste">Mega Copy-Paste (4 Versi)</a>      | Snippet kode siap pakai untuk segala skenario    |
| ✅  | <a href="#verifikasi">Verifikasi</a>                    | Cara menguji hasil kode                          |

---

<a name="analisis"></a>

## 📖 Analisis Pola & Aturan Main

Instruksi meminta kita mengelompokkan array angka ke dalam 3 kelompok: Genap, Ganjil, dan Kelipatan 3.

> [!TIP]
> 💡 **Analogi Mudah Dipahami (Filter Penyortir Barang)**
>
> |     | Analogi Pabrik Penyortiran                                                                             | Situasi di Kode JavaScript                                                                      |
> | --- | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
> | 📝  | Ada barang spesial (VIP) yang harus disortir pertama kali agar tidak salah masuk ke boks barang biasa. | Angka **Kelipatan 3** adalah kondisi VIP. Ia harus diletakkan di `if` paling atas.              |
> | 🔒  | Jika barang VIP lolos dari filter pertama, filter kedua akan menganggapnya barang biasa.               | Angka `6` adalah genap, tapi ia juga kelipatan 3. Jika dicek genap duluan, ia akan salah kamar! |

**Algoritma Prioritas (Visualisasi ASCII):**

```text
AMBIL angka dari array:
  │
  ├── APAKAH kelipatan 3?
  │   └── [YA] 👉 Masuk Kelompok VIP
  │
  ├── APAKAH genap?
  │   └── [YA] 👉 Masuk Kelompok Genap
  │
  └── JIKA BUKAN KEDUANYA (Ganjil)
      └── 👉 Masuk Kelompok Ganjil
```

> [!CAUTION]
> 🔴 **Jebakan Logika (Gotchas):**
> Jika kodemu mengecek kondisi Genap `(number % 2 === 0)` lebih dulu daripada Kelipatan 3 `(number % 3 === 0)`, maka angka `6` atau `12` akan tersangkut di wadah Genap, padahal instruksi meminta ia diprioritaskan sebagai Kelipatan 3.

---

<a name="kamus"></a>

## 🔑 Clean Code: Naming & Grammar

Di dunia profesional, kode tidak cukup hanya "berjalan", tapi harus **mudah dibaca seperti koran**.

### 1️⃣ Konsistensi Tata Bahasa (Grammar)

Ketika mendefinisikan nama wadah array, gunakan format kata benda jamak (_Plural Noun_) yang deskriptif.

| Variabel              | ❌ Kurang Tepat |  ✅ Best Practice  | Alasan                                                |
| --------------------- | :-------------: | :----------------: | ----------------------------------------------------- |
| Penampung Genap       |     `evens`     |   `evenNumbers`    | Memperjelas bahwa isinya angka, bukan hal lain.       |
| Penampung Ganjil      |     `odds`      |    `oddNumbers`    | Konsisten dengan `evenNumbers`.                       |
| Penampung Kelipatan 3 | `multipleThree` | `multiplesOfThree` | Secara grammar benar (kelipatan-kelipatan dari tiga). |

### 2️⃣ Menghindari "Magic Numbers" 🧙‍♂️

Jika kamu memutuskan untuk menggunakan pendekatan Array Multidimensi `[[], [], []]`, dilarang keras memanggil array dengan angka misterius seperti `result[0]` atau `result[1]`.

```javascript
// ❌ BAD: Apa maksud angka 2 ini?
result[2].push(number);

// ✅ GOOD: Diberi alias (konstanta)
const MULTIPLES_OF_3_GROUP = 2;
result[MULTIPLES_OF_3_GROUP].push(number);
```

---

<a name="langkah"></a>

## 🛠️ Langkah Eksekusi Utama (Pola Explicit Arrays)

> **⏱️ Estimasi waktu:** 5 menit | **📋 Prasyarat:** Paham konsep dasar array & `if/else`

Untuk bahan belajar utama, kita akan menggunakan pendekatan **3 Array Terpisah** karena ini adalah pola yang paling eksplisit, minim kesalahan, dan mengalir seperti bahasa manusia.

### 🌐 Tahap 1 — Menyiapkan Kerangka Wadah (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Blueprint)
function mengelompokkanAngka(arr) {
  // [KANVAS]: Tiga wadah yang mendeskripsikan dirinya sendiri
  const evenNumbers = [];
  const oddNumbers = [];
  const multiplesOfThree = [];

  // (Proses penyortiran angka akan ditaruh di sini)

  // Output dibungkus menjadi array multidimensi
  return [evenNumbers, oddNumbers, multiplesOfThree];
}
```

---

### 🌐 Tahap 2 — Iterasi & Penyortiran VIP (Full Comments)

Kita gabungkan kerangka di atas dengan logika Saringan VIP agar performanya maksimal (menghindari pengecekan ganda `&&`).

```javascript
function mengelompokkanAngka(arr) {
  const evenNumbers = [];
  const oddNumbers = [];
  const multiplesOfThree = [];

  // 1. Loop setiap angka
  for (const number of arr) {
    // 2. PRIORITAS VIP: Saring Kelipatan 3 di gerbang pertama!
    if (number % 3 === 0) {
      multiplesOfThree.push(number); // Masuk wadah VIP
    }

    // 3. Jika bukan kelipatan 3, cek apakah dia Genap?
    else if (number % 2 === 0) {
      evenNumbers.push(number); // Masuk wadah Genap
    }

    // 4. Sisa dari atas pastilah Ganjil
    else {
      oddNumbers.push(number); // Masuk wadah Ganjil
    }
  }

  // 5. Kembalikan 3 wadah tersebut sebagai 1 array besar
  return [evenNumbers, oddNumbers, multiplesOfThree];
}
```

---

<a name="evolusi"></a>

## ⚖️ Evolusi & Visualisasi Solusi (Alternatif Pendekatan)

Bagaimana cara komputer mengulangi angka (_looping_)? Mari kita bayangkan dengan visualisasi dunia nyata untuk 3 gaya iterasi di JavaScript.

### 1. Gaya Imperatif (`for...of`) ➡️ Analogi Pekerja Pabrik 👷‍♂️

Cocok dipadukan dengan gaya _Explicit Arrays_ maupun _Array Multidimensi_. Pekerja mengecek angka satu persatu secara manual dan menaruhnya ke keranjang. Kelebihannya: Proses ini bisa dihentikan (_break_) di tengah jalan jika darurat.

```text
[ 2, 4, 6 ] ➡️ (Pekerja mengecek angka 2)
                 "Oh genap! Taruh di keranjang Genap" ➡️ [ [2], [], [] ]
```

### 2. Gaya Modern/Expressive (`.forEach()`) ➡️ Analogi Pipa Penyortir 🚰

Semua angka disiram sekaligus ke dalam sistem, lalu masing-masing pipa punya filternya sendiri yang otomatis menyaring air (angka). Kelemahannya: Pipa tidak bisa dimatikan (_break_) sampai semua air habis.

```text
          💧 (Kelipatan 3) ➡️ Wadah [2]
[2,4,6] ➡️ 💧 (Genap)       ➡️ Wadah [0]
          💧 (Ganjil)      ➡️ Wadah [1]
```

### 3. Gaya Functional (`.reduce()`) ➡️ Analogi Kantong Berjalan 🎒

Sebuah kantong `[[],[],[]]` bergulir melintasi seluruh array dari ujung ke ujung. Setiap melewati angka, kantong itu akan "memakan" dan menyortirnya secara internal.

```text
(Start) ➡️ Kantong Kosong 🎒 [[],[],[]]
          Melewati angka 2 ➡️ 🎒 [[2],[],[]]
          Melewati angka 6 ➡️ 🎒 [[2],[],[6]] ➡️ (Finish)
```

---

<a name="copypaste"></a>

## 📋 Copy-Paste (4 Versi Kode Bersih)

Berikut adalah kompilasi seluruh versi kode yang telah dibersihkan dari komentar. Silakan salin sesuai dengan gaya _coding_ tim atau preferensimu.

### Versi 1: Highly Readable (Sangat Disarankan untuk Pemula)

_Menggunakan 3 array eksplisit dan `for...of` loop._

```javascript
function mengelompokkanAngka(arr) {
  const evenNumbers = [];
  const oddNumbers = [];
  const multiplesOfThree = [];

  for (const number of arr) {
    if (number % 3 === 0) {
      multiplesOfThree.push(number);
    } else if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
  }

  return [evenNumbers, oddNumbers, multiplesOfThree];
}
```

### Versi 2: Single Container (Menghindari Variable Clutter)

_Menggunakan 1 wadah besar `[[],[],[]]` namun ditambahkan Konstanta Anti-Magic Numbers._

```javascript
function mengelompokkanAngka(arr) {
  const result = [[], [], []];
  const EVEN_IDX = 0,
    ODD_IDX = 1,
    MUL_3_IDX = 2;

  for (const number of arr) {
    if (number % 3 === 0) {
      result[MUL_3_IDX].push(number);
    } else if (number % 2 === 0) {
      result[EVEN_IDX].push(number);
    } else {
      result[ODD_IDX].push(number);
    }
  }

  return result;
}
```

### Versi 3: Modern Expressive (Singkat & Elegan)

_Menggunakan `.forEach()` bawaan Array modern._

```javascript
const mengelompokkanAngka = (arr) => {
  const result = [[], [], []];

  arr.forEach((number) => {
    if (number % 3 === 0) result[2].push(number);
    else if (number % 2 === 0) result[0].push(number);
    else result[1].push(number);
  });

  return result;
};
```

### Versi 4: Functional Advanced (Gaya React/Functional Team)

_Hanya menggunakan 1 rantai `.reduce()` tanpa mendeklarasikan wadah di luar._

```javascript
const mengelompokkanAngka = (arr) => {
  return arr.reduce(
    (groups, num) => {
      if (num % 3 === 0) groups[2].push(num);
      else if (num % 2 === 0) groups[0].push(num);
      else groups[1].push(num);
      return groups;
    },
    [[], [], []],
  );
};
```

---

<a name="verifikasi"></a>

## ✅ Verifikasi — Cara Memastikan Kode Berhasil

### 1️⃣ Salin salah satu versi kode di atas ke IDE kamu.

### 2️⃣ Jalankan Test Case berikut:

```javascript
console.log(mengelompokkanAngka([2, 4, 6]));
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(mengelompokkanAngka([100, 151, 122, 99, 111]));
```

Pastikan output terminal/console persis seperti di bawah ini:

```bash
[ [ 2, 4 ], [], [ 6 ] ]                            ← ✅ LULUS
[ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]          ← ✅ LULUS
[ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]             ← ✅ LULUS
```

---

> 📝 **Catatan Akhir:**
> _Dokumentasi_ ini dihasilkan secara otomatis pada **23 Mei 2026** berdasarkan penggabungan dua sesi _mentoring_ di **Google Antigravity**. Dokumen ini dirancang sebagai referensi _all-in-one_ yang merangkum keseluruhan spektrum gaya koding fundamental hingga modern di JavaScript.
