# 🔻 Inverted Right Triangle — `segitigaTerbalik`

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-Loop%20|%20Pattern%20Printing%20|%20Nested%20Loop-blue?style=for-the-badge)

> 📝 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat
> kembali konsep-konsep yang dipelajari saat mengerjakan challenge Segitiga Siku-siku Terbalik.*

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧩 | [Deskripsi Challenge](#-deskripsi-challenge) | Apa yang diminta soal dan aturan mainnya |
| 📤 | [Expected Output](#-expected-output) | Contoh input/output yang diharapkan |
| ▶️ | [Coba Langsung](#️-coba-langsung) | Snippet siap copy-paste untuk testing |
| 🔍 | [Visualisasi & Analisis Pola](#-visualisasi--analisis-pola) | Tabel breakdown dan penemuan rumus |
| 🗺️ | [Blueprint & Kamus Variabel](#️-blueprint--kamus-variabel) | Kerangka kode + panduan penamaan variabel |
| 🔨 | [Pendekatan Bertahap](#-pendekatan-bertahap-step-by-step) | Membangun solusi step-by-step dari nol |
| 🏆 | [Solusi Final](#-solusi-final) | Kode V1 lengkap dengan penjelasan cara kerja |
| 🔄 | [Evolusi Solusi](#-evolusi-solusi) | V2 Reverse Loop & V3 `.repeat()` |
| 📊 | [Quick Comparison](#-quick-comparison) | Tabel perbandingan semua versi |
| 🏷️ | [Naming Convention](#️-naming-convention) | Best practice penamaan variabel ❌ vs ✅ |
| 💡 | [Konsep Kunci](#-konsep-kunci) | Ringkasan konsep penting dari challenge |
| 🎯 | [Learning Outcomes](#-learning-outcomes) | Apa yang kamu kuasai setelah selesai |

---

## 🧩 Deskripsi Challenge

Buat fungsi `segitigaTerbalik(num)` yang menghasilkan pola **segitiga siku-siku terbalik** menggunakan karakter `'*'` (bintang). Parameter `num` menentukan **jumlah baris** sekaligus **jumlah bintang maksimal** di baris pertama. Baris pertama adalah yang terlebar, dan baris terakhir hanya memiliki 1 bintang. **Wajib menggunakan nested loop.**

```
Input: num = 5
  → Baris: 5 baris
  → Bintang per baris: berkurang dari num hingga 1
  → Karakter cetak: '*' (bintang saja)
Output: Segitiga siku-siku terbalik 5 baris ✅
```

> ⚠️ **Catatan penting:** Fungsi harus me-`return` string — bukan `console.log`.

---

## 📤 Expected Output

| Input | Baris | Output |
|:---:|:---:|:---|
| `segitigaTerbalik(1)` | 1 | `*` |
| `segitigaTerbalik(3)` | 3 | Segitiga terbalik 3 baris |
| `segitigaTerbalik(5)` | 5 | Segitiga terbalik 5 baris (lihat di bawah) |

**Contoh `segitigaTerbalik(5)`:**
```
*****
****
***
**
*
```

---

## ▶️ Coba Langsung

```javascript
console.log(segitigaTerbalik(5));
// Segitiga siku-siku terbalik 5 baris
```

```javascript
console.log(segitigaTerbalik(3));
// ***
// **
// *
```

---

## 🔍 Visualisasi & Analisis Pola

### Tabel Breakdown

| Baris ke- (`row`) | Jumlah Bintang (`*`) | Rumus |
|:---:|:---:|:---:|
| 1 | 5 → `*****` | `num - row + 1` |
| 2 | 4 → `****` | `num - row + 1` |
| 3 | 3 → `***` | `num - row + 1` |
| 4 | 2 → `**` | `num - row + 1` |
| 5 | 1 → `*` | `num - row + 1` |

### Penemuan Rumus

Dari tabel di atas, pola yang ditemukan:

> 🎯 **Rumus Inti:** Jumlah bintang di setiap baris = `num - row + 1`.
>
> Ini adalah **kebalikan** dari segitiga siku-siku normal. Pada segitiga normal, bintang **bertambah** seiring baris (`row`). Di sini, bintang **berkurang** karena kita kurangi nomor baris dari total (`num - row + 1`).
>
> **Contoh:** Baris ke-2, `num = 5` → `5 - 2 + 1 = 4` bintang.

### Alternatif: Reverse Loop

> 💡 **Insight:** Kita juga bisa **mendaur ulang rumus segitiga normal** (`bintang = row`) dengan cara membalik arah loop dari `num` ke `1`. Ini sama persis dengan trik yang dipakai di challenge Piramida Terbalik (folder 08)!

---

## 🗺️ Blueprint & Kamus Variabel

### Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|:---|:---|:---|:---|
| Penampung Akhir | `pattern` | `result`, `res`, `x` | Kita mengembalikan sebuah pola, bukan hitungan |
| Loop Utama (Luar) | `row` | `i`, `y` | Merepresentasikan baris ke-berapa |
| Nested Loop Bintang | `star` | `j`, `k`, `b` | Penghitung bintang pembentuk |

### Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: 1 loop baris + 1 nested loop bintang)

function segitigaTerbalik(num) {
  let pattern = '';                          // [KANVAS] (❌ jangan 'result')

  for (let row = 1; ...) {                   // [LOOP UTAMA] → baris ke-berapa
    for (let star = 1; ...) { ... }          //   [NESTED 1] → cetak bintang
    pattern += '\n';                         //   [PINDAH BARIS]
  }

  return pattern;
}
```

> 💡 **Strukturnya identik** dengan segitiga siku-siku normal (folder 09) — yang berbeda hanya **batas akhir nested loop** bintangnya!

---

## 🔨 Pendekatan Bertahap (Step-by-Step)

### Step 1 — Buat Loop Utama (Kerangka Baris)

Mulai dari yang paling dasar: loop yang berjalan sebanyak `num` kali.

```javascript
const segitigaTerbalik = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += row + '\n';
  }

  return pattern;
};
```

**Output sementara:**
```
1
2
3
4
5
```

> ✅ Loop utama bekerja! Kita sudah bisa "berjalan" dari baris 1 sampai baris 5.

---

### Step 2 — Tambahkan Nested Loop Bintang (Rumus Baru)

Tambahkan nested loop yang mencetak `*` sebanyak `num - row + 1` di setiap baris.

```javascript
const segitigaTerbalik = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let star = 1; star <= num - row + 1; star++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  return pattern;
};
```

**Output:**
```
*****
****
***
**
*
```

> ✅ Solusi lengkap dan berfungsi!

---

## 🏆 Solusi Final

### Versi 1 — Nested Loop dengan Rumus Baru 🔄

```javascript
const segitigaTerbalik = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    for (let star = 1; star <= num - row + 1; star++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  return pattern;
};

console.log(segitigaTerbalik(5));
```

**Cara kerja:**

1. **Loop Luar (`row`)** — Berjalan dari `1` sampai `5`. Menentukan kita sedang di baris ke-berapa.
2. **Loop Dalam (`star`)** — Mencetak bintang sebanyak `num - row + 1`. *(Kenapa: Semakin turun baris, bintang makin sedikit. Contoh: baris ke-2 → `5 - 2 + 1 = 4` bintang).*
3. **Pindah Baris (`\n`)** — Setelah bintang selesai dicetak, pindah ke baris baru.

> ⚠️ **Gotcha:** Rumus `num - row + 1` memiliki `+ 1` karena loop `row` dimulai dari `1` (1-indexed). Jangan lupakan `+ 1` ini, atau bintang di baris pertama akan kurang satu!

---

## 🔄 Evolusi Solusi

### Versi 2 — Reverse Loop (Daur Ulang Rumus Lama) 🔁

```javascript
const segitigaTerbalik = (num) => {
  let pattern = '';

  for (let row = num; row >= 1; row--) {
    for (let star = 1; star <= row; star++) {
      pattern += '*';
    }
    pattern += '\n';
  }

  return pattern;
};

console.log(segitigaTerbalik(5));
```

> 💡 **Insight:** Loop `row` berjalan **mundur** dari `num` ke `1`. Dengan begitu, rumus bintangnya tetap `star <= row` — **sama persis** dengan segitiga siku-siku normal! Kita tidak perlu menghafal rumus baru (`num - row + 1`).

---

### Versi 3 — `.repeat()` (Deklaratif) ⚡

```javascript
const segitigaTerbalik = (num) => {
  let pattern = '';

  for (let row = num; row >= 1; row--) {
    pattern += '*'.repeat(row) + '\n';
  }

  return pattern;
};

console.log(segitigaTerbalik(5));
```

> ✅ Menggabungkan **reverse loop** dan **`.repeat()`** untuk kode yang paling ringkas.

---

### Perbedaan Mental Model

| Aspek | V1 — Rumus Baru 🔄 | V2 — Reverse Loop 🔁 | V3 — `.repeat()` ⚡ |
|:---|:---|:---|:---|
| **Arah Loop** | Maju (`1 → num`) | Mundur (`num → 1`) | Mundur (`num → 1`) |
| **Rumus Bintang** | `num - row + 1` | `row` (daur ulang!) | `row` (daur ulang!) |
| **Jumlah Loop** | 2 loop | 2 loop | 1 loop |
| **Kapan Pakai** | Belajar rumus baru | Pahami konsep reverse | Coding di dunia nyata |

---

## 📊 Quick Comparison

| Versi | Pendekatan | Keunggulan |
|:---|:---|:---|
| **V1 — Rumus Baru** 🔄 | 2 loop, maju, rumus `num - row + 1` | Melatih fundamental, memenuhi syarat quiz |
| **V2 — Reverse Loop** 🔁 | 2 loop, mundur, rumus `row` | Daur ulang rumus segitiga normal! |
| **V3 — `.repeat()`** ⚡ | 1 loop, mundur, deklaratif | Paling ringkas dan readable |

> ⭐ **Rekomendasi:** Untuk quiz (wajib nested loop), gunakan **V1** atau **V2**. Untuk dunia nyata, gunakan **V3**.

---

## 🏷️ Naming Convention

| Variabel | ❌ Bad (Kurang Jelas) | ✅ Good (Deskriptif) | Alasan |
|:---|:---|:---|:---|
| Penampung hasil | `res`, `x`, `string` | `pattern` | Menjelaskan bahwa isinya sebuah "pola" |
| Loop utama | `i`, `y` | `row` | Jelas merepresentasikan "baris" |
| Nested loop | `j`, `z` | `star` | Jelas menghitung jumlah "bintang" |

> 💡 **Kapan `i` dan `j` boleh dipakai?** Saat looping array dasar. Untuk soal pola visual (*pattern printing*), gunakan kata benda deskriptif seperti `row` dan `star` agar kode tetap mudah dibaca seminggu kemudian.

---

## 💡 Konsep Kunci

- **Nested Loop** — Loop utama (baris) + loop bintang (pembentuk)
- **Reverse Loop** — Membalik arah loop dari `num` ke `1` agar bisa mendaur ulang rumus lama
- **Rumus Baru vs Daur Ulang** — `num - row + 1` (rumus baru) vs membalik arah loop (daur ulang `row`)
- **`.repeat()`** — Built-in method untuk menggandakan karakter tanpa loop manual
- **Koneksi dengan Folder 09** — Challenge ini adalah **kebalikan** dari segitiga siku-siku normal

> ⚠️ **Gotcha:** Jangan lupa tambahkan `'\n'` di akhir setiap baris! Tanpa ini, semua bintang akan menyambung jadi satu baris panjang: `***************`.

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menganalisis pola visual dan menemukan rumus `bintang = num - row + 1`
- ✅ Membangun solusi secara bertahap — dari loop angka → nested loop bintang
- ✅ Membuat segitiga terbalik dengan **3 pendekatan** (rumus baru, reverse loop, `.repeat()`)
- ✅ **Mendaur ulang rumus segitiga normal** dengan membalik arah loop — prinsip DRY
- ✅ Menerapkan naming convention yang membuat nested loop mudah dibaca (`row`, `star`)
- ✅ Memahami koneksi antara segitiga normal (folder 09) dan segitiga terbalik (folder 10)

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **16 Mei 2026** berdasarkan sesi mentoring langsung bersama **Google Antigravity**. Segitiga Siku-siku Terbalik adalah **kebalikan** dari Segitiga Siku-siku normal (folder 09). *Insight* paling berharga dari challenge ini adalah penemuan bahwa **kita bisa mendaur ulang rumus lama** hanya dengan membalik arah loop — prinsip yang sama persis dengan Piramida Terbalik (folder 08). Prinsip DRY ini akan terus berguna untuk pola-pola yang lebih kompleks.

---

<div align="center">

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
