# ⚔️ Damage Calculation

### ✨ _Menghitung total kerusakan dari serangkaian serangan yang setiap pukulannya dikurangi penalti tetap_

> 🎯 **Tujuan:** Memahami cara mendekomposisi masalah menjadi dua fungsi terpisah (`attack` & `damageCalculation`), menemukan pola matematis sebelum menulis kode, dan mengeksplorasi evolusi solusi dari versi dasar hingga versi modern yang aman.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Deskripsi Challenge](#deskripsi-challenge) | Soal, aturan, dan contoh perhitungan |
| 🧪 | [Test Cases](#test-cases) | Data uji untuk validasi solusi |
| 📂 | [Struktur Dokumentasi](#struktur-dokumentasi) | Peta navigasi seluruh file dokumentasi |

---

<a name="deskripsi-challenge"></a>
## 📋 Deskripsi Challenge

Diberikan dua function: `attack()` dan `damageCalculation()`.

```
🎯 attack(damage)
   → Mensimulasikan satu kali serangan
   → Rumus: damage - 2

🎯 damageCalculation(numberOfAttacks, damagePerAttack)
   → Menghitung TOTAL damage dari seluruh serangan
   → Menggunakan attack() untuk setiap pukulan
```

**Contoh:** `damageCalculation(3, 10)` menghasilkan **24**

| Attack ke- | Damage Asli | Setelah Penalti | Keterangan |
|:----------:|:-----------:|:---------------:|------------|
| 1 | 10 | 8 | 10 - 2 = 8 |
| 2 | 10 | 8 | 10 - 2 = 8 |
| 3 | 10 | 8 | 10 - 2 = 8 |
| **Total** | | **24** | 8 × 3 = 24 |

---

<a name="test-cases"></a>
## 🧪 Test Cases

```javascript
console.log(damageCalculation(9, 25));  // 207
console.log(damageCalculation(10, 4));  // 20
console.log(damageCalculation(5, 20));  // 90
```

> [!TIP]
> Validasi manual: `damageCalculation(9, 25)` → setiap attack = `25 - 2 = 23` → total = `9 × 23 = 207` ✅

---

<a name="struktur-dokumentasi"></a>
## 📂 Struktur Dokumentasi

| No | File | Isi |
|----|------|-----|
| 1 | [01-analisis-logika.md](docs/01-analisis-logika.md) | Visualisasi pola, penemuan rumus, algoritma step-by-step |
| 2 | [02-arsitektur-penamaan.md](docs/02-arsitektur-penamaan.md) | Blueprint kode & tabel naming convention |
| 3 | [03-evolusi-performa.md](docs/03-evolusi-performa.md) | Edge case, `Math.max`, analisis O(1) vs O(N) |
| 4 | [04-ringkasan-solusi.md](docs/04-ringkasan-solusi.md) | Cheat sheet ringkas semua versi kode |

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **16 Juni 2026** berdasarkan sesi mentoring langsung
> di **Google Antigravity** menggunakan JavaScript (Node.js).
> Dokumentasi mengikuti standar **7 Pilar Kualitas** dari workflow
> `/mentor-challenge` dengan format visual `/setup-doc`.

---

➡️ Mulai baca: [01-analisis-logika.md](docs/01-analisis-logika.md)
