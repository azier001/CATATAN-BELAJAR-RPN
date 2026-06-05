# 🔨 Solusi Bertahap (V1: Imperative)

### ✨ _Menerjemahkan algoritma menjadi kode — satu langkah pada satu waktu_

> 🎯 **Tujuan:** Membangun solusi pertama secara bertahap dari blueprint yang sudah disiapkan di [file sebelumnya](01-analisis-dan-strategi.md), menghasilkan kode V1 yang berjalan sempurna.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧱 | [Tahap Pembuatan Kode](#tahap-pembuatan-kode) | 4 langkah membangun kode dari nol |
| ⚠️ | [Edge Case & Gotchas](#edge-case-gotchas) | Jebakan umum yang harus diwaspadai |
| ✅ | [Solusi Final V1](#solusi-final-v1) | Kode utuh siap pakai |

---

<a name="tahap-pembuatan-kode"></a>
## 🧱 Tahap Pembuatan Kode

Kita akan mengisi blueprint dari [01-analisis-dan-strategi.md](01-analisis-dan-strategi.md) secara bertahap. Setiap langkah menambahkan satu "bagian" logika.

### Langkah 1 — Mengisi Fungsi `sorting`

Kita memanfaatkan *built-in method* `.sort()` bawaan JavaScript. Untuk mengurutkan dari **terbesar ke terkecil** (descending), kita bandingkan `b - a`.

```javascript
function sorting(arrNumber) {
  return arrNumber.sort((a, b) => b - a);
}
```

```
Kenapa b - a?
→ Jika hasilnya positif, b ditempatkan sebelum a (b lebih besar)
→ Jika negatif, a ditempatkan sebelum b (a lebih besar)
→ Efeknya: urutan dari besar ke kecil

Contoh: sort([2, 8, 4]) → [8, 4, 2]
```

### Langkah 2 — Menangkap Angka Terbesar & Menyiapkan Counter

Array yang masuk ke `getTotal` sudah terurut descending. Maka angka terbesar **pasti** di `index 0`. Kita juga siapkan variabel `counter` mulai dari `0`.

```javascript
function getTotal(arrNumber) {
  const highestNumber = arrNumber[0];
  let counter = 0;
}
```

```
Kenapa const untuk highestNumber?
→ Nilainya tidak akan berubah sepanjang eksekusi fungsi

Kenapa let untuk counter?
→ Nilainya akan terus bertambah di dalam loop
```

### Langkah 3 — Loop & Bandingkan Setiap Elemen

Kita gunakan `for...of` karena lebih bersih dibandingkan `for` loop klasik — tidak perlu mengelola index secara manual.

```javascript
  for (const number of arrNumber) {
    if (number === highestNumber) counter++;
  }
```

```
Kenapa for...of, bukan for biasa?
→ Kita hanya butuh nilai elemennya, bukan posisi index-nya
→ Lebih sedikit kode, lebih sedikit peluang bug

Contoh trace:
  number = 8, highestNumber = 8 → sama! counter = 1
  number = 8, highestNumber = 8 → sama! counter = 2
  number = 6, highestNumber = 8 → beda, skip
```

### Langkah 4 — Return String Hasil

Kita gunakan **Template Literal** (backtick) untuk menyisipkan variabel ke dalam string:

```javascript
  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`;
```

> [!TIP]
> Template Literal `` `...${variabel}...` `` jauh lebih mudah dibaca dibanding concatenation manual dengan operator `+`. Ini sudah jadi standar di JavaScript modern (ES6+).

---

<a name="edge-case-gotchas"></a>
## ⚠️ Edge Case & Gotchas

### 1. Array Kosong `[]`

Jika `arrNumber` kosong, maka `arrNumber[0]` akan bernilai `undefined`. Kode kita akan crash atau menghasilkan output aneh.

**Solusi:** Gunakan teknik **Early Return** (guard clause) di baris paling atas:

```javascript
if (arrNumber.length === 0) return '';
```

```
Kenapa di baris paling atas?
→ Menghentikan eksekusi sedini mungkin
→ Semua kode di bawahnya aman karena array pasti berisi minimal 1 elemen
→ Pola ini disebut "Guard Clause" — best practice di clean code
```

> [!WARNING]
> Tanpa guard clause ini, test case `mostFrequentLargestNumbers([])` akan menghasilkan `'angka paling besar adalah undefined dan jumlah kemunculan sebanyak 0 kali'` — **bukan string kosong** seperti yang diminta soal.

### 2. `.sort()` Bersifat Mutative

> [!CAUTION]
> Method `.sort()` di JavaScript **mengubah array aslinya** (mutasi). Artinya, setelah `sorting([2, 8, 4])` dipanggil, array original ikut berubah urutannya. Dalam challenge ini hal ini tidak masalah karena `mostFrequentLargestNumbers` memang meneruskan hasil sort ke `getTotal`. Namun di proyek nyata, waspadai efek samping ini.

### 3. `===` vs `==`

Selalu gunakan **strict equality** (`===`) saat membandingkan, bukan `==`. Operator `==` melakukan *type coercion* yang bisa menghasilkan perbandingan tidak akurat.

---

<a name="solusi-final-v1"></a>
## ✅ Solusi Final V1 (Imperative — `for...of`)

Gabungan seluruh langkah menjadi kode utuh yang berjalan sempurna:

```javascript
function sorting(arrNumber) {
  return arrNumber.sort((a, b) => b - a);
}

function getTotal(arrNumber) {
  // Guard clause: tangani array kosong
  if (arrNumber.length === 0) return '';

  // Ambil angka terbesar (pasti di index 0 setelah sort descending)
  const highestNumber = arrNumber[0];
  let counter = 0;

  // Loop: hitung kemunculan angka terbesar
  for (const number of arrNumber) {
    if (number === highestNumber) counter++;
  }

  // Return string hasil
  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`;
}
```

```
Karakteristik V1:
🏷️ Paradigma   → Imperative (langkah demi langkah eksplisit)
📏 Baris kode  → ~12 baris (di getTotal)
💾 Memori      → O(1) — tidak membuat array baru
⚡ Kecepatan   → O(N) — satu kali loop
✅ Status      → Lolos semua test case
```

---

⬅️ [01-analisis-dan-strategi.md](01-analisis-dan-strategi.md) · ➡️ [03-evolusi-dan-clean-code.md](03-evolusi-dan-clean-code.md)
