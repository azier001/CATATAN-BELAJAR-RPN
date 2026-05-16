# 📋 Ringkasan Algoritma — Segitiga Siku-siku Terbalik (Inverted Right Triangle)

### ✨ _Quick reference: buka → lihat kode → langsung ingat_

> 🎯 File ini berisi **rumus kunci dan kode final** dari semua versi. Untuk penjelasan lengkap, lihat [README.md](./README.md).

---

## 🔑 Rumus Kunci

```
⭐ Jumlah Bintang = num - row + 1  (rumus baru)
⭐ Jumlah Bintang = row             (reverse loop — daur ulang!)
📝 Karakter Cetak = '*' (bintang saja)
```

| Baris (`row`) | Bintang (`num - row + 1`) |
|:---:|:---:|
| 1 | 5 → `*****` |
| 2 | 4 → `****` |
| 3 | 3 → `***` |
| 4 | 2 → `**` |
| 5 | 1 → `*` |

---

## ✅ V1 — Nested Loop (Rumus Baru)

```javascript
const segitigaTerbalik = (num) => {
  let pattern = '';
  for (let row = 1; row <= num; row++) {
    for (let star = 1; star <= num - row + 1; star++) pattern += '*';
    pattern += '\n';
  }
  return pattern;
};
```

---

## ✅ V2 — Reverse Loop (Daur Ulang Rumus!)

```javascript
const segitigaTerbalik = (num) => {
  let pattern = '';
  for (let row = num; row >= 1; row--) {
    for (let star = 1; star <= row; star++) pattern += '*';
    pattern += '\n';
  }
  return pattern;
};
```

> 📌 Rumus bintang **sama persis** dengan segitiga normal — hanya arah loop yang dibalik!

---

## ⭐ V3 — `.repeat()` (Rekomendasi!)

```javascript
const segitigaTerbalik = (num) => {
  let pattern = '';
  for (let row = num; row >= 1; row--) {
    pattern += '*'.repeat(row) + '\n';
  }
  return pattern;
};
```

> 📌 Reverse loop + `.repeat()` — paling ringkas dan readable!

---

## 📊 Perbandingan Cepat

| | V1 🔄 | V2 🔁 | V3 ⚡ |
|---|:---:|:---:|:---:|
| Loop | 2 | 2 | 1 |
| Arah | Maju | Mundur | Mundur |
| Rumus baru? | ✅ | ❌ | ❌ |
| Readability | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Syarat Quiz | ✅ | ✅ | ❌ |

---

## 📤 Expected Output (`num = 5`)

```
*****
****
***
**
*
```

---

> 📝 Untuk penjelasan step-by-step, analogi, dan naming convention, lihat [README.md](./README.md).
