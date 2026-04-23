# 🎯 Challenge Overview — Damage Calculation

## 📋 Soal Challenge

```js
/*
Diberikan function attack(), damageCalculation().

Function damageCalculation() akan menerima 2 parameter yaitu numberOfAttacks dan damagePerAttack
Function attack() akan menerima 1 parameter yaitu damage

[IMPLEMENTASI] Gunakan function damageCalculation() untuk menghitung damage yang diterima
dan gunakan function attack() untuk mensimulasikan setiap attack
dengan rumus damage - 2 disetiap attack.

[CONTOH] damageCalculation(3, 10) akan mengembalikan nilai 24

Karena attack akan dikurangi 2, maka setiap attack akan menghasilkan damage 8
*/
```

---

## 🎯 Apa yang Diminta?

Soal ini meminta kita membuat **2 fungsi** yang bekerja sama:

**1️⃣ Fungsi `attack(damage)`**
- Menerima nilai damage
- Mengembalikan nilai `damage - 2`
- Tugasnya sederhana: kurangi damage sebesar 2

**2️⃣ Fungsi `damageCalculation(numberOfAttacks, damagePerAttack)`**
- Menerima jumlah serangan dan damage per serangan
- **Memanggil** fungsi `attack()` untuk menghitung damage sebenarnya
- Mengembalikan **total damage** dari semua serangan

> 💡 **Kata kunci dari soal:** *"mensimulasikan setiap attack"* — artinya kita perlu menjalankan fungsi `attack()` berulang kali.

---

## 🎯 Expected Output

| Pemanggilan | Hasil |
|-------------|-------|
| `damageCalculation(9, 25)` | `207` |
| `damageCalculation(10, 4)` | `20` |
| `damageCalculation(5, 20)` | `90` |
| `damageCalculation(3, 10)` | `24` |

---

## 🔄 Alur Kerja Fungsi

```
Input: numberOfAttacks = 3, damagePerAttack = 10

attack(10) → mengembalikan 10 - 2 = 8

damageCalculation(3, 10):
  → panggil attack(10) → 8   (serangan ke-1)
  → panggil attack(10) → 8   (serangan ke-2)
  → panggil attack(10) → 8   (serangan ke-3)
  → total: 8 + 8 + 8 = 24 ✅
```

---

## 🌍 Analogi Sederhana

Bayangkan kamu punya **3 buah kotak** (`numberOfAttacks = 3`).

Setiap kotak berisi **10 butir apel** (`damagePerAttack = 10`), tapi setiap kali kamu memindahkan isi kotak ke keranjang besar (`totalDamage`), ada **2 butir apel yang busuk** dan harus dibuang (fungsi `attack`).

```
📦 Kotak 1: 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎  →  buang 2 busuk  →  8 masuk ke 🧺
📦 Kotak 2: 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎  →  buang 2 busuk  →  8 masuk ke 🧺
📦 Kotak 3: 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎  →  buang 2 busuk  →  8 masuk ke 🧺

🧺 Total di keranjang = 8 + 8 + 8 = 24 ✅
```

---

*Lanjut ke → [02 — Solusi V1: Perkalian Langsung](./02-v1-multiplication-approach_perkalian-langsung.md)*
