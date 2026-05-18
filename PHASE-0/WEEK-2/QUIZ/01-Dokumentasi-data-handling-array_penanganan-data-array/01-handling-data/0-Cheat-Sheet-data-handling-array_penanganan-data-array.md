# 🔄 Cheat Sheet — Data Handling Array (`dataHandling`)

> 📋 Ringkasan semua versi kode dari sesi mentoring & dokumentasi. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. `for...of` + Destructuring + Return ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const dataHandling = (usersData) => {
  let formattedData = '';

  for (const [id, fullName, birthPlace, birthDate, hobby] of usersData) {
    formattedData += `Nomor ID:  ${id}\n`;
    formattedData += `Nama Lengkap:  ${fullName}\n`;
    formattedData += `TTL:  ${birthPlace} ${birthDate}\n`;
    formattedData += `Hobi:  ${hobby}\n\n`;
  }

  return formattedData;
};
```

> 🔑 Accumulator pattern + destructuring + return. Fungsi pure, hasilnya bisa dipakai ulang (cetak, kirim API, tampilkan HTML). **Pilihan #1 untuk portfolio & production.**

---

### 2. Functional Programming (`.map` + `.join`) ⭐ `PALING RINGKAS`

```javascript
const dataHandling = (dataList) => {
  return dataList
    .map(([id, fullName, birthPlace, birthDate, hobby]) => {
      return (
        `Nomor ID:  ${id}\n` +
        `Nama Lengkap:  ${fullName}\n` +
        `TTL:  ${birthPlace} ${birthDate}\n` +
        `Hobi:  ${hobby}\n`
      );
    })
    .join('\n') + '\n';
};
```

> 🔑 Immutable & declarative. Destructuring langsung di parameter `.map()`. Cocok untuk yang sudah paham konsep higher-order functions.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. `for` Loop + Index Manual `PALING INTUITIF`

```javascript
const dataHandling = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`Nomor ID:  ${array[i][0]}`);
    console.log(`Nama Lengkap:  ${array[i][1]}`);
    console.log(`TTL:  ${array[i][2]} ${array[i][3]}`);
    console.log(`Hobi:  ${array[i][4]}`);
    console.log('');
  }
};
```

> 🔑 Pendekatan paling dasar — akses data via index `array[i][0]`. Bagus untuk melatih pemahaman cara kerja nested array, tapi kurang readable di production.

---

### 4. `for...of` + Destructuring + `console.log` `UNTUK SUBMIT BOOTCAMP`

```javascript
const dataHandling = (usersData) => {
  for (const [id, fullName, birthPlace, birthDate, hobby] of usersData) {
    console.log(`Nomor ID:  ${id}`);
    console.log(`Nama Lengkap:  ${fullName}`);
    console.log(`TTL:  ${birthPlace} ${birthDate}`);
    console.log(`Hobi:  ${hobby}`);
    console.log('');
  }
};
```

> 🔑 Versi clean dari #3. Destructuring membuat kode self-documenting. Pakai `console.log` langsung agar lolos autograder yang mendeteksi output console.

---

### 5. `forEach` + Destructuring

```javascript
const dataHandling = (arr) => {
  let formattedData = '';

  arr.forEach(profile => {
    const [id, fullName, birthPlace, birthDate, hobby] = profile;
    formattedData += `Nomor ID:  ${id}\nNama Lengkap:  ${fullName}\nTTL:  ${birthPlace} ${birthDate}\nHobi:  ${hobby}\n\n`;
  });

  return formattedData;
};
```

> 🔑 Alternatif loop menggunakan built-in `.forEach()`. Destructuring dilakukan di dalam body callback. Tidak bisa `break`/`continue`.

---

## ⚠️ GOTCHA CEPAT

```javascript
// ❌ Fungsi tanpa return + dibungkus console.log = muncul "undefined"
console.log(dataHandling(input));  // ... output ... undefined

// ✅ Jika fungsi pakai console.log di dalam → panggil langsung
dataHandling(input);               // ... output ... (bersih!)

// ✅ Jika fungsi pakai return → boleh bungkus console.log
console.log(dataHandling(input));  // ... output ... (bersih!)
```

```javascript
// ❌ Lupa gabungkan TTL (tempat + tanggal)
console.log(`TTL:  ${birthPlace}`);              // TTL:  Bandar Lampung (kurang tanggal!)

// ✅ TTL = 2 data digabung dengan spasi
console.log(`TTL:  ${birthPlace} ${birthDate}`); // TTL:  Bandar Lampung 21/05/1989
```

```javascript
// ❌ Akses index manual — sulit dibaca
console.log(array[i][2]);  // "Index 2 itu apa?" 🤔

// ✅ Destructuring — langsung paham
console.log(birthPlace);   // "Oh, tempat lahir!" 💡
```

---

## 📊 QUICK COMPARISON

| # | Versi | Loop | Output | Baris | Keunggulan | Label |
|---|-------|------|--------|:-----:|------------|-------|
| 1 | `for...of` + Return | `for...of` | `return` | 10 | Pure, reusable, clean | 🏆 Best Practice |
| 2 | Functional `.map` | `.map` + `.join` | `return` | 8 | Immutable, ringkas | 🏆 Advanced |
| 3 | `for` + Index | `for` | `console.log` | 8 | Intuitif, dasar | 🧠 Fundamental |
| 4 | `for...of` + Log | `for...of` | `console.log` | 8 | Clean, lolos autograder | 🧠 Submit |
| 5 | `forEach` | `.forEach` | `return` | 9 | Built-in method | 🧠 Alternatif |

---

## 🧪 TEST CASES

```javascript
let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

// Untuk versi console.log (submit bootcamp):
dataHandling(input);

// Untuk versi return (best practice):
console.log(dataHandling(input));
```
