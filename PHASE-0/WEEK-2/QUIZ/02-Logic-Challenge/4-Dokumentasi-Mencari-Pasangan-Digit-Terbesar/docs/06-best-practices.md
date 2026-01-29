# 🎯 Best Practices: Panduan Menulis Kode yang Baik

> Mari belajar cara menulis kode yang clean, readable, dan maintainable!

---

## 📋 Daftar Best Practices

1. **Naming Convention** - Cara penamaan yang baik
2. **Code Readability** - Kode yang mudah dibaca
3. **Performance Tips** - Optimasi performa
4. **Choosing Approach** - Memilih pendekatan yang tepat

---

## 📝 Naming Convention Guidelines

### Prinsip Utama: Nama Harus Deskriptif dan Meaningful

```javascript
// ❌ Bad: Tidak jelas maksudnya apa
let x = 10
let data = []
let temp = calculate()
let flag = true

// ✅ Good: Jelas dan deskriptif
let userAge = 10
let productList = []
let totalPrice = calculate()
let isLoggedIn = true
```

### Rules untuk Variable Names

#### 1. Gunakan camelCase untuk variables dan functions

```javascript
// ✅ Good
let firstName = "Budi"
let maxPairValue = 0
function calculateTotal() { }
function getUserData() { }

// ❌ Bad
let first_name = "Budi"  // snake_case (for Python)
let FirstName = "Budi"   // PascalCase (for classes)
let FIRSTNAME = "Budi"   // SCREAMING_CASE (for constants)
```

#### 2. Gunakan PascalCase untuk Classes

```javascript
// ✅ Good
class UserProfile { }
class ProductManager { }

// ❌ Bad
class userProfile { }
class product_manager { }
```

#### 3. Gunakan SCREAMING_CASE untuk Constants

```javascript
// ✅ Good
const MAX_USERS = 100
const API_KEY = "abc123"
const DEFAULT_TIMEOUT = 5000

// ❌ Bad
const maxUsers = 100
const apiKey = "abc123"
```

#### 4. Boolean Variables: Gunakan is/has/can prefix

```javascript
// ✅ Good
let isActive = true
let hasPermission = false
let canEdit = true
let shouldUpdate = false

// ❌ Bad
let active = true
let permission = false
let edit = true
```

#### 5. Arrays: Gunakan Plural Names

```javascript
// ✅ Good
let users = []
let products = []
let digitPairs = []

// ❌ Bad
let user = []
let product = []
let digitPair = []
```

#### 6. Functions: Gunakan Verbs

```javascript
// ✅ Good
function calculateTotal() { }
function fetchUserData() { }
function validateInput() { }
function convertToNumber() { }

// ❌ Bad
function total() { }
function userData() { }
function input() { }
function number() { }
```

### Naming untuk Challenge Kita

**❌ Bad Examples:**
```javascript
function f(n) {
  let s = String(n)
  let m = 0
  for (let i = 0; i < s.length - 1; i++) {
    let p = Number(s[i] + s[i + 1])
    if (p > m) m = p
  }
  return m
}
```

**✅ Good Examples:**
```javascript
function largestDigitPair(num) {
  const digits = String(num)
  let largest = 0
  
  for (let i = 0; i < digits.length - 1; i++) {
    const pair = Number(digits[i] + digits[i + 1])
    if (pair > largest) {
      largest = pair
    }
  }
  
  return largest
}
```

**Perbedaannya:**
- `f` → `largestDigitPair` (descriptive function name)
- `n` → `num` (clear parameter name)
- `s` → `digits` (meaningful variable)
- `m` → `largest` (intention-revealing)
- `p` → `pair` (semantic meaning)

---

## 📖 Code Readability

### 1. Spacing & Formatting

#### Gunakan Whitespace dengan Bijak

```javascript
// ❌ Bad: Terlalu cramped
function largestDigitPair(num){
const digits=String(num)
let largest=0
for(let i=0;ilargest){largest=pair}}
return largest}

// ✅ Good: Proper spacing
function largestDigitPair(num) {
  const digits = String(num)
  let largest = 0
  
  for (let i = 0; i < digits.length - 1; i++) {
    const pair = Number(digits[i] + digits[i + 1])
    
    if (pair > largest) {
      largest = pair
    }
  }
  
  return largest
}
```

#### Grouping Related Code

```javascript
// ✅ Good: Logical grouping dengan blank lines
function processData(input) {
  // Step 1: Validation
  if (!input) return null
  if (typeof input !== 'number') return null
  
  // Step 2: Conversion
  const digits = String(input)
  const pairs = []
  
  // Step 3: Processing
  for (let i = 0; i < digits.length - 1; i++) {
    pairs.push(Number(digits.slice(i, i + 2)))
  }
  
  // Step 4: Result
  return Math.max(...pairs)
}
```

