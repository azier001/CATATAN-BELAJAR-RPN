# 🔄 Cheat Sheet — Data Handling 2 (Array Built-in Methods)

> 📋 Ringkasan semua versi kode dari sesi mentoring `dataHandling2`. Siap copy-paste!

---

## 🏆 BEST PRACTICE & PRODUCTION READY

### 1. Selective Destructuring + Global MONTHS + Fallback ⭐ `PALING DIREKOMENDASIKAN`

```javascript
const MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const dataHandling2 = (userData) => {
  const formattedData = [...userData];
  formattedData.splice(1, 4,
    'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung',
    '21/05/1989', 'Pria', 'SMA Internasional Metro'
  );
  console.log(formattedData);

  const [, fullName, , birthDate] = formattedData;
  const dateParts = birthDate.split('/');
  const [, month] = dateParts;

  const monthName = MONTHS[month - 1] || 'Bulan Tidak Valid';
  console.log(monthName);

  console.log([...dateParts].sort((a, b) => b - a));
  console.log(dateParts.join('-'));
  console.log(fullName.slice(0, 15));
};
```

> 🔑 `MONTHS` global (hemat memori), selective destructuring (tanpa variabel mubazir), fallback `||` untuk edge case. **Pilihan #1 untuk production.**

---

### 2. Splice + Array Lookup + Explicit Destructuring ⭐ `PALING SEIMBANG`

```javascript
const dataHandling2 = (userData) => {
  const copyData = [...userData];
  copyData.splice(1, 4,
    'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung',
    '21/05/1989', 'Pria', 'SMA Internasional Metro',
  );
  console.log(copyData);

  const [id, fullName, province, birthDate, gender, school] = copyData;
  const dateParts = birthDate.split('/');
  const [day, month, year] = dateParts;

  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
  ];

  console.log(months[month - 1]);
  console.log([...dateParts].sort((a, b) => b - a));
  console.log(dateParts.join('-'));
  console.log(fullName.slice(0, 15));
};
```

> 🔑 Destructuring eksplisit semua elemen → mudah dibaca. `split()` hanya 1x. Cocok untuk portfolio & belajar.

---

## 🧠 FUNDAMENTAL LOGIC (Untuk Belajar)

### 3. Manual Assignment + Switch Case `PALING INTUITIF`

```javascript
function dataHandling2(input) {
  const copyData = [...input];

  copyData[1] = 'Roman Alamsyah Elsharawy';
  copyData[2] = 'Provinsi Bandar Lampung';
  copyData[4] = 'Pria';
  copyData[5] = 'SMA Internasional Metro';

  console.log(copyData);
  const [id, fullName, province, birthDate, ...rest] = copyData;
  const [date, month, year] = birthDate.split('/');

  let nameMonth = '';
  switch (+month) {
    case 5: nameMonth = 'Mei'; break;
    default: nameMonth = 'bulan tidak diatur';
  }

  console.log(nameMonth);
  console.log([year, date, month]);
  console.log([date, month, year].join('-'));
  console.log(fullName.slice(0, 15));
}
```

> 🔑 Pendekatan paling dasar tanpa `splice()` dan `sort()`. Melatih insting manipulasi array secara manual dan penggunaan `switch-case`.

---

## 🧪 EKSPERIMENTAL / ALTERNATIF

### 4. Iterasi Kode Awal — `split('').slice().join('')` untuk Potong Nama

```javascript
// ⚠️ TIDAK DIREKOMENDASIKAN — hanya untuk referensi sejarah evolusi kode
const name = input[1].split('').slice(0, 15).join('');
```

> 🔑 Cara lama memotong string: pecah jadi array karakter → slice → gabung lagi. **Tidak efisien.** Gunakan `string.slice(0, 15)` langsung.

---

### 5. Template Literals untuk Format Tanggal (Alternatif `join`)

```javascript
const [day, month, year] = birthDate.split('/');
const formatted = `${day}-${month}-${year}`;
```

> 🔑 Lebih eksplisit dari `join('-')`. Cocok ketika urutan output berbeda dari urutan array asli.

---

## ⚠️ GOTCHA CEPAT

```javascript
// 🔴 .sort() MUTATING — mengubah array asli!
const arr = ["21", "05", "1989"];
arr.sort((a, b) => b - a);
console.log(arr); // ["1989", "21", "05"] — array asli BERUBAH!

// ✅ SOLUSI: Kloning dulu dengan spread operator
const sorted = [...arr].sort((a, b) => b - a);
// arr tetap ["21", "05", "1989"] ✅
```

```javascript
// 🔴 .splice() juga MUTATING!
const data = [1, 2, 3, 4, 5];
data.splice(1, 2); // data sekarang = [1, 4, 5]

// ✅ SOLUSI: Kloning sebelum splice
const safe = [...data];
safe.splice(1, 2);
```

```javascript
// 🟢 .join() dan .slice() AMAN (non-mutating)
const parts = ["21", "05", "1989"];
parts.join('-');      // "21-05-1989" — parts TIDAK berubah ✅
parts.slice(0, 2);   // ["21", "05"] — parts TIDAK berubah ✅
```

```javascript
// 🔴 Array bulan: indeks mulai dari 0, bulan kalender mulai dari 1
const MONTHS = ['Januari', 'Februari', /* ... */];
MONTHS[5 - 1]; // "Mei" ✅ (bukan MONTHS[5] yang akan jadi "Juni")
```

---

## 📊 QUICK COMPARISON

| # | Versi | Baris | `splice` | Bulan Dinamis | Variabel Mubazir | Rekomendasi |
|---|---|:---:|:---:|:---:|:---:|---|
| 1 | Selective + Global MONTHS | ~15 | ✅ | ✅ + fallback | ✅ Tidak ada | ⭐ Production |
| 2 | Splice + Explicit Destructuring | ~20 | ✅ | ✅ 12 bulan | ⚠️ `id`, `province` | 📚 Portfolio |
| 3 | Manual Assignment + Switch | ~18 | ❌ | ❌ Hanya Mei | ⚠️ `id`, `...rest` | 🧠 Belajar |
| 4 | split-slice-join (lama) | 1 | — | — | — | ❌ Jangan pakai |
| 5 | Template Literals | 2 | — | — | — | 🔄 Alternatif |

---

## 🧪 TEST CASES

```javascript
// === INPUT ===
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

// === PANGGIL FUNGSI ===
dataHandling2(input);

// === EXPECTED OUTPUT (Console) ===
// 1. ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
// 2. Mei
// 3. ["1989", "21", "05"]
// 4. 21-05-1989
// 5. Roman Alamsyah

// === VERIFIKASI INPUT TIDAK TERMUTASI ===
console.log(input);
// ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"] ← tetap utuh ✅
```
