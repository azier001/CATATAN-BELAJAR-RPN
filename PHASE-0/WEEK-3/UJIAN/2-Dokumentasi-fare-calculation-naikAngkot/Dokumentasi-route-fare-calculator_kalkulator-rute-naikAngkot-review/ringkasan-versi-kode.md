# 💻 Ringkasan Versi Kode

### ✨ _Semua versi solusi dalam satu halaman — copy-paste ready_

> 🎯 **Tujuan:** Cheat sheet ringkas berisi kode lengkap setiap versi tanpa penjelasan panjang. Butuh pemahaman detail? Lihat [Peta Dokumentasi](README.md#peta-dokumentasi).

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧱 | [V1 — `for...of`](#v1) | Pendekatan imperatif, cocok untuk pemula |
| 🚀 | [V2 — `.map()`](#v2) | Pendekatan deklaratif, standar industri |
| ⚡ | [Quick Reference](#quick-ref) | Tabel perbandingan kilat |

---

<a name="v1"></a>

## 🧱 V1 — Pendekatan Imperatif (`for...of`)

```javascript
const naikAngkot = (arrPenumpang) => {
  const routes = ['A', 'B', 'C', 'D', 'E', 'F'];
  const result = [];

  for (const [passengerName, origin, destination] of arrPenumpang) {
    const originIndex = routes.indexOf(origin);
    const destinationIndex = routes.indexOf(destination);

    const fare = Math.abs(originIndex - destinationIndex) * 2000;

    result.push({
      penumpang: passengerName,
      naikDari: origin,
      tujuan: destination,
      bayar: fare,
    });
  }

  return result;
};
```

> 📖 Penjelasan step-by-step → [Implementasi Bertahap](docs/02-implementasi-bertahap.md#v1-step)

---

<a name="v2"></a>

## 🚀 V2 — Pendekatan Deklaratif (`.map()`) ⭐ Rekomendasi

```javascript
const naikAngkot = (arrPenumpang) => {
  const routes = ['A', 'B', 'C', 'D', 'E', 'F'];

  return arrPenumpang.map(([passengerName, origin, destination]) => {
    const originIndex = routes.indexOf(origin);
    const destinationIndex = routes.indexOf(destination);

    const fare = Math.abs(originIndex - destinationIndex) * 2000;

    return {
      penumpang: passengerName,
      naikDari: origin,
      tujuan: destination,
      bayar: fare,
    };
  });
};
```

> 📖 Penjelasan evolusi dari V1 → [Implementasi Bertahap](docs/02-implementasi-bertahap.md#v2-map)

---

<a name="quick-ref"></a>

## ⚡ Quick Reference

| Aspek | V1 (`for...of`) | V2 (`.map()`) ⭐ |
|-------|:---:|:---:|
| **Gaya** | Imperatif | Deklaratif |
| **Baris kode** | ~15 | ~12 |
| **Butuh `result = []`?** | Ya | Tidak |
| **Umum di industri** | Jarang | Sangat lazim |
| **Cocok untuk** | Belajar logika dasar | Produksi & React |

> 📖 Perbandingan lengkap → [Implementasi Bertahap](docs/02-implementasi-bertahap.md#perbandingan)

---

⬆️ [Kembali ke README](README.md)
