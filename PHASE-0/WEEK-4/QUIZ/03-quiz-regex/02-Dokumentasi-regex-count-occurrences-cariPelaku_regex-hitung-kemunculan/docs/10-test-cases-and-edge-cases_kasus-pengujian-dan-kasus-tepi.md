# 🧪 Test Cases & Edge Cases — Kasus Pengujian & Kasus Tepi

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

Untuk memastikan keandalan dari semua versi solusi, kita menjalankan 12 skenario berbeda. Semua 5 versi kode berhasil lulus seluruh pengujian ini.

### 1. Edge Cases (Kondisi Ekstrem)

Kondisi di batas luar kewajaran yang sering membuat program error.

| # | Skenario | Input | Expected Output |
|---|----------|-------|-----------------|
| 1 | String kosong | `''` | `0` |
| 2 | Tidak ada "abc" sama sekali | `'xyz'` | `0` |
| 3 | Huruf a, b, c ada tapi terpisah | `'a_b_c'` | `0` |
| 4 | Huruf besar "ABC" (case sensitivity) | `'ABC'` | `0` |

### 2. Normal Cases (Kondisi Biasa)

Kondisi standar yang biasanya ada di contoh soal.

| # | Skenario | Input | Expected Output |
|---|----------|-------|-----------------|
| 5 | Satu kemunculan di tengah | `'xabcx'` | `1` |
| 6 | Dua kemunculan terpisah | `'mabcvabc'` | `2` |
| 7 | Tiga kemunculan berturut-turut | `'abcabcabc'` | `3` |
| 8 | Kemunculan di awal string | `'abcxyz'` | `1` |

### 3. Complex / Soal Cases (Kondisi Kompleks)

Kondisi dari soal atau varian yang lebih menantang.

| # | Skenario | Input | Expected Output |
|---|----------|-------|-----------------|
| 9 | Ada karakter penyusup di antara "abc" | `'abcdabdc'` | `1` |
| 10 | Awalan mirip tapi tidak cocok | `'bcabcac'` | `1` |
| 11 | Dua kemunculan dengan "jebakan" di tengah | `'babcbacabc'` | `2` |
| 12 | Hanya huruf abc tapi urutan salah | `'cbacba'` | `0` |

---

<a name="edge-cases"></a>
## ⚠️ Pentingnya Edge Cases

Mengapa pengujian seperti "String kosong" dan "Tidak ada match" (Test Case 1, 2) itu penting?

Dalam aplikasi nyata, function `cariPelaku` bisa menerima input dari berbagai sumber — form user, database, atau API eksternal. Input yang diterima bisa saja **kosong** atau **tidak mengandung pola yang dicari** sama sekali. Jika kita tidak menangani kasus ini, aplikasi akan crash dengan error yang membingungkan user.

Bayangkan sebuah fitur "Search" di website. User mengetik query, system menjalankan regex matching, lalu menampilkan "Ditemukan X hasil". Jika function crash karena `null`, seluruh halaman search bisa blank — pengalaman user yang sangat buruk.

> 🔴 `TypeError: Cannot read properties of null (reading 'length')`

Itulah kenapa kita **wajib** memastikan function selalu mengembalikan angka `0` (bukan crash) ketika input kosong atau pattern tidak ditemukan. Sebuah function yang stabil harus bisa menerima **input apa pun** tanpa meledak.

---

Mengapa pengujian "Case Sensitivity" (Test Case 4) itu penting?

Di banyak konteks, huruf besar dan kecil dianggap berbeda. Misalnya dalam pencarian kata kunci command-line, `git` dan `GIT` adalah dua hal yang berbeda. Regex kita `/abc/g` secara default bersifat **case-sensitive** — ini adalah perilaku yang benar untuk challenge ini, tapi perlu dipahami agar tidak menjadi bug tak terduga di challenge lain.

> 🔴 Jika kamu butuh pencarian case-insensitive, tambahkan flag `i`: `/abc/gi`

Memahami default behavior regex membantu kamu **membuat keputusan sadar** saat menulis pola pencarian.

---

<a name="test-runner"></a>
## 🤖 Script Test Runner Otomatis

Untuk menguji semua versi secara instan, jalankan script ini di terminal dengan Node.js.

```javascript
// =============================================
// Paste fungsi yang ingin dites di sini
// =============================================

// V1 — Descriptive If-Else
function cariPelaku(text) {
  const targetPattern = /abc/g;
  const matches = text.match(targetPattern);

  if (matches) {
    return matches.length;
  } else {
    return 0;
  }
}

// =============================================
// Test Cases
// =============================================

const testCases = [
  // Edge Cases
  { input: '',            expected: 0, desc: "String kosong" },
  { input: 'xyz',         expected: 0, desc: "Tidak ada 'abc' sama sekali" },
  { input: 'a_b_c',       expected: 0, desc: "Huruf a,b,c terpisah" },
  { input: 'ABC',          expected: 0, desc: "Huruf besar ABC (case sensitive)" },

  // Normal Cases
  { input: 'xabcx',       expected: 1, desc: "Satu kemunculan di tengah" },
  { input: 'mabcvabc',    expected: 2, desc: "Dua kemunculan terpisah" },
  { input: 'abcabcabc',   expected: 3, desc: "Tiga kemunculan berturut-turut" },
  { input: 'abcxyz',      expected: 1, desc: "Kemunculan di awal string" },

  // Complex Cases
  { input: 'abcdabdc',    expected: 1, desc: "Karakter penyusup di antara 'abc'" },
  { input: 'bcabcac',     expected: 1, desc: "Awalan mirip tapi tidak cocok" },
  { input: 'babcbacabc',  expected: 2, desc: "Dua kemunculan dengan jebakan" },
  { input: 'cbacba',      expected: 0, desc: "Huruf abc ada tapi urutan salah" },
];

// =============================================
// Test Runner
// =============================================

function runTests(fn) {
  console.log(`\n=== RUNNING TESTS ===\n`);
  let passCount = 0;

  testCases.forEach(({ input, expected, desc }, index) => {
    const result = fn(input);
    const status = JSON.stringify(result) === JSON.stringify(expected) ? '✅ PASS' : '❌ FAIL';

    if (status === '✅ PASS') passCount++;

    console.log(`Test #${index + 1}: ${status} - ${desc}`);

    if (status === '❌ FAIL') {
      console.log('  Input   :', JSON.stringify(input));
      console.log('  Expected:', JSON.stringify(expected));
      console.log('  Result  :', JSON.stringify(result));
    }
  });

  console.log(`\nRESULT: ${passCount}/${testCases.length} Passed\n`);
}

runTests(cariPelaku);
```

> **💡 Trik Tip:** Script ini menggunakan `JSON.stringify()` untuk membandingkan hasil. Meskipun untuk challenge ini kita hanya membandingkan angka (bisa pakai `===`), penggunaan `JSON.stringify()` menjadikan script ini **universal** — bisa dipakai juga untuk challenge yang mengembalikan array atau object tanpa perlu mengubah logika perbandingan.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 09 — All Versions Comparison](./09-all-versions-comparison_perbandingan-semua-versi.md)**
