# 📚 Toggle Case - PART 2: VALIDASI KODE ORIGINAL

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 PART 2: VALIDASI KODE ORIGINAL 📋                       ║
║                                                                          ║
║                    Apakah Kode Sudah Sesuai Kriteria?                    ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📋 Kode Original | ✅ Yang Benar | ⚠️ Yang Perlu Diperbaiki | 📊 Kesimpulan |
|:----------------:|:------------:|:------------------------:|:-------------:|
| [Jump](#-kode-original) | [Jump](#-yang-sudah-benar) | [Jump](#️-yang-perlu-diperbaiki) | [Jump](#-kesimpulan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami cara kerja kode original
- ✅ Tahu bagian mana yang sudah benar
- ✅ Tahu kelemahan yang perlu diperbaiki di Part 3

---

## 📋 Kode Original

```javascript
//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  let result = ''

  for (const char of kalimat) {
    const code = char.charCodeAt(0)

    if (code >= 97 && code <= 122) {
      result += char.toUpperCase()
    } else {
      result += char.toLowerCase()
    }
  }

  return result
}
```

---

## ✅ Yang Sudah Benar

Kode original **sudah benar secara output** — semua test case menghasilkan nilai yang tepat:

```
tukarBesarKecil('Hello World')       → 'hELLO wORLD'      ✅
tukarBesarKecil('I aM aLAY')         → 'i Am Alay'         ✅
tukarBesarKecil('My Name is Bond!!') → 'mY nAME IS bOND!!' ✅
tukarBesarKecil('IT sHOULD bE me')   → 'it Should Be ME'   ✅
tukarBesarKecil('001-A-3-5TrdYW')    → '001-a-3-5tRDyw'    ✅
```

Logika pengecekan huruf juga sudah benar:
- `code >= 97 && code <= 122` — range ASCII huruf kecil a-z ✅
- Huruf kecil → `.toUpperCase()` ✅
- Selain huruf kecil → `.toLowerCase()` ✅

### Verifikasi Manual `'Hello World'`

| Char | charCode | Kondisi | Output |
|------|----------|---------|--------|
| `H` | 72 | bukan 97–122 → `.toLowerCase()` | `h` |
| `e` | 101 | 97–122 → `.toUpperCase()` | `E` |
| `l` | 108 | 97–122 → `.toUpperCase()` | `L` |
| `l` | 108 | 97–122 → `.toUpperCase()` | `L` |
| `o` | 111 | 97–122 → `.toUpperCase()` | `O` |
| ` ` | 32 | bukan 97–122 → `.toLowerCase()` | ` ` |
| `W` | 87 | bukan 97–122 → `.toLowerCase()` | `w` |
| `o` | 111 | 97–122 → `.toUpperCase()` | `O` |
| `r` | 114 | 97–122 → `.toUpperCase()` | `R` |
| `l` | 108 | 97–122 → `.toUpperCase()` | `L` |
| `d` | 100 | 97–122 → `.toUpperCase()` | `D` |

→ Result: **`'hELLO wORLD'`** ✅

---

## ⚠️ Yang Perlu Diperbaiki

Meskipun output benar, ada **3 kelemahan** dari sisi clean code:

### 1. Naming Convention — Bahasa Indonesia

```javascript
// ❌ Bahasa Indonesia
function tukarBesarKecil(kalimat)

// ✅ English naming convention
function toggleCase(str)
```

### 2. Magic Numbers — `97` dan `122`

```javascript
// ❌ Hanya developer yang hafal ASCII yang langsung paham
if (code >= 97 && code <= 122)

// ✅ Siapapun langsung paham maksudnya
if (/[a-z]/.test(char))
```

Angka `97` dan `122` adalah nilai ASCII untuk huruf `a` dan `z`. Pembaca kode tidak seharusnya dipaksa hafal ASCII table untuk memahami sebuah kondisi.

### 3. Kondisi `else` yang Kurang Eksplisit

```javascript
// ❌ else menangani terlalu banyak jenis karakter sekaligus:
// huruf besar, angka, simbol — tidak ada penjelasan kondisinya
} else {
  result += char.toLowerCase()
}

// ✅ kondisi if yang eksplisit — langsung jelas maksudnya
if (/[a-z]/.test(char)) {
  result += char.toUpperCase()
} else {
  result += char.toLowerCase()
}
```

> **Catatan:** Kondisi `else` yang luas ini **tidak menyebabkan bug** karena `.toLowerCase()` pada angka dan simbol tidak mengubah apapun. Tapi dari sisi readability, pembaca kode tidak langsung tahu intent yang sebenarnya.

---

## 📊 Kesimpulan

| Aspek | Status |
|-------|--------|
| Output / hasil | ✅ Benar |
| Logika toggle case | ✅ Benar |
| Naming convention | ❌ Bahasa Indonesia |
| Magic numbers (`97`, `122`) | ❌ Kurang readable |
| Eksplisit kondisi `if` | ⚠️ Kurang eksplisit |

Kode sudah menghasilkan output yang benar, tapi ada 3 hal yang perlu diperbaiki dari sisi clean code. Di Part 3 kita akan refactor bertahap.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 1: Soal & Pemahaman Kriteria](01-soal-dan-pemahaman-kriteria.md)**
- **🔧 [Lanjut ke Part 3: Proses Refactoring →](03-proses-refactoring.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
