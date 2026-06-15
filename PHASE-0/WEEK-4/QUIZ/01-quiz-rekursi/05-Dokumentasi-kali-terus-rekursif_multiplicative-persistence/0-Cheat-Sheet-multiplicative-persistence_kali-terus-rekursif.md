# 🔄 Cheat Sheet — Multiplicative Persistence / Kali Terus Rekursif

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Reduce (ES6) ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const kaliTerusRekursif = (num) => {
  if (num < 10) return num;

  return kaliTerusRekursif(
    [...String(num)].reduce((product, digit) => product * digit, 1)
  );
};
```

> 🔑 Spread + reduce dalam satu ekspresi. Paling ringkas (4 baris), modern, dan ekspresif — cocok untuk production & code review.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 2. For-of Loop + Rekursif `PALING INTUITIF`

```javascript
const kaliTerusRekursif = (num) => {
  if (num < 10) return num;

  const numStr = String(num);
  let product = 1;

  for (const digit of numStr) {
    product *= digit;
  }

  return kaliTerusRekursif(product);
};
```

> 🔑 Konversi ke string lalu iterasi tiap digit pakai `for...of`. Paling mudah dibaca, cocok untuk pemula yang baru belajar rekursi.

---

### 3. For Loop (Classic Index) + Rekursif

```javascript
function kaliTerusRekursif(angka) {
  if (angka < 10) return angka;

  let str = angka.toString();
  let hasil = 1;

  for (let i = 0; i < str.length; i++) {
    hasil *= Number(str[i]);
  }

  return kaliTerusRekursif(hasil);
}
```

> 🔑 Sama seperti for-of tapi pakai index `i` klasik. Melatih kontrol manual atas iterasi — fondasi penting sebelum pakai syntactic sugar.

---

### 4. Pure Math (Modulo + Floor) + Rekursif

```javascript
const kaliTerusRekursif = (num) => {
  if (num < 10) return num;

  let product = 1;
  let currentNum = num;

  while (currentNum > 0) {
    let lastDigit = currentNum % 10;
    product *= lastDigit;
    currentNum = Math.floor(currentNum / 10);
  }

  return kaliTerusRekursif(product);
};
```

> 🔑 Tanpa konversi string sama sekali — murni matematik pakai `% 10` dan `Math.floor()`. Cocok untuk technical interview yang melarang string conversion.

---

### 5. While dalam While (Full Iteratif)

```javascript
const kaliTerusRekursif = (angka) => {
  while (angka >= 10) {
    let total = 1;

    while (angka >= 10) {
      total *= angka % 10;
      angka = Math.floor(angka / 10);
    }

    angka = total * angka;
  }

  return angka;
};
```

> 🔑 100% iteratif tanpa rekursi. While luar = babak persistence, while dalam = kalikan digit. Perhatikan `total * angka` di akhir — digit terakhir belum terproses di inner loop.

---

### 6. For dalam While (Full Iteratif)

```javascript
function kaliTerusRekursif(angka) {
  while (angka >= 10) {
    let str = angka.toString();
    let hasil = 1;

    for (let i = 0; i < str.length; i++) {
      hasil *= Number(str[i]);
    }

    angka = hasil;
  }

  return angka;
}
```

> 🔑 Versi iteratif yang paling readable. While = babak persistence, for = kalikan digit. Semua digit langsung terproses, jadi `angka = hasil` tanpa sisa.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 7. Rekursif + String Slice (Double Recursion)

```javascript
function kaliTerusRekursif(angka) {
  const digits = String(angka);

  if (digits.length === 1) return Number(digits);

  const result = Number(digits[0]) * kaliTerusRekursif(Number(digits.slice(1)));

  return kaliTerusRekursif(result);
}
```

> 🔑 Memecah digit pakai `slice(1)` lalu kalikan rekursif — hasilnya direkursi lagi. Double recursion per babak, lebih sulit di-trace. ⚠️ Tidak disarankan untuk production.

---

### 8. Rekursif + Matematik (Double Recursion)

```javascript
const kaliTerusRekursif = (angka) => {
  if (angka < 10) return angka;

  const result = (angka % 10) * kaliTerusRekursif(Math.floor(angka / 10));

  return kaliTerusRekursif(result);
};
```

> 🔑 Seperti V7 tapi pakai modulo bukan string. Tetap double recursion — satu untuk kalikan digit, satu lagi untuk babak berikutnya. ⚠️ Call stack bisa dalam untuk angka besar.

---

### 9. Tail Recursion + Accumulator

```javascript
const kaliTerusRekursif = (angka, total = 1) => {
  if (angka < 10) return angka * total;

  const result = kaliTerusRekursif(
    Math.floor(angka / 10),
    total * (angka % 10),
  );

  return kaliTerusRekursif(result);
};
```

> 🔑 Membawa `total` sebagai accumulator di parameter. Teknik tail recursion — secara teori bisa dioptimasi engine JS. ⚠️ Masih ada double call, jadi belum truly tail-optimized.

---

### 10. Helper Function (Full Recursion)

```javascript
function kaliTerusRekursif(num) {
  if (num < 10) return num;

  const kalikanDigit = (n) => {
    if (n === 0) return 1;
    return (n % 10) * kalikanDigit(Math.floor(n / 10));
  };

  const product = kalikanDigit(num);

  return kaliTerusRekursif(product);
}
```

> 🔑 Satu-satunya versi yang 100% rekursif — tidak ada loop sama sekali. Inner function `kalikanDigit()` mengalikan digit secara rekursif, outer function memanggil babak berikutnya. Cocok untuk latihan rekursi murni.

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ Base case pakai length — harus convert balik ke Number
if (digits.length === 1) return Number(digits);

// ✅ Base case pakai angka langsung — lebih clean
if (num < 10) return num;
```

