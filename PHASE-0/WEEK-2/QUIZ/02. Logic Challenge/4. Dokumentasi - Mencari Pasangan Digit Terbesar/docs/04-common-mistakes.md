# 🐛 Common Mistakes & Debugging

> Yuk kita breakdown kesalahan-kesalahan umum yang sering terjadi dan gimana cara fix-nya!

---

## 📋 Overview Mistakes

1. **Mistake #1:** String vs Number Comparison
2. **Mistake #2:** Array Out of Bounds (Index Overflow)
3. **Mistake #3:** Variable Name Typo
4. **Tips Debugging** untuk pemula

---

## ❌ Mistake #1: String vs Number Comparison

### 🔴 Bug Example

```javascript
const currentGroup = "73"  // String
const maxValue = 64        // Number

if (currentGroup > maxValue) {  // ❌ Membandingkan tipe berbeda!
  console.log("73 lebih besar dari 64")
}
```

### 🤔 Apa yang Terjadi?

JavaScript akan **convert number ke string** untuk perbandingan, lalu bandingkan secara **leksikografis**:

```javascript
"73" > "64"  // true ✅ (Kebetulan benar karena '7' > '6')
"9" > "73"   // true ❌ (SALAH! Karena '9' > '7')
"91" > "100" // true ❌ (SALAH! Karena '9' > '1')
```

### 💡 Penjelasan Detail

**Lexicographic comparison** membandingkan karakter per karakter dari kiri:

```javascript
"9" vs "73":
  '9' vs '7' → '9' > '7' → true ❌

"91" vs "100":
  '9' vs '1' → '9' > '1' → true ❌

"041" vs "73":
  '0' vs '7' → '0' < '7' → false ❌
```

Ini **sangat berbahaya** karena:
- ✅ Kadang hasilnya benar (kebetulan)
- ❌ Kadang hasilnya salah
- ⚠️ Susah di-detect karena tidak error!

### ✅ How to Fix

**Selalu konversi ke tipe yang sama sebelum compare:**

```javascript
// Opsi 1: Operator +
if (+currentGroup > maxValue) { // ✅

// Opsi 2: Number()
if (Number(currentGroup) > maxValue) { // ✅

// Opsi 3: parseInt()
if (parseInt(currentGroup) > maxValue) { // ✅
```

### 🛡️ How to Prevent

1. **Type checking saat development:**
```javascript
console.log(typeof currentGroup) // Check tipe data
```

2. **Use strict comparison (`===`) untuk equality:**
```javascript
"5" === 5   // false (berbeda tipe)
"5" == 5    // true (coercion)
```

3. **Convert early, compare often:**
```javascript
const pair = Number(digits[i] + digits[i + 1]) // Convert sekali di awal
if (pair > largest) { // Compare berkali-kali tanpa worry
```

---

## ❌ Mistake #2: Array Out of Bounds (Index Overflow)

### 🔴 Bug Example

```javascript
const str = "641573" // length = 6

for (let i = 0; i < str.length; i++) { // ❌ Loop sampai i = 5
  const pair = str[i] + str[i+1] // ❌ Saat i=5, akses str[6]!
  console.log(pair)
}

// Output:
// 64
// 41
// 15
// 57
// 73
// 3undefined ❌ BUG!
```

### 🤔 Apa yang Terjadi?

JavaScript **tidak error** saat akses array di luar batas, tapi return `undefined`:

```javascript
const str = "abc"
console.log(str[0])   // "a" ✅
console.log(str[5])   // undefined (tidak error!)
console.log(str[100]) // undefined (tidak error!)
```

Ini bikin bug yang **silent** dan susah di-detect!

### 💡 Penjelasan Detail

**Visualisasi masalahnya:**

```javascript
const str = "641573"
// Index:   0 1 2 3 4 5

// Saat i = 5 (iterasi terakhir):
str[5]    // "3" ✅
str[5+1]  // str[6] = undefined ❌
pair = "3" + undefined = "3undefined" ❌
```

