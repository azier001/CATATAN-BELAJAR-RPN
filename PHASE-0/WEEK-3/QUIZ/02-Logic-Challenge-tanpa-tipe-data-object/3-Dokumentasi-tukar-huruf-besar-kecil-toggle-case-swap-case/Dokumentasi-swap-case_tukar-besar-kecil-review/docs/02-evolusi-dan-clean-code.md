# 🚀 02 — Evolusi Solusi & Clean Code

### ✨ _Dari kode pemula ke versi production-ready ala Senior Developer_

> 🎯 **Cakupan:** File ini membahas **Pilar 5–7** dari 7 Pilar Kualitas Dokumentasi — mengeksplorasi versi alternatif dari solusi (imperative vs declarative), menerapkan clean code lewat naming convention yang benar, serta menyematkan JSDoc.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧬 | [Evolusi Solusi](#evolusi) | 3 versi solusi: Pemula hingga Pro (Pilar 5) |
| ⚖️ | [Perbandingan Mental Model](#perbandingan) | Kapan harus pakai versi yang mana? |
| 🏷️ | [Clean Code & Naming](#clean-code) | Tabel refactoring variabel (Pilar 6) |
| 🏆 | [Versi Final (Best Practice)](#versi-final) | Solusi akhir berstandar industri |

---

<a name="evolusi"></a>

## 🧬 Evolusi Solusi (Pilar 5)

Sebagai *developer*, kita tidak boleh berhenti pada "yang penting jalan". Mari kita lihat bagaimana kode ini berevolusi dari versi dasar ke versi yang lebih modern.

### 🟢 Versi 1: Imperative (Cocok untuk Pemula)

Ini adalah solusi yang kita bangun di [fase sebelumnya](01-analisis-dan-solusi.md). Cara kerjanya sangat eksplisit langkah demi langkah (baca: "Beri aku wadah, periksa satu-satu, lalu isi wadahnya").

```javascript
const tukarBesarKecilV1 = (text) => {
  let swappedString = '';
  for (const char of text) {
    if (char === char.toLowerCase()) {
      swappedString += char.toUpperCase();
    } else {
      swappedString += char.toLowerCase();
    }
  }
  return swappedString;
};
```

---

### 🔵 Versi 2: Declarative (The JavaScript Way)

Bagi developer menengah-atas, menggunakan perulangan `for` klasik untuk memanipulasi string dianggap kuno. Kita bisa menggunakan gabungan *Array methods*:
1. `.split('')` → Pecah string jadi array karakter.
2. `.map()` → Modifikasi setiap karakter sesuai aturan kita (menggunakan *Ternary Operator* agar ringkas).
3. `.join('')` → Gabung kembali array jadi string.

```javascript
const tukarBesarKecilV2 = (text) => {
  return text
    .split('')
    .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join('');
};
```

> [!TIP]
> 💡 **Kenapa pakai ternary `(kondisi ? benar : salah)`?**
> Karena `.map()` membutuhkan *return value* langsung. Ternary membuat logika `if/else` kita menjadi satu baris ekspresi yang sangat elegan!

---

### ⚡ Versi 3: Regular Expression (Bonus Ekstrim)

Jika kamu ingin pamer *skill*, kamu bisa menyelesaikan challenge ini cuma dalam **1 baris** menggunakan keajaiban `.replace()` dan Regex (Ekspresi Reguler):

```javascript
const tukarBesarKecilRegex = (text) => 
  text.replace(/[a-zA-Z]/g, (c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
```
*(Catatan: Regex `/[a-zA-Z]/g` hanya akan menargetkan huruf alfabet, sehingga simbol & angka otomatis diabaikan sejak awal).*

---

<a name="perbandingan"></a>

## ⚖️ Perbandingan Mental Model

Mana yang harus kamu pilih? Ini panduannya:

| Aspek | V1 — Imperative 🟢 | V2 — Declarative 🔵 |
|-------|:----------|:----------|
| **Fokus Kode** | *Bagaimana* cara melakukannya (Step-by-step) | *Apa* yang ingin dihasilkan (Expressive) |
| **Variabel Temp** | ✅ Butuh (`swappedString`) | ❌ Tidak butuh |
| **Mutasi Data** | 🔴 Sering (Isi variabel berubah terus) | 🟢 Tidak ada (Data langsung di-return) |
| **Rekomendasi**| Cocok untuk pemahaman logika dasar | 🏆 **Best Practice di Industri Modern** |

---

<a name="clean-code"></a>

## 🏷️ Clean Code & Naming Convention (Pilar 6)

Sebuah kode yang baik harus terbaca layaknya buku. Mari kita tinjau ulang nama variabel yang digunakan di seluruh fase:

| Konteks | ❌ Kurang Jelas | ✅ Paling Disarankan | Alasan |
|---------|----------------|----------------------|--------|
| Teks Input | `str`, `s` | `text` atau `kalimat` | Universal, mencerminkan "teks utuh" |
| Loop (Satuan) | `i`, `x`, `huruf` | `char` | Karena yang di-loop bisa jadi angka/simbol, kata *char* (karakter) lebih tepat daripada *huruf* |
| Wadah Akhir | `res`, `arr` | `swappedString` | Sangat deskriptif. Langsung terbayang isinya apa. |

> [!CAUTION]
> 🔴 **Hindari singkatan.** Jangan malas mengetik `character` atau `text`. Menggunakan `x` atau `s` hanya akan membuat orang lain (dan dirimu di masa depan) kebingungan membaca kodemu sendiri.

---

<a name="versi-final"></a>

## 🏆 Versi Final (Production-Ready)

Menggabungkan versi *Declarative* dengan *Naming Convention* yang tepat, serta menyematkan **JSDoc** sebagai standar dokumentasi dalam kode. Inilah versi yang siap kamu pamerkan di Portofolio atau saat *Code Review*!

```javascript
/**
 * Menukar setiap huruf besar menjadi kecil dan sebaliknya.
 * Karakter non-alfabet (angka, simbol, spasi) akan dibiarkan aslinya.
 * 
 * @param {string} text - Kalimat teks yang akan diproses
 * @returns {string} Kalimat baru dengan huruf yang sudah ditukar (swap case)
 */
const tukarBesarKecil = (text) => {
  return text
    .split('')
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
};
```

---

### 🧭 Navigasi Materi
- ⬅️ **Sebelumnya:** [01 — Analisis Logika & Solusi](01-analisis-dan-solusi.md)
