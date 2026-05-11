# 📋 Ringkasan Algoritma — Papan Catur (Cheat Sheet)

### ✨ _Review cepat semua versi dalam satu halaman — tanpa harus buka file lain._

---

## ⚡ Rumus Universal (Berlaku di Semua Versi)

```
(row + col) % 2 === 0  →  '#'   (posisi GENAP)
(row + col) % 2 !== 0  →  ' '   (posisi GANJIL)
```

> Ini adalah **jantung** dari semua versi. Tidak peduli teknik loopnya apa, rumus ini tidak pernah berubah.

---

## 🔁 Versi 1 — Nested Loop

```javascript
const papanCatur = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {       // [LOOP BARIS]
    for (let col = 1; col <= num; col++) {     //   [LOOP KOLOM]
      pattern += (row + col) % 2 === 0 ? '#' : ' ';  // [LOGIKA]
    }
    pattern += '\n';                           // [NEWLINE]
  }

  return pattern;
};
```

| Kunci | Penjelasan |
|-------|-----------|
| Indeks mulai dari | `1` |
| Deteksi pindah baris | Otomatis — `'\n'` di luar loop `col` |
| Variabel kunci | `row`, `col`, `pattern` |

---

## 🔢 Versi 2 — Single Loop (1D → 2D)

```javascript
const papanCatur = (num) => {
  let pattern = '';

  for (let i = 0; i < num * num; i++) {       // [LOOP TUNGGAL]
    const row = Math.floor(i / num);           //   [MAPPING BARIS]
    const col = i % num;                       //   [MAPPING KOLOM]

    pattern += (row + col) % 2 === 0 ? '#' : ' ';  // [LOGIKA]

    if (col === num - 1) pattern += '\n';      // [DETEKSI UJUNG]
  }

  return pattern;
};
```

| Kunci | Penjelasan |
|-------|-----------|
| Indeks mulai dari | `0` |
| Rumus baris | `Math.floor(i / num)` |
| Rumus kolom | `i % num` |
| Deteksi pindah baris | `if (col === num - 1)` |

---

## ⚗️ Versi 3 — Functional (Array.from)

```javascript
const papanCatur = (num) =>
  Array.from({ length: num }, (_, row) =>     // [GENERATOR BARIS]
    Array.from({ length: num }, (_, col) =>   //   [GENERATOR KOLOM]
      (row + col) % 2 === 0 ? '#' : ' '      //   [LOGIKA]
    ).join('')                                //   [JOIN KOLOM]
  ).join('\n');                               // [JOIN BARIS]
```

| Kunci | Penjelasan |
|-------|-----------|
| Indeks mulai dari | `0` |
| Tidak ada `pattern` | Tidak perlu variabel sementara |
| Trailing newline | ❌ Tidak ada (beda dengan V1 & V2) |
| `_` | Konvensi: parameter sengaja diabaikan |

---

## ⚖️ Perbandingan Cepat

| Aspek | V1 Nested Loop | V2 Single Loop | V3 Functional |
|-------|:--------------:|:--------------:|:-------------:|
| Jumlah Loop | 2 | 1 | 0 |
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Trailing `\n` | ✅ Ada | ✅ Ada | ❌ Tidak ada |
| Variabel sementara | `pattern` | `pattern` | — |
| Indeks mulai | 1 | 0 | 0 |
| Cocok untuk | Pemula, wawancara | Game dev, grafis | React, modern JS |

---

## 🧠 Kamus Variabel (Semua Versi)

| Peran | ✅ Gunakan | ❌ Jangan |
|-------|:----------:|:---------:|
| Penampung pola | `pattern` | `result`, `str` |
| Loop baris | `row` | `i`, `x`, `r` |
| Loop kolom | `col` | `j`, `y`, `c` |
| Indeks 1D | `i` | `index`, `n` |
| Param tidak terpakai | `_` | `item`, `val` |

---

## ⚠️ Jebakan Utama (Wajib Ingat)

| # | Jebakan | Solusi |
|---|---------|--------|
| 1 | `'\n'` di **dalam** loop kolom | Pindahkan ke **luar** loop kolom |
| 2 | Kotak putih dibiarkan kosong | Isi dengan `' '` (spasi), bukan string kosong |
| 3 | Fungsi pakai `console.log`, bukan `return` | Selalu gunakan `return pattern` |
| 4 | Indeks `row` dan `col` tidak konsisten (1 vs 0) | Konsisten di satu konvensi per versi |
| 5 | `col === num` (bukan `num - 1`) di Versi 2 | Kolom terakhir selalu `num - 1` |
| 6 | `.join('')` dan `.join('\n')` tertukar di Versi 3 | Inner → `''`, outer → `'\n'` |

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [06 — Challenge Insight](./06-challenge-insight.md) | [README](./README.md) | — |
