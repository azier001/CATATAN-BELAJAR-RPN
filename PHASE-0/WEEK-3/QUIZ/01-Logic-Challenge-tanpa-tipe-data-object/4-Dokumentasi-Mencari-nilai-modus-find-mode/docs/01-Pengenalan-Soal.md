# 📚 Find Mode - Part 1: Pengenalan Soal

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 PART 1: PENGENALAN SOAL 📋                              ║
║                                                                          ║
║                  Memahami Soal & Identifikasi Edge Cases                 ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📋 Soal | 🔍 Analisis | ⚠️ Edge Cases | 📊 Kriteria | 💡 Takeaways |
|:-------:|:-----------:|:-------------:|:-----------:|:------------:|
| [Jump](#-soal-asli) | [Jump](#-analisis-soal) | [Jump](#️-edge-cases) | [Jump](#-kriteria-solusi) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan

- ✅ Memahami soal secara menyeluruh
- ✅ Identifikasi aturan dan kondisi khusus
- ✅ Memahami edge cases sebelum coding
- ✅ Menentukan kriteria solusi yang benar

---

## 📋 Soal Asli

```
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka.
Function akan me-return modus dari array atau deret angka tersebut.

Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul.
Contoh, modus dari [10, 4, 5, 2, 4] adalah 4.

Jika modus tidak ditemukan, function akan me-return -1.

Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling
pertama muncul (dihitung dari kiri ke kanan).

Dan apabila di dalam modus hanya ada 1 nilai yang sama maka function akan
me-return -1. Contohnya [1, 1, 1] adalah -1.
```

---

## 🔍 Analisis Soal

### **Aturan Utama:**

**1. Return modus jika ditemukan**
```javascript
cariModus([10, 4, 5, 2, 4]) // 4 → muncul 2x, paling sering
```

**2. Return -1 jika semua angka muncul 1x**
```javascript
cariModus([10, 3, 1, 2, 5]) // -1 → semua muncul 1x, tidak ada modus
```

**3. Return -1 jika hanya 1 nilai unik**
```javascript
cariModus([7, 7, 7, 7, 7]) // -1 → hanya 1 nilai unik
cariModus([1, 1, 1])        // -1 → contoh dari soal
```

**4. Jika ada beberapa modus, ambil yang pertama muncul**
```javascript
cariModus([5, 10, 10, 6, 5]) // 5 → 5 dan 10 sama-sama 2x, tapi 5 lebih dulu
```

---

## ⚠️ Edge Cases

| Input | Output | Alasan |
|-------|--------|--------|
| `[10, 4, 5, 2, 4]` | `4` | Modus jelas, muncul 2x |
| `[5, 10, 10, 6, 5]` | `5` | Dua modus, ambil yang pertama muncul |
| `[10, 3, 1, 2, 5]` | `-1` | Semua muncul 1x |
| `[7, 7, 7, 7, 7]` | `-1` | Hanya 1 nilai unik |
| `[1, 2, 1, 2, 3, 3]` | `1` | Tiga modus, ambil yang pertama muncul |
| `[1, 2, 3, 3, 4, 5]` | `3` | Modus jelas, muncul 2x |

---

## 📊 Kriteria Solusi

| Kriteria | Keterangan |
|----------|------------|
| ✅ **Return modus** | Angka yang paling sering muncul |
| ✅ **Return -1** | Jika semua frekuensi sama atau hanya 1 nilai unik |
| ✅ **Prioritas kiri** | Jika ada beberapa modus, ambil index terkecil |
| ✅ **Minimal muncul 2x** | Modus harus muncul lebih dari 1x |

---

## 📋 Improvement Checklist

**Sebelum coding, pastikan paham:**
- [ ] Apa yang dimaksud "modus pertama muncul"?
- [ ] Kapan harus return -1?
- [ ] Bagaimana handle array dengan semua elemen sama?
- [ ] Bagaimana handle array dengan semua elemen berbeda?

---

## 💡 Key Takeaways

> **Baca Soal Dua Kali**  
> Pastikan semua aturan dipahami sebelum mulai coding

> **Edge Cases = Jebakan**  
> Soal ini punya 2 kondisi return -1 yang berbeda

> **"Pertama Muncul" = Index Terkecil**  
> Bukan yang paling sering, tapi yang pertama ketemu saat ada seri

> **Modus Minimal 2x**  
> Angka yang muncul hanya 1x tidak dianggap modus

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📝 [Lanjut ke Part 2: Membangun Solusi →](02-Membangun-Solusi.md)**

---

<div align="center">

**Siap mulai bangun solusi di Part 2?**

Made with ❤️ from real learning session

</div>
