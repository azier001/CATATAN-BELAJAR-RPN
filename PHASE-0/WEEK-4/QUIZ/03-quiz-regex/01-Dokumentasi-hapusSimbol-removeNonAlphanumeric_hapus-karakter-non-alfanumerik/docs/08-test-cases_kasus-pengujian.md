# 🧪 Test Cases — Kasus Pengujian

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Testing-blue?style=for-the-badge)

---

## 📑 Daftar Isi

- 📝 [Daftar Kasus Pengujian (12 Kasus)](#daftar-kasus)
- ⚠️ [Pentingnya Edge Cases](#edge-cases)
- 🤖 [Script Test Runner Otomatis](#test-runner)

---

<a name="daftar-kasus"></a>
## 📝 Daftar Kasus Pengujian (12 Kasus)

Untuk memastikan keandalan dari semua versi solusi, kita menjalankan 12 skenario berbeda — mulai dari kondisi ekstrem (string kosong, semua simbol) hingga campuran karakter yang kompleks. Semua versi (V1 Regex, V2 Looping, V3 ASCII) berhasil lulus seluruh pengujian ini.

---

### 1. Edge Cases (Kondisi Ekstrem)

Kondisi di batas luar kewajaran yang sering membuat program error atau menghasilkan output yang tidak terduga.

| # | Skenario | Input | Expected Output |
|---|----------|-------|-----------------|
| 1 | String kosong — tidak ada yang diproses | `''` | `''` |
| 2 | Semua karakter adalah simbol — tidak ada yang lolos | `'@@@###'` | `''` |
| 3 | Hanya satu karakter valid di antara simbol | `'@a@'` | `'a'` |
| 4 | String hanya berisi spasi | `'   '` | `''` |

---

### 2. Normal Cases (Kondisi Biasa)

Kondisi standar yang biasanya muncul di soal dan penggunaan sehari-hari.

| # | Skenario | Input | Expected Output |
|---|----------|-------|-----------------|
| 5 | Tidak ada simbol sama sekali — string tetap sama | `'coding'` | `'coding'` |
| 6 | Simbol di tengah string | `'test%$4aa'` | `'test4aa'` |
| 7 | Menghapus banyak simbol acak | `'ma@#k!an~'` | `'makan'` |
| 8 | Huruf dan angka tetap dipertahankan (termasuk huruf besar) | `'123abcDEF'` | `'123abcDEF'` |

---

### 3. Complex / Soal Cases (Kondisi Kompleks)

Kondisi yang lebih menantang dengan kombinasi berbagai jenis karakter.

| # | Skenario | Input | Expected Output |
|---|----------|-------|-----------------|
| 9 | Menghapus simbol dan spasi di tengah string | `'devel0p3r s3j@@ati'` | `'devel0p3rs3jati'` |
| 10 | Menghapus simbol matematika | `'1+3-5*2=100'` | `'1352100'` |
| 11 | Menghapus spasi dan simbol di awal dan akhir | `' hello! '` | `'hello'` |
| 12 | Campuran huruf, angka, dan simbol secara bergantian | `'a!b@c#1$2%3'` | `'abc123'` |

---

<a name="edge-cases"></a>
## ⚠️ Pentingnya Edge Cases

Mengapa pengujian seperti "string kosong" dan "semua karakter adalah simbol" (Test Case 1, 2, 4) itu penting?

Bayangkan fungsi `hapusSimbol` digunakan untuk memvalidasi input username sebelum disimpan ke database. Jika pengguna mengirimkan string kosong atau string yang hanya berisi simbol seperti `"@@@"`, fungsi yang tidak menangani edge case dengan benar bisa menghasilkan username kosong `""` — yang kemudian melewati validasi dan tersimpan ke database sebagai nilai yang tidak valid. Ini bisa menyebabkan crash di bagian lain sistem yang mengharapkan username memiliki minimal satu karakter.

> 🔴 `Uncaught TypeError: Cannot read properties of undefined (reading 'length')` — Error ini bisa muncul jika fungsi downstream mencoba memproses hasil kosong tanpa pengecekan terlebih dahulu.

Dengan memastikan solusi kita mengembalikan string kosong `''` (bukan `undefined`, `null`, atau error) untuk input ekstrem, kita membangun kode yang *defensive* dan aman digunakan di sistem yang lebih besar.

---

<a name="test-runner"></a>
## 🤖 Script Test Runner Otomatis

Untuk menguji semua versi secara instan, jalankan script ini di terminal dengan Node.js.

```javascript
// ================================================
// Paste salah satu fungsi di bawah ini untuk diuji
// ================================================

// V1 — Regex (Rekomendasi)
function hapusSimbol(str) {
  return str.replace(/[^a-z0-9]/gi, '');
}

// V2 — Looping + Whitelist
// function hapusSimbol(str) {
//   let result = '';
//   const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789';
//   for (const char of str) {
//     if (allowed.includes(char.toLowerCase())) result += char;
//   }
//   return result;
// }

// V3 — ASCII charCodeAt
// function hapusSimbol(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     const code = str.charCodeAt(i);
//     const isNumber = code >= 48 && code <= 57;
//     const isUpper  = code >= 65 && code <= 90;
//     const isLower  = code >= 97 && code <= 122;
//     if (isNumber || isUpper || isLower) result += str[i];
//   }
//   return result;
// }

// ================================================

const testCases = [
  // Edge Cases
  { input: '',         expected: '',             desc: 'String kosong tetap kosong' },
  { input: '@@@###',   expected: '',             desc: 'Semua karakter adalah simbol' },
  { input: '@a@',      expected: 'a',            desc: 'Satu karakter valid di antara simbol' },
  { input: '   ',      expected: '',             desc: 'String hanya berisi spasi' },

  // Normal Cases
  { input: 'coding',       expected: 'coding',       desc: 'Tidak ada simbol, string tetap sama' },
  { input: 'test%$4aa',    expected: 'test4aa',      desc: 'Simbol di tengah string' },
  { input: 'ma@#k!an~',    expected: 'makan',        desc: 'Menghapus banyak simbol acak' },
  { input: '123abcDEF',    expected: '123abcDEF',    desc: 'Huruf besar dan angka dipertahankan' },

  // Complex Cases
  { input: 'devel0p3r s3j@@ati', expected: 'devel0p3rs3jati', desc: 'Menghapus simbol dan spasi' },
  { input: '1+3-5*2=100',        expected: '1352100',         desc: 'Menghapus simbol matematika' },
  { input: ' hello! ',           expected: 'hello',           desc: 'Hapus spasi dan simbol di awal/akhir' },
  { input: 'a!b@c#1$2%3',        expected: 'abc123',          desc: 'Campuran huruf, angka, dan simbol' },
];

function runTests(fn) {
  console.log(`\n=== RUNNING TESTS ===\n`);
  let passCount = 0;

  testCases.forEach(({ input, expected, desc }, index) => {
    const result = fn(input);
    const status = JSON.stringify(result) === JSON.stringify(expected) ? '✅ PASS' : '❌ FAIL';

    if (status === '✅ PASS') passCount++;

    console.log(`Test #${index + 1}: ${status} - ${desc}`);

    if (status === '❌ FAIL') {
      console.log('  Input   :', input);
      console.log('  Expected:', JSON.stringify(expected));
      console.log('  Result  :', JSON.stringify(result));
    }
  });

  console.log(`\nRESULT: ${passCount}/${testCases.length} Passed\n`);
}

runTests(hapusSimbol);
```

> **Trik Tip:** Script ini menggunakan `JSON.stringify()` untuk membandingkan hasil dan expected. Untuk tipe data `string`, perbandingan dengan `===` sebenarnya sudah cukup — tapi `JSON.stringify()` dipakai sebagai pola yang konsisten agar script ini bisa langsung digunakan untuk test case yang mengembalikan array atau object juga, tanpa perlu modifikasi struktur `runTests`. Ini adalah kebiasaan baik untuk menulis test runner yang *generik* dan *reusable*.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 07 — Perbandingan Semua Versi](./07-perbandingan-semua-versi_all-versions-comparison.md)**
