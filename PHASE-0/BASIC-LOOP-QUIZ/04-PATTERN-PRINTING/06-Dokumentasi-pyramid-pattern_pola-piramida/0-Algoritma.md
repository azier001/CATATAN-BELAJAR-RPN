# 📋 Ringkasan Algoritma — Pola Piramida (Pyramid Pattern)

### ✨ _Quick reference: buka → lihat kode → langsung ingat_

> 🎯 File ini berisi **kode final** dari semua versi solusi. Untuk penjelasan detail "Kenapa", lihat [README.md](./README.md).

---

## 🔑 Rumus Kunci

```
🌌 Jumlah Spasi   = num - row
⭐ Jumlah Bintang = (2 × row) - 1
```

| Baris (`row`) | Spasi (`num - row`) | Bintang (`2*row - 1`) |
|:---:|:---:|:---:|
| 1 | 4 | 1 |
| 2 | 3 | 3 |
| 3 | 2 | 5 |
| 4 | 1 | 7 |
| 5 | 0 | 9 |

---

## ✅ Versi 1 — Nested Loop (Wajib Nested Loop)

```javascript
const piramida = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let space = 1; space <= num - row; space++) {
      pattern += ' ';
    }

    for (let star = 1; star <= 2 * row - 1; star++) {
      pattern += '*';
    }

    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat soal **mewajibkan** nested loop.

---

## ✅ Versi 2 — Single Loop + `.repeat()`

```javascript
const piramida = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    let space = ' '.repeat(num - row);
    let star = '*'.repeat(2 * row - 1);

    pattern += `${space}${star}\n`;
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat butuh kode ringkas dan mudah dibaca di *real project*.

---

## ✅ Versi 2B — Ultra-Ringkas (Tanpa Variabel Perantara)

```javascript
const piramida = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += ' '.repeat(num - row) + '*'.repeat(2 * row - 1) + '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat rumusnya sederhana dan ingin kode seminimal mungkin.

---

## 📊 Perbandingan Cepat

| | V1 🔄 | V2 ⚡ | V2B 🚀 |
|---|:---:|:---:|:---:|
| Loop | 3 | 1 | 1 |
| Readability | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Baris kode | ~10 | ~7 | ~5 |
| Syarat soal | ✅ | ❌ | ❌ |

---

## 📤 Expected Output (`num = 5`)

```
    *
   ***
  *****
 *******
*********
```

---

> 📝 Untuk penjelasan lengkap (Algoritma Tahan Lupa, Blueprint, Naming Convention, Gotchas), lihat [README.md](./README.md).
