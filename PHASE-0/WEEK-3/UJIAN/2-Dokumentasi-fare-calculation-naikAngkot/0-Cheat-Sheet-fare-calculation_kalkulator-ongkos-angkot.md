# 🔄 Cheat Sheet — naikAngkot (Fare Calculation)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. `.map()` + Helper Function — Modular Style ⭐ `PALING DIREKOMENDASIKAN`

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

> 🔑 **Single Responsibility Principle** — setiap function punya satu tugas. `calculateFare` hanya hitung ongkos, `buildPassengerRecord` hanya bentuk object. Paling cocok untuk project besar & reusability tinggi.

---

### 2. `.map()` Single Function — Compact Style ⭐ `PALING RINGKAS`

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

> 🔑 Semua logic di satu tempat, arrow function + destructuring di parameter `.map()`. Cocok untuk soal sederhana yang tidak butuh reusability.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. `for...of` + `push` — Imperative Style ⭐ `PALING INTUITIF`

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

> 🔑 Alur paling eksplisit — loop manual + push ke array penampung. Cocok untuk pemula yang baru belajar logika dasar. Bisa pakai `break`/`continue` di tengah loop.

---

### 4. `for...of` Versi Ringkas (Arrow Function + `Math.abs`)

```javascript
const naikAngkot = (arrPenumpang) => {
  const routes = ['A', 'B', 'C', 'D', 'E', 'F'];
  const result = [];

  for (const [passengerName, origin, destination] of arrPenumpang) {
    const originIndex = routes.indexOf(origin);
    const destinationIndex = routes.indexOf(destination);

    const fare = Math.abs(originIndex - destinationIndex) * 2000;

    result.push({
      penumpang: passengerName,
      naikDari: origin,
      tujuan: destination,
      bayar: fare,
    });
  }

  return result;
};
```

> 🔑 Versi `for...of` dengan arrow function dan `Math.abs()` untuk handle selisih index. Nama variabel lebih pendek, cocok untuk quick-write saat ujian.

---

### 5. `.map()` Versi Ringkas (Arrow Function + `Math.abs`)

```javascript
const naikAngkot = (arrPenumpang) => {
  const routes = ['A', 'B', 'C', 'D', 'E', 'F'];

  return arrPenumpang.map(([passengerName, origin, destination]) => {
    const originIndex = routes.indexOf(origin);
    const destinationIndex = routes.indexOf(destination);

    const fare = Math.abs(originIndex - destinationIndex) * 2000;

    return {
      penumpang: passengerName,
      naikDari: origin,
      tujuan: destination,
      bayar: fare,
    };
  });
};
```

> 🔑 Versi `.map()` ringkas dengan `Math.abs()`. Tanpa variabel perantara `totalStops` — kalkulasi langsung di satu baris.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

> ⚠️ Tidak ada versi eksperimental yang didokumentasikan untuk challenge ini. Semua versi di atas sudah merupakan pendekatan yang valid dan layak digunakan.

---

## ⚠️ GOTCHA CEPAT

### 🔴 Destructuring di `.map()` — Wajib Kurung Ekstra!
```javascript
// ❌ SyntaxError!
passengerList.map([name, start, end] => { })

// ✅ Harus ada kurung pembungkus
passengerList.map(([name, start, end]) => { })
```

### 🔴 Lupa `return` di Arrow Function dengan `{}`
```javascript
// ❌ Menghasilkan array of undefined
passengerList.map(([name, start, end]) => {
  const fare = ...
  { penumpang: name, bayar: fare }  // tidak di-return!
})

// ✅ Harus eksplisit return
passengerList.map(([name, start, end]) => {
  const fare = ...
  return { penumpang: name, bayar: fare }
})
```

### 🔴 Urutan Destructuring Harus Sesuai Array Input
```javascript
// ❌ Urutan salah — nama & halte ketukar
const [boardingStop, passengerName, destinationStop] = passenger;

// ✅ Sesuai urutan [nama, halteNaik, halteTujuan]
const [passengerName, boardingStop, destinationStop] = passenger;
```

