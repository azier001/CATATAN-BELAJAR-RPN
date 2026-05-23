# 📋 Part 3: Ringkasan Algoritma

```
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║              📋 PART 3: RINGKASAN ALGORITMA 📋                          ║
║                                                                          ║
║              3 Versi Lengkap: For Loop, find(), findIndex()             ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)
![Estimated Time](https://img.shields.io/badge/Estimated%20Time-20%20minutes-blue)

---

## 🎯 Tujuan

- ✅ Ringkasan algoritma 3 versi
- ✅ Memahami trade-offs masing-masing
- ✅ Pilih versi sesuai kebutuhan

---

## 🔄 Versi 1: For Loop Manual

> 💡 **Best for:** Pemula, clarity, debugging, ujian

### **Code:**
```javascript
function groupAnimals(animals) {
  const result = []

  for (const animal of animals) {
    const firstLetter = animal[0]
    let foundGroup = null

    for (const group of result) {
      const groupFirstLetter = group[0][0]

      if (groupFirstLetter === firstLetter) {
        foundGroup = group
        break
      }
    }

    if (foundGroup !== null) {
      foundGroup.push(animal)
    } else {
      result.push([animal])
    }
  }
  
  result.sort((groupA, groupB) => {
    const letterA = groupA[0][0]
    const letterB = groupB[0][0]

    return letterA.localeCompare(letterB)
  })

  return result
}
```

### **Konsep Inti:**
```
Loop semua animals → ambil huruf pertama
Cari grup yang huruf awalnya sama di dalam result (manual nested loop)
Kalau ketemu → simpan referensi grup lalu push animal ke grup itu
Kalau tidak ketemu → buat grup baru [animal]
Setelah semua selesai → sort grup berdasarkan huruf pertama
Return result
```

### **Step-by-Step (Detail):**
1. Buat array kosong `result` untuk menampung grup-grup
2. Loop setiap `animal` dari `animals` menggunakan `for...of`
3. Ambil huruf pertama dari animal:
   - `firstLetter = animal[0]`
4. Buat variabel `foundGroup = null` untuk menandai apakah grup sudah ada
5. Loop semua `group` yang sudah ada di `result` (nested loop):
   - Ambil huruf pertama grup tersebut:
     - `groupFirstLetter = group[0][0]`
   - Bandingkan `groupFirstLetter` dengan `firstLetter`
   - Jika sama:
     - set `foundGroup = group`
     - hentikan pencarian dengan `break`
6. Setelah pencarian selesai:
   - Jika `foundGroup !== null` → tambahkan `animal` ke grup tersebut (`foundGroup.push(animal)`)
   - Jika tidak ditemukan → buat grup baru `[animal]` lalu `push()` ke `result`
7. Setelah outer loop selesai, urutkan semua grup:
   - ambil `letterA = groupA[0][0]`
   - ambil `letterB = groupB[0][0]`
   - bandingkan dengan `letterA.localeCompare(letterB)`
8. Return `result`

### **Keywords:**
- 🔄 **for...of** (outer loop)
- 🔍 **nested loop** (manual search group)
- 🧠 **foundGroup** (flag + reference ke grup yang cocok)
- 🛑 **break** (early exit biar tidak scan semua grup)
- 📦 **push()** (masukkan animal ke grup)
- 🔤 **sort() + localeCompare()**
- ⏱️ **O(n×k)** - k = jumlah grup

### **Kapan Pakai:**
- ✅ Pemula yang belajar
- ✅ Easy debugging (console.log di mana saja)
- ✅ Explicit logic (step-by-step jelas)
- ✅ Ujian/interview coding

### **Pitfalls (Jebakan Umum):**

**1) ❌ Salah ambil huruf pertama grup**
```javascript
// ❌ SALAH - group itu array, bukan string
const groupFirstLetter = group[0]

// ✅ BENAR - ambil element pertama grup, lalu huruf pertamanya
const groupFirstLetter = group[0][0]
```

**2) ❌ Lupa reset `foundGroup` tiap iterasi**
```javascript
// ❌ SALAH - foundGroup di luar loop
let foundGroup = null
for (const animal of animals) {
  // foundGroup tidak di-reset!
}

