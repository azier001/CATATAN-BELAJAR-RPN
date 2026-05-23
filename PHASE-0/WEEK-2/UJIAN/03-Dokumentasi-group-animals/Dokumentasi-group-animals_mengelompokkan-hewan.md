# 🐾 Challenge: Group Animals

### ✨ _Mengelompokkan hewan berdasarkan huruf pertama menjadi array 2 dimensi_

> 🎯 **Tujuan:** Memahami cara mengelompokkan elemen array berdasarkan karakter awal, menyusunnya ke dalam sub-array, dan mengurutkan hasilnya secara alfabetis.

---

### 📑 Daftar Isi

| No | Bagian | Deskripsi |
|----|--------|-----------|
| 📋 | [Soal & Test Cases](#soal) | Deskripsi challenge dan expected output |
| 🔍 | [Visualisasi & Analisis Pola](#analisis) | Tabel breakdown proses pengelompokan |
| 🧠 | [Algoritma Step-by-Step](#algoritma) | Langkah-langkah logika inti (tahan lupa!) |
| 🗺️ | [Blueprint & Kamus Variabel](#blueprint) | Kerangka kode + tabel penamaan variabel |
| 🔨 | [Pendekatan Bertahap](#bertahap) | Proses membangun kode dari nol (step-by-step) |
| 🚀 | [Evolusi Solusi (3 Versi)](#evolusi) | V1 Nested Loop → V2 Object → V3 Sort-First |
| 🏷️ | [Naming Convention](#naming) | Tabel best practice penamaan variabel |
| ⚠️ | [Gotchas & Peringatan](#gotchas) | Jebakan umum yang sering dialami pemula |

---

<a name="soal"></a>

## 📋 Soal & Test Cases

```javascript
/*
  Diberikan sebuah function groupAnimals(animals) yang menerima satu parameter
  berupa array. Fungsi ini akan me-return array 2 dimensi.
*/
function groupAnimals(animals) {
  // you can only write your code here!
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
```

> [!NOTE]
> 💡 **Poin Kunci dari Soal:**
> - Input: Array 1 dimensi berisi nama-nama hewan
> - Output: Array **2 dimensi** (array di dalam array)
> - Pengelompokan berdasarkan **huruf pertama** nama hewan
> - Urutan **di dalam** grup: sesuai urutan kemunculan di input awal
> - Urutan **antar grup**: diurutkan secara **alfabetis** (A → Z)

---

<a name="analisis"></a>

## 🔍 Visualisasi & Analisis Pola

### 🧪 Simulasi Manual (Test Case 1)

**Input:** `['cacing', 'ayam', 'kuda', 'anoa', 'kancil']`

Bayangkan kita punya "**keranjang besar**" (array utama) yang masih kosong. Kita akan memeriksa hewan satu per satu dan memasukkannya ke dalam grup yang sesuai:

| Iterasi | Hewan | Huruf Pertama | Sudah Ada Grup? | Aksi | Kondisi Keranjang |
|:-------:|-------|:------------:|:---------------:|------|-------------------|
| 1 | `cacing` | `c` | ❌ Belum | Buat grup baru `['cacing']` | `[['cacing']]` |
| 2 | `ayam` | `a` | ❌ Belum | Buat grup baru `['ayam']` | `[['cacing'], ['ayam']]` |
| 3 | `kuda` | `k` | ❌ Belum | Buat grup baru `['kuda']` | `[['cacing'], ['ayam'], ['kuda']]` |
| 4 | `anoa` | `a` | ✅ Sudah | Push ke grup `a` | `[['cacing'], ['ayam', 'anoa'], ['kuda']]` |
| 5 | `kancil` | `k` | ✅ Sudah | Push ke grup `k` | `[['cacing'], ['ayam', 'anoa'], ['kuda', 'kancil']]` |

### 📊 Hasil Setelah Pengelompokan (Sebelum Sort)

```
Keranjang:  [ ['cacing'], ['ayam', 'anoa'], ['kuda', 'kancil'] ]
Urutan key:       C              A                  K
```

### 🔤 Langkah Terakhir: Sort Alfabetis

```
SEBELUM sort:  C → A → K
SESUDAH sort:  A → C → K

Hasil Akhir:  [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]  ✅
```

> [!TIP]
> 💡 **Analogi Lemari Laci**
>
> | Konsep | Analogi |
> |--------|---------|
> | 🗄️ Keranjang Besar | Lemari besar dengan banyak laci |
> | 🗂️ Setiap Grup | Satu laci bertuliskan label huruf (A, C, K) |
> | 🐾 Setiap Hewan | Benda yang dimasukkan ke laci yang sesuai |
> | 🔤 Sort di Akhir | Menyusun ulang laci-laci agar berurutan A-Z |

### 🔑 Logika Inti yang Ditemukan

```
1. Iterasi setiap hewan satu per satu
2. Ambil huruf pertama sebagai "kunci grup"
3. Cek apakah grup untuk huruf tersebut sudah ada:
   → Belum ada?  Buat grup baru
   → Sudah ada?  Masukkan ke grup yang ada
4. Setelah semua selesai, SORT keranjang besar secara alfabetis
5. Return hasilnya
```

---

<a name="algoritma"></a>

## 🧠 Algoritma Step-by-Step (Tahan Lupa!)

> Setiap langkah memiliki 3 elemen: **Label Peran**, **Penjelasan Kenapa**, dan **Contoh Konkret**.

### Versi Object Grouping (Versi Rekomendasi)

1. **Menyiapkan Wadah Penampung `[INISIALISASI]`** — Buat object kosong `groups = {}`.
   *(Kenapa Object, bukan Array? Karena Object memungkinkan kita mengakses grup lewat key huruf secara langsung tanpa harus looping mencari — ibarat langsung menunjuk laci `'a'` tanpa membuka laci-laci lain.)*

2. **Memeriksa Hewan Satu Per Satu `[FOR...OF LOOP]`** — Iterasi `animal` dari array `animals`.
   *(Kenapa `for...of`? Karena kita butuh nilai hewannya langsung (`'cacing'`, `'ayam'`), bukan indeks angkanya. Lebih bersih dan mudah dibaca.)*

3. **Mengambil Huruf Penanda `[EXTRACTION]`** — Simpan `animal[0]` ke variabel `firstChar`.
   *(Kenapa diekstrak ke variabel? Supaya tidak memanggil `animal[0]` berulang kali di baris-baris berikutnya. Contoh: `'cacing'[0]` → `'c'`.)*

4. **Mengecek & Membuat Laci Baru `[CONDITIONAL CHECK]`** — `if (!groups[firstChar])` maka buat array kosong `groups[firstChar] = []`.
   *(Kenapa dicek dulu? Karena kalau langsung push tanpa mengecek, `groups['c']` masih `undefined` dan akan error. Contoh iterasi 1: `groups['c']` belum ada → buat `groups['c'] = []`.)*

5. **Memasukkan Hewan ke Laci `[PUSH]`** — `groups[firstChar].push(animal)`.
   *(Kenapa push dilakukan di luar `if`? Karena setelah pengecekan di langkah 4, laci pasti sudah ada — entah baru dibuat atau memang sudah ada sebelumnya. Jadi kita tinggal push saja. Contoh: `groups['c'].push('cacing')` → `{ c: ['cacing'] }`.)*

6. **Mengubah Object ke Array & Mengurutkan `[RETURN]`** — `return Object.values(groups).sort()`.
   *(Kenapa `Object.values()`? Karena output yang diminta berupa Array 2D, bukan Object. Method ini mengambil semua nilai dari object dan menjadikannya array. Lalu `.sort()` mengurutkan sub-array secara alfabetis berdasarkan elemen pertamanya.)*

---

<a name="blueprint"></a>

## 🗺️ Blueprint & Kamus Variabel

### A. Kamus Variabel

| Lokasi / Peran | ✅ Rekomendasi | ❌ Jangan Gunakan | Alasan |
|---|---|---|---|
| Penampung Grup (Object) | `groups` | `obj`, `o`, `res` | Menampung kelompok-kelompok hewan — jamak karena ada banyak grup |
| Penampung Grup (Array) | `result` | `arr`, `r`, `res` | Hasil akhir berupa array 2D |
| Elemen Tunggal Hewan | `animal` | `x`, `item`, `a` | Singular dari `animals` — langsung jelas ini hewan individu |
| Huruf Penanda Grup | `firstChar` | `c`, `huruf`, `key` | Deskriptif: karakter (Char) pertama (first) |
| Bendera Penanda | `isFound` | `cek`, `flag`, `ada` | Standar boolean: awali dengan `is`, `has`, `should` |
| Sub-array di Keranjang | `group` | `g`, `sub`, `arr` | Singular dari `groups` — satu kelompok hewan |

### B. Kerangka Kode — Versi 1 (Nested Loop)

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Buka laci satu per satu, cocokkan label)

function groupAnimals(animals) {
  const result = [];                           // [KERANJANG BESAR] array 2D kosong

  for (const animal of animals) {              // [LOOP UTAMA] → periksa tiap hewan
    const firstChar = animal[0];               //   [EKSTRAK] → ambil huruf pertama
    let isFound = false;                       //   [BENDERA] → "belum ketemu grupnya"

    for (const group of result) {              //   [LOOP PENCARIAN] → cek tiap grup
      if (group[0][0] === firstChar) {         //     [COCOKKAN] → huruf pertama sama?
        group.push(animal);                    //       [MASUKKAN] → push ke grup
        isFound = true;                        //       [TANDAI] → "sudah ketemu!"
        break;                                 //       [HENTIKAN] → tidak perlu cari lagi
      }
    }

    if (!isFound) result.push([animal]);       //   [BUAT BARU] → kalau belum ada grupnya
  }

  return result.sort();                        // [URUTKAN & KEMBALIKAN]
}
```

### C. Kerangka Kode — Versi 2 (Object Grouping) ⭐

```javascript
// 🗺️ KERANGKA KODE (Mental Model: Langsung tunjuk laci berdasarkan label)

const groupAnimals = (animals) => {
  const groups = {};                           // [LEMARI LACI] object kosong

  for (const animal of animals) {              // [LOOP UTAMA] → periksa tiap hewan
    const firstChar = animal[0];               //   [EKSTRAK] → ambil huruf pertama

    if (!groups[firstChar]) {                  //   [CEK LACI] → belum ada laci ini?
      groups[firstChar] = [];                  //     [BUAT LACI] → siapkan array kosong
    }

    groups[firstChar].push(animal);            //   [MASUKKAN] → push ke laci yang tepat
  }

  return Object.values(groups).sort();         // [UBAH & URUTKAN] → object → array, lalu sort
};
```

---

<a name="bertahap"></a>

## 🔨 Pendekatan Bertahap (Step-by-Step Build)

> Kode dibangun secara bertahap dalam sesi mentoring — bukan langsung *full code*.

### Step 1 — Siapkan Fondasi (Keranjang + Loop)

```javascript
const groupAnimals = (animals) => {
  const result = [];

  for (const animal of animals) {
    console.log(animal); // Cek dulu apakah loop berjalan
  }
};
```

> ✅ **Checkpoint:** Loop berjalan, setiap hewan tercetak di console.

---

### Step 2 — Tambahkan Logika Pencarian Grup

```javascript
const groupAnimals = (animals) => {
  const result = [];

  for (const animal of animals) {
    const firstChar = animal[0];
    let isFound = false;

    for (const group of result) {
      if (group[0][0] === firstChar) {  // Cocokkan huruf pertama
        group.push(animal);              // Masukkan ke grup yang ada
        isFound = true;
        break;
      }
    }

    if (!isFound) result.push([animal]); // Buat grup baru jika belum ada
  }

  return result;
};
```

> ✅ **Checkpoint:** Hewan sudah terkelompokkan! Tapi urutan grupnya masih sesuai urutan kemunculan (`C → A → K`), belum alfabetis.

---

### Step 3 — Tambahkan Sort di Akhir

```javascript
  return result.sort(); // Satu sentuhan terakhir!
```

> ✅ **Checkpoint:** Output sudah sesuai expected! `[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]`

---

<a name="evolusi"></a>

## 🚀 Evolusi Solusi (3 Versi)

### Versi 1 — Nested Loop (Array Murni) 🟡

```javascript
const groupAnimals = (animals) => {
  const result = [];

  for (const animal of animals) {
    const firstChar = animal[0];
    let isFound = false;

    for (const group of result) {
      if (group[0][0] === firstChar) {
        group.push(animal);
        isFound = true;
        break;
      }
    }

    if (!isFound) result.push([animal]);
  }

  return result.sort();
};
```

> **Mental Model:** Buka setiap laci di lemari satu per satu sampai ketemu yang cocok. Kalau semua laci sudah dicek dan tidak ada yang cocok, buat laci baru.

---

### Versi 2 — Object Grouping ⭐ 🟢

```javascript
const groupAnimals = (animals) => {
  const groups = {};

  for (const animal of animals) {
    const firstChar = animal[0];

    if (!groups[firstChar]) {
      groups[firstChar] = [];
    }

    groups[firstChar].push(animal);
  }

  return Object.values(groups).sort();
};
```

> **Mental Model:** Langsung tunjuk label laci yang tepat tanpa perlu membuka laci satu per satu. Jauh lebih cepat!

---

### Versi 3 — Sort-First (Urutkan Input Dulu) 🔵

```javascript
function groupAnimals(animals) {
  const sortedAnimals = [...animals].sort((a, b) => a[0].localeCompare(b[0]));
  const grouped = {};

  for (const animal of sortedAnimals) {
    const firstChar = animal[0];

    if (!grouped[firstChar]) {
      grouped[firstChar] = [];
    }

    grouped[firstChar].push(animal);
  }

  return Object.values(grouped);
}
```

> **Mental Model:** Urutkan semua benda berdasarkan label DULU, baru masukkan ke laci satu per satu. Karena sudah berurutan, laci-laci yang terbentuk otomatis juga berurutan — tidak perlu sort lagi di akhir!

---

### 📊 Tabel Perbandingan 3 Versi

| Aspek | V1 Nested Loop 🟡 | V2 Object Grouping 🟢 | V3 Sort-First 🔵 |
|-------|:------------------:|:---------------------:|:-----------------:|
| Struktur Data | Array `[]` | Object `{}` | Object `{}` |
| Pencarian Grup | Loop satu per satu | Akses key langsung | Akses key langsung |
| Butuh `isFound` flag? | ✅ Ya | ❌ Tidak | ❌ Tidak |
| Sort di akhir? | ✅ `result.sort()` | ✅ `Object.values().sort()` | ❌ Tidak perlu |
| Sort di awal? | ❌ Tidak | ❌ Tidak | ✅ `[...arr].sort()` |
| Jumlah Loop | 2 (nested) | 1 | 1 (+ sort internal) |
| Readability | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Efisiensi | 🔴 Lambat (O(n²)) | 🟢 Cepat (O(n)) + sort | 🟢 Cepat (O(n log n)) |

> [!TIP]
> 🏆 **Rekomendasi:**
> - **V2 (Object Grouping)** — Paling *clean*, paling efisien untuk kasus umum. Ini adalah **best practice** yang paling sering digunakan di industri.
> - **V3 (Sort-First)** — Pendekatan cerdas yang memanfaatkan *insertion order* dari Object key. Cocok jika kamu lebih suka mengurutkan data di awal.
> - **V1 (Nested Loop)** — Bagus untuk latihan memahami konsep dasar nested loop dan flag, tapi kurang efisien di skala besar.

---

<a name="naming"></a>

## 🏷️ Naming Convention

| Lokasi / Peran | ❌ Bad | ✅ Good | Alasan |
|---|---|---|---|
| Penampung Hasil (Array) | `res`, `arr`, `r` | `result` | Deskriptif — ini adalah hasil akhir yang dikembalikan |
| Penampung Hasil (Object) | `obj`, `o`, `groupes` | `groups` | Jamak karena berisi banyak kelompok. Gunakan ejaan Inggris yang baku |
| Elemen Tunggal Hewan | `x`, `item`, `a` | `animal` | Bentuk singular dari `animals` — konvensi standar `for...of` |
| Huruf Penanda | `c`, `huruf` | `firstChar` | camelCase, gabungan `first` + `Char` — langsung jelas artinya |
| Bendera Penanda | `cek`, `flag` | `isFound` | Standar industri: boolean diawali `is`, `has`, `should` |
| Sub-array Grup | `i`, `g`, `sub` | `group` | Singular dari `groups` — merepresentasikan satu kelompok |
| Array yang Sudah Diurutkan | `animals` (bentrok!) | `sortedAnimals` | Tambahkan prefix `sorted` agar tidak bentrok dengan parameter |

> [!IMPORTANT]
> 🔔 **Kapan `i` Boleh Dipakai?**
>
> Variabel satu huruf seperti `i`, `j`, `k` **hanya** lazim digunakan pada loop bertipe:
> ```javascript
> for (let i = 0; i < array.length; i++) { ... }
> ```
> Karena kita sudah memakai modern `for...of`, kita punya kemewahan untuk menamai elemennya dengan kata benda yang deskriptif!

---

<a name="gotchas"></a>

## ⚠️ Gotchas & Peringatan

> [!CAUTION]
> 🔴 **Gotcha 1 — Posisi `if (!isFound)` di Dalam Loop (V1)**
>
> ```javascript
> // ❌ SALAH — Di dalam loop pencarian
> for (const group of result) {
>   if (group[0][0] === firstChar) { ... }
>   if (!isFound) result.push([animal]); // BUG! Buat grup baru tiap iterasi!
> }
>
> // ✅ BENAR — Di luar loop pencarian
> for (const group of result) {
>   if (group[0][0] === firstChar) { ... }
> }
> if (!isFound) result.push([animal]); // Cek setelah SEMUA grup dicek
> ```
>
> **Analogi:** Jangan beli baju baru setelah baru membuka 1 laci! Cek SEMUA laci dulu, baru putuskan.

---

> [!WARNING]
> 🟡 **Gotcha 2 — Bentrok Nama Variabel (Redeclaration Error)**
>
> ```javascript
> function groupAnimals(animals) {
>   const animals = [...animals].sort(); // ❌ SyntaxError! Nama bentrok dengan parameter
>   const sortedAnimals = [...animals].sort(); // ✅ Gunakan nama baru
> }
> ```
>
> **Pelajaran:** Jangan pernah membuat variabel baru dengan nama yang sama dengan parameter fungsi.

---

> [!WARNING]
> 🟡 **Gotcha 3 — Lupa Mengakses Huruf Pertama dari Elemen Grup (V1)**
>
> ```javascript
> // ❌ SALAH — group[0] mengembalikan kata utuh ('ayam'), bukan huruf ('a')
> if (group[0] === firstChar) { ... }
>
> // ✅ BENAR — Ambil huruf pertama dari kata pertama di grup
> if (group[0][0] === firstChar) { ... }
> ```
>
> **Ingat:** `group` = `['ayam', 'anoa']`, maka `group[0]` = `'ayam'`, dan `group[0][0]` = `'a'`.

---

> [!NOTE]
> 💡 **Gotcha 4 — `result` Kosong Saat Awal (V1)**
>
> Saat `result` masih `[]`, loop `for (const group of result)` **tidak akan berjalan sama sekali**. Ini berarti `isFound` tetap `false`, dan blok `if (!isFound)` akan membuat grup baru. Ini **bukan bug** — justru ini adalah perilaku yang kita inginkan! Hewan pertama akan selalu membuat grup baru.

---

> 📝 **Catatan Akhir:**
> Dokumentasi ini dibuat pada **24 Mei 2026** berdasarkan sesi mentoring langsung di **Google Antigravity**. Challenge berasal dari ujian Phase 0 Week 2 (RPN). Tiga versi solusi telah dibahas — dari pendekatan fundamental (nested loop) hingga best practice (object grouping).
