# 📚 Part 5: Alternatif 1 — `if` Hardcode ASCII

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         🔀 PART 5: ALTERNATIF 1 — if HARDCODE ASCII 🔀                  ║
║                                                                          ║
║              Pendekatan Sederhana dengan if-else                         ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 💡 Konsep | 📋 Kode | 🧪 Test | 📊 Algoritma | ⚠️ Pitfalls |
|:---------:|:-------:|:-------:|:------------:|:-----------:|
| [Jump](#-konsep) | [Jump](#-kode) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) | [Jump](#️-pitfalls) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami pendekatan `if-else` untuk handle kasus `z → a`
- ✅ Mengerti perbedaan pendekatan ini dengan kode final
- ✅ Tahu kapan pendekatan ini lebih mudah digunakan

---

## 💡 Konsep

Alih-alih menggunakan rumus modulo, kita cukup gunakan `if-else` untuk handle **3 kondisi**:
1. Karakter bukan huruf a–z → kembalikan apa adanya
2. Karakter adalah `z` (ASCII 122) → kembalikan `'a'`
3. Karakter huruf lainnya → geser `+1` langsung

Pendekatan ini lebih mudah dibaca pemula karena tidak perlu memahami rumus modulo.

---

## 📋 Kode

```javascript
const shiftWord = (word) => {
  let result = ''

  for (const char of word) {
    const code = char.charCodeAt(0)

    if (code < 97 || code > 122) {
      result += char                          // bukan huruf, kembalikan apa adanya
    } else if (code === 122) {
      result += 'a'                           // huruf z → a
    } else {
      result += String.fromCharCode(code + 1) // huruf lainnya, geser +1
    }
  }

  return result
}
```

---

## 🧪 Test Cases

```javascript
console.log(shiftWord('wow'))         // 'xpx'       ✅
console.log(shiftWord('keren'))       // 'lfsfo'     ✅
console.log(shiftWord('semangat'))    // 'tfnbohbu'  ✅
console.log(shiftWord('z'))           // 'a'         ✅
console.log(shiftWord('zzz'))         // 'aaa'       ✅
console.log(shiftWord('hello world')) // 'ifmmp xpsme' ✅
console.log(shiftWord('abc123'))      // 'bcd123'    ✅
console.log(shiftWord('hi!'))         // 'ij!'       ✅
```

---

## 📊 Ringkasan Algoritma

**Konsep Inti:**
```
Satu fungsi shiftWord menangani semua proses
Gunakan if-else untuk handle 3 kondisi berbeda
Hardcode pengecekan z (122) dan hasil 'a' secara eksplisit
```

**Step-by-Step (Detail):**

1. **Kode ini hanya terdiri dari 1 fungsi `shiftWord`**
   - Semua proses geser huruf dilakukan di dalam fungsi ini langsung
   - Tidak ada fungsi pembantu seperti `shiftChar`

2. **`shiftWord` menerima `word` lalu menyiapkan `result` sebagai string kosong**
   - `result` ini yang akan menampung hasil huruf yang sudah digeser satu per satu

3. **`for...of` loop memproses setiap `char` dalam `word` satu per satu**
   - `'wow'` → iterasi pertama `char = 'w'`, kedua `char = 'o'`, ketiga `char = 'w'`

4. **Setiap `char` diubah ke angka ASCII dengan `charCodeAt(0)` dan disimpan ke `code`**
   - `'w'.charCodeAt(0)` → `code = 119`

5. **Kondisi pertama — cek apakah `char` bukan huruf a–z**
   - Jika `code < 97 || code > 122` → bukan huruf
   - Langsung `result += char` apa adanya tanpa digeser
   - Contoh: spasi `' '` → ASCII 32 → `32 < 97` → langsung masuk `result`

6. **Kondisi kedua — cek apakah `char` adalah `'z'`**
   - Jika `code === 122` → berarti `char` adalah `'z'`
   - Karena `'z'` harus balik ke `'a'`, langsung `result += 'a'` secara hardcode

7. **Kondisi ketiga — huruf selain `'z'`**
   - Kalau bukan non-huruf dan bukan `'z'`, berarti huruf biasa
   - Cukup `code + 1` untuk geser ke huruf berikutnya
   - Lalu tampung ke `result += String.fromCharCode(code + 1)`
   - Contoh: `'w'` → `119 + 1 = 120` → `String.fromCharCode(120)` → `'x'` → `result += 'x'`

8. **Setelah loop selesai, `result` dikembalikan sebagai output**
   - `result = 'xpx'` → `return 'xpx'` ✅

**Kompleksitas:**
- Waktu: **O(n)** — setiap karakter diproses sekali
- Ruang: **O(n)** — hasil string sepanjang input

---

## ⚠️ Pitfalls

**1. ❌ Urutan kondisi salah**
```javascript
// ❌ SALAH — cek non-huruf setelah cek z, z bisa lolos ke kondisi ketiga
} else if (code === 122) {
  result += 'a'
} else if (code < 97 || code > 122) {
  result += char
}

// ✅ BENAR — cek non-huruf dulu
if (code < 97 || code > 122) {
  result += char
} else if (code === 122) {
  result += 'a'
}
```

**2. ❌ Lupa tanda kutip pada `'a'`**
```javascript
// ❌ SALAH — a dianggap variable, bukan string
result += a

// ✅ BENAR
result += 'a'
```

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Apa bedanya dengan kode final yang pakai modulo?</strong></summary>

Kode final menggunakan rumus modulo `(charCode - 97 + 1) % 26 + 97` yang menangani semua kasus termasuk `z → a` secara matematis. Alternatif 1 menggunakan `if-else` untuk handle `z` secara eksplisit — lebih mudah dipahami tapi kurang fleksibel secara matematis.

</details>

<details>
<summary><strong>❓ Kenapa cek code === 122 bukan char === 'z'?</strong></summary>

Keduanya valid dan menghasilkan output yang sama. Namun karena kita sudah punya variabel `code` (hasil ASCII), lebih konsisten menggunakan `code === 122` daripada balik cek karakter aslinya.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **✅ [← Kembali ke Part 4: Kode Final](04-kode-final.md)**
- **🔀 [Lanjut ke Part 6: Alternatif 1b →](06-alternatif-1b.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
