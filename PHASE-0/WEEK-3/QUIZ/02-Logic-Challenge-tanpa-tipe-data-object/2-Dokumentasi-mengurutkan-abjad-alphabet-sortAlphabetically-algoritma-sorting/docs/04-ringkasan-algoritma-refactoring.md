# 📚 Algoritma Sorting - PART 4: RINGKASAN ALGORITMA REFACTORING

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        📋 PART 4: RINGKASAN ALGORITMA REFACTORING 📋                    ║
║                                                                          ║
║         Single Function · Multi Function · Perbandingan Lengkap          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Versi](https://img.shields.io/badge/Versi-2%20Solusi-success?style=for-the-badge)

---

## 🎯 Tujuan

- ✅ Ringkasan algoritma Bubble Sort versi Single Function
- ✅ Ringkasan algoritma Bubble Sort versi Multi Function
- ✅ Quick reference untuk review atau belajar ulang

---

═══════════════════════════════════════════════════════════════════════

# 🔷 VERSI 1: SINGLE FUNCTION

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Pemula%20%7C%20Belajar-green?style=flat-square)
![Complexity](https://img.shields.io/badge/Complexity-O(n²)-blue?style=flat-square)
![Style](https://img.shields.io/badge/Style-Single%20Function-orange?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const sortAlphabetically = (inputString) => {
  const characters = inputString.split('')
  const length = characters.length

  for (let i = 0; i < length - 1; i++) {
    let swapped = false

    for (let j = 0; j < length - i - 1; j++) {
      if (characters[j] > characters[j + 1]) {
        let temp = characters[j]
        characters[j] = characters[j + 1]
        characters[j + 1] = temp

        swapped = true
      }
    }

    if (!swapped) break
  }

  return characters.join('')
}
```

</details>

### **Konsep Inti:**
```
Ubah string menjadi array karakter
Loop dari 0 sampai length - 1 (pass)
  Loop dari 0 sampai length - i - 1 (perbandingan)
    Jika karakter kiri > karakter kanan → tukar posisi (swap)
    Tandai bahwa ada swap
  Jika tidak ada swap → berhenti lebih awal
Gabung array kembali menjadi string
```

### **Step-by-Step (Detail):**

#### 🔵 Deklarasi Fungsi:
1. **`const sortAlphabetically = (inputString)`** — nama fungsi dalam bahasa Inggris, deskriptif sesuai tugasnya yaitu mengurutkan secara alfabetikal
2. **`inputString`** — nama parameter menjelaskan bahwa input yang diterima adalah sebuah string

#### 🔵 Di Luar Loop:
3. **`const characters = inputString.split('')`** — ubah string menjadi array karakter agar bisa di-swap
4. **`const length = characters.length`** — simpan panjang array

#### 🔄 Di Dalam Loop Luar `for (let i = 0; i < length - 1; i++)`:
5. **Kondisi loop** — mulai `i = 0`, berjalan selama `i < length - 1`, increment `i++`
6. **`let swapped = false`** — reset penanda swap di setiap pass

#### 🔄 Di Dalam Loop Dalam `for (let j = 0; j < length - i - 1; j++)`:
7. **Kondisi loop** — `length - i - 1` memastikan elemen yang sudah terkunci di akhir tidak dibandingkan lagi
8. **`if (characters[j] > characters[j + 1])`** — bandingkan dua karakter bersebelahan secara alfabetikal
9. **Swap dengan `temp`** — tukar posisi dua karakter menggunakan variabel sementara:
   - **`let temp = characters[j]`** — simpan nilai kiri ke `temp` agar tidak hilang saat ditimpa
   - **`characters[j] = characters[j + 1]`** — timpa posisi kiri dengan nilai kanan
   - **`characters[j + 1] = temp`** — isi posisi kanan dengan nilai kiri yang disimpan di `temp`
10. **`swapped = true`** — tandai bahwa ada pertukaran di pass ini

#### 🔵 Di Luar Loop Dalam, Masih Di Dalam Loop Luar:
11. **`if (!swapped) break`** — jika satu pass penuh tanpa swap → array sudah urut → berhenti lebih awal

#### 🔵 Di Luar Loop:
12. **`return characters.join('')`** — gabung array kembali menjadi string

### **Visualisasi untuk `inputString = 'dcba'`:**
```
┌─────────────────────────────────────────────────────────────┐
│  characters = ['d','c','b','a']                             │
│                                                             │
│  Pass 1 (i=0):                                             │
│    j=0: 'd' > 'c' ✅ → swap → ['c','d','b','a']           │
│    j=1: 'd' > 'b' ✅ → swap → ['c','b','d','a']           │
│    j=2: 'd' > 'a' ✅ → swap → ['c','b','a','d']           │
│    swapped=true → lanjut                                    │
│                                                             │
│  Pass 2 (i=1):                                             │
│    j=0: 'c' > 'b' ✅ → swap → ['b','c','a','d']           │
│    j=1: 'c' > 'a' ✅ → swap → ['b','a','c','d']           │
│    swapped=true → lanjut                                    │
│                                                             │
│  Pass 3 (i=2):                                             │
│    j=0: 'b' > 'a' ✅ → swap → ['a','b','c','d']           │
│    swapped=true → lanjut                                    │
│                                                             │
│  Pass 4 (i=3):                                             │
│    j=0: 'a' > 'b' ❌ → skip                                │
│    swapped=false → BREAK! ✅                                │
│                                                             │
│  return 'abcd' ✅                                           │
└─────────────────────────────────────────────────────────────┘
```

### **Keywords:**

| Keyword | Penjelasan |
|---------|-----------|
| 🔤 **split('')** | Konversi string ke array agar karakter bisa dimanipulasi |
| 🔄 **swapped** | Flag optimasi early stop agar tidak loop sia-sia |
| 🔁 **length - i - 1** | Setiap pass, elemen terakhir terkunci sehingga tidak perlu dibandingkan ulang |
| 🔃 **temp** | Variabel sementara wajib untuk swap tanpa kehilangan nilai |
| 🔤 **join('')** | Konversi array kembali ke string |
| ⏱️ **O(n²)** | Complexity worst case — O(n) best case jika sudah terurut |

### **Kapan Pakai:**
- ✅ Baru belajar algoritma sorting
- ✅ Ingin melihat semua logika dalam satu fungsi
- ✅ Butuh kode yang mudah di-debug

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa `split('')` — langsung sort string**
```javascript
// ❌ SALAH — string immutable, tidak bisa diubah langsung
for (let j = 0; j < length - i - 1; j++) {
  if (str[j] > str[j + 1]) {
    let temp = str[j]
    str[j] = str[j + 1]  // tidak berpengaruh!
  }
}

// ✅ BENAR — konversi ke array dulu
const characters = inputString.split('')
```

**2) ❌ Swap tanpa `temp`**
```javascript
// ❌ SALAH — nilai hilang!
characters[j] = characters[j + 1]
characters[j + 1] = characters[j]  // characters[j] sudah berubah!

// ✅ BENAR
let temp = characters[j]
characters[j] = characters[j + 1]
characters[j + 1] = temp
```

**3) ❌ Loop dalam sampai `length - 1` bukan `length - i - 1`**
```javascript
// ❌ KURANG OPTIMAL — elemen yang sudah terkunci tetap dibandingkan
for (let j = 0; j < length - 1; j++)

// ✅ LEBIH OPTIMAL — elemen terkunci dilewati
for (let j = 0; j < length - i - 1; j++)
```

**4) ❌ Lupa reset `swapped = false` di tiap pass**
```javascript
// ❌ SALAH — swapped tetap true dari pass sebelumnya
let swapped = false  // di luar loop luar

// ✅ BENAR — reset di tiap pass
for (let i = 0; i < length - 1; i++) {
  let swapped = false  // di dalam loop luar
}
```

### **💡 Insight Penting:**

> **Kenapa string harus di-split dulu?**
> String di JavaScript bersifat **immutable** — karakternya tidak bisa diubah langsung. `str[0] = 'x'` tidak menghasilkan error, tapi juga tidak mengubah string. Solusinya konversi ke array dengan `.split('')`, manipulasi array, lalu konversi balik dengan `.join('')`.

> **Kenapa `swapped` direset di tiap pass?**
> Karena kita ingin tahu apakah ada swap di pass **saat ini**. Kalau tidak direset, nilai `true` dari pass sebelumnya akan membuat loop terus berjalan meskipun array sudah urut.

---

═══════════════════════════════════════════════════════════════════════

# 🔶 VERSI 2: MULTI FUNCTION

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Clean%20Code%20%7C%20Reusable-purple?style=flat-square)
![Complexity](https://img.shields.io/badge/Complexity-O(n²)-blue?style=flat-square)
![Style](https://img.shields.io/badge/Style-Single%20Responsibility-brightgreen?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const swapCharacters = (characters, leftIndex, rightIndex) => {
  let temp = characters[leftIndex]
  characters[leftIndex] = characters[rightIndex]
  characters[rightIndex] = temp
}

const bubbleSort = (characters) => {
  const length = characters.length

  for (let i = 0; i < length - 1; i++) {
    let swapped = false

    for (let j = 0; j < length - i - 1; j++) {
      if (characters[j] > characters[j + 1]) {
        swapCharacters(characters, j, j + 1)
        swapped = true
      }
    }

    if (!swapped) break
  }
}

const sortAlphabetically = (inputString) => {
  const characters = inputString.split('')
  bubbleSort(characters)
  return characters.join('')
}
```

</details>

### **Konsep Inti:**
```
Ubah string menjadi array karakter
Panggil bubbleSort untuk mengurutkan array
  Loop dari 0 sampai length - 1 (pass)
    Loop dari 0 sampai length - i - 1 (perbandingan)
      Jika karakter kiri > karakter kanan → panggil swapCharacters
      Tandai bahwa ada swap
    Jika tidak ada swap → berhenti lebih awal
Gabung array kembali menjadi string
```

### **Step-by-Step (Detail):**

#### 🔵 Deklarasi Fungsi:
1. **`const swapCharacters = (characters, leftIndex, rightIndex)`** — fungsi khusus untuk menukar dua elemen array, menerima array dan dua index yang ingin ditukar
2. **`const bubbleSort = (characters)`** — fungsi khusus untuk logika sorting, menerima array karakter
3. **`const sortAlphabetically = (inputString)`** — fungsi utama, menerima string dan mengembalikan string yang sudah terurut

#### 🔵 Di Dalam `swapCharacters`:
4. **`let temp = characters[leftIndex]`** — simpan nilai kiri ke `temp` agar tidak hilang saat ditimpa
5. **`characters[leftIndex] = characters[rightIndex]`** — timpa posisi kiri dengan nilai kanan
6. **`characters[rightIndex] = temp`** — isi posisi kanan dengan nilai kiri yang disimpan di `temp`
7. **Tidak ada `return`** — array dikirim by reference, perubahan langsung mempengaruhi array asli

#### 🔵 Di Luar Loop `bubbleSort`:
8. **`const length = characters.length`** — simpan panjang array

#### 🔄 Di Dalam Loop Luar `for (let i = 0; i < length - 1; i++)`:
9. **Kondisi loop** — mulai `i = 0`, berjalan selama `i < length - 1`, increment `i++`
10. **`let swapped = false`** — reset penanda swap di setiap pass

#### 🔄 Di Dalam Loop Dalam `for (let j = 0; j < length - i - 1; j++)`:
11. **Kondisi loop** — `length - i - 1` memastikan elemen yang sudah terkunci di akhir tidak dibandingkan lagi
12. **`if (characters[j] > characters[j + 1])`** — bandingkan dua karakter bersebelahan secara alfabetikal
13. **`swapCharacters(characters, j, j + 1)`** — panggil fungsi swap dengan array dan dua index yang ingin ditukar
14. **`swapped = true`** — tandai bahwa ada pertukaran di pass ini

#### 🔵 Di Luar Loop Dalam, Masih Di Dalam Loop Luar:
15. **`if (!swapped) break`** — jika satu pass penuh tanpa swap → array sudah urut → berhenti lebih awal

#### 🔵 Di Dalam `sortAlphabetically`:
16. **`const characters = inputString.split('')`** — ubah string menjadi array karakter
17. **`bubbleSort(characters)`** — panggil bubbleSort, array berubah langsung by reference tanpa perlu return
18. **`return characters.join('')`** — gabung array kembali menjadi string

### **Visualisasi untuk `inputString = 'dcba'`:**
```
┌─────────────────────────────────────────────────────────────┐
│  sortAlphabetically('dcba')                                 │
│    characters = ['d','c','b','a']                           │
│    bubbleSort(characters) ──▶ (by reference)                │
│                                                             │
│      Pass 1 (i=0):                                         │
│        j=0: 'd'>'c' ✅ → swapCharacters(arr, 0, 1)         │
│             ['c','d','b','a']                               │
│        j=1: 'd'>'b' ✅ → swapCharacters(arr, 1, 2)         │
│             ['c','b','d','a']                               │
│        j=2: 'd'>'a' ✅ → swapCharacters(arr, 2, 3)         │
│             ['c','b','a','d']                               │
│                                                             │
│      Pass 2 (i=1):                                         │
│        j=0: 'c'>'b' ✅ → swapCharacters(arr, 0, 1)         │
│             ['b','c','a','d']                               │
│        j=1: 'c'>'a' ✅ → swapCharacters(arr, 1, 2)         │
│             ['b','a','c','d']                               │
│                                                             │
│      Pass 3 (i=2):                                         │
│        j=0: 'b'>'a' ✅ → swapCharacters(arr, 0, 1)         │
│             ['a','b','c','d']                               │
│                                                             │
│      Pass 4 (i=3):                                         │
│        swapped=false → BREAK! ✅                            │
│                                                             │
│    characters = ['a','b','c','d'] (sudah berubah!)         │
│    return 'abcd' ✅                                         │
└─────────────────────────────────────────────────────────────┘
```

### **Keywords:**

| Keyword | Penjelasan |
|---------|-----------|
| 🔤 **split('')** | Konversi string ke array agar karakter bisa dimanipulasi |
| 📦 **by reference** | Array dikirim sebagai alamat memori, perubahan di dalam fungsi langsung mempengaruhi array asli |
| 🔄 **swapped** | Flag optimasi early stop agar tidak loop sia-sia |
| 🔁 **length - i - 1** | Setiap pass, elemen terakhir terkunci sehingga tidak perlu dibandingkan ulang |
| 🔃 **temp** | Variabel sementara wajib untuk swap tanpa kehilangan nilai |
| 🏗️ **Single Responsibility** | Setiap fungsi hanya punya satu tanggung jawab |
| 🔤 **join('')** | Konversi array kembali ke string |
| ⏱️ **O(n²)** | Complexity worst case — O(n) best case jika sudah terurut |

### **Kapan Pakai:**
- ✅ Ingin menerapkan prinsip Single Responsibility
- ✅ Ingin fungsi swap yang reusable
- ✅ Kode yang lebih mudah di-maintain dan di-test

### **Pitfalls (Jebakan Umum):**

**1) ❌ Return array di `swapCharacters`**
```javascript
// ❌ TIDAK PERLU — array sudah berubah by reference
const swapCharacters = (characters, leftIndex, rightIndex) => {
  let temp = characters[leftIndex]
  characters[leftIndex] = characters[rightIndex]
  characters[rightIndex] = temp
  return characters  // tidak diperlukan
}

// ✅ BENAR — cukup tanpa return
const swapCharacters = (characters, leftIndex, rightIndex) => {
  let temp = characters[leftIndex]
  characters[leftIndex] = characters[rightIndex]
  characters[rightIndex] = temp
}
```

