# 🧪 Test Cases — Kasus Pengujian

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Testing-blue?style=for-the-badge)

---

## 📚 Daftar Isi

- [Daftar Kasus Pengujian (11 Kasus)](#daftar-kasus)
- [Pentingnya Edge Cases](#edge-cases)
- [Script Test Runner Otomatis](#test-runner)

---

<a name="daftar-kasus"></a>
## 📝 Daftar Kasus Pengujian (11 Kasus)

Untuk memastikan keandalan dari semua versi solusi, kita menjalankan 11 skenario berbeda. Semua versi kode (kecuali V1) berhasil lulus pengujian ini.

### 1. Edge Cases (Kondisi Ekstrem)
Kondisi di batas luar kewajaran yang sering membuat program error.

| # | Skenario | Input | Expected Output |
|---|----------|-------|-----------------|
| 1 | String kosong | `''` | `[]` |
| 2 | Hanya 1 hero Melee | `'Axe-Melee'` | `[[], ['Axe']]` |
| 3 | Hanya 1 hero Ranged | `'Sniper-Ranged'` | `[['Sniper'], []]` |

### 2. Normal Cases (Kondisi Biasa)
Kondisi standar yang biasanya ada di contoh soal.

| # | Skenario | Input | Expected Output |
|---|----------|-------|-----------------|
| 4 | Semua hero Ranged | `'Razor-Ranged,Invoker-Ranged'` | `[['Razor', 'Invoker'], []]` |
| 5 | Semua hero Melee | `'Axe-Melee,Meepo-Melee'` | `[[], ['Axe', 'Meepo']]` |
| 6 | Campuran sederhana | `'Sniper-Ranged,Axe-Melee'` | `[['Sniper'], ['Axe']]` |

### 3. Complex / Soal Cases (Kondisi Kompleks)
Kondisi panjang dari soal atau varian yang lebih menantang.

| # | Skenario | Input | Expected Output |
|---|----------|-------|-----------------|
| 7 | Contoh utama Soal | `'Razor-Ranged,...,Sniper-Ranged'` | `[['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe']]` |
| 8 | Semua Ranged (Soal) | `'Drow Ranger-Ranged,...,Io-Ranged'` | `[['Drow Ranger', 'Chen', 'Dazzle', 'Io'], []]` |
| 9 | Campuran banyak | `'Axe-Melee,...,Earthshaker-Melee'` | `[['Sniper', 'Crystal Maiden'], ['Axe', 'Juggernaut', 'Earthshaker']]` |
| 10 | Data duplikat | `'Invoker-Ranged,Invoker-Ranged,Axe-Melee,Axe-Melee'` | `[['Invoker', 'Invoker'], ['Axe', 'Axe']]` |
| 11 | Urutan acak + duplikat | `'Pudge-Melee,Sniper-Ranged,Sniper-Ranged,Pudge-Melee'` | `[['Sniper', 'Sniper'], ['Pudge', 'Pudge']]` |

---

<a name="edge-cases"></a>
## ⚠️ Pentingnya Edge Cases

Mengapa pengujian seperti "Kamar Kosong" (Test Case 2, 3, 4, 5, 8) itu penting?

Jika fungsi kode kita dihubungkan ke sistem UI Frontend untuk menampilkan data, sistem tersebut biasanya mengharapkan index 1 (`result[1]`) itu selalu ada (meski kosong). Jika `result[1]` tidak ada, aplikasi Frontend bisa memunculkan pesan error mematikan seperti:

> 🔴 `Uncaught TypeError: Cannot read properties of undefined (reading 'map')`

Inilah sebabnya kita *harus* memaksa output menjadi `[ [...], [] ]` dan bukan membiarkan `"Melee"` hilang begitu saja.

---

<a name="test-runner"></a>
## 🤖 Script Test Runner Otomatis

Untuk menguji semua versi secara instan, saya membuat sebuah **Test Runner Script**. Jalankan script ini di terminal dengan Node.js.

```javascript
// Paste fungsi yang ingin dites di sini
// function meleeRangedGrouping(str) { ... }

const testCases = [
  { input: '', expected: [], desc: "String kosong menghasilkan array kosong" },
  { input: 'Axe-Melee', expected: [[], ['Axe']], desc: "Hanya 1 hero melee" },
  { input: 'Sniper-Ranged', expected: [['Sniper'], []], desc: "Hanya 1 hero ranged" },
  { input: 'Razor-Ranged,Invoker-Ranged', expected: [['Razor', 'Invoker'], []], desc: "Semua hero ranged" },
  { input: 'Axe-Melee,Meepo-Melee', expected: [[], ['Axe', 'Meepo']], desc: "Semua hero melee" },
  { input: 'Sniper-Ranged,Axe-Melee', expected: [['Sniper'], ['Axe']], desc: "Campuran sederhana" },
  {
    input: 'Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged',
    expected: [['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe']],
    desc: "Contoh utama dari soal"
  },
  {
    input: 'Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged',
    expected: [['Drow Ranger', 'Chen', 'Dazzle', 'Io'], []],
    desc: "Semua ranged dari soal"
  },
  {
    input: 'Axe-Melee,Sniper-Ranged,Juggernaut-Melee,Crystal Maiden-Ranged,Earthshaker-Melee',
    expected: [['Sniper', 'Crystal Maiden'], ['Axe', 'Juggernaut', 'Earthshaker']],
    desc: "Campuran banyak data"
  },
  {
    input: 'Invoker-Ranged,Invoker-Ranged,Axe-Melee,Axe-Melee',
    expected: [['Invoker', 'Invoker'], ['Axe', 'Axe']],
    desc: "Data duplikat tetap diproses"
  },
  {
    input: 'Pudge-Melee,Sniper-Ranged,Sniper-Ranged,Pudge-Melee',
    expected: [['Sniper', 'Sniper'], ['Pudge', 'Pudge']],
    desc: "Urutan campuran dengan duplikat"
  }
];

function runTests(fn) {
  console.log(`\n=== RUNNING TESTS ===\n`);
  let passCount = 0;
  
  testCases.forEach(({ input, expected, desc }, index) => {
    const result = fn(input);
    // Menggunakan trik sederhana JSON.stringify untuk membandingkan isi array nested
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

runTests(meleeRangedGrouping);
```

> **Trik Tip:** Trik membandingkan dua array multimensi di JavaScript paling cepat saat unit test sederhana adalah meng-convert keduanya menjadi string dengan `JSON.stringify()`.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 7 — Insight: Dynamic vs Fixed Grouping](./07-insight-dynamic-vs-fixed-grouping_kapan-pakai-object-vs-array.md)**
- **📖 [Lanjut ke Ringkasan Algoritma →](../ringkasan-algoritma-semua-versi.md)**
