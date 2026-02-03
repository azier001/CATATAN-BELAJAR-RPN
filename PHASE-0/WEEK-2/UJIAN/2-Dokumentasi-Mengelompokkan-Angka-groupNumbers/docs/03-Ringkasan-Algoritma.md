# 📋 Part 3: Ringkasan Algoritma
```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 PART 3: RINGKASAN ALGORITMA 📋                          ║
║                                                                          ║
║              3 Versi Lengkap: For, Filter, Reduce                        ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)

---

## 🎯 Tujuan

- ✅ Ringkasan algoritma 3 versi
- ✅ Memahami trade-offs masing-masing
- ✅ Pilih versi sesuai kebutuhan

---

## 🔄 Versi 1: For Loop

> 💡 **Best for:** Pemula, clarity, debugging

### **Code:**
```javascript
function groupNumbers(numbers) {
  const evenNumbers = []
  const oddNumbers = []
  const multiplesOfThree = []

  for (const value of numbers) {
    if (value % 3 === 0) {
      multiplesOfThree.push(value)
    } else if (value % 2 === 0) {
      evenNumbers.push(value)
    } else {
      oddNumbers.push(value)
    }
  }

  return [evenNumbers, oddNumbers, multiplesOfThree]
}
```

### **Konsep Inti:**
```
Loop sekali, cek kondisi dengan prioritas, push ke array yang sesuai
```

### **Step-by-Step:**
1. Buat 3 array kosong
2. Loop setiap angka dengan for...of
3. Cek kondisi dengan prioritas:
   - **Pertama:** kelipatan 3 → push ke `multiplesOfThree`
   - **Kedua:** genap → push ke `evenNumbers`
   - **Ketiga:** sisanya (ganjil) → push ke `oddNumbers`
4. Return `[evenNumbers, oddNumbers, multiplesOfThree]`

### **Keywords:**
- 🔄 **for...of loop** - Iterasi array
- 🎯 **if-else if-else** - Prioritas kelipatan 3
- 📦 **push()** - Tambah elemen
- ⏱️ **O(n)** - Loop sekali

### **Kapan Pakai:**
- ✅ Pemula yang belajar
- ✅ Performance penting (array besar)
- ✅ Easy debugging
- ✅ Ujian/interview coding

---

## 🔍 Versi 2: Filter

> 💡 **Best for:** Modern codebase, readability, functional style

### **Code:**
```javascript
function groupNumbers(numbers) {
  const evenNumbers = numbers.filter(
    number => number % 2 === 0 && number % 3 !== 0
  )

  const oddNumbers = numbers.filter(
    number => number % 2 !== 0 && number % 3 !== 0
  )

  const multiplesOfThree = numbers.filter(
    number => number % 3 === 0
  )

  return [evenNumbers, oddNumbers, multiplesOfThree]
}
```

### **Konsep Inti:**
```
Filter array 3 kali dengan kondisi berbeda untuk setiap kelompok
```

### **Step-by-Step:**
1. Filter `evenNumbers`: `number % 2 === 0 && number % 3 !== 0`
2. Filter `oddNumbers`: `number % 2 !== 0 && number % 3 !== 0`
3. Filter `multiplesOfThree`: `number % 3 === 0`
4. Return `[evenNumbers, oddNumbers, multiplesOfThree]`

### **Keywords:**
- 🔍 **filter()** - Built-in array method
- 🎯 **Arrow function** - Callback singkat
- ⚡ **Logical AND (&&)** - Kombinasi kondisi
- ⏱️ **O(3n)** - Filter 3 kali

### **Kapan Pakai:**
- ✅ Functional programming style
- ✅ Readability lebih penting
- ✅ Array kecil-sedang
- ✅ Modern team/codebase

### **Jebakan:**
❌ **Lupa exclude kelipatan 3:**
```javascript
// ❌ SALAH
numbers.filter(n => n % 2 === 0)  // 6 masuk sini!

