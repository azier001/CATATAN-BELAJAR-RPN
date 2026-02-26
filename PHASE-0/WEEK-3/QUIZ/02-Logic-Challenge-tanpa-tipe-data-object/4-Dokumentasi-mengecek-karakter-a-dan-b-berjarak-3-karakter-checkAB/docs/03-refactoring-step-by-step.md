# 📚 checkAB - PART 3: REFACTORING STEP-BY-STEP

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         🔧 PART 3: REFACTORING STEP-BY-STEP 🔧                          ║
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

| 🔧 Tahap 1 | 🔧 Tahap 2 | 🔧 Tahap 3 |
|:----------:|:----------:|:----------:|
| [Jump](#-tahap-1--fix-bug-loop) | [Jump](#-tahap-2--optimasi-single-loop) | [Jump](#-tahap-3--clean-code--naming-convention) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami proses refactoring secara bertahap
- ✅ Tahu cara memperbaiki silent bug pada nested loop
- ✅ Tahu cara mengoptimalkan dari O(n²) ke O(n)
- ✅ Bisa menulis kode yang lebih efisien dan readable

---

## 🔧 Tahap 1 — Fix Bug Loop

Seperti yang ditemukan di Part 2, penggunaan `maxLength` dan `minLength` bisa menyebabkan silent bug jika `indexesB` lebih panjang dari `indexesA`.

```javascript
// ❌ Sebelum — silent bug
const maxLength = Math.max(indexesA.length, indexesB.length)
const minLength = Math.min(indexesA.length, indexesB.length)

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < minLength; j++) {
    const diff = Math.abs(indexesA[i] - indexesB[j]) // indexesA[i] bisa undefined!
  }
}
```

```javascript
// ✅ Sesudah — loop dengan panjang masing-masing
function checkAB(str) {
  const indexesA = []
  const indexesB = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') indexesA.push(i)
    if (str[i] === 'b') indexesB.push(i)
  }

  for (let i = 0; i < indexesA.length; i++) {
    for (let j = 0; j < indexesB.length; j++) {
      const diff = Math.abs(indexesA[i] - indexesB[j])
      if (diff === 4) return true
    }
  }

  return false
}
```

**Yang berubah:**

| Sebelum | Sesudah | Alasan |
|---------|---------|--------|
| `i < maxLength` | `i < indexesA.length` | Tidak ada asumsi mana yang lebih panjang |
| `j < minLength` | `j < indexesB.length` | Loop sesuai panjang masing-masing |
| Variable `maxLength` & `minLength` | Dihapus | Tidak diperlukan lagi |

---

## 🔧 Tahap 2 — Optimasi Single Loop

Kode Tahap 1 masih menggunakan **nested loop O(n²)** dan **dua array** untuk menyimpan semua index. Padahal kita bisa cek langsung saat iterasi — cukup lihat 4 langkah ke belakang (`str[i - 4]`).

```
Index:  0  1  2  3  4  5  6  7  8
Char:   b  a  r  b  a  r  i  a  n
                     ↑
                    i=4
              str[i-4] = str[0] = 'b' ✅
```

```javascript
function checkAB(str) {
  for (let i = 4; i < str.length; i++) {
    if ((str[i] === 'a' && str[i - 4] === 'b') || (str[i] === 'b' && str[i - 4] === 'a')) return true
  }

  return false
}
```

> Loop dimulai dari `i = 4` karena jika `i < 4`, maka `str[i - 4]` akan mengakses index negatif yang tidak ada.

**Yang berubah:**

| | Tahap 1 | Tahap 2 |
|--|---------|---------|
| Simpan semua index | ✅ 2 array | ✅ Tidak perlu |
| Loop | Nested (2 loop) | Single loop |
| Kompleksitas waktu | O(n²) | **O(n)** |
| Kompleksitas memori | O(n) | **O(1)** |

---

## 🔧 Tahap 3 — Clean Code & Naming Convention

Kondisi `if` di Tahap 2 terlalu panjang dan padat. Pisahkan ke variable yang berbicara agar lebih mudah dibaca.

```javascript
// ❌ Sebelum — kondisi terlalu padat
if ((str[i] === 'a' && str[i - 4] === 'b') || (str[i] === 'b' && str[i - 4] === 'a'))
```

```javascript
// ✅ Sesudah — setiap kondisi punya nama yang jelas
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

**Yang berubah:**

| Sebelum | Sesudah | Alasan |
|---------|---------|--------|
| `str[i]` langsung di `if` | `currentChar` | Lebih deskriptif |
| `str[i - 4]` langsung di `if` | `prevChar` | Lebih deskriptif |
| Kondisi panjang di `if` | `isAtoB \|\| isBtoA` | Niat kode langsung terbaca |

---

## 📊 Perjalanan Refactoring

```
Kode Original  →  Silent bug (maxLength/minLength)
    Tahap 1    →  Fix bug, nested loop O(n²)
    Tahap 2    →  Single loop O(n), logika i - 4
    Tahap 3    →  Clean code, readable naming ✅
```

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa Tahap 2 lebih baik dari Tahap 1?</strong></summary>

Tahap 1 masih menyimpan semua index `a` dan `b` ke dua array terpisah, lalu membandingkannya dengan nested loop O(n²). Tahap 2 menyadari bahwa kita hanya butuh lihat 4 langkah ke belakang di setiap posisi — tidak perlu array tambahan sama sekali, cukup satu loop O(n).

</details>

<details>
<summary><strong>❓ Kenapa loop dimulai dari i = 4 bukan i = 0?</strong></summary>

Karena di setiap iterasi kita mengakses `str[i - 4]`. Jika `i = 0`, maka `str[0 - 4] = str[-4]` yang bernilai `undefined`. Dengan mulai dari `i = 4`, nilai minimum `i - 4` adalah `0` — selalu index yang valid.

</details>

<details>
<summary><strong>❓ Apa manfaat memisahkan kondisi ke variable?</strong></summary>

Kondisi panjang di dalam `if` membutuhkan waktu untuk dipahami. Dengan memisahkannya ke variable `isAtoB` dan `isBtoA`, siapapun yang membaca kode langsung mengerti maksudnya tanpa perlu mengurai kondisinya satu per satu.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 2: Analisis Kode Original](02-analisis-kode-original.md)**
- **📊 [Lanjut ke Part 4: Kode Final + Ringkasan Algoritma →](04-kode-final-dan-ringkasan-algoritma.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
