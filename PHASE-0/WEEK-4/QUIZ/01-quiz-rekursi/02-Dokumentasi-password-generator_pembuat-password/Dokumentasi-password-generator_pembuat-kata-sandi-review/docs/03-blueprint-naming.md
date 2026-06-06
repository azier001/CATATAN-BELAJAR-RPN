# 🗺️ Blueprint & Naming Convention

### ✨ _Kerangka kode kosong + kamus penamaan variabel sebelum implementasi_

> 🎯 **Tujuan:** Memiliki blueprint (kerangka kode) dan naming convention yang jelas sebelum menulis implementasi, sehingga kode menjadi self-documenting dan maintainable

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🗺️ | [Blueprint Kerangka Kode](#blueprint) | Mental model + struktur kode kosong |
| 📚 | [Kamus Variabel Helper](#kamus-helper) | Naming convention untuk 4 fungsi pembantu |
| 🎯 | [Kamus Variabel Orkestrator](#kamus-orkestrator) | Naming convention untuk `passwordGenerator` |
| ⚖️ | [Let vs Const](#let-vs-const) | Kapan menggunakan `let` atau `const` |
| 💡 | [Prinsip Self-Documenting](#self-documenting) | Kode yang berbicara sendiri |

---

<a name="blueprint"></a>
## 🗺️ Blueprint: Kerangka Kode Kosong

Sebelum menulis implementasi, kita perlu mental model yang jelas tentang **struktur** dan **tanggung jawab** setiap fungsi.

### Mental Model Arsitektur

```
🏗️ ARSITEKTUR PASSWORD GENERATOR

┌─────────────────────────────────────┐
│   passwordGenerator (Orkestrator)   │
│   - Guard Clause (validasi)        │
│   - Orchestrate 4 fungsi helper    │
└──────────────┬──────────────────────┘
               │
       ┌───────┴────────┐
       ▼                ▼
┌──────────────┐  ┌──────────────┐
│ changeVocals │  │ reverseWord  │
│ (ASCII shift)│  │ (str reverse)│
└──────────────┘  └──────────────┘
       ▼                ▼
┌──────────────────┐  ┌──────────────┐
│setLowerUpperCase │  │ removeSpaces │
│  (case toggle)   │  │ (rm spaces)  │
└──────────────────┘  └──────────────┘

Prinsip: Single Responsibility
Setiap fungsi fokus pada 1 tugas spesifik
```

---

### 🗂️ Kerangka Fungsi Helper

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Inspector Vokal)
function changeVocals(str) {
  // [BAGIAN 1] Persiapan → Buat daftar vokal + variabel akumulator
  // [BAGIAN 2] Iterasi → Loop setiap karakter
  // [BAGIAN 3] Deteksi → Cek apakah vokal atau konsonan
  // [BAGIAN 4] Transform → Geser ASCII jika vokal, biarkan jika konsonan
  // [BAGIAN 5] Return → Kembalikan hasil akumulasi
}

// 🗺️ KERANGKA KODE (Mental Model: String Reverser)
function reverseWord(str) {
  // [BAGIAN 1] Method Chaining → split → reverse → join
  // [BAGIAN 2] Return → Kembalikan hasil
}

// 🗺️ KERANGKA KODE (Mental Model: Case Toggler)
function setLowerUpperCase(str) {
  // [BAGIAN 1] Persiapan → Variabel akumulator
  // [BAGIAN 2] Iterasi → Loop setiap karakter
  // [BAGIAN 3] Deteksi → Cek apakah huruf kapital atau kecil
  // [BAGIAN 4] Transform → Toggle case
  // [BAGIAN 5] Return → Kembalikan hasil akumulasi
}

// 🗺️ KERANGKA KODE (Mental Model: Space Remover)
function removeSpaces(str) {
  // [BAGIAN 1] Method Chaining → split berdasarkan spasi → join tanpa spasi
  // [BAGIAN 2] Return → Kembalikan hasil
}
```

---

### 🎯 Kerangka Fungsi Orkestrator

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Assembly Line Manager)
function passwordGenerator(name) {
  // [BAGIAN 1] Guard Clause → Validasi panjang minimal 5 karakter
  //            Jika gagal, return error message
  //            (line break untuk visual separation)
  
  // [BAGIAN 2] Pipeline Stage 1 → changeVocals
  //            Simpan hasil di variabel deskriptif
  
  // [BAGIAN 3] Pipeline Stage 2 → reverseWord
  //            Input = output dari stage 1
  
  // [BAGIAN 4] Pipeline Stage 3 → setLowerUpperCase
  //            Input = output dari stage 2
  
  // [BAGIAN 5] Pipeline Stage 4 → removeSpaces
  //            Input = output dari stage 3
  
  // [BAGIAN 6] Return → Kembalikan hasil final
}
```

> [!TIP]
> **Blueprint Benefits:**  
> Dengan kerangka ini, Anda tidak akan "stuck" saat coding karena sudah tahu struktur umum yang harus diisi. Tinggal terjemahkan setiap komentar jadi kode implementasi.

---

<a name="kamus-helper"></a>
## 📚 Kamus Variabel: Fungsi Helper

### 1️⃣ Variabel Internal `changeVocals`

| Lokasi/Peran | ✅ Rekomendasi | ❌ Jangan | Alasan |
|--------------|----------------|-----------|--------|
| Daftar vokal | `vocals` | `v`, `vokalList`, `hurufVokal` | Singkat, jelas, bahasa Inggris. Tidak perlu panjang karena scope kecil. |
| Akumulator hasil | `result` | `res`, `output`, `str2` | Standar universal untuk variabel penampung hasil transformasi. |
| Parameter iterasi | `char` | `c`, `karakter`, `huruf` | Singkat tapi deskriptif. Menjelaskan bahwa ini **satu karakter**, bukan string utuh. |
| Huruf hasil geser | `nextChar` | `shifted`, `next`, `hurufBaru` | Eksplisit menyatakan "huruf berikutnya setelah digeser". |

---

### 2️⃣ Variabel Internal `reverseWord`

**Tidak ada variabel internal** karena menggunakan method chaining langsung:
```javascript
return str.split('').reverse().join('');
```

> [!NOTE]
> Fungsi satu-liner seperti ini tidak perlu variabel temporary karena:
> - Readability sudah tinggi dengan method chaining
> - Tidak ada debugging complexity
> - Standard JavaScript idiom

---

### 3️⃣ Variabel Internal `setLowerUpperCase`

| Lokasi/Peran | ✅ Rekomendasi | ❌ Jangan | Alasan |
|--------------|----------------|-----------|--------|
| Akumulator hasil | `result` | `res`, `output`, `toggledStr` | Konsisten dengan naming di `changeVocals`. |
| Parameter iterasi | `char` | `c`, `karakter`, `huruf` | Konsisten dengan naming di `changeVocals`. |

---

### 4️⃣ Variabel Internal `removeSpaces`

**Tidak ada variabel internal** karena method chaining:
```javascript
return str.split(' ').join('');
```

---

<a name="kamus-orkestrator"></a>
## 🎯 Kamus Variabel: Fungsi `passwordGenerator`

Ini adalah bagian paling krusial karena variabel pipeline harus **menceritakan status data** di setiap tahap.

### ❌ Contoh Naming Buruk (Bad Practice)

```javascript
function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  let tahap1 = changeVocals(name);      // ❌ Tidak jelas isi datanya
  let tahap2 = reverseWord(tahap1);     // ❌ Hanya menjelaskan urutan
  let tahap3 = setLowerUpperCase(tahap2); // ❌ Harus scroll ke atas untuk tahu isinya
  let tahap4 = removeSpaces(tahap3);    // ❌ Tidak self-documenting

  return tahap4;
}
```

**Masalah:**
- Nama variabel tidak menjelaskan **status data**
- Jika ada bug di tengah pipeline, sulit debugging tanpa `console.log`
- Programmer lain harus membaca implementasi `changeVocals` untuk tahu isi `tahap1`

---

### ✅ Contoh Naming Bagus (Best Practice)

```javascript
function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  const changedVocals = changeVocals(name);          // ✅ Jelas: vokal sudah diganti
  const reversedWord = reverseWord(changedVocals);   // ✅ Jelas: kata sudah dibalik
  const caseSwapped = setLowerUpperCase(reversedWord); // ✅ Jelas: case sudah ditukar
  const finalPassword = removeSpaces(caseSwapped);   // ✅ Jelas: produk final bebas spasi

  return finalPassword;
}
```

**Keuntungan:**
- **Self-documenting** — nama variabel sudah menjelaskan isinya
- **Easy debugging** — jika ada bug, langsung tahu di tahap mana dengan lihat nama variabel
- **Maintainable** — programmer lain langsung paham tanpa perlu membaca detail fungsi helper

---

### 📊 Tabel Kamus Variabel Pipeline

| Variabel Asli | ❌ Bad Naming | ✅ Rekomendasi | Penjelasan Intensi |
|---------------|---------------|----------------|---------------------|
| `tahap1` | `tahap1`, `step1`, `hasil1`, `temp1` | `changedVocals` atau `vocalReplaced` | Eksplisit menjelaskan bahwa **vokal sudah diganti**. Pembaca langsung tahu status data tanpa lihat implementasi. |
| `tahap2` | `tahap2`, `step2`, `hasil2`, `temp2` | `reversedWord` | Memberitahu bahwa kata sudah dalam **wujud terbalik**. Jelas dan to-the-point. |
| `tahap3` | `tahap3`, `step3`, `hasil3`, `temp3` | `caseSwapped` atau `toggledCase` | Menjelaskan bahwa **case huruf sudah ditukar**. Alternatif `toggledCase` juga OK. |
| `tahap4` | `tahap4`, `step4`, `hasil4`, `temp4` | `finalPassword` atau `noSpaceWord` | Menandakan ini **produk final** yang siap dikembalikan. Alternatif `noSpaceWord` lebih spesifik tapi `finalPassword` lebih intuitif dalam konteks password generator. |

> [!IMPORTANT]
> **Naming Convention Best Practice:**  
> Gunakan **kata benda deskriptif** (noun) yang menjelaskan **status/hasil** dari data, bukan sekadar urutan/posisi dalam kode.

---

<a name="let-vs-const"></a>
## ⚖️ Let vs Const: Kapan Menggunakan?

### 🔍 Analisis Penggunaan

#### **Versi dengan `let` (Kurang Optimal)**

```javascript
function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  let changedVocals = changeVocals(name);          // ⚠️ let mengizinkan re-assignment
  let reversedWord = reverseWord(changedVocals);   // ⚠️ tapi kita tidak pernah re-assign
  let caseSwapped = setLowerUpperCase(reversedWord);
  let finalPassword = removeSpaces(caseSwapped);

  return finalPassword;
}
```

**Masalah:**
- `let` memberi sinyal bahwa variabel bisa berubah (mutable)
- Tapi di pipeline ini, setiap variabel hanya **di-assign sekali**
- Membuka peluang human error: programmer lain bisa tanpa sengaja overwrite variabel

---

#### **Versi dengan `const` (Optimal)**

```javascript
function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  const changedVocals = changeVocals(name);          // ✅ const mencegah re-assignment
  const reversedWord = reverseWord(changedVocals);   // ✅ immutable by default
  const caseSwapped = setLowerUpperCase(reversedWord);
  const finalPassword = removeSpaces(caseSwapped);

  return finalPassword;
}
```

**Keuntungan:**
- **Immutable by default** — mencegah perubahan tidak disengaja
- **Clearer intent** — sinyal ke pembaca bahwa nilai tidak akan berubah
- **Safer code** — jika ada typo mencoba re-assign, langsung error

---

### 📋 Decision Table: Let vs Const

| Skenario | Gunakan | Contoh |
|----------|---------|--------|
| Nilai **tidak pernah berubah** setelah assignment | `const` ✅ | `const changedVocals = changeVocals(name);` |
| Nilai **akan diubah** di kemudian hari | `let` | `let counter = 0; counter++;` |
| Loop iterator (tidak ada re-assignment) | `const` dengan `for...of` | `for (const char of str) { ... }` |
| Loop counter (ada increment) | `let` dengan `for` klasik | `for (let i = 0; i < n; i++) { ... }` |

> [!TIP]
> **Immutable by Default Rule:**  
> Selalu gunakan `const` sebagai pilihan pertama. Hanya gunakan `let` jika Anda **benar-benar** memiliki niat untuk mengubah nilai (*re-assign*) variabel tersebut di masa mendatang.

---

<a name="self-documenting"></a>
## 💡 Prinsip Self-Documenting Code

### 🎯 Definisi

**Self-documenting code** adalah kode yang **menjelaskan dirinya sendiri** melalui naming yang baik, sehingga tidak perlu komentar berlebihan.

---

### ❌ Contoh Butuh Komentar (Poor Naming)

```javascript
function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  let t1 = changeVocals(name);      // Ganti vokal
  let t2 = reverseWord(t1);         // Balik kata
  let t3 = setLowerUpperCase(t2);   // Tukar case
  let t4 = removeSpaces(t3);        // Hapus spasi

  return t4;
}
```

**Masalah:**
- Komentar **wajib** karena nama variabel tidak informatif
- Komentar bisa outdated jika kode diubah tapi komentar tidak
- Redundan: nama fungsi sudah jelas, tapi tetap perlu komentar karena nama variabel buruk

---

### ✅ Contoh Self-Documenting (Good Naming)

```javascript
function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  const changedVocals = changeVocals(name);
  const reversedWord = reverseWord(changedVocals);
  const caseSwapped = setLowerUpperCase(reversedWord);
  const finalPassword = removeSpaces(caseSwapped);

  return finalPassword;
}
```

**Keuntungan:**
- **Tidak perlu komentar** — nama variabel sudah menjelaskan isinya
- **Cannot be outdated** — nama variabel selalu sinkron dengan kode
- **Reads like prose** — kode terbaca seperti kalimat bahasa Inggris

> [!NOTE]
> **"Code is read more than it is written"**  
> Rata-rata programmer menghabiskan 70% waktu **membaca** kode (debugging, review, maintenance) dan hanya 30% **menulis** kode baru. Investasi waktu untuk naming yang baik akan terbayar berkali-kali lipat.

---

### 🔍 Perbandingan Readability

#### Kode dengan Naming Buruk
```javascript
const t1 = changeVocals(name);
const t2 = reverseWord(t1);
const t3 = setLowerUpperCase(t2);
```

**Mental load:**  
"Apa isi `t1`? Oh, harus lihat fungsi `changeVocals`... berarti vokal sudah diganti. Apa isi `t2`? Harus lihat `reverseWord`... berarti kata sudah dibalik."

---

#### Kode dengan Naming Bagus
```javascript
const changedVocals = changeVocals(name);
const reversedWord = reverseWord(changedVocals);
const caseSwapped = setLowerUpperCase(reversedWord);
```

**Mental load:**  
"Oh, `changedVocals` berarti vokal sudah diganti. `reversedWord` berarti kata sudah dibalik. `caseSwapped` berarti case sudah ditukar."

**Perbedaan:** Tidak perlu context switching ke implementasi fungsi helper. Semua informasi ada di nama variabel.

---

## 🎓 Kesimpulan: Naming Convention Manifesto

### 5 Prinsip Naming yang Baik

1. **Descriptive over Short**  
   `changedVocals` > `cv` > `temp1`

2. **Intention over Position**  
   `reversedWord` > `step2` > `hasil2`

3. **Immutable by Default**  
   Gunakan `const` kecuali benar-benar perlu `let`

4. **Consistency**  
   Jika pakai `result` di satu fungsi, pakai juga di fungsi lain

5. **Self-Documenting**  
   Nama variabel yang bagus = kode yang berbicara sendiri

> [!IMPORTANT]
> **Professional Standard:**  
> Naming convention bukan sekadar estetika. Ini adalah dokumentasi diam (*silent documentation*) yang:
> - Tidak bisa outdated (selalu sinkron dengan kode)
> - Tidak bisa diabaikan (harus ada nama variabel)
> - Meningkatkan maintainability drastis

---

## 🧭 Navigasi

| Link | Deskripsi |
|------|-----------|
| [⬅️ Prev: Algoritma Step-by-Step](./02-algoritma-step-by-step.md) | Algoritma tahan lupa dengan reasoning |
| [⬆️ Kembali ke README](../README.md) | Halaman utama dokumentasi |
| [➡️ Next: Implementasi Bertahap](./04-implementasi-bertahap.md) | Pembangunan kode step-by-step |

---

📅 **Terakhir diupdate:** 6 Juni 2026
