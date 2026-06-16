# 📋 Ringkasan Semua Versi Solusi

### ✨ _Cheat sheet copy-paste untuk rujukan cepat_

> 🎯 **Tujuan:** Menyediakan kumpulan lengkap semua versi kode final dalam satu halaman, tanpa penjelasan panjang — siap untuk dibaca ulang atau di-copy kapan saja.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 1️⃣ | [Versi 1 — Standard](#versi-1) | Fundamental, mudah dibaca pemula |
| 2️⃣ | [Versi 2 — Modern ES6](#versi-2) | Arrow Function + edge case guard 🌟 |
| 3️⃣ | [Versi 3 — Looping](#versi-3) | Iteratif, untuk edukasi saja |
| 🧪 | [Test Cases](#test-cases) | Data uji validasi |

---

<a name="versi-1"></a>
## 1️⃣ Versi 1 — Standard (O(1))

> Pendekatan dasar menggunakan `function` declaration. Cocok untuk pemula yang baru belajar dekomposisi fungsi.

```javascript
function attack(damage) {
  return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  return numberOfAttacks * attack(damagePerAttack);
}
```

> [!WARNING]
> Belum menangani edge case damage minus. Detail: [03-evolusi-performa.md](03-evolusi-performa.md#edge-case)

---

<a name="versi-2"></a>
## 2️⃣ Versi 2 — Modern ES6 (O(1)) 🌟

> **Best Practice.** Arrow Function one-liner + pengaman `Math.max` agar damage tidak pernah minus.

```javascript
const attack = (damage) => Math.max(0, damage - 2);

const damageCalculation = (numberOfAttacks, damagePerAttack) =>
  numberOfAttacks * attack(damagePerAttack);
```

> [!TIP]
> Ini adalah versi yang paling direkomendasikan: **ringkas**, **aman**, dan **performa optimal**.

---

<a name="versi-3"></a>
## 3️⃣ Versi 3 — Looping / Iteratif (O(N))

> Mensimulasikan pukulan satu per satu. Disimpan untuk edukasi perbandingan performa, **bukan** untuk production.

```javascript
function attack(damage) {
  return Math.max(0, damage - 2);
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  let totalDamage = 0;

  for (let i = 0; i < numberOfAttacks; i++) {
    totalDamage += attack(damagePerAttack);
  }

  return totalDamage;
}
```

> [!CAUTION]
> Performa O(N) — semakin besar `numberOfAttacks`, semakin lambat eksekusinya. Analisis lengkap: [03-evolusi-performa.md](03-evolusi-performa.md#perbandingan-performa)

---

<a name="test-cases"></a>
## 🧪 Test Cases

```javascript
console.log(damageCalculation(9, 25));  // 207
console.log(damageCalculation(10, 4));  // 20
console.log(damageCalculation(5, 20));  // 90
```

| Input | Damage Efektif | Perhitungan | Output |
|:-----:|:--------------:|:-----------:|:------:|
| `(9, 25)` | 25 - 2 = 23 | 9 × 23 | **207** |
| `(10, 4)` | 4 - 2 = 2 | 10 × 2 | **20** |
| `(5, 20)` | 20 - 2 = 18 | 5 × 18 | **90** |

---

⬅️ Kembali ke [03-evolusi-performa.md](03-evolusi-performa.md) · ⬆️ Kembali ke [README.md](../README.md)
