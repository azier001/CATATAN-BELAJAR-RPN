# 🔄 Versi 3 — Reverse Loop (Daur Ulang Rumus Piramida Normal)

### ✨ _Pendekatan paling cerdas: membalik arah loop dan mendaur ulang rumus piramida normal tanpa menghafal rumus baru._

> 🎯 **Tujuan:** Memahami *insight* bahwa piramida terbalik = piramida normal yang dibaca dari bawah ke atas, sehingga cukup membalik arah loop tanpa perlu merumuskan formula baru.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 💡 | [Insight Utama](#insight) | Mengapa pendekatan ini brilian |
| 📋 | [Profil Versi](#profil) | Ringkasan kapan & kenapa pakai versi ini |
| 💻 | [V3A — Nested Loop](#v3a) | Reverse loop + nested loop manual |
| ⚡ | [V3B — `.repeat()`](#v3b) | Reverse loop + `.repeat()` |
| 🧮 | [Simulasi Trace](#simulasi) | Bukti bahwa hasilnya identik |
| 🔢 | [Alternatif: 0-Indexed](#zero-indexed) | Versi reverse loop dengan loop mulai dari 0 |

---

<a name="insight"></a>
## 💡 Insight Utama — Mengapa Ini Brilian?

Di [file 02](./02-problem-solving-approach.md), kita menemukan rumus **baru** untuk piramida terbalik:
- Spasi: `row - 1`
- Bintang: `2 * (num - row) + 1`

Tapi ada satu pertanyaan yang mengubah segalanya:

> *"Alih-alih membuat rumus baru untuk spasi dan bintang, bagaimana kalau kita hanya membalik urutan `row`?"*

**Piramida terbalik itu sebenarnya piramida normal yang dibaca dari bawah ke atas!**

```
Piramida Normal (row: 1→5)     Piramida Terbalik (row: 5→1)
    *                           *********
   ***                           *******
  *****                           *****
 *******                           ***
*********                           *
```

Jika kita membalik arah loop (`row` dari `num` mundur ke `1`), kita bisa **mendaur ulang rumus piramida normal** tanpa modifikasi:
- Spasi: `num - row` *(rumus piramida normal, tidak berubah!)*
- Bintang: `2 * row - 1` *(rumus piramida normal, tidak berubah!)*

> [!IMPORTANT]
> 🔑 **Ini adalah pelajaran paling berharga dari challenge ini:**
> Sebelum membuat rumus baru, selalu tanyakan *"Bisakah saya mendaur ulang logika yang sudah ada?"*. Programmer senior melakukan ini setiap hari — dan ini adalah fondasi dari prinsip **DRY** (Don't Repeat Yourself).

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | Reverse Loop (Daur Ulang Rumus Piramida Normal) |
| 🔢 **Jumlah Loop** | 3 (V3A) atau 1 (V3B) |
| 🧠 **Konsep Utama** | Loop mundur (`row = num` → `1`) + rumus piramida normal |
| 📖 **Readability** | ⭐⭐⭐⭐⭐ (rumus sudah familiar!) |
| ⚡ **Kompleksitas** | O(n²) — sama dengan V1 dan V2 |
| 🎯 **Cocok Untuk** | Siapa saja yang sudah menguasai piramida normal |

> [!TIP]
> 🏆 **Kapan pilih versi ini?**
> Gunakan Versi 3 saat kamu **sudah hafal rumus piramida normal** dan tidak ingin menghafal rumus baru. Ini adalah pendekatan yang paling *"programmer-minded"* — mendaur ulang kode yang sudah ada.

---

<a name="v3a"></a>
## 💻 V3A — Reverse Loop + Nested Loop

```javascript
// ✅ VERSI 3A — Reverse Loop + Nested Loop
const piramidaTerbalik = (num) => {
  let pattern = '';

  // LOOP MUNDUR: dari num ke 1
  for (let row = num; row >= 1; row--) {
    // Rumus piramida normal — TANPA MODIFIKASI!
    for (let space = 1; space <= num - row; space++) {
      pattern += ' ';
    }

    for (let star = 1; star <= 2 * row - 1; star++) {
      pattern += '*';
    }

    pattern += '\n';
  }

  return pattern;
};
```

**Perhatikan:** Satu-satunya perbedaan dengan piramida normal adalah baris ini:
```javascript
// Piramida Normal:   for (let row = 1; row <= num; row++)     → maju
// Piramida Terbalik: for (let row = num; row >= 1; row--)     → mundur
```

Rumus spasi (`num - row`) dan bintang (`2 * row - 1`) **100% sama** dengan piramida normal!

---

<a name="v3b"></a>
## ⚡ V3B — Reverse Loop + `.repeat()`

```javascript
// ✅ VERSI 3B — Reverse Loop + .repeat()
const piramidaTerbalik = (num) => {
  let pattern = '';

  for (let row = num; row >= 1; row--) {
    pattern += ' '.repeat(num - row) + '*'.repeat(2 * row - 1) + '\n';
  }

  return pattern;
};
```

> 📌 **Ini adalah versi paling direkomendasikan** — ringkas, familiar, dan tidak perlu menghafal rumus baru.

---

<a name="simulasi"></a>
## 🧮 Simulasi Trace — Bukti Hasilnya Identik (`num = 3`)

| Iterasi | `row` (mundur) | Spasi (`num - row`) | Bintang (`2 * row - 1`) | Output Baris |
|:---:|:---:|:---:|:---:|:---|
| 1 | **3** | 3 - 3 = `0` | 2×3 - 1 = `5` | `*****` |
| 2 | **2** | 3 - 2 = `1` | 2×2 - 1 = `3` | `·***` |
| 3 | **1** | 3 - 1 = `2` | 2×1 - 1 = `1` | `··*` |

**Output akhir:**
```
*****
 ***
  *
```

> ✅ Hasilnya **identik** dengan V1 dan V2! Bukti bahwa membalik loop = membalik piramida.

---

<a name="zero-indexed"></a>
## 🔢 Alternatif: 0-Indexed

```javascript
// ✅ VERSI 3B — Reverse Loop + .repeat() (0-Indexed)
const piramidaTerbalik = (num) => {
  let pattern = '';

  // Mundur dari num-1 ke 0
  for (let row = num - 1; row >= 0; row--) {
    pattern += ' '.repeat(num - row - 1) + '*'.repeat(2 * row + 1) + '\n';
  }

  return pattern;
};
```

| Elemen | 1-Indexed (mundur) | 0-Indexed (mundur) |
|:---|:---|:---|
| **Loop** | `row = num` → `1` | `row = num - 1` → `0` |
| **Spasi** | `num - row` | `num - row - 1` |
| **Bintang** | `2 * row - 1` | `2 * row + 1` |

> 📌 Untuk *reverse loop*, versi **1-indexed** (`row = num` → `1`) terasa lebih bersih karena batasnya lebih natural. Ini salah satu kasus di mana 0-indexed tidak menawarkan keuntungan.

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [04 — Version 2: Built-in Repeat](./04-version-2-built-in-repeat.md) | [README](../README.md) | [06 — Version Comparison](./06-version-comparison.md) |
