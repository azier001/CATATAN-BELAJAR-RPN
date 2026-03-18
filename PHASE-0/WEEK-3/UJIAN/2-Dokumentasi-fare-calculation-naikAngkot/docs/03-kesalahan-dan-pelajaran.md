# 📚 naikAngkot - PART 3: KESALAHAN & PELAJARAN

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            ⚠️  PART 3: KESALAHAN & PELAJARAN ⚠️                         ║
║                                                                          ║
║           Kesalahan yang Ditemukan dan Apa yang Bisa Dipelajari          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| ❌ Kesalahan 1 | ❌ Kesalahan 2 | ❌ Kesalahan 3 | ❌ Kesalahan 4 | 💡 Ringkasan |
|:-------------:|:-------------:|:-------------:|:-------------:|:-----------:|
| [Jump](#-kesalahan-1--loop-rute-yang-tidak-perlu) | [Jump](#-kesalahan-2--dua-loop-terpisah-tanpa-koneksi) | [Jump](#-kesalahan-3--variabel-tanpa-deklarasi-const--let) | [Jump](#-kesalahan-4--bayar-selalu-0) | [Jump](#-ringkasan-kesalahan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami 4 kesalahan umum yang sering terjadi di soal ini
- ✅ Tahu kenapa setiap kesalahan bisa menyebabkan bug
- ✅ Paham kenapa `indexOf()` lebih tepat dari loop `rute`
- ✅ Bisa menghindari kesalahan yang sama di soal berikutnya

---

## ❌ Kesalahan 1 — Loop Rute yang Tidak Perlu

### Apa yang Terjadi

Di kode awal, ada percobaan menggunakan loop `rute` untuk menghitung ongkos:

```javascript
// ❌ SALAH — loop rute tidak efektif untuk kalkulasi jarak
for (let i = 0; i < rute.length; i++) {
  console.log(penumpangMap)
  // if(rute[i] === i) ← tidak jelas cara menghubungkannya
}
```

### Kenapa Salah

Loop `rute` mengiterasi semua halte satu per satu, tapi tidak ada cara langsung untuk menghitung selisih posisi antara dua halte dari dalam loop tersebut. Pendekatan ini terlalu kompleks untuk masalah yang sebenarnya sederhana.

```
// ❌ Yang dipikirkan:
Iterasi rute[0] = 'A' → cek siapa yang naik/turun di sini?
Iterasi rute[1] = 'B' → cek siapa yang naik/turun di sini?
... dst (6 iterasi hanya untuk 1 penumpang!)

// ✅ Yang seharusnya:
indexOf('B') = 1
indexOf('F') = 5
selisih = 5 - 1 = 4 → selesai! (0 iterasi tambahan)
```

### ✅ Solusi

```javascript
// ✅ BENAR — gunakan indexOf() langsung
const startIndex = rute.indexOf(start); // → 1
const endIndex   = rute.indexOf(end);   // → 5
const bayar      = (endIndex - startIndex) * 2000; // → 8000
```

---

## ❌ Kesalahan 2 — Dua Loop Terpisah Tanpa Koneksi

### Apa yang Terjadi

```javascript
// ❌ SALAH — dua loop berjalan sendiri-sendiri
const penumpangMap = {}

// Loop 1: kumpulkan data penumpang
for (let i = 0; i < arrPenumpang.length; i++) {
  const [name, start, end] = arrPenumpang[i]
  report.push({ penumpang: name, naikDari: start, tujuan: end, bayar: 0 })
  penumpangMap[name] = { index: i, start, end }
}

// Loop 2: iterasi rute — tapi tidak tahu cara pakai penumpangMap!
for (let i = 0; i < rute.length; i++) {
  console.log(penumpangMap) // hanya bisa console.log, tidak ada aksi
}
```

### Kenapa Salah

Loop pertama mengumpulkan data penumpang, tapi `bayar` langsung di-set `0`. Loop kedua tidak tahu cara mengakses `penumpangMap` untuk menghitung ongkos. Akibatnya `bayar` tidak pernah diisi dengan nilai yang benar.

```
// Yang terjadi:
report = [
  { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 0 }, ← salah!
  { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 0 }     ← salah!
]
```

### ✅ Solusi

```javascript
// ✅ BENAR — satu loop saja, kalkulasi langsung di dalam
for (const [name, start, end] of arrPenumpang) {
  const startIndex = rute.indexOf(start);
  const endIndex   = rute.indexOf(end);
  const bayar      = (endIndex - startIndex) * 2000; // langsung hitung!

  report.push({ penumpang: name, naikDari: start, tujuan: end, bayar });
}
```

---

## ❌ Kesalahan 3 — Variabel Tanpa Deklarasi `const` / `let`

### Apa yang Terjadi

```javascript
// ❌ SALAH — rute tanpa const/let
function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F']; // tidak ada const/let!
}
```

### Kenapa Salah

Tanpa `const` atau `let`, variabel `rute` menjadi **variabel global** yang bisa diakses dan dimodifikasi dari mana saja di seluruh program. Ini berbahaya karena:

```javascript
// ❌ Apa yang terjadi tanpa const/let:
function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F']; // global!
}

function fungsiLain() {
  rute = ['X', 'Y', 'Z']; // bisa ditimpa dari mana saja!
}

fungsiLain();
naikAngkot([...]); // rute sudah berubah jadi ['X','Y','Z'] → bug!
```

### ✅ Solusi

```javascript
// ✅ BENAR — gunakan const agar scoped di dalam function
function naikAngkot(arrPenumpang) {
  const rute = ['A', 'B', 'C', 'D', 'E', 'F']; // aman, scoped!
}
```

---

## ❌ Kesalahan 4 — `bayar` Selalu 0

### Apa yang Terjadi

```javascript
// ❌ SALAH — bayar langsung di-set 0 tanpa kalkulasi
for (let i = 0; i < arrPenumpang.length; i++) {
  const [name, start, end] = arrPenumpang[i]
  report.push({ penumpang: name, naikDari: start, tujuan: end, bayar: 0 })
  //                                                                   ↑ hardcoded 0!
}
```

### Kenapa Salah

Nilai `bayar` langsung di-set `0` secara hardcoded tanpa menghitung ongkos berdasarkan rute. Ini terjadi karena kalkulasi ongkos belum dipikirkan saat loop pertama ditulis.

```javascript
// ❌ Yang dihasilkan:
[
  { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 0 }, // harusnya 8000!
  { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 0 }     // harusnya 2000!
]
```

### ✅ Solusi

```javascript
// ✅ BENAR — hitung bayar sebelum push
for (const [name, start, end] of arrPenumpang) {
  const startIndex = rute.indexOf(start);
  const endIndex   = rute.indexOf(end);
  const bayar      = (endIndex - startIndex) * 2000; // kalkulasi dulu!

  report.push({ penumpang: name, naikDari: start, tujuan: end, bayar });
}
```

---

## 💡 Ringkasan Kesalahan

| No | Kesalahan | Dampak | Solusi |
|----|-----------|--------|--------|
| 1 | Loop `rute` untuk hitung jarak | Over-engineered, tidak efektif | Gunakan `indexOf()` langsung |
| 2 | Dua loop terpisah tanpa koneksi | `bayar` tidak pernah terhitung | Satu loop, kalkulasi langsung di dalam |
| 3 | Variabel `rute` tanpa `const`/`let` | Variabel global, rawan bug | Tambahkan `const` sebelum deklarasi |
| 4 | `bayar: 0` hardcoded | Semua ongkos selalu 0 | Hitung `bayar` sebelum push |

---

## 📚 Konsep yang Dipelajari

### `indexOf()` vs Loop Manual
`indexOf()` adalah cara paling efisien untuk mencari posisi elemen di array kecil yang statis. Tidak perlu loop manual — satu baris langsung menghasilkan posisi yang dibutuhkan.

### Variable Scope
Variabel yang dideklarasikan dengan `const` atau `let` bersifat **block-scoped** — hanya bisa diakses di dalam blok tempat ia dideklarasikan. Tanpa `const`/`let`, variabel menjadi global dan bisa diakses atau diubah dari mana saja, yang berpotensi menyebabkan bug yang sulit dilacak.

### Satu Loop, Satu Tanggung Jawab
Daripada membuat dua loop yang harus saling terhubung dengan struktur data perantara, lebih baik satu loop yang langsung menyelesaikan semua kalkulasi yang dibutuhkan per iterasi. Lebih simpel, lebih mudah dibaca, lebih mudah di-debug.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 2: Proses Pengerjaan](02-proses-pengerjaan.md)**
- **📖 [Lanjut ke Part 4: Refactoring & Clean Code →](04-refactoring-clean-code.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
