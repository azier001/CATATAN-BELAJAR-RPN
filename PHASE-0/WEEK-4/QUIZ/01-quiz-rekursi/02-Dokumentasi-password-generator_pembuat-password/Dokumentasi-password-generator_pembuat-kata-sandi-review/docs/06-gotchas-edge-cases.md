# ⚠️ Gotchas & Edge Cases

### ✨ _Jebakan umum dan cara menghindarinya_

> 🎯 **Tujuan:** Mengidentifikasi potensi masalah dan anti-pattern yang sering dilakukan programmer saat mengimplementasikan password generator

---

<a name="daftar-isi"></a>
### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 1️⃣ | [Redundansi Method](#redundansi-method) | Menghindari operasi sia-sia |
| 2️⃣ | [ASCII Edge Cases](#ascii-edge-cases) | Batasan charCodeAt + 1 |
| 3️⃣ | [Let vs Const Misuse](#let-vs-const) | Kapan menggunakan yang tepat |
| 4️⃣ | [Guard Clause Position](#guard-clause) | Pentingnya validasi awal |
| 5️⃣ | [String Concatenation Performance](#string-concat) | Optimization consideration |

---

<a name="redundansi-method"></a>
## 1️⃣ Gotcha: Redundansi Method

### ❌ Anti-Pattern: Double Space Removal

```javascript
function removeSpaces(str) {
  // ❌ REDUNDAN!
  return str.split(' ').join('').replaceAll(' ', '');
}
```

### 🐛 Masalah

Setelah `.split(' ').join('')`, spasi sudah **100% hilang**. Menambahkan `.replaceAll(' ', '')` adalah:
- ❌ **Waste of CPU cycles** — operasi yang tidak perlu
- ❌ **Code smell** — menunjukkan kurang pemahaman cara kerja `.split()`
- ❌ **Redundan** — tidak ada spasi yang tersisa untuk di-replace

### 🔍 Penjelasan

```javascript
"Hello World"
  ↓ .split(' ')
["Hello", "World"]  // ← Spasi SUDAH HILANG di sini!
  ↓ .join('')
"HelloWorld"        // ← Tidak ada spasi lagi
  ↓ .replaceAll(' ', '')
"HelloWorld"        // ← Tidak ada yang berubah (sia-sia!)
```

### ✅ Solusi yang Benar

```javascript
function removeSpaces(str) {
  // ✅ CUKUP INI SAJA
  return str.split(' ').join('');
}
```

> [!CAUTION]
> **Performance Impact:**  
> Pada string kecil, impact negligible. Tapi pada string besar (ribuan karakter) atau loop yang dijalankan jutaan kali, redundansi ini bisa terukur. Prinsip: **jangan jalankan operasi yang tidak perlu**.

---

<a name="ascii-edge-cases"></a>
## 2️⃣ Gotcha: ASCII Edge Cases

### 🐛 Masalah: Huruf 'z' dan 'Z'

```javascript
// Apa yang terjadi jika input mengandung huruf 'z' atau 'Z'?
console.log(changeVocals("buzz")); // ❓
```

**Analysis:**
- `'z'.charCodeAt(0)` → `122`
- `122 + 1` → `123`
- `String.fromCharCode(123)` → `'{'` (bukan huruf!)

### 🔍 Root Cause

Challenge ini hanya memproses **vokal** (`a, i, u, e, o`). Konsonan termasuk `'z'` **tidak diubah**.

```javascript
function changeVocals(str) {
  const vocals = 'aiueoAIUEO';
  // ...
  if (vocals.includes(char)) {
    // Hanya vokal yang di-shift
  } else {
    // 'z' masuk sini → TIDAK di-shift
    result += char;
  }
}
```

**Hasil:**
```javascript
console.log(changeVocals("buzz")); // "bvzz" ✅
// 'u' → 'v' (vokal di-shift)
// 'z' → 'z' (konsonan tetap)
```

### ⚠️ Hypothetical Edge Case

**Jika** requirement berubah menjadi "shift **semua** huruf (termasuk konsonan)", maka:

```javascript
// ❌ BAHAYA: Akan menghasilkan karakter non-alfabet
function shiftAllChars(str) {
  let result = '';
  for (const char of str) {
    result += String.fromCharCode(char.charCodeAt(0) + 1);
  }
  return result;
}

console.log(shiftAllChars("xyz")); // "yz{" ❌
//                                      ↑ bukan huruf!
```

### ✅ Solusi untuk Shift All (jika dibutuhkan)

```javascript
function shiftAllCharsWithWrap(str) {
  let result = '';
  for (const char of str) {
    if (char >= 'a' && char <= 'z') {
      // Lowercase: wrap 'z' → 'a'
      result += char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
    } else if (char >= 'A' && char <= 'Z') {
      // Uppercase: wrap 'Z' → 'A'
      result += char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
    } else {
      // Non-alfabet: biarkan apa adanya
      result += char;
    }
  }
  return result;
}

console.log(shiftAllCharsWithWrap("xyz")); // "yza" ✅
```

> [!NOTE]
> **Untuk Challenge Ini:**  
> Edge case ini **tidak relevan** karena requirement jelas: hanya vokal yang di-shift. Tapi penting untuk diketahui jika requirement berubah di masa depan.

---

<a name="let-vs-const"></a>
## 3️⃣ Gotcha: Let vs Const Misuse

### ❌ Anti-Pattern: Gunakan `let` untuk Data yang Tidak Berubah

```javascript
function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  // ❌ Gunakan let, padahal tidak pernah di-reassign
  let changedVocals = changeVocals(name);
  let reversedWord = reverseWord(changedVocals);
  let caseSwapped = setLowerUpperCase(reversedWord);
  let finalPassword = removeSpaces(caseSwapped);

  return finalPassword;
}
```

### 🐛 Masalah

- `let` memberi **sinyal salah** bahwa variabel bisa berubah
- Membuka peluang **human error**: programmer lain bisa tanpa sengaja overwrite
- **Tidak immutable** — kurang safe

### ✅ Solusi yang Benar

```javascript
function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  // ✅ Gunakan const untuk data yang hanya di-assign sekali
  const changedVocals = changeVocals(name);
  const reversedWord = reverseWord(changedVocals);
  const caseSwapped = setLowerUpperCase(reversedWord);
  const finalPassword = removeSpaces(caseSwapped);

  return finalPassword;
}
```

### 📋 Decision Rule

| Skenario | Gunakan |
|----------|---------|
| Variabel di-assign sekali, tidak pernah berubah | `const` ✅ |
| Variabel akan di-reassign di kemudian hari | `let` |
| Loop iterator dengan `for...of` (no reassignment) | `const` |
| Loop counter dengan increment (`i++`) | `let` |
| Akumulator dalam loop (`result += ...`) | `let` |

> [!TIP]
> **Immutable by Default:**  
> Selalu mulai dengan `const`. Hanya upgrade ke `let` jika compiler complain tentang reassignment.

---

<a name="guard-clause"></a>
## 4️⃣ Gotcha: Guard Clause Position

### ❌ Anti-Pattern: Validasi di Akhir

```javascript
function passwordGenerator(name) {
  // ❌ Proses dulu, validasi belakangan
  const changedVocals = changeVocals(name);
  const reversedWord = reverseWord(changedVocals);
  const caseSwapped = setLowerUpperCase(reversedWord);
  const finalPassword = removeSpaces(caseSwapped);

  // Validasi di akhir (TERLAMBAT!)
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  return finalPassword;
}
```

### 🐛 Masalah

- ❌ **Waste of resources** — 4 fungsi sudah dijalankan sebelum tahu input invalid
- ❌ **CPU cycles terbuang** — proses yang sia-sia
- ❌ **Bad practice** — validasi harus di awal (fail fast principle)

### ✅ Solusi yang Benar

```javascript
function passwordGenerator(name) {
  // ✅ Guard Clause di paling atas (fail fast)
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  // Proses hanya berjalan jika input valid
  const changedVocals = changeVocals(name);
  const reversedWord = reverseWord(changedVocals);
  const caseSwapped = setLowerUpperCase(reversedWord);
  const finalPassword = removeSpaces(caseSwapped);

  return finalPassword;
}
```

### 🎯 Guard Clause Best Practices

1. **Letakkan di baris paling atas** fungsi
2. **Pisahkan dengan line break** untuk visual separation
3. **Return early** jika kondisi tidak terpenuhi
4. **Fail fast** — jangan biarkan invalid data masuk ke proses utama

> [!IMPORTANT]
> **Fail Fast Principle:**  
> Deteksi error sedini mungkin dan langsung stop eksekusi. Jangan biarkan data invalid melewati banyak proses baru ditolak di akhir.

---

<a name="string-concat"></a>
## 5️⃣ Gotcha: String Concatenation Performance

### ⚠️ Performance Consideration

```javascript
function changeVocals(str) {
  let result = '';
  const vocals = 'aiueoAIUEO';

  for (const char of str) {
    if (vocals.includes(char)) {
      result += String.fromCharCode(char.charCodeAt(0) + 1); // ← String concatenation
    } else {
      result += char; // ← String concatenation
    }
  }

  return result;
}
```

### 🐛 Potensi Masalah (Pada String Besar)

**Background:**  
String di JavaScript adalah **immutable**. Setiap kali `result += char`, JavaScript:
1. Membuat string baru di memory
2. Copy isi `result` lama + `char` baru
3. Assign ke `result`

**Impact:**
- Untuk string kecil (puluhan/ratusan karakter): **negligible**
- Untuk string besar (ribuan/jutaan karakter): **O(n²) time complexity**

### ✅ Solusi: Array sebagai Buffer (Jika Perlu Optimasi)

```javascript
function changeVocalsOptimized(str) {
  const result = []; // ← Gunakan array sebagai buffer
  const vocals = 'aiueoAIUEO';

  for (const char of str) {
    if (vocals.includes(char)) {
      result.push(String.fromCharCode(char.charCodeAt(0) + 1));
    } else {
      result.push(char);
    }
  }

  return result.join(''); // ← Join sekali di akhir
}
```

**Keuntungan:**
- Array `.push()` adalah O(1) amortized
- `.join()` hanya sekali di akhir → O(n) total
- Lebih efisien untuk string besar

### 🎯 Kapan Perlu Optimasi?

```
📊 Decision Tree:

❓ Apakah input string biasanya > 10,000 karakter?
├─ ❌ NO  → Pakai string concatenation biasa (lebih readable)
└─ ✅ YES → Pakai array buffer (lebih performant)

❓ Apakah fungsi ini dipanggil jutaan kali per detik?
├─ ❌ NO  → Pakai string concatenation biasa
└─ ✅ YES → Pakai array buffer + benchmark untuk confirm
```

> [!NOTE]
> **Untuk Challenge Ini:**  
> Input adalah nama orang (max ~50 karakter). String concatenation biasa **lebih dari cukup**. Optimasi prematur adalah root of all evil!

---

## 💡 Summary: Checklist Anti-Pattern

Sebelum submit/push kode, cek apakah Anda melakukan ini:

- [ ] ❌ Redundansi method (seperti double `.replaceAll()`)
- [ ] ❌ Menggunakan `let` untuk variabel yang tidak pernah di-reassign
- [ ] ❌ Guard clause tidak di posisi teratas
- [ ] ❌ Validasi dilakukan di akhir proses (bukan di awal)
- [ ] ❌ Bad naming (seperti `tahap1`, `temp`, `x`, `result2`)
- [ ] ❌ Tidak ada line break antara guard clause dan main logic
- [ ] ❌ Optimasi prematur tanpa benchmark (kecuali tahu pasti bottleneck)

Jika semua ❌ tidak ada, berarti kode Anda **clean**! ✅

---

## 🎓 Lessons Learned

### 1️⃣ Understand Your Tools

Memahami cara kerja method bawaan (`split()`, `join()`, `replace()`) mencegah redundansi dan bug.

### 2️⃣ Immutable by Default

`const` adalah pilihan default. `let` hanya untuk kasus spesifik yang butuh reassignment.

### 3️⃣ Fail Fast

Validasi di awal menghemat resource dan membuat debugging lebih mudah.

### 4️⃣ Premature Optimization is Evil

Jangan optimasi sebelum tahu ada bottleneck. Readable code > premature optimization.

### 5️⃣ Edge Cases Matter

Selalu pikirkan: "Apa yang terjadi jika input edge case (empty string, karakter spesial, dll)?"

> [!TIP]
> **Code Review Mindset:**  
> Saat menulis kode, bayangkan Anda akan code review kode sendiri besok. Apakah Anda akan approve? Jika ragu, refactor dulu sebelum commit.

---

## 🧭 Navigasi

| Link | Deskripsi |
|------|-----------|
| [⬅️ Prev: Code Versions](./05-code-versions.md) | Perbandingan lengkap semua versi |
| [⬆️ Kembali ke README](../README.md) | Halaman utama dokumentasi |

---

📅 **Terakhir diupdate:** 6 Juni 2026