// ✅ BENAR - foundGroup di dalam loop
for (const animal of animals) {
  let foundGroup = null  // Reset setiap iterasi
}
```

**3) ❌ Lupa `break` setelah ketemu**
```javascript
// ❌ SALAH - loop terus walaupun sudah ketemu
if (groupFirstLetter === firstLetter) {
  foundGroup = group
  // Missing break!
}

// ✅ BENAR - break untuk efficiency
if (groupFirstLetter === firstLetter) {
  foundGroup = group
  break  // Stop searching
}
```

**4) ❌ Lupa sort grup di akhir**
```javascript
// ❌ SALAH - Grup tidak terurut alphabetically
return result

// ✅ BENAR - Sort dulu
result.sort((a, b) => a[0][0].localeCompare(b[0][0]))
return result
```

**5) ❌ Tidak handle string kosong**
```javascript
// ❌ SALAH - animal kosong akan error
const firstLetter = animal[0]  // undefined jika animal = ""

// ✅ BENAR - validasi dulu
if (!animal || animal.length === 0) continue
const firstLetter = animal[0]
```

### **💡 Insight Penting:**

> **`foundGroup` itu reference, bukan copy!**  
> Ketika `foundGroup.push(animal)`, yang berubah adalah langsung isi `result`.

---

## 🔍 Versi 2: Array.find()

> 💡 **Best for:** Modern codebase, clean code, production

### **Code:**
```javascript
function groupAnimals(animals) {
  const result = []

  for (const animal of animals) {
    const foundGroup = result.find(group => group[0][0] === animal[0])
    
    if (foundGroup) {
      foundGroup.push(animal)
    } else {
      result.push([animal])
    }
  }
  
  result.sort((a, b) => a[0][0].localeCompare(b[0][0]))

  return result
}
```

### **Konsep Inti:**
```
Loop animals → gunakan .find() untuk cari grup
Langsung dapat reference grup (bukan index)
Push atau buat baru → sort di akhir
```

### **Step-by-Step (Detail):**
1. Buat array kosong `result`
2. Loop setiap `animal` dari `animals`
3. **Gunakan .find()** untuk cari grup:
   - Callback: `group => group[0][0] === animal[0]`
   - Return: reference grup (atau `undefined` jika tidak ketemu)
4. Simpan hasil di `foundGroup`
5. Cek `foundGroup`:
   - Jika **truthy** (grup ditemukan) → `foundGroup.push(animal)`
   - Jika **falsy** (tidak ketemu) → `result.push([animal])`
6. Setelah loop selesai:
   - Sort `result` berdasarkan `group[0][0]` dengan `localeCompare()`
7. Return `result`

### **Keywords:**
- 🔍 **Array.find()** - Built-in method untuk search
- 🎯 **Arrow function** - Concise callback
- 📦 **Reference** - Langsung dapat object (bukan index)
- ✅ **Truthy check** - `if (foundGroup)` bukan `!== null`
- ⏱️ **O(n×k)** - Same complexity

### **Kapan Pakai:**
- ✅ Modern JavaScript codebase
- ✅ Team familiar dengan array methods
- ✅ Prefer functional style
- ✅ Production code (clean & readable)

### **Pitfalls (Jebakan Umum):**

**1) ❌ Typo di arrow function**
```javascript
// ❌ SALAH - Lupa arrow atau return
result.find(group => { group[0][0] === animal[0] })

// ✅ BENAR - Implicit return (tanpa curly braces)
result.find(group => group[0][0] === animal[0])

// ✅ JUGA BENAR - Explicit return
result.find(group => {
  return group[0][0] === animal[0]
})
```

**2) ❌ Salah akses group[0][0]**
```javascript
// ❌ SALAH - Cuma ambil element pertama
result.find(group => group[0] === animal[0])

// ✅ BENAR - Ambil huruf pertama dari element pertama
result.find(group => group[0][0] === animal[0])
```

**3) ❌ Lupa sort di akhir**
```javascript
// ❌ SALAH
return result

