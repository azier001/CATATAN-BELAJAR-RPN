# 🔤 V1 — Regex Solution — Solusi Regex

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Regex%20|%20String%20Manipulation-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V1-purple?style=for-the-badge)

---

## 📑 Daftar Isi

- 💻 [Kode Lengkap](#kode)
- 🔍 [Penjelasan Baris per Baris](#penjelasan)
- 🧠 [Konsep Kunci](#konsep)
- 🎞️ [Simulasi Langkah demi Langkah](#simulasi)
- ⚠️ [Jebakan yang Ditemukan](#jebakan)
- 💡 [Insight Penting](#insight)
- ⚖️ [Evaluasi Versi Ini](#evaluasi)

---

<a name="kode"></a>
## 💻 Kode Lengkap

Pendekatan ini menggunakan **Regular Expression (Regex)** untuk menemukan dan menghapus semua karakter non-alphanumeric dalam satu operasi.

### Versi Kamu (Setelah Perbaikan)

```js
const hapusSimbol = (str) => {
  return str.replace(/[^a-zA-Z0-9]/g, '');
};
```

### Versi Mentor (Lebih Ringkas)

```js
function hapusSimbol(str) {
  return str.replace(/[^a-z0-9]/gi, '');
}
```

> ✅ Kedua versi menghasilkan output yang identik. Perbedaannya hanya pada cara penulisan pola Regex — versi mentor menggunakan flag `i` untuk menyederhanakan pola.

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```js
str.replace(...)
```
🔁 Method `.replace()` digunakan untuk mencari pola tertentu dalam string dan menggantinya dengan nilai lain. Jika kita mengganti dengan `''` (string kosong), artinya kita "menghapus" karakter tersebut.

---

```js
/[^a-zA-Z0-9]/g
```
🔎 Ini adalah pola **Regular Expression**. Mari kita bedah komponen-komponennya:

| Komponen | Arti |
|----------|------|
| `/.../ ` | Pembungkus pola Regex |
| `[...]` | Character class — cocokkan salah satu karakter di dalam sini |
| `^` (di dalam `[]`) | **Negasi** — "kecuali karakter-karakter ini" |
| `a-z` | Semua huruf kecil dari a sampai z |
| `A-Z` | Semua huruf besar dari A sampai Z |
| `0-9` | Semua angka dari 0 sampai 9 |
| `g` | Flag **global** — terapkan ke seluruh string (bukan hanya kemunculan pertama) |

---

```js
/[^a-z0-9]/gi  // Versi Mentor
```
🔎 Versi mentor menggunakan flag `i` (**ignore case**) sebagai pengganti penulisan `A-Z` secara eksplisit:

| Versi | Pola | Penjelasan |
|-------|------|-----------|
| Kamu | `/[^a-zA-Z0-9]/g` | Tulis huruf kecil DAN huruf besar secara terpisah |
| Mentor | `/[^a-z0-9]/gi` | Cukup tulis huruf kecil, flag `i` otomatis mencakup huruf besar |

---

```js
, ''
```
📤 Karakter yang cocok dengan pola akan diganti dengan string kosong `''` — secara efektif menghapusnya dari hasil akhir.

---

<a name="konsep"></a>
## 🧠 Konsep Kunci

### Kenapa `^` di dalam `[]` berbeda dengan `^` di luar `[]`?

Ini adalah jebakan paling umum saat belajar Regex!

```
/^[a-z]/   → ^ di LUAR  = "Anchor awal" = cocokkan di awal string saja
/[^a-z]/   → ^ di DALAM = "Negasi"      = cocokkan semua KECUALI a-z
```

> 💡 **Analogi:** Bayangkan `^` sebagai tombol di gerbang. Kalau dipasang di luar, dia hanya membuka gerbang untuk orang pertama yang masuk. Kalau dipasang di dalam, dia membalik logika gerbang — yang biasanya boleh masuk, sekarang diblokir.

### Kenapa Flag `g` Wajib Ada?

```
"a#b#c".replace(/#/, '')   → "ab#c"  ❌ Hanya simbol PERTAMA yang dihapus!
"a#b#c".replace(/#/g, '')  → "abc"   ✅ Semua simbol dihapus
```

Tanpa flag `g`, JavaScript berhenti setelah menemukan dan mengganti kemunculan pertama.

---

<a name="simulasi"></a>
## 🎞️ Simulasi Langkah demi Langkah

Menggunakan input: `'ma@#k!an~'`

```
📊 Tracing Eksekusi:

  Input: "ma@#k!an~"
  Pola:  /[^a-z0-9]/gi (cari semua yang BUKAN huruf/angka)

  Scan karakter per karakter:
  ┌─────┬─────┬──────────────┬────────┬──────────┐
  │ Idx │ Chr │ Cocok pola?  │ Aksi   │ Result   │
  ├─────┼─────┼──────────────┼────────┼──────────┤
  │  0  │ 'm' │ ❌ Tidak     │ Biarkan│ "m"      │
  │  1  │ 'a' │ ❌ Tidak     │ Biarkan│ "ma"     │
  │  2  │ '@' │ ✅ Cocok!    │ Hapus  │ "ma"     │
  │  3  │ '#' │ ✅ Cocok!    │ Hapus  │ "ma"     │
  │  4  │ 'k' │ ❌ Tidak     │ Biarkan│ "mak"    │
  │  5  │ '!' │ ✅ Cocok!    │ Hapus  │ "mak"    │
  │  6  │ 'a' │ ❌ Tidak     │ Biarkan│ "maka"   │
  │  7  │ 'n' │ ❌ Tidak     │ Biarkan│ "makan"  │
  │  8  │ '~' │ ✅ Cocok!    │ Hapus  │ "makan"  │
  └─────┴─────┴──────────────┴────────┴──────────┘

  Output: "makan" ✅
```

---

<a name="jebakan"></a>
## ⚠️ Jebakan yang Ditemukan

### Jebakan 1 — Posisi `^` yang Salah

Ini adalah kesalahan pertama yang saya buat saat mengerjakan challenge ini:

```js
// ❌ SALAH — ^ di luar kurung siku
str.replace(/^[a-zA-Z0-9]/g, '');
// Artinya: hapus huruf/angka yang ada di AWAL string saja
// "coding" → "oding" 💀 (huruf 'c' pertama malah terhapus!)
```

```js
// ✅ BENAR — ^ di dalam kurung siku
str.replace(/[^a-zA-Z0-9]/g, '');
// Artinya: hapus semua karakter yang BUKAN huruf/angka
// "coding" → "coding" ✅
```

> 💡 **Pelajaran:** Satu perbedaan posisi karakter dalam Regex bisa mengubah seluruh logika program. Selalu periksa apakah `^` berada di dalam atau di luar `[]`.

### Jebakan 2 — Lupa Flag `g`

```js
// ❌ SALAH — tanpa flag g
str.replace(/[^a-zA-Z0-9]/, '');
// "test%$4aa" → "test$4aa"  Hanya % yang hilang, $ masih ada!

// ✅ BENAR — dengan flag g
str.replace(/[^a-zA-Z0-9]/g, '');
// "test%$4aa" → "test4aa"  Semua simbol hilang!
```

---

<a name="insight"></a>
## 💡 Insight Penting

> **Mengapa Regex lebih unggul untuk challenge ini dibanding Looping?**
> Regex dioptimasi secara internal oleh JavaScript engine. Untuk string yang sangat panjang, Regex biasanya lebih cepat daripada melakukan iterasi manual. Selain itu, satu baris kode Regex bisa menggantikan 5-8 baris kode looping.

> **Kapan sebaiknya TIDAK menggunakan Regex?**
> Ketika logika filternya kompleks dan kondisional — misalnya "hapus simbol, tapi pertahankan tanda hubung jika berada di antara dua kata". Dalam kasus seperti ini, looping dengan kondisi eksplisit lebih mudah dibaca dan di-maintain.

> **Apa perbedaan praktis antara `/[^a-zA-Z0-9]/g` dan `/[^a-z0-9]/gi`?**
> Secara fungsional, keduanya identik — menghasilkan output yang sama. Perbedaannya hanya estetika: versi dengan flag `i` lebih pendek dan dianggap lebih "clean" dalam komunitas JavaScript modern.

---

<a name="evaluasi"></a>
## ⚖️ Evaluasi Versi Ini

| Kelebihan | Kekurangan |
|-----------|------------|
| ✅ Paling ringkas (1 baris) | ⚠️ Perlu memahami sintaks Regex |
| ✅ Sangat cepat untuk string besar | ⚠️ Kurang intuitif untuk pemula |
| ✅ Idiomatik — standar di industri | ⚠️ Debugging Regex bisa sulit |
| ✅ Flag `i` menyederhanakan pola | ⚠️ Posisi `^` mudah salah penempatan |

> 💡 **Cocok digunakan ketika** kamu butuh solusi yang bersih, efisien, dan production-ready. Ini adalah pendekatan yang paling umum dipakai di industri.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 02 — Problem Solving Approach](./02-problem-solving-approach_alur-berpikir.md)**
- **📖 [Lanjut ke Part 04 — V2 Looping + Whitelist →](./04-v2-looping-includes_solusi-looping-whitelist.md)**
