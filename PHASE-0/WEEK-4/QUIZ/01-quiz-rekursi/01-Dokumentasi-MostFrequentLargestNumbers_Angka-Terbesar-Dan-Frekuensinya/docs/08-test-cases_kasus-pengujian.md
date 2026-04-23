# 🧪 Test Cases — mostFrequentLargestNumbers

## 🚀 Test Sederhana

```javascript
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
// 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([]));
// ''
```

---

## 🔬 Test Runner Lengkap

```javascript
const testCases = [
  { input: [], expected: '', desc: 'Array kosong' },
  { input: [5], expected: 'angka paling besar adalah 5 dan jumlah kemunculan sebanyak 1 kali', desc: 'Satu elemen' },
  { input: [1, 2, 3, 4, 5], expected: 'angka paling besar adalah 5 dan jumlah kemunculan sebanyak 1 kali', desc: 'Semua unik' },
  { input: [5, 5, 5, 5], expected: 'angka paling besar adalah 5 dan jumlah kemunculan sebanyak 4 kali', desc: 'Semua sama' },
  { input: [2, 8, 4, 6, 8, 5, 8, 4], expected: 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali', desc: 'Terbesar muncul beberapa kali' },
  { input: [10, 20, 20, 30, 30, 30], expected: 'angka paling besar adalah 30 dan jumlah kemunculan sebanyak 3 kali', desc: 'Largest frekuensi tinggi' },
  { input: [-10, -5, -3, -5, -3, -3], expected: 'angka paling besar adalah -3 dan jumlah kemunculan sebanyak 3 kali', desc: 'Angka negatif' },
  { input: [7, 2, 9, 1, 9, 3, 9], expected: 'angka paling besar adalah 9 dan jumlah kemunculan sebanyak 3 kali', desc: 'Tidak terurut' },
]

testCases.forEach(({ input, expected, desc }, index) => {
  const result = mostFrequentLargestNumbers(input)
  const status = result === expected ? '✅ PASS' : '❌ FAIL'
  console.log(`Test #${index + 1}: ${status} — ${desc}`)
  if (status === '❌ FAIL') {
    console.log('Expected:', expected)
    console.log('Got     :', result)
  }
})
```

---

## ✅ Hasil Test

| # | Deskripsi | Status |
|---|-----------|--------|
| 1 | Array kosong | ✅ PASS |
| 2 | Satu elemen | ✅ PASS |
| 3 | Semua unik | ✅ PASS |
| 4 | Semua sama | ✅ PASS |
| 5 | Terbesar muncul beberapa kali | ✅ PASS |
| 6 | Largest frekuensi tinggi | ✅ PASS |
| 7 | Angka negatif | ✅ PASS |
| 8 | Tidak terurut | ✅ PASS |
