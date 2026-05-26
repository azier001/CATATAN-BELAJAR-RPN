```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            ⚡ PART 5: ALTERNATIF 2 - PATTERN 6k ± 1 ⚡                  ║
║                                                                          ║
║              Optimasi Ultimate - Paling Cepat!                           ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Advanced-red)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-25%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌳%20Advanced-orange)

---

## 🧭 Quick Jump

| 🧮 Matematika | 💡 Implementasi | 📊 Perbandingan | 🧪 Eksekusi | 💡 Takeaways |
|:-------------:|:---------------:|:---------------:|:-----------:|:------------:|
| [Jump](#-konsep-matematika-6k--1) | [Jump](#-implementasi) | [Jump](#-perbandingan-3-versi) | [Jump](#-contoh-eksekusi) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami **pattern matematika 6k ± 1**
- ✅ Implementasi **optimasi paling cepat**
- ✅ Mengerti **trade-offs** kompleksitas vs performa
- ✅ Tahu kapan teknik ini worth it

---

## 🧮 Konsep Matematika: 6k ± 1

### **Fakta Penting:**

> **Semua bilangan prima > 3 berbentuk 6k ± 1**

### **Kenapa?**

Mari lihat pola angka dari 1-30:

| k | 6k | 6k - 1 | 6k + 1 | Keterangan |
|---|-----|--------|--------|------------|
| 1 | 6 | **5** ✅ | **7** ✅ | Prima! |
| 2 | 12 | **11** ✅ | **13** ✅ | Prima! |
| 3 | 18 | **17** ✅ | **19** ✅ | Prima! |
| 4 | 24 | **23** ✅ | 25 ❌ | 23 prima, 25 bukan |
| 5 | 30 | **29** ✅ | **31** ✅ | Prima! |

### **Pola yang Terlihat:**

```
Kelipatan 6:  6, 12, 18, 24, 30 → Habis dibagi 2 & 3 → BUKAN PRIMA
6k - 1:       5, 11, 17, 23, 29 → KANDIDAT PRIMA ✅
6k + 1:       7, 13, 19, 25, 31 → KANDIDAT PRIMA ✅
```

---

### **Bukti Matematika Sederhana:**

Semua bilangan bulat bisa ditulis sebagai:
```
6k, 6k+1, 6k+2, 6k+3, 6k+4, 6k+5
```

Mari cek satu per satu:

```
6k     = kelipatan 6 → habis dibagi 2 & 3 → BUKAN PRIMA ❌
6k + 1 = kandidat prima ✅
6k + 2 = genap → habis dibagi 2 → BUKAN PRIMA ❌
6k + 3 = habis dibagi 3 → BUKAN PRIMA ❌
6k + 4 = genap → habis dibagi 2 → BUKAN PRIMA ❌
6k + 5 = sama dengan 6(k+1) - 1 → kandidat prima ✅
```

**Kesimpulan:** Hanya **6k ± 1** yang mungkin prima!

---

## 💡 Implementasi

### **Kode Lengkap:**

```javascript
const isPrime = (num) => {
  // Guard clauses
  if (num <= 1) return false
  if (num <= 3) return true  // 2 dan 3 adalah prima
  if (num % 2 === 0 || num % 3 === 0) return false

  // Check divisors in form of 6k ± 1
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false
  }

  return true
}
```

---

### **Penjelasan Detail:**

#### **1. Guard Clauses:**
```javascript
if (num <= 1) return false       // 0, 1, negatif
if (num <= 3) return true        // 2 dan 3 prima
if (num % 2 === 0 || num % 3 === 0) return false  // Kelipatan 2 atau 3
```

**Kenapa `num <= 3`?**
- Jika num = 2 → return true ✅
- Jika num = 3 → return true ✅

#### **2. Loop dari i = 5:**
```javascript
for (let i = 5; ...)
```

**Kenapa mulai dari 5?**

| Angka | Bentuk | Status |
|-------|--------|--------|
| 2 | Istimewa | ✅ Sudah dicek |
| 3 | Istimewa | ✅ Sudah dicek |
| 4 | Genap | ✅ Sudah dicek |
| **5** | **6×1 - 1** | ⬅️ **MULAI DARI SINI** |

5 adalah bilangan prima pertama berbentuk 6k-1!

#### **3. Increment i += 6:**
```javascript
for (let i = 5; i * i <= num; i += 6)
```

**Urutan i:**
```
i = 5  → 6×1 - 1
i = 11 → 6×2 - 1  (5 + 6)
i = 17 → 6×3 - 1  (11 + 6)
i = 23 → 6×4 - 1  (17 + 6)
```

Kita **melompat +6** untuk pindah ke kandidat prima berikutnya!

#### **4. Cek i dan (i + 2):**
```javascript
if (num % i === 0 || num % (i + 2) === 0)
```

**Kenapa i dan i+2?**

Ketika `i = 5`:
- Cek `i` = 5 → ini 6k - 1 ✅
- Cek `i + 2` = 7 → ini 6k + 1 ✅

Ketika `i = 11`:
- Cek `i` = 11 → ini 6k - 1 ✅
- Cek `i + 2` = 13 → ini 6k + 1 ✅

**Dalam SATU iterasi, cek DUA kandidat!** 🚀

---

## 🎯 Visualisasi Pattern

### **Perbandingan dengan Versi Sebelumnya:**

**Alternatif 1 (cek semua ganjil):**
```
3 → cek
5 → cek
7 → cek
9 → cek (padahal 9 = 3×3, pasti bukan prima!)
11 → cek
13 → cek
15 → cek (padahal 15 = 3×5, pasti bukan prima!)
17 → cek
...
```

**Alternatif 2 (hanya 6k±1):**
```
5 → cek (6k-1)
7 → cek (6k+1)  ← dalam satu iterasi!
---
11 → cek (6k-1)
13 → cek (6k+1)  ← dalam satu iterasi!
---
17 → cek (6k-1)
19 → cek (6k+1)  ← dalam satu iterasi!
```

**Skip:** 9, 15, 21, 27, ... (kelipatan 3)

---

## 📊 Perbandingan 3 Versi

### **Untuk isPrime(97):**

| Versi | Iterasi | Pengecekan | Detail |
|-------|---------|------------|--------|
| **Basic (Math.sqrt)** | 5 | 5 | 3, 5, 7, 9, 11 |
| **Alt 1 (i * i)** | 5 | 5 | 3, 5, 7, 9, 11 |
| **Alt 2 (6k±1)** | **2** | **4** | 5, 7, 11, 13 |

**Pengurangan iterasi: 60%!** 🚀

---

### **Metrics Comparison:**

| Metric | Basic | Alt 1 | Alt 2 |
|--------|-------|-------|-------|
| **Kecepatan** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Readability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Complexity** | Simple | Simple | **Complex** |
| **Best For** | Learning | Production | **Competitive** |

---

## 🧪 Contoh Eksekusi

### **isPrime(49):**

```javascript
isPrime(49)

