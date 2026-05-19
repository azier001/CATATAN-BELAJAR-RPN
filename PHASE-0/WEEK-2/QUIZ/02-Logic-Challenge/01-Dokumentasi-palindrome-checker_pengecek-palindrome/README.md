# 🔄 Challenge: Palindrome Checker (Pengecek Palindrome)

### ✨ _Membalikkan kata dan membandingkannya — sesederhana bercermin!_

> 🎯 **Tujuan:** Memahami logika pengecekan palindrome menggunakan dua pendekatan berbeda — dari loop manual fundamental hingga method chaining modern ES6 — serta menerapkan clean code & naming convention yang profesional.

![Difficulty](https://img.shields.io/badge/Difficulty-Beginner-green) ![Topic](https://img.shields.io/badge/Topic-String%20Manipulation-blue) ![Topic](https://img.shields.io/badge/Topic-Looping-orange) ![Version](https://img.shields.io/badge/Solusi-2%20Versi-purple)

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📌 | [Visualisasi & Analisis Pola](#-1-visualisasi--analisis-pola) | Tabel breakdown input vs output + rumus inti |
| 🏗️ | [Blueprint & Kamus Variabel](#️-2-blueprint--kamus-variabel) | Kerangka kode kosong + tabel penamaan variabel |
| 🧠 | [Algoritma Tahan Lupa](#-3-algoritma-tahan-lupa) | Langkah beralasan: kenapa + contoh angka konkret |
| 🚀 | [Pendekatan Bertahap](#-4-pendekatan-bertahap-step-by-step) | Proses membangun kode dari Step 1 → Step 3 |
| ⚔️ | [Evolusi Solusi](#️-5-evolusi-solusi-perbandingan) | Versi 1 (Manual Loop) vs Versi 2 (Spread + Method Chaining) |
| 🧹 | [Naming Convention](#-6-naming-convention-clean-code) | Tabel best practice penamaan variabel |
| ⚠️ | [Akurasi Logika (Gotchas)](#️-7-akurasi-logika-gotchas) | Jebakan umum yang wajib dihindari |
| 🧪 | [Test Cases](#-8-test-cases) | Daftar pengujian lengkap |
| 📝 | [Catatan Akhir](#-catatan-akhir) | Konteks pembuatan dokumentasi |

---

## 📌 1. Visualisasi & Analisis Pola

<a name="visualisasi"></a>

Sebuah kata disebut **Palindrome** jika urutan hurufnya dibaca dari depan maupun dari belakang menghasilkan susunan yang **persis sama**.

> [!TIP]
> 💡 **Analogi Mudah Dipahami — Cermin!**
>
> | | Bukan Palindrome | Palindrome |
> |---|---|---|
> | 📝 | Menulis `blanket` di kertas, lalu membalik kertasnya → hasilnya **berbeda** (`teknalb`) | Menulis `katak` di kertas, lalu membalik kertasnya → hasilnya **tetap sama** (`katak`) |
> | 🪞 | Seperti melihat wajah orang lain di cermin — **beda** | Seperti melihat benda simetris di cermin — **sama persis** |

### 📊 Tabel Breakdown

| Input (`word`) | Susunan Huruf Dibalik | Sama dengan Input? | Output |
| :--- | :--- | :---: | :---: |
| `"katak"` | `k-a-t-a-k` | ✅ Ya | `true` |
| `"blanket"` | `t-e-k-n-a-l-b` | ❌ Tidak | `false` |
| `"civic"` | `c-i-v-i-c` | ✅ Ya | `true` |
| `"kasur rusak"` | `k-a-s-u-r-·-r-u-s-a-k` | ✅ Ya | `true` |
| `"mister"` | `r-e-t-s-i-m` | ❌ Tidak | `false` |

### 💡 Rumus Inti

```
🎯 Rumus  →  Apakah kata_asli === kata_dibalik ?
📌 Output →  true (jika sama) | false (jika beda)
🔐 Tugas  →  Menemukan cara MEMBALIKKAN kata di JavaScript
```

---

## 🏗️ 2. Blueprint & Kamus Variabel

<a name="blueprint"></a>

Sebelum menulis kode, bangun dulu *mental model* — **pahami struktur** sebelum mengisi detail.

### 📖 A. Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|---|---|---|---|
| Parameter Input | `word` | `kata`, `str` | Standar industri (English), deskriptif |
| Penampung Hasil Balik | `reversedWord` | `reversedString`, `rev` | Konsisten dengan konteks `word` |
| Indeks Perulangan | `i` | `x`, `j`, `idx` | `i` adalah standar universal untuk iterasi sederhana |
| Nama Fungsi | `isPalindrome` | `palindrome`, `check` | Prefix `is...` untuk fungsi yang return `boolean` |

> [!IMPORTANT]
> 🔔 **Aturan Emas Naming Boolean:**
> Fungsi yang mengembalikan `true`/`false` **wajib** diawali prefix pertanyaan: `is...`, `has...`, atau `can...`.
> Contoh: `isPalindrome("civic")` terbaca seperti kalimat: *"Is civic a palindrome?"* — sangat intuitif!

### 🗺️ B. Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Balikkan string → bandingkan)

const isPalindrome = (word) => {
  let reversedWord = '';             // [PENAMPUNG] → Tempat menyusun huruf terbalik

  for (let i = ...; ...; ...) {      // [LOOP MUNDUR] → Dari huruf paling belakang ke depan
    // Ambil huruf ke-i dari word
    // Tempelkan ke reversedWord
  }

  return ... ;                       // [EVALUASI] → Bandingkan word asli vs reversedWord
};
```

---

## 🧠 3. Algoritma Tahan Lupa

<a name="algoritma"></a>

Setiap langkah di bawah ini memiliki **3 elemen wajib**: label peran, penjelasan *kenapa*, dan contoh angka konkret.

---

**1.** 🎨 **Siapkan Kanvas Kosong `[VARIABEL PENAMPUNG]`**

- Buat variabel `reversedWord` bertipe string kosong (`''`).
- *Kenapa:* Kita butuh wadah untuk "menempelkan" huruf-huruf yang dikumpulkan secara terbalik, satu per satu. Sama seperti menyiapkan kertas kosong sebelum menulis.

---

**2.** 🔄 **Berjalan Mundur dari Ujung `[FOR LOOP MUNDUR]`**

- Iterasi `i` dimulai dari `word.length - 1`, berhenti ketika `i >= 0`, setiap putaran `i--`.
- *Kenapa:* Indeks string dimulai dari `0` (*zero-based*). Huruf paling belakang selalu berada di posisi **panjang total dikurangi 1**.
- *Contoh Angka:* Kata `"katak"` (panjang 5). Huruf terakhir `'k'` ada di indeks `5 - 1 = 4`. Loop berjalan: `4 → 3 → 2 → 1 → 0`.

```
  Kata:    k   a   t   a   k
  Indeks: [0] [1] [2] [3] [4]  ← word.length - 1 = 4
                                  Loop: 4, 3, 2, 1, 0
```

---

**3.** 🧩 **Gabungkan Huruf `[PENGGABUNGAN STRING]`**

- Di dalam loop, tempelkan `word[i]` ke `reversedWord` menggunakan operator `+=`.
- *Kenapa:* Karena `i` berjalan mundur (4→0), huruf yang ditempel pertama kali adalah huruf **terakhir**, sehingga hasil akhirnya adalah kata yang terbalik.
- *Contoh Konkret:*

| Iterasi | `i` | `word[i]` | `reversedWord` (kumulatif) |
|:---:|:---:|:---:|:---|
| 1 | 4 | `'k'` | `"k"` |
| 2 | 3 | `'a'` | `"ka"` |
| 3 | 2 | `'t'` | `"kat"` |
| 4 | 1 | `'a'` | `"kata"` |
| 5 | 0 | `'k'` | `"katak"` ✅ |

---

**4.** ✅ **Bandingkan & Kembalikan Nilai `[RETURN BOOLEAN]`**

- Langsung `return word === reversedWord` — **tanpa** `if-else`!
- *Kenapa:* Operator `===` sudah menghasilkan `true`/`false` secara alami. Membungkusnya dalam `if-else` adalah kode yang berlebihan (*redundant*).

> [!WARNING]
> 🐛 **Anti-Pattern yang Sering Ditemui:**
> ```javascript
> // ❌ REDUNDANT — jangan lakukan ini!
> if (word === reversedWord) {
>   return true;
> } else {
>   return false;
> }
>
> // ✅ CLEAN — cukup ini saja!
> return word === reversedWord;
> ```

---

## 🚀 4. Pendekatan Bertahap (Step-by-Step)

<a name="bertahap"></a>

Kode dibangun secara inkremental — **bukan langsung full code** — agar setiap lapisan logika terserap dengan baik.

---

**Step 1:** 📋 **Siapkan Kerangka — Penampung & Loop Mundur**

```javascript
const isPalindrome = (word) => {
  let reversedWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    // Siap mengambil huruf dari belakang
  }
};
```

> Pada tahap ini kita baru membuat "rangka" — loop sudah berjalan mundur, tapi belum melakukan apa-apa.

---

**Step 2:** 🧩 **Isi Loop — Susun Huruf Terbalik**

```javascript
const isPalindrome = (word) => {
  let reversedWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];  // ← BARU: tempelkan huruf
  }
};
```

> Sekarang setiap putaran loop mengambil huruf dari belakang dan menempelkannya ke `reversedWord`.

---

**Step 3:** ✅ **Return Hasil Perbandingan**

```javascript
const isPalindrome = (word) => {
  let reversedWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }

  return word === reversedWord;  // ← BARU: langsung return boolean
};
```

> 🎊 **Selesai!** Fungsi sudah lengkap dan berjalan benar untuk semua test cases.

---

## ⚔️ 5. Evolusi Solusi (Perbandingan)

<a name="evolusi"></a>

### Versi 1: Pendekatan Fundamental (Manual Loop)

> 🏷️ **Kategori:** Fundamental | **Cocok untuk:** Coding interview, latihan algoritma

```javascript
const isPalindrome = (word) => {
  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return word === reversedWord;
};
```

### Versi 2: Pendekatan Modern ES6 (Spread + Method Chaining)

> 🏷️ **Kategori:** Best Practice | **Cocok untuk:** Real-world project, production code

```javascript
const isPalindrome = (word) => {
  return word === [...word].reverse().join('');
};
```

**Penjelasan alur method chaining:**
```
word = "katak"
    │
    ├── [...word]       → ['k', 'a', 't', 'a', 'k']   // Spread: pecah ke array
    ├── .reverse()      → ['k', 'a', 't', 'a', 'k']   // Balikkan urutan
    └── .join('')       → "katak"                       // Gabung kembali jadi string
    
    "katak" === "katak"  →  true ✅
```

> [!NOTE]
> 💡 **Kenapa `[...word]` dan bukan `.split('')`?**
> Keduanya menghasilkan hal yang sama — memecah string menjadi array karakter.
> `[...word]` menggunakan **Spread Operator (ES6)** yang lebih modern dan ringkas.
> `.split('')` adalah cara klasik yang juga sangat valid.
> Pilih sesuai preferensi tim — yang penting **konsisten** di seluruh codebase.

### 📊 Tabel Perbandingan

| Kriteria | V1 — Manual Loop 🔧 | V2 — Spread + Chaining ⚡ |
|:---|:---|:---|
| **Jumlah Baris** | 6 baris | 1 baris (inti) |
| **Keterbacaan** | Perlu membaca loop untuk paham | Terbaca langsung seperti kalimat |
| **Performa** | Lebih efisien (tanpa alokasi array) | Sedikit lebih berat (buat array baru) |
| **Kapan Dipakai** | Coding interview, tes algoritma | Production code, real-world project |
| **Mental Model** | Iterasi manual per karakter | Transformasi data berantai |

> [!TIP]
> 🏆 **Rekomendasi:** Untuk pekerjaan sehari-hari, gunakan **Versi 2** karena jauh lebih mudah dibaca dan di-maintain. Gunakan **Versi 1** saat diminta membuktikan pemahaman algoritma dasar.

---

## 🧹 6. Naming Convention (Clean Code)

<a name="naming"></a>

| Aspek | ❌ Kurang Baik | ✅ Lebih Baik | Penjelasan |
| :--- | :--- | :--- | :--- |
| **Konsistensi Bahasa** | `kata` (ID) + `reversedString` (EN) | `word` + `reversedWord` | Hindari "Bahasa Gado-Gado" — pilih satu bahasa dan **konsisten** |
| **Penamaan Fungsi Boolean** | `palindrome(word)` | `isPalindrome(word)` | Prefix `is...` menandakan return `true`/`false` |
| **Singkatan Berlebihan** | `rev`, `rw`, `res` | `reversedWord` | Nama variabel harus bisa menjelaskan dirinya sendiri (*self-documenting*) |

> 📌 **Prinsip Utama:** Kode ditulis sekali, tetapi **dibaca ratusan kali**. Nama variabel yang deskriptif menghemat waktu debugging di masa depan.

---

## ⚠️ 7. Akurasi Logika (Gotchas)

<a name="gotchas"></a>

> [!CAUTION]
> 🔴 **Jebakan #1 — Off-by-One Error pada Indeks**
>
> ```javascript
> // ❌ SALAH — indeks terakhir bukan word.length!
> for (let i = word.length; i >= 0; i--)
>
> // ✅ BENAR — indeks terakhir adalah word.length - 1
> for (let i = word.length - 1; i >= 0; i--)
> ```
>
> Jika string `"katak"` (panjang 5), maka `word[5]` adalah `undefined`.
> Hasilnya: `reversedWord` = `"undefinedkatak"` — **berantakan!**

> [!WARNING]
> 🔴 **Jebakan #2 — Lupa bahwa `===` sudah menghasilkan Boolean**
>
> Banyak pemula menulis `if (a === b) return true; else return false;` padahal cukup `return a === b;`. Kedua bentuk ini identik hasilnya, tapi versi singkat jauh lebih bersih dan profesional.

---

## 🧪 8. Test Cases

<a name="testcases"></a>

```javascript
// TEST CASES
console.log(isPalindrome('katak'));       // true  → dibalik tetap 'katak'
console.log(isPalindrome('blanket'));     // false → dibalik jadi 'teknalb'
console.log(isPalindrome('civic'));       // true  → dibalik tetap 'civic'
console.log(isPalindrome('kasur rusak')); // true  → dibalik tetap 'kasur rusak'
console.log(isPalindrome('mister'));      // false → dibalik jadi 'retsim'
```

```
✅ Test 1: 'katak'       →  true   (palindrome simetris)
✅ Test 2: 'blanket'     →  false  (huruf berubah saat dibalik)
✅ Test 3: 'civic'       →  true   (palindrome simetris)
✅ Test 4: 'kasur rusak' →  true   (palindrome dengan spasi)
✅ Test 5: 'mister'      →  false  (huruf berubah saat dibalik)
```

---

## 📝 Catatan Akhir

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **19 Mei 2026** melalui sesi mentoring interaktif (5 Fase) di **Google Antigravity**. Challenge ini merupakan bagian dari **Quiz Logic Challenge — PHASE-0 WEEK-2** di program RPN. Konten mencakup 2 versi solusi (Manual Loop & Spread + Method Chaining) yang dibangun secara bertahap dari analisis pola hingga clean code.
