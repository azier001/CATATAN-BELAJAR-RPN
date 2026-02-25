# 📚 Toggle Case - PART 8: RINGKASAN ALGORITMA — SPLIT + MAP + JOIN + TERNARY

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   📊 PART 8: RINGKASAN ALGORITMA — SPLIT + MAP + JOIN + TERNARY 📊      ║
║                                                                          ║
║                    Step-by-Step Detail Kode Alternatif 2                 ║
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
- ✅ Memahami penggunaan ternary operator di dalam `map`
- ✅ Tahu perbedaan versi ini vs Alternatif 1 (if/else)
- ✅ Mengenali jebakan umum yang sering terjadi

---

## 💡 Konsep Inti

> 💡 **Best for:** Kode ringkas, developer yang sudah familiar dengan ternary

```
Split str menjadi array of characters
Map setiap char dengan ternary:
  char huruf kecil ? return uppercase : return lowercase
Join array kembali menjadi string
Return hasilnya
```

---

## 📋 Kode

```javascript
function toggleCase(str) {
  return str.split('').map(char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()).join('')
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

### 🔄 Tahap 2 — `.map(char => ternary)`:

**2. Map setiap karakter dengan ternary**
- `char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()`
- Arrow function **tanpa kurung kurawal `{}`** dan **tanpa `return`** — karena hanya satu ekspresi
- Ternary langsung di-return secara implicit

**3. Anatomi ternary operator**
```
kondisi               ? nilai jika true        : nilai jika false
/[a-z]/.test(char)   ? char.toUpperCase()     : char.toLowerCase()
```
- `/[a-z]/.test(char)` → cek apakah `char` huruf kecil
- Jika `true` → `char.toUpperCase()`
- Jika `false` → `char.toLowerCase()`

---

### 🔵 Tahap 3 — `.join('')`:

**4. Gabungkan array kembali menjadi string**
- `.join('')` — menggabungkan semua elemen array menjadi satu string tanpa pemisah
- Contoh: `['h', 'E', 'L', 'L', 'O']` → `'hELLO'`

---

### 🔵 Tahap 4:

**5. Return**
- Seluruh operasi `split().map().join()` langsung di-return dalam satu baris
- Tidak membutuhkan variabel sementara

---

## 🔍 Visualisasi

**Untuk `str = 'Hello'`:**
```
Step 1 - split:
'Hello'.split('') → ['H', 'e', 'l', 'l', 'o']

Step 2 - map dengan ternary:
'H' → /[a-z]/.test('H') = false → char.toLowerCase() → 'h'
'e' → /[a-z]/.test('e') = true  → char.toUpperCase() → 'E'
'l' → /[a-z]/.test('l') = true  → char.toUpperCase() → 'L'
'l' → /[a-z]/.test('l') = true  → char.toUpperCase() → 'L'
'o' → /[a-z]/.test('o') = true  → char.toUpperCase() → 'O'
→ ['h', 'E', 'L', 'L', 'O']

Step 3 - join:
['h', 'E', 'L', 'L', 'O'].join('') → 'hELLO'

return 'hELLO' ✅
```

---

## ⚠️ Pitfalls

**1) ❌ Pakai kurung kurawal tapi lupa return**
```javascript
// ❌ SALAH — pakai kurung kurawal tapi tidak ada return, hasilnya undefined
str.split('').map(char => { /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase() }).join('')

// ✅ BENAR — tanpa kurung kurawal, implicit return
str.split('').map(char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()).join('')

// ✅ BENAR juga — pakai kurung kurawal dengan explicit return
str.split('').map(char => { return /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase() }).join('')
```

**2) ❌ Urutan true/false ternary terbalik**
```javascript
// ❌ SALAH — huruf kecil malah jadi lowercase, huruf besar jadi uppercase
/[a-z]/.test(char) ? char.toLowerCase() : char.toUpperCase()

// ✅ BENAR — huruf kecil jadi uppercase, selain itu jadi lowercase
/[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()
```

**3) ❌ Ternary bersarang — terlalu kompleks**
```javascript
// ❌ HINDARI — susah dibaca, lebih baik pakai if/else jika kondisi lebih dari satu
/[a-z]/.test(char) ? char.toUpperCase() : /[A-Z]/.test(char) ? char.toLowerCase() : char

// ✅ LEBIH BAIK — pakai if/else jika kondisi kompleks
if (/[a-z]/.test(char)) return char.toUpperCase()
if (/[A-Z]/.test(char)) return char.toLowerCase()
return char
```

---

## 💡 Insight Penting

> **Kapan pakai ternary, kapan pakai if/else?**
> Ternary cocok untuk kondisi **sederhana satu baris**. Jika kondisinya kompleks atau punya lebih dari dua cabang, `if/else` jauh lebih readable dan lebih direkomendasikan.

> **Apa itu implicit return?**
> Arrow function tanpa kurung kurawal `{}` secara otomatis me-return ekspresi di dalamnya. Jadi `char => char.toUpperCase()` sama dengan `char => { return char.toUpperCase() }`.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📊 [← Kembali ke Part 7: Ringkasan Algoritma split+map+join+if/else](07-ringkasan-algoritma-split-map-join-if-else.md)**
- **📊 [Lanjut ke Part 9: Ringkasan Algoritma replace+regex →](09-ringkasan-algoritma-replace-regex.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
