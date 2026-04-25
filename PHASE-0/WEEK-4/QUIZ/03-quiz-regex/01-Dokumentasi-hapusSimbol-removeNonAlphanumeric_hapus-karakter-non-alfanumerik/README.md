# 🧹 Hapus Simbol / Remove Non-Alphanumeric — `hapusSimbol`

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-green?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-Regex%20|%20String%20|%20Looping%20|%20ASCII-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

> 📝 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat
> kembali konsep-konsep yang dipelajari saat mengerjakan challenge Hapus Simbol.*

---

## 🧩 Deskripsi Challenge

Fungsi `hapusSimbol` (atau `removeNonAlphanumeric` dalam penamaan profesional) bertugas membersihkan sebuah string dari semua karakter "pengganggu" — yaitu semua karakter yang **bukan** huruf (a-z, A-Z) dan bukan angka (0-9). Spasi, tanda baca, simbol matematika, dan karakter khusus lainnya semuanya akan dihapus, sehingga yang tersisa hanyalah karakter alphanumeric murni.

```
Input: "test%$4aa"
  → Cek setiap karakter satu per satu
  → Jika huruf atau angka → simpan
  → Jika simbol/spasi → buang
Output: "test4aa" ✅

Input: "devel0p3r s3j@@ati"
  → Spasi juga dianggap "simbol" yang harus dibuang
Output: "devel0p3rs3jati" ✅
```

> ⚠️ **Catatan penting:** Spasi (` `) termasuk karakter yang dihapus, bukan hanya simbol seperti `@`, `#`, `!`, dll.

---

## 📤 Expected Output

| Input | Output | Keterangan |
|-------|--------|------------|
| `'test%$4aa'` | `'test4aa'` | Simbol di tengah string |
| `'devel0p3r s3j@@ati'` | `'devel0p3rs3jati'` | Simbol dan spasi dihapus |
| `'ma@#k!an~'` | `'makan'` | Banyak simbol acak |
| `'coding'` | `'coding'` | Tidak ada simbol, tetap sama |
| `'1+3-5*2=100'` | `'1352100'` | Simbol matematika dihapus |
| `''` | `''` | String kosong tetap kosong |
| `'@@@###'` | `''` | Semua simbol → hasil kosong |
| `'123abcDEF'` | `'123abcDEF'` | Huruf besar tetap dipertahankan |

---

## ▶️ Coba Langsung

```javascript
console.log(hapusSimbol('test%$4aa'));         // 'test4aa'
console.log(hapusSimbol('devel0p3r s3j@@ati')); // 'devel0p3rs3jati'
```

```javascript
// Edge cases
console.log(hapusSimbol(''));         // ''
console.log(hapusSimbol('@@@###'));   // ''
console.log(hapusSimbol('123abcDEF')); // '123abcDEF'
```

---

## 💡 Konsep Kunci

- **Alphanumeric** — Gabungan Alphabet (huruf a-z, A-Z) dan Numeric (angka 0-9). Karakter selain ini disebut Non-Alphanumeric.
- **Regex Negasi `[^...]`** — Di dalam kurung siku, simbol `^` berarti "KECUALI". Contoh: `[^a-z0-9]` artinya semua karakter kecuali huruf dan angka.
- **Flag `g` (global)** — Tanpa flag ini, `.replace()` hanya menghapus kemunculan pertama. Flag `g` memastikan semua karakter cocok ikut dihapus.
- **Flag `i` (ignore case)** — Membuat Regex tidak membedakan huruf besar dan kecil, sehingga `a-z` sudah mewakili `A-Z` sekaligus.
- **ASCII Code** — Di balik setiap karakter ada angka. Angka: 48–57, Huruf Besar: 65–90, Huruf Kecil: 97–122. Ini adalah cara komputer "melihat" teks.
- **Whitelist vs Blacklist** — Pendekatan "simpan yang diizinkan" (whitelist) vs "hapus yang dilarang" (blacklist). Regex negasi menggunakan pendekatan blacklist.

---

