# 🔨 Implementasi Bertahap: Makan Terus Rekursif

### ✨ _Membangun fungsi rekursif step-by-step dari base case hingga recursive case_

> 🎯 **Tujuan:** Menulis kode secara bertahap (tidak langsung full code) agar memahami setiap bagian dan terhindar dari jebakan infinite loop

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🛡️ | [Step 1: Base Case](#step-1-base-case) | Membuat penahan (stopping condition) |
| 🔄 | [Step 2: Recursive Case](#step-2-recursive-case) | Menambahkan pemanggilan rekursif |
| ✅ | [Kode Final](#kode-final) | Solusi lengkap versi 1 (If-Return) |
| 🧪 | [Testing Manual](#testing-manual) | Trace execution dengan contoh |
| 🎯 | [Kesimpulan](#kesimpulan) | Key takeaways |

---

<a name="step-1-base-case"></a>
## 🛡️ Step 1: Membuat Base Case (Penahan)

**Prinsip Emas Rekursif:**  
> Selalu tulis **base case terlebih dahulu** sebelum menulis recursive case.

### Kenapa Base Case Dulu?

**Analogi:** Base case = rem mobil. Kamu tidak mau nyetir mobil tanpa rem kan? 🚗

Jika kamu tulis recursive case dulu tanpa base case, begitu kode dijalankan → **infinite loop** → program crash.

---

### Kode Step 1

```javascript
const makanTerusRekursif = (waktu) => {
  // [BASE CASE] Penahan rekursif
  if (waktu <= 0) {
    return 0;
  }
  
  // TODO: Tambahkan recursive case di Step 2
};
```

### Penjelasan Baris per Baris

| Baris | Kode | Penjelasan |
|-------|------|------------|
| 1 | `const makanTerusRekursif = (waktu) => {` | Deklarasi fungsi dengan parameter `waktu` |
| 2 | `if (waktu <= 0) {` | Cek: apakah waktu sudah habis atau negatif? |
| 3 | `return 0;` | Jika ya, kembalikan 0 (tidak ada pesanan lagi) |
| 4 | `}` | Tutup blok if |

### Kenapa `waktu <= 0` Bukan `waktu === 0`?

> [!CAUTION]
> **Jebakan Umum:** Menggunakan `===` untuk base case rekursif dengan pengurangan fixed.

**Alasan:**
- Sisa waktu bisa **skip angka 0** (contoh: `6 - 15 = -9`)
- Jika pakai `===`, kondisi tidak akan pernah terpenuhi → **infinite loop**

**Perbandingan:**

```javascript
// ❌ SALAH - bisa infinite loop
if (waktu === 0) return 0;

// ✅ BENAR - handle semua kasus
if (waktu <= 0) return 0;
```

---

### Testing Base Case (Isolated)

```javascript
const makanTerusRekursif = (waktu) => {
  if (waktu <= 0) return 0;
};

console.log(makanTerusRekursif(0));   // Output: 0 ✅
console.log(makanTerusRekursif(-5));  // Output: 0 ✅
console.log(makanTerusRekursif(10));  // Output: undefined (belum ada recursive case)
```

> [!NOTE]
> Untuk input > 0, fungsi belum mengembalikan nilai karena recursive case belum dibuat. Ini normal di Step 1.

---

<a name="step-2-recursive-case"></a>
## 🔄 Step 2: Menambahkan Recursive Case

Sekarang base case sudah aman, kita tambahkan **recursive case** untuk handle kondisi `waktu > 0`.

### Logika Recursive Case

Ketika `waktu > 0`, fungsi harus:
1. **Hitung** kontribusi level sekarang → `1` pesanan
2. **Kurangi** waktu → `waktu - 15`
3. **Panggil** fungsi lagi dengan waktu baru → `makanTerusRekursif(waktu - 15)`
4. **Akumulasi** hasil → `1 + hasil_dari_panggilan_berikutnya`

---

### Kode Step 2

```javascript
const makanTerusRekursif = (waktu) => {
  // [BASE CASE] Penahan rekursif
  if (waktu <= 0) {
    return 0;
  }
  
  // [RECURSIVE CASE] Pemanggilan ulang dengan akumulasi
  return 1 + makanTerusRekursif(waktu - 15);
};
```

### Penjelasan Baris per Baris (Bagian Baru)

| Baris | Kode | Penjelasan |
|-------|------|------------|
| 7 | `return 1 + makanTerusRekursif(waktu - 15);` | **Pola akumulasi rekursif** |

**Breakdown baris 7:**
```javascript
return 1 + makanTerusRekursif(waktu - 15);
       │   └───────────┬───────────────┘
       │               │
       │               └─ Delegasi: Panggil fungsi lagi dengan waktu dikurangi 15
       │
       └─ Kontribusi: 1 pesanan untuk level sekarang
```

---

### Kenapa Pakai Operator `+`?

**Analogi:** Seperti menghitung total uang yang dikumpulkan beberapa orang.

```
Total = Uang_orang_1 + Uang_orang_2 + Uang_orang_3 + ...
```

Dalam rekursif:
```
Total = Pesanan_level_1 + Pesanan_level_2 + Pesanan_level_3 + ...
      = 1 + (1 + (1 + 0))
      = 3
```

---

<a name="kode-final"></a>
## ✅ Kode Final (Versi 1: If-Return Standard)

Ini adalah **solusi lengkap** versi paling dasar (mudah dibaca untuk pembelajaran).

```javascript
const makanTerusRekursif = (waktu) => {
  // [BASE CASE] Berhenti jika waktu habis
  if (waktu <= 0) {
    return 0;
  }
  
  // [RECURSIVE CASE] Hitung 1 pesanan + sisa
  return 1 + makanTerusRekursif(waktu - 15);
};
```

### Statistik Kode

```
📊 Total baris: 6 (tanpa blank line)
📊 Kompleksitas: O(n) time, O(n) space
📊 Readability: ⭐⭐⭐⭐⭐ (sangat mudah dipahami)
```

---

<a name="testing-manual"></a>
## 🧪 Testing Manual (Trace Execution)

Mari kita trace eksekusi kode dengan contoh konkret.

### Test Case 1: `makanTerusRekursif(45)`

```javascript
// CALL STACK (Top → Bottom)

[Level 1] makanTerusRekursif(45)
  ├─ waktu = 45
  ├─ 45 <= 0? ❌ (false)
  ├─ Execute: return 1 + makanTerusRekursif(30)
  │  ↓
  │  [Level 2] makanTerusRekursif(30)
  │    ├─ waktu = 30
  │    ├─ 30 <= 0? ❌ (false)
  │    ├─ Execute: return 1 + makanTerusRekursif(15)
  │    │  ↓
  │    │  [Level 3] makanTerusRekursif(15)
  │    │    ├─ waktu = 15
  │    │    ├─ 15 <= 0? ❌ (false)
  │    │    ├─ Execute: return 1 + makanTerusRekursif(0)
  │    │    │  ↓
  │    │    │  [Level 4] makanTerusRekursif(0)
  │    │    │    ├─ waktu = 0
  │    │    │    ├─ 0 <= 0? ✅ (true)
  │    │    │    └─ return 0 ← BASE CASE!
  │    │    │  
  │    │    └─ return 1 + 0 = 1
  │    │  
  │    └─ return 1 + 1 = 2
  │  
  └─ return 1 + 2 = 3 ✅
```

**Output:** `3`

---

### Test Case 2: `makanTerusRekursif(10)`

```javascript
[Level 1] makanTerusRekursif(10)
  ├─ waktu = 10
  ├─ 10 <= 0? ❌ (false)
  ├─ Execute: return 1 + makanTerusRekursif(-5)
  │  ↓
  │  [Level 2] makanTerusRekursif(-5)
  │    ├─ waktu = -5
  │    ├─ -5 <= 0? ✅ (true)
  │    └─ return 0 ← BASE CASE!
  │  
  └─ return 1 + 0 = 1 ✅
```

**Output:** `1`

> [!TIP]
> **Pattern:** Meskipun sisa waktu **kurang dari 15 menit**, customer tetap bisa memesan 1 kali (karena cek kondisi `waktu > 0` dilakukan **sebelum** dikurangi 15).

---

### Test Case 3: `makanTerusRekursif(0)`

```javascript
[Level 1] makanTerusRekursif(0)
  ├─ waktu = 0
  ├─ 0 <= 0? ✅ (true)
  └─ return 0 ← BASE CASE langsung!
```

**Output:** `0`

---

## 🧪 Jalankan Test Cases

Copy kode ini ke file JavaScript dan jalankan:

```javascript
const makanTerusRekursif = (waktu) => {
  if (waktu <= 0) return 0;
  return 1 + makanTerusRekursif(waktu - 15);
};

// TEST CASES
console.log(makanTerusRekursif(66));  // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90));  // 6
console.log(makanTerusRekursif(10));  // 1
console.log(makanTerusRekursif(0));   // 0
```

**Cara menjalankan:**
```bash
node makanTerus.js
```

**Expected Output:**
```
5
7
6
1
0
```

---

<a name="kesimpulan"></a>
## 🎯 Kesimpulan

### Key Takeaways

| Aspek | Insight |
|-------|---------|
| **Urutan Penulisan** | Tulis base case dulu (penahan), baru recursive case |
| **Base Case** | Gunakan `<=` bukan `===` untuk handle nilai negatif |
| **Recursive Case** | Pola: `1 + fungsi(parameter - 15)` |
| **Testing** | Trace execution secara manual untuk memahami alur |
| **Best Practice** | Kode sederhana (6 baris) lebih baik daripada kompleks |

### Pentingnya Step-by-Step

> [!IMPORTANT]
> **Mengapa tidak langsung tulis full code?**
> 
> Menulis bertahap membantu:
> - ✅ Menghindari infinite loop (base case dulu)
> - ✅ Debugging lebih mudah (test per bagian)
> - ✅ Pemahaman lebih dalam (paham alasan setiap baris)

### Apa Selanjutnya?

Versi 1 (If-Return) sudah selesai dan berfungsi dengan baik! Tapi ada **alternatif penulisan** yang lebih ringkas:

1. **Versi 2:** Ternary Operator (1 baris)
2. **Versi 3:** Tail Call Optimization (hemat memori)
3. **Versi 4:** Iteratif (production-safe)
4. **Versi 5:** Matematika Murni (O(1))

> 📚 **Lihat Perbandingan Lengkap:**  
> Semua versi kode dan analisis perbandingannya ada di **[📄 Code Versions](./code-versions.md)**

---

### 🧭 Navigasi

| Link | Deskripsi |
|------|-----------|
| [⬅️ Blueprint & Naming](./02-blueprint-kode.md) | Kembali ke kerangka kode |
| [➡️ Gotchas & Edge Cases](./04-gotchas.md) | Lanjut: Jebakan umum |
| [📦 Lihat Semua Versi Kode](./code-versions.md) | Skip ke perbandingan lengkap |

---

📅 **Terakhir diupdate:** 7 Juni 2026
