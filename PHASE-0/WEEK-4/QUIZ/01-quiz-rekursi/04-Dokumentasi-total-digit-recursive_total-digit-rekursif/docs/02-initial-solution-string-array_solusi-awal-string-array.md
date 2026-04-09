# 🧩 Part 2 — Initial Solution: String & Array / Solusi Awal: String & Array

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Approach](https://img.shields.io/badge/Approach-String%20%26%20Array-purple?style=for-the-badge)
![Topic](https://img.shields.io/badge/Topic-Recursion-orange?style=for-the-badge)

---

## 🧭 Quick Jump

| 💻 Kode | 🔍 Cara Kerja | 📊 Visualisasi | ⚠️ Kekurangan | ✅ Ringkasan |
|:-------:|:-------------:|:--------------:|:--------------:|:-----------:|
| [Jump](#-kode) | [Jump](#-cara-kerja) | [Jump](#-visualisasi) | [Jump](#️-kekurangan) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami pendekatan pertama menggunakan string dan array
- ✅ Mengerti cara kerja default parameter di rekursif
- ✅ Memahami mengapa pendekatan ini kurang efisien
- ✅ Siap untuk melihat versi yang lebih bersih di Part 4

---

## 💻 Kode

Ini adalah solusi pertama yang dibuat secara mandiri:

```js
function totalDigitRekursif(angka, index = [...angka.toString()].length - 1) {
  if (index < 0) return 0

  return +[...angka.toString()][index] + totalDigitRekursif(angka, index - 1)
}
```

---

## 🔍 Cara Kerja

Solusi ini menggunakan **default parameter** `index` yang dimulai dari digit paling belakang, lalu mundur satu per satu ke depan.

Langkah-langkah yang terjadi di setiap pemanggilan:

1. `angka.toString()` — ubah angka menjadi string, misal `512` → `"512"`
2. `[..."512"]` — spread string menjadi array `["5", "1", "2"]`
3. `[index]` — ambil karakter di posisi `index`
4. `+` di depan — konversi string ke angka, misal `"2"` → `2`
5. Rekursif dipanggil dengan `index - 1` sampai `index < 0`

---

## 📊 Visualisasi

Untuk input `512`:

```
index awal = 2  (panjang array - 1)

totalDigitRekursif(512, 2)
  → ["5","1","2"][2] = "2" → +("2") = 2
  → 2 + totalDigitRekursif(512, 1)
          → ["5","1","2"][1] = "1" → +("1") = 1
          → 1 + totalDigitRekursif(512, 0)
                  → ["5","1","2"][0] = "5" → +("5") = 5
                  → 5 + totalDigitRekursif(512, -1)
                          → index < 0, return 0
                  → 5 + 0 = 5
          → 1 + 5 = 6
  → 2 + 6 = 8 ✅
```

---

## ⚠️ Kekurangan

Solusi ini bekerja dengan benar, tapi ada beberapa hal yang membuat kodenya kurang efisien:

| Masalah | Penjelasan |
|---------|------------|
| `angka.toString()` dipanggil berulang | Setiap level rekursif mengkonversi angka ke string lagi |
| `[...angka.toString()]` dipanggil berulang | Setiap level rekursif membuat array baru lagi |
| Default parameter kompleks | `index = [...angka.toString()].length - 1` sulit dibaca |
| Banyak konversi tipe data | Angka → string → array → string → angka |

> 💬 **Intinya:** Kode ini benar secara hasil, tapi terlalu banyak operasi yang tidak perlu di setiap level rekursif.

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Pendekatan | String + Array + Default Parameter |
| Arah rekursif | Dari belakang ke depan (index mundur) |
| Base case | `index < 0` |
| Hasil | ✅ Benar, semua test case passed |
| Efisiensi | ⚠️ Banyak konversi tipe data yang berulang |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Kembali ke Part 1 — Problem & Understanding](./01-problem-and-understanding_masalah-dan-pemahaman.md)**
- **📖 [Lanjut ke Part 3 — Extract & Drop Last Digit →](./03-extract-last-digit-drop-last-digit_ambil-digit-terakhir-buang-digit-terakhir.md)**

---

<div align="center">

Made with ❤️ for learners

</div>