// Guard clauses
49 <= 1? ❌
49 <= 3? ❌
49 % 2 === 0? ❌
49 % 3 === 0? ❌

// Loop
i = 5:
  5 * 5 = 25 <= 49? ✅
  49 % 5 = 4 ❌
  49 % 7 = 0 ✅ → return false ✅

Result: 49 bukan prima (49 = 7×7)
```

**Hanya 1 iterasi!** Ketemu langsung di `i + 2 = 7`.

---

### **isPrime(97):**

```javascript
isPrime(97)

// Guard clauses
97 <= 1? ❌
97 <= 3? ❌
97 % 2 === 0? ❌
97 % 3 === 0? ❌

// Loop
i = 5:
  5 * 5 = 25 <= 97? ✅
  97 % 5 = 2 ❌
  97 % 7 = 6 ❌

i = 11:
  11 * 11 = 121 <= 97? ❌ → STOP!

Result: return true ✅ (97 adalah prima)
```

**Hanya 2 iterasi!** (vs 5 iterasi di versi basic)

---

## 🎯 Kapan Menggunakan?

### **✅ Gunakan 6k±1 Jika:**
- Competitive programming
- Performance critical application
- Processing jutaan angka
- Latency harus minimal

### **❌ Jangan Gunakan Jika:**
- Code untuk learning/teaching
- Readability prioritas
- Team tidak familiar dengan pattern
- Micro-optimization tidak penting

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kenapa semua prima > 3 berbentuk 6k ± 1?</strong></summary>

**Jawaban:**

Karena semua angka bisa ditulis sebagai 6k, 6k+1, 6k+2, 6k+3, 6k+4, 6k+5.

- 6k, 6k+2, 6k+4 = genap (habis dibagi 2)
- 6k+3 = habis dibagi 3
- Hanya tersisa: 6k+1 dan 6k+5 (= 6k-1)

Jadi hanya 6k±1 yang mungkin prima!

</details>

<details>
<summary><strong>❓ Apa itu k dalam 6k ± 1?</strong></summary>

**Jawaban:**

**k adalah variabel matematika** (k = 1, 2, 3, 4, ...), bukan variabel di code!

Dalam implementasi:
- **i** langsung = nilai 6k-1 (5, 11, 17, ...)
- **i+2** langsung = nilai 6k+1 (7, 13, 19, ...)

Jadi tidak perlu hitung 6k secara eksplisit!

</details>

<details>
<summary><strong>❓ Apakah 6k±1 selalu lebih baik?</strong></summary>

**Jawaban:**

**Untuk performa:** Ya, paling cepat!

**Tapi:**
- Lebih sulit dipahami
- Butuh penjelasan ekstra untuk team
- Overkill untuk angka kecil

**Best practice:** 
- Competitive programming → 6k±1
- Production normal → Alternatif 1
- Learning → Basic version

</details>

---

## 📊 Ringkasan Algoritma

### **Konsep Inti:**
```
Semua prima > 3 berbentuk 6k ± 1
Cek hanya kandidat 6k-1 dan 6k+1
Skip kelipatan 3 otomatis
```

### **Step-by-Step:**
```
1. Guard clauses (≤1, ≤3, kelipatan 2 atau 3)
2. Loop dari i = 5 dengan i * i <= num
3. Increment i += 6 (lompat ke 6k-1 berikutnya)
4. Cek i (6k-1) dan i+2 (6k+1)
5. Jika ada yang membagi → return false
6. Loop selesai → return true
```

### **Keywords:**
- ⚡ **6k ± 1 pattern** (skip kelipatan 3)
- 🚀 **i += 6** (lompat ke kandidat berikutnya)
- ✅ **Cek 2 kandidat per iterasi** (i dan i+2)
- ⏱️ **O(√n/3)** complexity (lebih cepat dari O(√n))

---

## ✅ Key Takeaways

**Tentang Pattern 6k±1:**

> **💡 Matematika = Optimasi**  
> Pattern matematika bisa bikin code jauh lebih cepat

> **💡 Skip Smart**  
> Tidak perlu cek kelipatan 3 (otomatis di-skip)

> **💡 Trade-off Complexity**  
> Lebih cepat, tapi lebih sulit dipahami

**Tentang Implementasi:**

> **💡 i Langsung = 6k-1**  
> Tidak perlu hitung 6k secara eksplisit

> **💡 Satu Iterasi = Dua Check**  
> Cek i dan i+2 sekaligus

> **💡 60% Fewer Iterations**  
> Pengurangan iterasi signifikan untuk angka besar

**Tentang Penggunaan:**

> **💡 Context Matters**  
> Pilih versi sesuai kebutuhan project

> **💡 Document Well**  
> Pattern ini butuh penjelasan untuk team

> **💡 Profile First**  
> Pastikan optimasi ini memang dibutuhkan

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🚀 [← Kembali ke Part 4: Alternatif 1 - Optimasi](04-Alternatif-1-Optimasi.md)**
- **📊 [Lanjut ke Part 6: Perbandingan & Kesimpulan →](06-Perbandingan-Kesimpulan.md)**

---

<div align="center">

**Siap untuk perbandingan final & kesimpulan di Part 6?**

Made with ❤️ for learners

</div>
