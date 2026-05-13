# 📋 Ringkasan Algoritma — Pola Persegi Bolong (Hollow Square Pattern)

### ✨ _Quick reference: buka → lihat kode → langsung ingat_

> 🎯 File ini berisi **kode final** dari semua versi solusi. Untuk penjelasan detail "Kenapa", lihat [README.md](./README.md).

---

## 🔑 Rumus Kunci

```
🔲 Ukuran Grid     = num × num (indeks mulai dari 0)
⬆️ Sisi Atas       = row === 0
⬇️ Sisi Bawah      = row === num - 1
⬅️ Sisi Kiri       = col === 0
➡️ Sisi Kanan      = col === num - 1

Cetak '*' jika SALAH SATU terpenuhi (boundary), selain itu cetak ' ' (spasi).
```

---

## ✅ Versi 1 — Nested Loop + Ternary (Best Practice Ujian)

```javascript
function persegiBolong(num) {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
      pattern +=
        row === 0 || row === num - 1 || col === 0 || col === num - 1 ? '*' : ' ';
    }
    pattern += '\n';
  }

  return pattern;
}
```

> 📌 **Kapan pakai:** Saat soal **mewajibkan** nested loop. 2 loop, 4 kondisi boundary digabung `||`.

---

## ✅ Versi 2 — Single Loop + `.repeat()` (Best Practice Industri)

```javascript
function persegiBolong(num) {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    if (row === 0 || row === num - 1) {
      pattern += '*'.repeat(num) + '\n';
    } else {
      pattern += '*' + ' '.repeat(num - 2) + '*' + '\n';
    }
  }

  return pattern;
}
```

> 📌 **Kapan pakai:** Saat butuh performa tinggi — 1 loop, bedakan 2 jenis baris (penuh vs bolong).

---

## 📊 Perbandingan Cepat

| | V1 ⭐ | V2 🚀 |
|---|:---:|:---:|
| Loop | 2 (nested) | 1 |
| Kompleksitas | O(N²) | O(N)* |
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Performa | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| String Concat | `num × num` kali | `num` kali |
| Cocok untuk | Ujian, semua level | Production |

> *\*`.repeat()` melakukan iterasi internal, tapi dieksekusi oleh engine native C++ yang jauh lebih cepat.*

---

## 📤 Expected Output (`num = 5`)

```
*****
*   *
*   *
*   *
*****
```

---

> 📝 Untuk penjelasan lengkap (Algoritma Tahan Lupa, Blueprint, Naming Convention, Gotchas), lihat [README.md](./README.md).
