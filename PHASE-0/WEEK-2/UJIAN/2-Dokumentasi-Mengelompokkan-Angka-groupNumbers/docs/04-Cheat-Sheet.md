# 🏆 Part 4: Cheat Sheet & Quick Reference
```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🏆 PART 4: CHEAT SHEET & QUICK REFERENCE 🏆                  ║
║                                                                          ║
║              Quick Reference untuk Interview & Practice                  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)

---

## 🎯 Tujuan

- ✅ Quick reference semua versi
- ✅ Common pitfalls & solutions
- ✅ Interview tips
- ✅ Practice recommendations

---

## 📋 Quick Reference: 3 Versi

### **Versi 1: For Loop**
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
**When:** Pemula, debugging, performance critical

---

### **Versi 2: Filter**
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
**When:** Modern codebase, readability priority

---

### **Versi 3: Reduce**
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
**When:** FP enthusiasts, compact code

---

## ⚠️ Common Pitfalls

### **Pitfall #1: Pakai IF Semua**
```javascript
// ❌ SALAH - Angka bisa masuk 2 grup
if (number % 3 === 0) multiplesOfThree.push(number)
if (number % 2 === 0) evenNumbers.push(number)
// 6 masuk ke multiplesOfThree DAN evenNumbers!

// ✅ BENAR - IF-ELSE IF
if (number % 3 === 0) {
  multiplesOfThree.push(number)
} else if (number % 2 === 0) {
  evenNumbers.push(number)
}
```

**Ingat:** Satu angka = satu grup!

---

### **Pitfall #2: Lupa Exclude Kelipatan 3**
```javascript
// ❌ SALAH - Filter tanpa exclude
numbers.filter(n => n % 2 === 0)
// [2, 4, 6] - 6 seharusnya tidak masuk!

// ✅ BENAR - Filter dengan exclude
numbers.filter(n => n % 2 === 0 && n % 3 !== 0)
// [2, 4] ✅
```

**Ingat:** Kelipatan 3 harus di-exclude dari genap/ganjil!

---

### **Pitfall #3: Prioritas Salah**
```javascript
// ❌ SALAH - Cek genap duluan
if (number % 2 === 0) {
  evenNumbers.push(number)
} else if (number % 3 === 0) {
  multiplesOfThree.push(number)
}
// 6 masuk evenNumbers, harusnya multiplesOfThree!

// ✅ BENAR - Kelipatan 3 duluan
if (number % 3 === 0) {
  multiplesOfThree.push(number)
} else if (number % 2 === 0) {
  evenNumbers.push(number)
}
```

**Ingat:** Kelipatan 3 = prioritas tertinggi!

---

### **Pitfall #4: Lupa Return di Reduce**
```javascript
// ❌ SALAH
reduce((groups, number) => {
  if (...) groups[2].push(number)
  // Missing return!
}, [[], [], []])

// ✅ BENAR
reduce((groups, number) => {
  if (...) groups[2].push(number)
  return groups
}, [[], [], []])
```

**Ingat:** Reduce callback HARUS return accumulator!

---

## 🎓 Tips Interview

### **1. Start Simple**
```javascript
"Saya mulai dengan implementasi straightforward..."

// Tulis versi for loop dulu
function groupNumbers(numbers) {
  // ...
}
```

### **2. Verbalize Thinking**
```
"Ada 3 kategori yang perlu saya handle:
 1. Genap (tapi bukan kelipatan 3)
 2. Ganjil (tapi bukan kelipatan 3)
 3. Kelipatan 3 (prioritas tertinggi)
 
Saya akan pakai IF-ELSE IF untuk ensure
satu angka hanya masuk satu kategori..."
```

### **3. Mention Trade-offs**
```
"For loop paling straightforward dan efficient (O(n)),
 tapi filter method lebih readable meski O(3n).
 
 Untuk production, saya akan choose based on:
 - Team familiarity dengan FP
 - Array size (performance concern?)
 - Code review standards"
```

### **4. Test Your Code**
```javascript
// "Mari saya test dengan edge cases..."
console.log(groupNumbers([]))              // [[], [], []]
console.log(groupNumbers([6]))             // [[], [], [6]]
console.log(groupNumbers([2, 3, 4]))       // [[2, 4], [], [3]]
```

### **5. Discuss Alternatives**
```
"Alternatif lain adalah reduce method,
 yang juga O(n) tapi lebih compact.
 
 Atau bisa pakai object grouping kalau
 format output flexible..."
