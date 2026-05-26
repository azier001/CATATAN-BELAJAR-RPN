# 📚 Part 6: Alternatif 1b — String Alphabet + `if` Hardcode

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║     🔀 PART 6: ALTERNATIF 1b — STRING ALPHABET + if HARDCODE 🔀         ║
║                                                                          ║
║              Pendekatan dengan String Alphabet sebagai Referensi         ║
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
- ✅ Memahami pendekatan string alphabet sebagai referensi urutan huruf
- ✅ Mengerti penggunaan `indexOf()` untuk mencari posisi huruf
- ✅ Tahu perbedaan pendekatan ini dengan Alternatif 1

---

## 💡 Konsep

Alih-alih menggunakan ASCII code, kita gunakan **string `alphabet`** sebagai referensi urutan huruf. Posisi huruf dicari dengan `indexOf()`, lalu digeser dengan `index + 1`. Untuk kasus `z`, kita cek `index === 25` (posisi terakhir) secara eksplisit.

Pendekatan ini tidak memerlukan pemahaman ASCII sama sekali — cukup tahu bahwa `a` ada di index 0, `b` di index 1, sampai `z` di index 25.

---

## 📋 Kode

```javascript
const shiftWord = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''

  for (const currentChar of word) {
    const index = alphabet.indexOf(currentChar)

    if (index === -1) {
      result += currentChar        // bukan huruf, kembalikan apa adanya
    } else if (index === 25) {
      result += 'a'                // huruf z (index 25) → a
    } else {
      result += alphabet[index + 1] // huruf lainnya, ambil huruf berikutnya
    }
  }

  return result
}
```

---

## 🧪 Test Cases

```javascript
console.log(shiftWord('wow'))         // 'xpx'        ✅
console.log(shiftWord('keren'))       // 'lfsfo'      ✅
console.log(shiftWord('semangat'))    // 'tfnbohbu'   ✅
console.log(shiftWord('z'))           // 'a'          ✅
console.log(shiftWord('zzz'))         // 'aaa'        ✅
console.log(shiftWord('hello world')) // 'ifmmp xpsme'✅
console.log(shiftWord('abc123'))      // 'bcd123'     ✅
console.log(shiftWord('hi!'))         // 'ij!'        ✅
```

---

## 📊 Ringkasan Algoritma

**Konsep Inti:**
```
Gunakan string alphabet sebagai referensi urutan huruf
Cari posisi huruf dengan indexOf(), hasilnya disimpan ke index
Gunakan if-else untuk handle 3 kondisi berbeda
Hardcode pengecekan z (index 25) dan hasil 'a' secara eksplisit
```

**Step-by-Step (Detail):**

1. **Kode ini hanya terdiri dari 1 fungsi `shiftWord`**
   - Semua proses dilakukan di dalam fungsi ini langsung
   - Tidak menggunakan ASCII code, melainkan string `alphabet` sebagai referensi

2. **`shiftWord` menerima `word`, menyiapkan string referensi `alphabet` dan `result` sebagai string kosong**
   - `alphabet = 'abcdefghijklmnopqrstuvwxyz'`
   - `result` akan menampung hasil huruf yang sudah digeser satu per satu

3. **`for...of` loop memproses setiap `currentChar` dalam `word` satu per satu**
   - `'wow'` → iterasi pertama `currentChar = 'w'`, kedua `currentChar = 'o'`, ketiga `currentChar = 'w'`

4. **Setiap `currentChar` dicari posisinya di `alphabet` dengan `indexOf()` dan disimpan ke `index`**
   - `alphabet.indexOf('w')` → `index = 22`

5. **Kondisi pertama — cek apakah `currentChar` bukan huruf a–z**
   - `indexOf()` mengembalikan `-1` kalau `currentChar` tidak ditemukan di `alphabet`
   - Jika `index === -1` → bukan huruf (spasi, angka, tanda baca)
   - Langsung `result += currentChar` apa adanya tanpa digeser

6. **Kondisi kedua — cek apakah `currentChar` adalah `'z'`**
   - `'z'` adalah huruf terakhir di `alphabet`, posisinya di index `25`
   - Jika `index === 25` → berarti `currentChar` adalah `'z'`
   - Karena `'z'` harus balik ke `'a'`, langsung `result += 'a'` secara hardcode

7. **Kondisi ketiga — huruf selain `'z'`**
   - Kalau bukan non-huruf dan bukan `'z'`, berarti huruf biasa
   - Ambil huruf berikutnya dari `alphabet` dengan `alphabet[index + 1]`
   - Lalu tampung ke `result += alphabet[index + 1]`
   - Contoh: `'w'` → `index = 22` → `alphabet[23]` → `'x'` → `result += 'x'`

8. **Setelah loop selesai, `result` dikembalikan sebagai output**
   - `result = 'xpx'` → `return 'xpx'` ✅

**Kompleksitas:**
- Waktu: **O(n × 26)** — setiap karakter dicari dengan `indexOf` yang scan sampai 26 huruf
- Ruang: **O(n)** — hasil string sepanjang input

---

## ⚠️ Pitfalls

**1. ❌ Menggunakan `currentChar === 'z'` bukan `index === 25`**
```javascript
// ⚠️ KURANG KONSISTEN — padahal sudah punya variabel index
} else if (currentChar === 'z') {
  result += 'a'

// ✅ LEBIH KONSISTEN — pakai index yang sudah ada
} else if (index === 25) {
  result += 'a'
}
```

**2. ❌ Menggunakan for loop dengan index `i` padahal tidak diperlukan**
```javascript
// ❌ KURANG IDIOMATIK
for (let i = 0; i < word.length; i++) {
  const currentChar = word[i]

// ✅ LEBIH IDIOMATIK
for (const currentChar of word) {
```

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa kompleksitasnya O(n × 26) bukan O(n)?</strong></summary>

Karena `indexOf()` melakukan pencarian linear di dalam string `alphabet` yang panjangnya 26. Untuk setiap karakter di `word`, `indexOf` bisa melakukan hingga 26 perbandingan. Meski dalam praktik cukup cepat karena 26 adalah konstanta kecil, secara teori lebih lambat dari pendekatan ASCII yang langsung O(n).

</details>

<details>
<summary><strong>❓ Kapan lebih baik pakai pendekatan ini dibanding ASCII?</strong></summary>

Ketika kamu atau tim belum familiar dengan konsep ASCII. Pendekatan string alphabet lebih intuitif karena kita bekerja langsung dengan huruf, bukan angka. Untuk skala kecil seperti soal ini, perbedaan performa tidak signifikan.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔀 [← Kembali ke Part 5: Alternatif 1](05-alternatif-1.md)**
- **🔀 [Lanjut ke Part 7: Alternatif 2 →](07-alternatif-2.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
