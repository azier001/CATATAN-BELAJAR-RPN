# 📊 Dokumentasi Mencari Median — `findMedian` (Part 1)

### ✨ _Dari analisis pola index hingga solusi bertahap — panduan anti lupa!_

> 🎯 **Tujuan:** Memahami logika mencari **nilai tengah (median)** dari sebuah array, termasuk cara menentukan index tengah untuk array berpanjang ganjil maupun genap, lalu menerjemahkannya ke kode JavaScript secara step-by-step.

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Pilar](https://img.shields.io/badge/Pilar-1%20s/d%204-blue)
![Estimasi](https://img.shields.io/badge/Estimasi%20Baca-10%20menit-green)

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Soal & Test Cases](#soal) | Permasalahan yang harus dipecahkan |
| 🔍 | [Visualisasi & Analisis Pola](#analisis) | Tabel breakdown untuk menemukan rumus index |
| 🧠 | [Algoritma Tahan Lupa](#algoritma) | Langkah-langkah dengan penjelasan "Kenapa" |
| 🗺️ | [Blueprint + Kamus Variabel](#blueprint) | Kerangka kode & panduan penamaan |
| 🔨 | [Pendekatan Bertahap](#bertahap) | Proses menulis kode step-by-step |
| 🧪 | [Simulasi Test Case](#simulasi) | Pembuktian kode berjalan benar |

---

<a name="soal"></a>
## 📖 Soal & Test Cases

```javascript
function cariMedian(arr) {
  // you can only write your code here!
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5]));       // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13]));  // 7
console.log(cariMedian([3, 4, 7, 6, 10]));       // 6
console.log(cariMedian([1, 3, 3]));              // 3
console.log(cariMedian([7, 7, 8, 8]));           // 7.5
```

> [!IMPORTANT]
> 🔔 **Median ≠ Rata-rata!** Median adalah **nilai tengah** dari data yang **sudah diurutkan**, bukan hasil penjumlahan dibagi jumlah data (itu namanya *mean/average*).

---

<a name="analisis"></a>
## 🔍 Pilar 1 — Visualisasi & Analisis Pola

### 🎯 Langkah Wajib Sebelum Mencari Median: **SORTING!**

Perhatikan test case ke-3: `[3, 4, 7, 6, 10]`. Jika kita langsung ambil angka tengah tanpa diurutkan, kita akan mendapat `7` — padahal jawaban yang benar adalah `6`.

```
❌ TANPA SORTING:  [3, 4, 7, 6, 10]  →  index 2 = 7  (SALAH!)
✅ DENGAN SORTING: [3, 4, 6, 7, 10]  →  index 2 = 6  (BENAR!)
```

> [!CAUTION]
> 🔴 **Sorting adalah prasyarat MUTLAK!** Tanpa sorting, median yang dihasilkan akan SALAH. Ini adalah jebakan paling umum bagi pemula.

---

### 📊 Tabel Breakdown: Mencari Rumus Index Tengah

| Array (Sudah Sorted) | `length` | Tipe | Index Target | Rumus Index | Nilai Median |
|---|:---:|:---:|:---:|---|:---:|
| `[A, B, C]` | **3** | Ganjil | `1` | `Math.floor(3/2)` = `1` | Nilai index `1` |
| `[A, B, C, D, E]` | **5** | Ganjil | `2` | `Math.floor(5/2)` = `2` | Nilai index `2` |
| `[A, B, C, D, E, F, G]` | **7** | Ganjil | `3` | `Math.floor(7/2)` = `3` | Nilai index `3` |
| `[A, B, C, D]` | **4** | Genap | `1` & `2` | `(4/2)-1` & `4/2` | Rata-rata keduanya |
| `[A, B, C, D, E, F]` | **6** | Genap | `2` & `3` | `(6/2)-1` & `6/2` | Rata-rata keduanya |

---

### 💡 Rumus yang Ditemukan

**Untuk Array Ganjil:**
```
Index Tengah = Math.floor(length / 2)
```
*(Kenapa `Math.floor`? Karena pembagian ganjil menghasilkan desimal — misal `5/2 = 2.5` — dan kita butuh angka bulat untuk index. `Math.floor(2.5) = 2`.)*

**Untuk Array Genap:**
```
Index Kiri  = (length / 2) - 1
Index Kanan = length / 2
Median      = (Nilai Kiri + Nilai Kanan) / 2
```
*(Kenapa dikurangi 1? Karena kita butuh DUA angka di tengah. `length / 2` sudah memberikan index kanan, lalu dikurangi 1 untuk mendapatkan index kiri yang bersebelahan.)*

> [!TIP]
> 💡 **Analogi Mudah Dipahami:**
>
> | | Array Ganjil (5 orang) | Array Genap (4 orang) |
> |---|---|---|
> | 📝 | 5 orang berbaris → yang di tengah **1 orang** | 4 orang berbaris → **tidak ada** yang tepat di tengah |
> | 🔒 | Langsung tunjuk orangnya | Ambil 2 orang terdekat ke tengah, hitung rata-ratanya |

---

<a name="algoritma"></a>
## 🧠 Pilar 2 — Algoritma Tahan Lupa

Setiap langkah di bawah ini menjelaskan **"Kenapa"** dan menyertakan **contoh angka konkret**.

### Langkah-langkah:

1. **Mengurutkan Array `[SORTING]`** — Buat salinan array lalu urutkan dari terkecil ke terbesar.
   - *(Kenapa salinan? Agar array asli tidak berubah/termutasi. Ini adalah prinsip **immutability**. Contoh: `[3,4,7,6,10]` → salinan terurut `[3,4,6,7,10]`, array asli tetap `[3,4,7,6,10]`.)*

2. **Simpan Panjang Array ke Variabel `[EFISIENSI]`** — `const len = sortedArr.length`
   - *(Kenapa disimpan ke variabel? Karena `length` akan dipakai berkali-kali: untuk pengecekan ganjil/genap DAN untuk menghitung index. Daripada menulis `sortedArr.length` berulang-ulang, lebih hemat dan bersih disimpan ke `len`.)*

3. **Hitung Index Tengah `[PENENTUAN POSISI]`** — `const midIndex = Math.floor(len / 2)`
   - *(Kenapa `Math.floor`? Agar hasilnya selalu bilangan bulat. Contoh `len=5`: `Math.floor(5/2)` = `Math.floor(2.5)` = `2`. Contoh `len=4`: `4/2` = `2` (sudah bulat, `Math.floor` tidak berpengaruh).)*

4. **Cek Ganjil atau Genap `[PERCABANGAN]`** — Gunakan operator modulus `%`
   - *(Kenapa modulus? Karena `len % 2` mengembalikan sisa bagi. Jika sisa = 0 berarti genap, jika sisa = 1 berarti ganjil. Contoh: `5 % 2 = 1` (ganjil), `4 % 2 = 0` (genap).)*

5. **Jika Ganjil `[RETURN LANGSUNG]`** — `return sortedArr[midIndex]`
   - *(Kenapa langsung return? Karena pada array ganjil, ada TEPAT satu angka di posisi tengah. Contoh: `[3,4,6,7,10]`, `midIndex=2`, langsung ambil `sortedArr[2]` = `6`.)*

6. **Jika Genap `[RATA-RATA DUA NILAI TENGAH]`** — `return (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2`
   - *(Kenapa `midIndex - 1`? Karena `midIndex` sudah menunjuk ke angka kanan-tengah, jadi kita mundur 1 langkah untuk mendapat angka kiri-tengah. Contoh: `[7,7,8,8]`, `midIndex=2`. Kiri = `sortedArr[1]` = `7`, Kanan = `sortedArr[2]` = `8`. Median = `(7+8)/2` = `7.5`.)*

---

<a name="blueprint"></a>
## 🗺️ Pilar 3 — Blueprint + Kamus Variabel

### A. Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|---|---|---|---|
| Parameter input | `arr` atau `numbers` | `x`, `data`, `input` | Singkatan universal untuk *array of numbers* |
| Array setelah sorting | `sortedArr` | `arr2`, `urut`, `s` | Langsung paham bahwa ini sudah diurutkan |
| Panjang array | `len` | `l`, `p`, `panjang` | Singkatan umum untuk `length` di JS |
| Index titik tengah | `midIndex` | `i`, `t`, `idx` | Deskriptif — menunjukkan posisi *middle* |
| Index kiri (genap) | `midLeft` atau `leftIndex` | `a`, `l` | Jelas menunjukkan sisi kiri dari tengah |
| Index kanan (genap) | `midRight` atau `rightIndex` | `b`, `r` | Jelas menunjukkan sisi kanan dari tengah |

### B. Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Sort → Cari Posisi Tengah → Return)

const cariMedian = (arr) => {
  const sortedArr = ...;               // [SORTING]   → urutkan array
  const len = ...;                     // [PANJANG]   → simpan length

  const midIndex = ...;                // [INDEX]     → hitung posisi tengah

  if (...) {                           // [CEK]       → ganjil atau genap?
    return ...;                        //   [GANJIL]  → return langsung
  }

  return ...;                          //   [GENAP]   → rata-rata 2 nilai
};
```

> [!NOTE]
> 💡 **Perhatikan:** Kita tidak perlu blok `else` secara eksplisit. Karena blok `if` sudah memiliki `return`, jika kondisi ganjil terpenuhi maka fungsi langsung berhenti di situ. Kode di bawah `if` hanya akan dieksekusi jika kondisinya genap. Ini disebut teknik **Early Return**.

---

<a name="bertahap"></a>
## 🔨 Pilar 4 — Pendekatan Bertahap (Step-by-Step)

### Step 1 — Sorting Array

```javascript
const cariMedian = (arr) => {
  const sortedArr = [...arr].sort((a, b) => a - b);

  console.log(sortedArr);  // Debug: lihat hasil sorting
};

cariMedian([3, 4, 7, 6, 10]);  // [3, 4, 6, 7, 10] ✅
```

> [!WARNING]
> 🐛 **Jebakan `.sort()` di JavaScript!**
> ```javascript
> // ❌ TANPA CALLBACK — sorting sebagai STRING (alfabet)!
> [10, 2, 1].sort()         // [1, 10, 2]  ← 10 dianggap lebih kecil dari 2!
>
> // ✅ DENGAN CALLBACK — sorting sebagai ANGKA
> [10, 2, 1].sort((a,b) => a-b)  // [1, 2, 10]  ← benar!
> ```
> JavaScript secara default mengubah angka menjadi *string* saat sorting. Angka `10` diubah jadi string `"10"`, dan karena karakter `"1"` datang sebelum `"2"` secara alfabet, maka `10` dianggap lebih kecil dari `2`!

---

### Step 2 — Pengecekan Ganjil & Return Nilai Tengah

```javascript
const cariMedian = (arr) => {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const len = sortedArr.length;

  if (len % 2 !== 0) {
    return sortedArr[Math.floor(len / 2)];
  }
};

console.log(cariMedian([1, 2, 3, 4, 5]));  // 3 ✅ (ganjil)
console.log(cariMedian([7, 7, 8, 8]));     // undefined (genap — belum ditangani)
```

---

### Step 3 — Menambahkan Logika Genap (Solusi Lengkap! 🎉)

```javascript
const cariMedian = (arr) => {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const len = sortedArr.length;

  if (len % 2 !== 0) {
    return sortedArr[Math.floor(len / 2)];
  }

  const leftIndex = len / 2 - 1;
  const rightIndex = len / 2;

  return (sortedArr[leftIndex] + sortedArr[rightIndex]) / 2;
};
```

```
🎊 Solusi lengkap! Hasil test:

cariMedian([1, 2, 3, 4, 5])       →  3    ✅
cariMedian([1, 3, 4, 10, 12, 13]) →  7    ✅
cariMedian([3, 4, 7, 6, 10])      →  6    ✅
cariMedian([1, 3, 3])             →  3    ✅
cariMedian([7, 7, 8, 8])          →  7.5  ✅
```

---

<a name="simulasi"></a>
## 🧪 Simulasi Test Case

### Test Case Ganjil: `[3, 4, 7, 6, 10]`

```
Input:    [3, 4, 7, 6, 10]
                 ↓ SORTING
Sorted:   [3, 4, 6, 7, 10]
           0  1  2  3   4     ← index

len = 5 (Ganjil → masuk blok IF)
midIndex = Math.floor(5 / 2) = Math.floor(2.5) = 2

sortedArr[2] = 6

Return: 6 ✅
```

### Test Case Genap: `[7, 7, 8, 8]`

```
Input:    [7, 7, 8, 8]
                ↓ SORTING
Sorted:   [7, 7, 8, 8]
           0  1  2  3     ← index

len = 4 (Genap → SKIP blok IF)
leftIndex  = 4 / 2 - 1 = 1
rightIndex = 4 / 2     = 2

sortedArr[1] = 7
sortedArr[2] = 8
Median = (7 + 8) / 2 = 7.5

Return: 7.5 ✅
```

---

## 📚 Navigasi

| Arah | Link |
|------|------|
| ➡️ Selanjutnya | [Part 2 — Evolusi Solusi, Naming Convention, & Gotchas](./Dokumentasi-find-median_mencari-median-bagian-2.md) |
| 📂 Folder Utama | [Dokumentasi Mencari Median](./README.md) |

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **24 Mei 2026** berdasarkan sesi mentoring langsung di **Google Antigravity** dengan JavaScript. Semua kode telah diverifikasi terhadap 5 test cases.
