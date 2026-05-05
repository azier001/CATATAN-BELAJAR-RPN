# 📚 Dokumentasi Perulangan & Kelipatan JavaScript

> **Dokumentasi Pribadi** - Belajar JavaScript untuk Pemula  
> *Topik: Perulangan (Loop) dan Pengecekan Kelipatan*

---

## 📑 Daftar Isi

- [Tujuan Pembelajaran](#tujuan-pembelajaran)
- [Konsep Dasar](#konsep-dasar)
- [Memahami Soal](#memahami-soal)
- [Proses Belajar](#proses-belajar)
  - [Langkah 1: Testing Loop Sederhana](#langkah-1-testing-loop-sederhana)
  - [Langkah 2: Menyesuaikan dengan Kriteria](#langkah-2-menyesuaikan-dengan-kriteria)
  - [Langkah 3: Solusi Lengkap](#langkah-3-solusi-lengkap)
- [Penjelasan Kode](#penjelasan-kode)
- [Output yang Dihasilkan](#output-yang-dihasilkan)
- [Kesimpulan](#kesimpulan)

---

<a name="tujuan-pembelajaran"></a>
## 🎯 Tujuan Pembelajaran

Membuat 3 perulangan dari 1-100 dengan:
- ✅ Pertambahan counter yang berbeda (2, 5, dan 9)
- ✅ Pengecekan kelipatan (3, 6, dan 10)
- ✅ Menampilkan output hanya untuk angka yang memenuhi syarat

---

<a name="konsep-dasar"></a>
## 📖 Konsep Dasar

### 🔄 Perulangan (Loop)
Loop digunakan untuk mengulang kode beberapa kali tanpa menulis ulang.

```javascript
for(let i = 1; i <= 10; i++) {
  // kode yang diulang
}
```

**Penjelasan:**
- `let i = 1` → mulai dari 1
- `i <= 10` → berhenti saat i lebih dari 10
- `i++` → tambah i sebesar 1 setiap loop

### ➗ Operator Modulo (%)
Digunakan untuk mengecek sisa pembagian.

```javascript
9 % 3 === 0  // true (9 habis dibagi 3, sisa 0)
10 % 3 === 0 // false (10 dibagi 3 sisa 1)
```

**Cara cek kelipatan:**
- Jika `angka % pembagi === 0` → angka adalah kelipatan dari pembagi

---

<a name="memahami-soal"></a>
## 📝 Memahami Soal

**Soal:**
> Buatlah 3 perulangan dari 1-100 dengan pertambahan 2, 5, dan 9.  
> Periksa apakah counter adalah kelipatan 3, 6, dan 10.  
> Tampilkan hanya yang kelipatan saja.

**Breakdown:**

| Perulangan | Pertambahan | Cek Kelipatan | Contoh Angka yang Ditampilkan |
|------------|-------------|---------------|-------------------------------|
| 1️⃣ Pertama | +2 | Kelipatan 3 | 3, 9, 15, 21, 27... |
| 2️⃣ Kedua | +5 | Kelipatan 6 | 6, 36, 66, 96 |
| 3️⃣ Ketiga | +9 | Kelipatan 10 | 10, 100 |

---

<a name="proses-belajar"></a>
## 🚀 Proses Belajar

<a name="langkah-1-testing-loop-sederhana"></a>
### 📍 Langkah 1: Testing Loop Sederhana (1-10)

**Tujuan:** Memastikan logika dasar sudah benar sebelum ke angka besar.

```javascript
for(let i = 1; i <= 10; i++) {
  if(i % 3 === 0) {
    console.log(`${i} kelipatan 3`)
  }
}
```

**Output:**
```
3 kelipatan 3
6 kelipatan 3
9 kelipatan 3
```

✅ **Status:** Logika sudah benar!

---

<a name="langkah-2-menyesuaikan-dengan-kriteria"></a>
### 📍 Langkah 2: Menyesuaikan dengan Kriteria

**Yang diubah:**
- Batas loop: `10` → `100`
- Pertambahan: `i++` → `i += 2`

```javascript
for(let i = 1; i <= 100; i += 2) {
  if(i % 3 === 0) {
    console.log(`${i} kelipatan 3`)
  }
}
```

**Penjelasan:**
- `i += 2` → angka yang dihasilkan: 1, 3, 5, 7, 9, 11, 13, 15...
- Yang tampil hanya kelipatan 3: 3, 9, 15, 21, 27...

✅ **Status:** Perulangan pertama selesai!

---

<a name="langkah-3-solusi-lengkap"></a>
### 📍 Langkah 3: Solusi Lengkap (3 Perulangan)

```javascript
// Perulangan 1: Pertambahan 2, Cek Kelipatan 3
for(let i = 1; i <= 100; i += 2) {
  if(i % 3 === 0) {
    console.log(`${i} kelipatan 3`)
  }
}

// Perulangan 2: Pertambahan 5, Cek Kelipatan 6
for(let i = 1; i <= 100; i += 5) {
  if(i % 6 === 0) {
    console.log(`${i} kelipatan 6`)
  }
}

// Perulangan 3: Pertambahan 9, Cek Kelipatan 10
for(let i = 1; i <= 100; i += 9) {
  if(i % 10 === 0) {
    console.log(`${i} kelipatan 10`)
  }
}
```

✅ **Status:** Semua kriteria terpenuhi!

---

<a name="penjelasan-kode"></a>
## 💡 Penjelasan Kode

### 🔸 Perulangan 1

```javascript
for(let i = 1; i <= 100; i += 2) {
  if(i % 3 === 0) {
    console.log(`${i} kelipatan 3`)
  }
}
```

| Bagian Kode | Fungsi |
|-------------|--------|
| `i += 2` | Pertambahan 2 → menghasilkan: 1, 3, 5, 7, 9, 11... |
| `i % 3 === 0` | Cek apakah habis dibagi 3 |
| `console.log()` | Tampilkan jika memenuhi syarat |

**Angka yang dihasilkan loop:** 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21...  
**Yang ditampilkan (kelipatan 3):** 3, 9, 15, 21, 27, 33, 39...

---

### 🔸 Perulangan 2

```javascript
for(let i = 1; i <= 100; i += 5) {
  if(i % 6 === 0) {
    console.log(`${i} kelipatan 6`)
  }
}
```

| Bagian Kode | Fungsi |
|-------------|--------|
| `i += 5` | Pertambahan 5 → menghasilkan: 1, 6, 11, 16, 21, 26... |
| `i % 6 === 0` | Cek apakah habis dibagi 6 |

**Angka yang dihasilkan loop:** 1, 6, 11, 16, 21, 26, 31, 36, 41, 46...  
**Yang ditampilkan (kelipatan 6):** 6, 36, 66, 96

---

### 🔸 Perulangan 3

```javascript
for(let i = 1; i <= 100; i += 9) {
  if(i % 10 === 0) {
    console.log(`${i} kelipatan 10`)
  }
}
```

| Bagian Kode | Fungsi |
|-------------|--------|
| `i += 9` | Pertambahan 9 → menghasilkan: 1, 10, 19, 28, 37... |
| `i % 10 === 0` | Cek apakah habis dibagi 10 |

**Angka yang dihasilkan loop:** 1, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100  
**Yang ditampilkan (kelipatan 10):** 10, 100

---

<a name="output-yang-dihasilkan"></a>
## 📊 Output yang Dihasilkan

### ✨ Output Lengkap

```
3 kelipatan 3
9 kelipatan 3
15 kelipatan 3
21 kelipatan 3
27 kelipatan 3
33 kelipatan 3
39 kelipatan 3
45 kelipatan 3
51 kelipatan 3
57 kelipatan 3
63 kelipatan 3
69 kelipatan 3
75 kelipatan 3
81 kelipatan 3
87 kelipatan 3
93 kelipatan 3
99 kelipatan 3
6 kelipatan 6
36 kelipatan 6
66 kelipatan 6
96 kelipatan 6
10 kelipatan 10
100 kelipatan 10
```

### 📈 Statistik Output

| Perulangan | Jumlah Output |
|------------|---------------|
| Perulangan 1 (kelipatan 3) | 17 angka |
| Perulangan 2 (kelipatan 6) | 4 angka |
| Perulangan 3 (kelipatan 10) | 2 angka |
| **Total** | **23 angka** |

---

<a name="kesimpulan"></a>
## 🎓 Kesimpulan

### ✅ Yang Sudah Dipelajari:

1. **Perulangan dengan pertambahan khusus** (`i += 2`, `i += 5`, `i += 9`)
2. **Operator modulo** untuk cek kelipatan (`%`)
3. **Conditional statement** untuk filter output (`if`)
4. **Template literal** untuk format string (`` `${i} kelipatan 3` ``)

### 💪 Kunci Sukses:

- 🧪 **Testing dulu dengan data kecil** (1-10) sebelum ke data besar (1-100)
- 🔍 **Pahami pola** sebelum menulis kode
- ✍️ **Tulis kode bertahap**, jangan langsung kompleks

### 🚀 Tips Belajar:

> "Belajar coding seperti belajar naik sepeda - mulai pelan-pelan, jatuh itu wajar, yang penting terus mencoba!" 💪

---

**📅 Dibuat:** Januari 2026  
**🏷️ Tag:** JavaScript, Loop, Modulo, Beginner  
**⭐ Level:** Pemula
