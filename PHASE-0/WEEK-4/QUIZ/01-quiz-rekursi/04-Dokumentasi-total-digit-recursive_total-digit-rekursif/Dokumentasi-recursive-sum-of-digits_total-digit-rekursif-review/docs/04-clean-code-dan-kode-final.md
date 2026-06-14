# ✨ Clean Code & Kode Final

### ✨ _Mengubah kode yang "berjalan benar" menjadi kode yang "mudah dibaca manusia"_

> 🎯 **Tujuan:** Menerapkan standar *Naming Convention* industri pada kedua versi solusi, memahami alasan di balik setiap pilihan nama, dan menyajikan **kode final definitif** yang siap digunakan.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🏷️ | [Kamus Naming Convention](#kamus-naming) | Tabel transformasi nama variabel → standar industri |
| 💻 | [Kode Final V1 — String](#kode-final-v1) | Versi profesional dengan one-line return |
| 💻 | [Kode Final V2 — Matematika Murni](#kode-final-v2) | Versi profesional dengan naming deskriptif |
| 🎓 | [Key Takeaways](#key-takeaways) | Pelajaran utama dari proses clean code |

---

<a name="kamus-naming"></a>

## 🏷️ Kamus Naming Convention

Penggunaan nama variabel yang deskriptif dan **berbahasa Inggris** sangat krusial dalam lingkungan kerja profesional — agar kode mudah dibaca oleh programmer lain tanpa perlu dokumentasi panjang.

| Peran Variabel | ❌ Tahap Belajar | ✅ Best Practice | Alasan Pemilihan |
|----------------|------------------|------------------|-------------------|
| Parameter input | `angka` | `num` | Standar universal, langsung dipahami sebagai representasi nilai numerik |
| Konversi ke string | `strAngka` | `strNum` | Format *camelCase* — jelas menunjukkan tipe string yang merepresentasikan angka |
| Digit depan (V1) | `digitDepan` | `firstDigit` | Awalan `first` lazim di pemrograman untuk elemen indeks `[0]` |
| Digit belakang (V2) | `digitBelakang` | `lastDigit` | Pasangan logis `first` ↔ `last`, menunjuk elemen paling ujung |
| Sisa setelah potong | `sisaAngka` / `sisaDigit` | `remainingNum` | Elegan dan deskriptif — melambangkan porsi yang belum diproses rekursi |

> [!TIP]
> **Aturan praktis naming:** Jika nama variabel masih membutuhkan komentar penjelasan agar dipahami, berarti namanya belum cukup deskriptif. Nama yang baik **menggantikan** komentar, bukan membutuhkannya.

---

<a name="kode-final-v1"></a>

## 💻 Kode Final V1 — String (Front-to-Back)

Algoritma manipulasi String yang disederhanakan dengan teknik **one-line return** dan naming standar industri:

```javascript
const totalDigitRekursif = (num) => {
  const strNum = String(num);

  // Base Case
  if (strNum.length === 1) return Number(strNum);

  // Recursive Case (One-line)
  return Number(strNum[0]) + totalDigitRekursif(Number(strNum.slice(1)));
};
```

### Apa yang Berubah dari Versi Belajar?

| Aspek | Sebelum (Tahap Belajar) | Sesudah (Clean Code) |
|-------|-------------------------|----------------------|
| **Parameter** | `angka` | `num` |
| **Konversi string** | `strAngka` | `strNum` |
| **Variabel perantara** | `digitDepan` & `sisaDigit` terpisah | Dihapus — digabung jadi one-line return |
| **Jumlah baris** | 7 baris logika | 4 baris logika |

> [!NOTE]
> Penghapusan variabel perantara (`digitDepan`, `sisaDigit`) adalah *syntax refactoring* — hanya mempersingkat penulisan tanpa mengubah algoritma. Logikanya tetap identik: ambil `strNum[0]`, lempar `strNum.slice(1)` ke recursive call. Detail penalaran tiap operasi ada di [Solusi Bertahap](02-solusi-bertahap.md).

---

<a name="kode-final-v2"></a>

## 💻 Kode Final V2 — Matematika Murni (Back-to-Front)

Algoritma aritmatika murni dengan naming yang sangat mudah dicerna alur mentalnya:

```javascript
const totalDigitRekursif = (num) => {
  // Base Case
  if (num < 10) return num;

  // Recursive Case
  const lastDigit = num % 10;
  const remainingNum = Math.trunc(num / 10);

  return lastDigit + totalDigitRekursif(remainingNum);
};
```

> [!IMPORTANT]
> Pada V2, variabel perantara (`lastDigit`, `remainingNum`) **sengaja dipertahankan** — bukan karena teknis, melainkan karena readability. Nama `lastDigit` dan `remainingNum` membuat alur mental langsung terbaca seperti kalimat: *"ambil digit terakhir, lalu proses sisa angkanya secara rekursif"*.

### Perbandingan Readability

```
❌ Tanpa variabel (sulit dibaca):
   return (num % 10) + totalDigitRekursif(Math.trunc(num / 10));

✅ Dengan variabel deskriptif (terbaca seperti cerita):
   const lastDigit = num % 10;
   const remainingNum = Math.trunc(num / 10);
   return lastDigit + totalDigitRekursif(remainingNum);
```

> [!TIP]
> **Clean code bukan soal mempersingkat baris.** Terkadang variabel perantara justru membuat kode **lebih** profesional karena memberikan label bermakna pada operasi yang kompleks. Keputusan one-line vs variabel terpisah harus didasarkan pada **readability**, bukan jumlah baris.

---

<a name="key-takeaways"></a>

## 🎓 Key Takeaways

```
🎯 Pelajaran 1 → Algoritma efisien ≠ kode yang baik
   Kode yang benar secara logika belum tentu mudah
   dibaca oleh manusia lain. Clean naming mengubah
   kode membingungkan menjadi kode yang terbaca
   layaknya kalimat percakapan biasa.

📌 Pelajaran 2 → Bahasa Inggris = standar industri
   Variabel berbahasa Indonesia boleh saat belajar,
   namun wajib di-refactor ke English sebelum
   dianggap "production-ready".

🔐 Pelajaran 3 → Konteks menentukan gaya penulisan
   V1 cocok di-one-line karena operasinya sederhana
   (indeks string). V2 lebih baik dengan variabel
   terpisah karena operasinya kompleks (modulo &
   truncate). Tidak ada aturan mutlak — sesuaikan
   dengan readability.
```

---

⬅️ [Evolusi & Perbandingan](03-evolusi-dan-perbandingan.md) · ➡️ [Ringkasan Semua Versi](../ringkasan-semua-versi.md)
