# 📋 Ringkasan Semua Versi Kode

### ✨ _Cheat sheet — semua versi kode siap copy-paste dalam satu halaman_

> 🎯 **Tujuan:** Referensi cepat untuk melihat dan membandingkan seluruh versi kode `totalDigitRekursif` yang dibahas di dokumentasi ini — tanpa perlu membuka banyak file.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🟢 | [V1 — String (Tahap Belajar)](#v1-belajar) | Versi awal dengan variabel perantara |
| 🔵 | [V1 — String (Clean Code)](#v1-clean) | Versi final one-line return |
| 🟠 | [V2 — Matematika (Tahap Belajar)](#v2-belajar) | Versi awal dengan naming Indonesia |
| 🔴 | [V2 — Matematika (Clean Code)](#v2-clean) | Versi final naming profesional |
| ⚖️ | [Tabel Perbandingan Ringkas](#perbandingan) | Semua versi dalam 1 tabel |

---

<a name="v1-belajar"></a>

## 🟢 V1 — String (Tahap Belajar)

```
📌 Pendekatan  → Manipulasi String (front-to-back)
🔀 Arah Potong → Depan → Belakang (1 → 5 → 4 → 2)
🛑 Base Case   → strAngka.length === 1
```

```javascript
const totalDigitRekursif = (angka) => {
  const strAngka = String(angka);

  if (strAngka.length === 1) return Number(strAngka);

  const digitDepan = Number(strAngka[0]);
  const sisaDigit = Number(strAngka.slice(1));

  return digitDepan + totalDigitRekursif(sisaDigit);
};
```

---

<a name="v1-clean"></a>

## 🔵 V1 — String (Clean Code) ⭐

```
📌 Pendekatan  → Manipulasi String (front-to-back)
🔀 Arah Potong → Depan → Belakang
🛑 Base Case   → strNum.length === 1
✨ Refactor    → One-line return + English naming
```

```javascript
const totalDigitRekursif = (num) => {
  const strNum = String(num);

  if (strNum.length === 1) return Number(strNum);

  return Number(strNum[0]) + totalDigitRekursif(Number(strNum.slice(1)));
};
```

---

<a name="v2-belajar"></a>

## 🟠 V2 — Matematika Murni (Tahap Belajar)

```
📌 Pendekatan  → Aritmatika basis 10 (back-to-front)
🔀 Arah Potong → Belakang → Depan (2 → 4 → 5 → 1)
🛑 Base Case   → angka < 10
```

```javascript
const totalDigitRekursif = (angka) => {
  if (angka < 10) return angka;

  const digitBelakang = angka % 10;
  const sisaAngka = Math.trunc(angka / 10);

  return digitBelakang + totalDigitRekursif(sisaAngka);
};
```

---

<a name="v2-clean"></a>

## 🔴 V2 — Matematika Murni (Clean Code) ⭐

```
📌 Pendekatan  → Aritmatika basis 10 (back-to-front)
🔀 Arah Potong → Belakang → Depan
🛑 Base Case   → num < 10
✨ Refactor    → English naming (variabel dipertahankan untuk readability)
```

```javascript
const totalDigitRekursif = (num) => {
  if (num < 10) return num;

  const lastDigit = num % 10;
  const remainingNum = Math.trunc(num / 10);

  return lastDigit + totalDigitRekursif(remainingNum);
};
```

> [!TIP]
> Versi bertanda ⭐ adalah **kode final yang direkomendasikan**. V2 Clean Code adalah pilihan terbaik secara keseluruhan — tanpa konversi tipe data, naming deskriptif, dan performa paling ringan.

---

<a name="perbandingan"></a>

## ⚖️ Tabel Perbandingan Ringkas

| Versi | Pendekatan | Arah | Base Case | Konversi Tipe | Baris Logika |
|-------|-----------|------|-----------|---------------|--------------|
| 🟢 V1 Belajar | String | Depan → Belakang | `.length === 1` | Heavy (Number ↔ String) | 5 |
| 🔵 V1 Clean | String | Depan → Belakang | `.length === 1` | Heavy (Number ↔ String) | 3 |
| 🟠 V2 Belajar | Matematika | Belakang → Depan | `< 10` | Nol | 4 |
| 🔴 V2 Clean ⭐ | Matematika | Belakang → Depan | `< 10` | Nol | 4 |

> [!NOTE]
> Penjelasan mendalam setiap versi tersedia di file dokumentasi terkait:
> - V1 step-by-step → [Solusi Bertahap](docs/02-solusi-bertahap.md)
> - V2 & perbandingan → [Evolusi & Perbandingan](docs/03-evolusi-dan-perbandingan.md)
> - Proses clean code → [Clean Code & Kode Final](docs/04-clean-code-dan-kode-final.md)

---

⬅️ [Clean Code & Kode Final](docs/04-clean-code-dan-kode-final.md) · ⬆️ [README](README.md)
