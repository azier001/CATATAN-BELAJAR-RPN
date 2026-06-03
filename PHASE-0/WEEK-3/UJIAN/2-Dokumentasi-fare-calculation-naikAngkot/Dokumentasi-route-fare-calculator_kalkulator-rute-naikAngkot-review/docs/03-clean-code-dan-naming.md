# ✍️ Clean Code & Naming Convention

### ✨ _Mengubah kode yang "bisa jalan" menjadi kode yang "enak dibaca" oleh siapa pun_

> 🎯 **Tujuan:** Memahami prinsip penamaan variabel yang profesional, melihat transformasi dari naming awal ke English Best Practice, dan mendapatkan kode final yang siap digunakan di lingkungan industri.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 💡 | [Mengapa Naming Penting?](#mengapa-naming) | Alasan readability lebih dari sekadar estetika |
| 🔄 | [Transformasi Penamaan](#transformasi) | Perjalanan dari naming mentah → English Best Practice |
| 💻 | [Kode Final Rekomendasi](#kode-final) | Solusi `.map()` dengan English naming — versi definitif |
| 📐 | [3 Prinsip Naming](#prinsip) | Aturan praktis yang bisa langsung diterapkan |

---

<a name="mengapa-naming"></a>

## 💡 Mengapa Naming Penting?

Kode di [Implementasi Bertahap](02-implementasi-bertahap.md) sudah **berfungsi sempurna**. Lalu kenapa perlu diubah lagi?

```
🔐 Analogi:
Kode yang berjalan = rumah yang bisa ditinggali
Kode yang terbaca  = rumah yang bisa ditinggali + mudah direnovasi

Di dunia industri, kode lebih sering DIBACA daripada DITULIS.
```

> [!IMPORTANT]
> Meskipun key objek output (`penumpang`, `naikDari`, `tujuan`, `bayar`) dikunci oleh soal dan tidak boleh diubah, kita **bebas** menamai semua **variabel internal** di dalam fungsi. Di sinilah naming convention berperan.

---

<a name="transformasi"></a>

## 🔄 Transformasi Penamaan

Berikut perjalanan evolusi penamaan variabel dari yang buruk → cukup → profesional:

| Peran Variabel | ❌ Bad | ✅ Good | ✅ English Best Practice | Alasan Best Practice |
|---|---|---|---|---|
| Nama penumpang | `n`, `p` | `nama` | `passengerName` | Sangat deskriptif — jelas ini nama penumpang |
| Halte naik | `a`, `awal` | `start` | `origin` | Istilah standar industri untuk keberangkatan |
| Halte turun | `b`, `akhir` | `end` | `destination` | Pasangan natural dari `origin` |
| Index halte naik | `i`, `idx1` | `startIndex` | `originIndex` | Menggabungkan peran + tipe data |
| Index halte turun | `j`, `idx2` | `endIndex` | `destinationIndex` | Menggabungkan peran + tipe data |
| Total tarif | `t`, `total` | `bayar` | `fare` | Istilah spesifik untuk ongkos perjalanan |
| Kumpulan rute | `r`, `rt` | `rute` | `routes` | Plural (jamak) → menandakan Array |

> [!NOTE]
> Kolom **"Good"** sudah layak untuk tugas kuliah atau latihan pribadi. Tapi jika kamu ingin kode yang setara dengan standar developer senior di perusahaan, gunakan kolom **"English Best Practice"**.

---

<a name="kode-final"></a>

## 💻 Kode Final Rekomendasi

Versi `.map()` dengan English naming — ini adalah **solusi definitif** dari seluruh perjalanan belajar:

```javascript
const naikAngkot = (arrPenumpang) => {
  const routes = ['A', 'B', 'C', 'D', 'E', 'F'];

  return arrPenumpang.map(([passengerName, origin, destination]) => {
    const originIndex = routes.indexOf(origin);
    const destinationIndex = routes.indexOf(destination);

    const fare = Math.abs(originIndex - destinationIndex) * 2000;

    // Key objek (kiri titik dua) → bahasa Indonesia sesuai soal
    // Value objek (kanan titik dua) → variabel English kita
    return {
      penumpang: passengerName,
      naikDari: origin,
      tujuan: destination,
      bayar: fare,
    };
  });
};
```

> [!TIP]
> Perhatikan bagaimana **key objek** tetap bahasa Indonesia (sesuai soal) sementara **variabel internal** menggunakan English. Ini adalah pola umum ketika requirement mengharuskan format output tertentu, tapi kode internalmu tetap mengikuti standar internasional.

---

<a name="prinsip"></a>

## 📐 3 Prinsip Naming yang Diterapkan

### 1. 🚫 Hindari Variabel Satu Huruf

```javascript
// ❌ Tidak deskriptif — pembaca harus menebak
for (const [n, s, e] of arr) { ... }

// ✅ Langsung terbaca perannya
for (const [passengerName, origin, destination] of arr) { ... }
```

> [!WARNING]
> Satu-satunya pengecualian: variabel `i` untuk counter `for` standar (`for (let i = 0; ...)`). Di luar itu, selalu gunakan nama deskriptif.

### 2. 🌐 Gunakan Bahasa Inggris

Bahasa Inggris adalah bahasa universal programming. Membiasakan English naming membuat kodemu:
- Bisa dibaca oleh developer dari negara mana pun
- Konsisten dengan dokumentasi library dan framework
- Tampak setara dengan standar developer senior

### 3. 🔗 Konsistensi Pasangan

Jika memilih satu istilah, pasangannya harus **se-domain**:

| ✅ Konsisten | ❌ Campur-campur |
|---|---|
| `origin` ↔ `destination` | `origin` ↔ `end` |
| `start` ↔ `end` | `start` ↔ `destination` |
| `source` ↔ `target` | `source` ↔ `end` |

---

⬅️ [Implementasi Bertahap](02-implementasi-bertahap.md) · ⬆️ [Kembali ke README](../README.md)
