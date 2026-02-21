# 📚 Part 7: Alternatif 2 — String Alphabet + Modulo

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║       🔀 PART 7: ALTERNATIF 2 — STRING ALPHABET + MODULO 🔀             ║
║                                                                          ║
║              Pendekatan Ringkas dengan split, map, dan join              ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 💡 Konsep | 📋 Kode | 🧪 Test | 📊 Algoritma | ⚠️ Pitfalls |
|:---------:|:-------:|:-------:|:------------:|:-----------:|
| [Jump](#-konsep) | [Jump](#-kode) | [Jump](#-test-cases) | [Jump](#-ringkasan-algoritma) | [Jump](#️-pitfalls) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami kombinasi string alphabet dengan modulo
- ✅ Memahami penggunaan `split`, `map`, dan `join`
- ✅ Tahu perbedaan pendekatan ini dengan Alternatif 1b

---

## 💡 Konsep

Mirip dengan Alternatif 1b, kita tetap menggunakan string `alphabet` sebagai referensi. Bedanya, untuk handle kasus `z → a` kita tidak lagi hardcode dengan `if-else`, melainkan menggunakan **modulo `% 26`** — sama seperti yang dipakai di kode final, hanya saja tanpa ASCII.

Proses membangun string hasil juga lebih ringkas menggunakan `split`, `map`, dan `join`.

---

## 📋 Kode

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

---

## 🧪 Test Cases

```javascript
console.log(shiftWord('wow'))         // 'xpx'         ✅
console.log(shiftWord('keren'))       // 'lfsfo'       ✅
console.log(shiftWord('semangat'))    // 'tfnbohbu'    ✅
console.log(shiftWord('z'))           // 'a'           ✅
console.log(shiftWord('zzz'))         // 'aaa'         ✅
console.log(shiftWord('hello world')) // 'ifmmp xpsme' ✅
console.log(shiftWord('abc123'))      // 'bcd123'      ✅
console.log(shiftWord('hi!'))         // 'ij!'         ✅
```

---

## 📊 Ringkasan Algoritma

**Konsep Inti:**
```
Gunakan string alphabet sebagai referensi urutan huruf
Cari posisi huruf dengan indexOf(), hasilnya disimpan ke index
Gunakan modulo % 26 untuk wrap z → a tanpa if-else tambahan
Gunakan split + map + join untuk proses yang lebih ringkas
```

**Step-by-Step (Detail):**

1. **Kode ini hanya terdiri dari 1 fungsi `shiftWord`**
   - Semua proses dilakukan di dalam fungsi ini langsung
   - Tidak menggunakan ASCII code, melainkan string `alphabet` sebagai referensi

2. **`shiftWord` menerima `word` lalu menyiapkan string referensi `alphabet`**
   - `alphabet = 'abcdefghijklmnopqrstuvwxyz'`
   - String ini dipakai sebagai "kamus" urutan huruf a–z

3. **`.split('')` memecah `word` menjadi array huruf**
   - `'wow'.split('')` → `['w', 'o', 'w']`

4. **`.map()` memproses setiap `char` satu per satu**
   - Tiap `char` dicari posisinya di `alphabet` menggunakan `indexOf(char)` dan disimpan ke `index`
   - `alphabet.indexOf('w')` → `index = 22`

5. **Cek apakah `index === -1`**
   - `indexOf()` mengembalikan `-1` kalau `char` tidak ditemukan di `alphabet`
   - Artinya `char` bukan huruf a–z (spasi, angka, tanda baca)
   - Jika `index === -1` → langsung `return char` apa adanya tanpa digeser

6. **Kalau `char` huruf valid, geser posisi dengan `index + 1`**
   - `index = 22` → `22 + 1 = 23`

7. **Gunakan `% 26` agar tidak keluar dari range `alphabet`**
   - `23 % 26 = 23` (tidak melewati batas, tetap 23)
   - Khusus `'z'`: `index = 25` → `25 + 1 = 26` → `26 % 26 = 0` → balik ke index `0` yaitu `'a'` ✅

8. **Ambil huruf hasil geser dari `alphabet` menggunakan index baru, lalu `return` sebagai hasil `.map()`**
   - `return alphabet[(index + 1) % 26]`
   - `return alphabet[23]` → `return 'x'`

9. **`.join('')` menggabungkan semua hasil menjadi string**
   - `['x', 'p', 'x'].join('')` → `'xpx'` ✅

**Kompleksitas:**
- Waktu: **O(n × 26)** — setiap karakter dicari dengan `indexOf` yang scan sampai 26 huruf
- Ruang: **O(n)** — hasil string sepanjang input

---

## ⚠️ Pitfalls

**1. ❌ Lupa `% 26` sehingga `z` tidak wrap balik ke `a`**
```javascript
// ❌ SALAH — alphabet[26] adalah undefined!
return alphabet[index + 1]

// ✅ BENAR — modulo pastikan tidak keluar dari range
return alphabet[(index + 1) % 26]
```

**2. ❌ Lupa handle `index === -1`**
```javascript
// ❌ SALAH — kalau char bukan huruf, alphabet[-1 + 1] = alphabet[0] = 'a' (salah!)
return alphabet[(index + 1) % 26]

// ✅ BENAR — cek dulu sebelum geser
if (index === -1) return char
return alphabet[(index + 1) % 26]
```

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Apa bedanya dengan Alternatif 1b?</strong></summary>

Keduanya sama-sama menggunakan string `alphabet`. Bedanya ada di cara handle `z → a`:
- **Alternatif 1b** → pakai `if-else` hardcode `index === 25`
- **Alternatif 2** → pakai modulo `% 26` yang lebih matematis dan elegan

Selain itu, Alternatif 2 menggunakan `split + map + join` sehingga tidak perlu variabel `result` dan loop manual.

</details>

<details>
<summary><strong>❓ Kenapa `(index + 1) % 26` bisa handle semua kasus?</strong></summary>

Karena modulo memastikan hasilnya selalu dalam range 0–25. Untuk huruf selain `z`, `index + 1` tidak akan mencapai 26 sehingga `% 26` tidak berpengaruh. Untuk `z` dengan `index = 25`, `25 + 1 = 26` dan `26 % 26 = 0` yang adalah index dari `'a'`.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔀 [← Kembali ke Part 6: Alternatif 1b](06-alternatif-1b.md)**
- **📊 [Lanjut ke Part 8: Ringkasan Algoritma →](08-ringkasan-algoritma.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
