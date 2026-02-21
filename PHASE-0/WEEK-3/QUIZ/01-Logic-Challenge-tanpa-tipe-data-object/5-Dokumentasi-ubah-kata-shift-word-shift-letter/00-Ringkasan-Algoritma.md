# 📋 Ringkasan Algoritma

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 RINGKASAN ALGORITMA 📋                                   ║
║                                                                          ║
║       Kode Final, Alternatif 1, Alternatif 1b, Alternatif 2              ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)

---

## 🎯 Tujuan

- ✅ Ringkasan algoritma semua versi dalam satu tempat
- ✅ Memahami trade-off masing-masing versi
- ✅ Quick reference untuk review atau ujian

---

## ✅ Kode Final — 2 Fungsi, ASCII + Modulo

> 💡 **Best for:** Produksi, idiomatik JavaScript, separation of concern

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

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

</details>

### **Konsep Inti:**
```
Pisahkan tanggung jawab — shiftChar urus satu huruf, shiftWord urus seluruh kata
Gunakan ASCII code untuk geser huruf tanpa array manual
Gunakan modulo % 26 untuk wrap z → a
Karakter non-huruf dikembalikan apa adanya
```

### **Step-by-Step (Detail):**

1. **Kode ini terdiri dari 2 fungsi yang bekerja sama**
   - `shiftChar(char)` — menggeser **satu huruf**
   - `shiftWord(word)` — memproses **seluruh kata** dengan memanggil `shiftChar` untuk setiap hurufnya

2. **`shiftWord` menerima `word` lalu memecahnya menjadi array huruf dengan `.split('')`**
   - `'wow'.split('')` → `['w', 'o', 'w']`

3. **`.map(shiftChar)` — setiap huruf dikirim satu per satu ke `shiftChar`**
   - `'w'` → masuk `shiftChar` → proses → keluar `'x'`
   - `'o'` → masuk `shiftChar` → proses → keluar `'p'`
   - `'w'` → masuk `shiftChar` → proses → keluar `'x'`

4. **Di dalam `shiftChar`, `char` diubah ke angka ASCII dengan `charCodeAt(0)` dan disimpan ke `charCode`**
   - `'w'.charCodeAt(0)` → `charCode = 119`

5. **Cek apakah `charCode` dalam range huruf a–z (97–122)**
   - `119 >= 97 && 119 <= 122` → `true` → lanjut geser
   - Kalau `false` (spasi, angka, tanda baca) → langsung `return char` apa adanya

6. **Normalisasi `charCode` ke range 0–25 dengan `charCode - 97`**
   - `119 - 97 = 22` (artinya `'w'` adalah huruf ke-22)

7. **Geser satu posisi dengan `+ 1`, lalu `% 26` agar tidak keluar dari range**
   - `22 + 1 = 23`
   - `23 % 26 = 23` (tidak melewati batas)
   - Khusus `'z'`: `25 + 1 = 26` → `26 % 26 = 0` → balik ke `'a'` ✅

8. **Kembalikan ke range ASCII dengan `+ 97`, simpan ke `code`**
   - `23 + 97 = 120`

9. **`code` diubah kembali ke huruf dengan `String.fromCharCode(code)` lalu dikembalikan**
   - `String.fromCharCode(120)` → `'x'`

10. **`.join('')` menggabungkan semua hasil menjadi string**
    - `['x', 'p', 'x'].join('')` → `'xpx'` ✅

### **Keywords:**
- 🔀 **Separation of concern** — `shiftChar` & `shiftWord` punya tugas masing-masing
- 📊 **charCodeAt(0)** — ubah huruf ke angka ASCII
- 🔢 **Normalisasi 0–25** — `charCode - 97`
- 🔄 **Modulo % 26** — wrap `z → a` secara matematis
- 🔡 **fromCharCode** — ubah angka kembali ke huruf
- ⏱️ **O(n)** complexity

