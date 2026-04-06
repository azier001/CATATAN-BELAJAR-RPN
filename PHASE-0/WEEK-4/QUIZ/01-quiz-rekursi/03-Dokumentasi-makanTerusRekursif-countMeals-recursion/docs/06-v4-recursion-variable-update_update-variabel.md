# 🔁 V4 — Recursion Variable Update — Rekursif dengan Update Variabel

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Recursion-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V4-purple?style=for-the-badge)

---

## 📚 Daftar Isi

- [Kode Lengkap](#kode)
- [Penjelasan Baris per Baris](#penjelasan)
- [Simulasi Langkah demi Langkah](#simulasi)
- [Proses Unwinding](#unwinding)
- [Perbandingan V1 vs V4](#perbandingan)
- [Insight Penting](#insight)

---

<a name="kode"></a>
## 💻 Kode Lengkap

```js
function makanTerusRekursif(waktu) {
  if (waktu <= 0) return 0

  waktu -= 15
  return 1 + makanTerusRekursif(waktu)
}
```

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```js
if (waktu <= 0) return 0
```
🛑 **Base case** — jika waktu habis atau negatif, kembalikan `0`.

---

```js
waktu -= 15
```
Kurangi `waktu` sebesar 15 menit **sebelum** rekursif dipanggil. Variabel `waktu` diupdate langsung di sini.

---

```js
return 1 + makanTerusRekursif(waktu)
```
🔁 **Recursive case** — menyumbang `1` (satu kali makan) lalu memanggil dirinya sendiri dengan `waktu` yang sudah dikurangi. Berbeda dengan V1 yang mengurangi langsung di parameter, di sini `waktu` sudah berubah sebelum dipanggil.

---

<a name="simulasi"></a>
## 🎞️ Simulasi Langkah demi Langkah

Mari telusuri apa yang terjadi saat memanggil `makanTerusRekursif(45)`:

```
makanTerusRekursif(45)
  waktu = 45 - 15 = 30 → 1 + makanTerusRekursif(30)
  waktu = 30 - 15 = 15 → 1 + makanTerusRekursif(15)
  waktu = 15 - 15 = 0  → 1 + makanTerusRekursif(0)
                               → 0  ✅ BASE CASE!
```

Pengurangan terjadi **sebelum** rekursif dipanggil — `waktu` diupdate dulu via `waktu -= 15`, baru fungsi dipanggil dengan `waktu` yang sudah berubah.

---

<a name="unwinding"></a>
## ⏪ Proses Unwinding — Nilai Mulai Terkumpul

Setelah base case tercapai, semua pemanggilan yang "menunggu" mulai kembali dan menghitung nilainya:

```
makanTerusRekursif(0)  → 0
makanTerusRekursif(15) → 1 + 0  = 1  (waktu sudah dikurangi jadi 0)
makanTerusRekursif(30) → 1 + 1  = 2  (waktu sudah dikurangi jadi 15)
makanTerusRekursif(45) → 1 + 2  = 3 🎉
```

> 🧠 **Analogi:** Sama seperti V1 — setiap langkah menaruh "hutang 1" ke tumpukan. Bedanya, pengurangan waktu sudah terjadi **sebelum** rekursif dipanggil, bukan di dalam parameter.

---

<a name="perbandingan"></a>
## ⚖️ Perbandingan V1 vs V4

Keduanya rekursif biasa dengan pola `1 + rekursif(...)` — bedanya hanya **kapan pengurangan waktu terjadi**:

```js
// V1 — Pengurangan di dalam parameter
function makanTerusRekursif(waktu) {
  if (waktu <= 0) return 0
  return 1 + makanTerusRekursif(waktu - 15)
  //                            ^^^^^^^^^^
  //                     dikurangi langsung di sini
}

// V4 — Pengurangan sebelum rekursif dipanggil
function makanTerusRekursif(waktu) {
  if (waktu <= 0) return 0
  waktu -= 15                       // ← dikurangi dulu
  return 1 + makanTerusRekursif(waktu)  // ← baru dipanggil
}
```

| | V1 | V4 |
|--|--|--|
| Pengurangan waktu | Di dalam parameter | Sebelum rekursif dipanggil |
| Panjang kode | Lebih ringkas | Satu baris lebih panjang |
| Hasil | Sama persis | Sama persis |
| Mudah di-debug? | Perlu trace parameter | Lebih eksplisit, mudah dilacak |

---

<a name="insight"></a>
## 💡 Insight Penting

> **Apa bedanya `waktu -= 15` vs `waktu - 15` di parameter?**
> Keduanya menghasilkan hasil yang sama. Bedanya, `waktu -= 15` mengupdate nilai `waktu` **sebelum** rekursif dipanggil, sedangkan `waktu - 15` menghitung pengurangan **langsung di parameter** tanpa mengubah variabel `waktu`. Untuk rekursif, keduanya setara.

> **Kapan V4 lebih berguna dari V1?**
> Ketika kamu ingin lebih eksplisit dalam memisahkan langkah "update nilai" dan "panggil rekursif". Ini memudahkan debugging karena kamu bisa menambahkan `console.log(waktu)` setelah `waktu -= 15` untuk melihat nilainya sebelum rekursif dipanggil.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 5 — V3 Tail Recursion Helper Function](./05-v3-tail-recursion-helper-function_fungsi-pembantu.md)**
- **📖 [Lanjut ke Part 7 — Visualisasi Semua Versi →](./07-visualization-all-versions_visualisasi-semua-versi.md)**
