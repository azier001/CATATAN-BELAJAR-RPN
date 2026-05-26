# 🔍 Mencari Modus — Dokumentasi Challenge

### ✨ _Menemukan angka yang paling sering muncul dalam sebuah array, dengan pendekatan bertahap dari Nested Loop hingga Object_

> 🎯 **Tujuan:** Memahami cara kerja algoritma pencarian modus secara mendalam — mulai dari analisis pola, penulisan kode bertahap, hingga evolusi solusi yang optimal dan production-ready.

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Deskripsi Soal](#deskripsi-soal) | Aturan main dan test cases |
| 🔬 | [Visualisasi & Analisis](#visualisasi) | Tabel frekuensi dan edge cases |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode kosong + tabel peran variabel |
| 🧠 | [Algoritma Tahan Lupa](#algoritma) | Langkah-langkah dengan penjelasan "Kenapa" |
| 🔗 | [Part 2 →](./Dokumentasi-mode-solutions-evolution-and-clean-code_evolusi-solusi-dan-kode-bersih-modus.md) | Pendekatan Bertahap, Evolusi Solusi, Naming, & Gotchas |

---

<a name="deskripsi-soal"></a>
## 📖 Deskripsi Soal

Diberikan sebuah function `cariModus(arr)` yang menerima array angka. Function me-return **modus** (angka yang paling sering muncul).

**Aturan Khusus:**
- Jika ada lebih dari satu modus → pilih yang **paling pertama muncul** (dari kiri ke kanan)
- Jika modus tidak ditemukan → return `-1`
- Jika semua angka sama → return `-1`

```javascript
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
```

---

<a name="visualisasi"></a>
## 🔬 Pilar 1 — Visualisasi & Analisis Pola

### Simulasi Manual: Tabel Frekuensi

Contoh array `[5, 10, 10, 6, 5]` — kita hitung kemunculan setiap angka:

| Angka | Frekuensi | Posisi Pertama di Array |
|:-----:|:---------:|:-----------------------:|
| 5     | 2         | index 0 ← paling kiri  |
| 10    | 2         | index 1                 |
| 6     | 1         | index 3                 |

> [!IMPORTANT]
> 🔔 **Aturan Kunci:** Karena `5` dan `10` sama-sama muncul 2 kali, pemenangnya adalah `5` karena posisinya **paling kiri** (index 0). Ini berarti kita hanya mengganti pemenang jika frekuensi **LEBIH BESAR** (`>`), bukan lebih besar sama dengan (`>=`).

### Identifikasi Edge Cases (Kondisi Return `-1`)

| Kondisi | Contoh Array | `maxFreq` | Logika Pengecekan |
|---------|:------------:|:---------:|-------------------|
| Semua angka berbeda | `[10, 3, 1, 2, 5]` | `1` | `maxFreq === 1` |
| Semua angka sama | `[7, 7, 7, 7, 7]` | `5` (= `arr.length`) | `maxFreq === arr.length` |

> [!TIP]
> 💡 **Insight:** Kita tidak perlu mengecek isi array satu per satu untuk mendeteksi edge cases! Cukup memanfaatkan nilai akhir `maxFreq` yang dibandingkan dengan `1` dan `arr.length`.

---

<a name="blueprint"></a>
## 🗺️ Pilar 3 — Blueprint & Kamus Variabel

### A. Kamus Variabel (Versi Nested Loop)

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|----------------|-------------------|--------|
| Penampung Pemenang | `modus` | `res`, `hasil`, `m` | Sesuai konteks soal (mencari modus) |
| Rekor Frekuensi Tertinggi | `maxFreq` | `max`, `tertinggi` | Gabungan *Maximum* + *Frequency* |
| Frekuensi Sementara (per angka) | `freq` | `c`, `count`, `j` | Singkatan *frequency* yang jelas |

### B. Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Dua Jari — Nested Loop)

function cariModus(arr) {
  let modus;                                 // [PENCATAT PEMENANG]
  let maxFreq = 0;                           // [PENCATAT REKOR]

  for (let i = 0; i < arr.length; i++) {     // [JARI TELUNJUK] → tunjuk angka ke-i
    let freq = 0;                            //   [PENGHITUNG] → reset setiap ganti angka

    for (let j = 0; j < arr.length; j++) {   //   [JARI TENGAH] → susuri seluruh array
      // Bandingkan: apakah angka j sama dengan angka i?
    }

    // Bandingkan: apakah freq > maxFreq? Jika ya, update rekor
  }

  // Cek edge cases → return -1 atau return modus
}
```

> [!NOTE]
> 💡 **Mental Model "Dua Jari":** Jari telunjuk (loop `i`) menunjuk satu angka, lalu jari tengah (loop `j`) berlari menyusuri seluruh array untuk menghitung berapa kali angka tersebut muncul. Setelah selesai, jari telunjuk pindah ke angka berikutnya.

---

<a name="algoritma"></a>
## 🧠 Pilar 2 — Algoritma Tahan Lupa

### Langkah-Langkah Algoritmanya:

1. **Menyiapkan Pencatat `[VARIABEL AWAL]`**
   - `modus` → Belum diisi (undefined). *(Kenapa: Kita belum tahu siapa pemenangnya.)*
   - `maxFreq = 0` → Rekor dimulai dari nol. *(Kenapa: Agar angka pertama yang dihitung pasti akan langsung menjadi rekor awal.)*

2. **Menghitung Frekuensi Setiap Angka `[NESTED LOOP]`** (Iterasi `i` dari 0 sampai `arr.length - 1`):
   - **Reset Penghitung `[VARIABEL SEMENTARA]`**: Set `freq = 0` setiap ganti angka. *(Kenapa: Setiap angka harus dihitung dari nol lagi, tidak boleh tercampur dengan hitungan angka sebelumnya.)*
   - **Susuri Seluruh Array `[LOOP DALAM]`**: Jika `arr[j] === arr[i]`, maka `freq++`. *(Contoh: Saat `i=0` menunjuk angka `5` pada `[5, 10, 10, 6, 5]`, jari tengah menemukan `5` di index 0 dan index 4 → `freq = 2`.)*

3. **Mencatat Rekor Pemenang `[IF BLOCK]`**: Jika `freq > maxFreq`:
   - Update `maxFreq = freq` *(catat rekor baru)*
   - Update `modus = arr[i]` *(catat siapa pemilik rekor)*
   - *(Kenapa `>` bukan `>=`? Agar jika ada frekuensi yang sama, pemenang pertama tidak tergantikan — sesuai aturan "pilih yang paling kiri".)*

4. **Cek Edge Cases `[RETURN]`**:
   - Jika `maxFreq === 1` → semua angka unik → `return -1`
   - Jika `maxFreq === arr.length` → semua angka sama → `return -1`
   - Selain itu → `return modus`

---

> 📝 **Lanjut ke [Part 2](./Dokumentasi-mode-solutions-evolution-and-clean-code_evolusi-solusi-dan-kode-bersih-modus.md)** untuk melihat pendekatan bertahap (step-by-step coding), evolusi solusi (3 versi), gotchas, dan naming convention.
