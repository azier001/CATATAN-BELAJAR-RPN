# 🔁 V3 — Tail Recursion — Helper Function — Fungsi Pembantu

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Tail%20Recursion-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V3-purple?style=for-the-badge)

---

## 📚 Daftar Isi

- [Kode Lengkap](#kode)
- [Penjelasan Baris per Baris](#penjelasan)
- [Simulasi Langkah demi Langkah](#simulasi)
- [Proses Unwinding](#unwinding)
- [Perbandingan V2 vs V3](#perbandingan)
- [Insight Penting](#insight)

---

<a name="kode"></a>
## 💻 Kode Lengkap

```js
function makanTerusRekursif(waktu) {
  function helper(sisaWaktu, count) {
    if (sisaWaktu <= 0) return count
    return helper(sisaWaktu - 15, count + 1)
  }

  return helper(waktu, 0)
}
```

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```js
function makanTerusRekursif(waktu) {
```
Fungsi utama yang dipanggil dari luar. Hanya menerima satu parameter `waktu` — pengguna tidak perlu tahu soal `count`.

---

```js
function helper(sisaWaktu, count) {
```
Fungsi pembantu yang melakukan rekursif sesungguhnya. `count` dimulai dari `0` dan terakumulasi di setiap langkah. Karena `helper` ada di dalam `makanTerusRekursif`, tidak bisa diakses dari luar.

---

```js
if (sisaWaktu <= 0) return count
```
🛑 **Base case** — saat waktu habis, kembalikan `count` yang sudah terakumulasi.

---

```js
return helper(sisaWaktu - 15, count + 1)
```
🔁 **Recursive case** — panggil `helper` lagi dengan waktu dikurangi 15 dan `count` ditambah 1. Tidak ada operasi setelahnya — ini tail recursion.

---

```js
return helper(waktu, 0)
```
Jalankan `helper` dengan waktu awal dan `count` dimulai dari `0`. Nilai `0` ini tidak bisa diubah dari luar — aman!

---

<a name="simulasi"></a>
## 🎞️ Simulasi Langkah demi Langkah

Mari telusuri apa yang terjadi saat memanggil `makanTerusRekursif(45)`:

```
makanTerusRekursif(45)
  └─ helper(45, 0)
       → helper(30, 1)  ← count + 1 = 1
              → helper(15, 2)  ← count + 1 = 2
                     → helper(0, 3)  ← count + 1 = 3
                            → 3  ✅ BASE CASE! return count
```

`count` dibawa terus dari satu pemanggilan ke pemanggilan berikutnya — seperti kertas coret-coretan yang selalu dibawa ke meja berikutnya.

---

<a name="unwinding"></a>
## ⏪ Proses Unwinding — Nilai Mulai Terkumpul

Karena ini tail recursion, tidak ada "hutang" yang menunggu. Saat base case tercapai, nilai langsung dikembalikan ke atas tanpa perhitungan tambahan:

```
helper(0,  3) → 3  ✅ langsung return count!
helper(15, 2) → 3
helper(30, 1) → 3
helper(45, 0) → 3
makanTerusRekursif(45) → 3 🎉
```

> 🧠 **Analogi:** Tidak ada hutang di setiap langkah. `count` dibawa terus seperti kertas coret-coretan, dan langsung dikembalikan begitu waktu habis.

---

<a name="perbandingan"></a>
## ⚖️ Perbandingan V2 vs V3

Keduanya sama-sama tail recursion dengan akumulator `count` — bedanya hanya cara menyembunyikan `count` dari pengguna:

```js
// V2 — Default Parameter
const makanTerusRekursif = (waktu, count = 0) => {
  if (waktu <= 0) return count
  return makanTerusRekursif(waktu - 15, count + 1)
}

// Kelemahan V2 — count bisa diisi dari luar!
makanTerusRekursif(45, 99) // → hasil salah: 102
```

```js
// V3 — Helper Function
function makanTerusRekursif(waktu) {
  function helper(sisaWaktu, count) {
    if (sisaWaktu <= 0) return count
    return helper(sisaWaktu - 15, count + 1)
  }
  return helper(waktu, 0)
}

// V3 — count tidak bisa diisi dari luar!
makanTerusRekursif(45, 99) // → tetap 3, parameter ke-2 diabaikan
```

| | V2 Default Parameter | V3 Helper Function |
|--|--|--|
| Panjang kode | Lebih ringkas | Lebih panjang |
| `count` bisa diisi luar? | ✅ Bisa (berbahaya) | ❌ Tidak bisa (aman) |
| Mudah dibaca? | ✅ Langsung | Perlu memahami helper |
| Cocok untuk | Kode pribadi/sederhana | Kode yang dibagikan ke orang lain |

---

<a name="insight"></a>
## 💡 Insight Penting

> **Apa keuntungan pakai helper function?**
> Helper function menyembunyikan parameter `count` dari pengguna. Pengguna cukup memanggil `makanTerusRekursif(45)` tanpa perlu tahu soal `count`. Ini mencegah kesalahan seperti `makanTerusRekursif(45, 99)` yang bisa menghasilkan jawaban salah.

> **Kapan sebaiknya pakai helper function?**
> Ketika kode akan dibagikan ke orang lain atau dipakai di banyak tempat. Kalau hanya untuk keperluan pribadi dan sederhana, V2 dengan default parameter sudah cukup.

> **Apakah V3 lebih lambat dari V2?**
> Tidak secara signifikan. Keduanya sama-sama tail recursion. Perbedaan performa sangat kecil dan tidak terasa di kebanyakan kasus.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 4 — V2 Tail Recursion Default Parameter](./04-v2-tail-recursion-default-parameter_parameter-default.md)**
- **📖 [Lanjut ke Part 6 — V4 Rekursif Variable Update →](./06-v4-recursion-variable-update_update-variabel.md)**
