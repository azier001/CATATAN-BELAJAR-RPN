# ⏱️ Cheat Sheet — Convert Minutes / Konversi Menit

> 📋 Ringkasan semua versi kode dari sesi mentoring. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. padStart() — Modern Built-in ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const konversiMenit = (menit) => {
  const jam = Math.floor(menit / 60);
  const sisaMenit = menit % 60;

  return `${jam}:${String(sisaMenit).padStart(2, '0')}`;
};
```

> 🔑 Tidak perlu `if` atau ternary — `padStart(2, '0')` otomatis menambahkan `'0'` di depan jika string kurang dari 2 karakter. Semua variabel bisa `const`.

---

### 2. padStart() — English Naming ⭐ `STANDAR INTERNASIONAL`

```javascript
const convertMinutes = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}:${String(remainingMinutes).padStart(2, '0')}`;
};
```

> 🔑 Versi Bahasa Inggris untuk proyek profesional. Logika identik, naming mengikuti konvensi internasional.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. If Statement — Fondasi Kondisional ⭐ `PALING INTUITIF`

```javascript
const konversiMenit = (menit) => {
  const jam = Math.floor(menit / 60);
  let sisaMenit = menit % 60;

  if (sisaMenit < 10) {
    sisaMenit = `0${sisaMenit}`;
  }

  return `${jam}:${sisaMenit}`;
};
```

> 🔑 Paling mudah dibaca dan dipahami. Ideal untuk melatih logika kondisional `if`. Perlu `let` karena nilai `sisaMenit` ditimpa.

---

### 4. Ternary Operator — If-Else Satu Baris

```javascript
const konversiMenit = (menit) => {
  const jam = Math.floor(menit / 60);
  let sisaMenit = menit % 60;

  sisaMenit = sisaMenit < 10 ? `0${sisaMenit}` : sisaMenit;

  return `${jam}:${sisaMenit}`;
};
```

> 🔑 Ringkasan `if-else` dalam format `kondisi ? true : false`. Umum dipakai di production. Masih butuh `let`.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 5. Ternary Inline — Langsung di Return

```javascript
const konversiMenit = (menit) => {
  const jam = Math.floor(menit / 60);
  const sisaMenit = menit % 60;

  return `${jam}:${sisaMenit < 10 ? `0${sisaMenit}` : sisaMenit}`;
};
```

> 🔑 Ternary langsung di dalam template literal. Lebih ringkas tapi readability menurun jika ekspresi terlalu panjang. Bisa pakai `const`.

---

### 6. Function Declaration — Gaya Klasik (dari file dokumentasi lama)

```javascript
function konversiMenit(menit) {
  const hour = Math.floor(menit / 60);
  const restTime = menit % 60;

  return `${hour}:${restTime < 10 ? `0${restTime}` : restTime}`;
}
```

> 🔑 Menggunakan `function declaration` alih-alih `arrow function`. Bisa di-*hoist* (dipanggil sebelum dideklarasikan). Naming dari file dokumentasi awal.

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ Division tanpa Math.floor → desimal
63 / 60                   // 1.05 (bukan 1!)

// ✅ Math.floor membulatkan ke bawah
Math.floor(63 / 60)       // 1
```

```javascript
// ❌ Math.round bisa salah — bulatkan ke terdekat
Math.round(150 / 60)      // 3 (SALAH! harusnya 2)

// ✅ Math.floor SELALU bulatkan ke bawah
Math.floor(150 / 60)      // 2
```

```javascript
// ❌ padStart() pada number → TypeError!
(3).padStart(2, '0')          // TypeError!

// ✅ Konversi ke string dulu
String(3).padStart(2, '0')    // "03"
```

```javascript
// ❌ const tidak bisa di-reassign (Versi 1 & 2)
const sisaMenit = menit % 60;
sisaMenit = `0${sisaMenit}`;   // TypeError!

// ✅ Gunakan let jika akan ditimpa
let sisaMenit = menit % 60;
sisaMenit = `0${sisaMenit}`;   // OK!

// 💡 Di Versi padStart(), pakai const aman — tidak ada reassign
```

---

## 📊 QUICK COMPARISON

| Versi | Pendekatan | Baris | Perlu `let`? | Keunggulan Utama | Label |
|:---:|---|:---:|:---:|---|---|
| V1 | If Statement | 7 | ✅ | Paling mudah dibaca | `FUNDAMENTAL` |
| V2 | Ternary Operator | 5 | ✅ | Ringkas, umum dipakai | `UMUM` |
| V3 | padStart() | 4 | ❌ | Deklaratif, scalable | `BEST PRACTICE` 🏆 |

---

## 🧪 TEST CASES

```javascript
console.log(konversiMenit(63));   // "1:03"
console.log(konversiMenit(124));  // "2:04"
console.log(konversiMenit(53));   // "0:53"
console.log(konversiMenit(88));   // "1:28"
console.log(konversiMenit(120));  // "2:00"
```
