# 🧠 Problem Solving Approach — Alur Berpikir

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Recursion-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

---

## 📚 Daftar Isi

- [Langkah 1 — Pahami Masalah](#langkah-1)
- [Langkah 2 — Tentukan Base Case](#langkah-2)
- [Langkah 3 — Tentukan Recursive Case](#langkah-3)
- [Langkah 4 — Gabungkan](#langkah-4)
- [Kesalahan Pertama Saya](#kesalahan)

---

<a name="langkah-1"></a>
## 🔍 Langkah 1 — Pahami Masalah

Sebelum menulis kode, terjemahkan dulu masalahnya ke bahasa sederhana:

> *"Hitung berapa kali customer bisa makan, di mana setiap makan mengurangi waktu 15 menit, dan customer berhenti saat waktu habis."*

Dua pertanyaan kunci:
- **Kapan berhenti?** → Saat waktu habis (`waktu <= 0`)
- **Apa yang terjadi setiap langkah?** → Makan 1 kali, waktu berkurang 15 menit

---

<a name="langkah-2"></a>
## 🛑 Langkah 2 — Tentukan Base Case

Base case adalah **kondisi berhenti** rekursif. Tanpa base case, fungsi akan berjalan selamanya.

```js
if (waktu <= 0) return 0
```

> ⚠️ **Kenapa `<=` bukan `===`?**
> Karena `waktu` tidak selalu habis tepat di angka `0`. Contoh:
> ```
> 66 - 15 - 15 - 15 - 15 - 15 = -9
> ```
> Waktu langsung melompat ke `-9`, tidak pernah menyentuh `0`!
> Kalau pakai `=== 0`, rekursif tidak akan pernah berhenti → **crash!**

---

<a name="langkah-3"></a>
## 🔁 Langkah 3 — Tentukan Recursive Case

Recursive case adalah **apa yang terjadi di setiap langkah** sebelum base case tercapai.

Tanya diri sendiri:
> *"Di setiap langkah, saya menyumbang apa ke hasil akhir?"*

Jawabannya: **1 kali makan** — selalu tetap, tidak berubah.

```
makanTerusRekursif(45) = 1 + makanTerusRekursif(30)
makanTerusRekursif(30) = 1 + makanTerusRekursif(15)
makanTerusRekursif(15) = 1 + makanTerusRekursif(0)
makanTerusRekursif(0)  = 0  ← BASE CASE
```

---

<a name="langkah-4"></a>
## 🔗 Langkah 4 — Gabungkan

Setelah base case dan recursive case jelas, tinggal gabungkan:

```js
function makanTerusRekursif(waktu) {
  if (waktu <= 0) return 0                        // BASE CASE
  return 1 + makanTerusRekursif(waktu - 15)       // RECURSIVE CASE
}
```

Sesederhana itu! 🎉

---

<a name="kesalahan"></a>
## ❌ Kesalahan Pertama Saya

Ini kode pertama yang saya tulis sebelum paham konsepnya:

```js
function makanTerusRekursif(waktu) {
  let count = 1

  if (waktu <= 0) {
    return 0
  } else {
    count++
  }

  makanTerusRekursif(waktu - 15)

  return count
}
```

Ada **dua masalah** di kode ini:

**Masalah 1 — `count` selalu reset ke `1`:**

`count` dideklarasikan di dalam fungsi, jadi setiap pemanggilan rekursif selalu mulai dari `1` lagi. Hasilnya selalu `2`, tidak pernah terakumulasi.

**Masalah 2 — Hasil rekursif dibuang:**

```js
makanTerusRekursif(waktu - 15)  // ← hasilnya tidak disimpan atau di-return!
```

Fungsi dipanggil tapi hasilnya langsung dibuang — seperti menghitung sesuatu lalu tidak mencatat hasilnya.

✅ **Perbaikannya:** Gunakan pola `return 1 + makanTerusRekursif(waktu - 15)` agar hasil setiap langkah terkumpul dengan benar.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 1 — Challenge Overview](./01-challenge-overview_gambaran-challenge.md)**
- **📖 [Lanjut ke Part 3 — V1 Rekursif Langsung →](./03-v1-direct-recursion_rekursif-langsung.md)**
