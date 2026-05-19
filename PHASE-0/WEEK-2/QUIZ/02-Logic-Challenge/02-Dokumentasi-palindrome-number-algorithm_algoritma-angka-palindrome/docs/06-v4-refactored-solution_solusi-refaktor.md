# 🔁 Versi 4 — Solusi Refaktor (ES6 Modern)

### ✨ _Kombinasi sintaks modern ES6 dan perbaikan alur logika yang menciptakan solusi paling bersih dan stabil._

> 🎯 **Tujuan:** Mendokumentasikan hasil *refactoring* akhir (Versi 4) yang merupakan perpaduan antara ide eksperimen mandiri (V3) dengan stabilitas logika *best practice*.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Profil Versi](#profil) | Ringkasan kapan & kenapa pakai versi ini |
| 🔄 | [Evolusi dari V3 ke V4](#perubahan) | Apa yang diperbaiki dari versi percobaan? |
| 💻 | [Kode Lengkap](#kode) | Solusi final siap pakai |
| 🔍 | [Bedah Kode & Arsitektur](#bedah) | Analisis struktur dan kelebihan ES6 |
| ⚖️ | [Pro & Kontra](#pro-kontra) | Evaluasi jujur dari pendekatan *Inner Function* |

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | ES6 Refactored Solution |
| 🔢 **Jumlah Fungsi** | 2 (Fungsi utama + Inner Helper) |
| 🧠 **Konsep Utama** | Full Arrow Function, Spread Operator, *Clean Loop* |
| 📖 **Readability** | ⭐⭐⭐⭐⭐ (Sangat elegan dan terstruktur) |
| ⚡ **Kompleksitas** | O(n) |
| 🎯 **Cocok Untuk** | Kode *production*, wawancara kerja, portofolio modern |

> [!TIP]
> 🏆 **Kapan pilih versi ini?**
> Versi 4 adalah **versi terbaik secara sintaks**. Gunakan versi ini saat kamu ingin memamerkan pemahaman mendalam tentang JavaScript modern (ES6) sekaligus membuktikan kamu bisa menulis logika loop yang aman dari *bug*.

---

<a name="perubahan"></a>
## 🔄 Evolusi dari V3 ke V4 (Resolusi Bug)

Di [Versi 3 (Percobaan Mandiri)](./05-v3-independent-attempt_percobaan-mandiri.md), kita menemukan sebuah celah (*Logical Flaw*) karena penggunaan `if (isPalindrome(num)) return ++num;`. 

Pada Versi 4 ini, bug tersebut telah **dibersihkan sepenuhnya** melalui *refactoring* sederhana:

| Sebelum Refaktor (V3) | Setelah Refaktor (V4) | Dampak |
|---|---|---|
| `let candidate = num;` | `let candidate = num + 1;` | Angka awal langsung melangkah 1 tahap ke depan. |
| Ada `if` pengecekan ganda | `if` pengecekan ganda dihapus | Kode lebih pendek dan alur lebih natural. |
| Fungsi utama pakai `function` | Full `const` Arrow Function | Konsistensi *style* fungsi modern. |
| ❌ *Gagal di angka 11* | ✅ *Sukses di semua angka* | Kode 100% *bug-free* untuk semua test case! |

---

<a name="kode"></a>
## 💻 Kode Lengkap

```javascript
// ✅ VERSI 4 — ES6 Refactored Solution (Solusi Paling Clean)

const angkaPalindrome = (num) => {
  // 1. Geser start point ke depan untuk menghindari bug 'angka sudah palindrome'
  let candidate = num + 1;

  // 2. Inner Helper: Sangat ringkas menggunakan Spread Operator [...]
  const isPalindrome = (number) => {
    return String(number) === [...String(number)].reverse().join('');
  };

  // 3. Loop Pencarian: Berhenti secara natural jika helper mengembalikan true
  while (!isPalindrome(candidate)) {
    candidate++;
  }

  // 4. Return hasil akhir
  return candidate;
};

// UJI COBA
console.log(angkaPalindrome(8));    // 9
console.log(angkaPalindrome(10));   // 11
console.log(angkaPalindrome(117));  // 121
console.log(angkaPalindrome(175));  // 181
console.log(angkaPalindrome(1000)); // 1001
```

---

<a name="bedah"></a>
## 🔍 Bedah Kode & Arsitektur

### 1️⃣ Full Arrow Function
```javascript
const angkaPalindrome = (num) => { ... }
const isPalindrome = (number) => { ... }
```
Penggunaan panah (`=>`) dipadukan dengan deklarasi `const` menjamin bahwa fungsi ini bersifat **imutable** (tidak bisa ditimpa oleh variabel lain). Ini adalah standar penulisan *React* maupun arsitektur *frontend* modern saat ini.

### 2️⃣ *Clean Loop* tanpa `break` atau `return` di dalam
```javascript
while (!isPalindrome(candidate)) {
  candidate++;
}
```
Inilah bentuk loop yang paling "jujur". Ia mengatakan: *"Selama candidate belum palindrome, tambahkan terus nilainya"*. Tidak ada pintu darurat (`break`) maupun jebakan `if` di dalam. Kode mengalir secara *declarative* (menjelaskan APA yang dimau, bukan BAGAIMANA caranya secara kaku).

---

<a name="pro-kontra"></a>
## ⚖️ Pro & Kontra (Analisis *Inner Function*)

Kode ini mempertahankan pendekatan *Inner Function* (meletakkan helper di dalam fungsi utama). Pendekatan ini memiliki kelebihan dan kekurangan tersendiri:

| ✅ PRO (Kelebihan) | ❌ KONTRA (Kekurangan) |
|---|---|
| **Encapsulation (Pembungkusan):** Helper `isPalindrome` disembunyikan. Fungsi lain di luar `angkaPalindrome` tidak bisa sembarangan memakainya. | **Memory Overhead:** Setiap kali `angkaPalindrome` dipanggil, JavaScript harus "membuat ulang" memori untuk fungsi `isPalindrome`. |
| **Clean Scope:** *Global scope* tetap bersih dari fungsi-fungsi kecil yang mungkin namanya bentrok dengan fungsi lain. | **Kurang Reusable:** Jika besok ada fungsi lain yang butuh mengecek palindrome, kita harus *copy-paste* helper ini keluar. |

> [!NOTE]
> 🧠 **Kapan Inner Function Ideal?**
> Jika fungsi `angkaPalindrome` hanya dipanggil beberapa kali (bukan jutaan kali dalam loop berkecepatan tinggi), dan helper `isPalindrome` benar-benar *hanya* berguna untuk fungsi ini saja, maka pendekatan *Inner Function* sangat bisa diterima demi alasan **Kerapian (Clean Scope)**!

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [05 — V3: Percobaan Mandiri](./05-v3-independent-attempt_percobaan-mandiri.md) | [README](../README.md) | [07 — Perbandingan Semua Versi](./07-perbandingan-semua-versi_all-versions-comparison.md) |
