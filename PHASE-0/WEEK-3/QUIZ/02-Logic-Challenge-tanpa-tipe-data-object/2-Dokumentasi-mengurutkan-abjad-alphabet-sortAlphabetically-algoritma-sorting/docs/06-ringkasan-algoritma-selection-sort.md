# 📚 Algoritma Sorting - PART 6: RINGKASAN ALGORITMA SELECTION SORT

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        📋 PART 6: RINGKASAN ALGORITMA SELECTION SORT 📋                 ║
║                                                                          ║
║              Complete Reference — Step-by-Step & Keywords                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Algorithm](https://img.shields.io/badge/Algorithm-Selection%20Sort-orange?style=for-the-badge)

---

## 🎯 Tujuan

- ✅ Ringkasan algoritma Selection Sort secara detail
- ✅ Visualisasi lengkap cara kerja
- ✅ Pitfalls dan insight penting
- ✅ Quick reference untuk review atau belajar ulang

---

═══════════════════════════════════════════════════════════════════════

# 🎯 SELECTION SORT

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Data%20Acak-green?style=flat-square)
![Complexity](https://img.shields.io/badge/Complexity-O(n²)-blue?style=flat-square)
![Swap](https://img.shields.io/badge/Swap-Maksimal%201x%20per%20pass-orange?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const sortAlphabetically = (inputString) => {
  const characters = inputString.split('')
  const length = characters.length

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < length; j++) {
      if (characters[j] < characters[minIndex]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      let temp = characters[i]
      characters[i] = characters[minIndex]
      characters[minIndex] = temp
    }
  }

  return characters.join('')
}
```

</details>

### **Konsep Inti:**
```
Ubah string menjadi array karakter
Loop dari 0 sampai length - 1 (pass)
  Asumsikan posisi i adalah yang terkecil (minIndex = i)
  Loop dari i + 1 sampai length (cari terkecil)
    Jika ketemu yang lebih kecil → update minIndex
  Jika minIndex berubah → swap posisi i dengan minIndex
