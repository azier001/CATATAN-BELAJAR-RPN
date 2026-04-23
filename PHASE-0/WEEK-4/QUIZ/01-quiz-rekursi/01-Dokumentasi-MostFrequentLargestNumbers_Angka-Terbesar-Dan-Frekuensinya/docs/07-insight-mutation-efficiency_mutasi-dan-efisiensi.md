# 💡 Insight — Mutasi Array & Efisiensi Early Break

## 1. `.sort()` itu Mutating

```javascript
// ❌ Berbahaya
const myArr = [2, 8, 4]
myArr.sort((a, b) => b - a)
console.log(myArr)  // [8, 4, 2] ← array asli berubah!

// ✅ Aman
const sorted = [...myArr].sort((a, b) => b - a)
console.log(myArr)   // [2, 8, 4] ← tetap sama
```

---

## 2. Early Break vs `reduce` untuk Counting

```javascript
// ✅ Efisien — berhenti saat ketemu angka berbeda
for (const number of arrNumber) {
  if (number === largestNumber) count++
  else break
}

// 🔴 Kurang efisien — selalu loop sampai akhir
const count = arrNumber.reduce((acc, n) =>
  n === largestNumber ? acc + 1 : acc, 0)
```

---

## 3. Pisahkan Tanggung Jawab

- `sorting` → HANYA urusan sorting
- `getTotal` → HANYA urusan menghitung + format output

---

## 4. Built-in vs Manual Sort

| | `.sort()` Built-in | Selection Sort Manual |
|---|---|---|
| Time Complexity | `O(n log n)` | `O(n²)` |
| Cocok untuk | Production | Belajar algoritma |
