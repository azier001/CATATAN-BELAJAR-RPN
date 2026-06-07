# 🍽️ Makan Terus Rekursif Challenge

### ✨ _Menghitung jumlah pesanan customer di restoran AYCE menggunakan pendekatan rekursif_

> 🎯 **Tujuan:** Memahami cara memecahkan masalah perhitungan repetitif menggunakan fungsi rekursif, menemukan base case yang tepat, dan mengeksplorasi berbagai alternatif solusi dari rekursif standar hingga optimasi matematika murni

---

## 📖 Deskripsi Challenge

Challenge **Makan Terus Rekursif** adalah sebuah case study yang melatih kemampuan:
- **Rekursif Thinking** — memecahkan masalah repetitif dengan fungsi yang memanggil dirinya sendiri
- **Base Case Discovery** — menemukan kondisi berhenti yang tepat
- **Accumulation Pattern** — pola akumulasi hasil menggunakan `1 + fungsi()`
- **Performance Analysis** — membandingkan efisiensi berbagai pendekatan (rekursif, iteratif, matematika)

Program ini menerima input berupa waktu (dalam menit), lalu menghitung **berapa kali customer bisa memesan makanan** di restoran AYCE sebelum waktunya habis.

---

## 🎯 Requirement Challenge

Diberikan sebuah fungsi yang harus diimplementasikan:

```javascript
function makanTerusRekursif(waktu) {
  // you can only write your code here!
}
```

### Aturan Challenge

**Skenario:**  
Customer sedang makan di restoran **AYCE (All You Can Eat)**. Dia akan terus makan sampai waktu yang diberikan restaurant habis.

**Mekanika:**
1. Setiap kali customer **memesan/mengambil makanan** dan memakannya → waktu berkurang **15 menit**
2. Customer **masih bisa memesan** selama waktunya **belum 0**
3. Proses berlanjut sampai waktu habis
```

**Parameter:**
- `waktu` (number): Total waktu yang diberikan restaurant dalam menit

**Return:**
- (number): Jumlah kali customer berhasil memesan/mengambil makanan

**Constraint:**
- ⚠️ **Wajib menggunakan rekursif** (tidak boleh pakai loop)

---

## ✅ Test Cases

```javascript
console.log(makanTerusRekursif(66));  // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90));  // 6
console.log(makanTerusRekursif(10));  // 1
console.log(makanTerusRekursif(0));   // 0
```

**Contoh Perhitungan Manual:**

```
Input: 45 menit

Pesanan 1: 45 - 15 = 30 (masih ada waktu)
Pesanan 2: 30 - 15 = 15 (masih ada waktu)
Pesanan 3: 15 - 15 = 0  (waktu habis, tapi pesanan ini tetap masuk)

Output: 3 pesanan
```

> [!IMPORTANT]
> **Key Insight:** Customer bisa memesan **selama waktunya belum 0**. Ini artinya jika waktu tersisa **1 menit** pun, customer tetap bisa memesan (dan waktu akan jadi negatif setelah makan).

---

## 🗺️ Roadmap Dokumentasi

Dokumentasi ini disusun berdasarkan **7 Pilar Kualitas** untuk memastikan pemahaman mendalam dari analisis hingga implementasi final.

### 📑 Daftar Isi

| No | Dokumen | Pilar | Deskripsi |
|----|---------|-------|-----------|
| 🔍 | [Analisis Pola](./docs/01-analisis-pola.md) | Pilar 1 | Tabel breakdown + visualisasi pergerakan waktu |
| 🗺️ | [Blueprint & Naming](./docs/02-blueprint-kode.md) | Pilar 2, 3, 6 | Algoritma tahan lupa + kerangka kode + kamus variabel |
| 🔨 | [Implementasi Bertahap](./docs/03-implementasi-bertahap.md) | Pilar 4 | Step-by-step coding (base case → recursive case) |
| ⚠️ | [Gotchas & Edge Cases](./docs/04-gotchas.md) | Pilar 7 | Jebakan umum + edge cases yang perlu diwaspadai |
| 📦 | [Code Versions](./docs/code-versions.md) | Pilar 5 | Perbandingan lengkap 5 versi implementasi |

---

## 🚀 Quick Start

Jika Anda ingin langsung melihat kode final:

**Versi Terbaik (V2 — Ternary Implicit Return):**

```javascript
const makanTerusRekursif = (waktu) => 
  waktu <= 0 ? 0 : 1 + makanTerusRekursif(waktu - 15);
