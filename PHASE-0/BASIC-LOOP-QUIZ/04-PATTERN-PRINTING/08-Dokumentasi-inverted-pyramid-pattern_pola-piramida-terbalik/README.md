# 🔻 Inverted Pyramid — `piramidaTerbalik`

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-Loop%20|%20Pattern%20Printing%20|%20Nested%20Loop-blue?style=for-the-badge)

> 📝 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat
> kembali konsep-konsep yang dipelajari saat mengerjakan challenge Piramida Terbalik.*

---

## 🧩 Deskripsi Challenge

Buat fungsi `piramidaTerbalik(num)` yang menghasilkan pola **piramida terbalik rata tengah** menggunakan karakter `'*'` (bintang). Parameter `num` menentukan **jumlah baris** piramida. Baris pertama adalah yang terlebar, dan baris terakhir hanya memiliki 1 bintang.

```
Input: num = 5
  → Baris: 5 baris
  → Spasi pendorong: row - 1 (bertambah tiap baris)
  → Bintang: 2 * (num - row) + 1 (deret ganjil menurun)
  → Karakter cetak: '*' (bintang saja)
Output: Piramida Terbalik 5 baris ✅
```

> ⚠️ **Catatan penting:** Fungsi harus me-`return` string — bukan `console.log`. Karakter yang dicetak adalah `'*'` (bintang saja), sama seperti Piramida Rapat (folder 06).

---

## 📤 Expected Output

| Input | Baris | Output |
|:---:|:---:|:---|
| `piramidaTerbalik(1)` | 1 | `*` |
| `piramidaTerbalik(3)` | 3 | Piramida terbalik 3 baris |
| `piramidaTerbalik(5)` | 5 | Piramida terbalik 5 baris (lihat di bawah) |

**Contoh `piramidaTerbalik(5)`:**
```
*********
 *******
  *****
   ***
    *
```

---

## ▶️ Coba Langsung

```javascript
console.log(piramidaTerbalik(5));
// Piramida Terbalik 5 baris
```

```javascript
console.log(piramidaTerbalik(3));
// Piramida Terbalik 3 baris:
// *****
//  ***
//   *
```

---

## 💡 Konsep Kunci

- **Nested Loop** — Loop utama (baris), loop spasi (pendorong), loop bintang (pembentuk)
- **Spasi Bertambah** — `row - 1` spasi di awal setiap baris (kebalikan dari piramida normal)
- **Bintang Deret Ganjil Menurun** — `2 * (num - row) + 1` menghasilkan 9, 7, 5, 3, 1
- **Reverse Loop** — Membalik arah loop untuk mendaur ulang rumus piramida normal
- **`.repeat()`** — Built-in method untuk menggandakan karakter tanpa loop manual
- **1-Indexed vs 0-Indexed** — Pilihan titik awal iterasi mempengaruhi rumus

---

## 🏆 Solusi Rekomendasi

```javascript
// ⭐ Versi 3 — Reverse Loop + .repeat()
const piramidaTerbalik = (num) => {
  let pattern = '';

  for (let row = num; row >= 1; row--) {
    pattern += ' '.repeat(num - row) + '*'.repeat(2 * row - 1) + '\n';
  }

  return pattern;
};

console.log(piramidaTerbalik(5));
```

> ✅ Versi ini dipilih karena **mendaur ulang rumus piramida normal** (tidak perlu menghafal rumus baru), paling ringkas, dan menunjukkan cara berpikir *programmer-minded*.

---

## 📊 Quick Comparison: Semua Versi

| Versi | Pendekatan | Keunggulan |
|:---|:---|:---|
| **V1 — Nested Loop** 🔄 | 3 loop, rumus baru, maju | Melatih fundamental, paling eksplisit |
| **V2 — `.repeat()`** ⚡ | 1 loop, rumus baru, maju | Ringkas, readable |
| **V3 — Reverse Loop** ⭐ | 1 loop, rumus lama, mundur | Daur ulang rumus piramida normal! |

---

## 📂 Struktur Dokumentasi

| File | Topik |
|:---|:---|
| 📄 [01-challenge-overview.md](./docs/01-challenge-overview.md) | Analisis soal, visualisasi pola, penemuan rumus |
| 📄 [02-problem-solving-approach.md](./docs/02-problem-solving-approach.md) | Proses berpikir, blueprint, kamus variabel |
| 📄 [03-version-1-nested-loop.md](./docs/03-version-1-nested-loop.md) | Nested Loop: step-by-step, bedah kode, trace |
| 📄 [04-version-2-built-in-repeat.md](./docs/04-version-2-built-in-repeat.md) | Single Loop + `.repeat()`: transisi V1→V2 |
| 📄 [05-version-3-reverse-loop.md](./docs/05-version-3-reverse-loop.md) | Reverse Loop: insight daur ulang rumus |
| 📄 [06-version-comparison.md](./docs/06-version-comparison.md) | Perbandingan semua versi + mental model |
| 📄 [07-refleksi-dan-naming.md](./docs/07-refleksi-dan-naming.md) | Naming convention, pelajaran kunci, koneksi |
| 📄 [08-ringkasan-algoritma.md](./docs/08-ringkasan-algoritma.md) | Cheat sheet — semua kode final (termasuk 0-indexed) |

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis pola visual dan menemukan rumus spasi pendorong (`row - 1`) dan bintang deret ganjil menurun (`2 * (num - row) + 1`)
- ✅ Membangun solusi secara bertahap — dari loop kosong → spasi → bintang
- ✅ Membuat piramida terbalik dengan **3+ pendekatan** (nested loop, `.repeat()`, reverse loop)
- ✅ **Mendaur ulang rumus piramida normal** dengan membalik arah loop — prinsip DRY
- ✅ Menerapkan naming convention yang membuat nested loop mudah dibaca (`row`, `space`, `star`)
- ✅ Memahami dampak 1-indexed vs 0-indexed terhadap rumus

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **16 Mei 2026** berdasarkan sesi mentoring langsung bersama **Google Antigravity**. Piramida Terbalik adalah **kebalikan** dari Pola Piramida (folder 06) — perbedaan arah mengubah seluruh rumus. Namun, *insight* paling berharga dari challenge ini bukan rumus barunya, melainkan penemuan bahwa **kita bisa mendaur ulang rumus lama** hanya dengan membalik arah loop. Prinsip ini (DRY) akan terus berguna untuk pola yang lebih kompleks seperti **Diamond Pattern**.

---

<div align="center">

📚 [Mulai dari Part 1 — Challenge Overview →](./docs/01-challenge-overview.md)

[Challenge Overview](./docs/01-challenge-overview.md) • [Problem Solving](./docs/02-problem-solving-approach.md) • [V1 Nested Loop](./docs/03-version-1-nested-loop.md) • [V2 Repeat](./docs/04-version-2-built-in-repeat.md) • [V3 Reverse](./docs/05-version-3-reverse-loop.md) • [Comparison](./docs/06-version-comparison.md) • [Refleksi](./docs/07-refleksi-dan-naming.md) • [Cheat Sheet](./docs/08-ringkasan-algoritma.md)

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
