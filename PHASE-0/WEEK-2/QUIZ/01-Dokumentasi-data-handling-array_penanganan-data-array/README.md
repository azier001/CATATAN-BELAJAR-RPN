# 📦 Quiz: Data Handling Array — Penanganan Data Array

### ✨ _Kumpulan challenge manipulasi array JavaScript — dari array multidimensi hingga transformasi data dengan built-in methods_

> 🎯 **Konteks:** Folder ini berisi **2 challenge data handling** dari **Quiz PHASE-0 WEEK-2** program RPN. Setiap challenge didokumentasikan secara komprehensif dengan multiple versi solusi, step-by-step mentoring, cheat sheet, dan analisis clean code.

![Phase](https://img.shields.io/badge/Phase-0-blue?style=for-the-badge) ![Week](https://img.shields.io/badge/Week-2-green?style=for-the-badge) ![Type](https://img.shields.io/badge/Type-Quiz-red?style=for-the-badge) ![Challenges](https://img.shields.io/badge/Challenges-2-purple?style=for-the-badge)

---

## 📑 Daftar Challenge

| No  | Challenge                                                            | Difficulty  | Topik Utama                                                   | Jumlah Versi |
| :-: | -------------------------------------------------------------------- | :---------: | ------------------------------------------------------------- | :----------: |
| 01  | [📊 Data Handling I (Profil Array 2D)](#-01--data-handling-i-profil-array-2d)   | 🟢 Beginner | Array 2D, `for...of`, Destructuring, Template Literals        |   2 versi    |
| 02  | [🔧 Data Handling II (Transformasi Array)](#-02--data-handling-ii-transformasi-array) | 🟠 Medium   | `splice`, `split`, `join`, `sort`, `slice`, Immutability      |   3 versi    |

---

## 📊 01 — Data Handling I (Profil Array 2D)

📂 [`01-handling-data/`](./01-handling-data/)

> _Mengakses, memetakan, dan memformat data profil dari array multidimensi (2D) — dari loop dasar hingga clean code dengan destructuring!_

**Deskripsi:** Membuat fungsi `dataHandling(usersData)` yang menerima array 2D berisi data profil (ID, nama, tempat lahir, tanggal lahir, hobi), lalu menampilkan setiap profil dalam format yang rapi dengan label.

**Konsep yang Dipelajari:**

- 📐 **Array 2D (Multidimensional)** — Navigasi data berstruktur matriks (baris × kolom)
- 🔁 **`for...of` Loop** — Iterasi modern yang lebih bersih dari `for` tradisional
- 📦 **Array Destructuring** — Membongkar array menjadi variabel bernama (`[id, fullName, ...]`)
- 📝 **Template Literals** — Format string dinamis dengan backtick
- 🧹 **Clean Code Naming** — Konvensi penamaan: `birthPlace` > `array[i][2]`
- ⚖️ **`console.log` vs `return`** — Kapan pakai side-effect vs pure function

**Evolusi Solusi (2 Versi):**

| Versi | Pendekatan                          |     Kategori     |
| :---: | ----------------------------------- | :--------------: |
|   1   | `for` Loop + Index (`array[i][0]`)  |  🔧 Fundamental  |
|   2   | `for...of` + Array Destructuring    | ⚡ Best Practice |

```javascript
// Quick Preview — Versi 2 (Best Practice)
const dataHandling = (usersData) => {
  for (const [id, fullName, birthPlace, birthDate, hobby] of usersData) {
    console.log(`Nomor ID: ${id}`);
    console.log(`Nama Lengkap: ${fullName}`);
    console.log(`TTL: ${birthPlace} ${birthDate}`);
    console.log(`Hobi: ${hobby}`);
    console.log('');
  }
};
```

---

## 🔧 02 — Data Handling II (Transformasi Array)

📂 [`02-handling-data2/`](./02-handling-data2/)

> _Dari data mentah menjadi informasi bermakna — menguasai 5 built-in methods JavaScript untuk manipulasi array & string!_

**Deskripsi:** Membuat fungsi `dataHandling2(userData)` yang menerima array data profil, lalu melakukan 5 transformasi berbeda: modifikasi elemen, deteksi bulan, sorting descending, penggabungan string, dan pemotongan karakter.

**Konsep yang Dipelajari:**

- 🔪 **`splice()` Method** — Operasi bedah array: hapus & sisipkan elemen sekaligus (MUTATING)
- ✂️ **`split()` Method** — Memecah string menjadi array berdasarkan delimiter
- 🧵 **`join()` Method** — Menggabungkan array menjadi string dengan separator
- 🔢 **`sort()` Method** — Mengurutkan array dengan custom comparator (MUTATING)
- 📏 **`slice()` Method** — Memotong sebagian string/array tanpa merusak aslinya
- 🛡️ **Immutability Pattern** — Spread cloning `[...arr]` untuk lindungi data asli
- 📖 **Selective Destructuring** — Mengambil hanya elemen yang dibutuhkan dengan `, ,` skip

**Evolusi Solusi (3 Versi):**

| Versi | Pendekatan         |  Skalabilitas  |     Kategori     |
| :---: | ------------------ | :------------: | :--------------: |
|   A   | Manual Assignment  | ❌ Hanya 1 case |  🔧 Fundamental  |
|   B   | `splice()` + Array | ✅ 12 bulan     | ⚡ Best Practice |
|   C   | Global Constants   | ✅ + Fallback   |  🛡️ Production  |

```javascript
// Quick Preview — Versi C (Production Ready)
const MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const dataHandling2 = (userData) => {
  const formattedData = [...userData];
  formattedData.splice(1, 4,
    'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung',
    '21/05/1989', 'Pria', 'SMA Internasional Metro'
  );
  console.log(formattedData);

  const [, fullName, , birthDate] = formattedData;
  const dateParts = birthDate.split('/');
  const [, month] = dateParts;

  console.log(MONTHS[month - 1] || 'Bulan Tidak Valid');
  console.log([...dateParts].sort((a, b) => b - a));
  console.log(dateParts.join('-'));
  console.log(fullName.slice(0, 15));
};
```

---

## 🗺️ Peta Konsep Lintas Challenge

Tabel ini membantu melihat **konsep mana yang muncul berulang** di kedua challenge:

| Konsep                    | Ch.01 | Ch.02 |
| ------------------------- | :---: | :---: |
| Array Iteration           |  ✅   |  ✅   |
| Array Destructuring       |  ✅   |  ✅   |
| Clean Code / Naming       |  ✅   |  ✅   |
| Template Literals         |  ✅   |   —   |
| `for...of` Loop           |  ✅   |   —   |
| Array 2D (Multidimensi)   |  ✅   |   —   |
| `splice()` Method         |   —   |  ✅   |
| `split()` Method          |   —   |  ✅   |
| `join()` Method           |   —   |  ✅   |
| `sort()` Method           |   —   |  ✅   |
| `slice()` Method          |   —   |  ✅   |
| Immutability / Cloning    |   —   |  ✅   |
| Selective Destructuring   |   —   |  ✅   |
| Multiple Approaches       |  ✅   |  ✅   |
| `console.log` vs `return` |  ✅   |   —   |
| Mutating vs Non-Mutating  |   —   |  ✅   |

---

## 🎓 Jalur Belajar yang Disarankan

```
📌 Mulai dari sini:

  01 Data Handling I ──────────────────→ 02 Data Handling II
     (Beginner)                              (Medium)
  Pahami array 2D, loop,                 Kuasai 5 built-in methods,
  destructuring, & format output         immutability, & transformasi data
```

> [!TIP]
> 💡 **Tips:** Setiap folder memiliki **Cheat Sheet** untuk quick reference dan **README** komprehensif tersendiri. Untuk review cepat, langsung buka file Cheat Sheet tanpa harus membaca ulang seluruh dokumentasi.

> [!NOTE]
> 📌 **Hubungan Ch.01 & Ch.02:** Kedua challenge ini adalah _pasangan progresif_ — Ch.01 mengajarkan cara **mengakses & menampilkan** data array, sedangkan Ch.02 mengajarkan cara **memodifikasi & mentransformasi** data array. Pelajari secara berurutan untuk membangun pemahaman bertahap.

---

## 📊 Perbandingan Tingkat Kompleksitas

```
       Konsep Dasar ─────────────────────────────► Konsep Lanjut

  ┌─────────────────────────┐    ┌─────────────────────────────┐
  │         Ch.01            │    │           Ch.02              │
  │  📊 Data Handling I      │    │  🔧 Data Handling II         │
  │                          │    │                              │
  │  Array 2D + Loop         │    │  5 Built-in Methods          │
  │  Destructuring           │    │  Immutability Pattern        │
  │  Format & Tampilkan      │    │  Mutating vs Non-Mutating    │
  │                          │    │  Transformasi Multi-Output    │
  └─────────────────────────┘    └─────────────────────────────┘
        🟢 Beginner                       🟠 Medium
```

---

## 📁 Struktur Setiap Folder

Setiap folder challenge memiliki struktur yang konsisten:

```
📂 XX-handling-data/
├── 📄 README.md                                → Overview & dokumentasi komprehensif
├── 📄 0-Cheat-Sheet-*.md                       → Quick reference ringkas
└── 📄 Dokumentasi-*.md / Belajar-*.md          → Dokumentasi utama (all-in-one)
```

---

## 📝 Catatan

> Semua dokumentasi dibuat pada **Mei 2026** melalui sesi mentoring interaktif di **Google Antigravity**, sebagai bagian dari program belajar **RPN PHASE-0 WEEK-2**.

---

<div align="center">

**📂 Bagian dari [CATATAN-BELAJAR-RPN](../../../../) → [PHASE-0](../../../) → [WEEK-2](../../) → [QUIZ](../)**

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
