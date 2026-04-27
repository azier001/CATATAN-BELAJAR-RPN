# 💡 Insight: Null Safety Pattern — Pola Keamanan Null

![Topic](https://img.shields.io/badge/Topic-Mental%20Model%20|%20Null%20Safety-blue?style=for-the-badge)

---

## 📑 Daftar Isi

- ⚔️ [Akar Masalah: Si "Lubang Hitam" Null](#pembuka)
- 🛡️ [Cara 1 — Short-Circuit (|| [])](#cara-1)
- ❓ [Cara 2 — Ternary Operator](#cara-2)
- ✨ [Cara 3 — Optional Chaining (ES2020)](#cara-3)
- 🎯 [Kesimpulan Pilihan Pattern](#kesimpulan)

---

<a name="pembuka"></a>
## ⚔️ Akar Masalah: Si "Lubang Hitam" Null

Dari sesi mentoring challenge `cariPelaku`, pelajaran paling berharga yang saya dapatkan bukan tentang regex itu sendiri — tapi tentang **bahaya `null`** di JavaScript.

Di banyak bahasa pemrograman, saat kamu mencari sesuatu dan tidak menemukannya, hasilnya adalah "kosong" (array kosong, string kosong, dll). Tapi di JavaScript, beberapa method — termasuk `.match()` — mengembalikan **`null`** yang bersifat seperti "lubang hitam": kamu tidak bisa melakukan apa-apa terhadapnya.

```javascript
// Error paling populer di JavaScript:
const hasil = 'xyz'.match(/abc/g);  // null
console.log(hasil.length);          // 💥 TypeError: Cannot read properties of null
```

Error ini adalah salah satu yang **paling sering terjadi** di dunia JavaScript. Bahkan Tony Hoare, penemu konsep `null`, menyebutnya sebagai *"billion-dollar mistake"* (kesalahan seharga miliaran dollar).

Mari kita lihat tiga cara menangani `null` yang sudah kita pelajari, dari yang klasik sampai yang paling modern.

---

<a name="cara-1"></a>
## 🛡️ Cara 1 — Short-Circuit (`|| []`)

Pendekatan `(value || defaultValue)` tergolong **Short-Circuit Evaluation** — cara klasik yang sudah ada sejak awal JavaScript.

**Ciri-ciri masalah yang cocok:**
1. **Nilai yang mungkin `null` atau `undefined`:** Kamu tahu method tertentu bisa return `null` dan ingin menanganinya secara inline
2. **Default value sederhana:** Pengganti yang kamu inginkan cukup satu nilai sederhana (array kosong, string kosong, angka 0)
3. **Butuh kode pendek:** Kamu ingin menangani null dalam satu baris tanpa variabel tambahan

**Contoh Kasus Ideal:**
*"Hitung jumlah match dari regex, kembalikan 0 jika tidak ada."*

```javascript
// Null safety dengan || []
return (str.match(/abc/g) || []).length;

// Cara kerja:
// match() → ['abc', 'abc']  →  ['abc','abc'].length → 2
// match() → null            →  [].length            → 0
```

> ⚠️ **Hati-hati:** Operator `||` menganggap **semua falsy values** sebagai "kosong" — termasuk `0`, `''`, dan `false`. Jika salah satu dari ini adalah nilai valid, gunakan Cara 3 (Optional Chaining) atau Nullish Coalescing (`??`).

---

<a name="cara-2"></a>
## ❓ Cara 2 — Ternary Operator

Pendekatan `kondisi ? nilaiTrue : nilaiFalse` tergolong **Explicit Check** — cara yang paling jelas dan mudah dipahami.

**Ciri-ciri masalah yang cocok:**
1. **Butuh kejelasan maksimal:** Kamu ingin pembaca kode langsung paham "oh, di sini dia cek null"
2. **Dua kemungkinan output yang berbeda tipe:** Misal return angka atau return pesan error
3. **Kode akan dibaca orang lain:** Tim yang anggotanya beragam level skill

**Contoh Kasus Ideal:**
*"Simpan hasil match ke variabel, lalu cek sebelum akses propertinya."*

```javascript
const matches = str.match(/abc/g);
return matches ? matches.length : 0;

// Cara baca:
// "Apakah matches ada? Jika YA → ambil length. Jika TIDAK → return 0."
```

> 💡 **Keunggulan:** Formatter seperti Prettier sangat ramah terhadap ternary — tidak pernah mengubah strukturnya. Ini menjadikannya pilihan paling aman untuk projek yang menggunakan auto-formatting.

---

<a name="cara-3"></a>
## ✨ Cara 3 — Optional Chaining (ES2020)

Pendekatan `value?.property ?? defaultValue` tergolong **Modern Null Safety** — fitur baru JavaScript yang dirancang khusus untuk masalah ini.

**Ciri-ciri masalah yang cocok:**
1. **Chain property yang panjang:** `user?.address?.city?.name` — setiap level bisa `null`
2. **Hanya peduli `null`/`undefined`:** Tidak ingin menangkap falsy values lain (`0`, `''`, `false`)
3. **Kode modern (ES2020+):** Lingkungan yang mendukung fitur terbaru JavaScript

**Contoh Kasus Ideal:**
*"Akses .length dari hasil match, return 0 jika null — tanpa menangkap 0 sebagai falsy."*

```javascript
return str.match(/abc/g)?.length ?? 0;

// ?. → "Jika yang di sebelah kiri bukan null/undefined, akses .length"
// ?? → "Jika yang di sebelah kiri null/undefined, pakai 0"
```

### Bedanya `||` vs `??`

```javascript
// || menganggap SEMUA falsy sebagai "kosong"
0 || 'default'      // → 'default'  (0 dianggap falsy!)
'' || 'default'     // → 'default'  (string kosong dianggap falsy!)
null || 'default'   // → 'default'

// ?? HANYA menganggap null dan undefined sebagai "kosong"
0 ?? 'default'      // → 0          (0 bukan null, jadi dipertahankan)
'' ?? 'default'     // → ''         (string kosong bukan null)
null ?? 'default'   // → 'default'
```

> 💡 **Aturan praktis:** Gunakan `??` jika `0` atau `''` adalah nilai yang valid dalam konteksmu. Gunakan `||` jika kamu ingin menangani semua falsy values.

---

<a name="kesimpulan"></a>
## 🎯 Kesimpulan Pilihan Pattern

```
Hasil method bisa null?
  │
  ├── Butuh kode sependek mungkin?
  │     │
  │     ├── YA, dan 0/''/ false BUKAN nilai valid
  │     │     └── ✅ Pakai || (Short-Circuit)
  │     │         (str.match(/abc/g) || []).length
  │     │
  │     └── YA, tapi 0/''/false ADALAH nilai valid
  │           └── ✅ Pakai ?. dan ?? (Optional Chaining)
  │               str.match(/abc/g)?.length ?? 0
  │
  └── Butuh kode yang paling jelas/readable?
        └── ✅ Pakai Ternary + Variabel
            const matches = str.match(/abc/g);
            return matches ? matches.length : 0;
```

### Perbandingan Ringkas

| Pattern | Kode | Tangani `0` dengan benar? | Readable? |
|---------|------|--------------------------|-----------|
| `\|\|` (Short-Circuit) | `(x \|\| []).length` | ❌ | ⭐⭐ |
| Ternary | `x ? x.length : 0` | ✅ | ⭐⭐⭐ |
| `?.` `??` (Modern) | `x?.length ?? 0` | ✅ | ⭐⭐⭐ |

> **Refleksi Penting:**
> Null safety bukan "fitur bonus" — ini adalah **kebutuhan dasar** dalam JavaScript. Error `Cannot read properties of null` menempati peringkat #1 sebagai error paling sering terjadi di produksi. Dengan memahami tiga pattern ini, kamu sudah selangkah lebih maju dalam menulis kode yang **aman** dan **tahan banting**.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 07 — V5 While Loop + Exec](./07-v5-while-loop-exec_perulangan-while-exec.md)**
- **📖 [Lanjut ke Part 09 — All Versions Comparison →](./09-all-versions-comparison_perbandingan-semua-versi.md)**
