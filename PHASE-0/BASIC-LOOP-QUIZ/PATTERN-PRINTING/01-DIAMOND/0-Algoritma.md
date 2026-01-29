### 📝 Algoritma Step-by-Step (1 Loop)

--- 

1. Inisialisasi string `pattern` kosong
2. **Loop** dari 1 sampai `(num × 2 - 1)`:
   - Tentukan `level`:
     - Jika `i ≤ num` → `level = i`
     - Jika `i > num` → `level = (num × 2) - i`
   - Tambahkan spasi sebanyak `(num - level)`
   - Tambahkan bintang sebanyak `(2 × level - 1)`
   - Tambahkan newline `\n`
3. Kembalikan `pattern`

---
