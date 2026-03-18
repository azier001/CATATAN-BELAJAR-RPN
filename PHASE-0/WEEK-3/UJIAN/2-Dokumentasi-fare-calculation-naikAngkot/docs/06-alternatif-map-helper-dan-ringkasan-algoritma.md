# 📚 naikAngkot - PART 6: ALTERNATIF `.map()` + Helper Function

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║     🔄 PART 6: ALTERNATIF .map() + Helper Function — Modular Style 🔄   ║
║                                                                          ║
║        Pendekatan Alternatif Menggunakan .map() dan Helper Function      ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 📖 Konsep | ✅ Kode | 🧪 Test Cases | 📖 Algoritma | ⚠️ Pitfalls |
|:---------:|:-------:|:-------------:|:------------:|:-----------:|
| [Jump](#-perbedaan-modular-style-vs-single-function) | [Jump](#-kode-alternatif-map--helper-function) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) | [Jump](#-pitfalls-jebakan-umum) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami konsep Single Responsibility Principle
- ✅ Tahu kapan memisahkan logic ke helper function
- ✅ Paham cara passing function langsung ke `.map()`
- ✅ Bisa mengimplementasikan solusi modular style

---

## 📖 Perbedaan Modular Style vs Single Function

Modular style memisahkan setiap tanggung jawab ke function tersendiri:

| | Single Function | Modular Style |
|---|---|---|
| Jumlah function | 1 | 3 (main + 2 helper) |
| Panjang main function | Panjang | 1 baris |
| Reusability | Rendah | Tinggi |
| Mudah di-test | Kurang | Lebih mudah |
| Cocok untuk | Belajar, soal kecil | Project besar |

```javascript
// Single function — semua logic di satu tempat
function naikAngkot(passengerList) {
  const routeStops  = ['A', 'B', 'C', 'D', 'E', 'F'];
  const farePerStop = 2000;
  const travelRecords = [];
  for (const [passengerName, boardingStop, destinationStop] of passengerList) {
    // ... kalkulasi dan push
  }
  return travelRecords;
}

// Modular style — setiap function punya satu tugas
function calculateFare(boardingStop, destinationStop) { ... }   // hanya hitung ongkos
function buildPassengerRecord(passenger) { ... }                // hanya bentuk object
function naikAngkot(passengerList) {                            // hanya orkestrasi
  return passengerList.map(buildPassengerRecord);
}
```

> 💡 Di modular style, `naikAngkot` hanya bertugas sebagai orkestrator — ia tidak perlu tahu cara kalkulasi ongkos atau cara membentuk object. Setiap detail didelegasikan ke helper function masing-masing.

---

## ✅ Kode Alternatif `.map()` + Helper Function

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

### Perubahan dari Versi `for...of` + `push`:

| Sebelum | Sesudah | Keterangan |
|---------|---------|------------|
| `routeStops` di dalam function | `ROUTE_STOPS` global | Uppercase = konstanta global |
| `farePerStop` di dalam function | `FARE_PER_STOP` global | Uppercase = konstanta global |
| Kalkulasi ongkos di dalam loop | `calculateFare()` terpisah | Single responsibility |
| Pembentukan object di dalam loop | `buildPassengerRecord()` terpisah | Single responsibility |
| `for...of` + `push` | `.map(buildPassengerRecord)` | Functional style |

---

## 🧪 Test Cases

```javascript
// Edge case — input kosong
console.log(naikAngkot([]));
// → []
```

```javascript
// Normal case 1 — satu penumpang
console.log(naikAngkot([['Dimitri', 'B', 'F']]));
// → [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
```

```javascript
// Normal case 2 — dua penumpang rute berbeda
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// → [
//     { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//     { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 }
//   ]
```

```javascript
// Edge case — naik dan turun di halte yang sama
console.log(naikAngkot([['Budi', 'C', 'C']]));
// → [{ penumpang: 'Budi', naikDari: 'C', tujuan: 'C', bayar: 0 }]
```

```javascript
// Normal case 3 — beberapa penumpang berbagai rute
console.log(naikAngkot([['Andi', 'A', 'C'], ['Budi', 'B', 'E'], ['Cici', 'D', 'F']]));
// → [
//     { penumpang: 'Andi', naikDari: 'A', tujuan: 'C', bayar: 4000 },
//     { penumpang: 'Budi', naikDari: 'B', tujuan: 'E', bayar: 6000 },
//     { penumpang: 'Cici', naikDari: 'D', tujuan: 'F', bayar: 4000 }
//   ]
```

---

## 📖 Ringkasan Algoritma

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

---

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

---

### **Visualisasi untuk `[['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]`:**

```
┌─────────────────────────────────────────────────────────────────┐
│  ROUTE_STOPS   = ['A','B','C','D','E','F']                     │
│  FARE_PER_STOP = 2000                                          │
│                                                                 │
│  .map() — Iterasi 1 → buildPassengerRecord(['Dimitri','B','F'])│
│    passengerName   = 'Dimitri'                                 │
│    boardingStop    = 'B'                                       │
│    destinationStop = 'F'                                       │
│                                                                 │
│    calculateFare('B', 'F'):                                    │
│      boardingIndex    = ROUTE_STOPS.indexOf('B') = 1          │
│      destinationIndex = ROUTE_STOPS.indexOf('F') = 5          │
│      return (5 - 1) * 2000 = 8000 ✅                           │
│                                                                 │
│    return { penumpang: 'Dimitri', naikDari: 'B',               │
│             tujuan: 'F', bayar: 8000 }                        │
│                                                                 │
│  .map() — Iterasi 2 → buildPassengerRecord(['Icha','A','B'])   │
│    passengerName   = 'Icha'                                    │
│    boardingStop    = 'A'                                       │
│    destinationStop = 'B'                                       │
│                                                                 │
│    calculateFare('A', 'B'):                                    │
│      boardingIndex    = ROUTE_STOPS.indexOf('A') = 0          │
│      destinationIndex = ROUTE_STOPS.indexOf('B') = 1          │
│      return (1 - 0) * 2000 = 2000 ✅                           │
│                                                                 │
│    return { penumpang: 'Icha', naikDari: 'A',                  │
│             tujuan: 'B', bayar: 2000 }                        │
└─────────────────────────────────────────────────────────────────┘
```

---

### **Keywords:**
- 🗂️ **Konstanta global** — `ROUTE_STOPS`, `FARE_PER_STOP` dideklarasi sekali, dipakai semua function
- 🔧 **Helper function** — function kecil dengan satu tugas spesifik
- 🎯 **Single Responsibility** — `calculateFare` hanya hitung ongkos, `buildPassengerRecord` hanya bentuk object
- 🔄 **`.map()`** — transformasi setiap elemen array menjadi bentuk baru tanpa array penampung manual
- 📦 **Destructuring** — `[passengerName, boardingStop, destinationStop]` dari array penumpang
- 🔍 **`indexOf()`** — mencari posisi elemen di array

---

### **Kompleksitas:**

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n)** | n = jumlah penumpang, setiap penumpang diproses satu kali |
| Memori | **O(n)** | `.map()` menghasilkan array baru berisi n object |

