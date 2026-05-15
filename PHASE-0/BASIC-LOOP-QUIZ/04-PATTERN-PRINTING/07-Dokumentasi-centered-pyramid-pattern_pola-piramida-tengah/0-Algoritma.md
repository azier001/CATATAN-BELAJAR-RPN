# 📋 Ringkasan Algoritma — Piramida Tengah (Centered Pyramid)

### ✨ _Quick reference: buka → lihat kode → langsung ingat_

> 🎯 File ini berisi **kode final** dari semua versi solusi. Untuk penjelasan detail "Kenapa", lihat [README.md](./README.md) atau folder [docs/](./docs/).

---

## 🔑 Rumus Kunci

```
🌌 Jumlah Spasi   = num - row
⭐ Jumlah Bintang = row
📝 Karakter Cetak = '* ' (bintang + spasi)
```

| Baris (`row`) | Spasi (`num - row`) | Bintang (`row`) |
|:---:|:---:|:---:|
| 1 | 4 | 1 |
| 2 | 3 | 2 |
| 3 | 2 | 3 |
| 4 | 1 | 4 |
| 5 | 0 | 5 |

### 🔑 Rumus Kunci (0-Indexed)

```
🌌 Jumlah Spasi   = num - row - 1
⭐ Jumlah Bintang = row + 1
```

| Baris (`row`) | Spasi (`num - row - 1`) | Bintang (`row + 1`) |
|:---:|:---:|:---:|
| 0 | 4 | 1 |
| 1 | 3 | 2 |
| 2 | 2 | 3 |
| 3 | 1 | 4 |
| 4 | 0 | 5 |

> 📌 **Perbedaan:** Saat `row` mulai dari 0, rumus spasi perlu `- 1` ekstra dan rumus bintang perlu `+ 1`.

---

## ✅ Versi 1 — Nested Loop (Wajib Nested Loop)

```javascript
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let space = 1; space <= num - row; space++) {
      pattern += ' ';
    }

    for (let star = 1; star <= row; star++) {
      pattern += '* ';
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
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += ' '.repeat(num - row) + '* '.repeat(row) + '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat butuh kode ringkas dan mudah dibaca di *real project*.

---

## ✅ Versi 3 — Nested Loop (0-Indexed)

```javascript
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let space = 0; space < num - row - 1; space++) {
      pattern += ' ';
    }

    for (let star = 0; star <= row; star++) {
      pattern += '* ';
    }

    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat soal **mewajibkan** nested loop DAN konteks kode menggunakan 0-indexed.

---

## ✅ Versi 3B — Single Loop + `.repeat()` (0-Indexed)

```javascript
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    pattern += ' '.repeat(num - row - 1) + '* '.repeat(row + 1) + '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat butuh kode ringkas dengan 0-indexed.

---

## 📊 Perbandingan Cepat

| | V1 🔄 | V2 ⚡ | V3 🔢 | V3B 🔢 |
|---|:---:|:---:|:---:|:---:|
| Loop | 3 | 1 | 3 | 1 |
| Indexing | 1-based | 1-based | 0-based | 0-based |
| Readability | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Baris kode | ~10 | ~5 | ~10 | ~5 |
| Syarat soal | ✅ | ❌ | ✅ | ❌ |

---

## 📤 Expected Output (`num = 5`)

```
    *
   * *
  * * *
 * * * *
* * * * *
```

---

> 📝 Untuk penjelasan lengkap (Algoritma Tahan Lupa, Blueprint, Naming Convention, Gotchas), lihat [README.md](./README.md) atau folder [docs/](./docs/).
