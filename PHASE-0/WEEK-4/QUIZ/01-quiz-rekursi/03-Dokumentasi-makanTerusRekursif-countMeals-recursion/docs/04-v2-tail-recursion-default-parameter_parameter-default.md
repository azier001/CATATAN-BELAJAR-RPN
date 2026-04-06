# 🔁 V2 — Tail Recursion — Default Parameter

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Tail%20Recursion-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V2-purple?style=for-the-badge)

---

## 📚 Daftar Isi

- [Kode Lengkap](#kode)
- [Penjelasan Baris per Baris](#penjelasan)
- [Apa itu Tail Recursion?](#tail-recursion)
- [Perbandingan V1 vs V2](#perbandingan)
- [Insight Penting](#insight)

---

<a name="kode"></a>
## 💻 Kode Lengkap

```js
const makanTerusRekursif = (waktu, count = 0) => {
  if (waktu <= 0) return count
  return makanTerusRekursif(waktu - 15, count + 1)
}
```

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```js
const makanTerusRekursif = (waktu, count = 0) => {
```
Parameter `count` dimulai dari `0` secara default — pengguna cukup memanggil `makanTerusRekursif(45)` tanpa perlu mengisi `count` manual.

---

```js
if (waktu <= 0) return count
```
🛑 **Base case** — saat waktu habis, kembalikan `count` yang sudah terakumulasi. Berbeda dengan V1 yang return `0`, di sini kita return `count` karena jumlah makan sudah tersimpan di sana.

---

```js
return makanTerusRekursif(waktu - 15, count + 1)
```
🔁 **Recursive case** — panggil diri sendiri dengan waktu dikurangi 15 dan `count` ditambah 1. Tidak ada operasi setelah pemanggilan rekursif — langsung return.

---

<a name="tail-recursion"></a>
## 🧠 Apa itu Tail Recursion?

Tail recursion adalah rekursif di mana **pemanggilan rekursif adalah instruksi terakhir** — tidak ada pekerjaan lagi setelahnya.

### Analogi — Kertas Coret-coretan

**Rekursif biasa (V1):**
Setiap langkah menitipkan "hutang" ke pelayan. Baru setelah semua selesai, hutang dibayar satu per satu dari bawah ke atas.

```
makan(45) → tunggu makan(30)
  makan(30) → tunggu makan(15)
    makan(15) → tunggu makan(0)
      makan(0) → return 0
    → 1 + 0 = 1
  → 1 + 1 = 2
→ 1 + 2 = 3
```

**Tail recursion (V2):**
Membawa kertas coret-coretan sendiri ke setiap meja. Tidak perlu menunggu siapapun — langsung catat dan lanjut.

```
makan(45, 0)
makan(30, 1)
makan(15, 2)
makan(0,  3) → return 3 ✅
```

### Perbedaan utama

| | Rekursif Biasa (V1) | Tail Recursion (V2) |
|--|--|--|
| Nilai dikumpulkan | Saat **naik** (unwinding) | Saat **turun** (sebelum base case) |
| Ada "hutang" pekerjaan? | ✅ Ya | ❌ Tidak |
| Parameter tambahan? | ❌ Tidak | ✅ Ya (`count`) |
| Efisiensi memori | Lebih boros | Lebih hemat |

---

<a name="perbandingan"></a>
## ⚖️ Perbandingan V1 vs V2

```js
// V1 — Rekursif Langsung
function makanTerusRekursif(waktu) {
  if (waktu <= 0) return 0
  return 1 + makanTerusRekursif(waktu - 15)
  //     ↑ masih ada operasi setelah rekursif
}

// V2 — Tail Recursion
const makanTerusRekursif = (waktu, count = 0) => {
  if (waktu <= 0) return count
  return makanTerusRekursif(waktu - 15, count + 1)
  //     ↑ tidak ada operasi setelah rekursif
}
```

Keduanya menghasilkan jawaban yang **sama persis** — bedanya hanya cara mengumpulkan nilainya.

---

<a name="insight"></a>
## 💡 Insight Penting

> **Kenapa `waktu <= 0` bukan `waktu === 0`?**
> Karena `waktu` tidak selalu habis tepat di angka `0`. Contoh: `66 - 15 - 15 - 15 - 15 - 15 = -9` — langsung melewati `0`! Dengan `<=`, semua angka negatif tetap tertangkap oleh base case.

> **Kenapa base case return `count` bukan `0`?**
> Karena jumlah makan sudah terakumulasi di `count` selama proses turun. Saat base case tercapai, `count` sudah berisi jawaban akhir — tinggal dikembalikan langsung.

> **Apakah `count` bisa diisi manual dari luar?**
> Bisa, tapi sebaiknya tidak. Contoh: `makanTerusRekursif(45, 99)` akan menghasilkan jawaban yang salah. Inilah kelemahan V2 dibanding V3 yang menggunakan helper function untuk menyembunyikan `count`.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 3 — V1 Rekursif Langsung](./03-v1-direct-recursion_rekursif-langsung.md)**
- **📖 [Lanjut ke Part 5 — V3 Tail Recursion Helper Function →](./05-v3-tail-recursion-helper-function_fungsi-pembantu.md)**