```

**Cara Menjalankan:**

```bash
# Buat file JavaScript
touch makanTerus.js

# Copy kode di atas ke dalam file

# Tambahkan test cases
echo "console.log(makanTerusRekursif(66));" >> makanTerus.js

# Jalankan
node makanTerus.js
```

**Expected Output:**
```
5
7
6
1
0
```

> [!TIP]
> **Rekomendasi Belajar:**  
> Jangan langsung copy kode di atas! Ikuti roadmap dokumentasi untuk memahami **proses berpikir** di balik setiap keputusan desain. Ini akan membuat Anda menjadi programmer yang lebih matang.

---

## 🎓 Konsep Yang Dipelajari

| Konsep | Penerapan |
|--------|-----------|
| **Base Case** | Syarat berhenti rekursif (`waktu <= 0`) |
| **Recursive Case** | Pemanggilan fungsi ke dirinya sendiri dengan parameter berubah |
| **Accumulation Pattern** | Pola `1 + fungsi()` untuk menghitung total |
| **Ternary Operator** | Refactoring if-return jadi 1 baris |
| **Implicit Return** | Arrow function tanpa `{}` dan `return` |
| **Tail Call Optimization** | Optimasi rekursif dengan akumulator parameter |
| **Time Complexity** | Analisis O(n) vs O(1) |
| **Guard Clause** | Validasi di awal fungsi |

---

## 📚 Perbandingan Semua Versi

Challenge ini memiliki **5 pendekatan berbeda** dengan tradeoff masing-masing:

| Versi | Pendekatan | Kompleksitas | Readability | Best For |
|-------|------------|--------------|-------------|----------|
| V1 | Rekursif Standard (If-Return) | O(n) | ⭐⭐⭐⭐⭐ | Learning |
| V2 | Rekursif Ternary Implicit | O(n) | ⭐⭐⭐⭐ | Clean code |
| V3 | Tail Call Optimization (TCO) | O(n)* | ⭐⭐⭐ | Memory optimization |
| V4 | Iteratif (While Loop) | O(n) | ⭐⭐⭐⭐ | Production safe |
| V5 | Matematika Murni (Math.ceil) | O(1) | ⭐⭐⭐⭐⭐ | Performance |

_*O(n) space → O(1) space jika engine support TCO_

> 📚 **Lihat Perbandingan Lengkap:**  
> Semua versi kode dan analisis perbandingannya ada di **[📄 Code Versions](./docs/code-versions.md)**

---

## 💡 Resource Tambahan

### Mulai Belajar Dari Sini

1. **[📄 Analisis Pola](./docs/01-analisis-pola.md)** — Pahami dulu logika dasarnya sebelum coding
2. **[📦 Code Versions](./docs/code-versions.md)** — Lihat evolusi kode dari V1 hingga V5

### Referensi Teknis

- [MDN: Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
- [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN: Math.ceil()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
- [Tail Call Optimization in JavaScript](https://2ality.com/2015/06/tail-call-optimization.html)

---

## 🧭 Navigasi

| Link | Deskripsi |
|------|-----------|
| [➡️ Mulai: Analisis Pola](./docs/01-analisis-pola.md) | Langkah pertama — visualisasi masalah |
| [📦 Lihat Semua Versi Kode](./docs/code-versions.md) | Perbandingan lengkap 5 versi implementasi |

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **7 Juni 2026** berdasarkan sesi mentoring langsung di **Google Antigravity** menggunakan JavaScript (Node.js). Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow `/mentor-challenge` dengan format visual `/setup-doc`.

---

📅 **Terakhir diupdate:** 7 Juni 2026