**Kenapa ini berbahaya:**
- Code tidak crash (no error thrown)
- `"3undefined"` bisa di-convert ke `NaN`
- `NaN` dalam comparison selalu `false`
- Bug tersembunyi yang susah di-trace!

### ✅ How to Fix - Opsi 1: Check Before Access

```javascript
for (let i = 0; i < str.length; i++) {
  if (i + 1 < str.length) { // ✅ Cek dulu
    const pair = str[i] + str[i+1] // Aman!
  }
}
```

### ✅ How to Fix - Opsi 2: Fix Loop Condition (BETTER!)

```javascript
for (let i = 0; i < str.length - 1; i++) { // ✅ Stop sebelum akhir
  const pair = str[i] + str[i+1] // Selalu aman!
}
```

**Kenapa Opsi 2 lebih baik?**
- Lebih clean (tidak perlu nested if)
- Fix masalah di **root cause** (kondisi loop)
- Lebih efisien (tidak perlu check setiap iterasi)
- Lebih readable

### 🛡️ How to Prevent

1. **Visualize your loop bounds:**
```javascript
// String "abc" (length = 3)
// Index:  0   1   2
// Pairs:  ab  bc  ← Hanya 2 pairs!
// Loop:   i<2 (length - 1)
```

2. **Use `.slice()` instead of direct indexing:**
```javascript
const pair = str.slice(i, i + 2) // ✅ Aman, tidak return undefined
// slice akan return string pendek kalau out of bounds
```

3. **Test edge cases:**
```javascript
largestDigitPair(12)    // 2 digit
largestDigitPair(1)     // 1 digit (edge case!)
largestDigitPair(12345) // 5 digit
```

---

## ❌ Mistake #3: Variable Name Typo

### 🔴 Bug Example

```javascript
function largestDigitPair(num) {
  let maxPairValue = 0 // ← Deklarasi
  
  for (let i = 0; i < 10; i++) {
    maxValue = i // ❌ Typo! Variable berbeda!
  }
  
  return maxValue // ❌ Variable tidak dideklarasikan!
}

// Error: ReferenceError: maxValue is not defined
```

### 🤔 Apa yang Terjadi?

Variable `maxValue` **tidak pernah dideklarasikan**, tapi kita coba assign dan akses!

JavaScript akan throw `ReferenceError` karena variable tidak exist.

### 💡 Penjelasan Detail

**JavaScript variable scoping:**

```javascript
let myVar = 10        // ✅ Declared
console.log(myVar)    // ✅ Works: 10

console.log(myVarr)   // ❌ ReferenceError: myVarr is not defined
myVarr = 20           // ❌ Typo, variable baru (kalau tidak strict mode)
```

**Dalam strict mode (recommended):**
```javascript
'use strict'

let maxPairValue = 0
maxValue = 5 // ❌ ReferenceError immediately!
```

### ✅ How to Fix

**Be consistent dengan variable naming:**

```javascript
let maxPairValue = 0

for (let i = 0; i < 10; i++) {
  maxPairValue = i // ✅ Konsisten!
}

return maxPairValue // ✅ Konsisten!
```

### 🛡️ How to Prevent

1. **Use meaningful, distinct names:**
```javascript
// ❌ Bad: mirip-mirip
let maxValue
let maxVal
let maxvalue

// ✅ Good: jelas berbeda
let largestPair
let currentPair
let totalSum
```

2. **Use IDE with autocomplete:**
- VSCode, WebStorm, dll akan auto-suggest variable yang udah ada
- Typo akan keliatan (red underline)

3. **Enable ESLint:**
```javascript
// .eslintrc.js
{
  "rules": {
    "no-undef": "error" // Error kalau pakai variable yang tidak defined
  }
}
```

4. **Test your code early and often:**
```javascript
console.log(largestDigitPair(123)) // Test immediately!
```

---

## 🔍 Tips Debugging untuk Pemula

