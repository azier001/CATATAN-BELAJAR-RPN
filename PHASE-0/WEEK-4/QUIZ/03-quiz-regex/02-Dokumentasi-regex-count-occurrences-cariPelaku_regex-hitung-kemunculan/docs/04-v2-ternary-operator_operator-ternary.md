# ⚡ V2 — Ternary Operator — Operator Ternary

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Regex%20|%20Ternary-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V2-purple?style=for-the-badge)

---

## 📑 Daftar Isi

- 💻 [Kode Lengkap](#kode)
- 🔍 [Penjelasan Baris per Baris](#penjelasan)
- 🧠 [Konsep Kunci](#konsep)
- 🎞️ [Simulasi Langkah demi Langkah](#simulasi)
- 💡 [Insight Penting](#insight)
- ⚖️ [Evaluasi Versi Ini](#evaluasi)

---

<a name="kode"></a>
## 💻 Kode Lengkap

Versi **ringkas** dari V1 — mengganti blok `if-else` dengan satu baris ternary operator.

```javascript
function cariPelaku(text) {
  // Define the pattern to search for globally
  const targetPattern = /abc/g;

  // Find all matches in the text
  const matches = text.match(targetPattern);

  // Return count or 0 if no matches
  return matches ? matches.length : 0;
}
```

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```javascript
const targetPattern = /abc/g;
```
🎯 Sama seperti V1 — mendefinisikan pola regex dengan flag global.

---

```javascript
const matches = text.match(targetPattern);
```
🔍 Sama seperti V1 — mengumpulkan semua temuan ke dalam array (atau `null`).

---

```javascript
return matches ? matches.length : 0;
```
⚡ **Ternary Operator** — ini adalah "jantung" perbedaan dengan V1. Satu baris ini menggantikan seluruh blok `if-else`.

Cara bacanya:

```
return matches ? matches.length : 0;
       ───┬───   ──────┬──────   ┬
          │             │         │
      "Kondisi"    "Jika true"  "Jika false"
```

> "Apakah `matches` ada isinya? Jika **YA** (`?`), kembalikan `matches.length`. Jika **TIDAK** (`:`), kembalikan `0`."

---

<a name="konsep"></a>
## 🧠 Konsep Kunci

### Ternary Operator vs If-Else

Keduanya melakukan hal yang **persis sama**, hanya cara penulisannya berbeda:

```javascript
// V1 — If-Else (4 baris)
if (matches) {
  return matches.length;
} else {
  return 0;
}

// V2 — Ternary (1 baris)
return matches ? matches.length : 0;
```

### Kapan pakai Ternary?

| Situasi | Gunakan |
|---------|---------|
| Logika sederhana (satu kondisi, dua kemungkinan) | ✅ Ternary |
| Logika kompleks (banyak kondisi, nested) | ❌ If-Else |
| Butuh menjalankan banyak aksi di setiap cabang | ❌ If-Else |

> 💡 **Aturan praktis:** Jika ternary-mu sudah mulai susah dibaca dalam satu baris, itu tanda untuk kembali ke `if-else`.

---

<a name="simulasi"></a>
## 🎞️ Simulasi Langkah demi Langkah

### Case: `cariPelaku('babcbacabc')`

```
📊 Tracing Eksekusi:

  targetPattern = /abc/g
  text = "babcbacabc"

  Step 1: text.match(/abc/g) dijalankan
    [b][a][b][c][b][a][c][a][b][c]
     ↑
    'b' → Bukan awal "abc", lanjut...

    [b][a][b][c][b][a][c][a][b][c]
        ^--GAGAL--^
    'a' diikuti 'b' diikuti 'c' → "abc"? Tunggu...
    Sebenarnya ini dimulai dari posisi 1: a,b,c ✅

    [b][a][b][c][b][a][c][a][b][c]
        ^-Match 1-^
    "abc" ditemukan di posisi 1! ✅

    [b][a][b][c][b][a][c][a][b][c]
                 ↑
    'b' → Bukan awal "abc", lanjut...

    [b][a][b][c][b][a][c][a][b][c]
                    ↑  ↑
    'a' diikuti 'c' → "ac..." bukan "abc" ❌

    [b][a][b][c][b][a][c][a][b][c]
                          ^-Match 2-^
    "abc" ditemukan di posisi 7! ✅

  Step 2: matches = ['abc', 'abc']

  Step 3: return matches ? matches.length : 0
          → matches = ['abc', 'abc'] (truthy)
          → return matches.length
          → return 2

  Output: 2 ✅
```

---

<a name="insight"></a>
## 💡 Insight Penting

> **Kenapa ternary sangat populer di dunia kerja?**
> Karena programmer profesional sangat menghargai **keringkasan tanpa mengorbankan kejelasan**. Ternary operator adalah sweet spot — cukup pendek untuk dibaca sekilas, tapi cukup eksplisit untuk dipahami tanpa komentar tambahan.

> **Apakah Prettier (code formatter) suka ternary?**
> Ya! Prettier sangat ramah terhadap ternary. Tidak seperti versi `(... || []).length` yang kadang di-reformat oleh Prettier, ternary hampir selalu dibiarkan apa adanya.

---

<a name="evaluasi"></a>
## ⚖️ Evaluasi Versi Ini

| Kelebihan | Kekurangan |
|-----------|------------|
| Lebih ringkas dari if-else | Sedikit kurang intuitif untuk pemula total |
| Formatter-friendly (Prettier aman) | Tidak bisa menampung logika kompleks |
| Tetap eksplisit — mudah dibaca | — |

> 💡 **Cocok digunakan ketika** logikanya sederhana (satu kondisi, dua kemungkinan) dan kamu ingin kode yang ringkas tapi tetap mudah dibaca.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 03 — V1 Descriptive If-Else](./03-v1-descriptive-if-else_deskriptif-if-else.md)**
- **📖 [Lanjut ke Part 05 — V3 One-Liner Short-Circuit →](./05-v3-one-liner-short-circuit_satu-baris-short-circuit.md)**
