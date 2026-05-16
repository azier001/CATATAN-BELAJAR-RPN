# 📋 Ringkasan Algoritma — Piramida Terbalik (Inverted Pyramid)

### ✨ _Quick reference: buka → lihat kode → langsung ingat_

> 🎯 File ini berisi **rumus kunci dan kode final** dari semua versi. Untuk penjelasan lengkap, lihat [README.md](./README.md) atau folder [docs/](./docs/).

---

## 🔑 Rumus Kunci

```
🌌 Jumlah Spasi   = row - 1
⭐ Jumlah Bintang = 2 * (num - row) + 1
📝 Karakter Cetak = '*' (bintang saja)
```

| Baris (`row`) | Spasi (`row - 1`) | Bintang (`2*(num-row)+1`) |
|:---:|:---:|:---:|
| 1 | 0 | 9 |
| 2 | 1 | 7 |
| 3 | 2 | 5 |
| 4 | 3 | 3 |
| 5 | 4 | 1 |

---

## ✅ V1 — Nested Loop

```javascript
const piramidaTerbalik = (num) => {
  let pattern = '';
  for (let row = 1; row <= num; row++) {
    for (let space = 1; space <= row - 1; space++) pattern += ' ';
    for (let star = 1; star <= 2 * num - (2 * row - 1); star++) pattern += '*';
    pattern += '\n';
  }
  return pattern;
};
```

---

## ✅ V2 — `.repeat()`

```javascript
const piramidaTerbalik = (num) => {
  let pattern = '';
  for (let row = 1; row <= num; row++) {
    pattern += ' '.repeat(row - 1) + '*'.repeat(2 * (num - row) + 1) + '\n';
  }
  return pattern;
};
```

---

## ⭐ V3 — Reverse Loop (Rekomendasi!)

```javascript
const piramidaTerbalik = (num) => {
  let pattern = '';
  for (let row = num; row >= 1; row--) {
    pattern += ' '.repeat(num - row) + '*'.repeat(2 * row - 1) + '\n';
  }
  return pattern;
};
```

> 📌 Rumus **sama persis** dengan piramida normal — hanya arah loop yang dibalik!

---

## 📊 Perbandingan Cepat

| | V1 🔄 | V2 ⚡ | V3 ⭐ |
|---|:---:|:---:|:---:|
| Loop | 3 | 1 | 1 |
| Arah | Maju | Maju | Mundur |
| Rumus baru? | ✅ | ✅ | ❌ |
| Readability | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 📤 Expected Output (`num = 5`)

```
*********
 *******
  *****
   ***
    *
```

---

> 📝 Untuk versi 0-indexed dan penjelasan lengkap, lihat [docs/08-ringkasan-algoritma.md](./docs/08-ringkasan-algoritma.md).
