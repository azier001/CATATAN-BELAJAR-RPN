# 🚀 Evolusi Solusi — Dari V1 ke V3

### ✨ _Berevolusi dari loop imperatif ke reduce modern dengan sentuhan senior_

> 🎯 **Tujuan:** Mengeksplorasi dua versi refactoring menggunakan `reduce`,
> memahami operator `||=` (ES2021), lalu membandingkan ketiga versi solusi
> secara head-to-head.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| ❓ | [Kenapa `reduce` Tanpa `filter`?](#kenapa-reduce) | Alasan teknis memilih reduce tunggal |
| 🔧 | [V2 — `reduce` Konvensional](#v2) | Versi reduce dengan if-check klasik |
| ✨ | [V3 — `reduce` + `\|\|=`](#v3) | Senior touch dengan Logical OR Assignment |
| 📊 | [Perbandingan 3 Versi](#perbandingan) | Tabel head-to-head V1 vs V2 vs V3 |
| 🏷️ | [Naming Convention](#naming) | Ringkasan best practice penamaan variabel |

---

<a name="kenapa-reduce"></a>

## ❓ Kenapa `reduce` Tanpa `filter`?

Developer sering tergoda menggunakan `.filter().reduce()` — saring dulu,
baru kelompokkan. Tapi untuk challenge ini, **itu berbahaya**.

```
🎯 Masalah     → .filter() membuang murid gagal BESERTA info kelasnya
📌 Akibat      → Kelas yang muridnya gagal semua hilang dari output
🔐 Solusi      → Gunakan reduce TUNGGAL dari awal hingga akhir
```

> [!WARNING]
> Operasi `filter(score > 75)` di awal rantai akan melenyapkan semua murid
> gagal **sebelum** reduce sempat membuat map kelasnya. Deep dive tentang
> anti-pattern ini ada di [04 — Gotcha: Edge Case](04-gotcha-edge-case.md).

---

<a name="v2"></a>

## 🔧 Versi 2 — `reduce` Konvensional

Logika "Grouping First" yang sama persis diterapkan ke dalam `reduce`.
Perbedaannya hanya mekanisme loop: `for...of` diganti `reduce`.

```javascript
const graduates = (students) => {
  return students.reduce((acc, { name, score, class: className }) => {
    // 1. Grouping First: Buat map kelas jika belum ada
    if (!acc[className]) {
      acc[className] = [];
    }

    // 2. Conditional Push: Jika murid lulus, masukkan datanya
    if (score > 75) {
      acc[className].push({ name, score });
    }

    return acc; // Wajib me-return accumulator
  }, {}); // ← Initial value: objek kosong
};
```

> [!NOTE]
> Variabel `result` berubah menjadi `acc` (*accumulator*) — ini adalah
> **standar konvensi industri** untuk parameter pertama `reduce`.
> Keduanya berfungsi sama: menampung hasil akhir yang terus dibangun.

---

<a name="v3"></a>

## ✨ Versi 3 — `reduce` + `||=` (Senior Touch)

Blok inisialisasi 3 baris (`if` + assignment) diringkas menjadi **1 baris**
menggunakan fitur JavaScript modern **Logical OR Assignment** (ES2021):

```javascript
const graduates = (students) => {
  return students.reduce((acc, { name, score, class: className }) => {

    // ✨ SENIOR TOUCH: Logical OR Assignment
    // Dibaca: "Jika acc[className] nilainya falsy (belum ada), berikan []"
    acc[className] ||= [];

    if (score > 75) {
      acc[className].push({ name, score });
    }

    return acc;
  }, {});
};
```

### Cara Baca Operator `||=`

```javascript
// Versi panjang (3 baris):
if (!acc[className]) {
  acc[className] = [];
}

// Versi ringkas (1 baris) — hasil IDENTIK:
acc[className] ||= [];
```

> [!TIP]
> Operator `||=` bekerja seperti: *"Jika sisi kiri bernilai falsy
> (`undefined`, `null`, `0`, `""`, `false`), maka assign sisi kanan."*
> Sangat elegan untuk inisialisasi nilai default.

---

<a name="perbandingan"></a>

## 📊 Perbandingan 3 Versi (Head-to-Head)

| Aspek | V1 `for...of` | V2 `reduce` | V3 `reduce` + `\|\|=` |
| :--- | :--- | :--- | :--- |
| **Gaya** | Imperatif | Deklaratif | Deklaratif + Modern |
| **Jumlah baris** | 11 baris | 10 baris | 8 baris |
| **Inisialisasi map** | `if` + assignment | `if` + assignment | `\|\|=` (1 baris) |
| **Accumulator** | `result` (manual) | `acc` (built-in) | `acc` (built-in) |
| **Return** | Eksplisit di akhir | Wajib tiap iterasi | Wajib tiap iterasi |
| **Readability** | ⭐⭐⭐ Paling mudah | ⭐⭐ Menengah | ⭐⭐ Menengah |
| **Best practice** | ✅ Baik | ✅ Baik | ⭐ Paling idiomatik |
| **Cocok untuk** | Pemula, debugging | Tim campuran | Codebase modern |

> [!IMPORTANT]
> Ketiga versi menghasilkan **output yang 100% identik**. Perbedaannya
> murni pada gaya penulisan dan tingkat keringkasan kode.

---

<a name="naming"></a>

## 🏷️ Ringkasan Naming Convention

Penamaan variabel yang konsisten di **semua versi** solusi:

| Peran | Nama yang Digunakan | Alasan |
| :--- | :--- | :--- |
| Parameter input | `students` | Plural — menampung sekumpulan murid (Array) |
| Properti kelas | `className` | Alias dari `class` (reserved keyword) |
| Penampung hasil | `result` (V1) / `acc` (V2-V3) | Eksplisit dan standar industri |
| Data yang di-push | `{ name, score }` | Destructuring langsung — bersih dan ringkas |

> [!TIP]
> Gunakan **plural** untuk Array (`students`) dan **singular** untuk satu
> elemen di dalamnya. Ini konvensi universal yang langsung menjelaskan
> tipe data tanpa perlu membaca deklarasi.

---

⬅️ [02 — Solusi Bertahap](02-solusi-bertahap.md) · ➡️ [04 — Gotcha: Edge Case](04-gotcha-edge-case.md)
