# 📚 Toggle Case - PART 7: RINGKASAN ALGORITMA — SPLIT + MAP + JOIN + IF/ELSE

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   📊 PART 7: RINGKASAN ALGORITMA — SPLIT + MAP + JOIN + IF/ELSE 📊      ║
║                                                                          ║
║                    Step-by-Step Detail Kode Alternatif 1                 ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 💡 Konsep | 📋 Kode | 📊 Step-by-Step | 🔍 Visualisasi | ⚠️ Pitfalls |
|:---------:|:-------:|:---------------:|:--------------:|:-----------:|
| [Jump](#-konsep-inti) | [Jump](#-kode) | [Jump](#-step-by-step-detail) | [Jump](#-visualisasi) | [Jump](#️-pitfalls) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami pendekatan fungsional dengan `split`, `map`, `join`
- ✅ Tahu perbedaan pendekatan ini vs `for...of`
- ✅ Mengenali jebakan umum yang sering terjadi

---

## 💡 Konsep Inti

> 💡 **Best for:** Pendekatan fungsional, readable, modern JavaScript

```
Split str menjadi array of characters
Map setiap char:
  Jika char adalah huruf kecil (a-z) → return uppercase
  Selain itu → return lowercase
Join array kembali menjadi string
Return hasilnya
```

---

## 📋 Kode

```javascript
function toggleCase(str) {
  return str.split('').map(char => {
    if (/[a-z]/.test(char)) {
      return char.toUpperCase()
    }

    return char.toLowerCase()
  }).join('')
}
```

**Nama fungsi:** `toggleCase`
**Parameter:** `str` — string input yang hurufnya akan di-toggle

---

## 📊 Step-by-Step (Detail)

### 🔵 Tahap 1 — `str.split('')`:

**1. Pecah string menjadi array**
- `str.split('')` — memecah setiap karakter menjadi elemen array
- String kosong `''` sebagai separator artinya pecah per karakter
- Contoh: `'Hello'` → `['H', 'e', 'l', 'l', 'o']`

---

### 🔄 Tahap 2 — `.map(char => { ... })`:

**2. Map setiap karakter**
- `.map()` — iterasi setiap elemen array, return nilai baru untuk setiap elemen
- `char` — setiap karakter yang sedang diproses

**3. Cek apakah `char` adalah huruf kecil** — `if (/[a-z]/.test(char))`
- Sama seperti versi `for...of` — regex `/[a-z]/` untuk cek huruf kecil
- Jika `true` → masuk blok `if`
- Jika `false` → lewati blok `if`, langsung ke return berikutnya

**4. Return uppercase** *(di dalam `if`)*
- `return char.toUpperCase()`
- Early return — langsung keluar dari callback, tidak lanjut ke baris berikutnya

**5. Return lowercase** *(di luar `if`)*
- `return char.toLowerCase()`
- Hanya dieksekusi jika kondisi `if` bernilai `false`

---

### 🔵 Tahap 3 — `.join('')`:

**6. Gabungkan array kembali menjadi string**
- `.join('')` — menggabungkan semua elemen array menjadi satu string
- String kosong `''` sebagai separator artinya tidak ada pemisah antar karakter
- Contoh: `['h', 'E', 'L', 'L', 'O']` → `'hELLO'`

---

### 🔵 Tahap 4:

**7. Return**
- Seluruh operasi `split().map().join()` langsung di-return dalam satu ekspresi
- Tidak membutuhkan variabel sementara seperti `result` di versi `for...of`

---

## 🔍 Visualisasi

**Untuk `str = 'Hello'`:**
```
Step 1 - split:
'Hello'.split('') → ['H', 'e', 'l', 'l', 'o']

Step 2 - map:
'H' → /[a-z]/.test('H') = false → 'H'.toLowerCase() = 'h'
'e' → /[a-z]/.test('e') = true  → 'e'.toUpperCase() = 'E'  (early return)
'l' → /[a-z]/.test('l') = true  → 'l'.toUpperCase() = 'L'  (early return)
'l' → /[a-z]/.test('l') = true  → 'l'.toUpperCase() = 'L'  (early return)
'o' → /[a-z]/.test('o') = true  → 'o'.toUpperCase() = 'O'  (early return)
→ ['h', 'E', 'L', 'L', 'O']

Step 3 - join:
['h', 'E', 'L', 'L', 'O'].join('') → 'hELLO'

return 'hELLO' ✅
```

---

## ⚠️ Pitfalls

**1) ❌ Split dengan separator yang salah**
```javascript
// ❌ SALAH — memecah per kata, bukan per karakter
str.split(' ')  // ['Hello', 'World']

// ✅ BENAR — memecah per karakter
str.split('')   // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
```

**2) ❌ Lupa return di dalam map**
```javascript
// ❌ SALAH — map tidak return apapun, hasilnya array of undefined
str.split('').map(char => {
  if (/[a-z]/.test(char)) {
    char.toUpperCase() // lupa return!
  }
  char.toLowerCase()  // lupa return!
})

// ✅ BENAR
str.split('').map(char => {
  if (/[a-z]/.test(char)) {
    return char.toUpperCase()
  }
  return char.toLowerCase()
})
```

**3) ❌ Join dengan separator yang salah**
```javascript
// ❌ SALAH — hasilnya ada koma antar karakter
['h','E','L','L','O'].join()    // 'h,E,L,L,O'
['h','E','L','L','O'].join(',') // 'h,E,L,L,O'

// ✅ BENAR — tidak ada pemisah
['h','E','L','L','O'].join('')  // 'hELLO'
```

---

## 💡 Insight Penting

> **Apa bedanya `map` vs `for...of`?**
> Keduanya melakukan iterasi, tapi `map` adalah **pendekatan fungsional** yang langsung return array baru tanpa perlu variabel sementara seperti `result`. Lebih ringkas dan modern.

> **Kenapa pakai early return pattern?**
> Daripada `if/else`, early return membuat kode lebih flat dan mudah dibaca — ketika kondisi `if` terpenuhi, fungsi langsung return tanpa perlu melihat sisa kode.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📊 [← Kembali ke Part 6: Ringkasan Algoritma for...of](06-ringkasan-algoritma-for-of.md)**
- **📊 [Lanjut ke Part 8: Ringkasan Algoritma split+map+join+ternary →](08-ringkasan-algoritma-split-map-join-ternary.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
