```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║            🎨 PART 4: ALTERNATIF EVERY METHOD 🎨                        ║
║                                                                          ║
║              Implementasi Functional Programming dengan .every()         ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Advanced-red)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-25%20minutes-blue)
![Level](https://img.shields.io/badge/Level-🌳%20Advanced-orange)

---

## 🧭 Quick Jump

|              🎯 Overview               |         📋 Ringkasan          |      🔍 Penjelasan      |        💡 Cara Kerja        |    📊 Pros & Cons    |      💡 Takeaways       |
| :------------------------------------: | :---------------------------: | :---------------------: | :-------------------------: | :------------------: | :---------------------: |
| [Jump](#-overview-functional-approach) | [Jump](#-ringkasan-algoritma) | [Jump](#-apa-itu-every) | [Jump](#-cara-kerja-detail) | [Jump](#-pros--cons) | [Jump](#-key-takeaways) |

---

## 🎯 Tujuan Pembelajaran

Setelah membaca part ini, kamu akan:

- ✅ Memahami **array method `.every()`**
- ✅ Implementasi geometric sequence dengan functional style
- ✅ Memahami **declarative vs imperative**
- ✅ Membandingkan dengan for loop approach
- ✅ Tahu kapan pakai `.every()`

---

## 🔄 Overview: Functional Approach

### **Versi For Loop (Part 3):**

```javascript
function isGeometricSequence(numbers) {
  if (numbers.length === 0) return false;
  if (numbers.length === 1) return true;
  if (numbers[0] === 0) return false;

  const ratio = numbers[1] / numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i - 1] === 0 || numbers[i] / numbers[i - 1] !== ratio) {
      return false;
    }
  }

  return true;
}
```

**Style:** Imperative (HOW - step by step)

### **Versi `.every()` (Part 4):**

```javascript
function isGeometricSequence(numbers) {
  if (numbers.length === 0) return false;
  if (numbers.length === 1) return true;
  if (numbers[0] === 0) return false;

  const ratio = numbers[1] / numbers[0];

  return numbers.every((value, index) => {
    if (index === 0) return true;
    return numbers[index - 1] !== 0 && value / numbers[index - 1] === ratio;
  });
}
```

**Style:** Declarative (WHAT - check if all match)

---

## 📋 Ringkasan Algoritma

> **💡 Jika kamu sedang ujian dan hanya ingat konsepnya:**

### **Konsep Inti:**

```
Gunakan .every() untuk cek apakah SEMUA elemen
memenuhi kondisi: rasionya sama dengan rasio awal
```

### **Step-by-Step:**

```
1. Guard clauses (sama seperti versi for loop)

2. Hitung ratio referensi:
   ratio = numbers[1] / numbers[0]

3. Gunakan .every() dengan callback:
   - Jika index === 0 → skip (return true)
   - Check numbers[index-1] !== 0 (prevent division by zero)
   - Check value / numbers[index-1] === ratio
   - Return hasil check

4. .every() otomatis return true/false
```

### **Keywords Penting:**

- 🔧 **Array method** (`.every()`)
- 🎯 **Functional programming** style
- 📍 **Index === 0** → skip element pertama
- ✅ **Return boolean** expression langsung
- 🛑 **Auto stop** jika ada yang false
- ⏱️ **O(n)** complexity

### **Pattern Code:**

```javascript
const isGeometricSequence = (numbers) => {
  // Guard clauses
  if (numbers.length === 0) return false;
  if (numbers.length === 1) return true;
  if (numbers[0] === 0) return false;

  const ratio = numbers[1] / numbers[0];

  // Gunakan .every()
  return numbers.every((value, index) => {
    if (index === 0) return true;
    return numbers[index - 1] !== 0 && value / numbers[index - 1] === ratio;
  });
};
```

---

## 🔍 Apa itu `.every()`?

**`.every()`** adalah array method yang:

- Mengecek **SEMUA elemen** dalam array
- Menjalankan callback untuk **setiap elemen**
- Return `true` jika **SEMUA** memenuhi kondisi
- Return `false` jika **ADA SATU** yang tidak memenuhi

### **Contoh Sederhana:**

```javascript
const angka = [2, 4, 6, 8];

// Cek apakah SEMUA genap
const semuaGenap = angka.every((num) => num % 2 === 0);
console.log(semuaGenap); // true ✅

