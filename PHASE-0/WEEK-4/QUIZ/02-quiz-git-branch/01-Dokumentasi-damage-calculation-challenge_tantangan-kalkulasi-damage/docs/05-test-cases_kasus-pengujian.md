# 🧪 Test Cases — Damage Calculation

## 🚀 Test Sederhana (Coba Cepat)

Gunakan ini untuk **test cepat** saat pertama kali menulis kode:

```js
// Test sederhana — langsung lihat hasilnya di terminal
console.log(damageCalculation(9, 25));  // 207
console.log(damageCalculation(10, 4));  // 20
console.log(damageCalculation(5, 20));  // 90
```

> 💡 Test sederhana cocok untuk **percobaan awal**. Tapi kelemahannya, kamu harus membandingkan hasilnya secara manual.

---

## 🔬 Test Case Lengkap (Validasi Menyeluruh)

Gunakan ini untuk **memastikan kode benar-benar bekerja** tanpa bug:

```js
const testCases = [
  // Basic — dari soal asli
  { input: [9, 25], expected: 207 },
  { input: [10, 4], expected: 20 },
  { input: [5, 20], expected: 90 },
  { input: [3, 10], expected: 24 },

  // Edge cases — kondisi batas/unik
  { input: [0, 10], expected: 0 },     // 0 serangan = tidak ada damage
  { input: [5, 0], expected: -10 },    // damage 0, dikurangi 2 = -2 per serangan
  { input: [1, 2], expected: 0 },      // damage 2 - 2 = 0 per serangan
  { input: [3, 1], expected: -3 },     // damage 1 - 2 = -1 per serangan
  { input: [100, 10], expected: 800 }, // serangan banyak
]

testCases.forEach(({ input, expected }, index) => {
  const [numberOfAttacks, damagePerAttack] = input
  const result = damageCalculation(numberOfAttacks, damagePerAttack)
  const isPass = result === expected

  if (isPass) {
    console.log(`Test #${index + 1}: ✅ PASS`)
  } else {
    console.log(`\n❌ FAIL - Test #${index + 1}`)
    console.log(`Input    : damageCalculation(${numberOfAttacks}, ${damagePerAttack})`)
    console.log(`Expected : ${expected}`)
    console.log(`Got      : ${result}`)
    console.log(`-----------------------------`)
  }
})
```

---

## 📊 Perbandingan: Test Sederhana vs Test Lengkap

| Aspek | Test Sederhana | Test Case Lengkap |
|-------|---------------|-------------------|
| Kecepatan | ⚡ Cepat, langsung tulis | 🔧 Perlu setup dulu |
| Validasi | 👀 Manual (lihat sendiri) | 🤖 Otomatis (PASS/FAIL) |
| Edge cases | ❌ Biasanya tidak ditest | ✅ Tercakup semua |
| Debugging | 😰 Sulit cari yang salah | 🎯 Langsung tahu mana yang FAIL |

> 💡 **Tips:** Tulis test sederhana dulu saat **eksplorasi awal**, lalu gunakan test case lengkap saat kamu yakin kodenya sudah jadi untuk **validasi final**.

---

## ✅ Hasil Test

| # | Input | Expected | Status |
|---|-------|----------|--------|
| 1 | `damageCalculation(9, 25)` | `207` | ✅ PASS |
| 2 | `damageCalculation(10, 4)` | `20` | ✅ PASS |
| 3 | `damageCalculation(5, 20)` | `90` | ✅ PASS |
| 4 | `damageCalculation(3, 10)` | `24` | ✅ PASS |
| 5 | `damageCalculation(0, 10)` | `0` | ✅ PASS |
| 6 | `damageCalculation(5, 0)` | `-10` | ✅ PASS |
| 7 | `damageCalculation(1, 2)` | `0` | ✅ PASS |
| 8 | `damageCalculation(3, 1)` | `-3` | ✅ PASS |
| 9 | `damageCalculation(100, 10)` | `800` | ✅ PASS |
