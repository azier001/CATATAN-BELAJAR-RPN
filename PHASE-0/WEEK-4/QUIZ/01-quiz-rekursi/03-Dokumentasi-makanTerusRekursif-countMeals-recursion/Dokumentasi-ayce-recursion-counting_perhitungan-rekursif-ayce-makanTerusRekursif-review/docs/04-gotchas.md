# ⚠️ Gotchas & Edge Cases: Makan Terus Rekursif

### ✨ _Jebakan umum yang sering terjadi dan cara menghindarinya_

> 🎯 **Tujuan:** Mengidentifikasi kesalahan yang sering dilakukan programmer saat menulis fungsi rekursif, agar kamu bisa menghindarinya sejak awal

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🪤 | [Gotcha #1: Base Case Salah](#gotcha-1-base-case-salah) | Menggunakan `===` bukan `<=` |
| 🪤 | [Gotcha #2: Tidak Ada Base Case](#gotcha-2-tidak-ada-base-case) | Infinite loop |
| 🪤 | [Gotcha #3: Parameter Tidak Berubah](#gotcha-3-parameter-tidak-berubah) | Infinite loop (tipe 2) |
| 🪤 | [Gotcha #4: Lupa Return](#gotcha-4-lupa-return) | Hasil undefined |
| 🪤 | [Gotcha #5: Salah Operasi Akumulasi](#gotcha-5-salah-operasi-akumulasi) | Hasil salah |
| 🛡️ | [Edge Cases](#edge-cases) | Input ekstrem yang harus dihandle |
| 🎯 | [Kesimpulan](#kesimpulan) | Checklist anti-jebakan |

---

<a name="gotcha-1-base-case-salah"></a>
## 🪤 Gotcha #1: Base Case Salah (`===` bukan `<=`)

### ❌ Kode Yang Salah

```javascript
const makanTerusRekursif = (waktu) => {
  if (waktu === 0) return 0; // ❌ SALAH!
  return 1 + makanTerusRekursif(waktu - 15);
};
```

### 🐞 Apa Yang Terjadi?

```javascript
makanTerusRekursif(10)
  → 10 === 0? ❌ (false)
  → return 1 + makanTerusRekursif(-5)
    → -5 === 0? ❌ (false) ← BASE CASE TIDAK TERPENUHI!
    → return 1 + makanTerusRekursif(-20)
      → -20 === 0? ❌ (false)
      → return 1 + makanTerusRekursif(-35)
        → ... INFINITE LOOP! 💥
```

**Error Message:**
```
RangeError: Maximum call stack size exceeded
```

### ✅ Kode Yang Benar

```javascript
const makanTerusRekursif = (waktu) => {
  if (waktu <= 0) return 0; // ✅ BENAR!
  return 1 + makanTerusRekursif(waktu - 15);
};
```

### 💡 Mengapa `<=` Lebih Aman?

| Kondisi | `waktu === 0` | `waktu <= 0` |
|---------|---------------|--------------|
| Input: 45 | Skip 0 (jadi -30) ❌ | Catch di 0 ✅ |
| Input: 10 | Skip 0 (jadi -5) ❌ | Catch di -5 ✅ |
| Input: 0 | Match ✅ | Match ✅ |
| Input: -5 | Miss ❌ | Match ✅ |

> [!CAUTION]
> **Rule of Thumb:** Jika rekursif menggunakan **pengurangan tetap** (fixed decrement), gunakan `<=` atau `>=`, BUKAN `===`.

---

<a name="gotcha-2-tidak-ada-base-case"></a>
## 🪤 Gotcha #2: Tidak Ada Base Case

### ❌ Kode Yang Salah

```javascript
const makanTerusRekursif = (waktu) => {
  // ❌ TIDAK ADA BASE CASE!
  return 1 + makanTerusRekursif(waktu - 15);
};
```

### 🐞 Apa Yang Terjadi?

```javascript
makanTerusRekursif(45)
  → return 1 + makanTerusRekursif(30)
    → return 1 + makanTerusRekursif(15)
      → return 1 + makanTerusRekursif(0)
        → return 1 + makanTerusRekursif(-15)
          → return 1 + makanTerusRekursif(-30)
            → ... INFINITE LOOP! 💥
```

**Error Message:**
```
RangeError: Maximum call stack size exceeded
```

### ✅ Solusi

> [!IMPORTANT]
> **Prinsip Emas:** SETIAP fungsi rekursif WAJIB memiliki base case.

```javascript
const makanTerusRekursif = (waktu) => {
  if (waktu <= 0) return 0; // ✅ BASE CASE WAJIB!
  return 1 + makanTerusRekursif(waktu - 15);
};
```

---

<a name="gotcha-3-parameter-tidak-berubah"></a>
## 🪤 Gotcha #3: Parameter Tidak Berubah

### ❌ Kode Yang Salah

```javascript
const makanTerusRekursif = (waktu) => {
  if (waktu <= 0) return 0;
  return 1 + makanTerusRekursif(waktu); // ❌ PARAMETER TIDAK BERUBAH!
};
```

### 🐞 Apa Yang Terjadi?

```javascript
makanTerusRekursif(45)
  → 45 <= 0? ❌ (false)
  → return 1 + makanTerusRekursif(45) ← WAKTU TETAP 45!
    → 45 <= 0? ❌ (false)
    → return 1 + makanTerusRekursif(45) ← WAKTU TETAP 45!
      → ... INFINITE LOOP! 💥
```

**Error Message:**
```
RangeError: Maximum call stack size exceeded
```

### ✅ Kode Yang Benar

```javascript
const makanTerusRekursif = (waktu) => {
  if (waktu <= 0) return 0;
  return 1 + makanTerusRekursif(waktu - 15); // ✅ PARAMETER BERUBAH!
};
```

### 💡 Rule of Thumb

> [!WARNING]
> Parameter rekursif HARUS selalu **bergerak mendekati base case**. Jika tidak berubah → infinite loop.

```
Analogi: Mobil menuju tujuan
✅ Mobil maju 15 km per jam → sampai tujuan
❌ Mobil diam di tempat → tidak akan sampai
```

---

<a name="gotcha-4-lupa-return"></a>
## 🪤 Gotcha #4: Lupa Return

### ❌ Kode Yang Salah

```javascript
const makanTerusRekursif = (waktu) => {
  if (waktu <= 0) return 0;
  1 + makanTerusRekursif(waktu - 15); // ❌ LUPA RETURN!
};
```

### 🐞 Apa Yang Terjadi?

```javascript
console.log(makanTerusRekursif(45)); // undefined ❌
```

**Mengapa `undefined`?**
- Fungsi berjalan sampai selesai
- Tapi tidak ada `return` di recursive case
- JavaScript auto-return `undefined` untuk fungsi tanpa return statement

### ✅ Kode Yang Benar

```javascript
const makanTerusRekursif = (waktu) => {
  if (waktu <= 0) return 0;
  return 1 + makanTerusRekursif(waktu - 15); // ✅ ADA RETURN!
};
```

> [!TIP]
> **Debugging Tip:** Jika hasil fungsi `undefined`, cek apakah semua cabang punya `return` statement.

---

<a name="gotcha-5-salah-operasi-akumulasi"></a>
## 🪤 Gotcha #5: Salah Operasi Akumulasi

### ❌ Kode Yang Salah (Versi 1: Salah Operator)

```javascript
const makanTerusRekursif = (waktu) => {
  if (waktu <= 0) return 0;
  return 1 * makanTerusRekursif(waktu - 15); // ❌ Pakai * bukan +
};

console.log(makanTerusRekursif(45)); // 0 ❌ (seharusnya 3)
```

**Mengapa hasilnya 0?**
```
1 * (1 * (1 * 0)) = 1 * (1 * 0) = 1 * 0 = 0
```

---

### ❌ Kode Yang Salah (Versi 2: Posisi Salah)

```javascript
const makanTerusRekursif = (waktu) => {
  if (waktu <= 0) return 0;
  return makanTerusRekursif(waktu - 15) + 1; // ⚠️ Tetap benar, tapi kurang idiomatik
};
```

> [!NOTE]
> Secara matematis `1 + X` sama dengan `X + 1`, tapi konvensi rekursif umumnya menaruh **kontribusi level sekarang di depan**.

### ✅ Kode Yang Benar

```javascript
const makanTerusRekursif = (waktu) => {
  if (waktu <= 0) return 0;
  return 1 + makanTerusRekursif(waktu - 15); // ✅ Operator + posisi idiomatik
};
```

---

<a name="edge-cases"></a>
## 🛡️ Edge Cases

### Test Case: Input Negatif

```javascript
console.log(makanTerusRekursif(-10)); // 0 ✅
```

**Analisis:**
- Input sudah negatif dari awal
- Langsung masuk base case
- Return 0 (tidak ada pesanan)

---

### Test Case: Input 0

```javascript
console.log(makanTerusRekursif(0)); // 0 ✅
```

**Analisis:**
- Input 0 = waktu habis
- Langsung masuk base case
- Return 0 (tidak ada pesanan)

---

### Test Case: Input Sangat Besar

```javascript
console.log(makanTerusRekursif(10000)); // 667 ✅
```

**Analisis:**
- Input valid
- Fungsi berjalan normal
- Tapi **call stack dalam** (10000 / 15 ≈ 667 level)

> [!WARNING]
> **Stack Overflow Risk:** Input sangat besar (> 10,000) bisa menyebabkan `Maximum call stack size exceeded` di engine JavaScript tertentu.
> 
> **Solusi:** Gunakan **Tail Call Optimization (TCO)** atau pendekatan **iteratif** untuk production code.

---

### Test Case: Input Bukan Angka

```javascript
console.log(makanTerusRekursif("45"));    // 3 (auto-coercion) ⚠️
console.log(makanTerusRekursif("abc"));   // Infinite loop! 💥
console.log(makanTerusRekursif(null));    // 0 (null coerced to 0) ⚠️
console.log(makanTerusRekursif(undefined)); // NaN logic error 💥
```

> [!CAUTION]
> **Guard Clause Needed:** Jika fungsi ini untuk production, tambahkan validasi input:

```javascript
const makanTerusRekursif = (waktu) => {
  // Guard clause
  if (typeof waktu !== 'number' || isNaN(waktu)) {
    throw new TypeError('Parameter waktu harus berupa number');
  }
  
  // Base case
  if (waktu <= 0) return 0;
  
  // Recursive case
  return 1 + makanTerusRekursif(waktu - 15);
};
```

---

<a name="kesimpulan"></a>
## 🎯 Kesimpulan

### Checklist Anti-Jebakan

Sebelum submit kode rekursif, cek daftar ini:

```
✅ Apakah ada base case?
✅ Apakah base case menggunakan <= atau >= (bukan ===)?
✅ Apakah parameter berubah di setiap rekursif?
✅ Apakah parameter bergerak mendekati base case?
✅ Apakah semua cabang punya return statement?
✅ Apakah operator akumulasi benar? (+ bukan *)
✅ Apakah input divalidasi? (untuk production code)
```

### Tabel Rangkuman Gotchas

| Gotcha | Gejala | Error Message | Fix |
|--------|--------|---------------|-----|
| Base case `===` | Infinite loop | Maximum call stack | Ganti jadi `<=` |
| Tidak ada base case | Infinite loop | Maximum call stack | Tambahkan base case |
| Parameter tidak berubah | Infinite loop | Maximum call stack | Ubah parameter di recursive call |
| Lupa return | `undefined` | (tidak ada error) | Tambahkan `return` |
| Salah operator | Hasil salah | (tidak ada error) | Gunakan `+` bukan `*` |

### Kapan Rekursif Aman Digunakan?

| Skenario | Rekursif | Iteratif | Matematika |
|----------|----------|----------|------------|
| Challenge/learning | ✅ Aman | - | - |
| Input < 1000 | ✅ Aman | ✅ Lebih aman | ✅ Paling aman |
| Input > 10000 | ⚠️ Risk | ✅ Aman | ✅ Aman |
| Production code | ⚠️ Hati-hati | ✅ Recommended | ✅ Best |

> 📚 **Lihat Alternatif Pendekatan:**  
> Perbandingan rekursif vs iteratif vs matematika ada di **[📄 Code Versions](./code-versions.md)**

---

### 🧭 Navigasi

| Link | Deskripsi |
|------|-----------|
| [⬅️ Implementasi Bertahap](./03-implementasi-bertahap.md) | Kembali ke step-by-step coding |
| [➡️ Code Versions](./code-versions.md) | Lanjut: Perbandingan semua versi |
| [⬆️ Kembali ke README](../README.md) | Halaman utama dokumentasi |

---

📅 **Terakhir diupdate:** 7 Juni 2026
