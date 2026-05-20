# 🔄 Cheat Sheet — Mencari Pasangan Digit Terbesar

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Hybrid Modern (Math.max + Loop) ⭐ `PALING DIREKOMENDASIKAN`

```javascript
function pasanganTerbesar(number) {
  const numberString = String(number);
  let maxPair = Number(numberString.slice(0, 2));

  for (let i = 1; i < numberString.length - 1; i++) {
    const currentPair = Number(numberString.slice(i, i + 2));
    maxPair = Math.max(maxPair, currentPair);
  }

  return maxPair;
}
```

> 🔑 Sweet spot performa & readability: inisialisasi awal pasangan pertama secara eksplisit dengan .slice(), lalu loop dari i = 1 untuk efisiensi maksimal.

---

### 2. Optimasi Inisialisasi Cerdas (Template Literal) ⭐ `PALING EFISIEN`

```javascript
function pasanganTerbesar(number) {
  const numberString = String(number);
  let maxPair = Number(`${numberString[0]}${numberString[1]}`);

  for (let i = 1; i < numberString.length - 1; i++) {
    const currentPair = Number(`${numberString[i]}${numberString[i + 1]}`);
    maxPair = Math.max(maxPair, currentPair);
  }

  return maxPair;
}
```

> 🔑 Inisialisasi langsung dengan pasangan pertama, loop mulai dari `i = 1`. Menghemat 1 putaran loop + 1 operasi `Math.max`.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. Classic For Loop (if statement) `PALING INTUITIF`

```javascript
function pasanganTerbesar(number) {
  const numberString = String(number);
  let maxPair = 0;

  for (let i = 0; i < numberString.length - 1; i++) {
    const currentPair = Number(numberString[i] + numberString[i + 1]);
    if (currentPair > maxPair) {
      maxPair = currentPair;
    }
  }

  return maxPair;
}
```

> 🔑 Logika paling dasar dan transparan. Cocok untuk pemula yang ingin melatih insting algoritma step-by-step.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 4. Functional Programming (Array.from + reduce)

```javascript
function pasanganTerbesar(number) {
  const numberString = String(number);

  return Array.from({ length: numberString.length - 1 }, (_, i) =>
    Number(numberString.slice(i, i + 2)),
  ).reduce((max, pair) => Math.max(max, pair), 0);
}
```

> 🔑 One-liner deklaratif. Sangat ringkas tapi butuh pemahaman `Array.from()` dan `.reduce()`. ⚠️ Membuat array tambahan di memori.

---

### 5. Array Building + Math.max Spread

```javascript
function pasanganTerbesar(number) {
  const numberString = String(number);
  const pairs = [];

  for (let i = 0; i < numberString.length - 1; i++) {
    pairs.push(Number(numberString.slice(i, i + 2)));
  }

  return Math.max(...pairs);
}
```

> 🔑 Kumpulkan semua pasangan ke array dulu, baru cari max. Berguna jika array pasangan dibutuhkan untuk proses lain. ⚠️ Spread operator bisa error jika array > 100k elemen.

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ .slice(i, i + 1) hanya ambil 1 karakter!
'641573'.slice(0, 1); // → "6"    (1 digit)

// ✅ .slice(i, i + 2) ambil 2 karakter
'641573'.slice(0, 2); // → "64"   (2 digit — benar!)
```

```javascript
// ❌ Perbandingan string = urutan leksikografis (kamus)!
'9' > '83'; // → true   (SALAH secara numerik!)

// ✅ Selalu konversi ke Number dulu
Number('9') > Number('83'); // → false  (BENAR!)
```

```javascript
// ❌ Loop sampai str.length → pasangan terakhir hanya 1 digit
for (let i = 0; i < str.length; i++)     // i bisa = 5 → slice(5,7) = "3"

// ✅ Loop sampai str.length - 1 → semua pasangan 2 digit
for (let i = 0; i < str.length - 1; i++) // i maks = 4 → slice(4,6) = "73"
```

```javascript
// ❌ Variable shadowing: nama fungsi = nama variabel
const pasanganTerbesar = (num) => {
  let pasanganTerbesar = 0; // Konflik! Menimpa nama fungsi

// ✅ Gunakan nama berbeda
const pasanganTerbesar = (num) => {
  let maxPair = 0;          // Aman, tidak tabrakan
```

---

## 📊 QUICK COMPARISON

| Versi                    | Gaya       | Baris | Konversi                      | Perbandingan          | Rekomendasi           |
| ------------------------ | ---------- | :---: | ----------------------------- | --------------------- | --------------------- |
| 1. Hybrid Modern         | Imperatif  |   7   | `Number()` + `.slice()`       | `Math.max()`          | ⭐ **Best Practice**  |
| 2. Optimasi Inisialisasi | Imperatif  |   8   | `Number()` + Template Literal | `Math.max()`          | ⭐ **Paling Efisien** |
| 3. Classic For Loop      | Imperatif  |   9   | `Number()` + concatenation    | `if` statement        | 🧠 Pemula             |
| 4. Functional            | Deklaratif |   5   | `Number()` + `.slice()`       | `.reduce()`           | 🧪 Tim FP             |
| 5. Array Building        | Hybrid     |   8   | `Number()` + `.slice()`       | `Math.max(...spread)` | 🧪 Butuh array        |

---

## 🧪 TEST CASES

```javascript
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

// Edge cases
console.log(pasanganTerbesar(45)); // 45  (hanya 1 pasangan)
console.log(pasanganTerbesar(10)); // 10  (pasangan dengan 0)
```
