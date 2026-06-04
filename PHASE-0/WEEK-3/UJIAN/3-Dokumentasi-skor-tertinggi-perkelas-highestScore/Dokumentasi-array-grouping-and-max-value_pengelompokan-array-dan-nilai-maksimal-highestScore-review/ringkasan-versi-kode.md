# 📋 Ringkasan Versi Kode: Highest Score

### ✨ _Cheat sheet semua versi kode yang teruji — siap copy-paste_

> 🎯 **Tujuan:** Kumpulan semua variasi penulisan kode yang sudah lolos test case (termasuk edge case urutan data terbalik), lengkap dengan karakteristik masing-masing untuk referensi cepat.

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 1️⃣ | [Versi Solusi Pertama](#v1) | Pendekatan `if` / `else if` terpisah |
| 2️⃣ | [Versi Refactoring Eksperimen](#v2) | Perbaikan dari percobaan mandiri |
| 3️⃣ | [Versi Clean Code](#v3) | Best practice imperative (1 baris logika) |
| 4️⃣ | [Versi Functional `.reduce()`](#v4) | Best practice functional programming |
| 📊 | [Tabel Perbandingan](#perbandingan) | Ringkasan perbedaan semua versi |

---

<a name="v1"></a>
## 1️⃣ Versi Solusi Pertama

```
📌 Kategori   → Fundamental
🎯 Style      → Imperative (for...of + if/else if)
👤 Cocok untuk → Pemula yang belajar alur logika percabangan
📖 Detail     → Lihat proses pembuatan di docs/02-solusi-bertahap.md
```

```javascript
const highestScore = (students) => {
  const classWinners = {};

  for (const { name, score, class: className } of students) {
    if (!classWinners[className]) {
      classWinners[className] = { name, score };
    } else if (score > classWinners[className].score) {
      classWinners[className] = { name, score };
    }
  }

  return classWinners;
};
```

---

<a name="v2"></a>
## 2️⃣ Versi Refactoring Eksperimen Mandiri

```
📌 Kategori   → Fundamental (hasil perbaikan bug)
🎯 Style      → Imperative (function declaration + if/else if)
👤 Cocok untuk → Memahami proses debugging & refactoring kode sendiri
📖 Detail     → Lihat analisis bug di docs/04-insight-review-dan-best-practice.md
```

```javascript
function highestScore(students) {
  const result = {};

  for (const { name, score, class: className } of students) {
    if (!result[className]) {
      result[className] = { name, score };
    } else if (score > result[className].score) {
      result[className] = { name, score };
    }
  }

  return result;
}
```

> [!NOTE]
> Struktur algoritma V2 identik dengan V1. Perbedaannya hanya pada: *function declaration* vs *arrow function*, dan penamaan variabel `result` vs `classWinners`.

---

<a name="v3"></a>
## 3️⃣ Versi Clean Code ⭐

```
📌 Kategori   → Best Practice Imperative
🎯 Style      → Imperative (for...of + short-circuit ||)
👤 Cocok untuk → Semua level — standar industri
📖 Detail     → Lihat proses refactoring di docs/03-evolusi-dan-clean-code.md
```

```javascript
const highestScore = (students) => {
  const classWinners = {};

  for (const { name, score, class: className } of students) {
    if (!classWinners[className] || score > classWinners[className].score) {
      classWinners[className] = { name, score };
    }
  }

  return classWinners;
};
```

> [!TIP]
> Ini adalah **versi yang paling direkomendasikan**. Menggabungkan 2 kondisi menjadi 1 baris berkat **short-circuit evaluation**, menghasilkan kode yang ringkas, bersih, dan self-documenting.

---

<a name="v4"></a>
## 4️⃣ Versi Functional Programming (`.reduce()`)

```
📌 Kategori   → Best Practice Functional
🎯 Style      → Functional (Array.reduce())
👤 Cocok untuk → Level menengah ke atas, tim yang menggunakan functional style
📖 Detail     → Lihat penjelasan di docs/04-insight-review-dan-best-practice.md
```

```javascript
const highestScore = (students) => {
  return students.reduce((classWinners, { name, score, class: className }) => {
    if (!classWinners[className] || score > classWinners[className].score) {
      classWinners[className] = { name, score };
    }
    return classWinners;
  }, {});
};
```

---

<a name="perbandingan"></a>
## 📊 Tabel Perbandingan

| Aspek | V1 Fundamental | V2 Eksperimen | V3 Clean Code ⭐ | V4 Functional |
|-------|:-:|:-:|:-:|:-:|
| **Baris logika** | 5 | 5 | 3 | 3 |
| **Duplikasi kode** | ✅ Ada | ✅ Ada | ❌ Tidak | ❌ Tidak |
| **Short-circuit** | ❌ | ❌ | ✅ | ✅ |
| **Variabel terpisah** | ✅ `classWinners` | ✅ `result` | ✅ `classWinners` | ❌ (accumulator) |
| **Readability pemula** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Standar industri** | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

> [!IMPORTANT]
> Semua versi di atas **100% valid** dan lolos seluruh test case termasuk edge case urutan data terbalik. Pilihan antar versi biasanya berdasarkan level pengalaman dan kesepakatan style dengan tim.

---

⬆️ [Kembali ke README](README.md)
