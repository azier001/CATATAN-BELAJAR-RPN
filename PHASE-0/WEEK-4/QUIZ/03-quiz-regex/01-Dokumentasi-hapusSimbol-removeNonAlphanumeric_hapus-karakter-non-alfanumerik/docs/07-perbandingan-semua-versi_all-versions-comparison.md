# 📊 Perbandingan Semua Versi — All Versions Comparison

![Topic](https://img.shields.io/badge/Topic-Comparison-blue?style=for-the-badge)
![Versions](https://img.shields.io/badge/Versions-3-orange?style=for-the-badge)

---

## 📑 Daftar Isi

- 📋 [Semua Kode Sekilas](#semua-kode)
- 📊 [Tabel Perbandingan](#tabel-perbandingan)
- 🏆 [Rekomendasi](#rekomendasi)
- ✅ [Ringkasan](#ringkasan)

---

<a name="semua-kode"></a>
## 📋 Semua Kode Sekilas

### Versi 1 — Regex ⭐ Rekomendasi

```js
function hapusSimbol(str) {
  return str.replace(/[^a-z0-9]/gi, '');
}
```

---

### Versi 2 — Looping + Whitelist

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

---

### Versi 3 — ASCII charCodeAt

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

---

<a name="tabel-perbandingan"></a>
## 📊 Tabel Perbandingan

### Teknik & Pendekatan

| Versi | Nama | Pendekatan | Method Utama | Panjang Kode |
|-------|------|-----------|-------------|-------------|
| **V1** | Regex | Blacklist via Regex | `.replace(/regex/)` | ~1 baris ⭐ |
| **V2** | Looping + Whitelist | Whitelist via loop | `for...of` + `.includes()` | ~8 baris |
| **V3** | ASCII charCodeAt | Pemeriksaan rentang angka | `.charCodeAt()` + kondisi | ~12 baris |

### Filter Logic

| Versi | Cara Filter | Cek Huruf Besar | Cek Spasi |
|-------|------------|:-:|:-:|
| **V1** | Hapus yang BUKAN `[a-z0-9]` | ✅ Via flag `i` | ✅ Otomatis |
| **V2** | Simpan yang ada di `allowed` | ✅ Via `.toLowerCase()` | ✅ Tidak ada di allowed |
| **V3** | Simpan jika kode ASCII valid | ✅ Rentang 65–90 | ✅ Kode 32, di luar rentang |

### Kelebihan & Kekurangan

| Versi | Kelebihan | Kekurangan |
|-------|-----------|------------|
| **V1** | ⭐ Ringkas 1 baris, idiomatik, paling cepat | Perlu hafal sintaks Regex |
| **V2** | Paling mudah dibaca, logika eksplisit | `allowed` harus ditulis manual (62 char) |
| **V3** | Melatih logika low-level, kontrol penuh | Perlu hafal angka ASCII, verbose |

### Risiko Bug

| Versi | Jebakan Umum | Severity |
|-------|-------------|:---:|
| **V1** | `^` salah posisi (di luar vs di dalam `[]`) | 🔴 Tinggi |
| **V1** | Lupa flag `g` → hanya hapus simbol pertama | 🟠 Sedang |
| **V2** | `allowed` tidak lengkap → karakter valid ikut terbuang | 🟠 Sedang |
| **V3** | Lupa satu rentang ASCII (misal: huruf besar 65–90) | 🔴 Tinggi |

---

<a name="rekomendasi"></a>
## 🏆 Rekomendasi

| Situasi | Versi yang Disarankan |
|---------|----------------------|
| **Production code / interview** | V1 — Regex: paling ringkas dan idiomatik di JavaScript |
| **Baru belajar, butuh kode yang mudah dipahami** | V2 — Looping + Whitelist: alurnya paling eksplisit dan naratif |
| **Belajar cara komputer memproses teks secara low-level** | V3 — ASCII: membangun pemahaman fundamental tentang encoding |
| **Perlu filter dengan kondisi tambahan di dalam loop** | V2 atau V3: Regex sulit dikombinasikan dengan logika kompleks |
| **String sangat panjang, performa kritis** | V1 — Regex: paling dioptimasi oleh JavaScript engine |
| **Lingkungan tanpa dukungan Regex** | V3 — ASCII: tidak bergantung pada fitur bahasa khusus |

---

<a name="ringkasan"></a>
## ✅ Ringkasan

Semua versi menghasilkan output yang sama — yang berbeda hanya **cara berpikirnya**:

- **Versi 1** — berpikir via **pola / pattern matching** (Regex)
- **Versi 2** — berpikir via **daftar izin / whitelist** (Looping)
- **Versi 3** — berpikir via **nilai numerik / encoding** (ASCII)

```
Input: "ma@#k!an~"

V1 (Regex):       Pattern scan → hapus yang cocok pola → "makan"
V2 (Whitelist):   Cek tiap char di daftar → simpan yang ada → "makan"
V3 (ASCII):       Cek kode tiap char → simpan yang di rentang valid → "makan"

Output: "makan" ✅ (ketiga versi identik)
```

> 💬 Tidak ada versi yang paling "benar" — setiap versi mengajarkan **cara berpikir yang berbeda**. Menguasai ketiganya membuat kamu lebih fleksibel sebagai developer: kamu tahu *kapan* dan *mengapa* memilih satu pendekatan di atas yang lain, bukan sekadar menghafal satu cara.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 06 — Insight Regex Shorthand](./06-insight-regex-shorthand_insight-karakter-kelas-regex.md)**
- **📖 [Lanjut ke Part 08 — Test Cases →](./08-test-cases_kasus-pengujian.md)**
