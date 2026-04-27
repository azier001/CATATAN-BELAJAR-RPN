# 📋 Challenge Overview — Gambaran Challenge

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Regex%20|%20String%20Matching-blue?style=for-the-badge)

---

## 📑 Daftar Isi

- 🧩 [Deskripsi Challenge](#deskripsi)
- 📏 [Aturan Challenge](#aturan)
- 📤 [Contoh Input & Output](#contoh)
- 🧠 [Pemahaman Awal](#pemahaman)

---

<a name="deskripsi"></a>
## 🧩 Deskripsi Challenge

Bayangkan kamu seorang **detektif digital** yang sedang menganalisis sebuah teks panjang. Tugasmu adalah menghitung berapa kali kata sandi rahasia `"abc"` muncul secara berturut-turut di dalam teks tersebut. Setiap kemunculan harus **persis** urutannya — huruf `a`, diikuti `b`, diikuti `c`. Kalau urutannya berantakan (misalnya `acb` atau `abd`), itu bukan kata sandi yang valid.

Secara teknis, function `cariPelaku(kalimat)` menerima **satu parameter berupa string** dan me-return **jumlah (Number)** berapa kali pola `"abc"` ditemukan di dalam string tersebut. Challenge ini mengharuskan penggunaan **Regex (Regular Expression)** sebagai alat pencarian.

> ⚠️ **Catatan penting:** Pencarian bersifat **case-sensitive** — hanya `abc` huruf kecil yang cocok. `ABC` atau `Abc` tidak dihitung.

---

<a name="aturan"></a>
## 📏 Aturan Challenge

| Aturan | Keterangan |
|--------|-----------|
| 📦 Format Input | String (bisa berisi huruf apa saja, termasuk kosong) |
| 📤 Format Output | Number (jumlah kemunculan pola `"abc"`) |
| 🔍 Metode Pencarian | Wajib menggunakan **Regex** |
| 🔤 Case Sensitivity | Hanya huruf kecil `abc` yang dianggap cocok |
| 📭 Input Kosong | Return `0` |
| 🔗 Pola Harus Berurutan | `a` → `b` → `c` harus berurutan tanpa karakter penyusup |

---

<a name="contoh"></a>
## 📤 Contoh Input & Output

```javascript
console.log(cariPelaku('mabcvabc'));
// Output: 2
```

```javascript
console.log(cariPelaku('abcdabdc'));
// Output: 1
```

```javascript
console.log(cariPelaku('bcabcac'));
// Output: 1
```

```javascript
console.log(cariPelaku('abcabcabc'));
// Output: 3
```

```javascript
console.log(cariPelaku('babcbacabc'));
// Output: 2
```

### Kenapa `'abcdabdc'` hasilnya `1`?

Meskipun huruf `a`, `b`, `c` ada di bagian `abdc`, urutannya **tidak berturut-turut** karena ada si penyusup `d` di antara `b` dan `c`:

```
Mulai scan dari kiri ke kanan:

[a][b][c][d] → "abc" ditemukan! ✅ (Count = 1)
                Lanjut dari posisi setelah 'c'...

[a][b][d][c] → Urutan salah: "abd..." bukan "abc" ❌
                Huruf 'd' menyusup di antara 'b' dan 'c'

Output: 1
```

### Kenapa `'bcabcac'` hasilnya `1`?

```
Mulai scan dari kiri ke kanan:

[b][c]       → Dimulai dari 'b', bukan 'a' ❌
               Lanjut...

[a][b][c]    → "abc" ditemukan! ✅ (Count = 1)
               Lanjut dari posisi setelah 'c'...

[a][c]       → Hanya 2 huruf, urutan "ac" bukan "abc" ❌

Output: 1
```

> 💡 **Perhatikan:** Regex mencari urutan **persis** `abc`. Satu karakter penyusup saja atau urutan yang salah langsung membatalkan sebuah match.

---

<a name="pemahaman"></a>
## 🧠 Pemahaman Awal

Sebelum menulis kode, ada **4 pertanyaan kunci** yang harus dijawab:

**1. Bagaimana cara mencari pola tertentu di dalam string?**
> Gunakan **Regex** (Regular Expression) — sebuah bahasa mini untuk mendeskripsikan pola teks. Pola `abc` ditulis sebagai `/abc/`.

**2. Bagaimana agar pencarian tidak berhenti di temuan pertama?**
> Tambahkan **flag `g`** (global) pada regex: `/abc/g`. Tanpa flag ini, JavaScript hanya mencari kemunculan pertama lalu berhenti.

**3. Method apa yang mengumpulkan semua hasil pencarian?**
> Gunakan **`.match()`** — method ini mengembalikan **Array** berisi semua teks yang cocok, atau **`null`** jika tidak ada yang cocok.

**4. Bagaimana menghindari error saat tidak ada hasil?**
> `.match()` mengembalikan `null` (bukan array kosong) jika tidak ada match. Memanggil `.length` pada `null` akan menyebabkan **TypeError**. Kita perlu mengecek hasilnya terlebih dahulu.

```
cariPelaku(text)
  │
  ├── text kosong / tidak ada "abc" → return 0     ← EDGE CASE
  │
  └── text mengandung "abc"
        │
        ├── STEP 1: Definisikan pola regex /abc/g
        ├── STEP 2: Jalankan text.match(regex) → Array atau null
        ├── STEP 3: Cek apakah hasilnya null atau Array
        └── STEP 4: Return jumlah elemen Array (atau 0 jika null)
```

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 02 — Problem Solving Approach →](./02-problem-solving-approach_alur-berpikir.md)**
