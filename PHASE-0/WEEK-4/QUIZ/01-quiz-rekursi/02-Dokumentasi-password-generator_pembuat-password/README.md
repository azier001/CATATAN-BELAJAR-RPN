# 🔐 Password Generator — `passwordGenerator`

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-String%20|%20Regex%20|%20Pipeline%20|%20charCodeAt-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

> 📝 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat kembali konsep-konsep yang dipelajari saat mengerjakan challenge Password Generator.*

---

## 🧩 Deskripsi Challenge

Diberikan sebuah fungsi `passwordGenerator` yang menerima **nama** sebagai input, lalu mengubahnya menjadi **password** melalui pipeline 4 langkah berurutan:

```
nama asli
  → [1] ganti huruf vokal
  → [2] balik seluruh string
  → [3] tukar huruf besar ↔ kecil
  → [4] hapus semua spasi
  → password ✅
```

| Step | Function | Aksi |
|------|----------|------|
| 1️⃣ | `changeVocals` | Ganti vokal → karakter berikutnya (`a→b`, `i→j`, dst) |
| 2️⃣ | `reverseWord` | Balik seluruh string |
| 3️⃣ | `setLowerUpperCase` | Toggle case: huruf besar↔kecil |
| 4️⃣ | `removeSpaces` | Hapus semua spasi |

> ⚠️ **Catatan penting:** Urutan langkah ini **tidak boleh ditukar** — hasilnya akan berbeda!

---

## 📤 Expected Output

| Input | Output |
|-------|--------|
| `'Sergei Dragunov'` | `'VPNVGBRdJFGRFs'` |
| `'Dimitri Wahyudiputra'` | `'BRTVPJDVYHBwJRTJMJd'` |
| `'Alexei'` | `'JFXFLb'` |
| `'Alex'` | `'Minimal karakter yang diinputkan adalah 5 karakter'` |

---

## ▶️ Coba Langsung

```js
console.log(passwordGenerator('Sergei Dragunov'));
// Output: 'VPNVGBRdJFGRFs'
```

```js
console.log(passwordGenerator('Dimitri Wahyudiputra'));
// Output: 'BRTVPJDVYHBwJRTJMJd'
```

```js
console.log(passwordGenerator('Alexei'));
// Output: 'JFXFLb'
```

```js
console.log(passwordGenerator('Alex'));
// Output: 'Minimal karakter yang diinputkan adalah 5 karakter'
```

---

## 📊 Quick Comparison: Semua Solusi

| Solusi | Pendekatan | Keunggulan |
|--------|-----------|------------|
| **Versi Saya** | Pipeline dengan variable terpisah | Mudah di-debug, readable |
| **Alternatif `changeVocals`** | Object mapping | Lebih eksplisit, mudah diubah |
| **Alternatif `reverseWord`** | `reduce()` | Fungsional, lebih ringkas |
| **Alternatif `setLowerUpperCase`** | Regex `/[a-zA-Z]/g` | Lebih singkat, filter otomatis |
| **Alternatif `passwordGenerator`** | Nested function calls | Fungsional, tanpa variable perantara |
| **Versi Single Function** | Semua dalam satu fungsi | Ringkas, tanpa helper functions |

---

## 📂 Struktur Dokumentasi

| File | Topik |
|------|-------|
| 📄 [01-challenge-overview_gambaran-challenge.md](./docs/01-challenge-overview_gambaran-challenge.md) | Gambaran lengkap challenge & alur pipeline |
| 📄 [02-charCodeAt-vocal-mapping_pemetaan-vokal.md](./docs/02-charCodeAt-vocal-mapping_pemetaan-vokal.md) | `changeVocals` — charCodeAt & pemetaan vokal |
| 📄 [03-string-reverse_membalik-string.md](./docs/03-string-reverse_membalik-string.md) | `reverseWord` — cara membalik string |
| 📄 [04-toggle-case_tukar-huruf-besar-kecil.md](./docs/04-toggle-case_tukar-huruf-besar-kecil.md) | `setLowerUpperCase` — toggle case yang presisi |
| 📄 [05-regex-remove-spaces_hapus-spasi.md](./docs/05-regex-remove-spaces_hapus-spasi.md) | `removeSpaces` — regex & whitespace |
| 📄 [06-input-validation-trim_validasi-input.md](./docs/06-input-validation-trim_validasi-input.md) | Validasi input & bug `trim()` |
| 📄 [07-pipeline-function_fungsi-berantai.md](./docs/07-pipeline-function_fungsi-berantai.md) | `passwordGenerator` — menyusun pipeline |
| 📄 [08-alternative-solutions_solusi-alternatif.md](./docs/08-alternative-solutions_solusi-alternatif.md) | Solusi alternatif & perbandingan |
| 📄 [09-test-cases_kasus-pengujian.md](./docs/09-test-cases_kasus-pengujian.md) | Test cases lengkap & cara pengujian |
| 📄 [ringkasan-algoritma-semua-versi.md](./ringkasan-algoritma-semua-versi.md) | Ringkasan semua versi kode |

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Memahami konsep **pipeline function** — menyusun fungsi secara berurutan
- ✅ Menggunakan `charCodeAt()` dan `fromCharCode()` untuk manipulasi karakter
- ✅ Membedakan logika toggle case yang **presisi** vs yang hanya kebetulan benar
- ✅ Memahami pentingnya **validasi input** dengan `trim()` sebelum cek panjang
- ✅ Menulis **test cases** dengan expected value yang di-hardcode secara manual
- ✅ Membandingkan berbagai pendekatan solusi dan memilih yang paling sesuai

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1 — Challenge Overview →](./docs/01-challenge-overview_gambaran-challenge.md)**

---

**Quick Links:**

[01 Overview](./docs/01-challenge-overview_gambaran-challenge.md) • [02 changeVocals](./docs/02-charCodeAt-vocal-mapping_pemetaan-vokal.md) • [03 reverseWord](./docs/03-string-reverse_membalik-string.md) • [04 toggleCase](./docs/04-toggle-case_tukar-huruf-besar-kecil.md) • [05 removeSpaces](./docs/05-regex-remove-spaces_hapus-spasi.md) • [06 Validasi](./docs/06-input-validation-trim_validasi-input.md) • [07 Pipeline](./docs/07-pipeline-function_fungsi-berantai.md) • [08 Alternatif](./docs/08-alternative-solutions_solusi-alternatif.md) • [09 Test Cases](./docs/09-test-cases_kasus-pengujian.md)

---

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
