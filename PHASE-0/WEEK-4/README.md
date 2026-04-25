# 📅 Week 4 — Rekursi & Git Branching

> Dokumentasi perjalanan belajar selama Week 4 Program RPN (Ruang Program Nusantara).

---

## 📚 Materi Minggu Ini

| Topik | Deskripsi |
|-------|-----------|
| **Rekursi (Recursion)** | Fungsi yang memanggil dirinya sendiri untuk menyelesaikan masalah secara bertahap |
| **Base Case** | Kondisi berhenti rekursif — harus tepat agar tidak infinite loop |
| **Tail Recursion** | Rekursif tanpa "hutang" operasi yang menunggu — lebih efisien di memory |
| **Git Branching** | Membuat dan mengelola branch di Git untuk fitur yang terpisah |

---

## 🧪 Quiz

### Quiz 1 — Rekursi

| # | Challenge | Difficulty | Status |
|---|-----------|-----------|--------|
| 01 | [Most Frequent Largest Numbers](./QUIZ/01-quiz-rekursi/01-Dokumentasi-MostFrequentLargestNumbers_Angka-Terbesar-Dan-Frekuensinya/) | Easy | ✅ |
| 02 | [Password Generator](./QUIZ/01-quiz-rekursi/02-Dokumentasi-password-generator_pembuat-password/) | Easy | ✅ |
| 03 | [Makan Terus Rekursif](./QUIZ/01-quiz-rekursi/03-Dokumentasi-makanTerusRekursif-countMeals-recursion/) | Medium | ✅ |
| 04 | [Total Digit Rekursif](./QUIZ/01-quiz-rekursi/04-Dokumentasi-total-digit-recursive_total-digit-rekursif/) | Easy | ✅ |
| 05 | [Kali Terus Rekursif](./QUIZ/01-quiz-rekursi/05-Dokumentasi-kali-terus-rekursif_multiplicative-persistence/) | Easy | ✅ |

### Quiz 2 — Git Branch

| # | Challenge | Difficulty | Status |
|---|-----------|-----------|--------|
| 01 | [Damage Calculation](./QUIZ/02-quiz-git-branch/01-Dokumentasi-damage-calculation-challenge_tantangan-kalkulasi-damage/) | Easy | ✅ |
| 02 | [Melee Ranged Grouping](./QUIZ/02-quiz-git-branch/02-Dokumentasi-hero-type-classification-meleeRangedGrouping_klasifikasi-tipe-hero-meleeRangedGrouping/) | Easy-Medium | ✅ |

### Quiz 3 — Regex

| # | Challenge | Difficulty | Status |
|---|-----------|-----------|--------|
| 01 | [hapusSimbol / removeNonAlphanumeric](./QUIZ/03-quiz-regex/01-Dokumentasi-hapusSimbol-removeNonAlphanumeric_hapus-karakter-non-alfanumerik/) | Medium | ✅ |

---

## 💡 Key Insights Minggu Ini

1. **Rekursif itu seperti cermin yang menghadap cermin** — setiap pemanggilan membuat "lapisan" baru. Base case adalah yang memecah rantai itu.
2. **`.sort()` adalah mutating method** — selalu copy dulu dengan `[...arr]` sebelum sort agar array asli aman.
3. **Early break lebih efisien dari `reduce`** — kalau array sudah terurut, kita bisa berhenti lebih awal saat kondisi tidak terpenuhi.
4. **Tail recursion** menggunakan akumulator sebagai parameter tambahan sehingga tidak ada operasi yang "menunggu" di call stack.
5. **Fixed Grouping (Array)** cocok untuk output yang posisinya sudah pasti (index 0 = Ranged, index 1 = Melee), sedangkan **Dynamic Grouping (Object)** cocok untuk kategori yang belum diketahui sebelumnya.

---

## 🗂️ Struktur Folder

```
WEEK-4/
└── QUIZ/
    ├── 01-quiz-rekursi/        ← 5 challenge rekursi
    ├── 02-quiz-git-branch/     ← 2 challenge git branch
    └── 03-quiz-regex/          ← 1 challenge regex
```

---

*← [Phase 0](../README.md)*
