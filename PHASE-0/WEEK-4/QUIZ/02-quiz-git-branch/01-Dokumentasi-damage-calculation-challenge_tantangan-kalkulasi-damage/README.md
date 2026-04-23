# ⚔️ Damage Calculation Challenge — `damageCalculation`

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-Function%20|%20Loop%20|%20Debugging-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

> 💡 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat kembali konsep-konsep yang dipelajari saat mengerjakan challenge Damage Calculation.*

---

## 📋 Deskripsi Challenge

Diberikan fungsi `attack()` dan `damageCalculation()`. Fungsi `damageCalculation()` menerima dua parameter: jumlah serangan dan damage per serangan. Setiap serangan diproses lewat `attack()` yang mengurangi damage sebesar 2. Function harus mengembalikan **total damage** dari semua serangan.

```
Input: numberOfAttacks = 3, damagePerAttack = 10

attack(10) → 8  (serangan ke-1)
attack(10) → 8  (serangan ke-2)
attack(10) → 8  (serangan ke-3)

Output: 24 ✅
```

---

## 🎯 Expected Output

| Input | Output |
|-------|--------|
| `damageCalculation(9, 25)` | `207` |
| `damageCalculation(10, 4)` | `20` |
| `damageCalculation(5, 20)` | `90` |
| `damageCalculation(3, 10)` | `24` |

---

## ▶️ Coba Langsung

```js
console.log(damageCalculation(9, 25));  // 207
console.log(damageCalculation(10, 4));  // 20
console.log(damageCalculation(5, 20));  // 90
```

---

## 🏆 Quick Comparison: Semua Versi

| Versi | Pendekatan | Time Complexity | Keunggulan |
|-------|-----------|-----------------|------------|
| **V1 — Perkalian Langsung** | `numberOfAttacks * attack(damagePerAttack)` | `O(1)` | Paling efisien |
| **V2 — Loop Simulasi** | `for` loop memanggil `attack()` tiap iterasi | `O(n)` | Benar-benar mensimulasikan tiap serangan |

---

## 📁 Struktur Dokumentasi

| File | Topik |
|------|-------|
| 📄 [01-challenge-overview](./docs/01-challenge-overview_gambaran-challenge.md) | Gambaran challenge, soal, alur kerja, analogi |
| 📄 [02-v1-perkalian-langsung](./docs/02-v1-multiplication-approach_perkalian-langsung.md) | V1 — Perkalian langsung `O(1)` |
| 📄 [03-v2-loop-simulasi](./docs/03-v2-loop-simulation_simulasi-loop.md) | V2 — Loop simulasi dengan visualisasi ASCII |
| 📄 [04-proses-debugging](./docs/04-debugging-process_proses-debugging.md) | Kesalahan yang dibuat + cara memperbaikinya |
| 📄 [05-test-cases](./docs/05-test-cases_kasus-pengujian.md) | Test sederhana + test runner lengkap PASS/FAIL |
| 📄 [ringkasan-algoritma](./ringkasan-algoritma-semua-versi.md) | Ringkasan semua versi kode |

---

## 🎓 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Memahami cara membuat **fungsi yang saling memanggil** (function calling function)
- ✅ Membedakan pendekatan **efisien** (`O(1)`) vs **simulasi** (`O(n)`)
- ✅ Memahami perbedaan `return` vs `console.log`
- ✅ Menulis **variabel yang deskriptif** (`totalDamage` bukan hanya `total`)
- ✅ Menghindari kesalahan umum dalam `for` loop: batasan iterasi & nilai `i`
- ✅ Menulis **test case lengkap** dengan PASS/FAIL otomatis

---

<div align="center">

## 🎓 Mari Mulai Belajar!

**👉 [Mulai dari Part 1 → Challenge Overview →](./docs/01-challenge-overview_gambaran-challenge.md)**

---

**Quick Links:**

[01 Overview](./docs/01-challenge-overview_gambaran-challenge.md) · [02 V1 Perkalian](./docs/02-v1-multiplication-approach_perkalian-langsung.md) · [03 V2 Loop](./docs/03-v2-loop-simulation_simulasi-loop.md) · [04 Debugging](./docs/04-debugging-process_proses-debugging.md) · [05 Test Cases](./docs/05-test-cases_kasus-pengujian.md)

---

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
