# 🔄 Cheat Sheet — Shift Word (Ubah Huruf)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Modular ASCII & Modulo ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const shiftChar = (char) => {
  const charCode = char.charCodeAt(0);
  if (charCode >= 97 && charCode <= 122) {
    const code = (charCode - 97 + 1) % 26 + 97;
    return String.fromCharCode(code);
  }
  return char;
};

const shiftWord = (word) => word.split('').map(shiftChar).join('');
```

> 🔑 Sangat efisien `O(n)`, menangani karakter non-huruf dengan baik, dan menggunakan prinsip _separation of concerns_ (modular).

### 2. Regex + ASCII Pendek ⭐ `PALING RINGKAS & ROBUST`

```javascript
const shiftWord = (word) => {
  return word.replace(/[a-z]/gi, char => {
    return char.toLowerCase() === 'z'
      ? 'a'
      : String.fromCharCode(char.charCodeAt(0) + 1);
  });
};
```

> 🔑 Sangat handal (*robust*) karena Regex hanya akan menyasar huruf alfabet saja (`[a-z]`), selebihnya otomatis diabaikan. Cocok untuk environment _production_.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. Imperatif Array Alphabet + If Else ⭐ `PALING INTUITIF UNTUK PEMULA`

```javascript
const shiftWord = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  
  for (const char of word) {
    const index = alphabet.indexOf(char);
    if (index === -1) result += char;        // Abaikan spasi / angka
    else if (index === 25) result += 'a';    // Handle huruf 'z' wrap-around
    else result += alphabet[index + 1];      // Geser 1 langkah ke kanan
  }
  return result;
};
```

> 🔑 Sangat disarankan bagi pemula yang sedang melatih logika pengulangan manual dan pengkondisian dari dasar, tanpa perlu paham ASCII terlebih dahulu.

### 4. Imperatif ASCII + If Else

```javascript
const shiftWord = (word) => {
  let result = '';
  for (const char of word) {
    const code = char.charCodeAt(0);
    if (code < 97 || code > 122) result += char;
    else if (code === 122) result += 'a';
    else result += String.fromCharCode(code + 1);
  }
  return result;
};
```

> 🔑 Pendekatan algoritmik murni yang hemat memori (tanpa array alfabet), melatih pemahaman bahwa karakter sejatinya adalah angka di memori komputer.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 5. Deklaratif Map Alphabet + Modulo

```javascript
const shiftWord = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return word.split('').map(char => {
    const index = alphabet.indexOf(char);
    if (index === -1) return char;
    return alphabet[(index + 1) % 26];
  }).join('');
};
```

> 🔑 Versi _functional programming_ dari fundamental. Cukup elegan, namun `indexOf` membuat time complexity sedikit melambat menjadi `O(n * 26)`.

### 6. Deklaratif Map + Ternary One-Liner

```javascript
const shiftWord = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return word
    .split('')
    .map(char => char === 'z' ? 'a' : alphabet[alphabet.indexOf(char) + 1] || char)
    .join('');
};
```

> 🔑 Kode bergaya _code golf_ (sependek mungkin). Kadang sulit dibaca oleh programmer lain saat _code review_, kurang disarankan untuk tim besar.

---

## ⚠️ GOTCHA CEPAT

- ❌ **Wrap-around 'z'**: Jika Anda menggunakan referensi kamus alfabet `abcdef...z`, `alphabet.indexOf('z')` adalah `25`. Ditambah 1 menjadi `26`. Huruf ke-26 (`alphabet[26]`) tidak ada alias `undefined`. Wajib di-handle secara eksplisit agar kembali ke `'a'`.
- ❌ **Karakter Non-huruf**: Spasi, angka, atau simbol (`!@#`) akan menghasilkan indeks `-1` jika dicari dengan `indexOf()`. Pastikan di-handle (`if (index === -1) return char;`) agar karakter-karakter tersebut tidak diubah.
- ❌ **Tipe Data Primitive vs Object**: Saat di-_loop_, Anda tidak bisa "mengubah isi string" langsung dengan `word[i] = 'a'` karena tipe data primitif string di JS itu _immutable_ (tidak bisa diubah nilai per indeksnya). Gunakan penampung string baru (`result +=`) atau ubah menjadi array dahulu dengan `.split()`.

---

## 📊 QUICK COMPARISON

| Versi | Pendekatan Utama | Complexity | Keunggulan Utama | Rekomendasi |
|-------|------------------|------------|------------------|-------------|
| **1** | Modular ASCII + Modulo | `O(n)` | Sangat modular, cepat, _production ready_ | 🏆 Best Practice |
| **2** | Regex + ASCII | `O(n)` | Kode ringkas, _built-in validation_ dari regex | 🏆 Best Practice |
| **3** | Array Alphabet + If | `O(n*26)`| Logika paling mudah dipahami pemula | 🧠 Fundamental |
| **4** | Imperatif ASCII + If | `O(n)` | Cepat tanpa memori ekstra untuk Array kamus | 🧠 Fundamental |
| **5** | Map + Modulo Alphabet | `O(n*26)`| Kombinasi Modulo dengan Functional API | 🧪 Eksperimental |
| **6** | Map + Ternary | `O(n*26)`| Paling pendek, namun *readability* rendah | 🧪 Eksperimental |

---

## 🧪 TEST CASES

```javascript
// Pengujian Dasar
console.log(shiftWord("wow"));          // "xpx"
console.log(shiftWord("developer"));    // "efwfmpqfs"
console.log(shiftWord("javascript"));   // "kbwbtdsjqu"

// Pengujian Wrap-around 'z'
console.log(shiftWord("buzz"));         // "cvaa"
console.log(shiftWord("z"));            // "a"

// Pengujian Non-Alphabet (Edge Cases)
console.log(shiftWord("hello world!")); // "ifmmp xpsme!" (Spasi & tanda seru tetap)
console.log(shiftWord("123 zzz"));      // "123 aaa"      (Angka tetap)
```
