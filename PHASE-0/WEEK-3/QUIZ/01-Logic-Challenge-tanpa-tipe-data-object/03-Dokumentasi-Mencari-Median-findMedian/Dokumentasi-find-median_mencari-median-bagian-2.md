# 📊 Dokumentasi Mencari Median — `findMedian` (Part 2)

### ✨ _Evolusi solusi, naming convention, dan jebakan-jebakan yang wajib diwaspadai!_

> 🎯 **Tujuan:** Mengeksplorasi **4 versi solusi** median (dari yang paling eksplisit hingga yang paling ringkas), memahami **best practice penamaan variabel**, dan menghafal **jebakan umum** yang sering menjatuhkan programmer.

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Pilar](https://img.shields.io/badge/Pilar-5%20s/d%207-blue)
![Estimasi](https://img.shields.io/badge/Estimasi%20Baca-10%20menit-green)

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔄 | [Evolusi Solusi](#evolusi) | 4 versi kode dari eksplisit ke ringkas |
| 🏷️ | [Naming Convention](#naming) | Tabel best practice penamaan variabel |
| ⚠️ | [Gotchas & Jebakan](#gotchas) | Kesalahan umum yang wajib dihindari |
| 📊 | [Perbandingan Semua Versi](#perbandingan) | Tabel ringkas kapan pakai versi mana |

---

<a name="evolusi"></a>
## 🔄 Pilar 5 — Evolusi Solusi (4 Versi)

### Versi 1: If-Else Eksplisit *(Hasil Mentoring — Fase 2)*

```javascript
const cariMedian = (arr) => {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const len = sortedArr.length;

  if (len % 2 !== 0) {
    return sortedArr[Math.floor(len / 2)];
  }

  const leftIndex = len / 2 - 1;
  const rightIndex = len / 2;

  return (sortedArr[leftIndex] + sortedArr[rightIndex]) / 2;
};
```

```
🎯 Mental Model: "Cek dulu ganjil atau genap, lalu ambil jalan yang sesuai."
📖 Karakteristik: Paling mudah dibaca, alur logika sangat jelas.
👤 Cocok untuk: Pemula yang baru belajar median.
```

---

### Versi 2: Trik Matematika Tanpa If-Else *(Hasil Mentoring — Fase 3)*

**Ide inti:** Gunakan dua rumus index yang secara ajaib menghasilkan index **sama** untuk ganjil, dan index **berbeda** untuk genap!

```javascript
const cariMedian = (arr) => {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const len = sortedArr.length;

  const midLeft = Math.floor((len - 1) / 2);
  const midRight = Math.floor(len / 2);

  return (sortedArr[midLeft] + sortedArr[midRight]) / 2;
};
```

**Kenapa ini berhasil? Simulasi:**

| `len` | Tipe | `midLeft` = `Math.floor((len-1)/2)` | `midRight` = `Math.floor(len/2)` | Hasil |
|:---:|:---:|:---:|:---:|---|
| **5** | Ganjil | `Math.floor(4/2)` = **2** | `Math.floor(5/2)` = **2** | Index SAMA → `(6+6)/2 = 6` ✅ |
| **4** | Genap | `Math.floor(3/2)` = **1** | `Math.floor(4/2)` = **2** | Index BEDA → `(7+8)/2 = 7.5` ✅ |

> [!TIP]
> 💡 **Kenapa trik ini elegan?** Pada array ganjil, `midLeft` dan `midRight` menunjuk ke index yang **sama**. Angka yang sama ditambah lalu dibagi dua ya hasilnya tetap angka itu sendiri! Contoh: `(6 + 6) / 2 = 6`. Jadi kita bisa menyatukan kedua kasus tanpa `if-else`.

```
🎯 Mental Model: "Selalu ambil 2 index, selalu rata-ratakan. Ganjil? Index-nya kebetulan sama."
📖 Karakteristik: Tidak ada percabangan, sangat elegan secara matematika.
👤 Cocok untuk: Yang suka pendekatan fungsional & minimalis.
```

---

### Versi 3: Ternary Operator *(Kode Mandiri User — Sebelum Mentoring)*

```javascript
function cariMedian(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const len = sortedArr.length;
  const midIndex = Math.floor(len / 2);

  return len % 2 !== 0
    ? sortedArr[midIndex]
    : (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
}
```

> [!NOTE]
> 💡 **Kode ini ditulis secara mandiri sebelum sesi mentoring dimulai!** Ini menunjukkan pemahaman awal yang sudah sangat baik. Versi ini menggunakan **Ternary Operator** (`? :`) sebagai pengganti `if-else`, sehingga logika percabangan bisa ditulis dalam satu statement `return`.

```
🎯 Mental Model: "Satu baris keputusan: ganjil? ambil tengah. Genap? rata-ratakan."
📖 Karakteristik: Ringkas, profesional, satu statement return.
👤 Cocok untuk: Yang sudah nyaman dengan ternary operator.
```

---

### Versi 4: Array Destructuring *(Ditemukan dari Dokumentasi Lain)*

```javascript
const findMedian = (numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const length = sortedNumbers.length;
  const mid = Math.floor(length / 2);

  if (length % 2 !== 0) {
    return sortedNumbers[mid];
  }

  const [left, right] = [sortedNumbers[mid - 1], sortedNumbers[mid]];
  return (left + right) / 2;
};
```

**Baris *magic*-nya:**
```javascript
const [left, right] = [sortedNumbers[mid - 1], sortedNumbers[mid]];
```

Ini setara dengan menulis 2 baris terpisah:
```javascript
const left = sortedNumbers[mid - 1];
const right = sortedNumbers[mid];
```

Tapi dengan **Array Destructuring** (fitur ES6), kita bisa mengekstrak kedua nilai sekaligus dalam satu baris yang sangat *readable*.

```
🎯 Mental Model: "Pecah array sementara langsung ke variabel bernama."
📖 Karakteristik: Sangat readable, nama variabel `left` & `right` sangat deskriptif.
👤 Cocok untuk: Kerja tim — programmer lain langsung paham dalam 1 detik.
```

---

<a name="naming"></a>
## 🏷️ Pilar 6 — Naming Convention

### Tabel Best Practice Penamaan Variabel

| Lokasi / Peran | ❌ Hindari | ✅ Rekomendasi | Alasan |
|---|---|---|---|
| Parameter input | `x`, `data`, `input` | `arr`, `numbers` | Singkatan universal untuk array angka |
| Array terurut | `arr2`, `urut`, `s` | `sortedArr`, `sortedNumbers` | Langsung tahu bahwa sudah di-sort |
| Panjang array | `l`, `p` | `len`, `length` | Singkatan umum di JS |
| Index tengah | `i`, `t`, `idx` | `midIndex`, `mid` | Deskriptif — posisi *middle* |
| Index kiri (genap) | `a`, `l`, `t1` | `midLeft`, `leftIndex`, `left` | Jelas menunjukkan sisi kiri |
| Index kanan (genap) | `b`, `r`, `t2` | `midRight`, `rightIndex`, `right` | Jelas menunjukkan sisi kanan |

### 📌 Prinsip Clean Naming

> [!IMPORTANT]
> 🔔 **Aturan Praktis Kapan `i` Boleh Dipakai:**
> - ✅ `i` boleh dipakai sebagai **counter loop sederhana** (`for (let i = 0; ...)`).
> - ❌ `i` **JANGAN** dipakai untuk variabel yang punya **makna bisnis/logika** (seperti index tengah, posisi kiri/kanan).
> - 📝 Jika variabel akan dibaca lagi di baris lain, berikan nama yang deskriptif!

---

<a name="gotchas"></a>
## ⚠️ Pilar 7 — Gotchas & Jebakan Umum

### 🐛 Gotcha 1: Order of Operations (Urutan Operasi Matematika)

JavaScript mengikuti aturan **KABATAKU** (Kali-Bagi dulu, baru Tambah-Kurang). Tanda kurung `()` memaksa urutan eksekusi.

```javascript
// ❌ SALAH — Pembagian dieksekusi duluan!
const midLeft = Math.floor(len - 1 / 2);
// Proses: len - (1/2) = len - 0.5 → SALAH!

// ✅ BENAR — Pengurangan dieksekusi duluan!
const midLeft = Math.floor((len - 1) / 2);
// Proses: (len - 1) / 2 → BENAR!
```

```javascript
// ❌ SALAH — Hanya sortedArr[midRight] yang dibagi 2!
return sortedArr[midLeft] + sortedArr[midRight] / 2;
// Proses: midLeft + (midRight / 2) → SALAH!

// ✅ BENAR — Jumlahkan dulu, baru dibagi 2!
return (sortedArr[midLeft] + sortedArr[midRight]) / 2;
// Proses: (midLeft + midRight) / 2 → BENAR!
```

> [!CAUTION]
> 🔴 **Jebakan ini sangat berbahaya** karena JavaScript **tidak akan menampilkan error** — kode tetap berjalan, tapi hasilnya **salah secara diam-diam** (*silent bug*). Selalu gunakan tanda kurung `()` untuk memastikan urutan operasi!

---

### 🐛 Gotcha 2: Sorting Default JavaScript

```javascript
// ❌ TANPA CALLBACK — sorting alfabet, bukan numerik!
[10, 2, 1].sort()              // [1, 10, 2]  ← "10" < "2" secara alfabet!

// ✅ DENGAN CALLBACK — sorting numerik yang benar
[10, 2, 1].sort((a, b) => a - b)  // [1, 2, 10] ← benar!
```

> [!WARNING]
> 🐛 **Kenapa `10` dianggap lebih kecil dari `2`?** JavaScript mengubah angka menjadi *string* saat `.sort()` tanpa callback. String `"10"` dimulai dengan karakter `"1"`, yang secara alfabet datang sebelum `"2"`. Maka `"10" < "2"` bernilai `true`!

---

### 🐛 Gotcha 3: Mutasi Array Asli

```javascript
// ❌ BERBAHAYA — array asli ikut berubah!
const sorted = arr.sort((a, b) => a - b);
// arr sekarang JUGA terurut — bisa merusak data di tempat lain!

// ✅ AMAN — buat salinan dulu dengan spread operator
const sorted = [...arr].sort((a, b) => a - b);
// arr tetap utuh, sorted adalah salinan baru yang terurut
```

---

### 🐛 Gotcha 4: Perhitungan Genap di Luar Kondisi

```javascript
// ❌ KURANG OPTIMAL — sumEven dihitung meskipun array ganjil
const midIndex = Math.floor(len / 2);
const sumEven = sortedArr[midIndex - 1] + sortedArr[midIndex];  // selalu jalan!
return len % 2 !== 0 ? sortedArr[midIndex] : sumEven / 2;

// Bahaya jika array hanya 1 elemen: sortedArr[-1] = undefined!
// undefined + 5 = NaN (Not a Number) — walau tidak di-return, tetap boros komputasi

// ✅ LEBIH BAIK — hitung di dalam kondisi saja
return len % 2 !== 0
  ? sortedArr[midIndex]
  : (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
```

---

<a name="perbandingan"></a>
## 📊 Perbandingan Semua Versi

| Aspek | V1: If-Else | V2: Trik Math | V3: Ternary | V4: Destructuring |
|---|:---:|:---:|:---:|:---:|
| **Readability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Keringkasan** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Perlu `if-else`?** | ✅ Ya | ❌ Tidak | ✅ Ya (ternary) | ✅ Ya |
| **Fitur ES6** | Spread | Spread | Spread | Spread + Destructuring |
| **Jumlah `return`** | 2 | 1 | 1 | 2 |
| **Cocok untuk** | Pemula | Minimalis | Profesional | Tim / Kolaborasi |

### 🏆 Rekomendasi Kapan Pakai Versi Mana?

```
📝 Belajar/Ujian?     → Versi 1 (If-Else) — paling mudah dijelaskan
🧮 Code Golf/Ringkas? → Versi 2 (Trik Math) — tanpa percabangan
💼 Production Code?   → Versi 3 (Ternary) — ringkas & profesional
👥 Kerja Tim?         → Versi 4 (Destructuring) — paling readable
```

---

## 📚 Navigasi

| Arah | Link |
|------|------|
| ⬅️ Sebelumnya | [Part 1 — Analisis Pola + Pendekatan Bertahap](./Dokumentasi-find-median_mencari-median-bagian-1.md) |
| 📂 Folder Utama | [Dokumentasi Mencari Median](./README.md) |

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **24 Mei 2026** berdasarkan sesi mentoring langsung di **Google Antigravity** dengan JavaScript. Mencakup 4 versi solusi yang dibahas dari berbagai sudut pandang: mentoring bertahap, kode mandiri sebelum mentoring, eksplorasi teknik matematika, dan referensi dari dokumentasi lain.
