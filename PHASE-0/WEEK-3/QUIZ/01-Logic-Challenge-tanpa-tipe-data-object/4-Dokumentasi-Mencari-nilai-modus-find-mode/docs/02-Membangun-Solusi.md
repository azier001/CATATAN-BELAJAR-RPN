# 📚 Find Mode - Part 2: Membangun Solusi

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              🔨 PART 2: MEMBANGUN SOLUSI 🔨                             ║
║                                                                          ║
║                  Proses Diskusi & Bangun cariModus Dari Nol             ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 💡 Ide Awal | 🏗️ Struktur | 💻 Kode | 🧪 Test | 💡 Takeaways |
|:-----------:|:-----------:|:-------:|:-------:|:------------:|
| [Jump](#-ide-awal) | [Jump](#️-struktur-data) | [Jump](#-kode-final) | [Jump](#-test-results) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Membangun solusi step-by-step dari nol
- ✅ Memahami teknik two array tracking
- ✅ Menerapkan logika guard clause
- ✅ Verifikasi solusi dengan test cases

---

## 💡 Ide Awal

### **Langkah Berpikir:**

**1. Looping array**
```
Untuk cari angka yang sering muncul → perlu loop tiap elemen
```

**2. Simpan informasi**
```
Saat looping, perlu catat:
- Angka apa saja yang muncul
- Berapa kali tiap angka muncul
```

**3. Struktur data**
```
Karena hanya boleh pakai array:
→ Dua array yang sinkron indexnya
   - uniqueNumbers[i] → angka unik
   - count[i]         → frekuensi angka tersebut
```

---

## 🏗️ Struktur Data

### **Konsep Two Array Tracking:**

```javascript
// Contoh untuk [10, 4, 5, 2, 4]

uniqueNumbers = [10, 4, 5, 2]
count         = [ 1, 2, 1, 1]

// uniqueNumbers[1] = 4, count[1] = 2
// Artinya: angka 4 muncul 2x → ini modusnya!
```

### **Kenapa harus sinkron?**
```
Index yang sama = pasangan data yang sama
uniqueNumbers[i] ↔ count[i]
```

---

## 💻 Kode Final

```javascript
function cariModus(arr) {
  const uniqueNumbers = []
  const count = []

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueNumbers.includes(arr[i])) {
      uniqueNumbers.push(arr[i])   // angka baru → push
      count.push(1)                // frekuensi awal = 1
    } else {
      const indexAngka = uniqueNumbers.indexOf(arr[i])
      count[indexAngka]++          // angka sudah ada → increment
    }
  }

  const maxCount = Math.max(...count)
  const indexModus = count.indexOf(maxCount)

  // Guard clause: semua muncul 1x atau hanya 1 nilai unik
  if (maxCount === 1 || uniqueNumbers.length === 1) return -1

  return uniqueNumbers[indexModus]
}
```

---

## 🔍 Step-by-Step

**1. Inisialisasi dua array**
```javascript
const uniqueNumbers = []  // menyimpan angka unik
const count = []          // menyimpan frekuensi (sinkron dengan uniqueNumbers)
```

**2. Loop & tracking**
```javascript
if (!uniqueNumbers.includes(arr[i])) {
  // Angka baru → push ke kedua array
  uniqueNumbers.push(arr[i])
  count.push(1)
} else {
  // Angka sudah ada → cari index, lalu increment count-nya
  const indexAngka = uniqueNumbers.indexOf(arr[i])
  count[indexAngka]++
}
```

**3. Cari modus**
```javascript
const maxCount = Math.max(...count)      // frekuensi tertinggi
const indexModus = count.indexOf(maxCount) // index posisi frekuensi tertinggi
```

**4. Guard clause**
```javascript
if (maxCount === 1 || uniqueNumbers.length === 1) return -1
// maxCount === 1        → semua angka muncul 1x
// uniqueNumbers.length === 1 → semua elemen sama (misal [7,7,7,7,7])
```

**5. Return hasil**
```javascript
return uniqueNumbers[indexModus]
// Ambil angka di index yang sama dengan posisi maxCount
```

---

## 🐛 Pitfalls

**1. ❌ count.push(1) di tempat yang salah**
```javascript
// ❌ SALAH
if (!uniqueNumbers.includes(arr[i])) {
  uniqueNumbers.push(arr[i])
} else {
  count.push(1)  // Harusnya di dalam if, bukan else!
}

// ✅ BENAR
if (!uniqueNumbers.includes(arr[i])) {
  uniqueNumbers.push(arr[i])
  count.push(1)  // Bersamaan saat angka baru ditemukan
}
```

**2. ❌ indexOf di array yang salah**
```javascript
// ❌ SALAH
const indexAngka = count.indexOf(arr[i])  // Cari di count, bukan uniqueNumbers

// ✅ BENAR
const indexAngka = uniqueNumbers.indexOf(arr[i])
```

**3. ❌ Guard clause pakai minCount**
```javascript
// ❌ KURANG TEPAT - gagal untuk [1,2,1,2,3,3]
if (maxCount === 1 || maxCount === minCount) return -1

// ✅ BENAR
if (maxCount === 1 || uniqueNumbers.length === 1) return -1
```

**4. ❌ Lupa spread operator**
```javascript
// ❌ SALAH - return NaN
const maxCount = Math.max(count)

// ✅ BENAR
const maxCount = Math.max(...count)
```

---

## 🧪 Test Results

```javascript
console.log(cariModus([10, 4, 5, 2, 4]));   // 4  ✅
console.log(cariModus([5, 10, 10, 6, 5]));  // 5  ✅
console.log(cariModus([10, 3, 1, 2, 5]));   // -1 ✅
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3  ✅
console.log(cariModus([7, 7, 7, 7, 7]));    // -1 ✅
```

```
5/5 PASS ✅
```

---

## 📊 Keywords

- 🗂️ **Two array tracking** - Dua array sinkron untuk pasangan angka-frekuensi
- 🔍 **Array.includes()** - Cek apakah angka sudah ada
- 📍 **Array.indexOf()** - Cari index sebuah nilai
- 📊 **Math.max()** - Cari nilai terbesar
- 🔄 **Spread operator (...)** - Unpack array ke parameter fungsi
- 🛑 **Guard clause** - Early return sebelum proses utama

---

## 💡 Key Takeaways

> **Dua Array Harus Sinkron**  
> `uniqueNumbers[i]` dan `count[i]` selalu merujuk ke pasangan yang sama

> **includes() Dulu, indexOf() Kemudian**  
> Cek keberadaan dulu, baru cari posisinya

> **Guard Clause di Akhir**  
> Hitung maxCount dulu, baru validasi kondisi return -1

> **Spread Operator untuk Math.max**  
> `Math.max(...array)` bukan `Math.max(array)`

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📋 [← Kembali ke Part 1: Pengenalan Soal](01-Pengenalan-Soal.md)**
- **🐛 [Lanjut ke Part 3: Debugging & Perbaikan →](03-Debugging-Perbaikan.md)**

---

<div align="center">

**Siap lihat proses debugging di Part 3?**

Made with ❤️ from real learning session

</div>
