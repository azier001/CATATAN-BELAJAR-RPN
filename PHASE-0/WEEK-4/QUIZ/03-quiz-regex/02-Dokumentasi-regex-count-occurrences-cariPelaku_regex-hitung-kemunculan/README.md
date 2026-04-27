# 🔍 Regex Count Occurrences — `cariPelaku`

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-Regex%20|%20String%20Matching%20|%20Null%20Safety-blue?style=for-the-badge)

> 📝 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat
> kembali konsep-konsep yang dipelajari saat mengerjakan challenge Regex Count Occurrences.*

---

## 🧩 Deskripsi Challenge

Diberikan sebuah function `cariPelaku(kalimat)` yang menerima satu parameter berupa string. Function akan me-return **jumlah berapa kali** ditemukan kata `"abc"` secara berturut-turut di dalam kalimat tersebut. Gunakan **regex** untuk melatih kemampuan regex.

```
Input: "mabcvabc"
  → Cari semua kemunculan pola "abc" secara global
  → Ditemukan: ["abc", "abc"] (2 kemunculan)
Output: 2 ✅
```

> ⚠️ **Catatan penting:** Pencarian bersifat **case-sensitive** — hanya `abc` huruf kecil yang dianggap cocok. Huruf besar seperti `ABC` atau `Abc` tidak dihitung.

---

## 📤 Expected Output

| Input | Proses Matching | Output |
|-------|----------------|--------|
| `'mabcvabc'` | `m` ❌ → `abc` ✅ → `v` ❌ → `abc` ✅ | `2` |
| `'abcdabdc'` | `abc` ✅ → `dabdc` (urutan salah) ❌ | `1` |
| `'bcabcac'` | `bc` ❌ → `abc` ✅ → `ac` ❌ | `1` |
| `'abcabcabc'` | `abc` ✅ → `abc` ✅ → `abc` ✅ | `3` |
| `'babcbacabc'` | `b` ❌ → `abc` ✅ → `bac` ❌ → `abc` ✅ | `2` |

---

## ▶️ Coba Langsung

```javascript
console.log(cariPelaku('mabcvabc'));    // 2
```

```javascript
console.log(cariPelaku('abcabcabc'));   // 3
```

```javascript
console.log(cariPelaku('xyz'));         // 0 (tidak ada "abc")
```

```javascript
console.log(cariPelaku(''));            // 0 (string kosong)
```

---

## 💡 Konsep Kunci

- **Regex Literal (`/abc/`)** — Pola regex ditulis langsung tanpa `new RegExp()`, cocok untuk pola statis
- **Flag `g` (Global)** — Memaksa regex mencari semua kemunculan, bukan berhenti di temuan pertama
- **`.match()` vs `.test()`** — `.test()` hanya cek ada/tidak (boolean), `.match()` mengumpulkan semua hasil ke array
- **Null Safety** — `.match()` mengembalikan `null` (bukan `[]`) jika tidak ada hasil, wajib dicek sebelum `.length`
- **`.split()` sebagai alternatif** — Memotong string berdasarkan pola, jumlah potongan dikurangi 1 = jumlah kemunculan
- **`.exec()` + `lastIndex`** — Cara low-level yang memberi kontrol penuh atas proses pencarian karakter per karakter

---

## 🏆 Solusi Rekomendasi

```javascript
function cariPelaku(text) {
  // Define the pattern to search for globally
  const targetPattern = /abc/g;

  // Find all matches in the text
  const matches = text.match(targetPattern);

  // Determine the count (return 0 if no matches found)
  const totalCount = matches ? matches.length : 0;

  return totalCount;
}
```

> ✅ Versi ini dipilih karena **mudah dibaca dan dipahami** — setiap langkah logika disimpan ke variabel dengan nama deskriptif, sehingga alurnya jelas bagi siapa saja yang membaca kode.

---

## 📊 Quick Comparison: Semua Versi