### 🔴 Magic Number vs Konstanta Deskriptif
```javascript
// ❌ Angka 2000 tanpa konteks
const fare = (destIdx - boardIdx) * 2000;

// ✅ Gunakan konstanta
const farePerStop = 2000;
const fare = (destIdx - boardIdx) * farePerStop;
```

---

## 📊 QUICK COMPARISON

| Aspek | V1 `for...of + push` | V2 `map + helper` ⭐ | V3 `map single` |
|-------|:---:|:---:|:---:|
| **Gaya** | Imperative | Modular Functional | Compact Functional |
| **Jumlah Function** | 1 | 3 (main + 2 helper) | 1 |
| **Baris Kode** | ~15 | ~18 | ~12 |
| **Butuh `result = []`?** | ✅ Ya | ❌ Tidak | ❌ Tidak |
| **Butuh `push()`?** | ✅ Ya | ❌ Tidak | ❌ Tidak |
| **Reusability** | Rendah | ✅ Tinggi | Rendah |
| **Readability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Cocok Untuk** | Belajar logika | Production & project besar | Soal ringkas & modern |
| **Kompleksitas** | O(n) | O(n) | O(n) |

---

## 🧪 TEST CASES

```javascript
// Test 1 — Edge case: input kosong
console.log(naikAngkot([]))
// → []

// Test 2 — Satu penumpang
console.log(naikAngkot([['Dimitri', 'B', 'F']]))
// → [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

// Test 3 — Dua penumpang rute berbeda
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]))
// → [{ penumpang: 'Dimitri', ... bayar: 8000 }, { penumpang: 'Icha', ... bayar: 2000 }]

// Test 4 — Naik dan turun di halte yang sama
console.log(naikAngkot([['Budi', 'C', 'C']]))
// → [{ penumpang: 'Budi', naikDari: 'C', tujuan: 'C', bayar: 0 }]

// Test 5 — Rute pendek 1 langkah
console.log(naikAngkot([['Siti', 'E', 'F']]))
// → [{ penumpang: 'Siti', naikDari: 'E', tujuan: 'F', bayar: 2000 }]

// Test 6 — Beberapa penumpang berbagai rute
console.log(naikAngkot([['Andi', 'A', 'C'], ['Budi', 'B', 'E'], ['Cici', 'D', 'F']]))
// → [{ ... bayar: 4000 }, { ... bayar: 6000 }, { ... bayar: 4000 }]
```

### Test Runner Otomatis

```javascript
const testCases = [
  { input: [], expected: [], desc: 'Edge case — input kosong' },
  { input: [['Dimitri', 'B', 'F']], expected: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }], desc: 'Satu penumpang dari B ke F' },
  { input: [['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']], expected: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }, { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 }], desc: 'Dua penumpang rute berbeda' },
  { input: [['Budi', 'C', 'C']], expected: [{ penumpang: 'Budi', naikDari: 'C', tujuan: 'C', bayar: 0 }], desc: 'Naik dan turun di halte yang sama' },
  { input: [['Siti', 'E', 'F']], expected: [{ penumpang: 'Siti', naikDari: 'E', tujuan: 'F', bayar: 2000 }], desc: 'Rute pendek 1 langkah' },
  { input: [['Andi', 'A', 'C'], ['Budi', 'B', 'E'], ['Cici', 'D', 'F']], expected: [{ penumpang: 'Andi', naikDari: 'A', tujuan: 'C', bayar: 4000 }, { penumpang: 'Budi', naikDari: 'B', tujuan: 'E', bayar: 6000 }, { penumpang: 'Cici', naikDari: 'D', tujuan: 'F', bayar: 4000 }], desc: 'Beberapa penumpang berbagai rute' }
];

const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

testCases.forEach(({ input, expected, desc }, i) => {
  const result = naikAngkot(input);
  const status = isEqual(result, expected) ? '✅ PASS' : '❌ FAIL';
  console.log(`Test #${i + 1}: ${status} — ${desc}`);
  if (status === '❌ FAIL') {
    console.log('  Expected:', JSON.stringify(expected));
    console.log('  Result  :', JSON.stringify(result));
  }
});
```
