```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            📖 BONUS: ALGORITMA CHEATSHEET 📖                            ║
║                                                                          ║
║              Quick Reference untuk Interview & Ujian                     ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-5%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌱%20Pemula-green)

---

## 🎯 Untuk Interview/Ujian

Jika hanya ingat konsepnya, ini yang perlu kamu tulis:

---

## 🏆 Versi 4: Single-Pass (RECOMMENDED)

### **Code:**
```javascript
const findClosestDistance = (chars) => {
  let lastO = null
  let lastX = null
  let minDistance = Infinity
  
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === 'o') lastO = i
    if (chars[i] === 'x') lastX = i
    
    if (lastO !== null && lastX !== null) {
      const distance = Math.abs(lastO - lastX)
      if (distance < minDistance) minDistance = distance
    }
  }
  
  return minDistance === Infinity ? 0 : minDistance
}
```

### 🧠 **Ringkasan Singkat:**

**Konsep:** Track lastO & lastX dalam 1 loop, hitung jarak setiap update.

**Steps:**
1. Init `lastO = null`, `lastX = null`, `minDistance = Infinity`
2. Loop array:
   - Update lastO jika ketemu 'o'
   - Update lastX jika ketemu 'x'
   - Jika keduanya ada: hitung `|lastO - lastX|`, update min
3. Return `minDistance === Infinity ? 0 : minDistance`

**Complexity:**
- ⏱️ Time: O(n)
- 💾 Space: O(1)

**Kenapa Terbaik:**
- ✅ Hanya 1 loop
- ✅ Paling simple (12 baris)
- ✅ Paling cepat
- ✅ Production-ready

---

## 🌿 Versi 3: Two-Pass (Alternative)

### **Code:**
```javascript
const findClosestDistance = (chars) => {
  const length = chars.length

  // Validation
  let hasX = false
  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') {
      hasX = true
      break
    }
  }
  if (!hasX) return 0
  
  let minDistance = length
  let lastXPos = -1
  
  // Pass 1: Left to Right
  for (let i = 0; i < length; i++) {
    if (chars[i] === 'x') lastXPos = i
    if (chars[i] === 'o' && lastXPos !== -1) {
      const distance = i - lastXPos
      if (distance < minDistance) minDistance = distance
    }
  }
  
  // Pass 2: Right to Left
  lastXPos = -1
  for (let i = length - 1; i >= 0; i--) {
    if (chars[i] === 'x') lastXPos = i
    if (chars[i] === 'o' && lastXPos !== -1) {
      const distance = lastXPos - i
      if (distance < minDistance) minDistance = distance
    }
  }
  
  return minDistance
}
```

### 🧠 **Ringkasan Singkat:**

**Konsep:** Scan 2 kali (kiri→kanan, kanan→kiri) untuk handle x di kiri & kanan o.

**Steps:**
1. Validasi: cek ada 'x', jika tidak return 0
2. Pass 1 (→): Track x di kiri o
3. Pass 2 (←): Track x di kanan o
4. Return minimum dari keduanya

**Complexity:**
- ⏱️ Time: O(n)
- 💾 Space: O(1)

**Kapan Pakai:**
- 🎓 Learning optimasi
- 🎤 Interview (explain progression)

---

## 📝 Common Pitfalls

### ❌ **Pitfall 1: Lupa Handle No 'x'**
```javascript
// ❌ BAD
const findClosestDistance = (chars) => {
  for (let i = 0; i < chars.length; i++) {
    // langsung loop tanpa cek
  }
}

// ✅ GOOD
if (minDistance === Infinity) return 0
// atau
if (!hasX) return 0
```

---

### ❌ **Pitfall 2: Nested Loop O(n×m)**
```javascript
// ❌ BAD - Lambat!
for (const x of xPositions) {
  for (const o of oPositions) {
    // 50x50 = 2,500 iterasi
  }
}

// ✅ GOOD - Cepat!
for (let i = 0; i < chars.length; i++) {
  // Track both, 1 loop
}
```

---

### ❌ **Pitfall 3: Simpan Semua Jarak**
```javascript
// ❌ BAD - Memory waste
const diff = []
diff.push(distance)
return Math.min(...diff)

// ✅ GOOD - Track minimum
if (distance < minDistance) minDistance = distance
```

---

### ❌ **Pitfall 4: Lupa `Math.abs()`**
```javascript
// ❌ BAD - Bisa negatif
const distance = lastO - lastX

// ✅ GOOD - Selalu positif
const distance = Math.abs(lastO - lastX)
```

---

### ❌ **Pitfall 5: Two-Pass Lupa Reset**
```javascript
// ❌ BAD
// Pass 1
for (...) { lastXPos = ... }

// Pass 2
for (...) { 
  // Masih pakai lastXPos dari Pass 1!
}

