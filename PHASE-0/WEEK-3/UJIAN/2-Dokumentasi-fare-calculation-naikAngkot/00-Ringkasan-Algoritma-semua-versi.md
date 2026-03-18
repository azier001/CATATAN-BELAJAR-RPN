# 📋 naikAngkot — Ringkasan Algoritma Semua Versi

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          📋 RINGKASAN ALGORITMA — COMPLETE REFERENCE 📋                 ║
║         for...of+push · map+helper · map+single · Perbandingan          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-30%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Versi](https://img.shields.io/badge/Versi-3%20Solusi-success?style=for-the-badge)

---

## 🎯 Tujuan

- ✅ Ringkasan challenge dan kriteria dalam satu tempat
- ✅ Ringkasan algoritma semua versi secara detail
- ✅ Quick reference untuk review atau ujian

---

## 🧭 Quick Jump

| 🧩 Challenge | ✅ Versi 1 | 🔄 Versi 2 | 🔀 Versi 3 | 🧪 Test Cases | 📊 Perbandingan |
|:------------:|:---------:|:---------:|:---------:|:-------------:|:---------------:|
| [Jump](#-deskripsi-challenge) | [Jump](#-versi-1-forof--push--imperative-style) | [Jump](#-versi-2-map--helper-function--modular-style) | [Jump](#-versi-3-map-single-function--compact-style) | [Jump](#-test-cases-lengkap) | [Jump](#-perbandingan-lengkap) |

---

# 🧩 DESKRIPSI CHALLENGE

## 📋 Soal

> ### 📋 Deskripsi
>
> Diberikan sebuah function **`naikAngkot(listPenumpang)`** yang menerima satu parameter:
>
> | Parameter | Tipe | Keterangan |
> |-----------|------|------------|
> | `listPenumpang` | `array of array` | Daftar penumpang beserta halte naik dan halte tujuan |
>
> **Setiap elemen di dalam `listPenumpang` adalah array dengan struktur:**
>
> | Index | Tipe | Keterangan |
> |-------|------|------------|
> | `[0]` | `string` | Nama penumpang |
> | `[1]` | `string` | Halte naik |
> | `[2]` | `string` | Halte tujuan |
>
> **Rute angkot tersedia dari A sampai F:**
>
> | Halte | A | B | C | D | E | F |
> |-------|---|---|---|---|---|---|
> | Index | 0 | 1 | 2 | 3 | 4 | 5 |
>
> Penumpang **wajib membayar Rp2.000** untuk setiap satu halte yang dilewati.
>
> Buatlah function yang mengembalikan **array of object** dimana setiap object berisi info perjalanan setiap penumpang: **`penumpang`**, **`naikDari`**, **`tujuan`**, dan **`bayar`**.

---

## 🔍 Kriteria

> **1.** Jika `listPenumpang` kosong (`[]`)
> → return array kosong `[]`
>
> **2.** Ongkos dihitung berdasarkan **jumlah halte yang dilewati × Rp2.000**
> → Contoh: dari B ke F melewati 4 halte (B→C→D→E→F) → 4 × 2.000 = **Rp8.000**
>
> **3.** Output berisi **sejumlah object sesuai jumlah penumpang** di input
>
> **4.** Setiap object output berisi:
> - `penumpang` — nama penumpang
> - `naikDari` — halte tempat naik
> - `tujuan` — halte tujuan
> - `bayar` — total ongkos yang harus dibayar

---

## 📊 Contoh-contoh

### Output yang Diharapkan

```javascript
// ✅ Normal case 1 — satu penumpang
naikAngkot([['Dimitri', 'B', 'F']])
// → [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
```

```javascript
// ✅ Normal case 2 — dua penumpang rute berbeda
naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']])
// → [
//     { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//     { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 }
//   ]
```

```javascript
// ✅ Edge case — naik dan turun di halte yang sama
naikAngkot([['Budi', 'C', 'C']])
// → [{ penumpang: 'Budi', naikDari: 'C', tujuan: 'C', bayar: 0 }]
```

```javascript
// ✅ Edge case — input kosong
naikAngkot([])
// → []
```

---

### Simulasi Perjalanan: Dimitri naik dari B ke F

```
Rute angkot:  A → B → C → D → E → F
Index:        0   1   2   3   4   5

Dimitri naik dari B (index 1) ke F (index 5)

Halte yang dilewati:
B → C → D → E → F = 4 halte

Kalkulasi ongkos:
index tujuan - index naik = 5 - 1 = 4 halte
4 × Rp2.000 = Rp8.000 ✅

Output:
{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }
```

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Parameter | `listPenumpang` — array dua dimensi `[nama, halteNaik, halteTujuan]` |
| Rute | A → B → C → D → E → F (6 halte, index 0–5) |
| Tarif | **Rp2.000** per halte yang dilewati |
| Cara hitung | `(indexTujuan - indexNaik) × 2000` |
| Jika naik = turun | `bayar: 0` |
| Jika input kosong | return `[]` |
| Return | Array of object `{ penumpang, naikDari, tujuan, bayar }` |

---

> 💡 **Aturan Sederhana:** Gunakan `indexOf()` untuk cari posisi halte naik dan halte tujuan di array rute → hitung selisihnya → kalikan Rp2.000. Tidak perlu loop rute sama sekali.

---

## ⚡ Quick Test — Tulis Fungsinya Sendiri Dulu, Lalu Test Satu per Satu!

> 💡 Tulis function `naikAngkot` kamu sendiri terlebih dahulu, baru paste test di bawah ini satu per satu untuk ngecek hasilnya.

```javascript
// Test 1 — Edge case: input kosong
console.log(naikAngkot([]))
// → []
```

```javascript
// Test 2 — Satu penumpang
console.log(naikAngkot([['Dimitri', 'B', 'F']]))
// → [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
```

```javascript
// Test 3 — Dua penumpang rute berbeda
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]))
// → [{ penumpang: 'Dimitri', ... bayar: 8000 }, { penumpang: 'Icha', ... bayar: 2000 }]
```

```javascript
// Test 4 — Naik dan turun di halte yang sama
console.log(naikAngkot([['Budi', 'C', 'C']]))
// → [{ penumpang: 'Budi', naikDari: 'C', tujuan: 'C', bayar: 0 }]
```

---

═══════════════════════════════════════════════════════════════════════

# ✅ VERSI 1: `for...of` + `push` — Imperative Style

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Pemula%20%7C%20Readable-green?style=flat-square)
![Style](https://img.shields.io/badge/Style-Imperative-orange?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
function naikAngkot(passengerList) {
  const routeStops  = ['A', 'B', 'C', 'D', 'E', 'F'];
  const farePerStop = 2000;
  const travelRecords = [];

  for (const [passengerName, boardingStop, destinationStop] of passengerList) {
    const boardingIndex    = routeStops.indexOf(boardingStop);
    const destinationIndex = routeStops.indexOf(destinationStop);
    const totalFare        = (destinationIndex - boardingIndex) * farePerStop;

    travelRecords.push({
      penumpang: passengerName,
      naikDari: boardingStop,
      tujuan: destinationStop,
      bayar: totalFare
    });
  }

  return travelRecords;
}
```

</details>

### **Konsep Inti:**
```
Loop setiap penumpang di passengerList
  Ambil passengerName, boardingStop, destinationStop
  Cari boardingIndex di routeStops
  Cari destinationIndex di routeStops
  Hitung totalFare = (destinationIndex - boardingIndex) * farePerStop
  Push object hasil ke travelRecords
Return travelRecords
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. **`function naikAngkot(passengerList)`**
   - `passengerList` — array dua dimensi `[nama, halteNaik, halteTujuan]`
   - **return** — array of object `{ penumpang, naikDari, tujuan, bayar }`
   ```javascript
   function naikAngkot(passengerList) { ... }
   ```

#### 🔄 Di Dalam Function:

2. **Inisialisasi konstanta dan array penampung**
   ```javascript
   const routeStops    = ['A', 'B', 'C', 'D', 'E', 'F'];
   const farePerStop   = 2000;
   const travelRecords = [];
   ```

3. **Loop utama + destructuring langsung di parameter**
   - Ambil `passengerName`, `boardingStop`, `destinationStop` dari tiap elemen
   ```javascript
   for (const [passengerName, boardingStop, destinationStop] of passengerList) {
   ```

4. **Cari index halte naik**
   - Contoh: `'B'` → index `1`
   ```javascript
   const boardingIndex = routeStops.indexOf(boardingStop); // 'B' → 1
   ```

5. **Cari index halte tujuan**
   - Contoh: `'F'` → index `5`
   ```javascript
   const destinationIndex = routeStops.indexOf(destinationStop); // 'F' → 5
   ```

6. **Hitung total ongkos**
   - Selisih index × tarif per halte
   ```javascript
   const totalFare = (destinationIndex - boardingIndex) * farePerStop; // (5-1)*2000 = 8000
   ```

7. **Push object hasil ke `travelRecords`**
   ```javascript
   travelRecords.push({
     penumpang: passengerName,
     naikDari: boardingStop,
     tujuan: destinationStop,
     bayar: totalFare
   });
   ```

#### 🔵 Setelah Loop:

8. **`return travelRecords`**
   ```javascript
   return travelRecords;
   ```

### **Visualisasi untuk `[['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]`:**

```
routeStops  = ['A','B','C','D','E','F']
               0    1    2    3    4    5
travelRecords = []

Penumpang 1 — Dimitri (boardingStop='B', destinationStop='F'):
  boardingIndex    = routeStops.indexOf('B') = 1
  destinationIndex = routeStops.indexOf('F') = 5
  totalFare = (5 - 1) * 2000 = 8000 ✅
  travelRecords = [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

Penumpang 2 — Icha (boardingStop='A', destinationStop='B'):
  boardingIndex    = routeStops.indexOf('A') = 0
  destinationIndex = routeStops.indexOf('B') = 1
  totalFare = (1 - 0) * 2000 = 2000 ✅
  travelRecords = [{ penumpang: 'Dimitri', ... bayar: 8000 },
                   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 }]
```

### **Keywords:**
- 🔄 **`for...of`** — loop modern untuk iterasi array tanpa index manual
- 📦 **Destructuring** — `[passengerName, boardingStop, destinationStop]` langsung dari elemen array
- 🔍 **`indexOf()`** — mencari posisi elemen di array, return `-1` jika tidak ditemukan
- ➕ **`push()`** — menambahkan object hasil ke `travelRecords`
- 🔢 **Shorthand property** — `{ penumpang, naikDari, tujuan, bayar }` jika nama key = nama variabel
- 🚫 **Magic number** — hindari angka langsung di kode, gunakan `farePerStop`

### **Kapan Pakai:**
- ✅ Baru belajar JavaScript — alur paling eksplisit dan mudah dipahami
- ✅ Butuh `break` atau `continue` di tengah loop
- ✅ Ingin kode yang mudah di-debug dengan `console.log`
- ✅ Interview yang mengutamakan logika jelas

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa deklarasi `travelRecords` sebelum loop**
```javascript
// ❌ Array penampung belum ada
for (const [...] of passengerList) {
  travelRecords.push(...) // ReferenceError!
}

// ✅ Deklarasi dulu sebelum loop
const travelRecords = [];
for (const [...] of passengerList) {
  travelRecords.push(...)
}
```

**2) ❌ Pakai magic number langsung**
```javascript
// ❌ Angka 2000 tidak menjelaskan apa-apa
const totalFare = (destinationIndex - boardingIndex) * 2000;

// ✅ Gunakan konstanta yang deskriptif
const farePerStop = 2000;
const totalFare   = (destinationIndex - boardingIndex) * farePerStop;
```

**3) ❌ Urutan destructuring salah**
```javascript
// ❌ Tidak sesuai urutan array input ['nama', 'naik', 'tujuan']
const [boardingStop, passengerName, destinationStop] = passenger;

// ✅ Harus sesuai urutan elemen di array
const [passengerName, boardingStop, destinationStop] = passenger;
```

