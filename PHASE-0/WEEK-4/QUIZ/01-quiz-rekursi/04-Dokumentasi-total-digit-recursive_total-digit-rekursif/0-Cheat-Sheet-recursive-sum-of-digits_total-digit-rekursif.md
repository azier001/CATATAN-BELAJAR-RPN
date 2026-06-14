# 🔄 Cheat Sheet — Total Digit Recursive / Total Digit Rekursif

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Rekursif Matematis (`< 10`) ⭐ `PALING DIREKOMENDASIKAN`

```javascript
function totalDigitRekursif(angka) {
  if (angka < 10) return angka;

  return (angka % 10) + totalDigitRekursif(Math.floor(angka / 10));
}
```

> 🔑 Tanpa konversi tipe data, base case paling eksplisit (`< 10` = 1 digit), dan paling efisien karena langsung return angka terakhir tanpa rekursif tambahan.

---

### 2. Rekursif Matematis — Clean Code (English Naming) ⭐ `CLEAN & DESKRIPTIF`

```javascript
const totalDigitRekursif = (num) => {
  if (num < 10) return num;

  const lastDigit = num % 10;
  const remainingNum = Math.trunc(num / 10);

  return lastDigit + totalDigitRekursif(remainingNum);
};
```

> 🔑 Variabel `lastDigit` dan `remainingNum` membuat logika self-documenting. Ideal untuk codebase tim karena readable tanpa komentar.

---

### 3. Tail Recursion (Akumulator) `OPTIMAL MEMORY`

```javascript
function totalDigitRecursive(number, total = 0) {
  if (number === 0) {
    return total;
  }

  return totalDigitRecursive(
    Math.floor(number / 10),
    total + (number % 10)
  );
}
```

> 🔑 Tidak ada unwinding — hasil langsung tersedia di base case. Cocok untuk angka sangat besar karena engine bisa mengoptimasi tail call.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 4. Rekursif Matematis (`=== 0`)

```javascript
const totalDigitRekursif = (angka) => {
  if (angka === 0) return 0;

  return angka % 10 + totalDigitRekursif(Math.floor(angka / 10));
};
```

> 🔑 Logika sama dengan V3, tapi base case `=== 0` menyebabkan satu langkah rekursif ekstra (memproses angka 0 terakhir yang sudah kosong).

---

### 5. String: Depan ke Belakang (Variabel Perantara)

```javascript
const totalDigitRekursif = (angka) => {
  const strAngka = String(angka);

  if (strAngka.length === 1) return Number(strAngka);

  const digitDepan = Number(strAngka[0]);
  const sisaDigit = Number(strAngka.slice(1));

  return digitDepan + totalDigitRekursif(sisaDigit);
};
```

> 🔑 Versi belajar — variabel perantara `digitDepan` dan `sisaDigit` membantu memahami alur potong-dan-jumlah secara visual.

---

### 6. String: Depan ke Belakang (One-Line Return)

```javascript
const totalDigitRekursif = (num) => {
  const strNum = String(num);

  if (strNum.length === 1) return Number(strNum);

  return Number(strNum[0]) + totalDigitRekursif(Number(strNum.slice(1)));
};
```

> 🔑 Refactor dari V5 — menghilangkan variabel perantara. Arah proses intuitif (depan → belakang), tapi banyak konversi Number ↔ String.

---

### 7. Iteratif `while` Loop

```javascript
const totalDigitRekursif = (angka) => {
  let total = 0;

  while (angka >= 10) {
    total += angka % 10;
    angka = Math.floor(angka / 10);
  }

  return total + angka;
};
```

> 🔑 Versi iteratif tanpa call stack tambahan. Logika `% 10` dan `Math.floor(/ 10)` sama dengan versi rekursif, tapi dikemas dalam loop.

---

### 8. Iteratif `for` Biasa

```javascript
const totalDigitRekursif = (angka) => {
  const str = angka.toString();
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    total += Number(str[i]);
  }

  return total;
};
```

> 🔑 Pendekatan string + index loop. Familiar untuk pemula, tapi butuh variabel index dan konversi string.

---

### 9. Iteratif `for...of` `PALING BERSIH (ITERATIF)`

```javascript
const totalDigitRekursif = (angka) => {
  let total = 0;

  for (const digit of angka.toString()) {
    total += Number(digit);
  }

  return total;
};
```

> 🔑 Paling ringkas di antara versi iteratif — tidak perlu index, langsung iterasi setiap karakter digit.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 10. String & Array dengan Index Parameter ⚠️

