# 📋 Ringkasan Algoritma — Pola X (X Pattern)

### ✨ _Quick reference: buka → lihat kode → langsung ingat_

> 🎯 File ini berisi **kode final** dari semua versi solusi. Untuk penjelasan detail "Kenapa", lihat [README.md](./README.md).

---

## 🔑 Rumus Kunci

```
🔲 Ukuran Grid       = num × num (indeks mulai dari 0)
⬇️ Diagonal Utama (\) = row === col
⬆️ Diagonal Terbalik (/) = row + col === num - 1

Cetak '*' jika SALAH SATU terpenuhi, selain itu cetak ' ' (spasi).
```

---

## ✅ Versi 1 — Nested Loop (Best Practice)

```javascript
const polaX = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
      pattern += (row === col || row + col === num - 1) ? '*' : ' ';
    }
    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat soal **mewajibkan** nested loop. Paling mudah dibaca — 2 loop, 1 ternary.

---

## ✅ Versi 2 — Single Loop + Array.fill()

```javascript
const polaX = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    let baris = Array(num).fill(' ');
    baris[row] = '*';
    baris[num - 1 - row] = '*';
    pattern += baris.join('') + '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat ingin pendekatan "kanvas spasi → tembak bintang" — lebih ringkas dan intuitif.

---

## ✅ Versi 3 — 1D Array Buffer (Ultra Efficient)

```javascript
const polaX = (num) => {
  const panjangTotal = (num + 1) * num;
  const grid = Array(panjangTotal).fill(' ');

  for (let row = 0; row < num; row++) {
    const awalBaris = row * (num + 1);
    grid[awalBaris + num] = '\n';
    grid[awalBaris + row] = '*';
    grid[awalBaris + (num - 1 - row)] = '*';
  }

  return grid.join('');
};
```

> 📌 **Kapan pakai:** Saat butuh performa absolut — 1 array raksasa, `.join('')` hanya 1 kali.

---

## 📊 Perbandingan Cepat

| | V1 ⭐ | V2 🎯 | V3 🚀 |
|---|:---:|:---:|:---:|
| Loop | 2 (nested) | 1 | 1 |
| Kompleksitas | O(N²) | O(N²) | O(N) |
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Performa | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Cocok untuk | Ujian, semua level | Kode ringkas | Performa absolut |

---

## 📤 Expected Output (`num = 5`)

```
*   *
 * * 
  *  
 * * 
*   *
```

---

> 📝 Untuk penjelasan lengkap (Algoritma Tahan Lupa, Blueprint, Naming Convention, Gotchas), lihat [README.md](./README.md).
