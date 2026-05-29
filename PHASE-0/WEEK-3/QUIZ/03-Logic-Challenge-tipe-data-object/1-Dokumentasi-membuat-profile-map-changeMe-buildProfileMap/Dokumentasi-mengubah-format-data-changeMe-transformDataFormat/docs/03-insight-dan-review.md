# 📙 Insight & Review — Bedah Kode Awal hingga Best Practice

### ✨ _Jujur menilai kode sendiri, belajar dari kesalahan, dan merangkum perjalanan menuju versi terbaik_

> 🎯 **Tujuan:** Melakukan code review jujur terhadap kode awal (pre-mentoring), memahami apa yang sudah bagus dan apa yang perlu diperbaiki, lalu membandingkan semua versi solusi secara head-to-head.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🔎 | [Review Kode Awal](#review-kode-awal) | Code review jujur kode pre-mentoring |
| 🛠️ | [Refactoring Kode Awal](#refactoring) | Perbaikan bug tanpa mengubah gaya orisinal |
| 🏆 | [Versi Best Practice](#best-practice) | Evolusi penuh — versi paling paripurna |
| ⚖️ | [Perbandingan 3 Versi](#perbandingan-3-versi) | Head-to-head semua versi |
| 💎 | [Key Takeaways](#key-takeaways) | Pelajaran inti dari seluruh sesi |

---

<a name="review-kode-awal"></a>

## 🔎 Review Kode Awal (Pre-Mentoring)

Sebelum sesi mentoring, kode yang ditulis adalah sebagai berikut:

```javascript
function changeMe(arr) {
  if (arr.length === 0) {
    console.log('');
  } else {
    // ❌ Bug: Mencetak elemen pertama di luar loop
    const firstProfile = arr[0].slice(0, 2).join(' ');
    console.log(`1. ${firstProfile}:`);

    const currentYear = new Date().getFullYear();

    for (const profile of arr) {
      const [firstName, lastName, gender, year] = profile;

      const fullName = `${firstName} ${lastName}`;
      const age = year ? currentYear - year : 'Invalid Birth Year';

      // ❌ Anti-pattern: Objek palsu dari template literal
      const output2 = `${fullName}: {
      firstName: ${firstName},
      lastName: ${lastName},
      gender: ${gender},
      age: ${age}
    }`;

      console.log(output2);
    }
  }
}
```

### ✅ Poin Positif — Yang Sudah Bagus

> [!TIP]
> 💡 **Dua insting yang sangat cerdas:**

**1. Insting Caching** 🟢

```javascript
const currentYear = new Date().getFullYear();  // Di luar loop — brilian!
```

Mengekstrak `new Date().getFullYear()` di luar loop adalah praktik tingkat lanjut. Tanpa caching, setiap iterasi akan membuat objek `Date` baru — boros memori.

**2. Destructuring** 🟢

```javascript
const [firstName, lastName, gender, year] = profile;  // ES6 yang kokoh
```

Langsung menunjukkan pemahaman JavaScript modern yang solid, bukan pakai `profile[0]`, `profile[1]` manual.

---

### ❌ Area Perbaikan — Yang Perlu Diperbaiki

#### 🐛 Bug 1: Objek Palsu (String Template)

```javascript
// ❌ Ini menghasilkan STRING, bukan OBJECT
const output2 = `${fullName}: {
  firstName: ${firstName},
  ...
}`;
```

| Aspek | String Template 🔴 | Objek Murni 🟢 |
|-------|:-------------------:|:--------------:|
| `typeof` | `"string"` | `"object"` |
| Pewarnaan di konsol | ❌ Teks biasa | ✅ Berwarna |
| Bisa di-inspect | ❌ Tidak | ✅ Expand/collapse |
| Interaktif di DevTools | ❌ Tidak | ✅ Ya |

#### 🐛 Bug 2: Hardcode `arr[0]` di Luar Loop

```javascript
const firstProfile = arr[0].slice(0, 2).join(' ');
console.log(`1. ${firstProfile}:`);   // ← Hanya muncul untuk orang pertama!
```

Masalah: Cetakan ini **berdiri sendiri** di luar loop. Nama orang kedua, ketiga, dst. tidak mendapat perlakuan yang sama — merusak konsistensi output.

#### 🐛 Bug 3: Validasi Tahun Lemah

```javascript
const age = year ? currentYear - year : 'Invalid Birth Year';
//               ↑ Tidak ada proteksi masa depan!
```

Jika `year = 2080`, kondisi `year ?` tetap bernilai `true` → umur dihitung: `2026 - 2080 = -54`. Minus! 😱

---

<a name="refactoring"></a>

## 🛠️ Refactoring Kode Awal

Perbaikan yang **menghargai gaya orisinal** (tetap `for...of`) namun menyingkirkan semua bug:

```javascript
function changeMe(arr) {
  // ✅ Fix 1: Early Return (tanpa blok else)
  if (arr.length === 0) {
    console.log('');
    return;
  }

  // ✅ Tetap pertahankan insting caching yang brilian
  const currentYear = new Date().getFullYear();

  for (const profile of arr) {
    const [firstName, lastName, gender, year] = profile;
    const fullName = `${firstName} ${lastName}`;

    // ✅ Fix 2: Proteksi masa depan
    const age = (year && year <= currentYear)
      ? currentYear - year
      : 'Invalid Birth Year';

    // ✅ Fix 3: Objek murni + console.log multi-parameter
    const personObj = { firstName, lastName, gender, age };
    console.log(`${fullName}:`, personObj);
  }
}
```

> [!NOTE]
> 💡 **Filosofi refactoring ini:** Perbaiki yang salah, pertahankan yang sudah bagus. Insting caching dan destructuring tetap dipertahankan karena sudah tepat sejak awal.

---

<a name="best-practice"></a>

## 🏆 Versi Best Practice Akhir (Evolusi Penuh)

Versi paling ringkas dan deklaratif — memadukan semua materi mentoring:

```javascript
/**
 * Mengubah array multidimensi data orang menjadi format log objek.
 * @param {Array<Array<string|number>>} peopleData - Array kumpulan profil
 */
const changeMe = (peopleData) => {
  if (peopleData.length === 0) {
    console.log('');
    return;
  }

  // Caching fungsi berat
  const currentYear = new Date().getFullYear();

  // Iterasi ekspresif: .forEach() + Destructuring langsung di parameter
  peopleData.forEach(([firstName, lastName, gender, birthYear]) => {

    // Pre-compute: Ekstraksi logika agar badan objek tetap bersih
    const isValidYear = birthYear && birthYear <= currentYear;
    const computedAge = isValidYear ? currentYear - birthYear : 'Invalid Birth Year';

    // Pembentukan objek murni
    const person = { firstName, lastName, gender, age: computedAge };

    console.log(`${firstName} ${lastName}:`, person);
  });
};
```

**Apa yang berbeda dari V2 biasa?**

| Fitur Tambahan | Penjelasan |
|----------------|------------|
| `currentYear` di-cache | Insting caching dari kode awal — dipertahankan! |
| `isValidYear` | Kondisi validasi diekstrak ke variabel tersendiri → lebih readable |
| `computedAge` | Hasil kalkulasi di-*pre-compute* → badan objek tetap bersih |
| JSDoc comment | Dokumentasi parameter untuk maintainability |

> [!IMPORTANT]
> 🔔 **Best Practice Kunci:** Jangan masukkan ternary yang panjang/kompleks langsung ke dalam inisialisasi objek. **Pre-compute dulu** di variabel terpisah, baru pasang ke objek. Ini membuat kode jauh lebih mudah di-debug dan di-review.

---

<a name="perbandingan-3-versi"></a>

## ⚖️ Perbandingan 3 Versi (Head-to-Head)

| Aspek | Kode Awal 🔴 | Refactored 🟡 | Best Practice 🟢 |
|-------|:------------:|:-------------:|:----------------:|
| **Edge case handling** | `if/else` | ✅ Early Return | ✅ Early Return |
| **Loop** | `for...of` | `for...of` | `.forEach()` |
| **Destructuring** | ✅ Ada | ✅ Ada | ✅ Di parameter |
| **Objek output** | ❌ String palsu | ✅ Objek murni | ✅ Objek murni |
| **Validasi tahun** | ❌ Tanpa proteksi | ✅ `<= currentYear` | ✅ `isValidYear` |
| **Caching `Date`** | ✅ Ada | ✅ Ada | ✅ Ada |
| **Pre-compute age** | ❌ Inline | ❌ Inline | ✅ `computedAge` |
| **Naming** | 🟡 `arr` | 🟡 `arr` | ✅ `peopleData` |
| **JSDoc** | ❌ Tidak | ❌ Tidak | ✅ Ada |

---

<a name="key-takeaways"></a>

## 💎 Key Takeaways

### 🧠 Pelajaran Teknis

```
1️⃣  Objek Murni > Teks Palsu
    → Percayakan JavaScript mencetak Object. Gunakan pola:
      console.log("label:", objekMurni)

2️⃣  Pre-Compute > Inline Complex
    → Ternary panjang di dalam objek = susah dibaca.
      Hitung dulu di variabel, baru pasang ke objek.

3️⃣  Caching Fungsi Berat
    → new Date() di luar loop = hemat memori.
      Insting ini sudah benar sejak kode awal!
```

### 🌱 Pelajaran Mindset

> [!TIP]
> 💡 **Code review bukan soal menghakimi — tapi soal bertumbuh.**
>
> Kode awal punya **bug**, tapi juga punya **insting brilian** (caching, destructuring). Proses mentoring bukan menghapus semuanya dan mulai dari nol — melainkan **memperbaiki yang salah** dan **mempertahankan yang sudah bagus**.

---

[⬅️ Kembali ke 02 — Evolusi Solusi](02-evolusi-solusi.md) · [⬆️ Kembali ke README](../README.md)
