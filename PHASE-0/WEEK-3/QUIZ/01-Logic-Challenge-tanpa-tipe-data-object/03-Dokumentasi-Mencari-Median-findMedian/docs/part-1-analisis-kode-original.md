# 📋 Part 1 — Analisis Kode Original

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║           📋 PART 1 — ANALISIS KODE ORIGINAL 📋                 ║
║                                                                  ║
║           Evaluasi Kode & Identifikasi Area Improvement          ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-5%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📝 Kode | ✅ Yang Benar | ⚠️ Improvement | 📊 Test | 💡 Takeaways |
|:-------:|:------------:|:--------------:|:-------:|:------------:|
| [Jump](#-kode-original) | [Jump](#-yang-sudah-benar) | [Jump](#️-area-improvement) | [Jump](#-test-results) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Evaluasi kode original — apakah sudah sesuai kriteria
- ✅ Identifikasi yang sudah benar
- ✅ Identifikasi area improvement
- ✅ Memahami kenapa kode perlu diperbaiki

---

## 📝 Kode Original

```javascript
const cariMedian = (numbers) => {
  const sorted = numbers.sort((a, b) => a - b)
  const length = numbers.length
  let middle = 0

  if (length % 2 !== 0) {
    middle = (length + 1) / 2
    return numbers[middle - 1]
  } else {
    const middle1 = (length / 2)
    const middle2 = ((length / 2) + 1)

    const numberMiddle1 = numbers[middle1 - 1]
    const numberMiddle2 = numbers[middle2 - 1]

    return (numberMiddle1 + numberMiddle2) / 2
  }

  console.log('---')
}
```

---

## ✅ Yang Sudah Benar

### **1. Logika Algoritma**
- ✅ Sorting array sebelum mencari median
- ✅ Cek kondisi ganjil & genap
- ✅ Ganjil → ambil nilai tengah
- ✅ Genap → rata-rata dua nilai tengah
- ✅ **Hasilnya benar!**

### **2. Fungsionalitas**
- ✅ Semua 16 test case **PASS**
- ✅ Handle array tidak terurut
- ✅ Handle bilangan negatif & desimal

---

## ⚠️ Area Improvement

### **1. Mutasi Array Asli**

**Issue:** `.sort()` langsung mengubah array asli

```javascript
// ❌ Sekarang — array asli ikut berubah
const sorted = numbers.sort((a, b) => a - b)

const arr = [3, 1, 2]
cariMedian(arr)
console.log(arr) // [1, 2, 3] ← harusnya tetap [3, 1, 2]!

// ✅ Improvement — buat salinan dulu
const sorted = [...numbers].sort((a, b) => a - b)
```

**Kenapa penting:**
- Fungsi seharusnya tidak mengubah data input (*pure function*)
- Bisa menyebabkan bug yang sulit dilacak

---

### **2. Dead Code**

**Issue:** `console.log('---')` tidak akan pernah jalan

```javascript
// ❌ Unreachable code — ada setelah semua return
  return (numberMiddle1 + numberMiddle2) / 2
  }

  console.log('---') // ← tidak akan pernah dieksekusi
}
```

**Kenapa penting:**
- Membingungkan pembaca kode
- Menunjukkan kode kurang bersih

---

### **3. Variabel Tanpa Deklarasi**

**Issue:** `middle` di-assign tanpa `const` atau `let`

```javascript
// ❌ Tidak ada const/let — jadi global variable!
middle = (length + 1) / 2

// ✅ Improvement
const middle = (length + 1) / 2
```

**Kenapa penting:**
- Tanpa deklarasi = variabel global (berbahaya!)
- Akan error di strict mode

---

### **4. Naming Bahasa Indonesia**

**Issue:** Nama fungsi & variabel masih Bahasa Indonesia

```javascript
// ❌ Sekarang
const cariMedian = (numbers) => { ... }

// ✅ Improvement
const findMedian = (numbers) => { ... }
```

**Kenapa penting:**
- English = standar industri & internasional
- Konsisten dengan konvensi JavaScript modern

---

### **5. Variabel `middle` Redundan**

**Issue:** `let middle = 0` dideklarasikan di awal tapi tidak dipakai di blok `else`

```javascript
// ❌ Sekarang — middle hanya dipakai di blok if
let middle = 0         // deklarasi di atas
if (length % 2 !== 0) {
  middle = ...         // dipakai di sini
} else {
  const middle1 = ...  // blok else punya variabelnya sendiri
  const middle2 = ...
}

// ✅ Improvement — deklarasi langsung di dalam blok if
if (length % 2 !== 0) {
  const middle = ...
}
```

---

## 📊 Test Results

```javascript
const testCases = [
  // Basic (ganjil)
  { input: [[1, 2, 3, 4, 5]], expected: 3 },
  { input: [[3, 4, 7, 6, 10]], expected: 6 },
  { input: [[1, 3, 3]], expected: 3 },

  // Basic (genap)
  { input: [[1, 3, 4, 10, 12, 13]], expected: 7 },
  { input: [[7, 7, 8, 8]], expected: 7.5 },

  // Edge cases (1 elemen)
  { input: [[5]], expected: 5 },
  { input: [[0]], expected: 0 },

  // Array tidak terurut
  { input: [[10, 2, 5, 1, 7]], expected: 5 },
  { input: [[100, 50, 25, 75]], expected: 62.5 },

  // Duplikat banyak
  { input: [[2, 2, 2, 2, 2]], expected: 2 },
  { input: [[1, 2, 2, 2, 3, 4]], expected: 2 },

  // Bilangan negatif
  { input: [[-5, -1, -3]], expected: -3 },
  { input: [[-10, -5, 0, 5]], expected: -2.5 },

  // Campuran negatif & positif
  { input: [[-2, 0, 5, 10, 3]], expected: 3 },

  // Desimal
  { input: [[1.5, 2.5, 3.5]], expected: 2.5 },
  { input: [[1.1, 2.2, 3.3, 4.4]], expected: 2.75 },
]
```

```javascript
// Run tests (more informative)
testCases.forEach(({ input, expected }, index) => {
  const [arr] = input
  const result = cariMedian(arr)
  const isPass = result === expected

  if (isPass) {
    console.log(`Test #${index + 1}: ✅ PASS`)
  } else {
    console.log(`\n❌ FAIL - Test #${index + 1}`)
    console.log(`Input    : cariMedian([${arr}])`)
    console.log(`Expected : ${expected}`)
    console.log(`Got      : ${result}`)
    console.log(`Reason   : expected ${expected}, but got ${result}`)
    console.log(`-----------------------------`)
  }
})
```

**Output:**
```
Test #1:  ✅ PASS
Test #2:  ✅ PASS
Test #3:  ✅ PASS
Test #4:  ✅ PASS
Test #5:  ✅ PASS
Test #6:  ✅ PASS
Test #7:  ✅ PASS
Test #8:  ✅ PASS
Test #9:  ✅ PASS
Test #10: ✅ PASS
Test #11: ✅ PASS
Test #12: ✅ PASS
Test #13: ✅ PASS
Test #14: ✅ PASS
Test #15: ✅ PASS
Test #16: ✅ PASS

