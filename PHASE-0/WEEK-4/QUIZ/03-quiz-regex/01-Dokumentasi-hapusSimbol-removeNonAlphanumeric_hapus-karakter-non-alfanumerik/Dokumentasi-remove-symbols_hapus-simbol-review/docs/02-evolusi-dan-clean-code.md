# 🚀 Evolusi Solusi & Clean Code

### ✨ _Dari iterasi manual ke one-liner elegan — plus standar penamaan variabel!_

> 🎯 **Tujuan:** Mengeksplorasi solusi alternatif menggunakan `String.replace()`
> dan memahami kapan harus memilih pendekatan mana, serta menerapkan
> standar *naming convention* yang konsisten.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔄 | [Perbedaan Mental Model](#mental-model) | Dua cara berpikir yang bertolak belakang |
| 💻 | [Versi 2: One-Liner Replace](#versi-replace) | Solusi ringkas dengan `.replace()` |
| ⚖️ | [Perbandingan Versi](#perbandingan) | Tabel head-to-head kedua versi |
| 🏷️ | [Naming Convention](#naming-convention) | Standarisasi penamaan variabel |
| 🏆 | [Kode Final](#kode-final) | Kedua versi setelah clean code review |

---

<a name="mental-model"></a>

## 🔄 Perbedaan Mental Model

Dua versi solusi kita menggunakan cara berpikir yang **saling bertolak belakang**:

```
┌──────────────────────────────────────────────────────┐
│  Versi 1 (Manual)     →  🟢 KUMPULKAN yang valid    │
│  "Ambil huruf & angka, abaikan sisanya"              │
│                                                      │
│  Versi 2 (Replace)    →  🔴 HAPUS yang tidak valid   │
│  "Cari simbol & spasi, buang semuanya"               │
└──────────────────────────────────────────────────────┘
```

> [!TIP]
> Kedua pendekatan ini menghasilkan output identik, tapi **proses berpikirnya berbeda**.
> Versi 1 berpikir **"apa yang mau disimpan?"**, sedangkan Versi 2 berpikir
> **"apa yang mau dibuang?"**. Kemampuan melihat masalah dari dua sisi ini
> sangat berguna dalam problem solving.

---

<a name="versi-replace"></a>

## 💻 Versi 2: One-Liner Replace

### Bedah Regex `/\W+/g`

```javascript
function hapusSimbol(str) {
  return str.replace(/\W+/g, '');
}
```

Setiap bagian dari regex punya peran spesifik:

| Bagian | Nama | Fungsi | Contoh |
|:-------|:-----|:-------|:-------|
| `\W` | Non-Word Character | Menargetkan karakter **selain** huruf, angka, dan underscore | `@` → match, `a` → skip |
| `+` | Quantifier (One or More) | Menangkap rentetan simbol sekaligus sebagai satu grup | `@@` ditangkap 1x, bukan 2x |
| `g` | Global Flag | Mencari **semua** kecocokan, bukan berhenti di yang pertama | Tanpa `g`: hanya replace simbol pertama |
| `''` | Replacement String | Mengganti setiap match dengan string kosong = **menghapus** | `'ma@#k'` → `'mak'` |

> [!NOTE]
> **Kenapa `\W` (kapital) bukan `\w` (kecil)?**
> Di dunia Regex, huruf kapital selalu menjadi **negasi** dari huruf kecilnya:
> - `\w` = Word Character → `[a-zA-Z0-9_]`
> - `\W` = Non-Word Character → `[^a-zA-Z0-9_]`
>
> Karena kita mau **menghapus** yang bukan huruf/angka, kita pakai `\W`.

### Simulasi Eksekusi

Input: `'ma@#k!an~'`

```
Langkah 1: Regex menemukan '@#'  → replace '' → 'mak!an~'
Langkah 2: Regex menemukan '!'   → replace '' → 'makan~'
Langkah 3: Regex menemukan '~'   → replace '' → 'makan'
                                                  ───────
                                                  Hasil akhir ✅
```

---

<a name="perbandingan"></a>

## ⚖️ Perbandingan Versi

| Aspek | Versi 1: `for...of` + `.test()` | Versi 2: `.replace()` |
|:------|:-------------------------------|:----------------------|
| **Jumlah baris** | ~7 baris | 1 baris |
| **Pendekatan** | Inklusif (kumpulkan yang valid) | Eksklusif (hapus yang tidak valid) |
| **Regex yang dipakai** | `/\w/` (Word Character) | `/\W+/g` (Non-Word + Global) |
| **Readability** | Sangat jelas alur logikanya | Ringkas tapi perlu paham Regex |
| **Best for** | Belajar logika & mental model | Production code & real project |
| **Kapan pakai?** | Saat ingin kontrol penuh per karakter | Saat butuh solusi cepat & ringkas |

> [!IMPORTANT]
> **Tidak ada yang "lebih baik" secara absolut.**
> Versi 1 unggul untuk **pemahaman** dan kasus di mana kamu butuh logika
> tambahan per karakter (misal: hitung jumlah simbol yang dihapus).
> Versi 2 unggul untuk **efisiensi kode** di dunia kerja nyata.

---

<a name="naming-convention"></a>

## 🏷️ Naming Convention

### Tabel Rekomendasi Penamaan

| Lokasi / Peran | ❌ Kurang Tepat | ✅ Rekomendasi | Alasan |
|:---------------|:---------------|:---------------|:-------|
| Parameter input | `s`, `x`, `input` | `str` | Singkatan standar untuk *string* |
| Penampung akhir | `hasil`, `h`, `res` | `result` | Konsisten berbahasa Inggris dengan `str` dan `char` |
| Karakter per iterasi | `c`, `x`, `el` | `char` | Deskriptif — langsung paham ini satu karakter |

### Prinsip yang Diterapkan

1. **Konsistensi bahasa** — Jika parameter menggunakan bahasa Inggris (`str`), maka semua variabel lain juga harus bahasa Inggris. Mencampurkan `str` dengan `hasil` menciptakan inkonsistensi.

2. **Deskriptif > Singkat** — Nama seperti `result` lebih baik dari `r` atau `res`. Kita tidak sedang menghemat karakter — kita sedang menulis kode yang bisa dibaca orang lain.

> [!TIP]
> **Kapan `i` boleh dipakai?** Variabel *counter* bernama `i` masih diterima
> secara umum di `for` loop klasik (`for (let i = 0; ...)`), karena ini sudah
> menjadi konvensi universal. Tapi untuk `for...of`, selalu gunakan nama deskriptif.

---

<a name="kode-final"></a>

## 🏆 Kode Final (Setelah Clean Code Review)

### Versi 1: Iterasi Manual

```javascript
const hapusSimbol = (str) => {
  let result = '';

  for (const char of str) {
    if (/\w/.test(char)) {
      result += char;
    }
  }

  return result;
};
```

### Versi 2: Method Built-in

```javascript
const hapusSimbol = (str) => {
  return str.replace(/\W+/g, '');
};
```

---

⬅️ [Analisis & Solusi](01-analisis-dan-solusi.md) · ⬆️ [Kembali ke README](../README.md)
