# 🔄 Cheat Sheet — Minimum Multiplication Digits (Digit Perkalian Minimum)

> 📋 Ringkasan **semua versi kode** dari seluruh file dokumentasi. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Solusi Optimal Industri (O(√N), Memory Optimized) ⭐ `PALING DIREKOMENDASIKAN`

> 📂 Sumber: [04-insight-best-practice.md](./Dokumentasi-smallest-factor-combination-review/docs/04-insight-best-practice.md)

```javascript
/**
 * Mencari jumlah digit minimum dari penggabungan pasangan faktor sebuah angka
 * @param {number} targetNumber - Angka yang akan dicari faktornya
 * @returns {number} Jumlah digit paling sedikit dari pasangan faktor
 */
const digitPerkalianMinimum = (targetNumber) => {
  let minDigits = Infinity;

  // OPTIMASI 1: Caching nilai akar kuadrat
  const maxDivisor = Math.sqrt(targetNumber);

  for (let divisor = 1; divisor <= maxDivisor; divisor++) {
    if (targetNumber % divisor === 0) {
      const quotient = targetNumber / divisor;

      // OPTIMASI 2: Hitung digit TANPA menggabungkan string
      const totalDigits = String(divisor).length + String(quotient).length;

      // OPTIMASI 3: Math.min menggantikan blok if
      minDigits = Math.min(minDigits, totalDigits);
    }
  }

  return minDigits;
};
```

> 🔑 **Key Takeaway**: Loop berhenti di `Math.sqrt` (cache). Menghitung `length` terpisah jauh lebih efisien secara memori daripada menggabungkan (concatenate) string.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 2. Solusi Pertama — Loop Dasar O(N) ⭐ `LANGKAH PERTAMA`

> 📂 Sumber: [02-solusi-bertahap.md](./Dokumentasi-smallest-factor-combination-review/docs/02-solusi-bertahap.md)

```javascript
const digitPerkalianMinimum = (angka) => {
  // [CATATAN REKOR] Diisi dengan rekor setinggi-tingginya di awal
  let minDigit = Infinity;

  // [LOOP UTAMA] Berjalan dari 1 hingga angka target (pakai <=, bukan <)
  for (let i = 1; i <= angka; i++) {

    // [CEK FAKTOR] Jika i membagi habis angka
    if (angka % i === 0) {

      // [GABUNG] Satukan pasangan faktor jadi string
      const factors = `${i}${angka / i}`;

      // [BANDINGKAN] Jika digit saat ini lebih sedikit dari rekor...
      if (factors.length < minDigit) {
        // [UPDATE REKOR] ...catat sebagai rekor minimum yang baru!
        minDigit = factors.length;
      }
    }
  }

  // [HASIL] Kembalikan rekor digit paling sedikit
  return minDigit;
};
```

> 🔑 **Key Takeaway**: Solusi pertama yang dibangun step-by-step. Bagus untuk melatih nalar dasar perulangan mencari faktor dari 1 hingga N. Belum dioptimasi — tujuannya **bekerja dan dipahami dulu**.

---

### 3. Clean Code — English Naming O(N)

> 📂 Sumber: [03-evolusi-dan-clean-code.md](./Dokumentasi-smallest-factor-combination-review/docs/03-evolusi-dan-clean-code.md) (V1)

```javascript
const digitPerkalianMinimum = (targetNumber) => {
  let minDigits = Infinity;

  for (let divisor = 1; divisor <= targetNumber; divisor++) {
    if (targetNumber % divisor === 0) {
      const factor1 = divisor;
      const factor2 = targetNumber / divisor;
      const combinedFactors = `${factor1}${factor2}`;

      if (combinedFactors.length < minDigits) {
        minDigits = combinedFactors.length;
      }
    }
  }

  return minDigits;
};
```

> 🔑 **Key Takeaway**: Versi clean code dari solusi pertama. Rumus `angka / i` diekstrak jadi variabel `factor1`/`factor2` agar kode "bercerita sendiri" (self-documenting). Masih O(N).

---

### 4. Optimasi √N — Math.sqrt di Kondisi Loop

> 📂 Sumber: [03-evolusi-dan-clean-code.md](./Dokumentasi-smallest-factor-combination-review/docs/03-evolusi-dan-clean-code.md) (V2)

```javascript
const digitPerkalianMinimum = (targetNumber) => {
  let minDigits = Infinity;

  // OPTIMASI: Batas perulangan dipotong hingga akar kuadrat saja
  for (let divisor = 1; divisor <= Math.sqrt(targetNumber); divisor++) {
    if (targetNumber % divisor === 0) {
      const factor1 = divisor;
      const factor2 = targetNumber / divisor;
      const combinedFactors = `${factor1}${factor2}`;

      if (combinedFactors.length < minDigits) {
        minDigits = combinedFactors.length;
      }
    }
  }

  return minDigits;
};
```

