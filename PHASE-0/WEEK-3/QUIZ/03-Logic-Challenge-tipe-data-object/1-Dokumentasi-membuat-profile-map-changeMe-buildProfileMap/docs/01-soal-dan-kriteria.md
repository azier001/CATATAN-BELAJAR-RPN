# 📚 Build Profile Map - PART 1: SOAL & KRITERIA

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 PART 1: SOAL & KRITERIA 📋                              ║
║                                                                          ║
║              Apa yang Diminta dan Bagaimana Cara Kerjanya                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🧭 Quick Jump

| 📋 Soal | 🔍 Kriteria | 📊 Contoh | ✅ Ringkasan |
|:-------:|:-----------:|:---------:|:-----------:|
| [Jump](#-soal) | [Jump](#-kriteria) | [Jump](#-contoh-contoh) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami apa yang diminta soal
- ✅ Tahu format input dan output yang diharapkan
- ✅ Memahami aturan deduplication dan handling edge case
- ✅ Siap untuk melihat dan menganalisis kode di Part 2

---

## 📋 Soal

```
Diberikan sebuah function yang menerima satu parameter berupa
array of arrays, di mana setiap inner array berisi data profile
seseorang: [firstName, lastName, gender, birthYear].

Function akan membangun sebuah object/map dari data tersebut,
menghitung umur dari birthYear, menangani data duplikat,
dan menampilkan hasilnya ke console.
```

---

## 🔍 Kriteria

1. Jika array **kosong** → print string kosong `""`
2. Untuk setiap profile, hitung **age** dari `birthYear`:
   - Ada `birthYear` → `currentYear - birthYear`
   - Tidak ada `birthYear` → `'Invalid Birth Year'`
3. Gunakan `fullName` sebagai **key unik** → jika duplikat, data pertama yang dipertahankan
4. Print **header** hanya dari profile pertama: `"1. firstName lastName:"`
5. Print **semua entry** dengan format: `"fullName: { ...data }"`

---

## 📊 Contoh-contoh

### Input Normal

```javascript
buildProfileMap([
  ['Christ', 'Evans', 'Male', 1982],
  ['Robert', 'Downey', 'Male']
])
```

| Profile | firstName | lastName | gender | birthYear | age |
|---------|-----------|----------|--------|-----------|-----|
| 1 | Christ | Evans | Male | 1982 | 44 |
| 2 | Robert | Downey | Male | undefined | 'Invalid Birth Year' |

**Output:**
```
1. Christ Evans:
Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 44 }
Robert Downey: { firstName: 'Robert', lastName: 'Downey', gender: 'Male', age: 'Invalid Birth Year' }
```

---

### Input Kosong

```javascript
buildProfileMap([])
```

**Output:**
```
""
```

---

### Input dengan Duplikat

```javascript
buildProfileMap([
  ['Christ', 'Evans', 'Male', 1982],
  ['Christ', 'Evans', 'Male', 1982]
])
```

**Output:**
```
1. Christ Evans:
Christ Evans: { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 44 }
```

→ Duplikat **diabaikan**, hanya data pertama yang ditampilkan

---

## ✅ Ringkasan

> **Pola penting:** Fungsi ini tidak hanya memproses data, tapi juga menjaga **keunikan** data menggunakan `fullName` sebagai key. Semakin awal data masuk, semakin diprioritaskan jika ada duplikat.

> **Edge case utama:** `birthYear` yang tidak ada (undefined) harus ditangani dengan mengembalikan string `'Invalid Birth Year'`, bukan error atau nilai aneh.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2: Analisis Kode Original →](02-analisis-kode-original.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
