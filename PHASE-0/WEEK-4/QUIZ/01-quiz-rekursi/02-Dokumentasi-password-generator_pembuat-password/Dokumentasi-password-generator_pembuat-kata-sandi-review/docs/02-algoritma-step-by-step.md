# 🧠 Algoritma Step-by-Step: Algoritma Tahan Lupa

### ✨ _Setiap langkah dijelaskan dengan "Kenapa" + Contoh Angka Konkret_

> 🎯 **Tujuan:** Membangun pemahaman algoritma yang mendalam dan tahan lupa melalui penjelasan reasoning di balik setiap keputusan teknis, bukan sekadar hafalan sintaks

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 1️⃣ | [Algoritma changeVocals](#change-vocals) | Deteksi & geser huruf vokal dengan ASCII |
| 2️⃣ | [Algoritma reverseWord](#reverse-word) | Pembalikan urutan karakter |
| 3️⃣ | [Algoritma setLowerUpperCase](#lower-upper) | Penukaran case huruf |
| 4️⃣ | [Algoritma removeSpaces](#remove-spaces) | Penghapusan spasi |
| 5️⃣ | [Algoritma passwordGenerator](#password-generator) | Orkestrator dengan guard clause |

---

<a name="change-vocals"></a>
## 1️⃣ Algoritma `changeVocals`: Deteksi & Geser Vokal

### 🎯 Tujuan Fungsi
Menerima string, mencari setiap huruf vokal (`a, i, u, e, o, A, I, U, E, O`), dan menggantinya dengan huruf alfabet **tepat setelah huruf vokal tersebut**. Konsonan dibiarkan utuh.

### 🗺️ Mental Model
```
🔍 Inspector Vokal
Tugas: Periksa setiap huruf satu per satu
  ↓
❓ Apakah ini vokal?
  ├─ ✅ YA  → Geser +1 di alfabet → Simpan hasil
  └─ ❌ NO  → Biarkan apa adanya → Simpan apa adanya
```

---

### 📋 Langkah Algoritma (dengan Reasoning)

#### **[PERSIAPAN] Buat Daftar Vokal**

**🤔 Kenapa?**  
Daripada menulis `if (char === 'a' || char === 'i' || char === 'u' ...)` yang sangat panjang dan repetitif, lebih elegan menyimpan semua vokal dalam satu string lalu menggunakan method `.includes()` untuk mengecek keanggotaan.

**💻 Implementasi:**
```javascript
const vocals = 'aiueoAIUEO';
```

**🔢 Contoh Konkret:**  
Jika kita cek `vocals.includes('e')` → `true`  
Jika kita cek `vocals.includes('x')` → `false`

---

#### **[LANGKAH 1] Iterasi Setiap Karakter**

**🤔 Kenapa?**  
String manipulation di JavaScript memerlukan akses per-karakter. Kita harus "berjalan" dari karakter pertama hingga terakhir untuk memeriksa dan memodifikasi masing-masing.

**💻 Implementasi:**
```javascript
for (const char of str) {
  // Proses setiap char
}
```

**🔢 Contoh Konkret:**  
Input: `"Alexei"`  
Iterasi akan mengunjungi: `'A'` → `'l'` → `'e'` → `'x'` → `'e'` → `'i'`

---

#### **[LANGKAH 2] Deteksi Apakah Vokal**

**🤔 Kenapa?**  
Kita perlu memisahkan perlakuan antara vokal (yang harus digeser) dengan konsonan (yang tetap).

**💻 Implementasi:**
```javascript
if (vocals.includes(char)) {
  // Ini vokal → proses geser
} else {
  // Ini konsonan → biarkan
}
```

**🔢 Contoh Konkret:**  
- Char `'A'` → `vocals.includes('A')` → `true` → masuk blok `if`
- Char `'l'` → `vocals.includes('l')` → `false` → masuk blok `else`

---

#### **[LANGKAH 3] Geser Huruf Vokal dengan ASCII**

**🤔 Kenapa?**  
Setiap karakter punya kode ASCII (angka). Huruf alfabet berurutan dalam ASCII: `A=65, B=66, C=67, ...` dan `a=97, b=98, c=99, ...`. Dengan menambah `+1` ke kode ASCII, kita otomatis mendapat "huruf berikutnya".

**💻 Implementasi:**
```javascript
const nextChar = String.fromCharCode(char.charCodeAt(0) + 1);
result += nextChar;
```

**🔢 Contoh Konkret:**  
Mari kita trace huruf `'e'`:
1. `char.charCodeAt(0)` → `101` (kode ASCII untuk 'e')
2. `101 + 1` → `102`
3. `String.fromCharCode(102)` → `'f'`
4. Hasil: `'e'` berubah jadi `'f'` ✅

Mari kita trace huruf `'A'`:
1. `char.charCodeAt(0)` → `65` (kode ASCII untuk 'A')
2. `65 + 1` → `66`
3. `String.fromCharCode(66)` → `'B'`
4. Hasil: `'A'` berubah jadi `'B'` ✅

---

#### **[LANGKAH 4] Simpan Konsonan Apa Adanya**

**🤔 Kenapa?**  
Requirement hanya menyuruh mengubah vokal. Konsonan harus tetap asli.

**💻 Implementasi:**
```javascript
else {
  result += char;
}
```

**🔢 Contoh Konkret:**  
Char `'l'` (konsonan) → langsung append ke `result` → `'l'` tetap `'l'`

---

### 🎬 Full Trace Contoh: "Alexei"

| Iterasi | Char | Vokal? | ASCII Awal | ASCII +1 | Hasil Char | Akumulasi `result` |
|---------|------|--------|------------|----------|------------|--------------------|
| 1 | `'A'` | ✅ Yes | 65 | 66 | `'B'` | `"B"` |
| 2 | `'l'` | ❌ No | — | — | `'l'` | `"Bl"` |
| 3 | `'e'` | ✅ Yes | 101 | 102 | `'f'` | `"Blf"` |
| 4 | `'x'` | ❌ No | — | — | `'x'` | `"Blfx"` |
| 5 | `'e'` | ✅ Yes | 101 | 102 | `'f'` | `"Blfxf"` |
| 6 | `'i'` | ✅ Yes | 105 | 106 | `'j'` | `"Blfxfj"` |

**Output Final:** `"Blfxfj"` ✅

> [!TIP]
> **Insight Pembelajaran:**  
> Kombinasi `charCodeAt()` dan `fromCharCode()` adalah teknik standar untuk manipulasi karakter berdasarkan urutan alfabet. Ini jauh lebih elegan daripada membuat mapping manual `{'a':'b', 'e':'f', ...}`.

---

<a name="reverse-word"></a>
## 2️⃣ Algoritma `reverseWord`: Pembalikan Urutan

### 🎯 Tujuan Fungsi
Membalik seluruh urutan string dari ujung belakang ke depan.

### 🗺️ Mental Model
```
"ABC" → ["A", "B", "C"] → ["C", "B", "A"] → "CBA"
 ↓       ↓                  ↓                ↓
String  Pecah jadi array   Balik array     Gabung lagi
```

---

### 📋 Langkah Algoritma (dengan Reasoning)

#### **[LANGKAH 1] Pecah String jadi Array Karakter**

**🤔 Kenapa?**  
JavaScript tidak punya method `.reverse()` untuk string, tapi **array** punya. Jadi kita harus ubah string → array dulu.

**💻 Implementasi:**
```javascript
str.split('')
```

**🔢 Contoh Konkret:**  
Input: `"Blfxfj"`  
Output: `["B", "l", "f", "x", "f", "j"]`

> [!NOTE]
> **Parameter `''` (empty string):**  
> `.split('')` dengan parameter string kosong akan memecah **per karakter**. Berbeda dengan `.split(' ')` yang memecah berdasarkan spasi.

---

#### **[LANGKAH 2] Balik Urutan Array**

**🤔 Kenapa?**  
Method `.reverse()` adalah built-in JavaScript yang efisien untuk membalik urutan elemen array. Tidak perlu membuat loop manual dari belakang.

**💻 Implementasi:**
```javascript
.reverse()
```

**🔢 Contoh Konkret:**  
Input: `["B", "l", "f", "x", "f", "j"]`  
Output: `["j", "f", "x", "f", "l", "B"]`

---

#### **[LANGKAH 3] Gabung Array jadi String**

**🤔 Kenapa?**  
Kita butuh return string, bukan array. Method `.join('')` menggabungkan semua elemen array jadi satu string tanpa pemisah.

**💻 Implementasi:**
```javascript
.join('')
```

**🔢 Contoh Konkret:**  
Input: `["j", "f", "x", "f", "l", "B"]`  
Output: `"jfxflB"`

---

### 🎬 Full Trace Contoh: "Blfxfj"

| Tahap | Bentuk Data | Nilai |
|-------|-------------|-------|
| Input | String | `"Blfxfj"` |
| Setelah `.split('')` | Array | `["B", "l", "f", "x", "f", "j"]` |
| Setelah `.reverse()` | Array (terbalik) | `["j", "f", "x", "f", "l", "B"]` |
| Setelah `.join('')` | String | `"jfxflB"` |

**Output Final:** `"jfxflB"` ✅

> [!TIP]
> **Method Chaining Elegance:**  
> Teknik `.split('').reverse().join('')` adalah **best practice** standar JavaScript untuk reverse string. Ini jauh lebih ringkas dan readable dibanding loop manual `for (let i = str.length - 1; i >= 0; i--)`.

---

<a name="lower-upper"></a>
## 3️⃣ Algoritma `setLowerUpperCase`: Penukaran Case

### 🎯 Tujuan Fungsi
Menukar ukuran huruf: huruf kapital → kecil, huruf kecil → kapital.

### 🗺️ Mental Model
```
🔀 Case Toggler
Untuk setiap huruf:
  ↓
❓ Apakah sekarang KAPITAL?
  ├─ ✅ YA  → Ubah jadi kecil
  └─ ❌ NO  → Ubah jadi kapital
```

---

### 📋 Langkah Algoritma (dengan Reasoning)

#### **[LANGKAH 1] Iterasi Setiap Karakter**

**🤔 Kenapa?**  
Karena setiap huruf harus diperiksa dan diubah case-nya secara individual.

**💻 Implementasi:**
```javascript
for (const char of str) {
  // Proses setiap char
}
```

**🔢 Contoh Konkret:**  
Input: `"jfxflB"`  
Iterasi: `'j'` → `'f'` → `'x'` → `'f'` → `'l'` → `'B'`

---

#### **[LANGKAH 2] Deteksi Case dengan Identitas Check**

**🤔 Kenapa?**  
Cara paling akurat untuk mengecek apakah huruf sedang kapital adalah membandingkannya dengan versi kapital dari dirinya sendiri. Jika **identik**, berarti ia memang kapital.

**💻 Implementasi:**
```javascript
if (char === char.toUpperCase()) {
  // Ini huruf kapital
} else {
  // Ini huruf kecil
}
```

**🔢 Contoh Konkret:**  
- Char `'B'`:
  - `'B'.toUpperCase()` → `'B'`
  - `'B' === 'B'` → `true` → Ini kapital!
  
- Char `'j'`:
  - `'j'.toUpperCase()` → `'J'`
  - `'j' === 'J'` → `false` → Ini kecil!

> [!IMPORTANT]
> **Edge Case Karakter Spesial:**  
> Untuk karakter non-huruf seperti spasi atau angka, `char.toUpperCase()` akan return dirinya sendiri (tidak berubah). Jadi `' ' === ' '.toUpperCase()` → `true`, dan spasi akan masuk blok "kapital" lalu di-lowercase (tetap spasi). Ini OK karena `.toLowerCase()` pada spasi tetap spasi.

---

#### **[LANGKAH 3] Toggle Case**

**🤔 Kenapa?**  
Jika huruf kapital, tukar jadi kecil. Jika huruf kecil, tukar jadi kapital.

**💻 Implementasi:**
```javascript
if (char === char.toUpperCase()) {
  result += char.toLowerCase();
} else {
  result += char.toUpperCase();
}
```

**🔢 Contoh Konkret:**  
- `'B'` (kapital) → `.toLowerCase()` → `'b'`
- `'j'` (kecil) → `.toUpperCase()` → `'J'`

---

### 🎬 Full Trace Contoh: "jfxflB"

| Iterasi | Char | `char.toUpperCase()` | Identik? | Case Awal | Hasil Toggle | Akumulasi `result` |
|---------|------|---------------------|----------|-----------|--------------|-------------------|
| 1 | `'j'` | `'J'` | ❌ No | kecil | `'J'` | `"J"` |
| 2 | `'f'` | `'F'` | ❌ No | kecil | `'F'` | `"JF"` |
| 3 | `'x'` | `'X'` | ❌ No | kecil | `'X'` | `"JFX"` |
| 4 | `'f'` | `'F'` | ❌ No | kecil | `'F'` | `"JFXF"` |
| 5 | `'l'` | `'L'` | ❌ No | kecil | `'L'` | `"JFXFL"` |
| 6 | `'B'` | `'B'` | ✅ Yes | kapital | `'b'` | `"JFXFLb"` |

**Output Final:** `"JFXFLb"` ✅

---

<a name="remove-spaces"></a>
## 4️⃣ Algoritma `removeSpaces`: Penghapusan Spasi

### 🎯 Tujuan Fungsi
Menghapus semua karakter spasi dari string.

### 🗺️ Mental Model
```
"A B C" → ["A", "B", "C"] → "ABC"
  ↓          ↓                ↓
String    Pecah per spasi   Gabung tanpa spasi
          (spasi hilang)
```

---

### 📋 Langkah Algoritma (dengan Reasoning)

#### **[LANGKAH 1] Pecah String Berdasarkan Spasi**

**🤔 Kenapa?**  
Ketika kita `.split(' ')` dengan parameter spasi, JavaScript akan "memotong" string di setiap spasi. Spasi itu sendiri **tidak masuk** ke dalam array hasil. Jadi spasi otomatis tereliminasi.

**💻 Implementasi:**
```javascript
str.split(' ')
```

**🔢 Contoh Konkret:**  
Input: `"JFXFLb JFGRF"` (ada 1 spasi di tengah)  
Output: `["JFXFLb", "JFGRF"]` (spasi sudah tidak ada!)

---

#### **[LANGKAH 2] Gabung Array Tanpa Separator**

**🤔 Kenapa?**  
Kita butuh string utuh tanpa spasi. Dengan `.join('')` (parameter empty string), semua elemen array akan langsung bersatu tanpa pemisah apapun.

**💻 Implementasi:**
```javascript
.join('')
```

**🔢 Contoh Konkret:**  
Input: `["JFXFLb", "JFGRF"]`  
Output: `"JFXFLbJFGRF"` (no space!)

---

### 🎬 Full Trace Contoh: "VPNVGBRd JFGRFs"

| Tahap | Bentuk Data | Nilai |
|-------|-------------|-------|
| Input | String | `"VPNVGBRd JFGRFs"` |
| Setelah `.split(' ')` | Array | `["VPNVGBRd", "JFGRFs"]` |
| Setelah `.join('')` | String | `"VPNVGBRdJFGRFs"` |

**Output Final:** `"VPNVGBRdJFGRFs"` ✅

> [!CAUTION]
> **Anti-Pattern: Redundansi Method**  
> Jangan lakukan ini: `str.split(' ').join('').replaceAll(' ', '')`.  
> Setelah `.split(' ').join('')`, spasi sudah 100% hilang. Menambahkan `.replaceAll(' ', '')` adalah **waste of CPU** karena tidak ada lagi spasi yang bisa diganti.

---

<a name="password-generator"></a>
## 5️⃣ Algoritma `passwordGenerator`: Orkestrator

### 🎯 Tujuan Fungsi
Memvalidasi panjang minimal input, lalu melewatkan data melalui 4 tahap transformasi secara berurutan.

### 🗺️ Mental Model
```
📥 Input: name
  ↓
🛡️ Guard: Apakah length >= 5?
  ├─ ❌ NO  → Return error message
  └─ ✅ YES → Lanjut ke pipeline
       ↓
    [changeVocals] → [reverseWord] → [setLowerUpperCase] → [removeSpaces]
       ↓                                                           ↓
    📤 Output: finalPassword
```

---

### 📋 Langkah Algoritma (dengan Reasoning)

#### **[LANGKAH 0] Guard Clause: Validasi Panjang**

**🤔 Kenapa?**  
Untuk menghemat resource. Jika input tidak valid (kurang dari 5 karakter), tidak ada gunanya menjalankan 4 fungsi transformasi. Langsung return error di awal.

**💻 Implementasi:**
```javascript
if (name.length < 5) {
  return 'Minimal karakter yang diinputkan adalah 5 karakter';
}
```

**🔢 Contoh Konkret:**  
- Input `"Alex"` → length = 4 → `4 < 5` → `true` → return error ❌
- Input `"Alexei"` → length = 6 → `6 < 5` → `false` → lanjut ✅

> [!TIP]
> **Guard Clause Best Practice:**  
> Selalu letakkan validasi di **baris paling atas** fungsi. Pisahkan dengan line break agar mata bisa dengan mudah membedakan blok validasi dengan blok eksekusi utama.

---

#### **[LANGKAH 1-4] Pipeline Transformasi**

**🤔 Kenapa?**  
Setiap fungsi pembantu sudah didesain untuk menerima string dan mengembalikan string. Kita tinggal "oper" hasil dari fungsi pertama ke fungsi kedua (assembly line).

**💻 Implementasi:**
```javascript
const changedVocals = changeVocals(name);
const reversedWord = reverseWord(changedVocals);
const caseSwapped = setLowerUpperCase(reversedWord);
const finalPassword = removeSpaces(caseSwapped);

return finalPassword;
```

**🔢 Contoh Konkret:**  
Input: `"Alexei"`

| Variabel | Fungsi yang Dipanggil | Hasil |
|----------|----------------------|-------|
| `name` | (input awal) | `"Alexei"` |
| `changedVocals` | `changeVocals("Alexei")` | `"Blfxfj"` |
| `reversedWord` | `reverseWord("Blfxfj")` | `"jfxflB"` |
| `caseSwapped` | `setLowerUpperCase("jfxflB")` | `"JFXFLb"` |
| `finalPassword` | `removeSpaces("JFXFLb")` | `"JFXFLb"` |

**Output Final:** `"JFXFLb"` ✅

---

### 🎬 Full Trace Contoh: "Sergei Dragunov"

| Tahap | Variabel | Nilai |
|-------|----------|-------|
| Input | `name` | `"Sergei Dragunov"` |
| Guard | Cek length | 15 >= 5 ✅ Pass |
| Tahap 1 | `changedVocals` | `"Sfrgfj Drbgvnpv"` |
| Tahap 2 | `reversedWord` | `"vpnvgbrD jfgrfS"` |
| Tahap 3 | `caseSwapped` | `"VPNVGBRd JFGRFs"` |
| Tahap 4 | `finalPassword` | `"VPNVGBRdJFGRFs"` |

**Output Final:** `"VPNVGBRdJFGRFs"` ✅

---

## 💡 Key Insights & Takeaways

### 1️⃣ Algoritma = Reasoning, Bukan Hafalan

Setiap langkah algoritma di atas dilengkapi dengan:
- **Label Peran** — "Deteksi Vokal", "Toggle Case", dst (bukan "Loop 1", "Loop 2")
- **Penjelasan Kenapa** — Alasan di balik keputusan teknis
- **Contoh Angka Konkret** — Trace manual dengan input nyata

Dengan format ini, algoritma menjadi **tahan lupa** karena Anda memahami **logika**, bukan sekadar **sintaks**.

### 2️⃣ ASCII Manipulation is Powerful

`charCodeAt()` + `fromCharCode()` adalah teknik standar untuk:
- Menggeser huruf dalam alfabet
- Caesar cipher
- ROT13 encoding
- Dan berbagai cipher sederhana lainnya

### 3️⃣ Method Chaining = Readability

Teknik seperti `.split('').reverse().join('')` adalah **idiom JavaScript** yang sangat umum. Programmer senior langsung recognize pattern ini tanpa perlu membaca komentar.

### 4️⃣ Guard Clause = Performance

Validasi di awal menghemat resource dan membuat kode lebih maintainable. Jika ada 10 tahap proses dan validasi di tahap 10, semua proses 1-9 jadi sia-sia jika input invalid.

---

## 🧭 Navigasi

| Link | Deskripsi |
|------|-----------|
| [⬅️ Prev: Analisis Pola](./01-analisis-pola.md) | Visualisasi transformasi data |
| [⬆️ Kembali ke README](../README.md) | Halaman utama dokumentasi |
| [➡️ Next: Blueprint & Naming](./03-blueprint-naming.md) | Kerangka kode + kamus variabel |

---

📅 **Terakhir diupdate:** 6 Juni 2026
