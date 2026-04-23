# 📋 Ringkasan Algoritma — Damage Calculation

## ✅ V1: Perkalian Langsung

```js
function attack(damage) {
  return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  return numberOfAttacks * attack(damagePerAttack);
}
```

**Complexity:** Time `O(1)` | Space `O(1)`

---

## 🔄 V2: Loop Simulasi

```js
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

**Complexity:** Time `O(n)` | Space `O(1)`

---

## ⚖️ Perbandingan

| | V1 — Perkalian | V2 — Loop |
|---|---|---|
| Time Complexity | `O(1)` | `O(n)` |
| Simulasi tiap serangan | ❌ Tidak | ✅ Ya |
| Readability | ✅ Singkat | ✅ Jelas |
| Cocok untuk | Production | Belajar |
