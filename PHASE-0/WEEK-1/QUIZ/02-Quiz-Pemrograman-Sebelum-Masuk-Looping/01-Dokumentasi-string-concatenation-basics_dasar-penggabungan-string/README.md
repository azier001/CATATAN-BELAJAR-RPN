# 🔗 Let's Form a Sentence

> 📝 Belajar menggabungkan string secara bertahap menggunakan operator `+=`

---

## 📋 Soal

Disediakan variabel `word` berisi `'JavaScript'` beserta 6 variabel lain (`second` s/d `seventh`). Tugasnya:
- Tambahkan nilai `word` **satu per satu** dengan variabel lain menggunakan operator `+`
- Tambahkan **spasi** di antara setiap kata
- Tampilkan hasilnya di console
- **Tidak boleh** membuat variabel baru

---

## 💻 Kode Solusi

```javascript
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

word += ' ' + second;
word += ' ' + third;
word += ' ' + fourth;
word += ' ' + fifth;
word += ' ' + sixth;
word += ' ' + seventh;

console.log(word);
```

---

## 🔍 Penjelasan

Kunci dari soal ini ada di kalimat **"Tambahkan nilai `word` satu per satu"** — artinya kita memperbarui isi variabel `word` secara bertahap, bukan langsung menyambung semuanya sekaligus.

### Alur Step-by-Step

Bayangkan variabel `word` seperti **gerbong kereta** yang terus ditambah gerbong baru di belakangnya:

| Step | Kode | Nilai `word` |
|------|------|-------------|
| Awal | — | `"JavaScript"` |
| 1 | `word += ' ' + second` | `"JavaScript is"` |
| 2 | `word += ' ' + third` | `"JavaScript is awesome"` |
| 3 | `word += ' ' + fourth` | `"JavaScript is awesome and"` |
| 4 | `word += ' ' + fifth` | `"JavaScript is awesome and I"` |
| 5 | `word += ' ' + sixth` | `"JavaScript is awesome and I love"` |
| 6 | `word += ' ' + seventh` | `"JavaScript is awesome and I love it!"` |

### Mengapa `+=` dan bukan langsung di `console.log`?

Pendekatan awal yang terpikirkan biasanya langsung menyambung semua di `console.log`:

```javascript
// ❌ Pendekatan awal — hasilnya benar, tapi tidak sesuai instruksi
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);
```

Pendekatan ini **tidak memperbarui** isi variabel `word`. Soal meminta kita mengubah `word` secara bertahap, sehingga operator `+=` adalah cara yang tepat.

---

## 🧪 Contoh Output

```
JavaScript is awesome and I love it!
```

---

## 📚 Konsep yang Dipelajari

- ✅ **String Concatenation (`+`)** — menyambung dua atau lebih string menjadi satu
- ✅ **Addition Assignment (`+=`)** — shorthand untuk `word = word + ...`, cara singkat memperbarui nilai variabel
- ✅ **Mutable Variable (`let`)** — variabel yang dideklarasikan dengan `let` bisa diubah-ubah nilainya
- ✅ **Incremental Update** — membangun hasil akhir secara bertahap, baris demi baris

---

## 💡 Catatan Tambahan

- `+=` bukan hanya untuk angka! Operator ini juga bekerja untuk string concatenation
- Selalu ingat menambahkan `' '` (spasi) sebagai pemisah antar kata
- Pendekatan step-by-step ini melatih kita memahami bahwa **variabel itu dinamis** — nilainya bisa berubah berkali-kali selama program berjalan

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review
