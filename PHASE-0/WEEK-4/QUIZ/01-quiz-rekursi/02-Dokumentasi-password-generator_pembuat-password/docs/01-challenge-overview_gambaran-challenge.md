# 📋 Part 1 — Challenge Overview & Gambaran Challenge

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen?style=for-the-badge)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-10%20minutes-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green?style=for-the-badge)

---

## 🧭 Quick Jump

| 📋 Template Soal | 🔄 Alur Pipeline | 📤 Expected Output | 💡 Poin Penting | ✅ Ringkasan |
|:----------------:|:----------------:|:-----------------:|:---------------:|:-----------:|
| [Jump](#-template-soal-asli) | [Jump](#-alur-pipeline) | [Jump](#-expected-output) | [Jump](#-poin-penting-sebelum-mulai) | [Jump](#-ringkasan) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Memahami apa yang diminta soal
- ✅ Memahami alur pipeline 4 langkah secara visual
- ✅ Tahu expected output dari setiap input
- ✅ Siap untuk mulai mengimplementasikan setiap helper function

---

## 📋 Template Soal Asli

Ini adalah template soal asli yang diberikan — belum ada implementasi sama sekali:

```js
/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/

function changeVocals (str) {
  //code di sini
}

function reverseWord (str) {
  //code di sini
}

function setLowerUpperCase (str) {
  //code di sini
}

function removeSpaces (str) {
  //code di sini
}

function passwordGenerator (name) {
  //code di sini
}
```

### ▶️ Expected Output — Coba Satu per Satu

```js
console.log(passwordGenerator('Sergei Dragunov'));
// Output: 'VPNVGBRdJFGRFs'
```

```js
console.log(passwordGenerator('Dimitri Wahyudiputra'));
// Output: 'BRTVPJDVYHBwJRTJMJd'
```

```js
console.log(passwordGenerator('Alexei'));
// Output: 'JFXFLb'
```

```js
console.log(passwordGenerator('Alex'));
// Output: 'Minimal karakter yang diinputkan adalah 5 karakter'
```

---

## 🔄 Alur Pipeline

Pipeline adalah konsep menyusun beberapa fungsi secara **berurutan** — output satu fungsi menjadi input fungsi berikutnya.

```
Input: 'Alexei'
    │
    ▼
┌─────────────────────────────────┐
│  Step 1 — changeVocals          │
│  Ganti vokal → karakter berikut │
│  'Alexei' → 'Blfxfj'           │
└─────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────┐
│  Step 2 — reverseWord           │
│  Balik seluruh string           │
│  'Blfxfj' → 'jfxflB'           │
└─────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────┐
│  Step 3 — setLowerUpperCase     │
│  Toggle: besar↔kecil            │
│  'jfxflB' → 'JFXFLb'           │
└─────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────┐
│  Step 4 — removeSpaces          │
│  Hapus semua spasi              │
│  'JFXFLb' → 'JFXFLb'           │
└─────────────────────────────────┘
    │
    ▼
Output: 'JFXFLb' ✅
```

> ⚠️ **Penting:** Urutan step ini **tidak boleh ditukar!** Coba tukar urutannya dan hasilnya akan berbeda.

---

## 📤 Expected Output

| Input | Output |
|-------|--------|
| `'Sergei Dragunov'` | `'VPNVGBRdJFGRFs'` |
| `'Dimitri Wahyudiputra'` | `'BRTVPJDVYHBwJRTJMJd'` |
| `'Alexei'` | `'JFXFLb'` |
| `'Alex'` | `'Minimal karakter yang diinputkan adalah 5 karakter'` |

---

## 💡 Poin Penting Sebelum Mulai

- 🔑 **Setiap helper function berdiri sendiri** — `changeVocals`, `reverseWord`, `setLowerUpperCase`, dan `removeSpaces` masing-masing punya satu tugas spesifik
- 🔑 **`passwordGenerator` hanya memanggil** keempat helper function di atas secara berurutan
- 🔑 **Validasi input** — nama dengan kurang dari 5 karakter harus ditolak
- 🔑 **Vokal yang diganti hanya 10 karakter** — `a i u e o A I U E O`, bukan semua huruf

---

## ✅ Ringkasan

| Kriteria | Detail |
|----------|--------|
| Input | `name` — string nama seseorang |
| Validasi | Kurang dari 5 karakter → return pesan error |
| Step 1 | `changeVocals` — ganti vokal ke karakter berikutnya |
| Step 2 | `reverseWord` — balik seluruh string |
| Step 3 | `setLowerUpperCase` — toggle huruf besar↔kecil |
| Step 4 | `removeSpaces` — hapus semua spasi |
| Output | String password hasil pipeline |

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📖 [Lanjut ke Part 2 — changeVocals →](./02-charCodeAt-vocal-mapping_pemetaan-vokal.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