// ✅ GOOD
lastXPos = -1  // RESET sebelum Pass 2
for (...) { ... }
```

---

## 💡 Quick Tips

### **1. Untuk Interview:**
```
Start Simple → Show Optimization

1. Implement Versi 2 (nested loop) - benar & cepat
2. Say: "Ini O(n×m), bisa dioptimasi ke O(n)"
3. Implement Versi 4 (single-pass)
4. Explain: "Track both states dalam 1 loop"
```

---

### **2. Untuk Debugging:**
```javascript
// Add console.log untuk tracking
for (let i = 0; i < chars.length; i++) {
  if (chars[i] === 'o') {
    lastO = i
    console.log(`Found 'o' at ${i}`)
  }
  if (chars[i] === 'x') {
    lastX = i
    console.log(`Found 'x' at ${i}`)
  }
  if (lastO !== null && lastX !== null) {
    console.log(`Distance: ${Math.abs(lastO - lastX)}`)
  }
}
```

---

### **3. Untuk Testing:**
```javascript
// Quick test
const test = (input, expected) => {
  const result = findClosestDistance(input)
  console.log(`${result === expected ? '✅' : '❌'} ${result}`)
}

test(['x', 'o'], 1)
test(['o', 'x'], 1)
test(['o', ' '], 0)
```

---

## 🧠 Mental Model

### **Single-Pass Visualization:**
```
Bayangkan 2 pointer yang bergerak:
- lastO: pointer ke 'o' terakhir
- lastX: pointer ke 'x' terakhir

Setiap kali salah satu update:
→ Jarak antara keduanya = jarak terkecil sejauh ini!
→ Update minimum jika lebih kecil

Tidak perlu scan ulang karena sudah track keduanya!
```

---

### **Kapan Update Minimum:**
```
Only update when BOTH exist:

lastO = null, lastX = null → skip
lastO = 2, lastX = null → skip (no x yet)
lastO = null, lastX = 0 → skip (no o yet)
lastO = 2, lastX = 0 → ✅ calculate! (both exist)
```

---

## 🎯 Decision Tree
```
Need to find closest distance?
    ↓
Learning/Teaching?
    ├─ YES → Use Versi 2 (nested loop)
    │         Clear & familiar
    │
    └─ NO → Production code?
           ├─ YES → Use Versi 4 (single-pass) 🏆
           │         Optimal performance
           │
           └─ NO → Interview?
                  └─ Show progression:
                     V2 → explain O(n×m)
                     V4 → optimize to O(n)
```

---

## 📊 Quick Comparison

| Versi | Loops | Time | Space | Best For |
|-------|-------|------|-------|----------|
| V2 | Nested | O(n×m) | O(n+m) | Learning |
| V3 | 3 | O(n) | O(1) | Learning optimasi |
| V4 | 1 | O(n) | O(1) | **Production** 🏆 |
| V5 | 1 | O(n) | O(1) | FP style |

---

## ⚡ Performance Cheat Sheet
```
Array size: 1000
Elements: 500 'x', 500 'o'

V2 (Nested):  500 × 500 = 250,000 ops 🐌
V3 (Two-Pass): 3 × 1000 = 3,000 ops   ⚡
V4 (Single):   1 × 1000 = 1,000 ops   🚀

Speedup: 250x faster than nested!
```

---

## 🎓 Interview Script

**Jika ditanya optimasi:**
```
"Dari nested loop O(n×m), bisa dioptimasi ke O(n):

Cara 1 (Two-Pass):
- Pass 1: scan kiri→kanan untuk x di kiri
- Pass 2: scan kanan→kiri untuk x di kanan
- Gabungan keduanya = jarak minimum

Cara 2 (Single-Pass): [RECOMMENDED]
- Track lastO & lastX dalam 1 loop
- Setiap update, langsung hitung jarak
- Tidak perlu multiple passes

Saya recommend Single-Pass karena:
- Lebih cepat (1 loop vs 3 loops)
- Lebih simple (12 baris vs 30 baris)
- Same complexity O(n) tapi 3x faster in practice"
```

---

## ✅ Final Checklist

Sebelum submit/interview, pastikan:

- ✅ Handle edge case (no 'x')
- ✅ Pakai `Math.abs()` untuk jarak
- ✅ Track minimum, bukan simpan semua
- ✅ Return 0 jika tidak ada 'x'
- ✅ Test dengan multiple cases

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📊 [← Kembali ke Part 5: Perbandingan](05-Perbandingan-dan-Kesimpulan.md)**

---

<div align="center">

## 🎉 Selamat! 🎉

**Kamu sudah menguasai targetTerdekat dari A-Z!**

**Copy cheatsheet ini untuk interview prep! 📋**

---

Made with ❤️ for learners

**Good luck! 🚀**

</div>