Gabung array kembali menjadi string
```

### **Step-by-Step (Detail):**

#### 🔵 Deklarasi Fungsi:
1. **`const sortAlphabetically = (inputString)`** — fungsi utama, menerima string dan mengembalikan string yang sudah terurut secara alfabetikal

#### 🔵 Di Luar Loop:
2. **`const characters = inputString.split('')`** — ubah string menjadi array karakter agar bisa dimanipulasi
3. **`const length = characters.length`** — simpan panjang array

#### 🔄 Di Dalam Loop Luar `for (let i = 0; i < length - 1; i++)`:
4. **Kondisi loop** — mulai `i = 0`, berjalan selama `i < length - 1`, increment `i++`
5. **`let minIndex = i`** — asumsikan posisi `i` adalah karakter terkecil, akan diupdate jika ditemukan yang lebih kecil

#### 🔄 Di Dalam Loop Dalam `for (let j = i + 1; j < length; j++)`:
6. **Kondisi loop** — mulai `j = i + 1` agar tidak bandingkan posisi `i` dengan dirinya sendiri, berjalan sampai `j < length` agar semua elemen tersisa dicek, increment `j++`
7. **`if (characters[j] < characters[minIndex])`** — bandingkan karakter di posisi `j` dengan karakter terkecil yang ditemukan sejauh ini
8. **`minIndex = j`** — jika ketemu yang lebih kecil, update `minIndex` ke posisi `j`

#### 🔵 Di Luar Loop Dalam, Masih Di Dalam Loop Luar:
9. **`if (minIndex !== i)`** — cek apakah terkecil bukan di posisi `i`. Jika `minIndex` tidak berubah berarti posisi `i` sudah yang terkecil dan tidak perlu swap
10. **Swap dengan `temp`** — tukar posisi `i` dengan posisi `minIndex`:
    - **`let temp = characters[i]`** — simpan nilai posisi `i` ke `temp` agar tidak hilang
    - **`characters[i] = characters[minIndex]`** — isi posisi `i` dengan karakter terkecil
    - **`characters[minIndex] = temp`** — isi posisi `minIndex` dengan nilai lama posisi `i`

#### 🔵 Di Luar Loop:
11. **`return characters.join('')`** — gabung array kembali menjadi string

### **Visualisasi untuk `inputString = 'dcba'`:**
```
┌─────────────────────────────────────────────────────────────┐
│  characters = ['d','c','b','a']                             │
│                                                             │
│  Pass 1 (i=0), minIndex=0:                                 │
│    j=1: 'c' < 'd' ✅ → minIndex = 1                        │
│    j=2: 'b' < 'c' ✅ → minIndex = 2                        │
│    j=3: 'a' < 'b' ✅ → minIndex = 3                        │
│    minIndex(3) ≠ i(0) → swap index 0 & 3                   │
│    ['a','c','b','d']  ← 'a' terkunci ✅                     │
│                                                             │
│  Pass 2 (i=1), minIndex=1:                                 │
│    j=2: 'b' < 'c' ✅ → minIndex = 2                        │
│    j=3: 'd' < 'b' ❌ → skip                                │
│    minIndex(2) ≠ i(1) → swap index 1 & 2                   │
│    ['a','b','c','d']  ← 'b' terkunci ✅                     │
│                                                             │
│  Pass 3 (i=2), minIndex=2:                                 │
│    j=3: 'd' < 'c' ❌ → skip                                │
│    minIndex(2) = i(2) → tidak perlu swap! ✅                │
│    ['a','b','c','d']                                        │
│                                                             │
│  return 'abcd' ✅                                           │
└─────────────────────────────────────────────────────────────┘
```

### **Keywords:**

| Keyword | Penjelasan |
|---------|-----------|
| 🔤 **split('')** | Konversi string ke array agar karakter bisa dimanipulasi |
| 🎯 **minIndex** | Penanda posisi karakter terkecil yang ditemukan di setiap pass |
| 🔁 **j = i + 1** | Loop dalam selalu mulai setelah posisi `i` agar tidak bandingkan elemen dengan dirinya sendiri |
| 📏 **j < length** | Berbeda dengan Bubble Sort, loop dalam harus cek sampai elemen terakhir |
| 🔃 **temp** | Variabel sementara wajib untuk swap tanpa kehilangan nilai |
| ✅ **minIndex !== i** | Optimasi agar tidak swap sia-sia jika posisi `i` sudah yang terkecil |
| ⏱️ **O(n²)** | Complexity worst case dan best case sama karena tetap harus cek semua elemen |

### **Kapan Pakai:**
- ✅ Data acak yang perlu diurutkan
- ✅ Ingin meminimalkan jumlah swap (maksimal 1x per pass)
- ✅ Memory terbatas karena swap dilakukan in-place

### **Pitfalls (Jebakan Umum):**

**1) ❌ Bandingkan `characters[j]` dengan `characters[j + 1]` bukan `characters[minIndex]`**
```javascript
// ❌ SALAH — ini cara Bubble Sort, bukan Selection Sort!
if (characters[j] < characters[j + 1]) {
  minIndex = j
}

// ✅ BENAR — bandingkan dengan terkecil yang sudah ditemukan
if (characters[j] < characters[minIndex]) {
  minIndex = j
}
```

**2) ❌ Loop dalam sampai `length - i - 1` bukan `length`**
```javascript
// ❌ SALAH — elemen terakhir tidak dicek, bisa jadi dia yang terkecil!
for (let j = i + 1; j < length - i - 1; j++)

// ✅ BENAR — cek semua elemen tersisa
for (let j = i + 1; j < length; j++)
```

**3) ❌ Loop dalam mulai dari `0` bukan `i + 1`**
```javascript
// ❌ SALAH — elemen yang sudah terkunci di kiri ikut dibandingkan lagi
for (let j = 0; j < length; j++)

// ✅ BENAR — mulai dari i + 1, elemen sebelum i sudah terkunci
for (let j = i + 1; j < length; j++)
```

**4) ❌ Langsung swap tanpa cek `minIndex !== i`**
```javascript
// ❌ KURANG OPTIMAL — swap sia-sia meski posisi i sudah yang terkecil
let temp = characters[i]
characters[i] = characters[minIndex]
characters[minIndex] = temp

