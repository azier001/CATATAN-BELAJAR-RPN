```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 PART 1: ANALISIS KODE ORIGINAL 📋                       ║
║                                                                          ║
║                  Evaluasi Kode & Identifikasi Area Improvement           ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📝 Kode | ✅ Benar | ⚠️ Improvement | 📊 Test | 💡 Takeaways |
|:-------:|:--------:|:--------------:|:-------:|:------------:|
| [Jump](#-kode-original) | [Jump](#-yang-sudah-benar) | [Jump](#️-area-improvement) | [Jump](#-test-results) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Evaluasi kode original terhadap kriteria soal
- ✅ Identifikasi yang sudah benar
- ✅ Identifikasi area improvement
- ✅ Memahami kenapa kode bisa lebih baik

---

## 📝 Kode Original

```javascript
//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  let angka = 1
  const minNumber = Math.min(angka1, angka2)

  for (let i = 1; i <= minNumber; i++) {
    if (angka1 % i === 0 && angka2 % i === 0) {
      angka = i
    }
  }

  return angka
}
```

---

## ✅ Yang Sudah Benar

### **1. Logika Algoritma**
- ✅ Loop dari 1 sampai angka terkecil
- ✅ Cek apakah `i` membagi habis kedua angka
- ✅ Simpan pembagi terbesar
- ✅ **Hasilnya benar!**

### **2. Optimasi Dasar**
- ✅ Pakai `Math.min()` untuk batasi loop
- ✅ Update `angka` setiap ketemu pembagi

### **3. Fungsionalitas**
- ✅ Semua test case **PASS**
- ✅ Tidak ada bug

---

## ⚠️ Area Improvement

### **1. Naming Convention**

**Issue:** Bahasa Indonesia

```javascript
// ❌ Sekarang
function fpb(angka1, angka2) {
  let angka = 1
  // ...
}

// ✅ Improvement
function gcd(num1, num2) {
  let result = 1
  // ...
}
```

**Kenapa:**
- English = standar internasional
- Konsisten dengan codebase modern
- Best practice industri

---

### **2. Variable Naming**

**Issue:** `angka` kurang deskriptif

```javascript
// ❌ Sekarang
let angka = 1  // Angka apa?

// ✅ Improvement
let currentGcd = 1  // Jelas: GCD sementara
```

**Kenapa:**
- Self-documenting code
- Mudah dipahami orang lain

---

### **3. Kompleksitas Algoritma**

**Issue:** O(n) - bisa lebih cepat!

```javascript
// ❌ Sekarang - O(n)
for (let i = 1; i <= minNumber; i++) {
  // Loop banyak (contoh: minNumber = 1000000)
}

// ✅ Improvement - O(log n)
// Pakai Euclidean Algorithm
while (num2 > 0) {
  // Hanya beberapa iterasi!
}
```

**Kenapa:**
- Euclidean algorithm **jauh lebih cepat**
- Contoh: `gcd(1000000, 999999)`
  - Brute force: 999999 iterasi 🐌
  - Euclidean: ~40 iterasi ⚡

---

## 📊 Test Results

```javascript
const testCases = [
  { input: [12, 16], expected: 4 },
  { input: [50, 40], expected: 10 },
  { input: [22, 99], expected: 11 },
  { input: [24, 36], expected: 12 },
  { input: [17, 23], expected: 1 },
]

testCases.forEach(({ input, expected }, index) => {
  const result = fpb(input[0], input[1])
  const isPass = result === expected
  
  console.log(`Test #${index + 1}: ${isPass ? '✅ PASS' : '❌ FAIL'}`)
})
```

**Output:**
```
Test #1: ✅ PASS
Test #2: ✅ PASS
Test #3: ✅ PASS
Test #4: ✅ PASS
Test #5: ✅ PASS

Success: 5/5 = 100% ✅
```

**Kesimpulan:** Kode benar, tapi bisa lebih baik!

---

## 🎯 Kriteria Soal

| Kriteria | Status | Note |
|----------|--------|------|
| **Hasil benar** | ✅ | Semua test pass |
| **Naming convention** | ⚠️ | Pakai Bahasa Indonesia |
| **Algoritma efisien** | ⚠️ | Bisa pakai Euclidean |
| **Readability** | ✅ | Code cukup jelas |

---

## 📋 Improvement Checklist

**Tahap 1: Naming** (Part 2)
- [ ] Function name: `fpb` → `gcd`
- [ ] Parameters: `angka1, angka2` → `num1, num2`
- [ ] Variable: `angka` → `currentGcd`

**Tahap 2: Algoritma** (Part 3-4)
- [ ] Implement Euclidean (iteratif)
- [ ] Implement Euclidean (rekursif)
- [ ] Compare performance

---

## 📊 Metrics

| Metric | Current | Target |
|--------|---------|--------|
| **Naming** | Bahasa Indonesia | English |
| **Time Complexity** | O(n) | O(log n) |
| **Lines of Code** | 9 | 7-2 baris |
| **Test Pass** | 5/5 ✅ | 5/5 ✅ |

---

## 💡 Key Takeaways

> **Benar ≠ Optimal**  
> Kode bisa benar tapi belum optimal

> **Naming Matters**  
> English naming = standar industri

> **Algoritma Matters**  
> O(n) vs O(log n) = perbedaan drastis

> **Refactoring ≠ Bug Fixing**  
> Improve code yang sudah benar

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📝 [Lanjut ke Part 2: Refactoring Naming →](02-Refactoring-Naming.md)**

---

<div align="center">

**Siap refactor naming di Part 2?**

Made with ❤️ for learners

</div>
