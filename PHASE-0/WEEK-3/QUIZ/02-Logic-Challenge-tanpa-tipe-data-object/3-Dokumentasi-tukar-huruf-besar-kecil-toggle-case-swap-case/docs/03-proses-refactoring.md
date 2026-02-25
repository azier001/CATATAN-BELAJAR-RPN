# 📚 Toggle Case - PART 3: PROSES REFACTORING

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              🔧 PART 3: PROSES REFACTORING 🔧                           ║
║                                                                          ║
║              Dari Kode Original ke Kode yang Lebih Bersih                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔧 Step 1 | 🔧 Step 2 | 🔧 Step 3 | ✅ Hasil Akhir |
|:---------:|:---------:|:---------:|:--------------:|
| [Jump](#-step-1--perbaiki-naming-convention) | [Jump](#-step-2--hilangkan-magic-numbers) | [Jump](#-step-3--perjelas-kondisi-if) | [Jump](#-hasil-akhir-refactoring) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami proses refactoring secara bertahap
- ✅ Tahu alasan di balik setiap perubahan
- ✅ Bisa menulis kode yang lebih clean dan readable

---

## 📋 Kode Sebelum Refactoring

```javascript
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

**3 masalah yang perlu diperbaiki:**
1. Naming convention — Bahasa Indonesia
2. Magic numbers — `97` dan `122`
3. Kondisi `if` yang kurang eksplisit

---

## 🔧 Step 1 — Perbaiki Naming Convention

Ganti semua nama ke bahasa Inggris yang sesuai konteks.

```javascript
function toggleCase(str) {
  let result = ''

  for (const char of str) {
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

**Yang berubah:**

| Sebelum | Sesudah | Alasan |
|---------|---------|--------|
| `tukarBesarKecil` | `toggleCase` | Nama yang umum digunakan untuk kasus ini |
| `kalimat` | `str` | Nama parameter string yang generik dan umum |

---

## 🔧 Step 2 — Hilangkan Magic Numbers

Ganti `charCodeAt` dan angka ASCII dengan regex yang lebih readable.

```javascript
function toggleCase(str) {
  let result = ''

  for (const char of str) {
    if (/[a-z]/.test(char)) {
      result += char.toUpperCase()
    } else {
      result += char.toLowerCase()
    }
  }

  return result
}
```

**Yang berubah:**

| Sebelum | Sesudah | Alasan |
|---------|---------|--------|
| `const code = char.charCodeAt(0)` | *(dihapus)* | Tidak dibutuhkan lagi |
| `code >= 97 && code <= 122` | `/[a-z]/.test(char)` | Tidak perlu hafal ASCII, langsung paham maksudnya |

> **Kenapa regex lebih baik?**
> `97` dan `122` adalah nilai ASCII untuk `a` dan `z`. Pembaca kode tidak seharusnya dipaksa hafal ASCII table untuk memahami sebuah kondisi. `/[a-z]/` jauh lebih eksplisit dan self-explanatory.

---

## 🔧 Step 3 — Perjelas Kondisi `if`

Kondisi `if` yang ada sudah menggunakan regex, tapi kita perlu memastikan kondisinya benar-benar eksplisit hanya untuk huruf kecil.

**Mengapa `/[a-z]/.test(char)` lebih baik dari `char === char.toLowerCase()`?**

```javascript
// ⚠️ Kondisi yang kurang eksplisit
if (char === char.toLowerCase())
// true untuk: huruf kecil ✅, angka ⚠️, simbol ⚠️

// ✅ Kondisi yang eksplisit
if (/[a-z]/.test(char))
// true hanya untuk: huruf kecil ✅
```

Kode akhir setelah Step 3 tetap sama dengan Step 2 karena kita sudah menggunakan `/[a-z]/` sejak Step 2 — kondisinya sudah eksplisit. ✅

---

## ✅ Hasil Akhir Refactoring

```javascript
function toggleCase(str) {
  let result = ''

  for (const char of str) {
    if (/[a-z]/.test(char)) {
      result += char.toUpperCase()
    } else {
      result += char.toLowerCase()
    }
  }

  return result
}
```

**Ringkasan perubahan:**

| Aspek | Sebelum | Sesudah |
|-------|---------|---------|
| Nama function | `tukarBesarKecil` | `toggleCase` |
| Nama parameter | `kalimat` | `str` |
| Cek huruf kecil | `code >= 97 && code <= 122` | `/[a-z]/.test(char)` |
| Variable `code` | Ada | Dihapus |

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa tidak pakai char === char.toLowerCase() saja?</strong></summary>

Karena kondisi tersebut bernilai `true` untuk huruf kecil, angka, **dan** simbol sekaligus — tidak hanya huruf kecil. Meskipun outputnya tetap benar (karena `.toUpperCase()` pada angka/simbol tidak mengubah apapun), kondisi ini tidak mencerminkan intent yang sebenarnya dan bisa membingungkan pembaca kode.

</details>

<details>
<summary><strong>❓ Apa itu magic numbers dan kenapa perlu dihindari?</strong></summary>

Magic numbers adalah angka yang muncul langsung di kode tanpa penjelasan konteksnya. `97` dan `122` adalah contohnya — hanya developer yang hafal ASCII table yang langsung paham artinya. Kode yang baik harus bisa "berbicara sendiri" tanpa memaksa pembaca mencari referensi lain.

</details>

<details>
<summary><strong>❓ Kenapa nama parameter diganti dari kalimat ke str?</strong></summary>

`str` adalah konvensi umum untuk parameter bertipe string di JavaScript. Selain itu, input fungsi ini tidak selalu berupa kalimat — bisa berupa kata, campuran angka dan huruf, atau simbol. Nama `str` lebih generik dan tepat.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 2: Validasi Kode Original](02-validasi-kode-original.md)**
- **📊 [Lanjut ke Part 4: Kode Alternatif →](04-kode-alternatif.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