### 2. Comments: When and How

#### Good Comments vs Bad Comments

```javascript
// ❌ Bad: Obvious comments (noise)
let largest = 0  // declare largest variable
for (let i = 0; i < digits.length - 1; i++) {  // loop through digits
  const pair = Number(digits[i] + digits[i + 1])  // get pair
  if (pair > largest) {  // if pair is larger
    largest = pair  // update largest
  }
}

// ✅ Good: Explain WHY, not WHAT
// Initialize with 0 since all digit pairs are positive
let largest = 0

// Stop before last digit to avoid accessing undefined
for (let i = 0; i < digits.length - 1; i++) {
  const pair = Number(digits[i] + digits[i + 1])
  
  if (pair > largest) {
    largest = pair
  }
}
```

#### When to Use Comments

**DO comment:**
- Complex algorithms
- Non-obvious decisions
- Workarounds or hacks
- TODO/FIXME items

```javascript
// Convert to string to easily access individual digits
const digits = String(num)

// TODO: Handle negative numbers
// FIXME: Optimization needed for very large numbers
```

**DON'T comment:**
- Self-explanatory code
- Obvious operations
- Redundant information

### 3. Function Length

#### Keep Functions Short and Focused

```javascript
// ❌ Bad: Function doing too much
function processUserDataAndSendEmail(user) {
  // Validate user
  if (!user.email) return false
  
  // Calculate age
  const age = new Date().getFullYear() - user.birthYear
  
  // Check permission
  if (age < 18) return false
  
  // Format data
  const formattedData = {
    name: user.name.toUpperCase(),
    email: user.email.toLowerCase()
  }
  
  // Send email
  sendEmail(formattedData)
  
  // Log activity
  logActivity('email_sent', user.id)
  
  return true
}

// ✅ Good: Separate concerns
function validateUser(user) {
  if (!user.email) return false
  const age = calculateAge(user.birthYear)
  return age >= 18
}

function formatUserData(user) {
  return {
    name: user.name.toUpperCase(),
    email: user.email.toLowerCase()
  }
}

function processUserDataAndSendEmail(user) {
  if (!validateUser(user)) return false
  
  const formattedData = formatUserData(user)
  sendEmail(formattedData)
  logActivity('email_sent', user.id)
  
  return true
}
```

### 4. Single Responsibility Principle

```javascript
// ❌ Bad: Function doing multiple things
function largestDigitPairAndSum(num) {
  const digits = String(num)
  let largest = 0
  let sum = 0
  
  for (let i = 0; i < digits.length - 1; i++) {
    const pair = Number(digits[i] + digits[i + 1])
    if (pair > largest) largest = pair
    sum += pair
  }
  
  return { largest, sum }
}

// ✅ Good: Separate functions
function largestDigitPair(num) {
  const digits = String(num)
  let largest = 0
  
  for (let i = 0; i < digits.length - 1; i++) {
    const pair = Number(digits[i] + digits[i + 1])
    if (pair > largest) {
      largest = pair
    }
  }
  
  return largest
}

function sumDigitPairs(num) {
  const digits = String(num)
  let sum = 0
  
  for (let i = 0; i < digits.length - 1; i++) {
    const pair = Number(digits[i] + digits[i + 1])
    sum += pair
  }
  
  return sum
}
```

---

## ⚡ Performance Tips

### 1. Avoid Premature Optimization

**Prinsip penting:**
> "Premature optimization is the root of all evil" - Donald Knuth

```javascript
// ✅ Start with readable code
function largestDigitPair(num) {
  const digits = String(num)
  let largest = 0
  
  for (let i = 0; i < digits.length - 1; i++) {
    const pair = Number(digits[i] + digits[i + 1])
    if (pair > largest) {
      largest = pair
    }
  }
  
  return largest
}

// ⚠️ Only optimize if proven bottleneck
// (Usually this is fast enough!)
```

### 2. Choose Right Data Structures

```javascript
// ❌ Inefficient: Create unnecessary array
function largestDigitPair(num) {
  const digits = String(num)
  const pairs = []
  
  for (let i = 0; i < digits.length - 1; i++) {
    pairs.push(Number(digits[i] + digits[i + 1]))
  }
  
  return Math.max(...pairs)  // Extra memory + extra pass
}

// ✅ Efficient: Track max directly
function largestDigitPair(num) {
  const digits = String(num)
  let largest = 0
  
  for (let i = 0; i < digits.length - 1; i++) {
    const pair = Number(digits[i] + digits[i + 1])
    largest = Math.max(largest, pair)
  }
  
  return largest  // One pass, minimal memory
}
```

