# 🖼️ Hollow Square — `persegiBolong`

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-Loop%20|%20Pattern%20Printing%20|%20Boundary-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

> 📝 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat
> kembali konsep-konsep yang dipelajari saat mengerjakan challenge Persegi Bolong.*

---

## 🧩 Deskripsi Challenge

Buat fungsi `persegiBolong(num)` yang menghasilkan pola **persegi bolong** (hollow square) menggunakan karakter bintang `*` dan spasi. Parameter `num` menentukan **ukuran sisi** persegi. Bintang dicetak hanya pada posisi **4 sisi bingkai** (atas, bawah, kiri, kanan), sedangkan bagian tengah diisi spasi kosong.

```
Input: num = 5
  → Grid: 5 × 5 = 25 sel
  → Bintang di sisi: row === 0, row === num-1, col === 0, col === num-1
  → Jika salah satu terpenuhi → '*', selain itu → ' '
Output: Persegi Bolong 5×5 ✅
```

> ⚠️ **Catatan penting:** Fungsi harus me-`return` string — bukan `console.log`. Spasi kosong **wajib** diisi karakter spasi `' '`, bukan dikosongkan.

---

## 📤 Expected Output

| Input | Ukuran | Output |
|:---:|:---:|:---|
| `persegiBolong(1)` | 1×1 | `*` |
| `persegiBolong(3)` | 3×3 | Persegi bolong mini |
| `persegiBolong(5)` | 5×5 | Persegi bolong (lihat di bawah) |

**Contoh `persegiBolong(5)`:**
```
*****
*   *
*   *
*   *
*****
```

---

## ▶️ Coba Langsung

```javascript
console.log(persegiBolong(5));
// Persegi Bolong 5×5
```

```javascript
console.log(persegiBolong(3));
// Persegi Bolong 3×3:
// ***
// * *
// ***
```

---

## 💡 Konsep Kunci

- **Nested Loop** — Loop baris di luar, loop kolom di dalam — standar untuk iterasi grid 2D
- **Sistem Koordinat (row, col)** — Setiap sel di grid punya alamat unik
- **Boundary (4 Sisi)** — Posisi di mana `row === 0`, `row === num-1`, `col === 0`, atau `col === num-1`
- **Ternary Operator** — Cara ringkas menulis `if-else` dalam satu ekspresi
- **String.repeat()** — Teknik menggandakan karakter tanpa loop manual

---

## 🏆 Solusi Rekomendasi

```javascript
function persegiBolong(num) {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
      pattern +=
        row === 0 || row === num - 1 || col === 0 || col === num - 1 ? '*' : ' ';
    }
    pattern += '\n';
  }

  return pattern;
}

console.log(persegiBolong(5));
```

> ✅ Versi ini dipilih karena paling **mudah dibaca, memenuhi syarat soal (wajib nested loop + if/else), dan langsung menunjukkan hubungan rumus boundary** — cocok untuk semua level, termasuk saat ujian.

---

## 📊 Quick Comparison: Semua Versi

| Versi | Pendekatan | Keunggulan |
|:---|:---|:---|
| **V1 — Nested Loop** ⭐ | 2 loop bersarang + ternary | Paling mudah dibaca dan memenuhi syarat soal |
| **V2 — String.repeat()** 🚀 | 1 loop + `String.repeat()` | Ringkas, performa lebih tinggi, idiomatik JS |

---

## 📂 Struktur Dokumentasi

| File | Topik |
|:---|:---|
| 📄 [01-challenge-overview.md](./docs/01-challenge-overview.md) | Analisis soal, visualisasi grid, penemuan rumus boundary |
| 📄 [02-problem-solving-approach.md](./docs/02-problem-solving-approach.md) | Proses berpikir, blueprint kode, step-by-step |
| 📄 [03-version-1-nested-loop.md](./docs/03-version-1-nested-loop.md) | Nested Loop + Ternary (detail lengkap + trace) |
| 📄 [04-version-2-built-in-repeat.md](./docs/04-version-2-built-in-repeat.md) | Single Loop + String.repeat() (detail + analogi burger) |
| 📄 [05-version-comparison.md](./docs/05-version-comparison.md) | Perbandingan komprehensif V1 vs V2 |
| 📄 [06-refleksi-dan-naming.md](./docs/06-refleksi-dan-naming.md) | Naming convention, gotchas, pelajaran kunci |
| 📄 [07-ringkasan-algoritma.md](./docs/07-ringkasan-algoritma.md) | Cheat sheet — review cepat semua versi |

> **Catatan:** File `Dokumentasi-Persegi-Bolong-Hollow-Square.md` di folder ini merupakan dokumentasi *legacy* (lama) yang sengaja dipertahankan sebagai rekam jejak progres belajar.

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis pola visual dan menemukan rumus boundary (4 sisi: atas, bawah, kiri, kanan)
- ✅ Membangun solusi secara bertahap — dari grid penuh hingga persegi bolong
- ✅ Membuat pola Persegi Bolong dengan **2 pendekatan berbeda** (nested loop dan `.repeat()`)
- ✅ Memahami trade-off antara **kejelasan kode** vs **performa eksekusi**
- ✅ Menerapkan naming convention yang membuat nested loop mudah dibaca (`row`, `col`)
- ✅ Menghindari jebakan umum (gotcha) dalam pattern printing

---

<div align="center">

📚 [Mulai dari Part 1 — Challenge Overview →](./docs/01-challenge-overview.md)

[Challenge Overview](./docs/01-challenge-overview.md) • [Problem Solving](./docs/02-problem-solving-approach.md) • [V1 Nested Loop](./docs/03-version-1-nested-loop.md) • [V2 Repeat](./docs/04-version-2-built-in-repeat.md) • [Comparison](./docs/05-version-comparison.md) • [Refleksi](./docs/06-refleksi-dan-naming.md) • [Cheat Sheet](./docs/07-ringkasan-algoritma.md)

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
