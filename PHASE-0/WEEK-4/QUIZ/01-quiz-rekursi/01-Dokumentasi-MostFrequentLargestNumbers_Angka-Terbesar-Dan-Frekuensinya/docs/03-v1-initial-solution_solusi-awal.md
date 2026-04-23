# 🔴 V1 — Solusi Awal (Ada Bug Mutasi)

## 💻 Kode

```javascript
function sorting(arrNumber) {
  return arrNumber.sort((a, b) => b - a)
}

function getTotal(arrNumber) {
  if (!arrNumber.length) return ''

  const largestNumber = arrNumber[0]
  let count = 0

  for (const number of arrNumber) {
    if (number === largestNumber) count++
  }

  return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${count} kali`
}
```

---

## 🔍 Penjelasan

**`sorting`:**
- `.sort((a, b) => b - a)` → urutkan descending (besar ke kecil)
- Masalah: `.sort()` **mutating** — mengubah array asli!

**`getTotal`:**
- `arrNumber[0]` → angka terbesar (karena array sudah terurut)
- Loop `for...of` menghitung semua kemunculan
- Masalah: loop berjalan sampai akhir meskipun angka terbesar sudah habis

---

## ⚠️ Bug: Mutasi Array Asli

```javascript
const myArr = [2, 8, 4]
sorting(myArr)           // sort tanpa copy
console.log(myArr)       // [8, 4, 2] ← array asli berubah!
```

Ini berbahaya kalau `myArr` masih dipakai di tempat lain setelah `sorting` dipanggil.

---

## ⚖️ Evaluasi

| Aspek | Nilai |
|-------|-------|
| Logika benar | ✅ |
| Mutasi array asli | ⚠️ Ada bug |
| Efisiensi counting | 🔴 Loop sampai akhir |
| Readability | ✅ |

---

*Lanjut ke → [04 — V2: Solusi Final](./04-v2-final-solution_solusi-final.md)*
