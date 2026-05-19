# 🔁 Versi 3 — Percobaan Mandiri (Spread Operator + Inner Function)

### ✨ _Mendokumentasikan hasil percobaan mandiri, menganalisis fitur ES6, serta membedah bug tersembunyi (Logical Flaw)._

> 🎯 **Tujuan:** Melatih kemampuan *code review* tingkat lanjut dengan mengevaluasi solusi mandiri. Fokus pada penemuan celah logika pada *edge case* dan memberikan saran perbaikan (*best practices*) menuju *clean code*.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Profil Versi](#profil) | Ringkasan karakteristik kode mandiri ini |
| 💻 | [Kode Orisinal](#kode) | Solusi asli yang ditulis secara mandiri |
| 🌟 | [Kelebihan (The Good)](#kelebihan) | Analisis teknik ES6 yang apik & modern |
| 🐛 | [Bug Tersembunyi (The Bad)](#bug) | Analisis *Logical Flaw* pada kasus angka ganda |
| 🧮 | [Trace Simulasi Bug](#simulasi) | Membedah eksekusi yang salah langkah demi langkah |
| 💡 | [Saran Perbaikan (Solusi)](#saran) | Refactoring menuju kode yang kokoh & optimal |

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | Percobaan Mandiri (V3) |
| 🔢 **Jumlah Fungsi** | 2 (`angkaPalindrome` + Inner function `isPalindrome`) |
| 🧠 **Konsep Utama** | Spread Operator `[...]`, Arrow Function, Loop `while` |
| 📖 **Readability** | ⭐⭐⭐⭐ (Sangat modern dan ringkas) |
| ⚠️ **Reliabilitas** | Gagal di *edge case* tertentu (Angka 2 digit ke atas) |
| 🎯 **Fokus Belajar** | Debugging, Code Review, Memory Management |

---

<a name="kode"></a>
## 💻 Kode Orisinal Percobaan Mandiri

Berikut adalah potongan kode asli hasil pemikiran mandiri. Secara sekilas, kode ini terlihat sangat modern dan *clean*.

```javascript
function angkaPalindrome(num) {
  let candidate = num;

  // Inner function: Helper berada di dalam scope fungsi utama
  const isPalindrome = (number) => {
    return String(number) === [...String(number)].reverse().join('');
  };

  // Pengecekan awal: Jika input sudah palindrome
  if (isPalindrome(num)) return ++num;

  // Looping mencari palindrome selanjutnya
  while (!isPalindrome(candidate)) {
    candidate++;
  }

  return candidate;
}
```

Mari kita posisikan diri sebagai *Senior Developer* yang sedang me-review *Pull Request* (PR) dari kode ini. Apa yang bagus dan apa yang kurang?

---

<a name="kelebihan"></a>
## 🌟 Kelebihan Kode (The Good)

Kode ini menunjukkan pemahaman sintaks ES6 yang sangat baik. Ada dua teknik unggulan di sini:

### 1️⃣ Penggunaan Spread Operator `[...]`
Alih-alih menggunakan `.split('')` klasik, kode ini memecah string menjadi array menggunakan *spread operator*:
```javascript
[...String(number)].reverse().join('')
```
* **Kelebihan:** Sangat elegan dan modern. Secara teknis, *spread operator* lebih aman untuk menangani karakter *unicode/emoji* kompleks dibandingkan `.split('')`, meskipun untuk kasus angka hal ini tidak terlalu berdampak.

### 2️⃣ Penggunaan Arrow Function
Penulisan fungsi pembantu (`helper`) menggunakan `const isPalindrome = (number) => { ... }` membuat kode terasa ringkas dan mengikuti tren JavaScript modern.

---

<a name="bug"></a>
## 🐛 Bug Tersembunyi (The Bad)

Meskipun secara sintaksis kodenya modern, ada satu **celah logika (Logical Flaw)** yang fatal. 

Jika kita menguji kode ini dengan angka 1 digit (misal: `8`), kodenya sukses mereturn `9`. Tetapi, coba jalankan dengan angka `11`:
```javascript
console.log(angkaPalindrome(11)); 
// Output Seharusnya: 22
// Output Kode Ini: 12 ❌ (12 BUKAN palindrome!)
```

### Mengapa bisa terjadi?
Akar masalahnya ada pada baris ini:
```javascript
if (isPalindrome(num)) return ++num;
```
Logika ini berasumsi: *"Jika angka awal sudah palindrome, maka jawaban benarnya pasti angka tepat setelahnya (ditambah 1)"*. 

Asumsi ini **kebetulan benar** untuk angka 1 digit (karena 0-9 semuanya palindrome). Tapi asumsi ini **salah total** untuk angka multi-digit. Jika input `11`, kodenya langsung me-return `11 + 1 = 12`. Fungsi langsung berhenti dan *while loop* di bawahnya tidak pernah dijalankan!

---

<a name="simulasi"></a>
## 🧮 Trace Simulasi Bug (Input: 11)

Mari kita bedah alur eksekusinya baris per baris agar terlihat jelas di mana "kecelakaan" itu terjadi.

| Langkah | Baris Kode | Eksekusi & Kondisi | Status |
|:---:|:---|:---|:---:|
| 1 | `let candidate = num;` | `candidate` = `11` | 🟢 Aman |
| 2 | `isPalindrome(num)` | Cek apakah `"11" === "11"`? **TRUE** | 🟢 Aman |
| 3 | `if (isPalindrome...)` | Masuk ke dalam blok `if` karena hasil cek = TRUE | 🟡 Bahaya |
| 4 | `return ++num;` | Menambahkan `11` menjadi `12`, lalu me-return `12`. | 🔴 **CRASH!** |

Fungsi langsung selesai di langkah ke-4. Padahal `12` bukanlah palindrome. 

---

<a name="saran"></a>
## 💡 Saran Perbaikan (Refactoring)

Untuk memperbaiki bug tersebut sekaligus meningkatkan efisiensi memori (best practice), kita perlu melakukan dua perubahan:

### 1. Majukan Posisi `isPalindrome` ke Luar (Global Scope)
Karena `isPalindrome` ditulis *di dalam* `angkaPalindrome`, JavaScript akan **mendeklarasikan ulang** fungsi pembantu tersebut setiap kali `angkaPalindrome` dipanggil. Ini memboroskan memori. Solusi: Taruh fungsi tersebut di luar.

### 2. Hapus `if` dan Langsung Majukan Start Point
Tidak perlu repot-repot membuat `if` khusus untuk menangani *edge case* input palindrome. Cukup pastikan pencarian selalu **dimulai dari angka berikutnya** (`num + 1`). 

### ✅ Kode Hasil Refactoring

```javascript
// 1. HELPER DI LUAR: Hemat memori, tidak di-recreate berulang kali
const isPalindrome = (number) => {
  return String(number) === [...String(number)].reverse().join('');
};

function angkaPalindrome(num) {
  // 2. START POINT DIGESER: Hindari edge case input palindrome!
  let candidate = num + 1;

  // 3. CARI NATURAL: Loop akan berjalan terus sampai ketemu
  while (!isPalindrome(candidate)) {
    candidate++;
  }

  return candidate;
}

// UJI COBA
console.log(angkaPalindrome(8));    // 9   ✅
console.log(angkaPalindrome(11));   // 22  ✅ (BUG TERATASI!)
console.log(angkaPalindrome(117));  // 121 ✅
```

> [!TIP]
> 🏆 **Golden Rule dalam Problem Solving:**
> Jika kamu menemukan *edge case* (seperti angka yang awalnya sudah palindrome), hindari membuat `if` *statement* khusus yang menambal masalah secara manual. Usahakan mencari **solusi sistemik** (seperti menggeser titik awal pencarian) yang membuat algoritma bisa menangani semua kasus secara natural!

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [04 — V2: Modular Efisien](./04-v2-efficient-modular_modular-efisien.md) | [README](../README.md) | [06 — V4: Solusi Refaktor](./06-v4-refactored-solution_solusi-refaktor.md) |
