# 🚀 Fase 3 & 4: Evolusi Solusi & Clean Code

### ✨ _Dari solusi yang "bekerja" menuju solusi yang "elegan" — optimasi loop + penamaan variabel profesional_

> 🎯 **Tujuan:** Mengoptimasi performa kode dari O(N) menjadi O(√N) dengan insight matematika, lalu menerapkan English naming convention agar kode bisa "bercerita sendiri".

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔍 | [Penemuan Pola: Faktor Cermin](#penemuan-pola) | Mengapa separuh loop itu sia-sia? |
| ⚡ | [Optimasi: Math.sqrt](#optimasi-sqrt) | Memotong loop secara drastis dengan akar kuadrat |
| 🏷️ | [Clean Code: Naming Convention](#naming-convention) | Tabel rekomendasi penamaan variabel English |
| ⚖️ | [Perbandingan V1 vs V2](#perbandingan) | Kode final kedua versi + tabel perbedaan |
| 🎯 | [Kesimpulan & Key Takeaways](#kesimpulan) | Rangkuman pelajaran dari fase evolusi |

---

<a name="penemuan-pola"></a>
## 🔍 Penemuan Pola: Faktor Cermin

Solusi di Fase 2 sudah **bekerja**, tapi apakah **efisien**? Mari analisis pasangan faktor angka `24`:

```
Pasangan faktor 24:

  (1, 24)  (2, 12)  (3, 8)  (4, 6)      ← Paruh PERTAMA
                    ──── TENGAH ────
  (6, 4)   (8, 3)   (12, 2)  (24, 1)     ← Paruh KEDUA (hanya CERMIN!)
```

> [!IMPORTANT]
> 🔑 **Insight Kunci:** Setelah melewati titik tengah, pasangan faktor **hanya berulang terbalik**!
> - `(3, 8)` dan `(8, 3)` → pasangan **yang sama**, digit **yang sama**
> - Artinya: separuh loop kedua **100% sia-sia** — buang waktu tanpa hasil baru

### ❓ Di Mana Titik Tengahnya?

```
🎯 Jawaban  →  Titik tengah pembagi sebuah angka = AKAR KUADRAT (√)
📌 Rumus    →  Math.sqrt(angka)
🔢 Contoh   →  √24 ≈ 4.89 → cukup cek pembagi 1, 2, 3, 4 saja!
```

> [!TIP]
> 💡 **Analogi "Cermin di Tengah Jembatan"**
>
> | | Tanpa Optimasi | Dengan Optimasi |
> |---|---|---|
> | 🌉 Analogi | Jalan bolak-balik melewati seluruh jembatan | Jalan sampai tengah → sisanya cuma pantulan cermin |
> | 🔢 Angka 24 | Cek pembagi 1–24 (24 langkah) | Cek pembagi 1–4 saja (4 langkah) |
> | 📊 Efisiensi | Boros — separuh hasilnya duplikat | Hemat — **tidak ada yang terbuang** |

---

<a name="optimasi-sqrt"></a>
## ⚡ Optimasi: Math.sqrt

### Dampak Performa Yang Dramatis

| Input | Loop V1 (`i <= angka`) | Loop V2 (`i <= √angka`) | Hemat |
|:-----:|:----------------------:|:----------------------:|:-----:|
| 100 | 100 iterasi | 10 iterasi | **90%** |
| 10.000 | 10.000 iterasi | 100 iterasi | **99%** |
| 1.000.000 | 1.000.000 iterasi | **1.000 iterasi** | **99.9%** |

> [!CAUTION]
> 🔴 **Perubahan kritis — hanya 1 kata!**
>
> ```javascript
> // ❌ V1: Loop sampai angka (LAMBAT)
> for (let i = 1; i <= angka; i++)
>
> // ✅ V2: Loop sampai akar kuadrat saja (CEPAT)
> for (let i = 1; i <= Math.sqrt(angka); i++)
> ```
>
> Hanya menambahkan `Math.sqrt()` di batas loop, tapi dampaknya **LUAR BIASA**.

### 🤔 Kenapa Ini Aman?

Karena setiap kali kita menemukan `divisor`, kita **otomatis** juga mendapatkan `angka / divisor` — pasangannya. Jadi kedua sisi cermin sudah tercakup dalam satu pemeriksaan.

```
Contoh: angka = 24, divisor = 3
  → factor1 = 3 (divisor)
  → factor2 = 8 (24 / 3)
  → Gabungan "38" → 2 digit  ✅

Kita TIDAK PERLU menunggu divisor = 8 untuk menemukan pasangan (8, 3)
karena hasilnya sama: "83" → tetap 2 digit
```

---

<a name="naming-convention"></a>
## 🏷️ Clean Code: English Naming Convention

Selain performa, kode yang **mudah dibaca** sama pentingnya. Kita ubah variabel abstrak menjadi penamaan English yang representatif:

### 📖 Tabel Rekomendasi Naming

| Peran (Bahasa Indonesia) | ❌ Kurang Jelas | ✅ English Standard | Alasan |
|:-------------------------|:----------------|:-------------------|:-------|
| Angka target | `a`, `num` | `targetNumber` | Jelas bahwa ini angka utama yang dicari faktornya |
| Pembagi (loop counter) | `i`, `x` | `divisor` / `factor1` | Istilah matematika untuk "pembagi" |
| Hasil bagi (pasangan) | `angka / i` | `quotient` / `factor2` | Memisahkan rumus jadi variabel bantuan agar deskriptif |
| Gabungan teks faktor | `str`, `s` | `combinedFactors` | Memperjelas bahwa ini gabungan string kedua faktor |
| Penampung minimum | `res`, `result` | `minDigits` | Menggunakan `s` (plural) karena menyimpan **jumlah** digit |

> [!TIP]
> 💡 **Prinsip Self-Documenting Code:**
>
> ```javascript
> // ❌ Pembaca harus "menguraikan" rumus di kepalanya
> const str = `${i}${angka / i}`;
>
> // ✅ Kode "bercerita sendiri" — siapapun langsung paham
> const factor1 = divisor;
> const factor2 = targetNumber / divisor;
> const combinedFactors = `${factor1}${factor2}`;
> ```
>
> Dengan mengekstrak `angka / i` menjadi variabel `factor2`, kode menjadi **dokumentasi hidup** — tidak perlu komentar berlebihan.

---

<a name="perbandingan"></a>
## ⚖️ Perbandingan Versi Final

### 💻 Versi 1: Solusi Dasar — O(N)

```javascript
const digitPerkalianMinimum = (targetNumber) => {
  let minDigits = Infinity;

  for (let divisor = 1; divisor <= targetNumber; divisor++) {
    if (targetNumber % divisor === 0) {
      const factor1 = divisor;
      const factor2 = targetNumber / divisor;
      const combinedFactors = `${factor1}${factor2}`;

      if (combinedFactors.length < minDigits) {
        minDigits = combinedFactors.length;
      }
    }
  }

  return minDigits;
};
```

### 🚀 Versi 2: Solusi Optimal — O(√N)

```javascript
const digitPerkalianMinimum = (targetNumber) => {
  let minDigits = Infinity;

  // OPTIMASI: Batas perulangan dipotong hingga akar kuadrat saja
  for (let divisor = 1; divisor <= Math.sqrt(targetNumber); divisor++) {
    if (targetNumber % divisor === 0) {
      const factor1 = divisor;
      const factor2 = targetNumber / divisor;
      const combinedFactors = `${factor1}${factor2}`;

      if (combinedFactors.length < minDigits) {
        minDigits = combinedFactors.length;
      }
    }
  }

  return minDigits;
};
```

### 📊 Tabel Perbandingan

| Aspek | V1 Dasar 🔵 | V2 Optimal 🟢 |
|:------|:----------:|:------------:|
| Batas loop | `divisor <= targetNumber` | `divisor <= Math.sqrt(targetNumber)` |
| Kompleksitas waktu | O(N) — linear | O(√N) — **sub-linear** |
| Input 1 juta | 1.000.000 iterasi 🔴 | 1.000 iterasi 🟢 |
| Hasil akhir | ✅ Sama | ✅ Sama |
| Readability | ✅ Mudah dipahami | ✅ Mudah dipahami |
| Kapan pakai? | Prototipe cepat / belajar | **Produksi / interview** |

> [!NOTE]
> 💡 **Kapan pakai V1 vs V2?**
> - **V1** cocok untuk **belajar** — memahami alur logika tanpa distraksi optimasi
> - **V2** wajib untuk **kode nyata** — hemat waktu eksekusi secara signifikan

---

<a name="kesimpulan"></a>
## 🎯 Kesimpulan & Key Takeaways

```
✅ OPTIMASI MATEMATIKA   →  Untuk semua soal pencarian faktor, hentikan loop
                            di Math.sqrt(n) — performa naik dari O(N) ke O(√N)

✅ FAKTOR CERMIN          →  Pasangan faktor selalu "bercermin" di titik √N
                            Cukup cek satu sisi, sisi lainnya otomatis tercakup

✅ SELF-DOCUMENTING CODE  →  Jangan biarkan rumus langsung di Template Literals
                            Ekstrak jadi variabel (factor1, factor2) agar kode bercerita

✅ NAMING = KOMUNIKASI    →  Nama variabel English yang deskriptif menggantikan
                            kebutuhan komentar berlebihan — kode jadi "dokumentasi hidup"
```

---

| ⬅️ Sebelumnya | 📋 Daftar Isi | Selanjutnya ➡️ |
|:-:|:-:|:-:|
| [02 — Solusi Bertahap](./02-solusi-bertahap.md) | [README](../README.md) | [04 — Insight Best Practice](./04-insight-best-practice.md) |
