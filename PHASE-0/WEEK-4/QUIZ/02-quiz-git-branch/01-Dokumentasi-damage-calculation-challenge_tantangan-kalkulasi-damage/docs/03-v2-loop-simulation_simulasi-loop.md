# 🔄 V2 — Loop Simulasi (Rekomendasi untuk Belajar)

## 💻 Kode Lengkap

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

---

## 🔍 Penjelasan Baris per Baris

```js
let totalDamage = 0;
// Siapkan "kantong" untuk menampung total damage, mulai dari 0

for (let i = 1; i <= numberOfAttacks; i++) {
  // Loop sebanyak jumlah serangan (numberOfAttacks)
  // i hanya penunjuk urutan: serangan ke-1, ke-2, ke-3...
  // nilai i TIDAK ikut dihitung dalam damage!

  totalDamage += attack(damagePerAttack);
  // Setiap iterasi: panggil attack() → kurangi damage 2
  // Tambahkan hasilnya ke totalDamage
}

return totalDamage;
// Kembalikan total semua damage
```

---

## 🎞️ Visualisasi ASCII — `damageCalculation(3, 10)`

```
Input: numberOfAttacks = 3, damagePerAttack = 10

Mula-mula:
totalDamage = 0 (Kantong damage masih kosong)

-----------------------------------------------------------
Loop Iterasi ke-1 (i = 1):
-----------------------------------------------------------
Panggil attack(10)  -->  Hasil: 8 (Ingat: 10 - 2)
Proses: totalDamage = 0 + 8
State: [ totalDamage = 8 ]  <-- Baru ada 1 serangan masuk

-----------------------------------------------------------
Loop Iterasi ke-2 (i = 2):
-----------------------------------------------------------
Panggil attack(10)  -->  Hasil: 8
Proses: totalDamage = 8 + 8
State: [ totalDamage = 16 ] <-- Sudah ada 2 serangan masuk

-----------------------------------------------------------
Loop Iterasi ke-3 (i = 3):
-----------------------------------------------------------
Panggil attack(10)  -->  Hasil: 8
Proses: totalDamage = 16 + 8
State: [ totalDamage = 24 ] <-- Selesai! Semua serangan masuk

-----------------------------------------------------------
Hasil Akhir (return totalDamage):
-----------------------------------------------------------
Output: 24 ✅
```

---

## ⚖️ Kelebihan & Kekurangan

| Aspek | Detail |
|-------|--------|
| **Time Complexity** | `O(n)` — loop sebanyak jumlah serangan |
| **Readability** | ✅ Mudah diikuti langkah demi langkah |
| **Simulasi** | ✅ Benar-benar mensimulasikan tiap serangan |
| **Kelemahan** | Lebih lambat dari V1 untuk serangan banyak |

> 💡 Solusi ini lebih baik untuk **belajar**, karena kita benar-benar memahami apa yang terjadi di setiap serangan.

---

*Lanjut ke → [04 — Proses Debugging](./04-debugging-process_proses-debugging.md)*
