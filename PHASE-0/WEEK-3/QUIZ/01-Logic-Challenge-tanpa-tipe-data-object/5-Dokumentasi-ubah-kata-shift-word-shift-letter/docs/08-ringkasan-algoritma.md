# 📚 Part 8: Ringkasan Algoritma Semua Versi

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║         📊 PART 8: RINGKASAN ALGORITMA SEMUA VERSI 📊                   ║
║                                                                          ║
║              Step-by-Step Setiap Solusi dalam Satu Tempat                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| ✅ Kode Final | 🔀 Alternatif 1 | 🔀 Alternatif 1b | 🔀 Alternatif 2 |
|:------------:|:--------------:|:----------------:|:--------------:|
| [Jump](#-kode-final) | [Jump](#-alternatif-1--if-hardcode-ascii) | [Jump](#-alternatif-1b--string-alphabet--if-hardcode) | [Jump](#-alternatif-2--string-alphabet--modulo) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami alur kerja setiap solusi secara detail
- ✅ Bisa membandingkan step-by-step antar solusi
- ✅ Siap untuk melihat perbandingan final di Part 9

---

## ✅ Kode Final

```javascript
const shiftChar = (char) => {
  const charCode = char.charCodeAt(0)

  if (charCode >= 97 && charCode <= 122) {
    const code = (charCode - 97 + 1) % 26 + 97
    return String.fromCharCode(code)
  }

  return char
}

const shiftWord = (word) => word.split('').map(shiftChar).join('')
```

**Konsep Inti:**
```
Pisahkan tanggung jawab — shiftChar urus satu huruf, shiftWord urus seluruh kata
Gunakan ASCII code untuk geser huruf tanpa array manual
Gunakan modulo % untuk wrap z → a
Karakter non-huruf dikembalikan apa adanya
```

**Step-by-Step:**

1. **Kode ini terdiri dari 2 fungsi yang bekerja sama**
   - `shiftChar(char)` — tugasnya menggeser **satu huruf**
   - `shiftWord(word)` — tugasnya memproses **seluruh kata** dengan memanggil `shiftChar` untuk setiap hurufnya

2. **`shiftWord` menerima `word` lalu memecahnya menjadi array huruf dengan `.split('')`**
   - `'wow'.split('')` → `['w', 'o', 'w']`

3. **`.map(shiftChar)` — setiap huruf di array dikirim satu per satu ke `shiftChar`**
   - `'w'` → masuk `shiftChar` → proses → keluar `'x'`
   - `'o'` → masuk `shiftChar` → proses → keluar `'p'`
   - `'w'` → masuk `shiftChar` → proses → keluar `'x'`

4. **Di dalam `shiftChar`, `char` diubah ke angka ASCII dengan `charCodeAt(0)` dan disimpan ke `charCode`**
   - `'w'.charCodeAt(0)` → `charCode = 119`

5. **Cek apakah `charCode` dalam range huruf a–z (97–122)**
   - `119 >= 97 && 119 <= 122` → `true` → lanjut geser
   - Kalau `false` (spasi, angka, tanda baca) → langsung `return char` apa adanya

6. **Normalisasi `charCode` ke range 0–25 dengan `charCode - 97`**
   - `119 - 97 = 22` (artinya `'w'` adalah huruf ke-22)

7. **Geser satu posisi dengan `+ 1`, lalu `% 26` agar tidak keluar dari range**
   - `22 + 1 = 23`
   - `23 % 26 = 23` (tidak melewati batas)
   - Khusus `'z'`: `25 + 1 = 26` → `26 % 26 = 0` → balik ke `'a'` ✅

8. **Kembalikan ke range ASCII dengan `+ 97`, simpan ke `code`**
   - `23 + 97 = 120`

9. **`code` diubah kembali ke huruf dengan `String.fromCharCode(code)` lalu dikembalikan**
   - `String.fromCharCode(120)` → `'x'`

10. **`.join('')` menggabungkan semua hasil menjadi string**
    - `['x', 'p', 'x'].join('')` → `'xpx'` ✅

**Kompleksitas:**
- Waktu: **O(n)** — setiap karakter diproses sekali
- Ruang: **O(n)** — hasil string sepanjang input

---

## 🔀 Alternatif 1 — `if` Hardcode ASCII

```javascript
const shiftWord = (word) => {
  let result = ''

  for (const char of word) {
    const code = char.charCodeAt(0)

    if (code < 97 || code > 122) {
      result += char
    } else if (code === 122) {
      result += 'a'
    } else {
      result += String.fromCharCode(code + 1)
    }
  }

  return result
}
```

**Konsep Inti:**
```
Satu fungsi menangani semua proses
Gunakan ASCII code dan if-else untuk handle 3 kondisi
Hardcode pengecekan z (122) dan hasil 'a' secara eksplisit
```

**Step-by-Step:**

1. **Kode ini hanya terdiri dari 1 fungsi `shiftWord`**
   - Semua proses dilakukan di dalam fungsi ini langsung
   - Tidak ada fungsi pembantu

2. **`shiftWord` menerima `word` lalu menyiapkan `result` sebagai string kosong**
   - `result` menampung hasil huruf yang sudah digeser satu per satu

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
   - Langsung `result += 'a'` secara hardcode

7. **Kondisi ketiga — huruf selain `'z'`**
   - Cukup `code + 1` untuk geser ke huruf berikutnya
   - `result += String.fromCharCode(code + 1)`
   - Contoh: `'w'` → `119 + 1 = 120` → `String.fromCharCode(120)` → `'x'` → `result += 'x'`

8. **Setelah loop selesai, `result` dikembalikan sebagai output**
   - `result = 'xpx'` → `return 'xpx'` ✅

**Kompleksitas:**
- Waktu: **O(n)** — setiap karakter diproses sekali
- Ruang: **O(n)** — hasil string sepanjang input

---

## 🔀 Alternatif 1b — String Alphabet + `if` Hardcode

```javascript
const shiftWord = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''

  for (const currentChar of word) {
    const index = alphabet.indexOf(currentChar)

    if (index === -1) {
      result += currentChar
    } else if (index === 25) {
      result += 'a'
    } else {
      result += alphabet[index + 1]
    }
  }

  return result
}
```

**Konsep Inti:**
```
Gunakan string alphabet sebagai referensi urutan huruf
Cari posisi huruf dengan indexOf(), hasilnya disimpan ke index
Gunakan if-else untuk handle 3 kondisi berbeda
Hardcode pengecekan z (index 25) dan hasil 'a' secara eksplisit
```

**Step-by-Step:**

1. **Kode ini hanya terdiri dari 1 fungsi `shiftWord`**
   - Tidak menggunakan ASCII code, melainkan string `alphabet` sebagai referensi

2. **`shiftWord` menerima `word`, menyiapkan string referensi `alphabet` dan `result` sebagai string kosong**
   - `alphabet = 'abcdefghijklmnopqrstuvwxyz'`
   - `result` menampung hasil huruf yang sudah digeser satu per satu

3. **`for...of` loop memproses setiap `currentChar` dalam `word` satu per satu**
   - `'wow'` → iterasi pertama `currentChar = 'w'`, kedua `currentChar = 'o'`, ketiga `currentChar = 'w'`

4. **Setiap `currentChar` dicari posisinya di `alphabet` dengan `indexOf()` dan disimpan ke `index`**
   - `alphabet.indexOf('w')` → `index = 22`

5. **Kondisi pertama — cek apakah `currentChar` bukan huruf a–z**
   - `indexOf()` mengembalikan `-1` kalau `currentChar` tidak ditemukan di `alphabet`
   - Jika `index === -1` → bukan huruf (spasi, angka, tanda baca)
   - Langsung `result += currentChar` apa adanya tanpa digeser

6. **Kondisi kedua — cek apakah `currentChar` adalah `'z'`**
   - `'z'` ada di posisi index `25` di `alphabet`
   - Jika `index === 25` → `result += 'a'` secara hardcode

7. **Kondisi ketiga — huruf selain `'z'`**
   - Ambil huruf berikutnya dari `alphabet` dengan `alphabet[index + 1]`
   - `result += alphabet[index + 1]`
   - Contoh: `'w'` → `index = 22` → `alphabet[23]` → `'x'` → `result += 'x'`

8. **Setelah loop selesai, `result` dikembalikan sebagai output**
   - `result = 'xpx'` → `return 'xpx'` ✅

**Kompleksitas:**
- Waktu: **O(n × 26)** — `indexOf` scan sampai 26 huruf per karakter
- Ruang: **O(n)** — hasil string sepanjang input

---

## 🔀 Alternatif 2 — String Alphabet + Modulo

```javascript
const shiftWord = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  return word.split('').map(char => {
    const index = alphabet.indexOf(char)
    if (index === -1) return char
    return alphabet[(index + 1) % 26]
  }).join('')
}
```

**Konsep Inti:**
```
Gunakan string alphabet sebagai referensi urutan huruf
Cari posisi huruf dengan indexOf(), hasilnya disimpan ke index
Gunakan modulo % 26 untuk wrap z → a tanpa if-else tambahan
Gunakan split + map + join untuk proses yang lebih ringkas
```

**Step-by-Step:**

1. **Kode ini hanya terdiri dari 1 fungsi `shiftWord`**
   - Tidak menggunakan ASCII code, melainkan string `alphabet` sebagai referensi

2. **`shiftWord` menerima `word` lalu menyiapkan string referensi `alphabet`**
   - `alphabet = 'abcdefghijklmnopqrstuvwxyz'`

3. **`.split('')` memecah `word` menjadi array huruf**
   - `'wow'.split('')` → `['w', 'o', 'w']`

4. **`.map()` memproses setiap `char` satu per satu**
   - Tiap `char` dicari posisinya di `alphabet` menggunakan `indexOf(char)` dan disimpan ke `index`
   - `alphabet.indexOf('w')` → `index = 22`

5. **Cek apakah `index === -1`**
   - Jika `index === -1` → bukan huruf → langsung `return char` apa adanya

6. **Kalau `char` huruf valid, geser posisi dengan `index + 1`**
   - `index = 22` → `22 + 1 = 23`

7. **Gunakan `% 26` agar tidak keluar dari range `alphabet`**
   - `23 % 26 = 23` (tidak melewati batas)
   - Khusus `'z'`: `index = 25` → `25 + 1 = 26` → `26 % 26 = 0` → balik ke index `0` yaitu `'a'` ✅

8. **Ambil huruf hasil geser dari `alphabet` lalu `return` sebagai hasil `.map()`**
   - `return alphabet[(index + 1) % 26]`
   - `return alphabet[23]` → `return 'x'`

9. **`.join('')` menggabungkan semua hasil menjadi string**
   - `['x', 'p', 'x'].join('')` → `'xpx'` ✅

**Kompleksitas:**
- Waktu: **O(n × 26)** — `indexOf` scan sampai 26 huruf per karakter
- Ruang: **O(n)** — hasil string sepanjang input

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔀 [← Kembali ke Part 7: Alternatif 2](07-alternatif-2.md)**
- **📊 [Lanjut ke Part 9: Perbandingan & Kesimpulan →](09-perbandingan-kesimpulan.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