**2) ❌ Tidak memanfaatkan hasil by reference**
```javascript
// ❌ SALAH — bubbleSort tidak return apapun!
const sortAlphabetically = (inputString) => {
  const characters = inputString.split('')
  const sorted = bubbleSort(characters)
  return sorted.join('')  // sorted = undefined!
}

// ✅ BENAR — manfaatkan by reference
const sortAlphabetically = (inputString) => {
  const characters = inputString.split('')
  bubbleSort(characters)  // characters langsung berubah
  return characters.join('')
}
```

### **💡 Insight Penting:**

> **Kenapa tidak perlu `return` di `swapCharacters` dan `bubbleSort`?**
> Array di JavaScript dikirim sebagai **reference** — artinya fungsi menerima alamat memori array, bukan salinannya. Perubahan di dalam fungsi langsung mempengaruhi array aslinya. Berbeda dengan tipe primitif (`number`, `string`, `boolean`) yang dikirim by value (salinan).

> **Apa keuntungan memecah jadi 3 fungsi?**
> **Single Responsibility** — setiap fungsi punya satu tanggung jawab. `swapCharacters` hanya swap, `bubbleSort` hanya sort, `sortAlphabetically` hanya konversi. Kode jadi lebih mudah dibaca, ditest, dan jika ada bug lebih mudah ditemukan.

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES

