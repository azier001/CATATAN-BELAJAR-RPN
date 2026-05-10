# 💎 Diamond Pattern — `berlian`

![Difficulty](https://img.shields.io/badge/Difficulty-Easy--Medium-yellowgreen?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-Loop%20|%20Pattern%20Printing%20|%20Math.abs-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

> 📝 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat
> kembali konsep-konsep yang dipelajari saat mengerjakan challenge Diamond Pattern.*

---

## 🧩 Deskripsi Challenge

Buat fungsi `berlian(num)` yang menghasilkan pola berlian (diamond) menggunakan karakter bintang `*` dan spasi. Parameter `num` menentukan tinggi **setengah bagian atas** berlian (termasuk baris puncak).

```
Input: num = 5
  → Hitung total baris: (5 × 2) - 1 = 9 baris
  → Setiap baris: cetak spasi (num - row) + bintang (2×row - 1)
  → Bagian atas: row naik (1 → 5)
  → Bagian bawah: row turun (4 → 1)
Output: Pola berlian 9 baris ✅
```

> ⚠️ **Catatan penting:** Parameter `num` adalah tinggi setengah atas (termasuk tengah), bukan total tinggi berlian.

---

## 📤 Expected Output

| Input | Total Baris | Output |
|:---:|:---:|:---|
| `berlian(1)` | 1 | `*` |
| `berlian(3)` | 5 | Berlian 5 baris |
| `berlian(5)` | 9 | Berlian 9 baris (lihat di bawah) |

**Contoh `berlian(5)`:**
```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

---

## ▶️ Coba Langsung

```javascript
console.log(berlian(5));
// Berlian 9 baris (normal)
```

```javascript
console.log(berlian(1));
// Hanya satu bintang: *
```

```javascript
console.log(berlian(3));
// Berlian mini 5 baris
```

---

## 💡 Konsep Kunci

- **Nested Loop** — Loop di dalam loop untuk mencetak spasi dan bintang per baris
- **Pattern/Pola Matematika** — Rumus spasi (`num - row`) dan bintang (`2×row - 1`)
- **String Concatenation** — Menggabungkan karakter satu per satu ke dalam string penampung
- **`.repeat()`** — Method bawaan JS untuk mengulang string tanpa loop manual
- **`Math.abs()`** — Nilai mutlak untuk membuat deret angka "cermin" (naik lalu turun)
- **Ternary Operator** — Cara singkat menulis `if-else` dalam satu baris

---

## 🏆 Solusi Rekomendasi

```javascript
const berlian = (num) => {
  let pattern = '';

  for (let i = 1; i <= num * 2 - 1; i++) {
    let currentRow = num - Math.abs(num - i);

    pattern +=
      ' '.repeat(num - currentRow) + '*'.repeat(2 * currentRow - 1) + '\n';
  }

  return pattern;
};

console.log(berlian(5));
```

> ✅ Versi ini dipilih karena paling ringkas dan efisien — hanya **1 loop**, **0 nested loop**, dan semua logika cermin ditangani oleh satu baris rumus `Math.abs`.

---

## 📊 Quick Comparison: Semua Versi

| Versi | Pendekatan | Keunggulan |
|:---|:---|:---|
| **V1 — Nested Loop** | 2 loop utama + nested loop manual | Paling mudah dipahami pemula |
| **V2 — `.repeat()`** | 2 loop utama + `.repeat()` | Kode bersih tanpa nested loop |
| **V3 — Math.abs + Repeat** ⭐ | 1 loop + `Math.abs` + `.repeat()` | Paling ringkas dan efisien |
| **V4 — Ternary + Nested** | 1 loop + ternary + nested loop | Jembatan antara V1 dan V3 |

---

## 📂 Struktur Dokumentasi

| File | Topik |
|:---|:---|
| 📄 [0-Algoritma.md](./0-Algoritma.md) | Cheat sheet ringkas semua versi |
| 📄 [1-Analisis-Pola.md](./1-Analisis-Pola.md) | Visualisasi, tabel breakdown, penemuan rumus |
| 📄 [2-Solusi-2-Loop.md](./2-Solusi-2-Loop.md) | V1 (Nested Loop) + V2 (`.repeat()`) |
| 📄 [3-Solusi-1-Loop.md](./3-Solusi-1-Loop.md) | V3 (Math.abs) + V4 (Ternary) |
| 📄 [4-Perbandingan-Naming-Gotcha.md](./4-Perbandingan-Naming-Gotcha.md) | Perbandingan, naming convention, gotcha |
| 📄 [Dokumentasi-Pola-Berlian-Diamond-Pattern.md](./Dokumentasi-Pola-Berlian-Diamond-Pattern.md) | Legacy (dokumentasi versi lama) |

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis pola visual dan menemukan rumus matematika di baliknya
- ✅ Membangun solusi secara bertahap (step-by-step), bukan langsung full code
- ✅ Membuat pola berlian dengan **4 pendekatan berbeda** (nested loop, `.repeat()`, `Math.abs`, ternary)
- ✅ Memahami kapan dan mengapa memilih satu pendekatan di atas yang lain
- ✅ Menerapkan naming convention yang membuat kode mudah dibaca
- ✅ Menghindari jebakan umum (gotcha) dalam pattern printing

---

<div align="center">

📚 [Mulai dari Part 1 — Analisis Pola →](./1-Analisis-Pola.md)

[Analisis Pola](./1-Analisis-Pola.md) • [Solusi 2 Loop](./2-Solusi-2-Loop.md) • [Solusi 1 Loop](./3-Solusi-1-Loop.md) • [Perbandingan & Naming](./4-Perbandingan-Naming-Gotcha.md) • [Cheat Sheet](./0-Algoritma.md)

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
