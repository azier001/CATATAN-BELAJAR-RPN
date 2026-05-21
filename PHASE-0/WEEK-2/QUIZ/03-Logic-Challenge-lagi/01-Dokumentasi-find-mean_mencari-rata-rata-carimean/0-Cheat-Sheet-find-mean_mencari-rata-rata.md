# 🔄 Cheat Sheet — cariMean (Mencari Rata-Rata Array)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Reduce — Concise & Modern ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const cariMean = (arr) => {
  const sum = arr.reduce((total, num) => total + num, 0);
  return Math.round(sum / arr.length);
};
```

> 🔑 Functional style, paling ringkas (4 baris). Standar industri untuk modern codebase.

---

### 2. Production Ready — Dengan Validasi Lengkap ⭐ `PRODUCTION & PUBLIC API`

```javascript
const cariMean = (numbers) => {
  if (!numbers) throw new Error('Input tidak boleh null/undefined');
  if (!Array.isArray(numbers)) throw new Error('Input harus berupa array');
  if (numbers.length === 0) throw new Error('Array tidak boleh kosong');

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number' || isNaN(numbers[i]) || !isFinite(numbers[i])) {
      throw new Error(`Element index ${i} bukan angka valid: ${numbers[i]}`);
    }
  }

  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return Math.round(sum / numbers.length);
};
```

> 🔑 Validasi input lengkap + error message jelas. Gunakan untuk public API, NPM package, atau enterprise code.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 1. For...of Loop — Imperative Klasik ⭐ `PALING INTUITIF`

```javascript
function cariMean(arr) {
  let sum = 0;

  for (const number of arr) {
    sum += number;
  }

  return Math.round(sum / arr.length);
}
```

> 🔑 Step-by-step paling mudah dipahami pemula. Cocok untuk tutorial dan mengajar.

---

### 2. Manual Count — Algorithm Thinking ⭐ `TERBAIK UNTUK UJIAN`

```javascript
const cariMean = (arr) => {
  let sum = 0;
  let count = 0;

  for (const number of arr) {
    sum += number;
    count++;
  }

  return Math.round(sum / count);
};
```

> 🔑 Tidak bergantung `.length` — hitung manual. Tunjukkan pemahaman algoritma dari nol. Pilihan terbaik untuk interview & ujian algoritma.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 1. One-Liner Reduce

```javascript
const cariMean = (arr) => Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
```

> 🔑 Ultra-ringkas tapi sulit dibaca. ⚠️ Tidak disarankan untuk production — readability rendah.

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ Math.floor vs ✅ Math.round
Math.floor(4.6);  // → 4 ❌ (selalu ke bawah)
Math.round(4.6);  // → 5 ✅ (ke terdekat: ≥0.5 ke atas, <0.5 ke bawah)
```

```javascript
// ❌ Tanpa initial value vs ✅ Dengan initial value
arr.reduce((t, n) => t + n);     // ❌ TypeError jika array kosong!
arr.reduce((t, n) => t + n, 0);  // ✅ Aman untuk semua kasus
```

```javascript
// ❌ Urutan operasi salah vs ✅ Benar
Math.round(sum) / arr.length;    // ❌ Bulatkan sum yg sudah integer — tidak ada efek
Math.round(sum / arr.length);    // ✅ Bagi dulu → hasil desimal → baru bulatkan
```

---

## 📊 QUICK COMPARISON

| Versi | Baris | Paradigm | Keunggulan Utama | Rekomendasi |
|---|---|---|---|---|
| **Reduce** | 4 | Functional | Concise, modern, tercepat | 🏆 Modern codebase |
| **For...of** | 7 | Imperative | Paling mudah dipahami | 📚 Tutorial & pemula |
| **Manual Count** | 9 | Imperative | Tunjukkan algorithm thinking | 🎓 Ujian & interview |
| **Production** | 25+ | Functional + Validation | Robust, error handling | 🏢 Public API & enterprise |
| **One-Liner** | 1 | Functional | Ultra-ringkas | ⚠️ Tidak disarankan |

---

## 🧪 TEST CASES

```javascript
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3]));        // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
```
