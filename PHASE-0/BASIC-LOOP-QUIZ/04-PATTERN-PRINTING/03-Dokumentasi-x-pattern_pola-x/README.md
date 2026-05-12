# ✖️ X Pattern — `polaX`

![Difficulty](https://img.shields.io/badge/Difficulty-Easy--Medium-yellowgreen?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-Loop%20|%20Pattern%20Printing%20|%20Diagonal-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

> 📝 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat
> kembali konsep-konsep yang dipelajari saat mengerjakan challenge X Pattern.*

---

## 🧩 Deskripsi Challenge

Buat fungsi `polaX(num)` yang menghasilkan pola huruf **X** menggunakan karakter bintang `*` dan spasi. Parameter `num` menentukan **ukuran grid** (jumlah baris sekaligus jumlah kolom). Bintang dicetak hanya pada posisi **diagonal utama** dan **diagonal terbalik**.

```
Input: num = 5
  → Grid: 5 × 5 = 25 sel
  → Diagonal utama → row === col
  → Diagonal terbalik → row + col === num - 1
  → Jika salah satu terpenuhi → '*', selain itu → ' '
Output: Pola X 5×5 ✅
```

> ⚠️ **Catatan penting:** Fungsi harus me-`return` string — bukan `console.log`. Spasi kosong **wajib** diisi karakter spasi `' '`, bukan dikosongkan.

---

## 📤 Expected Output

| Input | Ukuran | Output |
|:---:|:---:|:---|
| `polaX(1)` | 1×1 | `*` |
| `polaX(3)` | 3×3 | Pola X mini |
| `polaX(5)` | 5×5 | Pola X (lihat di bawah) |

**Contoh `polaX(5)`:**
```
*   *
 * *
  *
 * *
*   *
```

---

## ▶️ Coba Langsung

```javascript
console.log(polaX(5));
// Pola X 5×5
```

```javascript
console.log(polaX(1));
// Hanya satu bintang: *
```

---

## 💡 Konsep Kunci

- **Nested Loop** — Loop baris di luar, loop kolom di dalam — standar untuk iterasi grid 2D
- **Sistem Koordinat (row, col)** — Setiap sel di grid punya alamat unik
- **Diagonal Utama `\`** — Posisi di mana `row === col`
- **Diagonal Terbalik `/`** — Posisi di mana `row + col === num - 1`
- **Ternary Operator** — Cara ringkas menulis `if-else` dalam satu ekspresi
- **Array.fill() & .join()** — Teknik membuat baris dari Array tanpa nested loop

---

## 🏆 Solusi Rekomendasi

```javascript
const polaX = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
      pattern += (row === col || row + col === num - 1) ? '*' : ' ';
    }
    pattern += '\n';
  }

  return pattern;
};

console.log(polaX(5));
```

> ✅ Versi ini dipilih karena paling **mudah dibaca, mudah dijelaskan, dan langsung menunjukkan hubungan rumus diagonal** — cocok untuk semua level, termasuk saat ujian.

---

## 📊 Quick Comparison: Semua Versi

| Versi | Pendekatan | Keunggulan |
|:---|:---|:---|
| **V1 — Nested Loop** ⭐ | 2 loop bersarang + ternary | Paling mudah dibaca dan dijelaskan |
| **V2 — Single Loop** | 1 loop + `Array.fill()` + `.join()` | Ringkas, tanpa `if/else` |
| **V3 — 1D Buffer** 🚀 | 1 array raksasa + rumus indeks | Performa absolut, O(N) |

---

## 📂 Struktur Dokumentasi

| File | Topik |
|:---|:---|
| 📄 [01-challenge-overview.md](./docs/01-challenge-overview.md) | Analisis soal, visualisasi grid, penemuan rumus diagonal |
| 📄 [02-problem-solving-approach.md](./docs/02-problem-solving-approach.md) | Proses berpikir, blueprint kode, step-by-step |
| 📄 [03-version-1-nested-loop.md](./docs/03-version-1-nested-loop.md) | Nested Loop + Ternary (detail lengkap + trace) |
| 📄 [04-version-2-single-loop.md](./docs/04-version-2-single-loop.md) | Single Loop + Array.fill() (detail lengkap + trace) |
| 📄 [05-version-3-ultra-efficient.md](./docs/05-version-3-ultra-efficient.md) | 1D Array Buffer — ultra efficient (detail + trade-off) |
| 📄 [06-challenge-insight.md](./docs/06-challenge-insight.md) | Naming convention, perbandingan, gotchas, pelajaran kunci |
| 📄 [07-ringkasan-algoritma.md](./docs/07-ringkasan-algoritma.md) | Cheat sheet — review cepat semua versi |

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis pola visual dan menemukan rumus diagonal (`row === col`, `row + col === num - 1`)
- ✅ Membangun solusi secara bertahap — dari baris kosong hingga pola X lengkap
- ✅ Membuat pola X dengan **3 pendekatan berbeda** (nested loop, single loop + array, 1D buffer)
- ✅ Memahami trade-off antara **performa mesin** vs **keterbacaan manusia**
- ✅ Menerapkan naming convention yang membuat nested loop mudah dibaca (`row`, `col`)
- ✅ Menghindari jebakan umum (gotcha) dalam pattern printing

---

<div align="center">

📚 [Mulai dari Part 1 — Challenge Overview →](./docs/01-challenge-overview.md)

[Challenge Overview](./docs/01-challenge-overview.md) • [Problem Solving](./docs/02-problem-solving-approach.md) • [V1 Nested Loop](./docs/03-version-1-nested-loop.md) • [V2 Single Loop](./docs/04-version-2-single-loop.md) • [V3 Ultra Efficient](./docs/05-version-3-ultra-efficient.md) • [Insight](./docs/06-challenge-insight.md) • [Cheat Sheet](./docs/07-ringkasan-algoritma.md)

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
