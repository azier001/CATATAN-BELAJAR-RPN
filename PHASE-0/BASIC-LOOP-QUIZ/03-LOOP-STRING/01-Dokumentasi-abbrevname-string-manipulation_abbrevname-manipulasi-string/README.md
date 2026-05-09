# ✂️ abbrevName — Abbreviate a Two Word Name

### ✨ _Belajar manipulasi string dengan loop manual untuk mengubah nama lengkap menjadi inisial_

> 🎯 **Tujuan:** Memahami cara menyisir (iterate) string karakter per karakter menggunakan loop, mendeteksi spasi sebagai pemisah kata, dan membangun string hasil secara bertahap — tanpa menggunakan built-in method seperti `.split()` atau `.indexOf()`.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Latar Belakang](#latar-belakang) | Apa challenge ini dan kenapa penting |
| 🔑 | [Konsep Kunci](#konsep-kunci) | Teknik inti: akses indeks, deteksi spasi, `i+1` / `i-1` |
| 🧪 | [Percobaan Awal](#percobaan-awal) | Kode pertama yang ditulis sendiri sebelum mentoring |
| 🛠️ | [Solusi V1 — Look-Back Logic](#solusi-v1) | Pendekatan `name[i-1]` dengan kondisi OR |
| 🔧 | [Solusi V2 — Index Search](#solusi-v2) | Pendekatan cari koordinat spasi dengan `spaceIndexPosition` |
| 💎 | [Solusi V3 — The Elegant Hybrid](#solusi-v3) | Gabungan efisiensi dan kerapian (PEMENANG) |
| 🌍 | [Best Practice — Modern JS](#best-practice-modern) | Cara `split` → `map` → `join` untuk dunia kerja |
| 🔩 | [Best Practice — Clean Loop](#best-practice-loop) | Versi loop paling bersih dan optimal |
| ⚠️ | [Eksperimen Gagal — map pada Karakter](#eksperimen-gagal) | Kenapa `.map()` pada spread string tidak cocok |
| 📊 | [Perbandingan Semua Versi](#perbandingan) | Tabel komparasi semua pendekatan |
| 📚 | [Konsep yang Dipelajari](#konsep-dipelajari) | Rangkuman pelajaran dari sesi mentoring |
| 💡 | [Catatan Tambahan](#catatan-tambahan) | Insight & tips dari mentor |

---

<a name="latar-belakang"></a>

## 📖 Latar Belakang

Challenge ini berasal dari **Codewars** ([link soal](https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3)).

**Tugas:** Buat fungsi `abbrevName(name)` yang menerima nama lengkap (2 kata) dan mengembalikan inisialnya dalam format `"X.Y"` (huruf kapital, dipisah titik).

**Constraint tambahan:** Wajib menggunakan **loop manual** dan **tanpa built-in method** yang menggantikan loop (seperti `.split()`, `.indexOf()`, `.map()`, dll).

### 💡 Contoh Input & Output

| Input | Output |
|-------|--------|
| `"Sam Harris"` | `"S.H"` |
| `"Patrick Feenan"` | `"P.F"` |
| `"Evan Cole"` | `"E.C"` |
| `"P Favuzzi"` | `"P.F"` |
| `"David Mendieta"` | `"D.M"` |

---

<a name="konsep-kunci"></a>

## 🔑 Konsep Kunci

### 1️⃣ String sebagai Deretan Karakter — _"Senter Menyisir Huruf"_ 🔦

```
🎯 Fungsi    → Akses setiap karakter string via indeks (name[i])
📌 Analogi   → Seperti memegang senter, menyisir huruf satu per satu dari kiri ke kanan
🔐 Kunci     → String bisa diakses persis seperti array: name[0], name[1], dst.
```

### 2️⃣ Deteksi Spasi sebagai Pemisah Kata — _"Pintu Masuk Nama Kedua"_ 🚪

```
🎯 Fungsi    → Spasi (' ') adalah penanda batas antara nama depan dan nama belakang
📌 Analogi   → Seperti menemukan pintu — begitu ketemu, kita tahu nama kedua ada di baliknya
🔐 Kunci     → if (name[i] === ' ') → kita sudah sampai di "pintu masuk" nama kedua
```

### 3️⃣ Teknik "Mengintip Tetangga" — _"Lihat Sebelum & Sesudah"_ 👀

```
🎯 Fungsi    → Mengakses karakter di depan (i+1) atau di belakang (i-1) posisi saat ini
📌 Analogi   → Seperti melihat ke kiri/kanan sebelum menyeberang jalan
🔐 Kunci     → name[i+1] = karakter setelah spasi | name[i-1] = karakter sebelum posisi saat ini
```

> [!IMPORTANT]
> 🔔 **Di JavaScript**, mengakses indeks di luar batas string (misal `name[-1]`) menghasilkan `undefined`, **bukan error**. Dan `undefined === ' '` adalah `false`, jadi aman digunakan dalam kondisi `if`.

---

<a name="percobaan-awal"></a>

## 🧪 Percobaan Awal (Kode Sendiri Sebelum Mentoring)

Sebelum dibimbing mentor, ini adalah kode yang ditulis sendiri:

```javascript
function abbrevName(name) {
  let result = '';

  const firstChar = name[0].toUpperCase();

  for (let i = 0; i < name.length; i++) {
    if (name[i] === ' ') {
      result += `${firstChar}.${name[i + 1].toUpperCase()}`;
    }
  }

  return result;
}
```

### 🎨 Visualisasi ASCII

```text
Input: "Sam Harris"

Indeks:  0  1  2  3  4  5  6  7  8  9
Karakter: S  a  m [ ] H  a  r  r  i  s

[Start] firstChar = 'S', result = ''
   |
   v
i=0  'S' === ' '? ❌ → skip
i=1  'a' === ' '? ❌ → skip
i=2  'm' === ' '? ❌ → skip
i=3  ' ' === ' '? ✅ → result += "S." + name[4].toUpperCase()
                       result = "S.H"
i=4  'H' === ' '? ❌ → skip
...sampai i=9
   |
   v
return "S.H" ✅
```

### ✅ Kelebihan
- **Kreatif:** Menyimpan `firstChar` di awal dan menggabungkannya saat spasi ditemukan
- **Berhasil untuk 2 kata:** Output benar untuk semua test case

### ⚠️ Kekurangan
- **Jika tidak ada spasi:** `result` tetap kosong `''`, padahal minimal harus ada inisial pertama
- **Jika ada lebih dari 1 spasi:** `firstChar` akan muncul berulang (misal `"Sam Harris Junior"` → `"S.HS.J"`)

### 🛠 Refactoring oleh Mentor — Gaya "Collector"

Versi perbaikan yang mempertahankan gaya "Trigger" (menunggu spasi baru beraksi):

```javascript
function abbrevName(name) {
  const firstChar = name[0].toUpperCase();
  let secondChar = '';

  for (let i = 0; i < name.length; i++) {
    if (name[i] === ' ') {
      secondChar = name[i + 1].toUpperCase();
      break;
    }
  }

  return `${firstChar}.${secondChar}`;
}
```

> 💡 **Insight:** Logika pencarian dipisah dengan logika penggabungan (formatting). Kumpulkan bahan dulu, baru "masak" di akhir.

---

<a name="solusi-v1"></a>

## 🛠️ Solusi V1 — Look-Back Logic

```javascript
function abbrevName(name) {
  let result = ''
  
  for (let i = 0; i < name.length; i++) {
    if (i === 0 || name[i - 1] === ' ') {
      result += name[i].toUpperCase() + '.'
      
      if (result.length === 4) break
    }
  }
  
  return result
}
```

### 🎨 Visualisasi ASCII

```text
Input: "Sam Harris"

[Start] result = ''
   |
   v
i=0  → i === 0? ✅ → result = '' + 'S' + '.' = "S."
       result.length === 4? ❌ (length=2) → lanjut
i=1  → i === 0? ❌ | name[0] === ' '? ❌ ('S') → skip
i=2  → i === 0? ❌ | name[1] === ' '? ❌ ('a') → skip
i=3  → i === 0? ❌ | name[2] === ' '? ❌ ('m') → skip
i=4  → i === 0? ❌ | name[3] === ' '? ✅ → result = "S." + 'H' + '.' = "S.H."
       result.length === 4? ✅ → BREAK! ⛔
   |
   v
return "S.H." (⚠️ Ada titik ekstra di akhir!)
```

### 🔍 Penjelasan

1. **Kondisi Ganda (`||`):** `i === 0` (karakter paling depan) ATAU `name[i-1] === ' '` (karakter tepat sebelumnya adalah spasi) — keduanya menandakan awal sebuah kata
2. **Penambahan Titik Otomatis:** Setiap huruf inisial langsung ditempeli titik
3. **Break via Magic Number:** Stop saat `result.length === 4` (yaitu `"S.H."` = 4 karakter)

### ⚠️ Masalah

- **Trailing Dot:** Hasilnya `"S.H."` (ada titik di akhir), padahal soal minta `"S.H"`
- **Magic Number `4`:** Angka ini harus dihitung manual dan berubah jika aturannya berubah

---

<a name="solusi-v2"></a>

## 🔧 Solusi V2 — Index Search (The Specialist)

```javascript
function abbrevName(name) {
  const firstChar = name[0].toUpperCase()
  let secondChar
  let spaceIndexPosition = 0
  
  for (let i = 0; i < name.length; i++) {
    if (name[i] === ' ') {
      spaceIndexPosition = i
      break
    }
  }
  
  secondChar = name[spaceIndexPosition + 1].toUpperCase()
  
  return `${firstChar}.${secondChar}`
}
```

### 🎨 Visualisasi ASCII

```text
Input: "Sam Harris"

[Start] firstChar = 'S', spaceIndexPosition = 0
   |
   v
=== FASE 1: Cari Koordinat Spasi ===
i=0  'S' === ' '? ❌ → lanjut
i=1  'a' === ' '? ❌ → lanjut
i=2  'm' === ' '? ❌ → lanjut
i=3  ' ' === ' '? ✅ → spaceIndexPosition = 3, BREAK! ⛔
   |
   v
=== FASE 2: Ambil Huruf & Format ===
secondChar = name[3 + 1] = name[4] = 'H' → toUpperCase() → 'H'
   |
   v
return `${'S'}.${'H'}` → "S.H" ✅
```

### 🔍 Penjelasan

1. **Loop punya 1 tugas spesifik:** Hanya mencari "koordinat" (indeks) di mana spasi berada
2. **`spaceIndexPosition`:** Menyimpan informasi dari dalam loop untuk dipakai di luar loop
3. **Eksekusi di luar loop:** Begitu koordinat didapat, baru kita ambil hurufnya — memisahkan "Proses Cari" dan "Proses Output" (*Separation of Concerns*)

### ✅ Kelebihan
- **Zero Trailing Dot:** Masalah titik di akhir langsung hilang karena format dikontrol penuh di `return`
- **Sangat Terstruktur:** Cocok untuk pemula karena alurnya linear dan mudah diikuti

### ⚠️ Kekurangan
- **Risiko Nama 1 Kata:** Jika inputnya `"Sam"`, spasi tidak ditemukan, `spaceIndexPosition` tetap `0`, hasilnya `"S.A"` (salah)

---

<a name="solusi-v3"></a>

## 💎 Solusi V3 — The Elegant Hybrid (🏆 PEMENANG)

```javascript
function abbrevName(name) {
  let result = ''
  
  for (let i = 0; i < name.length; i++) {
    if (i === 0) {
      result += name[i].toUpperCase() + '.'
    }
    
    if (name[i - 1] === ' ') {
      result += name[i].toUpperCase()
      break
    }
  }
  
  return result
}
```

### 🎨 Visualisasi ASCII

```text
Input: "Sam Harris"

[Start] result = ''
   |
   v
i=0  → i === 0? ✅ → result = '' + 'S' + '.' = "S."
       name[-1] === ' '? → undefined === ' '? ❌ → skip
i=1  → i === 0? ❌
       name[0] === ' '? → 'S' === ' '? ❌ → skip
i=2  → i === 0? ❌
       name[1] === ' '? → 'a' === ' '? ❌ → skip
i=3  → i === 0? ❌
       name[2] === ' '? → 'm' === ' '? ❌ → skip
i=4  → i === 0? ❌
       name[3] === ' '? → ' ' === ' '? ✅
       result = "S." + 'H' = "S.H"
       BREAK! ⛔
   |
   v
return "S.H" ✅
```

### 🔍 Penjelasan

1. **Pemisahan Tugas yang Cerdas:**
   - `if (i === 0)`: Hanya fokus ambil huruf pertama + titik pemisah
   - `if (name[i-1] === ' ')`: Hanya fokus ambil huruf kedua
2. **Solusi Titik yang Jenius:** Titik ditempelkan **hanya setelah huruf pertama**, sehingga huruf kedua tidak punya titik di belakangnya
3. **Efisiensi Maksimal:** Begitu inisial kedua masuk, loop langsung berhenti (`break`)
4. **Tanpa Variabel Tambahan:** Tidak butuh `spaceIndexPosition` atau variabel bantu lainnya

### 🏆 Kenapa Ini Pemenang?

| Aspek | V1 | V2 | V3 ✅ |
|-------|----|----|-------|
| Trailing Dot | ⚠️ Ada | ✅ Tidak | ✅ Tidak |
| Variabel Tambahan | 0 | 2 (`firstChar`, `spaceIndexPosition`) | 0 |
| Kode dalam Loop | Semua | Hanya cari spasi | Semua |
| Keterbacaan | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

<a name="best-practice-modern"></a>

## 🌍 Best Practice — Modern JavaScript (Real World)

Di dunia kerja nyata, programmer jarang membuat loop manual untuk masalah ini:

```javascript
function abbrevName(name) {
  return name
    .split(' ')
    .map(word => word[0].toUpperCase())
    .join('.');
}
```

### 🎨 Visualisasi ASCII — Jalur Perakitan Pabrik 🏭

```text
[ INPUT STRING ]
      "sam harris"
           |
           v
---------------------------
 1. .split(' ') ✂️ Memotong berdasarkan spasi
---------------------------
      [ "sam", "harris" ]     ← Sekarang jadi ARRAY 2 kata
           |
           v
---------------------------------------
 2. .map(word => word[0].toUpperCase()) ✨ Transformasi tiap elemen
---------------------------------------
      "sam"    → Ambil [0] & UpperCase → "S"
      "harris" → Ambil [0] & UpperCase → "H"
           |
      [ "S", "H" ]            ← Array baru berisi inisial
           |
           v
---------------------------
 3. .join('.') 🔗 Menyambung dengan titik
---------------------------
         "S" + "." + "H"
           |
           v
      [ FINAL OUTPUT ]
           "S.H" ✅
```

### 🔍 Penjelasan

1. **Declarative:** Kita memberi tahu komputer "APA" yang kita mau (Potong → Ambil Huruf → Gabung), bukan "BAGAIMANA" cara muter-muter indeksnya
2. **Handle Multi-kata:** Otomatis bisa untuk nama 3 kata, 4 kata, dst tanpa ubah kode
3. **Sangat Terbaca:** Programmer lain langsung paham maksudnya dalam satu detik

> [!TIP]
> 💡 **Analogi:** Loop manual = kamu memegang satu senter, menyisir huruf satu per satu. Modern method = kamu punya 3 robot spesialis (robot pemotong, robot pengambil inisial, robot penyambung).

---

<a name="best-practice-loop"></a>

## 🔩 Best Practice — Clean Loop (Penyempurnaan V3)

Jika dipaksa tetap pakai loop (misal untuk asah logika atau tes masuk kerja):

```javascript
function abbrevName(name) {
  let initials = name[0].toUpperCase();

  for (let i = 1; i < name.length; i++) {
    if (name[i - 1] === ' ') {
      initials += '.' + name[i].toUpperCase();
    }
  }

  return initials;
}
```

### 🎨 Visualisasi ASCII

```text
Input: "Sam Harris"

[Start] initials = 'S' (langsung ambil huruf pertama di luar loop)
   |
   v
=== Loop mulai dari i=1 (indeks 0 sudah diambil) ===
i=1  name[0] === ' '? → 'S' ❌ → skip
i=2  name[1] === ' '? → 'a' ❌ → skip
i=3  name[2] === ' '? → 'm' ❌ → skip
i=4  name[3] === ' '? → ' ' ✅ → initials = 'S' + '.' + 'H' = "S.H"
i=5  name[4] === ' '? → 'H' ❌ → skip
...sampai i=9
   |
   v
return "S.H" ✅
```

### 🔍 Apa yang Membedakan dari V3?

1. **Pondasi di Awal:** `initials = name[0]` di awal, tidak perlu cek `if (i === 0)` di dalam loop
2. **Mulai dari Indeks 1:** Karena huruf pertama sudah aman, loop mulai dari `1`
3. **Fleksibel:** Otomatis menangani nama 2 kata atau lebih tanpa perlu `break`

---

<a name="eksperimen-gagal"></a>

## ⚠️ Eksperimen Gagal — `.map()` pada Karakter String

Percobaan menggunakan spread operator + `.map()` langsung pada karakter:

```javascript
const abbrevName = (name) => {
  return [...name].map((char, i) => {
    if (i === 0) {
      char = name[0].toLowerCase();
    }

    if (char === ' ') {
      char = '.';
    }

    return char;
  });
};
```

### 🎨 Visualisasi ASCII — Kenapa Ini Gagal

```text
Input: "Sam Harris"

Spread:   [ 'S', 'a', 'm', ' ', 'H', 'a', 'r', 'r', 'i', 's' ]
              |    |    |    |    |    |    |    |    |    |
.map():    's'  'a'  'm'  '.'  'H'  'a'  'r'  'r'  'i'  's'
              |____|____|____|____|____|____|____|____|____|
                                   v
Hasilnya:  "sam.Harris"  ← BUKAN singkatan! ❌
```

### 🔍 Kenapa Gagal?

> [!WARNING]
> 🐛 **Sifat dasar `.map()`:** `.map()` mengubah **setiap** elemen, tapi **tidak bisa membuang** elemen. Jika inputnya 10 karakter, outputnya **PASTI** 10 karakter juga.

- **Masalah Inti:** Huruf seperti 'a', 'm', 'a', 'r', dst tetap ikut terbawa
- **`.toLowerCase()` vs `.toUpperCase()`:** Tertulis `.toLowerCase()` padahal soal minta huruf kapital
- **Butuh `.filter()`:** Untuk membuang huruf yang tidak penting, tapi ini membuat kode sangat rumit

> [!TIP]
> 💡 **Pelajaran:** Jangan gunakan `.map()` langsung pada karakter string jika tujuannya **menyingkat** (mengurangi jumlah). Pakailah `.map()` pada **kumpulan kata** hasil dari `.split(' ')`.

---

<a name="perbandingan"></a>

## 📊 Perbandingan Semua Versi

### ⚡ Performa (untuk "Sam Harris" — 10 karakter)

| Versi | Iterasi | Variabel | Trailing Dot | Hasil |
|-------|---------|----------|:------------:|:-----:|
| Percobaan Awal | 10 | 2 | ✅ Tidak | ✅ |
| V1 (Look-Back) | 5 | 1 | ⚠️ Ada | ⚠️ |
| V2 (Index Search) | 4 | 3 | ✅ Tidak | ✅ |
| **V3 (Hybrid)** ⭐ | 5 | 1 | ✅ Tidak | ✅ |
| BP Modern (`split/map`) | — | 0 | ✅ Tidak | ✅ |
| BP Clean Loop | 9 | 1 | ✅ Tidak | ✅ |

### 🏆 Rekomendasi Penggunaan

```
📚 Sedang Belajar Dasar?
   → Gunakan V2 (Index Search) — alurnya paling linear

🎓 Sudah Paham Konsep Loop?
   → Gunakan V3 (Hybrid) — efisien dan elegan

💼 Untuk Project/Portfolio?
   → Gunakan Modern JS (split/map/join) — standar industri

🚀 Untuk Interview?
   → Mulai dengan V2, optimasi ke V3, lalu tunjukkan Modern JS
```

---

<a name="konsep-dipelajari"></a>

## 📚 Konsep yang Dipelajari

- ✅ **String sebagai Array** — String bisa diakses tiap karakternya menggunakan indeks (`name[0]`, `name[i]`)
- ✅ **Teknik "Mengintip Tetangga"** — Dalam loop, kita bisa mengakses `name[i+1]` (karakter di depan) atau `name[i-1]` (karakter di belakang) posisi saat ini
- ✅ **Optimasi dengan `break`** — Menghentikan loop begitu tugas selesai, tidak membuang-buang iterasi
- ✅ **Separation of Concerns** — Memisahkan logika pencarian dan logika formatting (V2)
- ✅ **Akumulasi String** — Membangun string hasil secara bertahap di dalam loop
- ✅ **Declarative vs Imperative** — Loop manual (imperative: "bagaimana") vs `split/map/join` (declarative: "apa")
- ✅ **Kapan `.map()` Tidak Cocok** — `.map()` pada karakter string tidak bisa menyingkat karena selalu menghasilkan jumlah elemen yang sama

---

<a name="catatan-tambahan"></a>

## 💡 Catatan Tambahan

### 🧠 Evolusi Cara Berpikir

```
V1: Masih meraba-raba logika (ada titik berlebih)
 ↓
V2: Mencoba lebih rapi tapi agak panjang (pakai koordinat)
 ↓
V3: Berhasil menggabungkan kecepatan dan kerapian (Hybrid)
 ↓
Modern JS: Memahami cara "profesional" yang declarative
```

### 📌 Pesan dari Mentor

> **Saat Belajar:** Pakailah cara **Loop** untuk melatih otak berpikir logis dan mengerti cara kerja di balik layar.

> **Saat Bekerja:** Pakailah cara **Modern (`split`, `map`, `join`)** untuk kecepatan dan kemudahan maintenance.

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **9 Mei 2026** berdasarkan sesi mentoring langsung di **Windows**. Semua kode dan visualisasi diambil dari diskusi nyata selama sesi belajar JavaScript dasar — termasuk percobaan gagal yang justru menjadi pelajaran berharga.