### **Kapan Pakai:**
- ✅ Production code
- ✅ Kode yang akan di-maintain jangka panjang
- ✅ Ketika idiomatik JavaScript diutamakan
- ✅ Ketika separation of concern penting

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa return char untuk non-huruf**
```javascript
// ❌ SALAH — spasi, angka, tanda baca ikut digeser
const shiftChar = (char) => {
  const charCode = char.charCodeAt(0)
  const code = (charCode - 97 + 1) % 26 + 97
  return String.fromCharCode(code)
}

// ✅ BENAR — cek dulu sebelum geser
if (charCode >= 97 && charCode <= 122) {
  const code = (charCode - 97 + 1) % 26 + 97
  return String.fromCharCode(code)
}
return char
```

**2) ❌ Urutan operasi modulo salah**
```javascript
// ❌ SALAH — normalisasi tidak dilakukan
const code = (charCode + 1) % 26 + 97

// ✅ BENAR — normalisasi dulu ke 0–25
const code = (charCode - 97 + 1) % 26 + 97
```

### **💡 Insight Penting:**

> **Kenapa perlu normalisasi ke 0–25?**
> Karena modulo `% 26` hanya bekerja dengan benar jika range dimulai dari 0.
> Tanpa normalisasi, `z` (122) akan menghasilkan `122 + 1 = 123`, lalu `123 % 26 = 19`, lalu `19 + 97 = 116 = 't'` — salah!
> Dengan normalisasi: `25 + 1 = 26`, `26 % 26 = 0`, `0 + 97 = 97 = 'a'` ✅

---

## 🔀 Alternatif 1 — 1 Fungsi, ASCII + `if` Hardcode

> 💡 **Best for:** Pemula, mudah dibaca, tidak perlu paham modulo

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const shiftWord = (word) => {
  let result = ''

  for (const char of word) {
    const code = char.charCodeAt(0)

    if (code < 97 || code > 122) {
      result += char
    } else if (code === 122) {
      result += 'a'
    } else {
      result += String.fromCharCode(code + 1)
    }
  }

  return result
}
```

</details>

### **Konsep Inti:**
```
Satu fungsi menangani semua proses
Gunakan ASCII code dan if-else untuk handle 3 kondisi
Hardcode pengecekan z (122) dan hasil 'a' secara eksplisit
```

### **Step-by-Step (Detail):**

1. **Kode ini hanya terdiri dari 1 fungsi `shiftWord`**
   - Semua proses dilakukan langsung di dalam fungsi ini
   - Tidak ada fungsi pembantu

2. **`shiftWord` menerima `word` lalu menyiapkan `result` sebagai string kosong**
   - `result` menampung hasil huruf yang sudah digeser satu per satu

3. **`for...of` loop memproses setiap `char` dalam `word` satu per satu**
   - `'wow'` → iterasi pertama `char = 'w'`, kedua `char = 'o'`, ketiga `char = 'w'`

4. **Setiap `char` diubah ke angka ASCII dengan `charCodeAt(0)` dan disimpan ke `code`**
   - `'w'.charCodeAt(0)` → `code = 119`

5. **Kondisi pertama — cek apakah `char` bukan huruf a–z**
   - Jika `code < 97 || code > 122` → bukan huruf
   - Langsung `result += char` apa adanya tanpa digeser
   - Contoh: spasi `' '` → ASCII 32 → `32 < 97` → langsung masuk `result`

6. **Kondisi kedua — cek apakah `char` adalah `'z'`**
   - Jika `code === 122` → berarti `char` adalah `'z'`
   - Langsung `result += 'a'` secara hardcode

7. **Kondisi ketiga — huruf selain `'z'`**
   - Cukup `code + 1` untuk geser ke huruf berikutnya
   - `result += String.fromCharCode(code + 1)`
   - Contoh: `'w'` → `119 + 1 = 120` → `String.fromCharCode(120)` → `'x'` → `result += 'x'`

8. **Setelah loop selesai, `result` dikembalikan sebagai output**
   - `result = 'xpx'` → `return 'xpx'` ✅

### **Keywords:**
- 🛡️ **if-else 3 kondisi** — non-huruf, `z`, huruf biasa
- 📊 **charCodeAt(0)** — ubah huruf ke angka ASCII
- 🔡 **fromCharCode** — ubah angka kembali ke huruf
- 🔢 **code === 122** — hardcode pengecekan `'z'`
- ⏱️ **O(n)** complexity

### **Kapan Pakai:**
- ✅ Baru belajar konsep ASCII
- ✅ Tidak ingin paham modulo dulu
- ✅ Kode untuk diri sendiri atau belajar
- ✅ Ketika readability > compactness

### **Pitfalls (Jebakan Umum):**

**1) ❌ Urutan kondisi salah**
```javascript
// ❌ SALAH — cek z sebelum cek non-huruf
} else if (code === 122) {
  result += 'a'
} else if (code < 97 || code > 122) {
  result += char
}

