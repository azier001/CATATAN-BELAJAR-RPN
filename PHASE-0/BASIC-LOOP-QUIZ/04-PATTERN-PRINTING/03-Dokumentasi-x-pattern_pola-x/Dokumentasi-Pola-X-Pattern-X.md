# 📚 Dokumentasi Algoritma: Pola X

## 📑 Daftar Isi
- [Pengenalan](#pengenalan)
- [Konsep Dasar](#konsep-dasar)
- [Formula Kunci](#formula-kunci)
  - [Diagonal Utama](#diagonal-utama)
  - [Diagonal Terbalik](#diagonal-terbalik)
- [Langkah-langkah Algoritma](#langkah-langkah-algoritma)
- [Catatan Penting](#catatan-penting)
- [Contoh Visual](#contoh-visual)
- [Tips Saat Ujian](#tips-saat-ujian)
- [Kode Lengkap](#kode-lengkap)

---

<a name="pengenalan"></a>
## 🎯 Pengenalan

Dokumentasi ini berisi algoritma untuk membuat **pola X** menggunakan bintang (`*`). Pola ini dibentuk dengan mencetak bintang pada **diagonal utama** dan **diagonal terbalik** dalam grid persegi.

**Contoh output untuk num = 5:**
```
*   *
 * * 
  *  
 * * 
*   *
```

---

<a name="konsep-dasar"></a>
## 💡 Konsep Dasar

### Apa itu Grid Persegi?
Grid persegi adalah susunan baris dan kolom yang membentuk kotak. Untuk `num = 5`, kita punya grid **5×5** (5 baris, 5 kolom).

### Sistem Indeks Zero-Based
> ⚠️ **Penting!** JavaScript menggunakan indeks yang dimulai dari **0**, bukan 1.

Untuk grid 5×5:
- **Baris (row)**: 0, 1, 2, 3, 4
- **Kolom (col)**: 0, 1, 2, 3, 4
- **Maksimum indeks**: `num - 1` (yaitu 4)

---

<a name="formula-kunci"></a>
## 🔑 Formula Kunci

Ini adalah **bagian terpenting** yang harus diingat! Formula ini menentukan kapan harus cetak bintang (`*`).

<a name="diagonal-utama"></a>
### 📐 Diagonal Utama
**Formula:** `row === col`

**Penjelasan:**  
Diagonal utama adalah garis dari **kiri atas ke kanan bawah**. Bintang dicetak ketika nomor baris sama dengan nomor kolom.

**Contoh posisi:**
```
(0,0) → 0 === 0 ✓
(1,1) → 1 === 1 ✓
(2,2) → 2 === 2 ✓
(3,3) → 3 === 3 ✓
(4,4) → 4 === 4 ✓
```

<a name="diagonal-terbalik"></a>
### 📐 Diagonal Terbalik
**Formula:** `row + col === num - 1`

**Penjelasan:**  
Diagonal terbalik adalah garis dari **kanan atas ke kiri bawah**. Bintang dicetak ketika jumlah row + col sama dengan `num - 1`.

**Untuk num = 5, maka num - 1 = 4**

**Contoh posisi:**
```
(0,4) → 0 + 4 = 4 ✓
(1,3) → 1 + 3 = 4 ✓
(2,2) → 2 + 2 = 4 ✓
(3,1) → 3 + 1 = 4 ✓
(4,0) → 4 + 0 = 4 ✓
```

> 💡 **Tips:** Titik tengah X (2,2) selalu memenuhi KEDUA formula!

---

<a name="langkah-langkah-algoritma"></a>
## 📝 Langkah-langkah Algoritma

### 1️⃣ Buat variabel untuk menyimpan pattern
```
let pattern = '';
```

### 2️⃣ Loop untuk baris (row)
Loop dari `0` sampai `num - 1`
```
for (let row = 0; row < num; row++)
```

### 3️⃣ Loop untuk kolom (col) di dalam loop baris
Loop dari `0` sampai `num - 1`
```
for (let col = 0; col < num; col++)
```

### 4️⃣ Cek kondisi: Apakah posisi ini perlu bintang?
Gunakan **formula kunci**:
- Jika `row === col` **ATAU** `row + col === num - 1` → cetak `*`
- Jika tidak → cetak spasi ` `
```
if (row === col || row + col === num - 1) {
  pattern += '*'
} else {
  pattern += ' '
}
```

### 5️⃣ Setelah selesai satu baris, tambahkan newline
```
pattern += '\n'
```

### 6️⃣ Return hasil pattern
```
return pattern;
```

---

<a name="catatan-penting"></a>
## ⚠️ Catatan Penting

### ✅ Yang HARUS Diingat:
1. **Selalu gunakan zero-based index** (mulai dari 0)
2. **Maksimum indeks = num - 1** (bukan num!)
3. **Gunakan nama variabel yang jelas**: `row` dan `col` (bukan `i` dan `j`)
4. **Operator OR**: Gunakan `||` untuk gabungkan kedua kondisi diagonal

### ❌ Kesalahan Umum:
1. ❌ Mulai loop dari 1 → gunakan 0
2. ❌ Loop sampai `<= num` → gunakan `< num`
3. ❌ Formula `row + col === num` → yang benar `num - 1`
4. ❌ Lupa tambah newline di akhir baris

---

<a name="contoh-visual"></a>
## 👁️ Contoh Visual

### Grid 5×5 dengan Indeks:
```
     col: 0   1   2   3   4
row 0:   *   .   .   .   *
row 1:   .   *   .   *   .
row 2:   .   .   *   .   .
row 3:   .   *   .   *   .
row 4:   *   .   .   .   *
```

### Penjelasan per baris:
- **Baris 0**: (0,0) diagonal utama ✓, (0,4) diagonal terbalik ✓
- **Baris 1**: (1,1) diagonal utama ✓, (1,3) diagonal terbalik ✓
- **Baris 2**: (2,2) kedua diagonal ✓✓ (titik tengah!)
- **Baris 3**: (3,1) diagonal terbalik ✓, (3,3) diagonal utama ✓
- **Baris 4**: (4,0) diagonal terbalik ✓, (4,4) diagonal utama ✓

---

<a name="tips-saat-ujian"></a>
## 🎓 Tips Saat Ujian

### 📌 Cheat Sheet Singkat:
```
✓ Loop: for (row = 0; row < num; row++)
✓ Loop: for (col = 0; col < num; col++)
✓ Kondisi: if (row === col || row + col === num - 1)
✓ Cetak: * atau spasi
✓ Akhir baris: tambah \n
```

### 🧠 Cara Cepat Ingat Formula:
- **Diagonal utama**: "row SAMA dengan col" → `row === col`
- **Diagonal terbalik**: "jumlah keduanya TETAP" → `row + col === (angka tetap)`
- Angka tetap itu = `num - 1`

### 🔍 Cara Debug:
Jika pola salah, cek:
1. Apakah loop mulai dari 0?
2. Apakah loop sampai `< num` (bukan `<= num`)?
3. Apakah formula diagonal terbalik pakai `num - 1`?
4. Apakah sudah tambah newline setiap akhir baris?


---

<a name="kode-lengkap"></a>
## 💻 Kode Lengkap

### Versi Final (Clean Code):
```javascript
function polaX(num) {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
      if (row === col || row + col === num - 1) {
        pattern += '*';
      } else {
        pattern += ' ';
      }
    }

    pattern += '\n';
  }

  return pattern;
}

// Contoh penggunaan:
console.log(polaX(5));
```

### Output:
```
*   *
 * * 
  *  
 * * 
*   *
```

### 🔍 Penjelasan Kode:
1. **`let pattern = ''`** → Variabel untuk menyimpan hasil
2. **`for (let row = 0; row < num; row++)`** → Loop baris dari 0 sampai num-1
3. **`for (let col = 0; col < num; col++)`** → Loop kolom dari 0 sampai num-1
4. **`if (row === col || row + col === num - 1)`** → Cek apakah di diagonal
5. **`pattern += '*'`** → Tambah bintang jika di diagonal
6. **`pattern += ' '`** → Tambah spasi jika bukan diagonal
7. **`pattern += '\n'`** → Tambah newline setiap akhir baris
8. **`return pattern`** → Kembalikan hasil pattern

---

## ✨ Selamat Belajar!

> 💪 **Ingat:** Latihan adalah kunci! Coba tulis algoritma ini tanpa melihat kode beberapa kali sampai formula dan langkah-langkahnya melekat di kepala.

**Good luck! 🚀**