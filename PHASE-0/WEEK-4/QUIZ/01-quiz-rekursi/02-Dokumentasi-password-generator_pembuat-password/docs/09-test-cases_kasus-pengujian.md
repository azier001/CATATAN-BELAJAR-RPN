# 🧪 Part 9 — Test Cases / Kasus Pengujian

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green?style=for-the-badge)

---

## 🧭 Quick Jump

| 💡 Konsep | 📋 Test Cases | ⚠️ Pitfalls | 🔑 Keywords | ✅ Ringkasan |
|:---------:|:-------------:|:-----------:|:-----------:|:-----------:|
| [Jump](#-kenapa-perlu-test-cases) | [Jump](#-test-cases-lengkap) | [Jump](#%EF%B8%8F-pitfalls) | [Jump](#-keywords) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami kenapa test cases itu penting
- ✅ Mengerti perbedaan test cases yang baik vs yang kurang baik
- ✅ Tahu cara menulis expected value yang di-hardcode secara manual
- ✅ Memahami berbagai kategori test cases — edge case, normal case, dan special case

---

## 💡 Kenapa Perlu Test Cases?

Test cases adalah cara kita **memastikan fungsi bekerja dengan benar** di berbagai kondisi — bukan hanya kondisi normal, tapi juga kondisi ekstrem dan tidak terduga.

```js
// Tanpa test cases — kita hanya tahu 1 kondisi
console.log(passwordGenerator('Alexei')) // → 'JFXFLb' ✅

// Dengan test cases — kita tahu fungsi bekerja di SEMUA kondisi
passwordGenerator('')          // → pesan error ✅
passwordGenerator('     ')     // → pesan error ✅
passwordGenerator('  Alexei  ') // → 'JFXFLb' ✅
passwordGenerator('Alexei123') // → '321JFXFLb' ✅
```

---

## ⚠️ Kesalahan Umum — Expected dari Fungsi Sendiri

```js
// ❌ Kurang ideal — expected dihitung dari fungsi yang sama
{ input: 'ABCDE', expected: passwordGenerator('ABCDE') }

// Masalahnya: kalau fungsinya salah, test ini tetap PASS!
// Karena expected dan result datang dari sumber yang sama.

// ✅ Benar — expected di-hardcode manual
{ input: 'ABCDE', expected: 'fdcbb' }
```

> 💡 Test yang baik adalah test yang bisa **mendeteksi bug** — bukan test yang selalu PASS apapun yang terjadi.

---

## 📋 Test Cases Lengkap

Salin kode ini setelah semua function didefinisikan:

```js
const testCases = [
  // ─────────────────────────────────────────
  // Edge Cases — validasi minimum karakter
  // ─────────────────────────────────────────
  {
    input: '',
    expected: 'Minimal karakter yang diinputkan adalah 5 karakter',
    desc: 'String kosong'
  },
  {
    input: 'A',
    expected: 'Minimal karakter yang diinputkan adalah 5 karakter',
    desc: '1 karakter'
  },
  {
    input: 'Alex',
    expected: 'Minimal karakter yang diinputkan adalah 5 karakter',
    desc: 'Kurang dari 5 karakter'
  },
  {
    input: '    ',
    expected: 'Minimal karakter yang diinputkan adalah 5 karakter',
    desc: '4 spasi (length 4)'
  },
  {
    input: '     ',
    expected: 'Minimal karakter yang diinputkan adalah 5 karakter',
    desc: '5 spasi — trim = 0'
  },
  {
    input: '  hi  ',
    expected: 'Minimal karakter yang diinputkan adalah 5 karakter',
    desc: 'Spasi + 2 huruf + spasi — trim = 2'
  },

  // ─────────────────────────────────────────
  // Exactly 5 Characters
  // ─────────────────────────────────────────
  {
    input: 'ABCDE',
    expected: 'fdcbb',
    desc: 'Pas 5 karakter, semua huruf besar'
  },

  // ─────────────────────────────────────────
  // Normal Cases — dari soal
  // ─────────────────────────────────────────
  {
    input: 'Alexei',
    expected: 'JFXFLb',
    desc: 'Nama tunggal (contoh soal)'
  },
  {
    input: 'Sergei Dragunov',
    expected: 'VPNVGBRdJFGRFs',
    desc: 'Dua kata (contoh soal)'
  },
  {
    input: 'Dimitri Wahyudiputra',
    expected: 'BRTVPJDVYHBwJRTJMJd',
    desc: 'Dua kata panjang (contoh soal)'
  },

  // ─────────────────────────────────────────
  // Leading & Trailing Spaces
  // ─────────────────────────────────────────
  {
    input: '  Alexei  ',
    expected: 'JFXFLb',
    desc: 'Spasi di awal & akhir — hasil sama setelah trim'
  },

  // ─────────────────────────────────────────
  // Special Characters
  // ─────────────────────────────────────────
  {
    input: 'Alexei123',
    expected: '321JFXFLb',
    desc: 'Mengandung angka'
  },
  {
    input: 'Alexei!',
    expected: '!JFXFLb',
    desc: 'Mengandung simbol'
  },

  // ─────────────────────────────────────────
  // Case Sensitivity
  // ─────────────────────────────────────────
  {
    input: 'alexei',
    expected: 'JFXFLB',
    desc: 'Semua huruf kecil'
  },
  {
    input: 'ALEXEI',
    expected: 'jfxflb',
    desc: 'Semua huruf besar'
  },
]
```

---

## ▶️ Runner — Jalankan Semua Test

Salin kode ini setelah `testCases`:

```js
testCases.forEach(({ input, expected, desc }, index) => {
  const result = passwordGenerator(input)
  const status = result === expected ? '✅ PASS' : '❌ FAIL'

  console.log(`Test Case #${index + 1}: ${status} - ${desc} | passwordGenerator("${input}") = ${result}`)

  if (status === '❌ FAIL') {
    console.log('Input   :', input)
    console.log('Expected:', expected)
    console.log('Result  :', result)
  }
})
```

---

## 📊 Kategori Test Cases

| Kategori | Jumlah | Tujuan |
|----------|--------|--------|
| Edge case — validasi | 6 | Pastikan input tidak valid ditolak |
| Exactly 5 characters | 1 | Pastikan batas minimum lolos |
| Normal case | 3 | Pastikan output sesuai expected soal |
| Leading/trailing spaces | 1 | Pastikan trim bekerja dengan benar |
| Special characters | 2 | Pastikan angka & simbol tidak berubah |
| Case sensitivity | 2 | Pastikan toggle case bekerja di semua kondisi |
| **Total** | **15** | |

---

## ⚠️ Pitfalls

### ❌ Expected value dihitung dari fungsi sendiri

```js
// ❌ Test ini selalu PASS meskipun fungsinya salah!
{ input: 'ABCDE', expected: passwordGenerator('ABCDE') }

