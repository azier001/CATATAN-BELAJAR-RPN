# ✂️ Extracting Words with `substring()`

> 📝 Belajar mengambil potongan kata dari sebuah kalimat menggunakan method `substring()` — upgrade dari teknik manual indexing `[]`

---

## 📋 Soal

Diberikan sebuah string kalimat, ambil setiap kata secara terpisah menggunakan method `substring()`.

```javascript
let word3 = 'wow JavaScript is so cool';
```

**Tugas:** Ekstrak kelima kata (`wow`, `JavaScript`, `is`, `so`, `cool`) menggunakan `substring()` dan cetak masing-masing ke console.

---

## 💻 Kode Solusi

```javascript
let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);

console.log('First Word: ' + exampleFirstWord3);

let secondWord = word3.substring(4, 14);

console.log('Second Word: ' + secondWord);

let thirdWord = word3.substring(15, 17);

console.log('Third Word: ' + thirdWord);

let fourthWord = word3.substring(18, 20);

console.log('Fourth Word: ' + fourthWord);

let fifthWord = word3.substring(21);

console.log('Fifth Word: ' + fifthWord);
```

---

## 🔍 Penjelasan

### Analogi: Menggunting Pita

Bayangkan string sebagai **pita panjang** berisi tulisan. `substring()` adalah gunting yang memotong pita tersebut di dua titik:
- **`startIndex`** → Titik potong awal (**termasuk** huruf di titik ini)
- **`endIndex`** → Titik potong akhir (**tidak termasuk** huruf di titik ini)

### Peta Index Lengkap

```
Index:  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24
Huruf:  w  o  w     J  a  v  a  S  c  r  i  p  t     i  s     s  o     c  o  o  l
```

### Step-by-Step Pemotongan

| Kata | Kode | Start | End | Huruf yang Terambil |
|------|------|:-----:|:---:|---------------------|
| `"wow"` | `substring(0, 3)` | 0 | 3 | `w(0) o(1) w(2)` — berhenti **sebelum** spasi di index 3 |
| `"JavaScript"` | `substring(4, 14)` | 4 | 14 | `J(4) a(5) v(6) a(7) S(8) c(9) r(10) i(11) p(12) t(13)` |
| `"is"` | `substring(15, 17)` | 15 | 17 | `i(15) s(16)` |
| `"so"` | `substring(18, 20)` | 18 | 20 | `s(18) o(19)` |
| `"cool"` | `substring(21)` | 21 | — | `c(21) o(22) o(23) l(24)` — tanpa `endIndex`, ambil sampai habis! |

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

- ✅ **`substring(startIndex, endIndex)`** — method bawaan untuk memotong string berdasarkan range index
- ✅ **Inclusive-Exclusive Rule** — `startIndex` ikut terambil, `endIndex` **tidak** (dia jadi pembatas saja)
- ✅ **Spasi dihitung sebagai karakter** — spasi punya index sendiri, jangan sampai terlewat saat menghitung
- ✅ **`endIndex` opsional** — jika tidak ditulis, `substring()` otomatis mengambil dari `startIndex` sampai akhir string

---

## 💡 Catatan Tambahan

### Perbandingan dengan Teknik Sebelumnya (Manual Indexing)

| Aspek | Manual Indexing `[]` | `substring()` |
|-------|---------------------|---------------|
| Cara kerja | Ambil **1 karakter** per akses | Ambil **1 blok kata** sekaligus |
| Contoh | `word[0] + word[1] + word[2]` | `word.substring(0, 3)` |
| Efisiensi | Butuh banyak operasi `+` | Cukup 1 pemanggilan method |
| Cocok untuk | Memahami struktur internal string | Ekstraksi data yang lebih praktis |

### Pro Tip: Shortcut Kata Terakhir

Untuk mengambil kata di ujung string, cukup tulis `startIndex` saja tanpa `endIndex`:

```javascript
// Daripada menghitung index terakhir:
word3.substring(21, 25); // "cool"

// Cukup tulis startIndex saja:
word3.substring(21);     // "cool" — otomatis ambil sampai habis!
```

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review
