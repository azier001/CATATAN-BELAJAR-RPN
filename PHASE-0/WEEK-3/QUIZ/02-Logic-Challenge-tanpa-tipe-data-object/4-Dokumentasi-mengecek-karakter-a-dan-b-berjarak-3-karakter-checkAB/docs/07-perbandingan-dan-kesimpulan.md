# 📚 checkAB - PART 7: PERBANDINGAN & KESIMPULAN

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         📊 PART 7: PERBANDINGAN & KESIMPULAN 📊                         ║
║                                                                          ║
║              Semua Solusi Dibandingkan & Apa yang Sudah Dipelajari       ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 📊 Semua Kode | 🏆 Rekomendasi | 🎯 Kesimpulan | 📚 Referensi |
|:-------------:|:--------------:|:-------------:|:------------:|
| [Jump](#-semua-kode) | [Jump](#-rekomendasi) | [Jump](#-kesimpulan) | [Jump](#-referensi) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Bisa membandingkan semua solusi secara objektif
- ✅ Tahu solusi mana yang paling tepat untuk konteks tertentu
- ✅ Punya gambaran menyeluruh tentang apa yang dipelajari di sesi ini

---

## 📊 Semua Kode

**For Loop (Kode Final)**
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

**Alternatif 1 — `some`**
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

**Alternatif 2 — Regex**
```javascript
function checkAB(str) {
  return /a...b|b...a/.test(str)
}
```

**Alternatif 3 — Kode Original (Bahan Belajar)**
```javascript
function checkAB(str) {
  const indexesA = []
  const indexesB = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') indexesA.push(i)
    if (str[i] === 'b') indexesB.push(i)
  }

  for (let i = 0; i < indexesA.length; i++) {
    for (let j = 0; j < indexesB.length; j++) {
      if (Math.abs(indexesA[i] - indexesB[j]) === 4) return true
    }
  }

  return false
}
```

---

## 📋 Tabel Perbandingan

| Solusi | Waktu | Memori | Readability | Cocok untuk |
|--------|-------|--------|-------------|-------------|
| **For Loop** | O(n) | O(1) | ⭐⭐⭐⭐ | Sweet spot performa & readability |
| **`some`** | O(n) | O(n) | ⭐⭐⭐⭐⭐ | Prioritas readability, functional style |
| **Regex** | O(n) | O(1) | ⭐⭐ | Solusi ringkas, familiar regex |
| **Kode Original** | O(n²) | O(n) | ⭐⭐⭐ | Belajar, debugging step-by-step |

---

## 🏆 Rekomendasi

### Untuk konteks belajar
→ **Kode Original** — alurnya paling eksplisit, mudah di-trace step-by-step

### Untuk kode production
→ **For Loop (Kode Final)** — sweet spot antara performa O(n), memori O(1), dan readability yang baik

### Untuk gaya functional programming
→ **`some`** — paling ekspresif, nama method-nya sendiri sudah menjelaskan maksudnya

### Untuk solusi cepat satu baris
→ **Regex** — sangat ringkas, tapi pastikan tim familiar dengan regex

---

## 🎯 Kesimpulan

### Yang Dipelajari di Sesi Ini

**1. Analisis Bug**
- `indexOf()` hanya ambil index pertama — tidak bisa handle banyak kemunculan
- `maxLength/minLength` di nested loop bisa sebabkan silent bug jika asumsi urutan panjang array salah

**2. Proses Refactoring**
- Perbaikan bug tidak harus sekaligus — bisa bertahap agar lebih mudah dipahami
- Memisahkan kondisi panjang ke variable yang deskriptif membuat kode jauh lebih mudah dibaca

**3. Optimasi Algoritma**
- Nested loop O(n²) bisa direduksi ke O(n) dengan mengubah cara pandang: cukup lihat `str[i - 4]` di setiap iterasi
- Tidak perlu simpan semua index jika informasinya sudah tersedia langsung dari string

**4. Naming Convention**
- Nama variable yang baik membuat kondisi kompleks menjadi mudah dibaca (`isAtoB`, `isBtoA`)
- `_` adalah konvensi untuk parameter yang sengaja tidak digunakan

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa For Loop dipilih sebagai kode final, bukan Regex yang lebih ringkas?</strong></summary>

Karena kode final harus bisa dibaca dan dipahami oleh siapapun — termasuk yang belum familiar dengan regex. For Loop memberikan keseimbangan terbaik antara performa O(n), memori O(1), dan readability yang baik tanpa membutuhkan pengetahuan khusus.

</details>

<details>
<summary><strong>❓ Apakah Kode Original bisa dibilang "salah"?</strong></summary>

Tidak sepenuhnya salah — outputnya benar untuk semua test case yang diberikan. Tapi ada silent bug yang bisa muncul pada input tertentu, dan kompleksitasnya O(n²) yang kurang efisien. Itulah kenapa perlu di-refactor.

</details>

---

## 📚 Referensi

- [MDN — Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [MDN — RegExp.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [MDN — Spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN — String.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔤 [← Kembali ke Part 6: Alternatif Regex + Ringkasan Algoritma](06-alternatif-regex-dan-ringkasan-algoritma.md)**

---

<div align="center">

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
