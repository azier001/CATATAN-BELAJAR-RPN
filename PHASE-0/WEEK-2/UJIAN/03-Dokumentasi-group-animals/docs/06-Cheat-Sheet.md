# 🏆 Part 6: Cheat Sheet

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🏆 PART 6: CHEAT SHEET 🏆                                    ║
║                                                                          ║
║              Quick Reference & Interview Guide                           ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)

---

## 🧭 Quick Jump

| 📋 Ringkasan | ⚠️ Pitfalls | 🎓 Interview | 🚀 Next Steps |
|:------------:|:-----------:|:------------:|:-------------:|
| [Jump](#-ringkasan-cepat) | [Jump](#️-common-pitfalls) | [Jump](#-tips-interview) | [Jump](#-next-steps) |

---

## 🎯 Tujuan

Quick reference untuk:
- ✅ Mengingat algoritma dengan cepat
- ✅ Menghindari common pitfalls
- ✅ Persiapan interview
- ✅ Practice lebih lanjut

---

## 📋 Ringkasan Cepat

### **Algoritma (3 Versi):**

**Versi 1: For Loop Manual**
```javascript
const result = []
for (const animal of animals) {
  let foundGroup = null
  for (const group of result) {
    if (group[0][0] === animal[0]) {
      foundGroup = group
      break
    }
  }
  foundGroup ? foundGroup.push(animal) : result.push([animal])
}
result.sort((a, b) => a[0][0].localeCompare(b[0][0]))
```

**Versi 2: Array.find() ⭐ Recommended**
```javascript
const result = []
for (const animal of animals) {
  const foundGroup = result.find(g => g[0][0] === animal[0])
  foundGroup ? foundGroup.push(animal) : result.push([animal])
}
result.sort((a, b) => a[0][0].localeCompare(b[0][0]))
```

**Versi 3: Array.findIndex()**
```javascript
const result = []
for (const animal of animals) {
  const idx = result.findIndex(g => g[0][0] === animal[0])
  idx !== -1 ? result[idx].push(animal) : result.push([animal])
}
result.sort((a, b) => a[0][0].localeCompare(b[0][0]))
```

---

## 🎯 Mnemonic: "G-F-P-S"

```
G = Get first letter
F = Find existing group
P = Push to group or create new
S = Sort groups alphabetically
```

---

## 📊 Quick Comparison

| Versi | Lines | Best For | Complexity |
|-------|-------|----------|------------|
| **For Loop** | 27 | Pemula, debugging | O(n×k) |
| **find()** | 15 | Production ⭐ | O(n×k) |
| **findIndex()** | 18 | Need index | O(n×k) |

**Pick:** `find()` untuk most cases!

---

## ⚠️ Common Pitfalls

### **Pitfall #1: Sort di Awal**
```javascript
// ❌ SALAH - Urutan dalam grup jadi alphabetical
const sorted = [...animals].sort()
for (const animal of sorted) { ... }

// ✅ BENAR - Loop input original, sort grup di akhir
for (const animal of animals) { ... }
result.sort(...)
```

**Why wrong:** Requirement = urutan dalam grup = urutan input!

---

### **Pitfall #2: Lupa Sort Grup**
```javascript
// ❌ SALAH - Grup tidak terurut
return result

// ✅ BENAR - Sort grup alphabetically
result.sort((a, b) => a[0][0].localeCompare(b[0][0]))
return result
```

---

### **Pitfall #3: Pakai Object Helper**
```javascript
// ❌ SALAH - Melanggar requirement "harus array saja"
const groups = {}
for (const animal of animals) {
  const letter = animal[0]
  if (!groups[letter]) groups[letter] = []
  groups[letter].push(animal)
}

// ✅ BENAR - Pure array
const result = []
for (const animal of animals) {
  const foundGroup = result.find(...)
  ...
}
```

---

### **Pitfall #4: findIndex() tanpa Check**
```javascript
// ❌ SALAH - result[-1] jika tidak ketemu
const idx = result.findIndex(...)
result[idx].push(animal)

// ✅ BENAR - Check !== -1
if (idx !== -1) {
  result[idx].push(animal)
}
```

---

## 🎓 Tips Interview

### **1. Start Simple**
```javascript
// "Saya mulai dengan approach straightforward..."
const result = []
for (const animal of animals) {
  // Find group logic
}
```

### **2. Verbalize Thinking**
```
"Ada 2 approach utama:
 1. Sort dulu → tapi urutan dalam grup jadi salah
 2. Loop original → maintain urutan ✅
 
Saya pilih approach 2."
```

### **3. Mention Alternatives**
```
"Ini bisa diimprove dengan .find() untuk lebih clean,
atau pakai Object helper untuk O(n) strict - tapi itu
melanggar constraint 'pure array'."
```

### **4. Discuss Trade-offs**
```
"For loop manual vs .find():
- For loop: Lebih explicit, easy debug
- find(): Lebih concise, modern style
- Performance sama: O(n×k)

Untuk production, saya prefer .find() karena readability."
```

### **5. Test Your Code**
```javascript
// "Mari test dengan edge cases..."
console.log(groupAnimals([]))           // []
console.log(groupAnimals(['zebra']))    // [['zebra']]
console.log(groupAnimals(['a', 'b']))   // [['a'], ['b']]
```

---

## 📝 Pseudocode (Ujian)

Jika lupa detail:
```
FUNCTION groupAnimals(animals):
  
  CREATE result = []
  
  FOR EACH animal IN animals:
    GET firstLetter = animal[0]
    
    FIND group WHERE group[0][0] = firstLetter IN result
    
    IF group found:
      ADD animal TO group
    ELSE:
      CREATE newGroup = [animal]
      ADD newGroup TO result
  END FOR
  
  SORT result BY firstLetter of each group
  
  RETURN result
  
END FUNCTION
```

---

## 🔥 One-Liner (Show Off)

```javascript
// Extreme concise (NOT recommended!)
const groupAnimals = a => 
  [...a.reduce((r,v) => (
    (g = r.find(x => x[0][0] === v[0])) 
      ? g.push(v) 
      : r.push([v]), r
  ), [])]
  .sort((x,y) => x[0][0].localeCompare(y[0][0]))
```

**Note:** Jangan pakai di production! 😅

---

## 📚 Decision Tree

```
Mau pakai versi apa?
├─ Pemula / belajar
│  └─ For Loop Manual
│
├─ Production code
│  └─ Array.find() ⭐
│
└─ Butuh index untuk operasi lain
   └─ Array.findIndex()
```

---

## 🚀 Next Steps

### **Practice Variations:**

**1. Case Insensitive**
```javascript
// Group 'Apple' dan 'avocado' jadi satu grup
const firstLetter = animal[0].toLowerCase()
```

**2. Group by Last Letter**
```javascript
const lastLetter = animal[animal.length - 1]
```

**3. Group by Length**
```javascript
const length = animal.length
const foundGroup = result.find(g => g[0].length === length)
```

**4. Multiple Criteria**
```javascript
// Group by first letter AND length
const key = `${animal[0]}-${animal.length}`
```

---

### **Related Problems:**

**Similar Pattern:**
- Group numbers by digit sum
- Group strings by length
- Partition array by condition

**Next Level:**
- Two Sum (hash map)
- Group Anagrams (sorting + grouping)
- Longest Consecutive Sequence

---

## ✅ Final Checklist

Sebelum lanjut, pastikan kamu bisa:
```
□ Explain 3 versi implementasi
□ Tahu kenapa JANGAN sort di awal
□ Pilih .find() vs .findIndex() dengan reasoning
□ Implement dari memory tanpa referensi
□ Discuss time/space complexity
□ Avoid common pitfalls
□ Handle edge cases ([], single element)
```

**Jika semua ✅ → Kamu SIAP!** 🎉

---

## 💡 Key Takeaways (Ultimate)

**Core Algorithm:**

> **💡 Loop → Find → Push or Create → Sort**  
> Ini pattern dasar untuk grouping dengan pure array.

> **💡 JANGAN Sort di Awal**  
> Urutan dalam grup = urutan input!

> **💡 find() > findIndex()**  
> Untuk kasus ini, .find() lebih natural.

**Best Practices:**

> **💡 Descriptive Names**  
> `foundGroup` > `fg`, `firstLetter` > `fl`.

> **💡 Test Edge Cases**  
> Empty array, single element, all same letter.

> **💡 Know Trade-offs**  
> Pure array O(n×k) vs Object helper O(n).

---

## 🎓 Graduation Message

**Selamat!** 🎉

Kamu telah menyelesaikan **Complete Learning Guide** untuk Group Animals!

**Yang sudah kamu pelajari:**
- ✅ Identify kode overkill (Part 1)
- ✅ Refactor step-by-step (Part 2)
- ✅ Multiple implementasi (Part 3)
- ✅ Naming best practices (Part 4)
- ✅ Complexity analysis (Part 5)
- ✅ Quick reference (Part 6)

**Next:** Practice variations & tackle related problems! 🚀

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📊 [← Kembali ke Part 5: Complexity Analysis](05-Complexity-Analysis.md)**

---

<div align="center">

## 🎉 Dokumentasi Complete!

**Terima kasih telah belajar bersama!**

Keep coding, keep learning, keep growing! 🚀

---

Made with ❤️ for learners

**Happy Coding!**

</div>
