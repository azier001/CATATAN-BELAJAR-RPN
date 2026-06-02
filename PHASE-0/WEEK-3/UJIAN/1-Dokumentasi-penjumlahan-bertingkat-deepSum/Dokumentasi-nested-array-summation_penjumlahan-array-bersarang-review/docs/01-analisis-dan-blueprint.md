# 🔍 Analisis & Blueprint — `deepSum`

### ✨ _Memahami struktur sebelum menulis kode_

> 🎯 **Tujuan:** Menganalisis pola array 3D, merancang algoritma yang "tahan lupa", membuat blueprint kode, dan menentukan naming convention yang clean.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧩 | [Visualisasi Struktur Array 3D](#visualisasi) | Mental model "Kotak Berlapis" |
| 🎯 | [Algoritma Tahan Lupa](#algoritma) | Step-by-step dengan contoh angka konkret |
| 🗺️ | [Blueprint Kode](#blueprint) | Kerangka kode kosong dengan komentar peran |
| 📖 | [Kamus Variabel](#kamus) | Naming convention yang clean |
| ⚠️ | [Jebakan Umum (Gotchas)](#gotchas) | Kesalahan yang harus dihindari |

---

<a name="visualisasi"></a>

## 🧩 Visualisasi Struktur Array 3D

### Mental Model: Kotak Berlapis

> [!NOTE]
> Array 3 dimensi seperti **kotak hadiah berlapis**. Untuk mengambil hadiah (angka), kita harus membuka 3 lapis kotak secara berurutan.

```javascript
[ // 📦 KOTAK BESAR (Dimensi 1)
  [ // 📦 KOTAK SEDANG (Dimensi 2)
    [4, 5, 6], // 📦 KOTAK KECIL (Dimensi 3) ← Angka ada di sini!
    [9, 1, 2, 10]
  ]
]
```

### Tabel Akses Bertingkat

| Lapisan | Index | Kode Akses | Hasil | Tipe Data |
|---------|-------|------------|-------|-----------|
| **Buka Kotak Besar** | `i = 0` | `arr[0]` | `[[4,5,6], [9,1,2,10]]` | Array 2D |
| **Buka Kotak Sedang** | `j = 0` | `arr[0][0]` | `[4, 5, 6]` | Array 1D |
| **Buka Kotak Kecil** | `k = 2` | `arr[0][0][2]` | `6` | **Number** ✅ |

### Kesimpulan Pola

```
🎯 Struktur Data     → Array 3 Dimensi
📌 Kebutuhan Iterasi → 3 Lapis Loop (Nested Loop)
🔐 Akses Angka       → arr[i][j][k] (3 kombinasi index berurutan)
```

> [!IMPORTANT]
> Setiap dimensi memiliki **ukuran berbeda**. Kita tidak bisa menggunakan `arr.length` untuk semua loop!

---

<a name="algoritma"></a>

## 🎯 Algoritma Tahan Lupa

Algoritma yang baik bukan hanya bekerja, tapi juga **mudah dipahami 3 bulan kemudian**. Setiap langkah harus menjawab **"Kenapa?"** dan dilengkapi dengan **contoh angka konkret**.

### Langkah 1: Pengecekan Edge Case

**🏷️ Label Peran:** Guard Clause (Penjaga Pintu Masuk)

**❓ Kenapa?** Jika array kosong, tidak ada yang perlu dijumlahkan. Kita langsung return pesan khusus untuk menghemat waktu eksekusi dan menghindari error.

**🔢 Contoh Konkret:**
```javascript
deepSum([])  // Input: array kosong
↓
Cek: arr.length === 0 ? Ya!
↓
Return: 'No number'  // Langsung keluar, tidak perlu loop
```

---

### Langkah 2: Siapkan Wadah Penampung Total

**🏷️ Label Peran:** Accumulator (Penampung Akumulasi)

**❓ Kenapa?** Kita butuh satu tempat untuk mengumpulkan hasil penjumlahan dari semua angka. Wadah ini harus berada **di luar loop** agar nilainya tidak ter-reset setiap perputaran.

**🔢 Contoh Konkret:**
```javascript
let total = 0;  // Wadah kosong, siap menampung

// Nanti akan berisi:
// 0 → 4 → 9 → 15 → ... → 37 (hasil akhir)
```

---

### Langkah 3: Masuk ke Dimensi 1 (Loop Luar)

**🏷️ Label Peran:** First Dimension Iterator (Pembuka Kotak Besar)

**❓ Kenapa?** Kita perlu membuka kotak besar satu per satu untuk mengakses kotak sedang di dalamnya.

**🔢 Contoh Konkret:**
```javascript
arr = [ [[4,5,6], [9,1,2,10]] ]
       ↑
     index 0

for (let i = 0; i < arr.length; i++) {
  // i = 0 → Membuka kotak besar pertama
  // arr[0] = [[4,5,6], [9,1,2,10]]
}
```

**⚙️ Batas Loop:** `arr.length` (ukuran kotak besar)

---

### Langkah 4: Masuk ke Dimensi 2 (Loop Tengah)

**🏷️ Label Peran:** Second Dimension Iterator (Pembuka Kotak Sedang)

**❓ Kenapa?** Setelah membuka kotak besar, kita perlu membuka setiap kotak sedang di dalamnya untuk mengakses kotak kecil.

**🔢 Contoh Konkret:**
```javascript
arr[0] = [ [4,5,6], [9,1,2,10] ]
           ↑        ↑
         index 0  index 1

for (let j = 0; j < arr[i].length; j++) {
  // j = 0 → arr[0][0] = [4,5,6]
  // j = 1 → arr[0][1] = [9,1,2,10]
}
```

**⚙️ Batas Loop:** `arr[i].length` (ukuran kotak sedang yang sedang dibuka)

> [!WARNING]
> **JANGAN** gunakan `arr.length` di sini! Setiap kotak sedang punya ukuran sendiri.

---

### Langkah 5: Masuk ke Dimensi 3 (Loop Terdalam)

**🏷️ Label Peran:** Third Dimension Iterator (Pembuka Kotak Kecil)

**❓ Kenapa?** Ini adalah lapisan terakhir sebelum kita menemukan angka. Di sinilah angka berada!

**🔢 Contoh Konkret:**
```javascript
arr[0][0] = [4, 5, 6]
             ↑  ↑  ↑
            k=0 k=1 k=2

for (let k = 0; k < arr[i][j].length; k++) {
  // k = 0 → arr[0][0][0] = 4
  // k = 1 → arr[0][0][1] = 5
  // k = 2 → arr[0][0][2] = 6
}
```

**⚙️ Batas Loop:** `arr[i][j].length` (ukuran kotak kecil yang sedang dibuka)

---

### Langkah 6: Tambahkan Angka ke Total

**🏷️ Label Peran:** Accumulation Operation (Operasi Akumulasi)

**❓ Kenapa?** Setelah menemukan angka, kita perlu menambahkannya ke wadah penampung total.

**🔢 Contoh Konkret:**
```javascript
total = 0

// Iterasi 1:
total += arr[0][0][0]  // total = 0 + 4 = 4

// Iterasi 2:
total += arr[0][0][1]  // total = 4 + 5 = 9

// Iterasi 3:
total += arr[0][0][2]  // total = 9 + 6 = 15

// ... dan seterusnya hingga 37
```

---

### Langkah 7: Kembalikan Hasil Total

**🏷️ Label Peran:** Result Return (Pengembalian Hasil)

**❓ Kenapa?** Setelah semua loop selesai dan semua angka terjumlahkan, kita kembalikan hasil akhirnya.

**🔢 Contoh Konkret:**
```javascript
return total;  // 37
```

---

<a name="blueprint"></a>

## 🗺️ Blueprint Kode (Kerangka Kosong)

> [!TIP]
> Blueprint ini adalah **mental model visual** untuk membangun kode. Setiap bagian sudah diberi komentar peran.

```javascript
// 🗺️ KERANGKA KODE deepSum
// Mental Model: Kotak Berlapis 3 Dimensi

const deepSum = (arr) => {
  // ═══════════════════════════════════════════════
  // [BAGIAN 1] → Guard Clause (Edge Case)
  // ═══════════════════════════════════════════════
  
  
  // ═══════════════════════════════════════════════
  // [BAGIAN 2] → Accumulator (Wadah Penampung)
  // ═══════════════════════════════════════════════
  
  
  // ═══════════════════════════════════════════════
  // [BAGIAN 3] → Nested Loop (3 Lapis Iterasi)
  // ═══════════════════════════════════════════════
  
  // Loop Dimensi 1: Pembuka Kotak Besar
  
    // Loop Dimensi 2: Pembuka Kotak Sedang
    
      // Loop Dimensi 3: Pembuka Kotak Kecil
      
        // Akumulasi: Tambahkan angka ke total
        
      
    
  
  
  // ═══════════════════════════════════════════════
  // [BAGIAN 4] → Result Return (Pengembalian Hasil)
  // ═══════════════════════════════════════════════
  
};
```

---

<a name="kamus"></a>

## 📖 Kamus Variabel (Naming Convention)

> [!IMPORTANT]
> **Code is read more than written.** Penamaan variabel yang jelas akan membantu programmer lain (atau diri sendiri 3 bulan kemudian) memahami kode dengan cepat.

### Tabel Rekomendasi Penamaan

| Lokasi/Peran | ✅ Rekomendasi | ❌ Jangan | Alasan |
|--------------|----------------|----------|--------|
| **Penampung Total** | `total` | `t`, `sum`, `res`, `result` | Langsung menunjukkan fungsi akumulasi. Tidak terlalu singkat, tidak terlalu panjang. |
| **Loop Dimensi 1** | `layer1` atau `dim1` | `i`, `x`, `index` | Memberikan konteks visual bahwa kita sedang di lapisan pertama. |
| **Loop Dimensi 2** | `layer2` atau `dim2` | `j`, `y`, `index2` | Menunjukkan posisi penelusuran di kedalaman kedua. |
| **Loop Dimensi 3** | `layer3` atau `dim3` | `k`, `z`, `index3` | Memperjelas bahwa ini adalah lapisan pencarian terakhir. |

### Perbandingan Visual

#### ❌ Kurang Jelas (Matematis)
```javascript
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    for (let k = 0; k < arr[i][j].length; k++) {
      total += arr[i][j][k];
    }
  }
}
// 🤔 i, j, k → Tidak ada konteks tentang apa yang sedang diiterasi
```

#### ✅ Clean & Readable
```javascript
for (let layer1 = 0; layer1 < arr.length; layer1++) {
  for (let layer2 = 0; layer2 < arr[layer1].length; layer2++) {
    for (let layer3 = 0; layer3 < arr[layer1][layer2].length; layer3++) {
      total += arr[layer1][layer2][layer3];
    }
  }
}
// ✅ layer1, layer2, layer3 → Jelas sedang membuka lapisan mana
```

> [!TIP]
> Untuk challenge ini, **kedua gaya boleh digunakan**. Namun untuk production code dengan nested loop lebih dari 2 lapis, gunakan naming yang deskriptif.

---

<a name="gotchas"></a>

## ⚠️ Jebakan Umum (Gotchas)

### Gotcha #1: Batas Loop yang Salah

> [!CAUTION]
> **Risiko Tinggi:** Menggunakan `arr.length` untuk semua loop akan menyebabkan **out of bounds error** atau **hasil penjumlahan salah**.

#### ❌ Kesalahan Umum
```javascript
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {        // ❌ SALAH!
    for (let k = 0; k < arr.length; k++) {      // ❌ SALAH!
      total += arr[i][j][k];
    }
  }
}
```

**Mengapa Salah?**
- `arr.length` adalah ukuran kotak besar (dimensi 1)
- Ukuran kotak sedang (dimensi 2) dan kotak kecil (dimensi 3) bisa **berbeda-beda**
- Contoh: `arr.length = 1`, tapi `arr[0].length = 2` dan `arr[0][0].length = 3`

#### ✅ Solusi Benar
```javascript
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {      // ✅ Ukuran spesifik dimensi 2
    for (let k = 0; k < arr[i][j].length; k++) { // ✅ Ukuran spesifik dimensi 3
      total += arr[i][j][k];
    }
  }
}
```

---

### Gotcha #2: Akses Index yang Salah

> [!CAUTION]
> **Risiko Tinggi:** Menggunakan index yang tidak berurutan akan mengambil nilai dari dimensi yang salah.

#### ❌ Kesalahan Umum
```javascript
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    for (let k = 0; k < arr[i][j].length; k++) {
      total += arr[k];  // ❌ SALAH! Ini mengakses dimensi 1, bukan dimensi 3
    }
  }
}
```

**Mengapa Salah?**
- `arr[k]` hanya menembus 1 lapis (dimensi 1)
- Untuk mencapai angka, kita butuh menembus 3 lapis: `arr[i][j][k]`

#### ✅ Solusi Benar
```javascript
total += arr[i][j][k];  // ✅ Menembus 3 dimensi secara berurutan
```

---

### Gotcha #3: Penempatan Total di Dalam Loop

> [!CAUTION]
> **Risiko Tinggi:** Meletakkan `let total = 0` di dalam loop akan membuat nilai ter-reset setiap iterasi.

#### ❌ Kesalahan Umum
```javascript
const deepSum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let total = 0;  // ❌ SALAH! Ter-reset setiap loop
    // ... loop lainnya
  }
  return total;  // Error: total is not defined
};
```

**Mengapa Salah?**
- Setiap kali loop berputar, `total` kembali menjadi 0
- Variabel `total` tidak bisa diakses di luar scope loop

#### ✅ Solusi Benar
```javascript
const deepSum = (arr) => {
  let total = 0;  // ✅ Di luar loop, bertahan sepanjang eksekusi
  
  for (let i = 0; i < arr.length; i++) {
    // ... loop lainnya
  }
  
  return total;  // ✅ Nilai terakumulasi dengan benar
};
```

---

### Gotcha #4: Lupa Edge Case

> [!WARNING]
> Tanpa pengecekan edge case, fungsi akan return `0` untuk array kosong, padahal seharusnya return `'No number'`.

#### ❌ Tanpa Edge Case
```javascript
const deepSum = (arr) => {
  let total = 0;
  // ... loop
  return total;  // Return 0 untuk array kosong
};

deepSum([]);  // Output: 0 ❌ (seharusnya 'No number')
```

#### ✅ Dengan Edge Case
```javascript
const deepSum = (arr) => {
  if (arr.length === 0) return 'No number';  // ✅ Guard Clause
  
  let total = 0;
  // ... loop
  return total;
};

deepSum([]);  // Output: 'No number' ✅
```

---

## 🎯 Checklist Sebelum Coding

Sebelum mulai implementasi, pastikan Anda sudah memahami:

- [ ] Struktur array 3D (kotak berlapis)
- [ ] Algoritma 7 langkah dengan contoh angka konkret
- [ ] Blueprint kerangka kode
- [ ] Naming convention yang clean
- [ ] 4 jebakan umum dan cara menghindarinya

---

**📍 Navigasi:**
- ⬅️ [Kembali ke README](../README.md)
- ➡️ [Lanjut: Implementasi Bertahap](02-implementasi-bertahap.md)
