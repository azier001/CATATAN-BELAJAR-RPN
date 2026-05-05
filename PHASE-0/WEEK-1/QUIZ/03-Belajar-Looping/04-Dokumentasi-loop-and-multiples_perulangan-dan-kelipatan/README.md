# 🔢 Perulangan dan Kelipatan (Loop & Multiples)

> 📝 Membuat 3 perulangan dengan custom increment dan pengecekan kelipatan menggunakan modulo

---

## 📋 Soal

Buatlah 3 perulangan dari 1 - 100 dengan aturan:

| Perulangan | Pertambahan | Cek Kelipatan |
|------------|-------------|---------------|
| 1️⃣ Pertama  | +2          | Kelipatan 3   |
| 2️⃣ Kedua    | +5          | Kelipatan 6   |
| 3️⃣ Ketiga   | +9          | Kelipatan 10  |

- Jika **bukan** kelipatan → tidak cetak apa-apa
- Jika **kelipatan** → cetak `"[angka] kelipatan [n]"`

---

## 💻 Kode Solusi

```javascript
// Perulangan 1: Pertambahan 2, Cek Kelipatan 3
for (let i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log(`${i} kelipatan 3`);
  }
}

console.log('--------------');

// Perulangan 2: Pertambahan 5, Cek Kelipatan 6
for (let i = 1; i <= 100; i += 5) {
  if (i % 6 === 0) {
    console.log(`${i} kelipatan 6`);
  }
}

console.log('--------------');

// Perulangan 3: Pertambahan 9, Cek Kelipatan 10
for (let i = 1; i <= 100; i += 9) {
  if (i % 10 === 0) {
    console.log(`${i} kelipatan 10`);
  }
}
```

---

## 🔍 Penjelasan

### 1. Custom Increment (`i += n`)

Biasanya kita pakai `i++` (tambah 1). Di soal ini, kita mengubah langkah lompatannya:

| Sintaks  | Sama Dengan  | Hasil Deret                  |
|----------|--------------|------------------------------|
| `i += 2` | `i = i + 2` | 1, 3, 5, 7, 9, 11, 13...    |
| `i += 5` | `i = i + 5` | 1, 6, 11, 16, 21, 26, 31... |
| `i += 9` | `i = i + 9` | 1, 10, 19, 28, 37, 46...    |

### 2. Pengecekan Kelipatan dengan Modulo (`%`)

Operator `%` menghasilkan **sisa pembagian**. Jika sisa = 0, berarti angka tersebut habis dibagi (kelipatan):

```javascript
9 % 3 === 0   // true  → 9 adalah kelipatan 3
10 % 3 === 0  // false → 10 bukan kelipatan 3 (sisa 1)
```

### 3. Filtering dengan `if`

`console.log` diletakkan **di dalam** `if`, sehingga hanya angka yang memenuhi syarat kelipatan yang tercetak. Angka lainnya di-*skip* tanpa output apa pun.

---

## 🧪 Contoh Output

```
3 kelipatan 3
9 kelipatan 3
15 kelipatan 3
...
99 kelipatan 3
--------------
6 kelipatan 6
36 kelipatan 6
66 kelipatan 6
96 kelipatan 6
--------------
10 kelipatan 10
100 kelipatan 10
```

**Statistik output:**

| Perulangan        | Jumlah Tercetak |
|-------------------|-----------------|
| Kelipatan 3 (+2)  | 17 angka        |
| Kelipatan 6 (+5)  | 4 angka         |
| Kelipatan 10 (+9) | 2 angka         |

---

## 📚 Konsep yang Dipelajari

- ✅ **Custom Increment** — mengatur langkah perulangan dengan `i += n` (bukan hanya `i++`)
- ✅ **Operator Modulo (`%`)** — mengecek sisa bagi untuk menentukan kelipatan
- ✅ **Conditional Filtering** — menyaring output dengan `if` di dalam loop
- ✅ **Template Literals** — format string dinamis dengan backtick dan `${}`

---

## 💡 Catatan Tambahan

### ⚠️ "The Skip Trap" — Jebakan Lompatan

Insight penting: **semakin besar langkah lompatan, semakin banyak angka yang dilewati.**

Contoh pada perulangan kedua (`i += 5`, cek kelipatan 6):

```
i = 1  → skip
i = 6  → ✅ kelipatan 6!
i = 11 → skip
i = 16 → skip
...
i = 36 → ✅ kelipatan 6!
```

Angka **12, 18, 24, 30** adalah kelipatan 6, tapi **tidak pernah tercetak** karena counter melompatinya! Bayangkan menaiki tangga dan melompati 5 anak tangga sekaligus — meskipun ada "hadiah" di tangga ke-12, kakimu langsung dari tangga 11 ke 16.

**Pelajaran:**
- `i += n` membuat loop lebih **efisien** (lebih sedikit iterasi)
- Tapi berisiko **melewatkan data** jika kriteria pengecekan tidak selaras dengan langkah lompatan
- Gunakan `i++` jika butuh mengecek **setiap angka tanpa terkecuali**

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review
