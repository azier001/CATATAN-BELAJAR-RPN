# 🔧 V5 — While Loop + Exec — Perulangan While + Exec

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Topic](https://img.shields.io/badge/Topic-Regex%20|%20exec()%20|%20lastIndex-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-V5-purple?style=for-the-badge)

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

Versi paling **low-level** — menggunakan `while` loop dan `.exec()` untuk menyisir string secara manual, satu temuan per iterasi.

```javascript
function cariPelaku(text) {
  const pattern = /abc/g;
  let count = 0;

  // Selama pola ditemukan, tambahkan hitungan
  while (pattern.exec(text) !== null) {
    count++;
  }

  return count;
}
```

---

<a name="penjelasan"></a>
## 🔍 Penjelasan Baris per Baris

```javascript
const pattern = /abc/g;
```
🎯 Mendefinisikan pola regex. Flag `g` **wajib** di sini karena `.exec()` menggunakan properti `lastIndex` untuk mengingat posisi terakhir — tanpa `g`, `lastIndex` tidak pernah bergeser dan loop menjadi **infinite loop** (berulang selamanya)!

---

```javascript
let count = 0;
```
🔢 Inisialisasi counter. Kita akan menambah angka ini setiap kali `.exec()` menemukan match.

---

```javascript
while (pattern.exec(text) !== null) {
  count++;
}
```
🔁 **Loop utama** — inilah "mesin pencari" kita:
- `.exec()` dipanggil berulang kali
- Setiap panggilan mencari **satu** kemunculan berikutnya
- Jika ketemu → return object (truthy), `count` bertambah 1
- Jika tidak ketemu lagi → return `null`, loop berhenti

---

```javascript
return count;
```
📤 Kembalikan total hitungan. Karena `count` dimulai dari `0` dan hanya bertambah saat match ditemukan, nilainya pasti selalu benar — termasuk `0` jika tidak ada match sama sekali.

---

<a name="konsep"></a>
## 🧠 Konsep Kunci

### Apa itu `lastIndex`?

`lastIndex` adalah properti **tersembunyi** milik regex yang bertindak seperti **pembatas buku** (*bookmark*). Dia mengingat posisi terakhir pencarian berhenti, agar pencarian berikutnya dimulai dari situ — bukan dari awal lagi.

```
Regex: /abc/g
                lastIndex
                    ↓
Panggilan 1:        0  → Mulai cari dari posisi 0
Panggilan 2:        4  → Lanjut dari posisi 4
Panggilan 3:        8  → Lanjut dari posisi 8
Panggilan 4:        8  → Tidak ketemu lagi → return null
```

### Bedanya `.exec()` vs `.match()`

| Aspek | `.match()` | `.exec()` |
|-------|-----------|-----------|
| Cara kerja | Borongan — ambil semua sekaligus | Satuan — ambil satu per satu |
| Return | Array semua match / `null` | Object satu match / `null` |
| Kontrol | Tidak bisa dikontrol | Bisa pause, inspect, lanjutkan |
| Memori | Buat array besar di memori | Hemat — satu objek per iterasi |

> 💡 **Analogi:** `.match()` itu seperti **jaring ikan** — lempar sekali, tangkap semua. `.exec()` itu seperti **kail pancing** — lempar berkali-kali, tangkap satu per satu.

### ⚠️ Bahaya: Infinite Loop tanpa flag `g`

```javascript
// ❌ BAHAYA — INFINITE LOOP!
const pattern = /abc/;  // Tanpa flag 'g'
while (pattern.exec(text) !== null) {
  count++;  // Loop ini TIDAK PERNAH BERHENTI!
}
```

Tanpa flag `g`, `lastIndex` tidak pernah bergeser. Jadi `.exec()` selalu mencari dari posisi 0, selalu menemukan match yang sama, dan loop berulang selamanya.

---

<a name="simulasi"></a>
## 🎞️ Simulasi Langkah demi Langkah

### Case: `cariPelaku('mabcvabc')`

```
📊 Tracing Eksekusi:

  pattern = /abc/g    (lastIndex = 0)
  text = "mabcvabc"
  count = 0

  ─── ITERASI 1 ───
  pattern.exec("mabcvabc")    (mulai dari posisi 0)

  [m][a][b][c][v][a][b][c]
      ^--Match--^
  Ketemu "abc" di posisi 1!
  lastIndex bergeser → 4

  count = 1

  ─── ITERASI 2 ───
  pattern.exec("mabcvabc")    (mulai dari posisi 4)

  [m][a][b][c][v][a][b][c]
                   ^--Match--^
  Ketemu "abc" di posisi 5!
  lastIndex bergeser → 8

  count = 2

  ─── ITERASI 3 ───
  pattern.exec("mabcvabc")    (mulai dari posisi 8)

  [m][a][b][c][v][a][b][c] |
                            ↑ (posisi 8 — sudah mentok)
  Tidak ada lagi karakter.
  Hasil: null → LOOP BERHENTI

  return count → return 2

  Output: 2 ✅
```

### Case: `cariPelaku('xyz')`

```
📊 Tracing Eksekusi:

  pattern = /abc/g    (lastIndex = 0)
  text = "xyz"
  count = 0

  ─── ITERASI 1 ───
  pattern.exec("xyz")    (mulai dari posisi 0)

  [x][y][z]
  Tidak ada karakter yang cocok dengan "abc"
  Hasil: null → LOOP TIDAK PERNAH MASUK

  return count → return 0

  Output: 0 ✅
```

---

<a name="insight"></a>
## 💡 Insight Penting

> **Kapan versi ini lebih baik dari `.match()`?**
> Ketika kamu bekerja dengan string yang **sangat besar** (jutaan karakter). `.match()` membuat satu array besar berisi semua hasil sekaligus, yang memakan banyak memori. `.exec()` hanya memproses satu per satu, sehingga jauh lebih hemat memori.

> **Kenapa versi ini jarang dipakai di code sehari-hari?**
> Karena untuk kebanyakan kasus, string-nya tidak cukup besar untuk membenarkan kompleksitas kode tambahan. `.match()` atau `.split()` sudah lebih dari cukup. Tapi **memahami `.exec()` dan `lastIndex`** adalah kunci untuk menguasai regex secara mendalam.

> **Apa keuntungan tersembunyi dari `.exec()`?**
> Kamu bisa mengakses **informasi tambahan** per match yang tidak tersedia di `.match()`, seperti posisi indeks match (`result.index`) dan captured groups. Ini berguna untuk kasus pencarian yang lebih kompleks.

---

<a name="evaluasi"></a>
## ⚖️ Evaluasi Versi Ini

| Kelebihan | Kekurangan |
|-----------|------------|
| Hemat memori untuk string besar | Lebih banyak baris kode |
| Kontrol penuh atas proses pencarian | Risiko infinite loop tanpa flag `g` |
| Bisa akses info tambahan (index, groups) | Overkill untuk kasus sederhana |
| Tidak pernah return `null` (pakai counter) | Lebih sulit dipahami bagi pemula |

> 💡 **Cocok digunakan ketika** kamu butuh **kontrol granular** atas proses pencarian, bekerja dengan data besar, atau perlu informasi tambahan seperti posisi setiap match.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 06 — V4 Split Trick](./06-v4-split-trick_trik-split.md)**
- **📖 [Lanjut ke Part 08 — Insight: Null Safety Pattern →](./08-insight-null-safety-pattern_pola-keamanan-null.md)**
