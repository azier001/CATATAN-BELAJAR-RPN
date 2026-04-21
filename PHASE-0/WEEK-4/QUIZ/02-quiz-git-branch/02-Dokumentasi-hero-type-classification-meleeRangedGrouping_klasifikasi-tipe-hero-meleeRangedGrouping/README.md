# 🎮 Melee Ranged Grouping — `meleeRangedGrouping`

![Difficulty](https://img.shields.io/badge/Difficulty-Easy--Medium-yellowgreen?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-String%20Split%20|%20Grouping%20|%20Array%20Multidimensi-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

> 📝 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat kembali konsep-konsep yang dipelajari saat mengerjakan challenge Melee Ranged Grouping.*

---

## 🧩 Deskripsi Challenge

Diberikan sebuah fungsi `meleeRangedGrouping(str)` yang menerima satu parameter berupa **string**. String ini berisi daftar hero dengan format `<nama_hero>-<tipe_hero>` yang dipisahkan koma. Function harus mengembalikan **array multidimensi** yang mengelompokkan hero berdasarkan tipenya.

```
str = "Razor-Ranged,Invoker-Ranged,Meepo-Melee"
  → Parsing: ["Razor-Ranged", "Invoker-Ranged", "Meepo-Melee"]
  → Grouping: Ranged = [Razor, Invoker], Melee = [Meepo]
  → Output: [ ["Razor", "Invoker"], ["Meepo"] ]
```

> ⚠️ **Aturan penting:**
> - Index `0` → selalu **Ranged**
> - Index `1` → selalu **Melee**
> - Input string kosong (`''`) → return `[]`

---

## 📤 Expected Output

| Input | Output |
|-------|--------|
| `'Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'` | `[ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]` |
| `'Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'` | `[ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]` |
| `''` | `[]` |

---

## ▶️ Coba Langsung

```js
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
```

```js
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
```

```js
console.log(meleeRangedGrouping(''));
// []
```

---

## 📊 Quick Comparison: Semua Versi

| Versi | Pendekatan | Keunggulan |
|-------|-----------|------------|
| **V1 — Object Grouping** | `grouped[type].push(name)` lalu `Object.values()` | Fleksibel untuk kategori dinamis |
| **V2 — Array Index** | `result[0]` dan `result[1]` yang sudah disiapkan | Paling ringkas, hemat variabel |
| **V3 — Semantic Array** | Variabel `ranged` dan `melee` terpisah | Paling mudah dibaca, deskriptif |
| **V4 — Fixed Object** | Object dengan key pasti + return dipaksa | Hybrid Object & fixed position |

---

## 📂 Struktur Dokumentasi

| File | Topik |
|------|-------|
| 📄 [01-challenge-overview_gambaran-challenge.md](./docs/01-challenge-overview_gambaran-challenge.md) | Gambaran lengkap challenge & analisis masalah |
| 📄 [02-problem-solving-approach_alur-berpikir.md](./docs/02-problem-solving-approach_alur-berpikir.md) | Cara memecah masalah: 3 tahap logika splitting & grouping |
| 📄 [03-v1-object-grouping_pengelompokan-object.md](./docs/03-v1-object-grouping_pengelompokan-object.md) | V1 — Object Grouping & 3 jebakan yang ditemukan |
| 📄 [04-v2-array-index-grouping_pengelompokan-array-index.md](./docs/04-v2-array-index-grouping_pengelompokan-array-index.md) | V2 — Array Index dengan `result[0]` dan `result[1]` |
| 📄 [05-v3-semantic-array-grouping_pengelompokan-array-semantik.md](./docs/05-v3-semantic-array-grouping_pengelompokan-array-semantik.md) | V3 — Semantic Array dengan variabel deskriptif (Solusi Final) |
| 📄 [06-v4-fixed-object-grouping_pengelompokan-object-tetap.md](./docs/06-v4-fixed-object-grouping_pengelompokan-object-tetap.md) | V4 — Fixed Object Grouping (hybrid approach) |
| 📄 [07-insight-dynamic-vs-fixed-grouping_kapan-pakai-object-vs-array.md](./docs/07-insight-dynamic-vs-fixed-grouping_kapan-pakai-object-vs-array.md) | Insight: Kapan pakai Object vs Array untuk grouping |
| 📄 [08-test-cases_kasus-pengujian.md](./docs/08-test-cases_kasus-pengujian.md) | Test cases lengkap (11/11 passed) & cara pengujian |
| 📄 [ringkasan-algoritma-semua-versi.md](./ringkasan-algoritma-semua-versi.md) | Ringkasan semua versi kode |

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Memahami cara **parsing string** bertingkat (`split` level 1 dan level 2)
- ✅ Menggunakan **destructuring assignment** untuk membongkar array hasil split
- ✅ Membedakan **Dynamic Grouping (Object)** vs **Fixed Grouping (Array)**
- ✅ Memahami pentingnya **Guard Clause** untuk menangani edge case
- ✅ Menerapkan pola **Pre-defined Structure** (`[[], []]`) untuk output yang posisinya fixed
- ✅ Memahami kapan harus memilih **variabel deskriptif** vs **index array**

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1 — Challenge Overview →](./docs/01-challenge-overview_gambaran-challenge.md)**

---

**Quick Links:**

[01 Overview](./docs/01-challenge-overview_gambaran-challenge.md) • [02 Alur Berpikir](./docs/02-problem-solving-approach_alur-berpikir.md) • [03 V1 Object](./docs/03-v1-object-grouping_pengelompokan-object.md) • [04 V2 Index](./docs/04-v2-array-index-grouping_pengelompokan-array-index.md) • [05 V3 Semantic](./docs/05-v3-semantic-array-grouping_pengelompokan-array-semantik.md) • [06 V4 Fixed](./docs/06-v4-fixed-object-grouping_pengelompokan-object-tetap.md) • [07 Insight](./docs/07-insight-dynamic-vs-fixed-grouping_kapan-pakai-object-vs-array.md) • [08 Test Cases](./docs/08-test-cases_kasus-pengujian.md)

---

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
