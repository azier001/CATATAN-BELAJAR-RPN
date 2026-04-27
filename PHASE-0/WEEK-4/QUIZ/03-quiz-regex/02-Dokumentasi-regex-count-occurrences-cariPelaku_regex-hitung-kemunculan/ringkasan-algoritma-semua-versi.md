# 📋 Ringkasan Algoritma — Semua Versi

> `cariPelaku` — Regex Count Occurrences

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Versions](https://img.shields.io/badge/Versions-5-purple?style=for-the-badge)
![Type](https://img.shields.io/badge/Type-Cheat%20Sheet-orange?style=for-the-badge)

---

## 📑 Daftar Isi

- 📖 [V1 — Descriptive If-Else](#v1)
- ⚡ [V2 — Ternary Operator](#v2)
- 🚀 [V3 — One-Liner Short-Circuit](#v3)
- ✂️ [V4 — Split Trick](#v4)
- 🔧 [V5 — While Loop + Exec](#v5)
- 🏆 [Rekomendasi](#rekomendasi)

---

<a name="v1"></a>
## 📖 V1 — Descriptive If-Else — Deskriptif If-Else ⭐ Rekomendasi

**Ide utama:** Setiap langkah logika disimpan ke variabel deskriptif, null dicek dengan `if-else` eksplisit.

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

| Kelebihan | Kekurangan |
|-----------|------------|
| Paling mudah dibaca & dipahami | Paling banyak baris kode |
| Mudah di-debug dengan `console.log` | — |

> ✅ **Cocok untuk:** Belajar konsep, kerja tim, dan siapa saja yang mengutamakan kejelasan.

---

<a name="v2"></a>
## ⚡ V2 — Ternary Operator — Operator Ternary

**Ide utama:** Mengganti blok `if-else` dengan satu baris ternary `? :`.

```javascript
function cariPelaku(text) {
  const targetPattern = /abc/g;
  const matches = text.match(targetPattern);

  return matches ? matches.length : 0;
}
```

| Kelebihan | Kekurangan |
|-----------|------------|
| Ringkas tapi tetap eksplisit | Kurang intuitif bagi pemula total |
| Formatter-friendly (Prettier aman) | Tidak bisa menampung logika kompleks |

> ✅ **Cocok untuk:** Kode produksi standar yang butuh keseimbangan ringkas dan jelas.

---

<a name="v3"></a>
## 🚀 V3 — One-Liner Short-Circuit — Satu Baris Short-Circuit

**Ide utama:** Gunakan `|| []` sebagai "payung" agar `.length` aman dipanggil meski `.match()` return `null`.

```javascript
function cariPelaku(str) {
  return (str.match(/abc/g) || []).length;
}
```

| Kelebihan | Kekurangan |
|-----------|------------|
| Paling ringkas (1 baris) | Sulit dibaca bagi pemula |
| Idiom standar JavaScript | Prettier bisa mengubah format |

> ✅ **Cocok untuk:** Kode pribadi yang butuh kecepatan penulisan dan gaya senior developer.

---

<a name="v4"></a>
## ✂️ V4 — Split Trick — Trik Split

**Ide utama:** Potong string menggunakan target sebagai pemisah, lalu hitung jumlah potongan dikurangi 1.

```javascript
function cariPelaku(text) {
  return text.split('abc').length - 1;
}
```

| Kelebihan | Kekurangan |
|-----------|------------|
| Tidak butuh regex | Boros memori untuk string besar |
| Tidak pernah return `null` | Hanya untuk pola statis (bukan pattern) |

> ✅ **Cocok untuk:** Kasus sederhana tanpa regex dan sering muncul di coding interview.

---

<a name="v5"></a>
## 🔧 V5 — While Loop + Exec — Perulangan While + Exec

**Ide utama:** Cari satu per satu dengan `.exec()`, hitung manual pakai counter. Memanfaatkan `lastIndex` sebagai bookmark.

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

| Kelebihan | Kekurangan |
|-----------|------------|
| Hemat memori untuk data besar | Lebih banyak baris kode |
| Kontrol penuh atas pencarian | Risiko infinite loop tanpa flag `g` |

> ✅ **Cocok untuk:** Data besar (jutaan karakter) atau ketika butuh kontrol granular atas proses pencarian.

---

<a name="rekomendasi"></a>
## 🏆 Rekomendasi

| Situasi | Versi yang Disarankan |
|---------|----------------------|
| 🎓 Baru belajar JavaScript / regex | V1 — Paling jelas, mudah di-debug |
| 👥 Kerja dalam tim | V2 — Ringkas tapi tetap dipahami semua orang |
| ⚡ Kode pribadi, butuh cepat | V3 — Idiom JS, satu baris selesai |
| 🚫 Tidak mau pakai regex | V4 — Zero null risk, tanpa regex |
| 📊 Data sangat besar | V5 — Paling hemat memori |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](./README.md)**
- **📖 [Dokumentasi Lengkap — docs/](./docs/)**