═══════════════════════════════════════════════════════════════════════

```javascript
// Ganti dengan versi yang ingin ditest:
// Versi 1 — Single Function
// Versi 2 — Multi Function (swapCharacters + bubbleSort + sortAlphabetically)

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

═══════════════════════════════════════════════════════════════════════

# 📊 PERBANDINGAN LENGKAP

═══════════════════════════════════════════════════════════════════════

| Aspek | 🔷 Single Function | 🔶 Multi Function |
|-------|:-----------------:|:----------------:|
| Jumlah fungsi | 1 | 3 |
| Swap | Inline di dalam loop | Fungsi terpisah `swapCharacters` |
| Sorting | Campur dengan konversi | Fungsi terpisah `bubbleSort` |
| Single Responsibility | ❌ | ✅ |
| Reusability | ❌ | ✅ `swapCharacters` bisa dipakai ulang |
| Kompleksitas waktu | O(n²) / O(n) best | O(n²) / O(n) best |
| Cocok untuk | Belajar, debugging | Clean code, production |

---

## 🎯 Decision Tree

```
Apakah kamu baru belajar sorting?
│
├── YA ──▶ 🔷 Single Function
│           Semua logika dalam satu tempat,
│           mudah dibaca dari atas ke bawah
│
└── TIDAK ──▶ Apakah kamu peduli clean code & reusability?
               │
               └── YA ──▶ 🔶 Multi Function
                           Single Responsibility,
                           setiap fungsi punya satu tugas

