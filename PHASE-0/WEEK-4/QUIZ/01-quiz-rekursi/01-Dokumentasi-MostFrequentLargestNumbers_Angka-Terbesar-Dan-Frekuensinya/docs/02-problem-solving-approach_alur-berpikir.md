# 🧠 Alur Berpikir — Problem Solving Approach

## 📌 Cara Membaca Masalah

Sebelum langsung coding, baca soal pelan-pelan dan identifikasi:

| Pertanyaan | Jawaban |
|------------|---------|
| Input apa yang diterima? | Array berisi angka |
| Output apa yang diminta? | String berisi angka terbesar + frekuensinya |
| Ada constraint apa? | Tidak boleh ubah `mostFrequentLargestNumbers` |
| Edge case apa yang ada? | Array kosong → return `''` |

---

## 🔄 Breakdown Masalah Jadi Sub-Masalah

Dari soal, ada 2 function yang perlu diisi:

```
1. sorting(arrNumber)
   → Tugas: Urutkan array dari besar ke kecil
   → Output: Array yang sudah terurut (descending)

2. getTotal(arrNumber)
   → Input: Array yang sudah terurut
   → Tugas: Ambil angka terbesar + hitung kemunculannya
   → Output: String hasil akhir
```

Karena `mostFrequentLargestNumbers` sudah memanggil keduanya secara berurutan, kita cukup isi `sorting` dan `getTotal` dengan benar.

---

## 📝 Pseudocode

```
sorting(arrNumber):
  1. Buat copy array (jangan mutasi yang asli!)
  2. Urutkan dari besar ke kecil
  3. Return array terurut

getTotal(arrNumber):
  1. Jika array kosong → return ''
  2. Ambil arrNumber[0] sebagai angka terbesar
     (karena array sudah terurut descending, index 0 = terbesar)
  3. Hitung berapa kali angka itu muncul
  4. Return string: 'angka paling besar adalah X dan jumlah kemunculan sebanyak Y kali'
```

---

## 💡 Insight Kunci

> Kalau array sudah diurutkan descending, angka terbesar selalu ada di **index 0**. Tidak perlu `Math.max()` atau loop tambahan untuk mencarinya!

Dan karena angka yang sama pasti **berkumpul di bagian awal** setelah diurutkan, kita bisa pakai `break` untuk berhenti lebih awal saat menemukan angka berbeda.

```
[8, 8, 8, 6, 5, 4, 4, 2]
 ^  ^  ^
 Ini semua 8 → hitung, hitung, hitung
              ^
              Ini 6 → beda dari 8, BREAK! Tidak perlu lanjut.
```

---

*Lanjut ke → [03 — V1: Solusi Awal](./03-v1-initial-solution_solusi-awal.md)*
