# 🔄 Cheat Sheet — Password Generator

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Modular + Clean Naming + Trim Guard ⭐ `PALING DIREKOMENDASIKAN`

```javascript
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

function reverseWord(str) {
  return [...str].reverse().join('')
}

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

function removeSpaces(str) {
  return str.replace(/\s+/g, '')
}

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

> 🔑 Versi paling matang: `.trim()` mencegah spasi murni lolos validasi, range check (`>= 'A'`) aman untuk non-huruf, naming variabel self-documenting, dan `/\s+/g` menghapus semua jenis whitespace.

---

### 2. Deklaratif + Clean Naming (Arrow Function Style)

```javascript
const changeVocals = (str) => {
  return str.replace(/[aiueo]/gi, (char) =>
    String.fromCharCode(char.charCodeAt(0) + 1),
  );
};

const reverseWord = (str) => {
  return str.split('').reverse().join('');
};

const setLowerUpperCase = (str) => {
  return str
    .split('')
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
    )
    .join('');
};

const removeSpaces = (str) => {
  return str.split(' ').join('');
};

const passwordGenerator = (name) => {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  const changedVocals = changeVocals(name);
  const reversedWord = reverseWord(changedVocals);
  const caseSwapped = setLowerUpperCase(reversedWord);
  const finalPassword = removeSpaces(caseSwapped);

  return finalPassword;
};
```

> 🔑 Gaya functional modern — Regex + `.map()` + arrow function. Ringkas dan idiomatik, cocok untuk production & interview showcase.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 1. Versi Prosedural Murni `PALING INTUITIF`

```javascript
function changeVocals(str) {
  let result = '';
  const vocals = 'aiueoAIUEO';

  for (const char of str) {
    if (vocals.includes(char)) {
      result += String.fromCharCode(char.charCodeAt(0) + 1);
    } else {
      result += char;
    }
  }

  return result;
}

function reverseWord(str) {
  return str.split('').reverse().join('');
}