// ✅ BENAR
result.sort((a, b) => a[0][0].localeCompare(b[0][0]))
return result
```

### **💡 Insight Penting:**

> **find() vs filter():**  
> `.find()` return **1 element** (atau undefined)  
> `.filter()` return **array** (bisa kosong)
> 
> Untuk kasus ini, `.find()` lebih tepat!

---

## 🔢 Versi 3: Array.findIndex()

> 💡 **Best for:** When you need index (jarang untuk kasus ini)

### **Code:**
```javascript
function groupAnimals(animals) {
  const result = []

  for (const animal of animals) {
    const firstLetter = animal[0]

    const groupIndex = result.findIndex((group) => group[0][0] === firstLetter)

    if (groupIndex !== -1) {
      result[groupIndex].push(animal)
    } else {
      result.push([animal])
    }
  }

  result.sort((groupA, groupB) => groupA[0][0].localeCompare(groupB[0][0]))

  return result
}
```

### **Konsep Inti:**
```
Loop animals → gunakan .findIndex() untuk cari index grup
Akses via index untuk push → buat baru jika -1
Sort di akhir
```

### **Step-by-Step (Detail):**
1. Buat array kosong `result`
2. Loop setiap `animal` dari `animals`
3. Ambil `firstLetter = animal[0]`
4. **Gunakan .findIndex()** untuk cari index:
   - Callback: `group => group[0][0] === firstLetter`
   - Return: **index number** (atau `-1` jika tidak ketemu)
5. Simpan hasil di `groupIndex`
6. Cek `groupIndex`:
   - Jika **!== -1** (grup ditemukan):
     - Akses grup via index: `result[groupIndex]`
     - Push animal: `result[groupIndex].push(animal)`
   - Jika **=== -1** (tidak ketemu):
     - Buat grup baru: `result.push([animal])`
7. Setelah loop selesai:
   - Sort `result` berdasarkan `group[0][0]`
8. Return `result`

### **Keywords:**
- 🔢 **Array.findIndex()** - Returns index number
- 🎯 **Index check** - Harus cek `!== -1`
- 📦 **Array access** - `result[index]` untuk akses
- ⏱️ **O(n×k)** - Same complexity

### **Kapan Pakai:**
- ✅ Ketika benar-benar butuh **index** untuk operasi lain
- ⚠️ Untuk kasus ini: `.find()` lebih natural!

### **Pitfalls (Jebakan Umum):**

**1) ❌ Lupa cek index !== -1**
```javascript
// ❌ SALAH - Akses result[-1] jika tidak ketemu!
const groupIndex = result.findIndex(...)
result[groupIndex].push(animal)  // ERROR!

// ✅ BENAR - Cek dulu
if (groupIndex !== -1) {
  result[groupIndex].push(animal)
} else {
  result.push([animal])
}
```

**2) ❌ Pakai findIndex() padahal tidak butuh index**
```javascript
// ⚠️ KURANG OPTIMAL - findIndex() lalu akses via index
const idx = result.findIndex(g => g[0][0] === animal[0])
if (idx !== -1) result[idx].push(animal)

// ✅ LEBIH BAIK - find() langsung dapat reference
const group = result.find(g => g[0][0] === animal[0])
if (group) group.push(animal)
```

**3) ❌ Typo di callback arrow function**
```javascript
// ❌ SALAH - Lupa return di curly braces
result.findIndex((group) => { group[0][0] === firstLetter })

