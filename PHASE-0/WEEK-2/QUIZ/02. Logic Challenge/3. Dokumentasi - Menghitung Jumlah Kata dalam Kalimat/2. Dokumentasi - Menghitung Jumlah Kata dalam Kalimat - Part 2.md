# 📗 Dokumentasi: Menghitung Jumlah Kata dalam Kalimat
## Part 2: Deep Dive

---

## 📋 Daftar Isi

- [🔍 Visualisasi Step-by-Step](#visualisasi-step-by-step)
  - [Contoh: "I have a dream"](#contoh-i-have-a-dream)
  - [Tahap Normalisasi & Validasi](#tahap-normalisasi)
  - [Tahap Inisialisasi](#tahap-inisialisasi)
  - [Tahap Pemrosesan Karakter](#tahap-pemrosesan)
  - [Visualisasi Pola](#visualisasi-pola)
- [🔧 Iterasi & Perbaikan Kode](#iterasi-perbaikan)
  - [Versi 1: Nested If dengan If Terpisah](#versi-1-nested)
  - [Versi 2: Single If dengan Kondisi Gabungan](#versi-2-single)
  - [Versi 3: Nested If dengan Else (TERBAIK)](#versi-3-else)
  - [Perbandingan Ketiga Versi](#perbandingan-versi)
- [🌟 Clean Code & Best Practices](#clean-code)
  - [Naming Convention Bahasa Indonesia vs Inggris](#naming-convention)
  - [Kode dengan Best Practice](#kode-best-practice)
  - [Penjelasan Pemilihan Nama Variabel](#penjelasan-nama)
  - [Prinsip Clean Code yang Diterapkan](#prinsip-clean-code)

---

<a name="visualisasi-step-by-step"></a>
## 🔍 Visualisasi Step-by-Step

<a name="contoh-i-have-a-dream"></a>
### 📝 Contoh: "I have a dream"

Mari kita lihat bagaimana algoritma bekerja langkah demi langkah dengan contoh **"I have a dream"**.

---

<a name="tahap-normalisasi"></a>
### 1️⃣ Tahap Normalisasi & Validasi

```
Input Awal: "I have a dream"
```

**Proses:**
```javascript
const normalizedSentence = "I have a dream".trim()
```

**Hasil:**
```
normalizedSentence = "I have a dream"
```

✅ Tidak ada spasi di awal/akhir, jadi tidak ada perubahan

**Validasi:**
```javascript
if (normalizedSentence.length === 0) return 0
```

```
Panjang: 14 karakter
Apakah kosong? TIDAK ✓
Lanjut ke pemrosesan!
```

---

<a name="tahap-inisialisasi"></a>
### 2️⃣ Tahap Inisialisasi

```javascript
let isInsideWord = false
let countSentence = 0
```

**Status Awal:**
```
📊 Status:
   isInsideWord    = false (di luar kata)
   countSentence   = 0 (belum ada kata)
```

💡 **Kenapa `false`?** Karena kita belum membaca karakter apapun, jadi belum masuk ke kata manapun.

---

<a name="tahap-pemrosesan"></a>
### 3️⃣ Tahap Pemrosesan Karakter

Sekarang kita akan membaca karakter satu per satu:

```
String: I   h a v e   a   d r e a m
Index:  0 1 2 3 4 5 6 7 8 9 ...
```

---

#### **Iterasi 1: Karakter 'I' (index 0)**

```
Karakter saat ini: 'I'
```

**Pengecekan:**
```javascript
if (char !== ' ')           // 'I' !== ' ' → TRUE ✓
  if (!isInsideWord)        // !false → TRUE ✓
```

**Kondisi terpenuhi! Aksi:**
```javascript
countSentence++             // 0 → 1
isInsideWord = true         // false → true
```

**Hasil:**
```
📊 Status Setelah Iterasi 1:
   Karakter        = 'I'
   isInsideWord    = true (MASUK ke kata)
   countSentence   = 1 (kata ke-1 ditemukan!)
   
Visual: [I] have a dream
         ↑
      Kata #1
```

---

#### **Iterasi 2: Karakter ' ' (spasi, index 1)**

```
Karakter saat ini: ' ' (spasi)
```

**Pengecekan:**
```javascript
if (char !== ' ')           // ' ' !== ' ' → FALSE ✗
else                        // Masuk ke ELSE
```

**Aksi:**
```javascript
isInsideWord = false        // true → false
```

**Hasil:**
```
📊 Status Setelah Iterasi 2:
   Karakter        = ' '
   isInsideWord    = false (KELUAR dari kata)
   countSentence   = 1 (masih sama)
   
Visual: I[ ]have a dream
         ↑
      Spasi (keluar dari kata)
```

💡 **Kenapa tidak ada penambahan?** Karena spasi bukan kata, hanya menandai kita keluar dari kata.

---

#### **Iterasi 3: Karakter 'h' (index 2)**

```
Karakter saat ini: 'h'
```

**Pengecekan:**
```javascript
if (char !== ' ')           // 'h' !== ' ' → TRUE ✓
  if (!isInsideWord)        // !false → TRUE ✓
```

**Kondisi terpenuhi! Aksi:**
```javascript
countSentence++             // 1 → 2
isInsideWord = true         // false → true
```

**Hasil:**
```
📊 Status Setelah Iterasi 3:
   Karakter        = 'h'
   isInsideWord    = true (MASUK ke kata)
   countSentence   = 2 (kata ke-2 ditemukan!)
   
Visual: I [h]ave a dream
           ↑
        Kata #2
```

---

#### **Iterasi 4-5: Karakter 'a', 'v' (index 3-4)**

```
Karakter: 'a', 'v'
```

**Pengecekan untuk 'a':**
```javascript
if (char !== ' ')           // 'a' !== ' ' → TRUE ✓
  if (!isInsideWord)        // !true → FALSE ✗
```

⚠️ **Kondisi kedua TIDAK terpenuhi!**

**Aksi:**
```
Tidak ada aksi apapun
```

**Hasil:**
```
📊 Status Setelah Iterasi 4:
   Karakter        = 'a'
   isInsideWord    = true (MASIH di dalam kata)
   countSentence   = 2 (tidak berubah)
   
Visual: I h[a]ve a dream
            ↑
      Masih kata #2
```

💡 **Penting!** Karena kita sudah `isInsideWord = true`, karakter 'a' tidak menambah counter. Kita masih di kata yang sama (have).

**Sama untuk karakter 'v':**
```
📊 Status Setelah Iterasi 5:
   Karakter        = 'v'
   isInsideWord    = true
   countSentence   = 2
   
Visual: I ha[v]e a dream
             ↑
      Masih kata #2
```

---

#### **Iterasi 6: Karakter 'e' (index 5)**

```
Sama seperti iterasi 4-5, masih di dalam kata "have"
```

**Hasil:**
```
📊 Status:
   Karakter        = 'e'
   isInsideWord    = true
   countSentence   = 2
   
Visual: I hav[e] a dream
              ↑
      Masih kata #2
```

---

#### **Iterasi 7: Karakter ' ' (spasi, index 6)**

```
Karakter saat ini: ' ' (spasi)
```

**Aksi:**
```javascript
else
  isInsideWord = false      // true → false
```

**Hasil:**
```
📊 Status:
   Karakter        = ' '
   isInsideWord    = false (KELUAR dari kata)
   countSentence   = 2
   
Visual: I have[ ]a dream
               ↑
         Keluar dari kata
```

---

#### **Iterasi 8: Karakter 'a' (index 7)**

```
Karakter saat ini: 'a'
```

**Pengecekan:**
```javascript
if (char !== ' ')           // 'a' !== ' ' → TRUE ✓
  if (!isInsideWord)        // !false → TRUE ✓
```

**Aksi:**
```javascript
countSentence++             // 2 → 3
isInsideWord = true
```

**Hasil:**
```
📊 Status:
   Karakter        = 'a'
   isInsideWord    = true (MASUK ke kata)
   countSentence   = 3 (kata ke-3 ditemukan!)
   
Visual: I have [a] dream
                ↑
             Kata #3
```

---

#### **Iterasi 9: Karakter ' ' (spasi, index 8)**

```
Keluar dari kata lagi
```

**Hasil:**
```
📊 Status:
   isInsideWord    = false
   countSentence   = 3
   
Visual: I have a[ ]dream
                 ↑
           Keluar dari kata
```

---

#### **Iterasi 10: Karakter 'd' (index 9)**

```
Karakter saat ini: 'd'
```

**Pengecekan:**
```javascript
if (char !== ' ')           // 'd' !== ' ' → TRUE ✓
  if (!isInsideWord)        // !false → TRUE ✓
```

**Aksi:**
```javascript
countSentence++             // 3 → 4
isInsideWord = true
```

**Hasil:**
```
📊 Status:
   Karakter        = 'd'
   isInsideWord    = true (MASUK ke kata)
   countSentence   = 4 (kata ke-4 ditemukan!)
   
Visual: I have a [d]ream
                  ↑
               Kata #4
```

---

#### **Iterasi 11-14: Karakter 'r', 'e', 'a', 'm' (index 10-13)**

```
Semua karakter ini masih di dalam kata "dream"
```

**Proses untuk masing-masing:**
```javascript
if (char !== ' ')           // TRUE ✓
  if (!isInsideWord)        // FALSE ✗ (sudah di dalam)
    // Tidak ada aksi
```

**Hasil Akhir:**
```
📊 Status Setelah Semua Iterasi:
   isInsideWord    = true
   countSentence   = 4
   
Visual: I have a [dream]
                  ↑↑↑↑↑
            Masih kata #4
```

---

### 4️⃣ Hasil Akhir

```javascript
return countSentence  // return 4
```

```
🎉 HASIL AKHIR:
   "I have a dream" = 4 kata
   
   Kata 1: I
   Kata 2: have
   Kata 3: a
   Kata 4: dream
```

---

<a name="visualisasi-pola"></a>
### 📊 Visualisasi Pola

Berikut pola lengkap transisi state:

```
String:  I     h a v e     a     d r e a m
         ↓     ↓           ↓     ↓
State:  IN OUT IN--------- OUT  IN OUT IN---------

Aksi:   +1    -     -      -    +1   -   -

Counter: 1     1     1      1     2   2   2
         1     1     2      2     2   2   3
                                          3
                                          4
```

**Legend:**
- `IN` = isInsideWord = true (di dalam kata)
- `OUT` = isInsideWord = false (di luar kata)
- `+1` = countSentence bertambah (kata baru ditemukan)
- `-` = tidak ada aksi

**Pola yang Terlihat:**
```
Luar → Dalam = COUNT++ (deteksi kata baru!)
Dalam → Dalam = nothing (masih kata yang sama)
Dalam → Luar = ubah flag (siap deteksi kata baru)
```

---

<a name="iterasi-perbaikan"></a>
## 🔧 Iterasi & Perbaikan Kode

Dalam proses pembelajaran, kita mencoba beberapa versi kode sebelum sampai ke versi terbaik.

<a name="versi-1-nested"></a>
### 🔄 Versi 1: Nested If dengan If Terpisah

```javascript
function hitungJumlahKata(kalimat) {
  const normalizedSentence = kalimat.trim()
  let isInsideWord = false
  let countSentence = 0

  if (normalizedSentence.length === 0) {
    return 0
  }

  for (const char of normalizedSentence) {
    if (char !== ' ') {
      if (!isInsideWord) {
        countSentence++
        isInsideWord = true
      }
    }
    
    if (char === ' ') {
      isInsideWord = false
    }
  }

  return countSentence
}
```

#### 📊 Analisis Versi 1:

**✅ Kelebihan:**
- Logika jelas dan mudah dibaca
- Bekerja dengan benar

**❌ Kekurangan:**
- Menggunakan **dua `if` terpisah**
- Kedua kondisi **selalu dicek** meskipun yang pertama sudah true
- Kurang efisien

**Contoh Inefisiensi:**
```
Karakter: 'I'
✓ Cek pertama: 'I' !== ' ' → TRUE (masuk, jalankan aksi)
✓ Cek kedua: 'I' === ' ' → FALSE (skip)

Padahal jika karakter bukan spasi, pasti bukan spasi juga!
Tidak perlu cek dua kali.
```

---

<a name="versi-2-single"></a>
### 🔄 Versi 2: Single If dengan Kondisi Gabungan

```javascript
function hitungJumlahKata(kalimat) {
  const normalizedSentence = kalimat.trim()
  let isInsideWord = false
  let wordCount = 0

  if (normalizedSentence.length === 0) {
    return 0
  }

  for (const char of normalizedSentence) {
    if (char !== ' ' && !isInsideWord) {
      wordCount++
      isInsideWord = true
    }

    if (char === ' ') {
      isInsideWord = false
    }
  }

  return wordCount
}
```

#### 📊 Analisis Versi 2:

**✅ Kelebihan:**
- **Lebih ringkas** dengan menggabungkan kondisi nested
- Satu baris untuk kondisi: `char !== ' ' && !isInsideWord`

**❌ Kekurangan:**
- Masih menggunakan **dua `if` terpisah**
- Masih **selalu mengecek kedua kondisi**

**Contoh:**
```
Karakter: 'I'
✓ Cek pertama: ('I' !== ' ' && !false) → TRUE
✓ Cek kedua: 'I' === ' ' → FALSE

Masih ada pengecekan tidak perlu!
```

---

<a name="versi-3-else"></a>
### ✨ Versi 3: Nested If dengan Else (TERBAIK) ⭐

```javascript
function hitungJumlahKata(kalimat) {
  const normalizedSentence = kalimat.trim()
  let isInsideWord = false
  let countSentence = 0

  if (normalizedSentence.length === 0) {
    return 0
  }

  for (const char of normalizedSentence) {
    if (char !== ' ') {
      if (!isInsideWord) {
        countSentence++
        isInsideWord = true
      }
    } else {
      isInsideWord = false
    }
  }

  return countSentence
}
```

#### 📊 Analisis Versi 3:

**✅ Kelebihan:**
- **Paling efisien** - menggunakan `if-else`
- Kondisi kedua **tidak dicek** jika kondisi pertama true
- **Lebih idiomatik** - menunjukkan kondisi saling eksklusif
- **Lebih jelas** - karakter hanya bisa spasi ATAU bukan spasi

**Contoh Efisiensi:**
```
Karakter: 'I'
✓ Cek: 'I' !== ' ' → TRUE (masuk if)
✗ Skip else (tidak perlu cek lagi!)

Karakter: ' '
✓ Cek: ' ' !== ' ' → FALSE (skip if)
✓ Langsung masuk else
```

**💡 Kesimpulan:** Versi ini adalah **yang terbaik** untuk production code!

---

<a name="perbandingan-versi"></a>
### 📊 Perbandingan Ketiga Versi

| Aspek | Versi 1 (Dua If) | Versi 2 (Single If + If) | Versi 3 (If-Else) ⭐ |
|-------|------------------|--------------------------|---------------------|
| **Readability** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Efisiensi** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Best Practice** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Idiomatik** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

**Rekomendasi:** **Gunakan Versi 3** (If-Else) untuk kode production! ✅

---

<a name="clean-code"></a>
## 🌟 Clean Code & Best Practices

<a name="naming-convention"></a>
### 🔤 Naming Convention: Bahasa Indonesia vs Inggris

#### Perbandingan:

| Konsep | Bahasa Indonesia | Bahasa Inggris | Keterangan |
|--------|------------------|----------------|------------|
| Fungsi | `hitungJumlahKata` | `countWords` | Verb + Noun |
| Parameter | `kalimat` | `sentence` | Singular noun |
| Normalized | `normalizedSentence` | `trimmedSentence` | Adjective + Noun |
| Flag | `isInsideWord` | `isInsideWord` | Boolean prefix `is` |
| Counter | `countSentence` | `wordCount` | Noun menjelaskan apa yang dihitung |
| Loop var | `char` | `character` | Lebih deskriptif |

#### 💡 Kenapa Bahasa Inggris?

**Alasan menggunakan Bahasa Inggris:**
1. ✅ **Standar industri** - Semua developer di dunia menggunakan Inggris
2. ✅ **Konsistensi** - Keyword JavaScript (`if`, `for`, `const`) sudah bahasa Inggris
3. ✅ **Kolaborasi** - Tim internasional bisa membaca kode
4. ✅ **Library/Framework** - Semua menggunakan bahasa Inggris
5. ✅ **Profesionalitas** - Kode siap untuk production

**Kapan boleh Bahasa Indonesia?**
- ❓ Untuk belajar pribadi / latihan awal
- ❓ Dokumentasi internal tim lokal
- ❌ **Tidak untuk production code!**

---

<a name="kode-best-practice"></a>
### ✨ Kode dengan Best Practice

```javascript
function countWords(sentence) {
  const trimmedSentence = sentence.trim();
  
  if (trimmedSentence.length === 0) {
    return 0;
  }
  
  let wordCount = 0;
  let isInsideWord = false;
  
  for (const character of trimmedSentence) {
    if (character !== ' ') {
      if (!isInsideWord) {
        wordCount++;
        isInsideWord = true;
      }
    } else {
      isInsideWord = false;
    }
  }
  
  return wordCount;
}
```

---

<a name="penjelasan-nama"></a>
### 📝 Penjelasan Pemilihan Nama Variabel

#### 1. **`countWords`** (Nama Fungsi)
```javascript
function countWords(sentence)
```

**Format:** `verb` + `noun`

- ✅ `count` = verb (aksi yang dilakukan)
- ✅ `Words` = noun (objek yang diproses)
- ✅ Jelas menggambarkan: "fungsi ini menghitung kata"

**Alternatif lain:**
- ❌ `words()` - tidak jelas melakukan apa
- ❌ `getWordCount()` - terlalu verbose
- ✅ `countWords()` - perfect balance!

---

#### 2. **`sentence`** (Parameter)
```javascript
function countWords(sentence)
```

- ✅ Singular noun yang deskriptif
- ✅ Menjelaskan tipe data yang diharapkan (string kalimat)
- ✅ Tidak terlalu generik (`str`, `text`) atau terlalu spesifik

**Alternatif:**
- ❌ `s` - terlalu singkat, tidak jelas
- ❌ `inputString` - terlalu generik
- ❌ `sentenceToCount` - terlalu verbose
- ✅ `sentence` - just right!

---

#### 3. **`trimmedSentence`** (Variabel Hasil Normalisasi)
```javascript
const trimmedSentence = sentence.trim();
```

**Format:** `adjective` + `noun`

- ✅ `trimmed` = adjective (menjelaskan sudah di-trim)
- ✅ `Sentence` = noun (masih kalimat, tapi versi bersih)
- ✅ Menunjukkan transformasi dari `sentence`

**Alternatif:**
- ❌ `s2` - tidak jelas
- ❌ `cleanSentence` - "clean" terlalu general
- ✅ `trimmedSentence` - spesifik dan jelas!

---

#### 4. **`wordCount`** (Counter)
```javascript
let wordCount = 0;
```

**Format:** `noun` yang menjelaskan apa yang dihitung

- ✅ `word` = apa yang dihitung
- ✅ `Count` = menunjukkan ini adalah counter/penghitung
- ✅ Langsung jelas: "ini menghitung jumlah kata"

**Alternatif:**
- ❌ `count` - count apa? tidak spesifik
- ❌ `total` - total apa?
- ❌ `numberOfWords` - terlalu panjang
- ✅ `wordCount` - perfect!

---

#### 5. **`isInsideWord`** (Boolean Flag)
```javascript
let isInsideWord = false;
```

**Format:** `is` + `state/condition`

- ✅ Prefix `is` = standar untuk boolean
- ✅ `Inside` = menjelaskan posisi
- ✅ `Word` = konteks
- ✅ Dibaca seperti pertanyaan: "apakah di dalam kata?"

**Alternatif:**
- ❌ `flag` - tidak jelas flag untuk apa
- ❌ `inWord` - kurang jelas (in bisa berarti banyak hal)
- ❌ `insideWord` - tanpa `is` kurang natural
- ✅ `isInsideWord` - sangat jelas!

**Konvensi Boolean:**
- Selalu gunakan prefix: `is`, `has`, `can`, `should`
- Contoh: `isActive`, `hasPermission`, `canEdit`, `shouldRender`

---

#### 6. **`character`** (Loop Variable)
```javascript
for (const character of trimmedSentence)
```

- ✅ Deskriptif - jelas ini adalah karakter
- ✅ Lebih baik daripada `char` untuk readability
- ✅ Tidak terlalu panjang

**Alternatif:**
- ❌ `c` - terlalu singkat, sulit dibaca
- ⚠️ `char` - acceptable, tapi `character` lebih baik
- ✅ `character` - most readable!

**💡 Kapan boleh singkat?**
Loop counter tradisional: `i`, `j`, `k` masih acceptable untuk index sederhana.

---

<a name="prinsip-clean-code"></a>
### 📚 Prinsip Clean Code yang Diterapkan

#### 1. **🎯 Meaningful Names**
```javascript
// ❌ Bad
function f(s) {
  let c = 0;
  let f = false;
  for (let i = 0; i < s.length; i++) {
    // ...
  }
}

// ✅ Good
function countWords(sentence) {
  let wordCount = 0;
  let isInsideWord = false;
  for (const character of sentence) {
    // ...
  }
}
```

**Prinsip:** Nama harus menjelaskan **apa** (what), **bukan bagaimana** (how).

---

#### 2. **📏 Single Responsibility**
```javascript
function countWords(sentence) {
  // Hanya fokus menghitung kata
  // Tidak melakukan hal lain (print, save, dll)
}
```

**Prinsip:** Satu fungsi = satu tanggung jawab.

---

#### 3. **🔍 Early Return**
```javascript
if (trimmedSentence.length === 0) {
  return 0;  // Early return untuk edge case
}
// Lanjut logic utama
```

**Prinsip:** Handle edge case lebih dulu, kurangi nesting.

---

#### 4. **💬 Self-Documenting Code**
```javascript
if (character !== ' ') {
  if (!isInsideWord) {  // Nama variabel sudah menjelaskan kondisi
    wordCount++;
    isInsideWord = true;
  }
}
```

**Prinsip:** Kode yang baik tidak butuh banyak comment karena sudah self-explanatory.

---

#### 5. **🎨 Consistent Formatting**
```javascript
// Consistent spacing
const trimmedSentence = sentence.trim();

// Consistent bracing
if (condition) {
  // code
} else {
  // code
}
```

**Prinsip:** Format konsisten membuat kode lebih mudah dibaca.

---

#### 6. **🔒 Use `const` When Possible**
```javascript
const trimmedSentence = sentence.trim();  // Tidak akan berubah
let wordCount = 0;                        // Akan berubah
let isInsideWord = false;                 // Akan berubah
```

**Prinsip:** `const` untuk immutable, `let` untuk mutable. Hindari `var`.

---

## 🎉 Selesai - Part 2!

Anda telah mempelajari:
- ✅ Visualisasi detail eksekusi algoritma step-by-step
- ✅ Iterasi dan perbaikan kode dari 3 versi berbeda
- ✅ Clean code principles dan best practices
- ✅ Naming convention yang profesional

### 📚 Lanjut ke Part 3?

Di **Part 3: Alternatif & Lanjutan**, Anda akan belajar:
- 🎨 3 pendekatan alternatif (Split Regex, Transisi, Match)
- 📊 Perbandingan lengkap semua pendekatan
- 🎓 Kapan menggunakan pendekatan mana
- 💪 Latihan tambahan

---

> **💡 Tips:** Coba tulis ulang kode dengan nama variabel Anda sendiri, pastikan tetap deskriptif dan mengikuti convention!
