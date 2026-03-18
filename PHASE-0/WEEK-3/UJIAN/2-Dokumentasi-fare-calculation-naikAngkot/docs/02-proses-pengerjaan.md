# 📚 naikAngkot - PART 2: PROSES PENGERJAAN

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🔨 PART 2: PROSES PENGERJAAN 🔨                              ║
║                                                                          ║
║           Dari Kode Awal Hingga Kode Final Step-by-Step                  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 🏁 Kode Awal | 🔄 Step 1 | 🔄 Step 2 | 🔄 Step 3 | ✅ Kode Final |
|:-----------:|:---------:|:---------:|:---------:|:------------:|
| [Jump](#-kode-awal) | [Jump](#-step-1--menentukan-cara-hitung-ongkos) | [Jump](#-step-2--loop-penumpang-dan-bentuk-object) | [Jump](#-step-3--bentuk-object-dan-return) | [Jump](#-kode-final) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami proses berpikir dalam memecahkan soal ini
- ✅ Tahu kenapa `indexOf()` adalah kunci kalkulasi ongkos
- ✅ Paham cara membentuk object hasil dari data penumpang
- ✅ Bisa me-return array of object dengan benar

---

## 🏁 Kode Awal

Ini adalah kode pertama yang ditulis sebelum ada bayangan solusi yang jelas:

```javascript
function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];

  if(arrPenumpang.length === 0) return []

  const report = []
  const penumpangMap  = {}

  for (let i = 0; i < arrPenumpang.length; i++) {
    const [name, start, end] = arrPenumpang[i]

    report.push({penumpang : name, naikDari: start, tujuan: end, bayar:0})

    penumpangMap[name] = {index: i, start, end}
  }

  let startIndex
  let endIndex

  for( let i = 0; i < rute.length; i++) {
    console.log(penumpangMap)
    // if(rute[i] === i)
  }

  return report
}
```

### ❌ Masalah di Kode Awal

- Dua loop berjalan terpisah tanpa saling terhubung
- Loop kedua mengiterasi `rute` tapi tidak tahu cara menghubungkannya ke `penumpangMap`
- `bayar` selalu `0` karena belum ada kalkulasi ongkos
- `penumpangMap` dibuat tapi tidak terpakai secara efektif
- `startIndex` dan `endIndex` dideklarasi tapi tidak pernah diisi

---

## 🔄 Step 1 — Menentukan Cara Hitung Ongkos

**Insight:** Tidak perlu loop `rute` sama sekali. Cukup gunakan `indexOf()` untuk menemukan posisi halte naik dan halte tujuan, lalu hitung selisihnya.

```javascript
const rute = ['A', 'B', 'C', 'D', 'E', 'F'];

const startIndex = rute.indexOf('B'); // → 1
const endIndex   = rute.indexOf('F'); // → 5

const diff = endIndex - startIndex;   // → 4
const bayar = diff * 2000;            // → 8000

console.log(bayar); // 8000
```

```
// Visualisasi:
rute  = ['A', 'B', 'C', 'D', 'E', 'F']
index =   0    1    2    3    4    5

indexOf('B') = 1
indexOf('F') = 5
selisih = 5 - 1 = 4 halte
ongkos  = 4 × 2000 = 8000 ✅
```

✅ Kalkulasi ongkos sudah bisa berjalan tanpa loop `rute`.

---

## 🔄 Step 2 — Loop Penumpang dan Bentuk Object

**Insight:** Sekarang kalkulasi sudah benar. Tinggal loop setiap penumpang, hitung ongkosnya, dan bentuk object hasilnya.

```javascript
function naikAngkot(arrPenumpang) {
  const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  const report = [];

  for (const [name, start, end] of arrPenumpang) {
    const startIndex = rute.indexOf(start);
    const endIndex   = rute.indexOf(end);
    const diff       = endIndex - startIndex;
    const bayar      = diff * 2000;

    console.log(name, start, end, bayar);
  }

  return report;
}
```

```
// Output untuk [['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]:
Dimitri B F 8000
Icha A B 2000
```

✅ Semua kalkulasi sudah benar. Sekarang tinggal push ke `report`.

---

## 🔄 Step 3 — Bentuk Object dan Return

**Insight:** Semua bahan sudah ada. Tinggal push object hasil ke `report` dan return.

```javascript
function naikAngkot(arrPenumpang) {
  const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  const report = [];

  for (const [name, start, end] of arrPenumpang) {
    const startIndex = rute.indexOf(start);
    const endIndex   = rute.indexOf(end);
    const bayar      = (endIndex - startIndex) * 2000;

    report.push({ penumpang: name, naikDari: start, tujuan: end, bayar });
  }

  return report;
}
```

```
// Output untuk [['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]:
[
  { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 }
]
```

✅ Semua test case lulus!

---

## ✅ Kode Final

Ini adalah kode final yang siap untuk submission:

```javascript
function naikAngkot(arrPenumpang) {
  const rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  const report = [];

  for (const [name, start, end] of arrPenumpang) {
    const startIndex = rute.indexOf(start);
    const endIndex   = rute.indexOf(end);
    const bayar      = (endIndex - startIndex) * 2000;

    report.push({ penumpang: name, naikDari: start, tujuan: end, bayar });
  }

  return report;
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

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 1: Soal & Kriteria](01-soal-dan-kriteria.md)**
- **📖 [Lanjut ke Part 3: Kesalahan & Pelajaran →](03-kesalahan-dan-pelajaran.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
