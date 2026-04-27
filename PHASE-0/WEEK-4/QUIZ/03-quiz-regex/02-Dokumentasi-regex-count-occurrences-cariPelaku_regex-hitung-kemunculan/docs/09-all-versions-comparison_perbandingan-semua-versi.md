# 📊 Perbandingan Semua Versi — All Versions Comparison

![Topic](https://img.shields.io/badge/Topic-Comparison-blue?style=for-the-badge)
![Versions](https://img.shields.io/badge/Versions-5-orange?style=for-the-badge)

---

## 📑 Daftar Isi

- 📋 [Semua Kode Sekilas](#semua-kode)
- 📊 [Tabel Perbandingan](#tabel-perbandingan)
- 🏆 [Rekomendasi](#rekomendasi)
- ✅ [Ringkasan](#ringkasan)

---

<a name="semua-kode"></a>
## 📋 Semua Kode Sekilas

### Versi 1 — Descriptive If-Else ⭐ Rekomendasi

```javascript
function cariPelaku(text) {
  const targetPattern = /abc/g;
  const matches = text.match(targetPattern);

  if (matches) {
    return matches.length;
  } else {
    return 0;
  }
}
```

---

### Versi 2 — Ternary Operator

```javascript
function cariPelaku(text) {
  const targetPattern = /abc/g;
  const matches = text.match(targetPattern);

  return matches ? matches.length : 0;
}
```

---

### Versi 3 — One-Liner Short-Circuit

```javascript
function cariPelaku(str) {
  return (str.match(/abc/g) || []).length;
}
```

---

### Versi 4 — Split Trick

```javascript
function cariPelaku(text) {
  return text.split('abc').length - 1;
}
```

---

### Versi 5 — While Loop + Exec

```javascript
function cariPelaku(text) {
  const pattern = /abc/g;
  let count = 0;

  while (pattern.exec(text) !== null) {
    count++;
  }

  return count;
}
```

---

<a name="tabel-perbandingan"></a>
## 📊 Tabel Perbandingan

### Teknik & Pendekatan

| Versi | Pendekatan | Method Utama | Butuh Regex? |
|-------|-----------|-------------|--------------|
| V1 | If-Else + variabel deskriptif | `.match()` | ✅ Ya |
| V2 | Ternary operator | `.match()` | ✅ Ya |
| V3 | Short-circuit `\|\|` | `.match()` | ✅ Ya |
| V4 | Potong string, hitung potongan | `.split()` | ❌ Tidak |
| V5 | Loop manual + counter | `.exec()` | ✅ Ya |

### Null Handling

| Versi | Strategi Null Safety | Bisa Return `null`? |
|-------|---------------------|---------------------|
| V1 | `if (matches)` — explicit check | ❌ Aman |
| V2 | `matches ? ... : 0` — ternary | ❌ Aman |
| V3 | `(... \|\| [])` — short-circuit | ❌ Aman |
| V4 | Tidak perlu — `.split()` selalu return Array | ❌ Aman |
| V5 | Tidak perlu — pakai counter, bukan `.length` | ❌ Aman |

### Kelebihan & Kekurangan

| Versi | Kelebihan | Kekurangan |
|-------|-----------|------------|
| V1 | Paling mudah dibaca & di-debug ⭐ | Paling banyak baris kode |
| V2 | Ringkas tapi tetap eksplisit | Kurang intuitif bagi pemula total |
| V3 | Sangat pendek (1 baris), idiom JS | Prettier bisa mengubah format |
| V4 | Anti-null, tanpa regex | Boros memori untuk string besar |
| V5 | Hemat memori, kontrol penuh | Risiko infinite loop tanpa flag `g` |

### Jumlah Baris Kode

| Versi | Baris (tanpa komentar) | Variabel |
|-------|----------------------|----------|
| V1 | 8 baris | 2 (`targetPattern`, `matches`) |
| V2 | 5 baris | 2 (`targetPattern`, `matches`) |
| V3 | 3 baris | 0 |
| V4 | 3 baris | 0 |
| V5 | 7 baris | 2 (`pattern`, `count`) |

---

<a name="rekomendasi"></a>
## 🏆 Rekomendasi

| Situasi | Versi yang Disarankan |
|---------|----------------------|
| 🎓 Baru belajar JavaScript / regex | **V1** — Setiap langkah jelas, mudah di-debug dengan `console.log` |
| 👥 Kerja dalam tim dengan level beragam | **V2** — Ringkas tapi tetap bisa dipahami semua anggota |
| ⚡ Kode pribadi, butuh cepat & pendek | **V3** — Idiom standar JS, satu baris selesai |
| 🚫 Tidak mau pakai regex sama sekali | **V4** — Cara paling sederhana, zero null risk |
| 📊 Data sangat besar (jutaan karakter) | **V5** — Paling hemat memori, proses satu per satu |

---

<a name="ringkasan"></a>
## ✅ Ringkasan

Semua versi menghasilkan output yang sama — yang berbeda hanya **cara berpikirnya**:

- **V1, V2, V3** — berpikir via **"Kumpulkan semua, lalu hitung"** (`.match()` → `.length`)
- **V4** — berpikir via **"Potong, lalu hitung potongan"** (`.split()` → `.length - 1`)
- **V5** — berpikir via **"Cari satu per satu, catat jumlahnya"** (`while` + `.exec()` + `count++`)

> 💬 Tidak ada versi yang paling benar — setiap versi mengajarkan cara berpikir yang berbeda. V1 mengajarkan **kejelasan**, V3 mengajarkan **efisiensi penulisan**, V4 mengajarkan **kreativitas**, dan V5 mengajarkan **bagaimana mesin bekerja di balik layar**.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 08 — Insight: Null Safety Pattern](./08-insight-null-safety-pattern_pola-keamanan-null.md)**
- **📖 [Lanjut ke Part 10 — Test Cases & Edge Cases →](./10-test-cases-and-edge-cases_kasus-pengujian-dan-kasus-tepi.md)**
