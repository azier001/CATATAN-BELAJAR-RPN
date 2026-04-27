# 🧠 Problem Solving Approach — Alur Berpikir

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Regex%20|%20String%20Matching-blue?style=for-the-badge)

---

## 📑 Daftar Isi

- 🔍 [Langkah 1 — Pahami Masalah](#langkah-1)
- 🔎 [Langkah 2 — Kenali Tools yang Tersedia](#langkah-2)
- 📦 [Langkah 3 — Rencanakan Strategi](#langkah-3)
- 🔗 [Langkah 4 — Gabungkan Pseudocode](#langkah-4)
- ❌ [Kesalahan Pertama Saya](#kesalahan)

---

<a name="langkah-1"></a>
## 🔍 Langkah 1 — Pahami Masalah

Sebelum menulis kode, terjemahkan dulu masalahnya ke bahasa sederhana:

> *"Diberikan sebuah teks, hitung berapa kali kata 'abc' muncul secara berurutan di dalamnya."*

3 pertanyaan kunci:
- **Apa yang dicari?** → Pola teks `"abc"` yang muncul berturut-turut (urutan persis)
- **Apa yang dikembalikan?** → Angka (jumlah kemunculan), bukan teks atau array
- **Bagaimana kalau tidak ditemukan?** → Kembalikan `0`, bukan `null` atau array kosong

---

<a name="langkah-2"></a>
## 🔎 Langkah 2 — Kenali Tools yang Tersedia

Di JavaScript, ada beberapa cara untuk mencari pola di dalam string. Mana yang paling cocok?

| Method | Return | Cocok Untuk |
|--------|--------|-------------|
| `.test()` | `true` / `false` | Cek ada/tidak (ya/tidak) |
| `.match()` | `Array` / `null` | Kumpulkan semua hasil |
| `.exec()` | `Object` / `null` | Cari satu per satu (manual) |
| `.split()` | `Array` | Potong string berdasarkan pola |

> 💡 **Insight:** Karena kita butuh **menghitung jumlah**, `.match()` adalah pilihan paling natural — dia mengumpulkan semua temuan ke dalam array, lalu kita tinggal hitung panjang array-nya.

### Tapi ada jebakan! 🪤

```
.match() kalau KETEMU   → ['abc', 'abc']  (Array)
.match() kalau GAK KETEMU → null           (Bukan [] !)
```

Kalau kita langsung tulis `str.match(regex).length` tanpa pengecekan, dan hasilnya `null`:

```
null.length → 💥 TypeError: Cannot read properties of null
```

Artinya kita **wajib** mengecek apakah hasilnya `null` sebelum mengakses `.length`.

---

<a name="langkah-3"></a>
## 📦 Langkah 3 — Rencanakan Strategi

Setelah tahu tools-nya, kita susun langkah-langkahnya:

```
Input: "mabcvabc"
  │
  ├── STEP 1: Siapkan "mata" regex → /abc/g
  │            (flag 'g' agar mencari SEMUA, bukan hanya yang pertama)
  │
  ├── STEP 2: Lepaskan "mata" ke dalam teks → str.match(/abc/g)
  │
  │   [m][a][b][c][v][a][b][c]
  │       ^--Match--^   ^--Match--^
  │
  │   Hasil: ['abc', 'abc']
  │
  ├── STEP 3: Cek apakah hasilnya null atau Array
  │            null → return 0
  │            Array → lanjut ke step 4
  │
  └── STEP 4: Hitung panjang Array → return 2
```

### Kenapa flag `g` wajib?

```
Tanpa flag 'g': /abc/
  "abcabcabc" → Hanya ketemu 1 (berhenti di temuan pertama)

Dengan flag 'g': /abc/g
  "abcabcabc" → Ketemu 3 (terus menyisir sampai habis)
```

---

<a name="langkah-4"></a>
## 🔗 Langkah 4 — Gabungkan Pseudocode

```
FUNCTION cariPelaku(text):
  1. Buat pola regex /abc/ dengan flag global (g)
  2. Jalankan text.match(regex) → simpan di variabel matches
  3. JIKA matches ada isinya (bukan null):
       Return matches.length (jumlah elemen array)
  4. JIKA matches null:
       Return 0
```

Dari pseudocode ini, kita bisa membuat kode JavaScript yang sesungguhnya.
Masing-masing pendekatan dibahas di **Part 03 sampai Part 07**.

---

<a name="kesalahan"></a>
## ❌ Kesalahan Pertama Saya

Saat pertama kali mencoba, saya menggunakan `.test()` yang hanya mengembalikan boolean:

```javascript
function cariPelaku(str) {
  const regex = /abc/;       // ❌ Tidak ada flag 'g'
  return regex.test(str);    // ❌ Return true/false, bukan jumlah
}
```

Masalah yang terjadi:
1. **`.test()` return boolean** — `true` atau `false`, bukan angka. Tapi challenge minta jumlah.
2. **Tidak ada flag `g`** — meskipun pakai `.test()`, tanpa `g` hanya mengecek kemunculan pertama.

Perbaikan:
- ✅ Ganti `.test()` dengan `.match()` untuk mengumpulkan semua hasil
- ✅ Tambahkan flag `g` agar pencarian bersifat global
- ✅ Tambahkan pengecekan `null` sebelum mengakses `.length`

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 01 — Challenge Overview](./01-challenge-overview_gambaran-challenge.md)**
- **📖 [Lanjut ke Part 03 — V1 Descriptive If-Else →](./03-v1-descriptive-if-else_deskriptif-if-else.md)**