Default: 🔶 Multi Function — lebih scalable dan maintainable ✅
```

---

## 🔑 Key Takeaways

```
┌─────────────────────────────────────────────────────────────────────┐
│  💡 Kedua Versi Menghasilkan Output yang Sama                       │
│     Perbedaan hanya pada struktur dan prinsip desain                │
├─────────────────────────────────────────────────────────────────────┤
│  💡 String Immutable, Array Mutable                                 │
│     Selalu split dulu sebelum sorting, join setelah selesai         │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Array Pass by Reference                                         │
│     Fungsi yang menerima array tidak perlu return                   │
│     karena perubahan langsung mempengaruhi array asli               │
├─────────────────────────────────────────────────────────────────────┤
│  💡 swapped Flag = Optimasi Penting                                 │
│     Tanpanya, Bubble Sort selalu O(n²) meski array sudah urut       │
│     Dengan swapped, best case menjadi O(n)                          │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Single Responsibility Membuat Kode Lebih Baik                   │
│     Satu fungsi, satu tanggung jawab — mudah dibaca & di-maintain   │
└─────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

## 🎯 Quick Reference Card

| Versi | Struktur | Highlight |
|-------|----------|-----------|
| 🔷 **Single Function** | `split` → `for loop` → `swap inline` → `join` | Mudah dipelajari |
| 🔶 **Multi Function** | `split` → `bubbleSort()` → `swapCharacters()` → `join` | Clean & reusable |

---

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
