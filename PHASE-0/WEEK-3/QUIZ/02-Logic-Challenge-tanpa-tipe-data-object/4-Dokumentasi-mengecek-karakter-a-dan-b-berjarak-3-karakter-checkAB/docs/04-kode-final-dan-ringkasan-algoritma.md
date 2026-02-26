# 📚 checkAB - PART 4: KODE FINAL + RINGKASAN ALGORITMA

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         ✅ PART 4: KODE FINAL + RINGKASAN ALGORITMA ✅                  ║
║                                                                          ║
║              Hasil Akhir Refactoring & Cara Kerjanya                     ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| ✅ Kode Final | 🧪 Test Cases | 📖 Ringkasan Algoritma |
|:------------:|:-------------:|:----------------------:|
| [Jump](#-kode-final) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami kode final hasil refactoring
- ✅ Tahu cara kerja algoritma secara detail step-by-step
- ✅ Mengenal pitfalls umum dan cara menghindarinya

---

## ✅ Kode Final

```javascript
function checkAB(str) {
  for (let i = 4; i < str.length; i++) {
    const currentChar = str[i]
    const prevChar = str[i - 4]

    const isAtoB = currentChar === 'b' && prevChar === 'a'
    const isBtoA = currentChar === 'a' && prevChar === 'b'

    if (isAtoB || isBtoA) return true
  }

  return false
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
Loop setiap karakter dari str mulai index 4
  Ambil currentChar (index i) dan prevChar (index i - 4)
  Jika currentChar='b' dan prevChar='a' → return true
  Jika currentChar='a' dan prevChar='b' → return true
Jika loop selesai tanpa ketemu → return false
```

---

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function checkAB(str)`
   - `str` — string input yang akan dicek
   - **return** — `true` jika ditemukan pasangan `a` dan `b` berjarak tepat 3 karakter, `false` jika tidak

#### 🔄 Di Dalam Loop `for (let i = 4; i < str.length; i++)`:

2. **Loop mulai dari index 4**
   - Dimulai dari `i = 4` bukan `i = 0` karena kita butuh melihat 4 langkah ke belakang (`i - 4`)
   - Jika mulai dari `i = 0`, maka `str[i - 4]` akan mengakses index negatif yang tidak ada

3. **`const currentChar = str[i]`**
   - Karakter di posisi sekarang

4. **`const prevChar = str[i - 4]`**
   - Karakter 4 langkah sebelum posisi sekarang
   - Jarak 4 index = dipisah 3 karakter di antaranya

5. **`const isAtoB = currentChar === 'b' && prevChar === 'a'`**
   - Cek pola `a...b` — `prevChar` adalah `a`, `currentChar` adalah `b`

6. **`const isBtoA = currentChar === 'a' && prevChar === 'b'`**
   - Cek pola `b...a` — `prevChar` adalah `b`, `currentChar` adalah `a`

7. **`if (isAtoB || isBtoA) return true`**
   - Jika salah satu pola ditemukan, langsung return `true` tanpa lanjut iterasi

#### 🔵 Di Luar Loop:

8. **`return false`**
   - Jika loop selesai dan tidak ada pola yang cocok, kembalikan `false`

---

### **Visualisasi untuk `str = 'barbarian'`:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Index:  0  1  2  3  4  5  6  7  8                             │
│  Char:   b  a  r  b  a  r  i  a  n                             │
│                                                                 │
│  i=4: currentChar='a', prevChar=str[0]='b'                     │
│       isAtoB = ('a'==='b') = false                             │
│       isBtoA = ('a'==='a' && 'b'==='b') = true ✅ return true  │
└─────────────────────────────────────────────────────────────────┘
```

---

### **Keywords:**
- 📍 **`i - 4`** — mengakses karakter 4 posisi sebelumnya (jarak 3 karakter di antaranya)
- 🔀 **`isAtoB`** — pola `a` diikuti `b` setelah 3 karakter
- 🔀 **`isBtoA`** — pola `b` diikuti `a` setelah 3 karakter
- ⚡ **Early return** — langsung return begitu pola ditemukan, tidak perlu selesaikan loop

---

### **Kompleksitas:**

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n)** | Loop satu kali sepanjang string |
| Memori | **O(1)** | Tidak ada array tambahan, hanya variable |

---

### **Kapan Pakai:**
- ✅ String panjang — efisien karena O(n)
- ✅ Butuh memori minimal — tidak ada array tambahan
- ✅ Ingin early return — berhenti segera saat pola ditemukan

---

### **Pitfalls (Jebakan Umum):**

**1) ❌ Loop mulai dari index 0**
```javascript
// ❌ SALAH — str[i - 4] bisa mengakses index negatif
for (let i = 0; i < str.length; i++)

// ✅ BENAR — aman karena i - 4 minimal = 0
for (let i = 4; i < str.length; i++)
```

**2) ❌ Menggunakan diff === 4 tanpa konteks yang jelas**
```javascript
// ❌ KURANG READABLE — angka 4 terasa seperti magic number
if (Math.abs(indexA - indexB) === 4)

// ✅ LEBIH READABLE — niat kode langsung terbaca
const isAtoB = currentChar === 'b' && prevChar === 'a'
const isBtoA = currentChar === 'a' && prevChar === 'b'
```

**3) ❌ Tidak memisahkan kondisi ke variable**
```javascript
// ❌ KURANG READABLE — terlalu padat, susah dibaca sekilas
if ((str[i] === 'a' && str[i-4] === 'b') || (str[i] === 'b' && str[i-4] === 'a'))

// ✅ LEBIH READABLE — setiap kondisi punya nama yang jelas
if (isAtoB || isBtoA)
```

---

### **💡 Insight Penting:**

> **Kenapa jarak 3 karakter = selisih index 4?**
> Karena 3 karakter di *antara* dua posisi berarti posisinya berbeda 4 index. Contoh: index 0 dan index 4 — karakternya ada di posisi 1, 2, 3 (3 karakter di antaranya).

> **Kenapa tidak perlu simpan semua index `a` dan `b` terlebih dahulu?**
> Karena kita hanya butuh lihat 4 langkah ke belakang di setiap posisi. Informasi itu sudah tersedia langsung dari string tanpa perlu array tambahan.

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Apa yang terjadi jika string lebih pendek dari 5 karakter?</strong></summary>

Loop tidak akan pernah berjalan karena kondisi `i = 4; i < str.length` tidak terpenuhi jika panjang string ≤ 4. Fungsi langsung return `false` — yang memang benar, karena tidak mungkin ada jarak 3 karakter jika stringnya terlalu pendek.

</details>

<details>
<summary><strong>❓ Kenapa `isAtoB` dan `isBtoA` tidak digabung jadi satu kondisi?</strong></summary>

Bisa saja digabung, tapi memisahkannya ke dua variable membuat kode jauh lebih mudah dibaca. Nama `isAtoB` dan `isBtoA` langsung menjelaskan dua arah yang valid — dari `a` ke `b`, atau dari `b` ke `a`.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔧 [← Kembali ke Part 3: Refactoring Step-by-Step](03-refactoring-step-by-step.md)**
- **🔀 [Lanjut ke Part 5: Alternatif `some` + Ringkasan Algoritma →](05-alternatif-some-dan-ringkasan-algoritma.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