### 3. Avoid Repeated Calculations

```javascript
// ❌ Bad: Recalculating same value
for (let i = 0; i < arr.length; i++) {
  if (i < arr.length - 1) {  // arr.length calculated every iteration
    // ...
  }
}

// ✅ Good: Calculate once
const length = arr.length
for (let i = 0; i < length - 1; i++) {
  // ...
}

// ✅ Better: Use loop condition
for (let i = 0; i < arr.length - 1; i++) {
  // No need for if statement!
}
```

### 4. Early Exit When Possible

```javascript
// ❌ Bad: Continue processing unnecessarily
function largestDigitPair(num) {
  const digits = String(num)
  let largest = 0
  
  for (let i = 0; i < digits.length - 1; i++) {
    const pair = Number(digits[i] + digits[i + 1])
    if (pair > largest) {
      largest = pair
    }
  }
  
  return largest
}

// ✅ Good: Early exit if found maximum (99)
function largestDigitPair(num) {
  const digits = String(num)
  let largest = 0
  
  for (let i = 0; i < digits.length - 1; i++) {
    const pair = Number(digits[i] + digits[i + 1])
    
    if (pair > largest) {
      largest = pair
      
      // Early exit: Can't get larger than 99
      if (largest === 99) {
        break
      }
    }
  }
  
  return largest
}
```

### 5. Performance Benchmarking

**Cara yang benar untuk measure performance:**

```javascript
function benchmark(fn, iterations = 1000000) {
  const start = performance.now()
  
  for (let i = 0; i < iterations; i++) {
    fn(641573)
  }
  
  const end = performance.now()
  return end - start
}

// Test different approaches
const time1 = benchmark(largestDigitPairClassic)
const time2 = benchmark(largestDigitPairFunctional)
const time3 = benchmark(largestDigitPairHybrid)

console.log('Classic:', time1.toFixed(2), 'ms')
console.log('Functional:', time2.toFixed(2), 'ms')
console.log('Hybrid:', time3.toFixed(2), 'ms')
```

---

## 🎯 Choosing the Right Approach

### Decision Matrix

| Criteria | Classic For | Functional | Array Building | Hybrid Modern |
|----------|-------------|------------|----------------|---------------|
| **Readability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Maintainability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Beginner-Friendly** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Modern Style** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

### When to Use Each

#### Classic For Loop
```javascript
✅ Use when:
- Team has mixed skill levels
- Performance is critical
- Need early exit capability
- Debugging is priority

❌ Avoid when:
- Codebase is functional style
- Prefer concise code
```

#### Functional Programming
```javascript
✅ Use when:
- Codebase follows FP patterns
- Team is experienced
- Composability matters
- Immutability is required

❌ Avoid when:
- Team is beginners
- Performance is critical
- Need early exit
```

#### Array Building
```javascript
✅ Use when:
- Need intermediate data
- Multiple operations on same data
- Separation of concerns matters

❌ Avoid when:
- Memory is constrained
- Only need final result
- Performance is critical
```

#### Hybrid Modern (Recommended)
```javascript
✅ Use when:
- Want balance of all factors
- Modern codebase
- General purpose solution
- Team is intermediate+

❌ Avoid when:
- Team is complete beginners
- Need absolute fastest performance
```

---

## ✅ Best Practices Checklist

### Before Writing Code
- [ ] Understand the problem completely
- [ ] Think about edge cases
- [ ] Choose appropriate approach
- [ ] Plan variable names

### While Writing Code
- [ ] Use meaningful names
- [ ] Keep functions short
- [ ] Add comments for complex logic
- [ ] Use proper spacing
- [ ] Follow consistent style

### After Writing Code
- [ ] Test with multiple inputs
- [ ] Check edge cases
- [ ] Review for readability
- [ ] Remove unnecessary code
- [ ] Document if needed

### Code Review Questions
- [ ] Can someone else understand this easily?
- [ ] Are variable names clear?
- [ ] Is there repeated code that can be extracted?
- [ ] Are there obvious performance issues?
- [ ] Does it handle edge cases?

---

## 🎓 Key Principles Summary

### 1. Readability First
Code is read more than written. Prioritize clarity over cleverness.

### 2. Consistency Matters
Follow existing patterns in your codebase.

### 3. Simple is Better
Don't over-engineer. Start simple, add complexity only when needed.

### 4. Test Early, Test Often
Catch bugs early with frequent testing.

### 5. Optimize When Needed
Don't optimize prematurely. Measure first, then optimize.

---

## 🚀 Next Steps

Sekarang kamu sudah tahu best practices!

**Next:** Lihat perbandingan lengkap semua solusi di file berikutnya!

---

**Write code for humans first, computers second! 👨‍💻✨**
