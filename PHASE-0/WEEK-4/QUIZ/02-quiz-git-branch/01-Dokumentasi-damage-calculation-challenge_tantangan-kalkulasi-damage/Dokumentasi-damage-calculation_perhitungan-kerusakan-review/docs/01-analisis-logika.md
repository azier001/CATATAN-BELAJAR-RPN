# 🔍 Analisis Logika & Pendekatan Bertahap

### ✨ _Dari tabel pola ke kode yang bekerja — tanpa menebak-nebak_

> 🎯 **Tujuan:** Memahami bagaimana rumus `damage - 2` ditemukan melalui visualisasi data, lalu menerjemahkannya ke kode JavaScript secara bertahap (step-by-step).

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📊 | [Visualisasi Pola](#visualisasi-pola) | Tabel breakdown untuk menemukan rumus |
| 🧠 | [Penemuan Rumus](#penemuan-rumus) | Menghubungkan pola tabel ke formula matematis |
| 🔨 | [Membangun Kode Bertahap](#membangun-kode-bertahap) | Step 1 → Step 2 → solusi lengkap |
| ✅ | [Solusi Akhir Versi 1](#solusi-akhir-v1) | Kode final dari pendekatan bertahap |

---

<a name="visualisasi-pola"></a>
## 📊 Visualisasi Pola

> [!IMPORTANT]
> **Aturan utama:** Sebelum menulis satu baris kode pun, kita WAJIB memecah contoh soal secara manual menggunakan tabel agar pola perhitungannya terlihat jelas.

Kita bedah test case `damageCalculation(3, 10)` yang harus menghasilkan **24**:

| Attack ke- | Damage Asli | Penalti | Damage Efektif | Keterangan |
|:----------:|:-----------:|:-------:|:--------------:|------------|
| 1 | 10 | -2 | 8 | 10 - 2 = 8 |
| 2 | 10 | -2 | 8 | 10 - 2 = 8 |
| 3 | 10 | -2 | 8 | 10 - 2 = 8 |
| **Total** | | | **24** | 8 + 8 + 8 |

**Temuan dari tabel:**
- Setiap serangan menghasilkan damage yang **sama** (8), karena penalti selalu tetap (-2).
- Total akhir adalah **akumulasi** dari damage efektif di semua serangan.

---

<a name="penemuan-rumus"></a>
## 🧠 Penemuan Rumus

Dari tabel di atas, kita menemukan dua operasi inti yang bisa dipisahkan menjadi dua fungsi:

### 1. Rumus Fungsi `attack` — Menghitung Damage Efektif

```
🎯 Tugas    → Mensimulasikan penalti di setiap satu kali pukulan
📌 Rumus    → damage - 2
🔐 Analogi  → Seperti tukang pukul yang selalu kehilangan 2 tenaga
              sebelum tinjunya menyentuh target
```

- **Kenapa `damage - 2`?** Karena soal secara eksplisit menyatakan *"rumus damage - 2 di setiap attack"*. Angka `2` adalah penalti konstan yang tidak pernah berubah.
- **Contoh:** Jika `damage = 10`, maka `10 - 2 = 8`.

### 2. Rumus Fungsi `damageCalculation` — Menghitung Total Akhir

Karena setiap pukulan menghasilkan damage yang sama (setelah dikurangi penalti), total akhirnya cukup menggunakan **perkalian**:

```
🎯 Tugas    → Mengalikan jumlah serangan dengan damage efektif
📌 Rumus    → numberOfAttacks × attack(damagePerAttack)
🔐 Analogi  → Kalau satu pukulan menyakiti 8 HP, maka 3 pukulan
              menyakiti 3 × 8 = 24 HP
```

- **Kenapa perkalian, bukan penjumlahan berulang?** Karena hasilnya identik (`8 + 8 + 8 = 3 × 8 = 24`), tapi perkalian jauh lebih efisien secara komputasi.
- **Contoh:** `numberOfAttacks = 3`, `attack(10) = 8` → `3 × 8 = 24` ✅

> [!TIP]
> **Delegasi tugas:** Fungsi `damageCalculation` tidak perlu tahu *cara* menghitung penalti. Dia cukup *memanggil* fungsi `attack` dan mempercayakan urusan pemotongan kepadanya. Inilah prinsip **modularitas** dalam pemrograman.

---

<a name="membangun-kode-bertahap"></a>
## 🔨 Membangun Kode Bertahap

> [!NOTE]
> Kode tidak langsung ditulis secara utuh. Kita membangunnya secara bertahap agar setiap bagian tervalidasi sebelum digabungkan.

### Step 1: Menyelesaikan Fungsi Pembantu (`attack`)

Tugas paling mendasar — menerjemahkan rumus `damage - 2` ke dalam sintaks `return`:

```javascript
function attack(damage) {
  return damage - 2;
}
```

- ✅ Input `10` → output `8`
- ✅ Fungsi ini berdiri sendiri dan bisa diuji secara independen.

### Step 2: Menyelesaikan Fungsi Utama (`damageCalculation`)

Setelah `attack` terbukti bekerja, kita merangkai fungsi utama yang mengorkestrasi keseluruhan perhitungan:

1. **Hitung damage efektif** dengan memanggil `attack(damagePerAttack)`.
2. **Kalikan** hasilnya dengan `numberOfAttacks`.

Kedua langkah tersebut dirangkum menjadi satu baris `return`:

```javascript
function damageCalculation(numberOfAttacks, damagePerAttack) {
  return numberOfAttacks * attack(damagePerAttack);
}
```

- ✅ `damageCalculation(3, 10)` → `3 × attack(10)` → `3 × 8` → `24` ✅

---

<a name="solusi-akhir-v1"></a>
## ✅ Solusi Akhir (Versi 1 — Standard)

```javascript
function attack(damage) {
  return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  return numberOfAttacks * attack(damagePerAttack);
}
```

> [!WARNING]
> Versi 1 ini belum menangani **edge case** (misalnya `damagePerAttack = 1` yang menghasilkan damage minus). Penanganannya dibahas di [03-evolusi-performa.md](03-evolusi-performa.md).

---

⬅️ Kembali ke [README.md](../README.md) · ➡️ Lanjut ke [02-arsitektur-penamaan.md](02-arsitektur-penamaan.md)
