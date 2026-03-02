# 📚 Build Profile Map - PART 5: SOLUSI ALTERNATIF

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              🔀 PART 5: SOLUSI ALTERNATIF 🔀                            ║
║                                                                          ║
║              3 Cara Berbeda Menyelesaikan Soal yang Sama                 ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-15%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌿%20Menengah-yellowgreen)

---

## 🧭 Quick Jump

| 🔀 Alternatif 1 | 🔀 Alternatif 2 | 🔀 Alternatif 3 | 📊 Perbandingan |
|:--------------:|:--------------:|:--------------:|:--------------:|
| [Jump](#-alternatif-1--reduce) | [Jump](#-alternatif-2--foreach) | [Jump](#-alternatif-3--objectentries) | [Jump](#-perbandingan-semua-solusi) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:
- ✅ Mengenal 3 pendekatan berbeda untuk menyelesaikan soal yang sama
- ✅ Memahami perbedaan `reduce`, `forEach`, dan `Object.entries`
- ✅ Bisa memilih pendekatan yang paling sesuai konteks
- ✅ Siap mendalami algoritma tiap alternatif di Part 6, 7, dan 8

---

## 🔀 Alternatif 1 — `reduce`

```javascript
const buildProfileMap = (profiles) => {
  if (profiles.length === 0) {
    console.log('')
    return
  }

  const CURRENT_YEAR = new Date().getFullYear()

  const profileMap = profiles.reduce((acc, [firstName, lastName, gender, birthYear]) => {
    const fullName = `${firstName} ${lastName}`
    const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'

    if (!acc[fullName]) {
      acc[fullName] = { firstName, lastName, gender, age }
    }

    return acc
  }, {})

  const [firstFirstName, firstLastName] = profiles[0]
  console.log(`1. ${firstFirstName} ${firstLastName}:`)

  for (const fullName in profileMap) {
    console.log(`${fullName}:`, profileMap[fullName])
  }
}
```

**Perbedaan utama:**
- `reduce` menggantikan `for...of` loop
- Dimulai dari object kosong `{}` sebagai accumulator `acc`
- Setiap iterasi menambahkan entry ke `acc` lalu **wajib** return `acc`
- Lebih **functional programming** style

---

## 🔀 Alternatif 2 — `forEach`

```javascript
const buildProfileMap = (profiles) => {
  if (profiles.length === 0) {
    console.log('')
    return
  }

  const CURRENT_YEAR = new Date().getFullYear()
  const profileMap = {}

  profiles.forEach(([firstName, lastName, gender, birthYear]) => {
    const fullName = `${firstName} ${lastName}`
    const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'

    if (!profileMap[fullName]) {
      profileMap[fullName] = { firstName, lastName, gender, age }
    }
  })

  const [firstFirstName, firstLastName] = profiles[0]
  console.log(`1. ${firstFirstName} ${firstLastName}:`)

  for (const fullName in profileMap) {
    console.log(`${fullName}:`, profileMap[fullName])
  }
}
```

**Perbedaan utama:**
- `forEach` menggantikan `for...of` loop
- Tidak ada accumulator seperti `reduce` — memanfaatkan `profileMap` yang dideklarasikan di luar
- Destructuring langsung di parameter callback
- Tidak bisa menggunakan `break` atau `continue`

---

## 🔀 Alternatif 3 — `Object.entries`

```javascript
const buildProfileMap = (profiles) => {
  if (profiles.length === 0) {
    console.log('')
    return
  }

  const CURRENT_YEAR = new Date().getFullYear()
  const profileMap = {}

  for (const [firstName, lastName, gender, birthYear] of profiles) {
    const fullName = `${firstName} ${lastName}`
    const age = birthYear ? CURRENT_YEAR - birthYear : 'Invalid Birth Year'

    if (!profileMap[fullName]) {
      profileMap[fullName] = { firstName, lastName, gender, age }
    }
  }

  const [firstFirstName, firstLastName] = profiles[0]
  console.log(`1. ${firstFirstName} ${firstLastName}:`)

  Object.entries(profileMap).forEach(([fullName, data]) => {
    console.log(`${fullName}:`, data)
  })
}
```

**Perbedaan utama:**
- Bagian building map sama seperti kode utama
- Perbedaan hanya di bagian **output** — `Object.entries` menggantikan `for...in`
- `Object.entries` mengubah object menjadi array of `[key, value]` pairs
- Lalu di-destructure langsung di parameter `forEach`

---

## 📊 Perbandingan Semua Solusi

| | Kode Utama | Alternatif 1 | Alternatif 2 | Alternatif 3 |
|---|---|---|---|---|
| Loop building | `for...of` | `reduce` | `forEach` | `for...of` |
| Loop output | `for...in` | `for...in` | `for...in` | `Object.entries` |
| Style | Imperative | Functional | Functional | Campuran |
| Accumulator bawaan | ❌ | ✅ | ❌ | ❌ |
| Bisa `break`/`continue` | ✅ | ❌ | ❌ | ✅ |
| Wajib `return acc` | ❌ | ✅ | ❌ | ❌ |
| Readability | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

> Semua alternatif menghasilkan output yang **sama persis**. Pilihan tergantung preferensi dan style coding masing-masing.

---

## 🧠 Pertanyaan Pemahaman

<details>
<summary><strong>❓ Kapan sebaiknya pakai reduce?</strong></summary>

Gunakan `reduce` ketika tujuannya adalah **mengubah array menjadi satu nilai tunggal** (object, angka, string, dll). Jika logikanya lebih kompleks atau butuh `break`/`continue`, lebih baik pakai `for...of`.

</details>

<details>
<summary><strong>❓ Apa keunggulan Object.entries dibanding for...in?</strong></summary>

`Object.entries` menghasilkan array, sehingga bisa langsung di-chain dengan method array lain seperti `.map()`, `.filter()`, `.sort()`. Selain itu, `Object.entries` hanya mengiterasi *own properties* — lebih aman dari `for...in` yang bisa ikut mengiterasi inherited properties.

</details>

<details>
<summary><strong>❓ Kenapa forEach tidak bisa break?</strong></summary>

Karena `forEach` adalah method yang menjalankan callback untuk **setiap elemen tanpa pengecualian**. Tidak ada mekanisme untuk menghentikannya di tengah jalan. Jika butuh kontrol penuh, gunakan `for...of`.

</details>

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📊 [← Kembali ke Part 4: Ringkasan Algoritma Utama](04-ringkasan-algoritma-utama.md)**
- **🔀 [Lanjut ke Part 6: Ringkasan Algoritma Alternatif 1 (reduce) →](06-ringkasan-algoritma-alternatif-1-reduce.md)**

---

<div align="center">

Made with ❤️ for learners

</div>
