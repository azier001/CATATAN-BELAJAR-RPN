# 🔢 Angka Palindrome — `angkaPalindrome`

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-orange?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topics](https://img.shields.io/badge/Topics-Logic%20|%20Looping%20|%20String%20Manipulation-blue?style=for-the-badge)

> 📝 *Dokumentasi pribadi ini dibuat untuk membantu saya memahami dan mengingat kembali konsep-konsep yang dipelajari saat mengerjakan challenge Angka Palindrome.*

---

## 🧩 Deskripsi Challenge

Fungsi `angkaPalindrome` bertugas untuk menemukan angka palindrome (angka kembar/simetris yang dibaca dari depan dan belakang sama) terdekat yang bernilai **lebih besar** dari angka inputan. Algoritma ini harus mendaki angka satu per satu menggunakan perulangan tanpa batas pasti hingga kriteria terpenuhi.

```text
Input: 117
  → langkah 1: 117 + 1 = 118 (dibalik 811) ❌
  → langkah 2: 118 + 1 = 119 (dibalik 911) ❌
  → langkah 3: 119 + 1 = 120 (dibalik 021) ❌
  → langkah 4: 120 + 1 = 121 (dibalik 121) ✅ SAMA!
Output: 121 ✅
```

> ⚠️ **Catatan penting:** Jika angka input sudah berupa palindrome (contoh: `8`), fungsi tidak boleh mengembalikan `8`, melainkan harus terus mencari angka palindrome *selanjutnya* (yaitu `9`).

---

## 📤 Expected Output

| Input | Proses Pengecekan | Output (Palindrome Terdekat) |
|-------|-------------------|------------------------------|
| `8` | Cari angka di atas 8 yang sama jika dibalik | `9` |
| `10` | Cari angka di atas 10 yang sama jika dibalik | `11` |
| `117` | Cari angka di atas 117 yang sama jika dibalik | `121` |
| `1000` | Cari angka di atas 1000 yang sama jika dibalik | `1001` |

---

## ▶️ Coba Langsung

```javascript
console.log(angkaPalindrome(8));       // Output: 9 (Edge case input 1 digit)
console.log(angkaPalindrome(10));      // Output: 11 (Normal case puluhan)
console.log(angkaPalindrome(117));     // Output: 121 (Normal case ratusan)
console.log(angkaPalindrome(1001));    // Output: 1111 (Edge case input sudah palindrome ganda)
```

---

## 💡 Konsep Kunci

- **Perulangan `while`** — Digunakan karena kita tidak mengetahui pasti di langkah ke berapa angka palindrome akan ditemukan.
- **Konversi Tipe Data** — Mengubah `Number` ke `String` dan ke `Array` untuk memanipulasi pembalikan karakter.
- **Method Chaining** — Menggabungkan *method* `[...str].reverse().join('')` dalam satu baris untuk efisiensi ruang kode.
- **Start Point Aman** — Selalu memulai pengecekan dari `num + 1` untuk menghindari jebakan input yang sudah berupa palindrome.
- **Inner Function (Encapsulation)** — Membungkus logika pengecekan di dalam satu fungsi utama agar *scope* kode tidak mencemari memori global secara percuma.

---

## 🏆 Solusi Rekomendasi

```javascript
const angkaPalindrome = (num) => {
  let candidate = num + 1;
  
  const isPalindrome = (number) => {
    return String(number) === [...String(number)].reverse().join('');
  };

  while (!isPalindrome(candidate)) {
    candidate++;
  }

  return candidate;
};
```

> ✅ Versi ini dipilih karena menerapkan prinsip modularitas dengan membuat helper `isPalindrome`, menggunakan method chaining ES6 modern, dan terhindar dari *logical flaw* berkat pergeseran start point ke `num + 1`.

---

## 📊 Quick Comparison: Semua Versi

| Versi | Pendekatan | Keunggulan |
|-------|-----------|------------|
| **V1 — Logika Dasar** | Loop iteratif manual (`for` mundur) dalam `while(true)`. | Sangat fundamental dan transparan (bagus untuk melatih logika dasar). |
| **V2 — Modular Efisien** | Pemisahan fungsi `isPalindrome` di luar sebagai *helper*. | Memiliki *Single Responsibility*, sehingga mudah dibaca dan dites terpisah. |
| **V3 — Percobaan Mandiri** | ES6 Method chaining dengan celah bug logika input. | Kodenya sangat modern (menggunakan spread `[...]`), walau memiliki bug di awal. |
| ⭐ **V4 — Solusi Refaktor** | Start point `num + 1` dipadukan dengan *inner function*. | Performa stabil, sintaks *clean code*, terenkapsulasi dengan baik, dan bug-free. |

---

## 📂 Struktur Dokumentasi

| File | Topik |
|------|-------|
| 📄 [01-challenge-overview](./docs/01-challenge-overview_gambaran-challenge.md) | Gambaran challenge dan breakdown alur |
| 📄 [02-problem-solving-approach](./docs/02-problem-solving-approach_alur-berpikir.md) | Alur berpikir, mental model, & pseudocode |
| 📄 [03-v1-basic-logic](./docs/03-v1-basic-logic_logika-dasar.md) | Solusi V1 dengan perulangan iteratif manual |
| 📄 [04-v2-efficient-modular](./docs/04-v2-efficient-modular_modular-efisien.md) | Solusi V2 pemisahan fungsi `isPalindrome` |
| 📄 [05-v3-independent-attempt](./docs/05-v3-independent-attempt_percobaan-mandiri.md) | Review kode mandiri dan perbaikan *Gotcha* |
| 📄 [06-v4-refactored-solution](./docs/06-v4-refactored-solution_solusi-refaktor.md) | Solusi final V4 (Rekomendasi) |
| 📄 [07-perbandingan-semua-versi](./docs/07-perbandingan-semua-versi_all-versions-comparison.md) | Evaluasi 4 versi & tabel komparasi teknis |
| 📄 [08-test-cases](./docs/08-test-cases_kasus-pengujian.md) | Panduan & script test runner Node.js manual |
| 📄 [ringkasan-algoritma](./ringkasan-algoritma-semua-versi.md) | Ringkasan *cheat sheet* semua versi kode |

---

## 🎯 Learning Outcomes

Setelah selesai, kamu akan bisa:
- ✅ Menangani perulangan menggunakan struktur dasar pola `while(kondisi)`.
- ✅ Mengubah dan memanipulasi tipe data primitif secara fleksibel (konversi `Number` ke bentuk `String` dan sebaliknya).
- ✅ Mengimplementasikan fungsi modular murni untuk mendelegasikan tugas (*Single Responsibility Principle*).
- ✅ Mengantisipasi kemungkinan kegagalan program pada input dengan *edge cases* (kondisi jebakan) yang sempit.

---

## 📝 Catatan Akhir

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **19 Mei 2026** melalui sesi mentoring interaktif (5 Fase) bersama **Google Antigravity**. Challenge ini merupakan bagian dari **Quiz Logic Challenge — PHASE-0 WEEK-2** di program RPN. Konten mencakup 4 versi solusi (dari Logika Dasar hingga Refaktor ES6) yang didokumentasikan secara komprehensif mengikuti standar *Clean Code* dan *Problem Solving Workflow*.

---

<div align="center">

📚 [Mulai dari Part 1 — Challenge Overview →](./docs/01-challenge-overview_gambaran-challenge.md)

[01](./docs/01-challenge-overview_gambaran-challenge.md) • [02](./docs/02-problem-solving-approach_alur-berpikir.md) • [03](./docs/03-v1-basic-logic_logika-dasar.md) • [04](./docs/04-v2-efficient-modular_modular-efisien.md) • [05](./docs/05-v3-independent-attempt_percobaan-mandiri.md) • [06](./docs/06-v4-refactored-solution_solusi-refaktor.md) • [07](./docs/07-perbandingan-semua-versi_all-versions-comparison.md) • [08](./docs/08-test-cases_kasus-pengujian.md)

Made with ❤️ for learners — **Happy Learning! 🚀**

</div>
