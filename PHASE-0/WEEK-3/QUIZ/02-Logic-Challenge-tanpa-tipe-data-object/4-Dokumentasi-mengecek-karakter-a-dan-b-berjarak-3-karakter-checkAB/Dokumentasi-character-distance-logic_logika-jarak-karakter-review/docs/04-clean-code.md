# ✅ Fase 4: Clean Code & Naming Convention

### ✨ _Kode yang berjalan itu biasa — kode yang mudah dibaca orang lain itu luar biasa_

> 🎯 **Tujuan:** Me-review kebersihan kode dan memastikan setiap variabel punya nama yang deskriptif, bermakna, dan sesuai best practice.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔍 | [Review Variabel](#review) | Bedah nama variabel yang dipakai |
| 📐 | [Aturan `i`, `j`, `k`](#aturan-ijk) | Kapan boleh, kapan harus deskriptif |
| 💻 | [Kode Production-Ready](#production) | Versi final yang sudah di-refactor |

---

<a name="review"></a>

## 🔍 Review Variabel

Kita membedah dua variabel utama yang digunakan di solusi sebelumnya: `str` dan `i`.

| Variabel / Peran | ❌ Kurang Ideal | ✅ Rekomendasi | Alasan |
|------------------|:--------------:|:--------------:|--------|
| Parameter input string | `str`, `x`, `data` | `text` atau `word` | `str` adalah kependekan dari *string* — itu nama **tipe data**, bukan deskripsi isi. Best practice: gunakan kata benda yang menggambarkan **konteks isinya** |
| Penanda indeks loop | `idx`, `j`, `index` | `i` | Huruf `i` (*index/iterator*) adalah kesepakatan **standar universal** untuk loop sederhana satu tingkat. Justru lebih mudah dibaca daripada kepanjangannya |
| Batas iterasi | ditulis inline | `limit` | Menyimpan perhitungan `text.length - 4` ke variabel agar **tidak dihitung ulang** setiap iterasi + lebih mudah dibaca |

> [!IMPORTANT]
> 🔔 **Prinsip Utama Naming:** Nama variabel harus mendeskripsikan **apa isinya** atau **apa perannya** — bukan tipe datanya. `text` lebih baik dari `str` karena menjelaskan bahwa isinya adalah sebuah teks yang akan dicek.

---

<a name="aturan-ijk"></a>

## 📐 Aturan `i`, `j`, `k` — Kapan Boleh, Kapan Tidak

### ✅ Boleh pakai `i` — Loop tunggal (Single Loop)

```javascript
for (let i = 0; i < limit; i++) {
  // Hanya satu level loop → 'i' sudah cukup jelas
}
```

### ❌ Hindari `i`, `j` — Nested Loop (Loop bersarang)

```javascript
// ❌ Membingungkan — mudah tertukar
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    matrix[i][j] = '...';  // i itu baris atau kolom? 🤔
  }
}

// ✅ Deskriptif — langsung paham
for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
  for (let colIndex = 0; colIndex < cols; colIndex++) {
    matrix[rowIndex][colIndex] = '...';  // Jelas! ✨
  }
}
```

> [!TIP]
> 💡 **Aturan Praktis:** Semakin banyak level loop bersarang, semakin deskriptif nama variabelnya harus. Satu level? `i` cukup. Dua level atau lebih? Gunakan nama yang menjelaskan perannya.

---

<a name="production"></a>

## 💻 Kode Production-Ready

Berikut adalah dua versi final yang sudah menerapkan semua perbaikan naming convention.

### Versi Loop — Junior-Friendly

```javascript
const checkAB = (text) => {
  // Optimasi: simpan batas ke variabel agar tidak dihitung ulang tiap iterasi
  const limit = text.length - 4;

  for (let i = 0; i < limit; i++) {
    // Cek jarak maju sejauh 4 langkah (selisih indeks = 4)
    if (
      (text[i] === 'a' && text[i + 4] === 'b') ||
      (text[i] === 'b' && text[i + 4] === 'a')
    ) {
      return true; // Ketemu? Langsung berhenti (early return)
    }
  }

  return false;
};
```

### Versi RegEx — Senior-Friendly (One-liner)

```javascript
const checkAB = (text) => {
  return /a...b|b...a/.test(text);
};
```

**Perubahan dari versi sebelumnya:**

```diff
- const checkAB = (str) => {
+ const checkAB = (text) => {
-   for (let i = 0; i < str.length - 4; i++) {
+   const limit = text.length - 4;
+   for (let i = 0; i < limit; i++) {
```

> [!NOTE]
> 💡 **2 perubahan kecil, dampak besar:**
> 1. `str` → `text` — parameter sekarang mendeskripsikan isinya, bukan tipe datanya
> 2. `str.length - 4` → `limit` — perhitungan disimpan ke variabel, kode lebih bersih dan performan

---

| ⬅️ Sebelumnya | 📖 Daftar Isi |
|:--------------|:-------------:|
| [03-evolusi-solusi.md](./03-evolusi-solusi.md) | [README.md](../README.md) |
