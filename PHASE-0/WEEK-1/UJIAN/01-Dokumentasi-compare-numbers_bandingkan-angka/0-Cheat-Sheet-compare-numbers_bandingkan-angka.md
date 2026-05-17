# 🔄 Cheat Sheet — Bandingkan Angka (Compare Numbers)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Guard Clause + Boolean Evaluation ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const bandingkanAngka = (num1, num2) => {
  if (num1 === num2) return -1

  return num1 < num2
}
```

> 🔑 Tangani edge case di awal dengan *guard clause*, lalu biarkan ekspresi `num1 < num2` menghasilkan boolean secara alami. Titik ideal antara readability dan keringkasan.

---

### 2. Ultimate One-Liner (Boolean Evaluation) 🏆 `PALING RINGKAS`

```javascript
const bandingkanAngka = (num1, num2) => num1 === num2 ? -1 : num1 < num2
```

> 🔑 Implicit return + ternary yang memanfaatkan sifat alami operator perbandingan (`<`) yang selalu menghasilkan `true`/`false`. Tidak perlu menulis `? true : false`.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. If-Else + Early Return `PALING INTUITIF`

```javascript
const bandingkanAngka = (angka1, angka2) => {
  if (angka2 > angka1) {
    return true
  } else if (angka1 === angka2) {
    return -1
  }

  return false
}
```

> 🔑 Setiap kondisi ditulis eksplisit. `return false` di akhir berfungsi sebagai fallback/default — lebih bersih daripada `else { return false }`.

---

### 4. If-Else Lengkap (Klasik)

```javascript
function bandingkanAngka(angka1, angka2) {
  if (angka2 > angka1) {
    return true
  } else if (angka1 > angka2) {
    return false
  } else {
    return -1
  }
}
```

> 🔑 Versi paling eksplisit dengan `function declaration`. Setiap cabang ditulis lengkap — sangat cocok untuk pemula yang baru belajar control flow.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 5. Nested Ternary (Verbose)

```javascript
const bandingkanAngka = (angka1, angka2) =>
  angka2 > angka1 ? true : angka1 === angka2 ? -1 : false
```

> 🔑 Ternary bersarang yang menulis `true` dan `false` secara eksplisit. Berfungsi, tapi **redundan** — lebih baik gunakan Versi 1 atau 2 yang memanfaatkan boolean evaluation.

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ == (loose equality) — BAHAYA!
4 == "4"    // true  (JavaScript auto-convert tipe!)

// ✅ === (strict equality) — AMAN
4 === "4"   // false (tipe berbeda = tidak sama)
```

```javascript
// ❌ Redundant ternary — JANGAN
return num1 < num2 ? true : false

// ✅ Langsung return ekspresi — CUKUP
return num1 < num2
// Operator perbandingan (<, >, <=, >=) SELALU menghasilkan boolean
```

```javascript
// ❌ Urutan pengecekan salah — edge case terlewat!
const bandingkanAngka = (a, b) => a < b ? true : false
// bandingkanAngka(4, 4) → false (seharusnya -1!)

// ✅ Cek kesamaan DULU sebelum perbandingan
const bandingkanAngka = (a, b) => a === b ? -1 : a < b
```

---

## 📊 QUICK COMPARISON

| Versi | Pendekatan | Baris | Readability | Rekomendasi |
|:-----:|------------|:-----:|:-----------:|-------------|
| 1 | Guard Clause + Boolean Eval | 4 | ⭐⭐⭐⭐⭐ | ⭐ Production Code |
| 2 | Ultimate One-Liner | 1 | ⭐⭐⭐ | 🏆 Code Golf / Skill |
| 3 | If-Else + Early Return | 7 | ⭐⭐⭐⭐⭐ | 📚 Belajar |
| 4 | If-Else Lengkap (Klasik) | 9 | ⭐⭐⭐⭐⭐ | 🔰 Pemula |
| 5 | Nested Ternary (Verbose) | 2 | ⭐⭐⭐ | 🧪 Eksperimental |

---

## 🧪 TEST CASES

```javascript
console.log(bandingkanAngka(5, 8));   // true
console.log(bandingkanAngka(5, 3));   // false
console.log(bandingkanAngka(4, 4));   // -1
console.log(bandingkanAngka(3, 3));   // -1
console.log(bandingkanAngka(17, 2));  // false
```
