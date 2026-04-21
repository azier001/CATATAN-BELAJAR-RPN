# 💡 Insight: Dynamic vs Fixed Grouping — Kapan Pakai Object vs Array

![Topic](https://img.shields.io/badge/Topic-Mental%20Model-blue?style=for-the-badge)
![Difficulty](https://img.shields.io/badge/Difficulty-Medium-orange?style=for-the-badge)

---

## 📚 Daftar Isi

- [Dua Senjata Grouping](#dua-senjata)
- [Kapan Menggunakan Dynamic Grouping (Object)](#dynamic-grouping)
- [Kapan Menggunakan Fixed Grouping (Array)](#fixed-grouping)
- [Kesimpulan Pilihan Pattern](#kesimpulan)

---

<a name="dua-senjata"></a>
## ⚔️ Dua Senjata Grouping

Dari sesi mentoring dan berbagai versi kode (*V1 sampai V4*), pelajaran paling berharga yang saya dapatkan adalah: **Grouping (Pengelompokan) memiliki dua "senjata" berbeda tergantung situasi**.

Sebagian besar tutorial dan dokumentasi dasar (termasuk catatan *basic-grouping* saya sebelumnya) sangat menekankan pendekatan **Object** untuk grouping. Namun, studi kasus `meleeRangedGrouping` membuktikan bahwa memaksakan Object pada setiap masalah grouping bisa menjadi "Jebakan Batman".

Mari kita lihat perbedaan fundamentalnya.

---

<a name="dynamic-grouping"></a>
## 📂 Kapan Menggunakan Dynamic Grouping (Object)

Pendekatan `grouped[key].push(value)` tergolong **Dynamic Grouping**.

**Ciri-ciri masalah yang cocok:**
1. **Kategori Bebas / Fleksibel:** Kita tidak tahu sebelumnya ada berapa banyak kategori dan apa saja namanya (misal: warna baju pelanggan).
2. **Posisi Tidak Penting:** Urutan output tidak dipermasalahkan oleh soal (kategori A boleh muncul duluan atau belakangan).
3. **Kategori Kosong Boleh Hilang:** Kalau tidak ada data untuk kategori B, tidak masalah kategori B tidak muncul sama sekali di hasil akhir.

**Contoh Kasus Ideal:**
*"Ada antrean pendaftar turnamen. Kelompokkan mereka berdasarkan warna baju."*

```javascript
// Input mentah yang dinamis
const antrean = "Razor-Merah,Axe-Hijau,Meepo-Merah,Invoker-Biru";

// Kita tidak tahu warna apa yang akan muncul! Pakai Object.
const grouped = {};
for (const orang of antrean.split(',')) {
    const [nama, warna] = orang.split('-');
    if (!grouped[warna]) grouped[warna] = [];
    grouped[warna].push(nama);
}

// Output: { Merah: ['Razor', 'Meepo'], Hijau: ['Axe'], Biru: ['Invoker'] }
// Sangat dinamis dan otomatis!
```

---

<a name="fixed-grouping"></a>
## 🗄️ Kapan Menggunakan Fixed Grouping (Array)

Pendekatan menyiapkan `result = [[], []]` atau variabel terpisah seperti `ranged` & `melee` tergolong **Fixed Grouping**.

**Ciri-ciri masalah yang cocok:**
1. **Kategori Sudah Pasti (Pre-defined):** Jumlah kategori sangat spesifik dan sedikit, dibatasi oleh soal (misal: HANYA Ranged dan Melee).
2. **Posisi Mutlak / Wajib:** Soal *memaksa* kategori tertentu harus berada di lokasi/index tertentu (misal: Ranged WAJIB Index 0).
3. **Kategori Kosong Wajib Ada:** Jika tidak ada data Ranged, Index 0 *tetap harus ada* sebagai array kosong `[]`.

**Contoh Kasus Asli `meleeRangedGrouping`:**
Soal memaksa Ranged di Index 0 dan Melee di Index 1.

```javascript
// Kita TAHU PASTI hanya ada 2 kelompok. Siapkan ruangannya (Array).
const ranged = []; // Pasti akan ditaruh di [0] nanti
const melee = [];  // Pasti akan ditaruh di [1] nanti

// ... loop dan push data ke variabel yang sesuai ...

// Posisinya fixed, kategori kosong tidak akan hilang.
return [ranged, melee]; 
```

---

<a name="kesimpulan"></a>
## 🎯 Kesimpulan Pilihan Pattern

Gunakan flowchart mental ini saat bertemu masalah *Grouping/Classification* di masa depan:

```mermaid
graph TD
    A[Mulai Masalah Grouping] --> B{Apakah kategori sudah<br>pasti dan terbatas?};
    B -- Ya (contoh: Lolos/Gagal) --> C{Apakah urutan output /<br>index sangat spesifik?};
    B -- Tidak (contoh: Banyak Warna) --> E[Gunakan DYNAMIC OBJECT<br>grouped = {}];
    C -- Ya --> F[Gunakan FIXED ARRAY<br>[[], []] / var terpisah];
    C -- Tidak --> E;
    F --> G(Aman dari kamar kosong hilang<br>& salah urutan);
    E --> H(Otomatis membuat<br>key baru yang relevan);
```

> **Pelorusan Konsep:**
> Pola Array `[[], []]` awalnya terkesan aneh jika dibandingkan pola *Basic Grouping* Object, tapi hal ini **bukan berarti pola Array lebih inferior**. Justru, memahami kapan menggunakan Array (Fixed) alih-alih memaksakan Object (Dynamic) menunjukkan kedewasaan pemahaman struktur data.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [← Part 6 — V4 Fixed Object Grouping](./06-v4-fixed-object-grouping_pengelompokan-object-tetap.md)**
- **📖 [Lanjut ke Part 8 — Kasus Pengujian (Test Cases) →](./08-test-cases_kasus-pengujian.md)**