// ✅ BENAR — cek non-huruf dulu
if (code < 97 || code > 122) {
  result += char
} else if (code === 122) {
  result += 'a'
}
```

**2) ❌ Lupa tanda kutip pada `'a'`**
```javascript
// ❌ SALAH — a dianggap variable
result += a

// ✅ BENAR
result += 'a'
```

### **💡 Insight Penting:**

> **Kenapa hardcode `'a'` aman di sini?**
> Karena hanya ada satu kasus khusus — huruf `'z'`. Berbeda dengan modulo yang bisa handle semua kasus secara matematis, pendekatan ini eksplisit dan mudah dibaca. Trade-off: kurang fleksibel jika aturan geser huruf berubah.

---

## 🔀 Alternatif 1b — 1 Fungsi, String Alphabet + `if` Hardcode

> 💡 **Best for:** Pemula yang belum familiar ASCII, paling mudah dipahami

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const shiftWord = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''

  for (const currentChar of word) {
    const index = alphabet.indexOf(currentChar)

    if (index === -1) {
      result += currentChar
    } else if (index === 25) {
      result += 'a'
    } else {
      result += alphabet[index + 1]
    }
  }

  return result
}
```

</details>

### **Konsep Inti:**
```
Gunakan string alphabet sebagai referensi urutan huruf
Cari posisi huruf dengan indexOf(), hasilnya disimpan ke index
Gunakan if-else untuk handle 3 kondisi berbeda
Hardcode pengecekan z (index 25) dan hasil 'a' secara eksplisit
```

### **Step-by-Step (Detail):**

1. **Kode ini hanya terdiri dari 1 fungsi `shiftWord`**
   - Tidak menggunakan ASCII code, melainkan string `alphabet` sebagai referensi

2. **`shiftWord` menerima `word`, menyiapkan string referensi `alphabet` dan `result` sebagai string kosong**
   - `alphabet = 'abcdefghijklmnopqrstuvwxyz'`
   - `result` menampung hasil huruf yang sudah digeser satu per satu

3. **`for...of` loop memproses setiap `currentChar` dalam `word` satu per satu**
   - `'wow'` → iterasi pertama `currentChar = 'w'`, kedua `currentChar = 'o'`, ketiga `currentChar = 'w'`

4. **Setiap `currentChar` dicari posisinya di `alphabet` dengan `indexOf()` dan disimpan ke `index`**
   - `alphabet.indexOf('w')` → `index = 22`

5. **Kondisi pertama — cek apakah `currentChar` bukan huruf a–z**
   - `indexOf()` mengembalikan `-1` kalau `currentChar` tidak ditemukan di `alphabet`
   - Jika `index === -1` → bukan huruf (spasi, angka, tanda baca)
   - Langsung `result += currentChar` apa adanya tanpa digeser

6. **Kondisi kedua — cek apakah `currentChar` adalah `'z'`**
   - `'z'` ada di posisi index `25` di `alphabet`
   - Jika `index === 25` → `result += 'a'` secara hardcode

7. **Kondisi ketiga — huruf selain `'z'`**
   - Ambil huruf berikutnya dari `alphabet` dengan `alphabet[index + 1]`
   - `result += alphabet[index + 1]`
   - Contoh: `'w'` → `index = 22` → `alphabet[23]` → `'x'` → `result += 'x'`

8. **Setelah loop selesai, `result` dikembalikan sebagai output**
   - `result = 'xpx'` → `return 'xpx'` ✅

### **Keywords:**
- 🔤 **String alphabet** — referensi urutan huruf tanpa ASCII
- 🔍 **indexOf()** — cari posisi huruf di alphabet
- 🛡️ **if-else 3 kondisi** — index `-1`, index `25`, lainnya
- 🔢 **index === 25** — hardcode pengecekan `'z'`
- ⏱️ **O(n × 26)** complexity

