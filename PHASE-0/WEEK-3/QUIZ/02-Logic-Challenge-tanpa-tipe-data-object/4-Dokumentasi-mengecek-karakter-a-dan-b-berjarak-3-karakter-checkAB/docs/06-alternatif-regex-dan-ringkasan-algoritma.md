# 📚 checkAB - PART 6: ALTERNATIF REGEX + RINGKASAN ALGORITMA

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         🔤 PART 6: ALTERNATIF REGEX + RINGKASAN ALGORITMA 🔤            ║
║                                                                          ║
║              Solusi Paling Ringkas dengan Regular Expression             ║
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
| [Jump](#-kode-alternatif-2--regex) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja regex untuk mencocokkan pola di string
- ✅ Tahu arti titik `.` sebagai wildcard di regex
- ✅ Mengenal kapan regex cocok dipakai dan kapan sebaiknya dihindari

---

## ✅ Kode Alternatif 2 — Regex

```javascript
function checkAB(str) {
  return /a...b|b...a/.test(str)
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
Gunakan regex /a...b|b...a/ untuk mencari pola di dalam string
  a...b → huruf a, diikuti tepat 3 karakter apapun, diikuti huruf b
  b...a → huruf b, diikuti tepat 3 karakter apapun, diikuti huruf a
.test() return true jika pola ditemukan, false jika tidak
```

---

### **Step-by-Step (Detail):**

#### 🟣 Definisi Fungsi:

1. `function checkAB(str)`
   - `str` — string input yang akan dicek
   - **return** — `true` jika pola ditemukan, `false` jika tidak

#### 🔵 Satu Baris Logika:

2. **`/a...b|b...a/`** — Regex pattern
   - `a` — cocokkan huruf `a`
   - `...` — cocokkan **tepat 3 karakter apapun** (titik `.` di regex = karakter apapun kecuali newline)
   - `b` — cocokkan huruf `b`
   - `|` — operator OR, cek pola kiri atau kanan
   - `b...a` — kebalikannya, cocokkan `b` lalu 3 karakter lalu `a`

3. **`.test(str)`**
   - Method regex yang return `true` jika pattern ditemukan di dalam `str`
   - Return `false` jika tidak ditemukan

---

### **Visualisasi untuk `str = 'barbarian'`:**

```
┌──────────────────────────────────────────────────────────────────┐
│  str = 'barbarian'                                               │
│  pattern = /a...b|b...a/                                         │
│                                                                  │
│  Coba cocokkan pola a...b dari kiri ke kanan:                    │
│  'arbi' → a-r-b-i → a...i? ❌ (karakter ke-4 bukan b)           │
│  'aria' → a-r-i-a → a...a? ❌ (karakter ke-4 bukan b)           │
│                                                                  │
│  Coba cocokkan pola b...a dari kiri ke kanan:                    │
│  'barb' → b-a-r-b → b...b? ❌ (karakter ke-4 bukan a)           │
│  'bari' → b-a-r-i → b...i? ❌ (karakter ke-4 bukan a)           │
│  index 3: 'b-a-r-i-a' → b...a ✅ return true                    │
└──────────────────────────────────────────────────────────────────┘
```

---

### **Keywords:**
- 🔍 **`/pattern/`** — regex literal di JavaScript
- **`.`** — cocokkan satu karakter apapun (kecuali newline)
- **`|`** — operator OR di regex
- 📝 **`.test(str)`** — return `true` jika pattern ditemukan di string

---

### **Kompleksitas:**

| | Nilai | Penjelasan |
|---|---|---|
| Waktu | **O(n)** | Regex scan string satu kali |
| Memori | **O(1)** | Tidak ada struktur data tambahan |

---

### **Kapan Pakai:**
- ✅ Butuh solusi singkat dan ringkas
- ✅ Sudah familiar dengan regex
- ❌ Hindari jika tim tidak familiar regex — susah dibaca dan di-debug
- ❌ Hindari jika pattern lebih kompleks — regex bisa cepat jadi tidak terbaca

---

### **Pitfalls (Jebakan Umum):**

**1) ❌ Salah paham arti titik `.` di regex**
```javascript
// ⚠️ PERLU DIINGAT — titik di regex bukan titik biasa
/a...b/ // → a + 3 karakter APAPUN + b
/a\.\.\.b/ // → a + titik + titik + titik + b (literal)
```

**2) ❌ Lupa bahwa `.` tidak cocok dengan newline**
```javascript
// ⚠️ EDGE CASE — jika string mengandung newline di antara a dan b
checkAB('a\n\n\nb') // → false, padahal jaraknya 3!

// ✅ Fix jika perlu handle newline
/a[\s\S]{3}b|b[\s\S]{3}a/.test(str)
// [\s\S] = cocokkan karakter apapun TERMASUK newline
```

---

### **💡 Insight Penting:**

> **Kenapa `.` di regex cocok dengan "karakter apapun"?**
> Di regex, titik `.` adalah wildcard yang cocok dengan karakter apapun kecuali newline (`\n`). Jadi `a...b` artinya: huruf `a`, lalu 3 karakter apapun, lalu huruf `b` — persis seperti yang dibutuhkan soal ini.

> **Kapan regex adalah pilihan terbaik?**
> Ketika pattern-nya simpel dan tim sudah familiar. Untuk soal ini regex sangat elegan — tapi begitu pattern makin kompleks, lebih baik kembali ke pendekatan loop yang lebih mudah di-debug.

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Apakah `/a...b|b...a/` bisa disingkat jadi satu pola saja?</strong></summary>

Tidak semudah itu. Regex tidak punya cara bawaan untuk menyatakan "a atau b, lalu 3 karakter, lalu b atau a (kebalikannya)". Kita tetap butuh dua pola yang dipisah `|` agar keduanya dicek secara terpisah dan benar.

</details>

<details>
<summary><strong>❓ Apa kelemahan terbesar pendekatan regex di sini?</strong></summary>

Readability untuk yang belum familiar regex. Kode `for` loop atau `.some()` jauh lebih mudah dibaca dan di-debug oleh developer yang baru mengenal JavaScript, sedangkan `/a...b|b...a/` membutuhkan pengetahuan regex untuk dipahami sekilas.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔀 [← Kembali ke Part 5: Alternatif `some` + Ringkasan Algoritma](05-alternatif-some-dan-ringkasan-algoritma.md)**
- **📊 [Lanjut ke Part 7: Perbandingan & Kesimpulan →](07-perbandingan-dan-kesimpulan.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
