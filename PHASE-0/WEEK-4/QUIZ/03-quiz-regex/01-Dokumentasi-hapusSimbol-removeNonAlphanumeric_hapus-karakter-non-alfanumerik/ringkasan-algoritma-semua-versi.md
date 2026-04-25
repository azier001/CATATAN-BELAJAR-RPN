# 📋 Ringkasan Algoritma — Semua Versi

> `hapusSimbol` / `removeNonAlphanumeric` — Remove Non-Alphanumeric Characters

![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Versions](https://img.shields.io/badge/Versions-3-purple?style=for-the-badge)
![Type](https://img.shields.io/badge/Type-Cheat%20Sheet-orange?style=for-the-badge)

---

## 📑 Daftar Isi

- 🔤 [V1 — Regex](#v1)
- 🔁 [V2 — Looping + Whitelist](#v2)
- 🔢 [V3 — ASCII charCodeAt](#v3)
- 🏆 [Rekomendasi](#rekomendasi)

---

<a name="v1"></a>
## ⭐ 🔤 V1 — Regex Solution — Solusi Regex ⭐ Rekomendasi

**Ide utama:** Gunakan pola Regex dengan negasi `[^...]` dan flag `gi` untuk menghapus semua karakter non-alphanumeric dalam satu operasi.

```js
function hapusSimbol(str) {
  return str.replace(/[^a-z0-9]/gi, '');
}
```

| Kelebihan | Kekurangan |
|-----------|------------|
| ✅ Paling ringkas (1 baris) | ⚠️ Perlu memahami sintaks Regex |
| ✅ Paling cepat untuk string besar | ⚠️ `^` mudah salah posisi (di luar vs di dalam `[]`) |
| ✅ Idiomatik — standar di industri | ⚠️ Debugging Regex bisa rumit |
| ✅ Flag `i` eliminasi kebutuhan tulis `A-Z` | ⚠️ Lupa flag `g` → hanya hapus simbol pertama |

> ✅ **Cocok untuk:** Production code, coding interview, dan semua situasi di mana efisiensi dan keterbacaan profesional menjadi prioritas.

---

<a name="v2"></a>
## 🔁 V2 — Looping + Whitelist — Solusi Looping Whitelist

**Ide utama:** Buat daftar karakter yang diizinkan (whitelist), iterasi setiap karakter, dan simpan hanya yang ada di daftar — menggunakan `.toLowerCase()` agar cukup mendaftar huruf kecil saja.

```js
function hapusSimbol(str) {
  let result = '';
  const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789';

  for (const char of str) {
    if (allowed.includes(char.toLowerCase())) {
      result += char;
    }
  }

  return result;
}
```

| Kelebihan | Kekurangan |
|-----------|------------|
| ✅ Paling mudah dibaca dan dipahami | ⚠️ Lebih verbose (~8 baris) |
| ✅ Tidak perlu mengenal Regex | ⚠️ String `allowed` harus ditulis manual |
| ✅ Trick `.toLowerCase()` sangat elegan | ⚠️ Bug jika `allowed` tidak lengkap |
| ✅ Mudah dimodifikasi untuk kondisi tambahan | ⚠️ Performa lebih lambat untuk string sangat panjang |

> ✅ **Cocok untuk:** Pemula yang baru belajar JavaScript, atau ketika logika filter perlu dikombinasikan dengan kondisi tambahan di dalam loop.

---

<a name="v3"></a>
## 🔢 V3 — ASCII charCodeAt — Solusi ASCII charCodeAt

**Ide utama:** Setiap karakter memiliki kode angka (ASCII). Cukup periksa apakah kode karakter berada dalam rentang yang valid: angka (48–57), huruf besar (65–90), atau huruf kecil (97–122).

```js
function hapusSimbol(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    const isNumber = code >= 48 && code <= 57;   // 0-9
    const isUpper  = code >= 65 && code <= 90;   // A-Z
    const isLower  = code >= 97 && code <= 122;  // a-z

    if (isNumber || isUpper || isLower) {
      result += str[i];
    }
  }

  return result;
}
```

| Kelebihan | Kekurangan |
|-----------|------------|
| ✅ Melatih pemahaman low-level (encoding karakter) | ⚠️ Perlu hafal angka ASCII |
| ✅ Tidak bergantung pada fitur bahasa khusus | ⚠️ Paling verbose (~12 baris) |
| ✅ Variabel `isNumber/isUpper/isLower` sangat deskriptif | ⚠️ Mudah lupa satu rentang (misal: huruf besar 65–90) |
| ✅ Performa granular dan terkontrol penuh | ⚠️ Kurang fleksibel untuk perubahan aturan filter |

> ✅ **Cocok untuk:** Belajar cara komputer memproses teks, atau bekerja di lingkungan yang membutuhkan kontrol penuh tanpa bergantung pada Regex engine.

---

<a name="rekomendasi"></a>
## 🏆 Rekomendasi

| Situasi | Versi yang Disarankan |
|---------|----------------------|
| Production code atau coding interview | V1 — Regex: ringkas, idiomatik, paling profesional |
| Baru belajar JavaScript | V2 — Looping: alurnya paling eksplisit dan mudah dibaca |
| Ingin memahami encoding karakter | V3 — ASCII: membangun fondasi pemahaman low-level |
| String sangat panjang, performa kritis | V1 — Regex: dioptimasi oleh JavaScript engine |
| Filter perlu logika tambahan di dalam loop | V2 atau V3: lebih fleksibel dari Regex untuk kondisi kompleks |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](./README.md)**
- **📖 [Dokumentasi Lengkap — docs/](./docs/)**
