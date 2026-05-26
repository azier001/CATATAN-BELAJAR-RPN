# 🔢 Faktor Persekutuan Terbesar (FPB) — Part 2: Euclidean Algorithm

### ✨ _Algoritma berusia 2.300 tahun yang masih menjadi standar industri hingga hari ini_

> 🎯 **Tujuan:** Memahami Euclidean Algorithm dalam 2 bentuk (Iteratif & Rekursif), membandingkan keempat versi solusi, dan me-review kode mandiri sebagai latihan *code review*.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Latar Belakang Euclidean](#latar-belakang) | Kenapa Brute Force tidak cukup |
| 🗺️ | [Kamus Variabel Euclidean](#kamus-euclidean) | Blueprint variabel untuk algoritma Euclidean |
| 🟣 | [Versi 3 — Euclidean Iteratif](#v3) | While loop + visualisasi tabel |
| 🟠 | [Versi 4 — Euclidean Rekursif](#v4) | Rekursi + visualisasi Call Stack |
| 🔥 | [Bonus: One-Liner](#one-liner) | Versi satu baris untuk *competitive programming* |
| ⚖️ | [Perbandingan 4 Versi](#perbandingan) | Tabel komparasi lengkap semua pendekatan |
| 📝 | [Review Kode Mandiri](#review) | Kritik & saran untuk kode yang ditulis sebelum mentoring |
| 🔗 | [Navigasi](#navigasi) | Link ke Part 1 |

---

<a name="latar-belakang"></a>
## 📖 Latar Belakang — Kenapa Brute Force Tidak Cukup?

Di Part 1, kita sudah membuat 2 versi Brute Force. Keduanya bekerja dengan baik untuk angka kecil. Tapi bagaimana jika inputnya **angka besar**?

> [!IMPORTANT]
> 🔔 **Masalah Performa Brute Force**
>
> Bayangkan `fpb(1234567, 987654)`. Bahkan dengan Looping Turun (Versi 2), komputer harus mengecek **ratusan ribu angka** sebelum menemukan FPB-nya!

Sekitar 2.300 tahun lalu, matematikawan Yunani **Euclid** menemukan sebuah "cheat code":

```
🧠 INSIGHT EUCLID:
FPB tidak perlu dicari dengan mengecek semua faktor satu per satu.
Cukup BAGI angka yang besar dengan angka yang kecil secara berulang,
sampai sisa baginya habis (0).
```

> [!TIP]
> 💡 **Analogi Sederhana**
>
> | | Brute Force 🔴 | Euclidean 🟢 |
> |---|---|---|
> | 📝 | Seperti mencari kunci yang hilang dengan **mengecek satu per satu laci** di seluruh rumah | Seperti langsung bertanya ke anggota keluarga: *"Siapa terakhir pakai kunci?"* — lalu telusuri petunjuknya |
> | ⏱️ | Lambat, tapi pasti ketemu | Cepat, karena langsung mengeliminasi kemungkinan |

---

<a name="kamus-euclidean"></a>
## 🗺️ Kamus Variabel — Euclidean Algorithm

| Lokasi / Peran | ✅ Rekomendasi (ID) | ✅ Rekomendasi (EN) | ❌ Jangan | Alasan |
|:---|:---|:---|:---|:---|
| Sisa Bagi (temp) | `sisaBagi` | `remainder` | `temp`, `x` | Jelas perannya: **sisa pembagian** |
| Input Pertama | `angka1` | `a` | `x`, `num` | `a` lazim di rumus matematika Euclidean |
| Input Kedua | `angka2` | `b` | `y`, `val` | `b` lazim di rumus matematika Euclidean |

> [!NOTE]
> 💡 **Kenapa `a` dan `b` boleh di Euclidean?** Karena algoritma ini berasal dari rumus matematika `GCD(a, b)`. Menggunakan `a` dan `b` justru membuat kode langsung dikenali oleh programmer mana pun di dunia.

---

<a name="v3"></a>
## 🟣 Versi 3 — Euclidean Algorithm (Iteratif / While Loop)

### 🔑 Logika Inti

```
🧠 PROSES EUCLIDEAN:

1. Hitung sisa bagi     → sisaBagi = angka1 % angka2
2. Geser posisi angka1  → angka1 = angka2
3. Geser posisi angka2  → angka2 = sisaBagi
4. Ulangi sampai angka2 === 0
5. Saat berhenti, angka1 = FPB!
```

### 🗺️ Blueprint

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Geser & bagi terus sampai habis)

function gcd(angka1, angka2) {
  let sisaBagi;                          // [PENAMPUNG] sisa bagi sementara

  while (angka2 !== 0) {                 // [LOOP] → selama belum habis
    sisaBagi = angka1 % angka2;          //   [HITUNG] → cari sisa bagi
    angka1 = angka2;                     //   [GESER 1] → angka2 jadi angka1
    angka2 = sisaBagi;                   //   [GESER 2] → sisaBagi jadi angka2
  }

  return angka1;                         // [RETURN] → saat angka2 = 0, ini FPB
}
```

### 💻 Kode Final (Versi 3)

```javascript
function gcd(angka1, angka2) {
  let sisaBagi;

  while (angka2 !== 0) {
    sisaBagi = angka1 % angka2;
    angka1 = angka2;
    angka2 = sisaBagi;
  }

  return angka1;
}
```

### 🧠 Algoritma Tahan Lupa (Versi 3)

1. **Variabel Penampung Sisa `[DEKLARASI]`** — `let sisaBagi;`
   *(Kenapa perlu variabel bantuan? Karena kita akan menggeser nilai `angka1` dan `angka2` secara bergiliran. Tanpa penampung, nilai asli akan hilang sebelum sempat dipakai.)*

2. **Perulangan Geser & Bagi `[WHILE LOOP]`** — Selama `angka2 !== 0`:
   - **Hitung Sisa `[MODULUS]`**: `sisaBagi = angka1 % angka2`. *(Kenapa modulus? Karena kita hanya butuh "sisa"-nya, bukan hasil baginya. Sisa inilah yang menjadi kunci untuk memperkecil angka secara drastis.)*
   - **Geser Posisi `[SHIFT]`**: `angka1 = angka2` lalu `angka2 = sisaBagi`. *(Kenapa digeser? Karena inti Euclidean adalah: "FPB(a, b) sama dengan FPB(b, a%b)". Jadi kita mengecilkan masalah di setiap putaran.)*

3. **Return Saat Habis `[RETURN]`** — `return angka1;`
   *(Kenapa `angka1`? Karena saat `angka2` menjadi 0, artinya putaran terakhir pembagian habis sempurna. Pembagi terakhir (yang sekarang ada di `angka1`) adalah FPB-nya.)*

### 📊 Visualisasi Dry Run (Studi Kasus: 50 dan 40)

| Iterasi | Cek `angka2 !== 0` | `sisaBagi` = angka1 % angka2 | Update `angka1` | Update `angka2` |
|:---:|:---|:---|:---:|:---:|
| **Awal** | — | — | **50** | **40** |
| **Putaran 1** | `40 !== 0` ✅ Lanjut | `50 % 40` → **10** | **40** | **10** |
| **Putaran 2** | `10 !== 0` ✅ Lanjut | `40 % 10` → **0** | **10** | **0** |
| **Putaran 3** | `0 !== 0` ❌ Berhenti | *(tidak dijalankan)* | **10** | **0** |

> 🎯 **Hasil:** `return angka1` → **10** ✅ (Hanya 2 putaran!)

---

<a name="v4"></a>
## 🟠 Versi 4 — Euclidean Algorithm (Rekursif)

### 🔑 Apa itu Rekursif?

Rekursif adalah fungsi yang **memanggil dirinya sendiri** berulang-ulang sampai mencapai titik berhenti (*base case*).

Logika Euclidean Iteratif (Versi 3) memiliki 2 elemen yang bisa diterjemahkan langsung ke Rekursif:
- **Titik Berhenti:** `angka2 === 0` → return `angka1`
- **Proses Berulang:** Geser `angka1` → `angka2`, geser `angka2` → `angka1 % angka2`

### 💻 Kode Final (Versi 4 — Readable)

```javascript
function gcd(angka1, angka2) {
  // 1. BASE CASE — Kapan berhenti?
  if (angka2 === 0) {
    return angka1;
  }

  // 2. RECURSIVE STEP — Panggil dirinya sendiri
  return gcd(angka2, angka1 % angka2);
}
```

### 🧠 Algoritma Tahan Lupa (Versi 4)

1. **Base Case `[IF CONDITION]`** — `if (angka2 === 0) return angka1;`
   *(Kenapa ini titik berhenti? Karena jika angka2 = 0, artinya pembagian terakhir habis sempurna. Angka1 pada saat itu adalah FPB. Tanpa base case, fungsi akan memanggil dirinya sendiri tanpa henti → crash!)*

2. **Recursive Step `[RETURN SELF-CALL]`** — `return gcd(angka2, angka1 % angka2);`
   *(Kenapa tidak butuh variabel `sisaBagi`? Karena `angka1 % angka2` langsung dimasukkan sebagai argumen pemanggilan berikutnya. Lebih ringkas karena tidak perlu menyimpan sementara.)*

### 🪆 Visualisasi Call Stack (Studi Kasus: 50 dan 40)

| Tingkat | Pemanggilan | `angka1` | `angka2` | Base Case? | Apa yang di-`return`? |
|:---:|:---|:---:|:---:|:---|:---|
| **#1** | `gcd(50, 40)` | 50 | 40 | ❌ Lanjut | Menunggu `gcd(40, 10)` |
| **#2** | `gcd(40, 10)` | 40 | 10 | ❌ Lanjut | Menunggu `gcd(10, 0)` |
| **#3** | `gcd(10, 0)` | 10 | 0 | ✅ **Berhenti!** | Langsung return **10** |

**🫧 Bubbling Up (Nilai dioper ke atas):**
- Panggilan #3 return **10** → diterima Panggilan #2
- Panggilan #2 return **10** → diterima Panggilan #1
- Panggilan #1 return **10** → **Hasil akhir program!**

---

<a name="one-liner"></a>
## 🔥 Bonus — One-Liner (Arrow Function + Ternary)

```javascript
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
```

**Cara baca:** *"Apakah `b` sama dengan 0? Jika Ya → kembalikan `a`. Jika Tidak → jalankan lagi `gcd` dengan `b` dan `a % b`."*

> [!WARNING]
> 🟡 **Kapan pakai One-Liner?**
> - ✅ *Competitive programming* / *code golf* — saat kecepatan menulis kode diutamakan
> - ✅ Utility function kecil yang sudah dipahami tim
> - ❌ **Jangan** dipakai di codebase produksi jika tim belum familiar — readability lebih penting!

---

<a name="perbandingan"></a>
## ⚖️ Perbandingan 4 Versi Solusi

| Aspek | V1 🟢 Brute Force Naik | V2 🔵 Brute Force Turun | V3 🟣 Euclidean Iteratif | V4 🟠 Euclidean Rekursif |
|:---|:---:|:---:|:---:|:---:|
| **Kompleksitas** | O(min(a,b)) | O(min(a,b)) | O(log(min(a,b))) | O(log(min(a,b))) |
| **Kecepatan** | 🔴 Lambat | 🟡 Sedang | 🟢 Cepat | 🟢 Cepat |
| **Readability** | 🟢 Mudah | 🟢 Mudah | 🟡 Sedang | 🟡 Sedang |
| **Jumlah Baris** | 7 baris | 5 baris | 7 baris | 4 baris |
| **Butuh Variabel Bantu?** | ✅ `hasil` | ❌ | ✅ `sisaBagi` | ❌ |
| **Best For** | Belajar dasar | Optimasi dasar | Produksi & Interview | Clean code & FP |

> [!TIP]
> 🏆 **Rekomendasi:**
> - **Pemula / Belajar:** Mulai dari V1, lalu pahami V2
> - **Interview Kerja:** Tunjukkan V3 atau V4 — ini standar industri
> - **Competitive Programming:** Langsung pakai One-Liner

---

<a name="review"></a>
## 📝 Review Kode Mandiri (Sebelum Mentoring)

Berikut kode yang ditulis **sebelum sesi mentoring** dimulai:

```javascript
function fpb(angka1, angka2) {
  const maxNumber = Math.max(angka1, angka2);
  let gdcNumber = 1;

  for (let i = 2; i < maxNumber; i++) {
    if (angka1 % i === 0 && angka2 % i === 0) {
      gdcNumber = i;
    }
  }

  return gdcNumber;
}
```

### 🌟 Kelebihan

| # | Aspek | Penjelasan |
|---|:---|:---|
| 1 | **Default Value Pintar** | `gdcNumber = 1` + loop mulai dari `i = 2` — *micro-optimization*: tidak perlu cek angka 1 |
| 2 | **Penggunaan Built-in** | `Math.max()` menunjukkan pemahaman fitur JavaScript |

### 🛠️ Perbaikan yang Diperlukan

| # | Masalah | Dampak | Solusi |
|---|:---|:---|:---|
| 1 | `Math.max` → seharusnya `Math.min` | Iterasi sia-sia pada angka besar | Ganti ke `Math.min(angka1, angka2)` |
| 2 | `i < maxNumber` → seharusnya `<=` | **Bug!** FPB(12, 24) salah hasilnya | Ganti ke `faktor <= minNumber` |
| 3 | `gdcNumber` → typo | Bukan bug, tapi salah singkatan | Ganti ke `gcd` (bukan `gdc`) |

### ✅ Kode Setelah Refactor

```javascript
function fpb(angka1, angka2) {
  const minNumber = Math.min(angka1, angka2);
  let gcd = 1;

  for (let faktor = 2; faktor <= minNumber; faktor++) {
    if (angka1 % faktor === 0 && angka2 % faktor === 0) {
      gcd = faktor;
    }
  }

  return gcd;
}
```

> [!TIP]
> 🏆 **Insight dari Code Review:** Pendekatan mandiri ini setara dengan **Versi 1 (Brute Force Naik)** yang sudah dioptimalkan dengan `Math.min` dan default value. Inisiatif yang sangat bagus!

---

<a name="navigasi"></a>
## 🔗 Navigasi

| Dokumen | Isi |
|:---|:---|
| 📄 [**Part 1**](./Dokumentasi-gcd-brute-force-part-1_fpb-brute-force-bagian-1.md) | Analisis Pola, Brute Force Naik & Turun, Naming, Gotchas |
| 📄 **Part 2 (File ini)** | Euclidean Iteratif & Rekursif, Perbandingan 4 Versi, Review Kode |

**⬅️ [Kembali ke Root Folder (README)](./README.md)**

---

> 📝 **Catatan Akhir:** Dokumentasi ini dibuat pada **24 Mei 2026** berdasarkan sesi mentoring langsung di **Google Antigravity** dengan JavaScript. Disusun mengikuti **7 Pilar Kualitas** dari workflow `/mentor-challenge` dengan gaya penulisan `/setup-doc`.
