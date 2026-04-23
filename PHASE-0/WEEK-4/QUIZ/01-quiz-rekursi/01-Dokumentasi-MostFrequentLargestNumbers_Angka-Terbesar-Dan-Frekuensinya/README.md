# 🔢 Most Frequent Largest Numbers — `mostFrequentLargestNumbers`

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-Sorting%20|%20Array%20|%20Counting-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

> 💡 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat kembali konsep-konsep yang dipelajari saat mengerjakan challenge mostFrequentLargestNumbers.*

---

## 📋 Deskripsi Challenge

Diberikan tiga function. Yang boleh diisi hanya `sorting` dan `getTotal` — function utama `mostFrequentLargestNumbers` **tidak boleh disentuh**. Tugasnya: cari angka terbesar dari array, lalu hitung berapa kali angka itu muncul.

```
Input: [2, 8, 4, 6, 8, 5, 8, 4]

sorting → [8, 8, 8, 6, 5, 4, 4, 2]
getTotal → angka terbesar = 8, muncul 3 kali

Output: 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
```

---

## 🎯 Expected Output

| Input | Output |
|-------|--------|
| `[2, 8, 4, 6, 8, 5, 8, 4]` | `'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'` |
| `[122, 122, 130, 100, 135, 100, 135, 150]` | `'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'` |
| `[1, 1, 1, 1]` | `'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'` |
| `[]` | `''` |

---

## ▶️ Coba Langsung

```javascript
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
// 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
```

---

## 🏆 Quick Comparison: Semua Versi

| Versi | Pendekatan | Keunggulan |
|-------|-----------|------------|
| **V1 — Awal** | `.sort()` langsung + `for...of` | Mudah dipahami, tapi mutasi array asli |
| **V2 — Final ⭐** | `[...arr].sort()` + `for...of` + `break` | Aman dari mutasi, efisien dengan early break |
| **V3 — Math.max** | `Math.max(...arr)` + `.filter()` | Paling singkat, tanpa perlu sorting |
| **V4 — Manual Sort** | Selection Sort + `for` loop | Untuk belajar algoritma sorting dari nol |

---

## 📁 Struktur Dokumentasi

| File | Topik |
|------|-------|
| 📄 [01-challenge-overview](./docs/01-challenge-overview_gambaran-challenge.md) | Soal, expected output, analogi |
| 📄 [02-alur-berpikir](./docs/02-problem-solving-approach_alur-berpikir.md) | Breakdown masalah, pseudocode, insight kunci |
| 📄 [03-v1-solusi-awal](./docs/03-v1-initial-solution_solusi-awal.md) | V1 — Solusi awal dengan bug mutasi |
| 📄 [04-v2-solusi-final](./docs/04-v2-final-solution_solusi-final.md) | V2 — Solusi final dengan spread + early break ⭐ |
| 📄 [05-v3-mathmax-filter](./docs/05-v3-mathmax-filter_mathmax-filter.md) | V3 — Math.max + filter, paling singkat |
| 📄 [06-v4-manual-sort](./docs/06-v4-manual-sort_selection-sort.md) | V4 — Selection Sort manual |
| 📄 [07-insight](./docs/07-insight-mutation-efficiency_mutasi-dan-efisiensi.md) | Insight: mutasi, early break, pisah tanggung jawab |
| 📄 [08-test-cases](./docs/08-test-cases_kasus-pengujian.md) | Test runner lengkap PASS/FAIL |
| 📄 [ringkasan-algoritma](./ringkasan-algoritma-semua-versi.md) | Ringkasan semua versi kode |

---

## 🎓 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Memahami kenapa `.sort()` berbahaya jika tanpa copy terlebih dahulu (**mutating method**)
- ✅ Memanfaatkan hasil sorting — `arr[0]` langsung jadi angka terbesar, tanpa `Math.max()`
- ✅ Menggunakan **early break** untuk berhenti lebih efisien dibanding `reduce`
- ✅ Membandingkan pendekatan `O(n log n)` (sort) vs `O(n)` (Math.max + filter)
- ✅ Memisahkan tanggung jawab tiap function untuk kode yang lebih mudah di-debug

---

<div align="center">

## 🎓 Mari Mulai Belajar!

**👉 [Mulai dari Part 1 → Challenge Overview →](./docs/01-challenge-overview_gambaran-challenge.md)**

---

**Quick Links:**

[01 Overview](./docs/01-challenge-overview_gambaran-challenge.md) · [02 Alur Berpikir](./docs/02-problem-solving-approach_alur-berpikir.md) · [03 V1](./docs/03-v1-initial-solution_solusi-awal.md) · [04 V2 Final](./docs/04-v2-final-solution_solusi-final.md) · [05 V3](./docs/05-v3-mathmax-filter_mathmax-filter.md) · [06 V4](./docs/06-v4-manual-sort_selection-sort.md) · [07 Insight](./docs/07-insight-mutation-efficiency_mutasi-dan-efisiensi.md) · [08 Test Cases](./docs/08-test-cases_kasus-pengujian.md)

---

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
