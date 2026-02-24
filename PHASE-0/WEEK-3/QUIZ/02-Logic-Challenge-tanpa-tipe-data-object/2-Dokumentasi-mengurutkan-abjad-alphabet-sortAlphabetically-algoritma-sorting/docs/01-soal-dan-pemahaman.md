# 📚 Algoritma Sorting - PART 1: SOAL & PEMAHAMAN KRITERIA

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║           📋 PART 1: SOAL & PEMAHAMAN KRITERIA 📋                       ║
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
- ✅ Tahu kenapa tidak boleh pakai `.sort()`
- ✅ Memahami cara kerja sorting secara konseptual
- ✅ Siap untuk melihat dan menganalisis kode di Part 2

---

## 📋 Soal

```
🚫 DILARANG MENGGUNAKAN METHOD SORT
💡 Pelajari algoritma sorting yang ada (disarankan Bubble Sort)

Buatlah sebuah function sortAlphabetically(inputString) yang menerima
satu parameter berupa string.

Function akan mengembalikan string yang sama dengan karakter-karakternya
sudah diurutkan secara alfabetikal dari A ke Z.

Contoh: jika inputString adalah 'hello', maka karakter-karakternya
adalah ['h','e','l','l','o'], setelah diurutkan menjadi ['e','h','l','l','o'],
dan function mengembalikan 'ehllo'.
```

---

## 🔍 Kriteria

1. 🚫 **Dilarang** menggunakan method `.sort()` bawaan JavaScript
2. 🔄 **Wajib** mengimplementasikan algoritma sorting sendiri
3. 🔤 **Input** berupa string, **output** berupa string yang sudah terurut
4. 📊 **Urutkan** karakter dari A ke Z (ascending/alfabetikal)
5. ✅ **Lulus** semua test cases yang diberikan

---

## 📊 Contoh-contoh

### 🔤 inputString = 'hello'
| 🔢 Langkah | 📝 Proses |
|-----------|----------|
| Input | `'hello'` |
| Split | `['h','e','l','l','o']` |
| Sort | `['e','h','l','l','o']` |
| Join | `'ehllo'` ✅ |

---

### 🔤 inputString = 'developer'
| 🔢 Langkah | 📝 Proses |
|-----------|----------|
| Input | `'developer'` |
| Split | `['d','e','v','e','l','o','p','e','r']` |
| Sort | `['d','e','e','e','l','o','p','r','v']` |
| Join | `'deeeloprv'` ✅ |

---

### 🔤 inputString = 'aegis' (sudah terurut)
| 🔢 Langkah | 📝 Proses |
|-----------|----------|
| Input | `'aegis'` |
| Split | `['a','e','g','i','s']` |
| Sort | `['a','e','g','i','s']` (tidak ada perubahan) |
| Join | `'aegis'` ✅ |

---

### 🔤 Edge Cases
| 🔢 Input | 📝 Proses | ✅ Output |
|---------|----------|----------|
| `''` | String kosong, tidak ada yang diurutkan | `''` |
| `'a'` | Satu karakter, tidak perlu diurutkan | `'a'` |
| `'aaaa'` | Semua karakter sama, tidak ada perubahan | `'aaaa'` |
| `'dcba'` | Urutan terbalik penuh | `'abcd'` |

---

## 🧪 Test Cases Standar

```javascript
// Basic cases
console.log(sortAlphabetically('hello'));      // 'ehllo'
console.log(sortAlphabetically('truncate'));   // 'acenrttu'
console.log(sortAlphabetically('developer'));  // 'deeeloprv'
console.log(sortAlphabetically('software'));   // 'aeforstw'
console.log(sortAlphabetically('aegis'));      // 'aegis'

// Edge cases
console.log(sortAlphabetically(''));           // ''
console.log(sortAlphabetically('a'));          // 'a'
console.log(sortAlphabetically('aaaa'));       // 'aaaa'
console.log(sortAlphabetically('dcba'));       // 'abcd'
```

---

## ✅ Ringkasan

> 💡 **Inti soal:** Ubah string menjadi array karakter, urutkan karakternya secara alfabetikal menggunakan algoritma sorting sendiri (tanpa `.sort()`), lalu kembalikan sebagai string.
>
> 🔑 **Kunci utama:** String di JavaScript bersifat **immutable** (tidak bisa diubah langsung), maka harus dikonversi ke array terlebih dahulu menggunakan `.split('')`, baru bisa dimanipulasi.
>
> 🚀 **Algoritma yang dipelajari:** Bubble Sort, Selection Sort, dan Insertion Sort.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2: Analisis Kode Original →](02-analisis-kode-original.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
