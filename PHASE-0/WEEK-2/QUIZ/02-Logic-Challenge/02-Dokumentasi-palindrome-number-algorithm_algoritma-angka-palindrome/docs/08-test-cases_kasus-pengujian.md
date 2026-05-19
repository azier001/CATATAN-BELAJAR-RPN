# 🧪 Setup Unit Testing Manual (Test Cases & Edge Cases)

### ✨ _Menguji ketahanan algoritma menggunakan script murni di Node.js_

> 🎯 **Tujuan:** Panduan ini akan membantumu menyiapkan dan menjalankan *script test runner* mandiri untuk menguji fungsi `angkaPalindrome` terhadap 9 skenario ekstrem tanpa perlu menginstal *framework* tambahan.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Latar Belakang](#latar-belakang) | Kenapa kita membuat test manual? |
| 🔑 | [Konsep Penting](#konsep) | Trik perbandingan data |
| 🛠️ | [Langkah Setup](#setup) | Menyusun script *test runner* |
| ⚠️ | [Troubleshooting](#troubleshooting) | Mengatasi error pemanggilan fungsi |
| 💻 | [Penjelasan Command](#command) | Cara eksekusi lewat terminal |
| ✅ | [Verifikasi & Hasil](#verifikasi) | Membaca laporan kelulusan 9 kasus |

---

<a name="latar-belakang"></a>
## 📖 Latar Belakang

Saat membuat algoritma seperti *Angka Palindrome*, kita sering harus mengecek apakah kode kita berhasil lolos semua *edge cases* (kasus jebakan) seperti input 1 digit, angka ganda, atau lompatan jumlah digit. Menguji satu per satu dengan `console.log()` tentu melelahkan dan rawan terlewat.

> [!TIP]
> 💡 **Analogi Mudah Dipahami**
> 
> | | console.log() Manual | Test Runner Script |
> |---|---|---|
> | 📝 | **Memancing dengan kail:** Menangkap 1 hasil eksekusi dalam satu waktu. Harus mengganti umpan (`console.log(8)`, lalu `console.log(11)`) berulang kali. | **Memancing dengan jaring:** Melempar jaring berisi 9 kriteria pengujian sekaligus, lalu menarik semua hasil dalam 1 detik. |
> | 🔒 | Rawan salah baca karena output di terminal berantakan. | Sangat rapi, langsung melabeli setiap baris dengan 🔴 FAIL atau ✅ PASS. |

### 💡 Jadi, Apa Solusinya?
Kita akan membuat *test runner* khusus menggunakan fitur bawaan Node.js yang mengeksekusi semua 9 skenario pengujian sekaligus!

---

<a name="konsep"></a>
## 🔑 Konsep — Perbandingan Tipe Data

Sebelum masuk ke script, ada satu trik penting dalam melakukan testing di JavaScript murni.

### 1️⃣ JSON.stringify() — _"Mencetak Pas Foto"_ 📸

```
🎯 Fungsi    → Mengubah hasil fungsi (angka/array/object) menjadi teks statis.
📌 Status    → Dipakai di dalam fungsi perbandingan utama.
🔐 Analogi   → Dua orang kembar identik sulit dibedakan. Tapi jika kamu memfoto KTP mereka berdua (dijadikan teks 2D), kamu bisa membandingkan fotonya pixel-demi-pixel dengan pasti.
```

> [!IMPORTANT]
> 🔔 Walaupun output kita saat ini hanya berupa angka bulat (integer), membiasakan diri menggunakan `JSON.stringify(result) === JSON.stringify(expected)` adalah *best practice* unit testing manual agar script ini bisa di-reuse untuk soal array/object di masa depan!

---

<a name="setup"></a>
## 🛠️ Langkah Eksekusi (Step-by-Step)

### 🌐 Tahap 1 — Menyiapkan Script Test Runner

> **⏱️ Estimasi waktu:** 2 menit | **📋 Prasyarat:** Node.js terinstal, fungsi algoritma final (V4) sudah siap.

**1.** 📋 **Buat file baru di kodemu.**
Buat file `test-runner.js` di dalam folder dokumentasimu.

---

**2.** 🌐 **Copy dan paste script raksasa ini ke dalamnya.**
Script ini memuat 9 skenario (*Edge Cases, Normal Cases, Complex Cases*) yang kita bahas sebelumnya.

```javascript
// 1. FUNGSI ALGORITMA (V4 - ES6 Refactored)
const angkaPalindrome = (num) => {
  let candidate = num + 1;
  const isPalindrome = (number) => String(number) === [...String(number)].reverse().join('');
  while (!isPalindrome(candidate)) candidate++;
  return candidate;
};

// 2. SKENARIO PENGUJIAN (9 KASUS)
const testCases = [
  // Edge Cases (Kondisi Ekstrem)
  { input: 8, expected: 9, desc: "[Edge] Angka tunggal" },
  { input: 11, expected: 22, desc: "[Edge] Input sudah palindrome ganda" },
  { input: 99, expected: 101, desc: "[Edge] Lompat lintas jumlah digit" },
  { input: 0, expected: 1, desc: "[Edge] Limit bawah angka valid" },
  
  // Normal Cases (Kondisi Biasa)
  { input: 10, expected: 11, desc: "[Normal] Puluhan tidak kembar" },
  { input: 117, expected: 121, desc: "[Normal] Ratusan acak" },
  
  // Complex Cases (Kondisi Soal)
  { input: 175, expected: 181, desc: "[Complex] Ratusan besar (Test Soal)" },
  { input: 1000, expected: 1001, desc: "[Complex] Genap ribuan (Test Soal)" },
  { input: 1001, expected: 1111, desc: "[Complex] Input sudah palindrome besar" }
];

// 3. MESIN TEST RUNNER
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

// 4. JALANKAN MESIN
runTests(angkaPalindrome);
```

---

**3.** 🚨 **LANGKAH KRUSIAL!**

> [!CAUTION]
> 🔴 **Pastikan nama fungsi cocok!** Pemanggilan `runTests(angkaPalindrome)` di baris paling bawah harus sesuai persis dengan nama fungsi algoritmamu.

---

<a name="troubleshooting"></a>
## ⚠️ Troubleshooting — Fungsi Not Defined

> [!WARNING]
> 🐛 **Error ini sering terjadi** jika kamu mengisolasi script testing tanpa mengimpor fungsinya!

```
❌  Error Message:  "ReferenceError: angkaPalindrome is not defined"
```

### 🔍 Penyebab
Mesin `runTests` dipanggil, tetapi ia tidak dapat menemukan deklarasi `const angkaPalindrome` di atasnya.

### ✅ Solusi
Pastikan seluruh blok kode fungsi `angkaPalindrome` berada di dalam file yang **sama** dengan script `testCases`, karena kita menjalankan *vanilla Node.js* tanpa sistem module `export/import`.

> 📌 Pelajaran: File testing manual harus *self-contained* (berisi fungsi dan alat tesnya sekaligus).

---

<a name="command"></a>
## 💻 Tahap 2 — Konfigurasi Terminal

Saatnya mengeksekusi script yang telah kita buat.

### 🔧 Perintah Eksekusi Node

Buka terminal di dalam VSCode (`` Ctrl + ` ``), pastikan posisimu berada di folder yang sama dengan file `.js` tadi, lalu ketik:

```bash
node test-runner.js
```

> 📖 **Penjelasan kata per kata:**
>
> | Bagian | Arti |
> |--------|------|
> | `node` | Memerintahkan sistem untuk menggunakan *runtime* Node.js. |
> | `test-runner.js` | Nama file target yang berisi mesin testing dan ke-9 kasus uji. |

> [!NOTE]
> 💡 **Kenapa penting?** Jika kamu hanya memencet tombol "Play" biasa tanpa terminal, terkadang *output log* tersembunyi di panel *Debug Console* yang sulit dibaca. Menjalankan lewat terminal memberi kontrol penuh.

---

<a name="verifikasi"></a>
## ✅ Verifikasi — Cara Memastikan Setup Berhasil

### 1️⃣ Visual Konfirmasi Laporan Ujian

Saat perintah Node dijalankan, pastikan terminal mengeluarkan *output* laporan persis seperti ini:

```text
=== RUNNING TESTS ===

Test #1: ✅ PASS - [Edge] Angka tunggal
Test #2: ✅ PASS - [Edge] Input sudah palindrome ganda
Test #3: ✅ PASS - [Edge] Lompat lintas jumlah digit
Test #4: ✅ PASS - [Edge] Limit bawah angka valid
Test #5: ✅ PASS - [Normal] Puluhan tidak kembar
Test #6: ✅ PASS - [Normal] Ratusan acak
Test #7: ✅ PASS - [Complex] Ratusan besar (Test Soal)
Test #8: ✅ PASS - [Complex] Genap ribuan (Test Soal)
Test #9: ✅ PASS - [Complex] Input sudah palindrome besar

RESULT: 9/9 Passed
```

Jika tulisan `RESULT: 9/9 Passed` muncul, itu artinya kodemu memiliki ketahanan baja terhadap segala *edge case*!

---

## 🔗 Navigation

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [07 — Perbandingan Semua Versi](./07-perbandingan-semua-versi_all-versions-comparison.md) | [README](../README.md) | 🏁 Selesai |