function setLowerUpperCase(str) {
  let result = '';

  for (const char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

function removeSpaces(str) {
  return str.split(' ').join('');
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  let tahap1 = changeVocals(name);
  let tahap2 = reverseWord(tahap1);
  let tahap3 = setLowerUpperCase(tahap2);
  let tahap4 = removeSpaces(tahap3);

  return tahap4;
}
```

> 🔑 Syntax paling basic — `for...of` + akumulator string. Ideal untuk memahami alur logika step-by-step tanpa abstraksi.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 1. `changeVocals` — Object Mapping

```javascript
function changeVocals(str) {
  const vocalMap = {
    'a': 'b', 'i': 'j', 'u': 'v', 'e': 'f', 'o': 'p',
    'A': 'B', 'I': 'J', 'U': 'V', 'E': 'F', 'O': 'P'
  }

  return [...str].map(char => vocalMap[char] ?? char).join('')
}
```

> 🔑 Setiap mapping vokal terlihat eksplisit tanpa perlu tahu ASCII. Mudah di-maintain jika aturan berubah.

---

### 2. `reverseWord` — `reduce()`

```javascript
function reverseWord(str) {
  return [...str].reduce((acc, char) => char + acc, '')
}
```

> 🔑 Setiap `char` ditaruh di depan accumulator sehingga urutan terbalik. Alternatif tanpa `.reverse()`.

---

### 3. `setLowerUpperCase` — Regex

```javascript
function setLowerUpperCase(str) {
  return str.replace(/[a-zA-Z]/g, char => {
    return char >= 'A' && char <= 'Z'
      ? char.toLowerCase()
      : char.toUpperCase()
  })
}
```

> 🔑 Regex `/[a-zA-Z]/g` otomatis filter huruf saja — angka, simbol, spasi tidak tersentuh.

---

### 4. `passwordGenerator` — Nested Calls

```javascript
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

> 🔑 Dibaca dari dalam ke luar — ringkas tapi sulit di-debug karena tidak ada variabel antara.

---

### 5. Single Function (All-in-One) ⚠️ `TIDAK DISARANKAN UNTUK PRODUCTION`

```javascript
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

> 🔑 Semua logika dalam 1 fungsi. Cocok untuk kasus sederhana tapi kurang reusable dan sulit di-test per bagian.

---

## ⚠️ GOTCHA CEPAT

### 1. Validasi spasi murni — `name.length` vs `trimmedName.length`

```javascript
// ❌ SALAH — '     ' (5 spasi) lolos validasi
if (name.length < 5) return '...'

// ✅ BENAR — trim dulu, baru cek panjang
const trimmedName = name.trim()
if (trimmedName.length < 5) return '...'
```

---

### 2. Toggle case — `char === char.toUpperCase()` vs range check

```javascript
// ❌ BAHAYA — spasi, angka, simbol dianggap uppercase!
if (char === char.toUpperCase()) { ... }
// ' '.toUpperCase() === ' '  → true (padahal bukan huruf besar)

// ✅ AMAN — hanya huruf A-Z yang match
if (char >= 'A' && char <= 'Z') { ... }
```

---

### 3. Hapus spasi — `.split(' ').join('')` vs `/\s+/g`

```javascript
// ⚠️ Hanya hapus spasi biasa
str.split(' ').join('')

// ✅ Hapus SEMUA whitespace (tab, newline, double space, dll)
str.replace(/\s+/g, '')
```

---

### 4. `.trim()` dipanggil berulang

```javascript
// ❌ Redundant — trim 2 kali
changeVocals(name.trim())
reverseWord(name.trim())

// ✅ Simpan sekali ke variabel
const trimmedName = name.trim()
changeVocals(trimmedName)
```

---

## 📊 QUICK COMPARISON

### Helper Functions

| Fungsi | Pendekatan | Baris | Keunggulan | Label |
|--------|-----------|:-----:|------------|:-----:|
| `changeVocals` | `charCodeAt + 1` (for...of) | ~13 | Performa, mudah dipahami | 🧠 Fundamental |
| `changeVocals` | Object Mapping | ~7 | Eksplisit, mudah di-maintain | 🧪 Alternatif |
| `changeVocals` | Regex `.replace()` | ~3 | Paling ringkas | 🏆 Best Practice |
| `reverseWord` | `spread + reverse + join` | 1 | Paling idiomatik | 🏆 Best Practice |
| `reverseWord` | `reduce()` | 1 | Tanpa `.reverse()` | 🧪 Alternatif |
| `setLowerUpperCase` | `for...of` + range | ~11 | Debug friendly, aman | 🏆 Best Practice |
| `setLowerUpperCase` | `.map()` + ternary | ~6 | Ringkas, modern | 🧪 Alternatif |
| `setLowerUpperCase` | Regex `.replace()` | ~5 | Auto-filter non-huruf | 🧪 Alternatif |
| `removeSpaces` | `/\s+/g` | 1 | Semua whitespace | 🏆 Best Practice |

### Orkestrator `passwordGenerator`

| Aspek | Variable Terpisah | Nested Calls | Single Function |
|-------|:-----------------:|:------------:|:---------------:|
| Readability | ✅ | ⚠️ | ⚠️ |
| Debug friendly | ✅ | ❌ | ❌ |
| Reusability | ✅ | ✅ | ❌ |
| Ringkas | ❌ | ✅ | ✅ |
| **Rekomendasi** | 🏆 | 🧪 | ⚠️ |

---

## 🧪 TEST CASES

```javascript
console.log(passwordGenerator('Sergei Dragunov'));
// → 'VPNVGBRdJFGRFs'

console.log(passwordGenerator('Dimitri Wahyudiputra'));
// → 'BRTVPJDVYHBwJRTJMJd'

console.log(passwordGenerator('Alexei'));
// → 'JFXFLb'

console.log(passwordGenerator('Alex'));
// → 'Minimal karakter yang diinputkan adalah 5 karakter'

console.log(passwordGenerator('     '));
// → 'Minimal karakter yang diinputkan adalah 5 karakter'
```

---

## 🔗 Navigation

- **📚 [← Kembali ke README](./README.md)**
- **📊 [← Ringkasan Semua Versi](./ringkasan-algoritma-semua-versi.md)**

---

<div align="center">

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
