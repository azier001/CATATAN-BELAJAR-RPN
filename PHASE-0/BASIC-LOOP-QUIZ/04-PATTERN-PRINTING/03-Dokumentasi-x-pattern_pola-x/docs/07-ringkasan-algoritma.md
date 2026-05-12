# 📋 Ringkasan Algoritma — Pola X (Cheat Sheet)

### ✨ _Review cepat semua versi solusi dalam satu halaman._

> 🎯 **Tujuan:** Halaman ini dirancang untuk **dibaca dalam 2 menit** saat kamu butuh mengingat kembali cara membuat pola X tanpa harus membaca seluruh dokumentasi.

---

## 🔑 Rumus Inti

```
Diagonal Utama  (\) →  row === col
Diagonal Terbalik (/) →  row + col === num - 1

Cetak '*' jika SALAH SATU terpenuhi, selain itu cetak ' ' (spasi).
```

---

## ⭐ Versi 1 — Nested Loop (Best Practice)

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

> 📌 **Ingat:** 2 loop, 1 kondisi ternary, `'\n'` di luar loop `col`.

---

## 🎯 Versi 2 — Single Loop + Array.fill()

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

> 📌 **Ingat:** Buat kanvas spasi → tembak 2 bintang → lebur `.join('')`.

---

## 🚀 Versi 3 — 1D Array Buffer (Ultra Efficient)

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

> 📌 **Ingat:** 1 array raksasa, loop hanya `num` kali, `.join('')` hanya 1 kali di akhir.

---

## 📊 Quick Comparison

| Aspek | V1 ⭐ | V2 | V3 🚀 |
|:------|:------|:---|:------|
| Loop | 2 (nested) | 1 | 1 |
| Kompleksitas | O(N²) | O(N²) | O(N) |
| Keterbacaan | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Performa | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Cocok untuk | Ujian & semua level | Kode ringkas | Performa absolut |

---

## ⚠️ Top 3 Gotchas

| # | Jebakan | Solusi |
|---|:--------|:------|
| 1 | Lupa cetak spasi (tanpa `else`) | Selalu sertakan `else { pattern += ' '; }` |
| 2 | Menulis `num` bukan `num - 1` | Diagonal terbalik = `row + col === num - 1` |
| 3 | `'\n'` di dalam loop `col` | Letakkan `'\n'` di luar loop `col`, di dalam loop `row` |

---

## 🏷️ Naming Quick Reference

| Peran | ✅ Pakai | ❌ Hindari |
|:------|:---------|:-----------|
| Penampung | `pattern` | `result`, `res` |
| Loop baris | `row` | `i`, `x` |
| Loop kolom | `col` | `j`, `y` |
| Array baris | `baris` | `arr`, `temp` |

---

## 📤 Expected Output (`num = 5`)

```text
*   *
 * *
  *
 * *
*   *
```

---

| ⬅️ Sebelumnya | 🏠 Home |
|:---:|:---:|
| [06 — Challenge Insight](./06-challenge-insight.md) | [README](../README.md) |
