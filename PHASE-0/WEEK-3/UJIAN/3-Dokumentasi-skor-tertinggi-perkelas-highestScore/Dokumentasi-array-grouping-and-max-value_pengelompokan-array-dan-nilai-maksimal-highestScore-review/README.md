# 🏆 Challenge: Highest Score

### ✨ _Temukan juara dari setiap kelas — perjalanan dari nol hingga best practice_

> 🎯 **Tujuan:** Memahami cara mengelompokkan data array of objects berdasarkan kategori tertentu, lalu menyaring data terbaik dari masing-masing kelompok menggunakan JavaScript.

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📝 | [Deskripsi Soal](#deskripsi-soal) | Penjelasan tantangan dan contoh test case |
| 🗺️ | [Peta Pembelajaran](#peta-pembelajaran) | Gambaran besar perjalanan belajar dari awal hingga akhir |
| 📂 | [Navigasi Dokumentasi](#navigasi-dokumentasi) | Link ke semua file dokumentasi detail |

---

<a name="deskripsi-soal"></a>
## 📝 Deskripsi Soal

Diberikan sebuah array berisi data murid (object), di mana setiap murid memiliki properti `name`, `score`, dan `class`. Tugas kita adalah membuat fungsi `highestScore` yang mengembalikan sebuah **object** berisi data murid dengan skor tertinggi dari **masing-masing kelas**.

### Contoh Input

```javascript
const students = [
  { name: 'Dimitri',   score: 90, class: 'foxes' },
  { name: 'Alexei',    score: 85, class: 'wolves' },
  { name: 'Sergei',    score: 74, class: 'foxes' },
  { name: 'Anastasia', score: 78, class: 'wolves' }
];
```

### Expected Output

```javascript
{
  foxes:  { name: 'Dimitri', score: 90 },
  wolves: { name: 'Alexei',  score: 85 }
}
```

> [!NOTE]
> Inti tantangan ini adalah **grouping + filtering**: kelompokkan berdasarkan `class`, lalu ambil yang `score`-nya paling tinggi dari setiap kelompok.

---

<a name="peta-pembelajaran"></a>
## 🗺️ Peta Pembelajaran

Dokumentasi ini merekam perjalanan belajar dari **menganalisis pola** hingga **menulis kode best practice**, termasuk proses debugging dan insight berharga dari review kode mandiri.

```
📊 Visualisasi Pola     → Memahami logika sebelum ngoding
       ↓
🔨 Solusi Bertahap      → Menulis kode step-by-step (dan menemukan bug!)
       ↓
🔄 Evolusi & Clean Code → Refactoring + naming convention
       ↓
💡 Insight & Review     → False positive, best practice, reduce()
       ↓
📋 Ringkasan Versi Kode → Cheat sheet semua versi yang teruji
```

---

<a name="navigasi-dokumentasi"></a>
## 📂 Navigasi Dokumentasi

| No | File | Isi Utama |
|----|------|-----------|
| 1 | [Visualisasi & Analisis](docs/01-visualisasi-dan-analisis.md) | Simulasi "Buku Rekap", algoritma logika, blueprint & kamus variabel |
| 2 | [Solusi Bertahap](docs/02-solusi-bertahap.md) | Proses pengerjaan step 1→4, debugging bug, kode final pertama |
| 3 | [Evolusi & Clean Code](docs/03-evolusi-dan-clean-code.md) | Refactoring, short-circuit evaluation, naming convention |
| 4 | [Insight: Review & Best Practice](docs/04-insight-review-dan-best-practice.md) | Review kode mandiri, false positive, alternatif `.reduce()` |
| 📋 | [Ringkasan Versi Kode](ringkasan-versi-kode.md) | Cheat sheet semua versi kode yang teruji |

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **4 Juni 2026** berdasarkan sesi mentoring langsung
> di **Google Antigravity** menggunakan JavaScript (Node.js).
> Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow
> `/mentor-challenge` dengan format visual `/setup-doc`.

---

➡️ **Mulai belajar:** [Visualisasi & Analisis](docs/01-visualisasi-dan-analisis.md)