### **Kapan Pakai:**
- ✅ Belum familiar dengan konsep ASCII
- ✅ Ingin kode yang paling mudah dibaca dan dimengerti
- ✅ Belajar atau mengajar konsep dasar
- ✅ Performa bukan prioritas utama

### **Pitfalls (Jebakan Umum):**

**1) ❌ Menggunakan `currentChar === 'z'` bukan `index === 25`**
```javascript
// ⚠️ KURANG KONSISTEN — padahal sudah punya variabel index
} else if (currentChar === 'z') {
  result += 'a'

// ✅ LEBIH KONSISTEN — pakai index yang sudah ada
} else if (index === 25) {
  result += 'a'
}
```

**2) ❌ Menggunakan for loop dengan index `i`**
```javascript
// ❌ KURANG IDIOMATIK — index i tidak dipakai
for (let i = 0; i < word.length; i++) {
  const currentChar = word[i]

// ✅ LEBIH IDIOMATIK
for (const currentChar of word) {
```

### **💡 Insight Penting:**

> **Kenapa O(n × 26)?**
> Karena `indexOf()` melakukan pencarian linear di string `alphabet` yang panjangnya 26. Untuk setiap karakter di `word`, bisa ada hingga 26 perbandingan. Dalam praktik tidak terasa lambat karena 26 adalah konstanta kecil, tapi secara teori kurang efisien dibanding ASCII (O(n)).

---

## 🔀 Alternatif 2 — 1 Fungsi, String Alphabet + Modulo

> 💡 **Best for:** Pemula–Menengah, ringkas tanpa perlu paham ASCII

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const shiftWord = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  return word.split('').map(char => {
    const index = alphabet.indexOf(char)
    if (index === -1) return char
    return alphabet[(index + 1) % 26]
  }).join('')
}
```

</details>

### **Konsep Inti:**
```
Gunakan string alphabet sebagai referensi urutan huruf
Cari posisi huruf dengan indexOf(), hasilnya disimpan ke index
Gunakan modulo % 26 untuk wrap z → a tanpa if-else tambahan
Gunakan split + map + join untuk proses yang lebih ringkas
```

### **Step-by-Step (Detail):**

1. **Kode ini hanya terdiri dari 1 fungsi `shiftWord`**
   - Tidak menggunakan ASCII code, melainkan string `alphabet` sebagai referensi

2. **`shiftWord` menerima `word` lalu menyiapkan string referensi `alphabet`**
   - `alphabet = 'abcdefghijklmnopqrstuvwxyz'`

3. **`.split('')` memecah `word` menjadi array huruf**
   - `'wow'.split('')` → `['w', 'o', 'w']`

4. **`.map()` memproses setiap `char` satu per satu**
   - Tiap `char` dicari posisinya di `alphabet` menggunakan `indexOf(char)` dan disimpan ke `index`
   - `alphabet.indexOf('w')` → `index = 22`

5. **Cek apakah `index === -1`**
   - Jika `index === -1` → bukan huruf → langsung `return char` apa adanya

6. **Kalau `char` huruf valid, geser posisi dengan `index + 1`**
   - `index = 22` → `22 + 1 = 23`

7. **Gunakan `% 26` agar tidak keluar dari range `alphabet`**
   - `23 % 26 = 23` (tidak melewati batas)
   - Khusus `'z'`: `index = 25` → `25 + 1 = 26` → `26 % 26 = 0` → balik ke index `0` yaitu `'a'` ✅

8. **Ambil huruf hasil geser dari `alphabet` lalu `return` sebagai hasil `.map()`**
   - `return alphabet[(index + 1) % 26]`
   - `return alphabet[23]` → `return 'x'`

9. **`.join('')` menggabungkan semua hasil menjadi string**
   - `['x', 'p', 'x'].join('')` → `'xpx'` ✅

### **Keywords:**
- 🔤 **String alphabet** — referensi urutan huruf tanpa ASCII
- 🔍 **indexOf()** — cari posisi huruf di alphabet
- 🔄 **Modulo % 26** — wrap `z → a` secara matematis
- ✂️ **split + map + join** — proses array tanpa loop manual
- ⏱️ **O(n × 26)** complexity

### **Kapan Pakai:**
- ✅ Ingin kode ringkas tanpa perlu paham ASCII
- ✅ Sudah familiar dengan `map`, `split`, `join`
- ✅ Tidak ingin hardcode `'a'` seperti Alternatif 1b
- ✅ Performa bukan prioritas utama

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa `% 26` sehingga `z` tidak wrap balik ke `a`**
```javascript
// ❌ SALAH — alphabet[26] adalah undefined!
return alphabet[index + 1]

