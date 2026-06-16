# 🗺️ Arsitektur Kode & Penamaan Variabel

### ✨ _Blueprint mental sebelum ngoding + standar naming yang bikin kode "berbicara sendiri"_

> 🎯 **Tujuan:** Memahami struktur kerangka kode (blueprint) sebelum menulis kode final, dan menguasai prinsip penamaan variabel yang deskriptif agar kode mudah dibaca oleh siapa pun.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📖 | [Kamus Variabel](#kamus-variabel) | Tabel pemetaan setiap variabel ke peran & nama rekomendasi |
| 🏗️ | [Kerangka Kode (Blueprint)](#blueprint) | Struktur kosong dengan komentar peran |
| 🏷️ | [Naming Convention](#naming-convention) | Tabel perbandingan ❌ Bad vs ✅ Good |
| 💡 | [Prinsip Penamaan](#prinsip-penamaan) | Kapan `i` boleh dipakai, kapan harus deskriptif |

---

<a name="kamus-variabel"></a>
## 📖 Kamus Variabel

Tabel ini memetakan setiap variabel/fungsi ke lokasi penggunaannya beserta rekomendasi nama terbaik:

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|----------------|-------------------|--------|
| Fungsi pemotong damage | `attack` | `atk`, `hitung`, `calc` | Kata kerja bahasa Inggris yang merepresentasikan aksi spesifik dalam konteks game |
| Fungsi kalkulator utama | `damageCalculation` | `calc`, `hitungDamage`, `dc` | Mendeskripsikan ruang lingkup pekerjaan secara transparan |
| Parameter jumlah serangan | `numberOfAttacks` | `n`, `jml`, `total` | Imbuhan `numberOf` menegaskan tipe data berupa angka kuantitas |
| Parameter damage dasar | `damagePerAttack` | `d`, `dmg`, `power` | Suffix `PerAttack` menghilangkan ambiguitas: ini damage satuan, bukan total |
| Penampung akumulasi *(versi loop)* | `totalDamage` | `hasil`, `res`, `sum`, `x` | `total` = akumulasi, `Damage` = konteks spesifik yang diakumulasi |

---

<a name="blueprint"></a>
## 🏗️ Kerangka Kode (Blueprint)

> [!NOTE]
> Blueprint adalah "peta kosong" yang memperlihatkan **struktur dan hubungan antar bagian** sebelum diisi logika. Gunakan ini sebagai *mental model* saat mengerjakan challenge serupa.

### Blueprint Versi Standard

```javascript
// 🗺️ KERANGKA KODE (Mental Model: 2 fungsi terpisah — pembantu & orkestrator)

function attack(damage) {
  // [PEMOTONG] → kurangi damage dengan penalti tetap
  // return ...
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  // [ORKESTRATOR] → panggil attack() lalu kalikan dengan jumlah serangan
  // return ...
}
```

### Blueprint Versi Modern (ES6 Arrow Function)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: one-liner dengan pengaman edge case)

const attack = (damage) => /* [PEMOTONG + PENGAMAN] → Math.max(0, ...) */;

const damageCalculation = (numberOfAttacks, damagePerAttack) =>
  /* [ORKESTRATOR] → numberOfAttacks × attack(...) */;
```

### Blueprint Versi Loop *(edukasi)*

```javascript
// 🗺️ KERANGKA KODE (Mental Model: simulasi pukulan satu per satu)

function attack(damage) {
  // [PEMOTONG + PENGAMAN] → return Math.max(0, ...)
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  let totalDamage = 0;              // [PENAMPUNG] → akumulasi hasil

  for (let i = 0; ...) {            // [LOOP] → ulangi sebanyak numberOfAttacks
    totalDamage += attack(...);     //   [AKUMULASI] → tambahkan hasil setiap pukulan
  }

  return totalDamage;               // [OUTPUT] → kembalikan total akhir
}
```

---

<a name="naming-convention"></a>
## 🏷️ Naming Convention

Tabel perbandingan penamaan buruk vs penamaan yang direkomendasikan:

| Peran Variabel | ❌ Bad | ✅ Good | Alasan Fundamental |
|----------------|--------|---------|-------------------|
| Fungsi pemotong | `atk()`, `kurangDua()` | `attack()` | Kata kerja (*verb*) yang natural sesuai domain game |
| Fungsi utama | `calc()`, `hitung()` | `damageCalculation()` | Lugas mendeskripsikan tujuan spesifik |
| Kuantitas pukulan | `n`, `jml` | `numberOfAttacks` | `numberOf...` = pola standar untuk kuantitas |
| Kekuatan satuan | `d`, `dmg` | `damagePerAttack` | `Per...` = pola standar untuk nilai satuan |
| Penampung total | `res`, `x` | `totalDamage` | `total...` = pola standar untuk akumulasi |

---

<a name="prinsip-penamaan"></a>
## 💡 Prinsip Penamaan

> [!TIP]
> **Self-Documenting Code:** Nama variabel yang baik harus mampu menjelaskan perannya sendiri tanpa bantuan komentar tambahan seperti `// ini menyimpan jumlah pukulan`.

### Kapan `i` Boleh Dipakai?

Variabel pendek seperti `i`, `j`, `k` **hanya boleh** digunakan sebagai *counter* di dalam loop yang sederhana dan pendek:

```javascript
// ✅ OK — loop pendek, i jelas berperan sebagai counter
for (let i = 0; i < numberOfAttacks; i++) {
  totalDamage += attack(damagePerAttack);
}
```

### Kapan HARUS Deskriptif?

Jika variabel menyimpan **data bermakna** yang akan digunakan di banyak tempat atau di-return sebagai output:

```javascript
// ❌ Membingungkan
let r = n * atk(d);

// ✅ Langsung paham tanpa baca konteks
let totalDamage = numberOfAttacks * attack(damagePerAttack);
```

> [!IMPORTANT]
> **Consistency is Key:** JavaScript menggunakan **camelCase** secara mutlak untuk penamaan variabel dan fungsi yang terdiri dari lebih dari satu kata. Contoh: `numberOfAttacks` ✅, bukan `number_of_attacks` ❌ atau `NumberOfAttacks` ❌.

---

⬅️ Kembali ke [01-analisis-logika.md](01-analisis-logika.md) · ➡️ Lanjut ke [03-evolusi-performa.md](03-evolusi-performa.md)
