# 📚 naikAngkot - PART 4: REFACTORING & CLEAN CODE

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            ✨ PART 4: REFACTORING & CLEAN CODE ✨                        ║
║                                                                          ║
║           Dari Kode Final ke Kode yang Lebih Clean dan Readable          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔄 Penamaan | 🔄 Konstanta | 🔄 Helper Function | ✅ Kode Refactoring | 📖 Algoritma |
|:-----------:|:------------:|:-----------------:|:------------------:|:-----------:|
| [Jump](#-step-1--penamaan-variabel) | [Jump](#-step-2--magic-number--konstanta) | [Jump](#-step-3--extract-helper-function) | [Jump](#-kode-refactoring-final) | [Jump](#-ringkasan-algoritma) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami pentingnya penamaan variabel yang deskriptif
- ✅ Tahu cara menghindari magic number dengan konstanta
- ✅ Paham kapan sebaiknya memisahkan logic ke helper function
- ✅ Bisa membedakan kode yang clean vs tidak clean

---

## 🔄 Step 1 — Penamaan Variabel

Penamaan variabel yang baik membuat kode lebih mudah dibaca tanpa perlu komentar tambahan.

| Variabel Lama | Variabel Baru | Alasan |
|---------------|---------------|--------|
| `arrPenumpang` | `passengerList` | Bahasa Inggris, hindari prefix `arr` |
| `rute` | `routeStops` | Lebih spesifik — jelas ini array halte angkot |
| `report` | `travelRecords` | Lebih deskriptif — jelas isinya catatan perjalanan |
| `name` | `passengerName` | Lebih eksplisit — jelas ini nama penumpang |
| `start` / `end` | `boardingStop` / `destinationStop` | Konteks domain angkot, lebih deskriptif |
| `startIndex` / `endIndex` | `boardingIndex` / `destinationIndex` | Konsisten dengan naming halte |
| `bayar` | `totalFare` | Bahasa Inggris, lebih eksplisit |

### Kenapa Naming Penting?

```javascript
// ❌ Kurang deskriptif — harus baca ulang untuk paham
for (const [name, start, end] of arr) {
  const si = rute.indexOf(start);
  const ei = rute.indexOf(end);
  const b  = (ei - si) * 2000;
  r.push({ penumpang: name, naikDari: start, tujuan: end, bayar: b });
}

// ✅ Langsung terbaca tujuannya tanpa perlu komentar
for (const [passengerName, boardingStop, destinationStop] of passengerList) {
  const boardingIndex    = routeStops.indexOf(boardingStop);
  const destinationIndex = routeStops.indexOf(destinationStop);
  const totalFare        = (destinationIndex - boardingIndex) * 2000;
  travelRecords.push({ penumpang: passengerName, naikDari: boardingStop,
                       tujuan: destinationStop, bayar: totalFare });
}
```

---

## 🔄 Step 2 — Magic Number → Konstanta

Angka `2000` yang muncul langsung di kode disebut **magic number** — angka tanpa penjelasan yang memaksa pembaca menebak artinya.

```javascript
// ❌ Magic number — apa arti 2000?
const totalFare = (destinationIndex - boardingIndex) * 2000;

// ✅ Konstanta — langsung jelas artinya
const farePerStop = 2000;
const totalFare   = (destinationIndex - boardingIndex) * farePerStop;
```

> 💡 Jika tarif berubah dari Rp2.000 menjadi Rp3.000, kamu hanya perlu mengubah satu baris (`farePerStop = 3000`) — bukan mencari semua kemunculan `2000` di kode.

---

## 🔄 Step 3 — Extract Helper Function

Logic kalkulasi ongkos bisa dipisahkan ke function tersendiri agar `naikAngkot` lebih ringkas dan setiap function punya satu tanggung jawab.

```javascript
// ❌ Semua logic di dalam satu function
function naikAngkot(passengerList) {
  const routeStops  = ['A', 'B', 'C', 'D', 'E', 'F'];
  const farePerStop = 2000;
  const travelRecords = [];

  for (const [passengerName, boardingStop, destinationStop] of passengerList) {
    const boardingIndex    = routeStops.indexOf(boardingStop);
    const destinationIndex = routeStops.indexOf(destinationStop);
    const totalFare        = (destinationIndex - boardingIndex) * farePerStop;
    travelRecords.push({ penumpang: passengerName, naikDari: boardingStop,
                         tujuan: destinationStop, bayar: totalFare });
  }

  return travelRecords;
}

// ✅ Pisahkan kalkulasi ke helper function
const ROUTE_STOPS  = ['A', 'B', 'C', 'D', 'E', 'F'];
const FARE_PER_STOP = 2000;

function calculateFare(boardingStop, destinationStop) {
  const boardingIndex    = ROUTE_STOPS.indexOf(boardingStop);
  const destinationIndex = ROUTE_STOPS.indexOf(destinationStop);
  return (destinationIndex - boardingIndex) * FARE_PER_STOP;
}

function naikAngkot(passengerList) {
  // ... lebih ringkas, tanggung jawab jelas
}
```

> 💡 `ROUTE_STOPS` dan `FARE_PER_STOP` ditulis UPPERCASE karena ini konstanta global — nilai yang tidak pernah berubah dan bisa dipakai oleh semua function.

---

## ✅ Kode Refactoring Final

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

1. **Definisikan `ROUTE_STOPS` dan `FARE_PER_STOP` di luar function**
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
- 🔄 **`.map()`** — transformasi setiap elemen array menjadi bentuk baru
- 📦 **Destructuring** — `[passengerName, boardingStop, destinationStop]` dari array penumpang
- 🚫 **Magic number** — hindari angka langsung di kode, gunakan `FARE_PER_STOP`

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

**3) ❌ Magic number langsung di kalkulasi**
```javascript
// ❌ Angka 2000 tidak menjelaskan apa-apa
return (destinationIndex - boardingIndex) * 2000;

// ✅ Gunakan konstanta yang deskriptif
return (destinationIndex - boardingIndex) * FARE_PER_STOP;
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
- **📖 [← Part 3: Kesalahan & Pelajaran](03-kesalahan-dan-pelajaran.md)**
- **📖 [Lanjut ke Part 5: Alternatif for...of + push →](05-alternatif-forof-push-dan-ringkasan-algoritma.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
