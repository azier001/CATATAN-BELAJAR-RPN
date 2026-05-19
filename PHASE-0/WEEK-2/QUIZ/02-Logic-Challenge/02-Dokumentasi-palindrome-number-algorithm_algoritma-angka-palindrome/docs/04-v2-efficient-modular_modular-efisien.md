# 🔁 Versi 2 — Helper Function Modular

### ✨ _Memisahkan logika "cek palindrome" ke fungsi sendiri agar kode lebih bersih dan reusable._

> 🎯 **Tujuan:** Memahami prinsip **separation of concerns** dengan memecah satu fungsi besar menjadi dua fungsi kecil yang masing-masing punya tanggung jawab tunggal.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Profil Versi](#profil) | Ringkasan kapan & kenapa pakai versi ini |
| 🔄 | [Apa yang Berubah dari V1?](#perubahan) | Delta perubahan spesifik dari versi sebelumnya |
| 🏗️ | [Pembangunan Bertahap](#pembangunan) | Step-by-step refactoring dari V1 ke V2 |
| 💻 | [Kode Lengkap](#kode) | Solusi final siap pakai |
| 🔍 | [Bedah Kode](#bedah) | Fokus pada bagian yang BARU / BERUBAH saja |
| 🧮 | [Simulasi Langkah](#simulasi) | Trace eksekusi menunjukkan interaksi antar fungsi |

---

<a name="profil"></a>
## 📋 Profil Versi

| Aspek | Detail |
|-------|--------|
| 🏷️ **Nama** | Helper Function Modular |
| 🔢 **Jumlah Fungsi** | 2 (`isPalindrome` + `angkaPalindrome`) |
| 🧠 **Konsep Utama** | Separation of concerns, helper function, Boolean return |
| 📖 **Readability** | ⭐⭐⭐⭐⭐ (sangat deskriptif — baca nama fungsi = paham) |
| ⚡ **Kompleksitas** | O(n) — sama dengan V1 |
| 🎯 **Cocok Untuk** | Clean code, projek tim, kode yang perlu di-maintain |

> [!TIP]
> 🏆 **Kapan pilih versi ini?**
> Gunakan Versi 2 saat kamu ingin kode yang **self-documenting** dan **reusable**. Fungsi `isPalindrome` bisa dipakai ulang di challenge lain tanpa copy-paste logika pembalikan string.

---

<a name="perubahan"></a>
## 🔄 Apa yang Berubah dari V1?

| Aspek | V1 (Logika Dasar) | V2 (Modular) |
|-------|:------------------:|:------------:|
| Struktur | 1 fungsi besar | 2 fungsi terpisah |
| Cek palindrome | Inline di dalam loop | Dipanggil via `isPalindrome()` |
| Variabel pencarian | Memodifikasi `num` langsung | Menggunakan `candidate` terpisah |
| Reusability | ❌ Logika terkunci di dalam | ✅ `isPalindrome` bisa dipakai ulang |

**Inti perubahan dalam 1 kalimat:** *Keluarkan logika pembalikan string dari loop, bungkus jadi fungsi bernama `isPalindrome`, dan gunakan variabel `candidate` agar `num` tetap menyimpan nilai asli.*

---

<a name="pembangunan"></a>
## 🏗️ Pembangunan Bertahap (Refactoring dari V1)

> [!IMPORTANT]
> 🧱 **Prinsip Refactoring:** Kita tidak menulis dari nol. Kita **memecah** kode V1 yang sudah berjalan menjadi bagian-bagian yang lebih rapi.

### ⚙️ Step 1 — Ekstrak Logika Palindrome ke Fungsi Sendiri

Ambil 3 baris logika pembalikan dari dalam loop V1, lalu bungkus menjadi fungsi `isPalindrome` yang mengembalikan `true` atau `false`.

```javascript
// SEBELUM (V1): logika inline di dalam loop
let str = String(num);
let reversedStr = str.split('').reverse().join('');
if (str === reversedStr) { return num; }

// SESUDAH (V2): dipecah jadi fungsi sendiri
function isPalindrome(num) {
  let str = String(num);
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;   // return Boolean, bukan angka!
}
```

> **Kenapa?** Fungsi utama sekarang tidak perlu tahu *bagaimana* cara mengecek palindrome. Ia cukup *bertanya*: `isPalindrome(candidate)` → `true` / `false`.

---

### ⚙️ Step 2 — Ganti `num` dengan `candidate` di Fungsi Utama

Buat variabel baru `candidate` agar parameter `num` tetap menyimpan nilai asli input.

```javascript
function angkaPalindrome(num) {
  let candidate = num + 1;    // ← variabel baru, num tidak dimodifikasi

  while (true) {
    if (isPalindrome(candidate)) {
      return candidate;
    }
    candidate++;
  }
}
```

> **Kenapa `candidate`?** Nama ini langsung menjelaskan perannya: "angka yang sedang *dicalonkan* sebagai palindrome". Bandingkan dengan V1 yang memodifikasi `num` langsung — jika kita butuh debug, nilai asli input sudah hilang.

---

<a name="kode"></a>
## 💻 Kode Lengkap

```javascript
// ✅ VERSI 2 — Helper Function Modular (Clean Code)

// Helper: mengecek apakah sebuah angka adalah palindrome
function isPalindrome(num) {
  let str = String(num);
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// Fungsi utama: mencari palindrome terdekat setelah input
function angkaPalindrome(num) {
  let candidate = num + 1;

  while (true) {
    if (isPalindrome(candidate)) {
      return candidate;
    }
    candidate++;
  }
}

// Uji coba
console.log(angkaPalindrome(8));    // 9
console.log(angkaPalindrome(10));   // 11
console.log(angkaPalindrome(117));  // 121
console.log(angkaPalindrome(175));  // 181
console.log(angkaPalindrome(1000)); // 1001
```

---

<a name="bedah"></a>
## 🔍 Bedah Kode (Fokus Bagian BARU)

> 📌 Untuk penjelasan logika `while(true)`, rantai `.split().reverse().join()`, dan operator `===`, lihat [Bedah Kode V1](./03-v1-basic-logic_logika-dasar.md#bedah).

### 1️⃣ Helper Function `isPalindrome` `[BARU]`

```javascript
function isPalindrome(num) {
  let str = String(num);
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
```

Fungsi ini punya **satu tanggung jawab tunggal**: menerima angka, mengecek apakah palindrome, dan mengembalikan `true` atau `false`.

> *(Kenapa return `str === reversedStr` langsung? Ekspresi perbandingan `===` sudah menghasilkan Boolean. Menulis `if (str === reversedStr) return true; else return false;` itu redundan dan tidak clean.)*

---

### 2️⃣ Variabel `candidate` `[BARU]`

```javascript
let candidate = num + 1;
```

Menggantikan `num++` di V1. Dua keuntungan sekaligus:
1. **Nilai asli `num` tetap utuh** — berguna untuk debugging atau logging.
2. **Inisialisasi `+1` terjadi saat deklarasi** — lebih eksplisit dan tidak tersembunyi.

---

### 3️⃣ Pemanggilan Helper `[BARU]`

```javascript
if (isPalindrome(candidate)) {
  return candidate;
}
```

Loop utama kini terbaca seperti **kalimat bahasa Inggris**: *"Jika candidate adalah palindrome, kembalikan candidate."* Inilah kekuatan penamaan fungsi yang deskriptif.

---

<a name="simulasi"></a>
## 🧮 Simulasi Langkah (Trace `num = 8`)

Trace ini menunjukkan **interaksi antara dua fungsi** — hal yang tidak ada di V1.

### Tahap Inisialisasi

```
Input: num = 8
candidate = 8 + 1 = 9   ← pencarian dimulai dari sini
(num tetap = 8, tidak berubah sepanjang eksekusi)
```

### Iterasi ke-1 (`candidate = 9`)

| Tahap | Lokasi | Aksi | Nilai |
|:---:|:---:|:---|:---|
| 1 | `angkaPalindrome` | Panggil `isPalindrome(9)` | → masuk helper |
| 2 | `isPalindrome` | `str = String(9)` | `"9"` |
| 3 | `isPalindrome` | `reversedStr = "9"` | `"9"` |
| 4 | `isPalindrome` | `"9" === "9"` | `true` → **kembali ke pemanggil** |
| 5 | `angkaPalindrome` | `isPalindrome(9)` === `true` | **`return 9`** 🎉 |

> 📌 Perhatikan alur **keluar-masuk** antar fungsi. `angkaPalindrome` *bertanya* ke `isPalindrome`, lalu *menerima jawaban* tanpa perlu tahu detail cara mengeceknya.

### Simulasi Lebih Panjang (Trace `num = 117`)

| Iterasi | `candidate` | `isPalindrome()` dipanggil | Return | Aksi |
|:---:|:---:|:---:|:---:|:---|
| 1 | `118` | `isPalindrome(118)` | `false` | `candidate++` |
| 2 | `119` | `isPalindrome(119)` | `false` | `candidate++` |
| 3 | `120` | `isPalindrome(120)` | `false` | `candidate++` |
| 4 | `121` | `isPalindrome(121)` | `true` | **`return 121`** 🎉 |

> [!NOTE]
> 📌 **Bandingkan dengan trace V1:** Alur logikanya identik, tapi kode V2 jauh lebih mudah di-debug karena kita bisa menguji `isPalindrome()` secara **independen** (misalnya: `console.log(isPalindrome(121))` → `true`).

---

| ⬅️ Sebelumnya | 🏠 Home | Selanjutnya ➡️ |
|:---:|:---:|:---:|
| [03 — V1: Logika Dasar](./03-v1-basic-logic_logika-dasar.md) | [README](../README.md) | [05 — V3: Percobaan Mandiri](./05-v3-independent-attempt_percobaan-mandiri.md) |
