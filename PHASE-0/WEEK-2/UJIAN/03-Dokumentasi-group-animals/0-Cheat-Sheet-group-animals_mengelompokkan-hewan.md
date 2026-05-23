# 🔄 Cheat Sheet — Group Animals (Mengelompokkan Hewan)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Object Grouping ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const groupAnimals = (animals) => {
  const groups = {};

  for (const animal of animals) {
    const firstChar = animal[0];

    if (!groups[firstChar]) {
      groups[firstChar] = [];
    }

    groups[firstChar].push(animal);
  }

  return Object.values(groups).sort();
};
```

> 🔑 Akses grup langsung via key object — tidak perlu loop pencarian. Paling *clean*, efisien O(n), dan standar industri.

---

### 2. Array.find() ⭐ `BEST PURE ARRAY`

```javascript
function groupAnimals(animals) {
  const result = [];

  for (const animal of animals) {
    const foundGroup = result.find((group) => group[0][0] === animal[0]);
    foundGroup ? foundGroup.push(animal) : result.push([animal]);
  }

  result.sort((a, b) => a[0][0].localeCompare(b[0][0]));
  return result;
}
```

> 🔑 Pendekatan pure array paling ringkas. `.find()` menggantikan nested loop manual — cocok jika constraint melarang penggunaan Object.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. Nested Loop + `isFound` Flag `PALING INTUITIF`

```javascript
const groupAnimals = (animals) => {
  const result = [];

  for (const animal of animals) {
    const firstChar = animal[0];
    let isFound = false;

    for (const group of result) {
      if (group[0][0] === firstChar) {
        group.push(animal);
        isFound = true;
        break;
      }
    }

    if (!isFound) result.push([animal]);
  }

  result.sort((a, b) => a[0][0].localeCompare(b[0][0]));
  return result;
};
```

> 🔑 Logika paling eksplisit — buka setiap "laci" satu per satu, cocokkan label. Sangat bagus untuk melatih pemahaman nested loop dan flag.

---

### 4. Nested Loop + `foundGroup` Variable

```javascript
function groupAnimals(animals) {
  const result = [];

  for (const animal of animals) {
    let foundGroup = null;

    for (const group of result) {
      if (group[0][0] === animal[0]) {
        foundGroup = group;
        break;
      }
    }

    foundGroup ? foundGroup.push(animal) : result.push([animal]);
  }

  result.sort((a, b) => a[0][0].localeCompare(b[0][0]));
  return result;
}
```

> 🔑 Variasi nested loop yang menyimpan referensi grup ke variabel `foundGroup` alih-alih boolean flag — ternary di akhir menentukan push atau buat baru.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 5. Sort-First (Urutkan Input Dulu)

```javascript
function groupAnimals(animals) {
  const sortedAnimals = [...animals].sort((a, b) => a[0].localeCompare(b[0]));
  const grouped = {};

  for (const animal of sortedAnimals) {
    const firstChar = animal[0];

    if (!grouped[firstChar]) {
      grouped[firstChar] = [];
    }

    grouped[firstChar].push(animal);
  }

  return Object.values(grouped);
}
```

> 🔑 Sort input di awal → grup otomatis berurutan → tidak perlu sort di akhir. **Perhatian:** urutan elemen *di dalam* grup berubah menjadi alfabetis (bukan urutan input asli).

---

### 6. Array.findIndex()

```javascript
function groupAnimals(animals) {
  const result = [];

  for (const animal of animals) {
    const idx = result.findIndex((group) => group[0][0] === animal[0]);
    idx !== -1 ? result[idx].push(animal) : result.push([animal]);
  }

  result.sort((a, b) => a[0][0].localeCompare(b[0][0]));
  return result;
}
```

> 🔑 Mirip `.find()` tapi mengembalikan indeks. Berguna jika kamu butuh posisi grup untuk operasi lain. Wajib cek `!== -1`.

---

### 7. One-Liner (Show Off) ⚠️ `JANGAN PAKAI DI PRODUCTION`

```javascript
const groupAnimals = (a) =>
  [...a.reduce((r, v) => (
    (g = r.find((x) => x[0][0] === v[0]))
      ? g.push(v)
      : r.push([v]), r
  ), [])]
  .sort((x, y) => x[0][0].localeCompare(y[0][0]));
