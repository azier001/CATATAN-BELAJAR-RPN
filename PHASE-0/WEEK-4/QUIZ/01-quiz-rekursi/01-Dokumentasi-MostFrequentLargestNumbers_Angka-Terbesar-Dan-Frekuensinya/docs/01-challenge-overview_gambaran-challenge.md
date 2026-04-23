# 🎯 Challenge Overview — Most Frequent Largest Numbers

## 📋 Soal Challenge

Diberikan tiga function, tapi yang boleh diisi hanya dua: `sorting` dan `getTotal`. Function utama `mostFrequentLargestNumbers` **tidak boleh disentuh sama sekali**.

```javascript
function sorting(arrNumber) {
  // code di sini
}

function getTotal(arrNumber) {
  // code di sini
}

// function ini TIDAK BOLEH diubah
function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}
```

**Tugasnya:** Cari angka terbesar dari array, lalu hitung berapa kali angka itu muncul.

**Aturan mainnya:**
- Hanya boleh mengubah isi `sorting` dan `getTotal`
- Dilarang mengubah isi `mostFrequentLargestNumbers`
- Kalau array kosong, kembalikan string kosong `''`

---

## 🎯 Expected Output

```javascript
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
// 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// 'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// 'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
// ''
```

| Input | Output |
|-------|--------|
| `[2, 8, 4, 6, 8, 5, 8, 4]` | `'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'` |
| `[122, 122, 130, 100, 135, 100, 135, 150]` | `'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'` |
| `[1, 1, 1, 1]` | `'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'` |
| `[]` | `''` |

---

## 🌍 Analogi

Bayangkan kamu punya sekantong kelereng dengan berbagai warna angka. Tugasnya:
1. **Urutkan** semua kelereng dari angka terbesar ke terkecil
2. **Hitung** berapa kelereng yang punya angka terbesar itu

```
Input: [2, 8, 4, 6, 8, 5, 8, 4]

Setelah diurutkan: [8, 8, 8, 6, 5, 4, 4, 2]
Angka terbesar: 8
Jumlah kemunculan 8: 3 kali

Output: 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
```

---

*Lanjut ke → [02 — Alur Berpikir](./02-problem-solving-approach_alur-berpikir.md)*
