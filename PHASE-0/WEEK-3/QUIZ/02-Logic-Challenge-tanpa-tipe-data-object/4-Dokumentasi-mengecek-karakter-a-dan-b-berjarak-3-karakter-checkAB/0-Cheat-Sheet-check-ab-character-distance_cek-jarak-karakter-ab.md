# 🔄 Cheat Sheet — checkAB (Cek Jarak Karakter 'a' & 'b')

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. For Loop — Cek Mundur (`i - 4`) ⭐ `PALING DIREKOMENDASIKAN`

```javascript
function checkAB(str) {
  for (let i = 4; i < str.length; i++) {
    const currentChar = str[i];
    const prevChar = str[i - 4];

    const isAtoB = currentChar === 'b' && prevChar === 'a';
    const isBtoA = currentChar === 'a' && prevChar === 'b';

    if (isAtoB || isBtoA) return true;
  }

  return false;
}
```

> 🔑 Sweet spot performa & readability. O(n) waktu, O(1) memori. Naming convention `isAtoB`/`isBtoA` membuat kondisi langsung terbaca.

---

### 2. For Loop — Cek Maju (`i + 4`) ⭐ `PALING INTUITIF`

```javascript
const checkAB = (text) => {
  const limit = text.length - 4;

  for (let i = 0; i < limit; i++) {
    if (
      (text[i] === 'a' && text[i + 4] === 'b') ||
      (text[i] === 'b' && text[i + 4] === 'a')
    ) {
      return true;
    }
  }

  return false;
};
```

> 🔑 Versi junior-friendly. Logika `i + 4` lebih natural dibaca: "dari posisi ini, cek 4 langkah ke depan". Sama-sama O(n) dan O(1).

---

### 3. Regex One-liner

```javascript
const checkAB = (text) => {
  return /a...b|b...a/.test(text);
};
```

> 🔑 Paling ringkas. Tiap `.` cocokkan 1 karakter apapun → 3 titik = 3 karakter di antara. Gunakan jika tim sudah familiar regex.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 1. Kumpulkan Semua Index, Lalu Bandingkan (Nested Loop)

```javascript
function checkAB(str) {
  const indexesA = [];
  const indexesB = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') indexesA.push(i);
    if (str[i] === 'b') indexesB.push(i);
  }

  for (let i = 0; i < indexesA.length; i++) {
    for (let j = 0; j < indexesB.length; j++) {
      if (Math.abs(indexesA[i] - indexesB[j]) === 4) return true;
    }
  }

  return false;
}
```

> 🔑 Alur paling eksplisit: kumpulkan posisi → bandingkan selisih. Bagus untuk latihan tracing & debugging step-by-step. **Perhatian:** O(n²) waktu, O(n) memori.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 1. Array `some()` — Functional Style

```javascript
function checkAB(str) {
  return [...str].some((_, i) => {
    if (i < 4) return false;

    const currentChar = str[i];
    const prevChar = str[i - 4];

    const isAtoB = currentChar === 'b' && prevChar === 'a';
    const isBtoA = currentChar === 'a' && prevChar === 'b';

    return isAtoB || isBtoA;
  });
}
```

> 🔑 Paling ekspresif dengan gaya functional. `some()` otomatis berhenti saat ketemu `true`. **Trade-off:** `[...str]` membuat array baru → O(n) memori ekstra.

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ "Jarak 3" bukan berarti selisih index 3!
Math.abs(indexA - indexB) === 3  // SALAH — ini hanya 2 karakter di antara

// ✅ "Jarak 3 karakter di antara" = selisih index 4
Math.abs(indexA - indexB) === 4  // BENAR — a _ _ _ b (3 karakter di tengah)
```

```javascript
// ❌ indexOf() hanya return index PERTAMA
str.indexOf('a')  // Kalau 'a' muncul berkali-kali, yang ke-2 dst hilang

// ✅ Gunakan loop untuk tangkap SEMUA kemunculan
for (let i = 0; i < str.length; i++) { ... }
```

```javascript
// ❌ Lupa cek dua arah
currentChar === 'b' && prevChar === 'a'  // Hanya a→b

// ✅ Harus cek a→b DAN b→a
(currentChar === 'b' && prevChar === 'a') ||
(currentChar === 'a' && prevChar === 'b')
```

---

## 📊 QUICK COMPARISON

| Versi | Baris | Waktu | Memori | Keunggulan Utama | Label |
|-------|:-----:|:-----:|:------:|------------------|:-----:|
| For Loop (`i - 4`) | ~10 | O(n) | O(1) | Performa + Readability | ⭐ Rekomendasi |
| For Loop (`i + 4`) | ~10 | O(n) | O(1) | Logika intuitif maju | ⭐ Junior-friendly |
| Regex | ~3 | O(n) | O(1) | Paling ringkas | 🚀 Senior |
| `some()` | ~10 | O(n) | O(n) | Functional, ekspresif | 🧪 Alternatif |
| Nested Loop | ~15 | O(n²) | O(n) | Eksplisit, mudah di-trace | 📚 Belajar |

---

## 🧪 TEST CASES

```javascript
// TEST CASES — Copy-paste langsung untuk pengujian
console.log(checkAB('lane borrowed'));   // true
console.log(checkAB('i am sick'));       // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian'));       // true
console.log(checkAB('bacon and meat')); // false
console.log(checkAB('a   b'));           // true  — 3 spasi di antara
console.log(checkAB('abc'));             // false — selisih hanya 1
```