| Versi | Pendekatan | Keunggulan |
|-------|-----------|------------|
| **V1 — Descriptive If-Else** ⭐ | `if (matches)` + `return matches.length` | Paling mudah dibaca, cocok untuk belajar & tim |
| **V2 — Ternary Operator** | `matches ? matches.length : 0` | Ringkas tapi tetap eksplisit |
| **V3 — One-Liner Short-Circuit** | `(str.match(/abc/g) \|\| []).length` | Sangat pendek, gaya senior developer |
| **V4 — Split Trick** | `str.split('abc').length - 1` | Tanpa regex, tidak pernah return null |
| **V5 — While Loop + Exec** | `while (pattern.exec(text))` + counter | Kontrol penuh, hemat memori untuk data besar |

---

## 📂 Struktur Dokumentasi

| File | Topik |
|------|-------|
| 📄 [01-challenge-overview](./docs/01-challenge-overview_gambaran-challenge.md) | Gambaran challenge & analisis awal |
| 📄 [02-problem-solving-approach](./docs/02-problem-solving-approach_alur-berpikir.md) | Alur berpikir & pseudocode |
| 📄 [03-v1-descriptive-if-else](./docs/03-v1-descriptive-if-else_deskriptif-if-else.md) | Versi readable dengan if-else |
| 📄 [04-v2-ternary-operator](./docs/04-v2-ternary-operator_operator-ternary.md) | Versi ringkas dengan ternary |
| 📄 [05-v3-one-liner-short-circuit](./docs/05-v3-one-liner-short-circuit_satu-baris-short-circuit.md) | Versi one-liner `(\|\| []).length` |
| 📄 [06-v4-split-trick](./docs/06-v4-split-trick_trik-split.md) | Alternatif tanpa regex |
| 📄 [07-v5-while-loop-exec](./docs/07-v5-while-loop-exec_perulangan-while-exec.md) | Low-level dengan exec() |
| 📄 [08-insight-null-safety-pattern](./docs/08-insight-null-safety-pattern_pola-keamanan-null.md) | Insight: Null Safety Pattern |
| 📄 [09-all-versions-comparison](./docs/09-all-versions-comparison_perbandingan-semua-versi.md) | Perbandingan semua versi |
| 📄 [10-test-cases-and-edge-cases](./docs/10-test-cases-and-edge-cases_kasus-pengujian-dan-kasus-tepi.md) | Test cases & edge cases |
| 📄 [ringkasan-algoritma](./ringkasan-algoritma-semua-versi.md) | Cheat sheet kode semua versi |

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menggunakan **regex flag `g`** untuk pencarian global di dalam string
- ✅ Memilih antara **`.test()`**, **`.match()`**, dan **`.exec()`** sesuai kebutuhan
- ✅ Menerapkan **Null Safety Pattern** untuk menghindari error `Cannot read property of null`
- ✅ Menghitung kemunculan substring dengan **teknik `.split()`** tanpa regex
- ✅ Memahami mekanisme **`lastIndex`** pada `.exec()` untuk kontrol pencarian manual
- ✅ Menulis kode yang **readable** dengan penamaan variabel deskriptif

---

<div align="center">

📚 [Mulai dari Part 1 — Challenge Overview →](./docs/01-challenge-overview_gambaran-challenge.md)

[Challenge Overview](./docs/01-challenge-overview_gambaran-challenge.md) • [Problem Solving](./docs/02-problem-solving-approach_alur-berpikir.md) • [V1 If-Else](./docs/03-v1-descriptive-if-else_deskriptif-if-else.md) • [V2 Ternary](./docs/04-v2-ternary-operator_operator-ternary.md) • [V3 One-Liner](./docs/05-v3-one-liner-short-circuit_satu-baris-short-circuit.md) • [V4 Split](./docs/06-v4-split-trick_trik-split.md) • [V5 Exec](./docs/07-v5-while-loop-exec_perulangan-while-exec.md) • [Insight](./docs/08-insight-null-safety-pattern_pola-keamanan-null.md) • [Comparison](./docs/09-all-versions-comparison_perbandingan-semua-versi.md) • [Test Cases](./docs/10-test-cases-and-edge-cases_kasus-pengujian-dan-kasus-tepi.md)

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
