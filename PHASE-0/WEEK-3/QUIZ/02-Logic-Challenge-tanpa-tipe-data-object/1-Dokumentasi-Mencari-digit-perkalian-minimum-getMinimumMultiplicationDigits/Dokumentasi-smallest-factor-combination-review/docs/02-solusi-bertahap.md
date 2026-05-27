# 🛠️ Fase 2: Solusi Pertama (Pendekatan Bertahap)

### ✨ _Membangun kode selangkah demi selangkah — dari loop kosong hingga solusi yang berjalan sempurna_

> 🎯 **Tujuan:** Menerjemahkan logika pencarian faktor dari Fase 1 menjadi kode JavaScript yang **bekerja**, dibangun secara bertahap agar setiap baris dipahami sepenuhnya.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + pemetaan setiap variabel |
| 🔨 | [Step 1 — Loop Pencari Faktor](#step-1) | Membuat mesin pencari faktor dengan modulo |
| 🔗 | [Step 2 — Gabung & Hitung Digit](#step-2) | Menggabungkan pasangan faktor jadi string |
| 🏆 | [Step 3 — Cari Nilai Minimum](#step-3) | Melacak digit terpendek sepanjang loop |
| ✅ | [Kode Final & Walkthrough](#kode-final) | Kode lengkap + trace eksekusi per iterasi |
| 🎯 | [Kesimpulan & Key Takeaways](#kesimpulan) | Rangkuman pelajaran dari fase ini |

---

<a name="blueprint"></a>
## 🗺️ Blueprint & Kamus Variabel

Sebelum menulis kode, kita siapkan **peta** dulu — seperti arsitek yang menggambar denah sebelum membangun rumah.

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|----------------|-------------------|--------|
| Angka target (parameter) | `angka` | `a`, `x`, `num` | Jelas bahwa ini angka yang dicari faktornya |
| Penghitung loop (pembagi) | `i` → nanti jadi `divisor` | `x`, `j` | `i` boleh untuk loop sederhana, tapi `divisor` lebih deskriptif |
| Gabungan teks faktor | `factors` | `str`, `s` | Menjelaskan bahwa ini adalah gabungan string faktor |
| Penampung digit minimum | `minDigit` | `res`, `result` | Kita menyimpan jumlah digit, bukan "hasil" generik |

### 🏗️ Kerangka Kode (Blueprint)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Loop → Cek Faktor → Gabung → Bandingkan)

const digitPerkalianMinimum = (angka) => {
  let minDigit = ???;                        // [CATATAN REKOR] → penampung minimum

  for (let i = 1; ???; i++) {                // [LOOP UTAMA] → coba pembagi 1, 2, 3...
    if (angka % i === 0) {                   //   [CEK FAKTOR] → apakah habis dibagi?
      const factors = ???;                   //   [GABUNG] → satukan jadi string
      if (factors.length < minDigit) {       //   [BANDINGKAN] → lebih pendek dari rekor?
        minDigit = ???;                      //   [UPDATE REKOR] → catat rekor baru!
      }
    }
  }

  return minDigit;                           // [HASIL] → kembalikan rekor terkecil
};
```

> [!NOTE]
> 💡 Tanda `???` adalah bagian yang akan kita isi **selangkah demi selangkah** di bawah ini. Setiap step mengisi satu bagian puzzle.

---

<a name="step-1"></a>
## 🔨 Step 1 — Loop Pencari Faktor

**Target:** Membuat komputer mengecek angka dari 1 ke atas dan menemukan mana yang menjadi faktor.

### 1️⃣ Menulis Loop + Kondisi Modulo

```javascript
const digitPerkalianMinimum = (angka) => {
  for (let i = 1; i < angka; i++) {
    // Mengecek apakah 'i' membagi habis 'angka' (sisa = 0)
    if (angka % i === 0) {
      console.log(i, angka / i);
    }
  }
};
```

**Apa yang terjadi?** Loop berjalan dari `1` sampai `angka - 1`, dan setiap kali `angka % i === 0`, berarti `i` adalah faktor — cetak pasangannya.

> [!CAUTION]
> 🔴 **JEBAKAN KRITIS: Batas Loop `i < angka`**
>
> Batas `i < angka` akan **gagal total** jika input bernilai `1`!
>
> ```
> ❌ for (let i = 1; i < 1; i++)    →  kondisi FALSE sejak awal → loop TIDAK PERNAH jalan
> ✅ for (let i = 1; i <= 1; i++)   →  kondisi TRUE → loop jalan 1x → menemukan faktor (1, 1)
> ```
>
> **Solusi:** Ganti `i < angka` menjadi `i <= angka` agar nilai batas juga ikut diperiksa.

---

<a name="step-2"></a>
## 🔗 Step 2 — Gabung Pasangan & Hitung Digit

**Target:** Setelah menemukan pasangan faktor, gabungkan jadi satu teks lalu hitung panjangnya.

### 2️⃣ Menggunakan Template Literals

```javascript
// Contoh: jika i = 3 dan (angka / i) = 8
const factors = `${i}${angka / i}`;
// Hasilnya: factors = "38"
```

> [!TIP]
> 💡 **Kenapa Template Literals?**
>
> | Cara | Kode | Hasil |
> |------|------|-------|
> | ❌ Aritmatika | `3 + 8` | `11` (dijumlahkan, bukan digabung!) |
> | ❌ String biasa | `"" + 3 + 8` | `"38"` (bekerja, tapi kurang rapi) |
> | ✅ Template Literal | `` `${3}${8}` `` | `"38"` (modern, bersih, mudah dibaca) |

Setelah digabung jadi string, menghitung digitnya tinggal pakai `.length`:

```javascript
factors.length  // "38".length → 2 digit
```

---

<a name="step-3"></a>
## 🏆 Step 3 — Melacak Nilai Minimum

**Target:** Komputer harus "mengingat" digit terpendek yang pernah ditemukan sepanjang loop.

### 3️⃣ Analogi "Catatan Rekor"

> [!TIP]
> 💡 **Analogi Mudah Dipahami**
>
> | | Dunia Nyata | Dalam Kode |
> |---|---|---|
> | 📋 Catatan | Kertas kosong untuk catat rekor | Variabel `minDigit` |
> | 🏁 Nilai awal | Rekor diset **999 jam** (super lama) | `minDigit = Infinity` |
> | 🏃 Peserta pertama | Waktu 1 jam → **langsung jadi rekor!** | `factors.length < Infinity` → update! |
> | 🏃 Peserta kedua | Waktu 2 jam → tidak pecah rekor | `factors.length < 1` → false, skip |
>
> **Kenapa `Infinity`?** Karena kita cari yang **paling kecil**, jadi rekor awal harus diset **setinggi-tingginya** agar siapapun pasti mengalahkannya.

```javascript
let minDigit = Infinity;  // Rekor awal: tak terhingga

// Di dalam loop, setelah menemukan faktor:
if (factors.length < minDigit) {
  minDigit = factors.length;  // Catat rekor baru!
}
```

> [!WARNING]
> 🐛 **Gotcha: Jangan taruh `let minDigit` DI DALAM loop!**
>
> ```javascript
> // ❌ SALAH — minDigit ke-reset jadi Infinity setiap putaran!
> for (let i = 1; i <= angka; i++) {
>   let minDigit = Infinity;  // RESET terus!
>   ...
> }
>
> // ✅ BENAR — minDigit bertahan di luar loop
> let minDigit = Infinity;
> for (let i = 1; i <= angka; i++) {
>   ...
> }
> ```

---

<a name="kode-final"></a>
## ✅ Kode Final & Walkthrough

Gabungkan semua step menjadi solusi lengkap:

```javascript
const digitPerkalianMinimum = (angka) => {
  // [CATATAN REKOR] Diisi dengan rekor setinggi-tingginya di awal
  let minDigit = Infinity;

  // [LOOP UTAMA] Berjalan dari 1 hingga angka target (pakai <=, bukan <)
  for (let i = 1; i <= angka; i++) {

    // [CEK FAKTOR] Jika i membagi habis angka
    if (angka % i === 0) {

      // [GABUNG] Satukan pasangan faktor jadi string
      const factors = `${i}${angka / i}`;

      // [BANDINGKAN] Jika digit saat ini lebih sedikit dari rekor...
      if (factors.length < minDigit) {
        // [UPDATE REKOR] ...catat sebagai rekor minimum yang baru!
        minDigit = factors.length;
      }
    }
  }

  // [HASIL] Kembalikan rekor digit paling sedikit
  return minDigit;
};
```

### 🔄 Trace Eksekusi (Input: 20)

Berikut simulasi **step-by-step** bagaimana komputer mengeksekusi kode di atas:

| Putaran (`i`) | `20 % i === 0`? | Pasangan | `factors` | `.length` | `< minDigit`? | `minDigit` Baru |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | ✅ `20 % 1 = 0` | `1, 20` | `"120"` | 3 | `3 < Infinity` ✅ | **3** |
| 2 | ✅ `20 % 2 = 0` | `2, 10` | `"210"` | 3 | `3 < 3` ❌ | 3 |
| 3 | ❌ `20 % 3 = 2` | — | — | — | — | 3 |
| 4 | ✅ `20 % 4 = 0` | `4, 5` | `"45"` | 2 | `2 < 3` ✅ | **2** ⭐ |
| 5 | ✅ `20 % 5 = 0` | `5, 4` | `"54"` | 2 | `2 < 2` ❌ | 2 |
| ... | _(sisa loop tidak menemukan digit < 2)_ | | | | | 2 |

> [!IMPORTANT]
> 🏆 **Return value:** `minDigit = 2` ← Benar! Digit minimum untuk angka 20 adalah **2**.

---

<a name="kesimpulan"></a>
## 🎯 Kesimpulan & Key Takeaways

```
✅ ANALOGI MINIMUM    →  Gunakan variabel bantuan (minDigit = Infinity) di LUAR loop
                         Jika ditaruh di dalam loop, nilainya ke-reset terus!

✅ KEKUATAN STRING    →  Konversi angka ke String sangat ampuh untuk menghitung digit
                         Properti .length menyelesaikan tugas dalam 1 perintah

✅ EDGE CASE KRUSIAL  →  Saat membuat batas loop, pastikan batas atas/bawah tidak
                         mematikan logic pada kondisi nilai paling ekstrim (input = 1)

✅ STEP-BY-STEP       →  Bangun kode selangkah demi selangkah (loop → gabung → minimum)
                         Jangan langsung tulis kode lengkap — pecah jadi bagian kecil
```

> [!NOTE]
> 💡 **Prinsip Fase 2:** Solusi pertama **tidak harus sempurna** — yang penting **bekerja dan dipahami**. Optimasi dan perbaikan adalah tugas fase berikutnya.

---

| ⬅️ Sebelumnya | 📋 Daftar Isi | Selanjutnya ➡️ |
|:-:|:-:|:-:|
| [01 — Analisis Logika](./01-analisis-logika.md) | [README](../README.md) | [03 — Evolusi & Clean Code](./03-evolusi-dan-clean-code.md) |