```javascript
// ⚠️ While dalam While: digit terakhir BELUM terproses di inner loop
while (angka >= 10) {       // inner loop berhenti saat angka < 10
  total *= angka % 10;
  angka = Math.floor(angka / 10);
}
angka = total * angka;       // ← digit terakhir dikalikan di sini!

// ✅ For dalam While: SEMUA digit sudah terproses
for (let i = 0; i < str.length; i++) {
  hasil *= Number(str[i]);   // semua digit langsung masuk
}
angka = hasil;               // ← tidak ada sisa digit
```

```javascript
// ⚠️ Jika ada digit 0, hasil langsung 0
kaliTerusRekursif(654);  // 6 × 5 × 4 = 120 → 1 × 2 × 0 = 0 → return 0
```

---

## 📊 QUICK COMPARISON

| # | Versi | Baris | Rekursif | Loop | String | Matematik | Rekomendasi |
|:-:|:------|:-----:|:--------:|:----:|:------:|:---------:|:------------|
| 1 | Reduce (ES6) | 4 | ✅ | ❌ | ✅ | ❌ | ⭐ Best Practice |
| 2 | For-of + Rekursif | 8 | ✅ | ✅ | ✅ | ❌ | 🟢 Paling Intuitif |
| 3 | For (i) + Rekursif | 8 | ✅ | ✅ | ✅ | ❌ | 🟢 Klasik |
| 4 | Modulo + Rekursif | 9 | ✅ | ✅ | ❌ | ✅ | 🟢 Interview |
| 5 | While dalam While | 8 | ❌ | ✅ | ❌ | ✅ | 🟡 Full Iteratif |
| 6 | For dalam While | 8 | ❌ | ✅ | ✅ | ❌ | 🟡 Full Iteratif |
| 7 | String Slice | 5 | ✅✅ | ❌ | ✅ | ❌ | 🔴 Over-complex |
| 8 | Matematik Double | 4 | ✅✅ | ❌ | ❌ | ✅ | 🔴 Over-complex |
| 9 | Tail + Accumulator | 6 | ✅✅ | ❌ | ❌ | ✅ | 🟠 Advanced |
| 10 | Helper Function | 9 | ✅✅ | ❌ | ❌ | ✅ | 🟠 100% Rekursif |

> **Legenda:** ✅✅ = Double recursion per babak · ⭐ = Paling direkomendasikan

---

## 🧪 TEST CASES

```javascript
console.log(kaliTerusRekursif(66));   // 8   → 6×6=36 → 3×6=18 → 1×8=8
console.log(kaliTerusRekursif(3));    // 3   → sudah 1 digit
console.log(kaliTerusRekursif(24));   // 8   → 2×4=8
console.log(kaliTerusRekursif(654));  // 0   → 6×5×4=120 → 1×2×0=0
console.log(kaliTerusRekursif(1231)); // 6   → 1×2×3×1=6
```
