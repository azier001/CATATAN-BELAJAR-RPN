# 🔢 Faktor Persekutuan Terbesar (FPB) — Greatest Common Divisor (GCD)

### ✨ _Dari Brute Force hingga Euclidean: 4 Versi Solusi untuk Satu Masalah Klasik_

> 🎯 **Tujuan:** Memahami cara mencari FPB dari dua bilangan bulat menggunakan 4 pendekatan berbeda — mulai dari yang paling intuitif (Brute Force) hingga yang paling efisien (Euclidean Algorithm), lengkap dengan visualisasi, analisis pola, dan naming convention.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📝 | [Soal & Test Cases](#soal) | Deskripsi challenge dan expected output |
| 🔍 | [Analisis Pola](#analisis) | Tabel breakdown faktor & penemuan logika |
| 🗺️ | [Kamus Variabel & Blueprint](#blueprint) | Peta variabel + kerangka kode per versi |
| 🟢 | [Versi 1 — Brute Force Naik](#v1) | Pendekatan bertahap dari nol |
| 🔵 | [Versi 2 — Brute Force Turun](#v2) | Optimasi dengan loop mundur |
| 🏷️ | [Naming Convention](#naming) | Tabel penamaan variabel ❌ vs ✅ |
| ⚠️ | [Gotchas & Peringatan](#gotchas) | Jebakan umum yang sering terjadi |
| 🔗 | [Navigasi](#navigasi) | Link ke Part 2 (Euclidean) |

---

<a name="soal"></a>
## 📝 Soal & Test Cases

```javascript
// Cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
```

> [!NOTE]
> 💡 **Apa itu FPB?** Faktor Persekutuan Terbesar adalah **angka terbesar** yang bisa **membagi habis** kedua angka input. Dalam bahasa Inggris disebut **GCD** (*Greatest Common Divisor*).

---

<a name="analisis"></a>
## 🔍 Pilar 1 — Visualisasi & Analisis Pola

### 📊 Tabel Breakdown Faktor (Studi Kasus: 12 dan 16)

| Faktor dari `12` | Faktor dari `16` | Sama? |
|:-:|:-:|:-:|
| 1 | 1 | ✅ |
| 2 | 2 | ✅ |
| 3 | — | ❌ |
| **4** | **4** | ✅ **← Terbesar!** |
| 6 | — | ❌ |
| — | 8 | ❌ |
| 12 | 16 | ❌ |

**Faktor Persekutuan:** 1, 2, 4
**Yang Terbesar:** **4** ✅

### 💡 Logika Inti yang Ditemukan

Dari tabel di atas, kita menemukan **3 syarat** utama:

```
🧠 RUMUS LOGIKA FPB:

1. Sebuah angka `i` adalah FAKTOR dari `angka1` jika → angka1 % i === 0
2. Sebuah angka `i` adalah FAKTOR dari `angka2` jika → angka2 % i === 0
3. FPB = angka `i` TERBESAR yang memenuhi KEDUA syarat di atas
```

### 🤔 Dua Arah Pendekatan

| Pendekatan | Arah | Kapan Berhenti? | Hasil |
|:---|:---|:---|:---|
| **Looping Naik** (1 ➡️ Atas) | 1, 2, 3, 4, 5, ... | Sampai loop selesai | Faktor **terakhir** (menimpa terus) |
| **Looping Turun** (Atas ➡️ 1) | 12, 11, 10, ... 4 | Langsung `return` saat ketemu | Faktor **pertama** yang ditemukan |

---

<a name="blueprint"></a>
## 🗺️ Pilar 3 — Kamus Variabel & Blueprint

### A. Kamus Variabel (Brute Force)

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|:---|:---|:---|:---|
| Penampung Hasil FPB | `hasil` atau `gcd` | `x`, `res` | Jelas menampung **hasil** akhir |
| Kandidat Pembagi (Loop) | `faktor` atau `divisor` | `i`, `j`, `x` | Karena yang dicek adalah **kandidat faktor** pembagi |
| Input Angka Pertama | `angka1` atau `num1` | `a`, `x` | Sesuai konteks soal |
| Input Angka Kedua | `angka2` atau `num2` | `b`, `y` | Sesuai konteks soal |

### B. Blueprint — Versi 1 (Brute Force Naik)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Cek satu-satu dari bawah, timpa terus)

function fpb(angka1, angka2) {
  let hasil = 0;                              // [PENAMPUNG] hasil FPB sementara

  for (let faktor = 1; ...) {                 // [LOOP] → cek kandidat faktor naik
    if (... && ...) {                         //   [KONDISI] → habis dibagi keduanya?
      hasil = faktor;                         //   [TIMPA] → simpan faktor terbaru
    }
  }

  return hasil;                               // [RETURN] → faktor terakhir = terbesar
}
```

### C. Blueprint — Versi 2 (Brute Force Turun)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Cek dari atas, langsung return yang pertama)

function fpb(angka1, angka2) {
  for (let faktor = angka1; ...) {            // [LOOP] → mulai dari angka terbesar
    if (... && ...) {                         //   [KONDISI] → habis dibagi keduanya?
      return faktor;                          //   [RETURN LANGSUNG] → pasti terbesar!
    }
  }
}
```

---

<a name="v1"></a>
## 🟢 Pilar 4 — Versi 1: Brute Force Looping Naik (Pendekatan Bertahap)

### Step 1 — Siapkan Kerangka Dasar

Buat variabel penampung dan loop dari `1` sampai `angka1`:

```javascript
const fpb = (angka1, angka2) => {
  let hasil = 0;

  for (let faktor = 1; faktor <= angka1; faktor++) {
    // ... isi nanti
  }

  return hasil;
};
```

### Step 2 — Tambahkan Kondisi Pengecekan Faktor

Di dalam loop, cek apakah `faktor` bisa membagi habis **kedua** angka:

```javascript
const fpb = (angka1, angka2) => {
  let hasil = 0;

  for (let faktor = 1; faktor <= angka1; faktor++) {
    if (angka1 % faktor === 0 && angka2 % faktor === 0) {
      hasil = faktor;
    }
  }

  return hasil;
};
```

### 🧠 Algoritma Tahan Lupa (Versi 1)

1. **Siapkan Penampung `[VARIABEL]`** — `let hasil = 0;`
   *(Kenapa 0? Karena kita belum tahu FPB-nya. Nilai ini akan tertimpa saat loop berjalan.)*

2. **Cek Kandidat Faktor `[FOR LOOP]`** — Iterasi `faktor` dari `1` sampai `angka1`:
   - **Syarat Faktor Bersama `[IF CONDITION]`**: `angka1 % faktor === 0 && angka2 % faktor === 0`. *(Kenapa pakai `%`? Karena operator modulus mengecek sisa bagi. Jika sisa = 0, berarti habis dibagi. Contoh: `12 % 4 === 0` → true, `16 % 4 === 0` → true, maka 4 adalah faktor bersama.)*
   - **Timpa Hasil `[ASSIGNMENT]`**: `hasil = faktor;`. *(Kenapa ditimpa? Karena loop berjalan naik, setiap faktor baru yang ditemukan pasti lebih besar dari sebelumnya. Jadi nilai terakhir yang tertimpa = terbesar.)*

3. **Kembalikan Hasil `[RETURN]`** — `return hasil;`
   *(Kenapa di luar loop? Karena kita harus menunggu loop selesai mengecek SEMUA angka dulu baru tahu mana yang terbesar.)*

---

<a name="v2"></a>
## 🔵 Pilar 5 — Versi 2: Brute Force Looping Turun (Evolusi Solusi)

> 💭 *"Solusi Versi 1 sudah bekerja. Tapi, jika yang kita cari adalah nilai TERBESAR, kenapa kita tidak mulai mencari dari yang terbesar saja?"*

### 🔑 Insight Kunci

Jika kita **membalik arah loop** (dari besar ke kecil), maka angka **pertama** yang memenuhi syarat sudah **PASTI** yang terbesar! Kita tidak perlu menunggu loop selesai — langsung `return`.

### 💻 Kode Final (Versi 2)

```javascript
const fpb = (angka1, angka2) => {
  for (let faktor = angka1; faktor >= 1; faktor--) {
    if (angka1 % faktor === 0 && angka2 % faktor === 0) {
      return faktor;
    }
  }
};
```

### 🧠 Algoritma Tahan Lupa (Versi 2)

1. **Loop Mundur `[FOR LOOP DESC]`** — Iterasi `faktor` dari `angka1` turun ke `1`:
   *(Kenapa mulai dari `angka1`? Karena FPB tidak mungkin lebih besar dari salah satu angka inputnya. Contoh: FPB(12, 16) paling besar hanya 12.)*

2. **Syarat Faktor Bersama `[IF CONDITION]`** — Sama persis dengan Versi 1.

3. **Return Langsung `[RETURN INSIDE LOOP]`** — `return faktor;`
   *(Kenapa langsung return? Karena loop berjalan turun, faktor pertama yang ditemukan otomatis yang terbesar. Tidak perlu cek lagi — hemat waktu!)*

> [!TIP]
> 🏆 **Perbandingan Performa (Kasus: FPB 12 dan 16)**
>
> | Versi | Jumlah Iterasi | Penjelasan |
> |:---|:-:|:---|
> | **V1 (Naik)** | **12 kali** | Harus cek 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 |
> | **V2 (Turun)** | **9 kali** | Mulai dari 12, berhenti saat ketemu 4 |

---

<a name="naming"></a>
## 🏷️ Pilar 6 — Naming Convention

| Variabel | ❌ Bad / Kurang Jelas | ✅ Good / Sangat Jelas | Alasan |
|:---|:---|:---|:---|
| Kandidat Pembagi | `i`, `j`, `x` | `faktor` atau `divisor` | Langsung tahu yang dicek adalah **faktor pembagi** |
| Penampung FPB | `x`, `res`, `gdc` | `hasil` atau `gcd` | Jelas menampung hasil; `gcd` = singkatan standar |
| Angka Input | `a`, `x` | `angka1` / `num1` | Sesuai konteks soal dan parameter fungsi |

> [!NOTE]
> 💡 **Kapan `i` boleh dipakai?** Saat loop-nya murni bersifat *index* penghitung (misal: iterasi array). Jika variabel loop punya **makna spesifik** (seperti faktor, baris, kolom), gunakan nama deskriptif.

---

<a name="gotchas"></a>
## ⚠️ Pilar 7 — Gotchas & Peringatan

> [!CAUTION]
> 🔴 **Gotcha 1: Operator `<` vs `<=`**
>
> ```javascript
> // ❌ SALAH — FPB(12, 24) harusnya 12, tapi angka 12 tidak pernah dicek!
> for (let faktor = 1; faktor < angka1; faktor++)
>
> // ✅ BENAR — Angka 12 ikut dicek
> for (let faktor = 1; faktor <= angka1; faktor++)
> ```
> **Kenapa?** Jika `angka1 = 12` dan kita pakai `<`, loop berhenti di `11`. Angka `12` sendiri (yang merupakan FPB dari 12 dan 24) tidak pernah diperiksa!

> [!WARNING]
> 🟡 **Gotcha 2: `Math.max` vs `Math.min` untuk Batas Loop**
>
> FPB dari dua angka **tidak mungkin lebih besar** dari angka yang terkecil.
> ```javascript
> // ❌ KURANG EFISIEN — Mengecek angka yang tidak mungkin jadi FPB
> const batas = Math.max(angka1, angka2);
>
> // ✅ LEBIH EFISIEN — Batas atas adalah angka terkecil
> const batas = Math.min(angka1, angka2);
> ```
> *Contoh: FPB(10, 1000). Jika pakai `max`, komputer mengecek sampai 1000. Padahal FPB maksimal hanya 10!*

> [!WARNING]
> 🟡 **Gotcha 3: Typo pada Singkatan**
>
> | ❌ Salah | ✅ Benar | Kepanjangan |
> |:---|:---|:---|
> | `gdc` | `gcd` | **G**reatest **C**ommon **D**ivisor |
> | `fpd` | `fpb` | **F**aktor **P**ersekutuan ter**B**esar |

---

<a name="navigasi"></a>
## 🔗 Navigasi

| Dokumen | Isi |
|:---|:---|
| 📄 **Part 1 (File ini)** | Analisis Pola, Brute Force Naik & Turun, Naming, Gotchas |
| 📄 [**Part 2**](./Dokumentasi-gcd-euclidean-part-2_fpb-euclidean-bagian-2.md) | Euclidean Iteratif, Euclidean Rekursif, Perbandingan 4 Versi, Review Kode |

**⬅️ [Kembali ke Root Folder (README)](./README.md)**

---

> 📝 **Catatan:** Dokumentasi ini dibuat pada **24 Mei 2026** berdasarkan sesi mentoring langsung di **Google Antigravity** dengan JavaScript. Disusun mengikuti **7 Pilar Kualitas** dari workflow `/mentor-challenge`.
