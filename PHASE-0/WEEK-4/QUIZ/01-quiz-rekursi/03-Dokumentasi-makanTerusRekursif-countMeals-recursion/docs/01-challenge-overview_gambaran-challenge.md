# 📋 Challenge Overview — Gambaran Challenge

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Recursion-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-success?style=for-the-badge)

---

## 📚 Daftar Isi

- [Deskripsi Challenge](#deskripsi)
- [Aturan Challenge](#aturan)
- [Contoh Input & Output](#contoh)
- [Pemahaman Awal](#pemahaman)

---

<a name="deskripsi"></a>
## 🧩 Deskripsi Challenge

Seorang customer sedang makan di restoran **AYCE (All You Can Eat)**. Dia akan terus makan sampai waktu yang diberikan oleh restoran habis. Setiap kali memesan/mengambil makanan, waktu customer berkurang **15 menit**. Customer masih bisa memesan selama waktunya belum `0`.

Diberikan sebuah function `makanTerusRekursif(waktu)` yang menerima satu parameter berupa waktu. Function akan mengembalikan **berapa kali** seorang customer memesan/mengambil makanan dalam waktu yang diberikan.

> ⚠️ **Wajib menggunakan rekursif!**

---

<a name="aturan"></a>
## 📏 Aturan Challenge

| Aturan | Keterangan |
|--------|-----------|
| ⏱️ Setiap makan | Waktu berkurang **15 menit** |
| ✅ Boleh makan | Selama waktu **belum 0** |
| 🛑 Berhenti makan | Saat waktu **sudah 0 atau kurang** |
| 🔁 Wajib rekursif | Tidak boleh pakai loop |

---

<a name="contoh"></a>
## 📤 Contoh Input & Output

```js
console.log(makanTerusRekursif(45));
// Output: 3
```

```js
console.log(makanTerusRekursif(100));
// Output: 7
```

```js
console.log(makanTerusRekursif(10));
// Output: 1
```

```js
console.log(makanTerusRekursif(66));
// Output: 5
```

```js
console.log(makanTerusRekursif(90));
// Output: 6
```

```js
console.log(makanTerusRekursif(0));
// Output: 0
```

### Kenapa `makanTerusRekursif(45)` hasilnya `3`?

```
Mulai dengan waktu = 45

Makan ke-1 → waktu: 45 - 15 = 30  ✅ masih bisa makan
Makan ke-2 → waktu: 30 - 15 = 15  ✅ masih bisa makan
Makan ke-3 → waktu: 15 - 15 = 0   ✅ masih bisa makan (waktu belum 0 saat makan)
Waktu habis → 0 ≤ 0 🛑 berhenti

Total: 3 kali makan
```

### Kenapa `makanTerusRekursif(10)` hasilnya `1`?

```
Mulai dengan waktu = 10

Makan ke-1 → waktu: 10 - 15 = -5  ✅ masih bisa makan (waktu belum 0 saat makan)
Waktu habis → -5 ≤ 0 🛑 berhenti

Total: 1 kali makan
```

> 💡 **Perhatikan:** Customer tetap bisa makan meskipun sisa waktunya kurang dari 15 menit — selama waktunya **belum 0 atau negatif saat mulai makan**.

---

<a name="pemahaman"></a>
## 🧠 Pemahaman Awal

Sebelum menulis kode, ada dua pertanyaan kunci yang harus dijawab:

**1. Kapan berhenti? (Base Case)**
> Saat `waktu <= 0` — customer tidak bisa makan lagi.

**2. Apa yang terjadi setiap langkah? (Recursive Case)**
> Customer makan 1 kali, lalu waktu berkurang 15 menit, lalu proses berulang.

```
makanTerusRekursif(waktu)
  │
  ├── waktu <= 0 → return 0        ← BASE CASE
  │
  └── waktu > 0  → 1 kali makan + makanTerusRekursif(waktu - 15)  ← RECURSIVE CASE
```

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2 — Alur Berpikir →](./02-problem-solving-approach_alur-berpikir.md)**
