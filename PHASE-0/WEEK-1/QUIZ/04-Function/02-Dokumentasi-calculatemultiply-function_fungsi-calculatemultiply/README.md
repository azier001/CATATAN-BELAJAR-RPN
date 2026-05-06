# ✖️ Fungsi `calculateMultiply()` — Perkalian Dua Angka

> 📝 Belajar membuat fungsi yang menerima dua parameter dan **mengembalikan** hasil perkalian menggunakan `return`

---

## 📋 Soal

Buatlah sebuah fungsi bernama `calculateMultiply()`, yang mengembalikan nilai berupa **hasil kali** dari dua parameter yang dikirim.

```javascript
let num1 = 1
let num2 = 2

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);
```

---

## 💻 Kode Solusi

```javascript
const calculateMultiply = (num1, num2) => {
  return num1 * num2;
};

let num1 = 1;
let num2 = 2;

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian); // Output: 2
```

---

## 🔍 Penjelasan

### 1. Deklarasi Fungsi (Arrow Function)

```javascript
const calculateMultiply = (num1, num2) => {
  return num1 * num2;
};
```

Fungsi ini ditulis menggunakan **Arrow Function** (gaya ES6 modern). Tiga komponen utamanya:

| Komponen | Kode | Peran |
|----------|------|-------|
| **Nama fungsi** | `const calculateMultiply` | Identitas fungsi, disimpan dalam variabel `const` |
| **Parameter** | `(num1, num2)` | "Lubang input" — penampung data yang dikirim dari luar |
| **Return** | `return num1 * num2` | "Pintu keluar" — melempar hasil proses ke dunia luar |

### 2. Pemanggilan Fungsi

```javascript
let hasilPerkalian = calculateMultiply(num1, num2);
```

- `num1` dan `num2` yang dikirim saat pemanggilan disebut **argumen** (nilai asli).
- `num1` dan `num2` di dalam deklarasi fungsi disebut **parameter** (penampung).

### 3. Alur Eksekusi

```
[Panggilan]  calculateMultiply(1, 2)
                     │
                     ▼
[Parameter]  num1 = 1, num2 = 2
                     │
                     ▼
[Proses]     1 * 2 = 2
                     │
                     ▼
[Return]     ← 2 keluar dari fungsi
                     │
                     ▼
[Hasil]      hasilPerkalian = 2
```

---

## 🧪 Contoh Output

```
Input:  num1 = 1, num2 = 2
Output: 2
```

```
Input:  num1 = 5, num2 = 7
Output: 35
```

```
Input:  num1 = -3, num2 = 4
Output: -12
```

---

## 📚 Konsep yang Dipelajari

- ✅ **Parameter vs Argumen** — Parameter adalah penampung saat fungsi *dibuat*, argumen adalah nilai asli saat fungsi *dipanggil*
- ✅ **Keyword `return`** — Wajib digunakan agar fungsi mengembalikan nilai ke luar, tanpa `return` hasilnya `undefined`
- ✅ **`return` vs `console.log()`** — `return` adalah pintu keluar data, `console.log()` hanya layar monitor untuk menampilkan
- ✅ **Arrow Function Syntax** — Gaya penulisan fungsi modern ES6 dengan simbol `=>`

---

## 💡 Catatan Tambahan

### Implicit Return (Arrow Function Magic) ✨

Karena fungsi ini hanya punya **satu baris** proses, kita bisa membuang kurung kurawal `{}` dan kata `return`. Ini disebut **Implicit Return**:

```javascript
// Explicit return (versi lengkap)
const calculateMultiply = (num1, num2) => {
  return num1 * num2;
};

// Implicit return (versi ringkas — hasil sama persis)
const calculateMultiply = (num1, num2) => num1 * num2;
```

### Regular Function vs Arrow Function

```javascript
// Regular Function
function calculateMultiply(num1, num2) {
  return num1 * num2;
}

// Arrow Function
const calculateMultiply = (num1, num2) => {
  return num1 * num2;
};
```

Kedua gaya ini menghasilkan output yang sama. Arrow Function lebih ringkas dan merupakan standar modern.

---

> 📎 Lihat juga: [_catatan-awal.md](./_catatan-awal.md) — dokumentasi awal sebelum review