// ✅ LEBIH OPTIMAL — cek dulu sebelum swap
if (minIndex !== i) {
  let temp = characters[i]
  characters[i] = characters[minIndex]
  characters[minIndex] = temp
}
```

### **💡 Insight Penting:**

> **Kenapa Selection Sort tidak punya early stop seperti Bubble Sort?**
> Karena Selection Sort harus selalu mencari terkecil dari seluruh sisa array di setiap pass. Tidak ada cara untuk tahu apakah array sudah terurut tanpa memeriksa semua elemen. Makanya complexity-nya selalu O(n²) baik worst maupun best case.

> **Kenapa swap pakai `i` dan `minIndex`, bukan `j` dan `j+1`?**
> Karena Selection Sort bekerja dengan menemukan **posisi terkecil** terlebih dahulu, lalu menukarnya dengan **posisi yang sedang diisi** (`i`). Berbeda dengan Bubble Sort yang langsung swap saat ketemu pasangan yang salah urut.

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES

═══════════════════════════════════════════════════════════════════════

```javascript
const sortAlphabetically = (inputString) => {
  const characters = inputString.split('')
  const length = characters.length

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < length; j++) {
      if (characters[j] < characters[minIndex]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      let temp = characters[i]
      characters[i] = characters[minIndex]
      characters[minIndex] = temp
    }
  }

  return characters.join('')
}

const testCases = [
  { input: 'hello', expected: 'ehllo', desc: "Mengurutkan 'hello'" },
  { input: 'truncate', expected: 'acenrttu', desc: "Mengurutkan 'truncate'" },
  { input: 'developer', expected: 'deeeloprv', desc: "Mengurutkan 'developer'" },
  { input: 'software', expected: 'aeforstw', desc: "Mengurutkan 'software'" },
  { input: 'aegis', expected: 'aegis', desc: "Sudah terurut dari awal" },
  { input: '', expected: '', desc: "String kosong" },
  { input: 'a', expected: 'a', desc: "Satu huruf saja" },
  { input: 'aaaa', expected: 'aaaa', desc: "Semua huruf sama" },
  { input: 'dcba', expected: 'abcd', desc: "Urutan terbalik penuh" },
]

testCases.forEach(({ input, expected, desc }, index) => {
  const result = sortAlphabetically(input)
  const status = result === expected ? '✅ PASS' : '❌ FAIL'

  console.log(
    `Test Case #${index + 1}: ${status} - ${desc} | sortAlphabetically('${input}') = '${result}'`
  )

  if (status === '❌ FAIL') {
    console.log('Input   :', input)
    console.log('Expected:', expected)
    console.log('Result  :', result)
  }
})

// Hasil: 9/9 ✅ PASS
```

---

## 🔑 Key Takeaways

```
┌─────────────────────────────────────────────────────────────────────┐
│  💡 Selection Sort Selalu O(n²)                                     │
│     Tidak ada early stop — harus cek semua elemen di setiap pass    │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Maksimal 1x Swap per Pass                                       │
│     Lebih sedikit swap dibanding Bubble Sort di data acak           │
├─────────────────────────────────────────────────────────────────────┤
│  💡 minIndex adalah Kunci                                           │
│     Selalu inisialisasi dengan i, update jika ketemu yang lebih kecil│
├─────────────────────────────────────────────────────────────────────┤
│  💡 Loop Dalam Sampai length, Bukan length - i - 1                  │
│     Harus cek semua elemen tersisa untuk memastikan dapat terkecil  │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Cek minIndex !== i Sebelum Swap                                 │
│     Hindari swap sia-sia jika posisi i sudah yang terkecil          │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 5: Alternatif Selection Sort](05-alternatif-selection-sort.md)**
- **📖 [Lanjut ke Part 7: Alternatif Insertion Sort →](07-alternatif-insertion-sort.md)**

---

<div align="center">

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
