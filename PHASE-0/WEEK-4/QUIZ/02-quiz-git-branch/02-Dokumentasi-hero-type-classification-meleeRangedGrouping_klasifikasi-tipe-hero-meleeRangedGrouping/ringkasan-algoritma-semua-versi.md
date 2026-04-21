# 📋 Ringkasan Algoritma: Semua Versi

> ⚡ **Cheat Sheet:** File ini merupakan ringkasan kode dari ke-4 versi `meleeRangedGrouping` yang kita pelajari. Gunakan ini sebagai referensi cepat tanpa perlu membaca ulang seluruh penjelasan.

---

### ❌ V1 — Object Grouping (Gagal di Edge Cases)
*Mencoba pola Object statis dinamis, namun gagal jika data terbalik posisinya atau ada kategori yang hilang.*

```javascript
function meleeRangedGroupingV1(str) {
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

---

### ⚡ V2 — Array Index Grouping (Performa Master)
*Menggunakan array 2D yang disiapkan sejak awal untuk menjaga posisi mutlak secara efisien.*

```javascript
function meleeRangedGroupingV2(str) {
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

---

### 🏷️ V3 — Semantic Array Grouping (Solusi Final)
*Versi paling manusiawi. Mengorbankan sedikit kesingkatan demi kemudahan dibaca oleh manusia atau engineer lain.*

```javascript
function meleeRangedGroupingV3(str) {
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

---

### 🔒 V4 — Fixed Object Grouping (Hybrid)
*Kompromi: Masih menggunakan pola Object untuk Grouping, namun memaksa hasil akhirnya menjadi struktur Array sesuai permintaan spesifikasi.*

```javascript
function meleeRangedGroupingV4(str) {
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

---

## 🔗 Navigation

- **📚 [← Kembali ke README](./README.md)**
- **📖 [← Part 8 — Test Cases](./docs/08-test-cases_kasus-pengujian.md)**