> 🔑 **Key Takeaway**: Hanya 1 perubahan dari V1 — ganti `divisor <= targetNumber` menjadi `divisor <= Math.sqrt(targetNumber)`. Performa naik dari O(N) ke O(√N). Input 1 juta: dari 1.000.000 iterasi → 1.000 iterasi.

---

### 5. For Loop Optimal — `i * i <= angka` (Tanpa Math.sqrt)

> 📂 Sumber: [00-Ringkasan-Algoritma.md](./00-Ringkasan-Algoritma.md) (V1)

```javascript
function digitPerkalianMinimum(angka) {
  let minDigitCount = Infinity

  for (let i = 1; i * i <= angka; i++) {
    if (angka % i === 0) {
      const complement = angka / i
      const digitCount = `${i}${complement}`.length

      if (digitCount < minDigitCount) {
        minDigitCount = digitCount
      }
    }
  }

  return minDigitCount
}
```

> 🔑 **Key Takeaway**: Pendekatan alternatif pemangkasan loop akar kuadrat tanpa memanggil `Math.sqrt()`. Perkalian integer `i * i` lebih cepat dari operasi akar kuadrat.

---

### 6. Best of Both Worlds — Naming Paling Deskriptif + Math.min

> 📂 Sumber: [00-Ringkasan-Algoritma.md](./00-Ringkasan-Algoritma.md) (V3)

```javascript
function getMinimumMultiplicationDigits(number) {
  let minDigitCount = Infinity

  for (let factor = 1; factor * factor <= number; factor++) {
    if (number % factor === 0) {
      const pairedFactor = number / factor
      const digitCount = `${factor}${pairedFactor}`.length

      minDigitCount = Math.min(minDigitCount, digitCount)
    }
  }

  return minDigitCount
}
```

> 🔑 **Key Takeaway**: Menggabungkan keunggulan for loop (mudah di-debug) dengan naming convention terbaik (`factor`/`pairedFactor`) dan `Math.min` yang lebih ringkas dari blok `if`.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 7. Functional Style (Deklaratif Method Chaining) ⚠️ `HINDARI DI PRODUCTION KECUALI PERLU`

> 📂 Sumber: [00-Ringkasan-Algoritma.md](./00-Ringkasan-Algoritma.md) (V2)

```javascript
function getMinimumMultiplicationDigits(number) {
  const squareRoot = Math.floor(Math.sqrt(number))

  return Array.from({ length: squareRoot }, (_, i) => i + 1)
    .filter(i => number % i === 0)
    .reduce((minDigitCount, i) => {
      const complement = number / i
      const digitCount = `${i}${complement}`.length

      return Math.min(minDigitCount, digitCount)
    }, Infinity)
}
```

> 🔑 **Key Takeaway**: Pendekatan fungsional yang terlihat elegan (deklaratif) tetapi boros memori karena harus menginisialisasi array dan melakukan iterasi berulang (`filter` dan `reduce`).

---

### 8. Array-Based Orisinal — Sebelum Mentoring ⚠️ `ADA BUG TERSEMBUNYI`

> 📂 Sumber: [05-insight-code-review.md](./Dokumentasi-smallest-factor-combination-review/docs/05-insight-code-review.md) (Kode Orisinal)

```javascript
function digitPerkalianMinimum(angka) {
  const result = [];

  for (let i = 1; i <= Math.round(angka / 2); i++) {
    if (angka % i === 0) {
      result.push([i, angka / i]);
    }
  }

  let min = Infinity;

  for (let i = 0; i < result.length / 2; i++) {
    const [first, second] = result[i];
    const formatted = `${first}${second}`;

    if (formatted.length < min) {
      min = formatted.length;
    }
  }

  return min;
}
```

> 🔑 **Key Takeaway**: Kode yang ditulis **sebelum mentoring**. Ada 3 celah: (1) `result.length / 2` bisa melewatkan elemen tengah, (2) array membengkak untuk input besar (O(N) space), (3) `angka / 2` jauh lebih lambat dari `Math.sqrt`.

---

### 9. Array-Based Refactored — Bug Diperbaiki ✅

> 📂 Sumber: [05-insight-code-review.md](./Dokumentasi-smallest-factor-combination-review/docs/05-insight-code-review.md) (Hasil Refactoring)

```javascript
function digitPerkalianMinimum(angka) {
  const result = [];

  // REFACTOR 1: Ganti angka / 2 → Math.sqrt
  //   Lebih cepat DAN otomatis mencegah duplikasi terbalik
  for (let i = 1; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      result.push([i, angka / i]);
    }
  }

  let min = Infinity;

  // REFACTOR 2: Hapus batas "/ 2" → semua data ter-cek
  // REFACTOR 3: Gunakan for...of → destructuring lebih bersih
  for (const [first, second] of result) {
    const formatted = `${first}${second}`;

    if (formatted.length < min) {
      min = formatted.length;
    }
  }

  return min;
}
```

