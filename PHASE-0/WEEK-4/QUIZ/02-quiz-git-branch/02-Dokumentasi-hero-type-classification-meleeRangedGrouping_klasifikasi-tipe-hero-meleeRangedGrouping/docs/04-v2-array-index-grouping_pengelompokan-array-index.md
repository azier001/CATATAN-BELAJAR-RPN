# 🗂️ V2 — Array Index Grouping — Pengelompokan Array Index

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Fixed%20Grouping-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V2-purple?style=for-the-badge)

---

## 📚 Daftar Isi

- [Kode Lengkap](#kode)
- [Penjelasan Baris per Baris](#penjelasan)
- [Konsep Kunci](#konsep)
- [Simulasi Langkah demi Langkah](#simulasi)
- [Insight Penting](#insight)

---

<a name="kode"></a>
## 💻 Kode Lengkap

```js
function meleeRangedGrouping(str) {
  if (str.length === 0) return [];

  const result = [[], []];

  for (const heroData of str.split(',')) {
    const [name, type] = heroData.split('-');

    if (type === 'Ranged') {
      result[0].push(name);
    } else if (type === 'Melee') {
      result[1].push(name);
    }
  }

  return result;
}
```

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```js
if (str.length === 0) return [];
```
🛡️ **Guard Clause** — jika string kosong, langsung return tanpa proses apapun. Ini mencegah jebakan `"".split(",")` yang menghasilkan `[""]`.

---

```js
const result = [[], []];
```
🏠 **Pre-defined Structure** — menyiapkan "gedung dua lantai" sejak awal:
- `result[0]` → Kamar Ranged
- `result[1]` → Kamar Melee

Dengan cara ini, meskipun tidak ada hero Melee, `result[1]` **tetap ada** sebagai `[]`.

---

```js
for (const heroData of str.split(',')) {
```
🔄 **Single Pass** — split by koma dan langsung loop hasilnya satu per satu. Tidak perlu menyimpan seluruh array hasil split ke variabel terpisah — hemat memori.

---

```js
const [name, type] = heroData.split('-');
```
✂️ **Destructuring Assignment** — split by strip, lalu langsung "bongkar" hasilnya ke variabel `name` dan `type`. Jauh lebih manusiawi daripada menulis `heroData.split('-')[0]` dan `heroData.split('-')[1]`.

---

```js
if (type === 'Ranged') {
  result[0].push(name);
} else if (type === 'Melee') {
  result[1].push(name);
}
```
📥 **Explicit Mapping** — secara sadar memetakan tipe ke index yang tepat. Tidak ada lagi faktor keberuntungan (urutan data masuk) yang bisa mengacaukan posisi.

---

<a name="konsep"></a>
## 🧠 Konsep Kunci

### Kenapa `[[], []]` dan bukan `{}`?

Karena soal meminta output dengan **posisi yang fixed**:

| Kebutuhan | Object `{}` | Array `[[], []]` |
|-----------|-------------|-------------------|
| Posisi index fixed | ❌ Tidak dijamin | ✅ Selalu tepat |
| Kamar kosong tetap ada | ❌ Tidak otomatis | ✅ Sudah disiapkan |
| Urutan output | ❌ Tergantung input | ✅ Selalu sama |

### Kenapa `for...of` dan bukan `.map()` lalu loop?

Kode V1 sebelumnya menggunakan `.map()` untuk parsing **lalu** baru loop:

```js
// V1: Parsing dulu, baru loop (dua langkah)
const splitted = str.split(',').map((item) => item.split('-'));
for (const [heroName, type] of splitted) { ... }
```

Di V2 ini, parsing dilakukan **di dalam loop** (satu langkah):

```js
// V2: Parsing sambil jalan (satu langkah)
for (const heroData of str.split(',')) {
  const [name, type] = heroData.split('-');
  ...
}
```

```
📊 Perbandingan Alur Memori:

V1 (map lalu loop):
  str → split(',') → ["Razor-Ranged", "Meepo-Melee"]
                              │
                              ▼  .map()
                      [["Razor","Ranged"], ["Meepo","Melee"]]
                              │            ← Array baru tersimpan di memori
                              ▼  for...of
                      proses satu per satu

V2 (langsung di loop):
  str → split(',') → ["Razor-Ranged", "Meepo-Melee"]
                              │
                              ▼  for...of (langsung)
                      "Razor-Ranged" → split('-') → proses
                      "Meepo-Melee"  → split('-') → proses
                                        ← Tidak ada array perantara
```

> 💡 **Efisiensi:** V2 tidak membuat array 2D perantara (`splitted`). Data dibedah satu per satu sambil jalan — lebih hemat memori.

---

<a name="simulasi"></a>
## 🎞️ Simulasi Langkah demi Langkah

Input: `'Sniper-Ranged,Axe-Melee,Invoker-Ranged'`

```
📊 Tracing Eksekusi:

STEP 1: Guard Clause
  str.length === 0? → NO → Lanjut

STEP 2: Inisialisasi
  result = [ [], [] ]
             ↑   ↑
          idx 0  idx 1

STEP 3: Loop

  Iterasi 1: heroData = "Sniper-Ranged"
    split('-') → [name, type] = ["Sniper", "Ranged"]
    type === 'Ranged'? ✅ YES → result[0].push("Sniper")
    State: [ ["Sniper"], [] ]

  Iterasi 2: heroData = "Axe-Melee"
    split('-') → [name, type] = ["Axe", "Melee"]
    type === 'Ranged'? ❌ NO
    type === 'Melee'?  ✅ YES → result[1].push("Axe")
    State: [ ["Sniper"], ["Axe"] ]

  Iterasi 3: heroData = "Invoker-Ranged"
    split('-') → [name, type] = ["Invoker", "Ranged"]
    type === 'Ranged'? ✅ YES → result[0].push("Invoker")
    State: [ ["Sniper", "Invoker"], ["Axe"] ]

STEP 4: Return
  result → [ ["Sniper", "Invoker"], ["Axe"] ] ✅
```

---

<a name="insight"></a>
## 💡 Insight Penting

> **Kenapa versi ini bekerja dengan benar?**
> Karena kita **menyiapkan wadah sejak awal** dengan `[[], []]`. Posisi Ranged (index 0) dan Melee (index 1) tidak bisa tertukar, dan kamar kosong tetap ada meskipun tidak ada data yang masuk.

> **Apa kekurangannya?**
> `result[0]` dan `result[1]` kurang deskriptif. Pembaca kode harus **ingat atau scroll ke atas** untuk tahu index 0 itu Ranged dan index 1 itu Melee. Masalah ini diperbaiki di **[Part 5 — V3 Semantic Array](./05-v3-semantic-array-grouping_pengelompokan-array-semantik.md)**.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 3 — V1 Object Grouping](./03-v1-object-grouping_pengelompokan-object.md)**
- **📖 [Lanjut ke Part 5 — V3 Semantic Array Grouping →](./05-v3-semantic-array-grouping_pengelompokan-array-semantik.md)**
