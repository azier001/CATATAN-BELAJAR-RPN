# 📋 Ringkasan Versi Kode — Cheat Sheet

### ✨ _Semua versi solusi dalam satu halaman untuk copy-paste cepat_

> 🎯 **Tujuan:** Referensi ringkas seluruh versi kode challenge graduates
> tanpa penjelasan panjang — langsung salin dan gunakan.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧱 | [V1 — `for...of`](#v1) | Imperatif, paling eksplisit |
| 🔧 | [V2 — `reduce` Konvensional](#v2) | Deklaratif dengan if-check klasik |
| ✨ | [V3 — `reduce` + `\|\|=`](#v3) | Modern, paling ringkas |
| 🚫 | [Anti-Pattern](#anti-pattern) | Kode yang harus DIHINDARI |
| 📊 | [Tabel Perbandingan](#perbandingan) | Quick comparison semua versi |

---

<a name="v1"></a>

## 🧱 V1 — `for...of` (Imperatif)

```javascript
function graduates(students) {
  const result = {};

  for (const { name, score, class: className } of students) {
    if (!result[className]) {
      result[className] = [];
    }
    if (score > 75) {
      result[className].push({ name, score });
    }
  }

  return result;
}
```

> **Kapan pakai:** Belajar logika dasar, debugging, codebase yang butuh readability maksimal.

---

<a name="v2"></a>

## 🔧 V2 — `reduce` Konvensional

```javascript
const graduates = (students) => {
  return students.reduce((acc, { name, score, class: className }) => {
    if (!acc[className]) {
      acc[className] = [];
    }
    if (score > 75) {
      acc[className].push({ name, score });
    }
    return acc;
  }, {});
};
```

> **Kapan pakai:** Tim campuran, codebase fungsional, ingin satu ekspresi return.

---

<a name="v3"></a>

## ✨ V3 — `reduce` + `||=` (Best Practice)

```javascript
const graduates = (students) => {
  return students.reduce((acc, { name, score, class: className }) => {
    acc[className] ||= [];
    if (score > 75) {
      acc[className].push({ name, score });
    }
    return acc;
  }, {});
};
```

> **Kapan pakai:** Codebase modern (ES2021+), code review level senior, produksi.

---

<a name="anti-pattern"></a>

## 🚫 Anti-Pattern — `filter().reduce()`

```javascript
// ❌ JANGAN GUNAKAN untuk challenge ini!
const graduates = (students) => {
  return students
    .filter(({ score }) => score > 75)
    .reduce((acc, { name, score, class: className }) => {
      acc[className] ||= [];
      acc[className].push({ name, score });
      return acc;
    }, {});
};
// ⛔ Kelas tanpa murid lulus akan HILANG dari output
```

> [!CAUTION]
> Filter membuang murid gagal **beserta info kelasnya** sebelum reduce
> sempat membuat map. Detail: [04 — Gotcha: Edge Case](docs/04-gotcha-edge-case.md)

---

<a name="perbandingan"></a>

## 📊 Tabel Perbandingan Cepat

| Aspek | V1 `for...of` | V2 `reduce` | V3 `reduce + \|\|=` |
| :--- | :---: | :---: | :---: |
| **Baris kode** | 11 | 10 | 8 |
| **Gaya** | Imperatif | Deklaratif | Deklaratif + Modern |
| **ES Version** | ES6 | ES6 | ES2021 |
| **Readability** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| **Idiomatik** | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| **Output** | ✅ Identik | ✅ Identik | ✅ Identik |

---

> 📖 **Penjelasan lengkap** setiap versi beserta proses berpikir step-by-step
> tersedia di dokumentasi utama:
> - [01 — Analisis Pola](docs/01-analisis-pola.md)
> - [02 — Solusi Bertahap](docs/02-solusi-bertahap.md)
> - [03 — Evolusi Solusi](docs/03-evolusi-solusi.md)

---

⬆️ [Kembali ke README](README.md)