// ✅ BENAR — modulo pastikan tidak keluar dari range
return alphabet[(index + 1) % 26]
```

**2) ❌ Lupa handle `index === -1`**
```javascript
// ❌ SALAH — alphabet[-1 + 1] = alphabet[0] = 'a' (salah untuk non-huruf!)
return alphabet[(index + 1) % 26]

// ✅ BENAR — cek dulu sebelum geser
if (index === -1) return char
return alphabet[(index + 1) % 26]
```

### **💡 Insight Penting:**

> **Apa bedanya dengan Alternatif 1b?**
> Keduanya sama-sama menggunakan string `alphabet`. Bedanya di cara handle `z → a`:
> Alternatif 1b pakai `if-else` hardcode `index === 25`, sementara Alternatif 2 pakai modulo `% 26` yang lebih elegan. Selain itu, Alternatif 2 menggunakan `split + map + join` sehingga tidak perlu variabel `result` dan loop manual.

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

  console.log(
    `Test Case #${index + 1}: ${status} - ${desc} | shiftWord("${input}") = "${result}"`
  )

  if (status === '❌ FAIL') {
    console.log('  Expected:', expected)
    console.log('  Result  :', result)
  }
})
```

**Output yang diharapkan:**
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

## 📊 Perbandingan Lengkap

| Aspek | Kode Final | Alternatif 1 | Alternatif 1b | Alternatif 2 |
|-------|:----------:|:------------:|:-------------:|:------------:|
| Jumlah fungsi | 2 | 1 | 1 | 1 |
| Pendekatan | ASCII + modulo | ASCII + if | Alphabet + if | Alphabet + modulo |
| Perlu paham ASCII | ✅ Ya | ✅ Ya | ❌ Tidak | ❌ Tidak |
| Kompleksitas waktu | O(n) | O(n) | O(n × 26) | O(n × 26) |
| Keterbacaan | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Idiomatik JS | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Cocok untuk | Produksi | Pemula | Pemula | Pemula–Menengah |

---

## 🎯 Decision Tree

```
Apakah kamu sudah paham ASCII?
├─ BELUM → Apakah ingin kode ringkas?
│           ├─ YA  → Alternatif 2 (alphabet + modulo)
│           └─ TIDAK → Alternatif 1b (alphabet + if)
└─ SUDAH → Apakah ingin kode untuk produksi?
            ├─ YA  → Kode Final (2 fungsi, ASCII + modulo)
            └─ TIDAK → Alternatif 1 (ASCII + if)
```

**Default:** Kode Final — paling efisien dan idiomatik ✅

---

## 🔑 Key Takeaways

> **💡 Semua Solusi Menghasilkan Output yang Sama**
> Perbedaan hanya pada pendekatan, efisiensi, dan keterbacaan

> **💡 ASCII Lebih Efisien dari String Alphabet**
> O(n) vs O(n × 26) — untuk skala kecil tidak terasa, tapi penting dipahami

> **💡 Modulo Lebih Elegan dari if Hardcode**
> Modulo handle semua kasus matematis, hardcode hanya handle kasus `z`

> **💡 Separation of Concern = Kode Lebih Maintainable**
> Memisahkan `shiftChar` dan `shiftWord` membuat kode lebih mudah ditest dan diubah

> **💡 Pilih Sesuai Konteks**
> Belajar → Alternatif 1b, Produksi → Kode Final

---

<div align="center">

## 🎯 Quick Reference Card

**Kode Final:** `shiftChar` (ASCII + modulo) + `shiftWord` (split → map → join)  
**Alternatif 1:** `for...of` + `charCodeAt` + `if-else` hardcode `z`  
**Alternatif 1b:** `for...of` + `indexOf` + `if-else` hardcode `index 25`  
**Alternatif 2:** `split` + `map` + `indexOf` + `% 26` + `join`  

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
