# 🔧 Data Handling 2 — Transformasi Array dengan Built-in Methods

### ✨ _Dari data mentah menjadi informasi bermakna menggunakan `splice`, `split`, `join`, `sort`, dan `slice`_

> 🎯 **Tujuan:** Menguasai 5 method bawaan JavaScript untuk memanipulasi array & string — mulai dari solusi mandiri hingga kode berkualitas industri melalui pendekatan Socratic mentoring.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Latar Belakang & Soal](#latar-belakang) | Konteks challenge & apa yang harus dicapai |
| 🔍 | [Visualisasi & Analisis Pola](#analisis-pola) | Pemetaan input → output & method yang dibutuhkan |
| 🧠 | [Algoritma Tahan Lupa](#algoritma) | Setiap langkah dengan "Kenapa" + contoh angka |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + tabel penamaan variabel |
| 🔨 | [Pendekatan Bertahap](#step-by-step) | Membangun solusi dari nol, step-by-step |
| 🚀 | [Evolusi Solusi (3 Versi)](#evolusi-solusi) | Mandiri → Optimasi → Industri + perbandingan |
| 🧹 | [Naming Convention](#naming) | Best practice penamaan variabel ❌ vs ✅ |
| ⚠️ | [Gotchas & Tips Penting](#gotchas) | Jebakan `.sort()`, `.splice()`, dan solusinya |

---

<a name="latar-belakang"></a>

## 📖 Latar Belakang & Soal

### 🎯 Konteks

Challenge ini adalah **Soal 2** dari quiz Data Handling Array. Kita diminta membuat fungsi `dataHandling2` yang menerima array data mentah, lalu melakukan berbagai transformasi menggunakan **built-in methods** JavaScript.

> [!IMPORTANT]
> 🔔 **Objektif utama challenge ini** bukan sekadar menghasilkan output yang benar, tapi secara spesifik **melatih penggunaan method**: `splice`, `slice`, `split`, `join`, dan `sort`.

### 📥 Input

```javascript
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
//            idx 0      idx 1              idx 2            idx 3        idx 4
```

### 📤 5 Output yang Diharapkan

```javascript
// Output 1: Array yang sudah dimodifikasi (nama, kota, gender, sekolah berubah; hobi dihapus)
["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

// Output 2: Nama bulan dari tanggal lahir
Mei

// Output 3: Bagian tanggal diurutkan menurun (descending)
["1989", "21", "05"]

// Output 4: Tanggal digabung dengan tanda strip
21-05-1989

// Output 5: Nama lengkap dibatasi maksimal 15 karakter
Roman Alamsyah
```

---

<a name="analisis-pola"></a>

## 🔍 Visualisasi & Analisis Pola

### Pemetaan Transformasi Data

| # | Dari (Input) | Menjadi (Output) | Aksi | Method |
|---|---|---|---|---|
| 1 | `"Roman Alamsyah "` | `"Roman Alamsyah Elsharawy"` | Ganti nama | `splice()` |
| 1 | `"Bandar Lampung"` | `"Provinsi Bandar Lampung"` | Tambah prefix | `splice()` |
| 1 | `"Membaca"` | _(dihapus)_ | Hapus hobi | `splice()` |
| 1 | _(tidak ada)_ | `"Pria"`, `"SMA Internasional Metro"` | Sisipkan baru | `splice()` |
| 2 | `"21/05/1989"` → bulan `"05"` | `"Mei"` | Pecah → deteksi bulan | `split('/')` |
| 3 | `["21","05","1989"]` | `["1989","21","05"]` | Urutkan menurun | `sort()` |
| 4 | `["21","05","1989"]` | `"21-05-1989"` | Gabung dengan `-` | `join('-')` |
| 5 | `"Roman Alamsyah Elsharawy"` | `"Roman Alamsyah"` | Potong 15 karakter | `slice(0,15)` |

### 🔑 Pasangan Method & Fungsinya

> [!TIP]
> 💡 **Cara mudah mengingat:**
>
> | Method | Analogi | Sifat |
> |---|---|---|
> | `splice()` | 🔪 Pisau bedah — potong & sisipkan di tengah array | **MUTATING** ⚠️ |
> | `split()` | ✂️ Gunting — pecah string jadi potongan array | Non-mutating |
> | `join()` | 🧵 Benang — jahit potongan array jadi string utuh | Non-mutating |
> | `sort()` | 🔢 Pengurut — susun ulang isi array | **MUTATING** ⚠️ |
> | `slice()` | 📏 Penggaris — ukur & ambil sebagian tanpa merusak | Non-mutating |

---

<a name="algoritma"></a>

## 🧠 Algoritma Tahan Lupa

> Setiap langkah menjelaskan **"Kenapa"** disertai **contoh angka konkret**.

**1. Kloning Data `[SPREAD OPERATOR]`** — Melindungi Data Asli
- `const copyData = [...userData]` → membuat salinan independen.
- *Kenapa: `splice()` dan `sort()` bersifat mutating. Tanpa kloning, data parameter `userData` akan rusak permanen dan tidak bisa digunakan ulang.*

**2. Modifikasi Array `[SPLICE]`** — Operasi Bedah Sekaligus
- `copyData.splice(1, 4, ...5 elemen baru)`
- *Kenapa indeks 1? Karena `"0001"` (indeks 0) tidak berubah — kita mulai dari elemen pertama yang perlu diganti.*
- *Kenapa hapus 4? Karena dari indeks 1 sampai 4 (Nama, Kota, Tanggal, Hobi) = 4 elemen, semuanya perlu diproses ulang.*
- *Contoh: Array 5 elemen → hapus 4 dari indeks 1 → sisipkan 5 baru → jadi 6 elemen.*

**3. Pecah & Deteksi Bulan `[SPLIT + ARRAY LOOKUP]`**
- `birthDate.split('/')` → `"21/05/1989"` menjadi `["21", "05", "1989"]`.
- `MONTHS[month - 1]` → `MONTHS[5 - 1]` → `MONTHS[4]` → `"Mei"`.
- *Kenapa `month - 1`? Array dimulai dari indeks 0, tapi bulan kalender dimulai dari 1. Jadi bulan ke-5 ada di indeks ke-4.*

**4. Urutkan Menurun `[SORT + SPREAD CLONE]`**
- `[...dateParts].sort((a, b) => b - a)` → `["1989", "21", "05"]`.
- *Kenapa harus `[...dateParts]`? Karena `.sort()` mengubah array asli. Jika kita sort langsung, `dateParts` akan berubah menjadi `["1989", "21", "05"]` dan Output 4 akan salah jadi `"1989-21-05"`.*

**5. Gabung & Potong `[JOIN + SLICE]`**
- `dateParts.join('-')` → `"21-05-1989"`. *(Aman tanpa kloning karena `join()` non-mutating.)*
- `fullName.slice(0, 15)` → mengambil karakter indeks 0 sampai 14 (total 15 karakter).

---

<a name="blueprint"></a>

## 🗺️ Blueprint & Kamus Variabel

### Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Hindari | Alasan |
|---|---|---|---|
| Data salinan | `formattedData` | `arr`, `data` | Jelaskan tujuan akhir (data terformat) |
| Elemen hari | `day` | `date` | `date` ambigu dengan `new Date()` di JS |
| Hasil split tanggal | `dateParts` | `time`, `arr` | Menjelaskan isi: bagian-bagian tanggal |
| Array terurut | `sortedDateParts` | `formattedDate` | Menjelaskan aksi (`sorted`) + tipe (`parts`) |
| Nama bulan | `monthName` | `nameMonth` | Bahasa Inggris: kata sifat → kata benda |
| Sisa destructuring | `gender, school` | `...rest` | Eksplisit > implisit |

### Kerangka Kode

```javascript
// 🗺️ KERANGKA (Mental Model: Kloning → Bedah Array → Olah Tanggal → Potong Nama)

const MONTHS = [/* 12 nama bulan */];            // [KONSTANTA] di luar fungsi

const dataHandling2 = (userData) => {
  const formattedData = [...userData];             // [KLONING] lindungi data asli

  formattedData.splice(1, 4, /* 5 elemen */);     // [BEDAH] hapus 4, sisipkan 5
  console.log(formattedData);                      // → Output 1

  const [, fullName, , birthDate] = formattedData; // [DESTRUCTURING] ambil yang dipakai
  const dateParts = birthDate.split('/');           // [PECAH] tanggal → array
  const [, month] = dateParts;                     // [AMBIL] bulan saja

  console.log(MONTHS[month - 1]);                  // → Output 2: Nama bulan
  console.log([...dateParts].sort(/* desc */));     // → Output 3: Urut menurun
  console.log(dateParts.join('-'));                 // → Output 4: Gabung strip
  console.log(fullName.slice(0, 15));              // → Output 5: Potong nama
};
```

---

<a name="step-by-step"></a>

## 🔨 Pendekatan Bertahap

### Step 1 — Kloning & Modifikasi Array

```javascript
const copyData = [...userData];
copyData.splice(1, 4,
  'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung',
  '21/05/1989', 'Pria', 'SMA Internasional Metro'
);
console.log(copyData); // ✅ Output 1
```

> 📖 **Penjelasan `splice(1, 4, ...)` kata per kata:**
>
> | Bagian | Arti |
> |--------|------|
> | `1` | Mulai dari indeks ke-1 (elemen "Roman Alamsyah ") |
> | `4` | Hapus 4 elemen ke depan (Nama, Kota, Tanggal, Hobi) |
> | `'Roman...'`, dst | 5 elemen baru yang disisipkan di posisi penghapusan |

---

### Step 2 — Pecah Tanggal & Deteksi Bulan

```javascript
const dateParts = birthDate.split('/');  // ["21", "05", "1989"]
const [day, month, year] = dateParts;

const months = ['Januari', 'Februari', /* ...12 bulan */ ];
console.log(months[month - 1]);  // ✅ Output 2: "Mei"
```

---

### Step 3 — Urutkan & Gabungkan Tanggal

```javascript
console.log([...dateParts].sort((a, b) => b - a));  // ✅ Output 3: ["1989","21","05"]
console.log(dateParts.join('-'));                     // ✅ Output 4: "21-05-1989"
```

> [!CAUTION]
> 🔴 **Urutan kode SANGAT penting!** Lakukan `sort()` (dengan kloning) **sebelum atau sesudah** `join()` — tapi JANGAN sort array `dateParts` secara langsung tanpa kloning, karena `join()` di bawahnya akan menghasilkan urutan yang salah.

---

### Step 4 — Potong Nama

```javascript
console.log(fullName.slice(0, 15));  // ✅ Output 5: "Roman Alamsyah"
```

---

<a name="evolusi-solusi"></a>

## 🚀 Evolusi Solusi (3 Versi)

### 📌 Versi A — Solusi Mandiri (Sebelum Mentoring)

```javascript
function dataHandling2(input) {
  const copyData = [...input];

  copyData[1] = 'Roman Alamsyah Elsharawy';
  copyData[2] = 'Provinsi Bandar Lampung';
  copyData[4] = 'Pria';
  copyData[5] = 'SMA Internasional Metro';

  console.log(copyData);
  const [id, fullName, province, birthDate, ...rest] = copyData;
  const [date, month, year] = birthDate.split('/');

  let nameMonth = '';
  switch (+month) {
    case 5: nameMonth = 'Mei'; break;
    default: nameMonth = 'bulan tidak diatur';
  }

  console.log(nameMonth);
  console.log([year, date, month]);
  console.log([date, month, year].join('-'));
  console.log(fullName.slice(0, 15));
}
```

> 💡 **Kelebihan:** Insting immutability yang kuat (langsung kloning), kreatif membuat array manual `[year, date, month]` untuk menghindari masalah mutasi `.sort()`.
>
> ⚠️ **Kekurangan:** Tidak menggunakan `splice()` (tujuan utama challenge), `switch-case` tidak skalabel untuk 12 bulan.

---

### 📌 Versi B — Optimasi Setelah Mentoring

```javascript
const dataHandling2 = (userData) => {
  const copyData = [...userData];
  copyData.splice(1, 4,
    'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung',
    '21/05/1989', 'Pria', 'SMA Internasional Metro',
  );
  console.log(copyData);

  const [id, fullName, province, birthDate, gender, school] = copyData;
  const dateParts = birthDate.split('/');
  const [day, month, year] = dateParts;

  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
  ];

  console.log(months[month - 1]);
  console.log([...dateParts].sort((a, b) => b - a));
  console.log(dateParts.join('-'));
  console.log(fullName.slice(0, 15));
};
```

> 💡 **Peningkatan:** Menggunakan `splice()` (1 baris vs 4 baris), `split()` hanya dipanggil 1x, bulan dinamis untuk semua 12 bulan via array lookup.

---

### 📌 Versi C — Rekomendasi Industri (Best Practice)

```javascript
const MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const dataHandling2 = (userData) => {
  const formattedData = [...userData];
  formattedData.splice(1, 4,
    'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung',
    '21/05/1989', 'Pria', 'SMA Internasional Metro'
  );
  console.log(formattedData);

  const [, fullName, , birthDate] = formattedData;
  const dateParts = birthDate.split('/');
  const [, month] = dateParts;

  const monthName = MONTHS[month - 1] || 'Bulan Tidak Valid';
  console.log(monthName);

  console.log([...dateParts].sort((a, b) => b - a));
  console.log(dateParts.join('-'));
  console.log(fullName.slice(0, 15));
};
```

> 💡 **Keunggulan:** `MONTHS` global (hemat memori), selective destructuring (tanpa variabel mubazir), fallback `||` untuk edge case bulan di luar 1–12.

---

### ⚖️ Tabel Perbandingan 3 Versi

| Aspek | Versi A (Mandiri) | Versi B (Optimasi) | Versi C (Industri) |
|---|:---:|:---:|:---:|
| Menggunakan `splice()` | ❌ Manual | ✅ Ya | ✅ Ya |
| Pemanggilan `split()` | 1x | 1x | 1x |
| Skalabilitas bulan | ❌ Hanya Mei | ✅ 12 bulan | ✅ 12 bulan + fallback |
| Variabel mubazir | ⚠️ `id`, `...rest` | ⚠️ `id`, `province` | ✅ Tidak ada |
| Alokasi `MONTHS` | — | ⚠️ Tiap panggil | ✅ 1x global |
| Error handling | ❌ | ❌ | ✅ Fallback `\|\|` |
| **Cocok untuk** | Belajar dasar | Portfolio | Production |

---

<a name="naming"></a>

## 🧹 Naming Convention

| Variabel | ❌ Kurang Tepat | ✅ Rekomendasi | Alasan |
|---|---|---|---|
| Elemen hari | `date` | `day` | `date` ambigu dengan objek `new Date()` |
| Nama bulan | `nameMonth` | `monthName` | English convention: adjective before noun |
| Sisa elemen | `...rest` | `gender, school` | Eksplisit → siapa pun langsung paham isinya |
| Array terurut | `formattedDate` | `sortedDateParts` | Jelaskan aksi (sorted) dan tipe data (parts/array) |
| Data salinan | `copyData` | `formattedData` | Menjelaskan tujuan akhir, bukan proses teknis |

---

<a name="gotchas"></a>

## ⚠️ Gotchas & Tips Penting

> [!CAUTION]
> 🔴 **`.sort()` Mengubah Array Asli!**
> ```javascript
> const arr = ["21", "05", "1989"];
> arr.sort((a, b) => b - a);  // arr sekarang = ["1989", "21", "05"] — BERUBAH!
> ```
> **Solusi:** Selalu kloning dulu → `[...arr].sort(...)` agar array asli tetap utuh.

> [!WARNING]
> 🟡 **`.splice()` Juga Mengubah Array Asli!**
> Itulah kenapa langkah pertama kita selalu `const copyData = [...userData]` — agar parameter fungsi tetap aman dan tidak termutasi secara tak terduga.

> [!TIP]
> 💡 **Method yang AMAN (Non-Mutating):** `.join()`, `.slice()`, `.split()`, `.map()`, `.filter()`
> Ketiganya selalu mengembalikan data baru tanpa menyentuh data asli. Tidak perlu kloning sebelum memakainya.

> [!NOTE]
> 📌 **Ingat Offset Indeks Bulan!**
> Array `MONTHS` dimulai dari indeks `0` (Januari), tapi bulan kalender dimulai dari `1`. Selalu gunakan `month - 1` saat mengakses array bulan.

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **18 Mei 2026** berdasarkan sesi mentoring langsung di **Google Antigravity** dengan pendekatan Socratic Method (5 Fase). Mencakup evolusi dari kode mandiri hingga kode berkualitas industri menggunakan built-in methods JavaScript: `splice`, `split`, `join`, `sort`, dan `slice`.
