# ♟️ Chess Board Pattern — `papanCatur`

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-Loop%20|%20Pattern%20Printing%20|%20Modulo-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

> 📝 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat
> kembali konsep-konsep yang dipelajari saat mengerjakan challenge Chess Board Pattern.*

---

## 🧩 Deskripsi Challenge

Buat fungsi `papanCatur(num)` yang menghasilkan pola papan catur menggunakan karakter `#` dan spasi. Parameter `num` menentukan **ukuran papan** (jumlah baris sekaligus jumlah kolom).

```
Input: num = 5
  → Total sel: 5 × 5 = 25 sel
  → Setiap sel: cek (baris + kolom) % 2
  → Jika genap → '#', jika ganjil → ' '
  → Setelah setiap baris: tambahkan '\n'
Output: Papan catur 5×5 ✅
```

> ⚠️ **Catatan penting:** Fungsi harus me-`return` string — bukan `console.log`. Kotak "putih" diisi spasi `' '`, bukan string kosong.

---

## 📤 Expected Output

| Input | Ukuran | Output |
|:---:|:---:|:---|
| `papanCatur(1)` | 1×1 | `#` |
| `papanCatur(3)` | 3×3 | Papan 3×3 |
| `papanCatur(5)` | 5×5 | Papan 5×5 (lihat di bawah) |

**Contoh `papanCatur(5)`:**
```
# # #
 # # 
# # #
 # # 
# # #
```

---

## ▶️ Coba Langsung

```javascript
console.log(papanCatur(5));
// Papan catur 5×5
```

```javascript
console.log(papanCatur(1));
// Hanya satu kotak: #
```

```javascript
console.log(papanCatur(3));
// Papan catur mini 3×3
```

---

## 💡 Konsep Kunci

- **Nested Loop** — Loop baris di luar, loop kolom di dalam — standar untuk iterasi 2D
- **Modulo Ganjil-Genap** — `(row + col) % 2` menghasilkan pola selang-seling secara alami
- **String Concatenation** — Menggabungkan `'#'` dan `' '` satu per satu ke penampung `pattern`
- **Ternary Operator** — Cara ringkas memilih antara `'#'` atau `' '` dalam satu ekspresi
- **1D → 2D Mapping** — `Math.floor(i / num)` dan `i % num` untuk konversi indeks flat ke grid
- **Array.from + join** — Pendekatan fungsional tanpa variabel sementara

---

## 🏆 Solusi Rekomendasi

```javascript
const papanCatur = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= num; col++) {
      pattern += (row + col) % 2 === 0 ? '#' : ' ';
    }
    pattern += '\n';
  }

  return pattern;
};

console.log(papanCatur(5));
```

> ✅ Versi ini dipilih karena paling **mudah dibaca dan dijelaskan** — dua loop yang jelas mewakili baris dan kolom, satu kondisi sederhana, cocok untuk semua level.

---

## 📊 Quick Comparison: Semua Versi

| Versi | Pendekatan | Keunggulan |
|:---|:---|:---|
| **V1 — Nested Loop** ⭐ | 2 loop bersarang + ternary | Paling mudah dibaca dan dijelaskan |
| **V2 — Single Loop** | 1 loop + `Math.floor` & `%` | Teknik standar game dev & grafis |
| **V3 — Functional** | `Array.from` + `.join()` | Deklaratif, tanpa variabel sementara |

---

## 📂 Struktur Dokumentasi

| File | Topik |
|:---|:---|
| 📄 [01-challenge-overview.md](./01-challenge-overview.md) | Analisis soal, input-output, pola ganjil-genap |
| 📄 [02-problem-solving-approach.md](./02-problem-solving-approach.md) | Proses berpikir, blueprint kode, step-by-step |
| 📄 [03-version-1-nested-loop.md](./03-version-1-nested-loop.md) | Nested Loop + Ternary (detail lengkap) |
| 📄 [04-version-2-single-loop.md](./04-version-2-single-loop.md) | Single Loop — Math 1D → 2D (detail lengkap) |
| 📄 [05-version-3-functional.md](./05-version-3-functional.md) | Functional — Array.from (detail lengkap) |
| 📄 [06-challenge-insight.md](./06-challenge-insight.md) | Deep dive, naming convention, gotchas |
| 📄 [07-ringkasan-algoritma.md](./07-ringkasan-algoritma.md) | Cheat sheet — review cepat semua versi |
| 📄 [Dokumentasi-Papan-Catur-CHESS.md](./Dokumentasi-Papan-Catur-CHESS.md) | Legacy (dokumentasi versi lama) |

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menemukan rumus ganjil-genap `(row + col) % 2` sebagai inti logika papan catur
- ✅ Membangun solusi secara bertahap — dari nested loop sederhana hingga functional programming
- ✅ Membuat pola papan catur dengan **3 pendekatan berbeda** (nested loop, single loop, functional)
- ✅ Memahami teknik konversi indeks 1D ke koordinat 2D menggunakan `Math.floor` dan `%`
- ✅ Memahami kapan dan mengapa memilih satu pendekatan di atas yang lain
- ✅ Menerapkan naming convention yang membuat kode mudah dibaca
- ✅ Menghindari jebakan umum (gotcha) dalam pattern printing

---

<div align="center">

📚 [Mulai dari Part 1 — Challenge Overview →](./01-challenge-overview.md)

[Challenge Overview](./01-challenge-overview.md) • [Problem Solving](./02-problem-solving-approach.md) • [V1 Nested Loop](./03-version-1-nested-loop.md) • [V2 Single Loop](./04-version-2-single-loop.md) • [V3 Functional](./05-version-3-functional.md) • [Insight](./06-challenge-insight.md) • [Cheat Sheet](./07-ringkasan-algoritma.md)

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
