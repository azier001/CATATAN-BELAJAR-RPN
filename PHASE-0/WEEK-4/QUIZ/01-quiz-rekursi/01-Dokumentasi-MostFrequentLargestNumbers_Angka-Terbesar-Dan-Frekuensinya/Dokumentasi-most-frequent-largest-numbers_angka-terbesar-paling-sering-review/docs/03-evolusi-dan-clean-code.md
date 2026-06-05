# ⚡ Evolusi & Clean Code (V2: Declarative)

### ✨ _Dari loop manual ke one-liner — refactoring menuju kode yang lebih ekspresif_

> 🎯 **Tujuan:** Memahami proses refactoring dari V1 (imperative) ke V2 (declarative), membandingkan kelebihan masing-masing, dan menerapkan standar naming convention yang bersih.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔄 | [Proses Refactoring](#proses-refactoring) | Mengubah `for...of` menjadi `.filter()` |
| ⚖️ | [Perbandingan V1 vs V2](#perbandingan-v1-v2) | Tabel kelebihan & kekurangan |
| 🏷️ | [Naming Convention](#naming-convention) | Analisis penamaan variabel |
| ✅ | [Solusi Final V2](#solusi-final-v2) | Kode utuh clean version |

---

<a name="proses-refactoring"></a>
## 🔄 Proses Refactoring

Di [file sebelumnya](02-solusi-bertahap.md) kita sudah punya V1 yang bekerja sempurna dengan `for...of`. Sekarang pertanyaannya:

> **Bisa nggak blok `for...of` yang 3 baris itu dijadikan satu baris saja?**

**Jawabannya: Bisa!** Dengan memanfaatkan method `.filter()`.

### Cara Kerja `.filter()`

Method `.filter()` menyaring elemen array berdasarkan kondisi, lalu mengembalikan **array baru** berisi elemen yang lolos:

```
Array awal:     [8, 8, 8, 6, 5, 4, 4, 2]
Filter (=== 8): [8, 8, 8]              ← array baru!
.length:        3                       ← jumlah kemunculan
```

### Transformasi Kode

**Sebelum (V1 — 4 baris):**
```javascript
  let counter = 0;

  for (const number of arrNumber) {
    if (number === highestNumber) counter++;
  }
```

**Sesudah (V2 — 1 baris):**
```javascript
  const counter = arrNumber.filter((number) => number === highestNumber).length;
```

> [!TIP]
> Perhatikan perubahan dari `let` ke `const`! Karena `.filter().length` langsung menghasilkan nilai final, `counter` tidak perlu di-*reassign* — sehingga bisa dideklarasikan dengan `const`. Ini membuat kode lebih **predictable** dan aman.

---

<a name="perbandingan-v1-v2"></a>
## ⚖️ Perbandingan V1 vs V2

| Aspek | V1: `for...of` (Imperative) | V2: `.filter()` (Declarative) |
|-------|----------------------------|-------------------------------|
| **Cara Kerja** | Mendikte langkah demi langkah: siapkan counter, loop, cek, tambah | Menyuruh komputer menyaring, tanpa detail langkah |
| **Keterbacaan** | Mudah dibaca, tapi memakan lebih banyak baris | Sangat ringkas dan ekspresif — langsung "to the point" |
| **Jumlah Baris** | ~4 baris untuk logika counting | ~1 baris |
| **Deklarasi Counter** | `let` (mutable) | `const` (immutable) |
| **Memori** | 🟢 **Lebih hemat** — tidak membuat array baru | 🟡 Sedikit lebih boros — `.filter()` membuat array baru |
| **Rekomendasi** | Data berskala sangat besar (jutaan) | ✅ **Kebanyakan kasus** — readability lebih penting |

> [!NOTE]
> Untuk kebanyakan kasus pengembangan aplikasi sehari-hari, **V2 (`.filter()`) sangat direkomendasikan** karena kodenya jauh lebih mudah dibaca dan di-maintain. Perbedaan memori hanya terasa signifikan pada data berskala jutaan elemen.

---

<a name="naming-convention"></a>
## 🏷️ Naming Convention

Penamaan variabel yang kita gunakan sejak awal sudah mengikuti *best practice*. Berikut pembedahan alasannya:

| Peran Variabel | ✅ Rekomendasi | ❌ Hindari | Alasan |
|----------------|---------------|------------|--------|
| Angka terbesar | `highestNumber` | `max`, `x`, `angka` | `max` terlalu umum dan bisa bentrok dengan `Math.max`. `highestNumber` sangat spesifik. |
| Alat penghitung | `counter` | `jml`, `c`, `hitung` | Istilah universal di programming. Alternatif: `totalOccurrence` jika ingin lebih deskriptif. |
| Elemen di loop/filter | `number` | `i`, `val`, `e` | Singular dari parameter plural `arrNumber` — langsung jelas ini "satu angka". |
| Callback `.sort()` | `a`, `b` | `num1`, `angka2` | Konvensi standar global JS. Mengubahnya justru membingungkan. |

> [!IMPORTANT]
> Prinsip utama naming: **nama variabel harus bisa dibaca seperti kalimat bahasa Inggris**. Contoh: `if (number === highestNumber)` terbaca seperti *"if this number equals the highest number"*.

---

<a name="solusi-final-v2"></a>
## ✅ Solusi Final V2 (Declarative — `.filter()`)

Kode final yang sudah di-refactor dan menerapkan clean naming:

```javascript
function sorting(arrNumber) {
  return arrNumber.sort((a, b) => b - a);
}

function getTotal(arrNumber) {
  // Guard clause: tangani array kosong
  if (arrNumber.length === 0) return '';

  // Ambil angka terbesar dari index 0
  const highestNumber = arrNumber[0];

  // Hitung kemunculan dengan filter (declarative)
  const counter = arrNumber.filter((number) => number === highestNumber).length;

  // Return string hasil
  return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`;
}

// ⛔ FUNGSI UTAMA (Bawaan Soal — jangan diubah)
function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}
```

```
Karakteristik V2:
🏷️ Paradigma   → Declarative (ekspresif, to the point)
📏 Baris kode  → ~9 baris (di getTotal) — lebih ringkas dari V1
💾 Memori      → O(N) — .filter() membuat array baru
⚡ Kecepatan   → O(N) — satu kali iterasi filter
✅ Status      → Lolos semua test case
⭐ Nilai tambah → const counter (immutable), lebih predictable
```

---

⬅️ [02-solusi-bertahap.md](02-solusi-bertahap.md) · ➡️ [04-insight-pendekatan-lanjutan.md](04-insight-pendekatan-lanjutan.md)