```

---

## 📊 Comparison Table

| Kriteria | For Loop | Filter | Reduce |
|----------|----------|--------|--------|
| **Complexity** | O(n) | O(3n) | O(n) |
| **Lines** | 13 | 15 | 13 |
| **Readability** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Pemula Friendly** | ✅ | ✅ | ⚠️ |
| **Debug Easy** | ✅ | ✅ | ⚠️ |
| **Performance** | Best | Good | Best |
| **Modern Style** | OK | Best | Good |

---

## 🎯 Mnemonic: "G-P-R"
```
G = Grouping (buat 3 array)
P = Priority (kelipatan 3 duluan)
R = Return (urutan: even, odd, multiples)
```

---

## 📝 Pseudocode Minimal
```
FOR each number:
  IF kelipatan 3 → grup 3
  ELSE IF genap → grup 1
  ELSE → grup 2
RETURN [grup1, grup2, grup3]
```

---

## 🧪 Test Cases Lengkap
```javascript
// Basic
groupNumbers([2, 4, 6])
// [[2, 4], [], [6]]

// Mixed
groupNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])
// [[2, 4, 8], [1, 5, 7], [3, 6, 9]]

// Large numbers
groupNumbers([100, 151, 122, 99, 111])
// [[100, 122], [151], [99, 111]]

// Edge: Empty
groupNumbers([])
// [[], [], []]

// Edge: Single
groupNumbers([6])
// [[], [], [6]]

// Edge: All same category
groupNumbers([3, 6, 9])
// [[], [], [3, 6, 9]]

// Edge: Negative
groupNumbers([-6, -4, -3])
// [[-4], [], [-6, -3]]
```

---

## 🚀 Next Steps

### **Practice:**
```
□ Implement semua 3 versi dari memory
□ Test dengan edge cases
□ Time yourself (target: <10 menit)
```

### **Variations:**
```
□ Return object instead: {even: [], odd: [], multiples: []}
□ Add validation: negative numbers?
□ Support multiple of N (generalize)
```

### **Related Problems:**
```
□ Partition array (2 groups)
□ Group anagrams
□ Categorize students by grade
```

---

## 💡 Pro Tips

**Tip #1: Comment Your Logic**
```javascript
// Good for complex conditions
if (value % 3 === 0) {  // Priority: multiples of 3
  multiplesOfThree.push(value)
} else if (value % 2 === 0) {  // Then: even numbers
  evenNumbers.push(value)
}
```

**Tip #2: Extract Constants**
```javascript
const DIVISOR_FOR_MULTIPLES = 3
const DIVISOR_FOR_EVEN = 2

if (value % DIVISOR_FOR_MULTIPLES === 0) {
  // More maintainable
}
```

**Tip #3: Helper Functions**
```javascript
const isMultipleOfThree = (n) => n % 3 === 0
const isEven = (n) => n % 2 === 0

// More readable
if (isMultipleOfThree(value)) {
  multiplesOfThree.push(value)
} else if (isEven(value)) {
  evenNumbers.push(value)
}
```

---

## 🎯 Final Checklist

Sebelum interview, pastikan kamu bisa:
```
□ Implement 3 versi dari memory
□ Explain prioritas kelipatan 3
□ Discuss trade-offs with confidence
□ Handle edge cases
□ Debug if ada error
□ Write clean, readable code
```

**Kalau semua ✅ → Siap interview!** 🎉

---

## 📚 Summary

**Journey Complete:**
```
Part 1: Review kode original ✅
  ↓
Part 2: Refactor ke clean code (2 versi) ✅
  ↓
Part 3: Explore 3 versi lengkap ✅
  ↓
Part 4: Quick reference (YOU ARE HERE!) ✅
```

**Core Principles:**

> **💡 Prioritas Kelipatan 3**  
> Selalu cek duluan sebelum genap/ganjil

> **💡 IF-ELSE IF Structure**  
> Satu angka hanya boleh masuk satu grup

> **💡 Multiple Valid Solutions**  
> Pilih sesuai konteks dan team

> **💡 Clean Code Matters**  
> English naming, descriptive variables

---

## 🎓 Congratulations!

**Selamat!** 🎉

Kamu telah menyelesaikan dokumentasi lengkap **Mengelompokkan Angka**!

**Kamu sekarang punya:**
- ✅ Understanding problem & logic
- ✅ 3 different implementations
- ✅ Clean code knowledge
- ✅ Interview confidence

**Next:** Practice, practice, practice! 🚀

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 3](03-Ringkasan-Algoritma.md)**
- **📚 [← Kembali ke Part 2](02-Refactoring-Clean-Code.md)**
- **📚 [← Kembali ke Part 1](01-Review-Kode-Awal.md)**

---

<div align="center">

## 🎉 Dokumentasi Complete!

**Terima kasih telah belajar bersama!**

Keep coding, keep learning! 🚀

---

Made with ❤️ for learners

**Happy Coding!**

</div>