> 🔑 **Key Takeaway**: Versi perbaikan yang menjaga gaya Array + Destructuring. 3 perubahan: (1) `angka / 2` → `Math.sqrt`, (2) hapus `length / 2`, (3) `for...of` + destructuring.

---

## ⚠️ GOTCHA CEPAT

**Menggabungkan String vs Menjumlahkan Length**
```javascript
// ❌ BOROS MEMORI:
// Engine harus membuat string baru "38" lalu menghitung panjangnya.
// Jika diulang ribuan kali di loop, ini akan jadi overhead memori / Garbage Collection melambat.
const digit = `${divisor}${quotient}`.length;

// ✅ HEMAT MEMORI:
// Langsung menjumlahkan panjang dua string terpisah. Tidak ada alokasi memori string baru dari gabungan variabel.
const digit = String(divisor).length + String(quotient).length;
```

**Batas Loop: `i < angka` vs `i <= angka`**
```javascript
// ❌ GAGAL untuk input = 1 (loop tidak pernah jalan)
for (let i = 1; i < angka; i++)

// ✅ BENAR — batas atas juga ikut diperiksa
for (let i = 1; i <= angka; i++)
```

**Inisialisasi Minimum: 0 vs Infinity**
```javascript
// ❌ SALAH — 0 selalu lebih kecil, minDigit tidak pernah terupdate!
let minDigit = 0

// ✅ BENAR — Infinity agar angka apapun pasti lebih kecil
let minDigit = Infinity
```

**Deklarasi minDigit: Di Dalam vs Di Luar Loop**
```javascript
// ❌ SALAH — minDigit ke-reset jadi Infinity setiap putaran!
for (let i = 1; i <= angka; i++) {
  let minDigit = Infinity;  // RESET terus!
}

// ✅ BENAR — minDigit bertahan di luar loop
let minDigit = Infinity;
for (let i = 1; i <= angka; i++) {
  // ...
}
```

---

## 📊 QUICK COMPARISON

| # | Versi | Loop / Batas | Pencarian Digit | Kompleksitas | Label |
|---|---|---|---|---|---|
| **1** | Best Practice Industri | `<= √N` (cached) | `.length + .length` | O(√N) | 🏆 Production |
| **2** | Solusi Pertama | `<= N` | Template literal concat | O(N) | 🧠 Langkah Pertama |
| **3** | Clean Code O(N) | `<= N` | Template literal concat | O(N) | 🧠 Self-Documenting |
| **4** | Optimasi √N | `<= Math.sqrt(N)` | Template literal concat | O(√N) | 🧠 Evolusi |
| **5** | `i * i <= N` | `i * i <= N` | Template literal concat | O(√N) | 🧠 Tanpa Built-in |
| **6** | Best of Both Worlds | `factor * factor <= N` | Template literal concat | O(√N) | 🧠 Naming Terbaik |
| **7** | Functional Style | `.filter().reduce()` | Template literal concat | O(√N) | 🧪 Deklaratif |
| **8** | Array Orisinal | `<= angka / 2` | Template literal concat | O(N) | ⚠️ Ada Bug |
| **9** | Array Refactored | `<= Math.sqrt(N)` | Template literal concat | O(√N) | ✅ Bug Fixed |

---

## 🧪 TEST CASES

```javascript
const testCases = [
  // Edge cases
  { input: 1,   expected: 2, desc: "1 → 1×1 = '11' = 2 digits" },
  { input: 2,   expected: 2, desc: "2 → 1×2 = '12' = 2 digits" },

  // Small numbers
  { input: 4,   expected: 2, desc: "4 → 2×2 = '22' = 2 digits" },
  { input: 6,   expected: 2, desc: "6 → 2×3 = '23' = 2 digits" },

  // Contoh soal
  { input: 24,  expected: 2, desc: "24 → 3×8 or 4×6 = 2 digits" },
  { input: 90,  expected: 3, desc: "90 → 9×10 = '910' = 3 digits" },
  { input: 20,  expected: 2, desc: "20 → 4×5 = '45' = 2 digits" },
  { input: 179, expected: 4, desc: "179 is prime → 1×179 = '1179' = 4 digits" },

  // Angka lebih besar
  { input: 100, expected: 3, desc: "100 → 4×25 = '425' = 3 digits" },
  { input: 81,  expected: 2, desc: "81 → 9×9 = '99' = 2 digits" },
  { input: 144, expected: 3, desc: "144 → 9×16 = '916' = 3 digits" },
]

// Run tests
testCases.forEach(({ input, expected, desc }, index) => {
  const result = getMinimumMultiplicationDigits(input)
  const status = result === expected ? "✅ PASS" : "❌ FAIL"

  console.log(
    `Test Case #${index + 1}: ${status} - ${desc} | getMinimumMultiplicationDigits(${input}) = ${result}`
  )

  if (status === "❌ FAIL") {
    console.log("Input   :", input)
    console.log("Expected:", expected)
    console.log("Result  :", result)
  }
})
```
