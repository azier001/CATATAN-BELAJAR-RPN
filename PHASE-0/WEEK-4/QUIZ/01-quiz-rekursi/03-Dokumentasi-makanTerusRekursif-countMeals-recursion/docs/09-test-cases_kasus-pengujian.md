# 🧪 Test Cases — Kasus Pengujian

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Testing-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

---

## 📚 Daftar Isi

- [Kode Test Cases](#kode)
- [Hasil Pengujian](#hasil)
- [Penjelasan Tiap Case](#penjelasan)

---

<a name="kode"></a>
## 💻 Kode Test Cases

Salin kode di bawah beserta salah satu versi solusi, lalu jalankan di browser console atau Node.js:

```js
// Ganti dengan versi yang ingin diuji
function makanTerusRekursif(waktu) {
  if (waktu <= 0) return 0
  return 1 + makanTerusRekursif(waktu - 15)
}

const testCases = [
  // Edge cases
  { input: 0,  expected: 0,  desc: "Waktu habis, tidak bisa makan" },
  { input: 1,  expected: 1,  desc: "Waktu sangat sedikit, tetap bisa makan sekali" },
  { input: 14, expected: 1,  desc: "Kurang dari 15 menit, tetap dihitung 1 kali makan" },

  // Normal cases
  { input: 15,  expected: 1,  desc: "Pas 15 menit, hanya 1 kali makan" },
  { input: 30,  expected: 2,  desc: "30 menit, 2 kali makan" },
  { input: 45,  expected: 3,  desc: "45 menit, 3 kali makan" },

  // Dari soal
  { input: 66,  expected: 5,  desc: "66 menit, 5 kali makan" },
  { input: 90,  expected: 6,  desc: "90 menit, 6 kali makan" },
  { input: 100, expected: 7,  desc: "100 menit, 7 kali makan" },

  // Larger numbers
  { input: 150, expected: 10, desc: "150 menit, 10 kali makan" },
  { input: 200, expected: 14, desc: "200 menit, 14 kali makan" },
]

testCases.forEach(({ input, expected, desc }, index) => {
  const result = makanTerusRekursif(input)
  const status = result === expected ? '✅ PASS' : '❌ FAIL'

  console.log(
    `Test Case #${index + 1}: ${status} - ${desc} | makanTerusRekursif(${input}) = ${result}`
  )

  if (status === '❌ FAIL') {
    console.log('Input   :', input)
    console.log('Expected:', expected)
    console.log('Result  :', result)
  }
})
```

---

<a name="hasil"></a>
## ✅ Hasil Pengujian

Semua versi lulus 11/11 test cases:

```
Test Case #1:  ✅ PASS - Waktu habis, tidak bisa makan          | makanTerusRekursif(0)   = 0
Test Case #2:  ✅ PASS - Waktu sangat sedikit, tetap bisa makan | makanTerusRekursif(1)   = 1
Test Case #3:  ✅ PASS - Kurang dari 15 menit, tetap 1 kali     | makanTerusRekursif(14)  = 1
Test Case #4:  ✅ PASS - Pas 15 menit, hanya 1 kali makan       | makanTerusRekursif(15)  = 1
Test Case #5:  ✅ PASS - 30 menit, 2 kali makan                 | makanTerusRekursif(30)  = 2
Test Case #6:  ✅ PASS - 45 menit, 3 kali makan                 | makanTerusRekursif(45)  = 3
Test Case #7:  ✅ PASS - 66 menit, 5 kali makan                 | makanTerusRekursif(66)  = 5
Test Case #8:  ✅ PASS - 90 menit, 6 kali makan                 | makanTerusRekursif(90)  = 6
Test Case #9:  ✅ PASS - 100 menit, 7 kali makan                | makanTerusRekursif(100) = 7
Test Case #10: ✅ PASS - 150 menit, 10 kali makan               | makanTerusRekursif(150) = 10
Test Case #11: ✅ PASS - 200 menit, 14 kali makan               | makanTerusRekursif(200) = 14
```

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Tiap Case

### Edge Cases

```js
console.log(makanTerusRekursif(0));
// Output: 0
```
Waktu sudah `0` sejak awal — langsung kena base case, tidak bisa makan sama sekali.

---

```js
console.log(makanTerusRekursif(1));
// Output: 1
```
Waktu hanya `1` menit — tetap bisa makan sekali karena `1 > 0`. Setelah makan, waktu jadi `-14` dan rekursif berhenti.

---

```js
console.log(makanTerusRekursif(14));
// Output: 1
```
Waktu `14` menit — kurang dari 15, tapi tetap bisa makan sekali. Setelah makan, waktu jadi `-1` dan rekursif berhenti.

---

### Normal Cases

```js
console.log(makanTerusRekursif(15));
// Output: 1
```
Tepat 15 menit — makan sekali, waktu jadi `0`, rekursif berhenti.

---

```js
console.log(makanTerusRekursif(30));
// Output: 2
```
30 menit → makan 2 kali (30→15→0).

---

```js
console.log(makanTerusRekursif(45));
// Output: 3
```
45 menit → makan 3 kali (45→30→15→0).

---

### Dari Soal

```js
console.log(makanTerusRekursif(66));
// Output: 5
```
66 menit → 66→51→36→21→6→-9. Makan 5 kali sebelum waktu habis.

---

```js
console.log(makanTerusRekursif(90));
// Output: 6
```
90 menit → habis tepat di 0. Makan 6 kali (90→75→60→45→30→15→0).

---

```js
console.log(makanTerusRekursif(100));
// Output: 7
```
100 menit → 100→85→70→55→40→25→10→-5. Makan 7 kali sebelum waktu habis.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 8 — Jebakan Base Case](./08-base-case-pitfall_jebakan-base-case.md)**
- **📖 [Lanjut ke Ringkasan Semua Versi →](../ringkasan-algoritma-semua-versi.md)**
