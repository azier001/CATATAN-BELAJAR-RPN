# 📋 Ringkasan Algoritma — Pola Papan Catur (Chess Board Pattern)

### ✨ _Quick reference: buka → lihat kode → langsung ingat_

> 🎯 File ini berisi **kode final** dari semua versi solusi. Untuk penjelasan detail "Kenapa", lihat [README.md](./README.md).

---

## 🔑 Rumus Kunci

```
🎯 Logika Inti  = (row + col) % 2 === 0  →  '#'  (posisi genap)
                  (row + col) % 2 !== 0  →  ' '  (posisi ganjil)
📐 Ukuran Grid  = num × num
```

---

## ✅ Versi 1 — Nested Loop

```javascript
const papanCatur = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= num; col++) {
      pattern += (row + col) % 2 === 0 ? '#' : ' ';
    }
    pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat soal **mewajibkan** nested loop. Paling mudah dibaca dan dipahami.

---

## ✅ Versi 2 — Single Loop (1D → 2D)

```javascript
const papanCatur = (num) => {
  let pattern = '';

  for (let i = 0; i < num * num; i++) {
    const row = Math.floor(i / num);
    const col = i % num;

    pattern += (row + col) % 2 === 0 ? '#' : ' ';

    if (col === num - 1) pattern += '\n';
  }

  return pattern;
};
```

> 📌 **Kapan pakai:** Saat ingin eksplorasi mapping 1D ke 2D — cocok untuk game dev dan grafis.

---

## ✅ Versi 3 — Functional (Array.from)

```javascript
const papanCatur = (num) =>
  Array.from({ length: num }, (_, row) =>
    Array.from({ length: num }, (_, col) =>
      (row + col) % 2 === 0 ? '#' : ' '
    ).join('')
  ).join('\n');
```

> 📌 **Kapan pakai:** Saat butuh pendekatan modern dan deklaratif — cocok untuk React dan modern JS.

---

## 📊 Perbandingan Cepat

| | V1 🔄 | V2 🔢 | V3 ⚗️ |
|---|:---:|:---:|:---:|
| Loop | 2 (nested) | 1 | 0 |
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Indeks mulai | 1 | 0 | 0 |
| Trailing `\n` | ✅ Ada | ✅ Ada | ❌ Tidak ada |
| Cocok untuk | Pemula, ujian | Game dev | Modern JS |

---

## 📤 Expected Output (`num = 4`)

```
# # 
 # #
# # 
 # #
```

---

> 📝 Untuk penjelasan lengkap (Algoritma Tahan Lupa, Blueprint, Naming Convention, Gotchas), lihat [README.md](./README.md).
