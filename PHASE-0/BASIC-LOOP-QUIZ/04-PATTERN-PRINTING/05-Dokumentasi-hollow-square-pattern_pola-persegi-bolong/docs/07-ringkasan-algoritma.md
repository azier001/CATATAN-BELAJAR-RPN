# 📋 Ringkasan Algoritma — Persegi Bolong (Cheat Sheet)

### ✨ _Review cepat semua versi solusi dalam satu halaman._

> 🎯 **Tujuan:** Halaman ini dirancang untuk **dibaca dalam 2 menit** saat kamu butuh mengingat kembali cara membuat pola Persegi Bolong tanpa harus membaca seluruh dokumentasi.

---

## 🔑 Rumus Inti

```
Sisi Atas    →  row === 0
Sisi Bawah   →  row === num - 1
Sisi Kiri    →  col === 0
Sisi Kanan   →  col === num - 1

Cetak '*' jika SALAH SATU terpenuhi, selain itu cetak ' ' (spasi).
```

---

## ⭐ Versi 1 — Nested Loop + Ternary (Best Practice untuk Ujian)

```javascript
function persegiBolong(num) {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    for (let col = 0; col < num; col++) {
      pattern +=
        row === 0 || row === num - 1 || col === 0 || col === num - 1 ? '*' : ' ';
    }
    pattern += '\n';
  }

  return pattern;
}
```

> 📌 **Ingat:** 2 loop, 4 kondisi boundary digabung `||`, `'\n'` di luar loop `col`.

---

## 🚀 Versi 2 — Single Loop + String.repeat() (Best Practice Industri)

```javascript
function persegiBolong(num) {
  let pattern = '';

  for (let row = 0; row < num; row++) {
    if (row === 0 || row === num - 1) {
      pattern += '*'.repeat(num) + '\n';
    } else {
      pattern += '*' + ' '.repeat(num - 2) + '*' + '\n';
    }
  }

  return pattern;
}
```

> 📌 **Ingat:** 1 loop, bedakan 2 jenis baris (penuh vs bolong), `num - 2` untuk spasi tengah.

---

## 📊 Quick Comparison

| Aspek | V1 ⭐ | V2 🚀 |
|:------|:------|:------|
| Loop | 2 (nested) | 1 |
| Kompleksitas | O(N²) | O(N)* |
| Keterbacaan | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Performa | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| String Concat | `num × num` kali | `num` kali |
| Cocok untuk | Ujian & semua level | Kode production |

> *\*`.repeat()` melakukan iterasi internal, tapi dieksekusi oleh engine native C++ yang jauh lebih cepat.*

---

## ⚠️ Top 4 Gotchas

| # | Jebakan | Solusi |
|---|:--------|:------|
| 1 | Lupa cetak spasi (tanpa `else`) | Selalu sertakan `else { pattern += ' '; }` |
| 2 | Menulis `num` bukan `num - 1` | Boundary bawah/kanan = `num - 1` |
| 3 | `'\n'` di dalam loop `col` | Letakkan `'\n'` di luar loop `col`, di dalam loop `row` |
| 4 | Pakai `&&` bukan `\|\|` | Boundary pakai OR (`\|\|`), bukan AND (`&&`) |

---

## 🏷️ Naming Quick Reference

| Peran | ✅ Pakai | ❌ Hindari |
|:------|:---------|:-----------|
| Penampung | `pattern` | `result`, `res` |
| Loop baris | `row` | `i`, `x` |
| Loop kolom | `col` | `j`, `y` |

---

## 🧠 Mental Model Quick Reference

```text
V1: "Untuk setiap KOTAK di grid, TANYA: apakah kamu di pinggiran?"
     → Pendekatan INTERROGASI (cek per karakter)

V2: "Untuk setiap BARIS, BEDAKAN: tipe penuh atau bolong?"
     → Pendekatan KONSTRUKSI (rangkai per baris)
```

---

## 📤 Expected Output (`num = 5`)

```text
*****
*   *
*   *
*   *
*****
```

---

| ⬅️ Sebelumnya | 🏠 Home |
|:---:|:---:|
| [06 — Refleksi & Naming](./06-refleksi-dan-naming.md) | [README](../README.md) |
