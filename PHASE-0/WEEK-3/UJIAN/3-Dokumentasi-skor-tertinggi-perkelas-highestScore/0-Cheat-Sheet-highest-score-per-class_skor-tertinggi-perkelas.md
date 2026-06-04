# 🔄 Cheat Sheet — highestScore (Skor Tertinggi per Kelas)

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. `for...of` + Short-circuit `||` ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const highestScore = (students) => {
  const result = {};

  for (const { name, score, class: className } of students) {
    if (!result[className] || score > result[className].score) {
      result[className] = { name, score };
    }
  }

  return result;
};
```

> 🔑 Menggabungkan cek "kelas baru" dan "skor lebih tinggi" dalam satu kondisi `||`. Paling readable, mudah di-debug, dan cocok untuk semua level.

---

### 2. `.reduce()` Elegant — Functional Style

```javascript
const highestScore = (students) => {
  return students.reduce((result, { name, score, class: className }) => {
    if (!result[className] || score > result[className].score) {
      result[className] = { name, score };
    }
    return result;
  }, {});
};
```

> 🔑 Versi functional — tanpa variabel perantara, `reduce` langsung menghasilkan object hasil. Cocok untuk codebase yang mengutamakan functional style.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. `for...of` + `if/else if` Terpisah `PALING INTUITIF`

```javascript
const highestScore = (students) => {
  const classWinners = {};

  for (const { name, score, class: className } of students) {
    if (!classWinners[className]) {
      classWinners[className] = { name, score };
    } else if (score > classWinners[className].score) {
      classWinners[className] = { name, score };
    }
  }

  return classWinners;
};
```

> 🔑 Logika percabangan paling eksplisit — dua kondisi dipisah jelas. Sangat bagus untuk pemula yang sedang belajar alur `if/else if`.

---

### 4. Function Declaration + `if/else if` (Hasil Refactoring Eksperimen)

```javascript
function highestScore(students) {
  const result = {};

  for (const { name, score, class: className } of students) {
    if (!result[className]) {
      result[className] = { name, score };
    } else if (score > result[className].score) {
      result[className] = { name, score };
    }
  }

  return result;
}
```

> 🔑 Identik dengan V3 secara algoritma. Perbedaan: `function declaration` vs `arrow function`, dan penamaan variabel `result` vs `classWinners`.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

> ⚠️ Tidak ada versi eksperimental untuk challenge ini. Semua versi sudah tergolong clean dan production-ready.

---

## ⚠️ GOTCHA CEPAT

### `class` adalah Reserved Word

```javascript
// ❌ SALAH — SyntaxError
for (const { name, score, class } of students) { ... }

// ✅ BENAR — rename dengan alias
for (const { name, score, class: className } of students) { ... }
```

### `||` bukan `&&` di kondisi seleksi

```javascript
// ❌ SALAH — TypeError untuk kelas baru (akses .score dari undefined)
if (!result[className] && score > result[className].score) { ... }

// ✅ BENAR — || cukup salah satu terpenuhi
if (!result[className] || score > result[className].score) { ... }
```

### `return result` harus di LUAR loop

```javascript
// ❌ SALAH — berhenti setelah siswa pertama
for (const { ... } of students) {
  result[className] = { name, score };
  return result; // keluar terlalu cepat!
}

// ✅ BENAR
for (const { ... } of students) { ... }
return result;
```

### Bracket Notation untuk key dari variabel

```javascript
// ❌ SALAH — mencari key literal "className"
result.className = { name, score };

// ✅ BENAR — menggunakan nilai variabel sebagai key
result[className] = { name, score };
```

### `return result` wajib di dalam callback `reduce`

```javascript
// ❌ SALAH — result jadi undefined di iterasi ke-2
students.reduce((result, { ... }) => {
  result[className] = { name, score };
  // lupa return!
}, {});

// ✅ BENAR
students.reduce((result, { ... }) => {
  result[className] = { name, score };
  return result;
}, {});
```

### initialValue `{}` wajib ada di `reduce`

```javascript
// ❌ SALAH — elemen pertama jadi accumulator
students.reduce((result, { ... }) => { ... });

// ✅ BENAR
students.reduce((result, { ... }) => { ... }, {});
```

---

## 📊 QUICK COMPARISON

| Versi | Style | Baris Logika | Duplikasi | Short-circuit | Rekomendasi |
|-------|-------|:---:|:---:|:---:|:---:|
| 1. `for...of` + `||` | Imperative | 3 | ❌ | ✅ | ⭐ **Paling Direkomendasikan** |
| 2. `.reduce()` | Functional | 3 | ❌ | ✅ | ✅ Production Ready |
| 3. `for...of` + `if/else if` | Imperative | 5 | ✅ Ada | ❌ | 🧠 Untuk Belajar |
| 4. Function Declaration | Imperative | 5 | ✅ Ada | ❌ | 🧠 Untuk Belajar |

> **Semua versi:** O(n) waktu · O(k) memori (k = jumlah kelas) · Lolos semua test case

---

## 🧪 TEST CASES

```javascript
// Test Case #1: Edge case — array kosong
console.log(highestScore([]));
// Expected: {}

// Test Case #2: Normal case — dua kelas
console.log(highestScore([
  { name: 'Dimitri', score: 90, class: 'foxes' },
  { name: 'Alexei', score: 85, class: 'wolves' },
  { name: 'Sergei', score: 74, class: 'foxes' },
  { name: 'Anastasia', score: 78, class: 'wolves' }
]));
// Expected: { foxes: { name: 'Dimitri', score: 90 }, wolves: { name: 'Alexei', score: 85 } }

// Test Case #3: Normal case — tiga kelas
console.log(highestScore([
  { name: 'Alexander', score: 100, class: 'foxes' },
  { name: 'Alisa', score: 76, class: 'wolves' },
  { name: 'Vladimir', score: 92, class: 'foxes' },
  { name: 'Albert', score: 71, class: 'wolves' },
  { name: 'Viktor', score: 80, class: 'tigers' }
]));
// Expected: { foxes: { name: 'Alexander', score: 100 }, wolves: { name: 'Alisa', score: 76 }, tigers: { name: 'Viktor', score: 80 } }

// Test Case #4: Edge case — hanya satu siswa
console.log(highestScore([
  { name: 'A', score: 50, class: 'lion' }
]));
// Expected: { lion: { name: 'A', score: 50 } }

// Test Case #5: Edge case — skor sama, ambil yang pertama muncul
console.log(highestScore([
  { name: 'A', score: 70, class: 'lion' },
  { name: 'B', score: 70, class: 'lion' }
]));
// Expected: { lion: { name: 'A', score: 70 } }

// Test Case #6: Normal case — siswa kedua mengalahkan siswa pertama
console.log(highestScore([
  { name: 'Budi', score: 88, class: 'eagles' },
  { name: 'Siti', score: 92, class: 'eagles' },
  { name: 'Andi', score: 77, class: 'bears' }
]));
// Expected: { eagles: { name: 'Siti', score: 92 }, bears: { name: 'Andi', score: 77 } }
```
