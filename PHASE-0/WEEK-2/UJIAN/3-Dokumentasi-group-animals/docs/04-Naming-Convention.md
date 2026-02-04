# 📝 Part 4: Naming Convention

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            📝 PART 4: NAMING CONVENTION 📝                              ║
║                                                                          ║
║              Best Practice untuk Clean & Readable Code                   ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🎯 Overview | 🔤 Function | 🔤 Variables | 📊 Comparison | 💡 Takeaways |
|:-----------:|:-----------:|:------------:|:-------------:|:------------:|
| [Jump](#-overview) | [Jump](#-function-naming) | [Jump](#-variable-naming) | [Jump](#-beforeafter-comparison) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami **English naming conventions**
- ✅ Refactor function & variable names
- ✅ Menulis **self-documenting code**
- ✅ Tahu naming best practices

---

## 🔄 Overview

### **Kode Original (Bahasa Indonesia):**
```javascript
function groupAnimals(animals) { ... }
//       ^^^^^^^^^^^^ English sudah, tapi...
```

**Issue:** Kode original sudah pakai nama English yang bagus! ✅

Tapi mari kita review **best practices** yang diterapkan.

---

## 🔤 Function Naming

### **Review Nama Function:**
```javascript
function groupAnimals(animals) { ... }
//       ^^^^^^^^^^^^
```

**Analysis:**

✅ **Yang Sudah Benar:**
- **English** - International standard
- **camelCase** - JavaScript convention
- **Verb + Noun** - `group` (verb) + `Animals` (noun)
- **Descriptive** - Jelas apa yang dilakukan function

### **Best Practice Pattern:**

| Pattern | Example | Use Case |
|---------|---------|----------|
| **verb + Noun** | `groupAnimals()` | Action pada data |
| **get + Noun** | `getUsers()` | Retrieve data |
| **is/has + Adj** | `isValid()` | Boolean return |
| **calculate + Noun** | `calculateTotal()` | Computation |
| **create + Noun** | `createUser()` | Object creation |

**Nama function kita sudah perfect!** ✅

---

## 🔤 Variable Naming

### **Review Semua Variable:**

#### **1. Parameter: `animals`**
```javascript
function groupAnimals(animals) { ... }
//                    ^^^^^^^
```

✅ **Perfect!**
- **Plural form** - Indicates array/collection
- **Descriptive** - Jelas berisi animal names
- **No abbreviation** - `animals` bukan `anims`

---

#### **2. Loop Variable: `animal`**
```javascript
for (const animal of animals) { ... }
//         ^^^^^^
```

✅ **Perfect!**
- **Singular form** - Single item dari collection
- **Consistent** - Match dengan `animals` (plural)
- **Meaningful** - Bukan `item` atau `el`

---

#### **3. Result Array: `result`**
```javascript
const result = []
//    ^^^^^^
```

✅ **Good!**
- **Clear purpose** - Holds the result
- **Generic tapi OK** - Context jelas (return value)

**Alternative (opsional):**
- `groups` - More specific
- `groupedAnimals` - Most descriptive

---

#### **4. First Letter: `firstLetter`**
```javascript
const firstLetter = animal[0]
//    ^^^^^^^^^^^
```

✅ **Excellent!**
- **Self-documenting** - Jelas apa isinya
- **No abbreviation** - `firstLetter` bukan `fLetter` atau `fl`
- **Descriptive** - Better than `char` atau `letter`

---

#### **5. Found Group: `foundGroup`**
```javascript
let foundGroup = null
//  ^^^^^^^^^^
```

✅ **Excellent!**
- **State indicator** - "found" menunjukkan hasil pencarian
- **Meaningful** - Jelas bahwa ini grup yang ditemukan
- **Better than:** `group`, `g`, `temp`

---

#### **6. Group First Letter: `groupFirstLetter`**
```javascript
const groupFirstLetter = group[0][0]
//    ^^^^^^^^^^^^^^^^
```

✅ **Excellent!**
- **Composite name** - Jelas hierarchy: grup → first → letter
- **Self-documenting** - No need comment
- **Better than:** `gl`, `gLetter`, `char`

---

#### **7. Sort Parameters: `groupA`, `groupB`**
```javascript
result.sort((groupA, groupB) => { ... })
//           ^^^^^^  ^^^^^^
```

✅ **Standard convention!**
- **A/B pattern** - Common untuk comparison
- **Meaningful** - Bukan `a, b` generic
- **Consistent** - Both use same naming pattern

---

#### **8. Letter Variables: `letterA`, `letterB`**
```javascript
const letterA = groupA[0][0]
const letterB = groupB[0][0]
//    ^^^^^^^       ^^^^^^^
```

✅ **Perfect!**
- **Consistent** - Match dengan `groupA/B` pattern
- **Extracted** - Tidak inline `groupA[0][0]` di comparison
- **Clear** - Jelas apa yang di-compare

---

## 📊 Before/After Comparison

### **Kode Original sudah bagus, tapi mari compare dengan alternatif buruk:**

```javascript
// ❌ BAD NAMING
function grpAnm(arr) {
  const res = []
  
  for (const a of arr) {
    const fl = a[0]
    let fg = null
    
    for (const g of res) {
      const gfl = g[0][0]
      
      if (gfl === fl) {
        fg = g
        break
      }
    }
    
    if (fg !== null) {
      fg.push(a)
    } else {
      res.push([a])
    }
  }
  
  res.sort((x, y) => {
    const lx = x[0][0]
    const ly = y[0][0]
    return lx.localeCompare(ly)
  })
  
  return res
}

// ✅ GOOD NAMING (Kode kita)
function groupAnimals(animals) {
  const result = []

  for (const animal of animals) {
    const firstLetter = animal[0]
    let foundGroup = null

    for (const group of result) {
      const groupFirstLetter = group[0][0]

      if (groupFirstLetter === firstLetter) {
        foundGroup = group
        break
      }
    }

    if (foundGroup !== null) {
      foundGroup.push(animal)
    } else {
      result.push([animal])
    }
  }
  
  result.sort((groupA, groupB) => {
    const letterA = groupA[0][0]
    const letterB = groupB[0][0]
    return letterA.localeCompare(letterB)
  })

  return result
}
```

### **Readability Comparison:**

| Variable | Bad | Good | Why Good Better |
|----------|-----|------|-----------------|
| Function | `grpAnm()` | `groupAnimals()` | Full words, clear action |
| Parameter | `arr` | `animals` | Specific, not generic |
| Item | `a` | `animal` | Meaningful in context |
| First letter | `fl` | `firstLetter` | No abbreviation |
| Found group | `fg` | `foundGroup` | Shows state/purpose |
| Group letter | `gfl` | `groupFirstLetter` | Hierarchy clear |
| Result | `res` | `result` | Full word |
| Sort params | `x, y` | `groupA, groupB` | Meaningful |
| Sort letters | `lx, ly` | `letterA, letterB` | Consistent pattern |

---

## 🎯 Naming Best Practices

### **1. Use Full Words**
```javascript
// ❌ BAD
const arr = []
const fl = animal[0]
const fg = null

// ✅ GOOD
const result = []
const firstLetter = animal[0]
const foundGroup = null
```

---

### **2. Descriptive > Short**
```javascript
// ❌ BAD (too short)
const g = []

// ⚠️ OK (generic but understandable)
const group = []

// ✅ BEST (specific)
const foundGroup = []
```

---

### **3. Plural for Collections**
```javascript
// ❌ BAD
function groupAnimals(animal) {
  for (const item of animal) { ... }
}

// ✅ GOOD
function groupAnimals(animals) {
  for (const animal of animals) { ... }
}
```

---

### **4. Consistent Patterns**
```javascript
// ❌ BAD (inconsistent)
const foundGroup = result.find(...)
const idx = result.findIndex(...)

// ✅ GOOD (consistent)
const foundGroup = result.find(...)
const foundIndex = result.findIndex(...)
```

---

### **5. Avoid Abbreviations**
```javascript
// ❌ BAD
const anms = []
const grp = []
const res = []

// ✅ GOOD
const animals = []
const group = []
const result = []
```

**Exception:** Common abbreviations OK (`i`, `j` for loop counters)

---

### **6. CamelCase for JavaScript**
```javascript
// ❌ BAD (snake_case - Python style)
const first_letter = animal[0]
const found_group = null

// ❌ BAD (PascalCase - untuk Class)
const FirstLetter = animal[0]

// ✅ GOOD (camelCase - JavaScript standard)
const firstLetter = animal[0]
const foundGroup = null
```

---

## 💡 Self-Documenting Code

### **Code Should Explain Itself:**

```javascript
// ❌ NEEDS COMMENT
for (const g of res) {
  const gfl = g[0][0]  // Get first letter of first element
  ...
}

// ✅ SELF-DOCUMENTING
for (const group of result) {
  const groupFirstLetter = group[0][0]  // No comment needed!
  ...
}
```

**Principle:** Good names = code explains itself!

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa `animals` lebih baik dari `arr`?</strong></summary>

**Jawaban:**

`animals` **descriptive & specific** - langsung tahu isi array  
`arr` **generic** - bisa array apapun, butuh context

**Best practice:** Be specific, not generic.

</details>

<details>
<summary><strong>❓ Kapan OK pakai abbreviation?</strong></summary>

**Jawaban:**

**OK untuk:**
- `i, j, k` - Loop counters (universal convention)
- `e` - Event parameter (common in JS)
- `db` - Database (well-known)

**Hindari untuk:**
- Domain-specific names
- Business logic variables
- Anything yang bisa membingungkan

**Rule:** Jika ragu, tulis full word!

</details>

<details>
<summary><strong>❓ `groupA` vs `a` - bedanya apa?</strong></summary>

**Jawaban:**

**`groupA`:**
- Clear what's being compared (groups)
- Self-documenting
- Readable di sort function

**`a`:**
- Generic, butuh context
- Less readable
- OK untuk very simple cases

**For production code:** Always prefer descriptive names.

</details>

---

## ✅ Key Takeaways

**Tentang Naming:**

> **💡 Names are Communication**  
> Variable/function names adalah cara kamu berkomunikasi dengan future developers (termasuk diri sendiri!)

> **💡 Descriptive > Short**  
> `firstLetter` lebih baik dari `fl` meski lebih panjang.

> **💡 Consistency Matters**  
> `animals` (plural) → `animal` (singular) - consistent pattern.

> **💡 No Abbreviations**  
> Kecuali universally known (i, j, db, etc).

**Tentang Best Practices:**

> **💡 Use Full Words**  
> `result` bukan `res`, `group` bukan `grp`.

> **💡 camelCase for JS**  
> `foundGroup` bukan `found_group` atau `FoundGroup`.

> **💡 Self-Documenting Code**  
> Good names reduce need for comments.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 3: Ringkasan Algoritma](03-Ringkasan-Algoritma.md)**
- **📊 [Lanjut ke Part 5: Complexity Analysis →](05-Complexity-Analysis.md)**

---

<div align="center">

**Siap untuk complexity analysis di Part 5?**

Made with ❤️ for learners

</div>
