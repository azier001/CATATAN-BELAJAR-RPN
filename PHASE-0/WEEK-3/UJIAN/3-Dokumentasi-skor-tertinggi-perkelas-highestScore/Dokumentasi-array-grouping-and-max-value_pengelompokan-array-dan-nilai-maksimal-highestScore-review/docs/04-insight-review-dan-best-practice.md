# 💡 Insight: Review Kode & Best Practice

### ✨ _Ketika kode yang "lolos test case" ternyata menyimpan cacat logika tersembunyi_

> 🎯 **Tujuan:** Memahami fenomena "False Positive" dalam testing, belajar dari review kode mandiri, dan mengenal alternatif solusi functional programming dengan `.reduce()`.

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔍 | [Review Kode Mandiri](#review-kode) | Analisis kode yang ditulis sebelum mentoring |
| 🎭 | [Fenomena False Positive](#false-positive) | Kode salah tapi lolos test case — kenapa? |
| 🧪 | [Pembuktian dengan Custom Test](#pembuktian) | Membongkar bug dengan test case buatan |
| 🔀 | [Alternatif: `.reduce()`](#reduce) | Versi functional programming |

---

<a name="review-kode"></a>
## 🔍 Review Kode Mandiri

Sebelum sesi mentoring, user sudah pernah mencoba menulis solusi sendiri. Berikut kode aslinya:

```javascript
function highestScore(students) {
  const result = {};
  let maxScore = -Infinity;

  for (const { name, score, class: className } of students) {
    if (!result[className]) {
      if (score > maxScore) {
        maxScore = score;
      }
      result[className] = { name, score };
    }
  }

  return result;
}
```

Secara *syntax* sudah rapi (menggunakan destructuring), tapi ada **2 celah logika**:

| # | Bug | Penjelasan |
|:-:|-----|-----------|
| 1 | **`maxScore` bersifat global** | Hanya ada satu `maxScore` untuk semua kelas. Padahal kita butuh skor tertinggi **per kelas**. Lebih parah: pembaruan `maxScore` tidak memengaruhi keputusan masuk/tidaknya data ke `result` |
| 2 | **Sistem "siapa cepat dia dapat"** | Data hanya masuk saat `!result[className]` (kelas belum ada). Murid kedua dari kelas yang sama **langsung diabaikan** tanpa pernah dicek skornya — karena tidak ada `else if` |

---

<a name="false-positive"></a>
## 🎭 Fenomena "False Positive"

Pertanyaan kritis yang muncul saat review: *"Apakah kode ini menghasilkan output yang benar?"*

Jawabannya mengejutkan: **YA — kode yang salah ini lolos 100% test case bawaan soal!**

### Kenapa Bisa?

Perhatikan urutan data di test case soal:

```
foxes  → Dimitri (90) masuk pertama, Sergei (74) masuk kedua
wolves → Alexei (85) masuk pertama, Anastasia (78) masuk kedua
```

Secara **kebetulan**, murid pertama dari setiap kelas selalu punya skor tertinggi. Karena kode user hanya mengambil murid pertama, hasilnya "kebetulan benar".

> [!CAUTION]
> **Ini adalah False Positive** — kode tampak benar karena test case tidak mencakup variasi urutan data. Bug-nya tertutupi oleh keberuntungan, bukan oleh kebenaran logika.

---

<a name="pembuktian"></a>
## 🧪 Pembuktian Bug dengan Custom Test Case

Untuk membongkar bug, kita membalik urutan data — murid dengan skor kecil masuk lebih dulu:

```javascript
console.log(highestScore([
  { name: 'Sergei',  score: 74, class: 'foxes' },  // Kecil masuk duluan
  { name: 'Dimitri', score: 90, class: 'foxes' }   // Besar masuk belakangan
]));
```

| Versi | Output | Status |
|-------|--------|:------:|
| Kode user (buggy) | `{ foxes: { name: 'Sergei', score: 74 } }` | ❌ Salah |
| Kode yang benar | `{ foxes: { name: 'Dimitri', score: 90 } }` | ✅ Benar |

> [!IMPORTANT]
> **Pelajaran Berharga:** Kode yang sukses melewati test case **tidak selalu** berarti algoritma-nya benar. Test case yang buruk bisa menutupi cacat logika. Biasakan membuat **custom test case** sendiri — terutama untuk edge case seperti **urutan data terbalik**.

Solusi perbaikannya: menghapus `maxScore` global dan menambahkan `else if` — prosesnya sama persis dengan yang didokumentasikan di [Solusi Bertahap](02-solusi-bertahap.md#step-4).

---

<a name="reduce"></a>
## 🔀 Alternatif: Versi Functional dengan `.reduce()`

Selain pendekatan imperative (`for...of`) yang sudah kita pelajari, ada pendekatan *functional programming* menggunakan method `.reduce()` yang sangat populer di framework modern (React/Node.js):

```javascript
const highestScore = (students) => {
  return students.reduce((classWinners, { name, score, class: className }) => {
    if (!classWinners[className] || score > classWinners[className].score) {
      classWinners[className] = { name, score };
    }
    return classWinners; // Wajib return agar accumulator diteruskan
  }, {}); // {} = nilai awal accumulator 'classWinners'
};
```

```
🎯 Fungsi    → Mereduksi Array menjadi satu Object rekapan
📌 Style     → Functional Programming
🔐 Keunikan  → Tidak perlu deklarasi variabel penampung terpisah
```

> [!NOTE]
> **Logika intinya 100% sama** dengan versi imperative — hanya bungkusnya yang berbeda. Kedua versi valid, performanya setara, dan sangat rapi. Pilihan antara keduanya biasanya berdasarkan kesepakatan *style* dengan tim. Lihat perbandingan lengkap di [Ringkasan Versi Kode](../ringkasan-versi-kode.md).

---

⬅️ [Evolusi & Clean Code](03-evolusi-dan-clean-code.md) · ⬆️ [README](../README.md)
