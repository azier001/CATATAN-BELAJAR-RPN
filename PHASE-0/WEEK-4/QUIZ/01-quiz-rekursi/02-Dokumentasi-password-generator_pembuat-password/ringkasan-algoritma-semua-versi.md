# 📊 Ringkasan Algoritma — Semua Versi

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)
![Test](https://img.shields.io/badge/Test-15%2F15%20PASS-brightgreen?style=for-the-badge)

---

## 🧭 Quick Jump

| 🏆 Versi Saya | 🔄 Alt. changeVocals | 🔄 Alt. reverseWord | 🔄 Alt. setLowerUpperCase | 🔄 Alt. passwordGenerator | 🔄 Single Function | 📊 Perbandingan |
|:------------:|:--------------------:|:-------------------:|:-------------------------:|:-------------------------:|:-----------------:|:--------------:|
| [Jump](#-versi-saya--final) | [Jump](#-alternatif-changevocals--object-mapping) | [Jump](#-alternatif-reverseword--reduce) | [Jump](#-alternatif-setloweruppercase--regex) | [Jump](#-alternatif-passwordgenerator--nested-calls) | [Jump](#-alternatif-single-function) | [Jump](#-perbandingan-semua-versi) |

---

## 🏆 Versi Saya — Final

Versi lengkap final setelah semua perbaikan dan refactoring:

```js
function changeVocals(str) {
  const vowelChars = 'aiueoAIUEO'
  let result = ''

  for (const char of str) {
    if (vowelChars.includes(char)) {
      const code = char.charCodeAt(0)
      result += String.fromCharCode(code + 1)
    } else {
      result += char
    }
  }

  return result
}
```

```js
function reverseWord(str) {
  return [...str].reverse().join('')
}
```

```js
function setLowerUpperCase(str) {
  let transformedText = ''

  for (const char of str) {
    if (char >= 'A' && char <= 'Z') {
      transformedText += char.toLowerCase()
    } else if (char >= 'a' && char <= 'z') {
      transformedText += char.toUpperCase()
    } else {
      transformedText += char
    }
  }

  return transformedText
}
```

```js
function removeSpaces(str) {
  return str.replace(/\s+/g, '')
}
```

```js
function passwordGenerator(name) {
  const trimmedName = name.trim()

  if (trimmedName.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'

  const vocalsChanged = changeVocals(trimmedName)
  const reversed      = reverseWord(vocalsChanged)
  const caseToggled   = setLowerUpperCase(reversed)
  const password      = removeSpaces(caseToggled)

  return password
}
```

---

## 🔄 Alternatif `changeVocals` — Object Mapping

```js
function changeVocals(str) {
  const vocalMap = {
    'a': 'b', 'i': 'j', 'u': 'v', 'e': 'f', 'o': 'p',
    'A': 'B', 'I': 'J', 'U': 'V', 'E': 'F', 'O': 'P'
  }

  return [...str].map(char => vocalMap[char] ?? char).join('')
}
```

> 💡 Lebih eksplisit — setiap mapping vokal terlihat langsung tanpa perlu tahu ASCII.

---

## 🔄 Alternatif `reverseWord` — `reduce()`

```js
function reverseWord(str) {
  return [...str].reduce((acc, char) => char + acc, '')
}
```

> 💡 Setiap `char` ditaruh di depan accumulator — sehingga urutan karakter terbalik.

---

## 🔄 Alternatif `setLowerUpperCase` — Regex

```js
function setLowerUpperCase(str) {
  return str.replace(/[a-zA-Z]/g, char => {
    return char >= 'A' && char <= 'Z'
      ? char.toLowerCase()
      : char.toUpperCase()
  })
}
```

> 💡 Regex `/[a-zA-Z]/g` otomatis filter huruf saja — angka, simbol, spasi tidak tersentuh.

---

## 🔄 Alternatif `passwordGenerator` — Nested Calls

```js
function passwordGenerator(name) {
  const trimmedName = name.trim()

  if (trimmedName.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'

  return removeSpaces(
    setLowerUpperCase(
      reverseWord(
        changeVocals(trimmedName)
      )
    )
  )
}
```

> 💡 Dibaca dari dalam ke luar — urutan sama dengan requirement soal.

---

## 🔄 Alternatif Single Function

Semua logika dalam satu fungsi tanpa helper functions terpisah:

```js
const passwordGenerator = (name) => {
  const trimmedName = name.trim()

  if (trimmedName.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }

  const shiftVocal = (char) => {
    const vocals = 'aiueoAIUEO'
    if (!vocals.includes(char)) return char
    return String.fromCharCode(char.charCodeAt(0) + 1)
  }

  let str = trimmedName.split('').map(shiftVocal).join('')
  str = str.split('').reverse().join('')
  str = str.split('').map(char => {
    if (char >= 'A' && char <= 'Z') return char.toLowerCase()
    if (char >= 'a' && char <= 'z') return char.toUpperCase()
    return char
  }).join('')
  str = str.replace(/\s+/g, '')

  return str
}
```

> 💡 Cocok untuk kasus sederhana — tapi kurang reusable dan sulit di-test per bagian.

---

## 📊 Perbandingan Semua Versi

### Helper Functions

| Function | Versi Saya | Alternatif | Rekomendasi |
|----------|-----------|------------|-------------|
| `changeVocals` | `charCodeAt + 1` | Object mapping | Alternatif — lebih eksplisit |
| `reverseWord` | `spread + reverse + join` | `reduce()` | Versi saya — paling idiomatik |
| `setLowerUpperCase` | `for...of` + range | Regex | Keduanya bagus |
| `removeSpaces` | `/\s+/g` | — | Versi saya — sudah optimal |

### `passwordGenerator`

| Aspek | Variable Terpisah | Nested Calls | Single Function |
|-------|:-----------------:|:------------:|:---------------:|
| Readability | ✅ | ⚠️ | ⚠️ |
| Debug friendly | ✅ | ❌ | ❌ |
| Reusability | ✅ | ✅ | ❌ |
| Ringkas | ❌ | ✅ | ✅ |

---

## 🎯 Perbaikan yang Dilakukan

| # | Masalah | Sebelum | Sesudah |
|---|---------|---------|---------|
| 1 | Validasi spasi murni | `name.length < 5` | `trimmedName.length < 5` |
| 2 | `.trim()` dipanggil 2x | `name.trim()` dua kali | Simpan ke `trimmedName` sekali |
| 3 | Logika toggle case | `char === char.toUpperCase()` | `char >= 'A' && char <= 'Z'` |
| 4 | Naming variable | `formattedVocals`, `resultFormatted` | `vocalsChanged`, `password` |
| 5 | Test expected value | Dari fungsi sendiri | Hardcoded manual |

---

## 🧪 Test Cases — Semua PASS ✅

```js
console.log(passwordGenerator('Sergei Dragunov'));
// → 'VPNVGBRdJFGRFs' ✅
```

```js
console.log(passwordGenerator('Dimitri Wahyudiputra'));
// → 'BRTVPJDVYHBwJRTJMJd' ✅
```

```js
console.log(passwordGenerator('Alexei'));
// → 'JFXFLb' ✅
```

```js
console.log(passwordGenerator('Alex'));
// → 'Minimal karakter yang diinputkan adalah 5 karakter' ✅
```

```js
console.log(passwordGenerator('     '));
// → 'Minimal karakter yang diinputkan adalah 5 karakter' ✅
```

---

## 🔗 Navigation

- **📚 [← Kembali ke README](./README.md)**
- **📖 [← Part 9 — Test Cases](./docs/09-test-cases_kasus-pengujian.md)**

---

<div align="center">

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
