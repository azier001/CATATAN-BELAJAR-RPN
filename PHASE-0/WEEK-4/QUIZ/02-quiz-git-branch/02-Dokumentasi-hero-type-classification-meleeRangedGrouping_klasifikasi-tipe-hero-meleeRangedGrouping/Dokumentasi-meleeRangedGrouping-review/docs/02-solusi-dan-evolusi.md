# 💻 Solusi & Evolusi Kode

### ✨ _Dari solusi pertama yang polos, hingga 3 pendekatan berbeda yang saling melengkapi_

> 🎯 **Tujuan:** Setelah membaca file ini, kamu akan menguasai 3 cara menyelesaikan challenge ini (`for...of`, `.reduce()`, Hash Map), memahami kapan pakai yang mana, dan mengetahui jebakan umum yang harus dihindari.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔨 | [V1: Imperative (for...of)](#v1) | Solusi pertama yang dibangun step-by-step |
| ⚙️ | [V2: Declarative (.reduce())](#v2) | Refactoring ke gaya Functional Programming |
| 🧩 | [V3: Hash Map (Object Grouping)](#v3) | Pendekatan dinamis + pembedahan bug |
| ⚖️ | [Perbandingan 3 Versi](#perbandingan) | Tabel komparasi kapan pakai mana |
| ⚠️ | [Gotchas & Peringatan](#gotchas) | Jebakan umum yang harus diwaspadai |

---

<a name="v1"></a>

## 🔨 Versi 1: Imperative (`for...of`)

Kode dibangun secara bertahap mengikuti [5 langkah algoritma](01-analisis-dan-strategi.md#algoritma) dari file sebelumnya.

**Step 1 — Guard Clause:**
```javascript
if (!heroesString) return [];
```

**Step 2 — Inisialisasi Wadah + Parsing Tahap 1:**
```javascript
const groupedHeroes = [[], []];
const heroList = heroesString.split(',');
```

**Step 3 — Loop + Parsing Tahap 2 + Pengelompokan:**
```javascript
for (const heroItem of heroList) {
  const [name, type] = heroItem.split('-');

  if (type === 'Ranged') groupedHeroes[0].push(name);
  if (type === 'Melee') groupedHeroes[1].push(name);
}
```

**Kode Final V1 (Lengkap):**
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

---

<a name="v2"></a>

## ⚙️ Versi 2: Declarative (`.reduce()`)

Fungsi `.reduce()` diciptakan persis untuk kasus ini: mengambil array, lalu "menyusutkannya" ke dalam satu bentuk akhir (wadah `[ [], [] ]`).

**Step 1 — Menyiapkan reduce dan Initial Value:**
```javascript
return heroList.reduce((acc, heroItem) => {
  // acc = [[], []] (wadah yang terus dibawa)
  // heroItem = 'Razor-Ranged' (item saat ini)
}, [[], []]);
```

**Step 2 — Destructuring + Return Wadah:**
```javascript
return heroList.reduce((acc, heroItem) => {
  const [name, type] = heroItem.split('-');
  return acc; // ⚠️ WAJIB! Aturan emas reduce
}, [[], []]);
```

**Step 3 — Tambahkan Logika Pengelompokan (sama seperti V1).**

**Kode Final V2 (Lengkap):**
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

---

<a name="v3"></a>

## 🧩 Versi 3: Hash Map (Object Grouping)

Pendekatan ini menggunakan **Object `{}`** sebagai wadah dinamis yang secara otomatis membuat grup baru untuk setiap tipe hero yang ditemukan — tanpa perlu `if-else` hardcode.

### Kode Awal (Masih Ada Bug ❌)

```javascript
function meleeRangedGrouping(str) {
  if (str.length === 0) return [];

  const formatted = str.split(',');
  const grouped = {};

  for (const item of formatted) {
    const [name, type] = item.split('-');

    if (!grouped[type]) grouped[type] = [];
    grouped[type].push(name);
  }

  return Object.values(grouped); // ❌ BUG!
}
```

### Pembedahan Bug: `Object.values()` dan Insertion Order

> [!CAUTION]
> `Object.values()` mengembalikan array berdasarkan **urutan key yang dimasukkan pertama** (Insertion Order). Jika hero bertipe `Melee` muncul lebih dulu di input, maka kelompok Melee akan berada di index `[0]` — **melanggar aturan soal!**

**Simulasi kegagalan:**

| Tahap | Proses (Input: `'Axe-Melee,Razor-Ranged'`) | State Object |
|:-----:|---|---|
| 1 | `Axe-Melee` masuk duluan | `{ Melee: ['Axe'] }` |
| 2 | `Razor-Ranged` masuk belakangan | `{ Melee: ['Axe'], Ranged: ['Razor'] }` |
| 3 | `Object.values()` | `[ ['Axe'], ['Razor'] ]` ❌ Melee di index 0! |

### Solusi: Ambil Key Secara Eksplisit

**Kode Final V3 (Lengkap):**
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

> [!TIP]
> Operator `|| []` berfungsi sebagai **fallback**: jika `grouped['Ranged']` bernilai `undefined` (karena tidak ada hero Ranged di input), maka diganti dengan array kosong `[]`.

---

<a name="perbandingan"></a>

## ⚖️ Perbandingan 3 Versi

| Aspek | V1 (`for...of`) | V2 (`.reduce()`) | V3 (Hash Map) |
|---|---|---|---|
| **Gaya** | Imperative | Declarative | Imperative + Dynamic |
| **Performa** | `O(N)` ✅ | `O(N)` ✅ | `O(N)` ✅ |
| **Keterbacaan** | ⭐⭐⭐ Paling mudah | ⭐⭐ Butuh paham `acc` | ⭐⭐ Butuh paham Object |
| **Scalability** | ❌ Hardcode tipe | ❌ Hardcode tipe | ✅ Otomatis bikin grup baru |
| **Cocok Untuk** | Pemula, interview | Tim FP-style | Tipe hero bisa bertambah |

> [!NOTE]
> Ketiga versi sama-sama cepat secara performa (`O(N)` — hanya 1 kali loop). Perbedaannya murni pada **gaya penulisan** dan **skalabilitas**. Pilih sesuai kebutuhan dan standar tim.

---

<a name="gotchas"></a>

## ⚠️ Gotchas & Peringatan

> ⚠️ **Jangan `.split()` string kosong!**
> `''.split(',')` menghasilkan `['']` (array berisi 1 string kosong), bukan `[]`. Selalu tangani edge case `''` di baris paling awal dengan guard clause.

> ⚠️ **Jangan lupa `return acc` di `.reduce()`!**
> Tanpa `return acc`, wadah akumulator akan menjadi `undefined` di putaran berikutnya dan seluruh data hilang.

> ⚠️ **Jangan andalkan `Object.values()` untuk urutan baku!**
> Gunakan pengambilan key secara eksplisit (`grouped['Ranged']`) jika spesifikasi soal menuntut urutan tertentu.

> ⚠️ **Perhatikan urutan Array Destructuring!**
> `const [name, type]` berasumsi nama ada di index 0 dan tipe di index 1 dari hasil `.split('-')`. Jika format inputnya berubah, destructuring ini juga harus diubah.

---

⬅️ Kembali ke [01-analisis-dan-strategi.md](01-analisis-dan-strategi.md) · ⬆️ Kembali ke [README.md](../README.md)
