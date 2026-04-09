# ⚡ Ringkasan Algoritma — Semua Versi / Algorithm Summary — All Versions

![Language](https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript)
![Topic](https://img.shields.io/badge/Topic-Recursion-orange?style=for-the-badge)
![Versions](https://img.shields.io/badge/Versions-6-blue?style=for-the-badge)

> File ini adalah referensi cepat — cocok dibuka saat lupa atau menemukan challenge serupa.

---

## 🏆 Versi 1 — Solusi Awal: String & Array

```js
function totalDigitRekursif(angka, index = [...angka.toString()].length - 1) {
  if (index < 0) return 0

  return +[...angka.toString()][index] + totalDigitRekursif(angka, index - 1)
}
```

| | |
|--|--|
| Arah | Belakang → depan |
| Base case | `index < 0` |
| Konversi | Angka → string → array → angka |
| Catatan | ⚠️ Banyak konversi berulang di setiap level |

---

## 🥇 Versi 2 — Rekursif Matematis (`=== 0`)

```js
const totalDigitRekursif = (angka) => {
  if (angka === 0) return 0

  return angka % 10 + totalDigitRekursif(Math.floor(angka / 10))
}
```

| | |
|--|--|
| Arah | Belakang → depan |
| Base case | `angka === 0` |
| Konversi | Tidak ada |
| Catatan | ✅ Bersih, tapi satu langkah rekursif ekstra dibanding `< 10` |

---

## 🥇 Versi 3 — Rekursif Matematis (`< 10`) ⭐ Rekomendasi

```js
function totalDigitRekursif(angka) {
  if (angka < 10) return angka

  return (angka % 10) + totalDigitRekursif(Math.floor(angka / 10))
}
```

| | |
|--|--|
| Arah | Belakang → depan |
| Base case | `angka < 10` — berhenti saat sudah 1 digit |
| Konversi | Tidak ada |
| Catatan | ✅ Paling bersih, efisien, dan eksplisit |

---

## 🔤 Versi 4 — String: Depan ke Belakang

```js
function totalDigitRecursive(number) {
  const digits = String(number)

  if (digits.length === 1) {
    return Number(digits)
  }

  return Number(digits[0]) + totalDigitRecursive(Number(digits.slice(1)))
}
```

| | |
|--|--|
| Arah | Depan → belakang |
| Base case | `digits.length === 1` |
| Konversi | Angka ↔ string di setiap level |
| Catatan | ⚠️ Banyak konversi, tapi arah prosesnya intuitif |

---

## 🐾 Versi 5 — Tail Recursion

```js
function totalDigitRecursive(number, total = 0) {
  if (number === 0) {
    return total
  }

  return totalDigitRecursive(
    Math.floor(number / 10),
    total + (number % 10)
  )
}
```

| | |
|--|--|
| Arah | Belakang → depan |
| Base case | `number === 0` |
| Akumulator | `total` — dibawa antar pemanggilan |
| Konversi | Tidak ada |
| Catatan | ✅ Tidak ada unwinding — hasil langsung tersedia di base case |

---

## 🔁 Versi 6 — Iteratif

```js
const totalDigitRekursif = (angka) => {
  let total = 0

  while (angka >= 10) {
    total += angka % 10
    angka = Math.floor(angka / 10)
  }

  return total + angka
}
```

| | |
|--|--|
| Mekanisme | `while` loop |
| Akumulator | `total` — dijumlahkan setiap iterasi |
| Kondisi loop | `angka >= 10` |
| Setelah loop | `return total + angka` — digit terakhir ditambahkan |
| Catatan | ✅ Tidak ada call stack tambahan |

---

## 🧠 Teknik Kunci: Extract & Drop Last Digit

Inti dari pendekatan matematis di semua versi rekursif:

```js
angka % 10              // ambil digit terakhir  → 512 % 10 = 2
Math.floor(angka / 10)  // buang digit terakhir  → Math.floor(512 / 10) = 51
```

---

## 🧪 Edge Cases

| Input | Hasil | Keterangan |
|-------|-------|------------|
| `0` | `0` | ✅ Aman di semua versi |
| `-512` | 💥 Crash | `Math.floor` menjauhi nol pada angka negatif |
| `5.7` | `5.7` | ⚠️ Tidak error, tapi hasil tidak sesuai ekspektasi |

---

## 📊 Perbandingan Cepat

| Versi | Jenis | Konversi | Akumulator | Unwinding |
|-------|-------|----------|------------|-----------|
| V1 String & Array | Rekursif | ⚠️ Banyak | ❌ | ✅ Ada |
| V2 Matematis `=== 0` | Rekursif | ✅ Tidak ada | ❌ | ✅ Ada |
| V3 Matematis `< 10` ⭐ | Rekursif | ✅ Tidak ada | ❌ | ✅ Ada |
| V4 String Depan-Belakang | Rekursif | ⚠️ Banyak | ❌ | ✅ Ada |
| V5 Tail Recursion | Rekursif | ✅ Tidak ada | ✅ Ada | ❌ Tidak ada |
| V6 Iteratif | Iteratif | ✅ Tidak ada | ✅ Ada | ❌ Tidak ada |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](./README.md)**
- **📖 [Lihat Perbandingan Lengkap → Part 9](./docs/09-all-versions-comparison_perbandingan-semua-versi.md)**

---

<div align="center">

Made with ❤️ for learners

</div>