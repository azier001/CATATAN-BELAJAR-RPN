# 📚 Toggle Case - PART 4: KODE ALTERNATIF

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              🔀 PART 4: KODE ALTERNATIF 🔀                              ║
║                                                                          ║
║              Berbagai Pendekatan untuk Solusi yang Sama                  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔀 Alternatif 1 | 🔀 Alternatif 2 | 🔀 Alternatif 3 | 📊 Perbandingan |
|:--------------:|:--------------:|:--------------:|:---------------:|
| [Jump](#-alternatif-1--split--map--join--ifelse) | [Jump](#-alternatif-2--split--map--join--ternary) | [Jump](#-alternatif-3--replace--regex) | [Jump](#-perbandingan-semua-versi) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Mengenal 3 pendekatan alternatif yang berbeda
- ✅ Memahami perbedaan `for...of` vs `map` vs `replace`
- ✅ Bisa memilih pendekatan yang paling sesuai konteks

---

## 📋 Kode Refactoring (Pembanding)

```javascript
// Versi refactoring — sebagai pembanding
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

---

## 🔀 Alternatif 1 — `split` + `map` + `join` + `if/else`

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

**Perbedaan dari versi refactoring:**

| Aspek | Refactoring | Alternatif 1 |
|-------|-------------|--------------|
| Pendekatan | Imperatif (`for...of`) | Fungsional (`map`) |
| Variable sementara | `result` | Tidak ada |
| Pattern | `if/else` | Early return |
| Keterbacaan pemula | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

> **Apa itu early return?**
> Daripada `if/else`, kondisi `if` langsung `return` dan keluar dari fungsi. Kode setelah blok `if` hanya dieksekusi jika kondisi `false` — membuat kode lebih flat dan mudah dibaca.

---

## 🔀 Alternatif 2 — `split` + `map` + `join` + Ternary

```javascript
function toggleCase(str) {
  return str.split('').map(char => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase()).join('')
}
```

**Perbedaan dari Alternatif 1:**

| Aspek | Alternatif 1 | Alternatif 2 |
|-------|--------------|--------------|
| Kondisi | `if/else` + early return | Ternary operator |
| Jumlah baris | 7 baris | 1 baris |
| Keterbacaan pemula | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Keringkasan | ⭐⭐⭐ | ⭐⭐⭐⭐ |

> **Kapan pakai ternary?**
> Ternary cocok untuk kondisi **sederhana satu baris**. Jika kondisinya kompleks atau punya lebih dari dua cabang, `if/else` jauh lebih readable.

---

## 🔀 Alternatif 3 — `replace` + Regex

```javascript
function toggleCase(str) {
  return str.replace(/[a-zA-Z]/g, (char) => /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase())
}
```

**Perbedaan dari versi lainnya:**

| Aspek | split+map+join | Alternatif 3 |
|-------|----------------|--------------|
| Butuh `split` & `join` | Ya | Tidak |
| Proses angka & simbol | Masuk callback, tidak berubah | Tidak masuk callback sama sekali |
| Keringkasan | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Familiar untuk pemula | ⭐⭐⭐⭐ | ⭐⭐⭐ |

> **Kenapa `replace` tidak butuh `split` dan `join`?**
> Karena `replace` bekerja langsung pada string dan return string baru. Regex `/[a-zA-Z]/g` juga otomatis menyaring — hanya huruf yang masuk callback, angka dan simbol langsung dilewati.

---

## 📊 Perbandingan Semua Versi

| Versi | Pendekatan | Readability | Keringkasan | Cocok untuk |
|-------|-----------|:-----------:|:-----------:|-------------|
| **Refactoring** | `for...of` + regex | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Pemula, debugging |
| **Alternatif 1** | `split` + `map` + `join` + `if/else` | ⭐⭐⭐⭐ | ⭐⭐⭐ | Functional style, readable |
| **Alternatif 2** | `split` + `map` + `join` + ternary | ⭐⭐⭐ | ⭐⭐⭐⭐ | Ringkas, familiar ternary |
| **Alternatif 3** | `replace` + regex | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Ringkas, familiar regex |

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Mana yang paling direkomendasikan?</strong></summary>

Tidak ada yang paling benar — tergantung konteks. Untuk belajar dan debugging → **Refactoring** (`for...of`). Untuk kode production yang ringkas → **Alternatif 3** (`replace`). Untuk tim yang familiar dengan functional style → **Alternatif 1** atau **2**.

</details>

<details>
<summary><strong>❓ Kenapa split('') bukan split(' ')?</strong></summary>

`split('')` memecah string per karakter, sedangkan `split(' ')` memecah per spasi (per kata). Kita butuh per karakter agar bisa memproses setiap huruf satu per satu.

</details>

<details>
<summary><strong>❓ Apa arti flag /g pada regex di Alternatif 3?</strong></summary>

Flag `/g` artinya **global** — proses semua karakter yang cocok, bukan hanya yang pertama. Tanpa `/g`, `replace` hanya akan memproses huruf pertama saja.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔧 [← Kembali ke Part 3: Proses Refactoring](03-proses-refactoring.md)**
- **🤖 [Lanjut ke Part 5: Analisa Kode AI →](05-analisa-kode-ai.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
