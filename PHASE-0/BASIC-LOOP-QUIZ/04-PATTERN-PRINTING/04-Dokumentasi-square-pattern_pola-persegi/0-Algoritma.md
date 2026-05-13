# 📋 Ringkasan Algoritma — Pola Persegi (Square Pattern)

### ✨ _Quick reference: buka → lihat kode → langsung ingat_

> 🎯 File ini berisi **kode final** dari semua versi solusi. Untuk penjelasan detail "Kenapa", lihat [README.md](./README.md).

---

## 🔑 Rumus Kunci

```
📐 Jumlah Baris    = num
⭐ Bintang/Baris   = num
🧮 Total Bintang   = num × num
```

---

## ✅ Versi 1 — Nested Loop

```javascript
const persegi = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat soal **mewajibkan** nested loop. Fondasi paling dasar pattern printing.

---

## ✅ Versi 2 — Single Loop + `.repeat()`

```javascript
const persegi = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    pattern += '*'.repeat(num) + '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat butuh kode ringkas — `.repeat()` menggantikan loop dalam.

---

## ✅ Versi 3 — Functional (Tanpa Loop)

```javascript
const persegi = (num) => {
  if (num <= 0) return '';

  return Array(num).fill('*'.repeat(num)).join('\n');
};
```

> 📌 **Kapan pakai:** Saat di *real project* — pendekatan deklaratif, paling modern dan ringkas.

---

## 📊 Perbandingan Cepat

| | V1 🔄 | V2 ⚡ | V3 🎯 |
|---|:---:|:---:|:---:|
| Loop | 2 (nested) | 1 | 0 |
| Readability | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Performa | 🟡 Standar | 🟢 Lebih cepat | 🟢 Lebih cepat |
| Edge case | ❌ | ❌ | ✅ `num <= 0` |
| Cocok untuk | Belajar, ujian | Kode ringkas | Production |

---

## 📤 Expected Output (`num = 4`)

```
****
****
****
****
```

---

> 📝 Untuk penjelasan lengkap (Algoritma Tahan Lupa, Blueprint, Naming Convention, Gotchas), lihat [README.md](./README.md).
