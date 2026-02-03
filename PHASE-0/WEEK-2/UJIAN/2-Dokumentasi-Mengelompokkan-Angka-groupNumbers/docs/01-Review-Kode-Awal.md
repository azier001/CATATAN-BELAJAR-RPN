# 📚 Part 1: Review Kode Awal
```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📚 PART 1: REVIEW KODE AWAL 📚                             ║
║                                                                          ║
║                  Apakah Kode Sudah Benar?                                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)

---

## 🎯 Tujuan

- ✅ Review kode original
- ✅ Verifikasi logic dengan test cases
- ✅ Identifikasi area improvement

---

## 🔍 Kode Original
```javascript
function mengelompokkanAngka(arr) {
  const even = []
  const odd = []
  const multipleOfThree = []

  for (const number of arr) {
    if (number % 3 === 0) {
      multipleOfThree.push(number)
    } else if (number % 2 === 0) {
      even.push(number)
    } else {
      odd.push(number)
    }
  }

  return [even, odd, multipleOfThree]
}
```

---

## ✅ Verifikasi Logic

### **Test Case 1:**
```javascript
mengelompokkanAngka([2, 4, 6])
// Expected: [[2, 4], [], [6]]
// Actual: [[2, 4], [], [6]] ✅
```

**Analisis:**
- 2 → genap, bukan kelipatan 3 → masuk `even` ✅
- 4 → genap, bukan kelipatan 3 → masuk `even` ✅
- 6 → kelipatan 3 → masuk `multipleOfThree` ✅

### **Test Case 2:**
```javascript
mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])
// Expected: [[2, 4, 8], [1, 5, 7], [3, 6, 9]]
// Actual: [[2, 4, 8], [1, 5, 7], [3, 6, 9]] ✅
```

**Analisis:**
- Kelipatan 3: 3, 6, 9 ✅
- Genap (bukan kelipatan 3): 2, 4, 8 ✅
- Ganjil (bukan kelipatan 3): 1, 5, 7 ✅

### **Test Case 3:**
```javascript
mengelompokkanAngka([100, 151, 122, 99, 111])
// Expected: [[100, 122], [151], [99, 111]]
// Actual: [[100, 122], [151], [99, 111]] ✅
```

**Analisis:**
- 99 = 33×3 → kelipatan 3 ✅
- 111 = 37×3 → kelipatan 3 ✅
- 100, 122 → genap ✅
- 151 → ganjil ✅

### **Test Case 4:**
```javascript
mengelompokkanAngka([])
// Expected: [[], [], []]
// Actual: [[], [], []] ✅
```

---

## 📊 Hasil Review

| Aspek | Status | Keterangan |
|-------|--------|------------|
| **Logic Correctness** | ✅ | Semua test cases pass |
| **Prioritas Kelipatan 3** | ✅ | IF statement urutan benar |
| **IF-ELSE IF Structure** | ✅ | Angka hanya masuk 1 grup |
| **Edge Cases** | ✅ | Handle array kosong |

---

## 💡 Yang Sudah Benar

**1. Prioritas IF Statement**
```javascript
if (number % 3 === 0) {
  // Dicek duluan ✅
} else if (number % 2 === 0) {
  // Dicek kedua ✅
}
```

**2. IF-ELSE IF (Bukan IF Semua)**
```javascript
// ✅ Struktur ini benar
if (...) { }
else if (...) { }
else { }

// ❌ Kalau pakai ini, angka bisa masuk 2 grup
if (...) { }
if (...) { }
```

**3. Modulo Operator**
```javascript
number % 3 === 0  // Cek kelipatan 3 ✅
number % 2 === 0  // Cek genap ✅
```

---

## 🔧 Area Improvement

Meski logic **sudah benar**, ada beberapa improvement untuk **clean code**:

### **1. Naming Convention**

**Current:**
```javascript
function mengelompokkanAngka(arr) {  // Bahasa Indonesia
  const even = []                     // Singkat tapi OK
  const multipleOfThree = []          // Singular
}
```

**Potential Improvement:**
- Function name → English
- Parameter name → lebih descriptive
- Variable consistency → plural form

### **2. Variable Naming**

**Current:**
```javascript
const even = []
const odd = []
const multipleOfThree = []  // Singular
```

**Potential Improvement:**
```javascript
const evenNumbers = []
const oddNumbers = []
const multiplesOfThree = []  // Plural (konsisten)
```

---

## 🎯 Kesimpulan

**Logic: ✅ CORRECT**
- Semua test cases pass
- Prioritas kelipatan 3 sudah benar
- IF-ELSE IF structure tepat

**Next Step:**
- Refactor untuk clean code
- Explore alternatif implementasi

---

## 💭 Pertanyaan Refleksi

<details>
<summary><strong>❓ Kenapa pakai IF-ELSE IF, bukan IF semua?</strong></summary>

Karena **satu angka hanya boleh masuk satu grup**.

Kalau pakai IF semua:
```javascript
if (number % 3 === 0) multiplesOfThree.push(number)
if (number % 2 === 0) evenNumbers.push(number)
// 6 masuk ke 2 grup! ❌
```

Dengan IF-ELSE IF:
```javascript
if (number % 3 === 0) {
  multiplesOfThree.push(number)
} else if (number % 2 === 0) {
  evenNumbers.push(number)
}
// 6 hanya masuk 1 grup ✅
```

</details>

<details>
<summary><strong>❓ Kenapa cek kelipatan 3 duluan?</strong></summary>

Karena **prioritas tertinggi**. Berdasarkan soal:
- 6 (genap DAN kelipatan 3) → masuk kelipatan 3
- 9 (ganjil DAN kelipatan 3) → masuk kelipatan 3

Jadi kelipatan 3 harus dicek duluan sebelum genap/ganjil.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📝 [Lanjut ke Part 2: Refactoring Clean Code →](02-Refactoring-Clean-Code.md)**

---

<div align="center">

**Kode sudah benar! Mari refactor di Part 2**

Made with ❤️ for learners

</div>
