# ✅ V1 — Perkalian Langsung (Efisien)

## 💻 Kode Lengkap

```js
function attack(damage) {
  return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  return numberOfAttacks * attack(damagePerAttack);
}
```

---

## 🔍 Penjelasan Baris per Baris

```js
function attack(damage) {
  return damage - 2;
  // Setiap attack, damage dikurangi 2
  // Contoh: attack(10) → 10 - 2 → 8
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  return numberOfAttacks * attack(damagePerAttack);
  // attack(damagePerAttack) → hitung damage sebenarnya (dikurangi 2)
  // Lalu kalikan dengan jumlah serangan
  // Contoh: 3 * attack(10) → 3 * 8 → 24
}
```

---

## 📊 Verifikasi Test Case

```
damageCalculation(9, 25):
  attack(25) = 25 - 2 = 23
  23 × 9 = 207 ✅

damageCalculation(10, 4):
  attack(4) = 4 - 2 = 2
  2 × 10 = 20 ✅

damageCalculation(5, 20):
  attack(20) = 20 - 2 = 18
  18 × 5 = 90 ✅
```

---

## ⚖️ Kelebihan & Kekurangan

| Aspek | Detail |
|-------|--------|
| **Time Complexity** | `O(1)` — hanya 1 kali kalkulasi |
| **Readability** | ✅ Sangat singkat dan bersih |
| **Akurasi** | ✅ Hasilnya benar untuk semua test case |
| **Kelemahan** | Tidak benar-benar "mensimulasikan" tiap serangan satu per satu |

> 💡 Solusi ini valid dan efisien. Cocok dipakai di production karena O(1).

---

*Lanjut ke → [03 — Solusi V2: Loop Simulasi](./03-v2-loop-simulation_simulasi-loop.md)*
