# 📋 Ringkasan Algoritma — Piramida Terbalik (Inverted Pyramid)

### ✨ _Quick reference: buka → lihat kode → langsung ingat_

> 🎯 File ini berisi **kode final** dari semua versi solusi. Untuk penjelasan detail "Kenapa", lihat file-file di [docs/](./01-challenge-overview.md).

---

## 🔑 Rumus Kunci (1-Indexed)

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

### 🔑 Rumus Kunci (0-Indexed)

```
🌌 Jumlah Spasi   = row
⭐ Jumlah Bintang = 2 * (num - row) - 1
```

| Baris (`row`) | Spasi (`row`) | Bintang (`2*(num-row)-1`) |
|:---:|:---:|:---:|
| 0 | 0 | 9 |
| 1 | 1 | 7 |
| 2 | 2 | 5 |
| 3 | 3 | 3 |
| 4 | 4 | 1 |

---

## ✅ Versi 1 — Nested Loop (1-Indexed)

```javascript
const piramidaTerbalik = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let space = 1; space <= row - 1; space++) {
      pattern += ' ';
    }

    for (let star = 1; star <= 2 * num - (2 * row - 1); star++) {
      pattern += '*';
    }

    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat ingin melatih fundamental nested loop.

---

## ✅ Versi 2 — Single Loop + `.repeat()` (1-Indexed)

```javascript
const piramidaTerbalik = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += ' '.repeat(row - 1) + '*'.repeat(2 * (num - row) + 1) + '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat butuh kode ringkas dan mudah dibaca.

---

## ⭐ Versi 3 — Reverse Loop + `.repeat()` (Rekomendasi!)

```javascript
const piramidaTerbalik = (num) => {
  let pattern = '';

  for (let row = num; row >= 1; row--) {
    pattern += ' '.repeat(num - row) + '*'.repeat(2 * row - 1) + '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat sudah hafal rumus piramida normal — tinggal balik loop!

---

## 🔢 Versi 1 — Nested Loop (0-Indexed)

```javascript
const piramidaTerbalik = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let space = 0; space < row; space++) {
      pattern += ' ';
    }

    for (let star = 0; star < 2 * (num - row) - 1; star++) {
      pattern += '*';
    }

    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat konteks kode menggunakan 0-indexed + butuh nested loop.

---

## 🔢 Versi 2 — Single Loop + `.repeat()` (0-Indexed)

```javascript
const piramidaTerbalik = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    pattern += ' '.repeat(row) + '*'.repeat(2 * (num - row) - 1) + '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat butuh kode ringkas dengan 0-indexed.

---

## 📊 Perbandingan Cepat

| | V1 🔄 | V2 ⚡ | V3 ⭐ | V1-0 🔢 | V2-0 🔢 |
|---|:---:|:---:|:---:|:---:|:---:|
| Loop | 3 | 1 | 1 | 3 | 1 |
| Indexing | 1-based | 1-based | 1-based | 0-based | 0-based |
| Arah | Maju | Maju | Mundur | Maju | Maju |
| Readability | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Baris kode | ~10 | ~5 | ~5 | ~10 | ~5 |
| Rumus baru? | ✅ | ✅ | ❌ | ✅ | ✅ |

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

> 📝 Untuk penjelasan lengkap (Algoritma Tahan Lupa, Blueprint, Naming Convention, Gotchas), lihat [README.md](../README.md) atau folder [docs/](./01-challenge-overview.md).
