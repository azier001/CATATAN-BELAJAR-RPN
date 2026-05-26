# 📚 Part 4: Kode Final & Perbandingan dengan Original

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         ✅ PART 4: KODE FINAL & PERBANDINGAN DENGAN ORIGINAL ✅          ║
║                                                                          ║
║              Hasil Refactoring yang Bersih dan Optimal                   ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| ✅ Kode Final | 🧪 Test Cases | 📊 Perbandingan | 💡 Takeaways |
|:------------:|:-------------:|:---------------:|:------------:|
| [Jump](#-kode-final) | [Jump](#-test-cases) | [Jump](#-perbandingan-dengan-kode-original) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami kode final hasil refactoring secara lengkap
- ✅ Bisa membandingkan kode original vs kode final
- ✅ Memahami improvement yang dicapai

---

## ✅ Kode Final

```javascript
const shiftChar = (char) => {
  const charCode = char.charCodeAt(0)

  if (charCode >= 97 && charCode <= 122) {
    const code = (charCode - 97 + 1) % 26 + 97
    return String.fromCharCode(code)
  }

  return char
}

const shiftWord = (word) => word.split('').map(shiftChar).join('')
```

---

## 🧪 Test Cases

```javascript
const testCases = [
  // Basic
  { input: 'wow',        expected: 'xpx',        desc: 'Basic shifting - wow' },
  { input: 'developer',  expected: 'efwfmpqfs',  desc: 'Basic shifting - developer' },
  { input: 'javascript', expected: 'kbwbtdsjqu', desc: 'Basic shifting - javascript' },
  { input: 'keren',      expected: 'lfsfo',       desc: 'Basic shifting - keren' },
  { input: 'semangat',   expected: 'tfnbohbu',    desc: 'Basic shifting - semangat' },

  // Edge cases
  { input: 'z',   expected: 'a',   desc: 'Letter z wraps back to a' },
  { input: 'zzz', expected: 'aaa', desc: 'All letters z' },
  { input: '',    expected: '',    desc: 'Empty string' },

  // Single character
  { input: 'a', expected: 'b', desc: 'Single character a' },
  { input: 'y', expected: 'z', desc: 'Single character y' },

  // Non-huruf
  { input: 'hello world', expected: 'ifmmp xpsme', desc: 'Word with space' },
  { input: 'abc123',      expected: 'bcd123',      desc: 'Word with numbers' },
  { input: 'hi!',         expected: 'ij!',         desc: 'Word with punctuation' },
]

// Run tests
testCases.forEach(({ input, expected, desc }, index) => {
  const result = shiftWord(input)
  const status = result === expected ? '✅ PASS' : '❌ FAIL'

  console.log(`Test Case #${index + 1}: ${status} - ${desc} | shiftWord("${input}") = "${result}"`)

  if (status === '❌ FAIL') {
    console.log('  Expected:', expected)
    console.log('  Result  :', result)
  }
})
```

**Output:**
```
Test Case #1:  ✅ PASS - Basic shifting - wow        | shiftWord("wow") = "xpx"
Test Case #2:  ✅ PASS - Basic shifting - developer  | shiftWord("developer") = "efwfmpqfs"
Test Case #3:  ✅ PASS - Basic shifting - javascript | shiftWord("javascript") = "kbwbtdsjqu"
Test Case #4:  ✅ PASS - Basic shifting - keren      | shiftWord("keren") = "lfsfo"
Test Case #5:  ✅ PASS - Basic shifting - semangat   | shiftWord("semangat") = "tfnbohbu"
Test Case #6:  ✅ PASS - Letter z wraps back to a   | shiftWord("z") = "a"
Test Case #7:  ✅ PASS - All letters z              | shiftWord("zzz") = "aaa"
Test Case #8:  ✅ PASS - Empty string               | shiftWord("") = ""
Test Case #9:  ✅ PASS - Single character a         | shiftWord("a") = "b"
Test Case #10: ✅ PASS - Single character y         | shiftWord("y") = "z"
Test Case #11: ✅ PASS - Word with space            | shiftWord("hello world") = "ifmmp xpsme"
Test Case #12: ✅ PASS - Word with numbers          | shiftWord("abc123") = "bcd123"
Test Case #13: ✅ PASS - Word with punctuation      | shiftWord("hi!") = "ij!"

Success: 13/13 ✅
```

---

## 📊 Perbandingan dengan Kode Original

### **Kode Original:**
```javascript
function ubahHuruf(kata) {
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
  ]

  const indexAlphabet = []

  for (const char of kata) {
    let currentIndex = alphabet.indexOf(char)
    currentIndex++
    if (currentIndex > 25) currentIndex = 0
    indexAlphabet.push(currentIndex)
  }

  let result = ''
  for (const index of indexAlphabet) {
    result += `${alphabet[index]}`
  }

  return result
}
```

### **Kode Final:**
```javascript
const shiftChar = (char) => {
  const charCode = char.charCodeAt(0)

  if (charCode >= 97 && charCode <= 122) {
    const code = (charCode - 97 + 1) % 26 + 97
    return String.fromCharCode(code)
  }

  return char
}

const shiftWord = (word) => word.split('').map(shiftChar).join('')
```

### **Perbandingan:**

| Aspek | Kode Original | Kode Final |
|-------|--------------|------------|
| Array alphabet manual (26 item) | ❌ Ada | ✅ Tidak perlu |
| Array `indexAlphabet` | ❌ Ada | ✅ Tidak perlu |
| Jumlah loop | ❌ 2 loop | ✅ 1 loop |
| Naming convention | ❌ Bahasa Indonesia | ✅ English |
| Separation of concern | ❌ Satu fungsi semua | ✅ `shiftChar` & `shiftWord` |
| Handling non-huruf | ❌ Tidak ada | ✅ Ada |

---

## 💡 Key Takeaways

> **💡 Separation of Concern**
> Pisahkan tanggung jawab — `shiftChar` urus satu huruf, `shiftWord` urus seluruh kata.

> **💡 ASCII Lebih Efisien**
> Tidak perlu array 26 huruf manual. Cukup gunakan `charCodeAt` dan `fromCharCode`.

> **💡 Satu Loop Sudah Cukup**
> Dua loop di kode original bisa disederhanakan menjadi satu dengan `map`.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔧 [← Kembali ke Part 3: Refactoring Step-by-Step](03-refactoring-step-by-step.md)**
- **🔀 [Lanjut ke Part 5: Alternatif 1 →](05-alternatif-1.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
