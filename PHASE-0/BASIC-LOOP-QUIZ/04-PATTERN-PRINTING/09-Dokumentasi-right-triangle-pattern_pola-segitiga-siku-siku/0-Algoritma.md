# 📋 Ringkasan Algoritma — Segitiga Siku-siku (Right Triangle)

### ✨ _Quick reference: buka → lihat kode → langsung ingat_

> 🎯 File ini berisi **rumus kunci dan kode final** dari semua versi. Untuk penjelasan lengkap, lihat [README.md](./README.md).

---

## 🔑 Rumus Kunci

```
⭐ Jumlah Bintang = row
📝 Karakter Cetak = '*' (bintang saja)
```

| Baris (`row`) | Bintang (`row`) |
|:---:|:---:|
| 1 | 1 → `*` |
| 2 | 2 → `**` |
| 3 | 3 → `***` |
| 4 | 4 → `****` |
| 5 | 5 → `*****` |

---

## ✅ V1 — Nested Loop

```javascript
const segitigaSiku = (num) => {
  let pattern = '';
  for (let row = 1; row <= num; row++) {
    for (let star = 1; star <= row; star++) pattern += '*';
    pattern += '\n';
  }
  return pattern;
};
```

---

## ⭐ V2 — `.repeat()` (Rekomendasi!)

```javascript
const segitigaSiku = (num) => {
  let pattern = '';
  for (let row = 1; row <= num; row++) {
    pattern += '*'.repeat(row) + '\n';
  }
  return pattern;
};
```

> 📌 Nested loop diganti dengan `.repeat(row)` — lebih ringkas dan readable!

---

## 📊 Perbandingan Cepat

| | V1 🔄 | V2 ⚡ |
|---|:---:|:---:|
| Loop | 2 | 1 |
| Gaya | Imperatif | Deklaratif |
| Readability | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Syarat Quiz | ✅ | ❌ |

---

## 📤 Expected Output (`num = 5`)

```
*
**
***
****
*****
```

---

> 📝 Untuk penjelasan step-by-step, analogi, dan naming convention, lihat [README.md](./README.md).
