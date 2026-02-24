# 📋 Algoritma Sorting — Ringkasan Semua Versi

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          📋 RINGKASAN ALGORITMA — COMPLETE REFERENCE 📋                 ║
║     Bubble Sort · Selection Sort · Insertion Sort · Semua Versi          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-30%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Versi](https://img.shields.io/badge/Versi-4%20Solusi-success?style=for-the-badge)

---

## 🎯 Tujuan

- ✅ Ringkasan challenge dan kriteria dalam satu tempat
- ✅ Ringkasan algoritma semua versi secara detail
- ✅ Quick reference untuk review atau belajar ulang

---

# 🧩 DESKRIPSI CHALLENGE

📝 **Deskripsi**
Diberikan sebuah function `sortAlphabetically(inputString)` yang menerima satu parameter berupa string.

🎯 **Tujuan**
Function akan mengembalikan string yang sama dengan karakter-karakternya sudah diurutkan secara **alfabetikal** dari A ke Z, tanpa menggunakan method `.sort()` bawaan JavaScript.

📌 **Contoh:** `inputString = 'hello'`
⚡ **Karakter:** `['h','e','l','l','o']`
✅ **Hasil:** `['e','h','l','l','o']` → **'ehllo'** ← RETURN INI

## 📐 Kriteria

```
  STEP 1 ──▶  Ubah string menjadi array karakter (.split(''))
      │
  STEP 2 ──▶  Urutkan array menggunakan algoritma sorting sendiri
      │        (DILARANG menggunakan .sort())
      │
  STEP 3 ──▶  Gabung array kembali menjadi string (.join(''))
      │
  STEP 4 ──▶  Return string yang sudah terurut
```

---

## 📊 Contoh-contoh

### 🔤 inputString = 'hello'
> **Tujuan:** Mengurutkan karakter string biasa

| 🔢 Langkah | 📝 Proses | |
|-----------|----------|-|
| Input | `'hello'` | |
| Split | `['h','e','l','l','o']` | |
| Sort | `['e','h','l','l','o']` | ✅ urut |
| Join | `'ehllo'` | ✅ return ini |

```
RETURN  →  'ehllo'
```

---

### 🔤 inputString = 'developer'
> **Tujuan:** Mengurutkan dengan karakter duplikat

| 🔢 Langkah | 📝 Proses | |
|-----------|----------|-|
| Input | `'developer'` | |
| Split | `['d','e','v','e','l','o','p','e','r']` | |
| Sort | `['d','e','e','e','l','o','p','r','v']` | ✅ urut |
| Join | `'deeeloprv'` | ✅ return ini |

```
RETURN  →  'deeeloprv'
```

---

### 🔤 inputString = 'aegis' *(sudah terurut)*
> **Tujuan:** String yang sudah terurut tidak berubah

| 🔢 Langkah | 📝 Proses | |
|-----------|----------|-|
| Input | `'aegis'` | |
| Split | `['a','e','g','i','s']` | |
| Sort | `['a','e','g','i','s']` | ✅ tidak berubah |
| Join | `'aegis'` | ✅ return ini |

```
RETURN  →  'aegis'
```

---

### 🔤 Edge Cases
| 🔢 Input | 📝 Kondisi | ✅ Output |
|---------|-----------|----------|
| `''` | String kosong | `''` |
| `'a'` | Satu karakter | `'a'` |
| `'aaaa'` | Semua karakter sama | `'aaaa'` |
| `'dcba'` | Urutan terbalik penuh | `'abcd'` |

---

## 🧪 Test Cases Standar

```javascript
// Basic cases
console.log(sortAlphabetically('hello'));      // 'ehllo'
console.log(sortAlphabetically('truncate'));   // 'acenrttu'
console.log(sortAlphabetically('developer'));  // 'deeeloprv'
console.log(sortAlphabetically('software'));   // 'aeforstw'
console.log(sortAlphabetically('aegis'));      // 'aegis'

// Edge cases
console.log(sortAlphabetically(''));           // ''
console.log(sortAlphabetically('a'));          // 'a'
console.log(sortAlphabetically('aaaa'));       // 'aaaa'
console.log(sortAlphabetically('dcba'));       // 'abcd'
```

---

> 💡 **Kunci Penting:** String di JavaScript bersifat **immutable** — tidak bisa diubah langsung. Harus di-split ke array dulu, dimanipulasi, lalu di-join kembali.

---

═══════════════════════════════════════════════════════════════════════

# 🔷 VERSI 1: BUBBLE SORT — SINGLE FUNCTION

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Pemula%20%7C%20Belajar-green?style=flat-square)
![Complexity](https://img.shields.io/badge/Complexity-O(n²)%20%2F%20O(n)%20best-blue?style=flat-square)
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

# 🔶 VERSI 2: BUBBLE SORT — MULTI FUNCTION

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Clean%20Code%20%7C%20Reusable-purple?style=flat-square)
![Complexity](https://img.shields.io/badge/Complexity-O(n²)%20%2F%20O(n)%20best-blue?style=flat-square)
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
│      Pass 4: swapped=false → BREAK! ✅                      │
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

# 🎯 VERSI 3: SELECTION SORT

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

**3) ❌ Langsung swap tanpa cek `minIndex !== i`**
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

