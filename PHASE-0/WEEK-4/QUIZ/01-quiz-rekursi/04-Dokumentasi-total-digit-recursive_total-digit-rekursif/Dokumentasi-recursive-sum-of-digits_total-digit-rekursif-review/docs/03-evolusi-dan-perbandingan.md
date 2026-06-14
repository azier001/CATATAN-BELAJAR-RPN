# 🔄 Evolusi & Perbandingan

### ✨ _Dari manipulasi String ke Matematika Murni — mendobrak kebiasaan intuitif pemula_

> 🎯 **Tujuan:** Membangun Versi 2 yang secara fundamental berbeda dari V1, membandingkan kedua pendekatan secara menyeluruh, dan mendokumentasikan jebakan logika (*gotcha*) dari eksperimen mandiri dengan base case.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 💭 | [Motivasi Evolusi](#motivasi) | Kenapa V1 belum cukup optimal |
| 🔢 | [Versi 2: Matematika Murni](#versi-2) | Kode + penalaran "Kenapa" tiap baris |
| 📊 | [Simulasi Call Stack V2](#simulasi-v2) | Visualisasi eksekusi arah belakang → depan |
| ⚖️ | [Perbandingan V1 vs V2](#perbandingan) | Tabel komparasi menyeluruh |
| ⚠️ | [Gotcha: Eksperimen Base Case](#gotcha) | Jebakan fatal & optimasi base case |

---

<a name="motivasi"></a>

## 💭 Motivasi Evolusi

Solusi V1 di [Solusi Bertahap](02-solusi-bertahap.md) sudah benar dan berjalan, namun memiliki kelemahan fundamental:

```
🔴 Masalah V1 (String)
   → Konversi tipe data bolak-balik di SETIAP iterasi Call Stack:
     Number → String → Number → String → Number → ...

🟢 Solusi V2 (Matematika Murni)
   → Konsisten Number dari awal hingga akhir
   → Nol konversi tipe data = performa lebih ringan
```

> [!NOTE]
> Awalnya kita membahas penghapusan variabel perantara untuk mempersingkat baris (*syntax refactoring*). Namun disadari bahwa itu bukan evolusi sesungguhnya — hanya penyingkatan sintaks tanpa mengubah algoritma. Evolusi sejati membutuhkan **perubahan pendekatan fundamental**.

---

<a name="versi-2"></a>

## 🔢 Versi 2 — Matematika Murni (Back-to-Front)

Kode ini sama sekali tidak menggunakan manipulasi `String`. Semua operasi dilakukan dengan sifat dasar aritmatika **sistem bilangan basis 10**.

```javascript
const totalDigitRekursif = (angka) => {
  // Base Case
  if (angka < 10) return angka;

  // Recursive Case
  const digitBelakang = angka % 10;
  const sisaAngka = Math.trunc(angka / 10);

  return digitBelakang + totalDigitRekursif(sisaAngka);
};
```

### Penalaran "Kenapa" Tiap Baris

**Kenapa `angka < 10` sebagai base case?**
- Tanpa tipe String, kita tidak punya `.length`. Namun secara logika matematika, semua angka satuan (0–9) bernilai **kurang dari 10**. Saat angka sudah di bawah 10, ia adalah digit terakhir yang siap di-*return* tanpa dipecah lagi.

**Kenapa `angka % 10` untuk ekstraksi?**
- Operasi Modulo (`%`) mengevaluasi **sisa bagi**. Membagi bilangan bulat apapun dengan 10, sisanya **selalu** sama dengan digit paling belakang.
- Contoh: `1542 % 10 = 2` — karena `1542 / 10 = 154 sisa 2`

**Kenapa `Math.trunc(angka / 10)` untuk pemotongan?**
- Membagi angka dengan 10 otomatis menggeser digit satuan ke belakang koma: `1542 / 10 = 154.2`
- `Math.trunc()` memotong habis angka di belakang koma, menyisakan `154` murni
- Digit satuan (`2`) sudah diekstrak oleh modulo, sehingga sisa depan (`154`) siap dilempar ke recursive call

> [!TIP]
> `Math.floor()` juga bisa dipakai sebagai pengganti `Math.trunc()` di sini karena kita hanya berurusan dengan bilangan bulat positif. Namun `Math.trunc()` lebih presisi secara semantik — ia **memotong desimal**, bukan **membulatkan ke bawah** (perbedaan terasa pada bilangan negatif).

---

<a name="simulasi-v2"></a>

## 📊 Simulasi Call Stack V2 — `totalDigitRekursif(512)`

Perhatikan arah pemrosesan yang **terbalik** dibanding V1:

### Fase Membuka Stack (Atas → Bawah)

```
totalDigitRekursif(512)
 ├── digitBelakang = 2, sisaAngka = 51
 └── return 2 + totalDigitRekursif(51)
                 │
                 ├── digitBelakang = 1, sisaAngka = 5
                 └── return 1 + totalDigitRekursif(5)
                                 │
                                 └── 🛑 Base Case! 5 < 10
                                     return 5
```

### Fase Menutup Stack (Bawah → Atas)

```
1. totalDigitRekursif(5)   → return 5           🛑 Base Case
2. totalDigitRekursif(51)  → return 1 + 5 = 6   🔄 Recursive
3. totalDigitRekursif(512) → return 2 + 6 = 8   🔄 Recursive

📌 Hasil Akhir = 8 ✅
```

> [!NOTE]
> V1 memproses `5 → 1 → 2` (depan ke belakang), V2 memproses `2 → 1 → 5` (belakang ke depan). Hasilnya tetap **identik** (`8`) karena sifat komutatif penjumlahan: `a + b = b + a`.

---

<a name="perbandingan"></a>

## ⚖️ Perbandingan V1 vs V2

| Aspek | V1 — String | V2 — Matematika Murni |
|-------|-------------|----------------------|
| **Arah Pemotongan** | Depan → Belakang (`1 → 5 → 4 → 2`) | Belakang → Depan (`2 → 4 → 5 → 1`) |
| **Deteksi Base Case** | Panjang karakter (`.length === 1`) | Komparasi nilai (`< 10`) |
| **Ekstraksi Digit** | Indeksasi string (`strAngka[0]`) | Sisa bagi (`angka % 10`) |
| **Pemotongan Sisa** | Substring (`.slice(1)`) | Pembagian + truncate (`Math.trunc`) |
| **Konversi Tipe Data** | Heavy — bolak-balik Number ↔ String | Nol — konsisten Number |
| **Intuisi Pemula** | ⭐ Tinggi — mirip cara manusia baca angka | ⚡ Rendah — perlu paham modulo & basis 10 |
| **Performa Runtime** | Lebih lambat (overhead casting) | Lebih cepat (tanpa casting) |

> [!IMPORTANT]
> **Key Takeaway:** V2 mendobrak kebiasaan intuitif pemula dalam memotong array/string. Pendekatan ini menuntut pemahaman tentang *base-10 counting system*, namun membayarnya dengan performa yang lebih cepat karena CPU terbebas dari konversi tipe data berulang di setiap lapisan Call Stack.

---

<a name="gotcha"></a>

## ⚠️ Gotcha: Eksperimen Base Case

Bagian ini mendokumentasikan pembelajaran dari **eksperimen mandiri** sebelum sesi mentoring — termasuk jebakan fatal yang menyebabkan infinite loop.

### 🔴 Jebakan: Salah Penempatan `Math.floor()`

```javascript
// ❌ SALAH — Math.floor membungkus HASIL fungsi, bukan argumen
return (angka % 10) + Math.floor(totalDigitRekursif(angka / 10));

// ✅ BENAR — Math.floor membungkus OPERASI PEMBAGIAN
return (angka % 10) + totalDigitRekursif(Math.floor(angka / 10));
```

> [!CAUTION]
> **Dampak fatal:** Jika `Math.floor()` membungkus hasil fungsi (bukan argumen), maka `totalDigitRekursif(512 / 10)` akan dipanggil sebagai `totalDigitRekursif(51.2)`. Angka desimal terus mengecil (`5.12 → 0.512 → 0.0512 → ...`) tanpa pernah mencapai base case — menyebabkan **Maximum Call Stack Exceeded**.

### 🔍 Optimasi: `<= 0` vs `< 10`

Meski `if (angka <= 0)` terbukti berhasil, ada pendekatan yang **lebih efisien**:

| Aspek | `if (angka <= 0)` | `if (angka < 10)` ✅ |
|-------|--------------------|-----------------------|
| **Konsep** | Menggerus angka sampai habis jadi `0` | Berhenti tepat saat tersisa 1 digit |
| **Input `5`** | Proses `5`, lalu panggil lagi dengan `0` → **2 kali** panggil | Langsung kenali `5 < 10`, return → **1 kali** panggil |
| **Pemanggilan ekstra** | ❌ Selalu +1 panggilan sia-sia (argumen `0`) | ✅ Tidak ada panggilan ekstra |

> [!TIP]
> Prinsip optimasi rekursif: **cegat pemanggilan fungsi sedini mungkin**. Base case `angka < 10` mencegah satu pemanggilan ekstra ke Call Stack yang tidak perlu pada setiap eksekusi.

---

⬅️ [Solusi Bertahap](02-solusi-bertahap.md) · ➡️ [Clean Code & Kode Final](04-clean-code-dan-kode-final.md)
