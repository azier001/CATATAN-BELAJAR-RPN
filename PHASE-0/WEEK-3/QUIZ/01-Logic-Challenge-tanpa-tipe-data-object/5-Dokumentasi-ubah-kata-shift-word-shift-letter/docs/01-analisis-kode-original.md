# 📚 Shift Word - Complete Learning Guide

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         📋 PART 1: ANALISIS KODE ORIGINAL 📋                            ║
║                                                                          ║
║              Apakah Kode Sudah Sesuai Kriteria?                          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📋 Kode Original | ✅ Fungsional | ⚠️ Catatan | 📊 Kesimpulan |
|:----------------:|:------------:|:----------:|:-------------:|
| [Jump](#-kode-original) | [Jump](#-sudah-sesuai-kriteria) | [Jump](#️-yang-perlu-diperbaiki) | [Jump](#-kesimpulan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami kode original dan cara kerjanya
- ✅ Tahu bagian mana yang sudah benar
- ✅ Tahu bagian mana yang perlu diperbaiki

---

## 📋 Kode Original

```javascript
// sistem ubah hurufnya misal huruf a diubah menjadi b,
// c menjadi d, b menjadi c, z menjadi a
// intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
  ];

  const indexAlphabet = []

  for (const char of kata) {
    let currentIndex = alphabet.indexOf(char)
    currentIndex++
    if (currentIndex > 25) currentIndex = 0

    indexAlphabet.push(currentIndex)
  }

  let result = ''
  for (const index of indexAlphabet) {
    result += `${alphabet[index]}`
  }

  return result
}

// TEST CASES
console.log(ubahHuruf('wow'));        // xpx
console.log(ubahHuruf('developer'));  // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren'));      // lfsfo
console.log(ubahHuruf('semangat'));   // tfnbohbu
```

---

## ✅ Sudah Sesuai Kriteria

Kode original **sudah benar secara fungsional** — semua test case menghasilkan output yang tepat:

```
ubahHuruf('wow')        → 'xpx'       ✅
ubahHuruf('developer')  → 'efwfmpqfs' ✅
ubahHuruf('javascript') → 'kbwbtdsjqu'✅
ubahHuruf('keren')      → 'lfsfo'     ✅
ubahHuruf('semangat')   → 'tfnbohbu'  ✅
```

Logika inti juga sudah benar:
- Setiap huruf digeser ke huruf berikutnya ✅
- Huruf `z` kembali ke `a` ✅

---

## ⚠️ Yang Perlu Diperbaiki

Meski fungsional, ada beberapa hal yang bisa ditingkatkan:

**1. Dua loop padahal bisa satu**

Loop pertama mengumpulkan index, loop kedua membangun string. Keduanya bisa digabung menjadi satu loop saja.

**2. Array `alphabet` dan `indexAlphabet` tidak perlu**

Ada cara yang lebih efisien menggunakan **ASCII code** (`charCodeAt` dan `fromCharCode`) sehingga tidak perlu membuat array 26 huruf secara manual.

**3. Naming convention belum English**

`ubahHuruf`, `kata`, `indexAlphabet` sebaiknya diganti ke bahasa Inggris sesuai best practice.

**4. Tidak ada handling karakter non-huruf**

Jika input mengandung spasi, angka, atau tanda baca, kode akan berperilaku tidak terduga karena `indexOf` akan mengembalikan `-1`.

---

## 📊 Kesimpulan

| Aspek | Status |
|-------|--------|
| Logika benar | ✅ |
| Semua test case lulus | ✅ |
| Efisiensi | ⚠️ Bisa lebih baik |
| English naming convention | ❌ Belum |
| Handling karakter non-huruf | ❌ Belum ada |

Kode sudah benar, tapi masih ada ruang untuk improvement. Di Part 2 kita akan bahas konsep ASCII yang akan jadi fondasi untuk refactoring di Part 3.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2: Konsep ASCII →](02-konsep-ascii.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
