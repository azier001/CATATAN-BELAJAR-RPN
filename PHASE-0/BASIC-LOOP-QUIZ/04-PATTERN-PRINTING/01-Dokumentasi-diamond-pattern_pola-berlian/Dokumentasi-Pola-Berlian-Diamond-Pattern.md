# 💎 Dokumentasi Pola Berlian (Diamond Pattern)

> Dokumentasi pribadi untuk belajar membuat pola berlian menggunakan JavaScript

---

## 📋 Daftar Isi

- [Pengenalan](#pengenalan)
- [Visualisasi Pola](#visualisasi-pola)
- [Analisis Pola](#analisis-pola)
- [Rumus Matematika](#rumus-matematika)
- [Solusi 1: Versi 2 Loop](#solusi-1-versi-2-loop)
  - [Algoritma Step-by-Step](#algoritma-step-by-step-2-loop)
  - [Langkah Pengerjaan Bertahap](#langkah-pengerjaan-bertahap)
  - [Kode Lengkap](#kode-lengkap-2-loop)
- [Solusi 2: Versi 1 Loop](#solusi-2-versi-1-loop)
  - [Konsep Dasar](#konsep-dasar-1-loop)
  - [Algoritma Step-by-Step](#algoritma-step-by-step-1-loop)
  - [Langkah Pengerjaan Bertahap 1 Loop](#langkah-pengerjaan-bertahap-1-loop)
  - [Kode Lengkap](#kode-lengkap-1-loop)
- [Naming Convention](#naming-convention)
- [Kesimpulan](#kesimpulan)

---

<a name="pengenalan"></a>
## 🎯 Pengenalan

Challenge ini adalah membuat fungsi yang menghasilkan pola berlian menggunakan karakter bintang `*` dan spasi.

**Fungsi:**
```javascript
function berlian(num) {
  // code here
}
```

**Parameter:**
- `num` = tinggi setengah bagian atas berlian (termasuk tengah)

**Contoh Penggunaan:**
```javascript
console.log(berlian(5));
```

---

<a name="visualisasi-pola"></a>
## 👀 Visualisasi Pola

Untuk `num = 5`, hasilnya:

```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

**Karakteristik:**
- Total baris = `(num × 2) - 1` = `(5 × 2) - 1` = **9 baris**
- Baris tengah (ke-5) memiliki bintang paling banyak
- Simetris: bagian atas dan bawah adalah cerminan

---

<a name="analisis-pola"></a>
## 🔍 Analisis Pola

Mari kita analisis setiap baris untuk `num = 5`:

| Baris | Spasi | Bintang | Keterangan |
|-------|-------|---------|------------|
| 1     | 4     | 1       | Bagian atas |
| 2     | 3     | 3       | ↓ |
| 3     | 2     | 5       | ↓ |
| 4     | 1     | 7       | ↓ |
| 5     | 0     | 9       | **Tengah** (paling lebar) |
| 6     | 1     | 7       | Bagian bawah |
| 7     | 2     | 5       | ↓ |
| 8     | 3     | 3       | ↓ |
| 9     | 4     | 1       | ↓ |

**Pola yang Terlihat:**
- Spasi **berkurang** 1 setiap baris (bagian atas)
- Bintang **bertambah** 2 setiap baris (bagian atas)
- Bagian bawah adalah **kebalikan** dari bagian atas

---

<a name="rumus-matematika"></a>
## 📐 Rumus Matematika

### Untuk Bagian Atas (baris 1 sampai num):

```
Jumlah Spasi  = num - baris
Jumlah Bintang = (baris × 2) - 1
```

**Contoh untuk baris ke-3:**
- Spasi = `5 - 3` = **2 spasi**
- Bintang = `(3 × 2) - 1` = **5 bintang**

### Untuk Bagian Bawah (baris num-1 sampai 1):

Menggunakan **rumus yang sama**, tapi loop berjalan mundur dari `num - 1` ke `1`.

---

<a name="solusi-1-versi-2-loop"></a>
## 🔄 Solusi 1: Versi 2 Loop

Pendekatan ini menggunakan **2 loop terpisah**:
1. Loop pertama untuk bagian atas
2. Loop kedua untuk bagian bawah

> ✅ **Cocok untuk pemula** karena lebih mudah dipahami

<a name="algoritma-step-by-step-2-loop"></a>
### 📝 Algoritma Step-by-Step

1. Inisialisasi string `pattern` kosong
2. **Loop bagian atas** (dari 1 sampai `num`):
   - Tambahkan spasi sebanyak `(num - i)`
   - Tambahkan bintang sebanyak `(2 × i - 1)`
   - Tambahkan newline `\n`
3. **Loop bagian bawah** (dari `num - 1` sampai 1):
   - Tambahkan spasi sebanyak `(num - i)`
   - Tambahkan bintang sebanyak `(2 × i - 1)`
   - Tambahkan newline `\n`
4. Kembalikan `pattern`

> ⚠️ **Penting:** Loop bagian bawah mulai dari `num - 1` (bukan `num`) agar baris tengah tidak duplikat!

<a name="langkah-pengerjaan-bertahap"></a>
### 🪜 Langkah Pengerjaan Bertahap

#### Step 1: Buat Bintang Saja (Tanpa Spasi)

**Target:**
```
*
***
*****
*******
*********
```

**Kode:**
```javascript
function berlian(num) {
  let pattern = '';

  for (let i = 1; i <= num; i++) {
    for (let star = 1; star <= 2 * i - 1; star++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  return pattern;
}
```

**Penjelasan:**
- Loop `i` dari 1 sampai `num` (5 baris)
- Setiap baris, tambahkan bintang sebanyak `(2 × i - 1)`
- Tambahkan newline untuk pindah baris

---

#### Step 2: Tambahkan Spasi di Depan

**Target:**
```
    *
   ***
  *****
 *******
*********
```

**Kode:**
```javascript
function berlian(num) {
  let pattern = '';

  for (let i = 1; i <= num; i++) {
    // Tambahkan spasi
    for (let space = 1; space <= num - i; space++) {
      pattern += ' ';
    }
    
    // Tambahkan bintang
    for (let star = 1; star <= 2 * i - 1; star++) {
      pattern += '*';
    }
    
    pattern += '\n';
  }

  return pattern;
}
```

**Penjelasan:**
- **Sebelum** loop bintang, tambahkan loop untuk spasi
- Jumlah spasi = `num - i`
- Contoh baris 1: `5 - 1 = 4` spasi

---

#### Step 3: Tambahkan Bagian Bawah (Cerminan)

**Target Lengkap:**
```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

**Kode:**
```javascript
function berlian(num) {
  let pattern = '';

  // Bagian atas
  for (let i = 1; i <= num; i++) {
    for (let space = 1; space <= num - i; space++) {
      pattern += ' ';
    }
    for (let star = 1; star <= 2 * i - 1; star++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  // Bagian bawah
  for (let i = num - 1; i >= 1; i--) {
    for (let space = 1; space <= num - i; space++) {
      pattern += ' ';
    }
    for (let star = 1; star <= 2 * i - 1; star++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  return pattern;
}
```

**Penjelasan:**
- Loop kedua **sama persis** dengan loop pertama
- Bedanya: loop berjalan **mundur** dari `num - 1` ke `1`
- Mulai dari `num - 1` agar baris tengah tidak muncul 2 kali

> ❌ **Kesalahan Umum:** Jika loop kedua dimulai dari `num`, baris tengah akan duplikat!

<a name="kode-lengkap-2-loop"></a>
### ✅ Kode Lengkap (2 Loop)

```javascript
function berlian(num) {
  let pattern = '';

  // Bagian atas
  for (let i = 1; i <= num; i++) {
    for (let space = 1; space <= num - i; space++) {
      pattern += ' ';
    }
    for (let star = 1; star <= 2 * i - 1; star++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  // Bagian bawah
  for (let i = num - 1; i >= 1; i--) {
    for (let space = 1; space <= num - i; space++) {
      pattern += ' ';
    }
    for (let star = 1; star <= 2 * i - 1; star++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  return pattern;
}

console.log(berlian(5));
```

---

<a name="solusi-2-versi-1-loop"></a>
## ⚡ Solusi 2: Versi 1 Loop

Pendekatan ini menggunakan **hanya 1 loop** untuk membuat seluruh berlian.

> 💡 **Lebih efisien** dan menunjukkan pemahaman logika yang lebih baik

<a name="konsep-dasar-1-loop"></a>
### 🧠 Konsep Dasar

**Ide:** Buat semua baris (atas + bawah) dalam 1 loop dengan variabel `level`.

Untuk `num = 5`, loop dari 1 sampai 9:

| i | level | Spasi | Bintang | Keterangan |
|---|-------|-------|---------|------------|
| 1 | 1     | 4     | 1       | Naik |
| 2 | 2     | 3     | 3       | ↓ |
| 3 | 3     | 2     | 5       | ↓ |
| 4 | 4     | 1     | 7       | ↓ |
| 5 | 5     | 0     | 9       | **Puncak** |
| 6 | 4     | 1     | 7       | Turun |
| 7 | 3     | 2     | 5       | ↓ |
| 8 | 2     | 3     | 3       | ↓ |
| 9 | 1     | 4     | 1       | ↓ |

**Pola `level`:**
- Jika `i ≤ num` → `level = i` (naik)
- Jika `i > num` → `level = (num × 2) - i` (turun)

<a name="algoritma-step-by-step-1-loop"></a>
### 📝 Algoritma Step-by-Step (1 Loop)

1. Inisialisasi string `pattern` kosong
2. **Loop** dari 1 sampai `(num × 2 - 1)`:
   - Tentukan `level`:
     - Jika `i ≤ num` → `level = i`
     - Jika `i > num` → `level = (num × 2) - i`
   - Tambahkan spasi sebanyak `(num - level)`
   - Tambahkan bintang sebanyak `(2 × level - 1)`
   - Tambahkan newline `\n`
3. Kembalikan `pattern`

<a name="langkah-pengerjaan-bertahap-1-loop"></a>
### 🪜 Langkah Pengerjaan Bertahap (1 Loop)

#### Step 1: Buat Loop dan Print Angka `i`

**Target:**
```
1
2
3
4
5
6
7
8
9
```

**Kode:**
```javascript
function berlian(num) {
  let pattern = '';

  for (let i = 1; i <= num * 2 - 1; i++) {
    pattern += i;
    pattern += '\n';
  }

  return pattern;
}
```

**Penjelasan:**
- Total baris = `(num × 2) - 1` = `(5 × 2) - 1` = 9
- Loop dari 1 sampai 9
- Print angka `i` untuk memastikan loop berjalan benar

---

#### Step 2: Tentukan Variabel `level`

**Target:**
```
1
2
3
4
5
4
3
2
1
```

**Kode:**
```javascript
function berlian(num) {
  let pattern = '';

  for (let i = 1; i <= num * 2 - 1; i++) {
    let level = i <= num ? i : num * 2 - i;
    
    pattern += level;
    pattern += '\n';
  }

  return pattern;
}
```

**Penjelasan:**
- Gunakan **ternary operator** untuk menentukan `level`
- Jika `i ≤ 5` → `level = i` (1, 2, 3, 4, 5)
- Jika `i > 5` → `level = 10 - i` (4, 3, 2, 1)
- Pola naik-turun sudah terbentuk! 🎉

---

#### Step 3: Tambahkan Bintang (Tanpa Spasi)

**Target:**
```
*
***
*****
*******
*********
*******
*****
***
*
```

**Kode:**
```javascript
function berlian(num) {
  let pattern = '';

  for (let i = 1; i <= num * 2 - 1; i++) {
    let level = i <= num ? i : num * 2 - i;
    
    for (let star = 1; star <= 2 * level - 1; star++) {
      pattern += '*';
    }
    
    pattern += '\n';
  }

  return pattern;
}
```

**Penjelasan:**
- Ganti angka `level` dengan loop bintang
- Jumlah bintang = `(2 × level - 1)`
- Pola bintang naik-turun sudah jadi!

---

#### Step 4: Tambahkan Spasi di Depan

**Target Lengkap:**
```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

**Kode:**
```javascript
function berlian(num) {
  let pattern = '';

  for (let i = 1; i <= num * 2 - 1; i++) {
    let level = i <= num ? i : num * 2 - i;
    
    // Tambahkan spasi
    for (let space = 1; space <= num - level; space++) {
      pattern += ' ';
    }
    
    // Tambahkan bintang
    for (let star = 1; star <= 2 * level - 1; star++) {
      pattern += '*';
    }
    
    pattern += '\n';
  }

  return pattern;
}
```

**Penjelasan:**
- Sebelum loop bintang, tambahkan loop spasi
- Jumlah spasi = `num - level`
- Berlian lengkap sudah selesai! ✨

<a name="kode-lengkap-1-loop"></a>
### ✅ Kode Lengkap (1 Loop)

```javascript
function berlian(num) {
  let pattern = '';

  for (let i = 1; i <= num * 2 - 1; i++) {
    let level = i <= num ? i : num * 2 - i;
    
    for (let space = 1; space <= num - level; space++) {
      pattern += ' ';
    }
    
    for (let star = 1; star <= 2 * level - 1; star++) {
      pattern += '*';
    }
    
    pattern += '\n';
  }

  return pattern;
}

console.log(berlian(5));
```

---

<a name="naming-convention"></a>
## 📖 Naming Convention

Penamaan variabel yang baik membuat kode lebih mudah dibaca dan dipahami.

### ❌ Naming yang Buruk

```javascript
for (let s = 1; s <= num - i; s++) {  // s itu apa?
  pattern += ' ';
}

for (let b = 1; b <= 2 * i - 1; b++) {  // b itu apa?
  pattern += '*';
}
```

### ✅ Naming yang Baik

```javascript
for (let space = 1; space <= num - i; space++) {  // Jelas: ini untuk spasi
  pattern += ' ';
}

for (let star = 1; star <= 2 * i - 1; star++) {  // Jelas: ini untuk bintang
  pattern += '*';
}
```

### 📌 Best Practices

| Variabel | ✅ Good | ❌ Bad | Keterangan |
|----------|---------|--------|------------|
| Counter loop utama | `i`, `row` | `x`, `a` | `i` adalah konvensi umum |
| Parameter fungsi | `num`, `height` | `n`, `x` | Deskriptif |
| Hasil akhir | `pattern`, `result` | `p`, `r` | Jelas fungsinya |
| Counter spasi | `space` | `s`, `j` | Deskriptif |
| Counter bintang | `star` | `b`, `k` | Deskriptif |
| Level berlian | `level` | `l`, `lv` | Jelas maksudnya |

### 💡 Tips

- Nama variabel harus **menjelaskan apa yang dilakukan**
- Hindari singkatan yang tidak jelas
- `i`, `j`, `k` boleh digunakan untuk **loop counter sederhana**
- Untuk variabel penting, gunakan nama yang **deskriptif**

---

<a name="kesimpulan"></a>
## 🎓 Kesimpulan

### 📊 Perbandingan 2 Solusi

| Aspek | Versi 2 Loop | Versi 1 Loop |
|-------|--------------|--------------|
| **Jumlah Loop** | 2 loop terpisah | 1 loop saja |
| **Kesulitan** | ⭐⭐ Mudah | ⭐⭐⭐ Sedang |
| **Efisiensi** | Biasa | Lebih efisien |
| **Cocok untuk** | Pemula | Intermediate |
| **Kode** | Lebih panjang | Lebih ringkas |

### ✨ Key Takeaways

1. **Analisis pola** adalah langkah pertama yang penting
2. **Temukan rumus matematika** untuk spasi dan bintang
3. **Kerjakan bertahap**: bintang dulu, baru spasi
4. **Naming convention** membuat kode lebih readable
5. **Ada banyak cara** untuk menyelesaikan masalah yang sama

### 🚀 Next Steps

Setelah menguasai pola berlian, coba challenge lain:
- Pola segitiga terbalik
- Pola X
- Pola hourglass (jam pasir)
- Pola hollow diamond (berlian kosong)

---

> 💎 **"Practice makes perfect!"** - Terus latih logika dengan berbagai pattern!

---

**Dokumentasi dibuat:** Desember 2025  
**Untuk:** Pembelajaran pribadi  
**Tingkat:** Pemula
