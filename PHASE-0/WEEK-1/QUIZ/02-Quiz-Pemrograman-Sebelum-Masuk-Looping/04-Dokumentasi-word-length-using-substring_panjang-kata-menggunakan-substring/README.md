# 📏 Word Length Using `substring()`

> 📝 Belajar mengambil kata dari kalimat menggunakan `substring()` sekaligus menghitung panjang setiap kata dengan `.length`

---

## 📋 Soal

Diberikan sebuah string kalimat, ambil setiap kata menggunakan `substring()` lalu tampilkan juga **panjang karakter** masing-masing kata.

```javascript
let word4 = 'wow JavaScript is so cool';
```

**Tugas:** Ekstrak kelima kata dan cetak dalam format:
```
First Word: wow, with length: 3
```

---

## 💻 Kode Solusi

```javascript
let word4 = 'wow JavaScript is so cool';

// Kata 1: "wow"
let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;
console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);

// Kata 2: "JavaScript"
let secondWord = word4.substring(4, 14);
let secondWordLength = secondWord.length;
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);

// Kata 3: "is"
let thirdWord = word4.substring(15, 17);
let thirdWordLength = thirdWord.length;
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordLength);

// Kata 4: "so"
let fourthWord = word4.substring(18, 20);
let fourthWordLength = fourthWord.length;
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);

// Kata 5: "cool"
let fifthWord = word4.substring(21);
let fifthWordLength = fifthWord.length;
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);
```

---

## 🔍 Penjelasan

### Pola Kerja per Kata

Setiap kata diproses dalam **3 langkah** yang sama:

```
[substring()] → [.length] → [console.log()]
  Potong kata      Hitung       Tampilkan
                  panjang       hasilnya
```

1. **Potong** kata dari kalimat menggunakan `substring(startIndex, endIndex)`
2. **Hitung** panjang hasil potongan menggunakan `.length`
3. **Gabungkan** string dan variabel di `console.log()` menggunakan operator `+`

### Peta Index Lengkap

```
Index:  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24
Huruf:  w  o  w     J  a  v  a  S  c  r  i  p  t     i  s     s  o     c  o  o  l
        ────────  ─  ───────────────────────────────  ─  ─────  ─  ─────  ─  ──────────
         wow     sp        JavaScript                sp   is   sp   so   sp   cool
```

### Step-by-Step Pemotongan + Panjang

| Kata | Kode | Start | End | Huruf yang Terambil | `.length` |
|------|------|:-----:|:---:|---------------------|:---------:|
| `"wow"` | `substring(0, 3)` | 0 | 3 | `w(0) o(1) w(2)` | **3** |
| `"JavaScript"` | `substring(4, 14)` | 4 | 14 | `J(4) a(5) v(6) a(7) S(8) c(9) r(10) i(11) p(12) t(13)` | **10** |
| `"is"` | `substring(15, 17)` | 15 | 17 | `i(15) s(16)` | **2** |
| `"so"` | `substring(18, 20)` | 18 | 20 | `s(18) o(19)` | **2** |
| `"cool"` | `substring(21)` | 21 | — | `c(21) o(22) o(23) l(24)` | **4** |

---

## 🧪 Contoh Output

```
First Word: wow, with length: 3
Second Word: JavaScript, with length: 10
Third Word: is, with length: 2
Fourth Word: so, with length: 2
Fifth Word: cool, with length: 4
```

---

## 📚 Konsep yang Dipelajari

- ✅ **`substring(startIndex, endIndex)`** — memotong string; `endIndex` bersifat *exclusive* (tidak ikut terambil)
- ✅ **`endIndex` opsional** — jika tidak ditulis, `substring()` mengambil dari `startIndex` sampai akhir string
- ✅ **`.length`** — property untuk menghitung jumlah karakter dalam string
- ✅ **String concatenation** — menggabungkan teks statis dan variabel dengan operator `+`
- ✅ **Spasi dihitung sebagai karakter** — spasi punya index sendiri dan ikut dihitung oleh `.length`

---

## 💡 Catatan Tambahan

### Hubungan dengan Soal Sebelumnya (Soal 3)

Soal ini adalah **pengembangan** dari soal 3. Perbedaannya:

| Aspek | Soal 3 | Soal 4 (ini) |
|-------|--------|-------------|
| Potong kata | ✅ `substring()` | ✅ `substring()` |
| Hitung panjang | ❌ Tidak ada | ✅ Tambah `.length` |
| Output | Nama kata saja | Nama kata + panjangnya |

### Pro Tip: `substring()` Tanpa `endIndex`

Untuk kata **terakhir** di ujung string, cukup tulis `startIndex` saja:

```javascript
// Cara lengkap:
word4.substring(21, 25); // "cool"

// Cara singkat (lebih efisien):
word4.substring(21);     // "cool" — otomatis sampai habis!
```

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review
