# 🔄 Cheat Sheet — Tentukan Deret Geometri (Geometric Sequence)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Descriptive Variables + Guard Clauses ⭐ `TEAM FRIENDLY` & `PRODUCTION READY`

```javascript
const isGeometricSequence = (numbers) => {
  const length = numbers.length;
  
  if (length < 2) return length === 1;
  if (numbers[0] === 0) return false;
  
  const ratio = numbers[1] / numbers[0];

  for (let index = 1; index < length; index++) {
    const previous = numbers[index - 1];
    const current = numbers[index];
    
    if (previous === 0 || current / previous !== ratio) {
      return false;
    }
  }

  return true;
};
```

> 🔑 Menggunakan penamaan variabel yang deskriptif dan dilengkapi dengan evaluasi *edge cases* (array kosong/nol). Sangat mudah dibaca dan tangguh di lingkungan *production*.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 2. Basic Imperative (For Loop) ⭐ `PALING INTUITIF`

```javascript
const tentukanDeretGeometri = (numbers) => {
  const ratio = numbers[1] / numbers[0];

  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] / numbers[i - 1] !== ratio) return false;
  }

  return true;
};
```

> 🔑 Fondasi dasar menggunakan loop dari indeks 2 dengan teknik `early return`. Fokus penuh pada inti algoritma deteksi pola tanpa *guard clauses* tambahan.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 3. Declarative `.every()` Method (Tanpa Memotong Array) ⭐ `MODERN JS`

```javascript
const tentukanDeretGeometri = (numbers) => {
  const ratio = numbers[1] / numbers[0];

  return numbers.every((currentNum, index) => {
    if (index === 0) return true; // Skip elemen pertama
    return currentNum / numbers[index - 1] === ratio;
  });
};
```

> 🔑 Cocok bagi penganut *functional programming* (FP). Lebih ekspresif, menggunakan parameter indeks bawaan dari iterasi untuk melewatkan elemen pertama.

### 4. Declarative `.every()` Method dengan `.slice(1)` ⭐ `FP ALTERNATIF`

```javascript
const tentukanDeretGeometri = (numbers) => {
  const ratio = numbers[1] / numbers[0];

  return numbers.slice(1).every((currentNum, index) => {
    return currentNum / numbers[index] === ratio;
  });
};
```

> 🔑 Membuat iterasi menjadi lebih natural karena tidak perlu melewatkan elemen pertama secara manual, namun ada alokasi array baru di memori akibat `.slice()`.

### 5. Extreme Concise (One-Liner) ⚠️ `TIDAK UNTUK PRODUCTION`

```javascript
const isGeo = n => n.length < 2 ? n.length === 1 : 
  n[0] !== 0 && n.every((v,i) => !i || (n[i-1] !== 0 && v/n[i-1] === n[1]/n[0]));
```

> 🔑 Kode yang sangat dikompresi menjadi satu baris. Sangat rentan terhadap *bug* dan sangat sulit dibaca atau di-debug.

---

## ⚠️ GOTCHA CEPAT

- **Operator:** Deret Geometri menggunakan rasio pembagian (`/`), bukan deret aritmatika yang menggunakan selisih (`-`).
- **Loop Boundary:** Pastikan iterasi mencapai elemen terakhir: gunakan `i < numbers.length`, jangan tertukar dengan `i < numbers.length - 1` kecuali kamu sedang mengecek angka di depan (`i+1`).
- **Division by Zero:** Dalam produksi, pastikan mengevaluasi nilai penyebut (contoh `numbers[i-1] === 0`) sebelum melakukan pembagian untuk mencegah *crash*.
- **Guard Clause Order:** Jika mengecek *edge cases*, selalu validasi eksistensi/panjang array terlebih dahulu sebelum mencoba membaca nilainya (seperti `numbers[0]`).
- **Floating Point:** Hati-hati dengan akurasi desimal. Pada *production level*, sebaiknya pakai toleransi dengan membandingkan nilai menggunakan `Math.abs(currentRatio - ratio) < Number.EPSILON`.

---

## 📊 QUICK COMPARISON

| Versi | Jumlah Baris | Keunggulan Utama | Label Rekomendasi |
|---|---|---|---|
| **Descriptive Variables + Guard** | 18 | Sangat tangguh dan jelas (*production ready*) | `🏆 BEST PRACTICE` |
| **Basic Imperative (For Loop)** | 8 | Alur logika terpusat, esensial, mudah di-debug | `🧠 FUNDAMENTAL` |
| **.every() (Tanpa Slice)** | 7 | Deklaratif yang sangat bersih dan hemat memori | `🧪 ALTERNATIF` |
| **.every() (Dengan Slice)** | 7 | Sangat intuitif karena elemen pertama langsung terpotong | `🧪 ALTERNATIF` |

---

## 🧪 TEST CASES

```javascript
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretGeometri([2, 6, 18])); // true
console.log(isGeometricSequence([])); // false
console.log(isGeometricSequence([5])); // true
```
