# 🔺 Centered Pyramid — `piramida2`

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-Loop%20|%20Pattern%20Printing%20|%20Nested%20Loop-blue?style=for-the-badge)

> 📝 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat
> kembali konsep-konsep yang dipelajari saat mengerjakan challenge Piramida Tengah.*

---

## 🧩 Deskripsi Challenge

Buat fungsi `piramida2(num)` yang menghasilkan pola **piramida rata tengah** menggunakan karakter `'* '` (bintang + spasi). Parameter `num` menentukan **jumlah baris** piramida. Wajib menggunakan **nested loop** — satu untuk spasi pendorong, satu untuk bintang.

```
Input: num = 5
  → Baris: 5 baris
  → Spasi pendorong: num - row (berkurang tiap baris)
  → Bintang berjarak: row (sama dengan nomor baris)
  → Karakter cetak: '* ' (bintang + spasi)
Output: Piramida Tengah 5 baris ✅
```

> ⚠️ **Catatan penting:** Fungsi harus me-`return` string — bukan `console.log`. Karakter yang dicetak adalah `'* '` (bintang + spasi), bukan hanya `'*'`.

---

## 📤 Expected Output

| Input | Baris | Output |
|:---:|:---:|:---|
| `piramida2(1)` | 1 | `*` |
| `piramida2(3)` | 3 | Piramida 3 baris |
| `piramida2(5)` | 5 | Piramida 5 baris (lihat di bawah) |

**Contoh `piramida2(5)`:**
```
    *
   * *
  * * *
 * * * *
* * * * *
```

---

## ▶️ Coba Langsung

```javascript
console.log(piramida2(5));
// Piramida Tengah 5 baris
```

```javascript
console.log(piramida2(3));
// Piramida Tengah 3 baris:
//   *
//  * *
// * * *
```

---

## 💡 Konsep Kunci

- **Nested Loop** — Loop utama (baris), loop spasi (pendorong), loop bintang (pembentuk)
- **Spasi Pendorong** — `num - row` spasi di awal setiap baris untuk memusatkan piramida
- **Karakter Cetak `'* '`** — Bintang + spasi membuat jarak visual, menyederhanakan rumus bintang menjadi `row`
- **`.repeat()`** — Built-in method untuk menggandakan karakter tanpa loop manual
- **1-Indexed vs 0-Indexed** — Pilihan titik awal iterasi mempengaruhi rumus

---

## 🏆 Solusi Rekomendasi

```javascript
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let space = 1; space <= num - row; space++) {
      pattern += ' ';
    }

    for (let star = 1; star <= row; star++) {
      pattern += '* ';
    }

    pattern += '\n';
  }

  return pattern;
};

console.log(piramida2(5));
```

> ✅ Versi ini dipilih karena **memenuhi syarat soal (wajib nested loop)**, paling mudah dibaca, dan rumusnya langsung cocok dengan tabel analisis.

---

## 📊 Quick Comparison: Semua Versi

| Versi | Pendekatan | Keunggulan |
|:---|:---|:---|
| **V1 — Nested Loop** ⭐ | 3 loop (1 luar + 2 nested) | Memenuhi syarat soal, paling eksplisit |
| **V2 — `.repeat()`** 🚀 | 1 loop + `.repeat()` | Ringkas, readable, cocok real project |
| **V3 — Nested Loop (0-Indexed)** 🔢 | 3 loop, mulai dari 0 | Untuk konteks 0-indexed |
| **V3B — `.repeat()` (0-Indexed)** 🔢 | 1 loop, mulai dari 0 | Ringkas + 0-indexed |

---

## 📂 Struktur Dokumentasi

| File | Topik |
|:---|:---|
| 📄 [01-challenge-overview.md](./docs/01-challenge-overview.md) | Analisis soal, visualisasi pola, penemuan rumus |
| 📄 [02-problem-solving-approach.md](./docs/02-problem-solving-approach.md) | Proses berpikir, blueprint, step-by-step |
| 📄 [03-version-1-nested-loop.md](./docs/03-version-1-nested-loop.md) | Nested Loop 1-Indexed (detail + trace) |
| 📄 [04-version-2-built-in-repeat.md](./docs/04-version-2-built-in-repeat.md) | Single Loop + `.repeat()` (detail + perbandingan) |
| 📄 [05-version-comparison.md](./docs/05-version-comparison.md) | Perbandingan semua versi + 1-indexed vs 0-indexed |
| 📄 [06-refleksi-dan-naming.md](./docs/06-refleksi-dan-naming.md) | Naming convention, gotchas, pelajaran kunci |
| 📄 [07-ringkasan-algoritma.md](./docs/07-ringkasan-algoritma.md) | Cheat sheet — review cepat semua versi |

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis pola visual dan menemukan rumus spasi pendorong (`num - row`) dan bintang (`row`)
- ✅ Membangun solusi secara bertahap — dari loop kosong → bintang rata kiri → piramida tengah
- ✅ Membuat piramida dengan **4+ pendekatan berbeda** (nested loop, `.repeat()`, 0-indexed, 1-indexed)
- ✅ Memahami dampak karakter cetak (`'*'` vs `'* '`) terhadap kompleksitas rumus
- ✅ Menerapkan naming convention yang membuat nested loop mudah dibaca (`row`, `space`, `star`)
- ✅ Menghindari jebakan umum (gotcha) dalam pattern printing

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **15 Mei 2026** berdasarkan sesi mentoring langsung bersama **Google Antigravity**. Piramida Tengah adalah **variasi kedua** dari Pola Piramida — perbedaan kecil pada karakter cetak (`'* '` vs `'*'`) ternyata mengubah seluruh rumus bintang dari deret ganjil `(2×row)-1` menjadi linier `row`. Konsep spasi pendorong (`num - row`) yang dipelajari di sini akan terus berguna untuk pola yang lebih kompleks seperti **Diamond Pattern**.

---

<div align="center">

📚 [Mulai dari Part 1 — Challenge Overview →](./docs/01-challenge-overview.md)

[Challenge Overview](./docs/01-challenge-overview.md) • [Problem Solving](./docs/02-problem-solving-approach.md) • [V1 Nested Loop](./docs/03-version-1-nested-loop.md) • [V2 Repeat](./docs/04-version-2-built-in-repeat.md) • [Comparison](./docs/05-version-comparison.md) • [Refleksi](./docs/06-refleksi-dan-naming.md) • [Cheat Sheet](./docs/07-ringkasan-algoritma.md)

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
