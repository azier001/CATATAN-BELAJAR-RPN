# ✅ V2 — Solusi Final (Rekomendasi)

## 💻 Kode Lengkap

```javascript
// sorting: copy dulu arraynya, baru diurutkan dari besar ke kecil
function sorting(arrNumber) {
  return [...arrNumber].sort((a, b) => b - a)
}

// getTotal: ambil angka terbesar dari index 0, lalu hitung kemunculannya
function getTotal(arrNumber) {
  if (!arrNumber.length) return ''

  const largestNumber = arrNumber[0]
  let count = 0

  // karena array sudah terurut, berhenti begitu ketemu angka berbeda
  for (const number of arrNumber) {
    if (number === largestNumber) {
      count++
    } else {
      break
    }
  }

  return `angka paling besar adalah ${largestNumber} dan jumlah kemunculan sebanyak ${count} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}
```

---

## 🔍 Penjelasan Baris per Baris

```javascript
return [...arrNumber].sort((a, b) => b - a)
// [...arrNumber] → buat shallow copy dulu, array asli aman
// .sort((a, b) => b - a) → urutkan descending
```

```javascript
if (!arrNumber.length) return ''
// Guard clause: kalau array kosong, langsung return '' tanpa proses apapun
```

```javascript
const largestNumber = arrNumber[0]
// Index 0 = angka terbesar, karena array sudah terurut descending
// Tidak perlu Math.max() atau loop tambahan!
```

```javascript
for (const number of arrNumber) {
  if (number === largestNumber) {
    count++
  } else {
    break  // berhenti lebih awal → lebih efisien
  }
}
```

---

## 🎞️ Visualisasi — `[2, 8, 4, 6, 8, 5, 8, 4]`

```
Input: [2, 8, 4, 6, 8, 5, 8, 4]

Setelah sorting: [8, 8, 8, 6, 5, 4, 4, 2]
largestNumber = 8 (index 0)

Iterasi:
→ number = 8  → sama dengan 8 → count = 1
→ number = 8  → sama dengan 8 → count = 2
→ number = 8  → sama dengan 8 → count = 3
→ number = 6  → BEDA dari 8  → BREAK! (tidak lanjut ke 5, 4, 4, 2)

Output: 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
```

---

## ⚖️ Evaluasi

| Aspek | Nilai |
|-------|-------|
| Mutasi array asli | ✅ Aman (pakai spread copy) |
| Efisiensi counting | ✅ Early break |
| Time Complexity | `O(n log n)` karena `.sort()` |
| Space Complexity | `O(n)` karena spread copy |
| Readability | ✅ Bersih dan mudah dibaca |

---

*Lanjut ke → [05 — V3: Math.max + Filter](./05-v3-mathmax-filter_mathmax-filter.md)*