## 🏆 Solusi Rekomendasi

```javascript
function hapusSimbol(str) {
  return str.replace(/[^a-z0-9]/gi, '');
}
```

> ✅ Versi ini dipilih karena paling ringkas, mudah dibaca, dan idiomatik di JavaScript. Flag `i` menggantikan kebutuhan menulis `a-zA-Z` sehingga pola Regex lebih bersih. Cocok untuk production code.

---

## 📊 Quick Comparison: Semua Versi

| Versi | Pendekatan | Keunggulan |
|-------|-----------|------------|
| **V1 — Regex** ⭐ | `.replace(/[^a-z0-9]/gi, '')` | Paling ringkas, idiomatik, production-ready |
| **V2 — Looping + Whitelist** | `for...of` + `.includes()` + daftar karakter | Paling mudah dibaca, cocok untuk pemula |
| **V3 — ASCII / charCodeAt** | Cek rentang angka (48–57, 65–90, 97–122) | Paling "low-level", melatih logika matematika |

---

## 📂 Struktur Dokumentasi

| File | Topik |
|------|-------|
| 📄 [01-challenge-overview](./docs/01-challenge-overview_gambaran-challenge.md) | Gambaran lengkap challenge |
| 📄 [02-problem-solving-approach](./docs/02-problem-solving-approach_alur-berpikir.md) | Cara berpikir & pseudocode |
| 📄 [03-v1-regex](./docs/03-v1-regex_solusi-regex.md) | Solusi V1: Regex |
| 📄 [04-v2-looping-includes](./docs/04-v2-looping-includes_solusi-looping-whitelist.md) | Solusi V2: Looping + Whitelist |
| 📄 [05-v3-ascii](./docs/05-v3-ascii_solusi-ascii-charCodeAt.md) | Solusi V3: ASCII charCodeAt |
| 📄 [06-insight-regex-shorthand](./docs/06-insight-regex-shorthand_insight-karakter-kelas-regex.md) | Insight: `\w`, `\W`, `\d`, `\D`, `\s`, `\S` |
| 📄 [07-perbandingan-semua-versi](./docs/07-perbandingan-semua-versi_all-versions-comparison.md) | Perbandingan mendalam semua versi |
| 📄 [08-test-cases](./docs/08-test-cases_kasus-pengujian.md) | Test cases & edge cases lengkap |
| 📄 [ringkasan-algoritma-semua-versi](./ringkasan-algoritma-semua-versi.md) | Cheat sheet ringkas semua versi |

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menggunakan **Regex negasi** `[^...]` untuk memfilter karakter yang tidak diinginkan dari string
- ✅ Memahami perbedaan posisi `^` di luar (`/^.../`) vs di dalam (`/[^...]/`) kurung siku Regex
- ✅ Menjelaskan fungsi flag **`g` (global)** dan **`i` (ignore case)** dalam Regex
- ✅ Membuat solusi looping dengan pendekatan **whitelist** menggunakan `.includes()`
- ✅ Membaca dan menulis logika berbasis **ASCII Code** dengan `charCodeAt()`
- ✅ Memilih pendekatan yang tepat (Regex / Looping / ASCII) berdasarkan konteks dan kebutuhan

---

<div align="center">

📚 [Mulai dari Part 1 — Challenge Overview →](./docs/01-challenge-overview_gambaran-challenge.md)

[Overview](./docs/01-challenge-overview_gambaran-challenge.md) • [Approach](./docs/02-problem-solving-approach_alur-berpikir.md) • [V1 Regex](./docs/03-v1-regex_solusi-regex.md) • [V2 Looping](./docs/04-v2-looping-includes_solusi-looping-whitelist.md) • [V3 ASCII](./docs/05-v3-ascii_solusi-ascii-charCodeAt.md) • [Insight](./docs/06-insight-regex-shorthand_insight-karakter-kelas-regex.md) • [Comparison](./docs/07-perbandingan-semua-versi_all-versions-comparison.md) • [Test Cases](./docs/08-test-cases_kasus-pengujian.md)

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
