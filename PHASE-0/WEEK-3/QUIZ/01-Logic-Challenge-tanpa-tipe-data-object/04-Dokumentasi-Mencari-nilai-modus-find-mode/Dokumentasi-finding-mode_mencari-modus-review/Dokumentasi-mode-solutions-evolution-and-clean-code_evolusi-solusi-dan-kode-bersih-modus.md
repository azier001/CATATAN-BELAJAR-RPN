# 🔍 Mencari Modus — Part 2: Solusi & Evolusi

### ✨ _Dari kerangka kosong → solusi bertahap → 3 versi evolusi → production-ready code_

> 🔗 **Lanjutan dari [Part 1](./Dokumentasi-finding-mode-concept-and-algorithm_konsep-dan-algoritma-mencari-modus.md)** (Visualisasi, Blueprint, dan Algoritma)

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧱 | [Pendekatan Bertahap](#bertahap) | Merakit kode dari nol secara step-by-step |
| ⚠️ | [Gotchas & Jebakan](#gotchas) | `Math.max()` dan `for...in` yang menipu |
| 🔄 | [Evolusi Solusi (3 Versi)](#evolusi) | Nested Loop → Object → Best Practice |
| 🏷️ | [Naming Convention](#naming) | Tabel perbandingan ❌ vs ✅ |

---

<a name="bertahap"></a>
## 🧱 Pilar 4 — Pendekatan Bertahap (Step-by-Step)

### Step 1: Kerangka Penghitung (Nested Loop Saja)

Fokus awal: membuat loop bersarang yang bisa menghitung frekuensi setiap angka. Belum memikirkan pemenang.

```javascript
const cariModus = (arr) => {
  let modus;
  let maxFreq = 0;

  for (let i = 0; i < arr.length; i++) {
    let freq = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) freq++;
    }

    console.log(freq); // Tes dulu: apakah hitungannya benar?
  }
};
```

### Step 2: Menambahkan Pencatatan Rekor

Ganti `console.log(freq)` dengan blok `if` yang mencatat pemenang **dan** rekornya sekaligus.

```javascript
    if (freq > maxFreq) {
      maxFreq = freq;  // Catat rekor baru
      modus = arr[i];  // Catat siapa pemilik rekor
    }
```

> [!WARNING]
> ⚠️ **Gotcha #1 — `Math.max()` vs Blok `if`**
> Awalnya sempat dicoba menggunakan `maxFreq = Math.max(maxFreq, freq)`. Ini memang elegan, tapi kita **kehilangan momentum untuk mencatat siapa pemilik rekornya** (`modus`). Karena ada **2 variabel** yang harus di-update bersamaan, kita wajib menggunakan blok `if` konvensional.

### Step 3: Menambahkan Edge Cases & Return

```javascript
  if (maxFreq === 1 || maxFreq === arr.length) return -1;
  return modus;
```

### 💻 Kode Final — Versi 1 (Nested Loop)

```javascript
function cariModus(arr) {
  let modus;
  let maxFreq = 0;

  for (let i = 0; i < arr.length; i++) {
    let freq = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) freq++;
    }

    if (freq > maxFreq) {
      maxFreq = freq;
      modus = arr[i];
    }
  }

  if (maxFreq === 1 || maxFreq === arr.length) return -1;

  return modus;
}
```

---

<a name="gotchas"></a>
## ⚠️ Pilar 7 — Gotchas & Jebakan Logika

### Gotcha #1: `Math.max()` Kehilangan Konteks Pemenang

```javascript
// ❌ Hanya update rekor, LUPA catat siapa pemiliknya
maxFreq = Math.max(maxFreq, freq);

// ✅ Update rekor DAN catat pemiliknya sekaligus
if (freq > maxFreq) {
  maxFreq = freq;
  modus = arr[i];
}
```

> 📌 **Pelajaran:** `Math.max()` cocok jika kita hanya butuh **nilai tertinggi**. Tapi jika kita juga perlu tahu **"siapa" pemilik nilai tersebut**, gunakan blok `if` agar bisa menjalankan 2 aksi bersamaan.

### Gotcha #2: `for...in` pada Object Mengacaukan Urutan

Saat mencoba kode mandiri, sempat digunakan `for...in` untuk me-loop Object frekuensi:

```javascript
// ❌ BAHAYA: for...in mengurutkan numeric keys dari kecil ke besar
for (const key in grouped) {
  if (grouped[key] > maxCount) {
    maxCount = grouped[key];
    resultNumber = Number(key); // Harus casting karena key = string
  }
}
```

> [!CAUTION]
> 🔴 **Kenapa ini berbahaya?**
> JavaScript mengurutkan *numeric keys* pada Object dari kecil → besar, **BUKAN** berdasarkan urutan pemasukan!
>
> **Pembuktian:**
> - Array: `[10, 5, 5, 10, 6]` → `10` muncul duluan, jadi `10` seharusnya menang.
> - Object: `{'5': 2, '6': 1, '10': 2}` → JS mengurutkan key `'5'` lebih dulu!
> - `for...in` memproses `'5'` lebih dulu → pemenangnya jadi `5` → **SALAH!**
>
> Kode ini **kebetulan lolos** test case bawaan soal karena angka yang posisinya kiri kebetulan nilainya juga lebih kecil. Tapi **gagal** pada hidden test case.

**Solusi:** Selalu loop kembali **array aslinya** untuk menentukan pemenang:

```javascript
// ✅ AMAN: Loop array asli → urutan terjaga dari kiri ke kanan
for (const num of arr) {
  if (frekuensi[num] > maxFreq) {
    maxFreq = frekuensi[num];
    modus = num; // Tidak perlu casting Number()
  }
}
```

---

<a name="evolusi"></a>
## 🔄 Pilar 5 — Evolusi Solusi (3 Versi)

### Versi 2: Object + Loop Array (Refactored)

Menggabungkan ide `Set` (untuk *guard clause*) dengan Object dan loop array:

```javascript
function cariModus(arr) {
  if (new Set(arr).size <= 1) return -1;

  const frekuensi = {};
  for (const number of arr) {
    frekuensi[number] = (frekuensi[number] || 0) + 1;
  }

  let modus;
  let maxFreq = 0;

  for (const number of arr) {
    if (frekuensi[number] > maxFreq) {
      maxFreq = frekuensi[number];
      modus = number;
    }
  }

  if (maxFreq <= 1) return -1;
  return modus;
}
```

### Versi 3: Best Practice (English Naming, Production-Ready)

```javascript
function cariModus(numbers) {
  if (new Set(numbers).size <= 1) return -1;

  const frequencies = {};
  for (const num of numbers) {
    frequencies[num] = (frequencies[num] || 0) + 1;
  }

  let maxFrequency = 0;
  let mode = null;

  for (const num of numbers) {
    if (frequencies[num] > maxFrequency) {
      maxFrequency = frequencies[num];
      mode = num;
    }
  }

  if (maxFrequency <= 1) return -1;
  return mode;
}
```

### 📊 Tabel Perbandingan 3 Versi

| Aspek | V1: Nested Loop 🔵 | V2: Object Refactored 🟢 | V3: Best Practice 🟣 |
|-------|:---:|:---:|:---:|
| Kompleksitas | O(N²) | O(N) | O(N) |
| Jumlah Loop | 2 (bersarang) | 2 (berurutan) | 2 (berurutan) |
| Guard Clause (`Set`) | ❌ | ✅ | ✅ |
| Naming | Indonesia | Indonesia | English |
| Cocok Untuk | Belajar dasar | Refactoring | Produksi / Tim |

> [!TIP]
> 🏆 **Kapan pakai versi mana?**
> - **V1** → Saat belajar pertama kali dan belum paham Object. Bagus untuk membangun insting algoritma.
> - **V2** → Saat sudah paham Object dan butuh performa lebih baik.
> - **V3** → Standar industri. Gunakan ini di proyek tim atau *production code*.

---

<a name="naming"></a>
## 🏷️ Pilar 6 — Naming Convention

| Variabel (Peran) | ❌ Bad | ✅ Good | 🟣 Best Practice (EN) | Alasan |
|---|---|---|---|---|
| Parameter Input | `a`, `x` | `arr` | `numbers` | Jelas bahwa isinya kumpulan angka |
| Kamus Penyimpan | `f`, `obj` | `frekuensi` | `frequencies` | Deskriptif: menyimpan hitungan |
| Angka dlm Loop | `n`, `x` | `number` | `num` | Singkatan lumrah untuk angka |
| Pemenang Akhir | `res`, `m` | `modus` | `mode` | Istilah statistik yang tepat |
| Pencatat Rekor | `max` | `maxFreq` | `maxFrequency` | Gabungan *Maximum* + *Frequency* |
| Nilai dari Kamus | `t`, `jml` | `total` | `total` / `count` | Singkat tapi bermakna utuh |

> [!NOTE]
> 💡 **Prinsip:** Nama variabel satu huruf (`i`, `j`) hanya boleh dipakai untuk **counter loop standar**. Variabel lain yang menyimpan "makna bisnis" wajib menggunakan nama deskriptif.

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **26 Mei 2026** berdasarkan sesi mentoring langsung di **Google Antigravity** menggunakan JavaScript (Node.js). Sesi mencakup 4 fase mentoring (Analisis → Solusi Bertahap → Evolusi → Clean Code) ditambah review kode mandiri yang mengungkap gotcha `for...in`.