---

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
    const si = ROUTE_STOPS.indexOf(start);
    const ei = ROUTE_STOPS.indexOf(end);
    return { penumpang: name, naikDari: start, tujuan: end,
             bayar: (ei - si) * FARE_PER_STOP };
  });
}

// ✅ Pisahkan tanggung jawab ke helper function
function naikAngkot(passengerList) {
  return passengerList.map(buildPassengerRecord);
}
```

---

### **💡 Insight Penting:**

> **Kenapa konstanta ditulis UPPERCASE?**
> Konvensi JavaScript untuk nilai yang tidak pernah berubah. `ROUTE_STOPS` dan `FARE_PER_STOP` memberi sinyal kepada pembaca kode bahwa nilai ini adalah konfigurasi tetap, bukan variabel yang akan dimodifikasi.

> **Apa itu Single Responsibility Principle?**
> Setiap function sebaiknya hanya punya satu alasan untuk berubah. `calculateFare` hanya berubah jika aturan tarif berubah. `buildPassengerRecord` hanya berubah jika struktur output berubah. Keduanya independen satu sama lain.

> **Kapan passing function langsung ke `.map()` lebih baik dari arrow function?**
> Ketika callback sudah punya nama yang deskriptif. `passengerList.map(buildPassengerRecord)` langsung terbaca sebagai "transformasi setiap penumpang menjadi record" — tanpa perlu membaca isi arrow function.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 5: Alternatif for...of + push](05-alternatif-forof-push-dan-ringkasan-algoritma.md)**
- **📖 [Lanjut ke Part 7: Alternatif .map() Single Function →](07-alternatif-map-single-dan-ringkasan-algoritma.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
