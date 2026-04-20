# 🎮 Dokumentasi: Damage Calculation Challenge

> 📝 **Catatan Pribadi** — Dokumentasi ini dibuat berdasarkan sesi mentoring untuk memahami cara kerja **function** dan **loop** dalam JavaScript melalui challenge kalkulasi damage serangan.

---

## 📑 Daftar Isi

- 📋 [Soal Challenge](#soal-challenge)
- 🎯 [Apa yang Diminta?](#apa-yang-diminta)
- ✅ [Solusi 1: Perkalian Langsung (Efisien)](#solusi-1-perkalian-langsung)
- 🔁 [Solusi 2: Loop Simulasi (Rekomendasi)](#solusi-2-loop-simulasi)
- 🐛 [Proses Debugging: Kesalahan yang Saya Buat](#proses-debugging)
- 🎨 [Visualisasi ASCII: Alur Kerja Loop](#visualisasi-ascii)
- 🍎 [Analogi Sederhana](#analogi-sederhana)
- 🧪 [Test Cases](#test-cases)
- 📌 [Catatan Penting](#catatan-penting)

---

<a name="soal-challenge"></a>
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

**Test Case yang harus dipenuhi:**

| Pemanggilan                    | Hasil |
|-------------------------------|-------|
| `damageCalculation(9, 25)`    | 207   |
| `damageCalculation(10, 4)`    | 20    |
| `damageCalculation(5, 20)`    | 90    |

---

<a name="apa-yang-diminta"></a>
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

<a name="solusi-1-perkalian-langsung"></a>
## ✅ Solusi 1: Perkalian Langsung (Efisien)

Ini adalah solusi pertama yang berhasil saya buat sendiri:

```js
function attack(damage) {
  return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  return numberOfAttacks * attack(damagePerAttack);
}
```

**Cara kerjanya:**
- `attack(damagePerAttack)` → menghitung damage sebenarnya per serangan (misal: `10 - 2 = 8`)
- Lalu langsung dikalikan dengan `numberOfAttacks` (misal: `3 * 8 = 24`)

**Kelebihan:**
- 🚀 Sangat efisien — hanya butuh 1 kali perhitungan (kompleksitas **O(1)**)
- Kode singkat dan mudah dibaca

**Kekurangan:**
- Tidak benar-benar "mensimulasikan" setiap serangan satu per satu

---

<a name="solusi-2-loop-simulasi"></a>
## 🔁 Solusi 2: Loop Simulasi (Rekomendasi untuk Dokumentasi)

Solusi ini lebih mengikuti instruksi soal yang meminta **simulasi setiap serangan**:

```js
function attack(damage) {
  return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
  let totalDamage = 0;

  for (let i = 0; i < numberOfAttacks; i++) {
    // Memanggil attack() berulang kali sebanyak numberOfAttacks
    totalDamage += attack(damagePerAttack);
  }

  return totalDamage;
}
```

**Cara kerjanya:**
- Buat variabel `totalDamage` sebagai penampung (dimulai dari 0)
- Loop berjalan sebanyak `numberOfAttacks` kali
- **Setiap iterasi**, panggil `attack(damagePerAttack)` dan tambahkan hasilnya ke `totalDamage`
- Setelah loop selesai, kembalikan `totalDamage`

> 💡 Solusi ini dipilih untuk dokumentasi karena nama variabel `totalDamage` lebih jelas dan deskriptif dibanding `total`. Ini sesuai prinsip **Clean Code** — penamaan variabel yang jelas membuat orang lain (atau diri sendiri di masa depan) langsung paham tanpa harus baca seluruh kodenya.

---

<a name="proses-debugging"></a>
## 🐛 Proses Debugging: Kesalahan yang Saya Buat

Saat mencoba mengimplementasi ulang versi loop, saya membuat beberapa kesalahan. Berikut prosesnya:

### ❌ Kesalahan 1: Salah Batasan Loop

```js
// ❌ SALAH — loop berdasarkan damagePerAttack, bukan numberOfAttacks
for (let i = 1; i <= damagePerAttack; i++) {
  total += numberOfAttacks + i;
}
```

**Masalahnya:**
- `damagePerAttack` itu **besarnya damage**, bukan **jumlah serangan**
- Yang menentukan berapa kali loop berjalan seharusnya `numberOfAttacks`

### ❌ Kesalahan 2: Menambahkan Nilai `i` ke Damage

```js
// ❌ SALAH — nilai i ikut ditambahkan ke damage
for (let i = 1; i <= numberOfAttacks; i++) {
  total += i + attack(damagePerAttack);
}
```

**Masalahnya:**
- Variabel `i` hanyalah **penunjuk urutan** serangan (serangan ke-1, ke-2, ke-3...)
- Nilai `i` **bukan bagian dari damage** — jika disertakan, damage akan bertambah besar setiap iterasi

### ❌ Kesalahan 3: Menggunakan `console.log` Bukan `return`

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

### ✅ Perbaikan Akhir (Benar!)

```js
function damageCalculation(numberOfAttacks, damagePerAttack) {
  let total = 0;

  for (let i = 1; i <= numberOfAttacks; i++) {
    total += attack(damagePerAttack);
  }

  return total;
}
```

> 🎓 **Pelajaran:** Proses trial-and-error seperti ini justru yang membuat kita benar-benar paham. Setiap kesalahan mengajarkan satu konsep baru!

---

<a name="visualisasi-ascii"></a>
## 🎨 Visualisasi ASCII: Alur Kerja Loop

Visualisasi untuk `damageCalculation(3, 10)`:

```
Input: numberOfAttacks = 3, damagePerAttack = 10

Mula-mula:
totalDamage = 0 (Kantong damage masih kosong)

-----------------------------------------------------------
Loop Iterasi ke-1 (i = 0):
-----------------------------------------------------------
Panggil attack(10)  -->  Hasil: 8 (Ingat: 10 - 2)
Proses: totalDamage = totalDamage + 8  (0 + 8)
State: [ totalDamage = 8 ]  <-- Baru ada 1 serangan masuk

-----------------------------------------------------------
Loop Iterasi ke-2 (i = 1):
-----------------------------------------------------------
Panggil attack(10)  -->  Hasil: 8
Proses: totalDamage = totalDamage + 8  (8 + 8)
State: [ totalDamage = 16 ] <-- Sudah ada 2 serangan masuk

-----------------------------------------------------------
Loop Iterasi ke-3 (i = 2):
-----------------------------------------------------------
Panggil attack(10)  -->  Hasil: 8
Proses: totalDamage = totalDamage + 8  (16 + 8)
State: [ totalDamage = 24 ] <-- Selesai! Semua serangan masuk

-----------------------------------------------------------
Hasil Akhir (return totalDamage):
-----------------------------------------------------------
Output: 24 ✅
```

### 🔍 Verifikasi Semua Test Case

```
damageCalculation(9, 25):
  attack(25) = 23
  23 × 9 serangan = 207 ✅

damageCalculation(10, 4):
  attack(4) = 2
  2 × 10 serangan = 20 ✅

damageCalculation(5, 20):
  attack(20) = 18
  18 × 5 serangan = 90 ✅
```

---

<a name="analogi-sederhana"></a>
## 🍎 Analogi Sederhana

Bayangkan kamu punya **3 buah kotak** (`numberOfAttacks = 3`).

Setiap kotak berisi **10 butir apel** (`damagePerAttack = 10`), tapi setiap kali kamu memindahkan isi kotak ke keranjang besar (`totalDamage`), ada **2 butir apel yang busuk** dan harus dibuang (fungsi `attack`).

```
🗃️ Kotak 1: 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎  →  buang 2 busuk  →  8 masuk ke 🧺
🗃️ Kotak 2: 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎  →  buang 2 busuk  →  8 masuk ke 🧺
🗃️ Kotak 3: 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎  →  buang 2 busuk  →  8 masuk ke 🧺

🧺 Total di keranjang = 8 + 8 + 8 = 24 ✅
```

---

<a name="test-cases"></a>
## 🧪 Test Cases

### 🚀 Test Sederhana (Coba Cepat)

Gunakan ini untuk **test cepat** saat pertama kali menulis kode:

```js
// Test sederhana — langsung lihat hasilnya di terminal
console.log(damageCalculation(9, 25));  // 207
```

```js
console.log(damageCalculation(10, 4));  // 20
```

```js
console.log(damageCalculation(5, 20));  // 90
```

> 💡 Test sederhana cocok untuk **percobaan awal**. Tapi kelemahannya, kamu harus membandingkan hasilnya secara manual dengan mata sendiri.

---

### 🔬 Test Case Lengkap (Validasi Menyeluruh)

Gunakan ini untuk **memastikan kode benar-benar bekerja** tanpa bug, termasuk di kondisi-kondisi unik (edge cases):

```js
const testCases = [
  // Basic — dari soal asli
  { input: [9, 25], expected: 207 },
  { input: [10, 4], expected: 20 },
  { input: [5, 20], expected: 90 },
  { input: [3, 10], expected: 24 },

  // Edge cases — kondisi batas/unik
  { input: [0, 10], expected: 0 },    // 0 serangan = tidak ada damage
  { input: [5, 0], expected: -10 },   // damage 0, dikurangi 2 = -2 per serangan
  { input: [1, 2], expected: 0 },     // damage 2 - 2 = 0 per serangan
  { input: [3, 1], expected: -3 },    // damage 1 - 2 = -1 per serangan
  { input: [100, 10], expected: 800 }, // serangan banyak
]

// Run tests (more informative)
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

**Kenapa perlu test case lengkap?**

| Aspek | Test Sederhana | Test Case Lengkap |
|-------|---------------|-------------------|
| Kecepatan | ⚡ Cepat, langsung tulis | 🐢 Perlu setup dulu |
| Validasi | 👀 Manual (lihat sendiri) | 🤖 Otomatis (PASS/FAIL) |
| Edge cases | ❌ Biasanya tidak ditest | ✅ Tercakup semua |
| Debugging | 😵 Sulit cari yang salah | 🎯 Langsung tahu mana yang FAIL |

> 💡 **Tips:** Tulis test sederhana dulu saat **eksplorasi awal**, lalu gunakan test case lengkap saat kamu yakin kodenya sudah jadi untuk **validasi final**.

---

<a name="catatan-penting"></a>
## 📌 Catatan Penting

### 💡 Perbedaan `return` vs `console.log`

| Aspek | `return` | `console.log` |
|-------|----------|---------------|
| Fungsi | Mengembalikan nilai ke pemanggil | Hanya mencetak ke terminal |
| Bisa disimpan? | ✅ Ya, bisa ditampung di variabel | ❌ Tidak, hanya tampil di layar |
| Chain fungsi? | ✅ Bisa dipakai fungsi lain | ❌ Tidak bisa |

### 💡 Penamaan Variabel (Clean Code)

```js
// ❌ Kurang jelas
let total = 0;

// ✅ Lebih deskriptif — langsung tahu ini total apa
let totalDamage = 0;
```

> 🎓 Prinsip **Clean Code**: Nama variabel yang jelas membuat orang lain (atau diri sendiri di masa depan) bisa langsung paham tanpa harus membaca seluruh kodenya.

### 💡 Dua Pendekatan: Efisien vs Simulasi

| Pendekatan | Kompleksitas | Kapan Dipakai |
|------------|-------------|---------------|
| Perkalian langsung (`*`) | O(1) | Ketika hasil akhirnya saja yang penting |
| Loop simulasi (`for`) | O(n) | Ketika perlu memproses setiap iterasi satu per satu |

---

> 🏷️ **Tag:** `#javascript` `#function` `#loop` `#debugging` `#clean-code`
