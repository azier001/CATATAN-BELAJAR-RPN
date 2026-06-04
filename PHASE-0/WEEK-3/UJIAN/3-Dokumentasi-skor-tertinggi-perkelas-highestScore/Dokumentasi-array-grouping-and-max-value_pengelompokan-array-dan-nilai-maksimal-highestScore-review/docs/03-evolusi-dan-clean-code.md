# 🔄 Evolusi & Clean Code

### ✨ _Dari kode yang "sudah jalan" menuju kode yang elegan dan mudah dibaca_

> 🎯 **Tujuan:** Memahami proses refactoring, konsep short-circuit evaluation, dan pentingnya naming convention untuk menghasilkan kode berkualitas industri.

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔄 | [Refactoring: 2 Kondisi → 1](#refactoring) | Menggabungkan `if` dan `else if` menjadi satu baris logika |
| ⚡ | [Short-Circuit Evaluation](#short-circuit) | Kenapa urutan kondisi sangat penting |
| 🏷️ | [Naming Convention](#naming) | Mengubah `result` → `classWinners` dan alasannya |
| 🏆 | [Kode Paling Ideal](#kode-ideal) | Versi final best practice imperative |

---

<a name="refactoring"></a>
## 🔄 Refactoring: Menggabungkan 2 Kondisi → 1

Di [Solusi Bertahap](02-solusi-bertahap.md), kode final kita punya dua kondisi terpisah dengan **isi eksekusi yang sama persis**:

```javascript
// SEBELUM refactoring (2 kondisi terpisah)
if (!result[className]) {
  result[className] = { name, score };        // ← sama
} else if (score > result[className].score) {
  result[className] = { name, score };        // ← sama
}
```

Karena keduanya melakukan hal yang identik, kita bisa menggabungkannya menggunakan operator OR (`||`):

```javascript
// SESUDAH refactoring (1 baris logika)
if (!result[className] || score > result[className].score) {
  result[className] = { name, score };
}
```

| Aspek | Sebelum | Sesudah |
|-------|---------|---------|
| Jumlah baris logika | 5 baris | 3 baris |
| Duplikasi kode | ✅ Ada (2× assignment) | ❌ Tidak ada |
| Readability | Jelas tapi verbose | Ringkas dan elegan |

> [!TIP]
> **Kapan harus refactor?** Jika kamu melihat baris kode yang **sama persis** muncul di 2 cabang `if/else`, itu sinyal kuat untuk digabung menggunakan operator logika.

---

<a name="short-circuit"></a>
## ⚡ Short-Circuit Evaluation

Ada pelajaran krusial dari cara penulisan kondisi di atas: **urutan pengecekan sangat penting!**

### ✅ Urutan yang BENAR

```javascript
if (!result[className] || score > result[className].score)
//  ───── CEK 1 ─────    ──────── CEK 2 ────────
//  "Kelas belum ada?"    "Skor lebih tinggi?"
```

**Alur eksekusi pada iterasi pertama** (kelas `foxes` belum ada):
1. CEK 1: `!result['foxes']` → `!undefined` → **`true`**
2. JavaScript langsung masuk ke blok `if` → **CEK 2 dilewati**
3. Aman! `result['foxes'].score` tidak pernah diakses

### ❌ Urutan yang SALAH (Crash!)

```javascript
if (score > result[className].score || !result[className])
//  ──────── CEK 2 ────────           ───── CEK 1 ─────
```

**Alur eksekusi pada iterasi pertama** (kelas `foxes` belum ada):
1. CEK 2: `score > result['foxes'].score` → mengakses `undefined.score`
2. 💥 **`TypeError: Cannot read properties of undefined`**

> [!CAUTION]
> **Gotcha:** Saat menggunakan operator `||`, JavaScript membaca dari **kiri ke kanan**. Jika kondisi kiri sudah `true`, kondisi kanan **tidak pernah dievaluasi**. Ini disebut **Short-Circuit Evaluation**. Selalu letakkan pengecekan keberadaan (*existence check*) di sisi **kiri** agar kondisi yang bisa *crash* di sisi kanan aman terlindungi.

---

<a name="naming"></a>
## 🏷️ Naming Convention

Kode yang berjalan benar saja tidak cukup — kode juga harus **mudah dipahami**. Penyesuaian terakhir yang kita lakukan adalah mengganti nama variabel penampung:

```
❌  const result = {};         →  Terlalu generik. "Result" dari apa?
✅  const classWinners = {};   →  Langsung jelas: "Daftar juara per kelas"
```

> [!NOTE]
> Detail lengkap tabel penamaan semua variabel bisa dilihat di [Kamus Variabel — Visualisasi & Analisis](01-visualisasi-dan-analisis.md#kamus-variabel).

---

<a name="kode-ideal"></a>
## 🏆 Kode Paling Ideal (Best Practice Imperative)

Dengan menggabungkan **refactoring** + **naming convention**, inilah versi paling rapi dan mudah dibaca:

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

```
🎯 Kualitas    → Ringkas, bersih, self-documenting
📌 Style       → Imperative (for...of loop)
🔐 Level       → Standar industri, cocok untuk pemula hingga menengah
```

---

⬅️ [Solusi Bertahap](02-solusi-bertahap.md) · ⬆️ [README](../README.md) · ➡️ [Insight: Review & Best Practice](04-insight-review-dan-best-practice.md)