// ✅ Hitung manual, lalu hardcode
{ input: 'ABCDE', expected: 'fdcbb' }
```

### ❌ Tidak menguji edge cases

```js
// ❌ Hanya test normal case
{ input: 'Alexei', expected: 'JFXFLb' }

// ✅ Test juga edge cases
{ input: '', expected: 'Minimal karakter...' }
{ input: '     ', expected: 'Minimal karakter...' }
{ input: '  hi  ', expected: 'Minimal karakter...' }
```

### ❌ Tidak menampilkan detail saat FAIL

```js
// ❌ Kurang informatif
if (result !== expected) console.log('FAIL')

// ✅ Tampilkan detail agar mudah debug
if (status === '❌ FAIL') {
  console.log('Input   :', input)
  console.log('Expected:', expected)
  console.log('Result  :', result)
}
```

---

## 🔑 Keywords

| Keyword | Penjelasan |
|---------|-----------|
| Test case | Satu skenario pengujian — input + expected output |
| Edge case | Kondisi ekstrem atau tidak biasa yang perlu diuji |
| Normal case | Kondisi umum yang diharapkan terjadi |
| Hardcoded | Nilai yang ditulis langsung, bukan dihitung dari fungsi |
| Expected value | Nilai yang seharusnya dihasilkan fungsi |
| PASS / FAIL | Status hasil pengujian — sesuai atau tidak dengan expected |

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Jumlah test | 15 test cases |
| Kategori | Edge case, normal, spaces, special chars, case sensitivity |
| Expected value | Semua di-hardcode manual — bukan dari fungsi sendiri |
| Output FAIL | Menampilkan input, expected, dan result untuk debug |
| Hasil | Semua 15 test cases PASS ✅ |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 8 — Solusi Alternatif](./08-alternative-solutions_solusi-alternatif.md)**
- **📖 [Lanjut ke Ringkasan Algoritma →](../ringkasan-algoritma-semua-versi.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
