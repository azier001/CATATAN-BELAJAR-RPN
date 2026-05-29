# 📘 Solusi Bertahap — Dari Logika ke Kode (`for...of`)

### ✨ _Menerjemahkan pola dari analisis menjadi baris kode yang bekerja, selangkah demi selangkah_

> 🎯 **Tujuan:** Membangun solusi pertama `changeMe` secara bertahap — dimulai dari edge case, lalu destructuring, validasi umur, hingga format cetak yang tepat.

---

<a name="daftar-isi"></a>

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 🧠 | [Algoritma Tahan Lupa](#algoritma-tahan-lupa) | Langkah-langkah dengan penjelasan "Kenapa" (Pilar 2) |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode kosong + tabel penamaan (Pilar 3) |
| 🔨 | [Pendekatan Bertahap](#pendekatan-bertahap) | Membangun kode step-by-step (Pilar 4) |
| ⚠️ | [Gotcha: Jebakan Output](#gotcha) | Kesalahan penomoran yang sempat terjadi (Pilar 7) |
| ✅ | [Kode Final V1](#kode-final) | Solusi lengkap versi `for...of` |

---

<a name="algoritma-tahan-lupa"></a>

## 🧠 Algoritma Tahan Lupa

> **Pilar 2** — Setiap langkah menjelaskan **"Kenapa"**, bukan cuma rumusnya, plus **contoh angka konkret**.

### 1. **Gerbang Penjaga `[EARLY RETURN]`** — Tangani array kosong di awal

- **Apa:** Cek apakah `peopleData.length === 0`. Jika ya, cetak `''` lalu `return`.
- **Kenapa:** Tanpa pengecekan ini, loop di bawahnya akan tetap dieksekusi pada array kosong — tidak error, tapi juga tidak mencetak `""` yang diminta soal.
- **Contoh:** `changeMe([])` → langsung `console.log('')` → selesai, tidak lanjut ke loop.

### 2. **Pembongkaran Data `[DESTRUCTURING]`** — Ekstraksi sub-array menjadi variabel bermakna

- **Apa:** Di setiap iterasi, pecah `profile` menjadi `[firstName, lastName, gender, birthYear]`.
- **Kenapa:** Daripada menulis `profile[0]`, `profile[1]` berulang kali (rentan typo dan tidak deskriptif), destructuring membuat kode langsung *self-documenting*.
- **Contoh:** `['Christ', 'Evans', 'Male', 1982]` → `firstName = 'Christ'`, `lastName = 'Evans'`, `gender = 'Male'`, `birthYear = 1982`.

### 3. **Kalkulasi Umur Dinamis `[TERNARY + VALIDASI]`** — Hitung umur dengan proteksi masa depan

- **Apa:** Gunakan ternary: `birthYear && birthYear <= currentYear ? currentYear - birthYear : 'Invalid Birth Year'`.
- **Kenapa:** Operator `&&` memastikan `birthYear` ada (bukan `undefined`). Pengecekan `<= currentYear` melindungi dari tahun lahir di masa depan (misal 2080). Kedua kondisi **harus** terpenuhi agar umur dihitung.
- **Contoh:** `birthYear = 1982`, `currentYear = 2026` → `1982 && 1982 <= 2026` ✅ → `2026 - 1982 = 44`.

### 4. **Pembentukan Objek Murni `[OBJECT LITERAL]`** — Buat objek JavaScript asli, bukan string template

- **Apa:** Buat objek `person` dengan shorthand property: `{ firstName, lastName, gender, age }`.
- **Kenapa:** Objek murni (tipe `Object`) mendapat pewarnaan sintaks dan interaktivitas di konsol Node.js. String template yang *mirip* objek (tipe `String`) tidak memiliki keduanya — ini anti-pattern yang harus dihindari.
- **Contoh:** `{ firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 44 }` → di konsol, properti bisa di-expand dan di-inspect.

### 5. **Cetak Multi-Parameter `[CONSOLE.LOG]`** — Satukan label nama dengan objek dalam satu baris

- **Apa:** `console.log(`${firstName} ${lastName}:`, person)` — dua argumen dipisah koma.
- **Kenapa:** `console.log` bisa menerima **lebih dari satu** parameter. Parameter pertama (string) dan kedua (objek) dicetak sejajar dalam satu baris output. Ini jauh lebih rapi daripada mencetak nama dan objek di baris terpisah.
- **Contoh:** Output: `Christ Evans: { firstName: 'Christ', lastName: 'Evans', ... }` — satu baris utuh.

---

<a name="blueprint"></a>

## 🗺️ Blueprint & Kamus Variabel

> **Pilar 3** — Kerangka kode kosong + tabel penamaan variabel sebelum menulis kode final.

### 📖 Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|----------------|----------------|-------------------|--------|
| Parameter Input | `peopleData` | `arr`, `data` | Gamblang menyebutkan bahwa ini kumpulan data orang |
| Loop Iterator | `profile` | `item`, `el` | Merepresentasikan satu profil data seseorang |
| Nama Depan | `firstName` | `fn`, `name1` | Sudah standar industri |
| Nama Belakang | `lastName` | `ln`, `name2` | Sudah standar industri |
| Tahun Lahir | `birthYear` | `year`, `y` | Jelas ini tahun lahir, bukan tahun sekarang |
| Objek Target | `person` | `obj`, `res` | Spesifik merepresentasikan 1 entitas individu |

### 🗺️ Kerangka Kode

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Gerbang → Loop → Bongkar → Hitung → Bentuk → Cetak)

const changeMe = (peopleData) => {         // [PARAMETER] deskriptif
  // [GERBANG PENJAGA] — tangani array kosong
  if (peopleData.length === 0) {
    console.log('');
    return;
  }

  for (const profile of peopleData) {      // [LOOP UTAMA] → iterasi tiap profil
    // [DESTRUCTURING] → pecah sub-array
    // [KALKULASI] → hitung umur dengan validasi
    // [OBJEK] → bentuk objek murni
    // [CETAK] → console.log multi-parameter
  }
};
```

---

<a name="pendekatan-bertahap"></a>

## 🔨 Pendekatan Bertahap (Step-by-Step)

> **Pilar 4** — Kode dibangun selangkah demi selangkah, bukan langsung full code.

### Step 1 — Tangani Edge Case Dulu

```javascript
const changeMe = (peopleData) => {
  if (peopleData.length === 0) {
    console.log('');
    return;     // ← Early Return: langsung berhenti, tanpa blok else
  }
};
```

> [!NOTE]
> 💡 **Kenapa Early Return?** Tanpa `return`, kode setelah `if` tetap dieksekusi. Dengan `return`, kita menghindari nesting `else` yang membuat kode makin menjorok ke kanan.

---

### Step 2 — Loop & Destructuring

```javascript
for (const profile of peopleData) {
  const [firstName, lastName, gender, birthYear] = profile;
  console.log(firstName, lastName);  // Test: pastikan data ter-extract
}
```

> [!TIP]
> 💡 **Tips Debugging:** Cetak variabel sederhana dulu (`console.log(firstName)`) untuk memastikan destructuring bekerja sebelum lanjut ke logika yang lebih kompleks.

---

### Step 3 — Tambahkan Logika Umur

```javascript
const person = {
  firstName,
  lastName,
  gender,
  age:
    birthYear && birthYear <= new Date().getFullYear()
      ? new Date().getFullYear() - birthYear
      : 'Invalid Birth Year',
};
```

---

### Step 4 — Format Console.log Final

```javascript
console.log(`${firstName} ${lastName} :`, person);
//          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ^^^^^^
//          Parameter 1 (string label)      Parameter 2 (objek murni)
```

---

<a name="gotcha"></a>

## ⚠️ Gotcha: Jebakan Output

> **Pilar 7** — Akurasi logika dan peringatan jebakan umum.

Saat merancang `console.log`, sempat terjadi miskonsepsi karena ada *comment* `// 1.` di akhir baris pemanggil fungsi pada soal.

**❌ Kode yang Keliru (Hardcode Penomoran):**

```javascript
console.log(`1. ${firstName} ${lastName} :`);
console.log(person);
// Efek: Angka "1." tercetak berulang, nama & objek terpisah 2 baris
```

**✅ Kode Perbaikan (Satu Baris, Tanpa Nomor):**

```javascript
console.log(`${firstName} ${lastName} :`, person);
// Efek: Label nama dan objek menyatu dalam satu baris output
```

> [!CAUTION]
> 🔴 **Pelajaran:** Jangan mudah terkecoh oleh komentar tambahan di soal. `// 1.` itu hanyalah **nomor urut soal**, bukan bagian dari output yang harus dicetak!

---

<a name="kode-final"></a>

## ✅ Kode Final — Versi 1 (`for...of`)

```javascript
const changeMe = (peopleData) => {
  if (peopleData.length === 0) {
    console.log('');
    return;
  }

  for (const profile of peopleData) {
    const [firstName, lastName, gender, birthYear] = profile;

    const person = {
      firstName,
      lastName,
      gender,
      age:
        birthYear && birthYear <= new Date().getFullYear()
          ? new Date().getFullYear() - birthYear
          : 'Invalid Birth Year',
    };

    console.log(`${firstName} ${lastName} :`, person);
  }
};
```

---

[⬅️ Kembali ke README](../README.md) · [➡️ Lanjut ke 02 — Evolusi Solusi](02-evolusi-solusi.md)
