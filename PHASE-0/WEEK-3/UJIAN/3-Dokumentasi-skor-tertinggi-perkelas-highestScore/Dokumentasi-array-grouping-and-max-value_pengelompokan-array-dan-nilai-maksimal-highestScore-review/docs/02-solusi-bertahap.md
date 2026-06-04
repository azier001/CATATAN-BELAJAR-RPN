# 🔨 Solusi Bertahap

### ✨ _Dari loop kosong hingga kode yang lolos semua test case — satu langkah demi satu langkah_

> 🎯 **Tujuan:** Membangun solusi secara bertahap (step-by-step), memahami setiap keputusan kode, dan belajar dari proses debugging bug nyata.

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧪 | [Step 1: Loop Dasar](#step-1) | Inisialisasi object + looping untuk akses data |
| ✍️ | [Step 2: Tulis Tanpa Filter](#step-2) | Memasukkan data langsung — dan masalahnya |
| 🔒 | [Step 3: Aturan Pertama](#step-3) | Pengecekan kelas baru |
| 🐛 | [Step 4: Aturan Kedua + Bug](#step-4) | Mencari skor tertinggi — tapi ada bug! |
| ✅ | [Kode Final](#kode-final) | Solusi pertama yang lolos semua test case |

---

<a name="step-1"></a>
## 🧪 Step 1 — Loop Dasar & Akses Data

**Tujuan:** Pastikan kita bisa mengakses data `className` dari setiap murid.

```javascript
const highestScore = (students) => {
  const result = {};

  for (const { name, score, class: className } of students) {
    console.log(className); // Cek: apakah data bisa diakses?
  }

  return result;
};
```

> [!NOTE]
> Di step ini kita belum menulis logika apa pun. Fokusnya hanya memastikan **destructuring** dan **loop** bekerja dengan benar. Ini adalah kebiasaan baik: *validasi fondasi sebelum membangun logika*.

---

<a name="step-2"></a>
## ✍️ Step 2 — Tulis ke Object (Tanpa Filter)

**Tujuan:** Coba masukkan data langsung ke `result[className]`.

```javascript
for (const { name, score, class: className } of students) {
  result[className] = { name, score };
}
```

> [!WARNING]
> **Masalah:** Tanpa pengecekan, data murid sebelumnya langsung **tertimpa** oleh murid berikutnya di kelas yang sama. Contoh: Dimitri (90) akan ditimpa oleh Sergei (74) — kita kehilangan juara yang sebenarnya!

**Kesimpulan:** Kita butuh **kondisi pengecekan** sebelum menulis data.

---

<a name="step-3"></a>
## 🔒 Step 3 — Implementasi Aturan Pertama

**Tujuan:** Hanya catat murid jika kelasnya **belum ada** di rekapan.

```javascript
for (const { name, score, class: className } of students) {
  if (!result[className]) {
    result[className] = { name, score };
  }
}
```

**Apa yang berubah:** Sekarang murid pertama dari setiap kelas tercatat, dan murid berikutnya tidak menimpa. Tapi masih ada masalah — bagaimana jika murid kedua punya **skor lebih tinggi**? Kode ini belum bisa menangani itu.

---

<a name="step-4"></a>
## 🐛 Step 4 — Implementasi Aturan Kedua (+ Munculnya Bug!)

**Tujuan:** Tambahkan `else if` untuk menimpa data jika skor murid baru lebih besar.

```javascript
for (const { name, score, class: className } of students) {
  if (!result[className]) {
    result[className] = { name, score };
  } else if (score > result[score]) {  // ← 🐛 BUG di sini!
    result[className] = { name, score };
  }
}
```

### 🔎 Analisis Bug

Perhatikan bagian pembanding: **`result[score]`**

| Aspek | Penjelasan |
|-------|-----------|
| **Apa yang terjadi** | `score` bernilai angka (misal `85`), sehingga `result[85]` diakses |
| **Hasilnya** | `undefined` — karena key `85` tidak pernah ada di object `result` |
| **Dampak** | Perbandingan `score > undefined` selalu `false` → murid baru **tidak pernah** menggantikan juara sementara |
| **Perbaikan** | Ganti menjadi `result[className].score` — akses skor juara sementara berdasarkan **nama kelas**, bukan angka skor |

> [!CAUTION]
> **Gotcha:** Kesalahan `result[score]` vs `result[className].score` adalah jenis bug yang **tidak menyebabkan error** (tidak crash), tapi menghasilkan **output salah secara diam-diam**. Bug seperti ini paling berbahaya karena sulit terdeteksi tanpa test case yang tepat.

---

<a name="kode-final"></a>
## ✅ Kode Final — Solusi Pertama yang Berhasil

Setelah memperbaiki bug pembacaan skor, inilah solusi pertama yang lolos semua test case:

```javascript
const highestScore = (students) => {
  const result = {};

  for (const { name, score, class: className } of students) {
    if (!result[className]) {
      result[className] = { name, score };
    } else if (score > result[className].score) {
      result[className] = { name, score };
    }
  }

  return result;
};
```

> [!TIP]
> Perhatikan bahwa isi eksekusi di `if` dan `else if` **sama persis**: `result[className] = { name, score }`. Ini adalah sinyal kuat bahwa kode ini bisa di-*refactor* menjadi lebih ringkas. Lihat prosesnya di file berikutnya!

---

⬅️ [Visualisasi & Analisis](01-visualisasi-dan-analisis.md) · ⬆️ [README](../README.md) · ➡️ [Evolusi & Clean Code](03-evolusi-dan-clean-code.md)
