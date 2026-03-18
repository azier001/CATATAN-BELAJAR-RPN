# 📚 naikAngkot - PART 7: ALTERNATIF `.map()` Single Function

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║     🔄 PART 7: ALTERNATIF .map() Single Function — Compact Style 🔄     ║
║                                                                          ║
║        Pendekatan Alternatif Menggunakan .map() dalam Satu Function      ║
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
| [Jump](#-perbedaan-compact-style-vs-modular-style) | [Jump](#-kode-alternatif-map-single-function) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) | [Jump](#-pitfalls-jebakan-umum) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami perbedaan compact style vs modular style
- ✅ Tahu cara destructuring langsung di parameter `.map()`
- ✅ Paham kegunaan variabel perantara untuk keterbacaan
- ✅ Bisa mengimplementasikan solusi compact style

---

## 📖 Perbedaan Compact Style vs Modular Style

Compact style meletakkan semua logic di dalam satu function tanpa helper terpisah:

| | Modular Style | Compact Style |
|---|---|---|
| Jumlah function | 3 (main + 2 helper) | 1 |
| Panjang main function | 1 baris | ~10 baris |
| Semua logic terlihat | Perlu lompat antar function | Langsung di satu tempat |
| Reusability | Tinggi | Rendah |
| Cocok untuk | Project besar, banyak function | Soal kecil, belajar |

```javascript
// Modular style — logic tersebar di beberapa function
function calculateFare(boardingStop, destinationStop) { ... }
function buildPassengerRecord(passenger) { ... }
function naikAngkot(passengerList) {
  return passengerList.map(buildPassengerRecord); // 1 baris
}

// Compact style — semua logic di satu tempat
const naikAngkot = (passengerList) => {
  const routeStops  = ['A', 'B', 'C', 'D', 'E', 'F'];
  const farePerStop = 2000;
  return passengerList.map(([passengerName, boardingStop, destinationStop]) => {
    // kalkulasi dan bentuk object langsung di sini
  });
};
```

> 💡 Compact style lebih mudah dibaca untuk soal kecil karena semua ada di satu tempat — tidak perlu lompat-lompat antar function untuk memahami alurnya.

---

## ✅ Kode Alternatif `.map()` Single Function

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

### Perubahan dari Versi Modular Style:

| Sebelum | Sesudah | Keterangan |
|---------|---------|------------|
| `function naikAngkot` | `const naikAngkot = () =>` | Arrow function |
| `ROUTE_STOPS` global | `routeStops` lokal | Tidak perlu global karena satu function |
| `FARE_PER_STOP` global | `farePerStop` lokal | Tidak perlu global karena satu function |
| `buildPassengerRecord` terpisah | Inline di `.map()` | Compact — tidak perlu function terpisah |
| `calculateFare` terpisah | Kalkulasi inline | Compact — tidak perlu function terpisah |
| Tanpa `totalStops` | Ada `totalStops` sebagai perantara | Meningkatkan keterbacaan kalkulasi |

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
naikAngkot(passengerList):
  Return passengerList.map(setiap penumpang):
    Destructuring → passengerName, boardingStop, destinationStop
    Cari boardingIndex di routeStops
    Cari destinationIndex di routeStops
    Hitung totalStops = destinationIndex - boardingIndex
    Hitung totalFare  = totalStops * farePerStop
    Return object { penumpang, naikDari, tujuan, bayar }
```

---

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

---

### **Visualisasi untuk `[['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]`:**

```
┌─────────────────────────────────────────────────────────────────┐
│  routeStops  = ['A','B','C','D','E','F']                       │
│  farePerStop = 2000                                            │
│                                                                 │
│  .map() — Iterasi 1 → ['Dimitri', 'B', 'F']                   │
│    passengerName   = 'Dimitri'                                 │
│    boardingStop    = 'B'                                       │
│    destinationStop = 'F'                                       │
│    boardingIndex    = routeStops.indexOf('B') = 1              │
│    destinationIndex = routeStops.indexOf('F') = 5              │
│    totalStops = 5 - 1 = 4                                      │
│    totalFare  = 4 * 2000 = 8000 ✅                             │
│    return { penumpang: 'Dimitri', naikDari: 'B',               │
│             tujuan: 'F', bayar: 8000 }                        │
│                                                                 │
│  .map() — Iterasi 2 → ['Icha', 'A', 'B']                      │
│    passengerName   = 'Icha'                                    │
│    boardingStop    = 'A'                                       │
│    destinationStop = 'B'                                       │
│    boardingIndex    = routeStops.indexOf('A') = 0              │
│    destinationIndex = routeStops.indexOf('B') = 1              │
│    totalStops = 1 - 0 = 1                                      │
│    totalFare  = 1 * 2000 = 2000 ✅                             │
│    return { penumpang: 'Icha', naikDari: 'A',                  │
│             tujuan: 'B', bayar: 2000 }                        │
└─────────────────────────────────────────────────────────────────┘
```

---

### **Keywords:**
- ➡️ **Arrow function** — `const naikAngkot = (passengerList) => { }` sintaks modern
- 🔄 **`.map()`** — transformasi setiap elemen array menjadi bentuk baru
- 📦 **Destructuring di parameter callback** — `([passengerName, boardingStop, destinationStop])` langsung di parameter `.map()`
- 🔍 **`indexOf()`** — mencari posisi elemen di array
- 🪜 **Variabel perantara** — `totalStops` memisahkan kalkulasi agar lebih mudah dibaca
- 🚫 **Magic number** — hindari angka langsung, gunakan `farePerStop`

---

### **Kompleksitas:**

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n)** | n = jumlah penumpang, setiap penumpang diproses satu kali |
| Memori | **O(n)** | `.map()` menghasilkan array baru berisi n object |

---

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa kurung ekstra saat destructuring di parameter `.map()`**
```javascript
// ❌ Tanpa kurung ekstra — JavaScript mengira ini satu parameter biasa
passengerList.map([passengerName, boardingStop, destinationStop] => { })
// SyntaxError!

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
// ❌ Tidak ada return → .map() menghasilkan array of undefined
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

---

### **💡 Insight Penting:**

> **Kapan compact style lebih cocok dari modular style?**
> Ketika logicnya sederhana dan tidak perlu dipakai ulang di tempat lain. Compact style lebih mudah dibaca untuk soal kecil karena semua ada di satu tempat — tidak perlu lompat-lompat antar function untuk memahami alurnya.

> **Apa bedanya arrow function vs function declaration untuk kasus ini?**
> Secara hasil keduanya sama. Arrow function lebih ringkas dan modern, tapi tidak bisa dipanggil sebelum dideklarasi (tidak di-hoist). Function declaration bisa dipanggil di mana saja dalam file yang sama.

> **Kenapa `totalStops` sebagai variabel perantara itu bagus?**
> Karena memberi nama pada hasil kalkulasi. `totalStops = 4` langsung terbaca sebagai "4 halte dilewati" — lebih informatif daripada angka `4` yang muncul begitu saja di kalkulasi berikutnya.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 6: Alternatif .map() + Helper Function](06-alternatif-map-helper-dan-ringkasan-algoritma.md)**
- **📖 [Lanjut ke Part 8: Perbandingan & Kesimpulan →](08-perbandingan-dan-kesimpulan.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
