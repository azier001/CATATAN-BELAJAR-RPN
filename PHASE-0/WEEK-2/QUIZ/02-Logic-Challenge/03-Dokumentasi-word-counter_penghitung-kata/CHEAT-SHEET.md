# 📋 CHEAT SHEET — Word Counter (Penghitung Kata)

> **Rangkuman cepat** dari seluruh dokumentasi `countWords` — siap pakai untuk review, ujian, atau interview.

---

## 1️⃣ Masalah Inti

```
❌  Hitung spasi + 1 → GAGAL di banyak kasus
✅  Deteksi TRANSISI masuk kata baru → SELALU BENAR
```

| Input              | Spasi + 1 | Jawaban Benar |
| :----------------- | :-------: | :-----------: |
| `"I have a dream"` |   4 ✅    |       4       |
| `"hello  world"`   |   3 ❌    |       2       |
| `"  hello  "`      |   4 ❌    |       1       |
| `""`               |   1 ❌    |       0       |

---

## 2️⃣ Tiga Aturan Emas

```
🎯 Aturan 1 → Spasi di awal/akhir BUKAN pemisah kata  → pakai .trim()
🎯 Aturan 2 → Spasi ganda = SATU pemisah              → deteksi transisi
🎯 Aturan 3 → String kosong / hanya spasi = 0 kata     → validasi length
```

---

## 3️⃣ Empat Pendekatan Solusi

### ⭐ A. State/Flag (REKOMENDASI UTAMA)

```javascript
const countWords = (sentence) => {
  const trimmedSentence = sentence.trim();
  if (trimmedSentence.length === 0) return 0;

  let wordCount = 0;
  let isInsideWord = false;

  for (let i = 0; i < trimmedSentence.length; i++) {
    if (trimmedSentence[i] !== ' ') {
      if (!isInsideWord) {   // transisi LUAR → DALAM
        wordCount++;
        isInsideWord = true;
      }
    } else {
      isInsideWord = false;  // keluar kata
    }
  }

  return wordCount;
};
```

**Cara kerja:** Baca karakter satu-satu. Kata baru = karakter bukan spasi DAN sebelumnya di luar kata.

```
String:  [  ] [  ] [ h ] [ e ] [ l ] [ l ] [ o ] [  ] [  ] [ w ] [ o ] [ r ] [ l ] [ d ]
State:   OUT  OUT   IN    IN    IN    IN    IN   OUT  OUT   IN    IN    IN    IN    IN
                ↑                                            ↑
             MASUK! count=1                              MASUK! count=2
```

---

### B. Split Regex

```javascript
const countWords = (sentence) => {
  const trimmedSentence = sentence.trim();
  if (trimmedSentence.length === 0) return 0;
  return trimmedSentence.split(/\s+/).length;
};
```

**Cara kerja:** Belah string di setiap kelompok whitespace, hitung potongan array.

---

### C. Transisi (Spasi → Huruf)

```javascript
function countWords(sentence) {
  const trimmedSentence = sentence.trim();
  if (trimmedSentence.length === 0) return 0;

  let wordCount = 1; // kata pertama pasti ada (sudah trim & non-empty)

  for (let i = 0; i < trimmedSentence.length; i++) {
    if (trimmedSentence[i] === ' ' && trimmedSentence[i + 1] !== ' ') {
      wordCount++;
    }
  }

  return wordCount;
}
```

---

### D. Match Regex (Paling Singkat)

```javascript
function countWords(sentence) {
  const matches = sentence.trim().match(/\S+/g);
  return matches ? matches.length : 0;
}
```

One-liner:
```javascript
const countWords = s => s.trim().match(/\S+/g)?.length || 0;
```

---

## 4️⃣ Tabel Perbandingan Cepat

| Aspek           | State/Flag ⭐ | Split Regex | Transisi | Match Regex |
| :-------------- | :----------: | :---------: | :------: | :---------: |
| Baris kode      |     ~15      |     ~5      |   ~12    |     ~3      |
| Readability     |    ⭐⭐⭐⭐⭐   |   ⭐⭐⭐⭐   |  ⭐⭐⭐  |    ⭐⭐     |
| Memory (Space)  |  **O(1)** 🟢 |   O(n) 🔴   | **O(1)** 🟢 |  O(n) 🔴   |
| Speed (Time)    |    O(n)      |    O(n)     |   O(n)   |    O(n)     |
| Perlu Regex?    |      ❌      |    ✅ Basic  |    ❌    |  ✅ Advanced |
| Cocok untuk     |  Interview,  |   Quick     | Big Data,| Code Golf,  |
|                 |  Production  |   Script    | Embedded | One-liner   |

---

## 5️⃣ Gotchas & Jebakan ⚠️