```

> 🔑 Seluruh logika dalam satu ekspresi menggunakan `.reduce()`. Sangat sulit dibaca — hanya untuk demonstrasi kemampuan, **bukan** untuk kode nyata.

---

## ⚠️ GOTCHA CEPAT

### Sort di Awal vs Sort di Akhir

```javascript
// ❌ SALAH — Urutan dalam grup jadi alphabetical, bukan urutan input
const sorted = [...animals].sort();
for (const animal of sorted) { /* grouping */ }

// ✅ BENAR — Loop input original, sort grup di akhir
for (const animal of animals) { /* grouping */ }
result.sort((a, b) => a[0][0].localeCompare(b[0][0]));
```

### Lupa Sort Grup di Akhir

```javascript
// ❌ SALAH — Grup tidak terurut A-Z
return result;

// ✅ BENAR — Sort antar grup secara alfabetis
result.sort((a, b) => a[0][0].localeCompare(b[0][0]));
return result;
```

### `group[0]` vs `group[0][0]`

```javascript
// ❌ SALAH — group[0] = 'ayam' (kata utuh), bukan huruf
if (group[0] === firstChar) { ... }

// ✅ BENAR — group[0][0] = 'a' (huruf pertama dari kata pertama)
if (group[0][0] === firstChar) { ... }
```

### `findIndex()` Tanpa Check `-1`

```javascript
// ❌ SALAH — result[-1] = undefined → error
const idx = result.findIndex(...);
result[idx].push(animal);

// ✅ BENAR — Cek dulu sebelum akses
const idx = result.findIndex(...);
idx !== -1 ? result[idx].push(animal) : result.push([animal]);
```

### Posisi `if (!isFound)` — Di Luar Loop!

```javascript
// ❌ SALAH — Buat grup baru di setiap iterasi inner loop
for (const group of result) {
  if (group[0][0] === firstChar) { ... }
  if (!isFound) result.push([animal]); // BUG!
}

// ✅ BENAR — Cek setelah SEMUA grup dicek
for (const group of result) {
  if (group[0][0] === firstChar) { ... }
}
if (!isFound) result.push([animal]);
```

### Bentrok Nama Variabel

```javascript
// ❌ SyntaxError — Nama bentrok dengan parameter
function groupAnimals(animals) {
  const animals = [...animals].sort();
}

// ✅ Gunakan nama baru
function groupAnimals(animals) {
  const sortedAnimals = [...animals].sort();
}
```

---

## 📊 QUICK COMPARISON

| # | Versi | Kategori | Lines | Struktur Data | Efisiensi | Rekomendasi |
|:-:|-------|----------|:-----:|:-------------:|:---------:|:-----------:|
| 1 | Object Grouping | 🏆 Best Practice | 11 | Object `{}` | 🟢 O(n) + sort | ⭐ **#1 Pick** |
| 2 | Array.find() | 🏆 Best Practice | 8 | Array `[]` | 🟡 O(n×k) | Best Pure Array |
| 3 | Nested Loop + Flag | 🧠 Fundamental | 16 | Array `[]` | 🟡 O(n×k) | Paling Intuitif |
| 4 | Nested Loop + Var | 🧠 Fundamental | 14 | Array `[]` | 🟡 O(n×k) | Variasi #3 |
| 5 | Sort-First | 🧪 Eksperimental | 13 | Object `{}` | 🟢 O(n log n) | Alternatif |
| 6 | Array.findIndex() | 🧪 Eksperimental | 8 | Array `[]` | 🟡 O(n×k) | Butuh Index |
| 7 | One-Liner | 🧪 Eksperimental | 5 | Array `[]` | 🟡 O(n×k) | ⚠️ Jangan Pakai |

---

## 🧪 TEST CASES

```javascript
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

// Edge Cases
console.log(groupAnimals([]));
// []

console.log(groupAnimals(['zebra']));
// [ ['zebra'] ]

console.log(groupAnimals(['ayam', 'anoa', 'angsa']));
// [ ['ayam', 'anoa', 'angsa'] ]
```
