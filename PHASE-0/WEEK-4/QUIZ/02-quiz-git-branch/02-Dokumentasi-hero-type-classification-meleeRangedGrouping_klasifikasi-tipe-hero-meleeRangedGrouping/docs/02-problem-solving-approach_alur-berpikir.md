# 🧠 Problem Solving Approach — Alur Berpikir

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-String%20Split%20|%20Grouping-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

---

## 📚 Daftar Isi

- [Langkah 1 — Pahami Masalah](#langkah-1)
- [Langkah 2 — Identifikasi Pola Data](#langkah-2)
- [Langkah 3 — Rencanakan Strategi Grouping](#langkah-3)
- [Langkah 4 — Gabungkan Menjadi Pseudocode](#langkah-4)
- [Kesalahan Pertama Saya](#kesalahan)

---

<a name="langkah-1"></a>
## 🔍 Langkah 1 — Pahami Masalah

Sebelum menulis kode, terjemahkan dulu masalahnya ke bahasa sederhana:

> *"Saya menerima satu string panjang berisi daftar hero. Setiap hero punya nama dan tipe (Ranged atau Melee). Saya harus memisahkan mereka ke dalam dua kelompok: Ranged di index 0, Melee di index 1."*

Tiga pertanyaan kunci:
- **Bagaimana memisahkan data?** → Parsing string bertingkat (koma lalu strip)
- **Bagaimana mengelompokkan?** → Cek tipe, lalu masukkan ke keranjang yang sesuai
- **Bagaimana jika input kosong?** → Langsung return `[]`

---

<a name="langkah-2"></a>
## 🔎 Langkah 2 — Identifikasi Pola Data

Perhatikan format input: `"Razor-Ranged,Invoker-Ranged,Meepo-Melee"`

Ada **dua pemisah** yang bisa kita manfaatkan:

| Pemisah | Fungsi | Contoh |
|---------|--------|--------|
| `,` (koma) | Memisahkan antar hero | `"Razor-Ranged"` dan `"Meepo-Melee"` |
| `-` (strip) | Memisahkan nama dari tipe | `"Razor"` dan `"Ranged"` |

Artinya kita butuh **dua kali split** — ini disebut **Parsing Bertingkat (Two-Level Split)**:

```
📊 Visualisasi Two-Level Split:

INPUT: "Razor-Ranged,Invoker-Ranged,Meepo-Melee"

LEVEL 1 — Split by koma (",")
┌──────────────┬───────────────┬──────────────┐
│ Razor-Ranged │ Invoker-Ranged│ Meepo-Melee  │
└──────┬───────┴───────┬───────┴──────┬───────┘
       │               │              │
       ▼               ▼              ▼
LEVEL 2 — Split by strip ("-") untuk tiap item
  ┌───────┬────────┐ ┌─────────┬────────┐ ┌───────┬───────┐
  │ Razor │ Ranged │ │ Invoker │ Ranged │ │ Meepo │ Melee │
  └───────┴────────┘ └─────────┴────────┘ └───────┴───────┘
    nama     tipe      nama      tipe       nama     tipe
```

---

<a name="langkah-3"></a>
## 📦 Langkah 3 — Rencanakan Strategi Grouping

Setelah kita punya nama dan tipe setiap hero, langkah selanjutnya adalah **memasukkan ke keranjang yang tepat**.

Pertanyaan penting: *"Apakah saya tahu semua kategorinya?"*

**Ya!** Hanya ada dua kemungkinan: `'Ranged'` dan `'Melee'`. Dan posisinya sudah ditentukan soal:
- Index `0` → Ranged
- Index `1` → Melee

Artinya kita bisa **menyiapkan wadah sejak awal** sebelum loop dimulai:

```
📊 Visualisasi Grouping:

  Siapkan dua keranjang kosong:
  ┌─────────────────┐   ┌─────────────────┐
  │   Keranjang 0   │   │   Keranjang 1   │
  │   (Ranged)      │   │   (Melee)       │
  │   [ ]           │   │   [ ]           │
  └─────────────────┘   └─────────────────┘

  Proses tiap hero:
  Razor  → Ranged → masuk Keranjang 0
  Invoker→ Ranged → masuk Keranjang 0
  Meepo  → Melee  → masuk Keranjang 1

  Hasil akhir:
  ┌─────────────────┐   ┌─────────────────┐
  │   Keranjang 0   │   │   Keranjang 1   │
  │   (Ranged)      │   │   (Melee)       │
  │ [Razor,Invoker] │   │ [Meepo]         │
  └─────────────────┘   └─────────────────┘

  Output: [ ['Razor', 'Invoker'], ['Meepo'] ]
```

> 💡 **Insight:** Karena kategorinya sudah pasti dan posisinya fixed, kita pakai **Fixed Grouping (Array)** — bukan Dynamic Grouping (Object). Lebih lanjut tentang ini di [Part 7 — Insight](./07-insight-dynamic-vs-fixed-grouping_kapan-pakai-object-vs-array.md).

---

<a name="langkah-4"></a>
## 🔗 Langkah 4 — Gabungkan Menjadi Pseudocode

Sekarang kita gabungkan semua langkah di atas menjadi pseudocode:

```
FUNCTION meleeRangedGrouping(str):

  1. Jika str kosong → langsung return []

  2. Siapkan wadah untuk Ranged dan Melee

  3. Untuk setiap hero di str (split by koma):
     a. Pisahkan nama dan tipe (split by strip)
     b. Jika tipe === 'Ranged' → masukkan nama ke wadah Ranged
     c. Jika tipe === 'Melee'  → masukkan nama ke wadah Melee

  4. Return [wadah_ranged, wadah_melee]
```

Dari pseudocode ini, kita bisa membuat kode JavaScript yang sesungguhnya. Ada **beberapa cara** untuk mengimplementasikannya — masing-masing dibahas di **Part 3 sampai Part 6**.

---

<a name="kesalahan"></a>
## ❌ Kesalahan Pertama Saya

Karena sebelumnya saya mempelajari **Grouping Pattern** menggunakan Object (dari dokumentasi Problem Solving Patterns), saya langsung mencoba pendekatan ini:

```js
// ❌ Percobaan pertama — menggunakan Object Grouping
function meleeRangedGrouping(str) {
  const grouped = {};
  const splitted = str.split(',').map((item) => item.split('-'));

  for (const [heroName, type] of splitted) {
    if (!grouped[type]) grouped[type] = [];
    grouped[type].push(heroName);
  }

  return Object.values(grouped);
}
```

Instingnya **tidak salah** — Object memang pattern standar untuk grouping. Tapi ada **3 jebakan** yang membuat kode ini tidak lolos test case. Detail jebakan dan penjelasannya dibahas lengkap di:

**📖 [Part 3 — V1 Object Grouping & 3 Jebakan →](./03-v1-object-grouping_pengelompokan-object.md)**

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 1 — Challenge Overview](./01-challenge-overview_gambaran-challenge.md)**
- **📖 [Lanjut ke Part 3 — V1 Object Grouping →](./03-v1-object-grouping_pengelompokan-object.md)**
