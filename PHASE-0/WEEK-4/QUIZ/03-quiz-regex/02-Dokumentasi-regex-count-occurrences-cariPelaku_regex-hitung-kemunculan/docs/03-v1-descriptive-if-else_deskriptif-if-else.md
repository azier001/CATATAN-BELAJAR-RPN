# 📖 V1 — Descriptive If-Else — Deskriptif If-Else

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Regex%20|%20match()-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V1-purple?style=for-the-badge)

---

## 📑 Daftar Isi

- 💻 [Kode Lengkap](#kode)
- 🔍 [Penjelasan Baris per Baris](#penjelasan)
- 🧠 [Konsep Kunci](#konsep)
- 🎞️ [Simulasi Langkah demi Langkah](#simulasi)
- 💡 [Insight Penting](#insight)

---

<a name="kode"></a>
## 💻 Kode Lengkap

Versi paling **readable** — setiap langkah logika disimpan ke variabel dengan nama deskriptif.

```javascript
function cariPelaku(text) {
  // Define the pattern to search for globally
  const targetPattern = /abc/g;

  // Find all matches in the text
  const matches = text.match(targetPattern);

  // Determine the count (return 0 if no matches found)
  if (matches) {
    return matches.length;
  } else {
    return 0;
  }
}
```

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```javascript
const targetPattern = /abc/g;
```
🎯 Mendefinisikan pola regex yang akan dicari. Flag `g` (global) memastikan pencarian dilakukan ke **seluruh** string, bukan berhenti di temuan pertama.

---

```javascript
const matches = text.match(targetPattern);
```
🔍 Menjalankan pencarian menggunakan `.match()`. Method ini mengembalikan:
- **Array** berisi semua teks yang cocok (misal: `['abc', 'abc']`)
- **`null`** jika tidak ada yang cocok

---

```javascript
if (matches) {
  return matches.length;
} else {
  return 0;
}
```
🛡️ **Null Safety Check** — Mengecek apakah `matches` berisi data (truthy) atau `null` (falsy).
- Jika **ada isinya**: kembalikan jumlah elemen array (`.length`)
- Jika **`null`**: kembalikan `0` sebagai penanda "tidak ditemukan"

---

<a name="konsep"></a>
## 🧠 Konsep Kunci

### Kenapa harus dicek `null` dulu?

Di JavaScript, `.match()` tidak mengembalikan array kosong `[]` ketika tidak ada hasil — dia mengembalikan **`null`**. Ini adalah keputusan desain bahasa yang sering menimbulkan bug:

```
str.match(/xyz/g)    → null       (bukan [])
null.length          → 💥 TypeError!
```

> 💡 **Analogi:** "Bayangkan kamu minta pelayan mencari kopi di menu. Kalau tidak ada kopi, pelayan bilang 'Tidak ada' (null) — bukan memberikanmu cangkir kosong ([])."

### Kenapa variabel diberi nama deskriptif?

| Nama Generik | Nama Deskriptif | Kenapa Lebih Baik |
|--------------|-----------------|-------------------|
| `regex` | `targetPattern` | Jelas bahwa ini adalah "target" yang dicari |
| `result` | `matches` | Jelas bahwa isinya adalah "hasil pencocokan" |
| `count` | `totalCount` | Jelas bahwa ini adalah "jumlah total" |

---

<a name="simulasi"></a>
## 🎞️ Simulasi Langkah demi Langkah

### Case: `cariPelaku('mabcvabc')`

```
📊 Tracing Eksekusi:

  targetPattern = /abc/g
  text = "mabcvabc"

  Step 1: text.match(/abc/g) dijalankan
    [m][a][b][c][v][a][b][c]
     ↑
    'm' → Bukan awal "abc", lanjut...

    [m][a][b][c][v][a][b][c]
        ^--Match 1--^
    "abc" ditemukan di posisi 1! ✅

    [m][a][b][c][v][a][b][c]
                 ↑
    'v' → Bukan awal "abc", lanjut...

    [m][a][b][c][v][a][b][c]
                    ^--Match 2--^
    "abc" ditemukan di posisi 5! ✅

  Step 2: matches = ['abc', 'abc']

  Step 3: if (matches) → true (array bukan null)

  Step 4: return matches.length → return 2

  Output: 2 ✅
```

### Case: `cariPelaku('xyz')`

```
📊 Tracing Eksekusi:

  targetPattern = /abc/g
  text = "xyz"

  Step 1: text.match(/abc/g) dijalankan
    [x][y][z]
    Tidak ada karakter yang cocok dengan pola "abc"

  Step 2: matches = null

  Step 3: if (matches) → false (null adalah falsy)

  Step 4: return 0

  Output: 0 ✅
```

---

<a name="insight"></a>
## 💡 Insight Penting

> **Kenapa versi ini cocok untuk pemula?**
> Karena setiap langkah logika dipecah menjadi variabel terpisah. Kamu bisa menambahkan `console.log(matches)` di tengah-tengah kode untuk melihat apa yang sedang terjadi — ini sangat membantu saat debugging.

> **Apakah `if-else` terlalu panjang untuk kasus sesederhana ini?**
> Secara teknis, ya — bisa disingkat. Tapi untuk **belajar**, panjang bukan masalah. Yang penting setiap baris bisa kamu jelaskan. Setelah paham, kamu bisa "upgrade" ke versi yang lebih ringkas (V2/V3).

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 02 — Problem Solving Approach](./02-problem-solving-approach_alur-berpikir.md)**
- **📖 [Lanjut ke Part 04 — V2 Ternary Operator →](./04-v2-ternary-operator_operator-ternary.md)**
