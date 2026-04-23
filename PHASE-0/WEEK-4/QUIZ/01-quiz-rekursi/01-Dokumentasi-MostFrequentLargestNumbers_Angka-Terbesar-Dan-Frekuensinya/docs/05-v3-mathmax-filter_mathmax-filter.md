# 🧮 V3 — Math.max + Filter (Paling Singkat)

## 💻 Kode

```javascript
function sorting(arrNumber) {
  return arrNumber  // tidak perlu sort sama sekali
}

function getTotal(arrNumber) {
  if (!arrNumber.length) return ''

  const largestNumber = Math.max(...arrNumber)
  const count = arrNumber.filter(n => n === largestNumber).length

  return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${count} kali`
}
```

---

## 🔍 Penjelasan

```javascript
const largestNumber = Math.max(...arrNumber)
// Gunakan spread operator untuk cari nilai max
// Math.max(2, 8, 4, 6, 8, 5, 8, 4) → 8

const count = arrNumber.filter(n => n === largestNumber).length
// filter → buat array baru berisi hanya angka yang sama dengan max
// .length → hitung hasilnya
// [8, 8, 8].length → 3
```

---

## ⚠️ Kekurangan

`Math.max(...arr)` bisa **error** kalau arraynya sangat besar, karena spread operator punya batas jumlah argumen yang bisa dikirim ke function.

```javascript
// Jika array punya 200.000+ elemen:
Math.max(...hugeArray)  // ⚠️ Bisa throw RangeError
```

---

## ⚖️ Evaluasi

| Aspek | Nilai |
|-------|-------|
| Kode singkat | ✅ Paling ringkas |
| Tidak perlu sort | ✅ |
| Time Complexity | `O(n)` — filter loop penuh |
| Risiko array besar | ⚠️ |
| Cocok untuk | Kode singkat, array kecil |

---

*Lanjut ke → [06 — V4: Manual Sort](./06-v4-manual-sort_selection-sort.md)*
