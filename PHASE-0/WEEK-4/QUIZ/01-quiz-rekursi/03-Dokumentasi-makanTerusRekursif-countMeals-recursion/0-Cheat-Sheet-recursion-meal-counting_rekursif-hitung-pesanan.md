# 🔄 Cheat Sheet — Recursive Meal Counting / Rekursif Hitung Pesanan AYCE

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Matematika Murni (Math.ceil) ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const makanTerusMath = (waktu) => 
  waktu <= 0 ? 0 : Math.ceil(waktu / 15);
```

> 🔑 **O(1) complexity**, sangat cepat, stack-safe. Ideal untuk production code. Gunakan ini jika requirement tidak memaksa rekursif.

### 2. Matematika Murni dengan Validasi (Production Grade)

```javascript
const makanTerus = (waktu) => {
  if (typeof waktu !== 'number' || isNaN(waktu)) {
    throw new TypeError('Parameter waktu harus berupa number');
  }
  
  return waktu <= 0 ? 0 : Math.ceil(waktu / 15);
};
```

> 🔑 Versi production dengan input validation. Mencegah bug dari invalid input.

### 3. Iteratif (While Loop) - Stack Safe

```javascript
const makanTerusIteratif = (waktu) => {
  let count = 0;
  
  while (waktu > 0) {
    count++;
    waktu -= 15;
  }
  
  return count;
};
```

> 🔑 **O(1) space complexity**, stack-safe, reliable. Gunakan ini jika harus loop tapi tidak boleh rekursif.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 1. Rekursif Langsung (If-Return Standard) ⭐ `PALING INTUITIF`

```javascript
function makanTerusRekursif(waktu) {
  if (waktu <= 0) return 0;
  return 1 + makanTerusRekursif(waktu - 15);
}
```

> 🔑 Paling mudah dipahami untuk belajar konsep rekursif. Base case jelas, recursive case eksplisit. Mulai dari sini!

### 2. Rekursif Langsung (Arrow Function)

```javascript
const makanTerusRekursif = (waktu) => {
  if (waktu <= 0) {
    return 0;
  }
  return 1 + makanTerusRekursif(waktu - 15);
};
```

> 🔑 Sama dengan V1, tapi menggunakan arrow function modern. Bagus untuk codebase ES6+.

### 3. Rekursif Ternary One-Liner

```javascript
const makanTerusRekursif = (waktu) => 
  waktu <= 0 ? 0 : 1 + makanTerusRekursif(waktu - 15);
```

> 🔑 Versi compact dengan ternary operator. Cocok untuk functional programming style atau code golf.

### 4. Rekursif Variable Update

```javascript
function makanTerusRekursif(waktu) {
  if (waktu <= 0) return 0;
  waktu -= 15;
  return 1 + makanTerusRekursif(waktu);
}
```

> 🔑 Update variabel sebelum rekursif dipanggil. Lebih eksplisit untuk debugging, tapi tetap ada unwinding.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 1. Tail Recursion dengan Default Parameter

```javascript
const makanTerusRekursif = (waktu, count = 0) => {
  if (waktu <= 0) return count;
  return makanTerusRekursif(waktu - 15, count + 1);
};
```

> 🔑 Menggunakan accumulator parameter. Tidak ada unwinding, tapi **TCO tidak didukung di most JS engines (2026)**.

⚠️ **WARNING:** Meskipun ini tail recursion, Node.js dan kebanyakan browser **TIDAK** optimize ini. Tetap bisa stack overflow untuk input besar.

### 2. Tail Recursion dengan Helper Function (TCO Pattern)

```javascript
function makanTerusRekursif(waktu) {
  function helper(sisaWaktu, count) {
    if (sisaWaktu <= 0) return count;
    return helper(sisaWaktu - 15, count + 1);
  }
  return helper(waktu, 0);
}
```

> 🔑 Menggunakan helper function untuk menyembunyikan accumulator. Lebih aman dari V1 (parameter tidak terekspos), tapi tetap tidak di-optimize di most environments.

⚠️ **WARNING:** TCO hanya bekerja di Safari (strict mode). Chrome, Firefox, dan Node.js **TIDAK** mendukung.

### 3. Tail Recursion dengan Arrow Function

```javascript
const makanTerusRekursif = (waktu, pesanan = 0) => {
  if (waktu <= 0) {
    return pesanan;
  }
  return makanTerusRekursif(waktu - 15, pesanan + 1);
};
```

> 🔑 Versi arrow function dari tail recursion. Sama dengan versi 1, tapi dengan syntax modern.

---

## ⚠️ GOTCHA CEPAT

### Stack Overflow Risk - Rekursif vs Iteratif

```javascript
// ❌ RISK: Stack overflow untuk input besar (> 10,000)
const rekursif = (waktu) => {
  if (waktu <= 0) return 0;
  return 1 + rekursif(waktu - 15);
};

// ✅ SAFE: Tidak akan stack overflow
const iteratif = (waktu) => {
  let count = 0;
  while (waktu > 0) {
    count++;
    waktu -= 15;
  }
  return count;
};
```

### TCO Reality Check

```javascript
// ⚠️ TEORITIS: "Tail recursion" tapi TIDAK di-optimize!
const tailRecursion = (waktu, count = 0) => {
  if (waktu <= 0) return count;
  return tailRecursion(waktu - 15, count + 1);  // Tetap bisa stack overflow!
};

