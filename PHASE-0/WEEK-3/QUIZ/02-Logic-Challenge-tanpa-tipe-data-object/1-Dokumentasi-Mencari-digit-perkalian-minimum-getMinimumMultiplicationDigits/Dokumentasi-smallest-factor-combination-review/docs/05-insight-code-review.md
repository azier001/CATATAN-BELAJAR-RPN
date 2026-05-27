# 🔎 Insight: Code Review & Refactoring Pendekatan Array

### ✨ _Membedah kode orisinal yang ditulis sendiri sebelum mentoring — menemukan bug tersembunyi dan belajar dari kesalahan_

> 🎯 **Tujuan:** Melakukan code review terhadap pendekatan **Array-based** yang ditulis secara mandiri — menemukan celah logika, inefisiensi arsitektur, lalu memperbaikinya sambil tetap menjaga gaya pemrograman aslinya.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📝 | [Kode Orisinal](#kode-orisinal) | Kode yang ditulis sebelum sesi mentoring |
| ✅❌ | [Hasil Code Review](#code-review) | Kelebihan + 3 celah bahaya yang ditemukan |
| 🐛 | [Deep Dive: Bug `length / 2`](#deep-dive-bug) | Visualisasi mengapa elemen tengah terlewat |
| 🔧 | [Hasil Refactoring](#refactoring) | Kode yang diperbaiki + penjelasan perubahan |
| ⚖️ | [Array vs On-the-fly](#perbandingan-paradigma) | Kapan pakai Array, kapan langsung hitung? |
| 🎯 | [Kesimpulan & Key Takeaways](#kesimpulan) | Rangkuman pelajaran dari code review |

---

<a name="kode-orisinal"></a>
## 📝 Kode Orisinal (Sebelum Mentoring)

Pendekatan ini menyimpan seluruh pasangan faktor ke dalam **Array** terlebih dahulu, lalu di-loop ulang untuk mencari nilai minimum:

```javascript
function digitPerkalianMinimum(angka) {
  const result = [];

  for (let i = 1; i <= Math.round(angka / 2); i++) {
    if (angka % i === 0) {
      result.push([i, angka / i]);
    }
  }

  let min = Infinity;

  for (let i = 0; i < result.length / 2; i++) {
    const [first, second] = result[i];
    const formatted = `${first}${second}`;

    if (formatted.length < min) {
      min = formatted.length;
    }
  }

  return min;
}
```

> [!NOTE]
> 💡 Kode ini ditulis **sebelum sesi mentoring** — secara mandiri dan tanpa panduan. Meskipun hasilnya benar untuk banyak kasus, ada celah tersembunyi yang baru ketahuan saat di-review.

---

<a name="code-review"></a>
## ✅❌ Hasil Code Review

### 🌟 Kelebihan (Pros)

```
✅ Destructuring Array     →  Sudah pakai sintaks modern: const [first, second] = result[i]
✅ Inisiatif Optimasi      →  Ada upaya memotong loop (Math.round(angka / 2))
✅ Separation of Concerns  →  Tugas "kumpulkan faktor" dan "cari minimum" dipisah jelas
```

### 🐛 3 Celah Bahaya (Gotchas)

#### Gotcha #1 — Pemotongan Loop Kedua `result.length / 2`

> [!CAUTION]
> 🔴 **Bug Serius: Elemen Tengah Array Bisa Terlewat!**
>
> Jika input `24`, array `result` berisi **7** pasangan faktor (index 0–6).
>
> ```
> Loop kedua: i < result.length / 2
>           = i < 7 / 2
>           = i < 3.5
>
> Yang dicek: index 0, 1, 2  ← hanya 3 dari 7!
> Yang TERLEWAT: index 3, 4, 5, 6  ← termasuk pasangan [4, 6]!
> ```
>
> Jika faktor terkecil ternyata berada di **index 3** (tengah), kode ini menghasilkan **jawaban salah**.

---

#### Gotcha #2 — Pemborosan Memori (Space Complexity)

> [!WARNING]
> 🐛 **Array membengkak untuk input besar!**
>
> | Pendekatan | Space Complexity | Input 1 juta |
> |:-----------|:----------------:|:------------:|
> | ❌ Simpan ke Array dulu | O(N) | Array berisi ratusan ribu elemen 🔴 |
> | ✅ Langsung hitung (on-the-fly) | O(1) | Hanya 1 variabel `minDigits` 🟢 |
>
> Untuk soal mencari **min/max**, menyimpan semua data dulu lalu mencari nilainya adalah **pemborosan** — kita bisa langsung membandingkan sambil jalan.

---

#### Gotcha #3 — `angka / 2` vs `Math.sqrt`

```
📊 Perbandingan batas loop pencarian faktor:

  Input = 1.000.000

  ❌ angka / 2         →  500.000 iterasi  (masih setengah juta!)
  ✅ Math.sqrt(angka)  →  1.000 iterasi    (500x lebih cepat!)
```

> [!TIP]
> 💡 `angka / 2` memang memotong separuh, tapi `Math.sqrt` memotong secara **eksponensial** — perbedaannya semakin besar seiring angka membesar.

---

<a name="deep-dive-bug"></a>
## 🐛 Deep Dive: Bug `length / 2`

Mari visualisasikan mengapa bug ini terjadi untuk input `24`:

### Array `result` yang terbentuk:

```
Index:  [0]       [1]       [2]       [3]       [4]       [5]       [6]
Data:   [1,24]    [2,12]    [3,8]     [4,6]     [6,4]     [8,3]     [12,2]
Digit:    3         3         2         2         2         2          3
```

### Apa yang dicek loop kedua (`i < 3.5`):

```
  ✅ Index 0 → [1, 24] → "124" → 3 digit
  ✅ Index 1 → [2, 12] → "212" → 3 digit
  ✅ Index 2 → [3, 8]  → "38"  → 2 digit  ← kebetulan ketemu!
  ─────────────────────────────────────────
  ❌ Index 3 → [4, 6]  → TIDAK DICEK
  ❌ Index 4 → [6, 4]  → TIDAK DICEK
  ❌ Index 5 → [8, 3]  → TIDAK DICEK
  ❌ Index 6 → [12, 2] → TIDAK DICEK
```

> [!WARNING]
> 🐛 Pada kasus **24**, hasilnya **kebetulan benar** karena pasangan 2-digit ditemukan di index 2 (sebelum batas). Tapi pada angka lain, bisa saja pasangan terkecil berada **tepat di tengah** — dan kode ini akan **melewatkannya**.

---

<a name="refactoring"></a>
## 🔧 Hasil Refactoring (Menjaga Gaya Array)

Refactoring ini memperbaiki ketiga bug di atas **sambil tetap menjaga gaya pemrograman Array + Destructuring** dari kode asli:

```javascript
function digitPerkalianMinimum(angka) {
  const result = [];

  // REFACTOR 1: Ganti angka / 2 → Math.sqrt
  //   Lebih cepat DAN otomatis mencegah duplikasi terbalik
  for (let i = 1; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      result.push([i, angka / i]);
    }
  }

  let min = Infinity;

  // REFACTOR 2: Hapus batas "/ 2" → semua data ter-cek
  // REFACTOR 3: Gunakan for...of → destructuring lebih bersih
  for (const [first, second] of result) {
    const formatted = `${first}${second}`;

    if (formatted.length < min) {
      min = formatted.length;
    }
  }

  return min;
}
```

### 📋 Ringkasan 3 Perubahan

| # | Sebelum ❌ | Sesudah ✅ | Alasan |
|---|:----------|:----------|:-------|
| 1 | `i <= Math.round(angka / 2)` | `i <= Math.sqrt(angka)` | 500x lebih cepat + cegah duplikat |
| 2 | `i < result.length / 2` | Iterasi **semua** elemen | Mencegah elemen tengah terlewat |
| 3 | `const [first, second] = result[i]` | `for (const [first, second] of result)` | Sintaks modern, lebih bersih |

> [!TIP]
> 💡 **`for...of` + Destructuring** adalah kombinasi favorit developer modern:
>
> ```javascript
> // ❌ Klasik — harus akses index manual
> for (let i = 0; i < result.length; i++) {
>   const [first, second] = result[i];
> }
>
> // ✅ Modern — langsung destructure dari iterasi
> for (const [first, second] of result) {
>   // first dan second langsung tersedia!
> }
> ```

---

<a name="perbandingan-paradigma"></a>
## ⚖️ Array vs On-the-fly: Kapan Pakai Yang Mana?

| Aspek | 🗄️ Simpan ke Array Dulu | ⚡ Langsung Hitung (On-the-fly) |
|:------|:-----------------------:|:------------------------------:|
| Space Complexity | O(N) — array membesar | O(1) — hanya 1 variabel |
| Kapan cocok? | Jika data **dipakai ulang** nanti | Jika hanya butuh **1 hasil akhir** (min/max) |
| Contoh use case | Tampilkan semua faktor ke user | Cari digit minimum saja |
| Challenge ini | 🔴 Overkill — data hanya dicek sekali | 🟢 **Ideal** — hanya perlu `minDigits` |

> [!IMPORTANT]
> 🔑 **Aturan Praktis:**
> Jangan menampung data pencarian ke **Array** jika yang diminta di akhir hanya **satu nilai** (min, max, count). Langsung bandingkan di dalam loop yang sama — ini disebut **on-the-fly computation** dan menekan space complexity ke O(1).

---

<a name="kesimpulan"></a>
## 🎯 Kesimpulan & Key Takeaways

```
✅ HATI-HATI LENGTH / 2   →  Operasi matematika pada batas loop array (length / 2)
                             bisa membuat elemen tengah TERLEWAT jika length ganjil

✅ ARRAY ≠ SELALU BENAR   →  Menyimpan data ke array itu BOROS jika kita hanya
                             butuh 1 nilai akhir — gunakan on-the-fly computation

✅ FOR...OF DESTRUCTURING  →  Kombinasi for...of + destructuring array menghemat
                             kode dan meningkatkan readability secara drastis

✅ CODE REVIEW = BELAJAR   →  Kode yang "sudah jalan" belum tentu "sudah benar"
                             Code review menemukan bug yang testing kadang lewatkan
```

> [!NOTE]
> 💡 **Prinsip Code Review:** Kesalahan di kode orisinal ini **bukan hal memalukan** — justru menjadi bahan belajar paling berharga. Developer senior pun rutin melakukan code review untuk menemukan celah yang terlewat.

---

| ⬅️ Sebelumnya | 📋 Daftar Isi | Selanjutnya ➡️ |
|:-:|:-:|:-:|
| [04 — Insight Best Practice](./04-insight-best-practice.md) | [README](../README.md) | — |
