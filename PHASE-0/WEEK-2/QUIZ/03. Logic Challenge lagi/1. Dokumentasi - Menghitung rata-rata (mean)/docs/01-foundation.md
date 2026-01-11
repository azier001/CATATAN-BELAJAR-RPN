# 📄 Part 1: Foundation

![Part](https://img.shields.io/badge/Part-1%20of%207-blue?style=flat-square)
![Topic](https://img.shields.io/badge/Topic-Foundation-green?style=flat-square)

> Memahami konsep dasar mean, problem statement, dan persiapan sebelum coding!

---

## 🎯 Apa yang Akan Dipelajari di Part Ini

Sebelum kita mulai coding, kita perlu paham dulu **apa itu mean**, **kenapa penting**, dan **apa yang mau kita selesaikan**. Bayangkan kayak mau bikin rumah - kita perlu tau dulu mau bikin rumah kayak apa, di mana, dan untuk siapa, sebelum mulai bangun.

Di part ini kita akan:
- ✅ Memahami konsep mean (rata-rata) secara matematis
- ✅ Melihat problem statement yang akan diselesaikan
- ✅ Memahami test cases dan expected output
- ✅ Persiapan mental sebelum mulai coding
- ✅ Overview 7 part yang akan dipelajari

---

## 📚 Apa Itu Mean (Rata-rata)?

### **Definisi Sederhana**

**Mean** atau **rata-rata** adalah nilai yang mewakili keseluruhan data. Cara menghitungnya: **jumlahkan semua angka, lalu bagi dengan banyaknya angka**.

### **💡 Analogi Sehari-hari**

Bayangkan kamu dan 4 teman lagi patungan beli pizza seharga Rp 150.000. Berapa yang harus dibayar per orang?

```
Total harga: Rp 150.000
Jumlah orang: 5 orang

Bayar per orang = 150.000 ÷ 5 = Rp 30.000
```

Nah, **Rp 30.000 itu adalah mean** (rata-rata) dari kontribusi tiap orang. Walaupun mungkin ada yang bayar Rp 50.000 dulu dan ada yang bayar Rp 20.000, rata-ratanya tetap Rp 30.000.

### **🔢 Formula Matematis**

```
Mean = Σ(xi) / n

Keterangan:
- Σ (sigma) = simbol penjumlahan
- xi = setiap elemen dalam data (x1, x2, x3, ...)
- n = banyaknya data
```

**Contoh:**
```
Data: [1, 2, 3, 4, 5]

Σ(xi) = 1 + 2 + 3 + 4 + 5 = 15
n = 5

Mean = 15 ÷ 5 = 3
```

---

## 📋 Problem Statement

### **Tugas Kita:**

Buat fungsi `calculateMean()` yang:
1. Menerima array berisi angka-angka
2. Menghitung rata-rata (mean) dari angka-angka tersebut
3. Membulatkan hasil ke bilangan bulat terdekat
4. Mengembalikan hasil pembulatan

### **Input & Output**

**Input:**
- Array of numbers (bisa positif, negatif, atau nol)
- Contoh: `[1, 2, 3, 4, 5]`

**Output:**
- Single number (hasil pembulatan mean)
- Contoh: `3`

### **Aturan Pembulatan**

Kita akan menggunakan **pembulatan standar** (Math.round):
- Angka **0.5 ke atas** → dibulatkan **ke atas**
- Angka **di bawah 0.5** → dibulatkan **ke bawah**

**Contoh:**
```
2.3 → 2
2.5 → 3
2.7 → 3
4.49 → 4
4.5 → 5
```

---

## 🧪 Test Cases

Ini adalah test cases yang akan kita gunakan untuk mengecek apakah kode kita benar:

```javascript
console.log(calculateMean([1, 2, 3, 4, 5])); // Expected: 3
console.log(calculateMean([3, 5, 7, 5, 3])); // Expected: 5
console.log(calculateMean([6, 5, 4, 7, 3])); // Expected: 5
console.log(calculateMean([1, 3, 3]));       // Expected: 2
console.log(calculateMean([7, 7, 7, 7, 7])); // Expected: 7
```

### **Mari Kita Breakdown Test Case Pertama:**

```
Input: [1, 2, 3, 4, 5]

Langkah 1: Jumlahkan semua angka
1 + 2 + 3 + 4 + 5 = 15

Langkah 2: Hitung mean
15 ÷ 5 = 3

Langkah 3: Bulatkan (kalau perlu)
3 sudah bulat, jadi tetap 3

Output: 3 ✅
```

### **Test Case Kedua (Yang Perlu Pembulatan):**

```
Input: [3, 5, 7, 5, 3]

Langkah 1: Jumlahkan
3 + 5 + 7 + 5 + 3 = 23

Langkah 2: Hitung mean
23 ÷ 5 = 4.6

Langkah 3: Bulatkan
4.6 → 5 (karena 0.6 > 0.5, dibulatkan ke atas)

Output: 5 ✅
```

---

## 🗺️ Roadmap Series Ini (7 Part)

Ini overview lengkap apa yang akan kita pelajari:

```
┌─────────────────────────────────────────────────┐
│  PART 1: Foundation (Kamu di sini! 📍)          │
│  └─ Konsep dasar & problem statement            │
├─────────────────────────────────────────────────┤
│  PART 2: Imperative Approach                    │
│  └─ For...of loop & kesalahan #1                │
├─────────────────────────────────────────────────┤
│  PART 3: Functional Approach                    │
│  └─ Reduce & kesalahan #2                       │
├─────────────────────────────────────────────────┤
│  PART 4: Algorithm Deep Dive                    │
│  └─ Manual count & pseudocode                   │
├─────────────────────────────────────────────────┤
│  PART 5: Production Ready                       │
│  └─ Validation & error handling                 │
├─────────────────────────────────────────────────┤
│  PART 6: Comparison Guide                       │
│  └─ Perbandingan & decision tree                │
├─────────────────────────────────────────────────┤
│  PART 7: Technical Resources                    │
│  └─ Complexity & next steps                     │
└─────────────────────────────────────────────────┘
```

### **Kenapa 4 Cara Berbeda?**

Kamu mungkin mikir: "Loh, masa satu problem butuh 4 cara berbeda?"

Jawabannya: **YA!** Dan ini bagus untuk pembelajaran karena:

1. **Setiap cara punya kelebihan & kekurangan** masing-masing
2. **Beda situasi, beda pendekatan** yang cocok
3. **Interview/ujian sering tanya** berbagai alternatif
4. **Memahami paradigma berbeda** (imperative vs functional)
5. **Melatih problem-solving** dari berbagai sudut pandang

---

## 🎯 Apa yang Membuat Series Ini Berbeda?

### **1. Real Learning Journey**

Dokumentasi ini BUKAN hanya kumpulan "kode yang benar". Tapi juga menunjukkan:
- ❌ Kesalahan yang pernah dibuat
- 🔧 Kenapa salah
- ✅ Bagaimana memperbaikinya
- 💡 Pelajaran yang didapat

**Contoh kesalahan yang akan kita bahas:**
- Naming convention yang tidak konsisten (`totalSum` - mixing bahasa)
- Pembagian di dalam reduce yang tidak efisien
- Dan lain-lain!

### **2. Deep Explanation dengan Analogi**

Setiap konsep akan dijelaskan dengan:
- 📝 Penjelasan teknis
- 💡 Analogi sehari-hari
- 🎨 Visualisasi dengan diagram ASCII
- 🔍 Trace execution step-by-step

### **3. Praktis & Actionable**

Bukan cuma teori! Setiap part akan memberikan:
- ✅ Kode lengkap yang bisa langsung dicoba
- ✅ Best practices yang bisa langsung diterapkan
- ✅ Tips untuk interview dan ujian
- ✅ Common mistakes dan cara avoid-nya

---

## 🛠️ Persiapan Sebelum Lanjut

### **Mental Check ✓**

Sebelum lanjut ke Part 2, pastikan kamu sudah:

- [ ] Paham konsep mean (rata-rata)
- [ ] Paham formula: jumlah semua ÷ banyak data
- [ ] Paham aturan pembulatan Math.round()
- [ ] Sudah lihat dan paham semua test cases
- [ ] Siap untuk belajar 4 pendekatan berbeda
- [ ] Siap belajar dari kesalahan (mindset penting!)

### **Technical Check ✓**

Pastikan kamu sudah paham:

- [ ] Variabel (let, const)
- [ ] Function (function declaration & arrow function)
- [ ] Array basics
- [ ] For loop (for...of akan dijelaskan di Part 2)
- [ ] Operasi matematika dasar (+, ÷)

**Kalau ada yang belum paham, tidak apa-apa!** Series ini akan menjelaskan semuanya step-by-step.

---

## 🎓 Mindset untuk Belajar

### **Tiga Prinsip Penting:**

**1. Kesalahan Itu Normal**
```
┌────────────────────────────────────┐
│  ❌ → 🔧 → ✅ → 💡                 │
│  Salah → Fix → Benar → Paham       │
└────────────────────────────────────┘
```
Series ini akan menunjukkan kesalahan yang pernah dibuat. Bukan untuk ditertawakan, tapi untuk **belajar**!

**2. Banyak Jalan Menuju Roma**
Tidak ada "satu cara yang paling benar". Ada cara yang:
- Lebih simple
- Lebih cepat
- Lebih mudah dibaca
- Lebih aman untuk production

Semuanya valid, tergantung konteks!

**3. Deep Understanding > Hafalan**
Lebih baik **paham kenapa** daripada cuma **hafal gimana**. Makanya kita akan deep dive ke setiap pendekatan.

---

## 📊 Visualisasi Problem

Mari kita lihat visualisasi sederhana dari apa yang akan kita lakukan:

```
INPUT                PROSES              OUTPUT
┌──────┐           ┌────────┐           ┌───┐
│ [1,  │           │ Sum:   │           │   │
│  2,  │  ───────> │ 1+2+3+ │ ───────>  │ 3 │
│  3,  │           │ 4+5=15 │           │   │
│  4,  │           │        │           └───┘
│  5]  │           │ Mean:  │
└──────┘           │ 15÷5=3 │
                   │        │
                   │ Round: │
                   │ 3 → 3  │
                   └────────┘
```

**Flow lengkapnya:**
```
[Start] → [Input Array] → [Sum All] → [Divide by Length] → [Round] → [Return] → [End]
```

Sederhana kan? Tapi kita akan explore 4 cara berbeda untuk melakukan flow ini!

---

## 🚀 Next Step

**Di Part 2**, kita akan mulai coding dengan pendekatan pertama: **Imperative Approach** menggunakan **for...of loop**.

Kita juga akan melihat **kesalahan pertama** yang pernah dibuat terkait **naming convention**, dan bagaimana cara memperbaikinya.

### **Sneak Peek Part 2:**

```javascript
// Spoiler alert: Kode yang akan kita pelajari
function calculateMean(numbers) {
  let sum = 0
  
  for (const currentNumber of numbers) {
    sum += currentNumber
  }
  
  const mean = sum / numbers.length
  return Math.round(mean)
}
```

Terlihat sederhana? Yup! Tapi kita akan breakdown setiap barisnya dan paham **kenapa ditulis seperti itu**.

---

## ✅ Ringkasan Part 1

**Apa yang Sudah Dipelajari:**

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 💡 KEY TAKEAWAYS                    ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ✅ Mean = jumlah semua ÷ banyak data ┃
┃ ✅ Formula: Σ(xi) / n                ┃
┃ ✅ Pakai Math.round() untuk bulat    ┃
┃ ✅ Ada 4 cara berbeda yang valid     ┃
┃ ✅ Belajar dari kesalahan itu penting┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

**Progress Series:**
```
[▓▓▓░░░░░░░] 14% (1/7 parts completed)
```

---

**Siap lanjut ke Part 2? Let's code! 🚀**