# 🃏 VERSI 4: INSERTION SORT

═══════════════════════════════════════════════════════════════════════

![Best For](https://img.shields.io/badge/Best%20For-Data%20Hampir%20Terurut-green?style=flat-square)
![Complexity](https://img.shields.io/badge/Complexity-O(n²)%20%2F%20O(n)%20best-blue?style=flat-square)
![Mechanism](https://img.shields.io/badge/Mechanism-Geser%20(Shift)-purple?style=flat-square)

### **Code:**

<details>
<summary>Lihat Kode (klik untuk expand)</summary>

```javascript
const sortAlphabetically = (inputString) => {
  const characters = inputString.split('')
  const length = characters.length

  for (let i = 1; i < length; i++) {
    const current = characters[i]

    let j = i - 1

    while (j >= 0 && characters[j] > current) {
      characters[j + 1] = characters[j]
      j--
    }

    characters[j + 1] = current
  }

  return characters.join('')
}
```

</details>

### **Konsep Inti:**
```
Ubah string menjadi array karakter
Loop dari index 1 sampai length (ambil satu karakter per pass)
  Simpan karakter saat ini sebagai current
  Mundur ke kiri selama karakter kiri lebih besar dari current
    Geser karakter kiri ke kanan (buat ruang)
  Sisipkan current di posisi yang tepat
Gabung array kembali menjadi string
```

### **Step-by-Step (Detail):**

#### 🔵 Deklarasi Fungsi:
1. **`const sortAlphabetically = (inputString)`** — fungsi utama, menerima string dan mengembalikan string yang sudah terurut secara alfabetikal

#### 🔵 Di Luar Loop:
2. **`const characters = inputString.split('')`** — ubah string menjadi array karakter agar bisa dimanipulasi
3. **`const length = characters.length`** — simpan panjang array

#### 🔄 Di Dalam Loop Luar `for (let i = 1; i < length; i++)`:
4. **Kondisi loop** — mulai `i = 1` karena index 0 dianggap sudah terurut, berjalan selama `i < length`, increment `i++`
5. **`const current = characters[i]`** — simpan karakter yang akan disisipkan ke variabel `current` sebelum posisinya ditimpa saat proses geser
6. **`let j = i - 1`** — mulai bandingkan dari karakter tepat di sebelah kiri `current`

#### 🔄 Di Dalam While Loop `while (j >= 0 && characters[j] > current)`:
7. **Syarat 1: `j >= 0`** — pastikan tidak keluar batas kiri array, jika `j = -1` berarti sudah sampai ujung kiri, stop
8. **Syarat 2: `characters[j] > current`** — geser hanya jika karakter kiri lebih besar dari `current`, jika tidak berarti posisi sudah tepat, stop
9. **`characters[j + 1] = characters[j]`** — geser karakter kiri ke kanan untuk membuat ruang bagi `current`
10. **`j--`** — mundur satu langkah ke kiri untuk bandingkan dengan karakter berikutnya

#### 🔵 Di Luar While, Masih Di Dalam Loop Luar:
11. **`characters[j + 1] = current`** — setelah while berhenti, `j` sudah mundur satu langkah terlalu jauh, sehingga posisi yang tepat adalah `j + 1`, sisipkan `current` di sini

#### 🔵 Di Luar Loop:
12. **`return characters.join('')`** — gabung array kembali menjadi string

### **Visualisasi untuk `inputString = 'dcba'`:**
```
┌─────────────────────────────────────────────────────────────┐
│  characters = ['d','c','b','a']                             │
│                                                             │
│  Pass 1 (i=1), current='c', j=0:                          │
│    j=0: 'd' > 'c' ✅ → geser → ['d','d','b','a']          │
│    j=-1 → keluar while                                      │
│    sisipkan 'c' di j+1=0 → ['c','d','b','a'] ✅            │
│                                                             │
│  Pass 2 (i=2), current='b', j=1:                          │
│    j=1: 'd' > 'b' ✅ → geser → ['c','d','d','a']          │
│    j=0: 'c' > 'b' ✅ → geser → ['c','c','d','a']          │
│    j=-1 → keluar while                                      │
│    sisipkan 'b' di j+1=0 → ['b','c','d','a'] ✅            │
│                                                             │
│  Pass 3 (i=3), current='a', j=2:                          │
│    j=2: 'd' > 'a' ✅ → geser → ['b','c','d','d']          │
│    j=1: 'c' > 'a' ✅ → geser → ['b','c','c','d']          │
│    j=0: 'b' > 'a' ✅ → geser → ['b','b','c','d']          │
│    j=-1 → keluar while                                      │
│    sisipkan 'a' di j+1=0 → ['a','b','c','d'] ✅            │
│                                                             │
│  return 'abcd' ✅                                           │
└─────────────────────────────────────────────────────────────┘
```

### **Keywords:**

| Keyword | Penjelasan |
|---------|-----------|
| 🔤 **split('')** | Konversi string ke array agar karakter bisa dimanipulasi |
| 📌 **current** | Karakter yang sedang disisipkan, disimpan dulu sebelum posisinya ditimpa |
| 🔁 **i = 1** | Index 0 dianggap sudah terurut, loop mulai dari index 1 |
| ⬅️ **j--** | Mundur ke kiri untuk membandingkan dengan karakter sebelumnya |
| ➡️ **characters[j + 1] = characters[j]** | Geser ke kanan — lebih efisien dari swap karena hanya 1 penulisan per langkah |
| 📍 **j + 1** | Posisi tepat untuk sisipkan `current` setelah while berhenti |
| ⏱️ **O(n²)** | Complexity worst case — O(n) best case jika array sudah hampir terurut |

### **Kapan Pakai:**
- ✅ Data yang hampir terurut — sangat efisien karena while loop jarang berjalan panjang
- ✅ Data yang terus bertambah satu per satu (online algorithm)
- ✅ Ingin meminimalkan jumlah penulisan (lebih efisien dari swap)

### **Pitfalls (Jebakan Umum):**

**1) ❌ Kondisi while pakai `characters[j + 1]` bukan `characters[j]`**
```javascript
// ❌ SALAH — j + 1 adalah posisi current, bukan yang dibandingkan
while (j >= 0 && characters[j + 1] > current) {

// ✅ BENAR — bandingkan dengan karakter di sebelah kiri (posisi j)
while (j >= 0 && characters[j] > current) {
```

**2) ❌ Langsung isi `current` di dalam while, bukan geser dulu**
```javascript
// ❌ SALAH — posisi tepat belum tentu di sini!
while (j >= 0 && characters[j] > current) {
  characters[j + 1] = current
  j--
}

// ✅ BENAR — geser dulu, sisipkan SETELAH while selesai
while (j >= 0 && characters[j] > current) {
  characters[j + 1] = characters[j]
  j--
}
characters[j + 1] = current
```

**3) ❌ Lupa simpan `current` sebelum geser**
```javascript
// ❌ SALAH — characters[i] tertimpa saat proses geser!
for (let i = 1; i < length; i++) {
  let j = i - 1
  while (j >= 0 && characters[j] > characters[i]) { // characters[i] berubah!

// ✅ BENAR
for (let i = 1; i < length; i++) {
  const current = characters[i]  // simpan sebelum geser
  let j = i - 1
  while (j >= 0 && characters[j] > current) {
```