// ✅ BENAR
numbers.filter(n => n % 2 === 0 && n % 3 !== 0)
```

---

## ♻️ Versi 3: Reduce

> 💡 **Best for:** FP enthusiasts, compact code, O(n) performance

### **Code:**
```javascript
function groupNumbers(numbers) {
  const result = numbers.reduce(
    (groups, number) => {
      if (number % 3 === 0) {
        groups[2].push(number)
      } else if (number % 2 === 0) {
        groups[0].push(number)
      } else {
        groups[1].push(number)
      }
      return groups
    },
    [[], [], []]
  )

  return result
}
```

### **Konsep Inti:**
```
Gunakan reduce untuk akumulasi hasil ke 3 array sekaligus dalam 1 loop
```

### **Step-by-Step:**
1. Panggil `reduce()` dengan initial value `[[], [], []]`
2. Untuk setiap `number`:
   - Jika kelipatan 3 → push ke `groups[2]`
   - Jika genap → push ke `groups[0]`
   - Sisanya → push ke `groups[1]`
3. Return `groups`
4. `groups[0]` = evenNumbers, `groups[1]` = oddNumbers, `groups[2]` = multiplesOfThree

### **Keywords:**
- ♻️ **reduce()** - Akumulasi dengan callback
- 📊 **Accumulator** - `groups` = hasil sementara
- 🎯 **Index-based grouping** - groups[0], [1], [2]
- ⏱️ **O(n)** - Loop sekali

### **Kapan Pakai:**
- ✅ Mahir functional programming
- ✅ Performance + functional style
- ✅ Compact, elegant code
- ✅ Impress interviewer

### **Jebakan:**
❌ **Lupa return groups:**
```javascript
// ❌ SALAH
reduce((groups, number) => {
  if (...) groups[2].push(number)
  // Missing return!
}, [[], [], []])

// ✅ BENAR
reduce((groups, number) => {
  if (...) groups[2].push(number)
  return groups  // Harus return!
}, [[], [], []])
```

---

## 📊 Perbandingan Lengkap

| Aspek | For Loop | Filter | Reduce |
|-------|----------|--------|--------|
| **Lines** | 13 | 15 | 13 |
| **Complexity** | O(n) | O(3n) | O(n) |
| **Readability** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Learning Curve** | Easy | Medium | Hard |
| **Debugging** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Pemula** | ✅ | ✅ | ⚠️ |
| **Production** | ✅ | ✅ | ✅ |

---

## 🎯 Decision Tree
```
Apakah kamu pemula?
├─ YES → For Loop
└─ NO → Lanjut

Apakah tim familiar dengan FP?
├─ YES → Filter atau Reduce
└─ NO → For Loop

Apakah array sangat besar (>100k)?
├─ YES → For Loop atau Reduce
└─ NO → Filter OK

Apakah readability prioritas utama?
├─ YES → Filter
└─ NO → Reduce (compact)
```

---

## 💡 Mnemonic: "G-P-R"

Untuk mengingat struktur algoritma:
```
G = Grouping arrays (buat 3 array kosong)
P = Priority check (kelipatan 3 duluan)
R = Return array (urutan: even, odd, multiples)
```

---

## 🧪 Test Semua Versi
```javascript
// Test helper
const test = (fn, input, expected) => {
  const result = JSON.stringify(fn(input))
  const exp = JSON.stringify(expected)
  console.log(result === exp ? '✅' : '❌', result)
}

// Test cases
const testCases = [
  [[2, 4, 6], [[2, 4], [], [6]]],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9], [[2, 4, 8], [1, 5, 7], [3, 6, 9]]],
  [[100, 151, 122, 99, 111], [[100, 122], [151], [99, 111]]],
  [[], [[], [], []]]
]

// Test semua versi
console.log('For Loop:')
testCases.forEach(([input, expected]) => test(groupNumbersFor, input, expected))

console.log('\nFilter:')
testCases.forEach(([input, expected]) => test(groupNumbersFilter, input, expected))

console.log('\nReduce:')
testCases.forEach(([input, expected]) => test(groupNumbersReduce, input, expected))
```

---

## 🎓 Pseudocode (Ujian)

Jika hanya ingat konsep:
```
FUNCTION groupNumbers(numbers):
  
  // Buat 3 container
  CREATE evenNumbers = []
  CREATE oddNumbers = []
  CREATE multiplesOfThree = []
  
  // Loop setiap angka
  FOR EACH value IN numbers:
    IF value % 3 = 0:
      ADD value TO multiplesOfThree
    ELSE IF value % 2 = 0:
      ADD value TO evenNumbers
    ELSE:
      ADD value TO oddNumbers
  END FOR
  
  // Return urutan: even, odd, multiples
  RETURN [evenNumbers, oddNumbers, multiplesOfThree]
  
END FUNCTION
```

---

## 🔑 Key Takeaways

> **💡 Tidak Ada "Best" Solution**  
> Semua 3 versi valid - pilih sesuai konteks

> **💡 For Loop = Safest Choice**  
> Paling universal, easy to debug

> **💡 Filter = Most Readable**  
> Declarative, self-documenting

> **💡 Reduce = Most Compact**  
> Elegant tapi butuh FP knowledge

> **💡 Prioritas IF-ELSE IF**  
> Kelipatan 3 harus dicek duluan!

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📝 [← Kembali ke Part 2](02-Refactoring-Clean-Code.md)**
- **🏆 [Lanjut ke Part 4: Cheat Sheet →](04-Cheat-Sheet.md)**

---

<div align="center">

**Selesai! Part 4 untuk quick reference**

Made with ❤️ for learners

</div>
