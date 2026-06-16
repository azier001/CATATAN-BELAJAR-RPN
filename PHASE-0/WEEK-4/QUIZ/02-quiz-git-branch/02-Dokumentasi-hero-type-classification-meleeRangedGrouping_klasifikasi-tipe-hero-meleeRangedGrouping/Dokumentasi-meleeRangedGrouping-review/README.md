# 🎮 Challenge: meleeRangedGrouping

### ✨ _Mengelompokkan hero Dota berdasarkan tipe Ranged & Melee dari sebuah string_

> 🎯 **Tujuan:** Memahami cara memecah (parsing) string kompleks menjadi data terstruktur (multidimensional array) menggunakan berbagai pendekatan JavaScript — dari `for...of`, `.reduce()`, hingga Object Hash Map.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📝 | [Deskripsi Soal](#deskripsi-soal) | Format input, output, dan aturan challenge |
| 🧪 | [Test Cases](#test-cases) | Contoh input-output yang harus dipenuhi |
| 🔑 | [Konsep Kunci](#konsep-kunci) | Method dan teknik JavaScript yang digunakan |
| 🗂️ | [Navigasi Dokumentasi](#navigasi-dokumentasi) | Peta file dokumentasi lengkap |

---

<a name="deskripsi-soal"></a>

## 📝 Deskripsi Soal

Diberikan function `meleeRangedGrouping` yang menerima **1 parameter** berupa **string** dengan format:

```
<nama_hero>-<tipe_hero>,<nama_hero>-<tipe_hero>, ...
```

Implementasikan agar menghasilkan **multidimensional array** dengan aturan:

| Index | Isi |
|:-----:|-----|
| `[0]` | Daftar nama hero bertipe **Ranged** |
| `[1]` | Daftar nama hero bertipe **Melee** |

> [!IMPORTANT]
> Jika input adalah string kosong (`''`), maka langsung return array kosong `[]`.

---

<a name="test-cases"></a>

## 🧪 Test Cases

```javascript
console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping(''));
// []
```

> [!NOTE]
> Perhatikan test case kedua: ketika semua hero bertipe `Ranged`, maka index `[1]` (kelompok Melee) tetap harus berupa array kosong `[]`, bukan `undefined` atau hilang.

---

<a name="konsep-kunci"></a>

## 🔑 Konsep Kunci yang Digunakan

| Konsep | Deskripsi Singkat |
|--------|-------------------|
| `String.split()` | Memecah string menjadi array berdasarkan delimiter (`,` dan `-`) |
| Array Destructuring | Membongkar array hasil `.split()` langsung ke variabel (`const [name, type] = ...`) |
| `for...of` | Perulangan modern untuk iterasi setiap elemen array |
| `Array.reduce()` | Higher-Order Function untuk mereduksi array menjadi satu nilai akumulasi |
| Object Grouping | Menggunakan Object `{}` sebagai wadah dinamis untuk mengelompokkan data |

---

<a name="navigasi-dokumentasi"></a>

## 🗂️ Navigasi Dokumentasi

Dokumentasi ini terdiri dari beberapa file yang disusun berurutan sesuai alur pemahaman:

| No | File | Isi |
|----|------|-----|
| 📋 | **README.md** _(kamu di sini)_ | Overview soal & navigasi |
| 🔍 | [01-analisis-dan-strategi.md](docs/01-analisis-dan-strategi.md) | Visualisasi pola, algoritma "bahasa manusia", blueprint & kamus variabel |
| 💻 | [02-solusi-dan-evolusi.md](docs/02-solusi-dan-evolusi.md) | 3 versi solusi (for...of → reduce → Hash Map), naming convention, gotchas |
| 📄 | [ringkasan-kode.md](ringkasan-kode.md) | Cheat sheet — semua versi kode final siap copy-paste |

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **16 Juni 2026** berdasarkan sesi mentoring langsung
> di **Google Antigravity** menggunakan JavaScript (Node.js).
> Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow
> `/mentor-challenge` dengan format visual `/setup-doc`.

---

➡️ Mulai belajar: [01-analisis-dan-strategi.md](docs/01-analisis-dan-strategi.md)
