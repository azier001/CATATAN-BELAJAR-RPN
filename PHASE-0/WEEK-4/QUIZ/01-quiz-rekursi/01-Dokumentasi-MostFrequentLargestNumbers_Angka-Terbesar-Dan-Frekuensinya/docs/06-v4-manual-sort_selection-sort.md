# 🔧 V4 — Manual Sort dengan Selection Sort

## 💻 Kode

```javascript
function sorting(arrNumber) {
  const arr = [...arrNumber]  // copy dulu

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        // tukar posisi
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr
}

function getTotal(arrNumber) {
  if (!arrNumber.length) return ''

  const largestNumber = arrNumber[0]
  let count = 0

  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === largestNumber) {
      count++
    } else {
      break
    }
  }

  return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${count} kali`
}
```

---

## 🎞️ Visualisasi Selection Sort — `[2, 8, 4, 6]`

```
Iterasi i=0 (isi posisi 0 dengan angka terbesar):
  j=1: 8 > 2? ✅ → tukar → [8, 2, 4, 6]
  j=2: 4 > 8? ❌
  j=3: 6 > 8? ❌
  Hasil: [8, 2, 4, 6]

Iterasi i=1 (isi posisi 1 dengan terbesar dari sisa):
  j=2: 4 > 2? ✅ → tukar → [8, 4, 2, 6]
  j=3: 6 > 4? ✅ → tukar → [8, 6, 2, 4] → [8, 6, 4, 2]

Hasil akhir: [8, 6, 4, 2] ✅
```

---

## ⚖️ Evaluasi

| Aspek | Nilai |
|-------|-------|
| Mutasi array asli | ✅ Aman (pakai spread copy) |
| Time Complexity | `O(n²)` — lebih lambat dari built-in |
| Tujuan | Belajar algoritma sorting dari nol |
| Cocok untuk | Memahami cara kerja sorting secara manual |

> 💡 Gunakan versi ini saat **belajar algoritma**. Untuk production, selalu pakai built-in `.sort()`.

---

*Lanjut ke → [07 — Insight: Mutasi & Efisiensi](./07-insight-mutation-efficiency_mutasi-dan-efisiensi.md)*
