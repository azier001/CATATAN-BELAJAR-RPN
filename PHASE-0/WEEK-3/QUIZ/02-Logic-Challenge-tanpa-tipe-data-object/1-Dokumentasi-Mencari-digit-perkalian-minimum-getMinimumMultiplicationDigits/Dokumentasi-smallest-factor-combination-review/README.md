# 🧮 Smallest Factor Combination — Kombinasi Faktor Terkecil

### ✨ _Mencari jumlah digit minimum dari penggabungan pasangan faktor sebuah angka_

> 🎯 **Challenge:** Diberikan sebuah angka bulat, temukan pasangan faktor yang jika digabungkan menjadi string menghasilkan **jumlah digit paling sedikit**.
>
> ```javascript
> digitPerkalianMinimum(24)  // → 2  (dari pasangan 3 × 8 → "38")
> digitPerkalianMinimum(90)  // → 3  (dari pasangan 9 × 10 → "910")
> digitPerkalianMinimum(1)   // → 2  (dari pasangan 1 × 1 → "11")
> ```

---

## 📑 Daftar Dokumentasi

| No | File | Topik | Pilar /mentor-challenge |
|----|------|-------|------------------------|
| 🔍 | [01 — Analisis Logika](./docs/01-analisis-logika.md) | Memahami masalah, tabel breakdown pola, diskusi Q&A | Pilar 1 (Visualisasi) + Pilar 7 (Gotchas) |
| 🛠️ | [02 — Solusi Bertahap](./docs/02-solusi-bertahap.md) | Blueprint, kamus variabel, kode step-by-step | Pilar 2 (Algoritma) + Pilar 3 (Blueprint) + Pilar 4 (Step-by-Step) |
| 🚀 | [03 — Evolusi & Clean Code](./docs/03-evolusi-dan-clean-code.md) | Optimasi O(N) → O(√N), naming convention English | Pilar 5 (Evolusi) + Pilar 6 (Naming) |
| 💎 | [04 — Insight Best Practice](./docs/04-insight-best-practice.md) | JSDoc, caching sqrt, anti-konkatenasi, Math.min | Solusi standar industri |
| 🔎 | [05 — Code Review Array](./docs/05-insight-code-review.md) | Bedah kode orisinal, bug length/2, refactoring | Code review & paradigma Array vs On-the-fly |

---

## 🧠 Ringkasan Evolusi Solusi

```
V1 — Solusi Dasar                    V2 — Solusi Optimal              Best Practice
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Loop: 1 → N                         Loop: 1 → √N                     Loop: 1 → √N (cached)
Gabung: `${i}${angka/i}`            Gabung: `${f1}${f2}`             Hitung: String().length + String().length
Bandingkan: if (< minDigit)          Bandingkan: if (< minDigits)      Bandingkan: Math.min()
Kompleksitas: O(N)                   Kompleksitas: O(√N)              Kompleksitas: O(√N) + memory optimal
```

---

## ⭐ Kode Solusi Rekomendasi (Best Practice)

Ini adalah versi solusi akhir yang paling direkomendasikan, menggabungkan optimasi algoritma `O(√N)` dan optimasi manajemen memori (anti-konkatenasi).

```javascript
/**
 * Mencari jumlah digit minimum dari penggabungan pasangan faktor sebuah angka
 * @param {number} targetNumber - Angka yang akan dicari faktornya
 * @returns {number} Jumlah digit paling sedikit dari pasangan faktor
 */
const digitPerkalianMinimum = (targetNumber) => {
  let minDigits = Infinity;

  // OPTIMASI 1: Caching nilai akar kuadrat
  const maxDivisor = Math.sqrt(targetNumber);

  for (let divisor = 1; divisor <= maxDivisor; divisor++) {
    if (targetNumber % divisor === 0) {
      const quotient = targetNumber / divisor;

      // OPTIMASI 2: Hitung digit TANPA menggabungkan string
      const totalDigits = String(divisor).length + String(quotient).length;

      // OPTIMASI 3: Math.min menggantikan blok if
      minDigits = Math.min(minDigits, totalDigits);
    }
  }

  return minDigits;
};
```

> [!TIP]
> 💡 Untuk detail mendalam mengenai mengapa arsitektur ini lebih baik dari versi dasar, baca [04 — Insight Best Practice](./docs/04-insight-best-practice.md).

---

## 🔑 Konsep Kunci Yang Dipelajari

| Konsep | Penjelasan Singkat |
|:-------|:-------------------|
| **Modulo (`%`)** | Operator untuk mengecek apakah angka A habis dibagi angka B |
| **Faktor Cermin** | Pasangan faktor selalu bercermin di titik `√N` — cukup cek satu sisi |
| **`Infinity` sebagai initial value** | Nilai awal untuk pencarian minimum — agar pembanding pertama pasti menang |
| **Template Literals** | Cara modern menggabungkan angka menjadi string: `` `${a}${b}` `` |
| **Anti-Konkatenasi** | Hitung `.length` masing-masing lalu jumlahkan — lebih hemat dari gabung string |
| **`Math.min()`** | Fungsi built-in untuk menggantikan blok `if` perbandingan sederhana |
| **`for...of` + Destructuring** | Iterasi array dengan langsung mengekstrak nilainya |
| **On-the-fly Computation** | Langsung bandingkan di loop — tanpa menyimpan ke array dulu |

---

## ⚠️ Gotchas & Jebakan Umum

> [!CAUTION]
> **3 jebakan yang harus dihindari:**
>
> | # | Jebakan | Dampak | Solusi |
> |---|---------|--------|--------|
> | 1 | Batas loop `i < angka` (tanpa `=`) | Input `1` → loop tidak jalan → BUG | Gunakan `i <= angka` |
> | 2 | `let minDigit` di dalam loop | Nilai ke-reset setiap putaran | Taruh **di luar** loop |
> | 3 | `result.length / 2` pada array ganjil | Elemen tengah terlewat | Iterasi **semua** elemen |

---

## 📂 Struktur Folder

```
Dokumentasi-smallest-factor-combination_kombinasi-faktor-terkecil-review/
├── 📄 README.md                          ← Kamu di sini
└── 📁 docs/
    ├── 01-analisis-logika.md             ← Fase 1: Visualisasi & Analisis
    ├── 02-solusi-bertahap.md             ← Fase 2: Solusi Pertama (Step-by-Step)
    ├── 03-evolusi-dan-clean-code.md      ← Fase 3 & 4: Evolusi + Clean Code
    ├── 04-insight-best-practice.md       ← Insight: Solusi Best Practice
    └── 05-insight-code-review.md         ← Insight: Code Review Pendekatan Array
```

---

> 📝 **Catatan:**
> Dokumentasi ini dibuat pada **27 Mei 2026** berdasarkan sesi mentoring challenge `digitPerkalianMinimum` (Smallest Factor Combination) menggunakan metode **5 Fase /mentor-challenge** dengan format **/setup-doc**. Disusun di **Google Antigravity** dengan **JavaScript** sebagai bahasa pemrograman.
