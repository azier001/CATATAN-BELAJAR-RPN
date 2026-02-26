# 📚 checkAB - PART 5: ALTERNATIF `some` + RINGKASAN ALGORITMA

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         🔀 PART 5: ALTERNATIF `some` + RINGKASAN ALGORITMA 🔀           ║
║                                                                          ║
║              Pendekatan Functional Programming dengan .some()            ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| ✅ Kode | 🧪 Test Cases | 📖 Ringkasan Algoritma |
|:-------:|:-------------:|:----------------------:|
| [Jump](#-kode-alternatif-1--some) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami pendekatan functional programming dengan `.some()`
- ✅ Tahu kapan menggunakan `.some()` dibanding `for` loop biasa
- ✅ Mengenal konvensi penamaan `_` untuk parameter yang tidak digunakan

---

## ✅ Kode Alternatif 1 — `some`

```javascript
function checkAB(str) {
  return [...str].some((_, i) => {
    if (i < 4) return false

    const currentChar = str[i]
    const prevChar = str[i - 4]

    const isAtoB = currentChar === 'b' && prevChar === 'a'
    const isBtoA = currentChar === 'a' && prevChar === 'b'

    return isAtoB || isBtoA
  })
}
```

---

## 🧪 Test Cases

```javascript
// Edge cases
console.log(checkAB(''));        // false
console.log(checkAB('a'));       // false
console.log(checkAB('ab'));      // false
console.log(checkAB('a   b'));   // true
```

```javascript
// Basic valid cases
console.log(checkAB('lane borrowed'));  // true
console.log(checkAB('barbarian'));      // true
console.log(checkAB('you are boring')); // true
console.log(checkAB('axxxb'));          // true
console.log(checkAB('bxxxa'));          // true
```

```javascript
// Invalid cases
console.log(checkAB('i am sick'));      // false
console.log(checkAB('bacon and meat')); // false
console.log(checkAB('aabbcc'));         // false
console.log(checkAB('abxxx'));          // false
```

---

## 📖 Ringkasan Algoritma

### **Konsep Inti:**
```
Spread string menjadi array karakter
Gunakan .some() untuk iterasi setiap karakter
  Skip jika index < 4
  Ambil currentChar (index i) dan prevChar (index i - 4)
  Jika currentChar='b' dan prevChar='a' → return true
  Jika currentChar='a' dan prevChar='b' → return true
.some() return true jika minimal satu iterasi return true
.some() return false jika semua iterasi return false
```

---

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function checkAB(str)`
   - `str` — string input yang akan dicek
   - **return** — `true` jika ditemukan pasangan `a` dan `b` berjarak tepat 3 karakter, `false` jika tidak

#### 🔵 Di Luar `.some()`:

2. **`[...str]`** — Spread string menjadi array karakter
   - `'abc'` → `['a', 'b', 'c']`
   - Diperlukan karena `.some()` adalah method array, bukan method string

#### 🔄 Di Dalam `.some((_, i) => {...})`:

3. **`(_, i)`** — Parameter callback `.some()`
   - `_` — karakter di index `i`, tidak dipakai langsung (diganti `str[i]`) sehingga diberi nama `_` sebagai konvensi "tidak digunakan"
   - `i` — index karakter saat ini

4. **`if (i < 4) return false`**
   - Skip iterasi jika index belum mencapai 4
   - Karena `str[i - 4]` akan mengakses index negatif jika `i < 4`

5. **`const currentChar = str[i]`**
   - Karakter di posisi sekarang

6. **`const prevChar = str[i - 4]`**
   - Karakter 4 langkah sebelum posisi sekarang

7. **`const isAtoB = currentChar === 'b' && prevChar === 'a'`**
   - Cek pola `a...b`

8. **`const isBtoA = currentChar === 'a' && prevChar === 'b'`**
   - Cek pola `b...a`

9. **`return isAtoB || isBtoA`**
   - Jika `true`, `.some()` langsung berhenti dan return `true`
   - Jika `false`, `.some()` lanjut ke iterasi berikutnya

---

### **Visualisasi untuk `str = 'barbarian'`:**

```
┌──────────────────────────────────────────────────────────────────┐
│  [...'barbarian'] = ['b','a','r','b','a','r','i','a','n']        │
│                                                                  │
│  i=0: i < 4 → skip                                              │
│  i=1: i < 4 → skip                                              │
│  i=2: i < 4 → skip                                              │
│  i=3: i < 4 → skip                                              │
│                                                                  │
│  i=4: currentChar='a', prevChar=str[0]='b'                      │
│       isAtoB = ('a'==='b') = false                              │
│       isBtoA = ('a'==='a' && 'b'==='b') = true ✅               │
│       .some() return true → berhenti                            │
└──────────────────────────────────────────────────────────────────┘
```

---

### **Keywords:**
- 📦 **`[...str]`** — spread string menjadi array karakter
- 🔍 **`.some()`** — return `true` jika minimal satu iterasi return `true`
- 🚫 **`_`** — konvensi penamaan untuk parameter yang tidak digunakan
- ⚡ **Early return** — `.some()` berhenti otomatis begitu menemukan `true`

---

### **Kompleksitas:**

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n)** | `.some()` iterasi satu kali sepanjang array |
| Memori | **O(n)** | `[...str]` membuat array baru sebesar panjang string |

---

### **Kapan Pakai:**
- ✅ Prioritas readability dan gaya functional programming
- ✅ String tidak terlalu panjang sehingga overhead memori tidak jadi masalah
- ❌ Hindari jika string sangat panjang dan memori harus dijaga ketat

---

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa skip index < 4**
```javascript
// ❌ SALAH — str[i - 4] bisa mengakses index negatif
return [...str].some((_, i) => {
  const prevChar = str[i - 4] // undefined jika i < 4!
})

// ✅ BENAR — skip dulu jika index belum aman
return [...str].some((_, i) => {
  if (i < 4) return false
  const prevChar = str[i - 4]
})
```

**2) ❌ Menggunakan `char` langsung dari parameter instead of `str[i]`**
```javascript
// ❌ MEMBINGUNGKAN — char dan str[i] sama, tapi tidak konsisten
return [...str].some((char, i) => {
  const prevChar = str[i - 4] // kenapa tidak pakai array juga?
})

// ✅ KONSISTEN — pakai _ karena memang tidak dipakai
return [...str].some((_, i) => {
  const currentChar = str[i]
  const prevChar = str[i - 4]
})
```

---

### **💡 Insight Penting:**

> **Kenapa parameter pertama diberi nama `_`?**
> Karena kita tidak menggunakan nilai karakternya langsung dari parameter — kita ambil dari `str[i]` agar konsisten dengan `str[i - 4]`. Nama `_` adalah konvensi umum di JavaScript untuk menandakan parameter yang sengaja tidak digunakan.

> **Apa bedanya `.some()` dengan `for` loop biasa?**
> Secara performa keduanya sama-sama O(n) dan sama-sama berhenti saat ketemu `true`. Bedanya `.some()` lebih ekspresif — nama method-nya sendiri sudah menggambarkan maksudnya: *"apakah ada setidaknya satu yang memenuhi kondisi?"*

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa kita pakai str[i] bukan langsung pakai parameter pertama?</strong></summary>

Karena kita juga butuh `str[i - 4]` — dan tidak ada cara untuk ambil karakter 4 posisi sebelumnya dari parameter callback. Daripada pakai parameter untuk `currentChar` tapi `str[i-4]` untuk `prevChar` (tidak konsisten), lebih baik pakai `str[i]` untuk keduanya agar konsisten, dan beri nama `_` pada parameter yang tidak dipakai.

</details>

<details>
<summary><strong>❓ Apakah `[...str]` mengubah string aslinya?</strong></summary>

Tidak. Spread `[...str]` membuat array baru yang berisi karakter-karakter dari string. String asli `str` tidak berubah sama sekali — kita masih bisa akses `str[i]` dan `str[i - 4]` seperti biasa.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **✅ [← Kembali ke Part 4: Kode Final + Ringkasan Algoritma](04-kode-final-dan-ringkasan-algoritma.md)**
- **🔤 [Lanjut ke Part 6: Alternatif Regex + Ringkasan Algoritma →](06-alternatif-regex-dan-ringkasan-algoritma.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
