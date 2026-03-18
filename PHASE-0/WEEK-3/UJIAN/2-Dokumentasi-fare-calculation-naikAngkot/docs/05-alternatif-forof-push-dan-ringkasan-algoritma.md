# 📚 naikAngkot - PART 5: ALTERNATIF `for...of` + `push`

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        🔄 PART 5: ALTERNATIF for...of + push — Imperative Style 🔄      ║
║                                                                          ║
║           Pendekatan Alternatif Menggunakan for...of dan push            ║
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
| [Jump](#-perbedaan-forof--push-vs-map) | [Jump](#-kode-alternatif-forof--push) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) | [Jump](#-pitfalls-jebakan-umum) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami perbedaan `for...of` + `push` vs `.map()`
- ✅ Tahu kapan imperative style lebih cocok digunakan
- ✅ Paham kenapa pendekatan ini lebih mudah di-debug
- ✅ Bisa mengimplementasikan solusi menggunakan `for...of` + `push`

---

## 📖 Perbedaan `for...of` + `push` vs `.map()`

Keduanya menghasilkan output yang sama, tapi cara kerjanya berbeda:

| | `for...of` + `push` | `.map()` |
|---|---|---|
| Style | Imperative | Functional / Declarative |
| Array penampung | Wajib dideklarasi manual | Otomatis dibuat oleh `.map()` |
| `push` manual | ✅ Perlu | ❌ Tidak perlu |
| `break` / `continue` | ✅ Bisa | ❌ Tidak bisa |
| Keterbacaan pemula | ✅ Lebih mudah | Butuh paham callback |
| Debug | ✅ Lebih mudah (bisa `console.log` di mana saja) | Sedikit lebih sulit |

```javascript
// for...of + push — eksplisit, step-by-step
const travelRecords = [];
for (const [passengerName, boardingStop, destinationStop] of passengerList) {
  const totalFare = (routeStops.indexOf(destinationStop) - routeStops.indexOf(boardingStop)) * farePerStop;
  travelRecords.push({ penumpang: passengerName, naikDari: boardingStop,
                       tujuan: destinationStop, bayar: totalFare });
}

// .map() — ringkas, otomatis kumpulkan hasil
const travelRecords = passengerList.map(([passengerName, boardingStop, destinationStop]) => ({
  penumpang: passengerName,
  // ...
}));
```

> 💡 `for...of` + `push` lebih mudah dipahami oleh pemula karena alur kerjanya eksplisit — kamu melihat sendiri kapan array dibuat, kapan item diproses, dan kapan hasilnya dimasukkan.

---

## ✅ Kode Alternatif `for...of` + `push`

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

### Perubahan dari Kode Final (sebelum refactoring):

| Sebelum | Sesudah | Keterangan |
|---------|---------|------------|
| `arrPenumpang` | `passengerList` | Naming lebih deskriptif |
| `rute` | `routeStops` | Lebih spesifik konteksnya |
| `report` | `travelRecords` | Lebih deskriptif isinya |
| `name` / `start` / `end` | `passengerName` / `boardingStop` / `destinationStop` | Konteks domain angkot |
| `2000` langsung | `farePerStop` | Hindari magic number |

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
Loop setiap penumpang di passengerList
  Ambil passengerName, boardingStop, destinationStop
  Cari boardingIndex di routeStops
  Cari destinationIndex di routeStops
  Hitung totalFare = (destinationIndex - boardingIndex) * farePerStop
  Push object hasil ke travelRecords
Return travelRecords
```

---

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function naikAngkot(passengerList)`
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

---

### **Visualisasi untuk `[['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]`:**

```
┌─────────────────────────────────────────────────────────────────┐
│  routeStops  = ['A','B','C','D','E','F']                       │
│                  0    1    2    3    4    5                     │
│  travelRecords = []                                            │
│                                                                 │
│  Penumpang 1 — Dimitri (boardingStop='B', destinationStop='F') │
│    boardingIndex    = routeStops.indexOf('B') = 1              │
│    destinationIndex = routeStops.indexOf('F') = 5              │
│    totalFare = (5 - 1) * 2000 = 8000 ✅                        │
│    travelRecords = [{ penumpang: 'Dimitri', naikDari: 'B',     │
│                       tujuan: 'F', bayar: 8000 }]              │
│                                                                 │
│  Penumpang 2 — Icha (boardingStop='A', destinationStop='B')    │
│    boardingIndex    = routeStops.indexOf('A') = 0              │
│    destinationIndex = routeStops.indexOf('B') = 1              │
│    totalFare = (1 - 0) * 2000 = 2000 ✅                        │
│    travelRecords = [{ penumpang: 'Dimitri', ... bayar: 8000 }, │
│                     { penumpang: 'Icha', naikDari: 'A',        │
│                       tujuan: 'B', bayar: 2000 }]              │
└─────────────────────────────────────────────────────────────────┘
```

---

### **Keywords:**
- 🔄 **`for...of`** — loop modern untuk iterasi array tanpa index manual
- 📦 **Destructuring** — `[passengerName, boardingStop, destinationStop]` langsung dari elemen array
- 🔍 **`indexOf()`** — mencari posisi elemen di array, return `-1` jika tidak ditemukan
- ➕ **`push()`** — menambahkan object hasil ke `travelRecords`
- 🔢 **Shorthand property** — `{ penumpang, naikDari, tujuan, bayar }` jika nama key = nama variabel
- 🚫 **Magic number** — hindari angka langsung di kode, gunakan `farePerStop`

---

### **Kompleksitas:**

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n)** | n = jumlah penumpang, setiap penumpang diproses satu kali |
| Memori | **O(n)** | `travelRecords` menyimpan n object hasil |

---

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

---

### **💡 Insight Penting:**

> **Kenapa `for...of` lebih baik dari `for` biasa untuk kasus ini?**
> `for...of` lebih ekspresif dan langsung bekerja dengan nilai elemennya, tanpa perlu mengakses index manual seperti `arrPenumpang[i]`. Kode jadi lebih bersih dan niat lebih jelas terbaca.

> **Kenapa `indexOf()` cocok di sini?**
> Karena `routeStops` adalah array kecil dan statis (hanya 6 elemen). Untuk array besar, pertimbangkan menggunakan `Map` agar pencarian lebih efisien — O(1) vs O(n).

> **Kenapa array kosong otomatis ter-handle tanpa guard clause?**
> Karena `for...of` pada array kosong tidak pernah masuk ke dalam loop — `travelRecords` tetap `[]` dan langsung di-return. Input kosong sudah aman tanpa perlu kondisi tambahan.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 4: Refactoring & Clean Code](04-refactoring-clean-code.md)**
- **📖 [Lanjut ke Part 6: Alternatif .map() + Helper Function →](06-alternatif-map-helper-dan-ringkasan-algoritma.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