### Gotcha #1: Jangan gabung pengecekan dalam satu `if`!

```javascript
// ❌ SALAH — huruf di tengah kata masuk else → flag ter-reset!
if (char !== ' ' && !isInsideWord) {
  wordCount++;
  isInsideWord = true;
} else {
  isInsideWord = false; // BUG: 'e' di "he" masuk sini!
}

// ✅ BENAR — nested if
if (char !== ' ') {
  if (!isInsideWord) { wordCount++; isInsideWord = true; }
} else {
  isInsideWord = false;
}
```

### Gotcha #2: `.split(' ')` ≠ `.split(/\s+/)`

```javascript
'hello  world'.split(' ');    // ["hello", "", "world"]  → length 3 ❌
'hello  world'.split(/\s+/);  // ["hello", "world"]      → length 2 ✅
```

### Gotcha #3: `"".split(/\s+/)` menghasilkan `[""]` bukan `[]`

```javascript
''.split(/\s+/).length;  // 1 ❌ → wajib validasi kosong SEBELUM split!
```

---

## 6️⃣ Naming Convention

| Peran            | ❌ Hindari            | ✅ Gunakan        | Aturan                    |
| :--------------- | :-------------------- | :---------------- | :------------------------ |
| Nama fungsi      | `hitungJumlahKata`    | `countWords`      | `verb` + `noun`           |
| Parameter        | `s`, `str`, `kalimat` | `sentence`        | Noun deskriptif (EN)      |
| Hasil `.trim()`  | `formatted`, `clean`  | `trimmedSentence` | Adj spesifik + noun       |
| Counter          | `count`, `total`      | `wordCount`       | `what` + `Count`          |
| Boolean flag     | `flag`, `state`       | `isInsideWord`    | Prefix `is/has/can/should`|

---

## 7️⃣ Clean Code Checklist

```
✅ Meaningful Names    → kode self-documenting
✅ Single Responsibility → satu fungsi, satu tugas
✅ Early Return        → handle edge case dulu, kurangi nesting
✅ Consistent Formatting → brace style, spacing
✅ const over let      → immutable by default
✅ Nested if > gabung  → hindari gotcha #1
```

---

## 8️⃣ Langkah Algoritma (Versi Ujian)

```
1. NORMALISASI  → sentence.trim()        → buang spasi ujung
2. VALIDASI     → length === 0? return 0  → tangani kasus kosong
3. INISIALISASI → wordCount = 0           → siap hitung
                → isInsideWord = false    → mulai di luar kata
4. LOOP         → untuk setiap karakter:
                   ├── bukan spasi DAN di luar kata → wordCount++, masuk kata
                   ├── bukan spasi DAN di dalam kata → skip (kata sama)
                   └── spasi → keluar kata (flag = false)
5. RETURN       → wordCount
```

---

## 9️⃣ Test Cases Wajib

```javascript
// Standar
console.log(countWords('I have a dream'));                // 4
console.log(countWords('Never eat shredded wheat or cake')); // 6
console.log(countWords('A song to sing'));                // 4
console.log(countWords('I'));                             // 1
console.log(countWords('I believe I can code'));          // 5

// Edge Cases
console.log(countWords(''));             // 0  ← string kosong
console.log(countWords('   '));          // 0  ← hanya spasi
console.log(countWords('hello  world')); // 2  ← spasi ganda
console.log(countWords('  hello  '));    // 1  ← spasi awal/akhir
```

---

## 🔟 Regex Quick Reference

| Pattern  | Arti                                      | Contoh                            |
| :------- | :---------------------------------------- | :-------------------------------- |
| `\s`     | Whitespace (spasi, tab, newline)          |                                   |
| `\S`     | NON-whitespace                            |                                   |
| `+`      | Satu atau lebih                           | `\s+` = 1+ whitespace berturut    |
| `g`      | Global (cari semua match)                | `/\S+/g` = semua kelompok kata    |
| `.split(/\s+/)`  | Potong di setiap grup spasi      | `"a  b"` → `["a","b"]`           |
| `.match(/\S+/g)` | Ambil semua kelompok non-spasi   | `"a  b"` → `["a","b"]`           |

---

## 🏆 Rekomendasi Kapan Pakai Apa

```
🥇 State/Flag   → Belajar, Interview, Production, Tim
🥈 Split Regex   → Quick script, Prototyping, Internal tool
🥉 Transisi      → Big data, Embedded, Memory-critical
🎖️ Match Regex  → Code golf, One-liner, Personal script
```

---

> 📝 _Cheat sheet ini dirangkum dari 4 file dokumentasi lengkap di folder `03-Dokumentasi-word-counter_penghitung-kata`._
> _Untuk penjelasan detail, baca file README.md dan Part 1–3._