### 1. Console.log adalah teman terbaik kamu!

```javascript
function largestDigitPair(num) {
  const digits = String(num)
  console.log('1. digits:', digits) // Debug step 1
  
  let largest = 0
  console.log('2. initial largest:', largest) // Debug step 2
  
  for (let i = 0; i < digits.length - 1; i++) {
    const pair = Number(digits[i] + digits[i + 1])
    console.log(`3. i=${i}, pair=${pair}, largest=${largest}`) // Debug loop
    
    if (pair > largest) {
      largest = pair
      console.log(`4. Update! New largest: ${largest}`) // Debug update
    }
  }
  
  console.log('5. Final result:', largest) // Debug result
  return largest
}
```

### 2. Check tipe data dengan typeof

```javascript
const value = "123"
console.log(typeof value)        // "string"
console.log(typeof Number(value)) // "number"
console.log(typeof +value)        // "number"
```

### 3. Use debugger statement

```javascript
function largestDigitPair(num) {
  const digits = String(num)
  
  for (let i = 0; i < digits.length - 1; i++) {
    debugger // ← Browser akan pause di sini!
    const pair = Number(digits[i] + digits[i + 1])
    // Inspect variables di browser DevTools
  }
}
```

### 4. Test with simple cases first

```javascript
// Start simple
console.log(largestDigitPair(12))   // Expected: 12
console.log(largestDigitPair(99))   // Expected: 99

// Then complex
console.log(largestDigitPair(641573)) // Expected: 73
```

### 5. Isolate the problem

```javascript
// Test tiap bagian terpisah
const num = 641573
const digits = String(num)
console.log('digits:', digits) // ✅ "641573"

const pair1 = digits[0] + digits[1]
console.log('pair1:', pair1, typeof pair1) // "64" "string"

const pair1Num = Number(pair1)
console.log('pair1Num:', pair1Num, typeof pair1Num) // 64 "number"
```

### 6. Read error messages carefully

```javascript
// Error: ReferenceError: maxValue is not defined
//        ^^^^^^^^^^^^^^^  ^^^^^^^^
//        Tipe error       Variable yang bermasalah
```

**Common error types:**
- `ReferenceError` → Variable tidak dideklarasikan
- `TypeError` → Wrong type (e.g., calling non-function)
- `SyntaxError` → Typo dalam syntax
- `RangeError` → Array index out of bounds (kadang)

### 7. Use console.table untuk array

```javascript
const pairs = [64, 41, 15, 57, 73]
console.table(pairs) // Tampilan table yang rapi!
```

### 8. Comment out code untuk isolate bug

```javascript
function largestDigitPair(num) {
  const digits = String(num)
  let largest = 0
  
  // Comment dulu bagian yang suspicious
  /*
  for (let i = 0; i < digits.length - 1; i++) {
    const pair = Number(digits[i] + digits[i + 1])
    if (pair > largest) {
      largest = pair
    }
  }
  */
  
  return largest // Test dulu sampai sini
}
```

---

## 💡 Summary: Common Mistakes

| Mistake | Symptom | Fix |
|---------|---------|-----|
| **String vs Number** | Inconsistent comparison results | Convert to same type |
| **Out of Bounds** | "undefined" in output | Fix loop condition: `i < length - 1` |
| **Variable Typo** | ReferenceError | Use consistent naming |

---

## 🎯 Prevention Checklist

✅ **Always convert types before comparison**
✅ **Check loop bounds carefully**
✅ **Use consistent variable naming**
✅ **Test with multiple inputs**
✅ **Use console.log liberally**
✅ **Read error messages carefully**
✅ **Enable strict mode**
✅ **Use IDE with autocomplete**

---

## 🚀 Next Steps

Sekarang kamu sudah tahu common mistakes dan cara fix-nya!

**Next:** Deep dive ke konsep-konsep penting di file berikutnya!

---

**Debug with confidence! 🐛→✅**