**4) ❌ Sisipkan `current` di `j` bukan `j + 1`**
```javascript
// ❌ SALAH — j sudah mundur satu langkah terlalu jauh
characters[j] = current

// ✅ BENAR
characters[j + 1] = current
```

### **💡 Insight Penting:**

> **Kenapa geser lebih efisien dari swap?**
> Swap butuh **3 operasi penulisan** per langkah (temp, tukar, tukar balik). Geser hanya butuh **1 operasi penulisan** per langkah karena `current` sudah disimpan di awal. Baru di akhir ada 1 penulisan lagi untuk menyisipkan `current`. Total penulisan jauh lebih sedikit.

> **Kenapa Insertion Sort bagus untuk data hampir terurut?**
> Karena while loop akan jarang berjalan panjang — karakter yang sudah hampir di posisi yang benar hanya perlu sedikit pergeseran. Best case O(n) terjadi ketika array sudah terurut — while loop tidak pernah berjalan sama sekali.

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES

═══════════════════════════════════════════════════════════════════════

```javascript
// Ganti dengan versi yang ingin ditest

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

// Hasil: 9/9 ✅ PASS (semua versi)
```

---

═══════════════════════════════════════════════════════════════════════

# 📊 PERBANDINGAN LENGKAP

═══════════════════════════════════════════════════════════════════════

