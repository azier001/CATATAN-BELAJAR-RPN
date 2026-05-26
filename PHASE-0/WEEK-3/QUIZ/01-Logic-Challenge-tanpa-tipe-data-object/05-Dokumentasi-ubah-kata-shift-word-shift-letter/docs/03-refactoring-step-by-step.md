# 📚 Part 3: Refactoring Step-by-Step

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         🔧 PART 3: REFACTORING STEP-BY-STEP 🔧                          ║
║                                                                          ║
║              Dari Kode Original ke Kode yang Lebih Baik                  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔧 Tahap 1 | 🔧 Tahap 2 | 🔧 Tahap 3 | 🔧 Tahap 4 |
|:----------:|:----------:|:----------:|:----------:|
| [Jump](#-tahap-1-geser-satu-huruf-shiftchar) | [Jump](#-tahap-2-proses-seluruh-kata-shiftword) | [Jump](#-tahap-3-versi-lebih-ringkas) | [Jump](#-tahap-4-handling-karakter-non-huruf) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami proses refactoring secara bertahap
- ✅ Bisa memisahkan tanggung jawab fungsi (separation of concern)
- ✅ Memahami cara handling karakter non-huruf

---

## 🔧 Tahap 1: Geser Satu Huruf (`shiftChar`)

Sebelum urus seluruh kata, pastikan dulu bisa menggeser **satu huruf** menggunakan konsep ASCII dari Part 2.

```javascript
const shiftChar = (char) => {
  const charCode = char.charCodeAt(0)
  const code = (charCode - 97 + 1) % 26 + 97

  return String.fromCharCode(code)
}

// Test
console.log(shiftChar('a')) // 'b' ✅
console.log(shiftChar('z')) // 'a' ✅
console.log(shiftChar('c')) // 'd' ✅
```

---

## 🔧 Tahap 2: Proses Seluruh Kata (`shiftWord`)

Sekarang buat fungsi `shiftWord` yang memanggil `shiftChar` untuk setiap huruf dalam kata.

```javascript
const shiftWord = (word) => {
  let result = ''

  for (const char of word) {
    result += shiftChar(char)
  }

  return result
}

// Test
console.log(shiftWord('wow'))      // 'xpx'   ✅
console.log(shiftWord('keren'))    // 'lfsfo'  ✅
console.log(shiftWord('semangat')) // 'tfnbohbu' ✅
```

---

## 🔧 Tahap 3: Versi Lebih Ringkas

Tahap 2 bisa dipersingkat menggunakan `split`, `map`, dan `join`:

```javascript
const shiftWord = (word) => word.split('').map(shiftChar).join('')
```

Karena `shiftChar` menerima satu argumen `char`, fungsinya bisa langsung di-pass ke `map` tanpa wrapper arrow function.

| Versi | Keterangan |
|-------|-----------|
| `for...of` | Lebih mudah dibaca pemula |
| `split + map + join` | Lebih idiomatik JavaScript |

Keduanya menghasilkan output yang sama.

---

## 🔧 Tahap 4: Handling Karakter Non-Huruf

Saat ini `shiftChar` belum bisa handle spasi, angka, atau tanda baca. Kita perlu cek apakah karakter yang masuk adalah huruf `a–z` atau bukan.

```javascript
const shiftChar = (char) => {
  const charCode = char.charCodeAt(0)

  // Huruf a–z berada di range ASCII 97–122
  if (charCode >= 97 && charCode <= 122) {
    const code = (charCode - 97 + 1) % 26 + 97
    return String.fromCharCode(code)
  }

  // Bukan huruf → kembalikan apa adanya
  return char
}
```

**Test dengan karakter non-huruf:**
```
shiftWord('hello world') → 'ifmmp xpsme' ✅ (spasi dipertahankan)
shiftWord('abc123')      → 'bcd123'      ✅ (angka dipertahankan)
shiftWord('hi!')         → 'ij!'         ✅ (tanda baca dipertahankan)
```

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa fungsi dipisah menjadi shiftChar dan shiftWord?</strong></summary>

Ini adalah prinsip **separation of concern** — setiap fungsi punya satu tanggung jawab. `shiftChar` hanya mengurus satu huruf, `shiftWord` mengurus seluruh kata dengan memanggil `shiftChar`. Kode jadi lebih mudah dibaca, ditest, dan dimaintain.

</details>

<details>
<summary><strong>❓ Kenapa cek charCode >= 97 && charCode <= 122?</strong></summary>

Karena range ASCII untuk huruf `a–z` adalah 97 sampai 122. Jika charCode di luar range ini berarti bukan huruf kecil, sehingga langsung dikembalikan apa adanya tanpa digeser.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 2: Konsep ASCII](02-konsep-ascii.md)**
- **✅ [Lanjut ke Part 4: Kode Final & Perbandingan →](04-kode-final.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
