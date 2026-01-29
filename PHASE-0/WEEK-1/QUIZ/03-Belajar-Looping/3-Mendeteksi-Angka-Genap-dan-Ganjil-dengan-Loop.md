# 📚 Dokumentasi Perulangan & Kondisional JavaScript
## Mendeteksi Angka Genap dan Ganjil

---

## 📋 Daftar Isi

- [Pengenalan](#pengenalan)
- [Konsep Dasar](#konsep-dasar)
  - [Apa itu Perulangan?](#apa-itu-perulangan)
  - [Apa itu Kondisional?](#apa-itu-kondisional)
  - [Apa itu Modulo?](#apa-itu-modulo)
- [Problem Statement](#problem-statement)
- [Solusi Kode](#solusi-kode)
  - [Solusi 1: Ternary Operator](#solusi-1-ternary-operator)
  - [Solusi 2: If-Else Statement](#solusi-2-if-else-statement)
  - [Solusi 3: Switch Case](#solusi-3-switch-case)
  - [Solusi 4: Array Index](#solusi-4-array-index)
- [Perbandingan Solusi](#perbandingan-solusi)
- [Kesimpulan](#kesimpulan)

---

<a name="pengenalan"></a>
## 🎯 Pengenalan

Dokumentasi ini dibuat untuk membantu pemula memahami cara menggunakan **perulangan** dan **kondisional** dalam JavaScript untuk mendeteksi angka genap dan ganjil dari 1 sampai 100.

**Target Pembelajaran:**
- ✅ Memahami cara kerja perulangan `for`
- ✅ Menggunakan kondisional untuk pengecekan
- ✅ Mendeteksi angka genap dan ganjil
- ✅ Mengenal berbagai alternatif penulisan kode

---

<a name="konsep-dasar"></a>
## 📖 Konsep Dasar

<a name="apa-itu-perulangan"></a>
### 🔄 Apa itu Perulangan?

**Perulangan (Loop)** adalah cara untuk menjalankan kode yang sama berkali-kali tanpa harus menulis ulang.

**Contoh Sederhana:**
```javascript
// Tanpa perulangan (NOT RECOMMENDED!)
console.log(1);
console.log(2);
console.log(3);
// ... sampai 100? 😱

// Dengan perulangan (RECOMMENDED!)
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
```

**Struktur For Loop:**
```javascript
for (inisialisasi; kondisi; increment) {
  // kode yang dijalankan
}
```

- **Inisialisasi**: `let i = 1` → Titik mulai
- **Kondisi**: `i <= 100` → Kapan berhenti
- **Increment**: `i++` → Tambah 1 setiap loop

---

<a name="apa-itu-kondisional"></a>
### 🤔 Apa itu Kondisional?

**Kondisional** adalah cara untuk membuat keputusan dalam kode. "Jika A, maka lakukan B. Jika tidak, lakukan C."

**Contoh:**
```javascript
let angka = 10;

if (angka > 5) {
  console.log("Angka lebih besar dari 5");
} else {
  console.log("Angka kurang dari atau sama dengan 5");
}
```

---

<a name="apa-itu-modulo"></a>
### ➗ Apa itu Modulo (%)?

**Modulo** adalah operasi matematika yang menghasilkan **sisa pembagian**.

**Contoh:**
```javascript
10 % 2 = 0  // 10 dibagi 2 = 5, sisa 0 (GENAP)
11 % 2 = 1  // 11 dibagi 2 = 5, sisa 1 (GANJIL)
12 % 2 = 0  // 12 dibagi 2 = 6, sisa 0 (GENAP)
13 % 2 = 1  // 13 dibagi 2 = 6, sisa 1 (GANJIL)
```

**🔑 Kunci Pemahaman:**
- Jika `angka % 2 === 0` → **GENAP**
- Jika `angka % 2 === 1` → **GANJIL**

---

<a name="problem-statement"></a>
## 🎯 Problem Statement

**Soal:**
Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1. Di dalam perulangan, periksa setiap angka counter:

- ✅ Apabila angka counter adalah angka **genap**, tuliskan **GENAP**
- ✅ Apabila angka counter adalah angka **ganjil**, tuliskan **GANJIL**

---

<a name="solusi-kode"></a>
## 💡 Solusi Kode

<a name="solusi-1-ternary-operator"></a>
### 🚀 Solusi 1: Ternary Operator (Kode Asli Kamu)

```javascript
for (let i = 1; i <= 100; i++) {
  i % 2 === 0 
    ? console.log(`Angka ${i} adalah Angka GENAP`) 
    : console.log(`Angka ${i} adalah Angka GANJIL`);
}
```

**📝 Penjelasan:**
- **Ternary Operator**: `kondisi ? jika_true : jika_false`
- Lebih singkat dari if-else
- Cocok untuk kondisi sederhana

**✅ Kelebihan:**
- Ringkas dan efisien
- Hanya 1 baris untuk kondisi

**❌ Kekurangan:**
- Kurang mudah dibaca untuk pemula

---

<a name="solusi-2-if-else-statement"></a>
### 📌 Solusi 2: If-Else Statement

```javascript
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} adalah GENAP`);
  } else {
    console.log(`${i} adalah GANJIL`);
  }
}
```

**📝 Penjelasan:**
- Menggunakan struktur `if-else` klasik
- Lebih mudah dibaca dan dipahami pemula

**✅ Kelebihan:**
- Sangat mudah dibaca
- Struktur jelas dan eksplisit
- **Recommended untuk pemula!**

**❌ Kekurangan:**
- Lebih banyak baris kode

---

<a name="solusi-3-switch-case"></a>
### 🔀 Solusi 3: Switch Case

```javascript
for (let i = 1; i <= 100; i++) {
  switch (i % 2) {
    case 0:
      console.log(`${i} adalah GENAP`);
      break;
    case 1:
      console.log(`${i} adalah GANJIL`);
      break;
  }
}
```

**📝 Penjelasan:**
- `i % 2` menghasilkan 0 atau 1
- `case 0`: angka genap
- `case 1`: angka ganjil
- `break`: keluar dari switch

**✅ Kelebihan:**
- Bagus untuk multiple kondisi
- Struktur terorganisir

**❌ Kekurangan:**
- Overkill untuk kondisi sederhana
- Lebih panjang dari if-else

---

<a name="solusi-4-array-index"></a>
### 🎨 Solusi 4: Array Index (Creative!)

```javascript
for (let i = 1; i <= 100; i++) {
  const tipe = ["GENAP", "GANJIL"];
  console.log(`Angka ${i} adalah ${tipe[i % 2]}`);
}
```

**📝 Penjelasan:**
- Array `["GENAP", "GANJIL"]`
- `i % 2` = 0 → ambil index 0 → "GENAP"
- `i % 2` = 1 → ambil index 1 → "GANJIL"

**✅ Kelebihan:**
- Kreatif dan unik
- Sangat singkat

**❌ Kekurangan:**
- Kurang intuitif untuk pemula
- Trik yang butuh pemahaman array

---

<a name="perbandingan-solusi"></a>
## 📊 Perbandingan Solusi

| Solusi | Kemudahan Baca | Panjang Kode | Untuk Pemula |
|--------|----------------|--------------|--------------|
| **If-Else** | ⭐⭐⭐⭐⭐ | Sedang | ✅ **Recommended** |
| **Ternary** | ⭐⭐⭐ | Pendek | ⚠️ Intermediate |
| **Switch** | ⭐⭐⭐⭐ | Panjang | ✅ OK |
| **Array Index** | ⭐⭐ | Sangat Pendek | ❌ Advanced |

---

<a name="kesimpulan"></a>
## 🎓 Kesimpulan

### 📌 Key Takeaways:

1. **Perulangan `for`** digunakan untuk mengulang kode
2. **Kondisional** digunakan untuk membuat keputusan
3. **Modulo `%`** digunakan untuk cek genap/ganjil
4. Ada **banyak cara** menulis kode yang sama
5. **If-else paling disarankan untuk pemula**

### 🚀 Next Steps:

- ✅ Praktek langsung dengan kode di atas
- ✅ Coba modifikasi rentang angka (misal 1-50)
- ✅ Tambahkan kondisi lain (misal kelipatan 5)
- ✅ Eksplorasi kondisional lebih lanjut

---

**💪 Happy Coding!**

*Dibuat dengan ❤️ untuk belajar JavaScript*