const angka2 = [2, 4, 5, 8];
const semuaGenap2 = angka2.every((num) => num % 2 === 0);
console.log(semuaGenap2); // false ❌ (5 ganjil)
```

### **Signature:**

```javascript
array.every((element, index, array) => {
  // return true/false
});
```

**Parameters callback:**

- `element` - nilai elemen saat ini
- `index` - posisi elemen (0, 1, 2, ...)
- `array` - array aslinya (optional)

---

## 💡 Cara Kerja Detail

### **Step-by-Step Execution:**

Array: `[2, 6, 18, 54]`, ratio = 3

**Iterasi 1:**

```javascript
((value = 2), (index = 0));
if (index === 0) return true; // ✅ Skip element pertama
```

**Iterasi 2:**

```javascript
value = 6, index = 1
numbers[0] !== 0 && 6 / 2 === 3
2 !== 0 && 3 === 3
true && true → true ✅
```

**Iterasi 3:**

```javascript
value = 18, index = 2
numbers[1] !== 0 && 18 / 6 === 3
6 !== 0 && 3 === 3
true && true → true ✅
```

**Iterasi 4:**

```javascript
value = 54, index = 3
numbers[2] !== 0 && 54 / 18 === 3
18 !== 0 && 3 === 3
true && true → true ✅
```

**Result:** Semua return `true` → `.every()` return `true` ✅

### **Contoh Ketika Ada yang False:**

Array: `[2, 4, 6]`, ratio = 2

**Iterasi 1:** index=0 → `true` ✅  
**Iterasi 2:** 4/2 === 2 → `true` ✅  
**Iterasi 3:** 6/4 === 2 → 1.5 === 2 → `false` ❌

`.every()` langsung **stop dan return `false`** ❌

---

## 🆚 Comparison: For Loop vs `.every()`

### **For Loop (Imperative):**

```javascript
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i - 1] === 0 || numbers[i] / numbers[i - 1] !== ratio) {
    return false; // ❌ Cari yang SALAH
  }
}
return true; // ✅ Semua benar
```

**Cara berpikir:** "Cari yang salah, kalau ketemu return false"

### **`.every()` (Declarative):**

```javascript
return numbers.every((value, index) => {
  if (index === 0) return true;
  return numbers[index - 1] !== 0 && value / numbers[index - 1] === ratio;
});
```

**Cara berpikir:** "Cek apakah semua benar"

### **Perbedaan Utama:**

| Aspek            | For Loop         | `.every()`         |
| ---------------- | ---------------- | ------------------ |
| **Style**        | Imperative (HOW) | Declarative (WHAT) |
| **Readability**  | ⭐⭐⭐⭐         | ⭐⭐⭐⭐⭐         |
| **Verbosity**    | More code        | Less code          |
| **Loop Control** | Manual           | Automatic          |
| **Early Exit**   | Manual `return`  | Auto stop          |
| **Functional**   | ❌               | ✅                 |

---

## 📊 Pros & Cons

### **✅ Kelebihan `.every()`:**

**1. Lebih Deklaratif**

```javascript
// Langsung bilang "cek apakah semua memenuhi kondisi"
return numbers.every(...)
```

**2. Lebih Ringkas**

```javascript
// Tidak perlu variable loop manual
// Tidak perlu return false manual
```

**3. Functional Style**

```javascript
// Modern JavaScript
// Cocok untuk codebase yang pakai FP
```

**4. Auto Stop**

```javascript
// Otomatis berhenti saat ada false
// Sama seperti for loop dengan return
```

### **❌ Kekurangan `.every()`:**

**1. Sedikit Lebih Lambat**

```javascript
// Ada overhead dari function call
// Tapi negligible untuk most cases
```

**2. Kurang Familiar**

```javascript
// Pemula mungkin lebih paham for loop
// Perlu understand callback concept
```

**3. Lebih Sulit Debug**

```javascript
// Tidak bisa console.log di tengah dengan mudah
// Perlu extract callback ke function terpisah
```

### **Kapan Pakai `.every()`?**

**✅ Gunakan jika:**

- Tim familiar dengan functional programming
- Codebase sudah pakai array methods
- Prefer declarative style
- Code review emphasis on modern JS

**❌ Jangan gunakan jika:**

- Tim masih belajar basics
- Performance critical (tapi rare)
- Need complex loop control
- Debugging frequently needed

---

## 🎯 Imperative vs Declarative

### **Imperative (HOW):**

```javascript
// Tell computer HOW to do it step-by-step
let allValid = true;
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] / numbers[i - 1] !== ratio) {
    allValid = false;
    break;
  }
}
return allValid;
```

**Fokus:** Prosedur, langkah-langkah

### **Declarative (WHAT):**

```javascript
// Tell computer WHAT you want
return numbers.every((v, i) => i === 0 || v / numbers[i - 1] === ratio);
```

**Fokus:** Hasil akhir, bukan prosesnya

### **Analogi:**

**Imperative:**

> "Belok kanan, jalan lurus 500m, belok kiri, parkir"

**Declarative:**

> "Pergi ke Mall X"

---

## 🧪 Testing

**Kedua versi produce hasil yang sama:**

```javascript
// For Loop Version
console.log(isGeometricSequence([2, 6, 18, 54])); // true ✅

// .every() Version
console.log(isGeometricSequence([2, 6, 18, 54])); // true ✅

// Sama untuk semua test cases!
```

---

## ✅ Key Takeaways

**Tentang `.every()`:**

> **💡 Declarative Style**  
> `.every()` fokus ke WHAT (cek semua), bukan HOW (loop manual).

> **💡 Auto Stop**  
> Otomatis berhenti saat ada elemen yang false.

> **💡 Functional Programming**  
> Modern JavaScript style, cocok untuk FP enthusiast.

> **💡 Readability**  
> Lebih readable untuk developer yang familiar dengan array methods.

**Tentang Pilihan:**

> **💡 Context Matters**  
> For loop atau `.every()` tergantung tim dan project style.

> **💡 Both are Valid**  
> Tidak ada yang "lebih benar" - pilih sesuai situasi.

> **💡 Know Trade-offs**  
> Understand kelebihan dan kekurangan masing-masing.

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **📝 [← Kembali ke Part 3: Refactoring Clean Code](03-Refactoring-Clean-Code.md)**
- **⚡ [Lanjut ke Part 5: Alternatif Descriptive Variables →](05-Alternatif-Descriptive-Variables.md)**

---

<div align="center">

**Siap explore versi dengan descriptive variables di Part 5?**

Made with ❤️ for learners

</div>
