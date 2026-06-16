# 🔄 Cheat Sheet — Damage Calculation

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Arrow Function + Math.max Guard ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const attack = (damage) => Math.max(0, damage - 2);

const damageCalculation = (numberOfAttacks, damagePerAttack) =>
  numberOfAttacks * attack(damagePerAttack);
```

> 🔑 One-liner modern ES6 dengan `Math.max` mencegah damage minus. Performa O(1), ringkas, dan aman untuk production.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 1. Function Declaration — Perkalian Langsung `PALING INTUITIF`

```javascript
function attack(damage) {
  return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  return numberOfAttacks * attack(damagePerAttack);
}
```

> 🔑 Pendekatan paling dasar dengan `function` declaration. Cocok untuk pemula yang baru belajar dekomposisi fungsi. Belum ada guard edge case.

---

### 2. Loop Simulasi — Iteratif

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

> 🔑 Mensimulasikan pukulan satu per satu menggunakan `for` loop. Bagus untuk melatih logika iterasi, tapi performa O(N) — hindari di production.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 1. Loop Simulasi (Tanpa Guard)

```javascript
function attack(damage) {
  return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  let totalDamage = 0;

  for (let i = 1; i <= numberOfAttacks; i++) {
    totalDamage += attack(damagePerAttack);
  }

  return totalDamage;
}
```

> 🔑 Variasi loop dengan index mulai dari `1` dan `<=`. Hasil sama, tapi tanpa `Math.max` guard. Murni untuk perbandingan gaya iterasi.

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ Tanpa guard — damage bisa minus!
attack(1);  // -1  (seharusnya 0)

// ✅ Dengan Math.max — damage aman
const attack = (damage) => Math.max(0, damage - 2);
attack(1);  // 0  ✅
```

```javascript
// ❌ Loop index off-by-one
for (let i = 1; i <= n; i++)   // mulai dari 1, pakai <=
for (let i = 0; i < n; i++)    // mulai dari 0, pakai <
// Keduanya iterasi n kali, tapi pastikan konsisten!
```

---

## 📊 QUICK COMPARISON

| Versi | Pendekatan | Baris | Time | Guard | Rekomendasi |
|:-----:|:----------:|:-----:|:----:|:-----:|:-----------:|
| V1 — Standard | `function` + perkalian | 2 fungsi, 5 baris | O(1) | ❌ | 🟡 Belajar |
| V2 — ES6 🌟 | Arrow + `Math.max` | 2 fungsi, 3 baris | O(1) | ✅ | 🟢 **Production** |
| V3 — Loop | `for` loop + `Math.max` | 2 fungsi, 10 baris | O(N) | ✅ | 🔴 Edukasi saja |
| V4 — Loop (no guard) | `for` loop tanpa guard | 2 fungsi, 10 baris | O(N) | ❌ | 🔴 Eksperimental |

---

## 🧪 TEST CASES

```javascript
console.log(damageCalculation(9, 25));  // 207
console.log(damageCalculation(10, 4));  // 20
console.log(damageCalculation(5, 20));  // 90
```