```javascript
function totalDigitRekursif(angka, index = [...angka.toString()].length - 1) {
  if (index < 0) return 0;

  return +[...angka.toString()][index] + totalDigitRekursif(angka, index - 1);
}
```

> 🔑 Solusi awal — berlebihan konversi (angka → string → array → angka) di **setiap level** rekursif. Tidak disarankan untuk production, tapi berguna untuk memahami spread operator dan unary `+`.

---

## ⚠️ GOTCHA CEPAT

### `Math.floor()` vs `Math.trunc()` untuk Pembagian

```javascript
// Untuk angka POSITIF — hasilnya sama
Math.floor(512 / 10);  // 51
Math.trunc(512 / 10);  // 51

// Untuk angka NEGATIF — hasilnya BERBEDA! ❌
Math.floor(-512 / 10); // -52  (menjauhi nol → salah!)
Math.trunc(-512 / 10); // -51  (menuju nol → benar)
```

> ⚠️ Jika ada kemungkinan input negatif, gunakan `Math.trunc()` bukan `Math.floor()`.

---

### Base Case `=== 0` vs `< 10`

```javascript
// === 0 → satu langkah rekursif EKSTRA
totalDigit(5);
// 5 → 5 % 10 = 5, floor(5/10) = 0 → panggil lagi → return 0
// Total: 2 panggilan

// < 10 → langsung return di digit terakhir
totalDigit(5);
// 5 < 10 → return 5
// Total: 1 panggilan ✅
```

> ⚠️ `< 10` lebih efisien — langsung return angka tanpa memanggil diri sendiri lagi.

---

### Teknik Inti: Extract & Drop Last Digit

```javascript
angka % 10;              // ambil digit terakhir  → 512 % 10 = 2
Math.floor(angka / 10);  // buang digit terakhir  → Math.floor(512 / 10) = 51
```

> 🔑 Dua operasi ini adalah fondasi semua versi rekursif matematis.

---

## 📊 QUICK COMPARISON

| # | Versi | Jenis | Konversi Tipe | Akumulator | Unwinding | Baris | Rekomendasi |
|---|-------|-------|---------------|------------|-----------|-------|-------------|
| 1 | Matematis `< 10` | Rekursif | ✅ Tidak ada | ❌ | ✅ Ada | 3 | ⭐ **Best** |
| 2 | Matematis Clean Code | Rekursif | ✅ Tidak ada | ❌ | ✅ Ada | 5 | ⭐ Readable |
| 3 | Tail Recursion | Rekursif | ✅ Tidak ada | ✅ Ada | ❌ Tidak | 5 | ⭐ Optimal |
| 4 | Matematis `=== 0` | Rekursif | ✅ Tidak ada | ❌ | ✅ Ada | 3 | ✅ Bagus |
| 5 | String (Belajar) | Rekursif | ⚠️ Banyak | ❌ | ✅ Ada | 6 | 📖 Belajar |
| 6 | String (Clean) | Rekursif | ⚠️ Banyak | ❌ | ✅ Ada | 3 | 📖 Belajar |
| 7 | `while` loop | Iteratif | ✅ Tidak ada | ✅ Ada | ❌ Tidak | 6 | ✅ Bagus |
| 8 | `for` biasa | Iteratif | ⚠️ Ada | ✅ Ada | ❌ Tidak | 6 | ✅ Familiar |
| 9 | `for...of` | Iteratif | ⚠️ Ada | ✅ Ada | ❌ Tidak | 5 | ✅ Ringkas |
| 10 | String & Array | Rekursif | ⚠️ Banyak | ❌ | ✅ Ada | 3 | ⚠️ Avoid |

---

## 🧪 TEST CASES

```javascript
console.log(totalDigitRekursif(512));    // 8    → 5 + 1 + 2
console.log(totalDigitRekursif(1542));   // 12   → 1 + 5 + 4 + 2
console.log(totalDigitRekursif(5));      // 5    → single digit
console.log(totalDigitRekursif(21));     // 3    → 2 + 1
console.log(totalDigitRekursif(11111));  // 5    → 1 + 1 + 1 + 1 + 1
console.log(totalDigitRekursif(0));      // 0    → edge case
```

### Edge Cases

```javascript
console.log(totalDigitRekursif(0));      // 0    → ✅ Aman di semua versi
console.log(totalDigitRekursif(-512));   // 💥   → Crash — Math.floor menjauhi nol
console.log(totalDigitRekursif(5.7));    // ⚠️   → Tidak error, tapi hasil tidak sesuai
```

---

## 🔗 Navigation

- **📘 [← Kembali ke README](./README.md)**
- **📊 [Ringkasan Algoritma Semua Versi](./ringkasan-algoritma-semua-versi.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