// ✅ PRAKTIS: Gunakan Math.ceil() untuk performa maksimal
const mathSolution = (waktu) => 
  waktu <= 0 ? 0 : Math.ceil(waktu / 15);  // O(1), instant!
```

### Math.ceil vs Math.floor vs Math.round

```javascript
// Contoh: waktu = 50 menit (3 pesanan penuh + 5 menit sisa)
const waktu = 50;

Math.floor(waktu / 15);  // 3 ❌ (salah! sisa 5 menit diabaikan)
Math.round(waktu / 15);  // 3 ❌ (salah! pembulatan tidak tepat)
Math.ceil(waktu / 15);   // 4 ✅ (benar! sisa 5 menit tetap dihitung)

// Penjelasan: Sisa waktu (5 menit) masih bisa memesan 1 porsi,
// jadi harus selalu bulatkan KE ATAS (ceiling)
```

---

## 📊 QUICK COMPARISON

| Versi | Baris | Time | Space | Stack Safe | Production | Rekomendasi |
|-------|-------|------|-------|------------|------------|-------------|
| **V1: Rekursif If-Return** | 3 | O(n) | O(n) | ❌ | ❌ | 🎓 Learning |
| **V2: Rekursif Ternary** | 1 | O(n) | O(n) | ❌ | ❌ | 🎓 Code Golf |
| **V3: Tail Recursion** | 6 | O(n) | O(n)* | ❌* | ❌ | 🎓 Advanced Learning |
| **V4: Iteratif Loop** | 7 | O(n) | O(1) | ✅ | ✅ | 🏭 Production (loop) |
| **V5: Math.ceil** | 1 | O(1) | O(1) | ✅ | ✅ | 🏆 **BEST** |

**Catatan:**
- *V3 secara teoritis O(1) space jika TCO didukung, tapi JavaScript engines modern (2026) tidak mengoptimasi ini
- Stack Safe: Tidak akan crash untuk input besar (> 10,000)

---

## 🧪 TEST CASES

```javascript
// Copy-paste test cases ini untuk pengujian cepat

// Test dengan V1 (Rekursif If-Return)
function makanTerusRekursif(waktu) {
  if (waktu <= 0) return 0;
  return 1 + makanTerusRekursif(waktu - 15);
}

console.log(makanTerusRekursif(66));   // Output: 5
console.log(makanTerusRekursif(0));    // Output: 0
console.log(makanTerusRekursif(10));   // Output: 1
console.log(makanTerusRekursif(45));   // Output: 3
console.log(makanTerusRekursif(50));   // Output: 4
console.log(makanTerusRekursif(15));   // Output: 1
console.log(makanTerusRekursif(14));   // Output: 1
console.log(makanTerusRekursif(100));  // Output: 7

// Test dengan V5 (Math.ceil) - Production
const makanTerusMath = (waktu) => 
  waktu <= 0 ? 0 : Math.ceil(waktu / 15);

console.log(makanTerusMath(66));   // Output: 5
console.log(makanTerusMath(0));    // Output: 0
console.log(makanTerusMath(10));   // Output: 1
console.log(makanTerusMath(45));   // Output: 3
console.log(makanTerusMath(50));   // Output: 4
console.log(makanTerusMath(15));   // Output: 1
console.log(makanTerusMath(14));   // Output: 1
console.log(makanTerusMath(100));  // Output: 7

// Edge Cases
console.log(makanTerusMath(-5));    // Output: 0 (negatif treated as 0)
console.log(makanTerusMath(1));     // Output: 1 (minimal 1 menit = 1 pesanan)
console.log(makanTerusMath(1000));  // Output: 67 (instant, no stack overflow!)
```

---

## 🎯 QUICK DECISION TREE

```
📌 Gunakan ini untuk memilih versi yang tepat:

┌─ Untuk PRODUCTION? ────────────────────────────────────┐
│  ├─ Boleh non-rekursif? ──→ ✅ Math.ceil (V5)         │
│  └─ Harus loop? ──────────→ ✅ Iteratif (V4)          │
└────────────────────────────────────────────────────────┘

┌─ Untuk LEARNING / CHALLENGE? ──────────────────────────┐
│  ├─ Baru belajar rekursif? ──→ ✅ V1 (If-Return)      │
│  ├─ Sudah paham? ─────────────→ ✅ V2 (Ternary)       │
│  └─ Mau belajar advanced? ────→ ✅ V3 (Tail Recursion) │
└────────────────────────────────────────────────────────┘

┌─ Untuk INTERVIEW? ─────────────────────────────────────┐
│  └─ Tulis V1, lalu jelaskan optimasi V5 ──→ ✅        │
└────────────────────────────────────────────────────────┘
```

---

## 📚 KEY TAKEAWAYS

1. **Rekursif = Tool untuk belajar**, bukan untuk production
2. **Math.ceil() = Paling efisien** untuk problem ini (O(1))
3. **TCO tidak reliable** di JavaScript (2026) - jangan andalkan
4. **Iteratif > Rekursif** untuk production jika tidak ada formula matematika
5. **Stack overflow risk** selalu ada di rekursif untuk input besar

---

📅 **Terakhir diupdate:** 7 Juni 2026
