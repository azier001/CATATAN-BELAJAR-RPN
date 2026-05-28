# 🔍 checkAB — Dokumentasi Challenge JavaScript

### ✨ _Mendeteksi sepasang 'a' dan 'b' yang dipisahkan tepat 3 karakter di tengahnya_

> 🎯 **Tujuan:** Memahami secara mendalam cara menyelesaikan challenge `checkAB` — mulai dari analisis pola indeks, membangun solusi loop bertahap, mengeksplorasi versi RegEx yang elegan, hingga menerapkan prinsip clean code & naming convention.

---

## 🧩 Deskripsi Challenge

Buat function `checkAB(str)` yang mengembalikan `true` jika di dalam string terdapat karakter `'a'` dan `'b'` yang dipisahkan oleh **tepat 3 karakter** di antaranya. Arah `a→b` maupun `b→a` keduanya valid. Spasi juga dihitung sebagai karakter.

```
checkAB('barbarian')  →  true    // 'b___a' → b(ari)a, selisih indeks 4
checkAB('abc')        →  false   // 'a' dan 'b' hanya berselisih 1
checkAB('a   b')      →  true    // 3 spasi di antara 'a' dan 'b'
```

---

## 🔑 Konsep Kunci

> **"Jarak 3 karakter di antara"** = selisih indeks **persis 4**.
> Jika `str[i]` adalah `'a'`, maka `str[i + 4]` harus `'b'` — atau sebaliknya.

---

## 🧪 Test Cases

```javascript
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
```

---

## 💻 Kode Final (Quick Reference)

### Versi Loop — Junior-Friendly

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

### Versi RegEx — Senior-Friendly (One-liner)

```javascript
const checkAB = (text) => {
  return /a...b|b...a/.test(text);
};
```

---

## 📁 Dokumentasi Detail

| File | Isi |
|------|-----|
| [01-analisis-pola.md](./docs/01-analisis-pola.md) | Visualisasi indeks, breakdown manual `"barbarian"`, penemuan rumus |
| [02-solusi-bertahap.md](./docs/02-solusi-bertahap.md) | Algoritma step-by-step, Blueprint kerangka kode, Kamus Variabel |
| [03-evolusi-solusi.md](./docs/03-evolusi-solusi.md) | Perbandingan Loop vs RegEx, Gotcha spasi di RegEx |
| [04-clean-code.md](./docs/04-clean-code.md) | Review naming convention, tabel ❌ vs ✅, kode production-ready |

---

> 📝 **Catatan:** Dokumentasi ini dibuat pada **28 Mei 2026** berdasarkan sesi mentoring challenge `checkAB` di **Google Antigravity** dengan JavaScript (ES6+).
