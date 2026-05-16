# ⚡ Versi 2 — Single Loop + `.repeat()`

### ✨ _Pendekatan modern: satu loop utama + built-in method `.repeat()` menggantikan nested loop._

> 🎯 **Tujuan:** Memahami bagaimana `.repeat()` menggantikan nested loop manual, menghasilkan kode yang lebih ringkas tanpa mengubah rumus inti.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Profil Versi](#profil) | Ringkasan kapan & kenapa pakai versi ini |
| 🔄 | [Dari V1 ke V2](#transisi) | Bagaimana nested loop berubah menjadi `.repeat()` |
| 💻 | [Kode Lengkap](#kode) | Solusi final siap pakai |
| 🔍 | [Bedah Kode](#bedah) | Penjelasan baris kunci |
| 🔢 | [Alternatif: 0-Indexed](#zero-indexed) | Versi `.repeat()` dengan loop mulai dari 0 |

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | Single Loop + `.repeat()` |
| 🔢 **Jumlah Loop** | 1 (hanya loop utama) |
| 🧠 **Konsep Utama** | `' '.repeat(row - 1)` + `'*'.repeat(2 * (num - row) + 1)` |
| 📖 **Readability** | ⭐⭐⭐⭐⭐ (paling mudah dibaca) |
| ⚡ **Kompleksitas** | O(n²) — sama dengan V1 (`.repeat()` tetap membuat string sepanjang n) |
| 🎯 **Cocok Untuk** | Real project, kode ringkas, saat nested loop tidak diwajibkan |

> [!TIP]
> 🏆 **Kapan pilih versi ini?**
> Gunakan Versi 2 saat kamu ingin kode yang **ringkas dan mudah dibaca**. Ini adalah *sweet spot* terbaik antara kejelasan dan efisiensi penulisan. Cocok untuk real project di mana readability lebih penting dari demonstrasi fundamental.

---

<a name="transisi"></a>
## 🔄 Dari V1 ke V2 — Apa yang Berubah?

Inti perubahan: **nested loop manual diganti dengan `.repeat()`**. Rumusnya **tidak berubah sama sekali** — hanya cara penulisannya yang berbeda.

| Komponen | V1 (Nested Loop) | V2 (`.repeat()`) |
|:---|:---|:---|
| Spasi | `for (let space = 1; space <= row - 1; space++) { pattern += ' '; }` | `' '.repeat(row - 1)` |
| Bintang | `for (let star = 1; star <= 2 * num - (2 * row - 1); star++) { pattern += '*'; }` | `'*'.repeat(2 * (num - row) + 1)` |
| Jumlah loop | 3 (1 luar + 2 nested) | 1 |

> [!NOTE]
> 💡 **`.repeat()` = Nested Loop yang Dibungkus**
>
> Secara internal, `'*'.repeat(5)` melakukan hal yang **persis sama** dengan loop manual yang mencetak `'*'` sebanyak 5 kali. Bedanya, kita **mendelegasikan** pekerjaan ke JavaScript engine alih-alih menulis loop sendiri.
>
> ```
> 🔄 V1 (Imperatif): "Hei komputer, cetak bintang satu per satu sebanyak 5 kali"
> ⚡ V2 (Deklaratif): "Hei komputer, saya mau 5 bintang — urus sendiri ya"
> ```

---

<a name="kode"></a>
## 💻 Kode Lengkap

```javascript
// ✅ VERSI 2 — Single Loop + .repeat() (1-Indexed)
const piramidaTerbalik = (num) => {
  let pattern = '';

  for (let row = 1; row <= num; row++) {
    pattern += ' '.repeat(row - 1) + '*'.repeat(2 * (num - row) + 1) + '\n';
  }

  return pattern;
};

console.log(piramidaTerbalik(5));
/*
*********
 *******
  *****
   ***
    *
*/
```

---

<a name="bedah"></a>
## 🔍 Bedah Kode — Baris Kunci

Satu-satunya baris yang perlu dipahami adalah isi loop utama:

```javascript
pattern += ' '.repeat(row - 1) + '*'.repeat(2 * (num - row) + 1) + '\n';
```

Mari kita pecah menjadi 3 bagian:

### 1️⃣ `' '.repeat(row - 1)` — Spasi Pendorong

Menghasilkan string berisi spasi sebanyak `row - 1`.

```
row = 1  →  ' '.repeat(0)  =  ''        (0 spasi)
row = 2  →  ' '.repeat(1)  =  ' '       (1 spasi)
row = 5  →  ' '.repeat(4)  =  '    '    (4 spasi)
```

### 2️⃣ `'*'.repeat(2 * (num - row) + 1)` — Bintang Pembentuk

Menghasilkan string berisi bintang sebanyak deret ganjil menurun.

```
row = 1  →  '*'.repeat(2*(5-1)+1)  =  '*'.repeat(9)  =  '*********'
row = 2  →  '*'.repeat(2*(5-2)+1)  =  '*'.repeat(7)  =  '*******'
row = 5  →  '*'.repeat(2*(5-5)+1)  =  '*'.repeat(1)  =  '*'
```

> 📌 Di sini kita menggunakan bentuk rumus `2 * (num - row) + 1` yang lebih ringkas daripada `2 * num - (2 * row - 1)`. Keduanya identik secara matematis.

### 3️⃣ `'\n'` — Pindah Baris

Ditempelkan di akhir setiap baris. Sama seperti V1.

---

<a name="zero-indexed"></a>
## 🔢 Alternatif: 0-Indexed

```javascript
// ✅ VERSI 2 — Single Loop + .repeat() (0-Indexed)
const piramidaTerbalik = (num) => {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    pattern += ' '.repeat(row) + '*'.repeat(2 * (num - row) - 1) + '\n';
  }

  return pattern;
};
```

| Elemen | 1-Indexed | 0-Indexed |
|:---|:---|:---|
| **Spasi** | `' '.repeat(row - 1)` | `' '.repeat(row)` ✨ lebih bersih |
| **Bintang** | `'*'.repeat(2 * (num - row) + 1)` | `'*'.repeat(2 * (num - row) - 1)` |

> 📌 Sama seperti di V1, rumus spasi 0-indexed menjadi lebih bersih — `row` langsung menjadi jumlah spasi tanpa perlu `- 1`.

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [03 — Version 1: Nested Loop](./03-version-1-nested-loop.md) | [README](../README.md) | [05 — Version 3: Reverse Loop](./05-version-3-reverse-loop.md) |
