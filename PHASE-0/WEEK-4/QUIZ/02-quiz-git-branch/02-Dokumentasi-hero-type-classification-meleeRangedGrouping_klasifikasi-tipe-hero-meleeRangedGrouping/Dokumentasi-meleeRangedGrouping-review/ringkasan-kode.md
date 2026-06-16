# 📄 Ringkasan Kode — meleeRangedGrouping

### ✨ _Cheat sheet semua versi solusi — siap copy-paste, tanpa narasi panjang_

> 🎯 **Tujuan:** File ini adalah referensi cepat. Buka kapan saja kamu butuh kode finalnya tanpa harus membaca ulang penjelasan lengkap.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Pendekatan |
|----|--------|------------|
| 🔨 | [Versi 1](#v1) | Imperative — `for...of` |
| ⚙️ | [Versi 2](#v2) | Declarative — `.reduce()` |
| 🧩 | [Versi 3](#v3) | Dynamic — Object Hash Map |
| 🧪 | [Test Cases](#test-cases) | Kode pengujian |

---

<a name="v1"></a>

## 🔨 Versi 1: `for...of` (Imperative)

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

```
🏷️ Gaya       → Imperative (manual loop)
📖 Keterbacaan → ⭐⭐⭐ Paling mudah dibaca
🎯 Cocok untuk → Pemula, interview, tim yang prefer eksplisit
```

---

<a name="v2"></a>

## ⚙️ Versi 2: `.reduce()` (Declarative)

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

```
🏷️ Gaya       → Declarative (Functional Programming)
📖 Keterbacaan → ⭐⭐ Butuh paham konsep accumulator
🎯 Cocok untuk → Tim FP-style, codebase modern
```

---

<a name="v3"></a>

## 🧩 Versi 3: Object Hash Map (Dynamic)

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

```
🏷️ Gaya       → Imperative + Dynamic Grouping
📖 Keterbacaan → ⭐⭐ Butuh paham Object sebagai wadah
🎯 Cocok untuk → Tipe hero bisa bertambah di masa depan
```

> [!WARNING]
> Jangan gunakan `Object.values(grouped)` untuk return! Urutan key di Object bergantung pada insertion order, sehingga bisa mengacaukan posisi index Ranged/Melee. Selalu ambil key secara eksplisit: `grouped['Ranged']` dan `grouped['Melee']`.

---

<a name="test-cases"></a>

## 🧪 Test Cases

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

⬆️ Kembali ke [README.md](README.md) · 📖 Detail lengkap: [docs/02-solusi-dan-evolusi.md](docs/02-solusi-dan-evolusi.md)
