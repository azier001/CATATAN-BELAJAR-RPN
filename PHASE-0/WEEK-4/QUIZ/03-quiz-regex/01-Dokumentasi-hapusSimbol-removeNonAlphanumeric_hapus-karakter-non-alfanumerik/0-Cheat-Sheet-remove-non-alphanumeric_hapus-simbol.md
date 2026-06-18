# 🔄 Cheat Sheet — Hapus Simbol / Remove Non-Alphanumeric

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Regex Negasi Eksplisit `[^a-z0-9]` ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const hapusSimbol = (str) => {
  return str.replace(/[^a-z0-9]/gi, '');
};
```

> 🔑 Paling ringkas (1 baris), idiomatik, dan presisi. Flag `i` menghilangkan kebutuhan tulis `A-Z`, flag `g` memastikan semua simbol terhapus. **Tidak menyertakan underscore** — cocok untuk "bersih total".

---

### 2. Regex Shorthand `\W` (One-Liner)

```javascript
const hapusSimbol = (str) => {
  return str.replace(/\W+/g, '');
};
```

> 🔑 Lebih pendek dari V1, tapi `\W` = `[^a-zA-Z0-9_]` yang **mempertahankan underscore**. Aman jika soal tidak mempermasalahkan `_`. Gunakan `/[\W_]+/g` jika underscore juga harus dihapus.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. Looping + Whitelist (`for...of` + `.includes()`) ⭐ `PALING INTUITIF`

```javascript
const hapusSimbol = (str) => {
  let result = '';
  const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789';

  for (const char of str) {
    if (allowed.includes(char.toLowerCase())) {
      result += char;
    }
  }

  return result;
};
```

> 🔑 Pendekatan whitelist — alurnya paling eksplisit dan mudah dibaca. Trick `.toLowerCase()` agar cukup mendaftar huruf kecil saja. Cocok untuk pemula atau ketika butuh logika tambahan di dalam loop.

---

### 4. Iterasi Manual (`for...of` + Regex `.test()`)

```javascript
const hapusSimbol = (str) => {
  let result = '';

  for (const char of str) {
    if (/\w/.test(char)) {
      result += char;
    }
  }

  return result;
};
```

> 🔑 Pendekatan inklusif — "kumpulkan yang valid". Melatih logika filtering per karakter. Catatan: `\w` **menyertakan underscore** (`_`).

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 5. ASCII `charCodeAt` — Low-Level Solution

```javascript
const hapusSimbol = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    const isNumber = code >= 48 && code <= 57;   // 0-9
    const isUpper  = code >= 65 && code <= 90;   // A-Z
    const isLower  = code >= 97 && code <= 122;  // a-z

    if (isNumber || isUpper || isLower) {
      result += str[i];
    }
  }

  return result;
};
```

> 🔑 Paling verbose (~12 baris) tapi melatih pemahaman encoding karakter. Tidak bergantung pada Regex engine. ⚠️ Harus hafal rentang ASCII — mudah lupa satu rentang.

---

## ⚠️ GOTCHA CEPAT

### `\W` vs `[^a-z0-9]` — Hati-hati Underscore!

```javascript
const str = "hello_world";

// ❌ \W mempertahankan underscore
str.replace(/\W/g, '');
// → "hello_world"  ← underscore masih ada!

// ✅ [^a-z0-9] menghapus underscore
str.replace(/[^a-z0-9]/gi, '');
// → "helloworld"  ← bersih total
```

> 🔑 `\w` = `[a-zA-Z0-9_]` — underscore dianggap "word character". Jika `_` harus ikut dihapus, pakai `[^a-z0-9]/gi` atau `/[\W_]+/g`.

---

### Lupa Flag `g` — Hanya Hapus Simbol Pertama!

```javascript
"a!b@c#".replace(/[^a-z0-9]/i, '');
// → "ab@c#"  ← Hanya simbol pertama (!) yang terhapus

"a!b@c#".replace(/[^a-z0-9]/gi, '');
// → "abc"  ← Semua simbol terhapus ✅
```

> 🔑 Tanpa flag `g` (global), `.replace()` hanya menghapus **kemunculan pertama**. Selalu tambahkan `g`!

---

## 📊 QUICK COMPARISON

| Versi | Baris | Pendekatan | Keunggulan Utama | Rekomendasi |
|:------|:-----:|:-----------|:-----------------|:------------|
| **V1 — Regex `[^a-z0-9]`** | 1 | Blacklist (hapus yang dilarang) | Ringkas, presisi, idiomatik | ⭐ Production & Interview |
| **V2 — Regex `\W`** | 1 | Blacklist (shorthand) | Paling pendek | ✅ Aman jika `_` tidak masalah |
| **V3 — Looping + Whitelist** | ~8 | Whitelist (simpan yang diizinkan) | Mudah dibaca, fleksibel | ✅ Pemula & logika tambahan |
| **V4 — `for...of` + `.test()`** | ~7 | Inklusif (kumpulkan valid) | Kontrol per karakter | 📚 Belajar filtering |
| **V5 — ASCII `charCodeAt`** | ~12 | Cek rentang kode ASCII | Pemahaman low-level | 📚 Belajar encoding karakter |

---

## 🧪 TEST CASES

```javascript
// === Edge Cases ===
console.log(hapusSimbol(''));            // ''
console.log(hapusSimbol('@@@###'));      // ''
console.log(hapusSimbol('@a@'));         // 'a'
console.log(hapusSimbol('   '));         // ''

// === Normal Cases ===
console.log(hapusSimbol('coding'));      // 'coding'
console.log(hapusSimbol('test%$4aa'));   // 'test4aa'
console.log(hapusSimbol('ma@#k!an~'));   // 'makan'
console.log(hapusSimbol('123abcDEF'));   // '123abcDEF'

// === Complex Cases ===
console.log(hapusSimbol('devel0p3r s3j@@ati')); // 'devel0p3rs3jati'
console.log(hapusSimbol('1+3-5*2=100'));        // '1352100'
console.log(hapusSimbol(' hello! '));            // 'hello'
console.log(hapusSimbol('a!b@c#1$2%3'));        // 'abc123'
```

---

📚 [← Kembali ke README](./README.md) • 📖 [Dokumentasi Lengkap → docs/](./docs/)
