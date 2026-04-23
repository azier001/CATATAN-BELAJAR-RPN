# 🐛 Proses Debugging — Kesalahan yang Saya Buat

> Proses trial-and-error ini justru yang membuat kita benar-benar paham. Setiap kesalahan mengajarkan satu konsep baru!

---

## ❌ Kesalahan 1: Salah Batasan Loop

```js
// ❌ SALAH — loop berdasarkan damagePerAttack, bukan numberOfAttacks
for (let i = 1; i <= damagePerAttack; i++) {
  total += numberOfAttacks + i;
}
```

**Masalahnya:**
- `damagePerAttack` itu **besarnya damage**, bukan **jumlah serangan**
- Yang menentukan berapa kali loop berjalan seharusnya `numberOfAttacks`

**Logika yang benar:**
```
Loop berjalan → sebanyak numberOfAttacks (jumlah serangan)
Bukan         → sebanyak damagePerAttack (besar damage-nya)
```

---

## ❌ Kesalahan 2: Menambahkan Nilai `i` ke Damage

```js
// ❌ SALAH — nilai i ikut ditambahkan ke damage
for (let i = 1; i <= numberOfAttacks; i++) {
  total += i + attack(damagePerAttack);
}
```

**Masalahnya:**
- Variabel `i` hanyalah **penunjuk urutan** serangan (serangan ke-1, ke-2, ke-3...)
- Nilai `i` **bukan bagian dari damage** — jika disertakan, damage akan bertambah besar setiap iterasi

**Contoh efek bug ini:**
```
damageCalculation(3, 10):
  i=1: total += 1 + attack(10) → 1 + 8 = 9   (salah!)
  i=2: total += 2 + attack(10) → 2 + 8 = 10  (salah!)
  i=3: total += 3 + attack(10) → 3 + 8 = 11  (salah!)
  Total: 30  ← harusnya 24 ❌
```

---

## ❌ Kesalahan 3: Menggunakan `console.log` Bukan `return`

```js
// ❌ SALAH — hanya mencetak, tidak mengembalikan nilai
function damageCalculation(numberOfAttacks, damagePerAttack) {
  let total = 0;
  for (let i = 1; i <= numberOfAttacks; i++) {
    console.log(i);
  }
  // Tidak ada return! Fungsi akan mengembalikan undefined
}
```

**Masalahnya:**
- Fungsi diminta **mengembalikan nilai** (`return`), bukan hanya mencetaknya
- Tanpa `return`, pemanggil fungsi akan mendapatkan `undefined`

| Aspek | `return` | `console.log` |
|-------|----------|---------------|
| Fungsi | Mengembalikan nilai ke pemanggil | Hanya mencetak ke terminal |
| Bisa disimpan? | ✅ Ya, bisa ditampung di variabel | ❌ Tidak |
| Chain fungsi? | ✅ Bisa dipakai fungsi lain | ❌ Tidak bisa |

---

## ✅ Perbaikan Akhir (Benar!)

```js
function damageCalculation(numberOfAttacks, damagePerAttack) {
  let totalDamage = 0;

  for (let i = 1; i <= numberOfAttacks; i++) {
    totalDamage += attack(damagePerAttack);
  }

  return totalDamage;
}
```

**3 hal yang diperbaiki:**
1. ✅ Batasan loop: `i <= numberOfAttacks` (bukan `damagePerAttack`)
2. ✅ Isi loop: `totalDamage += attack(damagePerAttack)` (tanpa tambah `i`)
3. ✅ Gunakan `return`, bukan `console.log`

---

*Lanjut ke → [05 — Test Cases](./05-test-cases_kasus-pengujian.md)*
