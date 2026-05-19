# 📊 Perbandingan Semua Versi — All Versions Comparison

### ✨ _Membandingkan keempat versi solusi secara berdampingan untuk memahami evolusi kode dari awal hingga akhir._

> 🎯 **Tujuan:** Menyajikan ringkasan komparatif agar pembaca bisa langsung melihat perbedaan arsitektur, kelebihan, kekurangan, dan kapan sebaiknya memakai setiap versi.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🗺️ | [Peta Evolusi](#evolusi) | Visualisasi perjalanan dari V1 → V4 |
| 📊 | [Tabel Perbandingan Utama](#tabel) | Semua aspek teknis dalam 1 tabel |
| 💻 | [Perbandingan Kode](#kode) | Kode inti setiap versi berdampingan |
| 🏆 | [Rekomendasi Pemakaian](#rekomendasi) | Kapan memakai versi yang mana |
| 💡 | [Pelajaran dari Evolusi](#pelajaran) | Insight yang didapat dari proses refactoring |

---

<a name="evolusi"></a>
## 🗺️ Peta Evolusi Kode

```text
V1 (Basic Logic)              V2 (Modular)
  while(true) + return    →     Helper isPalindrome di luar
  .split().reverse()             + variabel candidate
  1 fungsi besar                 2 fungsi terpisah
        │                              │
        │         PERCOBAAN MANDIRI     │
        └──────────┐  ┌────────────────┘
                   ▼  ▼
            V3 (Percobaan Mandiri)
              Spread Operator [...]
              Inner Function
              ⚠️ BUG: if(isPalindrome) return ++num
                       │
                   REFACTORING
                       ▼
            V4 (ES6 Refactored) ← 🏆 FINAL
              Bug diperbaiki (num + 1)
              Full Arrow Function
              Clean Loop tanpa if khusus
```

---

<a name="tabel"></a>
## 📊 Tabel Perbandingan Utama

### Arsitektur & Struktur

| Aspek | V1 | V2 | V3 | V4 |
|:---:|:---:|:---:|:---:|:---:|
| **Deklarasi Fungsi** | `function` | `function` | `function` + inner `const` | Full `const` arrow |
| **Jumlah Fungsi** | 1 | 2 (terpisah) | 2 (inner) | 2 (inner) |
| **Tipe Loop** | `while(true)` | `while(true)` | `while(!...)` | `while(!...)` |
| **Cara Keluar Loop** | `return` di dalam | `return` di dalam | Kondisi `while` | Kondisi `while` |
| **Cek Palindrome** | `.split().reverse()` | `.split().reverse()` | `[...String]` Spread | `[...String]` Spread |

### Kualitas & Reliabilitas

| Aspek | V1 | V2 | V3 | V4 |
|:---:|:---:|:---:|:---:|:---:|
| **Readability** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Reusability** | ❌ | ✅ Helper reusable | ❌ Inner scope | ❌ Inner scope |
| **Bug-Free** | ✅ | ✅ | ❌ Gagal di `11` | ✅ |
| **ES6 Modern** | ❌ | ❌ | ✅ | ✅ |
| **Cocok Pemula** | ✅ Paling mudah | ✅ | ⚠️ Ada bug | ✅ |

### Penanganan Gotcha (Input Palindrome)

| Versi | Strategi | Contoh `num = 11` | Hasil |
|:---:|:---|:---:|:---:|
| V1 | `num++` sebelum cek | Mulai cek dari `12` | ✅ `22` |
| V2 | `candidate = num + 1` | Mulai cek dari `12` | ✅ `22` |
| V3 | `if (isPalindrome) return ++num` | Langsung return `12` | ❌ `12` |
| V4 | `candidate = num + 1` | Mulai cek dari `12` | ✅ `22` |

---

<a name="kode"></a>
## 💻 Perbandingan Kode Inti

### V1 — Basic Logic
```javascript
function angkaPalindrome(num) {
  num++;
  while (true) {
    let str = String(num);
    let reversed = str.split('').reverse().join('');
    if (str === reversed) return num;
    num++;
  }
}
```

### V2 — Modular Helper
```javascript
function isPalindrome(num) {
  let str = String(num);
  return str === str.split('').reverse().join('');
}

function angkaPalindrome(num) {
  let candidate = num + 1;
  while (true) {
    if (isPalindrome(candidate)) return candidate;
    candidate++;
  }
}
```

### V3 — Percobaan Mandiri ⚠️
```javascript
function angkaPalindrome(num) {
  let candidate = num;
  const isPalindrome = (number) => {
    return String(number) === [...String(number)].reverse().join('');
  };
  if (isPalindrome(num)) return ++num;  // ← BUG
  while (!isPalindrome(candidate)) { candidate++; }
  return candidate;
}
```

### V4 — ES6 Refactored 🏆
```javascript
const angkaPalindrome = (num) => {
  let candidate = num + 1;
  const isPalindrome = (number) => {
    return String(number) === [...String(number)].reverse().join('');
  };
  while (!isPalindrome(candidate)) { candidate++; }
  return candidate;
};
```

---

<a name="rekomendasi"></a>
## 🏆 Rekomendasi Pemakaian

| Situasi | Versi Terbaik | Alasan |
|:---|:---:|:---|
| **Baru belajar JS** | V1 | Paling transparan, semua logika terlihat jelas |
| **Projek tim / code review** | V2 | Helper terpisah, paling mudah diuji & di-reuse |
| **Wawancara kerja / portofolio** | V4 | Menunjukkan pemahaman ES6 modern & *clean code* |
| **Belajar debugging** | V3 → V4 | Proses menemukan bug & memperbaikinya adalah skill paling berharga |

---

<a name="pelajaran"></a>
## 💡 Pelajaran dari Evolusi V1 → V4

### 1. 🎯 Jangan Tambal, Perbaiki Akarnya
V3 mencoba menangani *edge case* "input sudah palindrome" dengan `if` khusus. V4 membuktikan bahwa cukup **menggeser start point** (`num + 1`) untuk menyelesaikan masalah secara natural tanpa tambahan kondisi.

### 2. 🧩 Modularitas Bukan Soal Banyak Fungsi
V2 memecah jadi 2 fungsi terpisah. V4 juga punya 2 fungsi tapi sebagai *inner function*. Keduanya valid — yang penting setiap unit punya **satu tanggung jawab** (Single Responsibility).

### 3. 📈 Evolusi ≠ Revolusi
Dari V1 ke V4, tidak ada yang berubah drastis. Setiap langkah hanya mengubah **satu aspek kecil**:
- V1 → V2: Ekstrak helper
- V2 → V3: Ganti sintaks ke ES6
- V3 → V4: Perbaiki bug logika

> [!NOTE]
> 🧠 **Pesan Utama:** Kode yang bagus tidak ditulis sekali jadi. Ia **berevolusi** melalui iterasi berulang — setiap kali menjadi lebih bersih, lebih aman, dan lebih mudah dibaca. Proses ini disebut **Refactoring**, dan ini adalah skill yang membedakan *junior developer* dari *senior developer*.

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [06 — V4: Solusi Refaktor](./06-v4-refactored-solution_solusi-refaktor.md) | [README](../README.md) | [08 — Test Cases](./08-test-cases_kasus-pengujian.md) |
