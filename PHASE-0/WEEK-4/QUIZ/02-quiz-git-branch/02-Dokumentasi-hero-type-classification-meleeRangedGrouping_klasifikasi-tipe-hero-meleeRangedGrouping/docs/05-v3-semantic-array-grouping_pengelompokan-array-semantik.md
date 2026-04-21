# 🏷️ V3 — Semantic Array Grouping — Pengelompokan Array Semantik

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Fixed%20Grouping-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V3%20(Final)-green?style=for-the-badge)

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

Ini adalah **solusi final** — versi yang paling mudah dibaca dan dipelihara:

```js
function meleeRangedGrouping(str) {
  if (str === '') return [];

  const ranged = [];
  const melee = [];

  const heroes = str.split(',');

  for (const hero of heroes) {
    const [name, type] = hero.split('-');

    if (type === 'Ranged') {
      ranged.push(name);
    } else if (type === 'Melee') {
      melee.push(name);
    }
  }

  return [ranged, melee];
}
```

> ✅ **Kode ini lolos semua 11 test case!**

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```js
if (str === '') return [];
```
🛡️ **Guard Clause** — menangani edge case string kosong di baris pertama. Langsung return tanpa proses apapun.

---

```js
const ranged = [];
const melee = [];
```
🏷️ **Variabel Deskriptif** — alih-alih menggunakan `result[0]` dan `result[1]` seperti V2, di sini kita memakai nama variabel yang langsung menjelaskan isinya. Siapapun yang membaca kode akan langsung tahu: *"Oh, ini keranjang untuk Ranged, dan ini untuk Melee."*

---

```js
const heroes = str.split(',');
```
✂️ **Split Level 1** — pisahkan string berdasarkan koma untuk mendapat array tiap hero. Contoh: `"Razor-Ranged,Axe-Melee"` → `["Razor-Ranged", "Axe-Melee"]`.

---

```js
for (const hero of heroes) {
  const [name, type] = hero.split('-');
```
✂️ **Split Level 2 + Destructuring** — di dalam loop, setiap hero dipecah lagi berdasarkan strip untuk mendapat nama dan tipe.

---

```js
if (type === 'Ranged') {
  ranged.push(name);
} else if (type === 'Melee') {
  melee.push(name);
}
```
📥 **Grouping** — masukkan nama hero ke variabel yang sesuai. Kode ini terbaca seperti bahasa manusia: *"Jika tipenya Ranged, masukkan ke ranged."*

---

```js
return [ranged, melee];
```
📤 **Return** — susun output akhir. Baris ini terbaca seperti kalimat: *"Kembalikan ranged dan melee."* Bandingkan dengan V2 yang return `result` — kamu harus scroll ke atas untuk ingat apa isi `result[0]` dan `result[1]`.

---

<a name="konsep"></a>
## 🧠 Konsep Kunci

### Apa Bedanya dengan V2?

Secara logika, **identik**. Yang berubah hanya **cara menamai wadah**:

```
📊 Perbandingan Gaya Penamaan:

V2 (Array Index):
  ┌──────────────────────────────────────┐
  │ const result = [[], []]              │
  │                                      │
  │ result[0].push(name)  ← Index 0 apa?│
  │ result[1].push(name)  ← Index 1 apa?│
  │                                      │
  │ return result                        │
  └──────────────────────────────────────┘
         🤔 Harus ingat mapping index

V3 (Semantic):
  ┌──────────────────────────────────────┐
  │ const ranged = []                    │
  │ const melee = []                     │
  │                                      │
  │ ranged.push(name)  ← Jelas! Ranged  │
  │ melee.push(name)   ← Jelas! Melee   │
  │                                      │
  │ return [ranged, melee]               │
  └──────────────────────────────────────┘
         ✅ Langsung paham tanpa scroll
```

### Kapan Pilih V2 vs V3?

| Situasi | Pilih | Alasan |
|---------|-------|--------|
| Kategori sedikit (2-3) | **V3 Semantic** | Nama variabel masih manageable |
| Kategori banyak (5+) | **V2 Index** atau **Object** | Terlalu banyak variabel terpisah |
| Kode akan dibaca orang lain | **V3 Semantic** | Lebih self-documenting |
| Kode untuk diri sendiri | **V2 atau V3** | Suka-suka, asal konsisten |

---

<a name="simulasi"></a>
## 🎞️ Simulasi Langkah demi Langkah

Input: `'Drow Ranger-Ranged,Chen-Ranged,Axe-Melee'`

```
📊 Tracing Eksekusi:

STEP 1: Guard Clause
  str === ''? → NO → Lanjut

STEP 2: Inisialisasi
  ranged = []
  melee  = []

STEP 3: Split Level 1
  heroes = ["Drow Ranger-Ranged", "Chen-Ranged", "Axe-Melee"]

STEP 4: Loop

  Iterasi 1: hero = "Drow Ranger-Ranged"
    split('-') → [name, type] = ["Drow Ranger", "Ranged"]
    type === 'Ranged'? ✅ YES → ranged.push("Drow Ranger")
    State: ranged = ["Drow Ranger"], melee = []

  Iterasi 2: hero = "Chen-Ranged"
    split('-') → [name, type] = ["Chen", "Ranged"]
    type === 'Ranged'? ✅ YES → ranged.push("Chen")
    State: ranged = ["Drow Ranger", "Chen"], melee = []

  Iterasi 3: hero = "Axe-Melee"
    split('-') → [name, type] = ["Axe", "Melee"]
    type === 'Ranged'? ❌ NO
    type === 'Melee'?  ✅ YES → melee.push("Axe")
    State: ranged = ["Drow Ranger", "Chen"], melee = ["Axe"]

STEP 5: Return
  [ranged, melee] → [ ["Drow Ranger", "Chen"], ["Axe"] ] ✅
```

---

<a name="insight"></a>
## 💡 Insight Penting

> **Kenapa ini disebut "Semantic"?**
> Karena nama variabelnya **membawa makna** (semantik). `ranged` langsung memberitahu bahwa isinya hero bertipe Ranged. Berbeda dengan `result[0]` yang hanyalah angka tanpa makna.

> **Kenapa versi ini dipilih sebagai solusi final?**
> Karena dalam dunia programming, kode yang **mudah dibaca** jauh lebih berharga daripada kode yang memanfaatkan sedikit variabel. Kamu (atau orang lain) akan membaca kode 10x lebih sering daripada menulisnya.

> **Apakah ada trade-off?**
> Ya, sedikit. V3 menambahkan 1 variabel ekstra (`heroes`) dan 2 variabel terpisah (`ranged`, `melee`) dibanding V2 yang hanya punya 1 (`result`). Tapi trade-off ini **sangat kecil** dibanding keuntungan readability-nya.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 4 — V2 Array Index Grouping](./04-v2-array-index-grouping_pengelompokan-array-index.md)**
- **📖 [Lanjut ke Part 6 — V4 Fixed Object Grouping →](./06-v4-fixed-object-grouping_pengelompokan-object-tetap.md)**
