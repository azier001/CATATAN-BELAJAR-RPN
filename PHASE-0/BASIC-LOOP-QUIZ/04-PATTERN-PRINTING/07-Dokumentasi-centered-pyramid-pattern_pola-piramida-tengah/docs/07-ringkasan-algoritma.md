# 📋 Ringkasan Algoritma — Piramida Tengah (Centered Pyramid)

### ✨ _Quick reference: buka → lihat rumus & kode → langsung ingat._

> 🎯 **Tujuan:** Menyediakan cheat sheet ringkas dari semua versi solusi. Untuk penjelasan detail "Kenapa", lihat file dokumentasi terkait di folder `docs/`.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔑 | [Rumus Kunci](#rumus) | Rumus 1-indexed & 0-indexed |
| ✅ | [V1 — Nested Loop](#v1) | 1-indexed, 3 loop |
| ✅ | [V2 — `.repeat()`](#v2) | 1-indexed, 1 loop |
| ✅ | [V2B — Ultra-Ringkas](#v2b) | 1-indexed, 1 baris inti |
| ✅ | [V3 — Nested Loop (0-Indexed)](#v3) | 0-indexed, 3 loop |
| ✅ | [V3B — `.repeat()` (0-Indexed)](#v3b) | 0-indexed, 1 baris inti |
| 📊 | [Perbandingan Cepat](#perbandingan) | Tabel komparasi semua versi |
| 📤 | [Expected Output](#output) | Hasil `num = 5` |

---

<a name="rumus"></a>
## 🔑 Rumus Kunci

### 1-Indexed (`row` mulai dari 1)

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

### 0-Indexed (`row` mulai dari 0)

```
🌌 Jumlah Spasi   = num - row - 1
⭐ Jumlah Bintang = row + 1
📝 Karakter Cetak = '* ' (bintang + spasi)
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

<a name="v1"></a>
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

<a name="v2"></a>
## ✅ Versi 2 — Single Loop + `.repeat()`

```javascript
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += ' '.repeat(num - row);
    pattern += '* '.repeat(row);
    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat butuh kode ringkas dan mudah dibaca di *real project*.

---

<a name="v2b"></a>
## ✅ Versi 2B — Ultra-Ringkas (Tanpa Variabel Perantara)

```javascript
const piramida2 = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += ' '.repeat(num - row) + '* '.repeat(row) + '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat rumusnya sederhana dan ingin kode seminimal mungkin.

---

<a name="v3"></a>
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

<a name="v3b"></a>
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

<a name="perbandingan"></a>
## 📊 Perbandingan Cepat

| | V1 🔄 | V2 ⚡ | V2B 🚀 | V3 🔢 | V3B 🔢 |
|---|:---:|:---:|:---:|:---:|:---:|
| Loop | 3 | 1 | 1 | 3 | 1 |
| Indexing | 1-based | 1-based | 1-based | 0-based | 0-based |
| Readability | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Baris kode | ~10 | ~7 | ~5 | ~10 | ~5 |
| Syarat soal | ✅ | ❌ | ❌ | ✅ | ❌ |

---

<a name="output"></a>
## 📤 Expected Output (`num = 5`)

```
    *
   * *
  * * *
 * * * *
* * * * *
```

---

> 📝 Untuk penjelasan lengkap (Algoritma Tahan Lupa, Blueprint, Naming Convention, Gotchas), lihat folder [docs/](./docs/).
