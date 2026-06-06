# 🔨 Implementasi Bertahap: Membangun Kode Step-by-Step

### ✨ _Dari blueprint kosong hingga kode working — satu fungsi satu waktu_

> 🎯 **Tujuan:** Membangun kode secara bertahap dan terstruktur, bukan langsung full code. Setiap fungsi dijelaskan proses pembuatannya dari nol hingga selesai.

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 1️⃣ | [Membangun changeVocals](#build-change-vocals) | Dari blueprint ke implementasi lengkap |
| 2️⃣ | [Membangun reverseWord](#build-reverse-word) | Method chaining untuk reverse string |
| 3️⃣ | [Membangun setLowerUpperCase](#build-lower-upper) | Toggle case dengan identitas check |
| 4️⃣ | [Membangun removeSpaces](#build-remove-spaces) | Eliminasi spasi dengan split-join |
| 5️⃣ | [Membangun passwordGenerator](#build-password-generator) | Orkestrator dengan guard clause |
| ✅ | [Testing & Verification](#testing) | Validasi dengan test cases |

---

<a name="build-change-vocals"></a>
## 1️⃣ Membangun `changeVocals`

### 🎯 Objective
Mengubah setiap huruf vokal menjadi huruf alfabet berikutnya menggunakan ASCII manipulation.

---

### 📝 Step 1: Mulai dari Blueprint

```javascript
function changeVocals(str) {
  // [BAGIAN 1] Persiapan
  // [BAGIAN 2] Iterasi
  // [BAGIAN 3] Deteksi
  // [BAGIAN 4] Transform
  // [BAGIAN 5] Return
}
```

---

### 📝 Step 2: Implementasi Persiapan

**Apa yang dibutuhkan?**
- Daftar vokal untuk pengecekan
- Variabel akumulator untuk menyimpan hasil

```javascript
function changeVocals(str) {
  let result = '';
  const vocals = 'aiueoAIUEO'; // Daftar huruf vokal
  
  // [BAGIAN 2] Iterasi
  // [BAGIAN 3] Deteksi
  // [BAGIAN 4] Transform
  // [BAGIAN 5] Return
}
```

> [!NOTE]
> **Kenapa `let` untuk `result`?**  
> Karena `result` akan di-update berkali-kali dalam loop (`result += ...`). Ini adalah salah satu case valid untuk `let`.

---

### 📝 Step 3: Implementasi Iterasi

```javascript
function changeVocals(str) {
  let result = '';
  const vocals = 'aiueoAIUEO';

  for (const char of str) {
    // [BAGIAN 3] Deteksi
    // [BAGIAN 4] Transform
  }

  // [BAGIAN 5] Return
}
```

---

### 📝 Step 4: Implementasi Deteksi & Transform

```javascript
function changeVocals(str) {
  let result = '';
  const vocals = 'aiueoAIUEO';

  for (const char of str) {
    if (vocals.includes(char)) {
      // Ini vokal → geser +1 di ASCII
      result += String.fromCharCode(char.charCodeAt(0) + 1);
    } else {
      // Ini konsonan → biarkan apa adanya
      result += char;
    }
  }

  // [BAGIAN 5] Return
}
```

---

### 📝 Step 5: Implementasi Return

```javascript
function changeVocals(str) {
  let result = '';
  const vocals = 'aiueoAIUEO';

  for (const char of str) {
    if (vocals.includes(char)) {
      result += String.fromCharCode(char.charCodeAt(0) + 1);
    } else {
      result += char;
    }
  }

  return result;
}
```

---

### ✅ Kode Final dengan Komentar

```javascript
function changeVocals(str) {
  let result = '';
  const vocals = 'aiueoAIUEO'; // Daftar huruf vokal yang akan dicek

  for (const char of str) {
    if (vocals.includes(char)) {
      // charCodeAt(0) mengambil nilai angka ASCII dari huruf tersebut
      // + 1 menggeser nilainya ke huruf selanjutnya
      // fromCharCode mengubah kembali angka tersebut menjadi karakter huruf
      result += String.fromCharCode(char.charCodeAt(0) + 1);
    } else {
      // Jika konsonan (tidak ada di variabel vocals), tambahkan apa adanya
      result += char;
    }
  }

  return result;
}
```

### 🧪 Quick Test

```javascript
console.log(changeVocals("Alexei")); // "Blfxfj" ✅
console.log(changeVocals("Hello"));  // "Hfllp"  ✅
```

> [!TIP]
> **Insight Pembelajaran:**  
> Penggunaan `vocals.includes(char)` jauh lebih elegan dibandingkan menulis `if (char === 'a' || char === 'i' || char === 'u' ...)` yang sangat panjang dan repetitif.

---

<a name="build-reverse-word"></a>
## 2️⃣ Membangun `reverseWord`

### 🎯 Objective
Membalik urutan string dari belakang ke depan menggunakan method chaining.

---

### 📝 Step 1: Mulai dari Blueprint

```javascript
function reverseWord(str) {
  // [BAGIAN 1] Method Chaining → split → reverse → join
  // [BAGIAN 2] Return
}
```

---

### 📝 Step 2: Implementasi Method Chaining

**Logika:**
1. `.split('')` → pecah string jadi array karakter
2. `.reverse()` → balik urutan array
3. `.join('')` → gabung array jadi string tanpa pemisah

```javascript
function reverseWord(str) {
  return str.split('').reverse().join('');
}
```

### ✅ Kode Final dengan Komentar

```javascript
function reverseWord(str) {
  // Method chaining: pecah → balik → gabung
  return str.split('').reverse().join('');
}
```

### 🧪 Quick Test

```javascript
console.log(reverseWord("Blfxfj")); // "jfxflB" ✅
console.log(reverseWord("Hello"));  // "olleH"  ✅
```

> [!TIP]
> **Method Chaining Best Practice:**  
> Teknik `.split('').reverse().join('')` adalah **idiom JavaScript** yang sangat umum untuk reverse string. Ini jauh lebih ringkas dan readable dibanding loop manual.

---

<a name="build-lower-upper"></a>
## 3️⃣ Membangun `setLowerUpperCase`

### 🎯 Objective
Menukar ukuran huruf: kapital → kecil, kecil → kapital.

---

### 📝 Step 1: Mulai dari Blueprint

```javascript
function setLowerUpperCase(str) {
  // [BAGIAN 1] Persiapan
  // [BAGIAN 2] Iterasi
  // [BAGIAN 3] Deteksi
  // [BAGIAN 4] Transform
  // [BAGIAN 5] Return
}
```

---

### 📝 Step 2: Implementasi Persiapan & Iterasi

```javascript
function setLowerUpperCase(str) {
  let result = '';

  for (const char of str) {
    // [BAGIAN 3] Deteksi
    // [BAGIAN 4] Transform
  }

  // [BAGIAN 5] Return
}
```

---

### 📝 Step 3: Implementasi Deteksi & Transform

**Trick:** Bandingkan `char` dengan `char.toUpperCase()`. Jika identik, berarti char sedang kapital.

```javascript
function setLowerUpperCase(str) {
  let result = '';

  for (const char of str) {
    if (char === char.toUpperCase()) {
      // Ini huruf kapital → ubah jadi kecil
      result += char.toLowerCase();
    } else {
      // Ini huruf kecil → ubah jadi kapital
      result += char.toUpperCase();
    }
  }

  // [BAGIAN 5] Return
}
```

---

### 📝 Step 4: Implementasi Return

```javascript
function setLowerUpperCase(str) {
  let result = '';

  for (const char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}
```

### ✅ Kode Final dengan Komentar

```javascript
function setLowerUpperCase(str) {
  let result = '';

  for (const char of str) {
    // Mengecek apakah karakter ini sedang dalam bentuk kapital
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      // Jika bukan kapital, berarti ia huruf kecil (atau karakter spesial)
      result += char.toUpperCase();
    }
  }

  return result;
}
```

### 🧪 Quick Test

```javascript
console.log(setLowerUpperCase("jfxflB")); // "JFXFLb" ✅
console.log(setLowerUpperCase("HeLLo")); // "hEllO"  ✅
```

> [!TIP]
> **Identitas Check Elegance:**  
> Logika `char === char.toUpperCase()` memberikan kepastian akurasi tinggi. Jika identik, berarti huruf sedang kapital. Simple dan powerful!

---

<a name="build-remove-spaces"></a>
## 4️⃣ Membangun `removeSpaces`

### 🎯 Objective
Menghapus semua karakter spasi dari string.

---

### 📝 Step 1: Mulai dari Blueprint

```javascript
function removeSpaces(str) {
  // [BAGIAN 1] Method Chaining → split berdasarkan spasi → join tanpa spasi
  // [BAGIAN 2] Return
}
```

---

### 📝 Step 2: Implementasi Split-Join

**Logika:**
1. `.split(' ')` → pecah string per spasi (spasi hilang dari hasil array)
2. `.join('')` → gabung array tanpa pemisah

```javascript
function removeSpaces(str) {
  return str.split(' ').join('');
}
```

### ✅ Kode Final dengan Komentar

```javascript
function removeSpaces(str) {
  // Menggunakan satu metode yang lugas dan pasti
  return str.split(' ').join('');
}
```

### 🧪 Quick Test

```javascript
console.log(removeSpaces("JFXFLb JFGRF")); // "JFXFLbJFGRF" ✅
console.log(removeSpaces("Hello World")); // "HelloWorld"  ✅
```

> [!CAUTION]
> **Anti-Pattern Warning:**  
> Jangan lakukan: `str.split(' ').join('').replaceAll(' ', '')`.  
> Setelah `.split(' ').join('')`, spasi sudah 100% hilang. Menambah `.replaceAll()` adalah redundansi yang membuang CPU cycles.

---

<a name="build-password-generator"></a>
## 5️⃣ Membangun `passwordGenerator`

### 🎯 Objective
Orkestrator yang memvalidasi input dan melewatkan data melalui 4 fungsi helper secara berurutan.

---

### 📝 Step 1: Mulai dari Blueprint

```javascript
function passwordGenerator(name) {
  // [BAGIAN 1] Guard Clause
  // [BAGIAN 2] Pipeline Stage 1
  // [BAGIAN 3] Pipeline Stage 2
  // [BAGIAN 4] Pipeline Stage 3
  // [BAGIAN 5] Pipeline Stage 4
  // [BAGIAN 6] Return
}
```

---

### 📝 Step 2: Implementasi Guard Clause

```javascript
function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  // [BAGIAN 2] Pipeline Stage 1
  // [BAGIAN 3] Pipeline Stage 2
  // [BAGIAN 4] Pipeline Stage 3
  // [BAGIAN 5] Pipeline Stage 4
  // [BAGIAN 6] Return
}
```

> [!IMPORTANT]
> **Line Break untuk Visual Separation:**  
> Berikan line break (baris kosong) setelah guard clause agar mata bisa dengan mudah membedakan blok validasi dengan blok eksekusi utama.

---

### 📝 Step 3: Implementasi Pipeline (Versi dengan Naming Buruk)

**Versi pertama** — kita akan pakai naming buruk dulu untuk menunjukkan masalahnya:

```javascript
function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  let tahap1 = changeVocals(name);
  let tahap2 = reverseWord(tahap1);
  let tahap3 = setLowerUpperCase(tahap2);
  let tahap4 = removeSpaces(tahap3);

  return tahap4;
}
```

**Masalah:**
- ❌ Nama variabel tidak deskriptif
- ❌ Tidak self-documenting
- ❌ Sulit debugging tanpa `console.log`

---

### 📝 Step 4: Refactor ke Naming yang Baik

```javascript
function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  let changedVocals = changeVocals(name);
  let reversedWord = reverseWord(changedVocals);
  let caseSwapped = setLowerUpperCase(reversedWord);
  let finalPassword = removeSpaces(caseSwapped);

  return finalPassword;
}
```

**Improvement:**
- ✅ Nama variabel deskriptif
- ✅ Self-documenting
- ✅ Mudah debugging

---

### 📝 Step 5: Upgrade ke `const` (Immutable)

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

**Kenapa `const`?**
- Setiap variabel hanya di-assign **sekali**
- Tidak ada re-assignment di kemudian hari
- `const` mencegah human error (tidak bisa overwrite)

---

### ✅ Kode Final dengan Komentar

```javascript
function passwordGenerator(name) {
  // Guard Clause: Cegah eksekusi jika input kurang dari 5 karakter
  // Dipisah dengan satu baris kosong (line break) agar mudah dibaca
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  // Proses Pipa Distribusi Data (Data Pipeline)
  const changedVocals = changeVocals(name);
  const reversedWord = reverseWord(changedVocals);
  const caseSwapped = setLowerUpperCase(reversedWord);
  const finalPassword = removeSpaces(caseSwapped);

  // Mengembalikan hasil pemrosesan tahap terakhir
  return finalPassword;
}
```

---

<a name="testing"></a>
## ✅ Testing & Verification

### 🧪 Test Cases

```javascript
// Test Case 1: Normal input dengan spasi
console.log(passwordGenerator('Sergei Dragunov')); 
// Expected: 'VPNVGBRdJFGRFs'
// Actual: 'VPNVGBRdJFGRFs' ✅

// Test Case 2: Normal input panjang
console.log(passwordGenerator('Dimitri Wahyudiputra')); 
// Expected: 'BRTVPJDVYHBwJRTJMJd'
// Actual: 'BRTVPJDVYHBwJRTJMJd' ✅

// Test Case 3: Normal input pendek (minimal valid)
console.log(passwordGenerator('Alexei')); 
// Expected: 'JFXFLb'
// Actual: 'JFXFLb' ✅

// Test Case 4: Edge case — input terlalu pendek
console.log(passwordGenerator('Alex')); 
// Expected: 'Minimal karakter yang diinputkan adalah 5 karakter'
// Actual: 'Minimal karakter yang diinputkan adalah 5 karakter' ✅
```

### ✅ Semua Test Pass! 🎉

---

## 📦 Kode Lengkap V1 (Prosedural)

Ini adalah **Versi 1** — kode working lengkap dengan gaya prosedural:

```javascript
// 1. Mengganti huruf vokal
function changeVocals(str) {
  let result = '';
  const vocals = 'aiueoAIUEO';
  for (const char of str) {
    if (vocals.includes(char)) {
      result += String.fromCharCode(char.charCodeAt(0) + 1);
    } else {
      result += char;
    }
  }
  return result;
}

// 2. Membalikkan kata
function reverseWord(str) {
  return str.split('').reverse().join('');
}

// 3. Menukar ukuran huruf
function setLowerUpperCase(str) {
  let result = '';
  for (const char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

// 4. Menghapus spasi
function removeSpaces(str) {
  return str.split(' ').join('');
}

// 5. Fungsi Utama (Orkestrator)
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

> [!NOTE]
> **Versi 1 Status:**  
> Kode ini **working** dan **sudah clean** (naming bagus + const). Tapi masih ada ruang untuk evolusi ke gaya yang lebih deklaratif (functional programming). Lihat pembahasan evolusi di file berikutnya.

---

## 💡 Key Takeaways

### 1️⃣ Pendekatan Bertahap > Langsung Full Code

Membangun fungsi step-by-step dari blueprint:
- ✅ Lebih mudah di-track progress
- ✅ Lebih mudah di-debug jika ada error
- ✅ Lebih mudah dipahami alur logikanya

### 2️⃣ Kekuatan Modularitas

Memecah masalah kompleks jadi 4 fungsi kecil:
- ✅ Setiap fungsi fokus pada 1 tanggung jawab (SRP)
- ✅ Mudah ditest secara independen
- ✅ Mudah dimodifikasi tanpa affect fungsi lain

### 3️⃣ Naming Matters

Evolusi naming dari `tahap1` → `changedVocals`:
- ✅ Self-documenting code
- ✅ Tidak butuh komentar berlebihan
- ✅ Mudah maintenance di masa depan

### 4️⃣ Immutable by Default

Upgrade dari `let` ke `const`:
- ✅ Mencegah re-assignment tidak sengaja
- ✅ Clearer intent
- ✅ Safer code

> 📚 **Lihat Perbandingan Lengkap:**  
> Semua versi kode dan analisis perbandingannya ada di **[📄 Code Versions](./05-code-versions.md)**

---

## 🧭 Navigasi

| Link | Deskripsi |
|------|-----------|
| [⬅️ Prev: Blueprint & Naming](./03-blueprint-naming.md) | Kerangka kode + kamus variabel |
| [⬆️ Kembali ke README](../README.md) | Halaman utama dokumentasi |
| [➡️ Next: Code Versions](./05-code-versions.md) | Perbandingan V1 vs V2 vs V3 |

---

📅 **Terakhir diupdate:** 6 Juni 2026
