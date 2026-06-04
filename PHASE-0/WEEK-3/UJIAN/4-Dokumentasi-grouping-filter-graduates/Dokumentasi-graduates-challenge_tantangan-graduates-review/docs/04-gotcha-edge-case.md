# ⚠️ Gotcha: Edge Case "Array Kosong"

### ✨ _Mengapa `.filter().reduce()` adalah jebakan maut untuk challenge ini_

> 🎯 **Tujuan:** Deep dive ke anti-pattern paling umum dalam algoritma
> grouping — memahami **mengapa** melakukan filtering sebelum grouping
> merusak integritas data, dan bagaimana menghindarinya.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧨 | [Anti-Pattern: `filter().reduce()`](#anti-pattern) | Kode yang tampak benar tapi berbahaya |
| 🔬 | [Simulasi Kerusakan Data](#simulasi) | Trace eksekusi langkah demi langkah |
| ✅ | [Solusi: Grouping First](#solusi) | Best practice yang menjamin keutuhan data |
| 🧠 | [Prinsip Universal](#prinsip) | Pelajaran yang berlaku di luar challenge ini |

---

<a name="anti-pattern"></a>

## 🧨 Anti-Pattern: `filter().reduce()`

Banyak developer pemula langsung menulis chaining seperti ini — tampak
bersih dan "fungsional", tapi **menyimpan bom waktu**:

```javascript
// ❌ ANTI-PATTERN: Membuang data sebelum mengelompokkan
const graduates = (students) => {
  return students
    .filter(({ score }) => score > 75)       // ← Bom ada di sini
    .reduce((acc, { name, score, class: className }) => {
      acc[className] ||= [];
      acc[className].push({ name, score });
      return acc;
    }, {});
};
```

> [!CAUTION]
> Kode di atas akan **lolos** di sebagian besar test case biasa. Kode ini
> hanya **gagal** saat ada kelas yang seluruh muridnya tidak lulus —
> menjadikannya bug yang sangat sulit dideteksi saat review.

---

<a name="simulasi"></a>

## 🔬 Simulasi Kerusakan Data

Gunakan data berikut untuk membuktikan kerusakannya:

```javascript
const students = [
  { name: "Dimitri", class: "foxes",  score: 90 },
  { name: "Sergei",  class: "foxes",  score: 74 },
  { name: "Ivan",    class: "bears",  score: 50 },
  { name: "Boris",   class: "bears",  score: 60 },
];
// bears → SEMUA muridnya tidak lulus
```

### Tahap 1 — Setelah `.filter(score > 75)`

```javascript
// Yang tersisa setelah filter:
[
  { name: "Dimitri", class: "foxes", score: 90 }
]
// ⚠️ Sergei, Ivan, Boris DIBUANG — beserta info kelas mereka!
```

### Tahap 2 — Setelah `.reduce()`

```javascript
// Output akhir:
{
  foxes: [{ name: "Dimitri", score: 90 }]
}
// ❌ Properti "bears" TIDAK ADA sama sekali!
```

### Perbandingan Output

| Properti | ❌ `filter().reduce()` | ✅ Grouping First |
| :--- | :--- | :--- |
| `foxes` | `[{ Dimitri, 90 }]` | `[{ Dimitri, 90 }]` |
| `bears` | ⛔ **tidak ada** | `[]` ← tetap muncul! |

> [!IMPORTANT]
> Inti masalahnya: `.filter()` membuang **seluruh murid** yang gagal
> **sebelum** `reduce` sempat membaca nama kelas mereka. Kelas yang
> muridnya gagal semua kehilangan "wakil" untuk mendaftarkan diri.

---

<a name="solusi"></a>

## ✅ Solusi: Grouping First

Hindari `.filter()` sepenuhnya. Andalkan **`reduce` tunggal** yang
menangani grouping dan filtering dalam satu pass:

```javascript
// ✅ BEST PRACTICE: Grouping First
const graduates = (students) => {
  return students.reduce((acc, { name, score, class: className }) => {
    // 1. SELALU buat map kelas (apapun nilainya)
    acc[className] ||= [];

    // 2. Baru filter: hanya murid lulus yang di-push
    if (score > 75) {
      acc[className].push({ name, score });
    }

    return acc;
  }, {});
};
```

Output dengan data yang sama:
```javascript
{
  foxes: [{ name: "Dimitri", score: 90 }],
  bears: []   // ✅ Tetap terdaftar meski kosong!
}
```

> [!TIP]
> Pendekatan ini memberikan **jaminan 100%** bahwa setiap kelas yang
> muncul di input array akan terdaftar di output object — minimal
> sebagai array kosong `[]`.

---

<a name="prinsip"></a>

## 🧠 Prinsip Universal

Pelajaran dari gotcha ini berlaku **jauh lebih luas** dari challenge graduates:

```
🎯 Prinsip 1  → Jangan filter data sebelum membangun struktur kategori
📌 Prinsip 2  → Inisialisasi wadah dan pengisian data = 2 fase TERPISAH
🔐 Prinsip 3  → Bug yang hanya muncul di edge case = bug TERSULIT dideteksi
```

Kapan saja kamu menemukan requirement seperti ini:
> *"Kategori yang kosong harus tetap muncul di output"*

...maka **selalu gunakan strategi Grouping First**: bangun kerangka
kategori dulu secara lengkap, baru saring data yang mengisinya.

---

⬅️ [03 — Evolusi Solusi](03-evolusi-solusi.md) · ⬆️ [Kembali ke README](../README.md)
