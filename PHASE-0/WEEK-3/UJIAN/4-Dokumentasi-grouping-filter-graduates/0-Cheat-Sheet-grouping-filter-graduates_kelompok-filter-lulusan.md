# 🔄 Cheat Sheet — Graduates (Grouping + Filter Lulusan)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. `reduce` + `||=` (ES2021) ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const graduates = (students) => {
  return students.reduce((acc, { name, score, class: className }) => {
    acc[className] ||= [];
    if (score > 75) {
      acc[className].push({ name, score });
    }
    return acc;
  }, {});
};
```

> 🔑 Paling ringkas & modern. `||=` menggantikan pola `if (!acc[key]) acc[key] = []` dalam satu baris. Cocok untuk codebase ES2021+ dan code review level senior.

---

### 2. `reduce` Functional (Konvensional)

```javascript
const graduates = (students) => {
  const minGrade = 75;

  return students.reduce((acc, { name, score, class: className }) => {
    if (!acc[className]) acc[className] = [];

    if (score > minGrade) acc[className].push({ name, score });

    return acc;
  }, {});
};
```

> 🔑 Satu `reduce` tanpa variabel perantara — langsung return hasilnya. Batas kelulusan dipisah ke `minGrade` agar mudah diubah. Cocok untuk tim campuran & codebase fungsional.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. `for...of` Imperative ⭐ `PALING INTUITIF`

```javascript
function graduates(students) {
  const result = {};
  const minGrade = 75;

  for (const { name, score, class: className } of students) {
    if (!result[className]) result[className] = [];

    if (score > minGrade) {
      result[className].push({ name, score });
    }
  }

  return result;
}
```

> 🔑 Alur paling eksplisit — siapkan wadah, loop, cek, push, return. Tidak perlu paham `reduce`. Paling cocok untuk pemula dan debugging.

---

### 4. Group-first (`for...of` + `for...in`)

```javascript
const graduates = (students) => {
  const grouped = {};

  // Tahap 1: group semua student per class
  for (const { name, score, class: className } of students) {
    if (!grouped[className]) grouped[className] = [];
    grouped[className].push({ name, score });
  }

  // Tahap 2: filter yang lulus per class
  const result = {};

  for (const className in grouped) {
    result[className] = grouped[className].filter(s => s.score > 75);
  }

  return result;
};
```

> 🔑 Paling mudah di-debug — `console.log(grouped)` setelah Tahap 1 untuk inspect hasil antara. Dua tahap terpisah: grouping murni, lalu filter per class.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 5. 2-pass (`reduce` + `filter/forEach`)

```javascript
const graduates = (students) => {
  // Pass 1: daftarkan semua class dari data ORIGINAL
  const result = students.reduce((acc, { class: className }) => {
    if (!acc[className]) acc[className] = [];
    return acc;
  }, {});

  // Pass 2: filter yang lulus, lalu push ke class yang sesuai
  students
    .filter(({ score }) => score > 75)
    .forEach(({ name, score, class: className }) => {
      result[className].push({ name, score });
    });

  return result;
};
```

> 🔑 Separation of concern paling jelas — Pass 1 hanya registrasi class, Pass 2 hanya isi data. Tapi iterasi 2x dan ada array sementara dari `filter()`.

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ Inisialisasi di DALAM kondisi score → class tanpa lulusan HILANG
if (score > 75) {
  if (!result[className]) result[className] = [];
  result[className].push({ name, score });
}

// ✅ Inisialisasi TERPISAH dari kondisi score → class tanpa lulusan tetap muncul
if (!result[className]) result[className] = [];
if (score > 75) result[className].push({ name, score });
```

```javascript
// ❌ `class` adalah reserved keyword → SyntaxError!
for (const { name, score, class } of students) { ... }

// ✅ Rename saat destructuring
for (const { name, score, class: className } of students) { ... }
```

```javascript
// ❌ Lupa `return acc` di reduce → acc jadi undefined di iterasi berikutnya
students.reduce((acc, student) => {
  // ... operasi ...
  // lupa return acc!
}, {});

// ✅ Selalu return acc
students.reduce((acc, student) => {
  // ... operasi ...
  return acc;
}, {});
```

```javascript
// ❌ `return result` di DALAM loop → fungsi berhenti setelah iterasi pertama
for (const student of students) {
  // ... operasi ...
  return result; // keluar terlalu cepat!
}

// ✅ `return result` di LUAR loop
for (const student of students) {
  // ... operasi ...
}
return result;
```

```javascript
// ❌ for...in pada ARRAY → mengiterasi index string ('0', '1', '2')
for (const student in students) { ... }

// ✅ for...of untuk ARRAY, for...in untuk OBJECT
for (const student of students) { ... }     // nilai array
for (const className in grouped) { ... }    // key object
```

---

## 📊 QUICK COMPARISON

| Versi | Gaya | Loop | Baris | Keunggulan Utama | Label |
|-------|------|:----:|:-----:|------------------|-------|
| `reduce` + `||=` | Functional + Modern | 1x | ~8 | Paling ringkas, ES2021 idiomatik | ⭐ Best Practice |
| `reduce` Konvensional | Functional | 1x | ~10 | Satu return, tanpa variabel perantara | ✅ Recommended |
| `for...of` Imperative | Imperative | 1x | ~11 | Paling mudah dibaca, familiar | ✅ Pemula Friendly |
| Group-first | Imperative | 2x | ~14 | Paling mudah di-debug (`grouped`) | ✅ Debug Friendly |
| 2-pass | Mixed | 2x | ~12 | Separation of concern paling jelas | 🧪 Alternatif |

---

## 🧪 TEST CASES

```javascript
// Test 1 — Edge case: array kosong
console.log(graduates([]));
// → {}

// Test 2 — Normal case: dua class, satu student tidak lulus
console.log(graduates([
  { name: 'Dimitri',   score: 90, class: 'foxes'  },
  { name: 'Alexei',    score: 85, class: 'wolves'  },
  { name: 'Sergei',    score: 74, class: 'foxes'   },
  { name: 'Anastasia', score: 78, class: 'wolves'  }
]));
// → {
//     foxes:  [{ name: 'Dimitri', score: 90 }],
//     wolves: [{ name: 'Alexei', score: 85 }, { name: 'Anastasia', score: 78 }]
//   }

// Test 3 — Normal case: tiga class, beberapa student tidak lulus
console.log(graduates([
  { name: 'Alexander', score: 100, class: 'foxes'  },
  { name: 'Alisa',     score: 76,  class: 'wolves' },
  { name: 'Vladimir',  score: 92,  class: 'foxes'  },
  { name: 'Albert',    score: 71,  class: 'wolves' },
  { name: 'Viktor',    score: 80,  class: 'tigers' }
]));
// → {
//     foxes:  [{ name: 'Alexander', score: 100 }, { name: 'Vladimir', score: 92 }],
//     wolves: [{ name: 'Alisa', score: 76 }],
//     tigers: [{ name: 'Viktor', score: 80 }]
//   }
```
