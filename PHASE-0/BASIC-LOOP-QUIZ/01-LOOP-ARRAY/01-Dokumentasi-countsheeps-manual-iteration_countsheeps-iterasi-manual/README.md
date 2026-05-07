# 🐑 Count Sheeps — Hitung Domba yang Hadir

### ✨ _Menghitung elemen `true` dalam array secara manual menggunakan loop tanpa built-in method_

> 🎯 **Tujuan:** Memahami cara menelusuri array secara manual dengan `for` loop, mengecek setiap elemen, dan menghitung yang memenuhi kondisi — tanpa bantuan method bawaan seperti `.filter()` atau `.forEach()`.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Soal](#soal) | Instruksi challenge & syarat khusus |
| 💻 | [Kode Solusi](#kode-solusi) | 2 versi solusi: Classic `for` & `for...of` |
| 🔍 | [Penjelasan](#penjelasan) | Alur logika step-by-step dengan visualisasi |
| ⚖️ | [Perbandingan Versi](#perbandingan) | Classic `for` vs `for...of` — kapan pakai yang mana? |
| 🛡️ | [Versi Senior Dev](#versi-senior) | Kode dengan Guard Clause & Defensive Programming |
| 🧪 | [Contoh Output](#contoh-output) | Skenario input → output |
| 📚 | [Konsep yang Dipelajari](#konsep) | Rangkuman poin-poin kunci |
| 💡 | [Catatan Tambahan](#catatan) | Insight dari sesi mentoring |

---

<a name="soal"></a>

## 📋 Soal

> **Source:** [Codewars — Counting Sheeps](https://www.codewars.com/kata/54edbc7200b811e956000556)

Diberikan sebuah array yang berisi campuran nilai `true`, `false`, `null`, dan `undefined`. Tugas kita adalah **menghitung berapa banyak elemen yang bernilai `true`**.

> [!IMPORTANT]
> 🔔 **Syarat Khusus:** Wajib menggunakan **loop manual** — tanpa method/built-in function seperti `.filter()`, `.forEach()`, `.reduce()`, dll.

---

<a name="kode-solusi"></a>

## 💻 Kode Solusi

### 🅰️ Versi 1 — Classic `for` Loop

```javascript
function countSheeps(sheep) {
  let count = 0;

  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      count++;
    }
  }

  return count;
}
```

---

### 🅱️ Versi 2 — `for...of` Loop (ES6)

```javascript
function countSheeps(sheep) {
  let count = 0;

  for (const item of sheep) {
    if (item === true) count++;
  }

  return count;
}
```

---

<a name="penjelasan"></a>

## 🔍 Penjelasan

### 🧠 Pola Pikir: Counter Pattern

Logika fungsi ini mengikuti pola **Counter Pattern** — salah satu pola paling fundamental dalam pemrograman:

```
🎯 Fungsi    → Menelusuri array satu per satu, hitung yang memenuhi syarat
📌 Pola      → Bikin variabel → Looping → Update variabel → Return
🔐 Analogi   → Berdiri di depan kandang, menghitung domba yang benar-benar lewat
```

### 📶 Alur Step-by-Step

> **1.** Buat variabel `count` dengan nilai awal `0` — ini "alat penghitung" kita.
>
> **2.** Mulai loop dari index `0` sampai index terakhir array.
>
> **3.** Di setiap iterasi, cek: apakah elemen saat ini **persis** bernilai `true`?
>
> **4.** Jika ya → tambah `count` sebanyak 1. Jika tidak → lewati, lanjut ke elemen berikutnya.
>
> **5.** Setelah semua elemen selesai dicek, kembalikan (`return`) nilai `count`.

### 🎨 Visualisasi Alur

```
Array: [true, false, true, null, undefined, true]
Index:    0      1     2     3       4        5

Iterasi 1 (i=0): sheep[0] = true       → count = 1 ✅
Iterasi 2 (i=1): sheep[1] = false      → count = 1 ⏭️
Iterasi 3 (i=2): sheep[2] = true       → count = 2 ✅
Iterasi 4 (i=3): sheep[3] = null       → count = 2 ⏭️
Iterasi 5 (i=4): sheep[4] = undefined  → count = 2 ⏭️
Iterasi 6 (i=5): sheep[5] = true       → count = 3 ✅

return 3
```

### 🔑 Kenapa Pakai `=== true` (Strict Equality)?

| Operator | Cek | Resiko |
|----------|-----|--------|
| `== true` | Nilai "mirip" true (*loose*) | `1 == true` → `true` 😱 Bisa salah hitung! |
| `=== true` | Nilai **persis** `true` (*strict*) | `1 === true` → `false` ✅ Aman! |

> [!TIP]
> 💡 **Best Practice:** Selalu gunakan `===` (strict equality) agar kode lebih terprediksi dan aman dari bug yang sulit dilacak.

---

<a name="perbandingan"></a>

## ⚖️ Perbandingan Versi — Classic `for` vs `for...of`

| Aspek | Classic `for` 🔵 | `for...of` 🟢 |
|-------|:-----------------:|:--------------:|
| Akses index (`i`) | ✅ Tersedia | ❌ Tidak tersedia |
| Kemudahan baca | 🔵 Standar | 🟢 Lebih bersih |
| Rawan typo | 🔴 Lebih tinggi (`i++`, `j++`) | 🟢 Lebih rendah |
| Fleksibilitas | ✅ Bisa skip index, mundur, dll | ❌ Hanya maju satu per satu |
| Hasil akhir | ✅ Sama | ✅ Sama |

> [!TIP]
> 🏆 **Kesimpulan:** Jika kamu **tidak butuh index** (`i`), gunakan `for...of` karena lebih mudah dibaca dan lebih sedikit kemungkinan salah tulis. Jika kamu **butuh tahu posisi** elemen, gunakan classic `for`.

**Visual Perbandingan:**

```
Classic for : [Index] ───> [Item] ───> [Logika]
for...of    :            [Item] ───> [Logika]   (Lebih pendek!)
```

---

<a name="versi-senior"></a>

## 🛡️ Versi Senior Dev — Defensive Programming

```javascript
function countSheeps(sheeps) {
  // 1. Guard Clause: Pastikan inputnya ada (bukan null/undefined)
  if (!sheeps) return 0;

  let count = 0;

  // 2. Gunakan for...of karena kita tidak butuh 'index'
  for (const sheep of sheeps) {
    // 3. Cek spesifik 'true'
    if (sheep === true) {
      count++;
    }
  }

  return count;
}
```

### Apa Bedanya dengan Versi Dasar?

| Fitur | Versi Dasar | Versi Senior |
|-------|:-----------:|:------------:|
| Guard Clause | ❌ | ✅ `if (!sheeps) return 0` |
| Penamaan variabel | `sheep` / `item` | `sheeps` (jamak) → `sheep` (tunggal) |
| Tahan terhadap input `null` | ❌ Crash | ✅ Return `0` |

> [!NOTE]
> 💡 **Analogi:** Menulis kode itu seperti membangun jembatan. Versi dasar sudah bisa dilewati mobil, tapi versi Senior menambahkan **pagar pengaman** agar kalau ada badai (data error), jembatannya tidak roboh.

---

<a name="contoh-output"></a>

## 🧪 Contoh Output

```
Input:  []                              → Output: 0
Input:  [undefined]                     → Output: 0
Input:  [null]                          → Output: 0
Input:  [false]                         → Output: 0
Input:  [true]                          → Output: 1
Input:  [true,true,true,false,          → Output: 17
         true,true,true,true,
         true,false,true,false,
         true,false,false,true,
         true,true,true,true,
         false,false,true,true]
```

---

<a name="konsep"></a>

## 📚 Konsep yang Dipelajari

- ✅ **Manual Traversal** — Menelusuri array tanpa method bawaan menggunakan `for` loop
- ✅ **Counter Pattern** — Pola dasar: `bikin variabel → looping → update variabel → return`
- ✅ **Array Access** — Menggunakan `array[index]` untuk mengambil data di posisi tertentu
- ✅ **Strict Equality (`===`)** — Membandingkan nilai secara ketat agar kode lebih aman
- ✅ **`for...of` (ES6)** — Alternatif modern yang lebih bersih saat tidak butuh index
- ✅ **Guard Clause** — Teknik defensive programming untuk menangani input tak terduga
- ✅ **Penamaan Variabel** — Konvensi jamak (`sheeps`) untuk koleksi, tunggal (`sheep`) untuk item

---

<a name="catatan"></a>

## 💡 Catatan Tambahan

> [!TIP]
> 🔁 **Counter Pattern** adalah pola yang akan sangat sering kamu temui — bukan hanya untuk menghitung boolean, tapi juga untuk:
> - Menghitung jumlah huruf vokal dalam string
> - Mencari nilai tertinggi/terendah
> - Menjumlahkan total harga belanja
> - Dan banyak lagi!
>
> Kuasai pola ini, dan kamu sudah punya fondasi kuat untuk banyak challenge berikutnya. 💪

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **7 Mei 2026** berdasarkan sesi mentoring langsung di **Windows**. Challenge bersumber dari [Codewars — Counting Sheeps](https://www.codewars.com/kata/54edbc7200b811e956000556).
