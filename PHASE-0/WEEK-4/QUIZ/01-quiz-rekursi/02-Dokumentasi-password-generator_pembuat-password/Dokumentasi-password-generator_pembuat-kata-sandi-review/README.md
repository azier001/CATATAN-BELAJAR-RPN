# 🔐 Password Generator Challenge

### ✨ _Transformasi string menjadi password melalui 4 tahap pemrosesan berurutan_

> 🎯 **Tujuan:** Memahami konsep modular programming, method chaining, dan clean code dalam JavaScript melalui challenge manipulasi string bertahap

---

## 📖 Deskripsi Challenge

Challenge **Password Generator** adalah sebuah case study yang melatih kemampuan:
- **String Manipulation** — mengubah karakter berdasarkan pola tertentu
- **Modular Architecture** — memecah masalah kompleks menjadi fungsi-fungsi kecil
- **Data Pipeline** — melewatkan data melalui rangkaian transformasi (assembly line)
- **Clean Code Principles** — naming convention, immutability, readability

Program ini menerima input berupa nama (string), lalu mengubahnya menjadi password melalui **4 tahap transformasi** yang dijalankan secara berurutan.

---

## 🎯 Requirement Challenge

Diberikan 5 fungsi yang harus diimplementasikan:

```javascript
function changeVocals (str) {
  //code di sini
}

function reverseWord (str) {
  //code di sini
}

function setLowerUpperCase (str) {
  //code di sini
}

function removeSpaces (str) {
  //code di sini
}

function passwordGenerator (name) {
  //code di sini
}
```

### Aturan Transformasi (Harus Berurutan)

1. **Ganti Huruf Vokal** — Menggunakan `changeVocals()`
   - Huruf vokal diganti dengan huruf alfabet berikutnya
   - Aturan: `a→b`, `i→j`, `u→v`, `e→f`, `o→p` (case-sensitive: `A→B`, `I→J`, dst)
   - Konsonan tetap tidak berubah

2. **Balik Kata** — Menggunakan `reverseWord()`
   - Membalik urutan seluruh karakter dari belakang ke depan

3. **Tukar Case** — Menggunakan `setLowerUpperCase()`
   - Huruf besar → huruf kecil
   - Huruf kecil → huruf besar

4. **Hapus Spasi** — Menggunakan `removeSpaces()`
   - Menghilangkan semua karakter spasi

### Guard Clause

Fungsi `passwordGenerator` harus memvalidasi input:
- Jika `name.length < 5` → return `'Minimal karakter yang diinputkan adalah 5 karakter'`

---

## ✅ Test Cases

```javascript
console.log(passwordGenerator('Sergei Dragunov')); 
// Output: 'VPNVGBRdJFGRFs'

console.log(passwordGenerator('Dimitri Wahyudiputra')); 
// Output: 'BRTVPJDVYHBwJRTJMJd'

console.log(passwordGenerator('Alexei')); 
// Output: 'JFXFLb'

console.log(passwordGenerator('Alex')); 
// Output: 'Minimal karakter yang diinputkan adalah 5 karakter'
```

---

## 🗺️ Roadmap Dokumentasi

Dokumentasi ini disusun berdasarkan **7 Pilar Kualitas** untuk memastikan pemahaman mendalam dari analisis hingga implementasi final.

### 📑 Daftar Isi

| No | Dokumen | Pilar | Deskripsi |
|----|---------|-------|-----------|
| 🔍 | [Analisis Pola](./docs/01-analisis-pola.md) | Pilar 1 | Visualisasi transformasi data sebelum coding |
| 🧠 | [Algoritma Step-by-Step](./docs/02-algoritma-step-by-step.md) | Pilar 2 | Algoritma tahan lupa dengan penjelasan "kenapa" + contoh konkret |
| 🗺️ | [Blueprint & Naming](./docs/03-blueprint-naming.md) | Pilar 3, 6 | Kerangka kode + kamus variabel (❌ vs ✅) |
| 🔨 | [Implementasi Bertahap](./docs/04-implementasi-bertahap.md) | Pilar 4 | Pembangunan kode step-by-step dari nol |
| 📦 | [Code Versions](./docs/05-code-versions.md) | Pilar 5 | Perbandingan lengkap V1 (Prosedural) vs V2 (Deklaratif) vs V3 (Clean Naming) |
| ⚠️ | [Gotchas & Edge Cases](./docs/06-gotchas-edge-cases.md) | Pilar 7 | Jebakan umum dan cara menghindarinya |

---

## 🚀 Quick Start

Jika Anda ingin langsung melihat kode final:

**Versi Terbaik (V3 — Clean Naming + Declarative):**

```javascript
const changeVocals = (str) => {
  return str.replace(/[aiueo]/gi, (char) =>
    String.fromCharCode(char.charCodeAt(0) + 1),
  );
};

const reverseWord = (str) => {
  return str.split('').reverse().join('');
};

const setLowerUpperCase = (str) => {
  return str
    .split('')
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
    )
    .join('');
};

const removeSpaces = (str) => {
  return str.split(' ').join('');
};

const passwordGenerator = (name) => {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  const changedVocals = changeVocals(name);
  const reversedWord = reverseWord(changedVocals);
  const caseSwapped = setLowerUpperCase(reversedWord);
  const finalPassword = removeSpaces(caseSwapped);

  return finalPassword;
};
```

> [!TIP]
> **Rekomendasi Belajar:**  
> Jangan langsung copy kode di atas! Ikuti roadmap dokumentasi untuk memahami **proses berpikir** di balik setiap keputusan desain. Ini akan membuat Anda menjadi programmer yang lebih matang.

---

## 🎓 Konsep Yang Dipelajari

| Konsep | Penerapan |
|--------|-----------|
| **Modular Programming** | Memecah 1 fungsi besar menjadi 4 fungsi kecil (Single Responsibility) |
| **Data Pipeline** | Output fungsi pertama = input fungsi kedua (assembly line) |
| **Method Chaining** | `.split().reverse().join()` untuk operasi bertingkat |
| **Regular Expression** | `/[aiueo]/gi` untuk pattern matching vokal |
| **Functional Programming** | `.map()` + arrow function + ternary operator |
| **ASCII Manipulation** | `charCodeAt()` + `fromCharCode()` untuk geser huruf |
| **Guard Clause** | Validasi awal untuk mencegah eksekusi tidak perlu |
| **Naming Convention** | Variabel deskriptif (`reversedWord` vs `step2`) |
| **Immutability** | Menggunakan `const` untuk data yang tidak berubah |

---

## 📚 Resource Tambahan

### Mulai Belajar Dari Sini

1. **[📄 Analisis Pola](./docs/01-analisis-pola.md)** — Pahami dulu transformasi datanya sebelum coding
2. **[📦 Code Versions](./docs/05-code-versions.md)** — Lihat evolusi kode dari V1 hingga V3

### Referensi Teknis

- [MDN: String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [MDN: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
- [Regular Expression Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

---

## 🧭 Navigasi

| Link | Deskripsi |
|------|-----------|
| [➡️ Mulai: Analisis Pola](./docs/01-analisis-pola.md) | Langkah pertama — visualisasi transformasi |
| [📦 Lihat Semua Versi Kode](./docs/05-code-versions.md) | Perbandingan lengkap 3 versi implementasi |

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **6 Juni 2026** berdasarkan sesi mentoring langsung menggunakan JavaScript (Node.js). Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow `/mentor-challenge` dengan format visual `/setup-doc`.

---

📅 **Terakhir diupdate:** 6 Juni 2026
