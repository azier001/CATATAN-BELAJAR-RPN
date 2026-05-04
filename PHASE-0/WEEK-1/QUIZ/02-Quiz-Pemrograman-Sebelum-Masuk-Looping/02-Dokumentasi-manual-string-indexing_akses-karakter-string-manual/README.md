# 🔡 Manual String Indexing

> 📝 Belajar memecah kalimat menjadi kata-kata dengan mengakses karakter string satu per satu menggunakan index

---

## 📋 Soal

Pecah kalimat `'wow JavaScript is so cool'` dan tampilkan setiap kata di dalamnya. Gunakan **akses satu per satu karakter** dari string (bracket notation `[]`) dan operator `+` untuk membentuk setiap kata.

---

## 💻 Kode Solusi

```javascript
let word = 'wow JavaScript is so cool';
let exampleFirstWord = word[0] + word[1] + word[2];

console.log('First Word: ' + exampleFirstWord);

let secondWord =
  word[4] +
  word[5] +
  word[6] +
  word[7] +
  word[8] +
  word[9] +
  word[10] +
  word[11] +
  word[12] +
  word[13];

console.log('Second Word: ' + secondWord);

let thirdWord = word[15] + word[16];

console.log('Third Word: ' + thirdWord);

let fourthWord = word[18] + word[19];

console.log('Fourth Word: ' + fourthWord);

let fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('Fifth Word: ' + fifthWord);
```

---

## 🔍 Penjelasan

### Konsep Utama: Zero-based Indexing

Setiap karakter dalam string punya **nomor urut (index)** yang selalu dimulai dari **0**. Spasi juga dihitung sebagai karakter!

### Peta Index Lengkap

```
Karakter:  w   o   w  [ ]  J   a   v   a   S   c   r   i   p   t  [ ]  i   s  [ ]  s   o  [ ]  c   o   o   l
Index:     0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
```

### Alur Pengambilan Kata

| Kata | Variabel | Index | Keterangan |
|------|----------|-------|------------|
| `wow` | `exampleFirstWord` | 0–2 | 3 karakter, skip spasi di index 3 |
| `JavaScript` | `secondWord` | 4–13 | 10 karakter, skip spasi di index 14 |
| `is` | `thirdWord` | 15–16 | 2 karakter, skip spasi di index 17 |
| `so` | `fourthWord` | 18–19 | 2 karakter, skip spasi di index 20 |
| `cool` | `fifthWord` | 21–24 | 4 karakter (akhir string) |

Proses kerjanya seperti mengambil huruf satu-satu dari kotak lalu menyusunnya jadi kata:

```
word[4] + word[5] + word[6] + ... + word[13]
  'J'   +   'a'   +   'v'   + ... +   't'   =  "JavaScript"
```

---

## 🧪 Contoh Output

```
First Word: wow
Second Word: JavaScript
Third Word: is
Fourth Word: so
Fifth Word: cool
```

---

## 📚 Konsep yang Dipelajari

- ✅ **Zero-based Indexing** — penomoran karakter string dimulai dari 0, bukan 1
- ✅ **Bracket Notation (`[]`)** — cara mengakses karakter individual dalam string (`word[0]`)
- ✅ **String Concatenation (`+`)** — menggabungkan karakter demi karakter untuk membentuk kata utuh
- ✅ **Space is a Character** — spasi menempati index tersendiri dan harus dihitung saat memetakan posisi karakter

---

## 💡 Catatan Tambahan

- Cara manual ini memang terasa **panjang dan repetitif** — tapi justru itulah tujuannya: membangun pemahaman dasar bagaimana komputer memperlakukan string sebagai kumpulan karakter
- Nanti akan ada cara yang jauh lebih efisien seperti **looping** dan **`.split()`**, tapi tanpa paham dasar ini, kita tidak akan mengerti apa yang sebenarnya terjadi "di balik layar"
- Kunci ketelitian ada di menghitung index **spasi** — spasi berfungsi sebagai pemisah alami yang kita "lewati" saat mengambil kata

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review
