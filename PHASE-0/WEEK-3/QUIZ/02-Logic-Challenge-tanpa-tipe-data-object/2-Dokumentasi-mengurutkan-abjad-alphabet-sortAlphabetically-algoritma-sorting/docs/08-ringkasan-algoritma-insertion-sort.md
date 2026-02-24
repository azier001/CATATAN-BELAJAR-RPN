# 📚 Algoritma Sorting - PART 8: RINGKASAN ALGORITMA INSERTION SORT

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║        📋 PART 8: RINGKASAN ALGORITMA INSERTION SORT 📋                 ║
║                                                                          ║
║              Complete Reference — Step-by-Step & Keywords                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![Algorithm](https://img.shields.io/badge/Algorithm-Insertion%20Sort-purple?style=for-the-badge)

---

## 🎯 Tujuan

- ✅ Ringkasan algoritma Insertion Sort secara detail
- ✅ Visualisasi lengkap cara kerja
- ✅ Pitfalls dan insight penting
- ✅ Quick reference untuk review atau belajar ulang

---

═══════════════════════════════════════════════════════════════════════

# 🃏 INSERTION SORT

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
│    j-- → j=-1 → keluar while                               │
│    sisipkan 'c' di j+1=0 → ['c','d','b','a'] ✅            │
│                                                             │
│  Pass 2 (i=2), current='b', j=1:                          │
│    j=1: 'd' > 'b' ✅ → geser → ['c','d','d','a']          │
│    j-- → j=0                                               │
│    j=0: 'c' > 'b' ✅ → geser → ['c','c','d','a']          │
│    j-- → j=-1 → keluar while                               │
│    sisipkan 'b' di j+1=0 → ['b','c','d','a'] ✅            │
│                                                             │
│  Pass 3 (i=3), current='a', j=2:                          │
│    j=2: 'd' > 'a' ✅ → geser → ['b','c','d','d']          │
│    j-- → j=1                                               │
│    j=1: 'c' > 'a' ✅ → geser → ['b','c','c','d']          │
│    j-- → j=0                                               │
│    j=0: 'b' > 'a' ✅ → geser → ['b','b','c','d']          │
│    j-- → j=-1 → keluar while                               │
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
| 🔤 **join('')** | Konversi array kembali ke string |
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

> **Kenapa `j + 1` bukan `j` untuk menyisipkan?**
> Setelah while berhenti, ada dua kemungkinan: `j = -1` (sudah sampai ujung kiri) atau `characters[j] <= current` (ketemu yang lebih kecil). Di kedua kasus, posisi yang tepat untuk `current` adalah `j + 1` — satu langkah ke kanan dari posisi `j` berhenti.

---

═══════════════════════════════════════════════════════════════════════

# 🧪 TEST CASES

═══════════════════════════════════════════════════════════════════════

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
│  💡 Simpan current Sebelum Apapun                                   │
│     Nilai characters[i] akan tertimpa saat proses geser             │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Geser Dulu, Sisipkan Setelah While Selesai                      │
│     Posisi tepat baru diketahui setelah while berhenti              │
├─────────────────────────────────────────────────────────────────────┤
│  💡 j + 1, Bukan j                                                  │
│     j sudah mundur satu langkah terlalu jauh setelah while berhenti │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Geser Lebih Efisien dari Swap                                   │
│     1 penulisan per langkah vs 3 penulisan per swap                 │
├─────────────────────────────────────────────────────────────────────┤
│  💡 Best Case O(n) untuk Data Hampir Terurut                        │
│     While loop jarang berjalan panjang jika data sudah hampir urut  │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 7: Alternatif Insertion Sort](07-alternatif-insertion-sort.md)**
- **📖 [Lanjut ke Part 9: Perbandingan & Kesimpulan →](09-perbandingan-kesimpulan.md)**

---

<div align="center">

Made with ❤️ for learners

**Happy Learning! 🚀**

</div>
