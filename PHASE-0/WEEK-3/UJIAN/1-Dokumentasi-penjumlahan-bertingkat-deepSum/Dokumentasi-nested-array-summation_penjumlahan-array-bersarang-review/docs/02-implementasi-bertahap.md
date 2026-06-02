# 🔨 Implementasi Bertahap — `deepSum`

### ✨ _Membangun kode step-by-step, dari kerangka hingga solusi sempurna_

> 🎯 **Tujuan:** Menerjemahkan blueprint menjadi kode JavaScript nyata secara bertahap, debugging kesalahan umum, dan memahami solusi V1 (Nested Loop).

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🏗️ | [Step 1: Kerangka Awal](#step1) | Edge case + wadah penampung |
| ⚙️ | [Step 2: Implementasi 3 Lapis Loop](#step2) | Kesalahan umum + debugging |
| ✅ | [Step 3: Solusi Akhir V1](#step3) | Kode final yang sempurna |
| 🎓 | [Key Takeaways](#takeaways) | Pelajaran penting |

---

<a name="step1"></a>

## 🏗️ Step 1: Kerangka Awal & Edge Case

> [!NOTE]
> Kita mulai dengan fondasi kode yang kokoh: **Arrow Function** (best practice JavaScript modern) + **Guard Clause** untuk edge case.

### Kode Step 1

```javascript
const deepSum = (arr) => {
  if (arr.length === 0) return 'No number';
  let total = 0;
  return total;
};
```

### Penjelasan

```
🎯 Arrow Function     → Sintaks modern, lebih ringkas
📌 Guard Clause       → Cek edge case di awal, return dini jika array kosong
🔐 Accumulator        → Wadah penampung di luar loop (nilai tidak ter-reset)
```

### Test Step 1

```javascript
console.log(deepSum([]));
// Output: 'No number' ✅
```

> [!TIP]
> **Best Practice:** Selalu handle edge case terlebih dahulu sebelum logika utama. Ini membuat kode lebih robust dan efisien.

---

<a name="step2"></a>

## ⚙️ Step 2: Implementasi 3 Lapis Loop (Kesalahan Umum)

Pada tahap ini, kita akan melengkapi bagian loop. Namun, mari kita lihat **kesalahan yang sering terjadi** terlebih dahulu untuk pembelajaran.

---

### ❌ Kesalahan Umum: Kode Awal (Salah)

```javascript
const deepSum = (arr) => {
  if (arr.length === 0) return 'No number';
  
  let total = 0;
  
  for (let i = 0; i < arr.length; i++) {
    // ❌ SALAH: Batas dimensi kedua tidak boleh melihat kotak besar `arr.length`
    for (let j = 0; j < arr.length; j++) {
      // ❌ SALAH: Batas dimensi ketiga tidak boleh melihat kotak besar `arr.length`
      for (let k = 0; k < arr.length; k++) {
        // ❌ SALAH: `arr[k]` hanya mengambil elemen dari dimensi pertama
        total += arr[k]; 
      }
    }
  }
  
  return total;
};
```

---

### 🔍 Debugging: Analogi "Kotak Hadiah"

> [!IMPORTANT]
> Untuk memahami kesalahan di atas, mari gunakan analogi **Kotak Hadiah Berlapis**.

#### Ilustrasi Data

```javascript
arr = [ // 📦 Kotak Besar (ukuran: 1)
  [ // 📦 Kotak Sedang (ukuran: 2)
    [4, 5, 6], // 📦 Kotak Kecil #1 (ukuran: 3)
    [9, 1, 2, 10] // 📦 Kotak Kecil #2 (ukuran: 4)
  ]
]
```

#### Kesalahan #1: Batas Loop yang Salah

**Masalah:**
```javascript
for (let j = 0; j < arr.length; j++) { // arr.length = 1
  // Loop ini hanya akan jalan 1 kali!
  // Padahal kotak sedang berisi 2 kotak kecil
}
```

**Mengapa Salah?**

| Dimensi | Ukuran Sebenarnya | Yang Dipakai | Dampak |
|---------|-------------------|--------------|--------|
| Dimensi 1 (Kotak Besar) | `arr.length = 1` | `arr.length` ✅ | OK |
| Dimensi 2 (Kotak Sedang) | `arr[0].length = 2` | `arr.length = 1` ❌ | Loop kurang! |
| Dimensi 3 (Kotak Kecil) | `arr[0][0].length = 3` atau `4` | `arr.length = 1` ❌ | Loop kurang! |

> [!WARNING]
> **Setiap dimensi punya ukuran sendiri!** Menggunakan `arr.length` untuk semua loop adalah seperti menggunakan ukuran kotak besar untuk mengukur kotak sedang dan kecil.

---

#### Kesalahan #2: Akses Index yang Salah

**Masalah:**
```javascript
total += arr[k];
// arr[k] hanya menembus 1 lapis (dimensi 1)
// Kita butuh menembus 3 lapis: arr[i][j][k]
```

**Visualisasi:**

```
❌ arr[k]           → Mengambil kotak sedang (Array 2D)
                      Tidak bisa dijumlahkan!

✅ arr[i][j][k]     → Menembus 3 lapis secara berurutan
                      Mengambil angka (Number) ✅
```

**Contoh Konkret:**

```javascript
// Dengan data: arr = [[[4, 5, 6], [9, 1, 2, 10]]]

// ❌ SALAH:
arr[0]       // Hasil: [[4,5,6], [9,1,2,10]] (Array 2D, bukan angka!)

// ✅ BENAR:
arr[0][0][0] // Hasil: 4 (Angka!) ✅
arr[0][0][1] // Hasil: 5 (Angka!) ✅
arr[0][1][3] // Hasil: 10 (Angka!) ✅
```

---

### 🎯 Solusi: Batas dan Akses yang Benar

> [!TIP]
> **Prinsip Emas:** Gunakan ukuran **spesifik** dari dimensi yang sedang dibuka, dan akses dengan **3 kombinasi index berurutan**.

#### Tabel Perbaikan

| Loop | ❌ Batas Salah | ✅ Batas Benar | Penjelasan |
|------|----------------|----------------|------------|
| **Loop 1** (Dimensi 1) | `arr.length` | `arr.length` | Ukuran kotak besar ✅ |
| **Loop 2** (Dimensi 2) | `arr.length` | `arr[i].length` | Ukuran kotak sedang ke-i |
| **Loop 3** (Dimensi 3) | `arr.length` | `arr[i][j].length` | Ukuran kotak kecil ke-j di dalam kotak sedang ke-i |

#### Tabel Akses

| ❌ Akses Salah | ✅ Akses Benar | Tipe Data |
|----------------|----------------|-----------|
| `arr[k]` | `arr[i][j][k]` | Number |

---

<a name="step3"></a>

## ✅ Step 3: Solusi Akhir V1 (Nested Loop)

Setelah memahami kesalahan umum, berikut adalah **solusi yang sempurna**:

```javascript
const deepSum = (arr) => {
  // [EDGE CASE] Cek apakah array kosong
  if (arr.length === 0) return 'No number';

  // [ACCUMULATOR] Wadah penampung di luar loop
  let total = 0;

  // [LOOP 1] Dimensi 1: Buka kotak besar
  for (let i = 0; i < arr.length; i++) {
    
    // [LOOP 2] Dimensi 2: Buka kotak sedang
    // ✅ BENAR: Menggunakan batas spesifik ukuran dimensi kedua (arr[i])
    for (let j = 0; j < arr[i].length; j++) {
      
      // [LOOP 3] Dimensi 3: Buka kotak kecil
      // ✅ BENAR: Menggunakan batas spesifik ukuran dimensi ketiga (arr[i][j])
      for (let k = 0; k < arr[i][j].length; k++) {
        
        // [ACCUMULATION] Tambahkan angka ke total
        // ✅ BENAR: Mengakses angka dengan menembus ketiga dimensi berurutan
        total += arr[i][j][k]; 
        
      }
    }
  }

  // [RETURN] Kembalikan hasil akhir
  return total;
};
```

---

### 🧪 Test Solusi V1

```javascript
// Test Case 1
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10]
  ]
]));
// Output: 37 ✅

// Test Case 2
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10], 
    [10, 4, 10, 10, 10]
  ]
]));
// Output: 81 ✅

// Test Case 3 (Edge Case)
console.log(deepSum([]));
// Output: 'No number' ✅
```

---

### 📊 Visualisasi Eksekusi (Test Case 1)

Mari lihat bagaimana kode bekerja step-by-step dengan data `[[[4, 5, 6], [9, 1, 2, 10]]]`:

```
🔄 Iterasi Loop:

i=0, j=0, k=0 → arr[0][0][0] = 4   → total = 0 + 4 = 4
i=0, j=0, k=1 → arr[0][0][1] = 5   → total = 4 + 5 = 9
i=0, j=0, k=2 → arr[0][0][2] = 6   → total = 9 + 6 = 15

i=0, j=1, k=0 → arr[0][1][0] = 9   → total = 15 + 9 = 24
i=0, j=1, k=1 → arr[0][1][1] = 1   → total = 24 + 1 = 25
i=0, j=1, k=2 → arr[0][1][2] = 2   → total = 25 + 2 = 27
i=0, j=1, k=3 → arr[0][1][3] = 10  → total = 27 + 10 = 37

🎯 Return: 37
```

---

<a name="takeaways"></a>

## 🎓 Key Takeaways

### 1. Batas Loop Harus Spesifik

> [!IMPORTANT]
> Batas perulangan berkalang (Nested Loop) pada struktur multidimensional array **tidak selalu seragam**. Kita harus spesifik mengecek ukuran array pada level (dimensi) yang sedang kita singgahi.

**Rumus:**
```javascript
Loop Dimensi 1 → arr.length
Loop Dimensi 2 → arr[i].length
Loop Dimensi 3 → arr[i][j].length
```

---

### 2. Akses Harus Menembus Semua Dimensi

> [!IMPORTANT]
> Untuk mengakses nilai paling dalam pada Array 3D, mutlak diperlukan **3 kombinasi index** berurutan `[i][j][k]`.

**Visualisasi:**
```
arr          → Array 3D
arr[i]       → Array 2D
arr[i][j]    → Array 1D
arr[i][j][k] → Number ✅
```

---

### 3. Penempatan Accumulator Krusial

> [!WARNING]
> Wadah penampung (`total`) harus berada **di luar semua loop**. Jika di dalam loop, nilainya akan ter-reset setiap iterasi.

**Lokasi Benar:**
```javascript
let total = 0;  // ✅ Di luar loop
for (...) {
  for (...) {
    for (...) {
      total += ...;  // Nilai terakumulasi
    }
  }
}
```

---

### 4. Edge Case First

> [!TIP]
> Selalu handle edge case di awal fungsi dengan **Guard Clause**. Ini membuat kode lebih efisien dan robust.

```javascript
if (arr.length === 0) return 'No number';  // ✅ Early return
```

---

## 🎯 Checklist Setelah Implementasi

Setelah menulis kode, pastikan:

- [ ] Edge case ter-handle dengan benar
- [ ] Accumulator berada di luar loop
- [ ] Setiap loop menggunakan batas yang spesifik (`arr[i].length`, `arr[i][j].length`)
- [ ] Akses angka menggunakan 3 index berurutan (`arr[i][j][k]`)
- [ ] Semua test case berhasil (termasuk array kosong)

---

## 💭 Refleksi

**Solusi V1 (Nested Loop)** ini adalah pendekatan **fundamental** yang:
- ✅ Melatih pemahaman tentang cara kerja nested structure
- ✅ Mengajarkan mental model "membuka kotak berlapis"
- ✅ Cocok untuk learning dan technical interview

Namun, ada kelemahan:
- ❌ Tidak scalable untuk kedalaman array yang tidak menentu
- ❌ Jika array-nya 5 dimensi, kita perlu 5 lapis loop (verbose!)

> [!NOTE]
> Di file berikutnya, kita akan explore pendekatan yang lebih modern dan scalable!

---

**📍 Navigasi:**
- ⬅️ [Kembali: Analisis & Blueprint](01-analisis-dan-blueprint.md)
- ➡️ [Lanjut: Evolusi Solusi](03-evolusi-solusi.md)
