# 💻 Pendekatan Solusi: kaliTerusRekursif

### ✨ _4 versi solusi dari pemula hingga advanced — masing-masing dengan penjelasan "Kenapa"_

> 🎯 **Tujuan:** Menyajikan evolusi kode dari pendekatan paling dasar (for-loop) hingga pendekatan matematika murni (modulo), lengkap dengan algoritma step-by-step dan contoh angka konkret.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🟢 | [Versi 1: For-Loop](#versi-1) | Pendekatan paling ramah pemula |
| 🔵 | [Versi 2: Reduce](#versi-2) | Ringkas & fungsional (ES6) |
| 🟣 | [Versi 3: Pure Math](#versi-3) | Tanpa string, performa terbaik |
| 🟠 | [Versi 4: Helper Function](#versi-4) | Rekursi murni tanpa loop |
| ⚖️ | [Tabel Perbandingan](#perbandingan) | Head-to-head semua versi |

---

<a name="versi-1"></a>
## 🟢 Versi 1: For-Loop

### 📖 Algoritma Step-by-Step

**1. Gerbang Keluar `[BASE CASE]`** — Cek apakah `num` sudah 1 digit:
- Jika `num < 10`, langsung kembalikan. *(Kenapa: Angka 1 digit tidak perlu dikalikan lagi. Contoh: `num = 8` → langsung return `8`).*

**2. Konversi ke String `[PECAH DIGIT]`** — Ubah angka jadi string:
- `String(num)` menghasilkan string yang bisa di-loop per karakter. *(Kenapa: JavaScript tidak bisa langsung mengakses digit ke-N dari sebuah integer. Contoh: `String(66)` → `"66"`).*

**3. Perkalian Akumulatif `[FOR...OF LOOP]`** — Loop setiap digit dan kalikan:
- Inisialisasi `product = 1` (bukan 0!). *(Kenapa: Jika dimulai dari 0, hasilnya selalu 0 karena `0 × apapun = 0`. Contoh: `1 × 6 × 6 = 36`).*

**4. Lempar Kembali `[REKURSI]`** — Panggil fungsi dengan hasil baru:
- `return kaliTerusRekursif(product)`. *(Kenapa: Hasil `36` masih 2 digit, harus diproses ulang sampai tersisa 1 digit).*

### 💻 Kode Final

```javascript
const kaliTerusRekursif = (num) => {
  if (num < 10) return num;

  const numStr = String(num);
  let product = 1;

  for (const digit of numStr) {
    product *= digit;
  }

  return kaliTerusRekursif(product);
};
```

> [!NOTE]
> 💡 **Type Coercion:** Meskipun `digit` bertipe `string` (dari `numStr`), JavaScript otomatis mengonversinya ke `number` saat bertemu operator `*=`. Jadi `"6" * "6"` tetap menghasilkan `36`.

---

<a name="versi-2"></a>
## 🔵 Versi 2: Reduce (ES6)

### 📖 Algoritma Step-by-Step

**1. Gerbang Keluar `[BASE CASE]`** — Sama seperti Versi 1.

**2. Spread + Reduce `[SATU BARIS]`** — Gabungkan pemecahan dan perkalian:
- `[...String(num)]` → spread string menjadi array per karakter. *(Kenapa: `.reduce()` hanya bisa dipanggil pada Array, bukan String. Contoh: `[...String(66)]` → `['6', '6']`).*
- `.reduce((product, digit) => product * digit, 1)` → akumulasi perkalian. *(Kenapa: `reduce` menggantikan seluruh for-loop hanya dengan 1 baris. Nilai awal `1` = sama seperti `let product = 1`).*

**3. Lempar Kembali `[REKURSI]`** — Langsung di-return tanpa variabel perantara.

### 💻 Kode Final

```javascript
const kaliTerusRekursif = (num) => {
  if (num < 10) return num;

  return kaliTerusRekursif(
    [...String(num)].reduce((product, digit) => product * digit, 1)
  );
};
```

> [!TIP]
> 💡 **Kenapa `product` dan `digit`, bukan `acc` dan `curr`?**
> Konvensi `acc`/`curr` memang umum di `.reduce()`, tapi menggunakan nama deskriptif seperti `product` dan `digit` langsung menjelaskan *apa* yang sedang diakumulasi tanpa perlu membaca konteks lebih lanjut.

---

<a name="versi-3"></a>
## 🟣 Versi 3: Pure Math (Modulo)

### 📖 Algoritma Step-by-Step

**1. Gerbang Keluar `[BASE CASE]`** — Sama seperti versi lainnya.

**2. Salin Parameter `[IMMUTABILITY]`** — `let currentNum = num`:
- *(Kenapa: Kita akan memodifikasi nilainya di dalam loop. Mengubah parameter langsung dianggap bad practice karena bisa membingungkan saat debugging).*

**3. Pemotongan Digit dari Belakang `[WHILE LOOP]`** — Selama `currentNum > 0`:
- **Ambil digit terakhir:** `currentNum % 10`. *(Kenapa: Modulo 10 selalu menghasilkan sisa bagi = digit paling belakang. Contoh: `654 % 10 = 4`).*
- **Kalikan ke penampung:** `product *= lastDigit`.
- **Buang digit terakhir:** `Math.floor(currentNum / 10)`. *(Kenapa: Pembagian 10 + pembulatan ke bawah = memotong digit terakhir. Contoh: `Math.floor(654 / 10) = 65`).*

**4. Lempar Kembali `[REKURSI]`** — `return kaliTerusRekursif(product)`.

### 💻 Kode Final

```javascript
const kaliTerusRekursif = (num) => {
  if (num < 10) return num;

  let product = 1;
  let currentNum = num;

  while (currentNum > 0) {
    let lastDigit = currentNum % 10;
    product *= lastDigit;
    currentNum = Math.floor(currentNum / 10);
  }

  return kaliTerusRekursif(product);
};
```

> [!IMPORTANT]
> 🔔 **Kapan Pakai Versi Ini?**
> Teknik `% 10` dan `/ 10` adalah **fondasi algoritma klasik** yang sering muncul di *technical interview* perusahaan besar. Jika soal melarang penggunaan built-in method (`String`, `Array`, `split`, dll.), ini adalah satu-satunya cara!

---

<a name="versi-4"></a>
## 🟠 Versi 4: Helper Function (Full Recursion)

### 📖 Algoritma Step-by-Step

**1. Gerbang Keluar `[BASE CASE UTAMA]`** — Sama seperti versi lainnya.

**2. Helper: Kalikan Digit Satu Putaran `[INNER FUNCTION]`**:
- Fungsi `kalikanDigit(num)` bertugas **hanya mengalikan digit sekali jalan** menggunakan rekursi + modulo. *(Kenapa: Kita memisahkan "tugas perkalian" dari "tugas penyusutan" agar tidak terjadi bug double recursion — lihat `docs/02-gotcha-dan-insight.md`).*
- Base case helper: `if (num === 0) return 1`. *(Kenapa: Saat `num` sudah habis dipotong sampai 0, kembalikan `1` sebagai identitas perkalian agar tidak merusak hasil).*

**3. Eksekusi & Lempar `[REKURSI UTAMA]`** — Panggil helper, lalu rekursi.

### 💻 Kode Final

```javascript
function kaliTerusRekursif(num) {
  if (num < 10) return num;

  const kalikanDigit = (n) => {
    if (n === 0) return 1;
    return (n % 10) * kalikanDigit(Math.floor(n / 10));
  };

  const product = kalikanDigit(num);

  return kaliTerusRekursif(product);
}
```

> [!CAUTION]
> 🔴 **Jebakan Fatal:** Jangan pernah mengganti `kalikanDigit()` dengan `kaliTerusRekursif()` di dalam perhitungan! Fungsi utama akan menyusutkan angka sampai 1 digit *sebelum* dikalikan — menghasilkan jawaban yang salah. Penjelasan lengkap ada di `docs/02-gotcha-dan-insight.md`.

---

<a name="perbandingan"></a>
## ⚖️ Tabel Perbandingan Semua Versi

| Aspek | 🟢 V1 For-Loop | 🔵 V2 Reduce | 🟣 V3 Modulo | 🟠 V4 Helper |
|:---|:---:|:---:|:---:|:---:|
| **Baris Kode** | 8 baris | 4 baris | 9 baris | 9 baris |
| **Readability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Performa** | 🟡 Sedang | 🟡 Sedang | 🟢 Terbaik | 🟢 Baik |
| **Pakai String?** | ✅ Ya | ✅ Ya | ❌ Tidak | ❌ Tidak |
| **Pakai Loop?** | ✅ `for...of` | ❌ Tidak | ✅ `while` | ❌ Tidak |
| **100% Rekursif?** | ❌ Hybrid | ❌ Hybrid | ❌ Hybrid | ✅ Murni |
| **Cocok Untuk** | Belajar | Production | Interview | Latihan Rekursi |

> [!TIP]
> 🏆 **Rekomendasi:**
> - **Pemula / belajar rekursi?** → Mulai dari **Versi 1** (For-Loop)
> - **Kode production yang ringkas?** → Gunakan **Versi 2** (Reduce)
> - **Technical interview?** → Kuasai **Versi 3** (Pure Math)
> - **Deep dive rekursi murni?** → Eksplorasi **Versi 4** (Helper Function)

---

> 📝 **Navigasi:** [← Kembali ke README](../README.md) · [Gotcha & Insight →](./02-gotcha-dan-insight.md)
