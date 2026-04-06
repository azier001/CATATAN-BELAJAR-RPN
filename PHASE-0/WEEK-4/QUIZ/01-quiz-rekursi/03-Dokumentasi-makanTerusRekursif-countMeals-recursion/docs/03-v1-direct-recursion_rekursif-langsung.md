# 🔁 V1 — Direct Recursion — Rekursif Langsung

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Recursion-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V1-purple?style=for-the-badge)

---

## 📚 Daftar Isi

- [Kode Lengkap](#kode)
- [Penjelasan Baris per Baris](#penjelasan)
- [Konsep Kunci](#konsep)
- [Simulasi Langkah demi Langkah](#simulasi)
- [Proses Unwinding](#unwinding)
- [Insight Penting](#insight)

---

<a name="kode"></a>
## 💻 Kode Lengkap

```js
function makanTerusRekursif(waktu) {
  if (waktu <= 0) return 0
  return 1 + makanTerusRekursif(waktu - 15)
}
```

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```js
if (waktu <= 0) return 0
```
🛑 **Base case** — jika waktu habis atau negatif, kembalikan `0`. Tidak ada lagi yang dihitung.

---

```js
return 1 + makanTerusRekursif(waktu - 15)
```
🔁 **Recursive case** — menyumbang `1` (satu kali makan) lalu memanggil dirinya sendiri dengan waktu dikurangi 15 menit.

---

<a name="konsep"></a>
## 🧠 Konsep Kunci

### Kenapa ada angka `1`?

Angka `1` mewakili **satu kali makan** di setiap langkah rekursif. Setiap pemanggilan fungsi = satu kali makan. Karena setiap makan selalu dihitung `1` (tidak lebih, tidak kurang), kontribusinya selalu tetap.

> 💡 **Analogi:** "Aku makan 1 kali sekarang, sisanya biar diriku yang lebih kecil yang hitung."

### Pola `return sesuatu + rekursif(...)`

Pola ini dipakai ketika **setiap langkah menyumbang nilai ke hasil akhir**. Tanya diri sendiri:

> *"Di setiap langkah rekursif, apakah saya menyumbang sesuatu ke hasil akhir?"*

| Jawaban | Pola |
|---------|------|
| ✅ Ya | `return sesuatu + rekursif(...)` |
| ❌ Tidak | `return rekursif(...)` |

### Perbandingan kontribusi tiap langkah

| Challenge | Kontribusi tiap langkah |
|-----------|------------------------|
| `numberRange` | Berubah (`endNum`) |
| `deepSum` | Nilai item (`child`) |
| `makanTerusRekursif` | Selalu tetap (`1`) |

---

<a name="simulasi"></a>
## 🎞️ Simulasi Langkah demi Langkah

Mari telusuri apa yang terjadi saat memanggil `makanTerusRekursif(45)`:

```
makanTerusRekursif(45)
  → 1 + makanTerusRekursif(45 - 15)
         → 1 + makanTerusRekursif(30 - 15)
                → 1 + makanTerusRekursif(15 - 15)
                       → 0  ✅ BASE CASE!
```

Pengurangan terjadi **langsung di parameter** saat rekursif dipanggil. Setiap langkah masih punya "hutang" `1 +` yang menunggu hasil dari langkah berikutnya.

---

<a name="unwinding"></a>
## ⏪ Proses Unwinding — Nilai Mulai Terkumpul

Setelah base case tercapai, semua pemanggilan yang "menunggu" mulai **kembali dan menghitung nilainya**:

```
makanTerusRekursif(0)   → 0
makanTerusRekursif(15)  → 1 + 0  = 1
makanTerusRekursif(30)  → 1 + 1  = 2
makanTerusRekursif(45)  → 1 + 2  = 3 🎉
```

> 🧠 **Analogi:** Setiap langkah menaruh "hutang 1" ke tumpukan. Baru setelah base case tercapai, semua hutang dibayar dari bawah ke atas.

---

<a name="insight"></a>
## 💡 Insight Penting

> **Kenapa `return 1 + rekursif(...)` bisa bekerja?**
> Angka `1` mewakili **satu kali makan** di setiap langkah rekursif. Setiap pemanggilan menyumbang `1` ke total, lalu hasil rekursif berikutnya ditambahkan. Nilai terkumpul saat proses **unwinding** — yaitu saat rekursif mulai kembali naik setelah base case tercapai.

> **Versi ini termasuk rekursif biasa atau tail recursion?**
> Ini adalah **rekursif biasa** — karena setelah `makanTerusRekursif(waktu - 15)` selesai, masih ada pekerjaan yang menunggu yaitu `1 + ...`. Setiap langkah punya "hutang" yang baru dibayar saat unwinding.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 2 — Alur Berpikir](./02-problem-solving-approach_alur-berpikir.md)**
- **📖 [Lanjut ke Part 4 — V2 Tail Recursion Default Parameter →](./04-v2-tail-recursion-default-parameter_parameter-default.md)**
