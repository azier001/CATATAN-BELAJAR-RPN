# ✂️ V4 — Split Trick — Trik Split

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-String%20|%20split()-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V4-purple?style=for-the-badge)

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

Versi **alternatif tanpa regex** — menggunakan `.split()` sebagai "gunting" untuk memotong string, lalu menghitung jumlah potongan.

```javascript
function cariPelaku(text) {
  return text.split('abc').length - 1;
}
```

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```javascript
return text.split('abc').length - 1;
```

Satu baris ini melakukan **tiga hal**:

```
return text.split('abc')  .length   - 1;
       ────────┬────────  ───┬───   ─┬─
            ①                ②       ③
```

| # | Bagian | Fungsi |
|---|--------|--------|
| ① | `text.split('abc')` | Potong string menggunakan `'abc'` sebagai pemisah → hasilnya **selalu Array** |
| ② | `.length` | Hitung jumlah potongan |
| ③ | `- 1` | Kurangi 1 karena jumlah potongan selalu lebih banyak 1 dari jumlah pemisah |

---

<a name="konsep"></a>
## 🧠 Konsep Kunci

### Kenapa jumlah potongan dikurangi 1?

Bayangkan kamu sedang **memotong tali** dengan gunting:

```
Tali utuh (0 guntingan):
━━━━━━━━━━━━━━━━━━━━━━━━━━━
→ 1 potong

Gunting 1 kali:
━━━━━━━━━━━  ✂️  ━━━━━━━━━━━
→ 2 potong

Gunting 2 kali:
━━━━━━━━  ✂️  ━━━━━━━  ✂️  ━━━━━━━
→ 3 potong
```

**Rumus universal:** `Jumlah guntingan = Jumlah potongan - 1`

Dibalik: `Jumlah potongan - 1 = Jumlah guntingan`

Nah, setiap "guntingan" itu adalah satu kemunculan kata `"abc"`. Jadi:
- 3 potongan → 2 kemunculan `"abc"`
- 4 potongan → 3 kemunculan `"abc"`
- 1 potongan → 0 kemunculan `"abc"` (tidak ada guntingan)

### Kenapa `.split()` tidak pernah return `null`?

Ini adalah **keunggulan besar** dibanding `.match()`:

```javascript
'xyz'.match(/abc/g)    // → null  (bahaya!)
'xyz'.split('abc')     // → ['xyz']  (aman, selalu Array)

''.match(/abc/g)       // → null  (bahaya!)
''.split('abc')        // → ['']    (aman, selalu Array)
```

> 💡 **Karena `.split()` selalu mengembalikan Array**, kita tidak perlu khawatir tentang `null`. Tidak perlu `if`, tidak perlu ternary, tidak perlu `||`. Langsung `.length - 1` dan selesai!

---

<a name="simulasi"></a>
## 🎞️ Simulasi Langkah demi Langkah

### Case: `cariPelaku('mabcvabc')`

```
📊 Tracing Eksekusi:

  text = "mabcvabc"
  Pemisah (gunting) = "abc"

  Step 1: text.split('abc')

    [ m ]  ✂️  [ v ]  ✂️  [  ]
           abc        abc

    Potongan 1: "m"
    Potongan 2: "v"
    Potongan 3: ""  (string kosong setelah abc terakhir)

    Hasil: ["m", "v", ""]

  Step 2: ["m", "v", ""].length → 3

  Step 3: 3 - 1 → 2

  Output: 2 ✅
```

### Case: `cariPelaku('abcabcabc')`

```
📊 Tracing Eksekusi:

  text = "abcabcabc"
  Pemisah (gunting) = "abc"

  Step 1: text.split('abc')

    [  ]  ✂️  [  ]  ✂️  [  ]  ✂️  [  ]
          abc       abc       abc

    Potongan 1: ""  (kosong, sebelum abc pertama)
    Potongan 2: ""  (kosong, antara abc ke-1 dan ke-2)
    Potongan 3: ""  (kosong, antara abc ke-2 dan ke-3)
    Potongan 4: ""  (kosong, setelah abc terakhir)

    Hasil: ["", "", "", ""]

  Step 2: ["", "", "", ""].length → 4

  Step 3: 4 - 1 → 3

  Output: 3 ✅
```

### Case: `cariPelaku('xyz')`

```
📊 Tracing Eksekusi:

  text = "xyz"
  Pemisah (gunting) = "abc"

  Step 1: text.split('abc')
    Tidak ada "abc" di dalam "xyz"
    String tidak dipotong sama sekali

    Hasil: ["xyz"]

  Step 2: ["xyz"].length → 1

  Step 3: 1 - 1 → 0

  Output: 0 ✅
```

---

<a name="insight"></a>
## 💡 Insight Penting

> **Kenapa teknik ini sering muncul di coding interview?**
> Karena interviewer ingin tahu apakah kamu bisa berpikir **di luar kotak**. Kebanyakan orang langsung lompat ke regex, padahal `.split()` bisa menyelesaikan masalah yang sama dengan cara yang lebih sederhana dan tanpa risiko `null`.

> **Apakah teknik ini lebih lambat dari regex?**
> Untuk string pendek, perbedaannya tidak terasa. Tapi untuk string yang **sangat panjang** (jutaan karakter), `.split()` bisa lebih boros memori karena dia membuat array berisi semua potongan — sedangkan regex hanya menyimpan bagian yang cocok.

---

<a name="evaluasi"></a>
## ⚖️ Evaluasi Versi Ini

| Kelebihan | Kekurangan |
|-----------|------------|
| Tidak butuh regex sama sekali | Lebih boros memori untuk string besar |
| Tidak pernah return `null` — anti-error | "Trik" yang tidak intuitif bagi pemula |
| Sangat ringkas (1 baris) | Hanya bisa mencari pola statis (bukan pattern) |
| Sering muncul di coding interview | — |

> 💡 **Cocok digunakan ketika** kamu mencari substring **sederhana** (bukan pattern kompleks) dan ingin menghindari kerumitan null handling dari regex.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 05 — V3 One-Liner Short-Circuit](./05-v3-one-liner-short-circuit_satu-baris-short-circuit.md)**
- **📖 [Lanjut ke Part 07 — V5 While Loop + Exec →](./07-v5-while-loop-exec_perulangan-while-exec.md)**
