# 📋 Challenge Overview — Gambaran Challenge

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-String%20Split%20|%20Grouping-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

---

## 📚 Daftar Isi

- [Deskripsi Challenge](#deskripsi)
- [Aturan Challenge](#aturan)
- [Contoh Input & Output](#contoh)
- [Pemahaman Awal](#pemahaman)

---

<a name="deskripsi"></a>
## 🧩 Deskripsi Challenge

Bayangkan kamu seorang **admin turnamen E-sport** yang menerima daftar pendaftaran hero dalam satu baris teks panjang. Tugasmu: pisahkan mereka ke dalam dua ruangan — **Ranged** (jarak jauh) dan **Melee** (jarak dekat).

Diberikan sebuah function `meleeRangedGrouping(str)` yang menerima satu parameter berupa **string**. String ini berisi daftar hero dengan format `<nama_hero>-<tipe_hero>` yang dipisahkan koma. Function harus mengembalikan **array multidimensi** (array di dalam array) yang mengelompokkan hero berdasarkan tipenya.

---

<a name="aturan"></a>
## 📏 Aturan Challenge

| Aturan | Keterangan |
|--------|-----------|
| 📦 Format Input | `"<nama>-<tipe>,<nama>-<tipe>, ..."` |
| 📤 Format Output | `[ [<hero_ranged>], [<hero_melee>] ]` |
| 0️⃣ Index 0 | Selalu berisi hero **Ranged** |
| 1️⃣ Index 1 | Selalu berisi hero **Melee** |
| 📭 Input Kosong | Jika `str === ''` → return `[]` |
| 🏠 Kamar Kosong | Jika tidak ada hero Melee, index 1 tetap ada sebagai `[]` |

---

<a name="contoh"></a>
## 📤 Contoh Input & Output

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

### Kenapa `meleeRangedGrouping('Razor-Ranged,...,Sniper-Ranged')` hasilnya `[ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]`?

```
Mulai dengan str = "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"

Hero ke-1 → Razor     bertipe Ranged → masuk Kamar 0 ✅
Hero ke-2 → Invoker   bertipe Ranged → masuk Kamar 0 ✅
Hero ke-3 → Meepo     bertipe Melee  → masuk Kamar 1 ✅
Hero ke-4 → Axe       bertipe Melee  → masuk Kamar 1 ✅
Hero ke-5 → Sniper    bertipe Ranged → masuk Kamar 0 ✅

Kamar 0 (Ranged): ['Razor', 'Invoker', 'Sniper']
Kamar 1 (Melee):  ['Meepo', 'Axe']

Output: [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
```

### Kenapa `meleeRangedGrouping('Drow Ranger-Ranged,...')` hasilnya `[ [...], [] ]`?

```
Mulai dengan str = "Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged"

Hero ke-1 → Drow Ranger  bertipe Ranged → masuk Kamar 0 ✅
Hero ke-2 → Chen         bertipe Ranged → masuk Kamar 0 ✅
Hero ke-3 → Dazzle       bertipe Ranged → masuk Kamar 0 ✅
Hero ke-4 → Io           bertipe Ranged → masuk Kamar 0 ✅

Tidak ada hero Melee → Kamar 1 tetap ada tapi KOSONG

Kamar 0 (Ranged): ['Drow Ranger', 'Chen', 'Dazzle', 'Io']
Kamar 1 (Melee):  []

Output: [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
```

> 💡 **Perhatikan:** Meskipun tidak ada hero Melee, Kamar 1 **tetap harus ada** sebagai array kosong `[]`. Output harus selalu punya **dua sub-array** (kecuali input kosong).

---

<a name="pemahaman"></a>
## 🧠 Pemahaman Awal

Sebelum menulis kode, ada tiga pertanyaan kunci yang harus dijawab:

**1. Bagaimana memisahkan data? (Parsing)**
> String dipisahkan dua kali: pertama berdasarkan koma (`,`) untuk mendapat tiap hero, lalu berdasarkan strip (`-`) untuk memisahkan nama dari tipe.

**2. Bagaimana mengelompokkan? (Grouping)**
> Cek tipe setiap hero — jika `'Ranged'` masuk ke keranjang Ranged, jika `'Melee'` masuk ke keranjang Melee.

**3. Bagaimana menangani kasus kosong? (Edge Case)**
> Jika input adalah string kosong `''`, langsung kembalikan `[]` tanpa proses apapun.

```
meleeRangedGrouping(str)
  │
  ├── str === '' → return []                    ← EDGE CASE
  │
  └── str ada isinya
        │
        ├── STEP 1: Split by koma (",")         ← PARSING LEVEL 1
        ├── STEP 2: Split by strip ("-")        ← PARSING LEVEL 2
        └── STEP 3: Masukkan ke kamar yang tepat ← GROUPING
```

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2 — Alur Berpikir →](./02-problem-solving-approach_alur-berpikir.md)**
