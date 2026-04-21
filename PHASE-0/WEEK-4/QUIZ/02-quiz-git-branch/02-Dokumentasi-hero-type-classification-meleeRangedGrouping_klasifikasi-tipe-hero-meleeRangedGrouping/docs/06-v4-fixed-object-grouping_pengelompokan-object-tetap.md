# 🔒 V4 — Fixed Object Grouping — Pengelompokan Object Tetap

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Hybrid%20Grouping-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V4-purple?style=for-the-badge)

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

Ini adalah versi perbaikan dari **V1 Object Grouping**. Kita tetap memakai Object (bagi yang terbiasa dengan pola ini), tapi kita **paksa hasil akhirnya** agar sesuai aturan soal.

```js
function meleeRangedGrouping(str) {
  if (str === '') return [];

  const grouped = { Ranged: [], Melee: [] };

  for (const item of str.split(',')) {
    const [heroName, type] = item.split('-');
    
    if (grouped[type]) {
      grouped[type].push(heroName);
    }
  }

  return [grouped.Ranged, grouped.Melee];
}
```

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```js
if (str === '') return [];
```
🛡️ **Guard Clause** — wajib ada untuk menghindari error saat string kosong.

---

```js
const grouped = { Ranged: [], Melee: [] };
```
🛠️ **Pre-defined Object** — alih-alih membuat object kosong `{}`, kita inisialisasi key yang **sudah pasti ada** sejak awal. Ini menyelesaikan "Jebakan Kamar Kosong" di V1.

---

```js
const [heroName, type] = item.split('-');
```
✂️ **Destructuring** — mengambil nama dan tipe secara langsung.

---

```js
if (grouped[type]) {
  grouped[type].push(heroName);
}
```
🔐 **Safety Check** — kita cek dulu: apakah `type` (misal 'Ranged') ada di dalam object `grouped`? Jika iya, baru di-push. Ini menghindari error jika seandainya ada data tak terduga (misal: `"Axe-Tank"` — 'Tank' tidak akan di-push karena tidak ada key-nya).

---

```js
return [grouped.Ranged, grouped.Melee];
```
📤 **Forced Output** — alih-alih menggunakan `Object.values(grouped)` yang urutannya bisa terbalik, kita secara eksplisit meminta: *"Berikan saya array di mana index 0 adalah data Ranged, dan index 1 adalah data Melee."*

---

<a name="konsep"></a>
## 🧠 Konsep Kunci

### Hybrid Approach (Pendekatan Campuran)

V4 ini disebut **Hybrid** karena menggabungkan dua pola:
1. **Dynamic Grouping** di tengah jalan (memakai Object).
2. **Fixed Positioning** di akhir (memaksa posisi index saat return).

Pendekatan ini sangat lumrah di dunia programming, terutama ketika kita mencoba memodifikasi pola yang sudah kita kuasai agar sesuai dengan spesifikasi baru (beradaptasi).

---

<a name="simulasi"></a>
## 🎞️ Simulasi Langkah demi Langkah

Input: `'Axe-Melee,Invoker-Ranged'`

```
📊 Tracing Eksekusi:

STEP 1: Guard Clause
  str === ''? → NO → Lanjut

STEP 2: Inisialisasi
  grouped = { Ranged: [], Melee: [] }

STEP 3: Loop

  Iterasi 1: item = "Axe-Melee"
    split('-') → [heroName, type] = ["Axe", "Melee"]
    grouped["Melee"] ada? ✅ YES → push
    State: { Ranged: [], Melee: ["Axe"] }
    (Perhatikan: Object terisi Melee duluan)

  Iterasi 2: item = "Invoker-Ranged"
    split('-') → [heroName, type] = ["Invoker", "Ranged"]
    grouped["Ranged"] ada? ✅ YES → push
    State: { Ranged: ["Invoker"], Melee: ["Axe"] }

STEP 4: Return
  [ grouped.Ranged, grouped.Melee ]
             ↓             ↓
  [     ["Invoker"] ,    ["Axe"]  ] ✅ Posisi tetap benar!
```

---

<a name="insight"></a>
## 💡 Insight Penting

> **Apakah pendekatan ini disarankan?**
> Untuk kasus di challenge ini sebenarnya V2 atau V3 lebih disarankan karena lebih "direct" (langsung menggunakan Array). Namun, V4 membuktikan bahwa kamu **tidak harus membuang kodemu yang lama (V1)** jika ada sedikit kesalahan. Terkadang, cukup dengan memberikan batasan (*constraints*) di tahap akhir, logika lamamu bisa bekerja dengan sempurna.

> **Pelajaran tentang Fleksibilitas**
> Object Grouping adalah pola yang fleksibel. Dengan inisialisasi awal `{ Ranged: [], Melee: [] }`, kamu telah mengubah pola dinamis menjadi statis (kaku) sesuai kebutuhan soal.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 5 — V3 Semantic Array Grouping](./05-v3-semantic-array-grouping_pengelompokan-array-semantik.md)**
- **📖 [Lanjut ke Part 7 — Insight: Dynamic vs Fixed Grouping →](./07-insight-dynamic-vs-fixed-grouping_kapan-pakai-object-vs-array.md)**
