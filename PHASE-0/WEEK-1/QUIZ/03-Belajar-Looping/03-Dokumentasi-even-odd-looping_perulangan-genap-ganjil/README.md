# 🔢 Mendeteksi Angka Genap dan Ganjil dengan Loop

> 📝 Menggunakan `for` loop dan operator modulo (`%`) untuk membedakan angka genap dan ganjil dari 1 sampai 100.

---

## 📋 Soal

Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1.
Di dalam perulangan, periksa setiap angka counter:

- Apabila angka counter adalah angka **genap**, tuliskan `GENAP`
- Apabila angka counter adalah angka **ganjil**, tuliskan `GANJIL`

---

## 💻 Kode Solusi

```javascript
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} adalah GENAP`);
  } else {
    console.log(`${i} adalah GANJIL`);
  }
}
```

---

## 🔍 Penjelasan

1. **`for (let i = 1; i <= 100; i++)`** — Loop dari 1 sampai 100, naik 1 setiap iterasi.
2. **`i % 2`** — Operator modulo mencari **sisa bagi**. Jika `i` dibagi 2 sisanya 0, berarti genap.
3. **`if (i % 2 === 0)`** — Cek apakah sisa bagi sama dengan 0 (genap).
4. **`else`** — Jika tidak genap, maka pasti ganjil.
5. **Template literal** (`` `${i} adalah GENAP` ``) — Menyisipkan nilai variabel ke dalam string.

### Trace Logic (Contoh Beberapa Iterasi)

| Iterasi | Nilai `i` | `i % 2` | Kondisi `=== 0` | Output            |
|---------|-----------|---------|-----------------|-------------------|
| Ke-1    | 1         | 1       | `false`         | `1 adalah GANJIL` |
| Ke-2    | 2         | 0       | `true`          | `2 adalah GENAP`  |
| Ke-3    | 3         | 1       | `false`         | `3 adalah GANJIL` |
| Ke-4    | 4         | 0       | `true`          | `4 adalah GENAP`  |

---

## 🧪 Contoh Output

```
1 adalah GANJIL
2 adalah GENAP
3 adalah GANJIL
4 adalah GENAP
...
99 adalah GANJIL
100 adalah GENAP
```

---

## 📚 Konsep yang Dipelajari

- ✅ **Operator Modulo (`%`)** — Mencari sisa pembagian, senjata utama untuk cek genap/ganjil
- ✅ **Kombinasi Loop + Kondisional** — Menggabungkan `for` loop dengan `if-else` di dalamnya
- ✅ **Hierarchy of Conditions** — Urutan `if - else if - else` sangat menentukan hasil; kondisi paling spesifik harus di atas
- ✅ **Template Literals** — Menggunakan backtick dan `${}` untuk menyisipkan variabel ke dalam string

---

## 💡 Catatan Tambahan

### Urutan Kondisi Itu Penting!
Jika kita menambahkan pengecekan **kelipatan 3** bersamaan dengan genap/ganjil, urutan `if` sangat berpengaruh:

```javascript
// ✅ Kondisi paling spesifik di atas
if (i % 3 === 0) {
  console.log(`${i} KELIPATAN 3`);
} else if (i % 2 === 0) {
  console.log(`${i} GENAP`);
} else {
  console.log(`${i} GANJIL`);
}
```

Angka **6** itu genap DAN kelipatan 3. Karena `if` berjalan **sekuensial dari atas ke bawah**, begitu satu kondisi terpenuhi, sisanya **diabaikan**. Maka taruh kondisi yang paling spesifik/prioritas di urutan paling atas.

---

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review
