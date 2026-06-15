# 📋 Ringkasan Kode: kaliTerusRekursif

### ✨ _Cheat sheet semua versi — siap copy-paste_

> 🎯 **Tujuan:** Referensi cepat untuk melihat dan menyalin kode tanpa harus membaca penjelasan panjang. Untuk detail algoritma, lihat `docs/01-pendekatan-solusi.md`.

---

## 🧪 Test Cases

```javascript
console.log(kaliTerusRekursif(66));   // 8
console.log(kaliTerusRekursif(3));    // 3
console.log(kaliTerusRekursif(24));   // 8
console.log(kaliTerusRekursif(654));  // 0
console.log(kaliTerusRekursif(1231)); // 6
```

---

## 🟢 Versi 1: For-Loop

> **Kategori:** Fundamental · **Cocok untuk:** Belajar

```javascript
const kaliTerusRekursif = (num) => {
  if (num < 10) return num;

  const numStr = String(num);
  let product = 1;

  for (const digit of numStr) {
    product *= digit;
  }

  return kaliTerusRekursif(product);
};
```

---

## 🔵 Versi 2: Reduce (ES6)

> **Kategori:** Best Practice · **Cocok untuk:** Production

```javascript
const kaliTerusRekursif = (num) => {
  if (num < 10) return num;

  return kaliTerusRekursif(
    [...String(num)].reduce((product, digit) => product * digit, 1)
  );
};
```

---

## 🟣 Versi 3: Pure Math (Modulo)

> **Kategori:** Fundamental · **Cocok untuk:** Technical Interview

```javascript
const kaliTerusRekursif = (num) => {
  if (num < 10) return num;

  let product = 1;
  let currentNum = num;

  while (currentNum > 0) {
    let lastDigit = currentNum % 10;
    product *= lastDigit;
    currentNum = Math.floor(currentNum / 10);
  }

  return kaliTerusRekursif(product);
};
```

---

## 🟠 Versi 4: Helper Function (Full Recursion)

> **Kategori:** Eksperimental · **Cocok untuk:** Latihan Rekursi Murni

```javascript
function kaliTerusRekursif(num) {
  if (num < 10) return num;

  const kalikanDigit = (n) => {
    if (n === 0) return 1;
    return (n % 10) * kalikanDigit(Math.floor(n / 10));
  };

  const product = kalikanDigit(num);

  return kaliTerusRekursif(product);
}
```

---

## ⚡ Perbandingan Kilat

| | 🟢 For-Loop | 🔵 Reduce | 🟣 Modulo | 🟠 Helper |
|:---|:---:|:---:|:---:|:---:|
| Baris | 8 | 4 | 9 | 9 |
| Readability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Performa | 🟡 | 🟡 | 🟢 | 🟢 |
| Pakai String | ✅ | ✅ | ❌ | ❌ |
| 100% Rekursif | ❌ | ❌ | ❌ | ✅ |

---

> 📝 **Navigasi:** [← Kembali ke README](./README.md) · [Detail Solusi →](./docs/01-pendekatan-solusi.md) · [Gotcha & Insight →](./docs/02-gotcha-dan-insight.md)