| Aspek | 🔷 Bubble Single | 🔶 Bubble Multi | 🎯 Selection | 🃏 Insertion |
|-------|:----------------:|:---------------:|:------------:|:------------:|
| Jumlah fungsi | 1 | 3 | 1 | 1 |
| Mekanisme | Swap inline | Swap via fungsi | Swap | Geser (shift) |
| Swap per pass | Berkali-kali | Berkali-kali | Maksimal 1x | Tidak ada |
| Penulisan per langkah | 3 | 3 | 3 | 1 |
| Early stop | ✅ swapped | ✅ swapped | ❌ | ✅ while kondisi |
| Complexity worst | O(n²) | O(n²) | O(n²) | O(n²) |
| Complexity best | O(n) | O(n) | O(n²) | O(n) |
| Single Responsibility | ❌ | ✅ | ❌ | ❌ |
| Cocok untuk | Belajar | Clean code | Data acak | Data hampir urut |

---

## 🎯 Decision Tree

```
Apa tujuan utamamu?
│
├── 📚 Belajar konsep sorting dari nol
│    └──▶ 🔷 Bubble Sort Single Function
│          Semua logika dalam satu tempat, mudah dipahami
│
├── 🏗️ Ingin menerapkan clean code & Single Responsibility
│    └──▶ 🔶 Bubble Sort Multi Function
│          3 fungsi terpisah, reusable, maintainable
│
├── 🔀 Data acak, ingin swap sesedikit mungkin
│    └──▶ 🎯 Selection Sort
│          Maksimal 1x swap per pass
│
└── ⚡ Data hampir terurut, ingin performa terbaik
     └──▶ 🃏 Insertion Sort
           Best case O(n), geser lebih efisien dari swap


Default untuk challenge ini: 🔷 Bubble Sort ✅
(sesuai saran soal dan paling bagus untuk belajar)
```

---

## 🔑 Key Takeaways

```
┌─────────────────────────────────────────────────────────────────────┐
│  💡 String Immutable → Harus Split Dulu                             │
│     Selalu .split('') sebelum sorting, .join('') setelah selesai    │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Array Pass by Reference                                         │
│     Fungsi yang menerima array tidak perlu return                   │
│     Perubahan langsung mempengaruhi array asli                      │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Semua Algoritma O(n²) Worst Case                                │
│     Perbedaan ada di best case dan jumlah operasi penulisan         │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Swap = 3 Penulisan, Geser = 1 Penulisan                        │
│     Insertion Sort lebih efisien dalam hal penulisan                │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Pilih Algoritma Sesuai Konteks                                  │
│     Belajar → Bubble | Acak → Selection | Hampir urut → Insertion   │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Refactoring Tidak Mengubah Fungsionalitas                       │
│     Kode yang berbeda bisa menghasilkan output yang sama            │
└─────────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

## 🎯 Quick Reference Card

| Versi | Struktur | Highlight |
|-------|----------|-----------|
| 🔷 **Bubble Single** | `split` → `for loop` → `swap inline` → `join` | Mudah dipelajari |
| 🔶 **Bubble Multi** | `split` → `bubbleSort()` → `swapCharacters()` → `join` | Clean & reusable |
| 🎯 **Selection Sort** | `split` → `cari minIndex` → `swap sekali` → `join` | Swap minimal |
| 🃏 **Insertion Sort** | `split` → `ambil current` → `geser` → `sisipkan` → `join` | Geser efisien |

---

Made with ❤️ for learners

**Happy Coding! 🚀**

</div>