// ✅ BENAR - Implicit return
result.findIndex((group) => group[0][0] === firstLetter)
```

### **💡 Insight Penting:**

> **findIndex() vs find():**  
> `.findIndex()` → return **index number** (-1 jika tidak ketemu)  
> `.find()` → return **element reference** (undefined jika tidak ketemu)
> 
> **Untuk grouping seperti ini:**  
> `.find()` lebih natural karena kita butuh **reference**, bukan index!

---

## 📊 Perbandingan Lengkap

| Aspek | For Loop | find() | findIndex() |
|-------|----------|--------|-------------|
| **Lines** | 27 | 15 | 18 |
| **Complexity** | O(n×k) | O(n×k) | O(n×k) |
| **Readability** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Learning Curve** | Easy | Medium | Medium |
| **Debugging** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Modern** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Best For** | Pemula | Production | Specific cases |

### **find() vs findIndex():**

| Aspek | find() | findIndex() |
|-------|--------|-------------|
| **Returns** | Element reference | Index number |
| **Access** | `foundGroup.push()` | `result[index].push()` |
| **Check** | `if (foundGroup)` | `if (index !== -1)` |
| **Natural untuk kasus ini** | ✅ Yes | ⚠️ No |

**Kesimpulan:** `.find()` > `.findIndex()` untuk kasus ini!

---

## 🎯 Decision Tree
```
Apakah kamu pemula?
├─ YES → For Loop Manual
└─ NO → Lanjut

Apakah tim pakai modern JS?
├─ YES → Array.find()
└─ NO → For Loop Manual

Apakah butuh index untuk operasi lain?
├─ YES → Array.findIndex()
└─ NO → Array.find()
```

---

## 💡 Mnemonic: "G-F-P-S"

Untuk mengingat struktur algoritma:
```
G = Get first letter (ambil huruf pertama)
F = Find existing group (cari grup yang ada)
P = Push to group or create new (push atau buat baru)
S = Sort groups alphabetically (sort grup)
```

---

## 🧪 Test Semua Versi
```javascript
// Test helper
const test = (fn, input, expected) => {
  const result = JSON.stringify(fn(input))
  const exp = JSON.stringify(expected)
  console.log(result === exp ? '✅' : '❌', result)
}

// Test cases
const testCases = [
  [
    ['cacing', 'ayam', 'kuda', 'anoa', 'kancil'],
    [['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']]
  ],
  [
    ['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak'],
    [['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta']]
  ],
  [
    [],
    []
  ],
  [
    ['zebra'],
    [['zebra']]
  ]
]

// Test semua versi
console.log('For Loop:')
testCases.forEach(([input, expected]) => test(groupAnimalsForLoop, input, expected))

console.log('\nArray.find():')
testCases.forEach(([input, expected]) => test(groupAnimalsFind, input, expected))

console.log('\nArray.findIndex():')
testCases.forEach(([input, expected]) => test(groupAnimalsFindIndex, input, expected))
```

---

## 🎓 Pseudocode (Ujian)

Jika hanya ingat konsep:
```
FUNCTION groupAnimals(animals):
  
  // Buat container
  CREATE result = []
  
  // Loop setiap animal
  FOR EACH animal IN animals:
    GET firstLetter = animal[0]
    
    // Cari grup yang sudah ada
    FIND group WHERE group[0][0] = firstLetter
    
    IF group found:
      ADD animal TO group
    ELSE:
      CREATE new group = [animal]
      ADD new group TO result
    END IF
  END FOR
  
  // Sort grup alphabetically
  SORT result BY group[0][0]
  
  RETURN result
  
END FUNCTION
```

---

## 🔑 Key Takeaways

> **💡 Tidak Ada "Best" Solution**  
> Semua 3 versi valid - pilih sesuai konteks

> **💡 For Loop = Safest Choice**  
> Paling universal, easy to debug

> **💡 find() = Most Natural**  
> Untuk kasus ini, find() > findIndex()

> **💡 findIndex() = Specific Use**  
> Hanya pakai jika benar-benar butuh index

> **💡 JANGAN Sort di Awal**  
> Loop input original, sort grup di akhir!

> **💡 Performance Sama**  
> Semua O(n×k), pilih berdasarkan readability

---

## 🔗 Navigation

- **📚 [← Kembali ke README](../README.md)**
- **🔧 [← Kembali ke Part 2: Refactoring Step-by-Step](02-Refactoring-Step-by-Step.md)**
- **📝 [Lanjut ke Part 4: Naming Convention →](04-Naming-Convention.md)**

---

<div align="center">

**Selesai! Part 4 untuk naming best practices**

Made with ❤️ for learners

</div>