Success: 16/16 = 100% ✅
```

---

## 🎯 Kriteria Evaluasi

| Kriteria | Status | Catatan |
|----------|--------|---------|
| Hasil benar | ✅ | Semua 16 test PASS |
| Tidak mutasi array | ❌ | `.sort()` langsung ke array asli |
| Tidak ada dead code | ❌ | `console.log` setelah return |
| Deklarasi variabel | ❌ | `middle` tanpa `const` |
| Naming convention | ⚠️ | Masih Bahasa Indonesia |
| Variabel efisien | ⚠️ | `middle` redundan |

---

## 📋 Improvement Checklist

Yang akan diperbaiki di **Part 2**:
- [ ] Fix mutasi array → `[...numbers].sort()`
- [ ] Hapus dead code → `console.log('---')`
- [ ] Tambah `const` pada `middle`
- [ ] Rename ke English → `findMedian`
- [ ] Sederhanakan logika index → `Math.floor()`
- [ ] Tambah JSDoc comment

---

## 💡 Key Takeaways

> **Benar ≠ Clean**
> Kode bisa lulus semua test tapi masih punya masalah tersembunyi

> **Mutasi = Bahaya**
> Fungsi yang mengubah data input bisa menyebabkan bug tak terduga

> **Naming Matters**
> English naming adalah standar industri yang wajib diikuti

> **Refactoring ≠ Bug Fixing**
> Kita memperbaiki kode yang sudah benar agar lebih baik

---

## 🔗 Navigasi

- **[← README](../README.md)**
- **[→ Part 2: Proses Refactoring](part-2-refactoring.md)**

---

<div align="center">

**Siap lihat proses refactoring di Part 2?**

Made with ❤️ for learners

</div>