### **💡 Insight Penting:**

> **Kenapa `for...of` lebih baik dari `for` biasa untuk kasus ini?**
> `for...of` lebih ekspresif dan langsung bekerja dengan nilai elemennya, tanpa perlu mengakses index manual seperti `arrPenumpang[i]`. Kode jadi lebih bersih dan niat lebih jelas terbaca.

> **Kenapa array kosong otomatis ter-handle tanpa guard clause?**
> Karena `for...of` pada array kosong tidak pernah masuk ke dalam loop — `travelRecords` tetap `[]` dan langsung di-return. Input kosong sudah aman tanpa perlu kondisi tambahan.

---

═══════════════════════════════════════════════════════════════════════

# 🔄 VERSI 2: `.map()` + Helper Function — Modular Style

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Modular%20%7C%20Reusable-blue?style=flat-square)
![Style](https://img.shields.io/badge/Style-Modular%20Functional-9cf?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const ROUTE_STOPS   = ['A', 'B', 'C', 'D', 'E', 'F'];
const FARE_PER_STOP = 2000;

function calculateFare(boardingStop, destinationStop) {
  const boardingIndex    = ROUTE_STOPS.indexOf(boardingStop);
  const destinationIndex = ROUTE_STOPS.indexOf(destinationStop);
  return (destinationIndex - boardingIndex) * FARE_PER_STOP;
}

function buildPassengerRecord(passenger) {
  const [passengerName, boardingStop, destinationStop] = passenger;
  return {
    penumpang: passengerName,
    naikDari: boardingStop,
    tujuan: destinationStop,
    bayar: calculateFare(boardingStop, destinationStop)
  };
}

function naikAngkot(passengerList) {
  return passengerList.map(buildPassengerRecord);
}
```

</details>

### **Konsep Inti:**
```
Definisikan ROUTE_STOPS dan FARE_PER_STOP sebagai konstanta global

calculateFare(boardingStop, destinationStop):
  Cari boardingIndex di ROUTE_STOPS
  Cari destinationIndex di ROUTE_STOPS
  Return (destinationIndex - boardingIndex) * FARE_PER_STOP

buildPassengerRecord(passenger):
  Destructuring passenger → passengerName, boardingStop, destinationStop
  Return object { penumpang, naikDari, tujuan, bayar: calculateFare(...) }

naikAngkot(passengerList):
  Return passengerList.map(buildPassengerRecord)
```

### **Step-by-Step (Detail):**

#### 🟣 Konstanta Global:

1. **Definisikan `ROUTE_STOPS` dan `FARE_PER_STOP` di luar semua function**
   - Uppercase = nilai tidak pernah berubah (konvensi konstanta)
   - Bisa dipakai oleh semua function tanpa perlu dideklarasi ulang
   ```javascript
   const ROUTE_STOPS   = ['A', 'B', 'C', 'D', 'E', 'F'];
   const FARE_PER_STOP = 2000;
   ```

#### 🟡 Helper Function `calculateFare`:

2. **Terima dua parameter: `boardingStop` dan `destinationStop`**
   - Bertanggung jawab hanya untuk menghitung ongkos
   ```javascript
   function calculateFare(boardingStop, destinationStop) {
   ```

3. **Cari index kedua halte di `ROUTE_STOPS`**
   ```javascript
   const boardingIndex    = ROUTE_STOPS.indexOf(boardingStop);     // 'B' → 1
   const destinationIndex = ROUTE_STOPS.indexOf(destinationStop);  // 'F' → 5
   ```

4. **Hitung dan langsung return ongkos**
   ```javascript
   return (destinationIndex - boardingIndex) * FARE_PER_STOP; // (5-1)*2000 = 8000
   ```

#### 🟡 Helper Function `buildPassengerRecord`:

5. **Terima satu parameter: `passenger` (array satu penumpang)**
   - Bertanggung jawab hanya untuk membentuk object hasil
   ```javascript
   function buildPassengerRecord(passenger) {
   ```

6. **Destructuring `passenger` di dalam function**
   ```javascript
   const [passengerName, boardingStop, destinationStop] = passenger;
   ```

7. **Return object hasil, `bayar` langsung dari `calculateFare`**
   ```javascript
   return {
     penumpang: passengerName,
     naikDari: boardingStop,
     tujuan: destinationStop,
     bayar: calculateFare(boardingStop, destinationStop)
   };
   ```

#### 🔵 Main Function `naikAngkot`:

8. **Pass `buildPassengerRecord` langsung ke `.map()`**
   - Tidak perlu arrow function — nama function langsung sebagai callback
   ```javascript
   function naikAngkot(passengerList) {
     return passengerList.map(buildPassengerRecord);
   }
   ```

### **Visualisasi untuk `[['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]`:**

```
ROUTE_STOPS   = ['A','B','C','D','E','F']
FARE_PER_STOP = 2000

.map() — Iterasi 1 → buildPassengerRecord(['Dimitri','B','F'])
  passengerName   = 'Dimitri'
  boardingStop    = 'B'
  destinationStop = 'F'

  calculateFare('B', 'F'):
    boardingIndex    = ROUTE_STOPS.indexOf('B') = 1
    destinationIndex = ROUTE_STOPS.indexOf('F') = 5
    return (5 - 1) * 2000 = 8000 ✅

  return { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }

.map() — Iterasi 2 → buildPassengerRecord(['Icha','A','B'])
  passengerName   = 'Icha'
  boardingStop    = 'A'
  destinationStop = 'B'

  calculateFare('A', 'B'):
    boardingIndex    = ROUTE_STOPS.indexOf('A') = 0
    destinationIndex = ROUTE_STOPS.indexOf('B') = 1
    return (1 - 0) * 2000 = 2000 ✅

  return { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 }
```

### **Keywords:**
- 🗂️ **Konstanta global** — `ROUTE_STOPS`, `FARE_PER_STOP` dideklarasi sekali, dipakai semua function
- 🔧 **Helper function** — function kecil dengan satu tugas spesifik
- 🎯 **Single Responsibility** — `calculateFare` hanya hitung ongkos, `buildPassengerRecord` hanya bentuk object
- 🔄 **`.map()`** — transformasi setiap elemen array menjadi bentuk baru tanpa array penampung manual
- 📦 **Destructuring** — `[passengerName, boardingStop, destinationStop]` dari array penumpang
- 🔍 **`indexOf()`** — mencari posisi elemen di array

### **Kapan Pakai:**
- ✅ Project besar yang kemungkinan `calculateFare` dipakai di tempat lain
- ✅ Ingin setiap logic bisa di-test secara independen
- ✅ Tim familiar dengan Single Responsibility Principle
- ✅ Aturan tarif mungkin berubah — cukup ubah satu tempat

### **Pitfalls (Jebakan Umum):**

**1) ❌ Menaruh konstanta di dalam function**
```javascript
// ❌ ROUTE_STOPS dideklarasi ulang setiap kali function dipanggil
function calculateFare(boardingStop, destinationStop) {
  const ROUTE_STOPS = ['A', 'B', 'C', 'D', 'E', 'F']; // boros!
}

// ✅ Deklarasi sekali di luar, dipakai oleh semua function
const ROUTE_STOPS = ['A', 'B', 'C', 'D', 'E', 'F'];
```

**2) ❌ Membungkus function dengan arrow function yang tidak perlu**
```javascript
// ❌ Arrow function tidak diperlukan di sini
return passengerList.map((passenger) => buildPassengerRecord(passenger));

// ✅ Langsung pass nama function sebagai callback
return passengerList.map(buildPassengerRecord);
```

**3) ❌ Menggabungkan semua logic ke dalam satu function**
```javascript
// ❌ naikAngkot mengerjakan terlalu banyak hal sekaligus
function naikAngkot(passengerList) {
  return passengerList.map(passenger => {
    const [name, start, end] = passenger;
    return { penumpang: name, naikDari: start, tujuan: end,
             bayar: (ROUTE_STOPS.indexOf(end) - ROUTE_STOPS.indexOf(start)) * FARE_PER_STOP };
  });
}

// ✅ Pisahkan tanggung jawab ke helper function
function naikAngkot(passengerList) {
  return passengerList.map(buildPassengerRecord);
}
```

### **💡 Insight Penting:**

> **Apa itu Single Responsibility Principle?**
> Setiap function sebaiknya hanya punya satu alasan untuk berubah. `calculateFare` hanya berubah jika aturan tarif berubah. `buildPassengerRecord` hanya berubah jika struktur output berubah. Keduanya independen satu sama lain.

> **Kapan passing function langsung ke `.map()` lebih baik dari arrow function?**
> Ketika callback sudah punya nama yang deskriptif. `passengerList.map(buildPassengerRecord)` langsung terbaca sebagai "transformasi setiap penumpang menjadi record" — tanpa perlu membaca isi arrow function.

---

═══════════════════════════════════════════════════════════════════════

# 🔀 VERSI 3: `.map()` Single Function — Compact Style

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Modern%20%7C%20Compact-purple?style=flat-square)
![Style](https://img.shields.io/badge/Style-Functional-9cf?style=flat-square)
![Recommended](https://img.shields.io/badge/Recommended-✅%20Yes-success?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const naikAngkot = (passengerList) => {
  const routeStops  = ['A', 'B', 'C', 'D', 'E', 'F'];
  const farePerStop = 2000;

  return passengerList.map(([passengerName, boardingStop, destinationStop]) => {
    const boardingIndex    = routeStops.indexOf(boardingStop);
    const destinationIndex = routeStops.indexOf(destinationStop);
    const totalStops       = destinationIndex - boardingIndex;
    const totalFare        = totalStops * farePerStop;

    return {
      penumpang: passengerName,
      naikDari: boardingStop,
      tujuan: destinationStop,
      bayar: totalFare
    };
  });
};
```

</details>

### **Konsep Inti:**
```
naikAngkot(passengerList):
  Return passengerList.map(setiap penumpang):
    Destructuring → passengerName, boardingStop, destinationStop
    Cari boardingIndex di routeStops
    Cari destinationIndex di routeStops
    Hitung totalStops = destinationIndex - boardingIndex
    Hitung totalFare  = totalStops * farePerStop
    Return object { penumpang, naikDari, tujuan, bayar }
```

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. **Arrow function `naikAngkot`**
   - `passengerList` — array dua dimensi `[nama, halteNaik, halteTujuan]`
   - **return** — array of object `{ penumpang, naikDari, tujuan, bayar }`
   ```javascript
   const naikAngkot = (passengerList) => {
   ```

#### 🔄 Di Dalam Function:

2. **Inisialisasi konstanta lokal**
   - `routeStops` dan `farePerStop` didefinisikan di dalam function
   ```javascript
   const routeStops  = ['A', 'B', 'C', 'D', 'E', 'F'];
   const farePerStop = 2000;
   ```

3. **`.map()` dengan destructuring langsung di parameter callback**
   - Ambil `passengerName`, `boardingStop`, `destinationStop` sekaligus
   ```javascript
   return passengerList.map(([passengerName, boardingStop, destinationStop]) => {
   ```

4. **Cari index halte naik**
   - Contoh: `'B'` → index `1`
   ```javascript
   const boardingIndex = routeStops.indexOf(boardingStop); // 'B' → 1
   ```

5. **Cari index halte tujuan**
   - Contoh: `'F'` → index `5`
   ```javascript
   const destinationIndex = routeStops.indexOf(destinationStop); // 'F' → 5
   ```

6. **Hitung jumlah halte yang dilewati**
   - Variabel perantara `totalStops` membuat kalkulasi lebih mudah dibaca
   ```javascript
   const totalStops = destinationIndex - boardingIndex; // 5 - 1 = 4
   ```

7. **Hitung total ongkos**
   ```javascript
   const totalFare = totalStops * farePerStop; // 4 * 2000 = 8000
   ```

8. **Return object hasil**
   ```javascript
   return {
     penumpang: passengerName,
     naikDari: boardingStop,
     tujuan: destinationStop,
     bayar: totalFare
   };
   ```

### **Visualisasi untuk `[['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]`:**

```
routeStops  = ['A','B','C','D','E','F']
farePerStop = 2000

.map() — Iterasi 1 → ['Dimitri', 'B', 'F']
  passengerName   = 'Dimitri'
  boardingStop    = 'B'
  destinationStop = 'F'
  boardingIndex    = routeStops.indexOf('B') = 1
  destinationIndex = routeStops.indexOf('F') = 5
  totalStops = 5 - 1 = 4
  totalFare  = 4 * 2000 = 8000 ✅
  return { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }

.map() — Iterasi 2 → ['Icha', 'A', 'B']
  passengerName   = 'Icha'
  boardingStop    = 'A'
  destinationStop = 'B'
  boardingIndex    = routeStops.indexOf('A') = 0
  destinationIndex = routeStops.indexOf('B') = 1
  totalStops = 1 - 0 = 1
  totalFare  = 1 * 2000 = 2000 ✅
  return { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 }
```

### **Keywords:**
- ➡️ **Arrow function** — `const naikAngkot = (passengerList) => { }` sintaks modern
- 🔄 **`.map()`** — transformasi setiap elemen array menjadi bentuk baru
- 📦 **Destructuring di parameter callback** — `([passengerName, boardingStop, destinationStop])` langsung di parameter `.map()`
- 🔍 **`indexOf()`** — mencari posisi elemen di array
- 🪜 **Variabel perantara** — `totalStops` memisahkan kalkulasi agar lebih mudah dibaca
- 🚫 **Magic number** — hindari angka langsung, gunakan `farePerStop`

### **Kapan Pakai:**
- ✅ Soal sederhana yang tidak butuh reusability
- ✅ Prefer semua logic di satu tempat tanpa lompat antar function
- ✅ Ingin kode modern yang ringkas
- ✅ Familiar dengan arrow function dan destructuring

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa kurung ekstra saat destructuring di parameter `.map()`**
```javascript
// ❌ Tanpa kurung ekstra — SyntaxError!
passengerList.map([passengerName, boardingStop, destinationStop] => { })

// ✅ Harus ada kurung pembungkus
passengerList.map(([passengerName, boardingStop, destinationStop]) => { })
```

**2) ❌ Langsung kalkulasi tanpa variabel perantara**
```javascript
// ❌ Sulit dibaca — apa arti semua ini?
const totalFare = (routeStops.indexOf(destinationStop) - routeStops.indexOf(boardingStop)) * farePerStop;

// ✅ Pisahkan menjadi langkah-langkah yang jelas
const boardingIndex    = routeStops.indexOf(boardingStop);
const destinationIndex = routeStops.indexOf(destinationStop);
const totalStops       = destinationIndex - boardingIndex;
const totalFare        = totalStops * farePerStop;
```

**3) ❌ Lupa `return` di dalam arrow function dengan kurung kurawal**
```javascript
// ❌ .map() menghasilkan array of undefined
passengerList.map(([passengerName, boardingStop, destinationStop]) => {
  const totalFare = ...
  { penumpang: passengerName, ... } // tidak di-return!
})

// ✅ Harus eksplisit return jika menggunakan kurung kurawal
passengerList.map(([passengerName, boardingStop, destinationStop]) => {
  const totalFare = ...
  return { penumpang: passengerName, ... }
})
```

### **💡 Insight Penting:**

> **Kapan compact style lebih cocok dari modular style?**
> Ketika logicnya sederhana dan tidak perlu dipakai ulang di tempat lain. Compact style lebih mudah dibaca untuk soal kecil karena semua ada di satu tempat — tidak perlu lompat-lompat antar function.

> **Kenapa `totalStops` sebagai variabel perantara itu bagus?**
> Karena memberi nama pada hasil kalkulasi. `totalStops = 4` langsung terbaca sebagai "4 halte dilewati" — lebih informatif daripada angka `4` yang muncul begitu saja di kalkulasi berikutnya.

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES LENGKAP

═══════════════════════════════════════════════════════════════════════

```javascript
const testCases = [
  {
    input: [],
    expected: [],
    desc: 'Edge case — input kosong'
  },
  {
    input: [['Dimitri', 'B', 'F']],
    expected: [
      { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }
    ],
    desc: 'Normal case 1 — satu penumpang dari B ke F'
  },
  {
    input: [['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']],
    expected: [
      { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
      { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 }
    ],
    desc: 'Normal case 2 — dua penumpang rute berbeda'
  },
  {
    input: [['Budi', 'C', 'C']],
    expected: [
      { penumpang: 'Budi', naikDari: 'C', tujuan: 'C', bayar: 0 }
    ],
    desc: 'Edge case — naik dan turun di halte yang sama'
  },
  {
    input: [['Siti', 'E', 'F']],
    expected: [
      { penumpang: 'Siti', naikDari: 'E', tujuan: 'F', bayar: 2000 }
    ],
    desc: 'Normal case 3 — rute pendek 1 langkah'
  },
  {
    input: [
      ['Andi', 'A', 'C'],
      ['Budi', 'B', 'E'],
      ['Cici', 'D', 'F']
    ],
    expected: [
      { penumpang: 'Andi', naikDari: 'A', tujuan: 'C', bayar: 4000 },
      { penumpang: 'Budi', naikDari: 'B', tujuan: 'E', bayar: 6000 },
      { penumpang: 'Cici', naikDari: 'D', tujuan: 'F', bayar: 4000 }
    ],
    desc: 'Normal case 4 — beberapa penumpang berbagai rute'
  }
]

const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)

testCases.forEach(({ input, expected, desc }, index) => {
  const result = naikAngkot(input)
  const status = isEqual(result, expected) ? '✅ PASS' : '❌ FAIL'

  console.log(`Test Case #${index + 1}: ${status} - ${desc}`)

  if (status === '❌ FAIL') {
    console.log('Input   :', JSON.stringify(input))
    console.log('Expected:', JSON.stringify(expected))
    console.log('Result  :', JSON.stringify(result))
  }
})
```

**Output yang diharapkan:**
```
Test Case #1: ✅ PASS - Edge case — input kosong
Test Case #2: ✅ PASS - Normal case 1 — satu penumpang dari B ke F
Test Case #3: ✅ PASS - Normal case 2 — dua penumpang rute berbeda
Test Case #4: ✅ PASS - Edge case — naik dan turun di halte yang sama
Test Case #5: ✅ PASS - Normal case 3 — rute pendek 1 langkah
Test Case #6: ✅ PASS - Normal case 4 — beberapa penumpang berbagai rute
```

---

═══════════════════════════════════════════════════════════════════════

# 📊 PERBANDINGAN LENGKAP

═══════════════════════════════════════════════════════════════════════

| Aspek | ✅ for...of + push | 🔄 map + helper | 🔀 map single |
|-------|:-----------------:|:---------------:|:-------------:|
| Style | Imperative | Modular Functional | Compact Functional |
| Jumlah function | 1 | 3 (main + 2 helper) | 1 |
| Butuh array penampung | ✅ Ya | ❌ Tidak | ❌ Tidak |
| Butuh `push` manual | ✅ Ya | ❌ Tidak | ❌ Tidak |
| Konstanta | Lokal di dalam function | Global UPPERCASE | Lokal di dalam function |
| Destructuring | Di parameter loop | Di dalam helper | Di parameter `.map()` |
| Kompleksitas waktu | O(n) | O(n) | O(n) |
| Kompleksitas memori | O(n) | O(n) | O(n) |
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Untuk pemula | ✅ Sangat cocok | ⚠️ Butuh paham helper | ⚠️ Butuh paham `.map()` |
| Reusability | Rendah | ✅ Tinggi | Rendah |

---

## 🎯 Decision Tree

```
Prioritas utama kamu apa?
│
├── BELAJAR / READABILITY
│   │
│   ├── Butuh break/continue?    ──▶ ✅ for...of + push
│   │                                 (paling eksplisit, mudah debug)
│   │
│   └── Tidak butuh break?       ──▶ ✅ for...of + push atau map single
│                                     (keduanya mudah dibaca)
│
├── MODULAR / REUSABLE
│   │
│   └── Logic dipakai di banyak tempat? ──▶ 🔄 map + helper function
│                                            (Single Responsibility, reusable)
│
└── RINGKAS / MODERN
    │
    └── Semua logic di satu tempat?  ──▶ 🔀 map single function
                                          (compact, modern, arrow function)

Default: ✅ for...of + push — paling mudah dipahami untuk belajar ✅
```

---

## 🔑 Key Takeaways

```
┌─────────────────────────────────────────────────────────────────────┐
│  💡 Semua Solusi Menghasilkan Output yang Sama                      │
│     Perbedaan hanya pada pendekatan, gaya, dan struktur kode        │
├─────────────────────────────────────────────────────────────────────┤
│  💡 indexOf() adalah Kunci Kalkulasi                                │
│     Tidak perlu loop rute — cukup indexOf() untuk cari posisi halte │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Array Kosong Otomatis Ter-handle                                │
│     for...of dan .map() pada [] tidak masuk loop → return [] ✅     │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Magic Number vs Konstanta                                       │
│     Hindari 2000 langsung — gunakan farePerStop atau FARE_PER_STOP  │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Pilih Sesuai Konteks                                            │
│     Belajar → for...of + push   | Reusable → map + helper          │
│     Ringkas → map single        | Semua kompleksitas sama O(n)      │
└─────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

## 🎯 Quick Reference Card

| Versi | Highlight |
|-------|-----------|
| ✅ **for...of + push** | `for (const [...] of passengerList)` → `indexOf()` → `push({...})` → `return` |
| 🔄 **map + helper** | `ROUTE_STOPS` global → `calculateFare()` → `buildPassengerRecord()` → `passengerList.map(buildPassengerRecord)` |
| 🔀 **map single** | `passengerList.map(([name, start, end]) =>` → `indexOf()` → `totalStops` → `return {...}` |

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
