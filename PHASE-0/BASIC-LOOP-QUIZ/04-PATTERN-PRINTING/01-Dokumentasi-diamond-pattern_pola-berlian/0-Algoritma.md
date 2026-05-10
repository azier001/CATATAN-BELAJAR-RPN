# 📋 Algoritma Berlian — Cheat Sheet Semua Versi

> 🎯 *Ringkasan cepat algoritma semua versi. Buka file ini kalau kamu cuma butuh "contekan" rumus.*

---

### 📌 Rumus Inti (Berlaku untuk SEMUA Versi)

```
Jumlah Spasi   =  num - row
Jumlah Bintang =  (row × 2) - 1
Total Baris    =  (num × 2) - 1
```

---

### ⚡ V1 — Nested Loop (2 Loop Utama)

```
1. Buat string kosong `pattern`
2. Loop `row` dari 1 → num:
   - Nested loop spasi: (num - row) kali
   - Nested loop bintang: (2×row - 1) kali
   - Tambah '\n'
3. Loop `row` dari (num-1) → 1:
   - (Sama dengan langkah 2)
4. Return pattern
```

---

### ⚡ V2 — `.repeat()` (2 Loop Utama)

```
1. Buat string kosong `pattern`
2. Loop `row` dari 1 → num:
   - pattern += ' '.repeat(num - row) + '*'.repeat(2*row - 1) + '\n'
3. Loop `row` dari (num-1) → 1:
   - (Sama dengan langkah 2)
4. Return pattern
```

---

### ⚡ V3 — Math.abs + `.repeat()` (1 Loop)

```
1. Buat string kosong `pattern`
2. Loop `i` dari 1 → (num*2 - 1):
   - currentRow = num - Math.abs(num - i)
   - pattern += ' '.repeat(num - currentRow) + '*'.repeat(2*currentRow - 1) + '\n'
3. Return pattern
```

---

### ⚡ V4 — Ternary + Nested Loop (1 Loop)

```
1. Buat string kosong `pattern`
2. Loop `i` dari 1 → (num*2 - 1):
   - level = i <= num ? i : num*2 - i
   - Nested loop spasi: (num - level) kali
   - Nested loop bintang: (2*level - 1) kali
   - Tambah '\n'
3. Return pattern
```

---

### 📊 Quick Comparison

| | V1 | V2 | V3 ⭐ | V4 |
|:---|:---:|:---:|:---:|:---:|
| **Loop Utama** | 2 | 2 | 1 | 1 |
| **Nested Loop** | 4 | 0 | 0 | 4 |
| **Total Loop** | 6 | 2 | **1** | 5 |
| **Level** | Pemula | Menengah | Mahir | Menengah |

---

> 📚 **Detail lengkap:** [2-Solusi-2-Loop.md](./2-Solusi-2-Loop.md) (V1 & V2) · [3-Solusi-1-Loop.md](./3-Solusi-1-Loop.md) (V3 & V4)
