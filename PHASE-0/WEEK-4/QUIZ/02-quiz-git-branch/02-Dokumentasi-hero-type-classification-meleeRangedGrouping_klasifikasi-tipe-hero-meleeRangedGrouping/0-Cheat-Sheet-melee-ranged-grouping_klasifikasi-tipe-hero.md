# 🔄 Cheat Sheet — meleeRangedGrouping

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Semantic Array Grouping ⭐ `PALING DIREKOMENDASIKAN`

```javascript
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

> 🔑 Variabel `ranged` dan `melee` membuat kode self-documenting. Siapa pun langsung paham tanpa perlu komentar.

---

### 2. Array Index Grouping — `PALING RINGKAS`

```javascript
function meleeRangedGrouping(str) {
  if (str.length === 0) return [];

  const result = [[], []]; // [0] = Ranged, [1] = Melee

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

> 🔑 Hemat variabel dengan pre-defined `[[], []]`. Cocok kalau kamu sudah hafal konvensi index `0 = Ranged`, `1 = Melee`.

---

### 3. Arrow Function + `for...of` — `PALING INTUITIF`

```javascript
const meleeRangedGrouping = (heroesString) => {
  if (!heroesString) return [];

  const groupedHeroes = [[], []];
  const heroList = heroesString.split(',');

  for (const heroItem of heroList) {
    const [name, type] = heroItem.split('-');

    if (type === 'Ranged') groupedHeroes[0].push(name);
    if (type === 'Melee') groupedHeroes[1].push(name);
  }

  return groupedHeroes;
};
```

> 🔑 Versi arrow function dari Array Index Grouping. Guard clause `!heroesString` menangkap falsy values (empty string, null, undefined).

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 4. `.reduce()` — Declarative / Functional Style

```javascript
const meleeRangedGrouping = (heroesString) => {
  if (!heroesString) return [];

  const heroList = heroesString.split(',');

  return heroList.reduce(
    (acc, heroItem) => {
      const [name, type] = heroItem.split('-');

      if (type === 'Ranged') acc[0].push(name);
      if (type === 'Melee') acc[1].push(name);

      return acc;
    },
    [[], []]
  );
};
```

> 🔑 Melatih pemahaman `accumulator` di `.reduce()`. Cocok untuk codebase yang konsisten pakai pola Functional Programming.

---

### 5. Fixed Object Grouping — Hybrid Approach

```javascript
function meleeRangedGrouping(str) {
  if (str === '') return [];

  // Tetapkan ruangan secara kaku di awal
  const grouped = { Ranged: [], Melee: [] };

  for (const item of str.split(',')) {
    const [heroName, type] = item.split('-');

    // Safety check bila string ngawur (misal ada type 'Tank')
    if (grouped[type]) {
      grouped[type].push(heroName);
    }
  }

  // Forced Position
  return [grouped.Ranged, grouped.Melee];
}
```

> 🔑 Kompromi Object + Array. Key Object fixed di awal → tidak kena jebakan insertion order. Ada safety check untuk tipe tak dikenal.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 6. Dynamic Object Hash Map

```javascript
function meleeRangedGrouping(heroesString) {
  if (heroesString.length === 0) return [];

  const heroList = heroesString.split(',');
  const grouped = {};

  for (const heroItem of heroList) {
    const [name, type] = heroItem.split('-');

    if (!grouped[type]) grouped[type] = [];
    grouped[type].push(name);
  }

  return [
    grouped['Ranged'] || [],
    grouped['Melee'] || []
  ];
}
```

> 🔑 Fleksibel jika tipe hero bisa bertambah di masa depan. Fallback `|| []` menjaga posisi index tetap aman.

---

### 7. ❌ Object.values() — Gagal di Edge Cases

```javascript
function meleeRangedGrouping(str) {
  const grouped = {};
  const splitted = str.split(',').map((item) => item.split('-'));

  for (const [heroName, type] of splitted) {
    if (!grouped[type]) grouped[type] = [];
    grouped[type].push(heroName);
  }

  // ⚠️ Gagal: Urutan Object.values() tidak dijamin index-nya
  return Object.values(grouped);
}
```

> ⚠️ **JANGAN PAKAI DI PRODUCTION!** `Object.values()` mengikuti insertion order → jika data pertama Melee, index `0` jadi Melee bukan Ranged. Posisi output tidak terjamin.

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ SALAH — Object.values() urutan bergantung insertion order
return Object.values(grouped);
// Jika hero pertama Melee → index 0 = Melee (harusnya Ranged!)

// ✅ BENAR — Ambil key secara eksplisit
return [grouped['Ranged'] || [], grouped['Melee'] || []];
// Posisi Ranged selalu index 0, Melee selalu index 1
```

```javascript
// ❌ KURANG AMAN — Guard clause hanya cek length
if (str.length === 0) return [];
// null.length → TypeError!

// ✅ LEBIH AMAN — Falsy check
if (!str) return [];
// Menangkap: '', null, undefined sekaligus
```

```javascript
// ⚠️ BEDA PERILAKU — if vs else-if
if (type === 'Ranged') groupedHeroes[0].push(name);
if (type === 'Melee') groupedHeroes[1].push(name);
// → Kedua kondisi selalu dicek (kurang efisien, tapi aman kalau hanya 2 tipe)

if (type === 'Ranged') {
  result[0].push(name);
} else if (type === 'Melee') {
  result[1].push(name);
}
// → Berhenti setelah match pertama (lebih efisien)
```

---

## 📊 QUICK COMPARISON

| # | Versi | Gaya | Baris | Keunggulan Utama | Label |
|---|-------|------|-------|------------------|-------|
| 1 | Semantic Array | `for...of` + variabel deskriptif | 14 | Paling readable & self-documenting | ⭐ **RECOMMENDED** |
| 2 | Array Index | `for...of` + `result[0/1]` | 12 | Paling ringkas & hemat variabel | ⚡ **COMPACT** |
| 3 | Arrow + `for...of` | Arrow function + `[[], []]` | 12 | Intuitif, falsy guard clause | 🎯 **INTUITIVE** |
| 4 | `.reduce()` | Declarative / FP | 13 | Melatih pola accumulator | 🧠 **LEARNING** |
| 5 | Fixed Object | Object key fixed + forced return | 13 | Safety check untuk tipe tak dikenal | 🔒 **SAFE** |
| 6 | Dynamic Hash Map | Object `{}` + fallback `\|\| []` | 13 | Fleksibel untuk tipe baru | 🧪 **FLEXIBLE** |
| 7 | Object.values() | Object `{}` + `Object.values()` | 9 | ❌ Gagal di edge case | ❌ **BROKEN** |

---

## 🧪 TEST CASES

```javascript
// Test 1: Campuran Ranged & Melee
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// Test 2: Semua Ranged (Melee kosong)
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// Test 3: String kosong
console.log(meleeRangedGrouping(''));
// []
```

---

⬆️ Kembali ke [README.md](./README.md) · 📖 Detail: [ringkasan-algoritma-semua-versi.md](./ringkasan-algoritma-semua-versi.md)
