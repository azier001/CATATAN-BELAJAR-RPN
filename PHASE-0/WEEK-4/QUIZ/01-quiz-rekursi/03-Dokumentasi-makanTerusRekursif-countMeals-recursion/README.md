# 🍽️ Makan Terus Rekursif — `makanTerusRekursif`

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-orange?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-Recursion%20|%20Tail%20Recursion%20|%20Base%20Case-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

> 📝 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat kembali konsep-konsep yang dipelajari saat mengerjakan challenge Makan Terus Rekursif.*

---

## 🧩 Deskripsi Challenge

Diberikan sebuah fungsi `makanTerusRekursif(waktu)` yang menerima satu parameter berupa waktu. Seorang customer makan di restoran AYCE (All You Can Eat) dan akan terus makan selama waktunya belum habis. Setiap kali memesan makanan, waktu berkurang **15 menit**. Function mengembalikan **berapa kali** customer memesan makanan dalam waktu yang diberikan.

```
waktu = 45
  → makan ke-1 (waktu: 45 → 30)
  → makan ke-2 (waktu: 30 → 15)
  → makan ke-3 (waktu: 15 → 0)
  → waktu habis ✅ total: 3 kali makan
```

> ⚠️ **Catatan penting:** Wajib menggunakan **rekursif**!

---

## 📤 Expected Output

| Input | Output |
|-------|--------|
| `45` | `3` |
| `100` | `7` |
| `10` | `1` |
| `66` | `5` |
| `90` | `6` |
| `0` | `0` |

---

## ▶️ Coba Langsung

```js
console.log(makanTerusRekursif(45));
// Output: 3
```

```js
console.log(makanTerusRekursif(100));
// Output: 7
```

```js
console.log(makanTerusRekursif(0));
// Output: 0
```

---

## 📊 Quick Comparison: Semua Versi

| Versi | Pendekatan | Keunggulan |
|-------|-----------|------------|
| **V1 — Rekursif Langsung** | `return 1 + rekursif(waktu - 15)` | Paling ringkas, mudah dibaca |
| **V2 — Tail Recursion Default Parameter** | Akumulator `count = 0` di parameter | Lebih efisien, tidak ada "hutang" |
| **V3 — Tail Recursion Helper Function** | `count` disembunyikan di `helper` | Aman dari kesalahan input luar |
| **V4 — Rekursif Variable Update** | `waktu -= 15` sebelum rekursif | Eksplisit, mudah di-debug |

---

## 📂 Struktur Dokumentasi

| File | Topik |
|------|-------|
| 📄 [01-challenge-overview_gambaran-challenge.md](./docs/01-challenge-overview_gambaran-challenge.md) | Gambaran lengkap challenge & alur berpikir |
| 📄 [02-problem-solving-approach_alur-berpikir.md](./docs/02-problem-solving-approach_alur-berpikir.md) | Cara memecah masalah sebelum menulis kode |
| 📄 [03-v1-direct-recursion_rekursif-langsung.md](./docs/03-v1-direct-recursion_rekursif-langsung.md) | V1 — Rekursif langsung dengan `1 + rekursif()` |
| 📄 [04-v2-tail-recursion-default-parameter_parameter-default.md](./docs/04-v2-tail-recursion-default-parameter_parameter-default.md) | V2 — Tail recursion dengan default parameter |
| 📄 [05-v3-tail-recursion-helper-function_fungsi-pembantu.md](./docs/05-v3-tail-recursion-helper-function_fungsi-pembantu.md) | V3 — Tail recursion dengan helper function |
| 📄 [06-v4-recursion-variable-update_update-variabel.md](./docs/06-v4-recursion-variable-update_update-variabel.md) | V4 — Rekursif dengan variable update |
| 📄 [07-visualization-all-versions_visualisasi-semua-versi.md](./docs/07-visualization-all-versions_visualisasi-semua-versi.md) | Visualisasi & unwinding semua versi |
| 📄 [08-base-case-pitfall_jebakan-base-case.md](./docs/08-base-case-pitfall_jebakan-base-case.md) | Jebakan `waktu === 0` vs `waktu <= 0` |
| 📄 [09-test-cases_kasus-pengujian.md](./docs/09-test-cases_kasus-pengujian.md) | Test cases lengkap & cara pengujian |
| 📄 [ringkasan-algoritma-semua-versi.md](./ringkasan-algoritma-semua-versi.md) | Ringkasan semua versi kode |

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Memahami konsep **rekursif** — fungsi yang memanggil dirinya sendiri
- ✅ Membedakan **rekursif biasa** vs **tail recursion**
- ✅ Memahami kenapa **base case** harus menggunakan `<=` bukan `===` untuk angka yang tidak habis dibagi
- ✅ Memahami pola `return 1 + rekursif(...)` — kontribusi tiap langkah rekursif
- ✅ Menggunakan **akumulator** sebagai parameter tambahan di tail recursion
- ✅ Memahami kegunaan **helper function** untuk menyembunyikan parameter internal

---

<div align="center">

## 🎯 Mari Mulai Belajar!

**📚 [Mulai dari Part 1 — Challenge Overview →](./docs/01-challenge-overview_gambaran-challenge.md)**

---

**Quick Links:**

[01 Overview](./docs/01-challenge-overview_gambaran-challenge.md) • [02 Alur Berpikir](./docs/02-problem-solving-approach_alur-berpikir.md) • [03 V1](./docs/03-v1-direct-recursion_rekursif-langsung.md) • [04 V2](./docs/04-v2-tail-recursion-default-parameter_parameter-default.md) • [05 V3](./docs/05-v3-tail-recursion-helper-function_fungsi-pembantu.md) • [06 V4](./docs/06-v4-recursion-variable-update_update-variabel.md) • [07 Visualisasi](./docs/07-visualization-all-versions_visualisasi-semua-versi.md) • [08 Pitfall](./docs/08-base-case-pitfall_jebakan-base-case.md) • [09 Test Cases](./docs/09-test-cases_kasus-pengujian.md)

---

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
