# 📦 V1 — Object Grouping — Pengelompokan Object

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Object%20Grouping-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V1-purple?style=for-the-badge)

---

## 📚 Daftar Isi

- [Kode Lengkap](#kode)
- [Penjelasan Baris per Baris](#penjelasan)
- [Simulasi Langkah demi Langkah](#simulasi)
- [3 Jebakan yang Ditemukan](#jebakan)
- [Kenapa Pendekatan Ini Tetap Berharga](#berharga)
- [Insight Penting](#insight)

---

<a name="kode"></a>
## 💻 Kode Lengkap

Ini adalah kode pertama yang saya tulis, karena terinspirasi dari dokumentasi **Grouping Pattern** menggunakan Object:

```js
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

> ⚠️ **Kode ini TIDAK lolos test case!** Baca terus untuk memahami kenapa.

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```js
const grouped = {};
```
📦 Membuat object kosong sebagai wadah grouping. Key-nya akan menjadi tipe hero (`'Ranged'` / `'Melee'`), value-nya akan menjadi array berisi nama hero.

---

```js
const splitted = str.split(',').map((item) => item.split('-'));
```
✂️ **Parsing dua tahap sekaligus:** split by koma dulu, kemudian setiap hasilnya di-split lagi by strip. Menghasilkan array 2D seperti `[["Razor", "Ranged"], ["Meepo", "Melee"]]`.

---

```js
if (!grouped[type]) grouped[type] = [];
```
🏗️ Jika key untuk tipe ini belum ada di object, buatkan dulu array kosongnya. Ini cara klasik untuk **inisialisasi dinamis** — wadah dibuat hanya saat dibutuhkan.

---

```js
grouped[type].push(heroName);
```
📥 Masukkan nama hero ke dalam array sesuai tipenya.

---

```js
return Object.values(grouped);
```
📤 Ambil semua value dari object dan kembalikan sebagai array. Contoh: `{ Ranged: ['Razor'], Melee: ['Meepo'] }` → `[ ['Razor'], ['Meepo'] ]`.

---

<a name="simulasi"></a>
## 🎞️ Simulasi Langkah demi Langkah

Input: `'Razor-Ranged,Meepo-Melee,Sniper-Ranged'`

```
📊 Tracing Eksekusi:

  grouped = {}

  Iterasi 1: [heroName, type] = ["Razor", "Ranged"]
    grouped["Ranged"] belum ada → buat []
    grouped["Ranged"].push("Razor")
    State: { Ranged: ["Razor"] }

  Iterasi 2: [heroName, type] = ["Meepo", "Melee"]
    grouped["Melee"] belum ada → buat []
    grouped["Melee"].push("Meepo")
    State: { Ranged: ["Razor"], Melee: ["Meepo"] }

  Iterasi 3: [heroName, type] = ["Sniper", "Ranged"]
    grouped["Ranged"] sudah ada → langsung push
    grouped["Ranged"].push("Sniper")
    State: { Ranged: ["Razor", "Sniper"], Melee: ["Meepo"] }

  Object.values(grouped) → [ ["Razor", "Sniper"], ["Meepo"] ]
```

Hasil di atas **kebetulan benar** karena Ranged muncul duluan. Tapi bagaimana jika Melee muncul duluan? 🤔

---

<a name="jebakan"></a>
## ⚠️ 3 Jebakan yang Ditemukan

### Jebakan 1: String Kosong Tidak Benar-Benar Kosong

Ketika `str` adalah `''`, `str.split(',')` **tidak** menghasilkan array kosong. Ia menghasilkan `['']` (array berisi satu string kosong).

```
📊 Alur Error pada Input Kosong:

  INPUT: ""
                │
                ▼
  split(','):  [""]          ← Bukan [] !!!
                │
                ▼
  map(split('-')): [["", undefined]]
                │
                ▼
  Loop: heroName = "", type = undefined
                │
                ▼
  grouped = { undefined: [""] }
                │
                ▼
  OUTPUT: [[""]]             ← ❌ Salah! Seharusnya []
```

> 💡 **Pelajaran:** `"".split(",")` menghasilkan `[""]`, bukan `[]`. Selalu tangani string kosong dengan **Guard Clause** di awal fungsi.

---

### Jebakan 2: Urutan Tidak Terjamin

`Object.values(grouped)` mengambil isi object berdasarkan **urutan key yang pertama kali dibuat**. Jika hero Melee muncul duluan di string, maka Melee akan berada di index 0.

```
📊 Contoh Urutan Terbalik:

  INPUT: "Axe-Melee,Razor-Ranged"

  Iterasi 1: grouped["Melee"] = ["Axe"]       ← Melee DULUAN
  Iterasi 2: grouped["Ranged"] = ["Razor"]

  Object.values → [ ["Axe"], ["Razor"] ]
                    index 0    index 1
                    Melee!     Ranged!

  ❌ Salah! Seharusnya Ranged di index 0, Melee di index 1
```

> 💡 **Pelajaran:** Jangan mengandalkan urutan key di Object jika soal meminta **posisi index yang fixed**.

---

### Jebakan 3: Kamar Kosong yang Hilang

Jika hanya ada hero Ranged dan tidak ada hero Melee, Object tidak akan punya key `'Melee'`. Akibatnya, output hanya punya satu sub-array.

```
📊 Contoh Kamar Hilang:

  INPUT: "Drow Ranger-Ranged,Chen-Ranged"

  Setelah loop:
  grouped = { Ranged: ["Drow Ranger", "Chen"] }
                                                  ← Tidak ada key Melee!

  Object.values → [ ["Drow Ranger", "Chen"] ]
                    hanya 1 sub-array

  ❌ Salah! Seharusnya [ ["Drow Ranger", "Chen"], [] ]
                         ada 2 sub-array
```

> 💡 **Pelajaran:** Object hanya membuat key yang kita taruh datanya. Jika tidak ada data Melee, key `'Melee'` tidak akan pernah ada.

---

<a name="berharga"></a>
## 🏆 Kenapa Pendekatan Ini Tetap Berharga

Meskipun kode ini tidak lolos test case, pendekatan Object Grouping **bukan salah jalan** — hanya **kurang tepat untuk soal ini**.

Object Grouping sangat cocok untuk **Dynamic Grouping**, yaitu saat:
- Kategorinya tidak diketahui sebelumnya
- Jumlah kategorinya bisa berapapun
- Tidak ada aturan urutan posisi

Contoh soal yang cocok:
```js
// "Kelompokkan hero berdasarkan role-nya"
// Input: "Axe-Tank,Dazzle-Support,Sniper-Carry,Chen-Support"
// Output: { Tank: ['Axe'], Support: ['Dazzle', 'Chen'], Carry: ['Sniper'] }
```

Pendekatan ini bisa **diperbaiki** agar lolos soal ini — lihat di **[Part 6 — V4 Fixed Object Grouping](./06-v4-fixed-object-grouping_pengelompokan-object-tetap.md)**.

---

<a name="insight"></a>
## 💡 Insight Penting

> **Kenapa Object Grouping gagal di sini?**
>  Bukan karena logika grouping-nya salah, tapi karena soal menuntut **posisi index yang fixed** (Ranged di 0, Melee di 1) dan **kamar kosong harus tetap ada**. Object tidak menjamin keduanya.

> **Apa yang saya pelajari?**
> Selalu baca requirement output dengan teliti. Kata kunci *"array multidimensi"* dengan *index yang sudah ditentukan* adalah tanda bahwa **Fixed Grouping (Array)** lebih tepat daripada Dynamic Grouping (Object).

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 2 — Alur Berpikir](./02-problem-solving-approach_alur-berpikir.md)**
- **📖 [Lanjut ke Part 4 — V2 Array Index Grouping →](./04-v2-array-index-grouping_pengelompokan-array-index.md)**
